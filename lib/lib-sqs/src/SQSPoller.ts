import type {
  SQSClient as SQSClientType,
  Message as SQSMessage,
  MessageSystemAttributeName,
} from "@aws-sdk/client-sqs";
import {
  SQSClient,
  ReceiveMessageCommand,
  DeleteMessageBatchCommand,
  ChangeMessageVisibilityCommand,
} from "@aws-sdk/client-sqs";

import type {
  PollerConfig,
  PollerStats,
  SerializablePollerStats,
  SQSPollerEvents,
  SQSPollerEventName,
  PollerMessage,
} from "./types";
import { Message } from "./Message";
import type { MessageCallbacks } from "./Message";
import { PollerError, DeleteError, TimeoutError, VisibilityExtensionError } from "./errors";

const DEFAULTS = {
  receiveWaitTimeMs: 20_000,
  receiveBatchSize: 10,
  activePollIntervalMs: 0,
  idlePollIntervalMs: 0,
  maxConcurrency: 10,
  deleteMessages: true,
  deleteBatchSize: 10,
  deleteWaitMs: 2_000,
  backoffMs: 1_000,
  maxBackoffMs: 30_000,
  shutdownTimeoutMs: 30_000,
  extendTimeout: false,
  extendTimeoutAdvanceMs: 5_000,
  maxTimeoutExtensionMs: 43_200_000,
} as const;

const MIN_POLL_INTERVAL_MS = 100;

/** @internal */
interface ResolvedConfig {
  queueUrl: string;
  receiveWaitTimeMs: number;
  receiveBatchSize: number;
  activePollIntervalMs: number;
  idlePollIntervalMs: number;
  maxConcurrency: number;
  deleteMessages: boolean;
  deleteBatchSize: number;
  deleteWaitMs: number;
  backoffMs: number;
  maxBackoffMs: number;
  shutdownTimeoutMs: number;
  extendTimeout: boolean;
  extendTimeoutAdvanceMs: number;
  maxTimeoutExtensionMs: number;
  visibilityTimeoutMs: number | undefined;
  idleTimeoutMs: number | undefined;
  beforeRequest: ((stats: PollerStats) => void | Promise<void>) | undefined;
  systemAttributeNames: MessageSystemAttributeName[] | undefined;
  messageAttributeNames: string[] | undefined;
}

/**
 * State for one start()-to-stopped cycle, so a run that is still shutting down never
 * reads or clears state that belongs to a newer run.
 * @internal
 */
interface Run {
  /** Aborts this run's in-flight receive and any delay it is waiting on. */
  readonly ac: AbortController;
  /** Aborted by `stop(false)`, to cut a graceful shutdown short. */
  readonly hard: AbortController;
  stopping: boolean;
  graceful: boolean;
  finished: boolean;
  consecutiveErrors: number;
  inFlight: number;
  drainResolvers: Array<() => void>;
  readonly receiptHandles: Set<string>;
  readonly done: Promise<void>;
  readonly resolveDone: () => void;
  readonly previous: Promise<void> | undefined;
  iterator?: AsyncGenerator<PollerMessage, void, undefined>;
}

function createRun(previous: Run | null): Run {
  let resolveDone: () => void = () => {};
  const done = new Promise<void>((resolve) => {
    resolveDone = resolve;
  });
  return {
    ac: new AbortController(),
    hard: new AbortController(),
    stopping: false,
    graceful: true,
    finished: false,
    consecutiveErrors: 0,
    inFlight: 0,
    drainResolvers: [],
    receiptHandles: new Set(),
    done,
    resolveDone,
    previous: previous?.done,
  };
}

const toError = (err: unknown): Error => (err instanceof Error ? err : new PollerError(String(err)));

/**
 * Managed long-polling loop for SQS queues with auto-delete, backoff,
 * visibility heartbeat, and graceful shutdown.
 *
 * Two consumption models (mutually exclusive):
 * 1. Event-based: `poller.on("message", handler); poller.start();`
 * 2. Async iteration: `for await (const msg of poller) { ... }`
 *
 * In async iteration, each message is auto-deleted when the loop advances. Exiting
 * early (`break`, `return`, or a throw) leaves the current message undeleted; call
 * `msg.enqueueDelete()` first if it was processed.
 *
 * @public
 */
export class SQSPoller implements AsyncIterable<PollerMessage> {
  private readonly _client: SQSClientType;
  private readonly _config: ResolvedConfig;
  private readonly _stats: PollerStats = {
    requestCount: 0,
    receivedMessageCount: 0,
    deletedMessageCount: 0,
    errorCount: 0,
    lastMessageReceivedAt: null,
    pollingStartedAt: null,
    pollingStoppedAt: null,
  };

  private _run: Run | null = null;
  private readonly _externalSignal?: AbortSignal;

  private _deleteBatch: Message[] = [];
  private _deleteTimer: ReturnType<typeof setTimeout> | null = null;
  private _pendingFlushes: Promise<void>[] = [];
  private readonly _heartbeatTimers = new Map<string, ReturnType<typeof setTimeout>>();
  private readonly _heartbeatsInFlight = new Map<string, Promise<unknown>>();
  private readonly _listeners: { [K in SQSPollerEventName]: Array<SQSPollerEvents[K]> } = {
    message: [],
    empty: [],
    idle: [],
    stopped: [],
    error: [],
    timeoutExtended: [],
    heartbeatExpired: [],
  };

  public constructor(config: PollerConfig) {
    if (!config.queueUrl) {
      throw new PollerError("queueUrl is required");
    }
    this._client = config.client ?? new SQSClient(config.clientConfig ?? {});

    const batchSize = config.receiveBatchSize ?? DEFAULTS.receiveBatchSize;
    if (batchSize < 1 || batchSize > 10 || !Number.isInteger(batchSize)) {
      throw new PollerError("receiveBatchSize must be an integer between 1 and 10");
    }

    const deleteBatchSize = config.deleteBatchSize ?? DEFAULTS.deleteBatchSize;
    if (deleteBatchSize < 1 || deleteBatchSize > 10 || !Number.isInteger(deleteBatchSize)) {
      throw new PollerError("deleteBatchSize must be an integer between 1 and 10");
    }

    const receiveWaitTimeMs = config.receiveWaitTimeMs ?? DEFAULTS.receiveWaitTimeMs;
    if (receiveWaitTimeMs < 0 || receiveWaitTimeMs > 20_000) {
      throw new PollerError("receiveWaitTimeMs must be between 0 and 20000");
    }

    const maxConcurrency = config.maxConcurrency ?? DEFAULTS.maxConcurrency;
    if (!Number.isInteger(maxConcurrency) || maxConcurrency < 1) {
      throw new PollerError("maxConcurrency must be a positive integer");
    }

    if (config.extendTimeout) {
      if (config.visibilityTimeoutMs == null) {
        throw new PollerError("visibilityTimeoutMs is required when extendTimeout is true");
      }
      if ((config.extendTimeoutAdvanceMs ?? DEFAULTS.extendTimeoutAdvanceMs) >= config.visibilityTimeoutMs) {
        throw new PollerError("extendTimeoutAdvanceMs must be less than visibilityTimeoutMs");
      }
    }

    this._config = {
      queueUrl: config.queueUrl,
      receiveWaitTimeMs,
      receiveBatchSize: batchSize,
      activePollIntervalMs: config.activePollIntervalMs ?? DEFAULTS.activePollIntervalMs,
      idlePollIntervalMs: config.idlePollIntervalMs ?? DEFAULTS.idlePollIntervalMs,
      maxConcurrency,
      deleteMessages: config.deleteMessages ?? DEFAULTS.deleteMessages,
      deleteBatchSize,
      deleteWaitMs: config.deleteWaitMs ?? DEFAULTS.deleteWaitMs,
      backoffMs: config.backoffMs ?? DEFAULTS.backoffMs,
      maxBackoffMs: config.maxBackoffMs ?? DEFAULTS.maxBackoffMs,
      shutdownTimeoutMs: config.shutdownTimeoutMs ?? DEFAULTS.shutdownTimeoutMs,
      extendTimeout: config.extendTimeout ?? DEFAULTS.extendTimeout,
      extendTimeoutAdvanceMs: config.extendTimeoutAdvanceMs ?? DEFAULTS.extendTimeoutAdvanceMs,
      maxTimeoutExtensionMs: config.maxTimeoutExtensionMs ?? DEFAULTS.maxTimeoutExtensionMs,
      visibilityTimeoutMs: config.visibilityTimeoutMs,
      idleTimeoutMs: config.idleTimeoutMs,
      beforeRequest: config.beforeRequest,
      systemAttributeNames: config.systemAttributeNames,
      messageAttributeNames: config.messageAttributeNames,
    };

    this._externalSignal = config.abortSignal;
    if (this._externalSignal) {
      this._externalSignal.addEventListener(
        "abort",
        () => {
          void this.stop();
        },
        { once: true }
      );
    }
  }

  public get running(): boolean {
    return this._run !== null && !this._run.stopping;
  }
  public get inFlight(): number {
    return this._run?.inFlight ?? 0;
  }
  public getStats(): Readonly<PollerStats> {
    return { ...this._stats };
  }

  public toJSON(): SerializablePollerStats {
    const now = new Date();
    const s = this._stats.pollingStartedAt;
    return {
      requestCount: this._stats.requestCount,
      receivedMessageCount: this._stats.receivedMessageCount,
      deletedMessageCount: this._stats.deletedMessageCount,
      errorCount: this._stats.errorCount,
      lastMessageReceivedAt: this._stats.lastMessageReceivedAt?.toISOString() ?? null,
      pollingStartedAt: s?.toISOString() ?? null,
      pollingStoppedAt: this._stats.pollingStoppedAt?.toISOString() ?? null,
      pollingDurationMs: s ? (this._stats.pollingStoppedAt ?? now).getTime() - s.getTime() : 0,
    };
  }

  public toString(): string {
    const s = this._stats;
    return `SQSPoller(${this.running ? "running" : "stopped"}, requests=${s.requestCount}, received=${s.receivedMessageCount}, deleted=${s.deletedMessageCount}, errors=${s.errorCount}, inFlight=${this.inFlight})`;
  }

  /** Register a listener. Returns a function that removes it. */
  public on<K extends SQSPollerEventName>(event: K, listener: SQSPollerEvents[K]): () => void {
    this._listeners[event].push(listener);
    return () => {
      this.off(event, listener);
    };
  }

  /** Remove a listener, or all listeners for an event if `listener` is omitted. */
  public off<K extends SQSPollerEventName>(event: K, listener?: SQSPollerEvents[K]): this {
    if (!listener) {
      this._listeners[event] = [];
      return this;
    }
    const arr = this._listeners[event];
    const idx = arr.indexOf(listener);
    if (idx !== -1) {
      arr.splice(idx, 1);
    }
    return this;
  }

  /** Start polling. Non-blocking. */
  public start(): void {
    this._assertCanStart("Poller is already running");
    const run = createRun(this._run);
    this._run = run;
    void this._pollLoop(run);
  }

  /**
   * Stop polling, and resolve once this run has shut down.
   *
   * @param graceful - When `true`, waits up to `shutdownTimeoutMs` for in-flight work (handlers
   *   in event mode, or the current loop body in async iteration), then flushes pending deletes.
   *   When `false`, stops without waiting; calling it during a graceful shutdown cuts that short.
   *   Don't `await` this from inside a `message` handler or a `for await` body, since shutdown
   *   waits for that work to finish. Use `void poller.stop()`, or `break`, instead.
   * @returns The final stats. Does nothing if the poller isn't running.
   */
  public async stop(graceful = true): Promise<PollerStats> {
    const run = this._run;
    if (!run) {
      return { ...this._stats };
    }
    run.stopping = true;
    run.ac.abort();
    if (!graceful) {
      run.graceful = false;
      run.hard.abort();
    }
    if (run.iterator) {
      // A paused consumer gets until shutdownTimeoutMs to advance; after that it's treated as abandoned.
      const outcome = run.graceful ? await this._waitFor(run.done, run) : "hard";
      if (outcome === "timeout") {
        this._emitShutdownTimeout("the async iterator was not advanced");
      }
      if (outcome !== "done") {
        await run.iterator.return(undefined);
      }
    }
    await run.done;
    return { ...this._stats };
  }

  /**
   * Exiting the loop early (`break`, `return`, or a throw) does not auto-delete the
   * current message, since the three are indistinguishable here. Call
   * `msg.enqueueDelete()` before exiting if the message was processed.
   */
  public [Symbol.asyncIterator](): AsyncGenerator<PollerMessage, void, undefined> {
    const ref: { gen?: AsyncGenerator<PollerMessage, void, undefined> } = {};
    ref.gen = this._iterate(ref);
    return ref.gen;
  }

  private async *_iterate(ref: {
    gen?: AsyncGenerator<PollerMessage, void, undefined>;
  }): AsyncGenerator<PollerMessage, void, undefined> {
    this._assertCanStart("Poller is already running or an open iterator exists");
    const run = createRun(this._run);
    run.iterator = ref.gen;
    this._run = run;
    try {
      await this._beginRun(run);
      while (!run.stopping && !this._isAborted(run)) {
        let batch: Message[] = [];
        try {
          if (!(await this._runBeforeRequest(run))) {
            break;
          }
          const messages = await this._receiveMessages(run);
          run.consecutiveErrors = 0;
          if (messages.length === 0) {
            if (await this._handleEmpty(run)) {
              break;
            }
            continue;
          }
          this._recordReceived(messages.length);
          // Heartbeat the whole batch, so later messages stay hidden while earlier ones are processed.
          batch = messages.map((raw) => this._wrapMessage(raw, run));
          for (const msg of batch) {
            this._startHeartbeat(msg, run);
          }
        } catch (err) {
          if (this._isAborted(run)) {
            break;
          }
          await this._handlePollError(err, run);
          continue;
        }
        // Outside the try above, so a consumer's iterator.throw() propagates rather than counting as a poll error.
        for (const msg of batch) {
          if (run.stopping || this._isAborted(run)) {
            break;
          }
          yield msg;
          void this._stopHeartbeat(msg.receiptHandle, run);
          if (this._config.deleteMessages && !msg.handled) {
            msg.enqueueDelete();
          }
        }
        if (this._config.activePollIntervalMs > 0) {
          await this._delay(this._config.activePollIntervalMs, run);
        }
      }
    } finally {
      await this._teardown(run);
    }
  }

  // --- Run lifecycle ---

  private _assertCanStart(activeMessage: string): void {
    if (this._run && !this._run.stopping) {
      throw new PollerError(activeMessage);
    }
    if (this._externalSignal?.aborted) {
      throw new PollerError("abortSignal is already aborted");
    }
  }

  /** A run started while the previous one is still shutting down waits for it to finish. */
  private async _beginRun(run: Run): Promise<void> {
    if (run.previous) {
      await run.previous;
    }
    this._stats.pollingStartedAt = new Date();
    this._stats.pollingStoppedAt = null;
  }

  private async _teardown(run: Run): Promise<void> {
    await this._stopHeartbeats(run);
    // A deferred enqueue can add to the batch while a flush is running, so drain until both are empty.
    do {
      await this._flushDeleteBatch();
      await this._awaitPendingFlushes();
    } while (this._deleteBatch.length > 0);
    run.stopping = true;
    run.finished = true;
    this._stats.pollingStoppedAt = new Date();
    // Cleared before `stopped` fires, so a listener can call stop() or start() without re-entering this run.
    if (this._run === run) {
      this._run = null;
    }
    run.resolveDone();
    this._emit("stopped", { ...this._stats });
  }

  /** Resolves with how `work` ended: finished, timed out after shutdownTimeoutMs, or cut short by stop(false). */
  private _waitFor(work: Promise<void>, run: Run): Promise<"done" | "timeout" | "hard"> {
    return new Promise((resolve) => {
      if (run.hard.signal.aborted) {
        resolve("hard");
        return;
      }
      let timer: ReturnType<typeof setTimeout> | undefined;
      function finish(outcome: "done" | "timeout" | "hard") {
        clearTimeout(timer);
        run.hard.signal.removeEventListener("abort", onHard);
        resolve(outcome);
      }
      function onHard() {
        finish("hard");
      }
      timer = setTimeout(() => finish("timeout"), this._config.shutdownTimeoutMs);
      run.hard.signal.addEventListener("abort", onHard, { once: true });
      void work.then(() => finish("done"));
    });
  }

  private async _waitForDrain(run: Run): Promise<void> {
    if (run.inFlight === 0) {
      return;
    }
    const drained = new Promise<void>((resolve) => run.drainResolvers.push(resolve));
    if ((await this._waitFor(drained, run)) === "timeout") {
      this._emitShutdownTimeout(`${run.inFlight} message(s) were still in flight`);
    }
  }

  private _emitShutdownTimeout(reason: string): void {
    this._stats.errorCount++;
    this._emit(
      "error",
      new TimeoutError(
        `Shutdown timed out because ${reason}. If a handler or loop body awaits stop(), use \`void poller.stop()\` instead.`,
        this._config.shutdownTimeoutMs
      )
    );
  }

  // --- Poll loop (event-based) ---

  private async _pollLoop(run: Run): Promise<void> {
    await this._beginRun(run);
    while (!run.stopping && !this._isAborted(run)) {
      try {
        while (!run.stopping && run.inFlight >= this._config.maxConcurrency) {
          await this._delay(50, run);
        }
        if (run.stopping || this._isAborted(run)) {
          break;
        }
        if (!(await this._runBeforeRequest(run))) {
          break;
        }
        const messages = await this._receiveMessages(
          run,
          Math.min(this._config.receiveBatchSize, this._config.maxConcurrency - run.inFlight)
        );
        run.consecutiveErrors = 0;
        if (messages.length === 0) {
          if (await this._handleEmpty(run)) {
            break;
          }
          continue;
        }
        this._recordReceived(messages.length);
        for (const raw of messages) {
          const msg = this._wrapMessage(raw, run);
          run.inFlight++;
          void this._processMessage(msg, run).finally(() => {
            run.inFlight--;
            if (run.inFlight === 0) {
              for (const resolve of run.drainResolvers) {
                resolve();
              }
              run.drainResolvers = [];
            }
          });
        }
        if (this._config.activePollIntervalMs > 0) {
          await this._delay(this._config.activePollIntervalMs, run);
        }
      } catch (err) {
        if (this._isAborted(run)) {
          break;
        }
        await this._handlePollError(err, run);
      }
    }
    if (run.graceful) {
      await this._waitForDrain(run);
    }
    await this._teardown(run);
  }

  private async _processMessage(msg: Message, run: Run): Promise<void> {
    this._startHeartbeat(msg, run);
    try {
      const hasListeners = this._listeners.message.length > 0;
      if (hasListeners) {
        await this._emitAsync("message", msg);
      }
      if (this._config.deleteMessages && !msg.handled && hasListeners) {
        msg.enqueueDelete();
      }
    } catch (err) {
      this._stats.errorCount++;
      this._emit("error", toError(err));
    } finally {
      void this._stopHeartbeat(msg.receiptHandle, run);
    }
  }

  // --- Shared loop steps ---

  /** Returns false if `beforeRequest` threw or rejected, which stops the run. */
  private async _runBeforeRequest(run: Run): Promise<boolean> {
    if (!this._config.beforeRequest) {
      return true;
    }
    try {
      await this._config.beforeRequest(this.getStats());
      return true;
    } catch (err) {
      run.stopping = true;
      this._emit("error", toError(err));
      return false;
    }
  }

  /** Returns true if the idle timeout was reached, which stops the run. */
  private async _handleEmpty(run: Run): Promise<boolean> {
    this._emit("empty");
    if (this._checkIdleTimeout()) {
      run.stopping = true;
      this._emit("idle");
      return true;
    }
    const delayMs = this._effectiveIdlePollInterval();
    if (delayMs > 0) {
      await this._delay(delayMs, run);
    }
    return false;
  }

  private async _handlePollError(err: unknown, run: Run): Promise<void> {
    run.consecutiveErrors++;
    this._stats.errorCount++;
    this._emit("error", toError(err));
    await this._backoff(run);
  }

  private _recordReceived(count: number): void {
    this._stats.receivedMessageCount += count;
    this._stats.lastMessageReceivedAt = new Date();
  }

  // --- SQS calls ---

  private async _receiveMessages(run: Run, maxMessages?: number): Promise<SQSMessage[]> {
    this._stats.requestCount++;
    const result = await this._client.send(
      new ReceiveMessageCommand({
        QueueUrl: this._config.queueUrl,
        WaitTimeSeconds: Math.floor(this._config.receiveWaitTimeMs / 1000),
        MaxNumberOfMessages: maxMessages ?? this._config.receiveBatchSize,
        VisibilityTimeout:
          this._config.visibilityTimeoutMs != null ? Math.ceil(this._config.visibilityTimeoutMs / 1000) : undefined,
        MessageSystemAttributeNames: this._config.systemAttributeNames,
        MessageAttributeNames: this._config.messageAttributeNames,
      }),
      { abortSignal: run.ac.signal }
    );
    return result.Messages ?? [];
  }

  // --- Delete batching ---

  private _enqueueDelete(msg: Message, run: Run): void {
    this._deleteBatch.push(msg);
    // After teardown there's no later flush to batch with, so send right away.
    if (run.finished || this._deleteBatch.length >= this._config.deleteBatchSize) {
      this._trackFlush(this._flushDeleteBatch());
    } else if (!this._deleteTimer) {
      this._deleteTimer = setTimeout(() => {
        this._deleteTimer = null;
        this._trackFlush(this._flushDeleteBatch());
      }, this._config.deleteWaitMs);
    }
  }

  private async _flushDeleteBatch(): Promise<void> {
    if (this._deleteTimer) {
      clearTimeout(this._deleteTimer);
      this._deleteTimer = null;
    }
    if (this._deleteBatch.length === 0) {
      return;
    }
    const batch = this._deleteBatch.splice(0, this._config.deleteBatchSize);
    const idMap = new Map<string, string>();
    const entries = batch.map((m, i) => {
      const id = String(i);
      idMap.set(id, m.messageId);
      return { Id: id, ReceiptHandle: m.receiptHandle };
    });
    try {
      const result = await this._client.send(
        new DeleteMessageBatchCommand({ QueueUrl: this._config.queueUrl, Entries: entries })
      );
      this._stats.deletedMessageCount += result.Successful?.length ?? 0;
      if (result.Failed?.length) {
        this._stats.errorCount += result.Failed.length;
        const mapped = result.Failed.map((f) => ({ ...f, MessageId: idMap.get(f.Id!) ?? f.Id }));
        this._emit(
          "error",
          new DeleteError(
            `Failed to delete ${result.Failed.length} message(s): ${mapped.map((f) => f.MessageId).join(", ")}`,
            result.Failed,
            mapped.map((f) => f.MessageId!)
          )
        );
      }
    } catch (err) {
      this._stats.errorCount++;
      this._emit("error", err instanceof Error ? err : new PollerError(String(err)));
    }
    if (this._deleteBatch.length > 0) {
      await this._flushDeleteBatch();
    }
  }

  private _trackFlush(p: Promise<void>): void {
    this._pendingFlushes.push(p);
    p.finally(() => {
      const i = this._pendingFlushes.indexOf(p);
      if (i !== -1) {
        this._pendingFlushes.splice(i, 1);
      }
    });
  }

  private async _awaitPendingFlushes(): Promise<void> {
    while (this._pendingFlushes.length > 0) {
      await Promise.all([...this._pendingFlushes]);
    }
  }

  // --- Heartbeat ---

  private _startHeartbeat(msg: Message, run: Run): void {
    if (!this._config.extendTimeout || this._config.visibilityTimeoutMs == null) {
      return;
    }
    const intervalMs = this._config.visibilityTimeoutMs - this._config.extendTimeoutAdvanceMs;
    if (intervalMs <= 0) {
      return;
    }
    run.receiptHandles.add(msg.receiptHandle);
    const startTime = Date.now();
    const scheduleNext = () => {
      const timer = setTimeout(async () => {
        if (Date.now() - startTime > this._config.maxTimeoutExtensionMs) {
          this._heartbeatTimers.delete(msg.receiptHandle);
          run.receiptHandles.delete(msg.receiptHandle);
          this._emit("heartbeatExpired", msg);
          return;
        }
        try {
          const extension = this._client.send(
            new ChangeMessageVisibilityCommand({
              QueueUrl: this._config.queueUrl,
              ReceiptHandle: msg.receiptHandle,
              VisibilityTimeout: Math.ceil(this._config.visibilityTimeoutMs! / 1000),
            })
          );
          this._heartbeatsInFlight.set(msg.receiptHandle, extension);
          await extension;
          this._emit("timeoutExtended", msg);
        } catch (err) {
          this._stats.errorCount++;
          this._emit(
            "error",
            new VisibilityExtensionError(`Failed to extend visibility for message ${msg.messageId}`, msg.messageId, {
              cause: err instanceof Error ? err : undefined,
            })
          );
        } finally {
          this._heartbeatsInFlight.delete(msg.receiptHandle);
        }
        if (this._heartbeatTimers.has(msg.receiptHandle)) {
          scheduleNext();
        }
      }, intervalMs);
      this._heartbeatTimers.set(msg.receiptHandle, timer);
    };
    scheduleNext();
  }

  /** Resolves once any extension request already in flight for this message settles. */
  private async _stopHeartbeat(receiptHandle: string, run: Run): Promise<void> {
    const t = this._heartbeatTimers.get(receiptHandle);
    if (t) {
      clearTimeout(t);
      this._heartbeatTimers.delete(receiptHandle);
    }
    await this._heartbeatsInFlight.get(receiptHandle)?.catch(() => {});
    // Untracked only after the extension settles, so teardown still waits for it.
    run.receiptHandles.delete(receiptHandle);
  }

  /** Stops this run's heartbeats only, and waits out their in-flight extensions so none land after `stopped`. */
  private async _stopHeartbeats(run: Run): Promise<void> {
    await Promise.all([...run.receiptHandles].map((rh) => this._stopHeartbeat(rh, run)));
  }

  // --- Utilities ---

  private _wrapMessage(raw: SQSMessage, run: Run): Message {
    const callbacks: MessageCallbacks = {
      // Enqueue once any in-flight extension settles, so the extension can't land after the delete.
      enqueueDelete: (m) =>
        this._trackFlush(this._stopHeartbeat(m.receiptHandle, run).then(() => this._enqueueDelete(m, run))),
      keep: (rh) => void this._stopHeartbeat(rh, run),
      release: (rh) =>
        this._stopHeartbeat(rh, run)
          .then(() =>
            this._client.send(
              new ChangeMessageVisibilityCommand({
                QueueUrl: this._config.queueUrl,
                ReceiptHandle: rh,
                VisibilityTimeout: 0,
              })
            )
          )
          .then(() => {}),
      changeVisibility: (rh, ms) =>
        this._stopHeartbeat(rh, run)
          .then(() =>
            this._client.send(
              new ChangeMessageVisibilityCommand({
                QueueUrl: this._config.queueUrl,
                ReceiptHandle: rh,
                VisibilityTimeout: Math.ceil(ms / 1000),
              })
            )
          )
          .then(() => {}),
    };
    return new Message(raw, callbacks);
  }

  private _isAborted(run: Run): boolean {
    return run.ac.signal.aborted || this._externalSignal?.aborted === true;
  }

  private _checkIdleTimeout(): boolean {
    if (this._config.idleTimeoutMs == null) {
      return false;
    }
    // Take the later of the two so a restart doesn't inherit the previous run's last message.
    const started = this._stats.pollingStartedAt?.getTime() ?? 0;
    const lastMessage = this._stats.lastMessageReceivedAt?.getTime() ?? 0;
    const since = Math.max(started, lastMessage);
    return since > 0 && Date.now() - since > this._config.idleTimeoutMs;
  }

  private _effectiveIdlePollInterval(): number {
    if (this._config.idlePollIntervalMs > 0) {
      return this._config.idlePollIntervalMs;
    }
    return this._config.receiveWaitTimeMs === 0 ? MIN_POLL_INTERVAL_MS : 0;
  }

  private async _backoff(run: Run): Promise<void> {
    await this._delay(
      Math.min(this._config.backoffMs * 2 ** (run.consecutiveErrors - 1), this._config.maxBackoffMs),
      run
    );
  }

  private _delay(ms: number, run: Run): Promise<void> {
    return new Promise((r) => {
      const signal = run.ac.signal;
      if (signal.aborted) {
        r();
        return;
      }
      const onAbort = () => {
        clearTimeout(timer);
        r();
      };
      const timer = setTimeout(() => {
        signal.removeEventListener("abort", onAbort);
        r();
      }, ms);
      signal.addEventListener("abort", onAbort, { once: true });
    });
  }

  private _emit<K extends SQSPollerEventName>(event: K, ...args: Parameters<SQSPollerEvents[K]>): void {
    for (const fn of this._listeners[event]) {
      try {
        (fn as (...a: unknown[]) => void)(...args);
      } catch {}
    }
  }

  private async _emitAsync<K extends SQSPollerEventName>(
    event: K,
    ...args: Parameters<SQSPollerEvents[K]>
  ): Promise<void> {
    for (const fn of this._listeners[event]) {
      await (fn as (...a: unknown[]) => unknown)(...args);
    }
  }
}

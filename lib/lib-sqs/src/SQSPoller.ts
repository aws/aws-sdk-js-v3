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
  beforeRequest: ((stats: PollerStats) => void) | undefined;
  systemAttributeNames: MessageSystemAttributeName[] | undefined;
  messageAttributeNames: string[] | undefined;
}

/**
 * Managed long-polling loop for SQS queues with auto-delete, backoff,
 * visibility heartbeat, and graceful shutdown.
 *
 * Two consumption models (mutually exclusive):
 * 1. Event-based: `poller.on("message", handler); poller.start();`
 * 2. Async iteration: `for await (const msg of poller) { ... }`
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

  private _running = false;
  private _iterating = false;
  private _gracefulStop = true;
  private _consecutiveErrors = 0;
  private _inFlightCount = 0;
  private _loopPromise: Promise<void> | null = null;
  private _activeIterator: AsyncGenerator<PollerMessage, void, undefined> | null = null;
  private _internalAc: AbortController = new AbortController();
  private readonly _externalSignal?: AbortSignal;

  private _deleteBatch: Message[] = [];
  private _deleteTimer: ReturnType<typeof setTimeout> | null = null;
  private _pendingFlushes: Promise<void>[] = [];
  private readonly _heartbeatTimers = new Map<string, ReturnType<typeof setTimeout>>();
  private readonly _listeners: { [K in SQSPollerEventName]: Array<SQSPollerEvents[K]> } = {
    message: [],
    empty: [],
    idle: [],
    stopped: [],
    error: [],
    timeoutExtended: [],
    heartbeatExpired: [],
  };
  private _drainResolvers: Array<() => void> = [];

  /** @public */
  public constructor(config: PollerConfig) {
    if (!config.queueUrl) throw new PollerError("queueUrl is required");
    this._client = config.client ?? new SQSClient(config.clientConfig ?? {});

    const batchSize = config.receiveBatchSize ?? DEFAULTS.receiveBatchSize;
    if (batchSize < 1 || batchSize > 10 || !Number.isInteger(batchSize))
      throw new PollerError("receiveBatchSize must be an integer between 1 and 10");

    const deleteBatchSize = config.deleteBatchSize ?? DEFAULTS.deleteBatchSize;
    if (deleteBatchSize < 1 || deleteBatchSize > 10 || !Number.isInteger(deleteBatchSize))
      throw new PollerError("deleteBatchSize must be an integer between 1 and 10");

    const receiveWaitTimeMs = config.receiveWaitTimeMs ?? DEFAULTS.receiveWaitTimeMs;
    if (receiveWaitTimeMs < 0 || receiveWaitTimeMs > 20_000)
      throw new PollerError("receiveWaitTimeMs must be between 0 and 20000");

    const maxConcurrency = config.maxConcurrency ?? DEFAULTS.maxConcurrency;
    if (!Number.isInteger(maxConcurrency) || maxConcurrency < 1)
      throw new PollerError("maxConcurrency must be a positive integer");

    if (config.extendTimeout) {
      if (config.visibilityTimeoutMs == null)
        throw new PollerError("visibilityTimeoutMs is required when extendTimeout is true");
      if ((config.extendTimeoutAdvanceMs ?? DEFAULTS.extendTimeoutAdvanceMs) >= config.visibilityTimeoutMs)
        throw new PollerError("extendTimeoutAdvanceMs must be less than visibilityTimeoutMs");
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
          this._running = false;
          this._internalAc.abort();
        },
        { once: true }
      );
    }
  }

  /** @public */ public get running(): boolean {
    return this._running;
  }
  /** @public */ public get inFlight(): number {
    return this._inFlightCount;
  }
  /** @public */ public getStats(): Readonly<PollerStats> {
    return { ...this._stats };
  }

  /** @public */
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

  /** @public */
  public toString(): string {
    const s = this._stats;
    return `SQSPoller(${this._running ? "running" : "stopped"}, requests=${s.requestCount}, received=${s.receivedMessageCount}, deleted=${s.deletedMessageCount}, errors=${s.errorCount}, inFlight=${this._inFlightCount})`;
  }

  /** Register a listener. Returns a function that removes it. @public */
  public on<K extends SQSPollerEventName>(event: K, listener: SQSPollerEvents[K]): () => void {
    this._listeners[event].push(listener);
    return () => {
      this.off(event, listener);
    };
  }

  /** Remove a listener, or all listeners for an event if `listener` is omitted. @public */
  public off<K extends SQSPollerEventName>(event: K, listener?: SQSPollerEvents[K]): this {
    if (!listener) {
      this._listeners[event] = [];
      return this;
    }
    const arr = this._listeners[event];
    const idx = arr.indexOf(listener);
    if (idx !== -1) arr.splice(idx, 1);
    return this;
  }

  /** Start polling. Non-blocking. @public */
  public start(): void {
    if (this._running) throw new PollerError("Poller is already running");
    if (this._iterating) throw new PollerError("Cannot call start() while an async iterator is active");
    this._running = true;
    this._gracefulStop = true;
    this._internalAc = new AbortController();
    this._stats.pollingStartedAt = new Date();
    this._stats.pollingStoppedAt = null;
    this._loopPromise = this._pollLoop();
  }

  /** Stop polling. @public */
  public async stop(graceful = true): Promise<PollerStats> {
    this._running = false;
    this._gracefulStop = graceful;
    this._internalAc.abort();
    if (this._loopPromise) {
      await this._loopPromise;
      this._loopPromise = null;
    } else if (this._activeIterator) {
      // Runs the generator's finally block even if the consumer is paused mid-message.
      await this._activeIterator.return(undefined);
    } else {
      this._stats.pollingStoppedAt = new Date();
      this._emit("stopped", { ...this._stats });
    }
    return { ...this._stats };
  }

  /**
   * Exiting the loop early (`break`, `return`, or a throw) does not auto-delete the
   * current message, since the three are indistinguishable here. Call
   * `msg.enqueueDelete()` before exiting if the message was processed.
   * @public
   */
  public [Symbol.asyncIterator](): AsyncGenerator<PollerMessage, void, undefined> {
    const ref: { gen?: AsyncGenerator<PollerMessage, void, undefined> } = {};
    ref.gen = this._iterate(ref);
    return ref.gen;
  }

  private async *_iterate(ref: {
    gen?: AsyncGenerator<PollerMessage, void, undefined>;
  }): AsyncGenerator<PollerMessage, void, undefined> {
    if (this._running || this._iterating) throw new PollerError("Poller is already running or an open iterator exists");
    this._running = true;
    this._iterating = true;
    this._gracefulStop = true;
    this._activeIterator = ref.gen ?? null;
    this._internalAc = new AbortController();
    this._stats.pollingStartedAt = new Date();
    this._stats.pollingStoppedAt = null;
    try {
      while (this._running && !this._isAborted()) {
        try {
          if (this._config.beforeRequest) {
            try {
              this._config.beforeRequest(this.getStats());
            } catch (err) {
              this._running = false;
              this._emit("error", err instanceof Error ? err : new PollerError(String(err)));
              break;
            }
          }
          const messages = await this._receiveMessages();
          this._consecutiveErrors = 0;
          if (messages.length === 0) {
            this._emit("empty");
            if (this._checkIdleTimeout()) {
              this._emit("idle");
              break;
            }
            const d = this._effectiveIdlePollInterval();
            if (d > 0) await this._delay(d);
            continue;
          }
          this._stats.receivedMessageCount += messages.length;
          this._stats.lastMessageReceivedAt = new Date();
          for (const raw of messages) {
            if (!this._running || this._isAborted()) break;
            const msg = this._wrapMessage(raw);
            this._startHeartbeat(msg);
            yield msg;
            this._stopHeartbeat(msg);
            if (this._config.deleteMessages && !msg.handled) msg.enqueueDelete();
          }
          if (this._config.activePollIntervalMs > 0) await this._delay(this._config.activePollIntervalMs);
        } catch (err) {
          if (this._isAborted()) break;
          this._consecutiveErrors++;
          this._stats.errorCount++;
          this._emit("error", err instanceof Error ? err : new PollerError(String(err)));
          await this._backoff();
        }
      }
    } finally {
      await this._flushDeleteBatch();
      await this._awaitPendingFlushes();
      this._clearAllHeartbeats();
      this._running = false;
      this._iterating = false;
      this._activeIterator = null;
      this._stats.pollingStoppedAt = new Date();
      this._emit("stopped", { ...this._stats });
    }
  }

  // --- Poll loop (event-based) ---

  private async _pollLoop(): Promise<void> {
    while (this._running && !this._isAborted()) {
      try {
        while (this._running && this._inFlightCount >= this._config.maxConcurrency) await this._delay(50);
        if (!this._running || this._isAborted()) break;
        if (this._config.beforeRequest) {
          try {
            this._config.beforeRequest(this.getStats());
          } catch (err) {
            this._running = false;
            this._emit("error", err instanceof Error ? err : new PollerError(String(err)));
            break;
          }
        }
        const messages = await this._receiveMessages(
          Math.min(this._config.receiveBatchSize, this._config.maxConcurrency - this._inFlightCount)
        );
        this._consecutiveErrors = 0;
        if (messages.length === 0) {
          this._emit("empty");
          if (this._checkIdleTimeout()) {
            this._running = false;
            this._emit("idle");
            break;
          }
          const d = this._effectiveIdlePollInterval();
          if (d > 0) await this._delay(d);
          continue;
        }
        this._stats.receivedMessageCount += messages.length;
        this._stats.lastMessageReceivedAt = new Date();
        for (const raw of messages) {
          const msg = this._wrapMessage(raw);
          this._inFlightCount++;
          this._processMessage(msg).finally(() => {
            this._inFlightCount--;
            if (this._inFlightCount === 0) {
              for (const r of this._drainResolvers) r();
              this._drainResolvers = [];
            }
          });
        }
        if (this._config.activePollIntervalMs > 0) await this._delay(this._config.activePollIntervalMs);
      } catch (err) {
        if (this._isAborted()) break;
        this._consecutiveErrors++;
        this._stats.errorCount++;
        this._emit("error", err instanceof Error ? err : new PollerError(String(err)));
        await this._backoff();
      }
    }
    if (this._gracefulStop) await this._waitForDrain(this._config.shutdownTimeoutMs);
    await this._flushDeleteBatch();
    await this._awaitPendingFlushes();
    this._clearAllHeartbeats();
    this._stats.pollingStoppedAt = new Date();
    this._loopPromise = null;
    this._emit("stopped", { ...this._stats });
  }

  private async _processMessage(msg: Message): Promise<void> {
    this._startHeartbeat(msg);
    try {
      const hasListeners = this._listeners.message.length > 0;
      if (hasListeners) await this._emitAsync("message", msg);
      if (this._config.deleteMessages && !msg.handled && hasListeners) msg.enqueueDelete();
    } catch (err) {
      this._stats.errorCount++;
      this._emit("error", err instanceof Error ? err : new PollerError(String(err)));
    } finally {
      this._stopHeartbeat(msg);
    }
  }

  // --- SQS calls ---

  private async _receiveMessages(maxMessages?: number): Promise<SQSMessage[]> {
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
      { abortSignal: this._internalAc.signal }
    );
    return result.Messages ?? [];
  }

  // --- Delete batching ---

  private _enqueueDelete(msg: Message): void {
    this._deleteBatch.push(msg);
    if (this._deleteBatch.length >= this._config.deleteBatchSize) {
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
    if (this._deleteBatch.length === 0) return;
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
    if (this._deleteBatch.length > 0) await this._flushDeleteBatch();
  }

  private _trackFlush(p: Promise<void>): void {
    this._pendingFlushes.push(p);
    p.finally(() => {
      const i = this._pendingFlushes.indexOf(p);
      if (i !== -1) this._pendingFlushes.splice(i, 1);
    });
  }

  private async _awaitPendingFlushes(): Promise<void> {
    while (this._pendingFlushes.length > 0) await Promise.all([...this._pendingFlushes]);
  }

  // --- Heartbeat ---

  private _startHeartbeat(msg: Message): void {
    if (!this._config.extendTimeout || this._config.visibilityTimeoutMs == null) return;
    const intervalMs = this._config.visibilityTimeoutMs - this._config.extendTimeoutAdvanceMs;
    if (intervalMs <= 0) return;
    const startTime = Date.now();
    const scheduleNext = () => {
      const timer = setTimeout(async () => {
        if (Date.now() - startTime > this._config.maxTimeoutExtensionMs) {
          this._heartbeatTimers.delete(msg.receiptHandle);
          this._emit("heartbeatExpired", msg);
          return;
        }
        try {
          await this._client.send(
            new ChangeMessageVisibilityCommand({
              QueueUrl: this._config.queueUrl,
              ReceiptHandle: msg.receiptHandle,
              VisibilityTimeout: Math.ceil(this._config.visibilityTimeoutMs! / 1000),
            })
          );
          this._emit("timeoutExtended", msg);
        } catch (err) {
          this._stats.errorCount++;
          this._emit(
            "error",
            new VisibilityExtensionError(`Failed to extend visibility for message ${msg.messageId}`, msg.messageId, {
              cause: err instanceof Error ? err : undefined,
            })
          );
        }
        if (this._heartbeatTimers.has(msg.receiptHandle)) scheduleNext();
      }, intervalMs);
      this._heartbeatTimers.set(msg.receiptHandle, timer);
    };
    scheduleNext();
  }

  private _stopHeartbeat(msg: Message): void {
    const t = this._heartbeatTimers.get(msg.receiptHandle);
    if (t) {
      clearTimeout(t);
      this._heartbeatTimers.delete(msg.receiptHandle);
    }
  }

  private _clearAllHeartbeats(): void {
    for (const t of this._heartbeatTimers.values()) clearTimeout(t);
    this._heartbeatTimers.clear();
  }

  // --- Utilities ---

  private _wrapMessage(raw: SQSMessage): Message {
    const callbacks: MessageCallbacks = {
      enqueueDelete: (m) => this._enqueueDelete(m),
      release: (rh) =>
        this._client
          .send(
            new ChangeMessageVisibilityCommand({
              QueueUrl: this._config.queueUrl,
              ReceiptHandle: rh,
              VisibilityTimeout: 0,
            })
          )
          .then(() => {}),
      changeVisibility: (rh, ms) =>
        this._client
          .send(
            new ChangeMessageVisibilityCommand({
              QueueUrl: this._config.queueUrl,
              ReceiptHandle: rh,
              VisibilityTimeout: Math.ceil(ms / 1000),
            })
          )
          .then(() => {}),
    };
    return new Message(raw, callbacks);
  }

  private _isAborted(): boolean {
    return this._internalAc.signal.aborted || this._externalSignal?.aborted === true;
  }

  private _checkIdleTimeout(): boolean {
    if (this._config.idleTimeoutMs == null) return false;
    // Take the later of the two so a restart doesn't inherit the previous run's last message.
    const started = this._stats.pollingStartedAt?.getTime() ?? 0;
    const lastMessage = this._stats.lastMessageReceivedAt?.getTime() ?? 0;
    const since = Math.max(started, lastMessage);
    return since > 0 && Date.now() - since > this._config.idleTimeoutMs;
  }

  private _effectiveIdlePollInterval(): number {
    if (this._config.idlePollIntervalMs > 0) return this._config.idlePollIntervalMs;
    return this._config.receiveWaitTimeMs === 0 ? MIN_POLL_INTERVAL_MS : 0;
  }

  private async _backoff(): Promise<void> {
    await this._delay(Math.min(this._config.backoffMs * 2 ** (this._consecutiveErrors - 1), this._config.maxBackoffMs));
  }

  private _delay(ms: number): Promise<void> {
    return new Promise((r) => {
      const signal = this._internalAc.signal;
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

  private async _waitForDrain(timeoutMs: number): Promise<void> {
    if (this._inFlightCount === 0) return;
    let th: ReturnType<typeof setTimeout> | undefined;
    try {
      await Promise.race([
        new Promise<void>((r) => this._drainResolvers.push(r)),
        new Promise<void>((r) => {
          th = setTimeout(r, timeoutMs);
        }),
      ]);
    } finally {
      if (th) clearTimeout(th);
    }
    if (this._inFlightCount > 0) {
      this._stats.errorCount++;
      this._emit(
        "error",
        new TimeoutError(`Shutdown drain timed out with ${this._inFlightCount} message(s) still in flight`, timeoutMs)
      );
    }
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
    for (const fn of this._listeners[event]) await (fn as (...a: unknown[]) => unknown)(...args);
  }
}

import type { SQSClient as SQSClientType, Message as SQSMessage } from "@aws-sdk/client-sqs";
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

/** Floor between empty polls when short polling, to avoid an unthrottled request loop. */
const MIN_POLL_INTERVAL_MS = 100;

/**
 * A managed long-polling loop for SQS queues with auto-delete, backoff,
 * visibility heartbeat, and graceful shutdown.
 *
 * Consume either by event (`on("message", handler)` + `start()`) or by async
 * iteration. The two modes are mutually exclusive — entering one while the
 * other is active throws.
 *
 * @public
 */
export class SQSPoller implements AsyncIterable<PollerMessage> {
  private readonly _client: SQSClientType;
  private readonly _config: Required<
    Pick<
      PollerConfig,
      | "queueUrl"
      | "receiveWaitTimeMs"
      | "receiveBatchSize"
      | "activePollIntervalMs"
      | "idlePollIntervalMs"
      | "maxConcurrency"
      | "deleteMessages"
      | "deleteBatchSize"
      | "deleteWaitMs"
      | "backoffMs"
      | "maxBackoffMs"
      | "shutdownTimeoutMs"
      | "extendTimeout"
      | "extendTimeoutAdvanceMs"
      | "maxTimeoutExtensionMs"
    >
  > &
    Pick<
      PollerConfig,
      "visibilityTimeoutMs" | "idleTimeoutMs" | "beforeRequest" | "systemAttributeNames" | "messageAttributeNames"
    >;

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

  private _internalAc: AbortController = new AbortController();
  private readonly _externalSignal?: AbortSignal;

  private _deleteBatch: Message[] = [];
  private _deleteTimer: ReturnType<typeof setTimeout> | null = null;

  // Heartbeat timers keyed by receiptHandle
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

  constructor(config: PollerConfig) {
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

    if (config.extendTimeout) {
      if (config.visibilityTimeoutMs == null) {
        throw new PollerError("visibilityTimeoutMs is required when extendTimeout is true");
      }
      const advance = config.extendTimeoutAdvanceMs ?? DEFAULTS.extendTimeoutAdvanceMs;
      if (advance >= config.visibilityTimeoutMs) {
        throw new PollerError("extendTimeoutAdvanceMs must be less than visibilityTimeoutMs");
      }
    }

    this._config = {
      queueUrl: config.queueUrl,
      receiveWaitTimeMs,
      receiveBatchSize: batchSize,
      activePollIntervalMs: config.activePollIntervalMs ?? DEFAULTS.activePollIntervalMs,
      idlePollIntervalMs: config.idlePollIntervalMs ?? DEFAULTS.idlePollIntervalMs,
      maxConcurrency: config.maxConcurrency ?? DEFAULTS.maxConcurrency,
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

  get running(): boolean {
    return this._running;
  }

  get inFlight(): number {
    return this._inFlightCount;
  }

  getStats(): Readonly<PollerStats> {
    return { ...this._stats };
  }

  toJSON(): SerializablePollerStats {
    const now = new Date();
    const started = this._stats.pollingStartedAt;
    return {
      requestCount: this._stats.requestCount,
      receivedMessageCount: this._stats.receivedMessageCount,
      deletedMessageCount: this._stats.deletedMessageCount,
      errorCount: this._stats.errorCount,
      lastMessageReceivedAt: this._stats.lastMessageReceivedAt?.toISOString() ?? null,
      pollingStartedAt: started?.toISOString() ?? null,
      pollingStoppedAt: this._stats.pollingStoppedAt?.toISOString() ?? null,
      pollingDurationMs: started ? (this._stats.pollingStoppedAt ?? now).getTime() - started.getTime() : 0,
    };
  }

  on<K extends SQSPollerEventName>(event: K, listener: SQSPollerEvents[K]): this {
    this._listeners[event].push(listener);
    return this;
  }

  off<K extends SQSPollerEventName>(event: K, listener: SQSPollerEvents[K]): this {
    const arr = this._listeners[event];
    const idx = arr.indexOf(listener);
    if (idx !== -1) arr.splice(idx, 1);
    return this;
  }

  /**
   * Start the polling loop. Non-blocking.
   * @throws {PollerError} If already running or if an async iterator is active.
   */
  start(): void {
    if (this._running) {
      throw new PollerError("Poller is already running");
    }
    if (this._iterating) {
      throw new PollerError("Cannot call start() while an async iterator is active");
    }
    this._running = true;
    this._gracefulStop = true;
    this._internalAc = new AbortController();
    this._stats.pollingStartedAt = new Date();
    this._stats.pollingStoppedAt = null;
    this._loopPromise = this._pollLoop();
  }

  /**
   * Stop the poller.
   * @param graceful - If `true`, waits for in-flight handlers and flushes
   *   pending deletes before resolving.  If `false`, stops immediately
   *   without waiting for in-flight handlers.
   * @returns The final stats.
   */
  async stop(graceful = true): Promise<PollerStats> {
    this._running = false;
    this._gracefulStop = graceful;
    this._internalAc.abort();

    if (this._loopPromise) {
      if (graceful) {
        await this._loopPromise;
      }
      // Non-graceful: the loop tears itself down, so don't await it.
      this._loopPromise = null;
    } else {
      // Never started, or already stopped by the loop itself.
      this._stats.pollingStoppedAt = new Date();
      this._emit("stopped", { ...this._stats });
    }
    return { ...this._stats };
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<PollerMessage, void, undefined> {
    if (this._running || this._iterating) {
      throw new PollerError("Poller is already running");
    }
    this._running = true;
    this._iterating = true;
    this._gracefulStop = true;
    this._internalAc = new AbortController();
    this._stats.pollingStartedAt = new Date();

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
            const idleDelay = this._effectiveIdlePollInterval();
            if (idleDelay > 0) {
              await this._delay(idleDelay);
            }
            continue;
          }

          this._stats.receivedMessageCount += messages.length;
          this._stats.lastMessageReceivedAt = new Date();

          for (const raw of messages) {
            const msg = this._wrapMessage(raw);
            this._startHeartbeat(msg);
            yield msg;
            this._stopHeartbeat(msg);
            if (this._config.deleteMessages && !msg.handled) {
              msg.enqueueDelete();
            }
          }

          if (this._config.activePollIntervalMs > 0) {
            await this._delay(this._config.activePollIntervalMs);
          }
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
      this._clearAllHeartbeats();
      this._running = false;
      this._iterating = false;
      this._stats.pollingStoppedAt = new Date();
    }
  }

  private async _pollLoop(): Promise<void> {
    while (this._running && !this._isAborted()) {
      try {
        while (this._running && this._inFlightCount >= this._config.maxConcurrency) {
          await this._delay(50);
        }
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
          const idleDelay = this._effectiveIdlePollInterval();
          if (idleDelay > 0) {
            await this._delay(idleDelay);
          }
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
              for (const resolve of this._drainResolvers) resolve();
              this._drainResolvers = [];
            }
          });
        }

        if (this._config.activePollIntervalMs > 0) {
          await this._delay(this._config.activePollIntervalMs);
        }
      } catch (err) {
        if (this._isAborted()) break;
        this._consecutiveErrors++;
        this._stats.errorCount++;
        this._emit("error", err instanceof Error ? err : new PollerError(String(err)));
        await this._backoff();
      }
    }

    if (this._gracefulStop) {
      await this._waitForDrain(this._config.shutdownTimeoutMs);
    }
    await this._flushDeleteBatch();
    this._clearAllHeartbeats();
    this._stats.pollingStoppedAt = new Date();
    this._loopPromise = null;
    this._emit("stopped", { ...this._stats });
  }

  private async _processMessage(msg: Message): Promise<void> {
    this._startHeartbeat(msg);
    try {
      await this._emitAsync("message", msg);
      if (this._config.deleteMessages && !msg.handled) {
        msg.enqueueDelete();
      }
    } catch (err) {
      this._stats.errorCount++;
      this._emit("error", err instanceof Error ? err : new PollerError(String(err)));
    } finally {
      this._stopHeartbeat(msg);
    }
  }

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

  private _enqueueDelete(msg: Message): void {
    this._deleteBatch.push(msg);
    if (this._deleteBatch.length >= this._config.deleteBatchSize) {
      this._flushDeleteBatch();
    } else if (!this._deleteTimer) {
      this._deleteTimer = setTimeout(() => {
        this._deleteTimer = null;
        this._flushDeleteBatch();
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

    // Entry Ids must be distinct within a batch, so use the index and map it back.
    const idToMessageId = new Map<string, string>();
    const entries = batch.map((m, i) => {
      const id = String(i);
      idToMessageId.set(id, m.messageId);
      return { Id: id, ReceiptHandle: m.receiptHandle };
    });

    try {
      const result = await this._client.send(
        new DeleteMessageBatchCommand({
          QueueUrl: this._config.queueUrl,
          Entries: entries,
        })
      );
      const succeeded = result.Successful?.length ?? 0;
      this._stats.deletedMessageCount += succeeded;

      if (result.Failed && result.Failed.length > 0) {
        this._stats.errorCount += result.Failed.length;
        const failuresWithMessageIds = result.Failed.map((f) => ({
          ...f,
          MessageId: idToMessageId.get(f.Id!) ?? f.Id,
        }));
        const err = new DeleteError(
          `Failed to delete ${result.Failed.length} message(s): ${failuresWithMessageIds.map((f) => f.MessageId).join(", ")}`,
          result.Failed,
          failuresWithMessageIds.map((f) => f.MessageId!)
        );
        this._emit("error", err);
      }
    } catch (err) {
      this._stats.errorCount++;
      this._emit("error", err instanceof Error ? err : new PollerError(String(err)));
    }

    if (this._deleteBatch.length > 0) {
      await this._flushDeleteBatch();
    }
  }

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
          const extErr = new VisibilityExtensionError(
            `Failed to extend visibility for message ${msg.messageId}`,
            msg.messageId,
            { cause: err instanceof Error ? err : undefined }
          );
          this._emit("error", extErr);
        }
        // Chain the next extension only after this one settles, so they never overlap.
        if (this._heartbeatTimers.has(msg.receiptHandle)) {
          scheduleNext();
        }
      }, intervalMs);

      this._heartbeatTimers.set(msg.receiptHandle, timer);
    };

    scheduleNext();
  }

  private _stopHeartbeat(msg: Message): void {
    const timer = this._heartbeatTimers.get(msg.receiptHandle);
    if (timer) {
      clearTimeout(timer);
      this._heartbeatTimers.delete(msg.receiptHandle);
    }
  }

  private _clearAllHeartbeats(): void {
    for (const timer of this._heartbeatTimers.values()) {
      clearTimeout(timer);
    }
    this._heartbeatTimers.clear();
  }

  private _wrapMessage(raw: SQSMessage): Message {
    return new Message(raw, this._client, this._config.queueUrl, (m) => this._enqueueDelete(m));
  }

  private _isAborted(): boolean {
    return this._internalAc.signal.aborted || this._externalSignal?.aborted === true;
  }

  private _checkIdleTimeout(): boolean {
    if (this._config.idleTimeoutMs == null) return false;
    const since = this._stats.lastMessageReceivedAt ?? this._stats.pollingStartedAt;
    if (!since) return false;
    return Date.now() - since.getTime() > this._config.idleTimeoutMs;
  }

  private _effectiveIdlePollInterval(): number {
    if (this._config.idlePollIntervalMs > 0) {
      return this._config.idlePollIntervalMs;
    }
    if (this._config.receiveWaitTimeMs === 0) {
      return MIN_POLL_INTERVAL_MS;
    }
    return 0;
  }

  private async _backoff(): Promise<void> {
    const delay = Math.min(this._config.backoffMs * 2 ** (this._consecutiveErrors - 1), this._config.maxBackoffMs);
    await this._delay(delay);
  }

  private _delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async _waitForDrain(timeoutMs: number): Promise<void> {
    if (this._inFlightCount === 0) return;
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;
    try {
      await Promise.race([
        new Promise<void>((resolve) => this._drainResolvers.push(resolve)),
        new Promise<void>((resolve) => {
          timeoutHandle = setTimeout(resolve, timeoutMs);
        }),
      ]);
    } finally {
      if (timeoutHandle) clearTimeout(timeoutHandle);
    }
    if (this._inFlightCount > 0) {
      const err = new TimeoutError(
        `Shutdown drain timed out with ${this._inFlightCount} message(s) still in flight`,
        timeoutMs
      );
      this._stats.errorCount++;
      this._emit("error", err);
    }
  }

  private _emit<K extends SQSPollerEventName>(event: K, ...args: Parameters<SQSPollerEvents[K]>): void {
    for (const listener of this._listeners[event]) {
      try {
        (listener as (...a: unknown[]) => void)(...args);
      } catch {
        // Swallow listener errors to avoid killing the poll loop.
      }
    }
  }

  private async _emitAsync<K extends SQSPollerEventName>(
    event: K,
    ...args: Parameters<SQSPollerEvents[K]>
  ): Promise<void> {
    // A throwing listener propagates, preserving the "handler threw -> no delete" contract.
    for (const listener of this._listeners[event]) {
      await (listener as (...a: unknown[]) => unknown)(...args);
    }
  }
}

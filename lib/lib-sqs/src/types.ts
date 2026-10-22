/**
 * Timing options are milliseconds with an `Ms` suffix; the poller converts to
 * seconds when calling SQS.
 */

import type {
  SQSClient,
  SQSClientConfig,
  Message as SQSMessage,
  MessageAttributeValue,
  MessageSystemAttributeName,
  BatchResultErrorEntry,
} from "@aws-sdk/client-sqs";

// Re-exported for consumer convenience.
export type {
  SQSClient,
  SQSClientConfig,
  SQSMessage,
  MessageAttributeValue,
  MessageSystemAttributeName,
  BatchResultErrorEntry,
};

/**
 * Config options for {@link SQSPoller}.
 * @public
 */
export interface PollerConfig {
  /**
   * The URL of the SQS queue to poll.
   * @example "https://sqs.us-east-1.amazonaws.com/123456789/my-queue"
   */
  queueUrl: string;

  /**
   * Pre-configured SQS client instance.
   * If provided, `clientConfig` is ignored.
   */
  client?: SQSClient;

  /**
   * Config forwarded to a new `SQSClient` when `client` is not provided.
   * Uses the standard `SQSClientConfig` from `@aws-sdk/client-sqs`.
   */
  clientConfig?: SQSClientConfig;

  /**
   * Long-poll wait time (0–20_000).
   * Converted to whole seconds for the SQS `ReceiveMessage` API.
   * Use 0 for short polling (not recommended).
   * @defaultValue 20_000
   */
  receiveWaitTimeMs?: number;

  /**
   * Messages to request per `ReceiveMessage` call (1–10).
   * @defaultValue 10
   */
  receiveBatchSize?: number;

  /**
   * Extra delay between polls when the previous poll returned messages.
   * 0 means the next poll starts immediately.
   * @defaultValue 0
   */
  activePollIntervalMs?: number;

  /**
   * Extra delay between polls when the previous poll returned no messages.
   * @defaultValue 0
   */
  idlePollIntervalMs?: number;

  /**
   * Stop polling after this long without receiving a message.
   * `undefined` polls indefinitely.
   * @defaultValue undefined
   */
  idleTimeoutMs?: number;

  /**
   * Max messages processed concurrently.
   * The poller pauses `ReceiveMessage` calls when this limit is reached
   * and resumes when in-flight count drops below it.
   * @defaultValue 10
   */
  maxConcurrency?: number;

  /**
   * Visibility timeout override, rounded up to whole seconds for SQS.
   * When omitted, the queue's default `VisibilityTimeout` applies.
   */
  visibilityTimeoutMs?: number;

  /**
   * Auto-extend the visibility timeout while a message is being processed.
   * The call is made `extendTimeoutAdvanceMs` before the current timeout expires.
   * @defaultValue false
   */
  extendTimeout?: boolean;

  /**
   * How far ahead of expiry to make the extension call.
   * Only used when `extendTimeout` is `true`.
   * @defaultValue 5_000
   */
  extendTimeoutAdvanceMs?: number;

  /**
   * Max total time to keep extending the visibility timeout.
   * After this the poller stops extending.
   * Only used when `extendTimeout` is `true`.
   * @defaultValue 43_200_000 (12 hours)
   */
  maxTimeoutExtensionMs?: number;

  /**
   * When `true` (default), messages are deleted automatically after the
   * `message` handler resolves.  Set to `false` for manual deletion via
   * `message.enqueueDelete()`.
   * @defaultValue true
   */
  deleteMessages?: boolean;

  /**
   * Batch size for `DeleteMessageBatch` calls (1–10).
   * @defaultValue 10
   */
  deleteBatchSize?: number;

  /**
   * Max wait for a delete batch to fill before flushing.
   * Lower reduces latency; higher improves batching.
   * @defaultValue 2_000
   */
  deleteWaitMs?: number;

  /**
   * System attribute names to request with each message.
   * @defaultValue []
   * @example ["All"] or ["ApproximateReceiveCount", "SentTimestamp"]
   */
  systemAttributeNames?: MessageSystemAttributeName[];

  /**
   * Custom message attribute names to request.
   * @defaultValue []
   * @example ["All"] or ["myAttribute.*"]
   */
  messageAttributeNames?: string[];

  /**
   * Initial backoff delay after a `ReceiveMessage` error.
   * Doubles on consecutive errors up to `maxBackoffMs`.
   * @defaultValue 1_000
   */
  backoffMs?: number;

  /**
   * Max backoff ceiling.
   * @defaultValue 30_000
   */
  maxBackoffMs?: number;

  /**
   * `AbortSignal` for graceful shutdown.  When aborted the poller
   * finishes in-flight handlers, flushes pending deletes, then stops.
   */
  abortSignal?: AbortSignal;

  /**
   * Max wait for in-flight messages to complete during shutdown.
   * @defaultValue 30_000
   */
  shutdownTimeoutMs?: number;

  /**
   * Callback invoked before each `ReceiveMessage` call.
   * Throwing stops the polling loop and emits the error via the
   * `error` event.  The poller will not make another request.
   */
  beforeRequest?: (stats: PollerStats) => void;
}

/**
 * Live stats tracked by the poller.
 * @public
 */
export interface PollerStats {
  /** Total `ReceiveMessage` requests sent. */
  requestCount: number;
  /** Total messages received. */
  receivedMessageCount: number;
  /** Total messages successfully deleted. */
  deletedMessageCount: number;
  /** Total errors encountered (receive, delete, extend). */
  errorCount: number;
  /** Timestamp of last received message, or `null`. */
  lastMessageReceivedAt: Date | null;
  /** Timestamp when `start()` was called. */
  pollingStartedAt: Date | null;
  /** Timestamp when the poller stopped, or `null` if still running. */
  pollingStoppedAt: Date | null;
}

/**
 * JSON-serializable snapshot of {@link PollerStats}.
 * Dates are converted to ISO-8601 strings.
 * @public
 */
export interface SerializablePollerStats {
  requestCount: number;
  receivedMessageCount: number;
  deletedMessageCount: number;
  errorCount: number;
  lastMessageReceivedAt: string | null;
  pollingStartedAt: string | null;
  pollingStoppedAt: string | null;
  pollingDurationMs: number;
}

/**
 * Events emitted by {@link SQSPoller}.
 * @public
 */
export interface SQSPollerEvents {
  /** A message was received. */
  message: (message: PollerMessage) => void | Promise<void>;
  /** The last `ReceiveMessage` returned no messages. */
  empty: () => void;
  /** The poller stopped due to `idleTimeoutMs` expiring. */
  idle: () => void;
  /** The poller stopped (graceful or abort). */
  stopped: (stats: PollerStats) => void;
  /** A non-fatal error occurred (receive, delete, extend). */
  error: (error: Error) => void;
  /** A message's visibility timeout was extended. */
  timeoutExtended: (message: PollerMessage) => void;
  /** A message's heartbeat expired after `maxTimeoutExtensionMs`. The message may become visible to other consumers. */
  heartbeatExpired: (message: PollerMessage) => void;
}

/**
 * Event name literals for {@link SQSPollerEvents}.
 * @public
 */
export type SQSPollerEventName = keyof SQSPollerEvents;

/**
 * A received SQS message with convenience methods.
 *
 * This interface describes the public surface.  The concrete class
 * is in `./Message.ts`.
 *
 * @public
 */
export interface PollerMessage {
  /** Raw SQS `Message` object. */
  readonly raw: SQSMessage;
  /** Message body string. */
  readonly body: string | undefined;
  /** Unique message ID. */
  readonly messageId: string;
  /** Receipt handle for delete / visibility operations. */
  readonly receiptHandle: string;
  /** System attributes (e.g. `ApproximateReceiveCount`). */
  readonly attributes: Partial<Record<MessageSystemAttributeName, string>>;
  /** Custom message attributes. */
  readonly messageAttributes: Record<string, MessageAttributeValue>;
  /** Timestamp when the poller received this message. */
  readonly receivedAt: Date;

  /** Queue this message for batch deletion. */
  enqueueDelete(): void;
  /** Acknowledge the message without deleting it. */
  keep(): void;
  /** Release the message back to the queue immediately (visibility → 0). */
  release(): Promise<void>;
  /** Change the visibility timeout of this message. */
  changeVisibility(timeoutMs: number): Promise<void>;
}

/**
 * AWS SDK for JavaScript SQS Poller (@aws-sdk/lib-sqs) - Public API
 *
 * This file contains the public API signatures for the SQS Poller library.
 * For feedback and discussion, please visit: https://github.com/aws/aws-sdk-js-v3/issues/6015
 *
 * @packageDocumentation
 */

import type {
  SQSClient,
  SQSClientConfig,
  Message as SQSRawMessage,
  MessageAttributeValue,
  MessageSystemAttributeName,
  BatchResultErrorEntry,
} from "@aws-sdk/client-sqs";

// ============================================================
// Re-exports from @aws-sdk/client-sqs
// ============================================================

/**
 * Re-export MessageAttributeValue from @aws-sdk/client-sqs for convenience.
 * @public
 */
export type { MessageAttributeValue };

/**
 * Re-export MessageSystemAttributeName from @aws-sdk/client-sqs for convenience.
 * @public
 */
export type { MessageSystemAttributeName };

/**
 * Re-export the raw SQS Message type from @aws-sdk/client-sqs.
 * This is the structure returned directly from the SQS ReceiveMessage API.
 * @public
 */
export type { SQSRawMessage };

/**
 * Re-export BatchResultErrorEntry from @aws-sdk/client-sqs for deletion failure details.
 * @public
 */
export type { BatchResultErrorEntry };

// ============================================================
// Type Definitions
// ============================================================

/**
 * Map of message attribute names to values.
 * @public
 */
export type MessageAttributes = Record<string, MessageAttributeValue>;

/**
 * JSON-serializable representation of poller statistics.
 * All Date fields are converted to ISO strings for serialization.
 * @public
 */
export interface SerializablePollerStats {
  /** Total number of receive requests made. */
  requestCount: number;
  /** Total number of messages received. */
  receivedMessageCount: number;
  /** Total number of messages deleted. */
  deletedMessageCount: number;
  /** Total number of errors encountered. */
  errorCount: number;
  /** ISO timestamp of last received message, or null if no messages received. */
  lastMessageReceivedAt: string | null;
  /** ISO timestamp when polling started. */
  pollingStartedAt: string;
  /** ISO timestamp when polling stopped, or null if still running. */
  pollingStoppedAt: string | null;
  /** Average messages per request. */
  averageMessagesPerRequest: number;
  /** Current polling duration in milliseconds. */
  pollingDurationMs: number;
}

/**
 * Configuration options for the QueuePoller.
 * @public
 */
export interface PollerConfig {
  // ============================================================
  // Required Configuration
  // ============================================================

  /**
   * The URL of the SQS queue to poll.
   * @example 'https://sqs.us-east-1.amazonaws.com/123456789/my-queue'
   */
  queueUrl: string;

  // ============================================================
  // AWS Configuration
  // ============================================================

  /**
   * Configuration options for the SQS client.
   * Uses the standard SQSClientConfig from @aws-sdk/client-sqs.
   * Ignored if `sqs` is provided.
   */
  clientConfig?: SQSClientConfig;

  /**
   * Pre-configured SQS client instance.
   * If provided, clientConfig is ignored.
   */
  sqs?: SQSClient;

  // ============================================================
  // Polling Configuration
  // ============================================================

  /**
   * Maximum number of messages to process simultaneously.
   * Set to 0 for unlimited.
   * @defaultValue 100
   */
  maxInFlight?: number;

  /**
   * Number of messages to receive per request (1-10).
   * Values outside this range will throw a PollerError during construction.
   * This limit is enforced by the SQS ReceiveMessage API.
   * @defaultValue 10
   * @throws {PollerError} If value is not between 1 and 10 (inclusive).
   */
  receiveBatchSize?: number;

  /**
   * Long polling wait time in milliseconds (0-20000).
   * The poller converts this to seconds for the SQS API.
   * Use 0 for short polling (not recommended for production).
   * @defaultValue 20000 (20 seconds)
   */
  receiveWaitTimeMs?: number;

  /**
   * Milliseconds to wait between polls when queue is active.
   * Set to 0 for no additional delay - the next poll starts immediately
   * after the previous one completes.
   * @defaultValue 0
   */
  activePollIntervalMs?: number;

  /**
   * Milliseconds to wait between polls when queue is empty.
   * @defaultValue 0
   */
  idlePollIntervalMs?: number;

  /**
   * Milliseconds to wait before retrying after an error.
   * @defaultValue 2000
   */
  pollRetryMs?: number;

  /**
   * Stop polling after this many milliseconds of no messages.
   * Set to null to poll indefinitely.
   * @defaultValue null
   */
  idleTimeoutMs?: number | null;

  // ============================================================
  // Message Handling Configuration
  // ============================================================

  /**
   * Visibility timeout in milliseconds for received messages.
   * The poller converts this to seconds for the SQS API.
   * If not specified, uses the queue's default setting.
   */
  visibilityTimeoutMs?: number;

  /**
   * Automatically extend message visibility timeout while processing.
   * When enabled, the poller will periodically extend the visibility timeout
   * of messages that are still being processed.
   * @defaultValue false
   */
  extendTimeout?: boolean;

  /**
   * Milliseconds before the visibility timeout expires to make the extension call.
   * Only used if extendTimeout is true.
   * @defaultValue 5000
   */
  extendTimeoutAdvanceMs?: number;

  /**
   * Maximum total time in milliseconds to extend the visibility timeout.
   * After this duration, the poller will stop extending the timeout.
   * Only used if extendTimeout is true.
   * @defaultValue 43200000 (12 hours)
   */
  maxTimeoutExtensionMs?: number;

  /**
   * Automatically delete messages after they are handled.
   * If false, messages must be manually deleted by calling message.enqueueDelete().
   * @defaultValue true
   */
  deleteMessages?: boolean;

  // ============================================================
  // Batch Operations Configuration
  // ============================================================

  /**
   * Number of messages to batch for deletion (1-10).
   * @defaultValue 10
   */
  deleteBatchSize?: number;

  /**
   * Maximum time in milliseconds to wait after the first message is queued
   * for deletion before triggering the batch delete operation.
   * This allows multiple messages to be batched together for efficiency.
   * @defaultValue 2000
   */
  deleteWaitMs?: number;

  // ============================================================
  // Message Format Configuration
  // ============================================================

  /**
   * Format of message body.
   * - 'text': Return body as string (default)
   * - 'json': Parse body as JSON
   * @defaultValue 'text'
   */
  bodyFormat?: "text" | "json";

  /**
   * Unwrap SNS message envelope.
   * When true, if the message body is an SNS notification envelope,
   * the poller will extract the inner message content.
   * @defaultValue false
   */
  unwrapSns?: boolean;

  // ============================================================
  // Message Attributes Configuration
  // ============================================================

  /**
   * System attributes to retrieve with messages.
   * Uses MessageSystemAttributeName from @aws-sdk/client-sqs.
   * These are attributes like ApproximateReceiveCount, SentTimestamp, etc.
   * @defaultValue []
   * @example ['All'] or ['ApproximateReceiveCount', 'SentTimestamp']
   */
  systemAttributeNames?: MessageSystemAttributeName[];

  /**
   * Custom message attributes to retrieve.
   * These are user-defined attributes set when sending messages.
   * @defaultValue []
   * @example ['All'] or ['CustomAttribute.*', 'SpecificAttribute']
   */
  messageAttributeNames?: string[];

  // ============================================================
  // Callbacks
  // ============================================================

  /**
   * Callback invoked before each polling request.
   * Can be used to implement custom logic or stop polling by throwing an error.
   * @example (stats) => { if (stats.errorCount > 10) throw new Error('Too many errors'); }
   */
  beforeRequest?: (stats: PollerStats) => void;

  // ============================================================
  // Lifecycle Configuration
  // ============================================================

  /**
   * Register signal handlers for graceful shutdown.
   * When enabled, the poller listens for SIGTERM and SIGINT signals
   * and performs a soft stop (waiting for in-flight messages to complete).
   * @defaultValue true
   */
  gracefulShutdown?: boolean;

  /**
   * Maximum time in milliseconds to wait for in-flight messages during shutdown.
   * After this timeout, the poller will force stop.
   * Only used if gracefulShutdown is true.
   * @defaultValue 30000 (30 seconds)
   */
  shutdownTimeoutMs?: number;

  // ============================================================
  // Event Callbacks Configuration
  // ============================================================

  /**
   * Event callbacks to register during construction.
   * These can also be assigned directly to poller.on after construction.
   *
   * @example
   * ```typescript
   * const poller = new QueuePoller({
   *   queueUrl: '...',
   *   on: {
   *     message: (message, stats) => {
   *       console.log('Received:', message.body);
   *       message.enqueueDelete();
   *     },
   *     error: (error) => console.error(error),
   *   },
   * });
   * ```
   */
  on?: Partial<QueuePollerEvents>;
}

// ============================================================
// Error Classes
// ============================================================

/**
 * Base error class for all poller errors.
 * @public
 */
export class PollerError extends Error {
  /**
   * The underlying error that caused this error.
   */
  public readonly cause?: Error;

  /**
   * Error name - identifies the specific error type.
   * Subclasses override this with their specific error name.
   */
  public override readonly name: string = "PollerError";

  /**
   * Creates a new PollerError.
   * @public
   * @param message - Error message.
   * @param cause - Optional underlying error.
   */
  constructor(message: string, cause?: Error) {
    super(message);
    throw new Error("not implemented");
  }
}

/**
 * Error thrown when an operation times out.
 * @public
 */
export class TimeoutError extends PollerError {
  /**
   * Timeout duration in milliseconds.
   */
  public readonly timeoutMs: number;

  /**
   * Error name.
   */
  public override readonly name: string = "TimeoutError";

  /**
   * Creates a new TimeoutError.
   * @public
   * @param message - Error message.
   * @param timeoutMs - Timeout duration in milliseconds.
   */
  constructor(message: string, timeoutMs: number) {
    super(message);
    throw new Error("not implemented");
  }
}

/**
 * Error thrown when message deletion fails.
 * Contains details about which messages failed to delete.
 * @public
 */
export class DeleteError extends PollerError {
  /**
   * Array of batch result error entries from the SQS API.
   * Uses the BatchResultErrorEntry type from @aws-sdk/client-sqs.
   */
  public readonly failures: BatchResultErrorEntry[];

  /**
   * Error name.
   */
  public override readonly name: string = "DeleteError";

  /**
   * Creates a new DeleteError.
   * @public
   * @param message - Error message.
   * @param failures - Array of batch result error entries.
   */
  constructor(message: string, failures: BatchResultErrorEntry[]) {
    super(message);
    throw new Error("not implemented");
  }
}

/**
 * Error thrown when visibility timeout extension fails.
 * @public
 */
export class VisibilityExtensionError extends PollerError {
  /**
   * ID of the message that failed to extend.
   */
  public readonly messageId: string;

  /**
   * Error name.
   */
  public override readonly name: string = "VisibilityExtensionError";

  /**
   * Creates a new VisibilityExtensionError.
   * @public
   * @param message - Error message.
   * @param messageId - ID of the message that failed to extend.
   */
  constructor(message: string, messageId: string) {
    super(message);
    throw new Error("not implemented");
  }
}

// ============================================================
// PollerStats Class
// ============================================================

/**
 * Statistics tracking for the poller.
 * @public
 */
export class PollerStats {
  /**
   * Total number of receive requests made.
   */
  public readonly requestCount: number = 0;

  /**
   * Total number of messages received.
   */
  public readonly receivedMessageCount: number = 0;

  /**
   * Total number of messages deleted.
   */
  public readonly deletedMessageCount: number = 0;

  /**
   * Total number of errors encountered.
   */
  public readonly errorCount: number = 0;

  /**
   * Timestamp of last received message.
   */
  public readonly lastMessageReceivedAt: Date | null = null;

  /**
   * Timestamp when polling started.
   */
  public readonly pollingStartedAt: Date = new Date();

  /**
   * Timestamp when polling stopped.
   */
  public readonly pollingStoppedAt: Date | null = null;

  /**
   * Average messages per request.
   */
  public readonly averageMessagesPerRequest: number = 0;

  /**
   * Current polling duration in milliseconds.
   */
  public readonly pollingDurationMs: number = 0;

  /**
   * Resets all statistics to initial values.
   * @public
   */
  public reset(): void {
    throw new Error("not implemented");
  }

  /**
   * @public
   * @returns JSON-serializable representation of the statistics.
   */
  public toJSON(): SerializablePollerStats {
    throw new Error("not implemented");
  }
}

// ============================================================
// Message Class
// ============================================================

/**
 * Wrapper class for SQS messages with convenience methods.
 *
 * Note: The constructor is marked @internal because Message instances
 * should only be created by the QueuePoller when messages are received.
 * Users should not instantiate Message objects directly.
 *
 * @typeParam T - The expected type of the message body. Defaults to `unknown`.
 * @public
 */
export class Message<T = unknown> {
  /**
   * Parsed message body.
   * - If bodyFormat is 'json', this will be the parsed object.
   * - If bodyFormat is 'text', this will be the raw string.
   * - If unwrapSns is true, this will be the SNS message content.
   */
  public readonly body: T;

  /**
   * Raw SQS message object from @aws-sdk/client-sqs.
   */
  public readonly raw: SQSRawMessage;

  /**
   * Receipt handle for message operations.
   */
  public readonly receiptHandle: string;

  /**
   * Unique message identifier.
   */
  public readonly messageId: string;

  /**
   * Message system attributes as returned by the SQS ReceiveMessage API.
   * This is a map of MessageSystemAttributeName to string values.
   *
   * Note: This contains attributes like ApproximateReceiveCount, SentTimestamp, etc.
   * This is different from MessageSystemAttributeValue (used for AWSTraceHeader when sending).
   *
   * @see MessageSystemAttributeName from @aws-sdk/client-sqs
   */
  public readonly attributes: Partial<Record<MessageSystemAttributeName, string>>;

  /**
   * Custom message attributes.
   */
  public readonly messageAttributes: MessageAttributes;

  /**
   * SNS message subject (only present if unwrapSns is true and message is from SNS).
   */
  public readonly subject?: string;

  /**
   * SNS topic ARN (only present if unwrapSns is true and message is from SNS).
   */
  public readonly topicArn?: string;

  /**
   * SNS topic name (only present if unwrapSns is true and message is from SNS).
   */
  public readonly topicName?: string;

  /**
   * Timestamp when message was received by poller.
   */
  public readonly receivedAt: Date;

  /**
   * Creates a new Message instance.
   * @internal This constructor is internal - Message instances are created
   * by QueuePoller when messages are received from SQS.
   */
  constructor(raw: SQSRawMessage) {
    throw new Error("not implemented");
  }

  /**
   * Queues the message for batch deletion.
   * The message will be deleted when the batch is full or deleteWaitMs has elapsed.
   * @public
   */
  public enqueueDelete(): void {
    throw new Error("not implemented");
  }

  /**
   * Marks the message as handled without deleting.
   * Use this when you want to acknowledge the message but not delete it from the queue.
   * @public
   */
  public keep(): void {
    throw new Error("not implemented");
  }

  /**
   * Releases the message back to the queue immediately by setting visibility timeout to 0.
   * This makes the message available for other consumers to process.
   * @public
   * @returns Promise that resolves when release is complete.
   */
  public release(): Promise<void> {
    throw new Error("not implemented");
  }

  /**
   * Changes the visibility timeout of the message.
   * @public
   * @param timeoutMs - New visibility timeout in milliseconds.
   * @returns Promise that resolves when change is complete.
   */
  public changeVisibility(timeoutMs: number): Promise<void> {
    throw new Error("not implemented");
  }
}

// ============================================================
// QueuePoller Class
// ============================================================

/**
 * Event types emitted by the QueuePoller.
 * @public
 */
export interface QueuePollerEvents<T = unknown> {
  /** Emitted when a message is received from the queue. */
  message: (message: Message<T>, stats: PollerStats) => void;
  /** Emitted when a message is marked as handled (via keep() or enqueueDelete()). */
  handled: (message: Message<T>) => void;
  /** Emitted when a message is successfully deleted from the queue. */
  deleted: (message: Message<T>) => void;
  /** Emitted when a message is queued for batch deletion. */
  deletionEnqueued: (message: Message<T>) => void;
  /** Emitted when a message is released back to the queue. */
  released: (message: Message<T>) => void;
  /** Emitted when messages are received from SQS. */
  receivedMessages: (count: number) => void;
  /** Emitted when no messages are available in the queue. */
  queueEmpty: () => void;
  /** Emitted when maxInFlight limit is reached. */
  maxInFlight: () => void;
  /** Emitted when all in-flight messages have been handled. */
  drained: () => void;
  /** Emitted when polling is aborted (hard stop). */
  aborted: () => void;
  /** Emitted when graceful shutdown is initiated. */
  shutdown: (signal: string) => void;
  /** Emitted when a message's visibility timeout is extended. */
  timeoutExtended: (message: Message<T>) => void;
  /**
   * Emitted when any error occurs during polling operations.
   * This is the primary error event - all errors are emitted here.
   * Use the error's `name` property to distinguish error types:
   * - 'PollerError': General polling errors
   * - 'DeleteError': Message deletion failures
   * - 'TimeoutError': Processing timeout errors
   * - 'VisibilityExtensionError': Visibility extension failures
   */
  error: (error: Error) => void;
  /** Emitted when message deletion fails. Also emitted via 'error' event. */
  deleteError: (error: DeleteError) => void;
  /** Emitted when visibility timeout extension fails. Also emitted via 'error' event. */
  extensionError: (data: { message: Message<T>; error: VisibilityExtensionError }) => void;
  /** Emitted when message processing throws an error. Also emitted via 'error' event. */
  processingError: (error: Error, message: Message<T>) => void;
  /** Emitted when message processing times out. Also emitted via 'error' event. */
  timeoutError: (error: TimeoutError, message: Message<T>) => void;
}

/**
 * The main class for polling messages from an SQS queue.
 *
 * This class uses a callback-based event system instead of extending EventEmitter.
 * Users who prefer the EventEmitter pattern can easily adapt it:
 *
 * @example
 * ```typescript
 * import { EventEmitter } from 'events';
 *
 * const poller = new QueuePoller({ queueUrl: '...' });
 * const emitter = new EventEmitter();
 *
 * // Adapt callbacks to EventEmitter
 * poller.on.message = (message, stats) => emitter.emit('message', message, stats);
 * poller.on.error = (error) => emitter.emit('error', error);
 *
 * // Now use EventEmitter pattern
 * emitter.on('message', (message) => { ... });
 * ```
 *
 * @typeParam T - The expected type of message bodies. Defaults to `unknown`.
 * @public
 */
export class QueuePoller<T = unknown> {
  // ============================================================
  // Properties
  // ============================================================

  /**
   * Number of messages currently being processed.
   */
  public readonly inFlight: number = 0;

  /**
   * Whether the poller is currently running.
   */
  public readonly running: boolean = false;

  /**
   * The URL of the queue being polled.
   */
  public readonly queueUrl: string;

  /**
   * Current polling statistics.
   */
  public readonly stats: PollerStats;

  /**
   * Event callbacks. Assign functions to handle specific events.
   * Each event has a default no-op implementation.
   *
   * @example
   * ```typescript
   * const poller = new QueuePoller({ queueUrl: '...' });
   *
   * poller.on.message = (message, stats) => {
   *   console.log('Received:', message.body);
   *   message.enqueueDelete();
   * };
   *
   * poller.on.error = (error) => {
   *   console.error('Error:', error);
   * };
   * ```
   */
  public readonly on: QueuePollerEvents<T>;

  // ============================================================
  // Constructor
  // ============================================================

  /**
   * Creates a new QueuePoller instance.
   * @public
   * @param config - Configuration options. Event callbacks can be provided
   *                 via config.on or assigned directly to poller.on after construction.
   * @throws {PollerError} If configuration is invalid (e.g., receiveBatchSize not between 1-10).
   */
  constructor(config: PollerConfig) {
    throw new Error("not implemented");
  }

  // ============================================================
  // Lifecycle Methods
  // ============================================================

  /**
   * Starts polling for messages.
   * @public
   * @throws {PollerError} If poller is already running.
   */
  public start(): void {
    throw new Error("not implemented");
  }

  /**
   * Stops polling for messages.
   * @public
   * @param soft - If true, waits for in-flight messages to complete before stopping.
   *               If false (default), stops immediately without waiting.
   * @defaultValue false
   * @returns Promise that resolves when polling has stopped.
   */
  public stop(soft: boolean = false): Promise<void> {
    throw new Error("not implemented");
  }

  // ============================================================
  // Batch Operations
  // ============================================================

  /**
   * Deletes multiple messages from the queue in a batch.
   * For single message deletion, use message.enqueueDelete() directly.
   * @public
   * @param messages - Array of messages to delete.
   * @returns Promise that resolves when deletion is complete.
   * @throws {DeleteError} If any messages fail to delete.
   */
  public deleteMessages(messages: Message<T>[]): Promise<void> {
    throw new Error("not implemented");
  }
}

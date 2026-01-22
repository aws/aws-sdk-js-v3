/**
 * AWS SDK for JavaScript SQS Poller (@aws-sdk/lib-sqs) - Public API
 *
 * This file contains the public API signatures for the SQS Poller library.
 * For feedback and discussion, please visit: https://github.com/aws/aws-sdk-js-v3/issues/6015
 *
 * @packageDocumentation
 */

import { EventEmitter } from "events";
import type { SQSClient } from "@aws-sdk/client-sqs";
import type { Credentials } from "@aws-sdk/types";

// ============================================================
// Type Definitions
// ============================================================

/**
 * SQS message system attribute names.
 * @public
 */
export type AttributeName =
  | "All"
  | "ApproximateFirstReceiveTimestamp"
  | "ApproximateReceiveCount"
  | "SenderId"
  | "SentTimestamp"
  | "MessageDeduplicationId"
  | "MessageGroupId"
  | "SequenceNumber";

/**
 * Message attribute value structure.
 * @public
 */
export interface MessageAttributeValue {
  /** The data type of the attribute value. */
  DataType: string;
  /** String value of the attribute. */
  StringValue?: string;
  /** Binary value of the attribute. */
  BinaryValue?: Buffer;
  /** List of string values. */
  StringListValues?: string[];
  /** List of binary values. */
  BinaryListValues?: Buffer[];
}

/**
 * Map of message attribute names to values.
 * @public
 */
export type MessageAttributes = Record<string, MessageAttributeValue>;

/**
 * Message system attributes returned by SQS.
 * @public
 */
export interface MessageSystemAttributes {
  /** Timestamp of when the message was first received. */
  ApproximateFirstReceiveTimestamp?: string;
  /** Number of times the message has been received. */
  ApproximateReceiveCount?: string;
  /** AWS account ID or IAM identity of the sender. */
  SenderId?: string;
  /** Timestamp of when the message was sent. */
  SentTimestamp?: string;
  /** Deduplication ID for FIFO queues. */
  MessageDeduplicationId?: string;
  /** Message group ID for FIFO queues. */
  MessageGroupId?: string;
  /** Sequence number for FIFO queues. */
  SequenceNumber?: string;
}

/**
 * Raw SQS message structure.
 * @public
 */
export interface SQSMessage {
  /** Unique message identifier. */
  MessageId: string;
  /** Receipt handle for message operations. */
  ReceiptHandle: string;
  /** MD5 digest of the message body. */
  MD5OfBody: string;
  /** The message body. */
  Body: string;
  /** System attributes of the message. */
  Attributes?: MessageSystemAttributes;
  /** Custom message attributes. */
  MessageAttributes?: MessageAttributes;
  /** MD5 digest of the message attributes. */
  MD5OfMessageAttributes?: string;
}

/**
 * Result of sending a single message.
 * @public
 */
export interface SendMessageResult {
  /** Unique identifier for the message. */
  MessageId: string;
  /** MD5 digest of the message body. */
  MD5OfMessageBody: string;
  /** MD5 digest of the message attributes. */
  MD5OfMessageAttributes?: string;
  /** Sequence number for FIFO queues. */
  SequenceNumber?: string;
}

/**
 * Entry in a successful batch send result.
 * @public
 */
export interface SendMessageBatchResultEntry {
  /** Identifier for the message in the batch. */
  Id: string;
  /** Unique identifier assigned by SQS. */
  MessageId: string;
  /** MD5 digest of the message body. */
  MD5OfMessageBody: string;
  /** MD5 digest of the message attributes. */
  MD5OfMessageAttributes?: string;
  /** Sequence number for FIFO queues. */
  SequenceNumber?: string;
}

/**
 * Entry in a failed batch operation result.
 * @public
 */
export interface BatchResultErrorEntry {
  /** Identifier for the message in the batch. */
  Id: string;
  /** Whether the error was the sender's fault. */
  SenderFault: boolean;
  /** Error code. */
  Code: string;
  /** Error message. */
  Message: string;
}

/**
 * Result of sending multiple messages.
 * @public
 */
export interface SendMessageBatchResult {
  /** Successfully sent messages. */
  Successful: SendMessageBatchResultEntry[];
  /** Failed message sends. */
  Failed: BatchResultErrorEntry[];
}

/**
 * JSON representation of poller statistics.
 * @public
 */
export interface PollerStatsJSON {
  /** Total number of receive requests made. */
  requestCount: number;
  /** Total number of messages received. */
  receivedMessageCount: number;
  /** Total number of messages deleted. */
  deletedMessageCount: number;
  /** Total number of errors encountered. */
  errorCount: number;
  /** ISO timestamp of last received message. */
  lastMessageReceivedAt: string | null;
  /** ISO timestamp when polling started. */
  pollingStartedAt: string;
  /** ISO timestamp when polling stopped. */
  pollingStoppedAt: string | null;
  /** Average messages per request. */
  averageMessagesPerRequest: number;
  /** Current polling duration in milliseconds. */
  pollingDurationMs: number;
}

/**
 * Information about a failed message deletion.
 * @public
 */
export interface DeleteFailure {
  /** Message ID that failed to delete. */
  id: string;
  /** Whether the failure was the sender's fault. */
  senderFault: boolean;
  /** Error code. */
  code: string;
  /** Error message. */
  message: string;
}

/**
 * AWS SDK configuration options.
 * @public
 */
export interface AWSConfig {
  /**
   * AWS region.
   * @example 'us-east-1'
   */
  region?: string;
  /** AWS credentials. */
  credentials?: Credentials;
  /**
   * Custom endpoint URL (for testing with LocalStack, etc.).
   * @example 'http://localhost:4566'
   */
  endpoint?: string;
  /**
   * Maximum number of retry attempts.
   * @defaultValue 3
   */
  maxRetries?: number;
  /**
   * Request timeout in milliseconds.
   * @defaultValue 120000
   */
  requestTimeout?: number;
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

  /** AWS SDK configuration options. */
  awsConfig?: AWSConfig;

  /**
   * Pre-configured SQS client instance.
   * If provided, awsConfig is ignored.
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
   * @defaultValue 10
   */
  receiveBatchSize?: number;

  /**
   * Long polling wait time in seconds (0-20).
   * @defaultValue 20
   */
  receiveWaitTimeSecs?: number;

  /**
   * Milliseconds to wait between polls when queue is active.
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
   * Stop polling after this many seconds of no messages.
   * Set to null to poll indefinitely.
   * @defaultValue null
   */
  idleTimeout?: number | null;

  // ============================================================
  // Message Handling Configuration
  // ============================================================

  /**
   * Visibility timeout in seconds for received messages.
   * If not specified, uses the queue's default setting.
   */
  visibilityTimeoutSecs?: number;

  /**
   * Automatically extend message visibility timeout while processing.
   * @defaultValue false
   */
  autoExtendTimeout?: boolean;

  /**
   * Milliseconds before timeout to make extension call.
   * Only used if autoExtendTimeout is true.
   * @defaultValue 5000
   */
  advancedCallMs?: number;

  /**
   * Stop extending timeout after this many seconds.
   * Only used if autoExtendTimeout is true.
   * @defaultValue 43200 (12 hours)
   */
  noExtensionsAfterSecs?: number;

  /**
   * Skip automatic message deletion.
   * If true, messages must be manually deleted.
   * @defaultValue false
   */
  skipDelete?: boolean;

  // ============================================================
  // Batch Operations Configuration
  // ============================================================

  /**
   * Number of messages to batch for deletion (1-10).
   * @defaultValue 10
   */
  deleteBatchSize?: number;

  /**
   * Milliseconds to wait before triggering batch delete.
   * @defaultValue 2000
   */
  deleteWaitMs?: number;

  // ============================================================
  // Message Format Configuration
  // ============================================================

  /**
   * Format of message body.
   * - 'plain': Return body as string
   * - 'json': Parse body as JSON
   * @defaultValue 'plain'
   */
  bodyFormat?: "plain" | "json";

  /**
   * Unwrap SNS message envelope.
   * @defaultValue false
   */
  unwrapSns?: boolean;

  // ============================================================
  // Message Attributes Configuration
  // ============================================================

  /**
   * System attributes to retrieve with messages.
   * @defaultValue []
   * @example ['All', 'ApproximateReceiveCount', 'SentTimestamp']
   */
  attributeNames?: AttributeName[];

  /**
   * Custom message attributes to retrieve.
   * @defaultValue []
   * @example ['All', 'CustomAttribute.*']
   */
  messageAttributeNames?: string[];

  // ============================================================
  // Callbacks
  // ============================================================

  /**
   * Callback invoked before each polling request.
   * Can be used to implement custom logic or stop polling.
   * @example (stats) => { if (stats.errorCount > 10) throw ':stop_polling'; }
   */
  beforeRequest?: (stats: PollerStats) => void;

  // ============================================================
  // Lifecycle Configuration
  // ============================================================

  /**
   * Automatically register signal handlers for graceful shutdown.
   * When enabled, the poller listens for SIGTERM and SIGINT signals
   * and performs a soft stop (waiting for in-flight messages to complete).
   * @defaultValue true
   */
  autoGracefulShutdown?: boolean;

  /**
   * Maximum time in milliseconds to wait for in-flight messages during shutdown.
   * After this timeout, the poller will force stop.
   * Only used if autoGracefulShutdown is true.
   * @defaultValue 30000 (30 seconds)
   */
  shutdownTimeoutMs?: number;

  // ============================================================
  // Queue Creation Configuration
  // ============================================================

  /**
   * Delay in seconds for new messages (0-900).
   * Only used when creating a queue.
   * @defaultValue 0
   */
  delaySecs?: number;

  /**
   * Maximum message size in bytes (1024-262144).
   * Only used when creating a queue.
   * @defaultValue 262144 (256 KB)
   */
  maxMessageBytes?: number;

  /**
   * Message retention period in seconds (60-1209600).
   * Only used when creating a queue.
   * @defaultValue 345600 (4 days)
   */
  messageRetentionSecs?: number;

  /**
   * Queue access policy.
   * Only used when creating a queue.
   */
  queuePolicy?: string;
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
   * Error name.
   */
  public readonly name = "PollerError" as const;

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
  public readonly name = "TimeoutError" as const;

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
 * @public
 */
export class DeleteError extends PollerError {
  /**
   * Array of messages that failed to delete.
   */
  public readonly failures: DeleteFailure[];

  /**
   * Error name.
   */
  public readonly name = "DeleteError" as const;

  /**
   * Creates a new DeleteError.
   * @public
   * @param message - Error message.
   * @param failures - Array of deletion failures.
   */
  constructor(message: string, failures: DeleteFailure[]) {
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
  public readonly name = "VisibilityExtensionError" as const;

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
   * Returns a plain object representation of the statistics.
   * @public
   * @returns Plain object with all statistics.
   */
  public toJSON(): PollerStatsJSON {
    throw new Error("not implemented");
  }
}

// ============================================================
// Message Class
// ============================================================

/**
 * Wrapper class for SQS messages with convenience methods.
 * @public
 */
export class Message {
  /**
   * Parsed message body.
   * - If bodyFormat is 'json', this will be the parsed object.
   * - If bodyFormat is 'plain', this will be the raw string.
   * - If unwrapSns is true, this will be the SNS message content.
   */
  public readonly body: unknown;

  /**
   * Raw SQS message object.
   */
  public readonly raw: SQSMessage;

  /**
   * Receipt handle for message operations.
   */
  public readonly receiptHandle: string;

  /**
   * Unique message identifier.
   */
  public readonly messageId: string;

  /**
   * Message system attributes.
   */
  public readonly attributes: MessageSystemAttributes;

  /**
   * Custom message attributes.
   */
  public readonly messageAttributes: MessageAttributes;

  /**
   * SNS message subject (only if unwrapSns is true).
   */
  public readonly subject?: string;

  /**
   * SNS topic ARN (only if unwrapSns is true).
   */
  public readonly topicArn?: string;

  /**
   * SNS topic name (only if unwrapSns is true).
   */
  public readonly topicName?: string;

  /**
   * Timestamp when message was received by poller.
   */
  public readonly receivedAt: Date;

  /**
   * Creates a new Message instance.
   * @internal
   */
  constructor(raw: SQSMessage) {
    throw new Error("not implemented");
  }

  /**
   * Queues the message for deletion.
   * @public
   */
  public del(): void {
    throw new Error("not implemented");
  }

  /**
   * Marks the message as handled without deleting.
   * @public
   */
  public keep(): void {
    throw new Error("not implemented");
  }

  /**
   * Releases the message back to the queue immediately.
   * @public
   * @returns Promise that resolves when release is complete.
   */
  public release(): Promise<void> {
    throw new Error("not implemented");
  }

  /**
   * Changes the visibility timeout of the message.
   * @public
   * @param seconds - New visibility timeout in seconds.
   * @returns Promise that resolves when change is complete.
   */
  public changeVisibility(seconds: number): Promise<void> {
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
export interface QueuePollerEvents {
  /** Emitted when a message is received from the queue. */
  message: (message: Message, stats: PollerStats) => void;
  /** Emitted when a message is marked as handled. */
  handled: (message: Message) => void;
  /** Emitted when a message is successfully deleted. */
  deleted: (message: Message) => void;
  /** Emitted when a message is queued for deletion. */
  delQueued: (message: Message) => void;
  /** Emitted when a message is released back to the queue. */
  released: (message: Message) => void;
  /** Emitted when messages are received from SQS. */
  gotMessages: (count: number) => void;
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
  timeoutExtended: (message: Message) => void;
  /** Emitted when automatic timeout extension fails. */
  autoExtendFail: (data: { message: Message; error: Error }) => void;
  /** Emitted when a polling error occurs. */
  error: (error: Error) => void;
  /** Emitted when message deletion fails. */
  delError: (error: DeleteError) => void;
  /** Emitted when message processing throws an error. */
  processing_error: (error: Error, message: Message) => void;
  /** Emitted when message processing times out. */
  timeout_error: (error: TimeoutError, message: Message) => void;
}

/**
 * The main class for polling messages from an SQS queue.
 * @public
 */
export class QueuePoller extends EventEmitter {
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

  // ============================================================
  // Constructor
  // ============================================================

  /**
   * Creates a new QueuePoller instance.
   * @public
   * @param config - Configuration options.
   * @throws {PollerError} If configuration is invalid.
   */
  constructor(config: PollerConfig) {
    super();
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
   * @param soft - If true, waits for in-flight messages to complete.
   * @returns Promise that resolves when polling has stopped.
   */
  public stop(soft?: boolean): Promise<void> {
    throw new Error("not implemented");
  }

  // ============================================================
  // Message Operations
  // ============================================================

  /**
   * Deletes a message from the queue.
   * @public
   * @param message - The message to delete.
   */
  public deleteMessage(message: Message): void {
    throw new Error("not implemented");
  }

  /**
   * Deletes multiple messages from the queue.
   * @public
   * @param messages - Array of messages to delete.
   * @returns Promise that resolves when deletion is complete.
   */
  public deleteMessages(messages: Message[]): Promise<void> {
    throw new Error("not implemented");
  }

  /**
   * Changes the visibility timeout of a message.
   * @public
   * @param message - The message to modify.
   * @param seconds - New visibility timeout in seconds.
   * @returns Promise that resolves when change is complete.
   */
  public changeMessageVisibility(message: Message, seconds: number): Promise<void> {
    throw new Error("not implemented");
  }

  /**
   * Marks a message as handled without deleting it.
   * @public
   * @param message - The message to mark as handled.
   */
  public handledMessage(message: Message): void {
    throw new Error("not implemented");
  }

  /**
   * Releases a message back to the queue immediately.
   * @public
   * @param message - The message to release.
   * @returns Promise that resolves when release is complete.
   */
  public releaseMessage(message: Message): Promise<void> {
    throw new Error("not implemented");
  }

  // ============================================================
  // Queue Operations
  // ============================================================

  /**
   * Creates the configured queue.
   * @public
   * @returns Promise that resolves with the queue URL.
   * @throws {PollerError} If queue creation fails.
   */
  public createQueue(): Promise<string> {
    throw new Error("not implemented");
  }

  /**
   * Deletes the configured queue.
   * @public
   * @returns Promise that resolves when deletion is complete.
   * @throws {PollerError} If queue deletion fails.
   */
  public deleteQueue(): Promise<void> {
    throw new Error("not implemented");
  }

  /**
   * Gets the URL of the configured queue.
   * @public
   * @returns Promise that resolves with the queue URL.
   */
  public getQueueUrl(): Promise<string> {
    throw new Error("not implemented");
  }

  // ============================================================
  // Message Sending
  // ============================================================

  /**
   * Sends a single message to the queue.
   * @public
   * @param message - Message body (string or object).
   * @param delay - Optional delay in seconds.
   * @param attributes - Optional message attributes.
   * @returns Promise that resolves with send result.
   */
  public sendMessage(
    message: string | object,
    delay?: number,
    attributes?: MessageAttributes,
  ): Promise<SendMessageResult> {
    throw new Error("not implemented");
  }

  /**
   * Sends multiple messages to the queue.
   * @public
   * @param messages - Array of message bodies.
   * @param delay - Optional delay in seconds.
   * @param attributes - Optional message attributes.
   * @returns Promise that resolves with batch send result.
   */
  public sendMessages(
    messages: Array<string | object>,
    delay?: number,
    attributes?: MessageAttributes,
  ): Promise<SendMessageBatchResult> {
    throw new Error("not implemented");
  }

  // ============================================================
  // Callbacks
  // ============================================================

  /**
   * Registers a callback to be invoked before each polling request.
   * @public
   * @param callback - Function to call with current statistics.
   */
  public beforeRequest(callback: (stats: PollerStats) => void): void {
    throw new Error("not implemented");
  }

  // ============================================================
  // Event Emitter Overrides (for type safety)
  // ============================================================

  /**
   * Adds a listener for the specified event.
   * @public
   * @param event - The event name.
   * @param listener - The callback function.
   */
  public on<K extends keyof QueuePollerEvents>(event: K, listener: QueuePollerEvents[K]): this {
    return super.on(event, listener);
  }

  /**
   * Adds a one-time listener for the specified event.
   * @public
   * @param event - The event name.
   * @param listener - The callback function.
   */
  public once<K extends keyof QueuePollerEvents>(event: K, listener: QueuePollerEvents[K]): this {
    return super.once(event, listener);
  }

  /**
   * Emits the specified event.
   * @public
   * @param event - The event name.
   * @param args - Arguments to pass to listeners.
   */
  public emit<K extends keyof QueuePollerEvents>(event: K, ...args: Parameters<QueuePollerEvents[K]>): boolean {
    return super.emit(event, ...args);
  }
}

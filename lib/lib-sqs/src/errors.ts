import type { BatchResultErrorEntry } from "@aws-sdk/client-sqs";

/**
 * Base error class for all poller errors.
 * @public
 */
export class PollerError extends Error {
  public readonly name: string = "PollerError";

  constructor(message: string, options?: { cause?: Error }) {
    super(message, options);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Thrown when a poller operation exceeds its time limit.
 * @public
 */
export class TimeoutError extends PollerError {
  public override readonly name: string = "TimeoutError";

  /** The timeout that was exceeded, in ms. */
  public readonly timeoutMs: number;

  constructor(message: string, timeoutMs: number, options?: { cause?: Error }) {
    super(message, options);
    this.timeoutMs = timeoutMs;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Thrown when `DeleteMessageBatch` reports failures. Batch entry `Id`s are opaque
 * indices, so `messageIds` maps each failure back to its original `MessageId`.
 *
 * @public
 */
export class DeleteError extends PollerError {
  public override readonly name: string = "DeleteError";

  /** Individual failure entries from the SQS batch response. */
  public readonly failures: BatchResultErrorEntry[];

  /** The `MessageId` values corresponding to each failure, in the same order. */
  public readonly messageIds: string[];

  constructor(message: string, failures: BatchResultErrorEntry[], messageIds?: string[], options?: { cause?: Error }) {
    super(message, options);
    this.failures = failures;
    this.messageIds = messageIds ?? [];
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Thrown when extending a message's visibility timeout fails.
 * @public
 */
export class VisibilityExtensionError extends PollerError {
  public override readonly name: string = "VisibilityExtensionError";

  /** The `MessageId` of the message whose extension failed. */
  public readonly messageId: string;

  constructor(message: string, messageId: string, options?: { cause?: Error }) {
    super(message, options);
    this.messageId = messageId;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

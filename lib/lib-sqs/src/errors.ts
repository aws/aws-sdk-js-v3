import type { BatchResultErrorEntry } from "@aws-sdk/client-sqs";

/**
 * Base error class for all poller errors.
 * @public
 */
export class PollerError extends Error {
  public readonly name: string = "PollerError";

  public constructor(message: string, options?: { cause?: Error }) {
    super(message, options);
  }
}

/**
 * Thrown when a poller operation exceeds its time limit.
 * @public
 */
export class TimeoutError extends PollerError {
  public override readonly name: string = "TimeoutError";
  public readonly timeoutMs: number;

  public constructor(message: string, timeoutMs: number, options?: { cause?: Error }) {
    super(message, options);
    this.timeoutMs = timeoutMs;
  }
}

/**
 * Thrown when `DeleteMessageBatch` reports failures.
 * @public
 */
export class DeleteError extends PollerError {
  public override readonly name: string = "DeleteError";
  public readonly failures: BatchResultErrorEntry[];
  public readonly messageIds: string[];

  public constructor(
    message: string,
    failures: BatchResultErrorEntry[],
    messageIds?: string[],
    options?: { cause?: Error }
  ) {
    super(message, options);
    this.failures = failures;
    this.messageIds = messageIds ?? [];
  }
}

/**
 * Thrown when extending a message's visibility timeout fails.
 * @public
 */
export class VisibilityExtensionError extends PollerError {
  public override readonly name: string = "VisibilityExtensionError";
  public readonly messageId: string;

  public constructor(message: string, messageId: string, options?: { cause?: Error }) {
    super(message, options);
    this.messageId = messageId;
  }
}

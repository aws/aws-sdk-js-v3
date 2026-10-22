import type { Message as SQSMessage, MessageAttributeValue, MessageSystemAttributeName } from "@aws-sdk/client-sqs";

import type { PollerMessage } from "./types";

/**
 * Callbacks the poller injects so Message can perform SQS operations
 * without holding a reference to the client.
 * @internal
 */
export interface MessageCallbacks {
  enqueueDelete: (msg: Message) => void;
  keep: (receiptHandle: string) => void;
  release: (receiptHandle: string) => Promise<void>;
  changeVisibility: (receiptHandle: string, timeoutMs: number) => Promise<void>;
}

/**
 * Wrapper around an SQS `Message` with convenience methods.
 *
 * Instances are created internally by {@link SQSPoller}. Consumers
 * should not instantiate this class directly.
 *
 * @public
 */
export class Message implements PollerMessage {
  public readonly raw: SQSMessage;
  public readonly body: string | undefined;
  public readonly messageId: string;
  public readonly receiptHandle: string;
  public readonly attributes: Partial<Record<MessageSystemAttributeName, string>>;
  public readonly messageAttributes: Record<string, MessageAttributeValue>;
  public readonly receivedAt: Date;

  private readonly _callbacks: MessageCallbacks;
  private _handled = false;

  /**
   * @internal
   */
  public constructor(raw: SQSMessage, callbacks: MessageCallbacks) {
    this.raw = raw;
    this.body = raw.Body;
    this.messageId = raw.MessageId ?? "";
    this.receiptHandle = raw.ReceiptHandle ?? "";
    this.attributes = (raw.Attributes as Partial<Record<MessageSystemAttributeName, string>>) ?? {};
    this.messageAttributes = (raw.MessageAttributes as Record<string, MessageAttributeValue>) ?? {};
    this.receivedAt = new Date();
    this._callbacks = callbacks;
  }

  /**
   * Whether `enqueueDelete`, `keep`, or `release` has already run.
   * @internal
   */
  public get handled(): boolean {
    return this._handled;
  }

  /** Queue this message for batch deletion. */
  public enqueueDelete(): void {
    if (this._handled) return;
    this._handled = true;
    this._callbacks.enqueueDelete(this);
  }

  /** Acknowledge the message without deleting it from the queue. */
  public keep(): void {
    this._handled = true;
    this._callbacks.keep(this.receiptHandle);
  }

  /** Release the message back to the queue immediately (visibility → 0). */
  public async release(): Promise<void> {
    this._handled = true;
    await this._callbacks.release(this.receiptHandle);
  }

  /**
   * Change the visibility timeout of this message. Stops automatic extension for it.
   * @param timeoutMs - New visibility timeout, rounded up to whole seconds for SQS.
   */
  public async changeVisibility(timeoutMs: number): Promise<void> {
    await this._callbacks.changeVisibility(this.receiptHandle, timeoutMs);
  }
}

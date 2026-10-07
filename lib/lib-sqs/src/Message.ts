import type {
  SQSClient,
  Message as SQSMessage,
  MessageAttributeValue,
  MessageSystemAttributeName,
} from "@aws-sdk/client-sqs";
import { ChangeMessageVisibilityCommand } from "@aws-sdk/client-sqs";

import type { PollerMessage } from "./types";

/**
 * Lets a Message add itself to the poller's delete batch.
 * @internal
 */
export type EnqueueDeleteFn = (msg: Message) => void;

/**
 * Wrapper around an SQS `Message` with convenience methods.
 *
 * Instances are created internally by {@link SQSPoller} — consumers
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

  private readonly _client: SQSClient;
  private readonly _queueUrl: string;
  private readonly _enqueueDelete: EnqueueDeleteFn;
  private _handled = false;

  /** @internal */
  constructor(raw: SQSMessage, client: SQSClient, queueUrl: string, enqueueDelete: EnqueueDeleteFn) {
    this.raw = raw;
    this.body = raw.Body;
    this.messageId = raw.MessageId ?? "";
    this.receiptHandle = raw.ReceiptHandle ?? "";
    this.attributes = (raw.Attributes as Partial<Record<MessageSystemAttributeName, string>>) ?? {};
    this.messageAttributes = (raw.MessageAttributes as Record<string, MessageAttributeValue>) ?? {};
    this.receivedAt = new Date();

    this._client = client;
    this._queueUrl = queueUrl;
    this._enqueueDelete = enqueueDelete;
  }

  /**
   * Whether `enqueueDelete`, `keep`, or `release` has already run.
   * @internal
   */
  get handled(): boolean {
    return this._handled;
  }

  /**
   * Queue this message for batch deletion.
   * The actual `DeleteMessageBatch` call happens when the batch fills
   * or `deleteWaitMs` expires.
   */
  enqueueDelete(): void {
    if (this._handled) return;
    this._handled = true;
    this._enqueueDelete(this);
  }

  /**
   * Acknowledge the message without deleting it from the queue.
   * The message will become visible again after its visibility timeout.
   */
  keep(): void {
    this._handled = true;
  }

  /**
   * Release the message back to the queue immediately by setting
   * its visibility timeout to 0.
   */
  async release(): Promise<void> {
    this._handled = true;
    await this._client.send(
      new ChangeMessageVisibilityCommand({
        QueueUrl: this._queueUrl,
        ReceiptHandle: this.receiptHandle,
        VisibilityTimeout: 0,
      })
    );
  }

  /**
   * Change the visibility timeout of this message.
   * @param timeoutMs - New visibility timeout, rounded up to whole seconds for SQS.
   */
  async changeVisibility(timeoutMs: number): Promise<void> {
    await this._client.send(
      new ChangeMessageVisibilityCommand({
        QueueUrl: this._queueUrl,
        ReceiptHandle: this.receiptHandle,
        VisibilityTimeout: Math.ceil(timeoutMs / 1000),
      })
    );
  }
}

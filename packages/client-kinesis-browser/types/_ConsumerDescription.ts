/**
 * <p>An object that represents the details of a registered consumer.</p>
 */
export interface _ConsumerDescription {
  /**
   * <p>The name of the consumer is something you choose when you register the consumer.</p>
   */
  ConsumerName: string;

  /**
   * <p>When you register a consumer, Kinesis Data Streams generates an ARN for it. You need this ARN to be able to call <a>SubscribeToShard</a>.</p> <p>If you delete a consumer and then create a new one with the same name, it won't have the same ARN. That's because consumer ARNs contain the creation timestamp. This is important to keep in mind if you have IAM policies that reference consumer ARNs.</p>
   */
  ConsumerARN: string;

  /**
   * <p>A consumer can't read data while in the <code>CREATING</code> or <code>DELETING</code> states.</p>
   */
  ConsumerStatus: "CREATING" | "DELETING" | "ACTIVE" | string;

  /**
   * <p/>
   */
  ConsumerCreationTimestamp: Date | string | number;

  /**
   * <p>The ARN of the stream with which you registered the consumer.</p>
   */
  StreamARN: string;
}

export interface _UnmarshalledConsumerDescription extends _ConsumerDescription {
  /**
   * <p/>
   */
  ConsumerCreationTimestamp: Date;
}

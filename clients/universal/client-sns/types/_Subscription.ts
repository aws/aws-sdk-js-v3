/**
 * <p>A wrapper type for the attributes of an Amazon SNS subscription.</p>
 */
export interface _Subscription {
  /**
   * <p>The subscription's ARN.</p>
   */
  SubscriptionArn?: string;

  /**
   * <p>The subscription's owner.</p>
   */
  Owner?: string;

  /**
   * <p>The subscription's protocol.</p>
   */
  Protocol?: string;

  /**
   * <p>The subscription's endpoint (format depends on the protocol).</p>
   */
  Endpoint?: string;

  /**
   * <p>The ARN of the subscription's topic.</p>
   */
  TopicArn?: string;
}

export type _UnmarshalledSubscription = _Subscription;

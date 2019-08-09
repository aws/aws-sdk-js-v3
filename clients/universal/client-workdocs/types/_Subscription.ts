/**
 * <p>Describes a subscription.</p>
 */
export interface _Subscription {
  /**
   * <p>The ID of the subscription.</p>
   */
  SubscriptionId?: string;

  /**
   * <p>The endpoint of the subscription.</p>
   */
  EndPoint?: string;

  /**
   * <p>The protocol of the subscription.</p>
   */
  Protocol?: "HTTPS" | string;
}

export type _UnmarshalledSubscription = _Subscription;

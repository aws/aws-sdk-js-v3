import { _Subscription, _UnmarshalledSubscription } from "./_Subscription";

/**
 * Information about a subscription definition version.
 */
export interface _SubscriptionDefinitionVersion {
  /**
   * A list of subscriptions.
   */
  Subscriptions?: Array<_Subscription> | Iterable<_Subscription>;
}

export interface _UnmarshalledSubscriptionDefinitionVersion
  extends _SubscriptionDefinitionVersion {
  /**
   * A list of subscriptions.
   */
  Subscriptions?: Array<_UnmarshalledSubscription>;
}

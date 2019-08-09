import {
  _EventSubscription,
  _UnmarshalledEventSubscription
} from "./_EventSubscription";

/**
 * <p>This data type is used as a response element in the <a>ListEventSubscriptions</a> action.</p>
 */
export interface _Subscription {
  /**
   * <p>The ARN of the assessment template that is used during the event for which the SNS notification is sent.</p>
   */
  resourceArn: string;

  /**
   * <p>The ARN of the Amazon Simple Notification Service (SNS) topic to which the SNS notifications are sent.</p>
   */
  topicArn: string;

  /**
   * <p>The list of existing event subscriptions.</p>
   */
  eventSubscriptions: Array<_EventSubscription> | Iterable<_EventSubscription>;
}

export interface _UnmarshalledSubscription extends _Subscription {
  /**
   * <p>The list of existing event subscriptions.</p>
   */
  eventSubscriptions: Array<_UnmarshalledEventSubscription>;
}

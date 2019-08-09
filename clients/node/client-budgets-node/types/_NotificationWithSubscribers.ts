import { _Notification, _UnmarshalledNotification } from "./_Notification";
import { _Subscriber, _UnmarshalledSubscriber } from "./_Subscriber";

/**
 * <p>A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p>
 */
export interface _NotificationWithSubscribers {
  /**
   * <p>The notification that is associated with a budget.</p>
   */
  Notification: _Notification;

  /**
   * <p>A list of subscribers who are subscribed to this notification.</p>
   */
  Subscribers: Array<_Subscriber> | Iterable<_Subscriber>;
}

export interface _UnmarshalledNotificationWithSubscribers
  extends _NotificationWithSubscribers {
  /**
   * <p>The notification that is associated with a budget.</p>
   */
  Notification: _UnmarshalledNotification;

  /**
   * <p>A list of subscribers who are subscribed to this notification.</p>
   */
  Subscribers: Array<_UnmarshalledSubscriber>;
}

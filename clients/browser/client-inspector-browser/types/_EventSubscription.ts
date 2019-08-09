/**
 * <p>This data type is used in the <a>Subscription</a> data type.</p>
 */
export interface _EventSubscription {
  /**
   * <p>The event for which Amazon Simple Notification Service (SNS) notifications are sent.</p>
   */
  event:
    | "ASSESSMENT_RUN_STARTED"
    | "ASSESSMENT_RUN_COMPLETED"
    | "ASSESSMENT_RUN_STATE_CHANGED"
    | "FINDING_REPORTED"
    | "OTHER"
    | string;

  /**
   * <p>The time at which <a>SubscribeToEvent</a> is called.</p>
   */
  subscribedAt: Date | string | number;
}

export interface _UnmarshalledEventSubscription extends _EventSubscription {
  /**
   * <p>The time at which <a>SubscribeToEvent</a> is called.</p>
   */
  subscribedAt: Date;
}

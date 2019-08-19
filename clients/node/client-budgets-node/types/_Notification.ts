/**
 * <p>A notification that is associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul>
 */
export interface _Notification {
  /**
   * <p>Whether the notification is for how much you have spent (<code>ACTUAL</code>) or for how much you're forecasted to spend (<code>FORECASTED</code>).</p>
   */
  NotificationType: "ACTUAL" | "FORECASTED" | string;

  /**
   * <p>The comparison that is used for this notification.</p>
   */
  ComparisonOperator: "GREATER_THAN" | "LESS_THAN" | "EQUAL_TO" | string;

  /**
   * <p>The threshold that is associated with a notification. Thresholds are always a percentage.</p>
   */
  Threshold: number;

  /**
   * <p>The type of threshold for a notification. For <code>ABSOLUTE_VALUE</code> thresholds, AWS notifies you when you go over or are forecasted to go over your total cost threshold. For <code>PERCENTAGE</code> thresholds, AWS notifies you when you go over or are forecasted to go over a certain percentage of your forecasted spend. For example, if you have a budget for 200 dollars and you have a <code>PERCENTAGE</code> threshold of 80%, AWS notifies you when you go over 160 dollars.</p>
   */
  ThresholdType?: "PERCENTAGE" | "ABSOLUTE_VALUE" | string;

  /**
   * <p>Whether this notification is in alarm. If a budget notification is in the <code>ALARM</code> state, you have passed the set threshold for the budget.</p>
   */
  NotificationState?: "OK" | "ALARM" | string;
}

export type _UnmarshalledNotification = _Notification;

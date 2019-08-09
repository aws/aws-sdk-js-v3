/**
 * <p>Configurations for sending notifications.</p>
 */
export interface _NotificationConfig {
  /**
   * <p>An Amazon Resource Name (ARN) for an Amazon Simple Notification Service (Amazon SNS) topic. Run Command pushes notifications about command status changes to this topic.</p>
   */
  NotificationArn?: string;

  /**
   * <p>The different events for which you can receive notifications. These events include the following: All (events), InProgress, Success, TimedOut, Cancelled, Failed. To learn more about these events, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html">Configuring Amazon SNS Notifications for AWS Systems Manager</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  NotificationEvents?:
    | Array<
        | "All"
        | "InProgress"
        | "Success"
        | "TimedOut"
        | "Cancelled"
        | "Failed"
        | string
      >
    | Iterable<
        | "All"
        | "InProgress"
        | "Success"
        | "TimedOut"
        | "Cancelled"
        | "Failed"
        | string
      >;

  /**
   * <p>Command: Receive notification when the status of a command changes. Invocation: For commands sent to multiple instances, receive notification on a per-instance basis when the status of a command changes. </p>
   */
  NotificationType?: "Command" | "Invocation" | string;
}

export interface _UnmarshalledNotificationConfig extends _NotificationConfig {
  /**
   * <p>The different events for which you can receive notifications. These events include the following: All (events), InProgress, Success, TimedOut, Cancelled, Failed. To learn more about these events, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html">Configuring Amazon SNS Notifications for AWS Systems Manager</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  NotificationEvents?: Array<
    | "All"
    | "InProgress"
    | "Success"
    | "TimedOut"
    | "Cancelled"
    | "Failed"
    | string
  >;
}

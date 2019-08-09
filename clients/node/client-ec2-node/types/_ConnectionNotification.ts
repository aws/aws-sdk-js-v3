/**
 * <p>Describes a connection notification for a VPC endpoint or VPC endpoint service.</p>
 */
export interface _ConnectionNotification {
  /**
   * <p>The ID of the notification.</p>
   */
  ConnectionNotificationId?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the VPC endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * <p>The type of notification.</p>
   */
  ConnectionNotificationType?: "Topic" | string;

  /**
   * <p>The ARN of the SNS topic for the notification.</p>
   */
  ConnectionNotificationArn?: string;

  /**
   * <p>The events for the notification. Valid values are <code>Accept</code>, <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   */
  ConnectionEvents?: Array<string> | Iterable<string>;

  /**
   * <p>The state of the notification.</p>
   */
  ConnectionNotificationState?: "Enabled" | "Disabled" | string;
}

export interface _UnmarshalledConnectionNotification
  extends _ConnectionNotification {
  /**
   * <p>The events for the notification. Valid values are <code>Accept</code>, <code>Connect</code>, <code>Delete</code>, and <code>Reject</code>.</p>
   */
  ConnectionEvents?: Array<string>;
}

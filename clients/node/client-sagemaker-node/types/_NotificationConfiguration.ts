/**
 * <p>Configures SNS notifications of available or expiring work items for work teams.</p>
 */
export interface _NotificationConfiguration {
  /**
   * <p>The ARN for the SNS topic to which notifications should be published.</p>
   */
  NotificationTopicArn?: string;
}

export type _UnmarshalledNotificationConfiguration = _NotificationConfiguration;

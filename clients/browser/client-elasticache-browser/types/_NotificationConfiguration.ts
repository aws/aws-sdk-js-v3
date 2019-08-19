/**
 * <p>Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).</p>
 */
export interface _NotificationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the topic.</p>
   */
  TopicArn?: string;

  /**
   * <p>The current state of the topic.</p>
   */
  TopicStatus?: string;
}

export type _UnmarshalledNotificationConfiguration = _NotificationConfiguration;

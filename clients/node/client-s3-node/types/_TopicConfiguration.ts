import {
  _NotificationConfigurationFilter,
  _UnmarshalledNotificationConfigurationFilter
} from "./_NotificationConfigurationFilter";

/**
 * <p>A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events.</p>
 */
export interface _TopicConfiguration {
  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type.</p>
   */
  TopicArn: string;

  /**
   * <p>The Amazon S3 bucket event about which to send notifications. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported Event Types</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Events:
    | Array<
        | "s3:ReducedRedundancyLostObject"
        | "s3:ObjectCreated:*"
        | "s3:ObjectCreated:Put"
        | "s3:ObjectCreated:Post"
        | "s3:ObjectCreated:Copy"
        | "s3:ObjectCreated:CompleteMultipartUpload"
        | "s3:ObjectRemoved:*"
        | "s3:ObjectRemoved:Delete"
        | "s3:ObjectRemoved:DeleteMarkerCreated"
        | "s3:ObjectRestore:Post"
        | "s3:ObjectRestore:Completed"
        | string
      >
    | Iterable<
        | "s3:ReducedRedundancyLostObject"
        | "s3:ObjectCreated:*"
        | "s3:ObjectCreated:Put"
        | "s3:ObjectCreated:Post"
        | "s3:ObjectCreated:Copy"
        | "s3:ObjectCreated:CompleteMultipartUpload"
        | "s3:ObjectRemoved:*"
        | "s3:ObjectRemoved:Delete"
        | "s3:ObjectRemoved:DeleteMarkerCreated"
        | "s3:ObjectRestore:Post"
        | "s3:ObjectRestore:Completed"
        | string
      >;

  /**
   * <p/>
   */
  Filter?: _NotificationConfigurationFilter;
}

export interface _UnmarshalledTopicConfiguration extends _TopicConfiguration {
  /**
   * <p>The Amazon S3 bucket event about which to send notifications. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported Event Types</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Events: Array<
    | "s3:ReducedRedundancyLostObject"
    | "s3:ObjectCreated:*"
    | "s3:ObjectCreated:Put"
    | "s3:ObjectCreated:Post"
    | "s3:ObjectCreated:Copy"
    | "s3:ObjectCreated:CompleteMultipartUpload"
    | "s3:ObjectRemoved:*"
    | "s3:ObjectRemoved:Delete"
    | "s3:ObjectRemoved:DeleteMarkerCreated"
    | "s3:ObjectRestore:Post"
    | "s3:ObjectRestore:Completed"
    | string
  >;

  /**
   * <p/>
   */
  Filter?: _UnmarshalledNotificationConfigurationFilter;
}

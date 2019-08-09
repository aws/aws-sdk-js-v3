import {
  _NotificationConfigurationFilter,
  _UnmarshalledNotificationConfigurationFilter
} from "./_NotificationConfigurationFilter";

/**
 * <p>Specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events.</p>
 */
export interface _QueueConfiguration {
  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type.</p>
   */
  QueueArn: string;

  /**
   * <p/>
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

export interface _UnmarshalledQueueConfiguration extends _QueueConfiguration {
  /**
   * <p/>
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

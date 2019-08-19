/**
 * <p/>
 */
export interface _TopicConfigurationDeprecated {
  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p/>
   */
  Events?:
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
   * <p>Bucket event for which to send notifications.</p>
   */
  Event?:
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
    | string;

  /**
   * <p>Amazon SNS topic to which Amazon S3 will publish a message to report the specified events for the bucket.</p>
   */
  Topic?: string;
}

export interface _UnmarshalledTopicConfigurationDeprecated
  extends _TopicConfigurationDeprecated {
  /**
   * <p/>
   */
  Events?: Array<
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
}

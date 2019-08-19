import {
  _NotificationConfigurationFilter,
  _UnmarshalledNotificationConfigurationFilter
} from "./_NotificationConfigurationFilter";

/**
 * <p>A container for specifying the configuration for AWS Lambda notifications.</p>
 */
export interface _LambdaFunctionConfiguration {
  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon S3 invokes when the specified event type occurs.</p>
   */
  LambdaFunctionArn: string;

  /**
   * <p>The Amazon S3 bucket event for which to invoke the AWS Lambda function. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported Event Types</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
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

export interface _UnmarshalledLambdaFunctionConfiguration
  extends _LambdaFunctionConfiguration {
  /**
   * <p>The Amazon S3 bucket event for which to invoke the AWS Lambda function. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported Event Types</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
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

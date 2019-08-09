import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface CreateTrailOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies the name of the trail.</p>
   */
  Name?: string;

  /**
   * <p>Specifies the name of the Amazon S3 bucket designated for publishing log files.</p>
   */
  S3BucketName?: string;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>This field is deprecated. Use SnsTopicARN.</p>
   */
  SnsTopicName?: string;

  /**
   * <p>Specifies the ARN of the Amazon SNS topic that CloudTrail uses to send notifications when log files are delivered. The format of a topic ARN is:</p> <p> <code>arn:aws:sns:us-east-2:123456789012:MyTopic</code> </p>
   */
  SnsTopicARN?: string;

  /**
   * <p>Specifies whether the trail is publishing events from global services such as IAM to the log files.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * <p>Specifies whether the trail exists in one region or in all regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * <p>Specifies the ARN of the trail that was created. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>
   */
  TrailARN?: string;

  /**
   * <p>Specifies whether log file integrity validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the log group to which CloudTrail logs will be delivered.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>Specifies the KMS key ID that encrypts the logs delivered by CloudTrail. The value is a fully specified ARN to a KMS key in the format:</p> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies whether the trail is an organization trail.</p>
   */
  IsOrganizationTrail?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

/**
 * <p>The settings for a trail.</p>
 */
export interface _Trail {
  /**
   * <p>Name of the trail set by calling <a>CreateTrail</a>. The maximum length is 128 characters.</p>
   */
  Name?: string;

  /**
   * <p>Name of the Amazon S3 bucket into which CloudTrail delivers your trail files. See <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html">Amazon S3 Bucket Naming Requirements</a>.</p>
   */
  S3BucketName?: string;

  /**
   * <p>Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html">Finding Your CloudTrail Log Files</a>.The maximum length is 200 characters.</p>
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
   * <p>Set to <b>True</b> to include AWS API calls from AWS global services such as IAM. Otherwise, <b>False</b>.</p>
   */
  IncludeGlobalServiceEvents?: boolean;

  /**
   * <p>Specifies whether the trail belongs only to one region or exists in all regions.</p>
   */
  IsMultiRegionTrail?: boolean;

  /**
   * <p>The region in which the trail was created.</p>
   */
  HomeRegion?: string;

  /**
   * <p>Specifies the ARN of the trail. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>
   */
  TrailARN?: string;

  /**
   * <p>Specifies whether log file validation is enabled.</p>
   */
  LogFileValidationEnabled?: boolean;

  /**
   * <p>Specifies an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered.</p>
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
   * <p>Specifies if the trail has custom event selectors.</p>
   */
  HasCustomEventSelectors?: boolean;

  /**
   * <p>Specifies whether the trail is an organization trail.</p>
   */
  IsOrganizationTrail?: boolean;
}

export type _UnmarshalledTrail = _Trail;

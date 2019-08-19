import {
  _BufferingHints,
  _UnmarshalledBufferingHints
} from "./_BufferingHints";
import {
  _EncryptionConfiguration,
  _UnmarshalledEncryptionConfiguration
} from "./_EncryptionConfiguration";
import {
  _CloudWatchLoggingOptions,
  _UnmarshalledCloudWatchLoggingOptions
} from "./_CloudWatchLoggingOptions";

/**
 * <p>Describes a destination in Amazon S3.</p>
 */
export interface _S3DestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN: string;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  BucketARN: string;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can specify an extra prefix to be added in front of the time format prefix. If the prefix ends with a slash, it appears as a folder in the S3 bucket. For more information, see <a href="http://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#s3-object-name">Amazon S3 Object Name Format</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>
   */
  Prefix?: string;

  /**
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * <p>The buffering option. If no value is specified, <code>BufferingHints</code> object default values are used.</p>
   */
  BufferingHints: _BufferingHints;

  /**
   * <p>The compression format. If no value is specified, the default is <code>UNCOMPRESSED</code>.</p>
   */
  CompressionFormat: "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | string;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no encryption.</p>
   */
  EncryptionConfiguration: _EncryptionConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _CloudWatchLoggingOptions;
}

export interface _UnmarshalledS3DestinationDescription
  extends _S3DestinationDescription {
  /**
   * <p>The buffering option. If no value is specified, <code>BufferingHints</code> object default values are used.</p>
   */
  BufferingHints: _UnmarshalledBufferingHints;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no encryption.</p>
   */
  EncryptionConfiguration: _UnmarshalledEncryptionConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _UnmarshalledCloudWatchLoggingOptions;
}

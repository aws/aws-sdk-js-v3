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
import {
  _ProcessingConfiguration,
  _UnmarshalledProcessingConfiguration
} from "./_ProcessingConfiguration";
import {
  _S3DestinationUpdate,
  _UnmarshalledS3DestinationUpdate
} from "./_S3DestinationUpdate";
import {
  _DataFormatConversionConfiguration,
  _UnmarshalledDataFormatConversionConfiguration
} from "./_DataFormatConversionConfiguration";

/**
 * <p>Describes an update for a destination in Amazon S3.</p>
 */
export interface _ExtendedS3DestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  BucketARN?: string;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can specify an extra prefix to be added in front of the time format prefix. If the prefix ends with a slash, it appears as a folder in the S3 bucket. For more information, see <a href="http://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#s3-object-name">Amazon S3 Object Name Format</a> in the <i>Amazon Kinesis Data Firehose Developer Guide</i>.</p>
   */
  Prefix?: string;

  /**
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * <p>The buffering option.</p>
   */
  BufferingHints?: _BufferingHints;

  /**
   * <p>The compression format. If no value is specified, the default is <code>UNCOMPRESSED</code>. </p>
   */
  CompressionFormat?: "UNCOMPRESSED" | "GZIP" | "ZIP" | "Snappy" | string;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no encryption.</p>
   */
  EncryptionConfiguration?: _EncryptionConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _CloudWatchLoggingOptions;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _ProcessingConfiguration;

  /**
   * <p>Enables or disables Amazon S3 backup mode.</p>
   */
  S3BackupMode?: "Disabled" | "Enabled" | string;

  /**
   * <p>The Amazon S3 destination for backup.</p>
   */
  S3BackupUpdate?: _S3DestinationUpdate;

  /**
   * <p>The serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.</p>
   */
  DataFormatConversionConfiguration?: _DataFormatConversionConfiguration;
}

export interface _UnmarshalledExtendedS3DestinationUpdate
  extends _ExtendedS3DestinationUpdate {
  /**
   * <p>The buffering option.</p>
   */
  BufferingHints?: _UnmarshalledBufferingHints;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no encryption.</p>
   */
  EncryptionConfiguration?: _UnmarshalledEncryptionConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _UnmarshalledCloudWatchLoggingOptions;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _UnmarshalledProcessingConfiguration;

  /**
   * <p>The Amazon S3 destination for backup.</p>
   */
  S3BackupUpdate?: _UnmarshalledS3DestinationUpdate;

  /**
   * <p>The serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.</p>
   */
  DataFormatConversionConfiguration?: _UnmarshalledDataFormatConversionConfiguration;
}

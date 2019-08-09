import { _CopyCommand, _UnmarshalledCopyCommand } from "./_CopyCommand";
import {
  _RedshiftRetryOptions,
  _UnmarshalledRedshiftRetryOptions
} from "./_RedshiftRetryOptions";
import {
  _S3DestinationUpdate,
  _UnmarshalledS3DestinationUpdate
} from "./_S3DestinationUpdate";
import {
  _ProcessingConfiguration,
  _UnmarshalledProcessingConfiguration
} from "./_ProcessingConfiguration";
import {
  _CloudWatchLoggingOptions,
  _UnmarshalledCloudWatchLoggingOptions
} from "./_CloudWatchLoggingOptions";

/**
 * <p>Describes an update for a destination in Amazon Redshift.</p>
 */
export interface _RedshiftDestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * <p>The database connection string.</p>
   */
  ClusterJDBCURL?: string;

  /**
   * <p>The <code>COPY</code> command.</p>
   */
  CopyCommand?: _CopyCommand;

  /**
   * <p>The name of the user.</p>
   */
  Username?: string;

  /**
   * <p>The user password.</p>
   */
  Password?: string;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).</p>
   */
  RetryOptions?: _RedshiftRetryOptions;

  /**
   * <p>The Amazon S3 destination.</p> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationUpdate.S3Update</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p>
   */
  S3Update?: _S3DestinationUpdate;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _ProcessingConfiguration;

  /**
   * <p>The Amazon S3 backup mode.</p>
   */
  S3BackupMode?: "Disabled" | "Enabled" | string;

  /**
   * <p>The Amazon S3 destination for backup.</p>
   */
  S3BackupUpdate?: _S3DestinationUpdate;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _CloudWatchLoggingOptions;
}

export interface _UnmarshalledRedshiftDestinationUpdate
  extends _RedshiftDestinationUpdate {
  /**
   * <p>The <code>COPY</code> command.</p>
   */
  CopyCommand?: _UnmarshalledCopyCommand;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).</p>
   */
  RetryOptions?: _UnmarshalledRedshiftRetryOptions;

  /**
   * <p>The Amazon S3 destination.</p> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationUpdate.S3Update</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p>
   */
  S3Update?: _UnmarshalledS3DestinationUpdate;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _UnmarshalledProcessingConfiguration;

  /**
   * <p>The Amazon S3 destination for backup.</p>
   */
  S3BackupUpdate?: _UnmarshalledS3DestinationUpdate;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _UnmarshalledCloudWatchLoggingOptions;
}

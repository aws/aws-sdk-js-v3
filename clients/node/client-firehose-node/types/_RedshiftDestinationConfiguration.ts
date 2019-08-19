import { _CopyCommand, _UnmarshalledCopyCommand } from "./_CopyCommand";
import {
  _RedshiftRetryOptions,
  _UnmarshalledRedshiftRetryOptions
} from "./_RedshiftRetryOptions";
import {
  _S3DestinationConfiguration,
  _UnmarshalledS3DestinationConfiguration
} from "./_S3DestinationConfiguration";
import {
  _ProcessingConfiguration,
  _UnmarshalledProcessingConfiguration
} from "./_ProcessingConfiguration";
import {
  _CloudWatchLoggingOptions,
  _UnmarshalledCloudWatchLoggingOptions
} from "./_CloudWatchLoggingOptions";

/**
 * <p>Describes the configuration of a destination in Amazon Redshift.</p>
 */
export interface _RedshiftDestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN: string;

  /**
   * <p>The database connection string.</p>
   */
  ClusterJDBCURL: string;

  /**
   * <p>The <code>COPY</code> command.</p>
   */
  CopyCommand: _CopyCommand;

  /**
   * <p>The name of the user.</p>
   */
  Username: string;

  /**
   * <p>The user password.</p>
   */
  Password: string;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).</p>
   */
  RetryOptions?: _RedshiftRetryOptions;

  /**
   * <p>The configuration for the intermediate Amazon S3 location from which Amazon Redshift obtains data. Restrictions are described in the topic for <a>CreateDeliveryStream</a>.</p> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p>
   */
  S3Configuration: _S3DestinationConfiguration;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _ProcessingConfiguration;

  /**
   * <p>The Amazon S3 backup mode.</p>
   */
  S3BackupMode?: "Disabled" | "Enabled" | string;

  /**
   * <p>The configuration for backup in Amazon S3.</p>
   */
  S3BackupConfiguration?: _S3DestinationConfiguration;

  /**
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _CloudWatchLoggingOptions;
}

export interface _UnmarshalledRedshiftDestinationConfiguration
  extends _RedshiftDestinationConfiguration {
  /**
   * <p>The <code>COPY</code> command.</p>
   */
  CopyCommand: _UnmarshalledCopyCommand;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).</p>
   */
  RetryOptions?: _UnmarshalledRedshiftRetryOptions;

  /**
   * <p>The configuration for the intermediate Amazon S3 location from which Amazon Redshift obtains data. Restrictions are described in the topic for <a>CreateDeliveryStream</a>.</p> <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these compression formats.</p>
   */
  S3Configuration: _UnmarshalledS3DestinationConfiguration;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _UnmarshalledProcessingConfiguration;

  /**
   * <p>The configuration for backup in Amazon S3.</p>
   */
  S3BackupConfiguration?: _UnmarshalledS3DestinationConfiguration;

  /**
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _UnmarshalledCloudWatchLoggingOptions;
}

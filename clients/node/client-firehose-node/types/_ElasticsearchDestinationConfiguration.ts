import {
  _ElasticsearchBufferingHints,
  _UnmarshalledElasticsearchBufferingHints
} from "./_ElasticsearchBufferingHints";
import {
  _ElasticsearchRetryOptions,
  _UnmarshalledElasticsearchRetryOptions
} from "./_ElasticsearchRetryOptions";
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
 * <p>Describes the configuration of a destination in Amazon ES.</p>
 */
export interface _ElasticsearchDestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon ES Configuration API and for indexing documents. For more information, see <a href="http://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN: string;

  /**
   * <p>The ARN of the Amazon ES domain. The IAM role must have permissions for <code>DescribeElasticsearchDomain</code>, <code>DescribeElasticsearchDomains</code>, and <code>DescribeElasticsearchDomainConfig</code> after assuming the role specified in <b>RoleARN</b>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  DomainARN: string;

  /**
   * <p>The Elasticsearch index name.</p>
   */
  IndexName: string;

  /**
   * <p>The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per index. If you try to specify a new type for an existing index that already has another type, Kinesis Data Firehose returns an error during run time.</p>
   */
  TypeName: string;

  /**
   * <p>The Elasticsearch index rotation period. Index rotation appends a timestamp to the <code>IndexName</code> to facilitate the expiration of old data. For more information, see <a href="http://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation">Index Rotation for the Amazon ES Destination</a>. The default value is <code>OneDay</code>.</p>
   */
  IndexRotationPeriod?:
    | "NoRotation"
    | "OneHour"
    | "OneDay"
    | "OneWeek"
    | "OneMonth"
    | string;

  /**
   * <p>The buffering options. If no value is specified, the default values for <code>ElasticsearchBufferingHints</code> are used.</p>
   */
  BufferingHints?: _ElasticsearchBufferingHints;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. The default value is 300 (5 minutes).</p>
   */
  RetryOptions?: _ElasticsearchRetryOptions;

  /**
   * <p>Defines how documents should be delivered to Amazon S3. When it is set to <code>FailedDocumentsOnly</code>, Kinesis Data Firehose writes any documents that could not be indexed to the configured Amazon S3 destination, with <code>elasticsearch-failed/</code> appended to the key prefix. When set to <code>AllDocuments</code>, Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed documents with <code>elasticsearch-failed/</code> appended to the prefix. For more information, see <a href="http://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-s3-backup">Amazon S3 Backup for the Amazon ES Destination</a>. Default value is <code>FailedDocumentsOnly</code>.</p>
   */
  S3BackupMode?: "FailedDocumentsOnly" | "AllDocuments" | string;

  /**
   * <p>The configuration for the backup Amazon S3 location.</p>
   */
  S3Configuration: _S3DestinationConfiguration;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _ProcessingConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _CloudWatchLoggingOptions;
}

export interface _UnmarshalledElasticsearchDestinationConfiguration
  extends _ElasticsearchDestinationConfiguration {
  /**
   * <p>The buffering options. If no value is specified, the default values for <code>ElasticsearchBufferingHints</code> are used.</p>
   */
  BufferingHints?: _UnmarshalledElasticsearchBufferingHints;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. The default value is 300 (5 minutes).</p>
   */
  RetryOptions?: _UnmarshalledElasticsearchRetryOptions;

  /**
   * <p>The configuration for the backup Amazon S3 location.</p>
   */
  S3Configuration: _UnmarshalledS3DestinationConfiguration;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _UnmarshalledProcessingConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _UnmarshalledCloudWatchLoggingOptions;
}

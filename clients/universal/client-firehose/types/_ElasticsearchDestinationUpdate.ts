import {
  _ElasticsearchBufferingHints,
  _UnmarshalledElasticsearchBufferingHints
} from "./_ElasticsearchBufferingHints";
import {
  _ElasticsearchRetryOptions,
  _UnmarshalledElasticsearchRetryOptions
} from "./_ElasticsearchRetryOptions";
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
 * <p>Describes an update for a destination in Amazon ES.</p>
 */
export interface _ElasticsearchDestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon ES Configuration API and for indexing documents. For more information, see <a href="http://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data Firehose Access to an Amazon S3 Destination</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * <p>The ARN of the Amazon ES domain. The IAM role must have permissions for <code>DescribeElasticsearchDomain</code>, <code>DescribeElasticsearchDomains</code>, and <code>DescribeElasticsearchDomainConfig</code> after assuming the IAM role specified in <code>RoleARN</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  DomainARN?: string;

  /**
   * <p>The Elasticsearch index name.</p>
   */
  IndexName?: string;

  /**
   * <p>The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per index. If you try to specify a new type for an existing index that already has another type, Kinesis Data Firehose returns an error during runtime.</p>
   */
  TypeName?: string;

  /**
   * <p>The Elasticsearch index rotation period. Index rotation appends a timestamp to <code>IndexName</code> to facilitate the expiration of old data. For more information, see <a href="http://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation">Index Rotation for the Amazon ES Destination</a>. Default value is <code>OneDay</code>.</p>
   */
  IndexRotationPeriod?:
    | "NoRotation"
    | "OneHour"
    | "OneDay"
    | "OneWeek"
    | "OneMonth"
    | string;

  /**
   * <p>The buffering options. If no value is specified, <code>ElasticsearchBufferingHints</code> object default values are used. </p>
   */
  BufferingHints?: _ElasticsearchBufferingHints;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. The default value is 300 (5 minutes).</p>
   */
  RetryOptions?: _ElasticsearchRetryOptions;

  /**
   * <p>The Amazon S3 destination.</p>
   */
  S3Update?: _S3DestinationUpdate;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _ProcessingConfiguration;

  /**
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _CloudWatchLoggingOptions;
}

export interface _UnmarshalledElasticsearchDestinationUpdate
  extends _ElasticsearchDestinationUpdate {
  /**
   * <p>The buffering options. If no value is specified, <code>ElasticsearchBufferingHints</code> object default values are used. </p>
   */
  BufferingHints?: _UnmarshalledElasticsearchBufferingHints;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon ES. The default value is 300 (5 minutes).</p>
   */
  RetryOptions?: _UnmarshalledElasticsearchRetryOptions;

  /**
   * <p>The Amazon S3 destination.</p>
   */
  S3Update?: _UnmarshalledS3DestinationUpdate;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _UnmarshalledProcessingConfiguration;

  /**
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _UnmarshalledCloudWatchLoggingOptions;
}

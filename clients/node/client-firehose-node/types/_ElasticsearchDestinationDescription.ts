import {
  _ElasticsearchBufferingHints,
  _UnmarshalledElasticsearchBufferingHints
} from "./_ElasticsearchBufferingHints";
import {
  _ElasticsearchRetryOptions,
  _UnmarshalledElasticsearchRetryOptions
} from "./_ElasticsearchRetryOptions";
import {
  _S3DestinationDescription,
  _UnmarshalledS3DestinationDescription
} from "./_S3DestinationDescription";
import {
  _ProcessingConfiguration,
  _UnmarshalledProcessingConfiguration
} from "./_ProcessingConfiguration";
import {
  _CloudWatchLoggingOptions,
  _UnmarshalledCloudWatchLoggingOptions
} from "./_CloudWatchLoggingOptions";

/**
 * <p>The destination description in Amazon ES.</p>
 */
export interface _ElasticsearchDestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS credentials. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * <p>The ARN of the Amazon ES domain. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  DomainARN?: string;

  /**
   * <p>The Elasticsearch index name.</p>
   */
  IndexName?: string;

  /**
   * <p>The Elasticsearch type name.</p>
   */
  TypeName?: string;

  /**
   * <p>The Elasticsearch index rotation period</p>
   */
  IndexRotationPeriod?:
    | "NoRotation"
    | "OneHour"
    | "OneDay"
    | "OneWeek"
    | "OneMonth"
    | string;

  /**
   * <p>The buffering options.</p>
   */
  BufferingHints?: _ElasticsearchBufferingHints;

  /**
   * <p>The Amazon ES retry options.</p>
   */
  RetryOptions?: _ElasticsearchRetryOptions;

  /**
   * <p>The Amazon S3 backup mode.</p>
   */
  S3BackupMode?: "FailedDocumentsOnly" | "AllDocuments" | string;

  /**
   * <p>The Amazon S3 destination.</p>
   */
  S3DestinationDescription?: _S3DestinationDescription;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _ProcessingConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options.</p>
   */
  CloudWatchLoggingOptions?: _CloudWatchLoggingOptions;
}

export interface _UnmarshalledElasticsearchDestinationDescription
  extends _ElasticsearchDestinationDescription {
  /**
   * <p>The buffering options.</p>
   */
  BufferingHints?: _UnmarshalledElasticsearchBufferingHints;

  /**
   * <p>The Amazon ES retry options.</p>
   */
  RetryOptions?: _UnmarshalledElasticsearchRetryOptions;

  /**
   * <p>The Amazon S3 destination.</p>
   */
  S3DestinationDescription?: _UnmarshalledS3DestinationDescription;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _UnmarshalledProcessingConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options.</p>
   */
  CloudWatchLoggingOptions?: _UnmarshalledCloudWatchLoggingOptions;
}

// smithy-typescript generated code
import type {
  AmazonOpenSearchServerlessS3BackupMode,
  AmazonopensearchserviceIndexRotationPeriod,
  AmazonopensearchserviceS3BackupMode,
  CompressionFormat,
  Connectivity,
  ContentEncoding,
  DatabaseType,
  DefaultDocumentIdFormat,
  DeliveryStreamEncryptionStatus,
  DeliveryStreamFailureType,
  DeliveryStreamStatus,
  DeliveryStreamType,
  ElasticsearchIndexRotationPeriod,
  ElasticsearchS3BackupMode,
  HECEndpointType,
  HttpEndpointS3BackupMode,
  IcebergS3BackupMode,
  KeyType,
  NoEncryptionConfig,
  OrcCompression,
  OrcFormatVersion,
  ParquetCompression,
  ParquetWriterVersion,
  ProcessorParameterName,
  ProcessorType,
  RedshiftS3BackupMode,
  S3BackupMode,
  SnapshotRequestedBy,
  SnapshotStatus,
  SnowflakeDataLoadingOption,
  SnowflakeS3BackupMode,
  SplunkS3BackupMode,
  SSLMode,
} from "./enums";

/**
 * Describes the buffering to perform before delivering data to the Serverless offering for Amazon OpenSearch Service destination.
 *
 * @public
 */
export interface AmazonOpenSearchServerlessBufferingHints {
  /**
   * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).
   *
   * @public
   */
  IntervalInSeconds?: number | undefined;

  /**
   * Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.
   *
   * We recommend setting this parameter to a value greater than the amount of data you typically ingest into the Firehose stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.
   *
   * @public
   */
  SizeInMBs?: number | undefined;
}

/**
 * Describes the Amazon CloudWatch logging options for your Firehose stream.
 *
 * @public
 */
export interface CloudWatchLoggingOptions {
  /**
   * Enables or disables CloudWatch logging.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The CloudWatch group name for logging. This value is required if CloudWatch logging is enabled.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * The CloudWatch log stream name for logging. This value is required if CloudWatch logging is enabled.
   *
   * @public
   */
  LogStreamName?: string | undefined;
}

/**
 * Describes the processor parameter.
 *
 * @public
 */
export interface ProcessorParameter {
  /**
   * The name of the parameter. Currently the following default values are supported: 3 for `NumberOfRetries` and 60 for the `BufferIntervalInSeconds`. The `BufferSizeInMBs` ranges between 0.2 MB and up to 3MB. The default buffering hint is 1MB for all destinations, except Splunk. For Splunk, the default buffering hint is 256 KB.
   *
   * @public
   */
  ParameterName: ProcessorParameterName | undefined;

  /**
   * The parameter value.
   *
   * @public
   */
  ParameterValue: string | undefined;
}

/**
 * Describes a data processor.
 *
 * > **Note:** If you want to add a new line delimiter between records in objects that are delivered to Amazon S3, choose `AppendDelimiterToRecord` as a processor type. You don’t have to put a processor parameter when you select `AppendDelimiterToRecord`.
 *
 * @public
 */
export interface Processor {
  /**
   * The type of processor.
   *
   * @public
   */
  Type: ProcessorType | undefined;

  /**
   * The processor parameters.
   *
   * @public
   */
  Parameters?: ProcessorParameter[] | undefined;
}

/**
 * Describes a data processing configuration.
 *
 * @public
 */
export interface ProcessingConfiguration {
  /**
   * Enables or disables data processing.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The data processors.
   *
   * @public
   */
  Processors?: Processor[] | undefined;
}

/**
 * Configures retry behavior in case Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service.
 *
 * @public
 */
export interface AmazonOpenSearchServerlessRetryOptions {
  /**
   * After an initial failure to deliver to the Serverless offering for Amazon OpenSearch Service, the total amount of time during which Firehose retries delivery (including the first attempt). After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Firehose might choose to use different values when it is optimal. The `SizeInMBs` and `IntervalInSeconds` parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
 *
 * @public
 */
export interface BufferingHints {
  /**
   * Buffer incoming data to the specified size, in MiBs, before delivering it to the destination. The default value is 5. This parameter is optional but if you specify a value for it, you must also specify a value for `IntervalInSeconds`, and vice versa.
   *
   * We recommend setting this parameter to a value greater than the amount of data you typically ingest into the Firehose stream in 10 seconds. For example, if you typically ingest data at 1 MiB/sec, the value should be 10 MiB or higher.
   *
   * @public
   */
  SizeInMBs?: number | undefined;

  /**
   * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300. This parameter is optional but if you specify a value for it, you must also specify a value for `SizeInMBs`, and vice versa.
   *
   * @public
   */
  IntervalInSeconds?: number | undefined;
}

/**
 * Describes an encryption key for a destination in Amazon S3.
 *
 * @public
 */
export interface KMSEncryptionConfig {
  /**
   * The Amazon Resource Name (ARN) of the encryption key. Must belong to the same Amazon Web Services Region as the destination Amazon S3 bucket. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  AWSKMSKeyARN: string | undefined;
}

/**
 * Describes the encryption for a destination in Amazon S3.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * Specifically override existing encryption information to ensure that no encryption is used.
   *
   * @public
   */
  NoEncryptionConfig?: NoEncryptionConfig | undefined;

  /**
   * The encryption key.
   *
   * @public
   */
  KMSEncryptionConfig?: KMSEncryptionConfig | undefined;
}

/**
 * Describes the configuration of a destination in Amazon S3.
 *
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The ARN of the S3 bucket. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A prefix that Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * The buffering option. If no value is specified, `BufferingHints` object default values are used.
   *
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * The compression format. If no value is specified, the default is `UNCOMPRESSED`.
   *
   * The compression formats `SNAPPY` or `ZIP` cannot be specified for Amazon Redshift destinations because they are not supported by the Amazon Redshift `COPY` operation that reads from the S3 bucket.
   *
   * @public
   */
  CompressionFormat?: CompressionFormat | undefined;

  /**
   * The encryption configuration. If no value is specified, the default is no encryption.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
}

/**
 * The details of the VPC of the Amazon OpenSearch or Amazon OpenSearch Serverless destination.
 *
 * @public
 */
export interface VpcConfiguration {
  /**
   * The IDs of the subnets that you want Firehose to use to create ENIs in the VPC of the Amazon OpenSearch Service destination. Make sure that the routing tables and inbound and outbound rules allow traffic to flow from the subnets whose IDs are specified here to the subnets that have the destination Amazon OpenSearch Service endpoints. Firehose creates at least one ENI in each of the subnets that are specified here. Do not delete or modify these ENIs.
   *
   * The number of ENIs that Firehose creates in the subnets specified here scales up and down automatically based on throughput. To enable Firehose to scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To help you calculate the quota you need, assume that Firehose can create up to three ENIs for this Firehose stream for each of the subnets specified here. For more information about ENI quota, see [Network Interfaces](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-enis) in the Amazon VPC Quotas topic.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The ARN of the IAM role that you want the Firehose stream to use to create endpoints in the destination VPC. You can use your existing Firehose delivery role or you can specify a new role. In either case, make sure that the role trusts the Firehose service principal and that it grants the following permissions:
   *
   * - `ec2:DescribeVpcs`
   * - `ec2:DescribeVpcAttribute`
   * - `ec2:DescribeSubnets`
   * - `ec2:DescribeSecurityGroups`
   * - `ec2:DescribeNetworkInterfaces`
   * - `ec2:CreateNetworkInterface`
   * - `ec2:CreateNetworkInterfacePermission`
   * - `ec2:DeleteNetworkInterface`
   *
   * > **Important:** When you specify subnets for delivering data to the destination in a private VPC, make sure you have enough number of free IP addresses in chosen subnets. If there is no available free IP address in a specified subnet, Firehose cannot create or add ENIs for the data delivery in the private VPC, and the delivery will be degraded or fail.
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The IDs of the security groups that you want Firehose to use when it creates ENIs in the VPC of the Amazon OpenSearch Service destination. You can use the same security group that the Amazon OpenSearch Service domain uses or different ones. If you specify different security groups here, ensure that they allow outbound HTTPS traffic to the Amazon OpenSearch Service domain's security group. Also ensure that the Amazon OpenSearch Service domain's security group allows HTTPS traffic from the security groups specified here. If you use the same security group for both your delivery stream and the Amazon OpenSearch Service domain, make sure the security group inbound rule allows HTTPS traffic. For more information about security group rules, see [Security group rules](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules) in the Amazon VPC documentation.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service.
 *
 * @public
 */
export interface AmazonOpenSearchServerlessDestinationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for indexing documents.
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service.
   *
   * @public
   */
  CollectionEndpoint?: string | undefined;

  /**
   * The Serverless offering for Amazon OpenSearch Service index name.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The buffering options. If no value is specified, the default values for AmazonopensearchserviceBufferingHints are used.
   *
   * @public
   */
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service. The default value is 300 (5 minutes).
   *
   * @public
   */
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions | undefined;

  /**
   * Defines how documents should be delivered to Amazon S3. When it is set to FailedDocumentsOnly, Firehose writes any documents that could not be indexed to the configured Amazon S3 destination, with AmazonOpenSearchService-failed/ appended to the key prefix. When set to AllDocuments, Firehose delivers all incoming records to Amazon S3, and also writes failed documents with AmazonOpenSearchService-failed/ appended to the prefix.
   *
   * @public
   */
  S3BackupMode?: AmazonOpenSearchServerlessS3BackupMode | undefined;

  /**
   * Describes the configuration of a destination in Amazon S3.
   *
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The details of the VPC of the Amazon OpenSearch or Amazon OpenSearch Serverless destination.
   *
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;
}

/**
 * Describes a destination in Amazon S3.
 *
 * @public
 */
export interface S3DestinationDescription {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The ARN of the S3 bucket. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A prefix that Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * The buffering option. If no value is specified, `BufferingHints` object default values are used.
   *
   * @public
   */
  BufferingHints: BufferingHints | undefined;

  /**
   * The compression format. If no value is specified, the default is `UNCOMPRESSED`.
   *
   * @public
   */
  CompressionFormat: CompressionFormat | undefined;

  /**
   * The encryption configuration. If no value is specified, the default is no encryption.
   *
   * @public
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * The Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
}

/**
 * The details of the VPC of the Amazon OpenSearch Service destination.
 *
 * @public
 */
export interface VpcConfigurationDescription {
  /**
   * The IDs of the subnets that Firehose uses to create ENIs in the VPC of the Amazon OpenSearch Service destination. Make sure that the routing tables and inbound and outbound rules allow traffic to flow from the subnets whose IDs are specified here to the subnets that have the destination Amazon OpenSearch Service endpoints. Firehose creates at least one ENI in each of the subnets that are specified here. Do not delete or modify these ENIs.
   *
   * The number of ENIs that Firehose creates in the subnets specified here scales up and down automatically based on throughput. To enable Firehose to scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To help you calculate the quota you need, assume that Firehose can create up to three ENIs for this Firehose stream for each of the subnets specified here. For more information about ENI quota, see [Network Interfaces](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-enis) in the Amazon VPC Quotas topic.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The ARN of the IAM role that the Firehose stream uses to create endpoints in the destination VPC. You can use your existing Firehose delivery role or you can specify a new role. In either case, make sure that the role trusts the Firehose service principal and that it grants the following permissions:
   *
   * - `ec2:DescribeVpcs`
   * - `ec2:DescribeVpcAttribute`
   * - `ec2:DescribeSubnets`
   * - `ec2:DescribeSecurityGroups`
   * - `ec2:DescribeNetworkInterfaces`
   * - `ec2:CreateNetworkInterface`
   * - `ec2:CreateNetworkInterfacePermission`
   * - `ec2:DeleteNetworkInterface`
   *
   * If you revoke these permissions after you create the Firehose stream, Firehose can't scale out by creating more ENIs when necessary. You might therefore see a degradation in performance.
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The IDs of the security groups that Firehose uses when it creates ENIs in the VPC of the Amazon OpenSearch Service destination. You can use the same security group that the Amazon ES domain uses or different ones. If you specify different security groups, ensure that they allow outbound HTTPS traffic to the Amazon OpenSearch Service domain's security group. Also ensure that the Amazon OpenSearch Service domain's security group allows HTTPS traffic from the security groups specified here. If you use the same security group for both your Firehose stream and the Amazon OpenSearch Service domain, make sure the security group inbound rule allows HTTPS traffic. For more information about security group rules, see [Security group rules](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules) in the Amazon VPC documentation.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The ID of the Amazon OpenSearch Service destination's VPC.
   *
   * @public
   */
  VpcId: string | undefined;
}

/**
 * The destination description in the Serverless offering for Amazon OpenSearch Service.
 *
 * @public
 */
export interface AmazonOpenSearchServerlessDestinationDescription {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service.
   *
   * @public
   */
  CollectionEndpoint?: string | undefined;

  /**
   * The Serverless offering for Amazon OpenSearch Service index name.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The buffering options.
   *
   * @public
   */
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints | undefined;

  /**
   * The Serverless offering for Amazon OpenSearch Service retry options.
   *
   * @public
   */
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions | undefined;

  /**
   * The Amazon S3 backup mode.
   *
   * @public
   */
  S3BackupMode?: AmazonOpenSearchServerlessS3BackupMode | undefined;

  /**
   * Describes a destination in Amazon S3.
   *
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The details of the VPC of the Amazon OpenSearch Service destination.
   *
   * @public
   */
  VpcConfigurationDescription?: VpcConfigurationDescription | undefined;
}

/**
 * Describes an update for a destination in Amazon S3.
 *
 * @public
 */
export interface S3DestinationUpdate {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The ARN of the S3 bucket. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  BucketARN?: string | undefined;

  /**
   * The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A prefix that Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * The buffering option. If no value is specified, `BufferingHints` object default values are used.
   *
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * The compression format. If no value is specified, the default is `UNCOMPRESSED`.
   *
   * The compression formats `SNAPPY` or `ZIP` cannot be specified for Amazon Redshift destinations because they are not supported by the Amazon Redshift `COPY` operation that reads from the S3 bucket.
   *
   * @public
   */
  CompressionFormat?: CompressionFormat | undefined;

  /**
   * The encryption configuration. If no value is specified, the default is no encryption.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
}

/**
 * Describes an update for a destination in the Serverless offering for Amazon OpenSearch Service.
 *
 * @public
 */
export interface AmazonOpenSearchServerlessDestinationUpdate {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for indexing documents.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service.
   *
   * @public
   */
  CollectionEndpoint?: string | undefined;

  /**
   * The Serverless offering for Amazon OpenSearch Service index name.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The buffering options. If no value is specified, AmazonopensearchBufferingHints object default values are used.
   *
   * @public
   */
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service. The default value is 300 (5 minutes).
   *
   * @public
   */
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions | undefined;

  /**
   * Describes an update for a destination in Amazon S3.
   *
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
}

/**
 * Describes the buffering to perform before delivering data to the Amazon OpenSearch Service destination.
 *
 * @public
 */
export interface AmazonopensearchserviceBufferingHints {
  /**
   * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).
   *
   * @public
   */
  IntervalInSeconds?: number | undefined;

  /**
   * Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.
   *
   * We recommend setting this parameter to a value greater than the amount of data you typically ingest into the Firehose stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.
   *
   * @public
   */
  SizeInMBs?: number | undefined;
}

/**
 * Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
 *
 * @public
 */
export interface DocumentIdOptions {
  /**
   * When the `FIREHOSE_DEFAULT` option is chosen, Firehose generates a unique document ID for each record based on a unique internal identifier. The generated document ID is stable across multiple delivery attempts, which helps prevent the same record from being indexed multiple times with different document IDs.
   *
   * When the `NO_DOCUMENT_ID` option is chosen, Firehose does not include any document IDs in the requests it sends to the Amazon OpenSearch Service. This causes the Amazon OpenSearch Service domain to generate document IDs. In case of multiple delivery attempts, this may cause the same record to be indexed more than once with different document IDs. This option enables write-heavy operations, such as the ingestion of logs and observability data, to consume less resources in the Amazon OpenSearch Service domain, resulting in improved performance.
   *
   * @public
   */
  DefaultDocumentIdFormat: DefaultDocumentIdFormat | undefined;
}

/**
 * Configures retry behavior in case Firehose is unable to deliver documents to Amazon OpenSearch Service.
 *
 * @public
 */
export interface AmazonopensearchserviceRetryOptions {
  /**
   * After an initial failure to deliver to Amazon OpenSearch Service, the total amount of time during which Firehose retries delivery (including the first attempt). After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * Describes the configuration of a destination in Amazon OpenSearch Service
 *
 * @public
 */
export interface AmazonopensearchserviceDestinationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling the Amazon OpenSearch Service Configuration API and for indexing documents.
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions for DescribeElasticsearchDomain, DescribeElasticsearchDomains, and DescribeElasticsearchDomainConfig after assuming the role specified in RoleARN.
   *
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * The endpoint to use when communicating with the cluster. Specify either this ClusterEndpoint or the DomainARN field.
   *
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * The ElasticsearAmazon OpenSearch Service index name.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The Amazon OpenSearch Service type name. For Elasticsearch 6.x, there can be only one type per index. If you try to specify a new type for an existing index that already has another type, Firehose returns an error during run time.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The Amazon OpenSearch Service index rotation period. Index rotation appends a timestamp to the IndexName to facilitate the expiration of old data.
   *
   * @public
   */
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod | undefined;

  /**
   * The buffering options. If no value is specified, the default values for AmazonopensearchserviceBufferingHints are used.
   *
   * @public
   */
  BufferingHints?: AmazonopensearchserviceBufferingHints | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver documents to Amazon OpenSearch Service. The default value is 300 (5 minutes).
   *
   * @public
   */
  RetryOptions?: AmazonopensearchserviceRetryOptions | undefined;

  /**
   * Defines how documents should be delivered to Amazon S3. When it is set to FailedDocumentsOnly, Firehose writes any documents that could not be indexed to the configured Amazon S3 destination, with AmazonOpenSearchService-failed/ appended to the key prefix. When set to AllDocuments, Firehose delivers all incoming records to Amazon S3, and also writes failed documents with AmazonOpenSearchService-failed/ appended to the prefix.
   *
   * @public
   */
  S3BackupMode?: AmazonopensearchserviceS3BackupMode | undefined;

  /**
   * Describes the configuration of a destination in Amazon S3.
   *
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The details of the VPC of the Amazon OpenSearch or Amazon OpenSearch Serverless destination.
   *
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
   *
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * The destination description in Amazon OpenSearch Service.
 *
 * @public
 */
export interface AmazonopensearchserviceDestinationDescription {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The ARN of the Amazon OpenSearch Service domain.
   *
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * The endpoint to use when communicating with the cluster. Firehose uses either this ClusterEndpoint or the DomainARN field to send data to Amazon OpenSearch Service.
   *
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * The Amazon OpenSearch Service index name.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The Amazon OpenSearch Service type name. This applies to Elasticsearch 6.x and lower versions. For Elasticsearch 7.x and OpenSearch Service 1.x, there's no value for TypeName.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The Amazon OpenSearch Service index rotation period
   *
   * @public
   */
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod | undefined;

  /**
   * The buffering options.
   *
   * @public
   */
  BufferingHints?: AmazonopensearchserviceBufferingHints | undefined;

  /**
   * The Amazon OpenSearch Service retry options.
   *
   * @public
   */
  RetryOptions?: AmazonopensearchserviceRetryOptions | undefined;

  /**
   * The Amazon S3 backup mode.
   *
   * @public
   */
  S3BackupMode?: AmazonopensearchserviceS3BackupMode | undefined;

  /**
   * Describes a destination in Amazon S3.
   *
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The details of the VPC of the Amazon OpenSearch Service destination.
   *
   * @public
   */
  VpcConfigurationDescription?: VpcConfigurationDescription | undefined;

  /**
   * Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
   *
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * Describes an update for a destination in Amazon OpenSearch Service.
 *
 * @public
 */
export interface AmazonopensearchserviceDestinationUpdate {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling the Amazon OpenSearch Service Configuration API and for indexing documents.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions for DescribeDomain, DescribeDomains, and DescribeDomainConfig after assuming the IAM role specified in RoleARN.
   *
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * The endpoint to use when communicating with the cluster. Specify either this ClusterEndpoint or the DomainARN field.
   *
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * The Amazon OpenSearch Service index name.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The Amazon OpenSearch Service type name. For Elasticsearch 6.x, there can be only one type per index. If you try to specify a new type for an existing index that already has another type, Firehose returns an error during runtime.
   *
   * If you upgrade Elasticsearch from 6.x to 7.x and don’t update your Firehose stream, Firehose still delivers data to Elasticsearch with the old index name and type name. If you want to update your Firehose stream with a new index name, provide an empty string for TypeName.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The Amazon OpenSearch Service index rotation period. Index rotation appends a timestamp to IndexName to facilitate the expiration of old data.
   *
   * @public
   */
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod | undefined;

  /**
   * The buffering options. If no value is specified, AmazonopensearchBufferingHints object default values are used.
   *
   * @public
   */
  BufferingHints?: AmazonopensearchserviceBufferingHints | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver documents to Amazon OpenSearch Service. The default value is 300 (5 minutes).
   *
   * @public
   */
  RetryOptions?: AmazonopensearchserviceRetryOptions | undefined;

  /**
   * Describes an update for a destination in Amazon S3.
   *
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
   *
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * The authentication configuration of the Amazon MSK cluster.
 *
 * @public
 */
export interface AuthenticationConfiguration {
  /**
   * The ARN of the role used to access the Amazon MSK cluster.
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The type of connectivity used to access the Amazon MSK cluster.
   *
   * @public
   */
  Connectivity: Connectivity | undefined;
}

/**
 * Describes the containers where the destination Apache Iceberg Tables are persisted.
 *
 * @public
 */
export interface CatalogConfiguration {
  /**
   * Specifies the Glue catalog ARN identifier of the destination Apache Iceberg Tables. You must specify the ARN in the format `arn:aws:glue:region:account-id:catalog`.
   *
   * @public
   */
  CatalogARN?: string | undefined;

  /**
   * The warehouse location for Apache Iceberg tables. You must configure this when schema evolution and table creation is enabled.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  WarehouseLocation?: string | undefined;
}

/**
 * Describes a `COPY` command for Amazon Redshift.
 *
 * @public
 */
export interface CopyCommand {
  /**
   * The name of the target table. The table must already exist in the database.
   *
   * @public
   */
  DataTableName: string | undefined;

  /**
   * A comma-separated list of column names.
   *
   * @public
   */
  DataTableColumns?: string | undefined;

  /**
   * Optional parameters to use with the Amazon Redshift `COPY` command. For more information, see the "Optional Parameters" section of [Amazon Redshift COPY command](https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html). Some possible examples that would apply to Firehose are as follows:
   *
   * `delimiter '\t' lzop;` - fields are delimited with "\t" (TAB character) and compressed using lzop.
   *
   * `delimiter '|'` - fields are delimited with "|" (this is the default delimiter).
   *
   * `delimiter '|' escape` - the delimiter should be escaped.
   *
   * `fixedwidth 'venueid:3,venuename:25,venuecity:12,venuestate:2,venueseats:6'` - fields are fixed width in the source, with each width specified after every column in the table.
   *
   * `JSON 's3://mybucket/jsonpaths.txt'` - data is in JSON format, and the path specified is the format of the data.
   *
   * For more examples, see [Amazon Redshift COPY command examples](https://docs.aws.amazon.com/redshift/latest/dg/r_COPY_command_examples.html).
   *
   * @public
   */
  CopyOptions?: string | undefined;
}

/**
 * The structure used to configure the list of column patterns in source database endpoint for Firehose to read from.
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface DatabaseColumnList {
  /**
   * The list of column patterns in source database to be included for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Include?: string[] | undefined;

  /**
   * The list of column patterns in source database to be excluded for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Exclude?: string[] | undefined;
}

/**
 * The structure used to configure the list of database patterns in source database endpoint for Firehose to read from.
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface DatabaseList {
  /**
   * The list of database patterns in source database endpoint to be included for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Include?: string[] | undefined;

  /**
   * The list of database patterns in source database endpoint to be excluded for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Exclude?: string[] | undefined;
}

/**
 * The structure that defines how Firehose accesses the secret.
 *
 * @public
 */
export interface SecretsManagerConfiguration {
  /**
   * The ARN of the secret that stores your credentials. It must be in the same region as the Firehose stream and the role. The secret ARN can reside in a different account than the Firehose stream and role as Firehose supports cross-account secret access. This parameter is required when **Enabled** is set to `True`.
   *
   * @public
   */
  SecretARN?: string | undefined;

  /**
   * Specifies the role that Firehose assumes when calling the Secrets Manager API operation. When you provide the role, it overrides any destination specific role defined in the destination configuration. If you do not provide the then we use the destination specific role. This parameter is required for Splunk.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * Specifies whether you want to use the secrets manager feature. When set as `True` the secrets manager configuration overwrites the existing secrets in the destination configuration. When it's set to `False` Firehose falls back to the credentials in the destination configuration.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The structure to configure the authentication methods for Firehose to connect to source database endpoint.
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface DatabaseSourceAuthenticationConfiguration {
  /**
   * The structure that defines how Firehose accesses the secret.
   *
   * @public
   */
  SecretsManagerConfiguration: SecretsManagerConfiguration | undefined;
}

/**
 * The structure for details of the VPC Endpoint Service which Firehose uses to create a PrivateLink to the database.
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface DatabaseSourceVPCConfiguration {
  /**
   * The VPC endpoint service name which Firehose uses to create a PrivateLink to the database. The endpoint service must have the Firehose service principle `firehose.amazonaws.com` as an allowed principal on the VPC endpoint service. The VPC endpoint service name is a string that looks like `com.amazonaws.vpce.<region>.<vpc-endpoint-service-id>`.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  VpcEndpointServiceName: string | undefined;
}

/**
 * The structure used to configure the list of table patterns in source database endpoint for Firehose to read from.
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface DatabaseTableList {
  /**
   * The list of table patterns in source database endpoint to be included for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Include?: string[] | undefined;

  /**
   * The list of table patterns in source database endpoint to be excluded for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Exclude?: string[] | undefined;
}

/**
 * The top level object for configuring streams with database as a source.
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface DatabaseSourceConfiguration {
  /**
   * The type of database engine. This can be one of the following values.
   *
   * - MySQL
   * - PostgreSQL
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Type: DatabaseType | undefined;

  /**
   * The endpoint of the database server.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Endpoint: string | undefined;

  /**
   * The port of the database. This can be one of the following values.
   *
   * - 3306 for MySQL database type
   * - 5432 for PostgreSQL database type
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Port: number | undefined;

  /**
   * The mode to enable or disable SSL when Firehose connects to the database endpoint.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  SSLMode?: SSLMode | undefined;

  /**
   * The list of database patterns in source database endpoint for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Databases: DatabaseList | undefined;

  /**
   * The list of table patterns in source database endpoint for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Tables: DatabaseTableList | undefined;

  /**
   * The list of column patterns in source database endpoint for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Columns?: DatabaseColumnList | undefined;

  /**
   * The optional list of table and column names used as unique key columns when taking snapshot if the tables don’t have primary keys configured.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  SurrogateKeys?: string[] | undefined;

  /**
   * The fully qualified name of the table in source database endpoint that Firehose uses to track snapshot progress.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  SnapshotWatermarkTable: string | undefined;

  /**
   * The structure to configure the authentication methods for Firehose to connect to source database endpoint.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  DatabaseSourceAuthenticationConfiguration: DatabaseSourceAuthenticationConfiguration | undefined;

  /**
   * The details of the VPC Endpoint Service which Firehose uses to create a PrivateLink to the database.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  DatabaseSourceVPCConfiguration: DatabaseSourceVPCConfiguration | undefined;
}

/**
 * Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).
 *
 * @public
 */
export interface DeliveryStreamEncryptionConfigurationInput {
  /**
   * If you set `KeyType` to `CUSTOMER_MANAGED_CMK`, you must specify the Amazon Resource Name (ARN) of the CMK. If you set `KeyType` to `Amazon Web Services_OWNED_CMK`, Firehose uses a service-account CMK.
   *
   * @public
   */
  KeyARN?: string | undefined;

  /**
   * Indicates the type of customer master key (CMK) to use for encryption. The default setting is `Amazon Web Services_OWNED_CMK`. For more information about CMKs, see [Customer Master Keys (CMKs)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys). When you invoke CreateDeliveryStream or StartDeliveryStreamEncryption with `KeyType` set to CUSTOMER_MANAGED_CMK, Firehose invokes the Amazon KMS operation [CreateGrant](https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html) to create a grant that allows the Firehose service to use the customer managed CMK to perform encryption and decryption. Firehose manages that grant.
   *
   * When you invoke StartDeliveryStreamEncryption to change the CMK for a Firehose stream that is encrypted with a customer managed CMK, Firehose schedules the grant it had on the old CMK for retirement.
   *
   * You can use a CMK of type CUSTOMER_MANAGED_CMK to encrypt up to 500 Firehose streams. If a CreateDeliveryStream or StartDeliveryStreamEncryption operation exceeds this limit, Firehose throws a `LimitExceededException`.
   *
   * > **Important:** To encrypt your Firehose stream, use symmetric CMKs. Firehose doesn't support asymmetric CMKs. For information about symmetric and asymmetric CMKs, see [About Symmetric and Asymmetric CMKs](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html) in the Amazon Web Services Key Management Service developer guide.
   *
   * @public
   */
  KeyType: KeyType | undefined;
}

/**
 * The structure that configures parameters such as `ThroughputHintInMBs` for a stream configured with Direct PUT as a source.
 *
 * @public
 */
export interface DirectPutSourceConfiguration {
  /**
   * The value that you configure for this parameter is for information purpose only and does not affect Firehose delivery throughput limit. You can use the [Firehose Limits form](https://support.console.aws.amazon.com/support/home#/case/create%3FissueType=service-limit-increase%26limitType=kinesis-firehose-limits) to request a throughput limit increase.
   *
   * @public
   */
  ThroughputHintInMBs: number | undefined;
}

/**
 * Describes the buffering to perform before delivering data to the Amazon OpenSearch Service destination.
 *
 * @public
 */
export interface ElasticsearchBufferingHints {
  /**
   * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).
   *
   * @public
   */
  IntervalInSeconds?: number | undefined;

  /**
   * Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.
   *
   * We recommend setting this parameter to a value greater than the amount of data you typically ingest into the Firehose stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.
   *
   * @public
   */
  SizeInMBs?: number | undefined;
}

/**
 * Configures retry behavior in case Firehose is unable to deliver documents to Amazon OpenSearch Service.
 *
 * @public
 */
export interface ElasticsearchRetryOptions {
  /**
   * After an initial failure to deliver to Amazon OpenSearch Service, the total amount of time during which Firehose retries delivery (including the first attempt). After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * Describes the configuration of a destination in Amazon OpenSearch Service.
 *
 * @public
 */
export interface ElasticsearchDestinationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling the Amazon OpenSearch Service Configuration API and for indexing documents. For more information, see [Grant Firehose Access to an Amazon S3 Destination](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3) and [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions for `DescribeDomain`, `DescribeDomains`, and `DescribeDomainConfig` after assuming the role specified in **RoleARN**. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * Specify either `ClusterEndpoint` or `DomainARN`.
   *
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * The endpoint to use when communicating with the cluster. Specify either this `ClusterEndpoint` or the `DomainARN` field.
   *
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * The Elasticsearch index name.
   *
   * @public
   */
  IndexName: string | undefined;

  /**
   * The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per index. If you try to specify a new type for an existing index that already has another type, Firehose returns an error during run time.
   *
   * For Elasticsearch 7.x, don't specify a `TypeName`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The Elasticsearch index rotation period. Index rotation appends a timestamp to the `IndexName` to facilitate the expiration of old data. For more information, see [Index Rotation for the Amazon OpenSearch Service Destination](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation). The default value is `OneDay`.
   *
   * @public
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | undefined;

  /**
   * The buffering options. If no value is specified, the default values for `ElasticsearchBufferingHints` are used.
   *
   * @public
   */
  BufferingHints?: ElasticsearchBufferingHints | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver documents to Amazon OpenSearch Service. The default value is 300 (5 minutes).
   *
   * @public
   */
  RetryOptions?: ElasticsearchRetryOptions | undefined;

  /**
   * Defines how documents should be delivered to Amazon S3. When it is set to `FailedDocumentsOnly`, Firehose writes any documents that could not be indexed to the configured Amazon S3 destination, with `AmazonOpenSearchService-failed/` appended to the key prefix. When set to `AllDocuments`, Firehose delivers all incoming records to Amazon S3, and also writes failed documents with `AmazonOpenSearchService-failed/` appended to the prefix. For more information, see [Amazon S3 Backup for the Amazon OpenSearch Service Destination](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-s3-backup). Default value is `FailedDocumentsOnly`.
   *
   * You can't change this backup mode after you create the Firehose stream.
   *
   * @public
   */
  S3BackupMode?: ElasticsearchS3BackupMode | undefined;

  /**
   * The configuration for the backup Amazon S3 location.
   *
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The details of the VPC of the Amazon destination.
   *
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
   *
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * The native Hive / HCatalog JsonSerDe. Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.
 *
 * @public
 */
export interface HiveJsonSerDe {
  /**
   * Indicates how you want Firehose to parse the date and timestamps that may be present in your input data JSON. To specify these format strings, follow the pattern syntax of JodaTime's DateTimeFormat format strings. For more information, see [Class DateTimeFormat](https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html). You can also use the special value `millis` to parse timestamps in epoch milliseconds. If you don't specify a format, Firehose uses `java.sql.Timestamp::valueOf` by default.
   *
   * @public
   */
  TimestampFormats?: string[] | undefined;
}

/**
 * The OpenX SerDe. Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
 *
 * @public
 */
export interface OpenXJsonSerDe {
  /**
   * When set to `true`, specifies that the names of the keys include dots and that you want Firehose to replace them with underscores. This is useful because Apache Hive does not allow dots in column names. For example, if the JSON contains a key whose name is "a.b", you can define the column name to be "a_b" when using this option.
   *
   * The default is `false`.
   *
   * @public
   */
  ConvertDotsInJsonKeysToUnderscores?: boolean | undefined;

  /**
   * When set to `true`, which is the default, Firehose converts JSON keys to lowercase before deserializing them.
   *
   * @public
   */
  CaseInsensitive?: boolean | undefined;

  /**
   * Maps column names to JSON keys that aren't identical to the column names. This is useful when the JSON contains keys that are Hive keywords. For example, `timestamp` is a Hive keyword. If you have a JSON key named `timestamp`, set this parameter to `\{"ts": "timestamp"\}` to map this key to a column named `ts`.
   *
   * @public
   */
  ColumnToJsonKeyMappings?: Record<string, string> | undefined;
}

/**
 * The deserializer you want Firehose to use for converting the input data from JSON. Firehose then serializes the data to its final format using the Serializer. Firehose supports two types of deserializers: the [Apache Hive JSON SerDe](https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON) and the [OpenX JSON SerDe](https://github.com/rcongiu/Hive-JSON-Serde).
 *
 * @public
 */
export interface Deserializer {
  /**
   * The OpenX SerDe. Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
   *
   * @public
   */
  OpenXJsonSerDe?: OpenXJsonSerDe | undefined;

  /**
   * The native Hive / HCatalog JsonSerDe. Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.
   *
   * @public
   */
  HiveJsonSerDe?: HiveJsonSerDe | undefined;
}

/**
 * Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if `Enabled` is set to true.
 *
 * @public
 */
export interface InputFormatConfiguration {
  /**
   * Specifies which deserializer to use. You can choose either the Apache Hive JSON SerDe or the OpenX JSON SerDe. If both are non-null, the server rejects the request.
   *
   * @public
   */
  Deserializer?: Deserializer | undefined;
}

/**
 * A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see [Apache ORC](https://orc.apache.org/docs/).
 *
 * @public
 */
export interface OrcSerDe {
  /**
   * The number of bytes in each stripe. The default is 64 MiB and the minimum is 8 MiB.
   *
   * @public
   */
  StripeSizeBytes?: number | undefined;

  /**
   * The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Firehose uses this value for padding calculations.
   *
   * @public
   */
  BlockSizeBytes?: number | undefined;

  /**
   * The number of rows between index entries. The default is 10,000 and the minimum is 1,000.
   *
   * @public
   */
  RowIndexStride?: number | undefined;

  /**
   * Set this to `true` to indicate that you want stripes to be padded to the HDFS block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is `false`.
   *
   * @public
   */
  EnablePadding?: boolean | undefined;

  /**
   * A number between 0 and 1 that defines the tolerance for block padding as a decimal fraction of stripe size. The default value is 0.05, which means 5 percent of stripe size.
   *
   * For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB block. In such a case, if the available size within the block is more than 3.2 MiB, a new, smaller stripe is inserted to fit within that space. This ensures that no stripe crosses block boundaries and causes remote reads within a node-local task.
   *
   * Firehose ignores this parameter when OrcSerDe$EnablePadding is `false`.
   *
   * @public
   */
  PaddingTolerance?: number | undefined;

  /**
   * The compression code to use over data blocks. The default is `SNAPPY`.
   *
   * @public
   */
  Compression?: OrcCompression | undefined;

  /**
   * The column names for which you want Firehose to create bloom filters. The default is `null`.
   *
   * @public
   */
  BloomFilterColumns?: string[] | undefined;

  /**
   * The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the Bloom filter. The default value is 0.05, the minimum is 0, and the maximum is 1.
   *
   * @public
   */
  BloomFilterFalsePositiveProbability?: number | undefined;

  /**
   * Represents the fraction of the total number of non-null rows. To turn off dictionary encoding, set this fraction to a number that is less than the number of distinct keys in a dictionary. To always use dictionary encoding, set this threshold to 1.
   *
   * @public
   */
  DictionaryKeyThreshold?: number | undefined;

  /**
   * The version of the file to write. The possible values are `V0_11` and `V0_12`. The default is `V0_12`.
   *
   * @public
   */
  FormatVersion?: OrcFormatVersion | undefined;
}

/**
 * A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see [Apache Parquet](https://parquet.apache.org/docs/).
 *
 * @public
 */
export interface ParquetSerDe {
  /**
   * The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Firehose uses this value for padding calculations.
   *
   * @public
   */
  BlockSizeBytes?: number | undefined;

  /**
   * The Parquet page size. Column chunks are divided into pages. A page is conceptually an indivisible unit (in terms of compression and encoding). The minimum value is 64 KiB and the default is 1 MiB.
   *
   * @public
   */
  PageSizeBytes?: number | undefined;

  /**
   * The compression code to use over data blocks. The possible values are `UNCOMPRESSED`, `SNAPPY`, and `GZIP`, with the default being `SNAPPY`. Use `SNAPPY` for higher decompression speed. Use `GZIP` if the compression ratio is more important than speed.
   *
   * @public
   */
  Compression?: ParquetCompression | undefined;

  /**
   * Indicates whether to enable dictionary compression.
   *
   * @public
   */
  EnableDictionaryCompression?: boolean | undefined;

  /**
   * The maximum amount of padding to apply. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 0.
   *
   * @public
   */
  MaxPaddingBytes?: number | undefined;

  /**
   * Indicates the version of row format to output. The possible values are `V1` and `V2`. The default is `V1`.
   *
   * @public
   */
  WriterVersion?: ParquetWriterVersion | undefined;
}

/**
 * The serializer that you want Firehose to use to convert data to the target format before writing it to Amazon S3. Firehose supports two types of serializers: the ORC SerDe and the Parquet SerDe.
 *
 * @public
 */
export interface Serializer {
  /**
   * A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see [Apache Parquet](https://parquet.apache.org/docs/contribution-guidelines/).
   *
   * @public
   */
  ParquetSerDe?: ParquetSerDe | undefined;

  /**
   * A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see [Apache ORC](https://orc.apache.org/docs/).
   *
   * @public
   */
  OrcSerDe?: OrcSerDe | undefined;
}

/**
 * Specifies the serializer that you want Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if `Enabled` is set to true.
 *
 * @public
 */
export interface OutputFormatConfiguration {
  /**
   * Specifies which serializer to use. You can choose either the ORC SerDe or the Parquet SerDe. If both are non-null, the server rejects the request.
   *
   * @public
   */
  Serializer?: Serializer | undefined;
}

/**
 * Specifies the schema to which you want Firehose to configure your data before it writes it to Amazon S3. This parameter is required if `Enabled` is set to true.
 *
 * @public
 */
export interface SchemaConfiguration {
  /**
   * The role that Firehose can use to access Amazon Web Services Glue. This role must be in the same account you use for Firehose. Cross-account roles aren't allowed.
   *
   * > **Important:** If the `SchemaConfiguration` request parameter is used as part of invoking the `CreateDeliveryStream` API, then the `RoleARN` property is required and its value must be specified.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The ID of the Amazon Web Services Glue Data Catalog. If you don't supply this, the Amazon Web Services account ID is used by default.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * Specifies the name of the Amazon Web Services Glue database that contains the schema for the output data.
   *
   * > **Important:** If the `SchemaConfiguration` request parameter is used as part of invoking the `CreateDeliveryStream` API, then the `DatabaseName` property is required and its value must be specified.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * Specifies the Amazon Web Services Glue table that contains the column information that constitutes your data schema.
   *
   * > **Important:** If the `SchemaConfiguration` request parameter is used as part of invoking the `CreateDeliveryStream` API, then the `TableName` property is required and its value must be specified.
   *
   * @public
   */
  TableName?: string | undefined;

  /**
   * If you don't specify an Amazon Web Services Region, the default is the current Region.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * Specifies the table version for the output data schema. If you don't specify this version ID, or if you set it to `LATEST`, Firehose uses the most recent version. This means that any updates to the table are automatically picked up.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * Specifies that you want Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Firehose uses the serializer and deserializer that you specify, in addition to the column information from the Amazon Web Services Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see [Firehose Record Format Conversion](https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html).
 *
 * @public
 */
export interface DataFormatConversionConfiguration {
  /**
   * Specifies the Amazon Web Services Glue Data Catalog table that contains the column information. This parameter is required if `Enabled` is set to true.
   *
   * @public
   */
  SchemaConfiguration?: SchemaConfiguration | undefined;

  /**
   * Specifies the deserializer that you want Firehose to use to convert the format of your data from JSON. This parameter is required if `Enabled` is set to true.
   *
   * @public
   */
  InputFormatConfiguration?: InputFormatConfiguration | undefined;

  /**
   * Specifies the serializer that you want Firehose to use to convert the format of your data to the Parquet or ORC format. This parameter is required if `Enabled` is set to true.
   *
   * @public
   */
  OutputFormatConfiguration?: OutputFormatConfiguration | undefined;

  /**
   * Defaults to `true`. Set it to `false` if you want to disable format conversion while preserving the configuration details.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * The retry behavior in case Firehose is unable to deliver data to a destination.
 *
 * @public
 */
export interface RetryOptions {
  /**
   * The period of time during which Firehose retries to deliver data to the specified destination.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations.
 *
 * @public
 */
export interface DynamicPartitioningConfiguration {
  /**
   * The retry behavior in case Firehose is unable to deliver data to an Amazon S3 prefix.
   *
   * @public
   */
  RetryOptions?: RetryOptions | undefined;

  /**
   * Specifies that the dynamic partitioning is enabled for this Firehose stream.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Describes the configuration of a destination in Amazon S3.
 *
 * @public
 */
export interface ExtendedS3DestinationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The ARN of the S3 bucket. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A prefix that Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * The buffering option.
   *
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * The compression format. If no value is specified, the default is UNCOMPRESSED.
   *
   * @public
   */
  CompressionFormat?: CompressionFormat | undefined;

  /**
   * The encryption configuration. If no value is specified, the default is no encryption.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon S3 backup mode. After you create a Firehose stream, you can update it to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the Firehose stream to disable it.
   *
   * @public
   */
  S3BackupMode?: S3BackupMode | undefined;

  /**
   * The configuration for backup in Amazon S3.
   *
   * @public
   */
  S3BackupConfiguration?: S3DestinationConfiguration | undefined;

  /**
   * The serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.
   *
   * @public
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration | undefined;

  /**
   * The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations.
   *
   * @public
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration | undefined;

  /**
   * Specify a file extension. It will override the default file extension
   *
   * @public
   */
  FileExtension?: string | undefined;

  /**
   * The time zone you prefer. UTC is the default.
   *
   * @public
   */
  CustomTimeZone?: string | undefined;
}

/**
 * Describes the buffering options that can be applied before data is delivered to the HTTP endpoint destination. Firehose treats these options as hints, and it might choose to use more optimal values. The `SizeInMBs` and `IntervalInSeconds` parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
 *
 * @public
 */
export interface HttpEndpointBufferingHints {
  /**
   * Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.
   *
   * We recommend setting this parameter to a value greater than the amount of data you typically ingest into the Firehose stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.
   *
   * @public
   */
  SizeInMBs?: number | undefined;

  /**
   * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).
   *
   * @public
   */
  IntervalInSeconds?: number | undefined;
}

/**
 * Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data.
 *
 * @public
 */
export interface HttpEndpointConfiguration {
  /**
   * The URL of the HTTP endpoint selected as the destination.
   *
   * > **Important:** If you choose an HTTP endpoint as your destination, review and follow the instructions in the [Appendix - HTTP Endpoint Delivery Request and Response Specifications](https://docs.aws.amazon.com/firehose/latest/dev/httpdeliveryrequestresponse.html).
   *
   * @public
   */
  Url: string | undefined;

  /**
   * The name of the HTTP endpoint selected as the destination.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The access key required for Kinesis Firehose to authenticate with the HTTP endpoint selected as the destination.
   *
   * @public
   */
  AccessKey?: string | undefined;
}

/**
 * Describes the metadata that's delivered to the specified HTTP endpoint destination.
 *
 * @public
 */
export interface HttpEndpointCommonAttribute {
  /**
   * The name of the HTTP endpoint common attribute.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The value of the HTTP endpoint common attribute.
   *
   * @public
   */
  AttributeValue: string | undefined;
}

/**
 * The configuration of the HTTP endpoint request.
 *
 * @public
 */
export interface HttpEndpointRequestConfiguration {
  /**
   * Firehose uses the content encoding to compress the body of a request before sending the request to the destination. For more information, see [Content-Encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding) in MDN Web Docs, the official Mozilla documentation.
   *
   * @public
   */
  ContentEncoding?: ContentEncoding | undefined;

  /**
   * Describes the metadata sent to the HTTP endpoint destination.
   *
   * @public
   */
  CommonAttributes?: HttpEndpointCommonAttribute[] | undefined;
}

/**
 * Describes the retry behavior in case Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
 *
 * @public
 */
export interface HttpEndpointRetryOptions {
  /**
   * The total amount of time that Firehose spends on retries. This duration starts after the initial attempt to send data to the custom destination via HTTPS endpoint fails. It doesn't include the periods during which Firehose waits for acknowledgment from the specified destination after each attempt.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * Describes the configuration of the HTTP endpoint destination.
 *
 * @public
 */
export interface HttpEndpointDestinationConfiguration {
  /**
   * The configuration of the HTTP endpoint selected as the destination.
   *
   * @public
   */
  EndpointConfiguration: HttpEndpointConfiguration | undefined;

  /**
   * The buffering options that can be used before data is delivered to the specified destination. Firehose treats these options as hints, and it might choose to use more optimal values. The `SizeInMBs` and `IntervalInSeconds` parameters are optional. However, if you specify a value for one of them, you must also provide a value for the other.
   *
   * @public
   */
  BufferingHints?: HttpEndpointBufferingHints | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The configuration of the request sent to the HTTP endpoint that is specified as the destination.
   *
   * @public
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Firehose uses this IAM role for all the permissions that the delivery stream needs.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * Describes the retry behavior in case Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
   *
   * @public
   */
  RetryOptions?: HttpEndpointRetryOptions | undefined;

  /**
   * Describes the S3 bucket backup options for the data that Firehose delivers to the HTTP endpoint destination. You can back up all documents (`AllData`) or only the documents that Firehose could not deliver to the specified HTTP endpoint destination (`FailedDataOnly`).
   *
   * @public
   */
  S3BackupMode?: HttpEndpointS3BackupMode | undefined;

  /**
   * Describes the configuration of a destination in Amazon S3.
   *
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * The configuration that defines how you access secrets for HTTP Endpoint destination.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * Represents a single field in a `PartitionSpec`.
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface PartitionField {
  /**
   * The column name to be configured in partition spec.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  SourceName: string | undefined;
}

/**
 * Represents how to produce partition data for a table. Partition data is produced by transforming columns in a table. Each column transform is represented by a named `PartitionField`.
 *
 * Here is an example of the schema in JSON.
 *
 * `"partitionSpec": \{ "identity": [ \{"sourceName": "column1"\}, \{"sourceName": "column2"\}, \{"sourceName": "column3"\} ] \}`
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface PartitionSpec {
  /**
   * List of identity [transforms](https://iceberg.apache.org/spec/#partition-transforms) that performs an identity transformation. The transform takes the source value, and does not modify it. Result type is the source type.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Identity?: PartitionField[] | undefined;
}

/**
 * Describes the configuration of a destination in Apache Iceberg Tables.
 *
 * @public
 */
export interface DestinationTableConfiguration {
  /**
   * Specifies the name of the Apache Iceberg Table.
   *
   * @public
   */
  DestinationTableName: string | undefined;

  /**
   * The name of the Apache Iceberg database.
   *
   * @public
   */
  DestinationDatabaseName: string | undefined;

  /**
   * A list of unique keys for a given Apache Iceberg table. Firehose will use these for running Create, Update, or Delete operations on the given Iceberg table.
   *
   * @public
   */
  UniqueKeys?: string[] | undefined;

  /**
   * The partition spec configuration for a table that is used by automatic table creation.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  PartitionSpec?: PartitionSpec | undefined;

  /**
   * The table specific S3 error output prefix. All the errors that occurred while delivering to this table will be prefixed with this value in S3 destination.
   *
   * @public
   */
  S3ErrorOutputPrefix?: string | undefined;
}

/**
 * The configuration to enable schema evolution.
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface SchemaEvolutionConfiguration {
  /**
   * Specify whether you want to enable schema evolution.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * The configuration to enable automatic table creation.
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface TableCreationConfiguration {
  /**
   * Specify whether you want to enable automatic table creation.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * Specifies the destination configure settings for Apache Iceberg Table.
 *
 * @public
 */
export interface IcebergDestinationConfiguration {
  /**
   * Provides a list of `DestinationTableConfigurations` which Firehose uses to deliver data to Apache Iceberg Tables. Firehose will write data with insert if table specific configuration is not provided here.
   *
   * @public
   */
  DestinationTableConfigurationList?: DestinationTableConfiguration[] | undefined;

  /**
   * The configuration to enable automatic schema evolution.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  SchemaEvolutionConfiguration?: SchemaEvolutionConfiguration | undefined;

  /**
   * The configuration to enable automatic table creation.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  TableCreationConfiguration?: TableCreationConfiguration | undefined;

  /**
   * Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Firehose might choose to use different values when it is optimal. The `SizeInMBs` and `IntervalInSeconds` parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
   *
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Describes how Firehose will backup records. Currently,S3 backup only supports `FailedDataOnly`.
   *
   * @public
   */
  S3BackupMode?: IcebergS3BackupMode | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver data to a destination.
   *
   * @public
   */
  RetryOptions?: RetryOptions | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling Apache Iceberg Tables.
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * Describes whether all incoming data for this delivery stream will be append only (inserts only and not for updates and deletes) for Iceberg delivery. This feature is only applicable for Apache Iceberg Tables.
   *
   * The default value is false. If you set this value to true, Firehose automatically increases the throughput limit of a stream based on the throttling levels of the stream. If you set this parameter to true for a stream with updates and deletes, you will see out of order delivery.
   *
   * @public
   */
  AppendOnly?: boolean | undefined;

  /**
   * Configuration describing where the destination Apache Iceberg Tables are persisted.
   *
   * @public
   */
  CatalogConfiguration: CatalogConfiguration | undefined;

  /**
   * Describes the configuration of a destination in Amazon S3.
   *
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;
}

/**
 * The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a Firehose stream.
 *
 * @public
 */
export interface KinesisStreamSourceConfiguration {
  /**
   * The ARN of the source Kinesis data stream. For more information, see [Amazon Kinesis Data Streams ARN Format](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams).
   *
   * @public
   */
  KinesisStreamARN: string | undefined;

  /**
   * The ARN of the role that provides access to the source Kinesis data stream. For more information, see [Amazon Web Services Identity and Access Management (IAM) ARN Format](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam).
   *
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * The configuration for the Amazon MSK cluster to be used as the source for a delivery stream.
 *
 * @public
 */
export interface MSKSourceConfiguration {
  /**
   * The ARN of the Amazon MSK cluster.
   *
   * @public
   */
  MSKClusterARN: string | undefined;

  /**
   * The topic name within the Amazon MSK cluster.
   *
   * @public
   */
  TopicName: string | undefined;

  /**
   * The authentication configuration of the Amazon MSK cluster.
   *
   * @public
   */
  AuthenticationConfiguration: AuthenticationConfiguration | undefined;

  /**
   * The start date and time in UTC for the offset position within your MSK topic from where Firehose begins to read. By default, this is set to timestamp when Firehose becomes Active.
   *
   * If you want to create a Firehose stream with Earliest start position from SDK or CLI, you need to set the `ReadFromTimestamp` parameter to Epoch (1970-01-01T00:00:00Z).
   *
   * @public
   */
  ReadFromTimestamp?: Date | undefined;
}

/**
 * Configures retry behavior in case Firehose is unable to deliver documents to Amazon Redshift.
 *
 * @public
 */
export interface RedshiftRetryOptions {
  /**
   * The length of time during which Firehose retries delivery after a failure, starting from the initial request and including the first attempt. The default value is 3600 seconds (60 minutes). Firehose does not retry if the value of `DurationInSeconds` is 0 (zero) or if the first delivery attempt takes longer than the current value.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * Describes the configuration of a destination in Amazon Redshift.
 *
 * @public
 */
export interface RedshiftDestinationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The database connection string.
   *
   * @public
   */
  ClusterJDBCURL: string | undefined;

  /**
   * The `COPY` command.
   *
   * @public
   */
  CopyCommand: CopyCommand | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The user password.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).
   *
   * @public
   */
  RetryOptions?: RedshiftRetryOptions | undefined;

  /**
   * The configuration for the intermediate Amazon S3 location from which Amazon Redshift obtains data. Restrictions are described in the topic for CreateDeliveryStream.
   *
   * The compression formats `SNAPPY` or `ZIP` cannot be specified in `RedshiftDestinationConfiguration.S3Configuration` because the Amazon Redshift `COPY` operation that reads from the S3 bucket doesn't support these compression formats.
   *
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon S3 backup mode. After you create a Firehose stream, you can update it to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the Firehose stream to disable it.
   *
   * @public
   */
  S3BackupMode?: RedshiftS3BackupMode | undefined;

  /**
   * The configuration for backup in Amazon S3.
   *
   * @public
   */
  S3BackupConfiguration?: S3DestinationConfiguration | undefined;

  /**
   * The CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The configuration that defines how you access secrets for Amazon Redshift.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * Describes the buffering to perform before delivering data to the Snowflake destination. If you do not specify any value, Firehose uses the default values.
 *
 * @public
 */
export interface SnowflakeBufferingHints {
  /**
   * Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 128.
   *
   * @public
   */
  SizeInMBs?: number | undefined;

  /**
   * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 0.
   *
   * @public
   */
  IntervalInSeconds?: number | undefined;
}

/**
 * Specify how long Firehose retries sending data to the New Relic HTTP endpoint. After sending data, Firehose first waits for an acknowledgment from the HTTP endpoint. If an error occurs or the acknowledgment doesn’t arrive within the acknowledgment timeout period, Firehose starts the retry duration counter. It keeps retrying until the retry duration expires. After that, Firehose considers it a data delivery failure and backs up the data to your Amazon S3 bucket. Every time that Firehose sends data to the HTTP endpoint (either the initial attempt or a retry), it restarts the acknowledgement timeout counter and waits for an acknowledgement from the HTTP endpoint. Even if the retry duration expires, Firehose still waits for the acknowledgment until it receives it or the acknowledgement timeout period is reached. If the acknowledgment times out, Firehose determines whether there's time left in the retry counter. If there is time left, it retries again and repeats the logic until it receives an acknowledgment or determines that the retry time has expired. If you don't want Firehose to retry sending data, set this value to 0.
 *
 * @public
 */
export interface SnowflakeRetryOptions {
  /**
   * the time period where Firehose will retry sending data to the chosen HTTP endpoint.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * Optionally configure a Snowflake role. Otherwise the default user role will be used.
 *
 * @public
 */
export interface SnowflakeRoleConfiguration {
  /**
   * Enable Snowflake role
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The Snowflake role you wish to configure
   *
   * @public
   */
  SnowflakeRole?: string | undefined;
}

/**
 * Configure a Snowflake VPC
 *
 * @public
 */
export interface SnowflakeVpcConfiguration {
  /**
   * The VPCE ID for Firehose to privately connect with Snowflake. The ID format is com.amazonaws.vpce.[region].vpce-svc-<[id]>. For more information, see [Amazon PrivateLink & Snowflake](https://docs.snowflake.com/en/user-guide/admin-security-privatelink)
   *
   * @public
   */
  PrivateLinkVpceId: string | undefined;
}

/**
 * Configure Snowflake destination
 *
 * @public
 */
export interface SnowflakeDestinationConfiguration {
  /**
   * URL for accessing your Snowflake account. This URL must include your [account identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier). Note that the protocol (https://) and port number are optional.
   *
   * @public
   */
  AccountUrl: string | undefined;

  /**
   * The private key used to encrypt your Snowflake client. For information, see [Using Key Pair Authentication & Key Rotation](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation).
   *
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * Passphrase to decrypt the private key when the key is encrypted. For information, see [Using Key Pair Authentication & Key Rotation](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation).
   *
   * @public
   */
  KeyPassphrase?: string | undefined;

  /**
   * User login name for the Snowflake account.
   *
   * @public
   */
  User?: string | undefined;

  /**
   * All data in Snowflake is maintained in databases.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * Each database consists of one or more schemas, which are logical groupings of database objects, such as tables and views
   *
   * @public
   */
  Schema: string | undefined;

  /**
   * All data in Snowflake is stored in database tables, logically structured as collections of columns and rows.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * Optionally configure a Snowflake role. Otherwise the default user role will be used.
   *
   * @public
   */
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration | undefined;

  /**
   * Choose to load JSON keys mapped to table column names or choose to split the JSON payload where content is mapped to a record content column and source metadata is mapped to a record metadata column.
   *
   * @public
   */
  DataLoadingOption?: SnowflakeDataLoadingOption | undefined;

  /**
   * Specify a column name in the table, where the metadata information has to be loaded. When you enable this field, you will see the following column in the snowflake table, which differs based on the source type.
   *
   * For Direct PUT as source
   *
   * `\{ "firehoseDeliveryStreamName" : "streamname", "IngestionTime" : "timestamp" \}`
   *
   * For Kinesis Data Stream as source
   *
   * `"kinesisStreamName" : "streamname", "kinesisShardId" : "Id", "kinesisPartitionKey" : "key", "kinesisSequenceNumber" : "1234", "subsequenceNumber" : "2334", "IngestionTime" : "timestamp" \}`
   *
   * @public
   */
  MetaDataColumnName?: string | undefined;

  /**
   * The name of the record content column.
   *
   * @public
   */
  ContentColumnName?: string | undefined;

  /**
   * The VPCE ID for Firehose to privately connect with Snowflake. The ID format is com.amazonaws.vpce.[region].vpce-svc-<[id]>. For more information, see [Amazon PrivateLink & Snowflake](https://docs.snowflake.com/en/user-guide/admin-security-privatelink)
   *
   * @public
   */
  SnowflakeVpcConfiguration?: SnowflakeVpcConfiguration | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Snowflake role
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The time period where Firehose will retry sending data to the chosen HTTP endpoint.
   *
   * @public
   */
  RetryOptions?: SnowflakeRetryOptions | undefined;

  /**
   * Choose an S3 backup mode
   *
   * @public
   */
  S3BackupMode?: SnowflakeS3BackupMode | undefined;

  /**
   * Describes the configuration of a destination in Amazon S3.
   *
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * The configuration that defines how you access secrets for Snowflake.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;

  /**
   * Describes the buffering to perform before delivering data to the Snowflake destination. If you do not specify any value, Firehose uses the default values.
   *
   * @public
   */
  BufferingHints?: SnowflakeBufferingHints | undefined;
}

/**
 * The buffering options. If no value is specified, the default values for Splunk are used.
 *
 * @public
 */
export interface SplunkBufferingHints {
  /**
   * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 60 (1 minute).
   *
   * @public
   */
  IntervalInSeconds?: number | undefined;

  /**
   * Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.
   *
   * @public
   */
  SizeInMBs?: number | undefined;
}

/**
 * Configures retry behavior in case Firehose is unable to deliver documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.
 *
 * @public
 */
export interface SplunkRetryOptions {
  /**
   * The total amount of time that Firehose spends on retries. This duration starts after the initial attempt to send data to Splunk fails. It doesn't include the periods during which Firehose waits for acknowledgment from Splunk after each attempt.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * Describes the configuration of a destination in Splunk.
 *
 * @public
 */
export interface SplunkDestinationConfiguration {
  /**
   * The HTTP Event Collector (HEC) endpoint to which Firehose sends your data.
   *
   * @public
   */
  HECEndpoint: string | undefined;

  /**
   * This type can be either "Raw" or "Event."
   *
   * @public
   */
  HECEndpointType: HECEndpointType | undefined;

  /**
   * This is a GUID that you obtain from your Splunk cluster when you create a new HEC endpoint.
   *
   * @public
   */
  HECToken?: string | undefined;

  /**
   * The amount of time that Firehose waits to receive an acknowledgment from Splunk after it sends it data. At the end of the timeout period, Firehose either tries to send the data again or considers it an error, based on your retry settings.
   *
   * @public
   */
  HECAcknowledgmentTimeoutInSeconds?: number | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver data to Splunk, or if it doesn't receive an acknowledgment of receipt from Splunk.
   *
   * @public
   */
  RetryOptions?: SplunkRetryOptions | undefined;

  /**
   * Defines how documents should be delivered to Amazon S3. When set to `FailedEventsOnly`, Firehose writes any data that could not be indexed to the configured Amazon S3 destination. When set to `AllEvents`, Firehose delivers all incoming records to Amazon S3, and also writes failed documents to Amazon S3. The default value is `FailedEventsOnly`.
   *
   * You can update this backup mode from `FailedEventsOnly` to `AllEvents`. You can't update it from `AllEvents` to `FailedEventsOnly`.
   *
   * @public
   */
  S3BackupMode?: SplunkS3BackupMode | undefined;

  /**
   * The configuration for the backup Amazon S3 location.
   *
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The buffering options. If no value is specified, the default values for Splunk are used.
   *
   * @public
   */
  BufferingHints?: SplunkBufferingHints | undefined;

  /**
   * The configuration that defines how you access secrets for Splunk.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * Metadata that you can assign to a Firehose stream, consisting of a key-value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * A unique identifier for the tag. Maximum length: 128 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @
   *
   * @public
   */
  Key: string | undefined;

  /**
   * An optional string, which you can use to describe or define the tag. Maximum length: 256 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - % @
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateDeliveryStreamInput {
  /**
   * The name of the Firehose stream. This name must be unique per Amazon Web Services account in the same Amazon Web Services Region. If the Firehose streams are in different accounts or different Regions, you can have multiple Firehose streams with the same name.
   *
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * The Firehose stream type. This parameter can be one of the following values:
   *
   * - `DirectPut`: Provider applications access the Firehose stream directly.
   * - `KinesisStreamAsSource`: The Firehose stream uses a Kinesis data stream as a source.
   *
   * @public
   */
  DeliveryStreamType?: DeliveryStreamType | undefined;

  /**
   * The structure that configures parameters such as `ThroughputHintInMBs` for a stream configured with Direct PUT as a source.
   *
   * @public
   */
  DirectPutSourceConfiguration?: DirectPutSourceConfiguration | undefined;

  /**
   * When a Kinesis data stream is used as the source for the Firehose stream, a KinesisStreamSourceConfiguration containing the Kinesis data stream Amazon Resource Name (ARN) and the role ARN for the source stream.
   *
   * @public
   */
  KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration | undefined;

  /**
   * Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for Server-Side Encryption (SSE).
   *
   * @public
   */
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput | undefined;

  /**
   * [Deprecated] The destination in Amazon S3. You can specify only one destination.
   *
   * @deprecated deprecated.
   * @public
   */
  S3DestinationConfiguration?: S3DestinationConfiguration | undefined;

  /**
   * The destination in Amazon S3. You can specify only one destination.
   *
   * @public
   */
  ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration | undefined;

  /**
   * The destination in Amazon Redshift. You can specify only one destination.
   *
   * @public
   */
  RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration | undefined;

  /**
   * The destination in Amazon OpenSearch Service. You can specify only one destination.
   *
   * @public
   */
  ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration | undefined;

  /**
   * The destination in Amazon OpenSearch Service. You can specify only one destination.
   *
   * @public
   */
  AmazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfiguration | undefined;

  /**
   * The destination in Splunk. You can specify only one destination.
   *
   * @public
   */
  SplunkDestinationConfiguration?: SplunkDestinationConfiguration | undefined;

  /**
   * Enables configuring Kinesis Firehose to deliver data to any HTTP endpoint destination. You can specify only one destination.
   *
   * @public
   */
  HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration | undefined;

  /**
   * A set of tags to assign to the Firehose stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the Firehose stream. For more information about tags, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the Amazon Web Services Billing and Cost Management User Guide.
   *
   * You can specify up to 50 tags when creating a Firehose stream.
   *
   * If you specify tags in the `CreateDeliveryStream` action, Amazon Data Firehose performs an additional authorization on the `firehose:TagDeliveryStream` action to verify if users have permissions to create tags. If you do not provide this permission, requests to create new Firehose streams with IAM resource tags will fail with an `AccessDeniedException` such as following.
   *
   * **AccessDeniedException**
   *
   * User: arn:aws:sts::x:assumed-role/x/x is not authorized to perform: firehose:TagDeliveryStream on resource: arn:aws:firehose:us-east-1:x:deliverystream/x with an explicit deny in an identity-based policy.
   *
   * For an example IAM policy, see [Tag example.](https://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html#API_CreateDeliveryStream_Examples)
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The destination in the Serverless offering for Amazon OpenSearch Service. You can specify only one destination.
   *
   * @public
   */
  AmazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfiguration | undefined;

  /**
   * The configuration for the Amazon MSK cluster to be used as the source for a delivery stream.
   *
   * @public
   */
  MSKSourceConfiguration?: MSKSourceConfiguration | undefined;

  /**
   * Configure Snowflake destination
   *
   * @public
   */
  SnowflakeDestinationConfiguration?: SnowflakeDestinationConfiguration | undefined;

  /**
   * Configure Apache Iceberg Tables destination.
   *
   * @public
   */
  IcebergDestinationConfiguration?: IcebergDestinationConfiguration | undefined;

  /**
   * The top level object for configuring streams with database as a source.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  DatabaseSourceConfiguration?: DatabaseSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDeliveryStreamOutput {
  /**
   * The ARN of the Firehose stream.
   *
   * @public
   */
  DeliveryStreamARN?: string | undefined;
}

/**
 * Provides details in case one of the following operations fails due to an error related to KMS: CreateDeliveryStream, DeleteDeliveryStream, StartDeliveryStreamEncryption, StopDeliveryStreamEncryption.
 *
 * @public
 */
export interface FailureDescription {
  /**
   * The type of error that caused the failure.
   *
   * @public
   */
  Type: DeliveryStreamFailureType | undefined;

  /**
   * A message providing details about the error that caused the failure.
   *
   * @public
   */
  Details: string | undefined;
}

/**
 * The structure that describes the snapshot information of a table in source database endpoint that Firehose reads.
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface DatabaseSnapshotInfo {
  /**
   * The identifier of the current snapshot of the table in source database endpoint.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The fully qualified name of the table in source database endpoint that Firehose reads.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Table: string | undefined;

  /**
   * The timestamp when the current snapshot is taken on the table.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  RequestTimestamp: Date | undefined;

  /**
   * The principal that sent the request to take the current snapshot on the table.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  RequestedBy: SnapshotRequestedBy | undefined;

  /**
   * The status of the current snapshot of the table.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Status: SnapshotStatus | undefined;

  /**
   * Provides details in case one of the following operations fails due to an error related to KMS: CreateDeliveryStream, DeleteDeliveryStream, StartDeliveryStreamEncryption, StopDeliveryStreamEncryption.
   *
   * @public
   */
  FailureDescription?: FailureDescription | undefined;
}

/**
 * The top level object for database source description.
 *
 * Amazon Data Firehose is in preview release and is subject to change.
 *
 * @public
 */
export interface DatabaseSourceDescription {
  /**
   * The type of database engine. This can be one of the following values.
   *
   * - MySQL
   * - PostgreSQL
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Type?: DatabaseType | undefined;

  /**
   * The endpoint of the database server.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The port of the database. This can be one of the following values.
   *
   * - 3306 for MySQL database type
   * - 5432 for PostgreSQL database type
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The mode to enable or disable SSL when Firehose connects to the database endpoint.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  SSLMode?: SSLMode | undefined;

  /**
   * The list of database patterns in source database endpoint for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Databases?: DatabaseList | undefined;

  /**
   * The list of table patterns in source database endpoint for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Tables?: DatabaseTableList | undefined;

  /**
   * The list of column patterns in source database endpoint for Firehose to read from.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  Columns?: DatabaseColumnList | undefined;

  /**
   * The optional list of table and column names used as unique key columns when taking snapshot if the tables don’t have primary keys configured.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  SurrogateKeys?: string[] | undefined;

  /**
   * The fully qualified name of the table in source database endpoint that Firehose uses to track snapshot progress.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  SnapshotWatermarkTable?: string | undefined;

  /**
   * The structure that describes the snapshot information of a table in source database endpoint that Firehose reads.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  SnapshotInfo?: DatabaseSnapshotInfo[] | undefined;

  /**
   * The structure to configure the authentication methods for Firehose to connect to source database endpoint.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  DatabaseSourceAuthenticationConfiguration?: DatabaseSourceAuthenticationConfiguration | undefined;

  /**
   * The details of the VPC Endpoint Service which Firehose uses to create a PrivateLink to the database.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  DatabaseSourceVPCConfiguration?: DatabaseSourceVPCConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryStreamInput {
  /**
   * The name of the Firehose stream.
   *
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * Set this to true if you want to delete the Firehose stream even if Firehose is unable to retire the grant for the CMK. Firehose might be unable to retire the grant due to a customer error, such as when the CMK or the grant are in an invalid state. If you force deletion, you can then use the [RevokeGrant](https://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html) operation to revoke the grant you gave to Firehose. If a failure to retire the grant happens due to an Amazon Web Services KMS issue, Firehose keeps retrying the delete operation.
   *
   * The default value is false.
   *
   * @public
   */
  AllowForceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryStreamOutput {}

/**
 * Contains information about the server-side encryption (SSE) status for the delivery stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can get `DeliveryStreamEncryptionConfiguration` by invoking the DescribeDeliveryStream operation.
 *
 * @public
 */
export interface DeliveryStreamEncryptionConfiguration {
  /**
   * If `KeyType` is `CUSTOMER_MANAGED_CMK`, this field contains the ARN of the customer managed CMK. If `KeyType` is `Amazon Web Services_OWNED_CMK`, `DeliveryStreamEncryptionConfiguration` doesn't contain a value for `KeyARN`.
   *
   * @public
   */
  KeyARN?: string | undefined;

  /**
   * Indicates the type of customer master key (CMK) that is used for encryption. The default setting is `Amazon Web Services_OWNED_CMK`. For more information about CMKs, see [Customer Master Keys (CMKs)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys).
   *
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * This is the server-side encryption (SSE) status for the Firehose stream. For a full description of the different values of this status, see StartDeliveryStreamEncryption and StopDeliveryStreamEncryption. If this status is `ENABLING_FAILED` or `DISABLING_FAILED`, it is the status of the most recent attempt to enable or disable SSE, respectively.
   *
   * @public
   */
  Status?: DeliveryStreamEncryptionStatus | undefined;

  /**
   * Provides details in case one of the following operations fails due to an error related to KMS: CreateDeliveryStream, DeleteDeliveryStream, StartDeliveryStreamEncryption, StopDeliveryStreamEncryption.
   *
   * @public
   */
  FailureDescription?: FailureDescription | undefined;
}

/**
 * The destination description in Amazon OpenSearch Service.
 *
 * @public
 */
export interface ElasticsearchDestinationDescription {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The ARN of the Amazon OpenSearch Service domain. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * Firehose uses either `ClusterEndpoint` or `DomainARN` to send data to Amazon OpenSearch Service.
   *
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * The endpoint to use when communicating with the cluster. Firehose uses either this `ClusterEndpoint` or the `DomainARN` field to send data to Amazon OpenSearch Service.
   *
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * The Elasticsearch index name.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The Elasticsearch type name. This applies to Elasticsearch 6.x and lower versions. For Elasticsearch 7.x and OpenSearch Service 1.x, there's no value for `TypeName`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The Elasticsearch index rotation period
   *
   * @public
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | undefined;

  /**
   * The buffering options.
   *
   * @public
   */
  BufferingHints?: ElasticsearchBufferingHints | undefined;

  /**
   * The Amazon OpenSearch Service retry options.
   *
   * @public
   */
  RetryOptions?: ElasticsearchRetryOptions | undefined;

  /**
   * The Amazon S3 backup mode.
   *
   * @public
   */
  S3BackupMode?: ElasticsearchS3BackupMode | undefined;

  /**
   * The Amazon S3 destination.
   *
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon CloudWatch logging options.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The details of the VPC of the Amazon OpenSearch or the Amazon OpenSearch Serverless destination.
   *
   * @public
   */
  VpcConfigurationDescription?: VpcConfigurationDescription | undefined;

  /**
   * Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
   *
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * Describes a destination in Amazon S3.
 *
 * @public
 */
export interface ExtendedS3DestinationDescription {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The ARN of the S3 bucket. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A prefix that Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * The buffering option.
   *
   * @public
   */
  BufferingHints: BufferingHints | undefined;

  /**
   * The compression format. If no value is specified, the default is `UNCOMPRESSED`.
   *
   * @public
   */
  CompressionFormat: CompressionFormat | undefined;

  /**
   * The encryption configuration. If no value is specified, the default is no encryption.
   *
   * @public
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * The Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon S3 backup mode.
   *
   * @public
   */
  S3BackupMode?: S3BackupMode | undefined;

  /**
   * The configuration for backup in Amazon S3.
   *
   * @public
   */
  S3BackupDescription?: S3DestinationDescription | undefined;

  /**
   * The serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.
   *
   * @public
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration | undefined;

  /**
   * The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations.
   *
   * @public
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration | undefined;

  /**
   * Specify a file extension. It will override the default file extension
   *
   * @public
   */
  FileExtension?: string | undefined;

  /**
   * The time zone you prefer. UTC is the default.
   *
   * @public
   */
  CustomTimeZone?: string | undefined;
}

/**
 * Describes the HTTP endpoint selected as the destination.
 *
 * @public
 */
export interface HttpEndpointDescription {
  /**
   * The URL of the HTTP endpoint selected as the destination.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The name of the HTTP endpoint selected as the destination.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes the HTTP endpoint destination.
 *
 * @public
 */
export interface HttpEndpointDestinationDescription {
  /**
   * The configuration of the specified HTTP endpoint destination.
   *
   * @public
   */
  EndpointConfiguration?: HttpEndpointDescription | undefined;

  /**
   * Describes buffering options that can be applied to the data before it is delivered to the HTTPS endpoint destination. Firehose teats these options as hints, and it might choose to use more optimal values. The `SizeInMBs` and `IntervalInSeconds` parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
   *
   * @public
   */
  BufferingHints?: HttpEndpointBufferingHints | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The configuration of request sent to the HTTP endpoint specified as the destination.
   *
   * @public
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Firehose uses this IAM role for all the permissions that the delivery stream needs.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * Describes the retry behavior in case Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
   *
   * @public
   */
  RetryOptions?: HttpEndpointRetryOptions | undefined;

  /**
   * Describes the S3 bucket backup options for the data that Kinesis Firehose delivers to the HTTP endpoint destination. You can back up all documents (`AllData`) or only the documents that Firehose could not deliver to the specified HTTP endpoint destination (`FailedDataOnly`).
   *
   * @public
   */
  S3BackupMode?: HttpEndpointS3BackupMode | undefined;

  /**
   * Describes a destination in Amazon S3.
   *
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * The configuration that defines how you access secrets for HTTP Endpoint destination.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * Describes a destination in Apache Iceberg Tables.
 *
 * @public
 */
export interface IcebergDestinationDescription {
  /**
   * Provides a list of `DestinationTableConfigurations` which Firehose uses to deliver data to Apache Iceberg Tables. Firehose will write data with insert if table specific configuration is not provided here.
   *
   * @public
   */
  DestinationTableConfigurationList?: DestinationTableConfiguration[] | undefined;

  /**
   * The description of automatic schema evolution configuration.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  SchemaEvolutionConfiguration?: SchemaEvolutionConfiguration | undefined;

  /**
   * The description of table creation configuration.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  TableCreationConfiguration?: TableCreationConfiguration | undefined;

  /**
   * Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Firehose might choose to use different values when it is optimal. The `SizeInMBs` and `IntervalInSeconds` parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
   *
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Describes how Firehose will backup records. Currently,Firehose only supports `FailedDataOnly`.
   *
   * @public
   */
  S3BackupMode?: IcebergS3BackupMode | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver data to a destination.
   *
   * @public
   */
  RetryOptions?: RetryOptions | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling Apache Iceberg Tables.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * Describes whether all incoming data for this delivery stream will be append only (inserts only and not for updates and deletes) for Iceberg delivery. This feature is only applicable for Apache Iceberg Tables.
   *
   * The default value is false. If you set this value to true, Firehose automatically increases the throughput limit of a stream based on the throttling levels of the stream. If you set this parameter to true for a stream with updates and deletes, you will see out of order delivery.
   *
   * @public
   */
  AppendOnly?: boolean | undefined;

  /**
   * Configuration describing where the destination Iceberg tables are persisted.
   *
   * @public
   */
  CatalogConfiguration?: CatalogConfiguration | undefined;

  /**
   * Describes a destination in Amazon S3.
   *
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;
}

/**
 * Describes a destination in Amazon Redshift.
 *
 * @public
 */
export interface RedshiftDestinationDescription {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The database connection string.
   *
   * @public
   */
  ClusterJDBCURL: string | undefined;

  /**
   * The `COPY` command.
   *
   * @public
   */
  CopyCommand: CopyCommand | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).
   *
   * @public
   */
  RetryOptions?: RedshiftRetryOptions | undefined;

  /**
   * The Amazon S3 destination.
   *
   * @public
   */
  S3DestinationDescription: S3DestinationDescription | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon S3 backup mode.
   *
   * @public
   */
  S3BackupMode?: RedshiftS3BackupMode | undefined;

  /**
   * The configuration for backup in Amazon S3.
   *
   * @public
   */
  S3BackupDescription?: S3DestinationDescription | undefined;

  /**
   * The Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The configuration that defines how you access secrets for Amazon Redshift.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * Optional Snowflake destination description
 *
 * @public
 */
export interface SnowflakeDestinationDescription {
  /**
   * URL for accessing your Snowflake account. This URL must include your [account identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier). Note that the protocol (https://) and port number are optional.
   *
   * @public
   */
  AccountUrl?: string | undefined;

  /**
   * User login name for the Snowflake account.
   *
   * @public
   */
  User?: string | undefined;

  /**
   * All data in Snowflake is maintained in databases.
   *
   * @public
   */
  Database?: string | undefined;

  /**
   * Each database consists of one or more schemas, which are logical groupings of database objects, such as tables and views
   *
   * @public
   */
  Schema?: string | undefined;

  /**
   * All data in Snowflake is stored in database tables, logically structured as collections of columns and rows.
   *
   * @public
   */
  Table?: string | undefined;

  /**
   * Optionally configure a Snowflake role. Otherwise the default user role will be used.
   *
   * @public
   */
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration | undefined;

  /**
   * Choose to load JSON keys mapped to table column names or choose to split the JSON payload where content is mapped to a record content column and source metadata is mapped to a record metadata column.
   *
   * @public
   */
  DataLoadingOption?: SnowflakeDataLoadingOption | undefined;

  /**
   * The name of the record metadata column
   *
   * @public
   */
  MetaDataColumnName?: string | undefined;

  /**
   * The name of the record content column
   *
   * @public
   */
  ContentColumnName?: string | undefined;

  /**
   * The VPCE ID for Firehose to privately connect with Snowflake. The ID format is com.amazonaws.vpce.[region].vpce-svc-<[id]>. For more information, see [Amazon PrivateLink & Snowflake](https://docs.snowflake.com/en/user-guide/admin-security-privatelink)
   *
   * @public
   */
  SnowflakeVpcConfiguration?: SnowflakeVpcConfiguration | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Snowflake role
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The time period where Firehose will retry sending data to the chosen HTTP endpoint.
   *
   * @public
   */
  RetryOptions?: SnowflakeRetryOptions | undefined;

  /**
   * Choose an S3 backup mode
   *
   * @public
   */
  S3BackupMode?: SnowflakeS3BackupMode | undefined;

  /**
   * Describes a destination in Amazon S3.
   *
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * The configuration that defines how you access secrets for Snowflake.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;

  /**
   * Describes the buffering to perform before delivering data to the Snowflake destination. If you do not specify any value, Firehose uses the default values.
   *
   * @public
   */
  BufferingHints?: SnowflakeBufferingHints | undefined;
}

/**
 * Describes a destination in Splunk.
 *
 * @public
 */
export interface SplunkDestinationDescription {
  /**
   * The HTTP Event Collector (HEC) endpoint to which Firehose sends your data.
   *
   * @public
   */
  HECEndpoint?: string | undefined;

  /**
   * This type can be either "Raw" or "Event."
   *
   * @public
   */
  HECEndpointType?: HECEndpointType | undefined;

  /**
   * A GUID you obtain from your Splunk cluster when you create a new HEC endpoint.
   *
   * @public
   */
  HECToken?: string | undefined;

  /**
   * The amount of time that Firehose waits to receive an acknowledgment from Splunk after it sends it data. At the end of the timeout period, Firehose either tries to send the data again or considers it an error, based on your retry settings.
   *
   * @public
   */
  HECAcknowledgmentTimeoutInSeconds?: number | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver data to Splunk or if it doesn't receive an acknowledgment of receipt from Splunk.
   *
   * @public
   */
  RetryOptions?: SplunkRetryOptions | undefined;

  /**
   * Defines how documents should be delivered to Amazon S3. When set to `FailedDocumentsOnly`, Firehose writes any data that could not be indexed to the configured Amazon S3 destination. When set to `AllDocuments`, Firehose delivers all incoming records to Amazon S3, and also writes failed documents to Amazon S3. Default value is `FailedDocumentsOnly`.
   *
   * @public
   */
  S3BackupMode?: SplunkS3BackupMode | undefined;

  /**
   * The Amazon S3 destination.>
   *
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The buffering options. If no value is specified, the default values for Splunk are used.
   *
   * @public
   */
  BufferingHints?: SplunkBufferingHints | undefined;

  /**
   * The configuration that defines how you access secrets for Splunk.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * Describes the destination for a Firehose stream.
 *
 * @public
 */
export interface DestinationDescription {
  /**
   * The ID of the destination.
   *
   * @public
   */
  DestinationId: string | undefined;

  /**
   * [Deprecated] The destination in Amazon S3.
   *
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * The destination in Amazon S3.
   *
   * @public
   */
  ExtendedS3DestinationDescription?: ExtendedS3DestinationDescription | undefined;

  /**
   * The destination in Amazon Redshift.
   *
   * @public
   */
  RedshiftDestinationDescription?: RedshiftDestinationDescription | undefined;

  /**
   * The destination in Amazon OpenSearch Service.
   *
   * @public
   */
  ElasticsearchDestinationDescription?: ElasticsearchDestinationDescription | undefined;

  /**
   * The destination in Amazon OpenSearch Service.
   *
   * @public
   */
  AmazonopensearchserviceDestinationDescription?: AmazonopensearchserviceDestinationDescription | undefined;

  /**
   * The destination in Splunk.
   *
   * @public
   */
  SplunkDestinationDescription?: SplunkDestinationDescription | undefined;

  /**
   * Describes the specified HTTP endpoint destination.
   *
   * @public
   */
  HttpEndpointDestinationDescription?: HttpEndpointDestinationDescription | undefined;

  /**
   * Optional description for the destination
   *
   * @public
   */
  SnowflakeDestinationDescription?: SnowflakeDestinationDescription | undefined;

  /**
   * The destination in the Serverless offering for Amazon OpenSearch Service.
   *
   * @public
   */
  AmazonOpenSearchServerlessDestinationDescription?: AmazonOpenSearchServerlessDestinationDescription | undefined;

  /**
   * Describes a destination in Apache Iceberg Tables.
   *
   * @public
   */
  IcebergDestinationDescription?: IcebergDestinationDescription | undefined;
}

/**
 * The structure that configures parameters such as `ThroughputHintInMBs` for a stream configured with Direct PUT as a source.
 *
 * @public
 */
export interface DirectPutSourceDescription {
  /**
   * The value that you configure for this parameter is for information purpose only and does not affect Firehose delivery throughput limit. You can use the [Firehose Limits form](https://support.console.aws.amazon.com/support/home#/case/create%3FissueType=service-limit-increase%26limitType=kinesis-firehose-limits) to request a throughput limit increase.
   *
   * @public
   */
  ThroughputHintInMBs?: number | undefined;
}

/**
 * Details about a Kinesis data stream used as the source for a Firehose stream.
 *
 * @public
 */
export interface KinesisStreamSourceDescription {
  /**
   * The Amazon Resource Name (ARN) of the source Kinesis data stream. For more information, see [Amazon Kinesis Data Streams ARN Format](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams).
   *
   * @public
   */
  KinesisStreamARN?: string | undefined;

  /**
   * The ARN of the role used by the source Kinesis data stream. For more information, see [Amazon Web Services Identity and Access Management (IAM) ARN Format](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam).
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * Firehose starts retrieving records from the Kinesis data stream starting with this timestamp.
   *
   * @public
   */
  DeliveryStartTimestamp?: Date | undefined;
}

/**
 * Details about the Amazon MSK cluster used as the source for a Firehose stream.
 *
 * @public
 */
export interface MSKSourceDescription {
  /**
   * The ARN of the Amazon MSK cluster.
   *
   * @public
   */
  MSKClusterARN?: string | undefined;

  /**
   * The topic name within the Amazon MSK cluster.
   *
   * @public
   */
  TopicName?: string | undefined;

  /**
   * The authentication configuration of the Amazon MSK cluster.
   *
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfiguration | undefined;

  /**
   * Firehose starts retrieving records from the topic within the Amazon MSK cluster starting with this timestamp.
   *
   * @public
   */
  DeliveryStartTimestamp?: Date | undefined;

  /**
   * The start date and time in UTC for the offset position within your MSK topic from where Firehose begins to read. By default, this is set to timestamp when Firehose becomes Active.
   *
   * If you want to create a Firehose stream with Earliest start position from SDK or CLI, you need to set the `ReadFromTimestampUTC` parameter to Epoch (1970-01-01T00:00:00Z).
   *
   * @public
   */
  ReadFromTimestamp?: Date | undefined;
}

/**
 * Details about a Kinesis data stream used as the source for a Firehose stream.
 *
 * @public
 */
export interface SourceDescription {
  /**
   * Details about Direct PUT used as the source for a Firehose stream.
   *
   * @public
   */
  DirectPutSourceDescription?: DirectPutSourceDescription | undefined;

  /**
   * The KinesisStreamSourceDescription value for the source Kinesis data stream.
   *
   * @public
   */
  KinesisStreamSourceDescription?: KinesisStreamSourceDescription | undefined;

  /**
   * The configuration description for the Amazon MSK cluster to be used as the source for a delivery stream.
   *
   * @public
   */
  MSKSourceDescription?: MSKSourceDescription | undefined;

  /**
   * Details about a database used as the source for a Firehose stream.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  DatabaseSourceDescription?: DatabaseSourceDescription | undefined;
}

/**
 * Contains information about a Firehose stream.
 *
 * @public
 */
export interface DeliveryStreamDescription {
  /**
   * The name of the Firehose stream.
   *
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Firehose stream. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  DeliveryStreamARN: string | undefined;

  /**
   * The status of the Firehose stream. If the status of a Firehose stream is `CREATING_FAILED`, this status doesn't change, and you can't invoke `CreateDeliveryStream` again on it. However, you can invoke the DeleteDeliveryStream operation to delete it.
   *
   * @public
   */
  DeliveryStreamStatus: DeliveryStreamStatus | undefined;

  /**
   * Provides details in case one of the following operations fails due to an error related to KMS: CreateDeliveryStream, DeleteDeliveryStream, StartDeliveryStreamEncryption, StopDeliveryStreamEncryption.
   *
   * @public
   */
  FailureDescription?: FailureDescription | undefined;

  /**
   * Indicates the server-side encryption (SSE) status for the Firehose stream.
   *
   * @public
   */
  DeliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration | undefined;

  /**
   * The Firehose stream type. This can be one of the following values:
   *
   * - `DirectPut`: Provider applications access the Firehose stream directly.
   * - `KinesisStreamAsSource`: The Firehose stream uses a Kinesis data stream as a source.
   *
   * @public
   */
  DeliveryStreamType: DeliveryStreamType | undefined;

  /**
   * Each time the destination is updated for a Firehose stream, the version ID is changed, and the current version ID is required when updating the destination. This is so that the service knows it is applying the changes to the correct version of the delivery stream.
   *
   * @public
   */
  VersionId: string | undefined;

  /**
   * The date and time that the Firehose stream was created.
   *
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * The date and time that the Firehose stream was last updated.
   *
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * If the `DeliveryStreamType` parameter is `KinesisStreamAsSource`, a SourceDescription object describing the source Kinesis data stream.
   *
   * @public
   */
  Source?: SourceDescription | undefined;

  /**
   * The destinations.
   *
   * @public
   */
  Destinations: DestinationDescription[] | undefined;

  /**
   * Indicates whether there are more destinations available to list.
   *
   * @public
   */
  HasMoreDestinations: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveryStreamInput {
  /**
   * The name of the Firehose stream.
   *
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * The limit on the number of destinations to return. You can have one destination per Firehose stream.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The ID of the destination to start returning the destination information. Firehose supports one destination per Firehose stream.
   *
   * @public
   */
  ExclusiveStartDestinationId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveryStreamOutput {
  /**
   * Information about the Firehose stream.
   *
   * @public
   */
  DeliveryStreamDescription: DeliveryStreamDescription | undefined;
}

/**
 * Describes an update for a destination in Amazon OpenSearch Service.
 *
 * @public
 */
export interface ElasticsearchDestinationUpdate {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling the Amazon OpenSearch Service Configuration API and for indexing documents. For more information, see [Grant Firehose Access to an Amazon S3 Destination](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3) and [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions for `DescribeDomain`, `DescribeDomains`, and `DescribeDomainConfig` after assuming the IAM role specified in `RoleARN`. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * Specify either `ClusterEndpoint` or `DomainARN`.
   *
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * The endpoint to use when communicating with the cluster. Specify either this `ClusterEndpoint` or the `DomainARN` field.
   *
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * The Elasticsearch index name.
   *
   * @public
   */
  IndexName?: string | undefined;

  /**
   * The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per index. If you try to specify a new type for an existing index that already has another type, Firehose returns an error during runtime.
   *
   * If you upgrade Elasticsearch from 6.x to 7.x and don’t update your Firehose stream, Firehose still delivers data to Elasticsearch with the old index name and type name. If you want to update your Firehose stream with a new index name, provide an empty string for `TypeName`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The Elasticsearch index rotation period. Index rotation appends a timestamp to `IndexName` to facilitate the expiration of old data. For more information, see [Index Rotation for the Amazon OpenSearch Service Destination](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation). Default value is `OneDay`.
   *
   * @public
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | undefined;

  /**
   * The buffering options. If no value is specified, `ElasticsearchBufferingHints` object default values are used.
   *
   * @public
   */
  BufferingHints?: ElasticsearchBufferingHints | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver documents to Amazon OpenSearch Service. The default value is 300 (5 minutes).
   *
   * @public
   */
  RetryOptions?: ElasticsearchRetryOptions | undefined;

  /**
   * The Amazon S3 destination.
   *
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
   *
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * Describes an update for a destination in Amazon S3.
 *
 * @public
 */
export interface ExtendedS3DestinationUpdate {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The ARN of the S3 bucket. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  BucketARN?: string | undefined;

  /**
   * The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3 files. You can also specify a custom prefix, as described in [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A prefix that Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
   *
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * The buffering option.
   *
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * The compression format. If no value is specified, the default is `UNCOMPRESSED`.
   *
   * @public
   */
  CompressionFormat?: CompressionFormat | undefined;

  /**
   * The encryption configuration. If no value is specified, the default is no encryption.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * You can update a Firehose stream to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the Firehose stream to disable it.
   *
   * @public
   */
  S3BackupMode?: S3BackupMode | undefined;

  /**
   * The Amazon S3 destination for backup.
   *
   * @public
   */
  S3BackupUpdate?: S3DestinationUpdate | undefined;

  /**
   * The serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.
   *
   * @public
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration | undefined;

  /**
   * The configuration of the dynamic partitioning mechanism that creates smaller data sets from the streaming data by partitioning it based on partition keys. Currently, dynamic partitioning is only supported for Amazon S3 destinations.
   *
   * @public
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration | undefined;

  /**
   * Specify a file extension. It will override the default file extension
   *
   * @public
   */
  FileExtension?: string | undefined;

  /**
   * The time zone you prefer. UTC is the default.
   *
   * @public
   */
  CustomTimeZone?: string | undefined;
}

/**
 * @public
 */
export interface ListDeliveryStreamsInput {
  /**
   * The maximum number of Firehose streams to list. The default value is 10.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The Firehose stream type. This can be one of the following values:
   *
   * - `DirectPut`: Provider applications access the Firehose stream directly.
   * - `KinesisStreamAsSource`: The Firehose stream uses a Kinesis data stream as a source.
   *
   * This parameter is optional. If this parameter is omitted, Firehose streams of all types are returned.
   *
   * @public
   */
  DeliveryStreamType?: DeliveryStreamType | undefined;

  /**
   * The list of Firehose streams returned by this call to `ListDeliveryStreams` will start with the Firehose stream whose name comes alphabetically immediately after the name you specify in `ExclusiveStartDeliveryStreamName`.
   *
   * @public
   */
  ExclusiveStartDeliveryStreamName?: string | undefined;
}

/**
 * @public
 */
export interface ListDeliveryStreamsOutput {
  /**
   * The names of the Firehose streams.
   *
   * @public
   */
  DeliveryStreamNames: string[] | undefined;

  /**
   * Indicates whether there are more Firehose streams available to list.
   *
   * @public
   */
  HasMoreDeliveryStreams: boolean | undefined;
}

/**
 * @public
 */
export interface ListTagsForDeliveryStreamInput {
  /**
   * The name of the Firehose stream whose tags you want to list.
   *
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * The key to use as the starting point for the list of tags. If you set this parameter, `ListTagsForDeliveryStream` gets all tags that occur after `ExclusiveStartTagKey`.
   *
   * @public
   */
  ExclusiveStartTagKey?: string | undefined;

  /**
   * The number of tags to return. If this number is less than the total number of tags associated with the Firehose stream, `HasMoreTags` is set to `true` in the response. To list additional tags, set `ExclusiveStartTagKey` to the last key in the response.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForDeliveryStreamOutput {
  /**
   * A list of tags associated with `DeliveryStreamName`, starting with the first tag after `ExclusiveStartTagKey` and up to the specified `Limit`.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * If this is `true` in the response, more tags are available. To list the remaining tags, set `ExclusiveStartTagKey` to the key of the last tag returned and call `ListTagsForDeliveryStream` again.
   *
   * @public
   */
  HasMoreTags: boolean | undefined;
}

/**
 * The unit of data in a Firehose stream.
 *
 * @public
 */
export interface _Record {
  /**
   * The data blob, which is base64-encoded when the blob is serialized. The maximum size of the data blob, before base64-encoding, is 1,000 KiB.
   *
   * @public
   */
  Data: Uint8Array | undefined;
}

/**
 * @public
 */
export interface PutRecordInput {
  /**
   * The name of the Firehose stream.
   *
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * The record.
   *
   * @public
   */
  Record: _Record | undefined;
}

/**
 * @public
 */
export interface PutRecordOutput {
  /**
   * The ID of the record.
   *
   * @public
   */
  RecordId: string | undefined;

  /**
   * Indicates whether server-side encryption (SSE) was enabled during this operation.
   *
   * @public
   */
  Encrypted?: boolean | undefined;
}

/**
 * @public
 */
export interface PutRecordBatchInput {
  /**
   * The name of the Firehose stream.
   *
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * One or more records.
   *
   * @public
   */
  Records: _Record[] | undefined;
}

/**
 * Contains the result for an individual record from a PutRecordBatch request. If the record is successfully added to your Firehose stream, it receives a record ID. If the record fails to be added to your Firehose stream, the result includes an error code and an error message.
 *
 * @public
 */
export interface PutRecordBatchResponseEntry {
  /**
   * The ID of the record.
   *
   * @public
   */
  RecordId?: string | undefined;

  /**
   * The error code for an individual record result.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message for an individual record result.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutRecordBatchOutput {
  /**
   * The number of records that might have failed processing. This number might be greater than 0 even if the PutRecordBatch call succeeds. Check `FailedPutCount` to determine whether there are records that you need to resend.
   *
   * @public
   */
  FailedPutCount: number | undefined;

  /**
   * Indicates whether server-side encryption (SSE) was enabled during this operation.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The results array. For each record, the index of the response element is the same as the index used in the request array.
   *
   * @public
   */
  RequestResponses: PutRecordBatchResponseEntry[] | undefined;
}

/**
 * @public
 */
export interface StartDeliveryStreamEncryptionInput {
  /**
   * The name of the Firehose stream for which you want to enable server-side encryption (SSE).
   *
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for Server-Side Encryption (SSE).
   *
   * @public
   */
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput | undefined;
}

/**
 * @public
 */
export interface StartDeliveryStreamEncryptionOutput {}

/**
 * @public
 */
export interface StopDeliveryStreamEncryptionInput {
  /**
   * The name of the Firehose stream for which you want to disable server-side encryption (SSE).
   *
   * @public
   */
  DeliveryStreamName: string | undefined;
}

/**
 * @public
 */
export interface StopDeliveryStreamEncryptionOutput {}

/**
 * @public
 */
export interface TagDeliveryStreamInput {
  /**
   * The name of the Firehose stream to which you want to add the tags.
   *
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * A set of key-value pairs to use to create the tags.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagDeliveryStreamOutput {}

/**
 * @public
 */
export interface UntagDeliveryStreamInput {
  /**
   * The name of the Firehose stream.
   *
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * A list of tag keys. Each corresponding tag is removed from the delivery stream.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagDeliveryStreamOutput {}

/**
 * Updates the specified HTTP endpoint destination.
 *
 * @public
 */
export interface HttpEndpointDestinationUpdate {
  /**
   * Describes the configuration of the HTTP endpoint destination.
   *
   * @public
   */
  EndpointConfiguration?: HttpEndpointConfiguration | undefined;

  /**
   * Describes buffering options that can be applied to the data before it is delivered to the HTTPS endpoint destination. Firehose teats these options as hints, and it might choose to use more optimal values. The `SizeInMBs` and `IntervalInSeconds` parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
   *
   * @public
   */
  BufferingHints?: HttpEndpointBufferingHints | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The configuration of the request sent to the HTTP endpoint specified as the destination.
   *
   * @public
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Firehose uses this IAM role for all the permissions that the delivery stream needs.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * Describes the retry behavior in case Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
   *
   * @public
   */
  RetryOptions?: HttpEndpointRetryOptions | undefined;

  /**
   * Describes the S3 bucket backup options for the data that Kinesis Firehose delivers to the HTTP endpoint destination. You can back up all documents (`AllData`) or only the documents that Firehose could not deliver to the specified HTTP endpoint destination (`FailedDataOnly`).
   *
   * @public
   */
  S3BackupMode?: HttpEndpointS3BackupMode | undefined;

  /**
   * Describes an update for a destination in Amazon S3.
   *
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * The configuration that defines how you access secrets for HTTP Endpoint destination.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * Describes an update for a destination in Apache Iceberg Tables.
 *
 * @public
 */
export interface IcebergDestinationUpdate {
  /**
   * Provides a list of `DestinationTableConfigurations` which Firehose uses to deliver data to Apache Iceberg Tables. Firehose will write data with insert if table specific configuration is not provided here.
   *
   * @public
   */
  DestinationTableConfigurationList?: DestinationTableConfiguration[] | undefined;

  /**
   * The configuration to enable automatic schema evolution.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  SchemaEvolutionConfiguration?: SchemaEvolutionConfiguration | undefined;

  /**
   * The configuration to enable automatic table creation.
   *
   * Amazon Data Firehose is in preview release and is subject to change.
   *
   * @public
   */
  TableCreationConfiguration?: TableCreationConfiguration | undefined;

  /**
   * Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Firehose might choose to use different values when it is optimal. The `SizeInMBs` and `IntervalInSeconds` parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
   *
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * Describes how Firehose will backup records. Currently,Firehose only supports `FailedDataOnly`.
   *
   * @public
   */
  S3BackupMode?: IcebergS3BackupMode | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver data to a destination.
   *
   * @public
   */
  RetryOptions?: RetryOptions | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling Apache Iceberg Tables.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * Describes whether all incoming data for this delivery stream will be append only (inserts only and not for updates and deletes) for Iceberg delivery. This feature is only applicable for Apache Iceberg Tables.
   *
   * The default value is false. If you set this value to true, Firehose automatically increases the throughput limit of a stream based on the throttling levels of the stream. If you set this parameter to true for a stream with updates and deletes, you will see out of order delivery.
   *
   * @public
   */
  AppendOnly?: boolean | undefined;

  /**
   * Configuration describing where the destination Iceberg tables are persisted.
   *
   * @public
   */
  CatalogConfiguration?: CatalogConfiguration | undefined;

  /**
   * Describes the configuration of a destination in Amazon S3.
   *
   * @public
   */
  S3Configuration?: S3DestinationConfiguration | undefined;
}

/**
 * Describes an update for a destination in Amazon Redshift.
 *
 * @public
 */
export interface RedshiftDestinationUpdate {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more information, see [Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The database connection string.
   *
   * @public
   */
  ClusterJDBCURL?: string | undefined;

  /**
   * The `COPY` command.
   *
   * @public
   */
  CopyCommand?: CopyCommand | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The user password.
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).
   *
   * @public
   */
  RetryOptions?: RedshiftRetryOptions | undefined;

  /**
   * The Amazon S3 destination.
   *
   * The compression formats `SNAPPY` or `ZIP` cannot be specified in `RedshiftDestinationUpdate.S3Update` because the Amazon Redshift `COPY` operation that reads from the S3 bucket doesn't support these compression formats.
   *
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * You can update a Firehose stream to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the Firehose stream to disable it.
   *
   * @public
   */
  S3BackupMode?: RedshiftS3BackupMode | undefined;

  /**
   * The Amazon S3 destination for backup.
   *
   * @public
   */
  S3BackupUpdate?: S3DestinationUpdate | undefined;

  /**
   * The Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The configuration that defines how you access secrets for Amazon Redshift.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * Update to configuration settings
 *
 * @public
 */
export interface SnowflakeDestinationUpdate {
  /**
   * URL for accessing your Snowflake account. This URL must include your [account identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier). Note that the protocol (https://) and port number are optional.
   *
   * @public
   */
  AccountUrl?: string | undefined;

  /**
   * The private key used to encrypt your Snowflake client. For information, see [Using Key Pair Authentication & Key Rotation](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation).
   *
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * Passphrase to decrypt the private key when the key is encrypted. For information, see [Using Key Pair Authentication & Key Rotation](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation).
   *
   * @public
   */
  KeyPassphrase?: string | undefined;

  /**
   * User login name for the Snowflake account.
   *
   * @public
   */
  User?: string | undefined;

  /**
   * All data in Snowflake is maintained in databases.
   *
   * @public
   */
  Database?: string | undefined;

  /**
   * Each database consists of one or more schemas, which are logical groupings of database objects, such as tables and views
   *
   * @public
   */
  Schema?: string | undefined;

  /**
   * All data in Snowflake is stored in database tables, logically structured as collections of columns and rows.
   *
   * @public
   */
  Table?: string | undefined;

  /**
   * Optionally configure a Snowflake role. Otherwise the default user role will be used.
   *
   * @public
   */
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration | undefined;

  /**
   * JSON keys mapped to table column names or choose to split the JSON payload where content is mapped to a record content column and source metadata is mapped to a record metadata column.
   *
   * @public
   */
  DataLoadingOption?: SnowflakeDataLoadingOption | undefined;

  /**
   * The name of the record metadata column
   *
   * @public
   */
  MetaDataColumnName?: string | undefined;

  /**
   * The name of the content metadata column
   *
   * @public
   */
  ContentColumnName?: string | undefined;

  /**
   * Describes the Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * Describes a data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Snowflake role
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * Specify how long Firehose retries sending data to the New Relic HTTP endpoint. After sending data, Firehose first waits for an acknowledgment from the HTTP endpoint. If an error occurs or the acknowledgment doesn’t arrive within the acknowledgment timeout period, Firehose starts the retry duration counter. It keeps retrying until the retry duration expires. After that, Firehose considers it a data delivery failure and backs up the data to your Amazon S3 bucket. Every time that Firehose sends data to the HTTP endpoint (either the initial attempt or a retry), it restarts the acknowledgement timeout counter and waits for an acknowledgement from the HTTP endpoint. Even if the retry duration expires, Firehose still waits for the acknowledgment until it receives it or the acknowledgement timeout period is reached. If the acknowledgment times out, Firehose determines whether there's time left in the retry counter. If there is time left, it retries again and repeats the logic until it receives an acknowledgment or determines that the retry time has expired. If you don't want Firehose to retry sending data, set this value to 0.
   *
   * @public
   */
  RetryOptions?: SnowflakeRetryOptions | undefined;

  /**
   * Choose an S3 backup mode. Once you set the mode as `AllData`, you can not change it to `FailedDataOnly`.
   *
   * @public
   */
  S3BackupMode?: SnowflakeS3BackupMode | undefined;

  /**
   * Describes an update for a destination in Amazon S3.
   *
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * Describes the Secrets Manager configuration in Snowflake.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;

  /**
   * Describes the buffering to perform before delivering data to the Snowflake destination.
   *
   * @public
   */
  BufferingHints?: SnowflakeBufferingHints | undefined;
}

/**
 * Describes an update for a destination in Splunk.
 *
 * @public
 */
export interface SplunkDestinationUpdate {
  /**
   * The HTTP Event Collector (HEC) endpoint to which Firehose sends your data.
   *
   * @public
   */
  HECEndpoint?: string | undefined;

  /**
   * This type can be either "Raw" or "Event."
   *
   * @public
   */
  HECEndpointType?: HECEndpointType | undefined;

  /**
   * A GUID that you obtain from your Splunk cluster when you create a new HEC endpoint.
   *
   * @public
   */
  HECToken?: string | undefined;

  /**
   * The amount of time that Firehose waits to receive an acknowledgment from Splunk after it sends data. At the end of the timeout period, Firehose either tries to send the data again or considers it an error, based on your retry settings.
   *
   * @public
   */
  HECAcknowledgmentTimeoutInSeconds?: number | undefined;

  /**
   * The retry behavior in case Firehose is unable to deliver data to Splunk or if it doesn't receive an acknowledgment of receipt from Splunk.
   *
   * @public
   */
  RetryOptions?: SplunkRetryOptions | undefined;

  /**
   * Specifies how you want Firehose to back up documents to Amazon S3. When set to `FailedDocumentsOnly`, Firehose writes any data that could not be indexed to the configured Amazon S3 destination. When set to `AllEvents`, Firehose delivers all incoming records to Amazon S3, and also writes failed documents to Amazon S3. The default value is `FailedEventsOnly`.
   *
   * You can update this backup mode from `FailedEventsOnly` to `AllEvents`. You can't update it from `AllEvents` to `FailedEventsOnly`.
   *
   * @public
   */
  S3BackupMode?: SplunkS3BackupMode | undefined;

  /**
   * Your update to the configuration of the backup Amazon S3 location.
   *
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * The data processing configuration.
   *
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * The Amazon CloudWatch logging options for your Firehose stream.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * The buffering options. If no value is specified, the default values for Splunk are used.
   *
   * @public
   */
  BufferingHints?: SplunkBufferingHints | undefined;

  /**
   * The configuration that defines how you access secrets for Splunk.
   *
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDestinationInput {
  /**
   * The name of the Firehose stream.
   *
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * Obtain this value from the `VersionId` result of DeliveryStreamDescription. This value is required, and helps the service perform conditional operations. For example, if there is an interleaving update and this value is null, then the update destination fails. After the update is successful, the `VersionId` value is updated. The service then performs a merge of the old configuration with the new configuration.
   *
   * @public
   */
  CurrentDeliveryStreamVersionId: string | undefined;

  /**
   * The ID of the destination.
   *
   * @public
   */
  DestinationId: string | undefined;

  /**
   * [Deprecated] Describes an update for a destination in Amazon S3.
   *
   * @deprecated deprecated.
   * @public
   */
  S3DestinationUpdate?: S3DestinationUpdate | undefined;

  /**
   * Describes an update for a destination in Amazon S3.
   *
   * @public
   */
  ExtendedS3DestinationUpdate?: ExtendedS3DestinationUpdate | undefined;

  /**
   * Describes an update for a destination in Amazon Redshift.
   *
   * @public
   */
  RedshiftDestinationUpdate?: RedshiftDestinationUpdate | undefined;

  /**
   * Describes an update for a destination in Amazon OpenSearch Service.
   *
   * @public
   */
  ElasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate | undefined;

  /**
   * Describes an update for a destination in Amazon OpenSearch Service.
   *
   * @public
   */
  AmazonopensearchserviceDestinationUpdate?: AmazonopensearchserviceDestinationUpdate | undefined;

  /**
   * Describes an update for a destination in Splunk.
   *
   * @public
   */
  SplunkDestinationUpdate?: SplunkDestinationUpdate | undefined;

  /**
   * Describes an update to the specified HTTP endpoint destination.
   *
   * @public
   */
  HttpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate | undefined;

  /**
   * Describes an update for a destination in the Serverless offering for Amazon OpenSearch Service.
   *
   * @public
   */
  AmazonOpenSearchServerlessDestinationUpdate?: AmazonOpenSearchServerlessDestinationUpdate | undefined;

  /**
   * Update to the Snowflake destination configuration settings.
   *
   * @public
   */
  SnowflakeDestinationUpdate?: SnowflakeDestinationUpdate | undefined;

  /**
   * Describes an update for a destination in Apache Iceberg Tables.
   *
   * @public
   */
  IcebergDestinationUpdate?: IcebergDestinationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateDestinationOutput {}

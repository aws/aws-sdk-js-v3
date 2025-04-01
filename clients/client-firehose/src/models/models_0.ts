// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { FirehoseServiceException as __BaseException } from "./FirehoseServiceException";

/**
 * <p>Describes the buffering to perform before delivering data to the Serverless offering for
 *          Amazon OpenSearch Service destination.</p>
 * @public
 */
export interface AmazonOpenSearchServerlessBufferingHints {
  /**
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering it
   *          to the destination. The default value is 300 (5 minutes).</p>
   * @public
   */
  IntervalInSeconds?: number | undefined;

  /**
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the
   *          destination. The default value is 5. </p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the Firehose stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MB/sec, the value should be 10 MB or higher.</p>
   * @public
   */
  SizeInMBs?: number | undefined;
}

/**
 * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
 * @public
 */
export interface CloudWatchLoggingOptions {
  /**
   * <p>Enables or disables CloudWatch logging.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The CloudWatch group name for logging. This value is required if CloudWatch logging
   *          is enabled.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>The CloudWatch log stream name for logging. This value is required if CloudWatch
   *          logging is enabled.</p>
   * @public
   */
  LogStreamName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProcessorParameterName = {
  BUFFER_INTERVAL_IN_SECONDS: "BufferIntervalInSeconds",
  BUFFER_SIZE_IN_MB: "BufferSizeInMBs",
  COMPRESSION_FORMAT: "CompressionFormat",
  DATA_MESSAGE_EXTRACTION: "DataMessageExtraction",
  Delimiter: "Delimiter",
  JSON_PARSING_ENGINE: "JsonParsingEngine",
  LAMBDA_ARN: "LambdaArn",
  LAMBDA_NUMBER_OF_RETRIES: "NumberOfRetries",
  METADATA_EXTRACTION_QUERY: "MetadataExtractionQuery",
  ROLE_ARN: "RoleArn",
  SUB_RECORD_TYPE: "SubRecordType",
} as const;

/**
 * @public
 */
export type ProcessorParameterName = (typeof ProcessorParameterName)[keyof typeof ProcessorParameterName];

/**
 * <p>Describes the processor parameter. </p>
 * @public
 */
export interface ProcessorParameter {
  /**
   * <p>The name of the parameter. Currently the following default values are supported: 3
   *          for <code>NumberOfRetries</code> and 60 for the <code>BufferIntervalInSeconds</code>. The
   *             <code>BufferSizeInMBs</code> ranges between 0.2 MB and up to 3MB. The default buffering
   *          hint is 1MB for all destinations, except Splunk. For Splunk, the default buffering hint is
   *          256 KB. </p>
   * @public
   */
  ParameterName: ProcessorParameterName | undefined;

  /**
   * <p>The parameter value.</p>
   * @public
   */
  ParameterValue: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProcessorType = {
  AppendDelimiterToRecord: "AppendDelimiterToRecord",
  CloudWatchLogProcessing: "CloudWatchLogProcessing",
  Decompression: "Decompression",
  Lambda: "Lambda",
  MetadataExtraction: "MetadataExtraction",
  RecordDeAggregation: "RecordDeAggregation",
} as const;

/**
 * @public
 */
export type ProcessorType = (typeof ProcessorType)[keyof typeof ProcessorType];

/**
 * <p>Describes a data processor.</p>
 *          <note>
 *             <p>If you want to add a new line delimiter between records in objects that are delivered to Amazon S3, choose <code>AppendDelimiterToRecord</code> as a processor type. You don’t have to put a processor parameter when you select <code>AppendDelimiterToRecord</code>. </p>
 *          </note>
 * @public
 */
export interface Processor {
  /**
   * <p>The type of processor.</p>
   * @public
   */
  Type: ProcessorType | undefined;

  /**
   * <p>The processor parameters.</p>
   * @public
   */
  Parameters?: ProcessorParameter[] | undefined;
}

/**
 * <p>Describes a data processing configuration.</p>
 * @public
 */
export interface ProcessingConfiguration {
  /**
   * <p>Enables or disables data processing.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The data processors.</p>
   * @public
   */
  Processors?: Processor[] | undefined;
}

/**
 * <p>Configures retry behavior in case Firehose is unable to deliver documents
 *          to the Serverless offering for Amazon OpenSearch Service.</p>
 * @public
 */
export interface AmazonOpenSearchServerlessRetryOptions {
  /**
   * <p>After an initial failure to deliver to the Serverless offering for Amazon OpenSearch
   *          Service, the total amount of time during which Firehose retries delivery
   *          (including the first attempt). After this time has elapsed, the failed documents are
   *          written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results
   *          in no retries.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AmazonOpenSearchServerlessS3BackupMode = {
  AllDocuments: "AllDocuments",
  FailedDocumentsOnly: "FailedDocumentsOnly",
} as const;

/**
 * @public
 */
export type AmazonOpenSearchServerlessS3BackupMode =
  (typeof AmazonOpenSearchServerlessS3BackupMode)[keyof typeof AmazonOpenSearchServerlessS3BackupMode];

/**
 * <p>Describes hints for the buffering to perform before delivering data to the
 *          destination. These options are treated as hints, and therefore Firehose might
 *          choose to use different values when it is optimal. The <code>SizeInMBs</code> and
 *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
 *          one of them, you must also provide a value for the other.</p>
 * @public
 */
export interface BufferingHints {
  /**
   * <p>Buffer incoming data to the specified size, in MiBs, before delivering it to the
   *          destination. The default value is 5. This parameter is optional but if you specify a value
   *          for it, you must also specify a value for <code>IntervalInSeconds</code>, and vice
   *          versa.</p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the Firehose stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MiB/sec, the value should be 10 MiB or higher.</p>
   * @public
   */
  SizeInMBs?: number | undefined;

  /**
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering
   *          it to the destination. The default value is 300. This parameter is optional but if you
   *          specify a value for it, you must also specify a value for <code>SizeInMBs</code>, and vice
   *          versa.</p>
   * @public
   */
  IntervalInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const CompressionFormat = {
  GZIP: "GZIP",
  HADOOP_SNAPPY: "HADOOP_SNAPPY",
  SNAPPY: "Snappy",
  UNCOMPRESSED: "UNCOMPRESSED",
  ZIP: "ZIP",
} as const;

/**
 * @public
 */
export type CompressionFormat = (typeof CompressionFormat)[keyof typeof CompressionFormat];

/**
 * <p>Describes an encryption key for a destination in Amazon S3.</p>
 * @public
 */
export interface KMSEncryptionConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the encryption key. Must belong to the same Amazon Web Services Region as the destination Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  AWSKMSKeyARN: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NoEncryptionConfig = {
  NoEncryption: "NoEncryption",
} as const;

/**
 * @public
 */
export type NoEncryptionConfig = (typeof NoEncryptionConfig)[keyof typeof NoEncryptionConfig];

/**
 * <p>Describes the encryption for a destination in Amazon S3.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>Specifically override existing encryption information to ensure that no encryption is
   *          used.</p>
   * @public
   */
  NoEncryptionConfig?: NoEncryptionConfig | undefined;

  /**
   * <p>The encryption key.</p>
   * @public
   */
  KMSEncryptionConfig?: KMSEncryptionConfig | undefined;
}

/**
 * <p>Describes the configuration of a destination in Amazon S3.</p>
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A prefix that Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * <p>The buffering option. If no value is specified, <code>BufferingHints</code> object
   *          default values are used.</p>
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          for Amazon Redshift destinations because they are not supported by the Amazon Redshift
   *             <code>COPY</code> operation that reads from the S3 bucket.</p>
   * @public
   */
  CompressionFormat?: CompressionFormat | undefined;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
}

/**
 * <p>The details of the VPC of the Amazon OpenSearch or Amazon OpenSearch Serverless
 *          destination.</p>
 * @public
 */
export interface VpcConfiguration {
  /**
   * <p>The IDs of the subnets that you want Firehose to use to create ENIs in the
   *          VPC of the Amazon OpenSearch Service destination. Make sure that the routing tables and inbound and
   *          outbound rules allow traffic to flow from the subnets whose IDs are specified here to the
   *          subnets that have the destination Amazon OpenSearch Service endpoints. Firehose creates at
   *          least one ENI in each of the subnets that are specified here. Do not delete or modify these
   *          ENIs.</p>
   *          <p>The number of ENIs that Firehose creates in the subnets specified here
   *          scales up and down automatically based on throughput. To enable Firehose to
   *          scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To
   *          help you calculate the quota you need, assume that Firehose can create up to
   *          three ENIs for this Firehose stream for each of the subnets specified here. For more
   *          information about ENI quota, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-enis">Network Interfaces
   *          </a> in the Amazon VPC Quotas topic.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The ARN of the IAM role that you want the Firehose stream to use to create endpoints in
   *          the destination VPC. You can use your existing Firehose delivery role or you
   *          can specify a new role. In either case, make sure that the role trusts the Firehose service principal and that it grants the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeVpcs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeVpcAttribute</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeSubnets</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeSecurityGroups</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeNetworkInterfaces</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:CreateNetworkInterface</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:CreateNetworkInterfacePermission</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DeleteNetworkInterface</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>When you specify subnets for delivering data to the destination in a private VPC, make sure you have enough number of free IP addresses in chosen subnets. If there is no available free IP address in a specified subnet, Firehose cannot create or add ENIs for the data delivery in the private VPC, and the delivery will be degraded or fail.</p>
   *          </important>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The IDs of the security groups that you want Firehose to use when it
   *          creates ENIs in the VPC of the Amazon OpenSearch Service destination. You can use the same security group
   *          that the Amazon OpenSearch Service domain uses or different ones. If you specify different security groups
   *          here, ensure that they allow outbound HTTPS traffic to the Amazon OpenSearch Service domain's security
   *          group. Also ensure that the Amazon OpenSearch Service domain's security group allows HTTPS traffic from the
   *          security groups specified here. If you use the same security group for both your delivery
   *          stream and the Amazon OpenSearch Service domain, make sure the security group inbound rule allows HTTPS
   *          traffic. For more information about security group rules, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules">Security group
   *             rules</a> in the Amazon VPC documentation.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * <p>Describes the configuration of a destination in the Serverless offering for Amazon
 *          OpenSearch Service.</p>
 * @public
 */
export interface AmazonOpenSearchServerlessDestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose
   *          for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for
   *          indexing documents.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The endpoint to use when communicating with the collection in the Serverless offering
   *          for Amazon OpenSearch Service.</p>
   * @public
   */
  CollectionEndpoint?: string | undefined;

  /**
   * <p>The Serverless offering for Amazon OpenSearch Service index name.</p>
   * @public
   */
  IndexName: string | undefined;

  /**
   * <p>The buffering options. If no value is specified, the default values for
   *          AmazonopensearchserviceBufferingHints are used.</p>
   * @public
   */
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver documents to the
   *          Serverless offering for Amazon OpenSearch Service. The default value is 300 (5
   *          minutes).</p>
   * @public
   */
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions | undefined;

  /**
   * <p>Defines how documents should be delivered to Amazon S3. When it is set to
   *          FailedDocumentsOnly, Firehose writes any documents that could not be indexed
   *          to the configured Amazon S3 destination, with AmazonOpenSearchService-failed/ appended to
   *          the key prefix. When set to AllDocuments, Firehose delivers all incoming
   *          records to Amazon S3, and also writes failed documents with AmazonOpenSearchService-failed/
   *          appended to the prefix.</p>
   * @public
   */
  S3BackupMode?: AmazonOpenSearchServerlessS3BackupMode | undefined;

  /**
   * <p>Describes the configuration of a destination in Amazon S3.</p>
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The details of the VPC of the Amazon OpenSearch or Amazon OpenSearch Serverless
   *          destination.</p>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;
}

/**
 * <p>Describes a destination in Amazon S3.</p>
 * @public
 */
export interface S3DestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A prefix that Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * <p>The buffering option. If no value is specified, <code>BufferingHints</code> object
   *          default values are used.</p>
   * @public
   */
  BufferingHints: BufferingHints | undefined;

  /**
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   * @public
   */
  CompressionFormat: CompressionFormat | undefined;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   * @public
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
}

/**
 * <p>The details of the VPC of the Amazon OpenSearch Service destination.</p>
 * @public
 */
export interface VpcConfigurationDescription {
  /**
   * <p>The IDs of the subnets that Firehose uses to create ENIs in the VPC of the
   *          Amazon OpenSearch Service destination. Make sure that the routing tables and inbound and outbound rules
   *          allow traffic to flow from the subnets whose IDs are specified here to the subnets that
   *          have the destination Amazon OpenSearch Service endpoints. Firehose creates at least one ENI in
   *          each of the subnets that are specified here. Do not delete or modify these ENIs.</p>
   *          <p>The number of ENIs that Firehose creates in the subnets specified here
   *          scales up and down automatically based on throughput. To enable Firehose to
   *          scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To
   *          help you calculate the quota you need, assume that Firehose can create up to
   *          three ENIs for this Firehose stream for each of the subnets specified here. For more
   *          information about ENI quota, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-enis">Network Interfaces
   *          </a> in the Amazon VPC Quotas topic.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The ARN of the IAM role that the Firehose stream uses to create endpoints in the
   *          destination VPC. You can use your existing Firehose delivery role or you can
   *          specify a new role. In either case, make sure that the role trusts the Firehose service principal and that it grants the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeVpcs</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeVpcAttribute</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeSubnets</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeSecurityGroups</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DescribeNetworkInterfaces</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:CreateNetworkInterface</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:CreateNetworkInterfacePermission</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ec2:DeleteNetworkInterface</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you revoke these permissions after you create the Firehose stream, Firehose can't scale out by creating more ENIs when necessary. You might therefore see a
   *          degradation in performance.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The IDs of the security groups that Firehose uses when it creates ENIs in
   *          the VPC of the Amazon OpenSearch Service destination. You can use the same security group that the Amazon
   *          ES domain uses or different ones. If you specify different security groups, ensure that
   *          they allow outbound HTTPS traffic to the Amazon OpenSearch Service domain's security group. Also ensure
   *          that the Amazon OpenSearch Service domain's security group allows HTTPS traffic from the security groups
   *          specified here. If you use the same security group for both your Firehose stream and the
   *          Amazon OpenSearch Service domain, make sure the security group inbound rule allows HTTPS traffic. For more
   *          information about security group rules, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules">Security group
   *             rules</a> in the Amazon VPC documentation.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the Amazon OpenSearch Service destination's VPC.</p>
   * @public
   */
  VpcId: string | undefined;
}

/**
 * <p>The destination description in the Serverless offering for Amazon OpenSearch
 *          Service.</p>
 * @public
 */
export interface AmazonOpenSearchServerlessDestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The endpoint to use when communicating with the collection in the Serverless offering
   *          for Amazon OpenSearch Service.</p>
   * @public
   */
  CollectionEndpoint?: string | undefined;

  /**
   * <p>The Serverless offering for Amazon OpenSearch Service index name.</p>
   * @public
   */
  IndexName?: string | undefined;

  /**
   * <p>The buffering options.</p>
   * @public
   */
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints | undefined;

  /**
   * <p>The Serverless offering for Amazon OpenSearch Service retry options.</p>
   * @public
   */
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions | undefined;

  /**
   * <p>The Amazon S3 backup mode.</p>
   * @public
   */
  S3BackupMode?: AmazonOpenSearchServerlessS3BackupMode | undefined;

  /**
   * <p>Describes a destination in Amazon S3.</p>
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The details of the VPC of the Amazon OpenSearch Service destination.</p>
   * @public
   */
  VpcConfigurationDescription?: VpcConfigurationDescription | undefined;
}

/**
 * <p>Describes an update for a destination in Amazon S3.</p>
 * @public
 */
export interface S3DestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  BucketARN?: string | undefined;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A prefix that Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * <p>The buffering option. If no value is specified, <code>BufferingHints</code> object
   *          default values are used.</p>
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          for Amazon Redshift destinations because they are not supported by the Amazon Redshift
   *             <code>COPY</code> operation that reads from the S3 bucket.</p>
   * @public
   */
  CompressionFormat?: CompressionFormat | undefined;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
}

/**
 * <p>Describes an update for a destination in the Serverless offering for Amazon OpenSearch
 *          Service.</p>
 * @public
 */
export interface AmazonOpenSearchServerlessDestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose
   *          for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for
   *          indexing documents.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The endpoint to use when communicating with the collection in the Serverless offering
   *          for Amazon OpenSearch Service.</p>
   * @public
   */
  CollectionEndpoint?: string | undefined;

  /**
   * <p>The Serverless offering for Amazon OpenSearch Service index name.</p>
   * @public
   */
  IndexName?: string | undefined;

  /**
   * <p>The buffering options. If no value is specified, AmazonopensearchBufferingHints object
   *          default values are used.</p>
   * @public
   */
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver documents to the
   *          Serverless offering for Amazon OpenSearch Service. The default value is 300 (5
   *          minutes).</p>
   * @public
   */
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions | undefined;

  /**
   * <p>Describes an update for a destination in Amazon S3.</p>
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;
}

/**
 * <p>Describes the buffering to perform before delivering data to the Amazon OpenSearch
 *          Service destination. </p>
 * @public
 */
export interface AmazonopensearchserviceBufferingHints {
  /**
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering it
   *          to the destination. The default value is 300 (5 minutes). </p>
   * @public
   */
  IntervalInSeconds?: number | undefined;

  /**
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the
   *          destination. The default value is 5.</p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the Firehose stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MB/sec, the value should be 10 MB or higher. </p>
   * @public
   */
  SizeInMBs?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DefaultDocumentIdFormat = {
  FIREHOSE_DEFAULT: "FIREHOSE_DEFAULT",
  NO_DOCUMENT_ID: "NO_DOCUMENT_ID",
} as const;

/**
 * @public
 */
export type DefaultDocumentIdFormat = (typeof DefaultDocumentIdFormat)[keyof typeof DefaultDocumentIdFormat];

/**
 * <p>Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.</p>
 *          <p></p>
 * @public
 */
export interface DocumentIdOptions {
  /**
   * <p>When the <code>FIREHOSE_DEFAULT</code> option is chosen, Firehose generates
   *          a unique document ID for each record based on a unique internal identifier. The generated
   *          document ID is stable across multiple delivery attempts, which helps prevent the same
   *          record from being indexed multiple times with different document IDs.</p>
   *          <p>When the <code>NO_DOCUMENT_ID</code> option is chosen, Firehose does not
   *          include any document IDs in the requests it sends to the Amazon OpenSearch Service. This
   *          causes the Amazon OpenSearch Service domain to generate document IDs. In case of multiple
   *          delivery attempts, this may cause the same record to be indexed more than once with
   *          different document IDs. This option enables write-heavy operations, such as the ingestion
   *          of logs and observability data, to consume less resources in the Amazon OpenSearch Service
   *          domain, resulting in improved performance.</p>
   * @public
   */
  DefaultDocumentIdFormat: DefaultDocumentIdFormat | undefined;
}

/**
 * @public
 * @enum
 */
export const AmazonopensearchserviceIndexRotationPeriod = {
  NoRotation: "NoRotation",
  OneDay: "OneDay",
  OneHour: "OneHour",
  OneMonth: "OneMonth",
  OneWeek: "OneWeek",
} as const;

/**
 * @public
 */
export type AmazonopensearchserviceIndexRotationPeriod =
  (typeof AmazonopensearchserviceIndexRotationPeriod)[keyof typeof AmazonopensearchserviceIndexRotationPeriod];

/**
 * <p>Configures retry behavior in case Firehose is unable to deliver documents
 *          to Amazon OpenSearch Service. </p>
 * @public
 */
export interface AmazonopensearchserviceRetryOptions {
  /**
   * <p>After an initial failure to deliver to Amazon OpenSearch Service, the total amount of
   *          time during which Firehose retries delivery (including the first attempt).
   *          After this time has elapsed, the failed documents are written to Amazon S3. Default value
   *          is 300 seconds (5 minutes). A value of 0 (zero) results in no retries. </p>
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AmazonopensearchserviceS3BackupMode = {
  AllDocuments: "AllDocuments",
  FailedDocumentsOnly: "FailedDocumentsOnly",
} as const;

/**
 * @public
 */
export type AmazonopensearchserviceS3BackupMode =
  (typeof AmazonopensearchserviceS3BackupMode)[keyof typeof AmazonopensearchserviceS3BackupMode];

/**
 * <p>Describes the configuration of a destination in Amazon OpenSearch Service</p>
 * @public
 */
export interface AmazonopensearchserviceDestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose
   *          for calling the Amazon OpenSearch Service Configuration API and for indexing
   *          documents.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions for
   *          DescribeElasticsearchDomain, DescribeElasticsearchDomains, and
   *          DescribeElasticsearchDomainConfig after assuming the role specified in RoleARN. </p>
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * <p>The endpoint to use when communicating with the cluster. Specify either this
   *          ClusterEndpoint or the DomainARN field. </p>
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * <p>The ElasticsearAmazon OpenSearch Service index name.</p>
   * @public
   */
  IndexName: string | undefined;

  /**
   * <p>The Amazon OpenSearch Service type name. For Elasticsearch 6.x, there can be only one
   *          type per index. If you try to specify a new type for an existing index that already has
   *          another type, Firehose returns an error during run time. </p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The Amazon OpenSearch Service index rotation period. Index rotation appends a timestamp
   *          to the IndexName to facilitate the expiration of old data.</p>
   * @public
   */
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod | undefined;

  /**
   * <p>The buffering options. If no value is specified, the default values for
   *          AmazonopensearchserviceBufferingHints are used. </p>
   * @public
   */
  BufferingHints?: AmazonopensearchserviceBufferingHints | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver documents to
   *          Amazon OpenSearch Service. The default value is 300 (5 minutes). </p>
   * @public
   */
  RetryOptions?: AmazonopensearchserviceRetryOptions | undefined;

  /**
   * <p>Defines how documents should be delivered to Amazon S3. When it is set to
   *          FailedDocumentsOnly, Firehose writes any documents that could not be indexed
   *          to the configured Amazon S3 destination, with AmazonOpenSearchService-failed/ appended to
   *          the key prefix. When set to AllDocuments, Firehose delivers all incoming
   *          records to Amazon S3, and also writes failed documents with AmazonOpenSearchService-failed/
   *          appended to the prefix. </p>
   * @public
   */
  S3BackupMode?: AmazonopensearchserviceS3BackupMode | undefined;

  /**
   * <p>Describes the configuration of a destination in Amazon S3.</p>
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The details of the VPC of the Amazon OpenSearch or Amazon OpenSearch Serverless
   *          destination.</p>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.</p>
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * <p>The destination description in Amazon OpenSearch Service.</p>
 * @public
 */
export interface AmazonopensearchserviceDestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. </p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The ARN of the Amazon OpenSearch Service domain.</p>
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * <p>The endpoint to use when communicating with the cluster. Firehose uses
   *          either this ClusterEndpoint or the DomainARN field to send data to Amazon OpenSearch
   *          Service. </p>
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * <p>The Amazon OpenSearch Service index name.</p>
   * @public
   */
  IndexName?: string | undefined;

  /**
   * <p>The Amazon OpenSearch Service type name. This applies to Elasticsearch 6.x and lower
   *          versions. For Elasticsearch 7.x and OpenSearch Service 1.x, there's no value for TypeName. </p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The Amazon OpenSearch Service index rotation period</p>
   * @public
   */
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod | undefined;

  /**
   * <p>The buffering options.</p>
   * @public
   */
  BufferingHints?: AmazonopensearchserviceBufferingHints | undefined;

  /**
   * <p>The Amazon OpenSearch Service retry options.</p>
   * @public
   */
  RetryOptions?: AmazonopensearchserviceRetryOptions | undefined;

  /**
   * <p>The Amazon S3 backup mode.</p>
   * @public
   */
  S3BackupMode?: AmazonopensearchserviceS3BackupMode | undefined;

  /**
   * <p>Describes a destination in Amazon S3.</p>
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The details of the VPC of the Amazon OpenSearch Service destination.</p>
   * @public
   */
  VpcConfigurationDescription?: VpcConfigurationDescription | undefined;

  /**
   * <p>Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.</p>
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * <p>Describes an update for a destination in Amazon OpenSearch Service.</p>
 * @public
 */
export interface AmazonopensearchserviceDestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose
   *          for calling the Amazon OpenSearch Service Configuration API and for indexing documents.
   *       </p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions for
   *          DescribeDomain, DescribeDomains, and DescribeDomainConfig after assuming the IAM role
   *          specified in RoleARN.</p>
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * <p>The endpoint to use when communicating with the cluster. Specify either this
   *          ClusterEndpoint or the DomainARN field. </p>
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * <p>The Amazon OpenSearch Service index name.</p>
   * @public
   */
  IndexName?: string | undefined;

  /**
   * <p>The Amazon OpenSearch Service type name. For Elasticsearch 6.x, there can be only one
   *          type per index. If you try to specify a new type for an existing index that already has
   *          another type, Firehose returns an error during runtime. </p>
   *          <p>If you upgrade Elasticsearch from 6.x to 7.x and don’t update your Firehose stream,
   *          Firehose still delivers data to Elasticsearch with the old index name and type
   *          name. If you want to update your Firehose stream with a new index name, provide an empty
   *          string for TypeName. </p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The Amazon OpenSearch Service index rotation period. Index rotation appends a timestamp
   *          to IndexName to facilitate the expiration of old data.</p>
   * @public
   */
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod | undefined;

  /**
   * <p>The buffering options. If no value is specified, AmazonopensearchBufferingHints object
   *          default values are used. </p>
   * @public
   */
  BufferingHints?: AmazonopensearchserviceBufferingHints | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver documents to
   *          Amazon OpenSearch Service. The default value is 300 (5 minutes). </p>
   * @public
   */
  RetryOptions?: AmazonopensearchserviceRetryOptions | undefined;

  /**
   * <p>Describes an update for a destination in Amazon S3.</p>
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.</p>
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const Connectivity = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;

/**
 * @public
 */
export type Connectivity = (typeof Connectivity)[keyof typeof Connectivity];

/**
 * <p>The authentication configuration of the Amazon MSK cluster.</p>
 * @public
 */
export interface AuthenticationConfiguration {
  /**
   * <p>The ARN of the role used to access the Amazon MSK cluster.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The type of connectivity used to access the Amazon MSK cluster.</p>
   * @public
   */
  Connectivity: Connectivity | undefined;
}

/**
 * <p>
 *          Describes the containers where the destination Apache Iceberg Tables are persisted.
 *       </p>
 * @public
 */
export interface CatalogConfiguration {
  /**
   * <p>
   *          Specifies the Glue catalog ARN identifier of the destination Apache Iceberg Tables. You must specify the ARN in the format <code>arn:aws:glue:region:account-id:catalog</code>.
   *       </p>
   * @public
   */
  CatalogARN?: string | undefined;

  /**
   * <p>The warehouse location for Apache Iceberg tables. You must configure this when schema
   *          evolution and table creation is enabled.</p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  WarehouseLocation?: string | undefined;
}

/**
 * <p>Another modification has already happened. Fetch <code>VersionId</code> again and use
 *          it to update the destination.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ContentEncoding = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ContentEncoding = (typeof ContentEncoding)[keyof typeof ContentEncoding];

/**
 * <p>Describes a <code>COPY</code> command for Amazon Redshift.</p>
 * @public
 */
export interface CopyCommand {
  /**
   * <p>The name of the target table. The table must already exist in the database.</p>
   * @public
   */
  DataTableName: string | undefined;

  /**
   * <p>A comma-separated list of column names.</p>
   * @public
   */
  DataTableColumns?: string | undefined;

  /**
   * <p>Optional parameters to use with the Amazon Redshift <code>COPY</code> command. For
   *          more information, see the "Optional Parameters" section of <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html">Amazon Redshift COPY command</a>. Some possible
   *          examples that would apply to Firehose are as follows:</p>
   *          <p>
   *             <code>delimiter '\t' lzop;</code> - fields are delimited with "\t" (TAB character) and
   *          compressed using lzop.</p>
   *          <p>
   *             <code>delimiter '|'</code> - fields are delimited with "|" (this is the default
   *          delimiter).</p>
   *          <p>
   *             <code>delimiter '|' escape</code> - the delimiter should be escaped.</p>
   *          <p>
   *             <code>fixedwidth 'venueid:3,venuename:25,venuecity:12,venuestate:2,venueseats:6'</code> -
   *          fields are fixed width in the source, with each width specified after every column in the
   *          table.</p>
   *          <p>
   *             <code>JSON 's3://mybucket/jsonpaths.txt'</code> - data is in JSON format, and the path
   *          specified is the format of the data.</p>
   *          <p>For more examples, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_COPY_command_examples.html">Amazon Redshift COPY command
   *             examples</a>.</p>
   * @public
   */
  CopyOptions?: string | undefined;
}

/**
 * <p>The structure used to configure the list of column patterns in source database
 *          endpoint for Firehose to read from. </p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface DatabaseColumnList {
  /**
   * <p>
   *             The list of column patterns in source database to be included for Firehose to read from.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Include?: string[] | undefined;

  /**
   * <p>
   *             The list of column patterns in source database to be excluded for Firehose to read from.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Exclude?: string[] | undefined;
}

/**
 * <p>The structure used to configure the list of database patterns in source database
 *          endpoint for Firehose to read from. </p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface DatabaseList {
  /**
   * <p>The list of database patterns in source database endpoint to be included for Firehose
   *          to read from. </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Include?: string[] | undefined;

  /**
   * <p>The list of database patterns in source database endpoint to be excluded for Firehose
   *          to read from. </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Exclude?: string[] | undefined;
}

/**
 * <p>The structure that defines how Firehose accesses the secret.</p>
 * @public
 */
export interface SecretsManagerConfiguration {
  /**
   * <p>The ARN of the secret that stores your credentials. It must be in the same region as the
   *          Firehose stream and the role. The secret ARN can reside in a different account than the Firehose stream and role as Firehose supports cross-account secret access. This parameter is required when <b>Enabled</b> is set to <code>True</code>.</p>
   * @public
   */
  SecretARN?: string | undefined;

  /**
   * <p>
   *          Specifies the role that Firehose assumes when calling the Secrets Manager API operation. When you provide the role, it overrides any destination specific role defined in the destination configuration. If you do not provide the then we use the destination specific role. This parameter is required for Splunk.
   *       </p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>Specifies whether you want to use the secrets manager feature. When set as
   *             <code>True</code> the secrets manager configuration overwrites the existing secrets in
   *          the destination configuration. When it's set to <code>False</code> Firehose falls back to
   *          the credentials in the destination configuration.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>
 *             The structure to configure the authentication methods for Firehose to connect to source database endpoint.
 *          </p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface DatabaseSourceAuthenticationConfiguration {
  /**
   * <p>The structure that defines how Firehose accesses the secret.</p>
   * @public
   */
  SecretsManagerConfiguration: SecretsManagerConfiguration | undefined;
}

/**
 * <p>
 *             The structure for details of the VPC Endpoint Service which Firehose uses to create a PrivateLink to the database.
 *          </p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface DatabaseSourceVPCConfiguration {
  /**
   * <p>
   *             The VPC endpoint service name which Firehose uses to create a PrivateLink to the database. The endpoint service must have the Firehose service principle <code>firehose.amazonaws.com</code> as an allowed principal on the VPC endpoint service. The VPC endpoint service name is a string that looks like <code>com.amazonaws.vpce.<region>.<vpc-endpoint-service-id></code>.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  VpcEndpointServiceName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SSLMode = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type SSLMode = (typeof SSLMode)[keyof typeof SSLMode];

/**
 * <p>The structure used to configure the list of table patterns in source database endpoint
 *          for Firehose to read from. </p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface DatabaseTableList {
  /**
   * <p>The list of table patterns in source database endpoint to be included for Firehose to
   *          read from. </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Include?: string[] | undefined;

  /**
   * <p>The list of table patterns in source database endpoint to be excluded for Firehose to
   *          read from. </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Exclude?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DatabaseType = {
  MySQL: "MySQL",
  PostgreSQL: "PostgreSQL",
} as const;

/**
 * @public
 */
export type DatabaseType = (typeof DatabaseType)[keyof typeof DatabaseType];

/**
 * <p>
 *             The top level object for configuring streams with database as a source.
 *          </p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface DatabaseSourceConfiguration {
  /**
   * <p>The type of database engine. This can be one of the following values. </p>
   *          <ul>
   *             <li>
   *                <p>MySQL</p>
   *             </li>
   *             <li>
   *                <p>PostgreSQL</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Type: DatabaseType | undefined;

  /**
   * <p>
   *             The endpoint of the database server.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Endpoint: string | undefined;

  /**
   * <p>The port of the database. This can be one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>3306 for MySQL database type</p>
   *             </li>
   *             <li>
   *                <p>5432 for PostgreSQL database type</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Port: number | undefined;

  /**
   * <p>
   *             The mode to enable or disable SSL when Firehose connects to the database endpoint.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  SSLMode?: SSLMode | undefined;

  /**
   * <p>
   *             The list of database patterns in source database endpoint for Firehose to read from.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Databases: DatabaseList | undefined;

  /**
   * <p>
   *             The list of table patterns in source database endpoint for Firehose to read from.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Tables: DatabaseTableList | undefined;

  /**
   * <p>
   *             The list of column patterns in source database endpoint for Firehose to read from.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Columns?: DatabaseColumnList | undefined;

  /**
   * <p>
   *             The optional list of table and column names used as unique key columns when taking snapshot if the tables don’t have primary keys configured.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  SurrogateKeys?: string[] | undefined;

  /**
   * <p>
   *             The fully qualified name of the table in source database endpoint that Firehose uses to track snapshot progress.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  SnapshotWatermarkTable: string | undefined;

  /**
   * <p>
   *             The structure to configure the authentication methods for Firehose to connect to source database endpoint.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  DatabaseSourceAuthenticationConfiguration: DatabaseSourceAuthenticationConfiguration | undefined;

  /**
   * <p>
   *             The details of the VPC Endpoint Service which Firehose uses to create a PrivateLink to the database.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  DatabaseSourceVPCConfiguration: DatabaseSourceVPCConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const KeyType = {
  AWS_OWNED_CMK: "AWS_OWNED_CMK",
  CUSTOMER_MANAGED_CMK: "CUSTOMER_MANAGED_CMK",
} as const;

/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * <p>Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side
 *          Encryption (SSE). </p>
 * @public
 */
export interface DeliveryStreamEncryptionConfigurationInput {
  /**
   * <p>If you set <code>KeyType</code> to <code>CUSTOMER_MANAGED_CMK</code>, you must specify
   *          the Amazon Resource Name (ARN) of the CMK. If you set <code>KeyType</code> to <code>Amazon Web Services_OWNED_CMK</code>, Firehose uses a service-account CMK.</p>
   * @public
   */
  KeyARN?: string | undefined;

  /**
   * <p>Indicates the type of customer master key (CMK) to use for encryption. The default
   *          setting is <code>Amazon Web Services_OWNED_CMK</code>. For more information about CMKs, see
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">Customer Master Keys (CMKs)</a>. When you invoke <a>CreateDeliveryStream</a> or <a>StartDeliveryStreamEncryption</a> with
   *             <code>KeyType</code> set to CUSTOMER_MANAGED_CMK, Firehose invokes the
   *          Amazon KMS operation <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a> to create a grant
   *          that allows the Firehose service to use the customer managed CMK to perform
   *          encryption and decryption. Firehose manages that grant. </p>
   *          <p>When you invoke <a>StartDeliveryStreamEncryption</a> to change the CMK for a
   *          Firehose stream that is encrypted with a customer managed CMK, Firehose
   *          schedules the grant it had on the old CMK for retirement.</p>
   *          <p>You can use a CMK of type CUSTOMER_MANAGED_CMK to encrypt up to 500 Firehose streams. If
   *          a <a>CreateDeliveryStream</a> or <a>StartDeliveryStreamEncryption</a>
   *          operation exceeds this limit, Firehose throws a
   *             <code>LimitExceededException</code>. </p>
   *          <important>
   *             <p>To encrypt your Firehose stream, use symmetric CMKs. Firehose doesn't
   *             support asymmetric CMKs. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html">About
   *                Symmetric and Asymmetric CMKs</a> in the Amazon Web Services Key Management
   *             Service developer guide.</p>
   *          </important>
   * @public
   */
  KeyType: KeyType | undefined;
}

/**
 * @public
 * @enum
 */
export const DeliveryStreamType = {
  DatabaseAsSource: "DatabaseAsSource",
  DirectPut: "DirectPut",
  KinesisStreamAsSource: "KinesisStreamAsSource",
  MSKAsSource: "MSKAsSource",
} as const;

/**
 * @public
 */
export type DeliveryStreamType = (typeof DeliveryStreamType)[keyof typeof DeliveryStreamType];

/**
 * <p>The structure that configures parameters such as <code>ThroughputHintInMBs</code> for a stream configured with
 *          Direct PUT as a source. </p>
 * @public
 */
export interface DirectPutSourceConfiguration {
  /**
   * <p> The value that you configure for this parameter is for information purpose only and
   *          does not affect Firehose delivery throughput limit. You can use the <a href="https://support.console.aws.amazon.com/support/home#/case/create%3FissueType=service-limit-increase%26limitType=kinesis-firehose-limits">Firehose Limits form</a> to request a throughput limit increase. </p>
   * @public
   */
  ThroughputHintInMBs: number | undefined;
}

/**
 * <p>Describes the buffering to perform before delivering data to the Amazon OpenSearch Service
 *          destination.</p>
 * @public
 */
export interface ElasticsearchBufferingHints {
  /**
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering
   *          it to the destination. The default value is 300 (5 minutes).</p>
   * @public
   */
  IntervalInSeconds?: number | undefined;

  /**
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the
   *          destination. The default value is 5.</p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the Firehose stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MB/sec, the value should be 10 MB or higher.</p>
   * @public
   */
  SizeInMBs?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ElasticsearchIndexRotationPeriod = {
  NoRotation: "NoRotation",
  OneDay: "OneDay",
  OneHour: "OneHour",
  OneMonth: "OneMonth",
  OneWeek: "OneWeek",
} as const;

/**
 * @public
 */
export type ElasticsearchIndexRotationPeriod =
  (typeof ElasticsearchIndexRotationPeriod)[keyof typeof ElasticsearchIndexRotationPeriod];

/**
 * <p>Configures retry behavior in case Firehose is unable to deliver
 *          documents to Amazon OpenSearch Service.</p>
 * @public
 */
export interface ElasticsearchRetryOptions {
  /**
   * <p>After an initial failure to deliver to Amazon OpenSearch Service, the total amount of time during
   *          which Firehose retries delivery (including the first attempt). After this time
   *          has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5
   *          minutes). A value of 0 (zero) results in no retries.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ElasticsearchS3BackupMode = {
  AllDocuments: "AllDocuments",
  FailedDocumentsOnly: "FailedDocumentsOnly",
} as const;

/**
 * @public
 */
export type ElasticsearchS3BackupMode = (typeof ElasticsearchS3BackupMode)[keyof typeof ElasticsearchS3BackupMode];

/**
 * <p>Describes the configuration of a destination in Amazon OpenSearch Service.</p>
 * @public
 */
export interface ElasticsearchDestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose
   *          for calling the Amazon OpenSearch Service Configuration API and for indexing documents. For more
   *          information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Firehose Access to an Amazon S3 Destination</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions
   *             for <code>DescribeDomain</code>, <code>DescribeDomains</code>, and
   *             <code>DescribeDomainConfig</code> after assuming the role specified in <b>RoleARN</b>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   *          <p>Specify either <code>ClusterEndpoint</code> or <code>DomainARN</code>.</p>
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * <p>The endpoint to use when communicating with the cluster. Specify either this
   *             <code>ClusterEndpoint</code> or the <code>DomainARN</code> field.</p>
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * <p>The Elasticsearch index name.</p>
   * @public
   */
  IndexName: string | undefined;

  /**
   * <p>The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per
   *          index. If you try to specify a new type for an existing index that already has another
   *          type, Firehose returns an error during run time.</p>
   *          <p>For Elasticsearch 7.x, don't specify a <code>TypeName</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The Elasticsearch index rotation period. Index rotation appends a timestamp to the
   *             <code>IndexName</code> to facilitate the expiration of old data. For more information,
   *          see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation">Index Rotation for the
   *             Amazon OpenSearch Service Destination</a>. The default value is <code>OneDay</code>.</p>
   * @public
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | undefined;

  /**
   * <p>The buffering options. If no value is specified, the default values for
   *             <code>ElasticsearchBufferingHints</code> are used.</p>
   * @public
   */
  BufferingHints?: ElasticsearchBufferingHints | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver documents to
   *          Amazon OpenSearch Service. The default value is 300 (5 minutes).</p>
   * @public
   */
  RetryOptions?: ElasticsearchRetryOptions | undefined;

  /**
   * <p>Defines how documents should be delivered to Amazon S3. When it is set to
   *             <code>FailedDocumentsOnly</code>, Firehose writes any documents that could
   *          not be indexed to the configured Amazon S3 destination, with
   *             <code>AmazonOpenSearchService-failed/</code> appended to the key prefix. When set to
   *             <code>AllDocuments</code>, Firehose delivers all incoming records to Amazon
   *          S3, and also writes failed documents with <code>AmazonOpenSearchService-failed/</code>
   *          appended to the prefix. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-s3-backup">Amazon S3 Backup for the
   *             Amazon OpenSearch Service Destination</a>. Default value is
   *          <code>FailedDocumentsOnly</code>.</p>
   *          <p>You can't change this backup mode after you create the Firehose stream. </p>
   * @public
   */
  S3BackupMode?: ElasticsearchS3BackupMode | undefined;

  /**
   * <p>The configuration for the backup Amazon S3 location.</p>
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The details of the VPC of the Amazon destination.</p>
   * @public
   */
  VpcConfiguration?: VpcConfiguration | undefined;

  /**
   * <p>Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.</p>
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * <p>The native Hive / HCatalog JsonSerDe. Used by Firehose for deserializing
 *          data, which means converting it from the JSON format in preparation for serializing it to
 *          the Parquet or ORC format. This is one of two deserializers you can choose, depending on
 *          which one offers the functionality you need. The other option is the OpenX SerDe.</p>
 * @public
 */
export interface HiveJsonSerDe {
  /**
   * <p>Indicates how you want Firehose to parse the date and timestamps that
   *          may be present in your input data JSON. To specify these format strings, follow the pattern
   *          syntax of JodaTime's DateTimeFormat format strings. For more information, see <a href="https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html">Class DateTimeFormat</a>. You can also use the special value <code>millis</code> to
   *          parse timestamps in epoch milliseconds. If you don't specify a format, Firehose uses <code>java.sql.Timestamp::valueOf</code> by default.</p>
   * @public
   */
  TimestampFormats?: string[] | undefined;
}

/**
 * <p>The OpenX SerDe. Used by Firehose for deserializing data, which means
 *          converting it from the JSON format in preparation for serializing it to the Parquet or ORC
 *          format. This is one of two deserializers you can choose, depending on which one offers the
 *          functionality you need. The other option is the native Hive / HCatalog JsonSerDe.</p>
 * @public
 */
export interface OpenXJsonSerDe {
  /**
   * <p>When set to <code>true</code>, specifies that the names of the keys include dots and
   *          that you want Firehose to replace them with underscores. This is useful
   *          because Apache Hive does not allow dots in column names. For example, if the JSON contains
   *          a key whose name is "a.b", you can define the column name to be "a_b" when using this
   *          option.</p>
   *          <p>The default is <code>false</code>.</p>
   * @public
   */
  ConvertDotsInJsonKeysToUnderscores?: boolean | undefined;

  /**
   * <p>When set to <code>true</code>, which is the default, Firehose converts
   *          JSON keys to lowercase before deserializing them.</p>
   * @public
   */
  CaseInsensitive?: boolean | undefined;

  /**
   * <p>Maps column names to JSON keys that aren't identical to the column names. This is
   *          useful when the JSON contains keys that are Hive keywords. For example,
   *             <code>timestamp</code> is a Hive keyword. If you have a JSON key named
   *             <code>timestamp</code>, set this parameter to <code>\{"ts": "timestamp"\}</code> to map
   *          this key to a column named <code>ts</code>.</p>
   * @public
   */
  ColumnToJsonKeyMappings?: Record<string, string> | undefined;
}

/**
 * <p>The deserializer you want Firehose to use for converting the input data
 *          from JSON. Firehose then serializes the data to its final format using the
 *             <a>Serializer</a>. Firehose supports two types of deserializers:
 *          the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>.</p>
 * @public
 */
export interface Deserializer {
  /**
   * <p>The OpenX SerDe. Used by Firehose for deserializing data, which means
   *          converting it from the JSON format in preparation for serializing it to the Parquet or ORC
   *          format. This is one of two deserializers you can choose, depending on which one offers the
   *          functionality you need. The other option is the native Hive / HCatalog JsonSerDe.</p>
   * @public
   */
  OpenXJsonSerDe?: OpenXJsonSerDe | undefined;

  /**
   * <p>The native Hive / HCatalog JsonSerDe. Used by Firehose for deserializing
   *          data, which means converting it from the JSON format in preparation for serializing it to
   *          the Parquet or ORC format. This is one of two deserializers you can choose, depending on
   *          which one offers the functionality you need. The other option is the OpenX SerDe.</p>
   * @public
   */
  HiveJsonSerDe?: HiveJsonSerDe | undefined;
}

/**
 * <p>Specifies the deserializer you want to use to convert the format of the input data.
 *          This parameter is required if <code>Enabled</code> is set to true.</p>
 * @public
 */
export interface InputFormatConfiguration {
  /**
   * <p>Specifies which deserializer to use. You can choose either the Apache Hive JSON SerDe
   *          or the OpenX JSON SerDe. If both are non-null, the server rejects the request.</p>
   * @public
   */
  Deserializer?: Deserializer | undefined;
}

/**
 * @public
 * @enum
 */
export const OrcCompression = {
  NONE: "NONE",
  SNAPPY: "SNAPPY",
  ZLIB: "ZLIB",
} as const;

/**
 * @public
 */
export type OrcCompression = (typeof OrcCompression)[keyof typeof OrcCompression];

/**
 * @public
 * @enum
 */
export const OrcFormatVersion = {
  V0_11: "V0_11",
  V0_12: "V0_12",
} as const;

/**
 * @public
 */
export type OrcFormatVersion = (typeof OrcFormatVersion)[keyof typeof OrcFormatVersion];

/**
 * <p>A serializer to use for converting data to the ORC format before storing it in Amazon
 *          S3. For more information, see <a href="https://orc.apache.org/docs/">Apache
 *          ORC</a>.</p>
 * @public
 */
export interface OrcSerDe {
  /**
   * <p>The number of bytes in each stripe. The default is 64 MiB and the minimum is 8
   *          MiB.</p>
   * @public
   */
  StripeSizeBytes?: number | undefined;

  /**
   * <p>The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to
   *          copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the
   *          minimum is 64 MiB. Firehose uses this value for padding calculations.</p>
   * @public
   */
  BlockSizeBytes?: number | undefined;

  /**
   * <p>The number of rows between index entries. The default is 10,000 and the minimum is
   *          1,000.</p>
   * @public
   */
  RowIndexStride?: number | undefined;

  /**
   * <p>Set this to <code>true</code> to indicate that you want stripes to be padded to the HDFS
   *          block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS
   *          before querying. The default is <code>false</code>.</p>
   * @public
   */
  EnablePadding?: boolean | undefined;

  /**
   * <p>A number between 0 and 1 that defines the tolerance for block padding as a decimal
   *          fraction of stripe size. The default value is 0.05, which means 5 percent of stripe
   *          size.</p>
   *          <p>For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block
   *          padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB
   *          block. In such a case, if the available size within the block is more than 3.2 MiB, a new,
   *          smaller stripe is inserted to fit within that space. This ensures that no stripe crosses
   *          block boundaries and causes remote reads within a node-local task.</p>
   *          <p>Firehose ignores this parameter when <a>OrcSerDe$EnablePadding</a> is <code>false</code>.</p>
   * @public
   */
  PaddingTolerance?: number | undefined;

  /**
   * <p>The compression code to use over data blocks. The default is <code>SNAPPY</code>.</p>
   * @public
   */
  Compression?: OrcCompression | undefined;

  /**
   * <p>The column names for which you want Firehose to create bloom filters. The
   *          default is <code>null</code>.</p>
   * @public
   */
  BloomFilterColumns?: string[] | undefined;

  /**
   * <p>The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the
   *          Bloom filter. The default value is 0.05, the minimum is 0, and the maximum is 1.</p>
   * @public
   */
  BloomFilterFalsePositiveProbability?: number | undefined;

  /**
   * <p>Represents the fraction of the total number of non-null rows. To turn off dictionary
   *          encoding, set this fraction to a number that is less than the number of distinct keys in a
   *          dictionary. To always use dictionary encoding, set this threshold to 1.</p>
   * @public
   */
  DictionaryKeyThreshold?: number | undefined;

  /**
   * <p>The version of the file to write. The possible values are <code>V0_11</code> and
   *             <code>V0_12</code>. The default is <code>V0_12</code>.</p>
   * @public
   */
  FormatVersion?: OrcFormatVersion | undefined;
}

/**
 * @public
 * @enum
 */
export const ParquetCompression = {
  GZIP: "GZIP",
  SNAPPY: "SNAPPY",
  UNCOMPRESSED: "UNCOMPRESSED",
} as const;

/**
 * @public
 */
export type ParquetCompression = (typeof ParquetCompression)[keyof typeof ParquetCompression];

/**
 * @public
 * @enum
 */
export const ParquetWriterVersion = {
  V1: "V1",
  V2: "V2",
} as const;

/**
 * @public
 */
export type ParquetWriterVersion = (typeof ParquetWriterVersion)[keyof typeof ParquetWriterVersion];

/**
 * <p>A serializer to use for converting data to the Parquet format before storing it in
 *          Amazon S3. For more information, see <a href="https://parquet.apache.org/docs/">Apache Parquet</a>.</p>
 * @public
 */
export interface ParquetSerDe {
  /**
   * <p>The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to
   *          copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the
   *          minimum is 64 MiB. Firehose uses this value for padding calculations.</p>
   * @public
   */
  BlockSizeBytes?: number | undefined;

  /**
   * <p>The Parquet page size. Column chunks are divided into pages. A page is conceptually an
   *          indivisible unit (in terms of compression and encoding). The minimum value is 64 KiB and
   *          the default is 1 MiB.</p>
   * @public
   */
  PageSizeBytes?: number | undefined;

  /**
   * <p>The compression code to use over data blocks. The possible values are
   *             <code>UNCOMPRESSED</code>, <code>SNAPPY</code>, and <code>GZIP</code>, with the default
   *          being <code>SNAPPY</code>. Use <code>SNAPPY</code> for higher decompression speed. Use
   *             <code>GZIP</code> if the compression ratio is more important than speed.</p>
   * @public
   */
  Compression?: ParquetCompression | undefined;

  /**
   * <p>Indicates whether to enable dictionary compression.</p>
   * @public
   */
  EnableDictionaryCompression?: boolean | undefined;

  /**
   * <p>The maximum amount of padding to apply. This is useful if you intend to copy the data
   *          from Amazon S3 to HDFS before querying. The default is 0.</p>
   * @public
   */
  MaxPaddingBytes?: number | undefined;

  /**
   * <p>Indicates the version of row format to output. The possible values are <code>V1</code>
   *          and <code>V2</code>. The default is <code>V1</code>.</p>
   * @public
   */
  WriterVersion?: ParquetWriterVersion | undefined;
}

/**
 * <p>The serializer that you want Firehose to use to convert data to the target
 *          format before writing it to Amazon S3. Firehose supports two types of
 *          serializers: the ORC SerDe and the Parquet SerDe.</p>
 * @public
 */
export interface Serializer {
  /**
   * <p>A serializer to use for converting data to the Parquet format before storing it in
   *          Amazon S3. For more information, see <a href="https://parquet.apache.org/docs/contribution-guidelines/">Apache Parquet</a>.</p>
   * @public
   */
  ParquetSerDe?: ParquetSerDe | undefined;

  /**
   * <p>A serializer to use for converting data to the ORC format before storing it in Amazon
   *          S3. For more information, see <a href="https://orc.apache.org/docs/">Apache
   *          ORC</a>.</p>
   * @public
   */
  OrcSerDe?: OrcSerDe | undefined;
}

/**
 * <p>Specifies the serializer that you want Firehose to use to convert the
 *          format of your data before it writes it to Amazon S3. This parameter is required if
 *             <code>Enabled</code> is set to true.</p>
 * @public
 */
export interface OutputFormatConfiguration {
  /**
   * <p>Specifies which serializer to use. You can choose either the ORC SerDe or the Parquet
   *          SerDe. If both are non-null, the server rejects the request.</p>
   * @public
   */
  Serializer?: Serializer | undefined;
}

/**
 * <p>Specifies the schema to which you want Firehose to configure your data
 *          before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set
 *          to true.</p>
 * @public
 */
export interface SchemaConfiguration {
  /**
   * <p>The role that Firehose can use to access Amazon Web Services Glue. This
   *          role must be in the same account you use for Firehose. Cross-account roles
   *          aren't allowed.</p>
   *          <important>
   *             <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking
   *             the <code>CreateDeliveryStream</code> API, then the <code>RoleARN</code> property is
   *             required and its value must be specified.</p>
   *          </important>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services Glue Data Catalog. If you don't supply this, the
   *             Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>Specifies the name of the Amazon Web Services Glue database that contains the schema for
   *          the output data.</p>
   *          <important>
   *             <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking
   *             the <code>CreateDeliveryStream</code> API, then the <code>DatabaseName</code> property
   *             is required and its value must be specified.</p>
   *          </important>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Specifies the Amazon Web Services Glue table that contains the column information that
   *          constitutes your data schema.</p>
   *          <important>
   *             <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking
   *             the <code>CreateDeliveryStream</code> API, then the <code>TableName</code> property is
   *             required and its value must be specified.</p>
   *          </important>
   * @public
   */
  TableName?: string | undefined;

  /**
   * <p>If you don't specify an Amazon Web Services Region, the default is the current
   *          Region.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>Specifies the table version for the output data schema. If you don't specify this
   *          version ID, or if you set it to <code>LATEST</code>, Firehose uses the most
   *          recent version. This means that any updates to the table are automatically picked
   *          up.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * <p>Specifies that you want Firehose to convert data from the JSON format to
 *          the Parquet or ORC format before writing it to Amazon S3. Firehose uses the
 *          serializer and deserializer that you specify, in addition to the column information from
 *          the Amazon Web Services Glue table, to deserialize your input data from JSON and then
 *          serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Firehose Record Format Conversion</a>.</p>
 * @public
 */
export interface DataFormatConversionConfiguration {
  /**
   * <p>Specifies the Amazon Web Services Glue Data Catalog table that contains the column
   *          information. This parameter is required if <code>Enabled</code> is set to true.</p>
   * @public
   */
  SchemaConfiguration?: SchemaConfiguration | undefined;

  /**
   * <p>Specifies the deserializer that you want Firehose to use to convert the
   *          format of your data from JSON. This parameter is required if <code>Enabled</code> is set to
   *          true.</p>
   * @public
   */
  InputFormatConfiguration?: InputFormatConfiguration | undefined;

  /**
   * <p>Specifies the serializer that you want Firehose to use to convert the
   *          format of your data to the Parquet or ORC format. This parameter is required if
   *             <code>Enabled</code> is set to true.</p>
   * @public
   */
  OutputFormatConfiguration?: OutputFormatConfiguration | undefined;

  /**
   * <p>Defaults to <code>true</code>. Set it to <code>false</code> if you want to disable
   *          format conversion while preserving the configuration details.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p> The retry behavior in case Firehose is unable to deliver data to a destination.</p>
 * @public
 */
export interface RetryOptions {
  /**
   * <p>The period of time during which Firehose retries to deliver data to the
   *          specified destination.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
 *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
 *          partitioning is only supported for Amazon S3 destinations.
 *          </p>
 * @public
 */
export interface DynamicPartitioningConfiguration {
  /**
   * <p>The retry behavior in case Firehose is unable to deliver data to an Amazon
   *          S3 prefix.</p>
   * @public
   */
  RetryOptions?: RetryOptions | undefined;

  /**
   * <p>Specifies that the dynamic partitioning is enabled for this Firehose stream.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const S3BackupMode = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type S3BackupMode = (typeof S3BackupMode)[keyof typeof S3BackupMode];

/**
 * <p>Describes the configuration of a destination in Amazon S3.</p>
 * @public
 */
export interface ExtendedS3DestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A prefix that Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * <p>The buffering option.</p>
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * <p>The compression format. If no value is specified, the default is
   *          UNCOMPRESSED.</p>
   * @public
   */
  CompressionFormat?: CompressionFormat | undefined;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon S3 backup mode. After you create a Firehose stream, you can update it to
   *          enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the
   *          Firehose stream to disable it. </p>
   * @public
   */
  S3BackupMode?: S3BackupMode | undefined;

  /**
   * <p>The configuration for backup in Amazon S3.</p>
   * @public
   */
  S3BackupConfiguration?: S3DestinationConfiguration | undefined;

  /**
   * <p>The serializer, deserializer, and schema for converting data from the JSON format to
   *          the Parquet or ORC format before writing it to Amazon S3.</p>
   * @public
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration | undefined;

  /**
   * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
   *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
   *          partitioning is only supported for Amazon S3 destinations.
   *          </p>
   * @public
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration | undefined;

  /**
   * <p>Specify a file extension. It will override the default file extension</p>
   * @public
   */
  FileExtension?: string | undefined;

  /**
   * <p>The time zone you prefer. UTC is the default.</p>
   * @public
   */
  CustomTimeZone?: string | undefined;
}

/**
 * <p>Describes the buffering options that can be applied before data is delivered to the HTTP
 *          endpoint destination. Firehose treats these options as hints, and it might
 *          choose to use more optimal values. The <code>SizeInMBs</code> and
 *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
 *          one of them, you must also provide a value for the other. </p>
 * @public
 */
export interface HttpEndpointBufferingHints {
  /**
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the
   *          destination. The default value is 5. </p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the Firehose stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MB/sec, the value should be 10 MB or higher. </p>
   * @public
   */
  SizeInMBs?: number | undefined;

  /**
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering it
   *          to the destination. The default value is 300 (5 minutes). </p>
   * @public
   */
  IntervalInSeconds?: number | undefined;
}

/**
 * <p>Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers
 *          data.</p>
 * @public
 */
export interface HttpEndpointConfiguration {
  /**
   * <p>The URL of the HTTP endpoint selected as the destination.</p>
   *          <important>
   *             <p>If you choose an HTTP endpoint as your destination, review and follow the
   *             instructions in the <a href="https://docs.aws.amazon.com/firehose/latest/dev/httpdeliveryrequestresponse.html">Appendix - HTTP Endpoint
   *                Delivery Request and Response Specifications</a>.</p>
   *          </important>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>The name of the HTTP endpoint selected as the destination.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The access key required for Kinesis Firehose to authenticate with the HTTP endpoint
   *          selected as the destination.</p>
   * @public
   */
  AccessKey?: string | undefined;
}

/**
 * <p>Describes the metadata that's delivered to the specified HTTP endpoint
 *          destination.</p>
 * @public
 */
export interface HttpEndpointCommonAttribute {
  /**
   * <p>The name of the HTTP endpoint common attribute.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The value of the HTTP endpoint common attribute.</p>
   * @public
   */
  AttributeValue: string | undefined;
}

/**
 * <p>The configuration of the HTTP endpoint request.</p>
 * @public
 */
export interface HttpEndpointRequestConfiguration {
  /**
   * <p>Firehose uses the content encoding to compress the body of a request before
   *          sending the request to the destination. For more information, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding">Content-Encoding</a> in MDN Web Docs, the official Mozilla documentation.</p>
   * @public
   */
  ContentEncoding?: ContentEncoding | undefined;

  /**
   * <p>Describes the metadata sent to the HTTP endpoint destination.</p>
   * @public
   */
  CommonAttributes?: HttpEndpointCommonAttribute[] | undefined;
}

/**
 * <p>Describes the retry behavior in case Firehose is unable to deliver data to
 *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
 *          receipt from the specified HTTP endpoint destination.</p>
 * @public
 */
export interface HttpEndpointRetryOptions {
  /**
   * <p>The total amount of time that Firehose spends on retries. This duration
   *          starts after the initial attempt to send data to the custom destination via HTTPS endpoint
   *          fails. It doesn't include the periods during which Firehose waits for
   *          acknowledgment from the specified destination after each attempt. </p>
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const HttpEndpointS3BackupMode = {
  AllData: "AllData",
  FailedDataOnly: "FailedDataOnly",
} as const;

/**
 * @public
 */
export type HttpEndpointS3BackupMode = (typeof HttpEndpointS3BackupMode)[keyof typeof HttpEndpointS3BackupMode];

/**
 * <p>Describes the configuration of the HTTP endpoint destination.</p>
 * @public
 */
export interface HttpEndpointDestinationConfiguration {
  /**
   * <p>The configuration of the HTTP endpoint selected as the destination.</p>
   * @public
   */
  EndpointConfiguration: HttpEndpointConfiguration | undefined;

  /**
   * <p>The buffering options that can be used before data is delivered to the specified
   *          destination. Firehose treats these options as hints, and it might choose to
   *          use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code>
   *          parameters are optional. However, if you specify a value for one of them, you must also
   *          provide a value for the other. </p>
   * @public
   */
  BufferingHints?: HttpEndpointBufferingHints | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The configuration of the request sent to the HTTP endpoint that is specified as the
   *          destination.</p>
   * @public
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>Firehose uses this IAM role for all the permissions that the delivery
   *          stream needs.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>Describes the retry behavior in case Firehose is unable to deliver data to
   *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
   *          receipt from the specified HTTP endpoint destination.</p>
   * @public
   */
  RetryOptions?: HttpEndpointRetryOptions | undefined;

  /**
   * <p>Describes the S3 bucket backup options for the data that Firehose delivers
   *          to the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or
   *          only the documents that Firehose could not deliver to the specified HTTP
   *          endpoint destination (<code>FailedDataOnly</code>).</p>
   * @public
   */
  S3BackupMode?: HttpEndpointS3BackupMode | undefined;

  /**
   * <p>Describes the configuration of a destination in Amazon S3.</p>
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * <p>
   *        The configuration that defines how you access secrets for HTTP Endpoint destination.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * <p>Represents a single field in a <code>PartitionSpec</code>. </p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface PartitionField {
  /**
   * <p>
   *          The column name to be configured in partition spec.
   *       </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  SourceName: string | undefined;
}

/**
 * <p>Represents how to produce partition data for a table. Partition data is produced by
 *          transforming columns in a table. Each column transform is represented by a named
 *             <code>PartitionField</code>. </p>
 *          <p>Here is an example of the schema in JSON. </p>
 *          <p>
 *             <code>"partitionSpec": \{ "identity": [ \{"sourceName": "column1"\}, \{"sourceName":
 *             "column2"\}, \{"sourceName": "column3"\} ] \}</code>
 *          </p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface PartitionSpec {
  /**
   * <p> List of identity <a href="https://iceberg.apache.org/spec/#partition-transforms">transforms</a> that performs an identity transformation. The transform takes the
   *          source value, and does not modify it. Result type is the source type.</p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Identity?: PartitionField[] | undefined;
}

/**
 * <p>
 *          Describes the configuration of a destination in Apache Iceberg Tables.
 *       </p>
 * @public
 */
export interface DestinationTableConfiguration {
  /**
   * <p>
   *         Specifies the name of the Apache Iceberg Table.
   *       </p>
   * @public
   */
  DestinationTableName: string | undefined;

  /**
   * <p>
   *          The name of the Apache Iceberg database.
   *       </p>
   * @public
   */
  DestinationDatabaseName: string | undefined;

  /**
   * <p>
   *          A list of unique keys for a given Apache Iceberg table. Firehose will use these for running Create, Update, or Delete operations on the given Iceberg table.
   *
   *       </p>
   * @public
   */
  UniqueKeys?: string[] | undefined;

  /**
   * <p>The partition spec configuration for a table that is used by automatic table
   *          creation.</p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  PartitionSpec?: PartitionSpec | undefined;

  /**
   * <p>
   *         The table specific S3 error output prefix. All the errors that occurred while delivering to this table will be prefixed with this value in S3 destination.
   *        </p>
   * @public
   */
  S3ErrorOutputPrefix?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IcebergS3BackupMode = {
  AllData: "AllData",
  FailedDataOnly: "FailedDataOnly",
} as const;

/**
 * @public
 */
export type IcebergS3BackupMode = (typeof IcebergS3BackupMode)[keyof typeof IcebergS3BackupMode];

/**
 * <p>The configuration to enable schema evolution.</p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface SchemaEvolutionConfiguration {
  /**
   * <p>
   *          Specify whether you want to enable schema evolution.
   *       </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The configuration to enable automatic table creation.</p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface TableCreationConfiguration {
  /**
   * <p>
   *          Specify whether you want to enable automatic table creation.
   *       </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>
 *          Specifies the destination configure settings for  Apache Iceberg Table.
 *       </p>
 * @public
 */
export interface IcebergDestinationConfiguration {
  /**
   * <p> Provides a list of <code>DestinationTableConfigurations</code> which Firehose uses
   *          to deliver data to Apache Iceberg Tables. Firehose will write data with insert if table specific configuration is not provided here.</p>
   * @public
   */
  DestinationTableConfigurationList?: DestinationTableConfiguration[] | undefined;

  /**
   * <p>The configuration to enable automatic schema evolution.</p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  SchemaEvolutionConfiguration?: SchemaEvolutionConfiguration | undefined;

  /**
   * <p>The configuration to enable automatic table creation.</p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  TableCreationConfiguration?: TableCreationConfiguration | undefined;

  /**
   * <p>Describes hints for the buffering to perform before delivering data to the
   *          destination. These options are treated as hints, and therefore Firehose might
   *          choose to use different values when it is optimal. The <code>SizeInMBs</code> and
   *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
   *          one of them, you must also provide a value for the other.</p>
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p> Describes how Firehose will backup records. Currently,S3 backup only supports
   *             <code>FailedDataOnly</code>. </p>
   * @public
   */
  S3BackupMode?: IcebergS3BackupMode | undefined;

  /**
   * <p> The retry behavior in case Firehose is unable to deliver data to a destination.</p>
   * @public
   */
  RetryOptions?: RetryOptions | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling Apache Iceberg Tables.
   *       </p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p> Describes whether all incoming data for this delivery stream will be append only
   *          (inserts only and not for updates and deletes) for Iceberg delivery. This feature is only
   *          applicable for Apache Iceberg Tables.</p>
   *          <p>The default value is false. If you set this value to true, Firehose automatically
   *          increases the throughput limit of a stream based on the throttling levels of the stream. If
   *          you set this parameter to true for a stream with updates and deletes, you will see out of
   *          order delivery. </p>
   * @public
   */
  AppendOnly?: boolean | undefined;

  /**
   * <p>
   *          Configuration describing where the destination Apache Iceberg Tables are persisted.
   *       </p>
   * @public
   */
  CatalogConfiguration: CatalogConfiguration | undefined;

  /**
   * <p>Describes the configuration of a destination in Amazon S3.</p>
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;
}

/**
 * <p>The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as
 *          the source for a Firehose stream.</p>
 * @public
 */
export interface KinesisStreamSourceConfiguration {
  /**
   * <p>The ARN of the source Kinesis data stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon
   *             Kinesis Data Streams ARN Format</a>.</p>
   * @public
   */
  KinesisStreamARN: string | undefined;

  /**
   * <p>The ARN of the role that provides access to the source Kinesis data stream. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services
   *             Identity and Access Management (IAM) ARN Format</a>.</p>
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * <p>The configuration for the Amazon MSK cluster to be used as the source for a delivery
 *          stream.</p>
 * @public
 */
export interface MSKSourceConfiguration {
  /**
   * <p>The ARN of the Amazon MSK cluster.</p>
   * @public
   */
  MSKClusterARN: string | undefined;

  /**
   * <p>The topic name within the Amazon MSK cluster. </p>
   * @public
   */
  TopicName: string | undefined;

  /**
   * <p>The authentication configuration of the Amazon MSK cluster.</p>
   * @public
   */
  AuthenticationConfiguration: AuthenticationConfiguration | undefined;

  /**
   * <p>The start date and time in UTC for the offset position within your MSK topic from where
   *          Firehose begins to read. By default, this is set to timestamp when Firehose becomes Active. </p>
   *          <p>If you want to create a Firehose stream with Earliest start position from SDK or CLI,
   *          you need to set the <code>ReadFromTimestamp</code> parameter to Epoch
   *          (1970-01-01T00:00:00Z). </p>
   * @public
   */
  ReadFromTimestamp?: Date | undefined;
}

/**
 * <p>Configures retry behavior in case Firehose is unable to deliver
 *          documents to Amazon Redshift.</p>
 * @public
 */
export interface RedshiftRetryOptions {
  /**
   * <p>The length of time during which Firehose retries delivery after a
   *          failure, starting from the initial request and including the first attempt. The default
   *          value is 3600 seconds (60 minutes). Firehose does not retry if the value of
   *             <code>DurationInSeconds</code> is 0 (zero) or if the first delivery attempt takes longer
   *          than the current value.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RedshiftS3BackupMode = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type RedshiftS3BackupMode = (typeof RedshiftS3BackupMode)[keyof typeof RedshiftS3BackupMode];

/**
 * <p>Describes the configuration of a destination in Amazon Redshift.</p>
 * @public
 */
export interface RedshiftDestinationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The database connection string.</p>
   * @public
   */
  ClusterJDBCURL: string | undefined;

  /**
   * <p>The <code>COPY</code> command.</p>
   * @public
   */
  CopyCommand: CopyCommand | undefined;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The user password.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver documents to
   *          Amazon Redshift. Default value is 3600 (60 minutes).</p>
   * @public
   */
  RetryOptions?: RedshiftRetryOptions | undefined;

  /**
   * <p>The configuration for the intermediate Amazon S3 location from which Amazon Redshift
   *          obtains data. Restrictions are described in the topic for <a>CreateDeliveryStream</a>.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon
   *          Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these
   *          compression formats.</p>
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon S3 backup mode. After you create a Firehose stream, you can update it to
   *          enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the
   *          Firehose stream to disable it. </p>
   * @public
   */
  S3BackupMode?: RedshiftS3BackupMode | undefined;

  /**
   * <p>The configuration for backup in Amazon S3.</p>
   * @public
   */
  S3BackupConfiguration?: S3DestinationConfiguration | undefined;

  /**
   * <p>The CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>
   *          The configuration that defines how you access secrets for Amazon Redshift.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * <p>
 *          Describes the buffering to perform before delivering data to the Snowflake destination. If you do not specify any value, Firehose uses the default values.
 *       </p>
 * @public
 */
export interface SnowflakeBufferingHints {
  /**
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the
   *          destination. The default value is 128. </p>
   * @public
   */
  SizeInMBs?: number | undefined;

  /**
   * <p>
   *          Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 0.
   *       </p>
   * @public
   */
  IntervalInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const SnowflakeDataLoadingOption = {
  JSON_MAPPING: "JSON_MAPPING",
  VARIANT_CONTENT_AND_METADATA_MAPPING: "VARIANT_CONTENT_AND_METADATA_MAPPING",
  VARIANT_CONTENT_MAPPING: "VARIANT_CONTENT_MAPPING",
} as const;

/**
 * @public
 */
export type SnowflakeDataLoadingOption = (typeof SnowflakeDataLoadingOption)[keyof typeof SnowflakeDataLoadingOption];

/**
 * <p>Specify how long Firehose retries sending data to the New Relic HTTP endpoint.
 *
 *          After sending data, Firehose first waits for an acknowledgment from the HTTP endpoint. If an error occurs or the acknowledgment doesn’t arrive within the acknowledgment timeout period, Firehose starts the retry duration counter. It keeps retrying until the retry duration expires. After that, Firehose considers it a data delivery failure and backs up the data to your Amazon S3 bucket.
 *
 *          Every time that Firehose sends data to the HTTP endpoint (either the initial attempt or a retry), it restarts the acknowledgement timeout counter and waits for an acknowledgement from the HTTP endpoint.
 *
 *          Even if the retry duration expires, Firehose still waits for the acknowledgment until it receives it or the acknowledgement timeout period is reached. If the acknowledgment times out, Firehose determines whether there's time left in the retry counter. If there is time left, it retries again and repeats the logic until it receives an acknowledgment or determines that the retry time has expired.
 *
 *          If you don't want Firehose to retry sending data, set this value to 0.</p>
 * @public
 */
export interface SnowflakeRetryOptions {
  /**
   * <p>the time period where Firehose will retry sending data to the chosen HTTP endpoint.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const SnowflakeS3BackupMode = {
  AllData: "AllData",
  FailedDataOnly: "FailedDataOnly",
} as const;

/**
 * @public
 */
export type SnowflakeS3BackupMode = (typeof SnowflakeS3BackupMode)[keyof typeof SnowflakeS3BackupMode];

/**
 * <p>Optionally configure a Snowflake role. Otherwise the default user role will be used.</p>
 * @public
 */
export interface SnowflakeRoleConfiguration {
  /**
   * <p>Enable Snowflake role</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The Snowflake role you wish to configure</p>
   * @public
   */
  SnowflakeRole?: string | undefined;
}

/**
 * <p>Configure a Snowflake VPC</p>
 * @public
 */
export interface SnowflakeVpcConfiguration {
  /**
   * <p>The VPCE ID for Firehose to privately connect with Snowflake. The ID format is
   *          com.amazonaws.vpce.[region].vpce-svc-<[id]>. For more information, see <a href="https://docs.snowflake.com/en/user-guide/admin-security-privatelink">Amazon PrivateLink & Snowflake</a>
   *          </p>
   * @public
   */
  PrivateLinkVpceId: string | undefined;
}

/**
 * <p>Configure Snowflake destination</p>
 * @public
 */
export interface SnowflakeDestinationConfiguration {
  /**
   * <p>URL for accessing your Snowflake account. This URL must include your <a href="https://docs.snowflake.com/en/user-guide/admin-account-identifier">account identifier</a>.
   *          Note that the protocol (https://) and port number are optional.</p>
   * @public
   */
  AccountUrl: string | undefined;

  /**
   * <p>The private key used to encrypt your Snowflake client. For information, see <a href="https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation">Using Key Pair Authentication & Key Rotation</a>.</p>
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * <p>Passphrase to decrypt the private key when the key is encrypted. For information, see <a href="https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation">Using Key Pair Authentication & Key Rotation</a>.</p>
   * @public
   */
  KeyPassphrase?: string | undefined;

  /**
   * <p>User login name for the Snowflake account.</p>
   * @public
   */
  User?: string | undefined;

  /**
   * <p>All data in Snowflake is maintained in databases.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>Each database consists of one or more schemas, which are logical groupings of database objects, such as tables and views</p>
   * @public
   */
  Schema: string | undefined;

  /**
   * <p>All data in Snowflake is stored in database tables, logically structured as collections of columns and rows.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>Optionally configure a Snowflake role. Otherwise the default user role will be used.</p>
   * @public
   */
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration | undefined;

  /**
   * <p>Choose to load JSON keys mapped to table column names or choose to split the JSON payload where content is mapped to a record content column and source metadata is mapped to a record metadata column.</p>
   * @public
   */
  DataLoadingOption?: SnowflakeDataLoadingOption | undefined;

  /**
   * <p>Specify a column name in the table, where the metadata information has to be loaded.
   *          When you enable this field, you will see the following column in the snowflake table, which
   *          differs based on the source type.</p>
   *          <p>For Direct PUT as source </p>
   *          <p>
   *             <code>\{ "firehoseDeliveryStreamName" : "streamname", "IngestionTime" : "timestamp"
   *             \}</code>
   *          </p>
   *          <p>For Kinesis Data Stream as source </p>
   *          <p>
   *             <code> "kinesisStreamName" : "streamname", "kinesisShardId" : "Id",
   *             "kinesisPartitionKey" : "key", "kinesisSequenceNumber" : "1234", "subsequenceNumber" :
   *             "2334", "IngestionTime" : "timestamp" \}</code>
   *          </p>
   * @public
   */
  MetaDataColumnName?: string | undefined;

  /**
   * <p>The name of the record content column.</p>
   * @public
   */
  ContentColumnName?: string | undefined;

  /**
   * <p>The VPCE ID for Firehose to privately connect with Snowflake. The ID format is
   *          com.amazonaws.vpce.[region].vpce-svc-<[id]>. For more information, see <a href="https://docs.snowflake.com/en/user-guide/admin-security-privatelink">Amazon PrivateLink & Snowflake</a>
   *          </p>
   * @public
   */
  SnowflakeVpcConfiguration?: SnowflakeVpcConfiguration | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Snowflake role</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The time period where Firehose will retry sending data to the chosen HTTP endpoint.</p>
   * @public
   */
  RetryOptions?: SnowflakeRetryOptions | undefined;

  /**
   * <p>Choose an S3 backup mode</p>
   * @public
   */
  S3BackupMode?: SnowflakeS3BackupMode | undefined;

  /**
   * <p>Describes the configuration of a destination in Amazon S3.</p>
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * <p>
   *          The configuration that defines how you access secrets for Snowflake.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;

  /**
   * <p>
   *          Describes the buffering to perform before delivering data to the Snowflake destination. If you do not specify any value, Firehose uses the default values.
   *       </p>
   * @public
   */
  BufferingHints?: SnowflakeBufferingHints | undefined;
}

/**
 * <p>The buffering options. If no value is specified, the default values for Splunk are used.</p>
 * @public
 */
export interface SplunkBufferingHints {
  /**
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 60 (1 minute).</p>
   * @public
   */
  IntervalInSeconds?: number | undefined;

  /**
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.
   *
   *          </p>
   * @public
   */
  SizeInMBs?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const HECEndpointType = {
  Event: "Event",
  Raw: "Raw",
} as const;

/**
 * @public
 */
export type HECEndpointType = (typeof HECEndpointType)[keyof typeof HECEndpointType];

/**
 * <p>Configures retry behavior in case Firehose is unable to deliver
 *          documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.</p>
 * @public
 */
export interface SplunkRetryOptions {
  /**
   * <p>The total amount of time that Firehose spends on retries. This duration
   *          starts after the initial attempt to send data to Splunk fails. It doesn't include the
   *          periods during which Firehose waits for acknowledgment from Splunk after each
   *          attempt.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const SplunkS3BackupMode = {
  AllEvents: "AllEvents",
  FailedEventsOnly: "FailedEventsOnly",
} as const;

/**
 * @public
 */
export type SplunkS3BackupMode = (typeof SplunkS3BackupMode)[keyof typeof SplunkS3BackupMode];

/**
 * <p>Describes the configuration of a destination in Splunk.</p>
 * @public
 */
export interface SplunkDestinationConfiguration {
  /**
   * <p>The HTTP Event Collector (HEC) endpoint to which Firehose sends your
   *          data.</p>
   * @public
   */
  HECEndpoint: string | undefined;

  /**
   * <p>This type can be either "Raw" or "Event."</p>
   * @public
   */
  HECEndpointType: HECEndpointType | undefined;

  /**
   * <p>This is a GUID that you obtain from your Splunk cluster when you create a new HEC
   *          endpoint.</p>
   * @public
   */
  HECToken?: string | undefined;

  /**
   * <p>The amount of time that Firehose waits to receive an acknowledgment from
   *          Splunk after it sends it data. At the end of the timeout period, Firehose
   *          either tries to send the data again or considers it an error, based on your retry
   *          settings.</p>
   * @public
   */
  HECAcknowledgmentTimeoutInSeconds?: number | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver data to Splunk,
   *          or if it doesn't receive an acknowledgment of receipt from Splunk.</p>
   * @public
   */
  RetryOptions?: SplunkRetryOptions | undefined;

  /**
   * <p>Defines how documents should be delivered to Amazon S3. When set to
   *             <code>FailedEventsOnly</code>, Firehose writes any data that could not be
   *          indexed to the configured Amazon S3 destination. When set to <code>AllEvents</code>,
   *          Firehose delivers all incoming records to Amazon S3, and also writes failed
   *          documents to Amazon S3. The default value is <code>FailedEventsOnly</code>.</p>
   *          <p>You can update this backup mode from <code>FailedEventsOnly</code> to
   *             <code>AllEvents</code>. You can't update it from <code>AllEvents</code> to
   *             <code>FailedEventsOnly</code>.</p>
   * @public
   */
  S3BackupMode?: SplunkS3BackupMode | undefined;

  /**
   * <p>The configuration for the backup Amazon S3 location.</p>
   * @public
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The buffering options. If no value is specified, the default values for Splunk are used.</p>
   * @public
   */
  BufferingHints?: SplunkBufferingHints | undefined;

  /**
   * <p>
   *          The configuration that defines how you access secrets for Splunk.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * <p>Metadata that you can assign to a Firehose stream, consisting of a key-value
 *          pair.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A unique identifier for the tag. Maximum length: 128 characters. Valid characters:
   *          Unicode letters, digits, white space, _ . / = + - % @</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>An optional string, which you can use to describe or define the tag. Maximum length:
   *          256 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - %
   *          @</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateDeliveryStreamInput {
  /**
   * <p>The name of the Firehose stream. This name must be unique per Amazon Web Services
   *          account in the same Amazon Web Services Region. If the Firehose streams are in different
   *          accounts or different Regions, you can have multiple Firehose streams with the same
   *          name.</p>
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>The Firehose stream type. This parameter can be one of the following
   *          values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DirectPut</code>: Provider applications access the Firehose stream
   *                directly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KinesisStreamAsSource</code>: The Firehose stream uses a Kinesis data
   *                stream as a source.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeliveryStreamType?: DeliveryStreamType | undefined;

  /**
   * <p>The structure that configures parameters such as <code>ThroughputHintInMBs</code> for a
   *          stream configured with Direct PUT as a source. </p>
   * @public
   */
  DirectPutSourceConfiguration?: DirectPutSourceConfiguration | undefined;

  /**
   * <p>When a Kinesis data stream is used as the source for the Firehose stream, a <a>KinesisStreamSourceConfiguration</a> containing the Kinesis data stream Amazon
   *          Resource Name (ARN) and the role ARN for the source stream.</p>
   * @public
   */
  KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration | undefined;

  /**
   * <p>Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for
   *          Server-Side Encryption (SSE).</p>
   * @public
   */
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput | undefined;

  /**
   * <p>[Deprecated]
   *          The destination in Amazon S3. You can specify only one destination.</p>
   *
   * @deprecated
   * @public
   */
  S3DestinationConfiguration?: S3DestinationConfiguration | undefined;

  /**
   * <p>The destination in Amazon S3. You can specify only one destination.</p>
   * @public
   */
  ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration | undefined;

  /**
   * <p>The destination in Amazon Redshift. You can specify only one destination.</p>
   * @public
   */
  RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration | undefined;

  /**
   * <p>The destination in Amazon OpenSearch Service. You can specify only one destination.</p>
   * @public
   */
  ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration | undefined;

  /**
   * <p>The destination in Amazon OpenSearch Service. You can specify only one
   *          destination.</p>
   * @public
   */
  AmazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfiguration | undefined;

  /**
   * <p>The destination in Splunk. You can specify only one destination.</p>
   * @public
   */
  SplunkDestinationConfiguration?: SplunkDestinationConfiguration | undefined;

  /**
   * <p>Enables configuring Kinesis Firehose to deliver data to any HTTP endpoint destination.
   *          You can specify only one destination.</p>
   * @public
   */
  HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration | undefined;

  /**
   * <p>A set of tags to assign to the Firehose stream. A tag is a key-value pair that you can
   *          define and assign to Amazon Web Services resources. Tags are metadata. For example, you can
   *          add friendly names and descriptions or other types of information that can help you
   *          distinguish the Firehose stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using
   *             Cost Allocation Tags</a> in the Amazon Web Services Billing and Cost Management User
   *          Guide.</p>
   *          <p>You can specify up to 50 tags when creating a Firehose stream.</p>
   *          <p>If you specify tags in the <code>CreateDeliveryStream</code> action, Amazon Data
   *          Firehose performs an additional authorization on the
   *             <code>firehose:TagDeliveryStream</code> action to verify if users have permissions to
   *          create tags. If you do not provide this permission, requests to create new Firehose streams
   *          with IAM resource tags will fail with an <code>AccessDeniedException</code> such as
   *          following.</p>
   *          <p>
   *             <b>AccessDeniedException</b>
   *          </p>
   *          <p>User: arn:aws:sts::x:assumed-role/x/x is not authorized to perform: firehose:TagDeliveryStream on resource: arn:aws:firehose:us-east-1:x:deliverystream/x with an explicit deny in an identity-based policy.</p>
   *          <p>For an example IAM policy, see <a href="https://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html#API_CreateDeliveryStream_Examples">Tag example.</a>
   *          </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The destination in the Serverless offering for Amazon OpenSearch Service. You can
   *          specify only one destination.</p>
   * @public
   */
  AmazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfiguration | undefined;

  /**
   * <p>The configuration for the Amazon MSK cluster to be used as the source for a delivery
   *          stream.</p>
   * @public
   */
  MSKSourceConfiguration?: MSKSourceConfiguration | undefined;

  /**
   * <p>Configure Snowflake destination</p>
   * @public
   */
  SnowflakeDestinationConfiguration?: SnowflakeDestinationConfiguration | undefined;

  /**
   * <p>
   *          Configure Apache Iceberg Tables destination.
   *       </p>
   * @public
   */
  IcebergDestinationConfiguration?: IcebergDestinationConfiguration | undefined;

  /**
   * <p>
   *             The top level object for configuring streams with database as a source.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  DatabaseSourceConfiguration?: DatabaseSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDeliveryStreamOutput {
  /**
   * <p>The ARN of the Firehose stream.</p>
   * @public
   */
  DeliveryStreamARN?: string | undefined;
}

/**
 * <p>The specified input parameter has a value that is not valid.</p>
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
  }
}

/**
 * <p>Firehose throws this exception when an attempt to put records or to start
 *          or stop Firehose stream encryption fails. This happens when the KMS service throws one of
 *          the following exception types: <code>AccessDeniedException</code>,
 *             <code>InvalidStateException</code>, <code>DisabledException</code>, or
 *             <code>NotFoundException</code>.</p>
 * @public
 */
export class InvalidKMSResourceException extends __BaseException {
  readonly name: "InvalidKMSResourceException" = "InvalidKMSResourceException";
  readonly $fault: "client" = "client";
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidKMSResourceException, __BaseException>) {
    super({
      name: "InvalidKMSResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidKMSResourceException.prototype);
    this.code = opts.code;
  }
}

/**
 * <p>You have already reached the limit for a requested resource.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The resource is already in use and not available for this operation.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const DeliveryStreamFailureType = {
  CREATE_ENI_FAILED: "CREATE_ENI_FAILED",
  CREATE_KMS_GRANT_FAILED: "CREATE_KMS_GRANT_FAILED",
  DELETE_ENI_FAILED: "DELETE_ENI_FAILED",
  DISABLED_KMS_KEY: "DISABLED_KMS_KEY",
  ENI_ACCESS_DENIED: "ENI_ACCESS_DENIED",
  INVALID_KMS_KEY: "INVALID_KMS_KEY",
  KMS_ACCESS_DENIED: "KMS_ACCESS_DENIED",
  KMS_KEY_NOT_FOUND: "KMS_KEY_NOT_FOUND",
  KMS_OPT_IN_REQUIRED: "KMS_OPT_IN_REQUIRED",
  RETIRE_KMS_GRANT_FAILED: "RETIRE_KMS_GRANT_FAILED",
  SECURITY_GROUP_ACCESS_DENIED: "SECURITY_GROUP_ACCESS_DENIED",
  SECURITY_GROUP_NOT_FOUND: "SECURITY_GROUP_NOT_FOUND",
  SUBNET_ACCESS_DENIED: "SUBNET_ACCESS_DENIED",
  SUBNET_NOT_FOUND: "SUBNET_NOT_FOUND",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  VPC_ENDPOINT_SERVICE_NAME_NOT_FOUND: "VPC_ENDPOINT_SERVICE_NAME_NOT_FOUND",
  VPC_INTERFACE_ENDPOINT_SERVICE_ACCESS_DENIED: "VPC_INTERFACE_ENDPOINT_SERVICE_ACCESS_DENIED",
} as const;

/**
 * @public
 */
export type DeliveryStreamFailureType = (typeof DeliveryStreamFailureType)[keyof typeof DeliveryStreamFailureType];

/**
 * <p>Provides details in case one of the following operations fails due to an error related
 *          to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>,
 *             <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.</p>
 * @public
 */
export interface FailureDescription {
  /**
   * <p>The type of error that caused the failure.</p>
   * @public
   */
  Type: DeliveryStreamFailureType | undefined;

  /**
   * <p>A message providing details about the error that caused the failure.</p>
   * @public
   */
  Details: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SnapshotRequestedBy = {
  FIREHOSE: "FIREHOSE",
  USER: "USER",
} as const;

/**
 * @public
 */
export type SnapshotRequestedBy = (typeof SnapshotRequestedBy)[keyof typeof SnapshotRequestedBy];

/**
 * @public
 * @enum
 */
export const SnapshotStatus = {
  COMPLETE: "COMPLETE",
  IN_PROGRESS: "IN_PROGRESS",
  SUSPENDED: "SUSPENDED",
} as const;

/**
 * @public
 */
export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus];

/**
 * <p>
 *             The structure that describes the snapshot information of a table in source database endpoint that Firehose reads.
 *          </p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface DatabaseSnapshotInfo {
  /**
   * <p>
   *             The identifier of the current snapshot of the table in source database endpoint.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>
   *             The fully qualified name of the table in source database endpoint that Firehose reads.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Table: string | undefined;

  /**
   * <p>
   *             The timestamp when the current snapshot is taken on the table.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  RequestTimestamp: Date | undefined;

  /**
   * <p>
   *             The principal that sent the request to take the current snapshot on the table.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  RequestedBy: SnapshotRequestedBy | undefined;

  /**
   * <p>
   *             The status of the current snapshot of the table.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Status: SnapshotStatus | undefined;

  /**
   * <p>Provides details in case one of the following operations fails due to an error related
   *          to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>,
   *             <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.</p>
   * @public
   */
  FailureDescription?: FailureDescription | undefined;
}

/**
 * <p>
 *             The top level object for database source description.
 *          </p>
 *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
 * @public
 */
export interface DatabaseSourceDescription {
  /**
   * <p>The type of database engine. This can be one of the following values. </p>
   *          <ul>
   *             <li>
   *                <p>MySQL</p>
   *             </li>
   *             <li>
   *                <p>PostgreSQL</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Type?: DatabaseType | undefined;

  /**
   * <p>
   *             The endpoint of the database server.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The port of the database. This can be one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>3306 for MySQL database type</p>
   *             </li>
   *             <li>
   *                <p>5432 for PostgreSQL database type</p>
   *             </li>
   *          </ul>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>
   *             The mode to enable or disable SSL when Firehose connects to the database endpoint.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  SSLMode?: SSLMode | undefined;

  /**
   * <p>
   *             The list of database patterns in source database endpoint for Firehose to read from.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Databases?: DatabaseList | undefined;

  /**
   * <p>
   *             The list of table patterns in source database endpoint for Firehose to read from.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Tables?: DatabaseTableList | undefined;

  /**
   * <p>
   *             The list of column patterns in source database endpoint for Firehose to read from.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  Columns?: DatabaseColumnList | undefined;

  /**
   * <p>
   *             The optional list of table and column names used as unique key columns when taking snapshot if the tables don’t have primary keys configured.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  SurrogateKeys?: string[] | undefined;

  /**
   * <p>
   *             The fully qualified name of the table in source database endpoint that Firehose uses to track snapshot progress.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  SnapshotWatermarkTable?: string | undefined;

  /**
   * <p>
   *             The structure that describes the snapshot information of a table in source database endpoint that Firehose reads.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  SnapshotInfo?: DatabaseSnapshotInfo[] | undefined;

  /**
   * <p>
   *             The structure to configure the authentication methods for Firehose to connect to source database endpoint.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  DatabaseSourceAuthenticationConfiguration?: DatabaseSourceAuthenticationConfiguration | undefined;

  /**
   * <p>
   *             The details of the VPC Endpoint Service which Firehose uses to create a PrivateLink to the database.
   *          </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  DatabaseSourceVPCConfiguration?: DatabaseSourceVPCConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryStreamInput {
  /**
   * <p>The name of the Firehose stream.</p>
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>Set this to true if you want to delete the Firehose stream even if Firehose
   *          is unable to retire the grant for the CMK. Firehose might be unable to retire
   *          the grant due to a customer error, such as when the CMK or the grant are in an invalid
   *          state. If you force deletion, you can then use the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> operation to
   *          revoke the grant you gave to Firehose. If a failure to retire the grant
   *          happens due to an Amazon Web Services KMS issue, Firehose keeps retrying the
   *          delete operation.</p>
   *          <p>The default value is false.</p>
   * @public
   */
  AllowForceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDeliveryStreamOutput {}

/**
 * <p>The specified resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const DeliveryStreamEncryptionStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  DISABLING_FAILED: "DISABLING_FAILED",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
  ENABLING_FAILED: "ENABLING_FAILED",
} as const;

/**
 * @public
 */
export type DeliveryStreamEncryptionStatus =
  (typeof DeliveryStreamEncryptionStatus)[keyof typeof DeliveryStreamEncryptionStatus];

/**
 * <p>Contains information about the server-side encryption (SSE) status for the delivery
 *          stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can
 *          get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation. </p>
 * @public
 */
export interface DeliveryStreamEncryptionConfiguration {
  /**
   * <p>If <code>KeyType</code> is <code>CUSTOMER_MANAGED_CMK</code>, this field contains the
   *          ARN of the customer managed CMK. If <code>KeyType</code> is <code>Amazon Web Services_OWNED_CMK</code>, <code>DeliveryStreamEncryptionConfiguration</code> doesn't contain
   *          a value for <code>KeyARN</code>.</p>
   * @public
   */
  KeyARN?: string | undefined;

  /**
   * <p>Indicates the type of customer master key (CMK) that is used for encryption. The default
   *          setting is <code>Amazon Web Services_OWNED_CMK</code>. For more information about CMKs, see
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">Customer Master Keys (CMKs)</a>.</p>
   * @public
   */
  KeyType?: KeyType | undefined;

  /**
   * <p>This is the server-side encryption (SSE) status for the Firehose stream. For a full
   *          description of the different values of this status, see <a>StartDeliveryStreamEncryption</a> and <a>StopDeliveryStreamEncryption</a>. If this status is <code>ENABLING_FAILED</code>
   *          or <code>DISABLING_FAILED</code>, it is the status of the most recent attempt to enable or
   *          disable SSE, respectively.</p>
   * @public
   */
  Status?: DeliveryStreamEncryptionStatus | undefined;

  /**
   * <p>Provides details in case one of the following operations fails due to an error related
   *          to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>,
   *             <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.</p>
   * @public
   */
  FailureDescription?: FailureDescription | undefined;
}

/**
 * @public
 * @enum
 */
export const DeliveryStreamStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  CREATING_FAILED: "CREATING_FAILED",
  DELETING: "DELETING",
  DELETING_FAILED: "DELETING_FAILED",
} as const;

/**
 * @public
 */
export type DeliveryStreamStatus = (typeof DeliveryStreamStatus)[keyof typeof DeliveryStreamStatus];

/**
 * <p>The destination description in Amazon OpenSearch Service.</p>
 * @public
 */
export interface ElasticsearchDestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The ARN of the Amazon OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p>
   *          <p>Firehose uses either <code>ClusterEndpoint</code> or <code>DomainARN</code>
   *          to send data to Amazon OpenSearch Service.</p>
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * <p>The endpoint to use when communicating with the cluster. Firehose uses
   *          either this <code>ClusterEndpoint</code> or the <code>DomainARN</code> field to send data
   *          to Amazon OpenSearch Service.</p>
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * <p>The Elasticsearch index name.</p>
   * @public
   */
  IndexName?: string | undefined;

  /**
   * <p>The Elasticsearch type name. This applies to Elasticsearch 6.x and lower versions.
   *          For Elasticsearch 7.x and OpenSearch Service 1.x, there's no value for
   *             <code>TypeName</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The Elasticsearch index rotation period</p>
   * @public
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | undefined;

  /**
   * <p>The buffering options.</p>
   * @public
   */
  BufferingHints?: ElasticsearchBufferingHints | undefined;

  /**
   * <p>The Amazon OpenSearch Service retry options.</p>
   * @public
   */
  RetryOptions?: ElasticsearchRetryOptions | undefined;

  /**
   * <p>The Amazon S3 backup mode.</p>
   * @public
   */
  S3BackupMode?: ElasticsearchS3BackupMode | undefined;

  /**
   * <p>The Amazon S3 destination.</p>
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch logging options.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The details of the VPC of the Amazon OpenSearch or the Amazon OpenSearch Serverless
   *          destination.</p>
   * @public
   */
  VpcConfigurationDescription?: VpcConfigurationDescription | undefined;

  /**
   * <p>Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.</p>
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * <p>Describes a destination in Amazon S3.</p>
 * @public
 */
export interface ExtendedS3DestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A prefix that Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * <p>The buffering option.</p>
   * @public
   */
  BufferingHints: BufferingHints | undefined;

  /**
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   * @public
   */
  CompressionFormat: CompressionFormat | undefined;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   * @public
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon S3 backup mode.</p>
   * @public
   */
  S3BackupMode?: S3BackupMode | undefined;

  /**
   * <p>The configuration for backup in Amazon S3.</p>
   * @public
   */
  S3BackupDescription?: S3DestinationDescription | undefined;

  /**
   * <p>The serializer, deserializer, and schema for converting data from the JSON format to
   *          the Parquet or ORC format before writing it to Amazon S3.</p>
   * @public
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration | undefined;

  /**
   * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
   *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
   *          partitioning is only supported for Amazon S3 destinations.
   *          </p>
   * @public
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration | undefined;

  /**
   * <p>Specify a file extension. It will override the default file extension</p>
   * @public
   */
  FileExtension?: string | undefined;

  /**
   * <p>The time zone you prefer. UTC is the default.</p>
   * @public
   */
  CustomTimeZone?: string | undefined;
}

/**
 * <p>Describes the HTTP endpoint selected as the destination. </p>
 * @public
 */
export interface HttpEndpointDescription {
  /**
   * <p>The URL of the HTTP endpoint selected as the destination.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The name of the HTTP endpoint selected as the destination.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Describes the HTTP endpoint destination.</p>
 * @public
 */
export interface HttpEndpointDestinationDescription {
  /**
   * <p>The configuration of the specified HTTP endpoint destination.</p>
   * @public
   */
  EndpointConfiguration?: HttpEndpointDescription | undefined;

  /**
   * <p>Describes buffering options that can be applied to the data before it is delivered to
   *          the HTTPS endpoint destination. Firehose teats these options as hints, and it
   *          might choose to use more optimal values. The <code>SizeInMBs</code> and
   *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
   *          one of them, you must also provide a value for the other. </p>
   * @public
   */
  BufferingHints?: HttpEndpointBufferingHints | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The configuration of request sent to the HTTP endpoint specified as the
   *          destination.</p>
   * @public
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>Firehose uses this IAM role for all the permissions that the delivery
   *          stream needs.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>Describes the retry behavior in case Firehose is unable to deliver data to
   *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
   *          receipt from the specified HTTP endpoint destination.</p>
   * @public
   */
  RetryOptions?: HttpEndpointRetryOptions | undefined;

  /**
   * <p>Describes the S3 bucket backup options for the data that Kinesis Firehose delivers to
   *          the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or only
   *          the documents that Firehose could not deliver to the specified HTTP endpoint
   *          destination (<code>FailedDataOnly</code>).</p>
   * @public
   */
  S3BackupMode?: HttpEndpointS3BackupMode | undefined;

  /**
   * <p>Describes a destination in Amazon S3.</p>
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * <p>
   *          The configuration that defines how you access secrets for HTTP Endpoint destination.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * <p>
 *          Describes a destination in Apache Iceberg Tables.
 *       </p>
 * @public
 */
export interface IcebergDestinationDescription {
  /**
   * <p> Provides a list of <code>DestinationTableConfigurations</code> which Firehose uses
   *          to deliver data to Apache Iceberg Tables. Firehose will write data with insert if table specific configuration is not provided here.</p>
   * @public
   */
  DestinationTableConfigurationList?: DestinationTableConfiguration[] | undefined;

  /**
   * <p>The description of automatic schema evolution configuration.</p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  SchemaEvolutionConfiguration?: SchemaEvolutionConfiguration | undefined;

  /**
   * <p>
   *          The description of table creation configuration.
   *       </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  TableCreationConfiguration?: TableCreationConfiguration | undefined;

  /**
   * <p>Describes hints for the buffering to perform before delivering data to the
   *          destination. These options are treated as hints, and therefore Firehose might
   *          choose to use different values when it is optimal. The <code>SizeInMBs</code> and
   *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
   *          one of them, you must also provide a value for the other.</p>
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p> Describes how Firehose will backup records. Currently,Firehose only supports
   *          <code>FailedDataOnly</code>. </p>
   * @public
   */
  S3BackupMode?: IcebergS3BackupMode | undefined;

  /**
   * <p> The retry behavior in case Firehose is unable to deliver data to a destination.</p>
   * @public
   */
  RetryOptions?: RetryOptions | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling Apache Iceberg Tables.
   *       </p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p> Describes whether all incoming data for this delivery stream will be append only
   *          (inserts only and not for updates and deletes) for Iceberg delivery. This feature is only
   *          applicable for Apache Iceberg Tables.</p>
   *          <p>The default value is false. If you set this value to true, Firehose automatically
   *          increases the throughput limit of a stream based on the throttling levels of the stream. If
   *          you set this parameter to true for a stream with updates and deletes, you will see out of
   *          order delivery.</p>
   *          <p> </p>
   * @public
   */
  AppendOnly?: boolean | undefined;

  /**
   * <p>
   *          Configuration describing where the destination Iceberg tables are persisted.
   *       </p>
   * @public
   */
  CatalogConfiguration?: CatalogConfiguration | undefined;

  /**
   * <p>Describes a destination in Amazon S3.</p>
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;
}

/**
 * <p>Describes a destination in Amazon Redshift.</p>
 * @public
 */
export interface RedshiftDestinationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>The database connection string.</p>
   * @public
   */
  ClusterJDBCURL: string | undefined;

  /**
   * <p>The <code>COPY</code> command.</p>
   * @public
   */
  CopyCommand: CopyCommand | undefined;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver documents to
   *          Amazon Redshift. Default value is 3600 (60 minutes).</p>
   * @public
   */
  RetryOptions?: RedshiftRetryOptions | undefined;

  /**
   * <p>The Amazon S3 destination.</p>
   * @public
   */
  S3DestinationDescription: S3DestinationDescription | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon S3 backup mode.</p>
   * @public
   */
  S3BackupMode?: RedshiftS3BackupMode | undefined;

  /**
   * <p>The configuration for backup in Amazon S3.</p>
   * @public
   */
  S3BackupDescription?: S3DestinationDescription | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>
   *          The configuration that defines how you access secrets for Amazon Redshift.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * <p>Optional Snowflake destination description</p>
 * @public
 */
export interface SnowflakeDestinationDescription {
  /**
   * <p>URL for accessing your Snowflake account. This URL must include your <a href="https://docs.snowflake.com/en/user-guide/admin-account-identifier">account identifier</a>.
   *          Note that the protocol (https://) and port number are optional.</p>
   * @public
   */
  AccountUrl?: string | undefined;

  /**
   * <p>User login name for the Snowflake account.</p>
   * @public
   */
  User?: string | undefined;

  /**
   * <p>All data in Snowflake is maintained in databases.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>Each database consists of one or more schemas, which are logical groupings of database objects, such as tables and views</p>
   * @public
   */
  Schema?: string | undefined;

  /**
   * <p>All data in Snowflake is stored in database tables, logically structured as collections of columns and rows.</p>
   * @public
   */
  Table?: string | undefined;

  /**
   * <p>Optionally configure a Snowflake role. Otherwise the default user role will be used.</p>
   * @public
   */
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration | undefined;

  /**
   * <p>Choose to load JSON keys mapped to table column names or choose to split the JSON payload where content is mapped to a record content column and source metadata is mapped to a record metadata column.</p>
   * @public
   */
  DataLoadingOption?: SnowflakeDataLoadingOption | undefined;

  /**
   * <p>The name of the record metadata column</p>
   * @public
   */
  MetaDataColumnName?: string | undefined;

  /**
   * <p>The name of the record content column</p>
   * @public
   */
  ContentColumnName?: string | undefined;

  /**
   * <p>The VPCE ID for Firehose to privately connect with Snowflake. The ID format is
   *          com.amazonaws.vpce.[region].vpce-svc-<[id]>. For more information, see <a href="https://docs.snowflake.com/en/user-guide/admin-security-privatelink">Amazon PrivateLink & Snowflake</a>
   *          </p>
   * @public
   */
  SnowflakeVpcConfiguration?: SnowflakeVpcConfiguration | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Snowflake role</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The time period where Firehose will retry sending data to the chosen HTTP endpoint.</p>
   * @public
   */
  RetryOptions?: SnowflakeRetryOptions | undefined;

  /**
   * <p>Choose an S3 backup mode</p>
   * @public
   */
  S3BackupMode?: SnowflakeS3BackupMode | undefined;

  /**
   * <p>Describes a destination in Amazon S3.</p>
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * <p>
   *          The configuration that defines how you access secrets for Snowflake.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;

  /**
   * <p>
   *          Describes the buffering to perform before delivering data to the Snowflake destination. If you do not specify any value, Firehose uses the default values.
   *       </p>
   * @public
   */
  BufferingHints?: SnowflakeBufferingHints | undefined;
}

/**
 * <p>Describes a destination in Splunk.</p>
 * @public
 */
export interface SplunkDestinationDescription {
  /**
   * <p>The HTTP Event Collector (HEC) endpoint to which Firehose sends your
   *          data.</p>
   * @public
   */
  HECEndpoint?: string | undefined;

  /**
   * <p>This type can be either "Raw" or "Event."</p>
   * @public
   */
  HECEndpointType?: HECEndpointType | undefined;

  /**
   * <p>A GUID you obtain from your Splunk cluster when you create a new HEC
   *          endpoint.</p>
   * @public
   */
  HECToken?: string | undefined;

  /**
   * <p>The amount of time that Firehose waits to receive an acknowledgment from
   *          Splunk after it sends it data. At the end of the timeout period, Firehose
   *          either tries to send the data again or considers it an error, based on your retry
   *          settings.</p>
   * @public
   */
  HECAcknowledgmentTimeoutInSeconds?: number | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver data to Splunk
   *          or if it doesn't receive an acknowledgment of receipt from Splunk.</p>
   * @public
   */
  RetryOptions?: SplunkRetryOptions | undefined;

  /**
   * <p>Defines how documents should be delivered to Amazon S3. When set to
   *             <code>FailedDocumentsOnly</code>, Firehose writes any data that could not
   *          be indexed to the configured Amazon S3 destination. When set to <code>AllDocuments</code>,
   *          Firehose delivers all incoming records to Amazon S3, and also writes failed
   *          documents to Amazon S3. Default value is <code>FailedDocumentsOnly</code>. </p>
   * @public
   */
  S3BackupMode?: SplunkS3BackupMode | undefined;

  /**
   * <p>The Amazon S3 destination.></p>
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The buffering options. If no value is specified, the default values for Splunk are used.</p>
   * @public
   */
  BufferingHints?: SplunkBufferingHints | undefined;

  /**
   * <p>
   *          The configuration that defines how you access secrets for Splunk.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * <p>Describes the destination for a Firehose stream.</p>
 * @public
 */
export interface DestinationDescription {
  /**
   * <p>The ID of the destination.</p>
   * @public
   */
  DestinationId: string | undefined;

  /**
   * <p>[Deprecated] The destination in Amazon S3.</p>
   * @public
   */
  S3DestinationDescription?: S3DestinationDescription | undefined;

  /**
   * <p>The destination in Amazon S3.</p>
   * @public
   */
  ExtendedS3DestinationDescription?: ExtendedS3DestinationDescription | undefined;

  /**
   * <p>The destination in Amazon Redshift.</p>
   * @public
   */
  RedshiftDestinationDescription?: RedshiftDestinationDescription | undefined;

  /**
   * <p>The destination in Amazon OpenSearch Service.</p>
   * @public
   */
  ElasticsearchDestinationDescription?: ElasticsearchDestinationDescription | undefined;

  /**
   * <p>The destination in Amazon OpenSearch Service.</p>
   * @public
   */
  AmazonopensearchserviceDestinationDescription?: AmazonopensearchserviceDestinationDescription | undefined;

  /**
   * <p>The destination in Splunk.</p>
   * @public
   */
  SplunkDestinationDescription?: SplunkDestinationDescription | undefined;

  /**
   * <p>Describes the specified HTTP endpoint destination.</p>
   * @public
   */
  HttpEndpointDestinationDescription?: HttpEndpointDestinationDescription | undefined;

  /**
   * <p>Optional description for the destination</p>
   * @public
   */
  SnowflakeDestinationDescription?: SnowflakeDestinationDescription | undefined;

  /**
   * <p>The destination in the Serverless offering for Amazon OpenSearch Service.</p>
   * @public
   */
  AmazonOpenSearchServerlessDestinationDescription?: AmazonOpenSearchServerlessDestinationDescription | undefined;

  /**
   * <p>
   *          Describes a destination in Apache Iceberg Tables.
   *       </p>
   * @public
   */
  IcebergDestinationDescription?: IcebergDestinationDescription | undefined;
}

/**
 * <p>The structure that configures parameters such as <code>ThroughputHintInMBs</code> for a stream configured with
 *          Direct PUT as a source. </p>
 * @public
 */
export interface DirectPutSourceDescription {
  /**
   * <p> The value that you configure for this parameter is for information purpose only and
   *          does not affect Firehose delivery throughput limit. You can use the <a href="https://support.console.aws.amazon.com/support/home#/case/create%3FissueType=service-limit-increase%26limitType=kinesis-firehose-limits">Firehose Limits form</a> to request a throughput limit increase. </p>
   * @public
   */
  ThroughputHintInMBs?: number | undefined;
}

/**
 * <p>Details about a Kinesis data stream used as the source for a Firehose
 *          stream.</p>
 * @public
 */
export interface KinesisStreamSourceDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the source Kinesis data stream. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon
   *             Kinesis Data Streams ARN Format</a>.</p>
   * @public
   */
  KinesisStreamARN?: string | undefined;

  /**
   * <p>The ARN of the role used by the source Kinesis data stream. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services
   *             Identity and Access Management (IAM) ARN Format</a>.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>Firehose starts retrieving records from the Kinesis data stream starting
   *          with this timestamp.</p>
   * @public
   */
  DeliveryStartTimestamp?: Date | undefined;
}

/**
 * <p>Details about the Amazon MSK cluster used as the source for a Firehose stream.</p>
 * @public
 */
export interface MSKSourceDescription {
  /**
   * <p>The ARN of the Amazon MSK cluster.</p>
   * @public
   */
  MSKClusterARN?: string | undefined;

  /**
   * <p>The topic name within the Amazon MSK cluster.</p>
   * @public
   */
  TopicName?: string | undefined;

  /**
   * <p>The authentication configuration of the Amazon MSK cluster.</p>
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfiguration | undefined;

  /**
   * <p>Firehose starts retrieving records from the topic within the Amazon MSK
   *          cluster starting with this timestamp.</p>
   * @public
   */
  DeliveryStartTimestamp?: Date | undefined;

  /**
   * <p>The start date and time in UTC for the offset position within your MSK topic from where
   *          Firehose begins to read. By default, this is set to timestamp when Firehose becomes Active. </p>
   *          <p>If you want to create a Firehose stream with Earliest start position from SDK or CLI,
   *          you need to set the <code>ReadFromTimestampUTC</code> parameter to Epoch
   *          (1970-01-01T00:00:00Z). </p>
   * @public
   */
  ReadFromTimestamp?: Date | undefined;
}

/**
 * <p>Details about a Kinesis data stream used as the source for a Firehose
 *          stream.</p>
 * @public
 */
export interface SourceDescription {
  /**
   * <p>Details about Direct PUT used as the source for a Firehose stream.
   *          </p>
   * @public
   */
  DirectPutSourceDescription?: DirectPutSourceDescription | undefined;

  /**
   * <p>The <a>KinesisStreamSourceDescription</a> value for the source Kinesis
   *          data stream.</p>
   * @public
   */
  KinesisStreamSourceDescription?: KinesisStreamSourceDescription | undefined;

  /**
   * <p>The configuration description for the Amazon MSK cluster to be used as the source for a delivery
   *          stream.</p>
   * @public
   */
  MSKSourceDescription?: MSKSourceDescription | undefined;

  /**
   * <p>Details about a database used as the source for a Firehose stream.</p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  DatabaseSourceDescription?: DatabaseSourceDescription | undefined;
}

/**
 * <p>Contains information about a Firehose stream.</p>
 * @public
 */
export interface DeliveryStreamDescription {
  /**
   * <p>The name of the Firehose stream.</p>
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Firehose stream. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  DeliveryStreamARN: string | undefined;

  /**
   * <p>The status of the Firehose stream. If the status of a Firehose stream is
   *             <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke
   *             <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p>
   * @public
   */
  DeliveryStreamStatus: DeliveryStreamStatus | undefined;

  /**
   * <p>Provides details in case one of the following operations fails due to an error related
   *          to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>,
   *             <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.</p>
   * @public
   */
  FailureDescription?: FailureDescription | undefined;

  /**
   * <p>Indicates the server-side encryption (SSE) status for the Firehose stream.</p>
   * @public
   */
  DeliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration | undefined;

  /**
   * <p>The Firehose stream type. This can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DirectPut</code>: Provider applications access the Firehose stream
   *                directly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KinesisStreamAsSource</code>: The Firehose stream uses a Kinesis data
   *                stream as a source.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeliveryStreamType: DeliveryStreamType | undefined;

  /**
   * <p>Each time the destination is updated for a Firehose stream, the version ID is
   *          changed, and the current version ID is required when updating the destination. This is so
   *          that the service knows it is applying the changes to the correct version of the delivery
   *          stream.</p>
   * @public
   */
  VersionId: string | undefined;

  /**
   * <p>The date and time that the Firehose stream was created.</p>
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * <p>The date and time that the Firehose stream was last updated.</p>
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * <p>If the <code>DeliveryStreamType</code> parameter is
   *             <code>KinesisStreamAsSource</code>, a <a>SourceDescription</a> object
   *          describing the source Kinesis data stream.</p>
   * @public
   */
  Source?: SourceDescription | undefined;

  /**
   * <p>The destinations.</p>
   * @public
   */
  Destinations: DestinationDescription[] | undefined;

  /**
   * <p>Indicates whether there are more destinations available to list.</p>
   * @public
   */
  HasMoreDestinations: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveryStreamInput {
  /**
   * <p>The name of the Firehose stream.</p>
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>The limit on the number of destinations to return. You can have one destination per
   *          Firehose stream.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The ID of the destination to start returning the destination information. Firehose supports one destination per Firehose stream.</p>
   * @public
   */
  ExclusiveStartDestinationId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveryStreamOutput {
  /**
   * <p>Information about the Firehose stream.</p>
   * @public
   */
  DeliveryStreamDescription: DeliveryStreamDescription | undefined;
}

/**
 * <p>Describes an update for a destination in Amazon OpenSearch Service.</p>
 * @public
 */
export interface ElasticsearchDestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose
   *          for calling the Amazon OpenSearch Service Configuration API and for indexing documents. For more
   *          information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Firehose Access to an Amazon S3 Destination</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions
   *             for <code>DescribeDomain</code>, <code>DescribeDomains</code>, and
   *             <code>DescribeDomainConfig</code> after assuming the IAM role specified in
   *             <code>RoleARN</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   *          <p>Specify either <code>ClusterEndpoint</code> or <code>DomainARN</code>.</p>
   * @public
   */
  DomainARN?: string | undefined;

  /**
   * <p>The endpoint to use when communicating with the cluster. Specify either this
   *             <code>ClusterEndpoint</code> or the <code>DomainARN</code> field.</p>
   * @public
   */
  ClusterEndpoint?: string | undefined;

  /**
   * <p>The Elasticsearch index name.</p>
   * @public
   */
  IndexName?: string | undefined;

  /**
   * <p>The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per
   *          index. If you try to specify a new type for an existing index that already has another
   *          type, Firehose returns an error during runtime.</p>
   *          <p>If you upgrade Elasticsearch from 6.x to 7.x and don’t update your Firehose stream,
   *          Firehose still delivers data to Elasticsearch with the old index name and type
   *          name. If you want to update your Firehose stream with a new index name, provide an empty
   *          string for <code>TypeName</code>. </p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The Elasticsearch index rotation period. Index rotation appends a timestamp to
   *             <code>IndexName</code> to facilitate the expiration of old data. For more information,
   *          see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation">Index Rotation for the
   *             Amazon OpenSearch Service Destination</a>. Default value is <code>OneDay</code>.</p>
   * @public
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | undefined;

  /**
   * <p>The buffering options. If no value is specified,
   *             <code>ElasticsearchBufferingHints</code> object default values are used. </p>
   * @public
   */
  BufferingHints?: ElasticsearchBufferingHints | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver documents to
   *          Amazon OpenSearch Service. The default value is 300 (5 minutes).</p>
   * @public
   */
  RetryOptions?: ElasticsearchRetryOptions | undefined;

  /**
   * <p>The Amazon S3 destination.</p>
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.</p>
   * @public
   */
  DocumentIdOptions?: DocumentIdOptions | undefined;
}

/**
 * <p>Describes an update for a destination in Amazon S3.</p>
 * @public
 */
export interface ExtendedS3DestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  BucketARN?: string | undefined;

  /**
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>A prefix that Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * <p>The buffering option.</p>
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>. </p>
   * @public
   */
  CompressionFormat?: CompressionFormat | undefined;

  /**
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>You can update a Firehose stream to enable Amazon S3 backup if it is disabled. If
   *          backup is enabled, you can't update the Firehose stream to disable it. </p>
   * @public
   */
  S3BackupMode?: S3BackupMode | undefined;

  /**
   * <p>The Amazon S3 destination for backup.</p>
   * @public
   */
  S3BackupUpdate?: S3DestinationUpdate | undefined;

  /**
   * <p>The serializer, deserializer, and schema for converting data from the JSON format to
   *          the Parquet or ORC format before writing it to Amazon S3.</p>
   * @public
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration | undefined;

  /**
   * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
   *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
   *          partitioning is only supported for Amazon S3 destinations.
   *          </p>
   * @public
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration | undefined;

  /**
   * <p>Specify a file extension. It will override the default file extension</p>
   * @public
   */
  FileExtension?: string | undefined;

  /**
   * <p>The time zone you prefer. UTC is the default.</p>
   * @public
   */
  CustomTimeZone?: string | undefined;
}

/**
 * @public
 */
export interface ListDeliveryStreamsInput {
  /**
   * <p>The maximum number of Firehose streams to list. The default value is 10.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The Firehose stream type. This can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DirectPut</code>: Provider applications access the Firehose stream
   *                directly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KinesisStreamAsSource</code>: The Firehose stream uses a Kinesis data
   *                stream as a source.</p>
   *             </li>
   *          </ul>
   *          <p>This parameter is optional. If this parameter is omitted, Firehose streams of all
   *          types are returned.</p>
   * @public
   */
  DeliveryStreamType?: DeliveryStreamType | undefined;

  /**
   * <p>The list of Firehose streams returned by this call to
   *             <code>ListDeliveryStreams</code> will start with the Firehose stream whose name comes
   *          alphabetically immediately after the name you specify in
   *             <code>ExclusiveStartDeliveryStreamName</code>.</p>
   * @public
   */
  ExclusiveStartDeliveryStreamName?: string | undefined;
}

/**
 * @public
 */
export interface ListDeliveryStreamsOutput {
  /**
   * <p>The names of the Firehose streams.</p>
   * @public
   */
  DeliveryStreamNames: string[] | undefined;

  /**
   * <p>Indicates whether there are more Firehose streams available to list.</p>
   * @public
   */
  HasMoreDeliveryStreams: boolean | undefined;
}

/**
 * @public
 */
export interface ListTagsForDeliveryStreamInput {
  /**
   * <p>The name of the Firehose stream whose tags you want to list.</p>
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>The key to use as the starting point for the list of tags. If you set this parameter,
   *             <code>ListTagsForDeliveryStream</code> gets all tags that occur after
   *             <code>ExclusiveStartTagKey</code>.</p>
   * @public
   */
  ExclusiveStartTagKey?: string | undefined;

  /**
   * <p>The number of tags to return. If this number is less than the total number of tags
   *          associated with the Firehose stream, <code>HasMoreTags</code> is set to <code>true</code>
   *          in the response. To list additional tags, set <code>ExclusiveStartTagKey</code> to the last
   *          key in the response. </p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForDeliveryStreamOutput {
  /**
   * <p>A list of tags associated with <code>DeliveryStreamName</code>, starting with the
   *          first tag after <code>ExclusiveStartTagKey</code> and up to the specified
   *             <code>Limit</code>.</p>
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * <p>If this is <code>true</code> in the response, more tags are available. To list the
   *          remaining tags, set <code>ExclusiveStartTagKey</code> to the key of the last tag returned
   *          and call <code>ListTagsForDeliveryStream</code> again.</p>
   * @public
   */
  HasMoreTags: boolean | undefined;
}

/**
 * <p>Only requests from CloudWatch Logs are supported when CloudWatch Logs decompression is enabled.</p>
 * @public
 */
export class InvalidSourceException extends __BaseException {
  readonly name: "InvalidSourceException" = "InvalidSourceException";
  readonly $fault: "client" = "client";
  code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSourceException, __BaseException>) {
    super({
      name: "InvalidSourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSourceException.prototype);
    this.code = opts.code;
  }
}

/**
 * <p>The unit of data in a Firehose stream.</p>
 * @public
 */
export interface _Record {
  /**
   * <p>The data blob, which is base64-encoded when the blob is serialized. The maximum size
   *          of the data blob, before base64-encoding, is 1,000 KiB.</p>
   * @public
   */
  Data: Uint8Array | undefined;
}

/**
 * @public
 */
export interface PutRecordInput {
  /**
   * <p>The name of the Firehose stream.</p>
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>The record.</p>
   * @public
   */
  Record: _Record | undefined;
}

/**
 * @public
 */
export interface PutRecordOutput {
  /**
   * <p>The ID of the record.</p>
   * @public
   */
  RecordId: string | undefined;

  /**
   * <p>Indicates whether server-side encryption (SSE) was enabled during this operation.</p>
   * @public
   */
  Encrypted?: boolean | undefined;
}

/**
 * <p>The service is unavailable. Back off and retry the operation. If you continue to see
 *          the exception, throughput limits for the Firehose stream may have been exceeded. For more
 *          information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Firehose
 *          Limits</a>.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * @public
 */
export interface PutRecordBatchInput {
  /**
   * <p>The name of the Firehose stream.</p>
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>One or more records.</p>
   * @public
   */
  Records: _Record[] | undefined;
}

/**
 * <p>Contains the result for an individual record from a <a>PutRecordBatch</a>
 *          request. If the record is successfully added to your Firehose stream, it receives a record
 *          ID. If the record fails to be added to your Firehose stream, the result includes an error
 *          code and an error message.</p>
 * @public
 */
export interface PutRecordBatchResponseEntry {
  /**
   * <p>The ID of the record.</p>
   * @public
   */
  RecordId?: string | undefined;

  /**
   * <p>The error code for an individual record result.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message for an individual record result.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutRecordBatchOutput {
  /**
   * <p>The number of records that might have failed processing. This number might be greater
   *          than 0 even if the <a>PutRecordBatch</a> call succeeds. Check
   *             <code>FailedPutCount</code> to determine whether there are records that you need to
   *          resend.</p>
   * @public
   */
  FailedPutCount: number | undefined;

  /**
   * <p>Indicates whether server-side encryption (SSE) was enabled during this operation.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The results array. For each record, the index of the response element is the same as
   *          the index used in the request array.</p>
   * @public
   */
  RequestResponses: PutRecordBatchResponseEntry[] | undefined;
}

/**
 * @public
 */
export interface StartDeliveryStreamEncryptionInput {
  /**
   * <p>The name of the Firehose stream for which you want to enable server-side encryption
   *          (SSE).</p>
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for
   *          Server-Side Encryption (SSE).</p>
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
   * <p>The name of the Firehose stream for which you want to disable server-side encryption
   *          (SSE).</p>
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
   * <p>The name of the Firehose stream to which you want to add the tags.</p>
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>A set of key-value pairs to use to create the tags.</p>
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
   * <p>The name of the Firehose stream.</p>
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>A list of tag keys. Each corresponding tag is removed from the delivery
   *          stream.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagDeliveryStreamOutput {}

/**
 * <p>Updates the specified HTTP endpoint destination.</p>
 * @public
 */
export interface HttpEndpointDestinationUpdate {
  /**
   * <p>Describes the configuration of the HTTP endpoint destination.</p>
   * @public
   */
  EndpointConfiguration?: HttpEndpointConfiguration | undefined;

  /**
   * <p>Describes buffering options that can be applied to the data before it is delivered to
   *          the HTTPS endpoint destination. Firehose teats these options as hints, and it
   *          might choose to use more optimal values. The <code>SizeInMBs</code> and
   *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
   *          one of them, you must also provide a value for the other. </p>
   * @public
   */
  BufferingHints?: HttpEndpointBufferingHints | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The configuration of the request sent to the HTTP endpoint specified as the
   *          destination.</p>
   * @public
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>Firehose uses this IAM role for all the permissions that the delivery
   *          stream needs.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>Describes the retry behavior in case Firehose is unable to deliver data to
   *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
   *          receipt from the specified HTTP endpoint destination.</p>
   * @public
   */
  RetryOptions?: HttpEndpointRetryOptions | undefined;

  /**
   * <p>Describes the S3 bucket backup options for the data that Kinesis Firehose delivers to
   *          the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or only
   *          the documents that Firehose could not deliver to the specified HTTP endpoint
   *          destination (<code>FailedDataOnly</code>).</p>
   * @public
   */
  S3BackupMode?: HttpEndpointS3BackupMode | undefined;

  /**
   * <p>Describes an update for a destination in Amazon S3.</p>
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * <p>
   *          The configuration that defines how you access secrets for HTTP Endpoint destination.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * <p>
 *          Describes an update for a destination in Apache Iceberg Tables.
 *       </p>
 * @public
 */
export interface IcebergDestinationUpdate {
  /**
   * <p> Provides a list of <code>DestinationTableConfigurations</code> which Firehose uses
   *          to deliver data to Apache Iceberg Tables. Firehose will write data with insert if table specific configuration is not provided here.</p>
   * @public
   */
  DestinationTableConfigurationList?: DestinationTableConfiguration[] | undefined;

  /**
   * <p>
   *          The configuration to enable automatic schema evolution.
   *       </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  SchemaEvolutionConfiguration?: SchemaEvolutionConfiguration | undefined;

  /**
   * <p>
   *          The configuration to enable automatic table creation.
   *       </p>
   *          <p>Amazon Data Firehose is in preview release and is subject to change.</p>
   * @public
   */
  TableCreationConfiguration?: TableCreationConfiguration | undefined;

  /**
   * <p>Describes hints for the buffering to perform before delivering data to the
   *          destination. These options are treated as hints, and therefore Firehose might
   *          choose to use different values when it is optimal. The <code>SizeInMBs</code> and
   *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
   *          one of them, you must also provide a value for the other.</p>
   * @public
   */
  BufferingHints?: BufferingHints | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p> Describes how Firehose will backup records. Currently,Firehose only supports
   *          <code>FailedDataOnly</code>. </p>
   * @public
   */
  S3BackupMode?: IcebergS3BackupMode | undefined;

  /**
   * <p> The retry behavior in case Firehose is unable to deliver data to a destination.</p>
   * @public
   */
  RetryOptions?: RetryOptions | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling Apache Iceberg Tables.
   *       </p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p> Describes whether all incoming data for this delivery stream will be append only
   *          (inserts only and not for updates and deletes) for Iceberg delivery. This feature is only
   *          applicable for Apache Iceberg Tables. </p>
   *          <p>The default value is false. If you set this value to true, Firehose automatically
   *          increases the throughput limit of a stream based on the throttling levels of the stream. If
   *          you set this parameter to true for a stream with updates and deletes, you will see out of
   *          order delivery. </p>
   * @public
   */
  AppendOnly?: boolean | undefined;

  /**
   * <p>
   *          Configuration describing where the destination Iceberg tables are persisted.
   *       </p>
   * @public
   */
  CatalogConfiguration?: CatalogConfiguration | undefined;

  /**
   * <p>Describes the configuration of a destination in Amazon S3.</p>
   * @public
   */
  S3Configuration?: S3DestinationConfiguration | undefined;
}

/**
 * <p>Describes an update for a destination in Amazon Redshift.</p>
 * @public
 */
export interface RedshiftDestinationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The database connection string.</p>
   * @public
   */
  ClusterJDBCURL?: string | undefined;

  /**
   * <p>The <code>COPY</code> command.</p>
   * @public
   */
  CopyCommand?: CopyCommand | undefined;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The user password.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver documents to
   *          Amazon Redshift. Default value is 3600 (60 minutes).</p>
   * @public
   */
  RetryOptions?: RedshiftRetryOptions | undefined;

  /**
   * <p>The Amazon S3 destination.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          in <code>RedshiftDestinationUpdate.S3Update</code> because the Amazon Redshift
   *             <code>COPY</code> operation that reads from the S3 bucket doesn't support these
   *          compression formats.</p>
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>You can update a Firehose stream to enable Amazon S3 backup if it is disabled. If
   *          backup is enabled, you can't update the Firehose stream to disable it. </p>
   * @public
   */
  S3BackupMode?: RedshiftS3BackupMode | undefined;

  /**
   * <p>The Amazon S3 destination for backup.</p>
   * @public
   */
  S3BackupUpdate?: S3DestinationUpdate | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>
   *          The configuration that defines how you access secrets for Amazon Redshift.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * <p>Update to configuration settings</p>
 * @public
 */
export interface SnowflakeDestinationUpdate {
  /**
   * <p>URL for accessing your Snowflake account. This URL must include your <a href="https://docs.snowflake.com/en/user-guide/admin-account-identifier">account identifier</a>.
   *          Note that the protocol (https://) and port number are optional.</p>
   * @public
   */
  AccountUrl?: string | undefined;

  /**
   * <p>The private key used to encrypt your Snowflake client. For information, see <a href="https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation">Using Key Pair Authentication & Key Rotation</a>.</p>
   * @public
   */
  PrivateKey?: string | undefined;

  /**
   * <p>Passphrase to decrypt the private key when the key is encrypted. For information, see <a href="https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation">Using Key Pair Authentication & Key Rotation</a>.</p>
   * @public
   */
  KeyPassphrase?: string | undefined;

  /**
   * <p>User login name for the Snowflake account.</p>
   * @public
   */
  User?: string | undefined;

  /**
   * <p>All data in Snowflake is maintained in databases.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>Each database consists of one or more schemas, which are logical groupings of database objects, such as tables and views</p>
   * @public
   */
  Schema?: string | undefined;

  /**
   * <p>All data in Snowflake is stored in database tables, logically structured as collections of columns and rows.</p>
   * @public
   */
  Table?: string | undefined;

  /**
   * <p>Optionally configure a Snowflake role. Otherwise the default user role will be used.</p>
   * @public
   */
  SnowflakeRoleConfiguration?: SnowflakeRoleConfiguration | undefined;

  /**
   * <p> JSON keys mapped to table column names or choose to split the JSON payload where content is mapped to a record content column and source metadata is mapped to a record metadata column.</p>
   * @public
   */
  DataLoadingOption?: SnowflakeDataLoadingOption | undefined;

  /**
   * <p>The name of the record metadata column</p>
   * @public
   */
  MetaDataColumnName?: string | undefined;

  /**
   * <p>The name of the content metadata column</p>
   * @public
   */
  ContentColumnName?: string | undefined;

  /**
   * <p>Describes the Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>Describes a data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Snowflake role</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>Specify how long Firehose retries sending data to the New Relic HTTP endpoint.
   *
   *          After sending data, Firehose first waits for an acknowledgment from the HTTP endpoint. If an error occurs or the acknowledgment doesn’t arrive within the acknowledgment timeout period, Firehose starts the retry duration counter. It keeps retrying until the retry duration expires. After that, Firehose considers it a data delivery failure and backs up the data to your Amazon S3 bucket.
   *
   *          Every time that Firehose sends data to the HTTP endpoint (either the initial attempt or a retry), it restarts the acknowledgement timeout counter and waits for an acknowledgement from the HTTP endpoint.
   *
   *          Even if the retry duration expires, Firehose still waits for the acknowledgment until it receives it or the acknowledgement timeout period is reached. If the acknowledgment times out, Firehose determines whether there's time left in the retry counter. If there is time left, it retries again and repeats the logic until it receives an acknowledgment or determines that the retry time has expired.
   *
   *          If you don't want Firehose to retry sending data, set this value to 0.</p>
   * @public
   */
  RetryOptions?: SnowflakeRetryOptions | undefined;

  /**
   * <p>Choose an S3 backup mode. Once you set the mode as <code>AllData</code>, you can not
   *          change it to <code>FailedDataOnly</code>.</p>
   * @public
   */
  S3BackupMode?: SnowflakeS3BackupMode | undefined;

  /**
   * <p>Describes an update for a destination in Amazon S3.</p>
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * <p>
   *          Describes the Secrets Manager configuration in Snowflake.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;

  /**
   * <p>
   *          Describes the buffering to perform before delivering data to the Snowflake destination.
   *       </p>
   * @public
   */
  BufferingHints?: SnowflakeBufferingHints | undefined;
}

/**
 * <p>Describes an update for a destination in Splunk.</p>
 * @public
 */
export interface SplunkDestinationUpdate {
  /**
   * <p>The HTTP Event Collector (HEC) endpoint to which Firehose sends your
   *          data.</p>
   * @public
   */
  HECEndpoint?: string | undefined;

  /**
   * <p>This type can be either "Raw" or "Event."</p>
   * @public
   */
  HECEndpointType?: HECEndpointType | undefined;

  /**
   * <p>A GUID that you obtain from your Splunk cluster when you create a new HEC
   *          endpoint.</p>
   * @public
   */
  HECToken?: string | undefined;

  /**
   * <p>The amount of time that Firehose waits to receive an acknowledgment from
   *          Splunk after it sends data. At the end of the timeout period, Firehose either
   *          tries to send the data again or considers it an error, based on your retry
   *          settings.</p>
   * @public
   */
  HECAcknowledgmentTimeoutInSeconds?: number | undefined;

  /**
   * <p>The retry behavior in case Firehose is unable to deliver data to Splunk
   *          or if it doesn't receive an acknowledgment of receipt from Splunk.</p>
   * @public
   */
  RetryOptions?: SplunkRetryOptions | undefined;

  /**
   * <p>Specifies how you want Firehose to back up documents to Amazon S3. When
   *          set to <code>FailedDocumentsOnly</code>, Firehose writes any data that could
   *          not be indexed to the configured Amazon S3 destination. When set to <code>AllEvents</code>,
   *          Firehose delivers all incoming records to Amazon S3, and also writes failed
   *          documents to Amazon S3. The default value is <code>FailedEventsOnly</code>.</p>
   *          <p>You can update this backup mode from <code>FailedEventsOnly</code> to
   *             <code>AllEvents</code>. You can't update it from <code>AllEvents</code> to
   *             <code>FailedEventsOnly</code>.</p>
   * @public
   */
  S3BackupMode?: SplunkS3BackupMode | undefined;

  /**
   * <p>Your update to the configuration of the backup Amazon S3 location.</p>
   * @public
   */
  S3Update?: S3DestinationUpdate | undefined;

  /**
   * <p>The data processing configuration.</p>
   * @public
   */
  ProcessingConfiguration?: ProcessingConfiguration | undefined;

  /**
   * <p>The Amazon CloudWatch logging options for your Firehose stream.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions | undefined;

  /**
   * <p>The buffering options. If no value is specified, the default values for Splunk are used.</p>
   * @public
   */
  BufferingHints?: SplunkBufferingHints | undefined;

  /**
   * <p>
   *          The configuration that defines how you access secrets for Splunk.
   *       </p>
   * @public
   */
  SecretsManagerConfiguration?: SecretsManagerConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDestinationInput {
  /**
   * <p>The name of the Firehose stream.</p>
   * @public
   */
  DeliveryStreamName: string | undefined;

  /**
   * <p>Obtain this value from the <code>VersionId</code> result of <a>DeliveryStreamDescription</a>. This value is required, and helps the service
   *          perform conditional operations. For example, if there is an interleaving update and this
   *          value is null, then the update destination fails. After the update is successful, the
   *             <code>VersionId</code> value is updated. The service then performs a merge of the old
   *          configuration with the new configuration.</p>
   * @public
   */
  CurrentDeliveryStreamVersionId: string | undefined;

  /**
   * <p>The ID of the destination.</p>
   * @public
   */
  DestinationId: string | undefined;

  /**
   * <p>[Deprecated] Describes an update for a destination in Amazon S3.</p>
   *
   * @deprecated
   * @public
   */
  S3DestinationUpdate?: S3DestinationUpdate | undefined;

  /**
   * <p>Describes an update for a destination in Amazon S3.</p>
   * @public
   */
  ExtendedS3DestinationUpdate?: ExtendedS3DestinationUpdate | undefined;

  /**
   * <p>Describes an update for a destination in Amazon Redshift.</p>
   * @public
   */
  RedshiftDestinationUpdate?: RedshiftDestinationUpdate | undefined;

  /**
   * <p>Describes an update for a destination in Amazon OpenSearch Service.</p>
   * @public
   */
  ElasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate | undefined;

  /**
   * <p>Describes an update for a destination in Amazon OpenSearch Service.</p>
   * @public
   */
  AmazonopensearchserviceDestinationUpdate?: AmazonopensearchserviceDestinationUpdate | undefined;

  /**
   * <p>Describes an update for a destination in Splunk.</p>
   * @public
   */
  SplunkDestinationUpdate?: SplunkDestinationUpdate | undefined;

  /**
   * <p>Describes an update to the specified HTTP endpoint destination.</p>
   * @public
   */
  HttpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate | undefined;

  /**
   * <p>Describes an update for a destination in the Serverless offering for Amazon OpenSearch
   *          Service.</p>
   * @public
   */
  AmazonOpenSearchServerlessDestinationUpdate?: AmazonOpenSearchServerlessDestinationUpdate | undefined;

  /**
   * <p>Update to the Snowflake destination configuration settings.</p>
   * @public
   */
  SnowflakeDestinationUpdate?: SnowflakeDestinationUpdate | undefined;

  /**
   * <p>
   *          Describes an update for a destination in Apache Iceberg Tables.
   *       </p>
   * @public
   */
  IcebergDestinationUpdate?: IcebergDestinationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateDestinationOutput {}

/**
 * @internal
 */
export const HttpEndpointConfigurationFilterSensitiveLog = (obj: HttpEndpointConfiguration): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
  ...(obj.AccessKey && { AccessKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const HttpEndpointCommonAttributeFilterSensitiveLog = (obj: HttpEndpointCommonAttribute): any => ({
  ...obj,
  ...(obj.AttributeName && { AttributeName: SENSITIVE_STRING }),
  ...(obj.AttributeValue && { AttributeValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const HttpEndpointRequestConfigurationFilterSensitiveLog = (obj: HttpEndpointRequestConfiguration): any => ({
  ...obj,
  ...(obj.CommonAttributes && {
    CommonAttributes: obj.CommonAttributes.map((item) => HttpEndpointCommonAttributeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const HttpEndpointDestinationConfigurationFilterSensitiveLog = (
  obj: HttpEndpointDestinationConfiguration
): any => ({
  ...obj,
  ...(obj.EndpointConfiguration && {
    EndpointConfiguration: HttpEndpointConfigurationFilterSensitiveLog(obj.EndpointConfiguration),
  }),
  ...(obj.RequestConfiguration && {
    RequestConfiguration: HttpEndpointRequestConfigurationFilterSensitiveLog(obj.RequestConfiguration),
  }),
});

/**
 * @internal
 */
export const RedshiftDestinationConfigurationFilterSensitiveLog = (obj: RedshiftDestinationConfiguration): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SnowflakeRoleConfigurationFilterSensitiveLog = (obj: SnowflakeRoleConfiguration): any => ({
  ...obj,
  ...(obj.SnowflakeRole && { SnowflakeRole: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SnowflakeVpcConfigurationFilterSensitiveLog = (obj: SnowflakeVpcConfiguration): any => ({
  ...obj,
  ...(obj.PrivateLinkVpceId && { PrivateLinkVpceId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SnowflakeDestinationConfigurationFilterSensitiveLog = (obj: SnowflakeDestinationConfiguration): any => ({
  ...obj,
  ...(obj.AccountUrl && { AccountUrl: SENSITIVE_STRING }),
  ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
  ...(obj.KeyPassphrase && { KeyPassphrase: SENSITIVE_STRING }),
  ...(obj.User && { User: SENSITIVE_STRING }),
  ...(obj.Database && { Database: SENSITIVE_STRING }),
  ...(obj.Schema && { Schema: SENSITIVE_STRING }),
  ...(obj.Table && { Table: SENSITIVE_STRING }),
  ...(obj.SnowflakeRoleConfiguration && {
    SnowflakeRoleConfiguration: SnowflakeRoleConfigurationFilterSensitiveLog(obj.SnowflakeRoleConfiguration),
  }),
  ...(obj.MetaDataColumnName && { MetaDataColumnName: SENSITIVE_STRING }),
  ...(obj.ContentColumnName && { ContentColumnName: SENSITIVE_STRING }),
  ...(obj.SnowflakeVpcConfiguration && {
    SnowflakeVpcConfiguration: SnowflakeVpcConfigurationFilterSensitiveLog(obj.SnowflakeVpcConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateDeliveryStreamInputFilterSensitiveLog = (obj: CreateDeliveryStreamInput): any => ({
  ...obj,
  ...(obj.RedshiftDestinationConfiguration && {
    RedshiftDestinationConfiguration: RedshiftDestinationConfigurationFilterSensitiveLog(
      obj.RedshiftDestinationConfiguration
    ),
  }),
  ...(obj.HttpEndpointDestinationConfiguration && {
    HttpEndpointDestinationConfiguration: HttpEndpointDestinationConfigurationFilterSensitiveLog(
      obj.HttpEndpointDestinationConfiguration
    ),
  }),
  ...(obj.SnowflakeDestinationConfiguration && {
    SnowflakeDestinationConfiguration: SnowflakeDestinationConfigurationFilterSensitiveLog(
      obj.SnowflakeDestinationConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const HttpEndpointDescriptionFilterSensitiveLog = (obj: HttpEndpointDescription): any => ({
  ...obj,
  ...(obj.Url && { Url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const HttpEndpointDestinationDescriptionFilterSensitiveLog = (obj: HttpEndpointDestinationDescription): any => ({
  ...obj,
  ...(obj.EndpointConfiguration && {
    EndpointConfiguration: HttpEndpointDescriptionFilterSensitiveLog(obj.EndpointConfiguration),
  }),
  ...(obj.RequestConfiguration && {
    RequestConfiguration: HttpEndpointRequestConfigurationFilterSensitiveLog(obj.RequestConfiguration),
  }),
});

/**
 * @internal
 */
export const RedshiftDestinationDescriptionFilterSensitiveLog = (obj: RedshiftDestinationDescription): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SnowflakeDestinationDescriptionFilterSensitiveLog = (obj: SnowflakeDestinationDescription): any => ({
  ...obj,
  ...(obj.AccountUrl && { AccountUrl: SENSITIVE_STRING }),
  ...(obj.User && { User: SENSITIVE_STRING }),
  ...(obj.Database && { Database: SENSITIVE_STRING }),
  ...(obj.Schema && { Schema: SENSITIVE_STRING }),
  ...(obj.Table && { Table: SENSITIVE_STRING }),
  ...(obj.SnowflakeRoleConfiguration && {
    SnowflakeRoleConfiguration: SnowflakeRoleConfigurationFilterSensitiveLog(obj.SnowflakeRoleConfiguration),
  }),
  ...(obj.MetaDataColumnName && { MetaDataColumnName: SENSITIVE_STRING }),
  ...(obj.ContentColumnName && { ContentColumnName: SENSITIVE_STRING }),
  ...(obj.SnowflakeVpcConfiguration && {
    SnowflakeVpcConfiguration: SnowflakeVpcConfigurationFilterSensitiveLog(obj.SnowflakeVpcConfiguration),
  }),
});

/**
 * @internal
 */
export const DestinationDescriptionFilterSensitiveLog = (obj: DestinationDescription): any => ({
  ...obj,
  ...(obj.RedshiftDestinationDescription && {
    RedshiftDestinationDescription: RedshiftDestinationDescriptionFilterSensitiveLog(
      obj.RedshiftDestinationDescription
    ),
  }),
  ...(obj.HttpEndpointDestinationDescription && {
    HttpEndpointDestinationDescription: HttpEndpointDestinationDescriptionFilterSensitiveLog(
      obj.HttpEndpointDestinationDescription
    ),
  }),
  ...(obj.SnowflakeDestinationDescription && {
    SnowflakeDestinationDescription: SnowflakeDestinationDescriptionFilterSensitiveLog(
      obj.SnowflakeDestinationDescription
    ),
  }),
});

/**
 * @internal
 */
export const DeliveryStreamDescriptionFilterSensitiveLog = (obj: DeliveryStreamDescription): any => ({
  ...obj,
  ...(obj.Destinations && {
    Destinations: obj.Destinations.map((item) => DestinationDescriptionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeDeliveryStreamOutputFilterSensitiveLog = (obj: DescribeDeliveryStreamOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpEndpointDestinationUpdateFilterSensitiveLog = (obj: HttpEndpointDestinationUpdate): any => ({
  ...obj,
  ...(obj.EndpointConfiguration && {
    EndpointConfiguration: HttpEndpointConfigurationFilterSensitiveLog(obj.EndpointConfiguration),
  }),
  ...(obj.RequestConfiguration && {
    RequestConfiguration: HttpEndpointRequestConfigurationFilterSensitiveLog(obj.RequestConfiguration),
  }),
});

/**
 * @internal
 */
export const RedshiftDestinationUpdateFilterSensitiveLog = (obj: RedshiftDestinationUpdate): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SnowflakeDestinationUpdateFilterSensitiveLog = (obj: SnowflakeDestinationUpdate): any => ({
  ...obj,
  ...(obj.AccountUrl && { AccountUrl: SENSITIVE_STRING }),
  ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
  ...(obj.KeyPassphrase && { KeyPassphrase: SENSITIVE_STRING }),
  ...(obj.User && { User: SENSITIVE_STRING }),
  ...(obj.Database && { Database: SENSITIVE_STRING }),
  ...(obj.Schema && { Schema: SENSITIVE_STRING }),
  ...(obj.Table && { Table: SENSITIVE_STRING }),
  ...(obj.SnowflakeRoleConfiguration && {
    SnowflakeRoleConfiguration: SnowflakeRoleConfigurationFilterSensitiveLog(obj.SnowflakeRoleConfiguration),
  }),
  ...(obj.MetaDataColumnName && { MetaDataColumnName: SENSITIVE_STRING }),
  ...(obj.ContentColumnName && { ContentColumnName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDestinationInputFilterSensitiveLog = (obj: UpdateDestinationInput): any => ({
  ...obj,
  ...(obj.RedshiftDestinationUpdate && {
    RedshiftDestinationUpdate: RedshiftDestinationUpdateFilterSensitiveLog(obj.RedshiftDestinationUpdate),
  }),
  ...(obj.HttpEndpointDestinationUpdate && {
    HttpEndpointDestinationUpdate: HttpEndpointDestinationUpdateFilterSensitiveLog(obj.HttpEndpointDestinationUpdate),
  }),
  ...(obj.SnowflakeDestinationUpdate && {
    SnowflakeDestinationUpdate: SnowflakeDestinationUpdateFilterSensitiveLog(obj.SnowflakeDestinationUpdate),
  }),
});

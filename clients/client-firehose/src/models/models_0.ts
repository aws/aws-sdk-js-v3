// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { FirehoseServiceException as __BaseException } from "./FirehoseServiceException";

/**
 * @public
 * <p>Describes the buffering to perform before delivering data to the Serverless offering for
 *          Amazon OpenSearch Service destination.</p>
 */
export interface AmazonOpenSearchServerlessBufferingHints {
  /**
   * @public
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering it
   *          to the destination. The default value is 300 (5 minutes).</p>
   */
  IntervalInSeconds?: number;

  /**
   * @public
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the
   *          destination. The default value is 5. </p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the delivery stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MB/sec, the value should be 10 MB or higher.</p>
   */
  SizeInMBs?: number;
}

/**
 * @public
 * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
 */
export interface CloudWatchLoggingOptions {
  /**
   * @public
   * <p>Enables or disables CloudWatch logging.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The CloudWatch group name for logging. This value is required if CloudWatch logging
   *          is enabled.</p>
   */
  LogGroupName?: string;

  /**
   * @public
   * <p>The CloudWatch log stream name for logging. This value is required if CloudWatch
   *          logging is enabled.</p>
   */
  LogStreamName?: string;
}

/**
 * @public
 * @enum
 */
export const ProcessorParameterName = {
  BUFFER_INTERVAL_IN_SECONDS: "BufferIntervalInSeconds",
  BUFFER_SIZE_IN_MB: "BufferSizeInMBs",
  COMPRESSION_FORMAT: "CompressionFormat",
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
 * @public
 * <p>Describes the processor parameter. </p>
 */
export interface ProcessorParameter {
  /**
   * @public
   * <p>The name of the parameter. Currently the following default values are supported: 3
   *          for <code>NumberOfRetries</code> and 60 for the <code>BufferIntervalInSeconds</code>. The
   *             <code>BufferSizeInMBs</code> ranges between 0.2 MB and up to 3MB. The default buffering
   *          hint is 1MB for all destinations, except Splunk. For Splunk, the default buffering hint is
   *          256 KB. </p>
   */
  ParameterName: ProcessorParameterName | undefined;

  /**
   * @public
   * <p>The parameter value.</p>
   */
  ParameterValue: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProcessorType = {
  AppendDelimiterToRecord: "AppendDelimiterToRecord",
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
 * @public
 * <p>Describes a data processor.</p>
 */
export interface Processor {
  /**
   * @public
   * <p>The type of processor.</p>
   */
  Type: ProcessorType | undefined;

  /**
   * @public
   * <p>The processor parameters.</p>
   */
  Parameters?: ProcessorParameter[];
}

/**
 * @public
 * <p>Describes a data processing configuration.</p>
 */
export interface ProcessingConfiguration {
  /**
   * @public
   * <p>Enables or disables data processing.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The data processors.</p>
   */
  Processors?: Processor[];
}

/**
 * @public
 * <p>Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents
 *          to the Serverless offering for Amazon OpenSearch Service.</p>
 */
export interface AmazonOpenSearchServerlessRetryOptions {
  /**
   * @public
   * <p>After an initial failure to deliver to the Serverless offering for Amazon OpenSearch
   *          Service, the total amount of time during which Kinesis Data Firehose retries delivery
   *          (including the first attempt). After this time has elapsed, the failed documents are
   *          written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results
   *          in no retries.</p>
   */
  DurationInSeconds?: number;
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
 * @public
 * <p>Describes hints for the buffering to perform before delivering data to the
 *          destination. These options are treated as hints, and therefore Kinesis Data Firehose might
 *          choose to use different values when it is optimal. The <code>SizeInMBs</code> and
 *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
 *          one of them, you must also provide a value for the other.</p>
 */
export interface BufferingHints {
  /**
   * @public
   * <p>Buffer incoming data to the specified size, in MiBs, before delivering it to the
   *          destination. The default value is 5. This parameter is optional but if you specify a value
   *          for it, you must also specify a value for <code>IntervalInSeconds</code>, and vice
   *          versa.</p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the delivery stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MiB/sec, the value should be 10 MiB or higher.</p>
   */
  SizeInMBs?: number;

  /**
   * @public
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering
   *          it to the destination. The default value is 300. This parameter is optional but if you
   *          specify a value for it, you must also specify a value for <code>SizeInMBs</code>, and vice
   *          versa.</p>
   */
  IntervalInSeconds?: number;
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
 * @public
 * <p>Describes an encryption key for a destination in Amazon S3.</p>
 */
export interface KMSEncryptionConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the encryption key. Must belong to the same Amazon Web Services Region as the destination Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p>
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
 * @public
 * <p>Describes the encryption for a destination in Amazon S3.</p>
 */
export interface EncryptionConfiguration {
  /**
   * @public
   * <p>Specifically override existing encryption information to ensure that no encryption is
   *          used.</p>
   */
  NoEncryptionConfig?: NoEncryptionConfig;

  /**
   * @public
   * <p>The encryption key.</p>
   */
  KMSEncryptionConfig?: KMSEncryptionConfig;
}

/**
 * @public
 * <p>Describes the configuration of a destination in Amazon S3.</p>
 */
export interface S3DestinationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * @public
   * <p>The buffering option. If no value is specified, <code>BufferingHints</code> object
   *          default values are used.</p>
   */
  BufferingHints?: BufferingHints;

  /**
   * @public
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          for Amazon Redshift destinations because they are not supported by the Amazon Redshift
   *             <code>COPY</code> operation that reads from the S3 bucket.</p>
   */
  CompressionFormat?: CompressionFormat;

  /**
   * @public
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

/**
 * @public
 * <p>The details of the VPC of the Amazon OpenSearch or Amazon OpenSearch Serverless
 *          destination.</p>
 */
export interface VpcConfiguration {
  /**
   * @public
   * <p>The IDs of the subnets that you want Kinesis Data Firehose to use to create ENIs in the
   *          VPC of the Amazon ES destination. Make sure that the routing tables and inbound and
   *          outbound rules allow traffic to flow from the subnets whose IDs are specified here to the
   *          subnets that have the destination Amazon ES endpoints. Kinesis Data Firehose creates at
   *          least one ENI in each of the subnets that are specified here. Do not delete or modify these
   *          ENIs.</p>
   *          <p>The number of ENIs that Kinesis Data Firehose creates in the subnets specified here
   *          scales up and down automatically based on throughput. To enable Kinesis Data Firehose to
   *          scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To
   *          help you calculate the quota you need, assume that Kinesis Data Firehose can create up to
   *          three ENIs for this delivery stream for each of the subnets specified here. For more
   *          information about ENI quota, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-enis">Network Interfaces
   *          </a> in the Amazon VPC Quotas topic.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role that you want the delivery stream to use to create endpoints in
   *          the destination VPC. You can use your existing Kinesis Data Firehose delivery role or you
   *          can specify a new role. In either case, make sure that the role trusts the Kinesis Data
   *          Firehose service principal and that it grants the following permissions:</p>
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
   *          <p>If you revoke these permissions after you create the delivery stream, Kinesis Data
   *          Firehose can't scale out by creating more ENIs when necessary. You might therefore see a
   *          degradation in performance.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The IDs of the security groups that you want Kinesis Data Firehose to use when it
   *          creates ENIs in the VPC of the Amazon ES destination. You can use the same security group
   *          that the Amazon ES domain uses or different ones. If you specify different security groups
   *          here, ensure that they allow outbound HTTPS traffic to the Amazon ES domain's security
   *          group. Also ensure that the Amazon ES domain's security group allows HTTPS traffic from the
   *          security groups specified here. If you use the same security group for both your delivery
   *          stream and the Amazon ES domain, make sure the security group inbound rule allows HTTPS
   *          traffic. For more information about security group rules, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules">Security group
   *             rules</a> in the Amazon VPC documentation.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 * <p>Describes the configuration of a destination in the Serverless offering for Amazon
 *          OpenSearch Service.</p>
 */
export interface AmazonOpenSearchServerlessDestinationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose
   *          for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for
   *          indexing documents.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The endpoint to use when communicating with the collection in the Serverless offering
   *          for Amazon OpenSearch Service.</p>
   */
  CollectionEndpoint?: string;

  /**
   * @public
   * <p>The Serverless offering for Amazon OpenSearch Service index name.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>The buffering options. If no value is specified, the default values for
   *          AmazonopensearchserviceBufferingHints are used.</p>
   */
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to the
   *          Serverless offering for Amazon OpenSearch Service. The default value is 300 (5
   *          minutes).</p>
   */
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions;

  /**
   * @public
   * <p>Defines how documents should be delivered to Amazon S3. When it is set to
   *          FailedDocumentsOnly, Kinesis Data Firehose writes any documents that could not be indexed
   *          to the configured Amazon S3 destination, with AmazonOpenSearchService-failed/ appended to
   *          the key prefix. When set to AllDocuments, Kinesis Data Firehose delivers all incoming
   *          records to Amazon S3, and also writes failed documents with AmazonOpenSearchService-failed/
   *          appended to the prefix.</p>
   */
  S3BackupMode?: AmazonOpenSearchServerlessS3BackupMode;

  /**
   * @public
   * <p>Describes the configuration of a destination in Amazon S3.</p>
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * @public
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The details of the VPC of the Amazon OpenSearch or Amazon OpenSearch Serverless
   *          destination.</p>
   */
  VpcConfiguration?: VpcConfiguration;
}

/**
 * @public
 * <p>Describes a destination in Amazon S3.</p>
 */
export interface S3DestinationDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * @public
   * <p>The buffering option. If no value is specified, <code>BufferingHints</code> object
   *          default values are used.</p>
   */
  BufferingHints: BufferingHints | undefined;

  /**
   * @public
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   */
  CompressionFormat: CompressionFormat | undefined;

  /**
   * @public
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * @public
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

/**
 * @public
 * <p>The details of the VPC of the Amazon ES destination.</p>
 */
export interface VpcConfigurationDescription {
  /**
   * @public
   * <p>The IDs of the subnets that Kinesis Data Firehose uses to create ENIs in the VPC of the
   *          Amazon ES destination. Make sure that the routing tables and inbound and outbound rules
   *          allow traffic to flow from the subnets whose IDs are specified here to the subnets that
   *          have the destination Amazon ES endpoints. Kinesis Data Firehose creates at least one ENI in
   *          each of the subnets that are specified here. Do not delete or modify these ENIs.</p>
   *          <p>The number of ENIs that Kinesis Data Firehose creates in the subnets specified here
   *          scales up and down automatically based on throughput. To enable Kinesis Data Firehose to
   *          scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To
   *          help you calculate the quota you need, assume that Kinesis Data Firehose can create up to
   *          three ENIs for this delivery stream for each of the subnets specified here. For more
   *          information about ENI quota, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-enis">Network Interfaces
   *          </a> in the Amazon VPC Quotas topic.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role that the delivery stream uses to create endpoints in the
   *          destination VPC. You can use your existing Kinesis Data Firehose delivery role or you can
   *          specify a new role. In either case, make sure that the role trusts the Kinesis Data
   *          Firehose service principal and that it grants the following permissions:</p>
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
   *          <p>If you revoke these permissions after you create the delivery stream, Kinesis Data
   *          Firehose can't scale out by creating more ENIs when necessary. You might therefore see a
   *          degradation in performance.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The IDs of the security groups that Kinesis Data Firehose uses when it creates ENIs in
   *          the VPC of the Amazon ES destination. You can use the same security group that the Amazon
   *          ES domain uses or different ones. If you specify different security groups, ensure that
   *          they allow outbound HTTPS traffic to the Amazon ES domain's security group. Also ensure
   *          that the Amazon ES domain's security group allows HTTPS traffic from the security groups
   *          specified here. If you use the same security group for both your delivery stream and the
   *          Amazon ES domain, make sure the security group inbound rule allows HTTPS traffic. For more
   *          information about security group rules, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#SecurityGroupRules">Security group
   *             rules</a> in the Amazon VPC documentation.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>The ID of the Amazon ES destination's VPC.</p>
   */
  VpcId: string | undefined;
}

/**
 * @public
 * <p>The destination description in the Serverless offering for Amazon OpenSearch
 *          Service.</p>
 */
export interface AmazonOpenSearchServerlessDestinationDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The endpoint to use when communicating with the collection in the Serverless offering
   *          for Amazon OpenSearch Service.</p>
   */
  CollectionEndpoint?: string;

  /**
   * @public
   * <p>The Serverless offering for Amazon OpenSearch Service index name.</p>
   */
  IndexName?: string;

  /**
   * @public
   * <p>The buffering options.</p>
   */
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints;

  /**
   * @public
   * <p>The Serverless offering for Amazon OpenSearch Service retry options.</p>
   */
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions;

  /**
   * @public
   * <p>The Amazon S3 backup mode.</p>
   */
  S3BackupMode?: AmazonOpenSearchServerlessS3BackupMode;

  /**
   * @public
   * <p>Describes a destination in Amazon S3.</p>
   */
  S3DestinationDescription?: S3DestinationDescription;

  /**
   * @public
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The details of the VPC of the Amazon ES destination.</p>
   */
  VpcConfigurationDescription?: VpcConfigurationDescription;
}

/**
 * @public
 * <p>Describes an update for a destination in Amazon S3.</p>
 */
export interface S3DestinationUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  BucketARN?: string;

  /**
   * @public
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * @public
   * <p>The buffering option. If no value is specified, <code>BufferingHints</code> object
   *          default values are used.</p>
   */
  BufferingHints?: BufferingHints;

  /**
   * @public
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          for Amazon Redshift destinations because they are not supported by the Amazon Redshift
   *             <code>COPY</code> operation that reads from the S3 bucket.</p>
   */
  CompressionFormat?: CompressionFormat;

  /**
   * @public
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

/**
 * @public
 * <p>Describes an update for a destination in the Serverless offering for Amazon OpenSearch
 *          Service.</p>
 */
export interface AmazonOpenSearchServerlessDestinationUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose
   *          for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for
   *          indexing documents.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The endpoint to use when communicating with the collection in the Serverless offering
   *          for Amazon OpenSearch Service.</p>
   */
  CollectionEndpoint?: string;

  /**
   * @public
   * <p>The Serverless offering for Amazon OpenSearch Service index name.</p>
   */
  IndexName?: string;

  /**
   * @public
   * <p>The buffering options. If no value is specified, AmazonopensearchBufferingHints object
   *          default values are used.</p>
   */
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to the
   *          Serverless offering for Amazon OpenSearch Service. The default value is 300 (5
   *          minutes).</p>
   */
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions;

  /**
   * @public
   * <p>Describes an update for a destination in Amazon S3.</p>
   */
  S3Update?: S3DestinationUpdate;

  /**
   * @public
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

/**
 * @public
 * <p>Describes the buffering to perform before delivering data to the Amazon OpenSearch
 *          Service destination. </p>
 */
export interface AmazonopensearchserviceBufferingHints {
  /**
   * @public
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering it
   *          to the destination. The default value is 300 (5 minutes). </p>
   */
  IntervalInSeconds?: number;

  /**
   * @public
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the
   *          destination. The default value is 5.</p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the delivery stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MB/sec, the value should be 10 MB or higher. </p>
   */
  SizeInMBs?: number;
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
 * @public
 * <p>Indicates the method for setting up document ID. The supported methods are Kinesis Data
 *          Firehose generated document ID and OpenSearch Service generated document ID.</p>
 *          <p></p>
 */
export interface DocumentIdOptions {
  /**
   * @public
   * <p>When the <code>FIREHOSE_DEFAULT</code> option is chosen, Kinesis Data Firehose generates
   *          a unique document ID for each record based on a unique internal identifier. The generated
   *          document ID is stable across multiple delivery attempts, which helps prevent the same
   *          record from being indexed multiple times with different document IDs.</p>
   *          <p>When the <code>NO_DOCUMENT_ID</code> option is chosen, Kinesis Data Firehose does not
   *          include any document IDs in the requests it sends to the Amazon OpenSearch Service. This
   *          causes the Amazon OpenSearch Service domain to generate document IDs. In case of multiple
   *          delivery attempts, this may cause the same record to be indexed more than once with
   *          different document IDs. This option enables write-heavy operations, such as the ingestion
   *          of logs and observability data, to consume less resources in the Amazon OpenSearch Service
   *          domain, resulting in improved performance.</p>
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
 * @public
 * <p>Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents
 *          to Amazon OpenSearch Service. </p>
 */
export interface AmazonopensearchserviceRetryOptions {
  /**
   * @public
   * <p>After an initial failure to deliver to Amazon OpenSearch Service, the total amount of
   *          time during which Kinesis Data Firehose retries delivery (including the first attempt).
   *          After this time has elapsed, the failed documents are written to Amazon S3. Default value
   *          is 300 seconds (5 minutes). A value of 0 (zero) results in no retries. </p>
   */
  DurationInSeconds?: number;
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
 * @public
 * <p>Describes the configuration of a destination in Amazon OpenSearch Service</p>
 */
export interface AmazonopensearchserviceDestinationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose
   *          for calling the Amazon OpenSearch Service Configuration API and for indexing
   *          documents.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions for
   *          DescribeElasticsearchDomain, DescribeElasticsearchDomains, and
   *          DescribeElasticsearchDomainConfig after assuming the role specified in RoleARN. </p>
   */
  DomainARN?: string;

  /**
   * @public
   * <p>The endpoint to use when communicating with the cluster. Specify either this
   *          ClusterEndpoint or the DomainARN field. </p>
   */
  ClusterEndpoint?: string;

  /**
   * @public
   * <p>The ElasticsearAmazon OpenSearch Service index name.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>The Amazon OpenSearch Service type name. For Elasticsearch 6.x, there can be only one
   *          type per index. If you try to specify a new type for an existing index that already has
   *          another type, Kinesis Data Firehose returns an error during run time. </p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The Amazon OpenSearch Service index rotation period. Index rotation appends a timestamp
   *          to the IndexName to facilitate the expiration of old data.</p>
   */
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod;

  /**
   * @public
   * <p>The buffering options. If no value is specified, the default values for
   *          AmazonopensearchserviceBufferingHints are used. </p>
   */
  BufferingHints?: AmazonopensearchserviceBufferingHints;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon OpenSearch Service. The default value is 300 (5 minutes). </p>
   */
  RetryOptions?: AmazonopensearchserviceRetryOptions;

  /**
   * @public
   * <p>Defines how documents should be delivered to Amazon S3. When it is set to
   *          FailedDocumentsOnly, Kinesis Data Firehose writes any documents that could not be indexed
   *          to the configured Amazon S3 destination, with AmazonOpenSearchService-failed/ appended to
   *          the key prefix. When set to AllDocuments, Kinesis Data Firehose delivers all incoming
   *          records to Amazon S3, and also writes failed documents with AmazonOpenSearchService-failed/
   *          appended to the prefix. </p>
   */
  S3BackupMode?: AmazonopensearchserviceS3BackupMode;

  /**
   * @public
   * <p>Describes the configuration of a destination in Amazon S3.</p>
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * @public
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The details of the VPC of the Amazon OpenSearch or Amazon OpenSearch Serverless
   *          destination.</p>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>Indicates the method for setting up document ID. The supported methods are Kinesis Data
   *          Firehose generated document ID and OpenSearch Service generated document ID.</p>
   */
  DocumentIdOptions?: DocumentIdOptions;
}

/**
 * @public
 * <p>The destination description in Amazon OpenSearch Service.</p>
 */
export interface AmazonopensearchserviceDestinationDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. </p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The ARN of the Amazon OpenSearch Service domain.</p>
   */
  DomainARN?: string;

  /**
   * @public
   * <p>The endpoint to use when communicating with the cluster. Kinesis Data Firehose uses
   *          either this ClusterEndpoint or the DomainARN field to send data to Amazon OpenSearch
   *          Service. </p>
   */
  ClusterEndpoint?: string;

  /**
   * @public
   * <p>The Amazon OpenSearch Service index name.</p>
   */
  IndexName?: string;

  /**
   * @public
   * <p>The Amazon OpenSearch Service type name. This applies to Elasticsearch 6.x and lower
   *          versions. For Elasticsearch 7.x and OpenSearch Service 1.x, there's no value for TypeName. </p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The Amazon OpenSearch Service index rotation period</p>
   */
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod;

  /**
   * @public
   * <p>The buffering options.</p>
   */
  BufferingHints?: AmazonopensearchserviceBufferingHints;

  /**
   * @public
   * <p>The Amazon OpenSearch Service retry options.</p>
   */
  RetryOptions?: AmazonopensearchserviceRetryOptions;

  /**
   * @public
   * <p>The Amazon S3 backup mode.</p>
   */
  S3BackupMode?: AmazonopensearchserviceS3BackupMode;

  /**
   * @public
   * <p>Describes a destination in Amazon S3.</p>
   */
  S3DestinationDescription?: S3DestinationDescription;

  /**
   * @public
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The details of the VPC of the Amazon ES destination.</p>
   */
  VpcConfigurationDescription?: VpcConfigurationDescription;

  /**
   * @public
   * <p>Indicates the method for setting up document ID. The supported methods are Kinesis Data
   *          Firehose generated document ID and OpenSearch Service generated document ID.</p>
   */
  DocumentIdOptions?: DocumentIdOptions;
}

/**
 * @public
 * <p>Describes an update for a destination in Amazon OpenSearch Service.</p>
 */
export interface AmazonopensearchserviceDestinationUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose
   *          for calling the Amazon OpenSearch Service Configuration API and for indexing documents.
   *       </p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The ARN of the Amazon OpenSearch Service domain. The IAM role must have permissions for
   *          DescribeDomain, DescribeDomains, and DescribeDomainConfig after assuming the IAM role
   *          specified in RoleARN.</p>
   */
  DomainARN?: string;

  /**
   * @public
   * <p>The endpoint to use when communicating with the cluster. Specify either this
   *          ClusterEndpoint or the DomainARN field. </p>
   */
  ClusterEndpoint?: string;

  /**
   * @public
   * <p>The Amazon OpenSearch Service index name.</p>
   */
  IndexName?: string;

  /**
   * @public
   * <p>The Amazon OpenSearch Service type name. For Elasticsearch 6.x, there can be only one
   *          type per index. If you try to specify a new type for an existing index that already has
   *          another type, Kinesis Data Firehose returns an error during runtime. </p>
   *          <p>If you upgrade Elasticsearch from 6.x to 7.x and don’t update your delivery stream,
   *          Kinesis Data Firehose still delivers data to Elasticsearch with the old index name and type
   *          name. If you want to update your delivery stream with a new index name, provide an empty
   *          string for TypeName. </p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The Amazon OpenSearch Service index rotation period. Index rotation appends a timestamp
   *          to IndexName to facilitate the expiration of old data.</p>
   */
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod;

  /**
   * @public
   * <p>The buffering options. If no value is specified, AmazonopensearchBufferingHints object
   *          default values are used. </p>
   */
  BufferingHints?: AmazonopensearchserviceBufferingHints;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon OpenSearch Service. The default value is 300 (5 minutes). </p>
   */
  RetryOptions?: AmazonopensearchserviceRetryOptions;

  /**
   * @public
   * <p>Describes an update for a destination in Amazon S3.</p>
   */
  S3Update?: S3DestinationUpdate;

  /**
   * @public
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>Indicates the method for setting up document ID. The supported methods are Kinesis Data
   *          Firehose generated document ID and OpenSearch Service generated document ID.</p>
   */
  DocumentIdOptions?: DocumentIdOptions;
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
 * @public
 * <p>The authentication configuration of the Amazon MSK cluster.</p>
 */
export interface AuthenticationConfiguration {
  /**
   * @public
   * <p>The ARN of the role used to access the Amazon MSK cluster.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The type of connectivity used to access the Amazon MSK cluster.</p>
   */
  Connectivity: Connectivity | undefined;
}

/**
 * @public
 * <p>Another modification has already happened. Fetch <code>VersionId</code> again and use
 *          it to update the destination.</p>
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
 * @public
 * <p>Describes a <code>COPY</code> command for Amazon Redshift.</p>
 */
export interface CopyCommand {
  /**
   * @public
   * <p>The name of the target table. The table must already exist in the database.</p>
   */
  DataTableName: string | undefined;

  /**
   * @public
   * <p>A comma-separated list of column names.</p>
   */
  DataTableColumns?: string;

  /**
   * @public
   * <p>Optional parameters to use with the Amazon Redshift <code>COPY</code> command. For
   *          more information, see the "Optional Parameters" section of <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_COPY.html">Amazon Redshift COPY command</a>. Some possible
   *          examples that would apply to Kinesis Data Firehose are as follows:</p>
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
   */
  CopyOptions?: string;
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
 * @public
 * <p>Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side
 *          Encryption (SSE). </p>
 */
export interface DeliveryStreamEncryptionConfigurationInput {
  /**
   * @public
   * <p>If you set <code>KeyType</code> to <code>CUSTOMER_MANAGED_CMK</code>, you must specify
   *          the Amazon Resource Name (ARN) of the CMK. If you set <code>KeyType</code> to <code>Amazon Web Services_OWNED_CMK</code>, Kinesis Data Firehose uses a service-account CMK.</p>
   */
  KeyARN?: string;

  /**
   * @public
   * <p>Indicates the type of customer master key (CMK) to use for encryption. The default
   *          setting is <code>Amazon Web Services_OWNED_CMK</code>. For more information about CMKs, see
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">Customer Master Keys (CMKs)</a>. When you invoke <a>CreateDeliveryStream</a> or <a>StartDeliveryStreamEncryption</a> with
   *             <code>KeyType</code> set to CUSTOMER_MANAGED_CMK, Kinesis Data Firehose invokes the
   *          Amazon KMS operation <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html">CreateGrant</a> to create a grant
   *          that allows the Kinesis Data Firehose service to use the customer managed CMK to perform
   *          encryption and decryption. Kinesis Data Firehose manages that grant. </p>
   *          <p>When you invoke <a>StartDeliveryStreamEncryption</a> to change the CMK for a
   *          delivery stream that is encrypted with a customer managed CMK, Kinesis Data Firehose
   *          schedules the grant it had on the old CMK for retirement.</p>
   *          <p>You can use a CMK of type CUSTOMER_MANAGED_CMK to encrypt up to 500 delivery streams. If
   *          a <a>CreateDeliveryStream</a> or <a>StartDeliveryStreamEncryption</a>
   *          operation exceeds this limit, Kinesis Data Firehose throws a
   *             <code>LimitExceededException</code>. </p>
   *          <important>
   *             <p>To encrypt your delivery stream, use symmetric CMKs. Kinesis Data Firehose doesn't
   *             support asymmetric CMKs. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html">About
   *                Symmetric and Asymmetric CMKs</a> in the Amazon Web Services Key Management
   *             Service developer guide.</p>
   *          </important>
   */
  KeyType: KeyType | undefined;
}

/**
 * @public
 * @enum
 */
export const DeliveryStreamType = {
  DirectPut: "DirectPut",
  KinesisStreamAsSource: "KinesisStreamAsSource",
  MSKAsSource: "MSKAsSource",
} as const;

/**
 * @public
 */
export type DeliveryStreamType = (typeof DeliveryStreamType)[keyof typeof DeliveryStreamType];

/**
 * @public
 * <p>Describes the buffering to perform before delivering data to the Amazon ES
 *          destination.</p>
 */
export interface ElasticsearchBufferingHints {
  /**
   * @public
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering
   *          it to the destination. The default value is 300 (5 minutes).</p>
   */
  IntervalInSeconds?: number;

  /**
   * @public
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the
   *          destination. The default value is 5.</p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the delivery stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MB/sec, the value should be 10 MB or higher.</p>
   */
  SizeInMBs?: number;
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
 * @public
 * <p>Configures retry behavior in case Kinesis Data Firehose is unable to deliver
 *          documents to Amazon ES.</p>
 */
export interface ElasticsearchRetryOptions {
  /**
   * @public
   * <p>After an initial failure to deliver to Amazon ES, the total amount of time during
   *          which Kinesis Data Firehose retries delivery (including the first attempt). After this time
   *          has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5
   *          minutes). A value of 0 (zero) results in no retries.</p>
   */
  DurationInSeconds?: number;
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
 * @public
 * <p>Describes the configuration of a destination in Amazon ES.</p>
 */
export interface ElasticsearchDestinationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose
   *          for calling the Amazon ES Configuration API and for indexing documents. For more
   *          information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data
   *             Firehose Access to an Amazon S3 Destination</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The ARN of the Amazon ES domain. The IAM role must have permissions
   *             for <code>DescribeDomain</code>, <code>DescribeDomains</code>, and
   *             <code>DescribeDomainConfig</code> after assuming the role specified in <b>RoleARN</b>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   *          <p>Specify either <code>ClusterEndpoint</code> or <code>DomainARN</code>.</p>
   */
  DomainARN?: string;

  /**
   * @public
   * <p>The endpoint to use when communicating with the cluster. Specify either this
   *             <code>ClusterEndpoint</code> or the <code>DomainARN</code> field.</p>
   */
  ClusterEndpoint?: string;

  /**
   * @public
   * <p>The Elasticsearch index name.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per
   *          index. If you try to specify a new type for an existing index that already has another
   *          type, Kinesis Data Firehose returns an error during run time.</p>
   *          <p>For Elasticsearch 7.x, don't specify a <code>TypeName</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The Elasticsearch index rotation period. Index rotation appends a timestamp to the
   *             <code>IndexName</code> to facilitate the expiration of old data. For more information,
   *          see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation">Index Rotation for the
   *             Amazon ES Destination</a>. The default value is <code>OneDay</code>.</p>
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;

  /**
   * @public
   * <p>The buffering options. If no value is specified, the default values for
   *             <code>ElasticsearchBufferingHints</code> are used.</p>
   */
  BufferingHints?: ElasticsearchBufferingHints;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon ES. The default value is 300 (5 minutes).</p>
   */
  RetryOptions?: ElasticsearchRetryOptions;

  /**
   * @public
   * <p>Defines how documents should be delivered to Amazon S3. When it is set to
   *             <code>FailedDocumentsOnly</code>, Kinesis Data Firehose writes any documents that could
   *          not be indexed to the configured Amazon S3 destination, with
   *             <code>AmazonOpenSearchService-failed/</code> appended to the key prefix. When set to
   *             <code>AllDocuments</code>, Kinesis Data Firehose delivers all incoming records to Amazon
   *          S3, and also writes failed documents with <code>AmazonOpenSearchService-failed/</code>
   *          appended to the prefix. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-s3-backup">Amazon S3 Backup for the
   *             Amazon ES Destination</a>. Default value is
   *          <code>FailedDocumentsOnly</code>.</p>
   *          <p>You can't change this backup mode after you create the delivery stream. </p>
   */
  S3BackupMode?: ElasticsearchS3BackupMode;

  /**
   * @public
   * <p>The configuration for the backup Amazon S3 location.</p>
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The details of the VPC of the Amazon destination.</p>
   */
  VpcConfiguration?: VpcConfiguration;

  /**
   * @public
   * <p>Indicates the method for setting up document ID. The supported methods are Kinesis Data
   *          Firehose generated document ID and OpenSearch Service generated document ID.</p>
   */
  DocumentIdOptions?: DocumentIdOptions;
}

/**
 * @public
 * <p>The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing
 *          data, which means converting it from the JSON format in preparation for serializing it to
 *          the Parquet or ORC format. This is one of two deserializers you can choose, depending on
 *          which one offers the functionality you need. The other option is the OpenX SerDe.</p>
 */
export interface HiveJsonSerDe {
  /**
   * @public
   * <p>Indicates how you want Kinesis Data Firehose to parse the date and timestamps that
   *          may be present in your input data JSON. To specify these format strings, follow the pattern
   *          syntax of JodaTime's DateTimeFormat format strings. For more information, see <a href="https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html">Class DateTimeFormat</a>. You can also use the special value <code>millis</code> to
   *          parse timestamps in epoch milliseconds. If you don't specify a format, Kinesis Data
   *          Firehose uses <code>java.sql.Timestamp::valueOf</code> by default.</p>
   */
  TimestampFormats?: string[];
}

/**
 * @public
 * <p>The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means
 *          converting it from the JSON format in preparation for serializing it to the Parquet or ORC
 *          format. This is one of two deserializers you can choose, depending on which one offers the
 *          functionality you need. The other option is the native Hive / HCatalog JsonSerDe.</p>
 */
export interface OpenXJsonSerDe {
  /**
   * @public
   * <p>When set to <code>true</code>, specifies that the names of the keys include dots and
   *          that you want Kinesis Data Firehose to replace them with underscores. This is useful
   *          because Apache Hive does not allow dots in column names. For example, if the JSON contains
   *          a key whose name is "a.b", you can define the column name to be "a_b" when using this
   *          option.</p>
   *          <p>The default is <code>false</code>.</p>
   */
  ConvertDotsInJsonKeysToUnderscores?: boolean;

  /**
   * @public
   * <p>When set to <code>true</code>, which is the default, Kinesis Data Firehose converts
   *          JSON keys to lowercase before deserializing them.</p>
   */
  CaseInsensitive?: boolean;

  /**
   * @public
   * <p>Maps column names to JSON keys that aren't identical to the column names. This is
   *          useful when the JSON contains keys that are Hive keywords. For example,
   *             <code>timestamp</code> is a Hive keyword. If you have a JSON key named
   *             <code>timestamp</code>, set this parameter to <code>\{"ts": "timestamp"\}</code> to map
   *          this key to a column named <code>ts</code>.</p>
   */
  ColumnToJsonKeyMappings?: Record<string, string>;
}

/**
 * @public
 * <p>The deserializer you want Kinesis Data Firehose to use for converting the input data
 *          from JSON. Kinesis Data Firehose then serializes the data to its final format using the
 *             <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers:
 *          the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>.</p>
 */
export interface Deserializer {
  /**
   * @public
   * <p>The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means
   *          converting it from the JSON format in preparation for serializing it to the Parquet or ORC
   *          format. This is one of two deserializers you can choose, depending on which one offers the
   *          functionality you need. The other option is the native Hive / HCatalog JsonSerDe.</p>
   */
  OpenXJsonSerDe?: OpenXJsonSerDe;

  /**
   * @public
   * <p>The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing
   *          data, which means converting it from the JSON format in preparation for serializing it to
   *          the Parquet or ORC format. This is one of two deserializers you can choose, depending on
   *          which one offers the functionality you need. The other option is the OpenX SerDe.</p>
   */
  HiveJsonSerDe?: HiveJsonSerDe;
}

/**
 * @public
 * <p>Specifies the deserializer you want to use to convert the format of the input data.
 *          This parameter is required if <code>Enabled</code> is set to true.</p>
 */
export interface InputFormatConfiguration {
  /**
   * @public
   * <p>Specifies which deserializer to use. You can choose either the Apache Hive JSON SerDe
   *          or the OpenX JSON SerDe. If both are non-null, the server rejects the request.</p>
   */
  Deserializer?: Deserializer;
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
 * @public
 * <p>A serializer to use for converting data to the ORC format before storing it in Amazon
 *          S3. For more information, see <a href="https://orc.apache.org/docs/">Apache
 *          ORC</a>.</p>
 */
export interface OrcSerDe {
  /**
   * @public
   * <p>The number of bytes in each stripe. The default is 64 MiB and the minimum is 8
   *          MiB.</p>
   */
  StripeSizeBytes?: number;

  /**
   * @public
   * <p>The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to
   *          copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the
   *          minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.</p>
   */
  BlockSizeBytes?: number;

  /**
   * @public
   * <p>The number of rows between index entries. The default is 10,000 and the minimum is
   *          1,000.</p>
   */
  RowIndexStride?: number;

  /**
   * @public
   * <p>Set this to <code>true</code> to indicate that you want stripes to be padded to the HDFS
   *          block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS
   *          before querying. The default is <code>false</code>.</p>
   */
  EnablePadding?: boolean;

  /**
   * @public
   * <p>A number between 0 and 1 that defines the tolerance for block padding as a decimal
   *          fraction of stripe size. The default value is 0.05, which means 5 percent of stripe
   *          size.</p>
   *          <p>For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block
   *          padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB
   *          block. In such a case, if the available size within the block is more than 3.2 MiB, a new,
   *          smaller stripe is inserted to fit within that space. This ensures that no stripe crosses
   *          block boundaries and causes remote reads within a node-local task.</p>
   *          <p>Kinesis Data Firehose ignores this parameter when <a>OrcSerDe$EnablePadding</a> is <code>false</code>.</p>
   */
  PaddingTolerance?: number;

  /**
   * @public
   * <p>The compression code to use over data blocks. The default is <code>SNAPPY</code>.</p>
   */
  Compression?: OrcCompression;

  /**
   * @public
   * <p>The column names for which you want Kinesis Data Firehose to create bloom filters. The
   *          default is <code>null</code>.</p>
   */
  BloomFilterColumns?: string[];

  /**
   * @public
   * <p>The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the
   *          Bloom filter. The default value is 0.05, the minimum is 0, and the maximum is 1.</p>
   */
  BloomFilterFalsePositiveProbability?: number;

  /**
   * @public
   * <p>Represents the fraction of the total number of non-null rows. To turn off dictionary
   *          encoding, set this fraction to a number that is less than the number of distinct keys in a
   *          dictionary. To always use dictionary encoding, set this threshold to 1.</p>
   */
  DictionaryKeyThreshold?: number;

  /**
   * @public
   * <p>The version of the file to write. The possible values are <code>V0_11</code> and
   *             <code>V0_12</code>. The default is <code>V0_12</code>.</p>
   */
  FormatVersion?: OrcFormatVersion;
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
 * @public
 * <p>A serializer to use for converting data to the Parquet format before storing it in
 *          Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.</p>
 */
export interface ParquetSerDe {
  /**
   * @public
   * <p>The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to
   *          copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the
   *          minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.</p>
   */
  BlockSizeBytes?: number;

  /**
   * @public
   * <p>The Parquet page size. Column chunks are divided into pages. A page is conceptually an
   *          indivisible unit (in terms of compression and encoding). The minimum value is 64 KiB and
   *          the default is 1 MiB.</p>
   */
  PageSizeBytes?: number;

  /**
   * @public
   * <p>The compression code to use over data blocks. The possible values are
   *             <code>UNCOMPRESSED</code>, <code>SNAPPY</code>, and <code>GZIP</code>, with the default
   *          being <code>SNAPPY</code>. Use <code>SNAPPY</code> for higher decompression speed. Use
   *             <code>GZIP</code> if the compression ratio is more important than speed.</p>
   */
  Compression?: ParquetCompression;

  /**
   * @public
   * <p>Indicates whether to enable dictionary compression.</p>
   */
  EnableDictionaryCompression?: boolean;

  /**
   * @public
   * <p>The maximum amount of padding to apply. This is useful if you intend to copy the data
   *          from Amazon S3 to HDFS before querying. The default is 0.</p>
   */
  MaxPaddingBytes?: number;

  /**
   * @public
   * <p>Indicates the version of row format to output. The possible values are <code>V1</code>
   *          and <code>V2</code>. The default is <code>V1</code>.</p>
   */
  WriterVersion?: ParquetWriterVersion;
}

/**
 * @public
 * <p>The serializer that you want Kinesis Data Firehose to use to convert data to the target
 *          format before writing it to Amazon S3. Kinesis Data Firehose supports two types of
 *          serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>.</p>
 */
export interface Serializer {
  /**
   * @public
   * <p>A serializer to use for converting data to the Parquet format before storing it in
   *          Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.</p>
   */
  ParquetSerDe?: ParquetSerDe;

  /**
   * @public
   * <p>A serializer to use for converting data to the ORC format before storing it in Amazon
   *          S3. For more information, see <a href="https://orc.apache.org/docs/">Apache
   *          ORC</a>.</p>
   */
  OrcSerDe?: OrcSerDe;
}

/**
 * @public
 * <p>Specifies the serializer that you want Kinesis Data Firehose to use to convert the
 *          format of your data before it writes it to Amazon S3. This parameter is required if
 *             <code>Enabled</code> is set to true.</p>
 */
export interface OutputFormatConfiguration {
  /**
   * @public
   * <p>Specifies which serializer to use. You can choose either the ORC SerDe or the Parquet
   *          SerDe. If both are non-null, the server rejects the request.</p>
   */
  Serializer?: Serializer;
}

/**
 * @public
 * <p>Specifies the schema to which you want Kinesis Data Firehose to configure your data
 *          before it writes it to Amazon S3. This parameter is required if <code>Enabled</code> is set
 *          to true.</p>
 */
export interface SchemaConfiguration {
  /**
   * @public
   * <p>The role that Kinesis Data Firehose can use to access Amazon Web Services Glue. This
   *          role must be in the same account you use for Kinesis Data Firehose. Cross-account roles
   *          aren't allowed.</p>
   *          <important>
   *             <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking
   *             the <code>CreateDeliveryStream</code> API, then the <code>RoleARN</code> property is
   *             required and its value must be specified.</p>
   *          </important>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services Glue Data Catalog. If you don't supply this, the
   *             Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>Specifies the name of the Amazon Web Services Glue database that contains the schema for
   *          the output data.</p>
   *          <important>
   *             <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking
   *             the <code>CreateDeliveryStream</code> API, then the <code>DatabaseName</code> property
   *             is required and its value must be specified.</p>
   *          </important>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>Specifies the Amazon Web Services Glue table that contains the column information that
   *          constitutes your data schema.</p>
   *          <important>
   *             <p>If the <code>SchemaConfiguration</code> request parameter is used as part of invoking
   *             the <code>CreateDeliveryStream</code> API, then the <code>TableName</code> property is
   *             required and its value must be specified.</p>
   *          </important>
   */
  TableName?: string;

  /**
   * @public
   * <p>If you don't specify an Amazon Web Services Region, the default is the current
   *          Region.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>Specifies the table version for the output data schema. If you don't specify this
   *          version ID, or if you set it to <code>LATEST</code>, Kinesis Data Firehose uses the most
   *          recent version. This means that any updates to the table are automatically picked
   *          up.</p>
   */
  VersionId?: string;
}

/**
 * @public
 * <p>Specifies that you want Kinesis Data Firehose to convert data from the JSON format to
 *          the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the
 *          serializer and deserializer that you specify, in addition to the column information from
 *          the Amazon Web Services Glue table, to deserialize your input data from JSON and then
 *          serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis
 *             Data Firehose Record Format Conversion</a>.</p>
 */
export interface DataFormatConversionConfiguration {
  /**
   * @public
   * <p>Specifies the Amazon Web Services Glue Data Catalog table that contains the column
   *          information. This parameter is required if <code>Enabled</code> is set to true.</p>
   */
  SchemaConfiguration?: SchemaConfiguration;

  /**
   * @public
   * <p>Specifies the deserializer that you want Kinesis Data Firehose to use to convert the
   *          format of your data from JSON. This parameter is required if <code>Enabled</code> is set to
   *          true.</p>
   */
  InputFormatConfiguration?: InputFormatConfiguration;

  /**
   * @public
   * <p>Specifies the serializer that you want Kinesis Data Firehose to use to convert the
   *          format of your data to the Parquet or ORC format. This parameter is required if
   *             <code>Enabled</code> is set to true.</p>
   */
  OutputFormatConfiguration?: OutputFormatConfiguration;

  /**
   * @public
   * <p>Defaults to <code>true</code>. Set it to <code>false</code> if you want to disable
   *          format conversion while preserving the configuration details.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p> The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon
 *          S3 prefix.</p>
 */
export interface RetryOptions {
  /**
   * @public
   * <p>The period of time during which Kinesis Data Firehose retries to deliver data to the
   *          specified Amazon S3 prefix.</p>
   */
  DurationInSeconds?: number;
}

/**
 * @public
 * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
 *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
 *          partitioning is only supported for Amazon S3 destinations.
 *          </p>
 */
export interface DynamicPartitioningConfiguration {
  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon
   *          S3 prefix.</p>
   */
  RetryOptions?: RetryOptions;

  /**
   * @public
   * <p>Specifies that the dynamic partitioning is enabled for this Kinesis Data Firehose
   *          delivery stream.</p>
   */
  Enabled?: boolean;
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
 * @public
 * <p>Describes the configuration of a destination in Amazon S3.</p>
 */
export interface ExtendedS3DestinationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * @public
   * <p>The buffering option.</p>
   */
  BufferingHints?: BufferingHints;

  /**
   * @public
   * <p>The compression format. If no value is specified, the default is
   *          UNCOMPRESSED.</p>
   */
  CompressionFormat?: CompressionFormat;

  /**
   * @public
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>The Amazon S3 backup mode. After you create a delivery stream, you can update it to
   *          enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the
   *          delivery stream to disable it. </p>
   */
  S3BackupMode?: S3BackupMode;

  /**
   * @public
   * <p>The configuration for backup in Amazon S3.</p>
   */
  S3BackupConfiguration?: S3DestinationConfiguration;

  /**
   * @public
   * <p>The serializer, deserializer, and schema for converting data from the JSON format to
   *          the Parquet or ORC format before writing it to Amazon S3.</p>
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;

  /**
   * @public
   * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
   *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
   *          partitioning is only supported for Amazon S3 destinations.
   *          </p>
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}

/**
 * @public
 * <p>Describes the buffering options that can be applied before data is delivered to the HTTP
 *          endpoint destination. Kinesis Data Firehose treats these options as hints, and it might
 *          choose to use more optimal values. The <code>SizeInMBs</code> and
 *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
 *          one of them, you must also provide a value for the other. </p>
 */
export interface HttpEndpointBufferingHints {
  /**
   * @public
   * <p>Buffer incoming data to the specified size, in MBs, before delivering it to the
   *          destination. The default value is 5. </p>
   *          <p>We recommend setting this parameter to a value greater than the amount of data you
   *          typically ingest into the delivery stream in 10 seconds. For example, if you typically
   *          ingest data at 1 MB/sec, the value should be 10 MB or higher. </p>
   */
  SizeInMBs?: number;

  /**
   * @public
   * <p>Buffer incoming data for the specified period of time, in seconds, before delivering it
   *          to the destination. The default value is 300 (5 minutes). </p>
   */
  IntervalInSeconds?: number;
}

/**
 * @public
 * <p>Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers
 *          data.</p>
 */
export interface HttpEndpointConfiguration {
  /**
   * @public
   * <p>The URL of the HTTP endpoint selected as the destination.</p>
   *          <important>
   *             <p>If you choose an HTTP endpoint as your destination, review and follow the
   *             instructions in the <a href="https://docs.aws.amazon.com/firehose/latest/dev/httpdeliveryrequestresponse.html">Appendix - HTTP Endpoint
   *                Delivery Request and Response Specifications</a>.</p>
   *          </important>
   */
  Url: string | undefined;

  /**
   * @public
   * <p>The name of the HTTP endpoint selected as the destination.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The access key required for Kinesis Firehose to authenticate with the HTTP endpoint
   *          selected as the destination.</p>
   */
  AccessKey?: string;
}

/**
 * @public
 * <p>Describes the metadata that's delivered to the specified HTTP endpoint
 *          destination.</p>
 */
export interface HttpEndpointCommonAttribute {
  /**
   * @public
   * <p>The name of the HTTP endpoint common attribute.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
   * <p>The value of the HTTP endpoint common attribute.</p>
   */
  AttributeValue: string | undefined;
}

/**
 * @public
 * <p>The configuration of the HTTP endpoint request.</p>
 */
export interface HttpEndpointRequestConfiguration {
  /**
   * @public
   * <p>Kinesis Data Firehose uses the content encoding to compress the body of a request before
   *          sending the request to the destination. For more information, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding">Content-Encoding</a> in MDN Web Docs, the official Mozilla documentation.</p>
   */
  ContentEncoding?: ContentEncoding;

  /**
   * @public
   * <p>Describes the metadata sent to the HTTP endpoint destination.</p>
   */
  CommonAttributes?: HttpEndpointCommonAttribute[];
}

/**
 * @public
 * <p>Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to
 *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
 *          receipt from the specified HTTP endpoint destination.</p>
 */
export interface HttpEndpointRetryOptions {
  /**
   * @public
   * <p>The total amount of time that Kinesis Data Firehose spends on retries. This duration
   *          starts after the initial attempt to send data to the custom destination via HTTPS endpoint
   *          fails. It doesn't include the periods during which Kinesis Data Firehose waits for
   *          acknowledgment from the specified destination after each attempt. </p>
   */
  DurationInSeconds?: number;
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
 * @public
 * <p>Describes the configuration of the HTTP endpoint destination.</p>
 */
export interface HttpEndpointDestinationConfiguration {
  /**
   * @public
   * <p>The configuration of the HTTP endpoint selected as the destination.</p>
   */
  EndpointConfiguration: HttpEndpointConfiguration | undefined;

  /**
   * @public
   * <p>The buffering options that can be used before data is delivered to the specified
   *          destination. Kinesis Data Firehose treats these options as hints, and it might choose to
   *          use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code>
   *          parameters are optional. However, if you specify a value for one of them, you must also
   *          provide a value for the other. </p>
   */
  BufferingHints?: HttpEndpointBufferingHints;

  /**
   * @public
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The configuration of the requeste sent to the HTTP endpoint specified as the
   *          destination.</p>
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration;

  /**
   * @public
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>Kinesis Data Firehose uses this IAM role for all the permissions that the delivery
   *          stream needs.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to
   *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
   *          receipt from the specified HTTP endpoint destination.</p>
   */
  RetryOptions?: HttpEndpointRetryOptions;

  /**
   * @public
   * <p>Describes the S3 bucket backup options for the data that Kinesis Data Firehose delivers
   *          to the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or
   *          only the documents that Kinesis Data Firehose could not deliver to the specified HTTP
   *          endpoint destination (<code>FailedDataOnly</code>).</p>
   */
  S3BackupMode?: HttpEndpointS3BackupMode;

  /**
   * @public
   * <p>Describes the configuration of a destination in Amazon S3.</p>
   */
  S3Configuration: S3DestinationConfiguration | undefined;
}

/**
 * @public
 * <p>The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as
 *          the source for a delivery stream.</p>
 */
export interface KinesisStreamSourceConfiguration {
  /**
   * @public
   * <p>The ARN of the source Kinesis data stream. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon
   *             Kinesis Data Streams ARN Format</a>.</p>
   */
  KinesisStreamARN: string | undefined;

  /**
   * @public
   * <p>The ARN of the role that provides access to the source Kinesis data stream. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services
   *             Identity and Access Management (IAM) ARN Format</a>.</p>
   */
  RoleARN: string | undefined;
}

/**
 * @public
 * <p>The configuration for the Amazon MSK cluster to be used as the source for a delivery
 *          stream.</p>
 */
export interface MSKSourceConfiguration {
  /**
   * @public
   * <p>The ARN of the Amazon MSK cluster.</p>
   */
  MSKClusterARN: string | undefined;

  /**
   * @public
   * <p>The topic name within the Amazon MSK cluster. </p>
   */
  TopicName: string | undefined;

  /**
   * @public
   * <p>The authentication configuration of the Amazon MSK cluster.</p>
   */
  AuthenticationConfiguration: AuthenticationConfiguration | undefined;
}

/**
 * @public
 * <p>Configures retry behavior in case Kinesis Data Firehose is unable to deliver
 *          documents to Amazon Redshift.</p>
 */
export interface RedshiftRetryOptions {
  /**
   * @public
   * <p>The length of time during which Kinesis Data Firehose retries delivery after a
   *          failure, starting from the initial request and including the first attempt. The default
   *          value is 3600 seconds (60 minutes). Kinesis Data Firehose does not retry if the value of
   *             <code>DurationInSeconds</code> is 0 (zero) or if the first delivery attempt takes longer
   *          than the current value.</p>
   */
  DurationInSeconds?: number;
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
 * @public
 * <p>Describes the configuration of a destination in Amazon Redshift.</p>
 */
export interface RedshiftDestinationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The database connection string.</p>
   */
  ClusterJDBCURL: string | undefined;

  /**
   * @public
   * <p>The <code>COPY</code> command.</p>
   */
  CopyCommand: CopyCommand | undefined;

  /**
   * @public
   * <p>The name of the user.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>The user password.</p>
   */
  Password: string | undefined;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon Redshift. Default value is 3600 (60 minutes).</p>
   */
  RetryOptions?: RedshiftRetryOptions;

  /**
   * @public
   * <p>The configuration for the intermediate Amazon S3 location from which Amazon Redshift
   *          obtains data. Restrictions are described in the topic for <a>CreateDeliveryStream</a>.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          in <code>RedshiftDestinationConfiguration.S3Configuration</code> because the Amazon
   *          Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't support these
   *          compression formats.</p>
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>The Amazon S3 backup mode. After you create a delivery stream, you can update it to
   *          enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the
   *          delivery stream to disable it. </p>
   */
  S3BackupMode?: RedshiftS3BackupMode;

  /**
   * @public
   * <p>The configuration for backup in Amazon S3.</p>
   */
  S3BackupConfiguration?: S3DestinationConfiguration;

  /**
   * @public
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
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
 * @public
 * <p>Configures retry behavior in case Kinesis Data Firehose is unable to deliver
 *          documents to Splunk, or if it doesn't receive an acknowledgment from Splunk.</p>
 */
export interface SplunkRetryOptions {
  /**
   * @public
   * <p>The total amount of time that Kinesis Data Firehose spends on retries. This duration
   *          starts after the initial attempt to send data to Splunk fails. It doesn't include the
   *          periods during which Kinesis Data Firehose waits for acknowledgment from Splunk after each
   *          attempt.</p>
   */
  DurationInSeconds?: number;
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
 * @public
 * <p>Describes the configuration of a destination in Splunk.</p>
 */
export interface SplunkDestinationConfiguration {
  /**
   * @public
   * <p>The HTTP Event Collector (HEC) endpoint to which Kinesis Data Firehose sends your
   *          data.</p>
   */
  HECEndpoint: string | undefined;

  /**
   * @public
   * <p>This type can be either "Raw" or "Event."</p>
   */
  HECEndpointType: HECEndpointType | undefined;

  /**
   * @public
   * <p>This is a GUID that you obtain from your Splunk cluster when you create a new HEC
   *          endpoint.</p>
   */
  HECToken: string | undefined;

  /**
   * @public
   * <p>The amount of time that Kinesis Data Firehose waits to receive an acknowledgment from
   *          Splunk after it sends it data. At the end of the timeout period, Kinesis Data Firehose
   *          either tries to send the data again or considers it an error, based on your retry
   *          settings.</p>
   */
  HECAcknowledgmentTimeoutInSeconds?: number;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk,
   *          or if it doesn't receive an acknowledgment of receipt from Splunk.</p>
   */
  RetryOptions?: SplunkRetryOptions;

  /**
   * @public
   * <p>Defines how documents should be delivered to Amazon S3. When set to
   *             <code>FailedEventsOnly</code>, Kinesis Data Firehose writes any data that could not be
   *          indexed to the configured Amazon S3 destination. When set to <code>AllEvents</code>,
   *          Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed
   *          documents to Amazon S3. The default value is <code>FailedEventsOnly</code>.</p>
   *          <p>You can update this backup mode from <code>FailedEventsOnly</code> to
   *             <code>AllEvents</code>. You can't update it from <code>AllEvents</code> to
   *             <code>FailedEventsOnly</code>.</p>
   */
  S3BackupMode?: SplunkS3BackupMode;

  /**
   * @public
   * <p>The configuration for the backup Amazon S3 location.</p>
   */
  S3Configuration: S3DestinationConfiguration | undefined;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

/**
 * @public
 * <p>Metadata that you can assign to a delivery stream, consisting of a key-value
 *          pair.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>A unique identifier for the tag. Maximum length: 128 characters. Valid characters:
   *          Unicode letters, digits, white space, _ . / = + - % @</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>An optional string, which you can use to describe or define the tag. Maximum length:
   *          256 characters. Valid characters: Unicode letters, digits, white space, _ . / = + - %
   *          @</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface CreateDeliveryStreamInput {
  /**
   * @public
   * <p>The name of the delivery stream. This name must be unique per Amazon Web Services
   *          account in the same Amazon Web Services Region. If the delivery streams are in different
   *          accounts or different Regions, you can have multiple delivery streams with the same
   *          name.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * @public
   * <p>The delivery stream type. This parameter can be one of the following
   *          values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DirectPut</code>: Provider applications access the delivery stream
   *                directly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data
   *                stream as a source.</p>
   *             </li>
   *          </ul>
   */
  DeliveryStreamType?: DeliveryStreamType;

  /**
   * @public
   * <p>When a Kinesis data stream is used as the source for the delivery stream, a <a>KinesisStreamSourceConfiguration</a> containing the Kinesis data stream Amazon
   *          Resource Name (ARN) and the role ARN for the source stream.</p>
   */
  KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;

  /**
   * @public
   * <p>Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for
   *          Server-Side Encryption (SSE).</p>
   */
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;

  /**
   * @public
   * @deprecated
   *
   * <p>[Deprecated]
   *          The destination in Amazon S3. You can specify only one destination.</p>
   */
  S3DestinationConfiguration?: S3DestinationConfiguration;

  /**
   * @public
   * <p>The destination in Amazon S3. You can specify only one destination.</p>
   */
  ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;

  /**
   * @public
   * <p>The destination in Amazon Redshift. You can specify only one destination.</p>
   */
  RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;

  /**
   * @public
   * <p>The destination in Amazon ES. You can specify only one destination.</p>
   */
  ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;

  /**
   * @public
   * <p>The destination in Amazon OpenSearch Service. You can specify only one
   *          destination.</p>
   */
  AmazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfiguration;

  /**
   * @public
   * <p>The destination in Splunk. You can specify only one destination.</p>
   */
  SplunkDestinationConfiguration?: SplunkDestinationConfiguration;

  /**
   * @public
   * <p>Enables configuring Kinesis Firehose to deliver data to any HTTP endpoint destination.
   *          You can specify only one destination.</p>
   */
  HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;

  /**
   * @public
   * <p>A set of tags to assign to the delivery stream. A tag is a key-value pair that you can
   *          define and assign to Amazon Web Services resources. Tags are metadata. For example, you can
   *          add friendly names and descriptions or other types of information that can help you
   *          distinguish the delivery stream. For more information about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using
   *             Cost Allocation Tags</a> in the Amazon Web Services Billing and Cost Management User
   *          Guide.</p>
   *          <p>You can specify up to 50 tags when creating a delivery stream.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The destination in the Serverless offering for Amazon OpenSearch Service. You can
   *          specify only one destination.</p>
   */
  AmazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfiguration;

  /**
   * @public
   * <p>The configuration for the Amazon MSK cluster to be used as the source for a delivery
   *          stream.</p>
   */
  MSKSourceConfiguration?: MSKSourceConfiguration;
}

/**
 * @public
 */
export interface CreateDeliveryStreamOutput {
  /**
   * @public
   * <p>The ARN of the delivery stream.</p>
   */
  DeliveryStreamARN?: string;
}

/**
 * @public
 * <p>The specified input parameter has a value that is not valid.</p>
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
 * @public
 * <p>Kinesis Data Firehose throws this exception when an attempt to put records or to start
 *          or stop delivery stream encryption fails. This happens when the KMS service throws one of
 *          the following exception types: <code>AccessDeniedException</code>,
 *             <code>InvalidStateException</code>, <code>DisabledException</code>, or
 *             <code>NotFoundException</code>.</p>
 */
export class InvalidKMSResourceException extends __BaseException {
  readonly name: "InvalidKMSResourceException" = "InvalidKMSResourceException";
  readonly $fault: "client" = "client";
  code?: string;
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
 * @public
 * <p>You have already reached the limit for a requested resource.</p>
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
 * @public
 * <p>The resource is already in use and not available for this operation.</p>
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
 */
export interface DeleteDeliveryStreamInput {
  /**
   * @public
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * @public
   * <p>Set this to true if you want to delete the delivery stream even if Kinesis Data Firehose
   *          is unable to retire the grant for the CMK. Kinesis Data Firehose might be unable to retire
   *          the grant due to a customer error, such as when the CMK or the grant are in an invalid
   *          state. If you force deletion, you can then use the <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> operation to
   *          revoke the grant you gave to Kinesis Data Firehose. If a failure to retire the grant
   *          happens due to an Amazon Web Services KMS issue, Kinesis Data Firehose keeps retrying the
   *          delete operation.</p>
   *          <p>The default value is false.</p>
   */
  AllowForceDelete?: boolean;
}

/**
 * @public
 */
export interface DeleteDeliveryStreamOutput {}

/**
 * @public
 * <p>The specified resource could not be found.</p>
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
} as const;

/**
 * @public
 */
export type DeliveryStreamFailureType = (typeof DeliveryStreamFailureType)[keyof typeof DeliveryStreamFailureType];

/**
 * @public
 * <p>Provides details in case one of the following operations fails due to an error related
 *          to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>,
 *             <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.</p>
 */
export interface FailureDescription {
  /**
   * @public
   * <p>The type of error that caused the failure.</p>
   */
  Type: DeliveryStreamFailureType | undefined;

  /**
   * @public
   * <p>A message providing details about the error that caused the failure.</p>
   */
  Details: string | undefined;
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
 * @public
 * <p>Contains information about the server-side encryption (SSE) status for the delivery
 *          stream, the type customer master key (CMK) in use, if any, and the ARN of the CMK. You can
 *          get <code>DeliveryStreamEncryptionConfiguration</code> by invoking the <a>DescribeDeliveryStream</a> operation. </p>
 */
export interface DeliveryStreamEncryptionConfiguration {
  /**
   * @public
   * <p>If <code>KeyType</code> is <code>CUSTOMER_MANAGED_CMK</code>, this field contains the
   *          ARN of the customer managed CMK. If <code>KeyType</code> is <code>Amazon Web Services_OWNED_CMK</code>, <code>DeliveryStreamEncryptionConfiguration</code> doesn't contain
   *          a value for <code>KeyARN</code>.</p>
   */
  KeyARN?: string;

  /**
   * @public
   * <p>Indicates the type of customer master key (CMK) that is used for encryption. The default
   *          setting is <code>Amazon Web Services_OWNED_CMK</code>. For more information about CMKs, see
   *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">Customer Master Keys (CMKs)</a>.</p>
   */
  KeyType?: KeyType;

  /**
   * @public
   * <p>This is the server-side encryption (SSE) status for the delivery stream. For a full
   *          description of the different values of this status, see <a>StartDeliveryStreamEncryption</a> and <a>StopDeliveryStreamEncryption</a>. If this status is <code>ENABLING_FAILED</code>
   *          or <code>DISABLING_FAILED</code>, it is the status of the most recent attempt to enable or
   *          disable SSE, respectively.</p>
   */
  Status?: DeliveryStreamEncryptionStatus;

  /**
   * @public
   * <p>Provides details in case one of the following operations fails due to an error related
   *          to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>,
   *             <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.</p>
   */
  FailureDescription?: FailureDescription;
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
 * @public
 * <p>The destination description in Amazon ES.</p>
 */
export interface ElasticsearchDestinationDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The ARN of the Amazon ES domain. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p>
   *          <p>Kinesis Data Firehose uses either <code>ClusterEndpoint</code> or <code>DomainARN</code>
   *          to send data to Amazon ES.</p>
   */
  DomainARN?: string;

  /**
   * @public
   * <p>The endpoint to use when communicating with the cluster. Kinesis Data Firehose uses
   *          either this <code>ClusterEndpoint</code> or the <code>DomainARN</code> field to send data
   *          to Amazon ES.</p>
   */
  ClusterEndpoint?: string;

  /**
   * @public
   * <p>The Elasticsearch index name.</p>
   */
  IndexName?: string;

  /**
   * @public
   * <p>The Elasticsearch type name. This applies to Elasticsearch 6.x and lower versions.
   *          For Elasticsearch 7.x and OpenSearch Service 1.x, there's no value for
   *             <code>TypeName</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The Elasticsearch index rotation period</p>
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;

  /**
   * @public
   * <p>The buffering options.</p>
   */
  BufferingHints?: ElasticsearchBufferingHints;

  /**
   * @public
   * <p>The Amazon ES retry options.</p>
   */
  RetryOptions?: ElasticsearchRetryOptions;

  /**
   * @public
   * <p>The Amazon S3 backup mode.</p>
   */
  S3BackupMode?: ElasticsearchS3BackupMode;

  /**
   * @public
   * <p>The Amazon S3 destination.</p>
   */
  S3DestinationDescription?: S3DestinationDescription;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>The Amazon CloudWatch logging options.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The details of the VPC of the Amazon OpenSearch or the Amazon OpenSearch Serverless
   *          destination.</p>
   */
  VpcConfigurationDescription?: VpcConfigurationDescription;

  /**
   * @public
   * <p>Indicates the method for setting up document ID. The supported methods are Kinesis Data
   *          Firehose generated document ID and OpenSearch Service generated document ID.</p>
   */
  DocumentIdOptions?: DocumentIdOptions;
}

/**
 * @public
 * <p>Describes a destination in Amazon S3.</p>
 */
export interface ExtendedS3DestinationDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * @public
   * <p>The buffering option.</p>
   */
  BufferingHints: BufferingHints | undefined;

  /**
   * @public
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>.</p>
   */
  CompressionFormat: CompressionFormat | undefined;

  /**
   * @public
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * @public
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>The Amazon S3 backup mode.</p>
   */
  S3BackupMode?: S3BackupMode;

  /**
   * @public
   * <p>The configuration for backup in Amazon S3.</p>
   */
  S3BackupDescription?: S3DestinationDescription;

  /**
   * @public
   * <p>The serializer, deserializer, and schema for converting data from the JSON format to
   *          the Parquet or ORC format before writing it to Amazon S3.</p>
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;

  /**
   * @public
   * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
   *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
   *          partitioning is only supported for Amazon S3 destinations.
   *          </p>
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}

/**
 * @public
 * <p>Describes the HTTP endpoint selected as the destination. </p>
 */
export interface HttpEndpointDescription {
  /**
   * @public
   * <p>The URL of the HTTP endpoint selected as the destination.</p>
   */
  Url?: string;

  /**
   * @public
   * <p>The name of the HTTP endpoint selected as the destination.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Describes the HTTP endpoint destination.</p>
 */
export interface HttpEndpointDestinationDescription {
  /**
   * @public
   * <p>The configuration of the specified HTTP endpoint destination.</p>
   */
  EndpointConfiguration?: HttpEndpointDescription;

  /**
   * @public
   * <p>Describes buffering options that can be applied to the data before it is delivered to
   *          the HTTPS endpoint destination. Kinesis Data Firehose teats these options as hints, and it
   *          might choose to use more optimal values. The <code>SizeInMBs</code> and
   *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
   *          one of them, you must also provide a value for the other. </p>
   */
  BufferingHints?: HttpEndpointBufferingHints;

  /**
   * @public
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The configuration of request sent to the HTTP endpoint specified as the
   *          destination.</p>
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration;

  /**
   * @public
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>Kinesis Data Firehose uses this IAM role for all the permissions that the delivery
   *          stream needs.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to
   *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
   *          receipt from the specified HTTP endpoint destination.</p>
   */
  RetryOptions?: HttpEndpointRetryOptions;

  /**
   * @public
   * <p>Describes the S3 bucket backup options for the data that Kinesis Firehose delivers to
   *          the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or only
   *          the documents that Kinesis Data Firehose could not deliver to the specified HTTP endpoint
   *          destination (<code>FailedDataOnly</code>).</p>
   */
  S3BackupMode?: HttpEndpointS3BackupMode;

  /**
   * @public
   * <p>Describes a destination in Amazon S3.</p>
   */
  S3DestinationDescription?: S3DestinationDescription;
}

/**
 * @public
 * <p>Describes a destination in Amazon Redshift.</p>
 */
export interface RedshiftDestinationDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>The database connection string.</p>
   */
  ClusterJDBCURL: string | undefined;

  /**
   * @public
   * <p>The <code>COPY</code> command.</p>
   */
  CopyCommand: CopyCommand | undefined;

  /**
   * @public
   * <p>The name of the user.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon Redshift. Default value is 3600 (60 minutes).</p>
   */
  RetryOptions?: RedshiftRetryOptions;

  /**
   * @public
   * <p>The Amazon S3 destination.</p>
   */
  S3DestinationDescription: S3DestinationDescription | undefined;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>The Amazon S3 backup mode.</p>
   */
  S3BackupMode?: RedshiftS3BackupMode;

  /**
   * @public
   * <p>The configuration for backup in Amazon S3.</p>
   */
  S3BackupDescription?: S3DestinationDescription;

  /**
   * @public
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

/**
 * @public
 * <p>Describes a destination in Splunk.</p>
 */
export interface SplunkDestinationDescription {
  /**
   * @public
   * <p>The HTTP Event Collector (HEC) endpoint to which Kinesis Data Firehose sends your
   *          data.</p>
   */
  HECEndpoint?: string;

  /**
   * @public
   * <p>This type can be either "Raw" or "Event."</p>
   */
  HECEndpointType?: HECEndpointType;

  /**
   * @public
   * <p>A GUID you obtain from your Splunk cluster when you create a new HEC
   *          endpoint.</p>
   */
  HECToken?: string;

  /**
   * @public
   * <p>The amount of time that Kinesis Data Firehose waits to receive an acknowledgment from
   *          Splunk after it sends it data. At the end of the timeout period, Kinesis Data Firehose
   *          either tries to send the data again or considers it an error, based on your retry
   *          settings.</p>
   */
  HECAcknowledgmentTimeoutInSeconds?: number;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk
   *          or if it doesn't receive an acknowledgment of receipt from Splunk.</p>
   */
  RetryOptions?: SplunkRetryOptions;

  /**
   * @public
   * <p>Defines how documents should be delivered to Amazon S3. When set to
   *             <code>FailedDocumentsOnly</code>, Kinesis Data Firehose writes any data that could not
   *          be indexed to the configured Amazon S3 destination. When set to <code>AllDocuments</code>,
   *          Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed
   *          documents to Amazon S3. Default value is <code>FailedDocumentsOnly</code>. </p>
   */
  S3BackupMode?: SplunkS3BackupMode;

  /**
   * @public
   * <p>The Amazon S3 destination.></p>
   */
  S3DestinationDescription?: S3DestinationDescription;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

/**
 * @public
 * <p>Describes the destination for a delivery stream.</p>
 */
export interface DestinationDescription {
  /**
   * @public
   * <p>The ID of the destination.</p>
   */
  DestinationId: string | undefined;

  /**
   * @public
   * <p>[Deprecated] The destination in Amazon S3.</p>
   */
  S3DestinationDescription?: S3DestinationDescription;

  /**
   * @public
   * <p>The destination in Amazon S3.</p>
   */
  ExtendedS3DestinationDescription?: ExtendedS3DestinationDescription;

  /**
   * @public
   * <p>The destination in Amazon Redshift.</p>
   */
  RedshiftDestinationDescription?: RedshiftDestinationDescription;

  /**
   * @public
   * <p>The destination in Amazon ES.</p>
   */
  ElasticsearchDestinationDescription?: ElasticsearchDestinationDescription;

  /**
   * @public
   * <p>The destination in Amazon OpenSearch Service.</p>
   */
  AmazonopensearchserviceDestinationDescription?: AmazonopensearchserviceDestinationDescription;

  /**
   * @public
   * <p>The destination in Splunk.</p>
   */
  SplunkDestinationDescription?: SplunkDestinationDescription;

  /**
   * @public
   * <p>Describes the specified HTTP endpoint destination.</p>
   */
  HttpEndpointDestinationDescription?: HttpEndpointDestinationDescription;

  /**
   * @public
   * <p>The destination in the Serverless offering for Amazon OpenSearch Service.</p>
   */
  AmazonOpenSearchServerlessDestinationDescription?: AmazonOpenSearchServerlessDestinationDescription;
}

/**
 * @public
 * <p>Details about a Kinesis data stream used as the source for a Kinesis Data Firehose
 *          delivery stream.</p>
 */
export interface KinesisStreamSourceDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source Kinesis data stream. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-kinesis-streams">Amazon
   *             Kinesis Data Streams ARN Format</a>.</p>
   */
  KinesisStreamARN?: string;

  /**
   * @public
   * <p>The ARN of the role used by the source Kinesis data stream. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-iam">Amazon Web Services
   *             Identity and Access Management (IAM) ARN Format</a>.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>Kinesis Data Firehose starts retrieving records from the Kinesis data stream starting
   *          with this timestamp.</p>
   */
  DeliveryStartTimestamp?: Date;
}

/**
 * @public
 * <p>Details about the Amazon MSK cluster used as the source for a Kinesis Data Firehose
 *          delivery stream.</p>
 */
export interface MSKSourceDescription {
  /**
   * @public
   * <p>The ARN of the Amazon MSK cluster.</p>
   */
  MSKClusterARN?: string;

  /**
   * @public
   * <p>The topic name within the Amazon MSK cluster.</p>
   */
  TopicName?: string;

  /**
   * @public
   * <p>The authentication configuration of the Amazon MSK cluster.</p>
   */
  AuthenticationConfiguration?: AuthenticationConfiguration;

  /**
   * @public
   * <p>Kinesis Data Firehose starts retrieving records from the topic within the Amazon MSK
   *          cluster starting with this timestamp.</p>
   */
  DeliveryStartTimestamp?: Date;
}

/**
 * @public
 * <p>Details about a Kinesis data stream used as the source for a Kinesis Data Firehose
 *          delivery stream.</p>
 */
export interface SourceDescription {
  /**
   * @public
   * <p>The <a>KinesisStreamSourceDescription</a> value for the source Kinesis
   *          data stream.</p>
   */
  KinesisStreamSourceDescription?: KinesisStreamSourceDescription;

  /**
   * @public
   * <p>The configuration description for the Amazon MSK cluster to be used as the source for a delivery
   *          stream.</p>
   */
  MSKSourceDescription?: MSKSourceDescription;
}

/**
 * @public
 * <p>Contains information about a delivery stream.</p>
 */
export interface DeliveryStreamDescription {
  /**
   * @public
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the delivery stream. For more information, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
   *             Resource Names (ARNs) and Amazon Web Services Service Namespaces</a>.</p>
   */
  DeliveryStreamARN: string | undefined;

  /**
   * @public
   * <p>The status of the delivery stream. If the status of a delivery stream is
   *             <code>CREATING_FAILED</code>, this status doesn't change, and you can't invoke
   *             <code>CreateDeliveryStream</code> again on it. However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.</p>
   */
  DeliveryStreamStatus: DeliveryStreamStatus | undefined;

  /**
   * @public
   * <p>Provides details in case one of the following operations fails due to an error related
   *          to KMS: <a>CreateDeliveryStream</a>, <a>DeleteDeliveryStream</a>,
   *             <a>StartDeliveryStreamEncryption</a>, <a>StopDeliveryStreamEncryption</a>.</p>
   */
  FailureDescription?: FailureDescription;

  /**
   * @public
   * <p>Indicates the server-side encryption (SSE) status for the delivery stream.</p>
   */
  DeliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;

  /**
   * @public
   * <p>The delivery stream type. This can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DirectPut</code>: Provider applications access the delivery stream
   *                directly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data
   *                stream as a source.</p>
   *             </li>
   *          </ul>
   */
  DeliveryStreamType: DeliveryStreamType | undefined;

  /**
   * @public
   * <p>Each time the destination is updated for a delivery stream, the version ID is
   *          changed, and the current version ID is required when updating the destination. This is so
   *          that the service knows it is applying the changes to the correct version of the delivery
   *          stream.</p>
   */
  VersionId: string | undefined;

  /**
   * @public
   * <p>The date and time that the delivery stream was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * @public
   * <p>The date and time that the delivery stream was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * @public
   * <p>If the <code>DeliveryStreamType</code> parameter is
   *             <code>KinesisStreamAsSource</code>, a <a>SourceDescription</a> object
   *          describing the source Kinesis data stream.</p>
   */
  Source?: SourceDescription;

  /**
   * @public
   * <p>The destinations.</p>
   */
  Destinations: DestinationDescription[] | undefined;

  /**
   * @public
   * <p>Indicates whether there are more destinations available to list.</p>
   */
  HasMoreDestinations: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeDeliveryStreamInput {
  /**
   * @public
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * @public
   * <p>The limit on the number of destinations to return. You can have one destination per
   *          delivery stream.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>The ID of the destination to start returning the destination information. Kinesis
   *          Data Firehose supports one destination per delivery stream.</p>
   */
  ExclusiveStartDestinationId?: string;
}

/**
 * @public
 */
export interface DescribeDeliveryStreamOutput {
  /**
   * @public
   * <p>Information about the delivery stream.</p>
   */
  DeliveryStreamDescription: DeliveryStreamDescription | undefined;
}

/**
 * @public
 * <p>Describes an update for a destination in Amazon ES.</p>
 */
export interface ElasticsearchDestinationUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose
   *          for calling the Amazon ES Configuration API and for indexing documents. For more
   *          information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data
   *             Firehose Access to an Amazon S3 Destination</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The ARN of the Amazon ES domain. The IAM role must have permissions
   *             for <code>DescribeDomain</code>, <code>DescribeDomains</code>, and
   *             <code>DescribeDomainConfig</code> after assuming the IAM role specified in
   *             <code>RoleARN</code>. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   *          <p>Specify either <code>ClusterEndpoint</code> or <code>DomainARN</code>.</p>
   */
  DomainARN?: string;

  /**
   * @public
   * <p>The endpoint to use when communicating with the cluster. Specify either this
   *             <code>ClusterEndpoint</code> or the <code>DomainARN</code> field.</p>
   */
  ClusterEndpoint?: string;

  /**
   * @public
   * <p>The Elasticsearch index name.</p>
   */
  IndexName?: string;

  /**
   * @public
   * <p>The Elasticsearch type name. For Elasticsearch 6.x, there can be only one type per
   *          index. If you try to specify a new type for an existing index that already has another
   *          type, Kinesis Data Firehose returns an error during runtime.</p>
   *          <p>If you upgrade Elasticsearch from 6.x to 7.x and don’t update your delivery stream,
   *          Kinesis Data Firehose still delivers data to Elasticsearch with the old index name and type
   *          name. If you want to update your delivery stream with a new index name, provide an empty
   *          string for <code>TypeName</code>. </p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The Elasticsearch index rotation period. Index rotation appends a timestamp to
   *             <code>IndexName</code> to facilitate the expiration of old data. For more information,
   *          see <a href="https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation">Index Rotation for the
   *             Amazon ES Destination</a>. Default value is <code>OneDay</code>.</p>
   */
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod;

  /**
   * @public
   * <p>The buffering options. If no value is specified,
   *             <code>ElasticsearchBufferingHints</code> object default values are used. </p>
   */
  BufferingHints?: ElasticsearchBufferingHints;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon ES. The default value is 300 (5 minutes).</p>
   */
  RetryOptions?: ElasticsearchRetryOptions;

  /**
   * @public
   * <p>The Amazon S3 destination.</p>
   */
  S3Update?: S3DestinationUpdate;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>The CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>Indicates the method for setting up document ID. The supported methods are Kinesis Data
   *          Firehose generated document ID and OpenSearch Service generated document ID.</p>
   */
  DocumentIdOptions?: DocumentIdOptions;
}

/**
 * @public
 * <p>Describes an update for a destination in Amazon S3.</p>
 */
export interface ExtendedS3DestinationUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The ARN of the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  BucketARN?: string;

  /**
   * @public
   * <p>The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered Amazon S3
   *          files. You can also specify a custom prefix, as described in <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing
   *          them to S3. This prefix appears immediately following the bucket name. For information
   *          about how to specify this prefix, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html">Custom Prefixes for Amazon S3
   *          Objects</a>.</p>
   */
  ErrorOutputPrefix?: string;

  /**
   * @public
   * <p>The buffering option.</p>
   */
  BufferingHints?: BufferingHints;

  /**
   * @public
   * <p>The compression format. If no value is specified, the default is
   *             <code>UNCOMPRESSED</code>. </p>
   */
  CompressionFormat?: CompressionFormat;

  /**
   * @public
   * <p>The encryption configuration. If no value is specified, the default is no
   *          encryption.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * @public
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>You can update a delivery stream to enable Amazon S3 backup if it is disabled. If
   *          backup is enabled, you can't update the delivery stream to disable it. </p>
   */
  S3BackupMode?: S3BackupMode;

  /**
   * @public
   * <p>The Amazon S3 destination for backup.</p>
   */
  S3BackupUpdate?: S3DestinationUpdate;

  /**
   * @public
   * <p>The serializer, deserializer, and schema for converting data from the JSON format to
   *          the Parquet or ORC format before writing it to Amazon S3.</p>
   */
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;

  /**
   * @public
   * <p>The configuration of the dynamic partitioning mechanism that creates smaller data sets
   *          from the streaming data by partitioning it based on partition keys. Currently, dynamic
   *          partitioning is only supported for Amazon S3 destinations.
   *          </p>
   */
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}

/**
 * @public
 */
export interface ListDeliveryStreamsInput {
  /**
   * @public
   * <p>The maximum number of delivery streams to list. The default value is 10.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>The delivery stream type. This can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DirectPut</code>: Provider applications access the delivery stream
   *                directly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KinesisStreamAsSource</code>: The delivery stream uses a Kinesis data
   *                stream as a source.</p>
   *             </li>
   *          </ul>
   *          <p>This parameter is optional. If this parameter is omitted, delivery streams of all
   *          types are returned.</p>
   */
  DeliveryStreamType?: DeliveryStreamType;

  /**
   * @public
   * <p>The list of delivery streams returned by this call to
   *             <code>ListDeliveryStreams</code> will start with the delivery stream whose name comes
   *          alphabetically immediately after the name you specify in
   *             <code>ExclusiveStartDeliveryStreamName</code>.</p>
   */
  ExclusiveStartDeliveryStreamName?: string;
}

/**
 * @public
 */
export interface ListDeliveryStreamsOutput {
  /**
   * @public
   * <p>The names of the delivery streams.</p>
   */
  DeliveryStreamNames: string[] | undefined;

  /**
   * @public
   * <p>Indicates whether there are more delivery streams available to list.</p>
   */
  HasMoreDeliveryStreams: boolean | undefined;
}

/**
 * @public
 */
export interface ListTagsForDeliveryStreamInput {
  /**
   * @public
   * <p>The name of the delivery stream whose tags you want to list.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * @public
   * <p>The key to use as the starting point for the list of tags. If you set this parameter,
   *             <code>ListTagsForDeliveryStream</code> gets all tags that occur after
   *             <code>ExclusiveStartTagKey</code>.</p>
   */
  ExclusiveStartTagKey?: string;

  /**
   * @public
   * <p>The number of tags to return. If this number is less than the total number of tags
   *          associated with the delivery stream, <code>HasMoreTags</code> is set to <code>true</code>
   *          in the response. To list additional tags, set <code>ExclusiveStartTagKey</code> to the last
   *          key in the response. </p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListTagsForDeliveryStreamOutput {
  /**
   * @public
   * <p>A list of tags associated with <code>DeliveryStreamName</code>, starting with the
   *          first tag after <code>ExclusiveStartTagKey</code> and up to the specified
   *             <code>Limit</code>.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * @public
   * <p>If this is <code>true</code> in the response, more tags are available. To list the
   *          remaining tags, set <code>ExclusiveStartTagKey</code> to the key of the last tag returned
   *          and call <code>ListTagsForDeliveryStream</code> again.</p>
   */
  HasMoreTags: boolean | undefined;
}

/**
 * @public
 * <p>The unit of data in a delivery stream.</p>
 */
export interface _Record {
  /**
   * @public
   * <p>The data blob, which is base64-encoded when the blob is serialized. The maximum size
   *          of the data blob, before base64-encoding, is 1,000 KiB.</p>
   */
  Data: Uint8Array | undefined;
}

/**
 * @public
 */
export interface PutRecordInput {
  /**
   * @public
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * @public
   * <p>The record.</p>
   */
  Record: _Record | undefined;
}

/**
 * @public
 */
export interface PutRecordOutput {
  /**
   * @public
   * <p>The ID of the record.</p>
   */
  RecordId: string | undefined;

  /**
   * @public
   * <p>Indicates whether server-side encryption (SSE) was enabled during this operation.</p>
   */
  Encrypted?: boolean;
}

/**
 * @public
 * <p>The service is unavailable. Back off and retry the operation. If you continue to see
 *          the exception, throughput limits for the delivery stream may have been exceeded. For more
 *          information about limits and how to request an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon Kinesis Data Firehose
 *          Limits</a>.</p>
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
   * @public
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * @public
   * <p>One or more records.</p>
   */
  Records: _Record[] | undefined;
}

/**
 * @public
 * <p>Contains the result for an individual record from a <a>PutRecordBatch</a>
 *          request. If the record is successfully added to your delivery stream, it receives a record
 *          ID. If the record fails to be added to your delivery stream, the result includes an error
 *          code and an error message.</p>
 */
export interface PutRecordBatchResponseEntry {
  /**
   * @public
   * <p>The ID of the record.</p>
   */
  RecordId?: string;

  /**
   * @public
   * <p>The error code for an individual record result.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message for an individual record result.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface PutRecordBatchOutput {
  /**
   * @public
   * <p>The number of records that might have failed processing. This number might be greater
   *          than 0 even if the <a>PutRecordBatch</a> call succeeds. Check
   *             <code>FailedPutCount</code> to determine whether there are records that you need to
   *          resend.</p>
   */
  FailedPutCount: number | undefined;

  /**
   * @public
   * <p>Indicates whether server-side encryption (SSE) was enabled during this operation.</p>
   */
  Encrypted?: boolean;

  /**
   * @public
   * <p>The results array. For each record, the index of the response element is the same as
   *          the index used in the request array.</p>
   */
  RequestResponses: PutRecordBatchResponseEntry[] | undefined;
}

/**
 * @public
 */
export interface StartDeliveryStreamEncryptionInput {
  /**
   * @public
   * <p>The name of the delivery stream for which you want to enable server-side encryption
   *          (SSE).</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * @public
   * <p>Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for
   *          Server-Side Encryption (SSE).</p>
   */
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
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
   * @public
   * <p>The name of the delivery stream for which you want to disable server-side encryption
   *          (SSE).</p>
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
   * @public
   * <p>The name of the delivery stream to which you want to add the tags.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * @public
   * <p>A set of key-value pairs to use to create the tags.</p>
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
   * @public
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * @public
   * <p>A list of tag keys. Each corresponding tag is removed from the delivery
   *          stream.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagDeliveryStreamOutput {}

/**
 * @public
 * <p>Updates the specified HTTP endpoint destination.</p>
 */
export interface HttpEndpointDestinationUpdate {
  /**
   * @public
   * <p>Describes the configuration of the HTTP endpoint destination.</p>
   */
  EndpointConfiguration?: HttpEndpointConfiguration;

  /**
   * @public
   * <p>Describes buffering options that can be applied to the data before it is delivered to
   *          the HTTPS endpoint destination. Kinesis Data Firehose teats these options as hints, and it
   *          might choose to use more optimal values. The <code>SizeInMBs</code> and
   *             <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for
   *          one of them, you must also provide a value for the other. </p>
   */
  BufferingHints?: HttpEndpointBufferingHints;

  /**
   * @public
   * <p>Describes the Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;

  /**
   * @public
   * <p>The configuration of the request sent to the HTTP endpoint specified as the
   *          destination.</p>
   */
  RequestConfiguration?: HttpEndpointRequestConfiguration;

  /**
   * @public
   * <p>Describes a data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>Kinesis Data Firehose uses this IAM role for all the permissions that the delivery
   *          stream needs.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to
   *          the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of
   *          receipt from the specified HTTP endpoint destination.</p>
   */
  RetryOptions?: HttpEndpointRetryOptions;

  /**
   * @public
   * <p>Describes the S3 bucket backup options for the data that Kinesis Firehose delivers to
   *          the HTTP endpoint destination. You can back up all documents (<code>AllData</code>) or only
   *          the documents that Kinesis Data Firehose could not deliver to the specified HTTP endpoint
   *          destination (<code>FailedDataOnly</code>).</p>
   */
  S3BackupMode?: HttpEndpointS3BackupMode;

  /**
   * @public
   * <p>Describes an update for a destination in Amazon S3.</p>
   */
  S3Update?: S3DestinationUpdate;
}

/**
 * @public
 * <p>Describes an update for a destination in Amazon Redshift.</p>
 */
export interface RedshiftDestinationUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services credentials. For more
   *          information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and
   *                Amazon Web Services Service Namespaces</a>.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The database connection string.</p>
   */
  ClusterJDBCURL?: string;

  /**
   * @public
   * <p>The <code>COPY</code> command.</p>
   */
  CopyCommand?: CopyCommand;

  /**
   * @public
   * <p>The name of the user.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The user password.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver documents to
   *          Amazon Redshift. Default value is 3600 (60 minutes).</p>
   */
  RetryOptions?: RedshiftRetryOptions;

  /**
   * @public
   * <p>The Amazon S3 destination.</p>
   *          <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be specified
   *          in <code>RedshiftDestinationUpdate.S3Update</code> because the Amazon Redshift
   *             <code>COPY</code> operation that reads from the S3 bucket doesn't support these
   *          compression formats.</p>
   */
  S3Update?: S3DestinationUpdate;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>You can update a delivery stream to enable Amazon S3 backup if it is disabled. If
   *          backup is enabled, you can't update the delivery stream to disable it. </p>
   */
  S3BackupMode?: RedshiftS3BackupMode;

  /**
   * @public
   * <p>The Amazon S3 destination for backup.</p>
   */
  S3BackupUpdate?: S3DestinationUpdate;

  /**
   * @public
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

/**
 * @public
 * <p>Describes an update for a destination in Splunk.</p>
 */
export interface SplunkDestinationUpdate {
  /**
   * @public
   * <p>The HTTP Event Collector (HEC) endpoint to which Kinesis Data Firehose sends your
   *          data.</p>
   */
  HECEndpoint?: string;

  /**
   * @public
   * <p>This type can be either "Raw" or "Event."</p>
   */
  HECEndpointType?: HECEndpointType;

  /**
   * @public
   * <p>A GUID that you obtain from your Splunk cluster when you create a new HEC
   *          endpoint.</p>
   */
  HECToken?: string;

  /**
   * @public
   * <p>The amount of time that Kinesis Data Firehose waits to receive an acknowledgment from
   *          Splunk after it sends data. At the end of the timeout period, Kinesis Data Firehose either
   *          tries to send the data again or considers it an error, based on your retry
   *          settings.</p>
   */
  HECAcknowledgmentTimeoutInSeconds?: number;

  /**
   * @public
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk
   *          or if it doesn't receive an acknowledgment of receipt from Splunk.</p>
   */
  RetryOptions?: SplunkRetryOptions;

  /**
   * @public
   * <p>Specifies how you want Kinesis Data Firehose to back up documents to Amazon S3. When
   *          set to <code>FailedDocumentsOnly</code>, Kinesis Data Firehose writes any data that could
   *          not be indexed to the configured Amazon S3 destination. When set to <code>AllEvents</code>,
   *          Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed
   *          documents to Amazon S3. The default value is <code>FailedEventsOnly</code>.</p>
   *          <p>You can update this backup mode from <code>FailedEventsOnly</code> to
   *             <code>AllEvents</code>. You can't update it from <code>AllEvents</code> to
   *             <code>FailedEventsOnly</code>.</p>
   */
  S3BackupMode?: SplunkS3BackupMode;

  /**
   * @public
   * <p>Your update to the configuration of the backup Amazon S3 location.</p>
   */
  S3Update?: S3DestinationUpdate;

  /**
   * @public
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: ProcessingConfiguration;

  /**
   * @public
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}

/**
 * @public
 */
export interface UpdateDestinationInput {
  /**
   * @public
   * <p>The name of the delivery stream.</p>
   */
  DeliveryStreamName: string | undefined;

  /**
   * @public
   * <p>Obtain this value from the <code>VersionId</code> result of <a>DeliveryStreamDescription</a>. This value is required, and helps the service
   *          perform conditional operations. For example, if there is an interleaving update and this
   *          value is null, then the update destination fails. After the update is successful, the
   *             <code>VersionId</code> value is updated. The service then performs a merge of the old
   *          configuration with the new configuration.</p>
   */
  CurrentDeliveryStreamVersionId: string | undefined;

  /**
   * @public
   * <p>The ID of the destination.</p>
   */
  DestinationId: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>[Deprecated] Describes an update for a destination in Amazon S3.</p>
   */
  S3DestinationUpdate?: S3DestinationUpdate;

  /**
   * @public
   * <p>Describes an update for a destination in Amazon S3.</p>
   */
  ExtendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;

  /**
   * @public
   * <p>Describes an update for a destination in Amazon Redshift.</p>
   */
  RedshiftDestinationUpdate?: RedshiftDestinationUpdate;

  /**
   * @public
   * <p>Describes an update for a destination in Amazon ES.</p>
   */
  ElasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;

  /**
   * @public
   * <p>Describes an update for a destination in Amazon OpenSearch Service.</p>
   */
  AmazonopensearchserviceDestinationUpdate?: AmazonopensearchserviceDestinationUpdate;

  /**
   * @public
   * <p>Describes an update for a destination in Splunk.</p>
   */
  SplunkDestinationUpdate?: SplunkDestinationUpdate;

  /**
   * @public
   * <p>Describes an update to the specified HTTP endpoint destination.</p>
   */
  HttpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate;

  /**
   * @public
   * <p>Describes an update for a destination in the Serverless offering for Amazon OpenSearch
   *          Service.</p>
   */
  AmazonOpenSearchServerlessDestinationUpdate?: AmazonOpenSearchServerlessDestinationUpdate;
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
  ...(obj.DeliveryStreamDescription && {
    DeliveryStreamDescription: DeliveryStreamDescriptionFilterSensitiveLog(obj.DeliveryStreamDescription),
  }),
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
export const UpdateDestinationInputFilterSensitiveLog = (obj: UpdateDestinationInput): any => ({
  ...obj,
  ...(obj.RedshiftDestinationUpdate && {
    RedshiftDestinationUpdate: RedshiftDestinationUpdateFilterSensitiveLog(obj.RedshiftDestinationUpdate),
  }),
  ...(obj.HttpEndpointDestinationUpdate && {
    HttpEndpointDestinationUpdate: HttpEndpointDestinationUpdateFilterSensitiveLog(obj.HttpEndpointDestinationUpdate),
  }),
});

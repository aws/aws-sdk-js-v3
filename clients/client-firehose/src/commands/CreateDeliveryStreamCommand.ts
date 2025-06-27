// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import {
  CreateDeliveryStreamInput,
  CreateDeliveryStreamInputFilterSensitiveLog,
  CreateDeliveryStreamOutput,
} from "../models/models_0";
import { de_CreateDeliveryStreamCommand, se_CreateDeliveryStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeliveryStreamCommand}.
 */
export interface CreateDeliveryStreamCommandInput extends CreateDeliveryStreamInput {}
/**
 * @public
 *
 * The output of {@link CreateDeliveryStreamCommand}.
 */
export interface CreateDeliveryStreamCommandOutput extends CreateDeliveryStreamOutput, __MetadataBearer {}

/**
 * <p>Creates a Firehose stream.</p>
 *          <p>By default, you can create up to 5,000 Firehose streams per Amazon Web Services
 *          Region.</p>
 *          <p>This is an asynchronous operation that immediately returns. The initial status of the
 *          Firehose stream is <code>CREATING</code>. After the Firehose stream is created, its status
 *          is <code>ACTIVE</code> and it now accepts data. If the Firehose stream creation fails, the
 *          status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery
 *          stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state
 *          of a Firehose stream, use <a>DescribeDeliveryStream</a>.</p>
 *          <p>If the status of a Firehose stream is <code>CREATING_FAILED</code>, this status
 *          doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it.
 *          However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete
 *          it.</p>
 *          <p>A Firehose stream can be configured to receive records directly
 *          from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it
 *          can be configured to use an existing Kinesis stream as its source. To specify a Kinesis
 *          data stream as input, set the <code>DeliveryStreamType</code> parameter to
 *             <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name
 *          (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code>
 *          parameter.</p>
 *          <p>To create a Firehose stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is
 *          optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on
 *          SSE for an existing Firehose stream that doesn't have SSE enabled.</p>
 *          <p>A Firehose stream is configured with a single destination, such as Amazon Simple
 *          Storage Service (Amazon S3), Amazon Redshift, Amazon OpenSearch Service, Amazon OpenSearch
 *          Serverless, Splunk, and any custom HTTP endpoint or HTTP endpoints owned by or supported by
 *          third-party service providers, including Datadog, Dynatrace, LogicMonitor, MongoDB, New
 *          Relic, and Sumo Logic. You must specify only one of the following destination configuration
 *          parameters: <code>ExtendedS3DestinationConfiguration</code>,
 *             <code>S3DestinationConfiguration</code>,
 *             <code>ElasticsearchDestinationConfiguration</code>,
 *             <code>RedshiftDestinationConfiguration</code>, or
 *             <code>SplunkDestinationConfiguration</code>.</p>
 *          <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the
 *          following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and
 *             <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is
 *          provided, Firehose buffers data up to 5 MB or for 5 minutes, whichever
 *          condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some
 *          cases where the service cannot adhere to these conditions strictly. For example, record
 *          boundaries might be such that the size is a little over or under the configured buffering
 *          size. By default, no encryption is performed. We strongly recommend that you enable
 *          encryption to ensure secure data storage in Amazon S3.</p>
 *          <p>A few notes about Amazon Redshift as a destination:</p>
 *          <ul>
 *             <li>
 *                <p>An Amazon Redshift destination requires an S3 bucket as intermediate location.
 *                Firehose first delivers data to Amazon S3 and then uses
 *                   <code>COPY</code> syntax to load data into an Amazon Redshift table. This is
 *                specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code>
 *                parameter.</p>
 *             </li>
 *             <li>
 *                <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be
 *                specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because
 *                the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't
 *                support these compression formats.</p>
 *             </li>
 *             <li>
 *                <p>We strongly recommend that you use the user name and password you provide
 *                exclusively with Firehose, and that the permissions for the account are
 *                restricted for Amazon Redshift <code>INSERT</code> permissions.</p>
 *             </li>
 *          </ul>
 *          <p>Firehose assumes the IAM role that is configured as part of the
 *          destination. The role should allow the Firehose principal to assume the role,
 *          and the role should have permissions that allow the service to deliver the data. For more
 *          information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Firehose Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, CreateDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, CreateDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // CreateDeliveryStreamInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   DeliveryStreamType: "DirectPut" || "KinesisStreamAsSource" || "MSKAsSource" || "DatabaseAsSource",
 *   DirectPutSourceConfiguration: { // DirectPutSourceConfiguration
 *     ThroughputHintInMBs: Number("int"), // required
 *   },
 *   KinesisStreamSourceConfiguration: { // KinesisStreamSourceConfiguration
 *     KinesisStreamARN: "STRING_VALUE", // required
 *     RoleARN: "STRING_VALUE", // required
 *   },
 *   DeliveryStreamEncryptionConfigurationInput: { // DeliveryStreamEncryptionConfigurationInput
 *     KeyARN: "STRING_VALUE",
 *     KeyType: "AWS_OWNED_CMK" || "CUSTOMER_MANAGED_CMK", // required
 *   },
 *   S3DestinationConfiguration: { // S3DestinationConfiguration
 *     RoleARN: "STRING_VALUE", // required
 *     BucketARN: "STRING_VALUE", // required
 *     Prefix: "STRING_VALUE",
 *     ErrorOutputPrefix: "STRING_VALUE",
 *     BufferingHints: { // BufferingHints
 *       SizeInMBs: Number("int"),
 *       IntervalInSeconds: Number("int"),
 *     },
 *     CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *     EncryptionConfiguration: { // EncryptionConfiguration
 *       NoEncryptionConfig: "NoEncryption",
 *       KMSEncryptionConfig: { // KMSEncryptionConfig
 *         AWSKMSKeyARN: "STRING_VALUE", // required
 *       },
 *     },
 *     CloudWatchLoggingOptions: { // CloudWatchLoggingOptions
 *       Enabled: true || false,
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *   },
 *   ExtendedS3DestinationConfiguration: { // ExtendedS3DestinationConfiguration
 *     RoleARN: "STRING_VALUE", // required
 *     BucketARN: "STRING_VALUE", // required
 *     Prefix: "STRING_VALUE",
 *     ErrorOutputPrefix: "STRING_VALUE",
 *     BufferingHints: {
 *       SizeInMBs: Number("int"),
 *       IntervalInSeconds: Number("int"),
 *     },
 *     CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *     EncryptionConfiguration: {
 *       NoEncryptionConfig: "NoEncryption",
 *       KMSEncryptionConfig: {
 *         AWSKMSKeyARN: "STRING_VALUE", // required
 *       },
 *     },
 *     CloudWatchLoggingOptions: {
 *       Enabled: true || false,
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *     ProcessingConfiguration: { // ProcessingConfiguration
 *       Enabled: true || false,
 *       Processors: [ // ProcessorList
 *         { // Processor
 *           Type: "RecordDeAggregation" || "Decompression" || "CloudWatchLogProcessing" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [ // ProcessorParameterList
 *             { // ProcessorParameter
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat" || "DataMessageExtraction", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     S3BackupMode: "Disabled" || "Enabled",
 *     S3BackupConfiguration: {
 *       RoleARN: "STRING_VALUE", // required
 *       BucketARN: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: {
 *         SizeInMBs: Number("int"),
 *         IntervalInSeconds: Number("int"),
 *       },
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: {
 *         NoEncryptionConfig: "NoEncryption",
 *         KMSEncryptionConfig: {
 *           AWSKMSKeyARN: "STRING_VALUE", // required
 *         },
 *       },
 *       CloudWatchLoggingOptions: {
 *         Enabled: true || false,
 *         LogGroupName: "STRING_VALUE",
 *         LogStreamName: "STRING_VALUE",
 *       },
 *     },
 *     DataFormatConversionConfiguration: { // DataFormatConversionConfiguration
 *       SchemaConfiguration: { // SchemaConfiguration
 *         RoleARN: "STRING_VALUE",
 *         CatalogId: "STRING_VALUE",
 *         DatabaseName: "STRING_VALUE",
 *         TableName: "STRING_VALUE",
 *         Region: "STRING_VALUE",
 *         VersionId: "STRING_VALUE",
 *       },
 *       InputFormatConfiguration: { // InputFormatConfiguration
 *         Deserializer: { // Deserializer
 *           OpenXJsonSerDe: { // OpenXJsonSerDe
 *             ConvertDotsInJsonKeysToUnderscores: true || false,
 *             CaseInsensitive: true || false,
 *             ColumnToJsonKeyMappings: { // ColumnToJsonKeyMappings
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *           HiveJsonSerDe: { // HiveJsonSerDe
 *             TimestampFormats: [ // ListOfNonEmptyStrings
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *       },
 *       OutputFormatConfiguration: { // OutputFormatConfiguration
 *         Serializer: { // Serializer
 *           ParquetSerDe: { // ParquetSerDe
 *             BlockSizeBytes: Number("int"),
 *             PageSizeBytes: Number("int"),
 *             Compression: "UNCOMPRESSED" || "GZIP" || "SNAPPY",
 *             EnableDictionaryCompression: true || false,
 *             MaxPaddingBytes: Number("int"),
 *             WriterVersion: "V1" || "V2",
 *           },
 *           OrcSerDe: { // OrcSerDe
 *             StripeSizeBytes: Number("int"),
 *             BlockSizeBytes: Number("int"),
 *             RowIndexStride: Number("int"),
 *             EnablePadding: true || false,
 *             PaddingTolerance: Number("double"),
 *             Compression: "NONE" || "ZLIB" || "SNAPPY",
 *             BloomFilterColumns: [ // ListOfNonEmptyStringsWithoutWhitespace
 *               "STRING_VALUE",
 *             ],
 *             BloomFilterFalsePositiveProbability: Number("double"),
 *             DictionaryKeyThreshold: Number("double"),
 *             FormatVersion: "V0_11" || "V0_12",
 *           },
 *         },
 *       },
 *       Enabled: true || false,
 *     },
 *     DynamicPartitioningConfiguration: { // DynamicPartitioningConfiguration
 *       RetryOptions: { // RetryOptions
 *         DurationInSeconds: Number("int"),
 *       },
 *       Enabled: true || false,
 *     },
 *     FileExtension: "STRING_VALUE",
 *     CustomTimeZone: "STRING_VALUE",
 *   },
 *   RedshiftDestinationConfiguration: { // RedshiftDestinationConfiguration
 *     RoleARN: "STRING_VALUE", // required
 *     ClusterJDBCURL: "STRING_VALUE", // required
 *     CopyCommand: { // CopyCommand
 *       DataTableName: "STRING_VALUE", // required
 *       DataTableColumns: "STRING_VALUE",
 *       CopyOptions: "STRING_VALUE",
 *     },
 *     Username: "STRING_VALUE",
 *     Password: "STRING_VALUE",
 *     RetryOptions: { // RedshiftRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3Configuration: {
 *       RoleARN: "STRING_VALUE", // required
 *       BucketARN: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: {
 *         SizeInMBs: Number("int"),
 *         IntervalInSeconds: Number("int"),
 *       },
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: {
 *         NoEncryptionConfig: "NoEncryption",
 *         KMSEncryptionConfig: {
 *           AWSKMSKeyARN: "STRING_VALUE", // required
 *         },
 *       },
 *       CloudWatchLoggingOptions: {
 *         Enabled: true || false,
 *         LogGroupName: "STRING_VALUE",
 *         LogStreamName: "STRING_VALUE",
 *       },
 *     },
 *     ProcessingConfiguration: {
 *       Enabled: true || false,
 *       Processors: [
 *         {
 *           Type: "RecordDeAggregation" || "Decompression" || "CloudWatchLogProcessing" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat" || "DataMessageExtraction", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     S3BackupMode: "Disabled" || "Enabled",
 *     S3BackupConfiguration: {
 *       RoleARN: "STRING_VALUE", // required
 *       BucketARN: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: {
 *         SizeInMBs: Number("int"),
 *         IntervalInSeconds: Number("int"),
 *       },
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: {
 *         NoEncryptionConfig: "NoEncryption",
 *         KMSEncryptionConfig: {
 *           AWSKMSKeyARN: "STRING_VALUE", // required
 *         },
 *       },
 *       CloudWatchLoggingOptions: {
 *         Enabled: true || false,
 *         LogGroupName: "STRING_VALUE",
 *         LogStreamName: "STRING_VALUE",
 *       },
 *     },
 *     CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *     SecretsManagerConfiguration: { // SecretsManagerConfiguration
 *       SecretARN: "STRING_VALUE",
 *       RoleARN: "STRING_VALUE",
 *       Enabled: true || false, // required
 *     },
 *   },
 *   ElasticsearchDestinationConfiguration: { // ElasticsearchDestinationConfiguration
 *     RoleARN: "STRING_VALUE", // required
 *     DomainARN: "STRING_VALUE",
 *     ClusterEndpoint: "STRING_VALUE",
 *     IndexName: "STRING_VALUE", // required
 *     TypeName: "STRING_VALUE",
 *     IndexRotationPeriod: "NoRotation" || "OneHour" || "OneDay" || "OneWeek" || "OneMonth",
 *     BufferingHints: { // ElasticsearchBufferingHints
 *       IntervalInSeconds: Number("int"),
 *       SizeInMBs: Number("int"),
 *     },
 *     RetryOptions: { // ElasticsearchRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3BackupMode: "FailedDocumentsOnly" || "AllDocuments",
 *     S3Configuration: {
 *       RoleARN: "STRING_VALUE", // required
 *       BucketARN: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: "<BufferingHints>",
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: "<EncryptionConfiguration>",
 *       CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *     },
 *     ProcessingConfiguration: {
 *       Enabled: true || false,
 *       Processors: [
 *         {
 *           Type: "RecordDeAggregation" || "Decompression" || "CloudWatchLogProcessing" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat" || "DataMessageExtraction", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *     VpcConfiguration: { // VpcConfiguration
 *       SubnetIds: [ // SubnetIdList // required
 *         "STRING_VALUE",
 *       ],
 *       RoleARN: "STRING_VALUE", // required
 *       SecurityGroupIds: [ // SecurityGroupIdList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     DocumentIdOptions: { // DocumentIdOptions
 *       DefaultDocumentIdFormat: "FIREHOSE_DEFAULT" || "NO_DOCUMENT_ID", // required
 *     },
 *   },
 *   AmazonopensearchserviceDestinationConfiguration: { // AmazonopensearchserviceDestinationConfiguration
 *     RoleARN: "STRING_VALUE", // required
 *     DomainARN: "STRING_VALUE",
 *     ClusterEndpoint: "STRING_VALUE",
 *     IndexName: "STRING_VALUE", // required
 *     TypeName: "STRING_VALUE",
 *     IndexRotationPeriod: "NoRotation" || "OneHour" || "OneDay" || "OneWeek" || "OneMonth",
 *     BufferingHints: { // AmazonopensearchserviceBufferingHints
 *       IntervalInSeconds: Number("int"),
 *       SizeInMBs: Number("int"),
 *     },
 *     RetryOptions: { // AmazonopensearchserviceRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3BackupMode: "FailedDocumentsOnly" || "AllDocuments",
 *     S3Configuration: "<S3DestinationConfiguration>", // required
 *     ProcessingConfiguration: {
 *       Enabled: true || false,
 *       Processors: [
 *         {
 *           Type: "RecordDeAggregation" || "Decompression" || "CloudWatchLogProcessing" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat" || "DataMessageExtraction", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *     VpcConfiguration: {
 *       SubnetIds: [ // required
 *         "STRING_VALUE",
 *       ],
 *       RoleARN: "STRING_VALUE", // required
 *       SecurityGroupIds: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     DocumentIdOptions: {
 *       DefaultDocumentIdFormat: "FIREHOSE_DEFAULT" || "NO_DOCUMENT_ID", // required
 *     },
 *   },
 *   SplunkDestinationConfiguration: { // SplunkDestinationConfiguration
 *     HECEndpoint: "STRING_VALUE", // required
 *     HECEndpointType: "Raw" || "Event", // required
 *     HECToken: "STRING_VALUE",
 *     HECAcknowledgmentTimeoutInSeconds: Number("int"),
 *     RetryOptions: { // SplunkRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3BackupMode: "FailedEventsOnly" || "AllEvents",
 *     S3Configuration: "<S3DestinationConfiguration>", // required
 *     ProcessingConfiguration: {
 *       Enabled: true || false,
 *       Processors: [
 *         {
 *           Type: "RecordDeAggregation" || "Decompression" || "CloudWatchLogProcessing" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat" || "DataMessageExtraction", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *     BufferingHints: { // SplunkBufferingHints
 *       IntervalInSeconds: Number("int"),
 *       SizeInMBs: Number("int"),
 *     },
 *     SecretsManagerConfiguration: {
 *       SecretARN: "STRING_VALUE",
 *       RoleARN: "STRING_VALUE",
 *       Enabled: true || false, // required
 *     },
 *   },
 *   HttpEndpointDestinationConfiguration: { // HttpEndpointDestinationConfiguration
 *     EndpointConfiguration: { // HttpEndpointConfiguration
 *       Url: "STRING_VALUE", // required
 *       Name: "STRING_VALUE",
 *       AccessKey: "STRING_VALUE",
 *     },
 *     BufferingHints: { // HttpEndpointBufferingHints
 *       SizeInMBs: Number("int"),
 *       IntervalInSeconds: Number("int"),
 *     },
 *     CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *     RequestConfiguration: { // HttpEndpointRequestConfiguration
 *       ContentEncoding: "NONE" || "GZIP",
 *       CommonAttributes: [ // HttpEndpointCommonAttributesList
 *         { // HttpEndpointCommonAttribute
 *           AttributeName: "STRING_VALUE", // required
 *           AttributeValue: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     ProcessingConfiguration: "<ProcessingConfiguration>",
 *     RoleARN: "STRING_VALUE",
 *     RetryOptions: { // HttpEndpointRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3BackupMode: "FailedDataOnly" || "AllData",
 *     S3Configuration: "<S3DestinationConfiguration>", // required
 *     SecretsManagerConfiguration: {
 *       SecretARN: "STRING_VALUE",
 *       RoleARN: "STRING_VALUE",
 *       Enabled: true || false, // required
 *     },
 *   },
 *   Tags: [ // TagDeliveryStreamInputTagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   AmazonOpenSearchServerlessDestinationConfiguration: { // AmazonOpenSearchServerlessDestinationConfiguration
 *     RoleARN: "STRING_VALUE", // required
 *     CollectionEndpoint: "STRING_VALUE",
 *     IndexName: "STRING_VALUE", // required
 *     BufferingHints: { // AmazonOpenSearchServerlessBufferingHints
 *       IntervalInSeconds: Number("int"),
 *       SizeInMBs: Number("int"),
 *     },
 *     RetryOptions: { // AmazonOpenSearchServerlessRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3BackupMode: "FailedDocumentsOnly" || "AllDocuments",
 *     S3Configuration: "<S3DestinationConfiguration>", // required
 *     ProcessingConfiguration: "<ProcessingConfiguration>",
 *     CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *     VpcConfiguration: {
 *       SubnetIds: [ // required
 *         "STRING_VALUE",
 *       ],
 *       RoleARN: "STRING_VALUE", // required
 *       SecurityGroupIds: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   MSKSourceConfiguration: { // MSKSourceConfiguration
 *     MSKClusterARN: "STRING_VALUE", // required
 *     TopicName: "STRING_VALUE", // required
 *     AuthenticationConfiguration: { // AuthenticationConfiguration
 *       RoleARN: "STRING_VALUE", // required
 *       Connectivity: "PUBLIC" || "PRIVATE", // required
 *     },
 *     ReadFromTimestamp: new Date("TIMESTAMP"),
 *   },
 *   SnowflakeDestinationConfiguration: { // SnowflakeDestinationConfiguration
 *     AccountUrl: "STRING_VALUE", // required
 *     PrivateKey: "STRING_VALUE",
 *     KeyPassphrase: "STRING_VALUE",
 *     User: "STRING_VALUE",
 *     Database: "STRING_VALUE", // required
 *     Schema: "STRING_VALUE", // required
 *     Table: "STRING_VALUE", // required
 *     SnowflakeRoleConfiguration: { // SnowflakeRoleConfiguration
 *       Enabled: true || false,
 *       SnowflakeRole: "STRING_VALUE",
 *     },
 *     DataLoadingOption: "JSON_MAPPING" || "VARIANT_CONTENT_MAPPING" || "VARIANT_CONTENT_AND_METADATA_MAPPING",
 *     MetaDataColumnName: "STRING_VALUE",
 *     ContentColumnName: "STRING_VALUE",
 *     SnowflakeVpcConfiguration: { // SnowflakeVpcConfiguration
 *       PrivateLinkVpceId: "STRING_VALUE", // required
 *     },
 *     CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *     ProcessingConfiguration: "<ProcessingConfiguration>",
 *     RoleARN: "STRING_VALUE", // required
 *     RetryOptions: { // SnowflakeRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3BackupMode: "FailedDataOnly" || "AllData",
 *     S3Configuration: "<S3DestinationConfiguration>", // required
 *     SecretsManagerConfiguration: {
 *       SecretARN: "STRING_VALUE",
 *       RoleARN: "STRING_VALUE",
 *       Enabled: true || false, // required
 *     },
 *     BufferingHints: { // SnowflakeBufferingHints
 *       SizeInMBs: Number("int"),
 *       IntervalInSeconds: Number("int"),
 *     },
 *   },
 *   IcebergDestinationConfiguration: { // IcebergDestinationConfiguration
 *     DestinationTableConfigurationList: [ // DestinationTableConfigurationList
 *       { // DestinationTableConfiguration
 *         DestinationTableName: "STRING_VALUE", // required
 *         DestinationDatabaseName: "STRING_VALUE", // required
 *         UniqueKeys: [
 *           "STRING_VALUE",
 *         ],
 *         PartitionSpec: { // PartitionSpec
 *           Identity: [ // PartitionFields
 *             { // PartitionField
 *               SourceName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         S3ErrorOutputPrefix: "STRING_VALUE",
 *       },
 *     ],
 *     SchemaEvolutionConfiguration: { // SchemaEvolutionConfiguration
 *       Enabled: true || false, // required
 *     },
 *     TableCreationConfiguration: { // TableCreationConfiguration
 *       Enabled: true || false, // required
 *     },
 *     BufferingHints: "<BufferingHints>",
 *     CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *     ProcessingConfiguration: "<ProcessingConfiguration>",
 *     S3BackupMode: "FailedDataOnly" || "AllData",
 *     RetryOptions: {
 *       DurationInSeconds: Number("int"),
 *     },
 *     RoleARN: "STRING_VALUE", // required
 *     AppendOnly: true || false,
 *     CatalogConfiguration: { // CatalogConfiguration
 *       CatalogARN: "STRING_VALUE",
 *       WarehouseLocation: "STRING_VALUE",
 *     },
 *     S3Configuration: "<S3DestinationConfiguration>", // required
 *   },
 *   DatabaseSourceConfiguration: { // DatabaseSourceConfiguration
 *     Type: "MySQL" || "PostgreSQL", // required
 *     Endpoint: "STRING_VALUE", // required
 *     Port: Number("int"), // required
 *     SSLMode: "Disabled" || "Enabled",
 *     Databases: { // DatabaseList
 *       Include: [ // DatabaseIncludeOrExcludeList
 *         "STRING_VALUE",
 *       ],
 *       Exclude: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Tables: { // DatabaseTableList
 *       Include: [ // DatabaseTableIncludeOrExcludeList
 *         "STRING_VALUE",
 *       ],
 *       Exclude: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Columns: { // DatabaseColumnList
 *       Include: [ // DatabaseColumnIncludeOrExcludeList
 *         "STRING_VALUE",
 *       ],
 *       Exclude: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     SurrogateKeys: [ // DatabaseSurrogateKeyList
 *       "STRING_VALUE",
 *     ],
 *     SnapshotWatermarkTable: "STRING_VALUE", // required
 *     DatabaseSourceAuthenticationConfiguration: { // DatabaseSourceAuthenticationConfiguration
 *       SecretsManagerConfiguration: {
 *         SecretARN: "STRING_VALUE",
 *         RoleARN: "STRING_VALUE",
 *         Enabled: true || false, // required
 *       },
 *     },
 *     DatabaseSourceVPCConfiguration: { // DatabaseSourceVPCConfiguration
 *       VpcEndpointServiceName: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeliveryStreamOutput
 * //   DeliveryStreamARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeliveryStreamCommandInput - {@link CreateDeliveryStreamCommandInput}
 * @returns {@link CreateDeliveryStreamCommandOutput}
 * @see {@link CreateDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link CreateDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link InvalidKMSResourceException} (client fault)
 *  <p>Firehose throws this exception when an attempt to put records or to start
 *          or stop Firehose stream encryption fails. This happens when the KMS service throws one of
 *          the following exception types: <code>AccessDeniedException</code>,
 *             <code>InvalidStateException</code>, <code>DisabledException</code>, or
 *             <code>NotFoundException</code>.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have already reached the limit for a requested resource.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is already in use and not available for this operation.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 *
 * @public
 */
export class CreateDeliveryStreamCommand extends $Command
  .classBuilder<
    CreateDeliveryStreamCommandInput,
    CreateDeliveryStreamCommandOutput,
    FirehoseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FirehoseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Firehose_20150804", "CreateDeliveryStream", {})
  .n("FirehoseClient", "CreateDeliveryStreamCommand")
  .f(CreateDeliveryStreamInputFilterSensitiveLog, void 0)
  .ser(se_CreateDeliveryStreamCommand)
  .de(de_CreateDeliveryStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeliveryStreamInput;
      output: CreateDeliveryStreamOutput;
    };
    sdk: {
      input: CreateDeliveryStreamCommandInput;
      output: CreateDeliveryStreamCommandOutput;
    };
  };
}

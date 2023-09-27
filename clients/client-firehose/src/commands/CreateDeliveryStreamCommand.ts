// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

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
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates a Kinesis Data Firehose delivery stream.</p>
 *          <p>By default, you can create up to 50 delivery streams per Amazon Web Services
 *          Region.</p>
 *          <p>This is an asynchronous operation that immediately returns. The initial status of the
 *          delivery stream is <code>CREATING</code>. After the delivery stream is created, its status
 *          is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the
 *          status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery
 *          stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state
 *          of a delivery stream, use <a>DescribeDeliveryStream</a>.</p>
 *          <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status
 *          doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it.
 *          However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete
 *          it.</p>
 *          <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly
 *          from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it
 *          can be configured to use an existing Kinesis stream as its source. To specify a Kinesis
 *          data stream as input, set the <code>DeliveryStreamType</code> parameter to
 *             <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name
 *          (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code>
 *          parameter.</p>
 *          <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is
 *          optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on
 *          SSE for an existing delivery stream that doesn't have SSE enabled.</p>
 *          <p>A delivery stream is configured with a single destination, such as Amazon Simple
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
 *          provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever
 *          condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some
 *          cases where the service cannot adhere to these conditions strictly. For example, record
 *          boundaries might be such that the size is a little over or under the configured buffering
 *          size. By default, no encryption is performed. We strongly recommend that you enable
 *          encryption to ensure secure data storage in Amazon S3.</p>
 *          <p>A few notes about Amazon Redshift as a destination:</p>
 *          <ul>
 *             <li>
 *                <p>An Amazon Redshift destination requires an S3 bucket as intermediate location.
 *                Kinesis Data Firehose first delivers data to Amazon S3 and then uses
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
 *                exclusively with Kinesis Data Firehose, and that the permissions for the account are
 *                restricted for Amazon Redshift <code>INSERT</code> permissions.</p>
 *             </li>
 *          </ul>
 *          <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the
 *          destination. The role should allow the Kinesis Data Firehose principal to assume the role,
 *          and the role should have permissions that allow the service to deliver the data. For more
 *          information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data
 *             Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data
 *             Firehose Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, CreateDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, CreateDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // CreateDeliveryStreamInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   DeliveryStreamType: "DirectPut" || "KinesisStreamAsSource" || "MSKAsSource",
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
 *           Type: "RecordDeAggregation" || "Decompression" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [ // ProcessorParameterList
 *             { // ProcessorParameter
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat", // required
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
 *   },
 *   RedshiftDestinationConfiguration: { // RedshiftDestinationConfiguration
 *     RoleARN: "STRING_VALUE", // required
 *     ClusterJDBCURL: "STRING_VALUE", // required
 *     CopyCommand: { // CopyCommand
 *       DataTableName: "STRING_VALUE", // required
 *       DataTableColumns: "STRING_VALUE",
 *       CopyOptions: "STRING_VALUE",
 *     },
 *     Username: "STRING_VALUE", // required
 *     Password: "STRING_VALUE", // required
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
 *           Type: "RecordDeAggregation" || "Decompression" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat", // required
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
 *           Type: "RecordDeAggregation" || "Decompression" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat", // required
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
 *           Type: "RecordDeAggregation" || "Decompression" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat", // required
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
 *     HECToken: "STRING_VALUE", // required
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
 *           Type: "RecordDeAggregation" || "Decompression" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
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
 *  <p>Kinesis Data Firehose throws this exception when an attempt to put records or to start
 *          or stop delivery stream encryption fails. This happens when the KMS service throws one of
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
 */
export class CreateDeliveryStreamCommand extends $Command<
  CreateDeliveryStreamCommandInput,
  CreateDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateDeliveryStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDeliveryStreamCommandInput, CreateDeliveryStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDeliveryStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "CreateDeliveryStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDeliveryStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Firehose_20150804",
        operation: "CreateDeliveryStream",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateDeliveryStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDeliveryStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeliveryStreamCommandOutput> {
    return de_CreateDeliveryStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

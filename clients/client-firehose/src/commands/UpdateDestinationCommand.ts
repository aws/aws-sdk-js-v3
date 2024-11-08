// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import {
  UpdateDestinationInput,
  UpdateDestinationInputFilterSensitiveLog,
  UpdateDestinationOutput,
} from "../models/models_0";
import { de_UpdateDestinationCommand, se_UpdateDestinationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDestinationCommand}.
 */
export interface UpdateDestinationCommandInput extends UpdateDestinationInput {}
/**
 * @public
 *
 * The output of {@link UpdateDestinationCommand}.
 */
export interface UpdateDestinationCommandOutput extends UpdateDestinationOutput, __MetadataBearer {}

/**
 * <p>Updates the specified destination of the specified Firehose stream.</p>
 *          <p>Use this operation to change the destination type (for example, to replace the Amazon
 *          S3 destination with Amazon Redshift) or change the parameters associated with a destination
 *          (for example, to change the bucket name of the Amazon S3 destination). The update might not
 *          occur immediately. The target Firehose stream remains active while the configurations are
 *          updated, so data writes to the Firehose stream can continue during this process. The
 *          updated configurations are usually effective within a few minutes.</p>
 *          <p>Switching between Amazon OpenSearch Service and other services is not supported. For
 *          an Amazon OpenSearch Service destination, you can only update to another Amazon OpenSearch
 *          Service destination.</p>
 *          <p>If the destination type is the same, Firehose merges the configuration
 *          parameters specified with the destination configuration that already exists on the delivery
 *          stream. If any of the parameters are not specified in the call, the existing values are
 *          retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing
 *             <code>EncryptionConfiguration</code> is maintained on the destination.</p>
 *          <p>If the destination type is not the same, for example, changing the destination from
 *          Amazon S3 to Amazon Redshift, Firehose does not merge any parameters. In this
 *          case, all parameters must be specified.</p>
 *          <p>Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race
 *          conditions and conflicting merges. This is a required field, and the service updates the
 *          configuration only if the existing configuration has a version ID that matches. After the
 *          update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set
 *             <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, UpdateDestinationCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, UpdateDestinationCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // UpdateDestinationInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   CurrentDeliveryStreamVersionId: "STRING_VALUE", // required
 *   DestinationId: "STRING_VALUE", // required
 *   S3DestinationUpdate: { // S3DestinationUpdate
 *     RoleARN: "STRING_VALUE",
 *     BucketARN: "STRING_VALUE",
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
 *   ExtendedS3DestinationUpdate: { // ExtendedS3DestinationUpdate
 *     RoleARN: "STRING_VALUE",
 *     BucketARN: "STRING_VALUE",
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
 *     S3BackupUpdate: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
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
 *   RedshiftDestinationUpdate: { // RedshiftDestinationUpdate
 *     RoleARN: "STRING_VALUE",
 *     ClusterJDBCURL: "STRING_VALUE",
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
 *     S3Update: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
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
 *     S3BackupUpdate: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
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
 *   ElasticsearchDestinationUpdate: { // ElasticsearchDestinationUpdate
 *     RoleARN: "STRING_VALUE",
 *     DomainARN: "STRING_VALUE",
 *     ClusterEndpoint: "STRING_VALUE",
 *     IndexName: "STRING_VALUE",
 *     TypeName: "STRING_VALUE",
 *     IndexRotationPeriod: "NoRotation" || "OneHour" || "OneDay" || "OneWeek" || "OneMonth",
 *     BufferingHints: { // ElasticsearchBufferingHints
 *       IntervalInSeconds: Number("int"),
 *       SizeInMBs: Number("int"),
 *     },
 *     RetryOptions: { // ElasticsearchRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3Update: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
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
 *     DocumentIdOptions: { // DocumentIdOptions
 *       DefaultDocumentIdFormat: "FIREHOSE_DEFAULT" || "NO_DOCUMENT_ID", // required
 *     },
 *   },
 *   AmazonopensearchserviceDestinationUpdate: { // AmazonopensearchserviceDestinationUpdate
 *     RoleARN: "STRING_VALUE",
 *     DomainARN: "STRING_VALUE",
 *     ClusterEndpoint: "STRING_VALUE",
 *     IndexName: "STRING_VALUE",
 *     TypeName: "STRING_VALUE",
 *     IndexRotationPeriod: "NoRotation" || "OneHour" || "OneDay" || "OneWeek" || "OneMonth",
 *     BufferingHints: { // AmazonopensearchserviceBufferingHints
 *       IntervalInSeconds: Number("int"),
 *       SizeInMBs: Number("int"),
 *     },
 *     RetryOptions: { // AmazonopensearchserviceRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3Update: "<S3DestinationUpdate>",
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
 *     DocumentIdOptions: {
 *       DefaultDocumentIdFormat: "FIREHOSE_DEFAULT" || "NO_DOCUMENT_ID", // required
 *     },
 *   },
 *   SplunkDestinationUpdate: { // SplunkDestinationUpdate
 *     HECEndpoint: "STRING_VALUE",
 *     HECEndpointType: "Raw" || "Event",
 *     HECToken: "STRING_VALUE",
 *     HECAcknowledgmentTimeoutInSeconds: Number("int"),
 *     RetryOptions: { // SplunkRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3BackupMode: "FailedEventsOnly" || "AllEvents",
 *     S3Update: "<S3DestinationUpdate>",
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
 *   HttpEndpointDestinationUpdate: { // HttpEndpointDestinationUpdate
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
 *     S3Update: "<S3DestinationUpdate>",
 *     SecretsManagerConfiguration: {
 *       SecretARN: "STRING_VALUE",
 *       RoleARN: "STRING_VALUE",
 *       Enabled: true || false, // required
 *     },
 *   },
 *   AmazonOpenSearchServerlessDestinationUpdate: { // AmazonOpenSearchServerlessDestinationUpdate
 *     RoleARN: "STRING_VALUE",
 *     CollectionEndpoint: "STRING_VALUE",
 *     IndexName: "STRING_VALUE",
 *     BufferingHints: { // AmazonOpenSearchServerlessBufferingHints
 *       IntervalInSeconds: Number("int"),
 *       SizeInMBs: Number("int"),
 *     },
 *     RetryOptions: { // AmazonOpenSearchServerlessRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3Update: "<S3DestinationUpdate>",
 *     ProcessingConfiguration: "<ProcessingConfiguration>",
 *     CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *   },
 *   SnowflakeDestinationUpdate: { // SnowflakeDestinationUpdate
 *     AccountUrl: "STRING_VALUE",
 *     PrivateKey: "STRING_VALUE",
 *     KeyPassphrase: "STRING_VALUE",
 *     User: "STRING_VALUE",
 *     Database: "STRING_VALUE",
 *     Schema: "STRING_VALUE",
 *     Table: "STRING_VALUE",
 *     SnowflakeRoleConfiguration: { // SnowflakeRoleConfiguration
 *       Enabled: true || false,
 *       SnowflakeRole: "STRING_VALUE",
 *     },
 *     DataLoadingOption: "JSON_MAPPING" || "VARIANT_CONTENT_MAPPING" || "VARIANT_CONTENT_AND_METADATA_MAPPING",
 *     MetaDataColumnName: "STRING_VALUE",
 *     ContentColumnName: "STRING_VALUE",
 *     CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *     ProcessingConfiguration: "<ProcessingConfiguration>",
 *     RoleARN: "STRING_VALUE",
 *     RetryOptions: { // SnowflakeRetryOptions
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3BackupMode: "FailedDataOnly" || "AllData",
 *     S3Update: "<S3DestinationUpdate>",
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
 *   IcebergDestinationUpdate: { // IcebergDestinationUpdate
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
 *     RoleARN: "STRING_VALUE",
 *     CatalogConfiguration: { // CatalogConfiguration
 *       CatalogARN: "STRING_VALUE",
 *       WarehouseLocation: "STRING_VALUE",
 *     },
 *     S3Configuration: { // S3DestinationConfiguration
 *       RoleARN: "STRING_VALUE", // required
 *       BucketARN: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: "<BufferingHints>",
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: "<EncryptionConfiguration>",
 *       CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 *     },
 *   },
 * };
 * const command = new UpdateDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDestinationCommandInput - {@link UpdateDestinationCommandInput}
 * @returns {@link UpdateDestinationCommandOutput}
 * @see {@link UpdateDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateDestinationCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification has already happened. Fetch <code>VersionId</code> again and use
 *          it to update the destination.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is already in use and not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 * @public
 */
export class UpdateDestinationCommand extends $Command
  .classBuilder<
    UpdateDestinationCommandInput,
    UpdateDestinationCommandOutput,
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
  .s("Firehose_20150804", "UpdateDestination", {})
  .n("FirehoseClient", "UpdateDestinationCommand")
  .f(UpdateDestinationInputFilterSensitiveLog, void 0)
  .ser(se_UpdateDestinationCommand)
  .de(de_UpdateDestinationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDestinationInput;
      output: {};
    };
    sdk: {
      input: UpdateDestinationCommandInput;
      output: UpdateDestinationCommandOutput;
    };
  };
}

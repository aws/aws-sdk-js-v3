// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import {
  DescribeDeliveryStreamInput,
  DescribeDeliveryStreamOutput,
  DescribeDeliveryStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeDeliveryStreamCommand, se_DescribeDeliveryStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeliveryStreamCommand}.
 */
export interface DescribeDeliveryStreamCommandInput extends DescribeDeliveryStreamInput {}
/**
 * @public
 *
 * The output of {@link DescribeDeliveryStreamCommand}.
 */
export interface DescribeDeliveryStreamCommandOutput extends DescribeDeliveryStreamOutput, __MetadataBearer {}

/**
 * <p>Describes the specified delivery stream and its status. For example, after your
 *          delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the
 *          delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p>
 *          <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status
 *          doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it.
 *          However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.
 *          If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, DescribeDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, DescribeDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // DescribeDeliveryStreamInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   ExclusiveStartDestinationId: "STRING_VALUE",
 * };
 * const command = new DescribeDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeliveryStreamOutput
 * //   DeliveryStreamDescription: { // DeliveryStreamDescription
 * //     DeliveryStreamName: "STRING_VALUE", // required
 * //     DeliveryStreamARN: "STRING_VALUE", // required
 * //     DeliveryStreamStatus: "CREATING" || "CREATING_FAILED" || "DELETING" || "DELETING_FAILED" || "ACTIVE", // required
 * //     FailureDescription: { // FailureDescription
 * //       Type: "RETIRE_KMS_GRANT_FAILED" || "CREATE_KMS_GRANT_FAILED" || "KMS_ACCESS_DENIED" || "DISABLED_KMS_KEY" || "INVALID_KMS_KEY" || "KMS_KEY_NOT_FOUND" || "KMS_OPT_IN_REQUIRED" || "CREATE_ENI_FAILED" || "DELETE_ENI_FAILED" || "SUBNET_NOT_FOUND" || "SECURITY_GROUP_NOT_FOUND" || "ENI_ACCESS_DENIED" || "SUBNET_ACCESS_DENIED" || "SECURITY_GROUP_ACCESS_DENIED" || "UNKNOWN_ERROR", // required
 * //       Details: "STRING_VALUE", // required
 * //     },
 * //     DeliveryStreamEncryptionConfiguration: { // DeliveryStreamEncryptionConfiguration
 * //       KeyARN: "STRING_VALUE",
 * //       KeyType: "AWS_OWNED_CMK" || "CUSTOMER_MANAGED_CMK",
 * //       Status: "ENABLED" || "ENABLING" || "ENABLING_FAILED" || "DISABLED" || "DISABLING" || "DISABLING_FAILED",
 * //       FailureDescription: {
 * //         Type: "RETIRE_KMS_GRANT_FAILED" || "CREATE_KMS_GRANT_FAILED" || "KMS_ACCESS_DENIED" || "DISABLED_KMS_KEY" || "INVALID_KMS_KEY" || "KMS_KEY_NOT_FOUND" || "KMS_OPT_IN_REQUIRED" || "CREATE_ENI_FAILED" || "DELETE_ENI_FAILED" || "SUBNET_NOT_FOUND" || "SECURITY_GROUP_NOT_FOUND" || "ENI_ACCESS_DENIED" || "SUBNET_ACCESS_DENIED" || "SECURITY_GROUP_ACCESS_DENIED" || "UNKNOWN_ERROR", // required
 * //         Details: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     DeliveryStreamType: "DirectPut" || "KinesisStreamAsSource" || "MSKAsSource", // required
 * //     VersionId: "STRING_VALUE", // required
 * //     CreateTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //     Source: { // SourceDescription
 * //       KinesisStreamSourceDescription: { // KinesisStreamSourceDescription
 * //         KinesisStreamARN: "STRING_VALUE",
 * //         RoleARN: "STRING_VALUE",
 * //         DeliveryStartTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       MSKSourceDescription: { // MSKSourceDescription
 * //         MSKClusterARN: "STRING_VALUE",
 * //         TopicName: "STRING_VALUE",
 * //         AuthenticationConfiguration: { // AuthenticationConfiguration
 * //           RoleARN: "STRING_VALUE", // required
 * //           Connectivity: "PUBLIC" || "PRIVATE", // required
 * //         },
 * //         DeliveryStartTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     Destinations: [ // DestinationDescriptionList // required
 * //       { // DestinationDescription
 * //         DestinationId: "STRING_VALUE", // required
 * //         S3DestinationDescription: { // S3DestinationDescription
 * //           RoleARN: "STRING_VALUE", // required
 * //           BucketARN: "STRING_VALUE", // required
 * //           Prefix: "STRING_VALUE",
 * //           ErrorOutputPrefix: "STRING_VALUE",
 * //           BufferingHints: { // BufferingHints
 * //             SizeInMBs: Number("int"),
 * //             IntervalInSeconds: Number("int"),
 * //           },
 * //           CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY", // required
 * //           EncryptionConfiguration: { // EncryptionConfiguration
 * //             NoEncryptionConfig: "NoEncryption",
 * //             KMSEncryptionConfig: { // KMSEncryptionConfig
 * //               AWSKMSKeyARN: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           CloudWatchLoggingOptions: { // CloudWatchLoggingOptions
 * //             Enabled: true || false,
 * //             LogGroupName: "STRING_VALUE",
 * //             LogStreamName: "STRING_VALUE",
 * //           },
 * //         },
 * //         ExtendedS3DestinationDescription: { // ExtendedS3DestinationDescription
 * //           RoleARN: "STRING_VALUE", // required
 * //           BucketARN: "STRING_VALUE", // required
 * //           Prefix: "STRING_VALUE",
 * //           ErrorOutputPrefix: "STRING_VALUE",
 * //           BufferingHints: {
 * //             SizeInMBs: Number("int"),
 * //             IntervalInSeconds: Number("int"),
 * //           },
 * //           CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY", // required
 * //           EncryptionConfiguration: {
 * //             NoEncryptionConfig: "NoEncryption",
 * //             KMSEncryptionConfig: {
 * //               AWSKMSKeyARN: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           CloudWatchLoggingOptions: {
 * //             Enabled: true || false,
 * //             LogGroupName: "STRING_VALUE",
 * //             LogStreamName: "STRING_VALUE",
 * //           },
 * //           ProcessingConfiguration: { // ProcessingConfiguration
 * //             Enabled: true || false,
 * //             Processors: [ // ProcessorList
 * //               { // Processor
 * //                 Type: "RecordDeAggregation" || "Decompression" || "CloudWatchLogProcessing" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 * //                 Parameters: [ // ProcessorParameterList
 * //                   { // ProcessorParameter
 * //                     ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat" || "DataMessageExtraction", // required
 * //                     ParameterValue: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           S3BackupMode: "Disabled" || "Enabled",
 * //           S3BackupDescription: {
 * //             RoleARN: "STRING_VALUE", // required
 * //             BucketARN: "STRING_VALUE", // required
 * //             Prefix: "STRING_VALUE",
 * //             ErrorOutputPrefix: "STRING_VALUE",
 * //             BufferingHints: {
 * //               SizeInMBs: Number("int"),
 * //               IntervalInSeconds: Number("int"),
 * //             },
 * //             CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY", // required
 * //             EncryptionConfiguration: {
 * //               NoEncryptionConfig: "NoEncryption",
 * //               KMSEncryptionConfig: {
 * //                 AWSKMSKeyARN: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             CloudWatchLoggingOptions: {
 * //               Enabled: true || false,
 * //               LogGroupName: "STRING_VALUE",
 * //               LogStreamName: "STRING_VALUE",
 * //             },
 * //           },
 * //           DataFormatConversionConfiguration: { // DataFormatConversionConfiguration
 * //             SchemaConfiguration: { // SchemaConfiguration
 * //               RoleARN: "STRING_VALUE",
 * //               CatalogId: "STRING_VALUE",
 * //               DatabaseName: "STRING_VALUE",
 * //               TableName: "STRING_VALUE",
 * //               Region: "STRING_VALUE",
 * //               VersionId: "STRING_VALUE",
 * //             },
 * //             InputFormatConfiguration: { // InputFormatConfiguration
 * //               Deserializer: { // Deserializer
 * //                 OpenXJsonSerDe: { // OpenXJsonSerDe
 * //                   ConvertDotsInJsonKeysToUnderscores: true || false,
 * //                   CaseInsensitive: true || false,
 * //                   ColumnToJsonKeyMappings: { // ColumnToJsonKeyMappings
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 HiveJsonSerDe: { // HiveJsonSerDe
 * //                   TimestampFormats: [ // ListOfNonEmptyStrings
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //             OutputFormatConfiguration: { // OutputFormatConfiguration
 * //               Serializer: { // Serializer
 * //                 ParquetSerDe: { // ParquetSerDe
 * //                   BlockSizeBytes: Number("int"),
 * //                   PageSizeBytes: Number("int"),
 * //                   Compression: "UNCOMPRESSED" || "GZIP" || "SNAPPY",
 * //                   EnableDictionaryCompression: true || false,
 * //                   MaxPaddingBytes: Number("int"),
 * //                   WriterVersion: "V1" || "V2",
 * //                 },
 * //                 OrcSerDe: { // OrcSerDe
 * //                   StripeSizeBytes: Number("int"),
 * //                   BlockSizeBytes: Number("int"),
 * //                   RowIndexStride: Number("int"),
 * //                   EnablePadding: true || false,
 * //                   PaddingTolerance: Number("double"),
 * //                   Compression: "NONE" || "ZLIB" || "SNAPPY",
 * //                   BloomFilterColumns: [ // ListOfNonEmptyStringsWithoutWhitespace
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   BloomFilterFalsePositiveProbability: Number("double"),
 * //                   DictionaryKeyThreshold: Number("double"),
 * //                   FormatVersion: "V0_11" || "V0_12",
 * //                 },
 * //               },
 * //             },
 * //             Enabled: true || false,
 * //           },
 * //           DynamicPartitioningConfiguration: { // DynamicPartitioningConfiguration
 * //             RetryOptions: { // RetryOptions
 * //               DurationInSeconds: Number("int"),
 * //             },
 * //             Enabled: true || false,
 * //           },
 * //           FileExtension: "STRING_VALUE",
 * //           CustomTimeZone: "STRING_VALUE",
 * //         },
 * //         RedshiftDestinationDescription: { // RedshiftDestinationDescription
 * //           RoleARN: "STRING_VALUE", // required
 * //           ClusterJDBCURL: "STRING_VALUE", // required
 * //           CopyCommand: { // CopyCommand
 * //             DataTableName: "STRING_VALUE", // required
 * //             DataTableColumns: "STRING_VALUE",
 * //             CopyOptions: "STRING_VALUE",
 * //           },
 * //           Username: "STRING_VALUE", // required
 * //           RetryOptions: { // RedshiftRetryOptions
 * //             DurationInSeconds: Number("int"),
 * //           },
 * //           S3DestinationDescription: {
 * //             RoleARN: "STRING_VALUE", // required
 * //             BucketARN: "STRING_VALUE", // required
 * //             Prefix: "STRING_VALUE",
 * //             ErrorOutputPrefix: "STRING_VALUE",
 * //             BufferingHints: {
 * //               SizeInMBs: Number("int"),
 * //               IntervalInSeconds: Number("int"),
 * //             },
 * //             CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY", // required
 * //             EncryptionConfiguration: {
 * //               NoEncryptionConfig: "NoEncryption",
 * //               KMSEncryptionConfig: {
 * //                 AWSKMSKeyARN: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             CloudWatchLoggingOptions: {
 * //               Enabled: true || false,
 * //               LogGroupName: "STRING_VALUE",
 * //               LogStreamName: "STRING_VALUE",
 * //             },
 * //           },
 * //           ProcessingConfiguration: {
 * //             Enabled: true || false,
 * //             Processors: [
 * //               {
 * //                 Type: "RecordDeAggregation" || "Decompression" || "CloudWatchLogProcessing" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 * //                 Parameters: [
 * //                   {
 * //                     ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat" || "DataMessageExtraction", // required
 * //                     ParameterValue: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           S3BackupMode: "Disabled" || "Enabled",
 * //           S3BackupDescription: {
 * //             RoleARN: "STRING_VALUE", // required
 * //             BucketARN: "STRING_VALUE", // required
 * //             Prefix: "STRING_VALUE",
 * //             ErrorOutputPrefix: "STRING_VALUE",
 * //             BufferingHints: {
 * //               SizeInMBs: Number("int"),
 * //               IntervalInSeconds: Number("int"),
 * //             },
 * //             CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY", // required
 * //             EncryptionConfiguration: {
 * //               NoEncryptionConfig: "NoEncryption",
 * //               KMSEncryptionConfig: {
 * //                 AWSKMSKeyARN: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             CloudWatchLoggingOptions: {
 * //               Enabled: true || false,
 * //               LogGroupName: "STRING_VALUE",
 * //               LogStreamName: "STRING_VALUE",
 * //             },
 * //           },
 * //           CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 * //         },
 * //         ElasticsearchDestinationDescription: { // ElasticsearchDestinationDescription
 * //           RoleARN: "STRING_VALUE",
 * //           DomainARN: "STRING_VALUE",
 * //           ClusterEndpoint: "STRING_VALUE",
 * //           IndexName: "STRING_VALUE",
 * //           TypeName: "STRING_VALUE",
 * //           IndexRotationPeriod: "NoRotation" || "OneHour" || "OneDay" || "OneWeek" || "OneMonth",
 * //           BufferingHints: { // ElasticsearchBufferingHints
 * //             IntervalInSeconds: Number("int"),
 * //             SizeInMBs: Number("int"),
 * //           },
 * //           RetryOptions: { // ElasticsearchRetryOptions
 * //             DurationInSeconds: Number("int"),
 * //           },
 * //           S3BackupMode: "FailedDocumentsOnly" || "AllDocuments",
 * //           S3DestinationDescription: {
 * //             RoleARN: "STRING_VALUE", // required
 * //             BucketARN: "STRING_VALUE", // required
 * //             Prefix: "STRING_VALUE",
 * //             ErrorOutputPrefix: "STRING_VALUE",
 * //             BufferingHints: "<BufferingHints>", // required
 * //             CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY", // required
 * //             EncryptionConfiguration: "<EncryptionConfiguration>", // required
 * //             CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 * //           },
 * //           ProcessingConfiguration: {
 * //             Enabled: true || false,
 * //             Processors: [
 * //               {
 * //                 Type: "RecordDeAggregation" || "Decompression" || "CloudWatchLogProcessing" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 * //                 Parameters: [
 * //                   {
 * //                     ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat" || "DataMessageExtraction", // required
 * //                     ParameterValue: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 * //           VpcConfigurationDescription: { // VpcConfigurationDescription
 * //             SubnetIds: [ // SubnetIdList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             RoleARN: "STRING_VALUE", // required
 * //             SecurityGroupIds: [ // SecurityGroupIdList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             VpcId: "STRING_VALUE", // required
 * //           },
 * //           DocumentIdOptions: { // DocumentIdOptions
 * //             DefaultDocumentIdFormat: "FIREHOSE_DEFAULT" || "NO_DOCUMENT_ID", // required
 * //           },
 * //         },
 * //         AmazonopensearchserviceDestinationDescription: { // AmazonopensearchserviceDestinationDescription
 * //           RoleARN: "STRING_VALUE",
 * //           DomainARN: "STRING_VALUE",
 * //           ClusterEndpoint: "STRING_VALUE",
 * //           IndexName: "STRING_VALUE",
 * //           TypeName: "STRING_VALUE",
 * //           IndexRotationPeriod: "NoRotation" || "OneHour" || "OneDay" || "OneWeek" || "OneMonth",
 * //           BufferingHints: { // AmazonopensearchserviceBufferingHints
 * //             IntervalInSeconds: Number("int"),
 * //             SizeInMBs: Number("int"),
 * //           },
 * //           RetryOptions: { // AmazonopensearchserviceRetryOptions
 * //             DurationInSeconds: Number("int"),
 * //           },
 * //           S3BackupMode: "FailedDocumentsOnly" || "AllDocuments",
 * //           S3DestinationDescription: "<S3DestinationDescription>",
 * //           ProcessingConfiguration: {
 * //             Enabled: true || false,
 * //             Processors: [
 * //               {
 * //                 Type: "RecordDeAggregation" || "Decompression" || "CloudWatchLogProcessing" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 * //                 Parameters: [
 * //                   {
 * //                     ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat" || "DataMessageExtraction", // required
 * //                     ParameterValue: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 * //           VpcConfigurationDescription: {
 * //             SubnetIds: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             RoleARN: "STRING_VALUE", // required
 * //             SecurityGroupIds: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             VpcId: "STRING_VALUE", // required
 * //           },
 * //           DocumentIdOptions: {
 * //             DefaultDocumentIdFormat: "FIREHOSE_DEFAULT" || "NO_DOCUMENT_ID", // required
 * //           },
 * //         },
 * //         SplunkDestinationDescription: { // SplunkDestinationDescription
 * //           HECEndpoint: "STRING_VALUE",
 * //           HECEndpointType: "Raw" || "Event",
 * //           HECToken: "STRING_VALUE",
 * //           HECAcknowledgmentTimeoutInSeconds: Number("int"),
 * //           RetryOptions: { // SplunkRetryOptions
 * //             DurationInSeconds: Number("int"),
 * //           },
 * //           S3BackupMode: "FailedEventsOnly" || "AllEvents",
 * //           S3DestinationDescription: "<S3DestinationDescription>",
 * //           ProcessingConfiguration: {
 * //             Enabled: true || false,
 * //             Processors: [
 * //               {
 * //                 Type: "RecordDeAggregation" || "Decompression" || "CloudWatchLogProcessing" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 * //                 Parameters: [
 * //                   {
 * //                     ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter" || "CompressionFormat" || "DataMessageExtraction", // required
 * //                     ParameterValue: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 * //           BufferingHints: { // SplunkBufferingHints
 * //             IntervalInSeconds: Number("int"),
 * //             SizeInMBs: Number("int"),
 * //           },
 * //         },
 * //         HttpEndpointDestinationDescription: { // HttpEndpointDestinationDescription
 * //           EndpointConfiguration: { // HttpEndpointDescription
 * //             Url: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //           BufferingHints: { // HttpEndpointBufferingHints
 * //             SizeInMBs: Number("int"),
 * //             IntervalInSeconds: Number("int"),
 * //           },
 * //           CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 * //           RequestConfiguration: { // HttpEndpointRequestConfiguration
 * //             ContentEncoding: "NONE" || "GZIP",
 * //             CommonAttributes: [ // HttpEndpointCommonAttributesList
 * //               { // HttpEndpointCommonAttribute
 * //                 AttributeName: "STRING_VALUE", // required
 * //                 AttributeValue: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           ProcessingConfiguration: "<ProcessingConfiguration>",
 * //           RoleARN: "STRING_VALUE",
 * //           RetryOptions: { // HttpEndpointRetryOptions
 * //             DurationInSeconds: Number("int"),
 * //           },
 * //           S3BackupMode: "FailedDataOnly" || "AllData",
 * //           S3DestinationDescription: "<S3DestinationDescription>",
 * //         },
 * //         SnowflakeDestinationDescription: { // SnowflakeDestinationDescription
 * //           AccountUrl: "STRING_VALUE",
 * //           User: "STRING_VALUE",
 * //           Database: "STRING_VALUE",
 * //           Schema: "STRING_VALUE",
 * //           Table: "STRING_VALUE",
 * //           SnowflakeRoleConfiguration: { // SnowflakeRoleConfiguration
 * //             Enabled: true || false,
 * //             SnowflakeRole: "STRING_VALUE",
 * //           },
 * //           DataLoadingOption: "JSON_MAPPING" || "VARIANT_CONTENT_MAPPING" || "VARIANT_CONTENT_AND_METADATA_MAPPING",
 * //           MetaDataColumnName: "STRING_VALUE",
 * //           ContentColumnName: "STRING_VALUE",
 * //           SnowflakeVpcConfiguration: { // SnowflakeVpcConfiguration
 * //             PrivateLinkVpceId: "STRING_VALUE", // required
 * //           },
 * //           CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 * //           ProcessingConfiguration: "<ProcessingConfiguration>",
 * //           RoleARN: "STRING_VALUE",
 * //           RetryOptions: { // SnowflakeRetryOptions
 * //             DurationInSeconds: Number("int"),
 * //           },
 * //           S3BackupMode: "FailedDataOnly" || "AllData",
 * //           S3DestinationDescription: "<S3DestinationDescription>",
 * //         },
 * //         AmazonOpenSearchServerlessDestinationDescription: { // AmazonOpenSearchServerlessDestinationDescription
 * //           RoleARN: "STRING_VALUE",
 * //           CollectionEndpoint: "STRING_VALUE",
 * //           IndexName: "STRING_VALUE",
 * //           BufferingHints: { // AmazonOpenSearchServerlessBufferingHints
 * //             IntervalInSeconds: Number("int"),
 * //             SizeInMBs: Number("int"),
 * //           },
 * //           RetryOptions: { // AmazonOpenSearchServerlessRetryOptions
 * //             DurationInSeconds: Number("int"),
 * //           },
 * //           S3BackupMode: "FailedDocumentsOnly" || "AllDocuments",
 * //           S3DestinationDescription: "<S3DestinationDescription>",
 * //           ProcessingConfiguration: "<ProcessingConfiguration>",
 * //           CloudWatchLoggingOptions: "<CloudWatchLoggingOptions>",
 * //           VpcConfigurationDescription: {
 * //             SubnetIds: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             RoleARN: "STRING_VALUE", // required
 * //             SecurityGroupIds: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             VpcId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     HasMoreDestinations: true || false, // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDeliveryStreamCommandInput - {@link DescribeDeliveryStreamCommandInput}
 * @returns {@link DescribeDeliveryStreamCommandOutput}
 * @see {@link DescribeDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 * @public
 */
export class DescribeDeliveryStreamCommand extends $Command
  .classBuilder<
    DescribeDeliveryStreamCommandInput,
    DescribeDeliveryStreamCommandOutput,
    FirehoseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FirehoseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Firehose_20150804", "DescribeDeliveryStream", {})
  .n("FirehoseClient", "DescribeDeliveryStreamCommand")
  .f(void 0, DescribeDeliveryStreamOutputFilterSensitiveLog)
  .ser(se_DescribeDeliveryStreamCommand)
  .de(de_DescribeDeliveryStreamCommand)
  .build() {}

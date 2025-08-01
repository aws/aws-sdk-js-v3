// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobsRequest } from "../models/models_2";
import { GetJobsResponse, GetJobsResponseFilterSensitiveLog } from "../models/models_3";
import { de_GetJobsCommand, se_GetJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobsCommand}.
 */
export interface GetJobsCommandInput extends GetJobsRequest {}
/**
 * @public
 *
 * The output of {@link GetJobsCommand}.
 */
export interface GetJobsCommandOutput extends GetJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves all current job definitions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetJobsCommand(input);
 * const response = await client.send(command);
 * // { // GetJobsResponse
 * //   Jobs: [ // JobList
 * //     { // Job
 * //       Name: "STRING_VALUE",
 * //       JobMode: "SCRIPT" || "VISUAL" || "NOTEBOOK",
 * //       JobRunQueuingEnabled: true || false,
 * //       Description: "STRING_VALUE",
 * //       LogUri: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       ExecutionProperty: { // ExecutionProperty
 * //         MaxConcurrentRuns: Number("int"),
 * //       },
 * //       Command: { // JobCommand
 * //         Name: "STRING_VALUE",
 * //         ScriptLocation: "STRING_VALUE",
 * //         PythonVersion: "STRING_VALUE",
 * //         Runtime: "STRING_VALUE",
 * //       },
 * //       DefaultArguments: { // GenericMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       NonOverridableArguments: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Connections: { // ConnectionsList
 * //         Connections: [ // ConnectionStringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       MaxRetries: Number("int"),
 * //       AllocatedCapacity: Number("int"),
 * //       Timeout: Number("int"),
 * //       MaxCapacity: Number("double"),
 * //       WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //       NumberOfWorkers: Number("int"),
 * //       SecurityConfiguration: "STRING_VALUE",
 * //       NotificationProperty: { // NotificationProperty
 * //         NotifyDelayAfter: Number("int"),
 * //       },
 * //       GlueVersion: "STRING_VALUE",
 * //       CodeGenConfigurationNodes: { // CodeGenConfigurationNodes
 * //         "<keys>": { // CodeGenConfigurationNode
 * //           AthenaConnectorSource: { // AthenaConnectorSource
 * //             Name: "STRING_VALUE", // required
 * //             ConnectionName: "STRING_VALUE", // required
 * //             ConnectorName: "STRING_VALUE", // required
 * //             ConnectionType: "STRING_VALUE", // required
 * //             ConnectionTable: "STRING_VALUE",
 * //             SchemaName: "STRING_VALUE", // required
 * //             OutputSchemas: [ // GlueSchemas
 * //               { // GlueSchema
 * //                 Columns: [ // GlueStudioSchemaColumnList
 * //                   { // GlueStudioSchemaColumn
 * //                     Name: "STRING_VALUE", // required
 * //                     Type: "STRING_VALUE",
 * //                     GlueStudioType: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           JDBCConnectorSource: { // JDBCConnectorSource
 * //             Name: "STRING_VALUE", // required
 * //             ConnectionName: "STRING_VALUE", // required
 * //             ConnectorName: "STRING_VALUE", // required
 * //             ConnectionType: "STRING_VALUE", // required
 * //             AdditionalOptions: { // JDBCConnectorOptions
 * //               FilterPredicate: "STRING_VALUE",
 * //               PartitionColumn: "STRING_VALUE",
 * //               LowerBound: Number("long"),
 * //               UpperBound: Number("long"),
 * //               NumPartitions: Number("long"),
 * //               JobBookmarkKeys: [ // EnclosedInStringProperties
 * //                 "STRING_VALUE",
 * //               ],
 * //               JobBookmarkKeysSortOrder: "STRING_VALUE",
 * //               DataTypeMapping: { // JDBCDataTypeMapping
 * //                 "<keys>": "DATE" || "STRING" || "TIMESTAMP" || "INT" || "FLOAT" || "LONG" || "BIGDECIMAL" || "BYTE" || "SHORT" || "DOUBLE",
 * //               },
 * //             },
 * //             ConnectionTable: "STRING_VALUE",
 * //             Query: "STRING_VALUE",
 * //             OutputSchemas: [
 * //               {
 * //                 Columns: [
 * //                   {
 * //                     Name: "STRING_VALUE", // required
 * //                     Type: "STRING_VALUE",
 * //                     GlueStudioType: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           SparkConnectorSource: { // SparkConnectorSource
 * //             Name: "STRING_VALUE", // required
 * //             ConnectionName: "STRING_VALUE", // required
 * //             ConnectorName: "STRING_VALUE", // required
 * //             ConnectionType: "STRING_VALUE", // required
 * //             AdditionalOptions: { // AdditionalOptions
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             OutputSchemas: [
 * //               {
 * //                 Columns: [
 * //                   {
 * //                     Name: "STRING_VALUE", // required
 * //                     Type: "STRING_VALUE",
 * //                     GlueStudioType: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           CatalogSource: { // CatalogSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             PartitionPredicate: "STRING_VALUE",
 * //             OutputSchemas: [
 * //               {
 * //                 Columns: [
 * //                   {
 * //                     Name: "STRING_VALUE", // required
 * //                     Type: "STRING_VALUE",
 * //                     GlueStudioType: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           RedshiftSource: { // RedshiftSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             RedshiftTmpDir: "STRING_VALUE",
 * //             TmpDirIAMRole: "STRING_VALUE",
 * //           },
 * //           S3CatalogSource: { // S3CatalogSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             PartitionPredicate: "STRING_VALUE",
 * //             AdditionalOptions: { // S3SourceAdditionalOptions
 * //               BoundedSize: Number("long"),
 * //               BoundedFiles: Number("long"),
 * //             },
 * //           },
 * //           S3CsvSource: { // S3CsvSource
 * //             Name: "STRING_VALUE", // required
 * //             Paths: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             CompressionType: "gzip" || "bzip2",
 * //             Exclusions: [
 * //               "STRING_VALUE",
 * //             ],
 * //             GroupSize: "STRING_VALUE",
 * //             GroupFiles: "STRING_VALUE",
 * //             Recurse: true || false,
 * //             MaxBand: Number("int"),
 * //             MaxFilesInBand: Number("int"),
 * //             AdditionalOptions: { // S3DirectSourceAdditionalOptions
 * //               BoundedSize: Number("long"),
 * //               BoundedFiles: Number("long"),
 * //               EnableSamplePath: true || false,
 * //               SamplePath: "STRING_VALUE",
 * //             },
 * //             Separator: "comma" || "ctrla" || "pipe" || "semicolon" || "tab", // required
 * //             Escaper: "STRING_VALUE",
 * //             QuoteChar: "quote" || "quillemet" || "single_quote" || "disabled", // required
 * //             Multiline: true || false,
 * //             WithHeader: true || false,
 * //             WriteHeader: true || false,
 * //             SkipFirst: true || false,
 * //             OptimizePerformance: true || false,
 * //             OutputSchemas: [
 * //               {
 * //                 Columns: [
 * //                   {
 * //                     Name: "STRING_VALUE", // required
 * //                     Type: "STRING_VALUE",
 * //                     GlueStudioType: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           S3JsonSource: { // S3JsonSource
 * //             Name: "STRING_VALUE", // required
 * //             Paths: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             CompressionType: "gzip" || "bzip2",
 * //             Exclusions: [
 * //               "STRING_VALUE",
 * //             ],
 * //             GroupSize: "STRING_VALUE",
 * //             GroupFiles: "STRING_VALUE",
 * //             Recurse: true || false,
 * //             MaxBand: Number("int"),
 * //             MaxFilesInBand: Number("int"),
 * //             AdditionalOptions: {
 * //               BoundedSize: Number("long"),
 * //               BoundedFiles: Number("long"),
 * //               EnableSamplePath: true || false,
 * //               SamplePath: "STRING_VALUE",
 * //             },
 * //             JsonPath: "STRING_VALUE",
 * //             Multiline: true || false,
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           S3ParquetSource: { // S3ParquetSource
 * //             Name: "STRING_VALUE", // required
 * //             Paths: "<EnclosedInStringProperties>", // required
 * //             CompressionType: "snappy" || "lzo" || "gzip" || "brotli" || "lz4" || "uncompressed" || "none",
 * //             Exclusions: "<EnclosedInStringProperties>",
 * //             GroupSize: "STRING_VALUE",
 * //             GroupFiles: "STRING_VALUE",
 * //             Recurse: true || false,
 * //             MaxBand: Number("int"),
 * //             MaxFilesInBand: Number("int"),
 * //             AdditionalOptions: {
 * //               BoundedSize: Number("long"),
 * //               BoundedFiles: Number("long"),
 * //               EnableSamplePath: true || false,
 * //               SamplePath: "STRING_VALUE",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           RelationalCatalogSource: { // RelationalCatalogSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //           },
 * //           DynamoDBCatalogSource: { // DynamoDBCatalogSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             PitrEnabled: true || false,
 * //             AdditionalOptions: { // DDBELTCatalogAdditionalOptions
 * //               DynamodbExport: "STRING_VALUE",
 * //               DynamodbUnnestDDBJson: true || false,
 * //             },
 * //           },
 * //           JDBCConnectorTarget: { // JDBCConnectorTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: [ // OneInput // required
 * //               "STRING_VALUE",
 * //             ],
 * //             ConnectionName: "STRING_VALUE", // required
 * //             ConnectionTable: "STRING_VALUE", // required
 * //             ConnectorName: "STRING_VALUE", // required
 * //             ConnectionType: "STRING_VALUE", // required
 * //             AdditionalOptions: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           SparkConnectorTarget: { // SparkConnectorTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             ConnectionName: "STRING_VALUE", // required
 * //             ConnectorName: "STRING_VALUE", // required
 * //             ConnectionType: "STRING_VALUE", // required
 * //             AdditionalOptions: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           CatalogTarget: { // BasicCatalogTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             PartitionKeys: [ // GlueStudioPathList
 * //               "<EnclosedInStringProperties>",
 * //             ],
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //           },
 * //           RedshiftTarget: { // RedshiftTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             RedshiftTmpDir: "STRING_VALUE",
 * //             TmpDirIAMRole: "STRING_VALUE",
 * //             UpsertRedshiftOptions: { // UpsertRedshiftTargetOptions
 * //               TableLocation: "STRING_VALUE",
 * //               ConnectionName: "STRING_VALUE",
 * //               UpsertKeys: [ // EnclosedInStringPropertiesMinOne
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           S3CatalogTarget: { // S3CatalogTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             PartitionKeys: [
 * //               "<EnclosedInStringProperties>",
 * //             ],
 * //             Table: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             SchemaChangePolicy: { // CatalogSchemaChangePolicy
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //             },
 * //             AutoDataQuality: { // AutoDataQuality
 * //               IsEnabled: true || false,
 * //               EvaluationContext: "STRING_VALUE",
 * //             },
 * //           },
 * //           S3GlueParquetTarget: { // S3GlueParquetTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             PartitionKeys: [
 * //               "<EnclosedInStringProperties>",
 * //             ],
 * //             Path: "STRING_VALUE", // required
 * //             Compression: "snappy" || "lzo" || "gzip" || "brotli" || "lz4" || "uncompressed" || "none",
 * //             NumberTargetPartitions: "STRING_VALUE",
 * //             SchemaChangePolicy: { // DirectSchemaChangePolicy
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //               Table: "STRING_VALUE",
 * //               Database: "STRING_VALUE",
 * //             },
 * //             AutoDataQuality: {
 * //               IsEnabled: true || false,
 * //               EvaluationContext: "STRING_VALUE",
 * //             },
 * //           },
 * //           S3DirectTarget: { // S3DirectTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             PartitionKeys: [
 * //               "<EnclosedInStringProperties>",
 * //             ],
 * //             Path: "STRING_VALUE", // required
 * //             Compression: "STRING_VALUE",
 * //             NumberTargetPartitions: "STRING_VALUE",
 * //             Format: "json" || "csv" || "avro" || "orc" || "parquet" || "hudi" || "delta" || "iceberg" || "hyper" || "xml", // required
 * //             SchemaChangePolicy: {
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //               Table: "STRING_VALUE",
 * //               Database: "STRING_VALUE",
 * //             },
 * //             AutoDataQuality: {
 * //               IsEnabled: true || false,
 * //               EvaluationContext: "STRING_VALUE",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           ApplyMapping: { // ApplyMapping
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Mapping: [ // Mappings // required
 * //               { // Mapping
 * //                 ToKey: "STRING_VALUE",
 * //                 FromPath: "<EnclosedInStringProperties>",
 * //                 FromType: "STRING_VALUE",
 * //                 ToType: "STRING_VALUE",
 * //                 Dropped: true || false,
 * //                 Children: [
 * //                   {
 * //                     ToKey: "STRING_VALUE",
 * //                     FromPath: "<EnclosedInStringProperties>",
 * //                     FromType: "STRING_VALUE",
 * //                     ToType: "STRING_VALUE",
 * //                     Dropped: true || false,
 * //                     Children: "<Mappings>",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           SelectFields: { // SelectFields
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Paths: [ // required
 * //               "<EnclosedInStringProperties>",
 * //             ],
 * //           },
 * //           DropFields: { // DropFields
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Paths: "<GlueStudioPathList>", // required
 * //           },
 * //           RenameField: { // RenameField
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             SourcePath: "<EnclosedInStringProperties>", // required
 * //             TargetPath: "<EnclosedInStringProperties>", // required
 * //           },
 * //           Spigot: { // Spigot
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Path: "STRING_VALUE", // required
 * //             Topk: Number("int"),
 * //             Prob: Number("double"),
 * //           },
 * //           Join: { // Join
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: [ // TwoInputs // required
 * //               "STRING_VALUE",
 * //             ],
 * //             JoinType: "equijoin" || "left" || "right" || "outer" || "leftsemi" || "leftanti", // required
 * //             Columns: [ // JoinColumns // required
 * //               { // JoinColumn
 * //                 From: "STRING_VALUE", // required
 * //                 Keys: "<GlueStudioPathList>", // required
 * //               },
 * //             ],
 * //           },
 * //           SplitFields: { // SplitFields
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Paths: "<GlueStudioPathList>", // required
 * //           },
 * //           SelectFromCollection: { // SelectFromCollection
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Index: Number("int"), // required
 * //           },
 * //           FillMissingValues: { // FillMissingValues
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             ImputedPath: "STRING_VALUE", // required
 * //             FilledPath: "STRING_VALUE",
 * //           },
 * //           Filter: { // Filter
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             LogicalOperator: "AND" || "OR", // required
 * //             Filters: [ // FilterExpressions // required
 * //               { // FilterExpression
 * //                 Operation: "EQ" || "LT" || "GT" || "LTE" || "GTE" || "REGEX" || "ISNULL", // required
 * //                 Negated: true || false,
 * //                 Values: [ // FilterValues // required
 * //                   { // FilterValue
 * //                     Type: "COLUMNEXTRACTED" || "CONSTANT", // required
 * //                     Value: "<EnclosedInStringProperties>", // required
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           CustomCode: { // CustomCode
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: [ // ManyInputs // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Code: "STRING_VALUE", // required
 * //             ClassName: "STRING_VALUE", // required
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           SparkSQL: { // SparkSQL
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             SqlQuery: "STRING_VALUE", // required
 * //             SqlAliases: [ // SqlAliases // required
 * //               { // SqlAlias
 * //                 From: "STRING_VALUE", // required
 * //                 Alias: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           DirectKinesisSource: { // DirectKinesisSource
 * //             Name: "STRING_VALUE", // required
 * //             WindowSize: Number("int"),
 * //             DetectSchema: true || false,
 * //             StreamingOptions: { // KinesisStreamingSourceOptions
 * //               EndpointUrl: "STRING_VALUE",
 * //               StreamName: "STRING_VALUE",
 * //               Classification: "STRING_VALUE",
 * //               Delimiter: "STRING_VALUE",
 * //               StartingPosition: "latest" || "trim_horizon" || "earliest" || "timestamp",
 * //               MaxFetchTimeInMs: Number("long"),
 * //               MaxFetchRecordsPerShard: Number("long"),
 * //               MaxRecordPerRead: Number("long"),
 * //               AddIdleTimeBetweenReads: true || false,
 * //               IdleTimeBetweenReadsInMs: Number("long"),
 * //               DescribeShardInterval: Number("long"),
 * //               NumRetries: Number("int"),
 * //               RetryIntervalMs: Number("long"),
 * //               MaxRetryIntervalMs: Number("long"),
 * //               AvoidEmptyBatches: true || false,
 * //               StreamArn: "STRING_VALUE",
 * //               RoleArn: "STRING_VALUE",
 * //               RoleSessionName: "STRING_VALUE",
 * //               AddRecordTimestamp: "STRING_VALUE",
 * //               EmitConsumerLagMetrics: "STRING_VALUE",
 * //               StartingTimestamp: new Date("TIMESTAMP"),
 * //               FanoutConsumerARN: "STRING_VALUE",
 * //             },
 * //             DataPreviewOptions: { // StreamingDataPreviewOptions
 * //               PollingTime: Number("long"),
 * //               RecordPollingLimit: Number("long"),
 * //             },
 * //           },
 * //           DirectKafkaSource: { // DirectKafkaSource
 * //             Name: "STRING_VALUE", // required
 * //             StreamingOptions: { // KafkaStreamingSourceOptions
 * //               BootstrapServers: "STRING_VALUE",
 * //               SecurityProtocol: "STRING_VALUE",
 * //               ConnectionName: "STRING_VALUE",
 * //               TopicName: "STRING_VALUE",
 * //               Assign: "STRING_VALUE",
 * //               SubscribePattern: "STRING_VALUE",
 * //               Classification: "STRING_VALUE",
 * //               Delimiter: "STRING_VALUE",
 * //               StartingOffsets: "STRING_VALUE",
 * //               EndingOffsets: "STRING_VALUE",
 * //               PollTimeoutMs: Number("long"),
 * //               NumRetries: Number("int"),
 * //               RetryIntervalMs: Number("long"),
 * //               MaxOffsetsPerTrigger: Number("long"),
 * //               MinPartitions: Number("int"),
 * //               IncludeHeaders: true || false,
 * //               AddRecordTimestamp: "STRING_VALUE",
 * //               EmitConsumerLagMetrics: "STRING_VALUE",
 * //               StartingTimestamp: new Date("TIMESTAMP"),
 * //             },
 * //             WindowSize: Number("int"),
 * //             DetectSchema: true || false,
 * //             DataPreviewOptions: {
 * //               PollingTime: Number("long"),
 * //               RecordPollingLimit: Number("long"),
 * //             },
 * //           },
 * //           CatalogKinesisSource: { // CatalogKinesisSource
 * //             Name: "STRING_VALUE", // required
 * //             WindowSize: Number("int"),
 * //             DetectSchema: true || false,
 * //             Table: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             StreamingOptions: {
 * //               EndpointUrl: "STRING_VALUE",
 * //               StreamName: "STRING_VALUE",
 * //               Classification: "STRING_VALUE",
 * //               Delimiter: "STRING_VALUE",
 * //               StartingPosition: "latest" || "trim_horizon" || "earliest" || "timestamp",
 * //               MaxFetchTimeInMs: Number("long"),
 * //               MaxFetchRecordsPerShard: Number("long"),
 * //               MaxRecordPerRead: Number("long"),
 * //               AddIdleTimeBetweenReads: true || false,
 * //               IdleTimeBetweenReadsInMs: Number("long"),
 * //               DescribeShardInterval: Number("long"),
 * //               NumRetries: Number("int"),
 * //               RetryIntervalMs: Number("long"),
 * //               MaxRetryIntervalMs: Number("long"),
 * //               AvoidEmptyBatches: true || false,
 * //               StreamArn: "STRING_VALUE",
 * //               RoleArn: "STRING_VALUE",
 * //               RoleSessionName: "STRING_VALUE",
 * //               AddRecordTimestamp: "STRING_VALUE",
 * //               EmitConsumerLagMetrics: "STRING_VALUE",
 * //               StartingTimestamp: new Date("TIMESTAMP"),
 * //               FanoutConsumerARN: "STRING_VALUE",
 * //             },
 * //             DataPreviewOptions: {
 * //               PollingTime: Number("long"),
 * //               RecordPollingLimit: Number("long"),
 * //             },
 * //           },
 * //           CatalogKafkaSource: { // CatalogKafkaSource
 * //             Name: "STRING_VALUE", // required
 * //             WindowSize: Number("int"),
 * //             DetectSchema: true || false,
 * //             Table: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             StreamingOptions: {
 * //               BootstrapServers: "STRING_VALUE",
 * //               SecurityProtocol: "STRING_VALUE",
 * //               ConnectionName: "STRING_VALUE",
 * //               TopicName: "STRING_VALUE",
 * //               Assign: "STRING_VALUE",
 * //               SubscribePattern: "STRING_VALUE",
 * //               Classification: "STRING_VALUE",
 * //               Delimiter: "STRING_VALUE",
 * //               StartingOffsets: "STRING_VALUE",
 * //               EndingOffsets: "STRING_VALUE",
 * //               PollTimeoutMs: Number("long"),
 * //               NumRetries: Number("int"),
 * //               RetryIntervalMs: Number("long"),
 * //               MaxOffsetsPerTrigger: Number("long"),
 * //               MinPartitions: Number("int"),
 * //               IncludeHeaders: true || false,
 * //               AddRecordTimestamp: "STRING_VALUE",
 * //               EmitConsumerLagMetrics: "STRING_VALUE",
 * //               StartingTimestamp: new Date("TIMESTAMP"),
 * //             },
 * //             DataPreviewOptions: {
 * //               PollingTime: Number("long"),
 * //               RecordPollingLimit: Number("long"),
 * //             },
 * //           },
 * //           DropNullFields: { // DropNullFields
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             NullCheckBoxList: { // NullCheckBoxList
 * //               IsEmpty: true || false,
 * //               IsNullString: true || false,
 * //               IsNegOne: true || false,
 * //             },
 * //             NullTextList: [ // NullValueFields
 * //               { // NullValueField
 * //                 Value: "STRING_VALUE", // required
 * //                 Datatype: { // Datatype
 * //                   Id: "STRING_VALUE", // required
 * //                   Label: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           Merge: { // Merge
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Source: "STRING_VALUE", // required
 * //             PrimaryKeys: "<GlueStudioPathList>", // required
 * //           },
 * //           Union: { // Union
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             UnionType: "ALL" || "DISTINCT", // required
 * //           },
 * //           PIIDetection: { // PIIDetection
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             PiiType: "RowAudit" || "RowHashing" || "RowMasking" || "RowPartialMasking" || "ColumnAudit" || "ColumnHashing" || "ColumnMasking", // required
 * //             EntityTypesToDetect: "<EnclosedInStringProperties>", // required
 * //             OutputColumnName: "STRING_VALUE",
 * //             SampleFraction: Number("double"),
 * //             ThresholdFraction: Number("double"),
 * //             MaskValue: "STRING_VALUE",
 * //             RedactText: "STRING_VALUE",
 * //             RedactChar: "STRING_VALUE",
 * //             MatchPattern: "STRING_VALUE",
 * //             NumLeftCharsToExclude: Number("int"),
 * //             NumRightCharsToExclude: Number("int"),
 * //             DetectionParameters: "STRING_VALUE",
 * //             DetectionSensitivity: "STRING_VALUE",
 * //           },
 * //           Aggregate: { // Aggregate
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Groups: "<GlueStudioPathList>", // required
 * //             Aggs: [ // AggregateOperations // required
 * //               { // AggregateOperation
 * //                 Column: "<EnclosedInStringProperties>", // required
 * //                 AggFunc: "avg" || "countDistinct" || "count" || "first" || "last" || "kurtosis" || "max" || "min" || "skewness" || "stddev_samp" || "stddev_pop" || "sum" || "sumDistinct" || "var_samp" || "var_pop", // required
 * //               },
 * //             ],
 * //           },
 * //           DropDuplicates: { // DropDuplicates
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Columns: [ // LimitedPathList
 * //               [ // LimitedStringList
 * //                 "STRING_VALUE",
 * //               ],
 * //             ],
 * //           },
 * //           GovernedCatalogTarget: { // GovernedCatalogTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             PartitionKeys: "<GlueStudioPathList>",
 * //             Table: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             SchemaChangePolicy: {
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //             },
 * //           },
 * //           GovernedCatalogSource: { // GovernedCatalogSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             PartitionPredicate: "STRING_VALUE",
 * //             AdditionalOptions: {
 * //               BoundedSize: Number("long"),
 * //               BoundedFiles: Number("long"),
 * //             },
 * //           },
 * //           MicrosoftSQLServerCatalogSource: { // MicrosoftSQLServerCatalogSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //           },
 * //           MySQLCatalogSource: { // MySQLCatalogSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //           },
 * //           OracleSQLCatalogSource: { // OracleSQLCatalogSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //           },
 * //           PostgreSQLCatalogSource: { // PostgreSQLCatalogSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //           },
 * //           MicrosoftSQLServerCatalogTarget: { // MicrosoftSQLServerCatalogTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //           },
 * //           MySQLCatalogTarget: { // MySQLCatalogTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //           },
 * //           OracleSQLCatalogTarget: { // OracleSQLCatalogTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //           },
 * //           PostgreSQLCatalogTarget: { // PostgreSQLCatalogTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //           },
 * //           Route: { // Route
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             GroupFiltersList: [ // GroupFiltersList // required
 * //               { // GroupFilters
 * //                 GroupName: "STRING_VALUE", // required
 * //                 Filters: [ // required
 * //                   {
 * //                     Operation: "EQ" || "LT" || "GT" || "LTE" || "GTE" || "REGEX" || "ISNULL", // required
 * //                     Negated: true || false,
 * //                     Values: [ // required
 * //                       {
 * //                         Type: "COLUMNEXTRACTED" || "CONSTANT", // required
 * //                         Value: "<EnclosedInStringProperties>", // required
 * //                       },
 * //                     ],
 * //                   },
 * //                 ],
 * //                 LogicalOperator: "AND" || "OR", // required
 * //               },
 * //             ],
 * //           },
 * //           DynamicTransform: { // DynamicTransform
 * //             Name: "STRING_VALUE", // required
 * //             TransformName: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Parameters: [ // TransformConfigParameterList
 * //               { // TransformConfigParameter
 * //                 Name: "STRING_VALUE", // required
 * //                 Type: "str" || "int" || "float" || "complex" || "bool" || "list" || "null", // required
 * //                 ValidationRule: "STRING_VALUE",
 * //                 ValidationMessage: "STRING_VALUE",
 * //                 Value: "<EnclosedInStringProperties>",
 * //                 ListType: "str" || "int" || "float" || "complex" || "bool" || "list" || "null",
 * //                 IsOptional: true || false,
 * //               },
 * //             ],
 * //             FunctionName: "STRING_VALUE", // required
 * //             Path: "STRING_VALUE", // required
 * //             Version: "STRING_VALUE",
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           EvaluateDataQuality: { // EvaluateDataQuality
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Ruleset: "STRING_VALUE", // required
 * //             Output: "PrimaryInput" || "EvaluationResults",
 * //             PublishingOptions: { // DQResultsPublishingOptions
 * //               EvaluationContext: "STRING_VALUE",
 * //               ResultsS3Prefix: "STRING_VALUE",
 * //               CloudWatchMetricsEnabled: true || false,
 * //               ResultsPublishingEnabled: true || false,
 * //             },
 * //             StopJobOnFailureOptions: { // DQStopJobOnFailureOptions
 * //               StopJobOnFailureTiming: "Immediate" || "AfterDataLoad",
 * //             },
 * //           },
 * //           S3CatalogHudiSource: { // S3CatalogHudiSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             AdditionalHudiOptions: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           CatalogHudiSource: { // CatalogHudiSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             AdditionalHudiOptions: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           S3HudiSource: { // S3HudiSource
 * //             Name: "STRING_VALUE", // required
 * //             Paths: "<EnclosedInStringProperties>", // required
 * //             AdditionalHudiOptions: "<AdditionalOptions>",
 * //             AdditionalOptions: {
 * //               BoundedSize: Number("long"),
 * //               BoundedFiles: Number("long"),
 * //               EnableSamplePath: true || false,
 * //               SamplePath: "STRING_VALUE",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           S3HudiCatalogTarget: { // S3HudiCatalogTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             PartitionKeys: "<GlueStudioPathList>",
 * //             Table: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             AdditionalOptions: "<AdditionalOptions>", // required
 * //             SchemaChangePolicy: {
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //             },
 * //             AutoDataQuality: {
 * //               IsEnabled: true || false,
 * //               EvaluationContext: "STRING_VALUE",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           S3HudiDirectTarget: { // S3HudiDirectTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Path: "STRING_VALUE", // required
 * //             Compression: "gzip" || "lzo" || "uncompressed" || "snappy", // required
 * //             NumberTargetPartitions: "STRING_VALUE",
 * //             PartitionKeys: "<GlueStudioPathList>",
 * //             Format: "json" || "csv" || "avro" || "orc" || "parquet" || "hudi" || "delta" || "iceberg" || "hyper" || "xml", // required
 * //             AdditionalOptions: "<AdditionalOptions>", // required
 * //             SchemaChangePolicy: {
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //               Table: "STRING_VALUE",
 * //               Database: "STRING_VALUE",
 * //             },
 * //             AutoDataQuality: {
 * //               IsEnabled: true || false,
 * //               EvaluationContext: "STRING_VALUE",
 * //             },
 * //           },
 * //           DirectJDBCSource: { // DirectJDBCSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             ConnectionName: "STRING_VALUE", // required
 * //             ConnectionType: "sqlserver" || "mysql" || "oracle" || "postgresql" || "redshift", // required
 * //             RedshiftTmpDir: "STRING_VALUE",
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           S3CatalogDeltaSource: { // S3CatalogDeltaSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             AdditionalDeltaOptions: "<AdditionalOptions>",
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           CatalogDeltaSource: { // CatalogDeltaSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             AdditionalDeltaOptions: "<AdditionalOptions>",
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           S3DeltaSource: { // S3DeltaSource
 * //             Name: "STRING_VALUE", // required
 * //             Paths: "<EnclosedInStringProperties>", // required
 * //             AdditionalDeltaOptions: "<AdditionalOptions>",
 * //             AdditionalOptions: {
 * //               BoundedSize: Number("long"),
 * //               BoundedFiles: Number("long"),
 * //               EnableSamplePath: true || false,
 * //               SamplePath: "STRING_VALUE",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           S3DeltaCatalogTarget: { // S3DeltaCatalogTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             PartitionKeys: "<GlueStudioPathList>",
 * //             Table: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             AdditionalOptions: "<AdditionalOptions>",
 * //             SchemaChangePolicy: {
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //             },
 * //             AutoDataQuality: "<AutoDataQuality>",
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           S3DeltaDirectTarget: { // S3DeltaDirectTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             PartitionKeys: "<GlueStudioPathList>",
 * //             Path: "STRING_VALUE", // required
 * //             Compression: "uncompressed" || "snappy", // required
 * //             NumberTargetPartitions: "STRING_VALUE",
 * //             Format: "json" || "csv" || "avro" || "orc" || "parquet" || "hudi" || "delta" || "iceberg" || "hyper" || "xml", // required
 * //             AdditionalOptions: "<AdditionalOptions>",
 * //             SchemaChangePolicy: {
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //               Table: "STRING_VALUE",
 * //               Database: "STRING_VALUE",
 * //             },
 * //             AutoDataQuality: "<AutoDataQuality>",
 * //           },
 * //           AmazonRedshiftSource: { // AmazonRedshiftSource
 * //             Name: "STRING_VALUE",
 * //             Data: { // AmazonRedshiftNodeData
 * //               AccessType: "STRING_VALUE",
 * //               SourceType: "STRING_VALUE",
 * //               Connection: { // Option
 * //                 Value: "STRING_VALUE",
 * //                 Label: "STRING_VALUE",
 * //                 Description: "STRING_VALUE",
 * //               },
 * //               Schema: {
 * //                 Value: "STRING_VALUE",
 * //                 Label: "STRING_VALUE",
 * //                 Description: "STRING_VALUE",
 * //               },
 * //               Table: {
 * //                 Value: "STRING_VALUE",
 * //                 Label: "STRING_VALUE",
 * //                 Description: "STRING_VALUE",
 * //               },
 * //               CatalogDatabase: {
 * //                 Value: "STRING_VALUE",
 * //                 Label: "STRING_VALUE",
 * //                 Description: "STRING_VALUE",
 * //               },
 * //               CatalogTable: {
 * //                 Value: "STRING_VALUE",
 * //                 Label: "STRING_VALUE",
 * //                 Description: "STRING_VALUE",
 * //               },
 * //               CatalogRedshiftSchema: "STRING_VALUE",
 * //               CatalogRedshiftTable: "STRING_VALUE",
 * //               TempDir: "STRING_VALUE",
 * //               IamRole: "<Option>",
 * //               AdvancedOptions: [ // AmazonRedshiftAdvancedOptions
 * //                 { // AmazonRedshiftAdvancedOption
 * //                   Key: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               SampleQuery: "STRING_VALUE",
 * //               PreAction: "STRING_VALUE",
 * //               PostAction: "STRING_VALUE",
 * //               Action: "STRING_VALUE",
 * //               TablePrefix: "STRING_VALUE",
 * //               Upsert: true || false,
 * //               MergeAction: "STRING_VALUE",
 * //               MergeWhenMatched: "STRING_VALUE",
 * //               MergeWhenNotMatched: "STRING_VALUE",
 * //               MergeClause: "STRING_VALUE",
 * //               CrawlerConnection: "STRING_VALUE",
 * //               TableSchema: [ // OptionList
 * //                 "<Option>",
 * //               ],
 * //               StagingTable: "STRING_VALUE",
 * //               SelectedColumns: [
 * //                 "<Option>",
 * //               ],
 * //             },
 * //           },
 * //           AmazonRedshiftTarget: { // AmazonRedshiftTarget
 * //             Name: "STRING_VALUE",
 * //             Data: {
 * //               AccessType: "STRING_VALUE",
 * //               SourceType: "STRING_VALUE",
 * //               Connection: "<Option>",
 * //               Schema: "<Option>",
 * //               Table: "<Option>",
 * //               CatalogDatabase: "<Option>",
 * //               CatalogTable: "<Option>",
 * //               CatalogRedshiftSchema: "STRING_VALUE",
 * //               CatalogRedshiftTable: "STRING_VALUE",
 * //               TempDir: "STRING_VALUE",
 * //               IamRole: "<Option>",
 * //               AdvancedOptions: [
 * //                 {
 * //                   Key: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               SampleQuery: "STRING_VALUE",
 * //               PreAction: "STRING_VALUE",
 * //               PostAction: "STRING_VALUE",
 * //               Action: "STRING_VALUE",
 * //               TablePrefix: "STRING_VALUE",
 * //               Upsert: true || false,
 * //               MergeAction: "STRING_VALUE",
 * //               MergeWhenMatched: "STRING_VALUE",
 * //               MergeWhenNotMatched: "STRING_VALUE",
 * //               MergeClause: "STRING_VALUE",
 * //               CrawlerConnection: "STRING_VALUE",
 * //               TableSchema: [
 * //                 "<Option>",
 * //               ],
 * //               StagingTable: "STRING_VALUE",
 * //               SelectedColumns: [
 * //                 "<Option>",
 * //               ],
 * //             },
 * //             Inputs: "<OneInput>",
 * //           },
 * //           EvaluateDataQualityMultiFrame: { // EvaluateDataQualityMultiFrame
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             AdditionalDataSources: { // DQDLAliases
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             Ruleset: "STRING_VALUE", // required
 * //             PublishingOptions: {
 * //               EvaluationContext: "STRING_VALUE",
 * //               ResultsS3Prefix: "STRING_VALUE",
 * //               CloudWatchMetricsEnabled: true || false,
 * //               ResultsPublishingEnabled: true || false,
 * //             },
 * //             AdditionalOptions: { // DQAdditionalOptions
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             StopJobOnFailureOptions: {
 * //               StopJobOnFailureTiming: "Immediate" || "AfterDataLoad",
 * //             },
 * //           },
 * //           Recipe: { // Recipe
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             RecipeReference: { // RecipeReference
 * //               RecipeArn: "STRING_VALUE", // required
 * //               RecipeVersion: "STRING_VALUE", // required
 * //             },
 * //             RecipeSteps: [ // RecipeSteps
 * //               { // RecipeStep
 * //                 Action: { // RecipeAction
 * //                   Operation: "STRING_VALUE", // required
 * //                   Parameters: { // ParameterMap
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 ConditionExpressions: [ // ConditionExpressionList
 * //                   { // ConditionExpression
 * //                     Condition: "STRING_VALUE", // required
 * //                     Value: "STRING_VALUE",
 * //                     TargetColumn: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           SnowflakeSource: { // SnowflakeSource
 * //             Name: "STRING_VALUE", // required
 * //             Data: { // SnowflakeNodeData
 * //               SourceType: "STRING_VALUE",
 * //               Connection: "<Option>",
 * //               Schema: "STRING_VALUE",
 * //               Table: "STRING_VALUE",
 * //               Database: "STRING_VALUE",
 * //               TempDir: "STRING_VALUE",
 * //               IamRole: "<Option>",
 * //               AdditionalOptions: "<AdditionalOptions>",
 * //               SampleQuery: "STRING_VALUE",
 * //               PreAction: "STRING_VALUE",
 * //               PostAction: "STRING_VALUE",
 * //               Action: "STRING_VALUE",
 * //               Upsert: true || false,
 * //               MergeAction: "STRING_VALUE",
 * //               MergeWhenMatched: "STRING_VALUE",
 * //               MergeWhenNotMatched: "STRING_VALUE",
 * //               MergeClause: "STRING_VALUE",
 * //               StagingTable: "STRING_VALUE",
 * //               SelectedColumns: [
 * //                 "<Option>",
 * //               ],
 * //               AutoPushdown: true || false,
 * //               TableSchema: "<OptionList>",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           SnowflakeTarget: { // SnowflakeTarget
 * //             Name: "STRING_VALUE", // required
 * //             Data: {
 * //               SourceType: "STRING_VALUE",
 * //               Connection: "<Option>",
 * //               Schema: "STRING_VALUE",
 * //               Table: "STRING_VALUE",
 * //               Database: "STRING_VALUE",
 * //               TempDir: "STRING_VALUE",
 * //               IamRole: "<Option>",
 * //               AdditionalOptions: "<AdditionalOptions>",
 * //               SampleQuery: "STRING_VALUE",
 * //               PreAction: "STRING_VALUE",
 * //               PostAction: "STRING_VALUE",
 * //               Action: "STRING_VALUE",
 * //               Upsert: true || false,
 * //               MergeAction: "STRING_VALUE",
 * //               MergeWhenMatched: "STRING_VALUE",
 * //               MergeWhenNotMatched: "STRING_VALUE",
 * //               MergeClause: "STRING_VALUE",
 * //               StagingTable: "STRING_VALUE",
 * //               SelectedColumns: "<OptionList>",
 * //               AutoPushdown: true || false,
 * //               TableSchema: "<OptionList>",
 * //             },
 * //             Inputs: "<OneInput>",
 * //           },
 * //           ConnectorDataSource: { // ConnectorDataSource
 * //             Name: "STRING_VALUE", // required
 * //             ConnectionType: "STRING_VALUE", // required
 * //             Data: { // ConnectorOptions // required
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           ConnectorDataTarget: { // ConnectorDataTarget
 * //             Name: "STRING_VALUE", // required
 * //             ConnectionType: "STRING_VALUE", // required
 * //             Data: { // required
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             Inputs: "<OneInput>",
 * //           },
 * //           S3CatalogIcebergSource: { // S3CatalogIcebergSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             AdditionalIcebergOptions: "<AdditionalOptions>",
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           CatalogIcebergSource: { // CatalogIcebergSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             AdditionalIcebergOptions: "<AdditionalOptions>",
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           S3IcebergCatalogTarget: { // S3IcebergCatalogTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             PartitionKeys: "<GlueStudioPathList>",
 * //             Table: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             AdditionalOptions: "<AdditionalOptions>",
 * //             SchemaChangePolicy: {
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //             },
 * //             AutoDataQuality: "<AutoDataQuality>",
 * //           },
 * //           S3IcebergDirectTarget: { // S3IcebergDirectTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             PartitionKeys: "<GlueStudioPathList>",
 * //             Path: "STRING_VALUE", // required
 * //             Format: "json" || "csv" || "avro" || "orc" || "parquet" || "hudi" || "delta" || "iceberg" || "hyper" || "xml", // required
 * //             AdditionalOptions: "<AdditionalOptions>",
 * //             SchemaChangePolicy: {
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //               Table: "STRING_VALUE",
 * //               Database: "STRING_VALUE",
 * //             },
 * //             AutoDataQuality: "<AutoDataQuality>",
 * //             Compression: "gzip" || "lzo" || "uncompressed" || "snappy", // required
 * //             NumberTargetPartitions: "STRING_VALUE",
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           S3ExcelSource: { // S3ExcelSource
 * //             Name: "STRING_VALUE", // required
 * //             Paths: "<EnclosedInStringProperties>", // required
 * //             CompressionType: "snappy" || "lzo" || "gzip" || "brotli" || "lz4" || "uncompressed" || "none",
 * //             Exclusions: "<EnclosedInStringProperties>",
 * //             GroupSize: "STRING_VALUE",
 * //             GroupFiles: "STRING_VALUE",
 * //             Recurse: true || false,
 * //             MaxBand: Number("int"),
 * //             MaxFilesInBand: Number("int"),
 * //             AdditionalOptions: "<S3DirectSourceAdditionalOptions>",
 * //             NumberRows: Number("long"),
 * //             SkipFooter: Number("int"),
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           S3HyperDirectTarget: { // S3HyperDirectTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Format: "json" || "csv" || "avro" || "orc" || "parquet" || "hudi" || "delta" || "iceberg" || "hyper" || "xml",
 * //             PartitionKeys: "<GlueStudioPathList>",
 * //             Path: "STRING_VALUE", // required
 * //             Compression: "uncompressed",
 * //             SchemaChangePolicy: "<DirectSchemaChangePolicy>",
 * //             AutoDataQuality: "<AutoDataQuality>",
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //           DynamoDBELTConnectorSource: { // DynamoDBELTConnectorSource
 * //             Name: "STRING_VALUE", // required
 * //             ConnectionOptions: { // DDBELTConnectionOptions
 * //               DynamodbExport: "ddb" || "s3",
 * //               DynamodbUnnestDDBJson: true || false,
 * //               DynamodbTableArn: "STRING_VALUE", // required
 * //               DynamodbS3Bucket: "STRING_VALUE",
 * //               DynamodbS3Prefix: "STRING_VALUE",
 * //               DynamodbS3BucketOwner: "STRING_VALUE",
 * //               DynamodbStsRoleArn: "STRING_VALUE",
 * //             },
 * //             OutputSchemas: "<GlueSchemas>",
 * //           },
 * //         },
 * //       },
 * //       ExecutionClass: "FLEX" || "STANDARD",
 * //       SourceControlDetails: { // SourceControlDetails
 * //         Provider: "GITHUB" || "GITLAB" || "BITBUCKET" || "AWS_CODE_COMMIT",
 * //         Repository: "STRING_VALUE",
 * //         Owner: "STRING_VALUE",
 * //         Branch: "STRING_VALUE",
 * //         Folder: "STRING_VALUE",
 * //         LastCommitId: "STRING_VALUE",
 * //         AuthStrategy: "PERSONAL_ACCESS_TOKEN" || "AWS_SECRETS_MANAGER",
 * //         AuthToken: "STRING_VALUE",
 * //       },
 * //       MaintenanceWindow: "STRING_VALUE",
 * //       ProfileName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetJobsCommandInput - {@link GetJobsCommandInput}
 * @returns {@link GetJobsCommandOutput}
 * @see {@link GetJobsCommandInput} for command's `input` shape.
 * @see {@link GetJobsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetJobsCommand extends $Command
  .classBuilder<
    GetJobsCommandInput,
    GetJobsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetJobs", {})
  .n("GlueClient", "GetJobsCommand")
  .f(void 0, GetJobsResponseFilterSensitiveLog)
  .ser(se_GetJobsCommand)
  .de(de_GetJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobsRequest;
      output: GetJobsResponse;
    };
    sdk: {
      input: GetJobsCommandInput;
      output: GetJobsCommandOutput;
    };
  };
}

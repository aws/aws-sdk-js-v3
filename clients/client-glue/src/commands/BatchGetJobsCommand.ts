// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetJobsRequest } from "../models/models_0";
import { BatchGetJobsResponse, BatchGetJobsResponseFilterSensitiveLog } from "../models/models_2";
import { de_BatchGetJobsCommand, se_BatchGetJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetJobsCommand}.
 */
export interface BatchGetJobsCommandInput extends BatchGetJobsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetJobsCommand}.
 */
export interface BatchGetJobsCommandOutput extends BatchGetJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetJobsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetJobsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // BatchGetJobsRequest
 *   JobNames: [ // JobNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetJobsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetJobsResponse
 * //   Jobs: [ // JobList
 * //     { // Job
 * //       Name: "STRING_VALUE",
 * //       JobMode: "SCRIPT" || "VISUAL" || "NOTEBOOK",
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
 * //         Connections: [ // OrchestrationStringList
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
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           CatalogSource: { // CatalogSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
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
 * //             OutputSchemas: [
 * //               {
 * //                 Columns: [
 * //                   {
 * //                     Name: "STRING_VALUE", // required
 * //                     Type: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           S3ParquetSource: { // S3ParquetSource
 * //             Name: "STRING_VALUE", // required
 * //             Paths: "<EnclosedInStringProperties>", // required
 * //             CompressionType: "snappy" || "lzo" || "gzip" || "uncompressed" || "none",
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
 * //             PartitionKeys: [ // GlueStudioPathList
 * //               "<EnclosedInStringProperties>",
 * //             ],
 * //             Table: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             SchemaChangePolicy: { // CatalogSchemaChangePolicy
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //             },
 * //           },
 * //           S3GlueParquetTarget: { // S3GlueParquetTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             PartitionKeys: [
 * //               "<EnclosedInStringProperties>",
 * //             ],
 * //             Path: "STRING_VALUE", // required
 * //             Compression: "snappy" || "lzo" || "gzip" || "uncompressed" || "none",
 * //             SchemaChangePolicy: { // DirectSchemaChangePolicy
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //               Table: "STRING_VALUE",
 * //               Database: "STRING_VALUE",
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
 * //             Format: "json" || "csv" || "avro" || "orc" || "parquet" || "hudi" || "delta", // required
 * //             SchemaChangePolicy: {
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //               Table: "STRING_VALUE",
 * //               Database: "STRING_VALUE",
 * //             },
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
 * //             Paths: [ // required
 * //               "<EnclosedInStringProperties>",
 * //             ],
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
 * //             PiiType: "RowAudit" || "RowMasking" || "ColumnAudit" || "ColumnMasking", // required
 * //             EntityTypesToDetect: "<EnclosedInStringProperties>", // required
 * //             OutputColumnName: "STRING_VALUE",
 * //             SampleFraction: Number("double"),
 * //             ThresholdFraction: Number("double"),
 * //             MaskValue: "STRING_VALUE",
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
 * //           },
 * //           S3HudiDirectTarget: { // S3HudiDirectTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             Path: "STRING_VALUE", // required
 * //             Compression: "gzip" || "lzo" || "uncompressed" || "snappy", // required
 * //             PartitionKeys: "<GlueStudioPathList>",
 * //             Format: "json" || "csv" || "avro" || "orc" || "parquet" || "hudi" || "delta", // required
 * //             AdditionalOptions: "<AdditionalOptions>", // required
 * //             SchemaChangePolicy: {
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //               Table: "STRING_VALUE",
 * //               Database: "STRING_VALUE",
 * //             },
 * //           },
 * //           DirectJDBCSource: { // DirectJDBCSource
 * //             Name: "STRING_VALUE", // required
 * //             Database: "STRING_VALUE", // required
 * //             Table: "STRING_VALUE", // required
 * //             ConnectionName: "STRING_VALUE", // required
 * //             ConnectionType: "sqlserver" || "mysql" || "oracle" || "postgresql" || "redshift", // required
 * //             RedshiftTmpDir: "STRING_VALUE",
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
 * //           },
 * //           S3DeltaDirectTarget: { // S3DeltaDirectTarget
 * //             Name: "STRING_VALUE", // required
 * //             Inputs: "<OneInput>", // required
 * //             PartitionKeys: "<GlueStudioPathList>",
 * //             Path: "STRING_VALUE", // required
 * //             Compression: "uncompressed" || "snappy", // required
 * //             Format: "json" || "csv" || "avro" || "orc" || "parquet" || "hudi" || "delta", // required
 * //             AdditionalOptions: "<AdditionalOptions>",
 * //             SchemaChangePolicy: {
 * //               EnableUpdateCatalog: true || false,
 * //               UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 * //               Table: "STRING_VALUE",
 * //               Database: "STRING_VALUE",
 * //             },
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
 * //     },
 * //   ],
 * //   JobsNotFound: [ // JobNameList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetJobsCommandInput - {@link BatchGetJobsCommandInput}
 * @returns {@link BatchGetJobsCommandOutput}
 * @see {@link BatchGetJobsCommandInput} for command's `input` shape.
 * @see {@link BatchGetJobsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
 * @public
 */
export class BatchGetJobsCommand extends $Command
  .classBuilder<
    BatchGetJobsCommandInput,
    BatchGetJobsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "BatchGetJobs", {})
  .n("GlueClient", "BatchGetJobsCommand")
  .f(void 0, BatchGetJobsResponseFilterSensitiveLog)
  .ser(se_BatchGetJobsCommand)
  .de(de_BatchGetJobsCommand)
  .build() {}

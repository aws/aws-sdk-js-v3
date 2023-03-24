// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateJobRequest, UpdateJobRequestFilterSensitiveLog, UpdateJobResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdateJobCommand, serializeAws_json1_1UpdateJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateJobCommand}.
 */
export interface UpdateJobCommandInput extends UpdateJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobCommand}.
 */
export interface UpdateJobCommandOutput extends UpdateJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing job definition. The previous job definition is completely overwritten by this information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateJobCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateJobCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = {
 *   JobName: "STRING_VALUE", // required
 *   JobUpdate: {
 *     Description: "STRING_VALUE",
 *     LogUri: "STRING_VALUE",
 *     Role: "STRING_VALUE",
 *     ExecutionProperty: {
 *       MaxConcurrentRuns: Number("int"),
 *     },
 *     Command: {
 *       Name: "STRING_VALUE",
 *       ScriptLocation: "STRING_VALUE",
 *       PythonVersion: "STRING_VALUE",
 *     },
 *     DefaultArguments: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     NonOverridableArguments: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Connections: {
 *       Connections: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     MaxRetries: Number("int"),
 *     AllocatedCapacity: Number("int"),
 *     Timeout: Number("int"),
 *     MaxCapacity: Number("double"),
 *     WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X",
 *     NumberOfWorkers: Number("int"),
 *     SecurityConfiguration: "STRING_VALUE",
 *     NotificationProperty: {
 *       NotifyDelayAfter: Number("int"),
 *     },
 *     GlueVersion: "STRING_VALUE",
 *     CodeGenConfigurationNodes: {
 *       "<keys>": {
 *         AthenaConnectorSource: {
 *           Name: "STRING_VALUE", // required
 *           ConnectionName: "STRING_VALUE", // required
 *           ConnectorName: "STRING_VALUE", // required
 *           ConnectionType: "STRING_VALUE", // required
 *           ConnectionTable: "STRING_VALUE",
 *           SchemaName: "STRING_VALUE", // required
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         JDBCConnectorSource: {
 *           Name: "STRING_VALUE", // required
 *           ConnectionName: "STRING_VALUE", // required
 *           ConnectorName: "STRING_VALUE", // required
 *           ConnectionType: "STRING_VALUE", // required
 *           AdditionalOptions: {
 *             FilterPredicate: "STRING_VALUE",
 *             PartitionColumn: "STRING_VALUE",
 *             LowerBound: Number("long"),
 *             UpperBound: Number("long"),
 *             NumPartitions: Number("long"),
 *             JobBookmarkKeys: [
 *               "STRING_VALUE",
 *             ],
 *             JobBookmarkKeysSortOrder: "STRING_VALUE",
 *             DataTypeMapping: {
 *               "<keys>": "DATE" || "STRING" || "TIMESTAMP" || "INT" || "FLOAT" || "LONG" || "BIGDECIMAL" || "BYTE" || "SHORT" || "DOUBLE",
 *             },
 *           },
 *           ConnectionTable: "STRING_VALUE",
 *           Query: "STRING_VALUE",
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         SparkConnectorSource: {
 *           Name: "STRING_VALUE", // required
 *           ConnectionName: "STRING_VALUE", // required
 *           ConnectorName: "STRING_VALUE", // required
 *           ConnectionType: "STRING_VALUE", // required
 *           AdditionalOptions: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         CatalogSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         RedshiftSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *           RedshiftTmpDir: "STRING_VALUE",
 *           TmpDirIAMRole: "STRING_VALUE",
 *         },
 *         S3CatalogSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *           PartitionPredicate: "STRING_VALUE",
 *           AdditionalOptions: {
 *             BoundedSize: Number("long"),
 *             BoundedFiles: Number("long"),
 *           },
 *         },
 *         S3CsvSource: {
 *           Name: "STRING_VALUE", // required
 *           Paths: [ // required
 *             "STRING_VALUE",
 *           ],
 *           CompressionType: "gzip" || "bzip2",
 *           Exclusions: [
 *             "STRING_VALUE",
 *           ],
 *           GroupSize: "STRING_VALUE",
 *           GroupFiles: "STRING_VALUE",
 *           Recurse: true || false,
 *           MaxBand: Number("int"),
 *           MaxFilesInBand: Number("int"),
 *           AdditionalOptions: {
 *             BoundedSize: Number("long"),
 *             BoundedFiles: Number("long"),
 *             EnableSamplePath: true || false,
 *             SamplePath: "STRING_VALUE",
 *           },
 *           Separator: "comma" || "ctrla" || "pipe" || "semicolon" || "tab", // required
 *           Escaper: "STRING_VALUE",
 *           QuoteChar: "quote" || "quillemet" || "single_quote" || "disabled", // required
 *           Multiline: true || false,
 *           WithHeader: true || false,
 *           WriteHeader: true || false,
 *           SkipFirst: true || false,
 *           OptimizePerformance: true || false,
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         S3JsonSource: {
 *           Name: "STRING_VALUE", // required
 *           Paths: [ // required
 *             "STRING_VALUE",
 *           ],
 *           CompressionType: "gzip" || "bzip2",
 *           Exclusions: [
 *             "STRING_VALUE",
 *           ],
 *           GroupSize: "STRING_VALUE",
 *           GroupFiles: "STRING_VALUE",
 *           Recurse: true || false,
 *           MaxBand: Number("int"),
 *           MaxFilesInBand: Number("int"),
 *           AdditionalOptions: {
 *             BoundedSize: Number("long"),
 *             BoundedFiles: Number("long"),
 *             EnableSamplePath: true || false,
 *             SamplePath: "STRING_VALUE",
 *           },
 *           JsonPath: "STRING_VALUE",
 *           Multiline: true || false,
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         S3ParquetSource: {
 *           Name: "STRING_VALUE", // required
 *           Paths: [ // required
 *             "STRING_VALUE",
 *           ],
 *           CompressionType: "snappy" || "lzo" || "gzip" || "uncompressed" || "none",
 *           Exclusions: [
 *             "STRING_VALUE",
 *           ],
 *           GroupSize: "STRING_VALUE",
 *           GroupFiles: "STRING_VALUE",
 *           Recurse: true || false,
 *           MaxBand: Number("int"),
 *           MaxFilesInBand: Number("int"),
 *           AdditionalOptions: {
 *             BoundedSize: Number("long"),
 *             BoundedFiles: Number("long"),
 *             EnableSamplePath: true || false,
 *             SamplePath: "STRING_VALUE",
 *           },
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         RelationalCatalogSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         DynamoDBCatalogSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         JDBCConnectorTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           ConnectionName: "STRING_VALUE", // required
 *           ConnectionTable: "STRING_VALUE", // required
 *           ConnectorName: "STRING_VALUE", // required
 *           ConnectionType: "STRING_VALUE", // required
 *           AdditionalOptions: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         SparkConnectorTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           ConnectionName: "STRING_VALUE", // required
 *           ConnectorName: "STRING_VALUE", // required
 *           ConnectionType: "STRING_VALUE", // required
 *           AdditionalOptions: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         CatalogTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         RedshiftTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *           RedshiftTmpDir: "STRING_VALUE",
 *           TmpDirIAMRole: "STRING_VALUE",
 *           UpsertRedshiftOptions: {
 *             TableLocation: "STRING_VALUE",
 *             ConnectionName: "STRING_VALUE",
 *             UpsertKeys: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *         S3CatalogTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           PartitionKeys: [
 *             [
 *               "STRING_VALUE",
 *             ],
 *           ],
 *           Table: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           SchemaChangePolicy: {
 *             EnableUpdateCatalog: true || false,
 *             UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 *           },
 *         },
 *         S3GlueParquetTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           PartitionKeys: [
 *             [
 *               "STRING_VALUE",
 *             ],
 *           ],
 *           Path: "STRING_VALUE", // required
 *           Compression: "snappy" || "lzo" || "gzip" || "uncompressed" || "none",
 *           SchemaChangePolicy: {
 *             EnableUpdateCatalog: true || false,
 *             UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 *             Table: "STRING_VALUE",
 *             Database: "STRING_VALUE",
 *           },
 *         },
 *         S3DirectTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           PartitionKeys: [
 *             [
 *               "STRING_VALUE",
 *             ],
 *           ],
 *           Path: "STRING_VALUE", // required
 *           Compression: "STRING_VALUE",
 *           Format: "json" || "csv" || "avro" || "orc" || "parquet" || "hudi" || "delta", // required
 *           SchemaChangePolicy: {
 *             EnableUpdateCatalog: true || false,
 *             UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 *             Table: "STRING_VALUE",
 *             Database: "STRING_VALUE",
 *           },
 *         },
 *         ApplyMapping: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Mapping: [ // required
 *             {
 *               ToKey: "STRING_VALUE",
 *               FromPath: [
 *                 "<EnclosedInStringProperties>",
 *               ],
 *               FromType: "STRING_VALUE",
 *               ToType: "STRING_VALUE",
 *               Dropped: true || false,
 *               Children: [
 *                 {
 *                   ToKey: "STRING_VALUE",
 *                   FromPath: [
 *                     "<EnclosedInStringProperties>",
 *                   ],
 *                   FromType: "STRING_VALUE",
 *                   ToType: "STRING_VALUE",
 *                   Dropped: true || false,
 *                   Children: [
 *                     "<Mappings>",
 *                   ],
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         SelectFields: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Paths: [ // required
 *             [
 *               "<EnclosedInStringProperties>",
 *             ],
 *           ],
 *         },
 *         DropFields: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Paths: [ // required
 *             [
 *               "<EnclosedInStringProperties>",
 *             ],
 *           ],
 *         },
 *         RenameField: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           SourcePath: [ // required
 *             "<EnclosedInStringProperties>",
 *           ],
 *           TargetPath: [ // required
 *             "<EnclosedInStringProperties>",
 *           ],
 *         },
 *         Spigot: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Path: "STRING_VALUE", // required
 *           Topk: Number("int"),
 *           Prob: Number("double"),
 *         },
 *         Join: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           JoinType: "equijoin" || "left" || "right" || "outer" || "leftsemi" || "leftanti", // required
 *           Columns: [ // required
 *             {
 *               From: "STRING_VALUE", // required
 *               Keys: [ // required
 *                 [
 *                   "<EnclosedInStringProperties>",
 *                 ],
 *               ],
 *             },
 *           ],
 *         },
 *         SplitFields: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Paths: [ // required
 *             [
 *               "<EnclosedInStringProperties>",
 *             ],
 *           ],
 *         },
 *         SelectFromCollection: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Index: Number("int"), // required
 *         },
 *         FillMissingValues: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           ImputedPath: "STRING_VALUE", // required
 *           FilledPath: "STRING_VALUE",
 *         },
 *         Filter: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           LogicalOperator: "AND" || "OR", // required
 *           Filters: [ // required
 *             {
 *               Operation: "EQ" || "LT" || "GT" || "LTE" || "GTE" || "REGEX" || "ISNULL", // required
 *               Negated: true || false,
 *               Values: [ // required
 *                 {
 *                   Type: "COLUMNEXTRACTED" || "CONSTANT", // required
 *                   Value: [ // required
 *                     "<EnclosedInStringProperties>",
 *                   ],
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         CustomCode: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Code: "STRING_VALUE", // required
 *           ClassName: "STRING_VALUE", // required
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         SparkSQL: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           SqlQuery: "STRING_VALUE", // required
 *           SqlAliases: [ // required
 *             {
 *               From: "STRING_VALUE", // required
 *               Alias: "STRING_VALUE", // required
 *             },
 *           ],
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         DirectKinesisSource: {
 *           Name: "STRING_VALUE", // required
 *           WindowSize: Number("int"),
 *           DetectSchema: true || false,
 *           StreamingOptions: {
 *             EndpointUrl: "STRING_VALUE",
 *             StreamName: "STRING_VALUE",
 *             Classification: "STRING_VALUE",
 *             Delimiter: "STRING_VALUE",
 *             StartingPosition: "latest" || "trim_horizon" || "earliest",
 *             MaxFetchTimeInMs: Number("long"),
 *             MaxFetchRecordsPerShard: Number("long"),
 *             MaxRecordPerRead: Number("long"),
 *             AddIdleTimeBetweenReads: true || false,
 *             IdleTimeBetweenReadsInMs: Number("long"),
 *             DescribeShardInterval: Number("long"),
 *             NumRetries: Number("int"),
 *             RetryIntervalMs: Number("long"),
 *             MaxRetryIntervalMs: Number("long"),
 *             AvoidEmptyBatches: true || false,
 *             StreamArn: "STRING_VALUE",
 *             RoleArn: "STRING_VALUE",
 *             RoleSessionName: "STRING_VALUE",
 *             AddRecordTimestamp: "STRING_VALUE",
 *             EmitConsumerLagMetrics: "STRING_VALUE",
 *           },
 *           DataPreviewOptions: {
 *             PollingTime: Number("long"),
 *             RecordPollingLimit: Number("long"),
 *           },
 *         },
 *         DirectKafkaSource: {
 *           Name: "STRING_VALUE", // required
 *           StreamingOptions: {
 *             BootstrapServers: "STRING_VALUE",
 *             SecurityProtocol: "STRING_VALUE",
 *             ConnectionName: "STRING_VALUE",
 *             TopicName: "STRING_VALUE",
 *             Assign: "STRING_VALUE",
 *             SubscribePattern: "STRING_VALUE",
 *             Classification: "STRING_VALUE",
 *             Delimiter: "STRING_VALUE",
 *             StartingOffsets: "STRING_VALUE",
 *             EndingOffsets: "STRING_VALUE",
 *             PollTimeoutMs: Number("long"),
 *             NumRetries: Number("int"),
 *             RetryIntervalMs: Number("long"),
 *             MaxOffsetsPerTrigger: Number("long"),
 *             MinPartitions: Number("int"),
 *             IncludeHeaders: true || false,
 *             AddRecordTimestamp: "STRING_VALUE",
 *             EmitConsumerLagMetrics: "STRING_VALUE",
 *           },
 *           WindowSize: Number("int"),
 *           DetectSchema: true || false,
 *           DataPreviewOptions: {
 *             PollingTime: Number("long"),
 *             RecordPollingLimit: Number("long"),
 *           },
 *         },
 *         CatalogKinesisSource: {
 *           Name: "STRING_VALUE", // required
 *           WindowSize: Number("int"),
 *           DetectSchema: true || false,
 *           Table: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           StreamingOptions: {
 *             EndpointUrl: "STRING_VALUE",
 *             StreamName: "STRING_VALUE",
 *             Classification: "STRING_VALUE",
 *             Delimiter: "STRING_VALUE",
 *             StartingPosition: "latest" || "trim_horizon" || "earliest",
 *             MaxFetchTimeInMs: Number("long"),
 *             MaxFetchRecordsPerShard: Number("long"),
 *             MaxRecordPerRead: Number("long"),
 *             AddIdleTimeBetweenReads: true || false,
 *             IdleTimeBetweenReadsInMs: Number("long"),
 *             DescribeShardInterval: Number("long"),
 *             NumRetries: Number("int"),
 *             RetryIntervalMs: Number("long"),
 *             MaxRetryIntervalMs: Number("long"),
 *             AvoidEmptyBatches: true || false,
 *             StreamArn: "STRING_VALUE",
 *             RoleArn: "STRING_VALUE",
 *             RoleSessionName: "STRING_VALUE",
 *             AddRecordTimestamp: "STRING_VALUE",
 *             EmitConsumerLagMetrics: "STRING_VALUE",
 *           },
 *           DataPreviewOptions: {
 *             PollingTime: Number("long"),
 *             RecordPollingLimit: Number("long"),
 *           },
 *         },
 *         CatalogKafkaSource: {
 *           Name: "STRING_VALUE", // required
 *           WindowSize: Number("int"),
 *           DetectSchema: true || false,
 *           Table: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           StreamingOptions: {
 *             BootstrapServers: "STRING_VALUE",
 *             SecurityProtocol: "STRING_VALUE",
 *             ConnectionName: "STRING_VALUE",
 *             TopicName: "STRING_VALUE",
 *             Assign: "STRING_VALUE",
 *             SubscribePattern: "STRING_VALUE",
 *             Classification: "STRING_VALUE",
 *             Delimiter: "STRING_VALUE",
 *             StartingOffsets: "STRING_VALUE",
 *             EndingOffsets: "STRING_VALUE",
 *             PollTimeoutMs: Number("long"),
 *             NumRetries: Number("int"),
 *             RetryIntervalMs: Number("long"),
 *             MaxOffsetsPerTrigger: Number("long"),
 *             MinPartitions: Number("int"),
 *             IncludeHeaders: true || false,
 *             AddRecordTimestamp: "STRING_VALUE",
 *             EmitConsumerLagMetrics: "STRING_VALUE",
 *           },
 *           DataPreviewOptions: {
 *             PollingTime: Number("long"),
 *             RecordPollingLimit: Number("long"),
 *           },
 *         },
 *         DropNullFields: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           NullCheckBoxList: {
 *             IsEmpty: true || false,
 *             IsNullString: true || false,
 *             IsNegOne: true || false,
 *           },
 *           NullTextList: [
 *             {
 *               Value: "STRING_VALUE", // required
 *               Datatype: {
 *                 Id: "STRING_VALUE", // required
 *                 Label: "STRING_VALUE", // required
 *               },
 *             },
 *           ],
 *         },
 *         Merge: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Source: "STRING_VALUE", // required
 *           PrimaryKeys: [ // required
 *             [
 *               "<EnclosedInStringProperties>",
 *             ],
 *           ],
 *         },
 *         Union: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           UnionType: "ALL" || "DISTINCT", // required
 *         },
 *         PIIDetection: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           PiiType: "RowAudit" || "RowMasking" || "ColumnAudit" || "ColumnMasking", // required
 *           EntityTypesToDetect: [ // required
 *             "<EnclosedInStringProperties>",
 *           ],
 *           OutputColumnName: "STRING_VALUE",
 *           SampleFraction: Number("double"),
 *           ThresholdFraction: Number("double"),
 *           MaskValue: "STRING_VALUE",
 *         },
 *         Aggregate: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Groups: [ // required
 *             [
 *               "<EnclosedInStringProperties>",
 *             ],
 *           ],
 *           Aggs: [ // required
 *             {
 *               Column: [ // required
 *                 "<EnclosedInStringProperties>",
 *               ],
 *               AggFunc: "avg" || "countDistinct" || "count" || "first" || "last" || "kurtosis" || "max" || "min" || "skewness" || "stddev_samp" || "stddev_pop" || "sum" || "sumDistinct" || "var_samp" || "var_pop", // required
 *             },
 *           ],
 *         },
 *         DropDuplicates: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Columns: [
 *             [
 *               "STRING_VALUE",
 *             ],
 *           ],
 *         },
 *         GovernedCatalogTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           PartitionKeys: [
 *             [
 *               "<EnclosedInStringProperties>",
 *             ],
 *           ],
 *           Table: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           SchemaChangePolicy: {
 *             EnableUpdateCatalog: true || false,
 *             UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 *           },
 *         },
 *         GovernedCatalogSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *           PartitionPredicate: "STRING_VALUE",
 *           AdditionalOptions: {
 *             BoundedSize: Number("long"),
 *             BoundedFiles: Number("long"),
 *           },
 *         },
 *         MicrosoftSQLServerCatalogSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         MySQLCatalogSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         OracleSQLCatalogSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         PostgreSQLCatalogSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         MicrosoftSQLServerCatalogTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         MySQLCatalogTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         OracleSQLCatalogTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         PostgreSQLCatalogTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *         },
 *         DynamicTransform: {
 *           Name: "STRING_VALUE", // required
 *           TransformName: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Parameters: [
 *             {
 *               Name: "STRING_VALUE", // required
 *               Type: "str" || "int" || "float" || "complex" || "bool" || "list" || "null", // required
 *               ValidationRule: "STRING_VALUE",
 *               ValidationMessage: "STRING_VALUE",
 *               Value: [
 *                 "<EnclosedInStringProperties>",
 *               ],
 *               ListType: "str" || "int" || "float" || "complex" || "bool" || "list" || "null",
 *               IsOptional: true || false,
 *             },
 *           ],
 *           FunctionName: "STRING_VALUE", // required
 *           Path: "STRING_VALUE", // required
 *           Version: "STRING_VALUE",
 *         },
 *         EvaluateDataQuality: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Ruleset: "STRING_VALUE", // required
 *           Output: "PrimaryInput" || "EvaluationResults",
 *           PublishingOptions: {
 *             EvaluationContext: "STRING_VALUE",
 *             ResultsS3Prefix: "STRING_VALUE",
 *             CloudWatchMetricsEnabled: true || false,
 *             ResultsPublishingEnabled: true || false,
 *           },
 *           StopJobOnFailureOptions: {
 *             StopJobOnFailureTiming: "Immediate" || "AfterDataLoad",
 *           },
 *         },
 *         S3CatalogHudiSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *           AdditionalHudiOptions: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         CatalogHudiSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *           AdditionalHudiOptions: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         S3HudiSource: {
 *           Name: "STRING_VALUE", // required
 *           Paths: [ // required
 *             "<EnclosedInStringProperties>",
 *           ],
 *           AdditionalHudiOptions: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           AdditionalOptions: {
 *             BoundedSize: Number("long"),
 *             BoundedFiles: Number("long"),
 *             EnableSamplePath: true || false,
 *             SamplePath: "STRING_VALUE",
 *           },
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         S3HudiCatalogTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           PartitionKeys: [
 *             [
 *               "<EnclosedInStringProperties>",
 *             ],
 *           ],
 *           Table: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           AdditionalOptions: { // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *           SchemaChangePolicy: {
 *             EnableUpdateCatalog: true || false,
 *             UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 *           },
 *         },
 *         S3HudiDirectTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           Path: "STRING_VALUE", // required
 *           Compression: "gzip" || "lzo" || "uncompressed" || "snappy", // required
 *           PartitionKeys: [
 *             [
 *               "<EnclosedInStringProperties>",
 *             ],
 *           ],
 *           Format: "json" || "csv" || "avro" || "orc" || "parquet" || "hudi" || "delta", // required
 *           AdditionalOptions: { // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *           SchemaChangePolicy: {
 *             EnableUpdateCatalog: true || false,
 *             UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 *             Table: "STRING_VALUE",
 *             Database: "STRING_VALUE",
 *           },
 *         },
 *         DirectJDBCSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *           ConnectionName: "STRING_VALUE", // required
 *           ConnectionType: "sqlserver" || "mysql" || "oracle" || "postgresql" || "redshift", // required
 *           RedshiftTmpDir: "STRING_VALUE",
 *         },
 *         S3CatalogDeltaSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *           AdditionalDeltaOptions: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         CatalogDeltaSource: {
 *           Name: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           Table: "STRING_VALUE", // required
 *           AdditionalDeltaOptions: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         S3DeltaSource: {
 *           Name: "STRING_VALUE", // required
 *           Paths: [ // required
 *             "<EnclosedInStringProperties>",
 *           ],
 *           AdditionalDeltaOptions: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           AdditionalOptions: {
 *             BoundedSize: Number("long"),
 *             BoundedFiles: Number("long"),
 *             EnableSamplePath: true || false,
 *             SamplePath: "STRING_VALUE",
 *           },
 *           OutputSchemas: [
 *             {
 *               Columns: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   Type: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         S3DeltaCatalogTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           PartitionKeys: [
 *             [
 *               "<EnclosedInStringProperties>",
 *             ],
 *           ],
 *           Table: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           AdditionalOptions: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           SchemaChangePolicy: {
 *             EnableUpdateCatalog: true || false,
 *             UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 *           },
 *         },
 *         S3DeltaDirectTarget: {
 *           Name: "STRING_VALUE", // required
 *           Inputs: [ // required
 *             "STRING_VALUE",
 *           ],
 *           PartitionKeys: [
 *             [
 *               "<EnclosedInStringProperties>",
 *             ],
 *           ],
 *           Path: "STRING_VALUE", // required
 *           Compression: "uncompressed" || "snappy", // required
 *           Format: "json" || "csv" || "avro" || "orc" || "parquet" || "hudi" || "delta", // required
 *           AdditionalOptions: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           SchemaChangePolicy: {
 *             EnableUpdateCatalog: true || false,
 *             UpdateBehavior: "UPDATE_IN_DATABASE" || "LOG",
 *             Table: "STRING_VALUE",
 *             Database: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *     ExecutionClass: "FLEX" || "STANDARD",
 *     SourceControlDetails: {
 *       Provider: "GITHUB" || "AWS_CODE_COMMIT",
 *       Repository: "STRING_VALUE",
 *       Owner: "STRING_VALUE",
 *       Branch: "STRING_VALUE",
 *       Folder: "STRING_VALUE",
 *       LastCommitId: "STRING_VALUE",
 *       AuthStrategy: "PERSONAL_ACCESS_TOKEN" || "AWS_SECRETS_MANAGER",
 *       AuthToken: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateJobCommandInput - {@link UpdateJobCommandInput}
 * @returns {@link UpdateJobCommandOutput}
 * @see {@link UpdateJobCommandInput} for command's `input` shape.
 * @see {@link UpdateJobCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
 *
 */
export class UpdateJobCommand extends $Command<
  UpdateJobCommandInput,
  UpdateJobCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: UpdateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobCommandInput, UpdateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: UpdateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateJobCommandOutput> {
    return deserializeAws_json1_1UpdateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import { de_CreateApplicationCommand, se_CreateApplicationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationResponse, __MetadataBearer {}

/**
 * <p>Creates a Managed Service for Apache Flink application. For information about creating a
 *           Managed Service for Apache Flink application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an
 *         Application</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, CreateApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, CreateApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // CreateApplicationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   ApplicationDescription: "STRING_VALUE",
 *   RuntimeEnvironment: "SQL-1_0" || "FLINK-1_6" || "FLINK-1_8" || "ZEPPELIN-FLINK-1_0" || "FLINK-1_11" || "FLINK-1_13" || "ZEPPELIN-FLINK-2_0" || "FLINK-1_15" || "ZEPPELIN-FLINK-3_0" || "FLINK-1_18", // required
 *   ServiceExecutionRole: "STRING_VALUE", // required
 *   ApplicationConfiguration: { // ApplicationConfiguration
 *     SqlApplicationConfiguration: { // SqlApplicationConfiguration
 *       Inputs: [ // Inputs
 *         { // Input
 *           NamePrefix: "STRING_VALUE", // required
 *           InputProcessingConfiguration: { // InputProcessingConfiguration
 *             InputLambdaProcessor: { // InputLambdaProcessor
 *               ResourceARN: "STRING_VALUE", // required
 *             },
 *           },
 *           KinesisStreamsInput: { // KinesisStreamsInput
 *             ResourceARN: "STRING_VALUE", // required
 *           },
 *           KinesisFirehoseInput: { // KinesisFirehoseInput
 *             ResourceARN: "STRING_VALUE", // required
 *           },
 *           InputParallelism: { // InputParallelism
 *             Count: Number("int"),
 *           },
 *           InputSchema: { // SourceSchema
 *             RecordFormat: { // RecordFormat
 *               RecordFormatType: "JSON" || "CSV", // required
 *               MappingParameters: { // MappingParameters
 *                 JSONMappingParameters: { // JSONMappingParameters
 *                   RecordRowPath: "STRING_VALUE", // required
 *                 },
 *                 CSVMappingParameters: { // CSVMappingParameters
 *                   RecordRowDelimiter: "STRING_VALUE", // required
 *                   RecordColumnDelimiter: "STRING_VALUE", // required
 *                 },
 *               },
 *             },
 *             RecordEncoding: "STRING_VALUE",
 *             RecordColumns: [ // RecordColumns // required
 *               { // RecordColumn
 *                 Name: "STRING_VALUE", // required
 *                 Mapping: "STRING_VALUE",
 *                 SqlType: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *       ],
 *       Outputs: [ // Outputs
 *         { // Output
 *           Name: "STRING_VALUE", // required
 *           KinesisStreamsOutput: { // KinesisStreamsOutput
 *             ResourceARN: "STRING_VALUE", // required
 *           },
 *           KinesisFirehoseOutput: { // KinesisFirehoseOutput
 *             ResourceARN: "STRING_VALUE", // required
 *           },
 *           LambdaOutput: { // LambdaOutput
 *             ResourceARN: "STRING_VALUE", // required
 *           },
 *           DestinationSchema: { // DestinationSchema
 *             RecordFormatType: "JSON" || "CSV", // required
 *           },
 *         },
 *       ],
 *       ReferenceDataSources: [ // ReferenceDataSources
 *         { // ReferenceDataSource
 *           TableName: "STRING_VALUE", // required
 *           S3ReferenceDataSource: { // S3ReferenceDataSource
 *             BucketARN: "STRING_VALUE",
 *             FileKey: "STRING_VALUE",
 *           },
 *           ReferenceSchema: {
 *             RecordFormat: {
 *               RecordFormatType: "JSON" || "CSV", // required
 *               MappingParameters: {
 *                 JSONMappingParameters: {
 *                   RecordRowPath: "STRING_VALUE", // required
 *                 },
 *                 CSVMappingParameters: {
 *                   RecordRowDelimiter: "STRING_VALUE", // required
 *                   RecordColumnDelimiter: "STRING_VALUE", // required
 *                 },
 *               },
 *             },
 *             RecordEncoding: "STRING_VALUE",
 *             RecordColumns: [ // required
 *               {
 *                 Name: "STRING_VALUE", // required
 *                 Mapping: "STRING_VALUE",
 *                 SqlType: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *       ],
 *     },
 *     FlinkApplicationConfiguration: { // FlinkApplicationConfiguration
 *       CheckpointConfiguration: { // CheckpointConfiguration
 *         ConfigurationType: "DEFAULT" || "CUSTOM", // required
 *         CheckpointingEnabled: true || false,
 *         CheckpointInterval: Number("long"),
 *         MinPauseBetweenCheckpoints: Number("long"),
 *       },
 *       MonitoringConfiguration: { // MonitoringConfiguration
 *         ConfigurationType: "DEFAULT" || "CUSTOM", // required
 *         MetricsLevel: "APPLICATION" || "TASK" || "OPERATOR" || "PARALLELISM",
 *         LogLevel: "INFO" || "WARN" || "ERROR" || "DEBUG",
 *       },
 *       ParallelismConfiguration: { // ParallelismConfiguration
 *         ConfigurationType: "DEFAULT" || "CUSTOM", // required
 *         Parallelism: Number("int"),
 *         ParallelismPerKPU: Number("int"),
 *         AutoScalingEnabled: true || false,
 *       },
 *     },
 *     EnvironmentProperties: { // EnvironmentProperties
 *       PropertyGroups: [ // PropertyGroups // required
 *         { // PropertyGroup
 *           PropertyGroupId: "STRING_VALUE", // required
 *           PropertyMap: { // PropertyMap // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *     ApplicationCodeConfiguration: { // ApplicationCodeConfiguration
 *       CodeContent: { // CodeContent
 *         TextContent: "STRING_VALUE",
 *         ZipFileContent: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         S3ContentLocation: { // S3ContentLocation
 *           BucketARN: "STRING_VALUE", // required
 *           FileKey: "STRING_VALUE", // required
 *           ObjectVersion: "STRING_VALUE",
 *         },
 *       },
 *       CodeContentType: "PLAINTEXT" || "ZIPFILE", // required
 *     },
 *     ApplicationSnapshotConfiguration: { // ApplicationSnapshotConfiguration
 *       SnapshotsEnabled: true || false, // required
 *     },
 *     VpcConfigurations: [ // VpcConfigurations
 *       { // VpcConfiguration
 *         SubnetIds: [ // SubnetIds // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // SecurityGroupIds // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     ZeppelinApplicationConfiguration: { // ZeppelinApplicationConfiguration
 *       MonitoringConfiguration: { // ZeppelinMonitoringConfiguration
 *         LogLevel: "INFO" || "WARN" || "ERROR" || "DEBUG", // required
 *       },
 *       CatalogConfiguration: { // CatalogConfiguration
 *         GlueDataCatalogConfiguration: { // GlueDataCatalogConfiguration
 *           DatabaseARN: "STRING_VALUE", // required
 *         },
 *       },
 *       DeployAsApplicationConfiguration: { // DeployAsApplicationConfiguration
 *         S3ContentLocation: { // S3ContentBaseLocation
 *           BucketARN: "STRING_VALUE", // required
 *           BasePath: "STRING_VALUE",
 *         },
 *       },
 *       CustomArtifactsConfiguration: [ // CustomArtifactsConfigurationList
 *         { // CustomArtifactConfiguration
 *           ArtifactType: "UDF" || "DEPENDENCY_JAR", // required
 *           S3ContentLocation: {
 *             BucketARN: "STRING_VALUE", // required
 *             FileKey: "STRING_VALUE", // required
 *             ObjectVersion: "STRING_VALUE",
 *           },
 *           MavenReference: { // MavenReference
 *             GroupId: "STRING_VALUE", // required
 *             ArtifactId: "STRING_VALUE", // required
 *             Version: "STRING_VALUE", // required
 *           },
 *         },
 *       ],
 *     },
 *   },
 *   CloudWatchLoggingOptions: [ // CloudWatchLoggingOptions
 *     { // CloudWatchLoggingOption
 *       LogStreamARN: "STRING_VALUE", // required
 *     },
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ApplicationMode: "STREAMING" || "INTERACTIVE",
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationResponse
 * //   ApplicationDetail: { // ApplicationDetail
 * //     ApplicationARN: "STRING_VALUE", // required
 * //     ApplicationDescription: "STRING_VALUE",
 * //     ApplicationName: "STRING_VALUE", // required
 * //     RuntimeEnvironment: "SQL-1_0" || "FLINK-1_6" || "FLINK-1_8" || "ZEPPELIN-FLINK-1_0" || "FLINK-1_11" || "FLINK-1_13" || "ZEPPELIN-FLINK-2_0" || "FLINK-1_15" || "ZEPPELIN-FLINK-3_0" || "FLINK-1_18", // required
 * //     ServiceExecutionRole: "STRING_VALUE",
 * //     ApplicationStatus: "DELETING" || "STARTING" || "STOPPING" || "READY" || "RUNNING" || "UPDATING" || "AUTOSCALING" || "FORCE_STOPPING" || "ROLLING_BACK" || "MAINTENANCE" || "ROLLED_BACK", // required
 * //     ApplicationVersionId: Number("long"), // required
 * //     CreateTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //     ApplicationConfigurationDescription: { // ApplicationConfigurationDescription
 * //       SqlApplicationConfigurationDescription: { // SqlApplicationConfigurationDescription
 * //         InputDescriptions: [ // InputDescriptions
 * //           { // InputDescription
 * //             InputId: "STRING_VALUE",
 * //             NamePrefix: "STRING_VALUE",
 * //             InAppStreamNames: [ // InAppStreamNames
 * //               "STRING_VALUE",
 * //             ],
 * //             InputProcessingConfigurationDescription: { // InputProcessingConfigurationDescription
 * //               InputLambdaProcessorDescription: { // InputLambdaProcessorDescription
 * //                 ResourceARN: "STRING_VALUE", // required
 * //                 RoleARN: "STRING_VALUE",
 * //               },
 * //             },
 * //             KinesisStreamsInputDescription: { // KinesisStreamsInputDescription
 * //               ResourceARN: "STRING_VALUE", // required
 * //               RoleARN: "STRING_VALUE",
 * //             },
 * //             KinesisFirehoseInputDescription: { // KinesisFirehoseInputDescription
 * //               ResourceARN: "STRING_VALUE", // required
 * //               RoleARN: "STRING_VALUE",
 * //             },
 * //             InputSchema: { // SourceSchema
 * //               RecordFormat: { // RecordFormat
 * //                 RecordFormatType: "JSON" || "CSV", // required
 * //                 MappingParameters: { // MappingParameters
 * //                   JSONMappingParameters: { // JSONMappingParameters
 * //                     RecordRowPath: "STRING_VALUE", // required
 * //                   },
 * //                   CSVMappingParameters: { // CSVMappingParameters
 * //                     RecordRowDelimiter: "STRING_VALUE", // required
 * //                     RecordColumnDelimiter: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //               },
 * //               RecordEncoding: "STRING_VALUE",
 * //               RecordColumns: [ // RecordColumns // required
 * //                 { // RecordColumn
 * //                   Name: "STRING_VALUE", // required
 * //                   Mapping: "STRING_VALUE",
 * //                   SqlType: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //             InputParallelism: { // InputParallelism
 * //               Count: Number("int"),
 * //             },
 * //             InputStartingPositionConfiguration: { // InputStartingPositionConfiguration
 * //               InputStartingPosition: "NOW" || "TRIM_HORIZON" || "LAST_STOPPED_POINT",
 * //             },
 * //           },
 * //         ],
 * //         OutputDescriptions: [ // OutputDescriptions
 * //           { // OutputDescription
 * //             OutputId: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //             KinesisStreamsOutputDescription: { // KinesisStreamsOutputDescription
 * //               ResourceARN: "STRING_VALUE", // required
 * //               RoleARN: "STRING_VALUE",
 * //             },
 * //             KinesisFirehoseOutputDescription: { // KinesisFirehoseOutputDescription
 * //               ResourceARN: "STRING_VALUE", // required
 * //               RoleARN: "STRING_VALUE",
 * //             },
 * //             LambdaOutputDescription: { // LambdaOutputDescription
 * //               ResourceARN: "STRING_VALUE", // required
 * //               RoleARN: "STRING_VALUE",
 * //             },
 * //             DestinationSchema: { // DestinationSchema
 * //               RecordFormatType: "JSON" || "CSV", // required
 * //             },
 * //           },
 * //         ],
 * //         ReferenceDataSourceDescriptions: [ // ReferenceDataSourceDescriptions
 * //           { // ReferenceDataSourceDescription
 * //             ReferenceId: "STRING_VALUE", // required
 * //             TableName: "STRING_VALUE", // required
 * //             S3ReferenceDataSourceDescription: { // S3ReferenceDataSourceDescription
 * //               BucketARN: "STRING_VALUE", // required
 * //               FileKey: "STRING_VALUE", // required
 * //               ReferenceRoleARN: "STRING_VALUE",
 * //             },
 * //             ReferenceSchema: {
 * //               RecordFormat: {
 * //                 RecordFormatType: "JSON" || "CSV", // required
 * //                 MappingParameters: {
 * //                   JSONMappingParameters: {
 * //                     RecordRowPath: "STRING_VALUE", // required
 * //                   },
 * //                   CSVMappingParameters: {
 * //                     RecordRowDelimiter: "STRING_VALUE", // required
 * //                     RecordColumnDelimiter: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //               },
 * //               RecordEncoding: "STRING_VALUE",
 * //               RecordColumns: [ // required
 * //                 {
 * //                   Name: "STRING_VALUE", // required
 * //                   Mapping: "STRING_VALUE",
 * //                   SqlType: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       ApplicationCodeConfigurationDescription: { // ApplicationCodeConfigurationDescription
 * //         CodeContentType: "PLAINTEXT" || "ZIPFILE", // required
 * //         CodeContentDescription: { // CodeContentDescription
 * //           TextContent: "STRING_VALUE",
 * //           CodeMD5: "STRING_VALUE",
 * //           CodeSize: Number("long"),
 * //           S3ApplicationCodeLocationDescription: { // S3ApplicationCodeLocationDescription
 * //             BucketARN: "STRING_VALUE", // required
 * //             FileKey: "STRING_VALUE", // required
 * //             ObjectVersion: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       RunConfigurationDescription: { // RunConfigurationDescription
 * //         ApplicationRestoreConfigurationDescription: { // ApplicationRestoreConfiguration
 * //           ApplicationRestoreType: "SKIP_RESTORE_FROM_SNAPSHOT" || "RESTORE_FROM_LATEST_SNAPSHOT" || "RESTORE_FROM_CUSTOM_SNAPSHOT", // required
 * //           SnapshotName: "STRING_VALUE",
 * //         },
 * //         FlinkRunConfigurationDescription: { // FlinkRunConfiguration
 * //           AllowNonRestoredState: true || false,
 * //         },
 * //       },
 * //       FlinkApplicationConfigurationDescription: { // FlinkApplicationConfigurationDescription
 * //         CheckpointConfigurationDescription: { // CheckpointConfigurationDescription
 * //           ConfigurationType: "DEFAULT" || "CUSTOM",
 * //           CheckpointingEnabled: true || false,
 * //           CheckpointInterval: Number("long"),
 * //           MinPauseBetweenCheckpoints: Number("long"),
 * //         },
 * //         MonitoringConfigurationDescription: { // MonitoringConfigurationDescription
 * //           ConfigurationType: "DEFAULT" || "CUSTOM",
 * //           MetricsLevel: "APPLICATION" || "TASK" || "OPERATOR" || "PARALLELISM",
 * //           LogLevel: "INFO" || "WARN" || "ERROR" || "DEBUG",
 * //         },
 * //         ParallelismConfigurationDescription: { // ParallelismConfigurationDescription
 * //           ConfigurationType: "DEFAULT" || "CUSTOM",
 * //           Parallelism: Number("int"),
 * //           ParallelismPerKPU: Number("int"),
 * //           CurrentParallelism: Number("int"),
 * //           AutoScalingEnabled: true || false,
 * //         },
 * //         JobPlanDescription: "STRING_VALUE",
 * //       },
 * //       EnvironmentPropertyDescriptions: { // EnvironmentPropertyDescriptions
 * //         PropertyGroupDescriptions: [ // PropertyGroups
 * //           { // PropertyGroup
 * //             PropertyGroupId: "STRING_VALUE", // required
 * //             PropertyMap: { // PropertyMap // required
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       ApplicationSnapshotConfigurationDescription: { // ApplicationSnapshotConfigurationDescription
 * //         SnapshotsEnabled: true || false, // required
 * //       },
 * //       VpcConfigurationDescriptions: [ // VpcConfigurationDescriptions
 * //         { // VpcConfigurationDescription
 * //           VpcConfigurationId: "STRING_VALUE", // required
 * //           VpcId: "STRING_VALUE", // required
 * //           SubnetIds: [ // SubnetIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //           SecurityGroupIds: [ // SecurityGroupIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ZeppelinApplicationConfigurationDescription: { // ZeppelinApplicationConfigurationDescription
 * //         MonitoringConfigurationDescription: { // ZeppelinMonitoringConfigurationDescription
 * //           LogLevel: "INFO" || "WARN" || "ERROR" || "DEBUG",
 * //         },
 * //         CatalogConfigurationDescription: { // CatalogConfigurationDescription
 * //           GlueDataCatalogConfigurationDescription: { // GlueDataCatalogConfigurationDescription
 * //             DatabaseARN: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         DeployAsApplicationConfigurationDescription: { // DeployAsApplicationConfigurationDescription
 * //           S3ContentLocationDescription: { // S3ContentBaseLocationDescription
 * //             BucketARN: "STRING_VALUE", // required
 * //             BasePath: "STRING_VALUE",
 * //           },
 * //         },
 * //         CustomArtifactsConfigurationDescription: [ // CustomArtifactsConfigurationDescriptionList
 * //           { // CustomArtifactConfigurationDescription
 * //             ArtifactType: "UDF" || "DEPENDENCY_JAR",
 * //             S3ContentLocationDescription: { // S3ContentLocation
 * //               BucketARN: "STRING_VALUE", // required
 * //               FileKey: "STRING_VALUE", // required
 * //               ObjectVersion: "STRING_VALUE",
 * //             },
 * //             MavenReferenceDescription: { // MavenReference
 * //               GroupId: "STRING_VALUE", // required
 * //               ArtifactId: "STRING_VALUE", // required
 * //               Version: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     CloudWatchLoggingOptionDescriptions: [ // CloudWatchLoggingOptionDescriptions
 * //       { // CloudWatchLoggingOptionDescription
 * //         CloudWatchLoggingOptionId: "STRING_VALUE",
 * //         LogStreamARN: "STRING_VALUE", // required
 * //         RoleARN: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ApplicationMaintenanceConfigurationDescription: { // ApplicationMaintenanceConfigurationDescription
 * //       ApplicationMaintenanceWindowStartTime: "STRING_VALUE", // required
 * //       ApplicationMaintenanceWindowEndTime: "STRING_VALUE", // required
 * //     },
 * //     ApplicationVersionUpdatedFrom: Number("long"),
 * //     ApplicationVersionRolledBackFrom: Number("long"),
 * //     ConditionalToken: "STRING_VALUE",
 * //     ApplicationVersionRolledBackTo: Number("long"),
 * //     ApplicationMode: "STREAMING" || "INTERACTIVE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link CodeValidationException} (client fault)
 *  <p>The user-provided application code (query) is not valid. This can be a simple syntax
 *       error.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The number of allowed resources has been exceeded.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>Application created with too many tags, or too many tags added to an application. Note that the maximum
 *         number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this
 *       operation. </p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 * @public
 */
export class CreateApplicationCommand extends $Command
  .classBuilder<
    CreateApplicationCommandInput,
    CreateApplicationCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisAnalytics_20180523", "CreateApplication", {})
  .n("KinesisAnalyticsV2Client", "CreateApplicationCommand")
  .f(void 0, void 0)
  .ser(se_CreateApplicationCommand)
  .de(de_CreateApplicationCommand)
  .build() {}

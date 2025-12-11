// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import type { UpdateApplicationRequest, UpdateApplicationResponse } from "../models/models_0";
import { UpdateApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends UpdateApplicationResponse, __MetadataBearer {}

/**
 * <p>Updates an existing Managed Service for Apache Flink application. Using this operation, you
 *       can update application code, input configuration, and output configuration. </p>
 *          <p>Managed Service for Apache Flink updates the <code>ApplicationVersionId</code> each time you update
 *       your application. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, UpdateApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, UpdateApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // UpdateApplicationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"),
 *   ApplicationConfigurationUpdate: { // ApplicationConfigurationUpdate
 *     SqlApplicationConfigurationUpdate: { // SqlApplicationConfigurationUpdate
 *       InputUpdates: [ // InputUpdates
 *         { // InputUpdate
 *           InputId: "STRING_VALUE", // required
 *           NamePrefixUpdate: "STRING_VALUE",
 *           InputProcessingConfigurationUpdate: { // InputProcessingConfigurationUpdate
 *             InputLambdaProcessorUpdate: { // InputLambdaProcessorUpdate
 *               ResourceARNUpdate: "STRING_VALUE", // required
 *             },
 *           },
 *           KinesisStreamsInputUpdate: { // KinesisStreamsInputUpdate
 *             ResourceARNUpdate: "STRING_VALUE", // required
 *           },
 *           KinesisFirehoseInputUpdate: { // KinesisFirehoseInputUpdate
 *             ResourceARNUpdate: "STRING_VALUE", // required
 *           },
 *           InputSchemaUpdate: { // InputSchemaUpdate
 *             RecordFormatUpdate: { // RecordFormat
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
 *             RecordEncodingUpdate: "STRING_VALUE",
 *             RecordColumnUpdates: [ // RecordColumns
 *               { // RecordColumn
 *                 Name: "STRING_VALUE", // required
 *                 Mapping: "STRING_VALUE",
 *                 SqlType: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           InputParallelismUpdate: { // InputParallelismUpdate
 *             CountUpdate: Number("int"), // required
 *           },
 *         },
 *       ],
 *       OutputUpdates: [ // OutputUpdates
 *         { // OutputUpdate
 *           OutputId: "STRING_VALUE", // required
 *           NameUpdate: "STRING_VALUE",
 *           KinesisStreamsOutputUpdate: { // KinesisStreamsOutputUpdate
 *             ResourceARNUpdate: "STRING_VALUE", // required
 *           },
 *           KinesisFirehoseOutputUpdate: { // KinesisFirehoseOutputUpdate
 *             ResourceARNUpdate: "STRING_VALUE", // required
 *           },
 *           LambdaOutputUpdate: { // LambdaOutputUpdate
 *             ResourceARNUpdate: "STRING_VALUE", // required
 *           },
 *           DestinationSchemaUpdate: { // DestinationSchema
 *             RecordFormatType: "JSON" || "CSV", // required
 *           },
 *         },
 *       ],
 *       ReferenceDataSourceUpdates: [ // ReferenceDataSourceUpdates
 *         { // ReferenceDataSourceUpdate
 *           ReferenceId: "STRING_VALUE", // required
 *           TableNameUpdate: "STRING_VALUE",
 *           S3ReferenceDataSourceUpdate: { // S3ReferenceDataSourceUpdate
 *             BucketARNUpdate: "STRING_VALUE",
 *             FileKeyUpdate: "STRING_VALUE",
 *           },
 *           ReferenceSchemaUpdate: { // SourceSchema
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
 *     ApplicationCodeConfigurationUpdate: { // ApplicationCodeConfigurationUpdate
 *       CodeContentTypeUpdate: "PLAINTEXT" || "ZIPFILE",
 *       CodeContentUpdate: { // CodeContentUpdate
 *         TextContentUpdate: "STRING_VALUE",
 *         ZipFileContentUpdate: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         S3ContentLocationUpdate: { // S3ContentLocationUpdate
 *           BucketARNUpdate: "STRING_VALUE",
 *           FileKeyUpdate: "STRING_VALUE",
 *           ObjectVersionUpdate: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     FlinkApplicationConfigurationUpdate: { // FlinkApplicationConfigurationUpdate
 *       CheckpointConfigurationUpdate: { // CheckpointConfigurationUpdate
 *         ConfigurationTypeUpdate: "DEFAULT" || "CUSTOM",
 *         CheckpointingEnabledUpdate: true || false,
 *         CheckpointIntervalUpdate: Number("long"),
 *         MinPauseBetweenCheckpointsUpdate: Number("long"),
 *       },
 *       MonitoringConfigurationUpdate: { // MonitoringConfigurationUpdate
 *         ConfigurationTypeUpdate: "DEFAULT" || "CUSTOM",
 *         MetricsLevelUpdate: "APPLICATION" || "TASK" || "OPERATOR" || "PARALLELISM",
 *         LogLevelUpdate: "INFO" || "WARN" || "ERROR" || "DEBUG",
 *       },
 *       ParallelismConfigurationUpdate: { // ParallelismConfigurationUpdate
 *         ConfigurationTypeUpdate: "DEFAULT" || "CUSTOM",
 *         ParallelismUpdate: Number("int"),
 *         ParallelismPerKPUUpdate: Number("int"),
 *         AutoScalingEnabledUpdate: true || false,
 *       },
 *     },
 *     EnvironmentPropertyUpdates: { // EnvironmentPropertyUpdates
 *       PropertyGroups: [ // PropertyGroups // required
 *         { // PropertyGroup
 *           PropertyGroupId: "STRING_VALUE", // required
 *           PropertyMap: { // PropertyMap // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *     ApplicationSnapshotConfigurationUpdate: { // ApplicationSnapshotConfigurationUpdate
 *       SnapshotsEnabledUpdate: true || false, // required
 *     },
 *     ApplicationSystemRollbackConfigurationUpdate: { // ApplicationSystemRollbackConfigurationUpdate
 *       RollbackEnabledUpdate: true || false, // required
 *     },
 *     VpcConfigurationUpdates: [ // VpcConfigurationUpdates
 *       { // VpcConfigurationUpdate
 *         VpcConfigurationId: "STRING_VALUE", // required
 *         SubnetIdUpdates: [ // SubnetIds
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIdUpdates: [ // SecurityGroupIds
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     ZeppelinApplicationConfigurationUpdate: { // ZeppelinApplicationConfigurationUpdate
 *       MonitoringConfigurationUpdate: { // ZeppelinMonitoringConfigurationUpdate
 *         LogLevelUpdate: "INFO" || "WARN" || "ERROR" || "DEBUG", // required
 *       },
 *       CatalogConfigurationUpdate: { // CatalogConfigurationUpdate
 *         GlueDataCatalogConfigurationUpdate: { // GlueDataCatalogConfigurationUpdate
 *           DatabaseARNUpdate: "STRING_VALUE", // required
 *         },
 *       },
 *       DeployAsApplicationConfigurationUpdate: { // DeployAsApplicationConfigurationUpdate
 *         S3ContentLocationUpdate: { // S3ContentBaseLocationUpdate
 *           BucketARNUpdate: "STRING_VALUE",
 *           BasePathUpdate: "STRING_VALUE",
 *         },
 *       },
 *       CustomArtifactsConfigurationUpdate: [ // CustomArtifactsConfigurationList
 *         { // CustomArtifactConfiguration
 *           ArtifactType: "UDF" || "DEPENDENCY_JAR", // required
 *           S3ContentLocation: { // S3ContentLocation
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
 *     ApplicationEncryptionConfigurationUpdate: { // ApplicationEncryptionConfigurationUpdate
 *       KeyIdUpdate: "STRING_VALUE",
 *       KeyTypeUpdate: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 *     },
 *   },
 *   ServiceExecutionRoleUpdate: "STRING_VALUE",
 *   RunConfigurationUpdate: { // RunConfigurationUpdate
 *     FlinkRunConfiguration: { // FlinkRunConfiguration
 *       AllowNonRestoredState: true || false,
 *     },
 *     ApplicationRestoreConfiguration: { // ApplicationRestoreConfiguration
 *       ApplicationRestoreType: "SKIP_RESTORE_FROM_SNAPSHOT" || "RESTORE_FROM_LATEST_SNAPSHOT" || "RESTORE_FROM_CUSTOM_SNAPSHOT", // required
 *       SnapshotName: "STRING_VALUE",
 *     },
 *   },
 *   CloudWatchLoggingOptionUpdates: [ // CloudWatchLoggingOptionUpdates
 *     { // CloudWatchLoggingOptionUpdate
 *       CloudWatchLoggingOptionId: "STRING_VALUE", // required
 *       LogStreamARNUpdate: "STRING_VALUE",
 *     },
 *   ],
 *   ConditionalToken: "STRING_VALUE",
 *   RuntimeEnvironmentUpdate: "SQL-1_0" || "FLINK-1_6" || "FLINK-1_8" || "ZEPPELIN-FLINK-1_0" || "FLINK-1_11" || "FLINK-1_13" || "ZEPPELIN-FLINK-2_0" || "FLINK-1_15" || "ZEPPELIN-FLINK-3_0" || "FLINK-1_18" || "FLINK-1_19" || "FLINK-1_20",
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationResponse
 * //   ApplicationDetail: { // ApplicationDetail
 * //     ApplicationARN: "STRING_VALUE", // required
 * //     ApplicationDescription: "STRING_VALUE",
 * //     ApplicationName: "STRING_VALUE", // required
 * //     RuntimeEnvironment: "SQL-1_0" || "FLINK-1_6" || "FLINK-1_8" || "ZEPPELIN-FLINK-1_0" || "FLINK-1_11" || "FLINK-1_13" || "ZEPPELIN-FLINK-2_0" || "FLINK-1_15" || "ZEPPELIN-FLINK-3_0" || "FLINK-1_18" || "FLINK-1_19" || "FLINK-1_20", // required
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
 * //       ApplicationSystemRollbackConfigurationDescription: { // ApplicationSystemRollbackConfigurationDescription
 * //         RollbackEnabled: true || false, // required
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
 * //       ApplicationEncryptionConfigurationDescription: { // ApplicationEncryptionConfigurationDescription
 * //         KeyId: "STRING_VALUE",
 * //         KeyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
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
 * //     ApplicationVersionCreateTimestamp: new Date("TIMESTAMP"),
 * //     ConditionalToken: "STRING_VALUE",
 * //     ApplicationVersionRolledBackTo: Number("long"),
 * //     ApplicationMode: "STREAMING" || "INTERACTIVE",
 * //   },
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidApplicationConfigurationException} (client fault)
 *  <p>The user-provided application configuration is not valid.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 *
 * @public
 */
export class UpdateApplicationCommand extends $Command
  .classBuilder<
    UpdateApplicationCommandInput,
    UpdateApplicationCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20180523", "UpdateApplication", {})
  .n("KinesisAnalyticsV2Client", "UpdateApplicationCommand")
  .sc(UpdateApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationRequest;
      output: UpdateApplicationResponse;
    };
    sdk: {
      input: UpdateApplicationCommandInput;
      output: UpdateApplicationCommandOutput;
    };
  };
}

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

import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { DescribeApplicationRequest, DescribeApplicationResponse } from "../models/models_0";
import { de_DescribeApplicationCommand, se_DescribeApplicationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationCommand}.
 */
export interface DescribeApplicationCommandInput extends DescribeApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationCommand}.
 */
export interface DescribeApplicationCommandOutput extends DescribeApplicationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specific Kinesis Data Analytics application.</p>
 *          <p>If you want to retrieve a list of all applications in your account,
 *       use the <a>ListApplications</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DescribeApplicationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   IncludeAdditionalDetails: true || false,
 * };
 * const command = new DescribeApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationResponse
 * //   ApplicationDetail: { // ApplicationDetail
 * //     ApplicationARN: "STRING_VALUE", // required
 * //     ApplicationDescription: "STRING_VALUE",
 * //     ApplicationName: "STRING_VALUE", // required
 * //     RuntimeEnvironment: "SQL-1_0" || "FLINK-1_6" || "FLINK-1_8" || "ZEPPELIN-FLINK-1_0" || "FLINK-1_11" || "FLINK-1_13" || "ZEPPELIN-FLINK-2_0" || "FLINK-1_15" || "ZEPPELIN-FLINK-3_0", // required
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
 * @param DescribeApplicationCommandInput - {@link DescribeApplicationCommandInput}
 * @returns {@link DescribeApplicationCommandOutput}
 * @see {@link DescribeApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 */
export class DescribeApplicationCommand extends $Command<
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
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
  constructor(readonly input: DescribeApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeApplicationCommandInput, DescribeApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DescribeApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KinesisAnalytics_20180523",
        operation: "DescribeApplication",
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
  private serialize(input: DescribeApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeApplicationCommandOutput> {
    return de_DescribeApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

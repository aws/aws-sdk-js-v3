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

import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { UpdateApplicationRequest, UpdateApplicationResponse } from "../models/models_0";
import { de_UpdateApplicationCommand, se_UpdateApplicationCommand } from "../protocols/Aws_json1_1";

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
 * @public
 * <p>Updates an existing Kinesis Data Analytics application. Using this operation, you
 *       can update application code, input configuration, and output configuration. </p>
 *          <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update
 *       your application. </p>
 *          <note>
 *             <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you
 *     need to update an application's <code>RuntimeEnvironment</code>, you must delete the application
 *     and create it again.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, UpdateApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, UpdateApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
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
 *         ZipFileContentUpdate: "BLOB_VALUE",
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
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
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
 *
 */
export class UpdateApplicationCommand extends $Command<
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
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
  constructor(readonly input: UpdateApplicationCommandInput) {
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
  ): Handler<UpdateApplicationCommandInput, UpdateApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "UpdateApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: UpdateApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateApplicationCommandOutput> {
    return de_UpdateApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

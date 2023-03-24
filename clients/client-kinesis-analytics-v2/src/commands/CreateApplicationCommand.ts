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
import { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateApplicationCommand,
  serializeAws_json1_1CreateApplicationCommand,
} from "../protocols/Aws_json1_1";

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
 * @public
 * <p>Creates a Kinesis Data Analytics application. For information about creating a
 *           Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an
 *         Application</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, CreateApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, CreateApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = {
 *   ApplicationName: "STRING_VALUE", // required
 *   ApplicationDescription: "STRING_VALUE",
 *   RuntimeEnvironment: "SQL-1_0" || "FLINK-1_6" || "FLINK-1_8" || "ZEPPELIN-FLINK-1_0" || "FLINK-1_11" || "FLINK-1_13" || "ZEPPELIN-FLINK-2_0" || "FLINK-1_15", // required
 *   ServiceExecutionRole: "STRING_VALUE", // required
 *   ApplicationConfiguration: {
 *     SqlApplicationConfiguration: {
 *       Inputs: [
 *         {
 *           NamePrefix: "STRING_VALUE", // required
 *           InputProcessingConfiguration: {
 *             InputLambdaProcessor: {
 *               ResourceARN: "STRING_VALUE", // required
 *             },
 *           },
 *           KinesisStreamsInput: {
 *             ResourceARN: "STRING_VALUE", // required
 *           },
 *           KinesisFirehoseInput: {
 *             ResourceARN: "STRING_VALUE", // required
 *           },
 *           InputParallelism: {
 *             Count: Number("int"),
 *           },
 *           InputSchema: {
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
 *       Outputs: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           KinesisStreamsOutput: {
 *             ResourceARN: "STRING_VALUE", // required
 *           },
 *           KinesisFirehoseOutput: {
 *             ResourceARN: "STRING_VALUE", // required
 *           },
 *           LambdaOutput: {
 *             ResourceARN: "STRING_VALUE", // required
 *           },
 *           DestinationSchema: {
 *             RecordFormatType: "JSON" || "CSV", // required
 *           },
 *         },
 *       ],
 *       ReferenceDataSources: [
 *         {
 *           TableName: "STRING_VALUE", // required
 *           S3ReferenceDataSource: {
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
 *     FlinkApplicationConfiguration: {
 *       CheckpointConfiguration: {
 *         ConfigurationType: "DEFAULT" || "CUSTOM", // required
 *         CheckpointingEnabled: true || false,
 *         CheckpointInterval: Number("long"),
 *         MinPauseBetweenCheckpoints: Number("long"),
 *       },
 *       MonitoringConfiguration: {
 *         ConfigurationType: "DEFAULT" || "CUSTOM", // required
 *         MetricsLevel: "APPLICATION" || "TASK" || "OPERATOR" || "PARALLELISM",
 *         LogLevel: "INFO" || "WARN" || "ERROR" || "DEBUG",
 *       },
 *       ParallelismConfiguration: {
 *         ConfigurationType: "DEFAULT" || "CUSTOM", // required
 *         Parallelism: Number("int"),
 *         ParallelismPerKPU: Number("int"),
 *         AutoScalingEnabled: true || false,
 *       },
 *     },
 *     EnvironmentProperties: {
 *       PropertyGroups: [ // required
 *         {
 *           PropertyGroupId: "STRING_VALUE", // required
 *           PropertyMap: { // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *     ApplicationCodeConfiguration: {
 *       CodeContent: {
 *         TextContent: "STRING_VALUE",
 *         ZipFileContent: "BLOB_VALUE",
 *         S3ContentLocation: {
 *           BucketARN: "STRING_VALUE", // required
 *           FileKey: "STRING_VALUE", // required
 *           ObjectVersion: "STRING_VALUE",
 *         },
 *       },
 *       CodeContentType: "PLAINTEXT" || "ZIPFILE", // required
 *     },
 *     ApplicationSnapshotConfiguration: {
 *       SnapshotsEnabled: true || false, // required
 *     },
 *     VpcConfigurations: [
 *       {
 *         SubnetIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     ZeppelinApplicationConfiguration: {
 *       MonitoringConfiguration: {
 *         LogLevel: "INFO" || "WARN" || "ERROR" || "DEBUG", // required
 *       },
 *       CatalogConfiguration: {
 *         GlueDataCatalogConfiguration: {
 *           DatabaseARN: "STRING_VALUE", // required
 *         },
 *       },
 *       DeployAsApplicationConfiguration: {
 *         S3ContentLocation: {
 *           BucketARN: "STRING_VALUE", // required
 *           BasePath: "STRING_VALUE",
 *         },
 *       },
 *       CustomArtifactsConfiguration: [
 *         {
 *           ArtifactType: "UDF" || "DEPENDENCY_JAR", // required
 *           S3ContentLocation: {
 *             BucketARN: "STRING_VALUE", // required
 *             FileKey: "STRING_VALUE", // required
 *             ObjectVersion: "STRING_VALUE",
 *           },
 *           MavenReference: {
 *             GroupId: "STRING_VALUE", // required
 *             ArtifactId: "STRING_VALUE", // required
 *             Version: "STRING_VALUE", // required
 *           },
 *         },
 *       ],
 *     },
 *   },
 *   CloudWatchLoggingOptions: [
 *     {
 *       LogStreamARN: "STRING_VALUE", // required
 *     },
 *   ],
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ApplicationMode: "STREAMING" || "INTERACTIVE",
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
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
 *
 */
export class CreateApplicationCommand extends $Command<
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
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
  constructor(readonly input: CreateApplicationCommandInput) {
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
  ): Handler<CreateApplicationCommandInput, CreateApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "CreateApplicationCommand";
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
  private serialize(input: CreateApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApplicationCommandOutput> {
    return deserializeAws_json1_1CreateApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

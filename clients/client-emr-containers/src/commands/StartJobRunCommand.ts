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
} from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { StartJobRunRequest, StartJobRunRequestFilterSensitiveLog, StartJobRunResponse } from "../models/models_0";
import { de_StartJobRunCommand, se_StartJobRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartJobRunCommand}.
 */
export interface StartJobRunCommandInput extends StartJobRunRequest {}
/**
 * @public
 *
 * The output of {@link StartJobRunCommand}.
 */
export interface StartJobRunCommandOutput extends StartJobRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or
 *          SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, StartJobRunCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, StartJobRunCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // StartJobRunRequest
 *   name: "STRING_VALUE",
 *   virtualClusterId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   executionRoleArn: "STRING_VALUE",
 *   releaseLabel: "STRING_VALUE",
 *   jobDriver: { // JobDriver
 *     sparkSubmitJobDriver: { // SparkSubmitJobDriver
 *       entryPoint: "STRING_VALUE", // required
 *       entryPointArguments: [ // EntryPointArguments
 *         "STRING_VALUE",
 *       ],
 *       sparkSubmitParameters: "STRING_VALUE",
 *     },
 *     sparkSqlJobDriver: { // SparkSqlJobDriver
 *       entryPoint: "STRING_VALUE",
 *       sparkSqlParameters: "STRING_VALUE",
 *     },
 *   },
 *   configurationOverrides: { // ConfigurationOverrides
 *     applicationConfiguration: [ // ConfigurationList
 *       { // Configuration
 *         classification: "STRING_VALUE", // required
 *         properties: { // SensitivePropertiesMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         configurations: [
 *           {
 *             classification: "STRING_VALUE", // required
 *             properties: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             configurations: "<ConfigurationList>",
 *           },
 *         ],
 *       },
 *     ],
 *     monitoringConfiguration: { // MonitoringConfiguration
 *       persistentAppUI: "ENABLED" || "DISABLED",
 *       cloudWatchMonitoringConfiguration: { // CloudWatchMonitoringConfiguration
 *         logGroupName: "STRING_VALUE", // required
 *         logStreamNamePrefix: "STRING_VALUE",
 *       },
 *       s3MonitoringConfiguration: { // S3MonitoringConfiguration
 *         logUri: "STRING_VALUE", // required
 *       },
 *       containerLogRotationConfiguration: { // ContainerLogRotationConfiguration
 *         rotationSize: "STRING_VALUE", // required
 *         maxFilesToKeep: Number("int"), // required
 *       },
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   jobTemplateId: "STRING_VALUE",
 *   jobTemplateParameters: { // TemplateParameterInputMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   retryPolicyConfiguration: { // RetryPolicyConfiguration
 *     maxAttempts: Number("int"), // required
 *   },
 * };
 * const command = new StartJobRunCommand(input);
 * const response = await client.send(command);
 * // { // StartJobRunResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   virtualClusterId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartJobRunCommandInput - {@link StartJobRunCommandInput}
 * @returns {@link StartJobRunCommandOutput}
 * @see {@link StartJobRunCommandInput} for command's `input` shape.
 * @see {@link StartJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 */
export class StartJobRunCommand extends $Command<
  StartJobRunCommandInput,
  StartJobRunCommandOutput,
  EMRContainersClientResolvedConfig
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
  constructor(readonly input: StartJobRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartJobRunCommandInput, StartJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartJobRunCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "StartJobRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartJobRunRequestFilterSensitiveLog,
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
  private serialize(input: StartJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartJobRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartJobRunCommandOutput> {
    return de_StartJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

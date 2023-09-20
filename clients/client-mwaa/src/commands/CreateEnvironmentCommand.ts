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
  CreateEnvironmentInput,
  CreateEnvironmentInputFilterSensitiveLog,
  CreateEnvironmentOutput,
} from "../models/models_0";
import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { de_CreateEnvironmentCommand, se_CreateEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandInput extends CreateEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentCommand}.
 */
export interface CreateEnvironmentCommandOutput extends CreateEnvironmentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateEnvironmentCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, CreateEnvironmentCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const input = { // CreateEnvironmentInput
 *   Name: "STRING_VALUE", // required
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   SourceBucketArn: "STRING_VALUE", // required
 *   DagS3Path: "STRING_VALUE", // required
 *   NetworkConfiguration: { // NetworkConfiguration
 *     SubnetIds: [ // SubnetList
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   PluginsS3Path: "STRING_VALUE",
 *   PluginsS3ObjectVersion: "STRING_VALUE",
 *   RequirementsS3Path: "STRING_VALUE",
 *   RequirementsS3ObjectVersion: "STRING_VALUE",
 *   StartupScriptS3Path: "STRING_VALUE",
 *   StartupScriptS3ObjectVersion: "STRING_VALUE",
 *   AirflowConfigurationOptions: { // AirflowConfigurationOptions
 *     "<keys>": "STRING_VALUE",
 *   },
 *   EnvironmentClass: "STRING_VALUE",
 *   MaxWorkers: Number("int"),
 *   KmsKey: "STRING_VALUE",
 *   AirflowVersion: "STRING_VALUE",
 *   LoggingConfiguration: { // LoggingConfigurationInput
 *     DagProcessingLogs: { // ModuleLoggingConfigurationInput
 *       Enabled: true || false, // required
 *       LogLevel: "STRING_VALUE", // required
 *     },
 *     SchedulerLogs: {
 *       Enabled: true || false, // required
 *       LogLevel: "STRING_VALUE", // required
 *     },
 *     WebserverLogs: {
 *       Enabled: true || false, // required
 *       LogLevel: "STRING_VALUE", // required
 *     },
 *     WorkerLogs: {
 *       Enabled: true || false, // required
 *       LogLevel: "STRING_VALUE", // required
 *     },
 *     TaskLogs: {
 *       Enabled: true || false, // required
 *       LogLevel: "STRING_VALUE", // required
 *     },
 *   },
 *   WeeklyMaintenanceWindowStart: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   WebserverAccessMode: "STRING_VALUE",
 *   MinWorkers: Number("int"),
 *   Schedulers: Number("int"),
 * };
 * const command = new CreateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEnvironmentCommandInput - {@link CreateEnvironmentCommandInput}
 * @returns {@link CreateEnvironmentCommandOutput}
 * @see {@link CreateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>InternalServerException: An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>ValidationException: The provided input is not valid.</p>
 *
 * @throws {@link MWAAServiceException}
 * <p>Base exception class for all service exceptions from MWAA service.</p>
 *
 */
export class CreateEnvironmentCommand extends $Command<
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
  MWAAClientResolvedConfig
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
  constructor(readonly input: CreateEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MWAAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MWAAClient";
    const commandName = "CreateEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEnvironmentInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMWAA",
        operation: "CreateEnvironment",
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
  private serialize(input: CreateEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEnvironmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEnvironmentCommandOutput> {
    return de_CreateEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

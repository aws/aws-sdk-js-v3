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

import {
  UpdateEnvironmentInput,
  UpdateEnvironmentInputFilterSensitiveLog,
  UpdateEnvironmentOutput,
} from "../models/models_0";
import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { de_UpdateEnvironmentCommand, se_UpdateEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandOutput extends UpdateEnvironmentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, UpdateEnvironmentCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const input = { // UpdateEnvironmentInput
 *   Name: "STRING_VALUE", // required
 *   ExecutionRoleArn: "STRING_VALUE",
 *   AirflowVersion: "STRING_VALUE",
 *   SourceBucketArn: "STRING_VALUE",
 *   DagS3Path: "STRING_VALUE",
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
 *   NetworkConfiguration: { // UpdateNetworkConfigurationInput
 *     SecurityGroupIds: [ // SecurityGroupList // required
 *       "STRING_VALUE",
 *     ],
 *   },
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
 *   WebserverAccessMode: "STRING_VALUE",
 *   MinWorkers: Number("int"),
 *   Schedulers: Number("int"),
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentCommandInput - {@link UpdateEnvironmentCommandInput}
 * @returns {@link UpdateEnvironmentCommandOutput}
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>InternalServerException: An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>ResourceNotFoundException: The resource is not available.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>ValidationException: The provided input is not valid.</p>
 *
 * @throws {@link MWAAServiceException}
 * <p>Base exception class for all service exceptions from MWAA service.</p>
 *
 */
export class UpdateEnvironmentCommand extends $Command<
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
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
  constructor(readonly input: UpdateEnvironmentCommandInput) {
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
  ): Handler<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MWAAClient";
    const commandName = "UpdateEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEnvironmentInputFilterSensitiveLog,
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
  private serialize(input: UpdateEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateEnvironmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEnvironmentCommandOutput> {
    return de_UpdateEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { GetEnvironmentInput, GetEnvironmentOutput, GetEnvironmentOutputFilterSensitiveLog } from "../models/models_0";
import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { de_GetEnvironmentCommand, se_GetEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandInput extends GetEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandOutput extends GetEnvironmentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, GetEnvironmentCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, GetEnvironmentCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const input = { // GetEnvironmentInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentOutput
 * //   Environment: { // Environment
 * //     Name: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     WebserverUrl: "STRING_VALUE",
 * //     ExecutionRoleArn: "STRING_VALUE",
 * //     ServiceRoleArn: "STRING_VALUE",
 * //     KmsKey: "STRING_VALUE",
 * //     AirflowVersion: "STRING_VALUE",
 * //     SourceBucketArn: "STRING_VALUE",
 * //     DagS3Path: "STRING_VALUE",
 * //     PluginsS3Path: "STRING_VALUE",
 * //     PluginsS3ObjectVersion: "STRING_VALUE",
 * //     RequirementsS3Path: "STRING_VALUE",
 * //     RequirementsS3ObjectVersion: "STRING_VALUE",
 * //     StartupScriptS3Path: "STRING_VALUE",
 * //     StartupScriptS3ObjectVersion: "STRING_VALUE",
 * //     AirflowConfigurationOptions: { // AirflowConfigurationOptions
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     EnvironmentClass: "STRING_VALUE",
 * //     MaxWorkers: Number("int"),
 * //     NetworkConfiguration: { // NetworkConfiguration
 * //       SubnetIds: [ // SubnetList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [ // SecurityGroupList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     LoggingConfiguration: { // LoggingConfiguration
 * //       DagProcessingLogs: { // ModuleLoggingConfiguration
 * //         Enabled: true || false,
 * //         LogLevel: "STRING_VALUE",
 * //         CloudWatchLogGroupArn: "STRING_VALUE",
 * //       },
 * //       SchedulerLogs: {
 * //         Enabled: true || false,
 * //         LogLevel: "STRING_VALUE",
 * //         CloudWatchLogGroupArn: "STRING_VALUE",
 * //       },
 * //       WebserverLogs: {
 * //         Enabled: true || false,
 * //         LogLevel: "STRING_VALUE",
 * //         CloudWatchLogGroupArn: "STRING_VALUE",
 * //       },
 * //       WorkerLogs: {
 * //         Enabled: true || false,
 * //         LogLevel: "STRING_VALUE",
 * //         CloudWatchLogGroupArn: "STRING_VALUE",
 * //       },
 * //       TaskLogs: {
 * //         Enabled: true || false,
 * //         LogLevel: "STRING_VALUE",
 * //         CloudWatchLogGroupArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     LastUpdate: { // LastUpdate
 * //       Status: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Error: { // UpdateError
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //       Source: "STRING_VALUE",
 * //     },
 * //     WeeklyMaintenanceWindowStart: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     WebserverAccessMode: "STRING_VALUE",
 * //     MinWorkers: Number("int"),
 * //     Schedulers: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEnvironmentCommandInput - {@link GetEnvironmentCommandInput}
 * @returns {@link GetEnvironmentCommandOutput}
 * @see {@link GetEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCommandOutput} for command's `response` shape.
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
export class GetEnvironmentCommand extends $Command<
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
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
  constructor(readonly input: GetEnvironmentCommandInput) {
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
  ): Handler<GetEnvironmentCommandInput, GetEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MWAAClient";
    const commandName = "GetEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetEnvironmentOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMWAA",
        operation: "GetEnvironment",
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
  private serialize(input: GetEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEnvironmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEnvironmentCommandOutput> {
    return de_GetEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
  GetMaintenanceWindowExecutionTaskRequest,
  GetMaintenanceWindowExecutionTaskResult,
  GetMaintenanceWindowExecutionTaskResultFilterSensitiveLog,
} from "../models/models_1";
import {
  de_GetMaintenanceWindowExecutionTaskCommand,
  se_GetMaintenanceWindowExecutionTaskCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMaintenanceWindowExecutionTaskCommand}.
 */
export interface GetMaintenanceWindowExecutionTaskCommandInput extends GetMaintenanceWindowExecutionTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetMaintenanceWindowExecutionTaskCommand}.
 */
export interface GetMaintenanceWindowExecutionTaskCommandOutput
  extends GetMaintenanceWindowExecutionTaskResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the details about a specific task run as part of a maintenance window
 *    execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowExecutionTaskCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowExecutionTaskCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetMaintenanceWindowExecutionTaskRequest
 *   WindowExecutionId: "STRING_VALUE", // required
 *   TaskId: "STRING_VALUE", // required
 * };
 * const command = new GetMaintenanceWindowExecutionTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetMaintenanceWindowExecutionTaskResult
 * //   WindowExecutionId: "STRING_VALUE",
 * //   TaskExecutionId: "STRING_VALUE",
 * //   TaskArn: "STRING_VALUE",
 * //   ServiceRole: "STRING_VALUE",
 * //   Type: "RUN_COMMAND" || "AUTOMATION" || "STEP_FUNCTIONS" || "LAMBDA",
 * //   TaskParameters: [ // MaintenanceWindowTaskParametersList
 * //     { // MaintenanceWindowTaskParameters
 * //       "<keys>": { // MaintenanceWindowTaskParameterValueExpression
 * //         Values: [ // MaintenanceWindowTaskParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   Priority: Number("int"),
 * //   MaxConcurrency: "STRING_VALUE",
 * //   MaxErrors: "STRING_VALUE",
 * //   Status: "PENDING" || "IN_PROGRESS" || "SUCCESS" || "FAILED" || "TIMED_OUT" || "CANCELLING" || "CANCELLED" || "SKIPPED_OVERLAPPING",
 * //   StatusDetails: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   AlarmConfiguration: { // AlarmConfiguration
 * //     IgnorePollAlarmFailure: true || false,
 * //     Alarms: [ // AlarmList // required
 * //       { // Alarm
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   TriggeredAlarms: [ // AlarmStateInformationList
 * //     { // AlarmStateInformation
 * //       Name: "STRING_VALUE", // required
 * //       State: "UNKNOWN" || "ALARM", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMaintenanceWindowExecutionTaskCommandInput - {@link GetMaintenanceWindowExecutionTaskCommandInput}
 * @returns {@link GetMaintenanceWindowExecutionTaskCommandOutput}
 * @see {@link GetMaintenanceWindowExecutionTaskCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowExecutionTaskCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class GetMaintenanceWindowExecutionTaskCommand extends $Command<
  GetMaintenanceWindowExecutionTaskCommandInput,
  GetMaintenanceWindowExecutionTaskCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: GetMaintenanceWindowExecutionTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMaintenanceWindowExecutionTaskCommandInput, GetMaintenanceWindowExecutionTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMaintenanceWindowExecutionTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetMaintenanceWindowExecutionTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "GetMaintenanceWindowExecutionTask",
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
  private serialize(
    input: GetMaintenanceWindowExecutionTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetMaintenanceWindowExecutionTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMaintenanceWindowExecutionTaskCommandOutput> {
    return de_GetMaintenanceWindowExecutionTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

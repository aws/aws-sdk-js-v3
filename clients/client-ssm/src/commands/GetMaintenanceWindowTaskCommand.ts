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
  GetMaintenanceWindowTaskRequest,
  GetMaintenanceWindowTaskResult,
  GetMaintenanceWindowTaskResultFilterSensitiveLog,
} from "../models/models_1";
import { de_GetMaintenanceWindowTaskCommand, se_GetMaintenanceWindowTaskCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMaintenanceWindowTaskCommand}.
 */
export interface GetMaintenanceWindowTaskCommandInput extends GetMaintenanceWindowTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetMaintenanceWindowTaskCommand}.
 */
export interface GetMaintenanceWindowTaskCommandOutput extends GetMaintenanceWindowTaskResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the details of a maintenance window task.</p>
 *          <note>
 *             <p>For maintenance window tasks without a specified target, you can't supply values for
 *      <code>--max-errors</code> and <code>--max-concurrency</code>. Instead, the system inserts a
 *     placeholder value of <code>1</code>, which may be reported in the response to this command.
 *     These values don't affect the running of your task and can be ignored.</p>
 *          </note>
 *          <p>To retrieve a list of tasks in a maintenance window, instead use the <a>DescribeMaintenanceWindowTasks</a> command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowTaskCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowTaskCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetMaintenanceWindowTaskRequest
 *   WindowId: "STRING_VALUE", // required
 *   WindowTaskId: "STRING_VALUE", // required
 * };
 * const command = new GetMaintenanceWindowTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetMaintenanceWindowTaskResult
 * //   WindowId: "STRING_VALUE",
 * //   WindowTaskId: "STRING_VALUE",
 * //   Targets: [ // Targets
 * //     { // Target
 * //       Key: "STRING_VALUE",
 * //       Values: [ // TargetValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   TaskArn: "STRING_VALUE",
 * //   ServiceRoleArn: "STRING_VALUE",
 * //   TaskType: "RUN_COMMAND" || "AUTOMATION" || "STEP_FUNCTIONS" || "LAMBDA",
 * //   TaskParameters: { // MaintenanceWindowTaskParameters
 * //     "<keys>": { // MaintenanceWindowTaskParameterValueExpression
 * //       Values: [ // MaintenanceWindowTaskParameterValueList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   TaskInvocationParameters: { // MaintenanceWindowTaskInvocationParameters
 * //     RunCommand: { // MaintenanceWindowRunCommandParameters
 * //       Comment: "STRING_VALUE",
 * //       CloudWatchOutputConfig: { // CloudWatchOutputConfig
 * //         CloudWatchLogGroupName: "STRING_VALUE",
 * //         CloudWatchOutputEnabled: true || false,
 * //       },
 * //       DocumentHash: "STRING_VALUE",
 * //       DocumentHashType: "Sha256" || "Sha1",
 * //       DocumentVersion: "STRING_VALUE",
 * //       NotificationConfig: { // NotificationConfig
 * //         NotificationArn: "STRING_VALUE",
 * //         NotificationEvents: [ // NotificationEventList
 * //           "All" || "InProgress" || "Success" || "TimedOut" || "Cancelled" || "Failed",
 * //         ],
 * //         NotificationType: "Command" || "Invocation",
 * //       },
 * //       OutputS3BucketName: "STRING_VALUE",
 * //       OutputS3KeyPrefix: "STRING_VALUE",
 * //       Parameters: { // Parameters
 * //         "<keys>": [ // ParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ServiceRoleArn: "STRING_VALUE",
 * //       TimeoutSeconds: Number("int"),
 * //     },
 * //     Automation: { // MaintenanceWindowAutomationParameters
 * //       DocumentVersion: "STRING_VALUE",
 * //       Parameters: { // AutomationParameterMap
 * //         "<keys>": [ // AutomationParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     StepFunctions: { // MaintenanceWindowStepFunctionsParameters
 * //       Input: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     Lambda: { // MaintenanceWindowLambdaParameters
 * //       ClientContext: "STRING_VALUE",
 * //       Qualifier: "STRING_VALUE",
 * //       Payload: "BLOB_VALUE",
 * //     },
 * //   },
 * //   Priority: Number("int"),
 * //   MaxConcurrency: "STRING_VALUE",
 * //   MaxErrors: "STRING_VALUE",
 * //   LoggingInfo: { // LoggingInfo
 * //     S3BucketName: "STRING_VALUE", // required
 * //     S3KeyPrefix: "STRING_VALUE",
 * //     S3Region: "STRING_VALUE", // required
 * //   },
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CutoffBehavior: "CONTINUE_TASK" || "CANCEL_TASK",
 * //   AlarmConfiguration: { // AlarmConfiguration
 * //     IgnorePollAlarmFailure: true || false,
 * //     Alarms: [ // AlarmList // required
 * //       { // Alarm
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMaintenanceWindowTaskCommandInput - {@link GetMaintenanceWindowTaskCommandInput}
 * @returns {@link GetMaintenanceWindowTaskCommandOutput}
 * @see {@link GetMaintenanceWindowTaskCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowTaskCommandOutput} for command's `response` shape.
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
export class GetMaintenanceWindowTaskCommand extends $Command<
  GetMaintenanceWindowTaskCommandInput,
  GetMaintenanceWindowTaskCommandOutput,
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
  constructor(readonly input: GetMaintenanceWindowTaskCommandInput) {
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
  ): Handler<GetMaintenanceWindowTaskCommandInput, GetMaintenanceWindowTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMaintenanceWindowTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetMaintenanceWindowTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetMaintenanceWindowTaskResultFilterSensitiveLog,
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
  private serialize(input: GetMaintenanceWindowTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMaintenanceWindowTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMaintenanceWindowTaskCommandOutput> {
    return de_GetMaintenanceWindowTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

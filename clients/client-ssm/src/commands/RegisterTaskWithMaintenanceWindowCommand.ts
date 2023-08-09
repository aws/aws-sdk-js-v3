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
  RegisterTaskWithMaintenanceWindowRequest,
  RegisterTaskWithMaintenanceWindowRequestFilterSensitiveLog,
  RegisterTaskWithMaintenanceWindowResult,
} from "../models/models_1";
import {
  de_RegisterTaskWithMaintenanceWindowCommand,
  se_RegisterTaskWithMaintenanceWindowCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterTaskWithMaintenanceWindowCommand}.
 */
export interface RegisterTaskWithMaintenanceWindowCommandInput extends RegisterTaskWithMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link RegisterTaskWithMaintenanceWindowCommand}.
 */
export interface RegisterTaskWithMaintenanceWindowCommandOutput
  extends RegisterTaskWithMaintenanceWindowResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds a new task to a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterTaskWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterTaskWithMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // RegisterTaskWithMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   TaskArn: "STRING_VALUE", // required
 *   ServiceRoleArn: "STRING_VALUE",
 *   TaskType: "RUN_COMMAND" || "AUTOMATION" || "STEP_FUNCTIONS" || "LAMBDA", // required
 *   TaskParameters: { // MaintenanceWindowTaskParameters
 *     "<keys>": { // MaintenanceWindowTaskParameterValueExpression
 *       Values: [ // MaintenanceWindowTaskParameterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   TaskInvocationParameters: { // MaintenanceWindowTaskInvocationParameters
 *     RunCommand: { // MaintenanceWindowRunCommandParameters
 *       Comment: "STRING_VALUE",
 *       CloudWatchOutputConfig: { // CloudWatchOutputConfig
 *         CloudWatchLogGroupName: "STRING_VALUE",
 *         CloudWatchOutputEnabled: true || false,
 *       },
 *       DocumentHash: "STRING_VALUE",
 *       DocumentHashType: "Sha256" || "Sha1",
 *       DocumentVersion: "STRING_VALUE",
 *       NotificationConfig: { // NotificationConfig
 *         NotificationArn: "STRING_VALUE",
 *         NotificationEvents: [ // NotificationEventList
 *           "All" || "InProgress" || "Success" || "TimedOut" || "Cancelled" || "Failed",
 *         ],
 *         NotificationType: "Command" || "Invocation",
 *       },
 *       OutputS3BucketName: "STRING_VALUE",
 *       OutputS3KeyPrefix: "STRING_VALUE",
 *       Parameters: { // Parameters
 *         "<keys>": [ // ParameterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ServiceRoleArn: "STRING_VALUE",
 *       TimeoutSeconds: Number("int"),
 *     },
 *     Automation: { // MaintenanceWindowAutomationParameters
 *       DocumentVersion: "STRING_VALUE",
 *       Parameters: { // AutomationParameterMap
 *         "<keys>": [ // AutomationParameterValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     StepFunctions: { // MaintenanceWindowStepFunctionsParameters
 *       Input: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *     },
 *     Lambda: { // MaintenanceWindowLambdaParameters
 *       ClientContext: "STRING_VALUE",
 *       Qualifier: "STRING_VALUE",
 *       Payload: "BLOB_VALUE",
 *     },
 *   },
 *   Priority: Number("int"),
 *   MaxConcurrency: "STRING_VALUE",
 *   MaxErrors: "STRING_VALUE",
 *   LoggingInfo: { // LoggingInfo
 *     S3BucketName: "STRING_VALUE", // required
 *     S3KeyPrefix: "STRING_VALUE",
 *     S3Region: "STRING_VALUE", // required
 *   },
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   CutoffBehavior: "CONTINUE_TASK" || "CANCEL_TASK",
 *   AlarmConfiguration: { // AlarmConfiguration
 *     IgnorePollAlarmFailure: true || false,
 *     Alarms: [ // AlarmList // required
 *       { // Alarm
 *         Name: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new RegisterTaskWithMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTaskWithMaintenanceWindowResult
 * //   WindowTaskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterTaskWithMaintenanceWindowCommandInput - {@link RegisterTaskWithMaintenanceWindowCommandInput}
 * @returns {@link RegisterTaskWithMaintenanceWindowCommandOutput}
 * @see {@link RegisterTaskWithMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link RegisterTaskWithMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link FeatureNotAvailableException} (client fault)
 *  <p>You attempted to register a <code>LAMBDA</code> or <code>STEP_FUNCTIONS</code> task in a
 *    region where the corresponding service isn't available. </p>
 *
 * @throws {@link IdempotentParameterMismatch} (client fault)
 *  <p>Error returned when an idempotent operation is retried and the parameters don't match the
 *    original call to the API with the same idempotency token. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Error returned when the caller has exceeded the default resource quotas. For example, too
 *    many maintenance windows or patch baselines have been created.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class RegisterTaskWithMaintenanceWindowCommand extends $Command<
  RegisterTaskWithMaintenanceWindowCommandInput,
  RegisterTaskWithMaintenanceWindowCommandOutput,
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
  constructor(readonly input: RegisterTaskWithMaintenanceWindowCommandInput) {
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
  ): Handler<RegisterTaskWithMaintenanceWindowCommandInput, RegisterTaskWithMaintenanceWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterTaskWithMaintenanceWindowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "RegisterTaskWithMaintenanceWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterTaskWithMaintenanceWindowRequestFilterSensitiveLog,
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
  private serialize(
    input: RegisterTaskWithMaintenanceWindowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RegisterTaskWithMaintenanceWindowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterTaskWithMaintenanceWindowCommandOutput> {
    return de_RegisterTaskWithMaintenanceWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

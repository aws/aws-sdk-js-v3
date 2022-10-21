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
  UpdateMaintenanceWindowTaskRequest,
  UpdateMaintenanceWindowTaskRequestFilterSensitiveLog,
  UpdateMaintenanceWindowTaskResult,
  UpdateMaintenanceWindowTaskResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand,
  serializeAws_json1_1UpdateMaintenanceWindowTaskCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface UpdateMaintenanceWindowTaskCommandInput extends UpdateMaintenanceWindowTaskRequest {}
export interface UpdateMaintenanceWindowTaskCommandOutput extends UpdateMaintenanceWindowTaskResult, __MetadataBearer {}

/**
 * <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you
 *    can change the following values:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>TaskARN</code>. For example, you can change a <code>RUN_COMMAND</code> task from
 *       <code>AWS-RunPowerShellScript</code> to <code>AWS-RunShellScript</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ServiceRoleArn</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TaskInvocationParameters</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Priority</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaxConcurrency</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaxErrors</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>One or more targets must be specified for maintenance window Run Command-type tasks.
 *     Depending on the task, targets are optional for other maintenance window task types (Automation,
 *      Lambda, and Step Functions). For more information about running tasks
 *     that don't specify targets, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html">Registering
 *      maintenance window tasks without targets</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          </note>
 *          <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the
 *    corresponding field isn't modified. If you set <code>Replace</code> to true, then all fields
 *    required by the <a>RegisterTaskWithMaintenanceWindow</a> operation are required for
 *    this request. Optional fields that aren't specified are set to null.</p>
 *          <important>
 *             <p>When you update a maintenance window task that has options specified in
 *      <code>TaskInvocationParameters</code>, you must provide again all the
 *      <code>TaskInvocationParameters</code> values that you want to retain. The values you don't
 *     specify again are removed. For example, suppose that when you registered a Run Command task, you
 *     specified <code>TaskInvocationParameters</code> values for <code>Comment</code>,
 *      <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the
 *     maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the
 *     values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateMaintenanceWindowTaskCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateMaintenanceWindowTaskCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateMaintenanceWindowTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMaintenanceWindowTaskCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowTaskCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class UpdateMaintenanceWindowTaskCommand extends $Command<
  UpdateMaintenanceWindowTaskCommandInput,
  UpdateMaintenanceWindowTaskCommandOutput,
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

  constructor(readonly input: UpdateMaintenanceWindowTaskCommandInput) {
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
  ): Handler<UpdateMaintenanceWindowTaskCommandInput, UpdateMaintenanceWindowTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMaintenanceWindowTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateMaintenanceWindowTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMaintenanceWindowTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateMaintenanceWindowTaskResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMaintenanceWindowTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMaintenanceWindowTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateMaintenanceWindowTaskCommandOutput> {
    return deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

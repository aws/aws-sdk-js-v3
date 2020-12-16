import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateMaintenanceWindowTaskRequest, UpdateMaintenanceWindowTaskResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateMaintenanceWindowTaskCommand,
  serializeAws_json1_1UpdateMaintenanceWindowTaskCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type UpdateMaintenanceWindowTaskCommandInput = UpdateMaintenanceWindowTaskRequest;
export type UpdateMaintenanceWindowTaskCommandOutput = UpdateMaintenanceWindowTaskResult & __MetadataBearer;

/**
 * <p>Modifies a task assigned to a maintenance window. You can't change the task type, but you
 *    can change the following values:</p>
 *          <ul>
 *             <li>
 *                <p>TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to
 *      AWS-RunShellScript.</p>
 *             </li>
 *             <li>
 *                <p>ServiceRoleArn</p>
 *             </li>
 *             <li>
 *                <p>TaskInvocationParameters</p>
 *             </li>
 *             <li>
 *                <p>Priority</p>
 *             </li>
 *             <li>
 *                <p>MaxConcurrency</p>
 *             </li>
 *             <li>
 *                <p>MaxErrors</p>
 *             </li>
 *          </ul>
 *          <p>If the value for a parameter in <code>UpdateMaintenanceWindowTask</code> is null, then the
 *    corresponding field is not modified. If you set <code>Replace</code> to true, then all fields
 *    required by the <a>RegisterTaskWithMaintenanceWindow</a> action are required for this
 *    request. Optional fields that aren't specified are set to null.</p>
 *          <important>
 *             <p>When you update a maintenance window task that has options specified in
 *      <code>TaskInvocationParameters</code>, you must provide again all the
 *      <code>TaskInvocationParameters</code> values that you want to retain. The values you do not
 *     specify again are removed. For example, suppose that when you registered a Run Command task, you
 *     specified <code>TaskInvocationParameters</code> values for <code>Comment</code>,
 *      <code>NotificationConfig</code>, and <code>OutputS3BucketName</code>. If you update the
 *     maintenance window task and specify only a different <code>OutputS3BucketName</code> value, the
 *     values for <code>Comment</code> and <code>NotificationConfig</code> are removed.</p>
 *          </important>
 */
export class UpdateMaintenanceWindowTaskCommand extends $Command<
  UpdateMaintenanceWindowTaskCommandInput,
  UpdateMaintenanceWindowTaskCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateMaintenanceWindowTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMaintenanceWindowTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMaintenanceWindowTaskResult.filterSensitiveLog,
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

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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  UpdateTaskProtectionRequest,
  UpdateTaskProtectionRequestFilterSensitiveLog,
  UpdateTaskProtectionResponse,
  UpdateTaskProtectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateTaskProtectionCommand,
  serializeAws_json1_1UpdateTaskProtectionCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateTaskProtectionCommandInput extends UpdateTaskProtectionRequest {}
export interface UpdateTaskProtectionCommandOutput extends UpdateTaskProtectionResponse, __MetadataBearer {}

/**
 * <p>Updates the protection status of a task. You can set <code>protectionEnabled</code> to
 * 				<code>true</code> to protect your task from termination during scale-in events from
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service
 * 				Autoscaling</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">deployments</a>.</p>
 *          <p>Task-protection, by default, expires after 2 hours at which point Amazon ECS unsets the
 * 				<code>protectionEnabled</code> property making the task eligible for termination by
 * 			a subsequent scale-in event.</p>
 *          <p>You can specify a custom expiration period for task protection from 1 minute to up to
 * 			2,880 minutes (48 hours). To specify the custom expiration period, set the
 * 				<code>expiresInMinutes</code> property. The <code>expiresInMinutes</code> property
 * 			is always reset when you invoke this operation for a task that already has
 * 				<code>protectionEnabled</code> set to <code>true</code>. You can keep extending the
 * 			protection expiration period of a task by invoking this operation repeatedly.</p>
 *          <p>To learn more about Amazon ECS task protection, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection.html">Task scale-in
 * 				protection</a> in the <i>
 *                <i>Amazon Elastic Container Service Developer Guide</i>
 *             </i>.</p>
 *          <note>
 *             <p>This operation is only supported for tasks belonging to an Amazon ECS service. Invoking
 * 				this operation for a standalone task will result in an <code>TASK_NOT_VALID</code>
 * 				failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure
 * 					reasons</a>.</p>
 *          </note>
 *          <important>
 *             <p>If you prefer to set task protection from within the container, we recommend using
 * 				the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection-endpoint.html">Task scale-in protection endpoint</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateTaskProtectionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateTaskProtectionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateTaskProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTaskProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskProtectionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class UpdateTaskProtectionCommand extends $Command<
  UpdateTaskProtectionCommandInput,
  UpdateTaskProtectionCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: UpdateTaskProtectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTaskProtectionCommandInput, UpdateTaskProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTaskProtectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateTaskProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTaskProtectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateTaskProtectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTaskProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateTaskProtectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTaskProtectionCommandOutput> {
    return deserializeAws_json1_1UpdateTaskProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

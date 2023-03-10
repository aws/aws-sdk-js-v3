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

/**
 * The input for {@link UpdateTaskProtectionCommand}.
 */
export interface UpdateTaskProtectionCommandInput extends UpdateTaskProtectionRequest {}
/**
 * The output of {@link UpdateTaskProtectionCommand}.
 */
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
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 *
 * @example To set task scale-in protection for a task for 60 minutes
 * ```javascript
 * // This example enables scale-in protection for a task for 60 minutes.
 * const input = {
 *   "cluster": "test-task-protection",
 *   "expiresInMinutes": 60,
 *   "protectionEnabled": true,
 *   "tasks": [
 *     "b8b1cf532d0e46ba8d44a40d1de16772"
 *   ]
 * };
 * const command = new UpdateTaskProtectionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "protectedTasks": [
 *     {
 *       "expirationDate": "2022-11-02T06:56:32.553Z",
 *       "protectionEnabled": true,
 *       "taskArn": "arn:aws:ecs:us-west-2:012345678910:task/b8b1cf532d0e46ba8d44a40d1de16772"
 *     }
 *   ]
 * }
 * *\/
 * // example id: enable-the-protection-status-for-a-single-task-for-60-minutes-2022-11-02T06:56:32.553Z
 * ```
 *
 * @example To set task scale-in protection for the default time period in minutes
 * ```javascript
 * // This example enables task scale-in protection for a task, without specifying the expiresInMinutes parameter, for the default protection period of 120 minutes.
 * const input = {
 *   "cluster": "test-task-protection",
 *   "protectionEnabled": true,
 *   "tasks": [
 *     "b8b1cf532d0e46ba8d44a40d1de16772"
 *   ]
 * };
 * const command = new UpdateTaskProtectionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "protectedTasks": [
 *     {
 *       "expirationDate": "2022-11-02T06:56:32.553Z",
 *       "protectionEnabled": true,
 *       "taskArn": "arn:aws:ecs:us-west-2:012345678910:task/b8b1cf532d0e46ba8d44a40d1de16772"
 *     }
 *   ]
 * }
 * *\/
 * // example id: enable-the-protection-status-for-a-single-task-with-default-expiresinminutes-2022-11-02T06:56:32.553Z
 * ```
 *
 * @example To remove task scale-in protection
 * ```javascript
 * // This example removes scale-in protection for a task.
 * const input = {
 *   "cluster": "test-task-protection",
 *   "protectionEnabled": false,
 *   "tasks": [
 *     "b8b1cf532d0e46ba8d44a40d1de16772"
 *   ]
 * };
 * const command = new UpdateTaskProtectionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failures": [],
 *   "protectedTasks": [
 *     {
 *       "protectionEnabled": false,
 *       "taskArn": "arn:aws:ecs:us-west-2:012345678910:task/b8b1cf532d0e46ba8d44a40d1de16772"
 *     }
 *   ]
 * }
 * *\/
 * // example id: disable-scale-in-protection-on-a-single-task
 * ```
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

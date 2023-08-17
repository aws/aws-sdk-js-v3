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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { RecordLifecycleActionHeartbeatAnswer, RecordLifecycleActionHeartbeatType } from "../models/models_0";
import {
  de_RecordLifecycleActionHeartbeatCommand,
  se_RecordLifecycleActionHeartbeatCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RecordLifecycleActionHeartbeatCommand}.
 */
export interface RecordLifecycleActionHeartbeatCommandInput extends RecordLifecycleActionHeartbeatType {}
/**
 * @public
 *
 * The output of {@link RecordLifecycleActionHeartbeatCommand}.
 */
export interface RecordLifecycleActionHeartbeatCommandOutput
  extends RecordLifecycleActionHeartbeatAnswer,
    __MetadataBearer {}

/**
 * @public
 * <p>Records a heartbeat for the lifecycle action associated with the specified token or
 *             instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p>
 *          <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling
 *             group:</p>
 *          <ol>
 *             <li>
 *                <p>(Optional) Create a launch template or launch configuration with a user data
 *                     script that runs while an instance is in a wait state due to a lifecycle
 *                     hook.</p>
 *             </li>
 *             <li>
 *                <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke
 *                     your Lambda function when an instance is put into a wait state due to a
 *                     lifecycle hook.</p>
 *             </li>
 *             <li>
 *                <p>(Optional) Create a notification target and an IAM role. The target can be
 *                     either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish
 *                     lifecycle notifications to the target.</p>
 *             </li>
 *             <li>
 *                <p>Create the lifecycle hook. Specify whether the hook is used when the instances
 *                     launch or terminate.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>If you need more time, record the lifecycle action
 *                         heartbeat to keep the instance in a wait state.</b>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If you finish before the timeout period ends, send a callback by using the
 *                         <a>CompleteLifecycleAction</a> API call.</p>
 *             </li>
 *          </ol>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle
 *                 hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, RecordLifecycleActionHeartbeatCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, RecordLifecycleActionHeartbeatCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // RecordLifecycleActionHeartbeatType
 *   LifecycleHookName: "STRING_VALUE", // required
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   LifecycleActionToken: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 * };
 * const command = new RecordLifecycleActionHeartbeatCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RecordLifecycleActionHeartbeatCommandInput - {@link RecordLifecycleActionHeartbeatCommandInput}
 * @returns {@link RecordLifecycleActionHeartbeatCommandOutput}
 * @see {@link RecordLifecycleActionHeartbeatCommandInput} for command's `input` shape.
 * @see {@link RecordLifecycleActionHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To record a lifecycle action heartbeat
 * ```javascript
 * // This example records a lifecycle action heartbeat to keep the instance in a pending state.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "LifecycleActionToken": "bcd2f1b8-9a78-44d3-8a7a-4dd07d7cf635",
 *   "LifecycleHookName": "my-lifecycle-hook"
 * };
 * const command = new RecordLifecycleActionHeartbeatCommand(input);
 * await client.send(command);
 * // example id: autoscaling-record-lifecycle-action-heartbeat-1
 * ```
 *
 */
export class RecordLifecycleActionHeartbeatCommand extends $Command<
  RecordLifecycleActionHeartbeatCommandInput,
  RecordLifecycleActionHeartbeatCommandOutput,
  AutoScalingClientResolvedConfig
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
  constructor(readonly input: RecordLifecycleActionHeartbeatCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RecordLifecycleActionHeartbeatCommandInput, RecordLifecycleActionHeartbeatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RecordLifecycleActionHeartbeatCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "RecordLifecycleActionHeartbeatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
    input: RecordLifecycleActionHeartbeatCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RecordLifecycleActionHeartbeatCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RecordLifecycleActionHeartbeatCommandOutput> {
    return de_RecordLifecycleActionHeartbeatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

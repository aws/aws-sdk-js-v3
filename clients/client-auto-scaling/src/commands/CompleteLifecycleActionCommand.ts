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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CompleteLifecycleActionAnswer, CompleteLifecycleActionType } from "../models/models_0";
import { de_CompleteLifecycleActionCommand, se_CompleteLifecycleActionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CompleteLifecycleActionCommand}.
 */
export interface CompleteLifecycleActionCommandInput extends CompleteLifecycleActionType {}
/**
 * @public
 *
 * The output of {@link CompleteLifecycleActionCommand}.
 */
export interface CompleteLifecycleActionCommandOutput extends CompleteLifecycleActionAnswer, __MetadataBearer {}

/**
 * @public
 * <p>Completes the lifecycle action for the specified token or instance with the specified
 *             result.</p>
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
 *                <p>If you need more time, record the lifecycle action heartbeat to keep the
 *                     instance in a wait state.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>If you finish before the timeout period ends, send a
 *                         callback by using the <a>CompleteLifecycleAction</a> API
 *                         call.</b>
 *                </p>
 *             </li>
 *          </ol>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/completing-lifecycle-hooks.html">Complete a lifecycle
 *                 action</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, CompleteLifecycleActionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, CompleteLifecycleActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // CompleteLifecycleActionType
 *   LifecycleHookName: "STRING_VALUE", // required
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   LifecycleActionToken: "STRING_VALUE",
 *   LifecycleActionResult: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE",
 * };
 * const command = new CompleteLifecycleActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CompleteLifecycleActionCommandInput - {@link CompleteLifecycleActionCommandInput}
 * @returns {@link CompleteLifecycleActionCommandOutput}
 * @see {@link CompleteLifecycleActionCommandInput} for command's `input` shape.
 * @see {@link CompleteLifecycleActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To complete the lifecycle action
 * ```javascript
 * // This example notifies Auto Scaling that the specified lifecycle action is complete so that it can finish launching or terminating the instance.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "LifecycleActionResult": "CONTINUE",
 *   "LifecycleActionToken": "bcd2f1b8-9a78-44d3-8a7a-4dd07d7cf635",
 *   "LifecycleHookName": "my-lifecycle-hook"
 * };
 * const command = new CompleteLifecycleActionCommand(input);
 * await client.send(command);
 * // example id: autoscaling-complete-lifecycle-action-1
 * ```
 *
 */
export class CompleteLifecycleActionCommand extends $Command<
  CompleteLifecycleActionCommandInput,
  CompleteLifecycleActionCommandOutput,
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
  constructor(readonly input: CompleteLifecycleActionCommandInput) {
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
  ): Handler<CompleteLifecycleActionCommandInput, CompleteLifecycleActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CompleteLifecycleActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "CompleteLifecycleActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "CompleteLifecycleAction",
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
  private serialize(input: CompleteLifecycleActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CompleteLifecycleActionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteLifecycleActionCommandOutput> {
    return de_CompleteLifecycleActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

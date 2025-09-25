// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CompleteLifecycleActionAnswer, CompleteLifecycleActionType } from "../models/models_0";
import { CompleteLifecycleAction } from "../schemas/schemas_16_Lifecycle";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *                         callback by using the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CompleteLifecycleAction.html">CompleteLifecycleAction</a> API
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
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
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
 *
 * @example To complete the lifecycle action
 * ```javascript
 * // This example notifies Auto Scaling that the specified lifecycle action is complete so that it can finish launching or terminating the instance.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   LifecycleActionResult: "CONTINUE",
 *   LifecycleActionToken: "bcd2f1b8-9a78-44d3-8a7a-4dd07d7cf635",
 *   LifecycleHookName: "my-lifecycle-hook"
 * };
 * const command = new CompleteLifecycleActionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CompleteLifecycleActionCommand extends $Command
  .classBuilder<
    CompleteLifecycleActionCommandInput,
    CompleteLifecycleActionCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "CompleteLifecycleAction", {})
  .n("AutoScalingClient", "CompleteLifecycleActionCommand")
  .sc(CompleteLifecycleAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteLifecycleActionType;
      output: {};
    };
    sdk: {
      input: CompleteLifecycleActionCommandInput;
      output: CompleteLifecycleActionCommandOutput;
    };
  };
}

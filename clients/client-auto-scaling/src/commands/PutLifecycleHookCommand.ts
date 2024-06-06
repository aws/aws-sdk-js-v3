// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutLifecycleHookAnswer, PutLifecycleHookType } from "../models/models_0";
import { de_PutLifecycleHookCommand, se_PutLifecycleHookCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutLifecycleHookCommand}.
 */
export interface PutLifecycleHookCommandInput extends PutLifecycleHookType {}
/**
 * @public
 *
 * The output of {@link PutLifecycleHookCommand}.
 */
export interface PutLifecycleHookCommandOutput extends PutLifecycleHookAnswer, __MetadataBearer {}

/**
 * <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p>
 *          <p>Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance
 *             lifecycle, and then perform a custom action on instances when the corresponding
 *             lifecycle event occurs.</p>
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
 *                <p>
 *                   <b>Create the lifecycle hook. Specify whether the hook is
 *                         used when the instances launch or terminate.</b>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If you need more time, record the lifecycle action heartbeat to keep the
 *                     instance in a wait state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p>
 *             </li>
 *             <li>
 *                <p>If you finish before the timeout period ends, send a callback by using the
 *                         <a>CompleteLifecycleAction</a> API call.</p>
 *             </li>
 *          </ol>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle
 *                 hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling
 *             group, the call fails.</p>
 *          <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle
 *             hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutLifecycleHookCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutLifecycleHookCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // PutLifecycleHookType
 *   LifecycleHookName: "STRING_VALUE", // required
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   LifecycleTransition: "STRING_VALUE",
 *   RoleARN: "STRING_VALUE",
 *   NotificationTargetARN: "STRING_VALUE",
 *   NotificationMetadata: "STRING_VALUE",
 *   HeartbeatTimeout: Number("int"),
 *   DefaultResult: "STRING_VALUE",
 * };
 * const command = new PutLifecycleHookCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutLifecycleHookCommandInput - {@link PutLifecycleHookCommandInput}
 * @returns {@link PutLifecycleHookCommandOutput}
 * @see {@link PutLifecycleHookCommandInput} for command's `input` shape.
 * @see {@link PutLifecycleHookCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @public
 * @example To create a launch lifecycle hook
 * ```javascript
 * // This example creates a lifecycle hook for instance launch.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "DefaultResult": "CONTINUE",
 *   "HeartbeatTimeout": 300,
 *   "LifecycleHookName": "my-launch-lifecycle-hook",
 *   "LifecycleTransition": "autoscaling:EC2_INSTANCE_LAUNCHING"
 * };
 * const command = new PutLifecycleHookCommand(input);
 * await client.send(command);
 * // example id: autoscaling-put-lifecycle-hook-1
 * ```
 *
 */
export class PutLifecycleHookCommand extends $Command
  .classBuilder<
    PutLifecycleHookCommandInput,
    PutLifecycleHookCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "PutLifecycleHook", {})
  .n("AutoScalingClient", "PutLifecycleHookCommand")
  .f(void 0, void 0)
  .ser(se_PutLifecycleHookCommand)
  .de(de_PutLifecycleHookCommand)
  .build() {}

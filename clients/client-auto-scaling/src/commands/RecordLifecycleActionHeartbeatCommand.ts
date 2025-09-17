// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RecordLifecycleActionHeartbeatAnswer, RecordLifecycleActionHeartbeatType } from "../models/models_0";
import {
  de_RecordLifecycleActionHeartbeatCommand,
  se_RecordLifecycleActionHeartbeatCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Records a heartbeat for the lifecycle action associated with the specified token or
 *             instance. This extends the timeout by the length of time defined using the
 *             <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PutLifecycleHook.html">PutLifecycleHook</a> API call.</p>
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
 *                     <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CompleteLifecycleAction.html">CompleteLifecycleAction</a> API call.</p>
 *             </li>
 *          </ol>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle
 *                 hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, RecordLifecycleActionHeartbeatCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, RecordLifecycleActionHeartbeatCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
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
 *
 * @example To record a lifecycle action heartbeat
 * ```javascript
 * // This example records a lifecycle action heartbeat to keep the instance in a pending state.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   LifecycleActionToken: "bcd2f1b8-9a78-44d3-8a7a-4dd07d7cf635",
 *   LifecycleHookName: "my-lifecycle-hook"
 * };
 * const command = new RecordLifecycleActionHeartbeatCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RecordLifecycleActionHeartbeatCommand extends $Command
  .classBuilder<
    RecordLifecycleActionHeartbeatCommandInput,
    RecordLifecycleActionHeartbeatCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "RecordLifecycleActionHeartbeat", {})
  .n("AutoScalingClient", "RecordLifecycleActionHeartbeatCommand")
  .f(void 0, void 0)
  .ser(se_RecordLifecycleActionHeartbeatCommand)
  .de(de_RecordLifecycleActionHeartbeatCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RecordLifecycleActionHeartbeatType;
      output: {};
    };
    sdk: {
      input: RecordLifecycleActionHeartbeatCommandInput;
      output: RecordLifecycleActionHeartbeatCommandOutput;
    };
  };
}

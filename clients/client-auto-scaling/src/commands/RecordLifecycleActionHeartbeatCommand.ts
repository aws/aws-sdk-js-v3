// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RecordLifecycleActionHeartbeatAnswer, RecordLifecycleActionHeartbeatType } from "../models/models_0";
import { RecordLifecycleActionHeartbeat$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface RecordLifecycleActionHeartbeatCommandOutput extends RecordLifecycleActionHeartbeatAnswer, __MetadataBearer {}

/**
 * Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the [PutLifecycleHook](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PutLifecycleHook.html) API call.
 *
 * This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:
 *
 * 1. (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.
 * 2. (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.
 * 3. (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.
 * 4. Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.
 * 5. **If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.**
 * 6. If you finish before the timeout period ends, send a callback by using the [CompleteLifecycleAction](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CompleteLifecycleAction.html) API call.
 *
 * For more information, see [Amazon EC2 Auto Scaling lifecycle hooks](https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
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
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
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
export class RecordLifecycleActionHeartbeatCommand extends command<RecordLifecycleActionHeartbeatCommandInput, RecordLifecycleActionHeartbeatCommandOutput>(
  _ep0,
  _mw0,
  "RecordLifecycleActionHeartbeat",
  RecordLifecycleActionHeartbeat$
) {
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

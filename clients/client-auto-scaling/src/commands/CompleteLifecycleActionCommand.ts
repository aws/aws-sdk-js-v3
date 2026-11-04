// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CompleteLifecycleActionAnswer, CompleteLifecycleActionType } from "../models/models_0";
import { CompleteLifecycleAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Completes the lifecycle action for the specified token or instance with the specified result.
 *
 * This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:
 *
 * 1. (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.
 * 2. (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.
 * 3. (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.
 * 4. Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.
 * 5. If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state.
 * 6. **If you finish before the timeout period ends, send a callback by using the [CompleteLifecycleAction](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CompleteLifecycleAction.html) API call.**
 *
 * For more information, see [Complete a lifecycle action](https://docs.aws.amazon.com/autoscaling/ec2/userguide/completing-lifecycle-hooks.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
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
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
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
export class CompleteLifecycleActionCommand extends command<CompleteLifecycleActionCommandInput, CompleteLifecycleActionCommandOutput>(
  _ep0,
  _mw0,
  "CompleteLifecycleAction",
  CompleteLifecycleAction$
) {
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

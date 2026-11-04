// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutLifecycleHookAnswer, PutLifecycleHookType } from "../models/models_0";
import { PutLifecycleHook$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates or updates a lifecycle hook for the specified Auto Scaling group.
 *
 * Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.
 *
 * This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:
 *
 * 1. (Optional) Create a launch template or launch configuration with a user data script that runs while an instance is in a wait state due to a lifecycle hook.
 * 2. (Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke your Lambda function when an instance is put into a wait state due to a lifecycle hook.
 * 3. (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.
 * 4. **Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.**
 * 5. If you need more time, record the lifecycle action heartbeat to keep the instance in a wait state using the [RecordLifecycleActionHeartbeat](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_RecordLifecycleActionHeartbeat.html) API call.
 * 6. If you finish before the timeout period ends, send a callback by using the [CompleteLifecycleAction](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CompleteLifecycleAction.html) API call.
 *
 * For more information, see [Amazon EC2 Auto Scaling lifecycle hooks](https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.
 *
 * You can view the lifecycle hooks for an Auto Scaling group using the [DescribeLifecycleHooks](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeLifecycleHooks.html) API call. If you are no longer using a lifecycle hook, you can delete it by calling the [DeleteLifecycleHook](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DeleteLifecycleHook.html) API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutLifecycleHookCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutLifecycleHookCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
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
 *
 * You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see [DescribeAccountLimits](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html) in the *Amazon EC2 Auto Scaling API Reference*.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
 *
 * @example To create a launch lifecycle hook
 * ```javascript
 * // This example creates a lifecycle hook for instance launch.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   DefaultResult: "CONTINUE",
 *   HeartbeatTimeout: 300,
 *   LifecycleHookName: "my-launch-lifecycle-hook",
 *   LifecycleTransition: "autoscaling:EC2_INSTANCE_LAUNCHING"
 * };
 * const command = new PutLifecycleHookCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutLifecycleHookCommand extends command<PutLifecycleHookCommandInput, PutLifecycleHookCommandOutput>(
  _ep0,
  _mw0,
  "PutLifecycleHook",
  PutLifecycleHook$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLifecycleHookType;
      output: {};
    };
    sdk: {
      input: PutLifecycleHookCommandInput;
      output: PutLifecycleHookCommandOutput;
    };
  };
}

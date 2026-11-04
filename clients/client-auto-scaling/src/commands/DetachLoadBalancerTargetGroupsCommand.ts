// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetachLoadBalancerTargetGroupsResultType, DetachLoadBalancerTargetGroupsType } from "../models/models_0";
import { DetachLoadBalancerTargetGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DetachLoadBalancerTargetGroupsCommand}.
 */
export interface DetachLoadBalancerTargetGroupsCommandInput extends DetachLoadBalancerTargetGroupsType {}
/**
 * @public
 *
 * The output of {@link DetachLoadBalancerTargetGroupsCommand}.
 */
export interface DetachLoadBalancerTargetGroupsCommandOutput extends DetachLoadBalancerTargetGroupsResultType, __MetadataBearer {}

/**
 * > **Note:** This API operation is superseded by [DetachTrafficSources](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DetachTrafficSources.html), which can detach multiple traffic sources types. We recommend using `DetachTrafficSources` to simplify how you manage traffic sources. However, we continue to support `DetachLoadBalancerTargetGroups`. You can use both the original `DetachLoadBalancerTargetGroups` API operation and `DetachTrafficSources` on the same Auto Scaling group.
 *
 * Detaches one or more target groups from the specified Auto Scaling group.
 *
 * When you detach a target group, it enters the `Removing` state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the target group using the [DescribeLoadBalancerTargetGroups](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeLoadBalancerTargetGroups.html) API call. The instances remain running.
 *
 * > **Note:** You can use this operation to detach target groups that were attached by using [AttachLoadBalancerTargetGroups](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachLoadBalancerTargetGroups.html), but not for target groups that were attached by using [AttachTrafficSources](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachTrafficSources.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachLoadBalancerTargetGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachLoadBalancerTargetGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // DetachLoadBalancerTargetGroupsType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TargetGroupARNs: [ // TargetGroupARNs // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DetachLoadBalancerTargetGroupsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachLoadBalancerTargetGroupsCommandInput - {@link DetachLoadBalancerTargetGroupsCommandInput}
 * @returns {@link DetachLoadBalancerTargetGroupsCommandOutput}
 * @see {@link DetachLoadBalancerTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DetachLoadBalancerTargetGroupsCommandOutput} for command's `response` shape.
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
 * @example To detach a target group from an Auto Scaling group
 * ```javascript
 * // This example detaches the specified target group from the specified Auto Scaling group
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   TargetGroupARNs: [
 *     "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *   ]
 * };
 * const command = new DetachLoadBalancerTargetGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DetachLoadBalancerTargetGroupsCommand extends command<DetachLoadBalancerTargetGroupsCommandInput, DetachLoadBalancerTargetGroupsCommandOutput>(
  _ep0,
  _mw0,
  "DetachLoadBalancerTargetGroups",
  DetachLoadBalancerTargetGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachLoadBalancerTargetGroupsType;
      output: {};
    };
    sdk: {
      input: DetachLoadBalancerTargetGroupsCommandInput;
      output: DetachLoadBalancerTargetGroupsCommandOutput;
    };
  };
}

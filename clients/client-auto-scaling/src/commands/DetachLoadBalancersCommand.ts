// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetachLoadBalancersResultType, DetachLoadBalancersType } from "../models/models_0";
import { DetachLoadBalancers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DetachLoadBalancersCommand}.
 */
export interface DetachLoadBalancersCommandInput extends DetachLoadBalancersType {}
/**
 * @public
 *
 * The output of {@link DetachLoadBalancersCommand}.
 */
export interface DetachLoadBalancersCommandOutput extends DetachLoadBalancersResultType, __MetadataBearer {}

/**
 * > **Note:** This API operation is superseded by [DetachTrafficSources](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DetachTrafficSources.html), which can detach multiple traffic sources types. We recommend using `DetachTrafficSources` to simplify how you manage traffic sources. However, we continue to support `DetachLoadBalancers`. You can use both the original `DetachLoadBalancers` API operation and `DetachTrafficSources` on the same Auto Scaling group.
 *
 * Detaches one or more Classic Load Balancers from the specified Auto Scaling group.
 *
 * This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the [DetachLoadBalancerTargetGroups](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DetachLoadBalancerTargetGroups.html) API instead.
 *
 * When you detach a load balancer, it enters the `Removing` state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the [DescribeLoadBalancers](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeLoadBalancers.html) API call. The instances remain running.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // DetachLoadBalancersType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   LoadBalancerNames: [ // LoadBalancerNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DetachLoadBalancersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachLoadBalancersCommandInput - {@link DetachLoadBalancersCommandInput}
 * @returns {@link DetachLoadBalancersCommandOutput}
 * @see {@link DetachLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DetachLoadBalancersCommandOutput} for command's `response` shape.
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
 * @example To detach a load balancer from an Auto Scaling group
 * ```javascript
 * // This example detaches the specified load balancer from the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   LoadBalancerNames: [
 *     "my-load-balancer"
 *   ]
 * };
 * const command = new DetachLoadBalancersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DetachLoadBalancersCommand extends command<DetachLoadBalancersCommandInput, DetachLoadBalancersCommandOutput>(
  _ep0,
  _mw0,
  "DetachLoadBalancers",
  DetachLoadBalancers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachLoadBalancersType;
      output: {};
    };
    sdk: {
      input: DetachLoadBalancersCommandInput;
      output: DetachLoadBalancersCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachLoadBalancersResultType, AttachLoadBalancersType } from "../models/models_0";
import { AttachLoadBalancers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachLoadBalancersCommand}.
 */
export interface AttachLoadBalancersCommandInput extends AttachLoadBalancersType {}
/**
 * @public
 *
 * The output of {@link AttachLoadBalancersCommand}.
 */
export interface AttachLoadBalancersCommandOutput extends AttachLoadBalancersResultType, __MetadataBearer {}

/**
 * > **Note:** This API operation is superseded by [AttachTrafficSources](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachTrafficSources.html), which can attach multiple traffic sources types. We recommend using `AttachTrafficSources` to simplify how you manage traffic sources. However, we continue to support `AttachLoadBalancers`. You can use both the original `AttachLoadBalancers` API operation and `AttachTrafficSources` on the same Auto Scaling group.
 *
 * Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.
 *
 * To describe the load balancers for an Auto Scaling group, call the [DescribeLoadBalancers](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeLoadBalancers.html) API. To detach a load balancer from the Auto Scaling group, call the [DetachLoadBalancers](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DetachLoadBalancers.html) API.
 *
 * This operation is additive and does not detach existing Classic Load Balancers or target groups from the Auto Scaling group.
 *
 * For more information, see [Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // AttachLoadBalancersType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   LoadBalancerNames: [ // LoadBalancerNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AttachLoadBalancersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachLoadBalancersCommandInput - {@link AttachLoadBalancersCommandInput}
 * @returns {@link AttachLoadBalancersCommandOutput}
 * @see {@link AttachLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link AttachLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InstanceRefreshInProgressFault} (client fault)
 *
 * The request failed because an active instance refresh already exists for the specified Auto Scaling group.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *
 * The service-linked role is not yet ready for use.
 *
 * @throws {@link AutoScalingServiceException}
 *
 * Base exception class for all service exceptions from AutoScaling service.
 *
 * @example To attach a load balancer to an Auto Scaling group
 * ```javascript
 * // This example attaches the specified load balancer to the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   LoadBalancerNames: [
 *     "my-load-balancer"
 *   ]
 * };
 * const command = new AttachLoadBalancersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AttachLoadBalancersCommand extends command<AttachLoadBalancersCommandInput, AttachLoadBalancersCommandOutput>(
  _ep0,
  _mw0,
  "AttachLoadBalancers",
  AttachLoadBalancers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachLoadBalancersType;
      output: {};
    };
    sdk: {
      input: AttachLoadBalancersCommandInput;
      output: AttachLoadBalancersCommandOutput;
    };
  };
}

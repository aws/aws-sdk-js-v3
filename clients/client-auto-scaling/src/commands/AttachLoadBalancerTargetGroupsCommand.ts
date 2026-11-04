// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachLoadBalancerTargetGroupsResultType, AttachLoadBalancerTargetGroupsType } from "../models/models_0";
import { AttachLoadBalancerTargetGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachLoadBalancerTargetGroupsCommand}.
 */
export interface AttachLoadBalancerTargetGroupsCommandInput extends AttachLoadBalancerTargetGroupsType {}
/**
 * @public
 *
 * The output of {@link AttachLoadBalancerTargetGroupsCommand}.
 */
export interface AttachLoadBalancerTargetGroupsCommandOutput extends AttachLoadBalancerTargetGroupsResultType, __MetadataBearer {}

/**
 * > **Note:** This API operation is superseded by [AttachTrafficSources](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachTrafficSources.html), which can attach multiple traffic sources types. We recommend using `AttachTrafficSources` to simplify how you manage traffic sources. However, we continue to support `AttachLoadBalancerTargetGroups`. You can use both the original `AttachLoadBalancerTargetGroups` API operation and `AttachTrafficSources` on the same Auto Scaling group.
 *
 * Attaches one or more target groups to the specified Auto Scaling group.
 *
 * This operation is used with the following load balancer types:
 *
 * - Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.
 * - Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.
 * - Gateway Load Balancer - Operates at the network layer (layer 3).
 *
 * To describe the target groups for an Auto Scaling group, call the [DescribeLoadBalancerTargetGroups](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeLoadBalancerTargetGroups.html) API. To detach the target group from the Auto Scaling group, call the [DetachLoadBalancerTargetGroups](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DetachLoadBalancerTargetGroups.html) API.
 *
 * This operation is additive and does not detach existing target groups or Classic Load Balancers from the Auto Scaling group.
 *
 * For more information, see [Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachLoadBalancerTargetGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachLoadBalancerTargetGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = { // AttachLoadBalancerTargetGroupsType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TargetGroupARNs: [ // TargetGroupARNs // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AttachLoadBalancerTargetGroupsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachLoadBalancerTargetGroupsCommandInput - {@link AttachLoadBalancerTargetGroupsCommandInput}
 * @returns {@link AttachLoadBalancerTargetGroupsCommandOutput}
 * @see {@link AttachLoadBalancerTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link AttachLoadBalancerTargetGroupsCommandOutput} for command's `response` shape.
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
 * @example To attach a target group to an Auto Scaling group
 * ```javascript
 * // This example attaches the specified target group to the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   TargetGroupARNs: [
 *     "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *   ]
 * };
 * const command = new AttachLoadBalancerTargetGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AttachLoadBalancerTargetGroupsCommand extends command<AttachLoadBalancerTargetGroupsCommandInput, AttachLoadBalancerTargetGroupsCommandOutput>(
  _ep0,
  _mw0,
  "AttachLoadBalancerTargetGroups",
  AttachLoadBalancerTargetGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachLoadBalancerTargetGroupsType;
      output: {};
    };
    sdk: {
      input: AttachLoadBalancerTargetGroupsCommandInput;
      output: AttachLoadBalancerTargetGroupsCommandOutput;
    };
  };
}

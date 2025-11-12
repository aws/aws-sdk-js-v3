// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachLoadBalancerTargetGroupsResultType, AttachLoadBalancerTargetGroupsType } from "../models/models_0";
import { AttachLoadBalancerTargetGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface AttachLoadBalancerTargetGroupsCommandOutput
  extends AttachLoadBalancerTargetGroupsResultType,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This API operation is superseded by <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachTrafficSources.html">AttachTrafficSources</a>, which
 *                 can attach multiple traffic sources types. We recommend using
 *                     <code>AttachTrafficSources</code> to simplify how you manage traffic sources.
 *                 However, we continue to support <code>AttachLoadBalancerTargetGroups</code>. You can
 *                 use both the original <code>AttachLoadBalancerTargetGroups</code> API operation and
 *                     <code>AttachTrafficSources</code> on the same Auto Scaling group.</p>
 *          </note>
 *          <p>Attaches one or more target groups to the specified Auto Scaling group.</p>
 *          <p>This operation is used with the following load balancer types: </p>
 *          <ul>
 *             <li>
 *                <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and
 *                     HTTPS. </p>
 *             </li>
 *             <li>
 *                <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and
 *                     UDP. </p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p>
 *             </li>
 *          </ul>
 *          <p>To describe the target groups for an Auto Scaling group, call the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeLoadBalancerTargetGroups.html">DescribeLoadBalancerTargetGroups</a>
 *             API. To detach the target group from
 *             the Auto Scaling group, call the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DetachLoadBalancerTargetGroups.html">DetachLoadBalancerTargetGroups</a> API.</p>
 *          <p>This operation is additive and does not detach existing target groups or Classic Load
 *             Balancers from the Auto Scaling group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to
 *                 distribute traffic across the instances in your Auto Scaling group</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
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
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *  <p>The service-linked role is not yet ready for use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
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
export class AttachLoadBalancerTargetGroupsCommand extends $Command
  .classBuilder<
    AttachLoadBalancerTargetGroupsCommandInput,
    AttachLoadBalancerTargetGroupsCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "AttachLoadBalancerTargetGroups", {})
  .n("AutoScalingClient", "AttachLoadBalancerTargetGroupsCommand")
  .sc(AttachLoadBalancerTargetGroups)
  .build() {
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

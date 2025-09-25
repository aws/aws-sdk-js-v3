// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachLoadBalancerTargetGroupsResultType, DetachLoadBalancerTargetGroupsType } from "../models/models_0";
import { DetachLoadBalancerTargetGroups } from "../schemas/schemas_9_Groups";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DetachLoadBalancerTargetGroupsCommandOutput
  extends DetachLoadBalancerTargetGroupsResultType,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This API operation is superseded by <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeTrafficSources.html">DetachTrafficSources</a>, which
 *                 can detach multiple traffic sources types. We recommend using
 *                     <code>DetachTrafficSources</code> to simplify how you manage traffic sources.
 *                 However, we continue to support <code>DetachLoadBalancerTargetGroups</code>. You can
 *                 use both the original <code>DetachLoadBalancerTargetGroups</code> API operation and
 *                     <code>DetachTrafficSources</code> on the same Auto Scaling group.</p>
 *          </note>
 *          <p>Detaches one or more target groups from the specified Auto Scaling group.</p>
 *          <p>When you detach a target group, it enters the <code>Removing</code> state while
 *             deregistering the instances in the group. When all instances are deregistered, then you
 *             can no longer describe the target group using the
 *             <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeLoadBalancerTargetGroups.html">DescribeLoadBalancerTargetGroups</a>
 *             API call. The instances remain running.</p>
 *          <note>
 *             <p>You can use this operation to detach target groups that were attached by using
 *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachLoadBalancerTargetGroups.html">AttachLoadBalancerTargetGroups</a>, but not for target groups that
 *                 were attached by using <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachTrafficSources.html">AttachTrafficSources</a>.</p>
 *          </note>
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
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
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
export class DetachLoadBalancerTargetGroupsCommand extends $Command
  .classBuilder<
    DetachLoadBalancerTargetGroupsCommandInput,
    DetachLoadBalancerTargetGroupsCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "DetachLoadBalancerTargetGroups", {})
  .n("AutoScalingClient", "DetachLoadBalancerTargetGroupsCommand")
  .sc(DetachLoadBalancerTargetGroups)
  .build() {
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

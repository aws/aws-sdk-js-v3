// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachLoadBalancersResultType, AttachLoadBalancersType } from "../models/models_0";
import { de_AttachLoadBalancersCommand, se_AttachLoadBalancersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>This API operation is superseded by <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachTrafficSources.html">https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_AttachTrafficSources.html</a>, which
 *                 can attach multiple traffic sources types. We recommend using
 *                 <code>AttachTrafficSources</code> to simplify how you manage traffic sources.
 *                 However, we continue to support <code>AttachLoadBalancers</code>. You can use both
 *                 the original <code>AttachLoadBalancers</code> API operation and
 *                     <code>AttachTrafficSources</code> on the same Auto Scaling group.</p>
 *          </note>
 *          <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the
 *             running instances with these Classic Load Balancers.</p>
 *          <p>To describe the load balancers for an Auto Scaling group, call the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> API.
 *             To detach a load balancer from the Auto Scaling group, call the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DetachLoadBalancers.html">DetachLoadBalancers</a>
 *             API.</p>
 *          <p>This operation is additive and does not detach existing Classic Load Balancers or
 *             target groups from the Auto Scaling group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to
 *                 distribute traffic across the instances in your Auto Scaling group</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
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
export class AttachLoadBalancersCommand extends $Command
  .classBuilder<
    AttachLoadBalancersCommandInput,
    AttachLoadBalancersCommandOutput,
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
  .s("AutoScaling_2011_01_01", "AttachLoadBalancers", {})
  .n("AutoScalingClient", "AttachLoadBalancersCommand")
  .f(void 0, void 0)
  .ser(se_AttachLoadBalancersCommand)
  .de(de_AttachLoadBalancersCommand)
  .build() {
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

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachLoadBalancersResultType, DetachLoadBalancersType } from "../models/models_0";
import { de_DetachLoadBalancersCommand, se_DetachLoadBalancersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>This API operation is superseded by <a>DetachTrafficSources</a>, which
 *                 can detach multiple traffic sources types. We recommend using
 *                     <code>DetachTrafficSources</code> to simplify how you manage traffic sources.
 *                 However, we continue to support <code>DetachLoadBalancers</code>. You can use both
 *                 the original <code>DetachLoadBalancers</code> API operation and
 *                     <code>DetachTrafficSources</code> on the same Auto Scaling group.</p>
 *          </note>
 *          <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p>
 *          <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or
 *             Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p>
 *          <p>When you detach a load balancer, it enters the <code>Removing</code> state while
 *             deregistering the instances in the group. When all instances are deregistered, then you
 *             can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
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
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @public
 * @example To detach a load balancer from an Auto Scaling group
 * ```javascript
 * // This example detaches the specified load balancer from the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "LoadBalancerNames": [
 *     "my-load-balancer"
 *   ]
 * };
 * const command = new DetachLoadBalancersCommand(input);
 * await client.send(command);
 * // example id: autoscaling-detach-load-balancers-1
 * ```
 *
 */
export class DetachLoadBalancersCommand extends $Command
  .classBuilder<
    DetachLoadBalancersCommandInput,
    DetachLoadBalancersCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "DetachLoadBalancers", {})
  .n("AutoScalingClient", "DetachLoadBalancersCommand")
  .f(void 0, void 0)
  .ser(se_DetachLoadBalancersCommand)
  .de(de_DetachLoadBalancersCommand)
  .build() {}

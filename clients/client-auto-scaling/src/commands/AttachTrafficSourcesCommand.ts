// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachTrafficSourcesResultType, AttachTrafficSourcesType } from "../models/models_0";
import { de_AttachTrafficSourcesCommand, se_AttachTrafficSourcesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachTrafficSourcesCommand}.
 */
export interface AttachTrafficSourcesCommandInput extends AttachTrafficSourcesType {}
/**
 * @public
 *
 * The output of {@link AttachTrafficSourcesCommand}.
 */
export interface AttachTrafficSourcesCommandOutput extends AttachTrafficSourcesResultType, __MetadataBearer {}

/**
 * <p>Attaches one or more traffic sources to the specified Auto Scaling group.</p>
 *          <p>You can use any of the following as traffic sources for an Auto Scaling group:</p>
 *          <ul>
 *             <li>
 *                <p>Application Load Balancer</p>
 *             </li>
 *             <li>
 *                <p>Classic Load Balancer</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer</p>
 *             </li>
 *             <li>
 *                <p>Network Load Balancer</p>
 *             </li>
 *             <li>
 *                <p>VPC Lattice</p>
 *             </li>
 *          </ul>
 *          <p>This operation is additive and does not detach existing traffic sources from the Auto Scaling
 *             group. </p>
 *          <p>After the operation completes, use the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeTrafficSources.html">DescribeTrafficSources</a> API to
 *             return details about the state of the attachments between traffic sources and your Auto Scaling
 *             group. To detach a traffic source from the Auto Scaling group, call the
 *             <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DetachTrafficSources.html">DetachTrafficSources</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachTrafficSourcesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachTrafficSourcesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // AttachTrafficSourcesType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TrafficSources: [ // TrafficSources // required
 *     { // TrafficSourceIdentifier
 *       Identifier: "STRING_VALUE", // required
 *       Type: "STRING_VALUE",
 *     },
 *   ],
 *   SkipZonalShiftValidation: true || false,
 * };
 * const command = new AttachTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachTrafficSourcesCommandInput - {@link AttachTrafficSourcesCommandInput}
 * @returns {@link AttachTrafficSourcesCommandOutput}
 * @see {@link AttachTrafficSourcesCommandInput} for command's `input` shape.
 * @see {@link AttachTrafficSourcesCommandOutput} for command's `response` shape.
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
 * @public
 * @example To attach a target group to an Auto Scaling group
 * ```javascript
 * // This example attaches the specified target group to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "TrafficSources": [
 *     {
 *       "Identifier": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *     }
 *   ]
 * };
 * const command = new AttachTrafficSourcesCommand(input);
 * await client.send(command);
 * // example id: to-attach-a-target-group-to-an-auto-scaling-group-1680036570089
 * ```
 *
 */
export class AttachTrafficSourcesCommand extends $Command
  .classBuilder<
    AttachTrafficSourcesCommandInput,
    AttachTrafficSourcesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "AttachTrafficSources", {})
  .n("AutoScalingClient", "AttachTrafficSourcesCommand")
  .f(void 0, void 0)
  .ser(se_AttachTrafficSourcesCommand)
  .de(de_AttachTrafficSourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachTrafficSourcesType;
      output: {};
    };
    sdk: {
      input: AttachTrafficSourcesCommandInput;
      output: AttachTrafficSourcesCommandOutput;
    };
  };
}

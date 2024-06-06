// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachTrafficSourcesResultType, DetachTrafficSourcesType } from "../models/models_0";
import { de_DetachTrafficSourcesCommand, se_DetachTrafficSourcesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachTrafficSourcesCommand}.
 */
export interface DetachTrafficSourcesCommandInput extends DetachTrafficSourcesType {}
/**
 * @public
 *
 * The output of {@link DetachTrafficSourcesCommand}.
 */
export interface DetachTrafficSourcesCommandOutput extends DetachTrafficSourcesResultType, __MetadataBearer {}

/**
 * <p>Detaches one or more traffic sources from the specified Auto Scaling group.</p>
 *          <p>When you detach a traffic source, it enters the <code>Removing</code> state while
 *             deregistering the instances in the group. When all instances are deregistered, then you
 *             can no longer describe the traffic source using the <a>DescribeTrafficSources</a> API call. The instances continue to run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachTrafficSourcesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachTrafficSourcesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DetachTrafficSourcesType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TrafficSources: [ // TrafficSources // required
 *     { // TrafficSourceIdentifier
 *       Identifier: "STRING_VALUE", // required
 *       Type: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DetachTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachTrafficSourcesCommandInput - {@link DetachTrafficSourcesCommandInput}
 * @returns {@link DetachTrafficSourcesCommandOutput}
 * @see {@link DetachTrafficSourcesCommandInput} for command's `input` shape.
 * @see {@link DetachTrafficSourcesCommandOutput} for command's `response` shape.
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
 * @example To detach a target group from an Auto Scaling group
 * ```javascript
 * // This example detaches the specified target group from the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "TrafficSources": [
 *     {
 *       "Identifier": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 *     }
 *   ]
 * };
 * const command = new DetachTrafficSourcesCommand(input);
 * await client.send(command);
 * // example id: to-detach-a-target-group-from-an-auto-scaling-group-1680040404169
 * ```
 *
 */
export class DetachTrafficSourcesCommand extends $Command
  .classBuilder<
    DetachTrafficSourcesCommandInput,
    DetachTrafficSourcesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DetachTrafficSources", {})
  .n("AutoScalingClient", "DetachTrafficSourcesCommand")
  .f(void 0, void 0)
  .ser(se_DetachTrafficSourcesCommand)
  .de(de_DetachTrafficSourcesCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterTargetsInput, DeregisterTargetsOutput } from "../models/models_0";
import { de_DeregisterTargetsCommand, se_DeregisterTargetsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterTargetsCommand}.
 */
export interface DeregisterTargetsCommandInput extends DeregisterTargetsInput {}
/**
 * @public
 *
 * The output of {@link DeregisterTargetsCommand}.
 */
export interface DeregisterTargetsCommandOutput extends DeregisterTargetsOutput, __MetadataBearer {}

/**
 * <p>Deregisters the specified targets from the specified target group. After the targets are
 *       deregistered, they no longer receive traffic from the load balancer.</p>
 *          <p>The load balancer stops sending requests to targets that are deregistering, but uses
 *       connection draining to ensure that in-flight traffic completes on the existing connections.
 *       This deregistration delay is configured by default but can be updated for each target group.</p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#deregistration-delay">
 *           Deregistration delay</a> in the <i>Application Load Balancers User Guide</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#deregistration-delay">
 *           Deregistration delay</a> in the <i>Network Load Balancers User Guide</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#deregistration-delay">
 *           Deregistration delay</a> in the <i>Gateway Load Balancers User Guide</i>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Note: If the specified target does not exist, the action returns successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeregisterTargetsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeregisterTargetsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DeregisterTargetsInput
 *   TargetGroupArn: "STRING_VALUE", // required
 *   Targets: [ // TargetDescriptions // required
 *     { // TargetDescription
 *       Id: "STRING_VALUE", // required
 *       Port: Number("int"),
 *       AvailabilityZone: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DeregisterTargetsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterTargetsCommandInput - {@link DeregisterTargetsCommandInput}
 * @returns {@link DeregisterTargetsCommandOutput}
 * @see {@link DeregisterTargetsCommandInput} for command's `input` shape.
 * @see {@link DeregisterTargetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidTargetException} (client fault)
 *  <p>The specified target does not exist, is not in the same VPC as the target group, or has an
 *       unsupported instance type.</p>
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *  <p>The specified target group does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @public
 * @example To deregister a target from a target group
 * ```javascript
 * // This example deregisters the specified instance from the specified target group.
 * const input = {
 *   "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *   "Targets": [
 *     {
 *       "Id": "i-0f76fade"
 *     }
 *   ]
 * };
 * const command = new DeregisterTargetsCommand(input);
 * await client.send(command);
 * // example id: elbv2-deregister-targets-1
 * ```
 *
 */
export class DeregisterTargetsCommand extends $Command
  .classBuilder<
    DeregisterTargetsCommandInput,
    DeregisterTargetsCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "DeregisterTargets", {})
  .n("ElasticLoadBalancingV2Client", "DeregisterTargetsCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterTargetsCommand)
  .de(de_DeregisterTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterTargetsInput;
      output: {};
    };
    sdk: {
      input: DeregisterTargetsCommandInput;
      output: DeregisterTargetsCommandOutput;
    };
  };
}

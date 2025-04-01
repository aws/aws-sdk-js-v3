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
import { DescribeTargetGroupAttributesInput, DescribeTargetGroupAttributesOutput } from "../models/models_0";
import {
  de_DescribeTargetGroupAttributesCommand,
  se_DescribeTargetGroupAttributesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTargetGroupAttributesCommand}.
 */
export interface DescribeTargetGroupAttributesCommandInput extends DescribeTargetGroupAttributesInput {}
/**
 * @public
 *
 * The output of {@link DescribeTargetGroupAttributesCommand}.
 */
export interface DescribeTargetGroupAttributesCommandOutput
  extends DescribeTargetGroupAttributesOutput,
    __MetadataBearer {}

/**
 * <p>Describes the attributes for the specified target group.</p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers
 *             Guide</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers
 *             Guide</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers
 *             Guide</i>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeTargetGroupAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeTargetGroupAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeTargetGroupAttributesInput
 *   TargetGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeTargetGroupAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTargetGroupAttributesOutput
 * //   Attributes: [ // TargetGroupAttributes
 * //     { // TargetGroupAttribute
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTargetGroupAttributesCommandInput - {@link DescribeTargetGroupAttributesCommandInput}
 * @returns {@link DescribeTargetGroupAttributesCommandOutput}
 * @see {@link DescribeTargetGroupAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeTargetGroupAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *  <p>The specified target group does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To describe target group attributes
 * ```javascript
 * // This example describes the attributes of the specified target group.
 * const input = {
 *   TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 * };
 * const command = new DescribeTargetGroupAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Attributes: [
 *     {
 *       Key: "stickiness.enabled",
 *       Value: "false"
 *     },
 *     {
 *       Key: "deregistration_delay.timeout_seconds",
 *       Value: "300"
 *     },
 *     {
 *       Key: "stickiness.type",
 *       Value: "lb_cookie"
 *     },
 *     {
 *       Key: "stickiness.lb_cookie.duration_seconds",
 *       Value: "86400"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeTargetGroupAttributesCommand extends $Command
  .classBuilder<
    DescribeTargetGroupAttributesCommandInput,
    DescribeTargetGroupAttributesCommandOutput,
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
  .s("ElasticLoadBalancing_v10", "DescribeTargetGroupAttributes", {})
  .n("ElasticLoadBalancingV2Client", "DescribeTargetGroupAttributesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTargetGroupAttributesCommand)
  .de(de_DescribeTargetGroupAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTargetGroupAttributesInput;
      output: DescribeTargetGroupAttributesOutput;
    };
    sdk: {
      input: DescribeTargetGroupAttributesCommandInput;
      output: DescribeTargetGroupAttributesCommandOutput;
    };
  };
}

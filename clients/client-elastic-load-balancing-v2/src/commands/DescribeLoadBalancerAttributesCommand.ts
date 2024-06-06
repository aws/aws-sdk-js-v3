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
import { DescribeLoadBalancerAttributesInput, DescribeLoadBalancerAttributesOutput } from "../models/models_0";
import {
  de_DescribeLoadBalancerAttributesCommand,
  se_DescribeLoadBalancerAttributesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoadBalancerAttributesCommand}.
 */
export interface DescribeLoadBalancerAttributesCommandInput extends DescribeLoadBalancerAttributesInput {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancerAttributesCommand}.
 */
export interface DescribeLoadBalancerAttributesCommandOutput
  extends DescribeLoadBalancerAttributesOutput,
    __MetadataBearer {}

/**
 * <p>Describes the attributes for the specified Application Load Balancer, Network Load
 *       Balancer, or Gateway Load Balancer.</p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers
 *             Guide</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers
 *             Guide</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers
 *             Guide</i>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeLoadBalancerAttributesInput
 *   LoadBalancerArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBalancerAttributesOutput
 * //   Attributes: [ // LoadBalancerAttributes
 * //     { // LoadBalancerAttribute
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLoadBalancerAttributesCommandInput - {@link DescribeLoadBalancerAttributesCommandInput}
 * @returns {@link DescribeLoadBalancerAttributesCommandOutput}
 * @see {@link DescribeLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @public
 * @example To describe load balancer attributes
 * ```javascript
 * // This example describes the attributes of the specified load balancer.
 * const input = {
 *   "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 * };
 * const command = new DescribeLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Attributes": [
 *     {
 *       "Key": "access_logs.s3.enabled",
 *       "Value": "false"
 *     },
 *     {
 *       "Key": "idle_timeout.timeout_seconds",
 *       "Value": "60"
 *     },
 *     {
 *       "Key": "access_logs.s3.prefix",
 *       "Value": ""
 *     },
 *     {
 *       "Key": "deletion_protection.enabled",
 *       "Value": "false"
 *     },
 *     {
 *       "Key": "access_logs.s3.bucket",
 *       "Value": ""
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-describe-load-balancer-attributes-1
 * ```
 *
 */
export class DescribeLoadBalancerAttributesCommand extends $Command
  .classBuilder<
    DescribeLoadBalancerAttributesCommandInput,
    DescribeLoadBalancerAttributesCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "DescribeLoadBalancerAttributes", {})
  .n("ElasticLoadBalancingV2Client", "DescribeLoadBalancerAttributesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLoadBalancerAttributesCommand)
  .de(de_DescribeLoadBalancerAttributesCommand)
  .build() {}

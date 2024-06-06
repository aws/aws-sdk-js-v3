// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLoadBalancerPoliciesInput, DescribeLoadBalancerPoliciesOutput } from "../models/models_0";
import { de_DescribeLoadBalancerPoliciesCommand, se_DescribeLoadBalancerPoliciesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoadBalancerPoliciesCommand}.
 */
export interface DescribeLoadBalancerPoliciesCommandInput extends DescribeLoadBalancerPoliciesInput {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancerPoliciesCommand}.
 */
export interface DescribeLoadBalancerPoliciesCommandOutput
  extends DescribeLoadBalancerPoliciesOutput,
    __MetadataBearer {}

/**
 * <p>Describes the specified policies.</p>
 *          <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer.
 *     If you specify a policy name associated with your load balancer, the action returns the description of that policy.
 *     If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies.
 *     The names of the sample policies have the <code>ELBSample-</code> prefix.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancerPoliciesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancerPoliciesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DescribeLoadBalancerPoliciesInput
 *   LoadBalancerName: "STRING_VALUE",
 *   PolicyNames: [ // PolicyNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeLoadBalancerPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBalancerPoliciesOutput
 * //   PolicyDescriptions: [ // PolicyDescriptions
 * //     { // PolicyDescription
 * //       PolicyName: "STRING_VALUE",
 * //       PolicyTypeName: "STRING_VALUE",
 * //       PolicyAttributeDescriptions: [ // PolicyAttributeDescriptions
 * //         { // PolicyAttributeDescription
 * //           AttributeName: "STRING_VALUE",
 * //           AttributeValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLoadBalancerPoliciesCommandInput - {@link DescribeLoadBalancerPoliciesCommandInput}
 * @returns {@link DescribeLoadBalancerPoliciesCommandOutput}
 * @see {@link DescribeLoadBalancerPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerPoliciesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *  <p>One or more of the specified policies do not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @public
 * @example To describe a policy associated with a load balancer
 * ```javascript
 * // This example describes the specified policy associated with the specified load balancer.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer",
 *   "PolicyNames": [
 *     "my-authentication-policy"
 *   ]
 * };
 * const command = new DescribeLoadBalancerPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PolicyDescriptions": [
 *     {
 *       "PolicyAttributeDescriptions": [
 *         {
 *           "AttributeName": "PublicKeyPolicyName",
 *           "AttributeValue": "my-PublicKey-policy"
 *         }
 *       ],
 *       "PolicyName": "my-authentication-policy",
 *       "PolicyTypeName": "BackendServerAuthenticationPolicyType"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elb-describe-load-balancer-policies-1
 * ```
 *
 */
export class DescribeLoadBalancerPoliciesCommand extends $Command
  .classBuilder<
    DescribeLoadBalancerPoliciesCommandInput,
    DescribeLoadBalancerPoliciesCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v7", "DescribeLoadBalancerPolicies", {})
  .n("ElasticLoadBalancingClient", "DescribeLoadBalancerPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLoadBalancerPoliciesCommand)
  .de(de_DescribeLoadBalancerPoliciesCommand)
  .build() {}

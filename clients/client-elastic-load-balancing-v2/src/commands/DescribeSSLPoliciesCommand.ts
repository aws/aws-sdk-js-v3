// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSSLPoliciesInput, DescribeSSLPoliciesOutput } from "../models/models_0";
import { DescribeSSLPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSSLPoliciesCommand}.
 */
export interface DescribeSSLPoliciesCommandInput extends DescribeSSLPoliciesInput {}
/**
 * @public
 *
 * The output of {@link DescribeSSLPoliciesCommand}.
 */
export interface DescribeSSLPoliciesCommandOutput extends DescribeSSLPoliciesOutput, __MetadataBearer {}

/**
 * <p>Describes the specified policies or all policies used for SSL negotiation.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html">Security policies</a> in the <i>Application Load Balancers Guide</i> and
 *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeSSLPoliciesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeSSLPoliciesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeSSLPoliciesInput
 *   Names: [ // SslPolicyNames
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   LoadBalancerType: "application" || "network" || "gateway",
 * };
 * const command = new DescribeSSLPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSSLPoliciesOutput
 * //   SslPolicies: [ // SslPolicies
 * //     { // SslPolicy
 * //       SslProtocols: [ // SslProtocols
 * //         "STRING_VALUE",
 * //       ],
 * //       Ciphers: [ // Ciphers
 * //         { // Cipher
 * //           Name: "STRING_VALUE",
 * //           Priority: Number("int"),
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE",
 * //       SupportedLoadBalancerTypes: [ // ListOfString
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSSLPoliciesCommandInput - {@link DescribeSSLPoliciesCommandInput}
 * @returns {@link DescribeSSLPoliciesCommandOutput}
 * @see {@link DescribeSSLPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeSSLPoliciesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link SSLPolicyNotFoundException} (client fault)
 *  <p>The specified SSL policy does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To describe a policy used for SSL negotiation
 * ```javascript
 * // This example describes the specified policy used for SSL negotiation.
 * const input = {
 *   Names: [
 *     "ELBSecurityPolicy-2015-05"
 *   ]
 * };
 * const command = new DescribeSSLPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SslPolicies: [
 *     {
 *       Ciphers: [
 *         {
 *           Name: "ECDHE-ECDSA-AES128-GCM-SHA256",
 *           Priority: 1
 *         },
 *         {
 *           Name: "ECDHE-RSA-AES128-GCM-SHA256",
 *           Priority: 2
 *         },
 *         {
 *           Name: "ECDHE-ECDSA-AES128-SHA256",
 *           Priority: 3
 *         },
 *         {
 *           Name: "ECDHE-RSA-AES128-SHA256",
 *           Priority: 4
 *         },
 *         {
 *           Name: "ECDHE-ECDSA-AES128-SHA",
 *           Priority: 5
 *         },
 *         {
 *           Name: "ECDHE-RSA-AES128-SHA",
 *           Priority: 6
 *         },
 *         {
 *           Name: "DHE-RSA-AES128-SHA",
 *           Priority: 7
 *         },
 *         {
 *           Name: "ECDHE-ECDSA-AES256-GCM-SHA384",
 *           Priority: 8
 *         },
 *         {
 *           Name: "ECDHE-RSA-AES256-GCM-SHA384",
 *           Priority: 9
 *         },
 *         {
 *           Name: "ECDHE-ECDSA-AES256-SHA384",
 *           Priority: 10
 *         },
 *         {
 *           Name: "ECDHE-RSA-AES256-SHA384",
 *           Priority: 11
 *         },
 *         {
 *           Name: "ECDHE-RSA-AES256-SHA",
 *           Priority: 12
 *         },
 *         {
 *           Name: "ECDHE-ECDSA-AES256-SHA",
 *           Priority: 13
 *         },
 *         {
 *           Name: "AES128-GCM-SHA256",
 *           Priority: 14
 *         },
 *         {
 *           Name: "AES128-SHA256",
 *           Priority: 15
 *         },
 *         {
 *           Name: "AES128-SHA",
 *           Priority: 16
 *         },
 *         {
 *           Name: "AES256-GCM-SHA384",
 *           Priority: 17
 *         },
 *         {
 *           Name: "AES256-SHA256",
 *           Priority: 18
 *         },
 *         {
 *           Name: "AES256-SHA",
 *           Priority: 19
 *         }
 *       ],
 *       Name: "ELBSecurityPolicy-2015-05",
 *       SslProtocols: [
 *         "TLSv1",
 *         "TLSv1.1",
 *         "TLSv1.2"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeSSLPoliciesCommand extends $Command
  .classBuilder<
    DescribeSSLPoliciesCommandInput,
    DescribeSSLPoliciesCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "DescribeSSLPolicies", {})
  .n("ElasticLoadBalancingV2Client", "DescribeSSLPoliciesCommand")
  .sc(DescribeSSLPolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSSLPoliciesInput;
      output: DescribeSSLPoliciesOutput;
    };
    sdk: {
      input: DescribeSSLPoliciesCommandInput;
      output: DescribeSSLPoliciesCommandOutput;
    };
  };
}

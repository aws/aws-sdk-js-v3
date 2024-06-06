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
import { DescribeSSLPoliciesInput, DescribeSSLPoliciesOutput } from "../models/models_0";
import { de_DescribeSSLPoliciesCommand, se_DescribeSSLPoliciesCommand } from "../protocols/Aws_query";

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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or
 *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeSSLPoliciesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeSSLPoliciesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
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
 * @public
 * @example To describe a policy used for SSL negotiation
 * ```javascript
 * // This example describes the specified policy used for SSL negotiation.
 * const input = {
 *   "Names": [
 *     "ELBSecurityPolicy-2015-05"
 *   ]
 * };
 * const command = new DescribeSSLPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SslPolicies": [
 *     {
 *       "Ciphers": [
 *         {
 *           "Name": "ECDHE-ECDSA-AES128-GCM-SHA256",
 *           "Priority": 1
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES128-GCM-SHA256",
 *           "Priority": 2
 *         },
 *         {
 *           "Name": "ECDHE-ECDSA-AES128-SHA256",
 *           "Priority": 3
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES128-SHA256",
 *           "Priority": 4
 *         },
 *         {
 *           "Name": "ECDHE-ECDSA-AES128-SHA",
 *           "Priority": 5
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES128-SHA",
 *           "Priority": 6
 *         },
 *         {
 *           "Name": "DHE-RSA-AES128-SHA",
 *           "Priority": 7
 *         },
 *         {
 *           "Name": "ECDHE-ECDSA-AES256-GCM-SHA384",
 *           "Priority": 8
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES256-GCM-SHA384",
 *           "Priority": 9
 *         },
 *         {
 *           "Name": "ECDHE-ECDSA-AES256-SHA384",
 *           "Priority": 10
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES256-SHA384",
 *           "Priority": 11
 *         },
 *         {
 *           "Name": "ECDHE-RSA-AES256-SHA",
 *           "Priority": 12
 *         },
 *         {
 *           "Name": "ECDHE-ECDSA-AES256-SHA",
 *           "Priority": 13
 *         },
 *         {
 *           "Name": "AES128-GCM-SHA256",
 *           "Priority": 14
 *         },
 *         {
 *           "Name": "AES128-SHA256",
 *           "Priority": 15
 *         },
 *         {
 *           "Name": "AES128-SHA",
 *           "Priority": 16
 *         },
 *         {
 *           "Name": "AES256-GCM-SHA384",
 *           "Priority": 17
 *         },
 *         {
 *           "Name": "AES256-SHA256",
 *           "Priority": 18
 *         },
 *         {
 *           "Name": "AES256-SHA",
 *           "Priority": 19
 *         }
 *       ],
 *       "Name": "ELBSecurityPolicy-2015-05",
 *       "SslProtocols": [
 *         "TLSv1",
 *         "TLSv1.1",
 *         "TLSv1.2"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-describe-ssl-policies-1
 * ```
 *
 */
export class DescribeSSLPoliciesCommand extends $Command
  .classBuilder<
    DescribeSSLPoliciesCommandInput,
    DescribeSSLPoliciesCommandOutput,
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
  .s("ElasticLoadBalancing_v10", "DescribeSSLPolicies", {})
  .n("ElasticLoadBalancingV2Client", "DescribeSSLPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSSLPoliciesCommand)
  .de(de_DescribeSSLPoliciesCommand)
  .build() {}

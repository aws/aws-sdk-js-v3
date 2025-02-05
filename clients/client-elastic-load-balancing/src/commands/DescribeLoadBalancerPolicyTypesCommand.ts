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
import { DescribeLoadBalancerPolicyTypesInput, DescribeLoadBalancerPolicyTypesOutput } from "../models/models_0";
import {
  de_DescribeLoadBalancerPolicyTypesCommand,
  se_DescribeLoadBalancerPolicyTypesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoadBalancerPolicyTypesCommand}.
 */
export interface DescribeLoadBalancerPolicyTypesCommandInput extends DescribeLoadBalancerPolicyTypesInput {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancerPolicyTypesCommand}.
 */
export interface DescribeLoadBalancerPolicyTypesCommandOutput
  extends DescribeLoadBalancerPolicyTypesOutput,
    __MetadataBearer {}

/**
 * <p>Describes the specified load balancer policy types or all load balancer policy types.</p>
 *          <p>The description of each type indicates how it can be used. For example,
 *            some policies can be used only with layer 7 listeners,
 *            some policies can be used only with layer 4 listeners,
 *            and some policies can be used only with your EC2 instances.</p>
 *          <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types.
 *            Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or
 *            <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancerPolicyTypesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancerPolicyTypesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DescribeLoadBalancerPolicyTypesInput
 *   PolicyTypeNames: [ // PolicyTypeNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeLoadBalancerPolicyTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBalancerPolicyTypesOutput
 * //   PolicyTypeDescriptions: [ // PolicyTypeDescriptions
 * //     { // PolicyTypeDescription
 * //       PolicyTypeName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       PolicyAttributeTypeDescriptions: [ // PolicyAttributeTypeDescriptions
 * //         { // PolicyAttributeTypeDescription
 * //           AttributeName: "STRING_VALUE",
 * //           AttributeType: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           DefaultValue: "STRING_VALUE",
 * //           Cardinality: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLoadBalancerPolicyTypesCommandInput - {@link DescribeLoadBalancerPolicyTypesCommandInput}
 * @returns {@link DescribeLoadBalancerPolicyTypesCommandOutput}
 * @see {@link DescribeLoadBalancerPolicyTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerPolicyTypesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link PolicyTypeNotFoundException} (client fault)
 *  <p>One or more of the specified policy types do not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @public
 * @example To describe a load balancer policy type defined by Elastic Load Balancing
 * ```javascript
 * // This example describes the specified load balancer policy type.
 * const input = {
 *   "PolicyTypeNames": [
 *     "ProxyProtocolPolicyType"
 *   ]
 * };
 * const command = new DescribeLoadBalancerPolicyTypesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PolicyTypeDescriptions": [
 *     {
 *       "Description": "Policy that controls whether to include the IP address and port of the originating request for TCP messages. This policy operates on TCP listeners only.",
 *       "PolicyAttributeTypeDescriptions": [
 *         {
 *           "AttributeName": "ProxyProtocol",
 *           "AttributeType": "Boolean",
 *           "Cardinality": "ONE"
 *         }
 *       ],
 *       "PolicyTypeName": "ProxyProtocolPolicyType"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elb-describe-load-balancer-policy-types-1
 * ```
 *
 */
export class DescribeLoadBalancerPolicyTypesCommand extends $Command
  .classBuilder<
    DescribeLoadBalancerPolicyTypesCommandInput,
    DescribeLoadBalancerPolicyTypesCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v7", "DescribeLoadBalancerPolicyTypes", {})
  .n("ElasticLoadBalancingClient", "DescribeLoadBalancerPolicyTypesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLoadBalancerPolicyTypesCommand)
  .de(de_DescribeLoadBalancerPolicyTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLoadBalancerPolicyTypesInput;
      output: DescribeLoadBalancerPolicyTypesOutput;
    };
    sdk: {
      input: DescribeLoadBalancerPolicyTypesCommandInput;
      output: DescribeLoadBalancerPolicyTypesCommandOutput;
    };
  };
}

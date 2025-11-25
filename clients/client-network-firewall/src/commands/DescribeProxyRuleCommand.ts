// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProxyRuleRequest, DescribeProxyRuleResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DescribeProxyRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProxyRuleCommand}.
 */
export interface DescribeProxyRuleCommandInput extends DescribeProxyRuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProxyRuleCommand}.
 */
export interface DescribeProxyRuleCommandOutput extends DescribeProxyRuleResponse, __MetadataBearer {}

/**
 * <p>Returns the data objects for the specified proxy configuration for the specified proxy rule group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeProxyRuleCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeProxyRuleCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeProxyRuleRequest
 *   ProxyRuleName: "STRING_VALUE", // required
 *   ProxyRuleGroupName: "STRING_VALUE",
 *   ProxyRuleGroupArn: "STRING_VALUE",
 * };
 * const command = new DescribeProxyRuleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProxyRuleResponse
 * //   ProxyRule: { // ProxyRule
 * //     ProxyRuleName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Action: "ALLOW" || "DENY" || "ALERT",
 * //     Conditions: [ // ProxyRuleConditionList
 * //       { // ProxyRuleCondition
 * //         ConditionOperator: "STRING_VALUE",
 * //         ConditionKey: "STRING_VALUE",
 * //         ConditionValues: [ // ProxyConditionValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProxyRuleCommandInput - {@link DescribeProxyRuleCommandInput}
 * @returns {@link DescribeProxyRuleCommandOutput}
 * @see {@link DescribeProxyRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeProxyRuleCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class DescribeProxyRuleCommand extends $Command
  .classBuilder<
    DescribeProxyRuleCommandInput,
    DescribeProxyRuleCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DescribeProxyRule", {})
  .n("NetworkFirewallClient", "DescribeProxyRuleCommand")
  .sc(DescribeProxyRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProxyRuleRequest;
      output: DescribeProxyRuleResponse;
    };
    sdk: {
      input: DescribeProxyRuleCommandInput;
      output: DescribeProxyRuleCommandOutput;
    };
  };
}

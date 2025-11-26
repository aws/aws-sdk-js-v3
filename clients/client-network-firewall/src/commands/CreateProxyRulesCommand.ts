// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateProxyRulesRequest, CreateProxyRulesResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { CreateProxyRules } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProxyRulesCommand}.
 */
export interface CreateProxyRulesCommandInput extends CreateProxyRulesRequest {}
/**
 * @public
 *
 * The output of {@link CreateProxyRulesCommand}.
 */
export interface CreateProxyRulesCommandOutput extends CreateProxyRulesResponse, __MetadataBearer {}

/**
 * <p>Creates Network Firewall <a>ProxyRule</a> resources. </p>
 *          <p>Attaches new proxy rule(s) to an existing proxy rule group. </p>
 *          <p>To retrieve information about individual proxy rules, use <a>DescribeProxyRuleGroup</a> and <a>DescribeProxyRule</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateProxyRulesCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateProxyRulesCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // CreateProxyRulesRequest
 *   ProxyRuleGroupArn: "STRING_VALUE",
 *   ProxyRuleGroupName: "STRING_VALUE",
 *   Rules: { // CreateProxyRulesByRequestPhase
 *     PreDNS: [ // CreateProxyRuleList
 *       { // CreateProxyRule
 *         ProxyRuleName: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *         Action: "ALLOW" || "DENY" || "ALERT",
 *         Conditions: [ // ProxyRuleConditionList
 *           { // ProxyRuleCondition
 *             ConditionOperator: "STRING_VALUE",
 *             ConditionKey: "STRING_VALUE",
 *             ConditionValues: [ // ProxyConditionValueList
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *         InsertPosition: Number("int"),
 *       },
 *     ],
 *     PreREQUEST: [
 *       {
 *         ProxyRuleName: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *         Action: "ALLOW" || "DENY" || "ALERT",
 *         Conditions: [
 *           {
 *             ConditionOperator: "STRING_VALUE",
 *             ConditionKey: "STRING_VALUE",
 *             ConditionValues: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *         InsertPosition: Number("int"),
 *       },
 *     ],
 *     PostRESPONSE: [
 *       {
 *         ProxyRuleName: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *         Action: "ALLOW" || "DENY" || "ALERT",
 *         Conditions: [
 *           {
 *             ConditionOperator: "STRING_VALUE",
 *             ConditionKey: "STRING_VALUE",
 *             ConditionValues: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *         InsertPosition: Number("int"),
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateProxyRulesCommand(input);
 * const response = await client.send(command);
 * // { // CreateProxyRulesResponse
 * //   ProxyRuleGroup: { // ProxyRuleGroup
 * //     ProxyRuleGroupName: "STRING_VALUE",
 * //     ProxyRuleGroupArn: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     DeleteTime: new Date("TIMESTAMP"),
 * //     Rules: { // ProxyRulesByRequestPhase
 * //       PreDNS: [ // ProxyRuleList
 * //         { // ProxyRule
 * //           ProxyRuleName: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           Action: "ALLOW" || "DENY" || "ALERT",
 * //           Conditions: [ // ProxyRuleConditionList
 * //             { // ProxyRuleCondition
 * //               ConditionOperator: "STRING_VALUE",
 * //               ConditionKey: "STRING_VALUE",
 * //               ConditionValues: [ // ProxyConditionValueList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       PreREQUEST: [
 * //         {
 * //           ProxyRuleName: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           Action: "ALLOW" || "DENY" || "ALERT",
 * //           Conditions: [
 * //             {
 * //               ConditionOperator: "STRING_VALUE",
 * //               ConditionKey: "STRING_VALUE",
 * //               ConditionValues: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       PostRESPONSE: [
 * //         {
 * //           ProxyRuleName: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           Action: "ALLOW" || "DENY" || "ALERT",
 * //           Conditions: [
 * //             {
 * //               ConditionOperator: "STRING_VALUE",
 * //               ConditionKey: "STRING_VALUE",
 * //               ConditionValues: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     Description: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProxyRulesCommandInput - {@link CreateProxyRulesCommandInput}
 * @returns {@link CreateProxyRulesCommandOutput}
 * @see {@link CreateProxyRulesCommandInput} for command's `input` shape.
 * @see {@link CreateProxyRulesCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class CreateProxyRulesCommand extends $Command
  .classBuilder<
    CreateProxyRulesCommandInput,
    CreateProxyRulesCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "CreateProxyRules", {})
  .n("NetworkFirewallClient", "CreateProxyRulesCommand")
  .sc(CreateProxyRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProxyRulesRequest;
      output: CreateProxyRulesResponse;
    };
    sdk: {
      input: CreateProxyRulesCommandInput;
      output: CreateProxyRulesCommandOutput;
    };
  };
}

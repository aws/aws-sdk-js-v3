// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateProxyRuleGroupRequest, CreateProxyRuleGroupResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { CreateProxyRuleGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProxyRuleGroupCommand}.
 */
export interface CreateProxyRuleGroupCommandInput extends CreateProxyRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateProxyRuleGroupCommand}.
 */
export interface CreateProxyRuleGroupCommandOutput extends CreateProxyRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Creates an Network Firewall <a>ProxyRuleGroup</a>
 *          </p>
 *          <p>Collections of related proxy filtering rules. Rule groups help you manage and reuse sets of rules across multiple proxy configurations. </p>
 *          <p>To manage a proxy rule group's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p>
 *          <p>To retrieve information about proxy rule groups, use <a>ListProxyRuleGroups</a> and <a>DescribeProxyRuleGroup</a>.</p>
 *          <p>To retrieve information about individual proxy rules, use <a>DescribeProxyRuleGroup</a> and <a>DescribeProxyRule</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateProxyRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateProxyRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // CreateProxyRuleGroupRequest
 *   ProxyRuleGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Rules: { // ProxyRulesByRequestPhase
 *     PreDNS: [ // ProxyRuleList
 *       { // ProxyRule
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
 *       },
 *     ],
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateProxyRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateProxyRuleGroupResponse
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
 * @param CreateProxyRuleGroupCommandInput - {@link CreateProxyRuleGroupCommandInput}
 * @returns {@link CreateProxyRuleGroupCommandOutput}
 * @see {@link CreateProxyRuleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateProxyRuleGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Unable to perform the operation because doing so would violate a limit setting. </p>
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
export class CreateProxyRuleGroupCommand extends $Command
  .classBuilder<
    CreateProxyRuleGroupCommandInput,
    CreateProxyRuleGroupCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "CreateProxyRuleGroup", {})
  .n("NetworkFirewallClient", "CreateProxyRuleGroupCommand")
  .sc(CreateProxyRuleGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProxyRuleGroupRequest;
      output: CreateProxyRuleGroupResponse;
    };
    sdk: {
      input: CreateProxyRuleGroupCommandInput;
      output: CreateProxyRuleGroupCommandOutput;
    };
  };
}

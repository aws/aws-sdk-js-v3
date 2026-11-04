// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProxyRulesRequest, CreateProxyRulesResponse } from "../models/models_0";
import { CreateProxyRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates Network Firewall ProxyRule resources.
 *
 * Attaches new proxy rule(s) to an existing proxy rule group.
 *
 * To retrieve information about individual proxy rules, use DescribeProxyRuleGroup and DescribeProxyRule.
 *
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
 *
 * Your request is valid, but Network Firewall couldn't perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The operation failed because of a problem with your request. Examples include:
 *
 * - You specified an unsupported parameter name or value.
 * - You tried to update a property with a value that isn't among the available types.
 * - Your request references an ARN that is malformed, or corresponds to a resource that isn't valid in the context of the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Unable to process the request due to throttling limitations.
 *
 * @throws {@link NetworkFirewallServiceException}
 *
 * Base exception class for all service exceptions from NetworkFirewall service.
 *
 * @public
 */
export class CreateProxyRulesCommand extends command<CreateProxyRulesCommandInput, CreateProxyRulesCommandOutput>(
  _ep0,
  _mw0,
  "CreateProxyRules",
  CreateProxyRules$
) {
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

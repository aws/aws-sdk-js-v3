// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProxyRuleGroupRequest, CreateProxyRuleGroupResponse } from "../models/models_0";
import { CreateProxyRuleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Network Firewall ProxyRuleGroup
 *
 * Collections of related proxy filtering rules. Rule groups help you manage and reuse sets of rules across multiple proxy configurations.
 *
 * To manage a proxy rule group's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource.
 *
 * To retrieve information about proxy rule groups, use ListProxyRuleGroups and DescribeProxyRuleGroup.
 *
 * To retrieve information about individual proxy rules, use DescribeProxyRuleGroup and DescribeProxyRule.
 *
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * Unable to perform the operation because doing so would violate a limit setting.
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
export class CreateProxyRuleGroupCommand extends command<CreateProxyRuleGroupCommandInput, CreateProxyRuleGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateProxyRuleGroup",
  CreateProxyRuleGroup$
) {
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

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeProxyRuleGroupRequest, DescribeProxyRuleGroupResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { DescribeProxyRuleGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProxyRuleGroupCommand}.
 */
export interface DescribeProxyRuleGroupCommandInput extends DescribeProxyRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProxyRuleGroupCommand}.
 */
export interface DescribeProxyRuleGroupCommandOutput extends DescribeProxyRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Returns the data objects for the specified proxy rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeProxyRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeProxyRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeProxyRuleGroupRequest
 *   ProxyRuleGroupName: "STRING_VALUE",
 *   ProxyRuleGroupArn: "STRING_VALUE",
 * };
 * const command = new DescribeProxyRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProxyRuleGroupResponse
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
 * @param DescribeProxyRuleGroupCommandInput - {@link DescribeProxyRuleGroupCommandInput}
 * @returns {@link DescribeProxyRuleGroupCommandOutput}
 * @see {@link DescribeProxyRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeProxyRuleGroupCommandOutput} for command's `response` shape.
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
export class DescribeProxyRuleGroupCommand extends $Command
  .classBuilder<
    DescribeProxyRuleGroupCommandInput,
    DescribeProxyRuleGroupCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DescribeProxyRuleGroup", {})
  .n("NetworkFirewallClient", "DescribeProxyRuleGroupCommand")
  .sc(DescribeProxyRuleGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProxyRuleGroupRequest;
      output: DescribeProxyRuleGroupResponse;
    };
    sdk: {
      input: DescribeProxyRuleGroupCommandInput;
      output: DescribeProxyRuleGroupCommandOutput;
    };
  };
}

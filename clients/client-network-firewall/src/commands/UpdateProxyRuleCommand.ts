// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProxyRuleRequest, UpdateProxyRuleResponse } from "../models/models_0";
import { UpdateProxyRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProxyRuleCommand}.
 */
export interface UpdateProxyRuleCommandInput extends UpdateProxyRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProxyRuleCommand}.
 */
export interface UpdateProxyRuleCommandOutput extends UpdateProxyRuleResponse, __MetadataBearer {}

/**
 * Updates the properties of the specified proxy rule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateProxyRuleCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateProxyRuleCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateProxyRuleRequest
 *   ProxyRuleGroupName: "STRING_VALUE",
 *   ProxyRuleGroupArn: "STRING_VALUE",
 *   ProxyRuleName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Action: "ALLOW" || "DENY" || "ALERT",
 *   AddConditions: [ // ProxyRuleConditionList
 *     { // ProxyRuleCondition
 *       ConditionOperator: "STRING_VALUE",
 *       ConditionKey: "STRING_VALUE",
 *       ConditionValues: [ // ProxyConditionValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   RemoveConditions: [
 *     {
 *       ConditionOperator: "STRING_VALUE",
 *       ConditionKey: "STRING_VALUE",
 *       ConditionValues: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   UpdateToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateProxyRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProxyRuleResponse
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
 * //   RemovedConditions: [
 * //     {
 * //       ConditionOperator: "STRING_VALUE",
 * //       ConditionKey: "STRING_VALUE",
 * //       ConditionValues: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   UpdateToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateProxyRuleCommandInput - {@link UpdateProxyRuleCommandInput}
 * @returns {@link UpdateProxyRuleCommandOutput}
 * @see {@link UpdateProxyRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateProxyRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Unable to locate a resource using the parameters that you provided.
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
export class UpdateProxyRuleCommand extends command<UpdateProxyRuleCommandInput, UpdateProxyRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProxyRule",
  UpdateProxyRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProxyRuleRequest;
      output: UpdateProxyRuleResponse;
    };
    sdk: {
      input: UpdateProxyRuleCommandInput;
      output: UpdateProxyRuleCommandOutput;
    };
  };
}

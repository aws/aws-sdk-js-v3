// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRuleGroupsRequest, ListRuleGroupsResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_ListRuleGroupsCommand, se_ListRuleGroupsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRuleGroupsCommand}.
 */
export interface ListRuleGroupsCommandInput extends ListRuleGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListRuleGroupsCommand}.
 */
export interface ListRuleGroupsCommandOutput extends ListRuleGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for the rule groups that you have defined. Depending on your
 *          setting for max results and the number of rule groups, a single call might not return the
 *          full list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListRuleGroupsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListRuleGroupsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListRuleGroupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Scope: "MANAGED" || "ACCOUNT",
 *   ManagedType: "AWS_MANAGED_THREAT_SIGNATURES" || "AWS_MANAGED_DOMAIN_LISTS",
 *   Type: "STATELESS" || "STATEFUL",
 * };
 * const command = new ListRuleGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListRuleGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   RuleGroups: [ // RuleGroups
 * //     { // RuleGroupMetadata
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRuleGroupsCommandInput - {@link ListRuleGroupsCommandInput}
 * @returns {@link ListRuleGroupsCommandOutput}
 * @see {@link ListRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListRuleGroupsCommandOutput} for command's `response` shape.
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
export class ListRuleGroupsCommand extends $Command
  .classBuilder<
    ListRuleGroupsCommandInput,
    ListRuleGroupsCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFirewall_20201112", "ListRuleGroups", {})
  .n("NetworkFirewallClient", "ListRuleGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListRuleGroupsCommand)
  .de(de_ListRuleGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuleGroupsRequest;
      output: ListRuleGroupsResponse;
    };
    sdk: {
      input: ListRuleGroupsCommandInput;
      output: ListRuleGroupsCommandOutput;
    };
  };
}

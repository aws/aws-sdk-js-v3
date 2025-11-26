// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListProxyRuleGroupsRequest, ListProxyRuleGroupsResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { ListProxyRuleGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProxyRuleGroupsCommand}.
 */
export interface ListProxyRuleGroupsCommandInput extends ListProxyRuleGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListProxyRuleGroupsCommand}.
 */
export interface ListProxyRuleGroupsCommandOutput extends ListProxyRuleGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for the proxy rule groups that you have defined. Depending on
 *             your setting for max results and the number of proxy rule groups, a single call might not
 *             return the full list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListProxyRuleGroupsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListProxyRuleGroupsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListProxyRuleGroupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProxyRuleGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListProxyRuleGroupsResponse
 * //   ProxyRuleGroups: [ // ProxyRuleGroups
 * //     { // ProxyRuleGroupMetadata
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProxyRuleGroupsCommandInput - {@link ListProxyRuleGroupsCommandInput}
 * @returns {@link ListProxyRuleGroupsCommandOutput}
 * @see {@link ListProxyRuleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListProxyRuleGroupsCommandOutput} for command's `response` shape.
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
export class ListProxyRuleGroupsCommand extends $Command
  .classBuilder<
    ListProxyRuleGroupsCommandInput,
    ListProxyRuleGroupsCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "ListProxyRuleGroups", {})
  .n("NetworkFirewallClient", "ListProxyRuleGroupsCommand")
  .sc(ListProxyRuleGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProxyRuleGroupsRequest;
      output: ListProxyRuleGroupsResponse;
    };
    sdk: {
      input: ListProxyRuleGroupsCommandInput;
      output: ListProxyRuleGroupsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFirewallPoliciesRequest, ListFirewallPoliciesResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { ListFirewallPolicies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFirewallPoliciesCommand}.
 */
export interface ListFirewallPoliciesCommandInput extends ListFirewallPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListFirewallPoliciesCommand}.
 */
export interface ListFirewallPoliciesCommandOutput extends ListFirewallPoliciesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for the firewall policies that you have defined. Depending on
 *          your setting for max results and the number of firewall policies, a single call might not
 *          return the full list. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListFirewallPoliciesCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListFirewallPoliciesCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListFirewallPoliciesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFirewallPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallPoliciesResponse
 * //   NextToken: "STRING_VALUE",
 * //   FirewallPolicies: [ // FirewallPolicies
 * //     { // FirewallPolicyMetadata
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFirewallPoliciesCommandInput - {@link ListFirewallPoliciesCommandInput}
 * @returns {@link ListFirewallPoliciesCommandOutput}
 * @see {@link ListFirewallPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListFirewallPoliciesCommandOutput} for command's `response` shape.
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
export class ListFirewallPoliciesCommand extends $Command
  .classBuilder<
    ListFirewallPoliciesCommandInput,
    ListFirewallPoliciesCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "ListFirewallPolicies", {})
  .n("NetworkFirewallClient", "ListFirewallPoliciesCommand")
  .sc(ListFirewallPolicies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallPoliciesRequest;
      output: ListFirewallPoliciesResponse;
    };
    sdk: {
      input: ListFirewallPoliciesCommandInput;
      output: ListFirewallPoliciesCommandOutput;
    };
  };
}

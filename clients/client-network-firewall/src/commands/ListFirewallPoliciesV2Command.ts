// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFirewallPoliciesV2Request, ListFirewallPoliciesV2Response } from "../models/models_0";
import { ListFirewallPoliciesV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFirewallPoliciesV2Command}.
 */
export interface ListFirewallPoliciesV2CommandInput extends ListFirewallPoliciesV2Request {}
/**
 * @public
 *
 * The output of {@link ListFirewallPoliciesV2Command}.
 */
export interface ListFirewallPoliciesV2CommandOutput extends ListFirewallPoliciesV2Response, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for the Next Generation policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListFirewallPoliciesV2Command } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListFirewallPoliciesV2Command } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListFirewallPoliciesV2Request
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFirewallPoliciesV2Command(input);
 * const response = await client.send(command);
 * // { // ListFirewallPoliciesV2Response
 * //   NextToken: "STRING_VALUE",
 * //   FirewallPoliciesV2: [ // FirewallPoliciesV2 // required
 * //     { // FirewallPolicyV2Metadata
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFirewallPoliciesV2CommandInput - {@link ListFirewallPoliciesV2CommandInput}
 * @returns {@link ListFirewallPoliciesV2CommandOutput}
 * @see {@link ListFirewallPoliciesV2CommandInput} for command's `input` shape.
 * @see {@link ListFirewallPoliciesV2CommandOutput} for command's `response` shape.
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
export class ListFirewallPoliciesV2Command extends command<ListFirewallPoliciesV2CommandInput, ListFirewallPoliciesV2CommandOutput>(
  _ep0,
  _mw0,
  "ListFirewallPoliciesV2",
  ListFirewallPoliciesV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallPoliciesV2Request;
      output: ListFirewallPoliciesV2Response;
    };
    sdk: {
      input: ListFirewallPoliciesV2CommandInput;
      output: ListFirewallPoliciesV2CommandOutput;
    };
  };
}

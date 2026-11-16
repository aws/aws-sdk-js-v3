// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContextStoresRequest, ListContextStoresResponse } from "../models/models_0";
import { ListContextStores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContextStoresCommand}.
 */
export interface ListContextStoresCommandInput extends ListContextStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListContextStoresCommand}.
 */
export interface ListContextStoresCommandOutput extends ListContextStoresResponse, __MetadataBearer {}

/**
 * <p>Lists the active context stores that are associated with your firewalls. A context store records network resources that can be used to evaluate context-aware rules.
 *          You can list the following resource types: VPCs, subnets, security groups, and transit gateway attachments.</p>
 *          <p>When using a small page size, a single call might not return the full list. A response can contain fewer than <code>MaxResults</code>
 *          results, or none, and still include a <code>NextToken</code>. Keep making requests until the response does not include a
 *          <code>NextToken</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListContextStoresCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListContextStoresCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListContextStoresRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListContextStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListContextStoresResponse
 * //   NextToken: "STRING_VALUE",
 * //   ContextStores: [ // ContextStores // required
 * //     { // ContextStore
 * //       ContextStoreId: "STRING_VALUE", // required
 * //       ContextStoreOwnerAccountId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListContextStoresCommandInput - {@link ListContextStoresCommandInput}
 * @returns {@link ListContextStoresCommandOutput}
 * @see {@link ListContextStoresCommandInput} for command's `input` shape.
 * @see {@link ListContextStoresCommandOutput} for command's `response` shape.
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
export class ListContextStoresCommand extends command<ListContextStoresCommandInput, ListContextStoresCommandOutput>(
  _ep0,
  _mw0,
  "ListContextStores",
  ListContextStores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContextStoresRequest;
      output: ListContextStoresResponse;
    };
    sdk: {
      input: ListContextStoresCommandInput;
      output: ListContextStoresCommandOutput;
    };
  };
}

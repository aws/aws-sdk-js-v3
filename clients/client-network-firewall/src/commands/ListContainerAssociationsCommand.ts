// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContainerAssociationsRequest, ListContainerAssociationsResponse } from "../models/models_0";
import { ListContainerAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContainerAssociationsCommand}.
 */
export interface ListContainerAssociationsCommandInput extends ListContainerAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListContainerAssociationsCommand}.
 */
export interface ListContainerAssociationsCommandOutput extends ListContainerAssociationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the metadata for the container associations that you have defined. You can optionally page through results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListContainerAssociationsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListContainerAssociationsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListContainerAssociationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContainerAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListContainerAssociationsResponse
 * //   ContainerAssociations: [ // ContainerAssociations
 * //     { // ContainerAssociationSummary
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContainerAssociationsCommandInput - {@link ListContainerAssociationsCommandInput}
 * @returns {@link ListContainerAssociationsCommandOutput}
 * @see {@link ListContainerAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListContainerAssociationsCommandOutput} for command's `response` shape.
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
export class ListContainerAssociationsCommand extends command<ListContainerAssociationsCommandInput, ListContainerAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListContainerAssociations",
  ListContainerAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContainerAssociationsRequest;
      output: ListContainerAssociationsResponse;
    };
    sdk: {
      input: ListContainerAssociationsCommandInput;
      output: ListContainerAssociationsCommandOutput;
    };
  };
}

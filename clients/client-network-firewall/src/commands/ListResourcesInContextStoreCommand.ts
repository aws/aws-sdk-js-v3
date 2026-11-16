// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourcesInContextStoreRequest, ListResourcesInContextStoreResponse } from "../models/models_0";
import { ListResourcesInContextStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourcesInContextStoreCommand}.
 */
export interface ListResourcesInContextStoreCommandInput extends ListResourcesInContextStoreRequest {}
/**
 * @public
 *
 * The output of {@link ListResourcesInContextStoreCommand}.
 */
export interface ListResourcesInContextStoreCommandOutput extends ListResourcesInContextStoreResponse, __MetadataBearer {}

/**
 * <p>Lists the resources that a context store records. The context store must be associated with a transit gateway that your firewall is attached to.
 *       You can filter the results by Region, resource type, or both.</p>
 *          <p>When using a small page size, a single call might not return the full list. A response can contain fewer than <code>MaxResults</code>
 *          results, or none, and still include a <code>NextToken</code>. Keep making requests until the response does not include a
 *          <code>NextToken</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, ListResourcesInContextStoreCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, ListResourcesInContextStoreCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // ListResourcesInContextStoreRequest
 *   ContextStoreId: "STRING_VALUE", // required
 *   Filters: { // ContextFilters
 *     Region: "STRING_VALUE",
 *     ResourceType: "SecurityGroup" || "VPC" || "Subnet" || "TGWAttachment",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourcesInContextStoreCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesInContextStoreResponse
 * //   ResourceContexts: [ // ResourceContexts // required
 * //     { // ResourceContext
 * //       ContextType: "ResourceId" || "SegmentId" || "Subnet" || "Attachment",
 * //       Region: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AttachmentType: "STRING_VALUE",
 * //       PublicId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesInContextStoreCommandInput - {@link ListResourcesInContextStoreCommandInput}
 * @returns {@link ListResourcesInContextStoreCommandOutput}
 * @see {@link ListResourcesInContextStoreCommandInput} for command's `input` shape.
 * @see {@link ListResourcesInContextStoreCommandOutput} for command's `response` shape.
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
export class ListResourcesInContextStoreCommand extends command<ListResourcesInContextStoreCommandInput, ListResourcesInContextStoreCommandOutput>(
  _ep0,
  _mw0,
  "ListResourcesInContextStore",
  ListResourcesInContextStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcesInContextStoreRequest;
      output: ListResourcesInContextStoreResponse;
    };
    sdk: {
      input: ListResourcesInContextStoreCommandInput;
      output: ListResourcesInContextStoreCommandOutput;
    };
  };
}

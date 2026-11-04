// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAttachmentRoutingPolicyAssociationsRequest,
  ListAttachmentRoutingPolicyAssociationsResponse,
} from "../models/models_0";
import { ListAttachmentRoutingPolicyAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAttachmentRoutingPolicyAssociationsCommand}.
 */
export interface ListAttachmentRoutingPolicyAssociationsCommandInput extends ListAttachmentRoutingPolicyAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAttachmentRoutingPolicyAssociationsCommand}.
 */
export interface ListAttachmentRoutingPolicyAssociationsCommandOutput extends ListAttachmentRoutingPolicyAssociationsResponse, __MetadataBearer {}

/**
 * Lists the routing policy associations for attachments in a core network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListAttachmentRoutingPolicyAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListAttachmentRoutingPolicyAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListAttachmentRoutingPolicyAssociationsRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   AttachmentId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAttachmentRoutingPolicyAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAttachmentRoutingPolicyAssociationsResponse
 * //   AttachmentRoutingPolicyAssociations: [ // AttachmentRoutingPolicyAssociationsList
 * //     { // AttachmentRoutingPolicyAssociationSummary
 * //       AttachmentId: "STRING_VALUE",
 * //       PendingRoutingPolicies: [ // ConstrainedStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AssociatedRoutingPolicies: [
 * //         "STRING_VALUE",
 * //       ],
 * //       RoutingPolicyLabel: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttachmentRoutingPolicyAssociationsCommandInput - {@link ListAttachmentRoutingPolicyAssociationsCommandInput}
 * @returns {@link ListAttachmentRoutingPolicyAssociationsCommandOutput}
 * @see {@link ListAttachmentRoutingPolicyAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAttachmentRoutingPolicyAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class ListAttachmentRoutingPolicyAssociationsCommand extends command<ListAttachmentRoutingPolicyAssociationsCommandInput, ListAttachmentRoutingPolicyAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListAttachmentRoutingPolicyAssociations",
  ListAttachmentRoutingPolicyAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttachmentRoutingPolicyAssociationsRequest;
      output: ListAttachmentRoutingPolicyAssociationsResponse;
    };
    sdk: {
      input: ListAttachmentRoutingPolicyAssociationsCommandInput;
      output: ListAttachmentRoutingPolicyAssociationsCommandOutput;
    };
  };
}

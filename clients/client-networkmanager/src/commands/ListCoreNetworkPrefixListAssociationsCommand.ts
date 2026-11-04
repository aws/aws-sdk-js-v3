// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListCoreNetworkPrefixListAssociationsRequest,
  ListCoreNetworkPrefixListAssociationsResponse,
} from "../models/models_0";
import { ListCoreNetworkPrefixListAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCoreNetworkPrefixListAssociationsCommand}.
 */
export interface ListCoreNetworkPrefixListAssociationsCommandInput extends ListCoreNetworkPrefixListAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCoreNetworkPrefixListAssociationsCommand}.
 */
export interface ListCoreNetworkPrefixListAssociationsCommandOutput extends ListCoreNetworkPrefixListAssociationsResponse, __MetadataBearer {}

/**
 * Lists the prefix list associations for a core network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListCoreNetworkPrefixListAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListCoreNetworkPrefixListAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListCoreNetworkPrefixListAssociationsRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PrefixListArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCoreNetworkPrefixListAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCoreNetworkPrefixListAssociationsResponse
 * //   PrefixListAssociations: [ // PrefixListAssociationList
 * //     { // PrefixListAssociation
 * //       CoreNetworkId: "STRING_VALUE",
 * //       PrefixListArn: "STRING_VALUE",
 * //       PrefixListAlias: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCoreNetworkPrefixListAssociationsCommandInput - {@link ListCoreNetworkPrefixListAssociationsCommandInput}
 * @returns {@link ListCoreNetworkPrefixListAssociationsCommandOutput}
 * @see {@link ListCoreNetworkPrefixListAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListCoreNetworkPrefixListAssociationsCommandOutput} for command's `response` shape.
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
export class ListCoreNetworkPrefixListAssociationsCommand extends command<ListCoreNetworkPrefixListAssociationsCommandInput, ListCoreNetworkPrefixListAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListCoreNetworkPrefixListAssociations",
  ListCoreNetworkPrefixListAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoreNetworkPrefixListAssociationsRequest;
      output: ListCoreNetworkPrefixListAssociationsResponse;
    };
    sdk: {
      input: ListCoreNetworkPrefixListAssociationsCommandInput;
      output: ListCoreNetworkPrefixListAssociationsCommandOutput;
    };
  };
}

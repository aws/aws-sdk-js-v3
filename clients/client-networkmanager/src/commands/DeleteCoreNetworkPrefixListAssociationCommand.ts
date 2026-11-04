// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteCoreNetworkPrefixListAssociationRequest,
  DeleteCoreNetworkPrefixListAssociationResponse,
} from "../models/models_0";
import { DeleteCoreNetworkPrefixListAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCoreNetworkPrefixListAssociationCommand}.
 */
export interface DeleteCoreNetworkPrefixListAssociationCommandInput extends DeleteCoreNetworkPrefixListAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCoreNetworkPrefixListAssociationCommand}.
 */
export interface DeleteCoreNetworkPrefixListAssociationCommandOutput extends DeleteCoreNetworkPrefixListAssociationResponse, __MetadataBearer {}

/**
 * Deletes an association between a core network and a prefix list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteCoreNetworkPrefixListAssociationCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteCoreNetworkPrefixListAssociationCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteCoreNetworkPrefixListAssociationRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PrefixListArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCoreNetworkPrefixListAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCoreNetworkPrefixListAssociationResponse
 * //   CoreNetworkId: "STRING_VALUE",
 * //   PrefixListArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCoreNetworkPrefixListAssociationCommandInput - {@link DeleteCoreNetworkPrefixListAssociationCommandInput}
 * @returns {@link DeleteCoreNetworkPrefixListAssociationCommandOutput}
 * @see {@link DeleteCoreNetworkPrefixListAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreNetworkPrefixListAssociationCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A service limit was exceeded.
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
export class DeleteCoreNetworkPrefixListAssociationCommand extends command<DeleteCoreNetworkPrefixListAssociationCommandInput, DeleteCoreNetworkPrefixListAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCoreNetworkPrefixListAssociation",
  DeleteCoreNetworkPrefixListAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCoreNetworkPrefixListAssociationRequest;
      output: DeleteCoreNetworkPrefixListAssociationResponse;
    };
    sdk: {
      input: DeleteCoreNetworkPrefixListAssociationCommandInput;
      output: DeleteCoreNetworkPrefixListAssociationCommandOutput;
    };
  };
}

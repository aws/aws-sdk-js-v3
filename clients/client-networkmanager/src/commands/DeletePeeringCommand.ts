// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePeeringRequest, DeletePeeringResponse } from "../models/models_0";
import { DeletePeering$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePeeringCommand}.
 */
export interface DeletePeeringCommandInput extends DeletePeeringRequest {}
/**
 * @public
 *
 * The output of {@link DeletePeeringCommand}.
 */
export interface DeletePeeringCommandOutput extends DeletePeeringResponse, __MetadataBearer {}

/**
 * Deletes an existing peering connection.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeletePeeringCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeletePeeringCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeletePeeringRequest
 *   PeeringId: "STRING_VALUE", // required
 * };
 * const command = new DeletePeeringCommand(input);
 * const response = await client.send(command);
 * // { // DeletePeeringResponse
 * //   Peering: { // Peering
 * //     CoreNetworkId: "STRING_VALUE",
 * //     CoreNetworkArn: "STRING_VALUE",
 * //     PeeringId: "STRING_VALUE",
 * //     OwnerAccountId: "STRING_VALUE",
 * //     PeeringType: "TRANSIT_GATEWAY",
 * //     State: "CREATING" || "FAILED" || "AVAILABLE" || "DELETING",
 * //     EdgeLocation: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastModificationErrors: [ // PeeringErrorList
 * //       { // PeeringError
 * //         Code: "TRANSIT_GATEWAY_NOT_FOUND" || "TRANSIT_GATEWAY_PEERS_LIMIT_EXCEEDED" || "MISSING_PERMISSIONS" || "INTERNAL_ERROR" || "EDGE_LOCATION_PEER_DUPLICATE" || "INVALID_TRANSIT_GATEWAY_STATE" || "TRANSIT_GATEWAY_ENCRYPTION_NOT_SUPPORTED" || "CREATION_FAILED" || "DELETION_FAILED",
 * //         Message: "STRING_VALUE",
 * //         ResourceArn: "STRING_VALUE",
 * //         RequestId: "STRING_VALUE",
 * //         MissingPermissionsContext: { // PermissionsErrorContext
 * //           MissingPermission: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeletePeeringCommandInput - {@link DeletePeeringCommandInput}
 * @returns {@link DeletePeeringCommandOutput}
 * @see {@link DeletePeeringCommandInput} for command's `input` shape.
 * @see {@link DeletePeeringCommandOutput} for command's `response` shape.
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
export class DeletePeeringCommand extends command<DeletePeeringCommandInput, DeletePeeringCommandOutput>(
  _ep0,
  _mw0,
  "DeletePeering",
  DeletePeering$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePeeringRequest;
      output: DeletePeeringResponse;
    };
    sdk: {
      input: DeletePeeringCommandInput;
      output: DeletePeeringCommandOutput;
    };
  };
}

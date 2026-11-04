// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConnectPeerRequest, DeleteConnectPeerResponse } from "../models/models_0";
import { DeleteConnectPeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConnectPeerCommand}.
 */
export interface DeleteConnectPeerCommandInput extends DeleteConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectPeerCommand}.
 */
export interface DeleteConnectPeerCommandOutput extends DeleteConnectPeerResponse, __MetadataBearer {}

/**
 * Deletes a Connect peer.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteConnectPeerRequest
 *   ConnectPeerId: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteConnectPeerResponse
 * //   ConnectPeer: { // ConnectPeer
 * //     CoreNetworkId: "STRING_VALUE",
 * //     ConnectAttachmentId: "STRING_VALUE",
 * //     ConnectPeerId: "STRING_VALUE",
 * //     EdgeLocation: "STRING_VALUE",
 * //     State: "CREATING" || "FAILED" || "AVAILABLE" || "DELETING",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     Configuration: { // ConnectPeerConfiguration
 * //       CoreNetworkAddress: "STRING_VALUE",
 * //       PeerAddress: "STRING_VALUE",
 * //       InsideCidrBlocks: [ // ConstrainedStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       Protocol: "GRE" || "NO_ENCAP",
 * //       BgpConfigurations: [ // ConnectPeerBgpConfigurationList
 * //         { // ConnectPeerBgpConfiguration
 * //           CoreNetworkAsn: Number("long"),
 * //           PeerAsn: Number("long"),
 * //           CoreNetworkAddress: "STRING_VALUE",
 * //           PeerAddress: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SubnetArn: "STRING_VALUE",
 * //     LastModificationErrors: [ // ConnectPeerErrorList
 * //       { // ConnectPeerError
 * //         Code: "EDGE_LOCATION_NO_FREE_IPS" || "EDGE_LOCATION_PEER_DUPLICATE" || "SUBNET_NOT_FOUND" || "IP_OUTSIDE_SUBNET_CIDR_RANGE" || "INVALID_INSIDE_CIDR_BLOCK" || "NO_ASSOCIATED_CIDR_BLOCK" || "CREATION_FAILED" || "DELETION_FAILED",
 * //         Message: "STRING_VALUE",
 * //         ResourceArn: "STRING_VALUE",
 * //         RequestId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteConnectPeerCommandInput - {@link DeleteConnectPeerCommandInput}
 * @returns {@link DeleteConnectPeerCommandOutput}
 * @see {@link DeleteConnectPeerCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectPeerCommandOutput} for command's `response` shape.
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
export class DeleteConnectPeerCommand extends command<DeleteConnectPeerCommandInput, DeleteConnectPeerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConnectPeer",
  DeleteConnectPeer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectPeerRequest;
      output: DeleteConnectPeerResponse;
    };
    sdk: {
      input: DeleteConnectPeerCommandInput;
      output: DeleteConnectPeerCommandOutput;
    };
  };
}

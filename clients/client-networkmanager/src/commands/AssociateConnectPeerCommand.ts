// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateConnectPeerRequest, AssociateConnectPeerResponse } from "../models/models_0";
import { AssociateConnectPeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateConnectPeerCommand}.
 */
export interface AssociateConnectPeerCommandInput extends AssociateConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link AssociateConnectPeerCommand}.
 */
export interface AssociateConnectPeerCommandOutput extends AssociateConnectPeerResponse, __MetadataBearer {}

/**
 * Associates a core network Connect peer with a device and optionally, with a link.
 *
 * If you specify a link, it must be associated with the specified device. You can only associate core network Connect peers that have been created on a core network Connect attachment on a core network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // AssociateConnectPeerRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   ConnectPeerId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   LinkId: "STRING_VALUE",
 * };
 * const command = new AssociateConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // AssociateConnectPeerResponse
 * //   ConnectPeerAssociation: { // ConnectPeerAssociation
 * //     ConnectPeerId: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     DeviceId: "STRING_VALUE",
 * //     LinkId: "STRING_VALUE",
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateConnectPeerCommandInput - {@link AssociateConnectPeerCommandInput}
 * @returns {@link AssociateConnectPeerCommandOutput}
 * @see {@link AssociateConnectPeerCommandInput} for command's `input` shape.
 * @see {@link AssociateConnectPeerCommandOutput} for command's `response` shape.
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
export class AssociateConnectPeerCommand extends command<AssociateConnectPeerCommandInput, AssociateConnectPeerCommandOutput>(
  _ep0,
  _mw0,
  "AssociateConnectPeer",
  AssociateConnectPeer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateConnectPeerRequest;
      output: AssociateConnectPeerResponse;
    };
    sdk: {
      input: AssociateConnectPeerCommandInput;
      output: AssociateConnectPeerCommandOutput;
    };
  };
}

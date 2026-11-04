// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateConnectPeerRequest, DisassociateConnectPeerResponse } from "../models/models_0";
import { DisassociateConnectPeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateConnectPeerCommand}.
 */
export interface DisassociateConnectPeerCommandInput extends DisassociateConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateConnectPeerCommand}.
 */
export interface DisassociateConnectPeerCommandOutput extends DisassociateConnectPeerResponse, __MetadataBearer {}

/**
 * Disassociates a core network Connect peer from a device and a link.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DisassociateConnectPeerRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   ConnectPeerId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateConnectPeerResponse
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
 * @param DisassociateConnectPeerCommandInput - {@link DisassociateConnectPeerCommandInput}
 * @returns {@link DisassociateConnectPeerCommandOutput}
 * @see {@link DisassociateConnectPeerCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectPeerCommandOutput} for command's `response` shape.
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
export class DisassociateConnectPeerCommand extends command<DisassociateConnectPeerCommandInput, DisassociateConnectPeerCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateConnectPeer",
  DisassociateConnectPeer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateConnectPeerRequest;
      output: DisassociateConnectPeerResponse;
    };
    sdk: {
      input: DisassociateConnectPeerCommandInput;
      output: DisassociateConnectPeerCommandOutput;
    };
  };
}

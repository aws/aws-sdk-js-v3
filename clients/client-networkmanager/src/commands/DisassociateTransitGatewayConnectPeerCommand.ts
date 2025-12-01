// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateTransitGatewayConnectPeerRequest,
  DisassociateTransitGatewayConnectPeerResponse,
} from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { DisassociateTransitGatewayConnectPeer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateTransitGatewayConnectPeerCommand}.
 */
export interface DisassociateTransitGatewayConnectPeerCommandInput
  extends DisassociateTransitGatewayConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTransitGatewayConnectPeerCommand}.
 */
export interface DisassociateTransitGatewayConnectPeerCommandOutput
  extends DisassociateTransitGatewayConnectPeerResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a transit gateway Connect peer from a device and link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DisassociateTransitGatewayConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DisassociateTransitGatewayConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // DisassociateTransitGatewayConnectPeerRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   TransitGatewayConnectPeerArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateTransitGatewayConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateTransitGatewayConnectPeerResponse
 * //   TransitGatewayConnectPeerAssociation: { // TransitGatewayConnectPeerAssociation
 * //     TransitGatewayConnectPeerArn: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     DeviceId: "STRING_VALUE",
 * //     LinkId: "STRING_VALUE",
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateTransitGatewayConnectPeerCommandInput - {@link DisassociateTransitGatewayConnectPeerCommandInput}
 * @returns {@link DisassociateTransitGatewayConnectPeerCommandOutput}
 * @see {@link DisassociateTransitGatewayConnectPeerCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayConnectPeerCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class DisassociateTransitGatewayConnectPeerCommand extends $Command
  .classBuilder<
    DisassociateTransitGatewayConnectPeerCommandInput,
    DisassociateTransitGatewayConnectPeerCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "DisassociateTransitGatewayConnectPeer", {})
  .n("NetworkManagerClient", "DisassociateTransitGatewayConnectPeerCommand")
  .sc(DisassociateTransitGatewayConnectPeer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateTransitGatewayConnectPeerRequest;
      output: DisassociateTransitGatewayConnectPeerResponse;
    };
    sdk: {
      input: DisassociateTransitGatewayConnectPeerCommandInput;
      output: DisassociateTransitGatewayConnectPeerCommandOutput;
    };
  };
}

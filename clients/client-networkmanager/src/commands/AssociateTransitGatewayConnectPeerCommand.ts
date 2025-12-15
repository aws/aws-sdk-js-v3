// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AssociateTransitGatewayConnectPeerRequest,
  AssociateTransitGatewayConnectPeerResponse,
} from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { AssociateTransitGatewayConnectPeer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTransitGatewayConnectPeerCommand}.
 */
export interface AssociateTransitGatewayConnectPeerCommandInput extends AssociateTransitGatewayConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTransitGatewayConnectPeerCommand}.
 */
export interface AssociateTransitGatewayConnectPeerCommandOutput
  extends AssociateTransitGatewayConnectPeerResponse,
    __MetadataBearer {}

/**
 * <p>Associates a transit gateway Connect peer with a device, and optionally, with a link. If you
 *             specify a link, it must be associated with the specified device. </p>
 *          <p>You can only associate transit gateway Connect peers that have been created on a
 *             transit gateway that's registered in your global network.</p>
 *          <p>You cannot associate a transit gateway Connect peer with more than one device and link. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateTransitGatewayConnectPeerCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateTransitGatewayConnectPeerCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // AssociateTransitGatewayConnectPeerRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   TransitGatewayConnectPeerArn: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   LinkId: "STRING_VALUE",
 * };
 * const command = new AssociateTransitGatewayConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTransitGatewayConnectPeerResponse
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
 * @param AssociateTransitGatewayConnectPeerCommandInput - {@link AssociateTransitGatewayConnectPeerCommandInput}
 * @returns {@link AssociateTransitGatewayConnectPeerCommandOutput}
 * @see {@link AssociateTransitGatewayConnectPeerCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayConnectPeerCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
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
export class AssociateTransitGatewayConnectPeerCommand extends $Command
  .classBuilder<
    AssociateTransitGatewayConnectPeerCommandInput,
    AssociateTransitGatewayConnectPeerCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "AssociateTransitGatewayConnectPeer", {})
  .n("NetworkManagerClient", "AssociateTransitGatewayConnectPeerCommand")
  .sc(AssociateTransitGatewayConnectPeer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateTransitGatewayConnectPeerRequest;
      output: AssociateTransitGatewayConnectPeerResponse;
    };
    sdk: {
      input: AssociateTransitGatewayConnectPeerCommandInput;
      output: AssociateTransitGatewayConnectPeerCommandOutput;
    };
  };
}

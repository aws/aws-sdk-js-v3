// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBGPPeerRequest, DeleteBGPPeerResponse } from "../models/models_0";
import { DeleteBGPPeer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBGPPeerCommand}.
 */
export interface DeleteBGPPeerCommandInput extends DeleteBGPPeerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBGPPeerCommand}.
 */
export interface DeleteBGPPeerCommandOutput extends DeleteBGPPeerResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p>
 *          <p>You cannot delete the last BGP peer from a virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteBGPPeerCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteBGPPeerCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DeleteBGPPeerRequest
 *   virtualInterfaceId: "STRING_VALUE",
 *   asn: Number("int"),
 *   asnLong: Number("long"),
 *   customerAddress: "STRING_VALUE",
 *   bgpPeerId: "STRING_VALUE",
 * };
 * const command = new DeleteBGPPeerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBGPPeerResponse
 * //   virtualInterface: { // VirtualInterface
 * //     ownerAccount: "STRING_VALUE",
 * //     virtualInterfaceId: "STRING_VALUE",
 * //     location: "STRING_VALUE",
 * //     connectionId: "STRING_VALUE",
 * //     virtualInterfaceType: "STRING_VALUE",
 * //     virtualInterfaceName: "STRING_VALUE",
 * //     vlan: Number("int"),
 * //     asn: Number("int"),
 * //     asnLong: Number("long"),
 * //     amazonSideAsn: Number("long"),
 * //     authKey: "STRING_VALUE",
 * //     amazonAddress: "STRING_VALUE",
 * //     customerAddress: "STRING_VALUE",
 * //     addressFamily: "ipv4" || "ipv6",
 * //     virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "testing" || "deleting" || "deleted" || "rejected" || "unknown",
 * //     customerRouterConfig: "STRING_VALUE",
 * //     mtu: Number("int"),
 * //     jumboFrameCapable: true || false,
 * //     virtualGatewayId: "STRING_VALUE",
 * //     directConnectGatewayId: "STRING_VALUE",
 * //     routeFilterPrefixes: [ // RouteFilterPrefixList
 * //       { // RouteFilterPrefix
 * //         cidr: "STRING_VALUE",
 * //       },
 * //     ],
 * //     bgpPeers: [ // BGPPeerList
 * //       { // BGPPeer
 * //         bgpPeerId: "STRING_VALUE",
 * //         asn: Number("int"),
 * //         asnLong: Number("long"),
 * //         authKey: "STRING_VALUE",
 * //         addressFamily: "ipv4" || "ipv6",
 * //         amazonAddress: "STRING_VALUE",
 * //         customerAddress: "STRING_VALUE",
 * //         bgpPeerState: "verifying" || "pending" || "available" || "deleting" || "deleted",
 * //         bgpStatus: "up" || "down" || "unknown",
 * //         awsDeviceV2: "STRING_VALUE",
 * //         awsLogicalDeviceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     region: "STRING_VALUE",
 * //     awsDeviceV2: "STRING_VALUE",
 * //     awsLogicalDeviceId: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     siteLinkEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteBGPPeerCommandInput - {@link DeleteBGPPeerCommandInput}
 * @returns {@link DeleteBGPPeerCommandOutput}
 * @see {@link DeleteBGPPeerCommandInput} for command's `input` shape.
 * @see {@link DeleteBGPPeerCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class DeleteBGPPeerCommand extends $Command
  .classBuilder<
    DeleteBGPPeerCommandInput,
    DeleteBGPPeerCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DeleteBGPPeer", {})
  .n("DirectConnectClient", "DeleteBGPPeerCommand")
  .sc(DeleteBGPPeer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBGPPeerRequest;
      output: DeleteBGPPeerResponse;
    };
    sdk: {
      input: DeleteBGPPeerCommandInput;
      output: DeleteBGPPeerCommandOutput;
    };
  };
}

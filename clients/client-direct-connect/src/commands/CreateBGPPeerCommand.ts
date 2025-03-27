// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBGPPeerRequest, CreateBGPPeerResponse } from "../models/models_0";
import { de_CreateBGPPeerCommand, se_CreateBGPPeerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBGPPeerCommand}.
 */
export interface CreateBGPPeerCommandInput extends CreateBGPPeerRequest {}
/**
 * @public
 *
 * The output of {@link CreateBGPPeerCommand}.
 */
export interface CreateBGPPeerCommandOutput extends CreateBGPPeerResponse, __MetadataBearer {}

/**
 * <p>Creates a BGP peer on the specified virtual interface.</p>
 *          <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to
 *       access Amazon Web Services resources that also use that address family.</p>
 *          <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot
 *       be in the same address family as an existing BGP peer on the virtual interface.</p>
 *          <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from
 *       the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
 *          <important>
 *             <p>If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated
 *       from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use
 *       the customer router peer IP address as the source and destination for traffic. Instead you
 *       should use RFC 1918 or other addressing, and specify the address yourself. For more
 *       information about RFC 1918 see <a href="https://datatracker.ietf.org/doc/html/rfc1918">
 *         Address Allocation for Private Internets</a>.</p>
 *          </important>
 *          <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateBGPPeerCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateBGPPeerCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // CreateBGPPeerRequest
 *   virtualInterfaceId: "STRING_VALUE",
 *   newBGPPeer: { // NewBGPPeer
 *     asn: Number("int"),
 *     authKey: "STRING_VALUE",
 *     addressFamily: "ipv4" || "ipv6",
 *     amazonAddress: "STRING_VALUE",
 *     customerAddress: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateBGPPeerCommand(input);
 * const response = await client.send(command);
 * // { // CreateBGPPeerResponse
 * //   virtualInterface: { // VirtualInterface
 * //     ownerAccount: "STRING_VALUE",
 * //     virtualInterfaceId: "STRING_VALUE",
 * //     location: "STRING_VALUE",
 * //     connectionId: "STRING_VALUE",
 * //     virtualInterfaceType: "STRING_VALUE",
 * //     virtualInterfaceName: "STRING_VALUE",
 * //     vlan: Number("int"),
 * //     asn: Number("int"),
 * //     amazonSideAsn: Number("long"),
 * //     authKey: "STRING_VALUE",
 * //     amazonAddress: "STRING_VALUE",
 * //     customerAddress: "STRING_VALUE",
 * //     addressFamily: "ipv4" || "ipv6",
 * //     virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "deleting" || "deleted" || "rejected" || "unknown",
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
 * @param CreateBGPPeerCommandInput - {@link CreateBGPPeerCommandInput}
 * @returns {@link CreateBGPPeerCommandOutput}
 * @see {@link CreateBGPPeerCommandInput} for command's `input` shape.
 * @see {@link CreateBGPPeerCommandOutput} for command's `response` shape.
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
export class CreateBGPPeerCommand extends $Command
  .classBuilder<
    CreateBGPPeerCommandInput,
    CreateBGPPeerCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OvertureService", "CreateBGPPeer", {})
  .n("DirectConnectClient", "CreateBGPPeerCommand")
  .f(void 0, void 0)
  .ser(se_CreateBGPPeerCommand)
  .de(de_CreateBGPPeerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBGPPeerRequest;
      output: CreateBGPPeerResponse;
    };
    sdk: {
      input: CreateBGPPeerCommandInput;
      output: CreateBGPPeerCommandOutput;
    };
  };
}

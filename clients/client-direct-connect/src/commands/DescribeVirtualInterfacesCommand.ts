// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVirtualInterfacesRequest, VirtualInterfaces } from "../models/models_0";
import { de_DescribeVirtualInterfacesCommand, se_DescribeVirtualInterfacesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVirtualInterfacesCommand}.
 */
export interface DescribeVirtualInterfacesCommandInput extends DescribeVirtualInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVirtualInterfacesCommand}.
 */
export interface DescribeVirtualInterfacesCommandOutput extends VirtualInterfaces, __MetadataBearer {}

/**
 * <p>Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer
 *       than 15 minutes before you make the request are also returned. If you specify a
 *       connection ID, only the virtual interfaces associated with the connection are returned.
 *       If you specify a virtual interface ID, then only a single virtual interface is returned.</p>
 *          <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeVirtualInterfacesCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeVirtualInterfacesCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeVirtualInterfacesRequest
 *   connectionId: "STRING_VALUE",
 *   virtualInterfaceId: "STRING_VALUE",
 * };
 * const command = new DescribeVirtualInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // VirtualInterfaces
 * //   virtualInterfaces: [ // VirtualInterfaceList
 * //     { // VirtualInterface
 * //       ownerAccount: "STRING_VALUE",
 * //       virtualInterfaceId: "STRING_VALUE",
 * //       location: "STRING_VALUE",
 * //       connectionId: "STRING_VALUE",
 * //       virtualInterfaceType: "STRING_VALUE",
 * //       virtualInterfaceName: "STRING_VALUE",
 * //       vlan: Number("int"),
 * //       asn: Number("int"),
 * //       amazonSideAsn: Number("long"),
 * //       authKey: "STRING_VALUE",
 * //       amazonAddress: "STRING_VALUE",
 * //       customerAddress: "STRING_VALUE",
 * //       addressFamily: "ipv4" || "ipv6",
 * //       virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "deleting" || "deleted" || "rejected" || "unknown",
 * //       customerRouterConfig: "STRING_VALUE",
 * //       mtu: Number("int"),
 * //       jumboFrameCapable: true || false,
 * //       virtualGatewayId: "STRING_VALUE",
 * //       directConnectGatewayId: "STRING_VALUE",
 * //       routeFilterPrefixes: [ // RouteFilterPrefixList
 * //         { // RouteFilterPrefix
 * //           cidr: "STRING_VALUE",
 * //         },
 * //       ],
 * //       bgpPeers: [ // BGPPeerList
 * //         { // BGPPeer
 * //           bgpPeerId: "STRING_VALUE",
 * //           asn: Number("int"),
 * //           authKey: "STRING_VALUE",
 * //           addressFamily: "ipv4" || "ipv6",
 * //           amazonAddress: "STRING_VALUE",
 * //           customerAddress: "STRING_VALUE",
 * //           bgpPeerState: "verifying" || "pending" || "available" || "deleting" || "deleted",
 * //           bgpStatus: "up" || "down" || "unknown",
 * //           awsDeviceV2: "STRING_VALUE",
 * //           awsLogicalDeviceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       region: "STRING_VALUE",
 * //       awsDeviceV2: "STRING_VALUE",
 * //       awsLogicalDeviceId: "STRING_VALUE",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       siteLinkEnabled: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeVirtualInterfacesCommandInput - {@link DescribeVirtualInterfacesCommandInput}
 * @returns {@link DescribeVirtualInterfacesCommandOutput}
 * @see {@link DescribeVirtualInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualInterfacesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeVirtualInterfacesCommand extends $Command
  .classBuilder<
    DescribeVirtualInterfacesCommandInput,
    DescribeVirtualInterfacesCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OvertureService", "DescribeVirtualInterfaces", {})
  .n("DirectConnectClient", "DescribeVirtualInterfacesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVirtualInterfacesCommand)
  .de(de_DescribeVirtualInterfacesCommand)
  .build() {}

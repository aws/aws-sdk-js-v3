// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeVirtualInterfacesRequest, VirtualInterfaces } from "../models/models_0";
import { DescribeVirtualInterfaces } from "../schemas/schemas_0";

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
 *          <ul>
 *             <li>
 *                <p>If you're using an <code>asn</code>, the response includes ASN value in both the <code>asn</code> and <code>asnLong</code> fields.</p>
 *             </li>
 *             <li>
 *                <p>If you're using <code>asnLong</code>, the response returns a value of <code>0</code> (zero) for the <code>asn</code> attribute because it exceeds the highest ASN value of 2,147,483,647 that it can support</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeVirtualInterfacesCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeVirtualInterfacesCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeVirtualInterfacesRequest
 *   connectionId: "STRING_VALUE",
 *   virtualInterfaceId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
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
 * //       asnLong: Number("long"),
 * //       amazonSideAsn: Number("long"),
 * //       authKey: "STRING_VALUE",
 * //       amazonAddress: "STRING_VALUE",
 * //       customerAddress: "STRING_VALUE",
 * //       addressFamily: "ipv4" || "ipv6",
 * //       virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "testing" || "deleting" || "deleted" || "rejected" || "unknown",
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
 * //           asnLong: Number("long"),
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
 * //   nextToken: "STRING_VALUE",
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DescribeVirtualInterfaces", {})
  .n("DirectConnectClient", "DescribeVirtualInterfacesCommand")
  .sc(DescribeVirtualInterfaces)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVirtualInterfacesRequest;
      output: VirtualInterfaces;
    };
    sdk: {
      input: DescribeVirtualInterfacesCommandInput;
      output: DescribeVirtualInterfacesCommandOutput;
    };
  };
}

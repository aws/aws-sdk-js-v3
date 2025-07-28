// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePrivateVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import {
  de_CreatePrivateVirtualInterfaceCommand,
  se_CreatePrivateVirtualInterfaceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePrivateVirtualInterfaceCommand}.
 */
export interface CreatePrivateVirtualInterfaceCommandInput extends CreatePrivateVirtualInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link CreatePrivateVirtualInterfaceCommand}.
 */
export interface CreatePrivateVirtualInterfaceCommandOutput extends VirtualInterface, __MetadataBearer {}

/**
 * <p>Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic.
 *       A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW).
 *       Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple
 *       VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface
 *       to a VGW only provides access to a single VPC within the same Region.</p>
 *          <p>Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to
 *       the underlying physical connection if it wasn't updated to support jumbo frames. Updating
 *       the connection disrupts network connectivity for all virtual interfaces associated with
 *       the connection for up to 30 seconds. To check whether your connection supports jumbo
 *       frames, call <a>DescribeConnections</a>. To check whether your virtual
 *       interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreatePrivateVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreatePrivateVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // CreatePrivateVirtualInterfaceRequest
 *   connectionId: "STRING_VALUE", // required
 *   newPrivateVirtualInterface: { // NewPrivateVirtualInterface
 *     virtualInterfaceName: "STRING_VALUE", // required
 *     vlan: Number("int"), // required
 *     asn: Number("int"), // required
 *     mtu: Number("int"),
 *     authKey: "STRING_VALUE",
 *     amazonAddress: "STRING_VALUE",
 *     customerAddress: "STRING_VALUE",
 *     addressFamily: "ipv4" || "ipv6",
 *     virtualGatewayId: "STRING_VALUE",
 *     directConnectGatewayId: "STRING_VALUE",
 *     tags: [ // TagList
 *       { // Tag
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     enableSiteLink: true || false,
 *   },
 * };
 * const command = new CreatePrivateVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // VirtualInterface
 * //   ownerAccount: "STRING_VALUE",
 * //   virtualInterfaceId: "STRING_VALUE",
 * //   location: "STRING_VALUE",
 * //   connectionId: "STRING_VALUE",
 * //   virtualInterfaceType: "STRING_VALUE",
 * //   virtualInterfaceName: "STRING_VALUE",
 * //   vlan: Number("int"),
 * //   asn: Number("int"),
 * //   amazonSideAsn: Number("long"),
 * //   authKey: "STRING_VALUE",
 * //   amazonAddress: "STRING_VALUE",
 * //   customerAddress: "STRING_VALUE",
 * //   addressFamily: "ipv4" || "ipv6",
 * //   virtualInterfaceState: "confirming" || "verifying" || "pending" || "available" || "down" || "testing" || "deleting" || "deleted" || "rejected" || "unknown",
 * //   customerRouterConfig: "STRING_VALUE",
 * //   mtu: Number("int"),
 * //   jumboFrameCapable: true || false,
 * //   virtualGatewayId: "STRING_VALUE",
 * //   directConnectGatewayId: "STRING_VALUE",
 * //   routeFilterPrefixes: [ // RouteFilterPrefixList
 * //     { // RouteFilterPrefix
 * //       cidr: "STRING_VALUE",
 * //     },
 * //   ],
 * //   bgpPeers: [ // BGPPeerList
 * //     { // BGPPeer
 * //       bgpPeerId: "STRING_VALUE",
 * //       asn: Number("int"),
 * //       authKey: "STRING_VALUE",
 * //       addressFamily: "ipv4" || "ipv6",
 * //       amazonAddress: "STRING_VALUE",
 * //       customerAddress: "STRING_VALUE",
 * //       bgpPeerState: "verifying" || "pending" || "available" || "deleting" || "deleted",
 * //       bgpStatus: "up" || "down" || "unknown",
 * //       awsDeviceV2: "STRING_VALUE",
 * //       awsLogicalDeviceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   region: "STRING_VALUE",
 * //   awsDeviceV2: "STRING_VALUE",
 * //   awsLogicalDeviceId: "STRING_VALUE",
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   siteLinkEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param CreatePrivateVirtualInterfaceCommandInput - {@link CreatePrivateVirtualInterfaceCommandInput}
 * @returns {@link CreatePrivateVirtualInterfaceCommandOutput}
 * @see {@link CreatePrivateVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *  <p>A tag key was specified more than once.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have reached the limit on the number of tags that can be assigned.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class CreatePrivateVirtualInterfaceCommand extends $Command
  .classBuilder<
    CreatePrivateVirtualInterfaceCommandInput,
    CreatePrivateVirtualInterfaceCommandOutput,
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
  .s("OvertureService", "CreatePrivateVirtualInterface", {})
  .n("DirectConnectClient", "CreatePrivateVirtualInterfaceCommand")
  .f(void 0, void 0)
  .ser(se_CreatePrivateVirtualInterfaceCommand)
  .de(de_CreatePrivateVirtualInterfaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePrivateVirtualInterfaceRequest;
      output: VirtualInterface;
    };
    sdk: {
      input: CreatePrivateVirtualInterfaceCommandInput;
      output: CreatePrivateVirtualInterfaceCommandOutput;
    };
  };
}

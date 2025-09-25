// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AllocatePrivateVirtualInterfaceRequest, VirtualInterface } from "../models/models_0";
import { AllocatePrivateVirtualInterface } from "../schemas/schemas_2_Virtual";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AllocatePrivateVirtualInterfaceCommand}.
 */
export interface AllocatePrivateVirtualInterfaceCommandInput extends AllocatePrivateVirtualInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link AllocatePrivateVirtualInterfaceCommand}.
 */
export interface AllocatePrivateVirtualInterfaceCommandOutput extends VirtualInterface, __MetadataBearer {}

/**
 * <p>Provisions a private virtual interface to be owned by the specified Amazon Web Services account.</p>
 *          <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>.
 *       Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AllocatePrivateVirtualInterfaceCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AllocatePrivateVirtualInterfaceCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // AllocatePrivateVirtualInterfaceRequest
 *   connectionId: "STRING_VALUE", // required
 *   ownerAccount: "STRING_VALUE", // required
 *   newPrivateVirtualInterfaceAllocation: { // NewPrivateVirtualInterfaceAllocation
 *     virtualInterfaceName: "STRING_VALUE", // required
 *     vlan: Number("int"), // required
 *     asn: Number("int"),
 *     asnLong: Number("long"),
 *     mtu: Number("int"),
 *     authKey: "STRING_VALUE",
 *     amazonAddress: "STRING_VALUE",
 *     addressFamily: "ipv4" || "ipv6",
 *     customerAddress: "STRING_VALUE",
 *     tags: [ // TagList
 *       { // Tag
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new AllocatePrivateVirtualInterfaceCommand(input);
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
 * //   asnLong: Number("long"),
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
 * //       asnLong: Number("long"),
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
 * @param AllocatePrivateVirtualInterfaceCommandInput - {@link AllocatePrivateVirtualInterfaceCommandInput}
 * @returns {@link AllocatePrivateVirtualInterfaceCommandOutput}
 * @see {@link AllocatePrivateVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link AllocatePrivateVirtualInterfaceCommandOutput} for command's `response` shape.
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
export class AllocatePrivateVirtualInterfaceCommand extends $Command
  .classBuilder<
    AllocatePrivateVirtualInterfaceCommandInput,
    AllocatePrivateVirtualInterfaceCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "AllocatePrivateVirtualInterface", {})
  .n("DirectConnectClient", "AllocatePrivateVirtualInterfaceCommand")
  .sc(AllocatePrivateVirtualInterface)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AllocatePrivateVirtualInterfaceRequest;
      output: VirtualInterface;
    };
    sdk: {
      input: AllocatePrivateVirtualInterfaceCommandInput;
      output: AllocatePrivateVirtualInterfaceCommandOutput;
    };
  };
}

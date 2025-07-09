// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTransitGatewayConnectPeerRequest, CreateTransitGatewayConnectPeerResult } from "../models/models_2";
import {
  de_CreateTransitGatewayConnectPeerCommand,
  se_CreateTransitGatewayConnectPeerCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTransitGatewayConnectPeerCommand}.
 */
export interface CreateTransitGatewayConnectPeerCommandInput extends CreateTransitGatewayConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link CreateTransitGatewayConnectPeerCommand}.
 */
export interface CreateTransitGatewayConnectPeerCommandOutput
  extends CreateTransitGatewayConnectPeerResult,
    __MetadataBearer {}

/**
 * <p>Creates a Connect peer for a specified transit gateway Connect attachment between a
 *             transit gateway and an appliance.</p>
 *          <p>The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html#tgw-connect-peer">Connect peers</a>
 *             in the <i>Amazon Web Services Transit Gateways Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayConnectPeerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayConnectPeerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateTransitGatewayConnectPeerRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   TransitGatewayAddress: "STRING_VALUE",
 *   PeerAddress: "STRING_VALUE", // required
 *   BgpOptions: { // TransitGatewayConnectRequestBgpOptions
 *     PeerAsn: Number("long"),
 *   },
 *   InsideCidrBlocks: [ // InsideCidrBlocksStringList // required
 *     "STRING_VALUE",
 *   ],
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new CreateTransitGatewayConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // CreateTransitGatewayConnectPeerResult
 * //   TransitGatewayConnectPeer: { // TransitGatewayConnectPeer
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     TransitGatewayConnectPeerId: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ConnectPeerConfiguration: { // TransitGatewayConnectPeerConfiguration
 * //       TransitGatewayAddress: "STRING_VALUE",
 * //       PeerAddress: "STRING_VALUE",
 * //       InsideCidrBlocks: [ // InsideCidrBlocksStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       Protocol: "gre",
 * //       BgpConfigurations: [ // TransitGatewayAttachmentBgpConfigurationList
 * //         { // TransitGatewayAttachmentBgpConfiguration
 * //           TransitGatewayAsn: Number("long"),
 * //           PeerAsn: Number("long"),
 * //           TransitGatewayAddress: "STRING_VALUE",
 * //           PeerAddress: "STRING_VALUE",
 * //           BgpStatus: "up" || "down",
 * //         },
 * //       ],
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTransitGatewayConnectPeerCommandInput - {@link CreateTransitGatewayConnectPeerCommandInput}
 * @returns {@link CreateTransitGatewayConnectPeerCommandOutput}
 * @see {@link CreateTransitGatewayConnectPeerCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayConnectPeerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateTransitGatewayConnectPeerCommand extends $Command
  .classBuilder<
    CreateTransitGatewayConnectPeerCommandInput,
    CreateTransitGatewayConnectPeerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateTransitGatewayConnectPeer", {})
  .n("EC2Client", "CreateTransitGatewayConnectPeerCommand")
  .f(void 0, void 0)
  .ser(se_CreateTransitGatewayConnectPeerCommand)
  .de(de_CreateTransitGatewayConnectPeerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTransitGatewayConnectPeerRequest;
      output: CreateTransitGatewayConnectPeerResult;
    };
    sdk: {
      input: CreateTransitGatewayConnectPeerCommandInput;
      output: CreateTransitGatewayConnectPeerCommandOutput;
    };
  };
}

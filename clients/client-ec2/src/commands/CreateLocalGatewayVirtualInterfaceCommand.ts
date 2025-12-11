// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateLocalGatewayVirtualInterfaceRequest,
  CreateLocalGatewayVirtualInterfaceResult,
} from "../models/models_1";
import { CreateLocalGatewayVirtualInterface } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocalGatewayVirtualInterfaceCommand}.
 */
export interface CreateLocalGatewayVirtualInterfaceCommandInput extends CreateLocalGatewayVirtualInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocalGatewayVirtualInterfaceCommand}.
 */
export interface CreateLocalGatewayVirtualInterfaceCommandOutput
  extends CreateLocalGatewayVirtualInterfaceResult,
    __MetadataBearer {}

/**
 * <p>Create a virtual interface for a local gateway. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLocalGatewayVirtualInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLocalGatewayVirtualInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateLocalGatewayVirtualInterfaceRequest
 *   LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE", // required
 *   OutpostLagId: "STRING_VALUE", // required
 *   Vlan: Number("int"), // required
 *   LocalAddress: "STRING_VALUE", // required
 *   PeerAddress: "STRING_VALUE", // required
 *   PeerBgpAsn: Number("int"),
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-metering-policy" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "vpc-encryption-control" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-policy" || "ipam-prefix-list-resolver-target" || "capacity-manager-data-export" || "vpn-concentrator",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   PeerBgpAsnExtended: Number("long"),
 * };
 * const command = new CreateLocalGatewayVirtualInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocalGatewayVirtualInterfaceResult
 * //   LocalGatewayVirtualInterface: { // LocalGatewayVirtualInterface
 * //     LocalGatewayVirtualInterfaceId: "STRING_VALUE",
 * //     LocalGatewayId: "STRING_VALUE",
 * //     LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //     LocalGatewayVirtualInterfaceArn: "STRING_VALUE",
 * //     OutpostLagId: "STRING_VALUE",
 * //     Vlan: Number("int"),
 * //     LocalAddress: "STRING_VALUE",
 * //     PeerAddress: "STRING_VALUE",
 * //     LocalBgpAsn: Number("int"),
 * //     PeerBgpAsn: Number("int"),
 * //     PeerBgpAsnExtended: Number("long"),
 * //     OwnerId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ConfigurationState: "pending" || "available" || "deleting" || "deleted",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLocalGatewayVirtualInterfaceCommandInput - {@link CreateLocalGatewayVirtualInterfaceCommandInput}
 * @returns {@link CreateLocalGatewayVirtualInterfaceCommandOutput}
 * @see {@link CreateLocalGatewayVirtualInterfaceCommandInput} for command's `input` shape.
 * @see {@link CreateLocalGatewayVirtualInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateLocalGatewayVirtualInterfaceCommand extends $Command
  .classBuilder<
    CreateLocalGatewayVirtualInterfaceCommandInput,
    CreateLocalGatewayVirtualInterfaceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateLocalGatewayVirtualInterface", {})
  .n("EC2Client", "CreateLocalGatewayVirtualInterfaceCommand")
  .sc(CreateLocalGatewayVirtualInterface)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocalGatewayVirtualInterfaceRequest;
      output: CreateLocalGatewayVirtualInterfaceResult;
    };
    sdk: {
      input: CreateLocalGatewayVirtualInterfaceCommandInput;
      output: CreateLocalGatewayVirtualInterfaceCommandOutput;
    };
  };
}

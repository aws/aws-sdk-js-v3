// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNatGatewayRequest, CreateNatGatewayResult } from "../models/models_2";
import { de_CreateNatGatewayCommand, se_CreateNatGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNatGatewayCommand}.
 */
export interface CreateNatGatewayCommandInput extends CreateNatGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateNatGatewayCommand}.
 */
export interface CreateNatGatewayCommandOutput extends CreateNatGatewayResult, __MetadataBearer {}

/**
 * <p>Creates a NAT gateway in the specified subnet. This action creates a network interface
 *           in the specified subnet with a private IP address from the IP address range of the
 *           subnet. You can create either a public NAT gateway or a private NAT gateway.</p>
 *          <p>With a public NAT gateway, internet-bound traffic from a private subnet can be routed
 *           to the NAT gateway, so that instances in a private subnet can connect to the internet.</p>
 *          <p>With a private NAT gateway, private communication is routed across VPCs and on-premises
 *             networks through a transit gateway or virtual private gateway. Common use cases include
 *             running large workloads behind a small pool of allowlisted IPv4 addresses, preserving
 *             private IPv4 addresses, and communicating between overlapping networks.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">NAT gateways</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <important>
 *             <p>When you create a public NAT gateway and assign it an EIP or secondary EIPs,
 *           the network border group of the EIPs must match the network border group of the Availability Zone (AZ)
 *           that the public NAT gateway is in. If it's not the same, the NAT gateway will fail to launch.
 *           You can see the network border group for the subnet's AZ by viewing the details of the subnet.
 *           Similarly, you can view the network border group of an EIP by viewing the details of the EIP address.
 *           For more information about network border groups and EIPs, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/WorkWithEIPs.html">Allocate an Elastic IP address</a>
 *           in the <i>Amazon VPC User Guide</i>.
 *       </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNatGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNatGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateNatGatewayRequest
 *   AllocationId: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   SubnetId: "STRING_VALUE", // required
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
 *   ConnectivityType: "private" || "public",
 *   PrivateIpAddress: "STRING_VALUE",
 *   SecondaryAllocationIds: [ // AllocationIdList
 *     "STRING_VALUE",
 *   ],
 *   SecondaryPrivateIpAddresses: [ // IpList
 *     "STRING_VALUE",
 *   ],
 *   SecondaryPrivateIpAddressCount: Number("int"),
 * };
 * const command = new CreateNatGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateNatGatewayResult
 * //   ClientToken: "STRING_VALUE",
 * //   NatGateway: { // NatGateway
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     DeleteTime: new Date("TIMESTAMP"),
 * //     FailureCode: "STRING_VALUE",
 * //     FailureMessage: "STRING_VALUE",
 * //     NatGatewayAddresses: [ // NatGatewayAddressList
 * //       { // NatGatewayAddress
 * //         AllocationId: "STRING_VALUE",
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //         PrivateIp: "STRING_VALUE",
 * //         PublicIp: "STRING_VALUE",
 * //         AssociationId: "STRING_VALUE",
 * //         IsPrimary: true || false,
 * //         FailureMessage: "STRING_VALUE",
 * //         Status: "assigning" || "unassigning" || "associating" || "disassociating" || "succeeded" || "failed",
 * //       },
 * //     ],
 * //     NatGatewayId: "STRING_VALUE",
 * //     ProvisionedBandwidth: { // ProvisionedBandwidth
 * //       ProvisionTime: new Date("TIMESTAMP"),
 * //       Provisioned: "STRING_VALUE",
 * //       RequestTime: new Date("TIMESTAMP"),
 * //       Requested: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //     },
 * //     State: "pending" || "failed" || "available" || "deleting" || "deleted",
 * //     SubnetId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ConnectivityType: "private" || "public",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNatGatewayCommandInput - {@link CreateNatGatewayCommandInput}
 * @returns {@link CreateNatGatewayCommandOutput}
 * @see {@link CreateNatGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateNatGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a NAT gateway
 * ```javascript
 * // This example creates a NAT gateway in subnet subnet-1a2b3c4d and associates an Elastic IP address with the allocation ID eipalloc-37fc1a52 with the NAT gateway.
 * const input = {
 *   AllocationId: "eipalloc-37fc1a52",
 *   SubnetId: "subnet-1a2b3c4d"
 * };
 * const command = new CreateNatGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NatGateway: {
 *     CreateTime: "2015-12-17T12:45:26.732Z",
 *     NatGatewayAddresses: [
 *       {
 *         AllocationId: "eipalloc-37fc1a52"
 *       }
 *     ],
 *     NatGatewayId: "nat-08d48af2a8e83edfd",
 *     State: "pending",
 *     SubnetId: "subnet-1a2b3c4d",
 *     VpcId: "vpc-1122aabb"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateNatGatewayCommand extends $Command
  .classBuilder<
    CreateNatGatewayCommandInput,
    CreateNatGatewayCommandOutput,
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
  .s("AmazonEC2", "CreateNatGateway", {})
  .n("EC2Client", "CreateNatGatewayCommand")
  .f(void 0, void 0)
  .ser(se_CreateNatGatewayCommand)
  .de(de_CreateNatGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNatGatewayRequest;
      output: CreateNatGatewayResult;
    };
    sdk: {
      input: CreateNatGatewayCommandInput;
      output: CreateNatGatewayCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSubnetRequest, CreateSubnetResult } from "../models/models_2";
import { de_CreateSubnetCommand, se_CreateSubnetCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubnetCommand}.
 */
export interface CreateSubnetCommandInput extends CreateSubnetRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubnetCommand}.
 */
export interface CreateSubnetCommandOutput extends CreateSubnetResult, __MetadataBearer {}

/**
 * <p>Creates a subnet in the specified VPC. For an IPv4 only subnet, specify an IPv4 CIDR block.
 *             If the VPC has an IPv6 CIDR block, you can create an IPv6 only subnet or a dual stack subnet instead.
 *             For an IPv6 only subnet, specify an IPv6 CIDR block. For a dual stack subnet, specify both
 *             an IPv4 CIDR block and an IPv6 CIDR block.</p>
 *          <p>A subnet CIDR block must not overlap the CIDR block of an existing subnet in the VPC.
 *             After you create a subnet, you can't change its CIDR block.</p>
 *          <p>The allowed size for an IPv4 subnet is between a /28 netmask (16 IP addresses) and
 *             a /16 netmask (65,536 IP addresses). Amazon Web Services reserves both the first four and
 *             the last IPv4 address in each subnet's CIDR block. They're not available for your use.</p>
 *          <p>If you've associated an IPv6 CIDR block with your VPC, you can associate an IPv6 CIDR
 *             block with a subnet when you create it. </p>
 *          <p>If you add more than one subnet to a VPC, they're set up in a star topology with a
 *             logical router in the middle.</p>
 *          <p>When you stop an instance in a subnet, it retains its private IPv4 address. It's
 *             therefore possible to have a subnet with no running instances (they're all stopped), but
 *             no remaining IP addresses available.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html">Subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateSubnetRequest
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
 *   AvailabilityZone: "STRING_VALUE",
 *   AvailabilityZoneId: "STRING_VALUE",
 *   CidrBlock: "STRING_VALUE",
 *   Ipv6CidrBlock: "STRING_VALUE",
 *   OutpostArn: "STRING_VALUE",
 *   VpcId: "STRING_VALUE", // required
 *   Ipv6Native: true || false,
 *   Ipv4IpamPoolId: "STRING_VALUE",
 *   Ipv4NetmaskLength: Number("int"),
 *   Ipv6IpamPoolId: "STRING_VALUE",
 *   Ipv6NetmaskLength: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new CreateSubnetCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubnetResult
 * //   Subnet: { // Subnet
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     EnableLniAtDeviceIndex: Number("int"),
 * //     MapCustomerOwnedIpOnLaunch: true || false,
 * //     CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     AssignIpv6AddressOnCreation: true || false,
 * //     Ipv6CidrBlockAssociationSet: [ // SubnetIpv6CidrBlockAssociationSet
 * //       { // SubnetIpv6CidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         Ipv6CidrBlock: "STRING_VALUE",
 * //         Ipv6CidrBlockState: { // SubnetCidrBlockState
 * //           State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //         Ipv6AddressAttribute: "public" || "private",
 * //         IpSource: "amazon" || "byoip" || "none",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SubnetArn: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     EnableDns64: true || false,
 * //     Ipv6Native: true || false,
 * //     PrivateDnsNameOptionsOnLaunch: { // PrivateDnsNameOptionsOnLaunch
 * //       HostnameType: "ip-name" || "resource-name",
 * //       EnableResourceNameDnsARecord: true || false,
 * //       EnableResourceNameDnsAAAARecord: true || false,
 * //     },
 * //     BlockPublicAccessStates: { // BlockPublicAccessStates
 * //       InternetGatewayBlockMode: "off" || "block-bidirectional" || "block-ingress",
 * //     },
 * //     Type: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     State: "pending" || "available" || "unavailable" || "failed" || "failed-insufficient-capacity",
 * //     VpcId: "STRING_VALUE",
 * //     CidrBlock: "STRING_VALUE",
 * //     AvailableIpAddressCount: Number("int"),
 * //     AvailabilityZone: "STRING_VALUE",
 * //     DefaultForAz: true || false,
 * //     MapPublicIpOnLaunch: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSubnetCommandInput - {@link CreateSubnetCommandInput}
 * @returns {@link CreateSubnetCommandOutput}
 * @see {@link CreateSubnetCommandInput} for command's `input` shape.
 * @see {@link CreateSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a subnet
 * ```javascript
 * // This example creates a subnet in the specified VPC with the specified CIDR block. We recommend that you let us select an Availability Zone for you.
 * const input = {
 *   CidrBlock: "10.0.1.0/24",
 *   VpcId: "vpc-a01106c2"
 * };
 * const command = new CreateSubnetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Subnet: {
 *     AvailabilityZone: "us-west-2c",
 *     AvailableIpAddressCount: 251,
 *     CidrBlock: "10.0.1.0/24",
 *     State: "pending",
 *     SubnetId: "subnet-9d4a7b6c",
 *     VpcId: "vpc-a01106c2"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSubnetCommand extends $Command
  .classBuilder<
    CreateSubnetCommandInput,
    CreateSubnetCommandOutput,
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
  .s("AmazonEC2", "CreateSubnet", {})
  .n("EC2Client", "CreateSubnetCommand")
  .f(void 0, void 0)
  .ser(se_CreateSubnetCommand)
  .de(de_CreateSubnetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubnetRequest;
      output: CreateSubnetResult;
    };
    sdk: {
      input: CreateSubnetCommandInput;
      output: CreateSubnetCommandOutput;
    };
  };
}

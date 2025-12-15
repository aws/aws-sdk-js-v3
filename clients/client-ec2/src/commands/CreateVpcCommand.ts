// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateVpcRequest, CreateVpcResult } from "../models/models_2";
import { CreateVpc$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcCommand}.
 */
export interface CreateVpcCommandInput extends CreateVpcRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcCommand}.
 */
export interface CreateVpcCommandOutput extends CreateVpcResult, __MetadataBearer {}

/**
 * <p>Creates a VPC with the specified CIDR blocks.</p>
 *          <p>A VPC must have an associated IPv4 CIDR block. You can choose an IPv4 CIDR block or an
 *             IPAM-allocated IPv4 CIDR block. You can optionally associate an IPv6 CIDR block with a
 *             VPC. You can choose an IPv6 CIDR block, an Amazon-provided IPv6 CIDR block, an
 *             IPAM-allocated IPv6 CIDR block, or an IPv6 CIDR block that you brought to Amazon Web Services. For
 *             more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html">IP addressing for your VPCs and
 *                 subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <p>By default, each instance that you launch in the VPC has the default DHCP options, which
 * 			include only a default DNS server that we provide (AmazonProvidedDNS). For more
 * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP option sets</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <p>You can specify DNS options and tenancy for a VPC when you create it. You can't change
 *           the tenancy of a VPC after you create it. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/create-vpc-options.html">VPC configuration options</a> in the
 *           <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateVpcRequest
 *   CidrBlock: "STRING_VALUE",
 *   Ipv6Pool: "STRING_VALUE",
 *   Ipv6CidrBlock: "STRING_VALUE",
 *   Ipv4IpamPoolId: "STRING_VALUE",
 *   Ipv4NetmaskLength: Number("int"),
 *   Ipv6IpamPoolId: "STRING_VALUE",
 *   Ipv6NetmaskLength: Number("int"),
 *   Ipv6CidrBlockNetworkBorderGroup: "STRING_VALUE",
 *   VpcEncryptionControl: { // VpcEncryptionControlConfiguration
 *     Mode: "monitor" || "enforce", // required
 *     InternetGatewayExclusion: "enable" || "disable",
 *     EgressOnlyInternetGatewayExclusion: "enable" || "disable",
 *     NatGatewayExclusion: "enable" || "disable",
 *     VirtualPrivateGatewayExclusion: "enable" || "disable",
 *     VpcPeeringExclusion: "enable" || "disable",
 *     LambdaExclusion: "enable" || "disable",
 *     VpcLatticeExclusion: "enable" || "disable",
 *     ElasticFileSystemExclusion: "enable" || "disable",
 *   },
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
 *   InstanceTenancy: "default" || "dedicated" || "host",
 *   AmazonProvidedIpv6CidrBlock: true || false,
 * };
 * const command = new CreateVpcCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcResult
 * //   Vpc: { // Vpc
 * //     OwnerId: "STRING_VALUE",
 * //     InstanceTenancy: "default" || "dedicated" || "host",
 * //     Ipv6CidrBlockAssociationSet: [ // VpcIpv6CidrBlockAssociationSet
 * //       { // VpcIpv6CidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         Ipv6CidrBlock: "STRING_VALUE",
 * //         Ipv6CidrBlockState: { // VpcCidrBlockState
 * //           State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //         NetworkBorderGroup: "STRING_VALUE",
 * //         Ipv6Pool: "STRING_VALUE",
 * //         Ipv6AddressAttribute: "public" || "private",
 * //         IpSource: "amazon" || "byoip" || "none",
 * //       },
 * //     ],
 * //     CidrBlockAssociationSet: [ // VpcCidrBlockAssociationSet
 * //       { // VpcCidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         CidrBlock: "STRING_VALUE",
 * //         CidrBlockState: {
 * //           State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     IsDefault: true || false,
 * //     EncryptionControl: { // VpcEncryptionControl
 * //       VpcId: "STRING_VALUE",
 * //       VpcEncryptionControlId: "STRING_VALUE",
 * //       Mode: "monitor" || "enforce",
 * //       State: "enforce-in-progress" || "monitor-in-progress" || "enforce-failed" || "monitor-failed" || "deleting" || "deleted" || "available" || "creating" || "delete-failed",
 * //       StateMessage: "STRING_VALUE",
 * //       ResourceExclusions: { // VpcEncryptionControlExclusions
 * //         InternetGateway: { // VpcEncryptionControlExclusion
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         EgressOnlyInternetGateway: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         NatGateway: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         VirtualPrivateGateway: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         VpcPeering: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         Lambda: "<VpcEncryptionControlExclusion>",
 * //         VpcLattice: "<VpcEncryptionControlExclusion>",
 * //         ElasticFileSystem: "<VpcEncryptionControlExclusion>",
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     BlockPublicAccessStates: { // BlockPublicAccessStates
 * //       InternetGatewayBlockMode: "off" || "block-bidirectional" || "block-ingress",
 * //     },
 * //     VpcId: "STRING_VALUE",
 * //     State: "pending" || "available",
 * //     CidrBlock: "STRING_VALUE",
 * //     DhcpOptionsId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVpcCommandInput - {@link CreateVpcCommandInput}
 * @returns {@link CreateVpcCommandOutput}
 * @see {@link CreateVpcCommandInput} for command's `input` shape.
 * @see {@link CreateVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a VPC
 * ```javascript
 * // This example creates a VPC with the specified CIDR block.
 * const input = {
 *   CidrBlock: "10.0.0.0/16"
 * };
 * const command = new CreateVpcCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Vpc: {
 *     CidrBlock: "10.0.0.0/16",
 *     DhcpOptionsId: "dopt-7a8b9c2d",
 *     InstanceTenancy: "default",
 *     State: "pending",
 *     VpcId: "vpc-a01106c2"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateVpcCommand extends $Command
  .classBuilder<
    CreateVpcCommandInput,
    CreateVpcCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateVpc", {})
  .n("EC2Client", "CreateVpcCommand")
  .sc(CreateVpc$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcRequest;
      output: CreateVpcResult;
    };
    sdk: {
      input: CreateVpcCommandInput;
      output: CreateVpcCommandOutput;
    };
  };
}

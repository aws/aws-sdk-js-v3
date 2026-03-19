// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSecondarySubnetRequest, CreateSecondarySubnetResult } from "../models/models_2";
import { CreateSecondarySubnet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSecondarySubnetCommand}.
 */
export interface CreateSecondarySubnetCommandInput extends CreateSecondarySubnetRequest {}
/**
 * @public
 *
 * The output of {@link CreateSecondarySubnetCommand}.
 */
export interface CreateSecondarySubnetCommandOutput extends CreateSecondarySubnetResult, __MetadataBearer {}

/**
 * <p>Creates a secondary subnet in a secondary network.</p>
 *          <p>A secondary subnet CIDR block must not overlap with the CIDR block of an existing secondary subnet in the secondary network. After you create a secondary subnet, you can't change its CIDR block.</p>
 *          <p>The allowed size for a secondary subnet CIDR block is between /28 netmask (16 IP addresses) and /12 netmask (1,048,576 IP addresses). Amazon reserves the first four IP addresses and the last IP address in each secondary subnet for internal use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSecondarySubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSecondarySubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateSecondarySubnetRequest
 *   ClientToken: "STRING_VALUE",
 *   AvailabilityZone: "STRING_VALUE",
 *   AvailabilityZoneId: "STRING_VALUE",
 *   DryRun: true || false,
 *   Ipv4CidrBlock: "STRING_VALUE", // required
 *   SecondaryNetworkId: "STRING_VALUE", // required
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-metering-policy" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "vpc-encryption-control" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-policy" || "ipam-prefix-list-resolver-target" || "secondary-interface" || "secondary-network" || "secondary-subnet" || "capacity-manager-data-export" || "vpn-concentrator",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateSecondarySubnetCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecondarySubnetResult
 * //   SecondarySubnet: { // SecondarySubnet
 * //     SecondarySubnetId: "STRING_VALUE",
 * //     SecondarySubnetArn: "STRING_VALUE",
 * //     SecondaryNetworkId: "STRING_VALUE",
 * //     SecondaryNetworkType: "rdma",
 * //     OwnerId: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     Ipv4CidrBlockAssociations: [ // SecondarySubnetIpv4CidrBlockAssociationList
 * //       { // SecondarySubnetIpv4CidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         CidrBlock: "STRING_VALUE",
 * //         State: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated" || "disassociation-failed",
 * //         StateReason: "STRING_VALUE",
 * //       },
 * //     ],
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //     StateReason: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSecondarySubnetCommandInput - {@link CreateSecondarySubnetCommandInput}
 * @returns {@link CreateSecondarySubnetCommandOutput}
 * @see {@link CreateSecondarySubnetCommandInput} for command's `input` shape.
 * @see {@link CreateSecondarySubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a secondary subnet
 * ```javascript
 * // This example creates a secondary subnet with a /24 CIDR block in the specified secondary network and Availability Zone.
 * const input = {
 *   AvailabilityZoneId: "use2-az1",
 *   ClientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   Ipv4CidrBlock: "10.0.0.0/24",
 *   SecondaryNetworkId: "sn-0123456789abcdef0",
 *   TagSpecifications: [
 *     {
 *       ResourceType: "secondary-subnet",
 *       Tags: [
 *         {
 *           Key: "Name",
 *           Value: "Prod Secondary Subnet"
 *         },
 *         {
 *           Key: "Environment",
 *           Value: "Production"
 *         }
 *       ]
 *     }
 *   ]
 * };
 * const command = new CreateSecondarySubnetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ClientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   SecondarySubnet: {
 *     AvailabilityZone: "us-east-2a",
 *     AvailabilityZoneId: "use2-az1",
 *     Ipv4CidrBlockAssociations: [
 *       {
 *         AssociationId: "ss-cidr-assoc-56789901234abcdef0",
 *         CidrBlock: "10.0.0.0/24",
 *         State: "associating"
 *       }
 *     ],
 *     OwnerId: "123456789012",
 *     SecondaryNetworkId: "sn-0123456789abcdef0",
 *     SecondaryNetworkType: "rdma",
 *     SecondarySubnetArn: "arn:aws:ec2:us-east-2:123456789012:secondary-subnet/ss-0123456789abcdef0",
 *     SecondarySubnetId: "ss-0123456789abcdef0",
 *     State: "create-in-progress",
 *     Tags: [
 *       {
 *         Key: "Name",
 *         Value: "Prod Secondary Subnet"
 *       },
 *       {
 *         Key: "Environment",
 *         Value: "Production"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSecondarySubnetCommand extends $Command
  .classBuilder<
    CreateSecondarySubnetCommandInput,
    CreateSecondarySubnetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateSecondarySubnet", {})
  .n("EC2Client", "CreateSecondarySubnetCommand")
  .sc(CreateSecondarySubnet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSecondarySubnetRequest;
      output: CreateSecondarySubnetResult;
    };
    sdk: {
      input: CreateSecondarySubnetCommandInput;
      output: CreateSecondarySubnetCommandOutput;
    };
  };
}

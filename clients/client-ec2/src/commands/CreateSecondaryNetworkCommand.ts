// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSecondaryNetworkRequest, CreateSecondaryNetworkResult } from "../models/models_2";
import { CreateSecondaryNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSecondaryNetworkCommand}.
 */
export interface CreateSecondaryNetworkCommandInput extends CreateSecondaryNetworkRequest {}
/**
 * @public
 *
 * The output of {@link CreateSecondaryNetworkCommand}.
 */
export interface CreateSecondaryNetworkCommandOutput extends CreateSecondaryNetworkResult, __MetadataBearer {}

/**
 * <p>Creates a secondary network.</p>
 *          <p>The allowed size for a secondary network CIDR block is between /28 netmask (16 IP addresses) and /12 netmask (1,048,576 IP addresses).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSecondaryNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSecondaryNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateSecondaryNetworkRequest
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   Ipv4CidrBlock: "STRING_VALUE", // required
 *   NetworkType: "rdma", // required
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
 * const command = new CreateSecondaryNetworkCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecondaryNetworkResult
 * //   SecondaryNetwork: { // SecondaryNetwork
 * //     SecondaryNetworkId: "STRING_VALUE",
 * //     SecondaryNetworkArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     Type: "rdma",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //     StateReason: "STRING_VALUE",
 * //     Ipv4CidrBlockAssociations: [ // SecondaryNetworkIpv4CidrBlockAssociationList
 * //       { // SecondaryNetworkIpv4CidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         CidrBlock: "STRING_VALUE",
 * //         State: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated" || "disassociation-failed",
 * //         StateReason: "STRING_VALUE",
 * //       },
 * //     ],
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
 * @param CreateSecondaryNetworkCommandInput - {@link CreateSecondaryNetworkCommandInput}
 * @returns {@link CreateSecondaryNetworkCommandOutput}
 * @see {@link CreateSecondaryNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateSecondaryNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a secondary network
 * ```javascript
 * // This example creates a rdma secondary network with a /16 CIDR block.
 * const input = {
 *   ClientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   Ipv4CidrBlock: "10.0.0.0/16",
 *   NetworkType: "rdma",
 *   TagSpecifications: [
 *     {
 *       ResourceType: "secondary-network",
 *       Tags: [
 *         {
 *           Key: "Name",
 *           Value: "Prod Secondary Network"
 *         }
 *       ]
 *     }
 *   ]
 * };
 * const command = new CreateSecondaryNetworkCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ClientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   SecondaryNetwork: {
 *     Ipv4CidrBlockAssociations: [
 *       {
 *         AssociationId: "sn-cidr-assoc-56789901234abcdef0",
 *         CidrBlock: "10.0.0.0/16",
 *         State: "associating"
 *       }
 *     ],
 *     OwnerId: "123456789012",
 *     SecondaryNetworkArn: "arn:aws:ec2:us-east-2:123456789012:secondary-network/sn-0123456789abcdef0",
 *     SecondaryNetworkId: "sn-0123456789abcdef0",
 *     State: "create-in-progress",
 *     Tags: [
 *       {
 *         Key: "Name",
 *         Value: "Prod Secondary Network"
 *       }
 *     ],
 *     Type: "rdma"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSecondaryNetworkCommand extends $Command
  .classBuilder<
    CreateSecondaryNetworkCommandInput,
    CreateSecondaryNetworkCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateSecondaryNetwork", {})
  .n("EC2Client", "CreateSecondaryNetworkCommand")
  .sc(CreateSecondaryNetwork$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSecondaryNetworkRequest;
      output: CreateSecondaryNetworkResult;
    };
    sdk: {
      input: CreateSecondaryNetworkCommandInput;
      output: CreateSecondaryNetworkCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpcPeeringConnectionRequest, CreateVpcPeeringConnectionResult } from "../models/models_3";
import { de_CreateVpcPeeringConnectionCommand, se_CreateVpcPeeringConnectionCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcPeeringConnectionCommand}.
 */
export interface CreateVpcPeeringConnectionCommandInput extends CreateVpcPeeringConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcPeeringConnectionCommand}.
 */
export interface CreateVpcPeeringConnectionCommandOutput extends CreateVpcPeeringConnectionResult, __MetadataBearer {}

/**
 * <p>Requests a VPC peering connection between two VPCs: a requester VPC that you own and
 * 		  an accepter VPC with which to create the connection. The accepter VPC can belong to
 * 		  another Amazon Web Services account and can be in a different Region to the requester VPC.
 *           The requester VPC and accepter VPC cannot have overlapping CIDR blocks.</p>
 *          <note>
 *             <p>Limitations and rules apply to a VPC peering connection. For more information, see
 *           the <a href="https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html#vpc-peering-limitations">VPC peering limitations</a> in the <i>VPC Peering Guide</i>.</p>
 *          </note>
 *          <p>The owner of the accepter VPC must accept the peering request to activate the peering
 *             connection. The VPC peering connection request expires after 7 days, after which it
 *             cannot be accepted or rejected.</p>
 *          <p>If you create a VPC peering connection request between VPCs with overlapping CIDR
 *             blocks, the VPC peering connection has a status of <code>failed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpcPeeringConnectionRequest
 *   PeerRegion: "STRING_VALUE",
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
 *   VpcId: "STRING_VALUE", // required
 *   PeerVpcId: "STRING_VALUE",
 *   PeerOwnerId: "STRING_VALUE",
 * };
 * const command = new CreateVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcPeeringConnectionResult
 * //   VpcPeeringConnection: { // VpcPeeringConnection
 * //     AccepterVpcInfo: { // VpcPeeringConnectionVpcInfo
 * //       CidrBlock: "STRING_VALUE",
 * //       Ipv6CidrBlockSet: [ // Ipv6CidrBlockSet
 * //         { // Ipv6CidrBlock
 * //           Ipv6CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CidrBlockSet: [ // CidrBlockSet
 * //         { // CidrBlock
 * //           CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //       PeeringOptions: { // VpcPeeringConnectionOptionsDescription
 * //         AllowDnsResolutionFromRemoteVpc: true || false,
 * //         AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //         AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //       },
 * //       VpcId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     ExpirationTime: new Date("TIMESTAMP"),
 * //     RequesterVpcInfo: {
 * //       CidrBlock: "STRING_VALUE",
 * //       Ipv6CidrBlockSet: [
 * //         {
 * //           Ipv6CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CidrBlockSet: [
 * //         {
 * //           CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //       PeeringOptions: {
 * //         AllowDnsResolutionFromRemoteVpc: true || false,
 * //         AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //         AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //       },
 * //       VpcId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     Status: { // VpcPeeringConnectionStateReason
 * //       Code: "initiating-request" || "pending-acceptance" || "active" || "deleted" || "rejected" || "failed" || "expired" || "provisioning" || "deleting",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VpcPeeringConnectionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVpcPeeringConnectionCommandInput - {@link CreateVpcPeeringConnectionCommandInput}
 * @returns {@link CreateVpcPeeringConnectionCommandOutput}
 * @see {@link CreateVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateVpcPeeringConnectionCommand extends $Command
  .classBuilder<
    CreateVpcPeeringConnectionCommandInput,
    CreateVpcPeeringConnectionCommandOutput,
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
  .s("AmazonEC2", "CreateVpcPeeringConnection", {})
  .n("EC2Client", "CreateVpcPeeringConnectionCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpcPeeringConnectionCommand)
  .de(de_CreateVpcPeeringConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcPeeringConnectionRequest;
      output: CreateVpcPeeringConnectionResult;
    };
    sdk: {
      input: CreateVpcPeeringConnectionCommandInput;
      output: CreateVpcPeeringConnectionCommandOutput;
    };
  };
}

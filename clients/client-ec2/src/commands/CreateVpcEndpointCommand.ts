// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpcEndpointRequest } from "../models/models_2";
import { CreateVpcEndpointResult } from "../models/models_3";
import { de_CreateVpcEndpointCommand, se_CreateVpcEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcEndpointCommand}.
 */
export interface CreateVpcEndpointCommandInput extends CreateVpcEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcEndpointCommand}.
 */
export interface CreateVpcEndpointCommandOutput extends CreateVpcEndpointResult, __MetadataBearer {}

/**
 * <p>Creates a VPC endpoint. A VPC endpoint provides a private connection between the
 *             specified VPC and the specified endpoint service. You can use an endpoint service
 *             provided by Amazon Web Services, an Amazon Web Services Marketplace Partner, or another
 *             Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/">Amazon Web Services PrivateLink User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpcEndpointRequest
 *   DryRun: true || false,
 *   VpcEndpointType: "Interface" || "Gateway" || "GatewayLoadBalancer" || "Resource" || "ServiceNetwork",
 *   VpcId: "STRING_VALUE", // required
 *   ServiceName: "STRING_VALUE",
 *   PolicyDocument: "STRING_VALUE",
 *   RouteTableIds: [ // VpcEndpointRouteTableIdList
 *     "STRING_VALUE",
 *   ],
 *   SubnetIds: [ // VpcEndpointSubnetIdList
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroupIds: [ // VpcEndpointSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   IpAddressType: "ipv4" || "dualstack" || "ipv6",
 *   DnsOptions: { // DnsOptionsSpecification
 *     DnsRecordIpType: "ipv4" || "dualstack" || "ipv6" || "service-defined",
 *     PrivateDnsOnlyForInboundResolverEndpoint: true || false,
 *   },
 *   ClientToken: "STRING_VALUE",
 *   PrivateDnsEnabled: true || false,
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
 *   SubnetConfigurations: [ // SubnetConfigurationsList
 *     { // SubnetConfiguration
 *       SubnetId: "STRING_VALUE",
 *       Ipv4: "STRING_VALUE",
 *       Ipv6: "STRING_VALUE",
 *     },
 *   ],
 *   ServiceNetworkArn: "STRING_VALUE",
 *   ResourceConfigurationArn: "STRING_VALUE",
 *   ServiceRegion: "STRING_VALUE",
 * };
 * const command = new CreateVpcEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcEndpointResult
 * //   VpcEndpoint: { // VpcEndpoint
 * //     VpcEndpointId: "STRING_VALUE",
 * //     VpcEndpointType: "Interface" || "Gateway" || "GatewayLoadBalancer" || "Resource" || "ServiceNetwork",
 * //     VpcId: "STRING_VALUE",
 * //     ServiceName: "STRING_VALUE",
 * //     State: "PendingAcceptance" || "Pending" || "Available" || "Deleting" || "Deleted" || "Rejected" || "Failed" || "Expired" || "Partial",
 * //     PolicyDocument: "STRING_VALUE",
 * //     RouteTableIds: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     SubnetIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Groups: [ // GroupIdentifierSet
 * //       { // SecurityGroupIdentifier
 * //         GroupId: "STRING_VALUE",
 * //         GroupName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IpAddressType: "ipv4" || "dualstack" || "ipv6",
 * //     DnsOptions: { // DnsOptions
 * //       DnsRecordIpType: "ipv4" || "dualstack" || "ipv6" || "service-defined",
 * //       PrivateDnsOnlyForInboundResolverEndpoint: true || false,
 * //     },
 * //     PrivateDnsEnabled: true || false,
 * //     RequesterManaged: true || false,
 * //     NetworkInterfaceIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     DnsEntries: [ // DnsEntrySet
 * //       { // DnsEntry
 * //         DnsName: "STRING_VALUE",
 * //         HostedZoneId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreationTimestamp: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OwnerId: "STRING_VALUE",
 * //     LastError: { // LastError
 * //       Message: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //     },
 * //     Ipv4Prefixes: [ // SubnetIpPrefixesList
 * //       { // SubnetIpPrefixes
 * //         SubnetId: "STRING_VALUE",
 * //         IpPrefixes: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     Ipv6Prefixes: [
 * //       {
 * //         SubnetId: "STRING_VALUE",
 * //         IpPrefixes: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     FailureReason: "STRING_VALUE",
 * //     ServiceNetworkArn: "STRING_VALUE",
 * //     ResourceConfigurationArn: "STRING_VALUE",
 * //     ServiceRegion: "STRING_VALUE",
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVpcEndpointCommandInput - {@link CreateVpcEndpointCommandInput}
 * @returns {@link CreateVpcEndpointCommandOutput}
 * @see {@link CreateVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateVpcEndpointCommand extends $Command
  .classBuilder<
    CreateVpcEndpointCommandInput,
    CreateVpcEndpointCommandOutput,
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
  .s("AmazonEC2", "CreateVpcEndpoint", {})
  .n("EC2Client", "CreateVpcEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpcEndpointCommand)
  .de(de_CreateVpcEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcEndpointRequest;
      output: CreateVpcEndpointResult;
    };
    sdk: {
      input: CreateVpcEndpointCommandInput;
      output: CreateVpcEndpointCommandOutput;
    };
  };
}

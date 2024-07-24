// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNetworkInterfacesRequest, DescribeNetworkInterfacesResult } from "../models/models_4";
import { de_DescribeNetworkInterfacesCommand, se_DescribeNetworkInterfacesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInterfacesCommand}.
 */
export interface DescribeNetworkInterfacesCommandInput extends DescribeNetworkInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInterfacesCommand}.
 */
export interface DescribeNetworkInterfacesCommandOutput extends DescribeNetworkInterfacesResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your network interfaces.</p>
 *          <p>If you have a large number of network interfaces, the operation fails unless
 *            you use pagination or one of the following filters: <code>group-id</code>,
 *            <code>mac-address</code>, <code>private-dns-name</code>, <code>private-ip-address</code>,
 *            <code>private-dns-name</code>, <code>subnet-id</code>, or <code>vpc-id</code>.</p>
 *          <important>
 *             <p>We strongly recommend using only paginated requests. Unpaginated requests are
 *                susceptible to throttling and timeouts.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfacesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfacesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInterfacesRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   NetworkInterfaceIds: [ // NetworkInterfaceIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeNetworkInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInterfacesResult
 * //   NetworkInterfaces: [ // NetworkInterfaceList
 * //     { // NetworkInterface
 * //       Association: { // NetworkInterfaceAssociation
 * //         AllocationId: "STRING_VALUE",
 * //         AssociationId: "STRING_VALUE",
 * //         IpOwnerId: "STRING_VALUE",
 * //         PublicDnsName: "STRING_VALUE",
 * //         PublicIp: "STRING_VALUE",
 * //         CustomerOwnedIp: "STRING_VALUE",
 * //         CarrierIp: "STRING_VALUE",
 * //       },
 * //       Attachment: { // NetworkInterfaceAttachment
 * //         AttachTime: new Date("TIMESTAMP"),
 * //         AttachmentId: "STRING_VALUE",
 * //         DeleteOnTermination: true || false,
 * //         DeviceIndex: Number("int"),
 * //         NetworkCardIndex: Number("int"),
 * //         InstanceId: "STRING_VALUE",
 * //         InstanceOwnerId: "STRING_VALUE",
 * //         Status: "attaching" || "attached" || "detaching" || "detached",
 * //         EnaSrdSpecification: { // AttachmentEnaSrdSpecification
 * //           EnaSrdEnabled: true || false,
 * //           EnaSrdUdpSpecification: { // AttachmentEnaSrdUdpSpecification
 * //             EnaSrdUdpEnabled: true || false,
 * //           },
 * //         },
 * //       },
 * //       AvailabilityZone: "STRING_VALUE",
 * //       ConnectionTrackingConfiguration: { // ConnectionTrackingConfiguration
 * //         TcpEstablishedTimeout: Number("int"),
 * //         UdpStreamTimeout: Number("int"),
 * //         UdpTimeout: Number("int"),
 * //       },
 * //       Description: "STRING_VALUE",
 * //       Groups: [ // GroupIdentifierList
 * //         { // GroupIdentifier
 * //           GroupName: "STRING_VALUE",
 * //           GroupId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InterfaceType: "interface" || "natGateway" || "efa" || "trunk" || "load_balancer" || "network_load_balancer" || "vpc_endpoint" || "branch" || "transit_gateway" || "lambda" || "quicksight" || "global_accelerator_managed" || "api_gateway_managed" || "gateway_load_balancer" || "gateway_load_balancer_endpoint" || "iot_rules_managed" || "aws_codestar_connections_managed",
 * //       Ipv6Addresses: [ // NetworkInterfaceIpv6AddressesList
 * //         { // NetworkInterfaceIpv6Address
 * //           Ipv6Address: "STRING_VALUE",
 * //           IsPrimaryIpv6: true || false,
 * //         },
 * //       ],
 * //       MacAddress: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       PrivateDnsName: "STRING_VALUE",
 * //       PrivateIpAddress: "STRING_VALUE",
 * //       PrivateIpAddresses: [ // NetworkInterfacePrivateIpAddressList
 * //         { // NetworkInterfacePrivateIpAddress
 * //           Association: {
 * //             AllocationId: "STRING_VALUE",
 * //             AssociationId: "STRING_VALUE",
 * //             IpOwnerId: "STRING_VALUE",
 * //             PublicDnsName: "STRING_VALUE",
 * //             PublicIp: "STRING_VALUE",
 * //             CustomerOwnedIp: "STRING_VALUE",
 * //             CarrierIp: "STRING_VALUE",
 * //           },
 * //           Primary: true || false,
 * //           PrivateDnsName: "STRING_VALUE",
 * //           PrivateIpAddress: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Ipv4Prefixes: [ // Ipv4PrefixesList
 * //         { // Ipv4PrefixSpecification
 * //           Ipv4Prefix: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Ipv6Prefixes: [ // Ipv6PrefixesList
 * //         { // Ipv6PrefixSpecification
 * //           Ipv6Prefix: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RequesterId: "STRING_VALUE",
 * //       RequesterManaged: true || false,
 * //       SourceDestCheck: true || false,
 * //       Status: "available" || "associated" || "attaching" || "in-use" || "detaching",
 * //       SubnetId: "STRING_VALUE",
 * //       TagSet: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //       DenyAllIgwTraffic: true || false,
 * //       Ipv6Native: true || false,
 * //       Ipv6Address: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInterfacesCommandInput - {@link DescribeNetworkInterfacesCommandInput}
 * @returns {@link DescribeNetworkInterfacesCommandOutput}
 * @see {@link DescribeNetworkInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfacesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeNetworkInterfacesCommand extends $Command
  .classBuilder<
    DescribeNetworkInterfacesCommandInput,
    DescribeNetworkInterfacesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeNetworkInterfaces", {})
  .n("EC2Client", "DescribeNetworkInterfacesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeNetworkInterfacesCommand)
  .de(de_DescribeNetworkInterfacesCommand)
  .build() {}

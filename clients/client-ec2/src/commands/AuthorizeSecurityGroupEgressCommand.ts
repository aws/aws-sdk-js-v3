// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AuthorizeSecurityGroupEgressRequest, AuthorizeSecurityGroupEgressResult } from "../models/models_0";
import { de_AuthorizeSecurityGroupEgressCommand, se_AuthorizeSecurityGroupEgressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeSecurityGroupEgressCommand}.
 */
export interface AuthorizeSecurityGroupEgressCommandInput extends AuthorizeSecurityGroupEgressRequest {}
/**
 * @public
 *
 * The output of {@link AuthorizeSecurityGroupEgressCommand}.
 */
export interface AuthorizeSecurityGroupEgressCommandOutput
  extends AuthorizeSecurityGroupEgressResult,
    __MetadataBearer {}

/**
 * <p>Adds the specified outbound (egress) rules to a security group.</p>
 *          <p>An outbound rule permits instances to send traffic to the specified IPv4 or IPv6
 *        address ranges, the IP address ranges specified by a prefix list, or the instances
 *        that are associated with a source security group. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html">Security group rules</a>.</p>
 *          <p>You must specify exactly one of the following destinations: an IPv4 or IPv6 address range,
 *        a prefix list, or a security group. You must specify a protocol for each rule (for example, TCP).
 *        If the protocol is TCP or UDP, you must also specify a port or port range. If the protocol is
 *        ICMP or ICMPv6, you must also specify the ICMP type and code.</p>
 *          <p>Rule changes are propagated to instances associated with the security group as quickly
 *          as possible. However, a small delay might occur.</p>
 *          <p>For examples of rules that you can add to security groups for specific access scenarios,
 *          see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html">Security group rules for different use cases</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>For information about security group quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC quotas</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeSecurityGroupEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeSecurityGroupEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AuthorizeSecurityGroupEgressRequest
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
 *   GroupId: "STRING_VALUE", // required
 *   SourceSecurityGroupName: "STRING_VALUE",
 *   SourceSecurityGroupOwnerId: "STRING_VALUE",
 *   IpProtocol: "STRING_VALUE",
 *   FromPort: Number("int"),
 *   ToPort: Number("int"),
 *   CidrIp: "STRING_VALUE",
 *   IpPermissions: [ // IpPermissionList
 *     { // IpPermission
 *       IpProtocol: "STRING_VALUE",
 *       FromPort: Number("int"),
 *       ToPort: Number("int"),
 *       UserIdGroupPairs: [ // UserIdGroupPairList
 *         { // UserIdGroupPair
 *           Description: "STRING_VALUE",
 *           UserId: "STRING_VALUE",
 *           GroupName: "STRING_VALUE",
 *           GroupId: "STRING_VALUE",
 *           VpcId: "STRING_VALUE",
 *           VpcPeeringConnectionId: "STRING_VALUE",
 *           PeeringStatus: "STRING_VALUE",
 *         },
 *       ],
 *       IpRanges: [ // IpRangeList
 *         { // IpRange
 *           Description: "STRING_VALUE",
 *           CidrIp: "STRING_VALUE",
 *         },
 *       ],
 *       Ipv6Ranges: [ // Ipv6RangeList
 *         { // Ipv6Range
 *           Description: "STRING_VALUE",
 *           CidrIpv6: "STRING_VALUE",
 *         },
 *       ],
 *       PrefixListIds: [ // PrefixListIdList
 *         { // PrefixListId
 *           Description: "STRING_VALUE",
 *           PrefixListId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new AuthorizeSecurityGroupEgressCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeSecurityGroupEgressResult
 * //   Return: true || false,
 * //   SecurityGroupRules: [ // SecurityGroupRuleList
 * //     { // SecurityGroupRule
 * //       SecurityGroupRuleId: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       GroupOwnerId: "STRING_VALUE",
 * //       IsEgress: true || false,
 * //       IpProtocol: "STRING_VALUE",
 * //       FromPort: Number("int"),
 * //       ToPort: Number("int"),
 * //       CidrIpv4: "STRING_VALUE",
 * //       CidrIpv6: "STRING_VALUE",
 * //       PrefixListId: "STRING_VALUE",
 * //       ReferencedGroupInfo: { // ReferencedSecurityGroup
 * //         GroupId: "STRING_VALUE",
 * //         PeeringStatus: "STRING_VALUE",
 * //         UserId: "STRING_VALUE",
 * //         VpcId: "STRING_VALUE",
 * //         VpcPeeringConnectionId: "STRING_VALUE",
 * //       },
 * //       Description: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SecurityGroupRuleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AuthorizeSecurityGroupEgressCommandInput - {@link AuthorizeSecurityGroupEgressCommandInput}
 * @returns {@link AuthorizeSecurityGroupEgressCommandOutput}
 * @see {@link AuthorizeSecurityGroupEgressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSecurityGroupEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To add a rule that allows outbound traffic to a specific address range
 * ```javascript
 * // This example adds a rule that grants access to the specified address ranges on TCP port 80.
 * const input = {
 *   GroupId: "sg-1a2b3c4d",
 *   IpPermissions: [
 *     {
 *       FromPort: 80,
 *       IpProtocol: "tcp",
 *       IpRanges: [
 *         {
 *           CidrIp: "10.0.0.0/16"
 *         }
 *       ],
 *       ToPort: 80
 *     }
 *   ]
 * };
 * const command = new AuthorizeSecurityGroupEgressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example To add a rule that allows outbound traffic to a specific security group
 * ```javascript
 * // This example adds a rule that grants access to the specified security group on TCP port 80.
 * const input = {
 *   GroupId: "sg-1a2b3c4d",
 *   IpPermissions: [
 *     {
 *       FromPort: 80,
 *       IpProtocol: "tcp",
 *       ToPort: 80,
 *       UserIdGroupPairs: [
 *         {
 *           GroupId: "sg-4b51a32f"
 *         }
 *       ]
 *     }
 *   ]
 * };
 * const command = new AuthorizeSecurityGroupEgressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AuthorizeSecurityGroupEgressCommand extends $Command
  .classBuilder<
    AuthorizeSecurityGroupEgressCommandInput,
    AuthorizeSecurityGroupEgressCommandOutput,
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
  .s("AmazonEC2", "AuthorizeSecurityGroupEgress", {})
  .n("EC2Client", "AuthorizeSecurityGroupEgressCommand")
  .f(void 0, void 0)
  .ser(se_AuthorizeSecurityGroupEgressCommand)
  .de(de_AuthorizeSecurityGroupEgressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AuthorizeSecurityGroupEgressRequest;
      output: AuthorizeSecurityGroupEgressResult;
    };
    sdk: {
      input: AuthorizeSecurityGroupEgressCommandInput;
      output: AuthorizeSecurityGroupEgressCommandOutput;
    };
  };
}

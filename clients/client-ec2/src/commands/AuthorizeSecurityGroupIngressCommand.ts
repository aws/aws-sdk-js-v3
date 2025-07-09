// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AuthorizeSecurityGroupIngressRequest, AuthorizeSecurityGroupIngressResult } from "../models/models_0";
import { de_AuthorizeSecurityGroupIngressCommand, se_AuthorizeSecurityGroupIngressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeSecurityGroupIngressCommand}.
 */
export interface AuthorizeSecurityGroupIngressCommandInput extends AuthorizeSecurityGroupIngressRequest {}
/**
 * @public
 *
 * The output of {@link AuthorizeSecurityGroupIngressCommand}.
 */
export interface AuthorizeSecurityGroupIngressCommandOutput
  extends AuthorizeSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * <p>Adds the specified inbound (ingress) rules to a security group.</p>
 *          <p>An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6
 *        address range, the IP address ranges that are specified by a prefix list, or the instances
 *        that are associated with a destination security group. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html">Security group rules</a>.</p>
 *          <p>You must specify exactly one of the following sources: an IPv4 or IPv6 address range,
 *        a prefix list, or a security group. You must specify a protocol for each rule (for example, TCP).
 *        If the protocol is TCP or UDP, you must also specify a port or port range. If the protocol is
 *        ICMP or ICMPv6, you must also specify the ICMP/ICMPv6 type and code.</p>
 *          <p>Rule changes are propagated to instances associated with the security group as quickly
 *        as possible. However, a small delay might occur.</p>
 *          <p>For examples of rules that you can add to security groups for specific access scenarios,
 *        see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html">Security group rules for different use cases</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>For more information about security group quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC quotas</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeSecurityGroupIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeSecurityGroupIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AuthorizeSecurityGroupIngressRequest
 *   CidrIp: "STRING_VALUE",
 *   FromPort: Number("int"),
 *   GroupId: "STRING_VALUE",
 *   GroupName: "STRING_VALUE",
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
 *   IpProtocol: "STRING_VALUE",
 *   SourceSecurityGroupName: "STRING_VALUE",
 *   SourceSecurityGroupOwnerId: "STRING_VALUE",
 *   ToPort: Number("int"),
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
 * };
 * const command = new AuthorizeSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeSecurityGroupIngressResult
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
 * @param AuthorizeSecurityGroupIngressCommandInput - {@link AuthorizeSecurityGroupIngressCommandInput}
 * @returns {@link AuthorizeSecurityGroupIngressCommandOutput}
 * @see {@link AuthorizeSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To add a rule that allows inbound HTTP traffic from another security group
 * ```javascript
 * // This example enables inbound traffic on TCP port 80 from the specified security group. The group must be in the same VPC or a peer VPC. Incoming traffic is allowed based on the private IP addresses of instances that are associated with the specified security group.
 * const input = {
 *   GroupId: "sg-111aaa22",
 *   IpPermissions: [
 *     {
 *       FromPort: 80,
 *       IpProtocol: "tcp",
 *       ToPort: 80,
 *       UserIdGroupPairs: [
 *         {
 *           Description: "HTTP access from other instances",
 *           GroupId: "sg-1a2b3c4d"
 *         }
 *       ]
 *     }
 *   ]
 * };
 * const command = new AuthorizeSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example To add a rule that allows inbound SSH traffic from an IPv4 address range
 * ```javascript
 * // This example enables inbound traffic on TCP port 22 (SSH). The rule includes a description to help you identify it later.
 * const input = {
 *   GroupId: "sg-903004f8",
 *   IpPermissions: [
 *     {
 *       FromPort: 22,
 *       IpProtocol: "tcp",
 *       IpRanges: [
 *         {
 *           CidrIp: "203.0.113.0/24",
 *           Description: "SSH access from the LA office"
 *         }
 *       ],
 *       ToPort: 22
 *     }
 *   ]
 * };
 * const command = new AuthorizeSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example To add a rule that allows inbound RDP traffic from an IPv6 address range
 * ```javascript
 * // This example adds an inbound rule that allows RDP traffic from the specified IPv6 address range. The rule includes a description to help you identify it later.
 * const input = {
 *   GroupId: "sg-123abc12 ",
 *   IpPermissions: [
 *     {
 *       FromPort: 3389,
 *       IpProtocol: "tcp",
 *       Ipv6Ranges: [
 *         {
 *           CidrIpv6: "2001:db8:1234:1a00::/64",
 *           Description: "RDP access from the NY office"
 *         }
 *       ],
 *       ToPort: 3389
 *     }
 *   ]
 * };
 * const command = new AuthorizeSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AuthorizeSecurityGroupIngressCommand extends $Command
  .classBuilder<
    AuthorizeSecurityGroupIngressCommandInput,
    AuthorizeSecurityGroupIngressCommandOutput,
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
  .s("AmazonEC2", "AuthorizeSecurityGroupIngress", {})
  .n("EC2Client", "AuthorizeSecurityGroupIngressCommand")
  .f(void 0, void 0)
  .ser(se_AuthorizeSecurityGroupIngressCommand)
  .de(de_AuthorizeSecurityGroupIngressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AuthorizeSecurityGroupIngressRequest;
      output: AuthorizeSecurityGroupIngressResult;
    };
    sdk: {
      input: AuthorizeSecurityGroupIngressCommandInput;
      output: AuthorizeSecurityGroupIngressCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeSecurityGroupIngressRequest, RevokeSecurityGroupIngressResult } from "../models/models_7";
import { de_RevokeSecurityGroupIngressCommand, se_RevokeSecurityGroupIngressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeSecurityGroupIngressCommand}.
 */
export interface RevokeSecurityGroupIngressCommandInput extends RevokeSecurityGroupIngressRequest {}
/**
 * @public
 *
 * The output of {@link RevokeSecurityGroupIngressCommand}.
 */
export interface RevokeSecurityGroupIngressCommandOutput extends RevokeSecurityGroupIngressResult, __MetadataBearer {}

/**
 * <p>Removes the specified inbound (ingress) rules from a security group.</p>
 *          <p>You can specify rules using either rule IDs or security group rule properties. If you use
 *            rule properties, the values that you specify (for example, ports) must match the existing rule's
 *            values exactly. Each rule has a protocol, from and to ports, and source (CIDR range,
 *            security group, or prefix list). For the TCP and UDP protocols, you must also specify the
 *            destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type
 *            and code. If the security group rule has a description, you do not need to specify the description
 *            to revoke the rule.</p>
 *          <p>For a default VPC, if the values you specify do not match the existing rule's values,
 *             no error is returned, and the output describes the security group rules that were not
 *             revoked.</p>
 *          <p>For a non-default VPC, if the values you specify do not match the existing rule's
 *             values, an <code>InvalidPermission.NotFound</code> client error is returned, and no
 *             rules are revoked.</p>
 *          <p>Amazon Web Services recommends that you describe the security group to verify that the rules were removed.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible.
 *          However, a small delay might occur.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeSecurityGroupIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeSecurityGroupIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RevokeSecurityGroupIngressRequest
 *   CidrIp: "STRING_VALUE",
 *   FromPort: Number("int"),
 *   GroupId: "STRING_VALUE",
 *   GroupName: "STRING_VALUE",
 *   IpPermissions: [ // IpPermissionList
 *     { // IpPermission
 *       FromPort: Number("int"),
 *       IpProtocol: "STRING_VALUE",
 *       IpRanges: [ // IpRangeList
 *         { // IpRange
 *           CidrIp: "STRING_VALUE",
 *           Description: "STRING_VALUE",
 *         },
 *       ],
 *       Ipv6Ranges: [ // Ipv6RangeList
 *         { // Ipv6Range
 *           CidrIpv6: "STRING_VALUE",
 *           Description: "STRING_VALUE",
 *         },
 *       ],
 *       PrefixListIds: [ // PrefixListIdList
 *         { // PrefixListId
 *           Description: "STRING_VALUE",
 *           PrefixListId: "STRING_VALUE",
 *         },
 *       ],
 *       ToPort: Number("int"),
 *       UserIdGroupPairs: [ // UserIdGroupPairList
 *         { // UserIdGroupPair
 *           Description: "STRING_VALUE",
 *           GroupId: "STRING_VALUE",
 *           GroupName: "STRING_VALUE",
 *           PeeringStatus: "STRING_VALUE",
 *           UserId: "STRING_VALUE",
 *           VpcId: "STRING_VALUE",
 *           VpcPeeringConnectionId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   IpProtocol: "STRING_VALUE",
 *   SourceSecurityGroupName: "STRING_VALUE",
 *   SourceSecurityGroupOwnerId: "STRING_VALUE",
 *   ToPort: Number("int"),
 *   DryRun: true || false,
 *   SecurityGroupRuleIds: [ // SecurityGroupRuleIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RevokeSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // RevokeSecurityGroupIngressResult
 * //   Return: true || false,
 * //   UnknownIpPermissions: [ // IpPermissionList
 * //     { // IpPermission
 * //       FromPort: Number("int"),
 * //       IpProtocol: "STRING_VALUE",
 * //       IpRanges: [ // IpRangeList
 * //         { // IpRange
 * //           CidrIp: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Ipv6Ranges: [ // Ipv6RangeList
 * //         { // Ipv6Range
 * //           CidrIpv6: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrefixListIds: [ // PrefixListIdList
 * //         { // PrefixListId
 * //           Description: "STRING_VALUE",
 * //           PrefixListId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ToPort: Number("int"),
 * //       UserIdGroupPairs: [ // UserIdGroupPairList
 * //         { // UserIdGroupPair
 * //           Description: "STRING_VALUE",
 * //           GroupId: "STRING_VALUE",
 * //           GroupName: "STRING_VALUE",
 * //           PeeringStatus: "STRING_VALUE",
 * //           UserId: "STRING_VALUE",
 * //           VpcId: "STRING_VALUE",
 * //           VpcPeeringConnectionId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RevokeSecurityGroupIngressCommandInput - {@link RevokeSecurityGroupIngressCommandInput}
 * @returns {@link RevokeSecurityGroupIngressCommandOutput}
 * @see {@link RevokeSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class RevokeSecurityGroupIngressCommand extends $Command
  .classBuilder<
    RevokeSecurityGroupIngressCommandInput,
    RevokeSecurityGroupIngressCommandOutput,
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
  .s("AmazonEC2", "RevokeSecurityGroupIngress", {})
  .n("EC2Client", "RevokeSecurityGroupIngressCommand")
  .f(void 0, void 0)
  .ser(se_RevokeSecurityGroupIngressCommand)
  .de(de_RevokeSecurityGroupIngressCommand)
  .build() {}

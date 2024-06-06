// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecurityGroupsRequest, DescribeSecurityGroupsResult } from "../models/models_4";
import { de_DescribeSecurityGroupsCommand, se_DescribeSecurityGroupsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityGroupsCommand}.
 */
export interface DescribeSecurityGroupsCommandInput extends DescribeSecurityGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityGroupsCommand}.
 */
export interface DescribeSecurityGroupsCommandOutput extends DescribeSecurityGroupsResult, __MetadataBearer {}

/**
 * <p>Describes the specified security groups or all of your security groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecurityGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecurityGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSecurityGroupsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   GroupIds: [ // GroupIdStringList
 *     "STRING_VALUE",
 *   ],
 *   GroupNames: [ // GroupNameStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityGroupsResult
 * //   SecurityGroups: [ // SecurityGroupList
 * //     { // SecurityGroup
 * //       Description: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       IpPermissions: [ // IpPermissionList
 * //         { // IpPermission
 * //           FromPort: Number("int"),
 * //           IpProtocol: "STRING_VALUE",
 * //           IpRanges: [ // IpRangeList
 * //             { // IpRange
 * //               CidrIp: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Ipv6Ranges: [ // Ipv6RangeList
 * //             { // Ipv6Range
 * //               CidrIpv6: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //             },
 * //           ],
 * //           PrefixListIds: [ // PrefixListIdList
 * //             { // PrefixListId
 * //               Description: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           ToPort: Number("int"),
 * //           UserIdGroupPairs: [ // UserIdGroupPairList
 * //             { // UserIdGroupPair
 * //               Description: "STRING_VALUE",
 * //               GroupId: "STRING_VALUE",
 * //               GroupName: "STRING_VALUE",
 * //               PeeringStatus: "STRING_VALUE",
 * //               UserId: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               VpcPeeringConnectionId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       IpPermissionsEgress: [
 * //         {
 * //           FromPort: Number("int"),
 * //           IpProtocol: "STRING_VALUE",
 * //           IpRanges: [
 * //             {
 * //               CidrIp: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Ipv6Ranges: [
 * //             {
 * //               CidrIpv6: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //             },
 * //           ],
 * //           PrefixListIds: [
 * //             {
 * //               Description: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           ToPort: Number("int"),
 * //           UserIdGroupPairs: [
 * //             {
 * //               Description: "STRING_VALUE",
 * //               GroupId: "STRING_VALUE",
 * //               GroupName: "STRING_VALUE",
 * //               PeeringStatus: "STRING_VALUE",
 * //               UserId: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               VpcPeeringConnectionId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSecurityGroupsCommandInput - {@link DescribeSecurityGroupsCommandInput}
 * @returns {@link DescribeSecurityGroupsCommandOutput}
 * @see {@link DescribeSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe a security group
 * ```javascript
 * // This example describes the specified security group.
 * const input = {
 *   "GroupIds": [
 *     "sg-903004f8"
 *   ]
 * };
 * const command = new DescribeSecurityGroupsCommand(input);
 * await client.send(command);
 * // example id: to-describe-a-security-group-1529354426314
 * ```
 *
 * @example To describe a tagged security group
 * ```javascript
 * // This example describes the security groups that include the specified tag (Purpose=test).
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "tag:Purpose",
 *       "Values": [
 *         "test"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeSecurityGroupsCommand(input);
 * await client.send(command);
 * // example id: to-describe-a-tagged-security-group-1529354553880
 * ```
 *
 */
export class DescribeSecurityGroupsCommand extends $Command
  .classBuilder<
    DescribeSecurityGroupsCommandInput,
    DescribeSecurityGroupsCommandOutput,
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
  .s("AmazonEC2", "DescribeSecurityGroups", {})
  .n("EC2Client", "DescribeSecurityGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSecurityGroupsCommand)
  .de(de_DescribeSecurityGroupsCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSecurityGroupsRequest, DescribeSecurityGroupsResult } from "../models/models_4";
import { DescribeSecurityGroups$ } from "../schemas/schemas_0";

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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeSecurityGroupsRequest
 *   GroupIds: [ // GroupIdStringList
 *     "STRING_VALUE",
 *   ],
 *   GroupNames: [ // GroupNameStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityGroupsResult
 * //   NextToken: "STRING_VALUE",
 * //   SecurityGroups: [ // SecurityGroupList
 * //     { // SecurityGroup
 * //       GroupId: "STRING_VALUE",
 * //       IpPermissionsEgress: [ // IpPermissionList
 * //         { // IpPermission
 * //           IpProtocol: "STRING_VALUE",
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //           UserIdGroupPairs: [ // UserIdGroupPairList
 * //             { // UserIdGroupPair
 * //               Description: "STRING_VALUE",
 * //               UserId: "STRING_VALUE",
 * //               GroupName: "STRING_VALUE",
 * //               GroupId: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               VpcPeeringConnectionId: "STRING_VALUE",
 * //               PeeringStatus: "STRING_VALUE",
 * //             },
 * //           ],
 * //           IpRanges: [ // IpRangeList
 * //             { // IpRange
 * //               Description: "STRING_VALUE",
 * //               CidrIp: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Ipv6Ranges: [ // Ipv6RangeList
 * //             { // Ipv6Range
 * //               Description: "STRING_VALUE",
 * //               CidrIpv6: "STRING_VALUE",
 * //             },
 * //           ],
 * //           PrefixListIds: [ // PrefixListIdList
 * //             { // PrefixListId
 * //               Description: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
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
 * //       SecurityGroupArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       IpPermissions: [
 * //         {
 * //           IpProtocol: "STRING_VALUE",
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //           UserIdGroupPairs: [
 * //             {
 * //               Description: "STRING_VALUE",
 * //               UserId: "STRING_VALUE",
 * //               GroupName: "STRING_VALUE",
 * //               GroupId: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               VpcPeeringConnectionId: "STRING_VALUE",
 * //               PeeringStatus: "STRING_VALUE",
 * //             },
 * //           ],
 * //           IpRanges: [
 * //             {
 * //               Description: "STRING_VALUE",
 * //               CidrIp: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Ipv6Ranges: [
 * //             {
 * //               Description: "STRING_VALUE",
 * //               CidrIpv6: "STRING_VALUE",
 * //             },
 * //           ],
 * //           PrefixListIds: [
 * //             {
 * //               Description: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
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
 *
 * @example To describe a security group
 * ```javascript
 * // This example describes the specified security group.
 * const input = {
 *   GroupIds: [
 *     "sg-903004f8"
 *   ]
 * };
 * const command = new DescribeSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example To describe a tagged security group
 * ```javascript
 * // This example describes the security groups that include the specified tag (Purpose=test).
 * const input = {
 *   Filters: [
 *     {
 *       Name: "tag:Purpose",
 *       Values: [
 *         "test"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeSecurityGroupsCommand extends $Command
  .classBuilder<
    DescribeSecurityGroupsCommandInput,
    DescribeSecurityGroupsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeSecurityGroups", {})
  .n("EC2Client", "DescribeSecurityGroupsCommand")
  .sc(DescribeSecurityGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecurityGroupsRequest;
      output: DescribeSecurityGroupsResult;
    };
    sdk: {
      input: DescribeSecurityGroupsCommandInput;
      output: DescribeSecurityGroupsCommandOutput;
    };
  };
}

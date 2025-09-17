// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStaleSecurityGroupsRequest, DescribeStaleSecurityGroupsResult } from "../models/models_5";
import { de_DescribeStaleSecurityGroupsCommand, se_DescribeStaleSecurityGroupsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStaleSecurityGroupsCommand}.
 */
export interface DescribeStaleSecurityGroupsCommandInput extends DescribeStaleSecurityGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStaleSecurityGroupsCommand}.
 */
export interface DescribeStaleSecurityGroupsCommandOutput extends DescribeStaleSecurityGroupsResult, __MetadataBearer {}

/**
 * <p>Describes the stale security group rules for security groups referenced across a VPC
 *             peering connection, transit gateway connection, or with a security group VPC
 *             association. Rules are stale when they reference a deleted security group. Rules can
 *             also be stale if they reference a security group in a peer VPC for which the VPC peering
 *             connection has been deleted, across a transit gateway where the transit gateway has been
 *             deleted (or <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpc-attachments.html#vpc-attachment-security">the transit
 *                 gateway security group referencing feature</a> has been disabled), or if a
 *             security group VPC association has been disassociated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeStaleSecurityGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeStaleSecurityGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeStaleSecurityGroupsRequest
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStaleSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStaleSecurityGroupsResult
 * //   NextToken: "STRING_VALUE",
 * //   StaleSecurityGroupSet: [ // StaleSecurityGroupSet
 * //     { // StaleSecurityGroup
 * //       Description: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       StaleIpPermissions: [ // StaleIpPermissionSet
 * //         { // StaleIpPermission
 * //           FromPort: Number("int"),
 * //           IpProtocol: "STRING_VALUE",
 * //           IpRanges: [ // IpRanges
 * //             "STRING_VALUE",
 * //           ],
 * //           PrefixListIds: [ // PrefixListIdSet
 * //             "STRING_VALUE",
 * //           ],
 * //           ToPort: Number("int"),
 * //           UserIdGroupPairs: [ // UserIdGroupPairSet
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
 * //         },
 * //       ],
 * //       StaleIpPermissionsEgress: [
 * //         {
 * //           FromPort: Number("int"),
 * //           IpProtocol: "STRING_VALUE",
 * //           IpRanges: [
 * //             "STRING_VALUE",
 * //           ],
 * //           PrefixListIds: [
 * //             "STRING_VALUE",
 * //           ],
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
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeStaleSecurityGroupsCommandInput - {@link DescribeStaleSecurityGroupsCommandInput}
 * @returns {@link DescribeStaleSecurityGroupsCommandOutput}
 * @see {@link DescribeStaleSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeStaleSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeStaleSecurityGroupsCommand extends $Command
  .classBuilder<
    DescribeStaleSecurityGroupsCommandInput,
    DescribeStaleSecurityGroupsCommandOutput,
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
  .s("AmazonEC2", "DescribeStaleSecurityGroups", {})
  .n("EC2Client", "DescribeStaleSecurityGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStaleSecurityGroupsCommand)
  .de(de_DescribeStaleSecurityGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStaleSecurityGroupsRequest;
      output: DescribeStaleSecurityGroupsResult;
    };
    sdk: {
      input: DescribeStaleSecurityGroupsCommandInput;
      output: DescribeStaleSecurityGroupsCommandOutput;
    };
  };
}

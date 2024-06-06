// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNetworkAclsRequest, DescribeNetworkAclsResult } from "../models/models_4";
import { de_DescribeNetworkAclsCommand, se_DescribeNetworkAclsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkAclsCommand}.
 */
export interface DescribeNetworkAclsCommandInput extends DescribeNetworkAclsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkAclsCommand}.
 */
export interface DescribeNetworkAclsCommandOutput extends DescribeNetworkAclsResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your network ACLs.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html">Network ACLs</a> in the
 * 				<i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkAclsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkAclsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkAclsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   NetworkAclIds: [ // NetworkAclIdStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeNetworkAclsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkAclsResult
 * //   NetworkAcls: [ // NetworkAclList
 * //     { // NetworkAcl
 * //       Associations: [ // NetworkAclAssociationList
 * //         { // NetworkAclAssociation
 * //           NetworkAclAssociationId: "STRING_VALUE",
 * //           NetworkAclId: "STRING_VALUE",
 * //           SubnetId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Entries: [ // NetworkAclEntryList
 * //         { // NetworkAclEntry
 * //           CidrBlock: "STRING_VALUE",
 * //           Egress: true || false,
 * //           IcmpTypeCode: { // IcmpTypeCode
 * //             Code: Number("int"),
 * //             Type: Number("int"),
 * //           },
 * //           Ipv6CidrBlock: "STRING_VALUE",
 * //           PortRange: { // PortRange
 * //             From: Number("int"),
 * //             To: Number("int"),
 * //           },
 * //           Protocol: "STRING_VALUE",
 * //           RuleAction: "allow" || "deny",
 * //           RuleNumber: Number("int"),
 * //         },
 * //       ],
 * //       IsDefault: true || false,
 * //       NetworkAclId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkAclsCommandInput - {@link DescribeNetworkAclsCommandInput}
 * @returns {@link DescribeNetworkAclsCommandOutput}
 * @see {@link DescribeNetworkAclsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkAclsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe a network ACL
 * ```javascript
 * // This example describes the specified network ACL.
 * const input = {
 *   "NetworkAclIds": [
 *     "acl-5fb85d36"
 *   ]
 * };
 * const command = new DescribeNetworkAclsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NetworkAcls": [
 *     {
 *       "Associations": [
 *         {
 *           "NetworkAclAssociationId": "aclassoc-66ea5f0b",
 *           "NetworkAclId": "acl-9aeb5ef7",
 *           "SubnetId": "subnet-65ea5f08"
 *         }
 *       ],
 *       "Entries": [
 *         {
 *           "CidrBlock": "0.0.0.0/0",
 *           "Egress": true,
 *           "Protocol": "-1",
 *           "RuleAction": "deny",
 *           "RuleNumber": 32767
 *         },
 *         {
 *           "CidrBlock": "0.0.0.0/0",
 *           "Egress": false,
 *           "Protocol": "-1",
 *           "RuleAction": "deny",
 *           "RuleNumber": 32767
 *         }
 *       ],
 *       "IsDefault": false,
 *       "NetworkAclId": "acl-5fb85d36",
 *       "Tags": [],
 *       "VpcId": "vpc-a01106c2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-
 * ```
 *
 */
export class DescribeNetworkAclsCommand extends $Command
  .classBuilder<
    DescribeNetworkAclsCommandInput,
    DescribeNetworkAclsCommandOutput,
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
  .s("AmazonEC2", "DescribeNetworkAcls", {})
  .n("EC2Client", "DescribeNetworkAclsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeNetworkAclsCommand)
  .de(de_DescribeNetworkAclsCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DBSecurityGroupMessage, DescribeDBSecurityGroupsMessage } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBSecurityGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBSecurityGroupsCommand}.
 */
export interface DescribeDBSecurityGroupsCommandInput extends DescribeDBSecurityGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBSecurityGroupsCommand}.
 */
export interface DescribeDBSecurityGroupsCommandOutput extends DBSecurityGroupMessage, __MetadataBearer {}

/**
 * <p>Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified,
 *             the list will contain only the descriptions of the specified DB security group.</p>
 *          <note>
 *             <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that
 *                 you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the
 *                 <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring –
 *                     Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC
 *                         into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSecurityGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSecurityGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBSecurityGroupsMessage
 *   DBSecurityGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DBSecurityGroupMessage
 * //   Marker: "STRING_VALUE",
 * //   DBSecurityGroups: [ // DBSecurityGroups
 * //     { // DBSecurityGroup
 * //       OwnerId: "STRING_VALUE",
 * //       DBSecurityGroupName: "STRING_VALUE",
 * //       DBSecurityGroupDescription: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       EC2SecurityGroups: [ // EC2SecurityGroupList
 * //         { // EC2SecurityGroup
 * //           Status: "STRING_VALUE",
 * //           EC2SecurityGroupName: "STRING_VALUE",
 * //           EC2SecurityGroupId: "STRING_VALUE",
 * //           EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IPRanges: [ // IPRangeList
 * //         { // IPRange
 * //           Status: "STRING_VALUE",
 * //           CIDRIP: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DBSecurityGroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBSecurityGroupsCommandInput - {@link DescribeDBSecurityGroupsCommandInput}
 * @returns {@link DescribeDBSecurityGroupsCommandOutput}
 * @see {@link DescribeDBSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSecurityGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To list DB security group settings
 * ```javascript
 * // This example lists settings for the specified security group.
 * const input = {
 *   DBSecurityGroupName: "mydbsecuritygroup"
 * };
 * const command = new DescribeDBSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDBSecurityGroupsCommand extends $Command
  .classBuilder<
    DescribeDBSecurityGroupsCommandInput,
    DescribeDBSecurityGroupsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBSecurityGroups", {})
  .n("RDSClient", "DescribeDBSecurityGroupsCommand")
  .sc(DescribeDBSecurityGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBSecurityGroupsMessage;
      output: DBSecurityGroupMessage;
    };
    sdk: {
      input: DescribeDBSecurityGroupsCommandInput;
      output: DescribeDBSecurityGroupsCommandOutput;
    };
  };
}

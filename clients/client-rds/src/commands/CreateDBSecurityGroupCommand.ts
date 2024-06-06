// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDBSecurityGroupMessage, CreateDBSecurityGroupResult } from "../models/models_0";
import { de_CreateDBSecurityGroupCommand, se_CreateDBSecurityGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDBSecurityGroupCommand}.
 */
export interface CreateDBSecurityGroupCommandInput extends CreateDBSecurityGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBSecurityGroupCommand}.
 */
export interface CreateDBSecurityGroupCommandOutput extends CreateDBSecurityGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new DB security group. DB security groups control access to a DB instance.</p>
 *          <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p>
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
 * import { RDSClient, CreateDBSecurityGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBSecurityGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateDBSecurityGroupMessage
 *   DBSecurityGroupName: "STRING_VALUE", // required
 *   DBSecurityGroupDescription: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBSecurityGroupResult
 * //   DBSecurityGroup: { // DBSecurityGroup
 * //     OwnerId: "STRING_VALUE",
 * //     DBSecurityGroupName: "STRING_VALUE",
 * //     DBSecurityGroupDescription: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     EC2SecurityGroups: [ // EC2SecurityGroupList
 * //       { // EC2SecurityGroup
 * //         Status: "STRING_VALUE",
 * //         EC2SecurityGroupName: "STRING_VALUE",
 * //         EC2SecurityGroupId: "STRING_VALUE",
 * //         EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IPRanges: [ // IPRangeList
 * //       { // IPRange
 * //         Status: "STRING_VALUE",
 * //         CIDRIP: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBSecurityGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBSecurityGroupCommandInput - {@link CreateDBSecurityGroupCommandInput}
 * @returns {@link CreateDBSecurityGroupCommandOutput}
 * @see {@link CreateDBSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSecurityGroupAlreadyExistsFault} (client fault)
 *  <p>A DB security group with the name specified in
 *         <code>DBSecurityGroupName</code> already exists.</p>
 *
 * @throws {@link DBSecurityGroupNotSupportedFault} (client fault)
 *  <p>A DB security group isn't allowed for this action.</p>
 *
 * @throws {@link DBSecurityGroupQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB security
 *             groups.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To create a DB security group.
 * ```javascript
 * // This example creates a DB security group.
 * const input = {
 *   "DBSecurityGroupDescription": "My DB security group",
 *   "DBSecurityGroupName": "mydbsecuritygroup"
 * };
 * const command = new CreateDBSecurityGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBSecurityGroup": {}
 * }
 * *\/
 * // example id: create-db-security-group-41b6786a-539e-42a5-a645-a8bc3cf99353
 * ```
 *
 */
export class CreateDBSecurityGroupCommand extends $Command
  .classBuilder<
    CreateDBSecurityGroupCommandInput,
    CreateDBSecurityGroupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "CreateDBSecurityGroup", {})
  .n("RDSClient", "CreateDBSecurityGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateDBSecurityGroupCommand)
  .de(de_CreateDBSecurityGroupCommand)
  .build() {}

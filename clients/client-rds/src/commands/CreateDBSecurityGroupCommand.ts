// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDBSecurityGroupMessage, CreateDBSecurityGroupResult } from "../models/models_0";
import { CreateDBSecurityGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new DB security group. DB security groups control access to a DB instance.
 *
 * A DB security group controls access to EC2-Classic DB instances that are not in a VPC.
 *
 * > **Note:** EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see [Migrate from EC2-Classic to a VPC](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html) in the *Amazon EC2 User Guide*, the blog [EC2-Classic Networking is Retiring – Here’s How to Prepare](http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/), and [Moving a DB instance not in a VPC into a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html) in the *Amazon RDS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBSecurityGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBSecurityGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
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
 *
 * A DB security group with the name specified in `DBSecurityGroupName` already exists.
 *
 * @throws {@link DBSecurityGroupNotSupportedFault} (client fault)
 *
 * A DB security group isn't allowed for this action.
 *
 * @throws {@link DBSecurityGroupQuotaExceededFault} (client fault)
 *
 * The request would result in the user exceeding the allowed number of DB security groups.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To create a DB security group.
 * ```javascript
 * // This example creates a DB security group.
 * const input = {
 *   DBSecurityGroupDescription: "My DB security group",
 *   DBSecurityGroupName: "mydbsecuritygroup"
 * };
 * const command = new CreateDBSecurityGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSecurityGroup:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDBSecurityGroupCommand extends command<CreateDBSecurityGroupCommandInput, CreateDBSecurityGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateDBSecurityGroup",
  CreateDBSecurityGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBSecurityGroupMessage;
      output: CreateDBSecurityGroupResult;
    };
    sdk: {
      input: CreateDBSecurityGroupCommandInput;
      output: CreateDBSecurityGroupCommandOutput;
    };
  };
}

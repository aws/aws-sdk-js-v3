// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDBSecurityGroupMessage } from "../models/models_0";
import { DeleteDBSecurityGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDBSecurityGroupCommand}.
 */
export interface DeleteDBSecurityGroupCommandInput extends DeleteDBSecurityGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBSecurityGroupCommand}.
 */
export interface DeleteDBSecurityGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes a DB security group.
 *
 * The specified DB security group must not be associated with any DB instances.
 *
 * > **Note:** EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see [Migrate from EC2-Classic to a VPC](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html) in the *Amazon EC2 User Guide*, the blog [EC2-Classic Networking is Retiring – Here’s How to Prepare](http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/), and [Moving a DB instance not in a VPC into a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html) in the *Amazon RDS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBSecurityGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBSecurityGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeleteDBSecurityGroupMessage
 *   DBSecurityGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDBSecurityGroupCommandInput - {@link DeleteDBSecurityGroupCommandInput}
 * @returns {@link DeleteDBSecurityGroupCommandOutput}
 * @see {@link DeleteDBSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSecurityGroupNotFoundFault} (client fault)
 *
 * `DBSecurityGroupName` doesn't refer to an existing DB security group.
 *
 * @throws {@link InvalidDBSecurityGroupStateFault} (client fault)
 *
 * The state of the DB security group doesn't allow deletion.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To delete a DB security group
 * ```javascript
 * // The following example deletes a DB security group.
 * const input = {
 *   DBSecurityGroupName: "mysecgroup"
 * };
 * const command = new DeleteDBSecurityGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDBSecurityGroupCommand extends command<DeleteDBSecurityGroupCommandInput, DeleteDBSecurityGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDBSecurityGroup",
  DeleteDBSecurityGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBSecurityGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteDBSecurityGroupCommandInput;
      output: DeleteDBSecurityGroupCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDBSecurityGroupMessage } from "../models/models_0";
import { de_DeleteDBSecurityGroupCommand, se_DeleteDBSecurityGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a DB security group.</p>
 *          <p>The specified DB security group must not be associated with any DB instances.</p>
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
 * import { RDSClient, DeleteDBSecurityGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBSecurityGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
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
 *  <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group.</p>
 *
 * @throws {@link InvalidDBSecurityGroupStateFault} (client fault)
 *  <p>The state of the DB security group doesn't allow deletion.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
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
export class DeleteDBSecurityGroupCommand extends $Command
  .classBuilder<
    DeleteDBSecurityGroupCommandInput,
    DeleteDBSecurityGroupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DeleteDBSecurityGroup", {})
  .n("RDSClient", "DeleteDBSecurityGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDBSecurityGroupCommand)
  .de(de_DeleteDBSecurityGroupCommand)
  .build() {
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

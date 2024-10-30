// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSecurityGroupRequest } from "../models/models_3";
import { de_DeleteSecurityGroupCommand, se_DeleteSecurityGroupCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSecurityGroupCommand}.
 */
export interface DeleteSecurityGroupCommandInput extends DeleteSecurityGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSecurityGroupCommand}.
 */
export interface DeleteSecurityGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a security group.</p>
 *          <p>If you attempt to delete a security group that is associated with an instance or network interface, is
 * 			  referenced by another security group in the same VPC, or has a VPC association, the operation fails with
 * 				<code>DependencyViolation</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSecurityGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSecurityGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteSecurityGroupRequest
 *   GroupId: "STRING_VALUE",
 *   GroupName: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DeleteSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSecurityGroupCommandInput - {@link DeleteSecurityGroupCommandInput}
 * @returns {@link DeleteSecurityGroupCommandOutput}
 * @see {@link DeleteSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To delete a security group
 * ```javascript
 * // This example deletes the specified security group.
 * const input = {
 *   "GroupId": "sg-903004f8"
 * };
 * const command = new DeleteSecurityGroupCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-security-group-1529024952972
 * ```
 *
 */
export class DeleteSecurityGroupCommand extends $Command
  .classBuilder<
    DeleteSecurityGroupCommandInput,
    DeleteSecurityGroupCommandOutput,
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
  .s("AmazonEC2", "DeleteSecurityGroup", {})
  .n("EC2Client", "DeleteSecurityGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSecurityGroupCommand)
  .de(de_DeleteSecurityGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSecurityGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteSecurityGroupCommandInput;
      output: DeleteSecurityGroupCommandOutput;
    };
  };
}

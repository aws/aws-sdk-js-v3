// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkAclEntryRequest } from "../models/models_3";
import { de_DeleteNetworkAclEntryCommand, se_DeleteNetworkAclEntryCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkAclEntryCommand}.
 */
export interface DeleteNetworkAclEntryCommandInput extends DeleteNetworkAclEntryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkAclEntryCommand}.
 */
export interface DeleteNetworkAclEntryCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified ingress or egress entry (rule) from the specified network ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkAclEntryRequest
 *   DryRun: true || false,
 *   NetworkAclId: "STRING_VALUE", // required
 *   RuleNumber: Number("int"), // required
 *   Egress: true || false, // required
 * };
 * const command = new DeleteNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNetworkAclEntryCommandInput - {@link DeleteNetworkAclEntryCommandInput}
 * @returns {@link DeleteNetworkAclEntryCommandOutput}
 * @see {@link DeleteNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To delete a network ACL entry
 * ```javascript
 * // This example deletes ingress rule number 100 from the specified network ACL.
 * const input = {
 *   "Egress": true,
 *   "NetworkAclId": "acl-5fb85d36",
 *   "RuleNumber": 100
 * };
 * const command = new DeleteNetworkAclEntryCommand(input);
 * await client.send(command);
 * // example id: ec2-delete-network-acl-entry-1
 * ```
 *
 */
export class DeleteNetworkAclEntryCommand extends $Command
  .classBuilder<
    DeleteNetworkAclEntryCommandInput,
    DeleteNetworkAclEntryCommandOutput,
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
  .s("AmazonEC2", "DeleteNetworkAclEntry", {})
  .n("EC2Client", "DeleteNetworkAclEntryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNetworkAclEntryCommand)
  .de(de_DeleteNetworkAclEntryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkAclEntryRequest;
      output: {};
    };
    sdk: {
      input: DeleteNetworkAclEntryCommandInput;
      output: DeleteNetworkAclEntryCommandOutput;
    };
  };
}

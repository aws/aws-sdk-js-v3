// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteNetworkAclRequest } from "../models/models_2";
import { DeleteNetworkAcl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkAclCommand}.
 */
export interface DeleteNetworkAclCommandInput extends DeleteNetworkAclRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkAclCommand}.
 */
export interface DeleteNetworkAclCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified network ACL. You can't delete the ACL if it's associated with any subnets. You can't delete the default network ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkAclCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkAclCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkAclRequest
 *   DryRun: true || false,
 *   NetworkAclId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkAclCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNetworkAclCommandInput - {@link DeleteNetworkAclCommandInput}
 * @returns {@link DeleteNetworkAclCommandOutput}
 * @see {@link DeleteNetworkAclCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkAclCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a network ACL
 * ```javascript
 * // This example deletes the specified network ACL.
 * const input = {
 *   NetworkAclId: "acl-5fb85d36"
 * };
 * const command = new DeleteNetworkAclCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteNetworkAclCommand extends $Command
  .classBuilder<
    DeleteNetworkAclCommandInput,
    DeleteNetworkAclCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteNetworkAcl", {})
  .n("EC2Client", "DeleteNetworkAclCommand")
  .sc(DeleteNetworkAcl$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkAclRequest;
      output: {};
    };
    sdk: {
      input: DeleteNetworkAclCommandInput;
      output: DeleteNetworkAclCommandOutput;
    };
  };
}

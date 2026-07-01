// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteNetworkAclRequest } from "../models/models_2";
import { DeleteNetworkAcl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class DeleteNetworkAclCommand extends command<DeleteNetworkAclCommandInput, DeleteNetworkAclCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNetworkAcl",
  DeleteNetworkAcl$
) {
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

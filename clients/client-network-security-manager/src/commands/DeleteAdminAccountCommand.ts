// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAdminAccountRequest } from "../models/models_0";
import { DeleteAdminAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAdminAccountCommand}.
 */
export interface DeleteAdminAccountCommandInput extends DeleteAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAdminAccountCommand}.
 */
export interface DeleteAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified AWS Network Security Manager administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, DeleteAdminAccountCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, DeleteAdminAccountCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // DeleteAdminAccountRequest
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAdminAccountCommandInput - {@link DeleteAdminAccountCommandInput}
 * @returns {@link DeleteAdminAccountCommandOutput}
 * @see {@link DeleteAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DeleteAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Reduce your request rate and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For details, see the <code>reason</code> and <code>fieldList</code> members of the response.</p>
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkSecurityManager service.</p>
 *
 *
 * @example Remove an administrator account
 * ```javascript
 * // Removes an account's Network Security Manager administrator designation.
 * const input = {
 *   accountId: "234567890123"
 * };
 * const command = new DeleteAdminAccountCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAdminAccountCommand extends command<DeleteAdminAccountCommandInput, DeleteAdminAccountCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAdminAccount",
  DeleteAdminAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAdminAccountRequest;
      output: {};
    };
    sdk: {
      input: DeleteAdminAccountCommandInput;
      output: DeleteAdminAccountCommandOutput;
    };
  };
}

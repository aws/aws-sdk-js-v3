// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScopeInput } from "../models/models_0";
import { DeleteScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteScopeCommand}.
 */
export interface DeleteScopeCommandInput extends DeleteScopeInput {}
/**
 * @public
 *
 * The output of {@link DeleteScopeCommand}.
 */
export interface DeleteScopeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, DeleteScopeCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, DeleteScopeCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // DeleteScopeInput
 *   scopeIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteScopeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScopeCommandInput - {@link DeleteScopeCommandInput}
 * @returns {@link DeleteScopeCommandOutput}
 * @see {@link DeleteScopeCommandInput} for command's `input` shape.
 * @see {@link DeleteScopeCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For example, the resource was modified concurrently, or it is in a state that does not allow the requested operation.</p>
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
 * @example Delete a scope
 * ```javascript
 * // Deletes a scope by its ARN. The scope must not be associated with any deployment.
 * const input = {
 *   scopeIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:scope:abc123"
 * };
 * const command = new DeleteScopeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteScopeCommand extends command<DeleteScopeCommandInput, DeleteScopeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScope",
  DeleteScope$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScopeInput;
      output: {};
    };
    sdk: {
      input: DeleteScopeCommandInput;
      output: DeleteScopeCommandOutput;
    };
  };
}

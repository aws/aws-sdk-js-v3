// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTemplateInput } from "../models/models_0";
import { DeleteTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTemplateCommand}.
 */
export interface DeleteTemplateCommandInput extends DeleteTemplateInput {}
/**
 * @public
 *
 * The output of {@link DeleteTemplateCommand}.
 */
export interface DeleteTemplateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, DeleteTemplateCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, DeleteTemplateCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // DeleteTemplateInput
 *   templateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTemplateCommandInput - {@link DeleteTemplateCommandInput}
 * @returns {@link DeleteTemplateCommandOutput}
 * @see {@link DeleteTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateCommandOutput} for command's `response` shape.
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
 * @example Delete a template
 * ```javascript
 * // Deletes a template by its ARN. The template must not be associated with any policy.
 * const input = {
 *   templateIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789"
 * };
 * const command = new DeleteTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteTemplateCommand extends command<DeleteTemplateCommandInput, DeleteTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTemplate",
  DeleteTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTemplateInput;
      output: {};
    };
    sdk: {
      input: DeleteTemplateCommandInput;
      output: DeleteTemplateCommandOutput;
    };
  };
}

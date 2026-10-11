// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteNotifyCodeConfigurationInput, DeleteNotifyCodeConfigurationOutput } from "../models/models_0";
import { DeleteNotifyCodeConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNotifyCodeConfigurationCommand}.
 */
export interface DeleteNotifyCodeConfigurationCommandInput extends DeleteNotifyCodeConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteNotifyCodeConfigurationCommand}.
 */
export interface DeleteNotifyCodeConfigurationCommandOutput extends DeleteNotifyCodeConfigurationOutput, __MetadataBearer {}

/**
 * <p>Deletes a notify code configuration. Verifications that are already in progress are not affected, because they capture the policy at the time that the passcode was sent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EndUserMessagingClient, DeleteNotifyCodeConfigurationCommand } from "@aws-sdk/client-endusermessaging"; // ES Modules import
 * // const { EndUserMessagingClient, DeleteNotifyCodeConfigurationCommand } = require("@aws-sdk/client-endusermessaging"); // CommonJS import
 * // import type { EndUserMessagingClientConfig } from "@aws-sdk/client-endusermessaging";
 * const config = {}; // type is EndUserMessagingClientConfig
 * const client = new EndUserMessagingClient(config);
 * const input = { // DeleteNotifyCodeConfigurationInput
 *   notifyCodeConfigurationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNotifyCodeConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNotifyCodeConfigurationCommandInput - {@link DeleteNotifyCodeConfigurationCommandInput}
 * @returns {@link DeleteNotifyCodeConfigurationCommandOutput}
 * @see {@link DeleteNotifyCodeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteNotifyCodeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EndUserMessagingClientResolvedConfig | config} for EndUserMessagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist. Verify that the resource identifier is correct and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link EndUserMessagingServiceException}
 * <p>Base exception class for all service exceptions from EndUserMessaging service.</p>
 *
 *
 * @example Delete a notify code configuration
 * ```javascript
 * //
 * const input = {
 *   notifyCodeConfigurationId: "ncc-abc12345678901234"
 * };
 * const command = new DeleteNotifyCodeConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteNotifyCodeConfigurationCommand extends command<DeleteNotifyCodeConfigurationCommandInput, DeleteNotifyCodeConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNotifyCodeConfiguration",
  DeleteNotifyCodeConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNotifyCodeConfigurationInput;
      output: {};
    };
    sdk: {
      input: DeleteNotifyCodeConfigurationCommandInput;
      output: DeleteNotifyCodeConfigurationCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIntegrationInput, UpdateIntegrationOutput } from "../models/models_0";
import { UpdateIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIntegrationCommand}.
 */
export interface UpdateIntegrationCommandInput extends UpdateIntegrationInput {}
/**
 * @public
 *
 * The output of {@link UpdateIntegrationCommand}.
 */
export interface UpdateIntegrationCommandOutput extends UpdateIntegrationOutput, __MetadataBearer {}

/**
 * <p>Creates an integration's webhook, or rotates the HMAC signing secret of an existing one. The secret is returned only once, in this response, and cannot be retrieved again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdateIntegrationCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdateIntegrationCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdateIntegrationInput
 *   integrationId: "STRING_VALUE", // required
 *   webhookAction: "CREATE_IF_ABSENT" || "ROTATE", // required
 * };
 * const command = new UpdateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIntegrationOutput
 * //   integrationId: "STRING_VALUE", // required
 * //   webhookUrl: "STRING_VALUE",
 * //   secret: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateIntegrationCommandInput - {@link UpdateIntegrationCommandInput}
 * @returns {@link UpdateIntegrationCommandOutput}
 * @see {@link UpdateIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateIntegrationCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class UpdateIntegrationCommand extends command<UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIntegration",
  UpdateIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIntegrationInput;
      output: UpdateIntegrationOutput;
    };
    sdk: {
      input: UpdateIntegrationCommandInput;
      output: UpdateIntegrationCommandOutput;
    };
  };
}

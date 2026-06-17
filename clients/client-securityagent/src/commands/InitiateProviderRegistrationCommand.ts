// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InitiateProviderRegistrationInput, InitiateProviderRegistrationOutput } from "../models/models_0";
import { InitiateProviderRegistration$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InitiateProviderRegistrationCommand}.
 */
export interface InitiateProviderRegistrationCommandInput extends InitiateProviderRegistrationInput {}
/**
 * @public
 *
 * The output of {@link InitiateProviderRegistrationCommand}.
 */
export interface InitiateProviderRegistrationCommandOutput extends InitiateProviderRegistrationOutput, __MetadataBearer {}

/**
 * <p>Initiates the OAuth registration flow with a third-party provider. Returns a redirect URL and CSRF state token for completing the authorization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, InitiateProviderRegistrationCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, InitiateProviderRegistrationCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // InitiateProviderRegistrationInput
 *   provider: "GITHUB" || "GITLAB" || "BITBUCKET" || "CONFLUENCE", // required
 * };
 * const command = new InitiateProviderRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // InitiateProviderRegistrationOutput
 * //   redirectTo: "STRING_VALUE", // required
 * //   csrfState: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param InitiateProviderRegistrationCommandInput - {@link InitiateProviderRegistrationCommandInput}
 * @returns {@link InitiateProviderRegistrationCommandOutput}
 * @see {@link InitiateProviderRegistrationCommandInput} for command's `input` shape.
 * @see {@link InitiateProviderRegistrationCommandOutput} for command's `response` shape.
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
export class InitiateProviderRegistrationCommand extends $Command
  .classBuilder<
    InitiateProviderRegistrationCommandInput,
    InitiateProviderRegistrationCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "InitiateProviderRegistration", {})
  .n("SecurityAgentClient", "InitiateProviderRegistrationCommand")
  .sc(InitiateProviderRegistration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InitiateProviderRegistrationInput;
      output: InitiateProviderRegistrationOutput;
    };
    sdk: {
      input: InitiateProviderRegistrationCommandInput;
      output: InitiateProviderRegistrationCommandOutput;
    };
  };
}

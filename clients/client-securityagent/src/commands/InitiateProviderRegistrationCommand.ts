// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InitiateProviderRegistrationInput, InitiateProviderRegistrationOutput } from "../models/models_0";
import { InitiateProviderRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Initiates the OAuth registration flow with a third-party provider. Returns a redirect URL and CSRF state token for completing the authorization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, InitiateProviderRegistrationCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, InitiateProviderRegistrationCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // InitiateProviderRegistrationInput
 *   provider: "GITHUB" || "GITLAB" || "BITBUCKET" || "CONFLUENCE" || "AZURE_DEVOPS" || "JIRA", // required
 *   targetUrl: "STRING_VALUE",
 *   organizationName: "STRING_VALUE",
 *   clientId: "STRING_VALUE",
 *   clientSecret: "STRING_VALUE",
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link SecurityAgentServiceException}
 *
 * Base exception class for all service exceptions from SecurityAgent service.
 *
 * @public
 */
export class InitiateProviderRegistrationCommand extends command<InitiateProviderRegistrationCommandInput, InitiateProviderRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "InitiateProviderRegistration",
  InitiateProviderRegistration$
) {
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

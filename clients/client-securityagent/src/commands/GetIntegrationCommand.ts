// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIntegrationInput, GetIntegrationOutput } from "../models/models_0";
import { GetIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandInput extends GetIntegrationInput {}
/**
 * @public
 *
 * The output of {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandOutput extends GetIntegrationOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about an integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, GetIntegrationCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, GetIntegrationCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // GetIntegrationInput
 *   integrationId: "STRING_VALUE", // required
 * };
 * const command = new GetIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // GetIntegrationOutput
 * //   integrationId: "STRING_VALUE", // required
 * //   installationId: "STRING_VALUE", // required
 * //   provider: "GITHUB" || "GITLAB" || "BITBUCKET" || "CONFLUENCE", // required
 * //   providerType: "SOURCE_CODE" || "DOCUMENTATION", // required
 * //   displayName: "STRING_VALUE",
 * //   kmsKeyId: "STRING_VALUE",
 * //   targetUrl: "STRING_VALUE",
 * //   privateConnectionName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIntegrationCommandInput - {@link GetIntegrationCommandInput}
 * @returns {@link GetIntegrationCommandOutput}
 * @see {@link GetIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetIntegrationCommand extends command<GetIntegrationCommandInput, GetIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "GetIntegration",
  GetIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIntegrationInput;
      output: GetIntegrationOutput;
    };
    sdk: {
      input: GetIntegrationCommandInput;
      output: GetIntegrationCommandOutput;
    };
  };
}

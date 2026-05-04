// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateIntegrationInput, CreateIntegrationOutput } from "../models/models_0";
import { CreateIntegration$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIntegrationCommand}.
 */
export interface CreateIntegrationCommandInput extends CreateIntegrationInput {}
/**
 * @public
 *
 * The output of {@link CreateIntegrationCommand}.
 */
export interface CreateIntegrationCommandOutput extends CreateIntegrationOutput, __MetadataBearer {}

/**
 * <p>Creates a new integration with a third-party provider, such as GitHub, for code review and remediation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, CreateIntegrationCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, CreateIntegrationCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // CreateIntegrationInput
 *   provider: "GITHUB", // required
 *   input: { // ProviderInput Union: only one key present
 *     github: { // GitHubIntegrationInput
 *       code: "STRING_VALUE", // required
 *       state: "STRING_VALUE", // required
 *       organizationName: "STRING_VALUE",
 *     },
 *   },
 *   integrationDisplayName: "STRING_VALUE", // required
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntegrationOutput
 * //   integrationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateIntegrationCommandInput - {@link CreateIntegrationCommandInput}
 * @returns {@link CreateIntegrationCommandOutput}
 * @see {@link CreateIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationCommandOutput} for command's `response` shape.
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
export class CreateIntegrationCommand extends $Command
  .classBuilder<
    CreateIntegrationCommandInput,
    CreateIntegrationCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "CreateIntegration", {})
  .n("SecurityAgentClient", "CreateIntegrationCommand")
  .sc(CreateIntegration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIntegrationInput;
      output: CreateIntegrationOutput;
    };
    sdk: {
      input: CreateIntegrationCommandInput;
      output: CreateIntegrationCommandOutput;
    };
  };
}

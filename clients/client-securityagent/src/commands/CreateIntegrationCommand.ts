// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIntegrationInput, CreateIntegrationOutput } from "../models/models_0";
import { CreateIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *   provider: "GITHUB" || "GITLAB" || "BITBUCKET" || "CONFLUENCE", // required
 *   input: { // ProviderInput Union: only one key present
 *     github: { // GitHubIntegrationInput
 *       code: "STRING_VALUE", // required
 *       state: "STRING_VALUE", // required
 *       organizationName: "STRING_VALUE",
 *       targetUrl: "STRING_VALUE",
 *       installationId: "STRING_VALUE",
 *     },
 *     gitlab: { // GitLabIntegrationInput
 *       accessToken: "STRING_VALUE", // required
 *       targetUrl: "STRING_VALUE",
 *       tokenType: "PERSONAL" || "GROUP", // required
 *       groupId: "STRING_VALUE",
 *     },
 *     bitbucket: { // BitbucketIntegrationInput
 *       installationId: "STRING_VALUE", // required
 *       workspace: "STRING_VALUE", // required
 *       code: "STRING_VALUE", // required
 *       state: "STRING_VALUE", // required
 *     },
 *     confluence: { // ConfluenceIntegrationInput
 *       installationId: "STRING_VALUE", // required
 *       code: "STRING_VALUE", // required
 *       state: "STRING_VALUE", // required
 *       siteUrl: "STRING_VALUE", // required
 *     },
 *   },
 *   integrationDisplayName: "STRING_VALUE", // required
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   privateConnectionName: "STRING_VALUE",
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
export class CreateIntegrationCommand extends command<CreateIntegrationCommandInput, CreateIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "CreateIntegration",
  CreateIntegration$
) {
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

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
 * Creates a new integration with an external source provider. Repeating an identical
 * request with the same clientToken returns the original integrationId, integrationArn,
 * and createdAt. Token records are retained for eight hours after success or terminal failure,
 * including after the integration is deleted; replaying a deleted integration's token
 * does not recreate it. An identical request with a retained terminal failure returns
 * the recorded error.
 *
 * Reusing a token with different parameters returns ValidationException. A fresh token
 * starts a new create attempt; if the name is already owned by another integration,
 * ConflictException includes that integration's identifier. An attempt still in progress
 * may return ThrottlingException with retryAfterSeconds set to 1; retry with the same token
 * and identical parameters.
 *
 * GitHub authorization codes are single use. Retry an unresolved attempt with its
 * original token and unchanged parameters first. If the service reports a terminal
 * failure, an expired attempt, or a successful token exchange whose integration could
 * not be saved, restart GitHub authorization with a fresh token and authorization code.
 * The service does not checkpoint provider results for recovery by another request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, CreateIntegrationCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, CreateIntegrationCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // CreateIntegrationInput
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   providerConfiguration: { // ProviderConfiguration Union: only one key present
 *     github: { // GitHubConfiguration
 *       authorization: { // GitHubAuthorizationConfiguration
 *         authorizationCode: "STRING_VALUE", // required
 *         state: "STRING_VALUE", // required
 *         redirectUrl: "STRING_VALUE",
 *       },
 *       organizationName: "STRING_VALUE",
 *     },
 *     gitlab: { // GitLabConfiguration
 *       instanceUrl: "STRING_VALUE", // required
 *       targetType: "GROUP" || "PROJECT", // required
 *       targetPath: "STRING_VALUE", // required
 *       accessToken: "STRING_VALUE", // required
 *     },
 *     s3: { // S3Configuration
 *       bucket: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       externalId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntegrationOutput
 * //   integrationId: "STRING_VALUE", // required
 * //   integrationArn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateIntegrationCommandInput - {@link CreateIntegrationCommandInput}
 * @returns {@link CreateIntegrationCommandOutput}
 * @see {@link CreateIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed a service quota. Review your quota and request an increase if needed.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
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

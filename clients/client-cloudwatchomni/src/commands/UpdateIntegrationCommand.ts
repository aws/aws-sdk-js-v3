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
 * Updates an existing integration, identified by its id, ARN, or name. Only the
 * fields you provide are changed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, UpdateIntegrationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, UpdateIntegrationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // UpdateIntegrationInput
 *   identifier: { // IntegrationIdentifier Union: only one key present
 *     integrationId: "STRING_VALUE",
 *     integrationArn: "STRING_VALUE",
 *     integrationName: "STRING_VALUE",
 *   },
 *   credential: { // IntegrationCredential Union: only one key present
 *     oauthCodeCredential: { // OAuthCodeCredential
 *       authCode: "STRING_VALUE", // required
 *     },
 *     oauthClientCredential: { // OAuthClientCredential
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *       providerId: "STRING_VALUE",
 *     },
 *     apiKeyCredential: { // ApiKeyCredential
 *       apiKeyValue: "STRING_VALUE", // required
 *     },
 *   },
 *   integrationAttributes: { // StringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   roleArn: "STRING_VALUE",
 * };
 * const command = new UpdateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIntegrationOutput
 * //   integration: { // Integration
 * //     integrationId: "STRING_VALUE", // required
 * //     integrationArn: "STRING_VALUE",
 * //     integrationType: "AWS_CONFIG_SLREC" || "SLACK" || "EXTERNAL_AGENT" || "AWS_INTEGRATION", // required
 * //     name: "STRING_VALUE", // required
 * //     status: "ACTIVE" || "DELETED" || "PENDING" || "PENDING_OAUTH" || "ERROR" || "FAILED", // required
 * //     authType: "NONE" || "OAUTH2" || "API_KEY",
 * //     credentialArn: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     integrationAttributes: { // StringMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     authorizationUrl: "STRING_VALUE",
 * //     errorMessage: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     scope: "ACCOUNT" || "ORGANIZATION",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIntegrationCommandInput - {@link UpdateIntegrationCommandInput}
 * @returns {@link UpdateIntegrationCommandOutput}
 * @see {@link UpdateIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Update an integration's attributes
 * ```javascript
 * // The following example replaces the provider-specific attributes of the integration identified by its id. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   identifier: {
 *     integrationId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 *   },
 *   integrationAttributes: {
 *     notificationChannel: "ops-oncall"
 *   }
 * };
 * const command = new UpdateIntegrationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   integration: {
 *     createdAt: "2026-09-16T00:03:00Z",
 *     integrationArn: "arn:aws:cloudwatch:us-east-1:123456789012:integration/a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     integrationAttributes: {
 *       notificationChannel: "ops-oncall"
 *     },
 *     integrationId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     integrationType: "AWS_INTEGRATION",
 *     name: "my-aws-integration",
 *     status: "ACTIVE",
 *     updatedAt: "2026-09-16T12:00:00Z"
 *   }
 * }
 * *\/
 * ```
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

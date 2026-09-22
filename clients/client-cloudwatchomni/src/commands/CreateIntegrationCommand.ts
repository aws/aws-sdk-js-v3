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
 * Creates an integration with a third-party provider. Returns the integration
 * identifier and its initial status; when the provider requires interactive
 * consent, an authorization URL is returned for the user to complete setup.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, CreateIntegrationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, CreateIntegrationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // CreateIntegrationInput
 *   integrationType: "AWS_CONFIG_SLREC" || "SLACK" || "EXTERNAL_AGENT" || "AWS_INTEGRATION", // required
 *   name: "STRING_VALUE", // required
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntegrationOutput
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
 * @param CreateIntegrationCommandInput - {@link CreateIntegrationCommandInput}
 * @returns {@link CreateIntegrationCommandOutput}
 * @see {@link CreateIntegrationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The operation could not be completed because of a conflict with the current
 * state of the resource.
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
 * @example Create an AWS integration
 * ```javascript
 * // The following example creates an AWS_INTEGRATION named my-aws-integration, authorized by an IAM role. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   clientToken: "b3f8c7d6-5b4a-4c3d-9e2f-1a0b2c3d4e5f",
 *   integrationType: "AWS_INTEGRATION",
 *   name: "my-aws-integration",
 *   roleArn: "arn:aws:iam::123456789012:role/service-role/CloudWatchIntegrationRole"
 * };
 * const command = new CreateIntegrationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   integration: {
 *     createdAt: "2026-09-16T00:03:00Z",
 *     integrationArn: "arn:aws:cloudwatch:us-east-1:123456789012:integration/a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     integrationId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     integrationType: "AWS_INTEGRATION",
 *     name: "my-aws-integration",
 *     roleArn: "arn:aws:iam::123456789012:role/service-role/CloudWatchIntegrationRole",
 *     status: "ACTIVE",
 *     updatedAt: "2026-09-16T00:03:00Z"
 *   }
 * }
 * *\/
 * ```
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

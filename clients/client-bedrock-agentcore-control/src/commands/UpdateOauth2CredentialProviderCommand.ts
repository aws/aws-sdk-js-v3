// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateOauth2CredentialProviderRequest, UpdateOauth2CredentialProviderResponse } from "../models/models_0";
import { UpdateOauth2CredentialProvider } from "../schemas/schemas_6_Credential";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOauth2CredentialProviderCommand}.
 */
export interface UpdateOauth2CredentialProviderCommandInput extends UpdateOauth2CredentialProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOauth2CredentialProviderCommand}.
 */
export interface UpdateOauth2CredentialProviderCommandOutput
  extends UpdateOauth2CredentialProviderResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing OAuth2 credential provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateOauth2CredentialProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateOauth2CredentialProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateOauth2CredentialProviderRequest
 *   name: "STRING_VALUE", // required
 *   credentialProviderVendor: "GoogleOauth2" || "GithubOauth2" || "SlackOauth2" || "SalesforceOauth2" || "MicrosoftOauth2" || "CustomOauth2", // required
 *   oauth2ProviderConfigInput: { // Oauth2ProviderConfigInput Union: only one key present
 *     customOauth2ProviderConfig: { // CustomOauth2ProviderConfigInput
 *       oauthDiscovery: { // Oauth2Discovery Union: only one key present
 *         discoveryUrl: "STRING_VALUE",
 *         authorizationServerMetadata: { // Oauth2AuthorizationServerMetadata
 *           issuer: "STRING_VALUE", // required
 *           authorizationEndpoint: "STRING_VALUE", // required
 *           tokenEndpoint: "STRING_VALUE", // required
 *           responseTypes: [ // ResponseListType
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *     },
 *     googleOauth2ProviderConfig: { // GoogleOauth2ProviderConfigInput
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *     },
 *     githubOauth2ProviderConfig: { // GithubOauth2ProviderConfigInput
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *     },
 *     slackOauth2ProviderConfig: { // SlackOauth2ProviderConfigInput
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *     },
 *     salesforceOauth2ProviderConfig: { // SalesforceOauth2ProviderConfigInput
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *     },
 *     microsoftOauth2ProviderConfig: { // MicrosoftOauth2ProviderConfigInput
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateOauth2CredentialProviderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOauth2CredentialProviderResponse
 * //   clientSecretArn: { // Secret
 * //     secretArn: "STRING_VALUE", // required
 * //   },
 * //   name: "STRING_VALUE", // required
 * //   credentialProviderVendor: "GoogleOauth2" || "GithubOauth2" || "SlackOauth2" || "SalesforceOauth2" || "MicrosoftOauth2" || "CustomOauth2", // required
 * //   credentialProviderArn: "STRING_VALUE", // required
 * //   oauth2ProviderConfigOutput: { // Oauth2ProviderConfigOutput Union: only one key present
 * //     customOauth2ProviderConfig: { // CustomOauth2ProviderConfigOutput
 * //       oauthDiscovery: { // Oauth2Discovery Union: only one key present
 * //         discoveryUrl: "STRING_VALUE",
 * //         authorizationServerMetadata: { // Oauth2AuthorizationServerMetadata
 * //           issuer: "STRING_VALUE", // required
 * //           authorizationEndpoint: "STRING_VALUE", // required
 * //           tokenEndpoint: "STRING_VALUE", // required
 * //           responseTypes: [ // ResponseListType
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     googleOauth2ProviderConfig: { // GoogleOauth2ProviderConfigOutput
 * //       oauthDiscovery: {//  Union: only one key present
 * //         discoveryUrl: "STRING_VALUE",
 * //         authorizationServerMetadata: {
 * //           issuer: "STRING_VALUE", // required
 * //           authorizationEndpoint: "STRING_VALUE", // required
 * //           tokenEndpoint: "STRING_VALUE", // required
 * //           responseTypes: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     githubOauth2ProviderConfig: { // GithubOauth2ProviderConfigOutput
 * //       oauthDiscovery: {//  Union: only one key present
 * //         discoveryUrl: "STRING_VALUE",
 * //         authorizationServerMetadata: {
 * //           issuer: "STRING_VALUE", // required
 * //           authorizationEndpoint: "STRING_VALUE", // required
 * //           tokenEndpoint: "STRING_VALUE", // required
 * //           responseTypes: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     slackOauth2ProviderConfig: { // SlackOauth2ProviderConfigOutput
 * //       oauthDiscovery: {//  Union: only one key present
 * //         discoveryUrl: "STRING_VALUE",
 * //         authorizationServerMetadata: {
 * //           issuer: "STRING_VALUE", // required
 * //           authorizationEndpoint: "STRING_VALUE", // required
 * //           tokenEndpoint: "STRING_VALUE", // required
 * //           responseTypes: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     salesforceOauth2ProviderConfig: { // SalesforceOauth2ProviderConfigOutput
 * //       oauthDiscovery: {//  Union: only one key present
 * //         discoveryUrl: "STRING_VALUE",
 * //         authorizationServerMetadata: {
 * //           issuer: "STRING_VALUE", // required
 * //           authorizationEndpoint: "STRING_VALUE", // required
 * //           tokenEndpoint: "STRING_VALUE", // required
 * //           responseTypes: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     microsoftOauth2ProviderConfig: { // MicrosoftOauth2ProviderConfigOutput
 * //       oauthDiscovery: "<Oauth2Discovery>", // required
 * //     },
 * //   },
 * //   createdTime: new Date("TIMESTAMP"), // required
 * //   lastUpdatedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateOauth2CredentialProviderCommandInput - {@link UpdateOauth2CredentialProviderCommandInput}
 * @returns {@link UpdateOauth2CredentialProviderCommandOutput}
 * @see {@link UpdateOauth2CredentialProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateOauth2CredentialProviderCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link DecryptionFailure} (client fault)
 *  <p>Exception thrown when decryption of a secret fails.</p>
 *
 * @throws {@link EncryptionFailure} (client fault)
 *  <p>Exception thrown when encryption of a secret fails.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class UpdateOauth2CredentialProviderCommand extends $Command
  .classBuilder<
    UpdateOauth2CredentialProviderCommandInput,
    UpdateOauth2CredentialProviderCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdateOauth2CredentialProvider", {})
  .n("BedrockAgentCoreControlClient", "UpdateOauth2CredentialProviderCommand")
  .sc(UpdateOauth2CredentialProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOauth2CredentialProviderRequest;
      output: UpdateOauth2CredentialProviderResponse;
    };
    sdk: {
      input: UpdateOauth2CredentialProviderCommandInput;
      output: UpdateOauth2CredentialProviderCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateOauth2CredentialProviderRequest, CreateOauth2CredentialProviderResponse } from "../models/models_0";
import { CreateOauth2CredentialProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOauth2CredentialProviderCommand}.
 */
export interface CreateOauth2CredentialProviderCommandInput extends CreateOauth2CredentialProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateOauth2CredentialProviderCommand}.
 */
export interface CreateOauth2CredentialProviderCommandOutput
  extends CreateOauth2CredentialProviderResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new OAuth2 credential provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateOauth2CredentialProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateOauth2CredentialProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateOauth2CredentialProviderRequest
 *   name: "STRING_VALUE", // required
 *   credentialProviderVendor: "GoogleOauth2" || "GithubOauth2" || "SlackOauth2" || "SalesforceOauth2" || "MicrosoftOauth2" || "CustomOauth2" || "AtlassianOauth2" || "LinkedinOauth2" || "XOauth2" || "OktaOauth2" || "OneLoginOauth2" || "PingOneOauth2" || "FacebookOauth2" || "YandexOauth2" || "RedditOauth2" || "ZoomOauth2" || "TwitchOauth2" || "SpotifyOauth2" || "DropboxOauth2" || "NotionOauth2" || "HubspotOauth2" || "CyberArkOauth2" || "FusionAuthOauth2" || "Auth0Oauth2" || "CognitoOauth2", // required
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
 *           tokenEndpointAuthMethods: [ // TokenEndpointAuthMethodsType
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
 *       tenantId: "STRING_VALUE",
 *     },
 *     atlassianOauth2ProviderConfig: { // AtlassianOauth2ProviderConfigInput
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *     },
 *     linkedinOauth2ProviderConfig: { // LinkedinOauth2ProviderConfigInput
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *     },
 *     includedOauth2ProviderConfig: { // IncludedOauth2ProviderConfigInput
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *       issuer: "STRING_VALUE",
 *       authorizationEndpoint: "STRING_VALUE",
 *       tokenEndpoint: "STRING_VALUE",
 *     },
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateOauth2CredentialProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateOauth2CredentialProviderResponse
 * //   clientSecretArn: { // Secret
 * //     secretArn: "STRING_VALUE", // required
 * //   },
 * //   name: "STRING_VALUE", // required
 * //   credentialProviderArn: "STRING_VALUE", // required
 * //   callbackUrl: "STRING_VALUE",
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
 * //           tokenEndpointAuthMethods: [ // TokenEndpointAuthMethodsType
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       clientId: "STRING_VALUE",
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
 * //           tokenEndpointAuthMethods: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       clientId: "STRING_VALUE",
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
 * //           tokenEndpointAuthMethods: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       clientId: "STRING_VALUE",
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
 * //           tokenEndpointAuthMethods: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       clientId: "STRING_VALUE",
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
 * //           tokenEndpointAuthMethods: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       clientId: "STRING_VALUE",
 * //     },
 * //     microsoftOauth2ProviderConfig: { // MicrosoftOauth2ProviderConfigOutput
 * //       oauthDiscovery: "<Oauth2Discovery>", // required
 * //       clientId: "STRING_VALUE",
 * //     },
 * //     atlassianOauth2ProviderConfig: { // AtlassianOauth2ProviderConfigOutput
 * //       oauthDiscovery: "<Oauth2Discovery>", // required
 * //       clientId: "STRING_VALUE",
 * //     },
 * //     linkedinOauth2ProviderConfig: { // LinkedinOauth2ProviderConfigOutput
 * //       oauthDiscovery: "<Oauth2Discovery>", // required
 * //       clientId: "STRING_VALUE",
 * //     },
 * //     includedOauth2ProviderConfig: { // IncludedOauth2ProviderConfigOutput
 * //       oauthDiscovery: "<Oauth2Discovery>", // required
 * //       clientId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateOauth2CredentialProviderCommandInput - {@link CreateOauth2CredentialProviderCommandInput}
 * @returns {@link CreateOauth2CredentialProviderCommandOutput}
 * @see {@link CreateOauth2CredentialProviderCommandInput} for command's `input` shape.
 * @see {@link CreateOauth2CredentialProviderCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Exception thrown when a resource limit is exceeded.</p>
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
export class CreateOauth2CredentialProviderCommand extends $Command
  .classBuilder<
    CreateOauth2CredentialProviderCommandInput,
    CreateOauth2CredentialProviderCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateOauth2CredentialProvider", {})
  .n("BedrockAgentCoreControlClient", "CreateOauth2CredentialProviderCommand")
  .sc(CreateOauth2CredentialProvider$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOauth2CredentialProviderRequest;
      output: CreateOauth2CredentialProviderResponse;
    };
    sdk: {
      input: CreateOauth2CredentialProviderCommandInput;
      output: CreateOauth2CredentialProviderCommandOutput;
    };
  };
}

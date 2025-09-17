// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetOauth2CredentialProviderRequest, GetOauth2CredentialProviderResponse } from "../models/models_0";
import {
  de_GetOauth2CredentialProviderCommand,
  se_GetOauth2CredentialProviderCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOauth2CredentialProviderCommand}.
 */
export interface GetOauth2CredentialProviderCommandInput extends GetOauth2CredentialProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetOauth2CredentialProviderCommand}.
 */
export interface GetOauth2CredentialProviderCommandOutput
  extends GetOauth2CredentialProviderResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about an OAuth2 credential provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetOauth2CredentialProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetOauth2CredentialProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetOauth2CredentialProviderRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetOauth2CredentialProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetOauth2CredentialProviderResponse
 * //   clientSecretArn: { // Secret
 * //     secretArn: "STRING_VALUE", // required
 * //   },
 * //   name: "STRING_VALUE", // required
 * //   credentialProviderArn: "STRING_VALUE", // required
 * //   credentialProviderVendor: "GoogleOauth2" || "GithubOauth2" || "SlackOauth2" || "SalesforceOauth2" || "MicrosoftOauth2" || "CustomOauth2", // required
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
 * @param GetOauth2CredentialProviderCommandInput - {@link GetOauth2CredentialProviderCommandInput}
 * @returns {@link GetOauth2CredentialProviderCommandOutput}
 * @see {@link GetOauth2CredentialProviderCommandInput} for command's `input` shape.
 * @see {@link GetOauth2CredentialProviderCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link DecryptionFailure} (client fault)
 *  <p>Exception thrown when decryption of a secret fails.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
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
export class GetOauth2CredentialProviderCommand extends $Command
  .classBuilder<
    GetOauth2CredentialProviderCommandInput,
    GetOauth2CredentialProviderCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCoreControl", "GetOauth2CredentialProvider", {})
  .n("BedrockAgentCoreControlClient", "GetOauth2CredentialProviderCommand")
  .f(void 0, void 0)
  .ser(se_GetOauth2CredentialProviderCommand)
  .de(de_GetOauth2CredentialProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOauth2CredentialProviderRequest;
      output: GetOauth2CredentialProviderResponse;
    };
    sdk: {
      input: GetOauth2CredentialProviderCommandInput;
      output: GetOauth2CredentialProviderCommandOutput;
    };
  };
}

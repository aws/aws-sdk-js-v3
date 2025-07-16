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
import { ListOauth2CredentialProvidersRequest, ListOauth2CredentialProvidersResponse } from "../models/models_0";
import {
  de_ListOauth2CredentialProvidersCommand,
  se_ListOauth2CredentialProvidersCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOauth2CredentialProvidersCommand}.
 */
export interface ListOauth2CredentialProvidersCommandInput extends ListOauth2CredentialProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListOauth2CredentialProvidersCommand}.
 */
export interface ListOauth2CredentialProvidersCommandOutput
  extends ListOauth2CredentialProvidersResponse,
    __MetadataBearer {}

/**
 * <p>Lists all OAuth2 credential providers in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListOauth2CredentialProvidersCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListOauth2CredentialProvidersCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListOauth2CredentialProvidersRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListOauth2CredentialProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListOauth2CredentialProvidersResponse
 * //   credentialProviders: [ // Oauth2CredentialProviders // required
 * //     { // Oauth2CredentialProviderItem
 * //       name: "STRING_VALUE", // required
 * //       credentialProviderVendor: "GoogleOauth2" || "GithubOauth2" || "SlackOauth2" || "SalesforceOauth2" || "MicrosoftOauth2" || "CustomOauth2", // required
 * //       credentialProviderArn: "STRING_VALUE", // required
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOauth2CredentialProvidersCommandInput - {@link ListOauth2CredentialProvidersCommandInput}
 * @returns {@link ListOauth2CredentialProvidersCommandOutput}
 * @see {@link ListOauth2CredentialProvidersCommandInput} for command's `input` shape.
 * @see {@link ListOauth2CredentialProvidersCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
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
export class ListOauth2CredentialProvidersCommand extends $Command
  .classBuilder<
    ListOauth2CredentialProvidersCommandInput,
    ListOauth2CredentialProvidersCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "ListOauth2CredentialProviders", {})
  .n("BedrockAgentCoreControlClient", "ListOauth2CredentialProvidersCommand")
  .f(void 0, void 0)
  .ser(se_ListOauth2CredentialProvidersCommand)
  .de(de_ListOauth2CredentialProvidersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOauth2CredentialProvidersRequest;
      output: ListOauth2CredentialProvidersResponse;
    };
    sdk: {
      input: ListOauth2CredentialProvidersCommandInput;
      output: ListOauth2CredentialProvidersCommandOutput;
    };
  };
}

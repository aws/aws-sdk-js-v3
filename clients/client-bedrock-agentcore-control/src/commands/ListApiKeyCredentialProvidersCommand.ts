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
import type { ListApiKeyCredentialProvidersRequest, ListApiKeyCredentialProvidersResponse } from "../models/models_0";
import { ListApiKeyCredentialProviders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApiKeyCredentialProvidersCommand}.
 */
export interface ListApiKeyCredentialProvidersCommandInput extends ListApiKeyCredentialProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListApiKeyCredentialProvidersCommand}.
 */
export interface ListApiKeyCredentialProvidersCommandOutput extends ListApiKeyCredentialProvidersResponse, __MetadataBearer {}

/**
 * <p>Lists all API key credential providers in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListApiKeyCredentialProvidersCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListApiKeyCredentialProvidersCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListApiKeyCredentialProvidersRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListApiKeyCredentialProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListApiKeyCredentialProvidersResponse
 * //   credentialProviders: [ // ApiKeyCredentialProviders // required
 * //     { // ApiKeyCredentialProviderItem
 * //       name: "STRING_VALUE", // required
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
 * @param ListApiKeyCredentialProvidersCommandInput - {@link ListApiKeyCredentialProvidersCommandInput}
 * @returns {@link ListApiKeyCredentialProvidersCommandOutput}
 * @see {@link ListApiKeyCredentialProvidersCommandInput} for command's `input` shape.
 * @see {@link ListApiKeyCredentialProvidersCommandOutput} for command's `response` shape.
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
export class ListApiKeyCredentialProvidersCommand extends $Command
  .classBuilder<
    ListApiKeyCredentialProvidersCommandInput,
    ListApiKeyCredentialProvidersCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListApiKeyCredentialProviders", {})
  .n("BedrockAgentCoreControlClient", "ListApiKeyCredentialProvidersCommand")
  .sc(ListApiKeyCredentialProviders$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApiKeyCredentialProvidersRequest;
      output: ListApiKeyCredentialProvidersResponse;
    };
    sdk: {
      input: ListApiKeyCredentialProvidersCommandInput;
      output: ListApiKeyCredentialProvidersCommandOutput;
    };
  };
}

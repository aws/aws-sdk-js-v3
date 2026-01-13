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
import type { CreateApiKeyCredentialProviderRequest, CreateApiKeyCredentialProviderResponse } from "../models/models_0";
import { CreateApiKeyCredentialProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApiKeyCredentialProviderCommand}.
 */
export interface CreateApiKeyCredentialProviderCommandInput extends CreateApiKeyCredentialProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateApiKeyCredentialProviderCommand}.
 */
export interface CreateApiKeyCredentialProviderCommandOutput extends CreateApiKeyCredentialProviderResponse, __MetadataBearer {}

/**
 * <p>Creates a new API key credential provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateApiKeyCredentialProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateApiKeyCredentialProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateApiKeyCredentialProviderRequest
 *   name: "STRING_VALUE", // required
 *   apiKey: "STRING_VALUE", // required
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateApiKeyCredentialProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateApiKeyCredentialProviderResponse
 * //   apiKeySecretArn: { // Secret
 * //     secretArn: "STRING_VALUE", // required
 * //   },
 * //   name: "STRING_VALUE", // required
 * //   credentialProviderArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateApiKeyCredentialProviderCommandInput - {@link CreateApiKeyCredentialProviderCommandInput}
 * @returns {@link CreateApiKeyCredentialProviderCommandOutput}
 * @see {@link CreateApiKeyCredentialProviderCommandInput} for command's `input` shape.
 * @see {@link CreateApiKeyCredentialProviderCommandOutput} for command's `response` shape.
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
export class CreateApiKeyCredentialProviderCommand extends $Command
  .classBuilder<
    CreateApiKeyCredentialProviderCommandInput,
    CreateApiKeyCredentialProviderCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateApiKeyCredentialProvider", {})
  .n("BedrockAgentCoreControlClient", "CreateApiKeyCredentialProviderCommand")
  .sc(CreateApiKeyCredentialProvider$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApiKeyCredentialProviderRequest;
      output: CreateApiKeyCredentialProviderResponse;
    };
    sdk: {
      input: CreateApiKeyCredentialProviderCommandInput;
      output: CreateApiKeyCredentialProviderCommandOutput;
    };
  };
}

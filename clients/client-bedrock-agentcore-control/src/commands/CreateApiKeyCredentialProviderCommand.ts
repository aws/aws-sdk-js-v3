// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateApiKeyCredentialProviderRequest, CreateApiKeyCredentialProviderResponse } from "../models/models_0";
import { CreateApiKeyCredentialProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new API key credential provider.
 *
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
 *   apiKey: "STRING_VALUE",
 *   apiKeySecretConfig: { // SecretReference
 *     secretId: "STRING_VALUE", // required
 *     jsonKey: "STRING_VALUE", // required
 *   },
 *   apiKeySecretSource: "MANAGED" || "EXTERNAL",
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
 * //   apiKeySecretJsonKey: "STRING_VALUE",
 * //   apiKeySecretSource: "MANAGED" || "EXTERNAL",
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
 *
 * This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link DecryptionFailure} (client fault)
 *
 * Exception thrown when decryption of a secret fails.
 *
 * @throws {@link EncryptionFailure} (client fault)
 *
 * Exception thrown when encryption of a secret fails.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Exception thrown when a resource limit is exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This exception is thrown when a request is made beyond the service quota
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentCoreControl service.
 *
 * @public
 */
export class CreateApiKeyCredentialProviderCommand extends command<CreateApiKeyCredentialProviderCommandInput, CreateApiKeyCredentialProviderCommandOutput>(
  _ep0,
  _mw0,
  "CreateApiKeyCredentialProvider",
  CreateApiKeyCredentialProvider$
) {
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

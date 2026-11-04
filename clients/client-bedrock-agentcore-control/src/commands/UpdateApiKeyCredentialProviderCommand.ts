// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateApiKeyCredentialProviderRequest, UpdateApiKeyCredentialProviderResponse } from "../models/models_0";
import { UpdateApiKeyCredentialProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateApiKeyCredentialProviderCommand}.
 */
export interface UpdateApiKeyCredentialProviderCommandInput extends UpdateApiKeyCredentialProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApiKeyCredentialProviderCommand}.
 */
export interface UpdateApiKeyCredentialProviderCommandOutput extends UpdateApiKeyCredentialProviderResponse, __MetadataBearer {}

/**
 * Updates an existing API key credential provider.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateApiKeyCredentialProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateApiKeyCredentialProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateApiKeyCredentialProviderRequest
 *   name: "STRING_VALUE", // required
 *   apiKey: "STRING_VALUE",
 *   apiKeySecretConfig: { // SecretReference
 *     secretId: "STRING_VALUE", // required
 *     jsonKey: "STRING_VALUE", // required
 *   },
 *   apiKeySecretSource: "MANAGED" || "EXTERNAL",
 * };
 * const command = new UpdateApiKeyCredentialProviderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApiKeyCredentialProviderResponse
 * //   apiKeySecretArn: { // Secret
 * //     secretArn: "STRING_VALUE", // required
 * //   },
 * //   apiKeySecretJsonKey: "STRING_VALUE",
 * //   apiKeySecretSource: "MANAGED" || "EXTERNAL",
 * //   name: "STRING_VALUE", // required
 * //   credentialProviderArn: "STRING_VALUE", // required
 * //   createdTime: new Date("TIMESTAMP"), // required
 * //   lastUpdatedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateApiKeyCredentialProviderCommandInput - {@link UpdateApiKeyCredentialProviderCommandInput}
 * @returns {@link UpdateApiKeyCredentialProviderCommandOutput}
 * @see {@link UpdateApiKeyCredentialProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateApiKeyCredentialProviderCommandOutput} for command's `response` shape.
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
export class UpdateApiKeyCredentialProviderCommand extends command<UpdateApiKeyCredentialProviderCommandInput, UpdateApiKeyCredentialProviderCommandOutput>(
  _ep0,
  _mw0,
  "UpdateApiKeyCredentialProvider",
  UpdateApiKeyCredentialProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApiKeyCredentialProviderRequest;
      output: UpdateApiKeyCredentialProviderResponse;
    };
    sdk: {
      input: UpdateApiKeyCredentialProviderCommandInput;
      output: UpdateApiKeyCredentialProviderCommandOutput;
    };
  };
}

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
import {
  UpdateApiKeyCredentialProviderRequest,
  UpdateApiKeyCredentialProviderRequestFilterSensitiveLog,
  UpdateApiKeyCredentialProviderResponse,
} from "../models/models_0";
import {
  de_UpdateApiKeyCredentialProviderCommand,
  se_UpdateApiKeyCredentialProviderCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface UpdateApiKeyCredentialProviderCommandOutput
  extends UpdateApiKeyCredentialProviderResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing API key credential provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateApiKeyCredentialProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateApiKeyCredentialProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateApiKeyCredentialProviderRequest
 *   name: "STRING_VALUE", // required
 *   apiKey: "STRING_VALUE", // required
 * };
 * const command = new UpdateApiKeyCredentialProviderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApiKeyCredentialProviderResponse
 * //   apiKeySecretArn: { // Secret
 * //     secretArn: "STRING_VALUE", // required
 * //   },
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
export class UpdateApiKeyCredentialProviderCommand extends $Command
  .classBuilder<
    UpdateApiKeyCredentialProviderCommandInput,
    UpdateApiKeyCredentialProviderCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "UpdateApiKeyCredentialProvider", {})
  .n("BedrockAgentCoreControlClient", "UpdateApiKeyCredentialProviderCommand")
  .f(UpdateApiKeyCredentialProviderRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateApiKeyCredentialProviderCommand)
  .de(de_UpdateApiKeyCredentialProviderCommand)
  .build() {
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

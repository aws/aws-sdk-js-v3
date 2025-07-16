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
import { GetApiKeyCredentialProviderRequest, GetApiKeyCredentialProviderResponse } from "../models/models_0";
import {
  de_GetApiKeyCredentialProviderCommand,
  se_GetApiKeyCredentialProviderCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApiKeyCredentialProviderCommand}.
 */
export interface GetApiKeyCredentialProviderCommandInput extends GetApiKeyCredentialProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetApiKeyCredentialProviderCommand}.
 */
export interface GetApiKeyCredentialProviderCommandOutput
  extends GetApiKeyCredentialProviderResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about an API key credential provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetApiKeyCredentialProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetApiKeyCredentialProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetApiKeyCredentialProviderRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetApiKeyCredentialProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetApiKeyCredentialProviderResponse
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
 * @param GetApiKeyCredentialProviderCommandInput - {@link GetApiKeyCredentialProviderCommandInput}
 * @returns {@link GetApiKeyCredentialProviderCommandOutput}
 * @see {@link GetApiKeyCredentialProviderCommandInput} for command's `input` shape.
 * @see {@link GetApiKeyCredentialProviderCommandOutput} for command's `response` shape.
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
export class GetApiKeyCredentialProviderCommand extends $Command
  .classBuilder<
    GetApiKeyCredentialProviderCommandInput,
    GetApiKeyCredentialProviderCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "GetApiKeyCredentialProvider", {})
  .n("BedrockAgentCoreControlClient", "GetApiKeyCredentialProviderCommand")
  .f(void 0, void 0)
  .ser(se_GetApiKeyCredentialProviderCommand)
  .de(de_GetApiKeyCredentialProviderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApiKeyCredentialProviderRequest;
      output: GetApiKeyCredentialProviderResponse;
    };
    sdk: {
      input: GetApiKeyCredentialProviderCommandInput;
      output: GetApiKeyCredentialProviderCommandOutput;
    };
  };
}

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
import { DeleteOauth2CredentialProviderRequest, DeleteOauth2CredentialProviderResponse } from "../models/models_0";
import { DeleteOauth2CredentialProvider } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOauth2CredentialProviderCommand}.
 */
export interface DeleteOauth2CredentialProviderCommandInput extends DeleteOauth2CredentialProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOauth2CredentialProviderCommand}.
 */
export interface DeleteOauth2CredentialProviderCommandOutput
  extends DeleteOauth2CredentialProviderResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an OAuth2 credential provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteOauth2CredentialProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteOauth2CredentialProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteOauth2CredentialProviderRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteOauth2CredentialProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOauth2CredentialProviderCommandInput - {@link DeleteOauth2CredentialProviderCommandInput}
 * @returns {@link DeleteOauth2CredentialProviderCommandOutput}
 * @see {@link DeleteOauth2CredentialProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteOauth2CredentialProviderCommandOutput} for command's `response` shape.
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
export class DeleteOauth2CredentialProviderCommand extends $Command
  .classBuilder<
    DeleteOauth2CredentialProviderCommandInput,
    DeleteOauth2CredentialProviderCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "DeleteOauth2CredentialProvider", {})
  .n("BedrockAgentCoreControlClient", "DeleteOauth2CredentialProviderCommand")
  .sc(DeleteOauth2CredentialProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOauth2CredentialProviderRequest;
      output: {};
    };
    sdk: {
      input: DeleteOauth2CredentialProviderCommandInput;
      output: DeleteOauth2CredentialProviderCommandOutput;
    };
  };
}

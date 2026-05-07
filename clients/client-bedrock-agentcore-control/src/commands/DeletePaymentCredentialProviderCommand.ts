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
import type {
  DeletePaymentCredentialProviderRequest,
  DeletePaymentCredentialProviderResponse,
} from "../models/models_1";
import { DeletePaymentCredentialProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePaymentCredentialProviderCommand}.
 */
export interface DeletePaymentCredentialProviderCommandInput extends DeletePaymentCredentialProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeletePaymentCredentialProviderCommand}.
 */
export interface DeletePaymentCredentialProviderCommandOutput extends DeletePaymentCredentialProviderResponse, __MetadataBearer {}

/**
 * <p>Deletes a payment credential provider and its associated stored credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeletePaymentCredentialProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeletePaymentCredentialProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeletePaymentCredentialProviderRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeletePaymentCredentialProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePaymentCredentialProviderCommandInput - {@link DeletePaymentCredentialProviderCommandInput}
 * @returns {@link DeletePaymentCredentialProviderCommandOutput}
 * @see {@link DeletePaymentCredentialProviderCommandInput} for command's `input` shape.
 * @see {@link DeletePaymentCredentialProviderCommandOutput} for command's `response` shape.
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
export class DeletePaymentCredentialProviderCommand extends $Command
  .classBuilder<
    DeletePaymentCredentialProviderCommandInput,
    DeletePaymentCredentialProviderCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "DeletePaymentCredentialProvider", {})
  .n("BedrockAgentCoreControlClient", "DeletePaymentCredentialProviderCommand")
  .sc(DeletePaymentCredentialProvider$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePaymentCredentialProviderRequest;
      output: {};
    };
    sdk: {
      input: DeletePaymentCredentialProviderCommandInput;
      output: DeletePaymentCredentialProviderCommandOutput;
    };
  };
}

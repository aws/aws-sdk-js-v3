// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CompleteResourceTokenAuthRequest, CompleteResourceTokenAuthResponse } from "../models/models_0";
import { CompleteResourceTokenAuth } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CompleteResourceTokenAuthCommand}.
 */
export interface CompleteResourceTokenAuthCommandInput extends CompleteResourceTokenAuthRequest {}
/**
 * @public
 *
 * The output of {@link CompleteResourceTokenAuthCommand}.
 */
export interface CompleteResourceTokenAuthCommandOutput extends CompleteResourceTokenAuthResponse, __MetadataBearer {}

/**
 * <p>Confirms the user authentication session for obtaining OAuth2.0 tokens for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, CompleteResourceTokenAuthCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, CompleteResourceTokenAuthCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // CompleteResourceTokenAuthRequest
 *   userIdentifier: { // UserIdentifier Union: only one key present
 *     userToken: "STRING_VALUE",
 *     userId: "STRING_VALUE",
 *   },
 *   sessionUri: "STRING_VALUE", // required
 * };
 * const command = new CompleteResourceTokenAuthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CompleteResourceTokenAuthCommandInput - {@link CompleteResourceTokenAuthCommandInput}
 * @returns {@link CompleteResourceTokenAuthCommandOutput}
 * @see {@link CompleteResourceTokenAuthCommandInput} for command's `input` shape.
 * @see {@link CompleteResourceTokenAuthCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class CompleteResourceTokenAuthCommand extends $Command
  .classBuilder<
    CompleteResourceTokenAuthCommandInput,
    CompleteResourceTokenAuthCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "CompleteResourceTokenAuth", {})
  .n("BedrockAgentCoreClient", "CompleteResourceTokenAuthCommand")
  .sc(CompleteResourceTokenAuth)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteResourceTokenAuthRequest;
      output: {};
    };
    sdk: {
      input: CompleteResourceTokenAuthCommandInput;
      output: CompleteResourceTokenAuthCommandOutput;
    };
  };
}

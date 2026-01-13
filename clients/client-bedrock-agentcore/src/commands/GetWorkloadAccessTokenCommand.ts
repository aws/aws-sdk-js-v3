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
import type { GetWorkloadAccessTokenRequest, GetWorkloadAccessTokenResponse } from "../models/models_0";
import { GetWorkloadAccessToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkloadAccessTokenCommand}.
 */
export interface GetWorkloadAccessTokenCommandInput extends GetWorkloadAccessTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkloadAccessTokenCommand}.
 */
export interface GetWorkloadAccessTokenCommandOutput extends GetWorkloadAccessTokenResponse, __MetadataBearer {}

/**
 * <p>Obtains a workload access token for agentic workloads not acting on behalf of a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetWorkloadAccessTokenCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetWorkloadAccessTokenCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetWorkloadAccessTokenRequest
 *   workloadName: "STRING_VALUE", // required
 * };
 * const command = new GetWorkloadAccessTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkloadAccessTokenResponse
 * //   workloadAccessToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetWorkloadAccessTokenCommandInput - {@link GetWorkloadAccessTokenCommandInput}
 * @returns {@link GetWorkloadAccessTokenCommandOutput}
 * @see {@link GetWorkloadAccessTokenCommandInput} for command's `input` shape.
 * @see {@link GetWorkloadAccessTokenCommandOutput} for command's `response` shape.
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
export class GetWorkloadAccessTokenCommand extends $Command
  .classBuilder<
    GetWorkloadAccessTokenCommandInput,
    GetWorkloadAccessTokenCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "GetWorkloadAccessToken", {})
  .n("BedrockAgentCoreClient", "GetWorkloadAccessTokenCommand")
  .sc(GetWorkloadAccessToken$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkloadAccessTokenRequest;
      output: GetWorkloadAccessTokenResponse;
    };
    sdk: {
      input: GetWorkloadAccessTokenCommandInput;
      output: GetWorkloadAccessTokenCommandOutput;
    };
  };
}

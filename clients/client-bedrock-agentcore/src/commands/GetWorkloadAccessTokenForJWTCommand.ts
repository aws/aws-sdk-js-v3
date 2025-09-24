// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetWorkloadAccessTokenForJWTRequest, GetWorkloadAccessTokenForJWTResponse } from "../models/models_0";
import { GetWorkloadAccessTokenForJWT } from "../schemas/schemas_2_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkloadAccessTokenForJWTCommand}.
 */
export interface GetWorkloadAccessTokenForJWTCommandInput extends GetWorkloadAccessTokenForJWTRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkloadAccessTokenForJWTCommand}.
 */
export interface GetWorkloadAccessTokenForJWTCommandOutput
  extends GetWorkloadAccessTokenForJWTResponse,
    __MetadataBearer {}

/**
 * <p>Obtains an Workload access token for agentic workloads acting on behalf of user with JWT token</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetWorkloadAccessTokenForJWTCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetWorkloadAccessTokenForJWTCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetWorkloadAccessTokenForJWTRequest
 *   workloadName: "STRING_VALUE", // required
 *   userToken: "STRING_VALUE", // required
 * };
 * const command = new GetWorkloadAccessTokenForJWTCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkloadAccessTokenForJWTResponse
 * //   workloadAccessToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetWorkloadAccessTokenForJWTCommandInput - {@link GetWorkloadAccessTokenForJWTCommandInput}
 * @returns {@link GetWorkloadAccessTokenForJWTCommandOutput}
 * @see {@link GetWorkloadAccessTokenForJWTCommandInput} for command's `input` shape.
 * @see {@link GetWorkloadAccessTokenForJWTCommandOutput} for command's `response` shape.
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
export class GetWorkloadAccessTokenForJWTCommand extends $Command
  .classBuilder<
    GetWorkloadAccessTokenForJWTCommandInput,
    GetWorkloadAccessTokenForJWTCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "GetWorkloadAccessTokenForJWT", {})
  .n("BedrockAgentCoreClient", "GetWorkloadAccessTokenForJWTCommand")
  .sc(GetWorkloadAccessTokenForJWT)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkloadAccessTokenForJWTRequest;
      output: GetWorkloadAccessTokenForJWTResponse;
    };
    sdk: {
      input: GetWorkloadAccessTokenForJWTCommandInput;
      output: GetWorkloadAccessTokenForJWTCommandOutput;
    };
  };
}

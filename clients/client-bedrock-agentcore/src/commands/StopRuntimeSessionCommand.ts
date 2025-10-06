// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopRuntimeSessionRequest, StopRuntimeSessionResponse } from "../models/models_0";
import { de_StopRuntimeSessionCommand, se_StopRuntimeSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopRuntimeSessionCommand}.
 */
export interface StopRuntimeSessionCommandInput extends StopRuntimeSessionRequest {}
/**
 * @public
 *
 * The output of {@link StopRuntimeSessionCommand}.
 */
export interface StopRuntimeSessionCommandOutput extends StopRuntimeSessionResponse, __MetadataBearer {}

/**
 * <p>Stops a session that is running in an running AgentCore Runtime agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, StopRuntimeSessionCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, StopRuntimeSessionCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // StopRuntimeSessionRequest
 *   runtimeSessionId: "STRING_VALUE", // required
 *   agentRuntimeArn: "STRING_VALUE", // required
 *   qualifier: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StopRuntimeSessionCommand(input);
 * const response = await client.send(command);
 * // { // StopRuntimeSessionResponse
 * //   runtimeSessionId: "STRING_VALUE",
 * //   statusCode: Number("int"),
 * // };
 *
 * ```
 *
 * @param StopRuntimeSessionCommandInput - {@link StopRuntimeSessionCommandInput}
 * @returns {@link StopRuntimeSessionCommandOutput}
 * @see {@link StopRuntimeSessionCommandInput} for command's `input` shape.
 * @see {@link StopRuntimeSessionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link RuntimeClientError} (client fault)
 *  <p>The exception that occurs when there is an error in the runtime client. This can happen due to network issues, invalid configuration, or other client-side problems. Check the error message for specific details about the error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
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
export class StopRuntimeSessionCommand extends $Command
  .classBuilder<
    StopRuntimeSessionCommandInput,
    StopRuntimeSessionCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCore", "StopRuntimeSession", {})
  .n("BedrockAgentCoreClient", "StopRuntimeSessionCommand")
  .f(void 0, void 0)
  .ser(se_StopRuntimeSessionCommand)
  .de(de_StopRuntimeSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopRuntimeSessionRequest;
      output: StopRuntimeSessionResponse;
    };
    sdk: {
      input: StopRuntimeSessionCommandInput;
      output: StopRuntimeSessionCommandOutput;
    };
  };
}

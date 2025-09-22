// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  MetadataBearer as __MetadataBearer,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { InvokeAgentRuntimeRequest, InvokeAgentRuntimeResponse } from "../models/models_0";
import { InvokeAgentRuntime } from "../schemas/schemas_7_Event";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type InvokeAgentRuntimeCommandInputType = Omit<InvokeAgentRuntimeRequest, "payload"> & {
  payload: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeAgentRuntimeCommand}.
 */
export interface InvokeAgentRuntimeCommandInput extends InvokeAgentRuntimeCommandInputType {}
/**
 * @public
 *
 * The output of {@link InvokeAgentRuntimeCommand}.
 */
export interface InvokeAgentRuntimeCommandOutput
  extends Omit<InvokeAgentRuntimeResponse, "response">,
    __MetadataBearer {
  response?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Sends a request to an agent or tool hosted in an Amazon Bedrock AgentCore Runtime and receives responses in real-time. </p> <p>To invoke an agent you must specify the AgentCore Runtime ARN and provide a payload containing your request. You can optionally specify a qualifier to target a specific version or endpoint of the agent.</p> <p>This operation supports streaming responses, allowing you to receive partial responses as they become available. We recommend using pagination to ensure that the operation returns quickly and successfully when processing large responses.</p> <p>For example code, see <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-invoke-agent.html">Invoke an AgentCore Runtime agent</a>. </p> <p>If you're integrating your agent with OAuth, you can't use the Amazon Web Services SDK to call <code>InvokeAgentRuntime</code>. Instead, make a HTTPS request to <code>InvokeAgentRuntime</code>. For an example, see <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-oauth.html">Authenticate and authorize with Inbound Auth and Outbound Auth</a>.</p> <p>To use this operation, you must have the <code>bedrock-agentcore:InvokeAgentRuntime</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, InvokeAgentRuntimeCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, InvokeAgentRuntimeCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // InvokeAgentRuntimeRequest
 *   contentType: "STRING_VALUE",
 *   accept: "STRING_VALUE",
 *   mcpSessionId: "STRING_VALUE",
 *   runtimeSessionId: "STRING_VALUE",
 *   mcpProtocolVersion: "STRING_VALUE",
 *   runtimeUserId: "STRING_VALUE",
 *   traceId: "STRING_VALUE",
 *   traceParent: "STRING_VALUE",
 *   traceState: "STRING_VALUE",
 *   baggage: "STRING_VALUE",
 *   agentRuntimeArn: "STRING_VALUE", // required
 *   qualifier: "STRING_VALUE",
 *   payload: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new InvokeAgentRuntimeCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.response.transformToByteArray();
 * // const str = await response.response.transformToString();
 * // response.response.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // InvokeAgentRuntimeResponse
 * //   runtimeSessionId: "STRING_VALUE",
 * //   mcpSessionId: "STRING_VALUE",
 * //   mcpProtocolVersion: "STRING_VALUE",
 * //   traceId: "STRING_VALUE",
 * //   traceParent: "STRING_VALUE",
 * //   traceState: "STRING_VALUE",
 * //   baggage: "STRING_VALUE",
 * //   contentType: "STRING_VALUE", // required
 * //   response: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   statusCode: Number("int"),
 * // };
 *
 * ```
 *
 * @param InvokeAgentRuntimeCommandInput - {@link InvokeAgentRuntimeCommandInput}
 * @returns {@link InvokeAgentRuntimeCommandOutput}
 * @see {@link InvokeAgentRuntimeCommandInput} for command's `input` shape.
 * @see {@link InvokeAgentRuntimeCommandOutput} for command's `response` shape.
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
 * @throws {@link RuntimeClientError} (client fault)
 *  <p>The exception that occurs when there is an error in the runtime client. This can happen due to network issues, invalid configuration, or other client-side problems. Check the error message for specific details about the error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
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
export class InvokeAgentRuntimeCommand extends $Command
  .classBuilder<
    InvokeAgentRuntimeCommandInput,
    InvokeAgentRuntimeCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "InvokeAgentRuntime", {})
  .n("BedrockAgentCoreClient", "InvokeAgentRuntimeCommand")
  .sc(InvokeAgentRuntime)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeAgentRuntimeRequest;
      output: InvokeAgentRuntimeResponse;
    };
    sdk: {
      input: InvokeAgentRuntimeCommandInput;
      output: InvokeAgentRuntimeCommandOutput;
    };
  };
}

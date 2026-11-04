// smithy-typescript generated code
import type {
  BlobPayloadInputTypes,
  MetadataBearer as __MetadataBearer,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InvokeAgentRuntimeRequest, InvokeAgentRuntimeResponse } from "../models/models_0";
import { InvokeAgentRuntime$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface InvokeAgentRuntimeCommandOutput extends Omit<InvokeAgentRuntimeResponse, "response">, __MetadataBearer {
  response?: StreamingBlobPayloadOutputTypes;
}

/**
 * Sends a request to an agent or tool hosted in an Amazon Bedrock AgentCore Runtime and receives responses in real-time.
 *
 * To invoke an agent, you can specify either the AgentCore Runtime ARN or the agent ID with an account ID, and provide a payload containing your request. When you use the agent ID instead of the full ARN, you don't need to URL-encode the identifier. You can optionally specify a qualifier to target a specific endpoint of the agent.
 *
 * This operation supports streaming responses, allowing you to receive partial responses as they become available. We recommend using pagination to ensure that the operation returns quickly and successfully when processing large responses.
 *
 * For example code, see [Invoke an AgentCore Runtime agent](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-invoke-agent.html).
 *
 * If you're integrating your agent with OAuth, you can't use the Amazon Web Services SDK to call `InvokeAgentRuntime`. Instead, make a HTTPS request to `InvokeAgentRuntime`. For an example, see [Authenticate and authorize with Inbound Auth and Outbound Auth](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-oauth.html).
 *
 * To use this operation, you must have the `bedrock-agentcore:InvokeAgentRuntime` permission. If you are making a call to `InvokeAgentRuntime` on behalf of a user ID with the `X-Amzn-Bedrock-AgentCore-Runtime-User-Id` header, You require permissions to both actions (`bedrock-agentcore:InvokeAgentRuntime` and `bedrock-agentcore:InvokeAgentRuntimeForUser`).
 *
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
 *   mcpMethod: "STRING_VALUE",
 *   mcpName: "STRING_VALUE",
 *   runtimeUserId: "STRING_VALUE",
 *   traceId: "STRING_VALUE",
 *   traceParent: "STRING_VALUE",
 *   traceState: "STRING_VALUE",
 *   baggage: "STRING_VALUE",
 *   agentRuntimeArn: "STRING_VALUE", // required
 *   qualifier: "STRING_VALUE",
 *   accountId: "STRING_VALUE",
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
 * //   sessionEndpointUrl: "STRING_VALUE",
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
 *
 * The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.
 *
 * @throws {@link RetryableConflictException} (client fault)
 *
 * The exception that occurs when there is a retryable conflict performing an operation. This is a temporary condition that may resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.
 *
 * @throws {@link RuntimeClientError} (client fault)
 *
 * The exception that occurs when there is an error in the runtime client. This can happen due to network issues, invalid configuration, or other client-side problems. Check the error message for specific details about the error.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.
 *
 * @throws {@link BedrockAgentCoreServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentCore service.
 *
 * @public
 */
export class InvokeAgentRuntimeCommand extends command<InvokeAgentRuntimeCommandInput, InvokeAgentRuntimeCommandOutput>(
  _ep0,
  _mw0,
  "InvokeAgentRuntime",
  InvokeAgentRuntime$
) {
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

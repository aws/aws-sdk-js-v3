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
import type { InvokeHarnessRequest, InvokeHarnessResponse } from "../models/models_0";
import { InvokeHarness$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeHarnessCommand}.
 */
export interface InvokeHarnessCommandInput extends InvokeHarnessRequest {}
/**
 * @public
 *
 * The output of {@link InvokeHarnessCommand}.
 */
export interface InvokeHarnessCommandOutput extends InvokeHarnessResponse, __MetadataBearer {}

/**
 * <p>Operation to invoke a Harness.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, InvokeHarnessCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, InvokeHarnessCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // InvokeHarnessRequest
 *   harnessArn: "STRING_VALUE", // required
 *   runtimeSessionId: "STRING_VALUE", // required
 *   messages: [ // HarnessMessages // required
 *     { // HarnessMessage
 *       role: "user" || "assistant", // required
 *       content: [ // HarnessContentBlocks // required
 *         { // HarnessContentBlock Union: only one key present
 *           text: "STRING_VALUE",
 *           toolUse: { // HarnessToolUseBlock
 *             name: "STRING_VALUE", // required
 *             toolUseId: "STRING_VALUE", // required
 *             input: "DOCUMENT_VALUE", // required
 *             type: "tool_use" || "server_tool_use" || "mcp_tool_use",
 *             serverName: "STRING_VALUE",
 *           },
 *           toolResult: { // HarnessToolResultBlock
 *             toolUseId: "STRING_VALUE", // required
 *             content: [ // HarnessToolResultContentBlocks // required
 *               { // HarnessToolResultContentBlock Union: only one key present
 *                 text: "STRING_VALUE",
 *                 json: "DOCUMENT_VALUE",
 *               },
 *             ],
 *             status: "success" || "error",
 *             type: "tool_use" || "server_tool_use" || "mcp_tool_use",
 *           },
 *           reasoningContent: { // HarnessReasoningContentBlock Union: only one key present
 *             reasoningText: { // HarnessReasoningTextBlock
 *               text: "STRING_VALUE", // required
 *               signature: "STRING_VALUE",
 *             },
 *             redactedContent: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   model: { // HarnessModelConfiguration Union: only one key present
 *     bedrockModelConfig: { // HarnessBedrockModelConfig
 *       modelId: "STRING_VALUE", // required
 *       maxTokens: Number("int"),
 *       temperature: Number("float"),
 *       topP: Number("float"),
 *     },
 *     openAiModelConfig: { // HarnessOpenAiModelConfig
 *       modelId: "STRING_VALUE", // required
 *       apiKeyArn: "STRING_VALUE", // required
 *       maxTokens: Number("int"),
 *       temperature: Number("float"),
 *       topP: Number("float"),
 *     },
 *     geminiModelConfig: { // HarnessGeminiModelConfig
 *       modelId: "STRING_VALUE", // required
 *       apiKeyArn: "STRING_VALUE", // required
 *       maxTokens: Number("int"),
 *       temperature: Number("float"),
 *       topP: Number("float"),
 *       topK: Number("int"),
 *     },
 *   },
 *   systemPrompt: [ // HarnessSystemPrompt
 *     { // HarnessSystemContentBlock Union: only one key present
 *       text: "STRING_VALUE",
 *     },
 *   ],
 *   tools: [ // HarnessTools
 *     { // HarnessTool
 *       type: "remote_mcp" || "agentcore_browser" || "agentcore_gateway" || "inline_function" || "agentcore_code_interpreter", // required
 *       name: "STRING_VALUE",
 *       config: { // HarnessToolConfiguration Union: only one key present
 *         remoteMcp: { // HarnessRemoteMcpConfig
 *           url: "STRING_VALUE", // required
 *           headers: { // HttpHeadersMap
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *         agentCoreBrowser: { // HarnessAgentCoreBrowserConfig
 *           browserArn: "STRING_VALUE",
 *         },
 *         agentCoreGateway: { // HarnessAgentCoreGatewayConfig
 *           gatewayArn: "STRING_VALUE", // required
 *           outboundAuth: { // HarnessGatewayOutboundAuth Union: only one key present
 *             awsIam: {},
 *             none: {},
 *             oauth: { // OAuthCredentialProvider
 *               providerArn: "STRING_VALUE", // required
 *               scopes: [ // OAuthScopes // required
 *                 "STRING_VALUE",
 *               ],
 *               customParameters: { // OAuthCustomParameters
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               grantType: "CLIENT_CREDENTIALS" || "AUTHORIZATION_CODE",
 *               defaultReturnUrl: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         inlineFunction: { // HarnessInlineFunctionConfig
 *           description: "STRING_VALUE", // required
 *           inputSchema: "DOCUMENT_VALUE", // required
 *         },
 *         agentCoreCodeInterpreter: { // HarnessAgentCoreCodeInterpreterConfig
 *           codeInterpreterArn: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   skills: [ // HarnessSkills
 *     { // HarnessSkill Union: only one key present
 *       path: "STRING_VALUE",
 *     },
 *   ],
 *   allowedTools: [ // HarnessAllowedTools
 *     "STRING_VALUE",
 *   ],
 *   maxIterations: Number("int"),
 *   maxTokens: Number("int"),
 *   timeoutSeconds: Number("int"),
 *   actorId: "STRING_VALUE",
 * };
 * const command = new InvokeHarnessCommand(input);
 * const response = await client.send(command);
 * // { // InvokeHarnessResponse
 * //   stream: { // InvokeHarnessStreamOutput Union: only one key present
 * //     messageStart: { // HarnessMessageStartEvent
 * //       role: "user" || "assistant", // required
 * //     },
 * //     contentBlockStart: { // HarnessContentBlockStartEvent
 * //       contentBlockIndex: Number("int"), // required
 * //       start: { // HarnessContentBlockStart Union: only one key present
 * //         toolUse: { // HarnessToolUseBlockStart
 * //           toolUseId: "STRING_VALUE", // required
 * //           name: "STRING_VALUE", // required
 * //           type: "tool_use" || "server_tool_use" || "mcp_tool_use",
 * //           serverName: "STRING_VALUE",
 * //         },
 * //         toolResult: { // HarnessToolResultBlockStart
 * //           toolUseId: "STRING_VALUE", // required
 * //           status: "success" || "error",
 * //         },
 * //       },
 * //     },
 * //     contentBlockDelta: { // HarnessContentBlockDeltaEvent
 * //       contentBlockIndex: Number("int"), // required
 * //       delta: { // HarnessContentBlockDelta Union: only one key present
 * //         text: "STRING_VALUE",
 * //         toolUse: { // HarnessToolUseBlockDelta
 * //           input: "STRING_VALUE", // required
 * //         },
 * //         toolResult: [ // HarnessToolResultBlocksDelta
 * //           { // HarnessToolResultBlockDelta Union: only one key present
 * //             text: "STRING_VALUE",
 * //             json: "DOCUMENT_VALUE",
 * //           },
 * //         ],
 * //         reasoningContent: { // HarnessReasoningContentBlockDelta Union: only one key present
 * //           text: "STRING_VALUE",
 * //           redactedContent: new Uint8Array(),
 * //           signature: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     contentBlockStop: { // HarnessContentBlockStopEvent
 * //       contentBlockIndex: Number("int"), // required
 * //     },
 * //     messageStop: { // HarnessMessageStopEvent
 * //       stopReason: "end_turn" || "tool_use" || "tool_result" || "max_tokens" || "stop_sequence" || "content_filtered" || "malformed_model_output" || "malformed_tool_use" || "interrupted" || "partial_turn" || "model_context_window_exceeded" || "max_iterations_exceeded" || "max_output_tokens_exceeded" || "timeout_exceeded", // required
 * //     },
 * //     metadata: { // HarnessMetadataEvent
 * //       usage: { // HarnessTokenUsage
 * //         inputTokens: Number("int"), // required
 * //         outputTokens: Number("int"), // required
 * //         totalTokens: Number("int"), // required
 * //         cacheReadInputTokens: Number("int"),
 * //         cacheWriteInputTokens: Number("int"),
 * //       },
 * //       metrics: { // HarnessStreamMetrics
 * //         latencyMs: Number("long"), // required
 * //       },
 * //     },
 * //     internalServerException: { // InternalServerException
 * //       message: "STRING_VALUE",
 * //     },
 * //     validationException: { // ValidationException
 * //       message: "STRING_VALUE", // required
 * //       reason: "CannotParse" || "FieldValidationFailed" || "IdempotentParameterMismatchException" || "EventInOtherSession" || "ResourceConflict", // required
 * //       fieldList: [ // ValidationExceptionFieldList
 * //         { // ValidationExceptionField
 * //           name: "STRING_VALUE", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     runtimeClientError: { // RuntimeClientError
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param InvokeHarnessCommandInput - {@link InvokeHarnessCommandInput}
 * @returns {@link InvokeHarnessCommandOutput}
 * @see {@link InvokeHarnessCommandInput} for command's `input` shape.
 * @see {@link InvokeHarnessCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class InvokeHarnessCommand extends $Command
  .classBuilder<
    InvokeHarnessCommandInput,
    InvokeHarnessCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "InvokeHarness", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("BedrockAgentCoreClient", "InvokeHarnessCommand")
  .sc(InvokeHarness$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeHarnessRequest;
      output: InvokeHarnessResponse;
    };
    sdk: {
      input: InvokeHarnessCommandInput;
      output: InvokeHarnessCommandOutput;
    };
  };
}

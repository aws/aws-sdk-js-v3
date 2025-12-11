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
import type { EvaluateRequest, EvaluateResponse } from "../models/models_0";
import { Evaluate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EvaluateCommand}.
 */
export interface EvaluateCommandInput extends EvaluateRequest {}
/**
 * @public
 *
 * The output of {@link EvaluateCommand}.
 */
export interface EvaluateCommandOutput extends EvaluateResponse, __MetadataBearer {}

/**
 * <p> Performs on-demand evaluation of agent traces using a specified evaluator. This synchronous API accepts traces in OpenTelemetry format and returns immediate scoring results with detailed explanations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, EvaluateCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, EvaluateCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // EvaluateRequest
 *   evaluatorId: "STRING_VALUE", // required
 *   evaluationInput: { // EvaluationInput Union: only one key present
 *     sessionSpans: [ // Spans
 *       "DOCUMENT_VALUE",
 *     ],
 *   },
 *   evaluationTarget: { // EvaluationTarget Union: only one key present
 *     spanIds: [ // SpanIds
 *       "STRING_VALUE",
 *     ],
 *     traceIds: [ // TraceIds
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new EvaluateCommand(input);
 * const response = await client.send(command);
 * // { // EvaluateResponse
 * //   evaluationResults: [ // EvaluationResults // required
 * //     { // EvaluationResultContent
 * //       evaluatorArn: "STRING_VALUE", // required
 * //       evaluatorId: "STRING_VALUE", // required
 * //       evaluatorName: "STRING_VALUE", // required
 * //       explanation: "STRING_VALUE",
 * //       context: { // Context Union: only one key present
 * //         spanContext: { // SpanContext
 * //           sessionId: "STRING_VALUE", // required
 * //           traceId: "STRING_VALUE",
 * //           spanId: "STRING_VALUE",
 * //         },
 * //       },
 * //       value: Number("double"),
 * //       label: "STRING_VALUE",
 * //       tokenUsage: { // TokenUsage
 * //         inputTokens: Number("int"),
 * //         outputTokens: Number("int"),
 * //         totalTokens: Number("int"),
 * //       },
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param EvaluateCommandInput - {@link EvaluateCommandInput}
 * @returns {@link EvaluateCommandOutput}
 * @see {@link EvaluateCommandInput} for command's `input` shape.
 * @see {@link EvaluateCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.</p>
 *
 * @throws {@link DuplicateIdException} (client fault)
 *  <p> An exception thrown when attempting to create a resource with an identifier that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
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
export class EvaluateCommand extends $Command
  .classBuilder<
    EvaluateCommandInput,
    EvaluateCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "Evaluate", {})
  .n("BedrockAgentCoreClient", "EvaluateCommand")
  .sc(Evaluate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EvaluateRequest;
      output: EvaluateResponse;
    };
    sdk: {
      input: EvaluateCommandInput;
      output: EvaluateCommandOutput;
    };
  };
}

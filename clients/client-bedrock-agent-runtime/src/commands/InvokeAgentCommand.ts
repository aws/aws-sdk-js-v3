// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  InvokeAgentRequest,
  InvokeAgentRequestFilterSensitiveLog,
  InvokeAgentResponse,
  InvokeAgentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_InvokeAgentCommand, se_InvokeAgentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InvokeAgentCommand}.
 */
export interface InvokeAgentCommandInput extends InvokeAgentRequest {}
/**
 * @public
 *
 * The output of {@link InvokeAgentCommand}.
 */
export interface InvokeAgentCommandOutput extends InvokeAgentResponse, __MetadataBearer {}

/**
 * <p>Sends a prompt for the agent to process and respond to.</p>
 *          <note>
 *             <p>The CLI doesn't support <code>InvokeAgent</code>.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>To continue the same conversation with an agent, use the same <code>sessionId</code> value in the request.</p>
 *             </li>
 *             <li>
 *                <p>To activate trace enablement, turn <code>enableTrace</code> to <code>true</code>. Trace enablement helps you follow the agent's reasoning process that led it to the information it processed, the actions it took, and the final result it yielded. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-events">Trace enablement</a>.</p>
 *             </li>
 *             <li>
 *                <p>End a conversation by setting <code>endSession</code> to <code>true</code>.</p>
 *             </li>
 *             <li>
 *                <p>Include attributes for the session or prompt in the <code>sessionState</code> object.</p>
 *             </li>
 *          </ul>
 *          <p>The response is returned in the <code>bytes</code> field of the <code>chunk</code> object.</p>
 *          <ul>
 *             <li>
 *                <p>The <code>attribution</code> object contains citations for parts of the response.</p>
 *             </li>
 *             <li>
 *                <p>If you set <code>enableTrace</code> to <code>true</code> in the request, you can trace the agent's steps and reasoning process that led it to the response.</p>
 *             </li>
 *             <li>
 *                <p>Errors are also surfaced in the response.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, InvokeAgentCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, InvokeAgentCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // InvokeAgentRequest
 *   sessionState: { // SessionState
 *     sessionAttributes: { // SessionAttributesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     promptSessionAttributes: { // PromptSessionAttributesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   agentId: "STRING_VALUE", // required
 *   agentAliasId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   endSession: true || false,
 *   enableTrace: true || false,
 *   inputText: "STRING_VALUE", // required
 * };
 * const command = new InvokeAgentCommand(input);
 * const response = await client.send(command);
 * // { // InvokeAgentResponse
 * //   completion: { // ResponseStream Union: only one key present
 * //     chunk: { // PayloadPart
 * //       bytes: new Uint8Array(),
 * //       attribution: { // Attribution
 * //         citations: [ // Citations
 * //           { // Citation
 * //             generatedResponsePart: { // GeneratedResponsePart
 * //               textResponsePart: { // TextResponsePart
 * //                 text: "STRING_VALUE",
 * //                 span: { // Span
 * //                   start: Number("int"),
 * //                   end: Number("int"),
 * //                 },
 * //               },
 * //             },
 * //             retrievedReferences: [ // RetrievedReferences
 * //               { // RetrievedReference
 * //                 content: { // RetrievalResultContent
 * //                   text: "STRING_VALUE", // required
 * //                 },
 * //                 location: { // RetrievalResultLocation
 * //                   type: "S3", // required
 * //                   s3Location: { // RetrievalResultS3Location
 * //                     uri: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     trace: { // TracePart
 * //       agentId: "STRING_VALUE",
 * //       agentAliasId: "STRING_VALUE",
 * //       sessionId: "STRING_VALUE",
 * //       trace: { // Trace Union: only one key present
 * //         preProcessingTrace: { // PreProcessingTrace Union: only one key present
 * //           modelInvocationInput: { // ModelInvocationInput
 * //             traceId: "STRING_VALUE",
 * //             text: "STRING_VALUE",
 * //             type: "PRE_PROCESSING" || "ORCHESTRATION" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "POST_PROCESSING",
 * //             inferenceConfiguration: { // InferenceConfiguration
 * //               temperature: Number("float"),
 * //               topP: Number("float"),
 * //               topK: Number("int"),
 * //               maximumLength: Number("int"),
 * //               stopSequences: [ // StopSequences
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             overrideLambda: "STRING_VALUE",
 * //             promptCreationMode: "DEFAULT" || "OVERRIDDEN",
 * //             parserMode: "DEFAULT" || "OVERRIDDEN",
 * //           },
 * //           modelInvocationOutput: { // PreProcessingModelInvocationOutput
 * //             traceId: "STRING_VALUE",
 * //             parsedResponse: { // PreProcessingParsedResponse
 * //               rationale: "STRING_VALUE",
 * //               isValid: true || false,
 * //             },
 * //           },
 * //         },
 * //         orchestrationTrace: { // OrchestrationTrace Union: only one key present
 * //           rationale: { // Rationale
 * //             traceId: "STRING_VALUE",
 * //             text: "STRING_VALUE",
 * //           },
 * //           invocationInput: { // InvocationInput
 * //             traceId: "STRING_VALUE",
 * //             invocationType: "ACTION_GROUP" || "KNOWLEDGE_BASE" || "FINISH",
 * //             actionGroupInvocationInput: { // ActionGroupInvocationInput
 * //               actionGroupName: "STRING_VALUE",
 * //               verb: "STRING_VALUE",
 * //               apiPath: "STRING_VALUE",
 * //               parameters: [ // Parameters
 * //                 { // Parameter
 * //                   name: "STRING_VALUE",
 * //                   type: "STRING_VALUE",
 * //                   value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               requestBody: { // RequestBody
 * //                 content: { // ContentMap
 * //                   "<keys>": [
 * //                     {
 * //                       name: "STRING_VALUE",
 * //                       type: "STRING_VALUE",
 * //                       value: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //             knowledgeBaseLookupInput: { // KnowledgeBaseLookupInput
 * //               text: "STRING_VALUE",
 * //               knowledgeBaseId: "STRING_VALUE",
 * //             },
 * //           },
 * //           observation: { // Observation
 * //             traceId: "STRING_VALUE",
 * //             type: "ACTION_GROUP" || "KNOWLEDGE_BASE" || "FINISH" || "ASK_USER" || "REPROMPT",
 * //             actionGroupInvocationOutput: { // ActionGroupInvocationOutput
 * //               text: "STRING_VALUE",
 * //             },
 * //             knowledgeBaseLookupOutput: { // KnowledgeBaseLookupOutput
 * //               retrievedReferences: [
 * //                 {
 * //                   content: {
 * //                     text: "STRING_VALUE", // required
 * //                   },
 * //                   location: {
 * //                     type: "S3", // required
 * //                     s3Location: {
 * //                       uri: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //             finalResponse: { // FinalResponse
 * //               text: "STRING_VALUE",
 * //             },
 * //             repromptResponse: { // RepromptResponse
 * //               text: "STRING_VALUE",
 * //               source: "ACTION_GROUP" || "KNOWLEDGE_BASE" || "PARSER",
 * //             },
 * //           },
 * //           modelInvocationInput: {
 * //             traceId: "STRING_VALUE",
 * //             text: "STRING_VALUE",
 * //             type: "PRE_PROCESSING" || "ORCHESTRATION" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "POST_PROCESSING",
 * //             inferenceConfiguration: {
 * //               temperature: Number("float"),
 * //               topP: Number("float"),
 * //               topK: Number("int"),
 * //               maximumLength: Number("int"),
 * //               stopSequences: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             overrideLambda: "STRING_VALUE",
 * //             promptCreationMode: "DEFAULT" || "OVERRIDDEN",
 * //             parserMode: "DEFAULT" || "OVERRIDDEN",
 * //           },
 * //         },
 * //         postProcessingTrace: { // PostProcessingTrace Union: only one key present
 * //           modelInvocationInput: {
 * //             traceId: "STRING_VALUE",
 * //             text: "STRING_VALUE",
 * //             type: "PRE_PROCESSING" || "ORCHESTRATION" || "KNOWLEDGE_BASE_RESPONSE_GENERATION" || "POST_PROCESSING",
 * //             inferenceConfiguration: {
 * //               temperature: Number("float"),
 * //               topP: Number("float"),
 * //               topK: Number("int"),
 * //               maximumLength: Number("int"),
 * //               stopSequences: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             overrideLambda: "STRING_VALUE",
 * //             promptCreationMode: "DEFAULT" || "OVERRIDDEN",
 * //             parserMode: "DEFAULT" || "OVERRIDDEN",
 * //           },
 * //           modelInvocationOutput: { // PostProcessingModelInvocationOutput
 * //             traceId: "STRING_VALUE",
 * //             parsedResponse: { // PostProcessingParsedResponse
 * //               text: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         failureTrace: { // FailureTrace
 * //           traceId: "STRING_VALUE",
 * //           failureReason: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     internalServerException: { // InternalServerException
 * //       message: "STRING_VALUE",
 * //     },
 * //     validationException: { // ValidationException
 * //       message: "STRING_VALUE",
 * //     },
 * //     resourceNotFoundException: { // ResourceNotFoundException
 * //       message: "STRING_VALUE",
 * //     },
 * //     serviceQuotaExceededException: { // ServiceQuotaExceededException
 * //       message: "STRING_VALUE",
 * //     },
 * //     throttlingException: { // ThrottlingException
 * //       message: "STRING_VALUE",
 * //     },
 * //     accessDeniedException: { // AccessDeniedException
 * //       message: "STRING_VALUE",
 * //     },
 * //     conflictException: { // ConflictException
 * //       message: "STRING_VALUE",
 * //     },
 * //     dependencyFailedException: { // DependencyFailedException
 * //       message: "STRING_VALUE",
 * //       resourceName: "STRING_VALUE",
 * //     },
 * //     badGatewayException: { // BadGatewayException
 * //       message: "STRING_VALUE",
 * //       resourceName: "STRING_VALUE",
 * //     },
 * //   },
 * //   contentType: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param InvokeAgentCommandInput - {@link InvokeAgentCommandInput}
 * @returns {@link InvokeAgentCommandOutput}
 * @see {@link InvokeAgentCommandInput} for command's `input` shape.
 * @see {@link InvokeAgentCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 *
 * @throws {@link BadGatewayException} (server fault)
 *  <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
 *
 * @throws {@link DependencyFailedException} (client fault)
 *  <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentRuntime service.</p>
 *
 * @public
 */
export class InvokeAgentCommand extends $Command
  .classBuilder<
    InvokeAgentCommandInput,
    InvokeAgentCommandOutput,
    BedrockAgentRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentRunTimeService", "InvokeAgent", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("BedrockAgentRuntimeClient", "InvokeAgentCommand")
  .f(InvokeAgentRequestFilterSensitiveLog, InvokeAgentResponseFilterSensitiveLog)
  .ser(se_InvokeAgentCommand)
  .de(de_InvokeAgentCommand)
  .build() {}

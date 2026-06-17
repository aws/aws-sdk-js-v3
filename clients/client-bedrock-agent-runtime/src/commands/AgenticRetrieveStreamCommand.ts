// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AgenticRetrieveStreamResponse } from "../models/models_0";
import type { AgenticRetrieveStreamRequest } from "../models/models_1";
import { AgenticRetrieveStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AgenticRetrieveStreamCommand}.
 */
export interface AgenticRetrieveStreamCommandInput extends AgenticRetrieveStreamRequest {}
/**
 * @public
 *
 * The output of {@link AgenticRetrieveStreamCommand}.
 */
export interface AgenticRetrieveStreamCommandOutput extends AgenticRetrieveStreamResponse, __MetadataBearer {}

/**
 * <p>Retrieves information from one or more knowledge bases using an agentic approach. Agentic retrieval uses a foundation model to intelligently decompose complex queries into sub-queries and iteratively retrieve relevant information from your knowledge bases. This approach improves retrieval accuracy for complex, multi-step questions that a single retrieval pass might not fully address.</p> <p>The operation returns results through a stream that includes retrieval results, trace events for visibility into the process, and a generated response synthesized from the results by default, which can be turned off.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, AgenticRetrieveStreamCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, AgenticRetrieveStreamCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // AgenticRetrieveStreamRequest
 *   messages: [ // AgenticRetrieveMessages // required
 *     { // AgenticRetrieveMessage
 *       content: { // AgenticRetrieveMessageContent
 *         text: "STRING_VALUE",
 *       },
 *       role: "user" || "assistant", // required
 *     },
 *   ],
 *   retrievers: [ // AgenticRetrievers // required
 *     { // AgenticRetriever
 *       description: "STRING_VALUE",
 *       configuration: { // RetrieverConfiguration Union: only one key present
 *         knowledgeBase: { // KnowledgeBaseRetrieverConfiguration
 *           knowledgeBaseId: "STRING_VALUE", // required
 *           retrievalOverrides: { // RetrievalOverrides
 *             filter: { // RetrievalFilter Union: only one key present
 *               equals: { // FilterAttribute
 *                 key: "STRING_VALUE", // required
 *                 value: "DOCUMENT_VALUE", // required
 *               },
 *               notEquals: {
 *                 key: "STRING_VALUE", // required
 *                 value: "DOCUMENT_VALUE", // required
 *               },
 *               greaterThan: {
 *                 key: "STRING_VALUE", // required
 *                 value: "DOCUMENT_VALUE", // required
 *               },
 *               greaterThanOrEquals: {
 *                 key: "STRING_VALUE", // required
 *                 value: "DOCUMENT_VALUE", // required
 *               },
 *               lessThan: {
 *                 key: "STRING_VALUE", // required
 *                 value: "DOCUMENT_VALUE", // required
 *               },
 *               lessThanOrEquals: "<FilterAttribute>",
 *               in: "<FilterAttribute>",
 *               notIn: "<FilterAttribute>",
 *               startsWith: "<FilterAttribute>",
 *               listContains: "<FilterAttribute>",
 *               stringContains: "<FilterAttribute>",
 *               andAll: [ // RetrievalFilterList
 *                 {//  Union: only one key present
 *                   equals: "<FilterAttribute>",
 *                   notEquals: "<FilterAttribute>",
 *                   greaterThan: "<FilterAttribute>",
 *                   greaterThanOrEquals: "<FilterAttribute>",
 *                   lessThan: "<FilterAttribute>",
 *                   lessThanOrEquals: "<FilterAttribute>",
 *                   in: "<FilterAttribute>",
 *                   notIn: "<FilterAttribute>",
 *                   startsWith: "<FilterAttribute>",
 *                   listContains: "<FilterAttribute>",
 *                   stringContains: "<FilterAttribute>",
 *                   andAll: [
 *                     "<RetrievalFilter>",
 *                   ],
 *                   orAll: [
 *                     "<RetrievalFilter>",
 *                   ],
 *                 },
 *               ],
 *               orAll: [
 *                 "<RetrievalFilter>",
 *               ],
 *             },
 *             maxNumberOfResults: Number("int"),
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   agenticRetrieveConfiguration: { // AgenticRetrieveConfiguration
 *     foundationModelType: "CUSTOM" || "MANAGED",
 *     foundationModelConfiguration: { // FoundationModelConfiguration
 *       type: "BEDROCK_FOUNDATION_MODEL", // required
 *       bedrockFoundationModelConfiguration: { // BedrockFoundationModelConfiguration
 *         modelConfiguration: { // BedrockFoundationModelModelConfiguration
 *           modelArn: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     rerankingModelType: "CUSTOM" || "MANAGED" || "NONE",
 *     rerankingConfiguration: { // AgenticRetrieveRerankingConfiguration
 *       type: "BEDROCK_RERANKING_MODEL", // required
 *       bedrockRerankingConfiguration: { // AgenticRetrieveBedrockRerankingConfiguration
 *         modelConfiguration: { // AgenticRetrieveBedrockRerankingModelConfiguration
 *           modelArn: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     maxAgentIteration: Number("int"),
 *   },
 *   policyConfiguration: { // AgenticRetrievePolicyConfiguration
 *     bedrockGuardrailConfiguration: { // AgenticRetrieveBedrockGuardrailConfiguration
 *       guardrailId: "STRING_VALUE", // required
 *       guardrailVersion: "STRING_VALUE", // required
 *     },
 *   },
 *   nextToken: "STRING_VALUE",
 *   userContext: { // UserContext
 *     userId: "STRING_VALUE", // required
 *   },
 *   generateResponse: true || false,
 * };
 * const command = new AgenticRetrieveStreamCommand(input);
 * const response = await client.send(command);
 * // { // AgenticRetrieveStreamResponse
 * //   stream: { // AgenticRetrieveStreamResponseOutput Union: only one key present
 * //     result: { // AgenticRetrieveResultEvent
 * //       results: [ // AgenticRetrieveResults // required
 * //         { // AgenticRetrieveResultItem
 * //           content: { // RetrievalContent
 * //             byteContent: new Uint8Array(),
 * //             text: "STRING_VALUE",
 * //             mimeType: "STRING_VALUE", // required
 * //           },
 * //           metadata: { // AgenticRetrieveMetadata
 * //             "<keys>": "DOCUMENT_VALUE",
 * //           },
 * //           sourceRetriever: { // AgenticRetrieveSourceRetriever
 * //             identifier: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //       generatedResponse: { // AgenticRetrieveGeneratedResponse
 * //         answer: "STRING_VALUE", // required
 * //         citations: [ // AgenticRetrieveCitationList
 * //           { // AgenticRetrieveCitation
 * //             startIndex: Number("int"), // required
 * //             endIndex: Number("int"), // required
 * //             references: [ // AgenticRetrieveCitationReferenceList // required
 * //               { // AgenticRetrieveCitationReference
 * //                 resultIndex: Number("int"), // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       nextToken: "STRING_VALUE",
 * //     },
 * //     traceEvent: { // AgenticRetrieveTraceEvent
 * //       id: "STRING_VALUE", // required
 * //       timestamp: Number("long"), // required
 * //       attributes: { // AgenticRetrieveTraceEventAttributes
 * //         step: "Planning" || "Retrieval" || "SpeculativeRetrieval" || "FullDocumentExpansion", // required
 * //         status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //         message: "STRING_VALUE", // required
 * //         actions: [ // AgenticRetrieveActions
 * //           { // AgenticRetrieveAction
 * //             retrieve: { // AgenticRetrieveActionDetails
 * //               inputQuery: { // AgenticRetrieveMessageContent
 * //                 text: "STRING_VALUE",
 * //               },
 * //               sourceRetrievers: [ // AgenticRetrieveSourceRetrieverList // required
 * //                 {
 * //                   identifier: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //             fullDocumentExpansion: { // AgenticRetrieveFullDocExpansionDetails
 * //               documentId: "STRING_VALUE",
 * //               sourceRetriever: "<AgenticRetrieveSourceRetriever>",
 * //             },
 * //           },
 * //         ],
 * //         warnings: [ // AgenticRetrieveWarnings
 * //           { // AgenticRetrieveWarning Union: only one key present
 * //             message: { // AgenticRetrieveWarningMessage
 * //               message: "STRING_VALUE", // required
 * //             },
 * //             guardrail: { // AgenticRetrieveGuardrailWarning
 * //               id: "STRING_VALUE", // required
 * //               version: "STRING_VALUE", // required
 * //               action: "INTERVENED" || "NONE", // required
 * //               message: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         failures: [ // AgenticRetrieveFailures
 * //           { // AgenticRetrieveFailure
 * //             message: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         retrievalMetadata: [ // AgenticRetrieveSourceMetadataList
 * //           { // AgenticRetrieveSourceMetadata
 * //             identifier: "STRING_VALUE",
 * //             retrievalType: "BedrockKnowledgeBase",
 * //           },
 * //         ],
 * //         retrievalResponse: [ // AgenticRetrieveTraceResults
 * //           { // AgenticRetrieveTraceResultItem
 * //             content: {
 * //               byteContent: new Uint8Array(),
 * //               text: "STRING_VALUE",
 * //               mimeType: "STRING_VALUE", // required
 * //             },
 * //             metadata: {
 * //               "<keys>": "DOCUMENT_VALUE",
 * //             },
 * //             sourceRetriever: "<AgenticRetrieveSourceRetriever>",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     responseEvent: { // AgenticRetrieveResponseEvent
 * //       text: "STRING_VALUE", // required
 * //     },
 * //     internalServerException: { // InternalServerException
 * //       message: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
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
 * // };
 *
 * ```
 *
 * @param AgenticRetrieveStreamCommandInput - {@link AgenticRetrieveStreamCommandInput}
 * @returns {@link AgenticRetrieveStreamCommandOutput}
 * @see {@link AgenticRetrieveStreamCommandInput} for command's `input` shape.
 * @see {@link AgenticRetrieveStreamCommandOutput} for command's `response` shape.
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
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
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
 *
 * @public
 */
export class AgenticRetrieveStreamCommand extends $Command
  .classBuilder<
    AgenticRetrieveStreamCommandInput,
    AgenticRetrieveStreamCommandOutput,
    BedrockAgentRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentRunTimeService", "AgenticRetrieveStream", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("BedrockAgentRuntimeClient", "AgenticRetrieveStreamCommand")
  .sc(AgenticRetrieveStream$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AgenticRetrieveStreamRequest;
      output: AgenticRetrieveStreamResponse;
    };
    sdk: {
      input: AgenticRetrieveStreamCommandInput;
      output: AgenticRetrieveStreamCommandOutput;
    };
  };
}

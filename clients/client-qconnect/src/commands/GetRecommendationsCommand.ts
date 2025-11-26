// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetRecommendationsRequest } from "../models/models_0";
import type { GetRecommendationsResponse } from "../models/models_1";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { GetRecommendations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandInput extends GetRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandOutput extends GetRecommendationsResponse, __MetadataBearer {}

/**
 * <important> <p>This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Amazon Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.</p> </important> <p>Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.</p>
 *
 * @deprecated GetRecommendations API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024 you will need to create a new Assistant in the Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetRecommendationsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetRecommendationsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // GetRecommendationsRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   waitTimeSeconds: Number("int"),
 *   nextChunkToken: "STRING_VALUE",
 *   recommendationType: "STRING_VALUE",
 * };
 * const command = new GetRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationsResponse
 * //   recommendations: [ // RecommendationList // required
 * //     { // RecommendationData
 * //       recommendationId: "STRING_VALUE", // required
 * //       document: { // Document
 * //         contentReference: { // ContentReference
 * //           knowledgeBaseArn: "STRING_VALUE",
 * //           knowledgeBaseId: "STRING_VALUE",
 * //           contentArn: "STRING_VALUE",
 * //           contentId: "STRING_VALUE",
 * //           sourceURL: "STRING_VALUE",
 * //           referenceType: "STRING_VALUE",
 * //         },
 * //         title: { // DocumentText
 * //           text: "STRING_VALUE",
 * //           highlights: [ // Highlights
 * //             { // Highlight
 * //               beginOffsetInclusive: Number("int"),
 * //               endOffsetExclusive: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         excerpt: {
 * //           text: "STRING_VALUE",
 * //           highlights: [
 * //             {
 * //               beginOffsetInclusive: Number("int"),
 * //               endOffsetExclusive: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       relevanceScore: Number("double"),
 * //       relevanceLevel: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       data: { // DataSummary
 * //         reference: { // DataReference Union: only one key present
 * //           contentReference: {
 * //             knowledgeBaseArn: "STRING_VALUE",
 * //             knowledgeBaseId: "STRING_VALUE",
 * //             contentArn: "STRING_VALUE",
 * //             contentId: "STRING_VALUE",
 * //             sourceURL: "STRING_VALUE",
 * //             referenceType: "STRING_VALUE",
 * //           },
 * //           generativeReference: { // GenerativeReference
 * //             modelId: "STRING_VALUE",
 * //             generationId: "STRING_VALUE",
 * //           },
 * //           suggestedMessageReference: { // SuggestedMessageReference
 * //             aiAgentId: "STRING_VALUE", // required
 * //             aiAgentArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         details: { // DataDetails Union: only one key present
 * //           contentData: { // ContentDataDetails
 * //             textData: { // TextData
 * //               title: {
 * //                 text: "STRING_VALUE",
 * //                 highlights: [
 * //                   {
 * //                     beginOffsetInclusive: Number("int"),
 * //                     endOffsetExclusive: Number("int"),
 * //                   },
 * //                 ],
 * //               },
 * //               excerpt: {
 * //                 text: "STRING_VALUE",
 * //                 highlights: [
 * //                   {
 * //                     beginOffsetInclusive: Number("int"),
 * //                     endOffsetExclusive: Number("int"),
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //             rankingData: { // RankingData
 * //               relevanceScore: Number("double"),
 * //               relevanceLevel: "STRING_VALUE",
 * //             },
 * //           },
 * //           generativeData: { // GenerativeDataDetails
 * //             completion: "STRING_VALUE", // required
 * //             references: [ // DataSummaryList // required
 * //               {
 * //                 reference: {//  Union: only one key present
 * //                   contentReference: "<ContentReference>",
 * //                   generativeReference: {
 * //                     modelId: "STRING_VALUE",
 * //                     generationId: "STRING_VALUE",
 * //                   },
 * //                   suggestedMessageReference: {
 * //                     aiAgentId: "STRING_VALUE", // required
 * //                     aiAgentArn: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //                 details: {//  Union: only one key present
 * //                   contentData: {
 * //                     textData: {
 * //                       title: "<DocumentText>",
 * //                       excerpt: "<DocumentText>",
 * //                     },
 * //                     rankingData: {
 * //                       relevanceScore: Number("double"),
 * //                       relevanceLevel: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                   generativeData: {
 * //                     completion: "STRING_VALUE", // required
 * //                     references: [ // required
 * //                       "<DataSummary>",
 * //                     ],
 * //                     rankingData: {
 * //                       relevanceScore: Number("double"),
 * //                       relevanceLevel: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                   intentDetectedData: { // IntentDetectedDataDetails
 * //                     intent: "STRING_VALUE", // required
 * //                     intentId: "STRING_VALUE", // required
 * //                     relevanceLevel: "STRING_VALUE",
 * //                   },
 * //                   sourceContentData: { // SourceContentDataDetails
 * //                     id: "STRING_VALUE", // required
 * //                     type: "STRING_VALUE", // required
 * //                     textData: {
 * //                       title: "<DocumentText>",
 * //                       excerpt: "<DocumentText>",
 * //                     },
 * //                     rankingData: {
 * //                       relevanceScore: Number("double"),
 * //                       relevanceLevel: "STRING_VALUE",
 * //                     },
 * //                     citationSpan: { // CitationSpan
 * //                       beginOffsetInclusive: Number("int"),
 * //                       endOffsetExclusive: Number("int"),
 * //                     },
 * //                   },
 * //                   generativeChunkData: { // GenerativeChunkDataDetails
 * //                     completion: "STRING_VALUE",
 * //                     references: [
 * //                       "<DataSummary>",
 * //                     ],
 * //                     nextChunkToken: "STRING_VALUE",
 * //                   },
 * //                   emailResponseChunkData: { // EmailResponseChunkDataDetails
 * //                     completion: "STRING_VALUE",
 * //                     nextChunkToken: "STRING_VALUE",
 * //                   },
 * //                   emailOverviewChunkData: { // EmailOverviewChunkDataDetails
 * //                     completion: "STRING_VALUE",
 * //                     nextChunkToken: "STRING_VALUE",
 * //                   },
 * //                   emailGenerativeAnswerChunkData: { // EmailGenerativeAnswerChunkDataDetails
 * //                     completion: "STRING_VALUE",
 * //                     references: [
 * //                       "<DataSummary>",
 * //                     ],
 * //                     nextChunkToken: "STRING_VALUE",
 * //                   },
 * //                   caseSummarizationChunkData: { // CaseSummarizationChunkDataDetails
 * //                     completion: "STRING_VALUE",
 * //                     nextChunkToken: "STRING_VALUE",
 * //                   },
 * //                   suggestedMessageData: { // SuggestedMessageDataDetails
 * //                     messageText: "STRING_VALUE", // required
 * //                   },
 * //                   notesData: { // NotesDataDetails
 * //                     completion: "STRING_VALUE",
 * //                   },
 * //                   notesChunkData: { // NotesChunkDataDetails
 * //                     completion: "STRING_VALUE",
 * //                     nextChunkToken: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             rankingData: {
 * //               relevanceScore: Number("double"),
 * //               relevanceLevel: "STRING_VALUE",
 * //             },
 * //           },
 * //           intentDetectedData: {
 * //             intent: "STRING_VALUE", // required
 * //             intentId: "STRING_VALUE", // required
 * //             relevanceLevel: "STRING_VALUE",
 * //           },
 * //           sourceContentData: {
 * //             id: "STRING_VALUE", // required
 * //             type: "STRING_VALUE", // required
 * //             textData: {
 * //               title: "<DocumentText>",
 * //               excerpt: "<DocumentText>",
 * //             },
 * //             rankingData: "<RankingData>", // required
 * //             citationSpan: {
 * //               beginOffsetInclusive: Number("int"),
 * //               endOffsetExclusive: Number("int"),
 * //             },
 * //           },
 * //           generativeChunkData: {
 * //             completion: "STRING_VALUE",
 * //             references: [
 * //               "<DataSummary>",
 * //             ],
 * //             nextChunkToken: "STRING_VALUE",
 * //           },
 * //           emailResponseChunkData: {
 * //             completion: "STRING_VALUE",
 * //             nextChunkToken: "STRING_VALUE",
 * //           },
 * //           emailOverviewChunkData: {
 * //             completion: "STRING_VALUE",
 * //             nextChunkToken: "STRING_VALUE",
 * //           },
 * //           emailGenerativeAnswerChunkData: {
 * //             completion: "STRING_VALUE",
 * //             references: "<DataSummaryList>",
 * //             nextChunkToken: "STRING_VALUE",
 * //           },
 * //           caseSummarizationChunkData: {
 * //             completion: "STRING_VALUE",
 * //             nextChunkToken: "STRING_VALUE",
 * //           },
 * //           suggestedMessageData: {
 * //             messageText: "STRING_VALUE", // required
 * //           },
 * //           notesData: {
 * //             completion: "STRING_VALUE",
 * //           },
 * //           notesChunkData: {
 * //             completion: "STRING_VALUE",
 * //             nextChunkToken: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   triggers: [ // RecommendationTriggerList
 * //     { // RecommendationTrigger
 * //       id: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       source: "STRING_VALUE", // required
 * //       data: { // RecommendationTriggerData Union: only one key present
 * //         query: { // QueryRecommendationTriggerData
 * //           text: "STRING_VALUE",
 * //         },
 * //       },
 * //       recommendationIds: [ // RecommendationIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecommendationsCommandInput - {@link GetRecommendationsCommandInput}
 * @returns {@link GetRecommendationsCommandOutput}
 * @see {@link GetRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class GetRecommendationsCommand extends $Command
  .classBuilder<
    GetRecommendationsCommandInput,
    GetRecommendationsCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "GetRecommendations", {})
  .n("QConnectClient", "GetRecommendationsCommand")
  .sc(GetRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommendationsRequest;
      output: GetRecommendationsResponse;
    };
    sdk: {
      input: GetRecommendationsCommandInput;
      output: GetRecommendationsCommandOutput;
    };
  };
}

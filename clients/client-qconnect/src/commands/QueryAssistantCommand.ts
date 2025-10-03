// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { QueryAssistantRequest, QueryAssistantRequestFilterSensitiveLog } from "../models/models_0";
import { QueryAssistantResponse, QueryAssistantResponseFilterSensitiveLog } from "../models/models_1";
import { de_QueryAssistantCommand, se_QueryAssistantCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryAssistantCommand}.
 */
export interface QueryAssistantCommandInput extends QueryAssistantRequest {}
/**
 * @public
 *
 * The output of {@link QueryAssistantCommand}.
 */
export interface QueryAssistantCommandOutput extends QueryAssistantResponse, __MetadataBearer {}

/**
 * <important> <p>This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Amazon Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.</p> </important> <p>Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>. </p>
 *
 * @deprecated QueryAssistant API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024 you will need to create a new Assistant in the Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, QueryAssistantCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, QueryAssistantCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // QueryAssistantRequest
 *   assistantId: "STRING_VALUE", // required
 *   queryText: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sessionId: "STRING_VALUE",
 *   queryCondition: [ // QueryConditionExpression
 *     { // QueryCondition Union: only one key present
 *       single: { // QueryConditionItem
 *         field: "STRING_VALUE", // required
 *         comparator: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   queryInputData: { // QueryInputData Union: only one key present
 *     queryTextInputData: { // QueryTextInputData
 *       text: "STRING_VALUE", // required
 *     },
 *     intentInputData: { // IntentInputData
 *       intentId: "STRING_VALUE", // required
 *     },
 *   },
 *   overrideKnowledgeBaseSearchType: "STRING_VALUE",
 * };
 * const command = new QueryAssistantCommand(input);
 * const response = await client.send(command);
 * // { // QueryAssistantResponse
 * //   results: [ // QueryResultsList // required
 * //     { // ResultData
 * //       resultId: "STRING_VALUE", // required
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
 * //         },
 * //       },
 * //       type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param QueryAssistantCommandInput - {@link QueryAssistantCommandInput}
 * @returns {@link QueryAssistantCommandOutput}
 * @see {@link QueryAssistantCommandInput} for command's `input` shape.
 * @see {@link QueryAssistantCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request reached the service more than 15 minutes after the date stamp on the request or more than 15 minutes after the request expiration date (such as for pre-signed URLs), or the date stamp on the request is more than 15 minutes in the future.</p>
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
export class QueryAssistantCommand extends $Command
  .classBuilder<
    QueryAssistantCommandInput,
    QueryAssistantCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "QueryAssistant", {})
  .n("QConnectClient", "QueryAssistantCommand")
  .f(QueryAssistantRequestFilterSensitiveLog, QueryAssistantResponseFilterSensitiveLog)
  .ser(se_QueryAssistantCommand)
  .de(de_QueryAssistantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryAssistantRequest;
      output: QueryAssistantResponse;
    };
    sdk: {
      input: QueryAssistantCommandInput;
      output: QueryAssistantCommandOutput;
    };
  };
}

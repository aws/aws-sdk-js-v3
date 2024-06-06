// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListTestExecutionResultItemsRequest, ListTestExecutionResultItemsResponse } from "../models/models_1";
import {
  de_ListTestExecutionResultItemsCommand,
  se_ListTestExecutionResultItemsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestExecutionResultItemsCommand}.
 */
export interface ListTestExecutionResultItemsCommandInput extends ListTestExecutionResultItemsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestExecutionResultItemsCommand}.
 */
export interface ListTestExecutionResultItemsCommandOutput
  extends ListTestExecutionResultItemsResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of test execution result items.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListTestExecutionResultItemsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListTestExecutionResultItemsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListTestExecutionResultItemsRequest
 *   testExecutionId: "STRING_VALUE", // required
 *   resultFilterBy: { // TestExecutionResultFilterBy
 *     resultTypeFilter: "OverallTestResults" || "ConversationLevelTestResults" || "IntentClassificationTestResults" || "SlotResolutionTestResults" || "UtteranceLevelResults", // required
 *     conversationLevelTestResultsFilterBy: { // ConversationLevelTestResultsFilterBy
 *       endToEndResult: "Matched" || "Mismatched" || "ExecutionError",
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestExecutionResultItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestExecutionResultItemsResponse
 * //   testExecutionResults: { // TestExecutionResultItems
 * //     overallTestResults: { // OverallTestResults
 * //       items: [ // OverallTestResultItemList // required
 * //         { // OverallTestResultItem
 * //           multiTurnConversation: true || false, // required
 * //           totalResultCount: Number("int"), // required
 * //           speechTranscriptionResultCounts: { // TestResultMatchStatusCountMap
 * //             "<keys>": Number("int"),
 * //           },
 * //           endToEndResultCounts: { // required
 * //             "<keys>": Number("int"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     conversationLevelTestResults: { // ConversationLevelTestResults
 * //       items: [ // ConversationLevelTestResultItemList // required
 * //         { // ConversationLevelTestResultItem
 * //           conversationId: "STRING_VALUE", // required
 * //           endToEndResult: "Matched" || "Mismatched" || "ExecutionError", // required
 * //           speechTranscriptionResult: "Matched" || "Mismatched" || "ExecutionError",
 * //           intentClassificationResults: [ // ConversationLevelIntentClassificationResults // required
 * //             { // ConversationLevelIntentClassificationResultItem
 * //               intentName: "STRING_VALUE", // required
 * //               matchResult: "Matched" || "Mismatched" || "ExecutionError", // required
 * //             },
 * //           ],
 * //           slotResolutionResults: [ // ConversationLevelSlotResolutionResults // required
 * //             { // ConversationLevelSlotResolutionResultItem
 * //               intentName: "STRING_VALUE", // required
 * //               slotName: "STRING_VALUE", // required
 * //               matchResult: "Matched" || "Mismatched" || "ExecutionError", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     intentClassificationTestResults: { // IntentClassificationTestResults
 * //       items: [ // IntentClassificationTestResultItemList // required
 * //         { // IntentClassificationTestResultItem
 * //           intentName: "STRING_VALUE", // required
 * //           multiTurnConversation: true || false, // required
 * //           resultCounts: { // IntentClassificationTestResultItemCounts
 * //             totalResultCount: Number("int"), // required
 * //             speechTranscriptionResultCounts: {
 * //               "<keys>": Number("int"),
 * //             },
 * //             intentMatchResultCounts: { // required
 * //               "<keys>": Number("int"),
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     intentLevelSlotResolutionTestResults: { // IntentLevelSlotResolutionTestResults
 * //       items: [ // IntentLevelSlotResolutionTestResultItemList // required
 * //         { // IntentLevelSlotResolutionTestResultItem
 * //           intentName: "STRING_VALUE", // required
 * //           multiTurnConversation: true || false, // required
 * //           slotResolutionResults: [ // SlotResolutionTestResultItems // required
 * //             { // SlotResolutionTestResultItem
 * //               slotName: "STRING_VALUE", // required
 * //               resultCounts: { // SlotResolutionTestResultItemCounts
 * //                 totalResultCount: Number("int"), // required
 * //                 speechTranscriptionResultCounts: "<TestResultMatchStatusCountMap>",
 * //                 slotMatchResultCounts: "<TestResultMatchStatusCountMap>", // required
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     utteranceLevelTestResults: { // UtteranceLevelTestResults
 * //       items: [ // UtteranceLevelTestResultItemList // required
 * //         { // UtteranceLevelTestResultItem
 * //           recordNumber: Number("long"), // required
 * //           conversationId: "STRING_VALUE",
 * //           turnResult: { // TestSetTurnResult
 * //             agent: { // AgentTurnResult
 * //               expectedAgentPrompt: "STRING_VALUE", // required
 * //               actualAgentPrompt: "STRING_VALUE",
 * //               errorDetails: { // ExecutionErrorDetails
 * //                 errorCode: "STRING_VALUE", // required
 * //                 errorMessage: "STRING_VALUE", // required
 * //               },
 * //               actualElicitedSlot: "STRING_VALUE",
 * //               actualIntent: "STRING_VALUE",
 * //             },
 * //             user: { // UserTurnResult
 * //               input: { // UserTurnInputSpecification
 * //                 utteranceInput: { // UtteranceInputSpecification
 * //                   textInput: "STRING_VALUE",
 * //                   audioInput: { // UtteranceAudioInputSpecification
 * //                     audioFileS3Location: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //                 requestAttributes: { // StringMap
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 sessionState: { // InputSessionStateSpecification
 * //                   sessionAttributes: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   activeContexts: [ // ActiveContextList
 * //                     { // ActiveContext
 * //                       name: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   runtimeHints: { // RuntimeHints
 * //                     slotHints: { // SlotHintsIntentMap
 * //                       "<keys>": { // SlotHintsSlotMap
 * //                         "<keys>": { // RuntimeHintDetails
 * //                           runtimeHintValues: [ // RuntimeHintValuesList
 * //                             { // RuntimeHintValue
 * //                               phrase: "STRING_VALUE", // required
 * //                             },
 * //                           ],
 * //                           subSlotHints: {
 * //                             "<keys>": {
 * //                               runtimeHintValues: [
 * //                                 {
 * //                                   phrase: "STRING_VALUE", // required
 * //                                 },
 * //                               ],
 * //                               subSlotHints: "<SlotHintsSlotMap>",
 * //                             },
 * //                           },
 * //                         },
 * //                       },
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //               expectedOutput: { // UserTurnOutputSpecification
 * //                 intent: { // UserTurnIntentOutput
 * //                   name: "STRING_VALUE", // required
 * //                   slots: { // UserTurnSlotOutputMap
 * //                     "<keys>": { // UserTurnSlotOutput
 * //                       value: "STRING_VALUE",
 * //                       values: [ // UserTurnSlotOutputList
 * //                         {
 * //                           value: "STRING_VALUE",
 * //                           values: [
 * //                             "<UserTurnSlotOutput>",
 * //                           ],
 * //                           subSlots: {
 * //                             "<keys>": "<UserTurnSlotOutput>",
 * //                           },
 * //                         },
 * //                       ],
 * //                       subSlots: "<UserTurnSlotOutputMap>",
 * //                     },
 * //                   },
 * //                 },
 * //                 activeContexts: [
 * //                   {
 * //                     name: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 transcript: "STRING_VALUE",
 * //               },
 * //               actualOutput: {
 * //                 intent: {
 * //                   name: "STRING_VALUE", // required
 * //                   slots: "<UserTurnSlotOutputMap>",
 * //                 },
 * //                 activeContexts: [
 * //                   {
 * //                     name: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 transcript: "STRING_VALUE",
 * //               },
 * //               errorDetails: {
 * //                 errorCode: "STRING_VALUE", // required
 * //                 errorMessage: "STRING_VALUE", // required
 * //               },
 * //               endToEndResult: "Matched" || "Mismatched" || "ExecutionError",
 * //               intentMatchResult: "Matched" || "Mismatched" || "ExecutionError",
 * //               slotMatchResult: "Matched" || "Mismatched" || "ExecutionError",
 * //               speechTranscriptionResult: "Matched" || "Mismatched" || "ExecutionError",
 * //               conversationLevelResult: { // ConversationLevelResultDetail
 * //                 endToEndResult: "Matched" || "Mismatched" || "ExecutionError", // required
 * //                 speechTranscriptionResult: "Matched" || "Mismatched" || "ExecutionError",
 * //               },
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestExecutionResultItemsCommandInput - {@link ListTestExecutionResultItemsCommandInput}
 * @returns {@link ListTestExecutionResultItemsCommandOutput}
 * @see {@link ListTestExecutionResultItemsCommandInput} for command's `input` shape.
 * @see {@link ListTestExecutionResultItemsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 * @public
 */
export class ListTestExecutionResultItemsCommand extends $Command
  .classBuilder<
    ListTestExecutionResultItemsCommandInput,
    ListTestExecutionResultItemsCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "ListTestExecutionResultItems", {})
  .n("LexModelsV2Client", "ListTestExecutionResultItemsCommand")
  .f(void 0, void 0)
  .ser(se_ListTestExecutionResultItemsCommand)
  .de(de_ListTestExecutionResultItemsCommand)
  .build() {}

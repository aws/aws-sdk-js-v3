// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { ListTestSetRecordsRequest, ListTestSetRecordsResponse } from "../models/models_1";
import { ListTestSetRecords } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTestSetRecordsCommand}.
 */
export interface ListTestSetRecordsCommandInput extends ListTestSetRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestSetRecordsCommand}.
 */
export interface ListTestSetRecordsCommandOutput extends ListTestSetRecordsResponse, __MetadataBearer {}

/**
 * <p>The list of test set records.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListTestSetRecordsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListTestSetRecordsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListTestSetRecordsRequest
 *   testSetId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestSetRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestSetRecordsResponse
 * //   testSetRecords: [ // TestSetTurnRecordList
 * //     { // TestSetTurnRecord
 * //       recordNumber: Number("long"), // required
 * //       conversationId: "STRING_VALUE",
 * //       turnNumber: Number("int"),
 * //       turnSpecification: { // TurnSpecification
 * //         agentTurn: { // AgentTurnSpecification
 * //           agentPrompt: "STRING_VALUE", // required
 * //         },
 * //         userTurn: { // UserTurnSpecification
 * //           input: { // UserTurnInputSpecification
 * //             utteranceInput: { // UtteranceInputSpecification
 * //               textInput: "STRING_VALUE",
 * //               audioInput: { // UtteranceAudioInputSpecification
 * //                 audioFileS3Location: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             requestAttributes: { // StringMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             sessionState: { // InputSessionStateSpecification
 * //               sessionAttributes: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               activeContexts: [ // ActiveContextList
 * //                 { // ActiveContext
 * //                   name: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               runtimeHints: { // RuntimeHints
 * //                 slotHints: { // SlotHintsIntentMap
 * //                   "<keys>": { // SlotHintsSlotMap
 * //                     "<keys>": { // RuntimeHintDetails
 * //                       runtimeHintValues: [ // RuntimeHintValuesList
 * //                         { // RuntimeHintValue
 * //                           phrase: "STRING_VALUE", // required
 * //                         },
 * //                       ],
 * //                       subSlotHints: {
 * //                         "<keys>": {
 * //                           runtimeHintValues: [
 * //                             {
 * //                               phrase: "STRING_VALUE", // required
 * //                             },
 * //                           ],
 * //                           subSlotHints: "<SlotHintsSlotMap>",
 * //                         },
 * //                       },
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           expected: { // UserTurnOutputSpecification
 * //             intent: { // UserTurnIntentOutput
 * //               name: "STRING_VALUE", // required
 * //               slots: { // UserTurnSlotOutputMap
 * //                 "<keys>": { // UserTurnSlotOutput
 * //                   value: "STRING_VALUE",
 * //                   values: [ // UserTurnSlotOutputList
 * //                     {
 * //                       value: "STRING_VALUE",
 * //                       values: [
 * //                         "<UserTurnSlotOutput>",
 * //                       ],
 * //                       subSlots: {
 * //                         "<keys>": "<UserTurnSlotOutput>",
 * //                       },
 * //                     },
 * //                   ],
 * //                   subSlots: "<UserTurnSlotOutputMap>",
 * //                 },
 * //               },
 * //             },
 * //             activeContexts: [
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             transcript: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestSetRecordsCommandInput - {@link ListTestSetRecordsCommandInput}
 * @returns {@link ListTestSetRecordsCommandOutput}
 * @see {@link ListTestSetRecordsCommandInput} for command's `input` shape.
 * @see {@link ListTestSetRecordsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListTestSetRecordsCommand extends $Command
  .classBuilder<
    ListTestSetRecordsCommandInput,
    ListTestSetRecordsCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListTestSetRecords", {})
  .n("LexModelsV2Client", "ListTestSetRecordsCommand")
  .sc(ListTestSetRecords)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestSetRecordsRequest;
      output: ListTestSetRecordsResponse;
    };
    sdk: {
      input: ListTestSetRecordsCommandInput;
      output: ListTestSetRecordsCommandOutput;
    };
  };
}

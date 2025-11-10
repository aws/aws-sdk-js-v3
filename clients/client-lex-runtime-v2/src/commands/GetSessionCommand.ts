// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { GetSessionRequest, GetSessionResponse } from "../models/models_0";
import { GetSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {}

/**
 * <p>Returns session information for a specified bot, alias, and
 *          user.</p>
 *          <p>For example, you can use this operation to retrieve session
 *          information for a user that has left a long-running session in
 *          use.</p>
 *          <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2
 *          returns a <code>BadRequestException</code>. If the locale doesn't exist
 *          or is not enabled for the alias, you receive a
 *             <code>BadRequestException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, GetSessionCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, GetSessionCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * // import type { LexRuntimeV2ClientConfig } from "@aws-sdk/client-lex-runtime-v2";
 * const config = {}; // type is LexRuntimeV2ClientConfig
 * const client = new LexRuntimeV2Client(config);
 * const input = { // GetSessionRequest
 *   botId: "STRING_VALUE", // required
 *   botAliasId: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionResponse
 * //   sessionId: "STRING_VALUE",
 * //   messages: [ // Messages
 * //     { // Message
 * //       content: "STRING_VALUE",
 * //       contentType: "CustomPayload" || "ImageResponseCard" || "PlainText" || "SSML", // required
 * //       imageResponseCard: { // ImageResponseCard
 * //         title: "STRING_VALUE", // required
 * //         subtitle: "STRING_VALUE",
 * //         imageUrl: "STRING_VALUE",
 * //         buttons: [ // ButtonsList
 * //           { // Button
 * //             text: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   interpretations: [ // Interpretations
 * //     { // Interpretation
 * //       nluConfidence: { // ConfidenceScore
 * //         score: Number("double"),
 * //       },
 * //       sentimentResponse: { // SentimentResponse
 * //         sentiment: "MIXED" || "NEGATIVE" || "NEUTRAL" || "POSITIVE",
 * //         sentimentScore: { // SentimentScore
 * //           positive: Number("double"),
 * //           negative: Number("double"),
 * //           neutral: Number("double"),
 * //           mixed: Number("double"),
 * //         },
 * //       },
 * //       intent: { // Intent
 * //         name: "STRING_VALUE", // required
 * //         slots: { // Slots
 * //           "<keys>": { // Slot
 * //             value: { // Value
 * //               originalValue: "STRING_VALUE",
 * //               interpretedValue: "STRING_VALUE", // required
 * //               resolvedValues: [ // StringList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             shape: "Scalar" || "List" || "Composite",
 * //             values: [ // Values
 * //               {
 * //                 value: {
 * //                   originalValue: "STRING_VALUE",
 * //                   interpretedValue: "STRING_VALUE", // required
 * //                   resolvedValues: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 shape: "Scalar" || "List" || "Composite",
 * //                 values: [
 * //                   "<Slot>",
 * //                 ],
 * //                 subSlots: {
 * //                   "<keys>": "<Slot>",
 * //                 },
 * //               },
 * //             ],
 * //             subSlots: "<Slots>",
 * //           },
 * //         },
 * //         state: "Failed" || "Fulfilled" || "InProgress" || "ReadyForFulfillment" || "Waiting" || "FulfillmentInProgress",
 * //         confirmationState: "Confirmed" || "Denied" || "None",
 * //       },
 * //       interpretationSource: "Bedrock" || "Lex",
 * //     },
 * //   ],
 * //   sessionState: { // SessionState
 * //     dialogAction: { // DialogAction
 * //       type: "Close" || "ConfirmIntent" || "Delegate" || "ElicitIntent" || "ElicitSlot" || "None", // required
 * //       slotToElicit: "STRING_VALUE",
 * //       slotElicitationStyle: "Default" || "SpellByLetter" || "SpellByWord",
 * //       subSlotToElicit: { // ElicitSubSlot
 * //         name: "STRING_VALUE", // required
 * //         subSlotToElicit: {
 * //           name: "STRING_VALUE", // required
 * //           subSlotToElicit: "<ElicitSubSlot>",
 * //         },
 * //       },
 * //     },
 * //     intent: {
 * //       name: "STRING_VALUE", // required
 * //       slots: "<Slots>",
 * //       state: "Failed" || "Fulfilled" || "InProgress" || "ReadyForFulfillment" || "Waiting" || "FulfillmentInProgress",
 * //       confirmationState: "Confirmed" || "Denied" || "None",
 * //     },
 * //     activeContexts: [ // ActiveContextsList
 * //       { // ActiveContext
 * //         name: "STRING_VALUE", // required
 * //         timeToLive: { // ActiveContextTimeToLive
 * //           timeToLiveInSeconds: Number("int"), // required
 * //           turnsToLive: Number("int"), // required
 * //         },
 * //         contextAttributes: { // ActiveContextParametersMap // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     sessionAttributes: { // StringMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     originatingRequestId: "STRING_VALUE",
 * //     runtimeHints: { // RuntimeHints
 * //       slotHints: { // SlotHintsIntentMap
 * //         "<keys>": { // SlotHintsSlotMap
 * //           "<keys>": { // RuntimeHintDetails
 * //             runtimeHintValues: [ // RuntimeHintValuesList
 * //               { // RuntimeHintValue
 * //                 phrase: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             subSlotHints: {
 * //               "<keys>": {
 * //                 runtimeHintValues: [
 * //                   {
 * //                     phrase: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 subSlotHints: "<SlotHintsSlotMap>",
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for LexRuntimeV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p></p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p></p>
 *
 * @throws {@link LexRuntimeV2ServiceException}
 * <p>Base exception class for all service exceptions from LexRuntimeV2 service.</p>
 *
 *
 * @public
 */
export class GetSessionCommand extends $Command
  .classBuilder<
    GetSessionCommandInput,
    GetSessionCommandOutput,
    LexRuntimeV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexRuntimeV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseRunTimeServiceApi2_0", "GetSession", {})
  .n("LexRuntimeV2Client", "GetSessionCommand")
  .sc(GetSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionRequest;
      output: GetSessionResponse;
    };
    sdk: {
      input: GetSessionCommandInput;
      output: GetSessionCommandOutput;
    };
  };
}

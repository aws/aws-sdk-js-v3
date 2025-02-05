// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import {
  RecognizeTextRequest,
  RecognizeTextRequestFilterSensitiveLog,
  RecognizeTextResponse,
  RecognizeTextResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_RecognizeTextCommand, se_RecognizeTextCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RecognizeTextCommand}.
 */
export interface RecognizeTextCommandInput extends RecognizeTextRequest {}
/**
 * @public
 *
 * The output of {@link RecognizeTextCommand}.
 */
export interface RecognizeTextCommandOutput extends RecognizeTextResponse, __MetadataBearer {}

/**
 * <p>Sends user input to Amazon Lex V2. Client applications use this API to send
 *          requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input
 *          using the machine learning model that it build for the bot.</p>
 *          <p>In response, Amazon Lex V2 returns the next message to convey to the user
 *          and an optional response card to display.</p>
 *          <p>If the optional post-fulfillment response is specified, the messages
 *          are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Success message</b> - Returned if
 *                the Lambda function completes successfully and the intent state is
 *                fulfilled or ready fulfillment if the message is present.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Failed message</b> - The failed
 *                message is returned if the Lambda function throws an exception or
 *                if the Lambda function returns a failed intent state without a
 *                message.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Timeout message</b> - If you
 *                don't configure a timeout message and a timeout, and the Lambda
 *                function doesn't return within 30 seconds, the timeout message is
 *                returned. If you configure a timeout, the timeout message is
 *                returned when the period times out. </p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, RecognizeTextCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, RecognizeTextCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LexRuntimeV2Client(config);
 * const input = { // RecognizeTextRequest
 *   botId: "STRING_VALUE", // required
 *   botAliasId: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   text: "STRING_VALUE", // required
 *   sessionState: { // SessionState
 *     dialogAction: { // DialogAction
 *       type: "Close" || "ConfirmIntent" || "Delegate" || "ElicitIntent" || "ElicitSlot" || "None", // required
 *       slotToElicit: "STRING_VALUE",
 *       slotElicitationStyle: "Default" || "SpellByLetter" || "SpellByWord",
 *       subSlotToElicit: { // ElicitSubSlot
 *         name: "STRING_VALUE", // required
 *         subSlotToElicit: {
 *           name: "STRING_VALUE", // required
 *           subSlotToElicit: "<ElicitSubSlot>",
 *         },
 *       },
 *     },
 *     intent: { // Intent
 *       name: "STRING_VALUE", // required
 *       slots: { // Slots
 *         "<keys>": { // Slot
 *           value: { // Value
 *             originalValue: "STRING_VALUE",
 *             interpretedValue: "STRING_VALUE", // required
 *             resolvedValues: [ // StringList
 *               "STRING_VALUE",
 *             ],
 *           },
 *           shape: "Scalar" || "List" || "Composite",
 *           values: [ // Values
 *             {
 *               value: {
 *                 originalValue: "STRING_VALUE",
 *                 interpretedValue: "STRING_VALUE", // required
 *                 resolvedValues: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               shape: "Scalar" || "List" || "Composite",
 *               values: [
 *                 "<Slot>",
 *               ],
 *               subSlots: {
 *                 "<keys>": "<Slot>",
 *               },
 *             },
 *           ],
 *           subSlots: "<Slots>",
 *         },
 *       },
 *       state: "Failed" || "Fulfilled" || "InProgress" || "ReadyForFulfillment" || "Waiting" || "FulfillmentInProgress",
 *       confirmationState: "Confirmed" || "Denied" || "None",
 *     },
 *     activeContexts: [ // ActiveContextsList
 *       { // ActiveContext
 *         name: "STRING_VALUE", // required
 *         timeToLive: { // ActiveContextTimeToLive
 *           timeToLiveInSeconds: Number("int"), // required
 *           turnsToLive: Number("int"), // required
 *         },
 *         contextAttributes: { // ActiveContextParametersMap // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     sessionAttributes: { // StringMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     originatingRequestId: "STRING_VALUE",
 *     runtimeHints: { // RuntimeHints
 *       slotHints: { // SlotHintsIntentMap
 *         "<keys>": { // SlotHintsSlotMap
 *           "<keys>": { // RuntimeHintDetails
 *             runtimeHintValues: [ // RuntimeHintValuesList
 *               { // RuntimeHintValue
 *                 phrase: "STRING_VALUE", // required
 *               },
 *             ],
 *             subSlotHints: {
 *               "<keys>": {
 *                 runtimeHintValues: [
 *                   {
 *                     phrase: "STRING_VALUE", // required
 *                   },
 *                 ],
 *                 subSlotHints: "<SlotHintsSlotMap>",
 *               },
 *             },
 *           },
 *         },
 *       },
 *     },
 *   },
 *   requestAttributes: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RecognizeTextCommand(input);
 * const response = await client.send(command);
 * // { // RecognizeTextResponse
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
 * //     intent: { // Intent
 * //       name: "STRING_VALUE", // required
 * //       slots: { // Slots
 * //         "<keys>": { // Slot
 * //           value: { // Value
 * //             originalValue: "STRING_VALUE",
 * //             interpretedValue: "STRING_VALUE", // required
 * //             resolvedValues: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           shape: "Scalar" || "List" || "Composite",
 * //           values: [ // Values
 * //             {
 * //               value: {
 * //                 originalValue: "STRING_VALUE",
 * //                 interpretedValue: "STRING_VALUE", // required
 * //                 resolvedValues: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               shape: "Scalar" || "List" || "Composite",
 * //               values: [
 * //                 "<Slot>",
 * //               ],
 * //               subSlots: {
 * //                 "<keys>": "<Slot>",
 * //               },
 * //             },
 * //           ],
 * //           subSlots: "<Slots>",
 * //         },
 * //       },
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
 * //       intent: {
 * //         name: "STRING_VALUE", // required
 * //         slots: "<Slots>",
 * //         state: "Failed" || "Fulfilled" || "InProgress" || "ReadyForFulfillment" || "Waiting" || "FulfillmentInProgress",
 * //         confirmationState: "Confirmed" || "Denied" || "None",
 * //       },
 * //       interpretationSource: "Bedrock" || "Lex",
 * //     },
 * //   ],
 * //   requestAttributes: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   sessionId: "STRING_VALUE",
 * //   recognizedBotMember: { // RecognizedBotMember
 * //     botId: "STRING_VALUE", // required
 * //     botName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RecognizeTextCommandInput - {@link RecognizeTextCommandInput}
 * @returns {@link RecognizeTextCommandOutput}
 * @see {@link RecognizeTextCommandInput} for command's `input` shape.
 * @see {@link RecognizeTextCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for LexRuntimeV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p></p>
 *
 * @throws {@link BadGatewayException} (server fault)
 *  <p></p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p></p>
 *
 * @throws {@link DependencyFailedException} (client fault)
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
 * @public
 */
export class RecognizeTextCommand extends $Command
  .classBuilder<
    RecognizeTextCommandInput,
    RecognizeTextCommandOutput,
    LexRuntimeV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexRuntimeV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseRunTimeServiceApi2_0", "RecognizeText", {})
  .n("LexRuntimeV2Client", "RecognizeTextCommand")
  .f(RecognizeTextRequestFilterSensitiveLog, RecognizeTextResponseFilterSensitiveLog)
  .ser(se_RecognizeTextCommand)
  .de(de_RecognizeTextCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RecognizeTextRequest;
      output: RecognizeTextResponse;
    };
    sdk: {
      input: RecognizeTextCommandInput;
      output: RecognizeTextCommandOutput;
    };
  };
}

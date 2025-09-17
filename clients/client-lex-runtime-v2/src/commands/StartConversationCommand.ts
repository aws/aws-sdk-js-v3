// smithy-typescript generated code
import { getEventStreamPlugin } from "@aws-sdk/middleware-eventstream";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import {
  StartConversationRequest,
  StartConversationRequestFilterSensitiveLog,
  StartConversationResponse,
  StartConversationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartConversationCommand, se_StartConversationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartConversationCommand}.
 */
export interface StartConversationCommandInput extends StartConversationRequest {}
/**
 * @public
 *
 * The output of {@link StartConversationCommand}.
 */
export interface StartConversationCommandOutput extends StartConversationResponse, __MetadataBearer {}

/**
 * <p>Starts an HTTP/2 bidirectional event stream that enables you to send
 *          audio, text, or DTMF input in real time. After your application starts
 *          a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon Lex V2
 *          processes the incoming events and responds with streaming text or audio
 *          events.
 *       </p>
 *          <p>Audio input must be in the following format: <code>audio/lpcm
 *             sample-rate=8000 sample-size-bits=16 channel-count=1;
 *             is-big-endian=false</code>.</p>
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
 *          <p>If the optional update message is configured, it is played at the
 *          specified frequency while the Lambda function is running and the update
 *          message state is active. If the fulfillment update message is not
 *          active, the Lambda function runs with a 30 second timeout. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-update.html">Update message </a>
 *          </p>
 *          <p>The <code>StartConversation</code> operation is supported only in
 *          the following SDKs: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/goto/SdkForCpp/runtime.lex.v2-2020-08-07/StartConversation">AWS SDK for C++</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/goto/SdkForJavaV2/runtime.lex.v2-2020-08-07/StartConversation">AWS SDK for Java V2</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/goto/SdkForRubyV3/runtime.lex.v2-2020-08-07/StartConversation">AWS SDK for Ruby V3</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, StartConversationCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, StartConversationCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * // import type { LexRuntimeV2ClientConfig } from "@aws-sdk/client-lex-runtime-v2";
 * const config = {}; // type is LexRuntimeV2ClientConfig
 * const client = new LexRuntimeV2Client(config);
 * const input = { // StartConversationRequest
 *   botId: "STRING_VALUE", // required
 *   botAliasId: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   conversationMode: "AUDIO" || "TEXT",
 *   requestEventStream: { // StartConversationRequestEventStream Union: only one key present
 *     ConfigurationEvent: { // ConfigurationEvent
 *       requestAttributes: { // StringMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       responseContentType: "STRING_VALUE", // required
 *       sessionState: { // SessionState
 *         dialogAction: { // DialogAction
 *           type: "Close" || "ConfirmIntent" || "Delegate" || "ElicitIntent" || "ElicitSlot" || "None", // required
 *           slotToElicit: "STRING_VALUE",
 *           slotElicitationStyle: "Default" || "SpellByLetter" || "SpellByWord",
 *           subSlotToElicit: { // ElicitSubSlot
 *             name: "STRING_VALUE", // required
 *             subSlotToElicit: {
 *               name: "STRING_VALUE", // required
 *               subSlotToElicit: "<ElicitSubSlot>",
 *             },
 *           },
 *         },
 *         intent: { // Intent
 *           name: "STRING_VALUE", // required
 *           slots: { // Slots
 *             "<keys>": { // Slot
 *               value: { // Value
 *                 originalValue: "STRING_VALUE",
 *                 interpretedValue: "STRING_VALUE", // required
 *                 resolvedValues: [ // StringList
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               shape: "Scalar" || "List" || "Composite",
 *               values: [ // Values
 *                 {
 *                   value: {
 *                     originalValue: "STRING_VALUE",
 *                     interpretedValue: "STRING_VALUE", // required
 *                     resolvedValues: [
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                   shape: "Scalar" || "List" || "Composite",
 *                   values: [
 *                     "<Slot>",
 *                   ],
 *                   subSlots: {
 *                     "<keys>": "<Slot>",
 *                   },
 *                 },
 *               ],
 *               subSlots: "<Slots>",
 *             },
 *           },
 *           state: "Failed" || "Fulfilled" || "InProgress" || "ReadyForFulfillment" || "Waiting" || "FulfillmentInProgress",
 *           confirmationState: "Confirmed" || "Denied" || "None",
 *         },
 *         activeContexts: [ // ActiveContextsList
 *           { // ActiveContext
 *             name: "STRING_VALUE", // required
 *             timeToLive: { // ActiveContextTimeToLive
 *               timeToLiveInSeconds: Number("int"), // required
 *               turnsToLive: Number("int"), // required
 *             },
 *             contextAttributes: { // ActiveContextParametersMap // required
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         sessionAttributes: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         originatingRequestId: "STRING_VALUE",
 *         runtimeHints: { // RuntimeHints
 *           slotHints: { // SlotHintsIntentMap
 *             "<keys>": { // SlotHintsSlotMap
 *               "<keys>": { // RuntimeHintDetails
 *                 runtimeHintValues: [ // RuntimeHintValuesList
 *                   { // RuntimeHintValue
 *                     phrase: "STRING_VALUE", // required
 *                   },
 *                 ],
 *                 subSlotHints: {
 *                   "<keys>": {
 *                     runtimeHintValues: [
 *                       {
 *                         phrase: "STRING_VALUE", // required
 *                       },
 *                     ],
 *                     subSlotHints: "<SlotHintsSlotMap>",
 *                   },
 *                 },
 *               },
 *             },
 *           },
 *         },
 *       },
 *       welcomeMessages: [ // Messages
 *         { // Message
 *           content: "STRING_VALUE",
 *           contentType: "CustomPayload" || "ImageResponseCard" || "PlainText" || "SSML", // required
 *           imageResponseCard: { // ImageResponseCard
 *             title: "STRING_VALUE", // required
 *             subtitle: "STRING_VALUE",
 *             imageUrl: "STRING_VALUE",
 *             buttons: [ // ButtonsList
 *               { // Button
 *                 text: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *       ],
 *       disablePlayback: true || false,
 *       eventId: "STRING_VALUE",
 *       clientTimestampMillis: Number("long"),
 *     },
 *     AudioInputEvent: { // AudioInputEvent
 *       audioChunk: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       contentType: "STRING_VALUE", // required
 *       eventId: "STRING_VALUE",
 *       clientTimestampMillis: Number("long"),
 *     },
 *     DTMFInputEvent: { // DTMFInputEvent
 *       inputCharacter: "STRING_VALUE", // required
 *       eventId: "STRING_VALUE",
 *       clientTimestampMillis: Number("long"),
 *     },
 *     TextInputEvent: { // TextInputEvent
 *       text: "STRING_VALUE", // required
 *       eventId: "STRING_VALUE",
 *       clientTimestampMillis: Number("long"),
 *     },
 *     PlaybackCompletionEvent: { // PlaybackCompletionEvent
 *       eventId: "STRING_VALUE",
 *       clientTimestampMillis: Number("long"),
 *     },
 *     DisconnectionEvent: { // DisconnectionEvent
 *       eventId: "STRING_VALUE",
 *       clientTimestampMillis: Number("long"),
 *     },
 *   },
 * };
 * const command = new StartConversationCommand(input);
 * const response = await client.send(command);
 * // { // StartConversationResponse
 * //   responseEventStream: { // StartConversationResponseEventStream Union: only one key present
 * //     PlaybackInterruptionEvent: { // PlaybackInterruptionEvent
 * //       eventReason: "DTMF_START_DETECTED" || "TEXT_DETECTED" || "VOICE_START_DETECTED",
 * //       causedByEventId: "STRING_VALUE",
 * //       eventId: "STRING_VALUE",
 * //     },
 * //     TranscriptEvent: { // TranscriptEvent
 * //       transcript: "STRING_VALUE",
 * //       eventId: "STRING_VALUE",
 * //     },
 * //     IntentResultEvent: { // IntentResultEvent
 * //       inputMode: "Text" || "Speech" || "DTMF",
 * //       interpretations: [ // Interpretations
 * //         { // Interpretation
 * //           nluConfidence: { // ConfidenceScore
 * //             score: Number("double"),
 * //           },
 * //           sentimentResponse: { // SentimentResponse
 * //             sentiment: "MIXED" || "NEGATIVE" || "NEUTRAL" || "POSITIVE",
 * //             sentimentScore: { // SentimentScore
 * //               positive: Number("double"),
 * //               negative: Number("double"),
 * //               neutral: Number("double"),
 * //               mixed: Number("double"),
 * //             },
 * //           },
 * //           intent: { // Intent
 * //             name: "STRING_VALUE", // required
 * //             slots: { // Slots
 * //               "<keys>": { // Slot
 * //                 value: { // Value
 * //                   originalValue: "STRING_VALUE",
 * //                   interpretedValue: "STRING_VALUE", // required
 * //                   resolvedValues: [ // StringList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 shape: "Scalar" || "List" || "Composite",
 * //                 values: [ // Values
 * //                   {
 * //                     value: {
 * //                       originalValue: "STRING_VALUE",
 * //                       interpretedValue: "STRING_VALUE", // required
 * //                       resolvedValues: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     shape: "Scalar" || "List" || "Composite",
 * //                     values: [
 * //                       "<Slot>",
 * //                     ],
 * //                     subSlots: {
 * //                       "<keys>": "<Slot>",
 * //                     },
 * //                   },
 * //                 ],
 * //                 subSlots: "<Slots>",
 * //               },
 * //             },
 * //             state: "Failed" || "Fulfilled" || "InProgress" || "ReadyForFulfillment" || "Waiting" || "FulfillmentInProgress",
 * //             confirmationState: "Confirmed" || "Denied" || "None",
 * //           },
 * //           interpretationSource: "Bedrock" || "Lex",
 * //         },
 * //       ],
 * //       sessionState: { // SessionState
 * //         dialogAction: { // DialogAction
 * //           type: "Close" || "ConfirmIntent" || "Delegate" || "ElicitIntent" || "ElicitSlot" || "None", // required
 * //           slotToElicit: "STRING_VALUE",
 * //           slotElicitationStyle: "Default" || "SpellByLetter" || "SpellByWord",
 * //           subSlotToElicit: { // ElicitSubSlot
 * //             name: "STRING_VALUE", // required
 * //             subSlotToElicit: {
 * //               name: "STRING_VALUE", // required
 * //               subSlotToElicit: "<ElicitSubSlot>",
 * //             },
 * //           },
 * //         },
 * //         intent: {
 * //           name: "STRING_VALUE", // required
 * //           slots: "<Slots>",
 * //           state: "Failed" || "Fulfilled" || "InProgress" || "ReadyForFulfillment" || "Waiting" || "FulfillmentInProgress",
 * //           confirmationState: "Confirmed" || "Denied" || "None",
 * //         },
 * //         activeContexts: [ // ActiveContextsList
 * //           { // ActiveContext
 * //             name: "STRING_VALUE", // required
 * //             timeToLive: { // ActiveContextTimeToLive
 * //               timeToLiveInSeconds: Number("int"), // required
 * //               turnsToLive: Number("int"), // required
 * //             },
 * //             contextAttributes: { // ActiveContextParametersMap // required
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         sessionAttributes: { // StringMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         originatingRequestId: "STRING_VALUE",
 * //         runtimeHints: { // RuntimeHints
 * //           slotHints: { // SlotHintsIntentMap
 * //             "<keys>": { // SlotHintsSlotMap
 * //               "<keys>": { // RuntimeHintDetails
 * //                 runtimeHintValues: [ // RuntimeHintValuesList
 * //                   { // RuntimeHintValue
 * //                     phrase: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 subSlotHints: {
 * //                   "<keys>": {
 * //                     runtimeHintValues: [
 * //                       {
 * //                         phrase: "STRING_VALUE", // required
 * //                       },
 * //                     ],
 * //                     subSlotHints: "<SlotHintsSlotMap>",
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //       requestAttributes: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       sessionId: "STRING_VALUE",
 * //       eventId: "STRING_VALUE",
 * //       recognizedBotMember: { // RecognizedBotMember
 * //         botId: "STRING_VALUE", // required
 * //         botName: "STRING_VALUE",
 * //       },
 * //     },
 * //     TextResponseEvent: { // TextResponseEvent
 * //       messages: [ // Messages
 * //         { // Message
 * //           content: "STRING_VALUE",
 * //           contentType: "CustomPayload" || "ImageResponseCard" || "PlainText" || "SSML", // required
 * //           imageResponseCard: { // ImageResponseCard
 * //             title: "STRING_VALUE", // required
 * //             subtitle: "STRING_VALUE",
 * //             imageUrl: "STRING_VALUE",
 * //             buttons: [ // ButtonsList
 * //               { // Button
 * //                 text: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       eventId: "STRING_VALUE",
 * //     },
 * //     AudioResponseEvent: { // AudioResponseEvent
 * //       audioChunk: new Uint8Array(),
 * //       contentType: "STRING_VALUE",
 * //       eventId: "STRING_VALUE",
 * //     },
 * //     HeartbeatEvent: { // HeartbeatEvent
 * //       eventId: "STRING_VALUE",
 * //     },
 * //     AccessDeniedException: { // AccessDeniedException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     ResourceNotFoundException: { // ResourceNotFoundException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     ValidationException: { // ValidationException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     ThrottlingException: { // ThrottlingException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     InternalServerException: { // InternalServerException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     ConflictException: { // ConflictException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     DependencyFailedException: { // DependencyFailedException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //     BadGatewayException: { // BadGatewayException
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartConversationCommandInput - {@link StartConversationCommandInput}
 * @returns {@link StartConversationCommandOutput}
 * @see {@link StartConversationCommandInput} for command's `input` shape.
 * @see {@link StartConversationCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for LexRuntimeV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p></p>
 *
 * @throws {@link InternalServerException} (server fault)
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
export class StartConversationCommand extends $Command
  .classBuilder<
    StartConversationCommandInput,
    StartConversationCommandOutput,
    LexRuntimeV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexRuntimeV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEventStreamPlugin(config),
    ];
  })
  .s("AWSDeepSenseRunTimeServiceApi2_0", "StartConversation", {
    /**
     * @internal
     */
    eventStream: {
      input: true,
      output: true,
    },
  })
  .n("LexRuntimeV2Client", "StartConversationCommand")
  .f(StartConversationRequestFilterSensitiveLog, StartConversationResponseFilterSensitiveLog)
  .ser(se_StartConversationCommand)
  .de(de_StartConversationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartConversationRequest;
      output: StartConversationResponse;
    };
    sdk: {
      input: StartConversationCommandInput;
      output: StartConversationCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { PutSessionRequest, PutSessionResponse } from "../models/models_0";
import { PutSession } from "../schemas/schemas_1_Session";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutSessionCommand}.
 */
export interface PutSessionCommandInput extends PutSessionRequest {}
/**
 * @public
 *
 * The output of {@link PutSessionCommand}.
 */
export interface PutSessionCommandOutput extends Omit<PutSessionResponse, "audioStream">, __MetadataBearer {
  audioStream?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Creates a new session or modifies an existing session with an Amazon Lex V2
 *          bot. Use this operation to enable your application to set the state of
 *          the bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, PutSessionCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, PutSessionCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * // import type { LexRuntimeV2ClientConfig } from "@aws-sdk/client-lex-runtime-v2";
 * const config = {}; // type is LexRuntimeV2ClientConfig
 * const client = new LexRuntimeV2Client(config);
 * const input = { // PutSessionRequest
 *   botId: "STRING_VALUE", // required
 *   botAliasId: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   messages: [ // Messages
 *     { // Message
 *       content: "STRING_VALUE",
 *       contentType: "CustomPayload" || "ImageResponseCard" || "PlainText" || "SSML", // required
 *       imageResponseCard: { // ImageResponseCard
 *         title: "STRING_VALUE", // required
 *         subtitle: "STRING_VALUE",
 *         imageUrl: "STRING_VALUE",
 *         buttons: [ // ButtonsList
 *           { // Button
 *             text: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
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
 *   responseContentType: "STRING_VALUE",
 * };
 * const command = new PutSessionCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.audioStream.transformToByteArray();
 * // const str = await response.audioStream.transformToString();
 * // response.audioStream.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // PutSessionResponse
 * //   contentType: "STRING_VALUE",
 * //   messages: "STRING_VALUE",
 * //   sessionState: "STRING_VALUE",
 * //   requestAttributes: "STRING_VALUE",
 * //   sessionId: "STRING_VALUE",
 * //   audioStream: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * // };
 *
 * ```
 *
 * @param PutSessionCommandInput - {@link PutSessionCommandInput}
 * @returns {@link PutSessionCommandOutput}
 * @see {@link PutSessionCommandInput} for command's `input` shape.
 * @see {@link PutSessionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class PutSessionCommand extends $Command
  .classBuilder<
    PutSessionCommandInput,
    PutSessionCommandOutput,
    LexRuntimeV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexRuntimeV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseRunTimeServiceApi2_0", "PutSession", {})
  .n("LexRuntimeV2Client", "PutSessionCommand")
  .sc(PutSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSessionRequest;
      output: PutSessionResponse;
    };
    sdk: {
      input: PutSessionCommandInput;
      output: PutSessionCommandOutput;
    };
  };
}

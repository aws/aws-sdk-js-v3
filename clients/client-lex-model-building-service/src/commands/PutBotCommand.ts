// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { PutBotRequest, PutBotResponse } from "../models/models_0";
import { de_PutBotCommand, se_PutBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutBotCommand}.
 */
export interface PutBotCommandInput extends PutBotRequest {}
/**
 * @public
 *
 * The output of {@link PutBotCommand}.
 */
export interface PutBotCommandOutput extends PutBotResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Lex conversational bot or replaces an existing bot.
 *       When you create or update a bot you are only required to specify a name, a
 *       locale, and whether the bot is directed toward children under age 13. You
 *       can use this to add intents later, or to remove intents from an existing
 *       bot. When you create a bot with the minimum information, the bot is
 *       created or updated but Amazon Lex returns the <code></code> response
 *         <code>FAILED</code>. You can build the bot after you add one or more
 *       intents. For more information about Amazon Lex bots, see <a>how-it-works</a>. </p>
 *          <p>If you specify the name of an existing bot, the fields in the
 *       request replace the existing values in the <code>$LATEST</code> version of
 *       the bot. Amazon Lex removes any fields that you don't provide values for in the
 *       request, except for the <code>idleTTLInSeconds</code> and
 *         <code>privacySettings</code> fields, which are set to their default
 *       values. If you don't specify values for required fields, Amazon Lex throws an
 *       exception.</p>
 *          <p>This operation requires permissions for the <code>lex:PutBot</code>
 *       action. For more information, see <a>security-iam</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutBotCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutBotCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // PutBotRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   intents: [ // IntentList
 *     { // Intent
 *       intentName: "STRING_VALUE", // required
 *       intentVersion: "STRING_VALUE", // required
 *     },
 *   ],
 *   enableModelImprovements: true || false,
 *   nluIntentConfidenceThreshold: Number("double"),
 *   clarificationPrompt: { // Prompt
 *     messages: [ // MessageList // required
 *       { // Message
 *         contentType: "PlainText" || "SSML" || "CustomPayload", // required
 *         content: "STRING_VALUE", // required
 *         groupNumber: Number("int"),
 *       },
 *     ],
 *     maxAttempts: Number("int"), // required
 *     responseCard: "STRING_VALUE",
 *   },
 *   abortStatement: { // Statement
 *     messages: [ // required
 *       {
 *         contentType: "PlainText" || "SSML" || "CustomPayload", // required
 *         content: "STRING_VALUE", // required
 *         groupNumber: Number("int"),
 *       },
 *     ],
 *     responseCard: "STRING_VALUE",
 *   },
 *   idleSessionTTLInSeconds: Number("int"),
 *   voiceId: "STRING_VALUE",
 *   checksum: "STRING_VALUE",
 *   processBehavior: "SAVE" || "BUILD",
 *   locale: "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR", // required
 *   childDirected: true || false, // required
 *   detectSentiment: true || false,
 *   createVersion: true || false,
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutBotCommand(input);
 * const response = await client.send(command);
 * // { // PutBotResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   intents: [ // IntentList
 * //     { // Intent
 * //       intentName: "STRING_VALUE", // required
 * //       intentVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   enableModelImprovements: true || false,
 * //   nluIntentConfidenceThreshold: Number("double"),
 * //   clarificationPrompt: { // Prompt
 * //     messages: [ // MessageList // required
 * //       { // Message
 * //         contentType: "PlainText" || "SSML" || "CustomPayload", // required
 * //         content: "STRING_VALUE", // required
 * //         groupNumber: Number("int"),
 * //       },
 * //     ],
 * //     maxAttempts: Number("int"), // required
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   abortStatement: { // Statement
 * //     messages: [ // required
 * //       {
 * //         contentType: "PlainText" || "SSML" || "CustomPayload", // required
 * //         content: "STRING_VALUE", // required
 * //         groupNumber: Number("int"),
 * //       },
 * //     ],
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   status: "BUILDING" || "READY" || "READY_BASIC_TESTING" || "FAILED" || "NOT_BUILT",
 * //   failureReason: "STRING_VALUE",
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   createdDate: new Date("TIMESTAMP"),
 * //   idleSessionTTLInSeconds: Number("int"),
 * //   voiceId: "STRING_VALUE",
 * //   checksum: "STRING_VALUE",
 * //   version: "STRING_VALUE",
 * //   locale: "de-DE" || "en-AU" || "en-GB" || "en-IN" || "en-US" || "es-419" || "es-ES" || "es-US" || "fr-FR" || "fr-CA" || "it-IT" || "ja-JP" || "ko-KR",
 * //   childDirected: true || false,
 * //   createVersion: true || false,
 * //   detectSentiment: true || false,
 * //   tags: [ // TagList
 * //     { // Tag
 * //       key: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutBotCommandInput - {@link PutBotCommandInput}
 * @returns {@link PutBotCommandOutput}
 * @see {@link PutBotCommandInput} for command's `input` shape.
 * @see {@link PutBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict processing the request. Try your request
 *       again. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p> The checksum of the resource that you are trying to change does
 *       not match the checksum in the request. Check the resource's checksum and
 *       try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 * @public
 * @example To create a bot
 * ```javascript
 * // This example shows how to create a bot for ordering pizzas.
 * const input = {
 *   "name": "DocOrderPizzaBot",
 *   "abortStatement": {
 *     "messages": [
 *       {
 *         "content": "I don't understand. Can you try again?",
 *         "contentType": "PlainText"
 *       },
 *       {
 *         "content": "I'm sorry, I don't understand.",
 *         "contentType": "PlainText"
 *       }
 *     ]
 *   },
 *   "childDirected": true,
 *   "clarificationPrompt": {
 *     "maxAttempts": 1,
 *     "messages": [
 *       {
 *         "content": "I'm sorry, I didn't hear that. Can you repeat what you just said?",
 *         "contentType": "PlainText"
 *       },
 *       {
 *         "content": "Can you say that again?",
 *         "contentType": "PlainText"
 *       }
 *     ]
 *   },
 *   "description": "Orders a pizza from a local pizzeria.",
 *   "idleSessionTTLInSeconds": 300,
 *   "intents": [
 *     {
 *       "intentName": "DocOrderPizza",
 *       "intentVersion": "$LATEST"
 *     }
 *   ],
 *   "locale": "en-US",
 *   "processBehavior": "SAVE"
 * };
 * const command = new PutBotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "version": "$LATEST",
 *   "name": "DocOrderPizzaBot",
 *   "abortStatement": {
 *     "messages": [
 *       {
 *         "content": "I don't understand. Can you try again?",
 *         "contentType": "PlainText"
 *       },
 *       {
 *         "content": "I'm sorry, I don't understand.",
 *         "contentType": "PlainText"
 *       }
 *     ]
 *   },
 *   "checksum": "20172ee3-fa06-49b2-bbc5-667c090303e9",
 *   "childDirected": true,
 *   "clarificationPrompt": {
 *     "maxAttempts": 1,
 *     "messages": [
 *       {
 *         "content": "I'm sorry, I didn't hear that. Can you repeate what you just said?",
 *         "contentType": "PlainText"
 *       },
 *       {
 *         "content": "Can you say that again?",
 *         "contentType": "PlainText"
 *       }
 *     ]
 *   },
 *   "createdDate": 1494360160.133,
 *   "description": "Orders a pizza from a local pizzeria.",
 *   "idleSessionTTLInSeconds": 300,
 *   "intents": [
 *     {
 *       "intentName": "DocOrderPizza",
 *       "intentVersion": "$LATEST"
 *     }
 *   ],
 *   "lastUpdatedDate": 1494360160.133,
 *   "locale": "en-US",
 *   "status": "NOT_BUILT"
 * }
 * *\/
 * // example id: to-create-a-bot-1494360003886
 * ```
 *
 */
export class PutBotCommand extends $Command
  .classBuilder<
    PutBotCommandInput,
    PutBotCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseModelBuildingService", "PutBot", {})
  .n("LexModelBuildingServiceClient", "PutBotCommand")
  .f(void 0, void 0)
  .ser(se_PutBotCommand)
  .de(de_PutBotCommand)
  .build() {}

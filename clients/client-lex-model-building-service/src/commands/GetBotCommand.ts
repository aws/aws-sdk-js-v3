// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetBotRequest, GetBotResponse } from "../models/models_0";
import { GetBot } from "../schemas/schemas_6_Intent";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBotCommand}.
 */
export interface GetBotCommandInput extends GetBotRequest {}
/**
 * @public
 *
 * The output of {@link GetBotCommand}.
 */
export interface GetBotCommandOutput extends GetBotResponse, __MetadataBearer {}

/**
 * <p>Returns metadata information for a specific bot. You must provide
 *       the bot name and the bot version or alias. </p>
 *          <p> This operation requires permissions for the
 *         <code>lex:GetBot</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBotRequest
 *   name: "STRING_VALUE", // required
 *   versionOrAlias: "STRING_VALUE", // required
 * };
 * const command = new GetBotCommand(input);
 * const response = await client.send(command);
 * // { // GetBotResponse
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
 * //   detectSentiment: true || false,
 * // };
 *
 * ```
 *
 * @param GetBotCommandInput - {@link GetBotCommandInput}
 * @returns {@link GetBotCommandOutput}
 * @see {@link GetBotCommandInput} for command's `input` shape.
 * @see {@link GetBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 *
 * @example To get information about a bot
 * ```javascript
 * // This example shows how to get configuration information for a bot.
 * const input = {
 *   name: "DocOrderPizza",
 *   versionOrAlias: "$LATEST"
 * };
 * const command = new GetBotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   abortStatement: {
 *     messages: [
 *       {
 *         content: "I don't understand. Can you try again?",
 *         contentType: "PlainText"
 *       },
 *       {
 *         content: "I'm sorry, I don't understand.",
 *         contentType: "PlainText"
 *       }
 *     ]
 *   },
 *   checksum: "20172ee3-fa06-49b2-bbc5-667c090303e9",
 *   childDirected: true,
 *   clarificationPrompt: {
 *     maxAttempts: 1,
 *     messages: [
 *       {
 *         content: "I'm sorry, I didn't hear that. Can you repeate what you just said?",
 *         contentType: "PlainText"
 *       },
 *       {
 *         content: "Can you say that again?",
 *         contentType: "PlainText"
 *       }
 *     ]
 *   },
 *   createdDate: 1.494360160133E9,
 *   description: "Orders a pizza from a local pizzeria.",
 *   idleSessionTTLInSeconds: 300,
 *   intents: [
 *     {
 *       intentName: "DocOrderPizza",
 *       intentVersion: "$LATEST"
 *     }
 *   ],
 *   lastUpdatedDate: 1.494360160133E9,
 *   locale: "en-US",
 *   name: "DocOrderPizzaBot",
 *   status: "NOT_BUILT",
 *   version: "$LATEST"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBotCommand extends $Command
  .classBuilder<
    GetBotCommandInput,
    GetBotCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "GetBot", {})
  .n("LexModelBuildingServiceClient", "GetBotCommand")
  .sc(GetBot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBotRequest;
      output: GetBotResponse;
    };
    sdk: {
      input: GetBotCommandInput;
      output: GetBotCommandOutput;
    };
  };
}

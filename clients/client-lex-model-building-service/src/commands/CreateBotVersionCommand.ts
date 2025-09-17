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
import { CreateBotVersionRequest, CreateBotVersionResponse } from "../models/models_0";
import { de_CreateBotVersionCommand, se_CreateBotVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBotVersionCommand}.
 */
export interface CreateBotVersionCommandInput extends CreateBotVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateBotVersionCommand}.
 */
export interface CreateBotVersionCommandOutput extends CreateBotVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of the bot based on the <code>$LATEST</code>
 *       version. If the <code>$LATEST</code> version of this resource hasn't
 *       changed since you created the last version, Amazon Lex doesn't create a new
 *       version. It returns the last created version.</p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of the bot.
 *         You can't update the numbered versions that you create with the
 *           <code>CreateBotVersion</code> operation.</p>
 *          </note>
 *          <p> When you create the first version of a bot, Amazon Lex sets the version
 *       to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *          <p> This operation requires permission for the
 *         <code>lex:CreateBotVersion</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateBotVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, CreateBotVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // CreateBotVersionRequest
 *   name: "STRING_VALUE", // required
 *   checksum: "STRING_VALUE",
 * };
 * const command = new CreateBotVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateBotVersionResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   intents: [ // IntentList
 * //     { // Intent
 * //       intentName: "STRING_VALUE", // required
 * //       intentVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
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
 * //   enableModelImprovements: true || false,
 * //   detectSentiment: true || false,
 * // };
 *
 * ```
 *
 * @param CreateBotVersionCommandInput - {@link CreateBotVersionCommandInput}
 * @returns {@link CreateBotVersionCommandOutput}
 * @see {@link CreateBotVersionCommandInput} for command's `input` shape.
 * @see {@link CreateBotVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p> The checksum of the resource that you are trying to change does
 *       not match the checksum in the request. Check the resource's checksum and
 *       try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 *
 * @public
 */
export class CreateBotVersionCommand extends $Command
  .classBuilder<
    CreateBotVersionCommandInput,
    CreateBotVersionCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseModelBuildingService", "CreateBotVersion", {})
  .n("LexModelBuildingServiceClient", "CreateBotVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateBotVersionCommand)
  .de(de_CreateBotVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBotVersionRequest;
      output: CreateBotVersionResponse;
    };
    sdk: {
      input: CreateBotVersionCommandInput;
      output: CreateBotVersionCommandOutput;
    };
  };
}

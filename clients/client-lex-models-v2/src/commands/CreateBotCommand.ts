// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateBotRequest, CreateBotResponse } from "../models/models_0";
import { de_CreateBotCommand, se_CreateBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBotCommand}.
 */
export interface CreateBotCommandInput extends CreateBotRequest {}
/**
 * @public
 *
 * The output of {@link CreateBotCommand}.
 */
export interface CreateBotCommandOutput extends CreateBotResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Lex conversational bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateBotRequest
 *   botName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   dataPrivacy: { // DataPrivacy
 *     childDirected: true || false, // required
 *   },
 *   idleSessionTTLInSeconds: Number("int"), // required
 *   botTags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   testBotAliasTags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   botType: "Bot" || "BotNetwork",
 *   botMembers: [ // BotMembers
 *     { // BotMember
 *       botMemberId: "STRING_VALUE", // required
 *       botMemberName: "STRING_VALUE", // required
 *       botMemberAliasId: "STRING_VALUE", // required
 *       botMemberAliasName: "STRING_VALUE", // required
 *       botMemberVersion: "STRING_VALUE", // required
 *     },
 *   ],
 *   errorLogSettings: { // ErrorLogSettings
 *     enabled: true || false, // required
 *   },
 * };
 * const command = new CreateBotCommand(input);
 * const response = await client.send(command);
 * // { // CreateBotResponse
 * //   botId: "STRING_VALUE",
 * //   botName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   dataPrivacy: { // DataPrivacy
 * //     childDirected: true || false, // required
 * //   },
 * //   idleSessionTTLInSeconds: Number("int"),
 * //   botStatus: "Creating" || "Available" || "Inactive" || "Deleting" || "Failed" || "Versioning" || "Importing" || "Updating",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   botTags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   testBotAliasTags: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   botType: "Bot" || "BotNetwork",
 * //   botMembers: [ // BotMembers
 * //     { // BotMember
 * //       botMemberId: "STRING_VALUE", // required
 * //       botMemberName: "STRING_VALUE", // required
 * //       botMemberAliasId: "STRING_VALUE", // required
 * //       botMemberAliasName: "STRING_VALUE", // required
 * //       botMemberVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   errorLogSettings: { // ErrorLogSettings
 * //     enabled: true || false, // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateBotCommandInput - {@link CreateBotCommandInput}
 * @returns {@link CreateBotCommandOutput}
 * @see {@link CreateBotCommandInput} for command's `input` shape.
 * @see {@link CreateBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
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
export class CreateBotCommand extends $Command
  .classBuilder<
    CreateBotCommandInput,
    CreateBotCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "CreateBot", {})
  .n("LexModelsV2Client", "CreateBotCommand")
  .f(void 0, void 0)
  .ser(se_CreateBotCommand)
  .de(de_CreateBotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBotRequest;
      output: CreateBotResponse;
    };
    sdk: {
      input: CreateBotCommandInput;
      output: CreateBotCommandOutput;
    };
  };
}

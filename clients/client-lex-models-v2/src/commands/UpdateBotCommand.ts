// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { UpdateBotRequest, UpdateBotResponse } from "../models/models_1";
import { UpdateBot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBotCommand}.
 */
export interface UpdateBotCommandInput extends UpdateBotRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBotCommand}.
 */
export interface UpdateBotCommandOutput extends UpdateBotResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing bot. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // UpdateBotRequest
 *   botId: "STRING_VALUE", // required
 *   botName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   dataPrivacy: { // DataPrivacy
 *     childDirected: true || false, // required
 *   },
 *   idleSessionTTLInSeconds: Number("int"), // required
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
 * const command = new UpdateBotCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBotResponse
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
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
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
 * @param UpdateBotCommandInput - {@link UpdateBotCommandInput}
 * @returns {@link UpdateBotCommandOutput}
 * @see {@link UpdateBotCommandInput} for command's `input` shape.
 * @see {@link UpdateBotCommandOutput} for command's `response` shape.
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
export class UpdateBotCommand extends $Command
  .classBuilder<
    UpdateBotCommandInput,
    UpdateBotCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "UpdateBot", {})
  .n("LexModelsV2Client", "UpdateBotCommand")
  .sc(UpdateBot$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBotRequest;
      output: UpdateBotResponse;
    };
    sdk: {
      input: UpdateBotCommandInput;
      output: UpdateBotCommandOutput;
    };
  };
}

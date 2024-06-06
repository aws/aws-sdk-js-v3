// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
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
 * <p>Creates an immutable version of the bot. When you create the first
 *          version of a bot, Amazon Lex sets the version number to 1. Subsequent bot versions increase
 *          in an increment of 1. The version number will always represent the total number
 *          of versions created of the bot, not the current number of versions. If a bot version
 *          is deleted, that bot version number will not be reused.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotVersionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotVersionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateBotVersionRequest
 *   botId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   botVersionLocaleSpecification: { // BotVersionLocaleSpecification // required
 *     "<keys>": { // BotVersionLocaleDetails
 *       sourceBotVersion: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateBotVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateBotVersionResponse
 * //   botId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   botVersionLocaleSpecification: { // BotVersionLocaleSpecification
 * //     "<keys>": { // BotVersionLocaleDetails
 * //       sourceBotVersion: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   botStatus: "Creating" || "Available" || "Inactive" || "Deleting" || "Failed" || "Versioning" || "Importing" || "Updating",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateBotVersionCommandInput - {@link CreateBotVersionCommandInput}
 * @returns {@link CreateBotVersionCommandOutput}
 * @see {@link CreateBotVersionCommandInput} for command's `input` shape.
 * @see {@link CreateBotVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateBotVersionCommand extends $Command
  .classBuilder<
    CreateBotVersionCommandInput,
    CreateBotVersionCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "CreateBotVersion", {})
  .n("LexModelsV2Client", "CreateBotVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateBotVersionCommand)
  .de(de_CreateBotVersionCommand)
  .build() {}

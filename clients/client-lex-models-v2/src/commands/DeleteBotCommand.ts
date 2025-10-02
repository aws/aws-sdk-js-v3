// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteBotRequest, DeleteBotResponse } from "../models/models_0";
import { de_DeleteBotCommand, se_DeleteBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBotCommand}.
 */
export interface DeleteBotCommandInput extends DeleteBotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBotCommand}.
 */
export interface DeleteBotCommandOutput extends DeleteBotResponse, __MetadataBearer {}

/**
 * <p>Deletes all versions of a bot, including the <code>Draft</code>
 *          version. To delete a specific version, use the
 *             <code>DeleteBotVersion</code> operation.</p>
 *          <p>When you delete a bot, all of the resources contained in the bot are
 *          also deleted. Deleting a bot removes all locales, intents, slot, and
 *          slot types defined for the bot.</p>
 *          <p>If a bot has an alias, the <code>DeleteBot</code> operation returns
 *          a <code>ResourceInUseException</code> exception. If you want to delete
 *          the bot and the alias, set the <code>skipResourceInUseCheck</code>
 *          parameter to <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteBotRequest
 *   botId: "STRING_VALUE", // required
 *   skipResourceInUseCheck: true || false,
 * };
 * const command = new DeleteBotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBotResponse
 * //   botId: "STRING_VALUE",
 * //   botStatus: "Creating" || "Available" || "Inactive" || "Deleting" || "Failed" || "Versioning" || "Importing" || "Updating",
 * // };
 *
 * ```
 *
 * @param DeleteBotCommandInput - {@link DeleteBotCommandInput}
 * @returns {@link DeleteBotCommandOutput}
 * @see {@link DeleteBotCommandInput} for command's `input` shape.
 * @see {@link DeleteBotCommandOutput} for command's `response` shape.
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
export class DeleteBotCommand extends $Command
  .classBuilder<
    DeleteBotCommandInput,
    DeleteBotCommandOutput,
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
  .s("LexModelBuildingServiceV2", "DeleteBot", {})
  .n("LexModelsV2Client", "DeleteBotCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBotCommand)
  .de(de_DeleteBotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBotRequest;
      output: DeleteBotResponse;
    };
    sdk: {
      input: DeleteBotCommandInput;
      output: DeleteBotCommandOutput;
    };
  };
}

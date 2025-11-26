// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { DeleteBotLocaleRequest, DeleteBotLocaleResponse } from "../models/models_0";
import { DeleteBotLocale } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBotLocaleCommand}.
 */
export interface DeleteBotLocaleCommandInput extends DeleteBotLocaleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBotLocaleCommand}.
 */
export interface DeleteBotLocaleCommandOutput extends DeleteBotLocaleResponse, __MetadataBearer {}

/**
 * <p>Removes a locale from a bot.</p>
 *          <p>When you delete a locale, all intents, slots, and slot types defined
 *          for the locale are also deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotLocaleCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotLocaleCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteBotLocaleRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBotLocaleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBotLocaleResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botLocaleStatus: "Creating" || "Building" || "Built" || "ReadyExpressTesting" || "Failed" || "Deleting" || "NotBuilt" || "Importing" || "Processing",
 * // };
 *
 * ```
 *
 * @param DeleteBotLocaleCommandInput - {@link DeleteBotLocaleCommandInput}
 * @returns {@link DeleteBotLocaleCommandOutput}
 * @see {@link DeleteBotLocaleCommandInput} for command's `input` shape.
 * @see {@link DeleteBotLocaleCommandOutput} for command's `response` shape.
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
export class DeleteBotLocaleCommand extends $Command
  .classBuilder<
    DeleteBotLocaleCommandInput,
    DeleteBotLocaleCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DeleteBotLocale", {})
  .n("LexModelsV2Client", "DeleteBotLocaleCommand")
  .sc(DeleteBotLocale)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBotLocaleRequest;
      output: DeleteBotLocaleResponse;
    };
    sdk: {
      input: DeleteBotLocaleCommandInput;
      output: DeleteBotLocaleCommandOutput;
    };
  };
}

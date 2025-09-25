// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { StartBotResourceGenerationRequest, StartBotResourceGenerationResponse } from "../models/models_1";
import { StartBotResourceGeneration } from "../schemas/schemas_20_BotResource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartBotResourceGenerationCommand}.
 */
export interface StartBotResourceGenerationCommandInput extends StartBotResourceGenerationRequest {}
/**
 * @public
 *
 * The output of {@link StartBotResourceGenerationCommand}.
 */
export interface StartBotResourceGenerationCommandOutput extends StartBotResourceGenerationResponse, __MetadataBearer {}

/**
 * <p>Starts a request for the descriptive bot builder to generate a bot locale configuration
 *          based on the prompt you provide it. After you make this call, use the <code>DescribeBotResourceGeneration</code>
 *          operation to check on the status of the generation and for the <code>generatedBotLocaleUrl</code> when the
 *          generation is complete. Use that value to retrieve the Amazon S3 object containing the bot locale configuration. You can
 *          then modify and import this configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, StartBotResourceGenerationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, StartBotResourceGenerationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // StartBotResourceGenerationRequest
 *   generationInputPrompt: "STRING_VALUE", // required
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 * };
 * const command = new StartBotResourceGenerationCommand(input);
 * const response = await client.send(command);
 * // { // StartBotResourceGenerationResponse
 * //   generationInputPrompt: "STRING_VALUE",
 * //   generationId: "STRING_VALUE",
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   generationStatus: "Failed" || "Complete" || "InProgress",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartBotResourceGenerationCommandInput - {@link StartBotResourceGenerationCommandInput}
 * @returns {@link StartBotResourceGenerationCommandOutput}
 * @see {@link StartBotResourceGenerationCommandInput} for command's `input` shape.
 * @see {@link StartBotResourceGenerationCommandOutput} for command's `response` shape.
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
export class StartBotResourceGenerationCommand extends $Command
  .classBuilder<
    StartBotResourceGenerationCommandInput,
    StartBotResourceGenerationCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "StartBotResourceGeneration", {})
  .n("LexModelsV2Client", "StartBotResourceGenerationCommand")
  .sc(StartBotResourceGeneration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBotResourceGenerationRequest;
      output: StartBotResourceGenerationResponse;
    };
    sdk: {
      input: StartBotResourceGenerationCommandInput;
      output: StartBotResourceGenerationCommandOutput;
    };
  };
}

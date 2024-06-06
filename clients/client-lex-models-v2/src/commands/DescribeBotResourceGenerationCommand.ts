// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeBotResourceGenerationRequest, DescribeBotResourceGenerationResponse } from "../models/models_1";
import {
  de_DescribeBotResourceGenerationCommand,
  se_DescribeBotResourceGenerationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBotResourceGenerationCommand}.
 */
export interface DescribeBotResourceGenerationCommandInput extends DescribeBotResourceGenerationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBotResourceGenerationCommand}.
 */
export interface DescribeBotResourceGenerationCommandOutput
  extends DescribeBotResourceGenerationResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a request to generate a bot through natural language description, made through
 *       the <code>StartBotResource</code> API. Use the <code>generatedBotLocaleUrl</code>
 *       to retrieve the Amazon S3 object containing the bot locale configuration. You can
 *       then modify and import this configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotResourceGenerationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotResourceGenerationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeBotResourceGenerationRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   generationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBotResourceGenerationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBotResourceGenerationResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   generationId: "STRING_VALUE",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   generationStatus: "Failed" || "Complete" || "InProgress",
 * //   generationInputPrompt: "STRING_VALUE",
 * //   generatedBotLocaleUrl: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   modelArn: "STRING_VALUE",
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeBotResourceGenerationCommandInput - {@link DescribeBotResourceGenerationCommandInput}
 * @returns {@link DescribeBotResourceGenerationCommandOutput}
 * @see {@link DescribeBotResourceGenerationCommandInput} for command's `input` shape.
 * @see {@link DescribeBotResourceGenerationCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
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
export class DescribeBotResourceGenerationCommand extends $Command
  .classBuilder<
    DescribeBotResourceGenerationCommandInput,
    DescribeBotResourceGenerationCommandOutput,
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
  .s("LexModelBuildingServiceV2", "DescribeBotResourceGeneration", {})
  .n("LexModelsV2Client", "DescribeBotResourceGenerationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBotResourceGenerationCommand)
  .de(de_DescribeBotResourceGenerationCommand)
  .build() {}

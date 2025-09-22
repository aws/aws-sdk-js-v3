// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteUtterancesRequest, DeleteUtterancesResponse } from "../models/models_0";
import { DeleteUtterances } from "../schemas/schemas_30_DeleteUtterances";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUtterancesCommand}.
 */
export interface DeleteUtterancesCommandInput extends DeleteUtterancesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUtterancesCommand}.
 */
export interface DeleteUtterancesCommandOutput extends DeleteUtterancesResponse, __MetadataBearer {}

/**
 * <p>Deletes stored utterances.</p>
 *          <p>Amazon Lex stores the utterances that users send to your bot. Utterances
 *          are stored for 15 days for use with the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html">ListAggregatedUtterances</a> operation, and
 *          then stored indefinitely for use in improving the ability of your bot
 *          to respond to user input..</p>
 *          <p>Use the <code>DeleteUtterances</code> operation to manually delete
 *          utterances for a specific session. When you use the
 *             <code>DeleteUtterances</code> operation, utterances stored for
 *          improving your bot's ability to respond to user input are deleted
 *          immediately. Utterances stored for use with the
 *             <code>ListAggregatedUtterances</code> operation are deleted after 15
 *          days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteUtterancesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteUtterancesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteUtterancesRequest
 *   botId: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE",
 *   sessionId: "STRING_VALUE",
 * };
 * const command = new DeleteUtterancesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUtterancesCommandInput - {@link DeleteUtterancesCommandInput}
 * @returns {@link DeleteUtterancesCommandOutput}
 * @see {@link DeleteUtterancesCommandInput} for command's `input` shape.
 * @see {@link DeleteUtterancesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
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
export class DeleteUtterancesCommand extends $Command
  .classBuilder<
    DeleteUtterancesCommandInput,
    DeleteUtterancesCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DeleteUtterances", {})
  .n("LexModelsV2Client", "DeleteUtterancesCommand")
  .sc(DeleteUtterances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUtterancesRequest;
      output: {};
    };
    sdk: {
      input: DeleteUtterancesCommandInput;
      output: DeleteUtterancesCommandOutput;
    };
  };
}

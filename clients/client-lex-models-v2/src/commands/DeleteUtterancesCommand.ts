// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteUtterancesRequest, DeleteUtterancesResponse } from "../models/models_0";
import { DeleteUtterances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes stored utterances.
 *
 * Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the [ListAggregatedUtterances](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html) operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input..
 *
 * Use the `DeleteUtterances` operation to manually delete utterances for a specific session. When you use the `DeleteUtterances` operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the `ListAggregatedUtterances` operation are deleted after 15 days.
 *
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
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request rate is too high. Reduce the frequency of requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the input parameters in your request isn't valid. Check the parameters and try your request again.
 *
 * @throws {@link LexModelsV2ServiceException}
 *
 * Base exception class for all service exceptions from LexModelsV2 service.
 *
 * @public
 */
export class DeleteUtterancesCommand extends command<DeleteUtterancesCommandInput, DeleteUtterancesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUtterances",
  DeleteUtterances$
) {
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

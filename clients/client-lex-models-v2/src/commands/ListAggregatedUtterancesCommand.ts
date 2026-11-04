// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAggregatedUtterancesRequest, ListAggregatedUtterancesResponse } from "../models/models_1";
import { ListAggregatedUtterances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAggregatedUtterancesCommand}.
 */
export interface ListAggregatedUtterancesCommandInput extends ListAggregatedUtterancesRequest {}
/**
 * @public
 *
 * The output of {@link ListAggregatedUtterancesCommand}.
 */
export interface ListAggregatedUtterancesCommandOutput extends ListAggregatedUtterancesResponse, __MetadataBearer {}

/**
 * Provides a list of utterances that users have sent to the bot.
 *
 * Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response.
 *
 * You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn't activate an intent.
 *
 * Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time.
 *
 * Utterances statistics are not generated under the following conditions:
 *
 * - The `childDirected` field was set to true when the bot was created.
 * - You are using slot obfuscation with one or more slots.
 * - You opted out of participating in improving Amazon Lex.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListAggregatedUtterancesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListAggregatedUtterancesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListAggregatedUtterancesRequest
 *   botId: "STRING_VALUE", // required
 *   botAliasId: "STRING_VALUE",
 *   botVersion: "STRING_VALUE",
 *   localeId: "STRING_VALUE", // required
 *   aggregationDuration: { // UtteranceAggregationDuration
 *     relativeAggregationDuration: { // RelativeAggregationDuration
 *       timeDimension: "Hours" || "Days" || "Weeks", // required
 *       timeValue: Number("int"), // required
 *     },
 *   },
 *   sortBy: { // AggregatedUtterancesSortBy
 *     attribute: "HitCount" || "MissedCount", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // AggregatedUtterancesFilters
 *     { // AggregatedUtterancesFilter
 *       name: "Utterance", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "CO" || "EQ", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAggregatedUtterancesCommand(input);
 * const response = await client.send(command);
 * // { // ListAggregatedUtterancesResponse
 * //   botId: "STRING_VALUE",
 * //   botAliasId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   aggregationDuration: { // UtteranceAggregationDuration
 * //     relativeAggregationDuration: { // RelativeAggregationDuration
 * //       timeDimension: "Hours" || "Days" || "Weeks", // required
 * //       timeValue: Number("int"), // required
 * //     },
 * //   },
 * //   aggregationWindowStartTime: new Date("TIMESTAMP"),
 * //   aggregationWindowEndTime: new Date("TIMESTAMP"),
 * //   aggregationLastRefreshedDateTime: new Date("TIMESTAMP"),
 * //   aggregatedUtterancesSummaries: [ // AggregatedUtterancesSummaryList
 * //     { // AggregatedUtterancesSummary
 * //       utterance: "STRING_VALUE",
 * //       hitCount: Number("int"),
 * //       missedCount: Number("int"),
 * //       utteranceFirstRecordedInAggregationDuration: new Date("TIMESTAMP"),
 * //       utteranceLastRecordedInAggregationDuration: new Date("TIMESTAMP"),
 * //       containsDataFromDeletedResources: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAggregatedUtterancesCommandInput - {@link ListAggregatedUtterancesCommandInput}
 * @returns {@link ListAggregatedUtterancesCommandOutput}
 * @see {@link ListAggregatedUtterancesCommandInput} for command's `input` shape.
 * @see {@link ListAggregatedUtterancesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * Your request couldn't be completed because one or more request fields aren't valid. Check the fields in your request and try again.
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
export class ListAggregatedUtterancesCommand extends command<ListAggregatedUtterancesCommandInput, ListAggregatedUtterancesCommandOutput>(
  _ep0,
  _mw0,
  "ListAggregatedUtterances",
  ListAggregatedUtterances$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAggregatedUtterancesRequest;
      output: ListAggregatedUtterancesResponse;
    };
    sdk: {
      input: ListAggregatedUtterancesCommandInput;
      output: ListAggregatedUtterancesCommandOutput;
    };
  };
}

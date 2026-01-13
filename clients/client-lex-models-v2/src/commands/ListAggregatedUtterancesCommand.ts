// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import type { ListAggregatedUtterancesRequest, ListAggregatedUtterancesResponse } from "../models/models_1";
import { ListAggregatedUtterances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Provides a list of utterances that users have sent to the
 *          bot.</p>
 *          <p>Utterances are aggregated by the text of the utterance. For example,
 *          all instances where customers used the phrase "I want to order pizza"
 *          are aggregated into the same line in the response.</p>
 *          <p>You can see both detected utterances and missed utterances. A
 *          detected utterance is where the bot properly recognized the utterance
 *          and activated the associated intent. A missed utterance was not
 *          recognized by the bot and didn't activate an intent.</p>
 *          <p>Utterances can be aggregated for a bot alias or for a bot version,
 *          but not both at the same time.</p>
 *          <p>Utterances statistics are not generated under the following
 *          conditions:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>childDirected</code> field was set to true when the
 *                bot was created.</p>
 *             </li>
 *             <li>
 *                <p>You are using slot obfuscation with one or more slots.</p>
 *             </li>
 *             <li>
 *                <p>You opted out of participating in improving Amazon Lex.</p>
 *             </li>
 *          </ul>
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
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
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
export class ListAggregatedUtterancesCommand extends $Command
  .classBuilder<
    ListAggregatedUtterancesCommandInput,
    ListAggregatedUtterancesCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "ListAggregatedUtterances", {})
  .n("LexModelsV2Client", "ListAggregatedUtterancesCommand")
  .sc(ListAggregatedUtterances$)
  .build() {
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

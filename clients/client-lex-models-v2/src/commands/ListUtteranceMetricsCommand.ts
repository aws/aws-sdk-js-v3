// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUtteranceMetricsRequest, ListUtteranceMetricsResponse } from "../models/models_1";
import { ListUtteranceMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListUtteranceMetricsCommand}.
 */
export interface ListUtteranceMetricsCommandInput extends ListUtteranceMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListUtteranceMetricsCommand}.
 */
export interface ListUtteranceMetricsCommandOutput extends ListUtteranceMetricsResponse, __MetadataBearer {}

/**
 * > **Note:** To use this API operation, your IAM role must have permissions to perform the [ListAggregatedUtterances](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html) operation, which provides access to utterance-related analytics. See [Viewing utterance statistics](https://docs.aws.amazon.com/lexv2/latest/dg/monitoring-utterances.html) for the IAM policy to apply to the IAM role.
 *
 * Retrieves summary metrics for the utterances in your bot. The following fields are required:
 *
 * - `metrics` – A list of [AnalyticsUtteranceMetric](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_AnalyticsUtteranceMetric.html) objects. In each object, use the `name` field to specify the metric to calculate, the `statistic` field to specify whether to calculate the `Sum`, `Average`, or `Max` number, and the `order` field to specify whether to sort the results in `Ascending` or `Descending` order.
 * - `startDateTime` and `endDateTime` – Define a time range for which you want to retrieve results.
 *
 * Of the optional fields, you can organize the results in the following ways:
 *
 * - Use the `filters` field to filter the results, the `groupBy` field to specify categories by which to group the results, and the `binBy` field to specify time intervals by which to group the results.
 * - Use the `maxResults` field to limit the number of results to return in a single response and the `nextToken` field to return the next batch of results if the response does not return the full set of results.
 *
 * Note that an `order` field exists in both `binBy` and `metrics`. Currently, you can specify it in either field, but not in both.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListUtteranceMetricsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListUtteranceMetricsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListUtteranceMetricsRequest
 *   botId: "STRING_VALUE", // required
 *   startDateTime: new Date("TIMESTAMP"), // required
 *   endDateTime: new Date("TIMESTAMP"), // required
 *   metrics: [ // AnalyticsUtteranceMetrics // required
 *     { // AnalyticsUtteranceMetric
 *       name: "Count" || "Missed" || "Detected" || "UtteranceTimestamp", // required
 *       statistic: "Sum" || "Avg" || "Max", // required
 *       order: "Ascending" || "Descending",
 *     },
 *   ],
 *   binBy: [ // AnalyticsBinByList
 *     { // AnalyticsBinBySpecification
 *       name: "ConversationStartTime" || "UtteranceTimestamp", // required
 *       interval: "OneHour" || "OneDay", // required
 *       order: "Ascending" || "Descending",
 *     },
 *   ],
 *   groupBy: [ // AnalyticsUtteranceGroupByList
 *     { // AnalyticsUtteranceGroupBySpecification
 *       name: "UtteranceText" || "UtteranceState", // required
 *     },
 *   ],
 *   attributes: [ // AnalyticsUtteranceAttributes
 *     { // AnalyticsUtteranceAttribute
 *       name: "LastUsedIntent", // required
 *     },
 *   ],
 *   filters: [ // AnalyticsUtteranceFilters
 *     { // AnalyticsUtteranceFilter
 *       name: "BotAliasId" || "BotVersion" || "LocaleId" || "Modality" || "Channel" || "SessionId" || "OriginatingRequestId" || "UtteranceState" || "UtteranceText", // required
 *       operator: "EQ" || "GT" || "LT", // required
 *       values: [ // AnalyticsFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListUtteranceMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListUtteranceMetricsResponse
 * //   botId: "STRING_VALUE",
 * //   results: [ // AnalyticsUtteranceResults
 * //     { // AnalyticsUtteranceResult
 * //       binKeys: [ // AnalyticsBinKeys
 * //         { // AnalyticsBinKey
 * //           name: "ConversationStartTime" || "UtteranceTimestamp",
 * //           value: Number("long"),
 * //         },
 * //       ],
 * //       groupByKeys: [ // AnalyticsUtteranceGroupByKeys
 * //         { // AnalyticsUtteranceGroupByKey
 * //           name: "UtteranceText" || "UtteranceState",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       metricsResults: [ // AnalyticsUtteranceMetricResults
 * //         { // AnalyticsUtteranceMetricResult
 * //           name: "Count" || "Missed" || "Detected" || "UtteranceTimestamp",
 * //           statistic: "Sum" || "Avg" || "Max",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //       attributeResults: [ // AnalyticsUtteranceAttributeResults
 * //         { // AnalyticsUtteranceAttributeResult
 * //           lastUsedIntent: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUtteranceMetricsCommandInput - {@link ListUtteranceMetricsCommandInput}
 * @returns {@link ListUtteranceMetricsCommandOutput}
 * @see {@link ListUtteranceMetricsCommandInput} for command's `input` shape.
 * @see {@link ListUtteranceMetricsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have reached a quota for your bot.
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
export class ListUtteranceMetricsCommand extends command<ListUtteranceMetricsCommandInput, ListUtteranceMetricsCommandOutput>(
  _ep0,
  _mw0,
  "ListUtteranceMetrics",
  ListUtteranceMetrics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUtteranceMetricsRequest;
      output: ListUtteranceMetricsResponse;
    };
    sdk: {
      input: ListUtteranceMetricsCommandInput;
      output: ListUtteranceMetricsCommandOutput;
    };
  };
}

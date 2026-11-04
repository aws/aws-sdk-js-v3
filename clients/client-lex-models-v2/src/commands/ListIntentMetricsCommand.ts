// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIntentMetricsRequest, ListIntentMetricsResponse } from "../models/models_1";
import { ListIntentMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIntentMetricsCommand}.
 */
export interface ListIntentMetricsCommandInput extends ListIntentMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListIntentMetricsCommand}.
 */
export interface ListIntentMetricsCommandOutput extends ListIntentMetricsResponse, __MetadataBearer {}

/**
 * Retrieves summary metrics for the intents in your bot. The following fields are required:
 *
 * - `metrics` – A list of [AnalyticsIntentMetric](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_AnalyticsIntentMetric.html) objects. In each object, use the `name` field to specify the metric to calculate, the `statistic` field to specify whether to calculate the `Sum`, `Average`, or `Max` number, and the `order` field to specify whether to sort the results in `Ascending` or `Descending` order.
 * - `startDateTime` and `endDateTime` – Define a time range for which you want to retrieve results.
 *
 * Of the optional fields, you can organize the results in the following ways:
 *
 * - Use the `filters` field to filter the results, the `groupBy` field to specify categories by which to group the results, and the `binBy` field to specify time intervals by which to group the results.
 * - Use the `maxResults` field to limit the number of results to return in a single response and the `nextToken` field to return the next batch of results if the response does not return the full set of results.
 *
 * Note that an `order` field exists in both `binBy` and `metrics`. You can specify only one `order` in a given request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListIntentMetricsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListIntentMetricsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListIntentMetricsRequest
 *   botId: "STRING_VALUE", // required
 *   startDateTime: new Date("TIMESTAMP"), // required
 *   endDateTime: new Date("TIMESTAMP"), // required
 *   metrics: [ // AnalyticsIntentMetrics // required
 *     { // AnalyticsIntentMetric
 *       name: "Count" || "Success" || "Failure" || "Switched" || "Dropped", // required
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
 *   groupBy: [ // AnalyticsIntentGroupByList
 *     { // AnalyticsIntentGroupBySpecification
 *       name: "IntentName" || "IntentEndState" || "IntentLevel", // required
 *     },
 *   ],
 *   filters: [ // AnalyticsIntentFilters
 *     { // AnalyticsIntentFilter
 *       name: "BotAliasId" || "BotVersion" || "LocaleId" || "Modality" || "Channel" || "SessionId" || "OriginatingRequestId" || "IntentName" || "IntentEndState", // required
 *       operator: "EQ" || "GT" || "LT", // required
 *       values: [ // AnalyticsFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIntentMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListIntentMetricsResponse
 * //   botId: "STRING_VALUE",
 * //   results: [ // AnalyticsIntentResults
 * //     { // AnalyticsIntentResult
 * //       binKeys: [ // AnalyticsBinKeys
 * //         { // AnalyticsBinKey
 * //           name: "ConversationStartTime" || "UtteranceTimestamp",
 * //           value: Number("long"),
 * //         },
 * //       ],
 * //       groupByKeys: [ // AnalyticsIntentGroupByKeys
 * //         { // AnalyticsIntentGroupByKey
 * //           name: "IntentName" || "IntentEndState" || "IntentLevel",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       metricsResults: [ // AnalyticsIntentMetricResults
 * //         { // AnalyticsIntentMetricResult
 * //           name: "Count" || "Success" || "Failure" || "Switched" || "Dropped",
 * //           statistic: "Sum" || "Avg" || "Max",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntentMetricsCommandInput - {@link ListIntentMetricsCommandInput}
 * @returns {@link ListIntentMetricsCommandOutput}
 * @see {@link ListIntentMetricsCommandInput} for command's `input` shape.
 * @see {@link ListIntentMetricsCommandOutput} for command's `response` shape.
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
export class ListIntentMetricsCommand extends command<ListIntentMetricsCommandInput, ListIntentMetricsCommandOutput>(
  _ep0,
  _mw0,
  "ListIntentMetrics",
  ListIntentMetrics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntentMetricsRequest;
      output: ListIntentMetricsResponse;
    };
    sdk: {
      input: ListIntentMetricsCommandInput;
      output: ListIntentMetricsCommandOutput;
    };
  };
}

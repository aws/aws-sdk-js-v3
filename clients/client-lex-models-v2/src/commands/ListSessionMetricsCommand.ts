// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSessionMetricsRequest, ListSessionMetricsResponse } from "../models/models_1";
import { ListSessionMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSessionMetricsCommand}.
 */
export interface ListSessionMetricsCommandInput extends ListSessionMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionMetricsCommand}.
 */
export interface ListSessionMetricsCommandOutput extends ListSessionMetricsResponse, __MetadataBearer {}

/**
 * Retrieves summary metrics for the user sessions with your bot. The following fields are required:
 *
 * - `metrics` – A list of [AnalyticsSessionMetric](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_AnalyticsSessionMetric.html) objects. In each object, use the `name` field to specify the metric to calculate, the `statistic` field to specify whether to calculate the `Sum`, `Average`, or `Max` number, and the `order` field to specify whether to sort the results in `Ascending` or `Descending` order.
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
 * import { LexModelsV2Client, ListSessionMetricsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListSessionMetricsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListSessionMetricsRequest
 *   botId: "STRING_VALUE", // required
 *   startDateTime: new Date("TIMESTAMP"), // required
 *   endDateTime: new Date("TIMESTAMP"), // required
 *   metrics: [ // AnalyticsSessionMetrics // required
 *     { // AnalyticsSessionMetric
 *       name: "Count" || "Success" || "Failure" || "Dropped" || "Duration" || "TurnsPerConversation" || "Concurrency", // required
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
 *   groupBy: [ // AnalyticsSessionGroupByList
 *     { // AnalyticsSessionGroupBySpecification
 *       name: "ConversationEndState" || "LocaleId", // required
 *     },
 *   ],
 *   filters: [ // AnalyticsSessionFilters
 *     { // AnalyticsSessionFilter
 *       name: "BotAliasId" || "BotVersion" || "LocaleId" || "Modality" || "Channel" || "Duration" || "ConversationEndState" || "SessionId" || "OriginatingRequestId" || "IntentPath", // required
 *       operator: "EQ" || "GT" || "LT", // required
 *       values: [ // AnalyticsFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSessionMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionMetricsResponse
 * //   botId: "STRING_VALUE",
 * //   results: [ // AnalyticsSessionResults
 * //     { // AnalyticsSessionResult
 * //       binKeys: [ // AnalyticsBinKeys
 * //         { // AnalyticsBinKey
 * //           name: "ConversationStartTime" || "UtteranceTimestamp",
 * //           value: Number("long"),
 * //         },
 * //       ],
 * //       groupByKeys: [ // AnalyticsSessionGroupByKeys
 * //         { // AnalyticsSessionGroupByKey
 * //           name: "ConversationEndState" || "LocaleId",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       metricsResults: [ // AnalyticsSessionMetricResults
 * //         { // AnalyticsSessionMetricResult
 * //           name: "Count" || "Success" || "Failure" || "Dropped" || "Duration" || "TurnsPerConversation" || "Concurrency",
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
 * @param ListSessionMetricsCommandInput - {@link ListSessionMetricsCommandInput}
 * @returns {@link ListSessionMetricsCommandOutput}
 * @see {@link ListSessionMetricsCommandInput} for command's `input` shape.
 * @see {@link ListSessionMetricsCommandOutput} for command's `response` shape.
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
export class ListSessionMetricsCommand extends command<ListSessionMetricsCommandInput, ListSessionMetricsCommandOutput>(
  _ep0,
  _mw0,
  "ListSessionMetrics",
  ListSessionMetrics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSessionMetricsRequest;
      output: ListSessionMetricsResponse;
    };
    sdk: {
      input: ListSessionMetricsCommandInput;
      output: ListSessionMetricsCommandOutput;
    };
  };
}

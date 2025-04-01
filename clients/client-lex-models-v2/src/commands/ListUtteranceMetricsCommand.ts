// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListUtteranceMetricsRequest, ListUtteranceMetricsResponse } from "../models/models_1";
import { de_ListUtteranceMetricsCommand, se_ListUtteranceMetricsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>To use this API operation, your IAM role must have permissions to
 *             perform the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListAggregatedUtterances.html">ListAggregatedUtterances</a> operation, which provides access to
 *             utterance-related analytics. See <a href="https://docs.aws.amazon.com/lexv2/latest/dg/monitoring-utterances.html">Viewing utterance
 *                statistics</a> for the IAM policy to apply to the IAM role.</p>
 *          </note>
 *          <p>Retrieves summary metrics for the utterances in your bot. The following fields are required:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>metrics</code> – A list of <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_AnalyticsUtteranceMetric.html">AnalyticsUtteranceMetric</a> objects. In each object, use the <code>name</code> field to specify the metric to calculate, the <code>statistic</code> field to specify whether to calculate the <code>Sum</code>, <code>Average</code>, or <code>Max</code> number, and the <code>order</code> field to specify whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>startDateTime</code> and <code>endDateTime</code> – Define a time range for which you want to retrieve results.</p>
 *             </li>
 *          </ul>
 *          <p>Of the optional fields, you can organize the results in the following ways:</p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>filters</code> field to filter the results, the <code>groupBy</code> field to specify categories by which to group the results, and the <code>binBy</code> field to specify time intervals by which to group the results.</p>
 *             </li>
 *             <li>
 *                <p>Use the <code>maxResults</code> field to limit the number of results to return in a single response and the <code>nextToken</code> field to return the next batch of results if the response does not return the full set of results.</p>
 *             </li>
 *          </ul>
 *          <p>Note that an <code>order</code> field exists in both <code>binBy</code> and <code>metrics</code>. Currently, you can specify it in either field, but not in both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListUtteranceMetricsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListUtteranceMetricsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
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
export class ListUtteranceMetricsCommand extends $Command
  .classBuilder<
    ListUtteranceMetricsCommandInput,
    ListUtteranceMetricsCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "ListUtteranceMetrics", {})
  .n("LexModelsV2Client", "ListUtteranceMetricsCommand")
  .f(void 0, void 0)
  .ser(se_ListUtteranceMetricsCommand)
  .de(de_ListUtteranceMetricsCommand)
  .build() {
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

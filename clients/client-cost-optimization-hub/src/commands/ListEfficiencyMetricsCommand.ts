// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CostOptimizationHubClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostOptimizationHubClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListEfficiencyMetricsRequest, ListEfficiencyMetricsResponse } from "../models/models_0";
import { ListEfficiencyMetrics } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEfficiencyMetricsCommand}.
 */
export interface ListEfficiencyMetricsCommandInput extends ListEfficiencyMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListEfficiencyMetricsCommand}.
 */
export interface ListEfficiencyMetricsCommandOutput extends ListEfficiencyMetricsResponse, __MetadataBearer {}

/**
 * <p>Returns cost efficiency metrics aggregated over time and optionally grouped by a specified dimension. The metrics provide insights into your cost optimization progress by tracking estimated savings, spending, and measures how effectively you're optimizing your Cloud resources.</p> <p>The operation supports both daily and monthly time granularities and allows grouping results by account ID, Amazon Web Services Region. Results are returned as time-series data, enabling you to analyze trends in your cost optimization performance over the specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, ListEfficiencyMetricsCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, ListEfficiencyMetricsCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * // import type { CostOptimizationHubClientConfig } from "@aws-sdk/client-cost-optimization-hub";
 * const config = {}; // type is CostOptimizationHubClientConfig
 * const client = new CostOptimizationHubClient(config);
 * const input = { // ListEfficiencyMetricsRequest
 *   groupBy: "STRING_VALUE",
 *   granularity: "Daily" || "Monthly", // required
 *   timePeriod: { // TimePeriod
 *     start: "STRING_VALUE", // required
 *     end: "STRING_VALUE", // required
 *   },
 *   maxResults: Number("int"),
 *   orderBy: { // OrderBy
 *     dimension: "STRING_VALUE",
 *     order: "Asc" || "Desc",
 *   },
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEfficiencyMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListEfficiencyMetricsResponse
 * //   efficiencyMetricsByGroup: [ // EfficiencyMetricsByGroupList
 * //     { // EfficiencyMetricsByGroup
 * //       metricsByTime: [ // MetricsByTimeList
 * //         { // MetricsByTime
 * //           score: Number("double"),
 * //           savings: Number("double"),
 * //           spend: Number("double"),
 * //           timestamp: "STRING_VALUE",
 * //         },
 * //       ],
 * //       group: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEfficiencyMetricsCommandInput - {@link ListEfficiencyMetricsCommandInput}
 * @returns {@link ListEfficiencyMetricsCommandOutput}
 * @see {@link ListEfficiencyMetricsCommandInput} for command's `input` shape.
 * @see {@link ListEfficiencyMetricsCommandOutput} for command's `response` shape.
 * @see {@link CostOptimizationHubClientResolvedConfig | config} for CostOptimizationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link CostOptimizationHubServiceException}
 * <p>Base exception class for all service exceptions from CostOptimizationHub service.</p>
 *
 *
 * @public
 */
export class ListEfficiencyMetricsCommand extends $Command
  .classBuilder<
    ListEfficiencyMetricsCommandInput,
    ListEfficiencyMetricsCommandOutput,
    CostOptimizationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostOptimizationHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CostOptimizationHubService", "ListEfficiencyMetrics", {})
  .n("CostOptimizationHubClient", "ListEfficiencyMetricsCommand")
  .sc(ListEfficiencyMetrics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEfficiencyMetricsRequest;
      output: ListEfficiencyMetricsResponse;
    };
    sdk: {
      input: ListEfficiencyMetricsCommandInput;
      output: ListEfficiencyMetricsCommandOutput;
    };
  };
}

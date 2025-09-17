// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMetricsInput, ListMetricsOutput } from "../models/models_0";
import { de_ListMetricsCommand, se_ListMetricsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMetricsCommand}.
 */
export interface ListMetricsCommandInput extends ListMetricsInput {}
/**
 * @public
 *
 * The output of {@link ListMetricsCommand}.
 */
export interface ListMetricsCommandOutput extends ListMetricsOutput, __MetadataBearer {}

/**
 * <p>List the specified metrics. You can use the returned metrics with <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to get statistical data.</p>
 *          <p>Up to 500 results are returned for any one call. To retrieve additional results,
 *             use the returned token with subsequent calls.</p>
 *          <p>After you create a metric, allow up to 15 minutes for the metric to appear. To see
 *             metric statistics sooner, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this
 *             operation in a monitoring account and view metrics from the linked source accounts. For
 *             more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 *          <p>
 *             <code>ListMetrics</code> doesn't return information about metrics if those metrics
 *             haven't reported data in the past two weeks. To retrieve those metrics, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListMetricsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListMetricsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // ListMetricsInput
 *   Namespace: "STRING_VALUE",
 *   MetricName: "STRING_VALUE",
 *   Dimensions: [ // DimensionFilters
 *     { // DimensionFilter
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   RecentlyActive: "PT3H",
 *   IncludeLinkedAccounts: true || false,
 *   OwningAccount: "STRING_VALUE",
 * };
 * const command = new ListMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListMetricsOutput
 * //   Metrics: [ // Metrics
 * //     { // Metric
 * //       Namespace: "STRING_VALUE",
 * //       MetricName: "STRING_VALUE",
 * //       Dimensions: [ // Dimensions
 * //         { // Dimension
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   OwningAccounts: [ // OwningAccounts
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMetricsCommandInput - {@link ListMetricsCommandInput}
 * @returns {@link ListMetricsCommandOutput}
 * @see {@link ListMetricsCommandInput} for command's `input` shape.
 * @see {@link ListMetricsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class ListMetricsCommand extends $Command
  .classBuilder<
    ListMetricsCommandInput,
    ListMetricsCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GraniteServiceVersion20100801", "ListMetrics", {})
  .n("CloudWatchClient", "ListMetricsCommand")
  .f(void 0, void 0)
  .ser(se_ListMetricsCommand)
  .de(de_ListMetricsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMetricsInput;
      output: ListMetricsOutput;
    };
    sdk: {
      input: ListMetricsCommandInput;
      output: ListMetricsCommandOutput;
    };
  };
}

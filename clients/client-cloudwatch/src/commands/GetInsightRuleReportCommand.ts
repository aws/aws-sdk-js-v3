// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetInsightRuleReportInput, GetInsightRuleReportOutput } from "../models/models_0";
import { GetInsightRuleReport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInsightRuleReportCommand}.
 */
export interface GetInsightRuleReportCommandInput extends GetInsightRuleReportInput {}
/**
 * @public
 *
 * The output of {@link GetInsightRuleReportCommand}.
 */
export interface GetInsightRuleReportCommandOutput extends GetInsightRuleReportOutput, __MetadataBearer {}

/**
 * <p>This operation returns the time series data collected by a Contributor Insights rule.
 *             The data includes the identity and number of contributors to the log group.</p>
 *          <p>You can also optionally return one or more statistics about each data point in the
 *             time series. These statistics can include the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>UniqueContributors</code> -- the number of unique contributors for each
 *                     data point.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaxContributorValue</code> -- the value of the top contributor for each
 *                     data point. The identity of the contributor might change for each data point in
 *                     the graph.</p>
 *                <p>If this rule aggregates by COUNT, the top contributor for each data point is
 *                     the contributor with the most occurrences in that period. If the rule aggregates
 *                     by SUM, the top contributor is the contributor with the highest sum in the log
 *                     field specified by the rule's <code>Value</code>, during that period.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SampleCount</code> -- the number of data points matched by the
 *                     rule.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Sum</code> -- the sum of the values from all contributors during the
 *                     time period represented by that data point.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Minimum</code> -- the minimum value from a single observation during the
 *                     time period represented by that data point.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Maximum</code> -- the maximum value from a single observation during the
 *                     time period represented by that data point.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Average</code> -- the average value from all contributors during the
 *                     time period represented by that data point.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetInsightRuleReportCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetInsightRuleReportCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // GetInsightRuleReportInput
 *   RuleName: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Period: Number("int"), // required
 *   MaxContributorCount: Number("int"),
 *   Metrics: [ // InsightRuleMetricList
 *     "STRING_VALUE",
 *   ],
 *   OrderBy: "STRING_VALUE",
 * };
 * const command = new GetInsightRuleReportCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightRuleReportOutput
 * //   KeyLabels: [ // InsightRuleContributorKeyLabels
 * //     "STRING_VALUE",
 * //   ],
 * //   AggregationStatistic: "STRING_VALUE",
 * //   AggregateValue: Number("double"),
 * //   ApproximateUniqueCount: Number("long"),
 * //   Contributors: [ // InsightRuleContributors
 * //     { // InsightRuleContributor
 * //       Keys: [ // InsightRuleContributorKeys // required
 * //         "STRING_VALUE",
 * //       ],
 * //       ApproximateAggregateValue: Number("double"), // required
 * //       Datapoints: [ // InsightRuleContributorDatapoints // required
 * //         { // InsightRuleContributorDatapoint
 * //           Timestamp: new Date("TIMESTAMP"), // required
 * //           ApproximateValue: Number("double"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   MetricDatapoints: [ // InsightRuleMetricDatapoints
 * //     { // InsightRuleMetricDatapoint
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       UniqueContributors: Number("double"),
 * //       MaxContributorValue: Number("double"),
 * //       SampleCount: Number("double"),
 * //       Average: Number("double"),
 * //       Sum: Number("double"),
 * //       Minimum: Number("double"),
 * //       Maximum: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetInsightRuleReportCommandInput - {@link GetInsightRuleReportCommandInput}
 * @returns {@link GetInsightRuleReportCommandOutput}
 * @see {@link GetInsightRuleReportCommandInput} for command's `input` shape.
 * @see {@link GetInsightRuleReportCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class GetInsightRuleReportCommand extends $Command
  .classBuilder<
    GetInsightRuleReportCommandInput,
    GetInsightRuleReportCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "GetInsightRuleReport", {})
  .n("CloudWatchClient", "GetInsightRuleReportCommand")
  .sc(GetInsightRuleReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInsightRuleReportInput;
      output: GetInsightRuleReportOutput;
    };
    sdk: {
      input: GetInsightRuleReportCommandInput;
      output: GetInsightRuleReportCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMetricFiltersRequest, DescribeMetricFiltersResponse } from "../models/models_0";
import { de_DescribeMetricFiltersCommand, se_DescribeMetricFiltersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetricFiltersCommand}.
 */
export interface DescribeMetricFiltersCommandInput extends DescribeMetricFiltersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMetricFiltersCommand}.
 */
export interface DescribeMetricFiltersCommandOutput extends DescribeMetricFiltersResponse, __MetadataBearer {}

/**
 * <p>Lists the specified metric filters. You can list all of the metric filters or filter
 *       the results by log name, prefix, metric name, or metric namespace. The results are
 *       ASCII-sorted by filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeMetricFiltersCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeMetricFiltersCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeMetricFiltersRequest
 *   logGroupName: "STRING_VALUE",
 *   filterNamePrefix: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   metricName: "STRING_VALUE",
 *   metricNamespace: "STRING_VALUE",
 * };
 * const command = new DescribeMetricFiltersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetricFiltersResponse
 * //   metricFilters: [ // MetricFilters
 * //     { // MetricFilter
 * //       filterName: "STRING_VALUE",
 * //       filterPattern: "STRING_VALUE",
 * //       metricTransformations: [ // MetricTransformations
 * //         { // MetricTransformation
 * //           metricName: "STRING_VALUE", // required
 * //           metricNamespace: "STRING_VALUE", // required
 * //           metricValue: "STRING_VALUE", // required
 * //           defaultValue: Number("double"),
 * //           dimensions: { // Dimensions
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //         },
 * //       ],
 * //       creationTime: Number("long"),
 * //       logGroupName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMetricFiltersCommandInput - {@link DescribeMetricFiltersCommandInput}
 * @returns {@link DescribeMetricFiltersCommandOutput}
 * @see {@link DescribeMetricFiltersCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricFiltersCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 * @public
 */
export class DescribeMetricFiltersCommand extends $Command
  .classBuilder<
    DescribeMetricFiltersCommandInput,
    DescribeMetricFiltersCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "DescribeMetricFilters", {})
  .n("CloudWatchLogsClient", "DescribeMetricFiltersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMetricFiltersCommand)
  .de(de_DescribeMetricFiltersCommand)
  .build() {}

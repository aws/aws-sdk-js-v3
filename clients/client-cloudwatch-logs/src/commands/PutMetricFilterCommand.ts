// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutMetricFilterRequest } from "../models/models_0";
import { PutMetricFilter } from "../schemas/schemas_7_Log";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutMetricFilterCommand}.
 */
export interface PutMetricFilterCommandInput extends PutMetricFilterRequest {}
/**
 * @public
 *
 * The output of {@link PutMetricFilterCommand}.
 */
export interface PutMetricFilterCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates a metric filter and associates it with the specified log group. With
 *       metric filters, you can configure rules to extract metric data from log events ingested
 *       through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p>
 *          <p>The maximum number of metric filters that can be associated with a log group is
 *       100.</p>
 *          <p>Using regular expressions in filter patterns is supported. For these filters, there is a
 *       quota of two regular expression patterns within a single filter pattern. There is also a quota
 *       of five regular expression patterns per log group. For more information about using regular
 *       expressions in filter patterns, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html"> Filter pattern syntax for
 *         metric filters, subscription filters, filter log events, and Live Tail</a>.</p>
 *          <p>When you create a metric filter, you can also optionally assign a unit and dimensions to
 *       the metric that is created.</p>
 *          <important>
 *             <p>Metrics extracted from log events are charged as custom metrics. To prevent unexpected
 *         high charges, do not specify high-cardinality fields such as <code>IPAddress</code> or
 *           <code>requestID</code> as dimensions. Each different value found for a dimension is
 *         treated as a separate metric and accrues charges as a separate custom metric. </p>
 *             <p>CloudWatch Logs might disable a metric filter if it generates 1,000 different
 *         name/value pairs for your specified dimensions within one hour.</p>
 *             <p>You can also set up a billing alarm to alert you if your charges are higher than
 *         expected. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html">
 *           Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>.
 *       </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutMetricFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutMetricFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutMetricFilterRequest
 *   logGroupName: "STRING_VALUE", // required
 *   filterName: "STRING_VALUE", // required
 *   filterPattern: "STRING_VALUE", // required
 *   metricTransformations: [ // MetricTransformations // required
 *     { // MetricTransformation
 *       metricName: "STRING_VALUE", // required
 *       metricNamespace: "STRING_VALUE", // required
 *       metricValue: "STRING_VALUE", // required
 *       defaultValue: Number("double"),
 *       dimensions: { // Dimensions
 *         "<keys>": "STRING_VALUE",
 *       },
 *       unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *     },
 *   ],
 *   applyOnTransformedLogs: true || false,
 *   fieldSelectionCriteria: "STRING_VALUE",
 *   emitSystemFieldDimensions: [ // EmitSystemFields
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new PutMetricFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutMetricFilterCommandInput - {@link PutMetricFilterCommandInput}
 * @returns {@link PutMetricFilterCommandOutput}
 * @see {@link PutMetricFilterCommandInput} for command's `input` shape.
 * @see {@link PutMetricFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
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
 *
 * @public
 */
export class PutMetricFilterCommand extends $Command
  .classBuilder<
    PutMetricFilterCommandInput,
    PutMetricFilterCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "PutMetricFilter", {})
  .n("CloudWatchLogsClient", "PutMetricFilterCommand")
  .sc(PutMetricFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMetricFilterRequest;
      output: {};
    };
    sdk: {
      input: PutMetricFilterCommandInput;
      output: PutMetricFilterCommandOutput;
    };
  };
}

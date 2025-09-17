// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAnomalyDetectorInput, PutAnomalyDetectorOutput } from "../models/models_0";
import { de_PutAnomalyDetectorCommand, se_PutAnomalyDetectorCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAnomalyDetectorCommand}.
 */
export interface PutAnomalyDetectorCommandInput extends PutAnomalyDetectorInput {}
/**
 * @public
 *
 * The output of {@link PutAnomalyDetectorCommand}.
 */
export interface PutAnomalyDetectorCommandOutput extends PutAnomalyDetectorOutput, __MetadataBearer {}

/**
 * <p>Creates an anomaly detection model for a CloudWatch metric. You can use the model to
 *             display a band of expected normal values when the metric is graphed.</p>
 *          <p>If you have enabled unified cross-account observability, and this account is a
 *             monitoring account, the metric can be in the same account or a source account. You can
 *             specify the account ID in the object you specify in the
 *             <code>SingleMetricAnomalyDetector</code> parameter.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // PutAnomalyDetectorInput
 *   Namespace: "STRING_VALUE",
 *   MetricName: "STRING_VALUE",
 *   Dimensions: [ // Dimensions
 *     { // Dimension
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Stat: "STRING_VALUE",
 *   Configuration: { // AnomalyDetectorConfiguration
 *     ExcludedTimeRanges: [ // AnomalyDetectorExcludedTimeRanges
 *       { // Range
 *         StartTime: new Date("TIMESTAMP"), // required
 *         EndTime: new Date("TIMESTAMP"), // required
 *       },
 *     ],
 *     MetricTimezone: "STRING_VALUE",
 *   },
 *   MetricCharacteristics: { // MetricCharacteristics
 *     PeriodicSpikes: true || false,
 *   },
 *   SingleMetricAnomalyDetector: { // SingleMetricAnomalyDetector
 *     AccountId: "STRING_VALUE",
 *     Namespace: "STRING_VALUE",
 *     MetricName: "STRING_VALUE",
 *     Dimensions: [
 *       {
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *     Stat: "STRING_VALUE",
 *   },
 *   MetricMathAnomalyDetector: { // MetricMathAnomalyDetector
 *     MetricDataQueries: [ // MetricDataQueries
 *       { // MetricDataQuery
 *         Id: "STRING_VALUE", // required
 *         MetricStat: { // MetricStat
 *           Metric: { // Metric
 *             Namespace: "STRING_VALUE",
 *             MetricName: "STRING_VALUE",
 *             Dimensions: "<Dimensions>",
 *           },
 *           Period: Number("int"), // required
 *           Stat: "STRING_VALUE", // required
 *           Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *         },
 *         Expression: "STRING_VALUE",
 *         Label: "STRING_VALUE",
 *         ReturnData: true || false,
 *         Period: Number("int"),
 *         AccountId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new PutAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAnomalyDetectorCommandInput - {@link PutAnomalyDetectorCommandInput}
 * @returns {@link PutAnomalyDetectorCommandOutput}
 * @see {@link PutAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link PutAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Parameters were used together that cannot be used together.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeded one or more limits.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class PutAnomalyDetectorCommand extends $Command
  .classBuilder<
    PutAnomalyDetectorCommandInput,
    PutAnomalyDetectorCommandOutput,
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
  .s("GraniteServiceVersion20100801", "PutAnomalyDetector", {})
  .n("CloudWatchClient", "PutAnomalyDetectorCommand")
  .f(void 0, void 0)
  .ser(se_PutAnomalyDetectorCommand)
  .de(de_PutAnomalyDetectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAnomalyDetectorInput;
      output: {};
    };
    sdk: {
      input: PutAnomalyDetectorCommandInput;
      output: PutAnomalyDetectorCommandOutput;
    };
  };
}

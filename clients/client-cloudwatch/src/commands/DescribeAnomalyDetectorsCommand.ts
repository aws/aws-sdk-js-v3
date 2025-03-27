// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAnomalyDetectorsInput, DescribeAnomalyDetectorsOutput } from "../models/models_0";
import { de_DescribeAnomalyDetectorsCommand, se_DescribeAnomalyDetectorsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAnomalyDetectorsCommand}.
 */
export interface DescribeAnomalyDetectorsCommandInput extends DescribeAnomalyDetectorsInput {}
/**
 * @public
 *
 * The output of {@link DescribeAnomalyDetectorsCommand}.
 */
export interface DescribeAnomalyDetectorsCommandOutput extends DescribeAnomalyDetectorsOutput, __MetadataBearer {}

/**
 * <p>Lists the anomaly detection models that you have created in your account. For single
 *             metric anomaly detectors, you can list all of the models in your account or filter the
 *             results to only the models that are related to a certain namespace, metric name, or
 *             metric dimension. For metric math anomaly detectors, you can list them by adding
 *             <code>METRIC_MATH</code> to the <code>AnomalyDetectorTypes</code> array. This will
 *             return all metric math anomaly detectors in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAnomalyDetectorsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAnomalyDetectorsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // DescribeAnomalyDetectorsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Namespace: "STRING_VALUE",
 *   MetricName: "STRING_VALUE",
 *   Dimensions: [ // Dimensions
 *     { // Dimension
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AnomalyDetectorTypes: [ // AnomalyDetectorTypes
 *     "SINGLE_METRIC" || "METRIC_MATH",
 *   ],
 * };
 * const command = new DescribeAnomalyDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAnomalyDetectorsOutput
 * //   AnomalyDetectors: [ // AnomalyDetectors
 * //     { // AnomalyDetector
 * //       Namespace: "STRING_VALUE",
 * //       MetricName: "STRING_VALUE",
 * //       Dimensions: [ // Dimensions
 * //         { // Dimension
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Stat: "STRING_VALUE",
 * //       Configuration: { // AnomalyDetectorConfiguration
 * //         ExcludedTimeRanges: [ // AnomalyDetectorExcludedTimeRanges
 * //           { // Range
 * //             StartTime: new Date("TIMESTAMP"), // required
 * //             EndTime: new Date("TIMESTAMP"), // required
 * //           },
 * //         ],
 * //         MetricTimezone: "STRING_VALUE",
 * //       },
 * //       StateValue: "PENDING_TRAINING" || "TRAINED_INSUFFICIENT_DATA" || "TRAINED",
 * //       MetricCharacteristics: { // MetricCharacteristics
 * //         PeriodicSpikes: true || false,
 * //       },
 * //       SingleMetricAnomalyDetector: { // SingleMetricAnomalyDetector
 * //         AccountId: "STRING_VALUE",
 * //         Namespace: "STRING_VALUE",
 * //         MetricName: "STRING_VALUE",
 * //         Dimensions: [
 * //           {
 * //             Name: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         Stat: "STRING_VALUE",
 * //       },
 * //       MetricMathAnomalyDetector: { // MetricMathAnomalyDetector
 * //         MetricDataQueries: [ // MetricDataQueries
 * //           { // MetricDataQuery
 * //             Id: "STRING_VALUE", // required
 * //             MetricStat: { // MetricStat
 * //               Metric: { // Metric
 * //                 Namespace: "STRING_VALUE",
 * //                 MetricName: "STRING_VALUE",
 * //                 Dimensions: "<Dimensions>",
 * //               },
 * //               Period: Number("int"), // required
 * //               Stat: "STRING_VALUE", // required
 * //               Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //             },
 * //             Expression: "STRING_VALUE",
 * //             Label: "STRING_VALUE",
 * //             ReturnData: true || false,
 * //             Period: Number("int"),
 * //             AccountId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAnomalyDetectorsCommandInput - {@link DescribeAnomalyDetectorsCommandInput}
 * @returns {@link DescribeAnomalyDetectorsCommandOutput}
 * @see {@link DescribeAnomalyDetectorsCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The next token specified is invalid.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Parameters were used together that cannot be used together.</p>
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
export class DescribeAnomalyDetectorsCommand extends $Command
  .classBuilder<
    DescribeAnomalyDetectorsCommandInput,
    DescribeAnomalyDetectorsCommandOutput,
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
  .s("GraniteServiceVersion20100801", "DescribeAnomalyDetectors", {})
  .n("CloudWatchClient", "DescribeAnomalyDetectorsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAnomalyDetectorsCommand)
  .de(de_DescribeAnomalyDetectorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAnomalyDetectorsInput;
      output: DescribeAnomalyDetectorsOutput;
    };
    sdk: {
      input: DescribeAnomalyDetectorsCommandInput;
      output: DescribeAnomalyDetectorsCommandOutput;
    };
  };
}

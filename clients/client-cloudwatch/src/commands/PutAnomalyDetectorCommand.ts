// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAnomalyDetectorInput, PutAnomalyDetectorOutput } from "../models/models_0";
import { PutAnomalyDetector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed.
 *
 * If you have enabled unified cross-account observability, and this account is a monitoring account, the metric can be in the same account or a source account. You can specify the account ID in the object you specify in the `SingleMetricAnomalyDetector` parameter.
 *
 * For more information, see [CloudWatch Anomaly Detection](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html).
 *
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
 *     AdaptationSpeed: "FAST" || "NORMAL" || "SLOW",
 *     OutlierFilteringStrength: "MINIMAL" || "MODERATE" || "STRICT",
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
 * // { // PutAnomalyDetectorOutput
 * //   AnomalyDetectorId: "STRING_VALUE",
 * // };
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
 *
 * Request processing has failed due to some unknown error, exception, or failure.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Parameters were used together that cannot be used together.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of an input parameter is bad or out-of-range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation exceeded one or more limits.
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *
 * An input parameter that is required is missing.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class PutAnomalyDetectorCommand extends command<PutAnomalyDetectorCommandInput, PutAnomalyDetectorCommandOutput>(
  _ep0,
  _mw0,
  "PutAnomalyDetector",
  PutAnomalyDetector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAnomalyDetectorInput;
      output: PutAnomalyDetectorOutput;
    };
    sdk: {
      input: PutAnomalyDetectorCommandInput;
      output: PutAnomalyDetectorCommandOutput;
    };
  };
}

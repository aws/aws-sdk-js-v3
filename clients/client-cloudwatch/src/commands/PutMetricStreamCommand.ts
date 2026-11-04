// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutMetricStreamInput, PutMetricStreamOutput } from "../models/models_0";
import { PutMetricStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutMetricStreamCommand}.
 */
export interface PutMetricStreamCommandInput extends PutMetricStreamInput {}
/**
 * @public
 *
 * The output of {@link PutMetricStreamCommand}.
 */
export interface PutMetricStreamCommandOutput extends PutMetricStreamOutput, __MetadataBearer {}

/**
 * Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party solutions.
 *
 * For more information, see [Using Metric Streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html).
 *
 * To create a metric stream, you must be signed in to an account that has the `iam:PassRole` permission and either the `CloudWatchFullAccess` policy or the `cloudwatch:PutMetricStream` permission.
 *
 * When you create or update a metric stream, you choose one of the following:
 *
 * - Stream metrics from all metric namespaces in the account.
 * - Stream metrics from all metric namespaces in the account, except for the namespaces that you list in `ExcludeFilters`.
 * - Stream metrics from only the metric namespaces that you list in `IncludeFilters`.
 *
 * By default, a metric stream always sends the `MAX`, `MIN`, `SUM`, and `SAMPLECOUNT` statistics for each metric that is streamed. You can use the `StatisticsConfigurations` parameter to have the metric stream send additional statistics in the stream. Streaming additional statistics incurs additional costs. For more information, see [Amazon CloudWatch Pricing](https://aws.amazon.com/cloudwatch/pricing/).
 *
 * When you use `PutMetricStream` to create a new metric stream, the stream is created in the `running` state. If you use it to update an existing stream, the state of the stream is not changed.
 *
 * If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account, you can choose whether to include metrics from source accounts in the stream. For more information, see [CloudWatch cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // PutMetricStreamInput
 *   Name: "STRING_VALUE", // required
 *   IncludeFilters: [ // MetricStreamFilters
 *     { // MetricStreamFilter
 *       Namespace: "STRING_VALUE",
 *       MetricNames: [ // MetricStreamFilterMetricNames
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ExcludeFilters: [
 *     {
 *       Namespace: "STRING_VALUE",
 *       MetricNames: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   FirehoseArn: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   OutputFormat: "json" || "opentelemetry0.7" || "opentelemetry1.0", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   StatisticsConfigurations: [ // MetricStreamStatisticsConfigurations
 *     { // MetricStreamStatisticsConfiguration
 *       IncludeMetrics: [ // MetricStreamStatisticsIncludeMetrics // required
 *         { // MetricStreamStatisticsMetric
 *           Namespace: "STRING_VALUE", // required
 *           MetricName: "STRING_VALUE", // required
 *         },
 *       ],
 *       AdditionalStatistics: [ // MetricStreamStatisticsAdditionalStatistics // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   IncludeLinkedAccountsMetrics: true || false,
 * };
 * const command = new PutMetricStreamCommand(input);
 * const response = await client.send(command);
 * // { // PutMetricStreamOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutMetricStreamCommandInput - {@link PutMetricStreamCommandInput}
 * @returns {@link PutMetricStreamCommandOutput}
 * @see {@link PutMetricStreamCommandInput} for command's `input` shape.
 * @see {@link PutMetricStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * More than one process tried to modify a resource at the same time.
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
export class PutMetricStreamCommand extends command<PutMetricStreamCommandInput, PutMetricStreamCommandOutput>(
  _ep0,
  _mw0,
  "PutMetricStream",
  PutMetricStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMetricStreamInput;
      output: PutMetricStreamOutput;
    };
    sdk: {
      input: PutMetricStreamCommandInput;
      output: PutMetricStreamCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutMetricStreamInput, PutMetricStreamOutput } from "../models/models_0";
import { PutMetricStream } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch
 *             metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party
 *             solutions.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html"> Using
 *             Metric Streams</a>.</p>
 *          <p>To create a metric stream, you must be signed in to an account that has the
 *             <code>iam:PassRole</code> permission and either the
 *             <code>CloudWatchFullAccess</code> policy or the
 *             <code>cloudwatch:PutMetricStream</code> permission.</p>
 *          <p>When you create or update a metric stream, you choose one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>Stream metrics from all metric namespaces in the account.</p>
 *             </li>
 *             <li>
 *                <p>Stream metrics from all metric namespaces in the account, except for the
 *                     namespaces that you list in <code>ExcludeFilters</code>.</p>
 *             </li>
 *             <li>
 *                <p>Stream metrics from only the metric namespaces that you list in
 *                     <code>IncludeFilters</code>.</p>
 *             </li>
 *          </ul>
 *          <p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>,
 *             <code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is
 *             streamed. You can use the <code>StatisticsConfigurations</code> parameter to have the
 *             metric stream send additional statistics in the stream. Streaming additional statistics
 *             incurs additional costs. For more information, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>. </p>
 *          <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream is
 *             created in the <code>running</code> state. If you use it to update an existing stream,
 *             the state of the stream is not changed.</p>
 *          <p>If you are using CloudWatch cross-account observability and you create a metric
 *             stream in a monitoring account, you can choose whether to include metrics from source
 *             accounts in the stream. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
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
 *  <p>More than one process tried to modify a resource at the same time.</p>
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
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class PutMetricStreamCommand extends $Command
  .classBuilder<
    PutMetricStreamCommandInput,
    PutMetricStreamCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "PutMetricStream", {})
  .n("CloudWatchClient", "PutMetricStreamCommand")
  .sc(PutMetricStream)
  .build() {
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

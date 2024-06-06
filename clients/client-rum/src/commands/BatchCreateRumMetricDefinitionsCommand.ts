// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchCreateRumMetricDefinitionsRequest, BatchCreateRumMetricDefinitionsResponse } from "../models/models_0";
import {
  de_BatchCreateRumMetricDefinitionsCommand,
  se_BatchCreateRumMetricDefinitionsCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateRumMetricDefinitionsCommand}.
 */
export interface BatchCreateRumMetricDefinitionsCommandInput extends BatchCreateRumMetricDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateRumMetricDefinitionsCommand}.
 */
export interface BatchCreateRumMetricDefinitionsCommandOutput
  extends BatchCreateRumMetricDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Specifies the extended metrics and custom metrics that you want a CloudWatch RUM app monitor to send to a destination. Valid
 *          destinations include CloudWatch and Evidently.</p>
 *          <p>By default, RUM app monitors send some metrics to CloudWatch. These default metrics
 *          are listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-metrics.html">CloudWatch metrics that you can collect
 *             with CloudWatch RUM</a>.</p>
 *          <p>In addition to these default metrics, you can choose to send extended metrics, custom
 *          metrics, or both.</p>
 *          <ul>
 *             <li>
 *                <p>Extended metrics let you send metrics with additional dimensions that aren't included in the
 *                default metrics. You can also send extended metrics to both Evidently and CloudWatch. The valid dimension names for the additional dimensions for extended
 *                metrics are <code>BrowserName</code>, <code>CountryCode</code>,
 *                   <code>DeviceType</code>, <code>FileType</code>, <code>OSName</code>, and
 *                   <code>PageId</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html">
 *                   Extended metrics that you can send to CloudWatch and CloudWatch
 *                   Evidently</a>.</p>
 *             </li>
 *             <li>
 *                <p>Custom metrics are metrics that you define. You can send custom metrics to CloudWatch.
 *                   CloudWatch Evidently, or both. With custom metrics, you can use any metric
 *                name and namespace. To derive the metrics, you can use any custom events, built-in
 *                events, custom attributes, or default attributes. </p>
 *                <p>You can't send custom metrics to the <code>AWS/RUM</code> namespace. You must send custom metrics to a
 *                custom namespace that you define. The namespace that you use can't start with <code>AWS/</code>.
 *                CloudWatch RUM prepends <code>RUM/CustomMetrics/</code> to the custom namespace that you define,
 *                so the final namespace for your metrics in CloudWatch is
 *          <code>RUM/CustomMetrics/<i>your-custom-namespace</i>
 *                   </code>.</p>
 *             </li>
 *          </ul>
 *          <p>The maximum number of metric definitions that you can specify in one
 *          <code>BatchCreateRumMetricDefinitions</code> operation is 200.</p>
 *          <p>The maximum number of metric definitions that one destination can contain is 2000.</p>
 *          <p>Extended metrics sent to CloudWatch and RUM custom metrics are charged as CloudWatch custom metrics. Each combination of additional dimension name and dimension
 *          value counts as a custom metric. For more information, see
 *          <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
 *          <p>You must have
 *          already created a destination for the metrics before you send them. For more information, see
 *          <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p>
 *          <p>If some metric definitions specified in a <code>BatchCreateRumMetricDefinitions</code> operations are not valid,
 *       those metric definitions fail and return errors, but all valid metric definitions in the same operation still succeed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, BatchCreateRumMetricDefinitionsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, BatchCreateRumMetricDefinitionsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const input = { // BatchCreateRumMetricDefinitionsRequest
 *   AppMonitorName: "STRING_VALUE", // required
 *   Destination: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE",
 *   MetricDefinitions: [ // MetricDefinitionsRequest // required
 *     { // MetricDefinitionRequest
 *       Name: "STRING_VALUE", // required
 *       ValueKey: "STRING_VALUE",
 *       UnitLabel: "STRING_VALUE",
 *       DimensionKeys: { // DimensionKeysMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       EventPattern: "STRING_VALUE",
 *       Namespace: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchCreateRumMetricDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateRumMetricDefinitionsResponse
 * //   Errors: [ // BatchCreateRumMetricDefinitionsErrors // required
 * //     { // BatchCreateRumMetricDefinitionsError
 * //       MetricDefinition: { // MetricDefinitionRequest
 * //         Name: "STRING_VALUE", // required
 * //         ValueKey: "STRING_VALUE",
 * //         UnitLabel: "STRING_VALUE",
 * //         DimensionKeys: { // DimensionKeysMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         EventPattern: "STRING_VALUE",
 * //         Namespace: "STRING_VALUE",
 * //       },
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   MetricDefinitions: [ // MetricDefinitions
 * //     { // MetricDefinition
 * //       MetricDefinitionId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       ValueKey: "STRING_VALUE",
 * //       UnitLabel: "STRING_VALUE",
 * //       DimensionKeys: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       EventPattern: "STRING_VALUE",
 * //       Namespace: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateRumMetricDefinitionsCommandInput - {@link BatchCreateRumMetricDefinitionsCommandInput}
 * @returns {@link BatchCreateRumMetricDefinitionsCommandOutput}
 * @see {@link BatchCreateRumMetricDefinitionsCommandInput} for command's `input` shape.
 * @see {@link BatchCreateRumMetricDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the arguments for the request is not valid.</p>
 *
 * @throws {@link RUMServiceException}
 * <p>Base exception class for all service exceptions from RUM service.</p>
 *
 * @public
 */
export class BatchCreateRumMetricDefinitionsCommand extends $Command
  .classBuilder<
    BatchCreateRumMetricDefinitionsCommandInput,
    BatchCreateRumMetricDefinitionsCommandOutput,
    RUMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RUMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RUM", "BatchCreateRumMetricDefinitions", {})
  .n("RUMClient", "BatchCreateRumMetricDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_BatchCreateRumMetricDefinitionsCommand)
  .de(de_BatchCreateRumMetricDefinitionsCommand)
  .build() {}

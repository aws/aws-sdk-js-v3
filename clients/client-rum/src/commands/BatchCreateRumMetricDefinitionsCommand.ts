// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchCreateRumMetricDefinitionsRequest,
  BatchCreateRumMetricDefinitionsResponse,
} from "../models/models_0";
import { BatchCreateRumMetricDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface BatchCreateRumMetricDefinitionsCommandOutput extends BatchCreateRumMetricDefinitionsResponse, __MetadataBearer {}

/**
 * Specifies the extended metrics and custom metrics that you want a CloudWatch RUM app monitor to send to a destination. Valid destinations include CloudWatch and Evidently.
 *
 * By default, RUM app monitors send some metrics to CloudWatch. These default metrics are listed in [CloudWatch metrics that you can collect with CloudWatch RUM](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-metrics.html).
 *
 * In addition to these default metrics, you can choose to send extended metrics, custom metrics, or both.
 *
 * - Extended metrics let you send metrics with additional dimensions that aren't included in the default metrics. You can also send extended metrics to both Evidently and CloudWatch. The valid dimension names for the additional dimensions for extended metrics are `BrowserName`, `CountryCode`, `DeviceType`, `FileType`, `OSName`, and `PageId`. For more information, see [Extended metrics that you can send to CloudWatch and CloudWatch Evidently](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html).
 * - Custom metrics are metrics that you define. You can send custom metrics to CloudWatch. CloudWatch Evidently, or both. With custom metrics, you can use any metric name and namespace. To derive the metrics, you can use any custom events, built-in events, custom attributes, or default attributes.
 *
 *   You can't send custom metrics to the `AWS/RUM` namespace. You must send custom metrics to a custom namespace that you define. The namespace that you use can't start with `AWS/`. CloudWatch RUM prepends `RUM/CustomMetrics/` to the custom namespace that you define, so the final namespace for your metrics in CloudWatch is `RUM/CustomMetrics/your-custom-namespace`.
 *
 * The maximum number of metric definitions that you can specify in one `BatchCreateRumMetricDefinitions` operation is 200.
 *
 * The maximum number of metric definitions that one destination can contain is 2000.
 *
 * Extended metrics sent to CloudWatch and RUM custom metrics are charged as CloudWatch custom metrics. Each combination of additional dimension name and dimension value counts as a custom metric. For more information, see [Amazon CloudWatch Pricing](https://aws.amazon.com/cloudwatch/pricing/).
 *
 * You must have already created a destination for the metrics before you send them. For more information, see [PutRumMetricsDestination](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html).
 *
 * If some metric definitions specified in a `BatchCreateRumMetricDefinitions` operations are not valid, those metric definitions fail and return errors, but all valid metric definitions in the same operation still succeed.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, BatchCreateRumMetricDefinitionsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, BatchCreateRumMetricDefinitionsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service exception.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the arguments for the request is not valid.
 *
 * @throws {@link RUMServiceException}
 *
 * Base exception class for all service exceptions from RUM service.
 *
 * @public
 */
export class BatchCreateRumMetricDefinitionsCommand extends command<BatchCreateRumMetricDefinitionsCommandInput, BatchCreateRumMetricDefinitionsCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreateRumMetricDefinitions",
  BatchCreateRumMetricDefinitions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateRumMetricDefinitionsRequest;
      output: BatchCreateRumMetricDefinitionsResponse;
    };
    sdk: {
      input: BatchCreateRumMetricDefinitionsCommandInput;
      output: BatchCreateRumMetricDefinitionsCommandOutput;
    };
  };
}

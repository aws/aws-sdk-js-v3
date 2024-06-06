// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchPutMetricsRequest, BatchPutMetricsResponse } from "../models/models_0";
import { de_BatchPutMetricsCommand, se_BatchPutMetricsCommand } from "../protocols/Aws_restJson1";
import { SageMakerMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerMetricsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutMetricsCommand}.
 */
export interface BatchPutMetricsCommandInput extends BatchPutMetricsRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutMetricsCommand}.
 */
export interface BatchPutMetricsCommandOutput extends BatchPutMetricsResponse, __MetadataBearer {}

/**
 * <p>Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and
 *          retrieved with the <code>GetMetrics</code> API.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerMetricsClient, BatchPutMetricsCommand } from "@aws-sdk/client-sagemaker-metrics"; // ES Modules import
 * // const { SageMakerMetricsClient, BatchPutMetricsCommand } = require("@aws-sdk/client-sagemaker-metrics"); // CommonJS import
 * const client = new SageMakerMetricsClient(config);
 * const input = { // BatchPutMetricsRequest
 *   TrialComponentName: "STRING_VALUE", // required
 *   MetricData: [ // RawMetricDataList // required
 *     { // RawMetricData
 *       MetricName: "STRING_VALUE", // required
 *       Timestamp: new Date("TIMESTAMP"), // required
 *       Step: Number("int"),
 *       Value: Number("double"), // required
 *     },
 *   ],
 * };
 * const command = new BatchPutMetricsCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutMetricsResponse
 * //   Errors: [ // BatchPutMetricsErrorList
 * //     { // BatchPutMetricsError
 * //       Code: "METRIC_LIMIT_EXCEEDED" || "INTERNAL_ERROR" || "VALIDATION_ERROR" || "CONFLICT_ERROR",
 * //       MetricIndex: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutMetricsCommandInput - {@link BatchPutMetricsCommandInput}
 * @returns {@link BatchPutMetricsCommandOutput}
 * @see {@link BatchPutMetricsCommandInput} for command's `input` shape.
 * @see {@link BatchPutMetricsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerMetricsClientResolvedConfig | config} for SageMakerMetricsClient's `config` shape.
 *
 * @throws {@link SageMakerMetricsServiceException}
 * <p>Base exception class for all service exceptions from SageMakerMetrics service.</p>
 *
 * @public
 */
export class BatchPutMetricsCommand extends $Command
  .classBuilder<
    BatchPutMetricsCommandInput,
    BatchPutMetricsCommandOutput,
    SageMakerMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerMetricsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMakerMetricsService", "BatchPutMetrics", {})
  .n("SageMakerMetricsClient", "BatchPutMetricsCommand")
  .f(void 0, void 0)
  .ser(se_BatchPutMetricsCommand)
  .de(de_BatchPutMetricsCommand)
  .build() {}

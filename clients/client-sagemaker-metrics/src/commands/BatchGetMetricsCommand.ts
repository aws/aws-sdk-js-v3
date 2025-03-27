// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetMetricsRequest, BatchGetMetricsResponse } from "../models/models_0";
import { de_BatchGetMetricsCommand, se_BatchGetMetricsCommand } from "../protocols/Aws_restJson1";
import { SageMakerMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerMetricsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetMetricsCommand}.
 */
export interface BatchGetMetricsCommandInput extends BatchGetMetricsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetMetricsCommand}.
 */
export interface BatchGetMetricsCommandOutput extends BatchGetMetricsResponse, __MetadataBearer {}

/**
 * <p>Used to retrieve training metrics from SageMaker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerMetricsClient, BatchGetMetricsCommand } from "@aws-sdk/client-sagemaker-metrics"; // ES Modules import
 * // const { SageMakerMetricsClient, BatchGetMetricsCommand } = require("@aws-sdk/client-sagemaker-metrics"); // CommonJS import
 * const client = new SageMakerMetricsClient(config);
 * const input = { // BatchGetMetricsRequest
 *   MetricQueries: [ // MetricQueryList // required
 *     { // MetricQuery
 *       MetricName: "STRING_VALUE", // required
 *       ResourceArn: "STRING_VALUE", // required
 *       MetricStat: "Min" || "Max" || "Avg" || "Count" || "StdDev" || "Last", // required
 *       Period: "OneMinute" || "FiveMinute" || "OneHour" || "IterationNumber", // required
 *       XAxisType: "IterationNumber" || "Timestamp", // required
 *       Start: Number("long"),
 *       End: Number("long"),
 *     },
 *   ],
 * };
 * const command = new BatchGetMetricsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetMetricsResponse
 * //   MetricQueryResults: [ // MetricQueryResultList
 * //     { // MetricQueryResult
 * //       Status: "Complete" || "Truncated" || "InternalError" || "ValidationError", // required
 * //       Message: "STRING_VALUE",
 * //       XAxisValues: [ // XAxisValues // required
 * //         Number("long"),
 * //       ],
 * //       MetricValues: [ // MetricValues // required
 * //         Number("double"),
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetMetricsCommandInput - {@link BatchGetMetricsCommandInput}
 * @returns {@link BatchGetMetricsCommandOutput}
 * @see {@link BatchGetMetricsCommandInput} for command's `input` shape.
 * @see {@link BatchGetMetricsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerMetricsClientResolvedConfig | config} for SageMakerMetricsClient's `config` shape.
 *
 * @throws {@link SageMakerMetricsServiceException}
 * <p>Base exception class for all service exceptions from SageMakerMetrics service.</p>
 *
 *
 * @public
 */
export class BatchGetMetricsCommand extends $Command
  .classBuilder<
    BatchGetMetricsCommandInput,
    BatchGetMetricsCommandOutput,
    SageMakerMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerMetricsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMakerMetricsService", "BatchGetMetrics", {})
  .n("SageMakerMetricsClient", "BatchGetMetricsCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetMetricsCommand)
  .de(de_BatchGetMetricsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetMetricsRequest;
      output: BatchGetMetricsResponse;
    };
    sdk: {
      input: BatchGetMetricsCommandInput;
      output: BatchGetMetricsCommandOutput;
    };
  };
}

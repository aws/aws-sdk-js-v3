// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { GetDataQualityMetricsRequest, GetDataQualityMetricsResponse } from "../models/models_0";
import { GetDataQualityMetrics } from "../schemas/schemas_3_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataQualityMetricsCommand}.
 */
export interface GetDataQualityMetricsCommandInput extends GetDataQualityMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetDataQualityMetricsCommand}.
 */
export interface GetDataQualityMetricsCommandOutput extends GetDataQualityMetricsResponse, __MetadataBearer {}

/**
 * <p>Returns details about the requested data quality metrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetDataQualityMetricsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetDataQualityMetricsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // GetDataQualityMetricsRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   MetricSetArn: "STRING_VALUE",
 * };
 * const command = new GetDataQualityMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetDataQualityMetricsResponse
 * //   AnomalyDetectorDataQualityMetricList: [ // AnomalyDetectorDataQualityMetricList
 * //     { // AnomalyDetectorDataQualityMetric
 * //       StartTimestamp: new Date("TIMESTAMP"),
 * //       MetricSetDataQualityMetricList: [ // MetricSetDataQualityMetricList
 * //         { // MetricSetDataQualityMetric
 * //           MetricSetArn: "STRING_VALUE",
 * //           DataQualityMetricList: [ // DataQualityMetricList
 * //             { // DataQualityMetric
 * //               MetricType: "COLUMN_COMPLETENESS" || "DIMENSION_UNIQUENESS" || "TIME_SERIES_COUNT" || "ROWS_PROCESSED" || "ROWS_PARTIAL_COMPLIANCE" || "INVALID_ROWS_COMPLIANCE" || "BACKTEST_TRAINING_DATA_START_TIME_STAMP" || "BACKTEST_TRAINING_DATA_END_TIME_STAMP" || "BACKTEST_INFERENCE_DATA_START_TIME_STAMP" || "BACKTEST_INFERENCE_DATA_END_TIME_STAMP",
 * //               MetricDescription: "STRING_VALUE",
 * //               RelatedColumnName: "STRING_VALUE",
 * //               MetricValue: Number("double"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDataQualityMetricsCommandInput - {@link GetDataQualityMetricsCommandInput}
 * @returns {@link GetDataQualityMetricsCommandOutput}
 * @see {@link GetDataQualityMetricsCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityMetricsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 *
 * @public
 */
export class GetDataQualityMetricsCommand extends $Command
  .classBuilder<
    GetDataQualityMetricsCommandInput,
    GetDataQualityMetricsCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LookoutMetrics", "GetDataQualityMetrics", {})
  .n("LookoutMetricsClient", "GetDataQualityMetricsCommand")
  .sc(GetDataQualityMetrics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataQualityMetricsRequest;
      output: GetDataQualityMetricsResponse;
    };
    sdk: {
      input: GetDataQualityMetricsCommandInput;
      output: GetDataQualityMetricsCommandOutput;
    };
  };
}

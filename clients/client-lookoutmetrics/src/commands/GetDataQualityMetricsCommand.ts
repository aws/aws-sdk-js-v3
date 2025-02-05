// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { GetDataQualityMetricsRequest, GetDataQualityMetricsResponse } from "../models/models_0";
import { de_GetDataQualityMetricsCommand, se_GetDataQualityMetricsCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutMetrics", "GetDataQualityMetrics", {})
  .n("LookoutMetricsClient", "GetDataQualityMetricsCommand")
  .f(void 0, void 0)
  .ser(se_GetDataQualityMetricsCommand)
  .de(de_GetDataQualityMetricsCommand)
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

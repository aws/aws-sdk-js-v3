// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { ListAnomalyGroupTimeSeriesRequest, ListAnomalyGroupTimeSeriesResponse } from "../models/models_0";
import { de_ListAnomalyGroupTimeSeriesCommand, se_ListAnomalyGroupTimeSeriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnomalyGroupTimeSeriesCommand}.
 */
export interface ListAnomalyGroupTimeSeriesCommandInput extends ListAnomalyGroupTimeSeriesRequest {}
/**
 * @public
 *
 * The output of {@link ListAnomalyGroupTimeSeriesCommand}.
 */
export interface ListAnomalyGroupTimeSeriesCommandOutput extends ListAnomalyGroupTimeSeriesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of anomalous metrics for a measure in an anomaly group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyGroupTimeSeriesCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyGroupTimeSeriesCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // ListAnomalyGroupTimeSeriesRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   AnomalyGroupId: "STRING_VALUE", // required
 *   MetricName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAnomalyGroupTimeSeriesCommand(input);
 * const response = await client.send(command);
 * // { // ListAnomalyGroupTimeSeriesResponse
 * //   AnomalyGroupId: "STRING_VALUE",
 * //   MetricName: "STRING_VALUE",
 * //   TimestampList: [ // TimestampList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TimeSeriesList: [ // TimeSeriesList
 * //     { // TimeSeries
 * //       TimeSeriesId: "STRING_VALUE", // required
 * //       DimensionList: [ // DimensionNameValueList // required
 * //         { // DimensionNameValue
 * //           DimensionName: "STRING_VALUE", // required
 * //           DimensionValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       MetricValueList: [ // MetricValueList // required
 * //         Number("double"),
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAnomalyGroupTimeSeriesCommandInput - {@link ListAnomalyGroupTimeSeriesCommandInput}
 * @returns {@link ListAnomalyGroupTimeSeriesCommandOutput}
 * @see {@link ListAnomalyGroupTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyGroupTimeSeriesCommandOutput} for command's `response` shape.
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
export class ListAnomalyGroupTimeSeriesCommand extends $Command
  .classBuilder<
    ListAnomalyGroupTimeSeriesCommandInput,
    ListAnomalyGroupTimeSeriesCommandOutput,
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
  .s("LookoutMetrics", "ListAnomalyGroupTimeSeries", {})
  .n("LookoutMetricsClient", "ListAnomalyGroupTimeSeriesCommand")
  .f(void 0, void 0)
  .ser(se_ListAnomalyGroupTimeSeriesCommand)
  .de(de_ListAnomalyGroupTimeSeriesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnomalyGroupTimeSeriesRequest;
      output: ListAnomalyGroupTimeSeriesResponse;
    };
    sdk: {
      input: ListAnomalyGroupTimeSeriesCommandInput;
      output: ListAnomalyGroupTimeSeriesCommandOutput;
    };
  };
}

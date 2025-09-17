// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListMonitorEvaluationsRequest, ListMonitorEvaluationsResponse } from "../models/models_0";
import { de_ListMonitorEvaluationsCommand, se_ListMonitorEvaluationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMonitorEvaluationsCommand}.
 */
export interface ListMonitorEvaluationsCommandInput extends ListMonitorEvaluationsRequest {}
/**
 * @public
 *
 * The output of {@link ListMonitorEvaluationsCommand}.
 */
export interface ListMonitorEvaluationsCommandOutput extends ListMonitorEvaluationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the monitoring evaluation results and predictor events collected by
 *          the monitor resource during different windows of time.</p>
 *          <p>For information about monitoring see <a>predictor-monitoring</a>. For
 *          more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListMonitorEvaluationsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListMonitorEvaluationsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ListMonitorEvaluationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   MonitorArn: "STRING_VALUE", // required
 *   Filters: [ // Filters
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Condition: "IS" || "IS_NOT", // required
 *     },
 *   ],
 * };
 * const command = new ListMonitorEvaluationsCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitorEvaluationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   PredictorMonitorEvaluations: [ // PredictorMonitorEvaluations
 * //     { // PredictorMonitorEvaluation
 * //       ResourceArn: "STRING_VALUE",
 * //       MonitorArn: "STRING_VALUE",
 * //       EvaluationTime: new Date("TIMESTAMP"),
 * //       EvaluationState: "STRING_VALUE",
 * //       WindowStartDatetime: new Date("TIMESTAMP"),
 * //       WindowEndDatetime: new Date("TIMESTAMP"),
 * //       PredictorEvent: { // PredictorEvent
 * //         Detail: "STRING_VALUE",
 * //         Datetime: new Date("TIMESTAMP"),
 * //       },
 * //       MonitorDataSource: { // MonitorDataSource
 * //         DatasetImportJobArn: "STRING_VALUE",
 * //         ForecastArn: "STRING_VALUE",
 * //         PredictorArn: "STRING_VALUE",
 * //       },
 * //       MetricResults: [ // MetricResults
 * //         { // MetricResult
 * //           MetricName: "STRING_VALUE",
 * //           MetricValue: Number("double"),
 * //         },
 * //       ],
 * //       NumItemsEvaluated: Number("long"),
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMonitorEvaluationsCommandInput - {@link ListMonitorEvaluationsCommandInput}
 * @returns {@link ListMonitorEvaluationsCommandOutput}
 * @see {@link ListMonitorEvaluationsCommandInput} for command's `input` shape.
 * @see {@link ListMonitorEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 *
 * @public
 */
export class ListMonitorEvaluationsCommand extends $Command
  .classBuilder<
    ListMonitorEvaluationsCommandInput,
    ListMonitorEvaluationsCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonForecast", "ListMonitorEvaluations", {})
  .n("ForecastClient", "ListMonitorEvaluationsCommand")
  .f(void 0, void 0)
  .ser(se_ListMonitorEvaluationsCommand)
  .de(de_ListMonitorEvaluationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMonitorEvaluationsRequest;
      output: ListMonitorEvaluationsResponse;
    };
    sdk: {
      input: ListMonitorEvaluationsCommandInput;
      output: ListMonitorEvaluationsCommandOutput;
    };
  };
}

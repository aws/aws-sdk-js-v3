// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMonitorEvaluationsRequest, ListMonitorEvaluationsResponse } from "../models/models_0";
import { ListMonitorEvaluations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of the monitoring evaluation results and predictor events collected by the monitor resource during different windows of time.
 *
 * For information about monitoring see predictor-monitoring. For more information about retrieving monitoring results see [Viewing Monitoring Results](https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html).
 *
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
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The token is not valid. Tokens expire after 24 hours.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try again.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class ListMonitorEvaluationsCommand extends command<ListMonitorEvaluationsCommandInput, ListMonitorEvaluationsCommandOutput>(
  _ep0,
  _mw0,
  "ListMonitorEvaluations",
  ListMonitorEvaluations$
) {
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

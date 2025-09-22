// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListPredictorBacktestExportJobsRequest, ListPredictorBacktestExportJobsResponse } from "../models/models_0";
import { ListPredictorBacktestExportJobs } from "../schemas/schemas_3_ListPredictorBacktestExportJobs";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPredictorBacktestExportJobsCommand}.
 */
export interface ListPredictorBacktestExportJobsCommandInput extends ListPredictorBacktestExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListPredictorBacktestExportJobsCommand}.
 */
export interface ListPredictorBacktestExportJobsCommandOutput
  extends ListPredictorBacktestExportJobsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a
 *             summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p>
 *          <p>To retrieve the complete set of properties for a particular backtest export job, use
 *             the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListPredictorBacktestExportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListPredictorBacktestExportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ListPredictorBacktestExportJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Condition: "IS" || "IS_NOT", // required
 *     },
 *   ],
 * };
 * const command = new ListPredictorBacktestExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListPredictorBacktestExportJobsResponse
 * //   PredictorBacktestExportJobs: [ // PredictorBacktestExportJobs
 * //     { // PredictorBacktestExportJobSummary
 * //       PredictorBacktestExportJobArn: "STRING_VALUE",
 * //       PredictorBacktestExportJobName: "STRING_VALUE",
 * //       Destination: { // DataDestination
 * //         S3Config: { // S3Config
 * //           Path: "STRING_VALUE", // required
 * //           RoleArn: "STRING_VALUE", // required
 * //           KMSKeyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPredictorBacktestExportJobsCommandInput - {@link ListPredictorBacktestExportJobsCommandInput}
 * @returns {@link ListPredictorBacktestExportJobsCommandOutput}
 * @see {@link ListPredictorBacktestExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListPredictorBacktestExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 *
 * @public
 */
export class ListPredictorBacktestExportJobsCommand extends $Command
  .classBuilder<
    ListPredictorBacktestExportJobsCommandInput,
    ListPredictorBacktestExportJobsCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "ListPredictorBacktestExportJobs", {})
  .n("ForecastClient", "ListPredictorBacktestExportJobsCommand")
  .sc(ListPredictorBacktestExportJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPredictorBacktestExportJobsRequest;
      output: ListPredictorBacktestExportJobsResponse;
    };
    sdk: {
      input: ListPredictorBacktestExportJobsCommandInput;
      output: ListPredictorBacktestExportJobsCommandOutput;
    };
  };
}

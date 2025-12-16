// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import type { ListForecastExportJobsRequest, ListForecastExportJobsResponse } from "../models/models_0";
import { ListForecastExportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListForecastExportJobsCommand}.
 */
export interface ListForecastExportJobsCommandInput extends ListForecastExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListForecastExportJobsCommand}.
 */
export interface ListForecastExportJobsCommandOutput extends ListForecastExportJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation
 *       returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the
 *       complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a>
 *       operation. You can filter the list using an array of <a>Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListForecastExportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListForecastExportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ListForecastExportJobsRequest
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
 * const command = new ListForecastExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListForecastExportJobsResponse
 * //   ForecastExportJobs: [ // ForecastExportJobs
 * //     { // ForecastExportJobSummary
 * //       ForecastExportJobArn: "STRING_VALUE",
 * //       ForecastExportJobName: "STRING_VALUE",
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
 * @param ListForecastExportJobsCommandInput - {@link ListForecastExportJobsCommandInput}
 * @returns {@link ListForecastExportJobsCommandOutput}
 * @see {@link ListForecastExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListForecastExportJobsCommandOutput} for command's `response` shape.
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
export class ListForecastExportJobsCommand extends $Command
  .classBuilder<
    ListForecastExportJobsCommandInput,
    ListForecastExportJobsCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "ListForecastExportJobs", {})
  .n("ForecastClient", "ListForecastExportJobsCommand")
  .sc(ListForecastExportJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListForecastExportJobsRequest;
      output: ListForecastExportJobsResponse;
    };
    sdk: {
      input: ListForecastExportJobsCommandInput;
      output: ListForecastExportJobsCommandOutput;
    };
  };
}

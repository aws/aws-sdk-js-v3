// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListDatasetImportJobsRequest, ListDatasetImportJobsResponse } from "../models/models_0";
import { ListDatasetImportJobs } from "../schemas/schemas_28_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetImportJobsCommand}.
 */
export interface ListDatasetImportJobsCommandInput extends ListDatasetImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetImportJobsCommand}.
 */
export interface ListDatasetImportJobsCommandOutput extends ListDatasetImportJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>
 *       operation. For each import job, this operation returns a summary of its properties, including
 *       its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
 *       ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>
 *       operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListDatasetImportJobsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListDatasetImportJobsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ListDatasetImportJobsRequest
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
 * const command = new ListDatasetImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetImportJobsResponse
 * //   DatasetImportJobs: [ // DatasetImportJobs
 * //     { // DatasetImportJobSummary
 * //       DatasetImportJobArn: "STRING_VALUE",
 * //       DatasetImportJobName: "STRING_VALUE",
 * //       DataSource: { // DataSource
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
 * //       ImportMode: "FULL" || "INCREMENTAL",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetImportJobsCommandInput - {@link ListDatasetImportJobsCommandInput}
 * @returns {@link ListDatasetImportJobsCommandOutput}
 * @see {@link ListDatasetImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetImportJobsCommandOutput} for command's `response` shape.
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
export class ListDatasetImportJobsCommand extends $Command
  .classBuilder<
    ListDatasetImportJobsCommandInput,
    ListDatasetImportJobsCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "ListDatasetImportJobs", {})
  .n("ForecastClient", "ListDatasetImportJobsCommand")
  .sc(ListDatasetImportJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetImportJobsRequest;
      output: ListDatasetImportJobsResponse;
    };
    sdk: {
      input: ListDatasetImportJobsCommandInput;
      output: ListDatasetImportJobsCommandOutput;
    };
  };
}

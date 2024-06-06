// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDatasetImportJobsRequest, ListDatasetImportJobsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_ListDatasetImportJobsCommand, se_ListDatasetImportJobsCommand } from "../protocols/Aws_json1_1";

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
 * <p>Returns a list of dataset import jobs that use the given dataset. When
 *       a dataset is not specified, all the dataset import jobs associated with
 *       the account are listed. The response provides the properties for each
 *       dataset import job, including the Amazon Resource Name (ARN). For more
 *       information on dataset import jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>. For more information on datasets, see
 *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetImportJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetImportJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // ListDatasetImportJobsRequest
 *   datasetArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDatasetImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetImportJobsResponse
 * //   datasetImportJobs: [ // DatasetImportJobs
 * //     { // DatasetImportJobSummary
 * //       datasetImportJobArn: "STRING_VALUE",
 * //       jobName: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //       importMode: "FULL" || "INCREMENTAL",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetImportJobsCommandInput - {@link ListDatasetImportJobsCommandInput}
 * @returns {@link ListDatasetImportJobsCommandOutput}
 * @see {@link ListDatasetImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetImportJobsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 * @public
 */
export class ListDatasetImportJobsCommand extends $Command
  .classBuilder<
    ListDatasetImportJobsCommandInput,
    ListDatasetImportJobsCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "ListDatasetImportJobs", {})
  .n("PersonalizeClient", "ListDatasetImportJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListDatasetImportJobsCommand)
  .de(de_ListDatasetImportJobsCommand)
  .build() {}

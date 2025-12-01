// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDatasetExportJobsRequest, ListDatasetExportJobsResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListDatasetExportJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetExportJobsCommand}.
 */
export interface ListDatasetExportJobsCommandInput extends ListDatasetExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetExportJobsCommand}.
 */
export interface ListDatasetExportJobsCommandOutput extends ListDatasetExportJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of dataset export jobs that use the given dataset. When
 *       a dataset is not specified, all the dataset export jobs associated with
 *       the account are listed. The response provides the properties for each
 *       dataset export job, including the Amazon Resource Name (ARN). For more
 *       information on dataset export jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetExportJob.html">CreateDatasetExportJob</a>. For more information on datasets, see
 *         <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetExportJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetExportJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // ListDatasetExportJobsRequest
 *   datasetArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDatasetExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetExportJobsResponse
 * //   datasetExportJobs: [ // DatasetExportJobs
 * //     { // DatasetExportJobSummary
 * //       datasetExportJobArn: "STRING_VALUE",
 * //       jobName: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetExportJobsCommandInput - {@link ListDatasetExportJobsCommandInput}
 * @returns {@link ListDatasetExportJobsCommandOutput}
 * @see {@link ListDatasetExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetExportJobsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListDatasetExportJobsCommand extends $Command
  .classBuilder<
    ListDatasetExportJobsCommandInput,
    ListDatasetExportJobsCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "ListDatasetExportJobs", {})
  .n("PersonalizeClient", "ListDatasetExportJobsCommand")
  .sc(ListDatasetExportJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetExportJobsRequest;
      output: ListDatasetExportJobsResponse;
    };
    sdk: {
      input: ListDatasetExportJobsCommandInput;
      output: ListDatasetExportJobsCommandOutput;
    };
  };
}

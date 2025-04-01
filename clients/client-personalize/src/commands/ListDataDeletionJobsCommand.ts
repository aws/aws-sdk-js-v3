// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataDeletionJobsRequest, ListDataDeletionJobsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_ListDataDeletionJobsCommand, se_ListDataDeletionJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataDeletionJobsCommand}.
 */
export interface ListDataDeletionJobsCommandInput extends ListDataDeletionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataDeletionJobsCommand}.
 */
export interface ListDataDeletionJobsCommandOutput extends ListDataDeletionJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of data deletion jobs for a dataset group ordered by creation time,
 *       with the most recent first.
 *       When
 *       a dataset group is not specified, all the data deletion jobs associated with
 *       the account are listed. The response provides the properties for each
 *       job, including the Amazon Resource Name (ARN). For more
 *       information on data deletion jobs, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/delete-records.html">Deleting users</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDataDeletionJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDataDeletionJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // ListDataDeletionJobsRequest
 *   datasetGroupArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataDeletionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataDeletionJobsResponse
 * //   dataDeletionJobs: [ // DataDeletionJobs
 * //     { // DataDeletionJobSummary
 * //       dataDeletionJobArn: "STRING_VALUE",
 * //       datasetGroupArn: "STRING_VALUE",
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
 * @param ListDataDeletionJobsCommandInput - {@link ListDataDeletionJobsCommandInput}
 * @returns {@link ListDataDeletionJobsCommandOutput}
 * @see {@link ListDataDeletionJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataDeletionJobsCommandOutput} for command's `response` shape.
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
export class ListDataDeletionJobsCommand extends $Command
  .classBuilder<
    ListDataDeletionJobsCommandInput,
    ListDataDeletionJobsCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "ListDataDeletionJobs", {})
  .n("PersonalizeClient", "ListDataDeletionJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataDeletionJobsCommand)
  .de(de_ListDataDeletionJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataDeletionJobsRequest;
      output: ListDataDeletionJobsResponse;
    };
    sdk: {
      input: ListDataDeletionJobsCommandInput;
      output: ListDataDeletionJobsCommandOutput;
    };
  };
}

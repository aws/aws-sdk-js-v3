// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListBatchInferenceJobsRequest, ListBatchInferenceJobsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_ListBatchInferenceJobsCommand, se_ListBatchInferenceJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBatchInferenceJobsCommand}.
 */
export interface ListBatchInferenceJobsCommandInput extends ListBatchInferenceJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchInferenceJobsCommand}.
 */
export interface ListBatchInferenceJobsCommandOutput extends ListBatchInferenceJobsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the batch inference jobs that have been performed off of a solution
 *       version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListBatchInferenceJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListBatchInferenceJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // ListBatchInferenceJobsRequest
 *   solutionVersionArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBatchInferenceJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchInferenceJobsResponse
 * //   batchInferenceJobs: [ // BatchInferenceJobs
 * //     { // BatchInferenceJobSummary
 * //       batchInferenceJobArn: "STRING_VALUE",
 * //       jobName: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //       solutionVersionArn: "STRING_VALUE",
 * //       batchInferenceJobMode: "BATCH_INFERENCE" || "THEME_GENERATION",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBatchInferenceJobsCommandInput - {@link ListBatchInferenceJobsCommandInput}
 * @returns {@link ListBatchInferenceJobsCommandOutput}
 * @see {@link ListBatchInferenceJobsCommandInput} for command's `input` shape.
 * @see {@link ListBatchInferenceJobsCommandOutput} for command's `response` shape.
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
export class ListBatchInferenceJobsCommand extends $Command
  .classBuilder<
    ListBatchInferenceJobsCommandInput,
    ListBatchInferenceJobsCommandOutput,
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
  .s("AmazonPersonalize", "ListBatchInferenceJobs", {})
  .n("PersonalizeClient", "ListBatchInferenceJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListBatchInferenceJobsCommand)
  .de(de_ListBatchInferenceJobsCommand)
  .build() {}

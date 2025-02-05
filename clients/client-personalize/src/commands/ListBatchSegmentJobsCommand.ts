// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListBatchSegmentJobsRequest, ListBatchSegmentJobsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_ListBatchSegmentJobsCommand, se_ListBatchSegmentJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBatchSegmentJobsCommand}.
 */
export interface ListBatchSegmentJobsCommandInput extends ListBatchSegmentJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchSegmentJobsCommand}.
 */
export interface ListBatchSegmentJobsCommandOutput extends ListBatchSegmentJobsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the batch segment jobs that have been performed off of a solution
 *       version that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListBatchSegmentJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListBatchSegmentJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PersonalizeClient(config);
 * const input = { // ListBatchSegmentJobsRequest
 *   solutionVersionArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBatchSegmentJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchSegmentJobsResponse
 * //   batchSegmentJobs: [ // BatchSegmentJobs
 * //     { // BatchSegmentJobSummary
 * //       batchSegmentJobArn: "STRING_VALUE",
 * //       jobName: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //       solutionVersionArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBatchSegmentJobsCommandInput - {@link ListBatchSegmentJobsCommandInput}
 * @returns {@link ListBatchSegmentJobsCommandOutput}
 * @see {@link ListBatchSegmentJobsCommandInput} for command's `input` shape.
 * @see {@link ListBatchSegmentJobsCommandOutput} for command's `response` shape.
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
export class ListBatchSegmentJobsCommand extends $Command
  .classBuilder<
    ListBatchSegmentJobsCommandInput,
    ListBatchSegmentJobsCommandOutput,
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
  .s("AmazonPersonalize", "ListBatchSegmentJobs", {})
  .n("PersonalizeClient", "ListBatchSegmentJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListBatchSegmentJobsCommand)
  .de(de_ListBatchSegmentJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBatchSegmentJobsRequest;
      output: ListBatchSegmentJobsResponse;
    };
    sdk: {
      input: ListBatchSegmentJobsCommandInput;
      output: ListBatchSegmentJobsCommandOutput;
    };
  };
}

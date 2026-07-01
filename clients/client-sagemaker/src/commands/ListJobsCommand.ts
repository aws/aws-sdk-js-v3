// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListJobsRequest, ListJobsResponse } from "../models/models_4";
import { ListJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsResponse, __MetadataBearer {}

/**
 * <p>Lists jobs in a specified category. You can filter results by creation time, last modified time, name, and status. Results are sorted by the field you specify in <code>SortBy</code>. Use pagination to retrieve large result sets efficiently.</p> <p>The following operations are related to <code>ListJobs</code>:</p> <ul> <li> <p> <code>CreateJob</code> </p> </li> <li> <p> <code>DescribeJob</code> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListJobsRequest
 *   JobCategory: "AgentRFT" || "AgentRFTEvaluation", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   StatusEquals: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped" || "Deleting" || "DeleteFailed",
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsResponse
 * //   NextToken: "STRING_VALUE",
 * //   JobSummaries: [ // JobSummaries // required
 * //     { // JobSummary
 * //       JobArn: "STRING_VALUE", // required
 * //       JobName: "STRING_VALUE", // required
 * //       JobCategory: "AgentRFT" || "AgentRFTEvaluation", // required
 * //       JobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped" || "Deleting" || "DeleteFailed", // required
 * //       JobSecondaryStatus: "Starting" || "Downloading" || "Training" || "Uploading" || "Stopping" || "Stopped" || "MaxRuntimeExceeded" || "Interrupted" || "Failed" || "Completed" || "Restarting" || "Pending" || "Evaluating" || "Deleting" || "DeleteFailed", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListJobsCommand extends command<ListJobsCommandInput, ListJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListJobs",
  ListJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobsRequest;
      output: ListJobsResponse;
    };
    sdk: {
      input: ListJobsCommandInput;
      output: ListJobsCommandOutput;
    };
  };
}

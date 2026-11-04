// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTrainingJobsRequest, ListTrainingJobsResponse } from "../models/models_4";
import { ListTrainingJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTrainingJobsCommand}.
 */
export interface ListTrainingJobsCommandInput extends ListTrainingJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrainingJobsCommand}.
 */
export interface ListTrainingJobsCommandOutput extends ListTrainingJobsResponse, __MetadataBearer {}

/**
 * Lists training jobs.
 *
 * > **Note:**
 * >
 * > When `StatusEquals` and `MaxResults` are set at the same time, the `MaxResults` number of training jobs are first retrieved ignoring the `StatusEquals` parameter and then they are filtered by the `StatusEquals` parameter, which is returned as a response.
 * >
 * > For example, if `ListTrainingJobs` is invoked with the following parameters:
 * >
 * > `\{ ... MaxResults: 100, StatusEquals: InProgress ... \}`
 * >
 * > First, 100 trainings jobs with any status, including those other than `InProgress`, are selected (sorted according to the creation time, from the most current to the oldest). Next, those with a status of `InProgress` are returned.
 * >
 * > You can quickly test the API using the following Amazon Web Services CLI code.
 * >
 * > `aws sagemaker list-training-jobs --max-results 100 --status-equals InProgress`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrainingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrainingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListTrainingJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   StatusEquals: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped" || "Deleting",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   WarmPoolStatusEquals: "Available" || "Terminated" || "Reused" || "InUse",
 *   TrainingPlanArnEquals: "STRING_VALUE",
 * };
 * const command = new ListTrainingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrainingJobsResponse
 * //   TrainingJobSummaries: [ // TrainingJobSummaries // required
 * //     { // TrainingJobSummary
 * //       TrainingJobName: "STRING_VALUE", // required
 * //       TrainingJobArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       TrainingEndTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       TrainingJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped" || "Deleting", // required
 * //       SecondaryStatus: "Starting" || "LaunchingMLInstances" || "PreparingTrainingStack" || "Downloading" || "DownloadingTrainingImage" || "Training" || "Uploading" || "Stopping" || "Stopped" || "MaxRuntimeExceeded" || "Completed" || "Failed" || "Interrupted" || "MaxWaitTimeExceeded" || "Updating" || "Restarting" || "Pending",
 * //       WarmPoolStatus: { // WarmPoolStatus
 * //         Status: "Available" || "Terminated" || "Reused" || "InUse", // required
 * //         ResourceRetainedBillableTimeInSeconds: Number("int"),
 * //         ReusedByJob: "STRING_VALUE",
 * //       },
 * //       TrainingPlanArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrainingJobsCommandInput - {@link ListTrainingJobsCommandInput}
 * @returns {@link ListTrainingJobsCommandOutput}
 * @see {@link ListTrainingJobsCommandInput} for command's `input` shape.
 * @see {@link ListTrainingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class ListTrainingJobsCommand extends command<ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListTrainingJobs",
  ListTrainingJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrainingJobsRequest;
      output: ListTrainingJobsResponse;
    };
    sdk: {
      input: ListTrainingJobsCommandInput;
      output: ListTrainingJobsCommandOutput;
    };
  };
}

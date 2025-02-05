// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTrainingJobsRequest, ListTrainingJobsResponse } from "../models/models_4";
import { de_ListTrainingJobsCommand, se_ListTrainingJobsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists training jobs.</p>
 *          <note>
 *             <p>When <code>StatusEquals</code> and <code>MaxResults</code> are set at the same
 *                 time, the <code>MaxResults</code> number of training jobs are first retrieved
 *                 ignoring the <code>StatusEquals</code> parameter and then they are filtered by the
 *                     <code>StatusEquals</code> parameter, which is returned as a response.</p>
 *             <p>For example, if <code>ListTrainingJobs</code> is invoked with the following
 *                 parameters:</p>
 *             <p>
 *                <code>\{ ... MaxResults: 100, StatusEquals: InProgress ... \}</code>
 *             </p>
 *             <p>First, 100 trainings jobs with any status, including those other than
 *                     <code>InProgress</code>, are selected (sorted according to the creation time,
 *                 from the most current to the oldest). Next, those with a status of
 *                     <code>InProgress</code> are returned.</p>
 *             <p>You can quickly test the API using the following Amazon Web Services CLI
 *                 code.</p>
 *             <p>
 *                <code>aws sagemaker list-training-jobs --max-results 100 --status-equals
 *                     InProgress</code>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrainingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrainingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // ListTrainingJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   StatusEquals: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
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
 * //       TrainingJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
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
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListTrainingJobsCommand extends $Command
  .classBuilder<
    ListTrainingJobsCommandInput,
    ListTrainingJobsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListTrainingJobs", {})
  .n("SageMakerClient", "ListTrainingJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListTrainingJobsCommand)
  .de(de_ListTrainingJobsCommand)
  .build() {
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

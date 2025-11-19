// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListHyperParameterTuningJobsRequest, ListHyperParameterTuningJobsResponse } from "../models/models_3";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListHyperParameterTuningJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHyperParameterTuningJobsCommand}.
 */
export interface ListHyperParameterTuningJobsCommandInput extends ListHyperParameterTuningJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListHyperParameterTuningJobsCommand}.
 */
export interface ListHyperParameterTuningJobsCommandOutput
  extends ListHyperParameterTuningJobsResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobSummary.html">HyperParameterTuningJobSummary</a> objects that describe the hyperparameter tuning jobs launched in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHyperParameterTuningJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHyperParameterTuningJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListHyperParameterTuningJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortBy: "Name" || "Status" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NameContains: "STRING_VALUE",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   StatusEquals: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping" || "Deleting" || "DeleteFailed",
 * };
 * const command = new ListHyperParameterTuningJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListHyperParameterTuningJobsResponse
 * //   HyperParameterTuningJobSummaries: [ // HyperParameterTuningJobSummaries // required
 * //     { // HyperParameterTuningJobSummary
 * //       HyperParameterTuningJobName: "STRING_VALUE", // required
 * //       HyperParameterTuningJobArn: "STRING_VALUE", // required
 * //       HyperParameterTuningJobStatus: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping" || "Deleting" || "DeleteFailed", // required
 * //       Strategy: "Bayesian" || "Random" || "Hyperband" || "Grid", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       HyperParameterTuningEndTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       TrainingJobStatusCounters: { // TrainingJobStatusCounters
 * //         Completed: Number("int"),
 * //         InProgress: Number("int"),
 * //         RetryableError: Number("int"),
 * //         NonRetryableError: Number("int"),
 * //         Stopped: Number("int"),
 * //       },
 * //       ObjectiveStatusCounters: { // ObjectiveStatusCounters
 * //         Succeeded: Number("int"),
 * //         Pending: Number("int"),
 * //         Failed: Number("int"),
 * //       },
 * //       ResourceLimits: { // ResourceLimits
 * //         MaxNumberOfTrainingJobs: Number("int"),
 * //         MaxParallelTrainingJobs: Number("int"), // required
 * //         MaxRuntimeInSeconds: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHyperParameterTuningJobsCommandInput - {@link ListHyperParameterTuningJobsCommandInput}
 * @returns {@link ListHyperParameterTuningJobsCommandOutput}
 * @see {@link ListHyperParameterTuningJobsCommandInput} for command's `input` shape.
 * @see {@link ListHyperParameterTuningJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListHyperParameterTuningJobsCommand extends $Command
  .classBuilder<
    ListHyperParameterTuningJobsCommandInput,
    ListHyperParameterTuningJobsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListHyperParameterTuningJobs", {})
  .n("SageMakerClient", "ListHyperParameterTuningJobsCommand")
  .sc(ListHyperParameterTuningJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHyperParameterTuningJobsRequest;
      output: ListHyperParameterTuningJobsResponse;
    };
    sdk: {
      input: ListHyperParameterTuningJobsCommandInput;
      output: ListHyperParameterTuningJobsCommandOutput;
    };
  };
}

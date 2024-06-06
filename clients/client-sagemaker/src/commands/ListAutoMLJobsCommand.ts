// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAutoMLJobsRequest, ListAutoMLJobsResponse } from "../models/models_3";
import { de_ListAutoMLJobsCommand, se_ListAutoMLJobsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutoMLJobsCommand}.
 */
export interface ListAutoMLJobsCommandInput extends ListAutoMLJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAutoMLJobsCommand}.
 */
export interface ListAutoMLJobsCommandOutput extends ListAutoMLJobsResponse, __MetadataBearer {}

/**
 * <p>Request a list of jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListAutoMLJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListAutoMLJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListAutoMLJobsRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   StatusEquals: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping",
 *   SortOrder: "Ascending" || "Descending",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAutoMLJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutoMLJobsResponse
 * //   AutoMLJobSummaries: [ // AutoMLJobSummaries // required
 * //     { // AutoMLJobSummary
 * //       AutoMLJobName: "STRING_VALUE", // required
 * //       AutoMLJobArn: "STRING_VALUE", // required
 * //       AutoMLJobStatus: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping", // required
 * //       AutoMLJobSecondaryStatus: "Starting" || "MaxCandidatesReached" || "Failed" || "Stopped" || "MaxAutoMLJobRuntimeReached" || "Stopping" || "CandidateDefinitionsGenerated" || "Completed" || "ExplainabilityError" || "DeployingModel" || "ModelDeploymentError" || "GeneratingModelInsightsReport" || "ModelInsightsError" || "AnalyzingData" || "FeatureEngineering" || "ModelTuning" || "GeneratingExplainabilityReport" || "TrainingModels" || "PreTraining", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       FailureReason: "STRING_VALUE",
 * //       PartialFailureReasons: [ // AutoMLPartialFailureReasons
 * //         { // AutoMLPartialFailureReason
 * //           PartialFailureMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutoMLJobsCommandInput - {@link ListAutoMLJobsCommandInput}
 * @returns {@link ListAutoMLJobsCommandOutput}
 * @see {@link ListAutoMLJobsCommandInput} for command's `input` shape.
 * @see {@link ListAutoMLJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListAutoMLJobsCommand extends $Command
  .classBuilder<
    ListAutoMLJobsCommandInput,
    ListAutoMLJobsCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListAutoMLJobs", {})
  .n("SageMakerClient", "ListAutoMLJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListAutoMLJobsCommand)
  .de(de_ListAutoMLJobsCommand)
  .build() {}

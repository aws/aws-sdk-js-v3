// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLabelingJobsRequest, ListLabelingJobsResponse } from "../models/models_4";
import { de_ListLabelingJobsCommand, se_ListLabelingJobsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLabelingJobsCommand}.
 */
export interface ListLabelingJobsCommandInput extends ListLabelingJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListLabelingJobsCommand}.
 */
export interface ListLabelingJobsCommandOutput extends ListLabelingJobsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of labeling jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListLabelingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListLabelingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // ListLabelingJobsRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   NameContains: "STRING_VALUE",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   StatusEquals: "Initializing" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * };
 * const command = new ListLabelingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListLabelingJobsResponse
 * //   LabelingJobSummaryList: [ // LabelingJobSummaryList
 * //     { // LabelingJobSummary
 * //       LabelingJobName: "STRING_VALUE", // required
 * //       LabelingJobArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       LabelingJobStatus: "Initializing" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //       LabelCounters: { // LabelCounters
 * //         TotalLabeled: Number("int"),
 * //         HumanLabeled: Number("int"),
 * //         MachineLabeled: Number("int"),
 * //         FailedNonRetryableError: Number("int"),
 * //         Unlabeled: Number("int"),
 * //       },
 * //       WorkteamArn: "STRING_VALUE", // required
 * //       PreHumanTaskLambdaArn: "STRING_VALUE",
 * //       AnnotationConsolidationLambdaArn: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //       LabelingJobOutput: { // LabelingJobOutput
 * //         OutputDatasetS3Uri: "STRING_VALUE", // required
 * //         FinalActiveLearningModelArn: "STRING_VALUE",
 * //       },
 * //       InputConfig: { // LabelingJobInputConfig
 * //         DataSource: { // LabelingJobDataSource
 * //           S3DataSource: { // LabelingJobS3DataSource
 * //             ManifestS3Uri: "STRING_VALUE", // required
 * //           },
 * //           SnsDataSource: { // LabelingJobSnsDataSource
 * //             SnsTopicArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         DataAttributes: { // LabelingJobDataAttributes
 * //           ContentClassifiers: [ // ContentClassifiers
 * //             "FreeOfPersonallyIdentifiableInformation" || "FreeOfAdultContent",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLabelingJobsCommandInput - {@link ListLabelingJobsCommandInput}
 * @returns {@link ListLabelingJobsCommandOutput}
 * @see {@link ListLabelingJobsCommandInput} for command's `input` shape.
 * @see {@link ListLabelingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListLabelingJobsCommand extends $Command
  .classBuilder<
    ListLabelingJobsCommandInput,
    ListLabelingJobsCommandOutput,
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
  .s("SageMaker", "ListLabelingJobs", {})
  .n("SageMakerClient", "ListLabelingJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListLabelingJobsCommand)
  .de(de_ListLabelingJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLabelingJobsRequest;
      output: ListLabelingJobsResponse;
    };
    sdk: {
      input: ListLabelingJobsCommandInput;
      output: ListLabelingJobsCommandOutput;
    };
  };
}

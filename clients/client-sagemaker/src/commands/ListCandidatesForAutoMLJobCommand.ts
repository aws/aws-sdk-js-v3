// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCandidatesForAutoMLJobRequest, ListCandidatesForAutoMLJobResponse } from "../models/models_4";
import { de_ListCandidatesForAutoMLJobCommand, se_ListCandidatesForAutoMLJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCandidatesForAutoMLJobCommand}.
 */
export interface ListCandidatesForAutoMLJobCommandInput extends ListCandidatesForAutoMLJobRequest {}
/**
 * @public
 *
 * The output of {@link ListCandidatesForAutoMLJobCommand}.
 */
export interface ListCandidatesForAutoMLJobCommandOutput extends ListCandidatesForAutoMLJobResponse, __MetadataBearer {}

/**
 * <p>List the candidates created for the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListCandidatesForAutoMLJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListCandidatesForAutoMLJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListCandidatesForAutoMLJobRequest
 *   AutoMLJobName: "STRING_VALUE", // required
 *   StatusEquals: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping",
 *   CandidateNameEquals: "STRING_VALUE",
 *   SortOrder: "Ascending" || "Descending",
 *   SortBy: "CreationTime" || "Status" || "FinalObjectiveMetricValue",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCandidatesForAutoMLJobCommand(input);
 * const response = await client.send(command);
 * // { // ListCandidatesForAutoMLJobResponse
 * //   Candidates: [ // AutoMLCandidates // required
 * //     { // AutoMLCandidate
 * //       CandidateName: "STRING_VALUE", // required
 * //       FinalAutoMLJobObjectiveMetric: { // FinalAutoMLJobObjectiveMetric
 * //         Type: "Maximize" || "Minimize",
 * //         MetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "BalancedAccuracy" || "R2" || "Recall" || "RecallMacro" || "Precision" || "PrecisionMacro" || "MAE" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss", // required
 * //         Value: Number("float"), // required
 * //         StandardMetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "BalancedAccuracy" || "R2" || "Recall" || "RecallMacro" || "Precision" || "PrecisionMacro" || "MAE" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss",
 * //       },
 * //       ObjectiveStatus: "Succeeded" || "Pending" || "Failed", // required
 * //       CandidateSteps: [ // CandidateSteps // required
 * //         { // AutoMLCandidateStep
 * //           CandidateStepType: "AWS::SageMaker::TrainingJob" || "AWS::SageMaker::TransformJob" || "AWS::SageMaker::ProcessingJob", // required
 * //           CandidateStepArn: "STRING_VALUE", // required
 * //           CandidateStepName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       CandidateStatus: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping", // required
 * //       InferenceContainers: [ // AutoMLContainerDefinitions
 * //         { // AutoMLContainerDefinition
 * //           Image: "STRING_VALUE", // required
 * //           ModelDataUrl: "STRING_VALUE", // required
 * //           Environment: { // EnvironmentMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       FailureReason: "STRING_VALUE",
 * //       CandidateProperties: { // CandidateProperties
 * //         CandidateArtifactLocations: { // CandidateArtifactLocations
 * //           Explainability: "STRING_VALUE", // required
 * //           ModelInsights: "STRING_VALUE",
 * //           BacktestResults: "STRING_VALUE",
 * //         },
 * //         CandidateMetrics: [ // MetricDataList
 * //           { // MetricDatum
 * //             MetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "BalancedAccuracy" || "R2" || "Recall" || "RecallMacro" || "Precision" || "PrecisionMacro" || "MAE" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss",
 * //             StandardMetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "LogLoss" || "InferenceLatency" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss" || "Rouge1" || "Rouge2" || "RougeL" || "RougeLSum" || "Perplexity" || "ValidationLoss" || "TrainingLoss",
 * //             Value: Number("float"),
 * //             Set: "Train" || "Validation" || "Test",
 * //           },
 * //         ],
 * //       },
 * //       InferenceContainerDefinitions: { // AutoMLInferenceContainerDefinitions
 * //         "<keys>": [
 * //           {
 * //             Image: "STRING_VALUE", // required
 * //             ModelDataUrl: "STRING_VALUE", // required
 * //             Environment: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCandidatesForAutoMLJobCommandInput - {@link ListCandidatesForAutoMLJobCommandInput}
 * @returns {@link ListCandidatesForAutoMLJobCommandOutput}
 * @see {@link ListCandidatesForAutoMLJobCommandInput} for command's `input` shape.
 * @see {@link ListCandidatesForAutoMLJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListCandidatesForAutoMLJobCommand extends $Command
  .classBuilder<
    ListCandidatesForAutoMLJobCommandInput,
    ListCandidatesForAutoMLJobCommandOutput,
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
  .s("SageMaker", "ListCandidatesForAutoMLJob", {})
  .n("SageMakerClient", "ListCandidatesForAutoMLJobCommand")
  .f(void 0, void 0)
  .ser(se_ListCandidatesForAutoMLJobCommand)
  .de(de_ListCandidatesForAutoMLJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCandidatesForAutoMLJobRequest;
      output: ListCandidatesForAutoMLJobResponse;
    };
    sdk: {
      input: ListCandidatesForAutoMLJobCommandInput;
      output: ListCandidatesForAutoMLJobCommandOutput;
    };
  };
}

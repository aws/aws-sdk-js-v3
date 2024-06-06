// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPipelineExecutionStepsRequest, ListPipelineExecutionStepsResponse } from "../models/models_4";
import { de_ListPipelineExecutionStepsCommand, se_ListPipelineExecutionStepsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPipelineExecutionStepsCommand}.
 */
export interface ListPipelineExecutionStepsCommandInput extends ListPipelineExecutionStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelineExecutionStepsCommand}.
 */
export interface ListPipelineExecutionStepsCommandOutput extends ListPipelineExecutionStepsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of <code>PipeLineExecutionStep</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListPipelineExecutionStepsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListPipelineExecutionStepsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListPipelineExecutionStepsRequest
 *   PipelineExecutionArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListPipelineExecutionStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelineExecutionStepsResponse
 * //   PipelineExecutionSteps: [ // PipelineExecutionStepList
 * //     { // PipelineExecutionStep
 * //       StepName: "STRING_VALUE",
 * //       StepDisplayName: "STRING_VALUE",
 * //       StepDescription: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       StepStatus: "Starting" || "Executing" || "Stopping" || "Stopped" || "Failed" || "Succeeded",
 * //       CacheHitResult: { // CacheHitResult
 * //         SourcePipelineExecutionArn: "STRING_VALUE",
 * //       },
 * //       FailureReason: "STRING_VALUE",
 * //       Metadata: { // PipelineExecutionStepMetadata
 * //         TrainingJob: { // TrainingJobStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         ProcessingJob: { // ProcessingJobStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         TransformJob: { // TransformJobStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         TuningJob: { // TuningJobStepMetaData
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Model: { // ModelStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         RegisterModel: { // RegisterModelStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Condition: { // ConditionStepMetadata
 * //           Outcome: "True" || "False",
 * //         },
 * //         Callback: { // CallbackStepMetadata
 * //           CallbackToken: "STRING_VALUE",
 * //           SqsQueueUrl: "STRING_VALUE",
 * //           OutputParameters: [ // OutputParameterList
 * //             { // OutputParameter
 * //               Name: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         Lambda: { // LambdaStepMetadata
 * //           Arn: "STRING_VALUE",
 * //           OutputParameters: [
 * //             {
 * //               Name: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         EMR: { // EMRStepMetadata
 * //           ClusterId: "STRING_VALUE",
 * //           StepId: "STRING_VALUE",
 * //           StepName: "STRING_VALUE",
 * //           LogFilePath: "STRING_VALUE",
 * //         },
 * //         QualityCheck: { // QualityCheckStepMetadata
 * //           CheckType: "STRING_VALUE",
 * //           BaselineUsedForDriftCheckStatistics: "STRING_VALUE",
 * //           BaselineUsedForDriftCheckConstraints: "STRING_VALUE",
 * //           CalculatedBaselineStatistics: "STRING_VALUE",
 * //           CalculatedBaselineConstraints: "STRING_VALUE",
 * //           ModelPackageGroupName: "STRING_VALUE",
 * //           ViolationReport: "STRING_VALUE",
 * //           CheckJobArn: "STRING_VALUE",
 * //           SkipCheck: true || false,
 * //           RegisterNewBaseline: true || false,
 * //         },
 * //         ClarifyCheck: { // ClarifyCheckStepMetadata
 * //           CheckType: "STRING_VALUE",
 * //           BaselineUsedForDriftCheckConstraints: "STRING_VALUE",
 * //           CalculatedBaselineConstraints: "STRING_VALUE",
 * //           ModelPackageGroupName: "STRING_VALUE",
 * //           ViolationReport: "STRING_VALUE",
 * //           CheckJobArn: "STRING_VALUE",
 * //           SkipCheck: true || false,
 * //           RegisterNewBaseline: true || false,
 * //         },
 * //         Fail: { // FailStepMetadata
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //         AutoMLJob: { // AutoMLJobStepMetadata
 * //           Arn: "STRING_VALUE",
 * //         },
 * //       },
 * //       AttemptCount: Number("int"),
 * //       SelectiveExecutionResult: { // SelectiveExecutionResult
 * //         SourcePipelineExecutionArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipelineExecutionStepsCommandInput - {@link ListPipelineExecutionStepsCommandInput}
 * @returns {@link ListPipelineExecutionStepsCommandOutput}
 * @see {@link ListPipelineExecutionStepsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineExecutionStepsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListPipelineExecutionStepsCommand extends $Command
  .classBuilder<
    ListPipelineExecutionStepsCommandInput,
    ListPipelineExecutionStepsCommandOutput,
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
  .s("SageMaker", "ListPipelineExecutionSteps", {})
  .n("SageMakerClient", "ListPipelineExecutionStepsCommand")
  .f(void 0, void 0)
  .ser(se_ListPipelineExecutionStepsCommand)
  .de(de_ListPipelineExecutionStepsCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLabelingJobRequest, DescribeLabelingJobResponse } from "../models/models_2";
import { de_DescribeLabelingJobCommand, se_DescribeLabelingJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLabelingJobCommand}.
 */
export interface DescribeLabelingJobCommandInput extends DescribeLabelingJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLabelingJobCommand}.
 */
export interface DescribeLabelingJobCommandOutput extends DescribeLabelingJobResponse, __MetadataBearer {}

/**
 * <p>Gets information about a labeling job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeLabelingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeLabelingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeLabelingJobRequest
 *   LabelingJobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeLabelingJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLabelingJobResponse
 * //   LabelingJobStatus: "Initializing" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //   LabelCounters: { // LabelCounters
 * //     TotalLabeled: Number("int"),
 * //     HumanLabeled: Number("int"),
 * //     MachineLabeled: Number("int"),
 * //     FailedNonRetryableError: Number("int"),
 * //     Unlabeled: Number("int"),
 * //   },
 * //   FailureReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   JobReferenceCode: "STRING_VALUE", // required
 * //   LabelingJobName: "STRING_VALUE", // required
 * //   LabelingJobArn: "STRING_VALUE", // required
 * //   LabelAttributeName: "STRING_VALUE",
 * //   InputConfig: { // LabelingJobInputConfig
 * //     DataSource: { // LabelingJobDataSource
 * //       S3DataSource: { // LabelingJobS3DataSource
 * //         ManifestS3Uri: "STRING_VALUE", // required
 * //       },
 * //       SnsDataSource: { // LabelingJobSnsDataSource
 * //         SnsTopicArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     DataAttributes: { // LabelingJobDataAttributes
 * //       ContentClassifiers: [ // ContentClassifiers
 * //         "FreeOfPersonallyIdentifiableInformation" || "FreeOfAdultContent",
 * //       ],
 * //     },
 * //   },
 * //   OutputConfig: { // LabelingJobOutputConfig
 * //     S3OutputPath: "STRING_VALUE", // required
 * //     KmsKeyId: "STRING_VALUE",
 * //     SnsTopicArn: "STRING_VALUE",
 * //   },
 * //   RoleArn: "STRING_VALUE", // required
 * //   LabelCategoryConfigS3Uri: "STRING_VALUE",
 * //   StoppingConditions: { // LabelingJobStoppingConditions
 * //     MaxHumanLabeledObjectCount: Number("int"),
 * //     MaxPercentageOfInputDatasetLabeled: Number("int"),
 * //   },
 * //   LabelingJobAlgorithmsConfig: { // LabelingJobAlgorithmsConfig
 * //     LabelingJobAlgorithmSpecificationArn: "STRING_VALUE", // required
 * //     InitialActiveLearningModelArn: "STRING_VALUE",
 * //     LabelingJobResourceConfig: { // LabelingJobResourceConfig
 * //       VolumeKmsKeyId: "STRING_VALUE",
 * //       VpcConfig: { // VpcConfig
 * //         SecurityGroupIds: [ // VpcSecurityGroupIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Subnets: [ // Subnets // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   HumanTaskConfig: { // HumanTaskConfig
 * //     WorkteamArn: "STRING_VALUE", // required
 * //     UiConfig: { // UiConfig
 * //       UiTemplateS3Uri: "STRING_VALUE",
 * //       HumanTaskUiArn: "STRING_VALUE",
 * //     },
 * //     PreHumanTaskLambdaArn: "STRING_VALUE", // required
 * //     TaskKeywords: [ // TaskKeywords
 * //       "STRING_VALUE",
 * //     ],
 * //     TaskTitle: "STRING_VALUE", // required
 * //     TaskDescription: "STRING_VALUE", // required
 * //     NumberOfHumanWorkersPerDataObject: Number("int"), // required
 * //     TaskTimeLimitInSeconds: Number("int"), // required
 * //     TaskAvailabilityLifetimeInSeconds: Number("int"),
 * //     MaxConcurrentTaskCount: Number("int"),
 * //     AnnotationConsolidationConfig: { // AnnotationConsolidationConfig
 * //       AnnotationConsolidationLambdaArn: "STRING_VALUE", // required
 * //     },
 * //     PublicWorkforceTaskPrice: { // PublicWorkforceTaskPrice
 * //       AmountInUsd: { // USD
 * //         Dollars: Number("int"),
 * //         Cents: Number("int"),
 * //         TenthFractionsOfACent: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   LabelingJobOutput: { // LabelingJobOutput
 * //     OutputDatasetS3Uri: "STRING_VALUE", // required
 * //     FinalActiveLearningModelArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeLabelingJobCommandInput - {@link DescribeLabelingJobCommandInput}
 * @returns {@link DescribeLabelingJobCommandOutput}
 * @see {@link DescribeLabelingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeLabelingJobCommandOutput} for command's `response` shape.
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
export class DescribeLabelingJobCommand extends $Command
  .classBuilder<
    DescribeLabelingJobCommandInput,
    DescribeLabelingJobCommandOutput,
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
  .s("SageMaker", "DescribeLabelingJob", {})
  .n("SageMakerClient", "DescribeLabelingJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLabelingJobCommand)
  .de(de_DescribeLabelingJobCommand)
  .build() {}

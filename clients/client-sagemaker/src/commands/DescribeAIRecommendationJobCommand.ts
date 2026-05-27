// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAIRecommendationJobRequest, DescribeAIRecommendationJobResponse } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeAIRecommendationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAIRecommendationJobCommand}.
 */
export interface DescribeAIRecommendationJobCommandInput extends DescribeAIRecommendationJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAIRecommendationJobCommand}.
 */
export interface DescribeAIRecommendationJobCommandOutput extends DescribeAIRecommendationJobResponse, __MetadataBearer {}

/**
 * <p>Returns details of an AI recommendation job, including its status, model source, performance targets, optimization recommendations, and deployment configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAIRecommendationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAIRecommendationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeAIRecommendationJobRequest
 *   AIRecommendationJobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeAIRecommendationJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAIRecommendationJobResponse
 * //   AIRecommendationJobName: "STRING_VALUE", // required
 * //   AIRecommendationJobArn: "STRING_VALUE", // required
 * //   AIRecommendationJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //   FailureReason: "STRING_VALUE",
 * //   ModelSource: { // AIModelSource Union: only one key present
 * //     S3: { // AIModelSourceS3
 * //       S3Uri: "STRING_VALUE",
 * //     },
 * //   },
 * //   OutputConfig: { // AIRecommendationOutputResult
 * //     S3OutputLocation: "STRING_VALUE", // required
 * //     ModelPackageGroupIdentifier: "STRING_VALUE",
 * //   },
 * //   InferenceSpecification: { // AIRecommendationInferenceSpecification
 * //     Framework: "LMI" || "VLLM",
 * //   },
 * //   AIWorkloadConfigIdentifier: "STRING_VALUE", // required
 * //   OptimizeModel: true || false,
 * //   PerformanceTarget: { // AIRecommendationPerformanceTarget
 * //     Constraints: [ // AIRecommendationConstraintList // required
 * //       { // AIRecommendationConstraint
 * //         Metric: "ttft-ms" || "throughput" || "cost", // required
 * //       },
 * //     ],
 * //   },
 * //   Recommendations: [ // AIRecommendationList
 * //     { // AIRecommendation
 * //       RecommendationDescription: "STRING_VALUE",
 * //       OptimizationDetails: [ // AIRecommendationOptimizationDetailList
 * //         { // AIRecommendationOptimizationDetail
 * //           OptimizationType: "SpeculativeDecoding" || "KernelTuning", // required
 * //           OptimizationConfig: { // AIRecommendationOptimizationConfigMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       ModelDetails: { // AIRecommendationModelDetails
 * //         ModelPackageArn: "STRING_VALUE",
 * //         InferenceSpecificationName: "STRING_VALUE",
 * //         InstanceDetails: [ // AIRecommendationInstanceDetailList
 * //           { // AIRecommendationInstanceDetail
 * //             InstanceType: "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.12xlarge" || "ml.g6.16xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.12xlarge" || "ml.g6e.16xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.4xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.p6-b200.48xlarge",
 * //             InstanceCount: Number("int"),
 * //             CopyCountPerInstance: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       DeploymentConfiguration: { // AIRecommendationDeploymentConfiguration
 * //         S3: [ // AIRecommendationDeploymentS3ChannelList
 * //           { // AIRecommendationDeploymentS3Channel
 * //             ChannelName: "STRING_VALUE",
 * //             Uri: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ImageUri: "STRING_VALUE",
 * //         InstanceType: "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.12xlarge" || "ml.g6.16xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.12xlarge" || "ml.g6e.16xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.4xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.p6-b200.48xlarge",
 * //         InstanceCount: Number("int"),
 * //         CopyCountPerInstance: Number("int"),
 * //         EnvironmentVariables: { // EnvironmentMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       AIBenchmarkJobArn: "STRING_VALUE",
 * //       ExpectedPerformance: [ // ExpectedPerformanceList
 * //         { // AIRecommendationPerformanceMetric
 * //           Metric: "STRING_VALUE", // required
 * //           Stat: "STRING_VALUE",
 * //           Value: "STRING_VALUE", // required
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   RoleArn: "STRING_VALUE", // required
 * //   ComputeSpec: { // AIRecommendationComputeSpec
 * //     InstanceTypes: [ // AIRecommendationInstanceTypeList
 * //       "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.12xlarge" || "ml.g6.16xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.12xlarge" || "ml.g6e.16xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.4xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.p6-b200.48xlarge",
 * //     ],
 * //     CapacityReservationConfig: { // AICapacityReservationConfig
 * //       CapacityReservationPreference: "capacity-reservations-only",
 * //       MlReservationArns: [ // AIMlReservationArnList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAIRecommendationJobCommandInput - {@link DescribeAIRecommendationJobCommandInput}
 * @returns {@link DescribeAIRecommendationJobCommandOutput}
 * @see {@link DescribeAIRecommendationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeAIRecommendationJobCommandOutput} for command's `response` shape.
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
export class DescribeAIRecommendationJobCommand extends $Command
  .classBuilder<
    DescribeAIRecommendationJobCommandInput,
    DescribeAIRecommendationJobCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DescribeAIRecommendationJob", {})
  .n("SageMakerClient", "DescribeAIRecommendationJobCommand")
  .sc(DescribeAIRecommendationJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAIRecommendationJobRequest;
      output: DescribeAIRecommendationJobResponse;
    };
    sdk: {
      input: DescribeAIRecommendationJobCommandInput;
      output: DescribeAIRecommendationJobCommandOutput;
    };
  };
}

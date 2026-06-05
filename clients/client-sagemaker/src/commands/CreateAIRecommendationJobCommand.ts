// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAIRecommendationJobRequest, CreateAIRecommendationJobResponse } from "../models/models_1";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateAIRecommendationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAIRecommendationJobCommand}.
 */
export interface CreateAIRecommendationJobCommandInput extends CreateAIRecommendationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateAIRecommendationJobCommand}.
 */
export interface CreateAIRecommendationJobCommandOutput extends CreateAIRecommendationJobResponse, __MetadataBearer {}

/**
 * <p>Creates a recommendation job that generates intelligent optimization recommendations for generative AI inference deployments. The job analyzes your model, workload configuration, and performance targets to recommend optimal instance types, model optimization techniques (such as quantization and speculative decoding), and deployment configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAIRecommendationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAIRecommendationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateAIRecommendationJobRequest
 *   AIRecommendationJobName: "STRING_VALUE", // required
 *   ModelSource: { // AIModelSource Union: only one key present
 *     S3: { // AIModelSourceS3
 *       S3Uri: "STRING_VALUE",
 *     },
 *   },
 *   OutputConfig: { // AIRecommendationOutputConfig
 *     S3OutputLocation: "STRING_VALUE",
 *     ModelPackageGroupIdentifier: "STRING_VALUE",
 *     MlflowConfig: { // AIMlflowConfig
 *       MlflowResourceArn: "STRING_VALUE", // required
 *       MlflowExperimentName: "STRING_VALUE",
 *       MlflowRunName: "STRING_VALUE",
 *     },
 *   },
 *   AIWorkloadConfigIdentifier: "STRING_VALUE", // required
 *   PerformanceTarget: { // AIRecommendationPerformanceTarget
 *     Constraints: [ // AIRecommendationConstraintList // required
 *       { // AIRecommendationConstraint
 *         Metric: "ttft-ms" || "throughput" || "cost", // required
 *       },
 *     ],
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   InferenceSpecification: { // AIRecommendationInferenceSpecification
 *     Framework: "LMI" || "VLLM",
 *   },
 *   OptimizeModel: true || false,
 *   ComputeSpec: { // AIRecommendationComputeSpec
 *     InstanceTypes: [ // AIRecommendationInstanceTypeList
 *       "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.g6.xlarge" || "ml.g6.2xlarge" || "ml.g6.4xlarge" || "ml.g6.8xlarge" || "ml.g6.12xlarge" || "ml.g6.16xlarge" || "ml.g6.24xlarge" || "ml.g6.48xlarge" || "ml.g6e.xlarge" || "ml.g6e.2xlarge" || "ml.g6e.4xlarge" || "ml.g6e.8xlarge" || "ml.g6e.12xlarge" || "ml.g6e.16xlarge" || "ml.g6e.24xlarge" || "ml.g6e.48xlarge" || "ml.g7e.2xlarge" || "ml.g7e.4xlarge" || "ml.g7e.8xlarge" || "ml.g7e.12xlarge" || "ml.g7e.24xlarge" || "ml.g7e.48xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.4xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.p6-b200.48xlarge",
 *     ],
 *     CapacityReservationConfig: { // AICapacityReservationConfig
 *       CapacityReservationPreference: "capacity-reservations-only",
 *       MlReservationArns: [ // AIMlReservationArnList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAIRecommendationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateAIRecommendationJobResponse
 * //   AIRecommendationJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAIRecommendationJobCommandInput - {@link CreateAIRecommendationJobCommandInput}
 * @returns {@link CreateAIRecommendationJobCommandOutput}
 * @see {@link CreateAIRecommendationJobCommandInput} for command's `input` shape.
 * @see {@link CreateAIRecommendationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
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
export class CreateAIRecommendationJobCommand extends $Command
  .classBuilder<
    CreateAIRecommendationJobCommandInput,
    CreateAIRecommendationJobCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "CreateAIRecommendationJob", {})
  .n("SageMakerClient", "CreateAIRecommendationJobCommand")
  .sc(CreateAIRecommendationJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAIRecommendationJobRequest;
      output: CreateAIRecommendationJobResponse;
    };
    sdk: {
      input: CreateAIRecommendationJobCommandInput;
      output: CreateAIRecommendationJobCommandOutput;
    };
  };
}

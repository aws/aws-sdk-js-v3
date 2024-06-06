// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateModelBiasJobDefinitionRequest, CreateModelBiasJobDefinitionResponse } from "../models/models_1";
import {
  de_CreateModelBiasJobDefinitionCommand,
  se_CreateModelBiasJobDefinitionCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateModelBiasJobDefinitionCommand}.
 */
export interface CreateModelBiasJobDefinitionCommandInput extends CreateModelBiasJobDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelBiasJobDefinitionCommand}.
 */
export interface CreateModelBiasJobDefinitionCommandOutput
  extends CreateModelBiasJobDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Creates the definition for a model bias job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelBiasJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelBiasJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateModelBiasJobDefinitionRequest
 *   JobDefinitionName: "STRING_VALUE", // required
 *   ModelBiasBaselineConfig: { // ModelBiasBaselineConfig
 *     BaseliningJobName: "STRING_VALUE",
 *     ConstraintsResource: { // MonitoringConstraintsResource
 *       S3Uri: "STRING_VALUE",
 *     },
 *   },
 *   ModelBiasAppSpecification: { // ModelBiasAppSpecification
 *     ImageUri: "STRING_VALUE", // required
 *     ConfigUri: "STRING_VALUE", // required
 *     Environment: { // MonitoringEnvironmentMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   ModelBiasJobInput: { // ModelBiasJobInput
 *     EndpointInput: { // EndpointInput
 *       EndpointName: "STRING_VALUE", // required
 *       LocalPath: "STRING_VALUE", // required
 *       S3InputMode: "Pipe" || "File",
 *       S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 *       FeaturesAttribute: "STRING_VALUE",
 *       InferenceAttribute: "STRING_VALUE",
 *       ProbabilityAttribute: "STRING_VALUE",
 *       ProbabilityThresholdAttribute: Number("double"),
 *       StartTimeOffset: "STRING_VALUE",
 *       EndTimeOffset: "STRING_VALUE",
 *       ExcludeFeaturesAttribute: "STRING_VALUE",
 *     },
 *     BatchTransformInput: { // BatchTransformInput
 *       DataCapturedDestinationS3Uri: "STRING_VALUE", // required
 *       DatasetFormat: { // MonitoringDatasetFormat
 *         Csv: { // MonitoringCsvDatasetFormat
 *           Header: true || false,
 *         },
 *         Json: { // MonitoringJsonDatasetFormat
 *           Line: true || false,
 *         },
 *         Parquet: {},
 *       },
 *       LocalPath: "STRING_VALUE", // required
 *       S3InputMode: "Pipe" || "File",
 *       S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 *       FeaturesAttribute: "STRING_VALUE",
 *       InferenceAttribute: "STRING_VALUE",
 *       ProbabilityAttribute: "STRING_VALUE",
 *       ProbabilityThresholdAttribute: Number("double"),
 *       StartTimeOffset: "STRING_VALUE",
 *       EndTimeOffset: "STRING_VALUE",
 *       ExcludeFeaturesAttribute: "STRING_VALUE",
 *     },
 *     GroundTruthS3Input: { // MonitoringGroundTruthS3Input
 *       S3Uri: "STRING_VALUE",
 *     },
 *   },
 *   ModelBiasJobOutputConfig: { // MonitoringOutputConfig
 *     MonitoringOutputs: [ // MonitoringOutputs // required
 *       { // MonitoringOutput
 *         S3Output: { // MonitoringS3Output
 *           S3Uri: "STRING_VALUE", // required
 *           LocalPath: "STRING_VALUE", // required
 *           S3UploadMode: "Continuous" || "EndOfJob",
 *         },
 *       },
 *     ],
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   JobResources: { // MonitoringResources
 *     ClusterConfig: { // MonitoringClusterConfig
 *       InstanceCount: Number("int"), // required
 *       InstanceType: "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge", // required
 *       VolumeSizeInGB: Number("int"), // required
 *       VolumeKmsKeyId: "STRING_VALUE",
 *     },
 *   },
 *   NetworkConfig: { // MonitoringNetworkConfig
 *     EnableInterContainerTrafficEncryption: true || false,
 *     EnableNetworkIsolation: true || false,
 *     VpcConfig: { // VpcConfig
 *       SecurityGroupIds: [ // VpcSecurityGroupIds // required
 *         "STRING_VALUE",
 *       ],
 *       Subnets: [ // Subnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   StoppingCondition: { // MonitoringStoppingCondition
 *     MaxRuntimeInSeconds: Number("int"), // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateModelBiasJobDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelBiasJobDefinitionResponse
 * //   JobDefinitionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelBiasJobDefinitionCommandInput - {@link CreateModelBiasJobDefinitionCommandInput}
 * @returns {@link CreateModelBiasJobDefinitionCommandOutput}
 * @see {@link CreateModelBiasJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateModelBiasJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class CreateModelBiasJobDefinitionCommand extends $Command
  .classBuilder<
    CreateModelBiasJobDefinitionCommandInput,
    CreateModelBiasJobDefinitionCommandOutput,
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
  .s("SageMaker", "CreateModelBiasJobDefinition", {})
  .n("SageMakerClient", "CreateModelBiasJobDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_CreateModelBiasJobDefinitionCommand)
  .de(de_CreateModelBiasJobDefinitionCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProcessingJobRequest, CreateProcessingJobResponse } from "../models/models_2";
import { de_CreateProcessingJobCommand, se_CreateProcessingJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProcessingJobCommand}.
 */
export interface CreateProcessingJobCommandInput extends CreateProcessingJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateProcessingJobCommand}.
 */
export interface CreateProcessingJobCommandOutput extends CreateProcessingJobResponse, __MetadataBearer {}

/**
 * <p>Creates a processing job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateProcessingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateProcessingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // CreateProcessingJobRequest
 *   ProcessingInputs: [ // ProcessingInputs
 *     { // ProcessingInput
 *       InputName: "STRING_VALUE", // required
 *       AppManaged: true || false,
 *       S3Input: { // ProcessingS3Input
 *         S3Uri: "STRING_VALUE", // required
 *         LocalPath: "STRING_VALUE",
 *         S3DataType: "ManifestFile" || "S3Prefix", // required
 *         S3InputMode: "Pipe" || "File",
 *         S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 *         S3CompressionType: "None" || "Gzip",
 *       },
 *       DatasetDefinition: { // DatasetDefinition
 *         AthenaDatasetDefinition: { // AthenaDatasetDefinition
 *           Catalog: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           QueryString: "STRING_VALUE", // required
 *           WorkGroup: "STRING_VALUE",
 *           OutputS3Uri: "STRING_VALUE", // required
 *           KmsKeyId: "STRING_VALUE",
 *           OutputFormat: "PARQUET" || "ORC" || "AVRO" || "JSON" || "TEXTFILE", // required
 *           OutputCompression: "GZIP" || "SNAPPY" || "ZLIB",
 *         },
 *         RedshiftDatasetDefinition: { // RedshiftDatasetDefinition
 *           ClusterId: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           DbUser: "STRING_VALUE", // required
 *           QueryString: "STRING_VALUE", // required
 *           ClusterRoleArn: "STRING_VALUE", // required
 *           OutputS3Uri: "STRING_VALUE", // required
 *           KmsKeyId: "STRING_VALUE",
 *           OutputFormat: "PARQUET" || "CSV", // required
 *           OutputCompression: "None" || "GZIP" || "BZIP2" || "ZSTD" || "SNAPPY",
 *         },
 *         LocalPath: "STRING_VALUE",
 *         DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 *         InputMode: "Pipe" || "File",
 *       },
 *     },
 *   ],
 *   ProcessingOutputConfig: { // ProcessingOutputConfig
 *     Outputs: [ // ProcessingOutputs // required
 *       { // ProcessingOutput
 *         OutputName: "STRING_VALUE", // required
 *         S3Output: { // ProcessingS3Output
 *           S3Uri: "STRING_VALUE", // required
 *           LocalPath: "STRING_VALUE",
 *           S3UploadMode: "Continuous" || "EndOfJob", // required
 *         },
 *         FeatureStoreOutput: { // ProcessingFeatureStoreOutput
 *           FeatureGroupName: "STRING_VALUE", // required
 *         },
 *         AppManaged: true || false,
 *       },
 *     ],
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   ProcessingJobName: "STRING_VALUE", // required
 *   ProcessingResources: { // ProcessingResources
 *     ClusterConfig: { // ProcessingClusterConfig
 *       InstanceCount: Number("int"), // required
 *       InstanceType: "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.8xlarge" || "ml.r5d.12xlarge" || "ml.r5d.16xlarge" || "ml.r5d.24xlarge", // required
 *       VolumeSizeInGB: Number("int"), // required
 *       VolumeKmsKeyId: "STRING_VALUE",
 *     },
 *   },
 *   StoppingCondition: { // ProcessingStoppingCondition
 *     MaxRuntimeInSeconds: Number("int"), // required
 *   },
 *   AppSpecification: { // AppSpecification
 *     ImageUri: "STRING_VALUE", // required
 *     ContainerEntrypoint: [ // ContainerEntrypoint
 *       "STRING_VALUE",
 *     ],
 *     ContainerArguments: [ // ContainerArguments
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Environment: { // ProcessingEnvironmentMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NetworkConfig: { // NetworkConfig
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ExperimentConfig: { // ExperimentConfig
 *     ExperimentName: "STRING_VALUE",
 *     TrialName: "STRING_VALUE",
 *     TrialComponentDisplayName: "STRING_VALUE",
 *     RunName: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateProcessingJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateProcessingJobResponse
 * //   ProcessingJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateProcessingJobCommandInput - {@link CreateProcessingJobCommandInput}
 * @returns {@link CreateProcessingJobCommandOutput}
 * @see {@link CreateProcessingJobCommandInput} for command's `input` shape.
 * @see {@link CreateProcessingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class CreateProcessingJobCommand extends $Command
  .classBuilder<
    CreateProcessingJobCommandInput,
    CreateProcessingJobCommandOutput,
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
  .s("SageMaker", "CreateProcessingJob", {})
  .n("SageMakerClient", "CreateProcessingJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateProcessingJobCommand)
  .de(de_CreateProcessingJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProcessingJobRequest;
      output: CreateProcessingJobResponse;
    };
    sdk: {
      input: CreateProcessingJobCommandInput;
      output: CreateProcessingJobCommandOutput;
    };
  };
}

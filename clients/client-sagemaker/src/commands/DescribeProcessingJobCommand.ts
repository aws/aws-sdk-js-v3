// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProcessingJobRequest } from "../models/models_2";
import { DescribeProcessingJobResponse } from "../models/models_3";
import { de_DescribeProcessingJobCommand, se_DescribeProcessingJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProcessingJobCommand}.
 */
export interface DescribeProcessingJobCommandInput extends DescribeProcessingJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProcessingJobCommand}.
 */
export interface DescribeProcessingJobCommandOutput extends DescribeProcessingJobResponse, __MetadataBearer {}

/**
 * <p>Returns a description of a processing job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeProcessingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeProcessingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeProcessingJobRequest
 *   ProcessingJobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeProcessingJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProcessingJobResponse
 * //   ProcessingInputs: [ // ProcessingInputs
 * //     { // ProcessingInput
 * //       InputName: "STRING_VALUE", // required
 * //       AppManaged: true || false,
 * //       S3Input: { // ProcessingS3Input
 * //         S3Uri: "STRING_VALUE", // required
 * //         LocalPath: "STRING_VALUE",
 * //         S3DataType: "ManifestFile" || "S3Prefix", // required
 * //         S3InputMode: "Pipe" || "File",
 * //         S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 * //         S3CompressionType: "None" || "Gzip",
 * //       },
 * //       DatasetDefinition: { // DatasetDefinition
 * //         AthenaDatasetDefinition: { // AthenaDatasetDefinition
 * //           Catalog: "STRING_VALUE", // required
 * //           Database: "STRING_VALUE", // required
 * //           QueryString: "STRING_VALUE", // required
 * //           WorkGroup: "STRING_VALUE",
 * //           OutputS3Uri: "STRING_VALUE", // required
 * //           KmsKeyId: "STRING_VALUE",
 * //           OutputFormat: "PARQUET" || "ORC" || "AVRO" || "JSON" || "TEXTFILE", // required
 * //           OutputCompression: "GZIP" || "SNAPPY" || "ZLIB",
 * //         },
 * //         RedshiftDatasetDefinition: { // RedshiftDatasetDefinition
 * //           ClusterId: "STRING_VALUE", // required
 * //           Database: "STRING_VALUE", // required
 * //           DbUser: "STRING_VALUE", // required
 * //           QueryString: "STRING_VALUE", // required
 * //           ClusterRoleArn: "STRING_VALUE", // required
 * //           OutputS3Uri: "STRING_VALUE", // required
 * //           KmsKeyId: "STRING_VALUE",
 * //           OutputFormat: "PARQUET" || "CSV", // required
 * //           OutputCompression: "None" || "GZIP" || "BZIP2" || "ZSTD" || "SNAPPY",
 * //         },
 * //         LocalPath: "STRING_VALUE",
 * //         DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 * //         InputMode: "Pipe" || "File",
 * //       },
 * //     },
 * //   ],
 * //   ProcessingOutputConfig: { // ProcessingOutputConfig
 * //     Outputs: [ // ProcessingOutputs // required
 * //       { // ProcessingOutput
 * //         OutputName: "STRING_VALUE", // required
 * //         S3Output: { // ProcessingS3Output
 * //           S3Uri: "STRING_VALUE", // required
 * //           LocalPath: "STRING_VALUE", // required
 * //           S3UploadMode: "Continuous" || "EndOfJob", // required
 * //         },
 * //         FeatureStoreOutput: { // ProcessingFeatureStoreOutput
 * //           FeatureGroupName: "STRING_VALUE", // required
 * //         },
 * //         AppManaged: true || false,
 * //       },
 * //     ],
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * //   ProcessingJobName: "STRING_VALUE", // required
 * //   ProcessingResources: { // ProcessingResources
 * //     ClusterConfig: { // ProcessingClusterConfig
 * //       InstanceCount: Number("int"), // required
 * //       InstanceType: "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge", // required
 * //       VolumeSizeInGB: Number("int"), // required
 * //       VolumeKmsKeyId: "STRING_VALUE",
 * //     },
 * //   },
 * //   StoppingCondition: { // ProcessingStoppingCondition
 * //     MaxRuntimeInSeconds: Number("int"), // required
 * //   },
 * //   AppSpecification: { // AppSpecification
 * //     ImageUri: "STRING_VALUE", // required
 * //     ContainerEntrypoint: [ // ContainerEntrypoint
 * //       "STRING_VALUE",
 * //     ],
 * //     ContainerArguments: [ // ContainerArguments
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   Environment: { // ProcessingEnvironmentMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   NetworkConfig: { // NetworkConfig
 * //     EnableInterContainerTrafficEncryption: true || false,
 * //     EnableNetworkIsolation: true || false,
 * //     VpcConfig: { // VpcConfig
 * //       SecurityGroupIds: [ // VpcSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   ExperimentConfig: { // ExperimentConfig
 * //     ExperimentName: "STRING_VALUE",
 * //     TrialName: "STRING_VALUE",
 * //     TrialComponentDisplayName: "STRING_VALUE",
 * //     RunName: "STRING_VALUE",
 * //   },
 * //   ProcessingJobArn: "STRING_VALUE", // required
 * //   ProcessingJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //   ExitMessage: "STRING_VALUE",
 * //   FailureReason: "STRING_VALUE",
 * //   ProcessingEndTime: new Date("TIMESTAMP"),
 * //   ProcessingStartTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   MonitoringScheduleArn: "STRING_VALUE",
 * //   AutoMLJobArn: "STRING_VALUE",
 * //   TrainingJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProcessingJobCommandInput - {@link DescribeProcessingJobCommandInput}
 * @returns {@link DescribeProcessingJobCommandOutput}
 * @see {@link DescribeProcessingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeProcessingJobCommandOutput} for command's `response` shape.
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
export class DescribeProcessingJobCommand extends $Command
  .classBuilder<
    DescribeProcessingJobCommandInput,
    DescribeProcessingJobCommandOutput,
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
  .s("SageMaker", "DescribeProcessingJob", {})
  .n("SageMakerClient", "DescribeProcessingJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProcessingJobCommand)
  .de(de_DescribeProcessingJobCommand)
  .build() {}

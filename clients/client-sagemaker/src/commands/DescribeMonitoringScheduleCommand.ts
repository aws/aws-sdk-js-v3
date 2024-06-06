// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMonitoringScheduleRequest, DescribeMonitoringScheduleResponse } from "../models/models_2";
import { de_DescribeMonitoringScheduleCommand, se_DescribeMonitoringScheduleCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMonitoringScheduleCommand}.
 */
export interface DescribeMonitoringScheduleCommandInput extends DescribeMonitoringScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMonitoringScheduleCommand}.
 */
export interface DescribeMonitoringScheduleCommandOutput extends DescribeMonitoringScheduleResponse, __MetadataBearer {}

/**
 * <p>Describes the schedule for a monitoring job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeMonitoringScheduleRequest
 *   MonitoringScheduleName: "STRING_VALUE", // required
 * };
 * const command = new DescribeMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMonitoringScheduleResponse
 * //   MonitoringScheduleArn: "STRING_VALUE", // required
 * //   MonitoringScheduleName: "STRING_VALUE", // required
 * //   MonitoringScheduleStatus: "Pending" || "Failed" || "Scheduled" || "Stopped", // required
 * //   MonitoringType: "DataQuality" || "ModelQuality" || "ModelBias" || "ModelExplainability",
 * //   FailureReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   MonitoringScheduleConfig: { // MonitoringScheduleConfig
 * //     ScheduleConfig: { // ScheduleConfig
 * //       ScheduleExpression: "STRING_VALUE", // required
 * //       DataAnalysisStartTime: "STRING_VALUE",
 * //       DataAnalysisEndTime: "STRING_VALUE",
 * //     },
 * //     MonitoringJobDefinition: { // MonitoringJobDefinition
 * //       BaselineConfig: { // MonitoringBaselineConfig
 * //         BaseliningJobName: "STRING_VALUE",
 * //         ConstraintsResource: { // MonitoringConstraintsResource
 * //           S3Uri: "STRING_VALUE",
 * //         },
 * //         StatisticsResource: { // MonitoringStatisticsResource
 * //           S3Uri: "STRING_VALUE",
 * //         },
 * //       },
 * //       MonitoringInputs: [ // MonitoringInputs // required
 * //         { // MonitoringInput
 * //           EndpointInput: { // EndpointInput
 * //             EndpointName: "STRING_VALUE", // required
 * //             LocalPath: "STRING_VALUE", // required
 * //             S3InputMode: "Pipe" || "File",
 * //             S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 * //             FeaturesAttribute: "STRING_VALUE",
 * //             InferenceAttribute: "STRING_VALUE",
 * //             ProbabilityAttribute: "STRING_VALUE",
 * //             ProbabilityThresholdAttribute: Number("double"),
 * //             StartTimeOffset: "STRING_VALUE",
 * //             EndTimeOffset: "STRING_VALUE",
 * //             ExcludeFeaturesAttribute: "STRING_VALUE",
 * //           },
 * //           BatchTransformInput: { // BatchTransformInput
 * //             DataCapturedDestinationS3Uri: "STRING_VALUE", // required
 * //             DatasetFormat: { // MonitoringDatasetFormat
 * //               Csv: { // MonitoringCsvDatasetFormat
 * //                 Header: true || false,
 * //               },
 * //               Json: { // MonitoringJsonDatasetFormat
 * //                 Line: true || false,
 * //               },
 * //               Parquet: {},
 * //             },
 * //             LocalPath: "STRING_VALUE", // required
 * //             S3InputMode: "Pipe" || "File",
 * //             S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 * //             FeaturesAttribute: "STRING_VALUE",
 * //             InferenceAttribute: "STRING_VALUE",
 * //             ProbabilityAttribute: "STRING_VALUE",
 * //             ProbabilityThresholdAttribute: Number("double"),
 * //             StartTimeOffset: "STRING_VALUE",
 * //             EndTimeOffset: "STRING_VALUE",
 * //             ExcludeFeaturesAttribute: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       MonitoringOutputConfig: { // MonitoringOutputConfig
 * //         MonitoringOutputs: [ // MonitoringOutputs // required
 * //           { // MonitoringOutput
 * //             S3Output: { // MonitoringS3Output
 * //               S3Uri: "STRING_VALUE", // required
 * //               LocalPath: "STRING_VALUE", // required
 * //               S3UploadMode: "Continuous" || "EndOfJob",
 * //             },
 * //           },
 * //         ],
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //       MonitoringResources: { // MonitoringResources
 * //         ClusterConfig: { // MonitoringClusterConfig
 * //           InstanceCount: Number("int"), // required
 * //           InstanceType: "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge", // required
 * //           VolumeSizeInGB: Number("int"), // required
 * //           VolumeKmsKeyId: "STRING_VALUE",
 * //         },
 * //       },
 * //       MonitoringAppSpecification: { // MonitoringAppSpecification
 * //         ImageUri: "STRING_VALUE", // required
 * //         ContainerEntrypoint: [ // ContainerEntrypoint
 * //           "STRING_VALUE",
 * //         ],
 * //         ContainerArguments: [ // MonitoringContainerArguments
 * //           "STRING_VALUE",
 * //         ],
 * //         RecordPreprocessorSourceUri: "STRING_VALUE",
 * //         PostAnalyticsProcessorSourceUri: "STRING_VALUE",
 * //       },
 * //       StoppingCondition: { // MonitoringStoppingCondition
 * //         MaxRuntimeInSeconds: Number("int"), // required
 * //       },
 * //       Environment: { // MonitoringEnvironmentMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       NetworkConfig: { // NetworkConfig
 * //         EnableInterContainerTrafficEncryption: true || false,
 * //         EnableNetworkIsolation: true || false,
 * //         VpcConfig: { // VpcConfig
 * //           SecurityGroupIds: [ // VpcSecurityGroupIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //           Subnets: [ // Subnets // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       RoleArn: "STRING_VALUE", // required
 * //     },
 * //     MonitoringJobDefinitionName: "STRING_VALUE",
 * //     MonitoringType: "DataQuality" || "ModelQuality" || "ModelBias" || "ModelExplainability",
 * //   },
 * //   EndpointName: "STRING_VALUE",
 * //   LastMonitoringExecutionSummary: { // MonitoringExecutionSummary
 * //     MonitoringScheduleName: "STRING_VALUE", // required
 * //     ScheduledTime: new Date("TIMESTAMP"), // required
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     MonitoringExecutionStatus: "Pending" || "Completed" || "CompletedWithViolations" || "InProgress" || "Failed" || "Stopping" || "Stopped", // required
 * //     ProcessingJobArn: "STRING_VALUE",
 * //     EndpointName: "STRING_VALUE",
 * //     FailureReason: "STRING_VALUE",
 * //     MonitoringJobDefinitionName: "STRING_VALUE",
 * //     MonitoringType: "DataQuality" || "ModelQuality" || "ModelBias" || "ModelExplainability",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMonitoringScheduleCommandInput - {@link DescribeMonitoringScheduleCommandInput}
 * @returns {@link DescribeMonitoringScheduleCommandOutput}
 * @see {@link DescribeMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeMonitoringScheduleCommandOutput} for command's `response` shape.
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
export class DescribeMonitoringScheduleCommand extends $Command
  .classBuilder<
    DescribeMonitoringScheduleCommandInput,
    DescribeMonitoringScheduleCommandOutput,
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
  .s("SageMaker", "DescribeMonitoringSchedule", {})
  .n("SageMakerClient", "DescribeMonitoringScheduleCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMonitoringScheduleCommand)
  .de(de_DescribeMonitoringScheduleCommand)
  .build() {}

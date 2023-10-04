// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribeAlgorithmInput, DescribeAlgorithmOutput } from "../models/models_2";
import { de_DescribeAlgorithmCommand, se_DescribeAlgorithmCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAlgorithmCommand}.
 */
export interface DescribeAlgorithmCommandInput extends DescribeAlgorithmInput {}
/**
 * @public
 *
 * The output of {@link DescribeAlgorithmCommand}.
 */
export interface DescribeAlgorithmCommandOutput extends DescribeAlgorithmOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a description of the specified algorithm that is in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAlgorithmCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAlgorithmCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeAlgorithmInput
 *   AlgorithmName: "STRING_VALUE", // required
 * };
 * const command = new DescribeAlgorithmCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlgorithmOutput
 * //   AlgorithmName: "STRING_VALUE", // required
 * //   AlgorithmArn: "STRING_VALUE", // required
 * //   AlgorithmDescription: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   TrainingSpecification: { // TrainingSpecification
 * //     TrainingImage: "STRING_VALUE", // required
 * //     TrainingImageDigest: "STRING_VALUE",
 * //     SupportedHyperParameters: [ // HyperParameterSpecifications
 * //       { // HyperParameterSpecification
 * //         Name: "STRING_VALUE", // required
 * //         Description: "STRING_VALUE",
 * //         Type: "Integer" || "Continuous" || "Categorical" || "FreeText", // required
 * //         Range: { // ParameterRange
 * //           IntegerParameterRangeSpecification: { // IntegerParameterRangeSpecification
 * //             MinValue: "STRING_VALUE", // required
 * //             MaxValue: "STRING_VALUE", // required
 * //           },
 * //           ContinuousParameterRangeSpecification: { // ContinuousParameterRangeSpecification
 * //             MinValue: "STRING_VALUE", // required
 * //             MaxValue: "STRING_VALUE", // required
 * //           },
 * //           CategoricalParameterRangeSpecification: { // CategoricalParameterRangeSpecification
 * //             Values: [ // ParameterValues // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         IsTunable: true || false,
 * //         IsRequired: true || false,
 * //         DefaultValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SupportedTrainingInstanceTypes: [ // TrainingInstanceTypes // required
 * //       "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.p5.48xlarge",
 * //     ],
 * //     SupportsDistributedTraining: true || false,
 * //     MetricDefinitions: [ // MetricDefinitionList
 * //       { // MetricDefinition
 * //         Name: "STRING_VALUE", // required
 * //         Regex: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     TrainingChannels: [ // ChannelSpecifications // required
 * //       { // ChannelSpecification
 * //         Name: "STRING_VALUE", // required
 * //         Description: "STRING_VALUE",
 * //         IsRequired: true || false,
 * //         SupportedContentTypes: [ // ContentTypes // required
 * //           "STRING_VALUE",
 * //         ],
 * //         SupportedCompressionTypes: [ // CompressionTypes
 * //           "None" || "Gzip",
 * //         ],
 * //         SupportedInputModes: [ // InputModes // required
 * //           "Pipe" || "File" || "FastFile",
 * //         ],
 * //       },
 * //     ],
 * //     SupportedTuningJobObjectiveMetrics: [ // HyperParameterTuningJobObjectives
 * //       { // HyperParameterTuningJobObjective
 * //         Type: "Maximize" || "Minimize", // required
 * //         MetricName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     AdditionalS3DataSource: { // AdditionalS3DataSource
 * //       S3DataType: "S3Object", // required
 * //       S3Uri: "STRING_VALUE", // required
 * //       CompressionType: "None" || "Gzip",
 * //     },
 * //   },
 * //   InferenceSpecification: { // InferenceSpecification
 * //     Containers: [ // ModelPackageContainerDefinitionList // required
 * //       { // ModelPackageContainerDefinition
 * //         ContainerHostname: "STRING_VALUE",
 * //         Image: "STRING_VALUE", // required
 * //         ImageDigest: "STRING_VALUE",
 * //         ModelDataUrl: "STRING_VALUE",
 * //         ProductId: "STRING_VALUE",
 * //         Environment: { // EnvironmentMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         ModelInput: { // ModelInput
 * //           DataInputConfig: "STRING_VALUE", // required
 * //         },
 * //         Framework: "STRING_VALUE",
 * //         FrameworkVersion: "STRING_VALUE",
 * //         NearestModelName: "STRING_VALUE",
 * //         AdditionalS3DataSource: {
 * //           S3DataType: "S3Object", // required
 * //           S3Uri: "STRING_VALUE", // required
 * //           CompressionType: "None" || "Gzip",
 * //         },
 * //       },
 * //     ],
 * //     SupportedTransformInstanceTypes: [ // TransformInstanceTypes
 * //       "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge",
 * //     ],
 * //     SupportedRealtimeInferenceInstanceTypes: [ // RealtimeInferenceInstanceTypes
 * //       "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.inf2.xlarge" || "ml.inf2.8xlarge" || "ml.inf2.24xlarge" || "ml.inf2.48xlarge" || "ml.p5.48xlarge",
 * //     ],
 * //     SupportedContentTypes: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     SupportedResponseMIMETypes: [ // ResponseMIMETypes // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ValidationSpecification: { // AlgorithmValidationSpecification
 * //     ValidationRole: "STRING_VALUE", // required
 * //     ValidationProfiles: [ // AlgorithmValidationProfiles // required
 * //       { // AlgorithmValidationProfile
 * //         ProfileName: "STRING_VALUE", // required
 * //         TrainingJobDefinition: { // TrainingJobDefinition
 * //           TrainingInputMode: "Pipe" || "File" || "FastFile", // required
 * //           HyperParameters: { // HyperParameters
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           InputDataConfig: [ // InputDataConfig // required
 * //             { // Channel
 * //               ChannelName: "STRING_VALUE", // required
 * //               DataSource: { // DataSource
 * //                 S3DataSource: { // S3DataSource
 * //                   S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 * //                   S3Uri: "STRING_VALUE", // required
 * //                   S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 * //                   AttributeNames: [ // AttributeNames
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   InstanceGroupNames: [ // InstanceGroupNames
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 FileSystemDataSource: { // FileSystemDataSource
 * //                   FileSystemId: "STRING_VALUE", // required
 * //                   FileSystemAccessMode: "rw" || "ro", // required
 * //                   FileSystemType: "EFS" || "FSxLustre", // required
 * //                   DirectoryPath: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //               ContentType: "STRING_VALUE",
 * //               CompressionType: "None" || "Gzip",
 * //               RecordWrapperType: "None" || "RecordIO",
 * //               InputMode: "Pipe" || "File" || "FastFile",
 * //               ShuffleConfig: { // ShuffleConfig
 * //                 Seed: Number("long"), // required
 * //               },
 * //             },
 * //           ],
 * //           OutputDataConfig: { // OutputDataConfig
 * //             KmsKeyId: "STRING_VALUE",
 * //             S3OutputPath: "STRING_VALUE", // required
 * //             CompressionType: "GZIP" || "NONE",
 * //           },
 * //           ResourceConfig: { // ResourceConfig
 * //             InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.p5.48xlarge",
 * //             InstanceCount: Number("int"),
 * //             VolumeSizeInGB: Number("int"), // required
 * //             VolumeKmsKeyId: "STRING_VALUE",
 * //             InstanceGroups: [ // InstanceGroups
 * //               { // InstanceGroup
 * //                 InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.p5.48xlarge", // required
 * //                 InstanceCount: Number("int"), // required
 * //                 InstanceGroupName: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             KeepAlivePeriodInSeconds: Number("int"),
 * //           },
 * //           StoppingCondition: { // StoppingCondition
 * //             MaxRuntimeInSeconds: Number("int"),
 * //             MaxWaitTimeInSeconds: Number("int"),
 * //           },
 * //         },
 * //         TransformJobDefinition: { // TransformJobDefinition
 * //           MaxConcurrentTransforms: Number("int"),
 * //           MaxPayloadInMB: Number("int"),
 * //           BatchStrategy: "MultiRecord" || "SingleRecord",
 * //           Environment: { // TransformEnvironmentMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           TransformInput: { // TransformInput
 * //             DataSource: { // TransformDataSource
 * //               S3DataSource: { // TransformS3DataSource
 * //                 S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 * //                 S3Uri: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             ContentType: "STRING_VALUE",
 * //             CompressionType: "None" || "Gzip",
 * //             SplitType: "None" || "Line" || "RecordIO" || "TFRecord",
 * //           },
 * //           TransformOutput: { // TransformOutput
 * //             S3OutputPath: "STRING_VALUE", // required
 * //             Accept: "STRING_VALUE",
 * //             AssembleWith: "None" || "Line",
 * //             KmsKeyId: "STRING_VALUE",
 * //           },
 * //           TransformResources: { // TransformResources
 * //             InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge", // required
 * //             InstanceCount: Number("int"), // required
 * //             VolumeKmsKeyId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   AlgorithmStatus: "Pending" || "InProgress" || "Completed" || "Failed" || "Deleting", // required
 * //   AlgorithmStatusDetails: { // AlgorithmStatusDetails
 * //     ValidationStatuses: [ // AlgorithmStatusItemList
 * //       { // AlgorithmStatusItem
 * //         Name: "STRING_VALUE", // required
 * //         Status: "NotStarted" || "InProgress" || "Completed" || "Failed", // required
 * //         FailureReason: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ImageScanStatuses: [
 * //       {
 * //         Name: "STRING_VALUE", // required
 * //         Status: "NotStarted" || "InProgress" || "Completed" || "Failed", // required
 * //         FailureReason: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   ProductId: "STRING_VALUE",
 * //   CertifyForMarketplace: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeAlgorithmCommandInput - {@link DescribeAlgorithmCommandInput}
 * @returns {@link DescribeAlgorithmCommandOutput}
 * @see {@link DescribeAlgorithmCommandInput} for command's `input` shape.
 * @see {@link DescribeAlgorithmCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeAlgorithmCommand extends $Command<
  DescribeAlgorithmCommandInput,
  DescribeAlgorithmCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeAlgorithmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAlgorithmCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeAlgorithmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeAlgorithm",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeAlgorithmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAlgorithmCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlgorithmCommandOutput> {
    return de_DescribeAlgorithmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

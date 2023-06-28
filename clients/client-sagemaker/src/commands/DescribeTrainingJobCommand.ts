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
} from "@smithy/types";

import { DescribeTrainingJobRequest, DescribeTrainingJobResponse } from "../models/models_2";
import { de_DescribeTrainingJobCommand, se_DescribeTrainingJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrainingJobCommand}.
 */
export interface DescribeTrainingJobCommandInput extends DescribeTrainingJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrainingJobCommand}.
 */
export interface DescribeTrainingJobCommandOutput extends DescribeTrainingJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a training job. </p>
 *          <p>Some of the attributes below only appear if the training job successfully starts.
 *             If the training job fails, <code>TrainingJobStatus</code> is <code>Failed</code> and,
 *             depending on the <code>FailureReason</code>, attributes like
 *                 <code>TrainingStartTime</code>, <code>TrainingTimeInSeconds</code>,
 *                 <code>TrainingEndTime</code>, and <code>BillableTimeInSeconds</code> may not be
 *             present in the response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeTrainingJobRequest
 *   TrainingJobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrainingJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrainingJobResponse
 * //   TrainingJobName: "STRING_VALUE", // required
 * //   TrainingJobArn: "STRING_VALUE", // required
 * //   TuningJobArn: "STRING_VALUE",
 * //   LabelingJobArn: "STRING_VALUE",
 * //   AutoMLJobArn: "STRING_VALUE",
 * //   ModelArtifacts: { // ModelArtifacts
 * //     S3ModelArtifacts: "STRING_VALUE", // required
 * //   },
 * //   TrainingJobStatus: "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped", // required
 * //   SecondaryStatus: "Starting" || "LaunchingMLInstances" || "PreparingTrainingStack" || "Downloading" || "DownloadingTrainingImage" || "Training" || "Uploading" || "Stopping" || "Stopped" || "MaxRuntimeExceeded" || "Completed" || "Failed" || "Interrupted" || "MaxWaitTimeExceeded" || "Updating" || "Restarting", // required
 * //   FailureReason: "STRING_VALUE",
 * //   HyperParameters: { // HyperParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   AlgorithmSpecification: { // AlgorithmSpecification
 * //     TrainingImage: "STRING_VALUE",
 * //     AlgorithmName: "STRING_VALUE",
 * //     TrainingInputMode: "Pipe" || "File" || "FastFile", // required
 * //     MetricDefinitions: [ // MetricDefinitionList
 * //       { // MetricDefinition
 * //         Name: "STRING_VALUE", // required
 * //         Regex: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     EnableSageMakerMetricsTimeSeries: true || false,
 * //     ContainerEntrypoint: [ // TrainingContainerEntrypoint
 * //       "STRING_VALUE",
 * //     ],
 * //     ContainerArguments: [ // TrainingContainerArguments
 * //       "STRING_VALUE",
 * //     ],
 * //     TrainingImageConfig: { // TrainingImageConfig
 * //       TrainingRepositoryAccessMode: "Platform" || "Vpc", // required
 * //       TrainingRepositoryAuthConfig: { // TrainingRepositoryAuthConfig
 * //         TrainingRepositoryCredentialsProviderArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   InputDataConfig: [ // InputDataConfig
 * //     { // Channel
 * //       ChannelName: "STRING_VALUE", // required
 * //       DataSource: { // DataSource
 * //         S3DataSource: { // S3DataSource
 * //           S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 * //           S3Uri: "STRING_VALUE", // required
 * //           S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 * //           AttributeNames: [ // AttributeNames
 * //             "STRING_VALUE",
 * //           ],
 * //           InstanceGroupNames: [ // InstanceGroupNames
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         FileSystemDataSource: { // FileSystemDataSource
 * //           FileSystemId: "STRING_VALUE", // required
 * //           FileSystemAccessMode: "rw" || "ro", // required
 * //           FileSystemType: "EFS" || "FSxLustre", // required
 * //           DirectoryPath: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       ContentType: "STRING_VALUE",
 * //       CompressionType: "None" || "Gzip",
 * //       RecordWrapperType: "None" || "RecordIO",
 * //       InputMode: "Pipe" || "File" || "FastFile",
 * //       ShuffleConfig: { // ShuffleConfig
 * //         Seed: Number("long"), // required
 * //       },
 * //     },
 * //   ],
 * //   OutputDataConfig: { // OutputDataConfig
 * //     KmsKeyId: "STRING_VALUE",
 * //     S3OutputPath: "STRING_VALUE", // required
 * //     CompressionType: "GZIP" || "NONE",
 * //   },
 * //   ResourceConfig: { // ResourceConfig
 * //     InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge",
 * //     InstanceCount: Number("int"),
 * //     VolumeSizeInGB: Number("int"), // required
 * //     VolumeKmsKeyId: "STRING_VALUE",
 * //     InstanceGroups: [ // InstanceGroups
 * //       { // InstanceGroup
 * //         InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge", // required
 * //         InstanceCount: Number("int"), // required
 * //         InstanceGroupName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     KeepAlivePeriodInSeconds: Number("int"),
 * //   },
 * //   VpcConfig: { // VpcConfig
 * //     SecurityGroupIds: [ // VpcSecurityGroupIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Subnets: [ // Subnets // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   StoppingCondition: { // StoppingCondition
 * //     MaxRuntimeInSeconds: Number("int"),
 * //     MaxWaitTimeInSeconds: Number("int"),
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   TrainingStartTime: new Date("TIMESTAMP"),
 * //   TrainingEndTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   SecondaryStatusTransitions: [ // SecondaryStatusTransitions
 * //     { // SecondaryStatusTransition
 * //       Status: "Starting" || "LaunchingMLInstances" || "PreparingTrainingStack" || "Downloading" || "DownloadingTrainingImage" || "Training" || "Uploading" || "Stopping" || "Stopped" || "MaxRuntimeExceeded" || "Completed" || "Failed" || "Interrupted" || "MaxWaitTimeExceeded" || "Updating" || "Restarting", // required
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   FinalMetricDataList: [ // FinalMetricDataList
 * //     { // MetricData
 * //       MetricName: "STRING_VALUE",
 * //       Value: Number("float"),
 * //       Timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   EnableNetworkIsolation: true || false,
 * //   EnableInterContainerTrafficEncryption: true || false,
 * //   EnableManagedSpotTraining: true || false,
 * //   CheckpointConfig: { // CheckpointConfig
 * //     S3Uri: "STRING_VALUE", // required
 * //     LocalPath: "STRING_VALUE",
 * //   },
 * //   TrainingTimeInSeconds: Number("int"),
 * //   BillableTimeInSeconds: Number("int"),
 * //   DebugHookConfig: { // DebugHookConfig
 * //     LocalPath: "STRING_VALUE",
 * //     S3OutputPath: "STRING_VALUE", // required
 * //     HookParameters: { // HookParameters
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CollectionConfigurations: [ // CollectionConfigurations
 * //       { // CollectionConfiguration
 * //         CollectionName: "STRING_VALUE",
 * //         CollectionParameters: { // CollectionParameters
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   ExperimentConfig: { // ExperimentConfig
 * //     ExperimentName: "STRING_VALUE",
 * //     TrialName: "STRING_VALUE",
 * //     TrialComponentDisplayName: "STRING_VALUE",
 * //     RunName: "STRING_VALUE",
 * //   },
 * //   DebugRuleConfigurations: [ // DebugRuleConfigurations
 * //     { // DebugRuleConfiguration
 * //       RuleConfigurationName: "STRING_VALUE", // required
 * //       LocalPath: "STRING_VALUE",
 * //       S3OutputPath: "STRING_VALUE",
 * //       RuleEvaluatorImage: "STRING_VALUE", // required
 * //       InstanceType: "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge",
 * //       VolumeSizeInGB: Number("int"),
 * //       RuleParameters: { // RuleParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   TensorBoardOutputConfig: { // TensorBoardOutputConfig
 * //     LocalPath: "STRING_VALUE",
 * //     S3OutputPath: "STRING_VALUE", // required
 * //   },
 * //   DebugRuleEvaluationStatuses: [ // DebugRuleEvaluationStatuses
 * //     { // DebugRuleEvaluationStatus
 * //       RuleConfigurationName: "STRING_VALUE",
 * //       RuleEvaluationJobArn: "STRING_VALUE",
 * //       RuleEvaluationStatus: "InProgress" || "NoIssuesFound" || "IssuesFound" || "Error" || "Stopping" || "Stopped",
 * //       StatusDetails: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   ProfilerConfig: { // ProfilerConfig
 * //     S3OutputPath: "STRING_VALUE",
 * //     ProfilingIntervalInMilliseconds: Number("long"),
 * //     ProfilingParameters: { // ProfilingParameters
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     DisableProfiler: true || false,
 * //   },
 * //   ProfilerRuleConfigurations: [ // ProfilerRuleConfigurations
 * //     { // ProfilerRuleConfiguration
 * //       RuleConfigurationName: "STRING_VALUE", // required
 * //       LocalPath: "STRING_VALUE",
 * //       S3OutputPath: "STRING_VALUE",
 * //       RuleEvaluatorImage: "STRING_VALUE", // required
 * //       InstanceType: "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge",
 * //       VolumeSizeInGB: Number("int"),
 * //       RuleParameters: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   ProfilerRuleEvaluationStatuses: [ // ProfilerRuleEvaluationStatuses
 * //     { // ProfilerRuleEvaluationStatus
 * //       RuleConfigurationName: "STRING_VALUE",
 * //       RuleEvaluationJobArn: "STRING_VALUE",
 * //       RuleEvaluationStatus: "InProgress" || "NoIssuesFound" || "IssuesFound" || "Error" || "Stopping" || "Stopped",
 * //       StatusDetails: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   ProfilingStatus: "Enabled" || "Disabled",
 * //   RetryStrategy: { // RetryStrategy
 * //     MaximumRetryAttempts: Number("int"), // required
 * //   },
 * //   Environment: { // TrainingEnvironmentMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   WarmPoolStatus: { // WarmPoolStatus
 * //     Status: "Available" || "Terminated" || "Reused" || "InUse", // required
 * //     ResourceRetainedBillableTimeInSeconds: Number("int"),
 * //     ReusedByJob: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTrainingJobCommandInput - {@link DescribeTrainingJobCommandInput}
 * @returns {@link DescribeTrainingJobCommandOutput}
 * @see {@link DescribeTrainingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeTrainingJobCommand extends $Command<
  DescribeTrainingJobCommandInput,
  DescribeTrainingJobCommandOutput,
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
  constructor(readonly input: DescribeTrainingJobCommandInput) {
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
  ): Handler<DescribeTrainingJobCommandInput, DescribeTrainingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrainingJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeTrainingJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeTrainingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTrainingJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTrainingJobCommandOutput> {
    return de_DescribeTrainingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

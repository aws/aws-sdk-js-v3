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

import { CreateTrainingJobRequest, CreateTrainingJobResponse } from "../models/models_1";
import { de_CreateTrainingJobCommand, se_CreateTrainingJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTrainingJobCommand}.
 */
export interface CreateTrainingJobCommandInput extends CreateTrainingJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrainingJobCommand}.
 */
export interface CreateTrainingJobCommandOutput extends CreateTrainingJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a model training job. After training completes, SageMaker saves the resulting
 *             model artifacts to an Amazon S3 location that you specify. </p>
 *          <p>If you choose to host your model using SageMaker hosting services, you can use the
 *             resulting model artifacts as part of the model. You can also use the artifacts in a
 *             machine learning service other than SageMaker, provided that you know how to use them for
 *             inference.
 *         </p>
 *          <p>In the request body, you provide the following: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AlgorithmSpecification</code> - Identifies the training algorithm to
 *                     use.
 *                     </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>HyperParameters</code> - Specify these algorithm-specific parameters to
 *                     enable the estimation of model parameters during training. Hyperparameters can
 *                     be tuned to optimize this learning process. For a list of hyperparameters for
 *                     each training algorithm provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
 *                <important>
 *                   <p>Do not include any security-sensitive information including account access
 *                         IDs, secrets or tokens in any hyperparameter field. If the use of
 *                         security-sensitive credentials are detected, SageMaker will reject your training
 *                         job request and return an exception error.</p>
 *                </important>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>InputDataConfig</code> - Describes the input required by the training
 *                     job and the Amazon S3, EFS, or FSx location where it is stored.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want
 *                     SageMaker to save the results of model training. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ResourceConfig</code> - Identifies the resources, ML compute
 *                     instances, and ML storage volumes to deploy for model training. In distributed
 *                     training, you specify more than one instance. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine
 *                     learning models by up to 80% by using Amazon EC2 Spot instances. For more
 *                     information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot
 *                         Training</a>. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RoleArn</code> - The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on
 *                     your behalf during model training.
 *
 *                     You must grant this role the necessary permissions so that SageMaker can successfully
 *                     complete model training. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StoppingCondition</code> - To help cap training costs, use
 *                         <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use
 *                         <code>MaxWaitTimeInSeconds</code> to specify how long a managed spot
 *                     training job has to complete. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Environment</code> - The environment variables to set in the Docker
 *                     container.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RetryStrategy</code> - The number of times to retry the job when the job
 *                     fails due to an <code>InternalServerError</code>.</p>
 *             </li>
 *          </ul>
 *          <p> For more information about SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTrainingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTrainingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateTrainingJobRequest
 *   TrainingJobName: "STRING_VALUE", // required
 *   HyperParameters: { // HyperParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AlgorithmSpecification: { // AlgorithmSpecification
 *     TrainingImage: "STRING_VALUE",
 *     AlgorithmName: "STRING_VALUE",
 *     TrainingInputMode: "Pipe" || "File" || "FastFile", // required
 *     MetricDefinitions: [ // MetricDefinitionList
 *       { // MetricDefinition
 *         Name: "STRING_VALUE", // required
 *         Regex: "STRING_VALUE", // required
 *       },
 *     ],
 *     EnableSageMakerMetricsTimeSeries: true || false,
 *     ContainerEntrypoint: [ // TrainingContainerEntrypoint
 *       "STRING_VALUE",
 *     ],
 *     ContainerArguments: [ // TrainingContainerArguments
 *       "STRING_VALUE",
 *     ],
 *     TrainingImageConfig: { // TrainingImageConfig
 *       TrainingRepositoryAccessMode: "Platform" || "Vpc", // required
 *       TrainingRepositoryAuthConfig: { // TrainingRepositoryAuthConfig
 *         TrainingRepositoryCredentialsProviderArn: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   InputDataConfig: [ // InputDataConfig
 *     { // Channel
 *       ChannelName: "STRING_VALUE", // required
 *       DataSource: { // DataSource
 *         S3DataSource: { // S3DataSource
 *           S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 *           S3Uri: "STRING_VALUE", // required
 *           S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 *           AttributeNames: [ // AttributeNames
 *             "STRING_VALUE",
 *           ],
 *           InstanceGroupNames: [ // InstanceGroupNames
 *             "STRING_VALUE",
 *           ],
 *         },
 *         FileSystemDataSource: { // FileSystemDataSource
 *           FileSystemId: "STRING_VALUE", // required
 *           FileSystemAccessMode: "rw" || "ro", // required
 *           FileSystemType: "EFS" || "FSxLustre", // required
 *           DirectoryPath: "STRING_VALUE", // required
 *         },
 *       },
 *       ContentType: "STRING_VALUE",
 *       CompressionType: "None" || "Gzip",
 *       RecordWrapperType: "None" || "RecordIO",
 *       InputMode: "Pipe" || "File" || "FastFile",
 *       ShuffleConfig: { // ShuffleConfig
 *         Seed: Number("long"), // required
 *       },
 *     },
 *   ],
 *   OutputDataConfig: { // OutputDataConfig
 *     KmsKeyId: "STRING_VALUE",
 *     S3OutputPath: "STRING_VALUE", // required
 *     CompressionType: "GZIP" || "NONE",
 *   },
 *   ResourceConfig: { // ResourceConfig
 *     InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge",
 *     InstanceCount: Number("int"),
 *     VolumeSizeInGB: Number("int"), // required
 *     VolumeKmsKeyId: "STRING_VALUE",
 *     InstanceGroups: [ // InstanceGroups
 *       { // InstanceGroup
 *         InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge", // required
 *         InstanceCount: Number("int"), // required
 *         InstanceGroupName: "STRING_VALUE", // required
 *       },
 *     ],
 *     KeepAlivePeriodInSeconds: Number("int"),
 *   },
 *   VpcConfig: { // VpcConfig
 *     SecurityGroupIds: [ // VpcSecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // Subnets // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   StoppingCondition: { // StoppingCondition
 *     MaxRuntimeInSeconds: Number("int"),
 *     MaxWaitTimeInSeconds: Number("int"),
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   EnableNetworkIsolation: true || false,
 *   EnableInterContainerTrafficEncryption: true || false,
 *   EnableManagedSpotTraining: true || false,
 *   CheckpointConfig: { // CheckpointConfig
 *     S3Uri: "STRING_VALUE", // required
 *     LocalPath: "STRING_VALUE",
 *   },
 *   DebugHookConfig: { // DebugHookConfig
 *     LocalPath: "STRING_VALUE",
 *     S3OutputPath: "STRING_VALUE", // required
 *     HookParameters: { // HookParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     CollectionConfigurations: [ // CollectionConfigurations
 *       { // CollectionConfiguration
 *         CollectionName: "STRING_VALUE",
 *         CollectionParameters: { // CollectionParameters
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 *   DebugRuleConfigurations: [ // DebugRuleConfigurations
 *     { // DebugRuleConfiguration
 *       RuleConfigurationName: "STRING_VALUE", // required
 *       LocalPath: "STRING_VALUE",
 *       S3OutputPath: "STRING_VALUE",
 *       RuleEvaluatorImage: "STRING_VALUE", // required
 *       InstanceType: "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge",
 *       VolumeSizeInGB: Number("int"),
 *       RuleParameters: { // RuleParameters
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   TensorBoardOutputConfig: { // TensorBoardOutputConfig
 *     LocalPath: "STRING_VALUE",
 *     S3OutputPath: "STRING_VALUE", // required
 *   },
 *   ExperimentConfig: { // ExperimentConfig
 *     ExperimentName: "STRING_VALUE",
 *     TrialName: "STRING_VALUE",
 *     TrialComponentDisplayName: "STRING_VALUE",
 *     RunName: "STRING_VALUE",
 *   },
 *   ProfilerConfig: { // ProfilerConfig
 *     S3OutputPath: "STRING_VALUE",
 *     ProfilingIntervalInMilliseconds: Number("long"),
 *     ProfilingParameters: { // ProfilingParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     DisableProfiler: true || false,
 *   },
 *   ProfilerRuleConfigurations: [ // ProfilerRuleConfigurations
 *     { // ProfilerRuleConfiguration
 *       RuleConfigurationName: "STRING_VALUE", // required
 *       LocalPath: "STRING_VALUE",
 *       S3OutputPath: "STRING_VALUE",
 *       RuleEvaluatorImage: "STRING_VALUE", // required
 *       InstanceType: "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge",
 *       VolumeSizeInGB: Number("int"),
 *       RuleParameters: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   Environment: { // TrainingEnvironmentMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RetryStrategy: { // RetryStrategy
 *     MaximumRetryAttempts: Number("int"), // required
 *   },
 * };
 * const command = new CreateTrainingJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrainingJobResponse
 * //   TrainingJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrainingJobCommandInput - {@link CreateTrainingJobCommandInput}
 * @returns {@link CreateTrainingJobCommandOutput}
 * @see {@link CreateTrainingJobCommandInput} for command's `input` shape.
 * @see {@link CreateTrainingJobCommandOutput} for command's `response` shape.
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
 */
export class CreateTrainingJobCommand extends $Command<
  CreateTrainingJobCommandInput,
  CreateTrainingJobCommandOutput,
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
  constructor(readonly input: CreateTrainingJobCommandInput) {
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
  ): Handler<CreateTrainingJobCommandInput, CreateTrainingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrainingJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateTrainingJobCommand";
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
  private serialize(input: CreateTrainingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTrainingJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrainingJobCommandOutput> {
    return de_CreateTrainingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

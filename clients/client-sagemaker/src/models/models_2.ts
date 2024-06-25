// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionSource,
  ActionStatus,
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AlgorithmStatus,
  AlgorithmStatusDetails,
  AlgorithmValidationSpecification,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppStatus,
  AppType,
  ArtifactSource,
  AsyncInferenceConfig,
  AuthMode,
  AutoMLCandidate,
  AutoMLChannel,
  AutoMLDataSplitConfig,
  AutoMLJobArtifacts,
  AutoMLJobChannel,
  AutoMLJobCompletionCriteria,
  AutoMLJobConfig,
  AutoMLJobObjective,
  AutoMLJobSecondaryStatus,
  AutoMLJobStatus,
  AutoMLOutputDataConfig,
  AutoMLPartialFailureReason,
  AutoMLProblemTypeConfig,
  AutoMLProblemTypeConfigName,
  AutoMLResolvedAttributes,
  AutoMLSecurityConfig,
  Autotune,
  BatchDataCaptureConfig,
  BatchStrategy,
  CaptureStatus,
  Channel,
  CheckpointConfig,
  ClusterInstanceGroupDetails,
  ClusterNodeDetails,
  ClusterStatus,
  CodeEditorAppImageConfig,
  CodeRepository,
  CognitoConfig,
  CognitoMemberDefinition,
  CollectionConfiguration,
  CompilationJobStatus,
  ContainerDefinition,
  ContextSource,
  GitConfig,
  HyperParameterTuningJobObjectiveType,
  InferenceSpecification,
  JupyterLabAppImageConfig,
  KernelGatewayImageConfig,
  MetadataProperties,
  ModelApprovalStatus,
  ModelDeployConfig,
  ModelPackageStatus,
  ObjectiveStatus,
  OutputDataConfig,
  ProblemType,
  ProductionVariantInstanceType,
  ResourceConfig,
  ResourceSpec,
  StoppingCondition,
  Tag,
  TrainingSpecification,
  TransformInput,
  TransformOutput,
  TransformResources,
  UserContext,
  VpcConfig,
} from "./models_0";

import {
  DataCaptureConfig,
  DataQualityAppSpecification,
  DataQualityBaselineConfig,
  DataQualityJobInput,
  DefaultSpaceSettings,
  DeploymentConfig,
  DeviceSelectionConfig,
  DomainSettings,
  DriftCheckBaselines,
  EdgeDeploymentConfig,
  EdgeDeploymentModelConfig,
  EdgeOutputConfig,
  EdgePresetDeploymentType,
  EndpointInfo,
  ExperimentConfig,
  ExplainerConfig,
  FeatureDefinition,
  FeatureType,
  FlowDefinitionOutputConfig,
  HubS3StorageConfig,
  HumanLoopActivationConfig,
  HumanLoopConfig,
  HumanLoopRequestSource,
  HumanTaskConfig,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobWarmStartConfig,
  InferenceComponentComputeResourceRequirements,
  InferenceComponentStartupParameters,
  InferenceExecutionConfig,
  InferenceExperimentDataStorageConfig,
  InferenceExperimentSchedule,
  InferenceExperimentType,
  InputConfig,
  JobType,
  JupyterServerAppSettings,
  KernelGatewayAppSettings,
  LabelingJobAlgorithmsConfig,
  LabelingJobInputConfig,
  LabelingJobOutputConfig,
  LabelingJobStoppingConditions,
  ModelBiasAppSpecification,
  ModelBiasBaselineConfig,
  ModelBiasJobInput,
  ModelCardExportOutputConfig,
  ModelCardSecurityConfig,
  ModelCardStatus,
  ModelExplainabilityAppSpecification,
  ModelExplainabilityBaselineConfig,
  ModelExplainabilityJobInput,
  ModelInfrastructureConfig,
  ModelMetrics,
  ModelPackageModelCard,
  ModelPackageModelCardFilterSensitiveLog,
  ModelPackageSecurityConfig,
  ModelPackageValidationSpecification,
  ModelQualityAppSpecification,
  ModelQualityBaselineConfig,
  ModelQualityJobInput,
  MonitoringNetworkConfig,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringStoppingCondition,
  MonitoringType,
  NeoVpcConfig,
  OfflineStoreConfig,
  OnlineStoreConfig,
  OutputConfig,
  ProcessingInstanceType,
  Processor,
  ProductionVariant,
  ProductionVariantAcceleratorType,
  ProductionVariantManagedInstanceScaling,
  ProductionVariantRoutingConfig,
  ProductionVariantServerlessConfig,
  RecommendationJobInputConfig,
  RecommendationJobStoppingConditions,
  RecommendationJobType,
  RetryStrategy,
  ShadowModeConfig,
  SkipModelValidation,
  SourceAlgorithmSpecification,
  ThroughputMode,
  TrackingServerSize,
  UserSettings,
  VendorGuidance,
} from "./models_1";

/**
 * <p>The collection of ownership settings for a space.</p>
 * @public
 */
export interface OwnershipSettings {
  /**
   * <p>The user profile who is the owner of the space.</p>
   * @public
   */
  OwnerUserProfileName: string | undefined;
}

/**
 * <p>The application settings for a Code Editor space.</p>
 * @public
 */
export interface SpaceCodeEditorAppSettings {
  /**
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *          the version runs on.</p>
   * @public
   */
  DefaultResourceSpec?: ResourceSpec;
}

/**
 * <p>A file system, created by you in Amazon EFS, that you assign to a user profile
 *             or space for an Amazon SageMaker Domain. Permitted users can access this file
 *             system in Amazon SageMaker Studio.</p>
 * @public
 */
export interface EFSFileSystem {
  /**
   * <p>The ID of your Amazon EFS file system.</p>
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * <p>A file system, created by you, that you assign to a user profile or space for an
 *                 Amazon SageMaker Domain. Permitted users can access this file system in Amazon SageMaker Studio.</p>
 * @public
 */
export type CustomFileSystem = CustomFileSystem.EFSFileSystemMember | CustomFileSystem.$UnknownMember;

/**
 * @public
 */
export namespace CustomFileSystem {
  /**
   * <p>A custom file system in Amazon EFS.</p>
   * @public
   */
  export interface EFSFileSystemMember {
    EFSFileSystem: EFSFileSystem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    EFSFileSystem?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    EFSFileSystem: (value: EFSFileSystem) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CustomFileSystem, visitor: Visitor<T>): T => {
    if (value.EFSFileSystem !== undefined) return visitor.EFSFileSystem(value.EFSFileSystem);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The settings for the JupyterLab application within a space.</p>
 * @public
 */
export interface SpaceJupyterLabAppSettings {
  /**
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *          the version runs on.</p>
   * @public
   */
  DefaultResourceSpec?: ResourceSpec;

  /**
   * <p>A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterLab application.</p>
   * @public
   */
  CodeRepositories?: CodeRepository[];
}

/**
 * <p>A collection of EBS storage settings that apply to both private and shared spaces.</p>
 * @public
 */
export interface EbsStorageSettings {
  /**
   * <p>The size of an EBS storage volume for a space.</p>
   * @public
   */
  EbsVolumeSizeInGb: number | undefined;
}

/**
 * <p>The storage settings for a space.</p>
 * @public
 */
export interface SpaceStorageSettings {
  /**
   * <p>A collection of EBS storage settings for a space.</p>
   * @public
   */
  EbsStorageSettings?: EbsStorageSettings;
}

/**
 * <p>A collection of space settings.</p>
 * @public
 */
export interface SpaceSettings {
  /**
   * <p>The JupyterServer app settings.</p>
   * @public
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;

  /**
   * <p>The KernelGateway app settings.</p>
   * @public
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;

  /**
   * <p>The Code Editor application settings.</p>
   * @public
   */
  CodeEditorAppSettings?: SpaceCodeEditorAppSettings;

  /**
   * <p>The settings for the JupyterLab application.</p>
   * @public
   */
  JupyterLabAppSettings?: SpaceJupyterLabAppSettings;

  /**
   * <p>The type of app created within the space.</p>
   * @public
   */
  AppType?: AppType;

  /**
   * <p>The storage settings for a space.</p>
   * @public
   */
  SpaceStorageSettings?: SpaceStorageSettings;

  /**
   * <p>A file system, created by you, that you assign to a space for an Amazon SageMaker
   *             Domain. Permitted users can access this file system in Amazon SageMaker
   *             Studio.</p>
   * @public
   */
  CustomFileSystems?: CustomFileSystem[];
}

/**
 * @public
 * @enum
 */
export const SharingType = {
  Private: "Private",
  Shared: "Shared",
} as const;

/**
 * @public
 */
export type SharingType = (typeof SharingType)[keyof typeof SharingType];

/**
 * <p>A collection of space sharing settings.</p>
 * @public
 */
export interface SpaceSharingSettings {
  /**
   * <p>Specifies the sharing type of the space.</p>
   * @public
   */
  SharingType: SharingType | undefined;
}

/**
 * @public
 */
export interface CreateSpaceRequest {
  /**
   * <p>The ID of the associated domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName: string | undefined;

  /**
   * <p>Tags to associated with the space. Each tag consists of a key and an optional value.
   *       Tag keys must be unique for each resource. Tags are searchable using the
   *       <code>Search</code> API.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>A collection of space settings.</p>
   * @public
   */
  SpaceSettings?: SpaceSettings;

  /**
   * <p>A collection of ownership settings.</p>
   * @public
   */
  OwnershipSettings?: OwnershipSettings;

  /**
   * <p>A collection of space sharing settings.</p>
   * @public
   */
  SpaceSharingSettings?: SpaceSharingSettings;

  /**
   * <p>The name of the space that appears in the SageMaker Studio UI.</p>
   * @public
   */
  SpaceDisplayName?: string;
}

/**
 * @public
 */
export interface CreateSpaceResponse {
  /**
   * <p>The space's Amazon Resource Name (ARN).</p>
   * @public
   */
  SpaceArn?: string;
}

/**
 * @public
 * @enum
 */
export const StudioLifecycleConfigAppType = {
  CodeEditor: "CodeEditor",
  JupyterLab: "JupyterLab",
  JupyterServer: "JupyterServer",
  KernelGateway: "KernelGateway",
} as const;

/**
 * @public
 */
export type StudioLifecycleConfigAppType =
  (typeof StudioLifecycleConfigAppType)[keyof typeof StudioLifecycleConfigAppType];

/**
 * @public
 */
export interface CreateStudioLifecycleConfigRequest {
  /**
   * <p>The name of the Amazon SageMaker Studio Lifecycle Configuration to create.</p>
   * @public
   */
  StudioLifecycleConfigName: string | undefined;

  /**
   * <p>The content of your Amazon SageMaker Studio Lifecycle Configuration script. This content must be base64 encoded.</p>
   * @public
   */
  StudioLifecycleConfigContent: string | undefined;

  /**
   * <p>The App type that the Lifecycle Configuration is attached to.</p>
   * @public
   */
  StudioLifecycleConfigAppType: StudioLifecycleConfigAppType | undefined;

  /**
   * <p>Tags to be associated with the Lifecycle Configuration. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API. </p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateStudioLifecycleConfigResponse {
  /**
   * <p>The ARN of your created Lifecycle Configuration.</p>
   * @public
   */
  StudioLifecycleConfigArn?: string;
}

/**
 * <p>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and
 *             storage paths. To learn more about
 *             how to configure the <code>DebugHookConfig</code> parameter,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
 * @public
 */
export interface DebugHookConfig {
  /**
   * <p>Path to local storage location for metrics and tensors. Defaults to
   *                 <code>/opt/ml/output/tensors/</code>.</p>
   * @public
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for metrics and tensors.</p>
   * @public
   */
  S3OutputPath: string | undefined;

  /**
   * <p>Configuration information for the Amazon SageMaker Debugger hook parameters.</p>
   * @public
   */
  HookParameters?: Record<string, string>;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger tensor collections. To learn more about
   *             how to configure the <code>CollectionConfiguration</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   * @public
   */
  CollectionConfigurations?: CollectionConfiguration[];
}

/**
 * <p>Configuration information for SageMaker Debugger rules for debugging. To learn more about
 *             how to configure the <code>DebugRuleConfiguration</code> parameter,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
 * @public
 */
export interface DebugRuleConfiguration {
  /**
   * <p>The name of the rule configuration. It must be unique relative to other rule
   *             configuration names.</p>
   * @public
   */
  RuleConfigurationName: string | undefined;

  /**
   * <p>Path to local storage location for output of rules. Defaults to
   *                 <code>/opt/ml/processing/output/rule/</code>.</p>
   * @public
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for rules.</p>
   * @public
   */
  S3OutputPath?: string;

  /**
   * <p>The Amazon Elastic Container (ECR) Image for the managed rule evaluation.</p>
   * @public
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * <p>The instance type to deploy a custom rule for debugging a training job.</p>
   * @public
   */
  InstanceType?: ProcessingInstanceType;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   * @public
   */
  VolumeSizeInGB?: number;

  /**
   * <p>Runtime configuration for rule container.</p>
   * @public
   */
  RuleParameters?: Record<string, string>;
}

/**
 * <p>Configuration information for the infrastructure health check of a training job. A SageMaker-provided health check tests the health of instance hardware and cluster network
 *       connectivity.</p>
 * @public
 */
export interface InfraCheckConfig {
  /**
   * <p>Enables an infrastructure health check.</p>
   * @public
   */
  EnableInfraCheck?: boolean;
}

/**
 * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
 *             storage paths.</p>
 * @public
 */
export interface ProfilerConfig {
  /**
   * <p>Path to Amazon S3 storage location for system and framework metrics.</p>
   * @public
   */
  S3OutputPath?: string;

  /**
   * <p>A time interval for capturing system metrics in milliseconds. Available values are
   *             100, 200, 500, 1000 (1 second), 5000 (5 seconds), and 60000 (1 minute) milliseconds. The default value is 500 milliseconds.</p>
   * @public
   */
  ProfilingIntervalInMilliseconds?: number;

  /**
   * <p>Configuration information for capturing framework metrics. Available key strings for different profiling options are
   *             <code>DetailedProfilingConfig</code>, <code>PythonProfilingConfig</code>, and <code>DataLoaderProfilingConfig</code>.
   *             The following codes are configuration structures for the <code>ProfilingParameters</code> parameter. To learn more about
   *             how to configure the <code>ProfilingParameters</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
   *         </p>
   * @public
   */
  ProfilingParameters?: Record<string, string>;

  /**
   * <p>Configuration to turn off Amazon SageMaker Debugger's system monitoring and profiling functionality. To turn it off, set to <code>True</code>.</p>
   * @public
   */
  DisableProfiler?: boolean;
}

/**
 * <p>Configuration information for profiling rules.</p>
 * @public
 */
export interface ProfilerRuleConfiguration {
  /**
   * <p>The name of the rule configuration. It must be unique relative to other rule configuration names.</p>
   * @public
   */
  RuleConfigurationName: string | undefined;

  /**
   * <p>Path to local storage location for output of rules. Defaults to <code>/opt/ml/processing/output/rule/</code>. </p>
   * @public
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for rules.</p>
   * @public
   */
  S3OutputPath?: string;

  /**
   * <p>The Amazon Elastic Container Registry Image for the managed rule evaluation.</p>
   * @public
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * <p>The instance type to deploy a custom rule for profiling a training job.</p>
   * @public
   */
  InstanceType?: ProcessingInstanceType;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   * @public
   */
  VolumeSizeInGB?: number;

  /**
   * <p>Runtime configuration for rule container.</p>
   * @public
   */
  RuleParameters?: Record<string, string>;
}

/**
 * <p>Configuration for remote debugging for the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a> API. To learn more about the remote debugging
 *             functionality of SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html">Access a training container
 *                 through Amazon Web Services Systems Manager (SSM) for remote
 *             debugging</a>.</p>
 * @public
 */
export interface RemoteDebugConfig {
  /**
   * <p>If set to True, enables remote debugging.</p>
   * @public
   */
  EnableRemoteDebug?: boolean;
}

/**
 * <p>Contains information about attribute-based access control (ABAC) for a training job.
 *             The session chaining configuration uses Amazon Security Token Service (STS) for your training job to
 *             request temporary, limited-privilege credentials to tenants. For more information, see
 *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-access-training-data.html#model-access-training-data-abac">Attribute-based access control (ABAC) for multi-tenancy training</a>.</p>
 * @public
 */
export interface SessionChainingConfig {
  /**
   * <p>Set to <code>True</code> to allow SageMaker to extract session tags from a training job
   *             creation role and reuse these tags when assuming the training job execution role.</p>
   * @public
   */
  EnableSessionTagChaining?: boolean;
}

/**
 * <p>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</p>
 * @public
 */
export interface TensorBoardOutputConfig {
  /**
   * <p>Path to local storage location for tensorBoard output. Defaults to
   *                 <code>/opt/ml/output/tensorboard</code>.</p>
   * @public
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for TensorBoard output.</p>
   * @public
   */
  S3OutputPath: string | undefined;
}

/**
 * @public
 */
export interface CreateTrainingJobRequest {
  /**
   * <p>The name of the training job. The name must be unique within an Amazon Web Services
   *             Region in an Amazon Web Services account. </p>
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * <p>Algorithm-specific parameters that influence the quality of the model. You set
   *             hyperparameters before you start the learning process. For a list of hyperparameters for
   *             each training algorithm provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
   *          <p>You can specify a maximum of 100 hyperparameters. Each hyperparameter is a
   *             key-value pair. Each key and value is limited to 256 characters, as specified by the
   *                 <code>Length Constraint</code>. </p>
   *          <important>
   *             <p>Do not include any security-sensitive information including account access IDs,
   *                 secrets or tokens in any hyperparameter field. If the use of security-sensitive
   *                 credentials are detected, SageMaker will reject your training job request and return an
   *                 exception error.</p>
   *          </important>
   * @public
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>The registry path of the Docker image that contains the training algorithm and
   *             algorithm-specific metadata, including the input mode. For more information about
   *             algorithms provided by SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about
   *             providing your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with
   *                 Amazon SageMaker</a>. </p>
   * @public
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that SageMaker can assume to perform
   *             tasks on your behalf. </p>
   *          <p>During model training, SageMaker needs your permission to read input data from an S3
   *             bucket, download a Docker image that contains training code, write model artifacts to an
   *             S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant
   *             permissions for all of these tasks to an IAM role. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">SageMaker
   *                 Roles</a>. </p>
   *          <note>
   *             <p>To be able to pass this role to SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *          </note>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>An array of <code>Channel</code> objects. Each channel is a named input source.
   *                 <code>InputDataConfig</code> describes the input data and its location. </p>
   *          <p>Algorithms can accept input data from one or more channels. For example, an
   *             algorithm might have two channels of input data, <code>training_data</code> and
   *                 <code>validation_data</code>. The configuration for each channel provides the S3,
   *             EFS, or FSx location where the input data is stored. It also provides information about
   *             the stored data: the MIME type, compression method, and whether the data is wrapped in
   *             RecordIO format. </p>
   *          <p>Depending on the input mode that the algorithm supports, SageMaker either copies input
   *             data files from an S3 bucket to a local directory in the Docker container, or makes it
   *             available as input streams. For example, if you specify an EFS location, input data
   *             files are available as input streams. They do not need to be downloaded.</p>
   *          <p>Your input must be in the same Amazon Web Services region as your training
   *             job.</p>
   * @public
   */
  InputDataConfig?: Channel[];

  /**
   * <p>Specifies the path to the S3 location where you want to store model artifacts. SageMaker
   *             creates subfolders for the artifacts. </p>
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources, including the ML compute instances and ML storage volumes, to use
   *             for model training. </p>
   *          <p>ML storage volumes store model artifacts and incremental states. Training
   *             algorithms might also use ML storage volumes for scratch space. If you want SageMaker to use
   *             the ML storage volume to store the training data, choose <code>File</code> as the
   *                 <code>TrainingInputMode</code> in the algorithm specification. For distributed
   *             training algorithms, specify an instance count greater than 1.</p>
   * @public
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that you want your training job to
   *             connect to. Control access to and from your training container by configuring the VPC.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   * @public
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *          <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             you enable network isolation for training jobs that are configured to use a VPC, SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   * @public
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-encrypt.html">Protect Communications Between ML
   *                 Compute Instances in a Distributed Training Job</a>.</p>
   * @public
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>To train models using managed spot training, choose <code>True</code>. Managed spot
   *             training provides a fully managed and scalable infrastructure for training machine
   *             learning models. this option is useful when training jobs can be interrupted and when
   *             there is flexibility when the training job is run. </p>
   *          <p>The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be
   *             used as a starting point to train models incrementally. Amazon SageMaker provides metrics and
   *             logs in CloudWatch. They can be used to see when managed spot training jobs are running,
   *             interrupted, resumed, or completed. </p>
   * @public
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data.</p>
   * @public
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and
   *             storage paths. To learn more about
   *             how to configure the <code>DebugHookConfig</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   * @public
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for debugging output tensors.</p>
   * @public
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</p>
   * @public
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html">CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html">CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   * @public
   */
  ProfilerConfig?: ProfilerConfig;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for profiling system and framework
   *             metrics.</p>
   * @public
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];

  /**
   * <p>The environment variables to set in the Docker container.</p>
   * @public
   */
  Environment?: Record<string, string>;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   * @public
   */
  RetryStrategy?: RetryStrategy;

  /**
   * <p>Configuration for remote debugging. To learn more about the remote debugging
   *             functionality of SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html">Access a training container
   *                 through Amazon Web Services Systems Manager (SSM) for remote
   *             debugging</a>.</p>
   * @public
   */
  RemoteDebugConfig?: RemoteDebugConfig;

  /**
   * <p>Contains information about the infrastructure health check configuration for the training job.</p>
   * @public
   */
  InfraCheckConfig?: InfraCheckConfig;

  /**
   * <p>Contains information about attribute-based access control (ABAC) for the training
   *             job.</p>
   * @public
   */
  SessionChainingConfig?: SessionChainingConfig;
}

/**
 * @public
 */
export interface CreateTrainingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   * @public
   */
  TrainingJobArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JoinSource = {
  INPUT: "Input",
  NONE: "None",
} as const;

/**
 * @public
 */
export type JoinSource = (typeof JoinSource)[keyof typeof JoinSource];

/**
 * <p>The data structure used to specify the data to be used for inference in a batch
 *             transform job and to associate the data that is relevant to the prediction results in
 *             the output. The input filter provided allows you to exclude input data that is not
 *             needed for inference in a batch transform job. The output filter provided allows you to
 *             include input data relevant to interpreting the predictions in the output from the job.
 *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
 *                 Results with their Corresponding Input Records</a>.</p>
 * @public
 */
export interface DataProcessing {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the input data to pass to
   *             the algorithm. Use the <code>InputFilter</code> parameter to exclude fields, such as an
   *             ID column, from the input. If you want SageMaker to pass the entire input dataset to the
   *             algorithm, accept the default value <code>$</code>.</p>
   *          <p>Examples: <code>"$"</code>, <code>"$[1:]"</code>, <code>"$.features"</code>
   *          </p>
   * @public
   */
  InputFilter?: string;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the joined dataset to save
   *             in the output file for a batch transform job. If you want SageMaker to store the entire input
   *             dataset in the output file, leave the default value, <code>$</code>. If you specify
   *             indexes that aren't within the dimension size of the joined dataset, you get an
   *             error.</p>
   *          <p>Examples: <code>"$"</code>, <code>"$[0,5:]"</code>,
   *                 <code>"$['id','SageMakerOutput']"</code>
   *          </p>
   * @public
   */
  OutputFilter?: string;

  /**
   * <p>Specifies the source of the data to join with the transformed data. The valid values
   *             are <code>None</code> and <code>Input</code>. The default value is <code>None</code>,
   *             which specifies not to join the input with the transformed data. If you want the batch
   *             transform job to join the original input data with the transformed data, set
   *                 <code>JoinSource</code> to <code>Input</code>. You can specify
   *                 <code>OutputFilter</code> as an additional filter to select a portion of the joined
   *             dataset and store it in the output file.</p>
   *          <p>For JSON or JSONLines objects, such as a JSON array, SageMaker adds the transformed data to
   *             the input JSON object in an attribute called <code>SageMakerOutput</code>. The joined
   *             result for JSON must be a key-value pair object. If the input is not a key-value pair
   *             object, SageMaker creates a new JSON file. In the new JSON file, and the input data is stored
   *             under the <code>SageMakerInput</code> key and the results are stored in
   *                 <code>SageMakerOutput</code>.</p>
   *          <p>For CSV data, SageMaker takes each row as a JSON array and joins the transformed data with
   *             the input by appending each transformed row to the end of the input. The joined data has
   *             the original input data followed by the transformed data and the output is a CSV
   *             file.</p>
   *          <p>For information on how joining in applied, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#batch-transform-data-processing-workflow">Workflow for Associating Inferences with Input Records</a>.</p>
   * @public
   */
  JoinSource?: JoinSource;
}

/**
 * <p>Configures the timeout and maximum number of retries for processing a transform job
 *             invocation.</p>
 * @public
 */
export interface ModelClientConfig {
  /**
   * <p>The timeout value in seconds for an invocation request. The default value is
   *             600.</p>
   * @public
   */
  InvocationsTimeoutInSeconds?: number;

  /**
   * <p>The maximum number of retries when invocation requests are failing. The default value
   *             is 3.</p>
   * @public
   */
  InvocationsMaxRetries?: number;
}

/**
 * @public
 */
export interface CreateTransformJobRequest {
  /**
   * <p>The name of the transform job. The name must be unique within an Amazon Web Services Region in an
   *             Amazon Web Services account. </p>
   * @public
   */
  TransformJobName: string | undefined;

  /**
   * <p>The name of the model that you want to use for the transform job.
   *             <code>ModelName</code> must be the name of an existing Amazon SageMaker model within an Amazon Web Services
   *             Region in an Amazon Web Services account.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a
   *             transform job. If <code>MaxConcurrentTransforms</code> is set to <code>0</code> or left
   *             unset, Amazon SageMaker checks the optional execution-parameters to determine the settings for your
   *             chosen algorithm. If the execution-parameters endpoint is not enabled, the default value
   *             is <code>1</code>. For more information on execution-parameters, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-batch-code.html#your-algorithms-batch-code-how-containe-serves-requests">How Containers Serve Requests</a>. For built-in algorithms, you don't need to
   *             set a value for <code>MaxConcurrentTransforms</code>.</p>
   * @public
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>Configures the timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   * @public
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * <p>The maximum allowed size of the payload, in MB. A <i>payload</i> is the
   *             data portion of a record (without metadata). The value in <code>MaxPayloadInMB</code>
   *             must be greater than, or equal to, the size of a single record. To estimate the size of
   *             a record in MB, divide the size of your dataset by the number of records. To ensure that
   *             the records fit within the maximum payload size, we recommend using a slightly larger
   *             value. The default value is <code>6</code> MB.
   *             </p>
   *          <p>The value of <code>MaxPayloadInMB</code> cannot be greater than 100 MB. If you specify
   *             the <code>MaxConcurrentTransforms</code> parameter, the value of
   *                 <code>(MaxConcurrentTransforms * MaxPayloadInMB)</code> also cannot exceed 100
   *             MB.</p>
   *          <p>For cases where the payload might be arbitrarily large and is transmitted using HTTP
   *             chunked encoding, set the value to <code>0</code>.
   *             This
   *             feature works only in supported algorithms. Currently, Amazon SageMaker built-in
   *             algorithms do not support HTTP chunked encoding.</p>
   * @public
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference
   *             request. A <i>record</i>
   *             <i></i> is a single unit of input data that
   *             inference can be made on. For example, a single line in a CSV file is a record. </p>
   *          <p>To enable the batch strategy, you must set the <code>SplitType</code> property to
   *                 <code>Line</code>, <code>RecordIO</code>, or <code>TFRecord</code>.</p>
   *          <p>To use only one record when making an HTTP invocation request to a container, set
   *                 <code>BatchStrategy</code> to <code>SingleRecord</code> and <code>SplitType</code>
   *             to <code>Line</code>.</p>
   *          <p>To fit as many records in a mini-batch as can fit within the
   *                 <code>MaxPayloadInMB</code> limit, set <code>BatchStrategy</code> to
   *                 <code>MultiRecord</code> and <code>SplitType</code> to <code>Line</code>.</p>
   * @public
   */
  BatchStrategy?: BatchStrategy;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   * @public
   */
  Environment?: Record<string, string>;

  /**
   * <p>Describes the input source and
   *             the
   *             way the transform job consumes it.</p>
   * @public
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Describes the results of the transform job.</p>
   * @public
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * <p>Configuration to control how SageMaker captures inference data.</p>
   * @public
   */
  DataCaptureConfig?: BatchDataCaptureConfig;

  /**
   * <p>Describes the resources, including
   *             ML
   *             instance types and ML instance count, to use for the transform
   *             job.</p>
   * @public
   */
  TransformResources: TransformResources | undefined;

  /**
   * <p>The data structure used to specify the data to be used for inference in a batch
   *             transform job and to associate the data that is relevant to the prediction results in
   *             the output. The input filter provided allows you to exclude input data that is not
   *             needed for inference in a batch transform job. The output filter provided allows you to
   *             include input data relevant to interpreting the predictions in the output from the job.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
   *                 Results with their Corresponding Input Records</a>.</p>
   * @public
   */
  DataProcessing?: DataProcessing;

  /**
   * <p>(Optional)
   *             An
   *             array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
   *                 Guide</i>.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html">CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html">CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ExperimentConfig?: ExperimentConfig;
}

/**
 * @public
 */
export interface CreateTransformJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   * @public
   */
  TransformJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateTrialRequest {
  /**
   * <p>The name of the trial. The name must be unique in your Amazon Web Services account and is not
   *       case-sensitive.</p>
   * @public
   */
  TrialName: string | undefined;

  /**
   * <p>The name of the trial as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment to associate the trial with.</p>
   * @public
   */
  ExperimentName: string | undefined;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to associate with the trial. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to
   *       search on the tags.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   * @public
   */
  TrialArn?: string;
}

/**
 * <p>Represents an input or output artifact of a trial component. You specify
 *         <code>TrialComponentArtifact</code> as part of the <code>InputArtifacts</code> and
 *       <code>OutputArtifacts</code> parameters in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrialComponent.html">CreateTrialComponent</a>
 *       request.</p>
 *          <p>Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and
 *       instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p>
 * @public
 */
export interface TrialComponentArtifact {
  /**
   * <p>The media type of the artifact, which indicates the type of data in the artifact file. The
   *       media type consists of a <i>type</i> and a <i>subtype</i>
   *       concatenated with a slash (/) character, for example, text/csv, image/jpeg, and s3/uri. The
   *       type specifies the category of the media. The subtype specifies the kind of data.</p>
   * @public
   */
  MediaType?: string;

  /**
   * <p>The location of the artifact.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or
 *         <code>StringValue</code> can be specified.</p>
 *          <p>This object is specified in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrialComponent.html">CreateTrialComponent</a> request.</p>
 * @public
 */
export type TrialComponentParameterValue =
  | TrialComponentParameterValue.NumberValueMember
  | TrialComponentParameterValue.StringValueMember
  | TrialComponentParameterValue.$UnknownMember;

/**
 * @public
 */
export namespace TrialComponentParameterValue {
  /**
   * <p>The string value of a categorical hyperparameter. If you specify a value for this
   *       parameter, you can't specify the <code>NumberValue</code> parameter.</p>
   * @public
   */
  export interface StringValueMember {
    StringValue: string;
    NumberValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The numeric value of a numeric hyperparameter. If you specify a value for this parameter,
   *       you can't specify the <code>StringValue</code> parameter.</p>
   * @public
   */
  export interface NumberValueMember {
    StringValue?: never;
    NumberValue: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    NumberValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringValue: (value: string) => T;
    NumberValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TrialComponentParameterValue, visitor: Visitor<T>): T => {
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    if (value.NumberValue !== undefined) return visitor.NumberValue(value.NumberValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const TrialComponentPrimaryStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type TrialComponentPrimaryStatus =
  (typeof TrialComponentPrimaryStatus)[keyof typeof TrialComponentPrimaryStatus];

/**
 * <p>The status of the trial component.</p>
 * @public
 */
export interface TrialComponentStatus {
  /**
   * <p>The status of the trial component.</p>
   * @public
   */
  PrimaryStatus?: TrialComponentPrimaryStatus;

  /**
   * <p>If the component failed, a message describing why.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 */
export interface CreateTrialComponentRequest {
  /**
   * <p>The name of the component. The name must be unique in your Amazon Web Services account and is not
   *       case-sensitive.</p>
   * @public
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the component as displayed. The name doesn't need to be unique. If
   *         <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The status of the component. States include:</p>
   *          <ul>
   *             <li>
   *                <p>InProgress</p>
   *             </li>
   *             <li>
   *                <p>Completed</p>
   *             </li>
   *             <li>
   *                <p>Failed</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The hyperparameters for the component.</p>
   * @public
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The input artifacts for the component. Examples of input artifacts are datasets,
   *       algorithms, hyperparameters, source code, and instance types.</p>
   * @public
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts for the component. Examples of output artifacts are metrics,
   *       snapshots, logs, and images.</p>
   * @public
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>A list of tags to associate with the component. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API
   *       to search on the tags.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   * @public
   */
  TrialComponentArn?: string;
}

/**
 * @public
 */
export interface CreateUserProfileRequest {
  /**
   * <p>The ID of the associated Domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>A name for the UserProfile. This value is not case sensitive.</p>
   * @public
   */
  UserProfileName: string | undefined;

  /**
   * <p>A specifier for the type of value specified in SingleSignOnUserValue.  Currently, the only supported value is "UserName".
   *           If the Domain's AuthMode is IAM Identity Center, this field is required.  If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
   *        </p>
   * @public
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * <p>The username of the associated Amazon Web Services Single Sign-On User for this UserProfile.  If the Domain's AuthMode is IAM Identity Center, this field is
   *           required, and must match a valid username of a user in your directory.  If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
   *        </p>
   * @public
   */
  SingleSignOnUserValue?: string;

  /**
   * <p>Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource.</p>
   *          <p>Tags that you specify for the User Profile are also added to all Apps that the
   *           User Profile launches.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>A collection of settings.</p>
   * @public
   */
  UserSettings?: UserSettings;
}

/**
 * @public
 */
export interface CreateUserProfileResponse {
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   * @public
   */
  UserProfileArn?: string;
}

/**
 * <p>Use this parameter to configure your OIDC Identity Provider (IdP).</p>
 * @public
 */
export interface OidcConfig {
  /**
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The OIDC IdP client secret used to configure your private workforce.</p>
   * @public
   */
  ClientSecret: string | undefined;

  /**
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   * @public
   */
  Issuer: string | undefined;

  /**
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   * @public
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   * @public
   */
  TokenEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   * @public
   */
  UserInfoEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   * @public
   */
  LogoutEndpoint: string | undefined;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   * @public
   */
  JwksUri: string | undefined;

  /**
   * <p>An array of string identifiers used to refer to the specific pieces of user data or claims that the client application wants to access.</p>
   * @public
   */
  Scope?: string;

  /**
   * <p>A string to string map of identifiers specific to the custom identity provider (IdP) being used.</p>
   * @public
   */
  AuthenticationRequestExtraParams?: Record<string, string>;
}

/**
 * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
 *             list of IP addresses for a private workforce. Workers will only be able to log in to their worker portal from an
 *             IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</p>
 * @public
 */
export interface SourceIpConfig {
  /**
   * <p>A list of one to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Classless Inter-Domain Routing</a> (CIDR) values.</p>
   *          <p>Maximum: Ten CIDR values</p>
   *          <note>
   *             <p>The following Length Constraints apply to individual CIDR values in
   *                 the CIDR value list.</p>
   *          </note>
   * @public
   */
  Cidrs: string[] | undefined;
}

/**
 * <p>The VPC object you use to create or update a workforce.</p>
 * @public
 */
export interface WorkforceVpcConfigRequest {
  /**
   * <p>The ID of the VPC that the workforce uses for communication.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>The VPC security group IDs, in the form <code>sg-xxxxxxxx</code>. The security groups must be for the same VPC as specified in the subnet.</p>
   * @public
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the subnets in the VPC that you want to connect.</p>
   * @public
   */
  Subnets?: string[];
}

/**
 * @public
 */
export interface CreateWorkforceRequest {
  /**
   * <p>Use this parameter to configure an Amazon Cognito private workforce.
   *       A single Cognito workforce is created using and corresponds to a single
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       Amazon Cognito user pool</a>.</p>
   *          <p>Do not use <code>OidcConfig</code> if you specify values for
   *       <code>CognitoConfig</code>.</p>
   * @public
   */
  CognitoConfig?: CognitoConfig;

  /**
   * <p>Use this parameter to configure a private workforce using your own OIDC Identity Provider.</p>
   *          <p>Do not use <code>CognitoConfig</code> if you specify values for
   *       <code>OidcConfig</code>.</p>
   * @public
   */
  OidcConfig?: OidcConfig;

  /**
   * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
   *             list of IP addresses for a private workforce. Workers will only be able to log in to their worker portal from an
   *             IP address within this range. By default, a workforce isn't restricted to specific IP addresses.</p>
   * @public
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>The name of the private workforce.</p>
   * @public
   */
  WorkforceName: string | undefined;

  /**
   * <p>An array of key-value pairs that contain metadata to help you categorize and
   *       organize our workforce. Each tag consists of a key and a value,
   *       both of which you define.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Use this parameter to configure a workforce using VPC.</p>
   * @public
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest;
}

/**
 * @public
 */
export interface CreateWorkforceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   * @public
   */
  WorkforceArn: string | undefined;
}

/**
 * <p>A list of user groups that exist in your OIDC Identity Provider (IdP).
 *             One to ten groups can be used to create a single private work team.
 *             When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
 *             private work teams. If you add a user group to a private work team, all workers in that user group
 *             are added to the work team.</p>
 * @public
 */
export interface OidcMemberDefinition {
  /**
   * <p>A list of comma seperated strings that identifies
   *             user groups in your OIDC IdP. Each user group is
   *             made up of a group of private workers.</p>
   * @public
   */
  Groups?: string[];
}

/**
 * <p>Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.</p>
 * @public
 */
export interface MemberDefinition {
  /**
   * <p>The Amazon Cognito user group that is part of the work team.</p>
   * @public
   */
  CognitoMemberDefinition?: CognitoMemberDefinition;

  /**
   * <p>A list user groups that exist in your OIDC Identity Provider (IdP).
   *             One to ten groups can be used to create a single private work team.
   *             When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more
   *             private work teams. If you add a user group to a private work team, all workers in that user group
   *             are added to the work team.</p>
   * @public
   */
  OidcMemberDefinition?: OidcMemberDefinition;
}

/**
 * <p>Configures Amazon SNS notifications of available or expiring work items for work
 *             teams.</p>
 * @public
 */
export interface NotificationConfiguration {
  /**
   * <p>The ARN for the Amazon SNS topic to which notifications should be published.</p>
   * @public
   */
  NotificationTopicArn?: string;
}

/**
 * @public
 * @enum
 */
export const EnabledOrDisabled = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type EnabledOrDisabled = (typeof EnabledOrDisabled)[keyof typeof EnabledOrDisabled];

/**
 * <p>Use this parameter to specify a supported global condition key that is added to the IAM policy.</p>
 * @public
 */
export interface IamPolicyConstraints {
  /**
   * <p>When <code>SourceIp</code> is <code>Enabled</code> the worker's IP address when a task is rendered in the worker portal is added to the IAM policy as a <code>Condition</code> used to generate the Amazon S3 presigned URL. This IP address is checked by Amazon S3 and must match in order for the Amazon S3 resource to be rendered in the worker portal.</p>
   * @public
   */
  SourceIp?: EnabledOrDisabled;

  /**
   * <p>When <code>VpcSourceIp</code> is <code>Enabled</code> the worker's IP address when a task is rendered in private worker portal inside the VPC is added to the IAM policy as a <code>Condition</code> used to generate the Amazon S3 presigned URL. To render the task successfully Amazon S3 checks that the presigned URL is being accessed over an Amazon S3 VPC Endpoint, and that the worker's IP address matches the IP address in the IAM policy. To learn more about configuring private worker portal, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/samurai-vpc-worker-portal.html">Use Amazon VPC mode from a private worker portal</a>.</p>
   * @public
   */
  VpcSourceIp?: EnabledOrDisabled;
}

/**
 * <p>This object defines the access restrictions to Amazon S3 resources that are included in custom worker task templates using the Liquid filter, <code>grant_read_access</code>.</p>
 *          <p>To learn more about how custom templates are created, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-custom-templates.html">Create custom worker task templates</a>.</p>
 * @public
 */
export interface S3Presign {
  /**
   * <p>Use this parameter to specify the allowed request source. Possible sources are either <code>SourceIp</code> or <code>VpcSourceIp</code>.</p>
   * @public
   */
  IamPolicyConstraints?: IamPolicyConstraints;
}

/**
 * <p>Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL.</p>
 * @public
 */
export interface WorkerAccessConfiguration {
  /**
   * <p>Defines any Amazon S3 resource constraints.</p>
   * @public
   */
  S3Presign?: S3Presign;
}

/**
 * @public
 */
export interface CreateWorkteamRequest {
  /**
   * <p>The name of the work team. Use this name to identify the work team.</p>
   * @public
   */
  WorkteamName: string | undefined;

  /**
   * <p>The name of the workforce.</p>
   * @public
   */
  WorkforceName?: string;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *          <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For
   *             private workforces created using Amazon Cognito use <code>CognitoMemberDefinition</code>. For
   *             workforces created using your own OIDC identity provider (IdP) use
   *                 <code>OidcMemberDefinition</code>. Do not provide input for both of these parameters
   *             in a single request.</p>
   *          <p>For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito
   *                 <i>user groups</i> within the user pool used to create a workforce. All of the
   *                 <code>CognitoMemberDefinition</code> objects that make up the member definition must
   *             have the same <code>ClientId</code> and <code>UserPool</code> values. To add a Amazon
   *             Cognito user group to an existing worker pool, see <a href="">Adding groups to a User
   *                 Pool</a>. For more information about user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *          <p>For workforces created using your own OIDC IdP, specify the user groups that you want to
   *         include in your private work team in <code>OidcMemberDefinition</code> by listing those groups
   *         in <code>Groups</code>.</p>
   * @public
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>A description of the work team.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Configures notification of workers regarding available or expiring work items.</p>
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * <p>Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL.</p>
   * @public
   */
  WorkerAccessConfiguration?: WorkerAccessConfiguration;

  /**
   * <p>An array of key-value pairs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html">Resource
   *                 Tag</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                     Cost Allocation Tags</a> in the <i> Amazon Web Services Billing and Cost Management User
   *                 Guide</i>.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateWorkteamResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team. You can use this ARN to identify the
   *             work team.</p>
   * @public
   */
  WorkteamArn?: string;
}

/**
 * @public
 * @enum
 */
export const CrossAccountFilterOption = {
  CROSS_ACCOUNT: "CrossAccount",
  SAME_ACCOUNT: "SameAccount",
} as const;

/**
 * @public
 */
export type CrossAccountFilterOption = (typeof CrossAccountFilterOption)[keyof typeof CrossAccountFilterOption];

/**
 * @public
 * @enum
 */
export const Statistic = {
  AVERAGE: "Average",
  MAXIMUM: "Maximum",
  MINIMUM: "Minimum",
  SAMPLE_COUNT: "SampleCount",
  SUM: "Sum",
} as const;

/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * <p>A customized metric.</p>
 * @public
 */
export interface CustomizedMetricSpecification {
  /**
   * <p>The name of the customized metric.</p>
   * @public
   */
  MetricName?: string;

  /**
   * <p>The namespace of the customized metric.</p>
   * @public
   */
  Namespace?: string;

  /**
   * <p>The statistic of the customized metric.</p>
   * @public
   */
  Statistic?: Statistic;
}

/**
 * <p>The currently active data capture configuration used by your Endpoint.</p>
 * @public
 */
export interface DataCaptureConfigSummary {
  /**
   * <p>Whether data capture is enabled or disabled.</p>
   * @public
   */
  EnableCapture: boolean | undefined;

  /**
   * <p>Whether data capture is currently functional.</p>
   * @public
   */
  CaptureStatus: CaptureStatus | undefined;

  /**
   * <p>The percentage of requests being captured by your Endpoint.</p>
   * @public
   */
  CurrentSamplingPercentage: number | undefined;

  /**
   * <p>The Amazon S3 location being used to capture the data.</p>
   * @public
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p>The KMS key being used to encrypt the data in Amazon S3.</p>
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleEvaluationStatus = {
  ERROR: "Error",
  IN_PROGRESS: "InProgress",
  ISSUES_FOUND: "IssuesFound",
  NO_ISSUES_FOUND: "NoIssuesFound",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type RuleEvaluationStatus = (typeof RuleEvaluationStatus)[keyof typeof RuleEvaluationStatus];

/**
 * <p>Information about the status of the rule evaluation.</p>
 * @public
 */
export interface DebugRuleEvaluationStatus {
  /**
   * <p>The name of the rule configuration.</p>
   * @public
   */
  RuleConfigurationName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   * @public
   */
  RuleEvaluationJobArn?: string;

  /**
   * <p>Status of the rule evaluation.</p>
   * @public
   */
  RuleEvaluationStatus?: RuleEvaluationStatus;

  /**
   * <p>Details from the rule evaluation.</p>
   * @public
   */
  StatusDetails?: string;

  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface DeleteActionRequest {
  /**
   * <p>The name of the action to delete.</p>
   * @public
   */
  ActionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteActionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   * @public
   */
  ActionArn?: string;
}

/**
 * @public
 */
export interface DeleteAlgorithmInput {
  /**
   * <p>The name of the algorithm to delete.</p>
   * @public
   */
  AlgorithmName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name. If this value is not set, then <code>SpaceName</code> must be set.</p>
   * @public
   */
  UserProfileName?: string;

  /**
   * <p>The name of the space. If this value is not set, then <code>UserProfileName</code>
   *       must be set.</p>
   * @public
   */
  SpaceName?: string;

  /**
   * <p>The type of app.</p>
   * @public
   */
  AppType: AppType | undefined;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  AppName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to delete.</p>
   * @public
   */
  AppImageConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to delete.</p>
   * @public
   */
  ArtifactArn?: string;

  /**
   * <p>The URI of the source.</p>
   * @public
   */
  Source?: ArtifactSource;
}

/**
 * @public
 */
export interface DeleteArtifactResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   * @public
   */
  ArtifactArn?: string;
}

/**
 * @public
 */
export interface DeleteAssociationRequest {
  /**
   * <p>The ARN of the source.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   * @public
   */
  DestinationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssociationResponse {
  /**
   * <p>The ARN of the source.</p>
   * @public
   */
  SourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination.</p>
   * @public
   */
  DestinationArn?: string;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * <p>The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster to delete.</p>
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster to delete.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to delete.</p>
   * @public
   */
  CodeRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCompilationJobRequest {
  /**
   * <p>The name of the compilation job to delete.</p>
   * @public
   */
  CompilationJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteContextRequest {
  /**
   * <p>The name of the context to delete.</p>
   * @public
   */
  ContextName: string | undefined;
}

/**
 * @public
 */
export interface DeleteContextResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   * @public
   */
  ContextArn?: string;
}

/**
 * @public
 */
export interface DeleteDataQualityJobDefinitionRequest {
  /**
   * <p>The name of the data quality monitoring job definition to delete.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceFleetRequest {
  /**
   * <p>The name of the fleet to delete.</p>
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RetentionType = {
  Delete: "Delete",
  Retain: "Retain",
} as const;

/**
 * @public
 */
export type RetentionType = (typeof RetentionType)[keyof typeof RetentionType];

/**
 * <p>The retention policy for data stored on an Amazon Elastic File System volume.</p>
 * @public
 */
export interface RetentionPolicy {
  /**
   * <p>The default is <code>Retain</code>, which specifies to keep the data stored on the Amazon EFS volume.</p>
   *          <p>Specify <code>Delete</code> to delete the data stored on the Amazon EFS volume.</p>
   * @public
   */
  HomeEfsFileSystem?: RetentionType;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The retention policy for this domain, which specifies whether resources will be retained
   *       after the Domain is deleted. By default, all resources are retained (not automatically
   *       deleted). </p>
   * @public
   */
  RetentionPolicy?: RetentionPolicy;
}

/**
 * @public
 */
export interface DeleteEdgeDeploymentPlanRequest {
  /**
   * <p>The name of the edge deployment plan to delete.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEdgeDeploymentStageRequest {
  /**
   * <p>The name of the edge deployment plan from which the stage will be deleted.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage.</p>
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointInput {
  /**
   * <p>The name of the endpoint that you want to delete.</p>
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration that you want to delete.</p>
   * @public
   */
  EndpointConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentRequest {
  /**
   * <p>The name of the experiment to delete.</p>
   * @public
   */
  ExperimentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment that is being deleted.</p>
   * @public
   */
  ExperimentArn?: string;
}

/**
 * @public
 */
export interface DeleteFeatureGroupRequest {
  /**
   * <p>The name of the <code>FeatureGroup</code> you want to delete. The name must be unique
   *          within an Amazon Web Services Region in an Amazon Web Services account. </p>
   * @public
   */
  FeatureGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowDefinitionRequest {
  /**
   * <p>The name of the flow definition you are deleting.</p>
   * @public
   */
  FlowDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowDefinitionResponse {}

/**
 * @public
 */
export interface DeleteHubRequest {
  /**
   * <p>The name of the hub to delete.</p>
   * @public
   */
  HubName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HubContentType = {
  MODEL: "Model",
  MODEL_REFERENCE: "ModelReference",
  NOTEBOOK: "Notebook",
} as const;

/**
 * @public
 */
export type HubContentType = (typeof HubContentType)[keyof typeof HubContentType];

/**
 * @public
 */
export interface DeleteHubContentRequest {
  /**
   * <p>The name of the hub that you want to delete content in.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The type of content that you want to delete from a hub.</p>
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * <p>The name of the content that you want to delete from a hub.</p>
   * @public
   */
  HubContentName: string | undefined;

  /**
   * <p>The version of the content that you want to delete from a hub.</p>
   * @public
   */
  HubContentVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteHubContentReferenceRequest {
  /**
   * <p>The name of the hub to delete the hub content reference from.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The type of hub content to delete.</p>
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * <p>The name of the hub content to delete.</p>
   * @public
   */
  HubContentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteHumanTaskUiRequest {
  /**
   * <p>The name of the human task user interface (work task template) you want to delete.</p>
   * @public
   */
  HumanTaskUiName: string | undefined;
}

/**
 * @public
 */
export interface DeleteHumanTaskUiResponse {}

/**
 * @public
 */
export interface DeleteHyperParameterTuningJobRequest {
  /**
   * <p>The name of the hyperparameter tuning job that you want to delete.</p>
   * @public
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageRequest {
  /**
   * <p>The name of the image to delete.</p>
   * @public
   */
  ImageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageResponse {}

/**
 * @public
 */
export interface DeleteImageVersionRequest {
  /**
   * <p>The name of the image to delete.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>The version to delete.</p>
   * @public
   */
  Version?: number;

  /**
   * <p>The alias of the image to delete.</p>
   * @public
   */
  Alias?: string;
}

/**
 * @public
 */
export interface DeleteImageVersionResponse {}

/**
 * @public
 */
export interface DeleteInferenceComponentInput {
  /**
   * <p>The name of the inference component to delete.</p>
   * @public
   */
  InferenceComponentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment you want to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceExperimentResponse {
  /**
   * <p>The ARN of the deleted inference experiment.</p>
   * @public
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMlflowTrackingServerRequest {
  /**
   * <p>The name of the the tracking server to delete.</p>
   * @public
   */
  TrackingServerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMlflowTrackingServerResponse {
  /**
   * <p>A <code>TrackingServerArn</code> object, the ARN of the tracking server that is deleted if
   *       successfully found.</p>
   * @public
   */
  TrackingServerArn?: string;
}

/**
 * @public
 */
export interface DeleteModelInput {
  /**
   * <p>The name of the model to delete.</p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelBiasJobDefinitionRequest {
  /**
   * <p>The name of the model bias job definition to delete.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelCardRequest {
  /**
   * <p>The name of the model card to delete.</p>
   * @public
   */
  ModelCardName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelExplainabilityJobDefinitionRequest {
  /**
   * <p>The name of the model explainability job definition to delete.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to delete.</p>
   *          <p>When you specify a name, the name must have 1 to 63 characters. Valid
   *             characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   * @public
   */
  ModelPackageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageGroupInput {
  /**
   * <p>The name of the model group to delete.</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageGroupPolicyInput {
  /**
   * <p>The name of the model group for which to delete the policy.</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelQualityJobDefinitionRequest {
  /**
   * <p>The name of the model quality monitoring job definition to delete.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitoringScheduleRequest {
  /**
   * <p>The name of the monitoring schedule to delete.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotebookInstanceInput {
  /**
   * <p>The name of the SageMaker notebook instance to delete.</p>
   * @public
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration to delete.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeletePipelineRequest {
  /**
   * <p>The name of the pipeline to delete.</p>
   * @public
   */
  PipelineName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *          operation. An idempotent operation completes no more than one time.</p>
   * @public
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface DeletePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline to delete.</p>
   * @public
   */
  PipelineArn?: string;
}

/**
 * @public
 */
export interface DeleteProjectInput {
  /**
   * <p>The name of the project to delete.</p>
   * @public
   */
  ProjectName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceRequest {
  /**
   * <p>The ID of the associated domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioLifecycleConfigRequest {
  /**
   * <p>The name of the Amazon SageMaker Studio Lifecycle Configuration to delete.</p>
   * @public
   */
  StudioLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             delete.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array or one or more tag keys to delete.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteTagsOutput {}

/**
 * @public
 */
export interface DeleteTrialRequest {
  /**
   * <p>The name of the trial to delete.</p>
   * @public
   */
  TrialName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrialResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial that is being deleted.</p>
   * @public
   */
  TrialArn?: string;
}

/**
 * @public
 */
export interface DeleteTrialComponentRequest {
  /**
   * <p>The name of the component to delete.</p>
   * @public
   */
  TrialComponentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the component is being deleted.</p>
   * @public
   */
  TrialComponentArn?: string;
}

/**
 * @public
 */
export interface DeleteUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   * @public
   */
  UserProfileName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkforceRequest {
  /**
   * <p>The name of the workforce.</p>
   * @public
   */
  WorkforceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkforceResponse {}

/**
 * @public
 */
export interface DeleteWorkteamRequest {
  /**
   * <p>The name of the work team to delete.</p>
   * @public
   */
  WorkteamName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkteamResponse {
  /**
   * <p>Returns <code>true</code> if the work team was successfully deleted; otherwise,
   *             returns <code>false</code>.</p>
   * @public
   */
  Success: boolean | undefined;
}

/**
 * <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariant.html">ProductionVariant</a>.</p>
 *          <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path
 *             of the primary container when you created the model hosted in this
 *                 <code>ProductionVariant</code>, the path resolves to a path of the form
 *                 <code>registry/repository[@digest]</code>. A digest is a hash value that identifies
 *             a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
 * @public
 */
export interface DeployedImage {
  /**
   * <p>The image path you specified when you created the model.</p>
   * @public
   */
  SpecifiedImage?: string;

  /**
   * <p>The specific digest path of the image hosted in this
   *             <code>ProductionVariant</code>.</p>
   * @public
   */
  ResolvedImage?: string;

  /**
   * <p>The date and time when the image path for the model resolved to the
   *                 <code>ResolvedImage</code>
   *          </p>
   * @public
   */
  ResolutionTime?: Date;
}

/**
 * <p>The recommended configuration to use for Real-Time Inference.</p>
 * @public
 */
export interface RealTimeInferenceRecommendation {
  /**
   * <p>The recommendation ID which uniquely identifies each recommendation.</p>
   * @public
   */
  RecommendationId: string | undefined;

  /**
   * <p>The recommended instance type for Real-Time Inference.</p>
   * @public
   */
  InstanceType: ProductionVariantInstanceType | undefined;

  /**
   * <p>The recommended environment variables to set in the model container for Real-Time Inference.</p>
   * @public
   */
  Environment?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_APPLICABLE: "NOT_APPLICABLE",
} as const;

/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

/**
 * <p>A set of recommended deployment configurations for the model. To get more advanced recommendations, see
 *          <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceRecommendationsJob.html">CreateInferenceRecommendationsJob</a>
 *          to create an inference recommendation job.</p>
 * @public
 */
export interface DeploymentRecommendation {
  /**
   * <p>Status of the deployment recommendation. The status <code>NOT_APPLICABLE</code> means that SageMaker
   *          is unable to provide a default recommendation for the model using the information provided. If the deployment status is <code>IN_PROGRESS</code>,
   *          retry your API call after a few seconds to get a <code>COMPLETED</code> deployment recommendation.</p>
   * @public
   */
  RecommendationStatus: RecommendationStatus | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_RealTimeInferenceRecommendation.html">RealTimeInferenceRecommendation</a> items.</p>
   * @public
   */
  RealTimeInferenceRecommendations?: RealTimeInferenceRecommendation[];
}

/**
 * @public
 * @enum
 */
export const StageStatus = {
  Creating: "CREATING",
  Deployed: "DEPLOYED",
  Failed: "FAILED",
  InProgress: "INPROGRESS",
  ReadyToDeploy: "READYTODEPLOY",
  Starting: "STARTING",
  Stopped: "STOPPED",
  Stopping: "STOPPING",
} as const;

/**
 * @public
 */
export type StageStatus = (typeof StageStatus)[keyof typeof StageStatus];

/**
 * <p>Contains information summarizing the deployment stage results.</p>
 * @public
 */
export interface EdgeDeploymentStatus {
  /**
   * <p>The general status of the current stage.</p>
   * @public
   */
  StageStatus: StageStatus | undefined;

  /**
   * <p>The number of edge devices with the successful deployment in the current stage.</p>
   * @public
   */
  EdgeDeploymentSuccessInStage: number | undefined;

  /**
   * <p>The number of edge devices yet to pick up the deployment in current stage, or in
   *             progress.</p>
   * @public
   */
  EdgeDeploymentPendingInStage: number | undefined;

  /**
   * <p>The number of edge devices that failed the deployment in current stage.</p>
   * @public
   */
  EdgeDeploymentFailedInStage: number | undefined;

  /**
   * <p>A detailed message about deployment status in current stage.</p>
   * @public
   */
  EdgeDeploymentStatusMessage?: string;

  /**
   * <p>The time when the deployment API started.</p>
   * @public
   */
  EdgeDeploymentStageStartTime?: Date;
}

/**
 * <p>Contains information summarizing the deployment stage results.</p>
 * @public
 */
export interface DeploymentStageStatusSummary {
  /**
   * <p>The name of the stage.</p>
   * @public
   */
  StageName: string | undefined;

  /**
   * <p>Configuration of the devices in the stage.</p>
   * @public
   */
  DeviceSelectionConfig: DeviceSelectionConfig | undefined;

  /**
   * <p>Configuration of the deployment details.</p>
   * @public
   */
  DeploymentConfig: EdgeDeploymentConfig | undefined;

  /**
   * <p>General status of the current state.</p>
   * @public
   */
  DeploymentStatus: EdgeDeploymentStatus | undefined;
}

/**
 * @public
 */
export interface DeregisterDevicesRequest {
  /**
   * <p>The name of the fleet the devices belong to.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The unique IDs of the devices.</p>
   * @public
   */
  DeviceNames: string[] | undefined;
}

/**
 * <p>Information that SageMaker Neo automatically derived about the model.</p>
 * @public
 */
export interface DerivedInformation {
  /**
   * <p>The data input configuration that SageMaker Neo automatically derived for the model.
   *             When SageMaker Neo derives this information, you don't need to specify the data input
   *             configuration when you create a compilation job.</p>
   * @public
   */
  DerivedDataInputConfig?: string;
}

/**
 * @public
 */
export interface DescribeActionRequest {
  /**
   * <p>The name of the action to describe.</p>
   * @public
   */
  ActionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionResponse {
  /**
   * <p>The name of the action.</p>
   * @public
   */
  ActionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   * @public
   */
  ActionArn?: string;

  /**
   * <p>The source of the action.</p>
   * @public
   */
  Source?: ActionSource;

  /**
   * <p>The type of the action.</p>
   * @public
   */
  ActionType?: string;

  /**
   * <p>The description of the action.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The status of the action.</p>
   * @public
   */
  Status?: ActionStatus;

  /**
   * <p>A list of the action's properties.</p>
   * @public
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the action was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the action was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string;
}

/**
 * @public
 */
export interface DescribeAlgorithmInput {
  /**
   * <p>The name of the algorithm to describe.</p>
   * @public
   */
  AlgorithmName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlgorithmOutput {
  /**
   * <p>The name of the algorithm being described.</p>
   * @public
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   * @public
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>A brief summary about the algorithm.</p>
   * @public
   */
  AlgorithmDescription?: string;

  /**
   * <p>A timestamp specifying when the algorithm was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about training jobs run by this algorithm.</p>
   * @public
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * <p>Details about inference jobs that the algorithm runs.</p>
   * @public
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Details about configurations for one or more training jobs that SageMaker runs to test the
   *             algorithm.</p>
   * @public
   */
  ValidationSpecification?: AlgorithmValidationSpecification;

  /**
   * <p>The current status of the algorithm.</p>
   * @public
   */
  AlgorithmStatus: AlgorithmStatus | undefined;

  /**
   * <p>Details about the current status of the algorithm.</p>
   * @public
   */
  AlgorithmStatusDetails: AlgorithmStatusDetails | undefined;

  /**
   * <p>The product identifier of the algorithm.</p>
   * @public
   */
  ProductId?: string;

  /**
   * <p>Whether the algorithm is certified to be listed in Amazon Web Services
   *             Marketplace.</p>
   * @public
   */
  CertifyForMarketplace?: boolean;
}

/**
 * @public
 */
export interface DescribeAppRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name. If this value is not set, then <code>SpaceName</code> must be set.</p>
   * @public
   */
  UserProfileName?: string;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName?: string;

  /**
   * <p>The type of app.</p>
   * @public
   */
  AppType: AppType | undefined;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  AppName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the app.</p>
   * @public
   */
  AppArn?: string;

  /**
   * <p>The type of app.</p>
   * @public
   */
  AppType?: AppType;

  /**
   * <p>The name of the app.</p>
   * @public
   */
  AppName?: string;

  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId?: string;

  /**
   * <p>The user profile name.</p>
   * @public
   */
  UserProfileName?: string;

  /**
   * <p>The name of the space. If this value is not set, then <code>UserProfileName</code>
   *       must be set.</p>
   * @public
   */
  SpaceName?: string;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: AppStatus;

  /**
   * <p>The timestamp of the last health check.</p>
   * @public
   */
  LastHealthCheckTimestamp?: Date;

  /**
   * <p>The timestamp of the last user's activity. <code>LastUserActivityTimestamp</code> is also updated when SageMaker performs health checks without user activity. As a result, this value is set to the same value as <code>LastHealthCheckTimestamp</code>.</p>
   * @public
   */
  LastUserActivityTimestamp?: Date;

  /**
   * <p>The creation time of the application.</p>
   *          <note>
   *             <p>After an application has been shut down for 24 hours, SageMaker deletes all metadata for the application. To be considered an update and retain application metadata, applications must be restarted within 24 hours after the previous application has been shut down. After this time window, creation of an application is considered a new application rather than an update of the previous application.</p>
   *          </note>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The failure reason.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   * @public
   */
  ResourceSpec?: ResourceSpec;
}

/**
 * @public
 */
export interface DescribeAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to describe.</p>
   * @public
   */
  AppImageConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppImageConfigResponse {
  /**
   * <p>The ARN of the AppImageConfig.</p>
   * @public
   */
  AppImageConfigArn?: string;

  /**
   * <p>The name of the AppImageConfig.</p>
   * @public
   */
  AppImageConfigName?: string;

  /**
   * <p>When the AppImageConfig was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>When the AppImageConfig was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The configuration of a KernelGateway app.</p>
   * @public
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;

  /**
   * <p>The configuration of the JupyterLab app.</p>
   * @public
   */
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig;

  /**
   * <p>The configuration of the Code Editor app.</p>
   * @public
   */
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig;
}

/**
 * @public
 */
export interface DescribeArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to describe.</p>
   * @public
   */
  ArtifactArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeArtifactResponse {
  /**
   * <p>The name of the artifact.</p>
   * @public
   */
  ArtifactName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   * @public
   */
  ArtifactArn?: string;

  /**
   * <p>The source of the artifact.</p>
   * @public
   */
  Source?: ArtifactSource;

  /**
   * <p>The type of the artifact.</p>
   * @public
   */
  ArtifactType?: string;

  /**
   * <p>A list of the artifact's properties.</p>
   * @public
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the artifact was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the artifact was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string;
}

/**
 * @public
 */
export interface DescribeAutoMLJobRequest {
  /**
   * <p>Requests information about an AutoML job using its unique name.</p>
   * @public
   */
  AutoMLJobName: string | undefined;
}

/**
 * <p>Provides information about the endpoint of the model deployment.</p>
 * @public
 */
export interface ModelDeployResult {
  /**
   * <p>The name of the endpoint to which the model has been deployed.</p>
   *          <note>
   *             <p>If model deployment fails, this field is omitted from the response.</p>
   *          </note>
   * @public
   */
  EndpointName?: string;
}

/**
 * <p>The resolved attributes.</p>
 * @public
 */
export interface ResolvedAttributes {
  /**
   * <p>Specifies a metric to minimize or maximize as the objective of an AutoML job.</p>
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>The problem type.</p>
   * @public
   */
  ProblemType?: ProblemType;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;
}

/**
 * @public
 */
export interface DescribeAutoMLJobResponse {
  /**
   * <p>Returns the name of the AutoML job.</p>
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Returns the ARN of the AutoML job.</p>
   * @public
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>Returns the input data configuration for the AutoML job.</p>
   * @public
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>Returns the job's output data config.</p>
   * @public
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>The ARN of the IAM role that has read permission to the input data
   *          location and write permission to the output data location in Amazon S3.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Returns the job's objective.</p>
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>Returns the job's problem type.</p>
   * @public
   */
  ProblemType?: ProblemType;

  /**
   * <p>Returns the configuration for the AutoML job.</p>
   * @public
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * <p>Returns the creation time of the AutoML job.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the end time of the AutoML job.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>Returns the job's last modified time.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Returns the failure reason for an AutoML job, when applicable.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>Returns a list of reasons for partial failures within an AutoML job.</p>
   * @public
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[];

  /**
   * <p>The best model candidate selected by SageMaker Autopilot using both the best
   *          objective metric and lowest <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html">InferenceLatency</a> for
   *          an experiment.</p>
   * @public
   */
  BestCandidate?: AutoMLCandidate;

  /**
   * <p>Returns the status of the AutoML job.</p>
   * @public
   */
  AutoMLJobStatus: AutoMLJobStatus | undefined;

  /**
   * <p>Returns the secondary status of the AutoML job.</p>
   * @public
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | undefined;

  /**
   * <p>Indicates whether the output for an AutoML job generates candidate definitions
   *          only.</p>
   * @public
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>Returns information on the job's artifacts found in
   *          <code>AutoMLJobArtifacts</code>.</p>
   * @public
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts;

  /**
   * <p>Contains <code>ProblemType</code>, <code>AutoMLJobObjective</code>, and
   *             <code>CompletionCriteria</code>. If you do not provide these values, they are
   *          inferred.</p>
   * @public
   */
  ResolvedAttributes?: ResolvedAttributes;

  /**
   * <p>Indicates whether the model was deployed automatically to an endpoint and the name of
   *          that endpoint if deployed automatically.</p>
   * @public
   */
  ModelDeployConfig?: ModelDeployConfig;

  /**
   * <p>Provides information about endpoint for the model deployment.</p>
   * @public
   */
  ModelDeployResult?: ModelDeployResult;
}

/**
 * @public
 */
export interface DescribeAutoMLJobV2Request {
  /**
   * <p>Requests information about an AutoML job V2 using its unique name.</p>
   * @public
   */
  AutoMLJobName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoMLJobV2Response {
  /**
   * <p>Returns the name of the AutoML job V2.</p>
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Returns the Amazon Resource Name (ARN) of the AutoML job V2.</p>
   * @public
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>Returns an array of channel objects describing the input data and their location.</p>
   * @public
   */
  AutoMLJobInputDataConfig: AutoMLJobChannel[] | undefined;

  /**
   * <p>Returns the job's output data config.</p>
   * @public
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>The ARN of the IAM role that has read permission to the input data
   *          location and write permission to the output data location in Amazon S3.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Returns the job's objective.</p>
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>Returns the configuration settings of the problem type set for the AutoML job V2.</p>
   * @public
   */
  AutoMLProblemTypeConfig?: AutoMLProblemTypeConfig;

  /**
   * <p>Returns the name of the problem type configuration set for the AutoML job V2.</p>
   * @public
   */
  AutoMLProblemTypeConfigName?: AutoMLProblemTypeConfigName;

  /**
   * <p>Returns the creation time of the AutoML job V2.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the end time of the AutoML job V2.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>Returns the job's last modified time.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Returns the reason for the failure of the AutoML job V2, when applicable.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>Returns a list of reasons for partial failures within an AutoML job V2.</p>
   * @public
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[];

  /**
   * <p>Information about the candidate produced by an AutoML training job V2, including its
   *          status, steps, and other properties.</p>
   * @public
   */
  BestCandidate?: AutoMLCandidate;

  /**
   * <p>Returns the status of the AutoML job V2.</p>
   * @public
   */
  AutoMLJobStatus: AutoMLJobStatus | undefined;

  /**
   * <p>Returns the secondary status of the AutoML job V2.</p>
   * @public
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | undefined;

  /**
   * <p>The artifacts that are generated during an AutoML job.</p>
   * @public
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts;

  /**
   * <p>Returns the resolved attributes used by the AutoML job V2.</p>
   * @public
   */
  ResolvedAttributes?: AutoMLResolvedAttributes;

  /**
   * <p>Indicates whether the model was deployed automatically to an endpoint and the name of
   *          that endpoint if deployed automatically.</p>
   * @public
   */
  ModelDeployConfig?: ModelDeployConfig;

  /**
   * <p>Provides information about endpoint for the model deployment.</p>
   * @public
   */
  ModelDeployResult?: ModelDeployResult;

  /**
   * <p>Returns the configuration settings of how the data are split into train and validation
   *          datasets.</p>
   * @public
   */
  DataSplitConfig?: AutoMLDataSplitConfig;

  /**
   * <p>Returns the security configuration for traffic encryption or Amazon VPC
   *          settings.</p>
   * @public
   */
  SecurityConfig?: AutoMLSecurityConfig;
}

/**
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * <p>The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The name of the SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterName?: string;

  /**
   * <p>The status of the SageMaker HyperPod cluster.</p>
   * @public
   */
  ClusterStatus: ClusterStatus | undefined;

  /**
   * <p>The time when the SageMaker Cluster is created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The failure message of the SageMaker HyperPod cluster.</p>
   * @public
   */
  FailureMessage?: string;

  /**
   * <p>The instance groups of the SageMaker HyperPod cluster.</p>
   * @public
   */
  InstanceGroups: ClusterInstanceGroupDetails[] | undefined;

  /**
   * <p>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources
   *             have access to. You can control access to and from your resources by configuring a VPC.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html">Give SageMaker Access to Resources in your Amazon VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig;
}

/**
 * @public
 */
export interface DescribeClusterNodeRequest {
  /**
   * <p>The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster in which the node is.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The ID of the SageMaker HyperPod cluster node.</p>
   * @public
   */
  NodeId: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterNodeResponse {
  /**
   * <p>The details of the SageMaker HyperPod cluster node.</p>
   * @public
   */
  NodeDetails: ClusterNodeDetails | undefined;
}

/**
 * @public
 */
export interface DescribeCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to describe.</p>
   * @public
   */
  CodeRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCodeRepositoryOutput {
  /**
   * <p>The name of the Git repository.</p>
   * @public
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   * @public
   */
  CodeRepositoryArn: string | undefined;

  /**
   * <p>The date and time that the repository was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the repository was last changed.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Configuration details about the repository, including the URL where the repository is
   *          located, the default branch, and the Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the
   *          repository.</p>
   * @public
   */
  GitConfig?: GitConfig;
}

/**
 * @public
 */
export interface DescribeCompilationJobRequest {
  /**
   * <p>The name of the model compilation job that you want information about.</p>
   * @public
   */
  CompilationJobName: string | undefined;
}

/**
 * <p>Provides information about the location that is configured for storing model
 *             artifacts. </p>
 *          <p>Model artifacts are outputs that result from training a model. They typically consist
 *             of trained parameters, a model definition that describes how to compute inferences, and
 *             other metadata. A SageMaker container stores your trained model artifacts in the
 *                 <code>/opt/ml/model</code> directory. After training has completed, by default,
 *             these artifacts are uploaded to your Amazon S3 bucket as compressed files.</p>
 * @public
 */
export interface ModelArtifacts {
  /**
   * <p>The path of the S3 object that contains the model artifacts. For example,
   *                 <code>s3://bucket-name/keynameprefix/model.tar.gz</code>.</p>
   * @public
   */
  S3ModelArtifacts: string | undefined;
}

/**
 * <p>Provides information to verify the integrity of stored model artifacts. </p>
 * @public
 */
export interface ModelDigests {
  /**
   * <p>Provides a hash value that uniquely identifies the stored model
   *             artifacts.</p>
   * @public
   */
  ArtifactDigest?: string;
}

/**
 * @public
 */
export interface DescribeCompilationJobResponse {
  /**
   * <p>The name of the model compilation job.</p>
   * @public
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   * @public
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The status of the model compilation job.</p>
   * @public
   */
  CompilationJobStatus: CompilationJobStatus | undefined;

  /**
   * <p>The time when the model compilation job started the <code>CompilationJob</code>
   *             instances. </p>
   *          <p>You are billed for the time between this timestamp and the timestamp in the
   *                 <code>CompilationEndTime</code> field. In Amazon CloudWatch Logs, the start time might be later
   *             than this time. That's because it takes time to download the compilation job, which
   *             depends on the size of the compilation job container. </p>
   * @public
   */
  CompilationStartTime?: Date;

  /**
   * <p>The time when the model compilation job on a compilation job instance ended. For a
   *             successful or stopped job, this is when the job's model artifacts have finished
   *             uploading. For a failed job, this is when Amazon SageMaker detected that the job failed. </p>
   * @public
   */
  CompilationEndTime?: Date;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches
   *             the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training
   *             costs.</p>
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>The inference image to use when compiling a model. Specify an image only if the target
   *             device is a cloud instance.</p>
   * @public
   */
  InferenceImage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the versioned model package that was
   *     provided to SageMaker Neo when you initiated a compilation job.</p>
   * @public
   */
  ModelPackageVersionArn?: string;

  /**
   * <p>The time that the model compilation job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time that the status
   *             of
   *             the model compilation job was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If a model compilation job failed, the reason it failed. </p>
   * @public
   */
  FailureReason: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 that has been configured for storing the model
   *             artifacts used in the compilation job.</p>
   * @public
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>Provides a BLAKE2 hash value that identifies the compiled model artifacts in
   *             Amazon S3.</p>
   * @public
   */
  ModelDigests?: ModelDigests;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker assumes to perform the model
   *             compilation job.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 of the input model artifacts, the name and
   *             shape of the expected data inputs, and the framework in which the model was
   *             trained.</p>
   * @public
   */
  InputConfig: InputConfig | undefined;

  /**
   * <p>Information about the output location for the compiled model and the target device
   *             that the model runs on.</p>
   * @public
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that you want your compilation job
   *             to connect to. Control access to your models by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html">Protect Compilation Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   * @public
   */
  VpcConfig?: NeoVpcConfig;

  /**
   * <p>Information that SageMaker Neo automatically derived about the model.</p>
   * @public
   */
  DerivedInformation?: DerivedInformation;
}

/**
 * @public
 */
export interface DescribeContextRequest {
  /**
   * <p>The name of the context to describe.</p>
   * @public
   */
  ContextName: string | undefined;
}

/**
 * @public
 */
export interface DescribeContextResponse {
  /**
   * <p>The name of the context.</p>
   * @public
   */
  ContextName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   * @public
   */
  ContextArn?: string;

  /**
   * <p>The source of the context.</p>
   * @public
   */
  Source?: ContextSource;

  /**
   * <p>The type of the context.</p>
   * @public
   */
  ContextType?: string;

  /**
   * <p>The description of the context.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A list of the context's properties.</p>
   * @public
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the context was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the context was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string;
}

/**
 * @public
 */
export interface DescribeDataQualityJobDefinitionRequest {
  /**
   * <p>The name of the data quality monitoring job definition to describe.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data quality monitoring job definition.</p>
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the data quality monitoring job definition.</p>
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time that the data quality monitoring job definition was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The constraints and baselines for the data quality monitoring job definition.</p>
   * @public
   */
  DataQualityBaselineConfig?: DataQualityBaselineConfig;

  /**
   * <p>Information about the container that runs the data quality monitoring job.</p>
   * @public
   */
  DataQualityAppSpecification: DataQualityAppSpecification | undefined;

  /**
   * <p>The list of inputs for the data quality monitoring job. Currently endpoints are
   *          supported.</p>
   * @public
   */
  DataQualityJobInput: DataQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   * @public
   */
  DataQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>The networking configuration for the data quality monitoring job.</p>
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can
   *    assume to perform tasks on your behalf.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

/**
 * @public
 */
export interface DescribeDeviceRequest {
  /**
   * <p>Next token of device description.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The unique ID of the device.</p>
   * @public
   */
  DeviceName: string | undefined;

  /**
   * <p>The name of the fleet the devices belong to.</p>
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * <p>The model on the edge device.</p>
 * @public
 */
export interface EdgeModel {
  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The model version.</p>
   * @public
   */
  ModelVersion: string | undefined;

  /**
   * <p>The timestamp of the last data sample taken.</p>
   * @public
   */
  LatestSampleTime?: Date;

  /**
   * <p>The timestamp of the last inference that was made.</p>
   * @public
   */
  LatestInference?: Date;
}

/**
 * @public
 */
export interface DescribeDeviceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  DeviceArn?: string;

  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceName: string | undefined;

  /**
   * <p>A description of the device.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The name of the fleet the device belongs to.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device.</p>
   * @public
   */
  IotThingName?: string;

  /**
   * <p>The timestamp of the last registration or de-reregistration.</p>
   * @public
   */
  RegistrationTime: Date | undefined;

  /**
   * <p>The last heartbeat received from the device.</p>
   * @public
   */
  LatestHeartbeat?: Date;

  /**
   * <p>Models on the device.</p>
   * @public
   */
  Models?: EdgeModel[];

  /**
   * <p>The maximum number of models.</p>
   * @public
   */
  MaxModels?: number;

  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Edge Manager agent version.</p>
   * @public
   */
  AgentVersion?: string;
}

/**
 * @public
 */
export interface DescribeDeviceFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceFleetResponse {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The The Amazon Resource Name (ARN) of the fleet.</p>
   * @public
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>The output configuration for storing sampled data.</p>
   * @public
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * <p>A description of the fleet.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Timestamp of when the device fleet was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Timestamp of when the device fleet was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT).</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) alias created in Amazon Web Services Internet of Things (IoT).</p>
   * @public
   */
  IotRoleAlias?: string;
}

/**
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  Delete_Failed: "Delete_Failed",
  Deleting: "Deleting",
  Failed: "Failed",
  InService: "InService",
  Pending: "Pending",
  Update_Failed: "Update_Failed",
  Updating: "Updating",
} as const;

/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 */
export interface DescribeDomainResponse {
  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   * @public
   */
  DomainArn?: string;

  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId?: string;

  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName?: string;

  /**
   * <p>The ID of the Amazon Elastic File System managed by this Domain.</p>
   * @public
   */
  HomeEfsFileSystemId?: string;

  /**
   * <p>The IAM Identity Center managed application instance ID.</p>
   * @public
   */
  SingleSignOnManagedApplicationInstanceId?: string;

  /**
   * <p>The ARN of the application managed by SageMaker in IAM Identity Center. This value is
   *       only returned for domains created after October 1, 2023.</p>
   * @public
   */
  SingleSignOnApplicationArn?: string;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: DomainStatus;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The failure reason.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The ID of the security group that authorizes traffic between the
   *         <code>RSessionGateway</code> apps and the <code>RStudioServerPro</code> app.</p>
   * @public
   */
  SecurityGroupIdForDomainBoundary?: string;

  /**
   * <p>The domain's authentication mode.</p>
   * @public
   */
  AuthMode?: AuthMode;

  /**
   * <p>Settings which are applied to UserProfiles in this domain if settings are not explicitly
   *       specified in a given UserProfile. </p>
   * @public
   */
  DefaultUserSettings?: UserSettings;

  /**
   * <p>A collection of <code>Domain</code> settings.</p>
   * @public
   */
  DomainSettings?: DomainSettings;

  /**
   * <p>Specifies the VPC used for non-EFS traffic. The default value is
   *         <code>PublicInternetOnly</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PublicInternetOnly</code> - Non-EFS traffic is through a VPC managed by
   *           Amazon SageMaker, which allows direct internet access</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VpcOnly</code> - All traffic is through the specified VPC and subnets</p>
   *             </li>
   *          </ul>
   * @public
   */
  AppNetworkAccessType?: AppNetworkAccessType;

  /**
   * @deprecated
   *
   * <p>Use <code>KmsKeyId</code>.</p>
   * @public
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * <p>The VPC subnets that the domain uses for communication.</p>
   * @public
   */
  SubnetIds?: string[];

  /**
   * <p>The domain's URL.</p>
   * @public
   */
  Url?: string;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud (VPC) that the domain uses for communication.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>The Amazon Web Services KMS customer managed key used to encrypt the EFS volume attached to
   *       the domain.</p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>The entity that creates and manages the required security groups for inter-app
   *       communication in <code>VPCOnly</code> mode. Required when
   *         <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and
   *         <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *       provided.</p>
   * @public
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement;

  /**
   * <p>The default settings used to create a space.</p>
   * @public
   */
  DefaultSpaceSettings?: DefaultSpaceSettings;
}

/**
 * @public
 */
export interface DescribeEdgeDeploymentPlanRequest {
  /**
   * <p>The name of the deployment plan to describe.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>If the edge deployment plan has enough stages to require tokening, then this is the
   *             response from the last list of stages returned.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to select (50 by default).</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface DescribeEdgeDeploymentPlanResponse {
  /**
   * <p>The ARN of edge deployment plan.</p>
   * @public
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * <p>The name of the edge deployment plan.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>List of models associated with the edge deployment plan.</p>
   * @public
   */
  ModelConfigs: EdgeDeploymentModelConfig[] | undefined;

  /**
   * <p>The device fleet used for this edge deployment plan.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The number of edge devices with the successful deployment.</p>
   * @public
   */
  EdgeDeploymentSuccess?: number;

  /**
   * <p>The number of edge devices yet to pick up deployment, or in progress.</p>
   * @public
   */
  EdgeDeploymentPending?: number;

  /**
   * <p>The number of edge devices that failed the deployment.</p>
   * @public
   */
  EdgeDeploymentFailed?: number;

  /**
   * <p>List of stages in the edge deployment plan.</p>
   * @public
   */
  Stages: DeploymentStageStatusSummary[] | undefined;

  /**
   * <p>Token to use when calling the next set of stages in the edge deployment plan.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The time when the edge deployment plan was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The time when the edge deployment plan was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface DescribeEdgePackagingJobRequest {
  /**
   * <p>The name of the edge packaging job.</p>
   * @public
   */
  EdgePackagingJobName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EdgePackagingJobStatus = {
  Completed: "COMPLETED",
  Failed: "FAILED",
  InProgress: "INPROGRESS",
  Starting: "STARTING",
  Stopped: "STOPPED",
  Stopping: "STOPPING",
} as const;

/**
 * @public
 */
export type EdgePackagingJobStatus = (typeof EdgePackagingJobStatus)[keyof typeof EdgePackagingJobStatus];

/**
 * @public
 * @enum
 */
export const EdgePresetDeploymentStatus = {
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;

/**
 * @public
 */
export type EdgePresetDeploymentStatus = (typeof EdgePresetDeploymentStatus)[keyof typeof EdgePresetDeploymentStatus];

/**
 * <p>The output of a SageMaker Edge Manager deployable resource.</p>
 * @public
 */
export interface EdgePresetDeploymentOutput {
  /**
   * <p>The deployment type created by SageMaker Edge Manager. Currently only
   *      supports Amazon Web Services IoT Greengrass Version 2 components.</p>
   * @public
   */
  Type: EdgePresetDeploymentType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the generated deployable resource.</p>
   * @public
   */
  Artifact?: string;

  /**
   * <p>The status of the deployable resource.</p>
   * @public
   */
  Status?: EdgePresetDeploymentStatus;

  /**
   * <p>Returns a message describing the status of the deployed resource.</p>
   * @public
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface DescribeEdgePackagingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the edge packaging job.</p>
   * @public
   */
  EdgePackagingJobArn: string | undefined;

  /**
   * <p>The name of the edge packaging job.</p>
   * @public
   */
  EdgePackagingJobName: string | undefined;

  /**
   * <p>The name of the SageMaker Neo compilation job that is used to locate model artifacts that are being packaged.</p>
   * @public
   */
  CompilationJobName?: string;

  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   * @public
   */
  ModelVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to  download and upload the model, and to contact Neo.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The output configuration for the edge packaging job.</p>
   * @public
   */
  OutputConfig?: EdgeOutputConfig;

  /**
   * <p>The Amazon Web Services KMS key to use when encrypting the EBS volume the job run on.</p>
   * @public
   */
  ResourceKey?: string;

  /**
   * <p>The current status of the packaging job.</p>
   * @public
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | undefined;

  /**
   * <p>Returns a message describing the job status and error messages.</p>
   * @public
   */
  EdgePackagingJobStatusMessage?: string;

  /**
   * <p>The timestamp of when the packaging job was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The timestamp of when the job was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Simple Storage (S3) URI where model artifacts ares stored.</p>
   * @public
   */
  ModelArtifact?: string;

  /**
   * <p>The signature document of files in the model artifact.</p>
   * @public
   */
  ModelSignature?: string;

  /**
   * <p>The output of a SageMaker Edge Manager deployable resource.</p>
   * @public
   */
  PresetDeploymentOutput?: EdgePresetDeploymentOutput;
}

/**
 * @public
 */
export interface DescribeEndpointInput {
  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointStatus = {
  CREATING: "Creating",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_SERVICE: "InService",
  OUT_OF_SERVICE: "OutOfService",
  ROLLING_BACK: "RollingBack",
  SYSTEM_UPDATING: "SystemUpdating",
  UPDATE_ROLLBACK_FAILED: "UpdateRollbackFailed",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

/**
 * @public
 * @enum
 */
export const VariantStatus = {
  ACTIVATING_TRAFFIC: "ActivatingTraffic",
  BAKING: "Baking",
  CREATING: "Creating",
  DELETING: "Deleting",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type VariantStatus = (typeof VariantStatus)[keyof typeof VariantStatus];

/**
 * <p>Describes the status of the production variant.</p>
 * @public
 */
export interface ProductionVariantStatus {
  /**
   * <p>The endpoint variant status which describes the current deployment stage status or
   *             operational status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Creating</code>: Creating inference resources for the production
   *                     variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: Terminating inference resources for the production
   *                     variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code>: Updating capacity for the production variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ActivatingTraffic</code>: Turning on traffic for the production
   *                     variant.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Baking</code>: Waiting period to monitor the CloudWatch alarms in the
   *                     automatic rollback configuration.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: VariantStatus | undefined;

  /**
   * <p>A message that describes the status of the production variant.</p>
   * @public
   */
  StatusMessage?: string;

  /**
   * <p>The start time of the current status change.</p>
   * @public
   */
  StartTime?: Date;
}

/**
 * <p>The production variant summary for a deployment when an endpoint is creating or
 *             updating with the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a>
 *             or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpoint</a>
 *             operations. Describes the <code>VariantStatus </code>, weight and capacity for a
 *             production variant associated with an endpoint. </p>
 * @public
 */
export interface PendingProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   * @public
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container
   *             Registry paths of the inference images deployed on instances of this
   *                 <code>ProductionVariant</code>.</p>
   * @public
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The weight associated with the variant.</p>
   * @public
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight for the variant in this deployment, as specified in the endpoint
   *             configuration for the endpoint. The value is taken from the request to the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> operation.</p>
   * @public
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   * @public
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in this deployment, as specified in the endpoint
   *             configuration for the endpoint. The value is taken from the request to the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">CreateEndpointConfig</a> operation.</p>
   * @public
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The type of instances associated with the variant.</p>
   * @public
   */
  InstanceType?: ProductionVariantInstanceType;

  /**
   * <p>The size of the Elastic Inference (EI) instance to use for the production variant. EI
   *             instances provide on-demand GPU computing for inference. For more information, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic
   *                 Inference in Amazon SageMaker</a>.</p>
   * @public
   */
  AcceleratorType?: ProductionVariantAcceleratorType;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or
   *             operational status.</p>
   * @public
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * <p>The serverless configuration for the endpoint.</p>
   * @public
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>The serverless configuration requested for this deployment, as specified in the endpoint configuration for the endpoint.</p>
   * @public
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>Settings that control the range in the number of instances that the endpoint provisions
   *          as it scales up or down to accommodate traffic. </p>
   * @public
   */
  ManagedInstanceScaling?: ProductionVariantManagedInstanceScaling;

  /**
   * <p>Settings that control how the endpoint routes incoming traffic to the instances that the
   *          endpoint hosts.</p>
   * @public
   */
  RoutingConfig?: ProductionVariantRoutingConfig;
}

/**
 * <p>The summary of an in-progress deployment when an endpoint is creating or updating with
 *             a new endpoint configuration.</p>
 * @public
 */
export interface PendingDeploymentSummary {
  /**
   * <p>The name of the endpoint configuration used in the deployment. </p>
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_PendingProductionVariantSummary.html">PendingProductionVariantSummary</a> objects, one for each model hosted behind
   *             this endpoint for the in-progress deployment.</p>
   * @public
   */
  ProductionVariants?: PendingProductionVariantSummary[];

  /**
   * <p>The start time of the deployment.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_PendingProductionVariantSummary.html">PendingProductionVariantSummary</a> objects, one for each model hosted behind
   *             this endpoint in shadow mode with production traffic replicated from the model specified
   *             on <code>ProductionVariants</code> for the in-progress deployment.</p>
   * @public
   */
  ShadowProductionVariants?: PendingProductionVariantSummary[];
}

/**
 * <p>Describes weight and capacities for a production variant associated with an
 *             endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code>
 *             API and the endpoint status is <code>Updating</code>, you get different desired and
 *             current values. </p>
 * @public
 */
export interface ProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   * @public
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the
   *             inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   * @public
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The weight associated with the variant.</p>
   * @public
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight, as specified in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   * @public
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   * @public
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   * @public
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or
   *             operational status.</p>
   * @public
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * <p>The serverless configuration for the endpoint.</p>
   * @public
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>The serverless configuration requested for the endpoint update.</p>
   * @public
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>Settings that control the range in the number of instances that the endpoint provisions
   *          as it scales up or down to accommodate traffic. </p>
   * @public
   */
  ManagedInstanceScaling?: ProductionVariantManagedInstanceScaling;

  /**
   * <p>Settings that control how the endpoint routes incoming traffic to the instances that the
   *          endpoint hosts.</p>
   * @public
   */
  RoutingConfig?: ProductionVariantRoutingConfig;
}

/**
 * @public
 */
export interface DescribeEndpointOutput {
  /**
   * <p>Name of the endpoint.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>The name of the endpoint configuration associated with this endpoint.</p>
   * @public
   */
  EndpointConfigName?: string;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariantSummary.html">ProductionVariantSummary</a> objects, one for each model hosted behind this
   *             endpoint.</p>
   * @public
   */
  ProductionVariants?: ProductionVariantSummary[];

  /**
   * <p>The currently active data capture configuration used by your Endpoint.</p>
   * @public
   */
  DataCaptureConfig?: DataCaptureConfigSummary;

  /**
   * <p>The status of the endpoint.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OutOfService</code>: Endpoint is not available to take incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Creating</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html">CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html">UpdateEndpoint</a> or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be
   *                     updated or deleted or re-scaled until it has completed. This maintenance
   *                     operation does not change any customer-specified values such as VPC config, KMS
   *                     encryption, model, instance type, or instance count.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RollingBack</code>: Endpoint fails to scale up or down or change its
   *                     variant weight and is in the process of rolling back to its previous
   *                     configuration. Once the rollback completes, endpoint returns to an
   *                         <code>InService</code> status. This transitional status only applies to an
   *                     endpoint that has autoscaling enabled and is undergoing variant weight or
   *                     capacity changes as part of an <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> call or when the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html">UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html">DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                     the <code>FailureReason</code> value returned by <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> for information about the failure. <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html">DeleteEndpoint</a> is the only operation that can be performed on a
   *                     failed endpoint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UpdateRollbackFailed</code>: Both the rolling deployment and
   *                     auto-rollback failed. Your endpoint is in service with a mix of the old and new
   *                     endpoint configurations. For information about how to remedy this issue and
   *                     restore the endpoint's status to <code>InService</code>, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/deployment-guardrails-rolling.html">Rolling
   *                         Deployments</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndpointStatus: EndpointStatus | undefined;

  /**
   * <p>If the status of the endpoint is <code>Failed</code>, the reason why it failed.
   *         </p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The most recent deployment configuration for the endpoint.</p>
   * @public
   */
  LastDeploymentConfig?: DeploymentConfig;

  /**
   * <p>Returns the description of an endpoint configuration created using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">
   *                <code>CreateEndpointConfig</code>
   *             </a> API.</p>
   * @public
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;

  /**
   * <p>Returns the summary of an in-progress deployment. This field is only returned when the
   *             endpoint is creating or updating with a new endpoint configuration.</p>
   * @public
   */
  PendingDeploymentSummary?: PendingDeploymentSummary;

  /**
   * <p>The configuration parameters for an explainer.</p>
   * @public
   */
  ExplainerConfig?: ExplainerConfig;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariantSummary.html">ProductionVariantSummary</a> objects, one for each model that you want to host
   *             at this endpoint in shadow mode with production traffic replicated from the model
   *             specified on <code>ProductionVariants</code>.</p>
   * @public
   */
  ShadowProductionVariants?: ProductionVariantSummary[];
}

/**
 * @public
 */
export interface DescribeEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration.</p>
   * @public
   */
  EndpointConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointConfigOutput {
  /**
   * <p>Name of the SageMaker endpoint configuration.</p>
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   * @public
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you
   *             want to host at this endpoint.</p>
   * @public
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * <p>Configuration to control how SageMaker captures inference data.</p>
   * @public
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * <p>Amazon Web Services KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML
   *             storage volume attached to the instance.</p>
   * @public
   */
  KmsKeyId?: string;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the description of an endpoint configuration created using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">
   *                <code>CreateEndpointConfig</code>
   *             </a> API.</p>
   * @public
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;

  /**
   * <p>The configuration parameters for an explainer.</p>
   * @public
   */
  ExplainerConfig?: ExplainerConfig;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you want
   *             to host at this endpoint in shadow mode with production traffic replicated from the
   *             model specified on <code>ProductionVariants</code>.</p>
   * @public
   */
  ShadowProductionVariants?: ProductionVariant[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you assigned to the
   *          endpoint configuration.</p>
   * @public
   */
  ExecutionRoleArn?: string;

  /**
   * <p>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources
   *             have access to. You can control access to and from your resources by configuring a VPC.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html">Give SageMaker Access to Resources in your Amazon VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Indicates whether all model containers deployed to the endpoint are isolated. If they
   *          are, no inbound or outbound network calls can be made to or from the model
   *          containers.</p>
   * @public
   */
  EnableNetworkIsolation?: boolean;
}

/**
 * @public
 */
export interface DescribeExperimentRequest {
  /**
   * <p>The name of the experiment to describe.</p>
   * @public
   */
  ExperimentName: string | undefined;
}

/**
 * <p>The source of the experiment.</p>
 * @public
 */
export interface ExperimentSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The source type.</p>
   * @public
   */
  SourceType?: string;
}

/**
 * @public
 */
export interface DescribeExperimentResponse {
  /**
   * <p>The name of the experiment.</p>
   * @public
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   * @public
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the type.</p>
   * @public
   */
  Source?: ExperimentSource;

  /**
   * <p>The description of the experiment.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>When the experiment was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Who created the experiment.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the experiment.</p>
   * @public
   */
  LastModifiedBy?: UserContext;
}

/**
 * @public
 */
export interface DescribeFeatureGroupRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the <code>FeatureGroup</code> you want
   *          described. </p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>A token to resume pagination of the list of <code>Features</code>
   *             (<code>FeatureDefinitions</code>). 2,500 <code>Features</code> are returned by
   *          default.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const FeatureGroupStatus = {
  CREATED: "Created",
  CREATE_FAILED: "CreateFailed",
  CREATING: "Creating",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
} as const;

/**
 * @public
 */
export type FeatureGroupStatus = (typeof FeatureGroupStatus)[keyof typeof FeatureGroupStatus];

/**
 * @public
 * @enum
 */
export const LastUpdateStatusValue = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;

/**
 * @public
 */
export type LastUpdateStatusValue = (typeof LastUpdateStatusValue)[keyof typeof LastUpdateStatusValue];

/**
 * <p>A value that indicates whether the update was successful.</p>
 * @public
 */
export interface LastUpdateStatus {
  /**
   * <p>A value that indicates whether the update was made successful.</p>
   * @public
   */
  Status: LastUpdateStatusValue | undefined;

  /**
   * <p>If the update wasn't successful, indicates the reason why it failed.</p>
   * @public
   */
  FailureReason?: string;
}

/**
 * @public
 * @enum
 */
export const OfflineStoreStatusValue = {
  ACTIVE: "Active",
  BLOCKED: "Blocked",
  DISABLED: "Disabled",
} as const;

/**
 * @public
 */
export type OfflineStoreStatusValue = (typeof OfflineStoreStatusValue)[keyof typeof OfflineStoreStatusValue];

/**
 * <p>The status of <code>OfflineStore</code>.</p>
 * @public
 */
export interface OfflineStoreStatus {
  /**
   * <p>An <code>OfflineStore</code> status.</p>
   * @public
   */
  Status: OfflineStoreStatusValue | undefined;

  /**
   * <p>The justification for why the OfflineStoreStatus is Blocked (if applicable).</p>
   * @public
   */
  BlockedReason?: string;
}

/**
 * <p>Active throughput configuration of the feature group. There are two modes:
 *             <code>ON_DEMAND</code> and <code>PROVISIONED</code>. With on-demand mode, you are
 *          charged for data reads and writes that your application performs on your feature group. You
 *          do not need to specify read and write throughput because Feature Store accommodates your
 *          workloads as they ramp up and down. You can switch a feature group to on-demand only once
 *          in a 24 hour period. With provisioned throughput mode, you specify the read and write
 *          capacity per second that you expect your application to require, and you are billed based
 *          on those limits. Exceeding provisioned throughput will result in your requests being
 *          throttled. </p>
 *          <p>Note: <code>PROVISIONED</code> throughput mode is supported only for feature groups that
 *          are offline-only, or use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType">
 *                <code>Standard</code>
 *             </a> tier online store. </p>
 * @public
 */
export interface ThroughputConfigDescription {
  /**
   * <p>The mode used for your feature group throughput: <code>ON_DEMAND</code> or
   *             <code>PROVISIONED</code>. </p>
   * @public
   */
  ThroughputMode: ThroughputMode | undefined;

  /**
   * <p> For provisioned feature groups with online store enabled, this indicates the read
   *          throughput you are billed for and can consume without throttling. </p>
   *          <p>This field is not applicable for on-demand feature groups. </p>
   * @public
   */
  ProvisionedReadCapacityUnits?: number;

  /**
   * <p> For provisioned feature groups, this indicates the write throughput you are billed for
   *          and can consume without throttling. </p>
   *          <p>This field is not applicable for on-demand feature groups. </p>
   * @public
   */
  ProvisionedWriteCapacityUnits?: number;
}

/**
 * @public
 */
export interface DescribeFeatureGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>FeatureGroup</code>. </p>
   * @public
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>he name of the <code>FeatureGroup</code>.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the <code>Feature</code> used for <code>RecordIdentifier</code>, whose value
   *          uniquely identifies a record stored in the feature store.</p>
   * @public
   */
  RecordIdentifierFeatureName: string | undefined;

  /**
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a
   *             <code>FeatureGroup</code>.</p>
   *          <p> An <code>EventTime</code> is a point in time when a new event occurs that corresponds
   *          to the creation or update of a <code>Record</code> in a <code>FeatureGroup</code>. All
   *             <code>Records</code> in the <code>FeatureGroup</code> have a corresponding
   *             <code>EventTime</code>.</p>
   * @public
   */
  EventTimeFeatureName: string | undefined;

  /**
   * <p>A list of the <code>Features</code> in the <code>FeatureGroup</code>. Each feature is
   *          defined by a <code>FeatureName</code> and <code>FeatureType</code>.</p>
   * @public
   */
  FeatureDefinitions: FeatureDefinition[] | undefined;

  /**
   * <p>A timestamp indicating when SageMaker created the <code>FeatureGroup</code>.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp indicating when the feature group was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The configuration for the <code>OnlineStore</code>.</p>
   * @public
   */
  OnlineStoreConfig?: OnlineStoreConfig;

  /**
   * <p>The configuration of the offline store. It includes the following configurations:</p>
   *          <ul>
   *             <li>
   *                <p>Amazon S3 location of the offline store.</p>
   *             </li>
   *             <li>
   *                <p>Configuration of the Glue data catalog.</p>
   *             </li>
   *             <li>
   *                <p>Table format of the offline store.</p>
   *             </li>
   *             <li>
   *                <p>Option to disable the automatic creation of a Glue table for the offline
   *                store.</p>
   *             </li>
   *             <li>
   *                <p>Encryption configuration.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * <p>Active throughput configuration of the feature group. There are two modes:
   *             <code>ON_DEMAND</code> and <code>PROVISIONED</code>. With on-demand mode, you are
   *          charged for data reads and writes that your application performs on your feature group. You
   *          do not need to specify read and write throughput because Feature Store accommodates your
   *          workloads as they ramp up and down. You can switch a feature group to on-demand only once
   *          in a 24 hour period. With provisioned throughput mode, you specify the read and write
   *          capacity per second that you expect your application to require, and you are billed based
   *          on those limits. Exceeding provisioned throughput will result in your requests being
   *          throttled. </p>
   *          <p>Note: <code>PROVISIONED</code> throughput mode is supported only for feature groups that
   *          are offline-only, or use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType">
   *                <code>Standard</code>
   *             </a> tier online store. </p>
   * @public
   */
  ThroughputConfig?: ThroughputConfigDescription;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the
   *          OfflineStore if an OfflineStoreConfig is provided.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The status of the feature group.</p>
   * @public
   */
  FeatureGroupStatus?: FeatureGroupStatus;

  /**
   * <p>The status of the <code>OfflineStore</code>. Notifies you if replicating data into the
   *             <code>OfflineStore</code> has failed. Returns either: <code>Active</code> or
   *             <code>Blocked</code>
   *          </p>
   * @public
   */
  OfflineStoreStatus?: OfflineStoreStatus;

  /**
   * <p>A value indicating whether the update made to the feature group was successful.</p>
   * @public
   */
  LastUpdateStatus?: LastUpdateStatus;

  /**
   * <p>The reason that the <code>FeatureGroup</code> failed to be replicated in the
   *             <code>OfflineStore</code>. This is failure can occur because:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>FeatureGroup</code> could not be created in the
   *                   <code>OfflineStore</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>FeatureGroup</code> could not be deleted from the
   *                   <code>OfflineStore</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>A free form description of the feature group.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A token to resume pagination of the list of <code>Features</code>
   *             (<code>FeatureDefinitions</code>).</p>
   * @public
   */
  NextToken: string | undefined;

  /**
   * <p>The size of the <code>OnlineStore</code> in bytes.</p>
   * @public
   */
  OnlineStoreTotalSizeBytes?: number;
}

/**
 * @public
 */
export interface DescribeFeatureMetadataRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the feature group containing the
   *          feature.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature.</p>
   * @public
   */
  FeatureName: string | undefined;
}

/**
 * <p>A key-value pair that you specify to describe the feature.</p>
 * @public
 */
export interface FeatureParameter {
  /**
   * <p>A key that must contain a value to describe the feature.</p>
   * @public
   */
  Key?: string;

  /**
   * <p>The value that belongs to a key.</p>
   * @public
   */
  Value?: string;
}

/**
 * @public
 */
export interface DescribeFeatureMetadataResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the feature group that contains the feature.</p>
   * @public
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>The name of the feature group that you've specified.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature that you've specified.</p>
   * @public
   */
  FeatureName: string | undefined;

  /**
   * <p>The data type of the feature.</p>
   * @public
   */
  FeatureType: FeatureType | undefined;

  /**
   * <p>A timestamp indicating when the feature was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp indicating when the metadata for the feature group was modified. For
   *          example, if you add a parameter describing the feature, the timestamp changes to reflect
   *          the last time you </p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The description you added to describe the feature.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The key-value pairs that you added to describe the feature.</p>
   * @public
   */
  Parameters?: FeatureParameter[];
}

/**
 * @public
 */
export interface DescribeFlowDefinitionRequest {
  /**
   * <p>The name of the flow definition.</p>
   * @public
   */
  FlowDefinitionName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowDefinitionStatus = {
  ACTIVE: "Active",
  DELETING: "Deleting",
  FAILED: "Failed",
  INITIALIZING: "Initializing",
} as const;

/**
 * @public
 */
export type FlowDefinitionStatus = (typeof FlowDefinitionStatus)[keyof typeof FlowDefinitionStatus];

/**
 * @public
 */
export interface DescribeFlowDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow defintion.</p>
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   * @public
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values are listed below.</p>
   * @public
   */
  FlowDefinitionStatus: FlowDefinitionStatus | undefined;

  /**
   * <p>The timestamp when the flow definition was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Container for configuring the source of human task requests. Used to specify if
   *       Amazon Rekognition or Amazon Textract is used as an integration source.</p>
   * @public
   */
  HumanLoopRequestSource?: HumanLoopRequestSource;

  /**
   * <p>An object containing information about what triggers a human review workflow.</p>
   * @public
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * <p>An object containing information about who works on the task, the workforce task price, and other task details.</p>
   * @public
   */
  HumanLoopConfig?: HumanLoopConfig;

  /**
   * <p>An object containing information about the output file.</p>
   * @public
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) execution role for the flow definition.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The reason your flow definition failed.</p>
   * @public
   */
  FailureReason?: string;
}

/**
 * @public
 */
export interface DescribeHubRequest {
  /**
   * <p>The name of the hub to describe.</p>
   * @public
   */
  HubName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HubStatus = {
  CREATE_FAILED: "CreateFailed",
  CREATING: "Creating",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  IN_SERVICE: "InService",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type HubStatus = (typeof HubStatus)[keyof typeof HubStatus];

/**
 * @public
 */
export interface DescribeHubResponse {
  /**
   * <p>The name of the hub.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hub.</p>
   * @public
   */
  HubArn: string | undefined;

  /**
   * <p>The display name of the hub.</p>
   * @public
   */
  HubDisplayName?: string;

  /**
   * <p>A description of the hub.</p>
   * @public
   */
  HubDescription?: string;

  /**
   * <p>The searchable keywords for the hub.</p>
   * @public
   */
  HubSearchKeywords?: string[];

  /**
   * <p>The Amazon S3 storage configuration for the hub.</p>
   * @public
   */
  S3StorageConfig?: HubS3StorageConfig;

  /**
   * <p>The status of the hub.</p>
   * @public
   */
  HubStatus: HubStatus | undefined;

  /**
   * <p>The failure reason if importing hub content failed.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The date and time that the hub was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the hub was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeHubContentRequest {
  /**
   * <p>The name of the hub that contains the content to describe.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The type of content in the hub.</p>
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * <p>The name of the content to describe.</p>
   * @public
   */
  HubContentName: string | undefined;

  /**
   * <p>The version of the content to describe.</p>
   * @public
   */
  HubContentVersion?: string;
}

/**
 * <p>Any dependencies related to hub content, such as scripts, model artifacts, datasets, or notebooks.</p>
 * @public
 */
export interface HubContentDependency {
  /**
   * <p>The hub content dependency origin path.</p>
   * @public
   */
  DependencyOriginPath?: string;

  /**
   * <p>The hub content dependency copy path.</p>
   * @public
   */
  DependencyCopyPath?: string;
}

/**
 * @public
 * @enum
 */
export const HubContentStatus = {
  AVAILABLE: "Available",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  IMPORTING: "Importing",
  IMPORT_FAILED: "ImportFailed",
} as const;

/**
 * @public
 */
export type HubContentStatus = (typeof HubContentStatus)[keyof typeof HubContentStatus];

/**
 * @public
 * @enum
 */
export const HubContentSupportStatus = {
  DEPRECATED: "Deprecated",
  SUPPORTED: "Supported",
} as const;

/**
 * @public
 */
export type HubContentSupportStatus = (typeof HubContentSupportStatus)[keyof typeof HubContentSupportStatus];

/**
 * @public
 */
export interface DescribeHubContentResponse {
  /**
   * <p>The name of the hub content.</p>
   * @public
   */
  HubContentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hub content.</p>
   * @public
   */
  HubContentArn: string | undefined;

  /**
   * <p>The version of the hub content.</p>
   * @public
   */
  HubContentVersion: string | undefined;

  /**
   * <p>The type of hub content.</p>
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * <p>The document schema version for the hub content.</p>
   * @public
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * <p>The name of the hub that contains the content.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hub that contains the content. </p>
   * @public
   */
  HubArn: string | undefined;

  /**
   * <p>The display name of the hub content.</p>
   * @public
   */
  HubContentDisplayName?: string;

  /**
   * <p>A description of the hub content.</p>
   * @public
   */
  HubContentDescription?: string;

  /**
   * <p>A string that provides a description of the hub content. This string can include links, tables, and standard markdown formating.</p>
   * @public
   */
  HubContentMarkdown?: string;

  /**
   * <p>The hub content document that describes information about the hub content such as type, associated containers, scripts, and more.</p>
   * @public
   */
  HubContentDocument: string | undefined;

  /**
   * <p>The ARN of the public hub content.</p>
   * @public
   */
  SageMakerPublicHubContentArn?: string;

  /**
   * <p>The minimum version of the hub content.</p>
   * @public
   */
  ReferenceMinVersion?: string;

  /**
   * <p>The support status of the hub content.</p>
   * @public
   */
  SupportStatus?: HubContentSupportStatus;

  /**
   * <p>The searchable keywords for the hub content.</p>
   * @public
   */
  HubContentSearchKeywords?: string[];

  /**
   * <p>The location of any dependencies that the hub content has, such as scripts, model artifacts, datasets, or notebooks.</p>
   * @public
   */
  HubContentDependencies?: HubContentDependency[];

  /**
   * <p>The status of the hub content.</p>
   * @public
   */
  HubContentStatus: HubContentStatus | undefined;

  /**
   * <p>The failure reason if importing hub content failed.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The date and time that hub content was created.</p>
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeHumanTaskUiRequest {
  /**
   * <p>The name of the human task user interface
   *       (worker task template) you want information about.</p>
   * @public
   */
  HumanTaskUiName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HumanTaskUiStatus = {
  ACTIVE: "Active",
  DELETING: "Deleting",
} as const;

/**
 * @public
 */
export type HumanTaskUiStatus = (typeof HumanTaskUiStatus)[keyof typeof HumanTaskUiStatus];

/**
 * <p>Container for user interface template information.</p>
 * @public
 */
export interface UiTemplateInfo {
  /**
   * <p>The URL for the user interface template.</p>
   * @public
   */
  Url?: string;

  /**
   * <p>The SHA-256 digest of the contents of the template.</p>
   * @public
   */
  ContentSha256?: string;
}

/**
 * @public
 */
export interface DescribeHumanTaskUiResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface (worker task template).</p>
   * @public
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>The name of the human task user interface (worker task template).</p>
   * @public
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The status of the human task user interface (worker task template). Valid values are listed below.</p>
   * @public
   */
  HumanTaskUiStatus?: HumanTaskUiStatus;

  /**
   * <p>The timestamp when the human task user interface was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Container for user interface template information.</p>
   * @public
   */
  UiTemplate: UiTemplateInfo | undefined;
}

/**
 * @public
 */
export interface DescribeHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * <p>Shows the latest objective metric emitted by a training job that was launched by a
 *             hyperparameter tuning job. You define the objective metric in the
 *                 <code>HyperParameterTuningJobObjective</code> parameter of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html">HyperParameterTuningJobConfig</a>.</p>
 * @public
 */
export interface FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * <p>Select if you want to minimize or maximize the objective metric during hyperparameter
   *             tuning. </p>
   * @public
   */
  Type?: HyperParameterTuningJobObjectiveType;

  /**
   * <p>The name of the objective metric. For SageMaker built-in algorithms, metrics are defined
   *             per algorithm. See the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xgboost-tuning.html">metrics for XGBoost</a> as an
   *             example. You can also use a custom algorithm for training and define your own metrics.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html">Define metrics and environment variables</a>.</p>
   * @public
   */
  MetricName: string | undefined;

  /**
   * <p>The value of the objective metric.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainingJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type TrainingJobStatus = (typeof TrainingJobStatus)[keyof typeof TrainingJobStatus];

/**
 * <p>The container for the summary information about a training job.</p>
 * @public
 */
export interface HyperParameterTrainingJobSummary {
  /**
   * <p>The training job definition name.</p>
   * @public
   */
  TrainingJobDefinitionName?: string;

  /**
   * <p>The name of the training job.</p>
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   * @public
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The HyperParameter tuning job that launched the training job.</p>
   * @public
   */
  TuningJobName?: string;

  /**
   * <p>The date and time that the training job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the training job started.</p>
   * @public
   */
  TrainingStartTime?: Date;

  /**
   * <p>Specifies the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   * @public
   */
  TrainingEndTime?: Date;

  /**
   * <p>The
   *             status
   *             of the training job.</p>
   * @public
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * <p>A
   *             list of the hyperparameters for which you specified ranges to
   *             search.</p>
   * @public
   */
  TunedHyperParameters: Record<string, string> | undefined;

  /**
   * <p>The
   *             reason that the training job failed.
   *         </p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_FinalHyperParameterTuningJobObjectiveMetric.html">FinalHyperParameterTuningJobObjectiveMetric</a> object that specifies the
   *             value
   *             of the
   *             objective
   *             metric of the tuning job that launched this training job.</p>
   * @public
   */
  FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;

  /**
   * <p>The status of the objective metric for the training job:</p>
   *          <ul>
   *             <li>
   *                <p>Succeeded: The
   *                     final
   *                     objective metric for the training job was evaluated by the
   *                     hyperparameter tuning job and
   *                     used
   *                     in the hyperparameter tuning process.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Pending: The training job is in progress and evaluation of its final objective
   *                     metric is pending.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>Failed:
   *                     The final objective metric for the training job was not evaluated, and was not
   *                     used in the hyperparameter tuning process. This typically occurs when the
   *                     training job failed or did not emit an objective
   *                     metric.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ObjectiveStatus?: ObjectiveStatus;
}

/**
 * <p>The total resources consumed by your hyperparameter tuning job.</p>
 * @public
 */
export interface HyperParameterTuningJobConsumedResources {
  /**
   * <p>The wall clock runtime in seconds used by your hyperparameter tuning job.</p>
   * @public
   */
  RuntimeInSeconds?: number;
}

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobStatus = {
  COMPLETED: "Completed",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type HyperParameterTuningJobStatus =
  (typeof HyperParameterTuningJobStatus)[keyof typeof HyperParameterTuningJobStatus];

/**
 * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
 *             categorized by the status of their objective metric. The objective metric status shows
 *             whether the
 *             final
 *             objective metric for the training job has been evaluated by the
 *             tuning job and used in the hyperparameter tuning process.</p>
 * @public
 */
export interface ObjectiveStatusCounters {
  /**
   * <p>The number of training jobs whose final objective metric was evaluated by the
   *             hyperparameter tuning job and used in the hyperparameter tuning process.</p>
   * @public
   */
  Succeeded?: number;

  /**
   * <p>The number of training jobs that are in progress and pending evaluation of their final
   *             objective metric.</p>
   * @public
   */
  Pending?: number;

  /**
   * <p>The number of training jobs whose final objective metric was not evaluated and used in
   *             the hyperparameter tuning process. This typically occurs when the training job failed or
   *             did not emit an objective metric.</p>
   * @public
   */
  Failed?: number;
}

/**
 * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
 *             status.</p>
 * @public
 */
export interface TrainingJobStatusCounters {
  /**
   * <p>The number of completed training jobs launched by the hyperparameter tuning
   *             job.</p>
   * @public
   */
  Completed?: number;

  /**
   * <p>The number of in-progress training jobs launched by a hyperparameter tuning
   *             job.</p>
   * @public
   */
  InProgress?: number;

  /**
   * <p>The number of training jobs that failed, but can be retried. A failed training job can
   *             be retried only if it failed because an internal service error occurred.</p>
   * @public
   */
  RetryableError?: number;

  /**
   * <p>The number of training jobs that failed and can't be retried. A failed training job
   *             can't be retried if it failed because a client error occurred.</p>
   * @public
   */
  NonRetryableError?: number;

  /**
   * <p>The number of training jobs launched by a hyperparameter tuning job that were
   *             manually
   *             stopped.</p>
   * @public
   */
  Stopped?: number;
}

/**
 * <p>A structure that contains runtime information about both current and completed
 *             hyperparameter tuning jobs.</p>
 * @public
 */
export interface HyperParameterTuningJobCompletionDetails {
  /**
   * <p>The number of training jobs launched by a tuning job that are not improving (1% or
   *             less) as measured by model performance evaluated against an objective function.</p>
   * @public
   */
  NumberOfTrainingJobsObjectiveNotImproving?: number;

  /**
   * <p>The time in timestamp format that AMT detected model convergence, as defined by a lack
   *             of significant improvement over time based on criteria developed over a wide range of
   *             diverse benchmarking tests.</p>
   * @public
   */
  ConvergenceDetectedTime?: Date;
}

/**
 * @public
 */
export interface DescribeHyperParameterTuningJobResponse {
  /**
   * <p>The name of the hyperparameter tuning job.</p>
   * @public
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html">HyperParameterTuningJobConfig</a> object that specifies the configuration of
   *             the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html">HyperParameterTrainingJobDefinition</a> object that specifies the definition of
   *             the training jobs that this tuning job launches.</p>
   * @public
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p>A list of the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html">HyperParameterTrainingJobDefinition</a> objects launched for this tuning
   *             job.</p>
   * @public
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>The status of the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | undefined;

  /**
   * <p>The date and time that the tuning job started.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   * @public
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The date and time that the status of the tuning job was modified. </p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobStatusCounters.html">TrainingJobStatusCounters</a> object that specifies the number of training
   *             jobs, categorized by status, that this tuning job launched.</p>
   * @public
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ObjectiveStatusCounters.html">ObjectiveStatusCounters</a> object that specifies the number of training jobs,
   *             categorized by the status of their final objective metric, that this tuning job
   *             launched.</p>
   * @public
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> object that describes the training job that completed
   *             with the best current <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobObjective.html">HyperParameterTuningJobObjective</a>.</p>
   * @public
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>If the hyperparameter tuning job is an warm start tuning job with a
   *                 <code>WarmStartType</code> of <code>IDENTICAL_DATA_AND_ALGORITHM</code>, this is the
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> for the training job with the best objective metric
   *             value of all training jobs launched by this tuning job and all parent jobs specified for
   *             the warm start tuning job.</p>
   * @public
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>The configuration for starting the hyperparameter parameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   * @public
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * <p>A flag to indicate if autotune is enabled for the hyperparameter tuning job.</p>
   * @public
   */
  Autotune?: Autotune;

  /**
   * <p>If the tuning job failed, the reason it failed.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>Tuning job completion information returned as the response from a hyperparameter
   *             tuning job. This information tells if your tuning job has or has not converged. It also
   *             includes the number of training jobs that have not improved model performance as
   *             evaluated against the objective function.</p>
   * @public
   */
  TuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails;

  /**
   * <p>The total resources consumed by your hyperparameter tuning job.</p>
   * @public
   */
  ConsumedResources?: HyperParameterTuningJobConsumedResources;
}

/**
 * @public
 */
export interface DescribeImageRequest {
  /**
   * <p>The name of the image to describe.</p>
   * @public
   */
  ImageName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ImageStatus = (typeof ImageStatus)[keyof typeof ImageStatus];

/**
 * @public
 */
export interface DescribeImageResponse {
  /**
   * <p>When the image was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>The description of the image.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The name of the image as displayed.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The ARN of the image.</p>
   * @public
   */
  ImageArn?: string;

  /**
   * <p>The name of the image.</p>
   * @public
   */
  ImageName?: string;

  /**
   * <p>The status of the image.</p>
   * @public
   */
  ImageStatus?: ImageStatus;

  /**
   * <p>When the image was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The ARN of the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   * @public
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface DescribeImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>The version of the image. If not specified, the latest version is described.</p>
   * @public
   */
  Version?: number;

  /**
   * <p>The alias of the image version.</p>
   * @public
   */
  Alias?: string;
}

/**
 * @public
 * @enum
 */
export const ImageVersionStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ImageVersionStatus = (typeof ImageVersionStatus)[keyof typeof ImageVersionStatus];

/**
 * @public
 */
export interface DescribeImageVersionResponse {
  /**
   * <p>The registry path of the container image on which this image version is based.</p>
   * @public
   */
  BaseImage?: string;

  /**
   * <p>The registry path of the container image that contains this image version.</p>
   * @public
   */
  ContainerImage?: string;

  /**
   * <p>When the version was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The ARN of the image the version is based on.</p>
   * @public
   */
  ImageArn?: string;

  /**
   * <p>The ARN of the version.</p>
   * @public
   */
  ImageVersionArn?: string;

  /**
   * <p>The status of the version.</p>
   * @public
   */
  ImageVersionStatus?: ImageVersionStatus;

  /**
   * <p>When the version was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The version number.</p>
   * @public
   */
  Version?: number;

  /**
   * <p>The stability of the image version specified by the maintainer.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOT_PROVIDED</code>: The maintainers did not provide a status for image version stability.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STABLE</code>: The image version is stable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TO_BE_ARCHIVED</code>: The image version is set to be archived. Custom image versions that are set to be archived are automatically archived after three months.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ARCHIVED</code>: The image version is archived. Archived image versions are not searchable and are no longer actively supported. </p>
   *             </li>
   *          </ul>
   * @public
   */
  VendorGuidance?: VendorGuidance;

  /**
   * <p>Indicates SageMaker job type compatibility.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TRAINING</code>: The image version is compatible with SageMaker training jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INFERENCE</code>: The image version is compatible with SageMaker inference jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTEBOOK_KERNEL</code>: The image version is compatible with SageMaker notebook kernels.</p>
   *             </li>
   *          </ul>
   * @public
   */
  JobType?: JobType;

  /**
   * <p>The machine learning framework vended in the image version.</p>
   * @public
   */
  MLFramework?: string;

  /**
   * <p>The supported programming language and its version.</p>
   * @public
   */
  ProgrammingLang?: string;

  /**
   * <p>Indicates CPU or GPU compatibility.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CPU</code>: The image version is compatible with CPU.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GPU</code>: The image version is compatible with GPU.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Processor?: Processor;

  /**
   * <p>Indicates Horovod compatibility.</p>
   * @public
   */
  Horovod?: boolean;

  /**
   * <p>The maintainer description of the image version.</p>
   * @public
   */
  ReleaseNotes?: string;
}

/**
 * @public
 */
export interface DescribeInferenceComponentInput {
  /**
   * <p>The name of the inference component.</p>
   * @public
   */
  InferenceComponentName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceComponentStatus = {
  CREATING: "Creating",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_SERVICE: "InService",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type InferenceComponentStatus = (typeof InferenceComponentStatus)[keyof typeof InferenceComponentStatus];

/**
 * <p>Details about the runtime settings for the model that is deployed with the inference
 *          component.</p>
 * @public
 */
export interface InferenceComponentRuntimeConfigSummary {
  /**
   * <p>The number of runtime copies of the model container that you requested to deploy with
   *          the inference component.</p>
   * @public
   */
  DesiredCopyCount?: number;

  /**
   * <p>The number of runtime copies of the model container that are currently deployed.</p>
   * @public
   */
  CurrentCopyCount?: number;
}

/**
 * <p>Details about the resources that are deployed with this inference component.</p>
 * @public
 */
export interface InferenceComponentContainerSpecificationSummary {
  /**
   * <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariant.html">ProductionVariant</a>.</p>
   *          <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path
   *             of the primary container when you created the model hosted in this
   *                 <code>ProductionVariant</code>, the path resolves to a path of the form
   *                 <code>registry/repository[@digest]</code>. A digest is a hash value that identifies
   *             a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
   * @public
   */
  DeployedImage?: DeployedImage;

  /**
   * <p>The Amazon S3 path where the model artifacts are stored.</p>
   * @public
   */
  ArtifactUrl?: string;

  /**
   * <p>The environment variables to set in the Docker container.</p>
   * @public
   */
  Environment?: Record<string, string>;
}

/**
 * <p>Details about the resources that are deployed with this inference component.</p>
 * @public
 */
export interface InferenceComponentSpecificationSummary {
  /**
   * <p>The name of the SageMaker model object that is deployed with the inference
   *          component.</p>
   * @public
   */
  ModelName?: string;

  /**
   * <p>Details about the container that provides the runtime environment for the model that is
   *          deployed with the inference component.</p>
   * @public
   */
  Container?: InferenceComponentContainerSpecificationSummary;

  /**
   * <p>Settings that take effect while the model container starts up.</p>
   * @public
   */
  StartupParameters?: InferenceComponentStartupParameters;

  /**
   * <p>The compute resources allocated to run the model assigned
   *          to the inference component.</p>
   * @public
   */
  ComputeResourceRequirements?: InferenceComponentComputeResourceRequirements;
}

/**
 * @public
 */
export interface DescribeInferenceComponentOutput {
  /**
   * <p>The name of the inference component.</p>
   * @public
   */
  InferenceComponentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the inference component.</p>
   * @public
   */
  InferenceComponentArn: string | undefined;

  /**
   * <p>The name of the endpoint that hosts the inference component.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint that hosts the inference component.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>The name of the production variant that hosts the inference component.</p>
   * @public
   */
  VariantName?: string;

  /**
   * <p>If the inference component status is <code>Failed</code>, the reason for the
   *          failure.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>Details about the resources that are deployed with this inference component.</p>
   * @public
   */
  Specification?: InferenceComponentSpecificationSummary;

  /**
   * <p>Details about the runtime settings for the model that is deployed with the inference
   *       component.</p>
   * @public
   */
  RuntimeConfig?: InferenceComponentRuntimeConfigSummary;

  /**
   * <p>The time when the inference component was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time when the inference component was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the inference component.</p>
   * @public
   */
  InferenceComponentStatus?: InferenceComponentStatus;
}

/**
 * @public
 */
export interface DescribeInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to describe.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>The metadata of the endpoint.</p>
 * @public
 */
export interface EndpointMetadata {
  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the endpoint configuration.</p>
   * @public
   */
  EndpointConfigName?: string;

  /**
   * <p>
   *            The status of the endpoint. For possible values of the status of an endpoint, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_EndpointSummary.html">EndpointSummary</a>.
   *        </p>
   * @public
   */
  EndpointStatus?: EndpointStatus;

  /**
   * <p>
   *            If the status of the endpoint is <code>Failed</code>, or the status is <code>InService</code> but update
   *            operation fails, this provides the reason why it failed.
   *        </p>
   * @public
   */
  FailureReason?: string;
}

/**
 * @public
 * @enum
 */
export const ModelVariantStatus = {
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETING: "Deleting",
  IN_SERVICE: "InService",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type ModelVariantStatus = (typeof ModelVariantStatus)[keyof typeof ModelVariantStatus];

/**
 * <p>Summary of the deployment configuration of a model.</p>
 * @public
 */
export interface ModelVariantConfigSummary {
  /**
   * <p>The name of the Amazon SageMaker Model entity.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The name of the variant.</p>
   * @public
   */
  VariantName: string | undefined;

  /**
   * <p>The configuration of the infrastructure that the model has been deployed to.</p>
   * @public
   */
  InfrastructureConfig: ModelInfrastructureConfig | undefined;

  /**
   * <p>The status of deployment for the model variant on the hosted inference endpoint.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Creating</code> - Amazon SageMaker is preparing the model variant on the hosted inference endpoint.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InService</code> - The model variant is running on the hosted inference endpoint.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code> - Amazon SageMaker is updating the model variant on the hosted inference endpoint.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code> - Amazon SageMaker is deleting the model variant on the hosted inference endpoint.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleted</code> - The model variant has been deleted on the hosted inference endpoint. This
   *                     can only happen after stopping the experiment.
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: ModelVariantStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceExperimentStatus = {
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
  CREATED: "Created",
  CREATING: "Creating",
  RUNNING: "Running",
  STARTING: "Starting",
  STOPPING: "Stopping",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type InferenceExperimentStatus = (typeof InferenceExperimentStatus)[keyof typeof InferenceExperimentStatus];

/**
 * @public
 */
export interface DescribeInferenceExperimentResponse {
  /**
   * <p>The ARN of the inference experiment being described.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the inference experiment.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the inference experiment.</p>
   * @public
   */
  Type: InferenceExperimentType | undefined;

  /**
   * <p>The duration for which the inference experiment ran or will run.</p>
   * @public
   */
  Schedule?: InferenceExperimentSchedule;

  /**
   * <p>
   *            The status of the inference experiment. The following are the possible statuses for an inference
   *            experiment:
   *        </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Creating</code> - Amazon SageMaker is creating your experiment.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Created</code> - Amazon SageMaker has finished the creation of your experiment and will begin the
   *                    experiment at the scheduled time.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code> - When you make changes to your experiment, your experiment shows as updating.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Starting</code> - Amazon SageMaker is beginning your experiment.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Running</code> - Your experiment is in progress.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopping</code> - Amazon SageMaker is stopping your experiment.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code> - Your experiment has completed.
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Cancelled</code> - When you conclude your experiment early using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopInferenceExperiment.html">StopInferenceExperiment</a> API, or if any operation fails with an unexpected error, it shows
   *                    as cancelled.
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: InferenceExperimentStatus | undefined;

  /**
   * <p>
   *            The error message or client-specified <code>Reason</code> from the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopInferenceExperiment.html">StopInferenceExperiment</a>
   *            API, that explains the status of the inference experiment.
   *        </p>
   * @public
   */
  StatusReason?: string;

  /**
   * <p>The description of the inference experiment.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The timestamp at which you created the inference experiment.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>
   *            The timestamp at which the inference experiment was completed.
   *        </p>
   * @public
   */
  CompletionTime?: Date;

  /**
   * <p>The timestamp at which you last modified the inference experiment.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>
   *            The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage
   *            Amazon SageMaker Inference endpoints for model deployment.
   *        </p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The metadata of the endpoint on which the inference experiment ran.</p>
   * @public
   */
  EndpointMetadata: EndpointMetadata | undefined;

  /**
   * <p>
   *            An array of <code>ModelVariantConfigSummary</code> objects. There is one for each variant in the inference
   *            experiment. Each <code>ModelVariantConfigSummary</code> object in the array describes the infrastructure
   *            configuration for deploying the corresponding variant.
   *        </p>
   * @public
   */
  ModelVariants: ModelVariantConfigSummary[] | undefined;

  /**
   * <p>The Amazon S3 location and configuration for storing inference request and response data.</p>
   * @public
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig;

  /**
   * <p>
   *            The configuration of <code>ShadowMode</code> inference experiment type, which shows the production variant
   *            that takes all the inference requests, and the shadow variant to which Amazon SageMaker replicates a percentage of the
   *            inference requests. For the shadow variant it also shows the percentage of requests that Amazon SageMaker replicates.
   *        </p>
   * @public
   */
  ShadowModeConfig?: ShadowModeConfig;

  /**
   * <p>
   *            The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on
   *            the storage volume attached to the ML compute instance that hosts the endpoint. For more information, see
   *            <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceExperiment.html">CreateInferenceExperiment</a>.
   *        </p>
   * @public
   */
  KmsKey?: string;
}

/**
 * @public
 */
export interface DescribeInferenceRecommendationsJobRequest {
  /**
   * <p>The name of the job. The name must be unique within an
   *            Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobName: string | undefined;
}

/**
 * <p>The metrics for an existing endpoint compared in an Inference Recommender job.</p>
 * @public
 */
export interface InferenceMetrics {
  /**
   * <p>The expected maximum number of requests per minute for the instance.</p>
   * @public
   */
  MaxInvocations: number | undefined;

  /**
   * <p>The expected model latency at maximum invocations per minute for the instance.</p>
   * @public
   */
  ModelLatency: number | undefined;
}

/**
 * <p>The performance results from running an Inference Recommender job on an existing endpoint.</p>
 * @public
 */
export interface EndpointPerformance {
  /**
   * <p>The metrics for an existing endpoint.</p>
   * @public
   */
  Metrics: InferenceMetrics | undefined;

  /**
   * <p>Details about a customer endpoint that was compared in an Inference Recommender job.</p>
   * @public
   */
  EndpointInfo: EndpointInfo | undefined;
}

/**
 * <p>The endpoint configuration made by Inference Recommender during a recommendation job.</p>
 * @public
 */
export interface EndpointOutputConfiguration {
  /**
   * <p>The name of the endpoint made during a recommendation job.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the production variant (deployed model) made during a recommendation job.</p>
   * @public
   */
  VariantName: string | undefined;

  /**
   * <p>The instance type recommended by Amazon SageMaker Inference Recommender.</p>
   * @public
   */
  InstanceType?: ProductionVariantInstanceType;

  /**
   * <p>The number of instances recommended to launch initially.</p>
   * @public
   */
  InitialInstanceCount?: number;

  /**
   * <p>Specifies the serverless configuration for an endpoint variant.</p>
   * @public
   */
  ServerlessConfig?: ProductionVariantServerlessConfig;
}

/**
 * <p>The metrics of recommendations.</p>
 * @public
 */
export interface RecommendationMetrics {
  /**
   * <p>Defines the cost per hour for the instance. </p>
   * @public
   */
  CostPerHour?: number;

  /**
   * <p>Defines the cost per inference for the instance .</p>
   * @public
   */
  CostPerInference?: number;

  /**
   * <p>The expected maximum number of requests per minute for the instance.</p>
   * @public
   */
  MaxInvocations?: number;

  /**
   * <p>The expected model latency at maximum invocation per minute for the instance.</p>
   * @public
   */
  ModelLatency?: number;

  /**
   * <p>The expected CPU utilization at maximum invocations per minute for the instance.</p>
   *          <p>
   *             <code>NaN</code> indicates that the value is not available.</p>
   * @public
   */
  CpuUtilization?: number;

  /**
   * <p>The expected memory utilization at maximum invocations per minute for the instance.</p>
   *          <p>
   *             <code>NaN</code> indicates that the value is not available.</p>
   * @public
   */
  MemoryUtilization?: number;

  /**
   * <p>The time it takes to launch new compute resources for a serverless endpoint.
   *          The time can vary depending on the model size, how long it takes to download the
   *          model, and the start-up time of the container.</p>
   *          <p>
   *             <code>NaN</code> indicates that the value is not available.</p>
   * @public
   */
  ModelSetupTime?: number;
}

/**
 * <p>A list of environment parameters suggested by the Amazon SageMaker Inference Recommender.</p>
 * @public
 */
export interface EnvironmentParameter {
  /**
   * <p>The environment key suggested by the Amazon SageMaker Inference Recommender.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value type suggested by the Amazon SageMaker Inference Recommender.</p>
   * @public
   */
  ValueType: string | undefined;

  /**
   * <p>The value suggested by the Amazon SageMaker Inference Recommender.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Defines the model configuration. Includes the specification name and environment parameters.</p>
 * @public
 */
export interface ModelConfiguration {
  /**
   * <p>The inference specification name in the model package version.</p>
   * @public
   */
  InferenceSpecificationName?: string;

  /**
   * <p>Defines the environment parameters that includes key, value types, and values.</p>
   * @public
   */
  EnvironmentParameters?: EnvironmentParameter[];

  /**
   * <p>The name of the compilation job used to create the recommended model artifacts.</p>
   * @public
   */
  CompilationJobName?: string;
}

/**
 * <p>A list of recommendations made by Amazon SageMaker Inference Recommender.</p>
 * @public
 */
export interface InferenceRecommendation {
  /**
   * <p>The recommendation ID which uniquely identifies each recommendation.</p>
   * @public
   */
  RecommendationId?: string;

  /**
   * <p>The metrics used to decide what recommendation to make.</p>
   * @public
   */
  Metrics?: RecommendationMetrics;

  /**
   * <p>Defines the endpoint configuration parameters.</p>
   * @public
   */
  EndpointConfiguration: EndpointOutputConfiguration | undefined;

  /**
   * <p>Defines the model configuration.</p>
   * @public
   */
  ModelConfiguration: ModelConfiguration | undefined;

  /**
   * <p>A timestamp that shows when the benchmark completed.</p>
   * @public
   */
  InvocationEndTime?: Date;

  /**
   * <p>A timestamp that shows when the benchmark started.</p>
   * @public
   */
  InvocationStartTime?: Date;
}

/**
 * @public
 * @enum
 */
export const RecommendationJobStatus = {
  COMPLETED: "COMPLETED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type RecommendationJobStatus = (typeof RecommendationJobStatus)[keyof typeof RecommendationJobStatus];

/**
 * @public
 */
export interface DescribeInferenceRecommendationsJobResponse {
  /**
   * <p>The name of the job. The name must be unique within an
   *            Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The job description that you provided when you initiated the job.</p>
   * @public
   */
  JobDescription?: string;

  /**
   * <p>The job type that you provided when you initiated the job.</p>
   * @public
   */
  JobType: RecommendationJobType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   * @public
   */
  JobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services
   *            Identity and Access Management (IAM) role you provided when you initiated the job.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The status of the job.</p>
   * @public
   */
  Status: RecommendationJobStatus | undefined;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the job completed.</p>
   * @public
   */
  CompletionTime?: Date;

  /**
   * <p>A timestamp that shows when the job was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If the job fails, provides information why the job failed.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>Returns information about the versioned model package Amazon Resource Name (ARN),
   *     the traffic pattern, and endpoint configurations you provided when you initiated the job.</p>
   * @public
   */
  InputConfig: RecommendationJobInputConfig | undefined;

  /**
   * <p>The stopping conditions that you provided when you initiated the job.</p>
   * @public
   */
  StoppingConditions?: RecommendationJobStoppingConditions;

  /**
   * <p>The recommendations made by Inference Recommender.</p>
   * @public
   */
  InferenceRecommendations?: InferenceRecommendation[];

  /**
   * <p>The performance results from running an Inference Recommender job on an existing endpoint.</p>
   * @public
   */
  EndpointPerformances?: EndpointPerformance[];
}

/**
 * @public
 */
export interface DescribeLabelingJobRequest {
  /**
   * <p>The name of the labeling job to return information for.</p>
   * @public
   */
  LabelingJobName: string | undefined;
}

/**
 * <p>Provides a breakdown of the number of objects labeled.</p>
 * @public
 */
export interface LabelCounters {
  /**
   * <p>The total number of objects labeled.</p>
   * @public
   */
  TotalLabeled?: number;

  /**
   * <p>The total number of objects labeled by a human worker.</p>
   * @public
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of objects labeled by automated data labeling.</p>
   * @public
   */
  MachineLabeled?: number;

  /**
   * <p>The total number of objects that could not be labeled due to an error.</p>
   * @public
   */
  FailedNonRetryableError?: number;

  /**
   * <p>The total number of objects not yet labeled.</p>
   * @public
   */
  Unlabeled?: number;
}

/**
 * <p>Specifies the location of the output produced by the labeling job. </p>
 * @public
 */
export interface LabelingJobOutput {
  /**
   * <p>The Amazon S3 bucket location of the manifest file for labeled data. </p>
   * @public
   */
  OutputDatasetS3Uri: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the most recent SageMaker model trained as part of
   *             automated data labeling. </p>
   * @public
   */
  FinalActiveLearningModelArn?: string;
}

/**
 * @public
 * @enum
 */
export const LabelingJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  INITIALIZING: "Initializing",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type LabelingJobStatus = (typeof LabelingJobStatus)[keyof typeof LabelingJobStatus];

/**
 * @public
 */
export interface DescribeLabelingJobResponse {
  /**
   * <p>The processing status of the labeling job. </p>
   * @public
   */
  LabelingJobStatus: LabelingJobStatus | undefined;

  /**
   * <p>Provides a breakdown of the number of data objects labeled by humans, the number of
   *             objects labeled by machine, the number of objects than couldn't be labeled, and the
   *             total number of objects labeled. </p>
   * @public
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>If the job failed, the reason that it failed. </p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The date and time that the labeling job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the labeling job was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A unique identifier for work done as part of a labeling job.</p>
   * @public
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The name assigned to the labeling job when it was created.</p>
   * @public
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   * @public
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The attribute used as the label in the output manifest file.</p>
   * @public
   */
  LabelAttributeName?: string;

  /**
   * <p>Input configuration information for the labeling job, such as the Amazon S3 location of the
   *             data objects and the location of the manifest file that describes the data
   *             objects.</p>
   * @public
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>The location of the job's output data and the Amazon Web Services Key Management
   *             Service key ID for the key used to encrypt the output data, if any.</p>
   * @public
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf
   *             during data labeling.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The S3 location of the JSON file that defines the categories used to label data
   *             objects. Please note the following label-category limits:</p>
   *          <ul>
   *             <li>
   *                <p>Semantic segmentation labeling jobs using automated labeling: 20 labels</p>
   *             </li>
   *             <li>
   *                <p>Box bounding labeling jobs (all): 10 labels</p>
   *             </li>
   *          </ul>
   *          <p>The file is a JSON structure in the following format:</p>
   *          <p>
   *             <code>\{</code>
   *          </p>
   *          <p>
   *             <code> "document-version": "2018-11-28"</code>
   *          </p>
   *          <p>
   *             <code> "labels": [</code>
   *          </p>
   *          <p>
   *             <code> \{</code>
   *          </p>
   *          <p>
   *             <code> "label": "<i>label 1</i>"</code>
   *          </p>
   *          <p>
   *             <code> \},</code>
   *          </p>
   *          <p>
   *             <code> \{</code>
   *          </p>
   *          <p>
   *             <code> "label": "<i>label 2</i>"</code>
   *          </p>
   *          <p>
   *             <code> \},</code>
   *          </p>
   *          <p>
   *             <code> ...</code>
   *          </p>
   *          <p>
   *             <code> \{</code>
   *          </p>
   *          <p>
   *             <code> "label": "<i>label n</i>"</code>
   *          </p>
   *          <p>
   *             <code> \}</code>
   *          </p>
   *          <p>
   *             <code> ]</code>
   *          </p>
   *          <p>
   *             <code>\}</code>
   *          </p>
   * @public
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
   *             job is automatically stopped.</p>
   * @public
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * <p>Configuration information for automated data labeling.</p>
   * @public
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * <p>Configuration information required for human workers to complete a labeling
   *             task.</p>
   * @public
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The location of the output produced by the labeling job.</p>
   * @public
   */
  LabelingJobOutput?: LabelingJobOutput;
}

/**
 * @public
 */
export interface DescribeLineageGroupRequest {
  /**
   * <p>The name of the lineage group.</p>
   * @public
   */
  LineageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeLineageGroupResponse {
  /**
   * <p>The name of the lineage group.</p>
   * @public
   */
  LineageGroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string;

  /**
   * <p>The display name of the lineage group.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>The description of the lineage group.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The creation time of lineage group.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>The last modified time of the lineage group.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;
}

/**
 * @public
 */
export interface DescribeMlflowTrackingServerRequest {
  /**
   * <p>The name of the MLflow Tracking Server to describe.</p>
   * @public
   */
  TrackingServerName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IsTrackingServerActive = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;

/**
 * @public
 */
export type IsTrackingServerActive = (typeof IsTrackingServerActive)[keyof typeof IsTrackingServerActive];

/**
 * @public
 * @enum
 */
export const TrackingServerStatus = {
  CREATED: "Created",
  CREATE_FAILED: "CreateFailed",
  CREATING: "Creating",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  MAINTENANCE_COMPLETE: "MaintenanceComplete",
  MAINTENANCE_FAILED: "MaintenanceFailed",
  MAINTENANCE_IN_PROGRESS: "MaintenanceInProgress",
  STARTED: "Started",
  STARTING: "Starting",
  START_FAILED: "StartFailed",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  STOP_FAILED: "StopFailed",
  UPDATED: "Updated",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type TrackingServerStatus = (typeof TrackingServerStatus)[keyof typeof TrackingServerStatus];

/**
 * @public
 */
export interface DescribeMlflowTrackingServerResponse {
  /**
   * <p>The ARN of the described tracking server.</p>
   * @public
   */
  TrackingServerArn?: string;

  /**
   * <p>The name of the described tracking server.</p>
   * @public
   */
  TrackingServerName?: string;

  /**
   * <p>The S3 URI of the general purpose bucket used as the MLflow Tracking Server
   *       artifact store.</p>
   * @public
   */
  ArtifactStoreUri?: string;

  /**
   * <p>The size of the described tracking server.</p>
   * @public
   */
  TrackingServerSize?: TrackingServerSize;

  /**
   * <p>The MLflow version used for the described tracking server.</p>
   * @public
   */
  MlflowVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for an IAM role in your account that the described MLflow Tracking Server
   *       uses to access the artifact store in Amazon S3.</p>
   * @public
   */
  RoleArn?: string;

  /**
   * <p>The current creation status of the described MLflow Tracking Server.</p>
   * @public
   */
  TrackingServerStatus?: TrackingServerStatus;

  /**
   * <p>Whether the described MLflow Tracking Server is currently active.</p>
   * @public
   */
  IsActive?: IsTrackingServerActive;

  /**
   * <p>The URL to connect to the MLflow user interface for the described tracking server.</p>
   * @public
   */
  TrackingServerUrl?: string;

  /**
   * <p>The day and time of the week when weekly maintenance occurs on the described tracking server.</p>
   * @public
   */
  WeeklyMaintenanceWindowStart?: string;

  /**
   * <p>Whether automatic registration of new MLflow models to the SageMaker Model Registry is enabled.</p>
   * @public
   */
  AutomaticModelRegistration?: boolean;

  /**
   * <p>The timestamp of when the described MLflow Tracking Server was created.</p>
   * @public
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>The timestamp of when the described MLflow Tracking Server was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;
}

/**
 * @public
 */
export interface DescribeModelInput {
  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelOutput {
  /**
   * <p>Name of the SageMaker model.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The location of the primary inference code, associated artifacts, and custom
   *             environment map that the inference code uses when it is deployed in production.
   *         </p>
   * @public
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>The containers in the inference pipeline.</p>
   * @public
   */
  Containers?: ContainerDefinition[];

  /**
   * <p>Specifies details of how containers in a multi-container endpoint are called.</p>
   * @public
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the
   *             model.</p>
   * @public
   */
  ExecutionRoleArn?: string;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that this model has access to. For
   *             more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual
   *                 Private Cloud</a>
   *          </p>
   * @public
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>A timestamp that shows when the model was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   * @public
   */
  ModelArn: string | undefined;

  /**
   * <p>If <code>True</code>, no inbound or outbound network calls can be made to or from the
   *             model container.</p>
   * @public
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>A set of recommended deployment configurations for the model.</p>
   * @public
   */
  DeploymentRecommendation?: DeploymentRecommendation;
}

/**
 * @public
 */
export interface DescribeModelBiasJobDefinitionRequest {
  /**
   * <p>The name of the model bias job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelBiasJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model bias job.</p>
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the bias job definition. The name must be unique within an Amazon Web Services
   *    Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model bias job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model bias job.</p>
   * @public
   */
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig;

  /**
   * <p>Configures the model bias job to run a specified Docker container image.</p>
   * @public
   */
  ModelBiasAppSpecification: ModelBiasAppSpecification | undefined;

  /**
   * <p>Inputs for the model bias job.</p>
   * @public
   */
  ModelBiasJobInput: ModelBiasJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   * @public
   */
  ModelBiasJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model bias job.</p>
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that has read permission to the
   *    input data location and write permission to the output data location in Amazon S3.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

/**
 * @public
 */
export interface DescribeModelCardRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the model card to describe.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card to describe. If a version is not provided, then the latest version of the model card is described.</p>
   * @public
   */
  ModelCardVersion?: number;
}

/**
 * @public
 * @enum
 */
export const ModelCardProcessingStatus = {
  CONTENT_DELETED: "ContentDeleted",
  DELETE_COMPLETED: "DeleteCompleted",
  DELETE_FAILED: "DeleteFailed",
  DELETE_INPROGRESS: "DeleteInProgress",
  DELETE_PENDING: "DeletePending",
  EXPORTJOBS_DELETED: "ExportJobsDeleted",
} as const;

/**
 * @public
 */
export type ModelCardProcessingStatus = (typeof ModelCardProcessingStatus)[keyof typeof ModelCardProcessingStatus];

/**
 * @public
 */
export interface DescribeModelCardResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   * @public
   */
  ModelCardArn: string | undefined;

  /**
   * <p>The name of the model card.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card.</p>
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The content of the model card.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Draft</code>: The model card is a work in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PendingReview</code>: The model card is pending review.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Approved</code>: The model card is approved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Archived</code>: The model card is archived. No more updates should be made to the model
   *                card, but it can still be exported.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ModelCardStatus: ModelCardStatus | undefined;

  /**
   * <p>The security configuration used to protect model card content.</p>
   * @public
   */
  SecurityConfig?: ModelCardSecurityConfig;

  /**
   * <p>The date and time the model card was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy: UserContext | undefined;

  /**
   * <p>The date and time the model card was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The processing status of model card deletion. The <code>ModelCardProcessingStatus</code> updates throughout the different deletion steps.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DeletePending</code>: Model card deletion request received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteInProgress</code>: Model card deletion is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ContentDeleted</code>: Deleted model card content.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ExportJobsDeleted</code>: Deleted all export jobs associated with the model card.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteCompleted</code>: Successfully deleted the model card.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteFailed</code>: The model card failed to delete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ModelCardProcessingStatus?: ModelCardProcessingStatus;
}

/**
 * @public
 */
export interface DescribeModelCardExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model card export job to describe.</p>
   * @public
   */
  ModelCardExportJobArn: string | undefined;
}

/**
 * <p>The artifacts of the model card export job.</p>
 * @public
 */
export interface ModelCardExportArtifacts {
  /**
   * <p>The Amazon S3 URI of the exported model artifacts.</p>
   * @public
   */
  S3ExportArtifacts: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelCardExportJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
} as const;

/**
 * @public
 */
export type ModelCardExportJobStatus = (typeof ModelCardExportJobStatus)[keyof typeof ModelCardExportJobStatus];

/**
 * @public
 */
export interface DescribeModelCardExportJobResponse {
  /**
   * <p>The name of the model card export job to describe.</p>
   * @public
   */
  ModelCardExportJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model card export job.</p>
   * @public
   */
  ModelCardExportJobArn: string | undefined;

  /**
   * <p>The completion status of the model card export job.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InProgress</code>: The model card export job is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code>: The model card export job is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: The model card export job failed. To see the reason for the failure, see
   *                the <code>FailureReason</code> field in the response to a
   *                   <code>DescribeModelCardExportJob</code> call.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status: ModelCardExportJobStatus | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the model card that the model export job exports.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card that the model export job exports.</p>
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The export output details for the model card.</p>
   * @public
   */
  OutputConfig: ModelCardExportOutputConfig | undefined;

  /**
   * <p>The date and time that the model export job was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time that the model export job was last modified.</p>
   * @public
   */
  LastModifiedAt: Date | undefined;

  /**
   * <p>The failure reason if the model export job fails.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The exported model card artifacts.</p>
   * @public
   */
  ExportArtifacts?: ModelCardExportArtifacts;
}

/**
 * @public
 */
export interface DescribeModelExplainabilityJobDefinitionRequest {
  /**
   * <p>The name of the model explainability job definition. The name must be unique within an
   *             Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelExplainabilityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model explainability job.</p>
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model explainability job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model explainability job.</p>
   * @public
   */
  ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;

  /**
   * <p>Configures the model explainability job to run a specified Docker container image.</p>
   * @public
   */
  ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification | undefined;

  /**
   * <p>Inputs for the model explainability job.</p>
   * @public
   */
  ModelExplainabilityJobInput: ModelExplainabilityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   * @public
   */
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model explainability job.</p>
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that has read permission to the
   *    input data location and write permission to the output data location in Amazon S3.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

/**
 * @public
 */
export interface DescribeModelPackageInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to describe.</p>
   *          <p>When you specify a name, the name must have 1 to 63 characters. Valid
   *             characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   * @public
   */
  ModelPackageName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DetailedModelPackageStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  NOT_STARTED: "NotStarted",
} as const;

/**
 * @public
 */
export type DetailedModelPackageStatus = (typeof DetailedModelPackageStatus)[keyof typeof DetailedModelPackageStatus];

/**
 * <p>Represents the overall status of a model package.</p>
 * @public
 */
export interface ModelPackageStatusItem {
  /**
   * <p>The name of the model package for which the overall status is being reported.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current status.</p>
   * @public
   */
  Status: DetailedModelPackageStatus | undefined;

  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   * @public
   */
  FailureReason?: string;
}

/**
 * <p>Specifies the validation and image scan statuses of the model package.</p>
 * @public
 */
export interface ModelPackageStatusDetails {
  /**
   * <p>The validation status of the model package.</p>
   * @public
   */
  ValidationStatuses: ModelPackageStatusItem[] | undefined;

  /**
   * <p>The status of the scan of the Docker image container for the model package.</p>
   * @public
   */
  ImageScanStatuses?: ModelPackageStatusItem[];
}

/**
 * @public
 */
export interface DescribeModelPackageOutput {
  /**
   * <p>The name of the model package being described.</p>
   * @public
   */
  ModelPackageName: string | undefined;

  /**
   * <p>If the model is a versioned model, the name of the model group that the versioned
   *             model belongs to.</p>
   * @public
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The version of the model package.</p>
   * @public
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   * @public
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief summary of the model package.</p>
   * @public
   */
  ModelPackageDescription?: string;

  /**
   * <p>A timestamp specifying when the model package was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about inference jobs that you can run with models based on this model
   *             package.</p>
   * @public
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   * @public
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Configurations for one or more transform jobs that SageMaker runs to test the model
   *             package.</p>
   * @public
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * <p>The current status of the model package.</p>
   * @public
   */
  ModelPackageStatus: ModelPackageStatus | undefined;

  /**
   * <p>Details about the current status of the model package.</p>
   * @public
   */
  ModelPackageStatusDetails: ModelPackageStatusDetails | undefined;

  /**
   * <p>Whether the model package is certified for listing on Amazon Web Services Marketplace.</p>
   * @public
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>The approval status of the model package.</p>
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>Metrics for the model.</p>
   * @public
   */
  ModelMetrics?: ModelMetrics;

  /**
   * <p>The last time that the model package was modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>A description provided for the model approval.</p>
   * @public
   */
  ApprovalDescription?: string;

  /**
   * <p>The machine learning domain of the model package you specified. Common machine
   *             learning domains include computer vision and natural language processing.</p>
   * @public
   */
  Domain?: string;

  /**
   * <p>The machine learning task you specified that your model package accomplishes.
   *             Common machine learning tasks include object detection and image classification.</p>
   * @public
   */
  Task?: string;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored. This path points to a single
   *             gzip compressed tar archive (.tar.gz suffix).</p>
   * @public
   */
  SamplePayloadUrl?: string;

  /**
   * <p>The metadata properties associated with the model package versions.</p>
   * @public
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package.
   *             For more information, see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-quality-clarify-baseline-lifecycle.html#pipelines-quality-clarify-baseline-drift-detection">Drift Detection against Previous Baselines in SageMaker Pipelines</a> in the <i>Amazon SageMaker Developer Guide</i>.
   *         </p>
   * @public
   */
  DriftCheckBaselines?: DriftCheckBaselines;

  /**
   * <p>An array of additional Inference Specification objects. Each additional
   *             Inference Specification specifies artifacts based on this model package that can
   *             be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.</p>
   * @public
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];

  /**
   * <p>Indicates if you want to skip model validation.</p>
   * @public
   */
  SkipModelValidation?: SkipModelValidation;

  /**
   * <p>The URI of the source for the model package.</p>
   * @public
   */
  SourceUri?: string;

  /**
   * <p>The KMS Key ID (<code>KMSKeyId</code>) used for encryption of model package information.</p>
   * @public
   */
  SecurityConfig?: ModelPackageSecurityConfig;

  /**
   * <p>The model card associated with the model package. Since <code>ModelPackageModelCard</code> is
   *             tied to a model package, it is a specific usage of a model card and its schema is
   *             simplified compared to the schema of <code>ModelCard</code>. The
   *             <code>ModelPackageModelCard</code> schema does not include <code>model_package_details</code>,
   *             and <code>model_overview</code> is composed of the <code>model_creator</code> and
   *             <code>model_artifact</code> properties. For more information about the model package model
   *             card schema, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html#model-card-schema">Model
   *                 package model card schema</a>. For more information about
   *             the model card associated with the model package, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html">View
   *                 the Details of a Model Version</a>.</p>
   * @public
   */
  ModelCard?: ModelPackageModelCard;
}

/**
 * @public
 */
export interface DescribeModelPackageGroupInput {
  /**
   * <p>The name of the model group to describe.</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelPackageGroupStatus = {
  COMPLETED: "Completed",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
} as const;

/**
 * @public
 */
export type ModelPackageGroupStatus = (typeof ModelPackageGroupStatus)[keyof typeof ModelPackageGroupStatus];

/**
 * @public
 */
export interface DescribeModelPackageGroupOutput {
  /**
   * <p>The name of the model group.</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   * @public
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * <p>A description of the model group.</p>
   * @public
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>The time that the model group was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy: UserContext | undefined;

  /**
   * <p>The status of the model group.</p>
   * @public
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | undefined;
}

/**
 * @public
 */
export interface DescribeModelQualityJobDefinitionRequest {
  /**
   * <p>The name of the model quality job. The name must be unique within an Amazon Web Services
   *          Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model quality job.</p>
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the quality job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.</p>
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model quality job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model quality job.</p>
   * @public
   */
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig;

  /**
   * <p>Configures the model quality job to run a specified Docker container image.</p>
   * @public
   */
  ModelQualityAppSpecification: ModelQualityAppSpecification | undefined;

  /**
   * <p>Inputs for the model quality job.</p>
   * @public
   */
  ModelQualityJobInput: ModelQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   * @public
   */
  ModelQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model quality job.</p>
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can
   *    assume to perform tasks on your behalf.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

/**
 * @public
 */
export interface DescribeMonitoringScheduleRequest {
  /**
   * <p>Name of a previously created monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  COMPLETED: "Completed",
  COMPLETED_WITH_VIOLATIONS: "CompletedWithViolations",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * <p>Summary of information about the last monitoring job to run.</p>
 * @public
 */
export interface MonitoringExecutionSummary {
  /**
   * <p>The name of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The time the monitoring job was scheduled.</p>
   * @public
   */
  ScheduledTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that indicates the last time the monitoring job was modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring job.</p>
   * @public
   */
  MonitoringExecutionStatus: ExecutionStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   * @public
   */
  ProcessingJobArn?: string;

  /**
   * <p>The name of the endpoint used to run the monitoring job.</p>
   * @public
   */
  EndpointName?: string;

  /**
   * <p>Contains the reason a monitoring job failed, if it failed.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The name of the monitoring job.</p>
   * @public
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>The type of the monitoring job.</p>
   * @public
   */
  MonitoringType?: MonitoringType;
}

/**
 * @internal
 */
export const OidcConfigFilterSensitiveLog = (obj: OidcConfig): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateWorkforceRequestFilterSensitiveLog = (obj: CreateWorkforceRequest): any => ({
  ...obj,
  ...(obj.OidcConfig && { OidcConfig: OidcConfigFilterSensitiveLog(obj.OidcConfig) }),
});

/**
 * @internal
 */
export const DescribeModelCardResponseFilterSensitiveLog = (obj: DescribeModelCardResponse): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeModelPackageOutputFilterSensitiveLog = (obj: DescribeModelPackageOutput): any => ({
  ...obj,
  ...(obj.ModelCard && { ModelCard: ModelPackageModelCardFilterSensitiveLog(obj.ModelCard) }),
});

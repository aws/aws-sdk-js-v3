// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type {
  AccountDefaultStatus,
  ActionStatus,
  ActivationState,
  AppInstanceType,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppType,
  AuthMode,
  AutoMountHomeEFS,
  AvailabilityZoneBalanceEnforcementMode,
  AwsManagedHumanLoopRequestSource,
  CapacityReservationPreference,
  ClusterConfigMode,
  ClusterImageVersionStatus,
  ClusterInstanceType,
  ClusterNodeProvisioningMode,
  ClusterNodeRecovery,
  ClusterStatus,
  CollectionType,
  CompilationJobStatus,
  CompleteOnConvergence,
  ConditionOutcome,
  ContainerMode,
  ContentClassifier,
  DeepHealthCheckType,
  DeviceSubsetType,
  EdgePresetDeploymentType,
  ExecutionRoleIdentityConfig,
  ExecutionRoleSessionNameMode,
  FailureHandlingPolicy,
  FairShare,
  FeatureStatus,
  FeatureType,
  FlatInvocations,
  Framework,
  HomeEfsFileSystemCreation,
  HubContentType,
  HyperParameterScalingType,
  HyperParameterTuningAllocationStrategy,
  HyperParameterTuningJobObjectiveType,
  HyperParameterTuningJobStrategyType,
  HyperParameterTuningJobWarmStartType,
  IdleResourceSharing,
  InferenceComponentPlacementStrategy,
  InferenceExecutionMode,
  InferenceExperimentType,
  IPAddressType,
  JobCategory,
  JobType,
  ManagedInstanceScalingScaleInStrategy,
  ManagedInstanceScalingStatus,
  ManagedStorageType,
  MetricPublishFrequencyInSeconds,
  MlTools,
  ModelApprovalStatus,
  ModelCacheSetting,
  ModelCardStatus,
  ModelInfrastructureType,
  ModelPackageRegistrationType,
  ModelRegistrationMode,
  MonitoringProblemType,
  NotebookOutputOption,
  ParameterType,
  PreemptTeamTasks,
  ProblemType,
  ProcessingInstanceType,
  ProcessingS3DataDistributionType,
  ProcessingS3InputMode,
  ProcessingS3UploadMode,
  Processor,
  ProductionVariantAcceleratorType,
  ProductionVariantInferenceAmiVersion,
  ProductionVariantInstanceType,
  RecommendationJobSupportedEndpointType,
  RecommendationJobType,
  RepositoryAccessMode,
  ResourceSharingStrategy,
  RoutingStrategy,
  RStudioServerProAccessStatus,
  RStudioServerProUserGroup,
  SageMakerImageName,
  SchedulerResourceStatus,
  SkipModelValidation,
  StorageType,
  StudioWebPortal,
  TableFormat,
  TagPropagation,
  TargetDevice,
  TargetPlatformAccelerator,
  TargetPlatformArch,
  TargetPlatformOs,
  ThroughputMode,
  TrackingServerSize,
  TrafficType,
  TrainingInputMode,
  TrainingInstanceType,
  TrainingJobEarlyStoppingType,
  TtlDurationUnit,
  VendorGuidance,
} from "./enums";
import type {
  AcceleratorPartitionLayout,
  ActionSource,
  AdditionalInferenceSpecificationDefinition,
  AdditionalModelDataSource,
  AdditionalS3DataSource,
  AIAdapterSource,
  AIBenchmarkNetworkConfig,
  AIBenchmarkOutputConfig,
  AIBenchmarkTarget,
  AIDatasetConfig,
  AIModelSource,
  AIRecommendationComputeSpec,
  AIRecommendationInferenceSpecification,
  AIRecommendationOutputConfig,
  AIRecommendationPerformanceTarget,
  AIWorkloadConfigs,
  AlgorithmValidationSpecification,
  AmazonQSettings,
  AnnotationConsolidationConfig,
  AppLifecycleManagement,
  ArtifactSource,
  AsyncInferenceConfig,
  AuthorizedUrl,
  AutoMLChannel,
  AutoMLComputeConfig,
  AutoMLDataSplitConfig,
  AutoMLJobChannel,
  AutoMLJobConfig,
  AutoMLJobObjective,
  AutoMLOutputDataConfig,
  AutoMLProblemTypeConfig,
  AutoMLSecurityConfig,
  AutoParameter,
  AutoRollbackConfig,
  Autotune,
  BatchTransformInput,
  BestObjectiveNotImproving,
  Bias,
  BlueGreenUpdatePolicy,
  CanvasAppSettings,
  CapacitySize,
  CaptureContentTypeHeader,
  CaptureOption,
  CategoricalParameter,
  CategoricalParameterRange,
  CategoricalParameterRangeSpecification,
  Channel,
  ChannelSpecification,
  CheckpointConfig,
  ClarifyExplainerConfig,
  ClusterAutoScalingConfig,
  ClusterInstanceGroupSpecification,
  ClusterInstanceStorageConfig,
  ClusterOrchestrator,
  ClusterRestrictedInstanceGroupsConfig,
  ClusterSharedEnvironmentConfigDetails,
  CodeEditorAppImageConfig,
  ComputeQuotaResourceConfig,
  FSxLustreConfig,
  InferenceSpecification,
  JupyterLabAppImageConfig,
  KernelGatewayImageConfig,
  MetricDefinition,
  MetricsSource,
  ModelDataSource,
  OutputDataConfig,
  ResourceConfig,
  ResourceSpec,
  ScheduledUpdateConfig,
  StoppingCondition,
  Tag,
  TransformJobDefinition,
  VpcConfig,
} from "./models_0";

/**
 * The output configuration for the restricted instance groups (RIG) in the SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterRestrictedInstanceGroupsConfigOutput {
  /**
   * The shared environment configuration details for the restricted instance groups (RIG).
   *
   * @public
   */
  SharedEnvironmentConfig: ClusterSharedEnvironmentConfigDetails | undefined;
}

/**
 * The configuration for the restricted instance groups (RIG) environment.
 *
 * @public
 */
export interface EnvironmentConfig {
  /**
   * Configuration settings for an Amazon FSx for Lustre file system to be used with the cluster.
   *
   * @public
   */
  FSxLustreConfig?: FSxLustreConfig | undefined;
}

/**
 * The specifications of a restricted instance group that you need to define.
 *
 * @public
 */
export interface ClusterRestrictedInstanceGroupSpecification {
  /**
   * Specifies the number of instances to add to the restricted instance group of a SageMaker HyperPod cluster.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * Specifies the name of the restricted instance group.
   *
   * @public
   */
  InstanceGroupName: string | undefined;

  /**
   * Specifies the instance type of the restricted instance group.
   *
   * @public
   */
  InstanceType: ClusterInstanceType | undefined;

  /**
   * Specifies an IAM execution role to be assumed by the restricted instance group.
   *
   * @public
   */
  ExecutionRole: string | undefined;

  /**
   * The number you specified to `TreadsPerCore` in `CreateCluster` for enabling or disabling multithreading. For instance types that support multithreading, you can specify 1 for disabling multithreading and 2 for enabling multithreading. For more information, see the reference table of [CPU cores and threads per CPU core per instance type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cpu-options-supported-instances-values.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  ThreadsPerCore?: number | undefined;

  /**
   * Specifies the additional storage configurations for the instances in the SageMaker HyperPod cluster restricted instance group.
   *
   * @public
   */
  InstanceStorageConfigs?: ClusterInstanceStorageConfig[] | undefined;

  /**
   * A flag indicating whether deep health checks should be performed when the cluster restricted instance group is created or updated.
   *
   * @public
   */
  OnStartDeepHealthChecks?: DeepHealthCheckType[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training plan to filter clusters by. For more information about reserving GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
   *
   * @public
   */
  TrainingPlanArn?: string | undefined;

  /**
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
   *
   * @public
   */
  OverrideVpcConfig?: VpcConfig | undefined;

  /**
   * The configuration object of the schedule that SageMaker follows when updating the AMI.
   *
   * @public
   */
  ScheduledUpdateConfig?: ScheduledUpdateConfig | undefined;

  /**
   * The configuration for the restricted instance groups (RIG) environment.
   *
   * @public
   */
  EnvironmentConfig?: EnvironmentConfig | undefined;
}

/**
 * Summary of the cluster policy.
 *
 * @public
 */
export interface ClusterSchedulerConfigSummary {
  /**
   * ARN of the cluster policy.
   *
   * @public
   */
  ClusterSchedulerConfigArn: string | undefined;

  /**
   * ID of the cluster policy.
   *
   * @public
   */
  ClusterSchedulerConfigId: string | undefined;

  /**
   * Version of the cluster policy.
   *
   * @public
   */
  ClusterSchedulerConfigVersion?: number | undefined;

  /**
   * Name of the cluster policy.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Creation time of the cluster policy.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Last modified time of the cluster policy.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Status of the cluster policy.
   *
   * @public
   */
  Status: SchedulerResourceStatus | undefined;

  /**
   * ARN of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;
}

/**
 * Lists a summary of the properties of a SageMaker HyperPod cluster.
 *
 * @public
 */
export interface ClusterSummary {
  /**
   * The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The name of the SageMaker HyperPod cluster.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The time when the SageMaker HyperPod cluster is created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The status of the SageMaker HyperPod cluster.
   *
   * @public
   */
  ClusterStatus: ClusterStatus | undefined;

  /**
   * A list of Amazon Resource Names (ARNs) of the training plans associated with this cluster.
   *
   * For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
   *
   * @public
   */
  TrainingPlanArns?: string[] | undefined;

  /**
   * The aggregate status of the image version across the cluster's instance groups.
   *
   * @public
   */
  ImageVersionStatus?: ClusterImageVersionStatus | undefined;
}

/**
 * Defines the configuration for managed tier checkpointing in a HyperPod cluster. Managed tier checkpointing uses multiple storage tiers, including cluster CPU memory, to provide faster checkpoint operations and improved fault tolerance for large-scale model training. The system automatically saves checkpoints at high frequency to memory and periodically persists them to durable storage, like Amazon S3.
 *
 * @public
 */
export interface ClusterTieredStorageConfig {
  /**
   * Specifies whether managed tier checkpointing is enabled or disabled for the HyperPod cluster. When set to `Enable`, the system installs a memory management daemon that provides disaggregated memory as a service for checkpoint storage. When set to `Disable`, the feature is turned off and the memory management daemon is removed from the cluster.
   *
   * @public
   */
  Mode: ClusterConfigMode | undefined;

  /**
   * The percentage (int) of cluster memory to allocate for checkpointing.
   *
   * @public
   */
  InstanceMemoryAllocationPercentage?: number | undefined;
}

/**
 * A custom SageMaker AI image. For more information, see [Bring your own SageMaker AI image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html).
 *
 * @public
 */
export interface CustomImage {
  /**
   * The name of the CustomImage. Must be unique to your account.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * The version number of the CustomImage.
   *
   * @public
   */
  ImageVersionNumber?: number | undefined;

  /**
   * The name of the AppImageConfig.
   *
   * @public
   */
  AppImageConfigName: string | undefined;
}

/**
 * The Code Editor application settings.
 *
 * For more information about Code Editor, see [Get started with Code Editor in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/code-editor.html).
 *
 * @public
 */
export interface CodeEditorAppSettings {
  /**
   * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
   *
   * > **Note:** When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn`, pass `None` as the value.
   *
   * @public
   */
  DefaultResourceSpec?: ResourceSpec | undefined;

  /**
   * A list of custom SageMaker images that are configured to run as a Code Editor app.
   *
   * @public
   */
  CustomImages?: CustomImage[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Code Editor application lifecycle configuration.
   *
   * @public
   */
  LifecycleConfigArns?: string[] | undefined;

  /**
   * Settings that are used to configure and manage the lifecycle of CodeEditor applications.
   *
   * @public
   */
  AppLifecycleManagement?: AppLifecycleManagement | undefined;

  /**
   * The lifecycle configuration that runs before the default lifecycle configuration. It can override changes made in the default lifecycle configuration.
   *
   * @public
   */
  BuiltInLifecycleConfigArn?: string | undefined;
}

/**
 * A Git repository that SageMaker AI automatically displays to users for cloning in the JupyterServer application.
 *
 * @public
 */
export interface CodeRepository {
  /**
   * The URL of the Git repository.
   *
   * @public
   */
  RepositoryUrl: string | undefined;
}

/**
 * Specifies configuration details for a Git repository in your Amazon Web Services account.
 *
 * @public
 */
export interface GitConfig {
  /**
   * The URL where the Git repository is located.
   *
   * @public
   */
  RepositoryUrl: string | undefined;

  /**
   * The default branch for the Git repository.
   *
   * @public
   */
  Branch?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the git repository. The secret must have a staging label of `AWSCURRENT` and must be in the following format:
   *
   * `\{"username": UserName, "password": Password\}`
   *
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * Specifies summary information about a Git repository.
 *
 * @public
 */
export interface CodeRepositorySummary {
  /**
   * The name of the Git repository.
   *
   * @public
   */
  CodeRepositoryName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Git repository.
   *
   * @public
   */
  CodeRepositoryArn: string | undefined;

  /**
   * The date and time that the Git repository was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the Git repository was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * Configuration details for the Git repository, including the URL where it is located and the ARN of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the repository.
   *
   * @public
   */
  GitConfig?: GitConfig | undefined;
}

/**
 * Use this parameter to configure your Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single [Amazon Cognito user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html).
 *
 * @public
 */
export interface CognitoConfig {
  /**
   * A [user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html) is a user directory in Amazon Cognito. With a user pool, your users can sign in to your web or mobile app through Amazon Cognito. Your users can also sign in through social identity providers like Google, Facebook, Amazon, or Apple, and through SAML identity providers.
   *
   * @public
   */
  UserPool: string | undefined;

  /**
   * The client ID for your Amazon Cognito user pool.
   *
   * @public
   */
  ClientId: string | undefined;
}

/**
 * Identifies a Amazon Cognito user group. A user group can be used in on or more work teams.
 *
 * @public
 */
export interface CognitoMemberDefinition {
  /**
   * An identifier for a user pool. The user pool must be in the same region as the service that you are calling.
   *
   * @public
   */
  UserPool: string | undefined;

  /**
   * An identifier for a user group.
   *
   * @public
   */
  UserGroup: string | undefined;

  /**
   * An identifier for an application client. You must create the app client ID using Amazon Cognito.
   *
   * @public
   */
  ClientId: string | undefined;
}

/**
 * Configuration for your vector collection type.
 *
 * @public
 */
export interface VectorConfig {
  /**
   * The number of elements in your vector.
   *
   * @public
   */
  Dimension: number | undefined;
}

/**
 * Configuration for your collection.
 *
 * @public
 */
export type CollectionConfig =
  | CollectionConfig.VectorConfigMember
  | CollectionConfig.$UnknownMember;

/**
 * @public
 */
export namespace CollectionConfig {
  /**
   * Configuration for your vector collection type.
   *
   * - `Dimension`: The number of elements in your vector.
   *
   * @public
   */
  export interface VectorConfigMember {
    VectorConfig: VectorConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    VectorConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    VectorConfig: (value: VectorConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration information for the Amazon SageMaker Debugger output tensor collections.
 *
 * @public
 */
export interface CollectionConfiguration {
  /**
   * The name of the tensor collection. The name must be unique relative to other rule configuration names.
   *
   * @public
   */
  CollectionName?: string | undefined;

  /**
   * Parameter values for the tensor collection. The allowed parameters are `"name"`, `"include_regex"`, `"reduction_config"`, `"save_config"`, `"tensor_names"`, and `"save_histogram"`.
   *
   * @public
   */
  CollectionParameters?: Record<string, string> | undefined;
}

/**
 * A summary of a model compilation job.
 *
 * @public
 */
export interface CompilationJobSummary {
  /**
   * The name of the model compilation job that you want a summary for.
   *
   * @public
   */
  CompilationJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model compilation job.
   *
   * @public
   */
  CompilationJobArn: string | undefined;

  /**
   * The time when the model compilation job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The time when the model compilation job started.
   *
   * @public
   */
  CompilationStartTime?: Date | undefined;

  /**
   * The time when the model compilation job completed.
   *
   * @public
   */
  CompilationEndTime?: Date | undefined;

  /**
   * The type of device that the model will run on after the compilation job has completed.
   *
   * @public
   */
  CompilationTargetDevice?: TargetDevice | undefined;

  /**
   * The type of OS that the model will run on after the compilation job has completed.
   *
   * @public
   */
  CompilationTargetPlatformOs?: TargetPlatformOs | undefined;

  /**
   * The type of architecture that the model will run on after the compilation job has completed.
   *
   * @public
   */
  CompilationTargetPlatformArch?: TargetPlatformArch | undefined;

  /**
   * The type of accelerator that the model will run on after the compilation job has completed.
   *
   * @public
   */
  CompilationTargetPlatformAccelerator?: TargetPlatformAccelerator | undefined;

  /**
   * The time when the model compilation job was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The status of the model compilation job.
   *
   * @public
   */
  CompilationJobStatus: CompilationJobStatus | undefined;
}

/**
 * Resource sharing configuration.
 *
 * @public
 */
export interface ResourceSharingConfig {
  /**
   * The strategy of how idle compute is shared within the cluster. The following are the options of strategies.
   *
   * - `DontLend`: entities do not lend idle compute.
   * - `Lend`: entities can lend idle compute to entities that can borrow.
   * - `LendandBorrow`: entities can lend idle compute and borrow idle compute from other entities.
   *
   * Default is `LendandBorrow`.
   *
   * @public
   */
  Strategy: ResourceSharingStrategy | undefined;

  /**
   * The limit on how much idle compute can be borrowed.The values can be 1 - 500 percent of idle compute that the team is allowed to borrow.
   *
   * Default is `50`.
   *
   * @public
   */
  BorrowLimit?: number | undefined;

  /**
   * The absolute limits on compute resources that can be borrowed from idle compute. When specified, these limits define the maximum amount of specific resource types (such as accelerators, vCPU, or memory) that an entity can borrow, regardless of the percentage-based `BorrowLimit`.
   *
   * @public
   */
  AbsoluteBorrowLimits?: ComputeQuotaResourceConfig[] | undefined;
}

/**
 * Configuration of the compute allocation definition for an entity. This includes the resource sharing option and the setting to preempt low priority tasks.
 *
 * @public
 */
export interface ComputeQuotaConfig {
  /**
   * Allocate compute resources by instance types.
   *
   * @public
   */
  ComputeQuotaResources?: ComputeQuotaResourceConfig[] | undefined;

  /**
   * Resource sharing configuration. This defines how an entity can lend and borrow idle compute with other entities within the cluster.
   *
   * @public
   */
  ResourceSharingConfig?: ResourceSharingConfig | undefined;

  /**
   * Allows workloads from within an entity to preempt same-team workloads. When set to `LowerPriority`, the entity's lower priority tasks are preempted by their own higher priority tasks.
   *
   * Default is `LowerPriority`.
   *
   * @public
   */
  PreemptTeamTasks?: PreemptTeamTasks | undefined;
}

/**
 * The target entity to allocate compute resources to.
 *
 * @public
 */
export interface ComputeQuotaTarget {
  /**
   * Name of the team to allocate compute resources to.
   *
   * @public
   */
  TeamName: string | undefined;

  /**
   * Assigned entity fair-share weight. Idle compute will be shared across entities based on these assigned weights. This weight is only used when `FairShare` is enabled.
   *
   * A weight of 0 is the lowest priority and 100 is the highest. Weight 0 is the default.
   *
   * @public
   */
  FairShareWeight?: number | undefined;
}

/**
 * Summary of the compute allocation definition.
 *
 * @public
 */
export interface ComputeQuotaSummary {
  /**
   * ARN of the compute allocation definition.
   *
   * @public
   */
  ComputeQuotaArn: string | undefined;

  /**
   * ID of the compute allocation definition.
   *
   * @public
   */
  ComputeQuotaId: string | undefined;

  /**
   * Name of the compute allocation definition.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Version of the compute allocation definition.
   *
   * @public
   */
  ComputeQuotaVersion?: number | undefined;

  /**
   * Status of the compute allocation definition.
   *
   * @public
   */
  Status: SchedulerResourceStatus | undefined;

  /**
   * ARN of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * Configuration of the compute allocation definition. This includes the resource sharing option, and the setting to preempt low priority tasks.
   *
   * @public
   */
  ComputeQuotaConfig?: ComputeQuotaConfig | undefined;

  /**
   * The target entity to allocate compute resources to.
   *
   * @public
   */
  ComputeQuotaTarget: ComputeQuotaTarget | undefined;

  /**
   * The state of the compute allocation being described. Use to enable or disable compute allocation.
   *
   * Default is `Enabled`.
   *
   * @public
   */
  ActivationState?: ActivationState | undefined;

  /**
   * Creation time of the compute allocation definition.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Last modified time of the compute allocation definition.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * Metadata for a Condition step.
 *
 * @public
 */
export interface ConditionStepMetadata {
  /**
   * The outcome of the Condition step evaluation.
   *
   * @public
   */
  Outcome?: ConditionOutcome | undefined;
}

/**
 * Specifies a metrics endpoint for a container, including the path where the container exposes Prometheus-formatted metrics and the frequency at which to publish them to Amazon CloudWatch.
 *
 * @public
 */
export interface MetricsEndpoint {
  /**
   * The path to the metrics endpoint exposed by the container. For example, `/metrics` or `/server/metrics`. The path must start with `/` and can contain alphanumeric characters, forward slashes, underscores, hyphens, and periods. Maximum length is 256 characters. If not specified, defaults to `/metrics`.
   *
   * @public
   */
  MetricsEndpointPath: string | undefined;

  /**
   * The interval, in seconds, at which container metrics scraped from the endpoint are published to Amazon CloudWatch. Valid values: `10`, `30`, `60`, `120`, `180`, `240`, `300`. Defaults to `60`.
   *
   * @public
   */
  MetricPublishFrequencyInSeconds?: MetricPublishFrequencyInSeconds | undefined;
}

/**
 * The configuration for container-level metrics scraping. Use this configuration to specify a custom metrics endpoint path and publishing frequency for container metrics. When `EnableDetailedObservability` is set to `True` in `MetricsConfig`, metrics are scraped from the container's Prometheus endpoint. If this configuration is not provided, the default path `/metrics` on port `8080` is used with a default publishing frequency of `60` seconds. For first-party and Deep Learning Containers (DLC), the endpoint path is determined automatically and this configuration is optional.
 *
 * @public
 */
export interface ContainerMetricsConfig {
  /**
   * A list of metrics endpoints to scrape from the container. Each endpoint specifies the path where the container exposes Prometheus-formatted metrics and the frequency at which to publish them. You can specify a maximum of 1 endpoint.
   *
   * @public
   */
  MetricsEndpoints?: MetricsEndpoint[] | undefined;
}

/**
 * Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field of the `ImageConfig` object that you passed to a call to `CreateModel` and the private Docker registry where the model image is hosted requires authentication.
 *
 * @public
 */
export interface RepositoryAuthConfig {
  /**
   * The Amazon Resource Name (ARN) of an Amazon Web Services Lambda function that provides credentials to authenticate to the private Docker registry where your model image is hosted. For information about how to create an Amazon Web Services Lambda function, see [Create a Lambda function with the console](https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html) in the *Amazon Web Services Lambda Developer Guide*.
   *
   * @public
   */
  RepositoryCredentialsProviderArn: string | undefined;
}

/**
 * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
 *
 * @public
 */
export interface ImageConfig {
  /**
   * Set this to one of the following values:
   *
   * - `Platform` - The model image is hosted in Amazon ECR.
   * - `Vpc` - The model image is hosted in a private Docker registry in your VPC.
   *
   * @public
   */
  RepositoryAccessMode: RepositoryAccessMode | undefined;

  /**
   * (Optional) Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified `Vpc` as the value for the `RepositoryAccessMode` field, and the private Docker registry where the model image is hosted requires authentication.
   *
   * @public
   */
  RepositoryAuthConfig?: RepositoryAuthConfig | undefined;
}

/**
 * Specifies additional configuration for hosting multi-model endpoints.
 *
 * @public
 */
export interface MultiModelConfig {
  /**
   * Whether to cache models for a multi-model endpoint. By default, multi-model endpoints cache models so that a model does not have to be loaded into memory each time it is invoked. Some use cases do not benefit from model caching. For example, if an endpoint hosts a large number of models that are each invoked infrequently, the endpoint might perform better if you disable model caching. To disable model caching, set the value of this parameter to `Disabled`.
   *
   * @public
   */
  ModelCacheSetting?: ModelCacheSetting | undefined;
}

/**
 * Describes the container, as part of model definition.
 *
 * @public
 */
export interface ContainerDefinition {
  /**
   * This parameter is ignored for models that contain only a `PrimaryContainer`.
   *
   * When a `ContainerDefinition` is part of an inference pipeline, the value of the parameter uniquely identifies the container for the purposes of logging and metrics. For information, see [Use Logs and Metrics to Monitor an Inference Pipeline](https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html). If you don't specify a value for this parameter for a `ContainerDefinition` that is part of an inference pipeline, a unique name is automatically assigned based on the position of the `ContainerDefinition` in the pipeline. If you specify a value for the `ContainerHostName` for any `ContainerDefinition` that is part of an inference pipeline, you must specify a value for the `ContainerHostName` parameter of every `ContainerDefinition` in that pipeline.
   *
   * @public
   */
  ContainerHostname?: string | undefined;

  /**
   * The path where inference code is stored. This can be either in Amazon EC2 Container Registry or in a Docker registry that is accessible from the same VPC that you configure for your endpoint. If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both `registry/repository[:tag]` and `registry/repository[@digest]` image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
   *
   * > **Note:** The model artifacts in an Amazon S3 bucket and the Docker image for inference container in Amazon EC2 Container Registry must be in the same region as the model or endpoint you are creating.
   *
   * @public
   */
  Image?: string | undefined;

  /**
   * Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). For information about storing containers in a private Docker registry, see [Use a Private Docker Registry for Real-Time Inference Containers](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-containers-inference-private.html).
   *
   * > **Note:** The model artifacts in an Amazon S3 bucket and the Docker image for inference container in Amazon EC2 Container Registry must be in the same region as the model or endpoint you are creating.
   *
   * @public
   */
  ImageConfig?: ImageConfig | undefined;

  /**
   * Whether the container hosts a single model or multiple models.
   *
   * @public
   */
  Mode?: ContainerMode | undefined;

  /**
   * The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3 path is required for SageMaker built-in algorithms, but not if you use your own algorithms. For more information on built-in algorithms, see [Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html).
   *
   * > **Note:** The model artifacts must be in an S3 bucket that is in the same region as the model or endpoint you are creating.
   *
   * If you provide a value for this parameter, SageMaker uses Amazon Web Services Security Token Service to download model artifacts from the S3 path you provide. Amazon Web Services STS is activated in your Amazon Web Services account by default. If you previously deactivated Amazon Web Services STS for a region, you need to reactivate Amazon Web Services STS for that region. For more information, see [Activating and Deactivating Amazon Web Services STS in an Amazon Web Services Region](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html) in the *Amazon Web Services Identity and Access Management User Guide*.
   *
   * > **Important:** If you use a built-in algorithm to create a model, SageMaker requires that you provide a S3 path to the model artifacts in `ModelDataUrl`.
   *
   * @public
   */
  ModelDataUrl?: string | undefined;

  /**
   * Specifies the location of ML model data to deploy.
   *
   * > **Note:** Currently you cannot use `ModelDataSource` in conjunction with SageMaker batch transform, SageMaker serverless endpoints, SageMaker multi-model endpoints, and SageMaker Marketplace.
   *
   * @public
   */
  ModelDataSource?: ModelDataSource | undefined;

  /**
   * Data sources that are available to your model in addition to the one that you specify for `ModelDataSource` when you use the `CreateModel` action.
   *
   * @public
   */
  AdditionalModelDataSources?: AdditionalModelDataSource[] | undefined;

  /**
   * The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables.
   *
   * The maximum length of each key and value in the `Environment` map is 1024 bytes. The maximum length of all keys and values in the map, combined, is 32 KB. If you pass multiple containers to a `CreateModel` request, then the maximum length of all of their maps, combined, is also 32 KB.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the model package to use to create the model.
   *
   * @public
   */
  ModelPackageName?: string | undefined;

  /**
   * The inference specification name in the model package version.
   *
   * @public
   */
  InferenceSpecificationName?: string | undefined;

  /**
   * Specifies additional configuration for multi-model endpoints.
   *
   * @public
   */
  MultiModelConfig?: MultiModelConfig | undefined;

  /**
   * The configuration for container metrics scraping. Specifies the metrics endpoint path and publishing frequency. If not specified when `EnableDetailedObservability` is `True`, the default path `/metrics` on port `8080` is used. For first-party and Deep Learning Containers (DLC), the endpoint path is determined automatically and this configuration is optional.
   *
   * @public
   */
  ContainerMetricsConfig?: ContainerMetricsConfig | undefined;
}

/**
 * A structure describing the source of a context.
 *
 * @public
 */
export interface ContextSource {
  /**
   * The URI of the source.
   *
   * @public
   */
  SourceUri: string | undefined;

  /**
   * The type of the source.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * The ID of the source.
   *
   * @public
   */
  SourceId?: string | undefined;
}

/**
 * Lists a summary of the properties of a context. A context provides a logical grouping of other entities.
 *
 * @public
 */
export interface ContextSummary {
  /**
   * The Amazon Resource Name (ARN) of the context.
   *
   * @public
   */
  ContextArn?: string | undefined;

  /**
   * The name of the context.
   *
   * @public
   */
  ContextName?: string | undefined;

  /**
   * The source of the context.
   *
   * @public
   */
  Source?: ContextSource | undefined;

  /**
   * The type of the context.
   *
   * @public
   */
  ContextType?: string | undefined;

  /**
   * When the context was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the context was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * A list of continuous hyperparameters to tune.
 *
 * @public
 */
export interface ContinuousParameterRange {
  /**
   * The name of the continuous hyperparameter to tune.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The minimum value for the hyperparameter. The tuning job uses floating-point values between this value and `MaxValue`for tuning.
   *
   * @public
   */
  MinValue: string | undefined;

  /**
   * The maximum value for the hyperparameter. The tuning job uses floating-point values between `MinValue` value and this value for tuning.
   *
   * @public
   */
  MaxValue: string | undefined;

  /**
   * The scale that hyperparameter tuning uses to search the hyperparameter range. For information about choosing a hyperparameter scale, see [Hyperparameter Scaling](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type). One of the following values:
   *
   * - **Auto**
   *
   *   SageMaker hyperparameter tuning chooses the best scale for the hyperparameter.
   *
   * - **Linear**
   *
   *   Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.
   *
   * - **Logarithmic**
   *
   *   Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale.
   *
   *   Logarithmic scaling works only for ranges that have only values greater than 0.
   *
   * - **ReverseLogarithmic**
   *
   *   Hyperparameter tuning searches the values in the hyperparameter range by using a reverse logarithmic scale.
   *
   *   Reverse logarithmic scaling works only for ranges that are entirely within the range 0&lt;=x&lt;1.0.
   *
   * @public
   */
  ScalingType?: HyperParameterScalingType | undefined;
}

/**
 * Defines the possible values for a continuous hyperparameter.
 *
 * @public
 */
export interface ContinuousParameterRangeSpecification {
  /**
   * The minimum floating-point value allowed.
   *
   * @public
   */
  MinValue: string | undefined;

  /**
   * The maximum floating-point value allowed.
   *
   * @public
   */
  MaxValue: string | undefined;
}

/**
 * A flag to indicating that automatic model tuning (AMT) has detected model convergence, defined as a lack of significant improvement (1% or less) against an objective metric.
 *
 * @public
 */
export interface ConvergenceDetected {
  /**
   * A flag to stop a tuning job once AMT has detected that the job has converged.
   *
   * @public
   */
  CompleteOnConvergence?: CompleteOnConvergence | undefined;
}

/**
 * Metadata properties of the tracking entity, trial, or trial component.
 *
 * @public
 */
export interface MetadataProperties {
  /**
   * The commit ID.
   *
   * @public
   */
  CommitId?: string | undefined;

  /**
   * The repository.
   *
   * @public
   */
  Repository?: string | undefined;

  /**
   * The entity this entity was generated by.
   *
   * @public
   */
  GeneratedBy?: string | undefined;

  /**
   * The project ID.
   *
   * @public
   */
  ProjectId?: string | undefined;
}

/**
 * @public
 */
export interface CreateActionRequest {
  /**
   * The name of the action. Must be unique to your account in an Amazon Web Services Region.
   *
   * @public
   */
  ActionName: string | undefined;

  /**
   * The source type, ID, and URI.
   *
   * @public
   */
  Source: ActionSource | undefined;

  /**
   * The action type.
   *
   * @public
   */
  ActionType: string | undefined;

  /**
   * The description of the action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the action.
   *
   * @public
   */
  Status?: ActionStatus | undefined;

  /**
   * A list of properties to add to the action.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   *
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * A list of tags to apply to the action.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateActionResponse {
  /**
   * The Amazon Resource Name (ARN) of the action.
   *
   * @public
   */
  ActionArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAIBenchmarkJobRequest {
  /**
   * The name of the AI benchmark job. The name must be unique within your Amazon Web Services account in the current Amazon Web Services Region.
   *
   * @public
   */
  AIBenchmarkJobName: string | undefined;

  /**
   * The target endpoint to benchmark. Specify a SageMaker endpoint by providing its name or Amazon Resource Name (ARN).
   *
   * @public
   */
  BenchmarkTarget: AIBenchmarkTarget | undefined;

  /**
   * The output configuration for the benchmark job, including the Amazon S3 location where benchmark results are stored.
   *
   * @public
   */
  OutputConfig: AIBenchmarkOutputConfig | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the AI workload configuration to use for this benchmark job.
   *
   * @public
   */
  AIWorkloadConfigIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker AI to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The network configuration for the benchmark job, including VPC settings.
   *
   * @public
   */
  NetworkConfig?: AIBenchmarkNetworkConfig | undefined;

  /**
   * The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAIBenchmarkJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the created benchmark job.
   *
   * @public
   */
  AIBenchmarkJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAIRecommendationJobRequest {
  /**
   * The name of the AI recommendation job. The name must be unique within your Amazon Web Services account in the current Amazon Web Services Region.
   *
   * @public
   */
  AIRecommendationJobName: string | undefined;

  /**
   * The source of the model to optimize. Specify the Amazon S3 location of the model artifacts.
   *
   * @public
   */
  ModelSource: AIModelSource | undefined;

  /**
   * The output configuration for the recommendation job, including the Amazon S3 location for results and an optional model package group where the optimized model is registered.
   *
   * @public
   */
  OutputConfig: AIRecommendationOutputConfig | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the AI workload configuration to use for this recommendation job.
   *
   * @public
   */
  AIWorkloadConfigIdentifier: string | undefined;

  /**
   * The performance targets for the recommendation job. Specify constraints on metrics such as time to first token (`ttft-ms`), `throughput`, or `cost`.
   *
   * @public
   */
  PerformanceTarget: AIRecommendationPerformanceTarget | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker AI to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The inference framework configuration. Specify the framework (such as LMI or vLLM) for the recommendation job.
   *
   * @public
   */
  InferenceSpecification?: AIRecommendationInferenceSpecification | undefined;

  /**
   * Whether to allow model optimization techniques such as quantization, speculative decoding, and kernel tuning. The default is `true`.
   *
   * @public
   */
  OptimizeModel?: boolean | undefined;

  /**
   * The compute resource specification for the recommendation job. You can specify up to 3 instance types to consider, and optionally provide capacity reservation configuration.
   *
   * @public
   */
  ComputeSpec?: AIRecommendationComputeSpec | undefined;

  /**
   * The LoRA adapter source for the recommendation job. Specify either a list of model package ARNs or Amazon S3 URIs for your LoRA adapters. When this parameter is absent, the recommendation job runs without LoRA adapter support.
   *
   * @public
   */
  AdapterSource?: AIAdapterSource | undefined;

  /**
   * The metadata that you apply to Amazon Web Services resources to help you categorize and organize them.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAIRecommendationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the created recommendation job.
   *
   * @public
   */
  AIRecommendationJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAIWorkloadConfigRequest {
  /**
   * The name of the AI workload configuration. The name must be unique within your Amazon Web Services account in the current Amazon Web Services Region.
   *
   * @public
   */
  AIWorkloadConfigName: string | undefined;

  /**
   * The dataset configuration for the workload. Specify input data channels with their data sources for benchmark workloads.
   *
   * @public
   */
  DatasetConfig?: AIDatasetConfig | undefined;

  /**
   * The benchmark tool configuration and workload specification. Provide the specification as an inline YAML or JSON string.
   *
   * @public
   */
  AIWorkloadConfigs?: AIWorkloadConfigs | undefined;

  /**
   * The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the Amazon Web Services General Reference.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAIWorkloadConfigResponse {
  /**
   * The Amazon Resource Name (ARN) of the created AI workload configuration.
   *
   * @public
   */
  AIWorkloadConfigArn: string | undefined;
}

/**
 * Defines the possible values for an integer hyperparameter.
 *
 * @public
 */
export interface IntegerParameterRangeSpecification {
  /**
   * The minimum integer value allowed.
   *
   * @public
   */
  MinValue: string | undefined;

  /**
   * The maximum integer value allowed.
   *
   * @public
   */
  MaxValue: string | undefined;
}

/**
 * Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm.
 *
 * @public
 */
export interface ParameterRange {
  /**
   * A `IntegerParameterRangeSpecification` object that defines the possible values for an integer hyperparameter.
   *
   * @public
   */
  IntegerParameterRangeSpecification?: IntegerParameterRangeSpecification | undefined;

  /**
   * A `ContinuousParameterRangeSpecification` object that defines the possible values for a continuous hyperparameter.
   *
   * @public
   */
  ContinuousParameterRangeSpecification?: ContinuousParameterRangeSpecification | undefined;

  /**
   * A `CategoricalParameterRangeSpecification` object that defines the possible values for a categorical hyperparameter.
   *
   * @public
   */
  CategoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification | undefined;
}

/**
 * Defines a hyperparameter to be used by an algorithm.
 *
 * @public
 */
export interface HyperParameterSpecification {
  /**
   * The name of this hyperparameter. The name must be unique.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A brief description of the hyperparameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of this hyperparameter. The valid types are `Integer`, `Continuous`, `Categorical`, and `FreeText`.
   *
   * @public
   */
  Type: ParameterType | undefined;

  /**
   * The allowed range for this hyperparameter.
   *
   * @public
   */
  Range?: ParameterRange | undefined;

  /**
   * Indicates whether this hyperparameter is tunable in a hyperparameter tuning job.
   *
   * @public
   */
  IsTunable?: boolean | undefined;

  /**
   * Indicates whether this hyperparameter is required.
   *
   * @public
   */
  IsRequired?: boolean | undefined;

  /**
   * The default value for this hyperparameter. If a default value is specified, a hyperparameter cannot be required.
   *
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the `Type` parameter. If you want to define a custom objective metric, see [Define metrics and environment variables](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html).
 *
 * @public
 */
export interface HyperParameterTuningJobObjective {
  /**
   * Whether to minimize or maximize the objective metric.
   *
   * @public
   */
  Type: HyperParameterTuningJobObjectiveType | undefined;

  /**
   * The name of the metric to use for the objective metric.
   *
   * @public
   */
  MetricName: string | undefined;
}

/**
 * Defines how the algorithm is used for a training job.
 *
 * @public
 */
export interface TrainingSpecification {
  /**
   * The Amazon ECR registry path of the Docker image that contains the training algorithm.
   *
   * @public
   */
  TrainingImage: string | undefined;

  /**
   * An MD5 hash of the training algorithm that identifies the Docker image used for training.
   *
   * @public
   */
  TrainingImageDigest?: string | undefined;

  /**
   * A list of the `HyperParameterSpecification` objects, that define the supported hyperparameters. This is required if the algorithm supports automatic model tuning.&gt;
   *
   * @public
   */
  SupportedHyperParameters?: HyperParameterSpecification[] | undefined;

  /**
   * A list of the instance types that this algorithm can use for training.
   *
   * @public
   */
  SupportedTrainingInstanceTypes: TrainingInstanceType[] | undefined;

  /**
   * Indicates whether the algorithm supports distributed training. If set to false, buyers can't request more than one instance during training.
   *
   * @public
   */
  SupportsDistributedTraining?: boolean | undefined;

  /**
   * A list of `MetricDefinition` objects, which are used for parsing metrics generated by the algorithm.
   *
   * @public
   */
  MetricDefinitions?: MetricDefinition[] | undefined;

  /**
   * A list of `ChannelSpecification` objects, which specify the input sources to be used by the algorithm.
   *
   * @public
   */
  TrainingChannels: ChannelSpecification[] | undefined;

  /**
   * A list of the metrics that the algorithm emits that can be used as the objective metric in a hyperparameter tuning job.
   *
   * @public
   */
  SupportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[] | undefined;

  /**
   * The additional data source used during the training job.
   *
   * @public
   */
  AdditionalS3DataSource?: AdditionalS3DataSource | undefined;
}

/**
 * @public
 */
export interface CreateAlgorithmInput {
  /**
   * The name of the algorithm.
   *
   * @public
   */
  AlgorithmName: string | undefined;

  /**
   * A description of the algorithm.
   *
   * @public
   */
  AlgorithmDescription?: string | undefined;

  /**
   * Specifies details about training jobs run by this algorithm, including the following:
   *
   * - The Amazon ECR path of the container and the version digest of the algorithm.
   * - The hyperparameters that the algorithm supports.
   * - The instance types that the algorithm supports for training.
   * - Whether the algorithm supports distributed training.
   * - The metrics that the algorithm emits to Amazon CloudWatch.
   * - Which metrics that the algorithm emits can be used as the objective metric for hyperparameter tuning jobs.
   * - The input channels that the algorithm supports for training data. For example, an algorithm might support `train`, `validation`, and `test` channels.
   *
   * @public
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * Specifies details about inference jobs that the algorithm runs, including the following:
   *
   * - The Amazon ECR paths of containers that contain the inference code and model artifacts.
   * - The instance types that the algorithm supports for transform jobs and real-time endpoints used for inference.
   * - The input and output content formats that the algorithm supports for inference.
   *
   * @public
   */
  InferenceSpecification?: InferenceSpecification | undefined;

  /**
   * Specifies configurations for one or more training jobs and that SageMaker runs to test the algorithm's training code and, optionally, one or more batch transform jobs that SageMaker runs to test the algorithm's inference code.
   *
   * @public
   */
  ValidationSpecification?: AlgorithmValidationSpecification | undefined;

  /**
   * Whether to certify the algorithm so that it can be listed in Amazon Web Services Marketplace.
   *
   * @public
   */
  CertifyForMarketplace?: boolean | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAlgorithmOutput {
  /**
   * The Amazon Resource Name (ARN) of the new algorithm.
   *
   * @public
   */
  AlgorithmArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAppRequest {
  /**
   * The domain ID.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The user profile name. If this value is not set, then `SpaceName` must be set.
   *
   * @public
   */
  UserProfileName?: string | undefined;

  /**
   * The name of the space. If this value is not set, then `UserProfileName` must be set.
   *
   * @public
   */
  SpaceName?: string | undefined;

  /**
   * The type of app.
   *
   * @public
   */
  AppType: AppType | undefined;

  /**
   * The name of the app.
   *
   * @public
   */
  AppName: string | undefined;

  /**
   * Each tag consists of a key and an optional value. Tag keys must be unique per resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The instance type and the Amazon Resource Name (ARN) of the SageMaker AI image created on the instance.
   *
   * > **Note:** The value of `InstanceType` passed as part of the `ResourceSpec` in the `CreateApp` call overrides the value passed as part of the `ResourceSpec` configured for the user profile or the domain. If `InstanceType` is not specified in any of those three `ResourceSpec` values for a `KernelGateway` app, the `CreateApp` call fails with a request validation error.
   *
   * @public
   */
  ResourceSpec?: ResourceSpec | undefined;

  /**
   * Indicates whether the application is launched in recovery mode.
   *
   * @public
   */
  RecoveryMode?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateAppResponse {
  /**
   * The Amazon Resource Name (ARN) of the app.
   *
   * @public
   */
  AppArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppImageConfigRequest {
  /**
   * The name of the AppImageConfig. Must be unique to your account.
   *
   * @public
   */
  AppImageConfigName: string | undefined;

  /**
   * A list of tags to apply to the AppImageConfig.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The KernelGatewayImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel will be shown to users before the image starts. Once the image runs, all kernels are visible in JupyterLab.
   *
   * @public
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig | undefined;

  /**
   * The `JupyterLabAppImageConfig`. You can only specify one image kernel in the `AppImageConfig` API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in JupyterLab.
   *
   * @public
   */
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig | undefined;

  /**
   * The `CodeEditorAppImageConfig`. You can only specify one image kernel in the AppImageConfig API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in Code Editor.
   *
   * @public
   */
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig | undefined;
}

/**
 * @public
 */
export interface CreateAppImageConfigResponse {
  /**
   * The ARN of the AppImageConfig.
   *
   * @public
   */
  AppImageConfigArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateArtifactRequest {
  /**
   * The name of the artifact. Must be unique to your account in an Amazon Web Services Region.
   *
   * @public
   */
  ArtifactName?: string | undefined;

  /**
   * The ID, ID type, and URI of the source.
   *
   * @public
   */
  Source: ArtifactSource | undefined;

  /**
   * The artifact type.
   *
   * @public
   */
  ArtifactType: string | undefined;

  /**
   * A list of properties to add to the artifact.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   *
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * A list of tags to apply to the artifact.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateArtifactResponse {
  /**
   * The Amazon Resource Name (ARN) of the artifact.
   *
   * @public
   */
  ArtifactArn?: string | undefined;
}

/**
 * Specifies how to generate the endpoint name for an automatic one-click Autopilot model deployment.
 *
 * @public
 */
export interface ModelDeployConfig {
  /**
   * Set to `True` to automatically generate an endpoint name for a one-click Autopilot model deployment; set to `False` otherwise. The default value is `False`.
   *
   * > **Note:** If you set `AutoGenerateEndpointName` to `True`, do not specify the `EndpointName`; otherwise a 400 error is thrown.
   *
   * @public
   */
  AutoGenerateEndpointName?: boolean | undefined;

  /**
   * Specifies the endpoint name to use for a one-click Autopilot model deployment if the endpoint name is not generated automatically.
   *
   * > **Note:** Specify the `EndpointName` if and only if you set `AutoGenerateEndpointName` to `False`; otherwise a 400 error is thrown.
   *
   * @public
   */
  EndpointName?: string | undefined;
}

/**
 * @public
 */
export interface CreateAutoMLJobRequest {
  /**
   * Identifies an Autopilot job. The name must be unique to your account and is case insensitive.
   *
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * An array of channel objects that describes the input data and its location. Each channel is a named input source. Similar to `InputDataConfig` supported by [HyperParameterTrainingJobDefinition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html). Format(s) supported: CSV, Parquet. A minimum of 500 rows is required for the training dataset. There is not a minimum number of rows required for the validation dataset.
   *
   * @public
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * Provides information about encryption and the Amazon S3 output path needed to store artifacts from an AutoML job. Format(s) supported: CSV.
   *
   * @public
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * Defines the type of supervised learning problem available for the candidates. For more information, see [SageMaker Autopilot problem types](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-datasets-problem-types.html#autopilot-problem-types).
   *
   * @public
   */
  ProblemType?: ProblemType | undefined;

  /**
   * Specifies a metric to minimize or maximize as the objective of a job. If not specified, the default objective metric depends on the problem type. See [AutoMLJobObjective](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLJobObjective.html) for the default values.
   *
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective | undefined;

  /**
   * A collection of settings used to configure an AutoML job.
   *
   * @public
   */
  AutoMLJobConfig?: AutoMLJobConfig | undefined;

  /**
   * The ARN of the role that is used to access the data.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Generates possible candidates without training the models. A candidate is a combination of data preprocessors, algorithms, and algorithm parameter settings.
   *
   * @public
   */
  GenerateCandidateDefinitionsOnly?: boolean | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web ServicesResources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). Tag keys must be unique per resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies how to generate the endpoint name for an automatic one-click Autopilot model deployment.
   *
   * @public
   */
  ModelDeployConfig?: ModelDeployConfig | undefined;
}

/**
 * @public
 */
export interface CreateAutoMLJobResponse {
  /**
   * The unique ARN assigned to the AutoML job when it is created.
   *
   * @public
   */
  AutoMLJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAutoMLJobV2Request {
  /**
   * Identifies an Autopilot job. The name must be unique to your account and is case insensitive.
   *
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * An array of channel objects describing the input data and their location. Each channel is a named input source. Similar to the [InputDataConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJob.html#sagemaker-CreateAutoMLJob-request-InputDataConfig) attribute in the `CreateAutoMLJob` input parameters. The supported formats depend on the problem type:
   *
   * - For tabular problem types: `S3Prefix`, `ManifestFile`.
   * - For image classification: `S3Prefix`, `ManifestFile`, `AugmentedManifestFile`.
   * - For text classification: `S3Prefix`.
   * - For time-series forecasting: `S3Prefix`.
   * - For text generation (LLMs fine-tuning): `S3Prefix`.
   *
   * @public
   */
  AutoMLJobInputDataConfig: AutoMLJobChannel[] | undefined;

  /**
   * Provides information about encryption and the Amazon S3 output path needed to store artifacts from an AutoML job.
   *
   * @public
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * Defines the configuration settings of one of the supported problem types.
   *
   * @public
   */
  AutoMLProblemTypeConfig: AutoMLProblemTypeConfig | undefined;

  /**
   * The ARN of the role that is used to access the data.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, such as by purpose, owner, or environment. For more information, see [Tagging Amazon Web ServicesResources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). Tag keys must be unique per resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The security configuration for traffic encryption or Amazon VPC settings.
   *
   * @public
   */
  SecurityConfig?: AutoMLSecurityConfig | undefined;

  /**
   * Specifies a metric to minimize or maximize as the objective of a job. If not specified, the default objective metric depends on the problem type. For the list of default values per problem type, see [AutoMLJobObjective](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLJobObjective.html).
   *
   * > **Note:**
   * >
   * > - For tabular problem types: You must either provide both the `AutoMLJobObjective` and indicate the type of supervised learning problem in `AutoMLProblemTypeConfig` (`TabularJobConfig.ProblemType`), or none at all.
   * > - For text generation problem types (LLMs fine-tuning): Fine-tuning language models in Autopilot does not require setting the `AutoMLJobObjective` field. Autopilot fine-tunes LLMs without requiring multiple candidates to be trained and evaluated. Instead, using your dataset, Autopilot directly fine-tunes your target model to enhance a default objective metric, the cross-entropy loss. After fine-tuning a language model, you can evaluate the quality of its generated text using different metrics. For a list of the available metrics, see [Metrics for fine-tuning LLMs in Autopilot](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-llms-finetuning-metrics.html).
   *
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective | undefined;

  /**
   * Specifies how to generate the endpoint name for an automatic one-click Autopilot model deployment.
   *
   * @public
   */
  ModelDeployConfig?: ModelDeployConfig | undefined;

  /**
   * This structure specifies how to split the data into train and validation datasets.
   *
   * The validation and training datasets must contain the same headers. For jobs created by calling `CreateAutoMLJob`, the validation dataset must be less than 2 GB in size.
   *
   * > **Note:** This attribute must not be set for the time-series forecasting problem type, as Autopilot automatically splits the input dataset into training and validation sets.
   *
   * @public
   */
  DataSplitConfig?: AutoMLDataSplitConfig | undefined;

  /**
   * Specifies the compute configuration for the AutoML job V2.
   *
   * @public
   */
  AutoMLComputeConfig?: AutoMLComputeConfig | undefined;
}

/**
 * @public
 */
export interface CreateAutoMLJobV2Response {
  /**
   * The unique ARN assigned to the AutoMLJob when it is created.
   *
   * @public
   */
  AutoMLJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * The name for the new SageMaker HyperPod cluster.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The instance groups to be created in the SageMaker HyperPod cluster.
   *
   * @public
   */
  InstanceGroups?: ClusterInstanceGroupSpecification[] | undefined;

  /**
   * The specialized instance groups for training models like Amazon Nova to be created in the SageMaker HyperPod cluster.
   *
   * @public
   */
  RestrictedInstanceGroups?: ClusterRestrictedInstanceGroupSpecification[] | undefined;

  /**
   * The configuration for the restricted instance groups (RIG) in the SageMaker HyperPod cluster.
   *
   * @public
   */
  RestrictedInstanceGroupsConfig?: ClusterRestrictedInstanceGroupsConfig | undefined;

  /**
   * Specifies the Amazon Virtual Private Cloud (VPC) that is associated with the Amazon SageMaker HyperPod cluster. You can control access to and from your resources by configuring your VPC. For more information, see [Give SageMaker access to resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
   *
   * > **Note:**
   * >
   * > When your Amazon VPC and subnets support IPv6, network communications differ based on the cluster orchestration platform:
   * >
   * > - Slurm-orchestrated clusters automatically configure nodes with dual IPv6 and IPv4 addresses, allowing immediate IPv6 network communications.
   * > - In Amazon EKS-orchestrated clusters, nodes receive dual-stack addressing, but pods can only use IPv6 when the Amazon EKS cluster is explicitly IPv6-enabled. For information about deploying an IPv6 Amazon EKS cluster, see [Amazon EKS IPv6 Cluster Deployment](https://docs.aws.amazon.com/eks/latest/userguide/deploy-ipv6-cluster.html#_deploy_an_ipv6_cluster_with_eksctl).
   * >
   * > Additional resources for IPv6 configuration:
   * >
   * > - For information about adding IPv6 support to your VPC, see to [IPv6 Support for VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-migrate-ipv6.html).
   * > - For information about creating a new IPv6-compatible VPC, see [Amazon VPC Creation Guide](https://docs.aws.amazon.com/vpc/latest/userguide/create-vpc.html).
   * > - To configure SageMaker HyperPod with a custom Amazon VPC, see [Custom Amazon VPC Setup for SageMaker HyperPod](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-prerequisites.html#sagemaker-hyperpod-prerequisites-optional-vpc).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Custom tags for managing the SageMaker HyperPod cluster as an Amazon Web Services resource. You can add tags to your cluster in the same way you add them in other Amazon Web Services services that support tagging. To learn more about tagging Amazon Web Services resources in general, see [Tagging Amazon Web Services Resources User Guide](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The type of orchestrator to use for the SageMaker HyperPod cluster. Currently, supported values are `"Eks"` and `"Slurm"`, which is to use an Amazon Elastic Kubernetes Service or Slurm cluster as the orchestrator.
   *
   * > **Note:** If you specify the `Orchestrator` field, you must provide exactly one orchestrator configuration: either `Eks` or `Slurm`. Specifying both or providing an empty configuration returns a validation error.
   *
   * @public
   */
  Orchestrator?: ClusterOrchestrator | undefined;

  /**
   * The node recovery mode for the SageMaker HyperPod cluster. When set to `Automatic`, SageMaker HyperPod will automatically reboot or replace faulty nodes when issues are detected. When set to `None`, cluster administrators will need to manually manage any faulty cluster instances.
   *
   * @public
   */
  NodeRecovery?: ClusterNodeRecovery | undefined;

  /**
   * The configuration for managed tier checkpointing on the HyperPod cluster. When enabled, this feature uses a multi-tier storage approach for storing model checkpoints, providing faster checkpoint operations and improved fault tolerance across cluster nodes.
   *
   * @public
   */
  TieredStorageConfig?: ClusterTieredStorageConfig | undefined;

  /**
   * The mode for provisioning nodes in the cluster. You can specify the following modes:
   *
   * - **Continuous**: Scaling behavior that enables 1) concurrent operation execution within instance groups, 2) continuous retry mechanisms for failed operations, 3) enhanced customer visibility into cluster events through detailed event streams, 4) partial provisioning capabilities. Your clusters and instance groups remain `InService` while scaling. This mode is only supported for EKS orchestrated clusters.
   *
   * @public
   */
  NodeProvisioningMode?: ClusterNodeProvisioningMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that HyperPod assumes to perform cluster autoscaling operations. This role must have permissions for `sagemaker:BatchAddClusterNodes` and `sagemaker:BatchDeleteClusterNodes`. This is only required when autoscaling is enabled and when HyperPod is performing autoscaling operations.
   *
   * @public
   */
  ClusterRole?: string | undefined;

  /**
   * The autoscaling configuration for the cluster. Enables automatic scaling of cluster nodes based on workload demand using a Karpenter-based system.
   *
   * @public
   */
  AutoScaling?: ClusterAutoScalingConfig | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * Priority class configuration. When included in `PriorityClasses`, these class configurations define how tasks are queued.
 *
 * @public
 */
export interface PriorityClass {
  /**
   * Name of the priority class.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Weight of the priority class. The value is within a range from 0 to 100, where 0 is the default.
   *
   * A weight of 0 is the lowest priority and 100 is the highest. Weight 0 is the default.
   *
   * @public
   */
  Weight: number | undefined;
}

/**
 * Cluster policy configuration. This policy is used for task prioritization and fair-share allocation. This helps prioritize critical workloads and distributes idle compute across entities.
 *
 * @public
 */
export interface SchedulerConfig {
  /**
   * List of the priority classes, `PriorityClass`, of the cluster policy. When specified, these class configurations define how tasks are queued.
   *
   * @public
   */
  PriorityClasses?: PriorityClass[] | undefined;

  /**
   * When enabled, entities borrow idle compute based on their assigned `FairShareWeight`.
   *
   * When disabled, entities borrow idle compute based on a first-come first-serve basis.
   *
   * Default is `Enabled`.
   *
   * @public
   */
  FairShare?: FairShare | undefined;

  /**
   * Configuration for sharing idle compute resources across entities in the cluster. When enabled, unallocated resources are automatically calculated and made available for entities to borrow.
   *
   * @public
   */
  IdleResourceSharing?: IdleResourceSharing | undefined;
}

/**
 * @public
 */
export interface CreateClusterSchedulerConfigRequest {
  /**
   * The name for the cluster policy. The name must be unique within the SageMaker AI HyperPod cluster specified by `ClusterArn`. You can use the same name in other clusters within a Region or across Regions.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * ARN of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * Configuration about the monitoring schedule.
   *
   * @public
   */
  SchedulerConfig: SchedulerConfig | undefined;

  /**
   * Description of the cluster policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Tags of the cluster policy.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateClusterSchedulerConfigResponse {
  /**
   * ARN of the cluster policy.
   *
   * @public
   */
  ClusterSchedulerConfigArn: string | undefined;

  /**
   * ID of the cluster policy.
   *
   * @public
   */
  ClusterSchedulerConfigId: string | undefined;
}

/**
 * @public
 */
export interface CreateCodeRepositoryInput {
  /**
   * The name of the Git repository. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).
   *
   * @public
   */
  CodeRepositoryName: string | undefined;

  /**
   * Specifies details about the repository, including the URL where the repository is located, the default branch, and credentials to use to access the repository.
   *
   * @public
   */
  GitConfig: GitConfig | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCodeRepositoryOutput {
  /**
   * The Amazon Resource Name (ARN) of the new repository.
   *
   * @public
   */
  CodeRepositoryArn: string | undefined;
}

/**
 * Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
 *
 * @public
 */
export interface InputConfig {
  /**
   * The S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * Specifies the name and shape of the expected data inputs for your trained model with a JSON dictionary form. The data inputs are `Framework` specific.
   *
   * - `TensorFlow`: You must specify the name and shape (NHWC format) of the expected data inputs using a dictionary format for your trained model. The dictionary formats required for the console and CLI are different.
   *
   *   - Examples for one input:
   *
   *     - If using the console, `\{"input":[1,1024,1024,3]\}`
   *     - If using the CLI, `\{\"input\":[1,1024,1024,3]\}`
   *   - Examples for two inputs:
   *
   *     - If using the console, `\{"data1": [1,28,28,1], "data2":[1,28,28,1]\}`
   *     - If using the CLI, `\{\"data1\": [1,28,28,1], \"data2\":[1,28,28,1]\}`
   * - `KERAS`: You must specify the name and shape (NCHW format) of expected data inputs using a dictionary format for your trained model. Note that while Keras model artifacts should be uploaded in NHWC (channel-last) format, `DataInputConfig` should be specified in NCHW (channel-first) format. The dictionary formats required for the console and CLI are different.
   *
   *   - Examples for one input:
   *
   *     - If using the console, `\{"input_1":[1,3,224,224]\}`
   *     - If using the CLI, `\{\"input_1\":[1,3,224,224]\}`
   *   - Examples for two inputs:
   *
   *     - If using the console, `\{"input_1": [1,3,224,224], "input_2":[1,3,224,224]\}`
   *     - If using the CLI, `\{\"input_1\": [1,3,224,224], \"input_2\":[1,3,224,224]\}`
   * - `MXNET/ONNX/DARKNET`: You must specify the name and shape (NCHW format) of the expected data inputs in order using a dictionary format for your trained model. The dictionary formats required for the console and CLI are different.
   *
   *   - Examples for one input:
   *
   *     - If using the console, `\{"data":[1,3,1024,1024]\}`
   *     - If using the CLI, `\{\"data\":[1,3,1024,1024]\}`
   *   - Examples for two inputs:
   *
   *     - If using the console, `\{"var1": [1,1,28,28], "var2":[1,1,28,28]\}`
   *     - If using the CLI, `\{\"var1\": [1,1,28,28], \"var2\":[1,1,28,28]\}`
   * - `PyTorch`: You can either specify the name and shape (NCHW format) of expected data inputs in order using a dictionary format for your trained model or you can specify the shape only using a list format. The dictionary formats required for the console and CLI are different. The list formats for the console and CLI are the same.
   *
   *   - Examples for one input in dictionary format:
   *
   *     - If using the console, `\{"input0":[1,3,224,224]\}`
   *     - If using the CLI, `\{\"input0\":[1,3,224,224]\}`
   *   - Example for one input in list format: `[[1,3,224,224]]`
   *   - Examples for two inputs in dictionary format:
   *
   *     - If using the console, `\{"input0":[1,3,224,224], "input1":[1,3,224,224]\}`
   *     - If using the CLI, `\{\"input0\":[1,3,224,224], \"input1\":[1,3,224,224]\}`
   *   - Example for two inputs in list format: `[[1,3,224,224], [1,3,224,224]]`
   * - `XGBOOST`: input data name and shape are not needed.
   *
   * `DataInputConfig` supports the following parameters for `CoreML` `TargetDevice` (ML Model format):
   *
   * - `shape`: Input shape, for example `\{"input_1": \{"shape": [1,224,224,3]\}\}`. In addition to static input shapes, CoreML converter supports Flexible input shapes:
   *
   *   - Range Dimension. You can use the Range Dimension feature if you know the input shape will be within some specific interval in that dimension, for example: `\{"input_1": \{"shape": ["1..10", 224, 224, 3]\}\}`
   *   - Enumerated shapes. Sometimes, the models are trained to work only on a select set of inputs. You can enumerate all supported input shapes, for example: `\{"input_1": \{"shape": [[1, 224, 224, 3], [1, 160, 160, 3]]\}\}`
   * - `default_shape`: Default input shape. You can set a default shape during conversion for both Range Dimension and Enumerated Shapes. For example `\{"input_1": \{"shape": ["1..10", 224, 224, 3], "default_shape": [1, 224, 224, 3]\}\}`
   * - `type`: Input type. Allowed values: `Image` and `Tensor`. By default, the converter generates an ML Model with inputs of type Tensor (MultiArray). User can set input type to be Image. Image input type requires additional input parameters such as `bias` and `scale`.
   * - `bias`: If the input type is an Image, you need to provide the bias vector.
   * - `scale`: If the input type is an Image, you need to provide a scale factor.
   *
   * CoreML `ClassifierConfig` parameters can be specified using [OutputConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html) `CompilerOptions`. CoreML converter supports Tensorflow and PyTorch models. CoreML conversion examples:
   *
   * - Tensor type input:
   *
   *   - `"DataInputConfig": \{"input_1": \{"shape": [[1,224,224,3], [1,160,160,3]], "default_shape": [1,224,224,3]\}\}`
   * - Tensor type input without input name (PyTorch):
   *
   *   - `"DataInputConfig": [\{"shape": [[1,3,224,224], [1,3,160,160]], "default_shape": [1,3,224,224]\}]`
   * - Image type input:
   *
   *   - `"DataInputConfig": \{"input_1": \{"shape": [[1,224,224,3], [1,160,160,3]], "default_shape": [1,224,224,3], "type": "Image", "bias": [-1,-1,-1], "scale": 0.007843137255\}\}`
   *   - `"CompilerOptions": \{"class_labels": "imagenet_labels_1000.txt"\}`
   * - Image type input without input name (PyTorch):
   *
   *   - `"DataInputConfig": [\{"shape": [[1,3,224,224], [1,3,160,160]], "default_shape": [1,3,224,224], "type": "Image", "bias": [-1,-1,-1], "scale": 0.007843137255\}]`
   *   - `"CompilerOptions": \{"class_labels": "imagenet_labels_1000.txt"\}`
   *
   * Depending on the model format, `DataInputConfig` requires the following parameters for `ml_eia2` [OutputConfig:TargetDevice](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-TargetDevice).
   *
   * - For TensorFlow models saved in the SavedModel format, specify the input names from `signature_def_key` and the input model shapes for `DataInputConfig`. Specify the `signature_def_key` in [`OutputConfig:CompilerOptions`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-CompilerOptions) if the model does not use TensorFlow's default signature def key. For example:
   *
   *   - `"DataInputConfig": \{"inputs": [1, 224, 224, 3]\}`
   *   - `"CompilerOptions": \{"signature_def_key": "serving_custom"\}`
   * - For TensorFlow models saved as a frozen graph, specify the input tensor names and shapes in `DataInputConfig` and the output tensor names for `output_names` in [`OutputConfig:CompilerOptions`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html#sagemaker-Type-OutputConfig-CompilerOptions). For example:
   *
   *   - `"DataInputConfig": \{"input_tensor:0": [1, 224, 224, 3]\}`
   *   - `"CompilerOptions": \{"output_names": ["output_tensor:0"]\}`
   *
   * @public
   */
  DataInputConfig?: string | undefined;

  /**
   * Identifies the framework in which the model was trained. For example: TENSORFLOW.
   *
   * @public
   */
  Framework: Framework | undefined;

  /**
   * Specifies the framework version to use. This API field is only supported for the MXNet, PyTorch, TensorFlow and TensorFlow Lite frameworks.
   *
   * For information about framework versions supported for cloud targets and edge devices, see [Cloud Supported Instance Types and Frameworks](https://docs.aws.amazon.com/sagemaker/latest/dg/neo-supported-cloud.html) and [Edge Supported Frameworks](https://docs.aws.amazon.com/sagemaker/latest/dg/neo-supported-devices-edge-frameworks.html).
   *
   * @public
   */
  FrameworkVersion?: string | undefined;
}

/**
 * Contains information about a target platform that you want your model to run on, such as OS, architecture, and accelerators. It is an alternative of `TargetDevice`.
 *
 * @public
 */
export interface TargetPlatform {
  /**
   * Specifies a target platform OS.
   *
   * - `LINUX`: Linux-based operating systems.
   * - `ANDROID`: Android operating systems. Android API level can be specified using the `ANDROID_PLATFORM` compiler option. For example, `"CompilerOptions": \{'ANDROID_PLATFORM': 28\}`
   *
   * @public
   */
  Os: TargetPlatformOs | undefined;

  /**
   * Specifies a target platform architecture.
   *
   * - `X86_64`: 64-bit version of the x86 instruction set.
   * - `X86`: 32-bit version of the x86 instruction set.
   * - `ARM64`: ARMv8 64-bit CPU.
   * - `ARM_EABIHF`: ARMv7 32-bit, Hard Float.
   * - `ARM_EABI`: ARMv7 32-bit, Soft Float. Used by Android 32-bit ARM platform.
   *
   * @public
   */
  Arch: TargetPlatformArch | undefined;

  /**
   * Specifies a target platform accelerator (optional).
   *
   * - `NVIDIA`: Nvidia graphics processing unit. It also requires `gpu-code`, `trt-ver`, `cuda-ver` compiler options
   * - `MALI`: ARM Mali graphics processor
   * - `INTEL_GRAPHICS`: Integrated Intel graphics
   *
   * @public
   */
  Accelerator?: TargetPlatformAccelerator | undefined;
}

/**
 * Contains information about the output location for the compiled model and the target device that the model runs on. `TargetDevice` and `TargetPlatform` are mutually exclusive, so you need to choose one between the two to specify your target device or platform. If you cannot find your device you want to use from the `TargetDevice` list, use `TargetPlatform` to describe the platform of your edge device and `CompilerOptions` if there are specific settings that are required or recommended to use for particular TargetPlatform.
 *
 * @public
 */
export interface OutputConfig {
  /**
   * Identifies the S3 bucket where you want Amazon SageMaker AI to store the model artifacts. For example, `s3://bucket-name/key-name-prefix`.
   *
   * @public
   */
  S3OutputLocation: string | undefined;

  /**
   * Identifies the target device or the machine learning instance that you want to run your model on after the compilation has completed. Alternatively, you can specify OS, architecture, and accelerator using [TargetPlatform](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TargetPlatform.html) fields. It can be used instead of `TargetPlatform`.
   *
   * > **Note:** Currently `ml_trn1` is available only in US East (N. Virginia) Region, and `ml_inf2` is available only in US East (Ohio) Region.
   *
   * @public
   */
  TargetDevice?: TargetDevice | undefined;

  /**
   * Contains information about a target platform that you want your model to run on, such as OS, architecture, and accelerators. It is an alternative of `TargetDevice`.
   *
   * The following examples show how to configure the `TargetPlatform` and `CompilerOptions` JSON strings for popular target platforms:
   *
   * - Raspberry Pi 3 Model B+
   *
   *   `"TargetPlatform": \{"Os": "LINUX", "Arch": "ARM_EABIHF"\},`
   *
   *   `"CompilerOptions": \{'mattr': ['+neon']\}`
   * - Jetson TX2
   *
   *   `"TargetPlatform": \{"Os": "LINUX", "Arch": "ARM64", "Accelerator": "NVIDIA"\},`
   *
   *   `"CompilerOptions": \{'gpu-code': 'sm_62', 'trt-ver': '6.0.1', 'cuda-ver': '10.0'\}`
   * - EC2 m5.2xlarge instance OS
   *
   *   `"TargetPlatform": \{"Os": "LINUX", "Arch": "X86_64", "Accelerator": "NVIDIA"\},`
   *
   *   `"CompilerOptions": \{'mcpu': 'skylake-avx512'\}`
   * - RK3399
   *
   *   `"TargetPlatform": \{"Os": "LINUX", "Arch": "ARM64", "Accelerator": "MALI"\}`
   * - ARMv7 phone (CPU)
   *
   *   `"TargetPlatform": \{"Os": "ANDROID", "Arch": "ARM_EABI"\},`
   *
   *   `"CompilerOptions": \{'ANDROID_PLATFORM': 25, 'mattr': ['+neon']\}`
   * - ARMv8 phone (CPU)
   *
   *   `"TargetPlatform": \{"Os": "ANDROID", "Arch": "ARM64"\},`
   *
   *   `"CompilerOptions": \{'ANDROID_PLATFORM': 29\}`
   *
   * @public
   */
  TargetPlatform?: TargetPlatform | undefined;

  /**
   * Specifies additional parameters for compiler options in JSON format. The compiler options are `TargetPlatform` specific. It is required for NVIDIA accelerators and highly recommended for CPU compilations. For any other cases, it is optional to specify `CompilerOptions.`
   *
   * - `DTYPE`: Specifies the data type for the input. When compiling for `ml_*` (except for `ml_inf`) instances using PyTorch framework, provide the data type (dtype) of the model's input. `"float32"` is used if `"DTYPE"` is not specified. Options for data type are:
   *
   *   - float32: Use either `"float"` or `"float32"`.
   *   - int64: Use either `"int64"` or `"long"`.
   *
   *   For example, `\{"dtype" : "float32"\}`.
   * - `CPU`: Compilation for CPU supports the following compiler options.
   *
   *   - `mcpu`: CPU micro-architecture. For example, `\{'mcpu': 'skylake-avx512'\}`
   *   - `mattr`: CPU flags. For example, `\{'mattr': ['+neon', '+vfpv4']\}`
   * - `ARM`: Details of ARM CPU compilations.
   *
   *   - `NEON`: NEON is an implementation of the Advanced SIMD extension used in ARMv7 processors.
   *
   *     For example, add `\{'mattr': ['+neon']\}` to the compiler options if compiling for ARM 32-bit platform with the NEON support.
   * - `NVIDIA`: Compilation for NVIDIA GPU supports the following compiler options.
   *
   *   - `gpu_code`: Specifies the targeted architecture.
   *   - `trt-ver`: Specifies the TensorRT versions in x.y.z. format.
   *   - `cuda-ver`: Specifies the CUDA version in x.y format.
   *
   *   For example, `\{'gpu-code': 'sm_72', 'trt-ver': '6.0.1', 'cuda-ver': '10.1'\}`
   * - `ANDROID`: Compilation for the Android OS supports the following compiler options:
   *
   *   - `ANDROID_PLATFORM`: Specifies the Android API levels. Available levels range from 21 to 29. For example, `\{'ANDROID_PLATFORM': 28\}`.
   *   - `mattr`: Add `\{'mattr': ['+neon']\}` to compiler options if compiling for ARM 32-bit platform with NEON support.
   * - `INFERENTIA`: Compilation for target ml_inf1 uses compiler options passed in as a JSON string. For example, `"CompilerOptions": "\"--verbose 1 --num-neuroncores 2 -O2\""`.
   *
   *   For information about supported compiler options, see [Neuron Compiler CLI Reference Guide](https://awsdocs-neuron.readthedocs-hosted.com/en/latest/compiler/neuronx-cc/api-reference-guide/neuron-compiler-cli-reference-guide.html).
   * - `CoreML`: Compilation for the CoreML [OutputConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OutputConfig.html) `TargetDevice` supports the following compiler options:
   *
   *   - `class_labels`: Specifies the classification labels file name inside input tar.gz file. For example, `\{"class_labels": "imagenet_labels_1000.txt"\}`. Labels inside the txt file should be separated by newlines.
   *
   * @public
   */
  CompilerOptions?: string | undefined;

  /**
   * The Amazon Web Services Key Management Service key (Amazon Web Services KMS) that Amazon SageMaker AI uses to encrypt your output models with Amazon S3 server-side encryption after compilation job. If you don't provide a KMS key ID, Amazon SageMaker AI uses the default KMS key for Amazon S3 for your role's account. For more information, see [KMS-Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html) in the *Amazon Simple Storage Service Developer Guide.*
   *
   * The KmsKeyId can be any of the following formats:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias name ARN: `arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias`
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * The [VpcConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html) configuration object that specifies the VPC that you want the compilation jobs to connect to. For more information on controlling access to your Amazon S3 buckets used for compilation job, see [Give Amazon SageMaker AI Compilation Jobs Access to Resources in Your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html).
 *
 * @public
 */
export interface NeoVpcConfig {
  /**
   * The VPC security group IDs. IDs have the form of `sg-xxxxxxxx`. Specify the security groups for the VPC that is specified in the `Subnets` field.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The ID of the subnets in the VPC that you want to connect the compilation job to for accessing the model in Amazon S3.
   *
   * @public
   */
  Subnets: string[] | undefined;
}

/**
 * @public
 */
export interface CreateCompilationJobRequest {
  /**
   * A name for the model compilation job. The name must be unique within the Amazon Web Services Region and within your Amazon Web Services account.
   *
   * @public
   */
  CompilationJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker AI to perform tasks on your behalf.
   *
   * During model compilation, Amazon SageMaker AI needs your permission to:
   *
   * - Read input data from an S3 bucket
   * - Write model artifacts to an S3 bucket
   * - Write logs to Amazon CloudWatch Logs
   * - Publish metrics to Amazon CloudWatch
   *
   * You grant permissions for all of these tasks to an IAM role. To pass this role to Amazon SageMaker AI, the caller of this API must have the `iam:PassRole` permission. For more information, see [Amazon SageMaker AI Roles.](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html)
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a versioned model package. Provide either a `ModelPackageVersionArn` or an `InputConfig` object in the request syntax. The presence of both objects in the `CreateCompilationJob` request will return an exception.
   *
   * @public
   */
  ModelPackageVersionArn?: string | undefined;

  /**
   * Provides information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
   *
   * @public
   */
  InputConfig?: InputConfig | undefined;

  /**
   * Provides information about the output location for the compiled model and the target device the model runs on.
   *
   * @public
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * A [VpcConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html) object that specifies the VPC that you want your compilation job to connect to. Control access to your models by configuring the VPC. For more information, see [Protect Compilation Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html).
   *
   * @public
   */
  VpcConfig?: NeoVpcConfig | undefined;

  /**
   * Specifies a limit to how long a model compilation job can run. When the job reaches the time limit, Amazon SageMaker AI ends the compilation job. Use this API to cap model training costs.
   *
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateCompilationJobResponse {
  /**
   * If the action is successful, the service sends back an HTTP 200 response. Amazon SageMaker AI returns the following data in JSON format:
   *
   * - `CompilationJobArn`: The Amazon Resource Name (ARN) of the compiled job.
   *
   * @public
   */
  CompilationJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateComputeQuotaRequest {
  /**
   * The name of the compute allocation definition. The name must be unique within the SageMaker AI HyperPod cluster specified by `ClusterArn`. You can use the same name in other clusters within a Region or across Regions.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Description of the compute allocation definition.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * ARN of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * Configuration of the compute allocation definition. This includes the resource sharing option, and the setting to preempt low priority tasks.
   *
   * @public
   */
  ComputeQuotaConfig: ComputeQuotaConfig | undefined;

  /**
   * The target entity to allocate compute resources to.
   *
   * @public
   */
  ComputeQuotaTarget: ComputeQuotaTarget | undefined;

  /**
   * The state of the compute allocation being described. Use to enable or disable compute allocation.
   *
   * Default is `Enabled`.
   *
   * @public
   */
  ActivationState?: ActivationState | undefined;

  /**
   * Tags of the compute allocation definition.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateComputeQuotaResponse {
  /**
   * ARN of the compute allocation definition.
   *
   * @public
   */
  ComputeQuotaArn: string | undefined;

  /**
   * ID of the compute allocation definition.
   *
   * @public
   */
  ComputeQuotaId: string | undefined;
}

/**
 * @public
 */
export interface CreateContextRequest {
  /**
   * The name of the context. Must be unique to your account in an Amazon Web Services Region.
   *
   * @public
   */
  ContextName: string | undefined;

  /**
   * The source type, ID, and URI.
   *
   * @public
   */
  Source: ContextSource | undefined;

  /**
   * The context type.
   *
   * @public
   */
  ContextType: string | undefined;

  /**
   * The description of the context.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of properties to add to the context.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * A list of tags to apply to the context.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateContextResponse {
  /**
   * The Amazon Resource Name (ARN) of the context.
   *
   * @public
   */
  ContextArn?: string | undefined;
}

/**
 * Information about the container that a data quality monitoring job runs.
 *
 * @public
 */
export interface DataQualityAppSpecification {
  /**
   * The container image that the data quality monitoring job runs.
   *
   * @public
   */
  ImageUri: string | undefined;

  /**
   * The entrypoint for a container used to run a monitoring job.
   *
   * @public
   */
  ContainerEntrypoint?: string[] | undefined;

  /**
   * The arguments to send to the container that the monitoring job runs.
   *
   * @public
   */
  ContainerArguments?: string[] | undefined;

  /**
   * An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flattened JSON so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers.
   *
   * @public
   */
  RecordPreprocessorSourceUri?: string | undefined;

  /**
   * An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers.
   *
   * @public
   */
  PostAnalyticsProcessorSourceUri?: string | undefined;

  /**
   * Sets the environment variables in the container that the monitoring job runs.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;
}

/**
 * The constraints resource for a monitoring job.
 *
 * @public
 */
export interface MonitoringConstraintsResource {
  /**
   * The Amazon S3 URI for the constraints resource.
   *
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * The statistics resource for a monitoring job.
 *
 * @public
 */
export interface MonitoringStatisticsResource {
  /**
   * The Amazon S3 URI for the statistics resource.
   *
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
 *
 * @public
 */
export interface DataQualityBaselineConfig {
  /**
   * The name of the job that performs baselining for the data quality monitoring job.
   *
   * @public
   */
  BaseliningJobName?: string | undefined;

  /**
   * The constraints resource for a monitoring job.
   *
   * @public
   */
  ConstraintsResource?: MonitoringConstraintsResource | undefined;

  /**
   * The statistics resource for a monitoring job.
   *
   * @public
   */
  StatisticsResource?: MonitoringStatisticsResource | undefined;
}

/**
 * Input object for the endpoint
 *
 * @public
 */
export interface EndpointInput {
  /**
   * An endpoint in customer's account which has enabled `DataCaptureConfig` enabled.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * Path to the filesystem where the endpoint data is available to the container.
   *
   * @public
   */
  LocalPath: string | undefined;

  /**
   * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job. `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File`.
   *
   * @public
   */
  S3InputMode?: ProcessingS3InputMode | undefined;

  /**
   * Whether input data distributed in Amazon S3 is fully replicated or sharded by an Amazon S3 key. Defaults to `FullyReplicated`
   *
   * @public
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | undefined;

  /**
   * The attributes of the input data that are the input features.
   *
   * @public
   */
  FeaturesAttribute?: string | undefined;

  /**
   * The attribute of the input data that represents the ground truth label.
   *
   * @public
   */
  InferenceAttribute?: string | undefined;

  /**
   * In a classification problem, the attribute that represents the class probability.
   *
   * @public
   */
  ProbabilityAttribute?: string | undefined;

  /**
   * The threshold for the class probability to be evaluated as a positive result.
   *
   * @public
   */
  ProbabilityThresholdAttribute?: number | undefined;

  /**
   * If specified, monitoring jobs substract this time from the start time. For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html).
   *
   * @public
   */
  StartTimeOffset?: string | undefined;

  /**
   * If specified, monitoring jobs substract this time from the end time. For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html).
   *
   * @public
   */
  EndTimeOffset?: string | undefined;

  /**
   * The attributes of the input data to exclude from the analysis.
   *
   * @public
   */
  ExcludeFeaturesAttribute?: string | undefined;
}

/**
 * The input for the data quality monitoring job. Currently endpoints are supported for input.
 *
 * @public
 */
export interface DataQualityJobInput {
  /**
   * Input object for the endpoint
   *
   * @public
   */
  EndpointInput?: EndpointInput | undefined;

  /**
   * Input object for the batch transform job.
   *
   * @public
   */
  BatchTransformInput?: BatchTransformInput | undefined;
}

/**
 * Information about where and how you want to store the results of a monitoring job.
 *
 * @public
 */
export interface MonitoringS3Output {
  /**
   * A URI that identifies the Amazon S3 storage location where Amazon SageMaker AI saves the results of a monitoring job.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The local path to the Amazon S3 storage location where Amazon SageMaker AI saves the results of a monitoring job. LocalPath is an absolute path for the output data.
   *
   * @public
   */
  LocalPath: string | undefined;

  /**
   * Whether to upload the results of the monitoring job continuously or after the job completes.
   *
   * @public
   */
  S3UploadMode?: ProcessingS3UploadMode | undefined;
}

/**
 * The output object for a monitoring job.
 *
 * @public
 */
export interface MonitoringOutput {
  /**
   * The Amazon S3 storage location where the results of a monitoring job are saved.
   *
   * @public
   */
  S3Output: MonitoringS3Output | undefined;
}

/**
 * The output configuration for monitoring jobs.
 *
 * @public
 */
export interface MonitoringOutputConfig {
  /**
   * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
   *
   * @public
   */
  MonitoringOutputs: MonitoringOutput[] | undefined;

  /**
   * The Key Management Service (KMS) key that Amazon SageMaker AI uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Configuration for the cluster used to run model monitoring jobs.
 *
 * @public
 */
export interface MonitoringClusterConfig {
  /**
   * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * The ML compute instance type for the processing job.
   *
   * @public
   */
  InstanceType: ProcessingInstanceType | undefined;

  /**
   * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
   *
   * @public
   */
  VolumeSizeInGB: number | undefined;

  /**
   * The Key Management Service (KMS) key that Amazon SageMaker AI uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;
}

/**
 * Identifies the resources to deploy for a monitoring job.
 *
 * @public
 */
export interface MonitoringResources {
  /**
   * The configuration for the cluster resources used to run the processing job.
   *
   * @public
   */
  ClusterConfig: MonitoringClusterConfig | undefined;
}

/**
 * The networking configuration for the monitoring job.
 *
 * @public
 */
export interface MonitoringNetworkConfig {
  /**
   * Whether to encrypt all communications between the instances used for the monitoring jobs. Choose `True` to encrypt communications. Encryption provides greater security for distributed jobs, but the processing might take longer.
   *
   * @public
   */
  EnableInterContainerTrafficEncryption?: boolean | undefined;

  /**
   * Whether to allow inbound and outbound network calls to and from the containers used for the monitoring job.
   *
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * A time limit for how long the monitoring job is allowed to run before stopping.
 *
 * @public
 */
export interface MonitoringStoppingCondition {
  /**
   * The maximum runtime allowed in seconds.
   *
   * > **Note:** The `MaxRuntimeInSeconds` cannot exceed the frequency of the job. For data quality and model explainability, this can be up to 3600 seconds for an hourly schedule. For model bias and model quality hourly schedules, this can be up to 1800 seconds.
   *
   * @public
   */
  MaxRuntimeInSeconds: number | undefined;
}

/**
 * @public
 */
export interface CreateDataQualityJobDefinitionRequest {
  /**
   * The name for the monitoring job definition.
   *
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * Configures the constraints and baselines for the monitoring job.
   *
   * @public
   */
  DataQualityBaselineConfig?: DataQualityBaselineConfig | undefined;

  /**
   * Specifies the container that runs the monitoring job.
   *
   * @public
   */
  DataQualityAppSpecification: DataQualityAppSpecification | undefined;

  /**
   * A list of inputs for the monitoring job. Currently endpoints are supported as monitoring inputs.
   *
   * @public
   */
  DataQualityJobInput: DataQualityJobInput | undefined;

  /**
   * The output configuration for monitoring jobs.
   *
   * @public
   */
  DataQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * Identifies the resources to deploy for a monitoring job.
   *
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * Specifies networking configuration for the monitoring job.
   *
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A time limit for how long the monitoring job is allowed to run before stopping.
   *
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition | undefined;

  /**
   * (Optional) An array of key-value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the *Amazon Web Services Billing and Cost Management User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDataQualityJobDefinitionResponse {
  /**
   * The Amazon Resource Name (ARN) of the job definition.
   *
   * @public
   */
  JobDefinitionArn: string | undefined;
}

/**
 * The output configuration.
 *
 * @public
 */
export interface EdgeOutputConfig {
  /**
   * The Amazon Simple Storage (S3) bucker URI.
   *
   * @public
   */
  S3OutputLocation: string | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume after compilation job. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The deployment type SageMaker Edge Manager will create. Currently only supports Amazon Web Services IoT Greengrass Version 2 components.
   *
   * @public
   */
  PresetDeploymentType?: EdgePresetDeploymentType | undefined;

  /**
   * The configuration used to create deployment artifacts. Specify configuration options with a JSON string. The available configuration options for each type are:
   *
   * - `ComponentName` (optional) - Name of the GreenGrass V2 component. If not specified, the default name generated consists of "SagemakerEdgeManager" and the name of your SageMaker Edge Manager packaging job.
   * - `ComponentDescription` (optional) - Description of the component.
   * - `ComponentVersion` (optional) - The version of the component.
   *
   *   > **Note:** Amazon Web Services IoT Greengrass uses semantic versions for components. Semantic versions follow a *major.minor.patch* number system. For example, version 1.0.0 represents the first major release for a component. For more information, see the [semantic version specification](https://semver.org/).
   * - `PlatformOS` (optional) - The name of the operating system for the platform. Supported platforms include Windows and Linux.
   * - `PlatformArchitecture` (optional) - The processor architecture for the platform.
   *
   *   Supported architectures Windows include: Windows32_x86, Windows64_x64.
   *
   *   Supported architectures for Linux include: Linux x86_64, Linux ARMV8.
   *
   * @public
   */
  PresetDeploymentConfig?: string | undefined;
}

/**
 * @public
 */
export interface CreateDeviceFleetRequest {
  /**
   * The name of the fleet that the device belongs to.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT).
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A description of the fleet.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The output configuration for storing sample data collected by the fleet.
   *
   * @public
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * Creates tags for the specified fleet.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Whether to create an Amazon Web Services IoT Role Alias during device fleet creation. The name of the role alias generated will match this pattern: "SageMakerEdge-\{DeviceFleetName\}".
   *
   * For example, if your device fleet is called "demo-fleet", the name of the role alias will be "SageMakerEdge-demo-fleet".
   *
   * @public
   */
  EnableIotRoleAlias?: boolean | undefined;
}

/**
 * The settings for assigning a custom Amazon EFS file system to a user profile or space for an Amazon SageMaker AI Domain.
 *
 * @public
 */
export interface EFSFileSystemConfig {
  /**
   * The ID of your Amazon EFS file system.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The path to the file system directory that is accessible in Amazon SageMaker AI Studio. Permitted users can access only this directory and below.
   *
   * @public
   */
  FileSystemPath?: string | undefined;
}

/**
 * The settings for assigning a custom Amazon FSx for Lustre file system to a user profile or space for an Amazon SageMaker Domain.
 *
 * @public
 */
export interface FSxLustreFileSystemConfig {
  /**
   * The globally unique, 17-digit, ID of the file system, assigned by Amazon FSx for Lustre.
   *
   * @public
   */
  FileSystemId: string | undefined;

  /**
   * The path to the file system directory that is accessible in Amazon SageMaker Studio. Permitted users can access only this directory and below.
   *
   * @public
   */
  FileSystemPath?: string | undefined;
}

/**
 * Configuration for the custom Amazon S3 file system.
 *
 * @public
 */
export interface S3FileSystemConfig {
  /**
   * The file system path where the Amazon S3 storage location will be mounted within the Amazon SageMaker Studio environment.
   *
   * @public
   */
  MountPath?: string | undefined;

  /**
   * The Amazon S3 URI of the S3 file system configuration.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * The settings for assigning a custom file system to a user profile or space for an Amazon SageMaker AI Domain. Permitted users can access this file system in Amazon SageMaker AI Studio.
 *
 * @public
 */
export type CustomFileSystemConfig =
  | CustomFileSystemConfig.EFSFileSystemConfigMember
  | CustomFileSystemConfig.FSxLustreFileSystemConfigMember
  | CustomFileSystemConfig.S3FileSystemConfigMember
  | CustomFileSystemConfig.$UnknownMember;

/**
 * @public
 */
export namespace CustomFileSystemConfig {
  /**
   * The settings for a custom Amazon EFS file system.
   *
   * @public
   */
  export interface EFSFileSystemConfigMember {
    EFSFileSystemConfig: EFSFileSystemConfig;
    FSxLustreFileSystemConfig?: never;
    S3FileSystemConfig?: never;
    $unknown?: never;
  }

  /**
   * The settings for a custom Amazon FSx for Lustre file system.
   *
   * @public
   */
  export interface FSxLustreFileSystemConfigMember {
    EFSFileSystemConfig?: never;
    FSxLustreFileSystemConfig: FSxLustreFileSystemConfig;
    S3FileSystemConfig?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for a custom Amazon S3 file system.
   *
   * @public
   */
  export interface S3FileSystemConfigMember {
    EFSFileSystemConfig?: never;
    FSxLustreFileSystemConfig?: never;
    S3FileSystemConfig: S3FileSystemConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    EFSFileSystemConfig?: never;
    FSxLustreFileSystemConfig?: never;
    S3FileSystemConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    EFSFileSystemConfig: (value: EFSFileSystemConfig) => T;
    FSxLustreFileSystemConfig: (value: FSxLustreFileSystemConfig) => T;
    S3FileSystemConfig: (value: S3FileSystemConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details about the POSIX identity that is used for file system operations.
 *
 * @public
 */
export interface CustomPosixUserConfig {
  /**
   * The POSIX user ID.
   *
   * @public
   */
  Uid: number | undefined;

  /**
   * The POSIX group ID.
   *
   * @public
   */
  Gid: number | undefined;
}

/**
 * The configuration parameters that specify the IAM roles assumed by the execution role of SageMaker (assumable roles) and the cluster instances or job execution environments (execution roles or runtime roles) to manage and access resources required for running Amazon EMR clusters or Amazon EMR Serverless applications.
 *
 * @public
 */
export interface EmrSettings {
  /**
   * An array of Amazon Resource Names (ARNs) of the IAM roles that the execution role of SageMaker can assume for performing operations or tasks related to Amazon EMR clusters or Amazon EMR Serverless applications. These roles define the permissions and access policies required when performing Amazon EMR-related operations, such as listing, connecting to, or terminating Amazon EMR clusters or Amazon EMR Serverless applications. They are typically used in cross-account access scenarios, where the Amazon EMR resources (clusters or serverless applications) are located in a different Amazon Web Services account than the SageMaker domain.
   *
   * @public
   */
  AssumableRoleArns?: string[] | undefined;

  /**
   * An array of Amazon Resource Names (ARNs) of the IAM roles used by the Amazon EMR cluster instances or job execution environments to access other Amazon Web Services services and resources needed during the runtime of your Amazon EMR or Amazon EMR Serverless workloads, such as Amazon S3 for data access, Amazon CloudWatch for logging, or other Amazon Web Services services based on the particular workload requirements.
   *
   * @public
   */
  ExecutionRoleArns?: string[] | undefined;
}

/**
 * The settings for the JupyterLab application.
 *
 * @public
 */
export interface JupyterLabAppSettings {
  /**
   * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
   *
   * > **Note:** When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn`, pass `None` as the value.
   *
   * @public
   */
  DefaultResourceSpec?: ResourceSpec | undefined;

  /**
   * A list of custom SageMaker images that are configured to run as a JupyterLab app.
   *
   * @public
   */
  CustomImages?: CustomImage[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lifecycle configurations attached to the user profile or domain. To remove a lifecycle config, you must set `LifecycleConfigArns` to an empty list.
   *
   * @public
   */
  LifecycleConfigArns?: string[] | undefined;

  /**
   * A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterLab application.
   *
   * @public
   */
  CodeRepositories?: CodeRepository[] | undefined;

  /**
   * Indicates whether idle shutdown is activated for JupyterLab applications.
   *
   * @public
   */
  AppLifecycleManagement?: AppLifecycleManagement | undefined;

  /**
   * The configuration parameters that specify the IAM roles assumed by the execution role of SageMaker (assumable roles) and the cluster instances or job execution environments (execution roles or runtime roles) to manage and access resources required for running Amazon EMR clusters or Amazon EMR Serverless applications.
   *
   * @public
   */
  EmrSettings?: EmrSettings | undefined;

  /**
   * The lifecycle configuration that runs before the default lifecycle configuration. It can override changes made in the default lifecycle configuration.
   *
   * @public
   */
  BuiltInLifecycleConfigArn?: string | undefined;
}

/**
 * The JupyterServer app settings.
 *
 * @public
 */
export interface JupyterServerAppSettings {
  /**
   * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker AI image used by the JupyterServer app. If you use the `LifecycleConfigArns` parameter, then this parameter is also required.
   *
   * @public
   */
  DefaultResourceSpec?: ResourceSpec | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the JupyterServerApp. If you use this parameter, the `DefaultResourceSpec` parameter is also required.
   *
   * > **Note:** To remove a Lifecycle Config, you must set `LifecycleConfigArns` to an empty list.
   *
   * @public
   */
  LifecycleConfigArns?: string[] | undefined;

  /**
   * A list of Git repositories that SageMaker AI automatically displays to users for cloning in the JupyterServer application.
   *
   * @public
   */
  CodeRepositories?: CodeRepository[] | undefined;
}

/**
 * The KernelGateway app settings.
 *
 * @public
 */
export interface KernelGatewayAppSettings {
  /**
   * The default instance type and the Amazon Resource Name (ARN) of the default SageMaker AI image used by the KernelGateway app.
   *
   * > **Note:** The Amazon SageMaker AI Studio UI does not use the default instance type value set here. The default instance type set here is used when Apps are created using the CLI or CloudFormation and the instance type parameter value is not passed.
   *
   * @public
   */
  DefaultResourceSpec?: ResourceSpec | undefined;

  /**
   * A list of custom SageMaker AI images that are configured to run as a KernelGateway app.
   *
   * The maximum number of custom images are as follows.
   *
   * - On a domain level: 200
   * - On a space level: 5
   * - On a user profile level: 5
   *
   * @public
   */
  CustomImages?: CustomImage[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the the user profile or domain.
   *
   * > **Note:** To remove a Lifecycle Config, you must set `LifecycleConfigArns` to an empty list.
   *
   * @public
   */
  LifecycleConfigArns?: string[] | undefined;
}

/**
 * A collection of default EBS storage settings that apply to spaces created within a domain or user profile.
 *
 * @public
 */
export interface DefaultEbsStorageSettings {
  /**
   * The default size of the EBS storage volume for a space.
   *
   * @public
   */
  DefaultEbsVolumeSizeInGb: number | undefined;

  /**
   * The maximum size of the EBS storage volume for a space.
   *
   * @public
   */
  MaximumEbsVolumeSizeInGb: number | undefined;
}

/**
 * The default storage settings for a space.
 *
 * @public
 */
export interface DefaultSpaceStorageSettings {
  /**
   * The default EBS storage settings for a space.
   *
   * @public
   */
  DefaultEbsStorageSettings?: DefaultEbsStorageSettings | undefined;
}

/**
 * The default settings for shared spaces that users create in the domain.
 *
 * SageMaker applies these settings only to shared spaces. It doesn't apply them to private spaces.
 *
 * @public
 */
export interface DefaultSpaceSettings {
  /**
   * The ARN of the execution role for the space.
   *
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * The security group IDs for the Amazon VPC that the space uses for communication.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The JupyterServer app settings.
   *
   * @public
   */
  JupyterServerAppSettings?: JupyterServerAppSettings | undefined;

  /**
   * The KernelGateway app settings.
   *
   * @public
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings | undefined;

  /**
   * The settings for the JupyterLab application.
   *
   * @public
   */
  JupyterLabAppSettings?: JupyterLabAppSettings | undefined;

  /**
   * The default storage settings for a space.
   *
   * @public
   */
  SpaceStorageSettings?: DefaultSpaceStorageSettings | undefined;

  /**
   * Details about the POSIX identity that is used for file system operations.
   *
   * @public
   */
  CustomPosixUserConfig?: CustomPosixUserConfig | undefined;

  /**
   * The settings for assigning a custom file system to a domain. Permitted users can access this file system in Amazon SageMaker AI Studio.
   *
   * @public
   */
  CustomFileSystemConfigs?: CustomFileSystemConfig[] | undefined;
}

/**
 * A collection of settings that apply to an `RSessionGateway` app.
 *
 * @public
 */
export interface RSessionAppSettings {
  /**
   * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
   *
   * > **Note:** When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn`, pass `None` as the value.
   *
   * @public
   */
  DefaultResourceSpec?: ResourceSpec | undefined;

  /**
   * A list of custom SageMaker AI images that are configured to run as a RSession app.
   *
   * @public
   */
  CustomImages?: CustomImage[] | undefined;
}

/**
 * A collection of settings that configure user interaction with the `RStudioServerPro` app.
 *
 * @public
 */
export interface RStudioServerProAppSettings {
  /**
   * Indicates whether the current user has access to the `RStudioServerPro` app.
   *
   * @public
   */
  AccessStatus?: RStudioServerProAccessStatus | undefined;

  /**
   * The level of permissions that the user has within the `RStudioServerPro` app. This value defaults to `User`. The `Admin` value allows the user access to the RStudio Administrative Dashboard.
   *
   * @public
   */
  UserGroup?: RStudioServerProUserGroup | undefined;
}

/**
 * Specifies options for sharing Amazon SageMaker AI Studio notebooks. These settings are specified as part of `DefaultUserSettings` when the `CreateDomain` API is called, and as part of `UserSettings` when the `CreateUserProfile` API is called. When `SharingSettings` is not specified, notebook sharing isn't allowed.
 *
 * @public
 */
export interface SharingSettings {
  /**
   * Whether to include the notebook cell output when sharing the notebook. The default is `Disabled`.
   *
   * @public
   */
  NotebookOutputOption?: NotebookOutputOption | undefined;

  /**
   * When `NotebookOutputOption` is `Allowed`, the Amazon S3 bucket used to store the shared notebook snapshots.
   *
   * @public
   */
  S3OutputPath?: string | undefined;

  /**
   * When `NotebookOutputOption` is `Allowed`, the Amazon Web Services Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
   *
   * @public
   */
  S3KmsKeyId?: string | undefined;
}

/**
 * The SageMaker images that are hidden from the Studio user interface. You must specify the SageMaker image name and version aliases.
 *
 * @public
 */
export interface HiddenSageMakerImage {
  /**
   * The SageMaker image name that you are hiding from the Studio user interface.
   *
   * @public
   */
  SageMakerImageName?: SageMakerImageName | undefined;

  /**
   * The version aliases you are hiding from the Studio user interface.
   *
   * @public
   */
  VersionAliases?: string[] | undefined;
}

/**
 * Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
 *
 * @public
 */
export interface StudioWebPortalSettings {
  /**
   * The machine learning tools that are hidden from the Studio left navigation pane.
   *
   * @public
   */
  HiddenMlTools?: MlTools[] | undefined;

  /**
   * The [Applications supported in Studio](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-updated-apps.html) that are hidden from the Studio left navigation pane.
   *
   * @public
   */
  HiddenAppTypes?: AppType[] | undefined;

  /**
   * The instance types you are hiding from the Studio user interface.
   *
   * @public
   */
  HiddenInstanceTypes?: AppInstanceType[] | undefined;

  /**
   * The version aliases you are hiding from the Studio user interface.
   *
   * @public
   */
  HiddenSageMakerImageVersionAliases?: HiddenSageMakerImage[] | undefined;

  /**
   * The execution role session name mode. If this value is set to `USER_IDENTITY`, the session name of the execution role corresponds to the user's identity. For IAM domains, the session name is the IAM session name used to generate the presigned URL. For IAM Identity Center domains, the session name is the username of the associated IAM Identity Center user. If this value is set to `STATIC` or is not set, the session name defaults to `SageMaker`.
   *
   * @public
   */
  ExecutionRoleSessionNameMode?: ExecutionRoleSessionNameMode | undefined;
}

/**
 * The TensorBoard app settings.
 *
 * @public
 */
export interface TensorBoardAppSettings {
  /**
   * The default instance type and the Amazon Resource Name (ARN) of the SageMaker AI image created on the instance.
   *
   * @public
   */
  DefaultResourceSpec?: ResourceSpec | undefined;
}

/**
 * A collection of settings that apply to users in a domain. These settings are specified when the `CreateUserProfile` API is called, and as `DefaultUserSettings` when the `CreateDomain` API is called.
 *
 * `SecurityGroups` is aggregated when specified in both calls. For all other settings in `UserSettings`, the values specified in `CreateUserProfile` take precedence over those specified in `CreateDomain`.
 *
 * @public
 */
export interface UserSettings {
  /**
   * The execution role for the user.
   *
   * SageMaker applies this setting only to private spaces that the user creates in the domain. SageMaker doesn't apply this setting to shared spaces.
   *
   * @public
   */
  ExecutionRole?: string | undefined;

  /**
   * The security groups for the Amazon Virtual Private Cloud (VPC) that the domain uses for communication.
   *
   * Optional when the `CreateDomain.AppNetworkAccessType` parameter is set to `PublicInternetOnly`.
   *
   * Required when the `CreateDomain.AppNetworkAccessType` parameter is set to `VpcOnly`, unless specified as part of the `DefaultUserSettings` for the domain.
   *
   * Amazon SageMaker AI adds a security group to allow NFS traffic from Amazon SageMaker AI Studio. Therefore, the number of security groups that you can specify is one less than the maximum number shown.
   *
   * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * Specifies options for sharing Amazon SageMaker AI Studio notebooks.
   *
   * @public
   */
  SharingSettings?: SharingSettings | undefined;

  /**
   * The Jupyter server's app settings.
   *
   * @public
   */
  JupyterServerAppSettings?: JupyterServerAppSettings | undefined;

  /**
   * The kernel gateway app settings.
   *
   * @public
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings | undefined;

  /**
   * The TensorBoard app settings.
   *
   * @public
   */
  TensorBoardAppSettings?: TensorBoardAppSettings | undefined;

  /**
   * A collection of settings that configure user interaction with the `RStudioServerPro` app.
   *
   * @public
   */
  RStudioServerProAppSettings?: RStudioServerProAppSettings | undefined;

  /**
   * A collection of settings that configure the `RSessionGateway` app.
   *
   * @public
   */
  RSessionAppSettings?: RSessionAppSettings | undefined;

  /**
   * The Canvas app settings.
   *
   * SageMaker applies these settings only to private spaces that SageMaker creates for the Canvas app.
   *
   * @public
   */
  CanvasAppSettings?: CanvasAppSettings | undefined;

  /**
   * The Code Editor application settings.
   *
   * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
   *
   * @public
   */
  CodeEditorAppSettings?: CodeEditorAppSettings | undefined;

  /**
   * The settings for the JupyterLab application.
   *
   * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
   *
   * @public
   */
  JupyterLabAppSettings?: JupyterLabAppSettings | undefined;

  /**
   * The storage settings for a space.
   *
   * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
   *
   * @public
   */
  SpaceStorageSettings?: DefaultSpaceStorageSettings | undefined;

  /**
   * The default experience that the user is directed to when accessing the domain. The supported values are:
   *
   * - `studio::`: Indicates that Studio is the default experience. This value can only be passed if `StudioWebPortal` is set to `ENABLED`.
   * - `app:JupyterServer:`: Indicates that Studio Classic is the default experience.
   *
   * @public
   */
  DefaultLandingUri?: string | undefined;

  /**
   * Whether the user can access Studio. If this value is set to `DISABLED`, the user cannot access Studio, even if that is the default experience for the domain.
   *
   * @public
   */
  StudioWebPortal?: StudioWebPortal | undefined;

  /**
   * Details about the POSIX identity that is used for file system operations.
   *
   * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
   *
   * @public
   */
  CustomPosixUserConfig?: CustomPosixUserConfig | undefined;

  /**
   * The settings for assigning a custom file system to a user profile. Permitted users can access this file system in Amazon SageMaker AI Studio.
   *
   * SageMaker applies these settings only to private spaces that the user creates in the domain. SageMaker doesn't apply these settings to shared spaces.
   *
   * @public
   */
  CustomFileSystemConfigs?: CustomFileSystemConfig[] | undefined;

  /**
   * Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
   *
   * @public
   */
  StudioWebPortalSettings?: StudioWebPortalSettings | undefined;

  /**
   * Indicates whether auto-mounting of an EFS volume is supported for the user profile. The `DefaultAsDomain` value is only supported for user profiles. Do not use the `DefaultAsDomain` value when setting this parameter for a domain.
   *
   * SageMaker applies this setting only to private spaces that the user creates in the domain. SageMaker doesn't apply this setting to shared spaces.
   *
   * @public
   */
  AutoMountHomeEFS?: AutoMountHomeEFS | undefined;
}

/**
 * A collection of settings that configure the domain's Docker interaction.
 *
 * @public
 */
export interface DockerSettings {
  /**
   * Indicates whether the domain can access Docker.
   *
   * @public
   */
  EnableDockerAccess?: FeatureStatus | undefined;

  /**
   * The list of Amazon Web Services accounts that are trusted when the domain is created in VPC-only mode.
   *
   * @public
   */
  VpcOnlyTrustedAccounts?: string[] | undefined;

  /**
   * Indicates whether to use rootless Docker.
   *
   * @public
   */
  RootlessDocker?: FeatureStatus | undefined;
}

/**
 * A collection of settings that configure the `RStudioServerPro` Domain-level app.
 *
 * @public
 */
export interface RStudioServerProDomainSettings {
  /**
   * The ARN of the execution role for the `RStudioServerPro` Domain-level app.
   *
   * @public
   */
  DomainExecutionRoleArn: string | undefined;

  /**
   * A URL pointing to an RStudio Connect server.
   *
   * @public
   */
  RStudioConnectUrl?: string | undefined;

  /**
   * A URL pointing to an RStudio Package Manager server.
   *
   * @public
   */
  RStudioPackageManagerUrl?: string | undefined;

  /**
   * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
   *
   * > **Note:** When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn`, pass `None` as the value.
   *
   * @public
   */
  DefaultResourceSpec?: ResourceSpec | undefined;
}

/**
 * The Trusted Identity Propagation (TIP) settings for the SageMaker domain. These settings determine how user identities from IAM Identity Center are propagated through the domain to TIP enabled Amazon Web Services services.
 *
 * @public
 */
export interface TrustedIdentityPropagationSettings {
  /**
   * The status of Trusted Identity Propagation (TIP) at the SageMaker domain level.
   *
   * When disabled, standard IAM role-based access is used.
   *
   * When enabled:
   *
   * - User identities from IAM Identity Center are propagated through the application to TIP enabled Amazon Web Services services.
   * - New applications or existing applications that are automatically patched, will use the domain level configuration.
   *
   * @public
   */
  Status: FeatureStatus | undefined;
}

/**
 * The settings that apply to an Amazon SageMaker AI domain when you use it in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface UnifiedStudioSettings {
  /**
   * Sets whether you can access the domain in Amazon SageMaker Studio:
   *
   * - **ENABLED**
   *
   *   You can access the domain in Amazon SageMaker Studio. If you migrate the domain to Amazon SageMaker Unified Studio, you can access it in both studio interfaces.
   *
   * - **DISABLED**
   *
   *   You can't access the domain in Amazon SageMaker Studio. If you migrate the domain to Amazon SageMaker Unified Studio, you can access it only in that studio interface.
   *
   * To migrate a domain to Amazon SageMaker Unified Studio, you specify the UnifiedStudioSettings data type when you use the UpdateDomain action.
   *
   * @public
   */
  StudioWebPortalAccess?: FeatureStatus | undefined;

  /**
   * The ID of the Amazon Web Services account that has the Amazon SageMaker Unified Studio domain. The default value, if you don't specify an ID, is the ID of the account that has the Amazon SageMaker AI domain.
   *
   * @public
   */
  DomainAccountId?: string | undefined;

  /**
   * The Amazon Web Services Region where the domain is located in Amazon SageMaker Unified Studio. The default value, if you don't specify a Region, is the Region where the Amazon SageMaker AI domain is located.
   *
   * @public
   */
  DomainRegion?: string | undefined;

  /**
   * The ID of the Amazon SageMaker Unified Studio domain associated with this domain.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The ID of the Amazon SageMaker Unified Studio project that corresponds to the domain.
   *
   * @public
   */
  ProjectId?: string | undefined;

  /**
   * The ID of the environment that Amazon SageMaker Unified Studio associates with the domain.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The location where Amazon S3 stores temporary execution data and other artifacts for the project that corresponds to the domain.
   *
   * @public
   */
  ProjectS3Path?: string | undefined;

  /**
   * The ARN of the Amazon DataZone application managed by Amazon SageMaker Unified Studio in the Amazon Web Services IAM Identity Center.
   *
   * @public
   */
  SingleSignOnApplicationArn?: string | undefined;
}

/**
 * A collection of settings that apply to the `SageMaker Domain`. These settings are specified through the `CreateDomain` API call.
 *
 * @public
 */
export interface DomainSettings {
  /**
   * The security groups for the Amazon Virtual Private Cloud that the `Domain` uses for communication between Domain-level apps and user apps.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A collection of settings that configure the `RStudioServerPro` Domain-level app.
   *
   * @public
   */
  RStudioServerProDomainSettings?: RStudioServerProDomainSettings | undefined;

  /**
   * The configuration for attaching a SageMaker AI user profile name to the execution role as a [sts:SourceIdentity key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html).
   *
   * @public
   */
  ExecutionRoleIdentityConfig?: ExecutionRoleIdentityConfig | undefined;

  /**
   * The Trusted Identity Propagation (TIP) settings for the SageMaker domain. These settings determine how user identities from IAM Identity Center are propagated through the domain to TIP enabled Amazon Web Services services.
   *
   * @public
   */
  TrustedIdentityPropagationSettings?: TrustedIdentityPropagationSettings | undefined;

  /**
   * A collection of settings that configure the domain's Docker interaction.
   *
   * @public
   */
  DockerSettings?: DockerSettings | undefined;

  /**
   * A collection of settings that configure the Amazon Q experience within the domain. The `AuthMode` that you use to create the domain must be `SSO`.
   *
   * @public
   */
  AmazonQSettings?: AmazonQSettings | undefined;

  /**
   * The settings that apply to an SageMaker AI domain when you use it in Amazon SageMaker Unified Studio.
   *
   * @public
   */
  UnifiedStudioSettings?: UnifiedStudioSettings | undefined;

  /**
   * The IP address type for the domain. Specify `ipv4` for IPv4-only connectivity or `dualstack` for both IPv4 and IPv6 connectivity. When you specify `dualstack`, the subnet must support IPv6 CIDR blocks. If not specified, defaults to `ipv4`.
   *
   * @public
   */
  IpAddressType?: IPAddressType | undefined;
}

/**
 * @public
 */
export interface CreateDomainRequest {
  /**
   * A name for the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The mode of authentication that members use to access the domain.
   *
   * @public
   */
  AuthMode: AuthMode | undefined;

  /**
   * The default settings to use to create a user profile when `UserSettings` isn't specified in the call to the `CreateUserProfile` API.
   *
   * `SecurityGroups` is aggregated when specified in both calls. For all other settings in `UserSettings`, the values specified in `CreateUserProfile` take precedence over those specified in `CreateDomain`.
   *
   * @public
   */
  DefaultUserSettings: UserSettings | undefined;

  /**
   * A collection of `Domain` settings.
   *
   * @public
   */
  DomainSettings?: DomainSettings | undefined;

  /**
   * The VPC subnets that the domain uses for communication.
   *
   * The field is optional when the `AppNetworkAccessType` parameter is set to `PublicInternetOnly` for domains created from Amazon SageMaker Unified Studio.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The ID of the Amazon Virtual Private Cloud (VPC) that the domain uses for communication.
   *
   * The field is optional when the `AppNetworkAccessType` parameter is set to `PublicInternetOnly` for domains created from Amazon SageMaker Unified Studio.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Tags to associated with the Domain. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the `Search` API.
   *
   * Tags that you specify for the Domain are also added to all Apps that the Domain launches.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies the VPC used for non-EFS traffic. The default value is `PublicInternetOnly`.
   *
   * - `PublicInternetOnly` - Non-EFS traffic is through a VPC managed by Amazon SageMaker AI, which allows direct internet access
   * - `VpcOnly` - All traffic is through the specified VPC and subnets
   *
   * @public
   */
  AppNetworkAccessType?: AppNetworkAccessType | undefined;

  /**
   * Use `KmsKeyId`.
   *
   * @deprecated This property is deprecated, use KmsKeyId instead.
   * @public
   */
  HomeEfsFileSystemKmsKeyId?: string | undefined;

  /**
   * SageMaker AI uses Amazon Web Services KMS to encrypt EFS and EBS volumes attached to the domain with an Amazon Web Services managed key by default. For more control, specify a customer managed key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The entity that creates and manages the required security groups for inter-app communication in `VPCOnly` mode. Required when `CreateDomain.AppNetworkAccessType` is `VPCOnly` and `DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn` is provided. If setting up the domain for use with RStudio, this value must be set to `Service`.
   *
   * @public
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement | undefined;

  /**
   * Indicates whether to create a home EFS file system for the domain. Defaults to `Enabled`. Set to `Disabled` to skip EFS creation and reduce domain creation time. You can enable EFS later by calling `UpdateDomain`.
   *
   * @public
   */
  HomeEfsFileSystemCreation?: HomeEfsFileSystemCreation | undefined;

  /**
   * Indicates whether custom tag propagation is supported for the domain. Defaults to `DISABLED`.
   *
   * @public
   */
  TagPropagation?: TagPropagation | undefined;

  /**
   * The default settings for shared spaces that users create in the domain.
   *
   * @public
   */
  DefaultSpaceSettings?: DefaultSpaceSettings | undefined;
}

/**
 * @public
 */
export interface CreateDomainResponse {
  /**
   * The Amazon Resource Name (ARN) of the created domain.
   *
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * The ID of the created domain.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The URL to the created domain.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Contains information about the configuration of a model in a deployment.
 *
 * @public
 */
export interface EdgeDeploymentModelConfig {
  /**
   * The name the device application uses to reference this model.
   *
   * @public
   */
  ModelHandle: string | undefined;

  /**
   * The edge packaging job associated with this deployment.
   *
   * @public
   */
  EdgePackagingJobName: string | undefined;
}

/**
 * Contains information about the configuration of a deployment.
 *
 * @public
 */
export interface EdgeDeploymentConfig {
  /**
   * Toggle that determines whether to rollback to previous configuration if the current deployment fails. By default this is turned on. You may turn this off if you want to investigate the errors yourself.
   *
   * @public
   */
  FailureHandlingPolicy: FailureHandlingPolicy | undefined;
}

/**
 * Contains information about the configurations of selected devices.
 *
 * @public
 */
export interface DeviceSelectionConfig {
  /**
   * Type of device subsets to deploy to the current stage.
   *
   * @public
   */
  DeviceSubsetType: DeviceSubsetType | undefined;

  /**
   * Percentage of devices in the fleet to deploy to the current stage.
   *
   * @public
   */
  Percentage?: number | undefined;

  /**
   * List of devices chosen to deploy.
   *
   * @public
   */
  DeviceNames?: string[] | undefined;

  /**
   * A filter to select devices with names containing this name.
   *
   * @public
   */
  DeviceNameContains?: string | undefined;
}

/**
 * Contains information about a stage in an edge deployment plan.
 *
 * @public
 */
export interface DeploymentStage {
  /**
   * The name of the stage.
   *
   * @public
   */
  StageName: string | undefined;

  /**
   * Configuration of the devices in the stage.
   *
   * @public
   */
  DeviceSelectionConfig: DeviceSelectionConfig | undefined;

  /**
   * Configuration of the deployment details.
   *
   * @public
   */
  DeploymentConfig?: EdgeDeploymentConfig | undefined;
}

/**
 * @public
 */
export interface CreateEdgeDeploymentPlanRequest {
  /**
   * The name of the edge deployment plan.
   *
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * List of models associated with the edge deployment plan.
   *
   * @public
   */
  ModelConfigs: EdgeDeploymentModelConfig[] | undefined;

  /**
   * The device fleet used for this edge deployment plan.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * List of stages of the edge deployment plan. The number of stages is limited to 10 per deployment.
   *
   * @public
   */
  Stages?: DeploymentStage[] | undefined;

  /**
   * List of tags with which to tag the edge deployment plan.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEdgeDeploymentPlanResponse {
  /**
   * The ARN of the edge deployment plan.
   *
   * @public
   */
  EdgeDeploymentPlanArn: string | undefined;
}

/**
 * @public
 */
export interface CreateEdgeDeploymentStageRequest {
  /**
   * The name of the edge deployment plan.
   *
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * List of stages to be added to the edge deployment plan.
   *
   * @public
   */
  Stages: DeploymentStage[] | undefined;
}

/**
 * @public
 */
export interface CreateEdgePackagingJobRequest {
  /**
   * The name of the edge packaging job.
   *
   * @public
   */
  EdgePackagingJobName: string | undefined;

  /**
   * The name of the SageMaker Neo compilation job that will be used to locate model artifacts for packaging.
   *
   * @public
   */
  CompilationJobName: string | undefined;

  /**
   * The name of the model.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The version of the model.
   *
   * @public
   */
  ModelVersion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to download and upload the model, and to contact SageMaker Neo.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Provides information about the output location for the packaged model.
   *
   * @public
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * The Amazon Web Services KMS key to use when encrypting the EBS volume the edge packaging job runs on.
   *
   * @public
   */
  ResourceKey?: string | undefined;

  /**
   * Creates tags for the packaging job.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Specifies a rolling deployment strategy for updating a SageMaker endpoint.
 *
 * @public
 */
export interface RollingUpdatePolicy {
  /**
   * Batch size for each rolling step to provision capacity and turn on traffic on the new endpoint fleet, and terminate capacity on the old endpoint fleet. Value must be between 5% to 50% of the variant's total instance count.
   *
   * @public
   */
  MaximumBatchSize: CapacitySize | undefined;

  /**
   * The length of the baking period, during which SageMaker monitors alarms for each batch on the new fleet.
   *
   * @public
   */
  WaitIntervalInSeconds: number | undefined;

  /**
   * The time limit for the total deployment. Exceeding this limit causes a timeout.
   *
   * @public
   */
  MaximumExecutionTimeoutInSeconds?: number | undefined;

  /**
   * Batch size for rollback to the old endpoint fleet. Each rolling step to provision capacity and turn on traffic on the old endpoint fleet, and terminate capacity on the new endpoint fleet. If this field is absent, the default value will be set to 100% of total capacity which means to bring up the whole capacity of the old fleet at once during rollback.
   *
   * @public
   */
  RollbackMaximumBatchSize?: CapacitySize | undefined;
}

/**
 * The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
 *
 * @public
 */
export interface DeploymentConfig {
  /**
   * Update policy for a blue/green deployment. If this update policy is specified, SageMaker creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips traffic to the new fleet according to the specified traffic routing configuration. Only one update policy should be used in the deployment configuration. If no update policy is specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting by default.
   *
   * @public
   */
  BlueGreenUpdatePolicy?: BlueGreenUpdatePolicy | undefined;

  /**
   * Specifies a rolling deployment strategy for updating a SageMaker endpoint.
   *
   * @public
   */
  RollingUpdatePolicy?: RollingUpdatePolicy | undefined;

  /**
   * Automatic rollback configuration for handling endpoint deployment failures and recovery.
   *
   * @public
   */
  AutoRollbackConfiguration?: AutoRollbackConfig | undefined;
}

/**
 * @public
 */
export interface CreateEndpointInput {
  /**
   * The name of the endpoint.The name must be unique within an Amazon Web Services Region in your Amazon Web Services account. The name is case-insensitive in `CreateEndpoint`, but the case is preserved and must be matched in [InvokeEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpoint.html).
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The name of an endpoint configuration. For more information, see [CreateEndpointConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html).
   *
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfig | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEndpointOutput {
  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * Configuration to control how SageMaker AI captures inference data.
 *
 * @public
 */
export interface DataCaptureConfig {
  /**
   * Whether data capture should be enabled or disabled (defaults to enabled).
   *
   * @public
   */
  EnableCapture?: boolean | undefined;

  /**
   * The percentage of requests SageMaker AI will capture. A lower value is recommended for Endpoints with high traffic.
   *
   * @public
   */
  InitialSamplingPercentage: number | undefined;

  /**
   * The Amazon S3 location used to capture the data.
   *
   * @public
   */
  DestinationS3Uri: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Key Management Service key that SageMaker AI uses to encrypt the captured data at rest using Amazon S3 server-side encryption.
   *
   * The KmsKeyId can be any of the following formats:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias name ARN: `arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies data Model Monitor will capture. You can configure whether to collect only input, only output, or both
   *
   * @public
   */
  CaptureOptions: CaptureOption[] | undefined;

  /**
   * Configuration specifying how to treat different headers. If no headers are specified SageMaker AI will by default base64 encode when capturing the data.
   *
   * @public
   */
  CaptureContentTypeHeader?: CaptureContentTypeHeader | undefined;
}

/**
 * A parameter to activate explainers.
 *
 * @public
 */
export interface ExplainerConfig {
  /**
   * A member of `ExplainerConfig` that contains configuration parameters for the SageMaker Clarify explainer.
   *
   * @public
   */
  ClarifyExplainerConfig?: ClarifyExplainerConfig | undefined;
}

/**
 * The configuration for Utilization metrics.
 *
 * @public
 */
export interface MetricsConfig {
  /**
   * Specifies whether to enable enhanced metrics for the endpoint. Enhanced metrics provide utilization and invocation data at instance and container granularity. Container granularity is supported for Inference Components. The default is `False`.
   *
   * @public
   */
  EnableEnhancedMetrics?: boolean | undefined;

  /**
   * Indicates whether detailed observability is enabled for the endpoint. When set to `True`, the following metrics are published at the configured frequency:
   *
   * - Container-level inference metrics scraped from the container's Prometheus endpoint (such as request latency, error counts, and throughput). Available metrics vary by framework.
   * - Per-GPU metrics (utilization, memory, and temperature) attributed to individual inference components.
   * - Per-instance host metrics (CPU, memory, and disk utilization).
   * - Inference component placement metrics (copy count per Availability Zone).
   *
   * For first-party and Deep Learning Containers (DLC), the Prometheus endpoint path is determined automatically. For Bring-Your-Own-Container (BYOC) cases, you can optionally set `ContainerMetricsConfig` to specify a custom endpoint path. If not specified, the default path `/metrics` on port `8080` is used.
   *
   * When set to `False`, these additional metrics are not published. Standard invocation and utilization metrics controlled by `EnableEnhancedMetrics` are unaffected.
   *
   * The default value for new endpoint configurations is `True`. For existing endpoint configurations created before this feature, the value is `False` unless explicitly set.
   *
   * @public
   */
  EnableDetailedObservability?: boolean | undefined;

  /**
   * The interval, in seconds, at which metrics are published to Amazon CloudWatch. Defaults to `60`. Valid values: `10`, `30`, `60`, `120`, `180`, `240`, `300`.
   *
   * When `EnableEnhancedMetrics` is set to `False`, this interval applies to utilization metrics only. Invocation metrics continue to be published at the default 60-second interval. When `EnableEnhancedMetrics` is set to `True`, this interval applies to both utilization and invocation metrics.
   *
   * When `EnableDetailedObservability` is set to `True`, this interval applies to per-GPU metrics, per-instance host metrics, container metrics, and fleet-level inference component lifecycle and placement metrics.
   *
   * @public
   */
  MetricPublishFrequencyInSeconds?: MetricPublishFrequencyInSeconds | undefined;
}

/**
 * Settings for the capacity reservation for the compute instances that SageMaker AI reserves for an endpoint.
 *
 * @public
 */
export interface ProductionVariantCapacityReservationConfig {
  /**
   * Options that you can choose for the capacity reservation. SageMaker AI supports the following options:
   *
   * - **capacity-reservations-only**
   *
   *   SageMaker AI launches instances only into an ML capacity reservation. If no capacity is available, the instances fail to launch.
   *
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the ML capacity reservation that SageMaker AI applies when it deploys the endpoint.
   *
   * @public
   */
  MlReservationArn?: string | undefined;
}

/**
 * Specifies configuration for a core dump from the model container when the process crashes.
 *
 * @public
 */
export interface ProductionVariantCoreDumpConfig {
  /**
   * The Amazon S3 bucket to send the core dump to.
   *
   * @public
   */
  DestinationS3Uri: string | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that SageMaker uses to encrypt the core dump data at rest using Amazon S3 server-side encryption. The `KmsKeyId` can be any of the following formats:
   *
   * - // KMS Key ID
   *
   *   `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - // Amazon Resource Name (ARN) of a KMS Key
   *
   *   `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - // KMS Key Alias
   *
   *   `"alias/ExampleAlias"`
   * - // Amazon Resource Name (ARN) of a KMS Key Alias
   *
   *   `"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"`
   *
   * If you use a KMS key ID or an alias of your KMS key, the SageMaker execution role must include permissions to call `kms:Encrypt`. If you don't provide a KMS key ID, SageMaker uses the default KMS key for Amazon S3 for your role's account. SageMaker uses server-side encryption with KMS-managed keys for `OutputDataConfig`. If you use a bucket policy with an `s3:PutObject` permission that only allows objects with server-side encryption, set the condition key of `s3:x-amz-server-side-encryption` to `"aws:kms"`. For more information, see [KMS-Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the *Amazon Simple Storage Service Developer Guide.*
   *
   * The KMS key policy must grant permission to the IAM role that you specify in your `CreateEndpoint` and `UpdateEndpoint` requests. For more information, see [Using Key Policies in Amazon Web Services KMS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Specifies an instance type and its priority for a heterogeneous endpoint. Use instance pools to configure a production variant with multiple instance types, enabling the endpoint to provision instances across different types based on priority.
 *
 * @public
 */
export interface InstancePool {
  /**
   * The ML compute instance type for the instance pool.
   *
   * @public
   */
  InstanceType: ProductionVariantInstanceType | undefined;

  /**
   * The name of a SageMaker model to use for this instance pool instead of the model specified for the production variant. Use this to deploy a different model optimized for the instance type in this pool.
   *
   * @public
   */
  ModelNameOverride?: string | undefined;

  /**
   * The priority for the instance pool. SageMaker attempts to provision instances in order of priority, starting with the lowest value. If instances for a higher-priority pool are unavailable, SageMaker attempts to provision from the next pool.
   *
   * Valid values: 1 to 5, where 1 is the highest priority.
   *
   * @public
   */
  Priority: number | undefined;
}

/**
 * Configures the scale-in behavior for managed instance scaling.
 *
 * @public
 */
export interface ProductionVariantManagedInstanceScalingScaleInPolicy {
  /**
   * The strategy for scaling in instances.
   *
   * - **IDLE_RELEASE**
   *
   *   Releases instances that have no hosted inference component copies.
   *
   * - **CONSOLIDATION**
   *
   *   Consolidates inference component copies onto fewer instances to release more instances. Consolidation honors the scheduling configuration of each inference component. For example, if an inference component specifies Availability Zone balance, consolidation only proceeds when the resulting distribution does not increase the imbalance.
   *
   * @public
   */
  Strategy: ManagedInstanceScalingScaleInStrategy | undefined;

  /**
   * The maximum number of instances that the endpoint can terminate at a time during a consolidation scale-in operation.
   *
   * Default value: `1`.
   *
   * @public
   */
  MaximumStepSize?: number | undefined;

  /**
   * The cooldown period, in minutes, after the last endpoint operation before the endpoint evaluates consolidation scale-in opportunities.
   *
   * Default value: `20`.
   *
   * @public
   */
  CooldownInMinutes?: number | undefined;
}

/**
 * Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic.
 *
 * @public
 */
export interface ProductionVariantManagedInstanceScaling {
  /**
   * Indicates whether managed instance scaling is enabled.
   *
   * @public
   */
  Status?: ManagedInstanceScalingStatus | undefined;

  /**
   * The minimum number of instances that the endpoint must retain when it scales down to accommodate a decrease in traffic.
   *
   * @public
   */
  MinInstanceCount?: number | undefined;

  /**
   * The maximum number of instances that the endpoint can provision when it scales up to accommodate an increase in traffic.
   *
   * @public
   */
  MaxInstanceCount?: number | undefined;

  /**
   * Configures the scale-in behavior for managed instance scaling.
   *
   * @public
   */
  ScaleInPolicy?: ProductionVariantManagedInstanceScalingScaleInPolicy | undefined;
}

/**
 * The configuration for prefix-aware routing on a SageMaker real-time inference endpoint. Specify `PrefixLength` and `ConcurrencyThreshold` to control routing behavior.
 *
 * @public
 */
export interface PrefixAwareRoutingConfig {
  /**
   * The maximum length of the prefix used for routing decisions. Required when `RoutingStrategy` is `PREFIX_AWARE`.
   *
   * - For the SageMaker Runtime `InvokeEndpoint` and `InvokeEndpointWithResponseStream` APIs, this value specifies the number of bytes from the beginning of the request body.
   * - For OpenAI-compatible API, this value specifies the number of characters from the text content of the messages array.
   *
   * The endpoint routes requests that share the same prefix to the same instance and, when that instance hosts more than one copy of the invoked inference component, to the same copy. Set this value to cover shared content (such as system prompts) plus enough unique content to distribute workloads across instances and copies.
   *
   * @public
   */
  PrefixLength?: number | undefined;

  /**
   * The number of in-flight requests on the selected instance or inference component copy at which the endpoint routes a request to another copy or instance. Required when `RoutingStrategy` is `PREFIX_AWARE`.
   *
   * On an endpoint without inference components, the endpoint compares this threshold with the number of in-flight requests on the selected instance. When that number reaches the threshold, the endpoint routes the request to another instance.
   *
   * On an endpoint with inference components, the endpoint compares this threshold with the number of in-flight requests on the selected copy of the invoked inference component. Requests to other inference components on the same instance don't count. When the instance hosts more than one copy of the inference component, the endpoint routes requests that share a prefix to the same copy and, while that copy has reached the threshold, to another copy on the instance that is under the threshold. When every copy on the instance has reached the threshold, the endpoint routes the request to another instance.
   *
   * The threshold applies to every instance and every copy of every inference component in the production variant, so choose a value that suits the instance or copy that can serve the fewest concurrent requests.
   *
   * @public
   */
  ConcurrencyThreshold?: number | undefined;
}

/**
 * Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts.
 *
 * @public
 */
export interface ProductionVariantRoutingConfig {
  /**
   * Sets how the endpoint routes incoming traffic:
   *
   * - `LEAST_OUTSTANDING_REQUESTS`: The endpoint routes requests to the specific instances that have more capacity to process them.
   * - `RANDOM`: The endpoint routes each request to a randomly chosen instance.
   * - `PREFIX_AWARE`: The endpoint routes requests that share the same prompt prefix to the same instance and, when that instance hosts more than one copy of the invoked inference component, to the same copy. When the number of in-flight requests on the selected instance or copy reaches the `ConcurrencyThreshold` value, the endpoint routes the request to another copy on that instance or to another instance. The endpoint applies prefix-aware routing only when two or more instances can serve the request.
   *
   * @public
   */
  RoutingStrategy: RoutingStrategy | undefined;

  /**
   * The configuration for prefix-aware routing. Specify this parameter only when you set `RoutingStrategy` to `PREFIX_AWARE`.
   *
   * @public
   */
  PrefixAwareRoutingConfig?: PrefixAwareRoutingConfig | undefined;
}

/**
 * Specifies the serverless configuration for an endpoint variant.
 *
 * @public
 */
export interface ProductionVariantServerlessConfig {
  /**
   * The memory size of your serverless endpoint. Valid values are in 1 GB increments: 1024 MB, 2048 MB, 3072 MB, 4096 MB, 5120 MB, or 6144 MB.
   *
   * @public
   */
  MemorySizeInMB: number | undefined;

  /**
   * The maximum number of concurrent invocations your serverless endpoint can process.
   *
   * @public
   */
  MaxConcurrency: number | undefined;

  /**
   * The amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to `MaxConcurrency`.
   *
   * > **Note:** This field is not supported for serverless endpoint recommendations for Inference Recommender jobs. For more information about creating an Inference Recommender job, see [CreateInferenceRecommendationsJobs](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceRecommendationsJob.html).
   *
   * @public
   */
  ProvisionedConcurrency?: number | undefined;
}

/**
 * Identifies a model that you want to host and the resources chosen to deploy for hosting it. If you are deploying multiple models, tell SageMaker how to distribute traffic among the models by specifying variant weights. For more information on production variants, check [Production variants](https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html).
 *
 * @public
 */
export interface ProductionVariant {
  /**
   * The name of the production variant.
   *
   * @public
   */
  VariantName: string | undefined;

  /**
   * The name of the model that you want to host. This is the name that you specified when creating the model.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * Number of instances to launch initially.
   *
   * @public
   */
  InitialInstanceCount?: number | undefined;

  /**
   * The ML compute instance type.
   *
   * @public
   */
  InstanceType?: ProductionVariantInstanceType | undefined;

  /**
   * A list of instance pools for the production variant. Each instance pool specifies an instance type and its priority for provisioning. Use instance pools to configure heterogeneous endpoints that deploy models across multiple instance types.
   *
   * @public
   */
  InstancePools?: InstancePool[] | undefined;

  /**
   * The timeout value, in seconds, for provisioning instances for the production variant. When SageMaker encounters an insufficient capacity error while provisioning instances, it retries with the next instance pool (if configured) or waits until the timeout expires. This timeout applies only to capacity provisioning and does not include the time for model download or container startup.
   *
   * Valid values: 300 to 3600.
   *
   * @public
   */
  VariantInstanceProvisionTimeoutInSeconds?: number | undefined;

  /**
   * Determines initial traffic distribution among all of the models that you specify in the endpoint configuration. The traffic to a production variant is determined by the ratio of the `VariantWeight` to the sum of all `VariantWeight` values across all ProductionVariants. If unspecified, it defaults to 1.0.
   *
   * @public
   */
  InitialVariantWeight?: number | undefined;

  /**
   * This parameter is no longer supported. Elastic Inference (EI) is no longer available.
   *
   * This parameter was used to specify the size of the EI instance to use for the production variant.
   *
   * @public
   */
  AcceleratorType?: ProductionVariantAcceleratorType | undefined;

  /**
   * Specifies configuration for a core dump from the model container when the process crashes.
   *
   * @public
   */
  CoreDumpConfig?: ProductionVariantCoreDumpConfig | undefined;

  /**
   * The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration.
   *
   * @public
   */
  ServerlessConfig?: ProductionVariantServerlessConfig | undefined;

  /**
   * The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant. Currently only Amazon EBS gp2 storage volumes are supported.
   *
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant.
   *
   * @public
   */
  ModelDataDownloadTimeoutInSeconds?: number | undefined;

  /**
   * The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting. For more information about health check, see [How Your Container Should Respond to Health Check (Ping) Requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests).
   *
   * @public
   */
  ContainerStartupHealthCheckTimeoutInSeconds?: number | undefined;

  /**
   * You can use this parameter to turn on native Amazon Web Services Systems Manager (SSM) access for a production variant behind an endpoint. By default, SSM access is disabled for all production variants behind an endpoint. You can turn on or turn off SSM access for a production variant behind an existing endpoint by creating a new endpoint configuration and calling `UpdateEndpoint`.
   *
   * @public
   */
  EnableSSMAccess?: boolean | undefined;

  /**
   * Settings that control the range in the number of instances that the endpoint provisions as it scales up or down to accommodate traffic.
   *
   * @public
   */
  ManagedInstanceScaling?: ProductionVariantManagedInstanceScaling | undefined;

  /**
   * Settings that control how the endpoint routes incoming traffic to the instances that the endpoint hosts.
   *
   * @public
   */
  RoutingConfig?: ProductionVariantRoutingConfig | undefined;

  /**
   * Specifies an option from a collection of preconfigured Amazon Machine Image (AMI) images. Each image is configured by Amazon Web Services with a set of software and driver versions. Amazon Web Services optimizes these configurations for different machine learning workloads.
   *
   * By selecting an AMI version, you can ensure that your inference environment is compatible with specific software requirements, such as CUDA driver versions, Linux kernel versions, or Amazon Web Services Neuron driver versions.
   *
   * The AMI version names, and their configurations, are the following:
   *
   * - **al2-ami-sagemaker-inference-gpu-2**
   *
   *   - Accelerator: GPU
   *   - NVIDIA driver version: 535
   *   - CUDA version: 12.2
   *
   * - **al2-ami-sagemaker-inference-gpu-2-1**
   *
   *   - Accelerator: GPU
   *   - NVIDIA driver version: 535
   *   - CUDA version: 12.2
   *   - NVIDIA Container Toolkit with disabled CUDA-compat mounting
   *
   * - **al2-ami-sagemaker-inference-gpu-3-1**
   *
   *   - Accelerator: GPU
   *   - NVIDIA driver version: 550
   *   - CUDA version: 12.4
   *   - NVIDIA Container Toolkit with disabled CUDA-compat mounting
   *
   * - **al2023-ami-sagemaker-inference-gpu-4-1**
   *
   *   - Accelerator: GPU
   *   - NVIDIA driver version: 580
   *   - CUDA version: 13.0
   *   - NVIDIA Container Toolkit with disabled CUDA-compat mounting
   *
   * - **al2-ami-sagemaker-inference-neuron-2**
   *
   *   - Accelerator: Inferentia2 and Trainium
   *   - Neuron driver version: 2.19
   *
   * @public
   */
  InferenceAmiVersion?: ProductionVariantInferenceAmiVersion | undefined;

  /**
   * Settings for the capacity reservation for the compute instances that SageMaker AI reserves for an endpoint.
   *
   * @public
   */
  CapacityReservationConfig?: ProductionVariantCapacityReservationConfig | undefined;

  /**
   * The accelerator partition layout for the accelerators backing this production variant. A layout lists the partition profiles to carve on the accelerators it applies to; on NVIDIA GPUs these are Multi-Instance GPU (MIG) profiles such as `mig-3g.40gb`. Specify a single layout: SageMaker applies it uniformly to every accelerator on the variant's instance type, and you place one inference component on each partition. Omit this field to use whole, unpartitioned accelerators.
   *
   * @public
   */
  AcceleratorPartitionLayouts?: AcceleratorPartitionLayout[] | undefined;
}

/**
 * @public
 */
export interface CreateEndpointConfigInput {
  /**
   * The name of the endpoint configuration. You specify this name in a [CreateEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html) request.
   *
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * An array of `ProductionVariant` objects, one for each model that you want to host at this endpoint.
   *
   * @public
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * Configuration to control how SageMaker AI captures inference data.
   *
   * @public
   */
  DataCaptureConfig?: DataCaptureConfig | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
   *
   * The KmsKeyId can be any of the following formats:
   *
   * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Key ARN: `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
   * - Alias name: `alias/ExampleAlias`
   * - Alias name ARN: `arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias`
   *
   * The KMS key policy must grant permission to the IAM role that you specify in your `CreateEndpoint`, `UpdateEndpoint` requests. For more information, refer to the Amazon Web Services Key Management Service section[Using Key Policies in Amazon Web Services KMS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html)
   *
   * > **Note:**
   * >
   * > Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. If any of the models that you specify in the `ProductionVariants` parameter use nitro-based instances with local storage, the `KmsKeyId` parameter does not encrypt instance local storage.
   * >
   * > For a list of instance types that support local instance storage, see [Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes).
   * >
   * > For more information about local instance storage encryption, see [SSD Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html).
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Specifies configuration for how an endpoint performs asynchronous inference. This is a required field in order for your Endpoint to be invoked using [InvokeEndpointAsync](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpointAsync.html).
   *
   * @public
   */
  AsyncInferenceConfig?: AsyncInferenceConfig | undefined;

  /**
   * A member of `CreateEndpointConfig` that enables explainers.
   *
   * @public
   */
  ExplainerConfig?: ExplainerConfig | undefined;

  /**
   * An array of `ProductionVariant` objects, one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on `ProductionVariants`. If you use this field, you can only specify one variant for `ProductionVariants` and one variant for `ShadowProductionVariants`.
   *
   * @public
   */
  ShadowProductionVariants?: ProductionVariant[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform actions on your behalf. For more information, see [SageMaker AI Roles](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html).
   *
   * > **Note:** To be able to pass this role to Amazon SageMaker AI, the caller of this action must have the `iam:PassRole` permission.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Sets whether all model containers deployed to the endpoint are isolated. If they are, no inbound or outbound network calls can be made to or from the model containers.
   *
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * The configuration parameters for utilization metrics.
   *
   * @public
   */
  MetricsConfig?: MetricsConfig | undefined;
}

/**
 * @public
 */
export interface CreateEndpointConfigOutput {
  /**
   * The Amazon Resource Name (ARN) of the endpoint configuration.
   *
   * @public
   */
  EndpointConfigArn: string | undefined;
}

/**
 * @public
 */
export interface CreateExperimentRequest {
  /**
   * The name of the experiment. The name must be unique in your Amazon Web Services account and is not case-sensitive.
   *
   * @public
   */
  ExperimentName: string | undefined;

  /**
   * The name of the experiment as displayed. The name doesn't need to be unique. If you don't specify `DisplayName`, the value in `ExperimentName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the experiment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of tags to associate with the experiment. You can use [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API to search on the tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateExperimentResponse {
  /**
   * The Amazon Resource Name (ARN) of the experiment.
   *
   * @public
   */
  ExperimentArn?: string | undefined;
}

/**
 * A list of features. You must include `FeatureName` and `FeatureType`. Valid feature `FeatureType`s are `Integral`, `Fractional` and `String`.
 *
 * @public
 */
export interface FeatureDefinition {
  /**
   * The name of a feature. The type must be a string. `FeatureName` cannot be any of the following: `is_deleted`, `write_time`, `api_invocation_time`.
   *
   * The name:
   *
   * - Must start with an alphanumeric character.
   * - Can only include alphanumeric characters, underscores, and hyphens. Spaces are not allowed.
   *
   * @public
   */
  FeatureName: string | undefined;

  /**
   * The value type of a feature. Valid values are Integral, Fractional, or String.
   *
   * @public
   */
  FeatureType: FeatureType | undefined;

  /**
   * A grouping of elements where each element within the collection must have the same feature type (`String`, `Integral`, or `Fractional`).
   *
   * - `List`: An ordered collection of elements.
   * - `Set`: An unordered collection of unique elements.
   * - `Vector`: A specialized list that represents a fixed-size array of elements. The vector dimension is determined by you. Must have elements with fractional feature types.
   *
   * @public
   */
  CollectionType?: CollectionType | undefined;

  /**
   * Configuration for your collection.
   *
   * @public
   */
  CollectionConfig?: CollectionConfig | undefined;
}

/**
 * The meta data of the Glue table which serves as data catalog for the `OfflineStore`.
 *
 * @public
 */
export interface DataCatalogConfig {
  /**
   * The name of the Glue table.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * The name of the Glue table catalog.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The name of the Glue table database.
   *
   * @public
   */
  Database: string | undefined;
}

/**
 * The Amazon Simple Storage (Amazon S3) location and security configuration for `OfflineStore`.
 *
 * @public
 */
export interface S3StorageConfig {
  /**
   * The S3 URI, or location in Amazon S3, of `OfflineStore`.
   *
   * S3 URIs have a format similar to the following: `s3://example-bucket/prefix/`.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The Amazon Web Services Key Management Service (KMS) key ARN of the key used to encrypt any objects written into the `OfflineStore` S3 location.
   *
   * The IAM `roleARN` that is passed as a parameter to `CreateFeatureGroup` must have below permissions to the `KmsKeyId`:
   *
   * - `"kms:GenerateDataKey"`
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The S3 path where offline records are written.
   *
   * @public
   */
  ResolvedOutputS3Uri?: string | undefined;
}

/**
 * The configuration of an `OfflineStore`.
 *
 * Provide an `OfflineStoreConfig` in a request to `CreateFeatureGroup` to create an `OfflineStore`.
 *
 * To encrypt an `OfflineStore` using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or `KMSKeyId`, in `S3StorageConfig`.
 *
 * @public
 */
export interface OfflineStoreConfig {
  /**
   * The Amazon Simple Storage (Amazon S3) location of `OfflineStore`.
   *
   * @public
   */
  S3StorageConfig: S3StorageConfig | undefined;

  /**
   * Set to `True` to disable the automatic creation of an Amazon Web Services Glue table when configuring an `OfflineStore`. If set to `True` and `DataCatalogConfig` is provided, Feature Store associates the provided catalog configuration with the feature group without creating a table. In this case, you are responsible for creating and managing the Glue table. If set to `True` without `DataCatalogConfig`, no Glue table is created or associated with the feature group. The `Iceberg` table format is only supported when this is set to `False`.
   *
   * If set to `False` and `DataCatalogConfig` is provided, Feature Store creates the table using the specified names. If set to `False` without `DataCatalogConfig`, Feature Store auto-generates the table name following [Athena's naming recommendations](https://docs.aws.amazon.com/athena/latest/ug/tables-databases-columns-names.html). This applies to both Glue and Apache Iceberg table formats.
   *
   * The default value is `False`.
   *
   * @public
   */
  DisableGlueTableCreation?: boolean | undefined;

  /**
   * The meta data of the Glue table for the `OfflineStore`. If not provided, Feature Store auto-generates the table name, database, and catalog when the `OfflineStore` is created. You can optionally provide this configuration to specify custom values. This applies to both Glue and Apache Iceberg table formats.
   *
   * @public
   */
  DataCatalogConfig?: DataCatalogConfig | undefined;

  /**
   * Format for the offline store table. Supported formats are Glue (Default) and [Apache Iceberg](https://iceberg.apache.org/).
   *
   * @public
   */
  TableFormat?: TableFormat | undefined;
}

/**
 * The security configuration for `OnlineStore`.
 *
 * @public
 */
export interface OnlineStoreSecurityConfig {
  /**
   * The Amazon Web Services Key Management Service (KMS) key ARN that SageMaker Feature Store uses to encrypt the Amazon S3 objects at rest using Amazon S3 server-side encryption.
   *
   * The caller (either user or IAM role) of `CreateFeatureGroup` must have below permissions to the `OnlineStore` `KmsKeyId`:
   *
   * - `"kms:Encrypt"`
   * - `"kms:Decrypt"`
   * - `"kms:DescribeKey"`
   * - `"kms:CreateGrant"`
   * - `"kms:RetireGrant"`
   * - `"kms:ReEncryptFrom"`
   * - `"kms:ReEncryptTo"`
   * - `"kms:GenerateDataKey"`
   * - `"kms:ListAliases"`
   * - `"kms:ListGrants"`
   * - `"kms:RevokeGrant"`
   *
   * The caller (either user or IAM role) to all DataPlane operations (`PutRecord`, `GetRecord`, `DeleteRecord`) must have the following permissions to the `KmsKeyId`:
   *
   * - `"kms:Decrypt"`
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * Time to live duration, where the record is hard deleted after the expiration time is reached; `ExpiresAt` = `EventTime` + `TtlDuration`. For information on HardDelete, see the [DeleteRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) API in the Amazon SageMaker API Reference guide.
 *
 * @public
 */
export interface TtlDuration {
  /**
   * `TtlDuration` time unit.
   *
   * @public
   */
  Unit?: TtlDurationUnit | undefined;

  /**
   * `TtlDuration` time value.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or `KMSKeyId`, for at rest data encryption. You can turn `OnlineStore` on or off by specifying the `EnableOnlineStore` flag at General Assembly.
 *
 * The default value is `False`.
 *
 * @public
 */
export interface OnlineStoreConfig {
  /**
   * Use to specify KMS Key ID (`KMSKeyId`) for at-rest encryption of your `OnlineStore`.
   *
   * @public
   */
  SecurityConfig?: OnlineStoreSecurityConfig | undefined;

  /**
   * Turn `OnlineStore` off by specifying `False` for the `EnableOnlineStore` flag. Turn `OnlineStore` on by specifying `True` for the `EnableOnlineStore` flag.
   *
   * The default value is `False`.
   *
   * @public
   */
  EnableOnlineStore?: boolean | undefined;

  /**
   * Time to live duration, where the record is hard deleted after the expiration time is reached; `ExpiresAt` = `EventTime` + `TtlDuration`. For information on HardDelete, see the [DeleteRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) API in the Amazon SageMaker API Reference guide.
   *
   * @public
   */
  TtlDuration?: TtlDuration | undefined;

  /**
   * Option for different tiers of low latency storage for real-time data retrieval.
   *
   * - `Standard`: A managed low latency data store for feature groups.
   * - `Standard_V2`: A managed low latency data store for feature groups that supports partial updates to individual features using the [UpdateRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_UpdateRecord.html) operation. Choose this storage type at feature group creation time if your use case requires updating specific feature values without rewriting the entire record.
   * - `InMemory`: A managed data store for feature groups that supports very low latency retrieval.
   *
   * @public
   */
  StorageType?: StorageType | undefined;
}

/**
 * Used to set feature group throughput configuration. There are two modes: `ON_DEMAND` and `PROVISIONED`. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled.
 *
 * Note: `PROVISIONED` throughput mode is supported only for feature groups that are offline-only, or use the [`Standard`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType) tier online store.
 *
 * @public
 */
export interface ThroughputConfig {
  /**
   * The mode used for your feature group throughput: `ON_DEMAND` or `PROVISIONED`.
   *
   * @public
   */
  ThroughputMode: ThroughputMode | undefined;

  /**
   * For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling.
   *
   * This field is not applicable for on-demand feature groups.
   *
   * @public
   */
  ProvisionedReadCapacityUnits?: number | undefined;

  /**
   * For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling.
   *
   * This field is not applicable for on-demand feature groups.
   *
   * @public
   */
  ProvisionedWriteCapacityUnits?: number | undefined;
}

/**
 * @public
 */
export interface CreateFeatureGroupRequest {
  /**
   * The name of the `FeatureGroup`. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.
   *
   * The name:
   *
   * - Must start with an alphanumeric character.
   * - Can only include alphanumeric characters, underscores, and hyphens. Spaces are not allowed.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The name of the `Feature` whose value uniquely identifies a `Record` defined in the `FeatureStore`. Only the latest record per identifier value will be stored in the `OnlineStore`. `RecordIdentifierFeatureName` must be one of feature definitions' names.
   *
   * You use the `RecordIdentifierFeatureName` to access data in a `FeatureStore`.
   *
   * This name:
   *
   * - Must start with an alphanumeric character.
   * - Can only contains alphanumeric characters, hyphens, underscores. Spaces are not allowed.
   *
   * @public
   */
  RecordIdentifierFeatureName: string | undefined;

  /**
   * The name of the feature that stores the `EventTime` of a `Record` in a `FeatureGroup`.
   *
   * An `EventTime` is a point in time when a new event occurs that corresponds to the creation or update of a `Record` in a `FeatureGroup`. All `Records` in the `FeatureGroup` must have a corresponding `EventTime`.
   *
   * An `EventTime` can be a `String` or `Fractional`.
   *
   * - `Fractional`: `EventTime` feature values must be a Unix timestamp in seconds.
   * - `String`: `EventTime` feature values must be an ISO-8601 string in the format. The following formats are supported `yyyy-MM-dd'T'HH:mm:ssZ` and `yyyy-MM-dd'T'HH:mm:ss.SSSZ` where `yyyy`, `MM`, and `dd` represent the year, month, and day respectively and `HH`, `mm`, `ss`, and if applicable, `SSS` represent the hour, month, second and milliseconds respsectively. `'T'` and `Z` are constants.
   *
   * @public
   */
  EventTimeFeatureName: string | undefined;

  /**
   * A list of `Feature` names and types. `Name` and `Type` is compulsory per `Feature`.
   *
   * Valid feature `FeatureType`s are `Integral`, `Fractional` and `String`.
   *
   * `FeatureName`s cannot be any of the following: `is_deleted`, `write_time`, `api_invocation_time`
   *
   * You can create up to 2,500 `FeatureDefinition`s per `FeatureGroup`.
   *
   * @public
   */
  FeatureDefinitions: FeatureDefinition[] | undefined;

  /**
   * You can turn the `OnlineStore` on or off by specifying `True` for the `EnableOnlineStore` flag in `OnlineStoreConfig`.
   *
   * You can also include an Amazon Web Services KMS key ID (`KMSKeyId`) for at-rest encryption of the `OnlineStore`.
   *
   * The default value is `False`.
   *
   * @public
   */
  OnlineStoreConfig?: OnlineStoreConfig | undefined;

  /**
   * Use this to configure an `OfflineFeatureStore`. This parameter allows you to specify:
   *
   * - The Amazon Simple Storage Service (Amazon S3) location of an `OfflineStore`.
   * - A configuration for an Amazon Web Services Glue or Amazon Web Services Hive data catalog.
   * - An KMS encryption key to encrypt the Amazon S3 location used for `OfflineStore`. If KMS encryption key is not specified, by default we encrypt all data at rest using Amazon Web Services KMS key. By defining your [bucket-level key](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-key.html) for SSE, you can reduce Amazon Web Services KMS requests costs by up to 99 percent.
   * - Format for the offline store table. Supported formats are Glue (Default) and [Apache Iceberg](https://iceberg.apache.org/).
   *
   * To learn more about this parameter, see [OfflineStoreConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OfflineStoreConfig.html).
   *
   * @public
   */
  OfflineStoreConfig?: OfflineStoreConfig | undefined;

  /**
   * Used to set feature group throughput configuration. There are two modes: `ON_DEMAND` and `PROVISIONED`. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled.
   *
   * Note: `PROVISIONED` throughput mode is supported only for feature groups that are offline-only, or use the [`Standard`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType) tier online store.
   *
   * @public
   */
  ThroughputConfig?: ThroughputConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the `OfflineStore` if an `OfflineStoreConfig` is provided.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A free-form description of a `FeatureGroup`.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Tags used to identify `Features` in each `FeatureGroup`.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateFeatureGroupResponse {
  /**
   * The Amazon Resource Name (ARN) of the `FeatureGroup`. This is a unique identifier for the feature group.
   *
   * @public
   */
  FeatureGroupArn: string | undefined;
}

/**
 * Defines under what conditions SageMaker creates a human loop. Used within [CreateFlowDefinition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateFlowDefinition.html). See [HumanLoopActivationConditionsConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HumanLoopActivationConditionsConfig.html) for the required format of activation conditions.
 *
 * @public
 */
export interface HumanLoopActivationConditionsConfig {
  /**
   * JSON expressing use-case specific conditions declaratively. If any condition is matched, atomic tasks are created against the configured work team. The set of conditions is different for Rekognition and Textract. For more information about how to structure the JSON, see [JSON Schema for Human Loop Activation Conditions in Amazon Augmented AI](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-human-fallback-conditions-json-schema.html) in the *Amazon SageMaker Developer Guide*.
   *
   * @public
   */
  HumanLoopActivationConditions: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * Provides information about how and under what conditions SageMaker creates a human loop. If `HumanLoopActivationConfig` is not given, then all requests go to humans.
 *
 * @public
 */
export interface HumanLoopActivationConfig {
  /**
   * Container structure for defining under what conditions SageMaker creates a human loop.
   *
   * @public
   */
  HumanLoopActivationConditionsConfig: HumanLoopActivationConditionsConfig | undefined;
}

/**
 * Represents an amount of money in United States dollars.
 *
 * @public
 */
export interface USD {
  /**
   * The whole number of dollars in the amount.
   *
   * @public
   */
  Dollars?: number | undefined;

  /**
   * The fractional portion, in cents, of the amount.
   *
   * @public
   */
  Cents?: number | undefined;

  /**
   * Fractions of a cent, in tenths.
   *
   * @public
   */
  TenthFractionsOfACent?: number | undefined;
}

/**
 * Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed.
 *
 * Use one of the following prices for bounding box tasks. Prices are in US dollars and should be based on the complexity of the task; the longer it takes in your initial testing, the more you should offer.
 *
 * - 0.036
 * - 0.048
 * - 0.060
 * - 0.072
 * - 0.120
 * - 0.240
 * - 0.360
 * - 0.480
 * - 0.600
 * - 0.720
 * - 0.840
 * - 0.960
 * - 1.080
 * - 1.200
 *
 * Use one of the following prices for image classification, text classification, and custom tasks. Prices are in US dollars.
 *
 * - 0.012
 * - 0.024
 * - 0.036
 * - 0.048
 * - 0.060
 * - 0.072
 * - 0.120
 * - 0.240
 * - 0.360
 * - 0.480
 * - 0.600
 * - 0.720
 * - 0.840
 * - 0.960
 * - 1.080
 * - 1.200
 *
 * Use one of the following prices for semantic segmentation tasks. Prices are in US dollars.
 *
 * - 0.840
 * - 0.960
 * - 1.080
 * - 1.200
 *
 * Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon Augmented AI review tasks. Prices are in US dollars.
 *
 * - 2.400
 * - 2.280
 * - 2.160
 * - 2.040
 * - 1.920
 * - 1.800
 * - 1.680
 * - 1.560
 * - 1.440
 * - 1.320
 * - 1.200
 * - 1.080
 * - 0.960
 * - 0.840
 * - 0.720
 * - 0.600
 * - 0.480
 * - 0.360
 * - 0.240
 * - 0.120
 * - 0.072
 * - 0.060
 * - 0.048
 * - 0.036
 * - 0.024
 * - 0.012
 *
 * Use one of the following prices for Rekognition DetectModerationLabels Amazon Augmented AI review tasks. Prices are in US dollars.
 *
 * - 1.200
 * - 1.080
 * - 0.960
 * - 0.840
 * - 0.720
 * - 0.600
 * - 0.480
 * - 0.360
 * - 0.240
 * - 0.120
 * - 0.072
 * - 0.060
 * - 0.048
 * - 0.036
 * - 0.024
 * - 0.012
 *
 * Use one of the following prices for Amazon Augmented AI custom human review tasks. Prices are in US dollars.
 *
 * - 1.200
 * - 1.080
 * - 0.960
 * - 0.840
 * - 0.720
 * - 0.600
 * - 0.480
 * - 0.360
 * - 0.240
 * - 0.120
 * - 0.072
 * - 0.060
 * - 0.048
 * - 0.036
 * - 0.024
 * - 0.012
 *
 * @public
 */
export interface PublicWorkforceTaskPrice {
  /**
   * Defines the amount of money paid to an Amazon Mechanical Turk worker in United States dollars.
   *
   * @public
   */
  AmountInUsd?: USD | undefined;
}

/**
 * Describes the work to be performed by human workers.
 *
 * @public
 */
export interface HumanLoopConfig {
  /**
   * Amazon Resource Name (ARN) of a team of workers. To learn more about the types of workforces and work teams you can create and use with Amazon A2I, see [Create and Manage Workforces](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-management.html).
   *
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the human task user interface.
   *
   * You can use standard HTML and Crowd HTML Elements to create a custom worker task template. You use this template to create a human task UI.
   *
   * To learn how to create a custom HTML template, see [Create Custom Worker Task Template](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-custom-templates.html).
   *
   * To learn how to create a human task UI, which is a worker task template that can be used in a flow definition, see [Create and Delete a Worker Task Templates](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-worker-template-console.html).
   *
   * @public
   */
  HumanTaskUiArn: string | undefined;

  /**
   * A title for the human worker task.
   *
   * @public
   */
  TaskTitle: string | undefined;

  /**
   * A description for the human worker task.
   *
   * @public
   */
  TaskDescription: string | undefined;

  /**
   * The number of distinct workers who will perform the same task on each object. For example, if `TaskCount` is set to `3` for an image classification labeling job, three workers will classify each input image. Increasing `TaskCount` can improve label accuracy.
   *
   * @public
   */
  TaskCount: number | undefined;

  /**
   * The length of time that a task remains available for review by human workers.
   *
   * @public
   */
  TaskAvailabilityLifetimeInSeconds?: number | undefined;

  /**
   * The amount of time that a worker has to complete a task. The default value is 3,600 seconds (1 hour).
   *
   * @public
   */
  TaskTimeLimitInSeconds?: number | undefined;

  /**
   * Keywords used to describe the task so that workers can discover the task.
   *
   * @public
   */
  TaskKeywords?: string[] | undefined;

  /**
   * Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed.
   *
   * Use one of the following prices for bounding box tasks. Prices are in US dollars and should be based on the complexity of the task; the longer it takes in your initial testing, the more you should offer.
   *
   * - 0.036
   * - 0.048
   * - 0.060
   * - 0.072
   * - 0.120
   * - 0.240
   * - 0.360
   * - 0.480
   * - 0.600
   * - 0.720
   * - 0.840
   * - 0.960
   * - 1.080
   * - 1.200
   *
   * Use one of the following prices for image classification, text classification, and custom tasks. Prices are in US dollars.
   *
   * - 0.012
   * - 0.024
   * - 0.036
   * - 0.048
   * - 0.060
   * - 0.072
   * - 0.120
   * - 0.240
   * - 0.360
   * - 0.480
   * - 0.600
   * - 0.720
   * - 0.840
   * - 0.960
   * - 1.080
   * - 1.200
   *
   * Use one of the following prices for semantic segmentation tasks. Prices are in US dollars.
   *
   * - 0.840
   * - 0.960
   * - 1.080
   * - 1.200
   *
   * Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon Augmented AI review tasks. Prices are in US dollars.
   *
   * - 2.400
   * - 2.280
   * - 2.160
   * - 2.040
   * - 1.920
   * - 1.800
   * - 1.680
   * - 1.560
   * - 1.440
   * - 1.320
   * - 1.200
   * - 1.080
   * - 0.960
   * - 0.840
   * - 0.720
   * - 0.600
   * - 0.480
   * - 0.360
   * - 0.240
   * - 0.120
   * - 0.072
   * - 0.060
   * - 0.048
   * - 0.036
   * - 0.024
   * - 0.012
   *
   * Use one of the following prices for Rekognition DetectModerationLabels Amazon Augmented AI review tasks. Prices are in US dollars.
   *
   * - 1.200
   * - 1.080
   * - 0.960
   * - 0.840
   * - 0.720
   * - 0.600
   * - 0.480
   * - 0.360
   * - 0.240
   * - 0.120
   * - 0.072
   * - 0.060
   * - 0.048
   * - 0.036
   * - 0.024
   * - 0.012
   *
   * Use one of the following prices for Amazon Augmented AI custom human review tasks. Prices are in US dollars.
   *
   * - 1.200
   * - 1.080
   * - 0.960
   * - 0.840
   * - 0.720
   * - 0.600
   * - 0.480
   * - 0.360
   * - 0.240
   * - 0.120
   * - 0.072
   * - 0.060
   * - 0.048
   * - 0.036
   * - 0.024
   * - 0.012
   *
   * @public
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice | undefined;
}

/**
 * Container for configuring the source of human task requests.
 *
 * @public
 */
export interface HumanLoopRequestSource {
  /**
   * Specifies whether Amazon Rekognition or Amazon Textract are used as the integration source. The default field settings and JSON parsing rules are different based on the integration source. Valid values:
   *
   * @public
   */
  AwsManagedHumanLoopRequestSource: AwsManagedHumanLoopRequestSource | undefined;
}

/**
 * Contains information about where human output will be stored.
 *
 * @public
 */
export interface FlowDefinitionOutputConfig {
  /**
   * The Amazon S3 path where the object containing human output will be made available.
   *
   * To learn more about the format of Amazon A2I output data, see [Amazon A2I Output Data](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-output-data.html).
   *
   * @public
   */
  S3OutputPath: string | undefined;

  /**
   * The Amazon Key Management Service (KMS) key ID for server-side encryption.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateFlowDefinitionRequest {
  /**
   * The name of your flow definition.
   *
   * @public
   */
  FlowDefinitionName: string | undefined;

  /**
   * Container for configuring the source of human task requests. Use to specify if Amazon Rekognition or Amazon Textract is used as an integration source.
   *
   * @public
   */
  HumanLoopRequestSource?: HumanLoopRequestSource | undefined;

  /**
   * An object containing information about the events that trigger a human workflow.
   *
   * @public
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig | undefined;

  /**
   * An object containing information about the tasks the human reviewers will perform.
   *
   * @public
   */
  HumanLoopConfig?: HumanLoopConfig | undefined;

  /**
   * An object containing information about where the human review results will be uploaded.
   *
   * @public
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role needed to call other services on your behalf. For example, `arn:aws:iam::1234567890:role/service-role/AmazonSageMaker-ExecutionRole-20180111T151298`.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * An array of key-value pairs that contain metadata to help you categorize and organize a flow definition. Each tag consists of a key and a value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateFlowDefinitionResponse {
  /**
   * The Amazon Resource Name (ARN) of the flow definition you create.
   *
   * @public
   */
  FlowDefinitionArn: string | undefined;
}

/**
 * The Amazon S3 storage configuration of a hub.
 *
 * @public
 */
export interface HubS3StorageConfig {
  /**
   * The Amazon S3 bucket prefix for hosting hub content.
   *
   * @public
   */
  S3OutputPath?: string | undefined;
}

/**
 * @public
 */
export interface CreateHubRequest {
  /**
   * The name of the hub to create.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * A description of the hub.
   *
   * @public
   */
  HubDescription: string | undefined;

  /**
   * The display name of the hub.
   *
   * @public
   */
  HubDisplayName?: string | undefined;

  /**
   * The searchable keywords for the hub.
   *
   * @public
   */
  HubSearchKeywords?: string[] | undefined;

  /**
   * The Amazon S3 storage configuration for the hub.
   *
   * @public
   */
  S3StorageConfig?: HubS3StorageConfig | undefined;

  /**
   * Any tags to associate with the hub.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHubResponse {
  /**
   * The Amazon Resource Name (ARN) of the hub.
   *
   * @public
   */
  HubArn: string | undefined;
}

/**
 * Configuration for accessing hub content through presigned URLs, including license agreement acceptance and URL validation settings.
 *
 * @public
 */
export interface PresignedUrlAccessConfig {
  /**
   * Indicates acceptance of the End User License Agreement (EULA) for gated models. Set to true to acknowledge acceptance of the license terms required for accessing gated content.
   *
   * @public
   */
  AcceptEula?: boolean | undefined;

  /**
   * The expected S3 URL prefix for validation purposes. This parameter helps ensure consistency between the resolved S3 URIs and the deployment configuration, reducing potential compatibility issues.
   *
   * @public
   */
  ExpectedS3Url?: string | undefined;
}

/**
 * @public
 */
export interface CreateHubContentPresignedUrlsRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the hub that contains the content. For public content, use `SageMakerPublicHub`.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The type of hub content to access. Valid values include `Model`, `Notebook`, and `ModelReference`.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * The name of the hub content for which to generate presigned URLs. This identifies the specific model or content within the hub.
   *
   * @public
   */
  HubContentName: string | undefined;

  /**
   * The version of the hub content. If not specified, the latest version is used.
   *
   * @public
   */
  HubContentVersion?: string | undefined;

  /**
   * Configuration settings for accessing the hub content, including end-user license agreement acceptance for gated models and expected S3 URL validation.
   *
   * @public
   */
  AccessConfig?: PresignedUrlAccessConfig | undefined;

  /**
   * The maximum number of presigned URLs to return in the response. Default value is 100. Large models may contain hundreds of files, requiring pagination to retrieve all URLs.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token for pagination. Use this token to retrieve the next set of presigned URLs when the response is truncated.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateHubContentPresignedUrlsResponse {
  /**
   * An array of authorized URL configurations, each containing a presigned URL and its corresponding local file path for proper file organization during download.
   *
   * @public
   */
  AuthorizedUrlConfigs: AuthorizedUrl[] | undefined;

  /**
   * A token for pagination. If present, indicates that more presigned URLs are available. Use this token in a subsequent request to retrieve additional URLs.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateHubContentReferenceRequest {
  /**
   * The name of the hub to add the hub content reference to.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The ARN of the public hub content to reference.
   *
   * @public
   */
  SageMakerPublicHubContentArn: string | undefined;

  /**
   * The name of the hub content to reference.
   *
   * @public
   */
  HubContentName?: string | undefined;

  /**
   * The minimum version of the hub content to reference.
   *
   * @public
   */
  MinVersion?: string | undefined;

  /**
   * Any tags associated with the hub content to reference.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHubContentReferenceResponse {
  /**
   * The ARN of the hub that the hub content reference was added to.
   *
   * @public
   */
  HubArn: string | undefined;

  /**
   * The ARN of the hub content.
   *
   * @public
   */
  HubContentArn: string | undefined;
}

/**
 * The Liquid template for the worker user interface.
 *
 * @public
 */
export interface UiTemplate {
  /**
   * The content of the Liquid template for the worker user interface.
   *
   * @public
   */
  Content: string | undefined;
}

/**
 * @public
 */
export interface CreateHumanTaskUiRequest {
  /**
   * The name of the user interface you are creating.
   *
   * @public
   */
  HumanTaskUiName: string | undefined;

  /**
   * The Liquid template for the worker user interface.
   *
   * @public
   */
  UiTemplate: UiTemplate | undefined;

  /**
   * An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. Each tag consists of a key and a value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHumanTaskUiResponse {
  /**
   * The Amazon Resource Name (ARN) of the human review workflow user interface you create.
   *
   * @public
   */
  HumanTaskUiArn: string | undefined;
}

/**
 * For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches.
 *
 * @public
 */
export interface IntegerParameterRange {
  /**
   * The name of the hyperparameter to search.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The minimum value of the hyperparameter to search.
   *
   * @public
   */
  MinValue: string | undefined;

  /**
   * The maximum value of the hyperparameter to search.
   *
   * @public
   */
  MaxValue: string | undefined;

  /**
   * The scale that hyperparameter tuning uses to search the hyperparameter range. For information about choosing a hyperparameter scale, see [Hyperparameter Scaling](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type). One of the following values:
   *
   * - **Auto**
   *
   *   SageMaker hyperparameter tuning chooses the best scale for the hyperparameter.
   *
   * - **Linear**
   *
   *   Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.
   *
   * - **Logarithmic**
   *
   *   Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale.
   *
   *   Logarithmic scaling works only for ranges that have only values greater than 0.
   *
   * @public
   */
  ScalingType?: HyperParameterScalingType | undefined;
}

/**
 * Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.
 *
 * > **Note:** The maximum number of items specified for `Array Members` refers to the maximum number of hyperparameters for each range and also the maximum for the hyperparameter tuning job itself. That is, the sum of the number of hyperparameters for all the ranges can't exceed the maximum number specified.
 *
 * @public
 */
export interface ParameterRanges {
  /**
   * The array of [IntegerParameterRange](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_IntegerParameterRange.html) objects that specify ranges of integer hyperparameters that a hyperparameter tuning job searches.
   *
   * @public
   */
  IntegerParameterRanges?: IntegerParameterRange[] | undefined;

  /**
   * The array of [ContinuousParameterRange](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ContinuousParameterRange.html) objects that specify ranges of continuous hyperparameters that a hyperparameter tuning job searches.
   *
   * @public
   */
  ContinuousParameterRanges?: ContinuousParameterRange[] | undefined;

  /**
   * The array of [CategoricalParameterRange](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CategoricalParameterRange.html) objects that specify ranges of categorical hyperparameters that a hyperparameter tuning job searches.
   *
   * @public
   */
  CategoricalParameterRanges?: CategoricalParameterRange[] | undefined;

  /**
   * A list containing hyperparameter names and example values to be used by Autotune to determine optimal ranges for your tuning job.
   *
   * @public
   */
  AutoParameters?: AutoParameter[] | undefined;
}

/**
 * Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.
 *
 * @public
 */
export interface ResourceLimits {
  /**
   * The maximum number of training jobs that a hyperparameter tuning job can launch.
   *
   * @public
   */
  MaxNumberOfTrainingJobs?: number | undefined;

  /**
   * The maximum number of concurrent training jobs that a hyperparameter tuning job can launch.
   *
   * @public
   */
  MaxParallelTrainingJobs: number | undefined;

  /**
   * The maximum time in seconds that a hyperparameter tuning job can run.
   *
   * @public
   */
  MaxRuntimeInSeconds?: number | undefined;
}

/**
 * The configuration for `Hyperband`, a multi-fidelity based hyperparameter tuning strategy. `Hyperband` uses the final and intermediate results of a training job to dynamically allocate resources to utilized hyperparameter configurations while automatically stopping under-performing configurations. This parameter should be provided only if `Hyperband` is selected as the `StrategyConfig` under the `HyperParameterTuningJobConfig` API.
 *
 * @public
 */
export interface HyperbandStrategyConfig {
  /**
   * The minimum number of resources (such as epochs) that can be used by a training job launched by a hyperparameter tuning job. If the value for `MinResource` has not been reached, the training job is not stopped by `Hyperband`.
   *
   * @public
   */
  MinResource?: number | undefined;

  /**
   * The maximum number of resources (such as epochs) that can be used by a training job launched by a hyperparameter tuning job. Once a job reaches the `MaxResource` value, it is stopped. If a value for `MaxResource` is not provided, and `Hyperband` is selected as the hyperparameter tuning strategy, `HyperbandTraining` attempts to infer `MaxResource` from the following keys (if present) in [StaticsHyperParameters](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html#sagemaker-Type-HyperParameterTrainingJobDefinition-StaticHyperParameters):
   *
   * - `epochs`
   * - `numepochs`
   * - `n-epochs`
   * - `n_epochs`
   * - `num_epochs`
   *
   * If `HyperbandStrategyConfig` is unable to infer a value for `MaxResource`, it generates a validation error. The maximum value is 20,000 epochs. All metrics that correspond to an objective metric are used to derive [early stopping decisions](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-early-stopping.html). For [distributed](https://docs.aws.amazon.com/sagemaker/latest/dg/distributed-training.html) training jobs, ensure that duplicate metrics are not printed in the logs across the individual nodes in a training job. If multiple nodes are publishing duplicate or incorrect metrics, training jobs may make an incorrect stopping decision and stop the job prematurely.
   *
   * @public
   */
  MaxResource?: number | undefined;
}

/**
 * The configuration for a training job launched by a hyperparameter tuning job. Choose `Bayesian` for Bayesian optimization, and `Random` for random search optimization. For more advanced use cases, use `Hyperband`, which evaluates objective metrics for training jobs after every epoch. For more information about strategies, see [How Hyperparameter Tuning Works](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html).
 *
 * @public
 */
export interface HyperParameterTuningJobStrategyConfig {
  /**
   * The configuration for the object that specifies the `Hyperband` strategy. This parameter is only supported for the `Hyperband` selection for `Strategy` within the `HyperParameterTuningJobConfig` API.
   *
   * @public
   */
  HyperbandStrategyConfig?: HyperbandStrategyConfig | undefined;
}

/**
 * The job completion criteria.
 *
 * @public
 */
export interface TuningJobCompletionCriteria {
  /**
   * The value of the objective metric.
   *
   * @public
   */
  TargetObjectiveMetricValue?: number | undefined;

  /**
   * A flag to stop your hyperparameter tuning job if model performance fails to improve as evaluated against an objective function.
   *
   * @public
   */
  BestObjectiveNotImproving?: BestObjectiveNotImproving | undefined;

  /**
   * A flag to top your hyperparameter tuning job if automatic model tuning (AMT) has detected that your model has converged as evaluated against your objective function.
   *
   * @public
   */
  ConvergenceDetected?: ConvergenceDetected | undefined;
}

/**
 * Configures a hyperparameter tuning job.
 *
 * @public
 */
export interface HyperParameterTuningJobConfig {
  /**
   * Specifies how hyperparameter tuning chooses the combinations of hyperparameter values to use for the training job it launches. For information about search strategies, see [How Hyperparameter Tuning Works](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html).
   *
   * @public
   */
  Strategy: HyperParameterTuningJobStrategyType | undefined;

  /**
   * The configuration for the `Hyperband` optimization strategy. This parameter should be provided only if `Hyperband` is selected as the strategy for `HyperParameterTuningJobConfig`.
   *
   * @public
   */
  StrategyConfig?: HyperParameterTuningJobStrategyConfig | undefined;

  /**
   * The [HyperParameterTuningJobObjective](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobObjective.html) specifies the objective metric used to evaluate the performance of training jobs launched by this tuning job.
   *
   * @public
   */
  HyperParameterTuningJobObjective?: HyperParameterTuningJobObjective | undefined;

  /**
   * The [ResourceLimits](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html) object that specifies the maximum number of training and parallel training jobs that can be used for this hyperparameter tuning job.
   *
   * @public
   */
  ResourceLimits: ResourceLimits | undefined;

  /**
   * The [ParameterRanges](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ParameterRanges.html) object that specifies the ranges of hyperparameters that this tuning job searches over to find the optimal configuration for the highest model performance against your chosen objective metric.
   *
   * @public
   */
  ParameterRanges?: ParameterRanges | undefined;

  /**
   * Specifies whether to use early stopping for training jobs launched by the hyperparameter tuning job. Because the `Hyperband` strategy has its own advanced internal early stopping mechanism, `TrainingJobEarlyStoppingType` must be `OFF` to use `Hyperband`. This parameter can take on one of the following values (the default value is `OFF`):
   *
   * - **OFF**
   *
   *   Training jobs launched by the hyperparameter tuning job do not use early stopping.
   *
   * - **AUTO**
   *
   *   SageMaker stops training jobs launched by the hyperparameter tuning job when they are unlikely to perform better than previously completed training jobs. For more information, see [Stop Training Jobs Early](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-early-stopping.html).
   *
   * @public
   */
  TrainingJobEarlyStoppingType?: TrainingJobEarlyStoppingType | undefined;

  /**
   * The tuning job's completion criteria.
   *
   * @public
   */
  TuningJobCompletionCriteria?: TuningJobCompletionCriteria | undefined;

  /**
   * A value used to initialize a pseudo-random number generator. Setting a random seed and using the same seed later for the same tuning job will allow hyperparameter optimization to find more a consistent hyperparameter configuration between the two runs.
   *
   * @public
   */
  RandomSeed?: number | undefined;
}

/**
 * Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
 *
 * @public
 */
export interface HyperParameterAlgorithmSpecification {
  /**
   * The registry path of the Docker image that contains the training algorithm. For information about Docker registry paths for built-in algorithms, see [Algorithms Provided by Amazon SageMaker: Common Parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html). SageMaker supports both `registry/repository[:tag]` and `registry/repository[@digest]` image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
   *
   * @public
   */
  TrainingImage?: string | undefined;

  /**
   * The training input mode that the algorithm supports. For more information about input modes, see [Algorithms](https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html).
   *
   * **Pipe mode**
   *
   * If an algorithm supports `Pipe` mode, Amazon SageMaker streams data directly from Amazon S3 to the container.
   *
   * **File mode**
   *
   * If an algorithm supports `File` mode, SageMaker downloads the training data from S3 to the provisioned ML storage volume, and mounts the directory to the Docker volume for the training container.
   *
   * You must provision the ML storage volume with sufficient capacity to accommodate the data downloaded from S3. In addition to the training data, the ML storage volume also stores the output model. The algorithm container uses the ML storage volume to also store intermediate information, if any.
   *
   * For distributed algorithms, training data is distributed uniformly. Your training duration is predictable if the input data objects sizes are approximately the same. SageMaker does not split the files any further for model training. If the object sizes are skewed, training won't be optimal as the data distribution is also skewed when one host in a training cluster is overloaded, thus becoming a bottleneck in training.
   *
   * **FastFile mode**
   *
   * If an algorithm supports `FastFile` mode, SageMaker streams data directly from S3 to the container with no code changes, and provides file system access to the data. Users can author their training script to interact with these files as if they were stored on disk.
   *
   * `FastFile` mode works best when the data is read sequentially. Augmented manifest files aren't supported. The startup time is lower when there are fewer files in the S3 bucket provided.
   *
   * @public
   */
  TrainingInputMode: TrainingInputMode | undefined;

  /**
   * The name of the resource algorithm to use for the hyperparameter tuning job. If you specify a value for this parameter, do not specify a value for `TrainingImage`.
   *
   * @public
   */
  AlgorithmName?: string | undefined;

  /**
   * An array of [MetricDefinition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_MetricDefinition.html) objects that specify the metrics that the algorithm emits.
   *
   * @public
   */
  MetricDefinitions?: MetricDefinition[] | undefined;
}

/**
 * The configuration for hyperparameter tuning resources for use in training jobs launched by the tuning job. These resources include compute instances and storage volumes. Specify one or more compute instance configurations and allocation strategies to select resources (optional).
 *
 * @public
 */
export interface HyperParameterTuningInstanceConfig {
  /**
   * The instance type used for processing of hyperparameter optimization jobs. Choose from general purpose (no GPUs) instance types: ml.m5.xlarge, ml.m5.2xlarge, and ml.m5.4xlarge or compute optimized (no GPUs) instance types: ml.c5.xlarge and ml.c5.2xlarge. For more information about instance types, see [instance type descriptions](https://docs.aws.amazon.com/sagemaker/latest/dg/notebooks-available-instance-types.html).
   *
   * @public
   */
  InstanceType: TrainingInstanceType | undefined;

  /**
   * The number of instances of the type specified by `InstanceType`. Choose an instance count larger than 1 for distributed training algorithms. See [Step 2: Launch a SageMaker Distributed Training Job Using the SageMaker Python SDK](https://docs.aws.amazon.com/sagemaker/latest/dg/data-parallel-use-api.html) for more information.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * The volume size in GB of the data to be processed for hyperparameter optimization (optional).
   *
   * @public
   */
  VolumeSizeInGB: number | undefined;
}

/**
 * The configuration of resources, including compute instances and storage volumes for use in training jobs launched by hyperparameter tuning jobs. `HyperParameterTuningResourceConfig` is similar to `ResourceConfig`, but has the additional `InstanceConfigs` and `AllocationStrategy` fields to allow for flexible instance management. Specify one or more instance types, count, and the allocation strategy for instance selection.
 *
 * > **Note:** `HyperParameterTuningResourceConfig` supports the capabilities of `ResourceConfig` with the exception of `KeepAlivePeriodInSeconds`. Hyperparameter tuning jobs use warm pools by default, which reuse clusters between training jobs.
 *
 * @public
 */
export interface HyperParameterTuningResourceConfig {
  /**
   * The instance type used to run hyperparameter optimization tuning jobs. See [descriptions of instance types](https://docs.aws.amazon.com/sagemaker/latest/dg/notebooks-available-instance-types.html) for more information.
   *
   * @public
   */
  InstanceType?: TrainingInstanceType | undefined;

  /**
   * The number of compute instances of type `InstanceType` to use. For [distributed training](https://docs.aws.amazon.com/sagemaker/latest/dg/data-parallel-use-api.html), select a value greater than 1.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The volume size in GB for the storage volume to be used in processing hyperparameter optimization jobs (optional). These volumes store model artifacts, incremental states and optionally, scratch space for training algorithms. Do not provide a value for this parameter if a value for `InstanceConfigs` is also specified.
   *
   * Some instance types have a fixed total local storage size. If you select one of these instances for training, `VolumeSizeInGB` cannot be greater than this total size. For a list of instance types with local instance storage and their sizes, see [instance store volumes](http://aws.amazon.com/releasenotes/host-instance-storage-volumes-table/).
   *
   * > **Note:** SageMaker supports only the [General Purpose SSD (gp2)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html) storage volume type.
   *
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * A key used by Amazon Web Services Key Management Service to encrypt data on the storage volume attached to the compute instances used to run the training job. You can use either of the following formats to specify a key.
   *
   * KMS Key ID:
   *
   * `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * Amazon Resource Name (ARN) of a KMS key:
   *
   * `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * Some instances use local storage, which use a [hardware module to encrypt](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html) storage volumes. If you choose one of these instance types, you cannot request a `VolumeKmsKeyId`. For a list of instance types that use local storage, see [instance store volumes](http://aws.amazon.com/releasenotes/host-instance-storage-volumes-table/). For more information about Amazon Web Services Key Management Service, see [KMS encryption](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security-kms-permissions.html) for more information.
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * The strategy that determines the order of preference for resources specified in `InstanceConfigs` used in hyperparameter optimization.
   *
   * @public
   */
  AllocationStrategy?: HyperParameterTuningAllocationStrategy | undefined;

  /**
   * A list containing the configuration(s) for one or more resources for processing hyperparameter jobs. These resources include compute instances and storage volumes to use in model training jobs launched by hyperparameter tuning jobs. The `AllocationStrategy` controls the order in which multiple configurations provided in `InstanceConfigs` are used.
   *
   * > **Note:** If you only want to use a single instance configuration inside the `HyperParameterTuningResourceConfig` API, do not provide a value for `InstanceConfigs`. Instead, use `InstanceType`, `VolumeSizeInGB` and `InstanceCount`. If you use `InstanceConfigs`, do not provide values for `InstanceType`, `VolumeSizeInGB` or `InstanceCount`.
   *
   * @public
   */
  InstanceConfigs?: HyperParameterTuningInstanceConfig[] | undefined;
}

/**
 * The retry strategy to use when a training job fails due to an `InternalServerError`. `RetryStrategy` is specified as part of the `CreateTrainingJob` and `CreateHyperParameterTuningJob` requests. You can add the `StoppingCondition` parameter to the request to limit the training time for the complete job.
 *
 * @public
 */
export interface RetryStrategy {
  /**
   * The number of times to retry the job. When the job is retried, it's `SecondaryStatus` is changed to `STARTING`.
   *
   * @public
   */
  MaximumRetryAttempts: number | undefined;
}

/**
 * Defines the training jobs launched by a hyperparameter tuning job.
 *
 * @public
 */
export interface HyperParameterTrainingJobDefinition {
  /**
   * The job definition name.
   *
   * @public
   */
  DefinitionName?: string | undefined;

  /**
   * Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the `Type` parameter. If you want to define a custom objective metric, see [Define metrics and environment variables](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html).
   *
   * @public
   */
  TuningObjective?: HyperParameterTuningJobObjective | undefined;

  /**
   * Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.
   *
   * > **Note:** The maximum number of items specified for `Array Members` refers to the maximum number of hyperparameters for each range and also the maximum for the hyperparameter tuning job itself. That is, the sum of the number of hyperparameters for all the ranges can't exceed the maximum number specified.
   *
   * @public
   */
  HyperParameterRanges?: ParameterRanges | undefined;

  /**
   * Specifies the values of hyperparameters that do not change for the tuning job.
   *
   * @public
   */
  StaticHyperParameters?: Record<string, string> | undefined;

  /**
   * The [HyperParameterAlgorithmSpecification](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterAlgorithmSpecification.html) object that specifies the resource algorithm to use for the training jobs that the tuning job launches.
   *
   * @public
   */
  AlgorithmSpecification: HyperParameterAlgorithmSpecification | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the training jobs that the tuning job launches.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * An array of [Channel](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Channel.html) objects that specify the input for the training jobs that the tuning job launches.
   *
   * @public
   */
  InputDataConfig?: Channel[] | undefined;

  /**
   * The [VpcConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html) object that specifies the VPC that you want the training jobs that this hyperparameter tuning job launches to connect to. Control access to and from your training container by configuring the VPC. For more information, see [Protect Training Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Specifies the path to the Amazon S3 bucket where you store model artifacts from the training jobs that the tuning job launches.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The resources, including the compute instances and storage volumes, to use for the training jobs that the tuning job launches.
   *
   * Storage volumes store model artifacts and incremental states. Training algorithms might also use storage volumes for scratch space. If you want SageMaker to use the storage volume to store the training data, choose `File` as the `TrainingInputMode` in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1.
   *
   * > **Note:** If you want to use hyperparameter optimization with instance type flexibility, use `HyperParameterTuningResourceConfig` instead.
   *
   * @public
   */
  ResourceConfig?: ResourceConfig | undefined;

  /**
   * The configuration for the hyperparameter tuning resources, including the compute instances and storage volumes, used for training jobs launched by the tuning job. By default, storage volumes hold model artifacts and incremental states. Choose `File` for `TrainingInputMode` in the `AlgorithmSpecification` parameter to additionally store training data in the storage volume (optional).
   *
   * @public
   */
  HyperParameterTuningResourceConfig?: HyperParameterTuningResourceConfig | undefined;

  /**
   * Specifies a limit to how long a model hyperparameter training job can run. It also specifies how long a managed spot training job has to complete. When the job reaches the time limit, SageMaker ends the training job. Use this API to cap model training costs.
   *
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * Isolates the training container. No inbound or outbound network calls can be made, except for calls between peers within a training cluster for distributed training. If network isolation is used for training jobs that are configured to use a VPC, SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.
   *
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * To encrypt all communications between ML compute instances in distributed training, choose `True`. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithm in distributed training.
   *
   * @public
   */
  EnableInterContainerTrafficEncryption?: boolean | undefined;

  /**
   * A Boolean indicating whether managed spot training is enabled (`True`) or not (`False`).
   *
   * @public
   */
  EnableManagedSpotTraining?: boolean | undefined;

  /**
   * Contains information about the output location for managed spot training checkpoint data.
   *
   * @public
   */
  CheckpointConfig?: CheckpointConfig | undefined;

  /**
   * The number of times to retry the job when the job fails due to an `InternalServerError`.
   *
   * @public
   */
  RetryStrategy?: RetryStrategy | undefined;

  /**
   * An environment variable that you can pass into the SageMaker [CreateTrainingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html) API. You can use an existing [environment variable from the training container](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html#sagemaker-CreateTrainingJob-request-Environment) or use your own. See [Define metrics and variables](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html) for more information.
   *
   * > **Note:** The maximum number of items specified for `Map Entries` refers to the maximum number of environment variables for each `TrainingJobDefinition` and also the maximum for the hyperparameter tuning job itself. That is, the sum of the number of environment variables for all the training job definitions can't exceed the maximum number specified.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;
}

/**
 * A previously completed or stopped hyperparameter tuning job to be used as a starting point for a new hyperparameter tuning job.
 *
 * @public
 */
export interface ParentHyperParameterTuningJob {
  /**
   * The name of the hyperparameter tuning job to be used as a starting point for a new hyperparameter tuning job.
   *
   * @public
   */
  HyperParameterTuningJobName?: string | undefined;
}

/**
 * Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.
 *
 * All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.
 *
 * > **Note:** All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.
 *
 * @public
 */
export interface HyperParameterTuningJobWarmStartConfig {
  /**
   * An array of hyperparameter tuning jobs that are used as the starting point for the new hyperparameter tuning job. For more information about warm starting a hyperparameter tuning job, see [Using a Previous Hyperparameter Tuning Job as a Starting Point](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-warm-start.html).
   *
   * Hyperparameter tuning jobs created before October 1, 2018 cannot be used as parent jobs for warm start tuning jobs.
   *
   * @public
   */
  ParentHyperParameterTuningJobs: ParentHyperParameterTuningJob[] | undefined;

  /**
   * Specifies one of the following:
   *
   * - **IDENTICAL_DATA_AND_ALGORITHM**
   *
   *   The new hyperparameter tuning job uses the same input data and training image as the parent tuning jobs. You can change the hyperparameter ranges to search and the maximum number of training jobs that the hyperparameter tuning job launches. You cannot use a new version of the training algorithm, unless the changes in the new version do not affect the algorithm itself. For example, changes that improve logging or adding support for a different data format are allowed. You can also change hyperparameters from tunable to static, and from static to tunable, but the total number of static plus tunable hyperparameters must remain the same as it is in all parent jobs. The objective metric for the new tuning job must be the same as for all parent jobs.
   *
   * - **TRANSFER_LEARNING**
   *
   *   The new hyperparameter tuning job can include input data, hyperparameter ranges, maximum number of concurrent training jobs, and maximum number of training jobs that are different than those of its parent hyperparameter tuning jobs. The training image can also be a different version from the version used in the parent hyperparameter tuning job. You can also change hyperparameters from tunable to static, and from static to tunable, but the total number of static plus tunable hyperparameters must remain the same as it is in all parent jobs. The objective metric for the new tuning job must be the same as for all parent jobs.
   *
   * @public
   */
  WarmStartType: HyperParameterTuningJobWarmStartType | undefined;
}

/**
 * @public
 */
export interface CreateHyperParameterTuningJobRequest {
  /**
   * The name of the tuning job. This name is the prefix for the names of all training jobs that this tuning job launches. The name must be unique within the same Amazon Web Services account and Amazon Web Services Region. The name must have 1 to 32 characters. Valid characters are a-z, A-Z, 0-9, and : + = @ _ % - (hyphen). The name is not case sensitive.
   *
   * @public
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * The [HyperParameterTuningJobConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html) object that describes the tuning job, including the search strategy, the objective metric used to evaluate training jobs, ranges of parameters to search, and resource limits for the tuning job. For more information, see [How Hyperparameter Tuning Works](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html).
   *
   * @public
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * The [HyperParameterTrainingJobDefinition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html) object that describes the training jobs that this tuning job launches, including static hyperparameters, input data configuration, output data configuration, resource configuration, and stopping condition.
   *
   * @public
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition | undefined;

  /**
   * A list of the [HyperParameterTrainingJobDefinition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html) objects launched for this tuning job.
   *
   * @public
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[] | undefined;

  /**
   * Specifies the configuration for starting the hyperparameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.
   *
   * All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric. If you specify `IDENTICAL_DATA_AND_ALGORITHM` as the `WarmStartType` value for the warm start configuration, the training job that performs the best in the new tuning job is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.
   *
   * > **Note:** All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.
   *
   * @public
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * Tags that you specify for the tuning job are also added to all training jobs that the tuning job launches.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Configures SageMaker Automatic model tuning (AMT) to automatically find optimal parameters for the following fields:
   *
   * - [ParameterRanges](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html#sagemaker-Type-HyperParameterTuningJobConfig-ParameterRanges): The names and ranges of parameters that a hyperparameter tuning job can optimize.
   * - [ResourceLimits](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html): The maximum resources that can be used for a training job. These resources include the maximum number of training jobs, the maximum runtime of a tuning job, and the maximum number of training jobs to run at the same time.
   * - [TrainingJobEarlyStoppingType](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html#sagemaker-Type-HyperParameterTuningJobConfig-TrainingJobEarlyStoppingType): A flag that specifies whether or not to use early stopping for training jobs launched by a hyperparameter tuning job.
   * - [RetryStrategy](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html#sagemaker-Type-HyperParameterTrainingJobDefinition-RetryStrategy): The number of times to retry a training job.
   * - [Strategy](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html): Specifies how hyperparameter tuning chooses the combinations of hyperparameter values to use for the training jobs that it launches.
   * - [ConvergenceDetected](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ConvergenceDetected.html): A flag to indicate that Automatic model tuning (AMT) has detected model convergence.
   *
   * @public
   */
  Autotune?: Autotune | undefined;
}

/**
 * @public
 */
export interface CreateHyperParameterTuningJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the tuning job. SageMaker assigns an ARN to a hyperparameter tuning job when you create it.
   *
   * @public
   */
  HyperParameterTuningJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateImageRequest {
  /**
   * The description of the image.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name of the image. If not provided, `ImageName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The name of the image. Must be unique to your account.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * The ARN of an IAM role that enables Amazon SageMaker AI to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A list of tags to apply to the image.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateImageResponse {
  /**
   * The ARN of the image.
   *
   * @public
   */
  ImageArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateImageVersionRequest {
  /**
   * The registry path of the container image to use as the starting point for this version. The path is an Amazon ECR URI in the following format:
   *
   * `<acct-id>.dkr.ecr.<region>.amazonaws.com/<repo-name[:tag] or [@digest]>`
   *
   * @public
   */
  BaseImage: string | undefined;

  /**
   * A unique ID. If not specified, the Amazon Web Services CLI and Amazon Web Services SDKs, such as the SDK for Python (Boto3), add a unique value to the call.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The `ImageName` of the `Image` to create a version of.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * A list of aliases created with the image version.
   *
   * @public
   */
  Aliases?: string[] | undefined;

  /**
   * The stability of the image version, specified by the maintainer.
   *
   * - `NOT_PROVIDED`: The maintainers did not provide a status for image version stability.
   * - `STABLE`: The image version is stable.
   * - `TO_BE_ARCHIVED`: The image version is set to be archived. Custom image versions that are set to be archived are automatically archived after three months.
   * - `ARCHIVED`: The image version is archived. Archived image versions are not searchable and are no longer actively supported.
   *
   * @public
   */
  VendorGuidance?: VendorGuidance | undefined;

  /**
   * Indicates SageMaker AI job type compatibility.
   *
   * - `TRAINING`: The image version is compatible with SageMaker AI training jobs.
   * - `INFERENCE`: The image version is compatible with SageMaker AI inference jobs.
   * - `NOTEBOOK_KERNEL`: The image version is compatible with SageMaker AI notebook kernels.
   *
   * @public
   */
  JobType?: JobType | undefined;

  /**
   * The machine learning framework vended in the image version.
   *
   * @public
   */
  MLFramework?: string | undefined;

  /**
   * The supported programming language and its version.
   *
   * @public
   */
  ProgrammingLang?: string | undefined;

  /**
   * Indicates CPU or GPU compatibility.
   *
   * - `CPU`: The image version is compatible with CPU.
   * - `GPU`: The image version is compatible with GPU.
   *
   * @public
   */
  Processor?: Processor | undefined;

  /**
   * Indicates Horovod compatibility.
   *
   * @public
   */
  Horovod?: boolean | undefined;

  /**
   * The maintainer description of the image version.
   *
   * @public
   */
  ReleaseNotes?: string | undefined;
}

/**
 * @public
 */
export interface CreateImageVersionResponse {
  /**
   * The ARN of the image version.
   *
   * @public
   */
  ImageVersionArn?: string | undefined;
}

/**
 * Runtime settings for a model that is deployed with an inference component.
 *
 * @public
 */
export interface InferenceComponentRuntimeConfig {
  /**
   * The number of runtime copies of the model container to deploy with the inference component. Each copy can serve inference requests.
   *
   * @public
   */
  CopyCount: number | undefined;
}

/**
 * Defines the compute resources to allocate to run a model, plus any adapter models, that you assign to an inference component. These resources include CPU cores, accelerators, and memory.
 *
 * @public
 */
export interface InferenceComponentComputeResourceRequirements {
  /**
   * The number of CPU cores to allocate to run a model that you assign to an inference component.
   *
   * @public
   */
  NumberOfCpuCoresRequired?: number | undefined;

  /**
   * The number of accelerators to allocate to run a model that you assign to an inference component. Accelerators include GPUs and Amazon Web Services Inferentia.
   *
   * @public
   */
  NumberOfAcceleratorDevicesRequired?: number | undefined;

  /**
   * The minimum MB of memory to allocate to run a model that you assign to an inference component.
   *
   * @public
   */
  MinMemoryRequiredInMb: number | undefined;

  /**
   * The maximum MB of memory to allocate to run a model that you assign to an inference component.
   *
   * @public
   */
  MaxMemoryRequiredInMb?: number | undefined;

  /**
   * The accelerator partition profile this inference component occupies; on NVIDIA GPUs this is a Multi-Instance GPU (MIG) profile such as `mig-3g.40gb`. It must be one of the partition profiles declared in the target endpoint's accelerator partition layout, and when set, `NumberOfAcceleratorDevicesRequired` must be `1`. This field is required when the endpoint's production variant has an accelerator partition layout. For endpoints without a layout, omit this field to place the inference component on a whole accelerator.
   *
   * @public
   */
  AcceleratorPartitionType?: string | undefined;
}

/**
 * Defines a container that provides the runtime environment for a model that you deploy with an inference component.
 *
 * @public
 */
export interface InferenceComponentContainerSpecification {
  /**
   * The Amazon Elastic Container Registry (Amazon ECR) path where the Docker image for the model is stored.
   *
   * @public
   */
  Image?: string | undefined;

  /**
   * The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
   *
   * @public
   */
  ArtifactUrl?: string | undefined;

  /**
   * The environment variables to set in the Docker container. Each key and value in the Environment string-to-string map can have length of up to 1024. We support up to 16 entries in the map.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * The configuration for container metrics scraping. Specifies the metrics endpoint path and publishing frequency for the inference component's container. If not specified when `EnableDetailedObservability` is `True`, the default path `/metrics` on port `8080` is used. For first-party and Deep Learning Containers (DLC), the endpoint path is determined automatically and this configuration is optional.
   *
   * @public
   */
  ContainerMetricsConfig?: ContainerMetricsConfig | undefined;
}

/**
 * Settings that affect how the inference component caches data.
 *
 * @public
 */
export interface InferenceComponentDataCacheConfig {
  /**
   * Sets whether the endpoint that hosts the inference component caches the model artifacts and container image.
   *
   * With caching enabled, the endpoint caches this data in each instance that it provisions for the inference component. That way, the inference component deploys faster during the auto scaling process. If caching isn't enabled, the inference component takes longer to deploy because of the time it spends downloading the data.
   *
   * @public
   */
  EnableCaching: boolean | undefined;
}

/**
 * Configuration for balancing inference component copies across Availability Zones.
 *
 * @public
 */
export interface InferenceComponentAvailabilityZoneBalance {
  /**
   * Determines how strictly the Availability Zone balance constraint is enforced.
   *
   * - **PERMISSIVE**
   *
   *   The endpoint attempts to balance copies across Availability Zones but proceeds with scheduling even if balance can't be achieved due to available capacity or instance distribution across Availability Zones.
   *
   * @public
   */
  EnforcementMode: AvailabilityZoneBalanceEnforcementMode | undefined;

  /**
   * The maximum allowed difference in the number of inference component copies between any two Availability Zones. This parameter applies only when the endpoint has instances across two or more Availability Zones. A copy placement is allowed if it reduces imbalance or the resulting imbalance is within this value.
   *
   * Default value: `0`.
   *
   * @public
   */
  MaxImbalance?: number | undefined;
}

/**
 * The scheduling configuration that determines how inference component copies are placed across available instances when copies are added or removed.
 *
 * @public
 */
export interface InferenceComponentSchedulingConfig {
  /**
   * The strategy for placing inference component copies across available instances. If you also set `AvailabilityZoneBalance`, this strategy applies to placement within each Availability Zone.
   *
   * - **SPREAD**
   *
   *   Distributes copies evenly across available instances for better resilience.
   *
   * - **BINPACK**
   *
   *   Packs copies onto fewer instances to optimize resource utilization.
   *
   * @public
   */
  PlacementStrategy: InferenceComponentPlacementStrategy | undefined;

  /**
   * Configuration for balancing inference component copies across Availability Zones.
   *
   * @public
   */
  AvailabilityZoneBalance?: InferenceComponentAvailabilityZoneBalance | undefined;
}

/**
 * Settings that take effect while the model container starts up.
 *
 * @public
 */
export interface InferenceComponentStartupParameters {
  /**
   * The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this inference component.
   *
   * @public
   */
  ModelDataDownloadTimeoutInSeconds?: number | undefined;

  /**
   * The timeout value, in seconds, for your inference container to pass health check by Amazon S3 Hosting. For more information about health check, see [How Your Container Should Respond to Health Check (Ping) Requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests).
   *
   * @public
   */
  ContainerStartupHealthCheckTimeoutInSeconds?: number | undefined;
}

/**
 * Details about the resources to deploy with this inference component, including the model, container, and compute resources.
 *
 * @public
 */
export interface InferenceComponentSpecification {
  /**
   * The ML compute instance type for the inference component specification. Specifies which instance type this specification applies to. Required when using the `Specifications` parameter with multiple entries.
   *
   * @public
   */
  InstanceType?: ProductionVariantInstanceType | undefined;

  /**
   * The name of an existing SageMaker AI model object in your account that you want to deploy with the inference component.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * Defines a container that provides the runtime environment for a model that you deploy with an inference component.
   *
   * @public
   */
  Container?: InferenceComponentContainerSpecification | undefined;

  /**
   * Settings that take effect while the model container starts up.
   *
   * @public
   */
  StartupParameters?: InferenceComponentStartupParameters | undefined;

  /**
   * The compute resources allocated to run the model, plus any adapter models, that you assign to the inference component.
   *
   * Omit this parameter if your request is meant to create an adapter inference component. An adapter inference component is loaded by a base inference component, and it uses the compute resources of the base inference component.
   *
   * @public
   */
  ComputeResourceRequirements?: InferenceComponentComputeResourceRequirements | undefined;

  /**
   * The name of an existing inference component that is to contain the inference component that you're creating with your request.
   *
   * Specify this parameter only if your request is meant to create an adapter inference component. An adapter inference component contains the path to an adapter model. The purpose of the adapter model is to tailor the inference output of a base foundation model, which is hosted by the base inference component. The adapter inference component uses the compute resources that you assigned to the base inference component.
   *
   * When you create an adapter inference component, use the `Container` parameter to specify the location of the adapter artifacts. In the parameter value, use the `ArtifactUrl` parameter of the `InferenceComponentContainerSpecification` data type.
   *
   * Before you can create an adapter inference component, you must have an existing inference component that contains the foundation model that you want to adapt.
   *
   * @public
   */
  BaseInferenceComponentName?: string | undefined;

  /**
   * Settings that affect how the inference component caches data.
   *
   * @public
   */
  DataCacheConfig?: InferenceComponentDataCacheConfig | undefined;

  /**
   * The scheduling configuration that determines how inference component copies are placed across available instances when copies are added or removed.
   *
   * @public
   */
  SchedulingConfig?: InferenceComponentSchedulingConfig | undefined;
}

/**
 * @public
 */
export interface CreateInferenceComponentInput {
  /**
   * A unique name to assign to the inference component.
   *
   * @public
   */
  InferenceComponentName: string | undefined;

  /**
   * The name of an existing endpoint where you host the inference component.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The name of an existing production variant where you host the inference component.
   *
   * @public
   */
  VariantName?: string | undefined;

  /**
   * Details about the resources to deploy with this inference component, including the model, container, and compute resources.
   *
   * @public
   */
  Specification?: InferenceComponentSpecification | undefined;

  /**
   * A list of specification objects for the inference component, one per instance type. Use this parameter when you want to deploy a different model or resource configuration for the inference component on each instance type. You can use either this parameter or the singular `Specification` parameter, but not both.
   *
   * @public
   */
  Specifications?: InferenceComponentSpecification[] | undefined;

  /**
   * Runtime settings for a model that is deployed with an inference component.
   *
   * @public
   */
  RuntimeConfig?: InferenceComponentRuntimeConfig | undefined;

  /**
   * A list of key-value pairs associated with the model. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInferenceComponentOutput {
  /**
   * The Amazon Resource Name (ARN) of the inference component.
   *
   * @public
   */
  InferenceComponentArn: string | undefined;
}

/**
 * The Amazon S3 location and configuration for storing inference request and response data.
 *
 * @public
 */
export interface InferenceExperimentDataStorageConfig {
  /**
   * The Amazon S3 bucket where the inference request and response data is stored.
   *
   * @public
   */
  Destination: string | undefined;

  /**
   * The Amazon Web Services Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.
   *
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * Configuration specifying how to treat different headers. If no headers are specified Amazon SageMaker AI will by default base64 encode when capturing the data.
   *
   * @public
   */
  ContentType?: CaptureContentTypeHeader | undefined;
}

/**
 * The infrastructure configuration for deploying the model to a real-time inference endpoint.
 *
 * @public
 */
export interface RealTimeInferenceConfig {
  /**
   * The instance type the model is deployed to.
   *
   * @public
   */
  InstanceType: ProductionVariantInstanceType | undefined;

  /**
   * The number of instances of the type specified by `InstanceType`.
   *
   * @public
   */
  InstanceCount: number | undefined;
}

/**
 * The configuration for the infrastructure that the model will be deployed to.
 *
 * @public
 */
export interface ModelInfrastructureConfig {
  /**
   * The inference option to which to deploy your model. Possible values are the following:
   *
   * - `RealTime`: Deploy to real-time inference.
   *
   * @public
   */
  InfrastructureType: ModelInfrastructureType | undefined;

  /**
   * The infrastructure configuration for deploying the model to real-time inference.
   *
   * @public
   */
  RealTimeInferenceConfig: RealTimeInferenceConfig | undefined;
}

/**
 * Contains information about the deployment options of a model.
 *
 * @public
 */
export interface ModelVariantConfig {
  /**
   * The name of the Amazon SageMaker Model entity.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The name of the variant.
   *
   * @public
   */
  VariantName: string | undefined;

  /**
   * The configuration for the infrastructure that the model will be deployed to.
   *
   * @public
   */
  InfrastructureConfig: ModelInfrastructureConfig | undefined;
}

/**
 * The start and end times of an inference experiment.
 *
 * The maximum duration that you can set for an inference experiment is 30 days.
 *
 * @public
 */
export interface InferenceExperimentSchedule {
  /**
   * The timestamp at which the inference experiment started or will start.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp at which the inference experiment ended or will end.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * The name and sampling percentage of a shadow variant.
 *
 * @public
 */
export interface ShadowModelVariantConfig {
  /**
   * The name of the shadow variant.
   *
   * @public
   */
  ShadowModelVariantName: string | undefined;

  /**
   * The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.
   *
   * @public
   */
  SamplingPercentage: number | undefined;
}

/**
 * The configuration of `ShadowMode` inference experiment type, which specifies a production variant to take all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant it also specifies the percentage of requests that Amazon SageMaker replicates.
 *
 * @public
 */
export interface ShadowModeConfig {
  /**
   * The name of the production variant, which takes all the inference requests.
   *
   * @public
   */
  SourceModelVariantName: string | undefined;

  /**
   * List of shadow variant configurations.
   *
   * @public
   */
  ShadowModelVariants: ShadowModelVariantConfig[] | undefined;
}

/**
 * @public
 */
export interface CreateInferenceExperimentRequest {
  /**
   * The name for the inference experiment.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the inference experiment that you want to run. The following types of experiments are possible:
   *
   * - `ShadowMode`: You can use this type to validate a shadow variant. For more information, see [Shadow tests](https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests.html).
   *
   * @public
   */
  Type: InferenceExperimentType | undefined;

  /**
   * The duration for which you want the inference experiment to run. If you don't specify this field, the experiment automatically starts immediately upon creation and concludes after 7 days.
   *
   * @public
   */
  Schedule?: InferenceExperimentSchedule | undefined;

  /**
   * A description for the inference experiment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The name of the Amazon SageMaker endpoint on which you want to run the inference experiment.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * An array of `ModelVariantConfig` objects. There is one for each variant in the inference experiment. Each `ModelVariantConfig` object in the array describes the infrastructure configuration for the corresponding variant.
   *
   * @public
   */
  ModelVariants: ModelVariantConfig[] | undefined;

  /**
   * The Amazon S3 location and configuration for storing inference request and response data.
   *
   * This is an optional parameter that you can use for data capture. For more information, see [Capture data](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html).
   *
   * @public
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig | undefined;

  /**
   * The configuration of `ShadowMode` inference experiment type. Use this field to specify a production variant which takes all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant also specify the percentage of requests that Amazon SageMaker replicates.
   *
   * @public
   */
  ShadowModeConfig: ShadowModeConfig | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. The `KmsKey` can be any of the following formats:
   *
   * - KMS key ID
   *
   *   `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS key
   *
   *   `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - KMS key Alias
   *
   *   `"alias/ExampleAlias"`
   * - Amazon Resource Name (ARN) of a KMS key Alias
   *
   *   `"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"`
   *
   * If you use a KMS key ID or an alias of your KMS key, the Amazon SageMaker execution role must include permissions to call `kms:Encrypt`. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. Amazon SageMaker uses server-side encryption with KMS managed keys for `OutputDataConfig`. If you use a bucket policy with an `s3:PutObject` permission that only allows objects with server-side encryption, set the condition key of `s3:x-amz-server-side-encryption` to `"aws:kms"`. For more information, see [KMS managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the *Amazon Simple Storage Service Developer Guide.*
   *
   * The KMS key policy must grant permission to the IAM role that you specify in your `CreateEndpoint` and `UpdateEndpoint` requests. For more information, see [Using Key Policies in Amazon Web Services KMS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * Array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging your Amazon Web Services Resources](https://docs.aws.amazon.com/ARG/latest/userguide/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInferenceExperimentResponse {
  /**
   * The ARN for your inference experiment.
   *
   * @public
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * The configuration for the payload for a recommendation job.
 *
 * @public
 */
export interface RecommendationJobPayloadConfig {
  /**
   * The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
   *
   * @public
   */
  SamplePayloadUrl?: string | undefined;

  /**
   * The supported MIME types for the input data.
   *
   * @public
   */
  SupportedContentTypes?: string[] | undefined;
}

/**
 * Specifies mandatory fields for running an Inference Recommender job directly in the [CreateInferenceRecommendationsJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceRecommendationsJob.html) API. The fields specified in `ContainerConfig` override the corresponding fields in the model package. Use `ContainerConfig` if you want to specify these fields for the recommendation job but don't want to edit them in your model package.
 *
 * @public
 */
export interface RecommendationJobContainerConfig {
  /**
   * The machine learning domain of the model and its components.
   *
   * Valid Values: `COMPUTER_VISION | NATURAL_LANGUAGE_PROCESSING | MACHINE_LEARNING`
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The machine learning task that the model accomplishes.
   *
   * Valid Values: `IMAGE_CLASSIFICATION | OBJECT_DETECTION | TEXT_GENERATION | IMAGE_SEGMENTATION | FILL_MASK | CLASSIFICATION | REGRESSION | OTHER`
   *
   * @public
   */
  Task?: string | undefined;

  /**
   * The machine learning framework of the container image.
   *
   * Valid Values: `TENSORFLOW | PYTORCH | XGBOOST | SAGEMAKER-SCIKIT-LEARN`
   *
   * @public
   */
  Framework?: string | undefined;

  /**
   * The framework version of the container image.
   *
   * @public
   */
  FrameworkVersion?: string | undefined;

  /**
   * Specifies the `SamplePayloadUrl` and all other sample payload-related fields.
   *
   * @public
   */
  PayloadConfig?: RecommendationJobPayloadConfig | undefined;

  /**
   * The name of a pre-trained machine learning model benchmarked by Amazon SageMaker Inference Recommender that matches your model.
   *
   * Valid Values: `efficientnetb7 | unet | xgboost | faster-rcnn-resnet101 | nasnetlarge | vgg16 | inception-v3 | mask-rcnn | sagemaker-scikit-learn | densenet201-gluon | resnet18v2-gluon | xception | densenet201 | yolov4 | resnet152 | bert-base-cased | xceptionV1-keras | resnet50 | retinanet`
   *
   * @public
   */
  NearestModelName?: string | undefined;

  /**
   * A list of the instance types that are used to generate inferences in real-time.
   *
   * @public
   */
  SupportedInstanceTypes?: string[] | undefined;

  /**
   * The endpoint type to receive recommendations for. By default this is null, and the results of the inference recommendation job return a combined list of both real-time and serverless benchmarks. By specifying a value for this field, you can receive a longer list of benchmarks for the desired endpoint type.
   *
   * @public
   */
  SupportedEndpointType?: RecommendationJobSupportedEndpointType | undefined;

  /**
   * Specifies the name and shape of the expected data inputs for your trained model with a JSON dictionary form. This field is used for optimizing your model using SageMaker Neo. For more information, see [DataInputConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_InputConfig.html#sagemaker-Type-InputConfig-DataInputConfig).
   *
   * @public
   */
  DataInputConfig?: string | undefined;

  /**
   * The supported MIME types for the output data.
   *
   * @public
   */
  SupportedResponseMIMETypes?: string[] | undefined;
}

/**
 * Specifies the range of environment parameters
 *
 * @public
 */
export interface EnvironmentParameterRanges {
  /**
   * Specified a list of parameters for each category.
   *
   * @public
   */
  CategoricalParameterRanges?: CategoricalParameter[] | undefined;
}

/**
 * The endpoint configuration for the load test.
 *
 * @public
 */
export interface EndpointInputConfiguration {
  /**
   * The instance types to use for the load test.
   *
   * @public
   */
  InstanceType?: ProductionVariantInstanceType | undefined;

  /**
   * Specifies the serverless configuration for an endpoint variant.
   *
   * @public
   */
  ServerlessConfig?: ProductionVariantServerlessConfig | undefined;

  /**
   * The inference specification name in the model package version.
   *
   * @public
   */
  InferenceSpecificationName?: string | undefined;

  /**
   * The parameter you want to benchmark against.
   *
   * @public
   */
  EnvironmentParameterRanges?: EnvironmentParameterRanges | undefined;
}

/**
 * Details about a customer endpoint that was compared in an Inference Recommender job.
 *
 * @public
 */
export interface EndpointInfo {
  /**
   * The name of a customer's endpoint.
   *
   * @public
   */
  EndpointName?: string | undefined;
}

/**
 * Specifies the maximum number of jobs that can run in parallel and the maximum number of jobs that can run.
 *
 * @public
 */
export interface RecommendationJobResourceLimit {
  /**
   * Defines the maximum number of load tests.
   *
   * @public
   */
  MaxNumberOfTests?: number | undefined;

  /**
   * Defines the maximum number of parallel load tests.
   *
   * @public
   */
  MaxParallelOfTests?: number | undefined;
}

/**
 * Defines the traffic pattern.
 *
 * @public
 */
export interface Phase {
  /**
   * Specifies how many concurrent users to start with. The value should be between 1 and 3.
   *
   * @public
   */
  InitialNumberOfUsers?: number | undefined;

  /**
   * Specified how many new users to spawn in a minute.
   *
   * @public
   */
  SpawnRate?: number | undefined;

  /**
   * Specifies how long a traffic phase should be. For custom load tests, the value should be between 120 and 3600. This value should not exceed `JobDurationInSeconds`.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * Defines the stairs traffic pattern for an Inference Recommender load test. This pattern type consists of multiple steps where the number of users increases at each step.
 *
 * Specify either the stairs or phases traffic pattern.
 *
 * @public
 */
export interface Stairs {
  /**
   * Defines how long each traffic step should be.
   *
   * @public
   */
  DurationInSeconds?: number | undefined;

  /**
   * Specifies how many steps to perform during traffic.
   *
   * @public
   */
  NumberOfSteps?: number | undefined;

  /**
   * Specifies how many new users to spawn in each step.
   *
   * @public
   */
  UsersPerStep?: number | undefined;
}

/**
 * Defines the traffic pattern of the load test.
 *
 * @public
 */
export interface TrafficPattern {
  /**
   * Defines the traffic patterns. Choose either `PHASES` or `STAIRS`.
   *
   * @public
   */
  TrafficType?: TrafficType | undefined;

  /**
   * Defines the phases traffic specification.
   *
   * @public
   */
  Phases?: Phase[] | undefined;

  /**
   * Defines the stairs traffic pattern.
   *
   * @public
   */
  Stairs?: Stairs | undefined;
}

/**
 * Inference Recommender provisions SageMaker endpoints with access to VPC in the inference recommendation job.
 *
 * @public
 */
export interface RecommendationJobVpcConfig {
  /**
   * The VPC security group IDs. IDs have the form of `sg-xxxxxxxx`. Specify the security groups for the VPC that is specified in the `Subnets` field.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The ID of the subnets in the VPC to which you want to connect your model.
   *
   * @public
   */
  Subnets: string[] | undefined;
}

/**
 * The input configuration of the recommendation job.
 *
 * @public
 */
export interface RecommendationJobInputConfig {
  /**
   * The Amazon Resource Name (ARN) of a versioned model package.
   *
   * @public
   */
  ModelPackageVersionArn?: string | undefined;

  /**
   * The name of the created model.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * Specifies the maximum duration of the job, in seconds. The maximum value is 18,000 seconds.
   *
   * @public
   */
  JobDurationInSeconds?: number | undefined;

  /**
   * Specifies the traffic pattern of the job.
   *
   * @public
   */
  TrafficPattern?: TrafficPattern | undefined;

  /**
   * Defines the resource limit of the job.
   *
   * @public
   */
  ResourceLimit?: RecommendationJobResourceLimit | undefined;

  /**
   * Specifies the endpoint configuration to use for a job.
   *
   * @public
   */
  EndpointConfigurations?: EndpointInputConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. This key will be passed to SageMaker Hosting for endpoint creation.
   *
   * The SageMaker execution role must have `kms:CreateGrant` permission in order to encrypt data on the storage volume of the endpoints created for inference recommendation. The inference recommendation job will fail asynchronously during endpoint configuration creation if the role passed does not have `kms:CreateGrant` permission.
   *
   * The `KmsKeyId` can be any of the following formats:
   *
   * - // KMS Key ID
   *
   *   `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - // Amazon Resource Name (ARN) of a KMS Key
   *
   *   `"arn:aws:kms:<region>:<account>:key/<key-id-12ab-34cd-56ef-1234567890ab>"`
   * - // KMS Key Alias
   *
   *   `"alias/ExampleAlias"`
   * - // Amazon Resource Name (ARN) of a KMS Key Alias
   *
   *   `"arn:aws:kms:<region>:<account>:alias/<ExampleAlias>"`
   *
   * For more information about key identifiers, see [Key identifiers (KeyID)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id) in the Amazon Web Services Key Management Service (Amazon Web Services KMS) documentation.
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Specifies mandatory fields for running an Inference Recommender job. The fields specified in `ContainerConfig` override the corresponding fields in the model package.
   *
   * @public
   */
  ContainerConfig?: RecommendationJobContainerConfig | undefined;

  /**
   * Existing customer endpoints on which to run an Inference Recommender job.
   *
   * @public
   */
  Endpoints?: EndpointInfo[] | undefined;

  /**
   * Inference Recommender provisions SageMaker endpoints with access to VPC in the inference recommendation job.
   *
   * @public
   */
  VpcConfig?: RecommendationJobVpcConfig | undefined;
}

/**
 * Provides information about the output configuration for the compiled model.
 *
 * @public
 */
export interface RecommendationJobCompiledOutputConfig {
  /**
   * Identifies the Amazon S3 bucket where you want SageMaker to store the compiled model artifacts.
   *
   * @public
   */
  S3OutputUri?: string | undefined;
}

/**
 * Provides information about the output configuration for the compiled model.
 *
 * @public
 */
export interface RecommendationJobOutputConfig {
  /**
   * The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt your output artifacts with Amazon S3 server-side encryption. The SageMaker execution role must have `kms:GenerateDataKey` permission.
   *
   * The `KmsKeyId` can be any of the following formats:
   *
   * - // KMS Key ID
   *
   *   `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - // Amazon Resource Name (ARN) of a KMS Key
   *
   *   `"arn:aws:kms:<region>:<account>:key/<key-id-12ab-34cd-56ef-1234567890ab>"`
   * - // KMS Key Alias
   *
   *   `"alias/ExampleAlias"`
   * - // Amazon Resource Name (ARN) of a KMS Key Alias
   *
   *   `"arn:aws:kms:<region>:<account>:alias/<ExampleAlias>"`
   *
   * For more information about key identifiers, see [Key identifiers (KeyID)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id) in the Amazon Web Services Key Management Service (Amazon Web Services KMS) documentation.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Provides information about the output configuration for the compiled model.
   *
   * @public
   */
  CompiledOutputConfig?: RecommendationJobCompiledOutputConfig | undefined;
}

/**
 * The model latency threshold.
 *
 * @public
 */
export interface ModelLatencyThreshold {
  /**
   * The model latency percentile threshold. Acceptable values are `P95` and `P99`. For custom load tests, specify the value as `P95`.
   *
   * @public
   */
  Percentile?: string | undefined;

  /**
   * The model latency percentile value in milliseconds.
   *
   * @public
   */
  ValueInMilliseconds?: number | undefined;
}

/**
 * Specifies conditions for stopping a job. When a job reaches a stopping condition limit, SageMaker ends the job.
 *
 * @public
 */
export interface RecommendationJobStoppingConditions {
  /**
   * The maximum number of requests per minute expected for the endpoint.
   *
   * @public
   */
  MaxInvocations?: number | undefined;

  /**
   * The interval of time taken by a model to respond as viewed from SageMaker. The interval includes the local communication time taken to send the request and to fetch the response from the container of a model and the time taken to complete the inference in the container.
   *
   * @public
   */
  ModelLatencyThresholds?: ModelLatencyThreshold[] | undefined;

  /**
   * Stops a load test when the number of invocations (TPS) peaks and flattens, which means that the instance has reached capacity. The default value is `Stop`. If you want the load test to continue after invocations have flattened, set the value to `Continue`.
   *
   * @public
   */
  FlatInvocations?: FlatInvocations | undefined;
}

/**
 * @public
 */
export interface CreateInferenceRecommendationsJobRequest {
  /**
   * A name for the recommendation job. The name must be unique within the Amazon Web Services Region and within your Amazon Web Services account. The job name is passed down to the resources created by the recommendation job. The names of resources (such as the model, endpoint configuration, endpoint, and compilation) that are prefixed with the job name are truncated at 40 characters.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * Defines the type of recommendation job. Specify `Default` to initiate an instance recommendation and `Advanced` to initiate a load test. If left unspecified, Amazon SageMaker Inference Recommender will run an instance recommendation (`DEFAULT`) job.
   *
   * @public
   */
  JobType: RecommendationJobType | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Provides information about the versioned model package Amazon Resource Name (ARN), the traffic pattern, and endpoint configurations.
   *
   * @public
   */
  InputConfig: RecommendationJobInputConfig | undefined;

  /**
   * Description of the recommendation job.
   *
   * @public
   */
  JobDescription?: string | undefined;

  /**
   * A set of conditions for stopping a recommendation job. If any of the conditions are met, the job is automatically stopped.
   *
   * @public
   */
  StoppingConditions?: RecommendationJobStoppingConditions | undefined;

  /**
   * Provides information about the output artifacts and the KMS key to use for Amazon S3 server-side encryption.
   *
   * @public
   */
  OutputConfig?: RecommendationJobOutputConfig | undefined;

  /**
   * The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the Amazon Web Services General Reference.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInferenceRecommendationsJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the recommendation job.
   *
   * @public
   */
  JobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * The name of the job. The name must be unique within your account and Amazon Web Services Region.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the job. The role must have the necessary permissions to access the resources required by the job configuration.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The category of the job. The category determines the type of workload that the job runs.
   *
   * @public
   */
  JobCategory: JobCategory | undefined;

  /**
   * The version of the configuration schema to use for the job configuration document. Use `ListJobSchemaVersions` to get available schema versions for a job category.
   *
   * @public
   */
  JobConfigSchemaVersion: string | undefined;

  /**
   * The JSON configuration document for the job. The document must conform to the schema specified by `JobConfigSchemaVersion`. Use `DescribeJobSchemaVersion` to retrieve the schema for validation.
   *
   * @public
   */
  JobConfigDocument: string | undefined;

  /**
   * An array of key-value pairs to apply to the job as tags. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  JobArn: string | undefined;
}

/**
 * Provided configuration information for the worker UI for a labeling job. Provide either `HumanTaskUiArn` or `UiTemplateS3Uri`.
 *
 * For named entity recognition, 3D point cloud and video frame labeling jobs, use `HumanTaskUiArn`.
 *
 * For all other Ground Truth built-in task types and custom task types, use `UiTemplateS3Uri` to specify the location of a worker task template in Amazon S3.
 *
 * @public
 */
export interface UiConfig {
  /**
   * The Amazon S3 bucket location of the UI template, or worker task template. This is the template used to render the worker UI and tools for labeling job tasks. For more information about the contents of a UI template, see [Creating Your Custom Labeling Task Template](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step2.html).
   *
   * @public
   */
  UiTemplateS3Uri?: string | undefined;

  /**
   * The ARN of the worker task template used to render the worker UI and tools for labeling job tasks.
   *
   * Use this parameter when you are creating a labeling job for named entity recognition, 3D point cloud and video frame labeling jobs. Use your labeling job task type to select one of the following ARNs and use it with this parameter when you create a labeling job. Replace `aws-region` with the Amazon Web Services Region you are creating your labeling job in. For example, replace `aws-region` with `us-west-1` if you create a labeling job in US West (N. California).
   *
   * **Named Entity Recognition**
   *
   * Use the following `HumanTaskUiArn` for named entity recognition labeling jobs:
   *
   * `arn:aws:sagemaker:aws-region:394669845002:human-task-ui/NamedEntityRecognition`
   *
   * **3D Point Cloud HumanTaskUiArns**
   *
   * Use this `HumanTaskUiArn` for 3D point cloud object detection and 3D point cloud object detection adjustment labeling jobs.
   *
   * - `arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectDetection`
   *
   * Use this `HumanTaskUiArn` for 3D point cloud object tracking and 3D point cloud object tracking adjustment labeling jobs.
   *
   * - `arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudObjectTracking`
   *
   * Use this `HumanTaskUiArn` for 3D point cloud semantic segmentation and 3D point cloud semantic segmentation adjustment labeling jobs.
   *
   * - `arn:aws:sagemaker:aws-region:394669845002:human-task-ui/PointCloudSemanticSegmentation`
   *
   * **Video Frame HumanTaskUiArns**
   *
   * Use this `HumanTaskUiArn` for video frame object detection and video frame object detection adjustment labeling jobs.
   *
   * - `arn:aws:sagemaker:region:394669845002:human-task-ui/VideoObjectDetection`
   *
   * Use this `HumanTaskUiArn` for video frame object tracking and video frame object tracking adjustment labeling jobs.
   *
   * - `arn:aws:sagemaker:aws-region:394669845002:human-task-ui/VideoObjectTracking`
   *
   * @public
   */
  HumanTaskUiArn?: string | undefined;
}

/**
 * Information required for human workers to complete a labeling task.
 *
 * @public
 */
export interface HumanTaskConfig {
  /**
   * The Amazon Resource Name (ARN) of the work team assigned to complete the tasks.
   *
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * Information about the user interface that workers use to complete the labeling task.
   *
   * @public
   */
  UiConfig: UiConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of a Lambda function that is run before a data object is sent to a human worker. Use this function to provide input to a custom labeling job.
   *
   * For [built-in task types](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html), use one of the following Amazon SageMaker Ground Truth Lambda function ARNs for `PreHumanTaskLambdaArn`. For custom labeling workflows, see [Pre-annotation Lambda](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step3.html#sms-custom-templates-step3-prelambda).
   *
   * **Bounding box** - Finds the most similar boxes from different workers based on the Jaccard index of the boxes.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-BoundingBox`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-BoundingBox`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-BoundingBox`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-BoundingBox`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-BoundingBox`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-BoundingBox`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-BoundingBox`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-BoundingBox`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-BoundingBox`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-BoundingBox`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-BoundingBox`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-BoundingBox`
   *
   * **Image classification** - Uses a variant of the Expectation Maximization approach to estimate the true class of an image based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClass`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClass`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClass`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClass`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClass`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClass`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClass`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClass`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClass`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClass`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClass`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClass`
   *
   * **Multi-label image classification** - Uses a variant of the Expectation Maximization approach to estimate the true classes of an image based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClassMultiLabel`
   *
   * **Semantic segmentation** - Treats each pixel in an image as a multi-class classification and treats pixel annotations from workers as "votes" for the correct label.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-SemanticSegmentation`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-SemanticSegmentation`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-SemanticSegmentation`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-SemanticSegmentation`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-SemanticSegmentation`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-SemanticSegmentation`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-SemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-SemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-SemanticSegmentation`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-SemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-SemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-SemanticSegmentation`
   *
   * **Text classification** - Uses a variant of the Expectation Maximization approach to estimate the true class of text based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClass`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClass`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClass`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClass`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClass`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClass`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClass`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClass`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClass`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClass`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClass`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClass`
   *
   * **Multi-label text classification** - Uses a variant of the Expectation Maximization approach to estimate the true classes of text based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClassMultiLabel`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClassMultiLabel`
   *
   * **Named entity recognition** - Groups similar selections and calculates aggregate boundaries, resolving to most-assigned label.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-NamedEntityRecognition`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-NamedEntityRecognition`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-NamedEntityRecognition`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-NamedEntityRecognition`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-NamedEntityRecognition`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-NamedEntityRecognition`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-NamedEntityRecognition`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-NamedEntityRecognition`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-NamedEntityRecognition`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-NamedEntityRecognition`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-NamedEntityRecognition`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-NamedEntityRecognition`
   *
   * **Video Classification** - Use this task type when you need workers to classify videos using predefined labels that you specify. Workers are shown videos and are asked to choose one label for each video.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoMultiClass`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoMultiClass`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoMultiClass`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoMultiClass`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoMultiClass`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoMultiClass`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoMultiClass`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoMultiClass`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoMultiClass`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoMultiClass`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoMultiClass`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoMultiClass`
   *
   * **Video Frame Object Detection** - Use this task type to have workers identify and locate objects in a sequence of video frames (images extracted from a video) using bounding boxes. For example, you can use this task to ask workers to identify and localize various objects in a series of video frames, such as cars, bikes, and pedestrians.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectDetection`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectDetection`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectDetection`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectDetection`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectDetection`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectDetection`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectDetection`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectDetection`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectDetection`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectDetection`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectDetection`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectDetection`
   *
   * **Video Frame Object Tracking** - Use this task type to have workers track the movement of objects in a sequence of video frames (images extracted from a video) using bounding boxes. For example, you can use this task to ask workers to track the movement of objects, such as cars, bikes, and pedestrians.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-VideoObjectTracking`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-VideoObjectTracking`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-VideoObjectTracking`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-VideoObjectTracking`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VideoObjectTracking`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VideoObjectTracking`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-VideoObjectTracking`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-VideoObjectTracking`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VideoObjectTracking`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-VideoObjectTracking`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VideoObjectTracking`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-VideoObjectTracking`
   *
   * **3D Point Cloud Modalities**
   *
   * Use the following pre-annotation lambdas for 3D point cloud labeling modality tasks. See [3D Point Cloud Task types](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-task-types.html) to learn more.
   *
   * **3D Point Cloud Object Detection** - Use this task type when you want workers to classify objects in a 3D point cloud by drawing 3D cuboids around objects. For example, you can use this task type to ask workers to identify different types of objects in a point cloud, such as cars, bikes, and pedestrians.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectDetection`
   *
   * **3D Point Cloud Object Tracking** - Use this task type when you want workers to draw 3D cuboids around objects that appear in a sequence of 3D point cloud frames. For example, you can use this task type to ask workers to track the movement of vehicles across multiple point cloud frames.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudObjectTracking`
   *
   * **3D Point Cloud Semantic Segmentation** - Use this task type when you want workers to create a point-level semantic segmentation masks by painting objects in a 3D point cloud using different colors where each color is assigned to one of the classes you specify.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-3DPointCloudSemanticSegmentation`
   *
   * **Use the following ARNs for Label Verification and Adjustment Jobs**
   *
   * Use label verification and adjustment jobs to review and adjust labels. To learn more, see [Verify and Adjust Labels](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html).
   *
   * **Bounding box verification** - Uses a variant of the Expectation Maximization approach to estimate the true class of verification judgement for bounding box labels based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationBoundingBox`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationBoundingBox`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationBoundingBox`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationBoundingBox`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationBoundingBox`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationBoundingBox`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationBoundingBox`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationBoundingBox`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationBoundingBox`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationBoundingBox`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationBoundingBox`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationBoundingBox`
   *
   * **Bounding box adjustment** - Finds the most similar boxes from different workers based on the Jaccard index of the adjusted annotations.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentBoundingBox`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentBoundingBox`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentBoundingBox`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentBoundingBox`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentBoundingBox`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentBoundingBox`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentBoundingBox`
   *
   * **Semantic segmentation verification** - Uses a variant of the Expectation Maximization approach to estimate the true class of verification judgment for semantic segmentation labels based on annotations from individual workers.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationSemanticSegmentation`
   *
   * **Semantic segmentation adjustment** - Treats each pixel in an image as a multi-class classification and treats pixel adjusted annotations from workers as "votes" for the correct label.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentSemanticSegmentation`
   *
   * **Video Frame Object Detection Adjustment** - Use this task type when you want workers to adjust bounding boxes that workers have added to video frames to classify and localize objects in a sequence of video frames.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectDetection`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectDetection`
   *
   * **Video Frame Object Tracking Adjustment** - Use this task type when you want workers to adjust bounding boxes that workers have added to video frames to track object movement across a sequence of video frames.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentVideoObjectTracking`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentVideoObjectTracking`
   *
   * **3D point cloud object detection adjustment** - Adjust 3D cuboids in a point cloud frame.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectDetection`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectDetection`
   *
   * **3D point cloud object tracking adjustment** - Adjust 3D cuboids across a sequence of point cloud frames.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudObjectTracking`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudObjectTracking`
   *
   * **3D point cloud semantic segmentation adjustment** - Adjust semantic segmentation masks in a 3D point cloud.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-Adjustment3DPointCloudSemanticSegmentation`
   *
   * **Generative AI/Custom** - Direct passthrough of input data without any transformation.
   *
   * - `arn:aws:lambda:us-east-1:432418664414:function:PRE-PassThrough`
   * - `arn:aws:lambda:us-east-2:266458841044:function:PRE-PassThrough`
   * - `arn:aws:lambda:us-west-2:081040173940:function:PRE-PassThrough`
   * - `arn:aws:lambda:ca-central-1:918755190332:function:PRE-PassThrough`
   * - `arn:aws:lambda:eu-west-1:568282634449:function:PRE-PassThrough`
   * - `arn:aws:lambda:eu-west-2:487402164563:function:PRE-PassThrough`
   * - `arn:aws:lambda:eu-central-1:203001061592:function:PRE-PassThrough`
   * - `arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-PassThrough`
   * - `arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-PassThrough`
   * - `arn:aws:lambda:ap-south-1:565803892007:function:PRE-PassThrough`
   * - `arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-PassThrough`
   * - `arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-PassThrough`
   *
   * @public
   */
  PreHumanTaskLambdaArn?: string | undefined;

  /**
   * Keywords used to describe the task so that workers on Amazon Mechanical Turk can discover the task.
   *
   * @public
   */
  TaskKeywords?: string[] | undefined;

  /**
   * A title for the task for your human workers.
   *
   * @public
   */
  TaskTitle: string | undefined;

  /**
   * A description of the task for your human workers.
   *
   * @public
   */
  TaskDescription: string | undefined;

  /**
   * The number of human workers that will label an object.
   *
   * @public
   */
  NumberOfHumanWorkersPerDataObject: number | undefined;

  /**
   * The amount of time that a worker has to complete a task.
   *
   * If you create a custom labeling job, the maximum value for this parameter is 8 hours (28,800 seconds).
   *
   * If you create a labeling job using a [built-in task type](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html) the maximum for this parameter depends on the task type you use:
   *
   * - For [image](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-images.html) and [text](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-label-text.html) labeling jobs, the maximum is 8 hours (28,800 seconds).
   * - For [3D point cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud.html) and [video frame](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-video.html) labeling jobs, the maximum is 30 days (2952,000 seconds) for non-AL mode. For most users, the maximum is also 30 days.
   *
   * @public
   */
  TaskTimeLimitInSeconds: number | undefined;

  /**
   * The length of time that a task remains available for labeling by human workers. The default and maximum values for this parameter depend on the type of workforce you use.
   *
   * - If you choose the Amazon Mechanical Turk workforce, the maximum is 12 hours (43,200 seconds). The default is 6 hours (21,600 seconds).
   * - If you choose a private or vendor workforce, the default value is 30 days (2592,000 seconds) for non-AL mode. For most users, the maximum is also 30 days.
   *
   * @public
   */
  TaskAvailabilityLifetimeInSeconds?: number | undefined;

  /**
   * Defines the maximum number of data objects that can be labeled by human workers at the same time. Also referred to as batch size. Each object may have more than one worker at one time. The default value is 1000 objects. To increase the maximum value to 5000 objects, contact Amazon Web Services Support.
   *
   * @public
   */
  MaxConcurrentTaskCount?: number | undefined;

  /**
   * Configures how labels are consolidated across human workers.
   *
   * @public
   */
  AnnotationConsolidationConfig?: AnnotationConsolidationConfig | undefined;

  /**
   * The price that you pay for each task performed by an Amazon Mechanical Turk worker.
   *
   * @public
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice | undefined;
}

/**
 * Attributes of the data specified by the customer. Use these to describe the data to be labeled.
 *
 * @public
 */
export interface LabelingJobDataAttributes {
  /**
   * Declares that your content is free of personally identifiable information or adult content. SageMaker may restrict the Amazon Mechanical Turk workers that can view your task based on this information.
   *
   * @public
   */
  ContentClassifiers?: ContentClassifier[] | undefined;
}

/**
 * The Amazon S3 location of the input data objects.
 *
 * @public
 */
export interface LabelingJobS3DataSource {
  /**
   * The Amazon S3 location of the manifest file that describes the input data objects.
   *
   * The input manifest file referenced in `ManifestS3Uri` must contain one of the following keys: `source-ref` or `source`. The value of the keys are interpreted as follows:
   *
   * - `source-ref`: The source of the object is the Amazon S3 object specified in the value. Use this value when the object is a binary object, such as an image.
   * - `source`: The source of the object is the value. Use this value when the object is a text value.
   *
   * If you are a new user of Ground Truth, it is recommended you review [Use an Input Manifest File](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-input-data-input-manifest.html) in the Amazon SageMaker Developer Guide to learn how to create an input manifest file.
   *
   * @public
   */
  ManifestS3Uri: string | undefined;
}

/**
 * An Amazon SNS data source used for streaming labeling jobs.
 *
 * @public
 */
export interface LabelingJobSnsDataSource {
  /**
   * The Amazon SNS input topic Amazon Resource Name (ARN). Specify the ARN of the input topic you will use to send new data objects to a streaming labeling job.
   *
   * @public
   */
  SnsTopicArn: string | undefined;
}

/**
 * Provides information about the location of input data.
 *
 * You must specify at least one of the following: `S3DataSource` or `SnsDataSource`.
 *
 * Use `SnsDataSource` to specify an SNS input topic for a streaming labeling job. If you do not specify and SNS input topic ARN, Ground Truth will create a one-time labeling job.
 *
 * Use `S3DataSource` to specify an input manifest file for both streaming and one-time labeling jobs. Adding an `S3DataSource` is optional if you use `SnsDataSource` to create a streaming labeling job.
 *
 * @public
 */
export interface LabelingJobDataSource {
  /**
   * The Amazon S3 location of the input data objects.
   *
   * @public
   */
  S3DataSource?: LabelingJobS3DataSource | undefined;

  /**
   * An Amazon SNS data source used for streaming labeling jobs. To learn more, see [Send Data to a Streaming Labeling Job](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-labeling-job.html#sms-streaming-how-it-works-send-data).
   *
   * @public
   */
  SnsDataSource?: LabelingJobSnsDataSource | undefined;
}

/**
 * Input configuration information for a labeling job.
 *
 * @public
 */
export interface LabelingJobInputConfig {
  /**
   * The location of the input data.
   *
   * @public
   */
  DataSource: LabelingJobDataSource | undefined;

  /**
   * Attributes of the data specified by the customer.
   *
   * @public
   */
  DataAttributes?: LabelingJobDataAttributes | undefined;
}

/**
 * Configure encryption on the storage volume attached to the ML compute instance used to run automated data labeling model training and inference.
 *
 * @public
 */
export interface LabelingJobResourceConfig {
  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the training and inference jobs used for automated data labeling.
   *
   * You can only specify a `VolumeKmsKeyId` when you create a labeling job with automated data labeling enabled using the API operation `CreateLabelingJob`. You cannot specify an Amazon Web Services KMS key to encrypt the storage volume used for automated data labeling model training and inference when you create a labeling job using the console. To learn more, see [Output Data and Storage Volume Encryption](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security.html).
   *
   * The `VolumeKmsKeyId` can be any of the following formats:
   *
   * - KMS Key ID
   *
   *   `"1234abcd-12ab-34cd-56ef-1234567890ab"`
   * - Amazon Resource Name (ARN) of a KMS Key
   *
   *   `"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"`
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * Provides configuration information for auto-labeling of your data objects. A `LabelingJobAlgorithmsConfig` object must be supplied in order to use auto-labeling.
 *
 * @public
 */
export interface LabelingJobAlgorithmsConfig {
  /**
   * Specifies the Amazon Resource Name (ARN) of the algorithm used for auto-labeling. You must select one of the following ARNs:
   *
   * - *Image classification*
   *
   *   `arn:aws:sagemaker:region:027400017018:labeling-job-algorithm-specification/image-classification`
   * - *Text classification*
   *
   *   `arn:aws:sagemaker:region:027400017018:labeling-job-algorithm-specification/text-classification`
   * - *Object detection*
   *
   *   `arn:aws:sagemaker:region:027400017018:labeling-job-algorithm-specification/object-detection`
   * - *Semantic Segmentation*
   *
   *   `arn:aws:sagemaker:region:027400017018:labeling-job-algorithm-specification/semantic-segmentation`
   *
   * @public
   */
  LabelingJobAlgorithmSpecificationArn: string | undefined;

  /**
   * At the end of an auto-label job Ground Truth sends the Amazon Resource Name (ARN) of the final model used for auto-labeling. You can use this model as the starting point for subsequent similar jobs by providing the ARN of the model here.
   *
   * @public
   */
  InitialActiveLearningModelArn?: string | undefined;

  /**
   * Provides configuration information for a labeling job.
   *
   * @public
   */
  LabelingJobResourceConfig?: LabelingJobResourceConfig | undefined;
}

/**
 * Output configuration information for a labeling job.
 *
 * @public
 */
export interface LabelingJobOutputConfig {
  /**
   * The Amazon S3 location to write output data.
   *
   * @public
   */
  S3OutputPath: string | undefined;

  /**
   * The Amazon Web Services Key Management Service ID of the key used to encrypt the output data, if any.
   *
   * If you provide your own KMS key ID, you must add the required permissions to your KMS key described in [Encrypt Output Data and Storage Volume with Amazon Web Services KMS](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-security-permission.html#sms-security-kms-permissions).
   *
   * If you don't provide a KMS key ID, Amazon SageMaker uses the default Amazon Web Services KMS key for Amazon S3 for your role's account to encrypt your output data.
   *
   * If you use a bucket policy with an `s3:PutObject` permission that only allows objects with server-side encryption, set the condition key of `s3:x-amz-server-side-encryption` to `"aws:kms"`. For more information, see [KMS-Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the *Amazon Simple Storage Service Developer Guide.*
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * An Amazon Simple Notification Service (Amazon SNS) output topic ARN. Provide a `SnsTopicArn` if you want to do real time chaining to another streaming job and receive an Amazon SNS notifications each time a data object is submitted by a worker.
   *
   * If you provide an `SnsTopicArn` in `OutputConfig`, when workers complete labeling tasks, Ground Truth will send labeling task output data to the SNS output topic you specify here.
   *
   * To learn more, see [Receive Output Data from a Streaming Labeling Job](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-labeling-job.html#sms-streaming-how-it-works-output-data).
   *
   * @public
   */
  SnsTopicArn?: string | undefined;
}

/**
 * A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.
 *
 * > **Note:** Labeling jobs fail after 30 days with an appropriate client error message.
 *
 * @public
 */
export interface LabelingJobStoppingConditions {
  /**
   * The maximum number of objects that can be labeled by human workers.
   *
   * @public
   */
  MaxHumanLabeledObjectCount?: number | undefined;

  /**
   * The maximum number of input data objects that should be labeled.
   *
   * @public
   */
  MaxPercentageOfInputDatasetLabeled?: number | undefined;
}

/**
 * @public
 */
export interface CreateLabelingJobRequest {
  /**
   * The name of the labeling job. This name is used to identify the job in a list of labeling jobs. Labeling job names must be unique within an Amazon Web Services account and region. `LabelingJobName` is not case sensitive. For example, Example-job and example-job are considered the same labeling job name by Ground Truth.
   *
   * @public
   */
  LabelingJobName: string | undefined;

  /**
   * The attribute name to use for the label in the output manifest file. This is the key for the key/value pair formed with the label that a worker assigns to the object. The `LabelAttributeName` must meet the following requirements.
   *
   * - The name can't end with "-metadata".
   * - If you are using one of the [built-in task types](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html) or one of the following, the attribute name *must* end with "-ref".
   *
   *   - Image semantic segmentation (`SemanticSegmentation)` and adjustment (`AdjustmentSemanticSegmentation`) labeling jobs for this task type. One exception is that verification (`VerificationSemanticSegmentation`) *must not* end with -"ref".
   *   - Video frame object detection (`VideoObjectDetection`), and adjustment and verification (`AdjustmentVideoObjectDetection`) labeling jobs for this task type.
   *   - Video frame object tracking (`VideoObjectTracking`), and adjustment and verification (`AdjustmentVideoObjectTracking`) labeling jobs for this task type.
   *   - 3D point cloud semantic segmentation (`3DPointCloudSemanticSegmentation`), and adjustment and verification (`Adjustment3DPointCloudSemanticSegmentation`) labeling jobs for this task type.
   *   - 3D point cloud object tracking (`3DPointCloudObjectTracking`), and adjustment and verification (`Adjustment3DPointCloudObjectTracking`) labeling jobs for this task type.
   *
   * > **Important:** If you are creating an adjustment or verification labeling job, you must use a *different* `LabelAttributeName` than the one used in the original labeling job. The original labeling job is the Ground Truth labeling job that produced the labels that you want verified or adjusted. To learn more about adjustment and verification labeling jobs, see [Verify and Adjust Labels](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-verification-data.html).
   *
   * @public
   */
  LabelAttributeName: string | undefined;

  /**
   * Input data for the labeling job, such as the Amazon S3 location of the data objects and the location of the manifest file that describes the data objects.
   *
   * You must specify at least one of the following: `S3DataSource` or `SnsDataSource`.
   *
   * - Use `SnsDataSource` to specify an SNS input topic for a streaming labeling job. If you do not specify and SNS input topic ARN, Ground Truth will create a one-time labeling job that stops after all data objects in the input manifest file have been labeled.
   * - Use `S3DataSource` to specify an input manifest file for both streaming and one-time labeling jobs. Adding an `S3DataSource` is optional if you use `SnsDataSource` to create a streaming labeling job.
   *
   * If you use the Amazon Mechanical Turk workforce, your input data should not include confidential information, personal information or protected health information. Use `ContentClassifiers` to specify that your data is free of personally identifiable information and adult content.
   *
   * @public
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * The location of the output data and the Amazon Web Services Key Management Service key ID for the key used to encrypt the output data, if any.
   *
   * @public
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during data labeling. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete data labeling.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The S3 URI of the file, referred to as a *label category configuration file*, that defines the categories used to label the data objects.
   *
   * For 3D point cloud and video frame task types, you can add label category attributes and frame attributes to your label category configuration file. To learn how, see [Create a Labeling Category Configuration File for 3D Point Cloud Labeling Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-point-cloud-label-category-config.html).
   *
   * For named entity recognition jobs, in addition to `"labels"`, you must provide worker instructions in the label category configuration file using the `"instructions"` parameter: `"instructions": \{"shortInstruction":"<h1>Add header</h1><p>Add Instructions</p>", "fullInstruction":"<p>Add additional instructions.</p>"\}`. For details and an example, see [Create a Named Entity Recognition Labeling Job (API)](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-named-entity-recg.html#sms-creating-ner-api).
   *
   * For all other [built-in task types](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-task-types.html) and [custom tasks](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates.html), your label category configuration file must be a JSON file in the following format. Identify the labels you want to use by replacing `label_1`, `label_2`,`...`,`label_n` with your label categories.
   *
   * `\{`
   *
   * `"document-version": "2018-11-28",`
   *
   * `"labels": [\{"label": "label_1"\},\{"label": "label_2"\},...\{"label": "label_n"\}]`
   *
   * `\}`
   *
   * Note the following about the label category configuration file:
   *
   * - For image classification and text classification (single and multi-label) you must specify at least two label categories. For all other task types, the minimum number of label categories required is one.
   * - Each label category must be unique, you cannot specify duplicate label categories.
   * - If you create a 3D point cloud or video frame adjustment or verification labeling job, you must include `auditLabelAttributeName` in the label category configuration. Use this parameter to enter the [`LabelAttributeName`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateLabelingJob.html#sagemaker-CreateLabelingJob-request-LabelAttributeName) of the labeling job you want to adjust or verify annotations of.
   *
   * @public
   */
  LabelCategoryConfigS3Uri?: string | undefined;

  /**
   * A set of conditions for stopping the labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.
   *
   * @public
   */
  StoppingConditions?: LabelingJobStoppingConditions | undefined;

  /**
   * Configures the information required to perform automated data labeling.
   *
   * @public
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig | undefined;

  /**
   * Configures the labeling task and how it is presented to workers; including, but not limited to price, keywords, and batch size (task count).
   *
   * @public
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * An array of key/value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) in the *Amazon Web Services Billing and Cost Management User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLabelingJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the labeling job. You use this ARN to identify the labeling job.
   *
   * @public
   */
  LabelingJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMlflowAppRequest {
  /**
   * A string identifying the MLflow app name. This string is not part of the tracking server ARN.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The S3 URI for a general purpose bucket to use as the MLflow App artifact store.
   *
   * @public
   */
  ArtifactStoreUri: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3. The role should have the `AmazonS3FullAccess` permission.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The ID of the Amazon Web Services KMS key used to encrypt the data at rest associated with the MLflow App. If you don't specify a value, the MLflow App is not encrypted with a customer-managed key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry. To enable automatic model registration, set this value to `AutoModelRegistrationEnabled`. To disable automatic model registration, set this value to `AutoModelRegistrationDisabled`. If not specified, `AutomaticModelRegistration` defaults to `AutoModelRegistrationDisabled`.
   *
   * @public
   */
  ModelRegistrationMode?: ModelRegistrationMode | undefined;

  /**
   * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: TUE:03:30.
   *
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * Indicates whether this MLflow app is the default for the entire account.
   *
   * @public
   */
  AccountDefaultStatus?: AccountDefaultStatus | undefined;

  /**
   * List of SageMaker domain IDs for which this MLflow App is used as the default.
   *
   * @public
   */
  DefaultDomainIdList?: string[] | undefined;

  /**
   * Tags consisting of key-value pairs used to manage metadata for the MLflow App.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateMlflowAppResponse {
  /**
   * The ARN of the MLflow App.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMlflowTrackingServerRequest {
  /**
   * A unique string identifying the tracking server name. This string is part of the tracking server ARN.
   *
   * @public
   */
  TrackingServerName: string | undefined;

  /**
   * The S3 URI for a general purpose bucket to use as the MLflow Tracking Server artifact store.
   *
   * @public
   */
  ArtifactStoreUri: string | undefined;

  /**
   * The size of the tracking server you want to create. You can choose between `"Small"`, `"Medium"`, and `"Large"`. The default MLflow Tracking Server configuration size is `"Small"`. You can choose a size depending on the projected use of the tracking server such as the volume of data logged, number of users, and frequency of use.
   *
   * We recommend using a small tracking server for teams of up to 25 users, a medium tracking server for teams of up to 50 users, and a large tracking server for teams of up to 100 users.
   *
   * @public
   */
  TrackingServerSize?: TrackingServerSize | undefined;

  /**
   * The version of MLflow that the tracking server uses. To see which MLflow versions are available to use, see [How it works](https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow.html#mlflow-create-tracking-server-how-it-works).
   *
   * @public
   */
  MlflowVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow Tracking Server uses to access the artifact store in Amazon S3. The role should have `AmazonS3FullAccess` permissions. For more information on IAM permissions for tracking server creation, see [Set up IAM permissions for MLflow](https://docs.aws.amazon.com/sagemaker/latest/dg/mlflow-create-tracking-server-iam.html).
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry. To enable automatic model registration, set this value to `True`. To disable automatic model registration, set this value to `False`. If not specified, `AutomaticModelRegistration` defaults to `False`.
   *
   * @public
   */
  AutomaticModelRegistration?: boolean | undefined;

  /**
   * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: TUE:03:30.
   *
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * Tags consisting of key-value pairs used to manage metadata for the tracking server.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Expected Amazon Web Services account ID that owns the Amazon S3 bucket for artifact storage. Defaults to caller's account ID if not provided.
   *
   * @public
   */
  S3BucketOwnerAccountId?: string | undefined;

  /**
   * Enable Amazon S3 Ownership checks when interacting with Amazon S3 buckets from a SageMaker Managed MLflow Tracking Server. Defaults to `True` if not provided.
   *
   * @public
   */
  S3BucketOwnerVerification?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateMlflowTrackingServerResponse {
  /**
   * The ARN of the tracking server.
   *
   * @public
   */
  TrackingServerArn?: string | undefined;
}

/**
 * Specifies details about how containers in a multi-container endpoint are run.
 *
 * @public
 */
export interface InferenceExecutionConfig {
  /**
   * How containers in a multi-container are run. The following values are valid.
   *
   * - `SERIAL` - Containers run as a serial pipeline.
   * - `DIRECT` - Only the individual container that you specify is run.
   *
   * @public
   */
  Mode: InferenceExecutionMode | undefined;
}

/**
 * @public
 */
export interface CreateModelInput {
  /**
   * The name of the new model.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The location of the primary docker image containing inference code, associated artifacts, and custom environment map that the inference code uses when the model is deployed for predictions.
   *
   * @public
   */
  PrimaryContainer?: ContainerDefinition | undefined;

  /**
   * Specifies the containers in the inference pipeline.
   *
   * @public
   */
  Containers?: ContainerDefinition[] | undefined;

  /**
   * Specifies details of how containers in a multi-container endpoint are called.
   *
   * @public
   */
  InferenceExecutionConfig?: InferenceExecutionConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that SageMaker can assume to access model artifacts and docker image for deployment on ML compute instances or for batch transform jobs. Deploying on ML compute instances is part of model hosting. For more information, see [SageMaker Roles](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html).
   *
   * > **Note:** To be able to pass this role to SageMaker, the caller of this API must have the `iam:PassRole` permission.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A [VpcConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html) object that specifies the VPC that you want your model to connect to. Control access to and from your model container by configuring the VPC. `VpcConfig` is used in hosting services and in batch transform. For more information, see [Protect Endpoints by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html) and [Protect Data in Batch Transform Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
   *
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateModelOutput {
  /**
   * The ARN of the model created in SageMaker.
   *
   * @public
   */
  ModelArn: string | undefined;
}

/**
 * Docker container image configuration object for the model bias job.
 *
 * @public
 */
export interface ModelBiasAppSpecification {
  /**
   * The container image to be run by the model bias job.
   *
   * @public
   */
  ImageUri: string | undefined;

  /**
   * JSON formatted S3 file that defines bias parameters. For more information on this JSON configuration file, see [Configure bias parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-bias-parameters.html).
   *
   * @public
   */
  ConfigUri: string | undefined;

  /**
   * Sets the environment variables in the Docker container.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;
}

/**
 * The configuration for a baseline model bias job.
 *
 * @public
 */
export interface ModelBiasBaselineConfig {
  /**
   * The name of the baseline model bias job.
   *
   * @public
   */
  BaseliningJobName?: string | undefined;

  /**
   * The constraints resource for a monitoring job.
   *
   * @public
   */
  ConstraintsResource?: MonitoringConstraintsResource | undefined;
}

/**
 * The ground truth labels for the dataset used for the monitoring job.
 *
 * @public
 */
export interface MonitoringGroundTruthS3Input {
  /**
   * The address of the Amazon S3 location of the ground truth labels.
   *
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * Inputs for the model bias job.
 *
 * @public
 */
export interface ModelBiasJobInput {
  /**
   * Input object for the endpoint
   *
   * @public
   */
  EndpointInput?: EndpointInput | undefined;

  /**
   * Input object for the batch transform job.
   *
   * @public
   */
  BatchTransformInput?: BatchTransformInput | undefined;

  /**
   * Location of ground truth labels to use in model bias job.
   *
   * @public
   */
  GroundTruthS3Input: MonitoringGroundTruthS3Input | undefined;
}

/**
 * @public
 */
export interface CreateModelBiasJobDefinitionRequest {
  /**
   * The name of the bias job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * The baseline configuration for a model bias job.
   *
   * @public
   */
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig | undefined;

  /**
   * Configures the model bias job to run a specified Docker container image.
   *
   * @public
   */
  ModelBiasAppSpecification: ModelBiasAppSpecification | undefined;

  /**
   * Inputs for the model bias job.
   *
   * @public
   */
  ModelBiasJobInput: ModelBiasJobInput | undefined;

  /**
   * The output configuration for monitoring jobs.
   *
   * @public
   */
  ModelBiasJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * Identifies the resources to deploy for a monitoring job.
   *
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * Networking options for a model bias job.
   *
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A time limit for how long the monitoring job is allowed to run before stopping.
   *
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition | undefined;

  /**
   * (Optional) An array of key-value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the *Amazon Web Services Billing and Cost Management User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateModelBiasJobDefinitionResponse {
  /**
   * The Amazon Resource Name (ARN) of the model bias job.
   *
   * @public
   */
  JobDefinitionArn: string | undefined;
}

/**
 * Configure the security settings to protect model card data.
 *
 * @public
 */
export interface ModelCardSecurityConfig {
  /**
   * A Key Management Service [key ID](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id) to use for encrypting a model card.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateModelCardRequest {
  /**
   * The unique name of the model card.
   *
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * An optional Key Management Service key to encrypt, decrypt, and re-encrypt model card content for regulated workloads with highly sensitive data.
   *
   * @public
   */
  SecurityConfig?: ModelCardSecurityConfig | undefined;

  /**
   * The content of the model card. Content must be in [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema) and provided as a string.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.
   *
   * - `Draft`: The model card is a work in progress.
   * - `PendingReview`: The model card is pending review.
   * - `Approved`: The model card is approved.
   * - `Archived`: The model card is archived. No more updates should be made to the model card, but it can still be exported.
   *
   * @public
   */
  ModelCardStatus: ModelCardStatus | undefined;

  /**
   * Key-value pairs used to manage metadata for model cards.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateModelCardResponse {
  /**
   * The Amazon Resource Name (ARN) of the successfully created model card.
   *
   * @public
   */
  ModelCardArn: string | undefined;
}

/**
 * Configure the export output details for an Amazon SageMaker Model Card.
 *
 * @public
 */
export interface ModelCardExportOutputConfig {
  /**
   * The Amazon S3 output path to export your model card PDF.
   *
   * @public
   */
  S3OutputPath: string | undefined;
}

/**
 * @public
 */
export interface CreateModelCardExportJobRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the model card to export.
   *
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * The version of the model card to export. If a version is not provided, then the latest version of the model card is exported.
   *
   * @public
   */
  ModelCardVersion?: number | undefined;

  /**
   * The name of the model card export job.
   *
   * @public
   */
  ModelCardExportJobName: string | undefined;

  /**
   * The model card output configuration that specifies the Amazon S3 path for exporting.
   *
   * @public
   */
  OutputConfig: ModelCardExportOutputConfig | undefined;
}

/**
 * @public
 */
export interface CreateModelCardExportJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the model card export job.
   *
   * @public
   */
  ModelCardExportJobArn: string | undefined;
}

/**
 * Docker container image configuration object for the model explainability job.
 *
 * @public
 */
export interface ModelExplainabilityAppSpecification {
  /**
   * The container image to be run by the model explainability job.
   *
   * @public
   */
  ImageUri: string | undefined;

  /**
   * JSON formatted Amazon S3 file that defines explainability parameters. For more information on this JSON configuration file, see [Configure model explainability parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-model-explainability-parameters.html).
   *
   * @public
   */
  ConfigUri: string | undefined;

  /**
   * Sets the environment variables in the Docker container.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;
}

/**
 * The configuration for a baseline model explainability job.
 *
 * @public
 */
export interface ModelExplainabilityBaselineConfig {
  /**
   * The name of the baseline model explainability job.
   *
   * @public
   */
  BaseliningJobName?: string | undefined;

  /**
   * The constraints resource for a monitoring job.
   *
   * @public
   */
  ConstraintsResource?: MonitoringConstraintsResource | undefined;
}

/**
 * Inputs for the model explainability job.
 *
 * @public
 */
export interface ModelExplainabilityJobInput {
  /**
   * Input object for the endpoint
   *
   * @public
   */
  EndpointInput?: EndpointInput | undefined;

  /**
   * Input object for the batch transform job.
   *
   * @public
   */
  BatchTransformInput?: BatchTransformInput | undefined;
}

/**
 * @public
 */
export interface CreateModelExplainabilityJobDefinitionRequest {
  /**
   * The name of the model explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * The baseline configuration for a model explainability job.
   *
   * @public
   */
  ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig | undefined;

  /**
   * Configures the model explainability job to run a specified Docker container image.
   *
   * @public
   */
  ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification | undefined;

  /**
   * Inputs for the model explainability job.
   *
   * @public
   */
  ModelExplainabilityJobInput: ModelExplainabilityJobInput | undefined;

  /**
   * The output configuration for monitoring jobs.
   *
   * @public
   */
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * Identifies the resources to deploy for a monitoring job.
   *
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * Networking options for a model explainability job.
   *
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A time limit for how long the monitoring job is allowed to run before stopping.
   *
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition | undefined;

  /**
   * (Optional) An array of key-value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the *Amazon Web Services Billing and Cost Management User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateModelExplainabilityJobDefinitionResponse {
  /**
   * The Amazon Resource Name (ARN) of the model explainability job.
   *
   * @public
   */
  JobDefinitionArn: string | undefined;
}

/**
 * Contains details regarding the file source.
 *
 * @public
 */
export interface FileSource {
  /**
   * The type of content stored in the file source.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The digest of the file source.
   *
   * @public
   */
  ContentDigest?: string | undefined;

  /**
   * The Amazon S3 URI for the file source.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
 *
 * @public
 */
export interface DriftCheckBias {
  /**
   * The bias config file for a model.
   *
   * @public
   */
  ConfigFile?: FileSource | undefined;

  /**
   * The pre-training constraints.
   *
   * @public
   */
  PreTrainingConstraints?: MetricsSource | undefined;

  /**
   * The post-training constraints.
   *
   * @public
   */
  PostTrainingConstraints?: MetricsSource | undefined;
}

/**
 * Represents the drift check explainability baselines that can be used when the model monitor is set using the model package.
 *
 * @public
 */
export interface DriftCheckExplainability {
  /**
   * The drift check explainability constraints.
   *
   * @public
   */
  Constraints?: MetricsSource | undefined;

  /**
   * The explainability config file for the model.
   *
   * @public
   */
  ConfigFile?: FileSource | undefined;
}

/**
 * Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.
 *
 * @public
 */
export interface DriftCheckModelDataQuality {
  /**
   * The drift check model data quality statistics.
   *
   * @public
   */
  Statistics?: MetricsSource | undefined;

  /**
   * The drift check model data quality constraints.
   *
   * @public
   */
  Constraints?: MetricsSource | undefined;
}

/**
 * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
 *
 * @public
 */
export interface DriftCheckModelQuality {
  /**
   * The drift check model quality statistics.
   *
   * @public
   */
  Statistics?: MetricsSource | undefined;

  /**
   * The drift check model quality constraints.
   *
   * @public
   */
  Constraints?: MetricsSource | undefined;
}

/**
 * Represents the drift check baselines that can be used when the model monitor is set using the model package.
 *
 * @public
 */
export interface DriftCheckBaselines {
  /**
   * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
   *
   * @public
   */
  Bias?: DriftCheckBias | undefined;

  /**
   * Represents the drift check explainability baselines that can be used when the model monitor is set using the model package.
   *
   * @public
   */
  Explainability?: DriftCheckExplainability | undefined;

  /**
   * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
   *
   * @public
   */
  ModelQuality?: DriftCheckModelQuality | undefined;

  /**
   * Represents the drift check model data quality baselines that can be used when the model monitor is set using the model package.
   *
   * @public
   */
  ModelDataQuality?: DriftCheckModelDataQuality | undefined;
}

/**
 * The model card associated with the model package. Since `ModelPackageModelCard` is tied to a model package, it is a specific usage of a model card and its schema is simplified compared to the schema of `ModelCard`. The `ModelPackageModelCard` schema does not include `model_package_details`, and `model_overview` is composed of the `model_creator` and `model_artifact` properties. For more information about the model package model card schema, see [Model package model card schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html#model-card-schema). For more information about the model card associated with the model package, see [View the Details of a Model Version](https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html).
 *
 * @public
 */
export interface ModelPackageModelCard {
  /**
   * The content of the model card. The content must follow the schema described in [Model Package Model Card Schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html#model-card-schema).
   *
   * @public
   */
  ModelCardContent?: string | undefined;

  /**
   * The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.
   *
   * - `Draft`: The model card is a work in progress.
   * - `PendingReview`: The model card is pending review.
   * - `Approved`: The model card is approved.
   * - `Archived`: The model card is archived. No more updates can be made to the model card content. If you try to update the model card content, you will receive the message `Model Card is in Archived state`.
   *
   * @public
   */
  ModelCardStatus?: ModelCardStatus | undefined;
}

/**
 * A structure describing the current state of the model in its life cycle.
 *
 * @public
 */
export interface ModelLifeCycle {
  /**
   * The current stage in the model life cycle.
   *
   * @public
   */
  Stage: string | undefined;

  /**
   * The current status of a stage in model life cycle.
   *
   * @public
   */
  StageStatus: string | undefined;

  /**
   * Describes the stage related details.
   *
   * @public
   */
  StageDescription?: string | undefined;
}

/**
 * Contains explainability metrics for a model.
 *
 * @public
 */
export interface Explainability {
  /**
   * The explainability report for a model.
   *
   * @public
   */
  Report?: MetricsSource | undefined;
}

/**
 * Data quality constraints and statistics for a model.
 *
 * @public
 */
export interface ModelDataQuality {
  /**
   * Data quality statistics for a model.
   *
   * @public
   */
  Statistics?: MetricsSource | undefined;

  /**
   * Data quality constraints for a model.
   *
   * @public
   */
  Constraints?: MetricsSource | undefined;
}

/**
 * Model quality statistics and constraints.
 *
 * @public
 */
export interface ModelQuality {
  /**
   * Model quality statistics.
   *
   * @public
   */
  Statistics?: MetricsSource | undefined;

  /**
   * Model quality constraints.
   *
   * @public
   */
  Constraints?: MetricsSource | undefined;
}

/**
 * Contains metrics captured from a model.
 *
 * @public
 */
export interface ModelMetrics {
  /**
   * Metrics that measure the quality of a model.
   *
   * @public
   */
  ModelQuality?: ModelQuality | undefined;

  /**
   * Metrics that measure the quality of the input data for a model.
   *
   * @public
   */
  ModelDataQuality?: ModelDataQuality | undefined;

  /**
   * Metrics that measure bias in a model.
   *
   * @public
   */
  Bias?: Bias | undefined;

  /**
   * Metrics that help explain a model.
   *
   * @public
   */
  Explainability?: Explainability | undefined;
}

/**
 * An optional Key Management Service key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with highly sensitive data.
 *
 * @public
 */
export interface ModelPackageSecurityConfig {
  /**
   * The KMS Key ID (`KMSKeyId`) used for encryption of model package information.
   *
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in Amazon Web Services Marketplace that you are subscribed to.
 *
 * @public
 */
export interface SourceAlgorithm {
  /**
   * The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single `gzip` compressed tar archive (`.tar.gz` suffix).
   *
   * > **Note:** The model artifacts must be in an S3 bucket that is in the same Amazon Web Services region as the algorithm.
   *
   * @public
   */
  ModelDataUrl?: string | undefined;

  /**
   * Specifies the location of ML model data to deploy during endpoint creation.
   *
   * @public
   */
  ModelDataSource?: ModelDataSource | undefined;

  /**
   * The ETag associated with Model Data URL.
   *
   * @public
   */
  ModelDataETag?: string | undefined;

  /**
   * The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in Amazon Web Services Marketplace that you are subscribed to.
   *
   * @public
   */
  AlgorithmName: string | undefined;
}

/**
 * A list of algorithms that were used to create a model package.
 *
 * @public
 */
export interface SourceAlgorithmSpecification {
  /**
   * A list of the algorithms that were used to create a model package.
   *
   * @public
   */
  SourceAlgorithms: SourceAlgorithm[] | undefined;
}

/**
 * Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.
 *
 * The data provided in the validation profile is made available to your buyers on Amazon Web Services Marketplace.
 *
 * @public
 */
export interface ModelPackageValidationProfile {
  /**
   * The name of the profile for the model package.
   *
   * @public
   */
  ProfileName: string | undefined;

  /**
   * The `TransformJobDefinition` object that describes the transform job used for the validation of the model package.
   *
   * @public
   */
  TransformJobDefinition: TransformJobDefinition | undefined;
}

/**
 * Specifies batch transform jobs that SageMaker runs to validate your model package.
 *
 * @public
 */
export interface ModelPackageValidationSpecification {
  /**
   * The IAM roles to be used for the validation of the model package.
   *
   * @public
   */
  ValidationRole: string | undefined;

  /**
   * An array of `ModelPackageValidationProfile` objects, each of which specifies a batch transform job that SageMaker runs to validate your model package.
   *
   * @public
   */
  ValidationProfiles: ModelPackageValidationProfile[] | undefined;
}

/**
 * @public
 */
export interface CreateModelPackageInput {
  /**
   * The name of the model package. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).
   *
   * This parameter is required for unversioned models. It is not applicable to versioned models.
   *
   * @public
   */
  ModelPackageName?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the model package group that this model version belongs to.
   *
   * This parameter is required for versioned models, and does not apply to unversioned models.
   *
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * A description of the model package.
   *
   * @public
   */
  ModelPackageDescription?: string | undefined;

  /**
   * The package registration type of the model package input.
   *
   * @public
   */
  ModelPackageRegistrationType?: ModelPackageRegistrationType | undefined;

  /**
   * Specifies details about inference jobs that you can run with models based on this model package, including the following information:
   *
   * - The Amazon ECR paths of containers that contain the inference code and model artifacts.
   * - The instance types that the model package supports for transform jobs and real-time endpoints used for inference.
   * - The input and output content formats that the model package supports for inference.
   *
   * @public
   */
  InferenceSpecification?: InferenceSpecification | undefined;

  /**
   * Specifies configurations for one or more transform jobs that SageMaker runs to test the model package.
   *
   * @public
   */
  ValidationSpecification?: ModelPackageValidationSpecification | undefined;

  /**
   * Details about the algorithm that was used to create the model package.
   *
   * @public
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification | undefined;

  /**
   * Whether to certify the model package for listing on Amazon Web Services Marketplace.
   *
   * This parameter is optional for unversioned models, and does not apply to versioned models.
   *
   * @public
   */
  CertifyForMarketplace?: boolean | undefined;

  /**
   * A list of key value pairs associated with the model. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
   *
   * If you supply `ModelPackageGroupName`, your model package belongs to the model group you specify and uses the tags associated with the model group. In this case, you cannot supply a `tag` argument.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Whether the model is approved for deployment.
   *
   * This parameter is optional for versioned models, and does not apply to unversioned models.
   *
   * For versioned models, the value of this parameter must be set to `Approved` to deploy the model.
   *
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus | undefined;

  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   *
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * A structure that contains model metrics reports.
   *
   * @public
   */
  ModelMetrics?: ModelMetrics | undefined;

  /**
   * A unique token that guarantees that the call to this API is idempotent.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The machine learning domain of your model package and its components. Common machine learning domains include computer vision and natural language processing.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The machine learning task your model package accomplishes. Common machine learning tasks include object detection and image classification. The following tasks are supported by Inference Recommender: `"IMAGE_CLASSIFICATION"` | `"OBJECT_DETECTION"` | `"TEXT_GENERATION"` |`"IMAGE_SEGMENTATION"` | `"FILL_MASK"` | `"CLASSIFICATION"` | `"REGRESSION"` | `"OTHER"`.
   *
   * Specify "OTHER" if none of the tasks listed fit your use case.
   *
   * @public
   */
  Task?: string | undefined;

  /**
   * The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix). This archive can hold multiple files that are all equally used in the load test. Each file in the archive must satisfy the size constraints of the [InvokeEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpoint.html#API_runtime_InvokeEndpoint_RequestSyntax) call.
   *
   * @public
   */
  SamplePayloadUrl?: string | undefined;

  /**
   * The metadata properties associated with the model package versions.
   *
   * @public
   */
  CustomerMetadataProperties?: Record<string, string> | undefined;

  /**
   * Represents the drift check baselines that can be used when the model monitor is set using the model package. For more information, see the topic on [Drift Detection against Previous Baselines in SageMaker Pipelines](https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-quality-clarify-baseline-lifecycle.html#pipelines-quality-clarify-baseline-drift-detection) in the *Amazon SageMaker Developer Guide*.
   *
   * @public
   */
  DriftCheckBaselines?: DriftCheckBaselines | undefined;

  /**
   * An array of additional Inference Specification objects. Each additional Inference Specification specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.
   *
   * @public
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[] | undefined;

  /**
   * Indicates if you want to skip model validation.
   *
   * @public
   */
  SkipModelValidation?: SkipModelValidation | undefined;

  /**
   * The URI of the source for the model package. If you want to clone a model package, set it to the model package Amazon Resource Name (ARN). If you want to register a model, set it to the model ARN.
   *
   * @public
   */
  SourceUri?: string | undefined;

  /**
   * The KMS Key ID (`KMSKeyId`) used for encryption of model package information.
   *
   * @public
   */
  SecurityConfig?: ModelPackageSecurityConfig | undefined;

  /**
   * The model card associated with the model package. Since `ModelPackageModelCard` is tied to a model package, it is a specific usage of a model card and its schema is simplified compared to the schema of `ModelCard`. The `ModelPackageModelCard` schema does not include `model_package_details`, and `model_overview` is composed of the `model_creator` and `model_artifact` properties. For more information about the model package model card schema, see [Model package model card schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html#model-card-schema). For more information about the model card associated with the model package, see [View the Details of a Model Version](https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry-details.html).
   *
   * @public
   */
  ModelCard?: ModelPackageModelCard | undefined;

  /**
   * A structure describing the current state of the model in its life cycle.
   *
   * @public
   */
  ModelLifeCycle?: ModelLifeCycle | undefined;

  /**
   * The storage type of the model package.
   *
   * @public
   */
  ManagedStorageType?: ManagedStorageType | undefined;
}

/**
 * @public
 */
export interface CreateModelPackageOutput {
  /**
   * The Amazon Resource Name (ARN) of the new model package.
   *
   * @public
   */
  ModelPackageArn: string | undefined;
}

/**
 * The managed configuration of a model package group.
 *
 * @public
 */
export interface ManagedConfiguration {
  /**
   * The storage type of the model package.
   *
   * @public
   */
  ManagedStorageType?: ManagedStorageType | undefined;
}

/**
 * @public
 */
export interface CreateModelPackageGroupInput {
  /**
   * The name of the model group.
   *
   * @public
   */
  ModelPackageGroupName: string | undefined;

  /**
   * A description for the model group.
   *
   * @public
   */
  ModelPackageGroupDescription?: string | undefined;

  /**
   * A list of key value pairs associated with the model group. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The managed configuration of the model package group.
   *
   * @public
   */
  ManagedConfiguration?: ManagedConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateModelPackageGroupOutput {
  /**
   * The Amazon Resource Name (ARN) of the model group.
   *
   * @public
   */
  ModelPackageGroupArn: string | undefined;
}

/**
 * Container image configuration object for the monitoring job.
 *
 * @public
 */
export interface ModelQualityAppSpecification {
  /**
   * The address of the container image that the monitoring job runs.
   *
   * @public
   */
  ImageUri: string | undefined;

  /**
   * Specifies the entrypoint for a container that the monitoring job runs.
   *
   * @public
   */
  ContainerEntrypoint?: string[] | undefined;

  /**
   * An array of arguments for the container used to run the monitoring job.
   *
   * @public
   */
  ContainerArguments?: string[] | undefined;

  /**
   * An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flattened JSON so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers.
   *
   * @public
   */
  RecordPreprocessorSourceUri?: string | undefined;

  /**
   * An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers.
   *
   * @public
   */
  PostAnalyticsProcessorSourceUri?: string | undefined;

  /**
   * The machine learning problem type of the model that the monitoring job monitors.
   *
   * @public
   */
  ProblemType?: MonitoringProblemType | undefined;

  /**
   * Sets the environment variables in the container that the monitoring job runs.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;
}

/**
 * Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
 *
 * @public
 */
export interface ModelQualityBaselineConfig {
  /**
   * The name of the job that performs baselining for the monitoring job.
   *
   * @public
   */
  BaseliningJobName?: string | undefined;

  /**
   * The constraints resource for a monitoring job.
   *
   * @public
   */
  ConstraintsResource?: MonitoringConstraintsResource | undefined;
}

/**
 * The input for the model quality monitoring job. Currently endpoints are supported for input for model quality monitoring jobs.
 *
 * @public
 */
export interface ModelQualityJobInput {
  /**
   * Input object for the endpoint
   *
   * @public
   */
  EndpointInput?: EndpointInput | undefined;

  /**
   * Input object for the batch transform job.
   *
   * @public
   */
  BatchTransformInput?: BatchTransformInput | undefined;

  /**
   * The ground truth label provided for the model.
   *
   * @public
   */
  GroundTruthS3Input: MonitoringGroundTruthS3Input | undefined;
}

/**
 * @public
 */
export interface CreateModelQualityJobDefinitionRequest {
  /**
   * The name of the monitoring job definition.
   *
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * Specifies the constraints and baselines for the monitoring job.
   *
   * @public
   */
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig | undefined;

  /**
   * The container that runs the monitoring job.
   *
   * @public
   */
  ModelQualityAppSpecification: ModelQualityAppSpecification | undefined;

  /**
   * A list of the inputs that are monitored. Currently endpoints are supported.
   *
   * @public
   */
  ModelQualityJobInput: ModelQualityJobInput | undefined;

  /**
   * The output configuration for monitoring jobs.
   *
   * @public
   */
  ModelQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * Identifies the resources to deploy for a monitoring job.
   *
   * @public
   */
  JobResources: MonitoringResources | undefined;

  /**
   * Specifies the network configuration for the monitoring job.
   *
   * @public
   */
  NetworkConfig?: MonitoringNetworkConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A time limit for how long the monitoring job is allowed to run before stopping.
   *
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition | undefined;

  /**
   * (Optional) An array of key-value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the *Amazon Web Services Billing and Cost Management User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

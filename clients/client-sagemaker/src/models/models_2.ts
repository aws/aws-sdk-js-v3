// smithy-typescript generated code
import type {
  _InstanceType,
  ActionStatus,
  ActivationState,
  AIBenchmarkJobStatus,
  AIRecommendationJobStatus,
  AlgorithmStatus,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppStatus,
  AppType,
  AuthMode,
  AutoMLJobSecondaryStatus,
  AutoMLJobStatus,
  AutoMLProblemTypeConfigName,
  BatchStrategy,
  CapacityReservationPreference,
  CaptureStatus,
  ClusterNodeProvisioningMode,
  ClusterNodeRecovery,
  ClusterStatus,
  CompilationJobStatus,
  CustomizationTechnique,
  DataDistributionType,
  DeepHealthCheckType,
  DirectInternetAccess,
  DomainStatus,
  EdgePackagingJobStatus,
  EdgePresetDeploymentStatus,
  EdgePresetDeploymentType,
  EnabledOrDisabled,
  EndpointStatus,
  EvaluationType,
  FeatureStatus,
  HomeEfsFileSystemCreation,
  HubContentType,
  InputMode,
  IPAddressType,
  JobCategory,
  JoinSource,
  ModelSpeculativeDecodingS3DataType,
  ModelSpeculativeDecodingTechnique,
  MonitoringType,
  NotebookInstanceAcceleratorType,
  OptimizationJobDeploymentInstanceType,
  PartnerAppAuthType,
  PartnerAppType,
  Peft,
  ProblemType,
  ProcessingInstanceType,
  ProcessingS3CompressionType,
  ProcessingS3DataDistributionType,
  ProcessingS3DataType,
  ProcessingS3InputMode,
  ProcessingS3UploadMode,
  ProductionVariantAcceleratorType,
  ProductionVariantInstanceType,
  RecommendationStatus,
  RedshiftResultCompressionType,
  RedshiftResultFormat,
  RetentionType,
  RootAccess,
  RuleEvaluationStatus,
  SchedulerConfigComponent,
  SchedulerResourceStatus,
  ServerlessJobType,
  SharingType,
  StageStatus,
  Statistic,
  StudioLifecycleConfigAppType,
  TagPropagation,
  TrialComponentPrimaryStatus,
  VariantStatus,
  WorkforceIpAddressType,
} from "./enums";
import type {
  AcceleratorPartitionLayout,
  ActionSource,
  AIAdapterSource,
  AIBenchmarkNetworkConfig,
  AIBenchmarkOutputResult,
  AIBenchmarkTarget,
  AIDatasetConfig,
  AIModelSource,
  AIRecommendation,
  AIRecommendationComputeSpec,
  AIRecommendationInferenceSpecification,
  AIRecommendationOutputResult,
  AIRecommendationPerformanceTarget,
  AIWorkloadConfigs,
  AlgorithmSpecification,
  AlgorithmStatusDetails,
  AlgorithmValidationSpecification,
  AppSpecification,
  ArtifactSource,
  AsyncInferenceConfig,
  AthenaDatasetDefinition,
  AutoMLCandidate,
  AutoMLChannel,
  AutoMLComputeConfig,
  AutoMLDataSplitConfig,
  AutoMLJobArtifacts,
  AutoMLJobChannel,
  AutoMLJobCompletionCriteria,
  AutoMLJobConfig,
  AutoMLJobObjective,
  AutoMLOutputDataConfig,
  AutoMLPartialFailureReason,
  AutoMLProblemTypeConfig,
  AutoMLResolvedAttributes,
  AutoMLSecurityConfig,
  BatchDataCaptureConfig,
  BatchTransformInput,
  CfnCreateTemplateProvider,
  Channel,
  CheckpointConfig,
  ClusterAutoScalingConfigOutput,
  ClusterEventDetail,
  ClusterInstanceGroupDetails,
  ClusterNodeDetails,
  ClusterOrchestrator,
  ClusterRestrictedInstanceGroupDetails,
  CodeEditorAppImageConfig,
  InferenceSpecification,
  JupyterLabAppImageConfig,
  KernelGatewayImageConfig,
  OutputDataConfig,
  ResourceConfig,
  ResourceSpec,
  StoppingCondition,
  Tag,
  TransformInput,
  TransformOutput,
  TransformResources,
  UserContext,
  VpcConfig,
} from "./models_0";
import type {
  ClusterRestrictedInstanceGroupsConfigOutput,
  ClusterTieredStorageConfig,
  CodeRepository,
  CognitoConfig,
  CognitoMemberDefinition,
  CollectionConfiguration,
  ComputeQuotaConfig,
  ComputeQuotaTarget,
  ContextSource,
  DataCaptureConfig,
  DataQualityAppSpecification,
  DataQualityBaselineConfig,
  DataQualityJobInput,
  DefaultSpaceSettings,
  DeploymentConfig,
  DeviceSelectionConfig,
  DomainSettings,
  EdgeDeploymentConfig,
  EdgeDeploymentModelConfig,
  EdgeOutputConfig,
  EndpointInput,
  ExplainerConfig,
  GitConfig,
  InputConfig,
  JupyterServerAppSettings,
  KernelGatewayAppSettings,
  MetadataProperties,
  MetricsConfig,
  ModelDeployConfig,
  MonitoringConstraintsResource,
  MonitoringNetworkConfig,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringStatisticsResource,
  MonitoringStoppingCondition,
  NeoVpcConfig,
  OutputConfig,
  ProductionVariant,
  ProductionVariantManagedInstanceScaling,
  ProductionVariantRoutingConfig,
  ProductionVariantServerlessConfig,
  RetryStrategy,
  SchedulerConfig,
  TrainingSpecification,
  UserSettings,
} from "./models_1";

/**
 * @public
 */
export interface CreateModelQualityJobDefinitionResponse {
  /**
   * The Amazon Resource Name (ARN) of the model quality monitoring job.
   *
   * @public
   */
  JobDefinitionArn: string | undefined;
}

/**
 * Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
 *
 * @public
 */
export interface MonitoringBaselineConfig {
  /**
   * The name of the job that performs baselining for the monitoring job.
   *
   * @public
   */
  BaseliningJobName?: string | undefined;

  /**
   * The baseline constraint file in Amazon S3 that the current monitoring job should validated against.
   *
   * @public
   */
  ConstraintsResource?: MonitoringConstraintsResource | undefined;

  /**
   * The baseline statistics file in Amazon S3 that the current monitoring job should be validated against.
   *
   * @public
   */
  StatisticsResource?: MonitoringStatisticsResource | undefined;
}

/**
 * Container image configuration object for the monitoring job.
 *
 * @public
 */
export interface MonitoringAppSpecification {
  /**
   * The container image to be run by the monitoring job.
   *
   * @public
   */
  ImageUri: string | undefined;

  /**
   * Specifies the entrypoint for a container used to run the monitoring job.
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
}

/**
 * The inputs for a monitoring job.
 *
 * @public
 */
export interface MonitoringInput {
  /**
   * The endpoint for a monitoring job.
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
 * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
 *
 * @public
 */
export interface NetworkConfig {
  /**
   * Whether to encrypt all communications between distributed processing jobs. Choose `True` to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
   *
   * @public
   */
  EnableInterContainerTrafficEncryption?: boolean | undefined;

  /**
   * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
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
 * Defines the monitoring job.
 *
 * @public
 */
export interface MonitoringJobDefinition {
  /**
   * Baseline configuration used to validate that the data conforms to the specified constraints and statistics
   *
   * @public
   */
  BaselineConfig?: MonitoringBaselineConfig | undefined;

  /**
   * The array of inputs for the monitoring job. Currently we support monitoring an Amazon SageMaker AI Endpoint.
   *
   * @public
   */
  MonitoringInputs: MonitoringInput[] | undefined;

  /**
   * The array of outputs from the monitoring job to be uploaded to Amazon S3.
   *
   * @public
   */
  MonitoringOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a monitoring job. In distributed processing, you specify more than one instance.
   *
   * @public
   */
  MonitoringResources: MonitoringResources | undefined;

  /**
   * Configures the monitoring job to run a specified Docker container image.
   *
   * @public
   */
  MonitoringAppSpecification: MonitoringAppSpecification | undefined;

  /**
   * Specifies a time limit for how long the monitoring job is allowed to run.
   *
   * @public
   */
  StoppingCondition?: MonitoringStoppingCondition | undefined;

  /**
   * Sets the environment variables in the Docker container.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * Specifies networking options for an monitoring job.
   *
   * @public
   */
  NetworkConfig?: NetworkConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI can assume to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * Configuration details about the monitoring schedule.
 *
 * @public
 */
export interface ScheduleConfig {
  /**
   * A cron expression that describes details about the monitoring schedule.
   *
   * The supported cron expressions are:
   *
   * - If you want to set the job to start every hour, use the following:
   *
   *   `Hourly: cron(0 * ? * * *)`
   * - If you want to start the job daily:
   *
   *   `cron(0 [00-23] ? * * *)`
   * - If you want to run the job one time, immediately, use the following keyword:
   *
   *   `NOW`
   *
   * For example, the following are valid cron expressions:
   *
   * - Daily at noon UTC: `cron(0 12 ? * * *)`
   * - Daily at midnight UTC: `cron(0 0 ? * * *)`
   *
   * To support running every 6, 12 hours, the following are also supported:
   *
   * `cron(0 [00-23]/[01-24] ? * * *)`
   *
   * For example, the following are valid cron expressions:
   *
   * - Every 12 hours, starting at 5pm UTC: `cron(0 17/12 ? * * *)`
   * - Every two hours starting at midnight: `cron(0 0/2 ? * * *)`
   *
   * > **Note:**
   * >
   * > - Even though the cron expression is set to start at 5PM UTC, note that there could be a delay of 0-20 minutes from the actual requested time to run the execution.
   * > - We recommend that if you would like a daily schedule, you do not provide this parameter. Amazon SageMaker AI will pick a time for running every day.
   *
   * You can also specify the keyword `NOW` to run the monitoring job immediately, one time, without recurring.
   *
   * @public
   */
  ScheduleExpression: string | undefined;

  /**
   * Sets the start time for a monitoring job window. Express this time as an offset to the times that you schedule your monitoring jobs to run. You schedule monitoring jobs with the `ScheduleExpression` parameter. Specify this offset in ISO 8601 duration format. For example, if you want to monitor the five hours of data in your dataset that precede the start of each monitoring job, you would specify: `"-PT5H"`.
   *
   * The start time that you specify must not precede the end time that you specify by more than 24 hours. You specify the end time with the `DataAnalysisEndTime` parameter.
   *
   * If you set `ScheduleExpression` to `NOW`, this parameter is required.
   *
   * @public
   */
  DataAnalysisStartTime?: string | undefined;

  /**
   * Sets the end time for a monitoring job window. Express this time as an offset to the times that you schedule your monitoring jobs to run. You schedule monitoring jobs with the `ScheduleExpression` parameter. Specify this offset in ISO 8601 duration format. For example, if you want to end the window one hour before the start of each monitoring job, you would specify: `"-PT1H"`.
   *
   * The end time that you specify must not follow the start time that you specify by more than 24 hours. You specify the start time with the `DataAnalysisStartTime` parameter.
   *
   * If you set `ScheduleExpression` to `NOW`, this parameter is required.
   *
   * @public
   */
  DataAnalysisEndTime?: string | undefined;
}

/**
 * Configures the monitoring schedule and defines the monitoring job.
 *
 * @public
 */
export interface MonitoringScheduleConfig {
  /**
   * Configures the monitoring schedule.
   *
   * @public
   */
  ScheduleConfig?: ScheduleConfig | undefined;

  /**
   * Defines the monitoring job.
   *
   * @public
   */
  MonitoringJobDefinition?: MonitoringJobDefinition | undefined;

  /**
   * The name of the monitoring job definition to schedule.
   *
   * @public
   */
  MonitoringJobDefinitionName?: string | undefined;

  /**
   * The type of the monitoring job definition to schedule.
   *
   * @public
   */
  MonitoringType?: MonitoringType | undefined;
}

/**
 * @public
 */
export interface CreateMonitoringScheduleRequest {
  /**
   * The name of the monitoring schedule. The name must be unique within an Amazon Web Services Region within an Amazon Web Services account.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * The configuration object that specifies the monitoring schedule and defines the monitoring job.
   *
   * @public
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

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
export interface CreateMonitoringScheduleResponse {
  /**
   * The Amazon Resource Name (ARN) of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleArn: string | undefined;
}

/**
 * Information on the IMDS configuration of the notebook instance
 *
 * @public
 */
export interface InstanceMetadataServiceConfiguration {
  /**
   * Indicates the minimum IMDS version that the notebook instance supports. When passed as part of `CreateNotebookInstance`, if no value is selected, then it defaults to IMDSv1. This means that both IMDSv1 and IMDSv2 are supported. If passed as part of `UpdateNotebookInstance`, there is no default.
   *
   * @public
   */
  MinimumInstanceMetadataServiceVersion: string | undefined;
}

/**
 * @public
 */
export interface CreateNotebookInstanceInput {
  /**
   * The name of the new notebook instance.
   *
   * @public
   */
  NotebookInstanceName: string | undefined;

  /**
   * The type of ML compute instance to launch for the notebook instance.
   *
   * @public
   */
  InstanceType: _InstanceType | undefined;

  /**
   * The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The IP address type for the notebook instance. Specify `ipv4` for IPv4-only connectivity or `dualstack` for both IPv4 and IPv6 connectivity. When you specify `dualstack`, the subnet must support IPv6 CIDR blocks. If not specified, defaults to `ipv4`.
   *
   * @public
   */
  IpAddressType?: IPAddressType | undefined;

  /**
   * When you send any requests to Amazon Web Services resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf. You must grant this role necessary permissions so SageMaker AI can perform these tasks. The policy must allow the SageMaker AI service principal (sagemaker.amazonaws.com) permissions to assume this role. For more information, see [SageMaker AI Roles](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html).
   *
   * > **Note:** To be able to pass this role to SageMaker AI, the caller of this API must have the `iam:PassRole` permission.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a Amazon Web Services Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance. The KMS key you provide must be enabled. For information, see [Enabling and Disabling Keys](https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html) in the *Amazon Web Services Key Management Service Developer Guide*.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of a lifecycle configuration to associate with the notebook instance. For information about lifestyle configurations, see [Step 2.1: (Optional) Customize a Notebook Instance](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html).
   *
   * @public
   */
  LifecycleConfigName?: string | undefined;

  /**
   * Sets whether SageMaker AI provides internet access to the notebook instance. If you set this to `Disabled` this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker AI training and endpoint services unless you configure a NAT Gateway in your VPC.
   *
   * For more information, see [Notebook Instances Are Internet-Enabled by Default](https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access). You can set the value of this parameter to `Disabled` only if you set a value for the `SubnetId` parameter.
   *
   * @public
   */
  DirectInternetAccess?: DirectInternetAccess | undefined;

  /**
   * The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB.
   *
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * This parameter is no longer supported. Elastic Inference (EI) is no longer available.
   *
   * This parameter was used to specify a list of EI instance types to associate with this notebook instance.
   *
   * @public
   */
  AcceleratorTypes?: NotebookInstanceAcceleratorType[] | undefined;

  /**
   * A Git repository to associate with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in [Amazon Web Services CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see [Associating Git Repositories with SageMaker AI Notebook Instances](https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html).
   *
   * @public
   */
  DefaultCodeRepository?: string | undefined;

  /**
   * An array of up to three Git repositories to associate with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in [Amazon Web Services CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see [Associating Git Repositories with SageMaker AI Notebook Instances](https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html).
   *
   * @public
   */
  AdditionalCodeRepositories?: string[] | undefined;

  /**
   * Whether root access is enabled or disabled for users of the notebook instance. The default value is `Enabled`.
   *
   * > **Note:** Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.
   *
   * @public
   */
  RootAccess?: RootAccess | undefined;

  /**
   * The platform identifier of the notebook instance runtime environment. The default value is `notebook-al2023-v1`.
   *
   * @public
   */
  PlatformIdentifier?: string | undefined;

  /**
   * Information on the IMDS configuration of the notebook instance
   *
   * @public
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateNotebookInstanceOutput {
  /**
   * The Amazon Resource Name (ARN) of the notebook instance.
   *
   * @public
   */
  NotebookInstanceArn?: string | undefined;
}

/**
 * Contains the notebook instance lifecycle configuration script.
 *
 * Each lifecycle configuration script has a limit of 16384 characters.
 *
 * The value of the `$PATH` environment variable that is available to both scripts is `/sbin:bin:/usr/sbin:/usr/bin`.
 *
 * View Amazon CloudWatch Logs for notebook instance lifecycle configurations in log group `/aws/sagemaker/NotebookInstances` in log stream `[notebook-instance-name]/[LifecycleConfigHook]`.
 *
 * Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.
 *
 * For information about notebook instance lifestyle configurations, see [Step 2.1: (Optional) Customize a Notebook Instance](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html).
 *
 * @public
 */
export interface NotebookInstanceLifecycleHook {
  /**
   * A base64-encoded string that contains a shell script for a notebook instance lifecycle configuration.
   *
   * @public
   */
  Content?: string | undefined;
}

/**
 * @public
 */
export interface CreateNotebookInstanceLifecycleConfigInput {
  /**
   * The name of the lifecycle configuration.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * A shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.
   *
   * @public
   */
  OnCreate?: NotebookInstanceLifecycleHook[] | undefined;

  /**
   * A shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.
   *
   * @public
   */
  OnStart?: NotebookInstanceLifecycleHook[] | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateNotebookInstanceLifecycleConfigOutput {
  /**
   * The Amazon Resource Name (ARN) of the lifecycle configuration.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigArn?: string | undefined;
}

/**
 * The access configuration settings for the source ML model for an optimization job, where you can accept the model end-user license agreement (EULA).
 *
 * @public
 */
export interface OptimizationModelAccessConfig {
  /**
   * Specifies agreement to the model end-user license agreement (EULA). The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.
   *
   * @public
   */
  AcceptEula: boolean | undefined;
}

/**
 * The Amazon S3 location of a source model to optimize with an optimization job.
 *
 * @public
 */
export interface OptimizationJobModelSourceS3 {
  /**
   * An Amazon S3 URI that locates a source model to optimize with an optimization job.
   *
   * @public
   */
  S3Uri?: string | undefined;

  /**
   * The access configuration settings for the source ML model for an optimization job, where you can accept the model end-user license agreement (EULA).
   *
   * @public
   */
  ModelAccessConfig?: OptimizationModelAccessConfig | undefined;
}

/**
 * A SageMaker model to use as the source or destination for an optimization job.
 *
 * @public
 */
export interface OptimizationSageMakerModel {
  /**
   * The name of a SageMaker model.
   *
   * @public
   */
  ModelName?: string | undefined;
}

/**
 * The location of the source model to optimize with an optimization job.
 *
 * @public
 */
export interface OptimizationJobModelSource {
  /**
   * The Amazon S3 location of a source model to optimize with an optimization job.
   *
   * @public
   */
  S3?: OptimizationJobModelSourceS3 | undefined;

  /**
   * The name of an existing SageMaker model to optimize with an optimization job.
   *
   * @public
   */
  SageMakerModel?: OptimizationSageMakerModel | undefined;
}

/**
 * Settings for the model compilation technique that's applied by a model optimization job.
 *
 * @public
 */
export interface ModelCompilationConfig {
  /**
   * The URI of an LMI DLC in Amazon ECR. SageMaker uses this image to run the optimization.
   *
   * @public
   */
  Image?: string | undefined;

  /**
   * Environment variables that override the default ones in the model container.
   *
   * @public
   */
  OverrideEnvironment?: Record<string, string> | undefined;
}

/**
 * Settings for the model quantization technique that's applied by a model optimization job.
 *
 * @public
 */
export interface ModelQuantizationConfig {
  /**
   * The URI of an LMI DLC in Amazon ECR. SageMaker uses this image to run the optimization.
   *
   * @public
   */
  Image?: string | undefined;

  /**
   * Environment variables that override the default ones in the model container.
   *
   * @public
   */
  OverrideEnvironment?: Record<string, string> | undefined;
}

/**
 * Settings for the model sharding technique that's applied by a model optimization job.
 *
 * @public
 */
export interface ModelShardingConfig {
  /**
   * The URI of an LMI DLC in Amazon ECR. SageMaker uses this image to run the optimization.
   *
   * @public
   */
  Image?: string | undefined;

  /**
   * Environment variables that override the default ones in the model container.
   *
   * @public
   */
  OverrideEnvironment?: Record<string, string> | undefined;
}

/**
 * Contains information about the training data source for speculative decoding.
 *
 * @public
 */
export interface ModelSpeculativeDecodingTrainingDataSource {
  /**
   * The Amazon S3 URI that points to the training data for speculative decoding.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The type of data stored in the Amazon S3 location. Valid values are `S3Prefix` or `ManifestFile`.
   *
   * @public
   */
  S3DataType: ModelSpeculativeDecodingS3DataType | undefined;
}

/**
 * Settings for the model speculative decoding technique that's applied by a model optimization job.
 *
 * @public
 */
export interface ModelSpeculativeDecodingConfig {
  /**
   * The speculative decoding technique to apply during model optimization.
   *
   * @public
   */
  Technique: ModelSpeculativeDecodingTechnique | undefined;

  /**
   * The location of the training data to use for speculative decoding. The data must be formatted as ShareGPT, OpenAI Completions or OpenAI Chat Completions. The input can also be unencrypted captured data from a SageMaker endpoint as long as the endpoint uses one of the above formats.
   *
   * @public
   */
  TrainingDataSource?: ModelSpeculativeDecodingTrainingDataSource | undefined;
}

/**
 * Settings for an optimization technique that you apply with a model optimization job.
 *
 * @public
 */
export type OptimizationConfig =
  | OptimizationConfig.ModelCompilationConfigMember
  | OptimizationConfig.ModelQuantizationConfigMember
  | OptimizationConfig.ModelShardingConfigMember
  | OptimizationConfig.ModelSpeculativeDecodingConfigMember
  | OptimizationConfig.$UnknownMember;

/**
 * @public
 */
export namespace OptimizationConfig {
  /**
   * Settings for the model quantization technique that's applied by a model optimization job.
   *
   * @public
   */
  export interface ModelQuantizationConfigMember {
    ModelQuantizationConfig: ModelQuantizationConfig;
    ModelCompilationConfig?: never;
    ModelShardingConfig?: never;
    ModelSpeculativeDecodingConfig?: never;
    $unknown?: never;
  }

  /**
   * Settings for the model compilation technique that's applied by a model optimization job.
   *
   * @public
   */
  export interface ModelCompilationConfigMember {
    ModelQuantizationConfig?: never;
    ModelCompilationConfig: ModelCompilationConfig;
    ModelShardingConfig?: never;
    ModelSpeculativeDecodingConfig?: never;
    $unknown?: never;
  }

  /**
   * Settings for the model sharding technique that's applied by a model optimization job.
   *
   * @public
   */
  export interface ModelShardingConfigMember {
    ModelQuantizationConfig?: never;
    ModelCompilationConfig?: never;
    ModelShardingConfig: ModelShardingConfig;
    ModelSpeculativeDecodingConfig?: never;
    $unknown?: never;
  }

  /**
   * Settings for the model speculative decoding technique that's applied by a model optimization job.
   *
   * @public
   */
  export interface ModelSpeculativeDecodingConfigMember {
    ModelQuantizationConfig?: never;
    ModelCompilationConfig?: never;
    ModelShardingConfig?: never;
    ModelSpeculativeDecodingConfig: ModelSpeculativeDecodingConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ModelQuantizationConfig?: never;
    ModelCompilationConfig?: never;
    ModelShardingConfig?: never;
    ModelSpeculativeDecodingConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ModelQuantizationConfig: (value: ModelQuantizationConfig) => T;
    ModelCompilationConfig: (value: ModelCompilationConfig) => T;
    ModelShardingConfig: (value: ModelShardingConfig) => T;
    ModelSpeculativeDecodingConfig: (value: ModelSpeculativeDecodingConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details for where to store the optimized model that you create with the optimization job.
 *
 * @public
 */
export interface OptimizationJobOutputConfig {
  /**
   * The Amazon Resource Name (ARN) of a key in Amazon Web Services KMS. SageMaker uses they key to encrypt the artifacts of the optimized model when SageMaker uploads the model to Amazon S3.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The Amazon S3 URI for where to store the optimized model that you create with an optimization job.
   *
   * @public
   */
  S3OutputLocation: string | undefined;

  /**
   * The name of a SageMaker model to use as the output destination for an optimization job.
   *
   * @public
   */
  SageMakerModel?: OptimizationSageMakerModel | undefined;
}

/**
 * A VPC in Amazon VPC that's accessible to an optimized that you create with an optimization job. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
 *
 * @public
 */
export interface OptimizationVpcConfig {
  /**
   * The VPC security group IDs, in the form `sg-xxxxxxxx`. Specify the security groups for the VPC that is specified in the `Subnets` field.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The ID of the subnets in the VPC to which you want to connect your optimized model.
   *
   * @public
   */
  Subnets: string[] | undefined;
}

/**
 * @public
 */
export interface CreateOptimizationJobRequest {
  /**
   * A custom name for the new optimization job.
   *
   * @public
   */
  OptimizationJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker AI to perform tasks on your behalf.
   *
   * During model optimization, Amazon SageMaker AI needs your permission to:
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
   * The location of the source model to optimize with an optimization job.
   *
   * @public
   */
  ModelSource: OptimizationJobModelSource | undefined;

  /**
   * The type of instance that hosts the optimized model that you create with the optimization job.
   *
   * @public
   */
  DeploymentInstanceType: OptimizationJobDeploymentInstanceType | undefined;

  /**
   * The maximum number of instances to use for the optimization job.
   *
   * @public
   */
  MaxInstanceCount?: number | undefined;

  /**
   * The environment variables to set in the model container.
   *
   * @public
   */
  OptimizationEnvironment?: Record<string, string> | undefined;

  /**
   * Settings for each of the optimization techniques that the job applies.
   *
   * @public
   */
  OptimizationConfigs: OptimizationConfig[] | undefined;

  /**
   * Details for where to store the optimized model that you create with the optimization job.
   *
   * @public
   */
  OutputConfig: OptimizationJobOutputConfig | undefined;

  /**
   * Specifies a limit to how long a job can run. When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs.
   *
   * To stop a training job, SageMaker sends the algorithm the `SIGTERM` signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost.
   *
   * The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with `CreateModel`.
   *
   * > **Note:** The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
   *
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * A list of key-value pairs associated with the optimization job. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A VPC in Amazon VPC that your optimized model has access to.
   *
   * @public
   */
  VpcConfig?: OptimizationVpcConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training plan to use for this optimization job.
   *
   * When you use reserved capacity from a training plan, the optimization job runs on that reserved capacity instead of on-demand capacity. If you omit this field, the job uses on-demand capacity. You can specify at most one training plan.
   *
   * For more information about how to reserve GPU capacity for your optimization jobs using Amazon SageMaker Training Plans, see [Reserve capacity with training plans](https://docs.aws.amazon.com/sagemaker/latest/dg/reserve-capacity-with-training-plans.html).
   *
   * @public
   */
  TrainingPlanArns?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateOptimizationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the optimization job.
   *
   * @public
   */
  OptimizationJobArn: string | undefined;
}

/**
 * Defines the mapping between an in-app role and the Amazon Web Services IAM Identity Center group patterns that should be assigned to that role within the SageMaker Partner AI App.
 *
 * @public
 */
export interface RoleGroupAssignment {
  /**
   * The name of the in-app role within the SageMaker Partner AI App. The specific roles available depend on the app type and version.
   *
   * @public
   */
  RoleName: string | undefined;

  /**
   * A list of Amazon Web Services IAM Identity Center group patterns that should be assigned to the specified role. Group patterns support wildcard matching using `*`.
   *
   * @public
   */
  GroupPatterns: string[] | undefined;
}

/**
 * Configuration settings for the SageMaker Partner AI App.
 *
 * @public
 */
export interface PartnerAppConfig {
  /**
   * The list of users that are given admin access to the SageMaker Partner AI App.
   *
   * @public
   */
  AdminUsers?: string[] | undefined;

  /**
   * This is a map of required inputs for a SageMaker Partner AI App. Based on the application type, the map is populated with a key and value pair that is specific to the user and application.
   *
   * @public
   */
  Arguments?: Record<string, string> | undefined;

  /**
   * A list of Amazon Web Services IAM Identity Center group patterns that can access the SageMaker Partner AI App. Group names support wildcard matching using `*`. An empty list indicates the app will not use Identity Center group features. All groups specified in `RoleGroupAssignments` must match patterns in this list.
   *
   * @public
   */
  AssignedGroupPatterns?: string[] | undefined;

  /**
   * A map of in-app roles to Amazon Web Services IAM Identity Center group patterns. Groups assigned to specific roles receive those permissions, while groups in `AssignedGroupPatterns` but not in this map receive default in-app role depending on app type. Group patterns support wildcard matching using `*`. Currently supported by Fiddler version 1.3 and later with roles: `ORG_MEMBER` (default) and `ORG_ADMIN`.
   *
   * @public
   */
  RoleGroupAssignments?: RoleGroupAssignment[] | undefined;
}

/**
 * Specifies the Amazon Web Services IAM Identity Center configuration to use for a SageMaker Partner AI App that uses `IDC` authorization.
 *
 * @public
 */
export interface IdcConfigInput {
  /**
   * The ARN of the Amazon Web Services IAM Identity Center instance that the SageMaker Partner AI App uses to authenticate users.
   *
   * @public
   */
  InstanceArn: string | undefined;
}

/**
 * Maintenance configuration settings for the SageMaker Partner AI App.
 *
 * @public
 */
export interface PartnerAppMaintenanceConfig {
  /**
   * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. This value must take the following format: `3-letter-day:24-h-hour:minute`. For example: `TUE:03:30`.
   *
   * @public
   */
  MaintenanceWindowStart?: string | undefined;
}

/**
 * @public
 */
export interface CreatePartnerAppRequest {
  /**
   * The name to give the SageMaker Partner AI App.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of SageMaker Partner AI App to create. Must be one of the following: `lakera-guard`, `comet`, `deepchecks-llm-evaluation`, or `fiddler`.
   *
   * @public
   */
  Type: PartnerAppType | undefined;

  /**
   * The ARN of the IAM role that the partner application uses.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * SageMaker Partner AI Apps uses Amazon Web Services KMS to encrypt data at rest using an Amazon Web Services managed key by default. For more control, specify a customer managed key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Maintenance configuration settings for the SageMaker Partner AI App.
   *
   * @public
   */
  MaintenanceConfig?: PartnerAppMaintenanceConfig | undefined;

  /**
   * Indicates the instance type and size of the cluster attached to the SageMaker Partner AI App.
   *
   * @public
   */
  Tier: string | undefined;

  /**
   * Configuration settings for the SageMaker Partner AI App.
   *
   * @public
   */
  ApplicationConfig?: PartnerAppConfig | undefined;

  /**
   * Specifies the Amazon Web Services IAM Identity Center configuration for the SageMaker Partner AI App. Specify this parameter when `AuthType` is `IDC`. Apps that use `IAM` authorization don't use this parameter.
   *
   * @public
   */
  IdcConfig?: IdcConfigInput | undefined;

  /**
   * The authorization type that users use to access the SageMaker Partner AI App. Valid values:
   *
   * - `IAM`: Users access the SageMaker Partner AI App with their Amazon Web Services IAM identity.
   * - `IDC`: Users access the SageMaker Partner AI App with their Amazon Web Services IAM Identity Center identity. Specify the Identity Center instance to use in `IdcConfig`.
   *
   * @public
   */
  AuthType: PartnerAppAuthType | undefined;

  /**
   * When set to `TRUE`, the SageMaker Partner AI App sets the Amazon Web Services IAM session name or the authenticated IAM user as the identity of the SageMaker Partner AI App user.
   *
   * @public
   */
  EnableIamSessionBasedIdentity?: boolean | undefined;

  /**
   * When set to `TRUE`, the SageMaker Partner AI App is automatically upgraded to the latest minor version during the next scheduled maintenance window, if one is available. Default is `FALSE`.
   *
   * @public
   */
  EnableAutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * A unique token that guarantees that the call to this API is idempotent.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Each tag consists of a key and an optional value. Tag keys must be unique per resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePartnerAppResponse {
  /**
   * The ARN of the SageMaker Partner AI App.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePartnerAppPresignedUrlRequest {
  /**
   * The ARN of the SageMaker Partner AI App to create the presigned URL for.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The time that will pass before the presigned URL expires.
   *
   * @public
   */
  ExpiresInSeconds?: number | undefined;

  /**
   * Indicates how long the Amazon SageMaker Partner AI App session can be accessed for after logging in.
   *
   * @public
   */
  SessionExpirationDurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreatePartnerAppPresignedUrlResponse {
  /**
   * The presigned URL that you can use to access the SageMaker Partner AI App.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Configuration that controls the parallelism of the pipeline. By default, the parallelism configuration specified applies to all executions of the pipeline unless overridden.
 *
 * @public
 */
export interface ParallelismConfiguration {
  /**
   * The max number of steps that can be executed in parallel.
   *
   * @public
   */
  MaxParallelExecutionSteps: number | undefined;
}

/**
 * The location of the pipeline definition stored in Amazon S3.
 *
 * @public
 */
export interface PipelineDefinitionS3Location {
  /**
   * Name of the S3 bucket.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The object key (or key name) uniquely identifies the object in an S3 bucket.
   *
   * @public
   */
  ObjectKey: string | undefined;

  /**
   * Version Id of the pipeline definition file. If not specified, Amazon SageMaker will retrieve the latest version.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePipelineRequest {
  /**
   * The name of the pipeline.
   *
   * @public
   */
  PipelineName: string | undefined;

  /**
   * The display name of the pipeline.
   *
   * @public
   */
  PipelineDisplayName?: string | undefined;

  /**
   * The [JSON pipeline definition](https://aws-sagemaker-mlops.github.io/sagemaker-model-building-pipeline-definition-JSON-schema/) of the pipeline.
   *
   * @public
   */
  PipelineDefinition?: string | undefined;

  /**
   * The location of the pipeline definition stored in Amazon S3. If specified, SageMaker will retrieve the pipeline definition from this location.
   *
   * @public
   */
  PipelineDefinitionS3Location?: PipelineDefinitionS3Location | undefined;

  /**
   * A description of the pipeline.
   *
   * @public
   */
  PipelineDescription?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role used by the pipeline to access and create resources.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A list of tags to apply to the created pipeline.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * This is the configuration that controls the parallelism of the pipeline. If specified, it applies to all runs of this pipeline by default.
   *
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;
}

/**
 * @public
 */
export interface CreatePipelineResponse {
  /**
   * The Amazon Resource Name (ARN) of the created pipeline.
   *
   * @public
   */
  PipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePresignedDomainUrlRequest {
  /**
   * The domain ID.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The name of the UserProfile to sign-in as.
   *
   * @public
   */
  UserProfileName: string | undefined;

  /**
   * The session expiration duration in seconds. This value defaults to 43200.
   *
   * @public
   */
  SessionExpirationDurationInSeconds?: number | undefined;

  /**
   * The number of seconds until the pre-signed URL expires. This value defaults to 300.
   *
   * @public
   */
  ExpiresInSeconds?: number | undefined;

  /**
   * The name of the space.
   *
   * @public
   */
  SpaceName?: string | undefined;

  /**
   * The landing page that the user is directed to when accessing the presigned URL. Using this value, users can access Studio or Studio Classic, even if it is not the default experience for the domain. The supported values are:
   *
   * - `studio::relative/path`: Directs users to the relative path in Studio.
   * - `app:JupyterServer:relative/path`: Directs users to the relative path in the Studio Classic application.
   * - `app:JupyterLab:relative/path`: Directs users to the relative path in the JupyterLab application.
   * - `app:RStudioServerPro:relative/path`: Directs users to the relative path in the RStudio application.
   * - `app:CodeEditor:relative/path`: Directs users to the relative path in the Code Editor, based on Code-OSS, Visual Studio Code - Open Source application.
   * - `app:Canvas:relative/path`: Directs users to the relative path in the Canvas application.
   *
   * @public
   */
  LandingUri?: string | undefined;
}

/**
 * @public
 */
export interface CreatePresignedDomainUrlResponse {
  /**
   * The presigned URL.
   *
   * @public
   */
  AuthorizedUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreatePresignedMlflowAppUrlRequest {
  /**
   * The ARN of the MLflow App to connect to your MLflow UI.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The duration in seconds that your presigned URL is valid. The presigned URL can be used only once.
   *
   * @public
   */
  ExpiresInSeconds?: number | undefined;

  /**
   * The duration in seconds that your presigned URL is valid. The presigned URL can be used only once.
   *
   * @public
   */
  SessionExpirationDurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreatePresignedMlflowAppUrlResponse {
  /**
   * A presigned URL with an authorization token.
   *
   * @public
   */
  AuthorizedUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreatePresignedMlflowTrackingServerUrlRequest {
  /**
   * The name of the tracking server to connect to your MLflow UI.
   *
   * @public
   */
  TrackingServerName: string | undefined;

  /**
   * The duration in seconds that your presigned URL is valid. The presigned URL can be used only once.
   *
   * @public
   */
  ExpiresInSeconds?: number | undefined;

  /**
   * The duration in seconds that your MLflow UI session is valid.
   *
   * @public
   */
  SessionExpirationDurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreatePresignedMlflowTrackingServerUrlResponse {
  /**
   * A presigned URL with an authorization token.
   *
   * @public
   */
  AuthorizedUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreatePresignedNotebookInstanceUrlInput {
  /**
   * The name of the notebook instance.
   *
   * @public
   */
  NotebookInstanceName: string | undefined;

  /**
   * The duration of the session, in seconds. The default is 12 hours.
   *
   * @public
   */
  SessionExpirationDurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreatePresignedNotebookInstanceUrlOutput {
  /**
   * A JSON object that contains the URL string.
   *
   * @public
   */
  AuthorizedUrl?: string | undefined;
}

/**
 * Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:
 *
 * - [CreateProcessingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html)
 * - [CreateTrainingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html)
 * - [CreateTransformJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html)
 *
 * @public
 */
export interface ExperimentConfig {
  /**
   * The name of an existing experiment to associate with the trial component.
   *
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * The name of an existing trial to associate the trial component with. If not specified, a new trial is created.
   *
   * @public
   */
  TrialName?: string | undefined;

  /**
   * The display name for the trial component. If this key isn't specified, the display name is the trial component name.
   *
   * @public
   */
  TrialComponentDisplayName?: string | undefined;

  /**
   * The name of the experiment run to associate with the trial component.
   *
   * @public
   */
  RunName?: string | undefined;
}

/**
 * Configuration for Redshift Dataset Definition input.
 *
 * @public
 */
export interface RedshiftDatasetDefinition {
  /**
   * The Redshift cluster Identifier.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The name of the Redshift database used in Redshift query execution.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The database user name used in Redshift query execution.
   *
   * @public
   */
  DbUser: string | undefined;

  /**
   * The SQL query statements to be executed.
   *
   * @public
   */
  QueryString: string | undefined;

  /**
   * The IAM role attached to your Redshift cluster that Amazon SageMaker uses to generate datasets.
   *
   * @public
   */
  ClusterRoleArn: string | undefined;

  /**
   * The location in Amazon S3 where the Redshift query results are stored.
   *
   * @public
   */
  OutputS3Uri: string | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data from a Redshift execution.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The data storage format for Redshift query results.
   *
   * @public
   */
  OutputFormat: RedshiftResultFormat | undefined;

  /**
   * The compression used for Redshift query results.
   *
   * @public
   */
  OutputCompression?: RedshiftResultCompressionType | undefined;
}

/**
 * Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either `AthenaDatasetDefinition` or `RedshiftDatasetDefinition` types.
 *
 * @public
 */
export interface DatasetDefinition {
  /**
   * Configuration for Athena Dataset Definition input.
   *
   * @public
   */
  AthenaDatasetDefinition?: AthenaDatasetDefinition | undefined;

  /**
   * Configuration for Redshift Dataset Definition input.
   *
   * @public
   */
  RedshiftDatasetDefinition?: RedshiftDatasetDefinition | undefined;

  /**
   * The local path where you want Amazon SageMaker to download the Dataset Definition inputs to run a processing job. `LocalPath` is an absolute path to the input data. This is a required parameter when `AppManaged` is `False` (default).
   *
   * @public
   */
  LocalPath?: string | undefined;

  /**
   * Whether the generated dataset is `FullyReplicated` or `ShardedByS3Key` (default).
   *
   * @public
   */
  DataDistributionType?: DataDistributionType | undefined;

  /**
   * Whether to use `File` or `Pipe` input mode. In `File` (default) mode, Amazon SageMaker copies the data from the input source onto the local Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm. This is the most commonly used input mode. In `Pipe` mode, Amazon SageMaker streams input data from the source directly to your algorithm without using the EBS volume.
   *
   * @public
   */
  InputMode?: InputMode | undefined;
}

/**
 * Configuration for downloading input data from Amazon S3 into the processing container.
 *
 * @public
 */
export interface ProcessingS3Input {
  /**
   * The URI of the Amazon S3 prefix Amazon SageMaker downloads data required to run a processing job.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The local path in your container where you want Amazon SageMaker to write input data to. `LocalPath` is an absolute path to the input data and must begin with `/opt/ml/processing/`. `LocalPath` is a required parameter when `AppManaged` is `False` (default).
   *
   * @public
   */
  LocalPath?: string | undefined;

  /**
   * Whether you use an `S3Prefix` or a `ManifestFile` for the data type. If you choose `S3Prefix`, `S3Uri` identifies a key name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing job. If you choose `ManifestFile`, `S3Uri` identifies an object that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for the processing job.
   *
   * @public
   */
  S3DataType: ProcessingS3DataType | undefined;

  /**
   * Whether to use `File` or `Pipe` input mode. In File mode, Amazon SageMaker copies the data from the input source onto the local ML storage volume before starting your processing container. This is the most commonly used input mode. In `Pipe` mode, Amazon SageMaker streams input data from the source directly to your processing container into named pipes without using the ML storage volume.
   *
   * @public
   */
  S3InputMode?: ProcessingS3InputMode | undefined;

  /**
   * Whether to distribute the data from Amazon S3 to all processing instances with `FullyReplicated`, or whether the data from Amazon S3 is sharded by Amazon S3 key, downloading one shard of data to each processing instance.
   *
   * @public
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | undefined;

  /**
   * Whether to GZIP-decompress the data in Amazon S3 as it is streamed into the processing container. `Gzip` can only be used when `Pipe` mode is specified as the `S3InputMode`. In `Pipe` mode, Amazon SageMaker streams input data from the source directly to your container without using the EBS volume.
   *
   * @public
   */
  S3CompressionType?: ProcessingS3CompressionType | undefined;
}

/**
 * The inputs for a processing job. The processing input must specify exactly one of either `S3Input` or `DatasetDefinition` types.
 *
 * @public
 */
export interface ProcessingInput {
  /**
   * The name for the processing job input.
   *
   * @public
   */
  InputName: string | undefined;

  /**
   * When `True`, input operations such as data download are managed natively by the processing job application. When `False` (default), input operations are managed by Amazon SageMaker.
   *
   * @public
   */
  AppManaged?: boolean | undefined;

  /**
   * Configuration for downloading input data from Amazon S3 into the processing container.
   *
   * @public
   */
  S3Input?: ProcessingS3Input | undefined;

  /**
   * Configuration for a Dataset Definition input.
   *
   * @public
   */
  DatasetDefinition?: DatasetDefinition | undefined;
}

/**
 * Configuration for processing job outputs in Amazon SageMaker Feature Store.
 *
 * @public
 */
export interface ProcessingFeatureStoreOutput {
  /**
   * The name of the Amazon SageMaker FeatureGroup to use as the destination for processing job output. Note that your processing script is responsible for putting records into your Feature Store.
   *
   * @public
   */
  FeatureGroupName: string | undefined;
}

/**
 * Configuration for uploading output data to Amazon S3 from the processing container.
 *
 * @public
 */
export interface ProcessingS3Output {
  /**
   * A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of a processing job.
   *
   * @public
   */
  S3Uri: string | undefined;

  /**
   * The local path of a directory where you want Amazon SageMaker to upload its contents to Amazon S3. `LocalPath` is an absolute path to a directory containing output files. This directory will be created by the platform and exist when your container's entrypoint is invoked.
   *
   * @public
   */
  LocalPath?: string | undefined;

  /**
   * Whether to upload the results of the processing job continuously or after the job completes.
   *
   * @public
   */
  S3UploadMode: ProcessingS3UploadMode | undefined;
}

/**
 * Describes the results of a processing job. The processing output must specify exactly one of either `S3Output` or `FeatureStoreOutput` types.
 *
 * @public
 */
export interface ProcessingOutput {
  /**
   * The name for the processing job output.
   *
   * @public
   */
  OutputName: string | undefined;

  /**
   * Configuration for processing job outputs in Amazon S3.
   *
   * @public
   */
  S3Output?: ProcessingS3Output | undefined;

  /**
   * Configuration for processing job outputs in Amazon SageMaker Feature Store. This processing output type is only supported when `AppManaged` is specified.
   *
   * @public
   */
  FeatureStoreOutput?: ProcessingFeatureStoreOutput | undefined;

  /**
   * When `True`, output operations such as data upload are managed natively by the processing job application. When `False` (default), output operations are managed by Amazon SageMaker.
   *
   * @public
   */
  AppManaged?: boolean | undefined;
}

/**
 * Configuration for uploading output from the processing container.
 *
 * @public
 */
export interface ProcessingOutputConfig {
  /**
   * An array of outputs configuring the data to upload from the processing container.
   *
   * @public
   */
  Outputs: ProcessingOutput[] | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt the processing job output. `KmsKeyId` can be an ID of a KMS key, ARN of a KMS key, or alias of a KMS key. The `KmsKeyId` is applied to all outputs.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * A candidate instance type preference in a processing `InstancePreferences` list.
 *
 * @public
 */
export interface ProcessingInstancePreference {
  /**
   * The ML compute instance type. An instance type can appear only once in an `InstancePreferences` list.
   *
   * @public
   */
  InstanceType: ProcessingInstanceType | undefined;

  /**
   * The number of instances to launch if this instance type is selected. Specify the instance count for the processing job in one of the following two ways:
   *
   * 1. **Per preference** – Set `InstanceCount` on every preference in the `InstancePreferences` list and don't set `ProcessingClusterConfig$InstanceCount`. Use this when each instance type needs a different number of instances to deliver equivalent compute.
   * 2. **One count for the job** – Set `ProcessingClusterConfig$InstanceCount` and omit it from every preference. Amazon SageMaker applies this to all instance types in the list.
   *
   * For example, in a list of five preferences, either all five specify `InstanceCount` or none of them do. Amazon SageMaker rejects requests that set `InstanceCount` on only some preferences, that set it both per preference and in `ProcessingClusterConfig`, or that omit it in both places.
   *
   * @public
   */
  InstanceCount?: number | undefined;
}

/**
 * Configuration for the cluster used to run a processing job.
 *
 * @public
 */
export interface ProcessingClusterConfig {
  /**
   * The number of ML compute instances to use in the processing job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The ML compute instance type for the processing job.
   *
   * @public
   */
  InstanceType?: ProcessingInstanceType | undefined;

  /**
   * The size of the ML storage volume in gigabytes that you want to provision. You must specify sufficient ML storage for your scenario.
   *
   * > **Note:**
   * >
   * > Certain Nitro-based instances include local storage with a fixed total size, dependent on the instance type. When using these instances for processing, Amazon SageMaker mounts the local instance storage instead of Amazon EBS gp2 storage. You can't request a `VolumeSizeInGB` greater than the total size of the local instance storage.
   * >
   * > For a list of instance types that support local instance storage, including the total size per instance type, see [Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes).
   *
   * @public
   */
  VolumeSizeInGB: number | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the processing job.
   *
   * > **Note:**
   * >
   * > Certain Nitro-based instances include local storage, dependent on the instance type. Local storage volumes are encrypted using a hardware module on the instance. You can't request a `VolumeKmsKeyId` when using an instance type with local storage.
   * >
   * > For a list of instance types that support local instance storage, see [Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes).
   * >
   * > For more information about local instance storage encryption, see [SSD Instance Store Volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html).
   *
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * An ordered list of ML compute instance types for the processing job, in priority order. Amazon SageMaker launches the job on the first instance type in the list that has available capacity. If capacity is insufficient, Amazon SageMaker evaluates the next instance type in the list. Exactly one instance type is selected for the job.
   *
   * `InstancePreferences` is mutually exclusive with `InstanceType`.
   *
   * @public
   */
  InstancePreferences?: ProcessingInstancePreference[] | undefined;

  /**
   * The instance type that Amazon SageMaker selected for the job from `InstancePreferences`. Returned by `DescribeProcessingJob` after an instance type is selected. This field is read-only and isn't accepted in `CreateProcessingJob` requests.
   *
   * @public
   */
  SelectedInstanceType?: ProcessingInstanceType | undefined;

  /**
   * The number of instances of `SelectedInstanceType` that the job launched with. The job is billed for this instance type and count. Returned by `DescribeProcessingJob` after an instance type is selected. This field is read-only and isn't accepted in `CreateProcessingJob` requests.
   *
   * @public
   */
  SelectedInstanceCount?: number | undefined;
}

/**
 * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
 *
 * @public
 */
export interface ProcessingResources {
  /**
   * The configuration for the resources in a cluster used to run the processing job.
   *
   * @public
   */
  ClusterConfig: ProcessingClusterConfig | undefined;
}

/**
 * Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.
 *
 * @public
 */
export interface ProcessingStoppingCondition {
  /**
   * Specifies the maximum runtime in seconds.
   *
   * @public
   */
  MaxRuntimeInSeconds: number | undefined;
}

/**
 * @public
 */
export interface CreateProcessingJobRequest {
  /**
   * An array of inputs configuring the data to download into the processing container.
   *
   * @public
   */
  ProcessingInputs?: ProcessingInput[] | undefined;

  /**
   * Output configuration for the processing job.
   *
   * @public
   */
  ProcessingOutputConfig?: ProcessingOutputConfig | undefined;

  /**
   * The name of the processing job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  ProcessingJobName: string | undefined;

  /**
   * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
   *
   * @public
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * The time limit for how long the processing job is allowed to run.
   *
   * @public
   */
  StoppingCondition?: ProcessingStoppingCondition | undefined;

  /**
   * Configures the processing job to run a specified Docker container image.
   *
   * @public
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * The environment variables to set in the Docker container. Up to 100 key and values entries in the map are supported.
   *
   * > **Important:** Do not include any security-sensitive information including account access IDs, secrets, or tokens in any environment fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request environment variable or plain text fields.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * Networking options for a processing job, such as whether to allow inbound and outbound network calls to and from processing containers, and the VPC subnets and security groups to use for VPC-enabled processing jobs.
   *
   * @public
   */
  NetworkConfig?: NetworkConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * (Optional) An array of key-value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the *Amazon Web Services Billing and Cost Management User Guide*.
   *
   * > **Important:** Do not include any security-sensitive information including account access IDs, secrets, or tokens in any tags. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request tag variable or plain text fields.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:
   *
   * - [CreateProcessingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html)
   * - [CreateTrainingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html)
   * - [CreateTransformJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html)
   *
   * @public
   */
  ExperimentConfig?: ExperimentConfig | undefined;
}

/**
 * @public
 */
export interface CreateProcessingJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the processing job.
   *
   * @public
   */
  ProcessingJobArn: string | undefined;
}

/**
 * A key value pair used when you provision a project as a service catalog product. For information, see [What is Amazon Web Services Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
 *
 * @public
 */
export interface ProvisioningParameter {
  /**
   * The key that identifies a provisioning parameter.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the provisioning parameter.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Details that you specify to provision a service catalog product. For information about service catalog, see [What is Amazon Web Services Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
 *
 * @public
 */
export interface ServiceCatalogProvisioningDetails {
  /**
   * The ID of the product to provision.
   *
   * @public
   */
  ProductId: string | undefined;

  /**
   * The ID of the provisioning artifact.
   *
   * @public
   */
  ProvisioningArtifactId?: string | undefined;

  /**
   * The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path.
   *
   * @public
   */
  PathId?: string | undefined;

  /**
   * A list of key value pairs that you specify when you provision a product.
   *
   * @public
   */
  ProvisioningParameters?: ProvisioningParameter[] | undefined;
}

/**
 * Contains configuration details for a template provider. Only one type of template provider can be specified.
 *
 * @public
 */
export interface CreateTemplateProvider {
  /**
   * The CloudFormation template provider configuration for creating infrastructure resources.
   *
   * @public
   */
  CfnTemplateProvider?: CfnCreateTemplateProvider | undefined;
}

/**
 * @public
 */
export interface CreateProjectInput {
  /**
   * The name of the project.
   *
   * @public
   */
  ProjectName: string | undefined;

  /**
   * A description for the project.
   *
   * @public
   */
  ProjectDescription?: string | undefined;

  /**
   * The product ID and provisioning artifact ID to provision a service catalog. The provisioning artifact ID will default to the latest provisioning artifact ID of the product, if you don't provide the provisioning artifact ID. For more information, see [What is Amazon Web Services Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
   *
   * @public
   */
  ServiceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails | undefined;

  /**
   * An array of key-value pairs that you want to use to organize and track your Amazon Web Services resource costs. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * An array of template provider configurations for creating infrastructure resources for the project.
   *
   * @public
   */
  TemplateProviders?: CreateTemplateProvider[] | undefined;
}

/**
 * @public
 */
export interface CreateProjectOutput {
  /**
   * The Amazon Resource Name (ARN) of the project.
   *
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * The ID of the new project.
   *
   * @public
   */
  ProjectId: string | undefined;
}

/**
 * The collection of ownership settings for a space.
 *
 * @public
 */
export interface OwnershipSettings {
  /**
   * The user profile who is the owner of the space.
   *
   * @public
   */
  OwnerUserProfileName: string | undefined;
}

/**
 * Settings related to idle shutdown of Studio applications in a space.
 *
 * @public
 */
export interface SpaceIdleSettings {
  /**
   * The time that SageMaker waits after the application becomes idle before shutting it down.
   *
   * @public
   */
  IdleTimeoutInMinutes?: number | undefined;
}

/**
 * Settings that are used to configure and manage the lifecycle of Amazon SageMaker Studio applications in a space.
 *
 * @public
 */
export interface SpaceAppLifecycleManagement {
  /**
   * Settings related to idle shutdown of Studio applications.
   *
   * @public
   */
  IdleSettings?: SpaceIdleSettings | undefined;
}

/**
 * The application settings for a Code Editor space.
 *
 * @public
 */
export interface SpaceCodeEditorAppSettings {
  /**
   * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
   *
   * > **Note:** When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn`, pass `None` as the value.
   *
   * @public
   */
  DefaultResourceSpec?: ResourceSpec | undefined;

  /**
   * Settings that are used to configure and manage the lifecycle of CodeEditor applications in a space.
   *
   * @public
   */
  AppLifecycleManagement?: SpaceAppLifecycleManagement | undefined;
}

/**
 * A file system, created by you in Amazon EFS, that you assign to a user profile or space for an Amazon SageMaker AI Domain. Permitted users can access this file system in Amazon SageMaker AI Studio.
 *
 * @public
 */
export interface EFSFileSystem {
  /**
   * The ID of your Amazon EFS file system.
   *
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * A custom file system in Amazon FSx for Lustre.
 *
 * @public
 */
export interface FSxLustreFileSystem {
  /**
   * Amazon FSx for Lustre file system ID.
   *
   * @public
   */
  FileSystemId: string | undefined;
}

/**
 * A custom file system in Amazon S3. This is only supported in Amazon SageMaker Unified Studio.
 *
 * @public
 */
export interface S3FileSystem {
  /**
   * The Amazon S3 URI that specifies the location in S3 where files are stored, which is mounted within the Studio environment. For example: `s3://<bucket-name>/<prefix>/`.
   *
   * @public
   */
  S3Uri: string | undefined;
}

/**
 * A file system, created by you, that you assign to a user profile or space for an Amazon SageMaker AI Domain. Permitted users can access this file system in Amazon SageMaker AI Studio.
 *
 * @public
 */
export type CustomFileSystem =
  | CustomFileSystem.EFSFileSystemMember
  | CustomFileSystem.FSxLustreFileSystemMember
  | CustomFileSystem.S3FileSystemMember
  | CustomFileSystem.$UnknownMember;

/**
 * @public
 */
export namespace CustomFileSystem {
  /**
   * A custom file system in Amazon EFS.
   *
   * @public
   */
  export interface EFSFileSystemMember {
    EFSFileSystem: EFSFileSystem;
    FSxLustreFileSystem?: never;
    S3FileSystem?: never;
    $unknown?: never;
  }

  /**
   * A custom file system in Amazon FSx for Lustre.
   *
   * @public
   */
  export interface FSxLustreFileSystemMember {
    EFSFileSystem?: never;
    FSxLustreFileSystem: FSxLustreFileSystem;
    S3FileSystem?: never;
    $unknown?: never;
  }

  /**
   * A custom file system in Amazon S3. This is only supported in Amazon SageMaker Unified Studio.
   *
   * @public
   */
  export interface S3FileSystemMember {
    EFSFileSystem?: never;
    FSxLustreFileSystem?: never;
    S3FileSystem: S3FileSystem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    EFSFileSystem?: never;
    FSxLustreFileSystem?: never;
    S3FileSystem?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    EFSFileSystem: (value: EFSFileSystem) => T;
    FSxLustreFileSystem: (value: FSxLustreFileSystem) => T;
    S3FileSystem: (value: S3FileSystem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The settings for the JupyterLab application within a space.
 *
 * @public
 */
export interface SpaceJupyterLabAppSettings {
  /**
   * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
   *
   * > **Note:** When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn`, pass `None` as the value.
   *
   * @public
   */
  DefaultResourceSpec?: ResourceSpec | undefined;

  /**
   * A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterLab application.
   *
   * @public
   */
  CodeRepositories?: CodeRepository[] | undefined;

  /**
   * Settings that are used to configure and manage the lifecycle of JupyterLab applications in a space.
   *
   * @public
   */
  AppLifecycleManagement?: SpaceAppLifecycleManagement | undefined;
}

/**
 * A collection of EBS storage settings that apply to both private and shared spaces.
 *
 * @public
 */
export interface EbsStorageSettings {
  /**
   * The size of an EBS storage volume for a space.
   *
   * @public
   */
  EbsVolumeSizeInGb: number | undefined;
}

/**
 * The storage settings for a space.
 *
 * @public
 */
export interface SpaceStorageSettings {
  /**
   * A collection of EBS storage settings for a space.
   *
   * @public
   */
  EbsStorageSettings?: EbsStorageSettings | undefined;
}

/**
 * A collection of space settings.
 *
 * @public
 */
export interface SpaceSettings {
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
   * The Code Editor application settings.
   *
   * @public
   */
  CodeEditorAppSettings?: SpaceCodeEditorAppSettings | undefined;

  /**
   * The settings for the JupyterLab application.
   *
   * @public
   */
  JupyterLabAppSettings?: SpaceJupyterLabAppSettings | undefined;

  /**
   * The type of app created within the space.
   *
   * If using the [UpdateSpace](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateSpace.html) API, you can't change the app type of your space by specifying a different value for this field.
   *
   * @public
   */
  AppType?: AppType | undefined;

  /**
   * The storage settings for a space.
   *
   * @public
   */
  SpaceStorageSettings?: SpaceStorageSettings | undefined;

  /**
   * If you enable this option, SageMaker AI creates the following resources on your behalf when you create the space:
   *
   * - The user profile that possesses the space.
   * - The app that the space contains.
   *
   * @public
   */
  SpaceManagedResources?: FeatureStatus | undefined;

  /**
   * A file system, created by you, that you assign to a space for an Amazon SageMaker AI Domain. Permitted users can access this file system in Amazon SageMaker AI Studio.
   *
   * @public
   */
  CustomFileSystems?: CustomFileSystem[] | undefined;

  /**
   * A setting that enables or disables remote access for a SageMaker space. When enabled, this allows you to connect to the remote space from your local IDE.
   *
   * @public
   */
  RemoteAccess?: FeatureStatus | undefined;
}

/**
 * A collection of space sharing settings.
 *
 * @public
 */
export interface SpaceSharingSettings {
  /**
   * Specifies the sharing type of the space.
   *
   * @public
   */
  SharingType: SharingType | undefined;
}

/**
 * @public
 */
export interface CreateSpaceRequest {
  /**
   * The ID of the associated domain.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The name of the space.
   *
   * @public
   */
  SpaceName: string | undefined;

  /**
   * Tags to associated with the space. Each tag consists of a key and an optional value. Tag keys must be unique for each resource. Tags are searchable using the `Search` API.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A collection of space settings.
   *
   * @public
   */
  SpaceSettings?: SpaceSettings | undefined;

  /**
   * A collection of ownership settings.
   *
   * @public
   */
  OwnershipSettings?: OwnershipSettings | undefined;

  /**
   * A collection of space sharing settings.
   *
   * @public
   */
  SpaceSharingSettings?: SpaceSharingSettings | undefined;

  /**
   * The name of the space that appears in the SageMaker Studio UI.
   *
   * @public
   */
  SpaceDisplayName?: string | undefined;
}

/**
 * @public
 */
export interface CreateSpaceResponse {
  /**
   * The space's Amazon Resource Name (ARN).
   *
   * @public
   */
  SpaceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateStudioLifecycleConfigRequest {
  /**
   * The name of the Amazon SageMaker AI Studio Lifecycle Configuration to create.
   *
   * @public
   */
  StudioLifecycleConfigName: string | undefined;

  /**
   * The content of your Amazon SageMaker AI Studio Lifecycle Configuration script. This content must be base64 encoded.
   *
   * @public
   */
  StudioLifecycleConfigContent: string | undefined;

  /**
   * The App type that the Lifecycle Configuration is attached to.
   *
   * @public
   */
  StudioLifecycleConfigAppType: StudioLifecycleConfigAppType | undefined;

  /**
   * Tags to be associated with the Lifecycle Configuration. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateStudioLifecycleConfigResponse {
  /**
   * The ARN of your created Lifecycle Configuration.
   *
   * @public
   */
  StudioLifecycleConfigArn?: string | undefined;
}

/**
 * Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the `DebugHookConfig` parameter, see [Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job](https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html).
 *
 * @public
 */
export interface DebugHookConfig {
  /**
   * Path to local storage location for metrics and tensors. Defaults to `/opt/ml/output/tensors/`.
   *
   * @public
   */
  LocalPath?: string | undefined;

  /**
   * Path to Amazon S3 storage location for metrics and tensors.
   *
   * @public
   */
  S3OutputPath: string | undefined;

  /**
   * Configuration information for the Amazon SageMaker Debugger hook parameters.
   *
   * @public
   */
  HookParameters?: Record<string, string> | undefined;

  /**
   * Configuration information for Amazon SageMaker Debugger tensor collections. To learn more about how to configure the `CollectionConfiguration` parameter, see [Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job](https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html).
   *
   * @public
   */
  CollectionConfigurations?: CollectionConfiguration[] | undefined;
}

/**
 * Configuration information for SageMaker Debugger rules for debugging. To learn more about how to configure the `DebugRuleConfiguration` parameter, see [Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job](https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html).
 *
 * @public
 */
export interface DebugRuleConfiguration {
  /**
   * The name of the rule configuration. It must be unique relative to other rule configuration names.
   *
   * @public
   */
  RuleConfigurationName: string | undefined;

  /**
   * Path to local storage location for output of rules. Defaults to `/opt/ml/processing/output/rule/`.
   *
   * @public
   */
  LocalPath?: string | undefined;

  /**
   * Path to Amazon S3 storage location for rules.
   *
   * @public
   */
  S3OutputPath?: string | undefined;

  /**
   * The Amazon Elastic Container (ECR) Image for the managed rule evaluation.
   *
   * @public
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * The instance type to deploy a custom rule for debugging a training job.
   *
   * @public
   */
  InstanceType?: ProcessingInstanceType | undefined;

  /**
   * The size, in GB, of the ML storage volume attached to the processing instance.
   *
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * Runtime configuration for rule container.
   *
   * @public
   */
  RuleParameters?: Record<string, string> | undefined;
}

/**
 * Configuration information for the infrastructure health check of a training job. A SageMaker-provided health check tests the health of instance hardware and cluster network connectivity.
 *
 * @public
 */
export interface InfraCheckConfig {
  /**
   * Enables an infrastructure health check.
   *
   * @public
   */
  EnableInfraCheck?: boolean | undefined;
}

/**
 * The MLflow configuration using SageMaker managed MLflow.
 *
 * @public
 */
export interface MlflowConfig {
  /**
   * The Amazon Resource Name (ARN) of the MLflow resource.
   *
   * @public
   */
  MlflowResourceArn: string | undefined;

  /**
   * The MLflow experiment name used for this job.
   *
   * @public
   */
  MlflowExperimentName?: string | undefined;

  /**
   * The MLflow run name used for this job.
   *
   * @public
   */
  MlflowRunName?: string | undefined;
}

/**
 * The configuration for the Model package.
 *
 * @public
 */
export interface ModelPackageConfig {
  /**
   * The Amazon Resource Name (ARN) of the model package group of output model package.
   *
   * @public
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source model package used for continued fine-tuning and custom model evaluation.
   *
   * @public
   */
  SourceModelPackageArn?: string | undefined;
}

/**
 * Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths.
 *
 * @public
 */
export interface ProfilerConfig {
  /**
   * Path to Amazon S3 storage location for system and framework metrics.
   *
   * @public
   */
  S3OutputPath?: string | undefined;

  /**
   * A time interval for capturing system metrics in milliseconds. Available values are 100, 200, 500, 1000 (1 second), 5000 (5 seconds), and 60000 (1 minute) milliseconds. The default value is 500 milliseconds.
   *
   * @public
   */
  ProfilingIntervalInMilliseconds?: number | undefined;

  /**
   * Configuration information for capturing framework metrics. Available key strings for different profiling options are `DetailedProfilingConfig`, `PythonProfilingConfig`, and `DataLoaderProfilingConfig`. The following codes are configuration structures for the `ProfilingParameters` parameter. To learn more about how to configure the `ProfilingParameters` parameter, see [Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job](https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html).
   *
   * @public
   */
  ProfilingParameters?: Record<string, string> | undefined;

  /**
   * Configuration to turn off Amazon SageMaker Debugger's system monitoring and profiling functionality. To turn it off, set to `True`.
   *
   * @public
   */
  DisableProfiler?: boolean | undefined;
}

/**
 * Configuration information for profiling rules.
 *
 * @public
 */
export interface ProfilerRuleConfiguration {
  /**
   * The name of the rule configuration. It must be unique relative to other rule configuration names.
   *
   * @public
   */
  RuleConfigurationName: string | undefined;

  /**
   * Path to local storage location for output of rules. Defaults to `/opt/ml/processing/output/rule/`.
   *
   * @public
   */
  LocalPath?: string | undefined;

  /**
   * Path to Amazon S3 storage location for rules.
   *
   * @public
   */
  S3OutputPath?: string | undefined;

  /**
   * The Amazon Elastic Container Registry Image for the managed rule evaluation.
   *
   * @public
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * The instance type to deploy a custom rule for profiling a training job.
   *
   * @public
   */
  InstanceType?: ProcessingInstanceType | undefined;

  /**
   * The size, in GB, of the ML storage volume attached to the processing instance.
   *
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * Runtime configuration for rule container.
   *
   * @public
   */
  RuleParameters?: Record<string, string> | undefined;
}

/**
 * Configuration for remote debugging for the [CreateTrainingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html) API. To learn more about the remote debugging functionality of SageMaker, see [Access a training container through Amazon Web Services Systems Manager (SSM) for remote debugging](https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html).
 *
 * @public
 */
export interface RemoteDebugConfig {
  /**
   * If set to True, enables remote debugging.
   *
   * @public
   */
  EnableRemoteDebug?: boolean | undefined;
}

/**
 * The configuration for the serverless training job.
 *
 * @public
 */
export interface ServerlessJobConfig {
  /**
   * The base model Amazon Resource Name (ARN) in [SageMaker Public Hub](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-use.html). SageMaker always selects the latest version of the provided model.
   *
   * @public
   */
  BaseModelArn: string | undefined;

  /**
   * Specifies agreement to the model end-user license agreement (EULA). The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model. For more information, see [End-user license agreements](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-choose.html#jumpstart-foundation-models-choose-eula) section for more details on accepting the EULA.
   *
   * @public
   */
  AcceptEula?: boolean | undefined;

  /**
   * The serverless training job type.
   *
   * @public
   */
  JobType: ServerlessJobType | undefined;

  /**
   * The model customization technique.
   *
   * @public
   */
  CustomizationTechnique?: CustomizationTechnique | undefined;

  /**
   * The parameter-efficient fine-tuning configuration.
   *
   * @public
   */
  Peft?: Peft | undefined;

  /**
   * The evaluation job type. Required when serverless job type is `Evaluation`.
   *
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * The evaluator Amazon Resource Name (ARN) used as reward function or reward prompt.
   *
   * @public
   */
  EvaluatorArn?: string | undefined;

  /**
   * The maximum sequence length, in tokens, that the customization job supports. SageMaker uses this value to select a training configuration for the base model that you specify. The value must be an integer value from `1K` to `1024K` (for example, `32K`).
   *
   * If you don't specify a value, SageMaker selects a training configuration based on the other values that you specify. The selection is not restricted to a particular sequence length.
   *
   * @public
   */
  SequenceLength?: string | undefined;
}

/**
 * Contains information about attribute-based access control (ABAC) for a training job. The session chaining configuration uses Amazon Security Token Service (STS) for your training job to request temporary, limited-privilege credentials to tenants. For more information, see [Attribute-based access control (ABAC) for multi-tenancy training](https://docs.aws.amazon.com/sagemaker/latest/dg/model-access-training-data.html#model-access-training-data-abac).
 *
 * @public
 */
export interface SessionChainingConfig {
  /**
   * Set to `True` to allow SageMaker to extract session tags from a training job creation role and reuse these tags when assuming the training job execution role.
   *
   * @public
   */
  EnableSessionTagChaining?: boolean | undefined;
}

/**
 * Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.
 *
 * @public
 */
export interface TensorBoardOutputConfig {
  /**
   * Path to local storage location for tensorBoard output. Defaults to `/opt/ml/output/tensorboard`.
   *
   * @public
   */
  LocalPath?: string | undefined;

  /**
   * Path to Amazon S3 storage location for TensorBoard output.
   *
   * @public
   */
  S3OutputPath: string | undefined;
}

/**
 * @public
 */
export interface CreateTrainingJobRequest {
  /**
   * The name of the training job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.
   *
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * Algorithm-specific parameters that influence the quality of the model. You set hyperparameters before you start the learning process. For a list of hyperparameters for each training algorithm provided by SageMaker, see [Algorithms](https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html).
   *
   * You can specify a maximum of 100 hyperparameters. Each hyperparameter is a key-value pair. Each key and value is limited to 256 characters, as specified by the `Length Constraint`.
   *
   * > **Important:** Do not include any security-sensitive information including account access IDs, secrets, or tokens in any hyperparameter fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by any security-sensitive information included in the request hyperparameter variable or plain text fields.
   *
   * @public
   */
  HyperParameters?: Record<string, string> | undefined;

  /**
   * The registry path of the Docker image that contains the training algorithm and algorithm-specific metadata, including the input mode. For more information about algorithms provided by SageMaker, see [Algorithms](https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html). For information about providing your own algorithms, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
   *
   * @public
   */
  AlgorithmSpecification?: AlgorithmSpecification | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that SageMaker can assume to perform tasks on your behalf.
   *
   * During model training, SageMaker needs your permission to read input data from an S3 bucket, download a Docker image that contains training code, write model artifacts to an S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant permissions for all of these tasks to an IAM role. For more information, see [SageMaker Roles](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html).
   *
   * > **Note:** To be able to pass this role to SageMaker, the caller of this API must have the `iam:PassRole` permission.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * An array of `Channel` objects. Each channel is a named input source. `InputDataConfig` describes the input data and its location.
   *
   * Algorithms can accept input data from one or more channels. For example, an algorithm might have two channels of input data, `training_data` and `validation_data`. The configuration for each channel provides the S3, EFS, or FSx location where the input data is stored. It also provides information about the stored data: the MIME type, compression method, and whether the data is wrapped in RecordIO format.
   *
   * Depending on the input mode that the algorithm supports, SageMaker either copies input data files from an S3 bucket to a local directory in the Docker container, or makes it available as input streams. For example, if you specify an EFS location, input data files are available as input streams. They do not need to be downloaded.
   *
   * Your input must be in the same Amazon Web Services region as your training job.
   *
   * @public
   */
  InputDataConfig?: Channel[] | undefined;

  /**
   * Specifies the path to the S3 location where you want to store model artifacts. SageMaker creates subfolders for the artifacts.
   *
   * @public
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * The resources, including the ML compute instances and ML storage volumes, to use for model training.
   *
   * ML storage volumes store model artifacts and incremental states. Training algorithms might also use ML storage volumes for scratch space. If you want SageMaker to use the ML storage volume to store the training data, choose `File` as the `TrainingInputMode` in the algorithm specification. For distributed training algorithms, specify an instance count greater than 1.
   *
   * @public
   */
  ResourceConfig?: ResourceConfig | undefined;

  /**
   * A [VpcConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html) object that specifies the VPC that you want your training job to connect to. Control access to and from your training container by configuring the VPC. For more information, see [Protect Training Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Specifies a limit to how long a model training job can run. It also specifies how long a managed Spot training job has to complete. When the job reaches the time limit, SageMaker ends the training job. Use this API to cap model training costs.
   *
   * To stop a job, SageMaker sends the algorithm the `SIGTERM` signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost.
   *
   * @public
   */
  StoppingCondition?: StoppingCondition | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * > **Important:** Do not include any security-sensitive information including account access IDs, secrets, or tokens in any tags. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by any security-sensitive information included in the request tag variable or plain text fields.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Isolates the training container. No inbound or outbound network calls can be made, except for calls between peers within a training cluster for distributed training. If you enable network isolation for training jobs that are configured to use a VPC, SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.
   *
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * To encrypt all communications between ML compute instances in distributed training, choose `True`. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithm in distributed training. For more information, see [Protect Communications Between ML Compute Instances in a Distributed Training Job](https://docs.aws.amazon.com/sagemaker/latest/dg/train-encrypt.html).
   *
   * @public
   */
  EnableInterContainerTrafficEncryption?: boolean | undefined;

  /**
   * To train models using managed spot training, choose `True`. Managed spot training provides a fully managed and scalable infrastructure for training machine learning models. this option is useful when training jobs can be interrupted and when there is flexibility when the training job is run.
   *
   * The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be used as a starting point to train models incrementally. Amazon SageMaker provides metrics and logs in CloudWatch. They can be used to see when managed spot training jobs are running, interrupted, resumed, or completed.
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
   * Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the `DebugHookConfig` parameter, see [Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job](https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html).
   *
   * @public
   */
  DebugHookConfig?: DebugHookConfig | undefined;

  /**
   * Configuration information for Amazon SageMaker Debugger rules for debugging output tensors.
   *
   * @public
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[] | undefined;

  /**
   * Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.
   *
   * @public
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig | undefined;

  /**
   * Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:
   *
   * - [CreateProcessingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html)
   * - [CreateTrainingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html)
   * - [CreateTransformJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html)
   *
   * @public
   */
  ExperimentConfig?: ExperimentConfig | undefined;

  /**
   * Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths.
   *
   * @public
   */
  ProfilerConfig?: ProfilerConfig | undefined;

  /**
   * Configuration information for Amazon SageMaker Debugger rules for profiling system and framework metrics.
   *
   * @public
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[] | undefined;

  /**
   * The environment variables to set in the Docker container.
   *
   * > **Important:** Do not include any security-sensitive information including account access IDs, secrets, or tokens in any environment fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request environment variable or plain text fields.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * The number of times to retry the job when the job fails due to an `InternalServerError`.
   *
   * @public
   */
  RetryStrategy?: RetryStrategy | undefined;

  /**
   * Configuration for remote debugging. To learn more about the remote debugging functionality of SageMaker, see [Access a training container through Amazon Web Services Systems Manager (SSM) for remote debugging](https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html).
   *
   * @public
   */
  RemoteDebugConfig?: RemoteDebugConfig | undefined;

  /**
   * Contains information about the infrastructure health check configuration for the training job.
   *
   * @public
   */
  InfraCheckConfig?: InfraCheckConfig | undefined;

  /**
   * Contains information about attribute-based access control (ABAC) for the training job.
   *
   * @public
   */
  SessionChainingConfig?: SessionChainingConfig | undefined;

  /**
   * The configuration for serverless training jobs.
   *
   * @public
   */
  ServerlessJobConfig?: ServerlessJobConfig | undefined;

  /**
   * The MLflow configuration using SageMaker managed MLflow.
   *
   * @public
   */
  MlflowConfig?: MlflowConfig | undefined;

  /**
   * The configuration for the model package.
   *
   * @public
   */
  ModelPackageConfig?: ModelPackageConfig | undefined;
}

/**
 * @public
 */
export interface CreateTrainingJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the training job.
   *
   * @public
   */
  TrainingJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateTrainingPlanRequest {
  /**
   * The name of the training plan to create.
   *
   * @public
   */
  TrainingPlanName: string | undefined;

  /**
   * The unique identifier of the training plan offering to use for creating this plan.
   *
   * @public
   */
  TrainingPlanOfferingId: string | undefined;

  /**
   * Number of spare instances to reserve per UltraServer for enhanced resiliency. Default is 1.
   *
   * @public
   */
  SpareInstanceCountPerUltraServer?: number | undefined;

  /**
   * An array of key-value pairs to apply to this training plan.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrainingPlanResponse {
  /**
   * The Amazon Resource Name (ARN); of the created training plan.
   *
   * @public
   */
  TrainingPlanArn: string | undefined;
}

/**
 * The Low-Rank Adaptation (LoRA) configuration for a training session, including the rank and alpha parameters.
 *
 * @public
 */
export interface LoraConfig {
  /**
   * The rank of the Low-Rank Adaptation (LoRA) adapter matrices.
   *
   * @public
   */
  Rank: number | undefined;

  /**
   * The Low-Rank Adaptation (LoRA) scaling factor.
   *
   * @public
   */
  Alpha: number | undefined;
}

/**
 * The configuration for the base model used in a training session.
 *
 * @public
 */
export interface TrainingSessionModelConfig {
  /**
   * The Amazon Resource Name (ARN) of the base foundation model from SageMaker Hub.
   *
   * @public
   */
  BaseModelArn: string | undefined;

  /**
   * Specifies whether you accept the end-user license agreement (EULA) for gated models.
   *
   * @public
   */
  AcceptEula?: boolean | undefined;
}

/**
 * Specifies the Amazon S3 path and optional encryption settings for training session output data, including checkpoints, model artifacts, and invocation results.
 *
 * @public
 */
export interface TrainingSessionS3Location {
  /**
   * The Amazon S3 path where training session outputs are stored.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt output data. If not specified, the default Amazon S3 encryption is used.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * The output configuration for a training session, including the Amazon S3 location for checkpoints and model artifacts, and optional encryption settings.
 *
 * @public
 */
export interface TrainingSessionOutputConfig {
  /**
   * The Amazon S3 location where training session outputs, including checkpoints and model artifacts, are stored.
   *
   * @public
   */
  S3Location: TrainingSessionS3Location | undefined;
}

/**
 * @public
 */
export interface CreateTrainingSessionRequest {
  /**
   * The name of the training session.
   *
   * @public
   */
  TrainingSessionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model package group where checkpoints and fine-tuned model artifacts are published.
   *
   * @public
   */
  ModelPackageGroupArn?: string | undefined;

  /**
   * The Low-Rank Adaptation (LoRA) configuration for the training session, including the rank and alpha parameters.
   *
   * @public
   */
  LoraConfig: LoraConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to access resources on your behalf. The role must have permissions to access the output S3 path and model package group.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The Virtual Private Cloud (VPC) configuration for the training session. Specify subnets and security groups to run the training session in your VPC.
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * The configuration for the base model, including the model ARN and end-user license agreement (EULA) acceptance.
   *
   * @public
   */
  ModelConfig: TrainingSessionModelConfig | undefined;

  /**
   * The output configuration for the training session, including the S3 location and optional encryption settings.
   *
   * @public
   */
  OutputConfig: TrainingSessionOutputConfig | undefined;

  /**
   * An array of key-value pairs to apply to the training session as tags. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrainingSessionResponse {
  /**
   * The Amazon Resource Name (ARN) of the training session.
   *
   * @public
   */
  TrainingSessionArn: string | undefined;
}

/**
 * The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see [Associate Prediction Results with their Corresponding Input Records](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html).
 *
 * @public
 */
export interface DataProcessing {
  /**
   * A [JSONPath](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators) expression used to select a portion of the input data to pass to the algorithm. Use the `InputFilter` parameter to exclude fields, such as an ID column, from the input. If you want SageMaker to pass the entire input dataset to the algorithm, accept the default value `$`.
   *
   * Examples: `"$"`, `"$[1:]"`, `"$.features"`
   *
   * @public
   */
  InputFilter?: string | undefined;

  /**
   * A [JSONPath](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators) expression used to select a portion of the joined dataset to save in the output file for a batch transform job. If you want SageMaker to store the entire input dataset in the output file, leave the default value, `$`. If you specify indexes that aren't within the dimension size of the joined dataset, you get an error.
   *
   * Examples: `"$"`, `"$[0,5:]"`, `"$['id','SageMakerOutput']"`
   *
   * @public
   */
  OutputFilter?: string | undefined;

  /**
   * Specifies the source of the data to join with the transformed data. The valid values are `None` and `Input`. The default value is `None`, which specifies not to join the input with the transformed data. If you want the batch transform job to join the original input data with the transformed data, set `JoinSource` to `Input`. You can specify `OutputFilter` as an additional filter to select a portion of the joined dataset and store it in the output file.
   *
   * For JSON or JSONLines objects, such as a JSON array, SageMaker adds the transformed data to the input JSON object in an attribute called `SageMakerOutput`. The joined result for JSON must be a key-value pair object. If the input is not a key-value pair object, SageMaker creates a new JSON file. In the new JSON file, and the input data is stored under the `SageMakerInput` key and the results are stored in `SageMakerOutput`.
   *
   * For CSV data, SageMaker takes each row as a JSON array and joins the transformed data with the input by appending each transformed row to the end of the input. The joined data has the original input data followed by the transformed data and the output is a CSV file.
   *
   * For information on how joining in applied, see [Workflow for Associating Inferences with Input Records](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#batch-transform-data-processing-workflow).
   *
   * @public
   */
  JoinSource?: JoinSource | undefined;
}

/**
 * Configures the timeout and maximum number of retries for processing a transform job invocation.
 *
 * @public
 */
export interface ModelClientConfig {
  /**
   * The timeout value in seconds for an invocation request. The default value is 600.
   *
   * @public
   */
  InvocationsTimeoutInSeconds?: number | undefined;

  /**
   * The maximum number of retries when invocation requests are failing. The default value is 3.
   *
   * @public
   */
  InvocationsMaxRetries?: number | undefined;
}

/**
 * @public
 */
export interface CreateTransformJobRequest {
  /**
   * The name of the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.
   *
   * @public
   */
  TransformJobName: string | undefined;

  /**
   * The name of the model that you want to use for the transform job. `ModelName` must be the name of an existing Amazon SageMaker model within an Amazon Web Services Region in an Amazon Web Services account.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The maximum number of parallel requests that can be sent to each instance in a transform job. If `MaxConcurrentTransforms` is set to `0` or left unset, Amazon SageMaker checks the optional execution-parameters to determine the settings for your chosen algorithm. If the execution-parameters endpoint is not enabled, the default value is `1`. For more information on execution-parameters, see [How Containers Serve Requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-batch-code.html#your-algorithms-batch-code-how-containe-serves-requests). For built-in algorithms, you don't need to set a value for `MaxConcurrentTransforms`.
   *
   * @public
   */
  MaxConcurrentTransforms?: number | undefined;

  /**
   * Configures the timeout and maximum number of retries for processing a transform job invocation.
   *
   * @public
   */
  ModelClientConfig?: ModelClientConfig | undefined;

  /**
   * The maximum allowed size of the payload, in MB. A *payload* is the data portion of a record (without metadata). The value in `MaxPayloadInMB` must be greater than, or equal to, the size of a single record. To estimate the size of a record in MB, divide the size of your dataset by the number of records. To ensure that the records fit within the maximum payload size, we recommend using a slightly larger value. The default value is `6` MB.
   *
   * The value of `MaxPayloadInMB` cannot be greater than 100 MB. If you specify the `MaxConcurrentTransforms` parameter, the value of `(MaxConcurrentTransforms * MaxPayloadInMB)` also cannot exceed 100 MB.
   *
   * For cases where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding, set the value to `0`. This feature works only in supported algorithms. Currently, Amazon SageMaker built-in algorithms do not support HTTP chunked encoding.
   *
   * @public
   */
  MaxPayloadInMB?: number | undefined;

  /**
   * Specifies the number of records to include in a mini-batch for an HTTP inference request. A *record* *is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record.
   *
   * To enable the batch strategy, you must set the `SplitType` property to `Line`, `RecordIO`, or `TFRecord`.
   *
   * To use only one record when making an HTTP invocation request to a container, set `BatchStrategy` to `SingleRecord` and `SplitType` to `Line`.
   *
   * To fit as many records in a mini-batch as can fit within the `MaxPayloadInMB` limit, set `BatchStrategy` to `MultiRecord` and `SplitType` to `Line`.
   *
   * @public*
   */
  BatchStrategy?: BatchStrategy | undefined;

  /**
   * The environment variables to set in the Docker container. Don't include any sensitive data in your environment variables. We support up to 16 key and values entries in the map.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * Describes the input source and the way the transform job consumes it.
   *
   * @public
   */
  TransformInput: TransformInput | undefined;

  /**
   * Describes the results of the transform job.
   *
   * @public
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * Configuration to control how SageMaker captures inference data.
   *
   * @public
   */
  DataCaptureConfig?: BatchDataCaptureConfig | undefined;

  /**
   * Describes the resources, including ML instance types and ML instance count, to use for the transform job.
   *
   * @public
   */
  TransformResources: TransformResources | undefined;

  /**
   * The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see [Associate Prediction Results with their Corresponding Input Records](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html).
   *
   * @public
   */
  DataProcessing?: DataProcessing | undefined;

  /**
   * (Optional) An array of key-value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) in the *Amazon Web Services Billing and Cost Management User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:
   *
   * - [CreateProcessingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html)
   * - [CreateTrainingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html)
   * - [CreateTransformJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html)
   *
   * @public
   */
  ExperimentConfig?: ExperimentConfig | undefined;
}

/**
 * @public
 */
export interface CreateTransformJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the transform job.
   *
   * @public
   */
  TransformJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateTrialRequest {
  /**
   * The name of the trial. The name must be unique in your Amazon Web Services account and is not case-sensitive.
   *
   * @public
   */
  TrialName: string | undefined;

  /**
   * The name of the trial as displayed. The name doesn't need to be unique. If `DisplayName` isn't specified, `TrialName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The name of the experiment to associate the trial with.
   *
   * @public
   */
  ExperimentName: string | undefined;

  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   *
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * A list of tags to associate with the trial. You can use [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API to search on the tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrialResponse {
  /**
   * The Amazon Resource Name (ARN) of the trial.
   *
   * @public
   */
  TrialArn?: string | undefined;
}

/**
 * Represents an input or output artifact of a trial component. You specify `TrialComponentArtifact` as part of the `InputArtifacts` and `OutputArtifacts` parameters in the [CreateTrialComponent](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrialComponent.html) request.
 *
 * Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and instance types. Examples of output artifacts are metrics, snapshots, logs, and images.
 *
 * @public
 */
export interface TrialComponentArtifact {
  /**
   * The media type of the artifact, which indicates the type of data in the artifact file. The media type consists of a *type* and a *subtype* concatenated with a slash (/) character, for example, text/csv, image/jpeg, and s3/uri. The type specifies the category of the media. The subtype specifies the kind of data.
   *
   * @public
   */
  MediaType?: string | undefined;

  /**
   * The location of the artifact.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The value of a hyperparameter. Only one of `NumberValue` or `StringValue` can be specified.
 *
 * This object is specified in the [CreateTrialComponent](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrialComponent.html) request.
 *
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
   * The string value of a categorical hyperparameter. If you specify a value for this parameter, you can't specify the `NumberValue` parameter.
   *
   * @public
   */
  export interface StringValueMember {
    StringValue: string;
    NumberValue?: never;
    $unknown?: never;
  }

  /**
   * The numeric value of a numeric hyperparameter. If you specify a value for this parameter, you can't specify the `StringValue` parameter.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StringValue: (value: string) => T;
    NumberValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The status of the trial component.
 *
 * @public
 */
export interface TrialComponentStatus {
  /**
   * The status of the trial component.
   *
   * @public
   */
  PrimaryStatus?: TrialComponentPrimaryStatus | undefined;

  /**
   * If the component failed, a message describing why.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface CreateTrialComponentRequest {
  /**
   * The name of the component. The name must be unique in your Amazon Web Services account and is not case-sensitive.
   *
   * @public
   */
  TrialComponentName: string | undefined;

  /**
   * The name of the component as displayed. The name doesn't need to be unique. If `DisplayName` isn't specified, `TrialComponentName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The status of the component. States include:
   *
   * - InProgress
   * - Completed
   * - Failed
   *
   * @public
   */
  Status?: TrialComponentStatus | undefined;

  /**
   * When the component started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * When the component ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The hyperparameters for the component.
   *
   * @public
   */
  Parameters?: Record<string, TrialComponentParameterValue> | undefined;

  /**
   * The input artifacts for the component. Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and instance types.
   *
   * @public
   */
  InputArtifacts?: Record<string, TrialComponentArtifact> | undefined;

  /**
   * The output artifacts for the component. Examples of output artifacts are metrics, snapshots, logs, and images.
   *
   * @public
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact> | undefined;

  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   *
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * A list of tags to associate with the component. You can use [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API to search on the tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTrialComponentResponse {
  /**
   * The Amazon Resource Name (ARN) of the trial component.
   *
   * @public
   */
  TrialComponentArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserProfileRequest {
  /**
   * The ID of the associated Domain.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * A name for the UserProfile. This value is not case sensitive.
   *
   * @public
   */
  UserProfileName: string | undefined;

  /**
   * A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is IAM Identity Center, this field is required. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
   *
   * @public
   */
  SingleSignOnUserIdentifier?: string | undefined;

  /**
   * The username of the associated Amazon Web Services Single Sign-On User for this UserProfile. If the Domain's AuthMode is IAM Identity Center, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
   *
   * @public
   */
  SingleSignOnUserValue?: string | undefined;

  /**
   * Each tag consists of a key and an optional value. Tag keys must be unique per resource.
   *
   * Tags that you specify for the User Profile are also added to all Apps that the User Profile launches.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A collection of settings.
   *
   * @public
   */
  UserSettings?: UserSettings | undefined;
}

/**
 * @public
 */
export interface CreateUserProfileResponse {
  /**
   * The user profile Amazon Resource Name (ARN).
   *
   * @public
   */
  UserProfileArn?: string | undefined;
}

/**
 * Use this parameter to configure your OIDC Identity Provider (IdP).
 *
 * @public
 */
export interface OidcConfig {
  /**
   * The OIDC IdP client ID used to configure your private workforce.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The OIDC IdP client secret used to configure your private workforce.
   *
   * @public
   */
  ClientSecret: string | undefined;

  /**
   * The OIDC IdP issuer used to configure your private workforce.
   *
   * @public
   */
  Issuer: string | undefined;

  /**
   * The OIDC IdP authorization endpoint used to configure your private workforce.
   *
   * @public
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * The OIDC IdP token endpoint used to configure your private workforce.
   *
   * @public
   */
  TokenEndpoint: string | undefined;

  /**
   * The OIDC IdP user information endpoint used to configure your private workforce.
   *
   * @public
   */
  UserInfoEndpoint: string | undefined;

  /**
   * The OIDC IdP logout endpoint used to configure your private workforce.
   *
   * @public
   */
  LogoutEndpoint: string | undefined;

  /**
   * The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.
   *
   * @public
   */
  JwksUri: string | undefined;

  /**
   * An array of string identifiers used to refer to the specific pieces of user data or claims that the client application wants to access.
   *
   * @public
   */
  Scope?: string | undefined;

  /**
   * A string to string map of identifiers specific to the custom identity provider (IdP) being used.
   *
   * @public
   */
  AuthenticationRequestExtraParams?: Record<string, string> | undefined;
}

/**
 * A list of IP address ranges ([CIDRs](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html)). Used to create an allow list of IP addresses for a private workforce. Workers will only be able to log in to their worker portal from an IP address within this range. By default, a workforce isn't restricted to specific IP addresses.
 *
 * @public
 */
export interface SourceIpConfig {
  /**
   * A list of one to ten [Classless Inter-Domain Routing](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) (CIDR) values.
   *
   * Maximum: Ten CIDR values
   *
   * > **Note:** The following Length Constraints apply to individual CIDR values in the CIDR value list.
   *
   * @public
   */
  Cidrs: string[] | undefined;
}

/**
 * The VPC object you use to create or update a workforce.
 *
 * @public
 */
export interface WorkforceVpcConfigRequest {
  /**
   * The ID of the VPC that the workforce uses for communication.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The VPC security group IDs, in the form `sg-xxxxxxxx`. The security groups must be for the same VPC as specified in the subnet.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The ID of the subnets in the VPC that you want to connect.
   *
   * @public
   */
  Subnets?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkforceRequest {
  /**
   * Use this parameter to configure an Amazon Cognito private workforce. A single Cognito workforce is created using and corresponds to a single [Amazon Cognito user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html).
   *
   * Do not use `OidcConfig` if you specify values for `CognitoConfig`.
   *
   * @public
   */
  CognitoConfig?: CognitoConfig | undefined;

  /**
   * Use this parameter to configure a private workforce using your own OIDC Identity Provider.
   *
   * Do not use `CognitoConfig` if you specify values for `OidcConfig`.
   *
   * @public
   */
  OidcConfig?: OidcConfig | undefined;

  /**
   * A list of IP address ranges ([CIDRs](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html)). Used to create an allow list of IP addresses for a private workforce. Workers will only be able to log in to their worker portal from an IP address within this range. By default, a workforce isn't restricted to specific IP addresses.
   *
   * @public
   */
  SourceIpConfig?: SourceIpConfig | undefined;

  /**
   * The name of the private workforce.
   *
   * @public
   */
  WorkforceName: string | undefined;

  /**
   * An array of key-value pairs that contain metadata to help you categorize and organize our workforce. Each tag consists of a key and a value, both of which you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Use this parameter to configure a workforce using VPC.
   *
   * @public
   */
  WorkforceVpcConfig?: WorkforceVpcConfigRequest | undefined;

  /**
   * Use this parameter to specify whether you want `IPv4` only or `dualstack` (`IPv4` and `IPv6`) to support your labeling workforce.
   *
   * @public
   */
  IpAddressType?: WorkforceIpAddressType | undefined;
}

/**
 * @public
 */
export interface CreateWorkforceResponse {
  /**
   * The Amazon Resource Name (ARN) of the workforce.
   *
   * @public
   */
  WorkforceArn: string | undefined;
}

/**
 * A list of user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. When you add a user group to the list of `Groups`, you can add that user group to one or more private work teams. If you add a user group to a private work team, all workers in that user group are added to the work team.
 *
 * @public
 */
export interface OidcMemberDefinition {
  /**
   * A list of comma seperated strings that identifies user groups in your OIDC IdP. Each user group is made up of a group of private workers.
   *
   * @public
   */
  Groups?: string[] | undefined;
}

/**
 * Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.
 *
 * @public
 */
export interface MemberDefinition {
  /**
   * The Amazon Cognito user group that is part of the work team.
   *
   * @public
   */
  CognitoMemberDefinition?: CognitoMemberDefinition | undefined;

  /**
   * A list user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. When you add a user group to the list of `Groups`, you can add that user group to one or more private work teams. If you add a user group to a private work team, all workers in that user group are added to the work team.
   *
   * @public
   */
  OidcMemberDefinition?: OidcMemberDefinition | undefined;
}

/**
 * Configures Amazon SNS notifications of available or expiring work items for work teams.
 *
 * @public
 */
export interface NotificationConfiguration {
  /**
   * The ARN for the Amazon SNS topic to which notifications should be published.
   *
   * @public
   */
  NotificationTopicArn?: string | undefined;
}

/**
 * Use this parameter to specify a supported global condition key that is added to the IAM policy.
 *
 * @public
 */
export interface IamPolicyConstraints {
  /**
   * When `SourceIp` is `Enabled` the worker's IP address when a task is rendered in the worker portal is added to the IAM policy as a `Condition` used to generate the Amazon S3 presigned URL. This IP address is checked by Amazon S3 and must match in order for the Amazon S3 resource to be rendered in the worker portal.
   *
   * @public
   */
  SourceIp?: EnabledOrDisabled | undefined;

  /**
   * When `VpcSourceIp` is `Enabled` the worker's IP address when a task is rendered in private worker portal inside the VPC is added to the IAM policy as a `Condition` used to generate the Amazon S3 presigned URL. To render the task successfully Amazon S3 checks that the presigned URL is being accessed over an Amazon S3 VPC Endpoint, and that the worker's IP address matches the IP address in the IAM policy. To learn more about configuring private worker portal, see [Use Amazon VPC mode from a private worker portal](https://docs.aws.amazon.com/sagemaker/latest/dg/samurai-vpc-worker-portal.html).
   *
   * @public
   */
  VpcSourceIp?: EnabledOrDisabled | undefined;
}

/**
 * This object defines the access restrictions to Amazon S3 resources that are included in custom worker task templates using the Liquid filter, `grant_read_access`.
 *
 * To learn more about how custom templates are created, see [Create custom worker task templates](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-custom-templates.html).
 *
 * @public
 */
export interface S3Presign {
  /**
   * Use this parameter to specify the allowed request source. Possible sources are either `SourceIp` or `VpcSourceIp`.
   *
   * @public
   */
  IamPolicyConstraints?: IamPolicyConstraints | undefined;
}

/**
 * Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL.
 *
 * @public
 */
export interface WorkerAccessConfiguration {
  /**
   * Defines any Amazon S3 resource constraints.
   *
   * @public
   */
  S3Presign?: S3Presign | undefined;
}

/**
 * @public
 */
export interface CreateWorkteamRequest {
  /**
   * The name of the work team. Use this name to identify the work team.
   *
   * @public
   */
  WorkteamName: string | undefined;

  /**
   * The name of the workforce.
   *
   * @public
   */
  WorkforceName?: string | undefined;

  /**
   * A list of `MemberDefinition` objects that contains objects that identify the workers that make up the work team.
   *
   * Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use `CognitoMemberDefinition`. For workforces created using your own OIDC identity provider (IdP) use `OidcMemberDefinition`. Do not provide input for both of these parameters in a single request.
   *
   * For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito *user groups* within the user pool used to create a workforce. All of the `CognitoMemberDefinition` objects that make up the member definition must have the same `ClientId` and `UserPool` values. To add a Amazon Cognito user group to an existing worker pool, see Adding groups to a User Pool. For more information about user pools, see [Amazon Cognito User Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html).
   *
   * For workforces created using your own OIDC IdP, specify the user groups that you want to include in your private work team in `OidcMemberDefinition` by listing those groups in `Groups`.
   *
   * @public
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * A description of the work team.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Configures notification of workers regarding available or expiring work items.
   *
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL.
   *
   * @public
   */
  WorkerAccessConfiguration?: WorkerAccessConfiguration | undefined;

  /**
   * An array of key-value pairs.
   *
   * For more information, see [Resource Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) and [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) in the *Amazon Web Services Billing and Cost Management User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkteamResponse {
  /**
   * The Amazon Resource Name (ARN) of the work team. You can use this ARN to identify the work team.
   *
   * @public
   */
  WorkteamArn?: string | undefined;
}

/**
 * A customized metric.
 *
 * @public
 */
export interface CustomizedMetricSpecification {
  /**
   * The name of the customized metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The namespace of the customized metric.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The statistic of the customized metric.
   *
   * @public
   */
  Statistic?: Statistic | undefined;
}

/**
 * The currently active data capture configuration used by your Endpoint.
 *
 * @public
 */
export interface DataCaptureConfigSummary {
  /**
   * Whether data capture is enabled or disabled.
   *
   * @public
   */
  EnableCapture: boolean | undefined;

  /**
   * Whether data capture is currently functional.
   *
   * @public
   */
  CaptureStatus: CaptureStatus | undefined;

  /**
   * The percentage of requests being captured by your Endpoint.
   *
   * @public
   */
  CurrentSamplingPercentage: number | undefined;

  /**
   * The Amazon S3 location being used to capture the data.
   *
   * @public
   */
  DestinationS3Uri: string | undefined;

  /**
   * The KMS key being used to encrypt the data in Amazon S3.
   *
   * @public
   */
  KmsKeyId: string | undefined;
}

/**
 * Information about the status of the rule evaluation.
 *
 * @public
 */
export interface DebugRuleEvaluationStatus {
  /**
   * The name of the rule configuration.
   *
   * @public
   */
  RuleConfigurationName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule evaluation job.
   *
   * @public
   */
  RuleEvaluationJobArn?: string | undefined;

  /**
   * Status of the rule evaluation.
   *
   * @public
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | undefined;

  /**
   * Details from the rule evaluation.
   *
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * Timestamp when the rule evaluation status was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * The configuration of deep health checks for an instance group.
 *
 * > **Note:** Overlapping deep health check configurations will be merged into a single operation.
 *
 * @public
 */
export interface InstanceGroupHealthCheckConfiguration {
  /**
   * The name of the instance group.
   *
   * @public
   */
  InstanceGroupName: string | undefined;

  /**
   * A list of Amazon Elastic Compute Cloud (EC2) instance IDs on which to perform deep health checks.
   *
   * > **Note:** Leave this field blank to perform deep health checks on the entire instance group.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * A list of deep health checks to be performed.
   *
   * @public
   */
  DeepHealthChecks: DeepHealthCheckType[] | undefined;
}

/**
 * @public
 */
export interface DeleteActionRequest {
  /**
   * The name of the action to delete.
   *
   * @public
   */
  ActionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteActionResponse {
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
export interface DeleteAIBenchmarkJobRequest {
  /**
   * The name of the AI benchmark job to delete.
   *
   * @public
   */
  AIBenchmarkJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAIBenchmarkJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted benchmark job.
   *
   * @public
   */
  AIBenchmarkJobArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAIRecommendationJobRequest {
  /**
   * The name of the AI recommendation job to delete.
   *
   * @public
   */
  AIRecommendationJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAIRecommendationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted recommendation job.
   *
   * @public
   */
  AIRecommendationJobArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAIWorkloadConfigRequest {
  /**
   * The name of the AI workload configuration to delete.
   *
   * @public
   */
  AIWorkloadConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAIWorkloadConfigResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted AI workload configuration.
   *
   * @public
   */
  AIWorkloadConfigArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAlgorithmInput {
  /**
   * The name of the algorithm to delete.
   *
   * @public
   */
  AlgorithmName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppRequest {
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
}

/**
 * @public
 */
export interface DeleteAppImageConfigRequest {
  /**
   * The name of the AppImageConfig to delete.
   *
   * @public
   */
  AppImageConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteArtifactRequest {
  /**
   * The Amazon Resource Name (ARN) of the artifact to delete.
   *
   * @public
   */
  ArtifactArn?: string | undefined;

  /**
   * The URI of the source.
   *
   * @public
   */
  Source?: ArtifactSource | undefined;
}

/**
 * @public
 */
export interface DeleteArtifactResponse {
  /**
   * The Amazon Resource Name (ARN) of the artifact.
   *
   * @public
   */
  ArtifactArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssociationRequest {
  /**
   * The ARN of the source.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination.
   *
   * @public
   */
  DestinationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssociationResponse {
  /**
   * The ARN of the source.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination.
   *
   * @public
   */
  DestinationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster to delete.
   *
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster to delete.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterSchedulerConfigRequest {
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
export interface DeleteCodeRepositoryInput {
  /**
   * The name of the Git repository to delete.
   *
   * @public
   */
  CodeRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCompilationJobRequest {
  /**
   * The name of the compilation job to delete.
   *
   * @public
   */
  CompilationJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteComputeQuotaRequest {
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
export interface DeleteContextRequest {
  /**
   * The name of the context to delete.
   *
   * @public
   */
  ContextName: string | undefined;
}

/**
 * @public
 */
export interface DeleteContextResponse {
  /**
   * The Amazon Resource Name (ARN) of the context.
   *
   * @public
   */
  ContextArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataQualityJobDefinitionRequest {
  /**
   * The name of the data quality monitoring job definition to delete.
   *
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceFleetRequest {
  /**
   * The name of the fleet to delete.
   *
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * The retention policy for data stored on an Amazon Elastic File System volume.
 *
 * @public
 */
export interface RetentionPolicy {
  /**
   * The default is `Retain`, which specifies to keep the data stored on the Amazon EFS volume.
   *
   * Specify `Delete` to delete the data stored on the Amazon EFS volume.
   *
   * @public
   */
  HomeEfsFileSystem?: RetentionType | undefined;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * The domain ID.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted. By default, all resources are retained (not automatically deleted).
   *
   * @public
   */
  RetentionPolicy?: RetentionPolicy | undefined;
}

/**
 * @public
 */
export interface DeleteEdgeDeploymentPlanRequest {
  /**
   * The name of the edge deployment plan to delete.
   *
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEdgeDeploymentStageRequest {
  /**
   * The name of the edge deployment plan from which the stage will be deleted.
   *
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * The name of the stage.
   *
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointInput {
  /**
   * The name of the endpoint that you want to delete.
   *
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointConfigInput {
  /**
   * The name of the endpoint configuration that you want to delete.
   *
   * @public
   */
  EndpointConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentRequest {
  /**
   * The name of the experiment to delete.
   *
   * @public
   */
  ExperimentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteExperimentResponse {
  /**
   * The Amazon Resource Name (ARN) of the experiment that is being deleted.
   *
   * @public
   */
  ExperimentArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFeatureGroupRequest {
  /**
   * The name of the `FeatureGroup` you want to delete. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.
   *
   * @public
   */
  FeatureGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowDefinitionRequest {
  /**
   * The name of the flow definition you are deleting.
   *
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
   * The name of the hub to delete.
   *
   * @public
   */
  HubName: string | undefined;
}

/**
 * @public
 */
export interface DeleteHubContentRequest {
  /**
   * The name of the hub that you want to delete content in.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The type of content that you want to delete from a hub.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * The name of the content that you want to delete from a hub.
   *
   * @public
   */
  HubContentName: string | undefined;

  /**
   * The version of the content that you want to delete from a hub.
   *
   * @public
   */
  HubContentVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteHubContentReferenceRequest {
  /**
   * The name of the hub to delete the hub content reference from.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The type of hub content reference to delete. The only supported type of hub content reference to delete is `ModelReference`.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * The name of the hub content to delete.
   *
   * @public
   */
  HubContentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteHumanTaskUiRequest {
  /**
   * The name of the human task user interface (work task template) you want to delete.
   *
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
   * The name of the hyperparameter tuning job that you want to delete.
   *
   * @public
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageRequest {
  /**
   * The name of the image to delete.
   *
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
   * The name of the image to delete.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * The version to delete.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The alias of the image to delete.
   *
   * @public
   */
  Alias?: string | undefined;
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
   * The name of the inference component to delete.
   *
   * @public
   */
  InferenceComponentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceExperimentRequest {
  /**
   * The name of the inference experiment you want to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceExperimentResponse {
  /**
   * The ARN of the deleted inference experiment.
   *
   * @public
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * The name of the job to delete.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The category of the job to delete.
   *
   * @public
   */
  JobCategory: JobCategory | undefined;
}

/**
 * @public
 */
export interface DeleteJobResponse {}

/**
 * @public
 */
export interface DeleteMlflowAppRequest {
  /**
   * The ARN of the MLflow App to delete.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMlflowAppResponse {
  /**
   * The ARN of the deleted MLflow App.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteMlflowTrackingServerRequest {
  /**
   * The name of the the tracking server to delete.
   *
   * @public
   */
  TrackingServerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMlflowTrackingServerResponse {
  /**
   * A `TrackingServerArn` object, the ARN of the tracking server that is deleted if successfully found.
   *
   * @public
   */
  TrackingServerArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelInput {
  /**
   * The name of the model to delete.
   *
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelBiasJobDefinitionRequest {
  /**
   * The name of the model bias job definition to delete.
   *
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelCardRequest {
  /**
   * The name of the model card to delete.
   *
   * @public
   */
  ModelCardName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelExplainabilityJobDefinitionRequest {
  /**
   * The name of the model explainability job definition to delete.
   *
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageInput {
  /**
   * The name or Amazon Resource Name (ARN) of the model package to delete.
   *
   * When you specify a name, the name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).
   *
   * @public
   */
  ModelPackageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageGroupInput {
  /**
   * The name of the model group to delete.
   *
   * @public
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelPackageGroupPolicyInput {
  /**
   * The name of the model group for which to delete the policy.
   *
   * @public
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelQualityJobDefinitionRequest {
  /**
   * The name of the model quality monitoring job definition to delete.
   *
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitoringScheduleRequest {
  /**
   * The name of the monitoring schedule to delete.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotebookInstanceInput {
  /**
   * The name of the SageMaker AI notebook instance to delete.
   *
   * @public
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotebookInstanceLifecycleConfigInput {
  /**
   * The name of the lifecycle configuration to delete.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteOptimizationJobRequest {
  /**
   * The name that you assigned to the optimization job.
   *
   * @public
   */
  OptimizationJobName: string | undefined;
}

/**
 * @public
 */
export interface DeletePartnerAppRequest {
  /**
   * The ARN of the SageMaker Partner AI App to delete.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A unique token that guarantees that the call to this API is idempotent.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePartnerAppResponse {
  /**
   * The ARN of the SageMaker Partner AI App that was deleted.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeletePipelineRequest {
  /**
   * The name of the pipeline to delete.
   *
   * @public
   */
  PipelineName: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePipelineResponse {
  /**
   * The Amazon Resource Name (ARN) of the pipeline to delete.
   *
   * @public
   */
  PipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProcessingJobRequest {
  /**
   * The name of the processing job to delete.
   *
   * @public
   */
  ProcessingJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectInput {
  /**
   * The name of the project to delete.
   *
   * @public
   */
  ProjectName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceRequest {
  /**
   * The ID of the associated domain.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The name of the space.
   *
   * @public
   */
  SpaceName: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioLifecycleConfigRequest {
  /**
   * The name of the Amazon SageMaker AI Studio Lifecycle Configuration to delete.
   *
   * @public
   */
  StudioLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTagsInput {
  /**
   * The Amazon Resource Name (ARN) of the resource whose tags you want to delete.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An array or one or more tag keys to delete.
   *
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
export interface DeleteTrainingJobRequest {
  /**
   * The name of the training job to delete.
   *
   * @public
   */
  TrainingJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrainingSessionRequest {
  /**
   * The name of the training session to delete.
   *
   * @public
   */
  TrainingSessionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrainingSessionResponse {}

/**
 * @public
 */
export interface DeleteTrialRequest {
  /**
   * The name of the trial to delete.
   *
   * @public
   */
  TrialName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrialResponse {
  /**
   * The Amazon Resource Name (ARN) of the trial that is being deleted.
   *
   * @public
   */
  TrialArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrialComponentRequest {
  /**
   * The name of the component to delete.
   *
   * @public
   */
  TrialComponentName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrialComponentResponse {
  /**
   * The Amazon Resource Name (ARN) of the component is being deleted.
   *
   * @public
   */
  TrialComponentArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserProfileRequest {
  /**
   * The domain ID.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The user profile name.
   *
   * @public
   */
  UserProfileName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkforceRequest {
  /**
   * The name of the workforce.
   *
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
   * The name of the work team to delete.
   *
   * @public
   */
  WorkteamName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkteamResponse {
  /**
   * Returns `true` if the work team was successfully deleted; otherwise, returns `false`.
   *
   * @public
   */
  Success: boolean | undefined;
}

/**
 * Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this [ProductionVariant](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariant.html).
 *
 * If you used the `registry/repository[:tag]` form to specify the image path of the primary container when you created the model hosted in this `ProductionVariant`, the path resolves to a path of the form `registry/repository[@digest]`. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see [Pulling an Image](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html) in the *Amazon ECR User Guide*.
 *
 * @public
 */
export interface DeployedImage {
  /**
   * The image path you specified when you created the model.
   *
   * @public
   */
  SpecifiedImage?: string | undefined;

  /**
   * The specific digest path of the image hosted in this `ProductionVariant`.
   *
   * @public
   */
  ResolvedImage?: string | undefined;

  /**
   * The date and time when the image path for the model resolved to the `ResolvedImage`
   *
   * @public
   */
  ResolutionTime?: Date | undefined;
}

/**
 * The recommended configuration to use for Real-Time Inference.
 *
 * @public
 */
export interface RealTimeInferenceRecommendation {
  /**
   * The recommendation ID which uniquely identifies each recommendation.
   *
   * @public
   */
  RecommendationId: string | undefined;

  /**
   * The recommended instance type for Real-Time Inference.
   *
   * @public
   */
  InstanceType: ProductionVariantInstanceType | undefined;

  /**
   * The recommended environment variables to set in the model container for Real-Time Inference.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;
}

/**
 * A set of recommended deployment configurations for the model. To get more advanced recommendations, see [CreateInferenceRecommendationsJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceRecommendationsJob.html) to create an inference recommendation job.
 *
 * @public
 */
export interface DeploymentRecommendation {
  /**
   * Status of the deployment recommendation. The status `NOT_APPLICABLE` means that SageMaker is unable to provide a default recommendation for the model using the information provided. If the deployment status is `IN_PROGRESS`, retry your API call after a few seconds to get a `COMPLETED` deployment recommendation.
   *
   * @public
   */
  RecommendationStatus: RecommendationStatus | undefined;

  /**
   * A list of [RealTimeInferenceRecommendation](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_RealTimeInferenceRecommendation.html) items.
   *
   * @public
   */
  RealTimeInferenceRecommendations?: RealTimeInferenceRecommendation[] | undefined;
}

/**
 * Contains information summarizing the deployment stage results.
 *
 * @public
 */
export interface EdgeDeploymentStatus {
  /**
   * The general status of the current stage.
   *
   * @public
   */
  StageStatus: StageStatus | undefined;

  /**
   * The number of edge devices with the successful deployment in the current stage.
   *
   * @public
   */
  EdgeDeploymentSuccessInStage: number | undefined;

  /**
   * The number of edge devices yet to pick up the deployment in current stage, or in progress.
   *
   * @public
   */
  EdgeDeploymentPendingInStage: number | undefined;

  /**
   * The number of edge devices that failed the deployment in current stage.
   *
   * @public
   */
  EdgeDeploymentFailedInStage: number | undefined;

  /**
   * A detailed message about deployment status in current stage.
   *
   * @public
   */
  EdgeDeploymentStatusMessage?: string | undefined;

  /**
   * The time when the deployment API started.
   *
   * @public
   */
  EdgeDeploymentStageStartTime?: Date | undefined;
}

/**
 * Contains information summarizing the deployment stage results.
 *
 * @public
 */
export interface DeploymentStageStatusSummary {
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
  DeploymentConfig: EdgeDeploymentConfig | undefined;

  /**
   * General status of the current state.
   *
   * @public
   */
  DeploymentStatus: EdgeDeploymentStatus | undefined;
}

/**
 * @public
 */
export interface DeregisterDevicesRequest {
  /**
   * The name of the fleet the devices belong to.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * The unique IDs of the devices.
   *
   * @public
   */
  DeviceNames: string[] | undefined;
}

/**
 * Information that SageMaker Neo automatically derived about the model.
 *
 * @public
 */
export interface DerivedInformation {
  /**
   * The data input configuration that SageMaker Neo automatically derived for the model. When SageMaker Neo derives this information, you don't need to specify the data input configuration when you create a compilation job.
   *
   * @public
   */
  DerivedDataInputConfig?: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionRequest {
  /**
   * The name of the action to describe.
   *
   * @public
   */
  ActionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionResponse {
  /**
   * The name of the action.
   *
   * @public
   */
  ActionName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the action.
   *
   * @public
   */
  ActionArn?: string | undefined;

  /**
   * The source of the action.
   *
   * @public
   */
  Source?: ActionSource | undefined;

  /**
   * The type of the action.
   *
   * @public
   */
  ActionType?: string | undefined;

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
   * A list of the action's properties.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * When the action was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * When the action was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   *
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lineage group.
   *
   * @public
   */
  LineageGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAIBenchmarkJobRequest {
  /**
   * The name of the AI benchmark job to describe.
   *
   * @public
   */
  AIBenchmarkJobName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAIBenchmarkJobResponse {
  /**
   * The name of the AI benchmark job.
   *
   * @public
   */
  AIBenchmarkJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AI benchmark job.
   *
   * @public
   */
  AIBenchmarkJobArn: string | undefined;

  /**
   * The status of the AI benchmark job.
   *
   * @public
   */
  AIBenchmarkJobStatus: AIBenchmarkJobStatus | undefined;

  /**
   * If the benchmark job failed, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The target endpoint that was benchmarked.
   *
   * @public
   */
  BenchmarkTarget: AIBenchmarkTarget | undefined;

  /**
   * The output configuration for the benchmark job, including the Amazon S3 output location and CloudWatch log information.
   *
   * @public
   */
  OutputConfig: AIBenchmarkOutputResult | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the AI workload configuration used for this benchmark job.
   *
   * @public
   */
  AIWorkloadConfigIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used by the benchmark job.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The network configuration for the benchmark job.
   *
   * @public
   */
  NetworkConfig?: AIBenchmarkNetworkConfig | undefined;

  /**
   * A timestamp that indicates when the benchmark job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp that indicates when the benchmark job started running.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * A timestamp that indicates when the benchmark job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The tags associated with the benchmark job.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeAIRecommendationJobRequest {
  /**
   * The name of the AI recommendation job to describe.
   *
   * @public
   */
  AIRecommendationJobName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAIRecommendationJobResponse {
  /**
   * The name of the AI recommendation job.
   *
   * @public
   */
  AIRecommendationJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AI recommendation job.
   *
   * @public
   */
  AIRecommendationJobArn: string | undefined;

  /**
   * The status of the AI recommendation job.
   *
   * @public
   */
  AIRecommendationJobStatus: AIRecommendationJobStatus | undefined;

  /**
   * If the recommendation job failed, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The source of the model that was analyzed.
   *
   * @public
   */
  ModelSource: AIModelSource | undefined;

  /**
   * The output configuration for the recommendation job.
   *
   * @public
   */
  OutputConfig: AIRecommendationOutputResult | undefined;

  /**
   * The inference framework configuration.
   *
   * @public
   */
  InferenceSpecification?: AIRecommendationInferenceSpecification | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the AI workload configuration used for this recommendation job.
   *
   * @public
   */
  AIWorkloadConfigIdentifier: string | undefined;

  /**
   * Whether model optimization techniques were allowed.
   *
   * @public
   */
  OptimizeModel?: boolean | undefined;

  /**
   * The performance targets specified for the recommendation job.
   *
   * @public
   */
  PerformanceTarget?: AIRecommendationPerformanceTarget | undefined;

  /**
   * The list of optimization recommendations generated by the job. Each recommendation includes optimization details, deployment configuration, expected performance metrics, and the associated benchmark job ARN.
   *
   * @public
   */
  Recommendations?: AIRecommendation[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used by the recommendation job.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The compute resource specification for the recommendation job.
   *
   * @public
   */
  ComputeSpec?: AIRecommendationComputeSpec | undefined;

  /**
   * The LoRA adapter source that you specified when you created the recommendation job. This field is absent when you created the job without LoRA adapters.
   *
   * @public
   */
  AdapterSource?: AIAdapterSource | undefined;

  /**
   * A timestamp that indicates when the recommendation job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp that indicates when the recommendation job started running.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * A timestamp that indicates when the recommendation job completed.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The tags associated with the recommendation job.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeAIWorkloadConfigRequest {
  /**
   * The name of the AI workload configuration to describe.
   *
   * @public
   */
  AIWorkloadConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAIWorkloadConfigResponse {
  /**
   * The name of the AI workload configuration.
   *
   * @public
   */
  AIWorkloadConfigName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AI workload configuration.
   *
   * @public
   */
  AIWorkloadConfigArn: string | undefined;

  /**
   * The dataset configuration for the workload.
   *
   * @public
   */
  DatasetConfig?: AIDatasetConfig | undefined;

  /**
   * The benchmark tool configuration and workload specification.
   *
   * @public
   */
  AIWorkloadConfigs?: AIWorkloadConfigs | undefined;

  /**
   * The tags associated with the AI workload configuration.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A timestamp that indicates when the AI workload configuration was created.
   *
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeAlgorithmInput {
  /**
   * The name of the algorithm to describe.
   *
   * @public
   */
  AlgorithmName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAlgorithmOutput {
  /**
   * The name of the algorithm being described.
   *
   * @public
   */
  AlgorithmName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the algorithm.
   *
   * @public
   */
  AlgorithmArn: string | undefined;

  /**
   * A brief summary about the algorithm.
   *
   * @public
   */
  AlgorithmDescription?: string | undefined;

  /**
   * A timestamp specifying when the algorithm was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Details about training jobs run by this algorithm.
   *
   * @public
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * Details about inference jobs that the algorithm runs.
   *
   * @public
   */
  InferenceSpecification?: InferenceSpecification | undefined;

  /**
   * Details about configurations for one or more training jobs that SageMaker runs to test the algorithm.
   *
   * @public
   */
  ValidationSpecification?: AlgorithmValidationSpecification | undefined;

  /**
   * The current status of the algorithm.
   *
   * @public
   */
  AlgorithmStatus: AlgorithmStatus | undefined;

  /**
   * Details about the current status of the algorithm.
   *
   * @public
   */
  AlgorithmStatusDetails: AlgorithmStatusDetails | undefined;

  /**
   * The product identifier of the algorithm.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * Whether the algorithm is certified to be listed in Amazon Web Services Marketplace.
   *
   * @public
   */
  CertifyForMarketplace?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAppRequest {
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
   * The name of the space.
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
}

/**
 * @public
 */
export interface DescribeAppResponse {
  /**
   * The Amazon Resource Name (ARN) of the app.
   *
   * @public
   */
  AppArn?: string | undefined;

  /**
   * The type of app.
   *
   * @public
   */
  AppType?: AppType | undefined;

  /**
   * The name of the app.
   *
   * @public
   */
  AppName?: string | undefined;

  /**
   * The domain ID.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The user profile name.
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
   * The status.
   *
   * @public
   */
  Status?: AppStatus | undefined;

  /**
   * The effective status of Trusted Identity Propagation (TIP) for this application. When enabled, user identities from IAM Identity Center are being propagated through the application to TIP enabled Amazon Web Services services. When disabled, standard IAM role-based access is used.
   *
   * @public
   */
  EffectiveTrustedIdentityPropagationStatus?: FeatureStatus | undefined;

  /**
   * Indicates whether the application is launched in recovery mode.
   *
   * @public
   */
  RecoveryMode?: boolean | undefined;

  /**
   * The timestamp of the last health check.
   *
   * @public
   */
  LastHealthCheckTimestamp?: Date | undefined;

  /**
   * The timestamp of the last user's activity. `LastUserActivityTimestamp` is also updated when SageMaker AI performs health checks without user activity. As a result, this value is set to the same value as `LastHealthCheckTimestamp`.
   *
   * @public
   */
  LastUserActivityTimestamp?: Date | undefined;

  /**
   * The creation time of the application.
   *
   * > **Note:** After an application has been shut down for 24 hours, SageMaker AI deletes all metadata for the application. To be considered an update and retain application metadata, applications must be restarted within 24 hours after the previous application has been shut down. After this time window, creation of an application is considered a new application rather than an update of the previous application.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The failure reason.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The instance type and the Amazon Resource Name (ARN) of the SageMaker AI image created on the instance.
   *
   * @public
   */
  ResourceSpec?: ResourceSpec | undefined;

  /**
   * The lifecycle configuration that runs before the default lifecycle configuration
   *
   * @public
   */
  BuiltInLifecycleConfigArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppImageConfigRequest {
  /**
   * The name of the AppImageConfig to describe.
   *
   * @public
   */
  AppImageConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppImageConfigResponse {
  /**
   * The ARN of the AppImageConfig.
   *
   * @public
   */
  AppImageConfigArn?: string | undefined;

  /**
   * The name of the AppImageConfig.
   *
   * @public
   */
  AppImageConfigName?: string | undefined;

  /**
   * When the AppImageConfig was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the AppImageConfig was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The configuration of a KernelGateway app.
   *
   * @public
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig | undefined;

  /**
   * The configuration of the JupyterLab app.
   *
   * @public
   */
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig | undefined;

  /**
   * The configuration of the Code Editor app.
   *
   * @public
   */
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig | undefined;
}

/**
 * @public
 */
export interface DescribeArtifactRequest {
  /**
   * The Amazon Resource Name (ARN) of the artifact to describe.
   *
   * @public
   */
  ArtifactArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeArtifactResponse {
  /**
   * The name of the artifact.
   *
   * @public
   */
  ArtifactName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the artifact.
   *
   * @public
   */
  ArtifactArn?: string | undefined;

  /**
   * The source of the artifact.
   *
   * @public
   */
  Source?: ArtifactSource | undefined;

  /**
   * The type of the artifact.
   *
   * @public
   */
  ArtifactType?: string | undefined;

  /**
   * A list of the artifact's properties.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * When the artifact was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * When the artifact was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   *
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lineage group.
   *
   * @public
   */
  LineageGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoMLJobRequest {
  /**
   * Requests information about an AutoML job using its unique name.
   *
   * @public
   */
  AutoMLJobName: string | undefined;
}

/**
 * Provides information about the endpoint of the model deployment.
 *
 * @public
 */
export interface ModelDeployResult {
  /**
   * The name of the endpoint to which the model has been deployed.
   *
   * > **Note:** If model deployment fails, this field is omitted from the response.
   *
   * @public
   */
  EndpointName?: string | undefined;
}

/**
 * The resolved attributes.
 *
 * @public
 */
export interface ResolvedAttributes {
  /**
   * Specifies a metric to minimize or maximize as the objective of an AutoML job.
   *
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective | undefined;

  /**
   * The problem type.
   *
   * @public
   */
  ProblemType?: ProblemType | undefined;

  /**
   * How long a job is allowed to run, or how many candidates a job is allowed to generate.
   *
   * @public
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria | undefined;
}

/**
 * @public
 */
export interface DescribeAutoMLJobResponse {
  /**
   * Returns the name of the AutoML job.
   *
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * Returns the ARN of the AutoML job.
   *
   * @public
   */
  AutoMLJobArn: string | undefined;

  /**
   * Returns the input data configuration for the AutoML job.
   *
   * @public
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * Returns the job's output data config.
   *
   * @public
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * The ARN of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Returns the job's objective.
   *
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective | undefined;

  /**
   * Returns the job's problem type.
   *
   * @public
   */
  ProblemType?: ProblemType | undefined;

  /**
   * Returns the configuration for the AutoML job.
   *
   * @public
   */
  AutoMLJobConfig?: AutoMLJobConfig | undefined;

  /**
   * Returns the creation time of the AutoML job.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Returns the end time of the AutoML job.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Returns the job's last modified time.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * Returns the failure reason for an AutoML job, when applicable.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Returns a list of reasons for partial failures within an AutoML job.
   *
   * @public
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[] | undefined;

  /**
   * The best model candidate selected by SageMaker AI Autopilot using both the best objective metric and lowest [InferenceLatency](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html) for an experiment.
   *
   * @public
   */
  BestCandidate?: AutoMLCandidate | undefined;

  /**
   * Returns the status of the AutoML job.
   *
   * @public
   */
  AutoMLJobStatus: AutoMLJobStatus | undefined;

  /**
   * Returns the secondary status of the AutoML job.
   *
   * @public
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | undefined;

  /**
   * Indicates whether the output for an AutoML job generates candidate definitions only.
   *
   * @public
   */
  GenerateCandidateDefinitionsOnly?: boolean | undefined;

  /**
   * Returns information on the job's artifacts found in `AutoMLJobArtifacts`.
   *
   * @public
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts | undefined;

  /**
   * Contains `ProblemType`, `AutoMLJobObjective`, and `CompletionCriteria`. If you do not provide these values, they are inferred.
   *
   * @public
   */
  ResolvedAttributes?: ResolvedAttributes | undefined;

  /**
   * Indicates whether the model was deployed automatically to an endpoint and the name of that endpoint if deployed automatically.
   *
   * @public
   */
  ModelDeployConfig?: ModelDeployConfig | undefined;

  /**
   * Provides information about endpoint for the model deployment.
   *
   * @public
   */
  ModelDeployResult?: ModelDeployResult | undefined;
}

/**
 * @public
 */
export interface DescribeAutoMLJobV2Request {
  /**
   * Requests information about an AutoML job V2 using its unique name.
   *
   * @public
   */
  AutoMLJobName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoMLJobV2Response {
  /**
   * Returns the name of the AutoML job V2.
   *
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * Returns the Amazon Resource Name (ARN) of the AutoML job V2.
   *
   * @public
   */
  AutoMLJobArn: string | undefined;

  /**
   * Returns an array of channel objects describing the input data and their location.
   *
   * @public
   */
  AutoMLJobInputDataConfig: AutoMLJobChannel[] | undefined;

  /**
   * Returns the job's output data config.
   *
   * @public
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * The ARN of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Returns the job's objective.
   *
   * @public
   */
  AutoMLJobObjective?: AutoMLJobObjective | undefined;

  /**
   * Returns the configuration settings of the problem type set for the AutoML job V2.
   *
   * @public
   */
  AutoMLProblemTypeConfig?: AutoMLProblemTypeConfig | undefined;

  /**
   * Returns the name of the problem type configuration set for the AutoML job V2.
   *
   * @public
   */
  AutoMLProblemTypeConfigName?: AutoMLProblemTypeConfigName | undefined;

  /**
   * Returns the creation time of the AutoML job V2.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Returns the end time of the AutoML job V2.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Returns the job's last modified time.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * Returns the reason for the failure of the AutoML job V2, when applicable.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Returns a list of reasons for partial failures within an AutoML job V2.
   *
   * @public
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[] | undefined;

  /**
   * Information about the candidate produced by an AutoML training job V2, including its status, steps, and other properties.
   *
   * @public
   */
  BestCandidate?: AutoMLCandidate | undefined;

  /**
   * Returns the status of the AutoML job V2.
   *
   * @public
   */
  AutoMLJobStatus: AutoMLJobStatus | undefined;

  /**
   * Returns the secondary status of the AutoML job V2.
   *
   * @public
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | undefined;

  /**
   * The artifacts that are generated during an AutoML job.
   *
   * @public
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts | undefined;

  /**
   * Returns the resolved attributes used by the AutoML job V2.
   *
   * @public
   */
  ResolvedAttributes?: AutoMLResolvedAttributes | undefined;

  /**
   * Indicates whether the model was deployed automatically to an endpoint and the name of that endpoint if deployed automatically.
   *
   * @public
   */
  ModelDeployConfig?: ModelDeployConfig | undefined;

  /**
   * Provides information about endpoint for the model deployment.
   *
   * @public
   */
  ModelDeployResult?: ModelDeployResult | undefined;

  /**
   * Returns the configuration settings of how the data are split into train and validation datasets.
   *
   * @public
   */
  DataSplitConfig?: AutoMLDataSplitConfig | undefined;

  /**
   * Returns the security configuration for traffic encryption or Amazon VPC settings.
   *
   * @public
   */
  SecurityConfig?: AutoMLSecurityConfig | undefined;

  /**
   * The compute configuration used for the AutoML job V2.
   *
   * @public
   */
  AutoMLComputeConfig?: AutoMLComputeConfig | undefined;
}

/**
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster.
   *
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResponse {
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
  ClusterName?: string | undefined;

  /**
   * The status of the SageMaker HyperPod cluster.
   *
   * @public
   */
  ClusterStatus: ClusterStatus | undefined;

  /**
   * The time when the SageMaker Cluster is created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The failure message of the SageMaker HyperPod cluster.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * The instance groups of the SageMaker HyperPod cluster.
   *
   * @public
   */
  InstanceGroups: ClusterInstanceGroupDetails[] | undefined;

  /**
   * The specialized instance groups for training models like Amazon Nova to be created in the SageMaker HyperPod cluster.
   *
   * @public
   */
  RestrictedInstanceGroups?: ClusterRestrictedInstanceGroupDetails[] | undefined;

  /**
   * The configuration for the restricted instance groups (RIG) in the SageMaker HyperPod cluster.
   *
   * @public
   */
  RestrictedInstanceGroupsConfig?: ClusterRestrictedInstanceGroupsConfigOutput | undefined;

  /**
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * The type of orchestrator used for the SageMaker HyperPod cluster.
   *
   * @public
   */
  Orchestrator?: ClusterOrchestrator | undefined;

  /**
   * The current configuration for managed tier checkpointing on the HyperPod cluster. For example, this shows whether the feature is enabled and the percentage of cluster memory allocated for checkpoint storage.
   *
   * @public
   */
  TieredStorageConfig?: ClusterTieredStorageConfig | undefined;

  /**
   * The node recovery mode configured for the SageMaker HyperPod cluster.
   *
   * @public
   */
  NodeRecovery?: ClusterNodeRecovery | undefined;

  /**
   * The mode used for provisioning nodes in the cluster.
   *
   * @public
   */
  NodeProvisioningMode?: ClusterNodeProvisioningMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that HyperPod uses for cluster autoscaling operations.
   *
   * @public
   */
  ClusterRole?: string | undefined;

  /**
   * The current autoscaling configuration and status for the autoscaler.
   *
   * @public
   */
  AutoScaling?: ClusterAutoScalingConfigOutput | undefined;
}

/**
 * @public
 */
export interface DescribeClusterEventRequest {
  /**
   * The unique identifier (UUID) of the event to describe. This ID can be obtained from the `ListClusterEvents` operation.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the HyperPod cluster associated with the event.
   *
   * @public
   */
  ClusterName: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterEventResponse {
  /**
   * Detailed information about the requested cluster event, including event metadata for various resource types such as `Cluster`, `InstanceGroup`, `Instance`, and their associated attributes.
   *
   * @public
   */
  EventDetails?: ClusterEventDetail | undefined;
}

/**
 * @public
 */
export interface DescribeClusterNodeRequest {
  /**
   * The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster in which the node is.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The ID of the SageMaker HyperPod cluster node.
   *
   * @public
   */
  NodeId?: string | undefined;

  /**
   * The logical identifier of the node to describe. You can specify either `NodeLogicalId` or `InstanceId`, but not both. `NodeLogicalId` can be used to describe nodes that are still being provisioned and don't yet have an `InstanceId` assigned.
   *
   * @public
   */
  NodeLogicalId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterNodeResponse {
  /**
   * The details of the SageMaker HyperPod cluster node.
   *
   * @public
   */
  NodeDetails: ClusterNodeDetails | undefined;
}

/**
 * @public
 */
export interface DescribeClusterSchedulerConfigRequest {
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
}

/**
 * @public
 */
export interface DescribeClusterSchedulerConfigResponse {
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
   * Name of the cluster policy.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Version of the cluster policy.
   *
   * @public
   */
  ClusterSchedulerConfigVersion: number | undefined;

  /**
   * Status of the cluster policy.
   *
   * @public
   */
  Status: SchedulerResourceStatus | undefined;

  /**
   * Failure reason of the cluster policy.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Additional details about the status of the cluster policy. This field provides context when the policy is in a non-active state, such as during creation, updates, or if failures occur.
   *
   * @public
   */
  StatusDetails?: Partial<Record<SchedulerConfigComponent, SchedulerResourceStatus>> | undefined;

  /**
   * ARN of the cluster where the cluster policy is applied.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * Cluster policy configuration. This policy is used for task prioritization and fair-share allocation. This helps prioritize critical workloads and distributes idle compute across entities.
   *
   * @public
   */
  SchedulerConfig?: SchedulerConfig | undefined;

  /**
   * Description of the cluster policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Creation time of the cluster policy.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * Last modified time of the cluster policy.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
}

/**
 * @public
 */
export interface DescribeCodeRepositoryInput {
  /**
   * The name of the Git repository to describe.
   *
   * @public
   */
  CodeRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCodeRepositoryOutput {
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
   * The date and time that the repository was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the repository was last changed.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * Configuration details about the repository, including the URL where the repository is located, the default branch, and the Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the repository.
   *
   * @public
   */
  GitConfig?: GitConfig | undefined;
}

/**
 * @public
 */
export interface DescribeCompilationJobRequest {
  /**
   * The name of the model compilation job that you want information about.
   *
   * @public
   */
  CompilationJobName: string | undefined;
}

/**
 * Provides information about the location that is configured for storing model artifacts.
 *
 * Model artifacts are outputs that result from training a model. They typically consist of trained parameters, a model definition that describes how to compute inferences, and other metadata. A SageMaker container stores your trained model artifacts in the `/opt/ml/model` directory. After training has completed, by default, these artifacts are uploaded to your Amazon S3 bucket as compressed files.
 *
 * @public
 */
export interface ModelArtifacts {
  /**
   * The path of the S3 object that contains the model artifacts. For example, `s3://bucket-name/keynameprefix/model.tar.gz`.
   *
   * @public
   */
  S3ModelArtifacts: string | undefined;
}

/**
 * Provides information to verify the integrity of stored model artifacts.
 *
 * @public
 */
export interface ModelDigests {
  /**
   * Provides a hash value that uniquely identifies the stored model artifacts.
   *
   * @public
   */
  ArtifactDigest?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCompilationJobResponse {
  /**
   * The name of the model compilation job.
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
   * The status of the model compilation job.
   *
   * @public
   */
  CompilationJobStatus: CompilationJobStatus | undefined;

  /**
   * The time when the model compilation job started the `CompilationJob` instances.
   *
   * You are billed for the time between this timestamp and the timestamp in the `CompilationEndTime` field. In Amazon CloudWatch Logs, the start time might be later than this time. That's because it takes time to download the compilation job, which depends on the size of the compilation job container.
   *
   * @public
   */
  CompilationStartTime?: Date | undefined;

  /**
   * The time when the model compilation job on a compilation job instance ended. For a successful or stopped job, this is when the job's model artifacts have finished uploading. For a failed job, this is when Amazon SageMaker AI detected that the job failed.
   *
   * @public
   */
  CompilationEndTime?: Date | undefined;

  /**
   * Specifies a limit to how long a model compilation job can run. When the job reaches the time limit, Amazon SageMaker AI ends the compilation job. Use this API to cap model training costs.
   *
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * The inference image to use when compiling a model. Specify an image only if the target device is a cloud instance.
   *
   * @public
   */
  InferenceImage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the versioned model package that was provided to SageMaker Neo when you initiated a compilation job.
   *
   * @public
   */
  ModelPackageVersionArn?: string | undefined;

  /**
   * The time that the model compilation job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The time that the status of the model compilation job was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * If a model compilation job failed, the reason it failed.
   *
   * @public
   */
  FailureReason: string | undefined;

  /**
   * Information about the location in Amazon S3 that has been configured for storing the model artifacts used in the compilation job.
   *
   * @public
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * Provides a BLAKE2 hash value that identifies the compiled model artifacts in Amazon S3.
   *
   * @public
   */
  ModelDigests?: ModelDigests | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker AI assumes to perform the model compilation job.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Information about the location in Amazon S3 of the input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
   *
   * @public
   */
  InputConfig: InputConfig | undefined;

  /**
   * Information about the output location for the compiled model and the target device that the model runs on.
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
   * Information that SageMaker Neo automatically derived about the model.
   *
   * @public
   */
  DerivedInformation?: DerivedInformation | undefined;
}

/**
 * @public
 */
export interface DescribeComputeQuotaRequest {
  /**
   * ID of the compute allocation definition.
   *
   * @public
   */
  ComputeQuotaId: string | undefined;

  /**
   * Version of the compute allocation definition.
   *
   * @public
   */
  ComputeQuotaVersion?: number | undefined;
}

/**
 * @public
 */
export interface DescribeComputeQuotaResponse {
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
   * Description of the compute allocation definition.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Version of the compute allocation definition.
   *
   * @public
   */
  ComputeQuotaVersion: number | undefined;

  /**
   * Status of the compute allocation definition.
   *
   * @public
   */
  Status: SchedulerResourceStatus | undefined;

  /**
   * Failure reason of the compute allocation definition.
   *
   * @public
   */
  FailureReason?: string | undefined;

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
   * Creation time of the compute allocation configuration.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * Last modified time of the compute allocation configuration.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
}

/**
 * @public
 */
export interface DescribeContextRequest {
  /**
   * The name of the context to describe.
   *
   * @public
   */
  ContextName: string | undefined;
}

/**
 * @public
 */
export interface DescribeContextResponse {
  /**
   * The name of the context.
   *
   * @public
   */
  ContextName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the context.
   *
   * @public
   */
  ContextArn?: string | undefined;

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
   * The description of the context.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of the context's properties.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * When the context was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * When the context was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lineage group.
   *
   * @public
   */
  LineageGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataQualityJobDefinitionRequest {
  /**
   * The name of the data quality monitoring job definition to describe.
   *
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataQualityJobDefinitionResponse {
  /**
   * The Amazon Resource Name (ARN) of the data quality monitoring job definition.
   *
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * The name of the data quality monitoring job definition.
   *
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * The time that the data quality monitoring job definition was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The constraints and baselines for the data quality monitoring job definition.
   *
   * @public
   */
  DataQualityBaselineConfig?: DataQualityBaselineConfig | undefined;

  /**
   * Information about the container that runs the data quality monitoring job.
   *
   * @public
   */
  DataQualityAppSpecification: DataQualityAppSpecification | undefined;

  /**
   * The list of inputs for the data quality monitoring job. Currently endpoints are supported.
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
   * The networking configuration for the data quality monitoring job.
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
}

/**
 * @public
 */
export interface DescribeDeviceRequest {
  /**
   * Next token of device description.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The unique ID of the device.
   *
   * @public
   */
  DeviceName: string | undefined;

  /**
   * The name of the fleet the devices belong to.
   *
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * The model on the edge device.
 *
 * @public
 */
export interface EdgeModel {
  /**
   * The name of the model.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The model version.
   *
   * @public
   */
  ModelVersion: string | undefined;

  /**
   * The timestamp of the last data sample taken.
   *
   * @public
   */
  LatestSampleTime?: Date | undefined;

  /**
   * The timestamp of the last inference that was made.
   *
   * @public
   */
  LatestInference?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceResponse {
  /**
   * The Amazon Resource Name (ARN) of the device.
   *
   * @public
   */
  DeviceArn?: string | undefined;

  /**
   * The unique identifier of the device.
   *
   * @public
   */
  DeviceName: string | undefined;

  /**
   * A description of the device.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the fleet the device belongs to.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * The Amazon Web Services Internet of Things (IoT) object thing name associated with the device.
   *
   * @public
   */
  IotThingName?: string | undefined;

  /**
   * The timestamp of the last registration or de-reregistration.
   *
   * @public
   */
  RegistrationTime: Date | undefined;

  /**
   * The last heartbeat received from the device.
   *
   * @public
   */
  LatestHeartbeat?: Date | undefined;

  /**
   * Models on the device.
   *
   * @public
   */
  Models?: EdgeModel[] | undefined;

  /**
   * The maximum number of models.
   *
   * @public
   */
  MaxModels?: number | undefined;

  /**
   * The response from the last list when returning a list large enough to need tokening.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Edge Manager agent version.
   *
   * @public
   */
  AgentVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceFleetRequest {
  /**
   * The name of the fleet.
   *
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDeviceFleetResponse {
  /**
   * The name of the fleet.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * The The Amazon Resource Name (ARN) of the fleet.
   *
   * @public
   */
  DeviceFleetArn: string | undefined;

  /**
   * The output configuration for storing sampled data.
   *
   * @public
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * A description of the fleet.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Timestamp of when the device fleet was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Timestamp of when the device fleet was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT).
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) alias created in Amazon Web Services Internet of Things (IoT).
   *
   * @public
   */
  IotRoleAlias?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainRequest {
  /**
   * The domain ID.
   *
   * @public
   */
  DomainId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainResponse {
  /**
   * The domain's Amazon Resource Name (ARN).
   *
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * The domain ID.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The domain name.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The ID of the Amazon Elastic File System managed by this Domain.
   *
   * @public
   */
  HomeEfsFileSystemId?: string | undefined;

  /**
   * The IAM Identity Center managed application instance ID.
   *
   * @public
   */
  SingleSignOnManagedApplicationInstanceId?: string | undefined;

  /**
   * The ARN of the application managed by SageMaker AI in IAM Identity Center. This value is only returned for domains created after October 1, 2023.
   *
   * @public
   */
  SingleSignOnApplicationArn?: string | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: DomainStatus | undefined;

  /**
   * The creation time.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last modified time.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The failure reason.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The ID of the security group that authorizes traffic between the `RSessionGateway` apps and the `RStudioServerPro` app.
   *
   * @public
   */
  SecurityGroupIdForDomainBoundary?: string | undefined;

  /**
   * The domain's authentication mode.
   *
   * @public
   */
  AuthMode?: AuthMode | undefined;

  /**
   * Settings which are applied to UserProfiles in this domain if settings are not explicitly specified in a given UserProfile.
   *
   * @public
   */
  DefaultUserSettings?: UserSettings | undefined;

  /**
   * A collection of `Domain` settings.
   *
   * @public
   */
  DomainSettings?: DomainSettings | undefined;

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
   * The VPC subnets that the domain uses for communication.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The domain's URL.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The ID of the Amazon Virtual Private Cloud (VPC) that the domain uses for communication.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The Amazon Web Services KMS customer managed key used to encrypt the EFS volume attached to the domain.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The entity that creates and manages the required security groups for inter-app communication in `VPCOnly` mode. Required when `CreateDomain.AppNetworkAccessType` is `VPCOnly` and `DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn` is provided.
   *
   * @public
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement | undefined;

  /**
   * Indicates whether a home EFS file system is created for the domain.
   *
   * @public
   */
  HomeEfsFileSystemCreation?: HomeEfsFileSystemCreation | undefined;

  /**
   * Indicates whether custom tag propagation is supported for the domain.
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
export interface DescribeEdgeDeploymentPlanRequest {
  /**
   * The name of the deployment plan to describe.
   *
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * If the edge deployment plan has enough stages to require tokening, then this is the response from the last list of stages returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to select (50 by default).
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeEdgeDeploymentPlanResponse {
  /**
   * The ARN of edge deployment plan.
   *
   * @public
   */
  EdgeDeploymentPlanArn: string | undefined;

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
   * The number of edge devices with the successful deployment.
   *
   * @public
   */
  EdgeDeploymentSuccess?: number | undefined;

  /**
   * The number of edge devices yet to pick up deployment, or in progress.
   *
   * @public
   */
  EdgeDeploymentPending?: number | undefined;

  /**
   * The number of edge devices that failed the deployment.
   *
   * @public
   */
  EdgeDeploymentFailed?: number | undefined;

  /**
   * List of stages in the edge deployment plan.
   *
   * @public
   */
  Stages: DeploymentStageStatusSummary[] | undefined;

  /**
   * Token to use when calling the next set of stages in the edge deployment plan.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The time when the edge deployment plan was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time when the edge deployment plan was last updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEdgePackagingJobRequest {
  /**
   * The name of the edge packaging job.
   *
   * @public
   */
  EdgePackagingJobName: string | undefined;
}

/**
 * The output of a SageMaker Edge Manager deployable resource.
 *
 * @public
 */
export interface EdgePresetDeploymentOutput {
  /**
   * The deployment type created by SageMaker Edge Manager. Currently only supports Amazon Web Services IoT Greengrass Version 2 components.
   *
   * @public
   */
  Type: EdgePresetDeploymentType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the generated deployable resource.
   *
   * @public
   */
  Artifact?: string | undefined;

  /**
   * The status of the deployable resource.
   *
   * @public
   */
  Status?: EdgePresetDeploymentStatus | undefined;

  /**
   * Returns a message describing the status of the deployed resource.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEdgePackagingJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the edge packaging job.
   *
   * @public
   */
  EdgePackagingJobArn: string | undefined;

  /**
   * The name of the edge packaging job.
   *
   * @public
   */
  EdgePackagingJobName: string | undefined;

  /**
   * The name of the SageMaker Neo compilation job that is used to locate model artifacts that are being packaged.
   *
   * @public
   */
  CompilationJobName?: string | undefined;

  /**
   * The name of the model.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The version of the model.
   *
   * @public
   */
  ModelVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to download and upload the model, and to contact Neo.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The output configuration for the edge packaging job.
   *
   * @public
   */
  OutputConfig?: EdgeOutputConfig | undefined;

  /**
   * The Amazon Web Services KMS key to use when encrypting the EBS volume the job run on.
   *
   * @public
   */
  ResourceKey?: string | undefined;

  /**
   * The current status of the packaging job.
   *
   * @public
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | undefined;

  /**
   * Returns a message describing the job status and error messages.
   *
   * @public
   */
  EdgePackagingJobStatusMessage?: string | undefined;

  /**
   * The timestamp of when the packaging job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The timestamp of when the job was last updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The Amazon Simple Storage (S3) URI where model artifacts ares stored.
   *
   * @public
   */
  ModelArtifact?: string | undefined;

  /**
   * The signature document of files in the model artifact.
   *
   * @public
   */
  ModelSignature?: string | undefined;

  /**
   * The output of a SageMaker Edge Manager deployable resource.
   *
   * @public
   */
  PresetDeploymentOutput?: EdgePresetDeploymentOutput | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointInput {
  /**
   * The name of the endpoint.
   *
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * A summary of an instance pool for a production variant, including the instance type and the current number of instances.
 *
 * @public
 */
export interface InstancePoolSummary {
  /**
   * The ML compute instance type for the instance pool.
   *
   * @public
   */
  InstanceType: ProductionVariantInstanceType | undefined;

  /**
   * The current number of instances of this type in the instance pool.
   *
   * @public
   */
  CurrentInstanceCount: number | undefined;
}

/**
 * Describes the status of the production variant.
 *
 * @public
 */
export interface ProductionVariantStatus {
  /**
   * The endpoint variant status which describes the current deployment stage status or operational status.
   *
   * - `Creating`: Creating inference resources for the production variant.
   * - `Deleting`: Terminating inference resources for the production variant.
   * - `Updating`: Updating capacity for the production variant.
   * - `ActivatingTraffic`: Turning on traffic for the production variant.
   * - `Baking`: Waiting period to monitor the CloudWatch alarms in the automatic rollback configuration.
   *
   * @public
   */
  Status: VariantStatus | undefined;

  /**
   * A message that describes the status of the production variant.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The start time of the current status change.
   *
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * The production variant summary for a deployment when an endpoint is creating or updating with the [CreateEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html) or [UpdateEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html) operations. Describes the `VariantStatus`, weight and capacity for a production variant associated with an endpoint.
 *
 * @public
 */
export interface PendingProductionVariantSummary {
  /**
   * The name of the variant.
   *
   * @public
   */
  VariantName: string | undefined;

  /**
   * An array of `DeployedImage` objects that specify the Amazon EC2 Container Registry paths of the inference images deployed on instances of this `ProductionVariant`.
   *
   * @public
   */
  DeployedImages?: DeployedImage[] | undefined;

  /**
   * The weight associated with the variant.
   *
   * @public
   */
  CurrentWeight?: number | undefined;

  /**
   * The requested weight for the variant in this deployment, as specified in the endpoint configuration for the endpoint. The value is taken from the request to the [CreateEndpointConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html) operation.
   *
   * @public
   */
  DesiredWeight?: number | undefined;

  /**
   * The number of instances associated with the variant.
   *
   * @public
   */
  CurrentInstanceCount?: number | undefined;

  /**
   * The number of instances requested in this deployment, as specified in the endpoint configuration for the endpoint. The value is taken from the request to the [CreateEndpointConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html) operation.
   *
   * @public
   */
  DesiredInstanceCount?: number | undefined;

  /**
   * The type of instances associated with the variant.
   *
   * @public
   */
  InstanceType?: ProductionVariantInstanceType | undefined;

  /**
   * A list of instance pools for the production variant. Each pool indicates the instance type and the current number of instances of that type.
   *
   * @public
   */
  InstancePools?: InstancePoolSummary[] | undefined;

  /**
   * This parameter is no longer supported. Elastic Inference (EI) is no longer available.
   *
   * This parameter was used to specify the size of the EI instance to use for the production variant.
   *
   * @public
   */
  AcceleratorType?: ProductionVariantAcceleratorType | undefined;

  /**
   * The endpoint variant status which describes the current deployment stage status or operational status.
   *
   * @public
   */
  VariantStatus?: ProductionVariantStatus[] | undefined;

  /**
   * The serverless configuration for the endpoint.
   *
   * @public
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig | undefined;

  /**
   * The serverless configuration requested for this deployment, as specified in the endpoint configuration for the endpoint.
   *
   * @public
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig | undefined;

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
   * The accelerator partition layout that SageMaker is applying to this production variant. On NVIDIA GPUs, the profiles are Multi-Instance GPU (MIG) profiles. SageMaker returns the accelerator partition layout as you provided it in the pending deployment configuration, without normalization.
   *
   * @public
   */
  AcceleratorPartitionLayouts?: AcceleratorPartitionLayout[] | undefined;
}

/**
 * The summary of an in-progress deployment when an endpoint is creating or updating with a new endpoint configuration.
 *
 * @public
 */
export interface PendingDeploymentSummary {
  /**
   * The name of the endpoint configuration used in the deployment.
   *
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * An array of [PendingProductionVariantSummary](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_PendingProductionVariantSummary.html) objects, one for each model hosted behind this endpoint for the in-progress deployment.
   *
   * @public
   */
  ProductionVariants?: PendingProductionVariantSummary[] | undefined;

  /**
   * The start time of the deployment.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * An array of [PendingProductionVariantSummary](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_PendingProductionVariantSummary.html) objects, one for each model hosted behind this endpoint in shadow mode with production traffic replicated from the model specified on `ProductionVariants` for the in-progress deployment.
   *
   * @public
   */
  ShadowProductionVariants?: PendingProductionVariantSummary[] | undefined;
}

/**
 * The EC2 capacity reservations that are shared to an ML capacity reservation.
 *
 * @public
 */
export interface Ec2CapacityReservation {
  /**
   * The unique identifier for an EC2 capacity reservation that's part of the ML capacity reservation.
   *
   * @public
   */
  Ec2CapacityReservationId?: string | undefined;

  /**
   * The number of instances that you allocated to the EC2 capacity reservation.
   *
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * The number of instances that are currently available in the EC2 capacity reservation.
   *
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * The number of instances from the EC2 capacity reservation that are being used by the endpoint.
   *
   * @public
   */
  UsedByCurrentEndpoint?: number | undefined;
}

/**
 * Details about an ML capacity reservation.
 *
 * @public
 */
export interface ProductionVariantCapacityReservationSummary {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the ML capacity reservation that SageMaker AI applies when it deploys the endpoint.
   *
   * @public
   */
  MlReservationArn?: string | undefined;

  /**
   * The option that you chose for the capacity reservation. SageMaker AI supports the following options:
   *
   * - **capacity-reservations-only**
   *
   *   SageMaker AI launches instances only into an ML capacity reservation. If no capacity is available, the instances fail to launch.
   *
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * The number of instances that you allocated to the ML capacity reservation.
   *
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * The number of instances that are currently available in the ML capacity reservation.
   *
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * The number of instances from the ML capacity reservation that are being used by the endpoint.
   *
   * @public
   */
  UsedByCurrentEndpoint?: number | undefined;

  /**
   * The EC2 capacity reservations that are shared to this ML capacity reservation, if any.
   *
   * @public
   */
  Ec2CapacityReservations?: Ec2CapacityReservation[] | undefined;
}

/**
 * Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the `UpdateEndpointWeightsAndCapacities` API and the endpoint status is `Updating`, you get different desired and current values.
 *
 * @public
 */
export interface ProductionVariantSummary {
  /**
   * The name of the variant.
   *
   * @public
   */
  VariantName: string | undefined;

  /**
   * An array of `DeployedImage` objects that specify the Amazon EC2 Container Registry paths of the inference images deployed on instances of this `ProductionVariant`.
   *
   * @public
   */
  DeployedImages?: DeployedImage[] | undefined;

  /**
   * The weight associated with the variant.
   *
   * @public
   */
  CurrentWeight?: number | undefined;

  /**
   * The requested weight, as specified in the `UpdateEndpointWeightsAndCapacities` request.
   *
   * @public
   */
  DesiredWeight?: number | undefined;

  /**
   * The number of instances associated with the variant.
   *
   * @public
   */
  CurrentInstanceCount?: number | undefined;

  /**
   * The number of instances requested in the `UpdateEndpointWeightsAndCapacities` request.
   *
   * @public
   */
  DesiredInstanceCount?: number | undefined;

  /**
   * A list of instance pools for the production variant. Each pool indicates the instance type and the current number of instances of that type.
   *
   * @public
   */
  InstancePools?: InstancePoolSummary[] | undefined;

  /**
   * The endpoint variant status which describes the current deployment stage status or operational status.
   *
   * @public
   */
  VariantStatus?: ProductionVariantStatus[] | undefined;

  /**
   * The serverless configuration for the endpoint.
   *
   * @public
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig | undefined;

  /**
   * The serverless configuration requested for the endpoint update.
   *
   * @public
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig | undefined;

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
   * Settings for the capacity reservation for the compute instances that SageMaker AI reserves for an endpoint.
   *
   * @public
   */
  CapacityReservationConfig?: ProductionVariantCapacityReservationSummary | undefined;

  /**
   * The accelerator partition layout that SageMaker applies to this production variant. On NVIDIA GPUs, the profiles are Multi-Instance GPU (MIG) profiles. SageMaker returns the accelerator partition layout as you provided it when you created the variant, without normalization.
   *
   * @public
   */
  AcceleratorPartitionLayouts?: AcceleratorPartitionLayout[] | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointOutput {
  /**
   * Name of the endpoint.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * The name of the endpoint configuration associated with this endpoint.
   *
   * @public
   */
  EndpointConfigName?: string | undefined;

  /**
   * An array of [ProductionVariantSummary](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariantSummary.html) objects, one for each model hosted behind this endpoint.
   *
   * @public
   */
  ProductionVariants?: ProductionVariantSummary[] | undefined;

  /**
   * The currently active data capture configuration used by your Endpoint.
   *
   * @public
   */
  DataCaptureConfig?: DataCaptureConfigSummary | undefined;

  /**
   * The status of the endpoint.
   *
   * - `OutOfService`: Endpoint is not available to take incoming requests.
   * - `Creating`: [CreateEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html) is executing.
   * - `Updating`: [UpdateEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html) or [UpdateEndpointWeightsAndCapacities](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html) is executing.
   * - `SystemUpdating`: Endpoint is undergoing maintenance and cannot be updated or deleted or re-scaled until it has completed. This maintenance operation does not change any customer-specified values such as VPC config, KMS encryption, model, instance type, or instance count.
   * - `RollingBack`: Endpoint fails to scale up or down or change its variant weight and is in the process of rolling back to its previous configuration. Once the rollback completes, endpoint returns to an `InService` status. This transitional status only applies to an endpoint that has autoscaling enabled and is undergoing variant weight or capacity changes as part of an [UpdateEndpointWeightsAndCapacities](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html) call or when the [UpdateEndpointWeightsAndCapacities](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html) operation is called explicitly.
   * - `InService`: Endpoint is available to process incoming requests.
   * - `Deleting`: [DeleteEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html) is executing.
   * - `Failed`: Endpoint could not be created, updated, or re-scaled. Use the `FailureReason` value returned by [DescribeEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html) for information about the failure. [DeleteEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html) is the only operation that can be performed on a failed endpoint.
   * - `UpdateRollbackFailed`: Both the rolling deployment and auto-rollback failed. Your endpoint is in service with a mix of the old and new endpoint configurations. For information about how to remedy this issue and restore the endpoint's status to `InService`, see [Rolling Deployments](https://docs.aws.amazon.com/sagemaker/latest/dg/deployment-guardrails-rolling.html).
   *
   * @public
   */
  EndpointStatus: EndpointStatus | undefined;

  /**
   * If the status of the endpoint is `Failed`, the reason why it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * A timestamp that shows when the endpoint was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp that shows when the endpoint was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The most recent deployment configuration for the endpoint.
   *
   * @public
   */
  LastDeploymentConfig?: DeploymentConfig | undefined;

  /**
   * Returns the description of an endpoint configuration created using the [`CreateEndpointConfig`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html) API.
   *
   * @public
   */
  AsyncInferenceConfig?: AsyncInferenceConfig | undefined;

  /**
   * Returns the summary of an in-progress deployment. This field is only returned when the endpoint is creating or updating with a new endpoint configuration.
   *
   * @public
   */
  PendingDeploymentSummary?: PendingDeploymentSummary | undefined;

  /**
   * The configuration parameters for an explainer.
   *
   * @public
   */
  ExplainerConfig?: ExplainerConfig | undefined;

  /**
   * An array of [ProductionVariantSummary](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariantSummary.html) objects, one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on `ProductionVariants`.
   *
   * @public
   */
  ShadowProductionVariants?: ProductionVariantSummary[] | undefined;

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
export interface DescribeEndpointConfigInput {
  /**
   * The name of the endpoint configuration.
   *
   * @public
   */
  EndpointConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointConfigOutput {
  /**
   * Name of the SageMaker endpoint configuration.
   *
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint configuration.
   *
   * @public
   */
  EndpointConfigArn: string | undefined;

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
   * Amazon Web Services KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage volume attached to the instance.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * A timestamp that shows when the endpoint configuration was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Returns the description of an endpoint configuration created using the [`CreateEndpointConfig`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html) API.
   *
   * @public
   */
  AsyncInferenceConfig?: AsyncInferenceConfig | undefined;

  /**
   * The configuration parameters for an explainer.
   *
   * @public
   */
  ExplainerConfig?: ExplainerConfig | undefined;

  /**
   * An array of `ProductionVariant` objects, one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on `ProductionVariants`.
   *
   * @public
   */
  ShadowProductionVariants?: ProductionVariant[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that you assigned to the endpoint configuration.
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
   * Indicates whether all model containers deployed to the endpoint are isolated. If they are, no inbound or outbound network calls can be made to or from the model containers.
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
export interface DescribeExperimentRequest {
  /**
   * The name of the experiment to describe.
   *
   * @public
   */
  ExperimentName: string | undefined;
}

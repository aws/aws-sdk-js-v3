// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  ActionSource,
  ActionStatus,
  ActionSummary,
  AdditionalInferenceSpecificationDefinition,
  AgentVersion,
  AlgorithmSortBy,
  AlgorithmSpecification,
  AlgorithmStatus,
  AlgorithmStatusDetails,
  AlgorithmSummary,
  AlgorithmValidationSpecification,
  AppDetails,
  AppImageConfigDetails,
  AppImageConfigSortKey,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppSortKey,
  AppSpecification,
  AppStatus,
  AppType,
  ArtifactSource,
  AssociationEdgeType,
  AsyncInferenceConfig,
  AuthMode,
  AutoMLCandidate,
  AutoMLChannel,
  AutoMLJobArtifacts,
  AutoMLJobCompletionCriteria,
  AutoMLJobConfig,
  AutoMLJobObjective,
  AutoMLJobSecondaryStatus,
  AutoMLJobStatus,
  AutoMLOutputDataConfig,
  AutoMLPartialFailureReason,
  BatchDataCaptureConfig,
  BatchStrategy,
  Channel,
  CheckpointConfig,
  CognitoConfig,
  CompilationJobStatus,
  ContainerDefinition,
  ContextSource,
  DataCaptureConfig,
  DataQualityAppSpecification,
  DataQualityBaselineConfig,
  DataQualityJobInput,
  DefaultSpaceSettings,
  DeploymentConfig,
  DomainSettings,
  EdgeDeploymentModelConfig,
  EdgeOutputConfig,
  EdgePresetDeploymentType,
  ExecutionRoleIdentityConfig,
  ExplainerConfig,
  FeatureType,
  GitConfig,
  HyperParameterTuningJobObjectiveType,
  InferenceSpecification,
  InputConfig,
  KernelGatewayImageConfig,
  MetadataProperties,
  ModelApprovalStatus,
  ModelDeployConfig,
  ModelPackageStatus,
  MonitoringNetworkConfig,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringStoppingCondition,
  NeoVpcConfig,
  ObjectiveStatus,
  OutputConfig,
  OutputDataConfig,
  OutputParameter,
  ProblemType,
  ProductionVariant,
  ProductionVariantAcceleratorType,
  ProductionVariantInstanceType,
  ProductionVariantServerlessConfig,
  ResourceConfig,
  ResourceSpec,
  StoppingCondition,
  Tag,
  TrainingSpecification,
  TransformInput,
  TransformOutput,
  TransformResources,
  UserContext,
  UserSettings,
  VpcConfig,
} from "./models_0";
import {
  _InstanceType,
  DataCaptureConfigSummary,
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DeployedImage,
  DeploymentStageStatusSummary,
  DirectInternetAccess,
  DriftCheckBaselines,
  EndpointInfo,
  ExperimentConfig,
  FeatureDefinition,
  FlowDefinitionOutputConfig,
  HubContentType,
  HubS3StorageConfig,
  HumanLoopActivationConfig,
  HumanLoopConfig,
  HumanLoopRequestSource,
  HumanTaskConfig,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobStrategyType,
  HyperParameterTuningJobWarmStartConfig,
  InferenceExecutionConfig,
  InferenceExperimentDataStorageConfig,
  InferenceExperimentSchedule,
  InferenceExperimentType,
  InstanceMetadataServiceConfiguration,
  JobType,
  LabelingJobAlgorithmsConfig,
  LabelingJobInputConfig,
  LabelingJobOutputConfig,
  LabelingJobStoppingConditions,
  MemberDefinition,
  ModelBiasAppSpecification,
  ModelBiasBaselineConfig,
  ModelBiasJobInput,
  ModelCardExportOutputConfig,
  ModelCardSecurityConfig,
  ModelCardStatus,
  ModelClientConfig,
  ModelExplainabilityAppSpecification,
  ModelExplainabilityBaselineConfig,
  ModelExplainabilityJobInput,
  ModelInfrastructureConfig,
  ModelMetrics,
  ModelPackageValidationSpecification,
  ModelQualityAppSpecification,
  ModelQualityBaselineConfig,
  ModelQualityJobInput,
  MonitoringScheduleConfig,
  MonitoringType,
  NetworkConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  NotificationConfiguration,
  OfflineStoreConfig,
  OnlineStoreConfig,
  ParallelismConfiguration,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  Processor,
  ProfilerConfig,
  ProfilerRuleConfiguration,
  RecommendationJobInputConfig,
  RecommendationJobStoppingConditions,
  RecommendationJobType,
  ResourceLimits,
  RetryStrategy,
  RootAccess,
  RuleEvaluationStatus,
  ServiceCatalogProvisioningDetails,
  ShadowModeConfig,
  SourceAlgorithmSpecification,
  SourceIpConfig,
  SpaceSettings,
  StudioLifecycleConfigAppType,
  TensorBoardOutputConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentParameterValueFilterSensitiveLog,
  TrialComponentStatus,
  VendorGuidance,
} from "./models_1";

export interface DeregisterDevicesRequest {
  /**
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The unique IDs of the devices.</p>
   */
  DeviceNames: string[] | undefined;
}

export interface DescribeActionRequest {
  /**
   * <p>The name of the action to describe.</p>
   */
  ActionName: string | undefined;
}

export interface DescribeActionResponse {
  /**
   * <p>The name of the action.</p>
   */
  ActionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the action.</p>
   */
  ActionArn?: string;

  /**
   * <p>The source of the action.</p>
   */
  Source?: ActionSource;

  /**
   * <p>The type of the action.</p>
   */
  ActionType?: string;

  /**
   * <p>The description of the action.</p>
   */
  Description?: string;

  /**
   * <p>The status of the action.</p>
   */
  Status?: ActionStatus | string;

  /**
   * <p>A list of the action's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the action was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the action was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

export interface DescribeAlgorithmInput {
  /**
   * <p>The name of the algorithm to describe.</p>
   */
  AlgorithmName: string | undefined;
}

export interface DescribeAlgorithmOutput {
  /**
   * <p>The name of the algorithm being described.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>A brief summary about the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>A timestamp specifying when the algorithm was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about training jobs run by this algorithm.</p>
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * <p>Details about inference jobs that the algorithm runs.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Details about configurations for one or more training jobs that SageMaker runs to test the
   *             algorithm.</p>
   */
  ValidationSpecification?: AlgorithmValidationSpecification;

  /**
   * <p>The current status of the algorithm.</p>
   */
  AlgorithmStatus: AlgorithmStatus | string | undefined;

  /**
   * <p>Details about the current status of the algorithm.</p>
   */
  AlgorithmStatusDetails: AlgorithmStatusDetails | undefined;

  /**
   * <p>The product identifier of the algorithm.</p>
   */
  ProductId?: string;

  /**
   * <p>Whether the algorithm is certified to be listed in Amazon Web Services
   *             Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;
}

export interface DescribeAppRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name. If this value is not set, then <code>SpaceName</code> must be set.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;

  /**
   * <p>The name of the space.</p>
   */
  SpaceName?: string;
}

export interface DescribeAppResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the app.</p>
   */
  AppArn?: string;

  /**
   * <p>The type of app.</p>
   */
  AppType?: AppType | string;

  /**
   * <p>The name of the app.</p>
   */
  AppName?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: AppStatus | string;

  /**
   * <p>The timestamp of the last health check.</p>
   */
  LastHealthCheckTimestamp?: Date;

  /**
   * <p>The timestamp of the last user's activity. <code>LastUserActivityTimestamp</code> is also updated when SageMaker performs health checks without user activity. As a result, this value is set to the same value as <code>LastHealthCheckTimestamp</code>.</p>
   */
  LastUserActivityTimestamp?: Date;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.</p>
   */
  ResourceSpec?: ResourceSpec;

  /**
   * <p>The name of the space. If this value is not set, then <code>UserProfileName</code> must be set.</p>
   */
  SpaceName?: string;
}

export interface DescribeAppImageConfigRequest {
  /**
   * <p>The name of the AppImageConfig to describe.</p>
   */
  AppImageConfigName: string | undefined;
}

export interface DescribeAppImageConfigResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the AppImageConfig.</p>
   */
  AppImageConfigArn?: string;

  /**
   * <p>The name of the AppImageConfig.</p>
   */
  AppImageConfigName?: string;

  /**
   * <p>When the AppImageConfig was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the AppImageConfig was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The configuration of a KernelGateway app.</p>
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig;
}

export interface DescribeArtifactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the artifact to describe.</p>
   */
  ArtifactArn: string | undefined;
}

export interface DescribeArtifactResponse {
  /**
   * <p>The name of the artifact.</p>
   */
  ArtifactName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the artifact.</p>
   */
  ArtifactArn?: string;

  /**
   * <p>The source of the artifact.</p>
   */
  Source?: ArtifactSource;

  /**
   * <p>The type of the artifact.</p>
   */
  ArtifactType?: string;

  /**
   * <p>A list of the artifact's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the artifact was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the artifact was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

export interface DescribeAutoMLJobRequest {
  /**
   * <p>Requests information about an AutoML job using its unique name.</p>
   */
  AutoMLJobName: string | undefined;
}

/**
 * <p>Provides information about the endpoint of the model deployment.</p>
 */
export interface ModelDeployResult {
  /**
   * <p>The name of the endpoint to which the model has been deployed.</p>
   *          <note>
   *             <p>If model deployment fails, this field is omitted from the response.</p>
   *          </note>
   */
  EndpointName?: string;
}

/**
 * <p>The resolved attributes.</p>
 */
export interface ResolvedAttributes {
  /**
   * <p>Specifies a metric to minimize or maximize as the objective of a job.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>The problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to
   *          generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;
}

export interface DescribeAutoMLJobResponse {
  /**
   * <p>Returns the name of the AutoML job.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Returns the ARN of the AutoML job.</p>
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>Returns the input data configuration for the AutoML job..</p>
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>Returns the job's output data config.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that
   *          has read permission to the input data location and write permission to the output data
   *          location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Returns the job's objective.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>Returns the job's problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>Returns the configuration for the AutoML job.</p>
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * <p>Returns the creation time of the AutoML job.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the end time of the AutoML job.</p>
   */
  EndTime?: Date;

  /**
   * <p>Returns the job's last modified time.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Returns the failure reason for an AutoML job, when applicable.</p>
   */
  FailureReason?: string;

  /**
   * <p>Returns a list of reasons for partial failures within an AutoML job.</p>
   */
  PartialFailureReasons?: AutoMLPartialFailureReason[];

  /**
   * <p>The best model candidate selected by SageMaker Autopilot using both the best objective metric and
   *          lowest <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-metrics-validation.html">InferenceLatency</a> for
   *          an experiment.</p>
   */
  BestCandidate?: AutoMLCandidate;

  /**
   * <p>Returns the status of the AutoML job.</p>
   */
  AutoMLJobStatus: AutoMLJobStatus | string | undefined;

  /**
   * <p>Returns the secondary status of the AutoML job.</p>
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | string | undefined;

  /**
   * <p>Indicates whether the output for an AutoML job generates candidate definitions
   *          only.</p>
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>Returns information on the job's artifacts found in
   *          <code>AutoMLJobArtifacts</code>.</p>
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts;

  /**
   * <p>This contains <code>ProblemType</code>, <code>AutoMLJobObjective</code>, and
   *             <code>CompletionCriteria</code>. If you do not provide these values, they are
   *          auto-inferred. If you do provide them, the values used are the ones you provide.</p>
   */
  ResolvedAttributes?: ResolvedAttributes;

  /**
   * <p>Indicates whether the model was deployed automatically to an endpoint and the name of
   *          that endpoint if deployed automatically.</p>
   */
  ModelDeployConfig?: ModelDeployConfig;

  /**
   * <p>Provides information about endpoint for the model deployment.</p>
   */
  ModelDeployResult?: ModelDeployResult;
}

export interface DescribeCodeRepositoryInput {
  /**
   * <p>The name of the Git repository to describe.</p>
   */
  CodeRepositoryName: string | undefined;
}

export interface DescribeCodeRepositoryOutput {
  /**
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;

  /**
   * <p>The date and time that the repository was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the repository was last changed.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Configuration details about the repository, including the URL where the repository is
   *             located, the default branch, and the Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the
   *             repository.</p>
   */
  GitConfig?: GitConfig;
}

export interface DescribeCompilationJobRequest {
  /**
   * <p>The name of the model compilation job that you want information about.</p>
   */
  CompilationJobName: string | undefined;
}

/**
 * <p>Provides information about the location that is configured for storing model
 *             artifacts. </p>
 *          <p>Model artifacts are the output that results from training a model, and typically
 *             consist of trained parameters, a model definition that describes how to compute
 *             inferences, and other metadata.</p>
 */
export interface ModelArtifacts {
  /**
   * <p>The path of the S3 object that contains the model artifacts. For example,
   *                 <code>s3://bucket-name/keynameprefix/model.tar.gz</code>.</p>
   */
  S3ModelArtifacts: string | undefined;
}

/**
 * <p>Provides information to verify the integrity of stored model artifacts. </p>
 */
export interface ModelDigests {
  /**
   * <p>Provides a hash value that uniquely identifies the stored model
   *             artifacts.</p>
   */
  ArtifactDigest?: string;
}

export interface DescribeCompilationJobResponse {
  /**
   * <p>The name of the model compilation job.</p>
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus: CompilationJobStatus | string | undefined;

  /**
   * <p>The time when the model compilation job started the <code>CompilationJob</code>
   *             instances. </p>
   *          <p>You are billed for the time between this timestamp and the timestamp in the <a>DescribeCompilationJobResponse$CompilationEndTime</a> field. In Amazon CloudWatch Logs,
   *             the start time might be later than this time. That's because it takes time to download
   *             the compilation job, which depends on the size of the compilation job container. </p>
   */
  CompilationStartTime?: Date;

  /**
   * <p>The time when the model compilation job on a compilation job instance ended. For a
   *             successful or stopped job, this is when the job's model artifacts have finished
   *             uploading. For a failed job, this is when Amazon SageMaker detected that the job failed. </p>
   */
  CompilationEndTime?: Date;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches
   *             the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training
   *             costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>The inference image to use when compiling a model.
   *             Specify an image only if the target device is a cloud instance.</p>
   */
  InferenceImage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the versioned model package that was
   *     provided to SageMaker Neo when you initiated a compilation job.</p>
   */
  ModelPackageVersionArn?: string;

  /**
   * <p>The time that the model compilation job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time that the status
   *             of
   *             the model compilation job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If a model compilation job failed, the reason it failed. </p>
   */
  FailureReason: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 that has been configured for storing the model
   *             artifacts used in the compilation job.</p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>Provides a BLAKE2 hash value that identifies the compiled model artifacts in Amazon S3.</p>
   */
  ModelDigests?: ModelDigests;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker assumes to perform the model
   *             compilation job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 of the input model artifacts, the name and
   *             shape of the expected data inputs, and the framework in which the model was
   *             trained.</p>
   */
  InputConfig: InputConfig | undefined;

  /**
   * <p>Information about the output location for the compiled model and the target device
   *             that the model runs on.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that you want your
   *             compilation job to connect to. Control access to your models by
   *             configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html">Protect Compilation Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: NeoVpcConfig;
}

export interface DescribeContextRequest {
  /**
   * <p>The name of the context to describe.</p>
   */
  ContextName: string | undefined;
}

export interface DescribeContextResponse {
  /**
   * <p>The name of the context.</p>
   */
  ContextName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the context.</p>
   */
  ContextArn?: string;

  /**
   * <p>The source of the context.</p>
   */
  Source?: ContextSource;

  /**
   * <p>The type of the context.</p>
   */
  ContextType?: string;

  /**
   * <p>The description of the context.</p>
   */
  Description?: string;

  /**
   * <p>A list of the context's properties.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>When the context was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the context was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;
}

export interface DescribeDataQualityJobDefinitionRequest {
  /**
   * <p>The name of the data quality monitoring job definition to describe.</p>
   */
  JobDefinitionName: string | undefined;
}

export interface DescribeDataQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the data quality monitoring job definition.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the data quality monitoring job definition.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time that the data quality monitoring job definition was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The constraints and baselines for the data quality monitoring job definition.</p>
   */
  DataQualityBaselineConfig?: DataQualityBaselineConfig;

  /**
   * <p>Information about the container that runs the data quality monitoring job.</p>
   */
  DataQualityAppSpecification: DataQualityAppSpecification | undefined;

  /**
   * <p>The list of inputs for the data quality monitoring job. Currently endpoints are
   *          supported.</p>
   */
  DataQualityJobInput: DataQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  DataQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>The networking configuration for the data quality monitoring job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

export interface DescribeDeviceRequest {
  /**
   * <p>Next token of device description.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique ID of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>The name of the fleet the devices belong to.</p>
   */
  DeviceFleetName: string | undefined;
}

/**
 * <p>The model on the edge device.</p>
 */
export interface EdgeModel {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The model version.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>The timestamp of the last data sample taken.</p>
   */
  LatestSampleTime?: Date;

  /**
   * <p>The timestamp of the last inference that was made.</p>
   */
  LatestInference?: Date;
}

export interface DescribeDeviceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn?: string;

  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>A description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The name of the fleet the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device.</p>
   */
  IotThingName?: string;

  /**
   * <p>The timestamp of the last registration or de-reregistration.</p>
   */
  RegistrationTime: Date | undefined;

  /**
   * <p>The last heartbeat received from the device.</p>
   */
  LatestHeartbeat?: Date;

  /**
   * <p>Models on the device.</p>
   */
  Models?: EdgeModel[];

  /**
   * <p>The maximum number of models.</p>
   */
  MaxModels?: number;

  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   */
  NextToken?: string;

  /**
   * <p>Edge Manager agent version.</p>
   */
  AgentVersion?: string;
}

export interface DescribeDeviceFleetRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;
}

export interface DescribeDeviceFleetResponse {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The The Amazon Resource Name (ARN) of the fleet.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>The output configuration for storing sampled data.</p>
   */
  OutputConfig: EdgeOutputConfig | undefined;

  /**
   * <p>A description of the fleet.</p>
   */
  Description?: string;

  /**
   * <p>Timestamp of when the device fleet was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Timestamp of when the device fleet was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT).</p>
   */
  RoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) alias created in Amazon Web Services Internet of Things (IoT).</p>
   */
  IotRoleAlias?: string;
}

export interface DescribeDomainRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
}

export enum DomainStatus {
  Delete_Failed = "Delete_Failed",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Update_Failed = "Update_Failed",
  Updating = "Updating",
}

export interface DescribeDomainResponse {
  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The ID of the Amazon Elastic File System (EFS) managed by this Domain.</p>
   */
  HomeEfsFileSystemId?: string;

  /**
   * <p>The IAM Identity Center managed application instance ID.</p>
   */
  SingleSignOnManagedApplicationInstanceId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: DomainStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The domain's authentication mode.</p>
   */
  AuthMode?: AuthMode | string;

  /**
   * <p>Settings which are applied to UserProfiles in this domain if settings are not explicitly specified
   *            in a given UserProfile.
   *        </p>
   */
  DefaultUserSettings?: UserSettings;

  /**
   * <p>Specifies the VPC used for non-EFS traffic. The default value is
   *         <code>PublicInternetOnly</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PublicInternetOnly</code> - Non-EFS traffic is through a VPC managed by
   *             Amazon SageMaker, which allows direct internet access</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets</p>
   *             </li>
   *          </ul>
   */
  AppNetworkAccessType?: AppNetworkAccessType | string;

  /**
   * @deprecated
   *
   * <p>Use <code>KmsKeyId</code>.</p>
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * <p>The VPC subnets that Studio uses for communication.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The domain's URL.</p>
   */
  Url?: string;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.</p>
   */
  VpcId?: string;

  /**
   * <p>The Amazon Web Services KMS customer managed key used to encrypt
   *          the EFS volume attached to the domain.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A collection of <code>Domain</code> settings.</p>
   */
  DomainSettings?: DomainSettings;

  /**
   * <p>The entity that creates and manages the required security groups for inter-app
   *             communication in <code>VPCOnly</code> mode. Required when
   *                 <code>CreateDomain.AppNetworkAccessType</code> is <code>VPCOnly</code> and
   *                 <code>DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn</code> is
   *             provided.</p>
   */
  AppSecurityGroupManagement?: AppSecurityGroupManagement | string;

  /**
   * <p>The ID of the security group that authorizes traffic between the
   *                 <code>RSessionGateway</code> apps and the <code>RStudioServerPro</code> app.</p>
   */
  SecurityGroupIdForDomainBoundary?: string;

  /**
   * <p>The default settings used to create a space.</p>
   */
  DefaultSpaceSettings?: DefaultSpaceSettings;
}

export interface DescribeEdgeDeploymentPlanRequest {
  /**
   * <p>The name of the deployment plan to describe.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>If the edge deployment plan has enough stages to require tokening, then this is the response from the last list of stages returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to select (50 by default).</p>
   */
  MaxResults?: number;
}

export interface DescribeEdgeDeploymentPlanResponse {
  /**
   * <p>The ARN of edge deployment plan.</p>
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>List of models associated with the edge deployment plan.</p>
   */
  ModelConfigs: EdgeDeploymentModelConfig[] | undefined;

  /**
   * <p>The device fleet used for this edge deployment plan.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The number of edge devices with the successful deployment.</p>
   */
  EdgeDeploymentSuccess?: number;

  /**
   * <p>The number of edge devices yet to pick up deployment, or in progress.</p>
   */
  EdgeDeploymentPending?: number;

  /**
   * <p>The number of edge devices that failed the deployment.</p>
   */
  EdgeDeploymentFailed?: number;

  /**
   * <p>List of stages in the edge deployment plan.</p>
   */
  Stages: DeploymentStageStatusSummary[] | undefined;

  /**
   * <p>Token to use when calling the next set of stages in the edge deployment plan.</p>
   */
  NextToken?: string;

  /**
   * <p>The time when the edge deployment plan was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the edge deployment plan was last updated.</p>
   */
  LastModifiedTime?: Date;
}

export interface DescribeEdgePackagingJobRequest {
  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;
}

export enum EdgePackagingJobStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "INPROGRESS",
  Starting = "STARTING",
  Stopped = "STOPPED",
  Stopping = "STOPPING",
}

export enum EdgePresetDeploymentStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
}

/**
 * <p>The output of a SageMaker Edge Manager deployable resource.</p>
 */
export interface EdgePresetDeploymentOutput {
  /**
   * <p>The deployment type created by SageMaker Edge Manager. Currently only
   *      supports Amazon Web Services IoT Greengrass Version 2 components.</p>
   */
  Type: EdgePresetDeploymentType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the generated deployable resource.</p>
   */
  Artifact?: string;

  /**
   * <p>The status of the deployable resource.</p>
   */
  Status?: EdgePresetDeploymentStatus | string;

  /**
   * <p>Returns a message describing the status of the deployed resource.</p>
   */
  StatusMessage?: string;
}

export interface DescribeEdgePackagingJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the edge packaging job.</p>
   */
  EdgePackagingJobArn: string | undefined;

  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;

  /**
   * <p>The name of the SageMaker Neo compilation job that is used to locate model artifacts that are being packaged.</p>
   */
  CompilationJobName?: string;

  /**
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to  download and upload the model, and to contact Neo.</p>
   */
  RoleArn?: string;

  /**
   * <p>The output configuration for the edge packaging job.</p>
   */
  OutputConfig?: EdgeOutputConfig;

  /**
   * <p>The Amazon Web Services KMS key to use when encrypting the EBS volume the job run on.</p>
   */
  ResourceKey?: string;

  /**
   * <p>The current status of the packaging job.</p>
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | string | undefined;

  /**
   * <p>Returns a message describing the job status and error messages.</p>
   */
  EdgePackagingJobStatusMessage?: string;

  /**
   * <p>The timestamp of when the packaging job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The timestamp of when the job was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Simple Storage (S3) URI where model artifacts ares stored.</p>
   */
  ModelArtifact?: string;

  /**
   * <p>The signature document of files in the model artifact.</p>
   */
  ModelSignature?: string;

  /**
   * <p>The output of a SageMaker Edge Manager deployable resource.</p>
   */
  PresetDeploymentOutput?: EdgePresetDeploymentOutput;
}

export interface DescribeEndpointInput {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;
}

export enum EndpointStatus {
  CREATING = "Creating",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_SERVICE = "InService",
  OUT_OF_SERVICE = "OutOfService",
  ROLLING_BACK = "RollingBack",
  SYSTEM_UPDATING = "SystemUpdating",
  UPDATING = "Updating",
}

export enum VariantStatus {
  ACTIVATING_TRAFFIC = "ActivatingTraffic",
  BAKING = "Baking",
  CREATING = "Creating",
  DELETING = "Deleting",
  UPDATING = "Updating",
}

/**
 * <p>Describes the status of the production variant.</p>
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
   */
  Status: VariantStatus | string | undefined;

  /**
   * <p>A message that describes the status of the production variant.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The start time of the current status change.</p>
   */
  StartTime?: Date;
}

/**
 * <p>The production variant summary for a deployment when an endpoint is creating or
 *             updating with the <code>
 *                <a>CreateEndpoint</a>
 *             </code> or <code>
 *                <a>UpdateEndpoint</a>
 *             </code> operations. Describes the <code>VariantStatus
 *             </code>, weight and capacity for a production variant associated with an endpoint.
 *         </p>
 */
export interface PendingProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container
   *             Registry paths of the inference images deployed on instances of this
   *                 <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight for the variant in this deployment, as specified in the endpoint
   *             configuration for the endpoint. The value is taken from the request to the <code>
   *                <a>CreateEndpointConfig</a>
   *             </code> operation.</p>
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in this deployment, as specified in the endpoint
   *             configuration for the endpoint. The value is taken from the request to the <code>
   *                <a>CreateEndpointConfig</a>
   *             </code> operation.</p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The type of instances associated with the variant.</p>
   */
  InstanceType?: ProductionVariantInstanceType | string;

  /**
   * <p>The size of the Elastic Inference (EI) instance to use for the production variant. EI
   *             instances provide on-demand GPU computing for inference. For more information, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic
   *                 Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorType?: ProductionVariantAcceleratorType | string;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or
   *             operational status.</p>
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * <p>The serverless configuration for the endpoint.</p>
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>The serverless configuration requested for this deployment, as specified in the endpoint configuration for the endpoint.</p>
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
}

/**
 * <p>The summary of an in-progress deployment when an endpoint is creating or updating with
 *             a new endpoint configuration.</p>
 */
export interface PendingDeploymentSummary {
  /**
   * <p>The name of the endpoint configuration used in the deployment. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>An array of <a>PendingProductionVariantSummary</a> objects, one for each
   *             model hosted behind this endpoint for the in-progress deployment.</p>
   */
  ProductionVariants?: PendingProductionVariantSummary[];

  /**
   * <p>The start time of the deployment.</p>
   */
  StartTime?: Date;

  /**
   * <p>An array of <a>PendingProductionVariantSummary</a> objects, one for each
   *             model hosted behind this endpoint in shadow mode with production traffic replicated from
   *             the model specified on <code>ProductionVariants</code> for the in-progress
   *             deployment.</p>
   */
  ShadowProductionVariants?: PendingProductionVariantSummary[];
}

/**
 * <p>Describes weight and capacities for a production variant associated with an
 *             endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code>
 *             API and the endpoint status is <code>Updating</code>, you get different desired and
 *             current values. </p>
 */
export interface ProductionVariantSummary {
  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the
   *             inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>The requested weight, as specified in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredWeight?: number;

  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The number of instances requested in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The endpoint variant status which describes the current deployment stage status or
   *             operational status.</p>
   */
  VariantStatus?: ProductionVariantStatus[];

  /**
   * <p>The serverless configuration for the endpoint.</p>
   */
  CurrentServerlessConfig?: ProductionVariantServerlessConfig;

  /**
   * <p>The serverless configuration requested for the endpoint update.</p>
   */
  DesiredServerlessConfig?: ProductionVariantServerlessConfig;
}

export interface DescribeEndpointOutput {
  /**
   * <p>Name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The name of the endpoint configuration associated with this endpoint.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>An array of <a>ProductionVariantSummary</a> objects, one for each model
   *             hosted behind this endpoint.</p>
   */
  ProductionVariants?: ProductionVariantSummary[];

  /**
   * <p>The currently active data capture configuration used by your Endpoint.</p>
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
   *                   <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p>
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
   *                     capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <a>DescribeEndpointOutput$FailureReason</a> for information about
   *                     the failure. <a>DeleteEndpoint</a> is the only operation that can be
   *                     performed on a failed endpoint.</p>
   *             </li>
   *          </ul>
   */
  EndpointStatus: EndpointStatus | string | undefined;

  /**
   * <p>If the status of the endpoint is <code>Failed</code>, the reason why it failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The most recent deployment configuration for the endpoint.</p>
   */
  LastDeploymentConfig?: DeploymentConfig;

  /**
   * <p>Returns the description of an endpoint configuration created using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">
   *                <code>CreateEndpointConfig</code>
   *             </a> API.</p>
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;

  /**
   * <p>Returns the summary of an in-progress deployment. This field is only returned when the
   *             endpoint is creating or updating with a new endpoint configuration.</p>
   */
  PendingDeploymentSummary?: PendingDeploymentSummary;

  /**
   * <p>The configuration parameters for an explainer.</p>
   */
  ExplainerConfig?: ExplainerConfig;

  /**
   * <p>An array of <a>ProductionVariantSummary</a> objects, one for each model
   *             that you want to host at this endpoint in shadow mode with production traffic replicated
   *             from the model specified on <code>ProductionVariants</code>.</p>
   */
  ShadowProductionVariants?: ProductionVariantSummary[];
}

export interface DescribeEndpointConfigInput {
  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;
}

export interface DescribeEndpointConfigOutput {
  /**
   * <p>Name of the SageMaker endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you
   *             want to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * <p>Configuration to control how SageMaker captures inference data.</p>
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * <p>Amazon Web Services KMS key ID Amazon SageMaker uses to encrypt data when storing it on
   *             the ML storage volume attached to the instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the description of an endpoint configuration created using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpointConfig.html">
   *                <code>CreateEndpointConfig</code>
   *             </a> API.</p>
   */
  AsyncInferenceConfig?: AsyncInferenceConfig;

  /**
   * <p>The configuration parameters for an explainer.</p>
   */
  ExplainerConfig?: ExplainerConfig;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you want
   *             to host at this endpoint in shadow mode with production traffic replicated from the
   *             model specified on <code>ProductionVariants</code>.</p>
   */
  ShadowProductionVariants?: ProductionVariant[];
}

export interface DescribeExperimentRequest {
  /**
   * <p>The name of the experiment to describe.</p>
   */
  ExperimentName: string | undefined;
}

/**
 * <p>The source of the experiment.</p>
 */
export interface ExperimentSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;
}

export interface DescribeExperimentResponse {
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the type.</p>
   */
  Source?: ExperimentSource;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the experiment.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the experiment.</p>
   */
  LastModifiedBy?: UserContext;
}

export interface DescribeFeatureGroupRequest {
  /**
   * <p>The name of the <code>FeatureGroup</code> you want described. </p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>A token to resume pagination of the list of <code>Features</code>
   *             (<code>FeatureDefinitions</code>). 2,500 <code>Features</code> are returned by
   *          default.</p>
   */
  NextToken?: string;
}

export enum FeatureGroupStatus {
  CREATED = "Created",
  CREATE_FAILED = "CreateFailed",
  CREATING = "Creating",
  DELETE_FAILED = "DeleteFailed",
  DELETING = "Deleting",
}

export enum LastUpdateStatusValue {
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  SUCCESSFUL = "Successful",
}

/**
 * <p>A value that indicates whether the update was successful.</p>
 */
export interface LastUpdateStatus {
  /**
   * <p>A value that indicates whether the update was made successful.</p>
   */
  Status: LastUpdateStatusValue | string | undefined;

  /**
   * <p>If the update wasn't successful, indicates the reason why it failed.</p>
   */
  FailureReason?: string;
}

export enum OfflineStoreStatusValue {
  ACTIVE = "Active",
  BLOCKED = "Blocked",
  DISABLED = "Disabled",
}

/**
 * <p>The status of <code>OfflineStore</code>.</p>
 */
export interface OfflineStoreStatus {
  /**
   * <p>An <code>OfflineStore</code> status.</p>
   */
  Status: OfflineStoreStatusValue | string | undefined;

  /**
   * <p>The justification for why the OfflineStoreStatus is Blocked (if applicable).</p>
   */
  BlockedReason?: string;
}

export interface DescribeFeatureGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>FeatureGroup</code>.  </p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>he name of the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the <code>Feature</code> used for <code>RecordIdentifier</code>, whose value
   *          uniquely identifies a record stored in the feature store.</p>
   */
  RecordIdentifierFeatureName: string | undefined;

  /**
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a
   *          <code>FeatureGroup</code>.</p>
   *          <p> An <code>EventTime</code> is a point in time when a new event occurs that
   *          corresponds to the creation or update of a <code>Record</code> in a
   *             <code>FeatureGroup</code>. All <code>Records</code> in the <code>FeatureGroup</code>
   *          have a corresponding <code>EventTime</code>.</p>
   */
  EventTimeFeatureName: string | undefined;

  /**
   * <p>A list of the <code>Features</code> in the <code>FeatureGroup</code>.
   *          Each feature is defined by a <code>FeatureName</code> and <code>FeatureType</code>.</p>
   */
  FeatureDefinitions: FeatureDefinition[] | undefined;

  /**
   * <p>A timestamp indicating when SageMaker created the <code>FeatureGroup</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp indicating when the feature group was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The configuration for the <code>OnlineStore</code>.</p>
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
   *                <p>Option to disable the automatic creation of a Glue table for the offline store.</p>
   *             </li>
   *             <li>
   *                <p>Encryption configuration.</p>
   *             </li>
   *          </ul>
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the OfflineStore if an OfflineStoreConfig is provided.</p>
   */
  RoleArn?: string;

  /**
   * <p>The status of the feature group.</p>
   */
  FeatureGroupStatus?: FeatureGroupStatus | string;

  /**
   * <p>The status of the <code>OfflineStore</code>. Notifies you if replicating data into the
   *             <code>OfflineStore</code> has failed. Returns either: <code>Active</code> or
   *             <code>Blocked</code>
   *          </p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;

  /**
   * <p>A value indicating whether the update made to the feature group was successful.</p>
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
   */
  FailureReason?: string;

  /**
   * <p>A free form description of the feature group.</p>
   */
  Description?: string;

  /**
   * <p>A token to resume pagination of the list of <code>Features</code>
   *             (<code>FeatureDefinitions</code>).</p>
   */
  NextToken: string | undefined;

  /**
   * <p>The size of the <code>OnlineStore</code> in bytes.</p>
   */
  OnlineStoreTotalSizeBytes?: number;
}

export interface DescribeFeatureMetadataRequest {
  /**
   * <p>The name of the feature group containing the feature.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature.</p>
   */
  FeatureName: string | undefined;
}

/**
 * <p>A key-value pair that you specify to describe the feature.</p>
 */
export interface FeatureParameter {
  /**
   * <p>A key that must contain a value to describe the feature.</p>
   */
  Key?: string;

  /**
   * <p>The value that belongs to a key.</p>
   */
  Value?: string;
}

export interface DescribeFeatureMetadataResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the feature group that contains the feature.</p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>The name of the feature group that you've specified.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The name of the feature that you've specified.</p>
   */
  FeatureName: string | undefined;

  /**
   * <p>The data type of the feature.</p>
   */
  FeatureType: FeatureType | string | undefined;

  /**
   * <p>A timestamp indicating when the feature was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp indicating when the metadata for the feature group was modified. For example, if you add a parameter describing the feature, the timestamp changes to reflect the last time you </p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The description you added to describe the feature.</p>
   */
  Description?: string;

  /**
   * <p>The key-value pairs that you added to describe the feature.</p>
   */
  Parameters?: FeatureParameter[];
}

export interface DescribeFlowDefinitionRequest {
  /**
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;
}

export enum FlowDefinitionStatus {
  ACTIVE = "Active",
  DELETING = "Deleting",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
}

export interface DescribeFlowDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow defintion.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values are listed below.</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | string | undefined;

  /**
   * <p>The timestamp when the flow definition was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Container for configuring the source of human task requests. Used to specify if
   *       Amazon Rekognition or Amazon Textract is used as an integration source.</p>
   */
  HumanLoopRequestSource?: HumanLoopRequestSource;

  /**
   * <p>An object containing information about what triggers a human review workflow.</p>
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * <p>An object containing information about who works on the task, the workforce task price, and other task details.</p>
   */
  HumanLoopConfig: HumanLoopConfig | undefined;

  /**
   * <p>An object containing information about the output file.</p>
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) execution role for the flow definition.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The reason your flow definition failed.</p>
   */
  FailureReason?: string;
}

export interface DescribeHubRequest {
  /**
   * <p>The name of the hub to describe.</p>
   */
  HubName: string | undefined;
}

export enum HubStatus {
  CREATE_FAILED = "CreateFailed",
  CREATING = "Creating",
  DELETE_FAILED = "DeleteFailed",
  DELETING = "Deleting",
  IN_SERVICE = "InService",
  UPDATE_FAILED = "UpdateFailed",
  UPDATING = "Updating",
}

export interface DescribeHubResponse {
  /**
   * <p>The name of the hub.</p>
   */
  HubName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hub.</p>
   */
  HubArn: string | undefined;

  /**
   * <p>The display name of the hub.</p>
   */
  HubDisplayName?: string;

  /**
   * <p>A description of the hub.</p>
   */
  HubDescription?: string;

  /**
   * <p>The searchable keywords for the hub.</p>
   */
  HubSearchKeywords?: string[];

  /**
   * <p>The Amazon S3 storage configuration for the hub.</p>
   */
  S3StorageConfig?: HubS3StorageConfig;

  /**
   * <p>The status of the hub.</p>
   */
  HubStatus: HubStatus | string | undefined;

  /**
   * <p>The failure reason if importing hub content failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The date and time that the hub was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the hub was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

export interface DescribeHubContentRequest {
  /**
   * <p>The name of the hub that contains the content to describe.</p>
   */
  HubName: string | undefined;

  /**
   * <p>The type of content in the hub.</p>
   */
  HubContentType: HubContentType | string | undefined;

  /**
   * <p>The name of the content to describe.</p>
   */
  HubContentName: string | undefined;

  /**
   * <p>The version of the content to describe.</p>
   */
  HubContentVersion?: string;
}

/**
 * <p>Any dependencies related to hub content, such as scripts, model artifacts, datasets, or notebooks.</p>
 */
export interface HubContentDependency {
  /**
   * <p>The hub content dependency origin path.</p>
   */
  DependencyOriginPath?: string;

  /**
   * <p>The hub content dependency copy path.</p>
   */
  DependencyCopyPath?: string;
}

export enum HubContentStatus {
  AVAILABLE = "Available",
  DELETE_FAILED = "DeleteFailed",
  DELETING = "Deleting",
  IMPORTING = "Importing",
  IMPORT_FAILED = "ImportFailed",
}

export interface DescribeHubContentResponse {
  /**
   * <p>The name of the hub content.</p>
   */
  HubContentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hub content.</p>
   */
  HubContentArn: string | undefined;

  /**
   * <p>The version of the hub content.</p>
   */
  HubContentVersion: string | undefined;

  /**
   * <p>The type of hub content.</p>
   */
  HubContentType: HubContentType | string | undefined;

  /**
   * <p>The document schema version for the hub content.</p>
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * <p>The name of the hub that contains the content.</p>
   */
  HubName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hub that contains the content. </p>
   */
  HubArn: string | undefined;

  /**
   * <p>The display name of the hub content.</p>
   */
  HubContentDisplayName?: string;

  /**
   * <p>A description of the hub content.</p>
   */
  HubContentDescription?: string;

  /**
   * <p>Markdown files associated with the hub content to import.</p>
   */
  HubContentMarkdown?: string;

  /**
   * <p>The hub content document that describes information about the hub content such as type, associated containers, scripts, and more.</p>
   */
  HubContentDocument: string | undefined;

  /**
   * <p>The searchable keywords for the hub content.</p>
   */
  HubContentSearchKeywords?: string[];

  /**
   * <p>The location of any dependencies that the hub content has, such as scripts, model artifacts, datasets, or notebooks.</p>
   */
  HubContentDependencies?: HubContentDependency[];

  /**
   * <p>The status of the hub content.</p>
   */
  HubContentStatus: HubContentStatus | string | undefined;

  /**
   * <p>The failure reason if importing hub content failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The date and time that hub content was created.</p>
   */
  CreationTime: Date | undefined;
}

export interface DescribeHumanTaskUiRequest {
  /**
   * <p>The name of the human task user interface
   *       (worker task template) you want information about.</p>
   */
  HumanTaskUiName: string | undefined;
}

export enum HumanTaskUiStatus {
  ACTIVE = "Active",
  DELETING = "Deleting",
}

/**
 * <p>Container for user interface template information.</p>
 */
export interface UiTemplateInfo {
  /**
   * <p>The URL for the user interface template.</p>
   */
  Url?: string;

  /**
   * <p>The SHA-256 digest of the contents of the template.</p>
   */
  ContentSha256?: string;
}

export interface DescribeHumanTaskUiResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface (worker task template).</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>The name of the human task user interface (worker task template).</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The status of the human task user interface (worker task template). Valid values are listed below.</p>
   */
  HumanTaskUiStatus?: HumanTaskUiStatus | string;

  /**
   * <p>The timestamp when the human task user interface was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Container for user interface template information.</p>
   */
  UiTemplate: UiTemplateInfo | undefined;
}

export interface DescribeHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * <p>Shows the final value for the
 *             objective
 *             metric for a training job that was launched by a hyperparameter
 *             tuning job. You define the objective metric in the
 *                 <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.</p>
 */
export interface FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * <p>Whether to
   *             minimize
   *             or maximize the objective metric. Valid values are Minimize and
   *             Maximize.</p>
   */
  Type?: HyperParameterTuningJobObjectiveType | string;

  /**
   * <p>The name of the
   *             objective
   *             metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The value of the objective metric.</p>
   */
  Value: number | undefined;
}

export enum TrainingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>The container for the summary information about a training job.</p>
 */
export interface HyperParameterTrainingJobSummary {
  /**
   * <p>The training job definition name.</p>
   */
  TrainingJobDefinitionName?: string;

  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The HyperParameter tuning job that launched the training job.</p>
   */
  TuningJobName?: string;

  /**
   * <p>The date and time that the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the training job started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Specifies the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The
   *             status
   *             of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;

  /**
   * <p>A
   *             list of the hyperparameters for which you specified ranges to
   *             search.</p>
   */
  TunedHyperParameters: Record<string, string> | undefined;

  /**
   * <p>The
   *             reason that the training job failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>The <a>FinalHyperParameterTuningJobObjectiveMetric</a> object that
   *             specifies the
   *             value
   *             of the
   *             objective
   *             metric of the tuning job that launched this training job.</p>
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
   */
  ObjectiveStatus?: ObjectiveStatus | string;
}

export enum HyperParameterTuningJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
 *             categorized by the status of their objective metric. The objective metric status shows
 *             whether the
 *             final
 *             objective metric for the training job has been evaluated by the
 *             tuning job and used in the hyperparameter tuning process.</p>
 */
export interface ObjectiveStatusCounters {
  /**
   * <p>The number of training jobs whose final objective metric was evaluated by the
   *             hyperparameter tuning job and used in the hyperparameter tuning process.</p>
   */
  Succeeded?: number;

  /**
   * <p>The number of training jobs that are in progress and pending evaluation of their final
   *             objective metric.</p>
   */
  Pending?: number;

  /**
   * <p>The number of training jobs whose final objective metric was not evaluated and used in
   *             the hyperparameter tuning process. This typically occurs when the training job failed or
   *             did not emit an objective metric.</p>
   */
  Failed?: number;
}

/**
 * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
 *             status.</p>
 */
export interface TrainingJobStatusCounters {
  /**
   * <p>The number of completed training jobs launched by the hyperparameter tuning
   *             job.</p>
   */
  Completed?: number;

  /**
   * <p>The number of in-progress training jobs launched by a hyperparameter tuning
   *             job.</p>
   */
  InProgress?: number;

  /**
   * <p>The number of training jobs that failed, but can be retried. A failed training job can
   *             be retried only if it failed because an internal service error occurred.</p>
   */
  RetryableError?: number;

  /**
   * <p>The number of training jobs that failed and can't be retried. A failed training job
   *             can't be retried if it failed because a client error occurred.</p>
   */
  NonRetryableError?: number;

  /**
   * <p>The number of training jobs launched by a hyperparameter tuning job that were
   *             manually
   *             stopped.</p>
   */
  Stopped?: number;
}

export interface DescribeHyperParameterTuningJobResponse {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The
   *             Amazon Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The <a>HyperParameterTuningJobConfig</a> object that specifies the
   *             configuration of the tuning job.</p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>The <a>HyperParameterTrainingJobDefinition</a> object that specifies the
   *             definition of the training jobs that this tuning job launches.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p>A list of the <a>HyperParameterTrainingJobDefinition</a> objects launched
   *             for this tuning job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>The status of the tuning job: InProgress, Completed, Failed, Stopping, or
   *             Stopped.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | string | undefined;

  /**
   * <p>The date and time that the tuning job started.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The date and time that the status of the tuning job was modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by the status of their final objective metric, that this
   *             tuning job launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>A <a>TrainingJobSummary</a> object that describes the training job that
   *             completed with the best current <a>HyperParameterTuningJobObjective</a>.</p>
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>If the hyperparameter tuning job is an warm start tuning job with a
   *                 <code>WarmStartType</code> of <code>IDENTICAL_DATA_AND_ALGORITHM</code>, this is the
   *                 <a>TrainingJobSummary</a> for the training job with the best objective
   *             metric value of all training jobs launched by this tuning job and all parent jobs
   *             specified for the warm start tuning job.</p>
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>The configuration for starting the hyperparameter parameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * <p>If the tuning job failed, the reason it failed.</p>
   */
  FailureReason?: string;
}

export interface DescribeImageRequest {
  /**
   * <p>The name of the image to describe.</p>
   */
  ImageName: string | undefined;
}

export enum ImageStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

export interface DescribeImageResponse {
  /**
   * <p>When the image was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The name of the image as displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The ARN of the image.</p>
   */
  ImageArn?: string;

  /**
   * <p>The name of the image.</p>
   */
  ImageName?: string;

  /**
   * <p>The status of the image.</p>
   */
  ImageStatus?: ImageStatus | string;

  /**
   * <p>When the image was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The ARN of the IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
   */
  RoleArn?: string;
}

export interface DescribeImageVersionRequest {
  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The version of the image. If not specified, the latest version is described.</p>
   */
  Version?: number;

  /**
   * <p>The alias of the image version.</p>
   */
  Alias?: string;
}

export enum ImageVersionStatus {
  CREATED = "CREATED",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
}

export interface DescribeImageVersionResponse {
  /**
   * <p>The registry path of the container image on which this image version is based.</p>
   */
  BaseImage?: string;

  /**
   * <p>The registry path of the container image that contains this image version.</p>
   */
  ContainerImage?: string;

  /**
   * <p>When the version was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The ARN of the image the version is based on.</p>
   */
  ImageArn?: string;

  /**
   * <p>The ARN of the version.</p>
   */
  ImageVersionArn?: string;

  /**
   * <p>The status of the version.</p>
   */
  ImageVersionStatus?: ImageVersionStatus | string;

  /**
   * <p>When the version was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The version number.</p>
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
   */
  VendorGuidance?: VendorGuidance | string;

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
   */
  JobType?: JobType | string;

  /**
   * <p>The machine learning framework vended in the image version.</p>
   */
  MLFramework?: string;

  /**
   * <p>The supported programming language and its version.</p>
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
   */
  Processor?: Processor | string;

  /**
   * <p>Indicates Horovod compatibility.</p>
   */
  Horovod?: boolean;

  /**
   * <p>The maintainer description of the image version.</p>
   */
  ReleaseNotes?: string;
}

export interface DescribeInferenceExperimentRequest {
  /**
   * <p>The name of the inference experiment to describe.</p>
   */
  Name: string | undefined;
}

/**
 * <p>The metadata of the endpoint.</p>
 */
export interface EndpointMetadata {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName?: string;

  /**
   * <p>
   *            The status of the endpoint. For possible values of the status of an endpoint, see <a>EndpointSummary$EndpointStatus</a>.
   *        </p>
   */
  EndpointStatus?: EndpointStatus | string;

  /**
   * <p>
   *            If the status of the endpoint is <code>Failed</code>, or the status is <code>InService</code> but update
   *            operation fails, this provides the reason why it failed.
   *        </p>
   */
  FailureReason?: string;
}

export enum ModelVariantStatus {
  CREATING = "Creating",
  DELETED = "Deleted",
  DELETING = "Deleting",
  IN_SERVICE = "InService",
  UPDATING = "Updating",
}

/**
 * <p>Summary of the deployment configuration of a model.</p>
 */
export interface ModelVariantConfigSummary {
  /**
   * <p>The name of the Amazon SageMaker Model entity.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The configuration of the infrastructure that the model has been deployed to.</p>
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
   */
  Status: ModelVariantStatus | string | undefined;
}

export enum InferenceExperimentStatus {
  CANCELLED = "Cancelled",
  COMPLETED = "Completed",
  CREATED = "Created",
  CREATING = "Creating",
  RUNNING = "Running",
  STARTING = "Starting",
  STOPPING = "Stopping",
  UPDATING = "Updating",
}

export interface DescribeInferenceExperimentResponse {
  /**
   * <p>The ARN of the inference experiment being described.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the inference experiment.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the inference experiment.</p>
   */
  Type: InferenceExperimentType | string | undefined;

  /**
   * <p>The duration for which the inference experiment ran or will run.</p>
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
   *                   <code>Cancelled</code> - When you conclude your experiment early using the <a>StopInferenceExperiment</a> API, or if any operation fails with an unexpected error, it shows
   *                    as cancelled.
   *                </p>
   *             </li>
   *          </ul>
   */
  Status: InferenceExperimentStatus | string | undefined;

  /**
   * <p>
   *            The error message or client-specified <code>Reason</code> from the <a>StopInferenceExperiment</a>
   *            API, that explains the status of the inference experiment.
   *        </p>
   */
  StatusReason?: string;

  /**
   * <p>The description of the inference experiment.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp at which you created the inference experiment.</p>
   */
  CreationTime?: Date;

  /**
   * <p>
   *            The timestamp at which the inference experiment was completed.
   *        </p>
   */
  CompletionTime?: Date;

  /**
   * <p>The timestamp at which you last modified the inference experiment.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>
   *            The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage
   *            Amazon SageMaker Inference endpoints for model deployment.
   *        </p>
   */
  RoleArn?: string;

  /**
   * <p>The metadata of the endpoint on which the inference experiment ran.</p>
   */
  EndpointMetadata: EndpointMetadata | undefined;

  /**
   * <p>
   *            An array of <code>ModelVariantConfigSummary</code> objects. There is one for each variant in the inference
   *            experiment. Each <code>ModelVariantConfigSummary</code> object in the array describes the infrastructure
   *            configuration for deploying the corresponding variant.
   *        </p>
   */
  ModelVariants: ModelVariantConfigSummary[] | undefined;

  /**
   * <p>The Amazon S3 location and configuration for storing inference request and response data.</p>
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig;

  /**
   * <p>
   *            The configuration of <code>ShadowMode</code> inference experiment type, which shows the production variant
   *            that takes all the inference requests, and the shadow variant to which Amazon SageMaker replicates a percentage of the
   *            inference requests. For the shadow variant it also shows the percentage of requests that Amazon SageMaker replicates.
   *        </p>
   */
  ShadowModeConfig?: ShadowModeConfig;

  /**
   * <p>
   *            The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on
   *            the storage volume attached to the ML compute instance that hosts the endpoint. For more information, see
   *            <a>CreateInferenceExperimentRequest$KmsKey</a>.
   *        </p>
   */
  KmsKey?: string;
}

export interface DescribeInferenceRecommendationsJobRequest {
  /**
   * <p>The name of the job. The name must be unique within an
   *            Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobName: string | undefined;
}

/**
 * <p>The metrics for an existing endpoint compared in an Inference Recommender job.</p>
 */
export interface InferenceMetrics {
  /**
   * <p>The expected maximum number of requests per minute for the instance.</p>
   */
  MaxInvocations: number | undefined;

  /**
   * <p>The expected model latency at maximum invocations per minute for the instance.</p>
   */
  ModelLatency: number | undefined;
}

/**
 * <p>The performance results from running an Inference Recommender job on an existing endpoint.</p>
 */
export interface EndpointPerformance {
  /**
   * <p>The metrics for an existing endpoint.</p>
   */
  Metrics: InferenceMetrics | undefined;

  /**
   * <p>Details about a customer endpoint that was compared in an Inference Recommender job.</p>
   */
  EndpointInfo: EndpointInfo | undefined;
}

/**
 * <p>The endpoint configuration made by Inference Recommender during a recommendation job.</p>
 */
export interface EndpointOutputConfiguration {
  /**
   * <p>The name of the endpoint made during a recommendation job.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the production variant (deployed model) made during a recommendation job.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The instance type recommended by Amazon SageMaker Inference Recommender.</p>
   */
  InstanceType: ProductionVariantInstanceType | string | undefined;

  /**
   * <p>The number of instances recommended to launch initially.</p>
   */
  InitialInstanceCount: number | undefined;
}

/**
 * <p>The metrics of recommendations.</p>
 */
export interface RecommendationMetrics {
  /**
   * <p>Defines the cost per hour for the instance. </p>
   */
  CostPerHour: number | undefined;

  /**
   * <p>Defines the cost per inference for the instance .</p>
   */
  CostPerInference: number | undefined;

  /**
   * <p>The expected maximum number of requests per minute for the instance.</p>
   */
  MaxInvocations: number | undefined;

  /**
   * <p>The expected model latency at maximum invocation per minute for the instance.</p>
   */
  ModelLatency: number | undefined;

  /**
   * <p>The expected CPU utilization at maximum invocations per minute for the instance.</p>
   *          <p>
   *             <code>NaN</code> indicates that the value is not available.</p>
   */
  CpuUtilization?: number;

  /**
   * <p>The expected memory utilization at maximum invocations per minute for the instance.</p>
   *          <p>
   *             <code>NaN</code> indicates that the value is not available.</p>
   */
  MemoryUtilization?: number;
}

/**
 * <p>A list of environment parameters suggested by the Amazon SageMaker Inference Recommender.</p>
 */
export interface EnvironmentParameter {
  /**
   * <p>The environment key suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value type suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  ValueType: string | undefined;

  /**
   * <p>The value suggested by the Amazon SageMaker Inference Recommender.</p>
   */
  Value: string | undefined;
}

/**
 * <p>Defines the model configuration. Includes the specification name and environment parameters.</p>
 */
export interface ModelConfiguration {
  /**
   * <p>The inference specification name in the model package version.</p>
   */
  InferenceSpecificationName?: string;

  /**
   * <p>Defines the environment parameters that includes key, value types, and values.</p>
   */
  EnvironmentParameters?: EnvironmentParameter[];

  /**
   * <p>The name of the compilation job used to create the recommended model artifacts.</p>
   */
  CompilationJobName?: string;
}

/**
 * <p>A list of recommendations made by Amazon SageMaker Inference Recommender.</p>
 */
export interface InferenceRecommendation {
  /**
   * <p>The metrics used to decide what recommendation to make.</p>
   */
  Metrics: RecommendationMetrics | undefined;

  /**
   * <p>Defines the endpoint configuration parameters.</p>
   */
  EndpointConfiguration: EndpointOutputConfiguration | undefined;

  /**
   * <p>Defines the model configuration.</p>
   */
  ModelConfiguration: ModelConfiguration | undefined;

  /**
   * <p>The recommendation ID which uniquely identifies each recommendation.</p>
   */
  RecommendationId?: string;
}

export enum RecommendationJobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

export interface DescribeInferenceRecommendationsJobResponse {
  /**
   * <p>The name of the job. The name must be unique within an
   *            Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The job description that you provided when you initiated the job.</p>
   */
  JobDescription?: string;

  /**
   * <p>The job type that you provided when you initiated the job.</p>
   */
  JobType: RecommendationJobType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  JobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services
   *            Identity and Access Management (IAM) role you provided when you initiated the job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The status of the job.</p>
   */
  Status: RecommendationJobStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the job completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>A timestamp that shows when the job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If the job fails, provides information why the job failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>Returns information about the versioned model package Amazon Resource Name (ARN),
   *     the traffic pattern, and endpoint configurations you provided when you initiated the job.</p>
   */
  InputConfig: RecommendationJobInputConfig | undefined;

  /**
   * <p>The stopping conditions that you provided when you initiated the job.</p>
   */
  StoppingConditions?: RecommendationJobStoppingConditions;

  /**
   * <p>The recommendations made by Inference Recommender.</p>
   */
  InferenceRecommendations?: InferenceRecommendation[];

  /**
   * <p>The performance results from running an Inference Recommender job on an existing endpoint.</p>
   */
  EndpointPerformances?: EndpointPerformance[];
}

export interface DescribeLabelingJobRequest {
  /**
   * <p>The name of the labeling job to return information for.</p>
   */
  LabelingJobName: string | undefined;
}

/**
 * <p>Provides a breakdown of the number of objects labeled.</p>
 */
export interface LabelCounters {
  /**
   * <p>The total number of objects labeled.</p>
   */
  TotalLabeled?: number;

  /**
   * <p>The total number of objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of objects labeled by automated data labeling.</p>
   */
  MachineLabeled?: number;

  /**
   * <p>The total number of objects that could not be labeled due to an error.</p>
   */
  FailedNonRetryableError?: number;

  /**
   * <p>The total number of objects not yet labeled.</p>
   */
  Unlabeled?: number;
}

/**
 * <p>Specifies the location of the output produced by the labeling job. </p>
 */
export interface LabelingJobOutput {
  /**
   * <p>The Amazon S3 bucket location of the manifest file for labeled data. </p>
   */
  OutputDatasetS3Uri: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the most recent SageMaker model trained as part of
   *             automated data labeling. </p>
   */
  FinalActiveLearningModelArn?: string;
}

export enum LabelingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export interface DescribeLabelingJobResponse {
  /**
   * <p>The processing status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | string | undefined;

  /**
   * <p>Provides a breakdown of the number of data objects labeled by humans, the number of
   *             objects labeled by machine, the number of objects than couldn't be labeled, and the
   *             total number of objects labeled. </p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>If the job failed, the reason that it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the labeling job was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A unique identifier for work done as part of a labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The name assigned to the labeling job when it was created.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The attribute used as the label in the output manifest file.</p>
   */
  LabelAttributeName?: string;

  /**
   * <p>Input configuration information for the labeling job, such as the Amazon S3 location of the
   *             data objects and the location of the manifest file that describes the data
   *             objects.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>The location of the job's output data and the Amazon Web Services Key Management
   *             Service key ID for the key used to encrypt the output data, if any.</p>
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf
   *             during data labeling.</p>
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
   *             <code>{</code>
   *          </p>
   *          <p>
   *             <code> "document-version": "2018-11-28"</code>
   *          </p>
   *          <p>
   *             <code> "labels": [</code>
   *          </p>
   *          <p>
   *             <code> {</code>
   *          </p>
   *          <p>
   *             <code> "label": "<i>label 1</i>"</code>
   *          </p>
   *          <p>
   *             <code> },</code>
   *          </p>
   *          <p>
   *             <code> {</code>
   *          </p>
   *          <p>
   *             <code> "label": "<i>label 2</i>"</code>
   *          </p>
   *          <p>
   *             <code> },</code>
   *          </p>
   *          <p>
   *             <code> ...</code>
   *          </p>
   *          <p>
   *             <code> {</code>
   *          </p>
   *          <p>
   *             <code> "label": "<i>label n</i>"</code>
   *          </p>
   *          <p>
   *             <code> }</code>
   *          </p>
   *          <p>
   *             <code> ]</code>
   *          </p>
   *          <p>
   *             <code>}</code>
   *          </p>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
   *             job is automatically stopped.</p>
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * <p>Configuration information for automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * <p>Configuration information required for human workers to complete a labeling
   *             task.</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your Amazon Web Services
   *             resources in different ways, for example, by purpose, owner, or environment. For more
   *             information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;
}

export interface DescribeLineageGroupRequest {
  /**
   * <p>The name of the lineage group.</p>
   */
  LineageGroupName: string | undefined;
}

export interface DescribeLineageGroupResponse {
  /**
   * <p>The name of the lineage group.</p>
   */
  LineageGroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;

  /**
   * <p>The display name of the lineage group.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description of the lineage group.</p>
   */
  Description?: string;

  /**
   * <p>The creation time of lineage group.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>The last modified time of the lineage group.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;
}

export interface DescribeModelInput {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;
}

export interface DescribeModelOutput {
  /**
   * <p>Name of the SageMaker model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The location of the primary inference code, associated artifacts, and custom
   *             environment map that the inference code uses when it is deployed in production.
   *         </p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>The containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * <p>Specifies details of how containers in a multi-container endpoint are called.</p>
   */
  InferenceExecutionConfig?: InferenceExecutionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the
   *             model.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this model has access
   *             to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual
   *                 Private Cloud</a>
   *          </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>A timestamp that shows when the model was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p>If <code>True</code>, no inbound or outbound network calls can be made to or from the
   *             model container.</p>
   */
  EnableNetworkIsolation?: boolean;
}

export interface DescribeModelBiasJobDefinitionRequest {
  /**
   * <p>The name of the model bias job definition. The name must be unique within an Amazon Web Services Region
   *          in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;
}

export interface DescribeModelBiasJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model bias job.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the bias job definition. The name must be unique within an Amazon Web Services Region in the
   *          Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model bias job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model bias job.</p>
   */
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig;

  /**
   * <p>Configures the model bias job to run a specified Docker container image.</p>
   */
  ModelBiasAppSpecification: ModelBiasAppSpecification | undefined;

  /**
   * <p>Inputs for the model bias job.</p>
   */
  ModelBiasJobInput: ModelBiasJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelBiasJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model bias job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that
   *          has read permission to the input data location and write permission to the output data
   *          location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

export interface DescribeModelCardRequest {
  /**
   * <p>The name of the model card to describe.</p>
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card to describe. If a version is not provided, then the latest version of the model card is described.</p>
   */
  ModelCardVersion?: number;
}

export enum ModelCardProcessingStatus {
  CONTENT_DELETED = "ContentDeleted",
  DELETE_COMPLETED = "DeleteCompleted",
  DELETE_FAILED = "DeleteFailed",
  DELETE_INPROGRESS = "DeleteInProgress",
  DELETE_PENDING = "DeletePending",
  EXPORTJOBS_DELETED = "ExportJobsDeleted",
}

export interface DescribeModelCardResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   */
  ModelCardArn: string | undefined;

  /**
   * <p>The name of the model card.</p>
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card.</p>
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The content of the model card.</p>
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
   */
  ModelCardStatus: ModelCardStatus | string | undefined;

  /**
   * <p>The security configuration used to protect model card content.</p>
   */
  SecurityConfig?: ModelCardSecurityConfig;

  /**
   * <p>The date and time the model card was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy: UserContext | undefined;

  /**
   * <p>The date and time the model card was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
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
   */
  ModelCardProcessingStatus?: ModelCardProcessingStatus | string;
}

export interface DescribeModelCardExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model card export job to describe.</p>
   */
  ModelCardExportJobArn: string | undefined;
}

/**
 * <p>The artifacts of the model card export job.</p>
 */
export interface ModelCardExportArtifacts {
  /**
   * <p>The Amazon S3 URI of the exported model artifacts.</p>
   */
  S3ExportArtifacts: string | undefined;
}

export enum ModelCardExportJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
}

export interface DescribeModelCardExportJobResponse {
  /**
   * <p>The name of the model card export job to describe.</p>
   */
  ModelCardExportJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model card export job.</p>
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
   */
  Status: ModelCardExportJobStatus | string | undefined;

  /**
   * <p>The name of the model card that the model export job exports.</p>
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card that the model export job exports.</p>
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The export output details for the model card.</p>
   */
  OutputConfig: ModelCardExportOutputConfig | undefined;

  /**
   * <p>The date and time that the model export job was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time that the model export job was last modified.</p>
   */
  LastModifiedAt: Date | undefined;

  /**
   * <p>The failure reason if the model export job fails.</p>
   */
  FailureReason?: string;

  /**
   * <p>The exported model card artifacts.</p>
   */
  ExportArtifacts?: ModelCardExportArtifacts;
}

export interface DescribeModelExplainabilityJobDefinitionRequest {
  /**
   * <p>The name of the model explainability job definition. The name must be unique within an
   *          Amazon Web Services Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;
}

export interface DescribeModelExplainabilityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model explainability job.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the explainability job definition. The name must be unique within an Amazon Web Services
   *          Region in the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model explainability job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model explainability job.</p>
   */
  ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig;

  /**
   * <p>Configures the model explainability job to run a specified Docker container
   *          image.</p>
   */
  ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification | undefined;

  /**
   * <p>Inputs for the model explainability job.</p>
   */
  ModelExplainabilityJobInput: ModelExplainabilityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelExplainabilityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model explainability job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that
   *          has read permission to the input data location and write permission to the output data
   *          location in Amazon S3.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

export interface DescribeModelPackageInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to describe.</p>
   *          <p>When you specify a name, the name must have 1 to 63 characters. Valid
   *             characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string | undefined;
}

export enum DetailedModelPackageStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  NOT_STARTED = "NotStarted",
}

/**
 * <p>Represents the overall status of a model package.</p>
 */
export interface ModelPackageStatusItem {
  /**
   * <p>The name of the model package for which the overall status is being reported.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current status.</p>
   */
  Status: DetailedModelPackageStatus | string | undefined;

  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   */
  FailureReason?: string;
}

/**
 * <p>Specifies the validation and image scan statuses of the model package.</p>
 */
export interface ModelPackageStatusDetails {
  /**
   * <p>The validation status of the model package.</p>
   */
  ValidationStatuses: ModelPackageStatusItem[] | undefined;

  /**
   * <p>The status of the scan of the Docker image container for the model package.</p>
   */
  ImageScanStatuses?: ModelPackageStatusItem[];
}

export interface DescribeModelPackageOutput {
  /**
   * <p>The name of the model package being described.</p>
   */
  ModelPackageName: string | undefined;

  /**
   * <p>If the model is a versioned model, the name of the model group that the versioned
   *             model belongs to.</p>
   */
  ModelPackageGroupName?: string;

  /**
   * <p>The version of the model package.</p>
   */
  ModelPackageVersion?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief summary of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>A timestamp specifying when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about inference jobs that can be run with models based on this model
   *             package.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Configurations for one or more transform jobs that SageMaker runs to test the model
   *             package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;

  /**
   * <p>The current status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | string | undefined;

  /**
   * <p>Details about the current status of the model package.</p>
   */
  ModelPackageStatusDetails: ModelPackageStatusDetails | undefined;

  /**
   * <p>Whether the model package is certified for listing on Amazon Web Services Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>The approval status of the model package.</p>
   */
  ModelApprovalStatus?: ModelApprovalStatus | string;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>Metrics for the model.</p>
   */
  ModelMetrics?: ModelMetrics;

  /**
   * <p>The last time that the model package was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>A description provided for the model approval.</p>
   */
  ApprovalDescription?: string;

  /**
   * <p>The metadata properties associated with the model package versions.</p>
   */
  CustomerMetadataProperties?: Record<string, string>;

  /**
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package.
   *             For more information, see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-quality-clarify-baseline-lifecycle.html#pipelines-quality-clarify-baseline-drift-detection">Drift Detection against Previous Baselines in SageMaker Pipelines</a> in the <i>Amazon SageMaker Developer Guide</i>.
   *         </p>
   */
  DriftCheckBaselines?: DriftCheckBaselines;

  /**
   * <p>The machine learning domain of the model package you specified. Common machine
   *     learning domains include computer vision and natural language processing.</p>
   */
  Domain?: string;

  /**
   * <p>The machine learning task you specified that your model package accomplishes.
   *      Common machine learning tasks include object detection and image classification.</p>
   */
  Task?: string;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored. This path points to a single
   *     gzip compressed tar archive (.tar.gz suffix).</p>
   */
  SamplePayloadUrl?: string;

  /**
   * <p>An array of additional Inference Specification objects. Each additional
   *     Inference Specification specifies artifacts based on this model package that can
   *     be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.</p>
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];
}

export interface DescribeModelPackageGroupInput {
  /**
   * <p>The name of gthe model group to describe.</p>
   */
  ModelPackageGroupName: string | undefined;
}

export enum ModelPackageGroupStatus {
  COMPLETED = "Completed",
  DELETE_FAILED = "DeleteFailed",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
}

export interface DescribeModelPackageGroupOutput {
  /**
   * <p>The name of the model group.</p>
   */
  ModelPackageGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model group.</p>
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * <p>A description of the model group.</p>
   */
  ModelPackageGroupDescription?: string;

  /**
   * <p>The time that the model group was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy: UserContext | undefined;

  /**
   * <p>The status of the model group.</p>
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | string | undefined;
}

export interface DescribeModelQualityJobDefinitionRequest {
  /**
   * <p>The name of the model quality job. The name must be unique within an Amazon Web Services Region in the
   *          Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;
}

export interface DescribeModelQualityJobDefinitionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model quality job.</p>
   */
  JobDefinitionArn: string | undefined;

  /**
   * <p>The name of the quality job definition. The name must be unique within an Amazon Web Services Region in
   *          the Amazon Web Services account.</p>
   */
  JobDefinitionName: string | undefined;

  /**
   * <p>The time at which the model quality job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The baseline configuration for a model quality job.</p>
   */
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig;

  /**
   * <p>Configures the model quality job to run a specified Docker container image.</p>
   */
  ModelQualityAppSpecification: ModelQualityAppSpecification | undefined;

  /**
   * <p>Inputs for the model quality job.</p>
   */
  ModelQualityJobInput: ModelQualityJobInput | undefined;

  /**
   * <p>The output configuration for monitoring jobs.</p>
   */
  ModelQualityJobOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources to deploy for a monitoring job.</p>
   */
  JobResources: MonitoringResources | undefined;

  /**
   * <p>Networking options for a model quality job.</p>
   */
  NetworkConfig?: MonitoringNetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to
   *          perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

export interface DescribeMonitoringScheduleRequest {
  /**
   * <p>Name of a previously created monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export enum ExecutionStatus {
  COMPLETED = "Completed",
  COMPLETED_WITH_VIOLATIONS = "CompletedWithViolations",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

/**
 * <p>Summary of information about the last monitoring job to run.</p>
 */
export interface MonitoringExecutionSummary {
  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The time the monitoring job was scheduled.</p>
   */
  ScheduledTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that indicates the last time the monitoring job was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring job.</p>
   */
  MonitoringExecutionStatus: ExecutionStatus | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  ProcessingJobArn?: string;

  /**
   * <p>The name of the endpoint used to run the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * <p>Contains the reason a monitoring job failed, if it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the monitoring job.</p>
   */
  MonitoringJobDefinitionName?: string;

  /**
   * <p>The type of the monitoring job.</p>
   */
  MonitoringType?: MonitoringType | string;
}

export enum ScheduleStatus {
  FAILED = "Failed",
  PENDING = "Pending",
  SCHEDULED = "Scheduled",
  STOPPED = "Stopped",
}

export interface DescribeMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>Name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The status of an monitoring job.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | string | undefined;

  /**
   * <p>The type of the monitoring job that this schedule runs. This is one of the following
   *          values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DATA_QUALITY</code> - The schedule is for a data quality monitoring
   *                job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODEL_QUALITY</code> - The schedule is for a model quality monitoring
   *                job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODEL_BIAS</code> - The schedule is for a bias monitoring job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODEL_EXPLAINABILITY</code> - The schedule is for an explainability
   *                monitoring job.</p>
   *             </li>
   *          </ul>
   */
  MonitoringType?: MonitoringType | string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a monitoring job failed, if it
   *          failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * <p> The name of the endpoint for the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * <p>Describes metadata on the last execution to run, if there was one.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;
}

export interface DescribeNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance that you want information about.</p>
   */
  NotebookInstanceName: string | undefined;
}

export enum NotebookInstanceStatus {
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Stopped = "Stopped",
  Stopping = "Stopping",
  Updating = "Updating",
}

export interface DescribeNotebookInstanceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn?: string;

  /**
   * <p>The name of the SageMaker notebook instance. </p>
   */
  NotebookInstanceName?: string;

  /**
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | string;

  /**
   * <p>If status is <code>Failed</code>, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook that is running in your
   *             notebook instance. </p>
   */
  Url?: string;

  /**
   * <p>The type of ML compute instance running on the notebook instance.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The ID of the VPC subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The IDs of the VPC security groups.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *         </p>
   */
  RoleArn?: string;

  /**
   * <p>The Amazon Web Services KMS key ID SageMaker uses to encrypt data when storing it on the
   *             ML storage volume attached to the instance. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The network interface IDs that SageMaker created at the time of creating the instance.
   *         </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>A timestamp. Use this parameter to retrieve the time when the notebook instance was
   *             last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A timestamp. Use this parameter to return the time when the notebook instance was
   *             created</p>
   */
  CreationTime?: Date;

  /**
   * <p>Returns the name of a notebook instance lifecycle configuration.</p>
   *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>
   *          </p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>Describes whether SageMaker provides internet access to the notebook instance. If this
   *             value is set to <i>Disabled</i>, the notebook instance does not have
   *             internet access, and cannot connect to SageMaker training and endpoint services.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>.</p>
   */
  DirectInternetAccess?: DirectInternetAccess | string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the notebook instance.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * <p>A list of the Elastic Inference (EI) instance types associated with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon
   *                 SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance.</p>
   *          <note>
   *             <p>Lifecycle configurations need root access to be able to set up a notebook
   *                 instance. Because of this, lifecycle configurations associated with a notebook
   *                 instance always run with root access even if you disable root access for
   *                 users.</p>
   *          </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>The platform identifier of the notebook instance runtime environment.</p>
   */
  PlatformIdentifier?: string;

  /**
   * <p>Information on the IMDS configuration of the notebook instance</p>
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
}

export interface DescribeNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration to describe.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export interface DescribeNotebookInstanceLifecycleConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;

  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;
}

export interface DescribePipelineRequest {
  /**
   * <p>The name of the pipeline to describe.</p>
   */
  PipelineName: string | undefined;
}

export enum PipelineStatus {
  ACTIVE = "Active",
}

export interface DescribePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * <p>The name of the pipeline.</p>
   */
  PipelineName?: string;

  /**
   * <p>The display name of the pipeline.</p>
   */
  PipelineDisplayName?: string;

  /**
   * <p>The JSON pipeline definition.</p>
   */
  PipelineDefinition?: string;

  /**
   * <p>The description of the pipeline.</p>
   */
  PipelineDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline uses to execute.</p>
   */
  RoleArn?: string;

  /**
   * <p>The status of the pipeline execution.</p>
   */
  PipelineStatus?: PipelineStatus | string;

  /**
   * <p>The time when the pipeline was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the pipeline was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time when the pipeline was last run.</p>
   */
  LastRunTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Lists the parallelism configuration applied to the pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

export interface DescribePipelineDefinitionForExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;
}

export interface DescribePipelineDefinitionForExecutionResponse {
  /**
   * <p>The JSON pipeline definition.</p>
   */
  PipelineDefinition?: string;

  /**
   * <p>The time when the pipeline was created.</p>
   */
  CreationTime?: Date;
}

export interface DescribePipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn: string | undefined;
}

export enum PipelineExecutionStatus {
  EXECUTING = "Executing",
  FAILED = "Failed",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  SUCCEEDED = "Succeeded",
}

/**
 * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
 */
export interface PipelineExperimentConfig {
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;
}

export interface DescribePipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   */
  PipelineExecutionArn?: string;

  /**
   * <p>The display name of the pipeline execution.</p>
   */
  PipelineExecutionDisplayName?: string;

  /**
   * <p>The status of the pipeline execution.</p>
   */
  PipelineExecutionStatus?: PipelineExecutionStatus | string;

  /**
   * <p>The description of the pipeline execution.</p>
   */
  PipelineExecutionDescription?: string;

  /**
   * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
   */
  PipelineExperimentConfig?: PipelineExperimentConfig;

  /**
   * <p>If the execution failed, a message describing why.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time when the pipeline execution was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the pipeline execution was modified last.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The parallelism configuration applied to the pipeline.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

export interface DescribeProcessingJobRequest {
  /**
   * <p>The name of the processing job. The name must be unique within an Amazon Web Services Region in the
   *             Amazon Web Services account.</p>
   */
  ProcessingJobName: string | undefined;
}

export enum ProcessingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export interface DescribeProcessingJobResponse {
  /**
   * <p>The inputs for a processing job.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>Output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>The name of the processing job. The name must be unique within an Amazon Web Services Region in the
   *             Amazon Web Services account.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * <p>The time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>Configures the processing job to run a specified container image.</p>
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * <p>The environment variables set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Networking options for a processing job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   */
  RoleArn?: string;

  /**
   * <p>The configuration information used to create an experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>Provides the status of a processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | string | undefined;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>The time at which the processing job started.</p>
   */
  ProcessingStartTime?: Date;

  /**
   * <p>The time at which the processing job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The ARN of an AutoML job associated with this processing job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The ARN of a training job associated with this processing job.</p>
   */
  TrainingJobArn?: string;
}

export interface DescribeProjectInput {
  /**
   * <p>The name of the project to describe.</p>
   */
  ProjectName: string | undefined;
}

export enum ProjectStatus {
  CREATE_COMPLETED = "CreateCompleted",
  CREATE_FAILED = "CreateFailed",
  CREATE_IN_PROGRESS = "CreateInProgress",
  DELETE_COMPLETED = "DeleteCompleted",
  DELETE_FAILED = "DeleteFailed",
  DELETE_IN_PROGRESS = "DeleteInProgress",
  PENDING = "Pending",
  UPDATE_COMPLETED = "UpdateCompleted",
  UPDATE_FAILED = "UpdateFailed",
  UPDATE_IN_PROGRESS = "UpdateInProgress",
}

/**
 * <p>Details of a provisioned service catalog product. For information about service catalog,
 *             see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 */
export interface ServiceCatalogProvisionedProductDetails {
  /**
   * <p>The ID of the provisioned product.</p>
   */
  ProvisionedProductId?: string;

  /**
   * <p>The current status of the product.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - Stable state, ready to perform any operation. The most recent operation succeeded and completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNDER_CHANGE</code> - Transitive state. Operations performed might not have valid results. Wait for an AVAILABLE status before performing operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TAINTED</code> - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLAN_IN_PROGRESS</code> - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an AVAILABLE status before performing operations.</p>
   *             </li>
   *          </ul>
   */
  ProvisionedProductStatusMessage?: string;
}

export interface DescribeProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn: string | undefined;

  /**
   * <p>The name of the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The ID of the project.</p>
   */
  ProjectId: string | undefined;

  /**
   * <p>The description of the project.</p>
   */
  ProjectDescription?: string;

  /**
   * <p>Information used to provision a service catalog product. For information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *             Catalog</a>.</p>
   */
  ServiceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails | undefined;

  /**
   * <p>Information about a provisioned service catalog product.</p>
   */
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;

  /**
   * <p>The status of the project.</p>
   */
  ProjectStatus: ProjectStatus | string | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>The time when the project was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The timestamp when project was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;
}

export interface DescribeSpaceRequest {
  /**
   * <p>The ID of the associated Domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The name of the space.</p>
   */
  SpaceName: string | undefined;
}

export enum SpaceStatus {
  Delete_Failed = "Delete_Failed",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Update_Failed = "Update_Failed",
  Updating = "Updating",
}

export interface DescribeSpaceResponse {
  /**
   * <p>The ID of the associated Domain.</p>
   */
  DomainId?: string;

  /**
   * <p>The space's Amazon Resource Name (ARN).</p>
   */
  SpaceArn?: string;

  /**
   * <p>The name of the space.</p>
   */
  SpaceName?: string;

  /**
   * <p>The ID of the space's profile in the Amazon Elastic File System volume.</p>
   */
  HomeEfsFileSystemUid?: string;

  /**
   * <p>The status.</p>
   */
  Status?: SpaceStatus | string;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>A collection of space settings.</p>
   */
  SpaceSettings?: SpaceSettings;
}

export interface DescribeStudioLifecycleConfigRequest {
  /**
   * <p>The name of the Studio Lifecycle Configuration to describe.</p>
   */
  StudioLifecycleConfigName: string | undefined;
}

export interface DescribeStudioLifecycleConfigResponse {
  /**
   * <p>The ARN of the Lifecycle Configuration to describe.</p>
   */
  StudioLifecycleConfigArn?: string;

  /**
   * <p>The name of the Studio Lifecycle Configuration that is described.</p>
   */
  StudioLifecycleConfigName?: string;

  /**
   * <p>The creation time of the Studio Lifecycle Configuration.</p>
   */
  CreationTime?: Date;

  /**
   * <p>This value is equivalent to CreationTime because Studio Lifecycle Configurations are immutable.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The content of your Studio Lifecycle Configuration script.</p>
   */
  StudioLifecycleConfigContent?: string;

  /**
   * <p>The App type that the Lifecycle Configuration is attached to.</p>
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType | string;
}

export interface DescribeSubscribedWorkteamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the subscribed work team to describe.</p>
   */
  WorkteamArn: string | undefined;
}

/**
 * <p>Describes a work team of a vendor that does the a labelling job.</p>
 */
export interface SubscribedWorkteam {
  /**
   * <p>The Amazon Resource Name (ARN) of the vendor that you have subscribed.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The title of the service provided by the vendor in the Amazon Marketplace.</p>
   */
  MarketplaceTitle?: string;

  /**
   * <p>The name of the vendor in the Amazon Marketplace.</p>
   */
  SellerName?: string;

  /**
   * <p>The description of the vendor from the Amazon Marketplace.</p>
   */
  MarketplaceDescription?: string;

  /**
   * <p>Marketplace product listing ID.</p>
   */
  ListingId?: string;
}

export interface DescribeSubscribedWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.</p>
   */
  SubscribedWorkteam: SubscribedWorkteam | undefined;
}

export interface DescribeTrainingJobRequest {
  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;
}

/**
 * <p>The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.</p>
 */
export interface MetricData {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The value of the metric.</p>
   */
  Value?: number;

  /**
   * <p>The date and time that the algorithm emitted the metric.</p>
   */
  Timestamp?: Date;
}

/**
 * <p>Information about the status of the rule evaluation.</p>
 */
export interface ProfilerRuleEvaluationStatus {
  /**
   * <p>The name of the rule configuration.</p>
   */
  RuleConfigurationName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   */
  RuleEvaluationJobArn?: string;

  /**
   * <p>Status of the rule evaluation.</p>
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | string;

  /**
   * <p>Details from the rule evaluation.</p>
   */
  StatusDetails?: string;

  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export enum ProfilingStatus {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export enum SecondaryStatus {
  COMPLETED = "Completed",
  DOWNLOADING = "Downloading",
  DOWNLOADING_TRAINING_IMAGE = "DownloadingTrainingImage",
  FAILED = "Failed",
  INTERRUPTED = "Interrupted",
  LAUNCHING_ML_INSTANCES = "LaunchingMLInstances",
  MAX_RUNTIME_EXCEEDED = "MaxRuntimeExceeded",
  MAX_WAIT_TIME_EXCEEDED = "MaxWaitTimeExceeded",
  PREPARING_TRAINING_STACK = "PreparingTrainingStack",
  RESTARTING = "Restarting",
  STARTING = "Starting",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  TRAINING = "Training",
  UPDATING = "Updating",
  UPLOADING = "Uploading",
}

/**
 * <p>An array element of <a>DescribeTrainingJobResponse$SecondaryStatusTransitions</a>. It provides
 *             additional details about a status that the training job has transitioned through. A
 *             training job can be in one of several states, for example, starting, downloading,
 *             training, or uploading. Within each state, there are a number of intermediate states.
 *             For example, within the starting state, SageMaker could be starting the training job or
 *             launching the ML instances. These transitional states are referred to as the job's
 *             secondary
 *             status.
 *             </p>
 *          <p></p>
 */
export interface SecondaryStatusTransition {
  /**
   * <p>Contains a secondary status information from a training
   *             job.</p>
   *          <p>Status might be one of the following secondary statuses:</p>
   *          <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   *          <p>We no longer support the following secondary statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LaunchingMLInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PreparingTrainingStack</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DownloadingTrainingImage</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status: SecondaryStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned to the current secondary
   *             status state.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned out of this secondary status
   *             state into another secondary status state or when the training job has ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>A detailed description of the progress within a secondary status.
   *             </p>
   *          <p>SageMaker provides secondary statuses and status messages that apply to each of
   *             them:</p>
   *          <dl>
   *             <dt>Starting</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>Starting the training job.</p>
   *                   </li>
   *                   <li>
   *                      <p>Launching requested ML
   *                                 instances.</p>
   *                   </li>
   *                   <li>
   *                      <p>Insufficient
   *                                 capacity error from EC2 while launching instances,
   *                                 retrying!</p>
   *                   </li>
   *                   <li>
   *                      <p>Launched
   *                                 instance was unhealthy, replacing it!</p>
   *                   </li>
   *                   <li>
   *                      <p>Preparing the instances for training.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Training</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>Downloading the training image.</p>
   *                   </li>
   *                   <li>
   *                      <p>Training
   *                                 image download completed. Training in
   *                                 progress.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   *          <important>
   *             <p>Status messages are subject to change. Therefore, we recommend not including them
   *                 in code that programmatically initiates actions. For examples, don't use status
   *                 messages in if statements.</p>
   *          </important>
   *          <p>To have an overview of your training job's progress, view
   *                 <code>TrainingJobStatus</code> and <code>SecondaryStatus</code> in <a>DescribeTrainingJob</a>, and <code>StatusMessage</code> together. For
   *             example, at the start of a training job, you might see the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TrainingJobStatus</code> - InProgress</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SecondaryStatus</code> - Training</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StatusMessage</code> - Downloading the training image</p>
   *             </li>
   *          </ul>
   */
  StatusMessage?: string;
}

export enum WarmPoolResourceStatus {
  AVAILABLE = "Available",
  INUSE = "InUse",
  REUSED = "Reused",
  TERMINATED = "Terminated",
}

/**
 * <p>Status and billing information about the warm pool.</p>
 */
export interface WarmPoolStatus {
  /**
   * <p>The status of the warm pool.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InUse</code>: The warm pool is in use for the training job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Available</code>: The warm pool is available to reuse for a matching
   *                     training job.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Reused</code>: The warm pool moved to a matching training job for
   *                     reuse.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Terminated</code>: The warm pool is no longer available. Warm pools are
   *                     unavailable if they are terminated by a user, terminated for a patch update, or
   *                     terminated for exceeding the specified
   *                     <code>KeepAlivePeriodInSeconds</code>.</p>
   *             </li>
   *          </ul>
   */
  Status: WarmPoolResourceStatus | string | undefined;

  /**
   * <p>The billable time in seconds used by the warm pool. Billable time refers to the
   *             absolute wall-clock time.</p>
   *          <p>Multiply <code>ResourceRetainedBillableTimeInSeconds</code> by the number of instances
   *                 (<code>InstanceCount</code>) in your training cluster to get the total compute time
   *             SageMaker bills you if you run warm pool training. The formula is as follows:
   *                 <code>ResourceRetainedBillableTimeInSeconds * InstanceCount</code>.</p>
   */
  ResourceRetainedBillableTimeInSeconds?: number;

  /**
   * <p>The name of the matching training job that reused the warm pool.</p>
   */
  ReusedByJob?: string;
}

export interface DescribeTrainingJobResponse {
  /**
   * <p> Name of the model training job. </p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an AutoML job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model artifacts.
   *         </p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>The status of the training job.</p>
   *          <p>SageMaker provides the following training job statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InProgress</code> - The training is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Completed</code> - The training job has completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The training job has failed. To see the reason for the
   *                     failure, see the <code>FailureReason</code> field in the response to a
   *                         <code>DescribeTrainingJobResponse</code> call.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopping</code> - The training job is stopping.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopped</code> - The training job has stopped.</p>
   *             </li>
   *          </ul>
   *          <p>For more detailed information, see <code>SecondaryStatus</code>. </p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information on the secondary status of the training job, see <code>StatusMessage</code>
   *             under <a>SecondaryStatusTransition</a>.</p>
   *          <p>SageMaker provides primary statuses and secondary statuses that apply to each of
   *             them:</p>
   *          <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Interrupted</code> - The job stopped because the managed
   *                                 spot training instances were interrupted. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>MaxWaitTimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed wait time.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   *          <important>
   *             <p>Valid values for <code>SecondaryStatus</code> are subject to change. </p>
   *          </important>
   *          <p>We no longer support the following secondary statuses:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LaunchingMLInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PreparingTraining</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DownloadingTrainingImage</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SecondaryStatus: SecondaryStatus | string | undefined;

  /**
   * <p>If the training job failed, the reason it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>Algorithm-specific parameters. </p>
   */
  HyperParameters?: Record<string, string>;

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.
   *         </p>
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for
   *             the training job. </p>
   */
  RoleArn?: string;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input channel.
   *         </p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. SageMaker creates subfolders for model artifacts. </p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are
   *             configured for model training. </p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this training job has
   *             access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies how long
   *             a managed Spot training job has to complete. When the job reaches the time limit, SageMaker
   *             ends the training job. Use this API to cap model training costs.</p>
   *          <p>To stop a job, SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are
   *             billed for the time interval between this time and the value of
   *                 <code>TrainingEndTime</code>. The start time in CloudWatch Logs might be later than this time.
   *             The difference is due to the time it takes to download the training data and to the size
   *             of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * <p>A collection of <code>MetricData</code> objects that specify the names, values, and
   *             dates and times that the training algorithm emitted to Amazon CloudWatch.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * <p>If you want to allow inbound or outbound network calls, except for calls between peers
   *             within a training cluster for distributed training, choose <code>True</code>. If you
   *             enable network isolation for training jobs that are configured to use a VPC, SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithms in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or
   *             not (<code>False</code>).</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>The training time in seconds.</p>
   */
  TrainingTimeInSeconds?: number;

  /**
   * <p>The billable time in seconds. Billable time refers to the absolute wall-clock
   *             time.</p>
   *          <p>Multiply <code>BillableTimeInSeconds</code> by the number of instances
   *                 (<code>InstanceCount</code>) in your training cluster to get the total compute time
   *             SageMaker bills you if you run distributed training. The formula is as follows:
   *                 <code>BillableTimeInSeconds * InstanceCount</code> .</p>
   *          <p>You can calculate the savings from using managed spot training using the formula
   *                 <code>(1 - BillableTimeInSeconds / TrainingTimeInSeconds) * 100</code>. For example,
   *             if <code>BillableTimeInSeconds</code> is 100 and <code>TrainingTimeInSeconds</code> is
   *             500, the savings is 80%.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * <p>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and
   *             storage paths. To learn more about
   *             how to configure the <code>DebugHookConfig</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for debugging output tensors.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Evaluation status of Amazon SageMaker Debugger rules for debugging on a training job.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   */
  ProfilerConfig?: ProfilerConfig;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for profiling system and framework
   *             metrics.</p>
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[];

  /**
   * <p>Evaluation status of Amazon SageMaker Debugger rules for profiling on a training job.</p>
   */
  ProfilerRuleEvaluationStatuses?: ProfilerRuleEvaluationStatus[];

  /**
   * <p>Profiling status of a training job.</p>
   */
  ProfilingStatus?: ProfilingStatus | string;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   */
  RetryStrategy?: RetryStrategy;

  /**
   * <p>The environment variables to set in the Docker container.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>The status of the warm pool associated with the training job.</p>
   */
  WarmPoolStatus?: WarmPoolStatus;
}

export interface DescribeTransformJobRequest {
  /**
   * <p>The name of the transform job that you want to view details of.</p>
   */
  TransformJobName: string | undefined;
}

export enum TransformJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
}

export interface DescribeTransformJobResponse {
  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * <p>The
   *             status of the transform job. If the transform job failed, the reason
   *             is returned in the <code>FailureReason</code> field.</p>
   */
  TransformJobStatus: TransformJobStatus | string | undefined;

  /**
   * <p>If the transform job failed, <code>FailureReason</code> describes
   *             why
   *             it failed. A transform job creates a log file, which includes error
   *             messages, and stores it
   *             as
   *             an Amazon S3 object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/logging-cloudwatch.html">Log Amazon SageMaker Events with
   *                 Amazon CloudWatch</a>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the model used in the transform job.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The
   *             maximum number
   *             of
   *             parallel requests on each instance node
   *             that can be launched in a transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   */
  ModelClientConfig?: ModelClientConfig;

  /**
   * <p>The
   *             maximum
   *             payload size, in MB, used in the
   *             transform job.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference
   *             request.
   *             A <i>record</i>
   *             <i></i> is a single unit of input data that inference
   *             can be made on. For example, a single line in a CSV file is a record. </p>
   *          <p>To enable the batch strategy, you must set <code>SplitType</code>
   *             to
   *                 <code>Line</code>, <code>RecordIO</code>, or
   *             <code>TFRecord</code>.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The
   *             environment variables to set in the Docker container. We support up to 16 key and values
   *             entries in the map.</p>
   */
  Environment?: Record<string, string>;

  /**
   * <p>Describes the dataset to be transformed and the Amazon S3 location where it is
   *             stored.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the
   *             transform job.</p>
   */
  TransformOutput?: TransformOutput;

  /**
   * <p>Configuration to control how SageMaker captures inference data.</p>
   */
  DataCaptureConfig?: BatchDataCaptureConfig;

  /**
   * <p>Describes
   *             the resources, including ML instance types and ML instance count, to
   *             use for the transform job.</p>
   */
  TransformResources: TransformResources | undefined;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates when the transform job starts
   *             on
   *             ML instances. You are billed for the time interval between this time
   *             and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;

  /**
   * <p>Indicates when the transform job has been
   *
   *             completed, or has stopped or failed. You are billed for the time
   *             interval between this time and the value of <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML transform job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The data structure used to specify the data to be used for inference in a batch
   *             transform job and to associate the data that is relevant to the prediction results in
   *             the output. The input filter provided allows you to exclude input data that is not
   *             needed for inference in a batch transform job. The output filter provided allows you to
   *             include input data relevant to interpreting the predictions in the output from the job.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
   *                 Results with their Corresponding Input Records</a>.</p>
   */
  DataProcessing?: DataProcessing;

  /**
   * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when
   *       you call the following APIs:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateProcessingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTrainingJob</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateTransformJob</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  ExperimentConfig?: ExperimentConfig;
}

export interface DescribeTrialRequest {
  /**
   * <p>The name of the trial to describe.</p>
   */
  TrialName: string | undefined;
}

/**
 * <p>The source of the trial.</p>
 */
export interface TrialSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

export interface DescribeTrialResponse {
  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment the trial is part of.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   */
  Source?: TrialSource;

  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the trial was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;
}

export interface DescribeTrialComponentRequest {
  /**
   * <p>The name of the trial component to describe.</p>
   */
  TrialComponentName: string | undefined;
}

/**
 * <p>A summary of the metrics of a trial component.</p>
 */
export interface TrialComponentMetricSummary {
  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>When the metric was last updated.</p>
   */
  TimeStamp?: Date;

  /**
   * <p>The maximum value of the metric.</p>
   */
  Max?: number;

  /**
   * <p>The minimum value of the metric.</p>
   */
  Min?: number;

  /**
   * <p>The most recent value of the metric.</p>
   */
  Last?: number;

  /**
   * <p>The number of samples used to generate the metric.</p>
   */
  Count?: number;

  /**
   * <p>The average value of the metric.</p>
   */
  Avg?: number;

  /**
   * <p>The standard deviation of the metric.</p>
   */
  StdDev?: number;
}

/**
 * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
 */
export interface TrialComponentSource {
  /**
   * <p>The source Amazon Resource Name (ARN).</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

export interface DescribeTrialComponentResponse {
  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   */
  Source?: TrialComponentSource;

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
   */
  Status?: TrialComponentStatus;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the trial component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Who last modified the component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: Record<string, TrialComponentParameterValue>;

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact>;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   */
  MetadataProperties?: MetadataProperties;

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;

  /**
   * <p>A list of ARNs and, if applicable, job types for multiple sources of an experiment
   *       run.</p>
   */
  Sources?: TrialComponentSource[];
}

export interface DescribeUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name. This value is not case sensitive.</p>
   */
  UserProfileName: string | undefined;
}

export enum UserProfileStatus {
  Delete_Failed = "Delete_Failed",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Update_Failed = "Update_Failed",
  Updating = "Updating",
}

export interface DescribeUserProfileResponse {
  /**
   * <p>The ID of the domain that contains the profile.</p>
   */
  DomainId?: string;

  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>The ID of the user's profile in the Amazon Elastic File System (EFS) volume.</p>
   */
  HomeEfsFileSystemUid?: string;

  /**
   * <p>The status.</p>
   */
  Status?: UserProfileStatus | string;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The IAM Identity Center user identifier.</p>
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * <p>The IAM Identity Center user value.</p>
   */
  SingleSignOnUserValue?: string;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

export interface DescribeWorkforceRequest {
  /**
   * <p>The name of the private workforce whose access you want to restrict.
   *                 <code>WorkforceName</code> is automatically set to <code>default</code> when a
   *             workforce is created and cannot be modified. </p>
   */
  WorkforceName: string | undefined;
}

/**
 * <p>Your OIDC IdP workforce configuration.</p>
 */
export interface OidcConfigForResponse {
  /**
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   */
  ClientId?: string;

  /**
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   */
  Issuer?: string;

  /**
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   */
  AuthorizationEndpoint?: string;

  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   */
  TokenEndpoint?: string;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   */
  UserInfoEndpoint?: string;

  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   */
  LogoutEndpoint?: string;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   */
  JwksUri?: string;
}

export enum WorkforceStatus {
  ACTIVE = "Active",
  DELETING = "Deleting",
  FAILED = "Failed",
  INITIALIZING = "Initializing",
  UPDATING = "Updating",
}

/**
 * <p>A VpcConfig object that specifies the VPC that you want your workforce to connect to.</p>
 */
export interface WorkforceVpcConfigResponse {
  /**
   * <p>The ID of the VPC that the workforce uses for communication.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnets in the VPC that you want to connect.</p>
   */
  Subnets: string[] | undefined;

  /**
   * <p>The IDs for the VPC service endpoints of your VPC workforce when it is created and updated.</p>
   */
  VpcEndpointId?: string;
}

/**
 * <p>A single private workforce, which is automatically created when you create your first
 *             private work team. You can create one private work force in each Amazon Web Services Region. By default,
 *             any workforce-related API operation used in a specific region will apply to the
 *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
 */
export interface Workforce {
  /**
   * <p>The name of the private workforce.</p>
   */
  WorkforceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the private workforce.</p>
   */
  WorkforceArn: string | undefined;

  /**
   * <p>The most recent date that  was used to
   *             successfully add one or more IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to a private workforce's
   *             allow list.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>A list of one to ten IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to be added to the
   *             workforce allow list. By default, a workforce isn't restricted to specific IP addresses.</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>The subdomain for your OIDC Identity Provider.</p>
   */
  SubDomain?: string;

  /**
   * <p>The configuration of an Amazon Cognito workforce.
   *       A single Cognito workforce is created using and corresponds to a single
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       Amazon Cognito user pool</a>.</p>
   */
  CognitoConfig?: CognitoConfig;

  /**
   * <p>The configuration of an OIDC Identity Provider (IdP) private workforce.</p>
   */
  OidcConfig?: OidcConfigForResponse;

  /**
   * <p>The date that the workforce is created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The configuration of a VPC workforce.</p>
   */
  WorkforceVpcConfig?: WorkforceVpcConfigResponse;

  /**
   * <p>The status of your workforce.</p>
   */
  Status?: WorkforceStatus | string;

  /**
   * <p>The reason your workforce failed.</p>
   */
  FailureReason?: string;
}

export interface DescribeWorkforceResponse {
  /**
   * <p>A single private workforce, which is automatically created when you create your first
   *             private work team. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

export interface DescribeWorkteamRequest {
  /**
   * <p>The name of the work team to return a description of.</p>
   */
  WorkteamName: string | undefined;
}

/**
 * <p>Provides details about a labeling work team.</p>
 */
export interface Workteam {
  /**
   * <p>The name of the work team.</p>
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *          <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the work team.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   */
  WorkforceArn?: string;

  /**
   * <p>The Amazon Marketplace identifier for a vendor's work team.</p>
   */
  ProductListingIds?: string[];

  /**
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * <p>The URI of the labeling job's user interface. Workers open this URI to start labeling
   *             your data objects.</p>
   */
  SubDomain?: string;

  /**
   * <p>The date and time that the work team was created (timestamp).</p>
   */
  CreateDate?: Date;

  /**
   * <p>The date and time that the work team was last updated (timestamp).</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Configures SNS notifications of available or expiring work items for work
   *             teams.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;
}

export interface DescribeWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.
   *         </p>
   */
  Workteam: Workteam | undefined;
}

/**
 * <p>Specifies weight and capacity values for a production variant.</p>
 */
export interface DesiredWeightAndCapacity {
  /**
   * <p>The name of the variant to update.</p>
   */
  VariantName: string | undefined;

  /**
   * <p>The variant's weight.</p>
   */
  DesiredWeight?: number;

  /**
   * <p>The variant's capacity.</p>
   */
  DesiredInstanceCount?: number;
}

/**
 * <p>Information of a particular device.</p>
 */
export interface Device {
  /**
   * <p>The name of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>Description of the device.</p>
   */
  Description?: string;

  /**
   * <p>Amazon Web Services Internet of Things (IoT) object name.</p>
   */
  IotThingName?: string;
}

export enum DeviceDeploymentStatus {
  Deployed = "DEPLOYED",
  Failed = "FAILED",
  InProgress = "INPROGRESS",
  ReadyToDeploy = "READYTODEPLOY",
  Stopped = "STOPPED",
  Stopping = "STOPPING",
}

/**
 * <p>Contains information summarizing device details and deployment status.</p>
 */
export interface DeviceDeploymentSummary {
  /**
   * <p>The ARN of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage in the edge deployment plan.</p>
   */
  StageName: string | undefined;

  /**
   * <p>The name of the deployed stage.</p>
   */
  DeployedStageName?: string;

  /**
   * <p>The name of the fleet to which the device belongs to.</p>
   */
  DeviceFleetName?: string;

  /**
   * <p>The name of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>The ARN of the device.</p>
   */
  DeviceArn: string | undefined;

  /**
   * <p>The deployment status of the device.</p>
   */
  DeviceDeploymentStatus?: DeviceDeploymentStatus | string;

  /**
   * <p>The detailed error message for the deployoment status result.</p>
   */
  DeviceDeploymentStatusMessage?: string;

  /**
   * <p>The description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The time when the deployment on the device started.</p>
   */
  DeploymentStartTime?: Date;
}

/**
 * <p>Summary of the device fleet.</p>
 */
export interface DeviceFleetSummary {
  /**
   * <p>Amazon Resource Name (ARN) of the device fleet.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>Name of the device fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>Timestamp of when the device fleet was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Timestamp of when the device fleet was last updated.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * <p>Status of devices.</p>
 */
export interface DeviceStats {
  /**
   * <p>The number of devices connected with a heartbeat.</p>
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * <p>The number of registered devices.</p>
   */
  RegisteredDeviceCount: number | undefined;
}

/**
 * <p>Summary of model on edge device.</p>
 */
export interface EdgeModelSummary {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The version model.</p>
   */
  ModelVersion: string | undefined;
}

/**
 * <p>Summary of the device.</p>
 */
export interface DeviceSummary {
  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceArn: string | undefined;

  /**
   * <p>A description of the device.</p>
   */
  Description?: string;

  /**
   * <p>The name of the fleet the device belongs to.</p>
   */
  DeviceFleetName?: string;

  /**
   * <p>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device..</p>
   */
  IotThingName?: string;

  /**
   * <p>The timestamp of the last registration or de-reregistration.</p>
   */
  RegistrationTime?: Date;

  /**
   * <p>The last heartbeat received from the device.</p>
   */
  LatestHeartbeat?: Date;

  /**
   * <p>Models on the device.</p>
   */
  Models?: EdgeModelSummary[];

  /**
   * <p>Edge Manager agent version.</p>
   */
  AgentVersion?: string;
}

export enum Direction {
  ASCENDANTS = "Ascendants",
  BOTH = "Both",
  DESCENDANTS = "Descendants",
}

export interface DisableSagemakerServicecatalogPortfolioInput {}

export interface DisableSagemakerServicecatalogPortfolioOutput {}

export interface DisassociateTrialComponentRequest {
  /**
   * <p>The name of the component to disassociate from the trial.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the trial to disassociate from.</p>
   */
  TrialName: string | undefined;
}

export interface DisassociateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

/**
 * <p>The domain's details.</p>
 */
export interface DomainDetails {
  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The status.</p>
   */
  Status?: DomainStatus | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The domain's URL.</p>
   */
  Url?: string;
}

/**
 * <p>A collection of settings that update the current configuration for the
 *                 <code>RStudioServerPro</code> Domain-level app.</p>
 */
export interface RStudioServerProDomainSettingsForUpdate {
  /**
   * <p>The execution role for the <code>RStudioServerPro</code> Domain-level app.</p>
   */
  DomainExecutionRoleArn: string | undefined;

  /**
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *      the version runs on.</p>
   */
  DefaultResourceSpec?: ResourceSpec;

  /**
   * <p>A URL pointing to an RStudio Connect server.</p>
   */
  RStudioConnectUrl?: string;

  /**
   * <p>A URL pointing to an RStudio Package Manager server.</p>
   */
  RStudioPackageManagerUrl?: string;
}

/**
 * <p>A collection of <code>Domain</code> configuration settings to update.</p>
 */
export interface DomainSettingsForUpdate {
  /**
   * <p>A collection of <code>RStudioServerPro</code> Domain-level app settings to
   *             update.</p>
   */
  RStudioServerProDomainSettingsForUpdate?: RStudioServerProDomainSettingsForUpdate;

  /**
   * <p>The configuration for attaching a SageMaker user profile name to the execution role as a
   *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html">sts:SourceIdentity key</a>. This configuration can only be modified if there
   *             are no apps in the <code>InService</code> or <code>Pending</code> state.</p>
   */
  ExecutionRoleIdentityConfig?: ExecutionRoleIdentityConfig | string;

  /**
   * <p>The security groups for the Amazon Virtual Private Cloud that the <code>Domain</code> uses for
   *             communication between Domain-level apps and user apps.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * <p>A directed edge connecting two lineage entities.</p>
 */
export interface Edge {
  /**
   * <p>The Amazon Resource Name (ARN) of the source lineage entity of the directed edge.</p>
   */
  SourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination lineage entity of the directed edge.</p>
   */
  DestinationArn?: string;

  /**
   * <p>The type of the Association(Edge) between the source and destination. For example <code>ContributedTo</code>,
   *          <code>Produced</code>, or <code>DerivedFrom</code>.</p>
   */
  AssociationType?: AssociationEdgeType | string;
}

/**
 * <p>Contains information summarizing an edge deployment plan.</p>
 */
export interface EdgeDeploymentPlanSummary {
  /**
   * <p>The ARN of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * <p>The name of the edge deployment plan.</p>
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the device fleet used for the deployment. </p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The number of edge devices with the successful deployment.</p>
   */
  EdgeDeploymentSuccess: number | undefined;

  /**
   * <p>The number of edge devices yet to pick up the deployment, or in progress.</p>
   */
  EdgeDeploymentPending: number | undefined;

  /**
   * <p>The number of edge devices that failed the deployment.</p>
   */
  EdgeDeploymentFailed: number | undefined;

  /**
   * <p>The time when the edge deployment plan was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the edge deployment plan was last updated.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * <p>Status of edge devices with this model.</p>
 */
export interface EdgeModelStat {
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The model version.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>The number of devices that have this model version and do not have a heart beat.</p>
   */
  OfflineDeviceCount: number | undefined;

  /**
   * <p>The number of devices that have this model version and have a heart beat. </p>
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * <p>The number of devices that have this model version, a heart beat, and are currently running.</p>
   */
  ActiveDeviceCount: number | undefined;

  /**
   * <p>The number of devices with this model version and are producing sample data.</p>
   */
  SamplingDeviceCount: number | undefined;
}

/**
 * <p>Summary of edge packaging job.</p>
 */
export interface EdgePackagingJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the edge packaging job.</p>
   */
  EdgePackagingJobArn: string | undefined;

  /**
   * <p>The name of the edge packaging job.</p>
   */
  EdgePackagingJobName: string | undefined;

  /**
   * <p>The status of the edge packaging job.</p>
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | string | undefined;

  /**
   * <p>The name of the SageMaker Neo compilation job.</p>
   */
  CompilationJobName?: string;

  /**
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The timestamp of when the job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The timestamp of when the edge packaging job was last updated.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * <p>The configurations and outcomes of an Amazon EMR step execution.</p>
 */
export interface EMRStepMetadata {
  /**
   * <p>The identifier of the EMR cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>The identifier of the EMR cluster step.</p>
   */
  StepId?: string;

  /**
   * <p>The name of the EMR cluster step.</p>
   */
  StepName?: string;

  /**
   * <p>The path to the log file where the cluster step's failure root cause
   *             is recorded.</p>
   */
  LogFilePath?: string;
}

export interface EnableSagemakerServicecatalogPortfolioInput {}

export interface EnableSagemakerServicecatalogPortfolioOutput {}

/**
 * <p>A schedule for a model monitoring job. For information about model monitor, see
 *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model
 *                 Monitor</a>.</p>
 */
export interface MonitoringSchedule {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * <p>The status of the monitoring schedule. This can be one of the following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The schedule is pending being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The schedule failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SCHEDULED</code> - The schedule was successfully created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> - The schedule was stopped.</p>
   *             </li>
   *          </ul>
   */
  MonitoringScheduleStatus?: ScheduleStatus | string;

  /**
   * <p>The type of the monitoring job definition to schedule.</p>
   */
  MonitoringType?: MonitoringType | string;

  /**
   * <p>If the monitoring schedule failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time that the monitoring schedule was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last time the monitoring schedule was changed.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Configures the monitoring schedule and defines the monitoring job.</p>
   */
  MonitoringScheduleConfig?: MonitoringScheduleConfig;

  /**
   * <p>The endpoint that hosts the model being monitored.</p>
   */
  EndpointName?: string;

  /**
   * <p>Summary of information about the last monitoring job to run.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;

  /**
   * <p>A list of the tags associated with the monitoring schedlue. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>A hosted endpoint for real-time inference.</p>
 */
export interface Endpoint {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The endpoint configuration associated with the endpoint.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>A list of the production variants hosted on the endpoint. Each production variant is a
   *             model.</p>
   */
  ProductionVariants?: ProductionVariantSummary[];

  /**
   * <p>The currently active data capture configuration used by your Endpoint.</p>
   */
  DataCaptureConfig?: DataCaptureConfigSummary;

  /**
   * <p>The status of the endpoint.</p>
   */
  EndpointStatus: EndpointStatus | string | undefined;

  /**
   * <p>If the endpoint failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time that the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time the endpoint was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A list of monitoring schedules for the endpoint. For information about model
   *             monitoring, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.</p>
   */
  MonitoringSchedules?: MonitoringSchedule[];

  /**
   * <p>A list of the tags associated with the endpoint. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General
   *                 Reference Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of the shadow variants hosted on the endpoint. Each shadow variant is a model
   *             in shadow mode with production traffic replicated from the production variant.</p>
   */
  ShadowProductionVariants?: ProductionVariantSummary[];
}

export enum EndpointConfigSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
}

/**
 * <p>Provides summary information for an endpoint configuration.</p>
 */
export interface EndpointConfigSummary {
  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;
}

export enum EndpointSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
  Status = "Status",
}

/**
 * <p>Provides summary information for an endpoint.</p>
 */
export interface EndpointSummary {
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

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
   *                   <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p>
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
   *                     capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <a>DescribeEndpointOutput$FailureReason</a> for information about
   *                     the failure. <a>DeleteEndpoint</a> is the only operation that can be
   *                     performed on a failed endpoint.</p>
   *             </li>
   *          </ul>
   *          <p>To get a list of endpoints with a specified status, use the <a>ListEndpointsInput$StatusEquals</a> filter.</p>
   */
  EndpointStatus: EndpointStatus | string | undefined;
}

/**
 * <p>The properties of an experiment as returned by the <a>Search</a> API.</p>
 */
export interface Experiment {
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The source of the experiment.</p>
   */
  Source?: ExperimentSource;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Who created the experiment.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>The list of tags that are associated with the experiment. You can use <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>A summary of the properties of an experiment. To get the complete set of properties, call
 *       the <a>DescribeExperiment</a> API and provide the
 *       <code>ExperimentName</code>.</p>
 */
export interface ExperimentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The source of the experiment.</p>
   */
  ExperimentSource?: ExperimentSource;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * <p>The container for the metadata for Fail step.</p>
 */
export interface FailStepMetadata {
  /**
   * <p>A message that you define and then is processed and rendered by
   *          the Fail step when the error occurs.</p>
   */
  ErrorMessage?: string;
}

/**
 * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group.
 *          A Feature Group can be visualized as a table which has rows,
 *          with a unique identifier for each row where each column in the table is a feature.
 *          In principle, a Feature Group is composed of features and values per features.</p>
 */
export interface FeatureGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of a <code>FeatureGroup</code>.</p>
   */
  FeatureGroupArn?: string;

  /**
   * <p>The name of the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName?: string;

  /**
   * <p>The name of the <code>Feature</code> whose value uniquely identifies a
   *       <code>Record</code> defined in the <code>FeatureGroup</code>
   *             <code>FeatureDefinitions</code>.</p>
   */
  RecordIdentifierFeatureName?: string;

  /**
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a
   *          <code>FeatureGroup</code>.</p>
   *          <p>A <code>EventTime</code> is point in time when a new event
   *          occurs that corresponds to the creation or update of a <code>Record</code> in
   *          <code>FeatureGroup</code>. All <code>Records</code> in the <code>FeatureGroup</code>
   *          must have a corresponding <code>EventTime</code>.</p>
   */
  EventTimeFeatureName?: string;

  /**
   * <p>A list of <code>Feature</code>s. Each <code>Feature</code> must include a
   *             <code>FeatureName</code> and a <code>FeatureType</code>. </p>
   *          <p>Valid <code>FeatureType</code>s are <code>Integral</code>, <code>Fractional</code> and
   *             <code>String</code>. </p>
   *          <p>
   *             <code>FeatureName</code>s cannot be any of the following: <code>is_deleted</code>,
   *             <code>write_time</code>, <code>api_invocation_time</code>.</p>
   *          <p>You can create up to 2,500 <code>FeatureDefinition</code>s per
   *          <code>FeatureGroup</code>.</p>
   */
  FeatureDefinitions?: FeatureDefinition[];

  /**
   * <p>The time a <code>FeatureGroup</code> was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp indicating the last time you updated the feature group.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or
   *             <code>KMSKeyId</code>, for at rest data encryption. You can turn
   *             <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag
   *          at General Assembly; the default value is <code>False</code>.</p>
   */
  OnlineStoreConfig?: OnlineStoreConfig;

  /**
   * <p>The configuration of an <code>OfflineStore</code>.</p>
   *          <p>Provide an <code>OfflineStoreConfig</code> in a request to
   *             <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p>
   *          <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key
   *          Management Service (KMS) key ID, or <code>KMSKeyId</code>, in
   *          <code>S3StorageConfig</code>.</p>
   */
  OfflineStoreConfig?: OfflineStoreConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to create the feature
   *          group.</p>
   */
  RoleArn?: string;

  /**
   * <p>A <code>FeatureGroup</code> status.</p>
   */
  FeatureGroupStatus?: FeatureGroupStatus | string;

  /**
   * <p>The status of <code>OfflineStore</code>.</p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;

  /**
   * <p>A value that indicates whether the feature group was updated successfully.</p>
   */
  LastUpdateStatus?: LastUpdateStatus;

  /**
   * <p>The reason that the <code>FeatureGroup</code> failed to
   *          be replicated in the <code>OfflineStore</code>. This is
   *          failure may be due to a failure to create a <code>FeatureGroup</code> in
   *          or delete a <code>FeatureGroup</code> from the <code>OfflineStore</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>A free form description of a <code>FeatureGroup</code>.</p>
   */
  Description?: string;

  /**
   * <p>Tags used to define a <code>FeatureGroup</code>.</p>
   */
  Tags?: Tag[];
}

export enum FeatureGroupSortBy {
  CREATION_TIME = "CreationTime",
  FEATURE_GROUP_STATUS = "FeatureGroupStatus",
  NAME = "Name",
  OFFLINE_STORE_STATUS = "OfflineStoreStatus",
}

export enum FeatureGroupSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

/**
 * <p>The name, Arn, <code>CreationTime</code>, <code>FeatureGroup</code> values,
 *             <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a
 *             <code>FeatureGroup</code>.</p>
 */
export interface FeatureGroupSummary {
  /**
   * <p>The name of <code>FeatureGroup</code>.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>Unique identifier for the <code>FeatureGroup</code>.</p>
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>A timestamp indicating the time of creation time of the <code>FeatureGroup</code>.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of a FeatureGroup. The status can be any of the following:
   *             <code>Creating</code>, <code>Created</code>, <code>CreateFail</code>,
   *             <code>Deleting</code> or <code>DetailFail</code>. </p>
   */
  FeatureGroupStatus?: FeatureGroupStatus | string;

  /**
   * <p>Notifies you if replicating data into the <code>OfflineStore</code> has failed. Returns
   *          either: <code>Active</code> or <code>Blocked</code>.</p>
   */
  OfflineStoreStatus?: OfflineStoreStatus;
}

/**
 * <p>The metadata for a feature. It can either be metadata that you specify, or metadata that is updated automatically.</p>
 */
export interface FeatureMetadata {
  /**
   * <p>The Amazon Resource Number (ARN) of the feature group.</p>
   */
  FeatureGroupArn?: string;

  /**
   * <p>The name of the feature group containing the feature.</p>
   */
  FeatureGroupName?: string;

  /**
   * <p>The name of feature.</p>
   */
  FeatureName?: string;

  /**
   * <p>The data type of the feature.</p>
   */
  FeatureType?: FeatureType | string;

  /**
   * <p>A timestamp indicating when the feature was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp indicating when the feature was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>An optional description that you specify to better describe the feature.</p>
   */
  Description?: string;

  /**
   * <p>Optional key-value pairs that you specify to better describe the feature.</p>
   */
  Parameters?: FeatureParameter[];
}

export enum Operator {
  CONTAINS = "Contains",
  EQUALS = "Equals",
  EXISTS = "Exists",
  GREATER_THAN = "GreaterThan",
  GREATER_THAN_OR_EQUAL_TO = "GreaterThanOrEqualTo",
  IN = "In",
  LESS_THAN = "LessThan",
  LESS_THAN_OR_EQUAL_TO = "LessThanOrEqualTo",
  NOT_EQUALS = "NotEquals",
  NOT_EXISTS = "NotExists",
}

/**
 * <p>A conditional statement for a search expression that includes a resource property, a
 *       Boolean operator, and a value. Resources that match the statement are returned in the
 *       results from the <a>Search</a> API.</p>
 *          <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, Amazon SageMaker uses the
 *       equals operator.</p>
 *          <p>In search, there are several property types:</p>
 *          <dl>
 *             <dt>Metrics</dt>
 *             <dd>
 *                <p>To define a metric filter, enter a value using the form
 *             <code>"Metrics.<name>"</code>, where <code><name></code> is
 *             a metric name. For example, the following filter searches for training jobs
 *             with an <code>"accuracy"</code> metric greater than
 *             <code>"0.9"</code>:</p>
 *                <p>
 *                   <code>{</code>
 *                </p>
 *                <p>
 *                   <code>"Name": "Metrics.accuracy",</code>
 *                </p>
 *                <p>
 *                   <code>"Operator": "GreaterThan",</code>
 *                </p>
 *                <p>
 *                   <code>"Value": "0.9"</code>
 *                </p>
 *                <p>
 *                   <code>}</code>
 *                </p>
 *             </dd>
 *             <dt>HyperParameters</dt>
 *             <dd>
 *                <p>To define a hyperparameter filter, enter a value with the form
 *             <code>"HyperParameters.<name>"</code>. Decimal hyperparameter
 *             values are treated as a decimal in a comparison if the specified
 *             <code>Value</code> is also a decimal value. If the specified
 *             <code>Value</code> is an integer, the decimal hyperparameter values are
 *             treated as integers. For example, the following filter is satisfied by
 *             training jobs with a <code>"learning_rate"</code> hyperparameter that is
 *             less than <code>"0.5"</code>:</p>
 *                <p>
 *                   <code> {</code>
 *                </p>
 *                <p>
 *                   <code> "Name": "HyperParameters.learning_rate",</code>
 *                </p>
 *                <p>
 *                   <code> "Operator": "LessThan",</code>
 *                </p>
 *                <p>
 *                   <code> "Value": "0.5"</code>
 *                </p>
 *                <p>
 *                   <code> }</code>
 *                </p>
 *             </dd>
 *             <dt>Tags</dt>
 *             <dd>
 *                <p>To define a tag filter, enter a value with the form
 *             <code>Tags.<key></code>.</p>
 *             </dd>
 *          </dl>
 */
export interface Filter {
  /**
   * <p>A resource property name. For example, <code>TrainingJobName</code>. For
   *       valid property names, see <a>SearchRecord</a>.
   *       You must specify a valid property for the resource.</p>
   */
  Name: string | undefined;

  /**
   * <p>A Boolean binary operator that is used to evaluate the filter. The operator field
   *       contains one of the following values:</p>
   *          <dl>
   *             <dt>Equals</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> equals <code>Value</code>.</p>
   *             </dd>
   *             <dt>NotEquals</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> doesn't equal <code>Value</code>.</p>
   *             </dd>
   *             <dt>Exists</dt>
   *             <dd>
   *                <p>The <code>Name</code> property exists.</p>
   *             </dd>
   *             <dt>NotExists</dt>
   *             <dd>
   *                <p>The <code>Name</code> property does not exist.</p>
   *             </dd>
   *             <dt>GreaterThan</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is greater than <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>GreaterThanOrEqualTo</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is greater than or equal to <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>LessThan</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is less than <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>LessThanOrEqualTo</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is less than or equal to <code>Value</code>.
   *             Not supported for text properties.</p>
   *             </dd>
   *             <dt>In</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> is one of the comma delimited strings in
   *             <code>Value</code>. Only supported for text properties.</p>
   *             </dd>
   *             <dt>Contains</dt>
   *             <dd>
   *                <p>The value of <code>Name</code> contains the string <code>Value</code>.
   *             Only supported for text properties.</p>
   *                <p>A <code>SearchExpression</code> can include the <code>Contains</code> operator
   *             multiple times when the value of <code>Name</code> is one of the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.ExperimentName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Experiment.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.TrialName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Trial.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.DisplayName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.TrialComponentName</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.Tags</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.InputArtifacts</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TrialComponent.OutputArtifacts</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>A <code>SearchExpression</code> can include only one <code>Contains</code> operator
   *             for all other values of <code>Name</code>. In these cases, if you include multiple
   *             <code>Contains</code> operators in the <code>SearchExpression</code>, the result is
   *             the following error message: "<code>'CONTAINS' operator usage limit of 1
   *             exceeded.</code>"</p>
   *             </dd>
   *          </dl>
   */
  Operator?: Operator | string;

  /**
   * <p>A value used with <code>Name</code> and <code>Operator</code> to determine which
   *         resources satisfy the filter's condition. For numerical properties, <code>Value</code>
   *         must be an integer or floating-point decimal. For timestamp properties,
   *         <code>Value</code> must be an ISO 8601 date-time string of the following format:
   *         <code>YYYY-mm-dd'T'HH:MM:SS</code>.</p>
   */
  Value?: string;
}

/**
 * <p>Contains summary information about the flow definition.</p>
 */
export interface FlowDefinitionSummary {
  /**
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values:</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | string | undefined;

  /**
   * <p>The timestamp when SageMaker created the flow definition.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is <code>Failed</code>.</p>
   */
  FailureReason?: string;
}

export interface GetDeviceFleetReportRequest {
  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;
}

export interface GetDeviceFleetReportResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>The name of the fleet.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The output configuration for storing sample data collected by the fleet.</p>
   */
  OutputConfig?: EdgeOutputConfig;

  /**
   * <p>Description of the fleet.</p>
   */
  Description?: string;

  /**
   * <p>Timestamp of when the report was generated.</p>
   */
  ReportGenerated?: Date;

  /**
   * <p>Status of devices.</p>
   */
  DeviceStats?: DeviceStats;

  /**
   * <p>The versions of Edge Manager agent deployed on the fleet.</p>
   */
  AgentVersions?: AgentVersion[];

  /**
   * <p>Status of model on device.</p>
   */
  ModelStats?: EdgeModelStat[];
}

export interface GetLineageGroupPolicyRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupName: string | undefined;
}

export interface GetLineageGroupPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupArn?: string;

  /**
   * <p>The resource policy that gives access to the lineage group in another account.</p>
   */
  ResourcePolicy?: string;
}

export interface GetModelPackageGroupPolicyInput {
  /**
   * <p>The name of the model group for which to get the resource policy.</p>
   */
  ModelPackageGroupName: string | undefined;
}

export interface GetModelPackageGroupPolicyOutput {
  /**
   * <p>The resource policy for the model group.</p>
   */
  ResourcePolicy: string | undefined;
}

export interface GetSagemakerServicecatalogPortfolioStatusInput {}

export enum SagemakerServicecatalogStatus {
  DISABLED = "Disabled",
  ENABLED = "Enabled",
}

export interface GetSagemakerServicecatalogPortfolioStatusOutput {
  /**
   * <p>Whether Service Catalog is enabled or disabled in SageMaker.</p>
   */
  Status?: SagemakerServicecatalogStatus | string;
}

export enum ResourceType {
  ENDPOINT = "Endpoint",
  EXPERIMENT = "Experiment",
  EXPERIMENT_TRIAL = "ExperimentTrial",
  EXPERIMENT_TRIAL_COMPONENT = "ExperimentTrialComponent",
  FEATURE_GROUP = "FeatureGroup",
  FEATURE_METADATA = "FeatureMetadata",
  HYPER_PARAMETER_TUNING_JOB = "HyperParameterTuningJob",
  MODEL = "Model",
  MODEL_CARD = "ModelCard",
  MODEL_PACKAGE = "ModelPackage",
  MODEL_PACKAGE_GROUP = "ModelPackageGroup",
  PIPELINE = "Pipeline",
  PIPELINE_EXECUTION = "PipelineExecution",
  PROJECT = "Project",
  TRAINING_JOB = "TrainingJob",
}

/**
 * <p>Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property
 *       names that begin with the specified text.</p>
 */
export interface PropertyNameQuery {
  /**
   * <p>Text that begins a property's name.</p>
   */
  PropertyNameHint: string | undefined;
}

/**
 * <p>Specified in the <a>GetSearchSuggestions</a> request.
 *       Limits the property names that are included in the response.</p>
 */
export interface SuggestionQuery {
  /**
   * <p>Defines a property name hint. Only property
   *       names that begin with the specified hint are included in the response.</p>
   */
  PropertyNameQuery?: PropertyNameQuery;
}

export interface GetSearchSuggestionsRequest {
  /**
   * <p>The name of the Amazon SageMaker resource to search for.</p>
   */
  Resource: ResourceType | string | undefined;

  /**
   * <p>Limits the property names that are included in the response.</p>
   */
  SuggestionQuery?: SuggestionQuery;
}

/**
 * <p>A property name returned from a <code>GetSearchSuggestions</code> call that specifies
 *       a value in the <code>PropertyNameQuery</code> field.</p>
 */
export interface PropertyNameSuggestion {
  /**
   * <p>A suggested property name based on what you entered in the search textbox in the Amazon SageMaker
   *       console.</p>
   */
  PropertyName?: string;
}

export interface GetSearchSuggestionsResponse {
  /**
   * <p>A list of property names for a <code>Resource</code> that match a
   *       <code>SuggestionQuery</code>.</p>
   */
  PropertyNameSuggestions?: PropertyNameSuggestion[];
}

/**
 * <p>Specifies configuration details for a Git repository when the repository is
 *             updated.</p>
 */
export interface GitConfigForUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that
   *             contains the credentials used to access the git repository. The secret must have a
   *             staging label of <code>AWSCURRENT</code> and must be in the following format:</p>
   *          <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *          </p>
   */
  SecretArn?: string;
}

/**
 * <p>Information about hub content.</p>
 */
export interface HubContentInfo {
  /**
   * <p>The name of the hub content.</p>
   */
  HubContentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hub content.</p>
   */
  HubContentArn: string | undefined;

  /**
   * <p>The version of the hub content.</p>
   */
  HubContentVersion: string | undefined;

  /**
   * <p>The type of hub content.</p>
   */
  HubContentType: HubContentType | string | undefined;

  /**
   * <p>The version of the hub content document schema.</p>
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * <p>The display name of the hub content.</p>
   */
  HubContentDisplayName?: string;

  /**
   * <p>A description of the hub content.</p>
   */
  HubContentDescription?: string;

  /**
   * <p>The searchable keywords for the hub content.</p>
   */
  HubContentSearchKeywords?: string[];

  /**
   * <p>The status of the hub content.</p>
   */
  HubContentStatus: HubContentStatus | string | undefined;

  /**
   * <p>The date and time that the hub content was created.</p>
   */
  CreationTime: Date | undefined;
}

export enum HubContentSortBy {
  CREATION_TIME = "CreationTime",
  HUB_CONTENT_NAME = "HubContentName",
  HUB_CONTENT_STATUS = "HubContentStatus",
}

/**
 * <p>Information about a hub.</p>
 */
export interface HubInfo {
  /**
   * <p>The name of the hub.</p>
   */
  HubName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hub.</p>
   */
  HubArn: string | undefined;

  /**
   * <p>The display name of the hub.</p>
   */
  HubDisplayName?: string;

  /**
   * <p>A description of the hub.</p>
   */
  HubDescription?: string;

  /**
   * <p>The searchable keywords for the hub.</p>
   */
  HubSearchKeywords?: string[];

  /**
   * <p>The status of the hub.</p>
   */
  HubStatus: HubStatus | string | undefined;

  /**
   * <p>The date and time that the hub was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the hub was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

export enum HubSortBy {
  ACCOUNT_ID_OWNER = "AccountIdOwner",
  CREATION_TIME = "CreationTime",
  HUB_NAME = "HubName",
  HUB_STATUS = "HubStatus",
}

/**
 * <p>Container for human task user interface information.</p>
 */
export interface HumanTaskUiSummary {
  /**
   * <p>The name of the human task user interface.</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>A timestamp when SageMaker created the human task user interface.</p>
   */
  CreationTime: Date | undefined;
}

/**
 * <p>An entity returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SearchRecord.html">SearchRecord</a> API
 *             containing the properties of a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobSearchEntity {
  /**
   * <p>The name of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobArn?: string;

  /**
   * <p>Configures a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobConfig?: HyperParameterTuningJobConfig;

  /**
   * <p>Defines
   *             the training jobs launched by a hyperparameter tuning job.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p>The job definitions included in a hyperparameter tuning job.</p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>The status of a hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobStatus?: HyperParameterTuningJobStatus | string;

  /**
   * <p>The time that a hyperparameter tuning job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that a hyperparameter tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The time that a hyperparameter tuning job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
   *             status.</p>
   */
  TrainingJobStatusCounters?: TrainingJobStatusCounters;

  /**
   * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
   *             categorized by the status of their objective metric. The objective metric status shows
   *             whether the
   *             final
   *             objective metric for the training job has been evaluated by the
   *             tuning job and used in the hyperparameter tuning process.</p>
   */
  ObjectiveStatusCounters?: ObjectiveStatusCounters;

  /**
   * <p>The container for the summary information about a training job.</p>
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>The container for the summary information about a training job.</p>
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more
   *             previous hyperparameter tuning jobs as a starting point. The results of previous tuning
   *             jobs are used to inform which combinations of hyperparameters to search over in the new
   *             tuning job.</p>
   *          <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using
   *             the objective metric, and the training job that performs the best is compared to the
   *             best training jobs from the parent tuning jobs. From these, the training job that
   *             performs the best as measured by the objective metric is returned as the overall best
   *             training job.</p>
   *          <note>
   *             <p>All training jobs launched by parent hyperparameter tuning jobs and the new
   *                 hyperparameter tuning jobs count against the limit of training jobs for the tuning
   *                 job.</p>
   *          </note>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;

  /**
   * <p>The error that was created when a hyperparameter tuning job failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The tags associated with a hyperparameter tuning job. For more information see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   */
  Tags?: Tag[];
}

export enum HyperParameterTuningJobSortByOptions {
  CreationTime = "CreationTime",
  Name = "Name",
  Status = "Status",
}

/**
 * <p>Provides summary information about a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobSummary {
  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The status of the
   *             tuning
   *             job.</p>
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | string | undefined;

  /**
   * <p>Specifies the search strategy hyperparameter tuning uses to choose which
   *             hyperparameters to
   *             evaluate
   *             at each iteration.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | string | undefined;

  /**
   * <p>The date and time that the tuning job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The date and time that the tuning job was
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by objective metric status, that this tuning job
   *             launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the maximum number of
   *             training jobs and parallel training jobs allowed for this tuning job.</p>
   */
  ResourceLimits?: ResourceLimits;
}

/**
 * <p>A SageMaker image. A SageMaker image represents a set of container images that are derived from
 *         a common base container image. Each of these container images is represented by a SageMaker
 *         <code>ImageVersion</code>.</p>
 */
export interface Image {
  /**
   * <p>When the image was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The name of the image as displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The ARN of the image.</p>
   */
  ImageArn: string | undefined;

  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The status of the image.</p>
   */
  ImageStatus: ImageStatus | string | undefined;

  /**
   * <p>When the image was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

export enum ImageSortBy {
  CREATION_TIME = "CREATION_TIME",
  IMAGE_NAME = "IMAGE_NAME",
  LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME",
}

export enum ImageSortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>A version of a SageMaker <code>Image</code>. A version represents an existing container
 *         image.</p>
 */
export interface ImageVersion {
  /**
   * <p>When the version was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The ARN of the image the version is based on.</p>
   */
  ImageArn: string | undefined;

  /**
   * <p>The ARN of the version.</p>
   */
  ImageVersionArn: string | undefined;

  /**
   * <p>The status of the version.</p>
   */
  ImageVersionStatus: ImageVersionStatus | string | undefined;

  /**
   * <p>When the version was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The version number.</p>
   */
  Version: number | undefined;
}

export enum ImageVersionSortBy {
  CREATION_TIME = "CREATION_TIME",
  LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME",
  VERSION = "VERSION",
}

export enum ImageVersionSortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export interface ImportHubContentRequest {
  /**
   * <p>The name of the hub content to import.</p>
   */
  HubContentName: string | undefined;

  /**
   * <p>The version of the hub content to import.</p>
   */
  HubContentVersion?: string;

  /**
   * <p>The type of hub content to import.</p>
   */
  HubContentType: HubContentType | string | undefined;

  /**
   * <p>The version of the hub content schema to import.</p>
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * <p>The name of the hub to import content into.</p>
   */
  HubName: string | undefined;

  /**
   * <p>The display name of the hub content to import.</p>
   */
  HubContentDisplayName?: string;

  /**
   * <p>A description of the hub content to import.</p>
   */
  HubContentDescription?: string;

  /**
   * <p>Markdown files associated with the hub content to import.</p>
   */
  HubContentMarkdown?: string;

  /**
   * <p>The hub content document that describes information about the hub content such as type, associated containers, scripts, and more.</p>
   */
  HubContentDocument: string | undefined;

  /**
   * <p>The searchable keywords of the hub content.</p>
   */
  HubContentSearchKeywords?: string[];

  /**
   * <p>Any tags associated with the hub content.</p>
   */
  Tags?: Tag[];
}

export interface ImportHubContentResponse {
  /**
   * <p>The ARN of the hub that the content was imported into.</p>
   */
  HubArn: string | undefined;

  /**
   * <p>The ARN of the hub content that was imported.</p>
   */
  HubContentArn: string | undefined;
}

/**
 * <p>Lists a summary of properties of an inference experiment.</p>
 */
export interface InferenceExperimentSummary {
  /**
   * <p>The name of the inference experiment.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the inference experiment.</p>
   */
  Type: InferenceExperimentType | string | undefined;

  /**
   * <p>The duration for which the inference experiment ran or will run.</p>
   *          <p>The maximum duration that you can set for an inference experiment is 30 days.</p>
   */
  Schedule?: InferenceExperimentSchedule;

  /**
   * <p>The status of the inference experiment.</p>
   */
  Status: InferenceExperimentStatus | string | undefined;

  /**
   * <p>The error message for the inference experiment status result.</p>
   */
  StatusReason?: string;

  /**
   * <p>The description of the inference experiment.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp at which the inference experiment was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The timestamp at which the inference experiment was completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The timestamp when you last modified the inference experiment.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>
   *            The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage
   *            Amazon SageMaker Inference endpoints for model deployment.
   *        </p>
   */
  RoleArn?: string;
}

export enum InferenceExperimentStopDesiredState {
  CANCELLED = "Cancelled",
  COMPLETED = "Completed",
}

/**
 * <p>A structure that contains a list of recommendation jobs.</p>
 */
export interface InferenceRecommendationsJob {
  /**
   * <p>The name of the job.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The job description.</p>
   */
  JobDescription: string | undefined;

  /**
   * <p>The recommendation job type.</p>
   */
  JobType: RecommendationJobType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation job.</p>
   */
  JobArn: string | undefined;

  /**
   * <p>The status of the job.</p>
   */
  Status: RecommendationJobStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the job completed.</p>
   */
  CompletionTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker
   *     to perform tasks on your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A timestamp that shows when the job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If the job fails, provides information why the job failed.</p>
   */
  FailureReason?: string;
}

/**
 * <p>The details for a specific benchmark from an Inference Recommender job.</p>
 */
export interface RecommendationJobInferenceBenchmark {
  /**
   * <p>The metrics of recommendations.</p>
   */
  Metrics?: RecommendationMetrics;

  /**
   * <p>The endpoint configuration made by Inference Recommender during a recommendation job.</p>
   */
  EndpointConfiguration?: EndpointOutputConfiguration;

  /**
   * <p>Defines the model configuration. Includes the specification name and environment parameters.</p>
   */
  ModelConfiguration: ModelConfiguration | undefined;

  /**
   * <p>The reason why a benchmark failed.</p>
   */
  FailureReason?: string;
}

export enum RecommendationStepType {
  BENCHMARK = "BENCHMARK",
}

/**
 * <p>A returned array object for the <code>Steps</code> response field in the
 *          <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_InferenceRecommendationsJobStep.html">ListInferenceRecommendationsJobSteps</a> API command.</p>
 */
export interface InferenceRecommendationsJobStep {
  /**
   * <p>The type of the subtask.</p>
   *          <p>
   *             <code>BENCHMARK</code>: Evaluate the performance of your model on different instance types.</p>
   */
  StepType: RecommendationStepType | string | undefined;

  /**
   * <p>The name of the Inference Recommender job.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The current status of the benchmark.</p>
   */
  Status: RecommendationJobStatus | string | undefined;

  /**
   * <p>The details for a specific benchmark.</p>
   */
  InferenceBenchmark?: RecommendationJobInferenceBenchmark;
}

/**
 * <p>Provides counts for human-labeled tasks in the labeling job.</p>
 */
export interface LabelCountersForWorkteam {
  /**
   * <p>The total number of data objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of data objects that need to be labeled by a human worker.</p>
   */
  PendingHuman?: number;

  /**
   * <p>The total number of tasks in the labeling job.</p>
   */
  Total?: number;
}

/**
 * <p>Provides summary information for a work team.</p>
 */
export interface LabelingJobForWorkteamSummary {
  /**
   * <p>The name of the labeling job that the work team is assigned to.</p>
   */
  LabelingJobName?: string;

  /**
   * <p>A unique identifier for a labeling job. You can use this to refer to a specific
   *             labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account used to start the labeling
   *             job.</p>
   */
  WorkRequesterAccountId: string | undefined;

  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Provides information about the progress of a labeling job.</p>
   */
  LabelCounters?: LabelCountersForWorkteam;

  /**
   * <p>The configured number of workers per data object.</p>
   */
  NumberOfHumanWorkersPerDataObject?: number;
}

/**
 * <p>Provides summary information about a labeling job.</p>
 */
export interface LabelingJobSummary {
  /**
   * <p>The name of the labeling job.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the labeling job when it was
   *             created.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The date and time that the job was created (timestamp).</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the job was last modified (timestamp).</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | string | undefined;

  /**
   * <p>Counts showing the progress of the labeling job.</p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to the job.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each
   *             data object is sent to a worker.</p>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the
   *             annotations from individual workers into a label for a data object. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation
   *                 Consolidation</a>.</p>
   */
  AnnotationConsolidationLambdaArn?: string;

  /**
   * <p>If the <code>LabelingJobStatus</code> field is <code>Failed</code>, this field
   *             contains a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;

  /**
   * <p>Input configuration for the labeling job.</p>
   */
  InputConfig?: LabelingJobInputConfig;
}

/**
 * <p>Metadata for a Lambda step.</p>
 */
export interface LambdaStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution.</p>
   */
  Arn?: string;

  /**
   * <p>A list of the output parameters of the Lambda step.</p>
   */
  OutputParameters?: OutputParameter[];
}

/**
 * <p>Lists a summary of the properties of a lineage group. A lineage group provides a group of shareable lineage entity
 *          resources.</p>
 */
export interface LineageGroupSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group resource.</p>
   */
  LineageGroupArn?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the lineage group.</p>
   */
  LineageGroupName?: string;

  /**
   * <p>The display name of the lineage group summary.</p>
   */
  DisplayName?: string;

  /**
   * <p>The creation time of the lineage group summary.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last modified time of the lineage group summary.</p>
   */
  LastModifiedTime?: Date;
}

export enum LineageType {
  ACTION = "Action",
  ARTIFACT = "Artifact",
  CONTEXT = "Context",
  TRIAL_COMPONENT = "TrialComponent",
}

export enum SortActionsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
}

export enum SortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export interface ListActionsRequest {
  /**
   * <p>A filter that returns only actions with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * <p>A filter that returns only actions of the specified type.</p>
   */
  ActionType?: string;

  /**
   * <p>A filter that returns only actions created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only actions created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortActionsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the previous call to <code>ListActions</code> didn't return the full set of actions,
   *         the call returns a token for getting the next set of actions.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of actions to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

export interface ListActionsResponse {
  /**
   * <p>A list of actions and their properties.</p>
   */
  ActionSummaries?: ActionSummary[];

  /**
   * <p>A token for getting the next set of actions, if there are any.</p>
   */
  NextToken?: string;
}

export interface ListAlgorithmsInput {
  /**
   * <p>A filter that returns only algorithms created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only algorithms created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of algorithms to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the algorithm name. This filter returns only algorithms whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the response to a previous <code>ListAlgorithms</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of algorithms, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: AlgorithmSortBy | string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export interface ListAlgorithmsOutput {
  /**
   * <p>>An array of <code>AlgorithmSummary</code> objects, each of which lists an
   *             algorithm.</p>
   */
  AlgorithmSummaryList: AlgorithmSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export interface ListAliasesRequest {
  /**
   * <p>The name of the image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The alias of the image version.</p>
   */
  Alias?: string;

  /**
   * <p>The version of the image. If image version is not specified, the aliases of all versions of the image are listed.</p>
   */
  Version?: number;

  /**
   * <p>The maximum number of aliases to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListAliases</code> didn't return the full set of
   *          aliases, the call returns a token for retrieving the next set of aliases.</p>
   */
  NextToken?: string;
}

export interface ListAliasesResponse {
  /**
   * <p>A list of SageMaker image version aliases.</p>
   */
  SageMakerImageVersionAliases?: string[];

  /**
   * <p>A token for getting the next set of aliases, if more aliases exist.</p>
   */
  NextToken?: string;
}

export interface ListAppImageConfigsRequest {
  /**
   * <p>The maximum number of AppImageConfigs to return in the response. The default value is
   *         10. </p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of
   *         AppImageConfigs, the call returns a token for getting the next set of AppImageConfigs.</p>
   */
  NextToken?: string;

  /**
   * <p>A filter that returns only AppImageConfigs whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only AppImageConfigs created on or before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only AppImageConfigs created on or after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only AppImageConfigs modified on or before the specified time.</p>
   */
  ModifiedTimeBefore?: Date;

  /**
   * <p>A filter that returns only AppImageConfigs modified on or after the specified time.</p>
   */
  ModifiedTimeAfter?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: AppImageConfigSortKey | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export interface ListAppImageConfigsResponse {
  /**
   * <p>A token for getting the next set of AppImageConfigs, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of AppImageConfigs and their properties.</p>
   */
  AppImageConfigs?: AppImageConfigDetails[];
}

export interface ListAppsRequest {
  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The parameter by which to sort the results. The default is CreationTime.</p>
   */
  SortBy?: AppSortKey | string;

  /**
   * <p>A parameter to search for the domain ID.</p>
   */
  DomainIdEquals?: string;

  /**
   * <p>A parameter to search by user profile name. If <code>SpaceNameEquals</code> is set, then this value cannot be set.</p>
   */
  UserProfileNameEquals?: string;

  /**
   * <p>A parameter to search by space name. If <code>UserProfileNameEquals</code> is set, then this value cannot be set.</p>
   */
  SpaceNameEquals?: string;
}

export interface ListAppsResponse {
  /**
   * <p>The list of apps.</p>
   */
  Apps?: AppDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export enum SortArtifactsBy {
  CREATION_TIME = "CreationTime",
}

export interface ListArtifactsRequest {
  /**
   * <p>A filter that returns only artifacts with the specified source URI.</p>
   */
  SourceUri?: string;

  /**
   * <p>A filter that returns only artifacts of the specified type.</p>
   */
  ArtifactType?: string;

  /**
   * <p>A filter that returns only artifacts created on or after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only artifacts created on or before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortArtifactsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>If the previous call to <code>ListArtifacts</code> didn't return the full set of artifacts,
   *         the call returns a token for getting the next set of artifacts.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of artifacts to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;
}

/**
 * @internal
 */
export const DeregisterDevicesRequestFilterSensitiveLog = (obj: DeregisterDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeActionRequestFilterSensitiveLog = (obj: DescribeActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeActionResponseFilterSensitiveLog = (obj: DescribeActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAlgorithmInputFilterSensitiveLog = (obj: DescribeAlgorithmInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAlgorithmOutputFilterSensitiveLog = (obj: DescribeAlgorithmOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppRequestFilterSensitiveLog = (obj: DescribeAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppResponseFilterSensitiveLog = (obj: DescribeAppResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppImageConfigRequestFilterSensitiveLog = (obj: DescribeAppImageConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppImageConfigResponseFilterSensitiveLog = (obj: DescribeAppImageConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeArtifactRequestFilterSensitiveLog = (obj: DescribeArtifactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeArtifactResponseFilterSensitiveLog = (obj: DescribeArtifactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAutoMLJobRequestFilterSensitiveLog = (obj: DescribeAutoMLJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelDeployResultFilterSensitiveLog = (obj: ModelDeployResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolvedAttributesFilterSensitiveLog = (obj: ResolvedAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAutoMLJobResponseFilterSensitiveLog = (obj: DescribeAutoMLJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCodeRepositoryInputFilterSensitiveLog = (obj: DescribeCodeRepositoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCodeRepositoryOutputFilterSensitiveLog = (obj: DescribeCodeRepositoryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCompilationJobRequestFilterSensitiveLog = (obj: DescribeCompilationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelArtifactsFilterSensitiveLog = (obj: ModelArtifacts): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelDigestsFilterSensitiveLog = (obj: ModelDigests): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCompilationJobResponseFilterSensitiveLog = (obj: DescribeCompilationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContextRequestFilterSensitiveLog = (obj: DescribeContextRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContextResponseFilterSensitiveLog = (obj: DescribeContextResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataQualityJobDefinitionRequestFilterSensitiveLog = (
  obj: DescribeDataQualityJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataQualityJobDefinitionResponseFilterSensitiveLog = (
  obj: DescribeDataQualityJobDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceRequestFilterSensitiveLog = (obj: DescribeDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeModelFilterSensitiveLog = (obj: EdgeModel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceResponseFilterSensitiveLog = (obj: DescribeDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceFleetRequestFilterSensitiveLog = (obj: DescribeDeviceFleetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDeviceFleetResponseFilterSensitiveLog = (obj: DescribeDeviceFleetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainRequestFilterSensitiveLog = (obj: DescribeDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainResponseFilterSensitiveLog = (obj: DescribeDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEdgeDeploymentPlanRequestFilterSensitiveLog = (obj: DescribeEdgeDeploymentPlanRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEdgeDeploymentPlanResponseFilterSensitiveLog = (obj: DescribeEdgeDeploymentPlanResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEdgePackagingJobRequestFilterSensitiveLog = (obj: DescribeEdgePackagingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgePresetDeploymentOutputFilterSensitiveLog = (obj: EdgePresetDeploymentOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEdgePackagingJobResponseFilterSensitiveLog = (obj: DescribeEdgePackagingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointInputFilterSensitiveLog = (obj: DescribeEndpointInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductionVariantStatusFilterSensitiveLog = (obj: ProductionVariantStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PendingProductionVariantSummaryFilterSensitiveLog = (obj: PendingProductionVariantSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PendingDeploymentSummaryFilterSensitiveLog = (obj: PendingDeploymentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProductionVariantSummaryFilterSensitiveLog = (obj: ProductionVariantSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointOutputFilterSensitiveLog = (obj: DescribeEndpointOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointConfigInputFilterSensitiveLog = (obj: DescribeEndpointConfigInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointConfigOutputFilterSensitiveLog = (obj: DescribeEndpointConfigOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExperimentRequestFilterSensitiveLog = (obj: DescribeExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentSourceFilterSensitiveLog = (obj: ExperimentSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExperimentResponseFilterSensitiveLog = (obj: DescribeExperimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFeatureGroupRequestFilterSensitiveLog = (obj: DescribeFeatureGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LastUpdateStatusFilterSensitiveLog = (obj: LastUpdateStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OfflineStoreStatusFilterSensitiveLog = (obj: OfflineStoreStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFeatureGroupResponseFilterSensitiveLog = (obj: DescribeFeatureGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFeatureMetadataRequestFilterSensitiveLog = (obj: DescribeFeatureMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FeatureParameterFilterSensitiveLog = (obj: FeatureParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFeatureMetadataResponseFilterSensitiveLog = (obj: DescribeFeatureMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFlowDefinitionRequestFilterSensitiveLog = (obj: DescribeFlowDefinitionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFlowDefinitionResponseFilterSensitiveLog = (obj: DescribeFlowDefinitionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHubRequestFilterSensitiveLog = (obj: DescribeHubRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHubResponseFilterSensitiveLog = (obj: DescribeHubResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHubContentRequestFilterSensitiveLog = (obj: DescribeHubContentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HubContentDependencyFilterSensitiveLog = (obj: HubContentDependency): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHubContentResponseFilterSensitiveLog = (obj: DescribeHubContentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHumanTaskUiRequestFilterSensitiveLog = (obj: DescribeHumanTaskUiRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UiTemplateInfoFilterSensitiveLog = (obj: UiTemplateInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHumanTaskUiResponseFilterSensitiveLog = (obj: DescribeHumanTaskUiResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHyperParameterTuningJobRequestFilterSensitiveLog = (
  obj: DescribeHyperParameterTuningJobRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FinalHyperParameterTuningJobObjectiveMetricFilterSensitiveLog = (
  obj: FinalHyperParameterTuningJobObjectiveMetric
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterTrainingJobSummaryFilterSensitiveLog = (obj: HyperParameterTrainingJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ObjectiveStatusCountersFilterSensitiveLog = (obj: ObjectiveStatusCounters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrainingJobStatusCountersFilterSensitiveLog = (obj: TrainingJobStatusCounters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHyperParameterTuningJobResponseFilterSensitiveLog = (
  obj: DescribeHyperParameterTuningJobResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImageRequestFilterSensitiveLog = (obj: DescribeImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImageResponseFilterSensitiveLog = (obj: DescribeImageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImageVersionRequestFilterSensitiveLog = (obj: DescribeImageVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImageVersionResponseFilterSensitiveLog = (obj: DescribeImageVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInferenceExperimentRequestFilterSensitiveLog = (obj: DescribeInferenceExperimentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointMetadataFilterSensitiveLog = (obj: EndpointMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelVariantConfigSummaryFilterSensitiveLog = (obj: ModelVariantConfigSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInferenceExperimentResponseFilterSensitiveLog = (
  obj: DescribeInferenceExperimentResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInferenceRecommendationsJobRequestFilterSensitiveLog = (
  obj: DescribeInferenceRecommendationsJobRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceMetricsFilterSensitiveLog = (obj: InferenceMetrics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointPerformanceFilterSensitiveLog = (obj: EndpointPerformance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointOutputConfigurationFilterSensitiveLog = (obj: EndpointOutputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationMetricsFilterSensitiveLog = (obj: RecommendationMetrics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentParameterFilterSensitiveLog = (obj: EnvironmentParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelConfigurationFilterSensitiveLog = (obj: ModelConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceRecommendationFilterSensitiveLog = (obj: InferenceRecommendation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInferenceRecommendationsJobResponseFilterSensitiveLog = (
  obj: DescribeInferenceRecommendationsJobResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLabelingJobRequestFilterSensitiveLog = (obj: DescribeLabelingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelCountersFilterSensitiveLog = (obj: LabelCounters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobOutputFilterSensitiveLog = (obj: LabelingJobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLabelingJobResponseFilterSensitiveLog = (obj: DescribeLabelingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLineageGroupRequestFilterSensitiveLog = (obj: DescribeLineageGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLineageGroupResponseFilterSensitiveLog = (obj: DescribeLineageGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelInputFilterSensitiveLog = (obj: DescribeModelInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelOutputFilterSensitiveLog = (obj: DescribeModelOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelBiasJobDefinitionRequestFilterSensitiveLog = (
  obj: DescribeModelBiasJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelBiasJobDefinitionResponseFilterSensitiveLog = (
  obj: DescribeModelBiasJobDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelCardRequestFilterSensitiveLog = (obj: DescribeModelCardRequest): any => ({
  ...obj,
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
export const DescribeModelCardExportJobRequestFilterSensitiveLog = (obj: DescribeModelCardExportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelCardExportArtifactsFilterSensitiveLog = (obj: ModelCardExportArtifacts): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelCardExportJobResponseFilterSensitiveLog = (obj: DescribeModelCardExportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelExplainabilityJobDefinitionRequestFilterSensitiveLog = (
  obj: DescribeModelExplainabilityJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelExplainabilityJobDefinitionResponseFilterSensitiveLog = (
  obj: DescribeModelExplainabilityJobDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelPackageInputFilterSensitiveLog = (obj: DescribeModelPackageInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackageStatusItemFilterSensitiveLog = (obj: ModelPackageStatusItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackageStatusDetailsFilterSensitiveLog = (obj: ModelPackageStatusDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelPackageOutputFilterSensitiveLog = (obj: DescribeModelPackageOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelPackageGroupInputFilterSensitiveLog = (obj: DescribeModelPackageGroupInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelPackageGroupOutputFilterSensitiveLog = (obj: DescribeModelPackageGroupOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelQualityJobDefinitionRequestFilterSensitiveLog = (
  obj: DescribeModelQualityJobDefinitionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelQualityJobDefinitionResponseFilterSensitiveLog = (
  obj: DescribeModelQualityJobDefinitionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMonitoringScheduleRequestFilterSensitiveLog = (obj: DescribeMonitoringScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringExecutionSummaryFilterSensitiveLog = (obj: MonitoringExecutionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMonitoringScheduleResponseFilterSensitiveLog = (obj: DescribeMonitoringScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNotebookInstanceInputFilterSensitiveLog = (obj: DescribeNotebookInstanceInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNotebookInstanceOutputFilterSensitiveLog = (obj: DescribeNotebookInstanceOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNotebookInstanceLifecycleConfigInputFilterSensitiveLog = (
  obj: DescribeNotebookInstanceLifecycleConfigInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNotebookInstanceLifecycleConfigOutputFilterSensitiveLog = (
  obj: DescribeNotebookInstanceLifecycleConfigOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePipelineRequestFilterSensitiveLog = (obj: DescribePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePipelineResponseFilterSensitiveLog = (obj: DescribePipelineResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePipelineDefinitionForExecutionRequestFilterSensitiveLog = (
  obj: DescribePipelineDefinitionForExecutionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePipelineDefinitionForExecutionResponseFilterSensitiveLog = (
  obj: DescribePipelineDefinitionForExecutionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePipelineExecutionRequestFilterSensitiveLog = (obj: DescribePipelineExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipelineExperimentConfigFilterSensitiveLog = (obj: PipelineExperimentConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePipelineExecutionResponseFilterSensitiveLog = (obj: DescribePipelineExecutionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProcessingJobRequestFilterSensitiveLog = (obj: DescribeProcessingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProcessingJobResponseFilterSensitiveLog = (obj: DescribeProcessingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectInputFilterSensitiveLog = (obj: DescribeProjectInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceCatalogProvisionedProductDetailsFilterSensitiveLog = (
  obj: ServiceCatalogProvisionedProductDetails
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectOutputFilterSensitiveLog = (obj: DescribeProjectOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpaceRequestFilterSensitiveLog = (obj: DescribeSpaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSpaceResponseFilterSensitiveLog = (obj: DescribeSpaceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStudioLifecycleConfigRequestFilterSensitiveLog = (
  obj: DescribeStudioLifecycleConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStudioLifecycleConfigResponseFilterSensitiveLog = (
  obj: DescribeStudioLifecycleConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubscribedWorkteamRequestFilterSensitiveLog = (obj: DescribeSubscribedWorkteamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscribedWorkteamFilterSensitiveLog = (obj: SubscribedWorkteam): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSubscribedWorkteamResponseFilterSensitiveLog = (obj: DescribeSubscribedWorkteamResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrainingJobRequestFilterSensitiveLog = (obj: DescribeTrainingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDataFilterSensitiveLog = (obj: MetricData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProfilerRuleEvaluationStatusFilterSensitiveLog = (obj: ProfilerRuleEvaluationStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecondaryStatusTransitionFilterSensitiveLog = (obj: SecondaryStatusTransition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WarmPoolStatusFilterSensitiveLog = (obj: WarmPoolStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrainingJobResponseFilterSensitiveLog = (obj: DescribeTrainingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransformJobRequestFilterSensitiveLog = (obj: DescribeTransformJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTransformJobResponseFilterSensitiveLog = (obj: DescribeTransformJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrialRequestFilterSensitiveLog = (obj: DescribeTrialRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrialSourceFilterSensitiveLog = (obj: TrialSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrialResponseFilterSensitiveLog = (obj: DescribeTrialResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrialComponentRequestFilterSensitiveLog = (obj: DescribeTrialComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrialComponentMetricSummaryFilterSensitiveLog = (obj: TrialComponentMetricSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrialComponentSourceFilterSensitiveLog = (obj: TrialComponentSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrialComponentResponseFilterSensitiveLog = (obj: DescribeTrialComponentResponse): any => ({
  ...obj,
  ...(obj.Parameters && {
    Parameters: Object.entries(obj.Parameters).reduce(
      (acc: any, [key, value]: [string, TrialComponentParameterValue]) => (
        (acc[key] = TrialComponentParameterValueFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const DescribeUserProfileRequestFilterSensitiveLog = (obj: DescribeUserProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserProfileResponseFilterSensitiveLog = (obj: DescribeUserProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkforceRequestFilterSensitiveLog = (obj: DescribeWorkforceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OidcConfigForResponseFilterSensitiveLog = (obj: OidcConfigForResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkforceVpcConfigResponseFilterSensitiveLog = (obj: WorkforceVpcConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkforceFilterSensitiveLog = (obj: Workforce): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkforceResponseFilterSensitiveLog = (obj: DescribeWorkforceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkteamRequestFilterSensitiveLog = (obj: DescribeWorkteamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkteamFilterSensitiveLog = (obj: Workteam): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkteamResponseFilterSensitiveLog = (obj: DescribeWorkteamResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DesiredWeightAndCapacityFilterSensitiveLog = (obj: DesiredWeightAndCapacity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceFilterSensitiveLog = (obj: Device): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceDeploymentSummaryFilterSensitiveLog = (obj: DeviceDeploymentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceFleetSummaryFilterSensitiveLog = (obj: DeviceFleetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceStatsFilterSensitiveLog = (obj: DeviceStats): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeModelSummaryFilterSensitiveLog = (obj: EdgeModelSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceSummaryFilterSensitiveLog = (obj: DeviceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableSagemakerServicecatalogPortfolioInputFilterSensitiveLog = (
  obj: DisableSagemakerServicecatalogPortfolioInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableSagemakerServicecatalogPortfolioOutputFilterSensitiveLog = (
  obj: DisableSagemakerServicecatalogPortfolioOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTrialComponentRequestFilterSensitiveLog = (obj: DisassociateTrialComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTrialComponentResponseFilterSensitiveLog = (obj: DisassociateTrialComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainDetailsFilterSensitiveLog = (obj: DomainDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RStudioServerProDomainSettingsForUpdateFilterSensitiveLog = (
  obj: RStudioServerProDomainSettingsForUpdate
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainSettingsForUpdateFilterSensitiveLog = (obj: DomainSettingsForUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeFilterSensitiveLog = (obj: Edge): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeDeploymentPlanSummaryFilterSensitiveLog = (obj: EdgeDeploymentPlanSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeModelStatFilterSensitiveLog = (obj: EdgeModelStat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgePackagingJobSummaryFilterSensitiveLog = (obj: EdgePackagingJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EMRStepMetadataFilterSensitiveLog = (obj: EMRStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableSagemakerServicecatalogPortfolioInputFilterSensitiveLog = (
  obj: EnableSagemakerServicecatalogPortfolioInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableSagemakerServicecatalogPortfolioOutputFilterSensitiveLog = (
  obj: EnableSagemakerServicecatalogPortfolioOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringScheduleFilterSensitiveLog = (obj: MonitoringSchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointFilterSensitiveLog = (obj: Endpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointConfigSummaryFilterSensitiveLog = (obj: EndpointConfigSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointSummaryFilterSensitiveLog = (obj: EndpointSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentFilterSensitiveLog = (obj: Experiment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExperimentSummaryFilterSensitiveLog = (obj: ExperimentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailStepMetadataFilterSensitiveLog = (obj: FailStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FeatureGroupFilterSensitiveLog = (obj: FeatureGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FeatureGroupSummaryFilterSensitiveLog = (obj: FeatureGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FeatureMetadataFilterSensitiveLog = (obj: FeatureMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlowDefinitionSummaryFilterSensitiveLog = (obj: FlowDefinitionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceFleetReportRequestFilterSensitiveLog = (obj: GetDeviceFleetReportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceFleetReportResponseFilterSensitiveLog = (obj: GetDeviceFleetReportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLineageGroupPolicyRequestFilterSensitiveLog = (obj: GetLineageGroupPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLineageGroupPolicyResponseFilterSensitiveLog = (obj: GetLineageGroupPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetModelPackageGroupPolicyInputFilterSensitiveLog = (obj: GetModelPackageGroupPolicyInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetModelPackageGroupPolicyOutputFilterSensitiveLog = (obj: GetModelPackageGroupPolicyOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSagemakerServicecatalogPortfolioStatusInputFilterSensitiveLog = (
  obj: GetSagemakerServicecatalogPortfolioStatusInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSagemakerServicecatalogPortfolioStatusOutputFilterSensitiveLog = (
  obj: GetSagemakerServicecatalogPortfolioStatusOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PropertyNameQueryFilterSensitiveLog = (obj: PropertyNameQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuggestionQueryFilterSensitiveLog = (obj: SuggestionQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSearchSuggestionsRequestFilterSensitiveLog = (obj: GetSearchSuggestionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PropertyNameSuggestionFilterSensitiveLog = (obj: PropertyNameSuggestion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSearchSuggestionsResponseFilterSensitiveLog = (obj: GetSearchSuggestionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GitConfigForUpdateFilterSensitiveLog = (obj: GitConfigForUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HubContentInfoFilterSensitiveLog = (obj: HubContentInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HubInfoFilterSensitiveLog = (obj: HubInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HumanTaskUiSummaryFilterSensitiveLog = (obj: HumanTaskUiSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterTuningJobSearchEntityFilterSensitiveLog = (
  obj: HyperParameterTuningJobSearchEntity
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HyperParameterTuningJobSummaryFilterSensitiveLog = (obj: HyperParameterTuningJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageFilterSensitiveLog = (obj: Image): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageVersionFilterSensitiveLog = (obj: ImageVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportHubContentRequestFilterSensitiveLog = (obj: ImportHubContentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportHubContentResponseFilterSensitiveLog = (obj: ImportHubContentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceExperimentSummaryFilterSensitiveLog = (obj: InferenceExperimentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceRecommendationsJobFilterSensitiveLog = (obj: InferenceRecommendationsJob): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationJobInferenceBenchmarkFilterSensitiveLog = (
  obj: RecommendationJobInferenceBenchmark
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceRecommendationsJobStepFilterSensitiveLog = (obj: InferenceRecommendationsJobStep): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelCountersForWorkteamFilterSensitiveLog = (obj: LabelCountersForWorkteam): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobForWorkteamSummaryFilterSensitiveLog = (obj: LabelingJobForWorkteamSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelingJobSummaryFilterSensitiveLog = (obj: LabelingJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaStepMetadataFilterSensitiveLog = (obj: LambdaStepMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LineageGroupSummaryFilterSensitiveLog = (obj: LineageGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListActionsRequestFilterSensitiveLog = (obj: ListActionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListActionsResponseFilterSensitiveLog = (obj: ListActionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAlgorithmsInputFilterSensitiveLog = (obj: ListAlgorithmsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAlgorithmsOutputFilterSensitiveLog = (obj: ListAlgorithmsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAliasesRequestFilterSensitiveLog = (obj: ListAliasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAliasesResponseFilterSensitiveLog = (obj: ListAliasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppImageConfigsRequestFilterSensitiveLog = (obj: ListAppImageConfigsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppImageConfigsResponseFilterSensitiveLog = (obj: ListAppImageConfigsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppsRequestFilterSensitiveLog = (obj: ListAppsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppsResponseFilterSensitiveLog = (obj: ListAppsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListArtifactsRequestFilterSensitiveLog = (obj: ListArtifactsRequest): any => ({
  ...obj,
});

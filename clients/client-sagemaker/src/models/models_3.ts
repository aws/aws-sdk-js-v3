// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionSummary,
  AdditionalInferenceSpecificationDefinition,
  AgentVersion,
  AlgorithmSortBy,
  AlgorithmSpecification,
  AlgorithmSummary,
  AmazonQSettings,
  AppDetails,
  AppImageConfigDetails,
  AppImageConfigSortKey,
  AppSortKey,
  AppSpecification,
  ArtifactSummary,
  AssociationEdgeType,
  AssociationSummary,
  AutoMLCandidate,
  AutoMLJobStatus,
  AutoMLJobSummary,
  AutoMLSortBy,
  AutoMLSortOrder,
  BatchDataCaptureConfig,
  BatchStrategy,
  CandidateSortBy,
  CandidateStatus,
  Channel,
  CheckpointConfig,
  ClusterNodeSummary,
  ClusterSortBy,
  ClusterSummary,
  CodeRepositorySortBy,
  CodeRepositorySortOrder,
  CodeRepositorySummary,
  CognitoConfig,
  CompilationJobStatus,
  CompilationJobSummary,
  ContainerDefinition,
  ContextSummary,
  InferenceSpecification,
  MetadataProperties,
  ModelApprovalStatus,
  ModelPackageStatus,
  OutputDataConfig,
  OutputParameter,
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

import {
  _InstanceType,
  DirectInternetAccess,
  DockerSettings,
  DriftCheckBaselines,
  EdgeOutputConfig,
  ExecutionRoleIdentityConfig,
  FeatureDefinition,
  FeatureType,
  HumanTaskConfig,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobStrategyType,
  HyperParameterTuningJobWarmStartConfig,
  InferenceExecutionConfig,
  InferenceExperimentSchedule,
  InferenceExperimentType,
  InstanceMetadataServiceConfiguration,
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
  ModelLifeCycle,
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
  MonitoringScheduleConfig,
  MonitoringStoppingCondition,
  MonitoringType,
  NetworkConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  OfflineStoreConfig,
  OnlineStoreConfig,
  OptimizationConfig,
  OptimizationJobDeploymentInstanceType,
  OptimizationJobModelSource,
  OptimizationJobOutputConfig,
  OptimizationVpcConfig,
  RecommendationJobInputConfig,
  RecommendationJobStoppingConditions,
  RecommendationJobType,
  ResourceLimits,
  RetryStrategy,
  RootAccess,
  SkipModelValidation,
  SourceAlgorithmSpecification,
  TrackingServerSize,
  UserSettings,
} from "./models_1";

import {
  CustomizedMetricSpecification,
  DataCaptureConfigSummary,
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DeploymentRecommendation,
  DomainStatus,
  EdgePackagingJobStatus,
  EndpointOutputConfiguration,
  EndpointPerformance,
  EndpointStatus,
  ExperimentConfig,
  ExperimentSource,
  FeatureGroupStatus,
  FeatureParameter,
  FlowDefinitionStatus,
  HubContentStatus,
  HubContentSupportStatus,
  HubContentType,
  HubStatus,
  HyperParameterTrainingJobSummary,
  HyperParameterTuningJobCompletionDetails,
  HyperParameterTuningJobConsumedResources,
  HyperParameterTuningJobStatus,
  ImageStatus,
  ImageVersionStatus,
  InferenceComponentStatus,
  InferenceExperimentStatus,
  InferenceMetrics,
  InferenceRecommendation,
  InfraCheckConfig,
  LastUpdateStatus,
  MemberDefinition,
  ModelArtifacts,
  ModelClientConfig,
  ModelConfiguration,
  NotificationConfiguration,
  ObjectiveStatusCounters,
  OfflineStoreStatus,
  OfflineStoreStatusValue,
  OwnershipSettings,
  ParallelismConfiguration,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  ProductionVariantSummary,
  ProfilerConfig,
  ProfilerRuleConfiguration,
  RecommendationJobStatus,
  RecommendationMetrics,
  RemoteDebugConfig,
  RuleEvaluationStatus,
  ServiceCatalogProvisioningDetails,
  SourceIpConfig,
  SpaceSettings,
  SpaceSharingSettings,
  StudioLifecycleConfigAppType,
  TensorBoardOutputConfig,
  TrainingJobStatus,
  TrainingJobStatusCounters,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  WorkerAccessConfiguration,
} from "./models_2";

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
  JobDescription?: string | undefined;

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
  CompletionTime?: Date | undefined;

  /**
   * <p>A timestamp that shows when the job was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If the job fails, provides information why the job failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

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
  StoppingConditions?: RecommendationJobStoppingConditions | undefined;

  /**
   * <p>The recommendations made by Inference Recommender.</p>
   * @public
   */
  InferenceRecommendations?: InferenceRecommendation[] | undefined;

  /**
   * <p>The performance results from running an Inference Recommender job on an existing endpoint.</p>
   * @public
   */
  EndpointPerformances?: EndpointPerformance[] | undefined;
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
  TotalLabeled?: number | undefined;

  /**
   * <p>The total number of objects labeled by a human worker.</p>
   * @public
   */
  HumanLabeled?: number | undefined;

  /**
   * <p>The total number of objects labeled by automated data labeling.</p>
   * @public
   */
  MachineLabeled?: number | undefined;

  /**
   * <p>The total number of objects that could not be labeled due to an error.</p>
   * @public
   */
  FailedNonRetryableError?: number | undefined;

  /**
   * <p>The total number of objects not yet labeled.</p>
   * @public
   */
  Unlabeled?: number | undefined;
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
  FinalActiveLearningModelArn?: string | undefined;
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
  FailureReason?: string | undefined;

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
  LabelAttributeName?: string | undefined;

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
  LabelCategoryConfigS3Uri?: string | undefined;

  /**
   * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
   *             job is automatically stopped.</p>
   * @public
   */
  StoppingConditions?: LabelingJobStoppingConditions | undefined;

  /**
   * <p>Configuration information for automated data labeling.</p>
   * @public
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig | undefined;

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
  Tags?: Tag[] | undefined;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   * @public
   */
  LabelingJobOutput?: LabelingJobOutput | undefined;
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
  LineageGroupName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string | undefined;

  /**
   * <p>The display name of the lineage group.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the lineage group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The creation time of lineage group.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>The last modified time of the lineage group.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
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
  TrackingServerArn?: string | undefined;

  /**
   * <p>The name of the described tracking server.</p>
   * @public
   */
  TrackingServerName?: string | undefined;

  /**
   * <p>The S3 URI of the general purpose bucket used as the MLflow Tracking Server
   *       artifact store.</p>
   * @public
   */
  ArtifactStoreUri?: string | undefined;

  /**
   * <p>The size of the described tracking server.</p>
   * @public
   */
  TrackingServerSize?: TrackingServerSize | undefined;

  /**
   * <p>The MLflow version used for the described tracking server.</p>
   * @public
   */
  MlflowVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for an IAM role in your account that the described MLflow Tracking Server
   *       uses to access the artifact store in Amazon S3.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The current creation status of the described MLflow Tracking Server.</p>
   * @public
   */
  TrackingServerStatus?: TrackingServerStatus | undefined;

  /**
   * <p>Whether the described MLflow Tracking Server is currently active.</p>
   * @public
   */
  IsActive?: IsTrackingServerActive | undefined;

  /**
   * <p>The URL to connect to the MLflow user interface for the described tracking server.</p>
   * @public
   */
  TrackingServerUrl?: string | undefined;

  /**
   * <p>The day and time of the week when weekly maintenance occurs on the described tracking server.</p>
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * <p>Whether automatic registration of new MLflow models to the SageMaker Model Registry is enabled.</p>
   * @public
   */
  AutomaticModelRegistration?: boolean | undefined;

  /**
   * <p>The timestamp of when the described MLflow Tracking Server was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>The timestamp of when the described MLflow Tracking Server was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
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
  PrimaryContainer?: ContainerDefinition | undefined;

  /**
   * <p>The containers in the inference pipeline.</p>
   * @public
   */
  Containers?: ContainerDefinition[] | undefined;

  /**
   * <p>Specifies details of how containers in a multi-container endpoint are called.</p>
   * @public
   */
  InferenceExecutionConfig?: InferenceExecutionConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the
   *             model.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that this model has access to. For
   *             more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual
   *                 Private Cloud</a>
   *          </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

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
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * <p>A set of recommended deployment configurations for the model.</p>
   * @public
   */
  DeploymentRecommendation?: DeploymentRecommendation | undefined;
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
  ModelBiasBaselineConfig?: ModelBiasBaselineConfig | undefined;

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
  NetworkConfig?: MonitoringNetworkConfig | undefined;

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
  StoppingCondition?: MonitoringStoppingCondition | undefined;
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
  ModelCardVersion?: number | undefined;
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
  SecurityConfig?: ModelCardSecurityConfig | undefined;

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
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

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
  ModelCardProcessingStatus?: ModelCardProcessingStatus | undefined;
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
  FailureReason?: string | undefined;

  /**
   * <p>The exported model card artifacts.</p>
   * @public
   */
  ExportArtifacts?: ModelCardExportArtifacts | undefined;
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
  ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig | undefined;

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
  NetworkConfig?: MonitoringNetworkConfig | undefined;

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
  StoppingCondition?: MonitoringStoppingCondition | undefined;
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
  FailureReason?: string | undefined;
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
  ImageScanStatuses?: ModelPackageStatusItem[] | undefined;
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
  ModelPackageGroupName?: string | undefined;

  /**
   * <p>The version of the model package.</p>
   * @public
   */
  ModelPackageVersion?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   * @public
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief summary of the model package.</p>
   * @public
   */
  ModelPackageDescription?: string | undefined;

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
  InferenceSpecification?: InferenceSpecification | undefined;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   * @public
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification | undefined;

  /**
   * <p>Configurations for one or more transform jobs that SageMaker runs to test the model
   *             package.</p>
   * @public
   */
  ValidationSpecification?: ModelPackageValidationSpecification | undefined;

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
  CertifyForMarketplace?: boolean | undefined;

  /**
   * <p>The approval status of the model package.</p>
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * <p>Metrics for the model.</p>
   * @public
   */
  ModelMetrics?: ModelMetrics | undefined;

  /**
   * <p>The last time that the model package was modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>A description provided for the model approval.</p>
   * @public
   */
  ApprovalDescription?: string | undefined;

  /**
   * <p>The machine learning domain of the model package you specified. Common machine
   *             learning domains include computer vision and natural language processing.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The machine learning task you specified that your model package accomplishes.
   *             Common machine learning tasks include object detection and image classification.</p>
   * @public
   */
  Task?: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored. This path points to a single
   *             gzip compressed tar archive (.tar.gz suffix).</p>
   * @public
   */
  SamplePayloadUrl?: string | undefined;

  /**
   * <p>The metadata properties associated with the model package versions.</p>
   * @public
   */
  CustomerMetadataProperties?: Record<string, string> | undefined;

  /**
   * <p>Represents the drift check baselines that can be used when the model monitor is set using the model package.
   *             For more information, see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-quality-clarify-baseline-lifecycle.html#pipelines-quality-clarify-baseline-drift-detection">Drift Detection against Previous Baselines in SageMaker Pipelines</a> in the <i>Amazon SageMaker Developer Guide</i>.
   *         </p>
   * @public
   */
  DriftCheckBaselines?: DriftCheckBaselines | undefined;

  /**
   * <p>An array of additional Inference Specification objects. Each additional
   *             Inference Specification specifies artifacts based on this model package that can
   *             be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.</p>
   * @public
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[] | undefined;

  /**
   * <p>Indicates if you want to skip model validation.</p>
   * @public
   */
  SkipModelValidation?: SkipModelValidation | undefined;

  /**
   * <p>The URI of the source for the model package.</p>
   * @public
   */
  SourceUri?: string | undefined;

  /**
   * <p>The KMS Key ID (<code>KMSKeyId</code>) used for encryption of model package information.</p>
   * @public
   */
  SecurityConfig?: ModelPackageSecurityConfig | undefined;

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
  ModelCard?: ModelPackageModelCard | undefined;

  /**
   * <p>
   *             A structure describing the current state of the model in its life cycle.
   *         </p>
   * @public
   */
  ModelLifeCycle?: ModelLifeCycle | undefined;
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
  ModelPackageGroupDescription?: string | undefined;

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
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig | undefined;

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
  NetworkConfig?: MonitoringNetworkConfig | undefined;

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
  StoppingCondition?: MonitoringStoppingCondition | undefined;
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
  ProcessingJobArn?: string | undefined;

  /**
   * <p>The name of the endpoint used to run the monitoring job.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>Contains the reason a monitoring job failed, if it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The name of the monitoring job.</p>
   * @public
   */
  MonitoringJobDefinitionName?: string | undefined;

  /**
   * <p>The type of the monitoring job.</p>
   * @public
   */
  MonitoringType?: MonitoringType | undefined;
}

/**
 * @public
 * @enum
 */
export const ScheduleStatus = {
  FAILED: "Failed",
  PENDING: "Pending",
  SCHEDULED: "Scheduled",
  STOPPED: "Stopped",
} as const;

/**
 * @public
 */
export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus];

/**
 * @public
 */
export interface DescribeMonitoringScheduleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>Name of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The status of an monitoring job.</p>
   * @public
   */
  MonitoringScheduleStatus: ScheduleStatus | undefined;

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
   * @public
   */
  MonitoringType?: MonitoringType | undefined;

  /**
   * <p>A string, up to one KB in size, that contains the reason a monitoring job failed, if it
   *          failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The time at which the monitoring job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time at which the monitoring job was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the monitoring
   *    job.</p>
   * @public
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * <p> The name of the endpoint for the monitoring job.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>Describes metadata on the last execution to run, if there was one.</p>
   * @public
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceInput {
  /**
   * <p>The name of the notebook instance that you want information about.</p>
   * @public
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NotebookInstanceStatus = {
  Deleting: "Deleting",
  Failed: "Failed",
  InService: "InService",
  Pending: "Pending",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Updating: "Updating",
} as const;

/**
 * @public
 */
export type NotebookInstanceStatus = (typeof NotebookInstanceStatus)[keyof typeof NotebookInstanceStatus];

/**
 * @public
 */
export interface DescribeNotebookInstanceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   * @public
   */
  NotebookInstanceArn?: string | undefined;

  /**
   * <p>The name of the SageMaker notebook instance. </p>
   * @public
   */
  NotebookInstanceName?: string | undefined;

  /**
   * <p>The status of the notebook instance.</p>
   * @public
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | undefined;

  /**
   * <p>If status is <code>Failed</code>, the reason it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook that is running in your
   *             notebook instance. </p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The type of ML compute instance running on the notebook instance.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>The ID of the VPC subnet.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The IDs of the VPC security groups.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *         </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key ID SageMaker uses to encrypt data when
   *             storing it on the ML storage volume attached to the instance. </p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The network interface IDs that SageMaker created at the time of creating
   *             the instance. </p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>A timestamp. Use this parameter to retrieve the time when the notebook instance was
   *             last modified. </p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A timestamp. Use this parameter to return the time when the notebook instance was
   *             created</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Returns the name of a notebook instance lifecycle configuration.</p>
   *          <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>
   *          </p>
   * @public
   */
  NotebookInstanceLifecycleConfigName?: string | undefined;

  /**
   * <p>Describes whether SageMaker provides internet access to the notebook instance.
   *             If this value is set to <i>Disabled</i>, the notebook instance does not
   *             have internet access, and cannot connect to SageMaker training and endpoint
   *             services.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>.</p>
   * @public
   */
  DirectInternetAccess?: DirectInternetAccess | undefined;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the notebook instance.</p>
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * <p>This parameter is no longer supported. Elastic Inference (EI) is no longer
   *             available.</p>
   *          <p>This parameter was used to specify a list of the EI instance types associated with
   *             this notebook instance.</p>
   * @public
   */
  AcceleratorTypes?: NotebookInstanceAcceleratorType[] | undefined;

  /**
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. When you open a notebook instance, it opens in the
   *             directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   * @public
   */
  DefaultCodeRepository?: string | undefined;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a>
   *             or in any other Git repository. These repositories are cloned at the same level as the
   *             default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with SageMaker Notebook Instances</a>.</p>
   * @public
   */
  AdditionalCodeRepositories?: string[] | undefined;

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance.</p>
   *          <note>
   *             <p>Lifecycle configurations need root access to be able to set up a notebook
   *                 instance. Because of this, lifecycle configurations associated with a notebook
   *                 instance always run with root access even if you disable root access for
   *                 users.</p>
   *          </note>
   * @public
   */
  RootAccess?: RootAccess | undefined;

  /**
   * <p>The platform identifier of the notebook instance runtime environment.</p>
   * @public
   */
  PlatformIdentifier?: string | undefined;

  /**
   * <p>Information on the IMDS configuration of the notebook instance</p>
   * @public
   */
  InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceLifecycleConfigInput {
  /**
   * <p>The name of the lifecycle configuration to describe.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceLifecycleConfigOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigArn?: string | undefined;

  /**
   * <p>The name of the lifecycle configuration.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName?: string | undefined;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance.</p>
   * @public
   */
  OnCreate?: NotebookInstanceLifecycleHook[] | undefined;

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance.</p>
   * @public
   */
  OnStart?: NotebookInstanceLifecycleHook[] | undefined;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOptimizationJobRequest {
  /**
   * <p>The name that you assigned to the optimization job.</p>
   * @public
   */
  OptimizationJobName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OptimizationJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INPROGRESS: "INPROGRESS",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type OptimizationJobStatus = (typeof OptimizationJobStatus)[keyof typeof OptimizationJobStatus];

/**
 * <p>Output values produced by an optimization job.</p>
 * @public
 */
export interface OptimizationOutput {
  /**
   * <p>The image that SageMaker recommends that you use to host the optimized model that you created
   *          with an optimization job.</p>
   * @public
   */
  RecommendedInferenceImage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOptimizationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the optimization job.</p>
   * @public
   */
  OptimizationJobArn: string | undefined;

  /**
   * <p>The current status of the optimization job.</p>
   * @public
   */
  OptimizationJobStatus: OptimizationJobStatus | undefined;

  /**
   * <p>The time when the optimization job started.</p>
   * @public
   */
  OptimizationStartTime?: Date | undefined;

  /**
   * <p>The time when the optimization job finished processing.</p>
   * @public
   */
  OptimizationEndTime?: Date | undefined;

  /**
   * <p>The time when you created the optimization job.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time when the optimization job was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If the optimization job status is <code>FAILED</code>, the reason for the
   *          failure.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The name that you assigned to the optimization job.</p>
   * @public
   */
  OptimizationJobName: string | undefined;

  /**
   * <p>The location of the source model to optimize with an optimization job.</p>
   * @public
   */
  ModelSource: OptimizationJobModelSource | undefined;

  /**
   * <p>The environment variables to set in the model container.</p>
   * @public
   */
  OptimizationEnvironment?: Record<string, string> | undefined;

  /**
   * <p>The type of instance that hosts the optimized model that you create with the optimization job.</p>
   * @public
   */
  DeploymentInstanceType: OptimizationJobDeploymentInstanceType | undefined;

  /**
   * <p>Settings for each of the optimization techniques that the job applies.</p>
   * @public
   */
  OptimizationConfigs: OptimizationConfig[] | undefined;

  /**
   * <p>Details for where to store the optimized model that you create with the optimization job.</p>
   * @public
   */
  OutputConfig: OptimizationJobOutputConfig | undefined;

  /**
   * <p>Output values produced by an optimization job.</p>
   * @public
   */
  OptimizationOutput?: OptimizationOutput | undefined;

  /**
   * <p>The ARN of the IAM role that you assigned to the optimization job.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Specifies a limit to how long a job can run. When the job reaches the time limit, SageMaker
   *             ends the job. Use this API to cap costs.</p>
   *          <p>To stop a training job, SageMaker sends the algorithm the <code>SIGTERM</code> signal,
   *             which delays job termination for 120 seconds. Algorithms can use this 120-second window
   *             to save the model artifacts, so the results of training are not lost. </p>
   *          <p>The training algorithms provided by SageMaker automatically save the intermediate results
   *             of a model training job when possible. This attempt to save artifacts is only a best
   *             effort case as model might not be in a state from which it can be saved. For example, if
   *             training has just started, the model might not be ready to save. When saved, this
   *             intermediate data is a valid model artifact. You can use it to create a model with
   *                 <code>CreateModel</code>.</p>
   *          <note>
   *             <p>The Neural Topic Model (NTM) currently does not support saving intermediate model
   *                 artifacts. When training NTMs, make sure that the maximum runtime is sufficient for
   *                 the training job to complete.</p>
   *          </note>
   * @public
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>A VPC in Amazon VPC that your optimized model has access to.</p>
   * @public
   */
  VpcConfig?: OptimizationVpcConfig | undefined;
}

/**
 * @public
 */
export interface DescribePipelineRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the pipeline to describe.</p>
   * @public
   */
  PipelineName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PipelineStatus = {
  ACTIVE: "Active",
  DELETING: "Deleting",
} as const;

/**
 * @public
 */
export type PipelineStatus = (typeof PipelineStatus)[keyof typeof PipelineStatus];

/**
 * @public
 */
export interface DescribePipelineResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  PipelineName?: string | undefined;

  /**
   * <p>The display name of the pipeline.</p>
   * @public
   */
  PipelineDisplayName?: string | undefined;

  /**
   * <p>The JSON pipeline definition.</p>
   * @public
   */
  PipelineDefinition?: string | undefined;

  /**
   * <p>The description of the pipeline.</p>
   * @public
   */
  PipelineDescription?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline uses to execute.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The status of the pipeline execution.</p>
   * @public
   */
  PipelineStatus?: PipelineStatus | undefined;

  /**
   * <p>The time when the pipeline was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time when the pipeline was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The time when the pipeline was last run.</p>
   * @public
   */
  LastRunTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>Lists the parallelism configuration applied to the pipeline.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribePipelineDefinitionForExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn: string | undefined;
}

/**
 * @public
 */
export interface DescribePipelineDefinitionForExecutionResponse {
  /**
   * <p>The JSON pipeline definition.</p>
   * @public
   */
  PipelineDefinition?: string | undefined;

  /**
   * <p>The time when the pipeline was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PipelineExecutionStatus = {
  EXECUTING: "Executing",
  FAILED: "Failed",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  SUCCEEDED: "Succeeded",
} as const;

/**
 * @public
 */
export type PipelineExecutionStatus = (typeof PipelineExecutionStatus)[keyof typeof PipelineExecutionStatus];

/**
 * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
 * @public
 */
export interface PipelineExperimentConfig {
  /**
   * <p>The name of the experiment.</p>
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * <p>The name of the trial.</p>
   * @public
   */
  TrialName?: string | undefined;
}

/**
 * <p>A step selected to run in selective execution mode.</p>
 * @public
 */
export interface SelectedStep {
  /**
   * <p>The name of the pipeline step.</p>
   * @public
   */
  StepName: string | undefined;
}

/**
 * <p>The selective execution configuration applied to the pipeline run.</p>
 * @public
 */
export interface SelectiveExecutionConfig {
  /**
   * <p>The ARN from a reference execution of the current pipeline.
   *         Used to copy input collaterals needed for the selected steps to run.
   *         The execution status of the pipeline can be either <code>Failed</code>
   *         or <code>Success</code>.</p>
   *          <p>This field is required if the steps you specify for
   *           <code>SelectedSteps</code> depend on output collaterals from any non-specified pipeline
   *           steps. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-selective-ex.html">Selective
   *           Execution for Pipeline Steps</a>.</p>
   * @public
   */
  SourcePipelineExecutionArn?: string | undefined;

  /**
   * <p>A list of pipeline steps to run. All step(s) in all path(s) between
   *         two selected steps should be included.</p>
   * @public
   */
  SelectedSteps: SelectedStep[] | undefined;
}

/**
 * @public
 */
export interface DescribePipelineExecutionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string | undefined;

  /**
   * <p>The display name of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDisplayName?: string | undefined;

  /**
   * <p>The status of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionStatus?: PipelineExecutionStatus | undefined;

  /**
   * <p>The description of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDescription?: string | undefined;

  /**
   * <p>Specifies the names of the experiment and trial created by a pipeline.</p>
   * @public
   */
  PipelineExperimentConfig?: PipelineExperimentConfig | undefined;

  /**
   * <p>If the execution failed, a message describing why.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The time when the pipeline execution was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time when the pipeline execution was modified last.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>The parallelism configuration applied to the pipeline.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;

  /**
   * <p>The selective execution configuration applied to the pipeline run.</p>
   * @public
   */
  SelectiveExecutionConfig?: SelectiveExecutionConfig | undefined;
}

/**
 * @public
 */
export interface DescribeProcessingJobRequest {
  /**
   * <p>The name of the processing job. The name must be unique within an Amazon Web Services Region in the
   *             Amazon Web Services account.</p>
   * @public
   */
  ProcessingJobName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProcessingJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type ProcessingJobStatus = (typeof ProcessingJobStatus)[keyof typeof ProcessingJobStatus];

/**
 * @public
 */
export interface DescribeProcessingJobResponse {
  /**
   * <p>The inputs for a processing job.</p>
   * @public
   */
  ProcessingInputs?: ProcessingInput[] | undefined;

  /**
   * <p>Output configuration for the processing job.</p>
   * @public
   */
  ProcessingOutputConfig?: ProcessingOutputConfig | undefined;

  /**
   * <p>The name of the processing job. The name must be unique within an Amazon Web Services Region in the
   *             Amazon Web Services account.</p>
   * @public
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   * @public
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * <p>The time limit for how long the processing job is allowed to run.</p>
   * @public
   */
  StoppingCondition?: ProcessingStoppingCondition | undefined;

  /**
   * <p>Configures the processing job to run a specified container image.</p>
   * @public
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * <p>The environment variables set in the Docker container.</p>
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * <p>Networking options for a processing job.</p>
   * @public
   */
  NetworkConfig?: NetworkConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The configuration information used to create an experiment.</p>
   * @public
   */
  ExperimentConfig?: ExperimentConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   * @public
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>Provides the status of a processing job.</p>
   * @public
   */
  ProcessingJobStatus: ProcessingJobStatus | undefined;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   * @public
   */
  ExitMessage?: string | undefined;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The time at which the processing job completed.</p>
   * @public
   */
  ProcessingEndTime?: Date | undefined;

  /**
   * <p>The time at which the processing job started.</p>
   * @public
   */
  ProcessingStartTime?: Date | undefined;

  /**
   * <p>The time at which the processing job was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The time at which the processing job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   * @public
   */
  MonitoringScheduleArn?: string | undefined;

  /**
   * <p>The ARN of an AutoML job associated with this processing job.</p>
   * @public
   */
  AutoMLJobArn?: string | undefined;

  /**
   * <p>The ARN of a training job associated with this processing job.</p>
   * @public
   */
  TrainingJobArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProjectInput {
  /**
   * <p>The name of the project to describe.</p>
   * @public
   */
  ProjectName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProjectStatus = {
  CREATE_COMPLETED: "CreateCompleted",
  CREATE_FAILED: "CreateFailed",
  CREATE_IN_PROGRESS: "CreateInProgress",
  DELETE_COMPLETED: "DeleteCompleted",
  DELETE_FAILED: "DeleteFailed",
  DELETE_IN_PROGRESS: "DeleteInProgress",
  PENDING: "Pending",
  UPDATE_COMPLETED: "UpdateCompleted",
  UPDATE_FAILED: "UpdateFailed",
  UPDATE_IN_PROGRESS: "UpdateInProgress",
} as const;

/**
 * @public
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

/**
 * <p>Details of a provisioned service catalog product. For information about service catalog,
 *             see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
 *                 Catalog</a>.</p>
 * @public
 */
export interface ServiceCatalogProvisionedProductDetails {
  /**
   * <p>The ID of the provisioned product.</p>
   * @public
   */
  ProvisionedProductId?: string | undefined;

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
   * @public
   */
  ProvisionedProductStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProjectOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  ProjectName: string | undefined;

  /**
   * <p>The ID of the project.</p>
   * @public
   */
  ProjectId: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  ProjectDescription?: string | undefined;

  /**
   * <p>Information used to provision a service catalog product. For information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service
   *             Catalog</a>.</p>
   * @public
   */
  ServiceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails | undefined;

  /**
   * <p>Information about a provisioned service catalog product.</p>
   * @public
   */
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails | undefined;

  /**
   * <p>The status of the project.</p>
   * @public
   */
  ProjectStatus: ProjectStatus | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>The time when the project was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The timestamp when project was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
}

/**
 * @public
 */
export interface DescribeSpaceRequest {
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
 * @enum
 */
export const SpaceStatus = {
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
export type SpaceStatus = (typeof SpaceStatus)[keyof typeof SpaceStatus];

/**
 * @public
 */
export interface DescribeSpaceResponse {
  /**
   * <p>The ID of the associated domain.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The space's Amazon Resource Name (ARN).</p>
   * @public
   */
  SpaceArn?: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName?: string | undefined;

  /**
   * <p>The ID of the space's profile in the Amazon EFS volume.</p>
   * @public
   */
  HomeEfsFileSystemUid?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: SpaceStatus | undefined;

  /**
   * <p>The last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The failure reason.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>A collection of space settings.</p>
   * @public
   */
  SpaceSettings?: SpaceSettings | undefined;

  /**
   * <p>The collection of ownership settings for a space.</p>
   * @public
   */
  OwnershipSettings?: OwnershipSettings | undefined;

  /**
   * <p>The collection of space sharing settings for a space.</p>
   * @public
   */
  SpaceSharingSettings?: SpaceSharingSettings | undefined;

  /**
   * <p>The name of the space that appears in the Amazon SageMaker Studio UI.</p>
   * @public
   */
  SpaceDisplayName?: string | undefined;

  /**
   * <p>Returns the URL of the space. If the space is created with Amazon Web Services IAM Identity
   *       Center (Successor to Amazon Web Services Single Sign-On) authentication, users can navigate to
   *       the URL after appending the respective redirect parameter for the application type to be
   *       federated through Amazon Web Services IAM Identity Center.</p>
   *          <p>The following application types are supported:</p>
   *          <ul>
   *             <li>
   *                <p>Studio Classic: <code>&redirect=JupyterServer</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>JupyterLab: <code>&redirect=JupyterLab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Code Editor, based on Code-OSS, Visual Studio Code - Open Source:
   *             <code>&redirect=CodeEditor</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStudioLifecycleConfigRequest {
  /**
   * <p>The name of the Amazon SageMaker Studio Lifecycle Configuration to describe.</p>
   * @public
   */
  StudioLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeStudioLifecycleConfigResponse {
  /**
   * <p>The ARN of the Lifecycle Configuration to describe.</p>
   * @public
   */
  StudioLifecycleConfigArn?: string | undefined;

  /**
   * <p>The name of the Amazon SageMaker Studio Lifecycle Configuration that is
   *       described.</p>
   * @public
   */
  StudioLifecycleConfigName?: string | undefined;

  /**
   * <p>The creation time of the Amazon SageMaker Studio Lifecycle Configuration.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>This value is equivalent to CreationTime because Amazon SageMaker Studio Lifecycle
   *       Configurations are immutable.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The content of your Amazon SageMaker Studio Lifecycle Configuration script.</p>
   * @public
   */
  StudioLifecycleConfigContent?: string | undefined;

  /**
   * <p>The App type that the Lifecycle Configuration is attached to.</p>
   * @public
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType | undefined;
}

/**
 * @public
 */
export interface DescribeSubscribedWorkteamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the subscribed work team to describe.</p>
   * @public
   */
  WorkteamArn: string | undefined;
}

/**
 * <p>Describes a work team of a vendor that does the labelling job.</p>
 * @public
 */
export interface SubscribedWorkteam {
  /**
   * <p>The Amazon Resource Name (ARN) of the vendor that you have subscribed.</p>
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The title of the service provided by the vendor in the Amazon Marketplace.</p>
   * @public
   */
  MarketplaceTitle?: string | undefined;

  /**
   * <p>The name of the vendor in the Amazon Marketplace.</p>
   * @public
   */
  SellerName?: string | undefined;

  /**
   * <p>The description of the vendor from the Amazon Marketplace.</p>
   * @public
   */
  MarketplaceDescription?: string | undefined;

  /**
   * <p>Marketplace product listing ID.</p>
   * @public
   */
  ListingId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubscribedWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.</p>
   * @public
   */
  SubscribedWorkteam: SubscribedWorkteam | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingJobRequest {
  /**
   * <p>The name of the training job.</p>
   * @public
   */
  TrainingJobName: string | undefined;
}

/**
 * <p>The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.</p>
 * @public
 */
export interface MetricData {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The value of the metric.</p>
   * @public
   */
  Value?: number | undefined;

  /**
   * <p>The date and time that the algorithm emitted the metric.</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * <p>Information about the status of the rule evaluation.</p>
 * @public
 */
export interface ProfilerRuleEvaluationStatus {
  /**
   * <p>The name of the rule configuration.</p>
   * @public
   */
  RuleConfigurationName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   * @public
   */
  RuleEvaluationJobArn?: string | undefined;

  /**
   * <p>Status of the rule evaluation.</p>
   * @public
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | undefined;

  /**
   * <p>Details from the rule evaluation.</p>
   * @public
   */
  StatusDetails?: string | undefined;

  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ProfilingStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type ProfilingStatus = (typeof ProfilingStatus)[keyof typeof ProfilingStatus];

/**
 * @public
 * @enum
 */
export const SecondaryStatus = {
  COMPLETED: "Completed",
  DOWNLOADING: "Downloading",
  DOWNLOADING_TRAINING_IMAGE: "DownloadingTrainingImage",
  FAILED: "Failed",
  INTERRUPTED: "Interrupted",
  LAUNCHING_ML_INSTANCES: "LaunchingMLInstances",
  MAX_RUNTIME_EXCEEDED: "MaxRuntimeExceeded",
  MAX_WAIT_TIME_EXCEEDED: "MaxWaitTimeExceeded",
  PENDING: "Pending",
  PREPARING_TRAINING_STACK: "PreparingTrainingStack",
  RESTARTING: "Restarting",
  STARTING: "Starting",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  TRAINING: "Training",
  UPDATING: "Updating",
  UPLOADING: "Uploading",
} as const;

/**
 * @public
 */
export type SecondaryStatus = (typeof SecondaryStatus)[keyof typeof SecondaryStatus];

/**
 * <p>An array element of <code>SecondaryStatusTransitions</code> for <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrainingJob.html">DescribeTrainingJob</a>. It provides additional details about a status that the
 *             training job has transitioned through. A training job can be in one of several states,
 *             for example, starting, downloading, training, or uploading. Within each state, there are
 *             a number of intermediate states. For example, within the starting state, SageMaker could be
 *             starting the training job or launching the ML instances. These transitional states are
 *             referred to as the job's secondary
 *             status.
 *             </p>
 *          <p></p>
 * @public
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
   * @public
   */
  Status: SecondaryStatus | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned to the current secondary
   *             status state.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the training job transitioned out of this secondary status
   *             state into another secondary status state or when the training job has ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

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
   *                 <code>TrainingJobStatus</code> and <code>SecondaryStatus</code> in <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrainingJob.html">DescribeTrainingJob</a>, and <code>StatusMessage</code> together. For example,
   *             at the start of a training job, you might see the following:</p>
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
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const WarmPoolResourceStatus = {
  AVAILABLE: "Available",
  INUSE: "InUse",
  REUSED: "Reused",
  TERMINATED: "Terminated",
} as const;

/**
 * @public
 */
export type WarmPoolResourceStatus = (typeof WarmPoolResourceStatus)[keyof typeof WarmPoolResourceStatus];

/**
 * <p>Status and billing information about the warm pool.</p>
 * @public
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
   * @public
   */
  Status: WarmPoolResourceStatus | undefined;

  /**
   * <p>The billable time in seconds used by the warm pool. Billable time refers to the
   *             absolute wall-clock time.</p>
   *          <p>Multiply <code>ResourceRetainedBillableTimeInSeconds</code> by the number of instances
   *                 (<code>InstanceCount</code>) in your training cluster to get the total compute time
   *             SageMaker bills you if you run warm pool training. The formula is as follows:
   *                 <code>ResourceRetainedBillableTimeInSeconds * InstanceCount</code>.</p>
   * @public
   */
  ResourceRetainedBillableTimeInSeconds?: number | undefined;

  /**
   * <p>The name of the matching training job that reused the warm pool.</p>
   * @public
   */
  ReusedByJob?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingJobResponse {
  /**
   * <p> Name of the model training job. </p>
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   * @public
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   * @public
   */
  TuningJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   * @public
   */
  LabelingJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an AutoML job.</p>
   * @public
   */
  AutoMLJobArn?: string | undefined;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model artifacts.
   *         </p>
   * @public
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
   * @public
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information on the secondary status of the training job, see <code>StatusMessage</code>
   *             under <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SecondaryStatusTransition.html">SecondaryStatusTransition</a>.</p>
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
   * @public
   */
  SecondaryStatus: SecondaryStatus | undefined;

  /**
   * <p>If the training job failed, the reason it failed. </p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Algorithm-specific parameters. </p>
   * @public
   */
  HyperParameters?: Record<string, string> | undefined;

  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.
   *         </p>
   * @public
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>The Amazon Web Services Identity and Access Management (IAM) role configured for
   *             the training job. </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input channel.
   *         </p>
   * @public
   */
  InputDataConfig?: Channel[] | undefined;

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. SageMaker creates subfolders for model artifacts. </p>
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are
   *             configured for model training. </p>
   * @public
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>The status of the warm pool associated with the training job.</p>
   * @public
   */
  WarmPoolStatus?: WarmPoolStatus | undefined;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that this training job has access
   *             to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

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
   * <p>A timestamp that indicates when the training job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are
   *             billed for the time interval between this time and the value of
   *                 <code>TrainingEndTime</code>. The start time in CloudWatch Logs might be later than this time.
   *             The difference is due to the time it takes to download the training data and to the size
   *             of the training container.</p>
   * @public
   */
  TrainingStartTime?: Date | undefined;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when SageMaker detects a job failure.</p>
   * @public
   */
  TrainingEndTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   * @public
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[] | undefined;

  /**
   * <p>A collection of <code>MetricData</code> objects that specify the names, values, and
   *             dates and times that the training algorithm emitted to Amazon CloudWatch.</p>
   * @public
   */
  FinalMetricDataList?: MetricData[] | undefined;

  /**
   * <p>If you want to allow inbound or outbound network calls, except for calls between peers
   *             within a training cluster for distributed training, choose <code>True</code>. If you
   *             enable network isolation for training jobs that are configured to use a VPC, SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithms in
   *             distributed training.</p>
   * @public
   */
  EnableInterContainerTrafficEncryption?: boolean | undefined;

  /**
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or
   *             not (<code>False</code>).</p>
   * @public
   */
  EnableManagedSpotTraining?: boolean | undefined;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   * @public
   */
  CheckpointConfig?: CheckpointConfig | undefined;

  /**
   * <p>The training time in seconds.</p>
   * @public
   */
  TrainingTimeInSeconds?: number | undefined;

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
   * @public
   */
  BillableTimeInSeconds?: number | undefined;

  /**
   * <p>Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and
   *             storage paths. To learn more about
   *             how to configure the <code>DebugHookConfig</code> parameter,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.</p>
   * @public
   */
  DebugHookConfig?: DebugHookConfig | undefined;

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
  ExperimentConfig?: ExperimentConfig | undefined;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for debugging output tensors.</p>
   * @public
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[] | undefined;

  /**
   * <p>Configuration of storage locations for the Amazon SageMaker Debugger TensorBoard output data.</p>
   * @public
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig | undefined;

  /**
   * <p>Evaluation status of Amazon SageMaker Debugger rules for debugging on a training job.</p>
   * @public
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[] | undefined;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and
   *             storage paths.</p>
   * @public
   */
  ProfilerConfig?: ProfilerConfig | undefined;

  /**
   * <p>Configuration information for Amazon SageMaker Debugger rules for profiling system and framework
   *             metrics.</p>
   * @public
   */
  ProfilerRuleConfigurations?: ProfilerRuleConfiguration[] | undefined;

  /**
   * <p>Evaluation status of Amazon SageMaker Debugger rules for profiling on a training job.</p>
   * @public
   */
  ProfilerRuleEvaluationStatuses?: ProfilerRuleEvaluationStatus[] | undefined;

  /**
   * <p>Profiling status of a training job.</p>
   * @public
   */
  ProfilingStatus?: ProfilingStatus | undefined;

  /**
   * <p>The environment variables to set in the Docker container.</p>
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * <p>The number of times to retry the job when the job fails due to an
   *                 <code>InternalServerError</code>.</p>
   * @public
   */
  RetryStrategy?: RetryStrategy | undefined;

  /**
   * <p>Configuration for remote debugging. To learn more about the remote debugging
   *             functionality of SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html">Access a training container
   *                 through Amazon Web Services Systems Manager (SSM) for remote
   *             debugging</a>.</p>
   * @public
   */
  RemoteDebugConfig?: RemoteDebugConfig | undefined;

  /**
   * <p>Contains information about the infrastructure health check configuration for the training job.</p>
   * @public
   */
  InfraCheckConfig?: InfraCheckConfig | undefined;
}

/**
 * @public
 */
export interface DescribeTransformJobRequest {
  /**
   * <p>The name of the transform job that you want to view details of.</p>
   * @public
   */
  TransformJobName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TransformJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type TransformJobStatus = (typeof TransformJobStatus)[keyof typeof TransformJobStatus];

/**
 * @public
 */
export interface DescribeTransformJobResponse {
  /**
   * <p>The name of the transform job.</p>
   * @public
   */
  TransformJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   * @public
   */
  TransformJobArn: string | undefined;

  /**
   * <p>The
   *             status of the transform job. If the transform job failed, the reason
   *             is returned in the <code>FailureReason</code> field.</p>
   * @public
   */
  TransformJobStatus: TransformJobStatus | undefined;

  /**
   * <p>If the transform job failed, <code>FailureReason</code> describes
   *             why
   *             it failed. A transform job creates a log file, which includes error
   *             messages, and stores it
   *             as
   *             an Amazon S3 object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/logging-cloudwatch.html">Log Amazon SageMaker Events with
   *                 Amazon CloudWatch</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The name of the model used in the transform job.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The
   *             maximum number
   *             of
   *             parallel requests on each instance node
   *             that can be launched in a transform job. The default value is 1.</p>
   * @public
   */
  MaxConcurrentTransforms?: number | undefined;

  /**
   * <p>The timeout and maximum number of retries for processing a transform job
   *             invocation.</p>
   * @public
   */
  ModelClientConfig?: ModelClientConfig | undefined;

  /**
   * <p>The
   *             maximum
   *             payload size, in MB, used in the
   *             transform job.</p>
   * @public
   */
  MaxPayloadInMB?: number | undefined;

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
   * @public
   */
  BatchStrategy?: BatchStrategy | undefined;

  /**
   * <p>The
   *             environment variables to set in the Docker container. We support up to 16 key and values
   *             entries in the map.</p>
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * <p>Describes the dataset to be transformed and the Amazon S3 location where it is
   *             stored.</p>
   * @public
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the
   *             transform job.</p>
   * @public
   */
  TransformOutput?: TransformOutput | undefined;

  /**
   * <p>Configuration to control how SageMaker captures inference data.</p>
   * @public
   */
  DataCaptureConfig?: BatchDataCaptureConfig | undefined;

  /**
   * <p>Describes
   *             the resources, including ML instance types and ML instance count, to
   *             use for the transform job.</p>
   * @public
   */
  TransformResources: TransformResources | undefined;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates when the transform job starts
   *             on
   *             ML instances. You are billed for the time interval between this time
   *             and the value of <code>TransformEndTime</code>.</p>
   * @public
   */
  TransformStartTime?: Date | undefined;

  /**
   * <p>Indicates when the transform job has been
   *
   *             completed, or has stopped or failed. You are billed for the time
   *             interval between this time and the value of <code>TransformStartTime</code>.</p>
   * @public
   */
  TransformEndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   * @public
   */
  LabelingJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML transform job.</p>
   * @public
   */
  AutoMLJobArn?: string | undefined;

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
  DataProcessing?: DataProcessing | undefined;

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
  ExperimentConfig?: ExperimentConfig | undefined;
}

/**
 * @public
 */
export interface DescribeTrialRequest {
  /**
   * <p>The name of the trial to describe.</p>
   * @public
   */
  TrialName: string | undefined;
}

/**
 * <p>The source of the trial.</p>
 * @public
 */
export interface TrialSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   * @public
   */
  SourceType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrialResponse {
  /**
   * <p>The name of the trial.</p>
   * @public
   */
  TrialName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   * @public
   */
  TrialArn?: string | undefined;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The name of the experiment the trial is part of.</p>
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   * @public
   */
  Source?: TrialSource | undefined;

  /**
   * <p>When the trial was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Who created the trial.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>When the trial was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Who last modified the trial.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;
}

/**
 * @public
 */
export interface DescribeTrialComponentRequest {
  /**
   * <p>The name of the trial component to describe.</p>
   * @public
   */
  TrialComponentName: string | undefined;
}

/**
 * <p>A summary of the metrics of a trial component.</p>
 * @public
 */
export interface TrialComponentMetricSummary {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>When the metric was last updated.</p>
   * @public
   */
  TimeStamp?: Date | undefined;

  /**
   * <p>The maximum value of the metric.</p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>The minimum value of the metric.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>The most recent value of the metric.</p>
   * @public
   */
  Last?: number | undefined;

  /**
   * <p>The number of samples used to generate the metric.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The average value of the metric.</p>
   * @public
   */
  Avg?: number | undefined;

  /**
   * <p>The standard deviation of the metric.</p>
   * @public
   */
  StdDev?: number | undefined;
}

/**
 * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
 * @public
 */
export interface TrialComponentSource {
  /**
   * <p>The source Amazon Resource Name (ARN).</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   * @public
   */
  SourceType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrialComponentResponse {
  /**
   * <p>The name of the trial component.</p>
   * @public
   */
  TrialComponentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   * @public
   */
  TrialComponentArn?: string | undefined;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>TrialComponentName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</p>
   * @public
   */
  Source?: TrialComponentSource | undefined;

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
  Status?: TrialComponentStatus | undefined;

  /**
   * <p>When the component started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>When the component ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>When the component was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Who created the trial component.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>When the component was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Who last modified the component.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>The hyperparameters of the component.</p>
   * @public
   */
  Parameters?: Record<string, TrialComponentParameterValue> | undefined;

  /**
   * <p>The input artifacts of the component.</p>
   * @public
   */
  InputArtifacts?: Record<string, TrialComponentArtifact> | undefined;

  /**
   * <p>The output artifacts of the component.</p>
   * @public
   */
  OutputArtifacts?: Record<string, TrialComponentArtifact> | undefined;

  /**
   * <p>Metadata properties of the tracking entity, trial, or trial component.</p>
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * <p>The metrics for the component.</p>
   * @public
   */
  Metrics?: TrialComponentMetricSummary[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string | undefined;

  /**
   * <p>A list of ARNs and, if applicable, job types for multiple sources of an experiment
   *       run.</p>
   * @public
   */
  Sources?: TrialComponentSource[] | undefined;
}

/**
 * @public
 */
export interface DescribeUserProfileRequest {
  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name. This value is not case sensitive.</p>
   * @public
   */
  UserProfileName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UserProfileStatus = {
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
export type UserProfileStatus = (typeof UserProfileStatus)[keyof typeof UserProfileStatus];

/**
 * @public
 */
export interface DescribeUserProfileResponse {
  /**
   * <p>The ID of the domain that contains the profile.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   * @public
   */
  UserProfileArn?: string | undefined;

  /**
   * <p>The user profile name.</p>
   * @public
   */
  UserProfileName?: string | undefined;

  /**
   * <p>The ID of the user's profile in the Amazon Elastic File System volume.</p>
   * @public
   */
  HomeEfsFileSystemUid?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: UserProfileStatus | undefined;

  /**
   * <p>The last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The failure reason.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The IAM Identity Center user identifier.</p>
   * @public
   */
  SingleSignOnUserIdentifier?: string | undefined;

  /**
   * <p>The IAM Identity Center user value.</p>
   * @public
   */
  SingleSignOnUserValue?: string | undefined;

  /**
   * <p>A collection of settings.</p>
   * @public
   */
  UserSettings?: UserSettings | undefined;
}

/**
 * @public
 */
export interface DescribeWorkforceRequest {
  /**
   * <p>The name of the private workforce whose access you want to restrict.
   *                 <code>WorkforceName</code> is automatically set to <code>default</code> when a
   *             workforce is created and cannot be modified. </p>
   * @public
   */
  WorkforceName: string | undefined;
}

/**
 * <p>Your OIDC IdP workforce configuration.</p>
 * @public
 */
export interface OidcConfigForResponse {
  /**
   * <p>The OIDC IdP client ID used to configure your private workforce.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The OIDC IdP issuer used to configure your private workforce.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The OIDC IdP authorization endpoint used to configure your private workforce.</p>
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * <p>The OIDC IdP token endpoint used to configure your private workforce.</p>
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * <p>The OIDC IdP user information endpoint used to configure your private workforce.</p>
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * <p>The OIDC IdP logout endpoint used to configure your private workforce.</p>
   * @public
   */
  LogoutEndpoint?: string | undefined;

  /**
   * <p>The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.</p>
   * @public
   */
  JwksUri?: string | undefined;

  /**
   * <p>An array of string identifiers used to refer to the specific pieces of user data or claims that the client application wants to access.</p>
   * @public
   */
  Scope?: string | undefined;

  /**
   * <p>A string to string map of identifiers specific to the custom identity provider (IdP) being used.</p>
   * @public
   */
  AuthenticationRequestExtraParams?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkforceStatus = {
  ACTIVE: "Active",
  DELETING: "Deleting",
  FAILED: "Failed",
  INITIALIZING: "Initializing",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type WorkforceStatus = (typeof WorkforceStatus)[keyof typeof WorkforceStatus];

/**
 * <p>A VpcConfig object that specifies the VPC that you want your workforce to connect to.</p>
 * @public
 */
export interface WorkforceVpcConfigResponse {
  /**
   * <p>The ID of the VPC that the workforce uses for communication.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnets in the VPC that you want to connect.</p>
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * <p>The IDs for the VPC service endpoints of your VPC workforce when it is created and updated.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * <p>A single private workforce, which is automatically created when you create your first
 *             private work team. You can create one private work force in each Amazon Web Services Region. By default,
 *             any workforce-related API operation used in a specific region will apply to the
 *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
 * @public
 */
export interface Workforce {
  /**
   * <p>The name of the private workforce.</p>
   * @public
   */
  WorkforceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the private workforce.</p>
   * @public
   */
  WorkforceArn: string | undefined;

  /**
   * <p>The most recent date that <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateWorkforce.html">UpdateWorkforce</a> was used to
   *             successfully add one or more IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to a private workforce's
   *             allow list.</p>
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * <p>A list of one to ten IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to be added to the
   *             workforce allow list. By default, a workforce isn't restricted to specific IP addresses.</p>
   * @public
   */
  SourceIpConfig?: SourceIpConfig | undefined;

  /**
   * <p>The subdomain for your OIDC Identity Provider.</p>
   * @public
   */
  SubDomain?: string | undefined;

  /**
   * <p>The configuration of an Amazon Cognito workforce.
   *       A single Cognito workforce is created using and corresponds to a single
   *       <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">
   *       Amazon Cognito user pool</a>.</p>
   * @public
   */
  CognitoConfig?: CognitoConfig | undefined;

  /**
   * <p>The configuration of an OIDC Identity Provider (IdP) private workforce.</p>
   * @public
   */
  OidcConfig?: OidcConfigForResponse | undefined;

  /**
   * <p>The date that the workforce is created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The configuration of a VPC workforce.</p>
   * @public
   */
  WorkforceVpcConfig?: WorkforceVpcConfigResponse | undefined;

  /**
   * <p>The status of your workforce.</p>
   * @public
   */
  Status?: WorkforceStatus | undefined;

  /**
   * <p>The reason your workforce failed.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkforceResponse {
  /**
   * <p>A single private workforce, which is automatically created when you create your first
   *             private work team. You can create one private work force in each Amazon Web Services Region. By default,
   *             any workforce-related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   * @public
   */
  Workforce: Workforce | undefined;
}

/**
 * @public
 */
export interface DescribeWorkteamRequest {
  /**
   * <p>The name of the work team to return a description of.</p>
   * @public
   */
  WorkteamName: string | undefined;
}

/**
 * <p>Provides details about a labeling work team.</p>
 * @public
 */
export interface Workteam {
  /**
   * <p>The name of the work team.</p>
   * @public
   */
  WorkteamName: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the workers that make up the work team. </p>
   *          <p>Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP).
   *             For private workforces created using Amazon Cognito use
   *             <code>CognitoMemberDefinition</code>. For workforces created using your own OIDC identity
   *             provider (IdP) use <code>OidcMemberDefinition</code>.</p>
   * @public
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the work team.</p>
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workforce.</p>
   * @public
   */
  WorkforceArn?: string | undefined;

  /**
   * <p>The Amazon Marketplace identifier for a vendor's work team.</p>
   * @public
   */
  ProductListingIds?: string[] | undefined;

  /**
   * <p>A description of the work team.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The URI of the labeling job's user interface. Workers open this URI to start labeling
   *             your data objects.</p>
   * @public
   */
  SubDomain?: string | undefined;

  /**
   * <p>The date and time that the work team was created (timestamp).</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The date and time that the work team was last updated (timestamp).</p>
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * <p>Configures SNS notifications of available or expiring work items for work
   *             teams.</p>
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * <p>Describes any access constraints that have been defined for Amazon S3 resources.</p>
   * @public
   */
  WorkerAccessConfiguration?: WorkerAccessConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeWorkteamResponse {
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.
   *         </p>
   * @public
   */
  Workteam: Workteam | undefined;
}

/**
 * <p>Specifies the serverless update concurrency configuration for an endpoint variant.</p>
 * @public
 */
export interface ProductionVariantServerlessUpdateConfig {
  /**
   * <p>The updated maximum number of concurrent invocations your serverless endpoint can process.</p>
   * @public
   */
  MaxConcurrency?: number | undefined;

  /**
   * <p>The updated amount of provisioned concurrency to allocate for the serverless endpoint.
   *    Should be less than or equal to <code>MaxConcurrency</code>.</p>
   * @public
   */
  ProvisionedConcurrency?: number | undefined;
}

/**
 * <p>Specifies weight and capacity values for a production variant.</p>
 * @public
 */
export interface DesiredWeightAndCapacity {
  /**
   * <p>The name of the variant to update.</p>
   * @public
   */
  VariantName: string | undefined;

  /**
   * <p>The variant's weight.</p>
   * @public
   */
  DesiredWeight?: number | undefined;

  /**
   * <p>The variant's capacity.</p>
   * @public
   */
  DesiredInstanceCount?: number | undefined;

  /**
   * <p>Specifies the serverless update concurrency configuration for an endpoint variant.</p>
   * @public
   */
  ServerlessUpdateConfig?: ProductionVariantServerlessUpdateConfig | undefined;
}

/**
 * <p>Information of a particular device.</p>
 * @public
 */
export interface Device {
  /**
   * <p>The name of the device.</p>
   * @public
   */
  DeviceName: string | undefined;

  /**
   * <p>Description of the device.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Amazon Web Services Internet of Things (IoT) object name.</p>
   * @public
   */
  IotThingName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceDeploymentStatus = {
  Deployed: "DEPLOYED",
  Failed: "FAILED",
  InProgress: "INPROGRESS",
  ReadyToDeploy: "READYTODEPLOY",
  Stopped: "STOPPED",
  Stopping: "STOPPING",
} as const;

/**
 * @public
 */
export type DeviceDeploymentStatus = (typeof DeviceDeploymentStatus)[keyof typeof DeviceDeploymentStatus];

/**
 * <p>Contains information summarizing device details and deployment status.</p>
 * @public
 */
export interface DeviceDeploymentSummary {
  /**
   * <p>The ARN of the edge deployment plan.</p>
   * @public
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * <p>The name of the edge deployment plan.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the stage in the edge deployment plan.</p>
   * @public
   */
  StageName: string | undefined;

  /**
   * <p>The name of the deployed stage.</p>
   * @public
   */
  DeployedStageName?: string | undefined;

  /**
   * <p>The name of the fleet to which the device belongs to.</p>
   * @public
   */
  DeviceFleetName?: string | undefined;

  /**
   * <p>The name of the device.</p>
   * @public
   */
  DeviceName: string | undefined;

  /**
   * <p>The ARN of the device.</p>
   * @public
   */
  DeviceArn: string | undefined;

  /**
   * <p>The deployment status of the device.</p>
   * @public
   */
  DeviceDeploymentStatus?: DeviceDeploymentStatus | undefined;

  /**
   * <p>The detailed error message for the deployoment status result.</p>
   * @public
   */
  DeviceDeploymentStatusMessage?: string | undefined;

  /**
   * <p>The description of the device.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The time when the deployment on the device started.</p>
   * @public
   */
  DeploymentStartTime?: Date | undefined;
}

/**
 * <p>Summary of the device fleet.</p>
 * @public
 */
export interface DeviceFleetSummary {
  /**
   * <p>Amazon Resource Name (ARN) of the device fleet.</p>
   * @public
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>Name of the device fleet.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>Timestamp of when the device fleet was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Timestamp of when the device fleet was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>Status of devices.</p>
 * @public
 */
export interface DeviceStats {
  /**
   * <p>The number of devices connected with a heartbeat.</p>
   * @public
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * <p>The number of registered devices.</p>
   * @public
   */
  RegisteredDeviceCount: number | undefined;
}

/**
 * <p>Summary of model on edge device.</p>
 * @public
 */
export interface EdgeModelSummary {
  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The version model.</p>
   * @public
   */
  ModelVersion: string | undefined;
}

/**
 * <p>Summary of the device.</p>
 * @public
 */
export interface DeviceSummary {
  /**
   * <p>The unique identifier of the device.</p>
   * @public
   */
  DeviceName: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  DeviceArn: string | undefined;

  /**
   * <p>A description of the device.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the fleet the device belongs to.</p>
   * @public
   */
  DeviceFleetName?: string | undefined;

  /**
   * <p>The Amazon Web Services Internet of Things (IoT) object thing name associated with the device..</p>
   * @public
   */
  IotThingName?: string | undefined;

  /**
   * <p>The timestamp of the last registration or de-reregistration.</p>
   * @public
   */
  RegistrationTime?: Date | undefined;

  /**
   * <p>The last heartbeat received from the device.</p>
   * @public
   */
  LatestHeartbeat?: Date | undefined;

  /**
   * <p>Models on the device.</p>
   * @public
   */
  Models?: EdgeModelSummary[] | undefined;

  /**
   * <p>Edge Manager agent version.</p>
   * @public
   */
  AgentVersion?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Direction = {
  ASCENDANTS: "Ascendants",
  BOTH: "Both",
  DESCENDANTS: "Descendants",
} as const;

/**
 * @public
 */
export type Direction = (typeof Direction)[keyof typeof Direction];

/**
 * @public
 */
export interface DisableSagemakerServicecatalogPortfolioInput {}

/**
 * @public
 */
export interface DisableSagemakerServicecatalogPortfolioOutput {}

/**
 * @public
 */
export interface DisassociateTrialComponentRequest {
  /**
   * <p>The name of the component to disassociate from the trial.</p>
   * @public
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the trial to disassociate from.</p>
   * @public
   */
  TrialName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrialComponentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   * @public
   */
  TrialComponentArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   * @public
   */
  TrialArn?: string | undefined;
}

/**
 * <p>The domain's details.</p>
 * @public
 */
export interface DomainDetails {
  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   * @public
   */
  DomainArn?: string | undefined;

  /**
   * <p>The domain ID.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The domain name.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: DomainStatus | undefined;

  /**
   * <p>The creation time.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The domain's URL.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>A collection of settings that update the current configuration for the
 *         <code>RStudioServerPro</code> Domain-level app.</p>
 * @public
 */
export interface RStudioServerProDomainSettingsForUpdate {
  /**
   * <p>The execution role for the <code>RStudioServerPro</code> Domain-level app.</p>
   * @public
   */
  DomainExecutionRoleArn: string | undefined;

  /**
   * <p>Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that
   *          the version runs on.</p>
   * @public
   */
  DefaultResourceSpec?: ResourceSpec | undefined;

  /**
   * <p>A URL pointing to an RStudio Connect server.</p>
   * @public
   */
  RStudioConnectUrl?: string | undefined;

  /**
   * <p>A URL pointing to an RStudio Package Manager server.</p>
   * @public
   */
  RStudioPackageManagerUrl?: string | undefined;
}

/**
 * <p>A collection of <code>Domain</code> configuration settings to update.</p>
 * @public
 */
export interface DomainSettingsForUpdate {
  /**
   * <p>A collection of <code>RStudioServerPro</code> Domain-level app settings to update. A
   *       single <code>RStudioServerPro</code> application is created for a domain.</p>
   * @public
   */
  RStudioServerProDomainSettingsForUpdate?: RStudioServerProDomainSettingsForUpdate | undefined;

  /**
   * <p>The configuration for attaching a SageMaker user profile name to the execution
   *       role as a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html">sts:SourceIdentity key</a>. This configuration can only be modified if there are no
   *       apps in the <code>InService</code> or <code>Pending</code> state.</p>
   * @public
   */
  ExecutionRoleIdentityConfig?: ExecutionRoleIdentityConfig | undefined;

  /**
   * <p>The security groups for the Amazon Virtual Private Cloud that the <code>Domain</code> uses for
   *       communication between Domain-level apps and user apps.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>A collection of settings that configure the domain's Docker interaction.</p>
   * @public
   */
  DockerSettings?: DockerSettings | undefined;

  /**
   * <p>A collection of settings that configure the Amazon Q experience within the domain.</p>
   * @public
   */
  AmazonQSettings?: AmazonQSettings | undefined;
}

/**
 * <p>A specification for a predefined metric.</p>
 * @public
 */
export interface PredefinedMetricSpecification {
  /**
   * <p>The metric type. You can only apply SageMaker metric types to SageMaker endpoints.</p>
   * @public
   */
  PredefinedMetricType?: string | undefined;
}

/**
 * <p>An object containing information about a metric.</p>
 * @public
 */
export type MetricSpecification =
  | MetricSpecification.CustomizedMember
  | MetricSpecification.PredefinedMember
  | MetricSpecification.$UnknownMember;

/**
 * @public
 */
export namespace MetricSpecification {
  /**
   * <p>Information about a predefined metric.</p>
   * @public
   */
  export interface PredefinedMember {
    Predefined: PredefinedMetricSpecification;
    Customized?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a customized metric.</p>
   * @public
   */
  export interface CustomizedMember {
    Predefined?: never;
    Customized: CustomizedMetricSpecification;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Predefined?: never;
    Customized?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Predefined: (value: PredefinedMetricSpecification) => T;
    Customized: (value: CustomizedMetricSpecification) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MetricSpecification, visitor: Visitor<T>): T => {
    if (value.Predefined !== undefined) return visitor.Predefined(value.Predefined);
    if (value.Customized !== undefined) return visitor.Customized(value.Customized);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A target tracking scaling policy. Includes support for predefined or customized metrics.</p>
 *          <p>When using the <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScalingPolicy.html">PutScalingPolicy</a> API,
 *          this parameter is required when you are creating a policy with the policy type <code>TargetTrackingScaling</code>.</p>
 * @public
 */
export interface TargetTrackingScalingPolicyConfiguration {
  /**
   * <p>An object containing information about a metric.</p>
   * @public
   */
  MetricSpecification?: MetricSpecification | undefined;

  /**
   * <p>The recommended target value to specify for the metric when creating a scaling policy.</p>
   * @public
   */
  TargetValue?: number | undefined;
}

/**
 * <p>An object containing a recommended scaling policy.</p>
 * @public
 */
export type ScalingPolicy = ScalingPolicy.TargetTrackingMember | ScalingPolicy.$UnknownMember;

/**
 * @public
 */
export namespace ScalingPolicy {
  /**
   * <p>A target tracking scaling policy. Includes support for predefined or customized metrics.</p>
   * @public
   */
  export interface TargetTrackingMember {
    TargetTracking: TargetTrackingScalingPolicyConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    TargetTracking?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    TargetTracking: (value: TargetTrackingScalingPolicyConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ScalingPolicy, visitor: Visitor<T>): T => {
    if (value.TargetTracking !== undefined) return visitor.TargetTracking(value.TargetTracking);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>An object with the recommended values for you to specify when creating an autoscaling policy.</p>
 * @public
 */
export interface DynamicScalingConfiguration {
  /**
   * <p>The recommended minimum capacity to specify for your autoscaling policy.</p>
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * <p>The recommended maximum capacity to specify for your autoscaling policy.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The recommended scale in cooldown time for your autoscaling policy.</p>
   * @public
   */
  ScaleInCooldown?: number | undefined;

  /**
   * <p>The recommended scale out cooldown time for your autoscaling policy.</p>
   * @public
   */
  ScaleOutCooldown?: number | undefined;

  /**
   * <p>An object of the scaling policies for each metric.</p>
   * @public
   */
  ScalingPolicies?: ScalingPolicy[] | undefined;
}

/**
 * <p>A directed edge connecting two lineage entities.</p>
 * @public
 */
export interface Edge {
  /**
   * <p>The Amazon Resource Name (ARN) of the source lineage entity of the directed edge.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the destination lineage entity of the directed edge.</p>
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * <p>The type of the Association(Edge) between the source and destination. For example <code>ContributedTo</code>,
   *          <code>Produced</code>, or <code>DerivedFrom</code>.</p>
   * @public
   */
  AssociationType?: AssociationEdgeType | undefined;
}

/**
 * <p>Contains information summarizing an edge deployment plan.</p>
 * @public
 */
export interface EdgeDeploymentPlanSummary {
  /**
   * <p>The ARN of the edge deployment plan.</p>
   * @public
   */
  EdgeDeploymentPlanArn: string | undefined;

  /**
   * <p>The name of the edge deployment plan.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>The name of the device fleet used for the deployment. </p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The number of edge devices with the successful deployment.</p>
   * @public
   */
  EdgeDeploymentSuccess: number | undefined;

  /**
   * <p>The number of edge devices yet to pick up the deployment, or in progress.</p>
   * @public
   */
  EdgeDeploymentPending: number | undefined;

  /**
   * <p>The number of edge devices that failed the deployment.</p>
   * @public
   */
  EdgeDeploymentFailed: number | undefined;

  /**
   * <p>The time when the edge deployment plan was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time when the edge deployment plan was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>Status of edge devices with this model.</p>
 * @public
 */
export interface EdgeModelStat {
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
   * <p>The number of devices that have this model version and do not have a heart beat.</p>
   * @public
   */
  OfflineDeviceCount: number | undefined;

  /**
   * <p>The number of devices that have this model version and have a heart beat. </p>
   * @public
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * <p>The number of devices that have this model version, a heart beat, and are currently running.</p>
   * @public
   */
  ActiveDeviceCount: number | undefined;

  /**
   * <p>The number of devices with this model version and are producing sample data.</p>
   * @public
   */
  SamplingDeviceCount: number | undefined;
}

/**
 * <p>Summary of edge packaging job.</p>
 * @public
 */
export interface EdgePackagingJobSummary {
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
   * <p>The status of the edge packaging job.</p>
   * @public
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | undefined;

  /**
   * <p>The name of the SageMaker Neo compilation job.</p>
   * @public
   */
  CompilationJobName?: string | undefined;

  /**
   * <p>The name of the model.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The version of the model.</p>
   * @public
   */
  ModelVersion?: string | undefined;

  /**
   * <p>The timestamp of when the job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The timestamp of when the edge packaging job was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>The configurations and outcomes of an Amazon EMR step execution.</p>
 * @public
 */
export interface EMRStepMetadata {
  /**
   * <p>The identifier of the EMR cluster.</p>
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * <p>The identifier of the EMR cluster step.</p>
   * @public
   */
  StepId?: string | undefined;

  /**
   * <p>The name of the EMR cluster step.</p>
   * @public
   */
  StepName?: string | undefined;

  /**
   * <p>The path to the log file where the cluster step's failure root cause
   *             is recorded.</p>
   * @public
   */
  LogFilePath?: string | undefined;
}

/**
 * @public
 */
export interface EnableSagemakerServicecatalogPortfolioInput {}

/**
 * @public
 */
export interface EnableSagemakerServicecatalogPortfolioOutput {}

/**
 * <p>A schedule for a model monitoring job. For information about model monitor, see
 *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model
 *                 Monitor</a>.</p>
 * @public
 */
export interface MonitoringSchedule {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleArn?: string | undefined;

  /**
   * <p>The name of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName?: string | undefined;

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
   * @public
   */
  MonitoringScheduleStatus?: ScheduleStatus | undefined;

  /**
   * <p>The type of the monitoring job definition to schedule.</p>
   * @public
   */
  MonitoringType?: MonitoringType | undefined;

  /**
   * <p>If the monitoring schedule failed, the reason it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The time that the monitoring schedule was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the monitoring schedule was changed.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Configures the monitoring schedule and defines the monitoring job.</p>
   * @public
   */
  MonitoringScheduleConfig?: MonitoringScheduleConfig | undefined;

  /**
   * <p>The endpoint that hosts the model being monitored.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>Summary of information about the last monitoring job to run.</p>
   * @public
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary | undefined;

  /**
   * <p>A list of the tags associated with the monitoring schedlue. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A hosted endpoint for real-time inference.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>The endpoint configuration associated with the endpoint.</p>
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>A list of the production variants hosted on the endpoint. Each production variant is a
   *             model.</p>
   * @public
   */
  ProductionVariants?: ProductionVariantSummary[] | undefined;

  /**
   * <p>The currently active data capture configuration used by your Endpoint.</p>
   * @public
   */
  DataCaptureConfig?: DataCaptureConfigSummary | undefined;

  /**
   * <p>The status of the endpoint.</p>
   * @public
   */
  EndpointStatus: EndpointStatus | undefined;

  /**
   * <p>If the endpoint failed, the reason it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The time that the endpoint was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time the endpoint was modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A list of monitoring schedules for the endpoint. For information about model
   *             monitoring, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.</p>
   * @public
   */
  MonitoringSchedules?: MonitoringSchedule[] | undefined;

  /**
   * <p>A list of the tags associated with the endpoint. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General
   *                 Reference Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A list of the shadow variants hosted on the endpoint. Each shadow variant is a model
   *             in shadow mode with production traffic replicated from the production variant.</p>
   * @public
   */
  ShadowProductionVariants?: ProductionVariantSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointConfigSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
} as const;

/**
 * @public
 */
export type EndpointConfigSortKey = (typeof EndpointConfigSortKey)[keyof typeof EndpointConfigSortKey];

/**
 * <p>Metadata for an endpoint configuration step.</p>
 * @public
 */
export interface EndpointConfigStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration used in the step.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Provides summary information for an endpoint configuration.</p>
 * @public
 */
export interface EndpointConfigSummary {
  /**
   * <p>The name of the endpoint configuration.</p>
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   * @public
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
  Status: "Status",
} as const;

/**
 * @public
 */
export type EndpointSortKey = (typeof EndpointSortKey)[keyof typeof EndpointSortKey];

/**
 * <p>Metadata for an endpoint step.</p>
 * @public
 */
export interface EndpointStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint in the step.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Provides summary information for an endpoint.</p>
 * @public
 */
export interface EndpointSummary {
  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;

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
   *                         <code>DescribeEndpointOutput$FailureReason</code> for information about the
   *                     failure. <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html">DeleteEndpoint</a> is the only operation that can be performed on a
   *                     failed endpoint.</p>
   *             </li>
   *          </ul>
   *          <p>To get a list of endpoints with a specified status, use the <code>StatusEquals</code>
   *             filter with a call to <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListEndpoints.html">ListEndpoints</a>.</p>
   * @public
   */
  EndpointStatus: EndpointStatus | undefined;
}

/**
 * <p>The properties of an experiment as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 * @public
 */
export interface Experiment {
  /**
   * <p>The name of the experiment.</p>
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   * @public
   */
  ExperimentArn?: string | undefined;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The source of the experiment.</p>
   * @public
   */
  Source?: ExperimentSource | undefined;

  /**
   * <p>The description of the experiment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>When the experiment was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Who created the experiment.</p>
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * <p>When the experiment was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Information about the user who created or modified an experiment, trial, trial
   *       component, lineage group, project, or model card.</p>
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * <p>The list of tags that are associated with the experiment. You can use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API to search on the tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>A summary of the properties of an experiment. To get the complete set of properties, call
 *       the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeExperiment.html">DescribeExperiment</a> API and provide the
 *       <code>ExperimentName</code>.</p>
 * @public
 */
export interface ExperimentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   * @public
   */
  ExperimentArn?: string | undefined;

  /**
   * <p>The name of the experiment.</p>
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code> isn't specified,
   *         <code>ExperimentName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The source of the experiment.</p>
   * @public
   */
  ExperimentSource?: ExperimentSource | undefined;

  /**
   * <p>When the experiment was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the experiment was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>The container for the metadata for Fail step.</p>
 * @public
 */
export interface FailStepMetadata {
  /**
   * <p>A message that you define and then is processed and rendered by
   *          the Fail step when the error occurs.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>Amazon SageMaker Feature Store stores features in a collection called Feature Group. A
 *          Feature Group can be visualized as a table which has rows, with a unique identifier for
 *          each row where each column in the table is a feature. In principle, a Feature Group is
 *          composed of features and values per features.</p>
 * @public
 */
export interface FeatureGroup {
  /**
   * <p>The Amazon Resource Name (ARN) of a <code>FeatureGroup</code>.</p>
   * @public
   */
  FeatureGroupArn?: string | undefined;

  /**
   * <p>The name of the <code>FeatureGroup</code>.</p>
   * @public
   */
  FeatureGroupName?: string | undefined;

  /**
   * <p>The name of the <code>Feature</code> whose value uniquely identifies a
   *             <code>Record</code> defined in the <code>FeatureGroup</code>
   *             <code>FeatureDefinitions</code>.</p>
   * @public
   */
  RecordIdentifierFeatureName?: string | undefined;

  /**
   * <p>The name of the feature that stores the <code>EventTime</code> of a Record in a
   *             <code>FeatureGroup</code>.</p>
   *          <p>A <code>EventTime</code> is point in time when a new event occurs that corresponds to
   *          the creation or update of a <code>Record</code> in <code>FeatureGroup</code>. All
   *             <code>Records</code> in the <code>FeatureGroup</code> must have a corresponding
   *             <code>EventTime</code>.</p>
   * @public
   */
  EventTimeFeatureName?: string | undefined;

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
   * @public
   */
  FeatureDefinitions?: FeatureDefinition[] | undefined;

  /**
   * <p>The time a <code>FeatureGroup</code> was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A timestamp indicating the last time you updated the feature group.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or
   *             <code>KMSKeyId</code>, for at rest data encryption. You can turn
   *             <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag
   *          at General Assembly.</p>
   *          <p>The default value is <code>False</code>.</p>
   * @public
   */
  OnlineStoreConfig?: OnlineStoreConfig | undefined;

  /**
   * <p>The configuration of an <code>OfflineStore</code>.</p>
   *          <p>Provide an <code>OfflineStoreConfig</code> in a request to
   *             <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p>
   *          <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or <code>KMSKeyId</code>, in
   *             <code>S3StorageConfig</code>.</p>
   * @public
   */
  OfflineStoreConfig?: OfflineStoreConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to create the feature
   *          group.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A <code>FeatureGroup</code> status.</p>
   * @public
   */
  FeatureGroupStatus?: FeatureGroupStatus | undefined;

  /**
   * <p>The status of <code>OfflineStore</code>.</p>
   * @public
   */
  OfflineStoreStatus?: OfflineStoreStatus | undefined;

  /**
   * <p>A value that indicates whether the feature group was updated successfully.</p>
   * @public
   */
  LastUpdateStatus?: LastUpdateStatus | undefined;

  /**
   * <p>The reason that the <code>FeatureGroup</code> failed to be replicated in the
   *             <code>OfflineStore</code>. This is failure may be due to a failure to create a
   *             <code>FeatureGroup</code> in or delete a <code>FeatureGroup</code> from the
   *             <code>OfflineStore</code>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>A free form description of a <code>FeatureGroup</code>.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Tags used to define a <code>FeatureGroup</code>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FeatureGroupSortBy = {
  CREATION_TIME: "CreationTime",
  FEATURE_GROUP_STATUS: "FeatureGroupStatus",
  NAME: "Name",
  OFFLINE_STORE_STATUS: "OfflineStoreStatus",
} as const;

/**
 * @public
 */
export type FeatureGroupSortBy = (typeof FeatureGroupSortBy)[keyof typeof FeatureGroupSortBy];

/**
 * @public
 * @enum
 */
export const FeatureGroupSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type FeatureGroupSortOrder = (typeof FeatureGroupSortOrder)[keyof typeof FeatureGroupSortOrder];

/**
 * <p>The name, ARN, <code>CreationTime</code>, <code>FeatureGroup</code> values,
 *             <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a
 *             <code>FeatureGroup</code>.</p>
 * @public
 */
export interface FeatureGroupSummary {
  /**
   * <p>The name of <code>FeatureGroup</code>.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>Unique identifier for the <code>FeatureGroup</code>.</p>
   * @public
   */
  FeatureGroupArn: string | undefined;

  /**
   * <p>A timestamp indicating the time of creation time of the
   *          <code>FeatureGroup</code>.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of a FeatureGroup. The status can be any of the following:
   *             <code>Creating</code>, <code>Created</code>, <code>CreateFail</code>,
   *             <code>Deleting</code> or <code>DetailFail</code>. </p>
   * @public
   */
  FeatureGroupStatus?: FeatureGroupStatus | undefined;

  /**
   * <p>Notifies you if replicating data into the <code>OfflineStore</code> has failed. Returns
   *          either: <code>Active</code> or <code>Blocked</code>.</p>
   * @public
   */
  OfflineStoreStatus?: OfflineStoreStatus | undefined;
}

/**
 * <p>The metadata for a feature. It can either be metadata that you specify, or metadata that
 *          is updated automatically.</p>
 * @public
 */
export interface FeatureMetadata {
  /**
   * <p>The Amazon Resource Number (ARN) of the feature group.</p>
   * @public
   */
  FeatureGroupArn?: string | undefined;

  /**
   * <p>The name of the feature group containing the feature.</p>
   * @public
   */
  FeatureGroupName?: string | undefined;

  /**
   * <p>The name of feature.</p>
   * @public
   */
  FeatureName?: string | undefined;

  /**
   * <p>The data type of the feature.</p>
   * @public
   */
  FeatureType?: FeatureType | undefined;

  /**
   * <p>A timestamp indicating when the feature was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A timestamp indicating when the feature was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>An optional description that you specify to better describe the feature.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Optional key-value pairs that you specify to better describe the feature.</p>
   * @public
   */
  Parameters?: FeatureParameter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Operator = {
  CONTAINS: "Contains",
  EQUALS: "Equals",
  EXISTS: "Exists",
  GREATER_THAN: "GreaterThan",
  GREATER_THAN_OR_EQUAL_TO: "GreaterThanOrEqualTo",
  IN: "In",
  LESS_THAN: "LessThan",
  LESS_THAN_OR_EQUAL_TO: "LessThanOrEqualTo",
  NOT_EQUALS: "NotEquals",
  NOT_EXISTS: "NotExists",
} as const;

/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * <p>A conditional statement for a search expression that includes a resource property, a
 *       Boolean operator, and a value. Resources that match the statement are returned in the
 *       results from the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.</p>
 *          <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, SageMaker uses the
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
 *                   <code>\{</code>
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
 *                   <code>\}</code>
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
 *                   <code> \{</code>
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
 *                   <code> \}</code>
 *                </p>
 *             </dd>
 *             <dt>Tags</dt>
 *             <dd>
 *                <p>To define a tag filter, enter a value with the form
 *             <code>Tags.<key></code>.</p>
 *             </dd>
 *          </dl>
 * @public
 */
export interface Filter {
  /**
   * <p>A resource property name. For example, <code>TrainingJobName</code>. For
   *       valid property names, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SearchRecord.html">SearchRecord</a>.
   *       You must specify a valid property for the resource.</p>
   * @public
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
   * @public
   */
  Operator?: Operator | undefined;

  /**
   * <p>A value used with <code>Name</code> and <code>Operator</code> to determine which
   *         resources satisfy the filter's condition. For numerical properties, <code>Value</code>
   *         must be an integer or floating-point decimal. For timestamp properties,
   *         <code>Value</code> must be an ISO 8601 date-time string of the following format:
   *         <code>YYYY-mm-dd'T'HH:MM:SS</code>.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Contains summary information about the flow definition.</p>
 * @public
 */
export interface FlowDefinitionSummary {
  /**
   * <p>The name of the flow definition.</p>
   * @public
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values:</p>
   * @public
   */
  FlowDefinitionStatus: FlowDefinitionStatus | undefined;

  /**
   * <p>The timestamp when SageMaker created the flow definition.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is <code>Failed</code>.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceFleetReportRequest {
  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceFleetReportResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  DeviceFleetArn: string | undefined;

  /**
   * <p>The name of the fleet.</p>
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The output configuration for storing sample data collected by the fleet.</p>
   * @public
   */
  OutputConfig?: EdgeOutputConfig | undefined;

  /**
   * <p>Description of the fleet.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Timestamp of when the report was generated.</p>
   * @public
   */
  ReportGenerated?: Date | undefined;

  /**
   * <p>Status of devices.</p>
   * @public
   */
  DeviceStats?: DeviceStats | undefined;

  /**
   * <p>The versions of Edge Manager agent deployed on the fleet.</p>
   * @public
   */
  AgentVersions?: AgentVersion[] | undefined;

  /**
   * <p>Status of model on device.</p>
   * @public
   */
  ModelStats?: EdgeModelStat[] | undefined;
}

/**
 * @public
 */
export interface GetLineageGroupPolicyRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetLineageGroupPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupArn?: string | undefined;

  /**
   * <p>The resource policy that gives access to the lineage group in another account.</p>
   * @public
   */
  ResourcePolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetModelPackageGroupPolicyInput {
  /**
   * <p>The name of the model group for which to get the resource policy.</p>
   * @public
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetModelPackageGroupPolicyOutput {
  /**
   * <p>The resource policy for the model group.</p>
   * @public
   */
  ResourcePolicy: string | undefined;
}

/**
 * @public
 */
export interface GetSagemakerServicecatalogPortfolioStatusInput {}

/**
 * @public
 * @enum
 */
export const SagemakerServicecatalogStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;

/**
 * @public
 */
export type SagemakerServicecatalogStatus =
  (typeof SagemakerServicecatalogStatus)[keyof typeof SagemakerServicecatalogStatus];

/**
 * @public
 */
export interface GetSagemakerServicecatalogPortfolioStatusOutput {
  /**
   * <p>Whether Service Catalog is enabled or disabled in SageMaker.</p>
   * @public
   */
  Status?: SagemakerServicecatalogStatus | undefined;
}

/**
 * <p>An object where you specify the anticipated traffic pattern for an endpoint.</p>
 * @public
 */
export interface ScalingPolicyObjective {
  /**
   * <p>The minimum number of expected requests to your endpoint per minute.</p>
   * @public
   */
  MinInvocationsPerMinute?: number | undefined;

  /**
   * <p>The maximum number of expected requests to your endpoint per minute.</p>
   * @public
   */
  MaxInvocationsPerMinute?: number | undefined;
}

/**
 * @public
 */
export interface GetScalingConfigurationRecommendationRequest {
  /**
   * <p>The name of a previously completed Inference Recommender job.</p>
   * @public
   */
  InferenceRecommendationsJobName: string | undefined;

  /**
   * <p>The recommendation ID of a previously completed inference recommendation. This ID should come from one of the
   *          recommendations returned by the job specified in the <code>InferenceRecommendationsJobName</code> field.</p>
   *          <p>Specify either this field or the <code>EndpointName</code> field.</p>
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * <p>The name of an endpoint benchmarked during a previously completed inference recommendation job. This name should come from one of the
   *          recommendations returned by the job specified in the <code>InferenceRecommendationsJobName</code> field.</p>
   *          <p>Specify either this field or the <code>RecommendationId</code> field.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>The percentage of how much utilization you want an instance to use before autoscaling. The default value is 50%.</p>
   * @public
   */
  TargetCpuUtilizationPerCore?: number | undefined;

  /**
   * <p>An object where you specify the anticipated traffic pattern for an endpoint.</p>
   * @public
   */
  ScalingPolicyObjective?: ScalingPolicyObjective | undefined;
}

/**
 * <p>The metric for a scaling policy.</p>
 * @public
 */
export interface ScalingPolicyMetric {
  /**
   * <p>The number of invocations sent to a model, normalized by <code>InstanceCount</code>
   *          in each ProductionVariant. <code>1/numberOfInstances</code> is sent as the value on each
   *          request, where <code>numberOfInstances</code> is the number of active instances for the
   *          ProductionVariant behind the endpoint at the time of the request.</p>
   * @public
   */
  InvocationsPerInstance?: number | undefined;

  /**
   * <p>The interval of time taken by a model to respond as viewed from SageMaker.
   *          This interval includes the local communication times taken to send the request
   *          and to fetch the response from the container of a model and the time taken to
   *          complete the inference in the container.</p>
   * @public
   */
  ModelLatency?: number | undefined;
}

/**
 * @public
 */
export interface GetScalingConfigurationRecommendationResponse {
  /**
   * <p>The name of a previously completed Inference Recommender job.</p>
   * @public
   */
  InferenceRecommendationsJobName?: string | undefined;

  /**
   * <p>The recommendation ID of a previously completed inference recommendation.</p>
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * <p>The name of an endpoint benchmarked during a previously completed Inference Recommender job.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>The percentage of how much utilization you want an instance to use before autoscaling, which you specified in the request. The default value is 50%.</p>
   * @public
   */
  TargetCpuUtilizationPerCore?: number | undefined;

  /**
   * <p>An object representing the anticipated traffic pattern for an endpoint that you specified in the request.</p>
   * @public
   */
  ScalingPolicyObjective?: ScalingPolicyObjective | undefined;

  /**
   * <p>An object with a list of metrics that were benchmarked during the previously completed Inference Recommender job.</p>
   * @public
   */
  Metric?: ScalingPolicyMetric | undefined;

  /**
   * <p>An object with the recommended values for you to specify when creating an autoscaling policy.</p>
   * @public
   */
  DynamicScalingConfiguration?: DynamicScalingConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ENDPOINT: "Endpoint",
  EXPERIMENT: "Experiment",
  EXPERIMENT_TRIAL: "ExperimentTrial",
  EXPERIMENT_TRIAL_COMPONENT: "ExperimentTrialComponent",
  FEATURE_GROUP: "FeatureGroup",
  FEATURE_METADATA: "FeatureMetadata",
  HYPER_PARAMETER_TUNING_JOB: "HyperParameterTuningJob",
  IMAGE: "Image",
  IMAGE_VERSION: "ImageVersion",
  MODEL: "Model",
  MODEL_CARD: "ModelCard",
  MODEL_PACKAGE: "ModelPackage",
  MODEL_PACKAGE_GROUP: "ModelPackageGroup",
  PIPELINE: "Pipeline",
  PIPELINE_EXECUTION: "PipelineExecution",
  PROJECT: "Project",
  TRAINING_JOB: "TrainingJob",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property
 *       names that begin with the specified text.</p>
 * @public
 */
export interface PropertyNameQuery {
  /**
   * <p>Text that begins a property's name.</p>
   * @public
   */
  PropertyNameHint: string | undefined;
}

/**
 * <p>Specified in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_GetSearchSuggestions.html">GetSearchSuggestions</a> request.
 *       Limits the property names that are included in the response.</p>
 * @public
 */
export interface SuggestionQuery {
  /**
   * <p>Defines a property name hint. Only property
   *       names that begin with the specified hint are included in the response.</p>
   * @public
   */
  PropertyNameQuery?: PropertyNameQuery | undefined;
}

/**
 * @public
 */
export interface GetSearchSuggestionsRequest {
  /**
   * <p>The name of the SageMaker resource to search for.</p>
   * @public
   */
  Resource: ResourceType | undefined;

  /**
   * <p>Limits the property names that are included in the response.</p>
   * @public
   */
  SuggestionQuery?: SuggestionQuery | undefined;
}

/**
 * <p>A property name returned from a <code>GetSearchSuggestions</code> call that specifies
 *       a value in the <code>PropertyNameQuery</code> field.</p>
 * @public
 */
export interface PropertyNameSuggestion {
  /**
   * <p>A suggested property name based on what you entered in the search textbox in the SageMaker
   *       console.</p>
   * @public
   */
  PropertyName?: string | undefined;
}

/**
 * @public
 */
export interface GetSearchSuggestionsResponse {
  /**
   * <p>A list of property names for a <code>Resource</code> that match a
   *       <code>SuggestionQuery</code>.</p>
   * @public
   */
  PropertyNameSuggestions?: PropertyNameSuggestion[] | undefined;
}

/**
 * <p>Specifies configuration details for a Git repository when the repository is
 *             updated.</p>
 * @public
 */
export interface GitConfigForUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that
   *             contains the credentials used to access the git repository. The secret must have a
   *             staging label of <code>AWSCURRENT</code> and must be in the following format:</p>
   *          <p>
   *             <code>\{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>\}</code>
   *          </p>
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * <p>Information about hub content.</p>
 * @public
 */
export interface HubContentInfo {
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
   * <p>The ARN of the public hub content.</p>
   * @public
   */
  SageMakerPublicHubContentArn?: string | undefined;

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
   * <p>The version of the hub content document schema.</p>
   * @public
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * <p>The display name of the hub content.</p>
   * @public
   */
  HubContentDisplayName?: string | undefined;

  /**
   * <p>A description of the hub content.</p>
   * @public
   */
  HubContentDescription?: string | undefined;

  /**
   * <p>The support status of the hub content.</p>
   * @public
   */
  SupportStatus?: HubContentSupportStatus | undefined;

  /**
   * <p>The searchable keywords for the hub content.</p>
   * @public
   */
  HubContentSearchKeywords?: string[] | undefined;

  /**
   * <p>The status of the hub content.</p>
   * @public
   */
  HubContentStatus: HubContentStatus | undefined;

  /**
   * <p>The date and time that the hub content was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time when the hub content was originally created, before any updates or revisions.</p>
   * @public
   */
  OriginalCreationTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const HubContentSortBy = {
  CREATION_TIME: "CreationTime",
  HUB_CONTENT_NAME: "HubContentName",
  HUB_CONTENT_STATUS: "HubContentStatus",
} as const;

/**
 * @public
 */
export type HubContentSortBy = (typeof HubContentSortBy)[keyof typeof HubContentSortBy];

/**
 * <p>Information about a hub.</p>
 * @public
 */
export interface HubInfo {
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
  HubDisplayName?: string | undefined;

  /**
   * <p>A description of the hub.</p>
   * @public
   */
  HubDescription?: string | undefined;

  /**
   * <p>The searchable keywords for the hub.</p>
   * @public
   */
  HubSearchKeywords?: string[] | undefined;

  /**
   * <p>The status of the hub.</p>
   * @public
   */
  HubStatus: HubStatus | undefined;

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
 * @enum
 */
export const HubSortBy = {
  ACCOUNT_ID_OWNER: "AccountIdOwner",
  CREATION_TIME: "CreationTime",
  HUB_NAME: "HubName",
  HUB_STATUS: "HubStatus",
} as const;

/**
 * @public
 */
export type HubSortBy = (typeof HubSortBy)[keyof typeof HubSortBy];

/**
 * <p>Container for human task user interface information.</p>
 * @public
 */
export interface HumanTaskUiSummary {
  /**
   * <p>The name of the human task user interface.</p>
   * @public
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   * @public
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>A timestamp when SageMaker created the human task user interface.</p>
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * <p>An entity returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SearchRecord.html">SearchRecord</a> API
 *             containing the properties of a hyperparameter tuning job.</p>
 * @public
 */
export interface HyperParameterTuningJobSearchEntity {
  /**
   * <p>The name of a hyperparameter tuning job.</p>
   * @public
   */
  HyperParameterTuningJobName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a hyperparameter tuning job.</p>
   * @public
   */
  HyperParameterTuningJobArn?: string | undefined;

  /**
   * <p>Configures a hyperparameter tuning job.</p>
   * @public
   */
  HyperParameterTuningJobConfig?: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>Defines
   *             the training jobs launched by a hyperparameter tuning job.</p>
   * @public
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition | undefined;

  /**
   * <p>The job definitions included in a hyperparameter tuning job.</p>
   * @public
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[] | undefined;

  /**
   * <p>The status of a hyperparameter tuning job.</p>
   * @public
   */
  HyperParameterTuningJobStatus?: HyperParameterTuningJobStatus | undefined;

  /**
   * <p>The time that a hyperparameter tuning job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time that a hyperparameter tuning job ended.</p>
   * @public
   */
  HyperParameterTuningEndTime?: Date | undefined;

  /**
   * <p>The time that a hyperparameter tuning job was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
   *             status.</p>
   * @public
   */
  TrainingJobStatusCounters?: TrainingJobStatusCounters | undefined;

  /**
   * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
   *             categorized by the status of their objective metric. The objective metric status shows
   *             whether the
   *             final
   *             objective metric for the training job has been evaluated by the
   *             tuning job and used in the hyperparameter tuning process.</p>
   * @public
   */
  ObjectiveStatusCounters?: ObjectiveStatusCounters | undefined;

  /**
   * <p>The container for the summary information about a training job.</p>
   * @public
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary | undefined;

  /**
   * <p>The container for the summary information about a training job.</p>
   * @public
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary | undefined;

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
   * @public
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig | undefined;

  /**
   * <p>The error that was created when a hyperparameter tuning job failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Information about either a current or completed hyperparameter tuning job.</p>
   * @public
   */
  TuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails | undefined;

  /**
   * <p>The total amount of resources consumed by a hyperparameter tuning job.</p>
   * @public
   */
  ConsumedResources?: HyperParameterTuningJobConsumedResources | undefined;

  /**
   * <p>The tags associated with a hyperparameter tuning job. For more information see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobSortByOptions = {
  CreationTime: "CreationTime",
  Name: "Name",
  Status: "Status",
} as const;

/**
 * @public
 */
export type HyperParameterTuningJobSortByOptions =
  (typeof HyperParameterTuningJobSortByOptions)[keyof typeof HyperParameterTuningJobSortByOptions];

/**
 * <p>Provides summary information about a hyperparameter tuning job.</p>
 * @public
 */
export interface HyperParameterTuningJobSummary {
  /**
   * <p>The name of the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The status of the
   *             tuning
   *             job.</p>
   * @public
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | undefined;

  /**
   * <p>Specifies the search strategy hyperparameter tuning uses to choose which
   *             hyperparameters to
   *             evaluate
   *             at each iteration.</p>
   * @public
   */
  Strategy: HyperParameterTuningJobStrategyType | undefined;

  /**
   * <p>The date and time that the tuning job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   * @public
   */
  HyperParameterTuningEndTime?: Date | undefined;

  /**
   * <p>The date and time that the tuning job was
   *             modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobStatusCounters.html">TrainingJobStatusCounters</a> object that specifies the numbers of training
   *             jobs, categorized by status, that this tuning job launched.</p>
   * @public
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ObjectiveStatusCounters.html">ObjectiveStatusCounters</a> object that specifies the numbers of training jobs,
   *             categorized by objective metric status, that this tuning job launched.</p>
   * @public
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html">ResourceLimits</a>
   *             object that specifies the maximum number of training jobs and parallel training jobs
   *             allowed for this tuning job.</p>
   * @public
   */
  ResourceLimits?: ResourceLimits | undefined;
}

/**
 * <p>A SageMaker image. A SageMaker image represents a set of container images that are derived from
 *         a common base container image. Each of these container images is represented by a SageMaker
 *         <code>ImageVersion</code>.</p>
 * @public
 */
export interface Image {
  /**
   * <p>When the image was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The description of the image.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the image as displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>When a create, update, or delete operation fails, the reason for the failure.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The ARN of the image.</p>
   * @public
   */
  ImageArn: string | undefined;

  /**
   * <p>The name of the image.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>The status of the image.</p>
   * @public
   */
  ImageStatus: ImageStatus | undefined;

  /**
   * <p>When the image was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageSortBy = {
  CREATION_TIME: "CREATION_TIME",
  IMAGE_NAME: "IMAGE_NAME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
} as const;

/**
 * @public
 */
export type ImageSortBy = (typeof ImageSortBy)[keyof typeof ImageSortBy];

/**
 * @public
 * @enum
 */
export const ImageSortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type ImageSortOrder = (typeof ImageSortOrder)[keyof typeof ImageSortOrder];

/**
 * <p>A version of a SageMaker <code>Image</code>. A version represents an existing container
 *         image.</p>
 * @public
 */
export interface ImageVersion {
  /**
   * <p>When the version was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>When a create or delete operation fails, the reason for the failure.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The ARN of the image the version is based on.</p>
   * @public
   */
  ImageArn: string | undefined;

  /**
   * <p>The ARN of the version.</p>
   * @public
   */
  ImageVersionArn: string | undefined;

  /**
   * <p>The status of the version.</p>
   * @public
   */
  ImageVersionStatus: ImageVersionStatus | undefined;

  /**
   * <p>When the version was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  Version: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageVersionSortBy = {
  CREATION_TIME: "CREATION_TIME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
  VERSION: "VERSION",
} as const;

/**
 * @public
 */
export type ImageVersionSortBy = (typeof ImageVersionSortBy)[keyof typeof ImageVersionSortBy];

/**
 * @public
 * @enum
 */
export const ImageVersionSortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type ImageVersionSortOrder = (typeof ImageVersionSortOrder)[keyof typeof ImageVersionSortOrder];

/**
 * @public
 */
export interface ImportHubContentRequest {
  /**
   * <p>The name of the hub content to import.</p>
   * @public
   */
  HubContentName: string | undefined;

  /**
   * <p>The version of the hub content to import.</p>
   * @public
   */
  HubContentVersion?: string | undefined;

  /**
   * <p>The type of hub content to import.</p>
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * <p>The version of the hub content schema to import.</p>
   * @public
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * <p>The name of the hub to import content into.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The display name of the hub content to import.</p>
   * @public
   */
  HubContentDisplayName?: string | undefined;

  /**
   * <p>A description of the hub content to import.</p>
   * @public
   */
  HubContentDescription?: string | undefined;

  /**
   * <p>A string that provides a description of the hub content. This string can include links, tables, and standard markdown formating.</p>
   * @public
   */
  HubContentMarkdown?: string | undefined;

  /**
   * <p>The hub content document that describes information about the hub content such as type, associated containers, scripts, and more.</p>
   * @public
   */
  HubContentDocument: string | undefined;

  /**
   * <p>The searchable keywords of the hub content.</p>
   * @public
   */
  HubContentSearchKeywords?: string[] | undefined;

  /**
   * <p>Any tags associated with the hub content.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportHubContentResponse {
  /**
   * <p>The ARN of the hub that the content was imported into.</p>
   * @public
   */
  HubArn: string | undefined;

  /**
   * <p>The ARN of the hub content that was imported.</p>
   * @public
   */
  HubContentArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceComponentSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
  Status: "Status",
} as const;

/**
 * @public
 */
export type InferenceComponentSortKey = (typeof InferenceComponentSortKey)[keyof typeof InferenceComponentSortKey];

/**
 * <p>A summary of the properties of an inference component.</p>
 * @public
 */
export interface InferenceComponentSummary {
  /**
   * <p>The time when the inference component was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the inference component.</p>
   * @public
   */
  InferenceComponentArn: string | undefined;

  /**
   * <p>The name of the inference component.</p>
   * @public
   */
  InferenceComponentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint that hosts the inference component.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>The name of the endpoint that hosts the inference component.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The name of the production variant that hosts the inference component.</p>
   * @public
   */
  VariantName: string | undefined;

  /**
   * <p>The status of the inference component.</p>
   * @public
   */
  InferenceComponentStatus?: InferenceComponentStatus | undefined;

  /**
   * <p>The time when the inference component was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * <p>Lists a summary of properties of an inference experiment.</p>
 * @public
 */
export interface InferenceExperimentSummary {
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
   *          <p>The maximum duration that you can set for an inference experiment is 30 days.</p>
   * @public
   */
  Schedule?: InferenceExperimentSchedule | undefined;

  /**
   * <p>The status of the inference experiment.</p>
   * @public
   */
  Status: InferenceExperimentStatus | undefined;

  /**
   * <p>The error message for the inference experiment status result.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The description of the inference experiment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp at which the inference experiment was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The timestamp at which the inference experiment was completed.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>The timestamp when you last modified the inference experiment.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>
   *            The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage
   *            Amazon SageMaker Inference endpoints for model deployment.
   *        </p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceExperimentStopDesiredState = {
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
} as const;

/**
 * @public
 */
export type InferenceExperimentStopDesiredState =
  (typeof InferenceExperimentStopDesiredState)[keyof typeof InferenceExperimentStopDesiredState];

/**
 * <p>A structure that contains a list of recommendation jobs.</p>
 * @public
 */
export interface InferenceRecommendationsJob {
  /**
   * <p>The name of the job.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The job description.</p>
   * @public
   */
  JobDescription: string | undefined;

  /**
   * <p>The recommendation job type.</p>
   * @public
   */
  JobType: RecommendationJobType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation job.</p>
   * @public
   */
  JobArn: string | undefined;

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
  CompletionTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker
   *     to perform tasks on your behalf.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>A timestamp that shows when the job was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>If the job fails, provides information why the job failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The name of the created model.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored.
   *          This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
   * @public
   */
  SamplePayloadUrl?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a versioned model package.</p>
   * @public
   */
  ModelPackageVersionArn?: string | undefined;
}

/**
 * <p>The details for a specific benchmark from an Inference Recommender job.</p>
 * @public
 */
export interface RecommendationJobInferenceBenchmark {
  /**
   * <p>The metrics of recommendations.</p>
   * @public
   */
  Metrics?: RecommendationMetrics | undefined;

  /**
   * <p>The metrics for an existing endpoint compared in an Inference Recommender job.</p>
   * @public
   */
  EndpointMetrics?: InferenceMetrics | undefined;

  /**
   * <p>The endpoint configuration made by Inference Recommender during a recommendation job.</p>
   * @public
   */
  EndpointConfiguration?: EndpointOutputConfiguration | undefined;

  /**
   * <p>Defines the model configuration. Includes the specification name and environment parameters.</p>
   * @public
   */
  ModelConfiguration: ModelConfiguration | undefined;

  /**
   * <p>The reason why a benchmark failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>A timestamp that shows when the benchmark completed.</p>
   * @public
   */
  InvocationEndTime?: Date | undefined;

  /**
   * <p>A timestamp that shows when the benchmark started.</p>
   * @public
   */
  InvocationStartTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const RecommendationStepType = {
  BENCHMARK: "BENCHMARK",
} as const;

/**
 * @public
 */
export type RecommendationStepType = (typeof RecommendationStepType)[keyof typeof RecommendationStepType];

/**
 * <p>A returned array object for the <code>Steps</code> response field in the
 *          <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListInferenceRecommendationsJobSteps.html">ListInferenceRecommendationsJobSteps</a> API command.</p>
 * @public
 */
export interface InferenceRecommendationsJobStep {
  /**
   * <p>The type of the subtask.</p>
   *          <p>
   *             <code>BENCHMARK</code>: Evaluate the performance of your model on different instance types.</p>
   * @public
   */
  StepType: RecommendationStepType | undefined;

  /**
   * <p>The name of the Inference Recommender job.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The current status of the benchmark.</p>
   * @public
   */
  Status: RecommendationJobStatus | undefined;

  /**
   * <p>The details for a specific benchmark.</p>
   * @public
   */
  InferenceBenchmark?: RecommendationJobInferenceBenchmark | undefined;
}

/**
 * <p>Provides counts for human-labeled tasks in the labeling job.</p>
 * @public
 */
export interface LabelCountersForWorkteam {
  /**
   * <p>The total number of data objects labeled by a human worker.</p>
   * @public
   */
  HumanLabeled?: number | undefined;

  /**
   * <p>The total number of data objects that need to be labeled by a human worker.</p>
   * @public
   */
  PendingHuman?: number | undefined;

  /**
   * <p>The total number of tasks in the labeling job.</p>
   * @public
   */
  Total?: number | undefined;
}

/**
 * <p>Provides summary information for a work team.</p>
 * @public
 */
export interface LabelingJobForWorkteamSummary {
  /**
   * <p>The name of the labeling job that the work team is assigned to.</p>
   * @public
   */
  LabelingJobName?: string | undefined;

  /**
   * <p>A unique identifier for a labeling job. You can use this to refer to a specific
   *             labeling job.</p>
   * @public
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account used to start the labeling
   *             job.</p>
   * @public
   */
  WorkRequesterAccountId: string | undefined;

  /**
   * <p>The date and time that the labeling job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Provides information about the progress of a labeling job.</p>
   * @public
   */
  LabelCounters?: LabelCountersForWorkteam | undefined;

  /**
   * <p>The configured number of workers per data object.</p>
   * @public
   */
  NumberOfHumanWorkersPerDataObject?: number | undefined;
}

/**
 * <p>Provides summary information about a labeling job.</p>
 * @public
 */
export interface LabelingJobSummary {
  /**
   * <p>The name of the labeling job.</p>
   * @public
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the labeling job when it was
   *             created.</p>
   * @public
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The date and time that the job was created (timestamp).</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the job was last modified (timestamp).</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current status of the labeling job. </p>
   * @public
   */
  LabelingJobStatus: LabelingJobStatus | undefined;

  /**
   * <p>Counts showing the progress of the labeling job.</p>
   * @public
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to the job.</p>
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each
   *             data object is sent to a worker.</p>
   * @public
   */
  PreHumanTaskLambdaArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the
   *             annotations from individual workers into a label for a data object. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation
   *                 Consolidation</a>.</p>
   * @public
   */
  AnnotationConsolidationLambdaArn?: string | undefined;

  /**
   * <p>If the <code>LabelingJobStatus</code> field is <code>Failed</code>, this field
   *             contains a description of the error.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   * @public
   */
  LabelingJobOutput?: LabelingJobOutput | undefined;

  /**
   * <p>Input configuration for the labeling job.</p>
   * @public
   */
  InputConfig?: LabelingJobInputConfig | undefined;
}

/**
 * <p>Metadata for a Lambda step.</p>
 * @public
 */
export interface LambdaStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A list of the output parameters of the Lambda step.</p>
   * @public
   */
  OutputParameters?: OutputParameter[] | undefined;
}

/**
 * <p>Lists a summary of the properties of a lineage group. A lineage group provides a group of shareable lineage entity
 *          resources.</p>
 * @public
 */
export interface LineageGroupSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the lineage group resource.</p>
   * @public
   */
  LineageGroupArn?: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the lineage group.</p>
   * @public
   */
  LineageGroupName?: string | undefined;

  /**
   * <p>The display name of the lineage group summary.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The creation time of the lineage group summary.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last modified time of the lineage group summary.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const LineageType = {
  ACTION: "Action",
  ARTIFACT: "Artifact",
  CONTEXT: "Context",
  TRIAL_COMPONENT: "TrialComponent",
} as const;

/**
 * @public
 */
export type LineageType = (typeof LineageType)[keyof typeof LineageType];

/**
 * @public
 * @enum
 */
export const SortActionsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortActionsBy = (typeof SortActionsBy)[keyof typeof SortActionsBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListActionsRequest {
  /**
   * <p>A filter that returns only actions with the specified source URI.</p>
   * @public
   */
  SourceUri?: string | undefined;

  /**
   * <p>A filter that returns only actions of the specified type.</p>
   * @public
   */
  ActionType?: string | undefined;

  /**
   * <p>A filter that returns only actions created on or after the specified time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>A filter that returns only actions created on or before the specified time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortActionsBy | undefined;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the previous call to <code>ListActions</code> didn't return the full set of actions,
   *         the call returns a token for getting the next set of actions.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of actions to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListActionsResponse {
  /**
   * <p>A list of actions and their properties.</p>
   * @public
   */
  ActionSummaries?: ActionSummary[] | undefined;

  /**
   * <p>A token for getting the next set of actions, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAlgorithmsInput {
  /**
   * <p>A filter that returns only algorithms created after the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only algorithms created before the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of algorithms to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the algorithm name. This filter returns only algorithms whose name
   *             contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>If the response to a previous <code>ListAlgorithms</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of algorithms, use
   *             the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: AlgorithmSortBy | undefined;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListAlgorithmsOutput {
  /**
   * <p>>An array of <code>AlgorithmSummary</code> objects, each of which lists an
   *             algorithm.</p>
   * @public
   */
  AlgorithmSummaryList: AlgorithmSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             algorithms, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAliasesRequest {
  /**
   * <p>The name of the image.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>The alias of the image version.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>The version of the image. If image version is not specified, the aliases of all versions of the image are listed.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The maximum number of aliases to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous call to <code>ListAliases</code> didn't return the full set of
   *          aliases, the call returns a token for retrieving the next set of aliases.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAliasesResponse {
  /**
   * <p>A list of SageMaker image version aliases.</p>
   * @public
   */
  SageMakerImageVersionAliases?: string[] | undefined;

  /**
   * <p>A token for getting the next set of aliases, if more aliases exist.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppImageConfigsRequest {
  /**
   * <p>The total number of items to return in the response. If the total
   *          number of items available is more than the value specified, a <code>NextToken</code>
   *          is provided in the response. To resume pagination, provide the <code>NextToken</code>
   *          value in the as part of a subsequent call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of
   *          AppImageConfigs, the call returns a token for getting the next set of AppImageConfigs.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A filter that returns only AppImageConfigs whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only AppImageConfigs created on or before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only AppImageConfigs created on or after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only AppImageConfigs modified on or before the specified time.</p>
   * @public
   */
  ModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only AppImageConfigs modified on or after the specified time.</p>
   * @public
   */
  ModifiedTimeAfter?: Date | undefined;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: AppImageConfigSortKey | undefined;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListAppImageConfigsResponse {
  /**
   * <p>A token for getting the next set of AppImageConfigs, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of AppImageConfigs and their properties.</p>
   * @public
   */
  AppImageConfigs?: AppImageConfigDetails[] | undefined;
}

/**
 * @public
 */
export interface ListAppsRequest {
  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
   *       request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>This parameter defines the maximum number of results that can be return in a single
   *       response. The <code>MaxResults</code> parameter is an upper bound, not a target. If there are
   *       more results available than the value specified, a <code>NextToken</code> is provided in the
   *       response. The <code>NextToken</code> indicates that the user should get the next set of
   *       results by providing this token as a part of a subsequent call. The default value for
   *         <code>MaxResults</code> is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The sort order for the results. The default is Ascending.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The parameter by which to sort the results. The default is CreationTime.</p>
   * @public
   */
  SortBy?: AppSortKey | undefined;

  /**
   * <p>A parameter to search for the domain ID.</p>
   * @public
   */
  DomainIdEquals?: string | undefined;

  /**
   * <p>A parameter to search by user profile name. If <code>SpaceNameEquals</code> is set, then
   *       this value cannot be set.</p>
   * @public
   */
  UserProfileNameEquals?: string | undefined;

  /**
   * <p>A parameter to search by space name. If <code>UserProfileNameEquals</code> is set, then
   *       this value cannot be set.</p>
   * @public
   */
  SpaceNameEquals?: string | undefined;
}

/**
 * @public
 */
export interface ListAppsResponse {
  /**
   * <p>The list of apps.</p>
   * @public
   */
  Apps?: AppDetails[] | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
   *       request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortArtifactsBy = {
  CREATION_TIME: "CreationTime",
} as const;

/**
 * @public
 */
export type SortArtifactsBy = (typeof SortArtifactsBy)[keyof typeof SortArtifactsBy];

/**
 * @public
 */
export interface ListArtifactsRequest {
  /**
   * <p>A filter that returns only artifacts with the specified source URI.</p>
   * @public
   */
  SourceUri?: string | undefined;

  /**
   * <p>A filter that returns only artifacts of the specified type.</p>
   * @public
   */
  ArtifactType?: string | undefined;

  /**
   * <p>A filter that returns only artifacts created on or after the specified time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>A filter that returns only artifacts created on or before the specified time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortArtifactsBy | undefined;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the previous call to <code>ListArtifacts</code> didn't return the full set of artifacts,
   *         the call returns a token for getting the next set of artifacts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of artifacts to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListArtifactsResponse {
  /**
   * <p>A list of artifacts and their properties.</p>
   * @public
   */
  ArtifactSummaries?: ArtifactSummary[] | undefined;

  /**
   * <p>A token for getting the next set of artifacts, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortAssociationsBy = {
  CREATION_TIME: "CreationTime",
  DESTINATION_ARN: "DestinationArn",
  DESTINATION_TYPE: "DestinationType",
  SOURCE_ARN: "SourceArn",
  SOURCE_TYPE: "SourceType",
} as const;

/**
 * @public
 */
export type SortAssociationsBy = (typeof SortAssociationsBy)[keyof typeof SortAssociationsBy];

/**
 * @public
 */
export interface ListAssociationsRequest {
  /**
   * <p>A filter that returns only associations with the specified source ARN.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>A filter that returns only associations with the specified destination Amazon Resource Name (ARN).</p>
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * <p>A filter that returns only associations with the specified source type.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A filter that returns only associations with the specified destination type.</p>
   * @public
   */
  DestinationType?: string | undefined;

  /**
   * <p>A filter that returns only associations of the specified type.</p>
   * @public
   */
  AssociationType?: AssociationEdgeType | undefined;

  /**
   * <p>A filter that returns only associations created on or after the specified time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>A filter that returns only associations created on or before the specified time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortAssociationsBy | undefined;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the previous call to <code>ListAssociations</code> didn't return the full set of associations,
   *         the call returns a token for getting the next set of associations.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of associations to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssociationsResponse {
  /**
   * <p>A list of associations and their properties.</p>
   * @public
   */
  AssociationSummaries?: AssociationSummary[] | undefined;

  /**
   * <p>A token for getting the next set of associations, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutoMLJobsRequest {
  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>Request a list of jobs, using a search filter for name.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>Request a list of jobs, using a filter for status.</p>
   * @public
   */
  StatusEquals?: AutoMLJobStatus | undefined;

  /**
   * <p>The sort order for the results. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: AutoMLSortOrder | undefined;

  /**
   * <p>The parameter by which to sort the results. The default is <code>Name</code>.</p>
   * @public
   */
  SortBy?: AutoMLSortBy | undefined;

  /**
   * <p>Request a list of jobs up to a specified limit.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutoMLJobsResponse {
  /**
   * <p>Returns a summary list of jobs.</p>
   * @public
   */
  AutoMLJobSummaries: AutoMLJobSummary[] | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCandidatesForAutoMLJobRequest {
  /**
   * <p>List the candidates created for the job by providing the job's name.</p>
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>List the candidates for the job and filter by status.</p>
   * @public
   */
  StatusEquals?: CandidateStatus | undefined;

  /**
   * <p>List the candidates for the job and filter by candidate name.</p>
   * @public
   */
  CandidateNameEquals?: string | undefined;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: AutoMLSortOrder | undefined;

  /**
   * <p>The parameter by which to sort the results. The default is
   *          <code>Descending</code>.</p>
   * @public
   */
  SortBy?: CandidateSortBy | undefined;

  /**
   * <p>List the job's candidates up to a specified limit.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCandidatesForAutoMLJobResponse {
  /**
   * <p>Summaries about the <code>AutoMLCandidates</code>.</p>
   * @public
   */
  Candidates: AutoMLCandidate[] | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next
   *          request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterNodesRequest {
  /**
   * <p>The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster in which you want to retrieve the
   *          list of nodes.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>A filter that returns nodes in a SageMaker HyperPod cluster created after the specified time.
   *          Timestamps are formatted according to the ISO 8601 standard. </p>
   *          <p>Acceptable formats include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (UTC), for example,
   *                   <code>2014-10-01T20:30:00.000Z</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (with offset), for example,
   *                   <code>2014-10-01T12:30:00.000-08:00</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DD</code>, for example, <code>2014-10-01</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Unix time in seconds, for example, <code>1412195400</code>. This is also referred
   *                to as Unix Epoch time and represents the number of seconds since midnight, January 1,
   *                1970 UTC.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User
   *             Guide</i>.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns nodes in a SageMaker HyperPod cluster created before the specified time. The
   *          acceptable formats are the same as the timestamp formats for
   *          <code>CreationTimeAfter</code>. For more information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User
   *             Guide</i>.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns the instance groups whose name contain a specified string.</p>
   * @public
   */
  InstanceGroupNameContains?: string | undefined;

  /**
   * <p>The maximum number of nodes to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the result of the previous <code>ListClusterNodes</code> request was truncated, the
   *          response includes a <code>NextToken</code>. To retrieve the next set of cluster nodes, use
   *          the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The field by which to sort results. The default value is
   *          <code>CREATION_TIME</code>.</p>
   * @public
   */
  SortBy?: ClusterSortBy | undefined;

  /**
   * <p>The sort order for results. The default value is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListClusterNodesResponse {
  /**
   * <p>The next token specified for listing instances in a SageMaker HyperPod cluster.</p>
   * @public
   */
  NextToken: string | undefined;

  /**
   * <p>The summaries of listed instances in a SageMaker HyperPod cluster</p>
   * @public
   */
  ClusterNodeSummaries: ClusterNodeSummary[] | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * <p>Set a start time for the time range during which you want to list SageMaker HyperPod clusters.
   *          Timestamps are formatted according to the ISO 8601 standard. </p>
   *          <p>Acceptable formats include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (UTC), for example,
   *                   <code>2014-10-01T20:30:00.000Z</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (with offset), for example,
   *                   <code>2014-10-01T12:30:00.000-08:00</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>YYYY-MM-DD</code>, for example, <code>2014-10-01</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Unix time in seconds, for example, <code>1412195400</code>. This is also referred
   *                to as Unix Epoch time and represents the number of seconds since midnight, January 1,
   *                1970 UTC.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User
   *             Guide</i>.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Set an end time for the time range during which you want to list SageMaker HyperPod clusters. A
   *          filter that returns nodes in a SageMaker HyperPod cluster created before the specified time. The
   *          acceptable formats are the same as the timestamp formats for
   *          <code>CreationTimeAfter</code>. For more information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User
   *             Guide</i>.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Set the maximum number of SageMaker HyperPod clusters to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Set the maximum number of instances to print in the list.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>Set the next token to retrieve the list of SageMaker HyperPod clusters.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The field by which to sort results. The default value is
   *          <code>CREATION_TIME</code>.</p>
   * @public
   */
  SortBy?: ClusterSortBy | undefined;

  /**
   * <p>The sort order for results. The default value is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * <p>If the result of the previous <code>ListClusters</code> request was truncated, the
   *          response includes a <code>NextToken</code>. To retrieve the next set of clusters, use the
   *          token in the next request.</p>
   * @public
   */
  NextToken: string | undefined;

  /**
   * <p>The summaries of listed SageMaker HyperPod clusters.</p>
   * @public
   */
  ClusterSummaries: ClusterSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCodeRepositoriesInput {
  /**
   * <p>A filter that returns only Git repositories that were created after the specified
   *             time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only Git repositories that were created before the specified
   *             time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only Git repositories that were last modified after the
   *             specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only Git repositories that were last modified before the
   *             specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of Git repositories to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the Git repositories name. This filter returns only repositories whose
   *             name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   * @public
   */
  SortBy?: CodeRepositorySortBy | undefined;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: CodeRepositorySortOrder | undefined;
}

/**
 * @public
 */
export interface ListCodeRepositoriesOutput {
  /**
   * <p>Gets a list of summaries of the Git repositories. Each summary specifies the following
   *             values for the repository: </p>
   *          <ul>
   *             <li>
   *                <p>Name</p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN)</p>
   *             </li>
   *             <li>
   *                <p>Creation time</p>
   *             </li>
   *             <li>
   *                <p>Last modified time</p>
   *             </li>
   *             <li>
   *                <p>Configuration information, including the URL location of the repository and
   *                     the ARN of the Amazon Web Services Secrets Manager secret that contains the
   *                     credentials used to access the repository.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CodeRepositorySummaryList: CodeRepositorySummary[] | undefined;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListCompilationJobsSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type ListCompilationJobsSortBy = (typeof ListCompilationJobsSortBy)[keyof typeof ListCompilationJobsSortBy];

/**
 * @public
 */
export interface ListCompilationJobsRequest {
  /**
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             compilation jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of model compilation jobs to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A filter that returns the model compilation jobs that were created after a specified
   *             time. </p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns the model compilation jobs that were created before a specified
   *             time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns the model compilation jobs that were modified after a specified
   *             time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns the model compilation jobs that were modified before a specified
   *             time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns the model compilation jobs whose name contains a specified
   *             string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that retrieves model compilation jobs with a specific
   *                 <code>CompilationJobStatus</code> status.</p>
   * @public
   */
  StatusEquals?: CompilationJobStatus | undefined;

  /**
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: ListCompilationJobsSortBy | undefined;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListCompilationJobsResponse {
  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CompilationJobSummary.html">CompilationJobSummary</a> objects, each describing a model compilation job.
   *         </p>
   * @public
   */
  CompilationJobSummaries: CompilationJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this <code>NextToken</code>. To retrieve
   *             the next set of model compilation jobs, use this token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortContextsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortContextsBy = (typeof SortContextsBy)[keyof typeof SortContextsBy];

/**
 * @public
 */
export interface ListContextsRequest {
  /**
   * <p>A filter that returns only contexts with the specified source URI.</p>
   * @public
   */
  SourceUri?: string | undefined;

  /**
   * <p>A filter that returns only contexts of the specified type.</p>
   * @public
   */
  ContextType?: string | undefined;

  /**
   * <p>A filter that returns only contexts created on or after the specified time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>A filter that returns only contexts created on or before the specified time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortContextsBy | undefined;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the previous call to <code>ListContexts</code> didn't return the full set of contexts,
   *         the call returns a token for getting the next set of contexts.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of contexts to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListContextsResponse {
  /**
   * <p>A list of contexts and their properties.</p>
   * @public
   */
  ContextSummaries?: ContextSummary[] | undefined;

  /**
   * <p>A token for getting the next set of contexts, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MonitoringJobDefinitionSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type MonitoringJobDefinitionSortKey =
  (typeof MonitoringJobDefinitionSortKey)[keyof typeof MonitoringJobDefinitionSortKey];

/**
 * @public
 */
export interface ListDataQualityJobDefinitionsRequest {
  /**
   * <p>A filter that lists the data quality job definitions associated with the specified
   *          endpoint.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringJobDefinitionSortKey | undefined;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *    The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *          transform jobs, use the token in the next request.></p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data quality monitoring job definitions to return in the
   *          response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the data quality monitoring job definition name. This filter returns only
   *          data quality monitoring job definitions whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only data quality monitoring job definitions created before the
   *          specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only data quality monitoring job definitions created after the
   *          specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * <p>Summary information about a monitoring job.</p>
 * @public
 */
export interface MonitoringJobDefinitionSummary {
  /**
   * <p>The name of the monitoring job.</p>
   * @public
   */
  MonitoringJobDefinitionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   * @public
   */
  MonitoringJobDefinitionArn: string | undefined;

  /**
   * <p>The time that the monitoring job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The name of the endpoint that the job monitors.</p>
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityJobDefinitionsResponse {
  /**
   * <p>A list of data quality monitoring job definitions.</p>
   * @public
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was
   *          truncated, the response includes a <code>NextToken</code>. To retrieve the next set of data
   *          quality monitoring job definitions, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListDeviceFleetsSortBy = {
  CreationTime: "CREATION_TIME",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  Name: "NAME",
} as const;

/**
 * @public
 */
export type ListDeviceFleetsSortBy = (typeof ListDeviceFleetsSortBy)[keyof typeof ListDeviceFleetsSortBy];

/**
 * @public
 */
export interface ListDeviceFleetsRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to select.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filter fleets where packaging job was created after specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Filter fleets where the edge packaging job was created before specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Select fleets where the job was updated after X</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>Select fleets where the job was updated before X</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>Filter for fleets containing this name in their fleet device name.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>The column to sort by.</p>
   * @public
   */
  SortBy?: ListDeviceFleetsSortBy | undefined;

  /**
   * <p>What direction to sort in.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListDeviceFleetsResponse {
  /**
   * <p>Summary of the device fleet.</p>
   * @public
   */
  DeviceFleetSummaries: DeviceFleetSummary[] | undefined;

  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of results to select.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Select fleets where the job was updated after X</p>
   * @public
   */
  LatestHeartbeatAfter?: Date | undefined;

  /**
   * <p>A filter that searches devices that contains this name in any of their models.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>Filter for fleets containing this name in their device fleet name.</p>
   * @public
   */
  DeviceFleetName?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * <p>Summary of devices.</p>
   * @public
   */
  DeviceSummaries: DeviceSummary[] | undefined;

  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
   *       request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>This parameter defines the maximum number of results that can be return in a single
   *       response. The <code>MaxResults</code> parameter is an upper bound, not a target. If there are
   *       more results available than the value specified, a <code>NextToken</code> is provided in the
   *       response. The <code>NextToken</code> indicates that the user should get the next set of
   *       results by providing this token as a part of a subsequent call. The default value for
   *         <code>MaxResults</code> is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * <p>The list of domains.</p>
   * @public
   */
  Domains?: DomainDetails[] | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next
   *       request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListEdgeDeploymentPlansSortBy = {
  CreationTime: "CREATION_TIME",
  DeviceFleetName: "DEVICE_FLEET_NAME",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  Name: "NAME",
} as const;

/**
 * @public
 */
export type ListEdgeDeploymentPlansSortBy =
  (typeof ListEdgeDeploymentPlansSortBy)[keyof typeof ListEdgeDeploymentPlansSortBy];

/**
 * @public
 */
export interface ListEdgeDeploymentPlansRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need
   *             tokening.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to select (50 by default).</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Selects edge deployment plans created after this time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Selects edge deployment plans created before this time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Selects edge deployment plans that were last updated after this time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>Selects edge deployment plans that were last updated before this time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>Selects edge deployment plans with names containing this name.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>Selects edge deployment plans with a device fleet name containing this name.</p>
   * @public
   */
  DeviceFleetNameContains?: string | undefined;

  /**
   * <p>The column by which to sort the edge deployment plans. Can be one of
   *             <code>NAME</code>, <code>DEVICEFLEETNAME</code>, <code>CREATIONTIME</code>,
   *                 <code>LASTMODIFIEDTIME</code>.</p>
   * @public
   */
  SortBy?: ListEdgeDeploymentPlansSortBy | undefined;

  /**
   * <p>The direction of the sorting (ascending or descending).</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListEdgeDeploymentPlansResponse {
  /**
   * <p>List of summaries of edge deployment plans.</p>
   * @public
   */
  EdgeDeploymentPlanSummaries: EdgeDeploymentPlanSummary[] | undefined;

  /**
   * <p>The token to use when calling the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListEdgePackagingJobsSortBy = {
  CreationTime: "CREATION_TIME",
  EdgePackagingJobStatus: "STATUS",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  ModelName: "MODEL_NAME",
  Name: "NAME",
} as const;

/**
 * @public
 */
export type ListEdgePackagingJobsSortBy =
  (typeof ListEdgePackagingJobsSortBy)[keyof typeof ListEdgePackagingJobsSortBy];

/**
 * @public
 */
export interface ListEdgePackagingJobsRequest {
  /**
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of results to select.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Select jobs where the job was created after specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Select jobs where the job was created before specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Select jobs where the job was updated after specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>Select jobs where the job was updated before specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>Filter for jobs containing this name in their packaging job name.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>Filter for jobs where the model name contains this string.</p>
   * @public
   */
  ModelNameContains?: string | undefined;

  /**
   * <p>The job status to filter for.</p>
   * @public
   */
  StatusEquals?: EdgePackagingJobStatus | undefined;

  /**
   * <p>Use to specify what column to sort by.</p>
   * @public
   */
  SortBy?: ListEdgePackagingJobsSortBy | undefined;

  /**
   * <p>What direction to sort by.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListEdgePackagingJobsResponse {
  /**
   * <p>Summaries of edge packaging jobs.</p>
   * @public
   */
  EdgePackagingJobSummaries: EdgePackagingJobSummary[] | undefined;

  /**
   * <p>Token to use when calling the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OrderKey = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;

/**
 * @public
 */
export type OrderKey = (typeof OrderKey)[keyof typeof OrderKey];

/**
 * @public
 */
export interface ListEndpointConfigsInput {
  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: EndpointConfigSortKey | undefined;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: OrderKey | undefined;

  /**
   * <p>If the result of the previous <code>ListEndpointConfig</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             endpoint configurations, use the token in the next request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of training jobs to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the endpoint configuration name. This filter returns only endpoint
   *             configurations whose name contains the specified string. </p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only endpoint configurations created before the specified
   *             time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only endpoint configurations with a creation time greater
   *             than or equal to the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListEndpointConfigsOutput {
  /**
   * <p>An array of endpoint configurations.</p>
   * @public
   */
  EndpointConfigs: EndpointConfigSummary[] | undefined;

  /**
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             endpoint configurations, use it in the subsequent request </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEndpointsInput {
  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: EndpointSortKey | undefined;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: OrderKey | undefined;

  /**
   * <p>If the result of a <code>ListEndpoints</code> request was truncated, the response
   *             includes a <code>NextToken</code>. To retrieve the next set of endpoints, use the token
   *             in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of endpoints to return in the response. This value defaults to
   *             10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in endpoint names. This filter returns only endpoints whose name contains
   *             the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only endpoints that were created before the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only endpoints with a creation time greater than or equal to
   *             the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p> A filter that returns only endpoints that were modified before the specified
   *             timestamp. </p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p> A filter that returns only endpoints that were modified after the specified
   *             timestamp. </p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p> A filter that returns only endpoints with the specified status.</p>
   * @public
   */
  StatusEquals?: EndpointStatus | undefined;
}

/**
 * @public
 */
export interface ListEndpointsOutput {
  /**
   * <p> An array or endpoint objects. </p>
   * @public
   */
  Endpoints: EndpointSummary[] | undefined;

  /**
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortExperimentsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortExperimentsBy = (typeof SortExperimentsBy)[keyof typeof SortExperimentsBy];

/**
 * @public
 */
export interface ListExperimentsRequest {
  /**
   * <p>A filter that returns only experiments created after the specified time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>A filter that returns only experiments created before the specified time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortExperimentsBy | undefined;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the previous call to <code>ListExperiments</code> didn't return the full set of
   *       experiments, the call returns a token for getting the next set of experiments.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of experiments to return in the response. The default value is
   *       10.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListExperimentsResponse {
  /**
   * <p>A list of the summaries of your experiments.</p>
   * @public
   */
  ExperimentSummaries?: ExperimentSummary[] | undefined;

  /**
   * <p>A token for getting the next set of experiments, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFeatureGroupsRequest {
  /**
   * <p>A string that partially matches one or more <code>FeatureGroup</code>s names. Filters
   *             <code>FeatureGroup</code>s by name. </p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A <code>FeatureGroup</code> status. Filters by <code>FeatureGroup</code> status. </p>
   * @public
   */
  FeatureGroupStatusEquals?: FeatureGroupStatus | undefined;

  /**
   * <p>An <code>OfflineStore</code> status. Filters by <code>OfflineStore</code> status.
   *       </p>
   * @public
   */
  OfflineStoreStatusEquals?: OfflineStoreStatusValue | undefined;

  /**
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created after a specific
   *          date and time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created before a specific
   *          date and time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>The order in which feature groups are listed.</p>
   * @public
   */
  SortOrder?: FeatureGroupSortOrder | undefined;

  /**
   * <p>The value on which the feature group list is sorted.</p>
   * @public
   */
  SortBy?: FeatureGroupSortBy | undefined;

  /**
   * <p>The maximum number of results returned by <code>ListFeatureGroups</code>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to resume pagination of <code>ListFeatureGroups</code> results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFeatureGroupsResponse {
  /**
   * <p>A summary of feature groups.</p>
   * @public
   */
  FeatureGroupSummaries: FeatureGroupSummary[] | undefined;

  /**
   * <p>A token to resume pagination of <code>ListFeatureGroups</code> results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowDefinitionsRequest {
  /**
   * <p>A filter that returns only flow definitions with a creation time greater than or equal to the specified timestamp.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only flow definitions that were created before the specified timestamp.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>A token to resume pagination.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlowDefinitionsResponse {
  /**
   * <p>An array of objects describing the flow definitions.</p>
   * @public
   */
  FlowDefinitionSummaries: FlowDefinitionSummary[] | undefined;

  /**
   * <p>A token to resume pagination.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubContentsRequest {
  /**
   * <p>The name of the hub to list the contents of.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The type of hub content to list.</p>
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * <p>Only list hub content if the name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>The upper bound of the hub content schema verion.</p>
   * @public
   */
  MaxSchemaVersion?: string | undefined;

  /**
   * <p>Only list hub content that was created before the time specified.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Only list hub content that was created after the time specified.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Sort hub content versions by either name or creation time.</p>
   * @public
   */
  SortBy?: HubContentSortBy | undefined;

  /**
   * <p>Sort hubs by ascending or descending order.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum amount of hub content to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the response to a previous <code>ListHubContents</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hub content, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubContentsResponse {
  /**
   * <p>The summaries of the listed hub content.</p>
   * @public
   */
  HubContentSummaries: HubContentInfo[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hub content, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubContentVersionsRequest {
  /**
   * <p>The name of the hub to list the content versions of.</p>
   * @public
   */
  HubName: string | undefined;

  /**
   * <p>The type of hub content to list versions of.</p>
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * <p>The name of the hub content.</p>
   * @public
   */
  HubContentName: string | undefined;

  /**
   * <p>The lower bound of the hub content versions to list.</p>
   * @public
   */
  MinVersion?: string | undefined;

  /**
   * <p>The upper bound of the hub content schema version.</p>
   * @public
   */
  MaxSchemaVersion?: string | undefined;

  /**
   * <p>Only list hub content versions that were created before the time specified.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Only list hub content versions that were created after the time specified.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Sort hub content versions by either name or creation time.</p>
   * @public
   */
  SortBy?: HubContentSortBy | undefined;

  /**
   * <p>Sort hub content versions by ascending or descending order.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of hub content versions to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the response to a previous <code>ListHubContentVersions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hub content versions, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubContentVersionsResponse {
  /**
   * <p>The summaries of the listed hub content versions.</p>
   * @public
   */
  HubContentSummaries: HubContentInfo[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hub content versions, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubsRequest {
  /**
   * <p>Only list hubs with names that contain the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>Only list hubs that were created before the time specified.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Only list hubs that were created after the time specified.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Only list hubs that were last modified before the time specified.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>Only list hubs that were last modified after the time specified.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>Sort hubs by either name or creation time.</p>
   * @public
   */
  SortBy?: HubSortBy | undefined;

  /**
   * <p>Sort hubs by ascending or descending order.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of hubs to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the response to a previous <code>ListHubs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of hubs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubsResponse {
  /**
   * <p>The summaries of the listed hubs.</p>
   * @public
   */
  HubSummaries: HubInfo[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of hubs, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHumanTaskUisRequest {
  /**
   * <p>A filter that returns only human task user interfaces with a creation time greater than or equal to the specified timestamp.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only human task user interfaces that were created before the specified timestamp.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>A token to resume pagination.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListHumanTaskUisResponse {
  /**
   * <p>An array of objects describing the human task user interfaces.</p>
   * @public
   */
  HumanTaskUiSummaries: HumanTaskUiSummary[] | undefined;

  /**
   * <p>A token to resume pagination.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHyperParameterTuningJobsRequest {
  /**
   * <p>If the result of the previous <code>ListHyperParameterTuningJobs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             tuning jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The
   *             maximum number of tuning jobs to return. The default value is
   *             10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   * @public
   */
  SortBy?: HyperParameterTuningJobSortByOptions | undefined;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>A string in the tuning job name. This filter returns only tuning jobs whose name
   *             contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only tuning jobs that were created after the specified
   *             time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only tuning jobs that were created before the specified
   *             time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only tuning jobs that were modified after the specified
   *             time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only tuning jobs that were modified before the specified
   *             time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only tuning jobs with the specified status.</p>
   * @public
   */
  StatusEquals?: HyperParameterTuningJobStatus | undefined;
}

/**
 * @public
 */
export interface ListHyperParameterTuningJobsResponse {
  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobSummary.html">HyperParameterTuningJobSummary</a> objects that
   *             describe
   *             the tuning jobs that the <code>ListHyperParameterTuningJobs</code>
   *             request returned.</p>
   * @public
   */
  HyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[] | undefined;

  /**
   * <p>If the result of this <code>ListHyperParameterTuningJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs,
   *             use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagesRequest {
  /**
   * <p>A filter that returns only images created on or after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only images created on or before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only images modified on or after the specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only images modified on or before the specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of images to return in the response. The default value is 10. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A filter that returns only images whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of images,
   *         the call returns a token for getting the next set of images.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The property used to sort results. The default value is <code>CREATION_TIME</code>.</p>
   * @public
   */
  SortBy?: ImageSortBy | undefined;

  /**
   * <p>The sort order. The default value is <code>DESCENDING</code>.</p>
   * @public
   */
  SortOrder?: ImageSortOrder | undefined;
}

/**
 * @public
 */
export interface ListImagesResponse {
  /**
   * <p>A list of images and their properties.</p>
   * @public
   */
  Images?: Image[] | undefined;

  /**
   * <p>A token for getting the next set of images, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImageVersionsRequest {
  /**
   * <p>A filter that returns only versions created on or after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only versions created on or before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>The name of the image to list the versions of.</p>
   * @public
   */
  ImageName: string | undefined;

  /**
   * <p>A filter that returns only versions modified on or after the specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only versions modified on or before the specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of versions to return in the response. The default value is 10. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous call to <code>ListImageVersions</code> didn't return the full set of
   *         versions, the call returns a token for getting the next set of versions.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The property used to sort results. The default value is <code>CREATION_TIME</code>.</p>
   * @public
   */
  SortBy?: ImageVersionSortBy | undefined;

  /**
   * <p>The sort order. The default value is <code>DESCENDING</code>.</p>
   * @public
   */
  SortOrder?: ImageVersionSortOrder | undefined;
}

/**
 * @public
 */
export interface ListImageVersionsResponse {
  /**
   * <p>A list of versions and their properties.</p>
   * @public
   */
  ImageVersions?: ImageVersion[] | undefined;

  /**
   * <p>A token for getting the next set of versions, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceComponentsInput {
  /**
   * <p>The field by which to sort the inference components in the response. The default is
   *             <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: InferenceComponentSortKey | undefined;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: OrderKey | undefined;

  /**
   * <p>A token that you use to get the next set of results following a truncated response. If
   *          the response to the previous request was truncated, that response provides the value for
   *          this token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of inference components to return in the response. This value
   *          defaults to 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the results to only those inference components with a name that contains the
   *          specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>Filters the results to only those inference components that were created before the
   *          specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Filters the results to only those inference components that were created after the
   *          specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Filters the results to only those inference components that were updated before the
   *          specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>Filters the results to only those inference components that were updated after the
   *          specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>Filters the results to only those inference components with the specified status.</p>
   * @public
   */
  StatusEquals?: InferenceComponentStatus | undefined;

  /**
   * <p>An endpoint name to filter the listed inference components. The response includes only
   *          those inference components that are hosted at the specified endpoint.</p>
   * @public
   */
  EndpointNameEquals?: string | undefined;

  /**
   * <p>A production variant name to filter the listed inference components. The response
   *          includes only those inference components that are hosted at the specified variant.</p>
   * @public
   */
  VariantNameEquals?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceComponentsOutput {
  /**
   * <p>A list of inference components and their properties that matches any of the filters you
   *          specified in the request.</p>
   * @public
   */
  InferenceComponents: InferenceComponentSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results following a
   *          truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortInferenceExperimentsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type SortInferenceExperimentsBy = (typeof SortInferenceExperimentsBy)[keyof typeof SortInferenceExperimentsBy];

/**
 * @public
 */
export interface ListInferenceExperimentsRequest {
  /**
   * <p>Selects inference experiments whose names contain this name.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>
   *            Selects inference experiments of this type. For the possible types of inference experiments, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceExperiment.html">CreateInferenceExperiment</a>.
   *        </p>
   * @public
   */
  Type?: InferenceExperimentType | undefined;

  /**
   * <p>
   *            Selects inference experiments which are in this status. For the possible statuses, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceExperiment.html">DescribeInferenceExperiment</a>.
   *        </p>
   * @public
   */
  StatusEquals?: InferenceExperimentStatus | undefined;

  /**
   * <p>Selects inference experiments which were created after this timestamp.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Selects inference experiments which were created before this timestamp.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Selects inference experiments which were last modified after this timestamp.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>Selects inference experiments which were last modified before this timestamp.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>The column by which to sort the listed inference experiments.</p>
   * @public
   */
  SortBy?: SortInferenceExperimentsBy | undefined;

  /**
   * <p>The direction of sorting (ascending or descending).</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>
   *            The response from the last list when returning a list large enough to need tokening.
   *        </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to select.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInferenceExperimentsResponse {
  /**
   * <p>List of inference experiments.</p>
   * @public
   */
  InferenceExperiments?: InferenceExperimentSummary[] | undefined;

  /**
   * <p>The token to use when calling the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListInferenceRecommendationsJobsSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type ListInferenceRecommendationsJobsSortBy =
  (typeof ListInferenceRecommendationsJobsSortBy)[keyof typeof ListInferenceRecommendationsJobsSortBy];

/**
 * @public
 */
export interface ListInferenceRecommendationsJobsRequest {
  /**
   * <p>A filter that returns only jobs created after the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only jobs created before the specified time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only jobs that were last modified after the specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only jobs that were last modified before the specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A string in the job name. This filter returns only recommendations whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that retrieves only inference recommendations jobs with a specific status.</p>
   * @public
   */
  StatusEquals?: RecommendationJobStatus | undefined;

  /**
   * <p>The parameter by which to sort the results.</p>
   * @public
   */
  SortBy?: ListInferenceRecommendationsJobsSortBy | undefined;

  /**
   * <p>The sort order for the results.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the response to a previous <code>ListInferenceRecommendationsJobsRequest</code> request
   *          was truncated, the response includes a <code>NextToken</code>. To retrieve the next set
   *          of recommendations, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of recommendations to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A filter that returns only jobs that were created for this model.</p>
   * @public
   */
  ModelNameEquals?: string | undefined;

  /**
   * <p>A filter that returns only jobs that were created for this versioned model package.</p>
   * @public
   */
  ModelPackageVersionArnEquals?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobsResponse {
  /**
   * <p>The recommendations created from the Amazon SageMaker Inference Recommender job.</p>
   * @public
   */
  InferenceRecommendationsJobs: InferenceRecommendationsJob[] | undefined;

  /**
   * <p>A token for getting the next set of recommendations, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobStepsRequest {
  /**
   * <p>The name for the Inference Recommender job.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>A filter to return benchmarks of a specified status. If this field is left empty, then all benchmarks are returned.</p>
   * @public
   */
  Status?: RecommendationJobStatus | undefined;

  /**
   * <p>A filter to return details about the specified type of subtask.</p>
   *          <p>
   *             <code>BENCHMARK</code>: Evaluate the performance of your model on different instance types.</p>
   * @public
   */
  StepType?: RecommendationStepType | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token that you can specify to return more results from the list. Specify this field if you have a token that was returned from a previous request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobStepsResponse {
  /**
   * <p>A list of all subtask details in Inference Recommender.</p>
   * @public
   */
  Steps?: InferenceRecommendationsJobStep[] | undefined;

  /**
   * <p>A token that you can specify in your next request to return more results from the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type SortBy = (typeof SortBy)[keyof typeof SortBy];

/**
 * @public
 */
export interface ListLabelingJobsRequest {
  /**
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only labeling jobs modified after the specified time
   *             (timestamp).</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only labeling jobs modified before the specified time
   *             (timestamp).</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the result of the previous <code>ListLabelingJobs</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A string in the labeling job name. This filter returns only labeling jobs whose name
   *             contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>A filter that retrieves only labeling jobs with a specific status.</p>
   * @public
   */
  StatusEquals?: LabelingJobStatus | undefined;
}

/**
 * @public
 */
export interface ListLabelingJobsResponse {
  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   * @public
   */
  LabelingJobSummaryList?: LabelingJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListLabelingJobsForWorkteamSortByOptions = {
  CREATION_TIME: "CreationTime",
} as const;

/**
 * @public
 */
export type ListLabelingJobsForWorkteamSortByOptions =
  (typeof ListLabelingJobsForWorkteamSortByOptions)[keyof typeof ListLabelingJobsForWorkteamSortByOptions];

/**
 * @public
 */
export interface ListLabelingJobsForWorkteamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team for which you want to see labeling
   *             jobs for.</p>
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the result of the previous <code>ListLabelingJobsForWorkteam</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter the limits jobs to only the ones whose job reference code contains the
   *             specified string.</p>
   * @public
   */
  JobReferenceCodeContains?: string | undefined;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: ListLabelingJobsForWorkteamSortByOptions | undefined;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListLabelingJobsForWorkteamResponse {
  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   * @public
   */
  LabelingJobSummaryList: LabelingJobForWorkteamSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortLineageGroupsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortLineageGroupsBy = (typeof SortLineageGroupsBy)[keyof typeof SortLineageGroupsBy];

/**
 * @public
 */
export interface ListLineageGroupsRequest {
  /**
   * <p>A timestamp to filter against lineage groups created after a certain point in time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>A timestamp to filter against lineage groups created before a certain point in time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The parameter by which to sort the results. The default is
   *          <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortLineageGroupsBy | undefined;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          algorithms, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of endpoints to return in the response. This value defaults to
   *          10.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLineageGroupsResponse {
  /**
   * <p>A list of lineage groups and their properties.</p>
   * @public
   */
  LineageGroupSummaries?: LineageGroupSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of
   *          algorithms, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

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

// smithy-typescript generated code
import {
  ActionSummary,
  AlgorithmSortBy,
  AlgorithmSummary,
  AppDetails,
  AppImageConfigDetails,
  AppImageConfigSortKey,
  AppSortKey,
  AppType,
  ArtifactSummary,
  AssociationEdgeType,
  AssociationSummary,
  AutoMLCandidate,
  AutoMLJobStatus,
  AutoMLJobStepMetadata,
  AutoMLJobSummary,
  AutoMLSortBy,
  AutoMLSortOrder,
  CacheHitResult,
  CallbackStepMetadata,
  CandidateSortBy,
  CandidateStatus,
  ClarifyCheckStepMetadata,
  ClusterEventResourceType,
  ClusterEventSummary,
  ClusterNodeSummary,
  FeatureStatus,
  ModelApprovalStatus,
  ModelPackageStatus,
  OutputParameter,
  Tag,
  UserContext,
} from "./models_0";

import {
  _InstanceType,
  ClusterSchedulerConfigSummary,
  ClusterSortBy,
  ClusterSummary,
  CodeRepositorySortBy,
  CodeRepositorySortOrder,
  CodeRepositorySummary,
  CompilationJobStatus,
  CompilationJobSummary,
  ComputeQuotaSummary,
  ConditionStepMetadata,
  ContextSummary,
  HubContentType,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobStrategyType,
  HyperParameterTuningJobWarmStartConfig,
  InferenceExperimentSchedule,
  InferenceExperimentType,
  LabelingJobInputConfig,
  RecommendationJobType,
  ResourceLimits,
  SchedulerResourceStatus,
} from "./models_1";

import {
  CrossAccountFilterOption,
  ModelCardStatus,
  ModelLifeCycle,
  MonitoringType,
  OptimizationJobDeploymentInstanceType,
  PartnerAppType,
  SharingType,
  SpaceStorageSettings,
  StudioLifecycleConfigAppType,
  TrialComponentStatus,
} from "./models_2";

import {
  DeviceDeploymentSummary,
  DeviceFleetSummary,
  DeviceSummary,
  DomainDetails,
  DynamicScalingConfiguration,
  EdgeDeploymentPlanSummary,
  EdgePackagingJobStatus,
  EdgePackagingJobSummary,
  EMRStepMetadata,
  EndpointConfigSortKey,
  EndpointConfigStepMetadata,
  EndpointConfigSummary,
  EndpointOutputConfiguration,
  EndpointSortKey,
  EndpointStatus,
  EndpointStepMetadata,
  EndpointSummary,
  EventSortBy,
  ExecutionStatus,
  ExperimentSummary,
  FailStepMetadata,
  FeatureGroupSortBy,
  FeatureGroupSortOrder,
  FeatureGroupStatus,
  FeatureGroupSummary,
  FlowDefinitionSummary,
  HubContentStatus,
  HubContentSupportStatus,
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
  IsTrackingServerActive,
  LabelCounters,
  LabelingJobOutput,
  LabelingJobStatus,
  ModelCardExportJobStatus,
  ModelConfiguration,
  ModelPackageGroupStatus,
  MonitoringExecutionSummary,
  NotebookInstanceStatus,
  ObjectiveStatusCounters,
  OfflineStoreStatusValue,
  OptimizationJobStatus,
  PartnerAppStatus,
  PipelineExecutionStatus,
  ProcessingJobStatus,
  ProjectStatus,
  RecommendationJobStatus,
  RecommendationMetrics,
  ReservedCapacitySummary,
  SageMakerResourceName,
  ScalingPolicyMetric,
  ScalingPolicyObjective,
  ScheduleStatus,
  SecondaryStatus,
  SpaceStatus,
  SubscribedWorkteam,
  TrackingServerStatus,
  TrainingJobStatus,
  TrainingJobStatusCounters,
  TrainingPlanStatus,
  TransformJobStatus,
  TrialComponentSource,
  TrialSource,
  WarmPoolResourceStatus,
  WarmPoolStatus,
} from "./models_3";

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
  PIPELINE_VERSION: "PipelineVersion",
  PROJECT: "Project",
  TRAINING_JOB: "TrainingJob",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property names that begin with the specified text.</p>
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
 * <p>Specified in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_GetSearchSuggestions.html">GetSearchSuggestions</a> request. Limits the property names that are included in the response.</p>
 * @public
 */
export interface SuggestionQuery {
  /**
   * <p>Defines a property name hint. Only property names that begin with the specified hint are included in the response.</p>
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
 * <p>A property name returned from a <code>GetSearchSuggestions</code> call that specifies a value in the <code>PropertyNameQuery</code> field.</p>
 * @public
 */
export interface PropertyNameSuggestion {
  /**
   * <p>A suggested property name based on what you entered in the search textbox in the SageMaker console.</p>
   * @public
   */
  PropertyName?: string | undefined;
}

/**
 * @public
 */
export interface GetSearchSuggestionsResponse {
  /**
   * <p>A list of property names for a <code>Resource</code> that match a <code>SuggestionQuery</code>.</p>
   * @public
   */
  PropertyNameSuggestions?: PropertyNameSuggestion[] | undefined;
}

/**
 * <p>Specifies configuration details for a Git repository when the repository is updated.</p>
 * @public
 */
export interface GitConfigForUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the git repository. The secret must have a staging label of <code>AWSCURRENT</code> and must be in the following format:</p> <p> <code>\{"username": <i>UserName</i>, "password": <i>Password</i>\}</code> </p>
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
 * <p>An entity returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SearchRecord.html">SearchRecord</a> API containing the properties of a hyperparameter tuning job.</p>
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
   * <p>Defines the training jobs launched by a hyperparameter tuning job.</p>
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
   * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.</p>
   * @public
   */
  TrainingJobStatusCounters?: TrainingJobStatusCounters | undefined;

  /**
   * <p>Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.</p>
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
   * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note>
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
   * <p>The Amazon Resource Name (ARN) of the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The status of the tuning job.</p>
   * @public
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | undefined;

  /**
   * <p>Specifies the search strategy hyperparameter tuning uses to choose which hyperparameters to evaluate at each iteration.</p>
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
   * <p>The date and time that the tuning job was modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobStatusCounters.html">TrainingJobStatusCounters</a> object that specifies the numbers of training jobs, categorized by status, that this tuning job launched.</p>
   * @public
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ObjectiveStatusCounters.html">ObjectiveStatusCounters</a> object that specifies the numbers of training jobs, categorized by objective metric status, that this tuning job launched.</p>
   * @public
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html">ResourceLimits</a> object that specifies the maximum number of training jobs and parallel training jobs allowed for this tuning job.</p>
   * @public
   */
  ResourceLimits?: ResourceLimits | undefined;
}

/**
 * <p>A SageMaker AI image. A SageMaker AI image represents a set of container images that are derived from a common base container image. Each of these container images is represented by a SageMaker AI <code>ImageVersion</code>.</p>
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
 * <p>A version of a SageMaker AI <code>Image</code>. A version represents an existing container image.</p>
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
   * <p>The status of the hub content resource.</p>
   * @public
   */
  SupportStatus?: HubContentSupportStatus | undefined;

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
   * <p>The duration for which the inference experiment ran or will run.</p> <p>The maximum duration that you can set for an inference experiment is 30 days.</p>
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
   * <p> The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment. </p>
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
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.</p>
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
   * <p>The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
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
 * <p>A returned array object for the <code>Steps</code> response field in the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListInferenceRecommendationsJobSteps.html">ListInferenceRecommendationsJobSteps</a> API command.</p>
 * @public
 */
export interface InferenceRecommendationsJobStep {
  /**
   * <p>The type of the subtask.</p> <p> <code>BENCHMARK</code>: Evaluate the performance of your model on different instance types.</p>
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
   * <p>A unique identifier for a labeling job. You can use this to refer to a specific labeling job.</p>
   * @public
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account used to start the labeling job.</p>
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
   * <p>The Amazon Resource Name (ARN) assigned to the labeling job when it was created.</p>
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
   * <p>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each data object is sent to a worker.</p>
   * @public
   */
  PreHumanTaskLambdaArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the annotations from individual workers into a label for a data object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation Consolidation</a>.</p>
   * @public
   */
  AnnotationConsolidationLambdaArn?: string | undefined;

  /**
   * <p>If the <code>LabelingJobStatus</code> field is <code>Failed</code>, this field contains a description of the error.</p>
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
 * <p>Lists a summary of the properties of a lineage group. A lineage group provides a group of shareable lineage entity resources.</p>
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
   * <p>If the previous call to <code>ListActions</code> didn't return the full set of actions, the call returns a token for getting the next set of actions.</p>
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
   * <p>A filter that returns only algorithms created after the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only algorithms created before the specified time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of algorithms to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the algorithm name. This filter returns only algorithms whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>If the response to a previous <code>ListAlgorithms</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of algorithms, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The parameter by which to sort the results. The default is <code>CreationTime</code>.</p>
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
   * <p>&gt;An array of <code>AlgorithmSummary</code> objects, each of which lists an algorithm.</p>
   * @public
   */
  AlgorithmSummaryList: AlgorithmSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of algorithms, use it in the subsequent request.</p>
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
   * <p>If the previous call to <code>ListAliases</code> didn't return the full set of aliases, the call returns a token for retrieving the next set of aliases.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAliasesResponse {
  /**
   * <p>A list of SageMaker AI image version aliases.</p>
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
   * <p>The total number of items to return in the response. If the total number of items available is more than the value specified, a <code>NextToken</code> is provided in the response. To resume pagination, provide the <code>NextToken</code> value in the as part of a subsequent call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of AppImageConfigs, the call returns a token for getting the next set of AppImageConfigs.</p>
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
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>This parameter defines the maximum number of results that can be return in a single response. The <code>MaxResults</code> parameter is an upper bound, not a target. If there are more results available than the value specified, a <code>NextToken</code> is provided in the response. The <code>NextToken</code> indicates that the user should get the next set of results by providing this token as a part of a subsequent call. The default value for <code>MaxResults</code> is 10.</p>
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
   * <p>A parameter to search by user profile name. If <code>SpaceNameEquals</code> is set, then this value cannot be set.</p>
   * @public
   */
  UserProfileNameEquals?: string | undefined;

  /**
   * <p>A parameter to search by space name. If <code>UserProfileNameEquals</code> is set, then this value cannot be set.</p>
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
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
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
   * <p>If the previous call to <code>ListArtifacts</code> didn't return the full set of artifacts, the call returns a token for getting the next set of artifacts.</p>
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
   * <p>If the previous call to <code>ListAssociations</code> didn't return the full set of associations, the call returns a token for getting the next set of associations.</p>
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
   * <p>If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.</p>
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
   * <p>If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.</p>
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
   * <p>The parameter by which to sort the results. The default is <code>Descending</code>.</p>
   * @public
   */
  SortBy?: CandidateSortBy | undefined;

  /**
   * <p>List the job's candidates up to a specified limit.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.</p>
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
   * <p>If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterEventsRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the HyperPod cluster for which to list events.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>The name of the instance group to filter events. If specified, only events related to this instance group are returned.</p>
   * @public
   */
  InstanceGroupName?: string | undefined;

  /**
   * <p>The EC2 instance ID to filter events. If specified, only events related to this instance are returned.</p>
   * @public
   */
  NodeId?: string | undefined;

  /**
   * <p>The start of the time range for filtering events. Only events that occurred after this time are included in the results.</p>
   * @public
   */
  EventTimeAfter?: Date | undefined;

  /**
   * <p>The end of the time range for filtering events. Only events that occurred before this time are included in the results.</p>
   * @public
   */
  EventTimeBefore?: Date | undefined;

  /**
   * <p>The field to use for sorting the event list. Currently, the only supported value is <code>EventTime</code>.</p>
   * @public
   */
  SortBy?: EventSortBy | undefined;

  /**
   * <p>The order in which to sort the results. Valid values are <code>Ascending</code> or <code>Descending</code> (the default is <code>Descending</code>).</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The type of resource for which to filter events. Valid values are <code>Cluster</code>, <code>InstanceGroup</code>, or <code>Instance</code>.</p>
   * @public
   */
  ResourceType?: ClusterEventResourceType | undefined;

  /**
   * <p>The maximum number of events to return in the response. Valid range is 1 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to retrieve the next set of results. This token is obtained from the output of a previous <code>ListClusterEvents</code> call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterEventsResponse {
  /**
   * <p>A token to retrieve the next set of results. Include this token in subsequent <code>ListClusterEvents</code> calls to fetch more events.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of event summaries matching the specified criteria.</p>
   * @public
   */
  Events?: ClusterEventSummary[] | undefined;
}

/**
 * @public
 */
export interface ListClusterNodesRequest {
  /**
   * <p>The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster in which you want to retrieve the list of nodes.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>A filter that returns nodes in a SageMaker HyperPod cluster created after the specified time. Timestamps are formatted according to the ISO 8601 standard. </p> <p>Acceptable formats include:</p> <ul> <li> <p> <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (UTC), for example, <code>2014-10-01T20:30:00.000Z</code> </p> </li> <li> <p> <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (with offset), for example, <code>2014-10-01T12:30:00.000-08:00</code> </p> </li> <li> <p> <code>YYYY-MM-DD</code>, for example, <code>2014-10-01</code> </p> </li> <li> <p>Unix time in seconds, for example, <code>1412195400</code>. This is also referred to as Unix Epoch time and represents the number of seconds since midnight, January 1, 1970 UTC.</p> </li> </ul> <p>For more information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User Guide</i>.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns nodes in a SageMaker HyperPod cluster created before the specified time. The acceptable formats are the same as the timestamp formats for <code>CreationTimeAfter</code>. For more information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User Guide</i>.</p>
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
   * <p>If the result of the previous <code>ListClusterNodes</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of cluster nodes, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The field by which to sort results. The default value is <code>CREATION_TIME</code>.</p>
   * @public
   */
  SortBy?: ClusterSortBy | undefined;

  /**
   * <p>The sort order for results. The default value is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>Specifies whether to include nodes that are still being provisioned in the response. When set to true, the response includes all nodes regardless of their provisioning status. When set to <code>False</code> (default), only nodes with assigned <code>InstanceIds</code> are returned.</p>
   * @public
   */
  IncludeNodeLogicalIds?: boolean | undefined;
}

/**
 * @public
 */
export interface ListClusterNodesResponse {
  /**
   * <p>The next token specified for listing instances in a SageMaker HyperPod cluster.</p>
   * @public
   */
  NextToken?: string | undefined;

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
   * <p>Set a start time for the time range during which you want to list SageMaker HyperPod clusters. Timestamps are formatted according to the ISO 8601 standard. </p> <p>Acceptable formats include:</p> <ul> <li> <p> <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (UTC), for example, <code>2014-10-01T20:30:00.000Z</code> </p> </li> <li> <p> <code>YYYY-MM-DDThh:mm:ss.sssTZD</code> (with offset), for example, <code>2014-10-01T12:30:00.000-08:00</code> </p> </li> <li> <p> <code>YYYY-MM-DD</code>, for example, <code>2014-10-01</code> </p> </li> <li> <p>Unix time in seconds, for example, <code>1412195400</code>. This is also referred to as Unix Epoch time and represents the number of seconds since midnight, January 1, 1970 UTC.</p> </li> </ul> <p>For more information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User Guide</i>.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Set an end time for the time range during which you want to list SageMaker HyperPod clusters. A filter that returns nodes in a SageMaker HyperPod cluster created before the specified time. The acceptable formats are the same as the timestamp formats for <code>CreationTimeAfter</code>. For more information about the timestamp format, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">Timestamp</a> in the <i>Amazon Web Services Command Line Interface User Guide</i>.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Specifies the maximum number of clusters to evaluate for the operation (not necessarily the number of matching items). After SageMaker processes the number of clusters up to <code>MaxResults</code>, it stops the operation and returns the matching clusters up to that point. If all the matching clusters are desired, SageMaker will go through all the clusters until <code>NextToken</code> is empty.</p>
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
   * <p>The field by which to sort results. The default value is <code>CREATION_TIME</code>.</p>
   * @public
   */
  SortBy?: ClusterSortBy | undefined;

  /**
   * <p>The sort order for results. The default value is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The Amazon Resource Name (ARN); of the training plan to filter clusters by. For more information about reserving GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingPlan.html">CreateTrainingPlan</a> </code>.</p>
   * @public
   */
  TrainingPlanArn?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * <p>If the result of the previous <code>ListClusters</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of clusters, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The summaries of listed SageMaker HyperPod clusters.</p>
   * @public
   */
  ClusterSummaries: ClusterSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SortClusterSchedulerConfigBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type SortClusterSchedulerConfigBy =
  (typeof SortClusterSchedulerConfigBy)[keyof typeof SortClusterSchedulerConfigBy];

/**
 * @public
 */
export interface ListClusterSchedulerConfigsRequest {
  /**
   * <p>Filter for after this creation time. The input for this parameter is a Unix timestamp. To convert a date and time into a Unix timestamp, see <a href="https://www.epochconverter.com/">EpochConverter</a>.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>Filter for before this creation time. The input for this parameter is a Unix timestamp. To convert a date and time into a Unix timestamp, see <a href="https://www.epochconverter.com/">EpochConverter</a>.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>Filter for name containing this string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>Filter for ARN of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>Filter for status.</p>
   * @public
   */
  Status?: SchedulerResourceStatus | undefined;

  /**
   * <p>Filter for sorting the list by a given value. For example, sort by name, creation time, or status.</p>
   * @public
   */
  SortBy?: SortClusterSchedulerConfigBy | undefined;

  /**
   * <p>The order of the list. By default, listed in <code>Descending</code> order according to by <code>SortBy</code>. To change the list order, you can specify <code>SortOrder</code> to be <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of cluster policies to list.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListClusterSchedulerConfigsResponse {
  /**
   * <p>Summaries of the cluster policies.</p>
   * @public
   */
  ClusterSchedulerConfigSummaries?: ClusterSchedulerConfigSummary[] | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCodeRepositoriesInput {
  /**
   * <p>A filter that returns only Git repositories that were created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only Git repositories that were created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only Git repositories that were last modified after the specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only Git repositories that were last modified before the specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of Git repositories to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the Git repositories name. This filter returns only repositories whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the response includes a <code>NextToken</code>. To get the next set of Git repositories, use the token in the next request.</p>
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
   * <p>Gets a list of summaries of the Git repositories. Each summary specifies the following values for the repository: </p> <ul> <li> <p>Name</p> </li> <li> <p>Amazon Resource Name (ARN)</p> </li> <li> <p>Creation time</p> </li> <li> <p>Last modified time</p> </li> <li> <p>Configuration information, including the URL location of the repository and the ARN of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the repository.</p> </li> </ul>
   * @public
   */
  CodeRepositorySummaryList: CodeRepositorySummary[] | undefined;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the response includes a <code>NextToken</code>. To get the next set of Git repositories, use the token in the next request.</p>
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
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of model compilation jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of model compilation jobs to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A filter that returns the model compilation jobs that were created after a specified time. </p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns the model compilation jobs that were created before a specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns the model compilation jobs that were modified after a specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns the model compilation jobs that were modified before a specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns the model compilation jobs whose name contains a specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that retrieves model compilation jobs with a specific <code>CompilationJobStatus</code> status.</p>
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
   * <p>An array of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CompilationJobSummary.html">CompilationJobSummary</a> objects, each describing a model compilation job. </p>
   * @public
   */
  CompilationJobSummaries: CompilationJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker AI returns this <code>NextToken</code>. To retrieve the next set of model compilation jobs, use this token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortQuotaBy = {
  CLUSTER_ARN: "ClusterArn",
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type SortQuotaBy = (typeof SortQuotaBy)[keyof typeof SortQuotaBy];

/**
 * @public
 */
export interface ListComputeQuotasRequest {
  /**
   * <p>Filter for after this creation time. The input for this parameter is a Unix timestamp. To convert a date and time into a Unix timestamp, see <a href="https://www.epochconverter.com/">EpochConverter</a>.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>Filter for before this creation time. The input for this parameter is a Unix timestamp. To convert a date and time into a Unix timestamp, see <a href="https://www.epochconverter.com/">EpochConverter</a>.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>Filter for name containing this string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>Filter for status.</p>
   * @public
   */
  Status?: SchedulerResourceStatus | undefined;

  /**
   * <p>Filter for ARN of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>Filter for sorting the list by a given value. For example, sort by name, creation time, or status.</p>
   * @public
   */
  SortBy?: SortQuotaBy | undefined;

  /**
   * <p>The order of the list. By default, listed in <code>Descending</code> order according to by <code>SortBy</code>. To change the list order, you can specify <code>SortOrder</code> to be <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of compute allocation definitions to list.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListComputeQuotasResponse {
  /**
   * <p>Summaries of the compute allocation definitions.</p>
   * @public
   */
  ComputeQuotaSummaries?: ComputeQuotaSummary[] | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
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
   * <p>If the previous call to <code>ListContexts</code> didn't return the full set of contexts, the call returns a token for getting the next set of contexts.</p>
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
   * <p>A filter that lists the data quality job definitions associated with the specified endpoint.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringJobDefinitionSortKey | undefined;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of transform jobs, use the token in the next request.&gt;</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of data quality monitoring job definitions to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the data quality monitoring job definition name. This filter returns only data quality monitoring job definitions whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only data quality monitoring job definitions created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only data quality monitoring job definitions created after the specified time.</p>
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
   * <p>If the result of the previous <code>ListDataQualityJobDefinitions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of data quality monitoring job definitions, use the token in the next request.</p>
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
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>This parameter defines the maximum number of results that can be return in a single response. The <code>MaxResults</code> parameter is an upper bound, not a target. If there are more results available than the value specified, a <code>NextToken</code> is provided in the response. The <code>NextToken</code> indicates that the user should get the next set of results by providing this token as a part of a subsequent call. The default value for <code>MaxResults</code> is 10.</p>
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
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
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
   * <p>The response from the last list when returning a list large enough to need tokening.</p>
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
   * <p>The column by which to sort the edge deployment plans. Can be one of <code>NAME</code>, <code>DEVICEFLEETNAME</code>, <code>CREATIONTIME</code>, <code>LASTMODIFIEDTIME</code>.</p>
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
   * <p>If the result of the previous <code>ListEndpointConfig</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of endpoint configurations, use the token in the next request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of training jobs to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the endpoint configuration name. This filter returns only endpoint configurations whose name contains the specified string. </p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only endpoint configurations created before the specified time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only endpoint configurations with a creation time greater than or equal to the specified time (timestamp).</p>
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
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of endpoint configurations, use it in the subsequent request </p>
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
   * <p>If the result of a <code>ListEndpoints</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of endpoints, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of endpoints to return in the response. This value defaults to 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in endpoint names. This filter returns only endpoints whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only endpoints that were created before the specified time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only endpoints with a creation time greater than or equal to the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p> A filter that returns only endpoints that were modified before the specified timestamp. </p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p> A filter that returns only endpoints that were modified after the specified timestamp. </p>
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
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of training jobs, use it in the subsequent request. </p>
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
   * <p>If the previous call to <code>ListExperiments</code> didn't return the full set of experiments, the call returns a token for getting the next set of experiments.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of experiments to return in the response. The default value is 10.</p>
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
   * <p>A string that partially matches one or more <code>FeatureGroup</code>s names. Filters <code>FeatureGroup</code>s by name. </p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A <code>FeatureGroup</code> status. Filters by <code>FeatureGroup</code> status. </p>
   * @public
   */
  FeatureGroupStatusEquals?: FeatureGroupStatus | undefined;

  /**
   * <p>An <code>OfflineStore</code> status. Filters by <code>OfflineStore</code> status. </p>
   * @public
   */
  OfflineStoreStatusEquals?: OfflineStoreStatusValue | undefined;

  /**
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created after a specific date and time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Use this parameter to search for <code>FeatureGroups</code>s created before a specific date and time.</p>
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
   * <p>If the result of the previous <code>ListHyperParameterTuningJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of tuning jobs to return. The default value is 10.</p>
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
   * <p>A string in the tuning job name. This filter returns only tuning jobs whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only tuning jobs that were created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only tuning jobs that were created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only tuning jobs that were modified after the specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only tuning jobs that were modified before the specified time.</p>
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
   * <p>A list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobSummary.html">HyperParameterTuningJobSummary</a> objects that describe the tuning jobs that the <code>ListHyperParameterTuningJobs</code> request returned.</p>
   * @public
   */
  HyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[] | undefined;

  /**
   * <p>If the result of this <code>ListHyperParameterTuningJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs, use the token in the next request.</p>
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
   * <p>If the previous call to <code>ListImages</code> didn't return the full set of images, the call returns a token for getting the next set of images.</p>
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
   * <p>If the previous call to <code>ListImageVersions</code> didn't return the full set of versions, the call returns a token for getting the next set of versions.</p>
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
   * <p>The field by which to sort the inference components in the response. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: InferenceComponentSortKey | undefined;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: OrderKey | undefined;

  /**
   * <p>A token that you use to get the next set of results following a truncated response. If the response to the previous request was truncated, that response provides the value for this token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of inference components to return in the response. This value defaults to 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the results to only those inference components with a name that contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>Filters the results to only those inference components that were created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Filters the results to only those inference components that were created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Filters the results to only those inference components that were updated before the specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>Filters the results to only those inference components that were updated after the specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>Filters the results to only those inference components with the specified status.</p>
   * @public
   */
  StatusEquals?: InferenceComponentStatus | undefined;

  /**
   * <p>An endpoint name to filter the listed inference components. The response includes only those inference components that are hosted at the specified endpoint.</p>
   * @public
   */
  EndpointNameEquals?: string | undefined;

  /**
   * <p>A production variant name to filter the listed inference components. The response includes only those inference components that are hosted at the specified variant.</p>
   * @public
   */
  VariantNameEquals?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceComponentsOutput {
  /**
   * <p>A list of inference components and their properties that matches any of the filters you specified in the request.</p>
   * @public
   */
  InferenceComponents: InferenceComponentSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results following a truncated response.</p>
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
   * <p> Selects inference experiments of this type. For the possible types of inference experiments, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceExperiment.html">CreateInferenceExperiment</a>. </p>
   * @public
   */
  Type?: InferenceExperimentType | undefined;

  /**
   * <p> Selects inference experiments which are in this status. For the possible statuses, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceExperiment.html">DescribeInferenceExperiment</a>. </p>
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
   * <p> The response from the last list when returning a list large enough to need tokening. </p>
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
   * <p>If the response to a previous <code>ListInferenceRecommendationsJobsRequest</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of recommendations, use the token in the next request.</p>
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
   * <p>A filter to return details about the specified type of subtask.</p> <p> <code>BENCHMARK</code>: Evaluate the performance of your model on different instance types.</p>
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
   * <p>A filter that returns only labeling jobs created after the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only labeling jobs modified after the specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only labeling jobs modified before the specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the result of the previous <code>ListLabelingJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A string in the labeling job name. This filter returns only labeling jobs whose name contains the specified string.</p>
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
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling job.</p>
   * @public
   */
  LabelingJobSummaryList?: LabelingJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of labeling jobs, use it in the subsequent request.</p>
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
   * <p>The Amazon Resource Name (ARN) of the work team for which you want to see labeling jobs for.</p>
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the result of the previous <code>ListLabelingJobsForWorkteam</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A filter that returns only labeling jobs created after the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter the limits jobs to only the ones whose job reference code contains the specified string.</p>
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
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling job.</p>
   * @public
   */
  LabelingJobSummaryList: LabelingJobForWorkteamSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of labeling jobs, use it in the subsequent request.</p>
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
   * <p>The parameter by which to sort the results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortLineageGroupsBy | undefined;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of algorithms, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of endpoints to return in the response. This value defaults to 10.</p>
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
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of algorithms, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortTrackingServerBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type SortTrackingServerBy = (typeof SortTrackingServerBy)[keyof typeof SortTrackingServerBy];

/**
 * @public
 */
export interface ListMlflowTrackingServersRequest {
  /**
   * <p>Use the <code>CreatedAfter</code> filter to only list tracking servers created after a specific date and time. Listed tracking servers are shown with a date and time such as <code>"2024-03-16T01:46:56+00:00"</code>. The <code>CreatedAfter</code> parameter takes in a Unix timestamp. To convert a date and time into a Unix timestamp, see <a href="https://www.epochconverter.com/">EpochConverter</a>.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>Use the <code>CreatedBefore</code> filter to only list tracking servers created before a specific date and time. Listed tracking servers are shown with a date and time such as <code>"2024-03-16T01:46:56+00:00"</code>. The <code>CreatedBefore</code> parameter takes in a Unix timestamp. To convert a date and time into a Unix timestamp, see <a href="https://www.epochconverter.com/">EpochConverter</a>.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>Filter for tracking servers with a specified creation status.</p>
   * @public
   */
  TrackingServerStatus?: TrackingServerStatus | undefined;

  /**
   * <p>Filter for tracking servers using the specified MLflow version.</p>
   * @public
   */
  MlflowVersion?: string | undefined;

  /**
   * <p>Filter for trackings servers sorting by name, creation time, or creation status.</p>
   * @public
   */
  SortBy?: SortTrackingServerBy | undefined;

  /**
   * <p>Change the order of the listed tracking servers. By default, tracking servers are listed in <code>Descending</code> order by creation time. To change the list order, you can specify <code>SortOrder</code> to be <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of tracking servers to list.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary of the tracking server to list.</p>
 * @public
 */
export interface TrackingServerSummary {
  /**
   * <p>The ARN of a listed tracking server.</p>
   * @public
   */
  TrackingServerArn?: string | undefined;

  /**
   * <p>The name of a listed tracking server.</p>
   * @public
   */
  TrackingServerName?: string | undefined;

  /**
   * <p>The creation time of a listed tracking server.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last modified time of a listed tracking server.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The creation status of a listed tracking server.</p>
   * @public
   */
  TrackingServerStatus?: TrackingServerStatus | undefined;

  /**
   * <p>The activity status of a listed tracking server.</p>
   * @public
   */
  IsActive?: IsTrackingServerActive | undefined;

  /**
   * <p>The MLflow version used for a listed tracking server.</p>
   * @public
   */
  MlflowVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListMlflowTrackingServersResponse {
  /**
   * <p>A list of tracking servers according to chosen filters.</p>
   * @public
   */
  TrackingServerSummaries?: TrackingServerSummary[] | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelBiasJobDefinitionsRequest {
  /**
   * <p>Name of the endpoint to monitor for model bias.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringJobDefinitionSortKey | undefined;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of model bias jobs to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filter for model bias jobs whose name contains a specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only model bias jobs created before a specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only model bias jobs created after a specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelBiasJobDefinitionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a model bias jobs.</p>
   * @public
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelCardExportJobSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type ModelCardExportJobSortBy = (typeof ModelCardExportJobSortBy)[keyof typeof ModelCardExportJobSortBy];

/**
 * @public
 * @enum
 */
export const ModelCardExportJobSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type ModelCardExportJobSortOrder =
  (typeof ModelCardExportJobSortOrder)[keyof typeof ModelCardExportJobSortOrder];

/**
 * @public
 */
export interface ListModelCardExportJobsRequest {
  /**
   * <p>List export jobs for the model card with the specified name.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>List export jobs for the model card with the specified version.</p>
   * @public
   */
  ModelCardVersion?: number | undefined;

  /**
   * <p>Only list model card export jobs that were created after the time specified.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Only list model card export jobs that were created before the time specified.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Only list model card export jobs with names that contain the specified string.</p>
   * @public
   */
  ModelCardExportJobNameContains?: string | undefined;

  /**
   * <p>Only list model card export jobs with the specified status.</p>
   * @public
   */
  StatusEquals?: ModelCardExportJobStatus | undefined;

  /**
   * <p>Sort model card export jobs by either name or creation time. Sorts by creation time by default.</p>
   * @public
   */
  SortBy?: ModelCardExportJobSortBy | undefined;

  /**
   * <p>Sort model card export jobs by ascending or descending order.</p>
   * @public
   */
  SortOrder?: ModelCardExportJobSortOrder | undefined;

  /**
   * <p>If the response to a previous <code>ListModelCardExportJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of model card export jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of model card export jobs to list.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary of the Amazon SageMaker Model Card export job.</p>
 * @public
 */
export interface ModelCardExportJobSummary {
  /**
   * <p>The name of the model card export job.</p>
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
   * @public
   */
  Status: ModelCardExportJobStatus | undefined;

  /**
   * <p>The name of the model card that the export job exports.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The version of the model card that the export job exports.</p>
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The date and time that the model card export job was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time that the model card export job was last modified..</p>
   * @public
   */
  LastModifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListModelCardExportJobsResponse {
  /**
   * <p>The summaries of the listed model card export jobs.</p>
   * @public
   */
  ModelCardExportJobSummaries: ModelCardExportJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model card export jobs, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelCardSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type ModelCardSortBy = (typeof ModelCardSortBy)[keyof typeof ModelCardSortBy];

/**
 * @public
 * @enum
 */
export const ModelCardSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type ModelCardSortOrder = (typeof ModelCardSortOrder)[keyof typeof ModelCardSortOrder];

/**
 * @public
 */
export interface ListModelCardsRequest {
  /**
   * <p>Only list model cards that were created after the time specified.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Only list model cards that were created before the time specified.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of model cards to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Only list model cards with names that contain the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>Only list model cards with the specified approval status.</p>
   * @public
   */
  ModelCardStatus?: ModelCardStatus | undefined;

  /**
   * <p>If the response to a previous <code>ListModelCards</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of model cards, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Sort model cards by either name or creation time. Sorts by creation time by default.</p>
   * @public
   */
  SortBy?: ModelCardSortBy | undefined;

  /**
   * <p>Sort model cards by ascending or descending order.</p>
   * @public
   */
  SortOrder?: ModelCardSortOrder | undefined;
}

/**
 * <p>A summary of the model card.</p>
 * @public
 */
export interface ModelCardSummary {
  /**
   * <p>The name of the model card.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   * @public
   */
  ModelCardArn: string | undefined;

  /**
   * <p>The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.</p> <ul> <li> <p> <code>Draft</code>: The model card is a work in progress.</p> </li> <li> <p> <code>PendingReview</code>: The model card is pending review.</p> </li> <li> <p> <code>Approved</code>: The model card is approved.</p> </li> <li> <p> <code>Archived</code>: The model card is archived. No more updates should be made to the model card, but it can still be exported.</p> </li> </ul>
   * @public
   */
  ModelCardStatus: ModelCardStatus | undefined;

  /**
   * <p>The date and time that the model card was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the model card was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelCardsResponse {
  /**
   * <p>The summaries of the listed model cards.</p>
   * @public
   */
  ModelCardSummaries: ModelCardSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model cards, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelCardVersionSortBy = {
  VERSION: "Version",
} as const;

/**
 * @public
 */
export type ModelCardVersionSortBy = (typeof ModelCardVersionSortBy)[keyof typeof ModelCardVersionSortBy];

/**
 * @public
 */
export interface ListModelCardVersionsRequest {
  /**
   * <p>Only list model card versions that were created after the time specified.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Only list model card versions that were created before the time specified.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of model card versions to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>List model card versions for the model card with the specified name or Amazon Resource Name (ARN).</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>Only list model card versions with the specified approval status.</p>
   * @public
   */
  ModelCardStatus?: ModelCardStatus | undefined;

  /**
   * <p>If the response to a previous <code>ListModelCardVersions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of model card versions, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Sort listed model card versions by version. Sorts by version by default.</p>
   * @public
   */
  SortBy?: ModelCardVersionSortBy | undefined;

  /**
   * <p>Sort model card versions by ascending or descending order.</p>
   * @public
   */
  SortOrder?: ModelCardSortOrder | undefined;
}

/**
 * <p>A summary of a specific version of the model card.</p>
 * @public
 */
export interface ModelCardVersionSummary {
  /**
   * <p>The name of the model card.</p>
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model card.</p>
   * @public
   */
  ModelCardArn: string | undefined;

  /**
   * <p>The approval status of the model card version within your organization. Different organizations might have different criteria for model card review and approval.</p> <ul> <li> <p> <code>Draft</code>: The model card is a work in progress.</p> </li> <li> <p> <code>PendingReview</code>: The model card is pending review.</p> </li> <li> <p> <code>Approved</code>: The model card is approved.</p> </li> <li> <p> <code>Archived</code>: The model card is archived. No more updates should be made to the model card, but it can still be exported.</p> </li> </ul>
   * @public
   */
  ModelCardStatus: ModelCardStatus | undefined;

  /**
   * <p>A version of the model card.</p>
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * <p>The date and time that the model card version was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time date and time that the model card version was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelCardVersionsResponse {
  /**
   * <p>The summaries of the listed versions of the model card.</p>
   * @public
   */
  ModelCardVersionSummaryList: ModelCardVersionSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model card versions, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelExplainabilityJobDefinitionsRequest {
  /**
   * <p>Name of the endpoint to monitor for model explainability.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>Whether to sort results by the <code>Name</code> or <code>CreationTime</code> field. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringJobDefinitionSortKey | undefined;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filter for model explainability jobs whose name contains a specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only model explainability jobs created before a specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only model explainability jobs created after a specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelExplainabilityJobDefinitionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a explainability bias jobs.</p>
   * @public
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelMetadataFilterType = {
  DOMAIN: "Domain",
  FRAMEWORK: "Framework",
  FRAMEWORKVERSION: "FrameworkVersion",
  TASK: "Task",
} as const;

/**
 * @public
 */
export type ModelMetadataFilterType = (typeof ModelMetadataFilterType)[keyof typeof ModelMetadataFilterType];

/**
 * <p>Part of the search expression. You can specify the name and value (domain, task, framework, framework version, task, and model).</p>
 * @public
 */
export interface ModelMetadataFilter {
  /**
   * <p>The name of the of the model to filter by.</p>
   * @public
   */
  Name: ModelMetadataFilterType | undefined;

  /**
   * <p>The value to filter the model metadata.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>One or more filters that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results</p>
 * @public
 */
export interface ModelMetadataSearchExpression {
  /**
   * <p>A list of filter objects.</p>
   * @public
   */
  Filters?: ModelMetadataFilter[] | undefined;
}

/**
 * @public
 */
export interface ListModelMetadataRequest {
  /**
   * <p>One or more filters that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. Specify the Framework, FrameworkVersion, Domain or Task to filter supported. Filter names and values are case-sensitive.</p>
   * @public
   */
  SearchExpression?: ModelMetadataSearchExpression | undefined;

  /**
   * <p>If the response to a previous <code>ListModelMetadataResponse</code> request was truncated, the response includes a NextToken. To retrieve the next set of model metadata, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of models to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A summary of the model metadata.</p>
 * @public
 */
export interface ModelMetadataSummary {
  /**
   * <p>The machine learning domain of the model.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The machine learning framework of the model.</p>
   * @public
   */
  Framework: string | undefined;

  /**
   * <p>The machine learning task of the model.</p>
   * @public
   */
  Task: string | undefined;

  /**
   * <p>The name of the model.</p>
   * @public
   */
  Model: string | undefined;

  /**
   * <p>The framework version of the model.</p>
   * @public
   */
  FrameworkVersion: string | undefined;
}

/**
 * @public
 */
export interface ListModelMetadataResponse {
  /**
   * <p>A structure that holds model metadata.</p>
   * @public
   */
  ModelMetadataSummaries: ModelMetadataSummary[] | undefined;

  /**
   * <p>A token for getting the next set of recommendations, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelPackageGroupSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type ModelPackageGroupSortBy = (typeof ModelPackageGroupSortBy)[keyof typeof ModelPackageGroupSortBy];

/**
 * @public
 */
export interface ListModelPackageGroupsInput {
  /**
   * <p>A filter that returns only model groups created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only model groups created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the model group name. This filter returns only model groups whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>If the result of the previous <code>ListModelPackageGroups</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of model groups, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: ModelPackageGroupSortBy | undefined;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>A filter that returns either model groups shared with you or model groups in your own account. When the value is <code>CrossAccount</code>, the results show the resources made discoverable to you from other accounts. When the value is <code>SameAccount</code> or <code>null</code>, the results show resources from your account. The default is <code>SameAccount</code>.</p>
   * @public
   */
  CrossAccountFilterOption?: CrossAccountFilterOption | undefined;
}

/**
 * <p>Summary information about a model group.</p>
 * @public
 */
export interface ModelPackageGroupSummary {
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
   * <p>The status of the model group.</p>
   * @public
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | undefined;
}

/**
 * @public
 */
export interface ListModelPackageGroupsOutput {
  /**
   * <p>A list of summaries of the model groups in your Amazon Web Services account.</p>
   * @public
   */
  ModelPackageGroupSummaryList: ModelPackageGroupSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model groups, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelPackageType = {
  BOTH: "Both",
  UNVERSIONED: "Unversioned",
  VERSIONED: "Versioned",
} as const;

/**
 * @public
 */
export type ModelPackageType = (typeof ModelPackageType)[keyof typeof ModelPackageType];

/**
 * @public
 * @enum
 */
export const ModelPackageSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type ModelPackageSortBy = (typeof ModelPackageSortBy)[keyof typeof ModelPackageSortBy];

/**
 * @public
 */
export interface ListModelPackagesInput {
  /**
   * <p>A filter that returns only model packages created after the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only model packages created before the specified time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of model packages to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the model package name. This filter returns only model packages whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only the model packages with the specified approval status.</p>
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus | undefined;

  /**
   * <p>A filter that returns only model versions that belong to the specified model group.</p>
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * <p>A filter that returns only the model packages of the specified type. This can be one of the following values.</p> <ul> <li> <p> <code>UNVERSIONED</code> - List only unversioined models. This is the default value if no <code>ModelPackageType</code> is specified.</p> </li> <li> <p> <code>VERSIONED</code> - List only versioned models.</p> </li> <li> <p> <code>BOTH</code> - List both versioned and unversioned models.</p> </li> </ul>
   * @public
   */
  ModelPackageType?: ModelPackageType | undefined;

  /**
   * <p>If the response to a previous <code>ListModelPackages</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of model packages, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The parameter by which to sort the results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: ModelPackageSortBy | undefined;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>Provides summary information about a model package.</p>
 * @public
 */
export interface ModelPackageSummary {
  /**
   * <p>The name of the model package.</p>
   * @public
   */
  ModelPackageName?: string | undefined;

  /**
   * <p>If the model package is a versioned model, the model group that the versioned model belongs to.</p>
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * <p>If the model package is a versioned model, the version of the model.</p>
   * @public
   */
  ModelPackageVersion?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   * @public
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief description of the model package.</p>
   * @public
   */
  ModelPackageDescription?: string | undefined;

  /**
   * <p>A timestamp that shows when the model package was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The overall status of the model package.</p>
   * @public
   */
  ModelPackageStatus: ModelPackageStatus | undefined;

  /**
   * <p>The approval status of the model. This can be one of the following values.</p> <ul> <li> <p> <code>APPROVED</code> - The model is approved</p> </li> <li> <p> <code>REJECTED</code> - The model is rejected.</p> </li> <li> <p> <code>PENDING_MANUAL_APPROVAL</code> - The model is waiting for manual approval.</p> </li> </ul>
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus | undefined;

  /**
   * <p> A structure describing the current state of the model in its life cycle. </p>
   * @public
   */
  ModelLifeCycle?: ModelLifeCycle | undefined;
}

/**
 * @public
 */
export interface ListModelPackagesOutput {
  /**
   * <p>An array of <code>ModelPackageSummary</code> objects, each of which lists a model package.</p>
   * @public
   */
  ModelPackageSummaryList: ModelPackageSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of model packages, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelQualityJobDefinitionsRequest {
  /**
   * <p>A filter that returns only model quality monitoring job definitions that are associated with the specified endpoint.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringJobDefinitionSortKey | undefined;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the result of the previous <code>ListModelQualityJobDefinitions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of model quality monitoring job definitions, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a call to <code>ListModelQualityJobDefinitions</code>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the transform job name. This filter returns only model quality monitoring job definitions whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only model quality monitoring job definitions created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only model quality monitoring job definitions created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelQualityJobDefinitionsResponse {
  /**
   * <p>A list of summaries of model quality monitoring job definitions.</p>
   * @public
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker AI returns this token. To retrieve the next set of model quality monitoring job definitions, use it in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
} as const;

/**
 * @public
 */
export type ModelSortKey = (typeof ModelSortKey)[keyof typeof ModelSortKey];

/**
 * @public
 */
export interface ListModelsInput {
  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: ModelSortKey | undefined;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: OrderKey | undefined;

  /**
   * <p>If the response to a previous <code>ListModels</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of models, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of models to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A string in the model name. This filter returns only models whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only models created before the specified time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only models with a creation time greater than or equal to the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * <p>Provides summary information about a model.</p>
 * @public
 */
export interface ModelSummary {
  /**
   * <p>The name of the model that you want a summary for.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   * @public
   */
  ModelArn: string | undefined;

  /**
   * <p>A timestamp that indicates when the model was created.</p>
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListModelsOutput {
  /**
   * <p>An array of <code>ModelSummary</code> objects, each of which lists a model.</p>
   * @public
   */
  Models: ModelSummary[] | undefined;

  /**
   * <p> If the response is truncated, SageMaker returns this token. To retrieve the next set of models, use it in the subsequent request. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MonitoringAlertHistorySortKey = {
  CreationTime: "CreationTime",
  Status: "Status",
} as const;

/**
 * @public
 */
export type MonitoringAlertHistorySortKey =
  (typeof MonitoringAlertHistorySortKey)[keyof typeof MonitoringAlertHistorySortKey];

/**
 * @public
 * @enum
 */
export const MonitoringAlertStatus = {
  IN_ALERT: "InAlert",
  OK: "OK",
} as const;

/**
 * @public
 */
export type MonitoringAlertStatus = (typeof MonitoringAlertStatus)[keyof typeof MonitoringAlertStatus];

/**
 * @public
 */
export interface ListMonitoringAlertHistoryRequest {
  /**
   * <p>The name of a monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName?: string | undefined;

  /**
   * <p>The name of a monitoring alert.</p>
   * @public
   */
  MonitoringAlertName?: string | undefined;

  /**
   * <p>The field used to sort results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringAlertHistorySortKey | undefined;

  /**
   * <p>The sort order, whether <code>Ascending</code> or <code>Descending</code>, of the alert history. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the result of the previous <code>ListMonitoringAlertHistory</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of alerts in the history, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to display. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A filter that returns only alerts created on or before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only alerts created on or after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that retrieves only alerts with a specific status.</p>
   * @public
   */
  StatusEquals?: MonitoringAlertStatus | undefined;
}

/**
 * <p>Provides summary information of an alert's history.</p>
 * @public
 */
export interface MonitoringAlertHistorySummary {
  /**
   * <p>The name of a monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The name of a monitoring alert.</p>
   * @public
   */
  MonitoringAlertName: string | undefined;

  /**
   * <p>A timestamp that indicates when the first alert transition occurred in an alert history. An alert transition can be from status <code>InAlert</code> to <code>OK</code>, or from <code>OK</code> to <code>InAlert</code>.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The current alert status of an alert.</p>
   * @public
   */
  AlertStatus: MonitoringAlertStatus | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertHistoryResponse {
  /**
   * <p>An alert history for a model monitoring schedule.</p>
   * @public
   */
  MonitoringAlertHistory?: MonitoringAlertHistorySummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of alerts, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertsRequest {
  /**
   * <p>The name of a monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>If the result of the previous <code>ListMonitoringAlerts</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of alerts in the history, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to display. The default is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>An alert action taken to light up an icon on the Amazon SageMaker Model Dashboard when an alert goes into <code>InAlert</code> status.</p>
 * @public
 */
export interface ModelDashboardIndicatorAction {
  /**
   * <p>Indicates whether the alert action is turned on.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>A list of alert actions taken in response to an alert going into <code>InAlert</code> status.</p>
 * @public
 */
export interface MonitoringAlertActions {
  /**
   * <p>An alert action taken to light up an icon on the Model Dashboard when an alert goes into <code>InAlert</code> status.</p>
   * @public
   */
  ModelDashboardIndicator?: ModelDashboardIndicatorAction | undefined;
}

/**
 * <p>Provides summary information about a monitor alert.</p>
 * @public
 */
export interface MonitoringAlertSummary {
  /**
   * <p>The name of a monitoring alert.</p>
   * @public
   */
  MonitoringAlertName: string | undefined;

  /**
   * <p>A timestamp that indicates when a monitor alert was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that indicates when a monitor alert was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current status of an alert.</p>
   * @public
   */
  AlertStatus: MonitoringAlertStatus | undefined;

  /**
   * <p>Within <code>EvaluationPeriod</code>, how many execution failures will raise an alert.</p>
   * @public
   */
  DatapointsToAlert: number | undefined;

  /**
   * <p>The number of most recent monitoring executions to consider when evaluating alert status.</p>
   * @public
   */
  EvaluationPeriod: number | undefined;

  /**
   * <p>A list of alert actions taken in response to an alert going into <code>InAlert</code> status.</p>
   * @public
   */
  Actions: MonitoringAlertActions | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertsResponse {
  /**
   * <p>A JSON array where each element is a summary for a monitoring alert.</p>
   * @public
   */
  MonitoringAlertSummaries?: MonitoringAlertSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of alerts, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MonitoringExecutionSortKey = {
  CREATION_TIME: "CreationTime",
  SCHEDULED_TIME: "ScheduledTime",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type MonitoringExecutionSortKey = (typeof MonitoringExecutionSortKey)[keyof typeof MonitoringExecutionSortKey];

/**
 * @public
 */
export interface ListMonitoringExecutionsRequest {
  /**
   * <p>Name of a specific schedule to fetch jobs for.</p>
   * @public
   */
  MonitoringScheduleName?: string | undefined;

  /**
   * <p>Name of a specific endpoint to fetch jobs for.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>Whether to sort the results by the <code>Status</code>, <code>CreationTime</code>, or <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringExecutionSortKey | undefined;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filter for jobs scheduled before a specified time.</p>
   * @public
   */
  ScheduledTimeBefore?: Date | undefined;

  /**
   * <p>Filter for jobs scheduled after a specified time.</p>
   * @public
   */
  ScheduledTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only jobs created before a specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only jobs created after a specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only jobs modified after a specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only jobs modified before a specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that retrieves only jobs with a specific status.</p>
   * @public
   */
  StatusEquals?: ExecutionStatus | undefined;

  /**
   * <p>Gets a list of the monitoring job runs of the specified monitoring job definitions.</p>
   * @public
   */
  MonitoringJobDefinitionName?: string | undefined;

  /**
   * <p>A filter that returns only the monitoring job runs of the specified monitoring type.</p>
   * @public
   */
  MonitoringTypeEquals?: MonitoringType | undefined;
}

/**
 * @public
 */
export interface ListMonitoringExecutionsResponse {
  /**
   * <p>A JSON array in which each element is a summary for a monitoring execution.</p>
   * @public
   */
  MonitoringExecutionSummaries: MonitoringExecutionSummary[] | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MonitoringScheduleSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type MonitoringScheduleSortKey = (typeof MonitoringScheduleSortKey)[keyof typeof MonitoringScheduleSortKey];

/**
 * @public
 */
export interface ListMonitoringSchedulesRequest {
  /**
   * <p>Name of a specific endpoint to fetch schedules for.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>Whether to sort the results by the <code>Status</code>, <code>CreationTime</code>, or <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: MonitoringScheduleSortKey | undefined;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filter for monitoring schedules whose name contains a specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only monitoring schedules created before a specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only monitoring schedules created after a specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only monitoring schedules modified after a specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   * @public
   */
  StatusEquals?: ScheduleStatus | undefined;

  /**
   * <p>Gets a list of the monitoring schedules for the specified monitoring job definition.</p>
   * @public
   */
  MonitoringJobDefinitionName?: string | undefined;

  /**
   * <p>A filter that returns only the monitoring schedules for the specified monitoring type.</p>
   * @public
   */
  MonitoringTypeEquals?: MonitoringType | undefined;
}

/**
 * <p>Summarizes the monitoring schedule.</p>
 * @public
 */
export interface MonitoringScheduleSummary {
  /**
   * <p>The name of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>The creation time of the monitoring schedule.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The last time the monitoring schedule was modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleStatus: ScheduleStatus | undefined;

  /**
   * <p>The name of the endpoint using the monitoring schedule.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>The name of the monitoring job definition that the schedule is for.</p>
   * @public
   */
  MonitoringJobDefinitionName?: string | undefined;

  /**
   * <p>The type of the monitoring job definition that the schedule is for.</p>
   * @public
   */
  MonitoringType?: MonitoringType | undefined;
}

/**
 * @public
 */
export interface ListMonitoringSchedulesResponse {
  /**
   * <p>A JSON array in which each element is a summary for a monitoring schedule.</p>
   * @public
   */
  MonitoringScheduleSummaries: MonitoringScheduleSummary[] | undefined;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NotebookInstanceLifecycleConfigSortKey = {
  CREATION_TIME: "CreationTime",
  LAST_MODIFIED_TIME: "LastModifiedTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type NotebookInstanceLifecycleConfigSortKey =
  (typeof NotebookInstanceLifecycleConfigSortKey)[keyof typeof NotebookInstanceLifecycleConfigSortKey];

/**
 * @public
 * @enum
 */
export const NotebookInstanceLifecycleConfigSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type NotebookInstanceLifecycleConfigSortOrder =
  (typeof NotebookInstanceLifecycleConfigSortOrder)[keyof typeof NotebookInstanceLifecycleConfigSortOrder];

/**
 * @public
 */
export interface ListNotebookInstanceLifecycleConfigsInput {
  /**
   * <p>If the result of a <code>ListNotebookInstanceLifecycleConfigs</code> request was truncated, the response includes a <code>NextToken</code>. To get the next set of lifecycle configurations, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of lifecycle configurations to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: NotebookInstanceLifecycleConfigSortKey | undefined;

  /**
   * <p>The sort order for results.</p>
   * @public
   */
  SortOrder?: NotebookInstanceLifecycleConfigSortOrder | undefined;

  /**
   * <p>A string in the lifecycle configuration name. This filter returns only lifecycle configurations whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only lifecycle configurations that were created before the specified time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only lifecycle configurations that were created after the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified before the specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified after the specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;
}

/**
 * <p>Provides a summary of a notebook instance lifecycle configuration.</p>
 * @public
 */
export interface NotebookInstanceLifecycleConfigSummary {
  /**
   * <p>The name of the lifecycle configuration.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigArn: string | undefined;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListNotebookInstanceLifecycleConfigsOutput {
  /**
   * <p>If the response is truncated, SageMaker AI returns this token. To get the next set of lifecycle configurations, use it in the next request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of <code>NotebookInstanceLifecycleConfiguration</code> objects, each listing a lifecycle configuration.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const NotebookInstanceSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type NotebookInstanceSortKey = (typeof NotebookInstanceSortKey)[keyof typeof NotebookInstanceSortKey];

/**
 * @public
 * @enum
 */
export const NotebookInstanceSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type NotebookInstanceSortOrder = (typeof NotebookInstanceSortOrder)[keyof typeof NotebookInstanceSortOrder];

/**
 * @public
 */
export interface ListNotebookInstancesInput {
  /**
   * <p> If the previous call to the <code>ListNotebookInstances</code> is truncated, the response includes a <code>NextToken</code>. You can use this token in your subsequent <code>ListNotebookInstances</code> request to fetch the next set of notebook instances. </p> <note> <p>You might specify a filter or a sort order in your request. When response is truncated, you must use the same values for the filer and sort order in the next request. </p> </note>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of notebook instances to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   * @public
   */
  SortBy?: NotebookInstanceSortKey | undefined;

  /**
   * <p>The sort order for results. </p>
   * @public
   */
  SortOrder?: NotebookInstanceSortOrder | undefined;

  /**
   * <p>A string in the notebook instances' name. This filter returns only notebook instances whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that returns only notebook instances that were created before the specified time (timestamp). </p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only notebook instances that were created after the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only notebook instances that were modified before the specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only notebook instances that were modified after the specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only notebook instances with the specified status.</p>
   * @public
   */
  StatusEquals?: NotebookInstanceStatus | undefined;

  /**
   * <p>A string in the name of a notebook instances lifecycle configuration associated with this notebook instance. This filter returns only notebook instances associated with a lifecycle configuration with a name that contains the specified string.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigNameContains?: string | undefined;

  /**
   * <p>A string in the name or URL of a Git repository associated with this notebook instance. This filter returns only notebook instances associated with a git repository with a name that contains the specified string.</p>
   * @public
   */
  DefaultCodeRepositoryContains?: string | undefined;

  /**
   * <p>A filter that returns only notebook instances with associated with the specified git repository.</p>
   * @public
   */
  AdditionalCodeRepositoryEquals?: string | undefined;
}

/**
 * <p>Provides summary information for an SageMaker AI notebook instance.</p>
 * @public
 */
export interface NotebookInstanceSummary {
  /**
   * <p>The name of the notebook instance that you want a summary for.</p>
   * @public
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   * @public
   */
  NotebookInstanceArn: string | undefined;

  /**
   * <p>The status of the notebook instance.</p>
   * @public
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | undefined;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook running in your notebook instance. </p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The type of ML compute instance that the notebook instance is running on.</p>
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * <p>A timestamp that shows when the notebook instance was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A timestamp that shows when the notebook instance was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The name of a notebook instance lifecycle configuration associated with this notebook instance.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   * @public
   */
  NotebookInstanceLifecycleConfigName?: string | undefined;

  /**
   * <p>The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with SageMaker AI Notebook Instances</a>.</p>
   * @public
   */
  DefaultCodeRepository?: string | undefined;

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with SageMaker AI Notebook Instances</a>.</p>
   * @public
   */
  AdditionalCodeRepositories?: string[] | undefined;
}

/**
 * @public
 */
export interface ListNotebookInstancesOutput {
  /**
   * <p>If the response to the previous <code>ListNotebookInstances</code> request was truncated, SageMaker AI returns this token. To retrieve the next set of notebook instances, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of <code>NotebookInstanceSummary</code> objects, one for each notebook instance.</p>
   * @public
   */
  NotebookInstances?: NotebookInstanceSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ListOptimizationJobsSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type ListOptimizationJobsSortBy = (typeof ListOptimizationJobsSortBy)[keyof typeof ListOptimizationJobsSortBy];

/**
 * @public
 */
export interface ListOptimizationJobsRequest {
  /**
   * <p>A token that you use to get the next set of results following a truncated response. If the response to the previous request was truncated, that response provides the value for this token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of optimization jobs to return in the response. The default is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the results to only those optimization jobs that were created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>Filters the results to only those optimization jobs that were created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>Filters the results to only those optimization jobs that were updated after the specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>Filters the results to only those optimization jobs that were updated before the specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>Filters the results to only those optimization jobs that apply the specified optimization techniques. You can specify either <code>Quantization</code> or <code>Compilation</code>.</p>
   * @public
   */
  OptimizationContains?: string | undefined;

  /**
   * <p>Filters the results to only those optimization jobs with a name that contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>Filters the results to only those optimization jobs with the specified status.</p>
   * @public
   */
  StatusEquals?: OptimizationJobStatus | undefined;

  /**
   * <p>The field by which to sort the optimization jobs in the response. The default is <code>CreationTime</code> </p>
   * @public
   */
  SortBy?: ListOptimizationJobsSortBy | undefined;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code> </p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>Summarizes an optimization job by providing some of its key properties.</p>
 * @public
 */
export interface OptimizationJobSummary {
  /**
   * <p>The name that you assigned to the optimization job.</p>
   * @public
   */
  OptimizationJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the optimization job.</p>
   * @public
   */
  OptimizationJobArn: string | undefined;

  /**
   * <p>The time when you created the optimization job.</p>
   * @public
   */
  CreationTime: Date | undefined;

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
   * <p>The time when the optimization job was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The type of instance that hosts the optimized model that you create with the optimization job.</p>
   * @public
   */
  DeploymentInstanceType: OptimizationJobDeploymentInstanceType | undefined;

  /**
   * <p>The optimization techniques that are applied by the optimization job.</p>
   * @public
   */
  OptimizationTypes: string[] | undefined;
}

/**
 * @public
 */
export interface ListOptimizationJobsResponse {
  /**
   * <p>A list of optimization jobs and their properties that matches any of the filters you specified in the request.</p>
   * @public
   */
  OptimizationJobSummaries: OptimizationJobSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results following a truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPartnerAppsRequest {
  /**
   * <p>This parameter defines the maximum number of results that can be returned in a single response. The <code>MaxResults</code> parameter is an upper bound, not a target. If there are more results available than the value specified, a <code>NextToken</code> is provided in the response. The <code>NextToken</code> indicates that the user should get the next set of results by providing this token as a part of a subsequent call. The default value for <code>MaxResults</code> is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A subset of information related to a SageMaker Partner AI App. This information is used as part of the <code>ListPartnerApps</code> API response.</p>
 * @public
 */
export interface PartnerAppSummary {
  /**
   * <p>The ARN of the SageMaker Partner AI App.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the SageMaker Partner AI App.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of SageMaker Partner AI App to create. Must be one of the following: <code>lakera-guard</code>, <code>comet</code>, <code>deepchecks-llm-evaluation</code>, or <code>fiddler</code>.</p>
   * @public
   */
  Type?: PartnerAppType | undefined;

  /**
   * <p>The status of the SageMaker Partner AI App.</p>
   * @public
   */
  Status?: PartnerAppStatus | undefined;

  /**
   * <p>The creation time of the SageMaker Partner AI App.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPartnerAppsResponse {
  /**
   * <p>The information related to each of the SageMaker Partner AI Apps in an account.</p>
   * @public
   */
  Summaries?: PartnerAppSummary[] | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortPipelineExecutionsBy = {
  CREATION_TIME: "CreationTime",
  PIPELINE_EXECUTION_ARN: "PipelineExecutionArn",
} as const;

/**
 * @public
 */
export type SortPipelineExecutionsBy = (typeof SortPipelineExecutionsBy)[keyof typeof SortPipelineExecutionsBy];

/**
 * @public
 */
export interface ListPipelineExecutionsRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineName: string | undefined;

  /**
   * <p>A filter that returns the pipeline executions that were created after a specified time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>A filter that returns the pipeline executions that were created before a specified time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   * @public
   */
  SortBy?: SortPipelineExecutionsBy | undefined;

  /**
   * <p>The sort order for results.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of pipeline executions to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A pipeline execution summary.</p>
 * @public
 */
export interface PipelineExecutionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string | undefined;

  /**
   * <p>The start time of the pipeline execution.</p>
   * @public
   */
  StartTime?: Date | undefined;

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
   * <p>The display name of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionDisplayName?: string | undefined;

  /**
   * <p>A message generated by SageMaker Pipelines describing why the pipeline execution failed.</p>
   * @public
   */
  PipelineExecutionFailureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineExecutionsResponse {
  /**
   * <p>Contains a sorted list of pipeline execution summary objects matching the specified filters. Each run summary includes the Amazon Resource Name (ARN) of the pipeline execution, the run date, and the status. This list can be empty. </p>
   * @public
   */
  PipelineExecutionSummaries?: PipelineExecutionSummary[] | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelineExecutions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of pipeline executions, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineExecutionStepsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn?: string | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelineExecutionSteps</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of pipeline execution steps, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of pipeline execution steps to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>Metadata for Model steps.</p>
 * @public
 */
export interface ModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the created model.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Metadata for a processing job step.</p>
 * @public
 */
export interface ProcessingJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Container for the metadata for a Quality check step. For more information, see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-quality-check">QualityCheck step</a> in the <i>Amazon SageMaker Developer Guide</i>. </p>
 * @public
 */
export interface QualityCheckStepMetadata {
  /**
   * <p>The type of the Quality check step.</p>
   * @public
   */
  CheckType?: string | undefined;

  /**
   * <p>The Amazon S3 URI of the baseline statistics file used for the drift check.</p>
   * @public
   */
  BaselineUsedForDriftCheckStatistics?: string | undefined;

  /**
   * <p>The Amazon S3 URI of the baseline constraints file used for the drift check.</p>
   * @public
   */
  BaselineUsedForDriftCheckConstraints?: string | undefined;

  /**
   * <p>The Amazon S3 URI of the newly calculated baseline statistics file.</p>
   * @public
   */
  CalculatedBaselineStatistics?: string | undefined;

  /**
   * <p>The Amazon S3 URI of the newly calculated baseline constraints file.</p>
   * @public
   */
  CalculatedBaselineConstraints?: string | undefined;

  /**
   * <p>The model package group name.</p>
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * <p>The Amazon S3 URI of violation report if violations are detected.</p>
   * @public
   */
  ViolationReport?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Quality check processing job that was run by this step execution.</p>
   * @public
   */
  CheckJobArn?: string | undefined;

  /**
   * <p>This flag indicates if the drift check against the previous baseline will be skipped or not. If it is set to <code>False</code>, the previous baseline of the configured check type must be available.</p>
   * @public
   */
  SkipCheck?: boolean | undefined;

  /**
   * <p>This flag indicates if a newly calculated baseline can be accessed through step properties <code>BaselineUsedForDriftCheckConstraints</code> and <code>BaselineUsedForDriftCheckStatistics</code>. If it is set to <code>False</code>, the previous baseline of the configured check type must also be available. These can be accessed through the <code>BaselineUsedForDriftCheckConstraints</code> and <code> BaselineUsedForDriftCheckStatistics</code> properties. </p>
   * @public
   */
  RegisterNewBaseline?: boolean | undefined;
}

/**
 * <p>Metadata for a register model job step.</p>
 * @public
 */
export interface RegisterModelStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Metadata for a training job step.</p>
 * @public
 */
export interface TrainingJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Metadata for a transform job step.</p>
 * @public
 */
export interface TransformJobStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Metadata for a tuning step.</p>
 * @public
 */
export interface TuningJobStepMetaData {
  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Metadata for a step execution.</p>
 * @public
 */
export interface PipelineExecutionStepMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the training job that was run by this step execution.</p>
   * @public
   */
  TrainingJob?: TrainingJobStepMetadata | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job that was run by this step execution.</p>
   * @public
   */
  ProcessingJob?: ProcessingJobStepMetadata | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job that was run by this step execution.</p>
   * @public
   */
  TransformJob?: TransformJobStepMetadata | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.</p>
   * @public
   */
  TuningJob?: TuningJobStepMetaData | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model that was created by this step execution.</p>
   * @public
   */
  Model?: ModelStepMetadata | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package that the model was registered to by this step execution.</p>
   * @public
   */
  RegisterModel?: RegisterModelStepMetadata | undefined;

  /**
   * <p>The outcome of the condition evaluation that was run by this step execution.</p>
   * @public
   */
  Condition?: ConditionStepMetadata | undefined;

  /**
   * <p>The URL of the Amazon SQS queue used by this step execution, the pipeline generated token, and a list of output parameters.</p>
   * @public
   */
  Callback?: CallbackStepMetadata | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution and a list of output parameters.</p>
   * @public
   */
  Lambda?: LambdaStepMetadata | undefined;

  /**
   * <p>The configurations and outcomes of an Amazon EMR step execution.</p>
   * @public
   */
  EMR?: EMRStepMetadata | undefined;

  /**
   * <p>The configurations and outcomes of the check step execution. This includes: </p> <ul> <li> <p>The type of the check conducted.</p> </li> <li> <p>The Amazon S3 URIs of baseline constraints and statistics files to be used for the drift check.</p> </li> <li> <p>The Amazon S3 URIs of newly calculated baseline constraints and statistics.</p> </li> <li> <p>The model package group name provided.</p> </li> <li> <p>The Amazon S3 URI of the violation report if violations detected.</p> </li> <li> <p>The Amazon Resource Name (ARN) of check processing job initiated by the step execution.</p> </li> <li> <p>The Boolean flags indicating if the drift check is skipped.</p> </li> <li> <p>If step property <code>BaselineUsedForDriftCheck</code> is set the same as <code>CalculatedBaseline</code>.</p> </li> </ul>
   * @public
   */
  QualityCheck?: QualityCheckStepMetadata | undefined;

  /**
   * <p>Container for the metadata for a Clarify check step. The configurations and outcomes of the check step execution. This includes: </p> <ul> <li> <p>The type of the check conducted,</p> </li> <li> <p>The Amazon S3 URIs of baseline constraints and statistics files to be used for the drift check.</p> </li> <li> <p>The Amazon S3 URIs of newly calculated baseline constraints and statistics.</p> </li> <li> <p>The model package group name provided.</p> </li> <li> <p>The Amazon S3 URI of the violation report if violations detected.</p> </li> <li> <p>The Amazon Resource Name (ARN) of check processing job initiated by the step execution.</p> </li> <li> <p>The boolean flags indicating if the drift check is skipped.</p> </li> <li> <p>If step property <code>BaselineUsedForDriftCheck</code> is set the same as <code>CalculatedBaseline</code>.</p> </li> </ul>
   * @public
   */
  ClarifyCheck?: ClarifyCheckStepMetadata | undefined;

  /**
   * <p>The configurations and outcomes of a Fail step execution.</p>
   * @public
   */
  Fail?: FailStepMetadata | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AutoML job that was run by this step.</p>
   * @public
   */
  AutoMLJob?: AutoMLJobStepMetadata | undefined;

  /**
   * <p>The endpoint that was invoked during this step execution.</p>
   * @public
   */
  Endpoint?: EndpointStepMetadata | undefined;

  /**
   * <p>The endpoint configuration used to create an endpoint during this step execution.</p>
   * @public
   */
  EndpointConfig?: EndpointConfigStepMetadata | undefined;
}

/**
 * <p>The ARN from an execution of the current pipeline.</p>
 * @public
 */
export interface SelectiveExecutionResult {
  /**
   * <p>The ARN from an execution of the current pipeline.</p>
   * @public
   */
  SourcePipelineExecutionArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StepStatus = {
  EXECUTING: "Executing",
  FAILED: "Failed",
  STARTING: "Starting",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  SUCCEEDED: "Succeeded",
} as const;

/**
 * @public
 */
export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus];

/**
 * <p>An execution of a step in a pipeline.</p>
 * @public
 */
export interface PipelineExecutionStep {
  /**
   * <p>The name of the step that is executed.</p>
   * @public
   */
  StepName?: string | undefined;

  /**
   * <p>The display name of the step.</p>
   * @public
   */
  StepDisplayName?: string | undefined;

  /**
   * <p>The description of the step.</p>
   * @public
   */
  StepDescription?: string | undefined;

  /**
   * <p>The time that the step started executing.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time that the step stopped executing.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The status of the step execution.</p>
   * @public
   */
  StepStatus?: StepStatus | undefined;

  /**
   * <p>If this pipeline execution step was cached, details on the cache hit.</p>
   * @public
   */
  CacheHitResult?: CacheHitResult | undefined;

  /**
   * <p>The reason why the step failed execution. This is only returned if the step failed its execution.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Metadata to run the pipeline step.</p>
   * @public
   */
  Metadata?: PipelineExecutionStepMetadata | undefined;

  /**
   * <p>The current attempt of the execution step. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-retry-policy.html">Retry Policy for SageMaker Pipelines steps</a>.</p>
   * @public
   */
  AttemptCount?: number | undefined;

  /**
   * <p>The ARN from an execution of the current pipeline from which results are reused for this step.</p>
   * @public
   */
  SelectiveExecutionResult?: SelectiveExecutionResult | undefined;
}

/**
 * @public
 */
export interface ListPipelineExecutionStepsResponse {
  /**
   * <p>A list of <code>PipeLineExecutionStep</code> objects. Each <code>PipeLineExecutionStep</code> consists of StepName, StartTime, EndTime, StepStatus, and Metadata. Metadata is an object with properties for each job that contains relevant information about the job created by the step.</p>
   * @public
   */
  PipelineExecutionSteps?: PipelineExecutionStep[] | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelineExecutionSteps</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of pipeline execution steps, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineParametersForExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline execution.</p>
   * @public
   */
  PipelineExecutionArn: string | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelineParametersForExecution</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of parameters, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of parameters to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Assigns a value to a named Pipeline parameter.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The name of the parameter to assign a value to. This parameter name must match a named parameter in the pipeline definition.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The literal value for the parameter.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineParametersForExecutionResponse {
  /**
   * <p>Contains a list of pipeline parameters. This list can be empty. </p>
   * @public
   */
  PipelineParameters?: Parameter[] | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelineParametersForExecution</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of parameters, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortPipelinesBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortPipelinesBy = (typeof SortPipelinesBy)[keyof typeof SortPipelinesBy];

/**
 * @public
 */
export interface ListPipelinesRequest {
  /**
   * <p>The prefix of the pipeline name.</p>
   * @public
   */
  PipelineNamePrefix?: string | undefined;

  /**
   * <p>A filter that returns the pipelines that were created after a specified time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>A filter that returns the pipelines that were created before a specified time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The field by which to sort results. The default is <code>CreatedTime</code>.</p>
   * @public
   */
  SortBy?: SortPipelinesBy | undefined;

  /**
   * <p>The sort order for results.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelines</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of pipelines, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of pipelines to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A summary of a pipeline.</p>
 * @public
 */
export interface PipelineSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the pipeline.</p>
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
   * <p>The description of the pipeline.</p>
   * @public
   */
  PipelineDescription?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that the pipeline used to execute.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The creation time of the pipeline.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time that the pipeline was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The last time that a pipeline execution began.</p>
   * @public
   */
  LastExecutionTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * <p>Contains a sorted list of <code>PipelineSummary</code> objects matching the specified filters. Each <code>PipelineSummary</code> consists of PipelineArn, PipelineName, ExperimentName, PipelineDescription, CreationTime, LastModifiedTime, LastRunTime, and RoleArn. This list can be empty. </p>
   * @public
   */
  PipelineSummaries?: PipelineSummary[] | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelines</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of pipelines, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineName: string | undefined;

  /**
   * <p>A filter that returns the pipeline versions that were created after a specified time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>A filter that returns the pipeline versions that were created before a specified time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The sort order for the results.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelineVersions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of pipeline versions, use this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of pipeline versions to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary of the pipeline version.</p>
 * @public
 */
export interface PipelineVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The ID of the pipeline version.</p>
   * @public
   */
  PipelineVersionId?: number | undefined;

  /**
   * <p>The creation time of the pipeline version.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The description of the pipeline version.</p>
   * @public
   */
  PipelineVersionDescription?: string | undefined;

  /**
   * <p>The display name of the pipeline version.</p>
   * @public
   */
  PipelineVersionDisplayName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the most recent pipeline execution created from this pipeline version.</p>
   * @public
   */
  LastExecutionPipelineExecutionArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineVersionsResponse {
  /**
   * <p>Contains a sorted list of pipeline version summary objects matching the specified filters. Each version summary includes the pipeline version ID, the creation date, and the last pipeline execution created from that version. This list can be empty.</p>
   * @public
   */
  PipelineVersionSummaries?: PipelineVersionSummary[] | undefined;

  /**
   * <p>If the result of the previous <code>ListPipelineVersions</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of pipeline versions, use this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProcessingJobsRequest {
  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only processing jobs modified after the specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only processing jobs modified before the specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A string in the processing job name. This filter returns only processing jobs whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that retrieves only processing jobs with a specific status.</p>
   * @public
   */
  StatusEquals?: ProcessingJobStatus | undefined;

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
   * <p>If the result of the previous <code>ListProcessingJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of processing jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of processing jobs to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary of information about a processing job.</p>
 * @public
 */
export interface ProcessingJobSummary {
  /**
   * <p>The name of the processing job.</p>
   * @public
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job..</p>
   * @public
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>The time at which the processing job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time at which the processing job completed.</p>
   * @public
   */
  ProcessingEndTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates the last time the processing job was modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The status of the processing job.</p>
   * @public
   */
  ProcessingJobStatus: ProcessingJobStatus | undefined;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing container when the processing job exits.</p>
   * @public
   */
  ExitMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListProcessingJobsResponse {
  /**
   * <p>An array of <code>ProcessingJobSummary</code> objects, each listing a processing job.</p>
   * @public
   */
  ProcessingJobSummaries: ProcessingJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of processing jobs, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProjectSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type ProjectSortBy = (typeof ProjectSortBy)[keyof typeof ProjectSortBy];

/**
 * @public
 * @enum
 */
export const ProjectSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type ProjectSortOrder = (typeof ProjectSortOrder)[keyof typeof ProjectSortOrder];

/**
 * @public
 */
export interface ListProjectsInput {
  /**
   * <p>A filter that returns the projects that were created after a specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns the projects that were created before a specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>The maximum number of projects to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A filter that returns the projects whose name contains a specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>If the result of the previous <code>ListProjects</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of projects, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: ProjectSortBy | undefined;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: ProjectSortOrder | undefined;
}

/**
 * <p>Information about a project.</p>
 * @public
 */
export interface ProjectSummary {
  /**
   * <p>The name of the project.</p>
   * @public
   */
  ProjectName: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  ProjectDescription?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * <p>The ID of the project.</p>
   * @public
   */
  ProjectId: string | undefined;

  /**
   * <p>The time that the project was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The status of the project.</p>
   * @public
   */
  ProjectStatus: ProjectStatus | undefined;
}

/**
 * @public
 */
export interface ListProjectsOutput {
  /**
   * <p>A list of summaries of projects.</p>
   * @public
   */
  ProjectSummaryList: ProjectSummary[] | undefined;

  /**
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of model compilation jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceCatalogSortBy = {
  CREATION_TIME: "CreationTime",
} as const;

/**
 * @public
 */
export type ResourceCatalogSortBy = (typeof ResourceCatalogSortBy)[keyof typeof ResourceCatalogSortBy];

/**
 * @public
 * @enum
 */
export const ResourceCatalogSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type ResourceCatalogSortOrder = (typeof ResourceCatalogSortOrder)[keyof typeof ResourceCatalogSortOrder];

/**
 * @public
 */
export interface ListResourceCatalogsRequest {
  /**
   * <p> A string that partially matches one or more <code>ResourceCatalog</code>s names. Filters <code>ResourceCatalog</code> by name. </p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p> Use this parameter to search for <code>ResourceCatalog</code>s created after a specific date and time. </p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p> Use this parameter to search for <code>ResourceCatalog</code>s created before a specific date and time. </p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p> The order in which the resource catalogs are listed. </p>
   * @public
   */
  SortOrder?: ResourceCatalogSortOrder | undefined;

  /**
   * <p> The value on which the resource catalog list is sorted. </p>
   * @public
   */
  SortBy?: ResourceCatalogSortBy | undefined;

  /**
   * <p> The maximum number of results returned by <code>ListResourceCatalogs</code>. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> A token to resume pagination of <code>ListResourceCatalogs</code> results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p> A resource catalog containing all of the resources of a specific resource type within a resource owner account. For an example on sharing the Amazon SageMaker Feature Store <code>DefaultFeatureGroupCatalog</code>, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/feature-store-cross-account-discoverability-share-sagemaker-catalog.html">Share Amazon SageMaker Catalog resource type</a> in the Amazon SageMaker Developer Guide. </p>
 * @public
 */
export interface ResourceCatalog {
  /**
   * <p> The Amazon Resource Name (ARN) of the <code>ResourceCatalog</code>. </p>
   * @public
   */
  ResourceCatalogArn: string | undefined;

  /**
   * <p> The name of the <code>ResourceCatalog</code>. </p>
   * @public
   */
  ResourceCatalogName: string | undefined;

  /**
   * <p> A free form description of the <code>ResourceCatalog</code>. </p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p> The time the <code>ResourceCatalog</code> was created. </p>
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListResourceCatalogsResponse {
  /**
   * <p> A list of the requested <code>ResourceCatalog</code>s. </p>
   * @public
   */
  ResourceCatalogs?: ResourceCatalog[] | undefined;

  /**
   * <p> A token to resume pagination of <code>ListResourceCatalogs</code> results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SpaceSortKey = {
  CreationTime: "CreationTime",
  LastModifiedTime: "LastModifiedTime",
} as const;

/**
 * @public
 */
export type SpaceSortKey = (typeof SpaceSortKey)[keyof typeof SpaceSortKey];

/**
 * @public
 */
export interface ListSpacesRequest {
  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>This parameter defines the maximum number of results that can be return in a single response. The <code>MaxResults</code> parameter is an upper bound, not a target. If there are more results available than the value specified, a <code>NextToken</code> is provided in the response. The <code>NextToken</code> indicates that the user should get the next set of results by providing this token as a part of a subsequent call. The default value for <code>MaxResults</code> is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The parameter by which to sort the results. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SpaceSortKey | undefined;

  /**
   * <p>A parameter to search for the domain ID.</p>
   * @public
   */
  DomainIdEquals?: string | undefined;

  /**
   * <p>A parameter by which to filter the results.</p>
   * @public
   */
  SpaceNameContains?: string | undefined;
}

/**
 * <p>Specifies summary information about the ownership settings.</p>
 * @public
 */
export interface OwnershipSettingsSummary {
  /**
   * <p>The user profile who is the owner of the space.</p>
   * @public
   */
  OwnerUserProfileName?: string | undefined;
}

/**
 * <p>Specifies summary information about the space settings.</p>
 * @public
 */
export interface SpaceSettingsSummary {
  /**
   * <p>The type of app created within the space.</p>
   * @public
   */
  AppType?: AppType | undefined;

  /**
   * <p>A setting that enables or disables remote access for a SageMaker space. When enabled, this allows you to connect to the remote space from your local IDE.</p>
   * @public
   */
  RemoteAccess?: FeatureStatus | undefined;

  /**
   * <p>The storage settings for a space.</p>
   * @public
   */
  SpaceStorageSettings?: SpaceStorageSettings | undefined;
}

/**
 * <p>Specifies summary information about the space sharing settings.</p>
 * @public
 */
export interface SpaceSharingSettingsSummary {
  /**
   * <p>Specifies the sharing type of the space.</p>
   * @public
   */
  SharingType?: SharingType | undefined;
}

/**
 * <p>The space's details.</p>
 * @public
 */
export interface SpaceDetails {
  /**
   * <p>The ID of the associated domain.</p>
   * @public
   */
  DomainId?: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  SpaceName?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: SpaceStatus | undefined;

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
   * <p>Specifies summary information about the space settings.</p>
   * @public
   */
  SpaceSettingsSummary?: SpaceSettingsSummary | undefined;

  /**
   * <p>Specifies summary information about the space sharing settings.</p>
   * @public
   */
  SpaceSharingSettingsSummary?: SpaceSharingSettingsSummary | undefined;

  /**
   * <p>Specifies summary information about the ownership settings.</p>
   * @public
   */
  OwnershipSettingsSummary?: OwnershipSettingsSummary | undefined;

  /**
   * <p>The name of the space that appears in the Studio UI.</p>
   * @public
   */
  SpaceDisplayName?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesResponse {
  /**
   * <p>The list of spaces.</p>
   * @public
   */
  Spaces?: SpaceDetails[] | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStageDevicesRequest {
  /**
   * <p>The response from the last list when returning a list large enough to neeed tokening.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of requests to select.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the edge deployment plan.</p>
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * <p>Toggle for excluding devices deployed in other stages.</p>
   * @public
   */
  ExcludeDevicesDeployedInOtherStage?: boolean | undefined;

  /**
   * <p>The name of the stage in the deployment.</p>
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface ListStageDevicesResponse {
  /**
   * <p>List of summaries of devices allocated to the stage.</p>
   * @public
   */
  DeviceDeploymentSummaries: DeviceDeploymentSummary[] | undefined;

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
export const StudioLifecycleConfigSortKey = {
  CreationTime: "CreationTime",
  LastModifiedTime: "LastModifiedTime",
  Name: "Name",
} as const;

/**
 * @public
 */
export type StudioLifecycleConfigSortKey =
  (typeof StudioLifecycleConfigSortKey)[keyof typeof StudioLifecycleConfigSortKey];

/**
 * @public
 */
export interface ListStudioLifecycleConfigsRequest {
  /**
   * <p>The total number of items to return in the response. If the total number of items available is more than the value specified, a <code>NextToken</code> is provided in the response. To resume pagination, provide the <code>NextToken</code> value in the as part of a subsequent call. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous call to ListStudioLifecycleConfigs didn't return the full set of Lifecycle Configurations, the call returns a token for getting the next set of Lifecycle Configurations.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A string in the Lifecycle Configuration name. This filter returns only Lifecycle Configurations whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A parameter to search for the App Type to which the Lifecycle Configuration is attached.</p>
   * @public
   */
  AppTypeEquals?: StudioLifecycleConfigAppType | undefined;

  /**
   * <p>A filter that returns only Lifecycle Configurations created on or before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only Lifecycle Configurations created on or after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only Lifecycle Configurations modified before the specified time.</p>
   * @public
   */
  ModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only Lifecycle Configurations modified after the specified time.</p>
   * @public
   */
  ModifiedTimeAfter?: Date | undefined;

  /**
   * <p>The property used to sort results. The default value is CreationTime.</p>
   * @public
   */
  SortBy?: StudioLifecycleConfigSortKey | undefined;

  /**
   * <p>The sort order. The default value is Descending.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>Details of the Amazon SageMaker AI Studio Lifecycle Configuration.</p>
 * @public
 */
export interface StudioLifecycleConfigDetails {
  /**
   * <p> The Amazon Resource Name (ARN) of the Lifecycle Configuration.</p>
   * @public
   */
  StudioLifecycleConfigArn?: string | undefined;

  /**
   * <p>The name of the Amazon SageMaker AI Studio Lifecycle Configuration.</p>
   * @public
   */
  StudioLifecycleConfigName?: string | undefined;

  /**
   * <p>The creation time of the Amazon SageMaker AI Studio Lifecycle Configuration.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>This value is equivalent to CreationTime because Amazon SageMaker AI Studio Lifecycle Configurations are immutable.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The App type to which the Lifecycle Configuration is attached.</p>
   * @public
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType | undefined;
}

/**
 * @public
 */
export interface ListStudioLifecycleConfigsResponse {
  /**
   * <p>If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of Lifecycle Configurations and their properties.</p>
   * @public
   */
  StudioLifecycleConfigs?: StudioLifecycleConfigDetails[] | undefined;
}

/**
 * @public
 */
export interface ListSubscribedWorkteamsRequest {
  /**
   * <p>A string in the work team name. This filter returns only work teams whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>If the result of the previous <code>ListSubscribedWorkteams</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of work teams to return in each page of the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSubscribedWorkteamsResponse {
  /**
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   * @public
   */
  SubscribedWorkteams: SubscribedWorkteam[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of work teams, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> If the response to the previous <code>ListTags</code> request is truncated, SageMaker returns this token. To retrieve the next set of tags, use it in the subsequent request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of tags to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsOutput {
  /**
   * <p>An array of <code>Tag</code> objects, each with a tag key and a value.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p> If response is truncated, SageMaker includes a token in the response. You can use this token in your subsequent request to fetch next set of tokens. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrainingJobsRequest {
  /**
   * <p>If the result of the previous <code>ListTrainingJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of training jobs, use the token in the next request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of training jobs to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A filter that returns only training jobs created after the specified time (timestamp).</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only training jobs created before the specified time (timestamp).</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only training jobs modified after the specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only training jobs modified before the specified time (timestamp).</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A string in the training job name. This filter returns only training jobs whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that retrieves only training jobs with a specific status.</p>
   * @public
   */
  StatusEquals?: TrainingJobStatus | undefined;

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
   * <p>A filter that retrieves only training jobs with a specific warm pool status.</p>
   * @public
   */
  WarmPoolStatusEquals?: WarmPoolResourceStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN); of the training plan to filter training jobs by. For more information about reserving GPU capacity for your SageMaker training jobs using Amazon SageMaker Training Plan, see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingPlan.html">CreateTrainingPlan</a> </code>.</p>
   * @public
   */
  TrainingPlanArnEquals?: string | undefined;
}

/**
 * <p>Provides summary information about a training job.</p>
 * @public
 */
export interface TrainingJobSummary {
  /**
   * <p>The name of the training job that you want a summary for.</p>
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   * @public
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>A timestamp that shows when the training job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>A timestamp that shows when the training job ended. This field is set only if the training job has one of the terminal statuses (<code>Completed</code>, <code>Failed</code>, or <code>Stopped</code>). </p>
   * @public
   */
  TrainingEndTime?: Date | undefined;

  /**
   * <p> Timestamp when the training job was last modified. </p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The status of the training job.</p>
   * @public
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * <p>The secondary status of the training job.</p>
   * @public
   */
  SecondaryStatus?: SecondaryStatus | undefined;

  /**
   * <p>The status of the warm pool associated with the training job.</p>
   * @public
   */
  WarmPoolStatus?: WarmPoolStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN); of the training plan associated with this training job.</p> <p>For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingPlan.html">CreateTrainingPlan</a> </code>.</p>
   * @public
   */
  TrainingPlanArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTrainingJobsResponse {
  /**
   * <p>An array of <code>TrainingJobSummary</code> objects, each listing a training job.</p>
   * @public
   */
  TrainingJobSummaries: TrainingJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, SageMaker returns this token. To retrieve the next set of training jobs, use it in the subsequent request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainingJobSortByOptions = {
  CreationTime: "CreationTime",
  FinalObjectiveMetricValue: "FinalObjectiveMetricValue",
  Name: "Name",
  Status: "Status",
} as const;

/**
 * @public
 */
export type TrainingJobSortByOptions = (typeof TrainingJobSortByOptions)[keyof typeof TrainingJobSortByOptions];

/**
 * @public
 */
export interface ListTrainingJobsForHyperParameterTuningJobRequest {
  /**
   * <p>The name of the tuning job whose training jobs you want to list.</p>
   * @public
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>If the result of the previous <code>ListTrainingJobsForHyperParameterTuningJob</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of training jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of training jobs to return. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A filter that returns only training jobs with the specified status.</p>
   * @public
   */
  StatusEquals?: TrainingJobStatus | undefined;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p> <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training jobs that did not return an objective metric are not listed.</p>
   * @public
   */
  SortBy?: TrainingJobSortByOptions | undefined;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListTrainingJobsForHyperParameterTuningJobResponse {
  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html">TrainingJobSummary</a> objects that describe the training jobs that the <code>ListTrainingJobsForHyperParameterTuningJob</code> request returned.</p>
   * @public
   */
  TrainingJobSummaries: HyperParameterTrainingJobSummary[] | undefined;

  /**
   * <p>If the result of this <code>ListTrainingJobsForHyperParameterTuningJob</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of training jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainingPlanFilterName = {
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type TrainingPlanFilterName = (typeof TrainingPlanFilterName)[keyof typeof TrainingPlanFilterName];

/**
 * <p>A filter to apply when listing or searching for training plans.</p> <p>For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingPlan.html">CreateTrainingPlan</a> </code>.</p>
 * @public
 */
export interface TrainingPlanFilter {
  /**
   * <p>The name of the filter field (e.g., Status, InstanceType).</p>
   * @public
   */
  Name: TrainingPlanFilterName | undefined;

  /**
   * <p>The value to filter by for the specified field.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainingPlanSortBy = {
  NAME: "TrainingPlanName",
  START_TIME: "StartTime",
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type TrainingPlanSortBy = (typeof TrainingPlanSortBy)[keyof typeof TrainingPlanSortBy];

/**
 * @public
 * @enum
 */
export const TrainingPlanSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type TrainingPlanSortOrder = (typeof TrainingPlanSortOrder)[keyof typeof TrainingPlanSortOrder];

/**
 * @public
 */
export interface ListTrainingPlansRequest {
  /**
   * <p>A token to continue pagination if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filter to list only training plans with an actual start time after this date.</p>
   * @public
   */
  StartTimeAfter?: Date | undefined;

  /**
   * <p>Filter to list only training plans with an actual start time before this date.</p>
   * @public
   */
  StartTimeBefore?: Date | undefined;

  /**
   * <p>The training plan field to sort the results by (e.g., StartTime, Status).</p>
   * @public
   */
  SortBy?: TrainingPlanSortBy | undefined;

  /**
   * <p>The order to sort the results (Ascending or Descending).</p>
   * @public
   */
  SortOrder?: TrainingPlanSortOrder | undefined;

  /**
   * <p>Additional filters to apply to the list of training plans.</p>
   * @public
   */
  Filters?: TrainingPlanFilter[] | undefined;
}

/**
 * <p>Details of the training plan.</p> <p>For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingPlan.html">CreateTrainingPlan</a> </code>.</p>
 * @public
 */
export interface TrainingPlanSummary {
  /**
   * <p>The Amazon Resource Name (ARN); of the training plan.</p>
   * @public
   */
  TrainingPlanArn: string | undefined;

  /**
   * <p>The name of the training plan.</p>
   * @public
   */
  TrainingPlanName: string | undefined;

  /**
   * <p>The current status of the training plan (e.g., Pending, Active, Expired). To see the complete list of status values available for a training plan, refer to the <code>Status</code> attribute within the <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingPlanSummary.html">TrainingPlanSummary</a> </code> object.</p>
   * @public
   */
  Status: TrainingPlanStatus | undefined;

  /**
   * <p>A message providing additional information about the current status of the training plan.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The number of whole hours in the total duration for this training plan.</p>
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * <p>The additional minutes beyond whole hours in the total duration for this training plan.</p>
   * @public
   */
  DurationMinutes?: number | undefined;

  /**
   * <p>The start time of the training plan.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the training plan.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The upfront fee for the training plan.</p>
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * <p>The currency code for the upfront fee (e.g., USD).</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The total number of instances reserved in this training plan.</p>
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * <p>The number of instances currently available for use in this training plan.</p>
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * <p>The number of instances currently in use from this training plan.</p>
   * @public
   */
  InUseInstanceCount?: number | undefined;

  /**
   * <p>The total number of UltraServers allocated to this training plan.</p>
   * @public
   */
  TotalUltraServerCount?: number | undefined;

  /**
   * <p>The target resources (e.g., training jobs, HyperPod clusters) that can use this training plan.</p> <p>Training plans are specific to their target resource.</p> <ul> <li> <p>A training plan designed for SageMaker training jobs can only be used to schedule and run training jobs.</p> </li> <li> <p>A training plan for HyperPod clusters can be used exclusively to provide compute resources to a cluster's instance group.</p> </li> </ul>
   * @public
   */
  TargetResources?: SageMakerResourceName[] | undefined;

  /**
   * <p>A list of reserved capacities associated with this training plan, including details such as instance types, counts, and availability zones.</p>
   * @public
   */
  ReservedCapacitySummaries?: ReservedCapacitySummary[] | undefined;
}

/**
 * @public
 */
export interface ListTrainingPlansResponse {
  /**
   * <p>A token to continue pagination if more results are available.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of summary information for the training plans.</p>
   * @public
   */
  TrainingPlanSummaries: TrainingPlanSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTransformJobsRequest {
  /**
   * <p>A filter that returns only transform jobs created after the specified time.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only transform jobs created before the specified time.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns only transform jobs modified after the specified time.</p>
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns only transform jobs modified before the specified time.</p>
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * <p>A string in the transform job name. This filter returns only transform jobs whose name contains the specified string.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>A filter that retrieves only transform jobs with a specific status.</p>
   * @public
   */
  StatusEquals?: TransformJobStatus | undefined;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>If the result of the previous <code>ListTransformJobs</code> request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of transform jobs, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of transform jobs to return in the response. The default value is <code>10</code>.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides a summary of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a list after in response to a <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTransformJobs.html">ListTransformJobs</a> call.</p>
 * @public
 */
export interface TransformJobSummary {
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
   * <p>A timestamp that shows when the transform Job was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>Indicates when the transform job ends on compute instances. For successful jobs and stopped jobs, this is the exact time recorded after the results are uploaded. For failed jobs, this is when Amazon SageMaker detected that the job failed.</p>
   * @public
   */
  TransformEndTime?: Date | undefined;

  /**
   * <p>Indicates when the transform job was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The status of the transform job.</p>
   * @public
   */
  TransformJobStatus: TransformJobStatus | undefined;

  /**
   * <p>If the transform job failed, the reason it failed.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListTransformJobsResponse {
  /**
   * <p>An array of <code>TransformJobSummary</code> objects.</p>
   * @public
   */
  TransformJobSummaries: TransformJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of transform jobs, use it in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortTrialComponentsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortTrialComponentsBy = (typeof SortTrialComponentsBy)[keyof typeof SortTrialComponentsBy];

/**
 * @public
 */
export interface ListTrialComponentsRequest {
  /**
   * <p>A filter that returns only components that are part of the specified experiment. If you specify <code>ExperimentName</code>, you can't filter by <code>SourceArn</code> or <code>TrialName</code>.</p>
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * <p>A filter that returns only components that are part of the specified trial. If you specify <code>TrialName</code>, you can't filter by <code>ExperimentName</code> or <code>SourceArn</code>.</p>
   * @public
   */
  TrialName?: string | undefined;

  /**
   * <p>A filter that returns only components that have the specified source Amazon Resource Name (ARN). If you specify <code>SourceArn</code>, you can't filter by <code>ExperimentName</code> or <code>TrialName</code>.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>A filter that returns only components created after the specified time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>A filter that returns only components created before the specified time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortTrialComponentsBy | undefined;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of components to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous call to <code>ListTrialComponents</code> didn't return the full set of components, the call returns a token for getting the next set of components.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of the properties of a trial component. To get all the properties, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrialComponent.html">DescribeTrialComponent</a> API and provide the <code>TrialComponentName</code>.</p>
 * @public
 */
export interface TrialComponentSummary {
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
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) and job type of the source of a trial component.</p>
   * @public
   */
  TrialComponentSource?: TrialComponentSource | undefined;

  /**
   * <p>The status of the component. States include:</p> <ul> <li> <p>InProgress</p> </li> <li> <p>Completed</p> </li> <li> <p>Failed</p> </li> </ul>
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
}

/**
 * @public
 */
export interface ListTrialComponentsResponse {
  /**
   * <p>A list of the summaries of your trial components.</p>
   * @public
   */
  TrialComponentSummaries?: TrialComponentSummary[] | undefined;

  /**
   * <p>A token for getting the next set of components, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortTrialsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;

/**
 * @public
 */
export type SortTrialsBy = (typeof SortTrialsBy)[keyof typeof SortTrialsBy];

/**
 * @public
 */
export interface ListTrialsRequest {
  /**
   * <p>A filter that returns only trials that are part of the specified experiment.</p>
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * <p>A filter that returns only trials that are associated with the specified trial component.</p>
   * @public
   */
  TrialComponentName?: string | undefined;

  /**
   * <p>A filter that returns only trials created after the specified time.</p>
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * <p>A filter that returns only trials created before the specified time.</p>
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   * @public
   */
  SortBy?: SortTrialsBy | undefined;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of trials to return in the response. The default value is 10.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the previous call to <code>ListTrials</code> didn't return the full set of trials, the call returns a token for getting the next set of trials.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of the properties of a trial. To get the complete set of properties, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrial.html">DescribeTrial</a> API and provide the <code>TrialName</code>.</p>
 * @public
 */
export interface TrialSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   * @public
   */
  TrialArn?: string | undefined;

  /**
   * <p>The name of the trial.</p>
   * @public
   */
  TrialName?: string | undefined;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't specified, <code>TrialName</code> is displayed.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The source of the trial.</p>
   * @public
   */
  TrialSource?: TrialSource | undefined;

  /**
   * <p>When the trial was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the trial was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTrialsResponse {
  /**
   * <p>A list of the summaries of your trials.</p>
   * @public
   */
  TrialSummaries?: TrialSummary[] | undefined;

  /**
   * <p>A token for getting the next set of trials, if there are any.</p>
   * @public
   */
  NextToken?: string | undefined;
}

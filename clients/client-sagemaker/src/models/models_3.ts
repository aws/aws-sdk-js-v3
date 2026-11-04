// smithy-typescript generated code
import type {
  _InstanceType,
  AccountDefaultStatus,
  AIBenchmarkJobStatus,
  AIRecommendationJobStatus,
  AlgorithmSortBy,
  AppImageConfigSortKey,
  AppSortKey,
  AssociationEdgeType,
  AutoMLJobStatus,
  AutoMLSortBy,
  AutoMLSortOrder,
  BatchStrategy,
  CandidateSortBy,
  CandidateStatus,
  ClusterEventResourceType,
  ClusterSortBy,
  CodeRepositorySortBy,
  CodeRepositorySortOrder,
  CompilationJobStatus,
  DetailedModelPackageStatus,
  DeviceDeploymentStatus,
  DirectInternetAccess,
  DomainStatus,
  EdgePackagingJobStatus,
  EndpointStatus,
  EventSortBy,
  ExecutionRoleIdentityConfig,
  ExecutionStatus,
  FeatureGroupStatus,
  FeatureType,
  FlowDefinitionStatus,
  ForEachStatus,
  HubContentStatus,
  HubContentSupportStatus,
  HubContentType,
  HubStatus,
  HumanTaskUiStatus,
  HyperParameterTuningJobObjectiveType,
  HyperParameterTuningJobStatus,
  HyperParameterTuningJobStrategyType,
  ImageStatus,
  ImageVersionStatus,
  IncludedData,
  InferenceComponentCapacitySizeType,
  InferenceComponentStatus,
  InferenceExperimentStatus,
  InferenceExperimentType,
  IPAddressType,
  IsTrackingServerActive,
  JobCategory,
  JobSecondaryStatus,
  JobStatus,
  JobType,
  LabelingJobStatus,
  LastUpdateStatusValue,
  ListAIBenchmarkJobsSortBy,
  ListAIRecommendationJobsSortBy,
  ListAIWorkloadConfigsSortBy,
  ListCompilationJobsSortBy,
  MaintenanceStatus,
  ManagedStorageType,
  MlflowAppStatus,
  ModelApprovalStatus,
  ModelCardExportJobStatus,
  ModelCardProcessingStatus,
  ModelCardStatus,
  ModelPackageGroupStatus,
  ModelPackageRegistrationType,
  ModelPackageStatus,
  ModelRegistrationMode,
  ModelVariantStatus,
  MonitoringJobDefinitionSortKey,
  MonitoringType,
  NotebookInstanceAcceleratorType,
  NotebookInstanceStatus,
  ObjectiveStatus,
  OfflineStoreStatusValue,
  Operator,
  OptimizationJobDeploymentInstanceType,
  OptimizationJobStatus,
  PartnerAppAuthType,
  PartnerAppStatus,
  PartnerAppType,
  PipelineExecutionStatus,
  PipelineStatus,
  ProcessingJobStatus,
  Processor,
  ProductionVariantInstanceType,
  ProfilingStatus,
  ProjectStatus,
  RecommendationJobStatus,
  RecommendationJobType,
  RecommendationStepType,
  ReservedCapacityInstanceType,
  ReservedCapacityStatus,
  ReservedCapacityType,
  ResourceType,
  RootAccess,
  RuleEvaluationStatus,
  SageMakerResourceName,
  SagemakerServicecatalogStatus,
  SchedulerResourceStatus,
  ScheduleStatus,
  SecondaryStatus,
  SkipModelValidation,
  SortActionsBy,
  SortArtifactsBy,
  SortAssociationsBy,
  SortClusterSchedulerConfigBy,
  SortContextsBy,
  SortOrder,
  SortQuotaBy,
  SpaceStatus,
  StudioLifecycleConfigAppType,
  ThroughputMode,
  TrackingServerMaintenanceStatus,
  TrackingServerSize,
  TrackingServerStatus,
  TrainingJobStatus,
  TrainingPlanStatus,
  TrainingSessionStatus,
  TransformJobStatus,
  UserProfileStatus,
  VendorGuidance,
  VolumeAttachmentStatus,
  WarmPoolResourceStatus,
  WorkforceIpAddressType,
  WorkforceStatus,
} from "./enums";
import type {
  ActionSummary,
  AdditionalInferenceSpecificationDefinition,
  AgentVersion,
  AIBenchmarkJobSummary,
  AIRecommendationJobSummary,
  AIWorkloadConfigSummary,
  AlgorithmSpecification,
  AlgorithmSummary,
  AmazonQSettings,
  AppDetails,
  AppImageConfigDetails,
  AppSpecification,
  ArtifactSummary,
  AssociationInfo,
  AssociationSummary,
  AutoMLCandidate,
  AutoMLJobSummary,
  AutoRollbackConfig,
  Autotune,
  AvailableUpgrade,
  BatchDataCaptureConfig,
  BillableTokenUsage,
  CfnTemplateProviderDetail,
  Channel,
  CheckpointConfig,
  ClusterEventSummary,
  ClusterNodeSummary,
  InferenceSpecification,
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
import type {
  ClusterSchedulerConfigSummary,
  ClusterSummary,
  CodeRepositorySummary,
  CognitoConfig,
  CompilationJobSummary,
  ComputeQuotaSummary,
  ContainerDefinition,
  ContainerMetricsConfig,
  ContextSummary,
  DockerSettings,
  DriftCheckBaselines,
  EdgeOutputConfig,
  EndpointInfo,
  FeatureDefinition,
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
  InferenceComponentSchedulingConfig,
  InferenceComponentStartupParameters,
  InferenceExecutionConfig,
  InferenceExperimentDataStorageConfig,
  InferenceExperimentSchedule,
  LabelingJobAlgorithmsConfig,
  LabelingJobInputConfig,
  LabelingJobOutputConfig,
  LabelingJobStoppingConditions,
  ManagedConfiguration,
  MetadataProperties,
  ModelBiasAppSpecification,
  ModelBiasBaselineConfig,
  ModelBiasJobInput,
  ModelCardExportOutputConfig,
  ModelCardSecurityConfig,
  ModelExplainabilityAppSpecification,
  ModelExplainabilityBaselineConfig,
  ModelExplainabilityJobInput,
  ModelInfrastructureConfig,
  ModelLifeCycle,
  ModelMetrics,
  ModelPackageModelCard,
  ModelPackageSecurityConfig,
  ModelPackageValidationSpecification,
  ModelQualityAppSpecification,
  ModelQualityBaselineConfig,
  ModelQualityJobInput,
  MonitoringNetworkConfig,
  MonitoringOutputConfig,
  MonitoringResources,
  MonitoringStoppingCondition,
  OfflineStoreConfig,
  OnlineStoreConfig,
  ProductionVariantServerlessConfig,
  RecommendationJobInputConfig,
  RecommendationJobStoppingConditions,
  ResourceLimits,
  RetryStrategy,
  ShadowModeConfig,
  SourceAlgorithmSpecification,
  TrustedIdentityPropagationSettings,
  UnifiedStudioSettings,
  UserSettings,
} from "./models_1";
import type {
  CustomizedMetricSpecification,
  DataCaptureConfigSummary,
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DeployedImage,
  DeploymentRecommendation,
  ExperimentConfig,
  InfraCheckConfig,
  InstanceMetadataServiceConfiguration,
  LoraConfig,
  MemberDefinition,
  MlflowConfig,
  ModelArtifacts,
  ModelClientConfig,
  ModelPackageConfig,
  MonitoringScheduleConfig,
  NetworkConfig,
  NotebookInstanceLifecycleHook,
  NotificationConfiguration,
  OptimizationConfig,
  OptimizationJobModelSource,
  OptimizationJobOutputConfig,
  OptimizationVpcConfig,
  OwnershipSettings,
  ParallelismConfiguration,
  PartnerAppConfig,
  PartnerAppMaintenanceConfig,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  ProductionVariantSummary,
  ProfilerConfig,
  ProfilerRuleConfiguration,
  RemoteDebugConfig,
  ServerlessJobConfig,
  ServiceCatalogProvisioningDetails,
  SourceIpConfig,
  SpaceSettings,
  SpaceSharingSettings,
  TensorBoardOutputConfig,
  TrainingSessionModelConfig,
  TrainingSessionOutputConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  WorkerAccessConfiguration,
} from "./models_2";

/**
 * The source of the experiment.
 *
 * @public
 */
export interface ExperimentSource {
  /**
   * The Amazon Resource Name (ARN) of the source.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The source type.
   *
   * @public
   */
  SourceType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExperimentResponse {
  /**
   * The name of the experiment.
   *
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the experiment.
   *
   * @public
   */
  ExperimentArn?: string | undefined;

  /**
   * The name of the experiment as displayed. If `DisplayName` isn't specified, `ExperimentName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source and, optionally, the type.
   *
   * @public
   */
  Source?: ExperimentSource | undefined;

  /**
   * The description of the experiment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * When the experiment was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Who created the experiment.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * When the experiment was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Who last modified the experiment.
   *
   * @public
   */
  LastModifiedBy?: UserContext | undefined;
}

/**
 * @public
 */
export interface DescribeFeatureGroupRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the `FeatureGroup` you want described.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * A token to resume pagination of the list of `Features` (`FeatureDefinitions`). 2,500 `Features` are returned by default.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A value that indicates whether the update was successful.
 *
 * @public
 */
export interface LastUpdateStatus {
  /**
   * A value that indicates whether the update was made successful.
   *
   * @public
   */
  Status: LastUpdateStatusValue | undefined;

  /**
   * If the update wasn't successful, indicates the reason why it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * The status of `OfflineStore`.
 *
 * @public
 */
export interface OfflineStoreStatus {
  /**
   * An `OfflineStore` status.
   *
   * @public
   */
  Status: OfflineStoreStatusValue | undefined;

  /**
   * The justification for why the OfflineStoreStatus is Blocked (if applicable).
   *
   * @public
   */
  BlockedReason?: string | undefined;
}

/**
 * Active throughput configuration of the feature group. There are two modes: `ON_DEMAND` and `PROVISIONED`. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled.
 *
 * Note: `PROVISIONED` throughput mode is supported only for feature groups that are offline-only, or use the [`Standard`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType) tier online store.
 *
 * @public
 */
export interface ThroughputConfigDescription {
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
export interface DescribeFeatureGroupResponse {
  /**
   * The Amazon Resource Name (ARN) of the `FeatureGroup`.
   *
   * @public
   */
  FeatureGroupArn: string | undefined;

  /**
   * he name of the `FeatureGroup`.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The name of the `Feature` used for `RecordIdentifier`, whose value uniquely identifies a record stored in the feature store.
   *
   * @public
   */
  RecordIdentifierFeatureName: string | undefined;

  /**
   * The name of the feature that stores the `EventTime` of a Record in a `FeatureGroup`.
   *
   * An `EventTime` is a point in time when a new event occurs that corresponds to the creation or update of a `Record` in a `FeatureGroup`. All `Records` in the `FeatureGroup` have a corresponding `EventTime`.
   *
   * @public
   */
  EventTimeFeatureName: string | undefined;

  /**
   * A list of the `Features` in the `FeatureGroup`. Each feature is defined by a `FeatureName` and `FeatureType`.
   *
   * @public
   */
  FeatureDefinitions: FeatureDefinition[] | undefined;

  /**
   * A timestamp indicating when SageMaker created the `FeatureGroup`.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp indicating when the feature group was last updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The configuration for the `OnlineStore`.
   *
   * @public
   */
  OnlineStoreConfig?: OnlineStoreConfig | undefined;

  /**
   * The configuration of the offline store. It includes the following configurations:
   *
   * - Amazon S3 location of the offline store.
   * - Configuration of the Glue data catalog.
   * - Table format of the offline store.
   * - Option to disable the automatic creation of a Glue table for the offline store.
   * - Encryption configuration.
   *
   * @public
   */
  OfflineStoreConfig?: OfflineStoreConfig | undefined;

  /**
   * Active throughput configuration of the feature group. There are two modes: `ON_DEMAND` and `PROVISIONED`. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled.
   *
   * Note: `PROVISIONED` throughput mode is supported only for feature groups that are offline-only, or use the [`Standard`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType) tier online store.
   *
   * @public
   */
  ThroughputConfig?: ThroughputConfigDescription | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the OfflineStore if an OfflineStoreConfig is provided.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The status of the feature group.
   *
   * @public
   */
  FeatureGroupStatus?: FeatureGroupStatus | undefined;

  /**
   * The status of the `OfflineStore`. Notifies you if replicating data into the `OfflineStore` has failed. Returns either: `Active` or `Blocked`
   *
   * @public
   */
  OfflineStoreStatus?: OfflineStoreStatus | undefined;

  /**
   * A value indicating whether the update made to the feature group was successful.
   *
   * @public
   */
  LastUpdateStatus?: LastUpdateStatus | undefined;

  /**
   * The reason that the `FeatureGroup` failed to be replicated in the `OfflineStore`. This is failure can occur because:
   *
   * - The `FeatureGroup` could not be created in the `OfflineStore`.
   * - The `FeatureGroup` could not be deleted from the `OfflineStore`.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * A free form description of the feature group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A token to resume pagination of the list of `Features` (`FeatureDefinitions`).
   *
   * @public
   */
  NextToken: string | undefined;

  /**
   * The size of the `OnlineStore` in bytes.
   *
   * @public
   */
  OnlineStoreTotalSizeBytes?: number | undefined;
}

/**
 * @public
 */
export interface DescribeFeatureMetadataRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the feature group containing the feature.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The name of the feature.
   *
   * @public
   */
  FeatureName: string | undefined;
}

/**
 * A key-value pair that you specify to describe the feature.
 *
 * @public
 */
export interface FeatureParameter {
  /**
   * A key that must contain a value to describe the feature.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value that belongs to a key.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFeatureMetadataResponse {
  /**
   * The Amazon Resource Number (ARN) of the feature group that contains the feature.
   *
   * @public
   */
  FeatureGroupArn: string | undefined;

  /**
   * The name of the feature group that you've specified.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * The name of the feature that you've specified.
   *
   * @public
   */
  FeatureName: string | undefined;

  /**
   * The data type of the feature.
   *
   * @public
   */
  FeatureType: FeatureType | undefined;

  /**
   * A timestamp indicating when the feature was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp indicating when the metadata for the feature group was modified. For example, if you add a parameter describing the feature, the timestamp changes to reflect the last time you
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The description you added to describe the feature.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The key-value pairs that you added to describe the feature.
   *
   * @public
   */
  Parameters?: FeatureParameter[] | undefined;
}

/**
 * @public
 */
export interface DescribeFlowDefinitionRequest {
  /**
   * The name of the flow definition.
   *
   * @public
   */
  FlowDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeFlowDefinitionResponse {
  /**
   * The Amazon Resource Name (ARN) of the flow defintion.
   *
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow definition.
   *
   * @public
   */
  FlowDefinitionName: string | undefined;

  /**
   * The status of the flow definition. Valid values are listed below.
   *
   * @public
   */
  FlowDefinitionStatus: FlowDefinitionStatus | undefined;

  /**
   * The timestamp when the flow definition was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Container for configuring the source of human task requests. Used to specify if Amazon Rekognition or Amazon Textract is used as an integration source.
   *
   * @public
   */
  HumanLoopRequestSource?: HumanLoopRequestSource | undefined;

  /**
   * An object containing information about what triggers a human review workflow.
   *
   * @public
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig | undefined;

  /**
   * An object containing information about who works on the task, the workforce task price, and other task details.
   *
   * @public
   */
  HumanLoopConfig?: HumanLoopConfig | undefined;

  /**
   * An object containing information about the output file.
   *
   * @public
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) execution role for the flow definition.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The reason your flow definition failed.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHubRequest {
  /**
   * The name of the hub to describe.
   *
   * @public
   */
  HubName: string | undefined;
}

/**
 * @public
 */
export interface DescribeHubResponse {
  /**
   * The name of the hub.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hub.
   *
   * @public
   */
  HubArn: string | undefined;

  /**
   * The display name of the hub.
   *
   * @public
   */
  HubDisplayName?: string | undefined;

  /**
   * A description of the hub.
   *
   * @public
   */
  HubDescription?: string | undefined;

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
   * The status of the hub.
   *
   * @public
   */
  HubStatus: HubStatus | undefined;

  /**
   * The failure reason if importing hub content failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The date and time that the hub was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the hub was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface DescribeHubContentRequest {
  /**
   * The name of the hub that contains the content to describe.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The type of content in the hub.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * The name of the content to describe.
   *
   * @public
   */
  HubContentName: string | undefined;

  /**
   * The version of the content to describe.
   *
   * @public
   */
  HubContentVersion?: string | undefined;
}

/**
 * Any dependencies related to hub content, such as scripts, model artifacts, datasets, or notebooks.
 *
 * @public
 */
export interface HubContentDependency {
  /**
   * The hub content dependency origin path.
   *
   * @public
   */
  DependencyOriginPath?: string | undefined;

  /**
   * The hub content dependency copy path.
   *
   * @public
   */
  DependencyCopyPath?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHubContentResponse {
  /**
   * The name of the hub content.
   *
   * @public
   */
  HubContentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hub content.
   *
   * @public
   */
  HubContentArn: string | undefined;

  /**
   * The version of the hub content.
   *
   * @public
   */
  HubContentVersion: string | undefined;

  /**
   * The type of hub content.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * The document schema version for the hub content.
   *
   * @public
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * The name of the hub that contains the content.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hub that contains the content.
   *
   * @public
   */
  HubArn: string | undefined;

  /**
   * The display name of the hub content.
   *
   * @public
   */
  HubContentDisplayName?: string | undefined;

  /**
   * A description of the hub content.
   *
   * @public
   */
  HubContentDescription?: string | undefined;

  /**
   * A string that provides a description of the hub content. This string can include links, tables, and standard markdown formating.
   *
   * @public
   */
  HubContentMarkdown?: string | undefined;

  /**
   * The hub content document that describes information about the hub content such as type, associated containers, scripts, and more.
   *
   * @public
   */
  HubContentDocument: string | undefined;

  /**
   * The ARN of the public hub content.
   *
   * @public
   */
  SageMakerPublicHubContentArn?: string | undefined;

  /**
   * The minimum version of the hub content.
   *
   * @public
   */
  ReferenceMinVersion?: string | undefined;

  /**
   * The support status of the hub content.
   *
   * @public
   */
  SupportStatus?: HubContentSupportStatus | undefined;

  /**
   * The searchable keywords for the hub content.
   *
   * @public
   */
  HubContentSearchKeywords?: string[] | undefined;

  /**
   * The location of any dependencies that the hub content has, such as scripts, model artifacts, datasets, or notebooks.
   *
   * @public
   */
  HubContentDependencies?: HubContentDependency[] | undefined;

  /**
   * The status of the hub content.
   *
   * @public
   */
  HubContentStatus: HubContentStatus | undefined;

  /**
   * The failure reason if importing hub content failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The date and time that hub content was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The last modified time of the hub content.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeHumanTaskUiRequest {
  /**
   * The name of the human task user interface (worker task template) you want information about.
   *
   * @public
   */
  HumanTaskUiName: string | undefined;
}

/**
 * Container for user interface template information.
 *
 * @public
 */
export interface UiTemplateInfo {
  /**
   * The URL for the user interface template.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The SHA-256 digest of the contents of the template.
   *
   * @public
   */
  ContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHumanTaskUiResponse {
  /**
   * The Amazon Resource Name (ARN) of the human task user interface (worker task template).
   *
   * @public
   */
  HumanTaskUiArn: string | undefined;

  /**
   * The name of the human task user interface (worker task template).
   *
   * @public
   */
  HumanTaskUiName: string | undefined;

  /**
   * The status of the human task user interface (worker task template). Valid values are listed below.
   *
   * @public
   */
  HumanTaskUiStatus?: HumanTaskUiStatus | undefined;

  /**
   * The timestamp when the human task user interface was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Container for user interface template information.
   *
   * @public
   */
  UiTemplate: UiTemplateInfo | undefined;
}

/**
 * @public
 */
export interface DescribeHyperParameterTuningJobRequest {
  /**
   * The name of the tuning job.
   *
   * @public
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * Shows the latest objective metric emitted by a training job that was launched by a hyperparameter tuning job. You define the objective metric in the `HyperParameterTuningJobObjective` parameter of [HyperParameterTuningJobConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html).
 *
 * @public
 */
export interface FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * Select if you want to minimize or maximize the objective metric during hyperparameter tuning.
   *
   * @public
   */
  Type?: HyperParameterTuningJobObjectiveType | undefined;

  /**
   * The name of the objective metric. For SageMaker built-in algorithms, metrics are defined per algorithm. See the [metrics for XGBoost](https://docs.aws.amazon.com/sagemaker/latest/dg/xgboost-tuning.html) as an example. You can also use a custom algorithm for training and define your own metrics. For more information, see [Define metrics and environment variables](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics-variables.html).
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The value of the objective metric.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * The container for the summary information about a training job.
 *
 * @public
 */
export interface HyperParameterTrainingJobSummary {
  /**
   * The training job definition name.
   *
   * @public
   */
  TrainingJobDefinitionName?: string | undefined;

  /**
   * The name of the training job.
   *
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training job.
   *
   * @public
   */
  TrainingJobArn: string | undefined;

  /**
   * The HyperParameter tuning job that launched the training job.
   *
   * @public
   */
  TuningJobName?: string | undefined;

  /**
   * The date and time that the training job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the training job started.
   *
   * @public
   */
  TrainingStartTime?: Date | undefined;

  /**
   * Specifies the time when the training job ends on training instances. You are billed for the time interval between the value of `TrainingStartTime` and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when SageMaker detects a job failure.
   *
   * @public
   */
  TrainingEndTime?: Date | undefined;

  /**
   * The status of the training job.
   *
   * @public
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * A list of the hyperparameters for which you specified ranges to search.
   *
   * @public
   */
  TunedHyperParameters: Record<string, string> | undefined;

  /**
   * The reason that the training job failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The [FinalHyperParameterTuningJobObjectiveMetric](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_FinalHyperParameterTuningJobObjectiveMetric.html) object that specifies the value of the objective metric of the tuning job that launched this training job.
   *
   * @public
   */
  FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric | undefined;

  /**
   * The status of the objective metric for the training job:
   *
   * - Succeeded: The final objective metric for the training job was evaluated by the hyperparameter tuning job and used in the hyperparameter tuning process.
   *
   * - Pending: The training job is in progress and evaluation of its final objective metric is pending.
   *
   * - Failed: The final objective metric for the training job was not evaluated, and was not used in the hyperparameter tuning process. This typically occurs when the training job failed or did not emit an objective metric.
   *
   * @public
   */
  ObjectiveStatus?: ObjectiveStatus | undefined;
}

/**
 * The total resources consumed by your hyperparameter tuning job.
 *
 * @public
 */
export interface HyperParameterTuningJobConsumedResources {
  /**
   * The wall clock runtime in seconds used by your hyperparameter tuning job.
   *
   * @public
   */
  RuntimeInSeconds?: number | undefined;
}

/**
 * Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
 *
 * @public
 */
export interface ObjectiveStatusCounters {
  /**
   * The number of training jobs whose final objective metric was evaluated by the hyperparameter tuning job and used in the hyperparameter tuning process.
   *
   * @public
   */
  Succeeded?: number | undefined;

  /**
   * The number of training jobs that are in progress and pending evaluation of their final objective metric.
   *
   * @public
   */
  Pending?: number | undefined;

  /**
   * The number of training jobs whose final objective metric was not evaluated and used in the hyperparameter tuning process. This typically occurs when the training job failed or did not emit an objective metric.
   *
   * @public
   */
  Failed?: number | undefined;
}

/**
 * The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
 *
 * @public
 */
export interface TrainingJobStatusCounters {
  /**
   * The number of completed training jobs launched by the hyperparameter tuning job.
   *
   * @public
   */
  Completed?: number | undefined;

  /**
   * The number of in-progress training jobs launched by a hyperparameter tuning job.
   *
   * @public
   */
  InProgress?: number | undefined;

  /**
   * The number of training jobs that failed, but can be retried. A failed training job can be retried only if it failed because an internal service error occurred.
   *
   * @public
   */
  RetryableError?: number | undefined;

  /**
   * The number of training jobs that failed and can't be retried. A failed training job can't be retried if it failed because a client error occurred.
   *
   * @public
   */
  NonRetryableError?: number | undefined;

  /**
   * The number of training jobs launched by a hyperparameter tuning job that were manually stopped.
   *
   * @public
   */
  Stopped?: number | undefined;
}

/**
 * A structure that contains runtime information about both current and completed hyperparameter tuning jobs.
 *
 * @public
 */
export interface HyperParameterTuningJobCompletionDetails {
  /**
   * The number of training jobs launched by a tuning job that are not improving (1% or less) as measured by model performance evaluated against an objective function.
   *
   * @public
   */
  NumberOfTrainingJobsObjectiveNotImproving?: number | undefined;

  /**
   * The time in timestamp format that AMT detected model convergence, as defined by a lack of significant improvement over time based on criteria developed over a wide range of diverse benchmarking tests.
   *
   * @public
   */
  ConvergenceDetectedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeHyperParameterTuningJobResponse {
  /**
   * The name of the hyperparameter tuning job.
   *
   * @public
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the tuning job.
   *
   * @public
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * The [HyperParameterTuningJobConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobConfig.html) object that specifies the configuration of the tuning job.
   *
   * @public
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * The [HyperParameterTrainingJobDefinition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTrainingJobDefinition.html) object that specifies the definition of the training jobs that this tuning job launches.
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
   * The status of the tuning job.
   *
   * @public
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | undefined;

  /**
   * The date and time that the tuning job started.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the tuning job ended.
   *
   * @public
   */
  HyperParameterTuningEndTime?: Date | undefined;

  /**
   * The date and time that the status of the tuning job was modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The [TrainingJobStatusCounters](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobStatusCounters.html) object that specifies the number of training jobs, categorized by status, that this tuning job launched.
   *
   * @public
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * The [ObjectiveStatusCounters](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ObjectiveStatusCounters.html) object that specifies the number of training jobs, categorized by the status of their final objective metric, that this tuning job launched.
   *
   * @public
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * A [TrainingJobSummary](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html) object that describes the training job that completed with the best current [HyperParameterTuningJobObjective](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobObjective.html).
   *
   * @public
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary | undefined;

  /**
   * If the hyperparameter tuning job is an warm start tuning job with a `WarmStartType` of `IDENTICAL_DATA_AND_ALGORITHM`, this is the [TrainingJobSummary](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html) for the training job with the best objective metric value of all training jobs launched by this tuning job and all parent jobs specified for the warm start tuning job.
   *
   * @public
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary | undefined;

  /**
   * The configuration for starting the hyperparameter parameter tuning job using one or more previous tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.
   *
   * @public
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig | undefined;

  /**
   * A flag to indicate if autotune is enabled for the hyperparameter tuning job.
   *
   * @public
   */
  Autotune?: Autotune | undefined;

  /**
   * If the tuning job failed, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Tuning job completion information returned as the response from a hyperparameter tuning job. This information tells if your tuning job has or has not converged. It also includes the number of training jobs that have not improved model performance as evaluated against the objective function.
   *
   * @public
   */
  TuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails | undefined;

  /**
   * The total resources consumed by your hyperparameter tuning job.
   *
   * @public
   */
  ConsumedResources?: HyperParameterTuningJobConsumedResources | undefined;
}

/**
 * @public
 */
export interface DescribeImageRequest {
  /**
   * The name of the image to describe.
   *
   * @public
   */
  ImageName: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageResponse {
  /**
   * When the image was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The description of the image.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the image as displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * When a create, update, or delete operation fails, the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The ARN of the image.
   *
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * The name of the image.
   *
   * @public
   */
  ImageName?: string | undefined;

  /**
   * The status of the image.
   *
   * @public
   */
  ImageStatus?: ImageStatus | undefined;

  /**
   * When the image was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The ARN of the IAM role that enables Amazon SageMaker AI to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageVersionRequest {
  /**
   * The name of the image.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * The version of the image. If not specified, the latest version is described.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The alias of the image version.
   *
   * @public
   */
  Alias?: string | undefined;
}

/**
 * @public
 */
export interface DescribeImageVersionResponse {
  /**
   * The registry path of the container image on which this image version is based.
   *
   * @public
   */
  BaseImage?: string | undefined;

  /**
   * The registry path of the container image that contains this image version.
   *
   * @public
   */
  ContainerImage?: string | undefined;

  /**
   * When the version was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When a create or delete operation fails, the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The ARN of the image the version is based on.
   *
   * @public
   */
  ImageArn?: string | undefined;

  /**
   * The ARN of the version.
   *
   * @public
   */
  ImageVersionArn?: string | undefined;

  /**
   * The status of the version.
   *
   * @public
   */
  ImageVersionStatus?: ImageVersionStatus | undefined;

  /**
   * When the version was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The version number.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The stability of the image version specified by the maintainer.
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
export interface DescribeInferenceComponentInput {
  /**
   * The name of the inference component.
   *
   * @public
   */
  InferenceComponentName: string | undefined;
}

/**
 * Specifies the type and size of the endpoint capacity to activate for a rolling deployment or a rollback strategy. You can specify your batches as either of the following:
 *
 * - A count of inference component copies
 * - The overall percentage or your fleet
 *
 * For a rollback strategy, if you don't specify the fields in this object, or if you set the `Value` parameter to 100%, then SageMaker AI uses a blue/green rollback strategy and rolls all traffic back to the blue fleet.
 *
 * @public
 */
export interface InferenceComponentCapacitySize {
  /**
   * Specifies the endpoint capacity type.
   *
   * - **COPY_COUNT**
   *
   *   The endpoint activates based on the number of inference component copies.
   *
   * - **CAPACITY_PERCENT**
   *
   *   The endpoint activates based on the specified percentage of capacity.
   *
   * @public
   */
  Type: InferenceComponentCapacitySizeType | undefined;

  /**
   * Defines the capacity size, either as a number of inference component copies or a capacity percentage.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * Specifies a rolling deployment strategy for updating a SageMaker AI inference component.
 *
 * @public
 */
export interface InferenceComponentRollingUpdatePolicy {
  /**
   * The batch size for each rolling step in the deployment process. For each step, SageMaker AI provisions capacity on the new endpoint fleet, routes traffic to that fleet, and terminates capacity on the old endpoint fleet. The value must be between 5% to 50% of the copy count of the inference component.
   *
   * @public
   */
  MaximumBatchSize: InferenceComponentCapacitySize | undefined;

  /**
   * The length of the baking period, during which SageMaker AI monitors alarms for each batch on the new fleet.
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
   * The batch size for a rollback to the old endpoint fleet. If this field is absent, the value is set to the default, which is 100% of the total capacity. When the default is used, SageMaker AI provisions the entire capacity of the old fleet at once during rollback.
   *
   * @public
   */
  RollbackMaximumBatchSize?: InferenceComponentCapacitySize | undefined;
}

/**
 * The deployment configuration for an endpoint that hosts inference components. The configuration includes the desired deployment strategy and rollback settings.
 *
 * @public
 */
export interface InferenceComponentDeploymentConfig {
  /**
   * Specifies a rolling deployment strategy for updating a SageMaker AI endpoint.
   *
   * @public
   */
  RollingUpdatePolicy: InferenceComponentRollingUpdatePolicy | undefined;

  /**
   * Automatic rollback configuration for handling endpoint deployment failures and recovery.
   *
   * @public
   */
  AutoRollbackConfiguration?: AutoRollbackConfig | undefined;
}

/**
 * The placement status of an inference component on a specific instance type. Shows the number of inference component copies currently placed on instances of a given type.
 *
 * @public
 */
export interface InferenceComponentPlacementStatus {
  /**
   * The ML compute instance type where the inference component copies are placed.
   *
   * @public
   */
  InstanceType: ProductionVariantInstanceType | undefined;

  /**
   * The number of inference component copies currently placed on instances of this type.
   *
   * @public
   */
  CurrentCopyCount: number | undefined;
}

/**
 * Details about the runtime settings for the model that is deployed with the inference component.
 *
 * @public
 */
export interface InferenceComponentRuntimeConfigSummary {
  /**
   * The number of runtime copies of the model container that you requested to deploy with the inference component.
   *
   * @public
   */
  DesiredCopyCount?: number | undefined;

  /**
   * The number of runtime copies of the model container that are currently deployed.
   *
   * @public
   */
  CurrentCopyCount?: number | undefined;

  /**
   * The placement status of the inference component across instance types. Shows how the inference component copies are distributed across instance types.
   *
   * @public
   */
  PlacementStatus?: InferenceComponentPlacementStatus[] | undefined;
}

/**
 * Details about the resources that are deployed with this inference component.
 *
 * @public
 */
export interface InferenceComponentContainerSpecificationSummary {
  /**
   * Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this [ProductionVariant](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariant.html).
   *
   * If you used the `registry/repository[:tag]` form to specify the image path of the primary container when you created the model hosted in this `ProductionVariant`, the path resolves to a path of the form `registry/repository[@digest]`. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see [Pulling an Image](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html) in the *Amazon ECR User Guide*.
   *
   * @public
   */
  DeployedImage?: DeployedImage | undefined;

  /**
   * The Amazon S3 path where the model artifacts are stored.
   *
   * @public
   */
  ArtifactUrl?: string | undefined;

  /**
   * The environment variables to set in the Docker container.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * The container metrics scraping configuration for this inference component, including the metrics endpoint path and publishing frequency.
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
export interface InferenceComponentDataCacheConfigSummary {
  /**
   * Indicates whether the inference component caches model artifacts as part of the auto scaling process.
   *
   * @public
   */
  EnableCaching: boolean | undefined;
}

/**
 * Details about the resources that are deployed with this inference component.
 *
 * @public
 */
export interface InferenceComponentSpecificationSummary {
  /**
   * The ML compute instance type associated with this inference component specification.
   *
   * @public
   */
  InstanceType?: ProductionVariantInstanceType | undefined;

  /**
   * The name of the SageMaker AI model object that is deployed with the inference component.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * Details about the container that provides the runtime environment for the model that is deployed with the inference component.
   *
   * @public
   */
  Container?: InferenceComponentContainerSpecificationSummary | undefined;

  /**
   * Settings that take effect while the model container starts up.
   *
   * @public
   */
  StartupParameters?: InferenceComponentStartupParameters | undefined;

  /**
   * The compute resources allocated to run the model, plus any adapter models, that you assign to the inference component.
   *
   * @public
   */
  ComputeResourceRequirements?: InferenceComponentComputeResourceRequirements | undefined;

  /**
   * The name of the base inference component that contains this inference component.
   *
   * @public
   */
  BaseInferenceComponentName?: string | undefined;

  /**
   * Settings that affect how the inference component caches data.
   *
   * @public
   */
  DataCacheConfig?: InferenceComponentDataCacheConfigSummary | undefined;

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
export interface DescribeInferenceComponentOutput {
  /**
   * The name of the inference component.
   *
   * @public
   */
  InferenceComponentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the inference component.
   *
   * @public
   */
  InferenceComponentArn: string | undefined;

  /**
   * The name of the endpoint that hosts the inference component.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint that hosts the inference component.
   *
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * The name of the production variant that hosts the inference component.
   *
   * @public
   */
  VariantName?: string | undefined;

  /**
   * If the inference component status is `Failed`, the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Details about the resources that are deployed with this inference component.
   *
   * @public
   */
  Specification?: InferenceComponentSpecificationSummary | undefined;

  /**
   * A list of specification summaries for the inference component, one per instance type. This parameter is populated when the inference component was created with multiple specifications. When this parameter is populated, the singular `Specification` parameter is not returned.
   *
   * @public
   */
  Specifications?: InferenceComponentSpecificationSummary[] | undefined;

  /**
   * Details about the runtime settings for the model that is deployed with the inference component.
   *
   * @public
   */
  RuntimeConfig?: InferenceComponentRuntimeConfigSummary | undefined;

  /**
   * The time when the inference component was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The time when the inference component was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The status of the inference component.
   *
   * @public
   */
  InferenceComponentStatus?: InferenceComponentStatus | undefined;

  /**
   * The deployment and rollback settings that you assigned to the inference component.
   *
   * @public
   */
  LastDeploymentConfig?: InferenceComponentDeploymentConfig | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceExperimentRequest {
  /**
   * The name of the inference experiment to describe.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The metadata of the endpoint.
 *
 * @public
 */
export interface EndpointMetadata {
  /**
   * The name of the endpoint.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The name of the endpoint configuration.
   *
   * @public
   */
  EndpointConfigName?: string | undefined;

  /**
   * The status of the endpoint. For possible values of the status of an endpoint, see [EndpointSummary](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_EndpointSummary.html).
   *
   * @public
   */
  EndpointStatus?: EndpointStatus | undefined;

  /**
   * If the status of the endpoint is `Failed`, or the status is `InService` but update operation fails, this provides the reason why it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * Summary of the deployment configuration of a model.
 *
 * @public
 */
export interface ModelVariantConfigSummary {
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
   * The configuration of the infrastructure that the model has been deployed to.
   *
   * @public
   */
  InfrastructureConfig: ModelInfrastructureConfig | undefined;

  /**
   * The status of deployment for the model variant on the hosted inference endpoint.
   *
   * - `Creating` - Amazon SageMaker is preparing the model variant on the hosted inference endpoint.
   * - `InService` - The model variant is running on the hosted inference endpoint.
   * - `Updating` - Amazon SageMaker is updating the model variant on the hosted inference endpoint.
   * - `Deleting` - Amazon SageMaker is deleting the model variant on the hosted inference endpoint.
   * - `Deleted` - The model variant has been deleted on the hosted inference endpoint. This can only happen after stopping the experiment.
   *
   * @public
   */
  Status: ModelVariantStatus | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceExperimentResponse {
  /**
   * The ARN of the inference experiment being described.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the inference experiment.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the inference experiment.
   *
   * @public
   */
  Type: InferenceExperimentType | undefined;

  /**
   * The duration for which the inference experiment ran or will run.
   *
   * @public
   */
  Schedule?: InferenceExperimentSchedule | undefined;

  /**
   * The status of the inference experiment. The following are the possible statuses for an inference experiment:
   *
   * - `Creating` - Amazon SageMaker is creating your experiment.
   * - `Created` - Amazon SageMaker has finished the creation of your experiment and will begin the experiment at the scheduled time.
   * - `Updating` - When you make changes to your experiment, your experiment shows as updating.
   * - `Starting` - Amazon SageMaker is beginning your experiment.
   * - `Running` - Your experiment is in progress.
   * - `Stopping` - Amazon SageMaker is stopping your experiment.
   * - `Completed` - Your experiment has completed.
   * - `Cancelled` - When you conclude your experiment early using the [StopInferenceExperiment](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopInferenceExperiment.html) API, or if any operation fails with an unexpected error, it shows as cancelled.
   *
   * @public
   */
  Status: InferenceExperimentStatus | undefined;

  /**
   * The error message or client-specified `Reason` from the [StopInferenceExperiment](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopInferenceExperiment.html) API, that explains the status of the inference experiment.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The description of the inference experiment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp at which you created the inference experiment.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The timestamp at which the inference experiment was completed.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * The timestamp at which you last modified the inference experiment.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The metadata of the endpoint on which the inference experiment ran.
   *
   * @public
   */
  EndpointMetadata: EndpointMetadata | undefined;

  /**
   * An array of `ModelVariantConfigSummary` objects. There is one for each variant in the inference experiment. Each `ModelVariantConfigSummary` object in the array describes the infrastructure configuration for deploying the corresponding variant.
   *
   * @public
   */
  ModelVariants: ModelVariantConfigSummary[] | undefined;

  /**
   * The Amazon S3 location and configuration for storing inference request and response data.
   *
   * @public
   */
  DataStorageConfig?: InferenceExperimentDataStorageConfig | undefined;

  /**
   * The configuration of `ShadowMode` inference experiment type, which shows the production variant that takes all the inference requests, and the shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant it also shows the percentage of requests that Amazon SageMaker replicates.
   *
   * @public
   */
  ShadowModeConfig?: ShadowModeConfig | undefined;

  /**
   * The Amazon Web Services Key Management Service (Amazon Web Services KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint. For more information, see [CreateInferenceExperiment](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceExperiment.html).
   *
   * @public
   */
  KmsKey?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceRecommendationsJobRequest {
  /**
   * The name of the job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  JobName: string | undefined;
}

/**
 * The metrics for an existing endpoint compared in an Inference Recommender job.
 *
 * @public
 */
export interface InferenceMetrics {
  /**
   * The expected maximum number of requests per minute for the instance.
   *
   * @public
   */
  MaxInvocations: number | undefined;

  /**
   * The expected model latency at maximum invocations per minute for the instance.
   *
   * @public
   */
  ModelLatency: number | undefined;
}

/**
 * The performance results from running an Inference Recommender job on an existing endpoint.
 *
 * @public
 */
export interface EndpointPerformance {
  /**
   * The metrics for an existing endpoint.
   *
   * @public
   */
  Metrics: InferenceMetrics | undefined;

  /**
   * Details about a customer endpoint that was compared in an Inference Recommender job.
   *
   * @public
   */
  EndpointInfo: EndpointInfo | undefined;
}

/**
 * The endpoint configuration made by Inference Recommender during a recommendation job.
 *
 * @public
 */
export interface EndpointOutputConfiguration {
  /**
   * The name of the endpoint made during a recommendation job.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The name of the production variant (deployed model) made during a recommendation job.
   *
   * @public
   */
  VariantName: string | undefined;

  /**
   * The instance type recommended by Amazon SageMaker Inference Recommender.
   *
   * @public
   */
  InstanceType?: ProductionVariantInstanceType | undefined;

  /**
   * The number of instances recommended to launch initially.
   *
   * @public
   */
  InitialInstanceCount?: number | undefined;

  /**
   * Specifies the serverless configuration for an endpoint variant.
   *
   * @public
   */
  ServerlessConfig?: ProductionVariantServerlessConfig | undefined;
}

/**
 * The metrics of recommendations.
 *
 * @public
 */
export interface RecommendationMetrics {
  /**
   * Defines the cost per hour for the instance.
   *
   * @public
   */
  CostPerHour?: number | undefined;

  /**
   * Defines the cost per inference for the instance .
   *
   * @public
   */
  CostPerInference?: number | undefined;

  /**
   * The expected maximum number of requests per minute for the instance.
   *
   * @public
   */
  MaxInvocations?: number | undefined;

  /**
   * The expected model latency at maximum invocation per minute for the instance.
   *
   * @public
   */
  ModelLatency?: number | undefined;

  /**
   * The expected CPU utilization at maximum invocations per minute for the instance.
   *
   * `NaN` indicates that the value is not available.
   *
   * @public
   */
  CpuUtilization?: number | undefined;

  /**
   * The expected memory utilization at maximum invocations per minute for the instance.
   *
   * `NaN` indicates that the value is not available.
   *
   * @public
   */
  MemoryUtilization?: number | undefined;

  /**
   * The time it takes to launch new compute resources for a serverless endpoint. The time can vary depending on the model size, how long it takes to download the model, and the start-up time of the container.
   *
   * `NaN` indicates that the value is not available.
   *
   * @public
   */
  ModelSetupTime?: number | undefined;
}

/**
 * A list of environment parameters suggested by the Amazon SageMaker Inference Recommender.
 *
 * @public
 */
export interface EnvironmentParameter {
  /**
   * The environment key suggested by the Amazon SageMaker Inference Recommender.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value type suggested by the Amazon SageMaker Inference Recommender.
   *
   * @public
   */
  ValueType: string | undefined;

  /**
   * The value suggested by the Amazon SageMaker Inference Recommender.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Defines the model configuration. Includes the specification name and environment parameters.
 *
 * @public
 */
export interface ModelConfiguration {
  /**
   * The inference specification name in the model package version.
   *
   * @public
   */
  InferenceSpecificationName?: string | undefined;

  /**
   * Defines the environment parameters that includes key, value types, and values.
   *
   * @public
   */
  EnvironmentParameters?: EnvironmentParameter[] | undefined;

  /**
   * The name of the compilation job used to create the recommended model artifacts.
   *
   * @public
   */
  CompilationJobName?: string | undefined;
}

/**
 * A list of recommendations made by Amazon SageMaker Inference Recommender.
 *
 * @public
 */
export interface InferenceRecommendation {
  /**
   * The recommendation ID which uniquely identifies each recommendation.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * The metrics used to decide what recommendation to make.
   *
   * @public
   */
  Metrics?: RecommendationMetrics | undefined;

  /**
   * Defines the endpoint configuration parameters.
   *
   * @public
   */
  EndpointConfiguration: EndpointOutputConfiguration | undefined;

  /**
   * Defines the model configuration.
   *
   * @public
   */
  ModelConfiguration: ModelConfiguration | undefined;

  /**
   * A timestamp that shows when the benchmark completed.
   *
   * @public
   */
  InvocationEndTime?: Date | undefined;

  /**
   * A timestamp that shows when the benchmark started.
   *
   * @public
   */
  InvocationStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceRecommendationsJobResponse {
  /**
   * The name of the job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The job description that you provided when you initiated the job.
   *
   * @public
   */
  JobDescription?: string | undefined;

  /**
   * The job type that you provided when you initiated the job.
   *
   * @public
   */
  JobType: RecommendationJobType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  JobArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role you provided when you initiated the job.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The status of the job.
   *
   * @public
   */
  Status: RecommendationJobStatus | undefined;

  /**
   * A timestamp that shows when the job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp that shows when the job completed.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * A timestamp that shows when the job was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * If the job fails, provides information why the job failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Returns information about the versioned model package Amazon Resource Name (ARN), the traffic pattern, and endpoint configurations you provided when you initiated the job.
   *
   * @public
   */
  InputConfig: RecommendationJobInputConfig | undefined;

  /**
   * The stopping conditions that you provided when you initiated the job.
   *
   * @public
   */
  StoppingConditions?: RecommendationJobStoppingConditions | undefined;

  /**
   * The recommendations made by Inference Recommender.
   *
   * @public
   */
  InferenceRecommendations?: InferenceRecommendation[] | undefined;

  /**
   * The performance results from running an Inference Recommender job on an existing endpoint.
   *
   * @public
   */
  EndpointPerformances?: EndpointPerformance[] | undefined;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * The name of the job to describe.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The category of the job.
   *
   * @public
   */
  JobCategory: JobCategory | undefined;
}

/**
 * Represents a secondary status transition for a job. Jobs progress through multiple secondary statuses during execution. Each transition records the status, start time, optional end time, and an optional message with additional details.
 *
 * @public
 */
export interface JobSecondaryStatusTransition {
  /**
   * The secondary status of the job at this transition point.
   *
   * @public
   */
  Status: JobSecondaryStatus | undefined;

  /**
   * The date and time that the status transition started.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The date and time that the status transition ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * A detailed message about the status transition.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobResponse {
  /**
   * The name of the job.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  JobArn: string | undefined;

  /**
   * The ARN of the IAM role associated with the job.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The category of the job.
   *
   * @public
   */
  JobCategory: JobCategory | undefined;

  /**
   * The schema version used for the job configuration document.
   *
   * @public
   */
  JobConfigSchemaVersion: string | undefined;

  /**
   * The JSON configuration document for the job.
   *
   * @public
   */
  JobConfigDocument?: string | undefined;

  /**
   * The date and time that the job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the job was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The date and time that the job ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The current status of the job.
   *
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * The detailed secondary status of the job, providing more granular information about the job's progress. Secondary statuses may change between releases.
   *
   * @public
   */
  SecondaryStatus: JobSecondaryStatus | undefined;

  /**
   * A list of secondary status transitions for the job, with timestamps and optional status messages.
   *
   * @public
   */
  SecondaryStatusTransitions: JobSecondaryStatusTransition[] | undefined;

  /**
   * If the job failed, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The tags associated with the job.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeJobSchemaVersionRequest {
  /**
   * The category of the job schema to describe.
   *
   * @public
   */
  JobCategory: JobCategory | undefined;

  /**
   * The version of the schema to retrieve. If not specified, the latest version is returned.
   *
   * @public
   */
  JobConfigSchemaVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobSchemaVersionResponse {
  /**
   * The category of the job schema.
   *
   * @public
   */
  JobCategory: JobCategory | undefined;

  /**
   * The version of the schema.
   *
   * @public
   */
  JobConfigSchemaVersion: string | undefined;

  /**
   * The JSON schema document that defines the structure of the job configuration.
   *
   * @public
   */
  JobConfigSchema: string | undefined;
}

/**
 * @public
 */
export interface DescribeLabelingJobRequest {
  /**
   * The name of the labeling job to return information for.
   *
   * @public
   */
  LabelingJobName: string | undefined;
}

/**
 * Provides a breakdown of the number of objects labeled.
 *
 * @public
 */
export interface LabelCounters {
  /**
   * The total number of objects labeled.
   *
   * @public
   */
  TotalLabeled?: number | undefined;

  /**
   * The total number of objects labeled by a human worker.
   *
   * @public
   */
  HumanLabeled?: number | undefined;

  /**
   * The total number of objects labeled by automated data labeling.
   *
   * @public
   */
  MachineLabeled?: number | undefined;

  /**
   * The total number of objects that could not be labeled due to an error.
   *
   * @public
   */
  FailedNonRetryableError?: number | undefined;

  /**
   * The total number of objects not yet labeled.
   *
   * @public
   */
  Unlabeled?: number | undefined;
}

/**
 * Specifies the location of the output produced by the labeling job.
 *
 * @public
 */
export interface LabelingJobOutput {
  /**
   * The Amazon S3 bucket location of the manifest file for labeled data.
   *
   * @public
   */
  OutputDatasetS3Uri: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the most recent SageMaker model trained as part of automated data labeling.
   *
   * @public
   */
  FinalActiveLearningModelArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLabelingJobResponse {
  /**
   * The processing status of the labeling job.
   *
   * @public
   */
  LabelingJobStatus: LabelingJobStatus | undefined;

  /**
   * Provides a breakdown of the number of data objects labeled by humans, the number of objects labeled by machine, the number of objects than couldn't be labeled, and the total number of objects labeled.
   *
   * @public
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * If the job failed, the reason that it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The date and time that the labeling job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the labeling job was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * A unique identifier for work done as part of a labeling job.
   *
   * @public
   */
  JobReferenceCode: string | undefined;

  /**
   * The name assigned to the labeling job when it was created.
   *
   * @public
   */
  LabelingJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the labeling job.
   *
   * @public
   */
  LabelingJobArn: string | undefined;

  /**
   * The attribute used as the label in the output manifest file.
   *
   * @public
   */
  LabelAttributeName?: string | undefined;

  /**
   * Input configuration information for the labeling job, such as the Amazon S3 location of the data objects and the location of the manifest file that describes the data objects.
   *
   * @public
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * The location of the job's output data and the Amazon Web Services Key Management Service key ID for the key used to encrypt the output data, if any.
   *
   * @public
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) that SageMaker assumes to perform tasks on your behalf during data labeling.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The S3 location of the JSON file that defines the categories used to label data objects. Please note the following label-category limits:
   *
   * - Semantic segmentation labeling jobs using automated labeling: 20 labels
   * - Box bounding labeling jobs (all): 10 labels
   *
   * The file is a JSON structure in the following format:
   *
   * `\{`
   *
   * `"document-version": "2018-11-28"`
   *
   * `"labels": [`
   *
   * `\{`
   *
   * `"label": "label 1"`
   *
   * `\},`
   *
   * `\{`
   *
   * `"label": "label 2"`
   *
   * `\},`
   *
   * `...`
   *
   * `\{`
   *
   * `"label": "label n"`
   *
   * `\}`
   *
   * `]`
   *
   * `\}`
   *
   * @public
   */
  LabelCategoryConfigS3Uri?: string | undefined;

  /**
   * A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped.
   *
   * @public
   */
  StoppingConditions?: LabelingJobStoppingConditions | undefined;

  /**
   * Configuration information for automated data labeling.
   *
   * @public
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig | undefined;

  /**
   * Configuration information required for human workers to complete a labeling task.
   *
   * @public
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The location of the output produced by the labeling job.
   *
   * @public
   */
  LabelingJobOutput?: LabelingJobOutput | undefined;
}

/**
 * @public
 */
export interface DescribeLineageGroupRequest {
  /**
   * The name of the lineage group.
   *
   * @public
   */
  LineageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeLineageGroupResponse {
  /**
   * The name of the lineage group.
   *
   * @public
   */
  LineageGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lineage group.
   *
   * @public
   */
  LineageGroupArn?: string | undefined;

  /**
   * The display name of the lineage group.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the lineage group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The creation time of lineage group.
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
   * The last modified time of the lineage group.
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
export interface DescribeMlflowAppRequest {
  /**
   * The ARN of the MLflow App for which to get information.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DescribeMlflowAppResponse {
  /**
   * The ARN of the MLflow App.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the MLflow App.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The S3 URI of the general purpose bucket used as the MLflow App artifact store.
   *
   * @public
   */
  ArtifactStoreUri?: string | undefined;

  /**
   * The MLflow version used.
   *
   * @public
   */
  MlflowVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The ID of the Amazon Web Services KMS key used to encrypt the data at rest associated with the MLflow App. This field is absent if the MLflow App is not encrypted with a customer-managed key.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The current creation status of the described MLflow App.
   *
   * @public
   */
  Status?: MlflowAppStatus | undefined;

  /**
   * Whether automatic registration of new MLflow models to the SageMaker Model Registry is enabled.
   *
   * @public
   */
  ModelRegistrationMode?: ModelRegistrationMode | undefined;

  /**
   * Indicates whether this MLflow app is the default for the entire account.
   *
   * @public
   */
  AccountDefaultStatus?: AccountDefaultStatus | undefined;

  /**
   * List of SageMaker Domain IDs for which this MLflow App is the default.
   *
   * @public
   */
  DefaultDomainIdList?: string[] | undefined;

  /**
   * The timestamp when the MLflow App was created.
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
   * The timestamp when the MLflow App was last modified.
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
   * The day and time of the week when weekly maintenance occurs.
   *
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * Current maintenance status of the MLflow App.
   *
   * @public
   */
  MaintenanceStatus?: MaintenanceStatus | undefined;
}

/**
 * @public
 */
export interface DescribeMlflowTrackingServerRequest {
  /**
   * The name of the MLflow Tracking Server to describe.
   *
   * @public
   */
  TrackingServerName: string | undefined;
}

/**
 * @public
 */
export interface DescribeMlflowTrackingServerResponse {
  /**
   * The ARN of the described tracking server.
   *
   * @public
   */
  TrackingServerArn?: string | undefined;

  /**
   * The name of the described tracking server.
   *
   * @public
   */
  TrackingServerName?: string | undefined;

  /**
   * The S3 URI of the general purpose bucket used as the MLflow Tracking Server artifact store.
   *
   * @public
   */
  ArtifactStoreUri?: string | undefined;

  /**
   * The size of the described tracking server.
   *
   * @public
   */
  TrackingServerSize?: TrackingServerSize | undefined;

  /**
   * The MLflow version used for the described tracking server.
   *
   * @public
   */
  MlflowVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for an IAM role in your account that the described MLflow Tracking Server uses to access the artifact store in Amazon S3.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The current creation status of the described MLflow Tracking Server.
   *
   * @public
   */
  TrackingServerStatus?: TrackingServerStatus | undefined;

  /**
   * The current maintenance status of the described MLflow Tracking Server.
   *
   * @public
   */
  TrackingServerMaintenanceStatus?: TrackingServerMaintenanceStatus | undefined;

  /**
   * Whether the described MLflow Tracking Server is currently active.
   *
   * @public
   */
  IsActive?: IsTrackingServerActive | undefined;

  /**
   * The URL to connect to the MLflow user interface for the described tracking server.
   *
   * @public
   */
  TrackingServerUrl?: string | undefined;

  /**
   * The day and time of the week when weekly maintenance occurs on the described tracking server.
   *
   * @public
   */
  WeeklyMaintenanceWindowStart?: string | undefined;

  /**
   * Whether automatic registration of new MLflow models to the SageMaker Model Registry is enabled.
   *
   * @public
   */
  AutomaticModelRegistration?: boolean | undefined;

  /**
   * The timestamp of when the described MLflow Tracking Server was created.
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
   * The timestamp of when the described MLflow Tracking Server was last modified.
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
   * Expected Amazon Web Services account ID that owns the Amazon S3 bucket for artifact storage.
   *
   * @public
   */
  S3BucketOwnerAccountId?: string | undefined;

  /**
   * Whether Amazon S3 Bucket Ownership checks are enabled whenever the tracking server interacts with Amazon Amazon S3.
   *
   * @public
   */
  S3BucketOwnerVerification?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeModelInput {
  /**
   * The name of the model.
   *
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelOutput {
  /**
   * Name of the SageMaker model.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The location of the primary inference code, associated artifacts, and custom environment map that the inference code uses when it is deployed in production.
   *
   * @public
   */
  PrimaryContainer?: ContainerDefinition | undefined;

  /**
   * The containers in the inference pipeline.
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
   * The Amazon Resource Name (ARN) of the IAM role that you specified for the model.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * A [VpcConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html) object that specifies the VPC that this model has access to. For more information, see [Protect Endpoints by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html)
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * A timestamp that shows when the model was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model.
   *
   * @public
   */
  ModelArn: string | undefined;

  /**
   * If `True`, no inbound or outbound network calls can be made to or from the model container.
   *
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * A set of recommended deployment configurations for the model.
   *
   * @public
   */
  DeploymentRecommendation?: DeploymentRecommendation | undefined;
}

/**
 * @public
 */
export interface DescribeModelBiasJobDefinitionRequest {
  /**
   * The name of the model bias job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelBiasJobDefinitionResponse {
  /**
   * The Amazon Resource Name (ARN) of the model bias job.
   *
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * The name of the bias job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * The time at which the model bias job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

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
   * The Amazon Resource Name (ARN) of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3.
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
export interface DescribeModelCardRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the model card to describe.
   *
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * The version of the model card to describe. If a version is not provided, then the latest version of the model card is described.
   *
   * @public
   */
  ModelCardVersion?: number | undefined;

  /**
   * Specifies the level of model card data to include in the response. Use this parameter to call `DescribeModelCard` without requiring `kms:Decrypt` permission on the customer-managed Amazon Web Services KMS key.
   *
   * - `AllData`: Returns the full model card `Content`. This option requires `kms:Decrypt` permission on the customer-managed key, if one is associated with the model card. This is the default.
   * - `MetadataOnly`: Returns the model card with sanitized `Content` that includes only a small set of unencrypted metadata fields. This option does not require `kms:Decrypt` permission. For the list of fields preserved in the response, see `Content`.
   *
   * If you don't specify a value, SageMaker returns `AllData`.
   *
   * @public
   */
  IncludedData?: IncludedData | undefined;
}

/**
 * @public
 */
export interface DescribeModelCardResponse {
  /**
   * The Amazon Resource Name (ARN) of the model card.
   *
   * @public
   */
  ModelCardArn: string | undefined;

  /**
   * The name of the model card.
   *
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * The version of the model card.
   *
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * The content of the model card. Content is provided as a string in the [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema).
   *
   * When you set `IncludedData` to `MetadataOnly` in the request, SageMaker returns a sanitized version of `Content` that includes only the following JSON paths, when present in the model card:
   *
   * - `model_overview.model_id`
   * - `model_overview.model_name`
   * - `intended_uses.risk_rating`
   * - `model_package_details.model_package_group_name`
   * - `model_package_details.model_package_arn`
   *
   * All other fields are removed from `Content` when `IncludedData` is `MetadataOnly`, including model description, training details, evaluation details, business details, and additional information. To retrieve the complete `Content`, set `IncludedData` to `AllData` or omit the parameter.
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
   * The security configuration used to protect model card content.
   *
   * @public
   */
  SecurityConfig?: ModelCardSecurityConfig | undefined;

  /**
   * The date and time the model card was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy: UserContext | undefined;

  /**
   * The date and time the model card was last modified.
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
   * The processing status of model card deletion. The `ModelCardProcessingStatus` updates throughout the different deletion steps.
   *
   * - `DeletePending`: Model card deletion request received.
   * - `DeleteInProgress`: Model card deletion is in progress.
   * - `ContentDeleted`: Deleted model card content.
   * - `ExportJobsDeleted`: Deleted all export jobs associated with the model card.
   * - `DeleteCompleted`: Successfully deleted the model card.
   * - `DeleteFailed`: The model card failed to delete.
   *
   * @public
   */
  ModelCardProcessingStatus?: ModelCardProcessingStatus | undefined;
}

/**
 * @public
 */
export interface DescribeModelCardExportJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the model card export job to describe.
   *
   * @public
   */
  ModelCardExportJobArn: string | undefined;
}

/**
 * The artifacts of the model card export job.
 *
 * @public
 */
export interface ModelCardExportArtifacts {
  /**
   * The Amazon S3 URI of the exported model artifacts.
   *
   * @public
   */
  S3ExportArtifacts: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelCardExportJobResponse {
  /**
   * The name of the model card export job to describe.
   *
   * @public
   */
  ModelCardExportJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model card export job.
   *
   * @public
   */
  ModelCardExportJobArn: string | undefined;

  /**
   * The completion status of the model card export job.
   *
   * - `InProgress`: The model card export job is in progress.
   * - `Completed`: The model card export job is complete.
   * - `Failed`: The model card export job failed. To see the reason for the failure, see the `FailureReason` field in the response to a `DescribeModelCardExportJob` call.
   *
   * @public
   */
  Status: ModelCardExportJobStatus | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the model card that the model export job exports.
   *
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * The version of the model card that the model export job exports.
   *
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * The export output details for the model card.
   *
   * @public
   */
  OutputConfig: ModelCardExportOutputConfig | undefined;

  /**
   * The date and time that the model export job was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time that the model export job was last modified.
   *
   * @public
   */
  LastModifiedAt: Date | undefined;

  /**
   * The failure reason if the model export job fails.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The exported model card artifacts.
   *
   * @public
   */
  ExportArtifacts?: ModelCardExportArtifacts | undefined;
}

/**
 * @public
 */
export interface DescribeModelExplainabilityJobDefinitionRequest {
  /**
   * The name of the model explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelExplainabilityJobDefinitionResponse {
  /**
   * The Amazon Resource Name (ARN) of the model explainability job.
   *
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * The name of the explainability job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * The time at which the model explainability job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

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
   * The Amazon Resource Name (ARN) of the IAM role that has read permission to the input data location and write permission to the output data location in Amazon S3.
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
export interface DescribeModelPackageInput {
  /**
   * The name or Amazon Resource Name (ARN) of the model package to describe.
   *
   * When you specify a name, the name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).
   *
   * @public
   */
  ModelPackageName: string | undefined;

  /**
   * Specifies the level of model package data to include in the response. Use this parameter to call `DescribeModelPackage` on a model package that has an associated model card without requiring `kms:Decrypt` permission on the customer-managed KMS key associated with the embedded model card.
   *
   * - `AllData`: Returns the full model package response, including the unredacted `ModelCard.ModelCardContent`. This option requires `kms:Decrypt` permission on the customer-managed key, if one is associated with the embedded model card. This is the default.
   * - `MetadataOnly`: Returns the full model package response, but with the embedded `ModelCard.ModelCardContent` sanitized to include only a small set of unencrypted metadata fields. This option does not require `kms:Decrypt` permission. All other top-level response fields, including `InferenceSpecification`, `ModelMetrics`, `DriftCheckBaselines`, and `SecurityConfig`, are returned unchanged. For the list of fields preserved within `ModelCardContent`, see [ModelCard](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeModelPackage.html#sagemaker-DescribeModelPackage-response-ModelCard).
   *
   * If you don't specify a value, SageMaker returns `AllData`.
   *
   * @public
   */
  IncludedData?: IncludedData | undefined;
}

/**
 * Represents the overall status of a model package.
 *
 * @public
 */
export interface ModelPackageStatusItem {
  /**
   * The name of the model package for which the overall status is being reported.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current status.
   *
   * @public
   */
  Status: DetailedModelPackageStatus | undefined;

  /**
   * if the overall status is `Failed`, the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * Specifies the validation and image scan statuses of the model package.
 *
 * @public
 */
export interface ModelPackageStatusDetails {
  /**
   * The validation status of the model package.
   *
   * @public
   */
  ValidationStatuses: ModelPackageStatusItem[] | undefined;

  /**
   * The status of the scan of the Docker image container for the model package.
   *
   * @public
   */
  ImageScanStatuses?: ModelPackageStatusItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeModelPackageOutput {
  /**
   * The name of the model package being described.
   *
   * @public
   */
  ModelPackageName: string | undefined;

  /**
   * If the model is a versioned model, the name of the model group that the versioned model belongs to.
   *
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * The version of the model package.
   *
   * @public
   */
  ModelPackageVersion?: number | undefined;

  /**
   * The package registration type of the model package output.
   *
   * @public
   */
  ModelPackageRegistrationType?: ModelPackageRegistrationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model package.
   *
   * @public
   */
  ModelPackageArn: string | undefined;

  /**
   * A brief summary of the model package.
   *
   * @public
   */
  ModelPackageDescription?: string | undefined;

  /**
   * A timestamp specifying when the model package was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Details about inference jobs that you can run with models based on this model package.
   *
   * @public
   */
  InferenceSpecification?: InferenceSpecification | undefined;

  /**
   * Details about the algorithm that was used to create the model package.
   *
   * @public
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification | undefined;

  /**
   * Configurations for one or more transform jobs that SageMaker runs to test the model package.
   *
   * @public
   */
  ValidationSpecification?: ModelPackageValidationSpecification | undefined;

  /**
   * The current status of the model package.
   *
   * @public
   */
  ModelPackageStatus: ModelPackageStatus | undefined;

  /**
   * Details about the current status of the model package.
   *
   * @public
   */
  ModelPackageStatusDetails: ModelPackageStatusDetails | undefined;

  /**
   * Whether the model package is certified for listing on Amazon Web Services Marketplace.
   *
   * @public
   */
  CertifyForMarketplace?: boolean | undefined;

  /**
   * The approval status of the model package.
   *
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   *
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * Metrics for the model.
   *
   * @public
   */
  ModelMetrics?: ModelMetrics | undefined;

  /**
   * The last time that the model package was modified.
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
   * A description provided for the model approval.
   *
   * @public
   */
  ApprovalDescription?: string | undefined;

  /**
   * The machine learning domain of the model package you specified. Common machine learning domains include computer vision and natural language processing.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The machine learning task you specified that your model package accomplishes. Common machine learning tasks include object detection and image classification.
   *
   * @public
   */
  Task?: string | undefined;

  /**
   * The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored. This path points to a single gzip compressed tar archive (.tar.gz suffix).
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
   * The URI of the source for the model package.
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
   * When you set `IncludedData` to `MetadataOnly` in the request, `ModelCardStatus` is preserved and `ModelCardContent` is sanitized to include only the following JSON paths, when present in the model card:
   *
   * - `model_overview.model_id`
   * - `model_overview.model_name`
   * - `intended_uses.risk_rating`
   * - `model_package_details.model_package_group_name`
   * - `model_package_details.model_package_arn`
   *
   * Because the `ModelPackageModelCard` schema does not include `model_package_details` and limits `model_overview` to `model_creator` and `model_artifact`, the sanitized `ModelCardContent` for a model package typically contains only `intended_uses.risk_rating` if it was provided when the model card was created. To retrieve the complete `ModelCardContent`, set `IncludedData` to `AllData` or omit the parameter.
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
export interface DescribeModelPackageGroupInput {
  /**
   * The name of the model group to describe.
   *
   * @public
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelPackageGroupOutput {
  /**
   * The name of the model group.
   *
   * @public
   */
  ModelPackageGroupName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model group.
   *
   * @public
   */
  ModelPackageGroupArn: string | undefined;

  /**
   * A description of the model group.
   *
   * @public
   */
  ModelPackageGroupDescription?: string | undefined;

  /**
   * The time that the model group was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy: UserContext | undefined;

  /**
   * The status of the model group.
   *
   * @public
   */
  ModelPackageGroupStatus: ModelPackageGroupStatus | undefined;

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
export interface DescribeModelQualityJobDefinitionRequest {
  /**
   * The name of the model quality job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  JobDefinitionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelQualityJobDefinitionResponse {
  /**
   * The Amazon Resource Name (ARN) of the model quality job.
   *
   * @public
   */
  JobDefinitionArn: string | undefined;

  /**
   * The name of the quality job definition. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  JobDefinitionName: string | undefined;

  /**
   * The time at which the model quality job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The baseline configuration for a model quality job.
   *
   * @public
   */
  ModelQualityBaselineConfig?: ModelQualityBaselineConfig | undefined;

  /**
   * Configures the model quality job to run a specified Docker container image.
   *
   * @public
   */
  ModelQualityAppSpecification: ModelQualityAppSpecification | undefined;

  /**
   * Inputs for the model quality job.
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
   * Networking options for a model quality job.
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
export interface DescribeMonitoringScheduleRequest {
  /**
   * Name of a previously created monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * Summary of information about the last monitoring job to run.
 *
 * @public
 */
export interface MonitoringExecutionSummary {
  /**
   * The name of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * The time the monitoring job was scheduled.
   *
   * @public
   */
  ScheduledTime: Date | undefined;

  /**
   * The time at which the monitoring job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp that indicates the last time the monitoring job was modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The status of the monitoring job.
   *
   * @public
   */
  MonitoringExecutionStatus: ExecutionStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the monitoring job.
   *
   * @public
   */
  ProcessingJobArn?: string | undefined;

  /**
   * The name of the endpoint used to run the monitoring job.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * Contains the reason a monitoring job failed, if it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The name of the monitoring job.
   *
   * @public
   */
  MonitoringJobDefinitionName?: string | undefined;

  /**
   * The type of the monitoring job.
   *
   * @public
   */
  MonitoringType?: MonitoringType | undefined;
}

/**
 * @public
 */
export interface DescribeMonitoringScheduleResponse {
  /**
   * The Amazon Resource Name (ARN) of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * Name of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * The status of an monitoring job.
   *
   * @public
   */
  MonitoringScheduleStatus: ScheduleStatus | undefined;

  /**
   * The type of the monitoring job that this schedule runs. This is one of the following values.
   *
   * - `DATA_QUALITY` - The schedule is for a data quality monitoring job.
   * - `MODEL_QUALITY` - The schedule is for a model quality monitoring job.
   * - `MODEL_BIAS` - The schedule is for a bias monitoring job.
   * - `MODEL_EXPLAINABILITY` - The schedule is for an explainability monitoring job.
   *
   * @public
   */
  MonitoringType?: MonitoringType | undefined;

  /**
   * A string, up to one KB in size, that contains the reason a monitoring job failed, if it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The time at which the monitoring job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The time at which the monitoring job was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The configuration object that specifies the monitoring schedule and defines the monitoring job.
   *
   * @public
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * The name of the endpoint for the monitoring job.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * Describes metadata on the last execution to run, if there was one.
   *
   * @public
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceInput {
  /**
   * The name of the notebook instance that you want information about.
   *
   * @public
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceOutput {
  /**
   * The Amazon Resource Name (ARN) of the notebook instance.
   *
   * @public
   */
  NotebookInstanceArn?: string | undefined;

  /**
   * The name of the SageMaker AI notebook instance.
   *
   * @public
   */
  NotebookInstanceName?: string | undefined;

  /**
   * The status of the notebook instance.
   *
   * @public
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | undefined;

  /**
   * If status is `Failed`, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The URL that you use to connect to the Jupyter notebook that is running in your notebook instance.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The type of ML compute instance running on the notebook instance.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * The IP address type configured for the notebook instance. Returns `ipv4` for IPv4-only connectivity or `dualstack` for both IPv4 and IPv6 connectivity.
   *
   * @public
   */
  IpAddressType?: IPAddressType | undefined;

  /**
   * The ID of the VPC subnet.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The IDs of the VPC security groups.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The Amazon Web Services KMS key ID SageMaker AI uses to encrypt data when storing it on the ML storage volume attached to the instance.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The network interface IDs that SageMaker AI created at the time of creating the instance.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * A timestamp. Use this parameter to retrieve the time when the notebook instance was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * A timestamp. Use this parameter to return the time when the notebook instance was created
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Returns the name of a notebook instance lifecycle configuration.
   *
   * For information about notebook instance lifestyle configurations, see [Step 2.1: (Optional) Customize a Notebook Instance](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html)
   *
   * @public
   */
  NotebookInstanceLifecycleConfigName?: string | undefined;

  /**
   * Describes whether SageMaker AI provides internet access to the notebook instance. If this value is set to *Disabled*, the notebook instance does not have internet access, and cannot connect to SageMaker AI training and endpoint services.
   *
   * For more information, see [Notebook Instances Are Internet-Enabled by Default](https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access).
   *
   * @public
   */
  DirectInternetAccess?: DirectInternetAccess | undefined;

  /**
   * The size, in GB, of the ML storage volume attached to the notebook instance.
   *
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * This parameter is no longer supported. Elastic Inference (EI) is no longer available.
   *
   * This parameter was used to specify a list of the EI instance types associated with this notebook instance.
   *
   * @public
   */
  AcceleratorTypes?: NotebookInstanceAcceleratorType[] | undefined;

  /**
   * The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in [Amazon Web Services CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository. For more information, see [Associating Git Repositories with SageMaker AI Notebook Instances](https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html).
   *
   * @public
   */
  DefaultCodeRepository?: string | undefined;

  /**
   * An array of up to three Git repositories associated with the notebook instance. These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in [Amazon Web Services CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance. For more information, see [Associating Git Repositories with SageMaker AI Notebook Instances](https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html).
   *
   * @public
   */
  AdditionalCodeRepositories?: string[] | undefined;

  /**
   * Whether root access is enabled or disabled for users of the notebook instance.
   *
   * > **Note:** Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.
   *
   * @public
   */
  RootAccess?: RootAccess | undefined;

  /**
   * The platform identifier of the notebook instance runtime environment.
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
export interface DescribeNotebookInstanceLifecycleConfigInput {
  /**
   * The name of the lifecycle configuration to describe.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookInstanceLifecycleConfigOutput {
  /**
   * The Amazon Resource Name (ARN) of the lifecycle configuration.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigArn?: string | undefined;

  /**
   * The name of the lifecycle configuration.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigName?: string | undefined;

  /**
   * The shell script that runs only once, when you create a notebook instance.
   *
   * @public
   */
  OnCreate?: NotebookInstanceLifecycleHook[] | undefined;

  /**
   * The shell script that runs every time you start a notebook instance, including when you create the notebook instance.
   *
   * @public
   */
  OnStart?: NotebookInstanceLifecycleHook[] | undefined;

  /**
   * A timestamp that tells when the lifecycle configuration was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * A timestamp that tells when the lifecycle configuration was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeOptimizationJobRequest {
  /**
   * The name that you assigned to the optimization job.
   *
   * @public
   */
  OptimizationJobName: string | undefined;
}

/**
 * Output values produced by an optimization job.
 *
 * @public
 */
export interface OptimizationOutput {
  /**
   * The image that SageMaker recommends that you use to host the optimized model that you created with an optimization job.
   *
   * @public
   */
  RecommendedInferenceImage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOptimizationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the optimization job.
   *
   * @public
   */
  OptimizationJobArn: string | undefined;

  /**
   * The current status of the optimization job.
   *
   * @public
   */
  OptimizationJobStatus: OptimizationJobStatus | undefined;

  /**
   * The time when the optimization job started.
   *
   * @public
   */
  OptimizationStartTime?: Date | undefined;

  /**
   * The time when the optimization job finished processing.
   *
   * @public
   */
  OptimizationEndTime?: Date | undefined;

  /**
   * The time when you created the optimization job.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The time when the optimization job was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * If the optimization job status is `FAILED`, the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The name that you assigned to the optimization job.
   *
   * @public
   */
  OptimizationJobName: string | undefined;

  /**
   * The location of the source model to optimize with an optimization job.
   *
   * @public
   */
  ModelSource: OptimizationJobModelSource | undefined;

  /**
   * The environment variables to set in the model container.
   *
   * @public
   */
  OptimizationEnvironment?: Record<string, string> | undefined;

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
   * Output values produced by an optimization job.
   *
   * @public
   */
  OptimizationOutput?: OptimizationOutput | undefined;

  /**
   * The ARN of the IAM role that you assigned to the optimization job.
   *
   * @public
   */
  RoleArn: string | undefined;

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
   * A VPC in Amazon VPC that your optimized model has access to.
   *
   * @public
   */
  VpcConfig?: OptimizationVpcConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training plan associated with this optimization job. This field appears only when you specified a training plan when you created the job. Optimization jobs that use on-demand capacity don't return this field.
   *
   * @public
   */
  TrainingPlanArns?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribePartnerAppRequest {
  /**
   * The ARN of the SageMaker Partner AI App to describe.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * When set to `TRUE`, the response includes available upgrade information for the SageMaker Partner AI App. Default is `FALSE`.
   *
   * @public
   */
  IncludeAvailableUpgrade?: boolean | undefined;
}

/**
 * This is an error field object that contains the error code and the reason for an operation failure.
 *
 * @public
 */
export interface ErrorInfo {
  /**
   * The error code for an invalid or failed operation.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The failure reason for the operation.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * Contains the Amazon Web Services IAM Identity Center configuration of a SageMaker Partner AI App that uses `IDC` authorization.
 *
 * @public
 */
export interface IdcConfigOutput {
  /**
   * The ARN of the Amazon Web Services IAM Identity Center instance that the SageMaker Partner AI App uses to authenticate users.
   *
   * @public
   */
  InstanceArn: string | undefined;

  /**
   * The ARN of the Amazon Web Services IAM Identity Center application that SageMaker creates for the SageMaker Partner AI App.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribePartnerAppResponse {
  /**
   * The ARN of the SageMaker Partner AI App that was described.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the SageMaker Partner AI App.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of SageMaker Partner AI App. Must be one of the following: `lakera-guard`, `comet`, `deepchecks-llm-evaluation`, or `fiddler`.
   *
   * @public
   */
  Type?: PartnerAppType | undefined;

  /**
   * The status of the SageMaker Partner AI App.
   *
   * - Creating: SageMaker AI is creating the partner AI app. The partner AI app is not available during creation.
   * - Updating: SageMaker AI is updating the partner AI app. The partner AI app is not available when updating.
   * - Deleting: SageMaker AI is deleting the partner AI app. The partner AI app is not available during deletion.
   * - Available: The partner AI app is provisioned and accessible.
   * - Failed: The partner AI app is in a failed state and isn't available. SageMaker AI is investigating the issue. For further guidance, contact Amazon Web Services Support.
   * - UpdateFailed: The partner AI app couldn't be updated but is available.
   * - Deleted: The partner AI app is permanently deleted and not available.
   *
   * @public
   */
  Status?: PartnerAppStatus | undefined;

  /**
   * The time that the SageMaker Partner AI App was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time that the SageMaker Partner AI App was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The ARN of the IAM role associated with the SageMaker Partner AI App.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * The Amazon Web Services KMS customer managed key used to encrypt the data at rest associated with SageMaker Partner AI Apps.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * The URL of the SageMaker Partner AI App that the Application SDK uses to support in-app calls for the user.
   *
   * @public
   */
  BaseUrl?: string | undefined;

  /**
   * Maintenance configuration settings for the SageMaker Partner AI App.
   *
   * @public
   */
  MaintenanceConfig?: PartnerAppMaintenanceConfig | undefined;

  /**
   * The instance type and size of the cluster attached to the SageMaker Partner AI App.
   *
   * @public
   */
  Tier?: string | undefined;

  /**
   * The version of the SageMaker Partner AI App.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * Configuration settings for the SageMaker Partner AI App.
   *
   * @public
   */
  ApplicationConfig?: PartnerAppConfig | undefined;

  /**
   * The authorization type that users use to access the SageMaker Partner AI App. Valid values:
   *
   * - `IAM`: Users access the SageMaker Partner AI App with their Amazon Web Services IAM identity.
   * - `IDC`: Users access the SageMaker Partner AI App with their Amazon Web Services IAM Identity Center identity.
   *
   * @public
   */
  AuthType?: PartnerAppAuthType | undefined;

  /**
   * When set to `TRUE`, the SageMaker Partner AI App sets the Amazon Web Services IAM session name or the authenticated IAM user as the identity of the SageMaker Partner AI App user.
   *
   * @public
   */
  EnableIamSessionBasedIdentity?: boolean | undefined;

  /**
   * This is an error field object that contains the error code and the reason for an operation failure.
   *
   * @public
   */
  Error?: ErrorInfo | undefined;

  /**
   * Indicates whether the SageMaker Partner AI App is configured for automatic minor version upgrades during scheduled maintenance windows.
   *
   * @public
   */
  EnableAutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The end-of-life date for the current version of the SageMaker Partner AI App.
   *
   * @public
   */
  CurrentVersionEolDate?: Date | undefined;

  /**
   * A map of available minor version upgrades for the SageMaker Partner AI App. The key is the semantic version number, and the value is a list of release notes for that version. A null value indicates no upgrades are available.
   *
   * @public
   */
  AvailableUpgrade?: AvailableUpgrade | undefined;

  /**
   * Contains the Amazon Web Services IAM Identity Center configuration for the SageMaker Partner AI App, including the Identity Center instance and the Identity Center application that SageMaker creates for the app. The service returns this field for apps that use `IDC` authorization.
   *
   * @public
   */
  IdcConfig?: IdcConfigOutput | undefined;
}

/**
 * @public
 */
export interface DescribePipelineRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the pipeline to describe.
   *
   * @public
   */
  PipelineName: string | undefined;

  /**
   * The ID of the pipeline version to describe.
   *
   * @public
   */
  PipelineVersionId?: number | undefined;
}

/**
 * @public
 */
export interface DescribePipelineResponse {
  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * The name of the pipeline.
   *
   * @public
   */
  PipelineName?: string | undefined;

  /**
   * The display name of the pipeline.
   *
   * @public
   */
  PipelineDisplayName?: string | undefined;

  /**
   * The JSON pipeline definition.
   *
   * @public
   */
  PipelineDefinition?: string | undefined;

  /**
   * The description of the pipeline.
   *
   * @public
   */
  PipelineDescription?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that the pipeline uses to execute.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The status of the pipeline execution.
   *
   * @public
   */
  PipelineStatus?: PipelineStatus | undefined;

  /**
   * The time when the pipeline was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time when the pipeline was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The time when the pipeline was last run.
   *
   * @public
   */
  LastRunTime?: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * Lists the parallelism configuration applied to the pipeline.
   *
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;

  /**
   * The display name of the pipeline version.
   *
   * @public
   */
  PipelineVersionDisplayName?: string | undefined;

  /**
   * The description of the pipeline version.
   *
   * @public
   */
  PipelineVersionDescription?: string | undefined;
}

/**
 * @public
 */
export interface DescribePipelineDefinitionForExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn: string | undefined;
}

/**
 * @public
 */
export interface DescribePipelineDefinitionForExecutionResponse {
  /**
   * The JSON pipeline definition.
   *
   * @public
   */
  PipelineDefinition?: string | undefined;

  /**
   * The time when the pipeline was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePipelineExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn: string | undefined;
}

/**
 * The MLflow configuration.
 *
 * @public
 */
export interface MLflowConfiguration {
  /**
   * The Amazon Resource Name (ARN) of MLflow configuration resource.
   *
   * @public
   */
  MlflowResourceArn?: string | undefined;

  /**
   * The name of the MLflow configuration.
   *
   * @public
   */
  MlflowExperimentName?: string | undefined;
}

/**
 * Specifies the names of the experiment and trial created by a pipeline.
 *
 * @public
 */
export interface PipelineExperimentConfig {
  /**
   * The name of the experiment.
   *
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * The name of the trial.
   *
   * @public
   */
  TrialName?: string | undefined;
}

/**
 * A step selected to run in selective execution mode.
 *
 * @public
 */
export interface SelectedStep {
  /**
   * The name of the pipeline step.
   *
   * @public
   */
  StepName: string | undefined;
}

/**
 * The selective execution configuration applied to the pipeline run.
 *
 * @public
 */
export interface SelectiveExecutionConfig {
  /**
   * The ARN from a reference execution of the current pipeline. Used to copy input collaterals needed for the selected steps to run. The execution status of the pipeline can be either `Failed` or `Success`.
   *
   * This field is required if the steps you specify for `SelectedSteps` depend on output collaterals from any non-specified pipeline steps. For more information, see [Selective Execution for Pipeline Steps](https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-selective-ex.html).
   *
   * @public
   */
  SourcePipelineExecutionArn?: string | undefined;

  /**
   * A list of pipeline steps to run. All step(s) in all path(s) between two selected steps should be included.
   *
   * @public
   */
  SelectedSteps: SelectedStep[] | undefined;
}

/**
 * @public
 */
export interface DescribePipelineExecutionResponse {
  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn?: string | undefined;

  /**
   * The display name of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionDisplayName?: string | undefined;

  /**
   * The status of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionStatus?: PipelineExecutionStatus | undefined;

  /**
   * The description of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionDescription?: string | undefined;

  /**
   * Specifies the names of the experiment and trial created by a pipeline.
   *
   * @public
   */
  PipelineExperimentConfig?: PipelineExperimentConfig | undefined;

  /**
   * If the execution failed, a message describing why.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The time when the pipeline execution was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time when the pipeline execution was modified last.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * The parallelism configuration applied to the pipeline.
   *
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;

  /**
   * The selective execution configuration applied to the pipeline run.
   *
   * @public
   */
  SelectiveExecutionConfig?: SelectiveExecutionConfig | undefined;

  /**
   * The ID of the pipeline version.
   *
   * @public
   */
  PipelineVersionId?: number | undefined;

  /**
   * The MLflow configuration of the pipeline execution.
   *
   * @public
   */
  MLflowConfig?: MLflowConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeProcessingJobRequest {
  /**
   * The name of the processing job. The name must be unique within an Amazon Web Services Region in the Amazon Web Services account.
   *
   * @public
   */
  ProcessingJobName: string | undefined;
}

/**
 * @public
 */
export interface DescribeProcessingJobResponse {
  /**
   * The inputs for a processing job.
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
   * Configures the processing job to run a specified container image.
   *
   * @public
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * The environment variables set in the Docker container.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * Networking options for a processing job.
   *
   * @public
   */
  NetworkConfig?: NetworkConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The configuration information used to create an experiment.
   *
   * @public
   */
  ExperimentConfig?: ExperimentConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the processing job.
   *
   * @public
   */
  ProcessingJobArn: string | undefined;

  /**
   * Provides the status of a processing job.
   *
   * @public
   */
  ProcessingJobStatus: ProcessingJobStatus | undefined;

  /**
   * An optional string, up to one KB in size, that contains metadata from the processing container when the processing job exits.
   *
   * @public
   */
  ExitMessage?: string | undefined;

  /**
   * A string, up to one KB in size, that contains the reason a processing job failed, if it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The time at which the processing job completed.
   *
   * @public
   */
  ProcessingEndTime?: Date | undefined;

  /**
   * The time at which the processing job started.
   *
   * @public
   */
  ProcessingStartTime?: Date | undefined;

  /**
   * The time at which the processing job was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The time at which the processing job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The ARN of a monitoring schedule for an endpoint associated with this processing job.
   *
   * @public
   */
  MonitoringScheduleArn?: string | undefined;

  /**
   * The ARN of an AutoML job associated with this processing job.
   *
   * @public
   */
  AutoMLJobArn?: string | undefined;

  /**
   * The ARN of a training job associated with this processing job.
   *
   * @public
   */
  TrainingJobArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProjectInput {
  /**
   * The name of the project to describe.
   *
   * @public
   */
  ProjectName: string | undefined;
}

/**
 * Details of a provisioned service catalog product. For information about service catalog, see [What is Amazon Web Services Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
 *
 * @public
 */
export interface ServiceCatalogProvisionedProductDetails {
  /**
   * The ID of the provisioned product.
   *
   * @public
   */
  ProvisionedProductId?: string | undefined;

  /**
   * The current status of the product.
   *
   * - `AVAILABLE` - Stable state, ready to perform any operation. The most recent operation succeeded and completed.
   * - `UNDER_CHANGE` - Transitive state. Operations performed might not have valid results. Wait for an AVAILABLE status before performing operations.
   * - `TAINTED` - Stable state, ready to perform any operation. The stack has completed the requested operation but is not exactly what was requested. For example, a request to update to a new version failed and the stack rolled back to the current version.
   * - `ERROR` - An unexpected error occurred. The provisioned product exists but the stack is not running. For example, CloudFormation received a parameter value that was not valid and could not launch the stack.
   * - `PLAN_IN_PROGRESS` - Transitive state. The plan operations were performed to provision a new product, but resources have not yet been created. After reviewing the list of resources to be created, execute the plan. Wait for an AVAILABLE status before performing operations.
   *
   * @public
   */
  ProvisionedProductStatusMessage?: string | undefined;
}

/**
 * Details about a template provider configuration and associated provisioning information.
 *
 * @public
 */
export interface TemplateProviderDetail {
  /**
   * Details about a CloudFormation template provider configuration and associated provisioning information.
   *
   * @public
   */
  CfnTemplateProviderDetail?: CfnTemplateProviderDetail | undefined;
}

/**
 * @public
 */
export interface DescribeProjectOutput {
  /**
   * The Amazon Resource Name (ARN) of the project.
   *
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * The name of the project.
   *
   * @public
   */
  ProjectName: string | undefined;

  /**
   * The ID of the project.
   *
   * @public
   */
  ProjectId: string | undefined;

  /**
   * The description of the project.
   *
   * @public
   */
  ProjectDescription?: string | undefined;

  /**
   * Information used to provision a service catalog product. For information, see [What is Amazon Web Services Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
   *
   * @public
   */
  ServiceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails | undefined;

  /**
   * Information about a provisioned service catalog product.
   *
   * @public
   */
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails | undefined;

  /**
   * The status of the project.
   *
   * @public
   */
  ProjectStatus: ProjectStatus | undefined;

  /**
   * An array of template providers associated with the project.
   *
   * @public
   */
  TemplateProviderDetails?: TemplateProviderDetail[] | undefined;

  /**
   * Information about the user who created or modified a SageMaker resource.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * The time when the project was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The timestamp when project was last modified.
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
export interface DescribeReservedCapacityRequest {
  /**
   * ARN of the reserved capacity to describe.
   *
   * @public
   */
  ReservedCapacityArn: string | undefined;
}

/**
 * A summary of UltraServer resources and their current status.
 *
 * @public
 */
export interface UltraServerSummary {
  /**
   * The type of UltraServer, such as ml.u-p6e-gb200x72.
   *
   * @public
   */
  UltraServerType: string | undefined;

  /**
   * The Amazon EC2 instance type used in the UltraServer.
   *
   * @public
   */
  InstanceType: ReservedCapacityInstanceType | undefined;

  /**
   * The number of UltraServers of this type.
   *
   * @public
   */
  UltraServerCount?: number | undefined;

  /**
   * The number of available spare instances in the UltraServers.
   *
   * @public
   */
  AvailableSpareInstanceCount?: number | undefined;

  /**
   * The total number of instances across all UltraServers of this type that are currently in an unhealthy state.
   *
   * @public
   */
  UnhealthyInstanceCount?: number | undefined;
}

/**
 * @public
 */
export interface DescribeReservedCapacityResponse {
  /**
   * ARN of the reserved capacity.
   *
   * @public
   */
  ReservedCapacityArn: string | undefined;

  /**
   * The type of reserved capacity.
   *
   * @public
   */
  ReservedCapacityType?: ReservedCapacityType | undefined;

  /**
   * The current status of the reserved capacity.
   *
   * @public
   */
  Status?: ReservedCapacityStatus | undefined;

  /**
   * The Availability Zone where the reserved capacity is provisioned.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The total duration of the reserved capacity in hours.
   *
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * The number of minutes for the duration of the reserved capacity. For example, if a reserved capacity starts at 08:55 and ends at 11:30, the minutes field would be 35.
   *
   * @public
   */
  DurationMinutes?: number | undefined;

  /**
   * The timestamp when the reserved capacity becomes active.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp when the reserved capacity expires.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The Amazon EC2 instance type used in the reserved capacity.
   *
   * @public
   */
  InstanceType: ReservedCapacityInstanceType | undefined;

  /**
   * The total number of instances allocated to this reserved capacity.
   *
   * @public
   */
  TotalInstanceCount: number | undefined;

  /**
   * The number of instances currently available for use in this reserved capacity.
   *
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * The number of instances currently in use from this reserved capacity.
   *
   * @public
   */
  InUseInstanceCount?: number | undefined;

  /**
   * A summary of the UltraServer associated with this reserved capacity.
   *
   * @public
   */
  UltraServerSummary?: UltraServerSummary | undefined;
}

/**
 * @public
 */
export interface DescribeSpaceRequest {
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
export interface DescribeSpaceResponse {
  /**
   * The ID of the associated domain.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The space's Amazon Resource Name (ARN).
   *
   * @public
   */
  SpaceArn?: string | undefined;

  /**
   * The name of the space.
   *
   * @public
   */
  SpaceName?: string | undefined;

  /**
   * The ID of the space's profile in the Amazon EFS volume.
   *
   * @public
   */
  HomeEfsFileSystemUid?: string | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: SpaceStatus | undefined;

  /**
   * The last modified time.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The creation time.
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
   * A collection of space settings.
   *
   * @public
   */
  SpaceSettings?: SpaceSettings | undefined;

  /**
   * The collection of ownership settings for a space.
   *
   * @public
   */
  OwnershipSettings?: OwnershipSettings | undefined;

  /**
   * The collection of space sharing settings for a space.
   *
   * @public
   */
  SpaceSharingSettings?: SpaceSharingSettings | undefined;

  /**
   * The name of the space that appears in the Amazon SageMaker Studio UI.
   *
   * @public
   */
  SpaceDisplayName?: string | undefined;

  /**
   * Returns the URL of the space. If the space is created with Amazon Web Services IAM Identity Center (Successor to Amazon Web Services Single Sign-On) authentication, users can navigate to the URL after appending the respective redirect parameter for the application type to be federated through Amazon Web Services IAM Identity Center.
   *
   * The following application types are supported:
   *
   * - Studio Classic: `&redirect=JupyterServer`
   * - JupyterLab: `&redirect=JupyterLab`
   * - Code Editor, based on Code-OSS, Visual Studio Code - Open Source: `&redirect=CodeEditor`
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStudioLifecycleConfigRequest {
  /**
   * The name of the Amazon SageMaker AI Studio Lifecycle Configuration to describe.
   *
   * @public
   */
  StudioLifecycleConfigName: string | undefined;
}

/**
 * @public
 */
export interface DescribeStudioLifecycleConfigResponse {
  /**
   * The ARN of the Lifecycle Configuration to describe.
   *
   * @public
   */
  StudioLifecycleConfigArn?: string | undefined;

  /**
   * The name of the Amazon SageMaker AI Studio Lifecycle Configuration that is described.
   *
   * @public
   */
  StudioLifecycleConfigName?: string | undefined;

  /**
   * The creation time of the Amazon SageMaker AI Studio Lifecycle Configuration.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * This value is equivalent to CreationTime because Amazon SageMaker AI Studio Lifecycle Configurations are immutable.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The content of your Amazon SageMaker AI Studio Lifecycle Configuration script.
   *
   * @public
   */
  StudioLifecycleConfigContent?: string | undefined;

  /**
   * The App type that the Lifecycle Configuration is attached to.
   *
   * @public
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType | undefined;
}

/**
 * @public
 */
export interface DescribeSubscribedWorkteamRequest {
  /**
   * The Amazon Resource Name (ARN) of the subscribed work team to describe.
   *
   * @public
   */
  WorkteamArn: string | undefined;
}

/**
 * Describes a work team of a vendor that does the labelling job.
 *
 * @public
 */
export interface SubscribedWorkteam {
  /**
   * The Amazon Resource Name (ARN) of the vendor that you have subscribed.
   *
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * The title of the service provided by the vendor in the Amazon Marketplace.
   *
   * @public
   */
  MarketplaceTitle?: string | undefined;

  /**
   * The name of the vendor in the Amazon Marketplace.
   *
   * @public
   */
  SellerName?: string | undefined;

  /**
   * The description of the vendor from the Amazon Marketplace.
   *
   * @public
   */
  MarketplaceDescription?: string | undefined;

  /**
   * Marketplace product listing ID.
   *
   * @public
   */
  ListingId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubscribedWorkteamResponse {
  /**
   * A `Workteam` instance that contains information about the work team.
   *
   * @public
   */
  SubscribedWorkteam: SubscribedWorkteam | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingJobRequest {
  /**
   * The name of the training job.
   *
   * @public
   */
  TrainingJobName: string | undefined;
}

/**
 * The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.
 *
 * @public
 */
export interface MetricData {
  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The value of the metric.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * The date and time that the algorithm emitted the metric.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * The MLflow details of this job.
 *
 * @public
 */
export interface MlflowDetails {
  /**
   * The MLflow experiment ID used for this job.
   *
   * @public
   */
  MlflowExperimentId?: string | undefined;

  /**
   * The MLflow run ID used for this job.
   *
   * @public
   */
  MlflowRunId?: string | undefined;
}

/**
 * Information about the status of the rule evaluation.
 *
 * @public
 */
export interface ProfilerRuleEvaluationStatus {
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
 * The serverless training job progress information.
 *
 * @public
 */
export interface TrainingProgressInfo {
  /**
   * The total step count per epoch.
   *
   * @public
   */
  TotalStepCountPerEpoch?: number | undefined;

  /**
   * The current step number.
   *
   * @public
   */
  CurrentStep?: number | undefined;

  /**
   * The current epoch number.
   *
   * @public
   */
  CurrentEpoch?: number | undefined;

  /**
   * The maximum number of epochs for this job.
   *
   * @public
   */
  MaxEpoch?: number | undefined;
}

/**
 * An array element of `SecondaryStatusTransitions` for [DescribeTrainingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrainingJob.html). It provides additional details about a status that the training job has transitioned through. A training job can be in one of several states, for example, starting, downloading, training, or uploading. Within each state, there are a number of intermediate states. For example, within the starting state, SageMaker could be starting the training job or launching the ML instances. These transitional states are referred to as the job's secondary status.
 *
 * @public
 */
export interface SecondaryStatusTransition {
  /**
   * Contains a secondary status information from a training job.
   *
   * Status might be one of the following secondary statuses:
   *
   * - **InProgress**
   *
   *   - `Starting` - Starting the training job.
   *   - `Downloading` - An optional stage for algorithms that support `File` training input mode. It indicates that data is being downloaded to the ML storage volumes.
   *   - `Training` - Training is in progress.
   *   - `Uploading` - Training is complete and the model artifacts are being uploaded to the S3 location.
   *
   * - **Completed**
   *
   *   - `Completed` - The training job has completed.
   *
   * - **Failed**
   *
   *   - `Failed` - The training job has failed. The reason for the failure is returned in the `FailureReason` field of `DescribeTrainingJobResponse`.
   *
   * - **Stopped**
   *
   *   - `MaxRuntimeExceeded` - The job stopped because it exceeded the maximum allowed runtime.
   *   - `Stopped` - The training job has stopped.
   *
   * - **Stopping**
   *
   *   - `Stopping` - Stopping the training job.
   *
   * We no longer support the following secondary statuses:
   *
   * - `LaunchingMLInstances`
   * - `PreparingTrainingStack`
   * - `DownloadingTrainingImage`
   *
   * @public
   */
  Status: SecondaryStatus | undefined;

  /**
   * A timestamp that shows when the training job transitioned to the current secondary status state.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * A timestamp that shows when the training job transitioned out of this secondary status state into another secondary status state or when the training job has ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * A detailed description of the progress within a secondary status.
   *
   * SageMaker provides secondary statuses and status messages that apply to each of them:
   *
   * - **Starting**
   *
   *   - Starting the training job.
   *   - Launching requested ML instances.
   *   - Insufficient capacity error from EC2 while launching instances, retrying!
   *   - Launched instance was unhealthy, replacing it!
   *   - Preparing the instances for training.
   *
   * - **Training**
   *
   *   - Training image download completed. Training in progress.
   *
   * > **Important:** Status messages are subject to change. Therefore, we recommend not including them in code that programmatically initiates actions. For examples, don't use status messages in if statements.
   *
   * To have an overview of your training job's progress, view `TrainingJobStatus` and `SecondaryStatus` in [DescribeTrainingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrainingJob.html), and `StatusMessage` together. For example, at the start of a training job, you might see the following:
   *
   * - `TrainingJobStatus` - InProgress
   * - `SecondaryStatus` - Training
   * - `StatusMessage` - Downloading the training image
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Status and billing information about the warm pool.
 *
 * @public
 */
export interface WarmPoolStatus {
  /**
   * The status of the warm pool.
   *
   * - `InUse`: The warm pool is in use for the training job.
   * - `Available`: The warm pool is available to reuse for a matching training job.
   * - `Reused`: The warm pool moved to a matching training job for reuse.
   * - `Terminated`: The warm pool is no longer available. Warm pools are unavailable if they are terminated by a user, terminated for a patch update, or terminated for exceeding the specified `KeepAlivePeriodInSeconds`.
   *
   * @public
   */
  Status: WarmPoolResourceStatus | undefined;

  /**
   * The billable time in seconds used by the warm pool. Billable time refers to the absolute wall-clock time.
   *
   * Multiply `ResourceRetainedBillableTimeInSeconds` by the number of instances (`InstanceCount`) in your training cluster to get the total compute time SageMaker bills you if you run warm pool training. The formula is as follows: `ResourceRetainedBillableTimeInSeconds * InstanceCount`.
   *
   * @public
   */
  ResourceRetainedBillableTimeInSeconds?: number | undefined;

  /**
   * The name of the matching training job that reused the warm pool.
   *
   * @public
   */
  ReusedByJob?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingJobResponse {
  /**
   * Name of the model training job.
   *
   * @public
   */
  TrainingJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training job.
   *
   * @public
   */
  TrainingJobArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the training job was launched by a hyperparameter tuning job.
   *
   * @public
   */
  TuningJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SageMaker Ground Truth labeling job that created the transform or training job.
   *
   * @public
   */
  LabelingJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an AutoML job.
   *
   * @public
   */
  AutoMLJobArn?: string | undefined;

  /**
   * Information about the Amazon S3 location that is configured for storing model artifacts.
   *
   * @public
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * The status of the training job.
   *
   * SageMaker provides the following training job statuses:
   *
   * - `InProgress` - The training is in progress.
   * - `Completed` - The training job has completed.
   * - `Failed` - The training job has failed. To see the reason for the failure, see the `FailureReason` field in the response to a `DescribeTrainingJobResponse` call.
   * - `Stopping` - The training job is stopping.
   * - `Stopped` - The training job has stopped.
   *
   * For more detailed information, see `SecondaryStatus`.
   *
   * @public
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * Provides detailed information about the state of the training job. For detailed information on the secondary status of the training job, see `StatusMessage` under [SecondaryStatusTransition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SecondaryStatusTransition.html).
   *
   * SageMaker provides primary statuses and secondary statuses that apply to each of them:
   *
   * - **InProgress**
   *
   *   - `Starting` - Starting the training job.
   *   - `Pending` - The training job is waiting for compute capacity or compute resource provision.
   *   - `Downloading` - An optional stage for algorithms that support `File` training input mode. It indicates that data is being downloaded to the ML storage volumes.
   *   - `Training` - Training is in progress.
   *   - `Interrupted` - The job stopped because the managed spot training instances were interrupted.
   *   - `Uploading` - Training is complete and the model artifacts are being uploaded to the S3 location.
   *
   * - **Completed**
   *
   *   - `Completed` - The training job has completed.
   *
   * - **Failed**
   *
   *   - `Failed` - The training job has failed. The reason for the failure is returned in the `FailureReason` field of `DescribeTrainingJobResponse`.
   *
   * - **Stopped**
   *
   *   - `MaxRuntimeExceeded` - The job stopped because it exceeded the maximum allowed runtime.
   *   - `MaxWaitTimeExceeded` - The job stopped because it exceeded the maximum allowed wait time.
   *   - `Stopped` - The training job has stopped.
   *
   * - **Stopping**
   *
   *   - `Stopping` - Stopping the training job.
   *
   * > **Important:** Valid values for `SecondaryStatus` are subject to change.
   *
   * We no longer support the following secondary statuses:
   *
   * - `LaunchingMLInstances`
   * - `PreparingTraining`
   * - `DownloadingTrainingImage`
   *
   * @public
   */
  SecondaryStatus: SecondaryStatus | undefined;

  /**
   * If the training job failed, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Algorithm-specific parameters.
   *
   * @public
   */
  HyperParameters?: Record<string, string> | undefined;

  /**
   * Information about the algorithm used for training, and algorithm metadata.
   *
   * @public
   */
  AlgorithmSpecification?: AlgorithmSpecification | undefined;

  /**
   * The Amazon Web Services Identity and Access Management (IAM) role configured for the training job.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * An array of `Channel` objects that describes each data input channel.
   *
   * @public
   */
  InputDataConfig?: Channel[] | undefined;

  /**
   * The S3 path where model artifacts that you configured when creating the job are stored. SageMaker creates subfolders for model artifacts.
   *
   * @public
   */
  OutputDataConfig?: OutputDataConfig | undefined;

  /**
   * Resources, including ML compute instances and ML storage volumes, that are configured for model training.
   *
   * @public
   */
  ResourceConfig?: ResourceConfig | undefined;

  /**
   * The status of the warm pool associated with the training job.
   *
   * @public
   */
  WarmPoolStatus?: WarmPoolStatus | undefined;

  /**
   * A [VpcConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_VpcConfig.html) object that specifies the VPC that this training job has access to. For more information, see [Protect Training Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html).
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
  StoppingCondition: StoppingCondition | undefined;

  /**
   * A timestamp that indicates when the training job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Indicates the time when the training job starts on training instances. You are billed for the time interval between this time and the value of `TrainingEndTime`. The start time in CloudWatch Logs might be later than this time. The difference is due to the time it takes to download the training data and to the size of the training container.
   *
   * @public
   */
  TrainingStartTime?: Date | undefined;

  /**
   * Indicates the time when the training job ends on training instances. You are billed for the time interval between the value of `TrainingStartTime` and this time. For successful jobs and stopped jobs, this is the time after model artifacts are uploaded. For failed jobs, this is the time when SageMaker detects a job failure.
   *
   * @public
   */
  TrainingEndTime?: Date | undefined;

  /**
   * A timestamp that indicates when the status of the training job was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * A history of all of the secondary statuses that the training job has transitioned through.
   *
   * @public
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[] | undefined;

  /**
   * A collection of `MetricData` objects that specify the names, values, and dates and times that the training algorithm emitted to Amazon CloudWatch.
   *
   * @public
   */
  FinalMetricDataList?: MetricData[] | undefined;

  /**
   * If you want to allow inbound or outbound network calls, except for calls between peers within a training cluster for distributed training, choose `True`. If you enable network isolation for training jobs that are configured to use a VPC, SageMaker downloads and uploads customer data and model artifacts through the specified VPC, but the training container does not have network access.
   *
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * To encrypt all communications between ML compute instances in distributed training, choose `True`. Encryption provides greater security for distributed training, but training might take longer. How long it takes depends on the amount of communication between compute instances, especially if you use a deep learning algorithms in distributed training.
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
   * The training time in seconds.
   *
   * @public
   */
  TrainingTimeInSeconds?: number | undefined;

  /**
   * The billable time in seconds. Billable time refers to the absolute wall-clock time.
   *
   * Multiply `BillableTimeInSeconds` by the number of instances (`InstanceCount`) in your training cluster to get the total compute time SageMaker bills you if you run distributed training. The formula is as follows: `BillableTimeInSeconds * InstanceCount` .
   *
   * You can calculate the savings from using managed spot training using the formula `(1 - BillableTimeInSeconds / TrainingTimeInSeconds) * 100`. For example, if `BillableTimeInSeconds` is 100 and `TrainingTimeInSeconds` is 500, the savings is 80%.
   *
   * @public
   */
  BillableTimeInSeconds?: number | undefined;

  /**
   * The billable token count for eligible serverless training jobs.
   *
   * @public
   */
  BillableTokenCount?: number | undefined;

  /**
   * Configuration information for the Amazon SageMaker Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the `DebugHookConfig` parameter, see [Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job](https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html).
   *
   * @public
   */
  DebugHookConfig?: DebugHookConfig | undefined;

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
   * Evaluation status of Amazon SageMaker Debugger rules for debugging on a training job.
   *
   * @public
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[] | undefined;

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
   * Evaluation status of Amazon SageMaker Debugger rules for profiling on a training job.
   *
   * @public
   */
  ProfilerRuleEvaluationStatuses?: ProfilerRuleEvaluationStatus[] | undefined;

  /**
   * Profiling status of a training job.
   *
   * @public
   */
  ProfilingStatus?: ProfilingStatus | undefined;

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

  /**
   * The MLflow details of this job.
   *
   * @public
   */
  MlflowDetails?: MlflowDetails | undefined;

  /**
   * The Serverless training job progress information.
   *
   * @public
   */
  ProgressInfo?: TrainingProgressInfo | undefined;

  /**
   * The Amazon Resource Name (ARN) of the output model package containing model weights or checkpoints.
   *
   * @public
   */
  OutputModelPackageArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingPlanRequest {
  /**
   * The name of the training plan to describe.
   *
   * @public
   */
  TrainingPlanName: string | undefined;
}

/**
 * Details of a reserved capacity for the training plan.
 *
 * For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
 *
 * @public
 */
export interface ReservedCapacitySummary {
  /**
   * The Amazon Resource Name (ARN); of the reserved capacity.
   *
   * @public
   */
  ReservedCapacityArn: string | undefined;

  /**
   * The type of reserved capacity.
   *
   * @public
   */
  ReservedCapacityType?: ReservedCapacityType | undefined;

  /**
   * The type of UltraServer included in this reserved capacity, such as ml.u-p6e-gb200x72.
   *
   * @public
   */
  UltraServerType?: string | undefined;

  /**
   * The number of UltraServers included in this reserved capacity.
   *
   * @public
   */
  UltraServerCount?: number | undefined;

  /**
   * The instance type for the reserved capacity.
   *
   * @public
   */
  InstanceType: ReservedCapacityInstanceType | undefined;

  /**
   * The total number of instances in the reserved capacity.
   *
   * @public
   */
  TotalInstanceCount: number | undefined;

  /**
   * The current status of the reserved capacity.
   *
   * @public
   */
  Status: ReservedCapacityStatus | undefined;

  /**
   * The availability zone for the reserved capacity.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Availability Zone ID of the reserved capacity.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The number of whole hours in the total duration for this reserved capacity.
   *
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * The additional minutes beyond whole hours in the total duration for this reserved capacity.
   *
   * @public
   */
  DurationMinutes?: number | undefined;

  /**
   * The start time of the reserved capacity.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the reserved capacity.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingPlanResponse {
  /**
   * The Amazon Resource Name (ARN); of the training plan.
   *
   * @public
   */
  TrainingPlanArn: string | undefined;

  /**
   * The name of the training plan.
   *
   * @public
   */
  TrainingPlanName: string | undefined;

  /**
   * The current status of the training plan (e.g., Pending, Active, Expired). To see the complete list of status values available for a training plan, refer to the `Status` attribute within the `TrainingPlanSummary` object.
   *
   * @public
   */
  Status: TrainingPlanStatus | undefined;

  /**
   * A message providing additional information about the current status of the training plan.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The number of whole hours in the total duration for this training plan.
   *
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * The additional minutes beyond whole hours in the total duration for this training plan.
   *
   * @public
   */
  DurationMinutes?: number | undefined;

  /**
   * The start time of the training plan.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the training plan.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The upfront fee for the training plan.
   *
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * The currency code for the upfront fee (e.g., USD).
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The total number of instances reserved in this training plan.
   *
   * @public
   */
  TotalInstanceCount?: number | undefined;

  /**
   * The number of instances currently available for use in this training plan.
   *
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * The number of instances currently in use from this training plan.
   *
   * @public
   */
  InUseInstanceCount?: number | undefined;

  /**
   * The number of instances in the training plan that are currently in an unhealthy state.
   *
   * @public
   */
  UnhealthyInstanceCount?: number | undefined;

  /**
   * The number of available spare instances in the training plan.
   *
   * @public
   */
  AvailableSpareInstanceCount?: number | undefined;

  /**
   * The total number of UltraServers reserved to this training plan.
   *
   * @public
   */
  TotalUltraServerCount?: number | undefined;

  /**
   * The target resources (e.g., SageMaker Training Jobs, SageMaker HyperPod, SageMaker Endpoints, Studio apps) that can use this training plan.
   *
   * Training plans are specific to their target resource.
   *
   * - A training plan designed for SageMaker training jobs can only be used to schedule and run training jobs.
   * - A training plan for HyperPod clusters can be used exclusively to provide compute resources to a cluster's instance group.
   * - A training plan for SageMaker endpoints can be used exclusively to provide compute resources to SageMaker endpoints for model deployment.
   * - A training plan for Studio apps can be used to launch JupyterLab and Code Editor apps on reserved training plan capacity.
   *
   * @public
   */
  TargetResources?: SageMakerResourceName[] | undefined;

  /**
   * The list of Reserved Capacity providing the underlying compute resources of the plan.
   *
   * @public
   */
  ReservedCapacitySummaries?: ReservedCapacitySummary[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingPlanExtensionHistoryRequest {
  /**
   * The Amazon Resource Name (ARN); of the training plan to retrieve extension history for.
   *
   * @public
   */
  TrainingPlanArn: string | undefined;

  /**
   * A token to continue pagination if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of extensions to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Details about an extension to a training plan, including the offering ID, dates, status, and cost information.
 *
 * @public
 */
export interface TrainingPlanExtension {
  /**
   * The unique identifier of the extension offering that was used to create this extension.
   *
   * @public
   */
  TrainingPlanExtensionOfferingId: string | undefined;

  /**
   * The timestamp when the extension was created.
   *
   * @public
   */
  ExtendedAt?: Date | undefined;

  /**
   * The start date of the extension period.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The end date of the extension period.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The current status of the extension (e.g., Pending, Active, Scheduled, Failed, Expired).
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The payment processing status of the extension.
   *
   * @public
   */
  PaymentStatus?: string | undefined;

  /**
   * The Availability Zone of the extension.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Availability Zone ID of the extension.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The duration of the extension in hours.
   *
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * The upfront fee for the extension.
   *
   * @public
   */
  UpfrontFee?: string | undefined;

  /**
   * The currency code for the upfront fee (e.g., USD).
   *
   * @public
   */
  CurrencyCode?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingPlanExtensionHistoryResponse {
  /**
   * A list of extensions for the specified training plan.
   *
   * @public
   */
  TrainingPlanExtensions: TrainingPlanExtension[] | undefined;

  /**
   * A token to continue pagination if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingSessionRequest {
  /**
   * The name of the training session to describe.
   *
   * @public
   */
  TrainingSessionName: string | undefined;
}

/**
 * Contains detailed information about a training session.
 *
 * @public
 */
export interface TrainingSessionDetail {
  /**
   * The Amazon Resource Name (ARN) of the training session.
   *
   * @public
   */
  TrainingSessionArn: string | undefined;

  /**
   * The name of the training session.
   *
   * @public
   */
  TrainingSessionName: string | undefined;

  /**
   * The current status of the training session.
   *
   * @public
   */
  TrainingSessionStatus: TrainingSessionStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model package group where checkpoints are published.
   *
   * @public
   */
  ModelPackageGroupArn?: string | undefined;

  /**
   * The date and time that the training session was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the training session was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The date and time that the training session ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * If the training session failed or is blocked, detailed error information.
   *
   * @public
   */
  ErrorDetails?: string | undefined;

  /**
   * The sequence number of the last training operation received by the session.
   *
   * @public
   */
  LastReceivedSequenceNumber?: number | undefined;

  /**
   * The billable token usage for the training session.
   *
   * @public
   */
  BillableTokenUsage?: BillableTokenUsage | undefined;

  /**
   * The Virtual Private Cloud (VPC) configuration for the training session.
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the training session.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The Low-Rank Adaptation (LoRA) configuration for the training session.
   *
   * @public
   */
  LoraConfig?: LoraConfig | undefined;

  /**
   * The configuration for the base model.
   *
   * @public
   */
  ModelConfig?: TrainingSessionModelConfig | undefined;

  /**
   * The output configuration for the training session.
   *
   * @public
   */
  OutputConfig?: TrainingSessionOutputConfig | undefined;

  /**
   * The tags associated with the training session.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrainingSessionResponse {
  /**
   * The detailed information about the training session.
   *
   * @public
   */
  TrainingSessionDetail: TrainingSessionDetail | undefined;
}

/**
 * @public
 */
export interface DescribeTransformJobRequest {
  /**
   * The name of the transform job that you want to view details of.
   *
   * @public
   */
  TransformJobName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTransformJobResponse {
  /**
   * The name of the transform job.
   *
   * @public
   */
  TransformJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the transform job.
   *
   * @public
   */
  TransformJobArn: string | undefined;

  /**
   * The status of the transform job. If the transform job failed, the reason is returned in the `FailureReason` field.
   *
   * @public
   */
  TransformJobStatus: TransformJobStatus | undefined;

  /**
   * If the transform job failed, `FailureReason` describes why it failed. A transform job creates a log file, which includes error messages, and stores it as an Amazon S3 object. For more information, see [Log Amazon SageMaker Events with Amazon CloudWatch](https://docs.aws.amazon.com/sagemaker/latest/dg/logging-cloudwatch.html).
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The name of the model used in the transform job.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The maximum number of parallel requests on each instance node that can be launched in a transform job. The default value is 1.
   *
   * @public
   */
  MaxConcurrentTransforms?: number | undefined;

  /**
   * The timeout and maximum number of retries for processing a transform job invocation.
   *
   * @public
   */
  ModelClientConfig?: ModelClientConfig | undefined;

  /**
   * The maximum payload size, in MB, used in the transform job.
   *
   * @public
   */
  MaxPayloadInMB?: number | undefined;

  /**
   * Specifies the number of records to include in a mini-batch for an HTTP inference request. A *record* *is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record.
   *
   * To enable the batch strategy, you must set `SplitType` to `Line`, `RecordIO`, or `TFRecord`.
   *
   * @public*
   */
  BatchStrategy?: BatchStrategy | undefined;

  /**
   * The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * Describes the dataset to be transformed and the Amazon S3 location where it is stored.
   *
   * @public
   */
  TransformInput: TransformInput | undefined;

  /**
   * Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.
   *
   * @public
   */
  TransformOutput?: TransformOutput | undefined;

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
   * A timestamp that shows when the transform Job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Indicates when the transform job starts on ML instances. You are billed for the time interval between this time and the value of `TransformEndTime`.
   *
   * @public
   */
  TransformStartTime?: Date | undefined;

  /**
   * Indicates when the transform job has been completed, or has stopped or failed. You are billed for the time interval between this time and the value of `TransformStartTime`.
   *
   * @public
   */
  TransformEndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the transform or training job.
   *
   * @public
   */
  LabelingJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AutoML transform job.
   *
   * @public
   */
  AutoMLJobArn?: string | undefined;

  /**
   * The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see [Associate Prediction Results with their Corresponding Input Records](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html).
   *
   * @public
   */
  DataProcessing?: DataProcessing | undefined;

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
export interface DescribeTrialRequest {
  /**
   * The name of the trial to describe.
   *
   * @public
   */
  TrialName: string | undefined;
}

/**
 * The source of the trial.
 *
 * @public
 */
export interface TrialSource {
  /**
   * The Amazon Resource Name (ARN) of the source.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The source job type.
   *
   * @public
   */
  SourceType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrialResponse {
  /**
   * The name of the trial.
   *
   * @public
   */
  TrialName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trial.
   *
   * @public
   */
  TrialArn?: string | undefined;

  /**
   * The name of the trial as displayed. If `DisplayName` isn't specified, `TrialName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The name of the experiment the trial is part of.
   *
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source and, optionally, the job type.
   *
   * @public
   */
  Source?: TrialSource | undefined;

  /**
   * When the trial was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Who created the trial.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * When the trial was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Who last modified the trial.
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
}

/**
 * @public
 */
export interface DescribeTrialComponentRequest {
  /**
   * The name of the trial component to describe.
   *
   * @public
   */
  TrialComponentName: string | undefined;
}

/**
 * A summary of the metrics of a trial component.
 *
 * @public
 */
export interface TrialComponentMetricSummary {
  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * When the metric was last updated.
   *
   * @public
   */
  TimeStamp?: Date | undefined;

  /**
   * The maximum value of the metric.
   *
   * @public
   */
  Max?: number | undefined;

  /**
   * The minimum value of the metric.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The most recent value of the metric.
   *
   * @public
   */
  Last?: number | undefined;

  /**
   * The number of samples used to generate the metric.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The average value of the metric.
   *
   * @public
   */
  Avg?: number | undefined;

  /**
   * The standard deviation of the metric.
   *
   * @public
   */
  StdDev?: number | undefined;
}

/**
 * The Amazon Resource Name (ARN) and job type of the source of a trial component.
 *
 * @public
 */
export interface TrialComponentSource {
  /**
   * The source Amazon Resource Name (ARN).
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The source job type.
   *
   * @public
   */
  SourceType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrialComponentResponse {
  /**
   * The name of the trial component.
   *
   * @public
   */
  TrialComponentName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trial component.
   *
   * @public
   */
  TrialComponentArn?: string | undefined;

  /**
   * The name of the component as displayed. If `DisplayName` isn't specified, `TrialComponentName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source and, optionally, the job type.
   *
   * @public
   */
  Source?: TrialComponentSource | undefined;

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
   * When the component was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Who created the trial component.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * When the component was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Who last modified the component.
   *
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * The hyperparameters of the component.
   *
   * @public
   */
  Parameters?: Record<string, TrialComponentParameterValue> | undefined;

  /**
   * The input artifacts of the component.
   *
   * @public
   */
  InputArtifacts?: Record<string, TrialComponentArtifact> | undefined;

  /**
   * The output artifacts of the component.
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
   * The metrics for the component.
   *
   * @public
   */
  Metrics?: TrialComponentMetricSummary[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lineage group.
   *
   * @public
   */
  LineageGroupArn?: string | undefined;

  /**
   * A list of ARNs and, if applicable, job types for multiple sources of an experiment run.
   *
   * @public
   */
  Sources?: TrialComponentSource[] | undefined;
}

/**
 * @public
 */
export interface DescribeUserProfileRequest {
  /**
   * The domain ID.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * The user profile name. This value is not case sensitive.
   *
   * @public
   */
  UserProfileName: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserProfileResponse {
  /**
   * The ID of the domain that contains the profile.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The user profile Amazon Resource Name (ARN).
   *
   * @public
   */
  UserProfileArn?: string | undefined;

  /**
   * The user profile name.
   *
   * @public
   */
  UserProfileName?: string | undefined;

  /**
   * The ID of the user's profile in the Amazon Elastic File System volume.
   *
   * @public
   */
  HomeEfsFileSystemUid?: string | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: UserProfileStatus | undefined;

  /**
   * The last modified time.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The creation time.
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
   * The IAM Identity Center user identifier.
   *
   * @public
   */
  SingleSignOnUserIdentifier?: string | undefined;

  /**
   * The IAM Identity Center user value.
   *
   * @public
   */
  SingleSignOnUserValue?: string | undefined;

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
export interface DescribeWorkforceRequest {
  /**
   * The name of the private workforce whose access you want to restrict. `WorkforceName` is automatically set to `default` when a workforce is created and cannot be modified.
   *
   * @public
   */
  WorkforceName: string | undefined;
}

/**
 * Your OIDC IdP workforce configuration.
 *
 * @public
 */
export interface OidcConfigForResponse {
  /**
   * The OIDC IdP client ID used to configure your private workforce.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The OIDC IdP issuer used to configure your private workforce.
   *
   * @public
   */
  Issuer?: string | undefined;

  /**
   * The OIDC IdP authorization endpoint used to configure your private workforce.
   *
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * The OIDC IdP token endpoint used to configure your private workforce.
   *
   * @public
   */
  TokenEndpoint?: string | undefined;

  /**
   * The OIDC IdP user information endpoint used to configure your private workforce.
   *
   * @public
   */
  UserInfoEndpoint?: string | undefined;

  /**
   * The OIDC IdP logout endpoint used to configure your private workforce.
   *
   * @public
   */
  LogoutEndpoint?: string | undefined;

  /**
   * The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce.
   *
   * @public
   */
  JwksUri?: string | undefined;

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
 * A VpcConfig object that specifies the VPC that you want your workforce to connect to.
 *
 * @public
 */
export interface WorkforceVpcConfigResponse {
  /**
   * The ID of the VPC that the workforce uses for communication.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be for the same VPC as specified in the subnet.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * The ID of the subnets in the VPC that you want to connect.
   *
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * The IDs for the VPC service endpoints of your VPC workforce when it is created and updated.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see [Create a Private Workforce](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html).
 *
 * @public
 */
export interface Workforce {
  /**
   * The name of the private workforce.
   *
   * @public
   */
  WorkforceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the private workforce.
   *
   * @public
   */
  WorkforceArn: string | undefined;

  /**
   * The most recent date that [UpdateWorkforce](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateWorkforce.html) was used to successfully add one or more IP address ranges ([CIDRs](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html)) to a private workforce's allow list.
   *
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * A list of one to ten IP address ranges ([CIDRs](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html)) to be added to the workforce allow list. By default, a workforce isn't restricted to specific IP addresses.
   *
   * @public
   */
  SourceIpConfig?: SourceIpConfig | undefined;

  /**
   * The subdomain for your OIDC Identity Provider.
   *
   * @public
   */
  SubDomain?: string | undefined;

  /**
   * The configuration of an Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single [Amazon Cognito user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html).
   *
   * @public
   */
  CognitoConfig?: CognitoConfig | undefined;

  /**
   * The configuration of an OIDC Identity Provider (IdP) private workforce.
   *
   * @public
   */
  OidcConfig?: OidcConfigForResponse | undefined;

  /**
   * The date that the workforce is created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The configuration of a VPC workforce.
   *
   * @public
   */
  WorkforceVpcConfig?: WorkforceVpcConfigResponse | undefined;

  /**
   * The status of your workforce.
   *
   * @public
   */
  Status?: WorkforceStatus | undefined;

  /**
   * The reason your workforce failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The IP address type you specify - either `IPv4` only or `dualstack` (`IPv4` and `IPv6`) - to support your labeling workforce.
   *
   * @public
   */
  IpAddressType?: WorkforceIpAddressType | undefined;
}

/**
 * @public
 */
export interface DescribeWorkforceResponse {
  /**
   * A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each Amazon Web Services Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see [Create a Private Workforce](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html).
   *
   * @public
   */
  Workforce: Workforce | undefined;
}

/**
 * @public
 */
export interface DescribeWorkteamRequest {
  /**
   * The name of the work team to return a description of.
   *
   * @public
   */
  WorkteamName: string | undefined;
}

/**
 * Provides details about a labeling work team.
 *
 * @public
 */
export interface Workteam {
  /**
   * The name of the work team.
   *
   * @public
   */
  WorkteamName: string | undefined;

  /**
   * A list of `MemberDefinition` objects that contains objects that identify the workers that make up the work team.
   *
   * Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use `CognitoMemberDefinition`. For workforces created using your own OIDC identity provider (IdP) use `OidcMemberDefinition`.
   *
   * @public
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the work team.
   *
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workforce.
   *
   * @public
   */
  WorkforceArn?: string | undefined;

  /**
   * The Amazon Marketplace identifier for a vendor's work team.
   *
   * @public
   */
  ProductListingIds?: string[] | undefined;

  /**
   * A description of the work team.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The URI of the labeling job's user interface. Workers open this URI to start labeling your data objects.
   *
   * @public
   */
  SubDomain?: string | undefined;

  /**
   * The date and time that the work team was created (timestamp).
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The date and time that the work team was last updated (timestamp).
   *
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * Configures SNS notifications of available or expiring work items for work teams.
   *
   * @public
   */
  NotificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * Describes any access constraints that have been defined for Amazon S3 resources.
   *
   * @public
   */
  WorkerAccessConfiguration?: WorkerAccessConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeWorkteamResponse {
  /**
   * A `Workteam` instance that contains information about the work team.
   *
   * @public
   */
  Workteam: Workteam | undefined;
}

/**
 * Specifies the serverless update concurrency configuration for an endpoint variant.
 *
 * @public
 */
export interface ProductionVariantServerlessUpdateConfig {
  /**
   * The updated maximum number of concurrent invocations your serverless endpoint can process.
   *
   * @public
   */
  MaxConcurrency?: number | undefined;

  /**
   * The updated amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to `MaxConcurrency`.
   *
   * @public
   */
  ProvisionedConcurrency?: number | undefined;
}

/**
 * Specifies weight and capacity values for a production variant.
 *
 * @public
 */
export interface DesiredWeightAndCapacity {
  /**
   * The name of the variant to update.
   *
   * @public
   */
  VariantName: string | undefined;

  /**
   * The variant's weight.
   *
   * @public
   */
  DesiredWeight?: number | undefined;

  /**
   * The variant's capacity.
   *
   * @public
   */
  DesiredInstanceCount?: number | undefined;

  /**
   * Specifies the serverless update concurrency configuration for an endpoint variant.
   *
   * @public
   */
  ServerlessUpdateConfig?: ProductionVariantServerlessUpdateConfig | undefined;
}

/**
 * @public
 */
export interface DetachClusterNodeVolumeRequest {
  /**
   * The Amazon Resource Name (ARN) of your SageMaker HyperPod cluster containing the target node. Your cluster must use EKS as the orchestration and be in the `InService` state.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The unique identifier of the cluster node from which you want to detach the volume.
   *
   * @public
   */
  NodeId: string | undefined;

  /**
   * The unique identifier of your EBS volume that you want to detach. Your volume must be currently attached to the specified node.
   *
   * @public
   */
  VolumeId: string | undefined;
}

/**
 * @public
 */
export interface DetachClusterNodeVolumeResponse {
  /**
   * The Amazon Resource Name (ARN) of your SageMaker HyperPod cluster where the volume detachment operation was performed.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The unique identifier of the cluster node from which your volume was detached.
   *
   * @public
   */
  NodeId: string | undefined;

  /**
   * The unique identifier of your EBS volume that was detached.
   *
   * @public
   */
  VolumeId: string | undefined;

  /**
   * The original timestamp when your volume was initially attached to the node.
   *
   * @public
   */
  AttachTime: Date | undefined;

  /**
   * The current status of your volume detachment operation.
   *
   * @public
   */
  Status: VolumeAttachmentStatus | undefined;

  /**
   * The device name assigned to your attached volume on the target instance.
   *
   * @public
   */
  DeviceName: string | undefined;
}

/**
 * Information of a particular device.
 *
 * @public
 */
export interface Device {
  /**
   * The name of the device.
   *
   * @public
   */
  DeviceName: string | undefined;

  /**
   * Description of the device.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Amazon Web Services Internet of Things (IoT) object name.
   *
   * @public
   */
  IotThingName?: string | undefined;
}

/**
 * Contains information summarizing device details and deployment status.
 *
 * @public
 */
export interface DeviceDeploymentSummary {
  /**
   * The ARN of the edge deployment plan.
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
   * The name of the stage in the edge deployment plan.
   *
   * @public
   */
  StageName: string | undefined;

  /**
   * The name of the deployed stage.
   *
   * @public
   */
  DeployedStageName?: string | undefined;

  /**
   * The name of the fleet to which the device belongs to.
   *
   * @public
   */
  DeviceFleetName?: string | undefined;

  /**
   * The name of the device.
   *
   * @public
   */
  DeviceName: string | undefined;

  /**
   * The ARN of the device.
   *
   * @public
   */
  DeviceArn: string | undefined;

  /**
   * The deployment status of the device.
   *
   * @public
   */
  DeviceDeploymentStatus?: DeviceDeploymentStatus | undefined;

  /**
   * The detailed error message for the deployoment status result.
   *
   * @public
   */
  DeviceDeploymentStatusMessage?: string | undefined;

  /**
   * The description of the device.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The time when the deployment on the device started.
   *
   * @public
   */
  DeploymentStartTime?: Date | undefined;
}

/**
 * Summary of the device fleet.
 *
 * @public
 */
export interface DeviceFleetSummary {
  /**
   * Amazon Resource Name (ARN) of the device fleet.
   *
   * @public
   */
  DeviceFleetArn: string | undefined;

  /**
   * Name of the device fleet.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * Timestamp of when the device fleet was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Timestamp of when the device fleet was last updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * Status of devices.
 *
 * @public
 */
export interface DeviceStats {
  /**
   * The number of devices connected with a heartbeat.
   *
   * @public
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * The number of registered devices.
   *
   * @public
   */
  RegisteredDeviceCount: number | undefined;
}

/**
 * Summary of model on edge device.
 *
 * @public
 */
export interface EdgeModelSummary {
  /**
   * The name of the model.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The version model.
   *
   * @public
   */
  ModelVersion: string | undefined;
}

/**
 * Summary of the device.
 *
 * @public
 */
export interface DeviceSummary {
  /**
   * The unique identifier of the device.
   *
   * @public
   */
  DeviceName: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the device.
   *
   * @public
   */
  DeviceArn: string | undefined;

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
  DeviceFleetName?: string | undefined;

  /**
   * The Amazon Web Services Internet of Things (IoT) object thing name associated with the device..
   *
   * @public
   */
  IotThingName?: string | undefined;

  /**
   * The timestamp of the last registration or de-reregistration.
   *
   * @public
   */
  RegistrationTime?: Date | undefined;

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
  Models?: EdgeModelSummary[] | undefined;

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
   * The name of the component to disassociate from the trial.
   *
   * @public
   */
  TrialComponentName: string | undefined;

  /**
   * The name of the trial to disassociate from.
   *
   * @public
   */
  TrialName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrialComponentResponse {
  /**
   * The Amazon Resource Name (ARN) of the trial component.
   *
   * @public
   */
  TrialComponentArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trial.
   *
   * @public
   */
  TrialArn?: string | undefined;
}

/**
 * The domain's details.
 *
 * @public
 */
export interface DomainDetails {
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
   * The domain's URL.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * A collection of settings that update the current configuration for the `RStudioServerPro` Domain-level app.
 *
 * @public
 */
export interface RStudioServerProDomainSettingsForUpdate {
  /**
   * The execution role for the `RStudioServerPro` Domain-level app.
   *
   * @public
   */
  DomainExecutionRoleArn: string | undefined;

  /**
   * Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on.
   *
   * > **Note:** When both `SageMakerImageVersionArn` and `SageMakerImageArn` are passed, `SageMakerImageVersionArn` is used. Any updates to `SageMakerImageArn` will not take effect if `SageMakerImageVersionArn` already exists in the `ResourceSpec` because `SageMakerImageVersionArn` always takes precedence. To clear the value set for `SageMakerImageVersionArn`, pass `None` as the value.
   *
   * @public
   */
  DefaultResourceSpec?: ResourceSpec | undefined;

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
}

/**
 * A collection of `Domain` configuration settings to update.
 *
 * @public
 */
export interface DomainSettingsForUpdate {
  /**
   * A collection of `RStudioServerPro` Domain-level app settings to update. A single `RStudioServerPro` application is created for a domain.
   *
   * @public
   */
  RStudioServerProDomainSettingsForUpdate?: RStudioServerProDomainSettingsForUpdate | undefined;

  /**
   * The configuration for attaching a SageMaker AI user profile name to the execution role as a [sts:SourceIdentity key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html). This configuration can only be modified if there are no apps in the `InService` or `Pending` state.
   *
   * @public
   */
  ExecutionRoleIdentityConfig?: ExecutionRoleIdentityConfig | undefined;

  /**
   * The security groups for the Amazon Virtual Private Cloud that the `Domain` uses for communication between Domain-level apps and user apps.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

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
   * A collection of settings that configure the Amazon Q experience within the domain.
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
   * The IP address type for the domain. Specify `ipv4` for IPv4-only connectivity or `dualstack` for both IPv4 and IPv6 connectivity. When you specify `dualstack`, the subnet must support IPv6 CIDR blocks.
   *
   * @public
   */
  IpAddressType?: IPAddressType | undefined;
}

/**
 * A specification for a predefined metric.
 *
 * @public
 */
export interface PredefinedMetricSpecification {
  /**
   * The metric type. You can only apply SageMaker metric types to SageMaker endpoints.
   *
   * @public
   */
  PredefinedMetricType?: string | undefined;
}

/**
 * An object containing information about a metric.
 *
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
   * Information about a predefined metric.
   *
   * @public
   */
  export interface PredefinedMember {
    Predefined: PredefinedMetricSpecification;
    Customized?: never;
    $unknown?: never;
  }

  /**
   * Information about a customized metric.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Predefined: (value: PredefinedMetricSpecification) => T;
    Customized: (value: CustomizedMetricSpecification) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A target tracking scaling policy. Includes support for predefined or customized metrics.
 *
 * When using the [PutScalingPolicy](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_PutScalingPolicy.html) API, this parameter is required when you are creating a policy with the policy type `TargetTrackingScaling`.
 *
 * @public
 */
export interface TargetTrackingScalingPolicyConfiguration {
  /**
   * An object containing information about a metric.
   *
   * @public
   */
  MetricSpecification?: MetricSpecification | undefined;

  /**
   * The recommended target value to specify for the metric when creating a scaling policy.
   *
   * @public
   */
  TargetValue?: number | undefined;
}

/**
 * An object containing a recommended scaling policy.
 *
 * @public
 */
export type ScalingPolicy =
  | ScalingPolicy.TargetTrackingMember
  | ScalingPolicy.$UnknownMember;

/**
 * @public
 */
export namespace ScalingPolicy {
  /**
   * A target tracking scaling policy. Includes support for predefined or customized metrics.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    TargetTracking: (value: TargetTrackingScalingPolicyConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object with the recommended values for you to specify when creating an autoscaling policy.
 *
 * @public
 */
export interface DynamicScalingConfiguration {
  /**
   * The recommended minimum capacity to specify for your autoscaling policy.
   *
   * @public
   */
  MinCapacity?: number | undefined;

  /**
   * The recommended maximum capacity to specify for your autoscaling policy.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The recommended scale in cooldown time for your autoscaling policy.
   *
   * @public
   */
  ScaleInCooldown?: number | undefined;

  /**
   * The recommended scale out cooldown time for your autoscaling policy.
   *
   * @public
   */
  ScaleOutCooldown?: number | undefined;

  /**
   * An object of the scaling policies for each metric.
   *
   * @public
   */
  ScalingPolicies?: ScalingPolicy[] | undefined;
}

/**
 * A directed edge connecting two lineage entities.
 *
 * @public
 */
export interface Edge {
  /**
   * The Amazon Resource Name (ARN) of the source lineage entity of the directed edge.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the destination lineage entity of the directed edge.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * The type of the Association(Edge) between the source and destination. For example `ContributedTo`, `Produced`, or `DerivedFrom`.
   *
   * @public
   */
  AssociationType?: AssociationEdgeType | undefined;
}

/**
 * Contains information summarizing an edge deployment plan.
 *
 * @public
 */
export interface EdgeDeploymentPlanSummary {
  /**
   * The ARN of the edge deployment plan.
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
   * The name of the device fleet used for the deployment.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * The number of edge devices with the successful deployment.
   *
   * @public
   */
  EdgeDeploymentSuccess: number | undefined;

  /**
   * The number of edge devices yet to pick up the deployment, or in progress.
   *
   * @public
   */
  EdgeDeploymentPending: number | undefined;

  /**
   * The number of edge devices that failed the deployment.
   *
   * @public
   */
  EdgeDeploymentFailed: number | undefined;

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
 * Status of edge devices with this model.
 *
 * @public
 */
export interface EdgeModelStat {
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
   * The number of devices that have this model version and do not have a heart beat.
   *
   * @public
   */
  OfflineDeviceCount: number | undefined;

  /**
   * The number of devices that have this model version and have a heart beat.
   *
   * @public
   */
  ConnectedDeviceCount: number | undefined;

  /**
   * The number of devices that have this model version, a heart beat, and are currently running.
   *
   * @public
   */
  ActiveDeviceCount: number | undefined;

  /**
   * The number of devices with this model version and are producing sample data.
   *
   * @public
   */
  SamplingDeviceCount: number | undefined;
}

/**
 * Summary of edge packaging job.
 *
 * @public
 */
export interface EdgePackagingJobSummary {
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
   * The status of the edge packaging job.
   *
   * @public
   */
  EdgePackagingJobStatus: EdgePackagingJobStatus | undefined;

  /**
   * The name of the SageMaker Neo compilation job.
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
   * The timestamp of when the job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The timestamp of when the edge packaging job was last updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * The configurations and outcomes of an Amazon EMR Serverless step execution.
 *
 * @public
 */
export interface EMRServerlessStepMetadata {
  /**
   * The identifier of the Amazon EMR Serverless application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The identifier of the Amazon EMR Serverless job run.
   *
   * @public
   */
  JobRunId?: string | undefined;

  /**
   * The name of the Amazon EMR Serverless job run.
   *
   * @public
   */
  JobRunName?: string | undefined;

  /**
   * The path to the log file for the Amazon EMR Serverless job run.
   *
   * @public
   */
  LogFilePath?: string | undefined;
}

/**
 * The configurations and outcomes of an Amazon EMR step execution.
 *
 * @public
 */
export interface EMRStepMetadata {
  /**
   * The identifier of the EMR cluster.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The identifier of the EMR cluster step.
   *
   * @public
   */
  StepId?: string | undefined;

  /**
   * The name of the EMR cluster step.
   *
   * @public
   */
  StepName?: string | undefined;

  /**
   * The path to the log file where the cluster step's failure root cause is recorded.
   *
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
 * A schedule for a model monitoring job. For information about model monitor, see [Amazon SageMaker Model Monitor](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html).
 *
 * @public
 */
export interface MonitoringSchedule {
  /**
   * The Amazon Resource Name (ARN) of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleArn?: string | undefined;

  /**
   * The name of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleName?: string | undefined;

  /**
   * The status of the monitoring schedule. This can be one of the following values.
   *
   * - `PENDING` - The schedule is pending being created.
   * - `FAILED` - The schedule failed.
   * - `SCHEDULED` - The schedule was successfully created.
   * - `STOPPED` - The schedule was stopped.
   *
   * @public
   */
  MonitoringScheduleStatus?: ScheduleStatus | undefined;

  /**
   * The type of the monitoring job definition to schedule.
   *
   * @public
   */
  MonitoringType?: MonitoringType | undefined;

  /**
   * If the monitoring schedule failed, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The time that the monitoring schedule was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the monitoring schedule was changed.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Configures the monitoring schedule and defines the monitoring job.
   *
   * @public
   */
  MonitoringScheduleConfig?: MonitoringScheduleConfig | undefined;

  /**
   * The endpoint that hosts the model being monitored.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * Summary of information about the last monitoring job to run.
   *
   * @public
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary | undefined;

  /**
   * A list of the tags associated with the monitoring schedlue. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A hosted endpoint for real-time inference.
 *
 * @public
 */
export interface Endpoint {
  /**
   * The name of the endpoint.
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
   * The endpoint configuration associated with the endpoint.
   *
   * @public
   */
  EndpointConfigName: string | undefined;

  /**
   * A list of the production variants hosted on the endpoint. Each production variant is a model.
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
   * @public
   */
  EndpointStatus: EndpointStatus | undefined;

  /**
   * If the endpoint failed, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The time that the endpoint was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The last time the endpoint was modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * A list of monitoring schedules for the endpoint. For information about model monitoring, see [Amazon SageMaker Model Monitor](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html).
   *
   * @public
   */
  MonitoringSchedules?: MonitoringSchedule[] | undefined;

  /**
   * A list of the tags associated with the endpoint. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of the shadow variants hosted on the endpoint. Each shadow variant is a model in shadow mode with production traffic replicated from the production variant.
   *
   * @public
   */
  ShadowProductionVariants?: ProductionVariantSummary[] | undefined;
}

/**
 * Metadata for an endpoint configuration step.
 *
 * @public
 */
export interface EndpointConfigStepMetadata {
  /**
   * The Amazon Resource Name (ARN) of the endpoint configuration used in the step.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Provides summary information for an endpoint configuration.
 *
 * @public
 */
export interface EndpointConfigSummary {
  /**
   * The name of the endpoint configuration.
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
   * A timestamp that shows when the endpoint configuration was created.
   *
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * Metadata for an endpoint step.
 *
 * @public
 */
export interface EndpointStepMetadata {
  /**
   * The Amazon Resource Name (ARN) of the endpoint in the step.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Provides summary information for an endpoint.
 *
 * @public
 */
export interface EndpointSummary {
  /**
   * The name of the endpoint.
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
   * The status of the endpoint.
   *
   * - `OutOfService`: Endpoint is not available to take incoming requests.
   * - `Creating`: [CreateEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html) is executing.
   * - `Updating`: [UpdateEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpoint.html) or [UpdateEndpointWeightsAndCapacities](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html) is executing.
   * - `SystemUpdating`: Endpoint is undergoing maintenance and cannot be updated or deleted or re-scaled until it has completed. This maintenance operation does not change any customer-specified values such as VPC config, KMS encryption, model, instance type, or instance count.
   * - `RollingBack`: Endpoint fails to scale up or down or change its variant weight and is in the process of rolling back to its previous configuration. Once the rollback completes, endpoint returns to an `InService` status. This transitional status only applies to an endpoint that has autoscaling enabled and is undergoing variant weight or capacity changes as part of an [UpdateEndpointWeightsAndCapacities](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html) call or when the [UpdateEndpointWeightsAndCapacities](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateEndpointWeightsAndCapacities.html) operation is called explicitly.
   * - `InService`: Endpoint is available to process incoming requests.
   * - `Deleting`: [DeleteEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html) is executing.
   * - `Failed`: Endpoint could not be created, updated, or re-scaled. Use `DescribeEndpointOutput$FailureReason` for information about the failure. [DeleteEndpoint](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteEndpoint.html) is the only operation that can be performed on a failed endpoint.
   *
   * To get a list of endpoints with a specified status, use the `StatusEquals` filter with a call to [ListEndpoints](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListEndpoints.html).
   *
   * @public
   */
  EndpointStatus: EndpointStatus | undefined;
}

/**
 * The properties of an experiment as returned by the [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API. For information about experiments, see the [CreateExperiment](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateExperiment.html) API.
 *
 * @public
 */
export interface Experiment {
  /**
   * The name of the experiment.
   *
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the experiment.
   *
   * @public
   */
  ExperimentArn?: string | undefined;

  /**
   * The name of the experiment as displayed. If `DisplayName` isn't specified, `ExperimentName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The source of the experiment.
   *
   * @public
   */
  Source?: ExperimentSource | undefined;

  /**
   * The description of the experiment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * When the experiment was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Who created the experiment.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * When the experiment was last modified.
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
   * The list of tags that are associated with the experiment. You can use [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API to search on the tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A summary of the properties of an experiment. To get the complete set of properties, call the [DescribeExperiment](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeExperiment.html) API and provide the `ExperimentName`.
 *
 * @public
 */
export interface ExperimentSummary {
  /**
   * The Amazon Resource Name (ARN) of the experiment.
   *
   * @public
   */
  ExperimentArn?: string | undefined;

  /**
   * The name of the experiment.
   *
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * The name of the experiment as displayed. If `DisplayName` isn't specified, `ExperimentName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The source of the experiment.
   *
   * @public
   */
  ExperimentSource?: ExperimentSource | undefined;

  /**
   * When the experiment was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the experiment was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ExtendTrainingPlanRequest {
  /**
   * The unique identifier of the extension offering to purchase. You can retrieve this ID from the `TrainingPlanExtensionOfferings` in the response of the `SearchTrainingPlanOfferings` API.
   *
   * @public
   */
  TrainingPlanExtensionOfferingId: string | undefined;
}

/**
 * @public
 */
export interface ExtendTrainingPlanResponse {
  /**
   * The list of extensions for the training plan, including the newly created extension.
   *
   * @public
   */
  TrainingPlanExtensions: TrainingPlanExtension[] | undefined;
}

/**
 * The container for the metadata for Fail step.
 *
 * @public
 */
export interface FailStepMetadata {
  /**
   * A message that you define and then is processed and rendered by the Fail step when the error occurs.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Amazon SageMaker Feature Store stores features in a collection called Feature Group. A Feature Group can be visualized as a table which has rows, with a unique identifier for each row where each column in the table is a feature. In principle, a Feature Group is composed of features and values per features.
 *
 * @public
 */
export interface FeatureGroup {
  /**
   * The Amazon Resource Name (ARN) of a `FeatureGroup`.
   *
   * @public
   */
  FeatureGroupArn?: string | undefined;

  /**
   * The name of the `FeatureGroup`.
   *
   * @public
   */
  FeatureGroupName?: string | undefined;

  /**
   * The name of the `Feature` whose value uniquely identifies a `Record` defined in the `FeatureGroup` `FeatureDefinitions`.
   *
   * @public
   */
  RecordIdentifierFeatureName?: string | undefined;

  /**
   * The name of the feature that stores the `EventTime` of a Record in a `FeatureGroup`.
   *
   * A `EventTime` is point in time when a new event occurs that corresponds to the creation or update of a `Record` in `FeatureGroup`. All `Records` in the `FeatureGroup` must have a corresponding `EventTime`.
   *
   * @public
   */
  EventTimeFeatureName?: string | undefined;

  /**
   * A list of `Feature`s. Each `Feature` must include a `FeatureName` and a `FeatureType`.
   *
   * Valid `FeatureType`s are `Integral`, `Fractional` and `String`.
   *
   * `FeatureName`s cannot be any of the following: `is_deleted`, `write_time`, `api_invocation_time`.
   *
   * You can create up to 2,500 `FeatureDefinition`s per `FeatureGroup`.
   *
   * @public
   */
  FeatureDefinitions?: FeatureDefinition[] | undefined;

  /**
   * The time a `FeatureGroup` was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A timestamp indicating the last time you updated the feature group.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Use this to specify the Amazon Web Services Key Management Service (KMS) Key ID, or `KMSKeyId`, for at rest data encryption. You can turn `OnlineStore` on or off by specifying the `EnableOnlineStore` flag at General Assembly.
   *
   * The default value is `False`.
   *
   * @public
   */
  OnlineStoreConfig?: OnlineStoreConfig | undefined;

  /**
   * The configuration of an `OfflineStore`.
   *
   * Provide an `OfflineStoreConfig` in a request to `CreateFeatureGroup` to create an `OfflineStore`.
   *
   * To encrypt an `OfflineStore` using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or `KMSKeyId`, in `S3StorageConfig`.
   *
   * @public
   */
  OfflineStoreConfig?: OfflineStoreConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM execution role used to create the feature group.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A `FeatureGroup` status.
   *
   * @public
   */
  FeatureGroupStatus?: FeatureGroupStatus | undefined;

  /**
   * The status of `OfflineStore`.
   *
   * @public
   */
  OfflineStoreStatus?: OfflineStoreStatus | undefined;

  /**
   * A value that indicates whether the feature group was updated successfully.
   *
   * @public
   */
  LastUpdateStatus?: LastUpdateStatus | undefined;

  /**
   * The reason that the `FeatureGroup` failed to be replicated in the `OfflineStore`. This is failure may be due to a failure to create a `FeatureGroup` in or delete a `FeatureGroup` from the `OfflineStore`.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * A free form description of a `FeatureGroup`.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Tags used to define a `FeatureGroup`.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The name, ARN, `CreationTime`, `FeatureGroup` values, `LastUpdatedTime` and `EnableOnlineStorage` status of a `FeatureGroup`.
 *
 * @public
 */
export interface FeatureGroupSummary {
  /**
   * The name of `FeatureGroup`.
   *
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * Unique identifier for the `FeatureGroup`.
   *
   * @public
   */
  FeatureGroupArn: string | undefined;

  /**
   * A timestamp indicating the time of creation time of the `FeatureGroup`.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The status of a FeatureGroup. The status can be any of the following: `Creating`, `Created`, `CreateFail`, `Deleting` or `DetailFail`.
   *
   * @public
   */
  FeatureGroupStatus?: FeatureGroupStatus | undefined;

  /**
   * Notifies you if replicating data into the `OfflineStore` has failed. Returns either: `Active` or `Blocked`.
   *
   * @public
   */
  OfflineStoreStatus?: OfflineStoreStatus | undefined;
}

/**
 * The metadata for a feature. It can either be metadata that you specify, or metadata that is updated automatically.
 *
 * @public
 */
export interface FeatureMetadata {
  /**
   * The Amazon Resource Number (ARN) of the feature group.
   *
   * @public
   */
  FeatureGroupArn?: string | undefined;

  /**
   * The name of the feature group containing the feature.
   *
   * @public
   */
  FeatureGroupName?: string | undefined;

  /**
   * The name of feature.
   *
   * @public
   */
  FeatureName?: string | undefined;

  /**
   * The data type of the feature.
   *
   * @public
   */
  FeatureType?: FeatureType | undefined;

  /**
   * A timestamp indicating when the feature was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A timestamp indicating when the feature was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * An optional description that you specify to better describe the feature.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Optional key-value pairs that you specify to better describe the feature.
   *
   * @public
   */
  Parameters?: FeatureParameter[] | undefined;
}

/**
 * A conditional statement for a search expression that includes a resource property, a Boolean operator, and a value. Resources that match the statement are returned in the results from the [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API.
 *
 * If you specify a `Value`, but not an `Operator`, SageMaker uses the equals operator.
 *
 * In search, there are several property types:
 *
 * - **Metrics**
 *
 *   To define a metric filter, enter a value using the form `"Metrics.<name>"`, where `<name>` is a metric name. For example, the following filter searches for training jobs with an `"accuracy"` metric greater than `"0.9"`:
 *
 *   `\{`
 *
 *   `"Name": "Metrics.accuracy",`
 *
 *   `"Operator": "GreaterThan",`
 *
 *   `"Value": "0.9"`
 *
 *   `\}`
 *
 * - **HyperParameters**
 *
 *   To define a hyperparameter filter, enter a value with the form `"HyperParameters.<name>"`. Decimal hyperparameter values are treated as a decimal in a comparison if the specified `Value` is also a decimal value. If the specified `Value` is an integer, the decimal hyperparameter values are treated as integers. For example, the following filter is satisfied by training jobs with a `"learning_rate"` hyperparameter that is less than `"0.5"`:
 *
 *   `\{`
 *
 *   `"Name": "HyperParameters.learning_rate",`
 *
 *   `"Operator": "LessThan",`
 *
 *   `"Value": "0.5"`
 *
 *   `\}`
 *
 * - **Tags**
 *
 *   To define a tag filter, enter a value with the form `Tags.<key>`.
 *
 * @public
 */
export interface Filter {
  /**
   * A resource property name. For example, `TrainingJobName`. For valid property names, see [SearchRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SearchRecord.html). You must specify a valid property for the resource.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A Boolean binary operator that is used to evaluate the filter. The operator field contains one of the following values:
   *
   * - **Equals**
   *
   *   The value of `Name` equals `Value`.
   *
   * - **NotEquals**
   *
   *   The value of `Name` doesn't equal `Value`.
   *
   * - **Exists**
   *
   *   The `Name` property exists.
   *
   * - **NotExists**
   *
   *   The `Name` property does not exist.
   *
   * - **GreaterThan**
   *
   *   The value of `Name` is greater than `Value`. Not supported for text properties.
   *
   * - **GreaterThanOrEqualTo**
   *
   *   The value of `Name` is greater than or equal to `Value`. Not supported for text properties.
   *
   * - **LessThan**
   *
   *   The value of `Name` is less than `Value`. Not supported for text properties.
   *
   * - **LessThanOrEqualTo**
   *
   *   The value of `Name` is less than or equal to `Value`. Not supported for text properties.
   *
   * - **In**
   *
   *   The value of `Name` is one of the comma delimited strings in `Value`. Only supported for text properties.
   *
   * - **Contains**
   *
   *   The value of `Name` contains the string `Value`. Only supported for text properties.
   *
   *   A `SearchExpression` can include the `Contains` operator multiple times when the value of `Name` is one of the following:
   *
   *   - `Experiment.DisplayName`
   *   - `Experiment.ExperimentName`
   *   - `Experiment.Tags`
   *   - `Trial.DisplayName`
   *   - `Trial.TrialName`
   *   - `Trial.Tags`
   *   - `TrialComponent.DisplayName`
   *   - `TrialComponent.TrialComponentName`
   *   - `TrialComponent.Tags`
   *   - `TrialComponent.InputArtifacts`
   *   - `TrialComponent.OutputArtifacts`
   *
   *   A `SearchExpression` can include only one `Contains` operator for all other values of `Name`. In these cases, if you include multiple `Contains` operators in the `SearchExpression`, the result is the following error message: "`'CONTAINS' operator usage limit of 1 exceeded.`"
   *
   * @public
   */
  Operator?: Operator | undefined;

  /**
   * A value used with `Name` and `Operator` to determine which resources satisfy the filter's condition. For numerical properties, `Value` must be an integer or floating-point decimal. For timestamp properties, `Value` must be an ISO 8601 date-time string of the following format: `YYYY-mm-dd'T'HH:MM:SS`.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Contains summary information about the flow definition.
 *
 * @public
 */
export interface FlowDefinitionSummary {
  /**
   * The name of the flow definition.
   *
   * @public
   */
  FlowDefinitionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow definition.
   *
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * The status of the flow definition. Valid values:
   *
   * @public
   */
  FlowDefinitionStatus: FlowDefinitionStatus | undefined;

  /**
   * The timestamp when SageMaker created the flow definition.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is `Failed`.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * The result of the selector that identifies an iteration of a ForEach step.
 *
 * @public
 */
export interface ForEachSelectorResult {
  /**
   * The name of the step associated with the iteration.
   *
   * @public
   */
  StepName?: string | undefined;

  /**
   * The index of the iteration within the ForEach step.
   *
   * @public
   */
  Index?: number | undefined;
}

/**
 * The status, the iteration-step counts, and the selector information for a ForEach step execution.
 *
 * @public
 */
export interface ForEachStepMetadata {
  /**
   * The status of the ForEach step execution.
   *
   * @public
   */
  Status?: ForEachStatus | undefined;

  /**
   * The number of input items that the ForEach step iterates over.
   *
   * @public
   */
  InputItemCount?: number | undefined;

  /**
   * The total number of steps generated across all iterations of the ForEach step.
   *
   * @public
   */
  TotalStepCount?: number | undefined;

  /**
   * The number of iteration steps that completed successfully.
   *
   * @public
   */
  SucceededStepCount?: number | undefined;

  /**
   * The number of iteration steps that failed.
   *
   * @public
   */
  FailedStepCount?: number | undefined;

  /**
   * The number of iteration steps that were stopped.
   *
   * @public
   */
  StoppedStepCount?: number | undefined;

  /**
   * Identifies the body step and iteration selected within the ForEach step.
   *
   * @public
   */
  Selector?: ForEachSelectorResult | undefined;
}

/**
 * @public
 */
export interface GetDeviceFleetReportRequest {
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
export interface GetDeviceFleetReportResponse {
  /**
   * The Amazon Resource Name (ARN) of the device.
   *
   * @public
   */
  DeviceFleetArn: string | undefined;

  /**
   * The name of the fleet.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * The output configuration for storing sample data collected by the fleet.
   *
   * @public
   */
  OutputConfig?: EdgeOutputConfig | undefined;

  /**
   * Description of the fleet.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Timestamp of when the report was generated.
   *
   * @public
   */
  ReportGenerated?: Date | undefined;

  /**
   * Status of devices.
   *
   * @public
   */
  DeviceStats?: DeviceStats | undefined;

  /**
   * The versions of Edge Manager agent deployed on the fleet.
   *
   * @public
   */
  AgentVersions?: AgentVersion[] | undefined;

  /**
   * Status of model on device.
   *
   * @public
   */
  ModelStats?: EdgeModelStat[] | undefined;
}

/**
 * @public
 */
export interface GetLineageGroupPolicyRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the lineage group.
   *
   * @public
   */
  LineageGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetLineageGroupPolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the lineage group.
   *
   * @public
   */
  LineageGroupArn?: string | undefined;

  /**
   * The resource policy that gives access to the lineage group in another account.
   *
   * @public
   */
  ResourcePolicy?: string | undefined;
}

/**
 * @public
 */
export interface GetModelPackageGroupPolicyInput {
  /**
   * The name of the model group for which to get the resource policy.
   *
   * @public
   */
  ModelPackageGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetModelPackageGroupPolicyOutput {
  /**
   * The resource policy for the model group.
   *
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
 */
export interface GetSagemakerServicecatalogPortfolioStatusOutput {
  /**
   * Whether Service Catalog is enabled or disabled in SageMaker.
   *
   * @public
   */
  Status?: SagemakerServicecatalogStatus | undefined;
}

/**
 * An object where you specify the anticipated traffic pattern for an endpoint.
 *
 * @public
 */
export interface ScalingPolicyObjective {
  /**
   * The minimum number of expected requests to your endpoint per minute.
   *
   * @public
   */
  MinInvocationsPerMinute?: number | undefined;

  /**
   * The maximum number of expected requests to your endpoint per minute.
   *
   * @public
   */
  MaxInvocationsPerMinute?: number | undefined;
}

/**
 * @public
 */
export interface GetScalingConfigurationRecommendationRequest {
  /**
   * The name of a previously completed Inference Recommender job.
   *
   * @public
   */
  InferenceRecommendationsJobName: string | undefined;

  /**
   * The recommendation ID of a previously completed inference recommendation. This ID should come from one of the recommendations returned by the job specified in the `InferenceRecommendationsJobName` field.
   *
   * Specify either this field or the `EndpointName` field.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * The name of an endpoint benchmarked during a previously completed inference recommendation job. This name should come from one of the recommendations returned by the job specified in the `InferenceRecommendationsJobName` field.
   *
   * Specify either this field or the `RecommendationId` field.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * The percentage of how much utilization you want an instance to use before autoscaling. The default value is 50%.
   *
   * @public
   */
  TargetCpuUtilizationPerCore?: number | undefined;

  /**
   * An object where you specify the anticipated traffic pattern for an endpoint.
   *
   * @public
   */
  ScalingPolicyObjective?: ScalingPolicyObjective | undefined;
}

/**
 * The metric for a scaling policy.
 *
 * @public
 */
export interface ScalingPolicyMetric {
  /**
   * The number of invocations sent to a model, normalized by `InstanceCount` in each ProductionVariant. `1/numberOfInstances` is sent as the value on each request, where `numberOfInstances` is the number of active instances for the ProductionVariant behind the endpoint at the time of the request.
   *
   * @public
   */
  InvocationsPerInstance?: number | undefined;

  /**
   * The interval of time taken by a model to respond as viewed from SageMaker. This interval includes the local communication times taken to send the request and to fetch the response from the container of a model and the time taken to complete the inference in the container.
   *
   * @public
   */
  ModelLatency?: number | undefined;
}

/**
 * @public
 */
export interface GetScalingConfigurationRecommendationResponse {
  /**
   * The name of a previously completed Inference Recommender job.
   *
   * @public
   */
  InferenceRecommendationsJobName?: string | undefined;

  /**
   * The recommendation ID of a previously completed inference recommendation.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * The name of an endpoint benchmarked during a previously completed Inference Recommender job.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * The percentage of how much utilization you want an instance to use before autoscaling, which you specified in the request. The default value is 50%.
   *
   * @public
   */
  TargetCpuUtilizationPerCore?: number | undefined;

  /**
   * An object representing the anticipated traffic pattern for an endpoint that you specified in the request.
   *
   * @public
   */
  ScalingPolicyObjective?: ScalingPolicyObjective | undefined;

  /**
   * An object with a list of metrics that were benchmarked during the previously completed Inference Recommender job.
   *
   * @public
   */
  Metric?: ScalingPolicyMetric | undefined;

  /**
   * An object with the recommended values for you to specify when creating an autoscaling policy.
   *
   * @public
   */
  DynamicScalingConfiguration?: DynamicScalingConfiguration | undefined;
}

/**
 * Part of the `SuggestionQuery` type. Specifies a hint for retrieving property names that begin with the specified text.
 *
 * @public
 */
export interface PropertyNameQuery {
  /**
   * Text that begins a property's name.
   *
   * @public
   */
  PropertyNameHint: string | undefined;
}

/**
 * Specified in the [GetSearchSuggestions](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_GetSearchSuggestions.html) request. Limits the property names that are included in the response.
 *
 * @public
 */
export interface SuggestionQuery {
  /**
   * Defines a property name hint. Only property names that begin with the specified hint are included in the response.
   *
   * @public
   */
  PropertyNameQuery?: PropertyNameQuery | undefined;
}

/**
 * @public
 */
export interface GetSearchSuggestionsRequest {
  /**
   * The name of the SageMaker resource to search for.
   *
   * @public
   */
  Resource: ResourceType | undefined;

  /**
   * Limits the property names that are included in the response.
   *
   * @public
   */
  SuggestionQuery?: SuggestionQuery | undefined;
}

/**
 * A property name returned from a `GetSearchSuggestions` call that specifies a value in the `PropertyNameQuery` field.
 *
 * @public
 */
export interface PropertyNameSuggestion {
  /**
   * A suggested property name based on what you entered in the search textbox in the SageMaker console.
   *
   * @public
   */
  PropertyName?: string | undefined;
}

/**
 * @public
 */
export interface GetSearchSuggestionsResponse {
  /**
   * A list of property names for a `Resource` that match a `SuggestionQuery`.
   *
   * @public
   */
  PropertyNameSuggestions?: PropertyNameSuggestion[] | undefined;
}

/**
 * Specifies configuration details for a Git repository when the repository is updated.
 *
 * @public
 */
export interface GitConfigForUpdate {
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
 * Contains information about a hub content resource, including its name, version, type, associated documents, dependencies, and status, as returned by a search result.
 *
 * @public
 */
export interface HubContent {
  /**
   * The name of the hub content.
   *
   * @public
   */
  HubContentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hub content.
   *
   * @public
   */
  HubContentArn: string | undefined;

  /**
   * The version of the hub content.
   *
   * @public
   */
  HubContentVersion: string | undefined;

  /**
   * The type of hub content.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * The document schema version for the hub content.
   *
   * @public
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * The name of the hub that contains the content.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hub that contains the content.
   *
   * @public
   */
  HubArn: string | undefined;

  /**
   * The display name of the hub content.
   *
   * @public
   */
  HubContentDisplayName?: string | undefined;

  /**
   * A description of the hub content.
   *
   * @public
   */
  HubContentDescription?: string | undefined;

  /**
   * A string that provides a description of the hub content. This string can include links, tables, and standard markdown formatting.
   *
   * @public
   */
  HubContentMarkdown?: string | undefined;

  /**
   * The hub content document that describes information about the hub content such as type, associated containers, scripts, and more.
   *
   * @public
   */
  HubContentDocument?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the public hub content.
   *
   * @public
   */
  SageMakerPublicHubContentArn?: string | undefined;

  /**
   * The minimum version of the hub content.
   *
   * @public
   */
  ReferenceMinVersion?: string | undefined;

  /**
   * The support status of the hub content.
   *
   * @public
   */
  SupportStatus?: HubContentSupportStatus | undefined;

  /**
   * The searchable keywords for the hub content.
   *
   * @public
   */
  HubContentSearchKeywords?: string[] | undefined;

  /**
   * The location of any dependencies that the hub content has, such as scripts, model artifacts, datasets, or notebooks.
   *
   * @public
   */
  HubContentDependencies?: HubContentDependency[] | undefined;

  /**
   * The status of the hub content.
   *
   * @public
   */
  HubContentStatus: HubContentStatus | undefined;

  /**
   * The failure reason if importing hub content failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The date and time that hub content was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The last modified time of the hub content.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Any tags associated with the hub content.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Information about hub content.
 *
 * @public
 */
export interface HubContentInfo {
  /**
   * The name of the hub content.
   *
   * @public
   */
  HubContentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hub content.
   *
   * @public
   */
  HubContentArn: string | undefined;

  /**
   * The ARN of the public hub content.
   *
   * @public
   */
  SageMakerPublicHubContentArn?: string | undefined;

  /**
   * The version of the hub content.
   *
   * @public
   */
  HubContentVersion: string | undefined;

  /**
   * The type of hub content.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * The version of the hub content document schema.
   *
   * @public
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * The display name of the hub content.
   *
   * @public
   */
  HubContentDisplayName?: string | undefined;

  /**
   * A description of the hub content.
   *
   * @public
   */
  HubContentDescription?: string | undefined;

  /**
   * The support status of the hub content.
   *
   * @public
   */
  SupportStatus?: HubContentSupportStatus | undefined;

  /**
   * The searchable keywords for the hub content.
   *
   * @public
   */
  HubContentSearchKeywords?: string[] | undefined;

  /**
   * The status of the hub content.
   *
   * @public
   */
  HubContentStatus: HubContentStatus | undefined;

  /**
   * The date and time that the hub content was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time when the hub content was originally created, before any updates or revisions.
   *
   * @public
   */
  OriginalCreationTime?: Date | undefined;
}

/**
 * Information about a hub.
 *
 * @public
 */
export interface HubInfo {
  /**
   * The name of the hub.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the hub.
   *
   * @public
   */
  HubArn: string | undefined;

  /**
   * The display name of the hub.
   *
   * @public
   */
  HubDisplayName?: string | undefined;

  /**
   * A description of the hub.
   *
   * @public
   */
  HubDescription?: string | undefined;

  /**
   * The searchable keywords for the hub.
   *
   * @public
   */
  HubSearchKeywords?: string[] | undefined;

  /**
   * The status of the hub.
   *
   * @public
   */
  HubStatus: HubStatus | undefined;

  /**
   * The date and time that the hub was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the hub was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * Container for human task user interface information.
 *
 * @public
 */
export interface HumanTaskUiSummary {
  /**
   * The name of the human task user interface.
   *
   * @public
   */
  HumanTaskUiName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the human task user interface.
   *
   * @public
   */
  HumanTaskUiArn: string | undefined;

  /**
   * A timestamp when SageMaker created the human task user interface.
   *
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * An entity returned by the [SearchRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SearchRecord.html) API containing the properties of a hyperparameter tuning job.
 *
 * @public
 */
export interface HyperParameterTuningJobSearchEntity {
  /**
   * The name of a hyperparameter tuning job.
   *
   * @public
   */
  HyperParameterTuningJobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a hyperparameter tuning job.
   *
   * @public
   */
  HyperParameterTuningJobArn?: string | undefined;

  /**
   * Configures a hyperparameter tuning job.
   *
   * @public
   */
  HyperParameterTuningJobConfig?: HyperParameterTuningJobConfig | undefined;

  /**
   * Defines the training jobs launched by a hyperparameter tuning job.
   *
   * @public
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition | undefined;

  /**
   * The job definitions included in a hyperparameter tuning job.
   *
   * @public
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[] | undefined;

  /**
   * The status of a hyperparameter tuning job.
   *
   * @public
   */
  HyperParameterTuningJobStatus?: HyperParameterTuningJobStatus | undefined;

  /**
   * The time that a hyperparameter tuning job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time that a hyperparameter tuning job ended.
   *
   * @public
   */
  HyperParameterTuningEndTime?: Date | undefined;

  /**
   * The time that a hyperparameter tuning job was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
   *
   * @public
   */
  TrainingJobStatusCounters?: TrainingJobStatusCounters | undefined;

  /**
   * Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
   *
   * @public
   */
  ObjectiveStatusCounters?: ObjectiveStatusCounters | undefined;

  /**
   * The container for the summary information about a training job.
   *
   * @public
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary | undefined;

  /**
   * The container for the summary information about a training job.
   *
   * @public
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary | undefined;

  /**
   * Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.
   *
   * All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.
   *
   * > **Note:** All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.
   *
   * @public
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig | undefined;

  /**
   * The error that was created when a hyperparameter tuning job failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Information about either a current or completed hyperparameter tuning job.
   *
   * @public
   */
  TuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails | undefined;

  /**
   * The total amount of resources consumed by a hyperparameter tuning job.
   *
   * @public
   */
  ConsumedResources?: HyperParameterTuningJobConsumedResources | undefined;

  /**
   * The tags associated with a hyperparameter tuning job. For more information see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Provides summary information about a hyperparameter tuning job.
 *
 * @public
 */
export interface HyperParameterTuningJobSummary {
  /**
   * The name of the tuning job.
   *
   * @public
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the tuning job.
   *
   * @public
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * The status of the tuning job.
   *
   * @public
   */
  HyperParameterTuningJobStatus: HyperParameterTuningJobStatus | undefined;

  /**
   * Specifies the search strategy hyperparameter tuning uses to choose which hyperparameters to evaluate at each iteration.
   *
   * @public
   */
  Strategy: HyperParameterTuningJobStrategyType | undefined;

  /**
   * The date and time that the tuning job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the tuning job ended.
   *
   * @public
   */
  HyperParameterTuningEndTime?: Date | undefined;

  /**
   * The date and time that the tuning job was modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The [TrainingJobStatusCounters](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobStatusCounters.html) object that specifies the numbers of training jobs, categorized by status, that this tuning job launched.
   *
   * @public
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * The [ObjectiveStatusCounters](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ObjectiveStatusCounters.html) object that specifies the numbers of training jobs, categorized by objective metric status, that this tuning job launched.
   *
   * @public
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * The [ResourceLimits](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ResourceLimits.html) object that specifies the maximum number of training jobs and parallel training jobs allowed for this tuning job.
   *
   * @public
   */
  ResourceLimits?: ResourceLimits | undefined;
}

/**
 * A SageMaker AI image. A SageMaker AI image represents a set of container images that are derived from a common base container image. Each of these container images is represented by a SageMaker AI `ImageVersion`.
 *
 * @public
 */
export interface Image {
  /**
   * When the image was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The description of the image.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the image as displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * When a create, update, or delete operation fails, the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The ARN of the image.
   *
   * @public
   */
  ImageArn: string | undefined;

  /**
   * The name of the image.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * The status of the image.
   *
   * @public
   */
  ImageStatus: ImageStatus | undefined;

  /**
   * When the image was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * A version of a SageMaker AI `Image`. A version represents an existing container image.
 *
 * @public
 */
export interface ImageVersion {
  /**
   * When the version was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * When a create or delete operation fails, the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The ARN of the image the version is based on.
   *
   * @public
   */
  ImageArn: string | undefined;

  /**
   * The ARN of the version.
   *
   * @public
   */
  ImageVersionArn: string | undefined;

  /**
   * The status of the version.
   *
   * @public
   */
  ImageVersionStatus: ImageVersionStatus | undefined;

  /**
   * When the version was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The version number.
   *
   * @public
   */
  Version: number | undefined;
}

/**
 * @public
 */
export interface ImportHubContentRequest {
  /**
   * The name of the hub content to import.
   *
   * @public
   */
  HubContentName: string | undefined;

  /**
   * The version of the hub content to import.
   *
   * @public
   */
  HubContentVersion?: string | undefined;

  /**
   * The type of hub content to import.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * The version of the hub content schema to import.
   *
   * @public
   */
  DocumentSchemaVersion: string | undefined;

  /**
   * The name of the hub to import content into.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The display name of the hub content to import.
   *
   * @public
   */
  HubContentDisplayName?: string | undefined;

  /**
   * A description of the hub content to import.
   *
   * @public
   */
  HubContentDescription?: string | undefined;

  /**
   * A string that provides a description of the hub content. This string can include links, tables, and standard markdown formating.
   *
   * @public
   */
  HubContentMarkdown?: string | undefined;

  /**
   * The hub content document that describes information about the hub content such as type, associated containers, scripts, and more.
   *
   * @public
   */
  HubContentDocument: string | undefined;

  /**
   * The status of the hub content resource.
   *
   * @public
   */
  SupportStatus?: HubContentSupportStatus | undefined;

  /**
   * The searchable keywords of the hub content.
   *
   * @public
   */
  HubContentSearchKeywords?: string[] | undefined;

  /**
   * Any tags associated with the hub content.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportHubContentResponse {
  /**
   * The ARN of the hub that the content was imported into.
   *
   * @public
   */
  HubArn: string | undefined;

  /**
   * The ARN of the hub content that was imported.
   *
   * @public
   */
  HubContentArn: string | undefined;
}

/**
 * The metadata of the inference component.
 *
 * @public
 */
export interface InferenceComponentMetadata {
  /**
   * The Amazon Resource Name (ARN) of the inference component.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * A summary of the properties of an inference component.
 *
 * @public
 */
export interface InferenceComponentSummary {
  /**
   * The time when the inference component was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the inference component.
   *
   * @public
   */
  InferenceComponentArn: string | undefined;

  /**
   * The name of the inference component.
   *
   * @public
   */
  InferenceComponentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint that hosts the inference component.
   *
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * The name of the endpoint that hosts the inference component.
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * The name of the production variant that hosts the inference component.
   *
   * @public
   */
  VariantName: string | undefined;

  /**
   * The status of the inference component.
   *
   * @public
   */
  InferenceComponentStatus?: InferenceComponentStatus | undefined;

  /**
   * The time when the inference component was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;
}

/**
 * Lists a summary of properties of an inference experiment.
 *
 * @public
 */
export interface InferenceExperimentSummary {
  /**
   * The name of the inference experiment.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the inference experiment.
   *
   * @public
   */
  Type: InferenceExperimentType | undefined;

  /**
   * The duration for which the inference experiment ran or will run.
   *
   * The maximum duration that you can set for an inference experiment is 30 days.
   *
   * @public
   */
  Schedule?: InferenceExperimentSchedule | undefined;

  /**
   * The status of the inference experiment.
   *
   * @public
   */
  Status: InferenceExperimentStatus | undefined;

  /**
   * The error message for the inference experiment status result.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The description of the inference experiment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp at which the inference experiment was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The timestamp at which the inference experiment was completed.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * The timestamp when you last modified the inference experiment.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * A structure that contains a list of recommendation jobs.
 *
 * @public
 */
export interface InferenceRecommendationsJob {
  /**
   * The name of the job.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The job description.
   *
   * @public
   */
  JobDescription: string | undefined;

  /**
   * The recommendation job type.
   *
   * @public
   */
  JobType: RecommendationJobType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recommendation job.
   *
   * @public
   */
  JobArn: string | undefined;

  /**
   * The status of the job.
   *
   * @public
   */
  Status: RecommendationJobStatus | undefined;

  /**
   * A timestamp that shows when the job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp that shows when the job completed.
   *
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A timestamp that shows when the job was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * If the job fails, provides information why the job failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The name of the created model.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The Amazon Simple Storage Service (Amazon S3) path where the sample payload is stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
   *
   * @public
   */
  SamplePayloadUrl?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a versioned model package.
   *
   * @public
   */
  ModelPackageVersionArn?: string | undefined;
}

/**
 * The details for a specific benchmark from an Inference Recommender job.
 *
 * @public
 */
export interface RecommendationJobInferenceBenchmark {
  /**
   * The metrics of recommendations.
   *
   * @public
   */
  Metrics?: RecommendationMetrics | undefined;

  /**
   * The metrics for an existing endpoint compared in an Inference Recommender job.
   *
   * @public
   */
  EndpointMetrics?: InferenceMetrics | undefined;

  /**
   * The endpoint configuration made by Inference Recommender during a recommendation job.
   *
   * @public
   */
  EndpointConfiguration?: EndpointOutputConfiguration | undefined;

  /**
   * Defines the model configuration. Includes the specification name and environment parameters.
   *
   * @public
   */
  ModelConfiguration: ModelConfiguration | undefined;

  /**
   * The reason why a benchmark failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * A timestamp that shows when the benchmark completed.
   *
   * @public
   */
  InvocationEndTime?: Date | undefined;

  /**
   * A timestamp that shows when the benchmark started.
   *
   * @public
   */
  InvocationStartTime?: Date | undefined;
}

/**
 * A returned array object for the `Steps` response field in the [ListInferenceRecommendationsJobSteps](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListInferenceRecommendationsJobSteps.html) API command.
 *
 * @public
 */
export interface InferenceRecommendationsJobStep {
  /**
   * The type of the subtask.
   *
   * `BENCHMARK`: Evaluate the performance of your model on different instance types.
   *
   * @public
   */
  StepType: RecommendationStepType | undefined;

  /**
   * The name of the Inference Recommender job.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The current status of the benchmark.
   *
   * @public
   */
  Status: RecommendationJobStatus | undefined;

  /**
   * The details for a specific benchmark.
   *
   * @public
   */
  InferenceBenchmark?: RecommendationJobInferenceBenchmark | undefined;
}

/**
 * The context for an iteration of a ForEach step.
 *
 * @public
 */
export interface IterationContext {
  /**
   * The name of the ForEach step that generated this iteration.
   *
   * @public
   */
  ParentStepName?: string | undefined;

  /**
   * The index of the iteration within the ForEach step.
   *
   * @public
   */
  Index?: number | undefined;

  /**
   * The input item that is being processed in this iteration.
   *
   * @public
   */
  Item?: string | undefined;
}

/**
 * The properties of a job returned by the [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API.
 *
 * @public
 */
export interface Job {
  /**
   * The name of the job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  JobArn?: string | undefined;

  /**
   * The ARN of the IAM role associated with the job.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The category of the job.
   *
   * @public
   */
  JobCategory?: JobCategory | undefined;

  /**
   * The schema version used for the job configuration document.
   *
   * @public
   */
  JobConfigSchemaVersion?: string | undefined;

  /**
   * The JSON configuration document for the job.
   *
   * @public
   */
  JobConfigDocument?: string | undefined;

  /**
   * The date and time that the job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time that the job was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The date and time that the job ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The current status of the job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * The detailed secondary status of the job, providing more granular information about the job's progress.
   *
   * @public
   */
  SecondaryStatus?: JobSecondaryStatus | undefined;

  /**
   * A list of secondary status transitions for the job, with timestamps and optional status messages.
   *
   * @public
   */
  SecondaryStatusTransitions?: JobSecondaryStatusTransition[] | undefined;

  /**
   * If the job failed, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The tags associated with the job.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Provides summary information about a job configuration schema version.
 *
 * @public
 */
export interface JobConfigSchemaVersionSummary {
  /**
   * The version of the job configuration schema.
   *
   * @public
   */
  JobConfigSchemaVersion: string | undefined;
}

/**
 * Metadata for a SageMaker job step.
 *
 * @public
 */
export interface JobStepMetadata {
  /**
   * The Amazon Resource Name (ARN) of the SageMaker job that was run by this step execution.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Provides summary information about a job, returned by the `ListJobs` operation. Use `DescribeJob` to get full details for a specific job.
 *
 * @public
 */
export interface JobSummary {
  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  JobArn: string | undefined;

  /**
   * The name of the job.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The category of the job.
   *
   * @public
   */
  JobCategory: JobCategory | undefined;

  /**
   * The current status of the job.
   *
   * @public
   */
  JobStatus: JobStatus | undefined;

  /**
   * The secondary status of the job, providing more granular information about the job's progress. Secondary statuses may change between releases.
   *
   * @public
   */
  JobSecondaryStatus: JobSecondaryStatus | undefined;

  /**
   * The date and time that the job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the job was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The date and time that the job ended.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * Provides counts for human-labeled tasks in the labeling job.
 *
 * @public
 */
export interface LabelCountersForWorkteam {
  /**
   * The total number of data objects labeled by a human worker.
   *
   * @public
   */
  HumanLabeled?: number | undefined;

  /**
   * The total number of data objects that need to be labeled by a human worker.
   *
   * @public
   */
  PendingHuman?: number | undefined;

  /**
   * The total number of tasks in the labeling job.
   *
   * @public
   */
  Total?: number | undefined;
}

/**
 * Provides summary information for a work team.
 *
 * @public
 */
export interface LabelingJobForWorkteamSummary {
  /**
   * The name of the labeling job that the work team is assigned to.
   *
   * @public
   */
  LabelingJobName?: string | undefined;

  /**
   * A unique identifier for a labeling job. You can use this to refer to a specific labeling job.
   *
   * @public
   */
  JobReferenceCode: string | undefined;

  /**
   * The Amazon Web Services account ID of the account used to start the labeling job.
   *
   * @public
   */
  WorkRequesterAccountId: string | undefined;

  /**
   * The date and time that the labeling job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Provides information about the progress of a labeling job.
   *
   * @public
   */
  LabelCounters?: LabelCountersForWorkteam | undefined;

  /**
   * The configured number of workers per data object.
   *
   * @public
   */
  NumberOfHumanWorkersPerDataObject?: number | undefined;
}

/**
 * Provides summary information about a labeling job.
 *
 * @public
 */
export interface LabelingJobSummary {
  /**
   * The name of the labeling job.
   *
   * @public
   */
  LabelingJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) assigned to the labeling job when it was created.
   *
   * @public
   */
  LabelingJobArn: string | undefined;

  /**
   * The date and time that the job was created (timestamp).
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the job was last modified (timestamp).
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The current status of the labeling job.
   *
   * @public
   */
  LabelingJobStatus: LabelingJobStatus | undefined;

  /**
   * Counts showing the progress of the labeling job.
   *
   * @public
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * The Amazon Resource Name (ARN) of the work team assigned to the job.
   *
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a Lambda function. The function is run before each data object is sent to a worker.
   *
   * @public
   */
  PreHumanTaskLambdaArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function used to consolidate the annotations from individual workers into a label for a data object. For more information, see [Annotation Consolidation](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html).
   *
   * @public
   */
  AnnotationConsolidationLambdaArn?: string | undefined;

  /**
   * If the `LabelingJobStatus` field is `Failed`, this field contains a description of the error.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The location of the output produced by the labeling job.
   *
   * @public
   */
  LabelingJobOutput?: LabelingJobOutput | undefined;

  /**
   * Input configuration for the labeling job.
   *
   * @public
   */
  InputConfig?: LabelingJobInputConfig | undefined;
}

/**
 * Metadata for a Lambda step.
 *
 * @public
 */
export interface LambdaStepMetadata {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A list of the output parameters of the Lambda step.
   *
   * @public
   */
  OutputParameters?: OutputParameter[] | undefined;
}

/**
 * Lists a summary of the properties of a lineage group. A lineage group provides a group of shareable lineage entity resources.
 *
 * @public
 */
export interface LineageGroupSummary {
  /**
   * The Amazon Resource Name (ARN) of the lineage group resource.
   *
   * @public
   */
  LineageGroupArn?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the lineage group.
   *
   * @public
   */
  LineageGroupName?: string | undefined;

  /**
   * The display name of the lineage group summary.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The creation time of the lineage group summary.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last modified time of the lineage group summary.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * The metadata that tracks relationships between ML artifacts, actions, and contexts.
 *
 * @public
 */
export interface LineageMetadata {
  /**
   * The Amazon Resource Name (ARN) of the lineage action.
   *
   * @public
   */
  ActionArns?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lineage artifact.
   *
   * @public
   */
  ArtifactArns?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lineage context.
   *
   * @public
   */
  ContextArns?: Record<string, string> | undefined;

  /**
   * The lineage associations.
   *
   * @public
   */
  Associations?: AssociationInfo[] | undefined;
}

/**
 * @public
 */
export interface ListActionsRequest {
  /**
   * A filter that returns only actions with the specified source URI.
   *
   * @public
   */
  SourceUri?: string | undefined;

  /**
   * A filter that returns only actions of the specified type.
   *
   * @public
   */
  ActionType?: string | undefined;

  /**
   * A filter that returns only actions created on or after the specified time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * A filter that returns only actions created on or before the specified time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The property used to sort results. The default value is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortActionsBy | undefined;

  /**
   * The sort order. The default value is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the previous call to `ListActions` didn't return the full set of actions, the call returns a token for getting the next set of actions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of actions to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListActionsResponse {
  /**
   * A list of actions and their properties.
   *
   * @public
   */
  ActionSummaries?: ActionSummary[] | undefined;

  /**
   * A token for getting the next set of actions, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIBenchmarkJobsRequest {
  /**
   * The maximum number of benchmark jobs to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous call to `ListAIBenchmarkJobs` didn't return the full set of jobs, the call returns a token for getting the next set.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A string in the job name. This filter returns only jobs whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only benchmark jobs with the specified status.
   *
   * @public
   */
  StatusEquals?: AIBenchmarkJobStatus | undefined;

  /**
   * A filter that returns only jobs created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only jobs created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: ListAIBenchmarkJobsSortBy | undefined;

  /**
   * The sort order for results. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListAIBenchmarkJobsResponse {
  /**
   * An array of `AIBenchmarkJobSummary` objects, one for each benchmark job that matches the specified filters.
   *
   * @public
   */
  AIBenchmarkJobs: AIBenchmarkJobSummary[] | undefined;

  /**
   * If the response is truncated, Amazon SageMaker AI returns this token. To retrieve the next set of jobs, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIRecommendationJobsRequest {
  /**
   * The maximum number of recommendation jobs to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous call to `ListAIRecommendationJobs` didn't return the full set of jobs, the call returns a token for getting the next set.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A string in the job name. This filter returns only jobs whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only recommendation jobs with the specified status.
   *
   * @public
   */
  StatusEquals?: AIRecommendationJobStatus | undefined;

  /**
   * A filter that returns only jobs created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only jobs created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: ListAIRecommendationJobsSortBy | undefined;

  /**
   * The sort order for results. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListAIRecommendationJobsResponse {
  /**
   * An array of `AIRecommendationJobSummary` objects, one for each recommendation job that matches the specified filters.
   *
   * @public
   */
  AIRecommendationJobs: AIRecommendationJobSummary[] | undefined;

  /**
   * If the response is truncated, Amazon SageMaker AI returns this token. To retrieve the next set of jobs, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAIWorkloadConfigsRequest {
  /**
   * The maximum number of AI workload configurations to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous call to `ListAIWorkloadConfigs` didn't return the full set of configurations, the call returns a token for getting the next set of configurations.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A string in the configuration name. This filter returns only configurations whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only configurations created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only configurations created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: ListAIWorkloadConfigsSortBy | undefined;

  /**
   * The sort order for results. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListAIWorkloadConfigsResponse {
  /**
   * An array of `AIWorkloadConfigSummary` objects, one for each AI workload configuration that matches the specified filters.
   *
   * @public
   */
  AIWorkloadConfigs: AIWorkloadConfigSummary[] | undefined;

  /**
   * If the response is truncated, Amazon SageMaker AI returns this token. To retrieve the next set of configurations, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAlgorithmsInput {
  /**
   * A filter that returns only algorithms created after the specified time (timestamp).
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only algorithms created before the specified time (timestamp).
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The maximum number of algorithms to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A string in the algorithm name. This filter returns only algorithms whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * If the response to a previous `ListAlgorithms` request was truncated, the response includes a `NextToken`. To retrieve the next set of algorithms, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The parameter by which to sort the results. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: AlgorithmSortBy | undefined;

  /**
   * The sort order for the results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListAlgorithmsOutput {
  /**
   * &gt;An array of `AlgorithmSummary` objects, each of which lists an algorithm.
   *
   * @public
   */
  AlgorithmSummaryList: AlgorithmSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of algorithms, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAliasesRequest {
  /**
   * The name of the image.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * The alias of the image version.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The version of the image. If image version is not specified, the aliases of all versions of the image are listed.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The maximum number of aliases to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous call to `ListAliases` didn't return the full set of aliases, the call returns a token for retrieving the next set of aliases.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAliasesResponse {
  /**
   * A list of SageMaker AI image version aliases.
   *
   * @public
   */
  SageMakerImageVersionAliases?: string[] | undefined;

  /**
   * A token for getting the next set of aliases, if more aliases exist.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppImageConfigsRequest {
  /**
   * The total number of items to return in the response. If the total number of items available is more than the value specified, a `NextToken` is provided in the response. To resume pagination, provide the `NextToken` value in the as part of a subsequent call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous call to `ListImages` didn't return the full set of AppImageConfigs, the call returns a token for getting the next set of AppImageConfigs.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A filter that returns only AppImageConfigs whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only AppImageConfigs created on or before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only AppImageConfigs created on or after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only AppImageConfigs modified on or before the specified time.
   *
   * @public
   */
  ModifiedTimeBefore?: Date | undefined;

  /**
   * A filter that returns only AppImageConfigs modified on or after the specified time.
   *
   * @public
   */
  ModifiedTimeAfter?: Date | undefined;

  /**
   * The property used to sort results. The default value is `CreationTime`.
   *
   * @public
   */
  SortBy?: AppImageConfigSortKey | undefined;

  /**
   * The sort order. The default value is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListAppImageConfigsResponse {
  /**
   * A token for getting the next set of AppImageConfigs, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of AppImageConfigs and their properties.
   *
   * @public
   */
  AppImageConfigs?: AppImageConfigDetails[] | undefined;
}

/**
 * @public
 */
export interface ListAppsRequest {
  /**
   * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * This parameter defines the maximum number of results that can be return in a single response. The `MaxResults` parameter is an upper bound, not a target. If there are more results available than the value specified, a `NextToken` is provided in the response. The `NextToken` indicates that the user should get the next set of results by providing this token as a part of a subsequent call. The default value for `MaxResults` is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The sort order for the results. The default is Ascending.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The parameter by which to sort the results. The default is CreationTime.
   *
   * @public
   */
  SortBy?: AppSortKey | undefined;

  /**
   * A parameter to search for the domain ID.
   *
   * @public
   */
  DomainIdEquals?: string | undefined;

  /**
   * A parameter to search by user profile name. If `SpaceNameEquals` is set, then this value cannot be set.
   *
   * @public
   */
  UserProfileNameEquals?: string | undefined;

  /**
   * A parameter to search by space name. If `UserProfileNameEquals` is set, then this value cannot be set.
   *
   * @public
   */
  SpaceNameEquals?: string | undefined;
}

/**
 * @public
 */
export interface ListAppsResponse {
  /**
   * The list of apps.
   *
   * @public
   */
  Apps?: AppDetails[] | undefined;

  /**
   * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListArtifactsRequest {
  /**
   * A filter that returns only artifacts with the specified source URI.
   *
   * @public
   */
  SourceUri?: string | undefined;

  /**
   * A filter that returns only artifacts of the specified type.
   *
   * @public
   */
  ArtifactType?: string | undefined;

  /**
   * A filter that returns only artifacts created on or after the specified time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * A filter that returns only artifacts created on or before the specified time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The property used to sort results. The default value is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortArtifactsBy | undefined;

  /**
   * The sort order. The default value is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the previous call to `ListArtifacts` didn't return the full set of artifacts, the call returns a token for getting the next set of artifacts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of artifacts to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListArtifactsResponse {
  /**
   * A list of artifacts and their properties.
   *
   * @public
   */
  ArtifactSummaries?: ArtifactSummary[] | undefined;

  /**
   * A token for getting the next set of artifacts, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociationsRequest {
  /**
   * A filter that returns only associations with the specified source ARN.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * A filter that returns only associations with the specified destination Amazon Resource Name (ARN).
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * A filter that returns only associations with the specified source type.
   *
   * @public
   */
  SourceType?: string | undefined;

  /**
   * A filter that returns only associations with the specified destination type.
   *
   * @public
   */
  DestinationType?: string | undefined;

  /**
   * A filter that returns only associations of the specified type.
   *
   * @public
   */
  AssociationType?: AssociationEdgeType | undefined;

  /**
   * A filter that returns only associations created on or after the specified time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * A filter that returns only associations created on or before the specified time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The property used to sort results. The default value is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortAssociationsBy | undefined;

  /**
   * The sort order. The default value is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the previous call to `ListAssociations` didn't return the full set of associations, the call returns a token for getting the next set of associations.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of associations to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssociationsResponse {
  /**
   * A list of associations and their properties.
   *
   * @public
   */
  AssociationSummaries?: AssociationSummary[] | undefined;

  /**
   * A token for getting the next set of associations, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutoMLJobsRequest {
  /**
   * Request a list of jobs, using a filter for time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Request a list of jobs, using a filter for time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Request a list of jobs, using a filter for time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * Request a list of jobs, using a filter for time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * Request a list of jobs, using a search filter for name.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Request a list of jobs, using a filter for status.
   *
   * @public
   */
  StatusEquals?: AutoMLJobStatus | undefined;

  /**
   * The sort order for the results. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: AutoMLSortOrder | undefined;

  /**
   * The parameter by which to sort the results. The default is `Name`.
   *
   * @public
   */
  SortBy?: AutoMLSortBy | undefined;

  /**
   * Request a list of jobs up to a specified limit.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutoMLJobsResponse {
  /**
   * Returns a summary list of jobs.
   *
   * @public
   */
  AutoMLJobSummaries: AutoMLJobSummary[] | undefined;

  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCandidatesForAutoMLJobRequest {
  /**
   * List the candidates created for the job by providing the job's name.
   *
   * @public
   */
  AutoMLJobName: string | undefined;

  /**
   * List the candidates for the job and filter by status.
   *
   * @public
   */
  StatusEquals?: CandidateStatus | undefined;

  /**
   * List the candidates for the job and filter by candidate name.
   *
   * @public
   */
  CandidateNameEquals?: string | undefined;

  /**
   * The sort order for the results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: AutoMLSortOrder | undefined;

  /**
   * The parameter by which to sort the results. The default is `Descending`.
   *
   * @public
   */
  SortBy?: CandidateSortBy | undefined;

  /**
   * List the job's candidates up to a specified limit.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCandidatesForAutoMLJobResponse {
  /**
   * Summaries about the `AutoMLCandidates`.
   *
   * @public
   */
  Candidates: AutoMLCandidate[] | undefined;

  /**
   * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterEventsRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the HyperPod cluster for which to list events.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The name of the instance group to filter events. If specified, only events related to this instance group are returned.
   *
   * @public
   */
  InstanceGroupName?: string | undefined;

  /**
   * The EC2 instance ID to filter events. If specified, only events related to this instance are returned.
   *
   * @public
   */
  NodeId?: string | undefined;

  /**
   * The start of the time range for filtering events. Only events that occurred after this time are included in the results.
   *
   * @public
   */
  EventTimeAfter?: Date | undefined;

  /**
   * The end of the time range for filtering events. Only events that occurred before this time are included in the results.
   *
   * @public
   */
  EventTimeBefore?: Date | undefined;

  /**
   * The field to use for sorting the event list. Currently, the only supported value is `EventTime`.
   *
   * @public
   */
  SortBy?: EventSortBy | undefined;

  /**
   * The order in which to sort the results. Valid values are `Ascending` or `Descending` (the default is `Descending`).
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The type of resource for which to filter events. Valid values are `Cluster`, `InstanceGroup`, or `Instance`.
   *
   * @public
   */
  ResourceType?: ClusterEventResourceType | undefined;

  /**
   * The maximum number of events to return in the response. Valid range is 1 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to retrieve the next set of results. This token is obtained from the output of a previous `ListClusterEvents` call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterEventsResponse {
  /**
   * A token to retrieve the next set of results. Include this token in subsequent `ListClusterEvents` calls to fetch more events.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of event summaries matching the specified criteria.
   *
   * @public
   */
  Events?: ClusterEventSummary[] | undefined;
}

/**
 * @public
 */
export interface ListClusterNodesRequest {
  /**
   * The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster in which you want to retrieve the list of nodes.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * A filter that returns nodes in a SageMaker HyperPod cluster created after the specified time. Timestamps are formatted according to the ISO 8601 standard.
   *
   * Acceptable formats include:
   *
   * - `YYYY-MM-DDThh:mm:ss.sssTZD` (UTC), for example, `2014-10-01T20:30:00.000Z`
   * - `YYYY-MM-DDThh:mm:ss.sssTZD` (with offset), for example, `2014-10-01T12:30:00.000-08:00`
   * - `YYYY-MM-DD`, for example, `2014-10-01`
   * - Unix time in seconds, for example, `1412195400`. This is also referred to as Unix Epoch time and represents the number of seconds since midnight, January 1, 1970 UTC.
   *
   * For more information about the timestamp format, see [Timestamp](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp) in the *Amazon Web Services Command Line Interface User Guide*.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns nodes in a SageMaker HyperPod cluster created before the specified time. The acceptable formats are the same as the timestamp formats for `CreationTimeAfter`. For more information about the timestamp format, see [Timestamp](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp) in the *Amazon Web Services Command Line Interface User Guide*.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns the instance groups whose name contain a specified string.
   *
   * @public
   */
  InstanceGroupNameContains?: string | undefined;

  /**
   * The maximum number of nodes to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the result of the previous `ListClusterNodes` request was truncated, the response includes a `NextToken`. To retrieve the next set of cluster nodes, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The field by which to sort results. The default value is `CREATION_TIME`.
   *
   * @public
   */
  SortBy?: ClusterSortBy | undefined;

  /**
   * The sort order for results. The default value is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * Specifies whether to include nodes that are still being provisioned in the response. When set to true, the response includes all nodes regardless of their provisioning status. When set to `False` (default), only nodes with assigned `InstanceIds` are returned.
   *
   * @public
   */
  IncludeNodeLogicalIds?: boolean | undefined;
}

/**
 * @public
 */
export interface ListClusterNodesResponse {
  /**
   * The next token specified for listing instances in a SageMaker HyperPod cluster.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The summaries of listed instances in a SageMaker HyperPod cluster
   *
   * @public
   */
  ClusterNodeSummaries: ClusterNodeSummary[] | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * Set a start time for the time range during which you want to list SageMaker HyperPod clusters. Timestamps are formatted according to the ISO 8601 standard.
   *
   * Acceptable formats include:
   *
   * - `YYYY-MM-DDThh:mm:ss.sssTZD` (UTC), for example, `2014-10-01T20:30:00.000Z`
   * - `YYYY-MM-DDThh:mm:ss.sssTZD` (with offset), for example, `2014-10-01T12:30:00.000-08:00`
   * - `YYYY-MM-DD`, for example, `2014-10-01`
   * - Unix time in seconds, for example, `1412195400`. This is also referred to as Unix Epoch time and represents the number of seconds since midnight, January 1, 1970 UTC.
   *
   * For more information about the timestamp format, see [Timestamp](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp) in the *Amazon Web Services Command Line Interface User Guide*.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Set an end time for the time range during which you want to list SageMaker HyperPod clusters. A filter that returns nodes in a SageMaker HyperPod cluster created before the specified time. The acceptable formats are the same as the timestamp formats for `CreationTimeAfter`. For more information about the timestamp format, see [Timestamp](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp) in the *Amazon Web Services Command Line Interface User Guide*.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Specifies the maximum number of clusters to evaluate for the operation (not necessarily the number of matching items). After SageMaker processes the number of clusters up to `MaxResults`, it stops the operation and returns the matching clusters up to that point. If all the matching clusters are desired, SageMaker will go through all the clusters until `NextToken` is empty.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Set the maximum number of instances to print in the list.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Set the next token to retrieve the list of SageMaker HyperPod clusters.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The field by which to sort results. The default value is `CREATION_TIME`.
   *
   * @public
   */
  SortBy?: ClusterSortBy | undefined;

  /**
   * The sort order for results. The default value is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The Amazon Resource Name (ARN); of the training plan to filter clusters by. For more information about reserving GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
   *
   * @public
   */
  TrainingPlanArn?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * If the result of the previous `ListClusters` request was truncated, the response includes a `NextToken`. To retrieve the next set of clusters, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The summaries of listed SageMaker HyperPod clusters.
   *
   * @public
   */
  ClusterSummaries: ClusterSummary[] | undefined;
}

/**
 * @public
 */
export interface ListClusterSchedulerConfigsRequest {
  /**
   * Filter for after this creation time. The input for this parameter is a Unix timestamp. To convert a date and time into a Unix timestamp, see [EpochConverter](https://www.epochconverter.com/).
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * Filter for before this creation time. The input for this parameter is a Unix timestamp. To convert a date and time into a Unix timestamp, see [EpochConverter](https://www.epochconverter.com/).
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * Filter for name containing this string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Filter for ARN of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * Filter for status.
   *
   * @public
   */
  Status?: SchedulerResourceStatus | undefined;

  /**
   * Filter for sorting the list by a given value. For example, sort by name, creation time, or status.
   *
   * @public
   */
  SortBy?: SortClusterSchedulerConfigBy | undefined;

  /**
   * The order of the list. By default, listed in `Descending` order according to by `SortBy`. To change the list order, you can specify `SortOrder` to be `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of cluster policies to list.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListClusterSchedulerConfigsResponse {
  /**
   * Summaries of the cluster policies.
   *
   * @public
   */
  ClusterSchedulerConfigSummaries?: ClusterSchedulerConfigSummary[] | undefined;

  /**
   * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCodeRepositoriesInput {
  /**
   * A filter that returns only Git repositories that were created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only Git repositories that were created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only Git repositories that were last modified after the specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only Git repositories that were last modified before the specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * The maximum number of Git repositories to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A string in the Git repositories name. This filter returns only repositories whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * If the result of a `ListCodeRepositoriesOutput` request was truncated, the response includes a `NextToken`. To get the next set of Git repositories, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The field to sort results by. The default is `Name`.
   *
   * @public
   */
  SortBy?: CodeRepositorySortBy | undefined;

  /**
   * The sort order for results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: CodeRepositorySortOrder | undefined;
}

/**
 * @public
 */
export interface ListCodeRepositoriesOutput {
  /**
   * Gets a list of summaries of the Git repositories. Each summary specifies the following values for the repository:
   *
   * - Name
   * - Amazon Resource Name (ARN)
   * - Creation time
   * - Last modified time
   * - Configuration information, including the URL location of the repository and the ARN of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the repository.
   *
   * @public
   */
  CodeRepositorySummaryList: CodeRepositorySummary[] | undefined;

  /**
   * If the result of a `ListCodeRepositoriesOutput` request was truncated, the response includes a `NextToken`. To get the next set of Git repositories, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCompilationJobsRequest {
  /**
   * If the result of the previous `ListCompilationJobs` request was truncated, the response includes a `NextToken`. To retrieve the next set of model compilation jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of model compilation jobs to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A filter that returns the model compilation jobs that were created after a specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns the model compilation jobs that were created before a specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns the model compilation jobs that were modified after a specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns the model compilation jobs that were modified before a specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A filter that returns the model compilation jobs whose name contains a specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that retrieves model compilation jobs with a specific `CompilationJobStatus` status.
   *
   * @public
   */
  StatusEquals?: CompilationJobStatus | undefined;

  /**
   * The field by which to sort results. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: ListCompilationJobsSortBy | undefined;

  /**
   * The sort order for results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListCompilationJobsResponse {
  /**
   * An array of [CompilationJobSummary](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CompilationJobSummary.html) objects, each describing a model compilation job.
   *
   * @public
   */
  CompilationJobSummaries: CompilationJobSummary[] | undefined;

  /**
   * If the response is truncated, Amazon SageMaker AI returns this `NextToken`. To retrieve the next set of model compilation jobs, use this token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComputeQuotasRequest {
  /**
   * Filter for after this creation time. The input for this parameter is a Unix timestamp. To convert a date and time into a Unix timestamp, see [EpochConverter](https://www.epochconverter.com/).
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * Filter for before this creation time. The input for this parameter is a Unix timestamp. To convert a date and time into a Unix timestamp, see [EpochConverter](https://www.epochconverter.com/).
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * Filter for name containing this string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Filter for status.
   *
   * @public
   */
  Status?: SchedulerResourceStatus | undefined;

  /**
   * Filter for ARN of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * Filter for sorting the list by a given value. For example, sort by name, creation time, or status.
   *
   * @public
   */
  SortBy?: SortQuotaBy | undefined;

  /**
   * The order of the list. By default, listed in `Descending` order according to by `SortBy`. To change the list order, you can specify `SortOrder` to be `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of compute allocation definitions to list.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListComputeQuotasResponse {
  /**
   * Summaries of the compute allocation definitions.
   *
   * @public
   */
  ComputeQuotaSummaries?: ComputeQuotaSummary[] | undefined;

  /**
   * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContextsRequest {
  /**
   * A filter that returns only contexts with the specified source URI.
   *
   * @public
   */
  SourceUri?: string | undefined;

  /**
   * A filter that returns only contexts of the specified type.
   *
   * @public
   */
  ContextType?: string | undefined;

  /**
   * A filter that returns only contexts created on or after the specified time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * A filter that returns only contexts created on or before the specified time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The property used to sort results. The default value is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortContextsBy | undefined;

  /**
   * The sort order. The default value is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the previous call to `ListContexts` didn't return the full set of contexts, the call returns a token for getting the next set of contexts.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of contexts to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListContextsResponse {
  /**
   * A list of contexts and their properties.
   *
   * @public
   */
  ContextSummaries?: ContextSummary[] | undefined;

  /**
   * A token for getting the next set of contexts, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataQualityJobDefinitionsRequest {
  /**
   * A filter that lists the data quality job definitions associated with the specified endpoint.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: MonitoringJobDefinitionSortKey | undefined;

  /**
   * Whether to sort the results in `Ascending` or `Descending` order. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the result of the previous `ListDataQualityJobDefinitions` request was truncated, the response includes a `NextToken`. To retrieve the next set of transform jobs, use the token in the next request.&gt;
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of data quality monitoring job definitions to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A string in the data quality monitoring job definition name. This filter returns only data quality monitoring job definitions whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only data quality monitoring job definitions created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only data quality monitoring job definitions created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * Summary information about a monitoring job.
 *
 * @public
 */
export interface MonitoringJobDefinitionSummary {
  /**
   * The name of the monitoring job.
   *
   * @public
   */
  MonitoringJobDefinitionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the monitoring job.
   *
   * @public
   */
  MonitoringJobDefinitionArn: string | undefined;

  /**
   * The time that the monitoring job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The name of the endpoint that the job monitors.
   *
   * @public
   */
  EndpointName: string | undefined;
}

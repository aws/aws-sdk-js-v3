// smithy-typescript generated code
import type {
  _InstanceType,
  AccountDefaultStatus,
  ActionStatus,
  ActivationState,
  AppType,
  BatchStrategy,
  ClusterNodeProvisioningMode,
  ClusterNodeRecovery,
  CrossAccountFilterOption,
  Direction,
  EdgePackagingJobStatus,
  EndpointConfigSortKey,
  EndpointSortKey,
  EndpointStatus,
  ExecutionStatus,
  FeatureGroupSortBy,
  FeatureGroupSortOrder,
  FeatureGroupStatus,
  FeatureStatus,
  HubContentSortBy,
  HubContentType,
  HubSortBy,
  HyperParameterTuningJobSortByOptions,
  HyperParameterTuningJobStatus,
  ImageSortBy,
  ImageSortOrder,
  ImageVersionSortBy,
  ImageVersionSortOrder,
  InferenceComponentSortKey,
  InferenceComponentStatus,
  InferenceExperimentStatus,
  InferenceExperimentStopDesiredState,
  InferenceExperimentType,
  IsTrackingServerActive,
  JobCategory,
  JobStatus,
  LabelingJobStatus,
  LineageType,
  ListDeviceFleetsSortBy,
  ListEdgeDeploymentPlansSortBy,
  ListEdgePackagingJobsSortBy,
  ListInferenceRecommendationsJobsSortBy,
  ListLabelingJobsForWorkteamSortByOptions,
  ListOptimizationJobsSortBy,
  ListWorkforcesSortByOptions,
  ListWorkteamsSortByOptions,
  MlflowAppStatus,
  ModelApprovalStatus,
  ModelCardExportJobSortBy,
  ModelCardExportJobSortOrder,
  ModelCardExportJobStatus,
  ModelCardSortBy,
  ModelCardSortOrder,
  ModelCardStatus,
  ModelCardVersionSortBy,
  ModelMetadataFilterType,
  ModelPackageGroupSortBy,
  ModelPackageGroupStatus,
  ModelPackageRegistrationType,
  ModelPackageSortBy,
  ModelPackageStatus,
  ModelPackageType,
  ModelSortKey,
  ModelVariantAction,
  MonitoringAlertHistorySortKey,
  MonitoringAlertStatus,
  MonitoringExecutionSortKey,
  MonitoringJobDefinitionSortKey,
  MonitoringScheduleSortKey,
  MonitoringType,
  NotebookInstanceLifecycleConfigSortKey,
  NotebookInstanceLifecycleConfigSortOrder,
  NotebookInstanceSortKey,
  NotebookInstanceSortOrder,
  NotebookInstanceStatus,
  OfflineStoreStatusValue,
  OptimizationJobDeploymentInstanceType,
  OptimizationJobStatus,
  OrderKey,
  PartnerAppStatus,
  PartnerAppType,
  PipelineExecutionStatus,
  PipelineStatus,
  ProcessingJobStatus,
  ProjectSortBy,
  ProjectSortOrder,
  ProjectStatus,
  RecommendationJobStatus,
  RecommendationStepType,
  Relation,
  ReservedCapacityInstanceType,
  ReservedCapacityType,
  ResourceCatalogSortBy,
  ResourceCatalogSortOrder,
  SageMakerResourceName,
  ScheduleStatus,
  SecondaryStatus,
  SharingType,
  SkipModelValidation,
  SortBy,
  SortExperimentsBy,
  SortInferenceExperimentsBy,
  SortLineageGroupsBy,
  SortMlflowAppBy,
  SortOrder,
  SortPipelineExecutionsBy,
  SortPipelinesBy,
  SortTrackingServerBy,
  SortTrialComponentsBy,
  SortTrialsBy,
  SpaceSortKey,
  SpaceStatus,
  StepStatus,
  StorageType,
  StudioLifecycleConfigAppType,
  StudioLifecycleConfigSortKey,
  TrackingServerStatus,
  TrainingJobSortByOptions,
  TrainingJobStatus,
  TrainingPlanFilterName,
  TrainingPlanSortBy,
  TrainingPlanSortOrder,
  TrainingPlanStatus,
  TrainingSessionStatus,
  TransformJobStatus,
  UltraServerHealthStatus,
  UserProfileSortKey,
  UserProfileStatus,
  WarmPoolResourceStatus,
} from "./enums";
import type {
  AdditionalInferenceSpecificationDefinition,
  AlgorithmSpecification,
  AppSpecification,
  AthenaStepMetadata,
  AutoMLJobStepMetadata,
  BatchDataCaptureConfig,
  BatchTransformInput,
  BedrockCustomModelDeploymentMetadata,
  BedrockCustomModelMetadata,
  BedrockModelImportMetadata,
  BedrockProvisionedModelThroughputMetadata,
  CacheHitResult,
  CallbackStepMetadata,
  Channel,
  CheckpointConfig,
  ClarifyCheckStepMetadata,
  CleanupStepMetadata,
  ClusterAutoScalingConfig,
  ClusterInstanceGroupSpecification,
  ClusterOrchestrator,
  ClusterRestrictedInstanceGroupsConfig,
  CodeEditorAppImageConfig,
  DeploymentConfiguration,
  InferenceSpecification,
  JupyterLabAppImageConfig,
  KernelGatewayImageConfig,
  OutputDataConfig,
  OutputParameter,
  ResourceConfig,
  StoppingCondition,
  Tag,
  TransformInput,
  TransformOutput,
  TransformResources,
  UserContext,
  VpcConfig,
} from "./models_0";
import type {
  ClusterRestrictedInstanceGroupSpecification,
  ClusterTieredStorageConfig,
  ComputeQuotaConfig,
  ComputeQuotaTarget,
  ConditionStepMetadata,
  ContainerDefinition,
  DriftCheckBaselines,
  InferenceExecutionConfig,
  ManagedConfiguration,
  MetadataProperties,
  ModelCardSecurityConfig,
  ModelLifeCycle,
  ModelMetrics,
  ModelPackageModelCard,
  ModelPackageSecurityConfig,
  ModelPackageValidationSpecification,
  ModelVariantConfig,
  RetryStrategy,
  SchedulerConfig,
  SourceAlgorithmSpecification,
  TtlDuration,
  UiTemplate,
} from "./models_1";
import type {
  DataProcessing,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DeploymentRecommendation,
  ExperimentConfig,
  InstanceGroupHealthCheckConfiguration,
  ModelArtifacts,
  ModelClientConfig,
  ModelPackageConfig,
  MonitoringScheduleConfig,
  NetworkConfig,
  ParallelismConfiguration,
  ProcessingInput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
  ProfilerConfig,
  ServiceCatalogProvisioningDetails,
  SpaceStorageSettings,
  TensorBoardOutputConfig,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
} from "./models_2";
import type {
  Device,
  DeviceDeploymentSummary,
  DeviceFleetSummary,
  DeviceSummary,
  DomainDetails,
  Edge,
  EdgeDeploymentPlanSummary,
  EdgePackagingJobSummary,
  EMRServerlessStepMetadata,
  EMRStepMetadata,
  Endpoint,
  EndpointConfigStepMetadata,
  EndpointConfigSummary,
  EndpointStepMetadata,
  EndpointSummary,
  Experiment,
  ExperimentSummary,
  FailStepMetadata,
  FeatureGroup,
  FeatureGroupSummary,
  FeatureMetadata,
  Filter,
  FlowDefinitionSummary,
  ForEachStepMetadata,
  GitConfigForUpdate,
  HubContent,
  HubContentInfo,
  HubInfo,
  HumanTaskUiSummary,
  HyperParameterTrainingJobSummary,
  HyperParameterTuningJobSearchEntity,
  HyperParameterTuningJobSummary,
  Image,
  ImageVersion,
  InferenceComponentMetadata,
  InferenceComponentSummary,
  InferenceExperimentSummary,
  InferenceRecommendationsJob,
  InferenceRecommendationsJobStep,
  IterationContext,
  Job,
  JobConfigSchemaVersionSummary,
  JobStepMetadata,
  JobSummary,
  LabelingJobForWorkteamSummary,
  LabelingJobSummary,
  LambdaStepMetadata,
  LineageGroupSummary,
  LineageMetadata,
  MetricData,
  ModelPackageStatusDetails,
  MonitoringExecutionSummary,
  MonitoringJobDefinitionSummary,
  PipelineExperimentConfig,
  ReservedCapacitySummary,
  SecondaryStatusTransition,
  SelectiveExecutionConfig,
  ServiceCatalogProvisionedProductDetails,
  SubscribedWorkteam,
  TemplateProviderDetail,
  TrialComponentMetricSummary,
  TrialComponentSource,
  TrialSource,
  WarmPoolStatus,
  Workforce,
  Workteam,
} from "./models_3";

/**
 * @public
 */
export interface ListDataQualityJobDefinitionsResponse {
  /**
   * A list of data quality monitoring job definitions.
   *
   * @public
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * If the result of the previous `ListDataQualityJobDefinitions` request was truncated, the response includes a `NextToken`. To retrieve the next set of data quality monitoring job definitions, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDeviceFleetsRequest {
  /**
   * The response from the last list when returning a list large enough to need tokening.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to select.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter fleets where packaging job was created after specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Filter fleets where the edge packaging job was created before specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Select fleets where the job was updated after X
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * Select fleets where the job was updated before X
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * Filter for fleets containing this name in their fleet device name.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * The column to sort by.
   *
   * @public
   */
  SortBy?: ListDeviceFleetsSortBy | undefined;

  /**
   * What direction to sort in.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListDeviceFleetsResponse {
  /**
   * Summary of the device fleet.
   *
   * @public
   */
  DeviceFleetSummaries: DeviceFleetSummary[] | undefined;

  /**
   * The response from the last list when returning a list large enough to need tokening.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * The response from the last list when returning a list large enough to need tokening.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to select.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Select fleets where the job was updated after X
   *
   * @public
   */
  LatestHeartbeatAfter?: Date | undefined;

  /**
   * A filter that searches devices that contains this name in any of their models.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * Filter for fleets containing this name in their device fleet name.
   *
   * @public
   */
  DeviceFleetName?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * Summary of devices.
   *
   * @public
   */
  DeviceSummaries: DeviceSummary[] | undefined;

  /**
   * The response from the last list when returning a list large enough to need tokening.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
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
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * The list of domains.
   *
   * @public
   */
  Domains?: DomainDetails[] | undefined;

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
export interface ListEdgeDeploymentPlansRequest {
  /**
   * The response from the last list when returning a list large enough to need tokening.
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

  /**
   * Selects edge deployment plans created after this time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Selects edge deployment plans created before this time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Selects edge deployment plans that were last updated after this time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * Selects edge deployment plans that were last updated before this time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * Selects edge deployment plans with names containing this name.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Selects edge deployment plans with a device fleet name containing this name.
   *
   * @public
   */
  DeviceFleetNameContains?: string | undefined;

  /**
   * The column by which to sort the edge deployment plans. Can be one of `NAME`, `DEVICEFLEETNAME`, `CREATIONTIME`, `LASTMODIFIEDTIME`.
   *
   * @public
   */
  SortBy?: ListEdgeDeploymentPlansSortBy | undefined;

  /**
   * The direction of the sorting (ascending or descending).
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListEdgeDeploymentPlansResponse {
  /**
   * List of summaries of edge deployment plans.
   *
   * @public
   */
  EdgeDeploymentPlanSummaries: EdgeDeploymentPlanSummary[] | undefined;

  /**
   * The token to use when calling the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEdgePackagingJobsRequest {
  /**
   * The response from the last list when returning a list large enough to need tokening.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to select.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Select jobs where the job was created after specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Select jobs where the job was created before specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Select jobs where the job was updated after specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * Select jobs where the job was updated before specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * Filter for jobs containing this name in their packaging job name.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Filter for jobs where the model name contains this string.
   *
   * @public
   */
  ModelNameContains?: string | undefined;

  /**
   * The job status to filter for.
   *
   * @public
   */
  StatusEquals?: EdgePackagingJobStatus | undefined;

  /**
   * Use to specify what column to sort by.
   *
   * @public
   */
  SortBy?: ListEdgePackagingJobsSortBy | undefined;

  /**
   * What direction to sort by.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListEdgePackagingJobsResponse {
  /**
   * Summaries of edge packaging jobs.
   *
   * @public
   */
  EdgePackagingJobSummaries: EdgePackagingJobSummary[] | undefined;

  /**
   * Token to use when calling the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEndpointConfigsInput {
  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: EndpointConfigSortKey | undefined;

  /**
   * The sort order for results. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: OrderKey | undefined;

  /**
   * If the result of the previous `ListEndpointConfig` request was truncated, the response includes a `NextToken`. To retrieve the next set of endpoint configurations, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of training jobs to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A string in the endpoint configuration name. This filter returns only endpoint configurations whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only endpoint configurations created before the specified time (timestamp).
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only endpoint configurations with a creation time greater than or equal to the specified time (timestamp).
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListEndpointConfigsOutput {
  /**
   * An array of endpoint configurations.
   *
   * @public
   */
  EndpointConfigs: EndpointConfigSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of endpoint configurations, use it in the subsequent request
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEndpointsInput {
  /**
   * Sorts the list of results. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: EndpointSortKey | undefined;

  /**
   * The sort order for results. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: OrderKey | undefined;

  /**
   * If the result of a `ListEndpoints` request was truncated, the response includes a `NextToken`. To retrieve the next set of endpoints, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of endpoints to return in the response. This value defaults to 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A string in endpoint names. This filter returns only endpoints whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only endpoints that were created before the specified time (timestamp).
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only endpoints with a creation time greater than or equal to the specified time (timestamp).
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only endpoints that were modified before the specified timestamp.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A filter that returns only endpoints that were modified after the specified timestamp.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only endpoints with the specified status.
   *
   * @public
   */
  StatusEquals?: EndpointStatus | undefined;
}

/**
 * @public
 */
export interface ListEndpointsOutput {
  /**
   * An array or endpoint objects.
   *
   * @public
   */
  Endpoints: EndpointSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of training jobs, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExperimentsRequest {
  /**
   * A filter that returns only experiments created after the specified time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * A filter that returns only experiments created before the specified time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The property used to sort results. The default value is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortExperimentsBy | undefined;

  /**
   * The sort order. The default value is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the previous call to `ListExperiments` didn't return the full set of experiments, the call returns a token for getting the next set of experiments.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of experiments to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListExperimentsResponse {
  /**
   * A list of the summaries of your experiments.
   *
   * @public
   */
  ExperimentSummaries?: ExperimentSummary[] | undefined;

  /**
   * A token for getting the next set of experiments, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFeatureGroupsRequest {
  /**
   * A string that partially matches one or more `FeatureGroup`s names. Filters `FeatureGroup`s by name.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A `FeatureGroup` status. Filters by `FeatureGroup` status.
   *
   * @public
   */
  FeatureGroupStatusEquals?: FeatureGroupStatus | undefined;

  /**
   * An `OfflineStore` status. Filters by `OfflineStore` status.
   *
   * @public
   */
  OfflineStoreStatusEquals?: OfflineStoreStatusValue | undefined;

  /**
   * Use this parameter to search for `FeatureGroups`s created after a specific date and time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Use this parameter to search for `FeatureGroups`s created before a specific date and time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The order in which feature groups are listed.
   *
   * @public
   */
  SortOrder?: FeatureGroupSortOrder | undefined;

  /**
   * The value on which the feature group list is sorted.
   *
   * @public
   */
  SortBy?: FeatureGroupSortBy | undefined;

  /**
   * The maximum number of results returned by `ListFeatureGroups`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to resume pagination of `ListFeatureGroups` results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFeatureGroupsResponse {
  /**
   * A summary of feature groups.
   *
   * @public
   */
  FeatureGroupSummaries: FeatureGroupSummary[] | undefined;

  /**
   * A token to resume pagination of `ListFeatureGroups` results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFlowDefinitionsRequest {
  /**
   * A filter that returns only flow definitions with a creation time greater than or equal to the specified timestamp.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only flow definitions that were created before the specified timestamp.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * An optional value that specifies whether you want the results sorted in `Ascending` or `Descending` order.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * A token to resume pagination.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of items to return. If the total number of available items is more than the value specified in `MaxResults`, then a `NextToken` will be provided in the output that you can use to resume pagination.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlowDefinitionsResponse {
  /**
   * An array of objects describing the flow definitions.
   *
   * @public
   */
  FlowDefinitionSummaries: FlowDefinitionSummary[] | undefined;

  /**
   * A token to resume pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubContentsRequest {
  /**
   * The name of the hub to list the contents of.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The type of hub content to list.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * Only list hub content if the name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * The upper bound of the hub content schema verion.
   *
   * @public
   */
  MaxSchemaVersion?: string | undefined;

  /**
   * Only list hub content that was created before the time specified.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Only list hub content that was created after the time specified.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Sort hub content versions by either name or creation time.
   *
   * @public
   */
  SortBy?: HubContentSortBy | undefined;

  /**
   * Sort hubs by ascending or descending order.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The maximum amount of hub content to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the response to a previous `ListHubContents` request was truncated, the response includes a `NextToken`. To retrieve the next set of hub content, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubContentsResponse {
  /**
   * The summaries of the listed hub content.
   *
   * @public
   */
  HubContentSummaries: HubContentInfo[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of hub content, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubContentVersionsRequest {
  /**
   * The name of the hub to list the content versions of.
   *
   * @public
   */
  HubName: string | undefined;

  /**
   * The type of hub content to list versions of.
   *
   * @public
   */
  HubContentType: HubContentType | undefined;

  /**
   * The name of the hub content.
   *
   * @public
   */
  HubContentName: string | undefined;

  /**
   * The lower bound of the hub content versions to list.
   *
   * @public
   */
  MinVersion?: string | undefined;

  /**
   * The upper bound of the hub content schema version.
   *
   * @public
   */
  MaxSchemaVersion?: string | undefined;

  /**
   * Only list hub content versions that were created before the time specified.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Only list hub content versions that were created after the time specified.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Sort hub content versions by either name or creation time.
   *
   * @public
   */
  SortBy?: HubContentSortBy | undefined;

  /**
   * Sort hub content versions by ascending or descending order.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The maximum number of hub content versions to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the response to a previous `ListHubContentVersions` request was truncated, the response includes a `NextToken`. To retrieve the next set of hub content versions, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubContentVersionsResponse {
  /**
   * The summaries of the listed hub content versions.
   *
   * @public
   */
  HubContentSummaries: HubContentInfo[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of hub content versions, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubsRequest {
  /**
   * Only list hubs with names that contain the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Only list hubs that were created before the time specified.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Only list hubs that were created after the time specified.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Only list hubs that were last modified before the time specified.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * Only list hubs that were last modified after the time specified.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * Sort hubs by either name or creation time.
   *
   * @public
   */
  SortBy?: HubSortBy | undefined;

  /**
   * Sort hubs by ascending or descending order.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The maximum number of hubs to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the response to a previous `ListHubs` request was truncated, the response includes a `NextToken`. To retrieve the next set of hubs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHubsResponse {
  /**
   * The summaries of the listed hubs.
   *
   * @public
   */
  HubSummaries: HubInfo[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of hubs, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHumanTaskUisRequest {
  /**
   * A filter that returns only human task user interfaces with a creation time greater than or equal to the specified timestamp.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only human task user interfaces that were created before the specified timestamp.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * An optional value that specifies whether you want the results sorted in `Ascending` or `Descending` order.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * A token to resume pagination.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of items to return. If the total number of available items is more than the value specified in `MaxResults`, then a `NextToken` will be provided in the output that you can use to resume pagination.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListHumanTaskUisResponse {
  /**
   * An array of objects describing the human task user interfaces.
   *
   * @public
   */
  HumanTaskUiSummaries: HumanTaskUiSummary[] | undefined;

  /**
   * A token to resume pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHyperParameterTuningJobsRequest {
  /**
   * If the result of the previous `ListHyperParameterTuningJobs` request was truncated, the response includes a `NextToken`. To retrieve the next set of tuning jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of tuning jobs to return. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The field to sort results by. The default is `Name`.
   *
   * @public
   */
  SortBy?: HyperParameterTuningJobSortByOptions | undefined;

  /**
   * The sort order for results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * A string in the tuning job name. This filter returns only tuning jobs whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only tuning jobs that were created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only tuning jobs that were created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only tuning jobs that were modified after the specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only tuning jobs that were modified before the specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A filter that returns only tuning jobs with the specified status.
   *
   * @public
   */
  StatusEquals?: HyperParameterTuningJobStatus | undefined;
}

/**
 * @public
 */
export interface ListHyperParameterTuningJobsResponse {
  /**
   * A list of [HyperParameterTuningJobSummary](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_HyperParameterTuningJobSummary.html) objects that describe the tuning jobs that the `ListHyperParameterTuningJobs` request returned.
   *
   * @public
   */
  HyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[] | undefined;

  /**
   * If the result of this `ListHyperParameterTuningJobs` request was truncated, the response includes a `NextToken`. To retrieve the next set of tuning jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagesRequest {
  /**
   * A filter that returns only images created on or after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only images created on or before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only images modified on or after the specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only images modified on or before the specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * The maximum number of images to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A filter that returns only images whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * If the previous call to `ListImages` didn't return the full set of images, the call returns a token for getting the next set of images.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The property used to sort results. The default value is `CREATION_TIME`.
   *
   * @public
   */
  SortBy?: ImageSortBy | undefined;

  /**
   * The sort order. The default value is `DESCENDING`.
   *
   * @public
   */
  SortOrder?: ImageSortOrder | undefined;
}

/**
 * @public
 */
export interface ListImagesResponse {
  /**
   * A list of images and their properties.
   *
   * @public
   */
  Images?: Image[] | undefined;

  /**
   * A token for getting the next set of images, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImageVersionsRequest {
  /**
   * A filter that returns only versions created on or after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only versions created on or before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The name of the image to list the versions of.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * A filter that returns only versions modified on or after the specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only versions modified on or before the specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * The maximum number of versions to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous call to `ListImageVersions` didn't return the full set of versions, the call returns a token for getting the next set of versions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The property used to sort results. The default value is `CREATION_TIME`.
   *
   * @public
   */
  SortBy?: ImageVersionSortBy | undefined;

  /**
   * The sort order. The default value is `DESCENDING`.
   *
   * @public
   */
  SortOrder?: ImageVersionSortOrder | undefined;
}

/**
 * @public
 */
export interface ListImageVersionsResponse {
  /**
   * A list of versions and their properties.
   *
   * @public
   */
  ImageVersions?: ImageVersion[] | undefined;

  /**
   * A token for getting the next set of versions, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceComponentsInput {
  /**
   * The field by which to sort the inference components in the response. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: InferenceComponentSortKey | undefined;

  /**
   * The sort order for results. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: OrderKey | undefined;

  /**
   * A token that you use to get the next set of results following a truncated response. If the response to the previous request was truncated, that response provides the value for this token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of inference components to return in the response. This value defaults to 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters the results to only those inference components with a name that contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Filters the results to only those inference components that were created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Filters the results to only those inference components that were created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Filters the results to only those inference components that were updated before the specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * Filters the results to only those inference components that were updated after the specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * Filters the results to only those inference components with the specified status.
   *
   * @public
   */
  StatusEquals?: InferenceComponentStatus | undefined;

  /**
   * An endpoint name to filter the listed inference components. The response includes only those inference components that are hosted at the specified endpoint.
   *
   * @public
   */
  EndpointNameEquals?: string | undefined;

  /**
   * A production variant name to filter the listed inference components. The response includes only those inference components that are hosted at the specified variant.
   *
   * @public
   */
  VariantNameEquals?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceComponentsOutput {
  /**
   * A list of inference components and their properties that matches any of the filters you specified in the request.
   *
   * @public
   */
  InferenceComponents: InferenceComponentSummary[] | undefined;

  /**
   * The token to use in a subsequent request to get the next set of results following a truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceExperimentsRequest {
  /**
   * Selects inference experiments whose names contain this name.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Selects inference experiments of this type. For the possible types of inference experiments, see [CreateInferenceExperiment](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateInferenceExperiment.html).
   *
   * @public
   */
  Type?: InferenceExperimentType | undefined;

  /**
   * Selects inference experiments which are in this status. For the possible statuses, see [DescribeInferenceExperiment](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceExperiment.html).
   *
   * @public
   */
  StatusEquals?: InferenceExperimentStatus | undefined;

  /**
   * Selects inference experiments which were created after this timestamp.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Selects inference experiments which were created before this timestamp.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Selects inference experiments which were last modified after this timestamp.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * Selects inference experiments which were last modified before this timestamp.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * The column by which to sort the listed inference experiments.
   *
   * @public
   */
  SortBy?: SortInferenceExperimentsBy | undefined;

  /**
   * The direction of sorting (ascending or descending).
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The response from the last list when returning a list large enough to need tokening.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to select.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListInferenceExperimentsResponse {
  /**
   * List of inference experiments.
   *
   * @public
   */
  InferenceExperiments?: InferenceExperimentSummary[] | undefined;

  /**
   * The token to use when calling the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobsRequest {
  /**
   * A filter that returns only jobs created after the specified time (timestamp).
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only jobs created before the specified time (timestamp).
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only jobs that were last modified after the specified time (timestamp).
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only jobs that were last modified before the specified time (timestamp).
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A string in the job name. This filter returns only recommendations whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that retrieves only inference recommendations jobs with a specific status.
   *
   * @public
   */
  StatusEquals?: RecommendationJobStatus | undefined;

  /**
   * The parameter by which to sort the results.
   *
   * @public
   */
  SortBy?: ListInferenceRecommendationsJobsSortBy | undefined;

  /**
   * The sort order for the results.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the response to a previous `ListInferenceRecommendationsJobsRequest` request was truncated, the response includes a `NextToken`. To retrieve the next set of recommendations, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of recommendations to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A filter that returns only jobs that were created for this model.
   *
   * @public
   */
  ModelNameEquals?: string | undefined;

  /**
   * A filter that returns only jobs that were created for this versioned model package.
   *
   * @public
   */
  ModelPackageVersionArnEquals?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobsResponse {
  /**
   * The recommendations created from the Amazon SageMaker Inference Recommender job.
   *
   * @public
   */
  InferenceRecommendationsJobs: InferenceRecommendationsJob[] | undefined;

  /**
   * A token for getting the next set of recommendations, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobStepsRequest {
  /**
   * The name for the Inference Recommender job.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * A filter to return benchmarks of a specified status. If this field is left empty, then all benchmarks are returned.
   *
   * @public
   */
  Status?: RecommendationJobStatus | undefined;

  /**
   * A filter to return details about the specified type of subtask.
   *
   * `BENCHMARK`: Evaluate the performance of your model on different instance types.
   *
   * @public
   */
  StepType?: RecommendationStepType | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token that you can specify to return more results from the list. Specify this field if you have a token that was returned from a previous request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceRecommendationsJobStepsResponse {
  /**
   * A list of all subtask details in Inference Recommender.
   *
   * @public
   */
  Steps?: InferenceRecommendationsJobStep[] | undefined;

  /**
   * A token that you can specify in your next request to return more results from the list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * The category of jobs to list.
   *
   * @public
   */
  JobCategory: JobCategory | undefined;

  /**
   * If the previous response was truncated, this token retrieves the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of jobs to return in the response. The default value is 50.
   *
   * @public
   */
  MaxResults?: number | undefined;

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
   * A filter that returns only jobs modified after the specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only jobs modified before the specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A string in the job name to filter results. Only jobs whose name contains the specified string are returned.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * The field to sort results by.
   *
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * The sort order for results. Valid values are `Ascending` and `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * A filter that returns only jobs with the specified status.
   *
   * @public
   */
  StatusEquals?: JobStatus | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * If the response is truncated, this token retrieves the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of `JobSummary` objects that provide summary information about the jobs.
   *
   * @public
   */
  JobSummaries: JobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListJobSchemaVersionsRequest {
  /**
   * The category of job schemas to list.
   *
   * @public
   */
  JobCategory: JobCategory | undefined;

  /**
   * If the previous response was truncated, this token retrieves the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of schema versions to return in the response. The default value is 5.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListJobSchemaVersionsResponse {
  /**
   * If the response is truncated, this token retrieves the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of `JobConfigSchemaVersionSummary` objects listing the available schema versions.
   *
   * @public
   */
  JobConfigSchemas: JobConfigSchemaVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListLabelingJobsRequest {
  /**
   * A filter that returns only labeling jobs created after the specified time (timestamp).
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only labeling jobs created before the specified time (timestamp).
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only labeling jobs modified after the specified time (timestamp).
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only labeling jobs modified before the specified time (timestamp).
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * The maximum number of labeling jobs to return in each page of the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the result of the previous `ListLabelingJobs` request was truncated, the response includes a `NextToken`. To retrieve the next set of labeling jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A string in the labeling job name. This filter returns only labeling jobs whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * The sort order for results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * A filter that retrieves only labeling jobs with a specific status.
   *
   * @public
   */
  StatusEquals?: LabelingJobStatus | undefined;
}

/**
 * @public
 */
export interface ListLabelingJobsResponse {
  /**
   * An array of `LabelingJobSummary` objects, each describing a labeling job.
   *
   * @public
   */
  LabelingJobSummaryList?: LabelingJobSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of labeling jobs, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLabelingJobsForWorkteamRequest {
  /**
   * The Amazon Resource Name (ARN) of the work team for which you want to see labeling jobs for.
   *
   * @public
   */
  WorkteamArn: string | undefined;

  /**
   * The maximum number of labeling jobs to return in each page of the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the result of the previous `ListLabelingJobsForWorkteam` request was truncated, the response includes a `NextToken`. To retrieve the next set of labeling jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A filter that returns only labeling jobs created after the specified time (timestamp).
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only labeling jobs created before the specified time (timestamp).
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter the limits jobs to only the ones whose job reference code contains the specified string.
   *
   * @public
   */
  JobReferenceCodeContains?: string | undefined;

  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: ListLabelingJobsForWorkteamSortByOptions | undefined;

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
export interface ListLabelingJobsForWorkteamResponse {
  /**
   * An array of `LabelingJobSummary` objects, each describing a labeling job.
   *
   * @public
   */
  LabelingJobSummaryList: LabelingJobForWorkteamSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of labeling jobs, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLineageGroupsRequest {
  /**
   * A timestamp to filter against lineage groups created after a certain point in time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * A timestamp to filter against lineage groups created before a certain point in time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The parameter by which to sort the results. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortLineageGroupsBy | undefined;

  /**
   * The sort order for the results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of algorithms, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of endpoints to return in the response. This value defaults to 10.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLineageGroupsResponse {
  /**
   * A list of lineage groups and their properties.
   *
   * @public
   */
  LineageGroupSummaries?: LineageGroupSummary[] | undefined;

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
export interface ListMlflowAppsRequest {
  /**
   * Use the `CreatedAfter` filter to only list MLflow Apps created after a specific date and time. Listed MLflow Apps are shown with a date and time such as `"2024-03-16T01:46:56+00:00"`. The `CreatedAfter` parameter takes in a Unix timestamp.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * Use the `CreatedBefore` filter to only list MLflow Apps created before a specific date and time. Listed MLflow Apps are shown with a date and time such as `"2024-03-16T01:46:56+00:00"`. The `CreatedAfter` parameter takes in a Unix timestamp.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * Filter for Mlflow apps with a specific creation status.
   *
   * @public
   */
  Status?: MlflowAppStatus | undefined;

  /**
   * Filter for Mlflow Apps with the specified version.
   *
   * @public
   */
  MlflowVersion?: string | undefined;

  /**
   * Filter for MLflow Apps with the specified default SageMaker Domain ID.
   *
   * @public
   */
  DefaultForDomainId?: string | undefined;

  /**
   * Filter for MLflow Apps with the specified `AccountDefaultStatus`.
   *
   * @public
   */
  AccountDefaultStatus?: AccountDefaultStatus | undefined;

  /**
   * Filter for MLflow Apps sorting by name, creation time, or creation status.
   *
   * @public
   */
  SortBy?: SortMlflowAppBy | undefined;

  /**
   * Change the order of the listed MLflow Apps. By default, MLflow Apps are listed in `Descending` order by creation time. To change the list order, specify `SortOrder` to be `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the previous response was truncated, use this token in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of MLflow Apps to list.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary of the Mlflow App to list.
 *
 * @public
 */
export interface MlflowAppSummary {
  /**
   * The ARN of a listed MLflow App.
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
   * The status of the MLflow App.
   *
   * @public
   */
  Status?: MlflowAppStatus | undefined;

  /**
   * The creation time of a listed MLflow App.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last modified time of a listed MLflow App.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The version of a listed MLflow App.
   *
   * @public
   */
  MlflowVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListMlflowAppsResponse {
  /**
   * A list of MLflow Apps according to chosen filters.
   *
   * @public
   */
  Summaries?: MlflowAppSummary[] | undefined;

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
export interface ListMlflowTrackingServersRequest {
  /**
   * Use the `CreatedAfter` filter to only list tracking servers created after a specific date and time. Listed tracking servers are shown with a date and time such as `"2024-03-16T01:46:56+00:00"`. The `CreatedAfter` parameter takes in a Unix timestamp. To convert a date and time into a Unix timestamp, see [EpochConverter](https://www.epochconverter.com/).
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * Use the `CreatedBefore` filter to only list tracking servers created before a specific date and time. Listed tracking servers are shown with a date and time such as `"2024-03-16T01:46:56+00:00"`. The `CreatedBefore` parameter takes in a Unix timestamp. To convert a date and time into a Unix timestamp, see [EpochConverter](https://www.epochconverter.com/).
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * Filter for tracking servers with a specified creation status.
   *
   * @public
   */
  TrackingServerStatus?: TrackingServerStatus | undefined;

  /**
   * Filter for tracking servers using the specified MLflow version.
   *
   * @public
   */
  MlflowVersion?: string | undefined;

  /**
   * Filter for trackings servers sorting by name, creation time, or creation status.
   *
   * @public
   */
  SortBy?: SortTrackingServerBy | undefined;

  /**
   * Change the order of the listed tracking servers. By default, tracking servers are listed in `Descending` order by creation time. To change the list order, you can specify `SortOrder` to be `Ascending`.
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
   * The maximum number of tracking servers to list.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary of the tracking server to list.
 *
 * @public
 */
export interface TrackingServerSummary {
  /**
   * The ARN of a listed tracking server.
   *
   * @public
   */
  TrackingServerArn?: string | undefined;

  /**
   * The name of a listed tracking server.
   *
   * @public
   */
  TrackingServerName?: string | undefined;

  /**
   * The creation time of a listed tracking server.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last modified time of a listed tracking server.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The creation status of a listed tracking server.
   *
   * @public
   */
  TrackingServerStatus?: TrackingServerStatus | undefined;

  /**
   * The activity status of a listed tracking server.
   *
   * @public
   */
  IsActive?: IsTrackingServerActive | undefined;

  /**
   * The MLflow version used for a listed tracking server.
   *
   * @public
   */
  MlflowVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListMlflowTrackingServersResponse {
  /**
   * A list of tracking servers according to chosen filters.
   *
   * @public
   */
  TrackingServerSummaries?: TrackingServerSummary[] | undefined;

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
export interface ListModelBiasJobDefinitionsRequest {
  /**
   * Name of the endpoint to monitor for model bias.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * Whether to sort results by the `Name` or `CreationTime` field. The default is `CreationTime`.
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
   * The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of model bias jobs to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter for model bias jobs whose name contains a specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only model bias jobs created before a specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only model bias jobs created after a specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelBiasJobDefinitionsResponse {
  /**
   * A JSON array in which each element is a summary for a model bias jobs.
   *
   * @public
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelCardExportJobsRequest {
  /**
   * List export jobs for the model card with the specified name.
   *
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * List export jobs for the model card with the specified version.
   *
   * @public
   */
  ModelCardVersion?: number | undefined;

  /**
   * Only list model card export jobs that were created after the time specified.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Only list model card export jobs that were created before the time specified.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Only list model card export jobs with names that contain the specified string.
   *
   * @public
   */
  ModelCardExportJobNameContains?: string | undefined;

  /**
   * Only list model card export jobs with the specified status.
   *
   * @public
   */
  StatusEquals?: ModelCardExportJobStatus | undefined;

  /**
   * Sort model card export jobs by either name or creation time. Sorts by creation time by default.
   *
   * @public
   */
  SortBy?: ModelCardExportJobSortBy | undefined;

  /**
   * Sort model card export jobs by ascending or descending order.
   *
   * @public
   */
  SortOrder?: ModelCardExportJobSortOrder | undefined;

  /**
   * If the response to a previous `ListModelCardExportJobs` request was truncated, the response includes a `NextToken`. To retrieve the next set of model card export jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of model card export jobs to list.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary of the Amazon SageMaker Model Card export job.
 *
 * @public
 */
export interface ModelCardExportJobSummary {
  /**
   * The name of the model card export job.
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
   * @public
   */
  Status: ModelCardExportJobStatus | undefined;

  /**
   * The name of the model card that the export job exports.
   *
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * The version of the model card that the export job exports.
   *
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * The date and time that the model card export job was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The date and time that the model card export job was last modified..
   *
   * @public
   */
  LastModifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListModelCardExportJobsResponse {
  /**
   * The summaries of the listed model card export jobs.
   *
   * @public
   */
  ModelCardExportJobSummaries: ModelCardExportJobSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of model card export jobs, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelCardsRequest {
  /**
   * Only list model cards that were created after the time specified.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Only list model cards that were created before the time specified.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The maximum number of model cards to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Only list model cards with names that contain the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Only list model cards with the specified approval status.
   *
   * @public
   */
  ModelCardStatus?: ModelCardStatus | undefined;

  /**
   * If the response to a previous `ListModelCards` request was truncated, the response includes a `NextToken`. To retrieve the next set of model cards, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Sort model cards by either name or creation time. Sorts by creation time by default.
   *
   * @public
   */
  SortBy?: ModelCardSortBy | undefined;

  /**
   * Sort model cards by ascending or descending order.
   *
   * @public
   */
  SortOrder?: ModelCardSortOrder | undefined;
}

/**
 * A summary of the model card.
 *
 * @public
 */
export interface ModelCardSummary {
  /**
   * The name of the model card.
   *
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model card.
   *
   * @public
   */
  ModelCardArn: string | undefined;

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
   * The date and time that the model card was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The date and time that the model card was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelCardsResponse {
  /**
   * The summaries of the listed model cards.
   *
   * @public
   */
  ModelCardSummaries: ModelCardSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of model cards, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelCardVersionsRequest {
  /**
   * Only list model card versions that were created after the time specified.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Only list model card versions that were created before the time specified.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The maximum number of model card versions to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * List model card versions for the model card with the specified name or Amazon Resource Name (ARN).
   *
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * Only list model card versions with the specified approval status.
   *
   * @public
   */
  ModelCardStatus?: ModelCardStatus | undefined;

  /**
   * If the response to a previous `ListModelCardVersions` request was truncated, the response includes a `NextToken`. To retrieve the next set of model card versions, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Sort listed model card versions by version. Sorts by version by default.
   *
   * @public
   */
  SortBy?: ModelCardVersionSortBy | undefined;

  /**
   * Sort model card versions by ascending or descending order.
   *
   * @public
   */
  SortOrder?: ModelCardSortOrder | undefined;
}

/**
 * A summary of a specific version of the model card.
 *
 * @public
 */
export interface ModelCardVersionSummary {
  /**
   * The name of the model card.
   *
   * @public
   */
  ModelCardName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model card.
   *
   * @public
   */
  ModelCardArn: string | undefined;

  /**
   * The approval status of the model card version within your organization. Different organizations might have different criteria for model card review and approval.
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
   * A version of the model card.
   *
   * @public
   */
  ModelCardVersion: number | undefined;

  /**
   * The date and time that the model card version was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The time date and time that the model card version was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelCardVersionsResponse {
  /**
   * The summaries of the listed versions of the model card.
   *
   * @public
   */
  ModelCardVersionSummaryList: ModelCardVersionSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of model card versions, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelExplainabilityJobDefinitionsRequest {
  /**
   * Name of the endpoint to monitor for model explainability.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * Whether to sort results by the `Name` or `CreationTime` field. The default is `CreationTime`.
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
   * The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of jobs to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter for model explainability jobs whose name contains a specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only model explainability jobs created before a specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only model explainability jobs created after a specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelExplainabilityJobDefinitionsResponse {
  /**
   * A JSON array in which each element is a summary for a explainability bias jobs.
   *
   * @public
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Part of the search expression. You can specify the name and value (domain, task, framework, framework version, task, and model).
 *
 * @public
 */
export interface ModelMetadataFilter {
  /**
   * The name of the of the model to filter by.
   *
   * @public
   */
  Name: ModelMetadataFilterType | undefined;

  /**
   * The value to filter the model metadata.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * One or more filters that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results
 *
 * @public
 */
export interface ModelMetadataSearchExpression {
  /**
   * A list of filter objects.
   *
   * @public
   */
  Filters?: ModelMetadataFilter[] | undefined;
}

/**
 * @public
 */
export interface ListModelMetadataRequest {
  /**
   * One or more filters that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. Specify the Framework, FrameworkVersion, Domain or Task to filter supported. Filter names and values are case-sensitive.
   *
   * @public
   */
  SearchExpression?: ModelMetadataSearchExpression | undefined;

  /**
   * If the response to a previous `ListModelMetadataResponse` request was truncated, the response includes a NextToken. To retrieve the next set of model metadata, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of models to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A summary of the model metadata.
 *
 * @public
 */
export interface ModelMetadataSummary {
  /**
   * The machine learning domain of the model.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * The machine learning framework of the model.
   *
   * @public
   */
  Framework: string | undefined;

  /**
   * The machine learning task of the model.
   *
   * @public
   */
  Task: string | undefined;

  /**
   * The name of the model.
   *
   * @public
   */
  Model: string | undefined;

  /**
   * The framework version of the model.
   *
   * @public
   */
  FrameworkVersion: string | undefined;
}

/**
 * @public
 */
export interface ListModelMetadataResponse {
  /**
   * A structure that holds model metadata.
   *
   * @public
   */
  ModelMetadataSummaries: ModelMetadataSummary[] | undefined;

  /**
   * A token for getting the next set of recommendations, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelPackageGroupsInput {
  /**
   * A filter that returns only model groups created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only model groups created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A string in the model group name. This filter returns only model groups whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * If the result of the previous `ListModelPackageGroups` request was truncated, the response includes a `NextToken`. To retrieve the next set of model groups, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: ModelPackageGroupSortBy | undefined;

  /**
   * The sort order for results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * A filter that returns either model groups shared with you or model groups in your own account. When the value is `CrossAccount`, the results show the resources made discoverable to you from other accounts. When the value is `SameAccount` or `null`, the results show resources from your account. The default is `SameAccount`.
   *
   * @public
   */
  CrossAccountFilterOption?: CrossAccountFilterOption | undefined;
}

/**
 * Summary information about a model group.
 *
 * @public
 */
export interface ModelPackageGroupSummary {
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
export interface ListModelPackageGroupsOutput {
  /**
   * A list of summaries of the model groups in your Amazon Web Services account.
   *
   * @public
   */
  ModelPackageGroupSummaryList: ModelPackageGroupSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of model groups, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelPackagesInput {
  /**
   * A filter that returns only model packages created after the specified time (timestamp).
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only model packages created before the specified time (timestamp).
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The maximum number of model packages to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A string in the model package name. This filter returns only model packages whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only the model packages with the specified approval status.
   *
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus | undefined;

  /**
   * A filter that returns only model versions that belong to the specified model group.
   *
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * A filter that returns only the model packages of the specified type. This can be one of the following values.
   *
   * - `UNVERSIONED` - List only unversioined models. This is the default value if no `ModelPackageType` is specified.
   * - `VERSIONED` - List only versioned models.
   * - `BOTH` - List both versioned and unversioned models.
   *
   * @public
   */
  ModelPackageType?: ModelPackageType | undefined;

  /**
   * If the response to a previous `ListModelPackages` request was truncated, the response includes a `NextToken`. To retrieve the next set of model packages, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The parameter by which to sort the results. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: ModelPackageSortBy | undefined;

  /**
   * The sort order for the results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Provides summary information about a model package.
 *
 * @public
 */
export interface ModelPackageSummary {
  /**
   * The name of the model package.
   *
   * @public
   */
  ModelPackageName?: string | undefined;

  /**
   * If the model package is a versioned model, the model group that the versioned model belongs to.
   *
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * If the model package is a versioned model, the version of the model.
   *
   * @public
   */
  ModelPackageVersion?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model package.
   *
   * @public
   */
  ModelPackageArn: string | undefined;

  /**
   * A brief description of the model package.
   *
   * @public
   */
  ModelPackageDescription?: string | undefined;

  /**
   * A timestamp that shows when the model package was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The overall status of the model package.
   *
   * @public
   */
  ModelPackageStatus: ModelPackageStatus | undefined;

  /**
   * The approval status of the model. This can be one of the following values.
   *
   * - `APPROVED` - The model is approved
   * - `REJECTED` - The model is rejected.
   * - `PENDING_MANUAL_APPROVAL` - The model is waiting for manual approval.
   *
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus | undefined;

  /**
   * A structure describing the current state of the model in its life cycle.
   *
   * @public
   */
  ModelLifeCycle?: ModelLifeCycle | undefined;

  /**
   * The package registration type of the model package summary.
   *
   * @public
   */
  ModelPackageRegistrationType?: ModelPackageRegistrationType | undefined;
}

/**
 * @public
 */
export interface ListModelPackagesOutput {
  /**
   * An array of `ModelPackageSummary` objects, each of which lists a model package.
   *
   * @public
   */
  ModelPackageSummaryList: ModelPackageSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of model packages, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelQualityJobDefinitionsRequest {
  /**
   * A filter that returns only model quality monitoring job definitions that are associated with the specified endpoint.
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
   * If the result of the previous `ListModelQualityJobDefinitions` request was truncated, the response includes a `NextToken`. To retrieve the next set of model quality monitoring job definitions, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in a call to `ListModelQualityJobDefinitions`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A string in the transform job name. This filter returns only model quality monitoring job definitions whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only model quality monitoring job definitions created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only model quality monitoring job definitions created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelQualityJobDefinitionsResponse {
  /**
   * A list of summaries of model quality monitoring job definitions.
   *
   * @public
   */
  JobDefinitionSummaries: MonitoringJobDefinitionSummary[] | undefined;

  /**
   * If the response is truncated, Amazon SageMaker AI returns this token. To retrieve the next set of model quality monitoring job definitions, use it in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListModelsInput {
  /**
   * Sorts the list of results. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: ModelSortKey | undefined;

  /**
   * The sort order for results. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: OrderKey | undefined;

  /**
   * If the response to a previous `ListModels` request was truncated, the response includes a `NextToken`. To retrieve the next set of models, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of models to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A string in the model name. This filter returns only models whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only models created before the specified time (timestamp).
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only models with a creation time greater than or equal to the specified time (timestamp).
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;
}

/**
 * Provides summary information about a model.
 *
 * @public
 */
export interface ModelSummary {
  /**
   * The name of the model that you want a summary for.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model.
   *
   * @public
   */
  ModelArn: string | undefined;

  /**
   * A timestamp that indicates when the model was created.
   *
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListModelsOutput {
  /**
   * An array of `ModelSummary` objects, each of which lists a model.
   *
   * @public
   */
  Models: ModelSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of models, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertHistoryRequest {
  /**
   * The name of a monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleName?: string | undefined;

  /**
   * The name of a monitoring alert.
   *
   * @public
   */
  MonitoringAlertName?: string | undefined;

  /**
   * The field used to sort results. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: MonitoringAlertHistorySortKey | undefined;

  /**
   * The sort order, whether `Ascending` or `Descending`, of the alert history. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the result of the previous `ListMonitoringAlertHistory` request was truncated, the response includes a `NextToken`. To retrieve the next set of alerts in the history, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to display. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A filter that returns only alerts created on or before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only alerts created on or after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that retrieves only alerts with a specific status.
   *
   * @public
   */
  StatusEquals?: MonitoringAlertStatus | undefined;
}

/**
 * Provides summary information of an alert's history.
 *
 * @public
 */
export interface MonitoringAlertHistorySummary {
  /**
   * The name of a monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * The name of a monitoring alert.
   *
   * @public
   */
  MonitoringAlertName: string | undefined;

  /**
   * A timestamp that indicates when the first alert transition occurred in an alert history. An alert transition can be from status `InAlert` to `OK`, or from `OK` to `InAlert`.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The current alert status of an alert.
   *
   * @public
   */
  AlertStatus: MonitoringAlertStatus | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertHistoryResponse {
  /**
   * An alert history for a model monitoring schedule.
   *
   * @public
   */
  MonitoringAlertHistory?: MonitoringAlertHistorySummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of alerts, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertsRequest {
  /**
   * The name of a monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * If the result of the previous `ListMonitoringAlerts` request was truncated, the response includes a `NextToken`. To retrieve the next set of alerts in the history, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to display. The default is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * An alert action taken to light up an icon on the Amazon SageMaker Model Dashboard when an alert goes into `InAlert` status.
 *
 * @public
 */
export interface ModelDashboardIndicatorAction {
  /**
   * Indicates whether the alert action is turned on.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * A list of alert actions taken in response to an alert going into `InAlert` status.
 *
 * @public
 */
export interface MonitoringAlertActions {
  /**
   * An alert action taken to light up an icon on the Model Dashboard when an alert goes into `InAlert` status.
   *
   * @public
   */
  ModelDashboardIndicator?: ModelDashboardIndicatorAction | undefined;
}

/**
 * Provides summary information about a monitor alert.
 *
 * @public
 */
export interface MonitoringAlertSummary {
  /**
   * The name of a monitoring alert.
   *
   * @public
   */
  MonitoringAlertName: string | undefined;

  /**
   * A timestamp that indicates when a monitor alert was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp that indicates when a monitor alert was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The current status of an alert.
   *
   * @public
   */
  AlertStatus: MonitoringAlertStatus | undefined;

  /**
   * Within `EvaluationPeriod`, how many execution failures will raise an alert.
   *
   * @public
   */
  DatapointsToAlert: number | undefined;

  /**
   * The number of most recent monitoring executions to consider when evaluating alert status.
   *
   * @public
   */
  EvaluationPeriod: number | undefined;

  /**
   * A list of alert actions taken in response to an alert going into `InAlert` status.
   *
   * @public
   */
  Actions: MonitoringAlertActions | undefined;
}

/**
 * @public
 */
export interface ListMonitoringAlertsResponse {
  /**
   * A JSON array where each element is a summary for a monitoring alert.
   *
   * @public
   */
  MonitoringAlertSummaries?: MonitoringAlertSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of alerts, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitoringExecutionsRequest {
  /**
   * Name of a specific schedule to fetch jobs for.
   *
   * @public
   */
  MonitoringScheduleName?: string | undefined;

  /**
   * Name of a specific endpoint to fetch jobs for.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * Whether to sort the results by the `Status`, `CreationTime`, or `ScheduledTime` field. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: MonitoringExecutionSortKey | undefined;

  /**
   * Whether to sort the results in `Ascending` or `Descending` order. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of jobs to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter for jobs scheduled before a specified time.
   *
   * @public
   */
  ScheduledTimeBefore?: Date | undefined;

  /**
   * Filter for jobs scheduled after a specified time.
   *
   * @public
   */
  ScheduledTimeAfter?: Date | undefined;

  /**
   * A filter that returns only jobs created before a specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only jobs created after a specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only jobs modified after a specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A filter that returns only jobs modified before a specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that retrieves only jobs with a specific status.
   *
   * @public
   */
  StatusEquals?: ExecutionStatus | undefined;

  /**
   * Gets a list of the monitoring job runs of the specified monitoring job definitions.
   *
   * @public
   */
  MonitoringJobDefinitionName?: string | undefined;

  /**
   * A filter that returns only the monitoring job runs of the specified monitoring type.
   *
   * @public
   */
  MonitoringTypeEquals?: MonitoringType | undefined;
}

/**
 * @public
 */
export interface ListMonitoringExecutionsResponse {
  /**
   * A JSON array in which each element is a summary for a monitoring execution.
   *
   * @public
   */
  MonitoringExecutionSummaries: MonitoringExecutionSummary[] | undefined;

  /**
   * The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitoringSchedulesRequest {
  /**
   * Name of a specific endpoint to fetch schedules for.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * Whether to sort the results by the `Status`, `CreationTime`, or `ScheduledTime` field. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: MonitoringScheduleSortKey | undefined;

  /**
   * Whether to sort the results in `Ascending` or `Descending` order. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of jobs to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter for monitoring schedules whose name contains a specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only monitoring schedules created before a specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only monitoring schedules created after a specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only monitoring schedules modified before a specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A filter that returns only monitoring schedules modified after a specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only monitoring schedules modified before a specified time.
   *
   * @public
   */
  StatusEquals?: ScheduleStatus | undefined;

  /**
   * Gets a list of the monitoring schedules for the specified monitoring job definition.
   *
   * @public
   */
  MonitoringJobDefinitionName?: string | undefined;

  /**
   * A filter that returns only the monitoring schedules for the specified monitoring type.
   *
   * @public
   */
  MonitoringTypeEquals?: MonitoringType | undefined;
}

/**
 * Summarizes the monitoring schedule.
 *
 * @public
 */
export interface MonitoringScheduleSummary {
  /**
   * The name of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * The creation time of the monitoring schedule.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The last time the monitoring schedule was modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The status of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleStatus: ScheduleStatus | undefined;

  /**
   * The name of the endpoint using the monitoring schedule.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * The name of the monitoring job definition that the schedule is for.
   *
   * @public
   */
  MonitoringJobDefinitionName?: string | undefined;

  /**
   * The type of the monitoring job definition that the schedule is for.
   *
   * @public
   */
  MonitoringType?: MonitoringType | undefined;
}

/**
 * @public
 */
export interface ListMonitoringSchedulesResponse {
  /**
   * A JSON array in which each element is a summary for a monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleSummaries: MonitoringScheduleSummary[] | undefined;

  /**
   * The token returned if the response is truncated. To retrieve the next set of job executions, use it in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotebookInstanceLifecycleConfigsInput {
  /**
   * If the result of a `ListNotebookInstanceLifecycleConfigs` request was truncated, the response includes a `NextToken`. To get the next set of lifecycle configurations, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of lifecycle configurations to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Sorts the list of results. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: NotebookInstanceLifecycleConfigSortKey | undefined;

  /**
   * The sort order for results.
   *
   * @public
   */
  SortOrder?: NotebookInstanceLifecycleConfigSortOrder | undefined;

  /**
   * A string in the lifecycle configuration name. This filter returns only lifecycle configurations whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only lifecycle configurations that were created before the specified time (timestamp).
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only lifecycle configurations that were created after the specified time (timestamp).
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only lifecycle configurations that were modified before the specified time (timestamp).
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A filter that returns only lifecycle configurations that were modified after the specified time (timestamp).
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;
}

/**
 * Provides a summary of a notebook instance lifecycle configuration.
 *
 * @public
 */
export interface NotebookInstanceLifecycleConfigSummary {
  /**
   * The name of the lifecycle configuration.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lifecycle configuration.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigArn: string | undefined;

  /**
   * A timestamp that tells when the lifecycle configuration was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A timestamp that tells when the lifecycle configuration was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListNotebookInstanceLifecycleConfigsOutput {
  /**
   * If the response is truncated, SageMaker AI returns this token. To get the next set of lifecycle configurations, use it in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of `NotebookInstanceLifecycleConfiguration` objects, each listing a lifecycle configuration.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[] | undefined;
}

/**
 * @public
 */
export interface ListNotebookInstancesInput {
  /**
   * If the previous call to the `ListNotebookInstances` is truncated, the response includes a `NextToken`. You can use this token in your subsequent `ListNotebookInstances` request to fetch the next set of notebook instances.
   *
   * > **Note:** You might specify a filter or a sort order in your request. When response is truncated, you must use the same values for the filer and sort order in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of notebook instances to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The field to sort results by. The default is `Name`.
   *
   * @public
   */
  SortBy?: NotebookInstanceSortKey | undefined;

  /**
   * The sort order for results.
   *
   * @public
   */
  SortOrder?: NotebookInstanceSortOrder | undefined;

  /**
   * A string in the notebook instances' name. This filter returns only notebook instances whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only notebook instances that were created before the specified time (timestamp).
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only notebook instances that were created after the specified time (timestamp).
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only notebook instances that were modified before the specified time (timestamp).
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A filter that returns only notebook instances that were modified after the specified time (timestamp).
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only notebook instances with the specified status.
   *
   * @public
   */
  StatusEquals?: NotebookInstanceStatus | undefined;

  /**
   * A string in the name of a notebook instances lifecycle configuration associated with this notebook instance. This filter returns only notebook instances associated with a lifecycle configuration with a name that contains the specified string.
   *
   * @public
   */
  NotebookInstanceLifecycleConfigNameContains?: string | undefined;

  /**
   * A string in the name or URL of a Git repository associated with this notebook instance. This filter returns only notebook instances associated with a git repository with a name that contains the specified string.
   *
   * @public
   */
  DefaultCodeRepositoryContains?: string | undefined;

  /**
   * A filter that returns only notebook instances with associated with the specified git repository.
   *
   * @public
   */
  AdditionalCodeRepositoryEquals?: string | undefined;
}

/**
 * Provides summary information for an SageMaker AI notebook instance.
 *
 * @public
 */
export interface NotebookInstanceSummary {
  /**
   * The name of the notebook instance that you want a summary for.
   *
   * @public
   */
  NotebookInstanceName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notebook instance.
   *
   * @public
   */
  NotebookInstanceArn: string | undefined;

  /**
   * The status of the notebook instance.
   *
   * @public
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | undefined;

  /**
   * The URL that you use to connect to the Jupyter notebook running in your notebook instance.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The type of ML compute instance that the notebook instance is running on.
   *
   * @public
   */
  InstanceType?: _InstanceType | undefined;

  /**
   * A timestamp that shows when the notebook instance was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A timestamp that shows when the notebook instance was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The name of a notebook instance lifecycle configuration associated with this notebook instance.
   *
   * For information about notebook instance lifestyle configurations, see [Step 2.1: (Optional) Customize a Notebook Instance](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html).
   *
   * @public
   */
  NotebookInstanceLifecycleConfigName?: string | undefined;

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
}

/**
 * @public
 */
export interface ListNotebookInstancesOutput {
  /**
   * If the response to the previous `ListNotebookInstances` request was truncated, SageMaker AI returns this token. To retrieve the next set of notebook instances, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of `NotebookInstanceSummary` objects, one for each notebook instance.
   *
   * @public
   */
  NotebookInstances?: NotebookInstanceSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOptimizationJobsRequest {
  /**
   * A token that you use to get the next set of results following a truncated response. If the response to the previous request was truncated, that response provides the value for this token.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of optimization jobs to return in the response. The default is 50.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters the results to only those optimization jobs that were created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Filters the results to only those optimization jobs that were created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * Filters the results to only those optimization jobs that were updated after the specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * Filters the results to only those optimization jobs that were updated before the specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * Filters the results to only those optimization jobs that apply the specified optimization techniques. You can specify either `Quantization` or `Compilation`.
   *
   * @public
   */
  OptimizationContains?: string | undefined;

  /**
   * Filters the results to only those optimization jobs with a name that contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Filters the results to only those optimization jobs with the specified status.
   *
   * @public
   */
  StatusEquals?: OptimizationJobStatus | undefined;

  /**
   * The field by which to sort the optimization jobs in the response. The default is `CreationTime`
   *
   * @public
   */
  SortBy?: ListOptimizationJobsSortBy | undefined;

  /**
   * The sort order for results. The default is `Ascending`
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Summarizes an optimization job by providing some of its key properties.
 *
 * @public
 */
export interface OptimizationJobSummary {
  /**
   * The name that you assigned to the optimization job.
   *
   * @public
   */
  OptimizationJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the optimization job.
   *
   * @public
   */
  OptimizationJobArn: string | undefined;

  /**
   * The time when you created the optimization job.
   *
   * @public
   */
  CreationTime: Date | undefined;

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
   * The time when the optimization job was last updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

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
   * The optimization techniques that are applied by the optimization job.
   *
   * @public
   */
  OptimizationTypes: string[] | undefined;
}

/**
 * @public
 */
export interface ListOptimizationJobsResponse {
  /**
   * A list of optimization jobs and their properties that matches any of the filters you specified in the request.
   *
   * @public
   */
  OptimizationJobSummaries: OptimizationJobSummary[] | undefined;

  /**
   * The token to use in a subsequent request to get the next set of results following a truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPartnerAppsRequest {
  /**
   * This parameter defines the maximum number of results that can be returned in a single response. The `MaxResults` parameter is an upper bound, not a target. If there are more results available than the value specified, a `NextToken` is provided in the response. The `NextToken` indicates that the user should get the next set of results by providing this token as a part of a subsequent call. The default value for `MaxResults` is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A subset of information related to a SageMaker Partner AI App. This information is used as part of the `ListPartnerApps` API response.
 *
 * @public
 */
export interface PartnerAppSummary {
  /**
   * The ARN of the SageMaker Partner AI App.
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
   * The type of SageMaker Partner AI App to create. Must be one of the following: `lakera-guard`, `comet`, `deepchecks-llm-evaluation`, or `fiddler`.
   *
   * @public
   */
  Type?: PartnerAppType | undefined;

  /**
   * The status of the SageMaker Partner AI App.
   *
   * @public
   */
  Status?: PartnerAppStatus | undefined;

  /**
   * The creation time of the SageMaker Partner AI App.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPartnerAppsResponse {
  /**
   * The information related to each of the SageMaker Partner AI Apps in an account.
   *
   * @public
   */
  Summaries?: PartnerAppSummary[] | undefined;

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
export interface ListPipelineExecutionsRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  PipelineName: string | undefined;

  /**
   * A filter that returns the pipeline executions that were created after a specified time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * A filter that returns the pipeline executions that were created before a specified time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The field by which to sort results. The default is `CreatedTime`.
   *
   * @public
   */
  SortBy?: SortPipelineExecutionsBy | undefined;

  /**
   * The sort order for results.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the result of the previous `ListPipelineExecutions` request was truncated, the response includes a `NextToken`. To retrieve the next set of pipeline executions, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of pipeline executions to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A pipeline execution summary.
 *
 * @public
 */
export interface PipelineExecutionSummary {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn?: string | undefined;

  /**
   * The start time of the pipeline execution.
   *
   * @public
   */
  StartTime?: Date | undefined;

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
   * The display name of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionDisplayName?: string | undefined;

  /**
   * A message generated by SageMaker Pipelines describing why the pipeline execution failed.
   *
   * @public
   */
  PipelineExecutionFailureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineExecutionsResponse {
  /**
   * Contains a sorted list of pipeline execution summary objects matching the specified filters. Each run summary includes the Amazon Resource Name (ARN) of the pipeline execution, the run date, and the status. This list can be empty.
   *
   * @public
   */
  PipelineExecutionSummaries?: PipelineExecutionSummary[] | undefined;

  /**
   * If the result of the previous `ListPipelineExecutions` request was truncated, the response includes a `NextToken`. To retrieve the next set of pipeline executions, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineExecutionStepsRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn?: string | undefined;

  /**
   * If the result of the previous `ListPipelineExecutionSteps` request was truncated, the response includes a `NextToken`. To retrieve the next set of pipeline execution steps, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of pipeline execution steps to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The field by which to sort results. The default is `CreatedTime`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Metadata for Model steps.
 *
 * @public
 */
export interface ModelStepMetadata {
  /**
   * The Amazon Resource Name (ARN) of the created model.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Metadata for a processing job step.
 *
 * @public
 */
export interface ProcessingJobStepMetadata {
  /**
   * The Amazon Resource Name (ARN) of the processing job.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Container for the metadata for a Quality check step. For more information, see the topic on [QualityCheck step](https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-quality-check) in the *Amazon SageMaker Developer Guide*.
 *
 * @public
 */
export interface QualityCheckStepMetadata {
  /**
   * The type of the Quality check step.
   *
   * @public
   */
  CheckType?: string | undefined;

  /**
   * The Amazon S3 URI of the baseline statistics file used for the drift check.
   *
   * @public
   */
  BaselineUsedForDriftCheckStatistics?: string | undefined;

  /**
   * The Amazon S3 URI of the baseline constraints file used for the drift check.
   *
   * @public
   */
  BaselineUsedForDriftCheckConstraints?: string | undefined;

  /**
   * The Amazon S3 URI of the newly calculated baseline statistics file.
   *
   * @public
   */
  CalculatedBaselineStatistics?: string | undefined;

  /**
   * The Amazon S3 URI of the newly calculated baseline constraints file.
   *
   * @public
   */
  CalculatedBaselineConstraints?: string | undefined;

  /**
   * The model package group name.
   *
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * The Amazon S3 URI of violation report if violations are detected.
   *
   * @public
   */
  ViolationReport?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Quality check processing job that was run by this step execution.
   *
   * @public
   */
  CheckJobArn?: string | undefined;

  /**
   * This flag indicates if the drift check against the previous baseline will be skipped or not. If it is set to `False`, the previous baseline of the configured check type must be available.
   *
   * @public
   */
  SkipCheck?: boolean | undefined;

  /**
   * This flag indicates if a newly calculated baseline can be accessed through step properties `BaselineUsedForDriftCheckConstraints` and `BaselineUsedForDriftCheckStatistics`. If it is set to `False`, the previous baseline of the configured check type must also be available. These can be accessed through the `BaselineUsedForDriftCheckConstraints` and `BaselineUsedForDriftCheckStatistics` properties.
   *
   * @public
   */
  RegisterNewBaseline?: boolean | undefined;
}

/**
 * Metadata for a register model job step.
 *
 * @public
 */
export interface RegisterModelStepMetadata {
  /**
   * The Amazon Resource Name (ARN) of the model package.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Metadata for a training job step.
 *
 * @public
 */
export interface TrainingJobStepMetadata {
  /**
   * The Amazon Resource Name (ARN) of the training job that was run by this step execution.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Metadata for a transform job step.
 *
 * @public
 */
export interface TransformJobStepMetadata {
  /**
   * The Amazon Resource Name (ARN) of the transform job that was run by this step execution.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Metadata for a tuning step.
 *
 * @public
 */
export interface TuningJobStepMetaData {
  /**
   * The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Metadata for a step execution.
 *
 * @public
 */
export interface PipelineExecutionStepMetadata {
  /**
   * The Amazon Resource Name (ARN) of the training job that was run by this step execution.
   *
   * @public
   */
  TrainingJob?: TrainingJobStepMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of the processing job that was run by this step execution.
   *
   * @public
   */
  ProcessingJob?: ProcessingJobStepMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of the transform job that was run by this step execution.
   *
   * @public
   */
  TransformJob?: TransformJobStepMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of the tuning job that was run by this step execution.
   *
   * @public
   */
  TuningJob?: TuningJobStepMetaData | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model that was created by this step execution.
   *
   * @public
   */
  Model?: ModelStepMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model package that the model was registered to by this step execution.
   *
   * @public
   */
  RegisterModel?: RegisterModelStepMetadata | undefined;

  /**
   * The outcome of the condition evaluation that was run by this step execution.
   *
   * @public
   */
  Condition?: ConditionStepMetadata | undefined;

  /**
   * The URL of the Amazon SQS queue used by this step execution, the pipeline generated token, and a list of output parameters.
   *
   * @public
   */
  Callback?: CallbackStepMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function that was run by this step execution and a list of output parameters.
   *
   * @public
   */
  Lambda?: LambdaStepMetadata | undefined;

  /**
   * The configurations and outcomes of an Amazon EMR step execution.
   *
   * @public
   */
  EMR?: EMRStepMetadata | undefined;

  /**
   * The configurations and outcomes of an Amazon EMR Serverless step execution.
   *
   * @public
   */
  EMRServerless?: EMRServerlessStepMetadata | undefined;

  /**
   * The configurations and outcomes of the check step execution. This includes:
   *
   * - The type of the check conducted.
   * - The Amazon S3 URIs of baseline constraints and statistics files to be used for the drift check.
   * - The Amazon S3 URIs of newly calculated baseline constraints and statistics.
   * - The model package group name provided.
   * - The Amazon S3 URI of the violation report if violations detected.
   * - The Amazon Resource Name (ARN) of check processing job initiated by the step execution.
   * - The Boolean flags indicating if the drift check is skipped.
   * - If step property `BaselineUsedForDriftCheck` is set the same as `CalculatedBaseline`.
   *
   * @public
   */
  QualityCheck?: QualityCheckStepMetadata | undefined;

  /**
   * Container for the metadata for a Clarify check step. The configurations and outcomes of the check step execution. This includes:
   *
   * - The type of the check conducted,
   * - The Amazon S3 URIs of baseline constraints and statistics files to be used for the drift check.
   * - The Amazon S3 URIs of newly calculated baseline constraints and statistics.
   * - The model package group name provided.
   * - The Amazon S3 URI of the violation report if violations detected.
   * - The Amazon Resource Name (ARN) of check processing job initiated by the step execution.
   * - The boolean flags indicating if the drift check is skipped.
   * - If step property `BaselineUsedForDriftCheck` is set the same as `CalculatedBaseline`.
   *
   * @public
   */
  ClarifyCheck?: ClarifyCheckStepMetadata | undefined;

  /**
   * The configurations and outcomes of a Fail step execution.
   *
   * @public
   */
  Fail?: FailStepMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AutoML job that was run by this step.
   *
   * @public
   */
  AutoMLJob?: AutoMLJobStepMetadata | undefined;

  /**
   * The endpoint that was invoked during this step execution.
   *
   * @public
   */
  Endpoint?: EndpointStepMetadata | undefined;

  /**
   * The endpoint configuration used to create an endpoint during this step execution.
   *
   * @public
   */
  EndpointConfig?: EndpointConfigStepMetadata | undefined;

  /**
   * The metadata of the Amazon Bedrock custom model used in the pipeline execution step.
   *
   * @public
   */
  BedrockCustomModel?: BedrockCustomModelMetadata | undefined;

  /**
   * The metadata of the Amazon Bedrock custom model deployment used in pipeline execution step.
   *
   * @public
   */
  BedrockCustomModelDeployment?: BedrockCustomModelDeploymentMetadata | undefined;

  /**
   * The metadata of the Amazon Bedrock provisioned model throughput used in the pipeline execution step.
   *
   * @public
   */
  BedrockProvisionedModelThroughput?: BedrockProvisionedModelThroughputMetadata | undefined;

  /**
   * The metadata of Amazon Bedrock model import used in pipeline execution step.
   *
   * @public
   */
  BedrockModelImport?: BedrockModelImportMetadata | undefined;

  /**
   * The metadata of the inference component used in pipeline execution step.
   *
   * @public
   */
  InferenceComponent?: InferenceComponentMetadata | undefined;

  /**
   * The metadata of the lineage used in pipeline execution step.
   *
   * @public
   */
  Lineage?: LineageMetadata | undefined;

  /**
   * The metadata for a SageMaker job used in a pipeline execution step.
   *
   * @public
   */
  Job?: JobStepMetadata | undefined;

  /**
   * The metadata for the Athena step execution.
   *
   * @public
   */
  Athena?: AthenaStepMetadata | undefined;

  /**
   * The metadata for the cleanup step execution.
   *
   * @public
   */
  Cleanup?: CleanupStepMetadata | undefined;

  /**
   * The metadata for the ForEach step execution.
   *
   * @public
   */
  ForEach?: ForEachStepMetadata | undefined;
}

/**
 * The ARN from an execution of the current pipeline.
 *
 * @public
 */
export interface SelectiveExecutionResult {
  /**
   * The ARN from an execution of the current pipeline.
   *
   * @public
   */
  SourcePipelineExecutionArn?: string | undefined;
}

/**
 * An execution of a step in a pipeline.
 *
 * @public
 */
export interface PipelineExecutionStep {
  /**
   * The name of the step that is executed.
   *
   * @public
   */
  StepName?: string | undefined;

  /**
   * The display name of the step.
   *
   * @public
   */
  StepDisplayName?: string | undefined;

  /**
   * The description of the step.
   *
   * @public
   */
  StepDescription?: string | undefined;

  /**
   * The time that the step started executing.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time that the step stopped executing.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The status of the step execution.
   *
   * @public
   */
  StepStatus?: StepStatus | undefined;

  /**
   * If this pipeline execution step was cached, details on the cache hit.
   *
   * @public
   */
  CacheHitResult?: CacheHitResult | undefined;

  /**
   * The reason why the step failed execution. This is only returned if the step failed its execution.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Metadata to run the pipeline step.
   *
   * @public
   */
  Metadata?: PipelineExecutionStepMetadata | undefined;

  /**
   * The current attempt of the execution step. For more information, see [Retry Policy for SageMaker Pipelines steps](https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-retry-policy.html).
   *
   * @public
   */
  AttemptCount?: number | undefined;

  /**
   * The ARN from an execution of the current pipeline from which results are reused for this step.
   *
   * @public
   */
  SelectiveExecutionResult?: SelectiveExecutionResult | undefined;

  /**
   * The context for the iteration of a ForEach step that generated this step execution.
   *
   * @public
   */
  IterationContext?: IterationContext | undefined;
}

/**
 * @public
 */
export interface ListPipelineExecutionStepsResponse {
  /**
   * A list of `PipeLineExecutionStep` objects. Each `PipeLineExecutionStep` consists of StepName, StartTime, EndTime, StepStatus, and Metadata. Metadata is an object with properties for each job that contains relevant information about the job created by the step.
   *
   * @public
   */
  PipelineExecutionSteps?: PipelineExecutionStep[] | undefined;

  /**
   * If the result of the previous `ListPipelineExecutionSteps` request was truncated, the response includes a `NextToken`. To retrieve the next set of pipeline execution steps, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineParametersForExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn: string | undefined;

  /**
   * If the result of the previous `ListPipelineParametersForExecution` request was truncated, the response includes a `NextToken`. To retrieve the next set of parameters, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of parameters to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Assigns a value to a named Pipeline parameter.
 *
 * @public
 */
export interface Parameter {
  /**
   * The name of the parameter to assign a value to. This parameter name must match a named parameter in the pipeline definition.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The literal value for the parameter.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineParametersForExecutionResponse {
  /**
   * Contains a list of pipeline parameters. This list can be empty.
   *
   * @public
   */
  PipelineParameters?: Parameter[] | undefined;

  /**
   * If the result of the previous `ListPipelineParametersForExecution` request was truncated, the response includes a `NextToken`. To retrieve the next set of parameters, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelinesRequest {
  /**
   * The prefix of the pipeline name.
   *
   * @public
   */
  PipelineNamePrefix?: string | undefined;

  /**
   * A filter that returns the pipelines that were created after a specified time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * A filter that returns the pipelines that were created before a specified time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The field by which to sort results. The default is `CreatedTime`.
   *
   * @public
   */
  SortBy?: SortPipelinesBy | undefined;

  /**
   * The sort order for results.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the result of the previous `ListPipelines` request was truncated, the response includes a `NextToken`. To retrieve the next set of pipelines, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of pipelines to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A summary of a pipeline.
 *
 * @public
 */
export interface PipelineSummary {
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
   * The description of the pipeline.
   *
   * @public
   */
  PipelineDescription?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that the pipeline used to execute.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The creation time of the pipeline.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time that the pipeline was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The last time that a pipeline execution began.
   *
   * @public
   */
  LastExecutionTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * Contains a sorted list of `PipelineSummary` objects matching the specified filters. Each `PipelineSummary` consists of PipelineArn, PipelineName, ExperimentName, PipelineDescription, CreationTime, LastModifiedTime, LastRunTime, and RoleArn. This list can be empty.
   *
   * @public
   */
  PipelineSummaries?: PipelineSummary[] | undefined;

  /**
   * If the result of the previous `ListPipelines` request was truncated, the response includes a `NextToken`. To retrieve the next set of pipelines, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineVersionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  PipelineName: string | undefined;

  /**
   * A filter that returns the pipeline versions that were created after a specified time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * A filter that returns the pipeline versions that were created before a specified time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The sort order for the results.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the result of the previous `ListPipelineVersions` request was truncated, the response includes a `NextToken`. To retrieve the next set of pipeline versions, use this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of pipeline versions to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary of the pipeline version.
 *
 * @public
 */
export interface PipelineVersionSummary {
  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * The ID of the pipeline version.
   *
   * @public
   */
  PipelineVersionId?: number | undefined;

  /**
   * The creation time of the pipeline version.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The description of the pipeline version.
   *
   * @public
   */
  PipelineVersionDescription?: string | undefined;

  /**
   * The display name of the pipeline version.
   *
   * @public
   */
  PipelineVersionDisplayName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the most recent pipeline execution created from this pipeline version.
   *
   * @public
   */
  LastExecutionPipelineExecutionArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineVersionsResponse {
  /**
   * Contains a sorted list of pipeline version summary objects matching the specified filters. Each version summary includes the pipeline version ID, the creation date, and the last pipeline execution created from that version. This list can be empty.
   *
   * @public
   */
  PipelineVersionSummaries?: PipelineVersionSummary[] | undefined;

  /**
   * If the result of the previous `ListPipelineVersions` request was truncated, the response includes a `NextToken`. To retrieve the next set of pipeline versions, use this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProcessingJobsRequest {
  /**
   * A filter that returns only processing jobs created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only processing jobs created after the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only processing jobs modified after the specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only processing jobs modified before the specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A string in the processing job name. This filter returns only processing jobs whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that retrieves only processing jobs with a specific status.
   *
   * @public
   */
  StatusEquals?: ProcessingJobStatus | undefined;

  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * The sort order for results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the result of the previous `ListProcessingJobs` request was truncated, the response includes a `NextToken`. To retrieve the next set of processing jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of processing jobs to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary of information about a processing job.
 *
 * @public
 */
export interface ProcessingJobSummary {
  /**
   * The name of the processing job.
   *
   * @public
   */
  ProcessingJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the processing job..
   *
   * @public
   */
  ProcessingJobArn: string | undefined;

  /**
   * The time at which the processing job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The time at which the processing job completed.
   *
   * @public
   */
  ProcessingEndTime?: Date | undefined;

  /**
   * A timestamp that indicates the last time the processing job was modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The status of the processing job.
   *
   * @public
   */
  ProcessingJobStatus: ProcessingJobStatus | undefined;

  /**
   * A string, up to one KB in size, that contains the reason a processing job failed, if it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * An optional string, up to one KB in size, that contains metadata from the processing container when the processing job exits.
   *
   * @public
   */
  ExitMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListProcessingJobsResponse {
  /**
   * An array of `ProcessingJobSummary` objects, each listing a processing job.
   *
   * @public
   */
  ProcessingJobSummaries: ProcessingJobSummary[] | undefined;

  /**
   * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of processing jobs, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsInput {
  /**
   * A filter that returns the projects that were created after a specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns the projects that were created before a specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The maximum number of projects to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A filter that returns the projects whose name contains a specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * If the result of the previous `ListProjects` request was truncated, the response includes a `NextToken`. To retrieve the next set of projects, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The field by which to sort results. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: ProjectSortBy | undefined;

  /**
   * The sort order for results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: ProjectSortOrder | undefined;
}

/**
 * Information about a project.
 *
 * @public
 */
export interface ProjectSummary {
  /**
   * The name of the project.
   *
   * @public
   */
  ProjectName: string | undefined;

  /**
   * The description of the project.
   *
   * @public
   */
  ProjectDescription?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the project.
   *
   * @public
   */
  ProjectArn: string | undefined;

  /**
   * The ID of the project.
   *
   * @public
   */
  ProjectId: string | undefined;

  /**
   * The time that the project was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The status of the project.
   *
   * @public
   */
  ProjectStatus: ProjectStatus | undefined;
}

/**
 * @public
 */
export interface ListProjectsOutput {
  /**
   * A list of summaries of projects.
   *
   * @public
   */
  ProjectSummaryList: ProjectSummary[] | undefined;

  /**
   * If the result of the previous `ListCompilationJobs` request was truncated, the response includes a `NextToken`. To retrieve the next set of model compilation jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceCatalogsRequest {
  /**
   * A string that partially matches one or more `ResourceCatalog`s names. Filters `ResourceCatalog` by name.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * Use this parameter to search for `ResourceCatalog`s created after a specific date and time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * Use this parameter to search for `ResourceCatalog`s created before a specific date and time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The order in which the resource catalogs are listed.
   *
   * @public
   */
  SortOrder?: ResourceCatalogSortOrder | undefined;

  /**
   * The value on which the resource catalog list is sorted.
   *
   * @public
   */
  SortBy?: ResourceCatalogSortBy | undefined;

  /**
   * The maximum number of results returned by `ListResourceCatalogs`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to resume pagination of `ListResourceCatalogs` results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A resource catalog containing all of the resources of a specific resource type within a resource owner account. For an example on sharing the Amazon SageMaker Feature Store `DefaultFeatureGroupCatalog`, see [Share Amazon SageMaker Catalog resource type](https://docs.aws.amazon.com/sagemaker/latest/APIReference/feature-store-cross-account-discoverability-share-sagemaker-catalog.html) in the Amazon SageMaker Developer Guide.
 *
 * @public
 */
export interface ResourceCatalog {
  /**
   * The Amazon Resource Name (ARN) of the `ResourceCatalog`.
   *
   * @public
   */
  ResourceCatalogArn: string | undefined;

  /**
   * The name of the `ResourceCatalog`.
   *
   * @public
   */
  ResourceCatalogName: string | undefined;

  /**
   * A free form description of the `ResourceCatalog`.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The time the `ResourceCatalog` was created.
   *
   * @public
   */
  CreationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListResourceCatalogsResponse {
  /**
   * A list of the requested `ResourceCatalog`s.
   *
   * @public
   */
  ResourceCatalogs?: ResourceCatalog[] | undefined;

  /**
   * A token to resume pagination of `ListResourceCatalogs` results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesRequest {
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
   * The sort order for the results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The parameter by which to sort the results. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: SpaceSortKey | undefined;

  /**
   * A parameter to search for the domain ID.
   *
   * @public
   */
  DomainIdEquals?: string | undefined;

  /**
   * A parameter by which to filter the results.
   *
   * @public
   */
  SpaceNameContains?: string | undefined;
}

/**
 * Specifies summary information about the ownership settings.
 *
 * @public
 */
export interface OwnershipSettingsSummary {
  /**
   * The user profile who is the owner of the space.
   *
   * @public
   */
  OwnerUserProfileName?: string | undefined;
}

/**
 * Specifies summary information about the space settings.
 *
 * @public
 */
export interface SpaceSettingsSummary {
  /**
   * The type of app created within the space.
   *
   * @public
   */
  AppType?: AppType | undefined;

  /**
   * A setting that enables or disables remote access for a SageMaker space. When enabled, this allows you to connect to the remote space from your local IDE.
   *
   * @public
   */
  RemoteAccess?: FeatureStatus | undefined;

  /**
   * The storage settings for a space.
   *
   * @public
   */
  SpaceStorageSettings?: SpaceStorageSettings | undefined;
}

/**
 * Specifies summary information about the space sharing settings.
 *
 * @public
 */
export interface SpaceSharingSettingsSummary {
  /**
   * Specifies the sharing type of the space.
   *
   * @public
   */
  SharingType?: SharingType | undefined;
}

/**
 * The space's details.
 *
 * @public
 */
export interface SpaceDetails {
  /**
   * The ID of the associated domain.
   *
   * @public
   */
  DomainId?: string | undefined;

  /**
   * The name of the space.
   *
   * @public
   */
  SpaceName?: string | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: SpaceStatus | undefined;

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
   * Specifies summary information about the space settings.
   *
   * @public
   */
  SpaceSettingsSummary?: SpaceSettingsSummary | undefined;

  /**
   * Specifies summary information about the space sharing settings.
   *
   * @public
   */
  SpaceSharingSettingsSummary?: SpaceSharingSettingsSummary | undefined;

  /**
   * Specifies summary information about the ownership settings.
   *
   * @public
   */
  OwnershipSettingsSummary?: OwnershipSettingsSummary | undefined;

  /**
   * The name of the space that appears in the Studio UI.
   *
   * @public
   */
  SpaceDisplayName?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesResponse {
  /**
   * The list of spaces.
   *
   * @public
   */
  Spaces?: SpaceDetails[] | undefined;

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
export interface ListStageDevicesRequest {
  /**
   * The response from the last list when returning a list large enough to neeed tokening.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of requests to select.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the edge deployment plan.
   *
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * Toggle for excluding devices deployed in other stages.
   *
   * @public
   */
  ExcludeDevicesDeployedInOtherStage?: boolean | undefined;

  /**
   * The name of the stage in the deployment.
   *
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface ListStageDevicesResponse {
  /**
   * List of summaries of devices allocated to the stage.
   *
   * @public
   */
  DeviceDeploymentSummaries: DeviceDeploymentSummary[] | undefined;

  /**
   * The token to use when calling the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStudioLifecycleConfigsRequest {
  /**
   * The total number of items to return in the response. If the total number of items available is more than the value specified, a `NextToken` is provided in the response. To resume pagination, provide the `NextToken` value in the as part of a subsequent call. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous call to ListStudioLifecycleConfigs didn't return the full set of Lifecycle Configurations, the call returns a token for getting the next set of Lifecycle Configurations.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A string in the Lifecycle Configuration name. This filter returns only Lifecycle Configurations whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A parameter to search for the App Type to which the Lifecycle Configuration is attached.
   *
   * @public
   */
  AppTypeEquals?: StudioLifecycleConfigAppType | undefined;

  /**
   * A filter that returns only Lifecycle Configurations created on or before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only Lifecycle Configurations created on or after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only Lifecycle Configurations modified before the specified time.
   *
   * @public
   */
  ModifiedTimeBefore?: Date | undefined;

  /**
   * A filter that returns only Lifecycle Configurations modified after the specified time.
   *
   * @public
   */
  ModifiedTimeAfter?: Date | undefined;

  /**
   * The property used to sort results. The default value is CreationTime.
   *
   * @public
   */
  SortBy?: StudioLifecycleConfigSortKey | undefined;

  /**
   * The sort order. The default value is Descending.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Details of the Amazon SageMaker AI Studio Lifecycle Configuration.
 *
 * @public
 */
export interface StudioLifecycleConfigDetails {
  /**
   * The Amazon Resource Name (ARN) of the Lifecycle Configuration.
   *
   * @public
   */
  StudioLifecycleConfigArn?: string | undefined;

  /**
   * The name of the Amazon SageMaker AI Studio Lifecycle Configuration.
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
   * The App type to which the Lifecycle Configuration is attached.
   *
   * @public
   */
  StudioLifecycleConfigAppType?: StudioLifecycleConfigAppType | undefined;
}

/**
 * @public
 */
export interface ListStudioLifecycleConfigsResponse {
  /**
   * If the previous response was truncated, you will receive this token. Use it in your next request to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of Lifecycle Configurations and their properties.
   *
   * @public
   */
  StudioLifecycleConfigs?: StudioLifecycleConfigDetails[] | undefined;
}

/**
 * @public
 */
export interface ListSubscribedWorkteamsRequest {
  /**
   * A string in the work team name. This filter returns only work teams whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * If the result of the previous `ListSubscribedWorkteams` request was truncated, the response includes a `NextToken`. To retrieve the next set of labeling jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of work teams to return in each page of the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSubscribedWorkteamsResponse {
  /**
   * An array of `Workteam` objects, each describing a work team.
   *
   * @public
   */
  SubscribedWorkteams: SubscribedWorkteam[] | undefined;

  /**
   * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of work teams, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsInput {
  /**
   * The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * If the response to the previous `ListTags` request is truncated, SageMaker returns this token. To retrieve the next set of tags, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of tags to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsOutput {
  /**
   * An array of `Tag` objects, each with a tag key and a value.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If response is truncated, SageMaker includes a token in the response. You can use this token in your subsequent request to fetch next set of tokens.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrainingJobsRequest {
  /**
   * If the result of the previous `ListTrainingJobs` request was truncated, the response includes a `NextToken`. To retrieve the next set of training jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of training jobs to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A filter that returns only training jobs created after the specified time (timestamp).
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only training jobs created before the specified time (timestamp).
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only training jobs modified after the specified time (timestamp).
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only training jobs modified before the specified time (timestamp).
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A string in the training job name. This filter returns only training jobs whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that retrieves only training jobs with a specific status.
   *
   * @public
   */
  StatusEquals?: TrainingJobStatus | undefined;

  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * The sort order for results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * A filter that retrieves only training jobs with a specific warm pool status.
   *
   * @public
   */
  WarmPoolStatusEquals?: WarmPoolResourceStatus | undefined;

  /**
   * The Amazon Resource Name (ARN); of the training plan to filter training jobs by. For more information about reserving GPU capacity for your SageMaker training jobs using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
   *
   * @public
   */
  TrainingPlanArnEquals?: string | undefined;
}

/**
 * Provides summary information about a training job.
 *
 * @public
 */
export interface TrainingJobSummary {
  /**
   * The name of the training job that you want a summary for.
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
   * A timestamp that shows when the training job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * A timestamp that shows when the training job ended. This field is set only if the training job has one of the terminal statuses (`Completed`, `Failed`, or `Stopped`).
   *
   * @public
   */
  TrainingEndTime?: Date | undefined;

  /**
   * Timestamp when the training job was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The status of the training job.
   *
   * @public
   */
  TrainingJobStatus: TrainingJobStatus | undefined;

  /**
   * The secondary status of the training job.
   *
   * @public
   */
  SecondaryStatus?: SecondaryStatus | undefined;

  /**
   * The status of the warm pool associated with the training job.
   *
   * @public
   */
  WarmPoolStatus?: WarmPoolStatus | undefined;

  /**
   * The Amazon Resource Name (ARN); of the training plan associated with this training job.
   *
   * For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
   *
   * @public
   */
  TrainingPlanArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTrainingJobsResponse {
  /**
   * An array of `TrainingJobSummary` objects, each listing a training job.
   *
   * @public
   */
  TrainingJobSummaries: TrainingJobSummary[] | undefined;

  /**
   * If the response is truncated, SageMaker returns this token. To retrieve the next set of training jobs, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrainingJobsForHyperParameterTuningJobRequest {
  /**
   * The name of the tuning job whose training jobs you want to list.
   *
   * @public
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * If the result of the previous `ListTrainingJobsForHyperParameterTuningJob` request was truncated, the response includes a `NextToken`. To retrieve the next set of training jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of training jobs to return. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A filter that returns only training jobs with the specified status.
   *
   * @public
   */
  StatusEquals?: TrainingJobStatus | undefined;

  /**
   * The field to sort results by. The default is `Name`.
   *
   * If the value of this field is `FinalObjectiveMetricValue`, any training jobs that did not return an objective metric are not listed.
   *
   * @public
   */
  SortBy?: TrainingJobSortByOptions | undefined;

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
export interface ListTrainingJobsForHyperParameterTuningJobResponse {
  /**
   * A list of [TrainingJobSummary](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_TrainingJobSummary.html) objects that describe the training jobs that the `ListTrainingJobsForHyperParameterTuningJob` request returned.
   *
   * @public
   */
  TrainingJobSummaries: HyperParameterTrainingJobSummary[] | undefined;

  /**
   * If the result of this `ListTrainingJobsForHyperParameterTuningJob` request was truncated, the response includes a `NextToken`. To retrieve the next set of training jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter to apply when listing or searching for training plans.
 *
 * For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
 *
 * @public
 */
export interface TrainingPlanFilter {
  /**
   * The name of the filter field (e.g., Status, InstanceType).
   *
   * @public
   */
  Name: TrainingPlanFilterName | undefined;

  /**
   * The value to filter by for the specified field.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTrainingPlansRequest {
  /**
   * A token to continue pagination if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter to list only training plans with an actual start time after this date.
   *
   * @public
   */
  StartTimeAfter?: Date | undefined;

  /**
   * Filter to list only training plans with an actual start time before this date.
   *
   * @public
   */
  StartTimeBefore?: Date | undefined;

  /**
   * The training plan field to sort the results by (e.g., StartTime, Status).
   *
   * @public
   */
  SortBy?: TrainingPlanSortBy | undefined;

  /**
   * The order to sort the results (Ascending or Descending).
   *
   * @public
   */
  SortOrder?: TrainingPlanSortOrder | undefined;

  /**
   * Additional filters to apply to the list of training plans.
   *
   * @public
   */
  Filters?: TrainingPlanFilter[] | undefined;
}

/**
 * Details of the training plan.
 *
 * For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
 *
 * @public
 */
export interface TrainingPlanSummary {
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
   * The total number of UltraServers allocated to this training plan.
   *
   * @public
   */
  TotalUltraServerCount?: number | undefined;

  /**
   * The target resources (e.g., training jobs, HyperPod clusters, Endpoints, Studio apps) that can use this training plan.
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
   * A list of reserved capacities associated with this training plan, including details such as instance types, counts, and availability zones.
   *
   * @public
   */
  ReservedCapacitySummaries?: ReservedCapacitySummary[] | undefined;
}

/**
 * @public
 */
export interface ListTrainingPlansResponse {
  /**
   * A token to continue pagination if more results are available.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of summary information for the training plans.
   *
   * @public
   */
  TrainingPlanSummaries: TrainingPlanSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTrainingSessionsRequest {
  /**
   * If the response was truncated, use the token returned in the previous response to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of training sessions to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A filter that returns only training sessions created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only training sessions created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A string in the training session name to filter results. Only sessions whose name contains the specified string are returned.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that returns only training sessions with the specified status.
   *
   * @public
   */
  StatusEquals?: TrainingSessionStatus | undefined;
}

/**
 * Contains summary information about a training session.
 *
 * @public
 */
export interface TrainingSessionSummary {
  /**
   * The Amazon Resource Name (ARN) of the training session.
   *
   * @public
   */
  TrainingSessionArn: string | undefined;

  /**
   * The current status of the training session.
   *
   * @public
   */
  TrainingSessionStatus: TrainingSessionStatus | undefined;

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
}

/**
 * @public
 */
export interface ListTrainingSessionsResponse {
  /**
   * If the response is truncated, this token retrieves the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An array of `TrainingSessionSummary` objects that provide summary information about the training sessions.
   *
   * @public
   */
  TrainingSessionSummaries?: TrainingSessionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTransformJobsRequest {
  /**
   * A filter that returns only transform jobs created after the specified time.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * A filter that returns only transform jobs created before the specified time.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * A filter that returns only transform jobs modified after the specified time.
   *
   * @public
   */
  LastModifiedTimeAfter?: Date | undefined;

  /**
   * A filter that returns only transform jobs modified before the specified time.
   *
   * @public
   */
  LastModifiedTimeBefore?: Date | undefined;

  /**
   * A string in the transform job name. This filter returns only transform jobs whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A filter that retrieves only transform jobs with a specific status.
   *
   * @public
   */
  StatusEquals?: TransformJobStatus | undefined;

  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * The sort order for results. The default is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * If the result of the previous `ListTransformJobs` request was truncated, the response includes a `NextToken`. To retrieve the next set of transform jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of transform jobs to return in the response. The default value is `10`.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides a summary of a transform job. Multiple `TransformJobSummary` objects are returned as a list after in response to a [ListTransformJobs](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTransformJobs.html) call.
 *
 * @public
 */
export interface TransformJobSummary {
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
   * A timestamp that shows when the transform Job was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * Indicates when the transform job ends on compute instances. For successful jobs and stopped jobs, this is the exact time recorded after the results are uploaded. For failed jobs, this is when Amazon SageMaker detected that the job failed.
   *
   * @public
   */
  TransformEndTime?: Date | undefined;

  /**
   * Indicates when the transform job was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The status of the transform job.
   *
   * @public
   */
  TransformJobStatus: TransformJobStatus | undefined;

  /**
   * If the transform job failed, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListTransformJobsResponse {
  /**
   * An array of `TransformJobSummary` objects.
   *
   * @public
   */
  TransformJobSummaries: TransformJobSummary[] | undefined;

  /**
   * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of transform jobs, use it in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrialComponentsRequest {
  /**
   * A filter that returns only components that are part of the specified experiment. If you specify `ExperimentName`, you can't filter by `SourceArn` or `TrialName`.
   *
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * A filter that returns only components that are part of the specified trial. If you specify `TrialName`, you can't filter by `ExperimentName` or `SourceArn`.
   *
   * @public
   */
  TrialName?: string | undefined;

  /**
   * A filter that returns only components that have the specified source Amazon Resource Name (ARN). If you specify `SourceArn`, you can't filter by `ExperimentName` or `TrialName`.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * A filter that returns only components created after the specified time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * A filter that returns only components created before the specified time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The property used to sort results. The default value is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortTrialComponentsBy | undefined;

  /**
   * The sort order. The default value is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The maximum number of components to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous call to `ListTrialComponents` didn't return the full set of components, the call returns a token for getting the next set of components.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of the properties of a trial component. To get all the properties, call the [DescribeTrialComponent](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrialComponent.html) API and provide the `TrialComponentName`.
 *
 * @public
 */
export interface TrialComponentSummary {
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
   * The Amazon Resource Name (ARN) and job type of the source of a trial component.
   *
   * @public
   */
  TrialComponentSource?: TrialComponentSource | undefined;

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
}

/**
 * @public
 */
export interface ListTrialComponentsResponse {
  /**
   * A list of the summaries of your trial components.
   *
   * @public
   */
  TrialComponentSummaries?: TrialComponentSummary[] | undefined;

  /**
   * A token for getting the next set of components, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrialsRequest {
  /**
   * A filter that returns only trials that are part of the specified experiment.
   *
   * @public
   */
  ExperimentName?: string | undefined;

  /**
   * A filter that returns only trials that are associated with the specified trial component.
   *
   * @public
   */
  TrialComponentName?: string | undefined;

  /**
   * A filter that returns only trials created after the specified time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * A filter that returns only trials created before the specified time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The property used to sort results. The default value is `CreationTime`.
   *
   * @public
   */
  SortBy?: SortTrialsBy | undefined;

  /**
   * The sort order. The default value is `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The maximum number of trials to return in the response. The default value is 10.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the previous call to `ListTrials` didn't return the full set of trials, the call returns a token for getting the next set of trials.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of the properties of a trial. To get the complete set of properties, call the [DescribeTrial](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeTrial.html) API and provide the `TrialName`.
 *
 * @public
 */
export interface TrialSummary {
  /**
   * The Amazon Resource Name (ARN) of the trial.
   *
   * @public
   */
  TrialArn?: string | undefined;

  /**
   * The name of the trial.
   *
   * @public
   */
  TrialName?: string | undefined;

  /**
   * The name of the trial as displayed. If `DisplayName` isn't specified, `TrialName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The source of the trial.
   *
   * @public
   */
  TrialSource?: TrialSource | undefined;

  /**
   * When the trial was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the trial was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListTrialsResponse {
  /**
   * A list of the summaries of your trials.
   *
   * @public
   */
  TrialSummaries?: TrialSummary[] | undefined;

  /**
   * A token for getting the next set of trials, if there are any.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUltraServersByReservedCapacityRequest {
  /**
   * The ARN of the reserved capacity to list UltraServers for.
   *
   * @public
   */
  ReservedCapacityArn: string | undefined;

  /**
   * The maximum number of UltraServers to return in the response. The default value is 10.
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
 * Represents a high-performance compute server used for distributed training in SageMaker AI. An UltraServer consists of multiple instances within a shared NVLink interconnect domain.
 *
 * @public
 */
export interface UltraServer {
  /**
   * The unique identifier for the UltraServer.
   *
   * @public
   */
  UltraServerId: string | undefined;

  /**
   * The type of UltraServer, such as ml.u-p6e-gb200x72.
   *
   * @public
   */
  UltraServerType: string | undefined;

  /**
   * The name of the Availability Zone where the UltraServer is provisioned.
   *
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * The Amazon EC2 instance type used in the UltraServer.
   *
   * @public
   */
  InstanceType: ReservedCapacityInstanceType | undefined;

  /**
   * The total number of instances in this UltraServer.
   *
   * @public
   */
  TotalInstanceCount: number | undefined;

  /**
   * The number of spare instances configured for this UltraServer to provide enhanced resiliency.
   *
   * @public
   */
  ConfiguredSpareInstanceCount?: number | undefined;

  /**
   * The number of instances currently available for use in this UltraServer.
   *
   * @public
   */
  AvailableInstanceCount?: number | undefined;

  /**
   * The number of instances currently in use in this UltraServer.
   *
   * @public
   */
  InUseInstanceCount?: number | undefined;

  /**
   * The number of available spare instances in the UltraServer.
   *
   * @public
   */
  AvailableSpareInstanceCount?: number | undefined;

  /**
   * The number of instances in this UltraServer that are currently in an unhealthy state.
   *
   * @public
   */
  UnhealthyInstanceCount?: number | undefined;

  /**
   * The overall health status of the UltraServer.
   *
   * @public
   */
  HealthStatus?: UltraServerHealthStatus | undefined;
}

/**
 * @public
 */
export interface ListUltraServersByReservedCapacityResponse {
  /**
   * If the response is truncated, SageMaker returns this token. Use it in the next request to retrieve the next set of UltraServers.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of UltraServers that are part of the specified reserved capacity.
   *
   * @public
   */
  UltraServers: UltraServer[] | undefined;
}

/**
 * @public
 */
export interface ListUserProfilesRequest {
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
  SortBy?: UserProfileSortKey | undefined;

  /**
   * A parameter by which to filter the results.
   *
   * @public
   */
  DomainIdEquals?: string | undefined;

  /**
   * A parameter by which to filter the results.
   *
   * @public
   */
  UserProfileNameContains?: string | undefined;
}

/**
 * The user profile details.
 *
 * @public
 */
export interface UserProfileDetails {
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
   * The status.
   *
   * @public
   */
  Status?: UserProfileStatus | undefined;

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
}

/**
 * @public
 */
export interface ListUserProfilesResponse {
  /**
   * The list of user profiles.
   *
   * @public
   */
  UserProfiles?: UserProfileDetails[] | undefined;

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
export interface ListWorkforcesRequest {
  /**
   * Sort workforces using the workforce name or creation date.
   *
   * @public
   */
  SortBy?: ListWorkforcesSortByOptions | undefined;

  /**
   * Sort workforces in ascending or descending order.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * A filter you can use to search for workforces using part of the workforce name.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * A token to resume pagination.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of workforces returned in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListWorkforcesResponse {
  /**
   * A list containing information about your workforce.
   *
   * @public
   */
  Workforces: Workforce[] | undefined;

  /**
   * A token to resume pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkteamsRequest {
  /**
   * The field to sort results by. The default is `CreationTime`.
   *
   * @public
   */
  SortBy?: ListWorkteamsSortByOptions | undefined;

  /**
   * The sort order for results. The default is `Ascending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * A string in the work team's name. This filter returns only work teams whose name contains the specified string.
   *
   * @public
   */
  NameContains?: string | undefined;

  /**
   * If the result of the previous `ListWorkteams` request was truncated, the response includes a `NextToken`. To retrieve the next set of labeling jobs, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of work teams to return in each page of the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListWorkteamsResponse {
  /**
   * An array of `Workteam` objects, each describing a work team.
   *
   * @public
   */
  Workteams: Workteam[] | undefined;

  /**
   * If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of work teams, use it in the subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The properties of a model as returned by the [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API.
 *
 * @public
 */
export interface Model {
  /**
   * The name of the model.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * Describes the container, as part of model definition.
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
   * Specifies details about how containers in a multi-container endpoint are run.
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
   * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * A timestamp that indicates when the model was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * Isolates the model container. No inbound or outbound network calls can be made to or from the model container.
   *
   * @public
   */
  EnableNetworkIsolation?: boolean | undefined;

  /**
   * A list of key-value pairs associated with the model. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A set of recommended deployment configurations for the model.
   *
   * @public
   */
  DeploymentRecommendation?: DeploymentRecommendation | undefined;
}

/**
 * An Amazon SageMaker Model Card.
 *
 * @public
 */
export interface ModelCard {
  /**
   * The Amazon Resource Name (ARN) of the model card.
   *
   * @public
   */
  ModelCardArn?: string | undefined;

  /**
   * The unique name of the model card.
   *
   * @public
   */
  ModelCardName?: string | undefined;

  /**
   * The version of the model card.
   *
   * @public
   */
  ModelCardVersion?: number | undefined;

  /**
   * The content of the model card. Content uses the [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema) and provided as a string.
   *
   * @public
   */
  Content?: string | undefined;

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
  ModelCardStatus?: ModelCardStatus | undefined;

  /**
   * The security configuration used to protect model card data.
   *
   * @public
   */
  SecurityConfig?: ModelCardSecurityConfig | undefined;

  /**
   * The date and time that the model card was created.
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
   * The date and time that the model card was last modified.
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
   * Key-value pairs used to manage metadata for the model card.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The unique name (ID) of the model.
   *
   * @public
   */
  ModelId?: string | undefined;

  /**
   * The risk rating of the model. Different organizations might have different criteria for model card risk ratings. For more information, see [Risk ratings](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards-risk-rating.html).
   *
   * @public
   */
  RiskRating?: string | undefined;

  /**
   * The model package group that contains the model package. Only relevant for model cards created for model packages in the Amazon SageMaker Model Registry.
   *
   * @public
   */
  ModelPackageGroupName?: string | undefined;
}

/**
 * An endpoint that hosts a model displayed in the Amazon SageMaker Model Dashboard.
 *
 * @public
 */
export interface ModelDashboardEndpoint {
  /**
   * The endpoint name.
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
   * A timestamp that indicates when the endpoint was created.
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
   * The endpoint status.
   *
   * @public
   */
  EndpointStatus: EndpointStatus | undefined;
}

/**
 * A batch transform job. For information about SageMaker batch transform, see [Use Batch Transform](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html).
 *
 * @public
 */
export interface TransformJob {
  /**
   * The name of the transform job.
   *
   * @public
   */
  TransformJobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the transform job.
   *
   * @public
   */
  TransformJobArn?: string | undefined;

  /**
   * The status of the transform job.
   *
   * Transform job statuses are:
   *
   * - `InProgress` - The job is in progress.
   * - `Completed` - The job has completed.
   * - `Failed` - The transform job has failed. To see the reason for the failure, see the `FailureReason` field in the response to a `DescribeTransformJob` call.
   * - `Stopping` - The transform job is stopping.
   * - `Stopped` - The transform job has stopped.
   *
   * @public
   */
  TransformJobStatus?: TransformJobStatus | undefined;

  /**
   * If the transform job failed, the reason it failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The name of the model associated with the transform job.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The maximum number of parallel requests that can be sent to each instance in a transform job. If `MaxConcurrentTransforms` is set to 0 or left unset, SageMaker checks the optional execution-parameters to determine the settings for your chosen algorithm. If the execution-parameters endpoint is not enabled, the default value is 1. For built-in algorithms, you don't need to set a value for `MaxConcurrentTransforms`.
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
   * The maximum allowed size of the payload, in MB. A payload is the data portion of a record (without metadata). The value in `MaxPayloadInMB` must be greater than, or equal to, the size of a single record. To estimate the size of a record in MB, divide the size of your dataset by the number of records. To ensure that the records fit within the maximum payload size, we recommend using a slightly larger value. The default value is 6 MB. For cases where the payload might be arbitrarily large and is transmitted using HTTP chunked encoding, set the value to 0. This feature works only in supported algorithms. Currently, SageMaker built-in algorithms do not support HTTP chunked encoding.
   *
   * @public
   */
  MaxPayloadInMB?: number | undefined;

  /**
   * Specifies the number of records to include in a mini-batch for an HTTP inference request. A record is a single unit of input data that inference can be made on. For example, a single line in a CSV file is a record.
   *
   * @public
   */
  BatchStrategy?: BatchStrategy | undefined;

  /**
   * The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * Describes the input source of a transform job and the way the transform job consumes it.
   *
   * @public
   */
  TransformInput?: TransformInput | undefined;

  /**
   * Describes the results of a transform job.
   *
   * @public
   */
  TransformOutput?: TransformOutput | undefined;

  /**
   * Configuration to control how SageMaker captures inference data for batch transform jobs.
   *
   * @public
   */
  DataCaptureConfig?: BatchDataCaptureConfig | undefined;

  /**
   * Describes the resources, including ML instance types and ML instance count, to use for transform job.
   *
   * @public
   */
  TransformResources?: TransformResources | undefined;

  /**
   * A timestamp that shows when the transform Job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

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
   * The Amazon Resource Name (ARN) of the labeling job that created the transform job.
   *
   * @public
   */
  LabelingJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AutoML job that created the transform job.
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

  /**
   * A list of tags associated with the transform job.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The model card for a model displayed in the Amazon SageMaker Model Dashboard.
 *
 * @public
 */
export interface ModelDashboardModelCard {
  /**
   * The Amazon Resource Name (ARN) for a model card.
   *
   * @public
   */
  ModelCardArn?: string | undefined;

  /**
   * The name of a model card.
   *
   * @public
   */
  ModelCardName?: string | undefined;

  /**
   * The model card version.
   *
   * @public
   */
  ModelCardVersion?: number | undefined;

  /**
   * The model card status.
   *
   * @public
   */
  ModelCardStatus?: ModelCardStatus | undefined;

  /**
   * The KMS Key ID (`KMSKeyId`) for encryption of model card information.
   *
   * @public
   */
  SecurityConfig?: ModelCardSecurityConfig | undefined;

  /**
   * A timestamp that indicates when the model card was created.
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
   * A timestamp that indicates when the model card was last updated.
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
   * The tags associated with a model card.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * For models created in SageMaker, this is the model ARN. For models created outside of SageMaker, this is a user-customized string.
   *
   * @public
   */
  ModelId?: string | undefined;

  /**
   * A model card's risk rating. Can be low, medium, or high.
   *
   * @public
   */
  RiskRating?: string | undefined;
}

/**
 * A monitoring schedule for a model displayed in the Amazon SageMaker Model Dashboard.
 *
 * @public
 */
export interface ModelDashboardMonitoringSchedule {
  /**
   * The Amazon Resource Name (ARN) of a monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleArn?: string | undefined;

  /**
   * The name of a monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleName?: string | undefined;

  /**
   * The status of the monitoring schedule.
   *
   * @public
   */
  MonitoringScheduleStatus?: ScheduleStatus | undefined;

  /**
   * The monitor type of a model monitor.
   *
   * @public
   */
  MonitoringType?: MonitoringType | undefined;

  /**
   * If a monitoring job failed, provides the reason.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * A timestamp that indicates when the monitoring schedule was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A timestamp that indicates when the monitoring schedule was last updated.
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
   * The endpoint which is monitored.
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * A JSON array where each element is a summary for a monitoring alert.
   *
   * @public
   */
  MonitoringAlertSummaries?: MonitoringAlertSummary[] | undefined;

  /**
   * Summary of information about the last monitoring job to run.
   *
   * @public
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary | undefined;

  /**
   * Input object for the batch transform job.
   *
   * @public
   */
  BatchTransformInput?: BatchTransformInput | undefined;
}

/**
 * A model displayed in the Amazon SageMaker Model Dashboard.
 *
 * @public
 */
export interface ModelDashboardModel {
  /**
   * A model displayed in the Model Dashboard.
   *
   * @public
   */
  Model?: Model | undefined;

  /**
   * The endpoints that host a model.
   *
   * @public
   */
  Endpoints?: ModelDashboardEndpoint[] | undefined;

  /**
   * A batch transform job. For information about SageMaker batch transform, see [Use Batch Transform](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html).
   *
   * @public
   */
  LastBatchTransformJob?: TransformJob | undefined;

  /**
   * The monitoring schedules for a model.
   *
   * @public
   */
  MonitoringSchedules?: ModelDashboardMonitoringSchedule[] | undefined;

  /**
   * The model card for a model.
   *
   * @public
   */
  ModelCard?: ModelDashboardModelCard | undefined;
}

/**
 * A container for your trained model that can be deployed for SageMaker inference. This can include inference code, artifacts, and metadata. The model package type can be one of the following.
 *
 * - Versioned model: A part of a model package group in Model Registry.
 * - Unversioned model: Not part of a model package group and used in Amazon Web Services Marketplace.
 *
 * For more information, see [`CreateModelPackage`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModelPackage.html).
 *
 * @public
 */
export interface ModelPackage {
  /**
   * The name of the model package. The name can be as follows:
   *
   * - For a versioned model, the name is automatically generated by SageMaker Model Registry and follows the format '`ModelPackageGroupName/ModelPackageVersion`'.
   * - For an unversioned model, you must provide the name.
   *
   * @public
   */
  ModelPackageName?: string | undefined;

  /**
   * The model group to which the model belongs.
   *
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * The version number of a versioned model.
   *
   * @public
   */
  ModelPackageVersion?: number | undefined;

  /**
   * The package registration type of the model package.
   *
   * @public
   */
  ModelPackageRegistrationType?: ModelPackageRegistrationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model package.
   *
   * @public
   */
  ModelPackageArn?: string | undefined;

  /**
   * The description of the model package.
   *
   * @public
   */
  ModelPackageDescription?: string | undefined;

  /**
   * The time that the model package was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Defines how to perform inference generation after a training job is run.
   *
   * @public
   */
  InferenceSpecification?: InferenceSpecification | undefined;

  /**
   * A list of algorithms that were used to create a model package.
   *
   * @public
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification | undefined;

  /**
   * Specifies batch transform jobs that SageMaker runs to validate your model package.
   *
   * @public
   */
  ValidationSpecification?: ModelPackageValidationSpecification | undefined;

  /**
   * The status of the model package. This can be one of the following values.
   *
   * - `PENDING` - The model package is pending being created.
   * - `IN_PROGRESS` - The model package is in the process of being created.
   * - `COMPLETED` - The model package was successfully created.
   * - `FAILED` - The model package failed.
   * - `DELETING` - The model package is in the process of being deleted.
   *
   * @public
   */
  ModelPackageStatus?: ModelPackageStatus | undefined;

  /**
   * Specifies the validation and image scan statuses of the model package.
   *
   * @public
   */
  ModelPackageStatusDetails?: ModelPackageStatusDetails | undefined;

  /**
   * Whether the model package is to be certified to be listed on Amazon Web Services Marketplace. For information about listing model packages on Amazon Web Services Marketplace, see [List Your Algorithm or Model Package on Amazon Web Services Marketplace](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-mkt-list.html).
   *
   * @public
   */
  CertifyForMarketplace?: boolean | undefined;

  /**
   * The approval status of the model. This can be one of the following values.
   *
   * - `APPROVED` - The model is approved
   * - `REJECTED` - The model is rejected.
   * - `PENDING_MANUAL_APPROVAL` - The model is waiting for manual approval.
   *
   * @public
   */
  ModelApprovalStatus?: ModelApprovalStatus | undefined;

  /**
   * Information about the user who created or modified an experiment, trial, trial component, lineage group, or project.
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
   * The last time the model package was modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Information about the user who created or modified an experiment, trial, trial component, lineage group, or project.
   *
   * @public
   */
  LastModifiedBy?: UserContext | undefined;

  /**
   * A description provided when the model approval is set.
   *
   * @public
   */
  ApprovalDescription?: string | undefined;

  /**
   * The machine learning domain of your model package and its components. Common machine learning domains include computer vision and natural language processing.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The machine learning task your model package accomplishes. Common machine learning tasks include object detection and image classification.
   *
   * @public
   */
  Task?: string | undefined;

  /**
   * The Amazon Simple Storage Service path where the sample payload are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
   *
   * @public
   */
  SamplePayloadUrl?: string | undefined;

  /**
   * An array of additional Inference Specification objects.
   *
   * @public
   */
  AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[] | undefined;

  /**
   * The URI of the source for the model package.
   *
   * @public
   */
  SourceUri?: string | undefined;

  /**
   * An optional Key Management Service key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with highly sensitive data.
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
   * A list of the tags associated with the model package. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The metadata properties for the model package.
   *
   * @public
   */
  CustomerMetadataProperties?: Record<string, string> | undefined;

  /**
   * Represents the drift check baselines that can be used when the model monitor is set using the model package.
   *
   * @public
   */
  DriftCheckBaselines?: DriftCheckBaselines | undefined;

  /**
   * Indicates if you want to skip model validation.
   *
   * @public
   */
  SkipModelValidation?: SkipModelValidation | undefined;
}

/**
 * A group of versioned models in the Model Registry.
 *
 * @public
 */
export interface ModelPackageGroup {
  /**
   * The name of the model group.
   *
   * @public
   */
  ModelPackageGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model group.
   *
   * @public
   */
  ModelPackageGroupArn?: string | undefined;

  /**
   * The description for the model group.
   *
   * @public
   */
  ModelPackageGroupDescription?: string | undefined;

  /**
   * The time that the model group was created.
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
   * The status of the model group. This can be one of the following values.
   *
   * - `PENDING` - The model group is pending being created.
   * - `IN_PROGRESS` - The model group is in the process of being created.
   * - `COMPLETED` - The model group was successfully created.
   * - `FAILED` - The model group failed.
   * - `DELETING` - The model group is in the process of being deleted.
   * - `DELETE_FAILED` - SageMaker failed to delete the model group.
   *
   * @public
   */
  ModelPackageGroupStatus?: ModelPackageGroupStatus | undefined;

  /**
   * A list of the tags associated with the model group. For more information, see [Tagging Amazon Web Services resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *Amazon Web Services General Reference Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A list of nested [Filter](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Filter.html) objects. A resource must satisfy the conditions of all filters to be included in the results returned from the [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API.
 *
 * For example, to filter on a training job's `InputDataConfig` property with a specific channel name and `S3Uri` prefix, define the following filters:
 *
 * - `'\{Name:"InputDataConfig.ChannelName", "Operator":"Equals", "Value":"train"\}',`
 * - `'\{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"Contains", "Value":"mybucket/catdata"\}'`
 *
 * @public
 */
export interface NestedFilters {
  /**
   * The name of the property to use in the nested filters. The value must match a listed property name, such as `InputDataConfig`.
   *
   * @public
   */
  NestedPropertyName: string | undefined;

  /**
   * A list of filters. Each filter acts on a property. Filters must contain at least one `Filters` value. For example, a `NestedFilters` call might include a filter on the `PropertyName` parameter of the `InputDataConfig` property: `InputDataConfig.DataSource.S3DataSource.S3Uri`.
   *
   * @public
   */
  Filters: Filter[] | undefined;
}

/**
 * Updates the feature group online store configuration.
 *
 * @public
 */
export interface OnlineStoreConfigUpdate {
  /**
   * Time to live duration, where the record is hard deleted after the expiration time is reached; `ExpiresAt` = `EventTime` + `TtlDuration`. For information on HardDelete, see the [DeleteRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) API in the Amazon SageMaker API Reference guide.
   *
   * @public
   */
  TtlDuration?: TtlDuration | undefined;

  /**
   * The online store storage type to migrate the feature group to. Use this parameter to migrate an existing feature group from `Standard` to `Standard_V2` storage format, enabling support for the [UpdateRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_UpdateRecord.html) operation. Migration is a one-way operation and cannot be reversed.
   *
   * @public
   */
  StorageType?: StorageType | undefined;
}

/**
 * The trial that a trial component is associated with and the experiment the trial is part of. A component might not be associated with a trial. A component can be associated with multiple trials.
 *
 * @public
 */
export interface Parent {
  /**
   * The name of the trial.
   *
   * @public
   */
  TrialName?: string | undefined;

  /**
   * The name of the experiment.
   *
   * @public
   */
  ExperimentName?: string | undefined;
}

/**
 * A SageMaker Model Building Pipeline instance.
 *
 * @public
 */
export interface Pipeline {
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
   * The description of the pipeline.
   *
   * @public
   */
  PipelineDescription?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role that created the pipeline.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The status of the pipeline.
   *
   * @public
   */
  PipelineStatus?: PipelineStatus | undefined;

  /**
   * The creation time of the pipeline.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time that the pipeline was last modified.
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
   * The parallelism configuration applied to the pipeline.
   *
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;

  /**
   * A list of tags that apply to the pipeline.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * An execution of a pipeline.
 *
 * @public
 */
export interface PipelineExecution {
  /**
   * The Amazon Resource Name (ARN) of the pipeline that was executed.
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
   * The status of the pipeline status.
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
   * The creation time of the pipeline execution.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time that the pipeline execution was last modified.
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
   * The parallelism configuration applied to the pipeline execution.
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
   * Contains a list of pipeline parameters. This list can be empty.
   *
   * @public
   */
  PipelineParameters?: Parameter[] | undefined;

  /**
   * The ID of the pipeline version that started this execution.
   *
   * @public
   */
  PipelineVersionId?: number | undefined;

  /**
   * The display name of the pipeline version that started this execution.
   *
   * @public
   */
  PipelineVersionDisplayName?: string | undefined;
}

/**
 * The version of the pipeline.
 *
 * @public
 */
export interface PipelineVersion {
  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * The ID of the pipeline version.
   *
   * @public
   */
  PipelineVersionId?: number | undefined;

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

  /**
   * The creation time of the pipeline version.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time when the pipeline version was last modified.
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
   * The Amazon Resource Name (ARN) of the most recent pipeline execution created from this pipeline version.
   *
   * @public
   */
  LastExecutedPipelineExecutionArn?: string | undefined;

  /**
   * The display name of the most recent pipeline execution created from this pipeline version.
   *
   * @public
   */
  LastExecutedPipelineExecutionDisplayName?: string | undefined;

  /**
   * The status of the most recent pipeline execution created from this pipeline version.
   *
   * @public
   */
  LastExecutedPipelineExecutionStatus?: PipelineExecutionStatus | undefined;
}

/**
 * An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information, see [Process Data and Evaluate Models](https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html).
 *
 * @public
 */
export interface ProcessingJob {
  /**
   * List of input configurations for the processing job.
   *
   * @public
   */
  ProcessingInputs?: ProcessingInput[] | undefined;

  /**
   * Configuration for uploading output from the processing container.
   *
   * @public
   */
  ProcessingOutputConfig?: ProcessingOutputConfig | undefined;

  /**
   * The name of the processing job.
   *
   * @public
   */
  ProcessingJobName?: string | undefined;

  /**
   * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
   *
   * @public
   */
  ProcessingResources?: ProcessingResources | undefined;

  /**
   * Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.
   *
   * @public
   */
  StoppingCondition?: ProcessingStoppingCondition | undefined;

  /**
   * Configuration to run a processing job in a specified container image.
   *
   * @public
   */
  AppSpecification?: AppSpecification | undefined;

  /**
   * Sets the environment variables in the Docker container.
   *
   * @public
   */
  Environment?: Record<string, string> | undefined;

  /**
   * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
   *
   * @public
   */
  NetworkConfig?: NetworkConfig | undefined;

  /**
   * The ARN of the role used to create the processing job.
   *
   * @public
   */
  RoleArn?: string | undefined;

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
   * The ARN of the processing job.
   *
   * @public
   */
  ProcessingJobArn?: string | undefined;

  /**
   * The status of the processing job.
   *
   * @public
   */
  ProcessingJobStatus?: ProcessingJobStatus | undefined;

  /**
   * A string, up to one KB in size, that contains metadata from the processing container when the processing job exits.
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
   * The time that the processing job ended.
   *
   * @public
   */
  ProcessingEndTime?: Date | undefined;

  /**
   * The time that the processing job started.
   *
   * @public
   */
  ProcessingStartTime?: Date | undefined;

  /**
   * The time the processing job was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The time the processing job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The ARN of a monitoring schedule for an endpoint associated with this processing job.
   *
   * @public
   */
  MonitoringScheduleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AutoML job associated with this processing job.
   *
   * @public
   */
  AutoMLJobArn?: string | undefined;

  /**
   * The ARN of the training job associated with this processing job.
   *
   * @public
   */
  TrainingJobArn?: string | undefined;

  /**
   * An array of key-value pairs. For more information, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL) in the *Amazon Web Services Billing and Cost Management User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Configuration information for updating the Amazon SageMaker Debugger profile parameters, system and framework metrics configurations, and storage paths.
 *
 * @public
 */
export interface ProfilerConfigForUpdate {
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
   * To turn off Amazon SageMaker Debugger monitoring and profiling while a training job is in progress, set to `True`.
   *
   * @public
   */
  DisableProfiler?: boolean | undefined;
}

/**
 * The properties of a project as returned by the Search API.
 *
 * @public
 */
export interface Project {
  /**
   * The Amazon Resource Name (ARN) of the project.
   *
   * @public
   */
  ProjectArn?: string | undefined;

  /**
   * The name of the project.
   *
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * The ID of the project.
   *
   * @public
   */
  ProjectId?: string | undefined;

  /**
   * The description of the project.
   *
   * @public
   */
  ProjectDescription?: string | undefined;

  /**
   * Details that you specify to provision a service catalog product. For information about service catalog, see [What is Amazon Web Services Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
   *
   * @public
   */
  ServiceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails | undefined;

  /**
   * Details of a provisioned service catalog product. For information about service catalog, see [What is Amazon Web Services Service Catalog](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html).
   *
   * @public
   */
  ServiceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails | undefined;

  /**
   * The status of the project.
   *
   * @public
   */
  ProjectStatus?: ProjectStatus | undefined;

  /**
   * Who created the project.
   *
   * @public
   */
  CreatedBy?: UserContext | undefined;

  /**
   * A timestamp specifying when the project was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * An array of template providers associated with the project.
   *
   * @public
   */
  TemplateProviderDetails?: TemplateProviderDetail[] | undefined;

  /**
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A timestamp container for when the project was last modified.
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
export interface PutModelPackageGroupPolicyInput {
  /**
   * The name of the model group to add a resource policy to.
   *
   * @public
   */
  ModelPackageGroupName: string | undefined;

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
export interface PutModelPackageGroupPolicyOutput {
  /**
   * The Amazon Resource Name (ARN) of the model package group.
   *
   * @public
   */
  ModelPackageGroupArn: string | undefined;
}

/**
 * A set of filters to narrow the set of lineage entities connected to the `StartArn`(s) returned by the `QueryLineage` API action.
 *
 * @public
 */
export interface QueryFilters {
  /**
   * Filter the lineage entities connected to the `StartArn` by type. For example: `DataSet`, `Model`, `Endpoint`, or `ModelDeployment`.
   *
   * @public
   */
  Types?: string[] | undefined;

  /**
   * Filter the lineage entities connected to the `StartArn`(s) by the type of the lineage entity.
   *
   * @public
   */
  LineageTypes?: LineageType[] | undefined;

  /**
   * Filter the lineage entities connected to the `StartArn`(s) by created date.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * Filter the lineage entities connected to the `StartArn`(s) after the create date.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * Filter the lineage entities connected to the `StartArn`(s) before the last modified date.
   *
   * @public
   */
  ModifiedBefore?: Date | undefined;

  /**
   * Filter the lineage entities connected to the `StartArn`(s) after the last modified date.
   *
   * @public
   */
  ModifiedAfter?: Date | undefined;

  /**
   * Filter the lineage entities connected to the `StartArn`(s) by a set if property key value pairs. If multiple pairs are provided, an entity is included in the results if it matches any of the provided pairs.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface QueryLineageRequest {
  /**
   * A list of resource Amazon Resource Name (ARN) that represent the starting point for your lineage query.
   *
   * @public
   */
  StartArns?: string[] | undefined;

  /**
   * Associations between lineage entities have a direction. This parameter determines the direction from the StartArn(s) that the query traverses.
   *
   * @public
   */
  Direction?: Direction | undefined;

  /**
   * Setting this value to `True` retrieves not only the entities of interest but also the [Associations](https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking-entities.html) and lineage entities on the path. Set to `False` to only return lineage entities that match your query.
   *
   * @public
   */
  IncludeEdges?: boolean | undefined;

  /**
   * A set of filtering parameters that allow you to specify which entities should be returned.
   *
   * - Properties - Key-value pairs to match on the lineage entities' properties.
   * - LineageTypes - A set of lineage entity types to match on. For example: `TrialComponent`, `Artifact`, or `Context`.
   * - CreatedBefore - Filter entities created before this date.
   * - ModifiedBefore - Filter entities modified before this date.
   * - ModifiedAfter - Filter entities modified after this date.
   *
   * @public
   */
  Filters?: QueryFilters | undefined;

  /**
   * The maximum depth in lineage relationships from the `StartArns` that are traversed. Depth is a measure of the number of `Associations` from the `StartArn` entity to the matched results.
   *
   * @public
   */
  MaxDepth?: number | undefined;

  /**
   * Limits the number of vertices in the results. Use the `NextToken` in a response to to retrieve the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Limits the number of vertices in the request. Use the `NextToken` in a response to to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A lineage entity connected to the starting entity(ies).
 *
 * @public
 */
export interface Vertex {
  /**
   * The Amazon Resource Name (ARN) of the lineage entity resource.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of the lineage entity resource. For example: `DataSet`, `Model`, `Endpoint`, etc...
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The type of resource of the lineage entity.
   *
   * @public
   */
  LineageType?: LineageType | undefined;
}

/**
 * @public
 */
export interface QueryLineageResponse {
  /**
   * A list of vertices connected to the start entity(ies) in the lineage graph.
   *
   * @public
   */
  Vertices?: Vertex[] | undefined;

  /**
   * A list of edges that connect vertices in the response.
   *
   * @public
   */
  Edges?: Edge[] | undefined;

  /**
   * Limits the number of vertices in the response. Use the `NextToken` in a response to to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterDevicesRequest {
  /**
   * The name of the fleet.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * A list of devices to register with SageMaker Edge Manager.
   *
   * @public
   */
  Devices: Device[] | undefined;

  /**
   * The tags associated with devices.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Configuration for remote debugging for the [UpdateTrainingJob](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateTrainingJob.html) API. To learn more about the remote debugging functionality of SageMaker, see [Access a training container through Amazon Web Services Systems Manager (SSM) for remote debugging](https://docs.aws.amazon.com/sagemaker/latest/dg/train-remote-debugging.html).
 *
 * @public
 */
export interface RemoteDebugConfigForUpdate {
  /**
   * If set to True, enables remote debugging.
   *
   * @public
   */
  EnableRemoteDebug?: boolean | undefined;
}

/**
 * Contains input values for a task.
 *
 * @public
 */
export interface RenderableTask {
  /**
   * A JSON object that contains values for the variables defined in the template. It is made available to the template under the substitution variable `task.input`. For example, if you define a variable `task.input.text` in your template, you can supply the variable in the JSON object as `"text": "sample text"`.
   *
   * @public
   */
  Input: string | undefined;
}

/**
 * A description of an error that occurred while rendering the template.
 *
 * @public
 */
export interface RenderingError {
  /**
   * A unique identifier for a specific class of errors.
   *
   * @public
   */
  Code: string | undefined;

  /**
   * A human-readable message describing the error.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface RenderUiTemplateRequest {
  /**
   * A `Template` object containing the worker UI template to render.
   *
   * @public
   */
  UiTemplate?: UiTemplate | undefined;

  /**
   * A `RenderableTask` object containing a representative task to render.
   *
   * @public
   */
  Task: RenderableTask | undefined;

  /**
   * The Amazon Resource Name (ARN) that has access to the S3 objects that are used by the template.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The `HumanTaskUiArn` of the worker UI that you want to render. Do not provide a `HumanTaskUiArn` if you use the `UiTemplate` parameter.
   *
   * See a list of available Human Ui Amazon Resource Names (ARNs) in [UiConfig](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UiConfig.html).
   *
   * @public
   */
  HumanTaskUiArn?: string | undefined;
}

/**
 * @public
 */
export interface RenderUiTemplateResponse {
  /**
   * A Liquid template that renders the HTML for the worker UI.
   *
   * @public
   */
  RenderedContent: string | undefined;

  /**
   * A list of one or more `RenderingError` objects if any were encountered while rendering the template. If there were no errors, the list is empty.
   *
   * @public
   */
  Errors: RenderingError[] | undefined;
}

/**
 * Details about a reserved capacity offering for a training plan offering.
 *
 * For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
 *
 * @public
 */
export interface ReservedCapacityOffering {
  /**
   * The type of reserved capacity offering.
   *
   * @public
   */
  ReservedCapacityType?: ReservedCapacityType | undefined;

  /**
   * The type of UltraServer included in this reserved capacity offering, such as ml.u-p6e-gb200x72.
   *
   * @public
   */
  UltraServerType?: string | undefined;

  /**
   * The number of UltraServers included in this reserved capacity offering.
   *
   * @public
   */
  UltraServerCount?: number | undefined;

  /**
   * The instance type for the reserved capacity offering.
   *
   * @public
   */
  InstanceType: ReservedCapacityInstanceType | undefined;

  /**
   * The number of instances in the reserved capacity offering.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * The availability zone for the reserved capacity offering.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The number of whole hours in the total duration for this reserved capacity offering.
   *
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * The additional minutes beyond whole hours in the total duration for this reserved capacity offering.
   *
   * @public
   */
  DurationMinutes?: number | undefined;

  /**
   * The start time of the reserved capacity offering.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the reserved capacity offering.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The start time of the extension for the reserved capacity offering.
   *
   * @public
   */
  ExtensionStartTime?: Date | undefined;

  /**
   * The end time of the extension for the reserved capacity offering.
   *
   * @public
   */
  ExtensionEndTime?: Date | undefined;
}

/**
 * The `ResourceConfig` to update `KeepAlivePeriodInSeconds`. Other fields in the `ResourceConfig` cannot be updated.
 *
 * @public
 */
export interface ResourceConfigForUpdate {
  /**
   * The `KeepAlivePeriodInSeconds` value specified in the `ResourceConfig` to update.
   *
   * @public
   */
  KeepAlivePeriodInSeconds: number | undefined;
}

/**
 * @public
 */
export interface RetryPipelineExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * This configuration, if specified, overrides the parallelism configuration of the parent pipeline.
   *
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;
}

/**
 * @public
 */
export interface RetryPipelineExecutionResponse {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn?: string | undefined;
}

/**
 * The list of key-value pairs used to filter your search results. If a search result contains a key from your list, it is included in the final search response if the value associated with the key in the result matches the value you specified. If the value doesn't match, the result is excluded from the search response. Any resources that don't have a key from the list that you've provided will also be included in the search response.
 *
 * @public
 */
export interface VisibilityConditions {
  /**
   * The key that specifies the tag that you're using to filter the search results. It must be in the following format: `Tags.<key>`.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value for the tag that you're using to filter the search results.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Contains information about a training job.
 *
 * @public
 */
export interface TrainingJob {
  /**
   * The name of the training job.
   *
   * @public
   */
  TrainingJobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the training job.
   *
   * @public
   */
  TrainingJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the training job was launched by a hyperparameter tuning job.
   *
   * @public
   */
  TuningJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the labeling job.
   *
   * @public
   */
  LabelingJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  AutoMLJobArn?: string | undefined;

  /**
   * Information about the Amazon S3 location that is configured for storing model artifacts.
   *
   * @public
   */
  ModelArtifacts?: ModelArtifacts | undefined;

  /**
   * The status of the training job.
   *
   * Training job statuses are:
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
  TrainingJobStatus?: TrainingJobStatus | undefined;

  /**
   * Provides detailed information about the state of the training job. For detailed information about the secondary status of the training job, see `StatusMessage` under [SecondaryStatusTransition](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SecondaryStatusTransition.html).
   *
   * SageMaker provides primary statuses and secondary statuses that apply to each of them:
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
   * > **Important:** Valid values for `SecondaryStatus` are subject to change.
   *
   * We no longer support the following secondary statuses:
   *
   * - `LaunchingMLInstances`
   * - `PreparingTrainingStack`
   * - `DownloadingTrainingImage`
   *
   * @public
   */
  SecondaryStatus?: SecondaryStatus | undefined;

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
   * Your input must be in the same Amazon Web Services region as your training job.
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
  StoppingCondition?: StoppingCondition | undefined;

  /**
   * A timestamp that indicates when the training job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

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
   * A list of final metric values that are set when the training job completes. Used only if the training job was configured to use metrics.
   *
   * @public
   */
  FinalMetricDataList?: MetricData[] | undefined;

  /**
   * If the `TrainingJob` was created with network isolation, the value is set to `true`. If network isolation is enabled, nodes can't communicate beyond the VPC they run in.
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
   * When true, enables managed spot training using Amazon EC2 Spot instances to run training jobs instead of on-demand instances. For more information, see [Managed Spot Training](https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html).
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
   * The billable time in seconds.
   *
   * @public
   */
  BillableTimeInSeconds?: number | undefined;

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
   * Information about the debug rule configuration.
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
   * Information about the evaluation status of the rules for the training job.
   *
   * @public
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[] | undefined;

  /**
   * The output model package Amazon Resource Name (ARN) that contains model weights or checkpoint.
   *
   * @public
   */
  OutputModelPackageArn?: string | undefined;

  /**
   * The model package configuration.
   *
   * @public
   */
  ModelPackageConfig?: ModelPackageConfig | undefined;

  /**
   * Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths.
   *
   * @public
   */
  ProfilerConfig?: ProfilerConfig | undefined;

  /**
   * The environment variables to set in the Docker container.
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
   * An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see [Tagging Amazon Web Services Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A short summary of a trial component.
 *
 * @public
 */
export interface TrialComponentSimpleSummary {
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
   * The Amazon Resource Name (ARN) and job type of the source of a trial component.
   *
   * @public
   */
  TrialComponentSource?: TrialComponentSource | undefined;

  /**
   * When the component was created.
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
}

/**
 * The properties of a trial as returned by the [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API.
 *
 * @public
 */
export interface Trial {
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
   * The source of the trial.
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
   * Who last modified the trial.
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
   * The list of tags that are associated with the trial. You can use [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API to search on the tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of the components associated with the trial. For each component, a summary of the component's properties is included.
   *
   * @public
   */
  TrialComponentSummaries?: TrialComponentSimpleSummary[] | undefined;
}

/**
 * Detailed information about the source of a trial component. Either `ProcessingJob` or `TrainingJob` is returned.
 *
 * @public
 */
export interface TrialComponentSourceDetail {
  /**
   * The Amazon Resource Name (ARN) of the source.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * Information about a training job that's the source of a trial component.
   *
   * @public
   */
  TrainingJob?: TrainingJob | undefined;

  /**
   * Information about a processing job that's the source of a trial component.
   *
   * @public
   */
  ProcessingJob?: ProcessingJob | undefined;

  /**
   * Information about a transform job that's the source of a trial component.
   *
   * @public
   */
  TransformJob?: TransformJob | undefined;
}

/**
 * The properties of a trial component as returned by the [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API.
 *
 * @public
 */
export interface TrialComponent {
  /**
   * The name of the trial component.
   *
   * @public
   */
  TrialComponentName?: string | undefined;

  /**
   * The name of the component as displayed. If `DisplayName` isn't specified, `TrialComponentName` is displayed.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the trial component.
   *
   * @public
   */
  TrialComponentArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) and job type of the source of the component.
   *
   * @public
   */
  Source?: TrialComponentSource | undefined;

  /**
   * The status of the trial component.
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
   * Information about the user who created or modified a SageMaker resource.
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
   * The metrics for the component.
   *
   * @public
   */
  Metrics?: TrialComponentMetricSummary[] | undefined;

  /**
   * Metadata properties of the tracking entity, trial, or trial component.
   *
   * @public
   */
  MetadataProperties?: MetadataProperties | undefined;

  /**
   * Details of the source of the component.
   *
   * @public
   */
  SourceDetail?: TrialComponentSourceDetail | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lineage group resource.
   *
   * @public
   */
  LineageGroupArn?: string | undefined;

  /**
   * The list of tags that are associated with the component. You can use [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API to search on the tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * An array of the parents of the component. A parent is a trial the component is associated with and the experiment the trial is part of. A component might not have any parents.
   *
   * @public
   */
  Parents?: Parent[] | undefined;

  /**
   * The name of the experiment run.
   *
   * @public
   */
  RunName?: string | undefined;
}

/**
 * A single resource returned as part of the [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API response.
 *
 * @public
 */
export interface SearchRecord {
  /**
   * The properties of a training job.
   *
   * @public
   */
  TrainingJob?: TrainingJob | undefined;

  /**
   * The properties of an experiment.
   *
   * @public
   */
  Experiment?: Experiment | undefined;

  /**
   * The properties of a trial.
   *
   * @public
   */
  Trial?: Trial | undefined;

  /**
   * The properties of a trial component.
   *
   * @public
   */
  TrialComponent?: TrialComponent | undefined;

  /**
   * A hosted endpoint for real-time inference.
   *
   * @public
   */
  Endpoint?: Endpoint | undefined;

  /**
   * A container for your trained model that can be deployed for SageMaker inference. This can include inference code, artifacts, and metadata. The model package type can be one of the following.
   *
   * - Versioned model: A part of a model package group in Model Registry.
   * - Unversioned model: Not part of a model package group and used in Amazon Web Services Marketplace.
   *
   * For more information, see [`CreateModelPackage`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModelPackage.html).
   *
   * @public
   */
  ModelPackage?: ModelPackage | undefined;

  /**
   * A group of versioned models in the Model Registry.
   *
   * @public
   */
  ModelPackageGroup?: ModelPackageGroup | undefined;

  /**
   * A SageMaker Model Building Pipeline instance.
   *
   * @public
   */
  Pipeline?: Pipeline | undefined;

  /**
   * An execution of a pipeline.
   *
   * @public
   */
  PipelineExecution?: PipelineExecution | undefined;

  /**
   * The version of the pipeline.
   *
   * @public
   */
  PipelineVersion?: PipelineVersion | undefined;

  /**
   * Amazon SageMaker Feature Store stores features in a collection called Feature Group. A Feature Group can be visualized as a table which has rows, with a unique identifier for each row where each column in the table is a feature. In principle, a Feature Group is composed of features and values per features.
   *
   * @public
   */
  FeatureGroup?: FeatureGroup | undefined;

  /**
   * The feature metadata used to search through the features.
   *
   * @public
   */
  FeatureMetadata?: FeatureMetadata | undefined;

  /**
   * The properties of a project.
   *
   * @public
   */
  Project?: Project | undefined;

  /**
   * The properties of a hyperparameter tuning job.
   *
   * @public
   */
  HyperParameterTuningJob?: HyperParameterTuningJobSearchEntity | undefined;

  /**
   * An Amazon SageMaker Model Card that documents details about a machine learning model.
   *
   * @public
   */
  ModelCard?: ModelCard | undefined;

  /**
   * A model displayed in the Amazon SageMaker Model Dashboard.
   *
   * @public
   */
  Model?: ModelDashboardModel | undefined;

  /**
   * The properties of a job.
   *
   * @public
   */
  Job?: Job | undefined;

  /**
   * The properties of a hub content resource.
   *
   * @public
   */
  HubContent?: HubContent | undefined;
}

/**
 * Represents the total number of matching results and indicates how accurate that count is.
 *
 * The `Value` field provides the count, which may be exact or estimated. The `Relation` field indicates whether it's an exact figure or a lower bound. This helps understand the full scope of search results, especially when dealing with large result sets.
 *
 * @public
 */
export interface TotalHits {
  /**
   * The total number of matching results. This value may be exact or an estimate, depending on the `Relation` field.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * Indicates the relationship between the returned `Value` and the actual total number of matching results. Possible values are:
   *
   * - `EqualTo`: The `Value` is the exact count of matching results.
   * - `GreaterThanOrEqualTo`: The `Value` is a lower bound of the actual count of matching results.
   *
   * @public
   */
  Relation?: Relation | undefined;
}

/**
 * @public
 */
export interface SearchResponse {
  /**
   * A list of `SearchRecord` objects.
   *
   * @public
   */
  Results?: SearchRecord[] | undefined;

  /**
   * If the result of the previous `Search` request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of matching results.
   *
   * @public
   */
  TotalHits?: TotalHits | undefined;
}

/**
 * @public
 */
export interface SearchTrainingPlanOfferingsRequest {
  /**
   * The type of instance you want to search for in the available training plan offerings. This field allows you to filter the search results based on the specific compute resources you require for your SageMaker training jobs or SageMaker HyperPod clusters. When searching for training plan offerings, specifying the instance type helps you find Reserved Instances that match your computational needs.
   *
   * @public
   */
  InstanceType?: ReservedCapacityInstanceType | undefined;

  /**
   * The number of instances you want to reserve in the training plan offerings. This allows you to specify the quantity of compute resources needed for your SageMaker training jobs or SageMaker HyperPod clusters, helping you find reserved capacity offerings that match your requirements.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The type of UltraServer to search for, such as ml.u-p6e-gb200x72.
   *
   * @public
   */
  UltraServerType?: string | undefined;

  /**
   * The number of UltraServers to search for.
   *
   * @public
   */
  UltraServerCount?: number | undefined;

  /**
   * A filter to search for training plan offerings with a start time after a specified date.
   *
   * @public
   */
  StartTimeAfter?: Date | undefined;

  /**
   * A filter to search for reserved capacity offerings with an end time before a specified date.
   *
   * @public
   */
  EndTimeBefore?: Date | undefined;

  /**
   * The desired duration in hours for the training plan offerings.
   *
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * The target resources (e.g., SageMaker Training Jobs, SageMaker HyperPod, SageMaker Endpoints, Studio apps) to search for in the offerings.
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
   * The Amazon Resource Name (ARN); of an existing training plan to search for extension offerings. When specified, the API returns extension offerings that can be used to extend the specified training plan.
   *
   * @public
   */
  TrainingPlanArn?: string | undefined;
}

/**
 * Details about an available extension offering for a training plan. Use the offering ID with the `ExtendTrainingPlan` API to extend a training plan.
 *
 * @public
 */
export interface TrainingPlanExtensionOffering {
  /**
   * The unique identifier for this extension offering.
   *
   * @public
   */
  TrainingPlanExtensionOfferingId: string | undefined;

  /**
   * The Availability Zone for this extension offering.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The start date of this extension offering.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The end date of this extension offering.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * The duration of this extension offering in hours.
   *
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * The upfront fee for this extension offering.
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
 * Details about a training plan offering.
 *
 * For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see `CreateTrainingPlan`.
 *
 * @public
 */
export interface TrainingPlanOffering {
  /**
   * The unique identifier for this training plan offering.
   *
   * @public
   */
  TrainingPlanOfferingId: string | undefined;

  /**
   * The target resources (e.g., SageMaker Training Jobs, SageMaker HyperPod, SageMaker Endpoints, Studio apps) for this training plan offering.
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
  TargetResources: SageMakerResourceName[] | undefined;

  /**
   * The requested start time that the user specified when searching for the training plan offering.
   *
   * @public
   */
  RequestedStartTimeAfter?: Date | undefined;

  /**
   * The requested end time that the user specified when searching for the training plan offering.
   *
   * @public
   */
  RequestedEndTimeBefore?: Date | undefined;

  /**
   * The number of whole hours in the total duration for this training plan offering.
   *
   * @public
   */
  DurationHours?: number | undefined;

  /**
   * The additional minutes beyond whole hours in the total duration for this training plan offering.
   *
   * @public
   */
  DurationMinutes?: number | undefined;

  /**
   * The upfront fee for this training plan offering.
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
   * A list of reserved capacity offerings associated with this training plan offering.
   *
   * @public
   */
  ReservedCapacityOfferings?: ReservedCapacityOffering[] | undefined;
}

/**
 * @public
 */
export interface SearchTrainingPlanOfferingsResponse {
  /**
   * A list of training plan offerings that match the search criteria.
   *
   * @public
   */
  TrainingPlanOfferings: TrainingPlanOffering[] | undefined;

  /**
   * A list of extension offerings available for the specified training plan. These offerings can be used with the `ExtendTrainingPlan` API to extend an existing training plan.
   *
   * @public
   */
  TrainingPlanExtensionOfferings?: TrainingPlanExtensionOffering[] | undefined;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepFailureRequest {
  /**
   * The pipeline generated token from the Amazon SQS queue.
   *
   * @public
   */
  CallbackToken: string | undefined;

  /**
   * A message describing why the step failed.
   *
   * @public
   */
  FailureReason?: string | undefined;

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
export interface SendPipelineExecutionStepFailureResponse {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn?: string | undefined;
}

/**
 * @public
 */
export interface SendPipelineExecutionStepSuccessRequest {
  /**
   * The pipeline generated token from the Amazon SQS queue.
   *
   * @public
   */
  CallbackToken: string | undefined;

  /**
   * A list of the output parameters of the callback step.
   *
   * @public
   */
  OutputParameters?: OutputParameter[] | undefined;

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
export interface SendPipelineExecutionStepSuccessResponse {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn?: string | undefined;
}

/**
 * @public
 */
export interface StartClusterHealthCheckRequest {
  /**
   * The string name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * A list of configurations containing instance group names, EC2 instance IDs, and deep health checks to perform.
   *
   * @public
   */
  DeepHealthCheckConfigurations: InstanceGroupHealthCheckConfiguration[] | undefined;
}

/**
 * @public
 */
export interface StartClusterHealthCheckResponse {
  /**
   * The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster on which the deep health checks were initiated.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface StartEdgeDeploymentStageRequest {
  /**
   * The name of the edge deployment plan to start.
   *
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * The name of the stage to start.
   *
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface StartInferenceExperimentRequest {
  /**
   * The name of the inference experiment to start.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartInferenceExperimentResponse {
  /**
   * The ARN of the started inference experiment to start.
   *
   * @public
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface StartMlflowTrackingServerRequest {
  /**
   * The name of the tracking server to start.
   *
   * @public
   */
  TrackingServerName: string | undefined;
}

/**
 * @public
 */
export interface StartMlflowTrackingServerResponse {
  /**
   * The ARN of the started tracking server.
   *
   * @public
   */
  TrackingServerArn?: string | undefined;
}

/**
 * @public
 */
export interface StartMonitoringScheduleRequest {
  /**
   * The name of the schedule to start.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookInstanceInput {
  /**
   * The name of the notebook instance to start.
   *
   * @public
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface StartPipelineExecutionRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  PipelineName: string | undefined;

  /**
   * The display name of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionDisplayName?: string | undefined;

  /**
   * Contains a list of pipeline parameters. This list can be empty.
   *
   * @public
   */
  PipelineParameters?: Parameter[] | undefined;

  /**
   * The description of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionDescription?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * This configuration, if specified, overrides the parallelism configuration of the parent pipeline for this specific run.
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
   * The ID of the pipeline version to start execution from.
   *
   * @public
   */
  PipelineVersionId?: number | undefined;

  /**
   * The MLflow experiment name of the pipeline execution.
   *
   * @public
   */
  MlflowExperimentName?: string | undefined;
}

/**
 * @public
 */
export interface StartPipelineExecutionResponse {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn?: string | undefined;
}

/**
 * @public
 */
export interface StartSessionRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to which the remote connection will be established. For example, this identifies the specific ARN space application you want to connect to from your local IDE.
   *
   * @public
   */
  ResourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartSessionResponse {
  /**
   * A unique identifier for the established remote connection session.
   *
   * @public
   */
  SessionId?: string | undefined;

  /**
   * A WebSocket URL used to establish a SSH connection between the local IDE and remote SageMaker space.
   *
   * @public
   */
  StreamUrl?: string | undefined;

  /**
   * An encrypted token value containing session and caller information.
   *
   * @public
   */
  TokenValue?: string | undefined;
}

/**
 * @public
 */
export interface StopAIBenchmarkJobRequest {
  /**
   * The name of the AI benchmark job to stop.
   *
   * @public
   */
  AIBenchmarkJobName: string | undefined;
}

/**
 * @public
 */
export interface StopAIBenchmarkJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the stopped benchmark job.
   *
   * @public
   */
  AIBenchmarkJobArn: string | undefined;
}

/**
 * @public
 */
export interface StopAIRecommendationJobRequest {
  /**
   * The name of the AI recommendation job to stop.
   *
   * @public
   */
  AIRecommendationJobName: string | undefined;
}

/**
 * @public
 */
export interface StopAIRecommendationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the stopped recommendation job.
   *
   * @public
   */
  AIRecommendationJobArn: string | undefined;
}

/**
 * @public
 */
export interface StopAutoMLJobRequest {
  /**
   * The name of the object you are requesting.
   *
   * @public
   */
  AutoMLJobName: string | undefined;
}

/**
 * @public
 */
export interface StopCompilationJobRequest {
  /**
   * The name of the model compilation job to stop.
   *
   * @public
   */
  CompilationJobName: string | undefined;
}

/**
 * @public
 */
export interface StopEdgeDeploymentStageRequest {
  /**
   * The name of the edge deployment plan to stop.
   *
   * @public
   */
  EdgeDeploymentPlanName: string | undefined;

  /**
   * The name of the stage to stop.
   *
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface StopEdgePackagingJobRequest {
  /**
   * The name of the edge packaging job.
   *
   * @public
   */
  EdgePackagingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopHyperParameterTuningJobRequest {
  /**
   * The name of the tuning job to stop.
   *
   * @public
   */
  HyperParameterTuningJobName: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceExperimentRequest {
  /**
   * The name of the inference experiment to stop.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Array of key-value pairs, with names of variants mapped to actions. The possible actions are the following:
   *
   * - `Promote` - Promote the shadow variant to a production variant
   * - `Remove` - Delete the variant
   * - `Retain` - Keep the variant as it is
   *
   * @public
   */
  ModelVariantActions: Record<string, ModelVariantAction> | undefined;

  /**
   * An array of `ModelVariantConfig` objects. There is one for each variant that you want to deploy after the inference experiment stops. Each `ModelVariantConfig` describes the infrastructure configuration for deploying the corresponding variant.
   *
   * @public
   */
  DesiredModelVariants?: ModelVariantConfig[] | undefined;

  /**
   * The desired state of the experiment after stopping. The possible states are the following:
   *
   * - `Completed`: The experiment completed successfully
   * - `Cancelled`: The experiment was canceled
   *
   * @public
   */
  DesiredState?: InferenceExperimentStopDesiredState | undefined;

  /**
   * The reason for stopping the experiment.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceExperimentResponse {
  /**
   * The ARN of the stopped inference experiment.
   *
   * @public
   */
  InferenceExperimentArn: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceRecommendationsJobRequest {
  /**
   * The name of the job you want to stop.
   *
   * @public
   */
  JobName: string | undefined;
}

/**
 * @public
 */
export interface StopJobRequest {
  /**
   * The name of the job to stop.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The category of the job to stop.
   *
   * @public
   */
  JobCategory: JobCategory | undefined;
}

/**
 * @public
 */
export interface StopJobResponse {}

/**
 * @public
 */
export interface StopLabelingJobRequest {
  /**
   * The name of the labeling job to stop.
   *
   * @public
   */
  LabelingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopMlflowTrackingServerRequest {
  /**
   * The name of the tracking server to stop.
   *
   * @public
   */
  TrackingServerName: string | undefined;
}

/**
 * @public
 */
export interface StopMlflowTrackingServerResponse {
  /**
   * The ARN of the stopped tracking server.
   *
   * @public
   */
  TrackingServerArn?: string | undefined;
}

/**
 * @public
 */
export interface StopMonitoringScheduleRequest {
  /**
   * The name of the schedule to stop.
   *
   * @public
   */
  MonitoringScheduleName: string | undefined;
}

/**
 * @public
 */
export interface StopNotebookInstanceInput {
  /**
   * The name of the notebook instance to terminate.
   *
   * @public
   */
  NotebookInstanceName: string | undefined;
}

/**
 * @public
 */
export interface StopOptimizationJobRequest {
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
export interface StopPipelineExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than once.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StopPipelineExecutionResponse {
  /**
   * The Amazon Resource Name (ARN) of the pipeline execution.
   *
   * @public
   */
  PipelineExecutionArn?: string | undefined;
}

/**
 * @public
 */
export interface StopProcessingJobRequest {
  /**
   * The name of the processing job to stop.
   *
   * @public
   */
  ProcessingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopTrainingJobRequest {
  /**
   * The name of the training job to stop.
   *
   * @public
   */
  TrainingJobName: string | undefined;
}

/**
 * @public
 */
export interface StopTrainingSessionRequest {
  /**
   * The name of the training session to stop.
   *
   * @public
   */
  TrainingSessionName: string | undefined;
}

/**
 * @public
 */
export interface StopTrainingSessionResponse {}

/**
 * @public
 */
export interface StopTransformJobRequest {
  /**
   * The name of the batch transform job to stop.
   *
   * @public
   */
  TransformJobName: string | undefined;
}

/**
 * @public
 */
export interface UpdateActionRequest {
  /**
   * The name of the action to update.
   *
   * @public
   */
  ActionName: string | undefined;

  /**
   * The new description for the action.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The new status for the action.
   *
   * @public
   */
  Status?: ActionStatus | undefined;

  /**
   * The new list of properties. Overwrites the current property list.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * A list of properties to remove.
   *
   * @public
   */
  PropertiesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateActionResponse {
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
export interface UpdateAppImageConfigRequest {
  /**
   * The name of the AppImageConfig to update.
   *
   * @public
   */
  AppImageConfigName: string | undefined;

  /**
   * The new KernelGateway app to run on the image.
   *
   * @public
   */
  KernelGatewayImageConfig?: KernelGatewayImageConfig | undefined;

  /**
   * The JupyterLab app running on the image.
   *
   * @public
   */
  JupyterLabAppImageConfig?: JupyterLabAppImageConfig | undefined;

  /**
   * The Code Editor app running on the image.
   *
   * @public
   */
  CodeEditorAppImageConfig?: CodeEditorAppImageConfig | undefined;
}

/**
 * @public
 */
export interface UpdateAppImageConfigResponse {
  /**
   * The ARN for the AppImageConfig.
   *
   * @public
   */
  AppImageConfigArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateArtifactRequest {
  /**
   * The Amazon Resource Name (ARN) of the artifact to update.
   *
   * @public
   */
  ArtifactArn: string | undefined;

  /**
   * The new name for the artifact.
   *
   * @public
   */
  ArtifactName?: string | undefined;

  /**
   * The new list of properties. Overwrites the current property list.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * A list of properties to remove.
   *
   * @public
   */
  PropertiesToRemove?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateArtifactResponse {
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
export interface UpdateClusterRequest {
  /**
   * Specify the name of the SageMaker HyperPod cluster you want to update.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * Specify the instance groups to update.
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
   * Updates the configuration for managed tier checkpointing on the HyperPod cluster. For example, you can enable or disable the feature and modify the percentage of cluster memory allocated for checkpoint storage.
   *
   * @public
   */
  TieredStorageConfig?: ClusterTieredStorageConfig | undefined;

  /**
   * The node recovery mode to be applied to the SageMaker HyperPod cluster.
   *
   * @public
   */
  NodeRecovery?: ClusterNodeRecovery | undefined;

  /**
   * Specify the names of the instance groups to delete. Use a single `,` as the separator between multiple names.
   *
   * @public
   */
  InstanceGroupsToDelete?: string[] | undefined;

  /**
   * Determines how instance provisioning is handled during cluster operations. In `Continuous` mode, the cluster provisions available instances incrementally and retries until the target count is reached. The cluster becomes operational once cluster-level resources are ready. Use `CurrentCount` and `TargetCount` in `DescribeCluster` to track provisioning progress.
   *
   * @public
   */
  NodeProvisioningMode?: ClusterNodeProvisioningMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that HyperPod assumes for cluster autoscaling operations. Cannot be updated while autoscaling is enabled.
   *
   * @public
   */
  ClusterRole?: string | undefined;

  /**
   * Updates the autoscaling configuration for the cluster. Use to enable or disable automatic node scaling.
   *
   * @public
   */
  AutoScaling?: ClusterAutoScalingConfig | undefined;

  /**
   * The type of orchestrator used for the SageMaker HyperPod cluster.
   *
   * @public
   */
  Orchestrator?: ClusterOrchestrator | undefined;
}

/**
 * @public
 */
export interface UpdateClusterResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated SageMaker HyperPod cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterSchedulerConfigRequest {
  /**
   * ID of the cluster policy.
   *
   * @public
   */
  ClusterSchedulerConfigId: string | undefined;

  /**
   * Target version.
   *
   * @public
   */
  TargetVersion: number | undefined;

  /**
   * Cluster policy configuration.
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
}

/**
 * @public
 */
export interface UpdateClusterSchedulerConfigResponse {
  /**
   * ARN of the cluster policy.
   *
   * @public
   */
  ClusterSchedulerConfigArn: string | undefined;

  /**
   * Version of the cluster policy.
   *
   * @public
   */
  ClusterSchedulerConfigVersion: number | undefined;
}

/**
 * The configuration that describes specifications of the instance groups to update.
 *
 * @public
 */
export interface UpdateClusterSoftwareInstanceGroupSpecification {
  /**
   * The name of the instance group to update.
   *
   * @public
   */
  InstanceGroupName: string | undefined;

  /**
   * The version of the HyperPod-managed AMI to update to for the instance group. Uses semantic versioning in the format `MAJOR.MINOR.PATCH`.
   *
   * @public
   */
  ImageReleaseVersion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterSoftwareRequest {
  /**
   * Specify the name or the Amazon Resource Name (ARN) of the SageMaker HyperPod cluster you want to update for security patching.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * The array of instance groups for which to update AMI versions.
   *
   * @public
   */
  InstanceGroups?: UpdateClusterSoftwareInstanceGroupSpecification[] | undefined;

  /**
   * The configuration to use when updating the AMI versions.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfiguration | undefined;

  /**
   * When configuring your HyperPod cluster, you can specify an image ID using one of the following options:
   *
   * - `HyperPodPublicAmiId`: Use a HyperPod public AMI
   * - `CustomAmiId`: Use your custom AMI
   * - `default`: Use the default latest system image
   *
   * If you choose to use a custom AMI (`CustomAmiId`), ensure it meets the following requirements:
   *
   * - Encryption: The custom AMI must be unencrypted.
   * - Ownership: The custom AMI must be owned by the same Amazon Web Services account that is creating the HyperPod cluster.
   * - Volume support: Only the primary AMI snapshot volume is supported; additional AMI volumes are not supported.
   *
   * When updating the instance group's AMI through the `UpdateClusterSoftware` operation, if an instance group uses a custom AMI, you must provide an `ImageId` or use the default as input. Note that if you don't specify an instance group in your `UpdateClusterSoftware` request, then all of the instance groups are patched with the specified image.
   *
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterSoftwareResponse {
  /**
   * The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster being updated for security patching.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateCodeRepositoryInput {
  /**
   * The name of the Git repository to update.
   *
   * @public
   */
  CodeRepositoryName: string | undefined;

  /**
   * The configuration of the git repository, including the URL and the Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the repository. The secret must have a staging label of `AWSCURRENT` and must be in the following format:
   *
   * `\{"username": UserName, "password": Password\}`
   *
   * @public
   */
  GitConfig?: GitConfigForUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateCodeRepositoryOutput {
  /**
   * The ARN of the Git repository.
   *
   * @public
   */
  CodeRepositoryArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateComputeQuotaRequest {
  /**
   * ID of the compute allocation definition.
   *
   * @public
   */
  ComputeQuotaId: string | undefined;

  /**
   * Target version.
   *
   * @public
   */
  TargetVersion: number | undefined;

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
  ComputeQuotaTarget?: ComputeQuotaTarget | undefined;

  /**
   * The state of the compute allocation being described. Use to enable or disable compute allocation.
   *
   * Default is `Enabled`.
   *
   * @public
   */
  ActivationState?: ActivationState | undefined;

  /**
   * Description of the compute allocation definition.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateComputeQuotaResponse {
  /**
   * ARN of the compute allocation definition.
   *
   * @public
   */
  ComputeQuotaArn: string | undefined;

  /**
   * Version of the compute allocation definition.
   *
   * @public
   */
  ComputeQuotaVersion: number | undefined;
}

import {
  ActionStatus,
  ActivationState,
  ActiveClusterOperationName,
  AddAssociationCommand,
  AddTagsCommand,
  AdditionalS3DataSourceDataType,
  AggregationTransformationValue,
  AlgorithmSortBy,
  AlgorithmStatus,
  AppImageConfigSortKey,
  AppInstanceType,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppSortKey,
  AppStatus,
  AppType,
  ArtifactSourceIdType,
  AssemblyType,
  AssociateTrialComponentCommand,
  AssociationEdgeType,
  AsyncNotificationTopicTypes,
  AthenaResultCompressionType,
  AthenaResultFormat,
  AttachClusterNodeVolumeCommand,
  AuthMode,
  AutoMLAlgorithm,
  AutoMLChannelType,
  AutoMLJobObjectiveType,
  AutoMLJobSecondaryStatus,
  AutoMLJobStatus,
  AutoMLMetricEnum,
  AutoMLMetricExtendedEnum,
  AutoMLMode,
  AutoMLProblemTypeConfigName,
  AutoMLProcessingUnit,
  AutoMLS3DataType,
  AutoMLSortBy,
  AutoMLSortOrder,
  AutoMountHomeEFS,
  AutotuneMode,
  AwsManagedHumanLoopRequestSource,
  BatchAddClusterNodesCommand,
  BatchAddClusterNodesErrorCode,
  BatchDeleteClusterNodesCommand,
  BatchDeleteClusterNodesErrorCode,
  BatchDescribeModelPackageCommand,
  BatchRebootClusterNodesCommand,
  BatchRebootClusterNodesErrorCode,
  BatchReplaceClusterNodesCommand,
  BatchReplaceClusterNodesErrorCode,
  BatchStrategy,
  BooleanOperator,
  CandidateSortBy,
  CandidateStatus,
  CandidateStepType,
  CapacityReservationPreference,
  CapacityReservationType,
  CapacitySizeType,
  CaptureMode,
  CaptureStatus,
  ClarifyFeatureType,
  ClarifyTextGranularity,
  ClarifyTextLanguage,
  ClusterAutoScalerType,
  ClusterAutoScalingMode,
  ClusterAutoScalingStatus,
  ClusterCapacityType,
  ClusterConfigMode,
  ClusterEventResourceType,
  ClusterInstanceStatus,
  ClusterInstanceType,
  ClusterKubernetesTaintEffect,
  ClusterNodeProvisioningMode,
  ClusterNodeRecovery,
  ClusterSortBy,
  ClusterStatus,
  CodeRepositorySortBy,
  CodeRepositorySortOrder,
  CollectionType,
  CompilationJobStatus,
  CompleteOnConvergence,
  CompressionType,
  ConditionOutcome,
  ContainerMode,
  ContentClassifier,
  CreateActionCommand,
  CreateAlgorithmCommand,
  CreateAppCommand,
  CreateAppImageConfigCommand,
  CreateArtifactCommand,
  CreateAutoMLJobCommand,
  CreateAutoMLJobV2Command,
  CreateClusterCommand,
  CreateClusterSchedulerConfigCommand,
  CreateCodeRepositoryCommand,
  CreateCompilationJobCommand,
  CreateComputeQuotaCommand,
  CreateContextCommand,
  CreateDataQualityJobDefinitionCommand,
  CreateDeviceFleetCommand,
  CreateDomainCommand,
  CreateEdgeDeploymentPlanCommand,
  CreateEdgeDeploymentStageCommand,
  CreateEdgePackagingJobCommand,
  CreateEndpointCommand,
  CreateEndpointConfigCommand,
  CreateExperimentCommand,
  CreateFeatureGroupCommand,
  CreateFlowDefinitionCommand,
  CreateHubCommand,
  CreateHubContentPresignedUrlsCommand,
  CreateHubContentReferenceCommand,
  CreateHumanTaskUiCommand,
  CreateHyperParameterTuningJobCommand,
  CreateImageCommand,
  CreateImageVersionCommand,
  CreateInferenceComponentCommand,
  CreateInferenceExperimentCommand,
  CreateInferenceRecommendationsJobCommand,
  CreateLabelingJobCommand,
  CreateMlflowTrackingServerCommand,
  CreateModelBiasJobDefinitionCommand,
  CreateModelCardCommand,
  CreateModelCardExportJobCommand,
  CreateModelCommand,
  CreateModelExplainabilityJobDefinitionCommand,
  CreateModelPackageCommand,
  CreateModelPackageGroupCommand,
  CreateModelQualityJobDefinitionCommand,
  CreateMonitoringScheduleCommand,
  CreateNotebookInstanceCommand,
  CreateNotebookInstanceLifecycleConfigCommand,
  CreateOptimizationJobCommand,
  CreatePartnerAppCommand,
  CreatePartnerAppPresignedUrlCommand,
  CreatePipelineCommand,
  CreatePresignedDomainUrlCommand,
  CreatePresignedMlflowTrackingServerUrlCommand,
  CreatePresignedNotebookInstanceUrlCommand,
  CreateProcessingJobCommand,
  CreateProjectCommand,
  CreateSpaceCommand,
  CreateStudioLifecycleConfigCommand,
  CreateTrainingJobCommand,
  CreateTrainingPlanCommand,
  CreateTransformJobCommand,
  CreateTrialCommand,
  CreateTrialComponentCommand,
  CreateUserProfileCommand,
  CreateWorkforceCommand,
  CreateWorkteamCommand,
  CrossAccountFilterOption,
  DataDistributionType,
  DataSourceName,
  DeepHealthCheckType,
  DeleteActionCommand,
  DeleteAlgorithmCommand,
  DeleteAppCommand,
  DeleteAppImageConfigCommand,
  DeleteArtifactCommand,
  DeleteAssociationCommand,
  DeleteClusterCommand,
  DeleteClusterSchedulerConfigCommand,
  DeleteCodeRepositoryCommand,
  DeleteCompilationJobCommand,
  DeleteComputeQuotaCommand,
  DeleteContextCommand,
  DeleteDataQualityJobDefinitionCommand,
  DeleteDeviceFleetCommand,
  DeleteDomainCommand,
  DeleteEdgeDeploymentPlanCommand,
  DeleteEdgeDeploymentStageCommand,
  DeleteEndpointCommand,
  DeleteEndpointConfigCommand,
  DeleteExperimentCommand,
  DeleteFeatureGroupCommand,
  DeleteFlowDefinitionCommand,
  DeleteHubCommand,
  DeleteHubContentCommand,
  DeleteHubContentReferenceCommand,
  DeleteHumanTaskUiCommand,
  DeleteHyperParameterTuningJobCommand,
  DeleteImageCommand,
  DeleteImageVersionCommand,
  DeleteInferenceComponentCommand,
  DeleteInferenceExperimentCommand,
  DeleteMlflowTrackingServerCommand,
  DeleteModelBiasJobDefinitionCommand,
  DeleteModelCardCommand,
  DeleteModelCommand,
  DeleteModelExplainabilityJobDefinitionCommand,
  DeleteModelPackageCommand,
  DeleteModelPackageGroupCommand,
  DeleteModelPackageGroupPolicyCommand,
  DeleteModelQualityJobDefinitionCommand,
  DeleteMonitoringScheduleCommand,
  DeleteNotebookInstanceCommand,
  DeleteNotebookInstanceLifecycleConfigCommand,
  DeleteOptimizationJobCommand,
  DeletePartnerAppCommand,
  DeletePipelineCommand,
  DeleteProcessingJobCommand,
  DeleteProjectCommand,
  DeleteSpaceCommand,
  DeleteStudioLifecycleConfigCommand,
  DeleteTagsCommand,
  DeleteTrainingJobCommand,
  DeleteTrialCommand,
  DeleteTrialComponentCommand,
  DeleteUserProfileCommand,
  DeleteWorkforceCommand,
  DeleteWorkteamCommand,
  DeregisterDevicesCommand,
  DescribeActionCommand,
  DescribeAlgorithmCommand,
  DescribeAppCommand,
  DescribeAppImageConfigCommand,
  DescribeArtifactCommand,
  DescribeAutoMLJobCommand,
  DescribeAutoMLJobV2Command,
  DescribeClusterCommand,
  DescribeClusterEventCommand,
  DescribeClusterNodeCommand,
  DescribeClusterSchedulerConfigCommand,
  DescribeCodeRepositoryCommand,
  DescribeCompilationJobCommand,
  DescribeComputeQuotaCommand,
  DescribeContextCommand,
  DescribeDataQualityJobDefinitionCommand,
  DescribeDeviceCommand,
  DescribeDeviceFleetCommand,
  DescribeDomainCommand,
  DescribeEdgeDeploymentPlanCommand,
  DescribeEdgePackagingJobCommand,
  DescribeEndpointCommand,
  DescribeEndpointConfigCommand,
  DescribeExperimentCommand,
  DescribeFeatureGroupCommand,
  DescribeFeatureMetadataCommand,
  DescribeFlowDefinitionCommand,
  DescribeHubCommand,
  DescribeHubContentCommand,
  DescribeHumanTaskUiCommand,
  DescribeHyperParameterTuningJobCommand,
  DescribeImageCommand,
  DescribeImageVersionCommand,
  DescribeInferenceComponentCommand,
  DescribeInferenceExperimentCommand,
  DescribeInferenceRecommendationsJobCommand,
  DescribeLabelingJobCommand,
  DescribeLineageGroupCommand,
  DescribeMlflowTrackingServerCommand,
  DescribeModelBiasJobDefinitionCommand,
  DescribeModelCardCommand,
  DescribeModelCardExportJobCommand,
  DescribeModelCommand,
  DescribeModelExplainabilityJobDefinitionCommand,
  DescribeModelPackageCommand,
  DescribeModelPackageGroupCommand,
  DescribeModelQualityJobDefinitionCommand,
  DescribeMonitoringScheduleCommand,
  DescribeNotebookInstanceCommand,
  DescribeNotebookInstanceLifecycleConfigCommand,
  DescribeOptimizationJobCommand,
  DescribePartnerAppCommand,
  DescribePipelineCommand,
  DescribePipelineDefinitionForExecutionCommand,
  DescribePipelineExecutionCommand,
  DescribeProcessingJobCommand,
  DescribeProjectCommand,
  DescribeReservedCapacityCommand,
  DescribeSpaceCommand,
  DescribeStudioLifecycleConfigCommand,
  DescribeSubscribedWorkteamCommand,
  DescribeTrainingJobCommand,
  DescribeTrainingPlanCommand,
  DescribeTransformJobCommand,
  DescribeTrialCommand,
  DescribeTrialComponentCommand,
  DescribeUserProfileCommand,
  DescribeWorkforceCommand,
  DescribeWorkteamCommand,
  DetachClusterNodeVolumeCommand,
  DetailedAlgorithmStatus,
  DetailedModelPackageStatus,
  DeviceDeploymentStatus,
  DeviceSubsetType,
  DirectInternetAccess,
  Direction,
  DisableSagemakerServicecatalogPortfolioCommand,
  DisassociateTrialComponentCommand,
  DomainStatus,
  EdgePackagingJobStatus,
  EdgePresetDeploymentStatus,
  EdgePresetDeploymentType,
  EnableSagemakerServicecatalogPortfolioCommand,
  EnabledOrDisabled,
  EndpointConfigSortKey,
  EndpointSortKey,
  EndpointStatus,
  EventSortBy,
  ExecutionRoleIdentityConfig,
  ExecutionStatus,
  FailureHandlingPolicy,
  FairShare,
  FeatureGroupSortBy,
  FeatureGroupSortOrder,
  FeatureGroupStatus,
  FeatureStatus,
  FeatureType,
  FileSystemAccessMode,
  FileSystemType,
  FillingType,
  FlatInvocations,
  FlowDefinitionStatus,
  Framework,
  GetDeviceFleetReportCommand,
  GetLineageGroupPolicyCommand,
  GetModelPackageGroupPolicyCommand,
  GetSagemakerServicecatalogPortfolioStatusCommand,
  GetScalingConfigurationRecommendationCommand,
  GetSearchSuggestionsCommand,
  HubContentSortBy,
  HubContentStatus,
  HubContentSupportStatus,
  HubContentType,
  HubSortBy,
  HubStatus,
  HumanTaskUiStatus,
  HyperParameterScalingType,
  HyperParameterTuningAllocationStrategy,
  HyperParameterTuningJobObjectiveType,
  HyperParameterTuningJobSortByOptions,
  HyperParameterTuningJobStatus,
  HyperParameterTuningJobStrategyType,
  HyperParameterTuningJobWarmStartType,
  IPAddressType,
  ImageSortBy,
  ImageSortOrder,
  ImageStatus,
  ImageVersionSortBy,
  ImageVersionSortOrder,
  ImageVersionStatus,
  ImportHubContentCommand,
  InferenceComponentCapacitySizeType,
  InferenceComponentSortKey,
  InferenceComponentStatus,
  InferenceExecutionMode,
  InferenceExperimentStatus,
  InferenceExperimentStopDesiredState,
  InferenceExperimentType,
  InputMode,
  InstanceGroupStatus,
  IsTrackingServerActive,
  JobType,
  JoinSource,
  LabelingJobStatus,
  LastUpdateStatusValue,
  LifecycleManagement,
  LineageType,
  ListActionsCommand,
  ListAlgorithmsCommand,
  ListAliasesCommand,
  ListAppImageConfigsCommand,
  ListAppsCommand,
  ListArtifactsCommand,
  ListAssociationsCommand,
  ListAutoMLJobsCommand,
  ListCandidatesForAutoMLJobCommand,
  ListClusterEventsCommand,
  ListClusterNodesCommand,
  ListClusterSchedulerConfigsCommand,
  ListClustersCommand,
  ListCodeRepositoriesCommand,
  ListCompilationJobsCommand,
  ListCompilationJobsSortBy,
  ListComputeQuotasCommand,
  ListContextsCommand,
  ListDataQualityJobDefinitionsCommand,
  ListDeviceFleetsCommand,
  ListDeviceFleetsSortBy,
  ListDevicesCommand,
  ListDomainsCommand,
  ListEdgeDeploymentPlansCommand,
  ListEdgeDeploymentPlansSortBy,
  ListEdgePackagingJobsCommand,
  ListEdgePackagingJobsSortBy,
  ListEndpointConfigsCommand,
  ListEndpointsCommand,
  ListExperimentsCommand,
  ListFeatureGroupsCommand,
  ListFlowDefinitionsCommand,
  ListHubContentVersionsCommand,
  ListHubContentsCommand,
  ListHubsCommand,
  ListHumanTaskUisCommand,
  ListHyperParameterTuningJobsCommand,
  ListImageVersionsCommand,
  ListImagesCommand,
  ListInferenceComponentsCommand,
  ListInferenceExperimentsCommand,
  ListInferenceRecommendationsJobStepsCommand,
  ListInferenceRecommendationsJobsCommand,
  ListInferenceRecommendationsJobsSortBy,
  ListLabelingJobsCommand,
  ListLabelingJobsForWorkteamCommand,
  ListLabelingJobsForWorkteamSortByOptions,
  ListLineageGroupsCommand,
  ListMlflowTrackingServersCommand,
  ListModelBiasJobDefinitionsCommand,
  ListModelCardExportJobsCommand,
  ListModelCardVersionsCommand,
  ListModelCardsCommand,
  ListModelExplainabilityJobDefinitionsCommand,
  ListModelMetadataCommand,
  ListModelPackageGroupsCommand,
  ListModelPackagesCommand,
  ListModelQualityJobDefinitionsCommand,
  ListModelsCommand,
  ListMonitoringAlertHistoryCommand,
  ListMonitoringAlertsCommand,
  ListMonitoringExecutionsCommand,
  ListMonitoringSchedulesCommand,
  ListNotebookInstanceLifecycleConfigsCommand,
  ListNotebookInstancesCommand,
  ListOptimizationJobsCommand,
  ListOptimizationJobsSortBy,
  ListPartnerAppsCommand,
  ListPipelineExecutionStepsCommand,
  ListPipelineExecutionsCommand,
  ListPipelineParametersForExecutionCommand,
  ListPipelineVersionsCommand,
  ListPipelinesCommand,
  ListProcessingJobsCommand,
  ListProjectsCommand,
  ListResourceCatalogsCommand,
  ListSpacesCommand,
  ListStageDevicesCommand,
  ListStudioLifecycleConfigsCommand,
  ListSubscribedWorkteamsCommand,
  ListTagsCommand,
  ListTrainingJobsCommand,
  ListTrainingJobsForHyperParameterTuningJobCommand,
  ListTrainingPlansCommand,
  ListTransformJobsCommand,
  ListTrialComponentsCommand,
  ListTrialsCommand,
  ListUltraServersByReservedCapacityCommand,
  ListUserProfilesCommand,
  ListWorkforcesCommand,
  ListWorkforcesSortByOptions,
  ListWorkteamsCommand,
  ListWorkteamsSortByOptions,
  MIGProfileType,
  ManagedInstanceScalingStatus,
  MetricPublishFrequencyInSeconds,
  MetricSetSource,
  MlTools,
  ModelApprovalStatus,
  ModelCacheSetting,
  ModelCardExportJobSortBy,
  ModelCardExportJobSortOrder,
  ModelCardExportJobStatus,
  ModelCardProcessingStatus,
  ModelCardSortBy,
  ModelCardSortOrder,
  ModelCardStatus,
  ModelCardVersionSortBy,
  ModelCompressionType,
  ModelInfrastructureType,
  ModelMetadataFilterType,
  ModelPackageGroupSortBy,
  ModelPackageGroupStatus,
  ModelPackageSortBy,
  ModelPackageStatus,
  ModelPackageType,
  ModelSortKey,
  ModelSpeculativeDecodingS3DataType,
  ModelSpeculativeDecodingTechnique,
  ModelVariantAction,
  ModelVariantStatus,
  MonitoringAlertHistorySortKey,
  MonitoringAlertStatus,
  MonitoringExecutionSortKey,
  MonitoringJobDefinitionSortKey,
  MonitoringProblemType,
  MonitoringScheduleSortKey,
  MonitoringType,
  NodeUnavailabilityType,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleConfigSortKey,
  NotebookInstanceLifecycleConfigSortOrder,
  NotebookInstanceSortKey,
  NotebookInstanceSortOrder,
  NotebookInstanceStatus,
  NotebookOutputOption,
  ObjectiveStatus,
  OfflineStoreStatusValue,
  Operator,
  OptimizationJobDeploymentInstanceType,
  OptimizationJobStatus,
  OrderKey,
  OutputCompressionType,
  ParameterType,
  PartnerAppAuthType,
  PartnerAppStatus,
  PartnerAppType,
  PipelineExecutionStatus,
  PipelineStatus,
  PreemptTeamTasks,
  ProblemType,
  ProcessingInstanceType,
  ProcessingJobStatus,
  ProcessingS3CompressionType,
  ProcessingS3DataDistributionType,
  ProcessingS3DataType,
  ProcessingS3InputMode,
  ProcessingS3UploadMode,
  Processor,
  ProductionVariantAcceleratorType,
  ProductionVariantInferenceAmiVersion,
  ProductionVariantInstanceType,
  ProfilingStatus,
  ProjectSortBy,
  ProjectSortOrder,
  ProjectStatus,
  PutModelPackageGroupPolicyCommand,
  QueryLineageCommand,
  RStudioServerProAccessStatus,
  RStudioServerProUserGroup,
  RecommendationJobStatus,
  RecommendationJobSupportedEndpointType,
  RecommendationJobType,
  RecommendationStatus,
  RecommendationStepType,
  RecordWrapper,
  RedshiftResultCompressionType,
  RedshiftResultFormat,
  RegisterDevicesCommand,
  Relation,
  RenderUiTemplateCommand,
  RepositoryAccessMode,
  ReservedCapacityInstanceType,
  ReservedCapacityStatus,
  ReservedCapacityType,
  ResourceCatalogSortBy,
  ResourceCatalogSortOrder,
  ResourceSharingStrategy,
  ResourceType,
  RetentionType,
  RetryPipelineExecutionCommand,
  RootAccess,
  RoutingStrategy,
  RuleEvaluationStatus,
  S3DataDistribution,
  S3DataType,
  S3ModelDataType,
  SageMaker,
  SageMakerClient,
  SageMakerImageName,
  SageMakerResourceName,
  SageMakerServiceException,
  SagemakerServicecatalogStatus,
  ScheduleStatus,
  SchedulerResourceStatus,
  SearchCommand,
  SearchSortOrder,
  SearchTrainingPlanOfferingsCommand,
  SecondaryStatus,
  SendPipelineExecutionStepFailureCommand,
  SendPipelineExecutionStepSuccessCommand,
  SharingType,
  SkipModelValidation,
  SoftwareUpdateStatus,
  SortActionsBy,
  SortArtifactsBy,
  SortAssociationsBy,
  SortBy,
  SortClusterSchedulerConfigBy,
  SortContextsBy,
  SortExperimentsBy,
  SortInferenceExperimentsBy,
  SortLineageGroupsBy,
  SortOrder,
  SortPipelineExecutionsBy,
  SortPipelinesBy,
  SortQuotaBy,
  SortTrackingServerBy,
  SortTrialComponentsBy,
  SortTrialsBy,
  SpaceSortKey,
  SpaceStatus,
  SplitType,
  StageStatus,
  StartEdgeDeploymentStageCommand,
  StartInferenceExperimentCommand,
  StartMlflowTrackingServerCommand,
  StartMonitoringScheduleCommand,
  StartNotebookInstanceCommand,
  StartPipelineExecutionCommand,
  StartSessionCommand,
  Statistic,
  StepStatus,
  StopAutoMLJobCommand,
  StopCompilationJobCommand,
  StopEdgeDeploymentStageCommand,
  StopEdgePackagingJobCommand,
  StopHyperParameterTuningJobCommand,
  StopInferenceExperimentCommand,
  StopInferenceRecommendationsJobCommand,
  StopLabelingJobCommand,
  StopMlflowTrackingServerCommand,
  StopMonitoringScheduleCommand,
  StopNotebookInstanceCommand,
  StopOptimizationJobCommand,
  StopPipelineExecutionCommand,
  StopProcessingJobCommand,
  StopTrainingJobCommand,
  StopTransformJobCommand,
  StorageType,
  StudioLifecycleConfigAppType,
  StudioLifecycleConfigSortKey,
  StudioWebPortal,
  TableFormat,
  TagPropagation,
  TargetDevice,
  TargetPlatformAccelerator,
  TargetPlatformArch,
  TargetPlatformOs,
  ThroughputMode,
  TrackingServerMaintenanceStatus,
  TrackingServerSize,
  TrackingServerStatus,
  TrafficRoutingConfigType,
  TrafficType,
  TrainingInputMode,
  TrainingInstanceType,
  TrainingJobEarlyStoppingType,
  TrainingJobSortByOptions,
  TrainingJobStatus,
  TrainingPlanFilterName,
  TrainingPlanSortBy,
  TrainingPlanSortOrder,
  TrainingPlanStatus,
  TrainingRepositoryAccessMode,
  TransformInstanceType,
  TransformJobStatus,
  TrialComponentPrimaryStatus,
  TtlDurationUnit,
  UltraServerHealthStatus,
  UpdateActionCommand,
  UpdateAppImageConfigCommand,
  UpdateArtifactCommand,
  UpdateClusterCommand,
  UpdateClusterSchedulerConfigCommand,
  UpdateClusterSoftwareCommand,
  UpdateCodeRepositoryCommand,
  UpdateComputeQuotaCommand,
  UpdateContextCommand,
  UpdateDeviceFleetCommand,
  UpdateDevicesCommand,
  UpdateDomainCommand,
  UpdateEndpointCommand,
  UpdateEndpointWeightsAndCapacitiesCommand,
  UpdateExperimentCommand,
  UpdateFeatureGroupCommand,
  UpdateFeatureMetadataCommand,
  UpdateHubCommand,
  UpdateHubContentCommand,
  UpdateHubContentReferenceCommand,
  UpdateImageCommand,
  UpdateImageVersionCommand,
  UpdateInferenceComponentCommand,
  UpdateInferenceComponentRuntimeConfigCommand,
  UpdateInferenceExperimentCommand,
  UpdateMlflowTrackingServerCommand,
  UpdateModelCardCommand,
  UpdateModelPackageCommand,
  UpdateMonitoringAlertCommand,
  UpdateMonitoringScheduleCommand,
  UpdateNotebookInstanceCommand,
  UpdateNotebookInstanceLifecycleConfigCommand,
  UpdatePartnerAppCommand,
  UpdatePipelineCommand,
  UpdatePipelineExecutionCommand,
  UpdatePipelineVersionCommand,
  UpdateProjectCommand,
  UpdateSpaceCommand,
  UpdateTrainingJobCommand,
  UpdateTrialCommand,
  UpdateTrialComponentCommand,
  UpdateUserProfileCommand,
  UpdateWorkforceCommand,
  UpdateWorkteamCommand,
  UserProfileSortKey,
  UserProfileStatus,
  VariantPropertyType,
  VariantStatus,
  VendorGuidance,
  VolumeAttachmentStatus,
  WarmPoolResourceStatus,
  WorkforceIpAddressType,
  WorkforceStatus,
  _InstanceType,
  paginateCreateHubContentPresignedUrls,
  paginateListActions,
  paginateListAlgorithms,
  paginateListAliases,
  paginateListAppImageConfigs,
  paginateListApps,
  paginateListArtifacts,
  paginateListAssociations,
  paginateListAutoMLJobs,
  paginateListCandidatesForAutoMLJob,
  paginateListClusterEvents,
  paginateListClusterNodes,
  paginateListClusterSchedulerConfigs,
  paginateListClusters,
  paginateListCodeRepositories,
  paginateListCompilationJobs,
  paginateListComputeQuotas,
  paginateListContexts,
  paginateListDataQualityJobDefinitions,
  paginateListDeviceFleets,
  paginateListDevices,
  paginateListDomains,
  paginateListEdgeDeploymentPlans,
  paginateListEdgePackagingJobs,
  paginateListEndpointConfigs,
  paginateListEndpoints,
  paginateListExperiments,
  paginateListFeatureGroups,
  paginateListFlowDefinitions,
  paginateListHumanTaskUis,
  paginateListHyperParameterTuningJobs,
  paginateListImageVersions,
  paginateListImages,
  paginateListInferenceComponents,
  paginateListInferenceExperiments,
  paginateListInferenceRecommendationsJobSteps,
  paginateListInferenceRecommendationsJobs,
  paginateListLabelingJobs,
  paginateListLabelingJobsForWorkteam,
  paginateListLineageGroups,
  paginateListMlflowTrackingServers,
  paginateListModelBiasJobDefinitions,
  paginateListModelCardExportJobs,
  paginateListModelCardVersions,
  paginateListModelCards,
  paginateListModelExplainabilityJobDefinitions,
  paginateListModelMetadata,
  paginateListModelPackageGroups,
  paginateListModelPackages,
  paginateListModelQualityJobDefinitions,
  paginateListModels,
  paginateListMonitoringAlertHistory,
  paginateListMonitoringAlerts,
  paginateListMonitoringExecutions,
  paginateListMonitoringSchedules,
  paginateListNotebookInstanceLifecycleConfigs,
  paginateListNotebookInstances,
  paginateListOptimizationJobs,
  paginateListPartnerApps,
  paginateListPipelineExecutionSteps,
  paginateListPipelineExecutions,
  paginateListPipelineParametersForExecution,
  paginateListPipelineVersions,
  paginateListPipelines,
  paginateListProcessingJobs,
  paginateListProjects,
  paginateListResourceCatalogs,
  paginateListSpaces,
  paginateListStageDevices,
  paginateListStudioLifecycleConfigs,
  paginateListSubscribedWorkteams,
  paginateListTags,
  paginateListTrainingJobs,
  paginateListTrainingJobsForHyperParameterTuningJob,
  paginateListTrainingPlans,
  paginateListTransformJobs,
  paginateListTrialComponents,
  paginateListTrials,
  paginateListUltraServersByReservedCapacity,
  paginateListUserProfiles,
  paginateListWorkforces,
  paginateListWorkteams,
  paginateQueryLineage,
  paginateSearch,
  waitForEndpointDeleted,
  waitForEndpointInService,
  waitForImageCreated,
  waitForImageDeleted,
  waitForImageUpdated,
  waitForImageVersionCreated,
  waitForImageVersionDeleted,
  waitForNotebookInstanceDeleted,
  waitForNotebookInstanceInService,
  waitForNotebookInstanceStopped,
  waitForProcessingJobCompletedOrStopped,
  waitForTrainingJobCompletedOrStopped,
  waitForTransformJobCompletedOrStopped,
  waitUntilEndpointDeleted,
  waitUntilEndpointInService,
  waitUntilImageCreated,
  waitUntilImageDeleted,
  waitUntilImageUpdated,
  waitUntilImageVersionCreated,
  waitUntilImageVersionDeleted,
  waitUntilNotebookInstanceDeleted,
  waitUntilNotebookInstanceInService,
  waitUntilNotebookInstanceStopped,
  waitUntilProcessingJobCompletedOrStopped,
  waitUntilTrainingJobCompletedOrStopped,
  waitUntilTransformJobCompletedOrStopped,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerClient === "function")
assert(typeof SageMaker === "function")
// commands
assert(typeof AddAssociationCommand === "function")
assert(typeof AddTagsCommand === "function")
assert(typeof AssociateTrialComponentCommand === "function")
assert(typeof AttachClusterNodeVolumeCommand === "function")
assert(typeof BatchAddClusterNodesCommand === "function")
assert(typeof BatchDeleteClusterNodesCommand === "function")
assert(typeof BatchDescribeModelPackageCommand === "function")
assert(typeof BatchRebootClusterNodesCommand === "function")
assert(typeof BatchReplaceClusterNodesCommand === "function")
assert(typeof CreateActionCommand === "function")
assert(typeof CreateAlgorithmCommand === "function")
assert(typeof CreateAppCommand === "function")
assert(typeof CreateAppImageConfigCommand === "function")
assert(typeof CreateArtifactCommand === "function")
assert(typeof CreateAutoMLJobCommand === "function")
assert(typeof CreateAutoMLJobV2Command === "function")
assert(typeof CreateClusterCommand === "function")
assert(typeof CreateClusterSchedulerConfigCommand === "function")
assert(typeof CreateCodeRepositoryCommand === "function")
assert(typeof CreateCompilationJobCommand === "function")
assert(typeof CreateComputeQuotaCommand === "function")
assert(typeof CreateContextCommand === "function")
assert(typeof CreateDataQualityJobDefinitionCommand === "function")
assert(typeof CreateDeviceFleetCommand === "function")
assert(typeof CreateDomainCommand === "function")
assert(typeof CreateEdgeDeploymentPlanCommand === "function")
assert(typeof CreateEdgeDeploymentStageCommand === "function")
assert(typeof CreateEdgePackagingJobCommand === "function")
assert(typeof CreateEndpointCommand === "function")
assert(typeof CreateEndpointConfigCommand === "function")
assert(typeof CreateExperimentCommand === "function")
assert(typeof CreateFeatureGroupCommand === "function")
assert(typeof CreateFlowDefinitionCommand === "function")
assert(typeof CreateHubCommand === "function")
assert(typeof CreateHubContentPresignedUrlsCommand === "function")
assert(typeof CreateHubContentReferenceCommand === "function")
assert(typeof CreateHumanTaskUiCommand === "function")
assert(typeof CreateHyperParameterTuningJobCommand === "function")
assert(typeof CreateImageCommand === "function")
assert(typeof CreateImageVersionCommand === "function")
assert(typeof CreateInferenceComponentCommand === "function")
assert(typeof CreateInferenceExperimentCommand === "function")
assert(typeof CreateInferenceRecommendationsJobCommand === "function")
assert(typeof CreateLabelingJobCommand === "function")
assert(typeof CreateMlflowTrackingServerCommand === "function")
assert(typeof CreateModelCommand === "function")
assert(typeof CreateModelBiasJobDefinitionCommand === "function")
assert(typeof CreateModelCardCommand === "function")
assert(typeof CreateModelCardExportJobCommand === "function")
assert(typeof CreateModelExplainabilityJobDefinitionCommand === "function")
assert(typeof CreateModelPackageCommand === "function")
assert(typeof CreateModelPackageGroupCommand === "function")
assert(typeof CreateModelQualityJobDefinitionCommand === "function")
assert(typeof CreateMonitoringScheduleCommand === "function")
assert(typeof CreateNotebookInstanceCommand === "function")
assert(typeof CreateNotebookInstanceLifecycleConfigCommand === "function")
assert(typeof CreateOptimizationJobCommand === "function")
assert(typeof CreatePartnerAppCommand === "function")
assert(typeof CreatePartnerAppPresignedUrlCommand === "function")
assert(typeof CreatePipelineCommand === "function")
assert(typeof CreatePresignedDomainUrlCommand === "function")
assert(typeof CreatePresignedMlflowTrackingServerUrlCommand === "function")
assert(typeof CreatePresignedNotebookInstanceUrlCommand === "function")
assert(typeof CreateProcessingJobCommand === "function")
assert(typeof CreateProjectCommand === "function")
assert(typeof CreateSpaceCommand === "function")
assert(typeof CreateStudioLifecycleConfigCommand === "function")
assert(typeof CreateTrainingJobCommand === "function")
assert(typeof CreateTrainingPlanCommand === "function")
assert(typeof CreateTransformJobCommand === "function")
assert(typeof CreateTrialCommand === "function")
assert(typeof CreateTrialComponentCommand === "function")
assert(typeof CreateUserProfileCommand === "function")
assert(typeof CreateWorkforceCommand === "function")
assert(typeof CreateWorkteamCommand === "function")
assert(typeof DeleteActionCommand === "function")
assert(typeof DeleteAlgorithmCommand === "function")
assert(typeof DeleteAppCommand === "function")
assert(typeof DeleteAppImageConfigCommand === "function")
assert(typeof DeleteArtifactCommand === "function")
assert(typeof DeleteAssociationCommand === "function")
assert(typeof DeleteClusterCommand === "function")
assert(typeof DeleteClusterSchedulerConfigCommand === "function")
assert(typeof DeleteCodeRepositoryCommand === "function")
assert(typeof DeleteCompilationJobCommand === "function")
assert(typeof DeleteComputeQuotaCommand === "function")
assert(typeof DeleteContextCommand === "function")
assert(typeof DeleteDataQualityJobDefinitionCommand === "function")
assert(typeof DeleteDeviceFleetCommand === "function")
assert(typeof DeleteDomainCommand === "function")
assert(typeof DeleteEdgeDeploymentPlanCommand === "function")
assert(typeof DeleteEdgeDeploymentStageCommand === "function")
assert(typeof DeleteEndpointCommand === "function")
assert(typeof DeleteEndpointConfigCommand === "function")
assert(typeof DeleteExperimentCommand === "function")
assert(typeof DeleteFeatureGroupCommand === "function")
assert(typeof DeleteFlowDefinitionCommand === "function")
assert(typeof DeleteHubCommand === "function")
assert(typeof DeleteHubContentCommand === "function")
assert(typeof DeleteHubContentReferenceCommand === "function")
assert(typeof DeleteHumanTaskUiCommand === "function")
assert(typeof DeleteHyperParameterTuningJobCommand === "function")
assert(typeof DeleteImageCommand === "function")
assert(typeof DeleteImageVersionCommand === "function")
assert(typeof DeleteInferenceComponentCommand === "function")
assert(typeof DeleteInferenceExperimentCommand === "function")
assert(typeof DeleteMlflowTrackingServerCommand === "function")
assert(typeof DeleteModelCommand === "function")
assert(typeof DeleteModelBiasJobDefinitionCommand === "function")
assert(typeof DeleteModelCardCommand === "function")
assert(typeof DeleteModelExplainabilityJobDefinitionCommand === "function")
assert(typeof DeleteModelPackageCommand === "function")
assert(typeof DeleteModelPackageGroupCommand === "function")
assert(typeof DeleteModelPackageGroupPolicyCommand === "function")
assert(typeof DeleteModelQualityJobDefinitionCommand === "function")
assert(typeof DeleteMonitoringScheduleCommand === "function")
assert(typeof DeleteNotebookInstanceCommand === "function")
assert(typeof DeleteNotebookInstanceLifecycleConfigCommand === "function")
assert(typeof DeleteOptimizationJobCommand === "function")
assert(typeof DeletePartnerAppCommand === "function")
assert(typeof DeletePipelineCommand === "function")
assert(typeof DeleteProcessingJobCommand === "function")
assert(typeof DeleteProjectCommand === "function")
assert(typeof DeleteSpaceCommand === "function")
assert(typeof DeleteStudioLifecycleConfigCommand === "function")
assert(typeof DeleteTagsCommand === "function")
assert(typeof DeleteTrainingJobCommand === "function")
assert(typeof DeleteTrialCommand === "function")
assert(typeof DeleteTrialComponentCommand === "function")
assert(typeof DeleteUserProfileCommand === "function")
assert(typeof DeleteWorkforceCommand === "function")
assert(typeof DeleteWorkteamCommand === "function")
assert(typeof DeregisterDevicesCommand === "function")
assert(typeof DescribeActionCommand === "function")
assert(typeof DescribeAlgorithmCommand === "function")
assert(typeof DescribeAppCommand === "function")
assert(typeof DescribeAppImageConfigCommand === "function")
assert(typeof DescribeArtifactCommand === "function")
assert(typeof DescribeAutoMLJobCommand === "function")
assert(typeof DescribeAutoMLJobV2Command === "function")
assert(typeof DescribeClusterCommand === "function")
assert(typeof DescribeClusterEventCommand === "function")
assert(typeof DescribeClusterNodeCommand === "function")
assert(typeof DescribeClusterSchedulerConfigCommand === "function")
assert(typeof DescribeCodeRepositoryCommand === "function")
assert(typeof DescribeCompilationJobCommand === "function")
assert(typeof DescribeComputeQuotaCommand === "function")
assert(typeof DescribeContextCommand === "function")
assert(typeof DescribeDataQualityJobDefinitionCommand === "function")
assert(typeof DescribeDeviceCommand === "function")
assert(typeof DescribeDeviceFleetCommand === "function")
assert(typeof DescribeDomainCommand === "function")
assert(typeof DescribeEdgeDeploymentPlanCommand === "function")
assert(typeof DescribeEdgePackagingJobCommand === "function")
assert(typeof DescribeEndpointCommand === "function")
assert(typeof DescribeEndpointConfigCommand === "function")
assert(typeof DescribeExperimentCommand === "function")
assert(typeof DescribeFeatureGroupCommand === "function")
assert(typeof DescribeFeatureMetadataCommand === "function")
assert(typeof DescribeFlowDefinitionCommand === "function")
assert(typeof DescribeHubCommand === "function")
assert(typeof DescribeHubContentCommand === "function")
assert(typeof DescribeHumanTaskUiCommand === "function")
assert(typeof DescribeHyperParameterTuningJobCommand === "function")
assert(typeof DescribeImageCommand === "function")
assert(typeof DescribeImageVersionCommand === "function")
assert(typeof DescribeInferenceComponentCommand === "function")
assert(typeof DescribeInferenceExperimentCommand === "function")
assert(typeof DescribeInferenceRecommendationsJobCommand === "function")
assert(typeof DescribeLabelingJobCommand === "function")
assert(typeof DescribeLineageGroupCommand === "function")
assert(typeof DescribeMlflowTrackingServerCommand === "function")
assert(typeof DescribeModelCommand === "function")
assert(typeof DescribeModelBiasJobDefinitionCommand === "function")
assert(typeof DescribeModelCardCommand === "function")
assert(typeof DescribeModelCardExportJobCommand === "function")
assert(typeof DescribeModelExplainabilityJobDefinitionCommand === "function")
assert(typeof DescribeModelPackageCommand === "function")
assert(typeof DescribeModelPackageGroupCommand === "function")
assert(typeof DescribeModelQualityJobDefinitionCommand === "function")
assert(typeof DescribeMonitoringScheduleCommand === "function")
assert(typeof DescribeNotebookInstanceCommand === "function")
assert(typeof DescribeNotebookInstanceLifecycleConfigCommand === "function")
assert(typeof DescribeOptimizationJobCommand === "function")
assert(typeof DescribePartnerAppCommand === "function")
assert(typeof DescribePipelineCommand === "function")
assert(typeof DescribePipelineDefinitionForExecutionCommand === "function")
assert(typeof DescribePipelineExecutionCommand === "function")
assert(typeof DescribeProcessingJobCommand === "function")
assert(typeof DescribeProjectCommand === "function")
assert(typeof DescribeReservedCapacityCommand === "function")
assert(typeof DescribeSpaceCommand === "function")
assert(typeof DescribeStudioLifecycleConfigCommand === "function")
assert(typeof DescribeSubscribedWorkteamCommand === "function")
assert(typeof DescribeTrainingJobCommand === "function")
assert(typeof DescribeTrainingPlanCommand === "function")
assert(typeof DescribeTransformJobCommand === "function")
assert(typeof DescribeTrialCommand === "function")
assert(typeof DescribeTrialComponentCommand === "function")
assert(typeof DescribeUserProfileCommand === "function")
assert(typeof DescribeWorkforceCommand === "function")
assert(typeof DescribeWorkteamCommand === "function")
assert(typeof DetachClusterNodeVolumeCommand === "function")
assert(typeof DisableSagemakerServicecatalogPortfolioCommand === "function")
assert(typeof DisassociateTrialComponentCommand === "function")
assert(typeof EnableSagemakerServicecatalogPortfolioCommand === "function")
assert(typeof GetDeviceFleetReportCommand === "function")
assert(typeof GetLineageGroupPolicyCommand === "function")
assert(typeof GetModelPackageGroupPolicyCommand === "function")
assert(typeof GetSagemakerServicecatalogPortfolioStatusCommand === "function")
assert(typeof GetScalingConfigurationRecommendationCommand === "function")
assert(typeof GetSearchSuggestionsCommand === "function")
assert(typeof ImportHubContentCommand === "function")
assert(typeof ListActionsCommand === "function")
assert(typeof ListAlgorithmsCommand === "function")
assert(typeof ListAliasesCommand === "function")
assert(typeof ListAppImageConfigsCommand === "function")
assert(typeof ListAppsCommand === "function")
assert(typeof ListArtifactsCommand === "function")
assert(typeof ListAssociationsCommand === "function")
assert(typeof ListAutoMLJobsCommand === "function")
assert(typeof ListCandidatesForAutoMLJobCommand === "function")
assert(typeof ListClusterEventsCommand === "function")
assert(typeof ListClusterNodesCommand === "function")
assert(typeof ListClustersCommand === "function")
assert(typeof ListClusterSchedulerConfigsCommand === "function")
assert(typeof ListCodeRepositoriesCommand === "function")
assert(typeof ListCompilationJobsCommand === "function")
assert(typeof ListComputeQuotasCommand === "function")
assert(typeof ListContextsCommand === "function")
assert(typeof ListDataQualityJobDefinitionsCommand === "function")
assert(typeof ListDeviceFleetsCommand === "function")
assert(typeof ListDevicesCommand === "function")
assert(typeof ListDomainsCommand === "function")
assert(typeof ListEdgeDeploymentPlansCommand === "function")
assert(typeof ListEdgePackagingJobsCommand === "function")
assert(typeof ListEndpointConfigsCommand === "function")
assert(typeof ListEndpointsCommand === "function")
assert(typeof ListExperimentsCommand === "function")
assert(typeof ListFeatureGroupsCommand === "function")
assert(typeof ListFlowDefinitionsCommand === "function")
assert(typeof ListHubContentsCommand === "function")
assert(typeof ListHubContentVersionsCommand === "function")
assert(typeof ListHubsCommand === "function")
assert(typeof ListHumanTaskUisCommand === "function")
assert(typeof ListHyperParameterTuningJobsCommand === "function")
assert(typeof ListImagesCommand === "function")
assert(typeof ListImageVersionsCommand === "function")
assert(typeof ListInferenceComponentsCommand === "function")
assert(typeof ListInferenceExperimentsCommand === "function")
assert(typeof ListInferenceRecommendationsJobsCommand === "function")
assert(typeof ListInferenceRecommendationsJobStepsCommand === "function")
assert(typeof ListLabelingJobsCommand === "function")
assert(typeof ListLabelingJobsForWorkteamCommand === "function")
assert(typeof ListLineageGroupsCommand === "function")
assert(typeof ListMlflowTrackingServersCommand === "function")
assert(typeof ListModelBiasJobDefinitionsCommand === "function")
assert(typeof ListModelCardExportJobsCommand === "function")
assert(typeof ListModelCardsCommand === "function")
assert(typeof ListModelCardVersionsCommand === "function")
assert(typeof ListModelExplainabilityJobDefinitionsCommand === "function")
assert(typeof ListModelMetadataCommand === "function")
assert(typeof ListModelPackageGroupsCommand === "function")
assert(typeof ListModelPackagesCommand === "function")
assert(typeof ListModelQualityJobDefinitionsCommand === "function")
assert(typeof ListModelsCommand === "function")
assert(typeof ListMonitoringAlertHistoryCommand === "function")
assert(typeof ListMonitoringAlertsCommand === "function")
assert(typeof ListMonitoringExecutionsCommand === "function")
assert(typeof ListMonitoringSchedulesCommand === "function")
assert(typeof ListNotebookInstanceLifecycleConfigsCommand === "function")
assert(typeof ListNotebookInstancesCommand === "function")
assert(typeof ListOptimizationJobsCommand === "function")
assert(typeof ListPartnerAppsCommand === "function")
assert(typeof ListPipelineExecutionsCommand === "function")
assert(typeof ListPipelineExecutionStepsCommand === "function")
assert(typeof ListPipelineParametersForExecutionCommand === "function")
assert(typeof ListPipelinesCommand === "function")
assert(typeof ListPipelineVersionsCommand === "function")
assert(typeof ListProcessingJobsCommand === "function")
assert(typeof ListProjectsCommand === "function")
assert(typeof ListResourceCatalogsCommand === "function")
assert(typeof ListSpacesCommand === "function")
assert(typeof ListStageDevicesCommand === "function")
assert(typeof ListStudioLifecycleConfigsCommand === "function")
assert(typeof ListSubscribedWorkteamsCommand === "function")
assert(typeof ListTagsCommand === "function")
assert(typeof ListTrainingJobsCommand === "function")
assert(typeof ListTrainingJobsForHyperParameterTuningJobCommand === "function")
assert(typeof ListTrainingPlansCommand === "function")
assert(typeof ListTransformJobsCommand === "function")
assert(typeof ListTrialComponentsCommand === "function")
assert(typeof ListTrialsCommand === "function")
assert(typeof ListUltraServersByReservedCapacityCommand === "function")
assert(typeof ListUserProfilesCommand === "function")
assert(typeof ListWorkforcesCommand === "function")
assert(typeof ListWorkteamsCommand === "function")
assert(typeof PutModelPackageGroupPolicyCommand === "function")
assert(typeof QueryLineageCommand === "function")
assert(typeof RegisterDevicesCommand === "function")
assert(typeof RenderUiTemplateCommand === "function")
assert(typeof RetryPipelineExecutionCommand === "function")
assert(typeof SearchCommand === "function")
assert(typeof SearchTrainingPlanOfferingsCommand === "function")
assert(typeof SendPipelineExecutionStepFailureCommand === "function")
assert(typeof SendPipelineExecutionStepSuccessCommand === "function")
assert(typeof StartEdgeDeploymentStageCommand === "function")
assert(typeof StartInferenceExperimentCommand === "function")
assert(typeof StartMlflowTrackingServerCommand === "function")
assert(typeof StartMonitoringScheduleCommand === "function")
assert(typeof StartNotebookInstanceCommand === "function")
assert(typeof StartPipelineExecutionCommand === "function")
assert(typeof StartSessionCommand === "function")
assert(typeof StopAutoMLJobCommand === "function")
assert(typeof StopCompilationJobCommand === "function")
assert(typeof StopEdgeDeploymentStageCommand === "function")
assert(typeof StopEdgePackagingJobCommand === "function")
assert(typeof StopHyperParameterTuningJobCommand === "function")
assert(typeof StopInferenceExperimentCommand === "function")
assert(typeof StopInferenceRecommendationsJobCommand === "function")
assert(typeof StopLabelingJobCommand === "function")
assert(typeof StopMlflowTrackingServerCommand === "function")
assert(typeof StopMonitoringScheduleCommand === "function")
assert(typeof StopNotebookInstanceCommand === "function")
assert(typeof StopOptimizationJobCommand === "function")
assert(typeof StopPipelineExecutionCommand === "function")
assert(typeof StopProcessingJobCommand === "function")
assert(typeof StopTrainingJobCommand === "function")
assert(typeof StopTransformJobCommand === "function")
assert(typeof UpdateActionCommand === "function")
assert(typeof UpdateAppImageConfigCommand === "function")
assert(typeof UpdateArtifactCommand === "function")
assert(typeof UpdateClusterCommand === "function")
assert(typeof UpdateClusterSchedulerConfigCommand === "function")
assert(typeof UpdateClusterSoftwareCommand === "function")
assert(typeof UpdateCodeRepositoryCommand === "function")
assert(typeof UpdateComputeQuotaCommand === "function")
assert(typeof UpdateContextCommand === "function")
assert(typeof UpdateDeviceFleetCommand === "function")
assert(typeof UpdateDevicesCommand === "function")
assert(typeof UpdateDomainCommand === "function")
assert(typeof UpdateEndpointCommand === "function")
assert(typeof UpdateEndpointWeightsAndCapacitiesCommand === "function")
assert(typeof UpdateExperimentCommand === "function")
assert(typeof UpdateFeatureGroupCommand === "function")
assert(typeof UpdateFeatureMetadataCommand === "function")
assert(typeof UpdateHubCommand === "function")
assert(typeof UpdateHubContentCommand === "function")
assert(typeof UpdateHubContentReferenceCommand === "function")
assert(typeof UpdateImageCommand === "function")
assert(typeof UpdateImageVersionCommand === "function")
assert(typeof UpdateInferenceComponentCommand === "function")
assert(typeof UpdateInferenceComponentRuntimeConfigCommand === "function")
assert(typeof UpdateInferenceExperimentCommand === "function")
assert(typeof UpdateMlflowTrackingServerCommand === "function")
assert(typeof UpdateModelCardCommand === "function")
assert(typeof UpdateModelPackageCommand === "function")
assert(typeof UpdateMonitoringAlertCommand === "function")
assert(typeof UpdateMonitoringScheduleCommand === "function")
assert(typeof UpdateNotebookInstanceCommand === "function")
assert(typeof UpdateNotebookInstanceLifecycleConfigCommand === "function")
assert(typeof UpdatePartnerAppCommand === "function")
assert(typeof UpdatePipelineCommand === "function")
assert(typeof UpdatePipelineExecutionCommand === "function")
assert(typeof UpdatePipelineVersionCommand === "function")
assert(typeof UpdateProjectCommand === "function")
assert(typeof UpdateSpaceCommand === "function")
assert(typeof UpdateTrainingJobCommand === "function")
assert(typeof UpdateTrialCommand === "function")
assert(typeof UpdateTrialComponentCommand === "function")
assert(typeof UpdateUserProfileCommand === "function")
assert(typeof UpdateWorkforceCommand === "function")
assert(typeof UpdateWorkteamCommand === "function")
// enums
assert(typeof ActionStatus === "object");
assert(typeof ActivationState === "object");
assert(typeof ActiveClusterOperationName === "object");
assert(typeof AdditionalS3DataSourceDataType === "object");
assert(typeof AggregationTransformationValue === "object");
assert(typeof AlgorithmSortBy === "object");
assert(typeof AlgorithmStatus === "object");
assert(typeof AppImageConfigSortKey === "object");
assert(typeof AppInstanceType === "object");
assert(typeof AppNetworkAccessType === "object");
assert(typeof AppSecurityGroupManagement === "object");
assert(typeof AppSortKey === "object");
assert(typeof AppStatus === "object");
assert(typeof AppType === "object");
assert(typeof ArtifactSourceIdType === "object");
assert(typeof AssemblyType === "object");
assert(typeof AssociationEdgeType === "object");
assert(typeof AsyncNotificationTopicTypes === "object");
assert(typeof AthenaResultCompressionType === "object");
assert(typeof AthenaResultFormat === "object");
assert(typeof AuthMode === "object");
assert(typeof AutoMLAlgorithm === "object");
assert(typeof AutoMLChannelType === "object");
assert(typeof AutoMLJobObjectiveType === "object");
assert(typeof AutoMLJobSecondaryStatus === "object");
assert(typeof AutoMLJobStatus === "object");
assert(typeof AutoMLMetricEnum === "object");
assert(typeof AutoMLMetricExtendedEnum === "object");
assert(typeof AutoMLMode === "object");
assert(typeof AutoMLProblemTypeConfigName === "object");
assert(typeof AutoMLProcessingUnit === "object");
assert(typeof AutoMLS3DataType === "object");
assert(typeof AutoMLSortBy === "object");
assert(typeof AutoMLSortOrder === "object");
assert(typeof AutoMountHomeEFS === "object");
assert(typeof AutotuneMode === "object");
assert(typeof AwsManagedHumanLoopRequestSource === "object");
assert(typeof BatchAddClusterNodesErrorCode === "object");
assert(typeof BatchDeleteClusterNodesErrorCode === "object");
assert(typeof BatchRebootClusterNodesErrorCode === "object");
assert(typeof BatchReplaceClusterNodesErrorCode === "object");
assert(typeof BatchStrategy === "object");
assert(typeof BooleanOperator === "object");
assert(typeof CandidateSortBy === "object");
assert(typeof CandidateStatus === "object");
assert(typeof CandidateStepType === "object");
assert(typeof CapacityReservationPreference === "object");
assert(typeof CapacityReservationType === "object");
assert(typeof CapacitySizeType === "object");
assert(typeof CaptureMode === "object");
assert(typeof CaptureStatus === "object");
assert(typeof ClarifyFeatureType === "object");
assert(typeof ClarifyTextGranularity === "object");
assert(typeof ClarifyTextLanguage === "object");
assert(typeof ClusterAutoScalerType === "object");
assert(typeof ClusterAutoScalingMode === "object");
assert(typeof ClusterAutoScalingStatus === "object");
assert(typeof ClusterCapacityType === "object");
assert(typeof ClusterConfigMode === "object");
assert(typeof ClusterEventResourceType === "object");
assert(typeof ClusterInstanceStatus === "object");
assert(typeof ClusterInstanceType === "object");
assert(typeof ClusterKubernetesTaintEffect === "object");
assert(typeof ClusterNodeProvisioningMode === "object");
assert(typeof ClusterNodeRecovery === "object");
assert(typeof ClusterSortBy === "object");
assert(typeof ClusterStatus === "object");
assert(typeof CodeRepositorySortBy === "object");
assert(typeof CodeRepositorySortOrder === "object");
assert(typeof CollectionType === "object");
assert(typeof CompilationJobStatus === "object");
assert(typeof CompleteOnConvergence === "object");
assert(typeof CompressionType === "object");
assert(typeof ConditionOutcome === "object");
assert(typeof ContainerMode === "object");
assert(typeof ContentClassifier === "object");
assert(typeof CrossAccountFilterOption === "object");
assert(typeof DataDistributionType === "object");
assert(typeof DataSourceName === "object");
assert(typeof DeepHealthCheckType === "object");
assert(typeof DetailedAlgorithmStatus === "object");
assert(typeof DetailedModelPackageStatus === "object");
assert(typeof DeviceDeploymentStatus === "object");
assert(typeof DeviceSubsetType === "object");
assert(typeof DirectInternetAccess === "object");
assert(typeof Direction === "object");
assert(typeof DomainStatus === "object");
assert(typeof EdgePackagingJobStatus === "object");
assert(typeof EdgePresetDeploymentStatus === "object");
assert(typeof EdgePresetDeploymentType === "object");
assert(typeof EnabledOrDisabled === "object");
assert(typeof EndpointConfigSortKey === "object");
assert(typeof EndpointSortKey === "object");
assert(typeof EndpointStatus === "object");
assert(typeof EventSortBy === "object");
assert(typeof ExecutionRoleIdentityConfig === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof FailureHandlingPolicy === "object");
assert(typeof FairShare === "object");
assert(typeof FeatureGroupSortBy === "object");
assert(typeof FeatureGroupSortOrder === "object");
assert(typeof FeatureGroupStatus === "object");
assert(typeof FeatureStatus === "object");
assert(typeof FeatureType === "object");
assert(typeof FileSystemAccessMode === "object");
assert(typeof FileSystemType === "object");
assert(typeof FillingType === "object");
assert(typeof FlatInvocations === "object");
assert(typeof FlowDefinitionStatus === "object");
assert(typeof Framework === "object");
assert(typeof HubContentSortBy === "object");
assert(typeof HubContentStatus === "object");
assert(typeof HubContentSupportStatus === "object");
assert(typeof HubContentType === "object");
assert(typeof HubSortBy === "object");
assert(typeof HubStatus === "object");
assert(typeof HumanTaskUiStatus === "object");
assert(typeof HyperParameterScalingType === "object");
assert(typeof HyperParameterTuningAllocationStrategy === "object");
assert(typeof HyperParameterTuningJobObjectiveType === "object");
assert(typeof HyperParameterTuningJobSortByOptions === "object");
assert(typeof HyperParameterTuningJobStatus === "object");
assert(typeof HyperParameterTuningJobStrategyType === "object");
assert(typeof HyperParameterTuningJobWarmStartType === "object");
assert(typeof ImageSortBy === "object");
assert(typeof ImageSortOrder === "object");
assert(typeof ImageStatus === "object");
assert(typeof ImageVersionSortBy === "object");
assert(typeof ImageVersionSortOrder === "object");
assert(typeof ImageVersionStatus === "object");
assert(typeof InferenceComponentCapacitySizeType === "object");
assert(typeof InferenceComponentSortKey === "object");
assert(typeof InferenceComponentStatus === "object");
assert(typeof InferenceExecutionMode === "object");
assert(typeof InferenceExperimentStatus === "object");
assert(typeof InferenceExperimentStopDesiredState === "object");
assert(typeof InferenceExperimentType === "object");
assert(typeof InputMode === "object");
assert(typeof InstanceGroupStatus === "object");
assert(typeof _InstanceType === "object");
assert(typeof IPAddressType === "object");
assert(typeof IsTrackingServerActive === "object");
assert(typeof JobType === "object");
assert(typeof JoinSource === "object");
assert(typeof LabelingJobStatus === "object");
assert(typeof LastUpdateStatusValue === "object");
assert(typeof LifecycleManagement === "object");
assert(typeof LineageType === "object");
assert(typeof ListCompilationJobsSortBy === "object");
assert(typeof ListDeviceFleetsSortBy === "object");
assert(typeof ListEdgeDeploymentPlansSortBy === "object");
assert(typeof ListEdgePackagingJobsSortBy === "object");
assert(typeof ListInferenceRecommendationsJobsSortBy === "object");
assert(typeof ListLabelingJobsForWorkteamSortByOptions === "object");
assert(typeof ListOptimizationJobsSortBy === "object");
assert(typeof ListWorkforcesSortByOptions === "object");
assert(typeof ListWorkteamsSortByOptions === "object");
assert(typeof ManagedInstanceScalingStatus === "object");
assert(typeof MetricPublishFrequencyInSeconds === "object");
assert(typeof MetricSetSource === "object");
assert(typeof MIGProfileType === "object");
assert(typeof MlTools === "object");
assert(typeof ModelApprovalStatus === "object");
assert(typeof ModelCacheSetting === "object");
assert(typeof ModelCardExportJobSortBy === "object");
assert(typeof ModelCardExportJobSortOrder === "object");
assert(typeof ModelCardExportJobStatus === "object");
assert(typeof ModelCardProcessingStatus === "object");
assert(typeof ModelCardSortBy === "object");
assert(typeof ModelCardSortOrder === "object");
assert(typeof ModelCardStatus === "object");
assert(typeof ModelCardVersionSortBy === "object");
assert(typeof ModelCompressionType === "object");
assert(typeof ModelInfrastructureType === "object");
assert(typeof ModelMetadataFilterType === "object");
assert(typeof ModelPackageGroupSortBy === "object");
assert(typeof ModelPackageGroupStatus === "object");
assert(typeof ModelPackageSortBy === "object");
assert(typeof ModelPackageStatus === "object");
assert(typeof ModelPackageType === "object");
assert(typeof ModelSortKey === "object");
assert(typeof ModelSpeculativeDecodingS3DataType === "object");
assert(typeof ModelSpeculativeDecodingTechnique === "object");
assert(typeof ModelVariantAction === "object");
assert(typeof ModelVariantStatus === "object");
assert(typeof MonitoringAlertHistorySortKey === "object");
assert(typeof MonitoringAlertStatus === "object");
assert(typeof MonitoringExecutionSortKey === "object");
assert(typeof MonitoringJobDefinitionSortKey === "object");
assert(typeof MonitoringProblemType === "object");
assert(typeof MonitoringScheduleSortKey === "object");
assert(typeof MonitoringType === "object");
assert(typeof NodeUnavailabilityType === "object");
assert(typeof NotebookInstanceAcceleratorType === "object");
assert(typeof NotebookInstanceLifecycleConfigSortKey === "object");
assert(typeof NotebookInstanceLifecycleConfigSortOrder === "object");
assert(typeof NotebookInstanceSortKey === "object");
assert(typeof NotebookInstanceSortOrder === "object");
assert(typeof NotebookInstanceStatus === "object");
assert(typeof NotebookOutputOption === "object");
assert(typeof ObjectiveStatus === "object");
assert(typeof OfflineStoreStatusValue === "object");
assert(typeof Operator === "object");
assert(typeof OptimizationJobDeploymentInstanceType === "object");
assert(typeof OptimizationJobStatus === "object");
assert(typeof OrderKey === "object");
assert(typeof OutputCompressionType === "object");
assert(typeof ParameterType === "object");
assert(typeof PartnerAppAuthType === "object");
assert(typeof PartnerAppStatus === "object");
assert(typeof PartnerAppType === "object");
assert(typeof PipelineExecutionStatus === "object");
assert(typeof PipelineStatus === "object");
assert(typeof PreemptTeamTasks === "object");
assert(typeof ProblemType === "object");
assert(typeof ProcessingInstanceType === "object");
assert(typeof ProcessingJobStatus === "object");
assert(typeof ProcessingS3CompressionType === "object");
assert(typeof ProcessingS3DataDistributionType === "object");
assert(typeof ProcessingS3DataType === "object");
assert(typeof ProcessingS3InputMode === "object");
assert(typeof ProcessingS3UploadMode === "object");
assert(typeof Processor === "object");
assert(typeof ProductionVariantAcceleratorType === "object");
assert(typeof ProductionVariantInferenceAmiVersion === "object");
assert(typeof ProductionVariantInstanceType === "object");
assert(typeof ProfilingStatus === "object");
assert(typeof ProjectSortBy === "object");
assert(typeof ProjectSortOrder === "object");
assert(typeof ProjectStatus === "object");
assert(typeof RecommendationJobStatus === "object");
assert(typeof RecommendationJobSupportedEndpointType === "object");
assert(typeof RecommendationJobType === "object");
assert(typeof RecommendationStatus === "object");
assert(typeof RecommendationStepType === "object");
assert(typeof RecordWrapper === "object");
assert(typeof RedshiftResultCompressionType === "object");
assert(typeof RedshiftResultFormat === "object");
assert(typeof Relation === "object");
assert(typeof RepositoryAccessMode === "object");
assert(typeof ReservedCapacityInstanceType === "object");
assert(typeof ReservedCapacityStatus === "object");
assert(typeof ReservedCapacityType === "object");
assert(typeof ResourceCatalogSortBy === "object");
assert(typeof ResourceCatalogSortOrder === "object");
assert(typeof ResourceSharingStrategy === "object");
assert(typeof ResourceType === "object");
assert(typeof RetentionType === "object");
assert(typeof RootAccess === "object");
assert(typeof RoutingStrategy === "object");
assert(typeof RStudioServerProAccessStatus === "object");
assert(typeof RStudioServerProUserGroup === "object");
assert(typeof RuleEvaluationStatus === "object");
assert(typeof S3DataDistribution === "object");
assert(typeof S3DataType === "object");
assert(typeof S3ModelDataType === "object");
assert(typeof SageMakerImageName === "object");
assert(typeof SageMakerResourceName === "object");
assert(typeof SagemakerServicecatalogStatus === "object");
assert(typeof SchedulerResourceStatus === "object");
assert(typeof ScheduleStatus === "object");
assert(typeof SearchSortOrder === "object");
assert(typeof SecondaryStatus === "object");
assert(typeof SharingType === "object");
assert(typeof SkipModelValidation === "object");
assert(typeof SoftwareUpdateStatus === "object");
assert(typeof SortActionsBy === "object");
assert(typeof SortArtifactsBy === "object");
assert(typeof SortAssociationsBy === "object");
assert(typeof SortBy === "object");
assert(typeof SortClusterSchedulerConfigBy === "object");
assert(typeof SortContextsBy === "object");
assert(typeof SortExperimentsBy === "object");
assert(typeof SortInferenceExperimentsBy === "object");
assert(typeof SortLineageGroupsBy === "object");
assert(typeof SortOrder === "object");
assert(typeof SortPipelineExecutionsBy === "object");
assert(typeof SortPipelinesBy === "object");
assert(typeof SortQuotaBy === "object");
assert(typeof SortTrackingServerBy === "object");
assert(typeof SortTrialComponentsBy === "object");
assert(typeof SortTrialsBy === "object");
assert(typeof SpaceSortKey === "object");
assert(typeof SpaceStatus === "object");
assert(typeof SplitType === "object");
assert(typeof StageStatus === "object");
assert(typeof Statistic === "object");
assert(typeof StepStatus === "object");
assert(typeof StorageType === "object");
assert(typeof StudioLifecycleConfigAppType === "object");
assert(typeof StudioLifecycleConfigSortKey === "object");
assert(typeof StudioWebPortal === "object");
assert(typeof TableFormat === "object");
assert(typeof TagPropagation === "object");
assert(typeof TargetDevice === "object");
assert(typeof TargetPlatformAccelerator === "object");
assert(typeof TargetPlatformArch === "object");
assert(typeof TargetPlatformOs === "object");
assert(typeof ThroughputMode === "object");
assert(typeof TrackingServerMaintenanceStatus === "object");
assert(typeof TrackingServerSize === "object");
assert(typeof TrackingServerStatus === "object");
assert(typeof TrafficRoutingConfigType === "object");
assert(typeof TrafficType === "object");
assert(typeof TrainingInputMode === "object");
assert(typeof TrainingInstanceType === "object");
assert(typeof TrainingJobEarlyStoppingType === "object");
assert(typeof TrainingJobSortByOptions === "object");
assert(typeof TrainingJobStatus === "object");
assert(typeof TrainingPlanFilterName === "object");
assert(typeof TrainingPlanSortBy === "object");
assert(typeof TrainingPlanSortOrder === "object");
assert(typeof TrainingPlanStatus === "object");
assert(typeof TrainingRepositoryAccessMode === "object");
assert(typeof TransformInstanceType === "object");
assert(typeof TransformJobStatus === "object");
assert(typeof TrialComponentPrimaryStatus === "object");
assert(typeof TtlDurationUnit === "object");
assert(typeof UltraServerHealthStatus === "object");
assert(typeof UserProfileSortKey === "object");
assert(typeof UserProfileStatus === "object");
assert(typeof VariantPropertyType === "object");
assert(typeof VariantStatus === "object");
assert(typeof VendorGuidance === "object");
assert(typeof VolumeAttachmentStatus === "object");
assert(typeof WarmPoolResourceStatus === "object");
assert(typeof WorkforceIpAddressType === "object");
assert(typeof WorkforceStatus === "object");
// errors
assert(SageMakerServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForEndpointDeleted === "function")
assert(typeof waitForEndpointInService === "function")
assert(typeof waitForImageCreated === "function")
assert(typeof waitForImageDeleted === "function")
assert(typeof waitForImageUpdated === "function")
assert(typeof waitForImageVersionCreated === "function")
assert(typeof waitForImageVersionDeleted === "function")
assert(typeof waitForNotebookInstanceDeleted === "function")
assert(typeof waitForNotebookInstanceInService === "function")
assert(typeof waitForNotebookInstanceStopped === "function")
assert(typeof waitForProcessingJobCompletedOrStopped === "function")
assert(typeof waitForTrainingJobCompletedOrStopped === "function")
assert(typeof waitForTransformJobCompletedOrStopped === "function")
assert(typeof waitUntilEndpointDeleted === "function")
assert(typeof waitUntilEndpointInService === "function")
assert(typeof waitUntilImageCreated === "function")
assert(typeof waitUntilImageDeleted === "function")
assert(typeof waitUntilImageUpdated === "function")
assert(typeof waitUntilImageVersionCreated === "function")
assert(typeof waitUntilImageVersionDeleted === "function")
assert(typeof waitUntilNotebookInstanceDeleted === "function")
assert(typeof waitUntilNotebookInstanceInService === "function")
assert(typeof waitUntilNotebookInstanceStopped === "function")
assert(typeof waitUntilProcessingJobCompletedOrStopped === "function")
assert(typeof waitUntilTrainingJobCompletedOrStopped === "function")
assert(typeof waitUntilTransformJobCompletedOrStopped === "function")
// paginators
assert(typeof paginateCreateHubContentPresignedUrls === "function")
assert(typeof paginateListActions === "function")
assert(typeof paginateListAlgorithms === "function")
assert(typeof paginateListAliases === "function")
assert(typeof paginateListAppImageConfigs === "function")
assert(typeof paginateListApps === "function")
assert(typeof paginateListArtifacts === "function")
assert(typeof paginateListAssociations === "function")
assert(typeof paginateListAutoMLJobs === "function")
assert(typeof paginateListCandidatesForAutoMLJob === "function")
assert(typeof paginateListClusterEvents === "function")
assert(typeof paginateListClusterNodes === "function")
assert(typeof paginateListClusterSchedulerConfigs === "function")
assert(typeof paginateListClusters === "function")
assert(typeof paginateListCodeRepositories === "function")
assert(typeof paginateListCompilationJobs === "function")
assert(typeof paginateListComputeQuotas === "function")
assert(typeof paginateListContexts === "function")
assert(typeof paginateListDataQualityJobDefinitions === "function")
assert(typeof paginateListDeviceFleets === "function")
assert(typeof paginateListDevices === "function")
assert(typeof paginateListDomains === "function")
assert(typeof paginateListEdgeDeploymentPlans === "function")
assert(typeof paginateListEdgePackagingJobs === "function")
assert(typeof paginateListEndpointConfigs === "function")
assert(typeof paginateListEndpoints === "function")
assert(typeof paginateListExperiments === "function")
assert(typeof paginateListFeatureGroups === "function")
assert(typeof paginateListFlowDefinitions === "function")
assert(typeof paginateListHumanTaskUis === "function")
assert(typeof paginateListHyperParameterTuningJobs === "function")
assert(typeof paginateListImageVersions === "function")
assert(typeof paginateListImages === "function")
assert(typeof paginateListInferenceComponents === "function")
assert(typeof paginateListInferenceExperiments === "function")
assert(typeof paginateListInferenceRecommendationsJobSteps === "function")
assert(typeof paginateListInferenceRecommendationsJobs === "function")
assert(typeof paginateListLabelingJobs === "function")
assert(typeof paginateListLabelingJobsForWorkteam === "function")
assert(typeof paginateListLineageGroups === "function")
assert(typeof paginateListMlflowTrackingServers === "function")
assert(typeof paginateListModelBiasJobDefinitions === "function")
assert(typeof paginateListModelCardExportJobs === "function")
assert(typeof paginateListModelCardVersions === "function")
assert(typeof paginateListModelCards === "function")
assert(typeof paginateListModelExplainabilityJobDefinitions === "function")
assert(typeof paginateListModelMetadata === "function")
assert(typeof paginateListModelPackageGroups === "function")
assert(typeof paginateListModelPackages === "function")
assert(typeof paginateListModelQualityJobDefinitions === "function")
assert(typeof paginateListModels === "function")
assert(typeof paginateListMonitoringAlertHistory === "function")
assert(typeof paginateListMonitoringAlerts === "function")
assert(typeof paginateListMonitoringExecutions === "function")
assert(typeof paginateListMonitoringSchedules === "function")
assert(typeof paginateListNotebookInstanceLifecycleConfigs === "function")
assert(typeof paginateListNotebookInstances === "function")
assert(typeof paginateListOptimizationJobs === "function")
assert(typeof paginateListPartnerApps === "function")
assert(typeof paginateListPipelineExecutionSteps === "function")
assert(typeof paginateListPipelineExecutions === "function")
assert(typeof paginateListPipelineParametersForExecution === "function")
assert(typeof paginateListPipelineVersions === "function")
assert(typeof paginateListPipelines === "function")
assert(typeof paginateListProcessingJobs === "function")
assert(typeof paginateListProjects === "function")
assert(typeof paginateListResourceCatalogs === "function")
assert(typeof paginateListSpaces === "function")
assert(typeof paginateListStageDevices === "function")
assert(typeof paginateListStudioLifecycleConfigs === "function")
assert(typeof paginateListSubscribedWorkteams === "function")
assert(typeof paginateListTags === "function")
assert(typeof paginateListTrainingJobs === "function")
assert(typeof paginateListTrainingJobsForHyperParameterTuningJob === "function")
assert(typeof paginateListTrainingPlans === "function")
assert(typeof paginateListTransformJobs === "function")
assert(typeof paginateListTrialComponents === "function")
assert(typeof paginateListTrials === "function")
assert(typeof paginateListUltraServersByReservedCapacity === "function")
assert(typeof paginateListUserProfiles === "function")
assert(typeof paginateListWorkforces === "function")
assert(typeof paginateListWorkteams === "function")
assert(typeof paginateQueryLineage === "function")
assert(typeof paginateSearch === "function")
console.log(`SageMaker index test passed.`);

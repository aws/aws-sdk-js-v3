import {
  _InstanceType,
  AcceleratorPartitionConfig$,
  AccountDefaultStatus,
  ActionSource$,
  ActionStatus,
  ActionSummary$,
  ActivationState,
  ActiveClusterOperationName,
  AddAssociation$,
  AddAssociationCommand,
  AddAssociationRequest$,
  AddAssociationResponse$,
  AddClusterNodeSpecification$,
  AdditionalEnis$,
  AdditionalInferenceSpecificationDefinition$,
  AdditionalModelDataSource$,
  AdditionalS3DataSource$,
  AdditionalS3DataSourceDataType,
  AddTags$,
  AddTagsCommand,
  AddTagsInput$,
  AddTagsOutput$,
  AgentVersion$,
  AggregationTransformationValue,
  Alarm$,
  AlarmDetails$,
  AlgorithmSortBy,
  AlgorithmSpecification$,
  AlgorithmStatus,
  AlgorithmStatusDetails$,
  AlgorithmStatusItem$,
  AlgorithmSummary$,
  AlgorithmValidationProfile$,
  AlgorithmValidationSpecification$,
  AmazonQSettings$,
  AnnotationConsolidationConfig$,
  AppDetails$,
  AppImageConfigDetails$,
  AppImageConfigSortKey,
  AppInstanceType,
  AppLifecycleManagement$,
  AppNetworkAccessType,
  AppSecurityGroupManagement,
  AppSortKey,
  AppSpecification$,
  AppStatus,
  AppType,
  ArtifactSource$,
  ArtifactSourceIdType,
  ArtifactSourceType$,
  ArtifactSummary$,
  AssemblyType,
  AssociateTrialComponent$,
  AssociateTrialComponentCommand,
  AssociateTrialComponentRequest$,
  AssociateTrialComponentResponse$,
  AssociationEdgeType,
  AssociationInfo$,
  AssociationSummary$,
  AsyncInferenceClientConfig$,
  AsyncInferenceConfig$,
  AsyncInferenceNotificationConfig$,
  AsyncInferenceOutputConfig$,
  AsyncNotificationTopicTypes,
  AthenaDatasetDefinition$,
  AthenaResultCompressionType,
  AthenaResultFormat,
  AttachClusterNodeVolume$,
  AttachClusterNodeVolumeCommand,
  AttachClusterNodeVolumeRequest$,
  AttachClusterNodeVolumeResponse$,
  AuthMode,
  AuthorizedUrl$,
  AutoMLAlgorithm,
  AutoMLAlgorithmConfig$,
  AutoMLCandidate$,
  AutoMLCandidateGenerationConfig$,
  AutoMLCandidateStep$,
  AutoMLChannel$,
  AutoMLChannelType,
  AutoMLComputeConfig$,
  AutoMLContainerDefinition$,
  AutoMLDataSource$,
  AutoMLDataSplitConfig$,
  AutoMLJobArtifacts$,
  AutoMLJobChannel$,
  AutoMLJobCompletionCriteria$,
  AutoMLJobConfig$,
  AutoMLJobObjective$,
  AutoMLJobObjectiveType,
  AutoMLJobSecondaryStatus,
  AutoMLJobStatus,
  AutoMLJobStepMetadata$,
  AutoMLJobSummary$,
  AutoMLMetricEnum,
  AutoMLMetricExtendedEnum,
  AutoMLMode,
  AutoMLOutputDataConfig$,
  AutoMLPartialFailureReason$,
  AutoMLProblemTypeConfig$,
  AutoMLProblemTypeConfigName,
  AutoMLProblemTypeResolvedAttributes$,
  AutoMLProcessingUnit,
  AutoMLResolvedAttributes$,
  AutoMLS3DataSource$,
  AutoMLS3DataType,
  AutoMLSecurityConfig$,
  AutoMLSortBy,
  AutoMLSortOrder,
  AutoMountHomeEFS,
  AutoParameter$,
  AutoRollbackConfig$,
  Autotune$,
  AutotuneMode,
  AvailableUpgrade$,
  AwsManagedHumanLoopRequestSource,
  BaseModel$,
  BatchAddClusterNodes$,
  BatchAddClusterNodesCommand,
  BatchAddClusterNodesError$,
  BatchAddClusterNodesErrorCode,
  BatchAddClusterNodesRequest$,
  BatchAddClusterNodesResponse$,
  BatchDataCaptureConfig$,
  BatchDeleteClusterNodeLogicalIdsError$,
  BatchDeleteClusterNodes$,
  BatchDeleteClusterNodesCommand,
  BatchDeleteClusterNodesError$,
  BatchDeleteClusterNodesErrorCode,
  BatchDeleteClusterNodesRequest$,
  BatchDeleteClusterNodesResponse$,
  BatchDescribeModelPackage$,
  BatchDescribeModelPackageCommand,
  BatchDescribeModelPackageError$,
  BatchDescribeModelPackageInput$,
  BatchDescribeModelPackageOutput$,
  BatchDescribeModelPackageSummary$,
  BatchRebootClusterNodeLogicalIdsError$,
  BatchRebootClusterNodes$,
  BatchRebootClusterNodesCommand,
  BatchRebootClusterNodesError$,
  BatchRebootClusterNodesErrorCode,
  BatchRebootClusterNodesRequest$,
  BatchRebootClusterNodesResponse$,
  BatchReplaceClusterNodeLogicalIdsError$,
  BatchReplaceClusterNodes$,
  BatchReplaceClusterNodesCommand,
  BatchReplaceClusterNodesError$,
  BatchReplaceClusterNodesErrorCode,
  BatchReplaceClusterNodesRequest$,
  BatchReplaceClusterNodesResponse$,
  BatchStrategy,
  BatchTransformInput$,
  BedrockCustomModelDeploymentMetadata$,
  BedrockCustomModelMetadata$,
  BedrockModelImportMetadata$,
  BedrockProvisionedModelThroughputMetadata$,
  BestObjectiveNotImproving$,
  Bias$,
  BlueGreenUpdatePolicy$,
  BooleanOperator,
  CacheHitResult$,
  CallbackStepMetadata$,
  CandidateArtifactLocations$,
  CandidateGenerationConfig$,
  CandidateProperties$,
  CandidateSortBy,
  CandidateStatus,
  CandidateStepType,
  CanvasAppSettings$,
  CapacityReservation$,
  CapacityReservationPreference,
  CapacityReservationType,
  CapacitySize$,
  CapacitySizeConfig$,
  CapacitySizeType,
  CaptureContentTypeHeader$,
  CaptureMode,
  CaptureOption$,
  CaptureStatus,
  CategoricalParameter$,
  CategoricalParameterRange$,
  CategoricalParameterRangeSpecification$,
  CfnCreateTemplateProvider$,
  CfnStackCreateParameter$,
  CfnStackDetail$,
  CfnStackParameter$,
  CfnStackUpdateParameter$,
  CfnTemplateProviderDetail$,
  CfnUpdateTemplateProvider$,
  Channel$,
  ChannelSpecification$,
  CheckpointConfig$,
  ClarifyCheckStepMetadata$,
  ClarifyExplainerConfig$,
  ClarifyFeatureType,
  ClarifyInferenceConfig$,
  ClarifyShapBaselineConfig$,
  ClarifyShapConfig$,
  ClarifyTextConfig$,
  ClarifyTextGranularity,
  ClarifyTextLanguage,
  ClusterAutoScalerType,
  ClusterAutoScalingConfig$,
  ClusterAutoScalingConfigOutput$,
  ClusterAutoScalingMode,
  ClusterAutoScalingStatus,
  ClusterCapacityRequirements$,
  ClusterCapacityType,
  ClusterConfigMode,
  ClusterEbsVolumeConfig$,
  ClusterEventDetail$,
  ClusterEventResourceType,
  ClusterEventSummary$,
  ClusterInstanceGroupDetails$,
  ClusterInstanceGroupSpecification$,
  ClusterInstancePlacement$,
  ClusterInstanceStatus,
  ClusterInstanceStatusDetails$,
  ClusterInstanceStorageConfig$,
  ClusterInstanceType,
  ClusterKubernetesConfig$,
  ClusterKubernetesConfigDetails$,
  ClusterKubernetesConfigNodeDetails$,
  ClusterKubernetesTaint$,
  ClusterKubernetesTaintEffect,
  ClusterLifeCycleConfig$,
  ClusterMetadata$,
  ClusterNodeDetails$,
  ClusterNodeProvisioningMode,
  ClusterNodeRecovery,
  ClusterNodeSummary$,
  ClusterOnDemandOptions$,
  ClusterOrchestrator$,
  ClusterOrchestratorEksConfig$,
  ClusterRestrictedInstanceGroupDetails$,
  ClusterRestrictedInstanceGroupSpecification$,
  ClusterSchedulerConfigSummary$,
  ClusterSortBy,
  ClusterSpotOptions$,
  ClusterStatus,
  ClusterSummary$,
  ClusterTieredStorageConfig$,
  CodeEditorAppImageConfig$,
  CodeEditorAppSettings$,
  CodeRepository$,
  CodeRepositorySortBy,
  CodeRepositorySortOrder,
  CodeRepositorySummary$,
  CognitoConfig$,
  CognitoMemberDefinition$,
  CollectionConfig$,
  CollectionConfiguration$,
  CollectionType,
  CompilationJobStatus,
  CompilationJobSummary$,
  CompleteOnConvergence,
  CompressionType,
  ComputeQuotaConfig$,
  ComputeQuotaResourceConfig$,
  ComputeQuotaSummary$,
  ComputeQuotaTarget$,
  ConditionOutcome,
  ConditionStepMetadata$,
  ConflictException,
  ConflictException$,
  ContainerConfig$,
  ContainerDefinition$,
  ContainerMode,
  ContentClassifier,
  ContextSource$,
  ContextSummary$,
  ContinuousParameterRange$,
  ContinuousParameterRangeSpecification$,
  ConvergenceDetected$,
  CreateAction$,
  CreateActionCommand,
  CreateActionRequest$,
  CreateActionResponse$,
  CreateAlgorithm$,
  CreateAlgorithmCommand,
  CreateAlgorithmInput$,
  CreateAlgorithmOutput$,
  CreateApp$,
  CreateAppCommand,
  CreateAppImageConfig$,
  CreateAppImageConfigCommand,
  CreateAppImageConfigRequest$,
  CreateAppImageConfigResponse$,
  CreateAppRequest$,
  CreateAppResponse$,
  CreateArtifact$,
  CreateArtifactCommand,
  CreateArtifactRequest$,
  CreateArtifactResponse$,
  CreateAutoMLJob$,
  CreateAutoMLJobCommand,
  CreateAutoMLJobRequest$,
  CreateAutoMLJobResponse$,
  CreateAutoMLJobV2$,
  CreateAutoMLJobV2Command,
  CreateAutoMLJobV2Request$,
  CreateAutoMLJobV2Response$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterRequest$,
  CreateClusterResponse$,
  CreateClusterSchedulerConfig$,
  CreateClusterSchedulerConfigCommand,
  CreateClusterSchedulerConfigRequest$,
  CreateClusterSchedulerConfigResponse$,
  CreateCodeRepository$,
  CreateCodeRepositoryCommand,
  CreateCodeRepositoryInput$,
  CreateCodeRepositoryOutput$,
  CreateCompilationJob$,
  CreateCompilationJobCommand,
  CreateCompilationJobRequest$,
  CreateCompilationJobResponse$,
  CreateComputeQuota$,
  CreateComputeQuotaCommand,
  CreateComputeQuotaRequest$,
  CreateComputeQuotaResponse$,
  CreateContext$,
  CreateContextCommand,
  CreateContextRequest$,
  CreateContextResponse$,
  CreateDataQualityJobDefinition$,
  CreateDataQualityJobDefinitionCommand,
  CreateDataQualityJobDefinitionRequest$,
  CreateDataQualityJobDefinitionResponse$,
  CreateDeviceFleet$,
  CreateDeviceFleetCommand,
  CreateDeviceFleetRequest$,
  CreateDomain$,
  CreateDomainCommand,
  CreateDomainRequest$,
  CreateDomainResponse$,
  CreateEdgeDeploymentPlan$,
  CreateEdgeDeploymentPlanCommand,
  CreateEdgeDeploymentPlanRequest$,
  CreateEdgeDeploymentPlanResponse$,
  CreateEdgeDeploymentStage$,
  CreateEdgeDeploymentStageCommand,
  CreateEdgeDeploymentStageRequest$,
  CreateEdgePackagingJob$,
  CreateEdgePackagingJobCommand,
  CreateEdgePackagingJobRequest$,
  CreateEndpoint$,
  CreateEndpointCommand,
  CreateEndpointConfig$,
  CreateEndpointConfigCommand,
  CreateEndpointConfigInput$,
  CreateEndpointConfigOutput$,
  CreateEndpointInput$,
  CreateEndpointOutput$,
  CreateExperiment$,
  CreateExperimentCommand,
  CreateExperimentRequest$,
  CreateExperimentResponse$,
  CreateFeatureGroup$,
  CreateFeatureGroupCommand,
  CreateFeatureGroupRequest$,
  CreateFeatureGroupResponse$,
  CreateFlowDefinition$,
  CreateFlowDefinitionCommand,
  CreateFlowDefinitionRequest$,
  CreateFlowDefinitionResponse$,
  CreateHub$,
  CreateHubCommand,
  CreateHubContentPresignedUrls$,
  CreateHubContentPresignedUrlsCommand,
  CreateHubContentPresignedUrlsRequest$,
  CreateHubContentPresignedUrlsResponse$,
  CreateHubContentReference$,
  CreateHubContentReferenceCommand,
  CreateHubContentReferenceRequest$,
  CreateHubContentReferenceResponse$,
  CreateHubRequest$,
  CreateHubResponse$,
  CreateHumanTaskUi$,
  CreateHumanTaskUiCommand,
  CreateHumanTaskUiRequest$,
  CreateHumanTaskUiResponse$,
  CreateHyperParameterTuningJob$,
  CreateHyperParameterTuningJobCommand,
  CreateHyperParameterTuningJobRequest$,
  CreateHyperParameterTuningJobResponse$,
  CreateImage$,
  CreateImageCommand,
  CreateImageRequest$,
  CreateImageResponse$,
  CreateImageVersion$,
  CreateImageVersionCommand,
  CreateImageVersionRequest$,
  CreateImageVersionResponse$,
  CreateInferenceComponent$,
  CreateInferenceComponentCommand,
  CreateInferenceComponentInput$,
  CreateInferenceComponentOutput$,
  CreateInferenceExperiment$,
  CreateInferenceExperimentCommand,
  CreateInferenceExperimentRequest$,
  CreateInferenceExperimentResponse$,
  CreateInferenceRecommendationsJob$,
  CreateInferenceRecommendationsJobCommand,
  CreateInferenceRecommendationsJobRequest$,
  CreateInferenceRecommendationsJobResponse$,
  CreateLabelingJob$,
  CreateLabelingJobCommand,
  CreateLabelingJobRequest$,
  CreateLabelingJobResponse$,
  CreateMlflowApp$,
  CreateMlflowAppCommand,
  CreateMlflowAppRequest$,
  CreateMlflowAppResponse$,
  CreateMlflowTrackingServer$,
  CreateMlflowTrackingServerCommand,
  CreateMlflowTrackingServerRequest$,
  CreateMlflowTrackingServerResponse$,
  CreateModel$,
  CreateModelBiasJobDefinition$,
  CreateModelBiasJobDefinitionCommand,
  CreateModelBiasJobDefinitionRequest$,
  CreateModelBiasJobDefinitionResponse$,
  CreateModelCard$,
  CreateModelCardCommand,
  CreateModelCardExportJob$,
  CreateModelCardExportJobCommand,
  CreateModelCardExportJobRequest$,
  CreateModelCardExportJobResponse$,
  CreateModelCardRequest$,
  CreateModelCardResponse$,
  CreateModelCommand,
  CreateModelExplainabilityJobDefinition$,
  CreateModelExplainabilityJobDefinitionCommand,
  CreateModelExplainabilityJobDefinitionRequest$,
  CreateModelExplainabilityJobDefinitionResponse$,
  CreateModelInput$,
  CreateModelOutput$,
  CreateModelPackage$,
  CreateModelPackageCommand,
  CreateModelPackageGroup$,
  CreateModelPackageGroupCommand,
  CreateModelPackageGroupInput$,
  CreateModelPackageGroupOutput$,
  CreateModelPackageInput$,
  CreateModelPackageOutput$,
  CreateModelQualityJobDefinition$,
  CreateModelQualityJobDefinitionCommand,
  CreateModelQualityJobDefinitionRequest$,
  CreateModelQualityJobDefinitionResponse$,
  CreateMonitoringSchedule$,
  CreateMonitoringScheduleCommand,
  CreateMonitoringScheduleRequest$,
  CreateMonitoringScheduleResponse$,
  CreateNotebookInstance$,
  CreateNotebookInstanceCommand,
  CreateNotebookInstanceInput$,
  CreateNotebookInstanceLifecycleConfig$,
  CreateNotebookInstanceLifecycleConfigCommand,
  CreateNotebookInstanceLifecycleConfigInput$,
  CreateNotebookInstanceLifecycleConfigOutput$,
  CreateNotebookInstanceOutput$,
  CreateOptimizationJob$,
  CreateOptimizationJobCommand,
  CreateOptimizationJobRequest$,
  CreateOptimizationJobResponse$,
  CreatePartnerApp$,
  CreatePartnerAppCommand,
  CreatePartnerAppPresignedUrl$,
  CreatePartnerAppPresignedUrlCommand,
  CreatePartnerAppPresignedUrlRequest$,
  CreatePartnerAppPresignedUrlResponse$,
  CreatePartnerAppRequest$,
  CreatePartnerAppResponse$,
  CreatePipeline$,
  CreatePipelineCommand,
  CreatePipelineRequest$,
  CreatePipelineResponse$,
  CreatePresignedDomainUrl$,
  CreatePresignedDomainUrlCommand,
  CreatePresignedDomainUrlRequest$,
  CreatePresignedDomainUrlResponse$,
  CreatePresignedMlflowAppUrl$,
  CreatePresignedMlflowAppUrlCommand,
  CreatePresignedMlflowAppUrlRequest$,
  CreatePresignedMlflowAppUrlResponse$,
  CreatePresignedMlflowTrackingServerUrl$,
  CreatePresignedMlflowTrackingServerUrlCommand,
  CreatePresignedMlflowTrackingServerUrlRequest$,
  CreatePresignedMlflowTrackingServerUrlResponse$,
  CreatePresignedNotebookInstanceUrl$,
  CreatePresignedNotebookInstanceUrlCommand,
  CreatePresignedNotebookInstanceUrlInput$,
  CreatePresignedNotebookInstanceUrlOutput$,
  CreateProcessingJob$,
  CreateProcessingJobCommand,
  CreateProcessingJobRequest$,
  CreateProcessingJobResponse$,
  CreateProject$,
  CreateProjectCommand,
  CreateProjectInput$,
  CreateProjectOutput$,
  CreateSpace$,
  CreateSpaceCommand,
  CreateSpaceRequest$,
  CreateSpaceResponse$,
  CreateStudioLifecycleConfig$,
  CreateStudioLifecycleConfigCommand,
  CreateStudioLifecycleConfigRequest$,
  CreateStudioLifecycleConfigResponse$,
  CreateTemplateProvider$,
  CreateTrainingJob$,
  CreateTrainingJobCommand,
  CreateTrainingJobRequest$,
  CreateTrainingJobResponse$,
  CreateTrainingPlan$,
  CreateTrainingPlanCommand,
  CreateTrainingPlanRequest$,
  CreateTrainingPlanResponse$,
  CreateTransformJob$,
  CreateTransformJobCommand,
  CreateTransformJobRequest$,
  CreateTransformJobResponse$,
  CreateTrial$,
  CreateTrialCommand,
  CreateTrialComponent$,
  CreateTrialComponentCommand,
  CreateTrialComponentRequest$,
  CreateTrialComponentResponse$,
  CreateTrialRequest$,
  CreateTrialResponse$,
  CreateUserProfile$,
  CreateUserProfileCommand,
  CreateUserProfileRequest$,
  CreateUserProfileResponse$,
  CreateWorkforce$,
  CreateWorkforceCommand,
  CreateWorkforceRequest$,
  CreateWorkforceResponse$,
  CreateWorkteam$,
  CreateWorkteamCommand,
  CreateWorkteamRequest$,
  CreateWorkteamResponse$,
  CrossAccountFilterOption,
  CustomFileSystem$,
  CustomFileSystemConfig$,
  CustomImage$,
  CustomizationTechnique,
  CustomizedMetricSpecification$,
  CustomPosixUserConfig$,
  DataCaptureConfig$,
  DataCaptureConfigSummary$,
  DataCatalogConfig$,
  DataDistributionType,
  DataProcessing$,
  DataQualityAppSpecification$,
  DataQualityBaselineConfig$,
  DataQualityJobInput$,
  DatasetDefinition$,
  DatasetSource$,
  DataSource$,
  DataSourceName,
  DebugHookConfig$,
  DebugRuleConfiguration$,
  DebugRuleEvaluationStatus$,
  DeepHealthCheckType,
  DefaultEbsStorageSettings$,
  DefaultSpaceSettings$,
  DefaultSpaceStorageSettings$,
  DeleteAction$,
  DeleteActionCommand,
  DeleteActionRequest$,
  DeleteActionResponse$,
  DeleteAlgorithm$,
  DeleteAlgorithmCommand,
  DeleteAlgorithmInput$,
  DeleteApp$,
  DeleteAppCommand,
  DeleteAppImageConfig$,
  DeleteAppImageConfigCommand,
  DeleteAppImageConfigRequest$,
  DeleteAppRequest$,
  DeleteArtifact$,
  DeleteArtifactCommand,
  DeleteArtifactRequest$,
  DeleteArtifactResponse$,
  DeleteAssociation$,
  DeleteAssociationCommand,
  DeleteAssociationRequest$,
  DeleteAssociationResponse$,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterRequest$,
  DeleteClusterResponse$,
  DeleteClusterSchedulerConfig$,
  DeleteClusterSchedulerConfigCommand,
  DeleteClusterSchedulerConfigRequest$,
  DeleteCodeRepository$,
  DeleteCodeRepositoryCommand,
  DeleteCodeRepositoryInput$,
  DeleteCompilationJob$,
  DeleteCompilationJobCommand,
  DeleteCompilationJobRequest$,
  DeleteComputeQuota$,
  DeleteComputeQuotaCommand,
  DeleteComputeQuotaRequest$,
  DeleteContext$,
  DeleteContextCommand,
  DeleteContextRequest$,
  DeleteContextResponse$,
  DeleteDataQualityJobDefinition$,
  DeleteDataQualityJobDefinitionCommand,
  DeleteDataQualityJobDefinitionRequest$,
  DeleteDeviceFleet$,
  DeleteDeviceFleetCommand,
  DeleteDeviceFleetRequest$,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainRequest$,
  DeleteEdgeDeploymentPlan$,
  DeleteEdgeDeploymentPlanCommand,
  DeleteEdgeDeploymentPlanRequest$,
  DeleteEdgeDeploymentStage$,
  DeleteEdgeDeploymentStageCommand,
  DeleteEdgeDeploymentStageRequest$,
  DeleteEndpoint$,
  DeleteEndpointCommand,
  DeleteEndpointConfig$,
  DeleteEndpointConfigCommand,
  DeleteEndpointConfigInput$,
  DeleteEndpointInput$,
  DeleteExperiment$,
  DeleteExperimentCommand,
  DeleteExperimentRequest$,
  DeleteExperimentResponse$,
  DeleteFeatureGroup$,
  DeleteFeatureGroupCommand,
  DeleteFeatureGroupRequest$,
  DeleteFlowDefinition$,
  DeleteFlowDefinitionCommand,
  DeleteFlowDefinitionRequest$,
  DeleteFlowDefinitionResponse$,
  DeleteHub$,
  DeleteHubCommand,
  DeleteHubContent$,
  DeleteHubContentCommand,
  DeleteHubContentReference$,
  DeleteHubContentReferenceCommand,
  DeleteHubContentReferenceRequest$,
  DeleteHubContentRequest$,
  DeleteHubRequest$,
  DeleteHumanTaskUi$,
  DeleteHumanTaskUiCommand,
  DeleteHumanTaskUiRequest$,
  DeleteHumanTaskUiResponse$,
  DeleteHyperParameterTuningJob$,
  DeleteHyperParameterTuningJobCommand,
  DeleteHyperParameterTuningJobRequest$,
  DeleteImage$,
  DeleteImageCommand,
  DeleteImageRequest$,
  DeleteImageResponse$,
  DeleteImageVersion$,
  DeleteImageVersionCommand,
  DeleteImageVersionRequest$,
  DeleteImageVersionResponse$,
  DeleteInferenceComponent$,
  DeleteInferenceComponentCommand,
  DeleteInferenceComponentInput$,
  DeleteInferenceExperiment$,
  DeleteInferenceExperimentCommand,
  DeleteInferenceExperimentRequest$,
  DeleteInferenceExperimentResponse$,
  DeleteMlflowApp$,
  DeleteMlflowAppCommand,
  DeleteMlflowAppRequest$,
  DeleteMlflowAppResponse$,
  DeleteMlflowTrackingServer$,
  DeleteMlflowTrackingServerCommand,
  DeleteMlflowTrackingServerRequest$,
  DeleteMlflowTrackingServerResponse$,
  DeleteModel$,
  DeleteModelBiasJobDefinition$,
  DeleteModelBiasJobDefinitionCommand,
  DeleteModelBiasJobDefinitionRequest$,
  DeleteModelCard$,
  DeleteModelCardCommand,
  DeleteModelCardRequest$,
  DeleteModelCommand,
  DeleteModelExplainabilityJobDefinition$,
  DeleteModelExplainabilityJobDefinitionCommand,
  DeleteModelExplainabilityJobDefinitionRequest$,
  DeleteModelInput$,
  DeleteModelPackage$,
  DeleteModelPackageCommand,
  DeleteModelPackageGroup$,
  DeleteModelPackageGroupCommand,
  DeleteModelPackageGroupInput$,
  DeleteModelPackageGroupPolicy$,
  DeleteModelPackageGroupPolicyCommand,
  DeleteModelPackageGroupPolicyInput$,
  DeleteModelPackageInput$,
  DeleteModelQualityJobDefinition$,
  DeleteModelQualityJobDefinitionCommand,
  DeleteModelQualityJobDefinitionRequest$,
  DeleteMonitoringSchedule$,
  DeleteMonitoringScheduleCommand,
  DeleteMonitoringScheduleRequest$,
  DeleteNotebookInstance$,
  DeleteNotebookInstanceCommand,
  DeleteNotebookInstanceInput$,
  DeleteNotebookInstanceLifecycleConfig$,
  DeleteNotebookInstanceLifecycleConfigCommand,
  DeleteNotebookInstanceLifecycleConfigInput$,
  DeleteOptimizationJob$,
  DeleteOptimizationJobCommand,
  DeleteOptimizationJobRequest$,
  DeletePartnerApp$,
  DeletePartnerAppCommand,
  DeletePartnerAppRequest$,
  DeletePartnerAppResponse$,
  DeletePipeline$,
  DeletePipelineCommand,
  DeletePipelineRequest$,
  DeletePipelineResponse$,
  DeleteProcessingJob$,
  DeleteProcessingJobCommand,
  DeleteProcessingJobRequest$,
  DeleteProject$,
  DeleteProjectCommand,
  DeleteProjectInput$,
  DeleteSpace$,
  DeleteSpaceCommand,
  DeleteSpaceRequest$,
  DeleteStudioLifecycleConfig$,
  DeleteStudioLifecycleConfigCommand,
  DeleteStudioLifecycleConfigRequest$,
  DeleteTags$,
  DeleteTagsCommand,
  DeleteTagsInput$,
  DeleteTagsOutput$,
  DeleteTrainingJob$,
  DeleteTrainingJobCommand,
  DeleteTrainingJobRequest$,
  DeleteTrial$,
  DeleteTrialCommand,
  DeleteTrialComponent$,
  DeleteTrialComponentCommand,
  DeleteTrialComponentRequest$,
  DeleteTrialComponentResponse$,
  DeleteTrialRequest$,
  DeleteTrialResponse$,
  DeleteUserProfile$,
  DeleteUserProfileCommand,
  DeleteUserProfileRequest$,
  DeleteWorkforce$,
  DeleteWorkforceCommand,
  DeleteWorkforceRequest$,
  DeleteWorkforceResponse$,
  DeleteWorkteam$,
  DeleteWorkteamCommand,
  DeleteWorkteamRequest$,
  DeleteWorkteamResponse$,
  DeployedImage$,
  DeploymentConfig$,
  DeploymentConfiguration$,
  DeploymentRecommendation$,
  DeploymentStage$,
  DeploymentStageStatusSummary$,
  DeregisterDevices$,
  DeregisterDevicesCommand,
  DeregisterDevicesRequest$,
  DerivedInformation$,
  DescribeAction$,
  DescribeActionCommand,
  DescribeActionRequest$,
  DescribeActionResponse$,
  DescribeAlgorithm$,
  DescribeAlgorithmCommand,
  DescribeAlgorithmInput$,
  DescribeAlgorithmOutput$,
  DescribeApp$,
  DescribeAppCommand,
  DescribeAppImageConfig$,
  DescribeAppImageConfigCommand,
  DescribeAppImageConfigRequest$,
  DescribeAppImageConfigResponse$,
  DescribeAppRequest$,
  DescribeAppResponse$,
  DescribeArtifact$,
  DescribeArtifactCommand,
  DescribeArtifactRequest$,
  DescribeArtifactResponse$,
  DescribeAutoMLJob$,
  DescribeAutoMLJobCommand,
  DescribeAutoMLJobRequest$,
  DescribeAutoMLJobResponse$,
  DescribeAutoMLJobV2$,
  DescribeAutoMLJobV2Command,
  DescribeAutoMLJobV2Request$,
  DescribeAutoMLJobV2Response$,
  DescribeCluster$,
  DescribeClusterCommand,
  DescribeClusterEvent$,
  DescribeClusterEventCommand,
  DescribeClusterEventRequest$,
  DescribeClusterEventResponse$,
  DescribeClusterNode$,
  DescribeClusterNodeCommand,
  DescribeClusterNodeRequest$,
  DescribeClusterNodeResponse$,
  DescribeClusterRequest$,
  DescribeClusterResponse$,
  DescribeClusterSchedulerConfig$,
  DescribeClusterSchedulerConfigCommand,
  DescribeClusterSchedulerConfigRequest$,
  DescribeClusterSchedulerConfigResponse$,
  DescribeCodeRepository$,
  DescribeCodeRepositoryCommand,
  DescribeCodeRepositoryInput$,
  DescribeCodeRepositoryOutput$,
  DescribeCompilationJob$,
  DescribeCompilationJobCommand,
  DescribeCompilationJobRequest$,
  DescribeCompilationJobResponse$,
  DescribeComputeQuota$,
  DescribeComputeQuotaCommand,
  DescribeComputeQuotaRequest$,
  DescribeComputeQuotaResponse$,
  DescribeContext$,
  DescribeContextCommand,
  DescribeContextRequest$,
  DescribeContextResponse$,
  DescribeDataQualityJobDefinition$,
  DescribeDataQualityJobDefinitionCommand,
  DescribeDataQualityJobDefinitionRequest$,
  DescribeDataQualityJobDefinitionResponse$,
  DescribeDevice$,
  DescribeDeviceCommand,
  DescribeDeviceFleet$,
  DescribeDeviceFleetCommand,
  DescribeDeviceFleetRequest$,
  DescribeDeviceFleetResponse$,
  DescribeDeviceRequest$,
  DescribeDeviceResponse$,
  DescribeDomain$,
  DescribeDomainCommand,
  DescribeDomainRequest$,
  DescribeDomainResponse$,
  DescribeEdgeDeploymentPlan$,
  DescribeEdgeDeploymentPlanCommand,
  DescribeEdgeDeploymentPlanRequest$,
  DescribeEdgeDeploymentPlanResponse$,
  DescribeEdgePackagingJob$,
  DescribeEdgePackagingJobCommand,
  DescribeEdgePackagingJobRequest$,
  DescribeEdgePackagingJobResponse$,
  DescribeEndpoint$,
  DescribeEndpointCommand,
  DescribeEndpointConfig$,
  DescribeEndpointConfigCommand,
  DescribeEndpointConfigInput$,
  DescribeEndpointConfigOutput$,
  DescribeEndpointInput$,
  DescribeEndpointOutput$,
  DescribeExperiment$,
  DescribeExperimentCommand,
  DescribeExperimentRequest$,
  DescribeExperimentResponse$,
  DescribeFeatureGroup$,
  DescribeFeatureGroupCommand,
  DescribeFeatureGroupRequest$,
  DescribeFeatureGroupResponse$,
  DescribeFeatureMetadata$,
  DescribeFeatureMetadataCommand,
  DescribeFeatureMetadataRequest$,
  DescribeFeatureMetadataResponse$,
  DescribeFlowDefinition$,
  DescribeFlowDefinitionCommand,
  DescribeFlowDefinitionRequest$,
  DescribeFlowDefinitionResponse$,
  DescribeHub$,
  DescribeHubCommand,
  DescribeHubContent$,
  DescribeHubContentCommand,
  DescribeHubContentRequest$,
  DescribeHubContentResponse$,
  DescribeHubRequest$,
  DescribeHubResponse$,
  DescribeHumanTaskUi$,
  DescribeHumanTaskUiCommand,
  DescribeHumanTaskUiRequest$,
  DescribeHumanTaskUiResponse$,
  DescribeHyperParameterTuningJob$,
  DescribeHyperParameterTuningJobCommand,
  DescribeHyperParameterTuningJobRequest$,
  DescribeHyperParameterTuningJobResponse$,
  DescribeImage$,
  DescribeImageCommand,
  DescribeImageRequest$,
  DescribeImageResponse$,
  DescribeImageVersion$,
  DescribeImageVersionCommand,
  DescribeImageVersionRequest$,
  DescribeImageVersionResponse$,
  DescribeInferenceComponent$,
  DescribeInferenceComponentCommand,
  DescribeInferenceComponentInput$,
  DescribeInferenceComponentOutput$,
  DescribeInferenceExperiment$,
  DescribeInferenceExperimentCommand,
  DescribeInferenceExperimentRequest$,
  DescribeInferenceExperimentResponse$,
  DescribeInferenceRecommendationsJob$,
  DescribeInferenceRecommendationsJobCommand,
  DescribeInferenceRecommendationsJobRequest$,
  DescribeInferenceRecommendationsJobResponse$,
  DescribeLabelingJob$,
  DescribeLabelingJobCommand,
  DescribeLabelingJobRequest$,
  DescribeLabelingJobResponse$,
  DescribeLineageGroup$,
  DescribeLineageGroupCommand,
  DescribeLineageGroupRequest$,
  DescribeLineageGroupResponse$,
  DescribeMlflowApp$,
  DescribeMlflowAppCommand,
  DescribeMlflowAppRequest$,
  DescribeMlflowAppResponse$,
  DescribeMlflowTrackingServer$,
  DescribeMlflowTrackingServerCommand,
  DescribeMlflowTrackingServerRequest$,
  DescribeMlflowTrackingServerResponse$,
  DescribeModel$,
  DescribeModelBiasJobDefinition$,
  DescribeModelBiasJobDefinitionCommand,
  DescribeModelBiasJobDefinitionRequest$,
  DescribeModelBiasJobDefinitionResponse$,
  DescribeModelCard$,
  DescribeModelCardCommand,
  DescribeModelCardExportJob$,
  DescribeModelCardExportJobCommand,
  DescribeModelCardExportJobRequest$,
  DescribeModelCardExportJobResponse$,
  DescribeModelCardRequest$,
  DescribeModelCardResponse$,
  DescribeModelCommand,
  DescribeModelExplainabilityJobDefinition$,
  DescribeModelExplainabilityJobDefinitionCommand,
  DescribeModelExplainabilityJobDefinitionRequest$,
  DescribeModelExplainabilityJobDefinitionResponse$,
  DescribeModelInput$,
  DescribeModelOutput$,
  DescribeModelPackage$,
  DescribeModelPackageCommand,
  DescribeModelPackageGroup$,
  DescribeModelPackageGroupCommand,
  DescribeModelPackageGroupInput$,
  DescribeModelPackageGroupOutput$,
  DescribeModelPackageInput$,
  DescribeModelPackageOutput$,
  DescribeModelQualityJobDefinition$,
  DescribeModelQualityJobDefinitionCommand,
  DescribeModelQualityJobDefinitionRequest$,
  DescribeModelQualityJobDefinitionResponse$,
  DescribeMonitoringSchedule$,
  DescribeMonitoringScheduleCommand,
  DescribeMonitoringScheduleRequest$,
  DescribeMonitoringScheduleResponse$,
  DescribeNotebookInstance$,
  DescribeNotebookInstanceCommand,
  DescribeNotebookInstanceInput$,
  DescribeNotebookInstanceLifecycleConfig$,
  DescribeNotebookInstanceLifecycleConfigCommand,
  DescribeNotebookInstanceLifecycleConfigInput$,
  DescribeNotebookInstanceLifecycleConfigOutput$,
  DescribeNotebookInstanceOutput$,
  DescribeOptimizationJob$,
  DescribeOptimizationJobCommand,
  DescribeOptimizationJobRequest$,
  DescribeOptimizationJobResponse$,
  DescribePartnerApp$,
  DescribePartnerAppCommand,
  DescribePartnerAppRequest$,
  DescribePartnerAppResponse$,
  DescribePipeline$,
  DescribePipelineCommand,
  DescribePipelineDefinitionForExecution$,
  DescribePipelineDefinitionForExecutionCommand,
  DescribePipelineDefinitionForExecutionRequest$,
  DescribePipelineDefinitionForExecutionResponse$,
  DescribePipelineExecution$,
  DescribePipelineExecutionCommand,
  DescribePipelineExecutionRequest$,
  DescribePipelineExecutionResponse$,
  DescribePipelineRequest$,
  DescribePipelineResponse$,
  DescribeProcessingJob$,
  DescribeProcessingJobCommand,
  DescribeProcessingJobRequest$,
  DescribeProcessingJobResponse$,
  DescribeProject$,
  DescribeProjectCommand,
  DescribeProjectInput$,
  DescribeProjectOutput$,
  DescribeReservedCapacity$,
  DescribeReservedCapacityCommand,
  DescribeReservedCapacityRequest$,
  DescribeReservedCapacityResponse$,
  DescribeSpace$,
  DescribeSpaceCommand,
  DescribeSpaceRequest$,
  DescribeSpaceResponse$,
  DescribeStudioLifecycleConfig$,
  DescribeStudioLifecycleConfigCommand,
  DescribeStudioLifecycleConfigRequest$,
  DescribeStudioLifecycleConfigResponse$,
  DescribeSubscribedWorkteam$,
  DescribeSubscribedWorkteamCommand,
  DescribeSubscribedWorkteamRequest$,
  DescribeSubscribedWorkteamResponse$,
  DescribeTrainingJob$,
  DescribeTrainingJobCommand,
  DescribeTrainingJobRequest$,
  DescribeTrainingJobResponse$,
  DescribeTrainingPlan$,
  DescribeTrainingPlanCommand,
  DescribeTrainingPlanRequest$,
  DescribeTrainingPlanResponse$,
  DescribeTransformJob$,
  DescribeTransformJobCommand,
  DescribeTransformJobRequest$,
  DescribeTransformJobResponse$,
  DescribeTrial$,
  DescribeTrialCommand,
  DescribeTrialComponent$,
  DescribeTrialComponentCommand,
  DescribeTrialComponentRequest$,
  DescribeTrialComponentResponse$,
  DescribeTrialRequest$,
  DescribeTrialResponse$,
  DescribeUserProfile$,
  DescribeUserProfileCommand,
  DescribeUserProfileRequest$,
  DescribeUserProfileResponse$,
  DescribeWorkforce$,
  DescribeWorkforceCommand,
  DescribeWorkforceRequest$,
  DescribeWorkforceResponse$,
  DescribeWorkteam$,
  DescribeWorkteamCommand,
  DescribeWorkteamRequest$,
  DescribeWorkteamResponse$,
  DesiredWeightAndCapacity$,
  DetachClusterNodeVolume$,
  DetachClusterNodeVolumeCommand,
  DetachClusterNodeVolumeRequest$,
  DetachClusterNodeVolumeResponse$,
  DetailedAlgorithmStatus,
  DetailedModelPackageStatus,
  Device$,
  DeviceDeploymentStatus,
  DeviceDeploymentSummary$,
  DeviceFleetSummary$,
  DeviceSelectionConfig$,
  DeviceStats$,
  DeviceSubsetType,
  DeviceSummary$,
  DirectDeploySettings$,
  DirectInternetAccess,
  Direction,
  DisableSagemakerServicecatalogPortfolio$,
  DisableSagemakerServicecatalogPortfolioCommand,
  DisableSagemakerServicecatalogPortfolioInput$,
  DisableSagemakerServicecatalogPortfolioOutput$,
  DisassociateTrialComponent$,
  DisassociateTrialComponentCommand,
  DisassociateTrialComponentRequest$,
  DisassociateTrialComponentResponse$,
  DockerSettings$,
  DomainDetails$,
  DomainSettings$,
  DomainSettingsForUpdate$,
  DomainStatus,
  DriftCheckBaselines$,
  DriftCheckBias$,
  DriftCheckExplainability$,
  DriftCheckModelDataQuality$,
  DriftCheckModelQuality$,
  DynamicScalingConfiguration$,
  EbsStorageSettings$,
  Ec2CapacityReservation$,
  Edge$,
  EdgeDeploymentConfig$,
  EdgeDeploymentModelConfig$,
  EdgeDeploymentPlanSummary$,
  EdgeDeploymentStatus$,
  EdgeModel$,
  EdgeModelStat$,
  EdgeModelSummary$,
  EdgeOutputConfig$,
  EdgePackagingJobStatus,
  EdgePackagingJobSummary$,
  EdgePresetDeploymentOutput$,
  EdgePresetDeploymentStatus,
  EdgePresetDeploymentType,
  EFSFileSystem$,
  EFSFileSystemConfig$,
  EmrServerlessComputeConfig$,
  EmrServerlessSettings$,
  EmrSettings$,
  EMRStepMetadata$,
  EnabledOrDisabled,
  EnableSagemakerServicecatalogPortfolio$,
  EnableSagemakerServicecatalogPortfolioCommand,
  EnableSagemakerServicecatalogPortfolioInput$,
  EnableSagemakerServicecatalogPortfolioOutput$,
  Endpoint$,
  EndpointConfigSortKey,
  EndpointConfigStepMetadata$,
  EndpointConfigSummary$,
  EndpointInfo$,
  EndpointInput$,
  EndpointInputConfiguration$,
  EndpointMetadata$,
  EndpointOutputConfiguration$,
  EndpointPerformance$,
  EndpointSortKey,
  EndpointStatus,
  EndpointStepMetadata$,
  EndpointSummary$,
  EnvironmentConfig$,
  EnvironmentConfigDetails$,
  EnvironmentParameter$,
  EnvironmentParameterRanges$,
  ErrorInfo$,
  EvaluationType,
  EventDetails$,
  EventMetadata$,
  EventSortBy,
  ExecutionRoleIdentityConfig,
  ExecutionStatus,
  Experiment$,
  ExperimentConfig$,
  ExperimentSource$,
  ExperimentSummary$,
  Explainability$,
  ExplainerConfig$,
  FailStepMetadata$,
  FailureHandlingPolicy,
  FairShare,
  FeatureDefinition$,
  FeatureGroup$,
  FeatureGroupSortBy,
  FeatureGroupSortOrder,
  FeatureGroupStatus,
  FeatureGroupSummary$,
  FeatureMetadata$,
  FeatureParameter$,
  FeatureStatus,
  FeatureType,
  FileSource$,
  FileSystemAccessMode,
  FileSystemConfig$,
  FileSystemDataSource$,
  FileSystemType,
  FillingType,
  Filter$,
  FinalAutoMLJobObjectiveMetric$,
  FinalHyperParameterTuningJobObjectiveMetric$,
  FlatInvocations,
  FlowDefinitionOutputConfig$,
  FlowDefinitionStatus,
  FlowDefinitionSummary$,
  Framework,
  FSxLustreConfig$,
  FSxLustreFileSystem$,
  FSxLustreFileSystemConfig$,
  GenerativeAiSettings$,
  GetDeviceFleetReport$,
  GetDeviceFleetReportCommand,
  GetDeviceFleetReportRequest$,
  GetDeviceFleetReportResponse$,
  GetLineageGroupPolicy$,
  GetLineageGroupPolicyCommand,
  GetLineageGroupPolicyRequest$,
  GetLineageGroupPolicyResponse$,
  GetModelPackageGroupPolicy$,
  GetModelPackageGroupPolicyCommand,
  GetModelPackageGroupPolicyInput$,
  GetModelPackageGroupPolicyOutput$,
  GetSagemakerServicecatalogPortfolioStatus$,
  GetSagemakerServicecatalogPortfolioStatusCommand,
  GetSagemakerServicecatalogPortfolioStatusInput$,
  GetSagemakerServicecatalogPortfolioStatusOutput$,
  GetScalingConfigurationRecommendation$,
  GetScalingConfigurationRecommendationCommand,
  GetScalingConfigurationRecommendationRequest$,
  GetScalingConfigurationRecommendationResponse$,
  GetSearchSuggestions$,
  GetSearchSuggestionsCommand,
  GetSearchSuggestionsRequest$,
  GetSearchSuggestionsResponse$,
  GitConfig$,
  GitConfigForUpdate$,
  HiddenSageMakerImage$,
  HolidayConfigAttributes$,
  HubAccessConfig$,
  HubContentDependency$,
  HubContentInfo$,
  HubContentSortBy,
  HubContentStatus,
  HubContentSupportStatus,
  HubContentType,
  HubInfo$,
  HubS3StorageConfig$,
  HubSortBy,
  HubStatus,
  HumanLoopActivationConditionsConfig$,
  HumanLoopActivationConfig$,
  HumanLoopConfig$,
  HumanLoopRequestSource$,
  HumanTaskConfig$,
  HumanTaskUiStatus,
  HumanTaskUiSummary$,
  HyperbandStrategyConfig$,
  HyperParameterAlgorithmSpecification$,
  HyperParameterScalingType,
  HyperParameterSpecification$,
  HyperParameterTrainingJobDefinition$,
  HyperParameterTrainingJobSummary$,
  HyperParameterTuningAllocationStrategy,
  HyperParameterTuningInstanceConfig$,
  HyperParameterTuningJobCompletionDetails$,
  HyperParameterTuningJobConfig$,
  HyperParameterTuningJobConsumedResources$,
  HyperParameterTuningJobObjective$,
  HyperParameterTuningJobObjectiveType,
  HyperParameterTuningJobSearchEntity$,
  HyperParameterTuningJobSortByOptions,
  HyperParameterTuningJobStatus,
  HyperParameterTuningJobStrategyConfig$,
  HyperParameterTuningJobStrategyType,
  HyperParameterTuningJobSummary$,
  HyperParameterTuningJobWarmStartConfig$,
  HyperParameterTuningJobWarmStartType,
  HyperParameterTuningResourceConfig$,
  IamIdentity$,
  IamPolicyConstraints$,
  IdentityProviderOAuthSetting$,
  IdleSettings$,
  Image$,
  ImageClassificationJobConfig$,
  ImageConfig$,
  ImageSortBy,
  ImageSortOrder,
  ImageStatus,
  ImageVersion$,
  ImageVersionSortBy,
  ImageVersionSortOrder,
  ImageVersionStatus,
  ImportHubContent$,
  ImportHubContentCommand,
  ImportHubContentRequest$,
  ImportHubContentResponse$,
  InferenceComponentCapacitySize$,
  InferenceComponentCapacitySizeType,
  InferenceComponentComputeResourceRequirements$,
  InferenceComponentContainerSpecification$,
  InferenceComponentContainerSpecificationSummary$,
  InferenceComponentDataCacheConfig$,
  InferenceComponentDataCacheConfigSummary$,
  InferenceComponentDeploymentConfig$,
  InferenceComponentMetadata$,
  InferenceComponentRollingUpdatePolicy$,
  InferenceComponentRuntimeConfig$,
  InferenceComponentRuntimeConfigSummary$,
  InferenceComponentSortKey,
  InferenceComponentSpecification$,
  InferenceComponentSpecificationSummary$,
  InferenceComponentStartupParameters$,
  InferenceComponentStatus,
  InferenceComponentSummary$,
  InferenceExecutionConfig$,
  InferenceExecutionMode,
  InferenceExperimentDataStorageConfig$,
  InferenceExperimentSchedule$,
  InferenceExperimentStatus,
  InferenceExperimentStopDesiredState,
  InferenceExperimentSummary$,
  InferenceExperimentType,
  InferenceHubAccessConfig$,
  InferenceMetrics$,
  InferenceRecommendation$,
  InferenceRecommendationsJob$,
  InferenceRecommendationsJobStep$,
  InferenceSpecification$,
  InfraCheckConfig$,
  InputConfig$,
  InputMode,
  InstanceGroup$,
  InstanceGroupMetadata$,
  InstanceGroupScalingMetadata$,
  InstanceGroupStatus,
  InstanceMetadata$,
  InstanceMetadataServiceConfiguration$,
  InstancePlacementConfig$,
  IntegerParameterRange$,
  IntegerParameterRangeSpecification$,
  IPAddressType,
  IsTrackingServerActive,
  JobType,
  JoinSource,
  JupyterLabAppImageConfig$,
  JupyterLabAppSettings$,
  JupyterServerAppSettings$,
  KendraSettings$,
  KernelGatewayAppSettings$,
  KernelGatewayImageConfig$,
  KernelSpec$,
  LabelCounters$,
  LabelCountersForWorkteam$,
  LabelingJobAlgorithmsConfig$,
  LabelingJobDataAttributes$,
  LabelingJobDataSource$,
  LabelingJobForWorkteamSummary$,
  LabelingJobInputConfig$,
  LabelingJobOutput$,
  LabelingJobOutputConfig$,
  LabelingJobResourceConfig$,
  LabelingJobS3DataSource$,
  LabelingJobSnsDataSource$,
  LabelingJobStatus,
  LabelingJobStoppingConditions$,
  LabelingJobSummary$,
  LambdaStepMetadata$,
  LastUpdateStatus$,
  LastUpdateStatusValue,
  LifecycleManagement,
  LineageGroupSummary$,
  LineageMetadata$,
  LineageType,
  ListActions$,
  ListActionsCommand,
  ListActionsRequest$,
  ListActionsResponse$,
  ListAlgorithms$,
  ListAlgorithmsCommand,
  ListAlgorithmsInput$,
  ListAlgorithmsOutput$,
  ListAliases$,
  ListAliasesCommand,
  ListAliasesRequest$,
  ListAliasesResponse$,
  ListAppImageConfigs$,
  ListAppImageConfigsCommand,
  ListAppImageConfigsRequest$,
  ListAppImageConfigsResponse$,
  ListApps$,
  ListAppsCommand,
  ListAppsRequest$,
  ListAppsResponse$,
  ListArtifacts$,
  ListArtifactsCommand,
  ListArtifactsRequest$,
  ListArtifactsResponse$,
  ListAssociations$,
  ListAssociationsCommand,
  ListAssociationsRequest$,
  ListAssociationsResponse$,
  ListAutoMLJobs$,
  ListAutoMLJobsCommand,
  ListAutoMLJobsRequest$,
  ListAutoMLJobsResponse$,
  ListCandidatesForAutoMLJob$,
  ListCandidatesForAutoMLJobCommand,
  ListCandidatesForAutoMLJobRequest$,
  ListCandidatesForAutoMLJobResponse$,
  ListClusterEvents$,
  ListClusterEventsCommand,
  ListClusterEventsRequest$,
  ListClusterEventsResponse$,
  ListClusterNodes$,
  ListClusterNodesCommand,
  ListClusterNodesRequest$,
  ListClusterNodesResponse$,
  ListClusters$,
  ListClusterSchedulerConfigs$,
  ListClusterSchedulerConfigsCommand,
  ListClusterSchedulerConfigsRequest$,
  ListClusterSchedulerConfigsResponse$,
  ListClustersCommand,
  ListClustersRequest$,
  ListClustersResponse$,
  ListCodeRepositories$,
  ListCodeRepositoriesCommand,
  ListCodeRepositoriesInput$,
  ListCodeRepositoriesOutput$,
  ListCompilationJobs$,
  ListCompilationJobsCommand,
  ListCompilationJobsRequest$,
  ListCompilationJobsResponse$,
  ListCompilationJobsSortBy,
  ListComputeQuotas$,
  ListComputeQuotasCommand,
  ListComputeQuotasRequest$,
  ListComputeQuotasResponse$,
  ListContexts$,
  ListContextsCommand,
  ListContextsRequest$,
  ListContextsResponse$,
  ListDataQualityJobDefinitions$,
  ListDataQualityJobDefinitionsCommand,
  ListDataQualityJobDefinitionsRequest$,
  ListDataQualityJobDefinitionsResponse$,
  ListDeviceFleets$,
  ListDeviceFleetsCommand,
  ListDeviceFleetsRequest$,
  ListDeviceFleetsResponse$,
  ListDeviceFleetsSortBy,
  ListDevices$,
  ListDevicesCommand,
  ListDevicesRequest$,
  ListDevicesResponse$,
  ListDomains$,
  ListDomainsCommand,
  ListDomainsRequest$,
  ListDomainsResponse$,
  ListEdgeDeploymentPlans$,
  ListEdgeDeploymentPlansCommand,
  ListEdgeDeploymentPlansRequest$,
  ListEdgeDeploymentPlansResponse$,
  ListEdgeDeploymentPlansSortBy,
  ListEdgePackagingJobs$,
  ListEdgePackagingJobsCommand,
  ListEdgePackagingJobsRequest$,
  ListEdgePackagingJobsResponse$,
  ListEdgePackagingJobsSortBy,
  ListEndpointConfigs$,
  ListEndpointConfigsCommand,
  ListEndpointConfigsInput$,
  ListEndpointConfigsOutput$,
  ListEndpoints$,
  ListEndpointsCommand,
  ListEndpointsInput$,
  ListEndpointsOutput$,
  ListExperiments$,
  ListExperimentsCommand,
  ListExperimentsRequest$,
  ListExperimentsResponse$,
  ListFeatureGroups$,
  ListFeatureGroupsCommand,
  ListFeatureGroupsRequest$,
  ListFeatureGroupsResponse$,
  ListFlowDefinitions$,
  ListFlowDefinitionsCommand,
  ListFlowDefinitionsRequest$,
  ListFlowDefinitionsResponse$,
  ListHubContents$,
  ListHubContentsCommand,
  ListHubContentsRequest$,
  ListHubContentsResponse$,
  ListHubContentVersions$,
  ListHubContentVersionsCommand,
  ListHubContentVersionsRequest$,
  ListHubContentVersionsResponse$,
  ListHubs$,
  ListHubsCommand,
  ListHubsRequest$,
  ListHubsResponse$,
  ListHumanTaskUis$,
  ListHumanTaskUisCommand,
  ListHumanTaskUisRequest$,
  ListHumanTaskUisResponse$,
  ListHyperParameterTuningJobs$,
  ListHyperParameterTuningJobsCommand,
  ListHyperParameterTuningJobsRequest$,
  ListHyperParameterTuningJobsResponse$,
  ListImages$,
  ListImagesCommand,
  ListImagesRequest$,
  ListImagesResponse$,
  ListImageVersions$,
  ListImageVersionsCommand,
  ListImageVersionsRequest$,
  ListImageVersionsResponse$,
  ListInferenceComponents$,
  ListInferenceComponentsCommand,
  ListInferenceComponentsInput$,
  ListInferenceComponentsOutput$,
  ListInferenceExperiments$,
  ListInferenceExperimentsCommand,
  ListInferenceExperimentsRequest$,
  ListInferenceExperimentsResponse$,
  ListInferenceRecommendationsJobs$,
  ListInferenceRecommendationsJobsCommand,
  ListInferenceRecommendationsJobsRequest$,
  ListInferenceRecommendationsJobsResponse$,
  ListInferenceRecommendationsJobsSortBy,
  ListInferenceRecommendationsJobSteps$,
  ListInferenceRecommendationsJobStepsCommand,
  ListInferenceRecommendationsJobStepsRequest$,
  ListInferenceRecommendationsJobStepsResponse$,
  ListLabelingJobs$,
  ListLabelingJobsCommand,
  ListLabelingJobsForWorkteam$,
  ListLabelingJobsForWorkteamCommand,
  ListLabelingJobsForWorkteamRequest$,
  ListLabelingJobsForWorkteamResponse$,
  ListLabelingJobsForWorkteamSortByOptions,
  ListLabelingJobsRequest$,
  ListLabelingJobsResponse$,
  ListLineageGroups$,
  ListLineageGroupsCommand,
  ListLineageGroupsRequest$,
  ListLineageGroupsResponse$,
  ListMlflowApps$,
  ListMlflowAppsCommand,
  ListMlflowAppsRequest$,
  ListMlflowAppsResponse$,
  ListMlflowTrackingServers$,
  ListMlflowTrackingServersCommand,
  ListMlflowTrackingServersRequest$,
  ListMlflowTrackingServersResponse$,
  ListModelBiasJobDefinitions$,
  ListModelBiasJobDefinitionsCommand,
  ListModelBiasJobDefinitionsRequest$,
  ListModelBiasJobDefinitionsResponse$,
  ListModelCardExportJobs$,
  ListModelCardExportJobsCommand,
  ListModelCardExportJobsRequest$,
  ListModelCardExportJobsResponse$,
  ListModelCards$,
  ListModelCardsCommand,
  ListModelCardsRequest$,
  ListModelCardsResponse$,
  ListModelCardVersions$,
  ListModelCardVersionsCommand,
  ListModelCardVersionsRequest$,
  ListModelCardVersionsResponse$,
  ListModelExplainabilityJobDefinitions$,
  ListModelExplainabilityJobDefinitionsCommand,
  ListModelExplainabilityJobDefinitionsRequest$,
  ListModelExplainabilityJobDefinitionsResponse$,
  ListModelMetadata$,
  ListModelMetadataCommand,
  ListModelMetadataRequest$,
  ListModelMetadataResponse$,
  ListModelPackageGroups$,
  ListModelPackageGroupsCommand,
  ListModelPackageGroupsInput$,
  ListModelPackageGroupsOutput$,
  ListModelPackages$,
  ListModelPackagesCommand,
  ListModelPackagesInput$,
  ListModelPackagesOutput$,
  ListModelQualityJobDefinitions$,
  ListModelQualityJobDefinitionsCommand,
  ListModelQualityJobDefinitionsRequest$,
  ListModelQualityJobDefinitionsResponse$,
  ListModels$,
  ListModelsCommand,
  ListModelsInput$,
  ListModelsOutput$,
  ListMonitoringAlertHistory$,
  ListMonitoringAlertHistoryCommand,
  ListMonitoringAlertHistoryRequest$,
  ListMonitoringAlertHistoryResponse$,
  ListMonitoringAlerts$,
  ListMonitoringAlertsCommand,
  ListMonitoringAlertsRequest$,
  ListMonitoringAlertsResponse$,
  ListMonitoringExecutions$,
  ListMonitoringExecutionsCommand,
  ListMonitoringExecutionsRequest$,
  ListMonitoringExecutionsResponse$,
  ListMonitoringSchedules$,
  ListMonitoringSchedulesCommand,
  ListMonitoringSchedulesRequest$,
  ListMonitoringSchedulesResponse$,
  ListNotebookInstanceLifecycleConfigs$,
  ListNotebookInstanceLifecycleConfigsCommand,
  ListNotebookInstanceLifecycleConfigsInput$,
  ListNotebookInstanceLifecycleConfigsOutput$,
  ListNotebookInstances$,
  ListNotebookInstancesCommand,
  ListNotebookInstancesInput$,
  ListNotebookInstancesOutput$,
  ListOptimizationJobs$,
  ListOptimizationJobsCommand,
  ListOptimizationJobsRequest$,
  ListOptimizationJobsResponse$,
  ListOptimizationJobsSortBy,
  ListPartnerApps$,
  ListPartnerAppsCommand,
  ListPartnerAppsRequest$,
  ListPartnerAppsResponse$,
  ListPipelineExecutions$,
  ListPipelineExecutionsCommand,
  ListPipelineExecutionsRequest$,
  ListPipelineExecutionsResponse$,
  ListPipelineExecutionSteps$,
  ListPipelineExecutionStepsCommand,
  ListPipelineExecutionStepsRequest$,
  ListPipelineExecutionStepsResponse$,
  ListPipelineParametersForExecution$,
  ListPipelineParametersForExecutionCommand,
  ListPipelineParametersForExecutionRequest$,
  ListPipelineParametersForExecutionResponse$,
  ListPipelines$,
  ListPipelinesCommand,
  ListPipelinesRequest$,
  ListPipelinesResponse$,
  ListPipelineVersions$,
  ListPipelineVersionsCommand,
  ListPipelineVersionsRequest$,
  ListPipelineVersionsResponse$,
  ListProcessingJobs$,
  ListProcessingJobsCommand,
  ListProcessingJobsRequest$,
  ListProcessingJobsResponse$,
  ListProjects$,
  ListProjectsCommand,
  ListProjectsInput$,
  ListProjectsOutput$,
  ListResourceCatalogs$,
  ListResourceCatalogsCommand,
  ListResourceCatalogsRequest$,
  ListResourceCatalogsResponse$,
  ListSpaces$,
  ListSpacesCommand,
  ListSpacesRequest$,
  ListSpacesResponse$,
  ListStageDevices$,
  ListStageDevicesCommand,
  ListStageDevicesRequest$,
  ListStageDevicesResponse$,
  ListStudioLifecycleConfigs$,
  ListStudioLifecycleConfigsCommand,
  ListStudioLifecycleConfigsRequest$,
  ListStudioLifecycleConfigsResponse$,
  ListSubscribedWorkteams$,
  ListSubscribedWorkteamsCommand,
  ListSubscribedWorkteamsRequest$,
  ListSubscribedWorkteamsResponse$,
  ListTags$,
  ListTagsCommand,
  ListTagsInput$,
  ListTagsOutput$,
  ListTrainingJobs$,
  ListTrainingJobsCommand,
  ListTrainingJobsForHyperParameterTuningJob$,
  ListTrainingJobsForHyperParameterTuningJobCommand,
  ListTrainingJobsForHyperParameterTuningJobRequest$,
  ListTrainingJobsForHyperParameterTuningJobResponse$,
  ListTrainingJobsRequest$,
  ListTrainingJobsResponse$,
  ListTrainingPlans$,
  ListTrainingPlansCommand,
  ListTrainingPlansRequest$,
  ListTrainingPlansResponse$,
  ListTransformJobs$,
  ListTransformJobsCommand,
  ListTransformJobsRequest$,
  ListTransformJobsResponse$,
  ListTrialComponents$,
  ListTrialComponentsCommand,
  ListTrialComponentsRequest$,
  ListTrialComponentsResponse$,
  ListTrials$,
  ListTrialsCommand,
  ListTrialsRequest$,
  ListTrialsResponse$,
  ListUltraServersByReservedCapacity$,
  ListUltraServersByReservedCapacityCommand,
  ListUltraServersByReservedCapacityRequest$,
  ListUltraServersByReservedCapacityResponse$,
  ListUserProfiles$,
  ListUserProfilesCommand,
  ListUserProfilesRequest$,
  ListUserProfilesResponse$,
  ListWorkforces$,
  ListWorkforcesCommand,
  ListWorkforcesRequest$,
  ListWorkforcesResponse$,
  ListWorkforcesSortByOptions,
  ListWorkteams$,
  ListWorkteamsCommand,
  ListWorkteamsRequest$,
  ListWorkteamsResponse$,
  ListWorkteamsSortByOptions,
  MaintenanceStatus,
  ManagedInstanceScalingStatus,
  MemberDefinition$,
  MetadataProperties$,
  MetricData$,
  MetricDatum$,
  MetricDefinition$,
  MetricPublishFrequencyInSeconds,
  MetricsConfig$,
  MetricSetSource,
  MetricSpecification$,
  MetricsSource$,
  MIGProfileType,
  MlflowAppStatus,
  MlflowAppSummary$,
  MlflowConfig$,
  MLflowConfiguration$,
  MlflowDetails$,
  MlTools,
  Model$,
  ModelAccessConfig$,
  ModelApprovalStatus,
  ModelArtifacts$,
  ModelBiasAppSpecification$,
  ModelBiasBaselineConfig$,
  ModelBiasJobInput$,
  ModelCacheSetting,
  ModelCard$,
  ModelCardExportArtifacts$,
  ModelCardExportJobSortBy,
  ModelCardExportJobSortOrder,
  ModelCardExportJobStatus,
  ModelCardExportJobSummary$,
  ModelCardExportOutputConfig$,
  ModelCardProcessingStatus,
  ModelCardSecurityConfig$,
  ModelCardSortBy,
  ModelCardSortOrder,
  ModelCardStatus,
  ModelCardSummary$,
  ModelCardVersionSortBy,
  ModelCardVersionSummary$,
  ModelClientConfig$,
  ModelCompilationConfig$,
  ModelCompressionType,
  ModelConfiguration$,
  ModelDashboardEndpoint$,
  ModelDashboardIndicatorAction$,
  ModelDashboardModel$,
  ModelDashboardModelCard$,
  ModelDashboardMonitoringSchedule$,
  ModelDataQuality$,
  ModelDataSource$,
  ModelDeployConfig$,
  ModelDeployResult$,
  ModelDigests$,
  ModelExplainabilityAppSpecification$,
  ModelExplainabilityBaselineConfig$,
  ModelExplainabilityJobInput$,
  ModelInfrastructureConfig$,
  ModelInfrastructureType,
  ModelInput$,
  ModelLatencyThreshold$,
  ModelLifeCycle$,
  ModelMetadataFilter$,
  ModelMetadataFilterType,
  ModelMetadataSearchExpression$,
  ModelMetadataSummary$,
  ModelMetrics$,
  ModelPackage$,
  ModelPackageConfig$,
  ModelPackageContainerDefinition$,
  ModelPackageGroup$,
  ModelPackageGroupSortBy,
  ModelPackageGroupStatus,
  ModelPackageGroupSummary$,
  ModelPackageModelCard$,
  ModelPackageRegistrationType,
  ModelPackageSecurityConfig$,
  ModelPackageSortBy,
  ModelPackageStatus,
  ModelPackageStatusDetails$,
  ModelPackageStatusItem$,
  ModelPackageSummary$,
  ModelPackageType,
  ModelPackageValidationProfile$,
  ModelPackageValidationSpecification$,
  ModelQuality$,
  ModelQualityAppSpecification$,
  ModelQualityBaselineConfig$,
  ModelQualityJobInput$,
  ModelQuantizationConfig$,
  ModelRegisterSettings$,
  ModelRegistrationMode,
  ModelShardingConfig$,
  ModelSortKey,
  ModelSpeculativeDecodingConfig$,
  ModelSpeculativeDecodingS3DataType,
  ModelSpeculativeDecodingTechnique,
  ModelSpeculativeDecodingTrainingDataSource$,
  ModelStepMetadata$,
  ModelSummary$,
  ModelVariantAction,
  ModelVariantConfig$,
  ModelVariantConfigSummary$,
  ModelVariantStatus,
  MonitoringAlertActions$,
  MonitoringAlertHistorySortKey,
  MonitoringAlertHistorySummary$,
  MonitoringAlertStatus,
  MonitoringAlertSummary$,
  MonitoringAppSpecification$,
  MonitoringBaselineConfig$,
  MonitoringClusterConfig$,
  MonitoringConstraintsResource$,
  MonitoringCsvDatasetFormat$,
  MonitoringDatasetFormat$,
  MonitoringExecutionSortKey,
  MonitoringExecutionSummary$,
  MonitoringGroundTruthS3Input$,
  MonitoringInput$,
  MonitoringJobDefinition$,
  MonitoringJobDefinitionSortKey,
  MonitoringJobDefinitionSummary$,
  MonitoringJsonDatasetFormat$,
  MonitoringNetworkConfig$,
  MonitoringOutput$,
  MonitoringOutputConfig$,
  MonitoringParquetDatasetFormat$,
  MonitoringProblemType,
  MonitoringResources$,
  MonitoringS3Output$,
  MonitoringSchedule$,
  MonitoringScheduleConfig$,
  MonitoringScheduleSortKey,
  MonitoringScheduleSummary$,
  MonitoringStatisticsResource$,
  MonitoringStoppingCondition$,
  MonitoringType,
  MultiModelConfig$,
  NeoVpcConfig$,
  NestedFilters$,
  NetworkConfig$,
  NodeAdditionResult$,
  NodeUnavailabilityType,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleConfigSortKey,
  NotebookInstanceLifecycleConfigSortOrder,
  NotebookInstanceLifecycleConfigSummary$,
  NotebookInstanceLifecycleHook$,
  NotebookInstanceSortKey,
  NotebookInstanceSortOrder,
  NotebookInstanceStatus,
  NotebookInstanceSummary$,
  NotebookOutputOption,
  NotificationConfiguration$,
  ObjectiveStatus,
  ObjectiveStatusCounters$,
  OfflineStoreConfig$,
  OfflineStoreStatus$,
  OfflineStoreStatusValue,
  OidcConfig$,
  OidcConfigForResponse$,
  OidcMemberDefinition$,
  OnlineStoreConfig$,
  OnlineStoreConfigUpdate$,
  OnlineStoreSecurityConfig$,
  Operator,
  OptimizationConfig$,
  OptimizationJobDeploymentInstanceType,
  OptimizationJobModelSource$,
  OptimizationJobModelSourceS3$,
  OptimizationJobOutputConfig$,
  OptimizationJobStatus,
  OptimizationJobSummary$,
  OptimizationModelAccessConfig$,
  OptimizationOutput$,
  OptimizationSageMakerModel$,
  OptimizationVpcConfig$,
  OrderKey,
  OutputCompressionType,
  OutputConfig$,
  OutputDataConfig$,
  OutputParameter$,
  OwnershipSettings$,
  OwnershipSettingsSummary$,
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
  paginateListClusters,
  paginateListClusterSchedulerConfigs,
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
  paginateListImages,
  paginateListImageVersions,
  paginateListInferenceComponents,
  paginateListInferenceExperiments,
  paginateListInferenceRecommendationsJobs,
  paginateListInferenceRecommendationsJobSteps,
  paginateListLabelingJobs,
  paginateListLabelingJobsForWorkteam,
  paginateListLineageGroups,
  paginateListMlflowApps,
  paginateListMlflowTrackingServers,
  paginateListModelBiasJobDefinitions,
  paginateListModelCardExportJobs,
  paginateListModelCards,
  paginateListModelCardVersions,
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
  paginateListPipelineExecutions,
  paginateListPipelineExecutionSteps,
  paginateListPipelineParametersForExecution,
  paginateListPipelines,
  paginateListPipelineVersions,
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
  ParallelismConfiguration$,
  Parameter$,
  ParameterRange$,
  ParameterRanges$,
  ParameterType,
  Parent$,
  ParentHyperParameterTuningJob$,
  PartnerAppAuthType,
  PartnerAppConfig$,
  PartnerAppMaintenanceConfig$,
  PartnerAppStatus,
  PartnerAppSummary$,
  PartnerAppType,
  Peft,
  PendingDeploymentSummary$,
  PendingProductionVariantSummary$,
  Phase$,
  Pipeline$,
  PipelineDefinitionS3Location$,
  PipelineExecution$,
  PipelineExecutionStatus,
  PipelineExecutionStep$,
  PipelineExecutionStepMetadata$,
  PipelineExecutionSummary$,
  PipelineExperimentConfig$,
  PipelineStatus,
  PipelineSummary$,
  PipelineVersion$,
  PipelineVersionSummary$,
  PlacementSpecification$,
  PredefinedMetricSpecification$,
  PreemptTeamTasks,
  PresignedUrlAccessConfig$,
  PriorityClass$,
  ProblemType,
  ProcessingClusterConfig$,
  ProcessingFeatureStoreOutput$,
  ProcessingInput$,
  ProcessingInstanceType,
  ProcessingJob$,
  ProcessingJobStatus,
  ProcessingJobStepMetadata$,
  ProcessingJobSummary$,
  ProcessingOutput$,
  ProcessingOutputConfig$,
  ProcessingResources$,
  ProcessingS3CompressionType,
  ProcessingS3DataDistributionType,
  ProcessingS3DataType,
  ProcessingS3Input$,
  ProcessingS3InputMode,
  ProcessingS3Output$,
  ProcessingS3UploadMode,
  ProcessingStoppingCondition$,
  Processor,
  ProductionVariant$,
  ProductionVariantAcceleratorType,
  ProductionVariantCapacityReservationConfig$,
  ProductionVariantCapacityReservationSummary$,
  ProductionVariantCoreDumpConfig$,
  ProductionVariantInferenceAmiVersion,
  ProductionVariantInstanceType,
  ProductionVariantManagedInstanceScaling$,
  ProductionVariantRoutingConfig$,
  ProductionVariantServerlessConfig$,
  ProductionVariantServerlessUpdateConfig$,
  ProductionVariantStatus$,
  ProductionVariantSummary$,
  ProfilerConfig$,
  ProfilerConfigForUpdate$,
  ProfilerRuleConfiguration$,
  ProfilerRuleEvaluationStatus$,
  ProfilingStatus,
  Project$,
  ProjectSortBy,
  ProjectSortOrder,
  ProjectStatus,
  ProjectSummary$,
  PropertyNameQuery$,
  PropertyNameSuggestion$,
  ProvisioningParameter$,
  PublicWorkforceTaskPrice$,
  PutModelPackageGroupPolicy$,
  PutModelPackageGroupPolicyCommand,
  PutModelPackageGroupPolicyInput$,
  PutModelPackageGroupPolicyOutput$,
  QualityCheckStepMetadata$,
  QueryFilters$,
  QueryLineage$,
  QueryLineageCommand,
  QueryLineageRequest$,
  QueryLineageResponse$,
  RealTimeInferenceConfig$,
  RealTimeInferenceRecommendation$,
  RecommendationJobCompiledOutputConfig$,
  RecommendationJobContainerConfig$,
  RecommendationJobInferenceBenchmark$,
  RecommendationJobInputConfig$,
  RecommendationJobOutputConfig$,
  RecommendationJobPayloadConfig$,
  RecommendationJobResourceLimit$,
  RecommendationJobStatus,
  RecommendationJobStoppingConditions$,
  RecommendationJobSupportedEndpointType,
  RecommendationJobType,
  RecommendationJobVpcConfig$,
  RecommendationMetrics$,
  RecommendationStatus,
  RecommendationStepType,
  RecordWrapper,
  RedshiftDatasetDefinition$,
  RedshiftResultCompressionType,
  RedshiftResultFormat,
  RegisterDevices$,
  RegisterDevicesCommand,
  RegisterDevicesRequest$,
  RegisterModelStepMetadata$,
  Relation,
  RemoteDebugConfig$,
  RemoteDebugConfigForUpdate$,
  RenderableTask$,
  RenderingError$,
  RenderUiTemplate$,
  RenderUiTemplateCommand,
  RenderUiTemplateRequest$,
  RenderUiTemplateResponse$,
  RepositoryAccessMode,
  RepositoryAuthConfig$,
  ReservedCapacityInstanceType,
  ReservedCapacityOffering$,
  ReservedCapacityStatus,
  ReservedCapacitySummary$,
  ReservedCapacityType,
  ResolvedAttributes$,
  ResourceCatalog$,
  ResourceCatalogSortBy,
  ResourceCatalogSortOrder,
  ResourceConfig$,
  ResourceConfigForUpdate$,
  ResourceInUse,
  ResourceInUse$,
  ResourceLimitExceeded,
  ResourceLimitExceeded$,
  ResourceLimits$,
  ResourceNotFound,
  ResourceNotFound$,
  ResourceSharingConfig$,
  ResourceSharingStrategy,
  ResourceSpec$,
  ResourceType,
  RetentionPolicy$,
  RetentionType,
  RetryPipelineExecution$,
  RetryPipelineExecutionCommand,
  RetryPipelineExecutionRequest$,
  RetryPipelineExecutionResponse$,
  RetryStrategy$,
  RoleGroupAssignment$,
  RollingDeploymentPolicy$,
  RollingUpdatePolicy$,
  RootAccess,
  RoutingStrategy,
  RSessionAppSettings$,
  RStudioServerProAccessStatus,
  RStudioServerProAppSettings$,
  RStudioServerProDomainSettings$,
  RStudioServerProDomainSettingsForUpdate$,
  RStudioServerProUserGroup,
  RuleEvaluationStatus,
  S3DataDistribution,
  S3DataSource$,
  S3DataType,
  S3FileSystem$,
  S3FileSystemConfig$,
  S3ModelDataSource$,
  S3ModelDataType,
  S3Presign$,
  S3StorageConfig$,
  SageMaker,
  SageMakerClient,
  SageMakerImageName,
  SageMakerResourceName,
  SagemakerServicecatalogStatus,
  SageMakerServiceException,
  ScalingPolicy$,
  ScalingPolicyMetric$,
  ScalingPolicyObjective$,
  ScheduleConfig$,
  ScheduledUpdateConfig$,
  SchedulerConfig$,
  SchedulerResourceStatus,
  ScheduleStatus,
  Search$,
  SearchCommand,
  SearchExpression$,
  SearchRecord$,
  SearchRequest$,
  SearchResponse$,
  SearchSortOrder,
  SearchTrainingPlanOfferings$,
  SearchTrainingPlanOfferingsCommand,
  SearchTrainingPlanOfferingsRequest$,
  SearchTrainingPlanOfferingsResponse$,
  SecondaryStatus,
  SecondaryStatusTransition$,
  SelectedStep$,
  SelectiveExecutionConfig$,
  SelectiveExecutionResult$,
  SendPipelineExecutionStepFailure$,
  SendPipelineExecutionStepFailureCommand,
  SendPipelineExecutionStepFailureRequest$,
  SendPipelineExecutionStepFailureResponse$,
  SendPipelineExecutionStepSuccess$,
  SendPipelineExecutionStepSuccessCommand,
  SendPipelineExecutionStepSuccessRequest$,
  SendPipelineExecutionStepSuccessResponse$,
  ServerlessJobConfig$,
  ServerlessJobType,
  ServiceCatalogProvisionedProductDetails$,
  ServiceCatalogProvisioningDetails$,
  ServiceCatalogProvisioningUpdateDetails$,
  SessionChainingConfig$,
  ShadowModeConfig$,
  ShadowModelVariantConfig$,
  SharingSettings$,
  SharingType,
  ShuffleConfig$,
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
  SortMlflowAppBy,
  SortOrder,
  SortPipelineExecutionsBy,
  SortPipelinesBy,
  SortQuotaBy,
  SortTrackingServerBy,
  SortTrialComponentsBy,
  SortTrialsBy,
  SourceAlgorithm$,
  SourceAlgorithmSpecification$,
  SourceIpConfig$,
  SpaceAppLifecycleManagement$,
  SpaceCodeEditorAppSettings$,
  SpaceDetails$,
  SpaceIdleSettings$,
  SpaceJupyterLabAppSettings$,
  SpaceSettings$,
  SpaceSettingsSummary$,
  SpaceSharingSettings$,
  SpaceSharingSettingsSummary$,
  SpaceSortKey,
  SpaceStatus,
  SpaceStorageSettings$,
  SplitType,
  StageStatus,
  Stairs$,
  StartEdgeDeploymentStage$,
  StartEdgeDeploymentStageCommand,
  StartEdgeDeploymentStageRequest$,
  StartInferenceExperiment$,
  StartInferenceExperimentCommand,
  StartInferenceExperimentRequest$,
  StartInferenceExperimentResponse$,
  StartMlflowTrackingServer$,
  StartMlflowTrackingServerCommand,
  StartMlflowTrackingServerRequest$,
  StartMlflowTrackingServerResponse$,
  StartMonitoringSchedule$,
  StartMonitoringScheduleCommand,
  StartMonitoringScheduleRequest$,
  StartNotebookInstance$,
  StartNotebookInstanceCommand,
  StartNotebookInstanceInput$,
  StartPipelineExecution$,
  StartPipelineExecutionCommand,
  StartPipelineExecutionRequest$,
  StartPipelineExecutionResponse$,
  StartSession$,
  StartSessionCommand,
  StartSessionRequest$,
  StartSessionResponse$,
  Statistic,
  StepStatus,
  StopAutoMLJob$,
  StopAutoMLJobCommand,
  StopAutoMLJobRequest$,
  StopCompilationJob$,
  StopCompilationJobCommand,
  StopCompilationJobRequest$,
  StopEdgeDeploymentStage$,
  StopEdgeDeploymentStageCommand,
  StopEdgeDeploymentStageRequest$,
  StopEdgePackagingJob$,
  StopEdgePackagingJobCommand,
  StopEdgePackagingJobRequest$,
  StopHyperParameterTuningJob$,
  StopHyperParameterTuningJobCommand,
  StopHyperParameterTuningJobRequest$,
  StopInferenceExperiment$,
  StopInferenceExperimentCommand,
  StopInferenceExperimentRequest$,
  StopInferenceExperimentResponse$,
  StopInferenceRecommendationsJob$,
  StopInferenceRecommendationsJobCommand,
  StopInferenceRecommendationsJobRequest$,
  StopLabelingJob$,
  StopLabelingJobCommand,
  StopLabelingJobRequest$,
  StopMlflowTrackingServer$,
  StopMlflowTrackingServerCommand,
  StopMlflowTrackingServerRequest$,
  StopMlflowTrackingServerResponse$,
  StopMonitoringSchedule$,
  StopMonitoringScheduleCommand,
  StopMonitoringScheduleRequest$,
  StopNotebookInstance$,
  StopNotebookInstanceCommand,
  StopNotebookInstanceInput$,
  StopOptimizationJob$,
  StopOptimizationJobCommand,
  StopOptimizationJobRequest$,
  StoppingCondition$,
  StopPipelineExecution$,
  StopPipelineExecutionCommand,
  StopPipelineExecutionRequest$,
  StopPipelineExecutionResponse$,
  StopProcessingJob$,
  StopProcessingJobCommand,
  StopProcessingJobRequest$,
  StopTrainingJob$,
  StopTrainingJobCommand,
  StopTrainingJobRequest$,
  StopTransformJob$,
  StopTransformJobCommand,
  StopTransformJobRequest$,
  StorageType,
  StudioLifecycleConfigAppType,
  StudioLifecycleConfigDetails$,
  StudioLifecycleConfigSortKey,
  StudioWebPortal,
  StudioWebPortalSettings$,
  SubscribedWorkteam$,
  SuggestionQuery$,
  TableFormat,
  TabularJobConfig$,
  TabularResolvedAttributes$,
  Tag$,
  TagPropagation,
  TargetDevice,
  TargetPlatform$,
  TargetPlatformAccelerator,
  TargetPlatformArch,
  TargetPlatformOs,
  TargetTrackingScalingPolicyConfiguration$,
  TemplateProviderDetail$,
  TensorBoardAppSettings$,
  TensorBoardOutputConfig$,
  TextClassificationJobConfig$,
  TextGenerationJobConfig$,
  TextGenerationResolvedAttributes$,
  ThroughputConfig$,
  ThroughputConfigDescription$,
  ThroughputConfigUpdate$,
  ThroughputMode,
  TimeSeriesConfig$,
  TimeSeriesForecastingJobConfig$,
  TimeSeriesForecastingSettings$,
  TimeSeriesTransformations$,
  TotalHits$,
  TrackingServerMaintenanceStatus,
  TrackingServerSize,
  TrackingServerStatus,
  TrackingServerSummary$,
  TrafficPattern$,
  TrafficRoutingConfig$,
  TrafficRoutingConfigType,
  TrafficType,
  TrainingImageConfig$,
  TrainingInputMode,
  TrainingInstanceType,
  TrainingJob$,
  TrainingJobDefinition$,
  TrainingJobEarlyStoppingType,
  TrainingJobSortByOptions,
  TrainingJobStatus,
  TrainingJobStatusCounters$,
  TrainingJobStepMetadata$,
  TrainingJobSummary$,
  TrainingPlanFilter$,
  TrainingPlanFilterName,
  TrainingPlanOffering$,
  TrainingPlanSortBy,
  TrainingPlanSortOrder,
  TrainingPlanStatus,
  TrainingPlanSummary$,
  TrainingProgressInfo$,
  TrainingRepositoryAccessMode,
  TrainingRepositoryAuthConfig$,
  TrainingSpecification$,
  TransformDataSource$,
  TransformInput$,
  TransformInstanceType,
  TransformJob$,
  TransformJobDefinition$,
  TransformJobStatus,
  TransformJobStepMetadata$,
  TransformJobSummary$,
  TransformOutput$,
  TransformResources$,
  TransformS3DataSource$,
  Trial$,
  TrialComponent$,
  TrialComponentArtifact$,
  TrialComponentMetricSummary$,
  TrialComponentParameterValue$,
  TrialComponentPrimaryStatus,
  TrialComponentSimpleSummary$,
  TrialComponentSource$,
  TrialComponentSourceDetail$,
  TrialComponentStatus$,
  TrialComponentSummary$,
  TrialSource$,
  TrialSummary$,
  TrustedIdentityPropagationSettings$,
  TtlDuration$,
  TtlDurationUnit,
  TuningJobCompletionCriteria$,
  TuningJobStepMetaData$,
  UiConfig$,
  UiTemplate$,
  UiTemplateInfo$,
  UltraServer$,
  UltraServerHealthStatus,
  UltraServerInfo$,
  UltraServerSummary$,
  UnifiedStudioSettings$,
  UpdateAction$,
  UpdateActionCommand,
  UpdateActionRequest$,
  UpdateActionResponse$,
  UpdateAppImageConfig$,
  UpdateAppImageConfigCommand,
  UpdateAppImageConfigRequest$,
  UpdateAppImageConfigResponse$,
  UpdateArtifact$,
  UpdateArtifactCommand,
  UpdateArtifactRequest$,
  UpdateArtifactResponse$,
  UpdateCluster$,
  UpdateClusterCommand,
  UpdateClusterRequest$,
  UpdateClusterResponse$,
  UpdateClusterSchedulerConfig$,
  UpdateClusterSchedulerConfigCommand,
  UpdateClusterSchedulerConfigRequest$,
  UpdateClusterSchedulerConfigResponse$,
  UpdateClusterSoftware$,
  UpdateClusterSoftwareCommand,
  UpdateClusterSoftwareInstanceGroupSpecification$,
  UpdateClusterSoftwareRequest$,
  UpdateClusterSoftwareResponse$,
  UpdateCodeRepository$,
  UpdateCodeRepositoryCommand,
  UpdateCodeRepositoryInput$,
  UpdateCodeRepositoryOutput$,
  UpdateComputeQuota$,
  UpdateComputeQuotaCommand,
  UpdateComputeQuotaRequest$,
  UpdateComputeQuotaResponse$,
  UpdateContext$,
  UpdateContextCommand,
  UpdateContextRequest$,
  UpdateContextResponse$,
  UpdateDeviceFleet$,
  UpdateDeviceFleetCommand,
  UpdateDeviceFleetRequest$,
  UpdateDevices$,
  UpdateDevicesCommand,
  UpdateDevicesRequest$,
  UpdateDomain$,
  UpdateDomainCommand,
  UpdateDomainRequest$,
  UpdateDomainResponse$,
  UpdateEndpoint$,
  UpdateEndpointCommand,
  UpdateEndpointInput$,
  UpdateEndpointOutput$,
  UpdateEndpointWeightsAndCapacities$,
  UpdateEndpointWeightsAndCapacitiesCommand,
  UpdateEndpointWeightsAndCapacitiesInput$,
  UpdateEndpointWeightsAndCapacitiesOutput$,
  UpdateExperiment$,
  UpdateExperimentCommand,
  UpdateExperimentRequest$,
  UpdateExperimentResponse$,
  UpdateFeatureGroup$,
  UpdateFeatureGroupCommand,
  UpdateFeatureGroupRequest$,
  UpdateFeatureGroupResponse$,
  UpdateFeatureMetadata$,
  UpdateFeatureMetadataCommand,
  UpdateFeatureMetadataRequest$,
  UpdateHub$,
  UpdateHubCommand,
  UpdateHubContent$,
  UpdateHubContentCommand,
  UpdateHubContentReference$,
  UpdateHubContentReferenceCommand,
  UpdateHubContentReferenceRequest$,
  UpdateHubContentReferenceResponse$,
  UpdateHubContentRequest$,
  UpdateHubContentResponse$,
  UpdateHubRequest$,
  UpdateHubResponse$,
  UpdateImage$,
  UpdateImageCommand,
  UpdateImageRequest$,
  UpdateImageResponse$,
  UpdateImageVersion$,
  UpdateImageVersionCommand,
  UpdateImageVersionRequest$,
  UpdateImageVersionResponse$,
  UpdateInferenceComponent$,
  UpdateInferenceComponentCommand,
  UpdateInferenceComponentInput$,
  UpdateInferenceComponentOutput$,
  UpdateInferenceComponentRuntimeConfig$,
  UpdateInferenceComponentRuntimeConfigCommand,
  UpdateInferenceComponentRuntimeConfigInput$,
  UpdateInferenceComponentRuntimeConfigOutput$,
  UpdateInferenceExperiment$,
  UpdateInferenceExperimentCommand,
  UpdateInferenceExperimentRequest$,
  UpdateInferenceExperimentResponse$,
  UpdateMlflowApp$,
  UpdateMlflowAppCommand,
  UpdateMlflowAppRequest$,
  UpdateMlflowAppResponse$,
  UpdateMlflowTrackingServer$,
  UpdateMlflowTrackingServerCommand,
  UpdateMlflowTrackingServerRequest$,
  UpdateMlflowTrackingServerResponse$,
  UpdateModelCard$,
  UpdateModelCardCommand,
  UpdateModelCardRequest$,
  UpdateModelCardResponse$,
  UpdateModelPackage$,
  UpdateModelPackageCommand,
  UpdateModelPackageInput$,
  UpdateModelPackageOutput$,
  UpdateMonitoringAlert$,
  UpdateMonitoringAlertCommand,
  UpdateMonitoringAlertRequest$,
  UpdateMonitoringAlertResponse$,
  UpdateMonitoringSchedule$,
  UpdateMonitoringScheduleCommand,
  UpdateMonitoringScheduleRequest$,
  UpdateMonitoringScheduleResponse$,
  UpdateNotebookInstance$,
  UpdateNotebookInstanceCommand,
  UpdateNotebookInstanceInput$,
  UpdateNotebookInstanceLifecycleConfig$,
  UpdateNotebookInstanceLifecycleConfigCommand,
  UpdateNotebookInstanceLifecycleConfigInput$,
  UpdateNotebookInstanceLifecycleConfigOutput$,
  UpdateNotebookInstanceOutput$,
  UpdatePartnerApp$,
  UpdatePartnerAppCommand,
  UpdatePartnerAppRequest$,
  UpdatePartnerAppResponse$,
  UpdatePipeline$,
  UpdatePipelineCommand,
  UpdatePipelineExecution$,
  UpdatePipelineExecutionCommand,
  UpdatePipelineExecutionRequest$,
  UpdatePipelineExecutionResponse$,
  UpdatePipelineRequest$,
  UpdatePipelineResponse$,
  UpdatePipelineVersion$,
  UpdatePipelineVersionCommand,
  UpdatePipelineVersionRequest$,
  UpdatePipelineVersionResponse$,
  UpdateProject$,
  UpdateProjectCommand,
  UpdateProjectInput$,
  UpdateProjectOutput$,
  UpdateSpace$,
  UpdateSpaceCommand,
  UpdateSpaceRequest$,
  UpdateSpaceResponse$,
  UpdateTemplateProvider$,
  UpdateTrainingJob$,
  UpdateTrainingJobCommand,
  UpdateTrainingJobRequest$,
  UpdateTrainingJobResponse$,
  UpdateTrial$,
  UpdateTrialCommand,
  UpdateTrialComponent$,
  UpdateTrialComponentCommand,
  UpdateTrialComponentRequest$,
  UpdateTrialComponentResponse$,
  UpdateTrialRequest$,
  UpdateTrialResponse$,
  UpdateUserProfile$,
  UpdateUserProfileCommand,
  UpdateUserProfileRequest$,
  UpdateUserProfileResponse$,
  UpdateWorkforce$,
  UpdateWorkforceCommand,
  UpdateWorkforceRequest$,
  UpdateWorkforceResponse$,
  UpdateWorkteam$,
  UpdateWorkteamCommand,
  UpdateWorkteamRequest$,
  UpdateWorkteamResponse$,
  USD$,
  UserContext$,
  UserProfileDetails$,
  UserProfileSortKey,
  UserProfileStatus,
  UserSettings$,
  VariantProperty$,
  VariantPropertyType,
  VariantStatus,
  VectorConfig$,
  VendorGuidance,
  Vertex$,
  VisibilityConditions$,
  VolumeAttachmentStatus,
  VpcConfig$,
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
  WarmPoolResourceStatus,
  WarmPoolStatus$,
  WorkerAccessConfiguration$,
  Workforce$,
  WorkforceIpAddressType,
  WorkforceStatus,
  WorkforceVpcConfigRequest$,
  WorkforceVpcConfigResponse$,
  WorkspaceSettings$,
  Workteam$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerClient === "function");
assert(typeof SageMaker === "function");
// commands
assert(typeof AddAssociationCommand === "function");
assert(typeof AddAssociation$ === "object");
assert(typeof AddTagsCommand === "function");
assert(typeof AddTags$ === "object");
assert(typeof AssociateTrialComponentCommand === "function");
assert(typeof AssociateTrialComponent$ === "object");
assert(typeof AttachClusterNodeVolumeCommand === "function");
assert(typeof AttachClusterNodeVolume$ === "object");
assert(typeof BatchAddClusterNodesCommand === "function");
assert(typeof BatchAddClusterNodes$ === "object");
assert(typeof BatchDeleteClusterNodesCommand === "function");
assert(typeof BatchDeleteClusterNodes$ === "object");
assert(typeof BatchDescribeModelPackageCommand === "function");
assert(typeof BatchDescribeModelPackage$ === "object");
assert(typeof BatchRebootClusterNodesCommand === "function");
assert(typeof BatchRebootClusterNodes$ === "object");
assert(typeof BatchReplaceClusterNodesCommand === "function");
assert(typeof BatchReplaceClusterNodes$ === "object");
assert(typeof CreateActionCommand === "function");
assert(typeof CreateAction$ === "object");
assert(typeof CreateAlgorithmCommand === "function");
assert(typeof CreateAlgorithm$ === "object");
assert(typeof CreateAppCommand === "function");
assert(typeof CreateApp$ === "object");
assert(typeof CreateAppImageConfigCommand === "function");
assert(typeof CreateAppImageConfig$ === "object");
assert(typeof CreateArtifactCommand === "function");
assert(typeof CreateArtifact$ === "object");
assert(typeof CreateAutoMLJobCommand === "function");
assert(typeof CreateAutoMLJob$ === "object");
assert(typeof CreateAutoMLJobV2Command === "function");
assert(typeof CreateAutoMLJobV2$ === "object");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateClusterSchedulerConfigCommand === "function");
assert(typeof CreateClusterSchedulerConfig$ === "object");
assert(typeof CreateCodeRepositoryCommand === "function");
assert(typeof CreateCodeRepository$ === "object");
assert(typeof CreateCompilationJobCommand === "function");
assert(typeof CreateCompilationJob$ === "object");
assert(typeof CreateComputeQuotaCommand === "function");
assert(typeof CreateComputeQuota$ === "object");
assert(typeof CreateContextCommand === "function");
assert(typeof CreateContext$ === "object");
assert(typeof CreateDataQualityJobDefinitionCommand === "function");
assert(typeof CreateDataQualityJobDefinition$ === "object");
assert(typeof CreateDeviceFleetCommand === "function");
assert(typeof CreateDeviceFleet$ === "object");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof CreateEdgeDeploymentPlanCommand === "function");
assert(typeof CreateEdgeDeploymentPlan$ === "object");
assert(typeof CreateEdgeDeploymentStageCommand === "function");
assert(typeof CreateEdgeDeploymentStage$ === "object");
assert(typeof CreateEdgePackagingJobCommand === "function");
assert(typeof CreateEdgePackagingJob$ === "object");
assert(typeof CreateEndpointCommand === "function");
assert(typeof CreateEndpoint$ === "object");
assert(typeof CreateEndpointConfigCommand === "function");
assert(typeof CreateEndpointConfig$ === "object");
assert(typeof CreateExperimentCommand === "function");
assert(typeof CreateExperiment$ === "object");
assert(typeof CreateFeatureGroupCommand === "function");
assert(typeof CreateFeatureGroup$ === "object");
assert(typeof CreateFlowDefinitionCommand === "function");
assert(typeof CreateFlowDefinition$ === "object");
assert(typeof CreateHubCommand === "function");
assert(typeof CreateHub$ === "object");
assert(typeof CreateHubContentPresignedUrlsCommand === "function");
assert(typeof CreateHubContentPresignedUrls$ === "object");
assert(typeof CreateHubContentReferenceCommand === "function");
assert(typeof CreateHubContentReference$ === "object");
assert(typeof CreateHumanTaskUiCommand === "function");
assert(typeof CreateHumanTaskUi$ === "object");
assert(typeof CreateHyperParameterTuningJobCommand === "function");
assert(typeof CreateHyperParameterTuningJob$ === "object");
assert(typeof CreateImageCommand === "function");
assert(typeof CreateImage$ === "object");
assert(typeof CreateImageVersionCommand === "function");
assert(typeof CreateImageVersion$ === "object");
assert(typeof CreateInferenceComponentCommand === "function");
assert(typeof CreateInferenceComponent$ === "object");
assert(typeof CreateInferenceExperimentCommand === "function");
assert(typeof CreateInferenceExperiment$ === "object");
assert(typeof CreateInferenceRecommendationsJobCommand === "function");
assert(typeof CreateInferenceRecommendationsJob$ === "object");
assert(typeof CreateLabelingJobCommand === "function");
assert(typeof CreateLabelingJob$ === "object");
assert(typeof CreateMlflowAppCommand === "function");
assert(typeof CreateMlflowApp$ === "object");
assert(typeof CreateMlflowTrackingServerCommand === "function");
assert(typeof CreateMlflowTrackingServer$ === "object");
assert(typeof CreateModelCommand === "function");
assert(typeof CreateModel$ === "object");
assert(typeof CreateModelBiasJobDefinitionCommand === "function");
assert(typeof CreateModelBiasJobDefinition$ === "object");
assert(typeof CreateModelCardCommand === "function");
assert(typeof CreateModelCard$ === "object");
assert(typeof CreateModelCardExportJobCommand === "function");
assert(typeof CreateModelCardExportJob$ === "object");
assert(typeof CreateModelExplainabilityJobDefinitionCommand === "function");
assert(typeof CreateModelExplainabilityJobDefinition$ === "object");
assert(typeof CreateModelPackageCommand === "function");
assert(typeof CreateModelPackage$ === "object");
assert(typeof CreateModelPackageGroupCommand === "function");
assert(typeof CreateModelPackageGroup$ === "object");
assert(typeof CreateModelQualityJobDefinitionCommand === "function");
assert(typeof CreateModelQualityJobDefinition$ === "object");
assert(typeof CreateMonitoringScheduleCommand === "function");
assert(typeof CreateMonitoringSchedule$ === "object");
assert(typeof CreateNotebookInstanceCommand === "function");
assert(typeof CreateNotebookInstance$ === "object");
assert(typeof CreateNotebookInstanceLifecycleConfigCommand === "function");
assert(typeof CreateNotebookInstanceLifecycleConfig$ === "object");
assert(typeof CreateOptimizationJobCommand === "function");
assert(typeof CreateOptimizationJob$ === "object");
assert(typeof CreatePartnerAppCommand === "function");
assert(typeof CreatePartnerApp$ === "object");
assert(typeof CreatePartnerAppPresignedUrlCommand === "function");
assert(typeof CreatePartnerAppPresignedUrl$ === "object");
assert(typeof CreatePipelineCommand === "function");
assert(typeof CreatePipeline$ === "object");
assert(typeof CreatePresignedDomainUrlCommand === "function");
assert(typeof CreatePresignedDomainUrl$ === "object");
assert(typeof CreatePresignedMlflowAppUrlCommand === "function");
assert(typeof CreatePresignedMlflowAppUrl$ === "object");
assert(typeof CreatePresignedMlflowTrackingServerUrlCommand === "function");
assert(typeof CreatePresignedMlflowTrackingServerUrl$ === "object");
assert(typeof CreatePresignedNotebookInstanceUrlCommand === "function");
assert(typeof CreatePresignedNotebookInstanceUrl$ === "object");
assert(typeof CreateProcessingJobCommand === "function");
assert(typeof CreateProcessingJob$ === "object");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateProject$ === "object");
assert(typeof CreateSpaceCommand === "function");
assert(typeof CreateSpace$ === "object");
assert(typeof CreateStudioLifecycleConfigCommand === "function");
assert(typeof CreateStudioLifecycleConfig$ === "object");
assert(typeof CreateTrainingJobCommand === "function");
assert(typeof CreateTrainingJob$ === "object");
assert(typeof CreateTrainingPlanCommand === "function");
assert(typeof CreateTrainingPlan$ === "object");
assert(typeof CreateTransformJobCommand === "function");
assert(typeof CreateTransformJob$ === "object");
assert(typeof CreateTrialCommand === "function");
assert(typeof CreateTrial$ === "object");
assert(typeof CreateTrialComponentCommand === "function");
assert(typeof CreateTrialComponent$ === "object");
assert(typeof CreateUserProfileCommand === "function");
assert(typeof CreateUserProfile$ === "object");
assert(typeof CreateWorkforceCommand === "function");
assert(typeof CreateWorkforce$ === "object");
assert(typeof CreateWorkteamCommand === "function");
assert(typeof CreateWorkteam$ === "object");
assert(typeof DeleteActionCommand === "function");
assert(typeof DeleteAction$ === "object");
assert(typeof DeleteAlgorithmCommand === "function");
assert(typeof DeleteAlgorithm$ === "object");
assert(typeof DeleteAppCommand === "function");
assert(typeof DeleteApp$ === "object");
assert(typeof DeleteAppImageConfigCommand === "function");
assert(typeof DeleteAppImageConfig$ === "object");
assert(typeof DeleteArtifactCommand === "function");
assert(typeof DeleteArtifact$ === "object");
assert(typeof DeleteAssociationCommand === "function");
assert(typeof DeleteAssociation$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteClusterSchedulerConfigCommand === "function");
assert(typeof DeleteClusterSchedulerConfig$ === "object");
assert(typeof DeleteCodeRepositoryCommand === "function");
assert(typeof DeleteCodeRepository$ === "object");
assert(typeof DeleteCompilationJobCommand === "function");
assert(typeof DeleteCompilationJob$ === "object");
assert(typeof DeleteComputeQuotaCommand === "function");
assert(typeof DeleteComputeQuota$ === "object");
assert(typeof DeleteContextCommand === "function");
assert(typeof DeleteContext$ === "object");
assert(typeof DeleteDataQualityJobDefinitionCommand === "function");
assert(typeof DeleteDataQualityJobDefinition$ === "object");
assert(typeof DeleteDeviceFleetCommand === "function");
assert(typeof DeleteDeviceFleet$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof DeleteEdgeDeploymentPlanCommand === "function");
assert(typeof DeleteEdgeDeploymentPlan$ === "object");
assert(typeof DeleteEdgeDeploymentStageCommand === "function");
assert(typeof DeleteEdgeDeploymentStage$ === "object");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof DeleteEndpoint$ === "object");
assert(typeof DeleteEndpointConfigCommand === "function");
assert(typeof DeleteEndpointConfig$ === "object");
assert(typeof DeleteExperimentCommand === "function");
assert(typeof DeleteExperiment$ === "object");
assert(typeof DeleteFeatureGroupCommand === "function");
assert(typeof DeleteFeatureGroup$ === "object");
assert(typeof DeleteFlowDefinitionCommand === "function");
assert(typeof DeleteFlowDefinition$ === "object");
assert(typeof DeleteHubCommand === "function");
assert(typeof DeleteHub$ === "object");
assert(typeof DeleteHubContentCommand === "function");
assert(typeof DeleteHubContent$ === "object");
assert(typeof DeleteHubContentReferenceCommand === "function");
assert(typeof DeleteHubContentReference$ === "object");
assert(typeof DeleteHumanTaskUiCommand === "function");
assert(typeof DeleteHumanTaskUi$ === "object");
assert(typeof DeleteHyperParameterTuningJobCommand === "function");
assert(typeof DeleteHyperParameterTuningJob$ === "object");
assert(typeof DeleteImageCommand === "function");
assert(typeof DeleteImage$ === "object");
assert(typeof DeleteImageVersionCommand === "function");
assert(typeof DeleteImageVersion$ === "object");
assert(typeof DeleteInferenceComponentCommand === "function");
assert(typeof DeleteInferenceComponent$ === "object");
assert(typeof DeleteInferenceExperimentCommand === "function");
assert(typeof DeleteInferenceExperiment$ === "object");
assert(typeof DeleteMlflowAppCommand === "function");
assert(typeof DeleteMlflowApp$ === "object");
assert(typeof DeleteMlflowTrackingServerCommand === "function");
assert(typeof DeleteMlflowTrackingServer$ === "object");
assert(typeof DeleteModelCommand === "function");
assert(typeof DeleteModel$ === "object");
assert(typeof DeleteModelBiasJobDefinitionCommand === "function");
assert(typeof DeleteModelBiasJobDefinition$ === "object");
assert(typeof DeleteModelCardCommand === "function");
assert(typeof DeleteModelCard$ === "object");
assert(typeof DeleteModelExplainabilityJobDefinitionCommand === "function");
assert(typeof DeleteModelExplainabilityJobDefinition$ === "object");
assert(typeof DeleteModelPackageCommand === "function");
assert(typeof DeleteModelPackage$ === "object");
assert(typeof DeleteModelPackageGroupCommand === "function");
assert(typeof DeleteModelPackageGroup$ === "object");
assert(typeof DeleteModelPackageGroupPolicyCommand === "function");
assert(typeof DeleteModelPackageGroupPolicy$ === "object");
assert(typeof DeleteModelQualityJobDefinitionCommand === "function");
assert(typeof DeleteModelQualityJobDefinition$ === "object");
assert(typeof DeleteMonitoringScheduleCommand === "function");
assert(typeof DeleteMonitoringSchedule$ === "object");
assert(typeof DeleteNotebookInstanceCommand === "function");
assert(typeof DeleteNotebookInstance$ === "object");
assert(typeof DeleteNotebookInstanceLifecycleConfigCommand === "function");
assert(typeof DeleteNotebookInstanceLifecycleConfig$ === "object");
assert(typeof DeleteOptimizationJobCommand === "function");
assert(typeof DeleteOptimizationJob$ === "object");
assert(typeof DeletePartnerAppCommand === "function");
assert(typeof DeletePartnerApp$ === "object");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DeletePipeline$ === "object");
assert(typeof DeleteProcessingJobCommand === "function");
assert(typeof DeleteProcessingJob$ === "object");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteProject$ === "object");
assert(typeof DeleteSpaceCommand === "function");
assert(typeof DeleteSpace$ === "object");
assert(typeof DeleteStudioLifecycleConfigCommand === "function");
assert(typeof DeleteStudioLifecycleConfig$ === "object");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteTags$ === "object");
assert(typeof DeleteTrainingJobCommand === "function");
assert(typeof DeleteTrainingJob$ === "object");
assert(typeof DeleteTrialCommand === "function");
assert(typeof DeleteTrial$ === "object");
assert(typeof DeleteTrialComponentCommand === "function");
assert(typeof DeleteTrialComponent$ === "object");
assert(typeof DeleteUserProfileCommand === "function");
assert(typeof DeleteUserProfile$ === "object");
assert(typeof DeleteWorkforceCommand === "function");
assert(typeof DeleteWorkforce$ === "object");
assert(typeof DeleteWorkteamCommand === "function");
assert(typeof DeleteWorkteam$ === "object");
assert(typeof DeregisterDevicesCommand === "function");
assert(typeof DeregisterDevices$ === "object");
assert(typeof DescribeActionCommand === "function");
assert(typeof DescribeAction$ === "object");
assert(typeof DescribeAlgorithmCommand === "function");
assert(typeof DescribeAlgorithm$ === "object");
assert(typeof DescribeAppCommand === "function");
assert(typeof DescribeApp$ === "object");
assert(typeof DescribeAppImageConfigCommand === "function");
assert(typeof DescribeAppImageConfig$ === "object");
assert(typeof DescribeArtifactCommand === "function");
assert(typeof DescribeArtifact$ === "object");
assert(typeof DescribeAutoMLJobCommand === "function");
assert(typeof DescribeAutoMLJob$ === "object");
assert(typeof DescribeAutoMLJobV2Command === "function");
assert(typeof DescribeAutoMLJobV2$ === "object");
assert(typeof DescribeClusterCommand === "function");
assert(typeof DescribeCluster$ === "object");
assert(typeof DescribeClusterEventCommand === "function");
assert(typeof DescribeClusterEvent$ === "object");
assert(typeof DescribeClusterNodeCommand === "function");
assert(typeof DescribeClusterNode$ === "object");
assert(typeof DescribeClusterSchedulerConfigCommand === "function");
assert(typeof DescribeClusterSchedulerConfig$ === "object");
assert(typeof DescribeCodeRepositoryCommand === "function");
assert(typeof DescribeCodeRepository$ === "object");
assert(typeof DescribeCompilationJobCommand === "function");
assert(typeof DescribeCompilationJob$ === "object");
assert(typeof DescribeComputeQuotaCommand === "function");
assert(typeof DescribeComputeQuota$ === "object");
assert(typeof DescribeContextCommand === "function");
assert(typeof DescribeContext$ === "object");
assert(typeof DescribeDataQualityJobDefinitionCommand === "function");
assert(typeof DescribeDataQualityJobDefinition$ === "object");
assert(typeof DescribeDeviceCommand === "function");
assert(typeof DescribeDevice$ === "object");
assert(typeof DescribeDeviceFleetCommand === "function");
assert(typeof DescribeDeviceFleet$ === "object");
assert(typeof DescribeDomainCommand === "function");
assert(typeof DescribeDomain$ === "object");
assert(typeof DescribeEdgeDeploymentPlanCommand === "function");
assert(typeof DescribeEdgeDeploymentPlan$ === "object");
assert(typeof DescribeEdgePackagingJobCommand === "function");
assert(typeof DescribeEdgePackagingJob$ === "object");
assert(typeof DescribeEndpointCommand === "function");
assert(typeof DescribeEndpoint$ === "object");
assert(typeof DescribeEndpointConfigCommand === "function");
assert(typeof DescribeEndpointConfig$ === "object");
assert(typeof DescribeExperimentCommand === "function");
assert(typeof DescribeExperiment$ === "object");
assert(typeof DescribeFeatureGroupCommand === "function");
assert(typeof DescribeFeatureGroup$ === "object");
assert(typeof DescribeFeatureMetadataCommand === "function");
assert(typeof DescribeFeatureMetadata$ === "object");
assert(typeof DescribeFlowDefinitionCommand === "function");
assert(typeof DescribeFlowDefinition$ === "object");
assert(typeof DescribeHubCommand === "function");
assert(typeof DescribeHub$ === "object");
assert(typeof DescribeHubContentCommand === "function");
assert(typeof DescribeHubContent$ === "object");
assert(typeof DescribeHumanTaskUiCommand === "function");
assert(typeof DescribeHumanTaskUi$ === "object");
assert(typeof DescribeHyperParameterTuningJobCommand === "function");
assert(typeof DescribeHyperParameterTuningJob$ === "object");
assert(typeof DescribeImageCommand === "function");
assert(typeof DescribeImage$ === "object");
assert(typeof DescribeImageVersionCommand === "function");
assert(typeof DescribeImageVersion$ === "object");
assert(typeof DescribeInferenceComponentCommand === "function");
assert(typeof DescribeInferenceComponent$ === "object");
assert(typeof DescribeInferenceExperimentCommand === "function");
assert(typeof DescribeInferenceExperiment$ === "object");
assert(typeof DescribeInferenceRecommendationsJobCommand === "function");
assert(typeof DescribeInferenceRecommendationsJob$ === "object");
assert(typeof DescribeLabelingJobCommand === "function");
assert(typeof DescribeLabelingJob$ === "object");
assert(typeof DescribeLineageGroupCommand === "function");
assert(typeof DescribeLineageGroup$ === "object");
assert(typeof DescribeMlflowAppCommand === "function");
assert(typeof DescribeMlflowApp$ === "object");
assert(typeof DescribeMlflowTrackingServerCommand === "function");
assert(typeof DescribeMlflowTrackingServer$ === "object");
assert(typeof DescribeModelCommand === "function");
assert(typeof DescribeModel$ === "object");
assert(typeof DescribeModelBiasJobDefinitionCommand === "function");
assert(typeof DescribeModelBiasJobDefinition$ === "object");
assert(typeof DescribeModelCardCommand === "function");
assert(typeof DescribeModelCard$ === "object");
assert(typeof DescribeModelCardExportJobCommand === "function");
assert(typeof DescribeModelCardExportJob$ === "object");
assert(typeof DescribeModelExplainabilityJobDefinitionCommand === "function");
assert(typeof DescribeModelExplainabilityJobDefinition$ === "object");
assert(typeof DescribeModelPackageCommand === "function");
assert(typeof DescribeModelPackage$ === "object");
assert(typeof DescribeModelPackageGroupCommand === "function");
assert(typeof DescribeModelPackageGroup$ === "object");
assert(typeof DescribeModelQualityJobDefinitionCommand === "function");
assert(typeof DescribeModelQualityJobDefinition$ === "object");
assert(typeof DescribeMonitoringScheduleCommand === "function");
assert(typeof DescribeMonitoringSchedule$ === "object");
assert(typeof DescribeNotebookInstanceCommand === "function");
assert(typeof DescribeNotebookInstance$ === "object");
assert(typeof DescribeNotebookInstanceLifecycleConfigCommand === "function");
assert(typeof DescribeNotebookInstanceLifecycleConfig$ === "object");
assert(typeof DescribeOptimizationJobCommand === "function");
assert(typeof DescribeOptimizationJob$ === "object");
assert(typeof DescribePartnerAppCommand === "function");
assert(typeof DescribePartnerApp$ === "object");
assert(typeof DescribePipelineCommand === "function");
assert(typeof DescribePipeline$ === "object");
assert(typeof DescribePipelineDefinitionForExecutionCommand === "function");
assert(typeof DescribePipelineDefinitionForExecution$ === "object");
assert(typeof DescribePipelineExecutionCommand === "function");
assert(typeof DescribePipelineExecution$ === "object");
assert(typeof DescribeProcessingJobCommand === "function");
assert(typeof DescribeProcessingJob$ === "object");
assert(typeof DescribeProjectCommand === "function");
assert(typeof DescribeProject$ === "object");
assert(typeof DescribeReservedCapacityCommand === "function");
assert(typeof DescribeReservedCapacity$ === "object");
assert(typeof DescribeSpaceCommand === "function");
assert(typeof DescribeSpace$ === "object");
assert(typeof DescribeStudioLifecycleConfigCommand === "function");
assert(typeof DescribeStudioLifecycleConfig$ === "object");
assert(typeof DescribeSubscribedWorkteamCommand === "function");
assert(typeof DescribeSubscribedWorkteam$ === "object");
assert(typeof DescribeTrainingJobCommand === "function");
assert(typeof DescribeTrainingJob$ === "object");
assert(typeof DescribeTrainingPlanCommand === "function");
assert(typeof DescribeTrainingPlan$ === "object");
assert(typeof DescribeTransformJobCommand === "function");
assert(typeof DescribeTransformJob$ === "object");
assert(typeof DescribeTrialCommand === "function");
assert(typeof DescribeTrial$ === "object");
assert(typeof DescribeTrialComponentCommand === "function");
assert(typeof DescribeTrialComponent$ === "object");
assert(typeof DescribeUserProfileCommand === "function");
assert(typeof DescribeUserProfile$ === "object");
assert(typeof DescribeWorkforceCommand === "function");
assert(typeof DescribeWorkforce$ === "object");
assert(typeof DescribeWorkteamCommand === "function");
assert(typeof DescribeWorkteam$ === "object");
assert(typeof DetachClusterNodeVolumeCommand === "function");
assert(typeof DetachClusterNodeVolume$ === "object");
assert(typeof DisableSagemakerServicecatalogPortfolioCommand === "function");
assert(typeof DisableSagemakerServicecatalogPortfolio$ === "object");
assert(typeof DisassociateTrialComponentCommand === "function");
assert(typeof DisassociateTrialComponent$ === "object");
assert(typeof EnableSagemakerServicecatalogPortfolioCommand === "function");
assert(typeof EnableSagemakerServicecatalogPortfolio$ === "object");
assert(typeof GetDeviceFleetReportCommand === "function");
assert(typeof GetDeviceFleetReport$ === "object");
assert(typeof GetLineageGroupPolicyCommand === "function");
assert(typeof GetLineageGroupPolicy$ === "object");
assert(typeof GetModelPackageGroupPolicyCommand === "function");
assert(typeof GetModelPackageGroupPolicy$ === "object");
assert(typeof GetSagemakerServicecatalogPortfolioStatusCommand === "function");
assert(typeof GetSagemakerServicecatalogPortfolioStatus$ === "object");
assert(typeof GetScalingConfigurationRecommendationCommand === "function");
assert(typeof GetScalingConfigurationRecommendation$ === "object");
assert(typeof GetSearchSuggestionsCommand === "function");
assert(typeof GetSearchSuggestions$ === "object");
assert(typeof ImportHubContentCommand === "function");
assert(typeof ImportHubContent$ === "object");
assert(typeof ListActionsCommand === "function");
assert(typeof ListActions$ === "object");
assert(typeof ListAlgorithmsCommand === "function");
assert(typeof ListAlgorithms$ === "object");
assert(typeof ListAliasesCommand === "function");
assert(typeof ListAliases$ === "object");
assert(typeof ListAppImageConfigsCommand === "function");
assert(typeof ListAppImageConfigs$ === "object");
assert(typeof ListAppsCommand === "function");
assert(typeof ListApps$ === "object");
assert(typeof ListArtifactsCommand === "function");
assert(typeof ListArtifacts$ === "object");
assert(typeof ListAssociationsCommand === "function");
assert(typeof ListAssociations$ === "object");
assert(typeof ListAutoMLJobsCommand === "function");
assert(typeof ListAutoMLJobs$ === "object");
assert(typeof ListCandidatesForAutoMLJobCommand === "function");
assert(typeof ListCandidatesForAutoMLJob$ === "object");
assert(typeof ListClusterEventsCommand === "function");
assert(typeof ListClusterEvents$ === "object");
assert(typeof ListClusterNodesCommand === "function");
assert(typeof ListClusterNodes$ === "object");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusters$ === "object");
assert(typeof ListClusterSchedulerConfigsCommand === "function");
assert(typeof ListClusterSchedulerConfigs$ === "object");
assert(typeof ListCodeRepositoriesCommand === "function");
assert(typeof ListCodeRepositories$ === "object");
assert(typeof ListCompilationJobsCommand === "function");
assert(typeof ListCompilationJobs$ === "object");
assert(typeof ListComputeQuotasCommand === "function");
assert(typeof ListComputeQuotas$ === "object");
assert(typeof ListContextsCommand === "function");
assert(typeof ListContexts$ === "object");
assert(typeof ListDataQualityJobDefinitionsCommand === "function");
assert(typeof ListDataQualityJobDefinitions$ === "object");
assert(typeof ListDeviceFleetsCommand === "function");
assert(typeof ListDeviceFleets$ === "object");
assert(typeof ListDevicesCommand === "function");
assert(typeof ListDevices$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListEdgeDeploymentPlansCommand === "function");
assert(typeof ListEdgeDeploymentPlans$ === "object");
assert(typeof ListEdgePackagingJobsCommand === "function");
assert(typeof ListEdgePackagingJobs$ === "object");
assert(typeof ListEndpointConfigsCommand === "function");
assert(typeof ListEndpointConfigs$ === "object");
assert(typeof ListEndpointsCommand === "function");
assert(typeof ListEndpoints$ === "object");
assert(typeof ListExperimentsCommand === "function");
assert(typeof ListExperiments$ === "object");
assert(typeof ListFeatureGroupsCommand === "function");
assert(typeof ListFeatureGroups$ === "object");
assert(typeof ListFlowDefinitionsCommand === "function");
assert(typeof ListFlowDefinitions$ === "object");
assert(typeof ListHubContentsCommand === "function");
assert(typeof ListHubContents$ === "object");
assert(typeof ListHubContentVersionsCommand === "function");
assert(typeof ListHubContentVersions$ === "object");
assert(typeof ListHubsCommand === "function");
assert(typeof ListHubs$ === "object");
assert(typeof ListHumanTaskUisCommand === "function");
assert(typeof ListHumanTaskUis$ === "object");
assert(typeof ListHyperParameterTuningJobsCommand === "function");
assert(typeof ListHyperParameterTuningJobs$ === "object");
assert(typeof ListImagesCommand === "function");
assert(typeof ListImages$ === "object");
assert(typeof ListImageVersionsCommand === "function");
assert(typeof ListImageVersions$ === "object");
assert(typeof ListInferenceComponentsCommand === "function");
assert(typeof ListInferenceComponents$ === "object");
assert(typeof ListInferenceExperimentsCommand === "function");
assert(typeof ListInferenceExperiments$ === "object");
assert(typeof ListInferenceRecommendationsJobsCommand === "function");
assert(typeof ListInferenceRecommendationsJobs$ === "object");
assert(typeof ListInferenceRecommendationsJobStepsCommand === "function");
assert(typeof ListInferenceRecommendationsJobSteps$ === "object");
assert(typeof ListLabelingJobsCommand === "function");
assert(typeof ListLabelingJobs$ === "object");
assert(typeof ListLabelingJobsForWorkteamCommand === "function");
assert(typeof ListLabelingJobsForWorkteam$ === "object");
assert(typeof ListLineageGroupsCommand === "function");
assert(typeof ListLineageGroups$ === "object");
assert(typeof ListMlflowAppsCommand === "function");
assert(typeof ListMlflowApps$ === "object");
assert(typeof ListMlflowTrackingServersCommand === "function");
assert(typeof ListMlflowTrackingServers$ === "object");
assert(typeof ListModelBiasJobDefinitionsCommand === "function");
assert(typeof ListModelBiasJobDefinitions$ === "object");
assert(typeof ListModelCardExportJobsCommand === "function");
assert(typeof ListModelCardExportJobs$ === "object");
assert(typeof ListModelCardsCommand === "function");
assert(typeof ListModelCards$ === "object");
assert(typeof ListModelCardVersionsCommand === "function");
assert(typeof ListModelCardVersions$ === "object");
assert(typeof ListModelExplainabilityJobDefinitionsCommand === "function");
assert(typeof ListModelExplainabilityJobDefinitions$ === "object");
assert(typeof ListModelMetadataCommand === "function");
assert(typeof ListModelMetadata$ === "object");
assert(typeof ListModelPackageGroupsCommand === "function");
assert(typeof ListModelPackageGroups$ === "object");
assert(typeof ListModelPackagesCommand === "function");
assert(typeof ListModelPackages$ === "object");
assert(typeof ListModelQualityJobDefinitionsCommand === "function");
assert(typeof ListModelQualityJobDefinitions$ === "object");
assert(typeof ListModelsCommand === "function");
assert(typeof ListModels$ === "object");
assert(typeof ListMonitoringAlertHistoryCommand === "function");
assert(typeof ListMonitoringAlertHistory$ === "object");
assert(typeof ListMonitoringAlertsCommand === "function");
assert(typeof ListMonitoringAlerts$ === "object");
assert(typeof ListMonitoringExecutionsCommand === "function");
assert(typeof ListMonitoringExecutions$ === "object");
assert(typeof ListMonitoringSchedulesCommand === "function");
assert(typeof ListMonitoringSchedules$ === "object");
assert(typeof ListNotebookInstanceLifecycleConfigsCommand === "function");
assert(typeof ListNotebookInstanceLifecycleConfigs$ === "object");
assert(typeof ListNotebookInstancesCommand === "function");
assert(typeof ListNotebookInstances$ === "object");
assert(typeof ListOptimizationJobsCommand === "function");
assert(typeof ListOptimizationJobs$ === "object");
assert(typeof ListPartnerAppsCommand === "function");
assert(typeof ListPartnerApps$ === "object");
assert(typeof ListPipelineExecutionsCommand === "function");
assert(typeof ListPipelineExecutions$ === "object");
assert(typeof ListPipelineExecutionStepsCommand === "function");
assert(typeof ListPipelineExecutionSteps$ === "object");
assert(typeof ListPipelineParametersForExecutionCommand === "function");
assert(typeof ListPipelineParametersForExecution$ === "object");
assert(typeof ListPipelinesCommand === "function");
assert(typeof ListPipelines$ === "object");
assert(typeof ListPipelineVersionsCommand === "function");
assert(typeof ListPipelineVersions$ === "object");
assert(typeof ListProcessingJobsCommand === "function");
assert(typeof ListProcessingJobs$ === "object");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListProjects$ === "object");
assert(typeof ListResourceCatalogsCommand === "function");
assert(typeof ListResourceCatalogs$ === "object");
assert(typeof ListSpacesCommand === "function");
assert(typeof ListSpaces$ === "object");
assert(typeof ListStageDevicesCommand === "function");
assert(typeof ListStageDevices$ === "object");
assert(typeof ListStudioLifecycleConfigsCommand === "function");
assert(typeof ListStudioLifecycleConfigs$ === "object");
assert(typeof ListSubscribedWorkteamsCommand === "function");
assert(typeof ListSubscribedWorkteams$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof ListTrainingJobsCommand === "function");
assert(typeof ListTrainingJobs$ === "object");
assert(typeof ListTrainingJobsForHyperParameterTuningJobCommand === "function");
assert(typeof ListTrainingJobsForHyperParameterTuningJob$ === "object");
assert(typeof ListTrainingPlansCommand === "function");
assert(typeof ListTrainingPlans$ === "object");
assert(typeof ListTransformJobsCommand === "function");
assert(typeof ListTransformJobs$ === "object");
assert(typeof ListTrialComponentsCommand === "function");
assert(typeof ListTrialComponents$ === "object");
assert(typeof ListTrialsCommand === "function");
assert(typeof ListTrials$ === "object");
assert(typeof ListUltraServersByReservedCapacityCommand === "function");
assert(typeof ListUltraServersByReservedCapacity$ === "object");
assert(typeof ListUserProfilesCommand === "function");
assert(typeof ListUserProfiles$ === "object");
assert(typeof ListWorkforcesCommand === "function");
assert(typeof ListWorkforces$ === "object");
assert(typeof ListWorkteamsCommand === "function");
assert(typeof ListWorkteams$ === "object");
assert(typeof PutModelPackageGroupPolicyCommand === "function");
assert(typeof PutModelPackageGroupPolicy$ === "object");
assert(typeof QueryLineageCommand === "function");
assert(typeof QueryLineage$ === "object");
assert(typeof RegisterDevicesCommand === "function");
assert(typeof RegisterDevices$ === "object");
assert(typeof RenderUiTemplateCommand === "function");
assert(typeof RenderUiTemplate$ === "object");
assert(typeof RetryPipelineExecutionCommand === "function");
assert(typeof RetryPipelineExecution$ === "object");
assert(typeof SearchCommand === "function");
assert(typeof Search$ === "object");
assert(typeof SearchTrainingPlanOfferingsCommand === "function");
assert(typeof SearchTrainingPlanOfferings$ === "object");
assert(typeof SendPipelineExecutionStepFailureCommand === "function");
assert(typeof SendPipelineExecutionStepFailure$ === "object");
assert(typeof SendPipelineExecutionStepSuccessCommand === "function");
assert(typeof SendPipelineExecutionStepSuccess$ === "object");
assert(typeof StartEdgeDeploymentStageCommand === "function");
assert(typeof StartEdgeDeploymentStage$ === "object");
assert(typeof StartInferenceExperimentCommand === "function");
assert(typeof StartInferenceExperiment$ === "object");
assert(typeof StartMlflowTrackingServerCommand === "function");
assert(typeof StartMlflowTrackingServer$ === "object");
assert(typeof StartMonitoringScheduleCommand === "function");
assert(typeof StartMonitoringSchedule$ === "object");
assert(typeof StartNotebookInstanceCommand === "function");
assert(typeof StartNotebookInstance$ === "object");
assert(typeof StartPipelineExecutionCommand === "function");
assert(typeof StartPipelineExecution$ === "object");
assert(typeof StartSessionCommand === "function");
assert(typeof StartSession$ === "object");
assert(typeof StopAutoMLJobCommand === "function");
assert(typeof StopAutoMLJob$ === "object");
assert(typeof StopCompilationJobCommand === "function");
assert(typeof StopCompilationJob$ === "object");
assert(typeof StopEdgeDeploymentStageCommand === "function");
assert(typeof StopEdgeDeploymentStage$ === "object");
assert(typeof StopEdgePackagingJobCommand === "function");
assert(typeof StopEdgePackagingJob$ === "object");
assert(typeof StopHyperParameterTuningJobCommand === "function");
assert(typeof StopHyperParameterTuningJob$ === "object");
assert(typeof StopInferenceExperimentCommand === "function");
assert(typeof StopInferenceExperiment$ === "object");
assert(typeof StopInferenceRecommendationsJobCommand === "function");
assert(typeof StopInferenceRecommendationsJob$ === "object");
assert(typeof StopLabelingJobCommand === "function");
assert(typeof StopLabelingJob$ === "object");
assert(typeof StopMlflowTrackingServerCommand === "function");
assert(typeof StopMlflowTrackingServer$ === "object");
assert(typeof StopMonitoringScheduleCommand === "function");
assert(typeof StopMonitoringSchedule$ === "object");
assert(typeof StopNotebookInstanceCommand === "function");
assert(typeof StopNotebookInstance$ === "object");
assert(typeof StopOptimizationJobCommand === "function");
assert(typeof StopOptimizationJob$ === "object");
assert(typeof StopPipelineExecutionCommand === "function");
assert(typeof StopPipelineExecution$ === "object");
assert(typeof StopProcessingJobCommand === "function");
assert(typeof StopProcessingJob$ === "object");
assert(typeof StopTrainingJobCommand === "function");
assert(typeof StopTrainingJob$ === "object");
assert(typeof StopTransformJobCommand === "function");
assert(typeof StopTransformJob$ === "object");
assert(typeof UpdateActionCommand === "function");
assert(typeof UpdateAction$ === "object");
assert(typeof UpdateAppImageConfigCommand === "function");
assert(typeof UpdateAppImageConfig$ === "object");
assert(typeof UpdateArtifactCommand === "function");
assert(typeof UpdateArtifact$ === "object");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateCluster$ === "object");
assert(typeof UpdateClusterSchedulerConfigCommand === "function");
assert(typeof UpdateClusterSchedulerConfig$ === "object");
assert(typeof UpdateClusterSoftwareCommand === "function");
assert(typeof UpdateClusterSoftware$ === "object");
assert(typeof UpdateCodeRepositoryCommand === "function");
assert(typeof UpdateCodeRepository$ === "object");
assert(typeof UpdateComputeQuotaCommand === "function");
assert(typeof UpdateComputeQuota$ === "object");
assert(typeof UpdateContextCommand === "function");
assert(typeof UpdateContext$ === "object");
assert(typeof UpdateDeviceFleetCommand === "function");
assert(typeof UpdateDeviceFleet$ === "object");
assert(typeof UpdateDevicesCommand === "function");
assert(typeof UpdateDevices$ === "object");
assert(typeof UpdateDomainCommand === "function");
assert(typeof UpdateDomain$ === "object");
assert(typeof UpdateEndpointCommand === "function");
assert(typeof UpdateEndpoint$ === "object");
assert(typeof UpdateEndpointWeightsAndCapacitiesCommand === "function");
assert(typeof UpdateEndpointWeightsAndCapacities$ === "object");
assert(typeof UpdateExperimentCommand === "function");
assert(typeof UpdateExperiment$ === "object");
assert(typeof UpdateFeatureGroupCommand === "function");
assert(typeof UpdateFeatureGroup$ === "object");
assert(typeof UpdateFeatureMetadataCommand === "function");
assert(typeof UpdateFeatureMetadata$ === "object");
assert(typeof UpdateHubCommand === "function");
assert(typeof UpdateHub$ === "object");
assert(typeof UpdateHubContentCommand === "function");
assert(typeof UpdateHubContent$ === "object");
assert(typeof UpdateHubContentReferenceCommand === "function");
assert(typeof UpdateHubContentReference$ === "object");
assert(typeof UpdateImageCommand === "function");
assert(typeof UpdateImage$ === "object");
assert(typeof UpdateImageVersionCommand === "function");
assert(typeof UpdateImageVersion$ === "object");
assert(typeof UpdateInferenceComponentCommand === "function");
assert(typeof UpdateInferenceComponent$ === "object");
assert(typeof UpdateInferenceComponentRuntimeConfigCommand === "function");
assert(typeof UpdateInferenceComponentRuntimeConfig$ === "object");
assert(typeof UpdateInferenceExperimentCommand === "function");
assert(typeof UpdateInferenceExperiment$ === "object");
assert(typeof UpdateMlflowAppCommand === "function");
assert(typeof UpdateMlflowApp$ === "object");
assert(typeof UpdateMlflowTrackingServerCommand === "function");
assert(typeof UpdateMlflowTrackingServer$ === "object");
assert(typeof UpdateModelCardCommand === "function");
assert(typeof UpdateModelCard$ === "object");
assert(typeof UpdateModelPackageCommand === "function");
assert(typeof UpdateModelPackage$ === "object");
assert(typeof UpdateMonitoringAlertCommand === "function");
assert(typeof UpdateMonitoringAlert$ === "object");
assert(typeof UpdateMonitoringScheduleCommand === "function");
assert(typeof UpdateMonitoringSchedule$ === "object");
assert(typeof UpdateNotebookInstanceCommand === "function");
assert(typeof UpdateNotebookInstance$ === "object");
assert(typeof UpdateNotebookInstanceLifecycleConfigCommand === "function");
assert(typeof UpdateNotebookInstanceLifecycleConfig$ === "object");
assert(typeof UpdatePartnerAppCommand === "function");
assert(typeof UpdatePartnerApp$ === "object");
assert(typeof UpdatePipelineCommand === "function");
assert(typeof UpdatePipeline$ === "object");
assert(typeof UpdatePipelineExecutionCommand === "function");
assert(typeof UpdatePipelineExecution$ === "object");
assert(typeof UpdatePipelineVersionCommand === "function");
assert(typeof UpdatePipelineVersion$ === "object");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateProject$ === "object");
assert(typeof UpdateSpaceCommand === "function");
assert(typeof UpdateSpace$ === "object");
assert(typeof UpdateTrainingJobCommand === "function");
assert(typeof UpdateTrainingJob$ === "object");
assert(typeof UpdateTrialCommand === "function");
assert(typeof UpdateTrial$ === "object");
assert(typeof UpdateTrialComponentCommand === "function");
assert(typeof UpdateTrialComponent$ === "object");
assert(typeof UpdateUserProfileCommand === "function");
assert(typeof UpdateUserProfile$ === "object");
assert(typeof UpdateWorkforceCommand === "function");
assert(typeof UpdateWorkforce$ === "object");
assert(typeof UpdateWorkteamCommand === "function");
assert(typeof UpdateWorkteam$ === "object");
// structural schemas
assert(typeof AcceleratorPartitionConfig$ === "object");
assert(typeof ActionSource$ === "object");
assert(typeof ActionSummary$ === "object");
assert(typeof AddAssociationRequest$ === "object");
assert(typeof AddAssociationResponse$ === "object");
assert(typeof AddClusterNodeSpecification$ === "object");
assert(typeof AdditionalEnis$ === "object");
assert(typeof AdditionalInferenceSpecificationDefinition$ === "object");
assert(typeof AdditionalModelDataSource$ === "object");
assert(typeof AdditionalS3DataSource$ === "object");
assert(typeof AddTagsInput$ === "object");
assert(typeof AddTagsOutput$ === "object");
assert(typeof AgentVersion$ === "object");
assert(typeof Alarm$ === "object");
assert(typeof AlarmDetails$ === "object");
assert(typeof AlgorithmSpecification$ === "object");
assert(typeof AlgorithmStatusDetails$ === "object");
assert(typeof AlgorithmStatusItem$ === "object");
assert(typeof AlgorithmSummary$ === "object");
assert(typeof AlgorithmValidationProfile$ === "object");
assert(typeof AlgorithmValidationSpecification$ === "object");
assert(typeof AmazonQSettings$ === "object");
assert(typeof AnnotationConsolidationConfig$ === "object");
assert(typeof AppDetails$ === "object");
assert(typeof AppImageConfigDetails$ === "object");
assert(typeof AppLifecycleManagement$ === "object");
assert(typeof AppSpecification$ === "object");
assert(typeof ArtifactSource$ === "object");
assert(typeof ArtifactSourceType$ === "object");
assert(typeof ArtifactSummary$ === "object");
assert(typeof AssociateTrialComponentRequest$ === "object");
assert(typeof AssociateTrialComponentResponse$ === "object");
assert(typeof AssociationInfo$ === "object");
assert(typeof AssociationSummary$ === "object");
assert(typeof AsyncInferenceClientConfig$ === "object");
assert(typeof AsyncInferenceConfig$ === "object");
assert(typeof AsyncInferenceNotificationConfig$ === "object");
assert(typeof AsyncInferenceOutputConfig$ === "object");
assert(typeof AthenaDatasetDefinition$ === "object");
assert(typeof AttachClusterNodeVolumeRequest$ === "object");
assert(typeof AttachClusterNodeVolumeResponse$ === "object");
assert(typeof AuthorizedUrl$ === "object");
assert(typeof AutoMLAlgorithmConfig$ === "object");
assert(typeof AutoMLCandidate$ === "object");
assert(typeof AutoMLCandidateGenerationConfig$ === "object");
assert(typeof AutoMLCandidateStep$ === "object");
assert(typeof AutoMLChannel$ === "object");
assert(typeof AutoMLComputeConfig$ === "object");
assert(typeof AutoMLContainerDefinition$ === "object");
assert(typeof AutoMLDataSource$ === "object");
assert(typeof AutoMLDataSplitConfig$ === "object");
assert(typeof AutoMLJobArtifacts$ === "object");
assert(typeof AutoMLJobChannel$ === "object");
assert(typeof AutoMLJobCompletionCriteria$ === "object");
assert(typeof AutoMLJobConfig$ === "object");
assert(typeof AutoMLJobObjective$ === "object");
assert(typeof AutoMLJobStepMetadata$ === "object");
assert(typeof AutoMLJobSummary$ === "object");
assert(typeof AutoMLOutputDataConfig$ === "object");
assert(typeof AutoMLPartialFailureReason$ === "object");
assert(typeof AutoMLProblemTypeConfig$ === "object");
assert(typeof AutoMLProblemTypeResolvedAttributes$ === "object");
assert(typeof AutoMLResolvedAttributes$ === "object");
assert(typeof AutoMLS3DataSource$ === "object");
assert(typeof AutoMLSecurityConfig$ === "object");
assert(typeof AutoParameter$ === "object");
assert(typeof AutoRollbackConfig$ === "object");
assert(typeof Autotune$ === "object");
assert(typeof AvailableUpgrade$ === "object");
assert(typeof BaseModel$ === "object");
assert(typeof BatchAddClusterNodesError$ === "object");
assert(typeof BatchAddClusterNodesRequest$ === "object");
assert(typeof BatchAddClusterNodesResponse$ === "object");
assert(typeof BatchDataCaptureConfig$ === "object");
assert(typeof BatchDeleteClusterNodeLogicalIdsError$ === "object");
assert(typeof BatchDeleteClusterNodesError$ === "object");
assert(typeof BatchDeleteClusterNodesRequest$ === "object");
assert(typeof BatchDeleteClusterNodesResponse$ === "object");
assert(typeof BatchDescribeModelPackageError$ === "object");
assert(typeof BatchDescribeModelPackageInput$ === "object");
assert(typeof BatchDescribeModelPackageOutput$ === "object");
assert(typeof BatchDescribeModelPackageSummary$ === "object");
assert(typeof BatchRebootClusterNodeLogicalIdsError$ === "object");
assert(typeof BatchRebootClusterNodesError$ === "object");
assert(typeof BatchRebootClusterNodesRequest$ === "object");
assert(typeof BatchRebootClusterNodesResponse$ === "object");
assert(typeof BatchReplaceClusterNodeLogicalIdsError$ === "object");
assert(typeof BatchReplaceClusterNodesError$ === "object");
assert(typeof BatchReplaceClusterNodesRequest$ === "object");
assert(typeof BatchReplaceClusterNodesResponse$ === "object");
assert(typeof BatchTransformInput$ === "object");
assert(typeof BedrockCustomModelDeploymentMetadata$ === "object");
assert(typeof BedrockCustomModelMetadata$ === "object");
assert(typeof BedrockModelImportMetadata$ === "object");
assert(typeof BedrockProvisionedModelThroughputMetadata$ === "object");
assert(typeof BestObjectiveNotImproving$ === "object");
assert(typeof Bias$ === "object");
assert(typeof BlueGreenUpdatePolicy$ === "object");
assert(typeof CacheHitResult$ === "object");
assert(typeof CallbackStepMetadata$ === "object");
assert(typeof CandidateArtifactLocations$ === "object");
assert(typeof CandidateGenerationConfig$ === "object");
assert(typeof CandidateProperties$ === "object");
assert(typeof CanvasAppSettings$ === "object");
assert(typeof CapacityReservation$ === "object");
assert(typeof CapacitySize$ === "object");
assert(typeof CapacitySizeConfig$ === "object");
assert(typeof CaptureContentTypeHeader$ === "object");
assert(typeof CaptureOption$ === "object");
assert(typeof CategoricalParameter$ === "object");
assert(typeof CategoricalParameterRange$ === "object");
assert(typeof CategoricalParameterRangeSpecification$ === "object");
assert(typeof CfnCreateTemplateProvider$ === "object");
assert(typeof CfnStackCreateParameter$ === "object");
assert(typeof CfnStackDetail$ === "object");
assert(typeof CfnStackParameter$ === "object");
assert(typeof CfnStackUpdateParameter$ === "object");
assert(typeof CfnTemplateProviderDetail$ === "object");
assert(typeof CfnUpdateTemplateProvider$ === "object");
assert(typeof Channel$ === "object");
assert(typeof ChannelSpecification$ === "object");
assert(typeof CheckpointConfig$ === "object");
assert(typeof ClarifyCheckStepMetadata$ === "object");
assert(typeof ClarifyExplainerConfig$ === "object");
assert(typeof ClarifyInferenceConfig$ === "object");
assert(typeof ClarifyShapBaselineConfig$ === "object");
assert(typeof ClarifyShapConfig$ === "object");
assert(typeof ClarifyTextConfig$ === "object");
assert(typeof ClusterAutoScalingConfig$ === "object");
assert(typeof ClusterAutoScalingConfigOutput$ === "object");
assert(typeof ClusterCapacityRequirements$ === "object");
assert(typeof ClusterEbsVolumeConfig$ === "object");
assert(typeof ClusterEventDetail$ === "object");
assert(typeof ClusterEventSummary$ === "object");
assert(typeof ClusterInstanceGroupDetails$ === "object");
assert(typeof ClusterInstanceGroupSpecification$ === "object");
assert(typeof ClusterInstancePlacement$ === "object");
assert(typeof ClusterInstanceStatusDetails$ === "object");
assert(typeof ClusterInstanceStorageConfig$ === "object");
assert(typeof ClusterKubernetesConfig$ === "object");
assert(typeof ClusterKubernetesConfigDetails$ === "object");
assert(typeof ClusterKubernetesConfigNodeDetails$ === "object");
assert(typeof ClusterKubernetesTaint$ === "object");
assert(typeof ClusterLifeCycleConfig$ === "object");
assert(typeof ClusterMetadata$ === "object");
assert(typeof ClusterNodeDetails$ === "object");
assert(typeof ClusterNodeSummary$ === "object");
assert(typeof ClusterOnDemandOptions$ === "object");
assert(typeof ClusterOrchestrator$ === "object");
assert(typeof ClusterOrchestratorEksConfig$ === "object");
assert(typeof ClusterRestrictedInstanceGroupDetails$ === "object");
assert(typeof ClusterRestrictedInstanceGroupSpecification$ === "object");
assert(typeof ClusterSchedulerConfigSummary$ === "object");
assert(typeof ClusterSpotOptions$ === "object");
assert(typeof ClusterSummary$ === "object");
assert(typeof ClusterTieredStorageConfig$ === "object");
assert(typeof CodeEditorAppImageConfig$ === "object");
assert(typeof CodeEditorAppSettings$ === "object");
assert(typeof CodeRepository$ === "object");
assert(typeof CodeRepositorySummary$ === "object");
assert(typeof CognitoConfig$ === "object");
assert(typeof CognitoMemberDefinition$ === "object");
assert(typeof CollectionConfig$ === "object");
assert(typeof CollectionConfiguration$ === "object");
assert(typeof CompilationJobSummary$ === "object");
assert(typeof ComputeQuotaConfig$ === "object");
assert(typeof ComputeQuotaResourceConfig$ === "object");
assert(typeof ComputeQuotaSummary$ === "object");
assert(typeof ComputeQuotaTarget$ === "object");
assert(typeof ConditionStepMetadata$ === "object");
assert(typeof ContainerConfig$ === "object");
assert(typeof ContainerDefinition$ === "object");
assert(typeof ContextSource$ === "object");
assert(typeof ContextSummary$ === "object");
assert(typeof ContinuousParameterRange$ === "object");
assert(typeof ContinuousParameterRangeSpecification$ === "object");
assert(typeof ConvergenceDetected$ === "object");
assert(typeof CreateActionRequest$ === "object");
assert(typeof CreateActionResponse$ === "object");
assert(typeof CreateAlgorithmInput$ === "object");
assert(typeof CreateAlgorithmOutput$ === "object");
assert(typeof CreateAppImageConfigRequest$ === "object");
assert(typeof CreateAppImageConfigResponse$ === "object");
assert(typeof CreateAppRequest$ === "object");
assert(typeof CreateAppResponse$ === "object");
assert(typeof CreateArtifactRequest$ === "object");
assert(typeof CreateArtifactResponse$ === "object");
assert(typeof CreateAutoMLJobRequest$ === "object");
assert(typeof CreateAutoMLJobResponse$ === "object");
assert(typeof CreateAutoMLJobV2Request$ === "object");
assert(typeof CreateAutoMLJobV2Response$ === "object");
assert(typeof CreateClusterRequest$ === "object");
assert(typeof CreateClusterResponse$ === "object");
assert(typeof CreateClusterSchedulerConfigRequest$ === "object");
assert(typeof CreateClusterSchedulerConfigResponse$ === "object");
assert(typeof CreateCodeRepositoryInput$ === "object");
assert(typeof CreateCodeRepositoryOutput$ === "object");
assert(typeof CreateCompilationJobRequest$ === "object");
assert(typeof CreateCompilationJobResponse$ === "object");
assert(typeof CreateComputeQuotaRequest$ === "object");
assert(typeof CreateComputeQuotaResponse$ === "object");
assert(typeof CreateContextRequest$ === "object");
assert(typeof CreateContextResponse$ === "object");
assert(typeof CreateDataQualityJobDefinitionRequest$ === "object");
assert(typeof CreateDataQualityJobDefinitionResponse$ === "object");
assert(typeof CreateDeviceFleetRequest$ === "object");
assert(typeof CreateDomainRequest$ === "object");
assert(typeof CreateDomainResponse$ === "object");
assert(typeof CreateEdgeDeploymentPlanRequest$ === "object");
assert(typeof CreateEdgeDeploymentPlanResponse$ === "object");
assert(typeof CreateEdgeDeploymentStageRequest$ === "object");
assert(typeof CreateEdgePackagingJobRequest$ === "object");
assert(typeof CreateEndpointConfigInput$ === "object");
assert(typeof CreateEndpointConfigOutput$ === "object");
assert(typeof CreateEndpointInput$ === "object");
assert(typeof CreateEndpointOutput$ === "object");
assert(typeof CreateExperimentRequest$ === "object");
assert(typeof CreateExperimentResponse$ === "object");
assert(typeof CreateFeatureGroupRequest$ === "object");
assert(typeof CreateFeatureGroupResponse$ === "object");
assert(typeof CreateFlowDefinitionRequest$ === "object");
assert(typeof CreateFlowDefinitionResponse$ === "object");
assert(typeof CreateHubContentPresignedUrlsRequest$ === "object");
assert(typeof CreateHubContentPresignedUrlsResponse$ === "object");
assert(typeof CreateHubContentReferenceRequest$ === "object");
assert(typeof CreateHubContentReferenceResponse$ === "object");
assert(typeof CreateHubRequest$ === "object");
assert(typeof CreateHubResponse$ === "object");
assert(typeof CreateHumanTaskUiRequest$ === "object");
assert(typeof CreateHumanTaskUiResponse$ === "object");
assert(typeof CreateHyperParameterTuningJobRequest$ === "object");
assert(typeof CreateHyperParameterTuningJobResponse$ === "object");
assert(typeof CreateImageRequest$ === "object");
assert(typeof CreateImageResponse$ === "object");
assert(typeof CreateImageVersionRequest$ === "object");
assert(typeof CreateImageVersionResponse$ === "object");
assert(typeof CreateInferenceComponentInput$ === "object");
assert(typeof CreateInferenceComponentOutput$ === "object");
assert(typeof CreateInferenceExperimentRequest$ === "object");
assert(typeof CreateInferenceExperimentResponse$ === "object");
assert(typeof CreateInferenceRecommendationsJobRequest$ === "object");
assert(typeof CreateInferenceRecommendationsJobResponse$ === "object");
assert(typeof CreateLabelingJobRequest$ === "object");
assert(typeof CreateLabelingJobResponse$ === "object");
assert(typeof CreateMlflowAppRequest$ === "object");
assert(typeof CreateMlflowAppResponse$ === "object");
assert(typeof CreateMlflowTrackingServerRequest$ === "object");
assert(typeof CreateMlflowTrackingServerResponse$ === "object");
assert(typeof CreateModelBiasJobDefinitionRequest$ === "object");
assert(typeof CreateModelBiasJobDefinitionResponse$ === "object");
assert(typeof CreateModelCardExportJobRequest$ === "object");
assert(typeof CreateModelCardExportJobResponse$ === "object");
assert(typeof CreateModelCardRequest$ === "object");
assert(typeof CreateModelCardResponse$ === "object");
assert(typeof CreateModelExplainabilityJobDefinitionRequest$ === "object");
assert(typeof CreateModelExplainabilityJobDefinitionResponse$ === "object");
assert(typeof CreateModelInput$ === "object");
assert(typeof CreateModelOutput$ === "object");
assert(typeof CreateModelPackageGroupInput$ === "object");
assert(typeof CreateModelPackageGroupOutput$ === "object");
assert(typeof CreateModelPackageInput$ === "object");
assert(typeof CreateModelPackageOutput$ === "object");
assert(typeof CreateModelQualityJobDefinitionRequest$ === "object");
assert(typeof CreateModelQualityJobDefinitionResponse$ === "object");
assert(typeof CreateMonitoringScheduleRequest$ === "object");
assert(typeof CreateMonitoringScheduleResponse$ === "object");
assert(typeof CreateNotebookInstanceInput$ === "object");
assert(typeof CreateNotebookInstanceLifecycleConfigInput$ === "object");
assert(typeof CreateNotebookInstanceLifecycleConfigOutput$ === "object");
assert(typeof CreateNotebookInstanceOutput$ === "object");
assert(typeof CreateOptimizationJobRequest$ === "object");
assert(typeof CreateOptimizationJobResponse$ === "object");
assert(typeof CreatePartnerAppPresignedUrlRequest$ === "object");
assert(typeof CreatePartnerAppPresignedUrlResponse$ === "object");
assert(typeof CreatePartnerAppRequest$ === "object");
assert(typeof CreatePartnerAppResponse$ === "object");
assert(typeof CreatePipelineRequest$ === "object");
assert(typeof CreatePipelineResponse$ === "object");
assert(typeof CreatePresignedDomainUrlRequest$ === "object");
assert(typeof CreatePresignedDomainUrlResponse$ === "object");
assert(typeof CreatePresignedMlflowAppUrlRequest$ === "object");
assert(typeof CreatePresignedMlflowAppUrlResponse$ === "object");
assert(typeof CreatePresignedMlflowTrackingServerUrlRequest$ === "object");
assert(typeof CreatePresignedMlflowTrackingServerUrlResponse$ === "object");
assert(typeof CreatePresignedNotebookInstanceUrlInput$ === "object");
assert(typeof CreatePresignedNotebookInstanceUrlOutput$ === "object");
assert(typeof CreateProcessingJobRequest$ === "object");
assert(typeof CreateProcessingJobResponse$ === "object");
assert(typeof CreateProjectInput$ === "object");
assert(typeof CreateProjectOutput$ === "object");
assert(typeof CreateSpaceRequest$ === "object");
assert(typeof CreateSpaceResponse$ === "object");
assert(typeof CreateStudioLifecycleConfigRequest$ === "object");
assert(typeof CreateStudioLifecycleConfigResponse$ === "object");
assert(typeof CreateTemplateProvider$ === "object");
assert(typeof CreateTrainingJobRequest$ === "object");
assert(typeof CreateTrainingJobResponse$ === "object");
assert(typeof CreateTrainingPlanRequest$ === "object");
assert(typeof CreateTrainingPlanResponse$ === "object");
assert(typeof CreateTransformJobRequest$ === "object");
assert(typeof CreateTransformJobResponse$ === "object");
assert(typeof CreateTrialComponentRequest$ === "object");
assert(typeof CreateTrialComponentResponse$ === "object");
assert(typeof CreateTrialRequest$ === "object");
assert(typeof CreateTrialResponse$ === "object");
assert(typeof CreateUserProfileRequest$ === "object");
assert(typeof CreateUserProfileResponse$ === "object");
assert(typeof CreateWorkforceRequest$ === "object");
assert(typeof CreateWorkforceResponse$ === "object");
assert(typeof CreateWorkteamRequest$ === "object");
assert(typeof CreateWorkteamResponse$ === "object");
assert(typeof CustomFileSystem$ === "object");
assert(typeof CustomFileSystemConfig$ === "object");
assert(typeof CustomImage$ === "object");
assert(typeof CustomizedMetricSpecification$ === "object");
assert(typeof CustomPosixUserConfig$ === "object");
assert(typeof DataCaptureConfig$ === "object");
assert(typeof DataCaptureConfigSummary$ === "object");
assert(typeof DataCatalogConfig$ === "object");
assert(typeof DataProcessing$ === "object");
assert(typeof DataQualityAppSpecification$ === "object");
assert(typeof DataQualityBaselineConfig$ === "object");
assert(typeof DataQualityJobInput$ === "object");
assert(typeof DatasetDefinition$ === "object");
assert(typeof DatasetSource$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DebugHookConfig$ === "object");
assert(typeof DebugRuleConfiguration$ === "object");
assert(typeof DebugRuleEvaluationStatus$ === "object");
assert(typeof DefaultEbsStorageSettings$ === "object");
assert(typeof DefaultSpaceSettings$ === "object");
assert(typeof DefaultSpaceStorageSettings$ === "object");
assert(typeof DeleteActionRequest$ === "object");
assert(typeof DeleteActionResponse$ === "object");
assert(typeof DeleteAlgorithmInput$ === "object");
assert(typeof DeleteAppImageConfigRequest$ === "object");
assert(typeof DeleteAppRequest$ === "object");
assert(typeof DeleteArtifactRequest$ === "object");
assert(typeof DeleteArtifactResponse$ === "object");
assert(typeof DeleteAssociationRequest$ === "object");
assert(typeof DeleteAssociationResponse$ === "object");
assert(typeof DeleteClusterRequest$ === "object");
assert(typeof DeleteClusterResponse$ === "object");
assert(typeof DeleteClusterSchedulerConfigRequest$ === "object");
assert(typeof DeleteCodeRepositoryInput$ === "object");
assert(typeof DeleteCompilationJobRequest$ === "object");
assert(typeof DeleteComputeQuotaRequest$ === "object");
assert(typeof DeleteContextRequest$ === "object");
assert(typeof DeleteContextResponse$ === "object");
assert(typeof DeleteDataQualityJobDefinitionRequest$ === "object");
assert(typeof DeleteDeviceFleetRequest$ === "object");
assert(typeof DeleteDomainRequest$ === "object");
assert(typeof DeleteEdgeDeploymentPlanRequest$ === "object");
assert(typeof DeleteEdgeDeploymentStageRequest$ === "object");
assert(typeof DeleteEndpointConfigInput$ === "object");
assert(typeof DeleteEndpointInput$ === "object");
assert(typeof DeleteExperimentRequest$ === "object");
assert(typeof DeleteExperimentResponse$ === "object");
assert(typeof DeleteFeatureGroupRequest$ === "object");
assert(typeof DeleteFlowDefinitionRequest$ === "object");
assert(typeof DeleteFlowDefinitionResponse$ === "object");
assert(typeof DeleteHubContentReferenceRequest$ === "object");
assert(typeof DeleteHubContentRequest$ === "object");
assert(typeof DeleteHubRequest$ === "object");
assert(typeof DeleteHumanTaskUiRequest$ === "object");
assert(typeof DeleteHumanTaskUiResponse$ === "object");
assert(typeof DeleteHyperParameterTuningJobRequest$ === "object");
assert(typeof DeleteImageRequest$ === "object");
assert(typeof DeleteImageResponse$ === "object");
assert(typeof DeleteImageVersionRequest$ === "object");
assert(typeof DeleteImageVersionResponse$ === "object");
assert(typeof DeleteInferenceComponentInput$ === "object");
assert(typeof DeleteInferenceExperimentRequest$ === "object");
assert(typeof DeleteInferenceExperimentResponse$ === "object");
assert(typeof DeleteMlflowAppRequest$ === "object");
assert(typeof DeleteMlflowAppResponse$ === "object");
assert(typeof DeleteMlflowTrackingServerRequest$ === "object");
assert(typeof DeleteMlflowTrackingServerResponse$ === "object");
assert(typeof DeleteModelBiasJobDefinitionRequest$ === "object");
assert(typeof DeleteModelCardRequest$ === "object");
assert(typeof DeleteModelExplainabilityJobDefinitionRequest$ === "object");
assert(typeof DeleteModelInput$ === "object");
assert(typeof DeleteModelPackageGroupInput$ === "object");
assert(typeof DeleteModelPackageGroupPolicyInput$ === "object");
assert(typeof DeleteModelPackageInput$ === "object");
assert(typeof DeleteModelQualityJobDefinitionRequest$ === "object");
assert(typeof DeleteMonitoringScheduleRequest$ === "object");
assert(typeof DeleteNotebookInstanceInput$ === "object");
assert(typeof DeleteNotebookInstanceLifecycleConfigInput$ === "object");
assert(typeof DeleteOptimizationJobRequest$ === "object");
assert(typeof DeletePartnerAppRequest$ === "object");
assert(typeof DeletePartnerAppResponse$ === "object");
assert(typeof DeletePipelineRequest$ === "object");
assert(typeof DeletePipelineResponse$ === "object");
assert(typeof DeleteProcessingJobRequest$ === "object");
assert(typeof DeleteProjectInput$ === "object");
assert(typeof DeleteSpaceRequest$ === "object");
assert(typeof DeleteStudioLifecycleConfigRequest$ === "object");
assert(typeof DeleteTagsInput$ === "object");
assert(typeof DeleteTagsOutput$ === "object");
assert(typeof DeleteTrainingJobRequest$ === "object");
assert(typeof DeleteTrialComponentRequest$ === "object");
assert(typeof DeleteTrialComponentResponse$ === "object");
assert(typeof DeleteTrialRequest$ === "object");
assert(typeof DeleteTrialResponse$ === "object");
assert(typeof DeleteUserProfileRequest$ === "object");
assert(typeof DeleteWorkforceRequest$ === "object");
assert(typeof DeleteWorkforceResponse$ === "object");
assert(typeof DeleteWorkteamRequest$ === "object");
assert(typeof DeleteWorkteamResponse$ === "object");
assert(typeof DeployedImage$ === "object");
assert(typeof DeploymentConfig$ === "object");
assert(typeof DeploymentConfiguration$ === "object");
assert(typeof DeploymentRecommendation$ === "object");
assert(typeof DeploymentStage$ === "object");
assert(typeof DeploymentStageStatusSummary$ === "object");
assert(typeof DeregisterDevicesRequest$ === "object");
assert(typeof DerivedInformation$ === "object");
assert(typeof DescribeActionRequest$ === "object");
assert(typeof DescribeActionResponse$ === "object");
assert(typeof DescribeAlgorithmInput$ === "object");
assert(typeof DescribeAlgorithmOutput$ === "object");
assert(typeof DescribeAppImageConfigRequest$ === "object");
assert(typeof DescribeAppImageConfigResponse$ === "object");
assert(typeof DescribeAppRequest$ === "object");
assert(typeof DescribeAppResponse$ === "object");
assert(typeof DescribeArtifactRequest$ === "object");
assert(typeof DescribeArtifactResponse$ === "object");
assert(typeof DescribeAutoMLJobRequest$ === "object");
assert(typeof DescribeAutoMLJobResponse$ === "object");
assert(typeof DescribeAutoMLJobV2Request$ === "object");
assert(typeof DescribeAutoMLJobV2Response$ === "object");
assert(typeof DescribeClusterEventRequest$ === "object");
assert(typeof DescribeClusterEventResponse$ === "object");
assert(typeof DescribeClusterNodeRequest$ === "object");
assert(typeof DescribeClusterNodeResponse$ === "object");
assert(typeof DescribeClusterRequest$ === "object");
assert(typeof DescribeClusterResponse$ === "object");
assert(typeof DescribeClusterSchedulerConfigRequest$ === "object");
assert(typeof DescribeClusterSchedulerConfigResponse$ === "object");
assert(typeof DescribeCodeRepositoryInput$ === "object");
assert(typeof DescribeCodeRepositoryOutput$ === "object");
assert(typeof DescribeCompilationJobRequest$ === "object");
assert(typeof DescribeCompilationJobResponse$ === "object");
assert(typeof DescribeComputeQuotaRequest$ === "object");
assert(typeof DescribeComputeQuotaResponse$ === "object");
assert(typeof DescribeContextRequest$ === "object");
assert(typeof DescribeContextResponse$ === "object");
assert(typeof DescribeDataQualityJobDefinitionRequest$ === "object");
assert(typeof DescribeDataQualityJobDefinitionResponse$ === "object");
assert(typeof DescribeDeviceFleetRequest$ === "object");
assert(typeof DescribeDeviceFleetResponse$ === "object");
assert(typeof DescribeDeviceRequest$ === "object");
assert(typeof DescribeDeviceResponse$ === "object");
assert(typeof DescribeDomainRequest$ === "object");
assert(typeof DescribeDomainResponse$ === "object");
assert(typeof DescribeEdgeDeploymentPlanRequest$ === "object");
assert(typeof DescribeEdgeDeploymentPlanResponse$ === "object");
assert(typeof DescribeEdgePackagingJobRequest$ === "object");
assert(typeof DescribeEdgePackagingJobResponse$ === "object");
assert(typeof DescribeEndpointConfigInput$ === "object");
assert(typeof DescribeEndpointConfigOutput$ === "object");
assert(typeof DescribeEndpointInput$ === "object");
assert(typeof DescribeEndpointOutput$ === "object");
assert(typeof DescribeExperimentRequest$ === "object");
assert(typeof DescribeExperimentResponse$ === "object");
assert(typeof DescribeFeatureGroupRequest$ === "object");
assert(typeof DescribeFeatureGroupResponse$ === "object");
assert(typeof DescribeFeatureMetadataRequest$ === "object");
assert(typeof DescribeFeatureMetadataResponse$ === "object");
assert(typeof DescribeFlowDefinitionRequest$ === "object");
assert(typeof DescribeFlowDefinitionResponse$ === "object");
assert(typeof DescribeHubContentRequest$ === "object");
assert(typeof DescribeHubContentResponse$ === "object");
assert(typeof DescribeHubRequest$ === "object");
assert(typeof DescribeHubResponse$ === "object");
assert(typeof DescribeHumanTaskUiRequest$ === "object");
assert(typeof DescribeHumanTaskUiResponse$ === "object");
assert(typeof DescribeHyperParameterTuningJobRequest$ === "object");
assert(typeof DescribeHyperParameterTuningJobResponse$ === "object");
assert(typeof DescribeImageRequest$ === "object");
assert(typeof DescribeImageResponse$ === "object");
assert(typeof DescribeImageVersionRequest$ === "object");
assert(typeof DescribeImageVersionResponse$ === "object");
assert(typeof DescribeInferenceComponentInput$ === "object");
assert(typeof DescribeInferenceComponentOutput$ === "object");
assert(typeof DescribeInferenceExperimentRequest$ === "object");
assert(typeof DescribeInferenceExperimentResponse$ === "object");
assert(typeof DescribeInferenceRecommendationsJobRequest$ === "object");
assert(typeof DescribeInferenceRecommendationsJobResponse$ === "object");
assert(typeof DescribeLabelingJobRequest$ === "object");
assert(typeof DescribeLabelingJobResponse$ === "object");
assert(typeof DescribeLineageGroupRequest$ === "object");
assert(typeof DescribeLineageGroupResponse$ === "object");
assert(typeof DescribeMlflowAppRequest$ === "object");
assert(typeof DescribeMlflowAppResponse$ === "object");
assert(typeof DescribeMlflowTrackingServerRequest$ === "object");
assert(typeof DescribeMlflowTrackingServerResponse$ === "object");
assert(typeof DescribeModelBiasJobDefinitionRequest$ === "object");
assert(typeof DescribeModelBiasJobDefinitionResponse$ === "object");
assert(typeof DescribeModelCardExportJobRequest$ === "object");
assert(typeof DescribeModelCardExportJobResponse$ === "object");
assert(typeof DescribeModelCardRequest$ === "object");
assert(typeof DescribeModelCardResponse$ === "object");
assert(typeof DescribeModelExplainabilityJobDefinitionRequest$ === "object");
assert(typeof DescribeModelExplainabilityJobDefinitionResponse$ === "object");
assert(typeof DescribeModelInput$ === "object");
assert(typeof DescribeModelOutput$ === "object");
assert(typeof DescribeModelPackageGroupInput$ === "object");
assert(typeof DescribeModelPackageGroupOutput$ === "object");
assert(typeof DescribeModelPackageInput$ === "object");
assert(typeof DescribeModelPackageOutput$ === "object");
assert(typeof DescribeModelQualityJobDefinitionRequest$ === "object");
assert(typeof DescribeModelQualityJobDefinitionResponse$ === "object");
assert(typeof DescribeMonitoringScheduleRequest$ === "object");
assert(typeof DescribeMonitoringScheduleResponse$ === "object");
assert(typeof DescribeNotebookInstanceInput$ === "object");
assert(typeof DescribeNotebookInstanceLifecycleConfigInput$ === "object");
assert(typeof DescribeNotebookInstanceLifecycleConfigOutput$ === "object");
assert(typeof DescribeNotebookInstanceOutput$ === "object");
assert(typeof DescribeOptimizationJobRequest$ === "object");
assert(typeof DescribeOptimizationJobResponse$ === "object");
assert(typeof DescribePartnerAppRequest$ === "object");
assert(typeof DescribePartnerAppResponse$ === "object");
assert(typeof DescribePipelineDefinitionForExecutionRequest$ === "object");
assert(typeof DescribePipelineDefinitionForExecutionResponse$ === "object");
assert(typeof DescribePipelineExecutionRequest$ === "object");
assert(typeof DescribePipelineExecutionResponse$ === "object");
assert(typeof DescribePipelineRequest$ === "object");
assert(typeof DescribePipelineResponse$ === "object");
assert(typeof DescribeProcessingJobRequest$ === "object");
assert(typeof DescribeProcessingJobResponse$ === "object");
assert(typeof DescribeProjectInput$ === "object");
assert(typeof DescribeProjectOutput$ === "object");
assert(typeof DescribeReservedCapacityRequest$ === "object");
assert(typeof DescribeReservedCapacityResponse$ === "object");
assert(typeof DescribeSpaceRequest$ === "object");
assert(typeof DescribeSpaceResponse$ === "object");
assert(typeof DescribeStudioLifecycleConfigRequest$ === "object");
assert(typeof DescribeStudioLifecycleConfigResponse$ === "object");
assert(typeof DescribeSubscribedWorkteamRequest$ === "object");
assert(typeof DescribeSubscribedWorkteamResponse$ === "object");
assert(typeof DescribeTrainingJobRequest$ === "object");
assert(typeof DescribeTrainingJobResponse$ === "object");
assert(typeof DescribeTrainingPlanRequest$ === "object");
assert(typeof DescribeTrainingPlanResponse$ === "object");
assert(typeof DescribeTransformJobRequest$ === "object");
assert(typeof DescribeTransformJobResponse$ === "object");
assert(typeof DescribeTrialComponentRequest$ === "object");
assert(typeof DescribeTrialComponentResponse$ === "object");
assert(typeof DescribeTrialRequest$ === "object");
assert(typeof DescribeTrialResponse$ === "object");
assert(typeof DescribeUserProfileRequest$ === "object");
assert(typeof DescribeUserProfileResponse$ === "object");
assert(typeof DescribeWorkforceRequest$ === "object");
assert(typeof DescribeWorkforceResponse$ === "object");
assert(typeof DescribeWorkteamRequest$ === "object");
assert(typeof DescribeWorkteamResponse$ === "object");
assert(typeof DesiredWeightAndCapacity$ === "object");
assert(typeof DetachClusterNodeVolumeRequest$ === "object");
assert(typeof DetachClusterNodeVolumeResponse$ === "object");
assert(typeof Device$ === "object");
assert(typeof DeviceDeploymentSummary$ === "object");
assert(typeof DeviceFleetSummary$ === "object");
assert(typeof DeviceSelectionConfig$ === "object");
assert(typeof DeviceStats$ === "object");
assert(typeof DeviceSummary$ === "object");
assert(typeof DirectDeploySettings$ === "object");
assert(typeof DisableSagemakerServicecatalogPortfolioInput$ === "object");
assert(typeof DisableSagemakerServicecatalogPortfolioOutput$ === "object");
assert(typeof DisassociateTrialComponentRequest$ === "object");
assert(typeof DisassociateTrialComponentResponse$ === "object");
assert(typeof DockerSettings$ === "object");
assert(typeof DomainDetails$ === "object");
assert(typeof DomainSettings$ === "object");
assert(typeof DomainSettingsForUpdate$ === "object");
assert(typeof DriftCheckBaselines$ === "object");
assert(typeof DriftCheckBias$ === "object");
assert(typeof DriftCheckExplainability$ === "object");
assert(typeof DriftCheckModelDataQuality$ === "object");
assert(typeof DriftCheckModelQuality$ === "object");
assert(typeof DynamicScalingConfiguration$ === "object");
assert(typeof EbsStorageSettings$ === "object");
assert(typeof Ec2CapacityReservation$ === "object");
assert(typeof Edge$ === "object");
assert(typeof EdgeDeploymentConfig$ === "object");
assert(typeof EdgeDeploymentModelConfig$ === "object");
assert(typeof EdgeDeploymentPlanSummary$ === "object");
assert(typeof EdgeDeploymentStatus$ === "object");
assert(typeof EdgeModel$ === "object");
assert(typeof EdgeModelStat$ === "object");
assert(typeof EdgeModelSummary$ === "object");
assert(typeof EdgeOutputConfig$ === "object");
assert(typeof EdgePackagingJobSummary$ === "object");
assert(typeof EdgePresetDeploymentOutput$ === "object");
assert(typeof EFSFileSystem$ === "object");
assert(typeof EFSFileSystemConfig$ === "object");
assert(typeof EmrServerlessComputeConfig$ === "object");
assert(typeof EmrServerlessSettings$ === "object");
assert(typeof EmrSettings$ === "object");
assert(typeof EMRStepMetadata$ === "object");
assert(typeof EnableSagemakerServicecatalogPortfolioInput$ === "object");
assert(typeof EnableSagemakerServicecatalogPortfolioOutput$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof EndpointConfigStepMetadata$ === "object");
assert(typeof EndpointConfigSummary$ === "object");
assert(typeof EndpointInfo$ === "object");
assert(typeof EndpointInput$ === "object");
assert(typeof EndpointInputConfiguration$ === "object");
assert(typeof EndpointMetadata$ === "object");
assert(typeof EndpointOutputConfiguration$ === "object");
assert(typeof EndpointPerformance$ === "object");
assert(typeof EndpointStepMetadata$ === "object");
assert(typeof EndpointSummary$ === "object");
assert(typeof EnvironmentConfig$ === "object");
assert(typeof EnvironmentConfigDetails$ === "object");
assert(typeof EnvironmentParameter$ === "object");
assert(typeof EnvironmentParameterRanges$ === "object");
assert(typeof ErrorInfo$ === "object");
assert(typeof EventDetails$ === "object");
assert(typeof EventMetadata$ === "object");
assert(typeof Experiment$ === "object");
assert(typeof ExperimentConfig$ === "object");
assert(typeof ExperimentSource$ === "object");
assert(typeof ExperimentSummary$ === "object");
assert(typeof Explainability$ === "object");
assert(typeof ExplainerConfig$ === "object");
assert(typeof FailStepMetadata$ === "object");
assert(typeof FeatureDefinition$ === "object");
assert(typeof FeatureGroup$ === "object");
assert(typeof FeatureGroupSummary$ === "object");
assert(typeof FeatureMetadata$ === "object");
assert(typeof FeatureParameter$ === "object");
assert(typeof FileSource$ === "object");
assert(typeof FileSystemConfig$ === "object");
assert(typeof FileSystemDataSource$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FinalAutoMLJobObjectiveMetric$ === "object");
assert(typeof FinalHyperParameterTuningJobObjectiveMetric$ === "object");
assert(typeof FlowDefinitionOutputConfig$ === "object");
assert(typeof FlowDefinitionSummary$ === "object");
assert(typeof FSxLustreConfig$ === "object");
assert(typeof FSxLustreFileSystem$ === "object");
assert(typeof FSxLustreFileSystemConfig$ === "object");
assert(typeof GenerativeAiSettings$ === "object");
assert(typeof GetDeviceFleetReportRequest$ === "object");
assert(typeof GetDeviceFleetReportResponse$ === "object");
assert(typeof GetLineageGroupPolicyRequest$ === "object");
assert(typeof GetLineageGroupPolicyResponse$ === "object");
assert(typeof GetModelPackageGroupPolicyInput$ === "object");
assert(typeof GetModelPackageGroupPolicyOutput$ === "object");
assert(typeof GetSagemakerServicecatalogPortfolioStatusInput$ === "object");
assert(typeof GetSagemakerServicecatalogPortfolioStatusOutput$ === "object");
assert(typeof GetScalingConfigurationRecommendationRequest$ === "object");
assert(typeof GetScalingConfigurationRecommendationResponse$ === "object");
assert(typeof GetSearchSuggestionsRequest$ === "object");
assert(typeof GetSearchSuggestionsResponse$ === "object");
assert(typeof GitConfig$ === "object");
assert(typeof GitConfigForUpdate$ === "object");
assert(typeof HiddenSageMakerImage$ === "object");
assert(typeof HolidayConfigAttributes$ === "object");
assert(typeof HubAccessConfig$ === "object");
assert(typeof HubContentDependency$ === "object");
assert(typeof HubContentInfo$ === "object");
assert(typeof HubInfo$ === "object");
assert(typeof HubS3StorageConfig$ === "object");
assert(typeof HumanLoopActivationConditionsConfig$ === "object");
assert(typeof HumanLoopActivationConfig$ === "object");
assert(typeof HumanLoopConfig$ === "object");
assert(typeof HumanLoopRequestSource$ === "object");
assert(typeof HumanTaskConfig$ === "object");
assert(typeof HumanTaskUiSummary$ === "object");
assert(typeof HyperbandStrategyConfig$ === "object");
assert(typeof HyperParameterAlgorithmSpecification$ === "object");
assert(typeof HyperParameterSpecification$ === "object");
assert(typeof HyperParameterTrainingJobDefinition$ === "object");
assert(typeof HyperParameterTrainingJobSummary$ === "object");
assert(typeof HyperParameterTuningInstanceConfig$ === "object");
assert(typeof HyperParameterTuningJobCompletionDetails$ === "object");
assert(typeof HyperParameterTuningJobConfig$ === "object");
assert(typeof HyperParameterTuningJobConsumedResources$ === "object");
assert(typeof HyperParameterTuningJobObjective$ === "object");
assert(typeof HyperParameterTuningJobSearchEntity$ === "object");
assert(typeof HyperParameterTuningJobStrategyConfig$ === "object");
assert(typeof HyperParameterTuningJobSummary$ === "object");
assert(typeof HyperParameterTuningJobWarmStartConfig$ === "object");
assert(typeof HyperParameterTuningResourceConfig$ === "object");
assert(typeof IamIdentity$ === "object");
assert(typeof IamPolicyConstraints$ === "object");
assert(typeof IdentityProviderOAuthSetting$ === "object");
assert(typeof IdleSettings$ === "object");
assert(typeof Image$ === "object");
assert(typeof ImageClassificationJobConfig$ === "object");
assert(typeof ImageConfig$ === "object");
assert(typeof ImageVersion$ === "object");
assert(typeof ImportHubContentRequest$ === "object");
assert(typeof ImportHubContentResponse$ === "object");
assert(typeof InferenceComponentCapacitySize$ === "object");
assert(typeof InferenceComponentComputeResourceRequirements$ === "object");
assert(typeof InferenceComponentContainerSpecification$ === "object");
assert(typeof InferenceComponentContainerSpecificationSummary$ === "object");
assert(typeof InferenceComponentDataCacheConfig$ === "object");
assert(typeof InferenceComponentDataCacheConfigSummary$ === "object");
assert(typeof InferenceComponentDeploymentConfig$ === "object");
assert(typeof InferenceComponentMetadata$ === "object");
assert(typeof InferenceComponentRollingUpdatePolicy$ === "object");
assert(typeof InferenceComponentRuntimeConfig$ === "object");
assert(typeof InferenceComponentRuntimeConfigSummary$ === "object");
assert(typeof InferenceComponentSpecification$ === "object");
assert(typeof InferenceComponentSpecificationSummary$ === "object");
assert(typeof InferenceComponentStartupParameters$ === "object");
assert(typeof InferenceComponentSummary$ === "object");
assert(typeof InferenceExecutionConfig$ === "object");
assert(typeof InferenceExperimentDataStorageConfig$ === "object");
assert(typeof InferenceExperimentSchedule$ === "object");
assert(typeof InferenceExperimentSummary$ === "object");
assert(typeof InferenceHubAccessConfig$ === "object");
assert(typeof InferenceMetrics$ === "object");
assert(typeof InferenceRecommendation$ === "object");
assert(typeof InferenceRecommendationsJob$ === "object");
assert(typeof InferenceRecommendationsJobStep$ === "object");
assert(typeof InferenceSpecification$ === "object");
assert(typeof InfraCheckConfig$ === "object");
assert(typeof InputConfig$ === "object");
assert(typeof InstanceGroup$ === "object");
assert(typeof InstanceGroupMetadata$ === "object");
assert(typeof InstanceGroupScalingMetadata$ === "object");
assert(typeof InstanceMetadata$ === "object");
assert(typeof InstanceMetadataServiceConfiguration$ === "object");
assert(typeof InstancePlacementConfig$ === "object");
assert(typeof IntegerParameterRange$ === "object");
assert(typeof IntegerParameterRangeSpecification$ === "object");
assert(typeof JupyterLabAppImageConfig$ === "object");
assert(typeof JupyterLabAppSettings$ === "object");
assert(typeof JupyterServerAppSettings$ === "object");
assert(typeof KendraSettings$ === "object");
assert(typeof KernelGatewayAppSettings$ === "object");
assert(typeof KernelGatewayImageConfig$ === "object");
assert(typeof KernelSpec$ === "object");
assert(typeof LabelCounters$ === "object");
assert(typeof LabelCountersForWorkteam$ === "object");
assert(typeof LabelingJobAlgorithmsConfig$ === "object");
assert(typeof LabelingJobDataAttributes$ === "object");
assert(typeof LabelingJobDataSource$ === "object");
assert(typeof LabelingJobForWorkteamSummary$ === "object");
assert(typeof LabelingJobInputConfig$ === "object");
assert(typeof LabelingJobOutput$ === "object");
assert(typeof LabelingJobOutputConfig$ === "object");
assert(typeof LabelingJobResourceConfig$ === "object");
assert(typeof LabelingJobS3DataSource$ === "object");
assert(typeof LabelingJobSnsDataSource$ === "object");
assert(typeof LabelingJobStoppingConditions$ === "object");
assert(typeof LabelingJobSummary$ === "object");
assert(typeof LambdaStepMetadata$ === "object");
assert(typeof LastUpdateStatus$ === "object");
assert(typeof LineageGroupSummary$ === "object");
assert(typeof LineageMetadata$ === "object");
assert(typeof ListActionsRequest$ === "object");
assert(typeof ListActionsResponse$ === "object");
assert(typeof ListAlgorithmsInput$ === "object");
assert(typeof ListAlgorithmsOutput$ === "object");
assert(typeof ListAliasesRequest$ === "object");
assert(typeof ListAliasesResponse$ === "object");
assert(typeof ListAppImageConfigsRequest$ === "object");
assert(typeof ListAppImageConfigsResponse$ === "object");
assert(typeof ListAppsRequest$ === "object");
assert(typeof ListAppsResponse$ === "object");
assert(typeof ListArtifactsRequest$ === "object");
assert(typeof ListArtifactsResponse$ === "object");
assert(typeof ListAssociationsRequest$ === "object");
assert(typeof ListAssociationsResponse$ === "object");
assert(typeof ListAutoMLJobsRequest$ === "object");
assert(typeof ListAutoMLJobsResponse$ === "object");
assert(typeof ListCandidatesForAutoMLJobRequest$ === "object");
assert(typeof ListCandidatesForAutoMLJobResponse$ === "object");
assert(typeof ListClusterEventsRequest$ === "object");
assert(typeof ListClusterEventsResponse$ === "object");
assert(typeof ListClusterNodesRequest$ === "object");
assert(typeof ListClusterNodesResponse$ === "object");
assert(typeof ListClusterSchedulerConfigsRequest$ === "object");
assert(typeof ListClusterSchedulerConfigsResponse$ === "object");
assert(typeof ListClustersRequest$ === "object");
assert(typeof ListClustersResponse$ === "object");
assert(typeof ListCodeRepositoriesInput$ === "object");
assert(typeof ListCodeRepositoriesOutput$ === "object");
assert(typeof ListCompilationJobsRequest$ === "object");
assert(typeof ListCompilationJobsResponse$ === "object");
assert(typeof ListComputeQuotasRequest$ === "object");
assert(typeof ListComputeQuotasResponse$ === "object");
assert(typeof ListContextsRequest$ === "object");
assert(typeof ListContextsResponse$ === "object");
assert(typeof ListDataQualityJobDefinitionsRequest$ === "object");
assert(typeof ListDataQualityJobDefinitionsResponse$ === "object");
assert(typeof ListDeviceFleetsRequest$ === "object");
assert(typeof ListDeviceFleetsResponse$ === "object");
assert(typeof ListDevicesRequest$ === "object");
assert(typeof ListDevicesResponse$ === "object");
assert(typeof ListDomainsRequest$ === "object");
assert(typeof ListDomainsResponse$ === "object");
assert(typeof ListEdgeDeploymentPlansRequest$ === "object");
assert(typeof ListEdgeDeploymentPlansResponse$ === "object");
assert(typeof ListEdgePackagingJobsRequest$ === "object");
assert(typeof ListEdgePackagingJobsResponse$ === "object");
assert(typeof ListEndpointConfigsInput$ === "object");
assert(typeof ListEndpointConfigsOutput$ === "object");
assert(typeof ListEndpointsInput$ === "object");
assert(typeof ListEndpointsOutput$ === "object");
assert(typeof ListExperimentsRequest$ === "object");
assert(typeof ListExperimentsResponse$ === "object");
assert(typeof ListFeatureGroupsRequest$ === "object");
assert(typeof ListFeatureGroupsResponse$ === "object");
assert(typeof ListFlowDefinitionsRequest$ === "object");
assert(typeof ListFlowDefinitionsResponse$ === "object");
assert(typeof ListHubContentsRequest$ === "object");
assert(typeof ListHubContentsResponse$ === "object");
assert(typeof ListHubContentVersionsRequest$ === "object");
assert(typeof ListHubContentVersionsResponse$ === "object");
assert(typeof ListHubsRequest$ === "object");
assert(typeof ListHubsResponse$ === "object");
assert(typeof ListHumanTaskUisRequest$ === "object");
assert(typeof ListHumanTaskUisResponse$ === "object");
assert(typeof ListHyperParameterTuningJobsRequest$ === "object");
assert(typeof ListHyperParameterTuningJobsResponse$ === "object");
assert(typeof ListImagesRequest$ === "object");
assert(typeof ListImagesResponse$ === "object");
assert(typeof ListImageVersionsRequest$ === "object");
assert(typeof ListImageVersionsResponse$ === "object");
assert(typeof ListInferenceComponentsInput$ === "object");
assert(typeof ListInferenceComponentsOutput$ === "object");
assert(typeof ListInferenceExperimentsRequest$ === "object");
assert(typeof ListInferenceExperimentsResponse$ === "object");
assert(typeof ListInferenceRecommendationsJobsRequest$ === "object");
assert(typeof ListInferenceRecommendationsJobsResponse$ === "object");
assert(typeof ListInferenceRecommendationsJobStepsRequest$ === "object");
assert(typeof ListInferenceRecommendationsJobStepsResponse$ === "object");
assert(typeof ListLabelingJobsForWorkteamRequest$ === "object");
assert(typeof ListLabelingJobsForWorkteamResponse$ === "object");
assert(typeof ListLabelingJobsRequest$ === "object");
assert(typeof ListLabelingJobsResponse$ === "object");
assert(typeof ListLineageGroupsRequest$ === "object");
assert(typeof ListLineageGroupsResponse$ === "object");
assert(typeof ListMlflowAppsRequest$ === "object");
assert(typeof ListMlflowAppsResponse$ === "object");
assert(typeof ListMlflowTrackingServersRequest$ === "object");
assert(typeof ListMlflowTrackingServersResponse$ === "object");
assert(typeof ListModelBiasJobDefinitionsRequest$ === "object");
assert(typeof ListModelBiasJobDefinitionsResponse$ === "object");
assert(typeof ListModelCardExportJobsRequest$ === "object");
assert(typeof ListModelCardExportJobsResponse$ === "object");
assert(typeof ListModelCardsRequest$ === "object");
assert(typeof ListModelCardsResponse$ === "object");
assert(typeof ListModelCardVersionsRequest$ === "object");
assert(typeof ListModelCardVersionsResponse$ === "object");
assert(typeof ListModelExplainabilityJobDefinitionsRequest$ === "object");
assert(typeof ListModelExplainabilityJobDefinitionsResponse$ === "object");
assert(typeof ListModelMetadataRequest$ === "object");
assert(typeof ListModelMetadataResponse$ === "object");
assert(typeof ListModelPackageGroupsInput$ === "object");
assert(typeof ListModelPackageGroupsOutput$ === "object");
assert(typeof ListModelPackagesInput$ === "object");
assert(typeof ListModelPackagesOutput$ === "object");
assert(typeof ListModelQualityJobDefinitionsRequest$ === "object");
assert(typeof ListModelQualityJobDefinitionsResponse$ === "object");
assert(typeof ListModelsInput$ === "object");
assert(typeof ListModelsOutput$ === "object");
assert(typeof ListMonitoringAlertHistoryRequest$ === "object");
assert(typeof ListMonitoringAlertHistoryResponse$ === "object");
assert(typeof ListMonitoringAlertsRequest$ === "object");
assert(typeof ListMonitoringAlertsResponse$ === "object");
assert(typeof ListMonitoringExecutionsRequest$ === "object");
assert(typeof ListMonitoringExecutionsResponse$ === "object");
assert(typeof ListMonitoringSchedulesRequest$ === "object");
assert(typeof ListMonitoringSchedulesResponse$ === "object");
assert(typeof ListNotebookInstanceLifecycleConfigsInput$ === "object");
assert(typeof ListNotebookInstanceLifecycleConfigsOutput$ === "object");
assert(typeof ListNotebookInstancesInput$ === "object");
assert(typeof ListNotebookInstancesOutput$ === "object");
assert(typeof ListOptimizationJobsRequest$ === "object");
assert(typeof ListOptimizationJobsResponse$ === "object");
assert(typeof ListPartnerAppsRequest$ === "object");
assert(typeof ListPartnerAppsResponse$ === "object");
assert(typeof ListPipelineExecutionsRequest$ === "object");
assert(typeof ListPipelineExecutionsResponse$ === "object");
assert(typeof ListPipelineExecutionStepsRequest$ === "object");
assert(typeof ListPipelineExecutionStepsResponse$ === "object");
assert(typeof ListPipelineParametersForExecutionRequest$ === "object");
assert(typeof ListPipelineParametersForExecutionResponse$ === "object");
assert(typeof ListPipelinesRequest$ === "object");
assert(typeof ListPipelinesResponse$ === "object");
assert(typeof ListPipelineVersionsRequest$ === "object");
assert(typeof ListPipelineVersionsResponse$ === "object");
assert(typeof ListProcessingJobsRequest$ === "object");
assert(typeof ListProcessingJobsResponse$ === "object");
assert(typeof ListProjectsInput$ === "object");
assert(typeof ListProjectsOutput$ === "object");
assert(typeof ListResourceCatalogsRequest$ === "object");
assert(typeof ListResourceCatalogsResponse$ === "object");
assert(typeof ListSpacesRequest$ === "object");
assert(typeof ListSpacesResponse$ === "object");
assert(typeof ListStageDevicesRequest$ === "object");
assert(typeof ListStageDevicesResponse$ === "object");
assert(typeof ListStudioLifecycleConfigsRequest$ === "object");
assert(typeof ListStudioLifecycleConfigsResponse$ === "object");
assert(typeof ListSubscribedWorkteamsRequest$ === "object");
assert(typeof ListSubscribedWorkteamsResponse$ === "object");
assert(typeof ListTagsInput$ === "object");
assert(typeof ListTagsOutput$ === "object");
assert(typeof ListTrainingJobsForHyperParameterTuningJobRequest$ === "object");
assert(typeof ListTrainingJobsForHyperParameterTuningJobResponse$ === "object");
assert(typeof ListTrainingJobsRequest$ === "object");
assert(typeof ListTrainingJobsResponse$ === "object");
assert(typeof ListTrainingPlansRequest$ === "object");
assert(typeof ListTrainingPlansResponse$ === "object");
assert(typeof ListTransformJobsRequest$ === "object");
assert(typeof ListTransformJobsResponse$ === "object");
assert(typeof ListTrialComponentsRequest$ === "object");
assert(typeof ListTrialComponentsResponse$ === "object");
assert(typeof ListTrialsRequest$ === "object");
assert(typeof ListTrialsResponse$ === "object");
assert(typeof ListUltraServersByReservedCapacityRequest$ === "object");
assert(typeof ListUltraServersByReservedCapacityResponse$ === "object");
assert(typeof ListUserProfilesRequest$ === "object");
assert(typeof ListUserProfilesResponse$ === "object");
assert(typeof ListWorkforcesRequest$ === "object");
assert(typeof ListWorkforcesResponse$ === "object");
assert(typeof ListWorkteamsRequest$ === "object");
assert(typeof ListWorkteamsResponse$ === "object");
assert(typeof MemberDefinition$ === "object");
assert(typeof MetadataProperties$ === "object");
assert(typeof MetricData$ === "object");
assert(typeof MetricDatum$ === "object");
assert(typeof MetricDefinition$ === "object");
assert(typeof MetricsConfig$ === "object");
assert(typeof MetricSpecification$ === "object");
assert(typeof MetricsSource$ === "object");
assert(typeof MlflowAppSummary$ === "object");
assert(typeof MlflowConfig$ === "object");
assert(typeof MLflowConfiguration$ === "object");
assert(typeof MlflowDetails$ === "object");
assert(typeof Model$ === "object");
assert(typeof ModelAccessConfig$ === "object");
assert(typeof ModelArtifacts$ === "object");
assert(typeof ModelBiasAppSpecification$ === "object");
assert(typeof ModelBiasBaselineConfig$ === "object");
assert(typeof ModelBiasJobInput$ === "object");
assert(typeof ModelCard$ === "object");
assert(typeof ModelCardExportArtifacts$ === "object");
assert(typeof ModelCardExportJobSummary$ === "object");
assert(typeof ModelCardExportOutputConfig$ === "object");
assert(typeof ModelCardSecurityConfig$ === "object");
assert(typeof ModelCardSummary$ === "object");
assert(typeof ModelCardVersionSummary$ === "object");
assert(typeof ModelClientConfig$ === "object");
assert(typeof ModelCompilationConfig$ === "object");
assert(typeof ModelConfiguration$ === "object");
assert(typeof ModelDashboardEndpoint$ === "object");
assert(typeof ModelDashboardIndicatorAction$ === "object");
assert(typeof ModelDashboardModel$ === "object");
assert(typeof ModelDashboardModelCard$ === "object");
assert(typeof ModelDashboardMonitoringSchedule$ === "object");
assert(typeof ModelDataQuality$ === "object");
assert(typeof ModelDataSource$ === "object");
assert(typeof ModelDeployConfig$ === "object");
assert(typeof ModelDeployResult$ === "object");
assert(typeof ModelDigests$ === "object");
assert(typeof ModelExplainabilityAppSpecification$ === "object");
assert(typeof ModelExplainabilityBaselineConfig$ === "object");
assert(typeof ModelExplainabilityJobInput$ === "object");
assert(typeof ModelInfrastructureConfig$ === "object");
assert(typeof ModelInput$ === "object");
assert(typeof ModelLatencyThreshold$ === "object");
assert(typeof ModelLifeCycle$ === "object");
assert(typeof ModelMetadataFilter$ === "object");
assert(typeof ModelMetadataSearchExpression$ === "object");
assert(typeof ModelMetadataSummary$ === "object");
assert(typeof ModelMetrics$ === "object");
assert(typeof ModelPackage$ === "object");
assert(typeof ModelPackageConfig$ === "object");
assert(typeof ModelPackageContainerDefinition$ === "object");
assert(typeof ModelPackageGroup$ === "object");
assert(typeof ModelPackageGroupSummary$ === "object");
assert(typeof ModelPackageModelCard$ === "object");
assert(typeof ModelPackageSecurityConfig$ === "object");
assert(typeof ModelPackageStatusDetails$ === "object");
assert(typeof ModelPackageStatusItem$ === "object");
assert(typeof ModelPackageSummary$ === "object");
assert(typeof ModelPackageValidationProfile$ === "object");
assert(typeof ModelPackageValidationSpecification$ === "object");
assert(typeof ModelQuality$ === "object");
assert(typeof ModelQualityAppSpecification$ === "object");
assert(typeof ModelQualityBaselineConfig$ === "object");
assert(typeof ModelQualityJobInput$ === "object");
assert(typeof ModelQuantizationConfig$ === "object");
assert(typeof ModelRegisterSettings$ === "object");
assert(typeof ModelShardingConfig$ === "object");
assert(typeof ModelSpeculativeDecodingConfig$ === "object");
assert(typeof ModelSpeculativeDecodingTrainingDataSource$ === "object");
assert(typeof ModelStepMetadata$ === "object");
assert(typeof ModelSummary$ === "object");
assert(typeof ModelVariantConfig$ === "object");
assert(typeof ModelVariantConfigSummary$ === "object");
assert(typeof MonitoringAlertActions$ === "object");
assert(typeof MonitoringAlertHistorySummary$ === "object");
assert(typeof MonitoringAlertSummary$ === "object");
assert(typeof MonitoringAppSpecification$ === "object");
assert(typeof MonitoringBaselineConfig$ === "object");
assert(typeof MonitoringClusterConfig$ === "object");
assert(typeof MonitoringConstraintsResource$ === "object");
assert(typeof MonitoringCsvDatasetFormat$ === "object");
assert(typeof MonitoringDatasetFormat$ === "object");
assert(typeof MonitoringExecutionSummary$ === "object");
assert(typeof MonitoringGroundTruthS3Input$ === "object");
assert(typeof MonitoringInput$ === "object");
assert(typeof MonitoringJobDefinition$ === "object");
assert(typeof MonitoringJobDefinitionSummary$ === "object");
assert(typeof MonitoringJsonDatasetFormat$ === "object");
assert(typeof MonitoringNetworkConfig$ === "object");
assert(typeof MonitoringOutput$ === "object");
assert(typeof MonitoringOutputConfig$ === "object");
assert(typeof MonitoringParquetDatasetFormat$ === "object");
assert(typeof MonitoringResources$ === "object");
assert(typeof MonitoringS3Output$ === "object");
assert(typeof MonitoringSchedule$ === "object");
assert(typeof MonitoringScheduleConfig$ === "object");
assert(typeof MonitoringScheduleSummary$ === "object");
assert(typeof MonitoringStatisticsResource$ === "object");
assert(typeof MonitoringStoppingCondition$ === "object");
assert(typeof MultiModelConfig$ === "object");
assert(typeof NeoVpcConfig$ === "object");
assert(typeof NestedFilters$ === "object");
assert(typeof NetworkConfig$ === "object");
assert(typeof NodeAdditionResult$ === "object");
assert(typeof NotebookInstanceLifecycleConfigSummary$ === "object");
assert(typeof NotebookInstanceLifecycleHook$ === "object");
assert(typeof NotebookInstanceSummary$ === "object");
assert(typeof NotificationConfiguration$ === "object");
assert(typeof ObjectiveStatusCounters$ === "object");
assert(typeof OfflineStoreConfig$ === "object");
assert(typeof OfflineStoreStatus$ === "object");
assert(typeof OidcConfig$ === "object");
assert(typeof OidcConfigForResponse$ === "object");
assert(typeof OidcMemberDefinition$ === "object");
assert(typeof OnlineStoreConfig$ === "object");
assert(typeof OnlineStoreConfigUpdate$ === "object");
assert(typeof OnlineStoreSecurityConfig$ === "object");
assert(typeof OptimizationConfig$ === "object");
assert(typeof OptimizationJobModelSource$ === "object");
assert(typeof OptimizationJobModelSourceS3$ === "object");
assert(typeof OptimizationJobOutputConfig$ === "object");
assert(typeof OptimizationJobSummary$ === "object");
assert(typeof OptimizationModelAccessConfig$ === "object");
assert(typeof OptimizationOutput$ === "object");
assert(typeof OptimizationSageMakerModel$ === "object");
assert(typeof OptimizationVpcConfig$ === "object");
assert(typeof OutputConfig$ === "object");
assert(typeof OutputDataConfig$ === "object");
assert(typeof OutputParameter$ === "object");
assert(typeof OwnershipSettings$ === "object");
assert(typeof OwnershipSettingsSummary$ === "object");
assert(typeof ParallelismConfiguration$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof ParameterRange$ === "object");
assert(typeof ParameterRanges$ === "object");
assert(typeof Parent$ === "object");
assert(typeof ParentHyperParameterTuningJob$ === "object");
assert(typeof PartnerAppConfig$ === "object");
assert(typeof PartnerAppMaintenanceConfig$ === "object");
assert(typeof PartnerAppSummary$ === "object");
assert(typeof PendingDeploymentSummary$ === "object");
assert(typeof PendingProductionVariantSummary$ === "object");
assert(typeof Phase$ === "object");
assert(typeof Pipeline$ === "object");
assert(typeof PipelineDefinitionS3Location$ === "object");
assert(typeof PipelineExecution$ === "object");
assert(typeof PipelineExecutionStep$ === "object");
assert(typeof PipelineExecutionStepMetadata$ === "object");
assert(typeof PipelineExecutionSummary$ === "object");
assert(typeof PipelineExperimentConfig$ === "object");
assert(typeof PipelineSummary$ === "object");
assert(typeof PipelineVersion$ === "object");
assert(typeof PipelineVersionSummary$ === "object");
assert(typeof PlacementSpecification$ === "object");
assert(typeof PredefinedMetricSpecification$ === "object");
assert(typeof PresignedUrlAccessConfig$ === "object");
assert(typeof PriorityClass$ === "object");
assert(typeof ProcessingClusterConfig$ === "object");
assert(typeof ProcessingFeatureStoreOutput$ === "object");
assert(typeof ProcessingInput$ === "object");
assert(typeof ProcessingJob$ === "object");
assert(typeof ProcessingJobStepMetadata$ === "object");
assert(typeof ProcessingJobSummary$ === "object");
assert(typeof ProcessingOutput$ === "object");
assert(typeof ProcessingOutputConfig$ === "object");
assert(typeof ProcessingResources$ === "object");
assert(typeof ProcessingS3Input$ === "object");
assert(typeof ProcessingS3Output$ === "object");
assert(typeof ProcessingStoppingCondition$ === "object");
assert(typeof ProductionVariant$ === "object");
assert(typeof ProductionVariantCapacityReservationConfig$ === "object");
assert(typeof ProductionVariantCapacityReservationSummary$ === "object");
assert(typeof ProductionVariantCoreDumpConfig$ === "object");
assert(typeof ProductionVariantManagedInstanceScaling$ === "object");
assert(typeof ProductionVariantRoutingConfig$ === "object");
assert(typeof ProductionVariantServerlessConfig$ === "object");
assert(typeof ProductionVariantServerlessUpdateConfig$ === "object");
assert(typeof ProductionVariantStatus$ === "object");
assert(typeof ProductionVariantSummary$ === "object");
assert(typeof ProfilerConfig$ === "object");
assert(typeof ProfilerConfigForUpdate$ === "object");
assert(typeof ProfilerRuleConfiguration$ === "object");
assert(typeof ProfilerRuleEvaluationStatus$ === "object");
assert(typeof Project$ === "object");
assert(typeof ProjectSummary$ === "object");
assert(typeof PropertyNameQuery$ === "object");
assert(typeof PropertyNameSuggestion$ === "object");
assert(typeof ProvisioningParameter$ === "object");
assert(typeof PublicWorkforceTaskPrice$ === "object");
assert(typeof PutModelPackageGroupPolicyInput$ === "object");
assert(typeof PutModelPackageGroupPolicyOutput$ === "object");
assert(typeof QualityCheckStepMetadata$ === "object");
assert(typeof QueryFilters$ === "object");
assert(typeof QueryLineageRequest$ === "object");
assert(typeof QueryLineageResponse$ === "object");
assert(typeof RealTimeInferenceConfig$ === "object");
assert(typeof RealTimeInferenceRecommendation$ === "object");
assert(typeof RecommendationJobCompiledOutputConfig$ === "object");
assert(typeof RecommendationJobContainerConfig$ === "object");
assert(typeof RecommendationJobInferenceBenchmark$ === "object");
assert(typeof RecommendationJobInputConfig$ === "object");
assert(typeof RecommendationJobOutputConfig$ === "object");
assert(typeof RecommendationJobPayloadConfig$ === "object");
assert(typeof RecommendationJobResourceLimit$ === "object");
assert(typeof RecommendationJobStoppingConditions$ === "object");
assert(typeof RecommendationJobVpcConfig$ === "object");
assert(typeof RecommendationMetrics$ === "object");
assert(typeof RedshiftDatasetDefinition$ === "object");
assert(typeof RegisterDevicesRequest$ === "object");
assert(typeof RegisterModelStepMetadata$ === "object");
assert(typeof RemoteDebugConfig$ === "object");
assert(typeof RemoteDebugConfigForUpdate$ === "object");
assert(typeof RenderableTask$ === "object");
assert(typeof RenderingError$ === "object");
assert(typeof RenderUiTemplateRequest$ === "object");
assert(typeof RenderUiTemplateResponse$ === "object");
assert(typeof RepositoryAuthConfig$ === "object");
assert(typeof ReservedCapacityOffering$ === "object");
assert(typeof ReservedCapacitySummary$ === "object");
assert(typeof ResolvedAttributes$ === "object");
assert(typeof ResourceCatalog$ === "object");
assert(typeof ResourceConfig$ === "object");
assert(typeof ResourceConfigForUpdate$ === "object");
assert(typeof ResourceLimits$ === "object");
assert(typeof ResourceSharingConfig$ === "object");
assert(typeof ResourceSpec$ === "object");
assert(typeof RetentionPolicy$ === "object");
assert(typeof RetryPipelineExecutionRequest$ === "object");
assert(typeof RetryPipelineExecutionResponse$ === "object");
assert(typeof RetryStrategy$ === "object");
assert(typeof RoleGroupAssignment$ === "object");
assert(typeof RollingDeploymentPolicy$ === "object");
assert(typeof RollingUpdatePolicy$ === "object");
assert(typeof RSessionAppSettings$ === "object");
assert(typeof RStudioServerProAppSettings$ === "object");
assert(typeof RStudioServerProDomainSettings$ === "object");
assert(typeof RStudioServerProDomainSettingsForUpdate$ === "object");
assert(typeof S3DataSource$ === "object");
assert(typeof S3FileSystem$ === "object");
assert(typeof S3FileSystemConfig$ === "object");
assert(typeof S3ModelDataSource$ === "object");
assert(typeof S3Presign$ === "object");
assert(typeof S3StorageConfig$ === "object");
assert(typeof ScalingPolicy$ === "object");
assert(typeof ScalingPolicyMetric$ === "object");
assert(typeof ScalingPolicyObjective$ === "object");
assert(typeof ScheduleConfig$ === "object");
assert(typeof ScheduledUpdateConfig$ === "object");
assert(typeof SchedulerConfig$ === "object");
assert(typeof SearchExpression$ === "object");
assert(typeof SearchRecord$ === "object");
assert(typeof SearchRequest$ === "object");
assert(typeof SearchResponse$ === "object");
assert(typeof SearchTrainingPlanOfferingsRequest$ === "object");
assert(typeof SearchTrainingPlanOfferingsResponse$ === "object");
assert(typeof SecondaryStatusTransition$ === "object");
assert(typeof SelectedStep$ === "object");
assert(typeof SelectiveExecutionConfig$ === "object");
assert(typeof SelectiveExecutionResult$ === "object");
assert(typeof SendPipelineExecutionStepFailureRequest$ === "object");
assert(typeof SendPipelineExecutionStepFailureResponse$ === "object");
assert(typeof SendPipelineExecutionStepSuccessRequest$ === "object");
assert(typeof SendPipelineExecutionStepSuccessResponse$ === "object");
assert(typeof ServerlessJobConfig$ === "object");
assert(typeof ServiceCatalogProvisionedProductDetails$ === "object");
assert(typeof ServiceCatalogProvisioningDetails$ === "object");
assert(typeof ServiceCatalogProvisioningUpdateDetails$ === "object");
assert(typeof SessionChainingConfig$ === "object");
assert(typeof ShadowModeConfig$ === "object");
assert(typeof ShadowModelVariantConfig$ === "object");
assert(typeof SharingSettings$ === "object");
assert(typeof ShuffleConfig$ === "object");
assert(typeof SourceAlgorithm$ === "object");
assert(typeof SourceAlgorithmSpecification$ === "object");
assert(typeof SourceIpConfig$ === "object");
assert(typeof SpaceAppLifecycleManagement$ === "object");
assert(typeof SpaceCodeEditorAppSettings$ === "object");
assert(typeof SpaceDetails$ === "object");
assert(typeof SpaceIdleSettings$ === "object");
assert(typeof SpaceJupyterLabAppSettings$ === "object");
assert(typeof SpaceSettings$ === "object");
assert(typeof SpaceSettingsSummary$ === "object");
assert(typeof SpaceSharingSettings$ === "object");
assert(typeof SpaceSharingSettingsSummary$ === "object");
assert(typeof SpaceStorageSettings$ === "object");
assert(typeof Stairs$ === "object");
assert(typeof StartEdgeDeploymentStageRequest$ === "object");
assert(typeof StartInferenceExperimentRequest$ === "object");
assert(typeof StartInferenceExperimentResponse$ === "object");
assert(typeof StartMlflowTrackingServerRequest$ === "object");
assert(typeof StartMlflowTrackingServerResponse$ === "object");
assert(typeof StartMonitoringScheduleRequest$ === "object");
assert(typeof StartNotebookInstanceInput$ === "object");
assert(typeof StartPipelineExecutionRequest$ === "object");
assert(typeof StartPipelineExecutionResponse$ === "object");
assert(typeof StartSessionRequest$ === "object");
assert(typeof StartSessionResponse$ === "object");
assert(typeof StopAutoMLJobRequest$ === "object");
assert(typeof StopCompilationJobRequest$ === "object");
assert(typeof StopEdgeDeploymentStageRequest$ === "object");
assert(typeof StopEdgePackagingJobRequest$ === "object");
assert(typeof StopHyperParameterTuningJobRequest$ === "object");
assert(typeof StopInferenceExperimentRequest$ === "object");
assert(typeof StopInferenceExperimentResponse$ === "object");
assert(typeof StopInferenceRecommendationsJobRequest$ === "object");
assert(typeof StopLabelingJobRequest$ === "object");
assert(typeof StopMlflowTrackingServerRequest$ === "object");
assert(typeof StopMlflowTrackingServerResponse$ === "object");
assert(typeof StopMonitoringScheduleRequest$ === "object");
assert(typeof StopNotebookInstanceInput$ === "object");
assert(typeof StopOptimizationJobRequest$ === "object");
assert(typeof StoppingCondition$ === "object");
assert(typeof StopPipelineExecutionRequest$ === "object");
assert(typeof StopPipelineExecutionResponse$ === "object");
assert(typeof StopProcessingJobRequest$ === "object");
assert(typeof StopTrainingJobRequest$ === "object");
assert(typeof StopTransformJobRequest$ === "object");
assert(typeof StudioLifecycleConfigDetails$ === "object");
assert(typeof StudioWebPortalSettings$ === "object");
assert(typeof SubscribedWorkteam$ === "object");
assert(typeof SuggestionQuery$ === "object");
assert(typeof TabularJobConfig$ === "object");
assert(typeof TabularResolvedAttributes$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TargetPlatform$ === "object");
assert(typeof TargetTrackingScalingPolicyConfiguration$ === "object");
assert(typeof TemplateProviderDetail$ === "object");
assert(typeof TensorBoardAppSettings$ === "object");
assert(typeof TensorBoardOutputConfig$ === "object");
assert(typeof TextClassificationJobConfig$ === "object");
assert(typeof TextGenerationJobConfig$ === "object");
assert(typeof TextGenerationResolvedAttributes$ === "object");
assert(typeof ThroughputConfig$ === "object");
assert(typeof ThroughputConfigDescription$ === "object");
assert(typeof ThroughputConfigUpdate$ === "object");
assert(typeof TimeSeriesConfig$ === "object");
assert(typeof TimeSeriesForecastingJobConfig$ === "object");
assert(typeof TimeSeriesForecastingSettings$ === "object");
assert(typeof TimeSeriesTransformations$ === "object");
assert(typeof TotalHits$ === "object");
assert(typeof TrackingServerSummary$ === "object");
assert(typeof TrafficPattern$ === "object");
assert(typeof TrafficRoutingConfig$ === "object");
assert(typeof TrainingImageConfig$ === "object");
assert(typeof TrainingJob$ === "object");
assert(typeof TrainingJobDefinition$ === "object");
assert(typeof TrainingJobStatusCounters$ === "object");
assert(typeof TrainingJobStepMetadata$ === "object");
assert(typeof TrainingJobSummary$ === "object");
assert(typeof TrainingPlanFilter$ === "object");
assert(typeof TrainingPlanOffering$ === "object");
assert(typeof TrainingPlanSummary$ === "object");
assert(typeof TrainingProgressInfo$ === "object");
assert(typeof TrainingRepositoryAuthConfig$ === "object");
assert(typeof TrainingSpecification$ === "object");
assert(typeof TransformDataSource$ === "object");
assert(typeof TransformInput$ === "object");
assert(typeof TransformJob$ === "object");
assert(typeof TransformJobDefinition$ === "object");
assert(typeof TransformJobStepMetadata$ === "object");
assert(typeof TransformJobSummary$ === "object");
assert(typeof TransformOutput$ === "object");
assert(typeof TransformResources$ === "object");
assert(typeof TransformS3DataSource$ === "object");
assert(typeof Trial$ === "object");
assert(typeof TrialComponent$ === "object");
assert(typeof TrialComponentArtifact$ === "object");
assert(typeof TrialComponentMetricSummary$ === "object");
assert(typeof TrialComponentParameterValue$ === "object");
assert(typeof TrialComponentSimpleSummary$ === "object");
assert(typeof TrialComponentSource$ === "object");
assert(typeof TrialComponentSourceDetail$ === "object");
assert(typeof TrialComponentStatus$ === "object");
assert(typeof TrialComponentSummary$ === "object");
assert(typeof TrialSource$ === "object");
assert(typeof TrialSummary$ === "object");
assert(typeof TrustedIdentityPropagationSettings$ === "object");
assert(typeof TtlDuration$ === "object");
assert(typeof TuningJobCompletionCriteria$ === "object");
assert(typeof TuningJobStepMetaData$ === "object");
assert(typeof UiConfig$ === "object");
assert(typeof UiTemplate$ === "object");
assert(typeof UiTemplateInfo$ === "object");
assert(typeof UltraServer$ === "object");
assert(typeof UltraServerInfo$ === "object");
assert(typeof UltraServerSummary$ === "object");
assert(typeof UnifiedStudioSettings$ === "object");
assert(typeof UpdateActionRequest$ === "object");
assert(typeof UpdateActionResponse$ === "object");
assert(typeof UpdateAppImageConfigRequest$ === "object");
assert(typeof UpdateAppImageConfigResponse$ === "object");
assert(typeof UpdateArtifactRequest$ === "object");
assert(typeof UpdateArtifactResponse$ === "object");
assert(typeof UpdateClusterRequest$ === "object");
assert(typeof UpdateClusterResponse$ === "object");
assert(typeof UpdateClusterSchedulerConfigRequest$ === "object");
assert(typeof UpdateClusterSchedulerConfigResponse$ === "object");
assert(typeof UpdateClusterSoftwareInstanceGroupSpecification$ === "object");
assert(typeof UpdateClusterSoftwareRequest$ === "object");
assert(typeof UpdateClusterSoftwareResponse$ === "object");
assert(typeof UpdateCodeRepositoryInput$ === "object");
assert(typeof UpdateCodeRepositoryOutput$ === "object");
assert(typeof UpdateComputeQuotaRequest$ === "object");
assert(typeof UpdateComputeQuotaResponse$ === "object");
assert(typeof UpdateContextRequest$ === "object");
assert(typeof UpdateContextResponse$ === "object");
assert(typeof UpdateDeviceFleetRequest$ === "object");
assert(typeof UpdateDevicesRequest$ === "object");
assert(typeof UpdateDomainRequest$ === "object");
assert(typeof UpdateDomainResponse$ === "object");
assert(typeof UpdateEndpointInput$ === "object");
assert(typeof UpdateEndpointOutput$ === "object");
assert(typeof UpdateEndpointWeightsAndCapacitiesInput$ === "object");
assert(typeof UpdateEndpointWeightsAndCapacitiesOutput$ === "object");
assert(typeof UpdateExperimentRequest$ === "object");
assert(typeof UpdateExperimentResponse$ === "object");
assert(typeof UpdateFeatureGroupRequest$ === "object");
assert(typeof UpdateFeatureGroupResponse$ === "object");
assert(typeof UpdateFeatureMetadataRequest$ === "object");
assert(typeof UpdateHubContentReferenceRequest$ === "object");
assert(typeof UpdateHubContentReferenceResponse$ === "object");
assert(typeof UpdateHubContentRequest$ === "object");
assert(typeof UpdateHubContentResponse$ === "object");
assert(typeof UpdateHubRequest$ === "object");
assert(typeof UpdateHubResponse$ === "object");
assert(typeof UpdateImageRequest$ === "object");
assert(typeof UpdateImageResponse$ === "object");
assert(typeof UpdateImageVersionRequest$ === "object");
assert(typeof UpdateImageVersionResponse$ === "object");
assert(typeof UpdateInferenceComponentInput$ === "object");
assert(typeof UpdateInferenceComponentOutput$ === "object");
assert(typeof UpdateInferenceComponentRuntimeConfigInput$ === "object");
assert(typeof UpdateInferenceComponentRuntimeConfigOutput$ === "object");
assert(typeof UpdateInferenceExperimentRequest$ === "object");
assert(typeof UpdateInferenceExperimentResponse$ === "object");
assert(typeof UpdateMlflowAppRequest$ === "object");
assert(typeof UpdateMlflowAppResponse$ === "object");
assert(typeof UpdateMlflowTrackingServerRequest$ === "object");
assert(typeof UpdateMlflowTrackingServerResponse$ === "object");
assert(typeof UpdateModelCardRequest$ === "object");
assert(typeof UpdateModelCardResponse$ === "object");
assert(typeof UpdateModelPackageInput$ === "object");
assert(typeof UpdateModelPackageOutput$ === "object");
assert(typeof UpdateMonitoringAlertRequest$ === "object");
assert(typeof UpdateMonitoringAlertResponse$ === "object");
assert(typeof UpdateMonitoringScheduleRequest$ === "object");
assert(typeof UpdateMonitoringScheduleResponse$ === "object");
assert(typeof UpdateNotebookInstanceInput$ === "object");
assert(typeof UpdateNotebookInstanceLifecycleConfigInput$ === "object");
assert(typeof UpdateNotebookInstanceLifecycleConfigOutput$ === "object");
assert(typeof UpdateNotebookInstanceOutput$ === "object");
assert(typeof UpdatePartnerAppRequest$ === "object");
assert(typeof UpdatePartnerAppResponse$ === "object");
assert(typeof UpdatePipelineExecutionRequest$ === "object");
assert(typeof UpdatePipelineExecutionResponse$ === "object");
assert(typeof UpdatePipelineRequest$ === "object");
assert(typeof UpdatePipelineResponse$ === "object");
assert(typeof UpdatePipelineVersionRequest$ === "object");
assert(typeof UpdatePipelineVersionResponse$ === "object");
assert(typeof UpdateProjectInput$ === "object");
assert(typeof UpdateProjectOutput$ === "object");
assert(typeof UpdateSpaceRequest$ === "object");
assert(typeof UpdateSpaceResponse$ === "object");
assert(typeof UpdateTemplateProvider$ === "object");
assert(typeof UpdateTrainingJobRequest$ === "object");
assert(typeof UpdateTrainingJobResponse$ === "object");
assert(typeof UpdateTrialComponentRequest$ === "object");
assert(typeof UpdateTrialComponentResponse$ === "object");
assert(typeof UpdateTrialRequest$ === "object");
assert(typeof UpdateTrialResponse$ === "object");
assert(typeof UpdateUserProfileRequest$ === "object");
assert(typeof UpdateUserProfileResponse$ === "object");
assert(typeof UpdateWorkforceRequest$ === "object");
assert(typeof UpdateWorkforceResponse$ === "object");
assert(typeof UpdateWorkteamRequest$ === "object");
assert(typeof UpdateWorkteamResponse$ === "object");
assert(typeof USD$ === "object");
assert(typeof UserContext$ === "object");
assert(typeof UserProfileDetails$ === "object");
assert(typeof UserSettings$ === "object");
assert(typeof VariantProperty$ === "object");
assert(typeof VectorConfig$ === "object");
assert(typeof Vertex$ === "object");
assert(typeof VisibilityConditions$ === "object");
assert(typeof VpcConfig$ === "object");
assert(typeof WarmPoolStatus$ === "object");
assert(typeof WorkerAccessConfiguration$ === "object");
assert(typeof Workforce$ === "object");
assert(typeof WorkforceVpcConfigRequest$ === "object");
assert(typeof WorkforceVpcConfigResponse$ === "object");
assert(typeof WorkspaceSettings$ === "object");
assert(typeof Workteam$ === "object");
// enums
assert(typeof AccountDefaultStatus === "object");
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
assert(typeof CustomizationTechnique === "object");
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
assert(typeof EvaluationType === "object");
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
assert(typeof MaintenanceStatus === "object");
assert(typeof ManagedInstanceScalingStatus === "object");
assert(typeof MetricPublishFrequencyInSeconds === "object");
assert(typeof MetricSetSource === "object");
assert(typeof MIGProfileType === "object");
assert(typeof MlflowAppStatus === "object");
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
assert(typeof ModelPackageRegistrationType === "object");
assert(typeof ModelPackageSortBy === "object");
assert(typeof ModelPackageStatus === "object");
assert(typeof ModelPackageType === "object");
assert(typeof ModelRegistrationMode === "object");
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
assert(typeof Peft === "object");
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
assert(typeof ServerlessJobType === "object");
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
assert(typeof SortMlflowAppBy === "object");
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
assert(ConflictException.prototype instanceof SageMakerServiceException);
assert(typeof ConflictException$ === "object");
assert(ResourceInUse.prototype instanceof SageMakerServiceException);
assert(typeof ResourceInUse$ === "object");
assert(ResourceLimitExceeded.prototype instanceof SageMakerServiceException);
assert(typeof ResourceLimitExceeded$ === "object");
assert(ResourceNotFound.prototype instanceof SageMakerServiceException);
assert(typeof ResourceNotFound$ === "object");
assert(SageMakerServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForEndpointDeleted === "function");
assert(typeof waitForEndpointInService === "function");
assert(typeof waitForImageCreated === "function");
assert(typeof waitForImageDeleted === "function");
assert(typeof waitForImageUpdated === "function");
assert(typeof waitForImageVersionCreated === "function");
assert(typeof waitForImageVersionDeleted === "function");
assert(typeof waitForNotebookInstanceDeleted === "function");
assert(typeof waitForNotebookInstanceInService === "function");
assert(typeof waitForNotebookInstanceStopped === "function");
assert(typeof waitForProcessingJobCompletedOrStopped === "function");
assert(typeof waitForTrainingJobCompletedOrStopped === "function");
assert(typeof waitForTransformJobCompletedOrStopped === "function");
assert(typeof waitUntilEndpointDeleted === "function");
assert(typeof waitUntilEndpointInService === "function");
assert(typeof waitUntilImageCreated === "function");
assert(typeof waitUntilImageDeleted === "function");
assert(typeof waitUntilImageUpdated === "function");
assert(typeof waitUntilImageVersionCreated === "function");
assert(typeof waitUntilImageVersionDeleted === "function");
assert(typeof waitUntilNotebookInstanceDeleted === "function");
assert(typeof waitUntilNotebookInstanceInService === "function");
assert(typeof waitUntilNotebookInstanceStopped === "function");
assert(typeof waitUntilProcessingJobCompletedOrStopped === "function");
assert(typeof waitUntilTrainingJobCompletedOrStopped === "function");
assert(typeof waitUntilTransformJobCompletedOrStopped === "function");
// paginators
assert(typeof paginateCreateHubContentPresignedUrls === "function");
assert(typeof paginateListActions === "function");
assert(typeof paginateListAlgorithms === "function");
assert(typeof paginateListAliases === "function");
assert(typeof paginateListAppImageConfigs === "function");
assert(typeof paginateListApps === "function");
assert(typeof paginateListArtifacts === "function");
assert(typeof paginateListAssociations === "function");
assert(typeof paginateListAutoMLJobs === "function");
assert(typeof paginateListCandidatesForAutoMLJob === "function");
assert(typeof paginateListClusterEvents === "function");
assert(typeof paginateListClusterNodes === "function");
assert(typeof paginateListClusterSchedulerConfigs === "function");
assert(typeof paginateListClusters === "function");
assert(typeof paginateListCodeRepositories === "function");
assert(typeof paginateListCompilationJobs === "function");
assert(typeof paginateListComputeQuotas === "function");
assert(typeof paginateListContexts === "function");
assert(typeof paginateListDataQualityJobDefinitions === "function");
assert(typeof paginateListDeviceFleets === "function");
assert(typeof paginateListDevices === "function");
assert(typeof paginateListDomains === "function");
assert(typeof paginateListEdgeDeploymentPlans === "function");
assert(typeof paginateListEdgePackagingJobs === "function");
assert(typeof paginateListEndpointConfigs === "function");
assert(typeof paginateListEndpoints === "function");
assert(typeof paginateListExperiments === "function");
assert(typeof paginateListFeatureGroups === "function");
assert(typeof paginateListFlowDefinitions === "function");
assert(typeof paginateListHumanTaskUis === "function");
assert(typeof paginateListHyperParameterTuningJobs === "function");
assert(typeof paginateListImageVersions === "function");
assert(typeof paginateListImages === "function");
assert(typeof paginateListInferenceComponents === "function");
assert(typeof paginateListInferenceExperiments === "function");
assert(typeof paginateListInferenceRecommendationsJobSteps === "function");
assert(typeof paginateListInferenceRecommendationsJobs === "function");
assert(typeof paginateListLabelingJobs === "function");
assert(typeof paginateListLabelingJobsForWorkteam === "function");
assert(typeof paginateListLineageGroups === "function");
assert(typeof paginateListMlflowApps === "function");
assert(typeof paginateListMlflowTrackingServers === "function");
assert(typeof paginateListModelBiasJobDefinitions === "function");
assert(typeof paginateListModelCardExportJobs === "function");
assert(typeof paginateListModelCardVersions === "function");
assert(typeof paginateListModelCards === "function");
assert(typeof paginateListModelExplainabilityJobDefinitions === "function");
assert(typeof paginateListModelMetadata === "function");
assert(typeof paginateListModelPackageGroups === "function");
assert(typeof paginateListModelPackages === "function");
assert(typeof paginateListModelQualityJobDefinitions === "function");
assert(typeof paginateListModels === "function");
assert(typeof paginateListMonitoringAlertHistory === "function");
assert(typeof paginateListMonitoringAlerts === "function");
assert(typeof paginateListMonitoringExecutions === "function");
assert(typeof paginateListMonitoringSchedules === "function");
assert(typeof paginateListNotebookInstanceLifecycleConfigs === "function");
assert(typeof paginateListNotebookInstances === "function");
assert(typeof paginateListOptimizationJobs === "function");
assert(typeof paginateListPartnerApps === "function");
assert(typeof paginateListPipelineExecutionSteps === "function");
assert(typeof paginateListPipelineExecutions === "function");
assert(typeof paginateListPipelineParametersForExecution === "function");
assert(typeof paginateListPipelineVersions === "function");
assert(typeof paginateListPipelines === "function");
assert(typeof paginateListProcessingJobs === "function");
assert(typeof paginateListProjects === "function");
assert(typeof paginateListResourceCatalogs === "function");
assert(typeof paginateListSpaces === "function");
assert(typeof paginateListStageDevices === "function");
assert(typeof paginateListStudioLifecycleConfigs === "function");
assert(typeof paginateListSubscribedWorkteams === "function");
assert(typeof paginateListTags === "function");
assert(typeof paginateListTrainingJobs === "function");
assert(typeof paginateListTrainingJobsForHyperParameterTuningJob === "function");
assert(typeof paginateListTrainingPlans === "function");
assert(typeof paginateListTransformJobs === "function");
assert(typeof paginateListTrialComponents === "function");
assert(typeof paginateListTrials === "function");
assert(typeof paginateListUltraServersByReservedCapacity === "function");
assert(typeof paginateListUserProfiles === "function");
assert(typeof paginateListWorkforces === "function");
assert(typeof paginateListWorkteams === "function");
assert(typeof paginateQueryLineage === "function");
assert(typeof paginateSearch === "function");
console.log(`SageMaker index test passed.`);

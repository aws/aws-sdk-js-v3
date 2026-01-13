import {
  _InstanceType,
  AccessBudget$,
  AccessBudgetDetails$,
  AccessBudgetType,
  AccessDeniedException,
  AccessDeniedException$,
  AudienceDestination$,
  AudienceExportJobStatus,
  AudienceExportJobSummary$,
  AudienceGenerationJobDataSource$,
  AudienceGenerationJobStatus,
  AudienceGenerationJobSummary$,
  AudienceModelStatus,
  AudienceModelSummary$,
  AudienceQualityMetrics$,
  AudienceSize$,
  AudienceSizeConfig$,
  AudienceSizeType,
  AutoRefreshMode,
  CancelTrainedModel$,
  CancelTrainedModelCommand,
  CancelTrainedModelInferenceJob$,
  CancelTrainedModelInferenceJobCommand,
  CancelTrainedModelInferenceJobRequest$,
  CancelTrainedModelRequest$,
  CleanRoomsML,
  CleanRoomsMLClient,
  CleanRoomsMLServiceException,
  CollaborationConfiguredModelAlgorithmAssociationSummary$,
  CollaborationMLInputChannelSummary$,
  CollaborationTrainedModelExportJobSummary$,
  CollaborationTrainedModelInferenceJobSummary$,
  CollaborationTrainedModelSummary$,
  ColumnClassificationDetails$,
  ColumnSchema$,
  ColumnType,
  ComputeConfiguration$,
  ConfiguredAudienceModelOutputConfig$,
  ConfiguredAudienceModelStatus,
  ConfiguredAudienceModelSummary$,
  ConfiguredModelAlgorithmAssociationSummary$,
  ConfiguredModelAlgorithmSummary$,
  ConflictException,
  ConflictException$,
  ContainerConfig$,
  CreateAudienceModel$,
  CreateAudienceModelCommand,
  CreateAudienceModelRequest$,
  CreateAudienceModelResponse$,
  CreateConfiguredAudienceModel$,
  CreateConfiguredAudienceModelCommand,
  CreateConfiguredAudienceModelRequest$,
  CreateConfiguredAudienceModelResponse$,
  CreateConfiguredModelAlgorithm$,
  CreateConfiguredModelAlgorithmAssociation$,
  CreateConfiguredModelAlgorithmAssociationCommand,
  CreateConfiguredModelAlgorithmAssociationRequest$,
  CreateConfiguredModelAlgorithmAssociationResponse$,
  CreateConfiguredModelAlgorithmCommand,
  CreateConfiguredModelAlgorithmRequest$,
  CreateConfiguredModelAlgorithmResponse$,
  CreateMLInputChannel$,
  CreateMLInputChannelCommand,
  CreateMLInputChannelRequest$,
  CreateMLInputChannelResponse$,
  CreateTrainedModel$,
  CreateTrainedModelCommand,
  CreateTrainedModelRequest$,
  CreateTrainedModelResponse$,
  CreateTrainingDataset$,
  CreateTrainingDatasetCommand,
  CreateTrainingDatasetRequest$,
  CreateTrainingDatasetResponse$,
  CustomEntityConfig$,
  DataPrivacyScores$,
  Dataset$,
  DatasetInputConfig$,
  DatasetType,
  DataSource$,
  DeleteAudienceGenerationJob$,
  DeleteAudienceGenerationJobCommand,
  DeleteAudienceGenerationJobRequest$,
  DeleteAudienceModel$,
  DeleteAudienceModelCommand,
  DeleteAudienceModelRequest$,
  DeleteConfiguredAudienceModel$,
  DeleteConfiguredAudienceModelCommand,
  DeleteConfiguredAudienceModelPolicy$,
  DeleteConfiguredAudienceModelPolicyCommand,
  DeleteConfiguredAudienceModelPolicyRequest$,
  DeleteConfiguredAudienceModelRequest$,
  DeleteConfiguredModelAlgorithm$,
  DeleteConfiguredModelAlgorithmAssociation$,
  DeleteConfiguredModelAlgorithmAssociationCommand,
  DeleteConfiguredModelAlgorithmAssociationRequest$,
  DeleteConfiguredModelAlgorithmCommand,
  DeleteConfiguredModelAlgorithmRequest$,
  DeleteMLConfiguration$,
  DeleteMLConfigurationCommand,
  DeleteMLConfigurationRequest$,
  DeleteMLInputChannelData$,
  DeleteMLInputChannelDataCommand,
  DeleteMLInputChannelDataRequest$,
  DeleteTrainedModelOutput$,
  DeleteTrainedModelOutputCommand,
  DeleteTrainedModelOutputRequest$,
  DeleteTrainingDataset$,
  DeleteTrainingDatasetCommand,
  DeleteTrainingDatasetRequest$,
  Destination$,
  EntityType,
  GetAudienceGenerationJob$,
  GetAudienceGenerationJobCommand,
  GetAudienceGenerationJobRequest$,
  GetAudienceGenerationJobResponse$,
  GetAudienceModel$,
  GetAudienceModelCommand,
  GetAudienceModelRequest$,
  GetAudienceModelResponse$,
  GetCollaborationConfiguredModelAlgorithmAssociation$,
  GetCollaborationConfiguredModelAlgorithmAssociationCommand,
  GetCollaborationConfiguredModelAlgorithmAssociationRequest$,
  GetCollaborationConfiguredModelAlgorithmAssociationResponse$,
  GetCollaborationMLInputChannel$,
  GetCollaborationMLInputChannelCommand,
  GetCollaborationMLInputChannelRequest$,
  GetCollaborationMLInputChannelResponse$,
  GetCollaborationTrainedModel$,
  GetCollaborationTrainedModelCommand,
  GetCollaborationTrainedModelRequest$,
  GetCollaborationTrainedModelResponse$,
  GetConfiguredAudienceModel$,
  GetConfiguredAudienceModelCommand,
  GetConfiguredAudienceModelPolicy$,
  GetConfiguredAudienceModelPolicyCommand,
  GetConfiguredAudienceModelPolicyRequest$,
  GetConfiguredAudienceModelPolicyResponse$,
  GetConfiguredAudienceModelRequest$,
  GetConfiguredAudienceModelResponse$,
  GetConfiguredModelAlgorithm$,
  GetConfiguredModelAlgorithmAssociation$,
  GetConfiguredModelAlgorithmAssociationCommand,
  GetConfiguredModelAlgorithmAssociationRequest$,
  GetConfiguredModelAlgorithmAssociationResponse$,
  GetConfiguredModelAlgorithmCommand,
  GetConfiguredModelAlgorithmRequest$,
  GetConfiguredModelAlgorithmResponse$,
  GetMLConfiguration$,
  GetMLConfigurationCommand,
  GetMLConfigurationRequest$,
  GetMLConfigurationResponse$,
  GetMLInputChannel$,
  GetMLInputChannelCommand,
  GetMLInputChannelRequest$,
  GetMLInputChannelResponse$,
  GetTrainedModel$,
  GetTrainedModelCommand,
  GetTrainedModelInferenceJob$,
  GetTrainedModelInferenceJobCommand,
  GetTrainedModelInferenceJobRequest$,
  GetTrainedModelInferenceJobResponse$,
  GetTrainedModelRequest$,
  GetTrainedModelResponse$,
  GetTrainingDataset$,
  GetTrainingDatasetCommand,
  GetTrainingDatasetRequest$,
  GetTrainingDatasetResponse$,
  GlueDataSource$,
  IncrementalTrainingDataChannel$,
  IncrementalTrainingDataChannelOutput$,
  InferenceContainerConfig$,
  InferenceContainerExecutionParameters$,
  InferenceInstanceType,
  InferenceOutputConfiguration$,
  InferenceReceiverMember$,
  InferenceResourceConfig$,
  InputChannel$,
  InputChannelDataSource$,
  InternalServiceException,
  InternalServiceException$,
  ListAudienceExportJobs$,
  ListAudienceExportJobsCommand,
  ListAudienceExportJobsRequest$,
  ListAudienceExportJobsResponse$,
  ListAudienceGenerationJobs$,
  ListAudienceGenerationJobsCommand,
  ListAudienceGenerationJobsRequest$,
  ListAudienceGenerationJobsResponse$,
  ListAudienceModels$,
  ListAudienceModelsCommand,
  ListAudienceModelsRequest$,
  ListAudienceModelsResponse$,
  ListCollaborationConfiguredModelAlgorithmAssociations$,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommand,
  ListCollaborationConfiguredModelAlgorithmAssociationsRequest$,
  ListCollaborationConfiguredModelAlgorithmAssociationsResponse$,
  ListCollaborationMLInputChannels$,
  ListCollaborationMLInputChannelsCommand,
  ListCollaborationMLInputChannelsRequest$,
  ListCollaborationMLInputChannelsResponse$,
  ListCollaborationTrainedModelExportJobs$,
  ListCollaborationTrainedModelExportJobsCommand,
  ListCollaborationTrainedModelExportJobsRequest$,
  ListCollaborationTrainedModelExportJobsResponse$,
  ListCollaborationTrainedModelInferenceJobs$,
  ListCollaborationTrainedModelInferenceJobsCommand,
  ListCollaborationTrainedModelInferenceJobsRequest$,
  ListCollaborationTrainedModelInferenceJobsResponse$,
  ListCollaborationTrainedModels$,
  ListCollaborationTrainedModelsCommand,
  ListCollaborationTrainedModelsRequest$,
  ListCollaborationTrainedModelsResponse$,
  ListConfiguredAudienceModels$,
  ListConfiguredAudienceModelsCommand,
  ListConfiguredAudienceModelsRequest$,
  ListConfiguredAudienceModelsResponse$,
  ListConfiguredModelAlgorithmAssociations$,
  ListConfiguredModelAlgorithmAssociationsCommand,
  ListConfiguredModelAlgorithmAssociationsRequest$,
  ListConfiguredModelAlgorithmAssociationsResponse$,
  ListConfiguredModelAlgorithms$,
  ListConfiguredModelAlgorithmsCommand,
  ListConfiguredModelAlgorithmsRequest$,
  ListConfiguredModelAlgorithmsResponse$,
  ListMLInputChannels$,
  ListMLInputChannelsCommand,
  ListMLInputChannelsRequest$,
  ListMLInputChannelsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTrainedModelInferenceJobs$,
  ListTrainedModelInferenceJobsCommand,
  ListTrainedModelInferenceJobsRequest$,
  ListTrainedModelInferenceJobsResponse$,
  ListTrainedModels$,
  ListTrainedModelsCommand,
  ListTrainedModelsRequest$,
  ListTrainedModelsResponse$,
  ListTrainedModelVersions$,
  ListTrainedModelVersionsCommand,
  ListTrainedModelVersionsRequest$,
  ListTrainedModelVersionsResponse$,
  ListTrainingDatasets$,
  ListTrainingDatasetsCommand,
  ListTrainingDatasetsRequest$,
  ListTrainingDatasetsResponse$,
  LogRedactionConfiguration$,
  LogsConfigurationPolicy$,
  LogsStatus,
  LogType,
  MembershipInferenceAttackScore$,
  MembershipInferenceAttackVersion,
  MetricDefinition$,
  MetricsConfigurationPolicy$,
  MetricsStatus,
  MLInputChannelStatus,
  MLInputChannelSummary$,
  MLOutputConfiguration$,
  MLSyntheticDataParameters$,
  ModelInferenceDataSource$,
  ModelTrainingDataChannel$,
  NoiseLevelType,
  paginateListAudienceExportJobs,
  paginateListAudienceGenerationJobs,
  paginateListAudienceModels,
  paginateListCollaborationConfiguredModelAlgorithmAssociations,
  paginateListCollaborationMLInputChannels,
  paginateListCollaborationTrainedModelExportJobs,
  paginateListCollaborationTrainedModelInferenceJobs,
  paginateListCollaborationTrainedModels,
  paginateListConfiguredAudienceModels,
  paginateListConfiguredModelAlgorithmAssociations,
  paginateListConfiguredModelAlgorithms,
  paginateListMLInputChannels,
  paginateListTrainedModelInferenceJobs,
  paginateListTrainedModels,
  paginateListTrainedModelVersions,
  paginateListTrainingDatasets,
  PolicyExistenceCondition,
  PrivacyBudgets$,
  PrivacyConfiguration$,
  PrivacyConfigurationPolicies$,
  ProtectedQueryInputParameters$,
  ProtectedQuerySQLParameters$,
  PutConfiguredAudienceModelPolicy$,
  PutConfiguredAudienceModelPolicyCommand,
  PutConfiguredAudienceModelPolicyRequest$,
  PutConfiguredAudienceModelPolicyResponse$,
  PutMLConfiguration$,
  PutMLConfigurationCommand,
  PutMLConfigurationRequest$,
  RelevanceMetric$,
  ResourceConfig$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResultFormat,
  S3ConfigMap$,
  S3DataDistributionType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SharedAudienceMetrics,
  StartAudienceExportJob$,
  StartAudienceExportJobCommand,
  StartAudienceExportJobRequest$,
  StartAudienceGenerationJob$,
  StartAudienceGenerationJobCommand,
  StartAudienceGenerationJobRequest$,
  StartAudienceGenerationJobResponse$,
  StartTrainedModelExportJob$,
  StartTrainedModelExportJobCommand,
  StartTrainedModelExportJobRequest$,
  StartTrainedModelInferenceJob$,
  StartTrainedModelInferenceJobCommand,
  StartTrainedModelInferenceJobRequest$,
  StartTrainedModelInferenceJobResponse$,
  StatusDetails$,
  StoppingCondition$,
  SyntheticDataColumnProperties$,
  SyntheticDataColumnType,
  SyntheticDataConfiguration$,
  SyntheticDataEvaluationScores$,
  TagOnCreatePolicy,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TrainedModelArtifactMaxSize$,
  TrainedModelArtifactMaxSizeUnitType,
  TrainedModelExportFileType,
  TrainedModelExportJobStatus,
  TrainedModelExportOutputConfiguration$,
  TrainedModelExportReceiverMember$,
  TrainedModelExportsConfigurationPolicy$,
  TrainedModelExportsMaxSize$,
  TrainedModelExportsMaxSizeUnitType,
  TrainedModelInferenceJobsConfigurationPolicy$,
  TrainedModelInferenceJobStatus,
  TrainedModelInferenceJobSummary$,
  TrainedModelInferenceMaxOutputSize$,
  TrainedModelInferenceMaxOutputSizeUnitType,
  TrainedModelsConfigurationPolicy$,
  TrainedModelStatus,
  TrainedModelSummary$,
  TrainingDatasetStatus,
  TrainingDatasetSummary$,
  TrainingInputMode,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateConfiguredAudienceModel$,
  UpdateConfiguredAudienceModelCommand,
  UpdateConfiguredAudienceModelRequest$,
  UpdateConfiguredAudienceModelResponse$,
  ValidationException,
  ValidationException$,
  WorkerComputeConfiguration$,
  WorkerComputeConfigurationProperties$,
  WorkerComputeType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CleanRoomsMLClient === "function");
assert(typeof CleanRoomsML === "function");
// commands
assert(typeof CancelTrainedModelCommand === "function");
assert(typeof CancelTrainedModel$ === "object");
assert(typeof CancelTrainedModelInferenceJobCommand === "function");
assert(typeof CancelTrainedModelInferenceJob$ === "object");
assert(typeof CreateAudienceModelCommand === "function");
assert(typeof CreateAudienceModel$ === "object");
assert(typeof CreateConfiguredAudienceModelCommand === "function");
assert(typeof CreateConfiguredAudienceModel$ === "object");
assert(typeof CreateConfiguredModelAlgorithmCommand === "function");
assert(typeof CreateConfiguredModelAlgorithm$ === "object");
assert(typeof CreateConfiguredModelAlgorithmAssociationCommand === "function");
assert(typeof CreateConfiguredModelAlgorithmAssociation$ === "object");
assert(typeof CreateMLInputChannelCommand === "function");
assert(typeof CreateMLInputChannel$ === "object");
assert(typeof CreateTrainedModelCommand === "function");
assert(typeof CreateTrainedModel$ === "object");
assert(typeof CreateTrainingDatasetCommand === "function");
assert(typeof CreateTrainingDataset$ === "object");
assert(typeof DeleteAudienceGenerationJobCommand === "function");
assert(typeof DeleteAudienceGenerationJob$ === "object");
assert(typeof DeleteAudienceModelCommand === "function");
assert(typeof DeleteAudienceModel$ === "object");
assert(typeof DeleteConfiguredAudienceModelCommand === "function");
assert(typeof DeleteConfiguredAudienceModel$ === "object");
assert(typeof DeleteConfiguredAudienceModelPolicyCommand === "function");
assert(typeof DeleteConfiguredAudienceModelPolicy$ === "object");
assert(typeof DeleteConfiguredModelAlgorithmCommand === "function");
assert(typeof DeleteConfiguredModelAlgorithm$ === "object");
assert(typeof DeleteConfiguredModelAlgorithmAssociationCommand === "function");
assert(typeof DeleteConfiguredModelAlgorithmAssociation$ === "object");
assert(typeof DeleteMLConfigurationCommand === "function");
assert(typeof DeleteMLConfiguration$ === "object");
assert(typeof DeleteMLInputChannelDataCommand === "function");
assert(typeof DeleteMLInputChannelData$ === "object");
assert(typeof DeleteTrainedModelOutputCommand === "function");
assert(typeof DeleteTrainedModelOutput$ === "object");
assert(typeof DeleteTrainingDatasetCommand === "function");
assert(typeof DeleteTrainingDataset$ === "object");
assert(typeof GetAudienceGenerationJobCommand === "function");
assert(typeof GetAudienceGenerationJob$ === "object");
assert(typeof GetAudienceModelCommand === "function");
assert(typeof GetAudienceModel$ === "object");
assert(typeof GetCollaborationConfiguredModelAlgorithmAssociationCommand === "function");
assert(typeof GetCollaborationConfiguredModelAlgorithmAssociation$ === "object");
assert(typeof GetCollaborationMLInputChannelCommand === "function");
assert(typeof GetCollaborationMLInputChannel$ === "object");
assert(typeof GetCollaborationTrainedModelCommand === "function");
assert(typeof GetCollaborationTrainedModel$ === "object");
assert(typeof GetConfiguredAudienceModelCommand === "function");
assert(typeof GetConfiguredAudienceModel$ === "object");
assert(typeof GetConfiguredAudienceModelPolicyCommand === "function");
assert(typeof GetConfiguredAudienceModelPolicy$ === "object");
assert(typeof GetConfiguredModelAlgorithmCommand === "function");
assert(typeof GetConfiguredModelAlgorithm$ === "object");
assert(typeof GetConfiguredModelAlgorithmAssociationCommand === "function");
assert(typeof GetConfiguredModelAlgorithmAssociation$ === "object");
assert(typeof GetMLConfigurationCommand === "function");
assert(typeof GetMLConfiguration$ === "object");
assert(typeof GetMLInputChannelCommand === "function");
assert(typeof GetMLInputChannel$ === "object");
assert(typeof GetTrainedModelCommand === "function");
assert(typeof GetTrainedModel$ === "object");
assert(typeof GetTrainedModelInferenceJobCommand === "function");
assert(typeof GetTrainedModelInferenceJob$ === "object");
assert(typeof GetTrainingDatasetCommand === "function");
assert(typeof GetTrainingDataset$ === "object");
assert(typeof ListAudienceExportJobsCommand === "function");
assert(typeof ListAudienceExportJobs$ === "object");
assert(typeof ListAudienceGenerationJobsCommand === "function");
assert(typeof ListAudienceGenerationJobs$ === "object");
assert(typeof ListAudienceModelsCommand === "function");
assert(typeof ListAudienceModels$ === "object");
assert(typeof ListCollaborationConfiguredModelAlgorithmAssociationsCommand === "function");
assert(typeof ListCollaborationConfiguredModelAlgorithmAssociations$ === "object");
assert(typeof ListCollaborationMLInputChannelsCommand === "function");
assert(typeof ListCollaborationMLInputChannels$ === "object");
assert(typeof ListCollaborationTrainedModelExportJobsCommand === "function");
assert(typeof ListCollaborationTrainedModelExportJobs$ === "object");
assert(typeof ListCollaborationTrainedModelInferenceJobsCommand === "function");
assert(typeof ListCollaborationTrainedModelInferenceJobs$ === "object");
assert(typeof ListCollaborationTrainedModelsCommand === "function");
assert(typeof ListCollaborationTrainedModels$ === "object");
assert(typeof ListConfiguredAudienceModelsCommand === "function");
assert(typeof ListConfiguredAudienceModels$ === "object");
assert(typeof ListConfiguredModelAlgorithmAssociationsCommand === "function");
assert(typeof ListConfiguredModelAlgorithmAssociations$ === "object");
assert(typeof ListConfiguredModelAlgorithmsCommand === "function");
assert(typeof ListConfiguredModelAlgorithms$ === "object");
assert(typeof ListMLInputChannelsCommand === "function");
assert(typeof ListMLInputChannels$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTrainedModelInferenceJobsCommand === "function");
assert(typeof ListTrainedModelInferenceJobs$ === "object");
assert(typeof ListTrainedModelsCommand === "function");
assert(typeof ListTrainedModels$ === "object");
assert(typeof ListTrainedModelVersionsCommand === "function");
assert(typeof ListTrainedModelVersions$ === "object");
assert(typeof ListTrainingDatasetsCommand === "function");
assert(typeof ListTrainingDatasets$ === "object");
assert(typeof PutConfiguredAudienceModelPolicyCommand === "function");
assert(typeof PutConfiguredAudienceModelPolicy$ === "object");
assert(typeof PutMLConfigurationCommand === "function");
assert(typeof PutMLConfiguration$ === "object");
assert(typeof StartAudienceExportJobCommand === "function");
assert(typeof StartAudienceExportJob$ === "object");
assert(typeof StartAudienceGenerationJobCommand === "function");
assert(typeof StartAudienceGenerationJob$ === "object");
assert(typeof StartTrainedModelExportJobCommand === "function");
assert(typeof StartTrainedModelExportJob$ === "object");
assert(typeof StartTrainedModelInferenceJobCommand === "function");
assert(typeof StartTrainedModelInferenceJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConfiguredAudienceModelCommand === "function");
assert(typeof UpdateConfiguredAudienceModel$ === "object");
// structural schemas
assert(typeof AccessBudget$ === "object");
assert(typeof AccessBudgetDetails$ === "object");
assert(typeof AudienceDestination$ === "object");
assert(typeof AudienceExportJobSummary$ === "object");
assert(typeof AudienceGenerationJobDataSource$ === "object");
assert(typeof AudienceGenerationJobSummary$ === "object");
assert(typeof AudienceModelSummary$ === "object");
assert(typeof AudienceQualityMetrics$ === "object");
assert(typeof AudienceSize$ === "object");
assert(typeof AudienceSizeConfig$ === "object");
assert(typeof CancelTrainedModelInferenceJobRequest$ === "object");
assert(typeof CancelTrainedModelRequest$ === "object");
assert(typeof CollaborationConfiguredModelAlgorithmAssociationSummary$ === "object");
assert(typeof CollaborationMLInputChannelSummary$ === "object");
assert(typeof CollaborationTrainedModelExportJobSummary$ === "object");
assert(typeof CollaborationTrainedModelInferenceJobSummary$ === "object");
assert(typeof CollaborationTrainedModelSummary$ === "object");
assert(typeof ColumnClassificationDetails$ === "object");
assert(typeof ColumnSchema$ === "object");
assert(typeof ComputeConfiguration$ === "object");
assert(typeof ConfiguredAudienceModelOutputConfig$ === "object");
assert(typeof ConfiguredAudienceModelSummary$ === "object");
assert(typeof ConfiguredModelAlgorithmAssociationSummary$ === "object");
assert(typeof ConfiguredModelAlgorithmSummary$ === "object");
assert(typeof ContainerConfig$ === "object");
assert(typeof CreateAudienceModelRequest$ === "object");
assert(typeof CreateAudienceModelResponse$ === "object");
assert(typeof CreateConfiguredAudienceModelRequest$ === "object");
assert(typeof CreateConfiguredAudienceModelResponse$ === "object");
assert(typeof CreateConfiguredModelAlgorithmAssociationRequest$ === "object");
assert(typeof CreateConfiguredModelAlgorithmAssociationResponse$ === "object");
assert(typeof CreateConfiguredModelAlgorithmRequest$ === "object");
assert(typeof CreateConfiguredModelAlgorithmResponse$ === "object");
assert(typeof CreateMLInputChannelRequest$ === "object");
assert(typeof CreateMLInputChannelResponse$ === "object");
assert(typeof CreateTrainedModelRequest$ === "object");
assert(typeof CreateTrainedModelResponse$ === "object");
assert(typeof CreateTrainingDatasetRequest$ === "object");
assert(typeof CreateTrainingDatasetResponse$ === "object");
assert(typeof CustomEntityConfig$ === "object");
assert(typeof DataPrivacyScores$ === "object");
assert(typeof Dataset$ === "object");
assert(typeof DatasetInputConfig$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DeleteAudienceGenerationJobRequest$ === "object");
assert(typeof DeleteAudienceModelRequest$ === "object");
assert(typeof DeleteConfiguredAudienceModelPolicyRequest$ === "object");
assert(typeof DeleteConfiguredAudienceModelRequest$ === "object");
assert(typeof DeleteConfiguredModelAlgorithmAssociationRequest$ === "object");
assert(typeof DeleteConfiguredModelAlgorithmRequest$ === "object");
assert(typeof DeleteMLConfigurationRequest$ === "object");
assert(typeof DeleteMLInputChannelDataRequest$ === "object");
assert(typeof DeleteTrainedModelOutputRequest$ === "object");
assert(typeof DeleteTrainingDatasetRequest$ === "object");
assert(typeof Destination$ === "object");
assert(typeof GetAudienceGenerationJobRequest$ === "object");
assert(typeof GetAudienceGenerationJobResponse$ === "object");
assert(typeof GetAudienceModelRequest$ === "object");
assert(typeof GetAudienceModelResponse$ === "object");
assert(typeof GetCollaborationConfiguredModelAlgorithmAssociationRequest$ === "object");
assert(typeof GetCollaborationConfiguredModelAlgorithmAssociationResponse$ === "object");
assert(typeof GetCollaborationMLInputChannelRequest$ === "object");
assert(typeof GetCollaborationMLInputChannelResponse$ === "object");
assert(typeof GetCollaborationTrainedModelRequest$ === "object");
assert(typeof GetCollaborationTrainedModelResponse$ === "object");
assert(typeof GetConfiguredAudienceModelPolicyRequest$ === "object");
assert(typeof GetConfiguredAudienceModelPolicyResponse$ === "object");
assert(typeof GetConfiguredAudienceModelRequest$ === "object");
assert(typeof GetConfiguredAudienceModelResponse$ === "object");
assert(typeof GetConfiguredModelAlgorithmAssociationRequest$ === "object");
assert(typeof GetConfiguredModelAlgorithmAssociationResponse$ === "object");
assert(typeof GetConfiguredModelAlgorithmRequest$ === "object");
assert(typeof GetConfiguredModelAlgorithmResponse$ === "object");
assert(typeof GetMLConfigurationRequest$ === "object");
assert(typeof GetMLConfigurationResponse$ === "object");
assert(typeof GetMLInputChannelRequest$ === "object");
assert(typeof GetMLInputChannelResponse$ === "object");
assert(typeof GetTrainedModelInferenceJobRequest$ === "object");
assert(typeof GetTrainedModelInferenceJobResponse$ === "object");
assert(typeof GetTrainedModelRequest$ === "object");
assert(typeof GetTrainedModelResponse$ === "object");
assert(typeof GetTrainingDatasetRequest$ === "object");
assert(typeof GetTrainingDatasetResponse$ === "object");
assert(typeof GlueDataSource$ === "object");
assert(typeof IncrementalTrainingDataChannel$ === "object");
assert(typeof IncrementalTrainingDataChannelOutput$ === "object");
assert(typeof InferenceContainerConfig$ === "object");
assert(typeof InferenceContainerExecutionParameters$ === "object");
assert(typeof InferenceOutputConfiguration$ === "object");
assert(typeof InferenceReceiverMember$ === "object");
assert(typeof InferenceResourceConfig$ === "object");
assert(typeof InputChannel$ === "object");
assert(typeof InputChannelDataSource$ === "object");
assert(typeof ListAudienceExportJobsRequest$ === "object");
assert(typeof ListAudienceExportJobsResponse$ === "object");
assert(typeof ListAudienceGenerationJobsRequest$ === "object");
assert(typeof ListAudienceGenerationJobsResponse$ === "object");
assert(typeof ListAudienceModelsRequest$ === "object");
assert(typeof ListAudienceModelsResponse$ === "object");
assert(typeof ListCollaborationConfiguredModelAlgorithmAssociationsRequest$ === "object");
assert(typeof ListCollaborationConfiguredModelAlgorithmAssociationsResponse$ === "object");
assert(typeof ListCollaborationMLInputChannelsRequest$ === "object");
assert(typeof ListCollaborationMLInputChannelsResponse$ === "object");
assert(typeof ListCollaborationTrainedModelExportJobsRequest$ === "object");
assert(typeof ListCollaborationTrainedModelExportJobsResponse$ === "object");
assert(typeof ListCollaborationTrainedModelInferenceJobsRequest$ === "object");
assert(typeof ListCollaborationTrainedModelInferenceJobsResponse$ === "object");
assert(typeof ListCollaborationTrainedModelsRequest$ === "object");
assert(typeof ListCollaborationTrainedModelsResponse$ === "object");
assert(typeof ListConfiguredAudienceModelsRequest$ === "object");
assert(typeof ListConfiguredAudienceModelsResponse$ === "object");
assert(typeof ListConfiguredModelAlgorithmAssociationsRequest$ === "object");
assert(typeof ListConfiguredModelAlgorithmAssociationsResponse$ === "object");
assert(typeof ListConfiguredModelAlgorithmsRequest$ === "object");
assert(typeof ListConfiguredModelAlgorithmsResponse$ === "object");
assert(typeof ListMLInputChannelsRequest$ === "object");
assert(typeof ListMLInputChannelsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTrainedModelInferenceJobsRequest$ === "object");
assert(typeof ListTrainedModelInferenceJobsResponse$ === "object");
assert(typeof ListTrainedModelsRequest$ === "object");
assert(typeof ListTrainedModelsResponse$ === "object");
assert(typeof ListTrainedModelVersionsRequest$ === "object");
assert(typeof ListTrainedModelVersionsResponse$ === "object");
assert(typeof ListTrainingDatasetsRequest$ === "object");
assert(typeof ListTrainingDatasetsResponse$ === "object");
assert(typeof LogRedactionConfiguration$ === "object");
assert(typeof LogsConfigurationPolicy$ === "object");
assert(typeof MembershipInferenceAttackScore$ === "object");
assert(typeof MetricDefinition$ === "object");
assert(typeof MetricsConfigurationPolicy$ === "object");
assert(typeof MLInputChannelSummary$ === "object");
assert(typeof MLOutputConfiguration$ === "object");
assert(typeof MLSyntheticDataParameters$ === "object");
assert(typeof ModelInferenceDataSource$ === "object");
assert(typeof ModelTrainingDataChannel$ === "object");
assert(typeof PrivacyBudgets$ === "object");
assert(typeof PrivacyConfiguration$ === "object");
assert(typeof PrivacyConfigurationPolicies$ === "object");
assert(typeof ProtectedQueryInputParameters$ === "object");
assert(typeof ProtectedQuerySQLParameters$ === "object");
assert(typeof PutConfiguredAudienceModelPolicyRequest$ === "object");
assert(typeof PutConfiguredAudienceModelPolicyResponse$ === "object");
assert(typeof PutMLConfigurationRequest$ === "object");
assert(typeof RelevanceMetric$ === "object");
assert(typeof ResourceConfig$ === "object");
assert(typeof S3ConfigMap$ === "object");
assert(typeof StartAudienceExportJobRequest$ === "object");
assert(typeof StartAudienceGenerationJobRequest$ === "object");
assert(typeof StartAudienceGenerationJobResponse$ === "object");
assert(typeof StartTrainedModelExportJobRequest$ === "object");
assert(typeof StartTrainedModelInferenceJobRequest$ === "object");
assert(typeof StartTrainedModelInferenceJobResponse$ === "object");
assert(typeof StatusDetails$ === "object");
assert(typeof StoppingCondition$ === "object");
assert(typeof SyntheticDataColumnProperties$ === "object");
assert(typeof SyntheticDataConfiguration$ === "object");
assert(typeof SyntheticDataEvaluationScores$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TrainedModelArtifactMaxSize$ === "object");
assert(typeof TrainedModelExportOutputConfiguration$ === "object");
assert(typeof TrainedModelExportReceiverMember$ === "object");
assert(typeof TrainedModelExportsConfigurationPolicy$ === "object");
assert(typeof TrainedModelExportsMaxSize$ === "object");
assert(typeof TrainedModelInferenceJobsConfigurationPolicy$ === "object");
assert(typeof TrainedModelInferenceJobSummary$ === "object");
assert(typeof TrainedModelInferenceMaxOutputSize$ === "object");
assert(typeof TrainedModelsConfigurationPolicy$ === "object");
assert(typeof TrainedModelSummary$ === "object");
assert(typeof TrainingDatasetSummary$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateConfiguredAudienceModelRequest$ === "object");
assert(typeof UpdateConfiguredAudienceModelResponse$ === "object");
assert(typeof WorkerComputeConfiguration$ === "object");
assert(typeof WorkerComputeConfigurationProperties$ === "object");
// enums
assert(typeof AccessBudgetType === "object");
assert(typeof AudienceExportJobStatus === "object");
assert(typeof AudienceGenerationJobStatus === "object");
assert(typeof AudienceModelStatus === "object");
assert(typeof AudienceSizeType === "object");
assert(typeof AutoRefreshMode === "object");
assert(typeof ColumnType === "object");
assert(typeof ConfiguredAudienceModelStatus === "object");
assert(typeof DatasetType === "object");
assert(typeof EntityType === "object");
assert(typeof InferenceInstanceType === "object");
assert(typeof _InstanceType === "object");
assert(typeof LogsStatus === "object");
assert(typeof LogType === "object");
assert(typeof MembershipInferenceAttackVersion === "object");
assert(typeof MetricsStatus === "object");
assert(typeof MLInputChannelStatus === "object");
assert(typeof NoiseLevelType === "object");
assert(typeof PolicyExistenceCondition === "object");
assert(typeof ResultFormat === "object");
assert(typeof S3DataDistributionType === "object");
assert(typeof SharedAudienceMetrics === "object");
assert(typeof SyntheticDataColumnType === "object");
assert(typeof TagOnCreatePolicy === "object");
assert(typeof TrainedModelArtifactMaxSizeUnitType === "object");
assert(typeof TrainedModelExportFileType === "object");
assert(typeof TrainedModelExportJobStatus === "object");
assert(typeof TrainedModelExportsMaxSizeUnitType === "object");
assert(typeof TrainedModelInferenceJobStatus === "object");
assert(typeof TrainedModelInferenceMaxOutputSizeUnitType === "object");
assert(typeof TrainedModelStatus === "object");
assert(typeof TrainingDatasetStatus === "object");
assert(typeof TrainingInputMode === "object");
assert(typeof WorkerComputeType === "object");
// errors
assert(AccessDeniedException.prototype instanceof CleanRoomsMLServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof CleanRoomsMLServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServiceException.prototype instanceof CleanRoomsMLServiceException);
assert(typeof InternalServiceException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CleanRoomsMLServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof CleanRoomsMLServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof CleanRoomsMLServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof CleanRoomsMLServiceException);
assert(typeof ValidationException$ === "object");
assert(CleanRoomsMLServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAudienceExportJobs === "function");
assert(typeof paginateListAudienceGenerationJobs === "function");
assert(typeof paginateListAudienceModels === "function");
assert(typeof paginateListCollaborationConfiguredModelAlgorithmAssociations === "function");
assert(typeof paginateListCollaborationMLInputChannels === "function");
assert(typeof paginateListCollaborationTrainedModelExportJobs === "function");
assert(typeof paginateListCollaborationTrainedModelInferenceJobs === "function");
assert(typeof paginateListCollaborationTrainedModels === "function");
assert(typeof paginateListConfiguredAudienceModels === "function");
assert(typeof paginateListConfiguredModelAlgorithmAssociations === "function");
assert(typeof paginateListConfiguredModelAlgorithms === "function");
assert(typeof paginateListMLInputChannels === "function");
assert(typeof paginateListTrainedModelInferenceJobs === "function");
assert(typeof paginateListTrainedModelVersions === "function");
assert(typeof paginateListTrainedModels === "function");
assert(typeof paginateListTrainingDatasets === "function");
console.log(`CleanRoomsML index test passed.`);

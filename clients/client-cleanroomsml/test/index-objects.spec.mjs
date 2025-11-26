import {
  AccessBudgetType,
  AudienceExportJobStatus,
  AudienceGenerationJobStatus,
  AudienceModelStatus,
  AudienceSizeType,
  AutoRefreshMode,
  CancelTrainedModelCommand,
  CancelTrainedModelInferenceJobCommand,
  CleanRoomsML,
  CleanRoomsMLClient,
  CleanRoomsMLServiceException,
  ColumnType,
  ConfiguredAudienceModelStatus,
  CreateAudienceModelCommand,
  CreateConfiguredAudienceModelCommand,
  CreateConfiguredModelAlgorithmAssociationCommand,
  CreateConfiguredModelAlgorithmCommand,
  CreateMLInputChannelCommand,
  CreateTrainedModelCommand,
  CreateTrainingDatasetCommand,
  DatasetType,
  DeleteAudienceGenerationJobCommand,
  DeleteAudienceModelCommand,
  DeleteConfiguredAudienceModelCommand,
  DeleteConfiguredAudienceModelPolicyCommand,
  DeleteConfiguredModelAlgorithmAssociationCommand,
  DeleteConfiguredModelAlgorithmCommand,
  DeleteMLConfigurationCommand,
  DeleteMLInputChannelDataCommand,
  DeleteTrainedModelOutputCommand,
  DeleteTrainingDatasetCommand,
  EntityType,
  GetAudienceGenerationJobCommand,
  GetAudienceModelCommand,
  GetCollaborationConfiguredModelAlgorithmAssociationCommand,
  GetCollaborationMLInputChannelCommand,
  GetCollaborationTrainedModelCommand,
  GetConfiguredAudienceModelCommand,
  GetConfiguredAudienceModelPolicyCommand,
  GetConfiguredModelAlgorithmAssociationCommand,
  GetConfiguredModelAlgorithmCommand,
  GetMLConfigurationCommand,
  GetMLInputChannelCommand,
  GetTrainedModelCommand,
  GetTrainedModelInferenceJobCommand,
  GetTrainingDatasetCommand,
  InferenceInstanceType,
  ListAudienceExportJobsCommand,
  ListAudienceGenerationJobsCommand,
  ListAudienceModelsCommand,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommand,
  ListCollaborationMLInputChannelsCommand,
  ListCollaborationTrainedModelExportJobsCommand,
  ListCollaborationTrainedModelInferenceJobsCommand,
  ListCollaborationTrainedModelsCommand,
  ListConfiguredAudienceModelsCommand,
  ListConfiguredModelAlgorithmAssociationsCommand,
  ListConfiguredModelAlgorithmsCommand,
  ListMLInputChannelsCommand,
  ListTagsForResourceCommand,
  ListTrainedModelInferenceJobsCommand,
  ListTrainedModelVersionsCommand,
  ListTrainedModelsCommand,
  ListTrainingDatasetsCommand,
  LogType,
  LogsStatus,
  MLInputChannelStatus,
  MetricsStatus,
  NoiseLevelType,
  PolicyExistenceCondition,
  PutConfiguredAudienceModelPolicyCommand,
  PutMLConfigurationCommand,
  ResultFormat,
  S3DataDistributionType,
  SharedAudienceMetrics,
  StartAudienceExportJobCommand,
  StartAudienceGenerationJobCommand,
  StartTrainedModelExportJobCommand,
  StartTrainedModelInferenceJobCommand,
  TagOnCreatePolicy,
  TagResourceCommand,
  TrainedModelArtifactMaxSizeUnitType,
  TrainedModelExportFileType,
  TrainedModelExportJobStatus,
  TrainedModelExportsMaxSizeUnitType,
  TrainedModelInferenceJobStatus,
  TrainedModelInferenceMaxOutputSizeUnitType,
  TrainedModelStatus,
  TrainingDatasetStatus,
  TrainingInputMode,
  UntagResourceCommand,
  UpdateConfiguredAudienceModelCommand,
  WorkerComputeType,
  _InstanceType,
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
  paginateListTrainedModelVersions,
  paginateListTrainedModels,
  paginateListTrainingDatasets,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CleanRoomsMLClient === "function")
assert(typeof CleanRoomsML === "function")
// commands
assert(typeof CancelTrainedModelCommand === "function")
assert(typeof CancelTrainedModelInferenceJobCommand === "function")
assert(typeof CreateAudienceModelCommand === "function")
assert(typeof CreateConfiguredAudienceModelCommand === "function")
assert(typeof CreateConfiguredModelAlgorithmCommand === "function")
assert(typeof CreateConfiguredModelAlgorithmAssociationCommand === "function")
assert(typeof CreateMLInputChannelCommand === "function")
assert(typeof CreateTrainedModelCommand === "function")
assert(typeof CreateTrainingDatasetCommand === "function")
assert(typeof DeleteAudienceGenerationJobCommand === "function")
assert(typeof DeleteAudienceModelCommand === "function")
assert(typeof DeleteConfiguredAudienceModelCommand === "function")
assert(typeof DeleteConfiguredAudienceModelPolicyCommand === "function")
assert(typeof DeleteConfiguredModelAlgorithmCommand === "function")
assert(typeof DeleteConfiguredModelAlgorithmAssociationCommand === "function")
assert(typeof DeleteMLConfigurationCommand === "function")
assert(typeof DeleteMLInputChannelDataCommand === "function")
assert(typeof DeleteTrainedModelOutputCommand === "function")
assert(typeof DeleteTrainingDatasetCommand === "function")
assert(typeof GetAudienceGenerationJobCommand === "function")
assert(typeof GetAudienceModelCommand === "function")
assert(typeof GetCollaborationConfiguredModelAlgorithmAssociationCommand === "function")
assert(typeof GetCollaborationMLInputChannelCommand === "function")
assert(typeof GetCollaborationTrainedModelCommand === "function")
assert(typeof GetConfiguredAudienceModelCommand === "function")
assert(typeof GetConfiguredAudienceModelPolicyCommand === "function")
assert(typeof GetConfiguredModelAlgorithmCommand === "function")
assert(typeof GetConfiguredModelAlgorithmAssociationCommand === "function")
assert(typeof GetMLConfigurationCommand === "function")
assert(typeof GetMLInputChannelCommand === "function")
assert(typeof GetTrainedModelCommand === "function")
assert(typeof GetTrainedModelInferenceJobCommand === "function")
assert(typeof GetTrainingDatasetCommand === "function")
assert(typeof ListAudienceExportJobsCommand === "function")
assert(typeof ListAudienceGenerationJobsCommand === "function")
assert(typeof ListAudienceModelsCommand === "function")
assert(typeof ListCollaborationConfiguredModelAlgorithmAssociationsCommand === "function")
assert(typeof ListCollaborationMLInputChannelsCommand === "function")
assert(typeof ListCollaborationTrainedModelExportJobsCommand === "function")
assert(typeof ListCollaborationTrainedModelInferenceJobsCommand === "function")
assert(typeof ListCollaborationTrainedModelsCommand === "function")
assert(typeof ListConfiguredAudienceModelsCommand === "function")
assert(typeof ListConfiguredModelAlgorithmAssociationsCommand === "function")
assert(typeof ListConfiguredModelAlgorithmsCommand === "function")
assert(typeof ListMLInputChannelsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTrainedModelInferenceJobsCommand === "function")
assert(typeof ListTrainedModelsCommand === "function")
assert(typeof ListTrainedModelVersionsCommand === "function")
assert(typeof ListTrainingDatasetsCommand === "function")
assert(typeof PutConfiguredAudienceModelPolicyCommand === "function")
assert(typeof PutMLConfigurationCommand === "function")
assert(typeof StartAudienceExportJobCommand === "function")
assert(typeof StartAudienceGenerationJobCommand === "function")
assert(typeof StartTrainedModelExportJobCommand === "function")
assert(typeof StartTrainedModelInferenceJobCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateConfiguredAudienceModelCommand === "function")
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
assert(typeof MetricsStatus === "object");
assert(typeof MLInputChannelStatus === "object");
assert(typeof NoiseLevelType === "object");
assert(typeof PolicyExistenceCondition === "object");
assert(typeof ResultFormat === "object");
assert(typeof S3DataDistributionType === "object");
assert(typeof SharedAudienceMetrics === "object");
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
assert(CleanRoomsMLServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListAudienceExportJobs === "function")
assert(typeof paginateListAudienceGenerationJobs === "function")
assert(typeof paginateListAudienceModels === "function")
assert(typeof paginateListCollaborationConfiguredModelAlgorithmAssociations === "function")
assert(typeof paginateListCollaborationMLInputChannels === "function")
assert(typeof paginateListCollaborationTrainedModelExportJobs === "function")
assert(typeof paginateListCollaborationTrainedModelInferenceJobs === "function")
assert(typeof paginateListCollaborationTrainedModels === "function")
assert(typeof paginateListConfiguredAudienceModels === "function")
assert(typeof paginateListConfiguredModelAlgorithmAssociations === "function")
assert(typeof paginateListConfiguredModelAlgorithms === "function")
assert(typeof paginateListMLInputChannels === "function")
assert(typeof paginateListTrainedModelInferenceJobs === "function")
assert(typeof paginateListTrainedModelVersions === "function")
assert(typeof paginateListTrainedModels === "function")
assert(typeof paginateListTrainingDatasets === "function")
console.log(`CleanRoomsML index test passed.`);

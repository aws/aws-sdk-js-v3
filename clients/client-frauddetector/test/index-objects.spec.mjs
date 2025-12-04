import {
  AsyncJobStatus,
  BatchCreateVariableCommand,
  BatchGetVariableCommand,
  CancelBatchImportJobCommand,
  CancelBatchPredictionJobCommand,
  CreateBatchImportJobCommand,
  CreateBatchPredictionJobCommand,
  CreateDetectorVersionCommand,
  CreateListCommand,
  CreateModelCommand,
  CreateModelVersionCommand,
  CreateRuleCommand,
  CreateVariableCommand,
  DataSource,
  DataType,
  DeleteBatchImportJobCommand,
  DeleteBatchPredictionJobCommand,
  DeleteDetectorCommand,
  DeleteDetectorVersionCommand,
  DeleteEntityTypeCommand,
  DeleteEventCommand,
  DeleteEventTypeCommand,
  DeleteEventsByEventTypeCommand,
  DeleteExternalModelCommand,
  DeleteLabelCommand,
  DeleteListCommand,
  DeleteModelCommand,
  DeleteModelVersionCommand,
  DeleteOutcomeCommand,
  DeleteRuleCommand,
  DeleteVariableCommand,
  DescribeDetectorCommand,
  DescribeModelVersionsCommand,
  DetectorVersionStatus,
  EventIngestion,
  FraudDetector,
  FraudDetectorClient,
  FraudDetectorServiceException,
  GetBatchImportJobsCommand,
  GetBatchPredictionJobsCommand,
  GetDeleteEventsByEventTypeStatusCommand,
  GetDetectorVersionCommand,
  GetDetectorsCommand,
  GetEntityTypesCommand,
  GetEventCommand,
  GetEventPredictionCommand,
  GetEventPredictionMetadataCommand,
  GetEventTypesCommand,
  GetExternalModelsCommand,
  GetKMSEncryptionKeyCommand,
  GetLabelsCommand,
  GetListElementsCommand,
  GetListsMetadataCommand,
  GetModelVersionCommand,
  GetModelsCommand,
  GetOutcomesCommand,
  GetRulesCommand,
  GetVariablesCommand,
  Language,
  ListEventPredictionsCommand,
  ListTagsForResourceCommand,
  ListUpdateMode,
  ModelEndpointStatus,
  ModelInputDataFormat,
  ModelOutputDataFormat,
  ModelSource,
  ModelTypeEnum,
  ModelVersionStatus,
  PutDetectorCommand,
  PutEntityTypeCommand,
  PutEventTypeCommand,
  PutExternalModelCommand,
  PutKMSEncryptionKeyCommand,
  PutLabelCommand,
  PutOutcomeCommand,
  RuleExecutionMode,
  SendEventCommand,
  TagResourceCommand,
  TrainingDataSourceEnum,
  UnlabeledEventsTreatment,
  UntagResourceCommand,
  UpdateDetectorVersionCommand,
  UpdateDetectorVersionMetadataCommand,
  UpdateDetectorVersionStatusCommand,
  UpdateEventLabelCommand,
  UpdateListCommand,
  UpdateModelCommand,
  UpdateModelVersionCommand,
  UpdateModelVersionStatusCommand,
  UpdateRuleMetadataCommand,
  UpdateRuleVersionCommand,
  UpdateVariableCommand,
  paginateDescribeModelVersions,
  paginateGetBatchImportJobs,
  paginateGetBatchPredictionJobs,
  paginateGetDetectors,
  paginateGetEntityTypes,
  paginateGetEventTypes,
  paginateGetExternalModels,
  paginateGetLabels,
  paginateGetListElements,
  paginateGetListsMetadata,
  paginateGetModels,
  paginateGetOutcomes,
  paginateGetRules,
  paginateGetVariables,
  paginateListEventPredictions,
  paginateListTagsForResource,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FraudDetectorClient === "function")
assert(typeof FraudDetector === "function")
// commands
assert(typeof BatchCreateVariableCommand === "function")
assert(typeof BatchGetVariableCommand === "function")
assert(typeof CancelBatchImportJobCommand === "function")
assert(typeof CancelBatchPredictionJobCommand === "function")
assert(typeof CreateBatchImportJobCommand === "function")
assert(typeof CreateBatchPredictionJobCommand === "function")
assert(typeof CreateDetectorVersionCommand === "function")
assert(typeof CreateListCommand === "function")
assert(typeof CreateModelCommand === "function")
assert(typeof CreateModelVersionCommand === "function")
assert(typeof CreateRuleCommand === "function")
assert(typeof CreateVariableCommand === "function")
assert(typeof DeleteBatchImportJobCommand === "function")
assert(typeof DeleteBatchPredictionJobCommand === "function")
assert(typeof DeleteDetectorCommand === "function")
assert(typeof DeleteDetectorVersionCommand === "function")
assert(typeof DeleteEntityTypeCommand === "function")
assert(typeof DeleteEventCommand === "function")
assert(typeof DeleteEventsByEventTypeCommand === "function")
assert(typeof DeleteEventTypeCommand === "function")
assert(typeof DeleteExternalModelCommand === "function")
assert(typeof DeleteLabelCommand === "function")
assert(typeof DeleteListCommand === "function")
assert(typeof DeleteModelCommand === "function")
assert(typeof DeleteModelVersionCommand === "function")
assert(typeof DeleteOutcomeCommand === "function")
assert(typeof DeleteRuleCommand === "function")
assert(typeof DeleteVariableCommand === "function")
assert(typeof DescribeDetectorCommand === "function")
assert(typeof DescribeModelVersionsCommand === "function")
assert(typeof GetBatchImportJobsCommand === "function")
assert(typeof GetBatchPredictionJobsCommand === "function")
assert(typeof GetDeleteEventsByEventTypeStatusCommand === "function")
assert(typeof GetDetectorsCommand === "function")
assert(typeof GetDetectorVersionCommand === "function")
assert(typeof GetEntityTypesCommand === "function")
assert(typeof GetEventCommand === "function")
assert(typeof GetEventPredictionCommand === "function")
assert(typeof GetEventPredictionMetadataCommand === "function")
assert(typeof GetEventTypesCommand === "function")
assert(typeof GetExternalModelsCommand === "function")
assert(typeof GetKMSEncryptionKeyCommand === "function")
assert(typeof GetLabelsCommand === "function")
assert(typeof GetListElementsCommand === "function")
assert(typeof GetListsMetadataCommand === "function")
assert(typeof GetModelsCommand === "function")
assert(typeof GetModelVersionCommand === "function")
assert(typeof GetOutcomesCommand === "function")
assert(typeof GetRulesCommand === "function")
assert(typeof GetVariablesCommand === "function")
assert(typeof ListEventPredictionsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutDetectorCommand === "function")
assert(typeof PutEntityTypeCommand === "function")
assert(typeof PutEventTypeCommand === "function")
assert(typeof PutExternalModelCommand === "function")
assert(typeof PutKMSEncryptionKeyCommand === "function")
assert(typeof PutLabelCommand === "function")
assert(typeof PutOutcomeCommand === "function")
assert(typeof SendEventCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateDetectorVersionCommand === "function")
assert(typeof UpdateDetectorVersionMetadataCommand === "function")
assert(typeof UpdateDetectorVersionStatusCommand === "function")
assert(typeof UpdateEventLabelCommand === "function")
assert(typeof UpdateListCommand === "function")
assert(typeof UpdateModelCommand === "function")
assert(typeof UpdateModelVersionCommand === "function")
assert(typeof UpdateModelVersionStatusCommand === "function")
assert(typeof UpdateRuleMetadataCommand === "function")
assert(typeof UpdateRuleVersionCommand === "function")
assert(typeof UpdateVariableCommand === "function")
// enums
assert(typeof AsyncJobStatus === "object");
assert(typeof DataSource === "object");
assert(typeof DataType === "object");
assert(typeof DetectorVersionStatus === "object");
assert(typeof EventIngestion === "object");
assert(typeof Language === "object");
assert(typeof ListUpdateMode === "object");
assert(typeof ModelEndpointStatus === "object");
assert(typeof ModelInputDataFormat === "object");
assert(typeof ModelOutputDataFormat === "object");
assert(typeof ModelSource === "object");
assert(typeof ModelTypeEnum === "object");
assert(typeof ModelVersionStatus === "object");
assert(typeof RuleExecutionMode === "object");
assert(typeof TrainingDataSourceEnum === "object");
assert(typeof UnlabeledEventsTreatment === "object");
// errors
assert(FraudDetectorServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeModelVersions === "function")
assert(typeof paginateGetBatchImportJobs === "function")
assert(typeof paginateGetBatchPredictionJobs === "function")
assert(typeof paginateGetDetectors === "function")
assert(typeof paginateGetEntityTypes === "function")
assert(typeof paginateGetEventTypes === "function")
assert(typeof paginateGetExternalModels === "function")
assert(typeof paginateGetLabels === "function")
assert(typeof paginateGetListElements === "function")
assert(typeof paginateGetListsMetadata === "function")
assert(typeof paginateGetModels === "function")
assert(typeof paginateGetOutcomes === "function")
assert(typeof paginateGetRules === "function")
assert(typeof paginateGetVariables === "function")
assert(typeof paginateListEventPredictions === "function")
assert(typeof paginateListTagsForResource === "function")
console.log(`FraudDetector index test passed.`);

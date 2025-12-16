import {
  ATIMetricDataPoint$,
  ATIModelPerformance$,
  ATITrainingMetricsValue$,
  AccessDeniedException,
  AccessDeniedException$,
  AggregatedLogOddsMetric$,
  AggregatedVariablesImpactExplanation$,
  AggregatedVariablesImportanceMetrics$,
  AllowDenyList$,
  AsyncJobStatus,
  BatchCreateVariable$,
  BatchCreateVariableCommand,
  BatchCreateVariableError$,
  BatchCreateVariableRequest$,
  BatchCreateVariableResult$,
  BatchGetVariable$,
  BatchGetVariableCommand,
  BatchGetVariableError$,
  BatchGetVariableRequest$,
  BatchGetVariableResult$,
  BatchImport$,
  BatchPrediction$,
  CancelBatchImportJob$,
  CancelBatchImportJobCommand,
  CancelBatchImportJobRequest$,
  CancelBatchImportJobResult$,
  CancelBatchPredictionJob$,
  CancelBatchPredictionJobCommand,
  CancelBatchPredictionJobRequest$,
  CancelBatchPredictionJobResult$,
  ConflictException,
  ConflictException$,
  CreateBatchImportJob$,
  CreateBatchImportJobCommand,
  CreateBatchImportJobRequest$,
  CreateBatchImportJobResult$,
  CreateBatchPredictionJob$,
  CreateBatchPredictionJobCommand,
  CreateBatchPredictionJobRequest$,
  CreateBatchPredictionJobResult$,
  CreateDetectorVersion$,
  CreateDetectorVersionCommand,
  CreateDetectorVersionRequest$,
  CreateDetectorVersionResult$,
  CreateList$,
  CreateListCommand,
  CreateListRequest$,
  CreateListResult$,
  CreateModel$,
  CreateModelCommand,
  CreateModelRequest$,
  CreateModelResult$,
  CreateModelVersion$,
  CreateModelVersionCommand,
  CreateModelVersionRequest$,
  CreateModelVersionResult$,
  CreateRule$,
  CreateRuleCommand,
  CreateRuleRequest$,
  CreateRuleResult$,
  CreateVariable$,
  CreateVariableCommand,
  CreateVariableRequest$,
  CreateVariableResult$,
  DataSource,
  DataType,
  DataValidationMetrics$,
  DeleteBatchImportJob$,
  DeleteBatchImportJobCommand,
  DeleteBatchImportJobRequest$,
  DeleteBatchImportJobResult$,
  DeleteBatchPredictionJob$,
  DeleteBatchPredictionJobCommand,
  DeleteBatchPredictionJobRequest$,
  DeleteBatchPredictionJobResult$,
  DeleteDetector$,
  DeleteDetectorCommand,
  DeleteDetectorRequest$,
  DeleteDetectorResult$,
  DeleteDetectorVersion$,
  DeleteDetectorVersionCommand,
  DeleteDetectorVersionRequest$,
  DeleteDetectorVersionResult$,
  DeleteEntityType$,
  DeleteEntityTypeCommand,
  DeleteEntityTypeRequest$,
  DeleteEntityTypeResult$,
  DeleteEvent$,
  DeleteEventCommand,
  DeleteEventRequest$,
  DeleteEventResult$,
  DeleteEventType$,
  DeleteEventTypeCommand,
  DeleteEventTypeRequest$,
  DeleteEventTypeResult$,
  DeleteEventsByEventType$,
  DeleteEventsByEventTypeCommand,
  DeleteEventsByEventTypeRequest$,
  DeleteEventsByEventTypeResult$,
  DeleteExternalModel$,
  DeleteExternalModelCommand,
  DeleteExternalModelRequest$,
  DeleteExternalModelResult$,
  DeleteLabel$,
  DeleteLabelCommand,
  DeleteLabelRequest$,
  DeleteLabelResult$,
  DeleteList$,
  DeleteListCommand,
  DeleteListRequest$,
  DeleteListResult$,
  DeleteModel$,
  DeleteModelCommand,
  DeleteModelRequest$,
  DeleteModelResult$,
  DeleteModelVersion$,
  DeleteModelVersionCommand,
  DeleteModelVersionRequest$,
  DeleteModelVersionResult$,
  DeleteOutcome$,
  DeleteOutcomeCommand,
  DeleteOutcomeRequest$,
  DeleteOutcomeResult$,
  DeleteRule$,
  DeleteRuleCommand,
  DeleteRuleRequest$,
  DeleteRuleResult$,
  DeleteVariable$,
  DeleteVariableCommand,
  DeleteVariableRequest$,
  DeleteVariableResult$,
  DescribeDetector$,
  DescribeDetectorCommand,
  DescribeDetectorRequest$,
  DescribeDetectorResult$,
  DescribeModelVersions$,
  DescribeModelVersionsCommand,
  DescribeModelVersionsRequest$,
  DescribeModelVersionsResult$,
  Detector$,
  DetectorVersionStatus,
  DetectorVersionSummary$,
  Entity$,
  EntityType$,
  EvaluatedExternalModel$,
  EvaluatedModelVersion$,
  EvaluatedRule$,
  Event$,
  EventIngestion,
  EventOrchestration$,
  EventPredictionSummary$,
  EventType$,
  EventVariableSummary$,
  ExternalEventsDetail$,
  ExternalModel$,
  ExternalModelOutputs$,
  ExternalModelSummary$,
  FieldValidationMessage$,
  FileValidationMessage$,
  FilterCondition$,
  FraudDetector,
  FraudDetectorClient,
  FraudDetectorServiceException,
  GetBatchImportJobs$,
  GetBatchImportJobsCommand,
  GetBatchImportJobsRequest$,
  GetBatchImportJobsResult$,
  GetBatchPredictionJobs$,
  GetBatchPredictionJobsCommand,
  GetBatchPredictionJobsRequest$,
  GetBatchPredictionJobsResult$,
  GetDeleteEventsByEventTypeStatus$,
  GetDeleteEventsByEventTypeStatusCommand,
  GetDeleteEventsByEventTypeStatusRequest$,
  GetDeleteEventsByEventTypeStatusResult$,
  GetDetectorVersion$,
  GetDetectorVersionCommand,
  GetDetectorVersionRequest$,
  GetDetectorVersionResult$,
  GetDetectors$,
  GetDetectorsCommand,
  GetDetectorsRequest$,
  GetDetectorsResult$,
  GetEntityTypes$,
  GetEntityTypesCommand,
  GetEntityTypesRequest$,
  GetEntityTypesResult$,
  GetEvent$,
  GetEventCommand,
  GetEventPrediction$,
  GetEventPredictionCommand,
  GetEventPredictionMetadata$,
  GetEventPredictionMetadataCommand,
  GetEventPredictionMetadataRequest$,
  GetEventPredictionMetadataResult$,
  GetEventPredictionRequest$,
  GetEventPredictionResult$,
  GetEventRequest$,
  GetEventResult$,
  GetEventTypes$,
  GetEventTypesCommand,
  GetEventTypesRequest$,
  GetEventTypesResult$,
  GetExternalModels$,
  GetExternalModelsCommand,
  GetExternalModelsRequest$,
  GetExternalModelsResult$,
  GetKMSEncryptionKey$,
  GetKMSEncryptionKeyCommand,
  GetKMSEncryptionKeyResult$,
  GetLabels$,
  GetLabelsCommand,
  GetLabelsRequest$,
  GetLabelsResult$,
  GetListElements$,
  GetListElementsCommand,
  GetListElementsRequest$,
  GetListElementsResult$,
  GetListsMetadata$,
  GetListsMetadataCommand,
  GetListsMetadataRequest$,
  GetListsMetadataResult$,
  GetModelVersion$,
  GetModelVersionCommand,
  GetModelVersionRequest$,
  GetModelVersionResult$,
  GetModels$,
  GetModelsCommand,
  GetModelsRequest$,
  GetModelsResult$,
  GetOutcomes$,
  GetOutcomesCommand,
  GetOutcomesRequest$,
  GetOutcomesResult$,
  GetRules$,
  GetRulesCommand,
  GetRulesRequest$,
  GetRulesResult$,
  GetVariables$,
  GetVariablesCommand,
  GetVariablesRequest$,
  GetVariablesResult$,
  IngestedEventStatistics$,
  IngestedEventsDetail$,
  IngestedEventsTimeWindow$,
  InternalServerException,
  InternalServerException$,
  KMSKey$,
  Label$,
  LabelSchema$,
  Language,
  ListEventPredictions$,
  ListEventPredictionsCommand,
  ListEventPredictionsRequest$,
  ListEventPredictionsResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResult$,
  ListUpdateMode,
  LogOddsMetric$,
  MetricDataPoint$,
  Model$,
  ModelEndpointDataBlob$,
  ModelEndpointStatus,
  ModelInputConfiguration$,
  ModelInputDataFormat,
  ModelOutputConfiguration$,
  ModelOutputDataFormat,
  ModelScores$,
  ModelSource,
  ModelTypeEnum,
  ModelVersion$,
  ModelVersionDetail$,
  ModelVersionEvaluation$,
  ModelVersionStatus,
  OFIMetricDataPoint$,
  OFIModelPerformance$,
  OFITrainingMetricsValue$,
  Outcome$,
  PredictionExplanations$,
  PredictionTimeRange$,
  PutDetector$,
  PutDetectorCommand,
  PutDetectorRequest$,
  PutDetectorResult$,
  PutEntityType$,
  PutEntityTypeCommand,
  PutEntityTypeRequest$,
  PutEntityTypeResult$,
  PutEventType$,
  PutEventTypeCommand,
  PutEventTypeRequest$,
  PutEventTypeResult$,
  PutExternalModel$,
  PutExternalModelCommand,
  PutExternalModelRequest$,
  PutExternalModelResult$,
  PutKMSEncryptionKey$,
  PutKMSEncryptionKeyCommand,
  PutKMSEncryptionKeyRequest$,
  PutKMSEncryptionKeyResult$,
  PutLabel$,
  PutLabelCommand,
  PutLabelRequest$,
  PutLabelResult$,
  PutOutcome$,
  PutOutcomeCommand,
  PutOutcomeRequest$,
  PutOutcomeResult$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceUnavailableException,
  ResourceUnavailableException$,
  Rule$,
  RuleDetail$,
  RuleExecutionMode,
  RuleResult$,
  SendEvent$,
  SendEventCommand,
  SendEventRequest$,
  SendEventResult$,
  TFIMetricDataPoint$,
  TFIModelPerformance$,
  TFITrainingMetricsValue$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResult$,
  ThrottlingException,
  ThrottlingException$,
  TrainingDataSchema$,
  TrainingDataSourceEnum,
  TrainingMetrics$,
  TrainingMetricsV2$,
  TrainingResult$,
  TrainingResultV2$,
  UncertaintyRange$,
  UnlabeledEventsTreatment,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResult$,
  UpdateDetectorVersion$,
  UpdateDetectorVersionCommand,
  UpdateDetectorVersionMetadata$,
  UpdateDetectorVersionMetadataCommand,
  UpdateDetectorVersionMetadataRequest$,
  UpdateDetectorVersionMetadataResult$,
  UpdateDetectorVersionRequest$,
  UpdateDetectorVersionResult$,
  UpdateDetectorVersionStatus$,
  UpdateDetectorVersionStatusCommand,
  UpdateDetectorVersionStatusRequest$,
  UpdateDetectorVersionStatusResult$,
  UpdateEventLabel$,
  UpdateEventLabelCommand,
  UpdateEventLabelRequest$,
  UpdateEventLabelResult$,
  UpdateList$,
  UpdateListCommand,
  UpdateListRequest$,
  UpdateListResult$,
  UpdateModel$,
  UpdateModelCommand,
  UpdateModelRequest$,
  UpdateModelResult$,
  UpdateModelVersion$,
  UpdateModelVersionCommand,
  UpdateModelVersionRequest$,
  UpdateModelVersionResult$,
  UpdateModelVersionStatus$,
  UpdateModelVersionStatusCommand,
  UpdateModelVersionStatusRequest$,
  UpdateModelVersionStatusResult$,
  UpdateRuleMetadata$,
  UpdateRuleMetadataCommand,
  UpdateRuleMetadataRequest$,
  UpdateRuleMetadataResult$,
  UpdateRuleVersion$,
  UpdateRuleVersionCommand,
  UpdateRuleVersionRequest$,
  UpdateRuleVersionResult$,
  UpdateVariable$,
  UpdateVariableCommand,
  UpdateVariableRequest$,
  UpdateVariableResult$,
  ValidationException,
  ValidationException$,
  Variable$,
  VariableEntry$,
  VariableImpactExplanation$,
  VariableImportanceMetrics$,
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
assert(typeof FraudDetectorClient === "function");
assert(typeof FraudDetector === "function");
// commands
assert(typeof BatchCreateVariableCommand === "function");
assert(typeof BatchCreateVariable$ === "object");
assert(typeof BatchGetVariableCommand === "function");
assert(typeof BatchGetVariable$ === "object");
assert(typeof CancelBatchImportJobCommand === "function");
assert(typeof CancelBatchImportJob$ === "object");
assert(typeof CancelBatchPredictionJobCommand === "function");
assert(typeof CancelBatchPredictionJob$ === "object");
assert(typeof CreateBatchImportJobCommand === "function");
assert(typeof CreateBatchImportJob$ === "object");
assert(typeof CreateBatchPredictionJobCommand === "function");
assert(typeof CreateBatchPredictionJob$ === "object");
assert(typeof CreateDetectorVersionCommand === "function");
assert(typeof CreateDetectorVersion$ === "object");
assert(typeof CreateListCommand === "function");
assert(typeof CreateList$ === "object");
assert(typeof CreateModelCommand === "function");
assert(typeof CreateModel$ === "object");
assert(typeof CreateModelVersionCommand === "function");
assert(typeof CreateModelVersion$ === "object");
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateRule$ === "object");
assert(typeof CreateVariableCommand === "function");
assert(typeof CreateVariable$ === "object");
assert(typeof DeleteBatchImportJobCommand === "function");
assert(typeof DeleteBatchImportJob$ === "object");
assert(typeof DeleteBatchPredictionJobCommand === "function");
assert(typeof DeleteBatchPredictionJob$ === "object");
assert(typeof DeleteDetectorCommand === "function");
assert(typeof DeleteDetector$ === "object");
assert(typeof DeleteDetectorVersionCommand === "function");
assert(typeof DeleteDetectorVersion$ === "object");
assert(typeof DeleteEntityTypeCommand === "function");
assert(typeof DeleteEntityType$ === "object");
assert(typeof DeleteEventCommand === "function");
assert(typeof DeleteEvent$ === "object");
assert(typeof DeleteEventsByEventTypeCommand === "function");
assert(typeof DeleteEventsByEventType$ === "object");
assert(typeof DeleteEventTypeCommand === "function");
assert(typeof DeleteEventType$ === "object");
assert(typeof DeleteExternalModelCommand === "function");
assert(typeof DeleteExternalModel$ === "object");
assert(typeof DeleteLabelCommand === "function");
assert(typeof DeleteLabel$ === "object");
assert(typeof DeleteListCommand === "function");
assert(typeof DeleteList$ === "object");
assert(typeof DeleteModelCommand === "function");
assert(typeof DeleteModel$ === "object");
assert(typeof DeleteModelVersionCommand === "function");
assert(typeof DeleteModelVersion$ === "object");
assert(typeof DeleteOutcomeCommand === "function");
assert(typeof DeleteOutcome$ === "object");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteRule$ === "object");
assert(typeof DeleteVariableCommand === "function");
assert(typeof DeleteVariable$ === "object");
assert(typeof DescribeDetectorCommand === "function");
assert(typeof DescribeDetector$ === "object");
assert(typeof DescribeModelVersionsCommand === "function");
assert(typeof DescribeModelVersions$ === "object");
assert(typeof GetBatchImportJobsCommand === "function");
assert(typeof GetBatchImportJobs$ === "object");
assert(typeof GetBatchPredictionJobsCommand === "function");
assert(typeof GetBatchPredictionJobs$ === "object");
assert(typeof GetDeleteEventsByEventTypeStatusCommand === "function");
assert(typeof GetDeleteEventsByEventTypeStatus$ === "object");
assert(typeof GetDetectorsCommand === "function");
assert(typeof GetDetectors$ === "object");
assert(typeof GetDetectorVersionCommand === "function");
assert(typeof GetDetectorVersion$ === "object");
assert(typeof GetEntityTypesCommand === "function");
assert(typeof GetEntityTypes$ === "object");
assert(typeof GetEventCommand === "function");
assert(typeof GetEvent$ === "object");
assert(typeof GetEventPredictionCommand === "function");
assert(typeof GetEventPrediction$ === "object");
assert(typeof GetEventPredictionMetadataCommand === "function");
assert(typeof GetEventPredictionMetadata$ === "object");
assert(typeof GetEventTypesCommand === "function");
assert(typeof GetEventTypes$ === "object");
assert(typeof GetExternalModelsCommand === "function");
assert(typeof GetExternalModels$ === "object");
assert(typeof GetKMSEncryptionKeyCommand === "function");
assert(typeof GetKMSEncryptionKey$ === "object");
assert(typeof GetLabelsCommand === "function");
assert(typeof GetLabels$ === "object");
assert(typeof GetListElementsCommand === "function");
assert(typeof GetListElements$ === "object");
assert(typeof GetListsMetadataCommand === "function");
assert(typeof GetListsMetadata$ === "object");
assert(typeof GetModelsCommand === "function");
assert(typeof GetModels$ === "object");
assert(typeof GetModelVersionCommand === "function");
assert(typeof GetModelVersion$ === "object");
assert(typeof GetOutcomesCommand === "function");
assert(typeof GetOutcomes$ === "object");
assert(typeof GetRulesCommand === "function");
assert(typeof GetRules$ === "object");
assert(typeof GetVariablesCommand === "function");
assert(typeof GetVariables$ === "object");
assert(typeof ListEventPredictionsCommand === "function");
assert(typeof ListEventPredictions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutDetectorCommand === "function");
assert(typeof PutDetector$ === "object");
assert(typeof PutEntityTypeCommand === "function");
assert(typeof PutEntityType$ === "object");
assert(typeof PutEventTypeCommand === "function");
assert(typeof PutEventType$ === "object");
assert(typeof PutExternalModelCommand === "function");
assert(typeof PutExternalModel$ === "object");
assert(typeof PutKMSEncryptionKeyCommand === "function");
assert(typeof PutKMSEncryptionKey$ === "object");
assert(typeof PutLabelCommand === "function");
assert(typeof PutLabel$ === "object");
assert(typeof PutOutcomeCommand === "function");
assert(typeof PutOutcome$ === "object");
assert(typeof SendEventCommand === "function");
assert(typeof SendEvent$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDetectorVersionCommand === "function");
assert(typeof UpdateDetectorVersion$ === "object");
assert(typeof UpdateDetectorVersionMetadataCommand === "function");
assert(typeof UpdateDetectorVersionMetadata$ === "object");
assert(typeof UpdateDetectorVersionStatusCommand === "function");
assert(typeof UpdateDetectorVersionStatus$ === "object");
assert(typeof UpdateEventLabelCommand === "function");
assert(typeof UpdateEventLabel$ === "object");
assert(typeof UpdateListCommand === "function");
assert(typeof UpdateList$ === "object");
assert(typeof UpdateModelCommand === "function");
assert(typeof UpdateModel$ === "object");
assert(typeof UpdateModelVersionCommand === "function");
assert(typeof UpdateModelVersion$ === "object");
assert(typeof UpdateModelVersionStatusCommand === "function");
assert(typeof UpdateModelVersionStatus$ === "object");
assert(typeof UpdateRuleMetadataCommand === "function");
assert(typeof UpdateRuleMetadata$ === "object");
assert(typeof UpdateRuleVersionCommand === "function");
assert(typeof UpdateRuleVersion$ === "object");
assert(typeof UpdateVariableCommand === "function");
assert(typeof UpdateVariable$ === "object");
// structural schemas
assert(typeof AggregatedLogOddsMetric$ === "object");
assert(typeof AggregatedVariablesImpactExplanation$ === "object");
assert(typeof AggregatedVariablesImportanceMetrics$ === "object");
assert(typeof AllowDenyList$ === "object");
assert(typeof ATIMetricDataPoint$ === "object");
assert(typeof ATIModelPerformance$ === "object");
assert(typeof ATITrainingMetricsValue$ === "object");
assert(typeof BatchCreateVariableError$ === "object");
assert(typeof BatchCreateVariableRequest$ === "object");
assert(typeof BatchCreateVariableResult$ === "object");
assert(typeof BatchGetVariableError$ === "object");
assert(typeof BatchGetVariableRequest$ === "object");
assert(typeof BatchGetVariableResult$ === "object");
assert(typeof BatchImport$ === "object");
assert(typeof BatchPrediction$ === "object");
assert(typeof CancelBatchImportJobRequest$ === "object");
assert(typeof CancelBatchImportJobResult$ === "object");
assert(typeof CancelBatchPredictionJobRequest$ === "object");
assert(typeof CancelBatchPredictionJobResult$ === "object");
assert(typeof CreateBatchImportJobRequest$ === "object");
assert(typeof CreateBatchImportJobResult$ === "object");
assert(typeof CreateBatchPredictionJobRequest$ === "object");
assert(typeof CreateBatchPredictionJobResult$ === "object");
assert(typeof CreateDetectorVersionRequest$ === "object");
assert(typeof CreateDetectorVersionResult$ === "object");
assert(typeof CreateListRequest$ === "object");
assert(typeof CreateListResult$ === "object");
assert(typeof CreateModelRequest$ === "object");
assert(typeof CreateModelResult$ === "object");
assert(typeof CreateModelVersionRequest$ === "object");
assert(typeof CreateModelVersionResult$ === "object");
assert(typeof CreateRuleRequest$ === "object");
assert(typeof CreateRuleResult$ === "object");
assert(typeof CreateVariableRequest$ === "object");
assert(typeof CreateVariableResult$ === "object");
assert(typeof DataValidationMetrics$ === "object");
assert(typeof DeleteBatchImportJobRequest$ === "object");
assert(typeof DeleteBatchImportJobResult$ === "object");
assert(typeof DeleteBatchPredictionJobRequest$ === "object");
assert(typeof DeleteBatchPredictionJobResult$ === "object");
assert(typeof DeleteDetectorRequest$ === "object");
assert(typeof DeleteDetectorResult$ === "object");
assert(typeof DeleteDetectorVersionRequest$ === "object");
assert(typeof DeleteDetectorVersionResult$ === "object");
assert(typeof DeleteEntityTypeRequest$ === "object");
assert(typeof DeleteEntityTypeResult$ === "object");
assert(typeof DeleteEventRequest$ === "object");
assert(typeof DeleteEventResult$ === "object");
assert(typeof DeleteEventsByEventTypeRequest$ === "object");
assert(typeof DeleteEventsByEventTypeResult$ === "object");
assert(typeof DeleteEventTypeRequest$ === "object");
assert(typeof DeleteEventTypeResult$ === "object");
assert(typeof DeleteExternalModelRequest$ === "object");
assert(typeof DeleteExternalModelResult$ === "object");
assert(typeof DeleteLabelRequest$ === "object");
assert(typeof DeleteLabelResult$ === "object");
assert(typeof DeleteListRequest$ === "object");
assert(typeof DeleteListResult$ === "object");
assert(typeof DeleteModelRequest$ === "object");
assert(typeof DeleteModelResult$ === "object");
assert(typeof DeleteModelVersionRequest$ === "object");
assert(typeof DeleteModelVersionResult$ === "object");
assert(typeof DeleteOutcomeRequest$ === "object");
assert(typeof DeleteOutcomeResult$ === "object");
assert(typeof DeleteRuleRequest$ === "object");
assert(typeof DeleteRuleResult$ === "object");
assert(typeof DeleteVariableRequest$ === "object");
assert(typeof DeleteVariableResult$ === "object");
assert(typeof DescribeDetectorRequest$ === "object");
assert(typeof DescribeDetectorResult$ === "object");
assert(typeof DescribeModelVersionsRequest$ === "object");
assert(typeof DescribeModelVersionsResult$ === "object");
assert(typeof Detector$ === "object");
assert(typeof DetectorVersionSummary$ === "object");
assert(typeof Entity$ === "object");
assert(typeof EntityType$ === "object");
assert(typeof EvaluatedExternalModel$ === "object");
assert(typeof EvaluatedModelVersion$ === "object");
assert(typeof EvaluatedRule$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventOrchestration$ === "object");
assert(typeof EventPredictionSummary$ === "object");
assert(typeof EventType$ === "object");
assert(typeof EventVariableSummary$ === "object");
assert(typeof ExternalEventsDetail$ === "object");
assert(typeof ExternalModel$ === "object");
assert(typeof ExternalModelOutputs$ === "object");
assert(typeof ExternalModelSummary$ === "object");
assert(typeof FieldValidationMessage$ === "object");
assert(typeof FileValidationMessage$ === "object");
assert(typeof FilterCondition$ === "object");
assert(typeof GetBatchImportJobsRequest$ === "object");
assert(typeof GetBatchImportJobsResult$ === "object");
assert(typeof GetBatchPredictionJobsRequest$ === "object");
assert(typeof GetBatchPredictionJobsResult$ === "object");
assert(typeof GetDeleteEventsByEventTypeStatusRequest$ === "object");
assert(typeof GetDeleteEventsByEventTypeStatusResult$ === "object");
assert(typeof GetDetectorsRequest$ === "object");
assert(typeof GetDetectorsResult$ === "object");
assert(typeof GetDetectorVersionRequest$ === "object");
assert(typeof GetDetectorVersionResult$ === "object");
assert(typeof GetEntityTypesRequest$ === "object");
assert(typeof GetEntityTypesResult$ === "object");
assert(typeof GetEventPredictionMetadataRequest$ === "object");
assert(typeof GetEventPredictionMetadataResult$ === "object");
assert(typeof GetEventPredictionRequest$ === "object");
assert(typeof GetEventPredictionResult$ === "object");
assert(typeof GetEventRequest$ === "object");
assert(typeof GetEventResult$ === "object");
assert(typeof GetEventTypesRequest$ === "object");
assert(typeof GetEventTypesResult$ === "object");
assert(typeof GetExternalModelsRequest$ === "object");
assert(typeof GetExternalModelsResult$ === "object");
assert(typeof GetKMSEncryptionKeyResult$ === "object");
assert(typeof GetLabelsRequest$ === "object");
assert(typeof GetLabelsResult$ === "object");
assert(typeof GetListElementsRequest$ === "object");
assert(typeof GetListElementsResult$ === "object");
assert(typeof GetListsMetadataRequest$ === "object");
assert(typeof GetListsMetadataResult$ === "object");
assert(typeof GetModelsRequest$ === "object");
assert(typeof GetModelsResult$ === "object");
assert(typeof GetModelVersionRequest$ === "object");
assert(typeof GetModelVersionResult$ === "object");
assert(typeof GetOutcomesRequest$ === "object");
assert(typeof GetOutcomesResult$ === "object");
assert(typeof GetRulesRequest$ === "object");
assert(typeof GetRulesResult$ === "object");
assert(typeof GetVariablesRequest$ === "object");
assert(typeof GetVariablesResult$ === "object");
assert(typeof IngestedEventsDetail$ === "object");
assert(typeof IngestedEventStatistics$ === "object");
assert(typeof IngestedEventsTimeWindow$ === "object");
assert(typeof KMSKey$ === "object");
assert(typeof Label$ === "object");
assert(typeof LabelSchema$ === "object");
assert(typeof ListEventPredictionsRequest$ === "object");
assert(typeof ListEventPredictionsResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResult$ === "object");
assert(typeof LogOddsMetric$ === "object");
assert(typeof MetricDataPoint$ === "object");
assert(typeof Model$ === "object");
assert(typeof ModelEndpointDataBlob$ === "object");
assert(typeof ModelInputConfiguration$ === "object");
assert(typeof ModelOutputConfiguration$ === "object");
assert(typeof ModelScores$ === "object");
assert(typeof ModelVersion$ === "object");
assert(typeof ModelVersionDetail$ === "object");
assert(typeof ModelVersionEvaluation$ === "object");
assert(typeof OFIMetricDataPoint$ === "object");
assert(typeof OFIModelPerformance$ === "object");
assert(typeof OFITrainingMetricsValue$ === "object");
assert(typeof Outcome$ === "object");
assert(typeof PredictionExplanations$ === "object");
assert(typeof PredictionTimeRange$ === "object");
assert(typeof PutDetectorRequest$ === "object");
assert(typeof PutDetectorResult$ === "object");
assert(typeof PutEntityTypeRequest$ === "object");
assert(typeof PutEntityTypeResult$ === "object");
assert(typeof PutEventTypeRequest$ === "object");
assert(typeof PutEventTypeResult$ === "object");
assert(typeof PutExternalModelRequest$ === "object");
assert(typeof PutExternalModelResult$ === "object");
assert(typeof PutKMSEncryptionKeyRequest$ === "object");
assert(typeof PutKMSEncryptionKeyResult$ === "object");
assert(typeof PutLabelRequest$ === "object");
assert(typeof PutLabelResult$ === "object");
assert(typeof PutOutcomeRequest$ === "object");
assert(typeof PutOutcomeResult$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RuleDetail$ === "object");
assert(typeof RuleResult$ === "object");
assert(typeof SendEventRequest$ === "object");
assert(typeof SendEventResult$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResult$ === "object");
assert(typeof TFIMetricDataPoint$ === "object");
assert(typeof TFIModelPerformance$ === "object");
assert(typeof TFITrainingMetricsValue$ === "object");
assert(typeof TrainingDataSchema$ === "object");
assert(typeof TrainingMetrics$ === "object");
assert(typeof TrainingMetricsV2$ === "object");
assert(typeof TrainingResult$ === "object");
assert(typeof TrainingResultV2$ === "object");
assert(typeof UncertaintyRange$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResult$ === "object");
assert(typeof UpdateDetectorVersionMetadataRequest$ === "object");
assert(typeof UpdateDetectorVersionMetadataResult$ === "object");
assert(typeof UpdateDetectorVersionRequest$ === "object");
assert(typeof UpdateDetectorVersionResult$ === "object");
assert(typeof UpdateDetectorVersionStatusRequest$ === "object");
assert(typeof UpdateDetectorVersionStatusResult$ === "object");
assert(typeof UpdateEventLabelRequest$ === "object");
assert(typeof UpdateEventLabelResult$ === "object");
assert(typeof UpdateListRequest$ === "object");
assert(typeof UpdateListResult$ === "object");
assert(typeof UpdateModelRequest$ === "object");
assert(typeof UpdateModelResult$ === "object");
assert(typeof UpdateModelVersionRequest$ === "object");
assert(typeof UpdateModelVersionResult$ === "object");
assert(typeof UpdateModelVersionStatusRequest$ === "object");
assert(typeof UpdateModelVersionStatusResult$ === "object");
assert(typeof UpdateRuleMetadataRequest$ === "object");
assert(typeof UpdateRuleMetadataResult$ === "object");
assert(typeof UpdateRuleVersionRequest$ === "object");
assert(typeof UpdateRuleVersionResult$ === "object");
assert(typeof UpdateVariableRequest$ === "object");
assert(typeof UpdateVariableResult$ === "object");
assert(typeof Variable$ === "object");
assert(typeof VariableEntry$ === "object");
assert(typeof VariableImpactExplanation$ === "object");
assert(typeof VariableImportanceMetrics$ === "object");
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
assert(AccessDeniedException.prototype instanceof FraudDetectorServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof FraudDetectorServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof FraudDetectorServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof FraudDetectorServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceUnavailableException.prototype instanceof FraudDetectorServiceException);
assert(typeof ResourceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof FraudDetectorServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof FraudDetectorServiceException);
assert(typeof ValidationException$ === "object");
assert(FraudDetectorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeModelVersions === "function");
assert(typeof paginateGetBatchImportJobs === "function");
assert(typeof paginateGetBatchPredictionJobs === "function");
assert(typeof paginateGetDetectors === "function");
assert(typeof paginateGetEntityTypes === "function");
assert(typeof paginateGetEventTypes === "function");
assert(typeof paginateGetExternalModels === "function");
assert(typeof paginateGetLabels === "function");
assert(typeof paginateGetListElements === "function");
assert(typeof paginateGetListsMetadata === "function");
assert(typeof paginateGetModels === "function");
assert(typeof paginateGetOutcomes === "function");
assert(typeof paginateGetRules === "function");
assert(typeof paginateGetVariables === "function");
assert(typeof paginateListEventPredictions === "function");
assert(typeof paginateListTagsForResource === "function");
console.log(`FraudDetector index test passed.`);

import {
  AccessDeniedException,
  AccessDeniedException$,
  AutoPromotionResult,
  CategoricalValues$,
  ConflictException,
  ConflictException$,
  CountPercent$,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDatasetRequest$,
  CreateDatasetResponse$,
  CreateInferenceScheduler$,
  CreateInferenceSchedulerCommand,
  CreateInferenceSchedulerRequest$,
  CreateInferenceSchedulerResponse$,
  CreateLabel$,
  CreateLabelCommand,
  CreateLabelGroup$,
  CreateLabelGroupCommand,
  CreateLabelGroupRequest$,
  CreateLabelGroupResponse$,
  CreateLabelRequest$,
  CreateLabelResponse$,
  CreateModel$,
  CreateModelCommand,
  CreateModelRequest$,
  CreateModelResponse$,
  CreateRetrainingScheduler$,
  CreateRetrainingSchedulerCommand,
  CreateRetrainingSchedulerRequest$,
  CreateRetrainingSchedulerResponse$,
  DataIngestionJobSummary$,
  DataPreProcessingConfiguration$,
  DataQualitySummary$,
  DatasetSchema$,
  DatasetStatus,
  DatasetSummary$,
  DataUploadFrequency,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDatasetRequest$,
  DeleteInferenceScheduler$,
  DeleteInferenceSchedulerCommand,
  DeleteInferenceSchedulerRequest$,
  DeleteLabel$,
  DeleteLabelCommand,
  DeleteLabelGroup$,
  DeleteLabelGroupCommand,
  DeleteLabelGroupRequest$,
  DeleteLabelRequest$,
  DeleteModel$,
  DeleteModelCommand,
  DeleteModelRequest$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteRetrainingScheduler$,
  DeleteRetrainingSchedulerCommand,
  DeleteRetrainingSchedulerRequest$,
  DescribeDataIngestionJob$,
  DescribeDataIngestionJobCommand,
  DescribeDataIngestionJobRequest$,
  DescribeDataIngestionJobResponse$,
  DescribeDataset$,
  DescribeDatasetCommand,
  DescribeDatasetRequest$,
  DescribeDatasetResponse$,
  DescribeInferenceScheduler$,
  DescribeInferenceSchedulerCommand,
  DescribeInferenceSchedulerRequest$,
  DescribeInferenceSchedulerResponse$,
  DescribeLabel$,
  DescribeLabelCommand,
  DescribeLabelGroup$,
  DescribeLabelGroupCommand,
  DescribeLabelGroupRequest$,
  DescribeLabelGroupResponse$,
  DescribeLabelRequest$,
  DescribeLabelResponse$,
  DescribeModel$,
  DescribeModelCommand,
  DescribeModelRequest$,
  DescribeModelResponse$,
  DescribeModelVersion$,
  DescribeModelVersionCommand,
  DescribeModelVersionRequest$,
  DescribeModelVersionResponse$,
  DescribeResourcePolicy$,
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyRequest$,
  DescribeResourcePolicyResponse$,
  DescribeRetrainingScheduler$,
  DescribeRetrainingSchedulerCommand,
  DescribeRetrainingSchedulerRequest$,
  DescribeRetrainingSchedulerResponse$,
  DuplicateTimestamps$,
  ImportDataset$,
  ImportDatasetCommand,
  ImportDatasetRequest$,
  ImportDatasetResponse$,
  ImportModelVersion$,
  ImportModelVersionCommand,
  ImportModelVersionRequest$,
  ImportModelVersionResponse$,
  InferenceDataImportStrategy,
  InferenceEventSummary$,
  InferenceExecutionStatus,
  InferenceExecutionSummary$,
  InferenceInputConfiguration$,
  InferenceInputNameConfiguration$,
  InferenceOutputConfiguration$,
  InferenceS3InputConfiguration$,
  InferenceS3OutputConfiguration$,
  InferenceSchedulerStatus,
  InferenceSchedulerSummary$,
  IngestedFilesSummary$,
  IngestionInputConfiguration$,
  IngestionJobStatus,
  IngestionS3InputConfiguration$,
  InsufficientSensorData$,
  InternalServerException,
  InternalServerException$,
  InvalidSensorData$,
  LabelGroupSummary$,
  LabelRating,
  LabelsInputConfiguration$,
  LabelsS3InputConfiguration$,
  LabelSummary$,
  LargeTimestampGaps$,
  LatestInferenceResult,
  ListDataIngestionJobs$,
  ListDataIngestionJobsCommand,
  ListDataIngestionJobsRequest$,
  ListDataIngestionJobsResponse$,
  ListDatasets$,
  ListDatasetsCommand,
  ListDatasetsRequest$,
  ListDatasetsResponse$,
  ListInferenceEvents$,
  ListInferenceEventsCommand,
  ListInferenceEventsRequest$,
  ListInferenceEventsResponse$,
  ListInferenceExecutions$,
  ListInferenceExecutionsCommand,
  ListInferenceExecutionsRequest$,
  ListInferenceExecutionsResponse$,
  ListInferenceSchedulers$,
  ListInferenceSchedulersCommand,
  ListInferenceSchedulersRequest$,
  ListInferenceSchedulersResponse$,
  ListLabelGroups$,
  ListLabelGroupsCommand,
  ListLabelGroupsRequest$,
  ListLabelGroupsResponse$,
  ListLabels$,
  ListLabelsCommand,
  ListLabelsRequest$,
  ListLabelsResponse$,
  ListModels$,
  ListModelsCommand,
  ListModelsRequest$,
  ListModelsResponse$,
  ListModelVersions$,
  ListModelVersionsCommand,
  ListModelVersionsRequest$,
  ListModelVersionsResponse$,
  ListRetrainingSchedulers$,
  ListRetrainingSchedulersCommand,
  ListRetrainingSchedulersRequest$,
  ListRetrainingSchedulersResponse$,
  ListSensorStatistics$,
  ListSensorStatisticsCommand,
  ListSensorStatisticsRequest$,
  ListSensorStatisticsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LookoutEquipment,
  LookoutEquipmentClient,
  LookoutEquipmentServiceException,
  MissingCompleteSensorData$,
  MissingSensorData$,
  ModelDiagnosticsOutputConfiguration$,
  ModelDiagnosticsS3OutputConfiguration$,
  ModelPromoteMode,
  ModelQuality,
  ModelStatus,
  ModelSummary$,
  ModelVersionSourceType,
  ModelVersionStatus,
  ModelVersionSummary$,
  Monotonicity,
  MonotonicValues$,
  MultipleOperatingModes$,
  paginateListDataIngestionJobs,
  paginateListDatasets,
  paginateListInferenceEvents,
  paginateListInferenceExecutions,
  paginateListInferenceSchedulers,
  paginateListLabelGroups,
  paginateListLabels,
  paginateListModels,
  paginateListModelVersions,
  paginateListRetrainingSchedulers,
  paginateListSensorStatistics,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetrainingSchedulerStatus,
  RetrainingSchedulerSummary$,
  S3Object$,
  SensorStatisticsSummary$,
  SensorsWithShortDateRange$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartDataIngestionJob$,
  StartDataIngestionJobCommand,
  StartDataIngestionJobRequest$,
  StartDataIngestionJobResponse$,
  StartInferenceScheduler$,
  StartInferenceSchedulerCommand,
  StartInferenceSchedulerRequest$,
  StartInferenceSchedulerResponse$,
  StartRetrainingScheduler$,
  StartRetrainingSchedulerCommand,
  StartRetrainingSchedulerRequest$,
  StartRetrainingSchedulerResponse$,
  StatisticalIssueStatus,
  StopInferenceScheduler$,
  StopInferenceSchedulerCommand,
  StopInferenceSchedulerRequest$,
  StopInferenceSchedulerResponse$,
  StopRetrainingScheduler$,
  StopRetrainingSchedulerCommand,
  StopRetrainingSchedulerRequest$,
  StopRetrainingSchedulerResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetSamplingRate,
  ThrottlingException,
  ThrottlingException$,
  UnsupportedTimestamps$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateActiveModelVersion$,
  UpdateActiveModelVersionCommand,
  UpdateActiveModelVersionRequest$,
  UpdateActiveModelVersionResponse$,
  UpdateInferenceScheduler$,
  UpdateInferenceSchedulerCommand,
  UpdateInferenceSchedulerRequest$,
  UpdateLabelGroup$,
  UpdateLabelGroupCommand,
  UpdateLabelGroupRequest$,
  UpdateModel$,
  UpdateModelCommand,
  UpdateModelRequest$,
  UpdateRetrainingScheduler$,
  UpdateRetrainingSchedulerCommand,
  UpdateRetrainingSchedulerRequest$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LookoutEquipmentClient === "function");
assert(typeof LookoutEquipment === "function");
// commands
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDataset$ === "object");
assert(typeof CreateInferenceSchedulerCommand === "function");
assert(typeof CreateInferenceScheduler$ === "object");
assert(typeof CreateLabelCommand === "function");
assert(typeof CreateLabel$ === "object");
assert(typeof CreateLabelGroupCommand === "function");
assert(typeof CreateLabelGroup$ === "object");
assert(typeof CreateModelCommand === "function");
assert(typeof CreateModel$ === "object");
assert(typeof CreateRetrainingSchedulerCommand === "function");
assert(typeof CreateRetrainingScheduler$ === "object");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDataset$ === "object");
assert(typeof DeleteInferenceSchedulerCommand === "function");
assert(typeof DeleteInferenceScheduler$ === "object");
assert(typeof DeleteLabelCommand === "function");
assert(typeof DeleteLabel$ === "object");
assert(typeof DeleteLabelGroupCommand === "function");
assert(typeof DeleteLabelGroup$ === "object");
assert(typeof DeleteModelCommand === "function");
assert(typeof DeleteModel$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteRetrainingSchedulerCommand === "function");
assert(typeof DeleteRetrainingScheduler$ === "object");
assert(typeof DescribeDataIngestionJobCommand === "function");
assert(typeof DescribeDataIngestionJob$ === "object");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeDataset$ === "object");
assert(typeof DescribeInferenceSchedulerCommand === "function");
assert(typeof DescribeInferenceScheduler$ === "object");
assert(typeof DescribeLabelCommand === "function");
assert(typeof DescribeLabel$ === "object");
assert(typeof DescribeLabelGroupCommand === "function");
assert(typeof DescribeLabelGroup$ === "object");
assert(typeof DescribeModelCommand === "function");
assert(typeof DescribeModel$ === "object");
assert(typeof DescribeModelVersionCommand === "function");
assert(typeof DescribeModelVersion$ === "object");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeResourcePolicy$ === "object");
assert(typeof DescribeRetrainingSchedulerCommand === "function");
assert(typeof DescribeRetrainingScheduler$ === "object");
assert(typeof ImportDatasetCommand === "function");
assert(typeof ImportDataset$ === "object");
assert(typeof ImportModelVersionCommand === "function");
assert(typeof ImportModelVersion$ === "object");
assert(typeof ListDataIngestionJobsCommand === "function");
assert(typeof ListDataIngestionJobs$ === "object");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatasets$ === "object");
assert(typeof ListInferenceEventsCommand === "function");
assert(typeof ListInferenceEvents$ === "object");
assert(typeof ListInferenceExecutionsCommand === "function");
assert(typeof ListInferenceExecutions$ === "object");
assert(typeof ListInferenceSchedulersCommand === "function");
assert(typeof ListInferenceSchedulers$ === "object");
assert(typeof ListLabelGroupsCommand === "function");
assert(typeof ListLabelGroups$ === "object");
assert(typeof ListLabelsCommand === "function");
assert(typeof ListLabels$ === "object");
assert(typeof ListModelsCommand === "function");
assert(typeof ListModels$ === "object");
assert(typeof ListModelVersionsCommand === "function");
assert(typeof ListModelVersions$ === "object");
assert(typeof ListRetrainingSchedulersCommand === "function");
assert(typeof ListRetrainingSchedulers$ === "object");
assert(typeof ListSensorStatisticsCommand === "function");
assert(typeof ListSensorStatistics$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof StartDataIngestionJobCommand === "function");
assert(typeof StartDataIngestionJob$ === "object");
assert(typeof StartInferenceSchedulerCommand === "function");
assert(typeof StartInferenceScheduler$ === "object");
assert(typeof StartRetrainingSchedulerCommand === "function");
assert(typeof StartRetrainingScheduler$ === "object");
assert(typeof StopInferenceSchedulerCommand === "function");
assert(typeof StopInferenceScheduler$ === "object");
assert(typeof StopRetrainingSchedulerCommand === "function");
assert(typeof StopRetrainingScheduler$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateActiveModelVersionCommand === "function");
assert(typeof UpdateActiveModelVersion$ === "object");
assert(typeof UpdateInferenceSchedulerCommand === "function");
assert(typeof UpdateInferenceScheduler$ === "object");
assert(typeof UpdateLabelGroupCommand === "function");
assert(typeof UpdateLabelGroup$ === "object");
assert(typeof UpdateModelCommand === "function");
assert(typeof UpdateModel$ === "object");
assert(typeof UpdateRetrainingSchedulerCommand === "function");
assert(typeof UpdateRetrainingScheduler$ === "object");
// structural schemas
assert(typeof CategoricalValues$ === "object");
assert(typeof CountPercent$ === "object");
assert(typeof CreateDatasetRequest$ === "object");
assert(typeof CreateDatasetResponse$ === "object");
assert(typeof CreateInferenceSchedulerRequest$ === "object");
assert(typeof CreateInferenceSchedulerResponse$ === "object");
assert(typeof CreateLabelGroupRequest$ === "object");
assert(typeof CreateLabelGroupResponse$ === "object");
assert(typeof CreateLabelRequest$ === "object");
assert(typeof CreateLabelResponse$ === "object");
assert(typeof CreateModelRequest$ === "object");
assert(typeof CreateModelResponse$ === "object");
assert(typeof CreateRetrainingSchedulerRequest$ === "object");
assert(typeof CreateRetrainingSchedulerResponse$ === "object");
assert(typeof DataIngestionJobSummary$ === "object");
assert(typeof DataPreProcessingConfiguration$ === "object");
assert(typeof DataQualitySummary$ === "object");
assert(typeof DatasetSchema$ === "object");
assert(typeof DatasetSummary$ === "object");
assert(typeof DeleteDatasetRequest$ === "object");
assert(typeof DeleteInferenceSchedulerRequest$ === "object");
assert(typeof DeleteLabelGroupRequest$ === "object");
assert(typeof DeleteLabelRequest$ === "object");
assert(typeof DeleteModelRequest$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteRetrainingSchedulerRequest$ === "object");
assert(typeof DescribeDataIngestionJobRequest$ === "object");
assert(typeof DescribeDataIngestionJobResponse$ === "object");
assert(typeof DescribeDatasetRequest$ === "object");
assert(typeof DescribeDatasetResponse$ === "object");
assert(typeof DescribeInferenceSchedulerRequest$ === "object");
assert(typeof DescribeInferenceSchedulerResponse$ === "object");
assert(typeof DescribeLabelGroupRequest$ === "object");
assert(typeof DescribeLabelGroupResponse$ === "object");
assert(typeof DescribeLabelRequest$ === "object");
assert(typeof DescribeLabelResponse$ === "object");
assert(typeof DescribeModelRequest$ === "object");
assert(typeof DescribeModelResponse$ === "object");
assert(typeof DescribeModelVersionRequest$ === "object");
assert(typeof DescribeModelVersionResponse$ === "object");
assert(typeof DescribeResourcePolicyRequest$ === "object");
assert(typeof DescribeResourcePolicyResponse$ === "object");
assert(typeof DescribeRetrainingSchedulerRequest$ === "object");
assert(typeof DescribeRetrainingSchedulerResponse$ === "object");
assert(typeof DuplicateTimestamps$ === "object");
assert(typeof ImportDatasetRequest$ === "object");
assert(typeof ImportDatasetResponse$ === "object");
assert(typeof ImportModelVersionRequest$ === "object");
assert(typeof ImportModelVersionResponse$ === "object");
assert(typeof InferenceEventSummary$ === "object");
assert(typeof InferenceExecutionSummary$ === "object");
assert(typeof InferenceInputConfiguration$ === "object");
assert(typeof InferenceInputNameConfiguration$ === "object");
assert(typeof InferenceOutputConfiguration$ === "object");
assert(typeof InferenceS3InputConfiguration$ === "object");
assert(typeof InferenceS3OutputConfiguration$ === "object");
assert(typeof InferenceSchedulerSummary$ === "object");
assert(typeof IngestedFilesSummary$ === "object");
assert(typeof IngestionInputConfiguration$ === "object");
assert(typeof IngestionS3InputConfiguration$ === "object");
assert(typeof InsufficientSensorData$ === "object");
assert(typeof InvalidSensorData$ === "object");
assert(typeof LabelGroupSummary$ === "object");
assert(typeof LabelsInputConfiguration$ === "object");
assert(typeof LabelsS3InputConfiguration$ === "object");
assert(typeof LabelSummary$ === "object");
assert(typeof LargeTimestampGaps$ === "object");
assert(typeof ListDataIngestionJobsRequest$ === "object");
assert(typeof ListDataIngestionJobsResponse$ === "object");
assert(typeof ListDatasetsRequest$ === "object");
assert(typeof ListDatasetsResponse$ === "object");
assert(typeof ListInferenceEventsRequest$ === "object");
assert(typeof ListInferenceEventsResponse$ === "object");
assert(typeof ListInferenceExecutionsRequest$ === "object");
assert(typeof ListInferenceExecutionsResponse$ === "object");
assert(typeof ListInferenceSchedulersRequest$ === "object");
assert(typeof ListInferenceSchedulersResponse$ === "object");
assert(typeof ListLabelGroupsRequest$ === "object");
assert(typeof ListLabelGroupsResponse$ === "object");
assert(typeof ListLabelsRequest$ === "object");
assert(typeof ListLabelsResponse$ === "object");
assert(typeof ListModelsRequest$ === "object");
assert(typeof ListModelsResponse$ === "object");
assert(typeof ListModelVersionsRequest$ === "object");
assert(typeof ListModelVersionsResponse$ === "object");
assert(typeof ListRetrainingSchedulersRequest$ === "object");
assert(typeof ListRetrainingSchedulersResponse$ === "object");
assert(typeof ListSensorStatisticsRequest$ === "object");
assert(typeof ListSensorStatisticsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MissingCompleteSensorData$ === "object");
assert(typeof MissingSensorData$ === "object");
assert(typeof ModelDiagnosticsOutputConfiguration$ === "object");
assert(typeof ModelDiagnosticsS3OutputConfiguration$ === "object");
assert(typeof ModelSummary$ === "object");
assert(typeof ModelVersionSummary$ === "object");
assert(typeof MonotonicValues$ === "object");
assert(typeof MultipleOperatingModes$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RetrainingSchedulerSummary$ === "object");
assert(typeof S3Object$ === "object");
assert(typeof SensorStatisticsSummary$ === "object");
assert(typeof SensorsWithShortDateRange$ === "object");
assert(typeof StartDataIngestionJobRequest$ === "object");
assert(typeof StartDataIngestionJobResponse$ === "object");
assert(typeof StartInferenceSchedulerRequest$ === "object");
assert(typeof StartInferenceSchedulerResponse$ === "object");
assert(typeof StartRetrainingSchedulerRequest$ === "object");
assert(typeof StartRetrainingSchedulerResponse$ === "object");
assert(typeof StopInferenceSchedulerRequest$ === "object");
assert(typeof StopInferenceSchedulerResponse$ === "object");
assert(typeof StopRetrainingSchedulerRequest$ === "object");
assert(typeof StopRetrainingSchedulerResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UnsupportedTimestamps$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateActiveModelVersionRequest$ === "object");
assert(typeof UpdateActiveModelVersionResponse$ === "object");
assert(typeof UpdateInferenceSchedulerRequest$ === "object");
assert(typeof UpdateLabelGroupRequest$ === "object");
assert(typeof UpdateModelRequest$ === "object");
assert(typeof UpdateRetrainingSchedulerRequest$ === "object");
// enums
assert(typeof AutoPromotionResult === "object");
assert(typeof DatasetStatus === "object");
assert(typeof DataUploadFrequency === "object");
assert(typeof InferenceDataImportStrategy === "object");
assert(typeof InferenceExecutionStatus === "object");
assert(typeof InferenceSchedulerStatus === "object");
assert(typeof IngestionJobStatus === "object");
assert(typeof LabelRating === "object");
assert(typeof LatestInferenceResult === "object");
assert(typeof ModelPromoteMode === "object");
assert(typeof ModelQuality === "object");
assert(typeof ModelStatus === "object");
assert(typeof ModelVersionSourceType === "object");
assert(typeof ModelVersionStatus === "object");
assert(typeof Monotonicity === "object");
assert(typeof RetrainingSchedulerStatus === "object");
assert(typeof StatisticalIssueStatus === "object");
assert(typeof TargetSamplingRate === "object");
// errors
assert(AccessDeniedException.prototype instanceof LookoutEquipmentServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof LookoutEquipmentServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof LookoutEquipmentServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LookoutEquipmentServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof LookoutEquipmentServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof LookoutEquipmentServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof LookoutEquipmentServiceException);
assert(typeof ValidationException$ === "object");
assert(LookoutEquipmentServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDataIngestionJobs === "function");
assert(typeof paginateListDatasets === "function");
assert(typeof paginateListInferenceEvents === "function");
assert(typeof paginateListInferenceExecutions === "function");
assert(typeof paginateListInferenceSchedulers === "function");
assert(typeof paginateListLabelGroups === "function");
assert(typeof paginateListLabels === "function");
assert(typeof paginateListModelVersions === "function");
assert(typeof paginateListModels === "function");
assert(typeof paginateListRetrainingSchedulers === "function");
assert(typeof paginateListSensorStatistics === "function");
console.log(`LookoutEquipment index test passed.`);

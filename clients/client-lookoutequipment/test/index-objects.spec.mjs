import {
  AutoPromotionResult,
  CreateDatasetCommand,
  CreateInferenceSchedulerCommand,
  CreateLabelCommand,
  CreateLabelGroupCommand,
  CreateModelCommand,
  CreateRetrainingSchedulerCommand,
  DataUploadFrequency,
  DatasetStatus,
  DeleteDatasetCommand,
  DeleteInferenceSchedulerCommand,
  DeleteLabelCommand,
  DeleteLabelGroupCommand,
  DeleteModelCommand,
  DeleteResourcePolicyCommand,
  DeleteRetrainingSchedulerCommand,
  DescribeDataIngestionJobCommand,
  DescribeDatasetCommand,
  DescribeInferenceSchedulerCommand,
  DescribeLabelCommand,
  DescribeLabelGroupCommand,
  DescribeModelCommand,
  DescribeModelVersionCommand,
  DescribeResourcePolicyCommand,
  DescribeRetrainingSchedulerCommand,
  ImportDatasetCommand,
  ImportModelVersionCommand,
  InferenceDataImportStrategy,
  InferenceExecutionStatus,
  InferenceSchedulerStatus,
  IngestionJobStatus,
  LabelRating,
  LatestInferenceResult,
  ListDataIngestionJobsCommand,
  ListDatasetsCommand,
  ListInferenceEventsCommand,
  ListInferenceExecutionsCommand,
  ListInferenceSchedulersCommand,
  ListLabelGroupsCommand,
  ListLabelsCommand,
  ListModelVersionsCommand,
  ListModelsCommand,
  ListRetrainingSchedulersCommand,
  ListSensorStatisticsCommand,
  ListTagsForResourceCommand,
  LookoutEquipment,
  LookoutEquipmentClient,
  LookoutEquipmentServiceException,
  ModelPromoteMode,
  ModelQuality,
  ModelStatus,
  ModelVersionSourceType,
  ModelVersionStatus,
  Monotonicity,
  PutResourcePolicyCommand,
  RetrainingSchedulerStatus,
  StartDataIngestionJobCommand,
  StartInferenceSchedulerCommand,
  StartRetrainingSchedulerCommand,
  StatisticalIssueStatus,
  StopInferenceSchedulerCommand,
  StopRetrainingSchedulerCommand,
  TagResourceCommand,
  TargetSamplingRate,
  UntagResourceCommand,
  UpdateActiveModelVersionCommand,
  UpdateInferenceSchedulerCommand,
  UpdateLabelGroupCommand,
  UpdateModelCommand,
  UpdateRetrainingSchedulerCommand,
  paginateListDataIngestionJobs,
  paginateListDatasets,
  paginateListInferenceEvents,
  paginateListInferenceExecutions,
  paginateListInferenceSchedulers,
  paginateListLabelGroups,
  paginateListLabels,
  paginateListModelVersions,
  paginateListModels,
  paginateListRetrainingSchedulers,
  paginateListSensorStatistics,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LookoutEquipmentClient === "function");
assert(typeof LookoutEquipment === "function");
// commands
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateInferenceSchedulerCommand === "function");
assert(typeof CreateLabelCommand === "function");
assert(typeof CreateLabelGroupCommand === "function");
assert(typeof CreateModelCommand === "function");
assert(typeof CreateRetrainingSchedulerCommand === "function");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteInferenceSchedulerCommand === "function");
assert(typeof DeleteLabelCommand === "function");
assert(typeof DeleteLabelGroupCommand === "function");
assert(typeof DeleteModelCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteRetrainingSchedulerCommand === "function");
assert(typeof DescribeDataIngestionJobCommand === "function");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeInferenceSchedulerCommand === "function");
assert(typeof DescribeLabelCommand === "function");
assert(typeof DescribeLabelGroupCommand === "function");
assert(typeof DescribeModelCommand === "function");
assert(typeof DescribeModelVersionCommand === "function");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeRetrainingSchedulerCommand === "function");
assert(typeof ImportDatasetCommand === "function");
assert(typeof ImportModelVersionCommand === "function");
assert(typeof ListDataIngestionJobsCommand === "function");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListInferenceEventsCommand === "function");
assert(typeof ListInferenceExecutionsCommand === "function");
assert(typeof ListInferenceSchedulersCommand === "function");
assert(typeof ListLabelGroupsCommand === "function");
assert(typeof ListLabelsCommand === "function");
assert(typeof ListModelsCommand === "function");
assert(typeof ListModelVersionsCommand === "function");
assert(typeof ListRetrainingSchedulersCommand === "function");
assert(typeof ListSensorStatisticsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof StartDataIngestionJobCommand === "function");
assert(typeof StartInferenceSchedulerCommand === "function");
assert(typeof StartRetrainingSchedulerCommand === "function");
assert(typeof StopInferenceSchedulerCommand === "function");
assert(typeof StopRetrainingSchedulerCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateActiveModelVersionCommand === "function");
assert(typeof UpdateInferenceSchedulerCommand === "function");
assert(typeof UpdateLabelGroupCommand === "function");
assert(typeof UpdateModelCommand === "function");
assert(typeof UpdateRetrainingSchedulerCommand === "function");
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

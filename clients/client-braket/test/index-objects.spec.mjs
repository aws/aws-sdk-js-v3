import {
  _InstanceType,
  AccessDeniedException,
  AccessDeniedException$,
  ActionMetadata$,
  AlgorithmSpecification$,
  Association$,
  AssociationType,
  Braket,
  BraketClient,
  BraketServiceException,
  CancelJob$,
  CancelJobCommand,
  CancelJobRequest$,
  CancelJobResponse$,
  CancellationStatus,
  CancelQuantumTask$,
  CancelQuantumTaskCommand,
  CancelQuantumTaskRequest$,
  CancelQuantumTaskResponse$,
  CompressionType,
  ConflictException,
  ConflictException$,
  ContainerImage$,
  CreateJob$,
  CreateJobCommand,
  CreateJobRequest$,
  CreateJobResponse$,
  CreateQuantumTask$,
  CreateQuantumTaskCommand,
  CreateQuantumTaskRequest$,
  CreateQuantumTaskResponse$,
  CreateSpendingLimit$,
  CreateSpendingLimitCommand,
  CreateSpendingLimitRequest$,
  CreateSpendingLimitResponse$,
  DataSource$,
  DeleteSpendingLimit$,
  DeleteSpendingLimitCommand,
  DeleteSpendingLimitRequest$,
  DeleteSpendingLimitResponse$,
  DeviceConfig$,
  DeviceOfflineException,
  DeviceOfflineException$,
  DeviceQueueInfo$,
  DeviceRetiredException,
  DeviceRetiredException$,
  DeviceStatus,
  DeviceSummary$,
  DeviceType,
  ExperimentalCapabilities$,
  ExperimentalCapabilitiesEnablementType,
  GetDevice$,
  GetDeviceCommand,
  GetDeviceRequest$,
  GetDeviceResponse$,
  GetJob$,
  GetJobCommand,
  GetJobRequest$,
  GetJobResponse$,
  GetQuantumTask$,
  GetQuantumTaskCommand,
  GetQuantumTaskRequest$,
  GetQuantumTaskResponse$,
  HybridJobAdditionalAttributeName,
  HybridJobQueueInfo$,
  InputFileConfig$,
  InstanceConfig$,
  InternalServiceException,
  InternalServiceException$,
  JobCheckpointConfig$,
  JobEventDetails$,
  JobEventType,
  JobOutputDataConfig$,
  JobPrimaryStatus,
  JobStoppingCondition$,
  JobSummary$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateSearchDevices,
  paginateSearchJobs,
  paginateSearchQuantumTasks,
  paginateSearchSpendingLimits,
  ProgramSetValidationFailure$,
  QuantumTaskAdditionalAttributeName,
  QuantumTaskQueueInfo$,
  QuantumTaskStatus,
  QuantumTaskSummary$,
  QueueName,
  QueuePriority,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3DataSource$,
  ScriptModeConfig$,
  SearchDevices$,
  SearchDevicesCommand,
  SearchDevicesFilter$,
  SearchDevicesRequest$,
  SearchDevicesResponse$,
  SearchJobs$,
  SearchJobsCommand,
  SearchJobsFilter$,
  SearchJobsFilterOperator,
  SearchJobsRequest$,
  SearchJobsResponse$,
  SearchQuantumTasks$,
  SearchQuantumTasksCommand,
  SearchQuantumTasksFilter$,
  SearchQuantumTasksFilterOperator,
  SearchQuantumTasksRequest$,
  SearchQuantumTasksResponse$,
  SearchSpendingLimits$,
  SearchSpendingLimitsCommand,
  SearchSpendingLimitsFilter$,
  SearchSpendingLimitsFilterOperator,
  SearchSpendingLimitsRequest$,
  SearchSpendingLimitsResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SpendingLimitSummary$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimePeriod$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateSpendingLimit$,
  UpdateSpendingLimitCommand,
  UpdateSpendingLimitRequest$,
  UpdateSpendingLimitResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BraketClient === "function");
assert(typeof Braket === "function");
// commands
assert(typeof CancelJobCommand === "function");
assert(typeof CancelJob$ === "object");
assert(typeof CancelQuantumTaskCommand === "function");
assert(typeof CancelQuantumTask$ === "object");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateJob$ === "object");
assert(typeof CreateQuantumTaskCommand === "function");
assert(typeof CreateQuantumTask$ === "object");
assert(typeof CreateSpendingLimitCommand === "function");
assert(typeof CreateSpendingLimit$ === "object");
assert(typeof DeleteSpendingLimitCommand === "function");
assert(typeof DeleteSpendingLimit$ === "object");
assert(typeof GetDeviceCommand === "function");
assert(typeof GetDevice$ === "object");
assert(typeof GetJobCommand === "function");
assert(typeof GetJob$ === "object");
assert(typeof GetQuantumTaskCommand === "function");
assert(typeof GetQuantumTask$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SearchDevicesCommand === "function");
assert(typeof SearchDevices$ === "object");
assert(typeof SearchJobsCommand === "function");
assert(typeof SearchJobs$ === "object");
assert(typeof SearchQuantumTasksCommand === "function");
assert(typeof SearchQuantumTasks$ === "object");
assert(typeof SearchSpendingLimitsCommand === "function");
assert(typeof SearchSpendingLimits$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateSpendingLimitCommand === "function");
assert(typeof UpdateSpendingLimit$ === "object");
// structural schemas
assert(typeof ActionMetadata$ === "object");
assert(typeof AlgorithmSpecification$ === "object");
assert(typeof Association$ === "object");
assert(typeof CancelJobRequest$ === "object");
assert(typeof CancelJobResponse$ === "object");
assert(typeof CancelQuantumTaskRequest$ === "object");
assert(typeof CancelQuantumTaskResponse$ === "object");
assert(typeof ContainerImage$ === "object");
assert(typeof CreateJobRequest$ === "object");
assert(typeof CreateJobResponse$ === "object");
assert(typeof CreateQuantumTaskRequest$ === "object");
assert(typeof CreateQuantumTaskResponse$ === "object");
assert(typeof CreateSpendingLimitRequest$ === "object");
assert(typeof CreateSpendingLimitResponse$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DeleteSpendingLimitRequest$ === "object");
assert(typeof DeleteSpendingLimitResponse$ === "object");
assert(typeof DeviceConfig$ === "object");
assert(typeof DeviceQueueInfo$ === "object");
assert(typeof DeviceSummary$ === "object");
assert(typeof ExperimentalCapabilities$ === "object");
assert(typeof GetDeviceRequest$ === "object");
assert(typeof GetDeviceResponse$ === "object");
assert(typeof GetJobRequest$ === "object");
assert(typeof GetJobResponse$ === "object");
assert(typeof GetQuantumTaskRequest$ === "object");
assert(typeof GetQuantumTaskResponse$ === "object");
assert(typeof HybridJobQueueInfo$ === "object");
assert(typeof InputFileConfig$ === "object");
assert(typeof InstanceConfig$ === "object");
assert(typeof JobCheckpointConfig$ === "object");
assert(typeof JobEventDetails$ === "object");
assert(typeof JobOutputDataConfig$ === "object");
assert(typeof JobStoppingCondition$ === "object");
assert(typeof JobSummary$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ProgramSetValidationFailure$ === "object");
assert(typeof QuantumTaskQueueInfo$ === "object");
assert(typeof QuantumTaskSummary$ === "object");
assert(typeof S3DataSource$ === "object");
assert(typeof ScriptModeConfig$ === "object");
assert(typeof SearchDevicesFilter$ === "object");
assert(typeof SearchDevicesRequest$ === "object");
assert(typeof SearchDevicesResponse$ === "object");
assert(typeof SearchJobsFilter$ === "object");
assert(typeof SearchJobsRequest$ === "object");
assert(typeof SearchJobsResponse$ === "object");
assert(typeof SearchQuantumTasksFilter$ === "object");
assert(typeof SearchQuantumTasksRequest$ === "object");
assert(typeof SearchQuantumTasksResponse$ === "object");
assert(typeof SearchSpendingLimitsFilter$ === "object");
assert(typeof SearchSpendingLimitsRequest$ === "object");
assert(typeof SearchSpendingLimitsResponse$ === "object");
assert(typeof SpendingLimitSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimePeriod$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateSpendingLimitRequest$ === "object");
assert(typeof UpdateSpendingLimitResponse$ === "object");
// enums
assert(typeof AssociationType === "object");
assert(typeof CancellationStatus === "object");
assert(typeof CompressionType === "object");
assert(typeof DeviceStatus === "object");
assert(typeof DeviceType === "object");
assert(typeof ExperimentalCapabilitiesEnablementType === "object");
assert(typeof HybridJobAdditionalAttributeName === "object");
assert(typeof _InstanceType === "object");
assert(typeof JobEventType === "object");
assert(typeof JobPrimaryStatus === "object");
assert(typeof QuantumTaskAdditionalAttributeName === "object");
assert(typeof QuantumTaskStatus === "object");
assert(typeof QueueName === "object");
assert(typeof QueuePriority === "object");
assert(typeof SearchJobsFilterOperator === "object");
assert(typeof SearchQuantumTasksFilterOperator === "object");
assert(typeof SearchSpendingLimitsFilterOperator === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof BraketServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof BraketServiceException);
assert(typeof ConflictException$ === "object");
assert(DeviceOfflineException.prototype instanceof BraketServiceException);
assert(typeof DeviceOfflineException$ === "object");
assert(DeviceRetiredException.prototype instanceof BraketServiceException);
assert(typeof DeviceRetiredException$ === "object");
assert(InternalServiceException.prototype instanceof BraketServiceException);
assert(typeof InternalServiceException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BraketServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BraketServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof BraketServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BraketServiceException);
assert(typeof ValidationException$ === "object");
assert(BraketServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateSearchDevices === "function");
assert(typeof paginateSearchJobs === "function");
assert(typeof paginateSearchQuantumTasks === "function");
assert(typeof paginateSearchSpendingLimits === "function");
console.log(`Braket index test passed.`);

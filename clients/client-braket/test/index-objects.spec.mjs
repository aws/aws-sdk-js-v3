import {
  AccessDeniedException,
  AssociationType,
  Braket,
  BraketClient,
  BraketServiceException,
  CancelJobCommand,
  CancelQuantumTaskCommand,
  CancellationStatus,
  CompressionType,
  ConflictException,
  CreateJobCommand,
  CreateQuantumTaskCommand,
  CreateSpendingLimitCommand,
  DeleteSpendingLimitCommand,
  DeviceOfflineException,
  DeviceRetiredException,
  DeviceStatus,
  DeviceType,
  ExperimentalCapabilitiesEnablementType,
  GetDeviceCommand,
  GetJobCommand,
  GetQuantumTaskCommand,
  HybridJobAdditionalAttributeName,
  InternalServiceException,
  JobEventType,
  JobPrimaryStatus,
  ListTagsForResourceCommand,
  QuantumTaskAdditionalAttributeName,
  QuantumTaskStatus,
  QueueName,
  QueuePriority,
  ResourceNotFoundException,
  SearchDevicesCommand,
  SearchJobsCommand,
  SearchJobsFilterOperator,
  SearchQuantumTasksCommand,
  SearchQuantumTasksFilterOperator,
  SearchSpendingLimitsCommand,
  SearchSpendingLimitsFilterOperator,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateSpendingLimitCommand,
  ValidationException,
  ValidationExceptionReason,
  _InstanceType,
  paginateSearchDevices,
  paginateSearchJobs,
  paginateSearchQuantumTasks,
  paginateSearchSpendingLimits,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BraketClient === "function");
assert(typeof Braket === "function");
// commands
assert(typeof CancelJobCommand === "function");
assert(typeof CancelQuantumTaskCommand === "function");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateQuantumTaskCommand === "function");
assert(typeof CreateSpendingLimitCommand === "function");
assert(typeof DeleteSpendingLimitCommand === "function");
assert(typeof GetDeviceCommand === "function");
assert(typeof GetJobCommand === "function");
assert(typeof GetQuantumTaskCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof SearchDevicesCommand === "function");
assert(typeof SearchJobsCommand === "function");
assert(typeof SearchQuantumTasksCommand === "function");
assert(typeof SearchSpendingLimitsCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateSpendingLimitCommand === "function");
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
assert(ConflictException.prototype instanceof BraketServiceException);
assert(DeviceOfflineException.prototype instanceof BraketServiceException);
assert(DeviceRetiredException.prototype instanceof BraketServiceException);
assert(InternalServiceException.prototype instanceof BraketServiceException);
assert(ResourceNotFoundException.prototype instanceof BraketServiceException);
assert(ServiceQuotaExceededException.prototype instanceof BraketServiceException);
assert(ThrottlingException.prototype instanceof BraketServiceException);
assert(ValidationException.prototype instanceof BraketServiceException);
assert(BraketServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateSearchDevices === "function");
assert(typeof paginateSearchJobs === "function");
assert(typeof paginateSearchQuantumTasks === "function");
assert(typeof paginateSearchSpendingLimits === "function");
console.log(`Braket index test passed.`);

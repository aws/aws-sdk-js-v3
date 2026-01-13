import {
  CertificateValidationException,
  CertificateValidationException$,
  CommandParameterValue$,
  ConflictException,
  ConflictException$,
  DescribeJobExecution$,
  DescribeJobExecutionCommand,
  DescribeJobExecutionRequest$,
  DescribeJobExecutionResponse$,
  GetPendingJobExecutions$,
  GetPendingJobExecutionsCommand,
  GetPendingJobExecutionsRequest$,
  GetPendingJobExecutionsResponse$,
  InternalServerException,
  InternalServerException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidStateTransitionException,
  InvalidStateTransitionException$,
  IoTJobsDataPlane,
  IoTJobsDataPlaneClient,
  IoTJobsDataPlaneServiceException,
  JobExecution$,
  JobExecutionState$,
  JobExecutionStatus,
  JobExecutionSummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StartCommandExecution$,
  StartCommandExecutionCommand,
  StartCommandExecutionRequest$,
  StartCommandExecutionResponse$,
  StartNextPendingJobExecution$,
  StartNextPendingJobExecutionCommand,
  StartNextPendingJobExecutionRequest$,
  StartNextPendingJobExecutionResponse$,
  TerminalStateException,
  TerminalStateException$,
  ThrottlingException,
  ThrottlingException$,
  UpdateJobExecution$,
  UpdateJobExecutionCommand,
  UpdateJobExecutionRequest$,
  UpdateJobExecutionResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTJobsDataPlaneClient === "function");
assert(typeof IoTJobsDataPlane === "function");
// commands
assert(typeof DescribeJobExecutionCommand === "function");
assert(typeof DescribeJobExecution$ === "object");
assert(typeof GetPendingJobExecutionsCommand === "function");
assert(typeof GetPendingJobExecutions$ === "object");
assert(typeof StartCommandExecutionCommand === "function");
assert(typeof StartCommandExecution$ === "object");
assert(typeof StartNextPendingJobExecutionCommand === "function");
assert(typeof StartNextPendingJobExecution$ === "object");
assert(typeof UpdateJobExecutionCommand === "function");
assert(typeof UpdateJobExecution$ === "object");
// structural schemas
assert(typeof CommandParameterValue$ === "object");
assert(typeof DescribeJobExecutionRequest$ === "object");
assert(typeof DescribeJobExecutionResponse$ === "object");
assert(typeof GetPendingJobExecutionsRequest$ === "object");
assert(typeof GetPendingJobExecutionsResponse$ === "object");
assert(typeof JobExecution$ === "object");
assert(typeof JobExecutionState$ === "object");
assert(typeof JobExecutionSummary$ === "object");
assert(typeof StartCommandExecutionRequest$ === "object");
assert(typeof StartCommandExecutionResponse$ === "object");
assert(typeof StartNextPendingJobExecutionRequest$ === "object");
assert(typeof StartNextPendingJobExecutionResponse$ === "object");
assert(typeof UpdateJobExecutionRequest$ === "object");
assert(typeof UpdateJobExecutionResponse$ === "object");
// enums
assert(typeof JobExecutionStatus === "object");
// errors
assert(CertificateValidationException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(typeof CertificateValidationException$ === "object");
assert(ConflictException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidRequestException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(InvalidStateTransitionException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(typeof InvalidStateTransitionException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TerminalStateException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(typeof TerminalStateException$ === "object");
assert(ThrottlingException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(typeof ValidationException$ === "object");
assert(IoTJobsDataPlaneServiceException.prototype instanceof Error);
console.log(`IoTJobsDataPlane index test passed.`);

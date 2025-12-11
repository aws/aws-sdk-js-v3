import {
  CertificateValidationException,
  ConflictException,
  DescribeJobExecutionCommand,
  GetPendingJobExecutionsCommand,
  InternalServerException,
  InvalidRequestException,
  InvalidStateTransitionException,
  IoTJobsDataPlane,
  IoTJobsDataPlaneClient,
  IoTJobsDataPlaneServiceException,
  JobExecutionStatus,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  StartCommandExecutionCommand,
  StartNextPendingJobExecutionCommand,
  TerminalStateException,
  ThrottlingException,
  UpdateJobExecutionCommand,
  ValidationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTJobsDataPlaneClient === "function");
assert(typeof IoTJobsDataPlane === "function");
// commands
assert(typeof DescribeJobExecutionCommand === "function");
assert(typeof GetPendingJobExecutionsCommand === "function");
assert(typeof StartCommandExecutionCommand === "function");
assert(typeof StartNextPendingJobExecutionCommand === "function");
assert(typeof UpdateJobExecutionCommand === "function");
// enums
assert(typeof JobExecutionStatus === "object");
// errors
assert(CertificateValidationException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(ConflictException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(InternalServerException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(InvalidRequestException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(InvalidStateTransitionException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(ResourceNotFoundException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(ServiceQuotaExceededException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(ServiceUnavailableException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(TerminalStateException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(ThrottlingException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(ValidationException.prototype instanceof IoTJobsDataPlaneServiceException);
assert(IoTJobsDataPlaneServiceException.prototype instanceof Error);
console.log(`IoTJobsDataPlane index test passed.`);

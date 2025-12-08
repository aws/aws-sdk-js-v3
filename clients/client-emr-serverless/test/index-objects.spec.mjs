import {
  ApplicationState,
  Architecture,
  CancelJobRunCommand,
  ConflictException,
  CreateApplicationCommand,
  DeleteApplicationCommand,
  EMRServerless,
  EMRServerlessClient,
  EMRServerlessServiceException,
  GetApplicationCommand,
  GetDashboardForJobRunCommand,
  GetJobRunCommand,
  InternalServerException,
  JobRunMode,
  JobRunState,
  ListApplicationsCommand,
  ListJobRunAttemptsCommand,
  ListJobRunsCommand,
  ListTagsForResourceCommand,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  StartApplicationCommand,
  StartJobRunCommand,
  StopApplicationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  ValidationException,
  paginateListApplications,
  paginateListJobRunAttempts,
  paginateListJobRuns,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EMRServerlessClient === "function");
assert(typeof EMRServerless === "function");
// commands
assert(typeof CancelJobRunCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetDashboardForJobRunCommand === "function");
assert(typeof GetJobRunCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListJobRunAttemptsCommand === "function");
assert(typeof ListJobRunsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartApplicationCommand === "function");
assert(typeof StartJobRunCommand === "function");
assert(typeof StopApplicationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
// enums
assert(typeof ApplicationState === "object");
assert(typeof Architecture === "object");
assert(typeof JobRunMode === "object");
assert(typeof JobRunState === "object");
// errors
assert(ConflictException.prototype instanceof EMRServerlessServiceException);
assert(InternalServerException.prototype instanceof EMRServerlessServiceException);
assert(ResourceNotFoundException.prototype instanceof EMRServerlessServiceException);
assert(ServiceQuotaExceededException.prototype instanceof EMRServerlessServiceException);
assert(ValidationException.prototype instanceof EMRServerlessServiceException);
assert(EMRServerlessServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplications === "function");
assert(typeof paginateListJobRunAttempts === "function");
assert(typeof paginateListJobRuns === "function");
console.log(`EMRServerless index test passed.`);

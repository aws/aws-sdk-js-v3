import {
  ApplicationState,
  Architecture,
  CancelJobRunCommand,
  CreateApplicationCommand,
  DeleteApplicationCommand,
  EMRServerless,
  EMRServerlessClient,
  EMRServerlessServiceException,
  GetApplicationCommand,
  GetDashboardForJobRunCommand,
  GetJobRunCommand,
  JobRunMode,
  JobRunState,
  ListApplicationsCommand,
  ListJobRunAttemptsCommand,
  ListJobRunsCommand,
  ListTagsForResourceCommand,
  StartApplicationCommand,
  StartJobRunCommand,
  StopApplicationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
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
assert(EMRServerlessServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplications === "function");
assert(typeof paginateListJobRunAttempts === "function");
assert(typeof paginateListJobRuns === "function");
console.log(`EMRServerless index test passed.`);

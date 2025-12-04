import {
  DescribeJobExecutionCommand,
  GetPendingJobExecutionsCommand,
  IoTJobsDataPlane,
  IoTJobsDataPlaneClient,
  IoTJobsDataPlaneServiceException,
  JobExecutionStatus,
  StartCommandExecutionCommand,
  StartNextPendingJobExecutionCommand,
  UpdateJobExecutionCommand,
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
assert(IoTJobsDataPlaneServiceException.prototype instanceof Error);
console.log(`IoTJobsDataPlane index test passed.`);

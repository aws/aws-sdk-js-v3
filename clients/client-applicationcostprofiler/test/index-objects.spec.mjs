import {
  ApplicationCostProfiler,
  ApplicationCostProfilerClient,
  ApplicationCostProfilerServiceException,
  DeleteReportDefinitionCommand,
  Format,
  GetReportDefinitionCommand,
  ImportApplicationUsageCommand,
  ListReportDefinitionsCommand,
  PutReportDefinitionCommand,
  ReportFrequency,
  S3BucketRegion,
  UpdateReportDefinitionCommand,
  paginateListReportDefinitions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApplicationCostProfilerClient === "function")
assert(typeof ApplicationCostProfiler === "function")
// commands
assert(typeof DeleteReportDefinitionCommand === "function")
assert(typeof GetReportDefinitionCommand === "function")
assert(typeof ImportApplicationUsageCommand === "function")
assert(typeof ListReportDefinitionsCommand === "function")
assert(typeof PutReportDefinitionCommand === "function")
assert(typeof UpdateReportDefinitionCommand === "function")
// enums
assert(typeof Format === "object");
assert(typeof ReportFrequency === "object");
assert(typeof S3BucketRegion === "object");
// errors
assert(ApplicationCostProfilerServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListReportDefinitions === "function")
console.log(`ApplicationCostProfiler index test passed.`);

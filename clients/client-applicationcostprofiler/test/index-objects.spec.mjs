import {
  AccessDeniedException,
  ApplicationCostProfiler,
  ApplicationCostProfilerClient,
  ApplicationCostProfilerServiceException,
  DeleteReportDefinitionCommand,
  Format,
  GetReportDefinitionCommand,
  ImportApplicationUsageCommand,
  InternalServerException,
  ListReportDefinitionsCommand,
  PutReportDefinitionCommand,
  ReportFrequency,
  S3BucketRegion,
  ServiceQuotaExceededException,
  ThrottlingException,
  UpdateReportDefinitionCommand,
  ValidationException,
  paginateListReportDefinitions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApplicationCostProfilerClient === "function");
assert(typeof ApplicationCostProfiler === "function");
// commands
assert(typeof DeleteReportDefinitionCommand === "function");
assert(typeof GetReportDefinitionCommand === "function");
assert(typeof ImportApplicationUsageCommand === "function");
assert(typeof ListReportDefinitionsCommand === "function");
assert(typeof PutReportDefinitionCommand === "function");
assert(typeof UpdateReportDefinitionCommand === "function");
// enums
assert(typeof Format === "object");
assert(typeof ReportFrequency === "object");
assert(typeof S3BucketRegion === "object");
// errors
assert(AccessDeniedException.prototype instanceof ApplicationCostProfilerServiceException);
assert(InternalServerException.prototype instanceof ApplicationCostProfilerServiceException);
assert(ServiceQuotaExceededException.prototype instanceof ApplicationCostProfilerServiceException);
assert(ThrottlingException.prototype instanceof ApplicationCostProfilerServiceException);
assert(ValidationException.prototype instanceof ApplicationCostProfilerServiceException);
assert(ApplicationCostProfilerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListReportDefinitions === "function");
console.log(`ApplicationCostProfiler index test passed.`);

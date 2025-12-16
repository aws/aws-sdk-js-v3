import {
  AccessDeniedException,
  AccessDeniedException$,
  ApplicationCostProfiler,
  ApplicationCostProfilerClient,
  ApplicationCostProfilerServiceException,
  DeleteReportDefinition$,
  DeleteReportDefinitionCommand,
  DeleteReportDefinitionRequest$,
  DeleteReportDefinitionResult$,
  Format,
  GetReportDefinition$,
  GetReportDefinitionCommand,
  GetReportDefinitionRequest$,
  GetReportDefinitionResult$,
  ImportApplicationUsage$,
  ImportApplicationUsageCommand,
  ImportApplicationUsageRequest$,
  ImportApplicationUsageResult$,
  InternalServerException,
  InternalServerException$,
  ListReportDefinitions$,
  ListReportDefinitionsCommand,
  ListReportDefinitionsRequest$,
  ListReportDefinitionsResult$,
  PutReportDefinition$,
  PutReportDefinitionCommand,
  PutReportDefinitionRequest$,
  PutReportDefinitionResult$,
  ReportDefinition$,
  ReportFrequency,
  S3BucketRegion,
  S3Location$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SourceS3Location$,
  ThrottlingException,
  ThrottlingException$,
  UpdateReportDefinition$,
  UpdateReportDefinitionCommand,
  UpdateReportDefinitionRequest$,
  UpdateReportDefinitionResult$,
  ValidationException,
  ValidationException$,
  paginateListReportDefinitions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApplicationCostProfilerClient === "function");
assert(typeof ApplicationCostProfiler === "function");
// commands
assert(typeof DeleteReportDefinitionCommand === "function");
assert(typeof DeleteReportDefinition$ === "object");
assert(typeof GetReportDefinitionCommand === "function");
assert(typeof GetReportDefinition$ === "object");
assert(typeof ImportApplicationUsageCommand === "function");
assert(typeof ImportApplicationUsage$ === "object");
assert(typeof ListReportDefinitionsCommand === "function");
assert(typeof ListReportDefinitions$ === "object");
assert(typeof PutReportDefinitionCommand === "function");
assert(typeof PutReportDefinition$ === "object");
assert(typeof UpdateReportDefinitionCommand === "function");
assert(typeof UpdateReportDefinition$ === "object");
// structural schemas
assert(typeof DeleteReportDefinitionRequest$ === "object");
assert(typeof DeleteReportDefinitionResult$ === "object");
assert(typeof GetReportDefinitionRequest$ === "object");
assert(typeof GetReportDefinitionResult$ === "object");
assert(typeof ImportApplicationUsageRequest$ === "object");
assert(typeof ImportApplicationUsageResult$ === "object");
assert(typeof ListReportDefinitionsRequest$ === "object");
assert(typeof ListReportDefinitionsResult$ === "object");
assert(typeof PutReportDefinitionRequest$ === "object");
assert(typeof PutReportDefinitionResult$ === "object");
assert(typeof ReportDefinition$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SourceS3Location$ === "object");
assert(typeof UpdateReportDefinitionRequest$ === "object");
assert(typeof UpdateReportDefinitionResult$ === "object");
// enums
assert(typeof Format === "object");
assert(typeof ReportFrequency === "object");
assert(typeof S3BucketRegion === "object");
// errors
assert(AccessDeniedException.prototype instanceof ApplicationCostProfilerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof ApplicationCostProfilerServiceException);
assert(typeof InternalServerException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ApplicationCostProfilerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ApplicationCostProfilerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ApplicationCostProfilerServiceException);
assert(typeof ValidationException$ === "object");
assert(ApplicationCostProfilerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListReportDefinitions === "function");
console.log(`ApplicationCostProfiler index test passed.`);

import {
  AWSRegion,
  AdditionalArtifact,
  CompressionFormat,
  CostAndUsageReportService,
  CostAndUsageReportServiceClient,
  CostAndUsageReportServiceServiceException,
  DeleteReportDefinitionCommand,
  DescribeReportDefinitionsCommand,
  LastStatus,
  ListTagsForResourceCommand,
  ModifyReportDefinitionCommand,
  PutReportDefinitionCommand,
  ReportFormat,
  ReportVersioning,
  SchemaElement,
  TagResourceCommand,
  TimeUnit,
  UntagResourceCommand,
  paginateDescribeReportDefinitions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CostAndUsageReportServiceClient === "function")
assert(typeof CostAndUsageReportService === "function")
// commands
assert(typeof DeleteReportDefinitionCommand === "function")
assert(typeof DescribeReportDefinitionsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ModifyReportDefinitionCommand === "function")
assert(typeof PutReportDefinitionCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
// enums
assert(typeof AdditionalArtifact === "object");
assert(typeof AWSRegion === "object");
assert(typeof CompressionFormat === "object");
assert(typeof LastStatus === "object");
assert(typeof ReportFormat === "object");
assert(typeof ReportVersioning === "object");
assert(typeof SchemaElement === "object");
assert(typeof TimeUnit === "object");
// errors
assert(CostAndUsageReportServiceServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeReportDefinitions === "function")
console.log(`CostAndUsageReportService index test passed.`);

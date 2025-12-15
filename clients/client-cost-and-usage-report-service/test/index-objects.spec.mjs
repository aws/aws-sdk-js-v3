import {
  AWSRegion,
  AdditionalArtifact,
  CompressionFormat,
  CostAndUsageReportService,
  CostAndUsageReportServiceClient,
  CostAndUsageReportServiceServiceException,
  DeleteReportDefinition$,
  DeleteReportDefinitionCommand,
  DeleteReportDefinitionRequest$,
  DeleteReportDefinitionResponse$,
  DescribeReportDefinitions$,
  DescribeReportDefinitionsCommand,
  DescribeReportDefinitionsRequest$,
  DescribeReportDefinitionsResponse$,
  DuplicateReportNameException,
  DuplicateReportNameException$,
  InternalErrorException,
  InternalErrorException$,
  LastStatus,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ModifyReportDefinition$,
  ModifyReportDefinitionCommand,
  ModifyReportDefinitionRequest$,
  ModifyReportDefinitionResponse$,
  PutReportDefinition$,
  PutReportDefinitionCommand,
  PutReportDefinitionRequest$,
  PutReportDefinitionResponse$,
  ReportDefinition$,
  ReportFormat,
  ReportLimitReachedException,
  ReportLimitReachedException$,
  ReportStatus$,
  ReportVersioning,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SchemaElement,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TimeUnit,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
  paginateDescribeReportDefinitions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CostAndUsageReportServiceClient === "function");
assert(typeof CostAndUsageReportService === "function");
// commands
assert(typeof DeleteReportDefinitionCommand === "function");
assert(typeof DeleteReportDefinition$ === "object");
assert(typeof DescribeReportDefinitionsCommand === "function");
assert(typeof DescribeReportDefinitions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ModifyReportDefinitionCommand === "function");
assert(typeof ModifyReportDefinition$ === "object");
assert(typeof PutReportDefinitionCommand === "function");
assert(typeof PutReportDefinition$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof DeleteReportDefinitionRequest$ === "object");
assert(typeof DeleteReportDefinitionResponse$ === "object");
assert(typeof DescribeReportDefinitionsRequest$ === "object");
assert(typeof DescribeReportDefinitionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ModifyReportDefinitionRequest$ === "object");
assert(typeof ModifyReportDefinitionResponse$ === "object");
assert(typeof PutReportDefinitionRequest$ === "object");
assert(typeof PutReportDefinitionResponse$ === "object");
assert(typeof ReportDefinition$ === "object");
assert(typeof ReportStatus$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
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
assert(DuplicateReportNameException.prototype instanceof CostAndUsageReportServiceServiceException);
assert(typeof DuplicateReportNameException$ === "object");
assert(InternalErrorException.prototype instanceof CostAndUsageReportServiceServiceException);
assert(typeof InternalErrorException$ === "object");
assert(ReportLimitReachedException.prototype instanceof CostAndUsageReportServiceServiceException);
assert(typeof ReportLimitReachedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CostAndUsageReportServiceServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof CostAndUsageReportServiceServiceException);
assert(typeof ValidationException$ === "object");
assert(CostAndUsageReportServiceServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeReportDefinitions === "function");
console.log(`CostAndUsageReportService index test passed.`);

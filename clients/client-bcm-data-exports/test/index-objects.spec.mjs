import {
  BCMDataExports,
  BCMDataExportsClient,
  BCMDataExportsServiceException,
  Column$,
  CompressionOption,
  CreateExport$,
  CreateExportCommand,
  CreateExportRequest$,
  CreateExportResponse$,
  DataQuery$,
  DeleteExport$,
  DeleteExportCommand,
  DeleteExportRequest$,
  DeleteExportResponse$,
  DestinationConfigurations$,
  ExecutionReference$,
  ExecutionStatus$,
  ExecutionStatusCode,
  ExecutionStatusReason,
  Export$,
  ExportReference$,
  ExportStatus$,
  ExportStatusCode,
  FormatOption,
  FrequencyOption,
  GetExecution$,
  GetExecutionCommand,
  GetExecutionRequest$,
  GetExecutionResponse$,
  GetExport$,
  GetExportCommand,
  GetExportRequest$,
  GetExportResponse$,
  GetTable$,
  GetTableCommand,
  GetTableRequest$,
  GetTableResponse$,
  InternalServerException,
  InternalServerException$,
  ListExecutions$,
  ListExecutionsCommand,
  ListExecutionsRequest$,
  ListExecutionsResponse$,
  ListExports$,
  ListExportsCommand,
  ListExportsRequest$,
  ListExportsResponse$,
  ListTables$,
  ListTablesCommand,
  ListTablesRequest$,
  ListTablesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  OverwriteOption,
  RefreshCadence$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTag$,
  S3Destination$,
  S3OutputConfigurations$,
  S3OutputType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Table$,
  TablePropertyDescription$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateExport$,
  UpdateExportCommand,
  UpdateExportRequest$,
  UpdateExportResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  paginateListExecutions,
  paginateListExports,
  paginateListTables,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BCMDataExportsClient === "function");
assert(typeof BCMDataExports === "function");
// commands
assert(typeof CreateExportCommand === "function");
assert(typeof CreateExport$ === "object");
assert(typeof DeleteExportCommand === "function");
assert(typeof DeleteExport$ === "object");
assert(typeof GetExecutionCommand === "function");
assert(typeof GetExecution$ === "object");
assert(typeof GetExportCommand === "function");
assert(typeof GetExport$ === "object");
assert(typeof GetTableCommand === "function");
assert(typeof GetTable$ === "object");
assert(typeof ListExecutionsCommand === "function");
assert(typeof ListExecutions$ === "object");
assert(typeof ListExportsCommand === "function");
assert(typeof ListExports$ === "object");
assert(typeof ListTablesCommand === "function");
assert(typeof ListTables$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateExportCommand === "function");
assert(typeof UpdateExport$ === "object");
// structural schemas
assert(typeof Column$ === "object");
assert(typeof CreateExportRequest$ === "object");
assert(typeof CreateExportResponse$ === "object");
assert(typeof DataQuery$ === "object");
assert(typeof DeleteExportRequest$ === "object");
assert(typeof DeleteExportResponse$ === "object");
assert(typeof DestinationConfigurations$ === "object");
assert(typeof ExecutionReference$ === "object");
assert(typeof ExecutionStatus$ === "object");
assert(typeof Export$ === "object");
assert(typeof ExportReference$ === "object");
assert(typeof ExportStatus$ === "object");
assert(typeof GetExecutionRequest$ === "object");
assert(typeof GetExecutionResponse$ === "object");
assert(typeof GetExportRequest$ === "object");
assert(typeof GetExportResponse$ === "object");
assert(typeof GetTableRequest$ === "object");
assert(typeof GetTableResponse$ === "object");
assert(typeof ListExecutionsRequest$ === "object");
assert(typeof ListExecutionsResponse$ === "object");
assert(typeof ListExportsRequest$ === "object");
assert(typeof ListExportsResponse$ === "object");
assert(typeof ListTablesRequest$ === "object");
assert(typeof ListTablesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof RefreshCadence$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof S3Destination$ === "object");
assert(typeof S3OutputConfigurations$ === "object");
assert(typeof Table$ === "object");
assert(typeof TablePropertyDescription$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateExportRequest$ === "object");
assert(typeof UpdateExportResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof CompressionOption === "object");
assert(typeof ExecutionStatusCode === "object");
assert(typeof ExecutionStatusReason === "object");
assert(typeof ExportStatusCode === "object");
assert(typeof FormatOption === "object");
assert(typeof FrequencyOption === "object");
assert(typeof OverwriteOption === "object");
assert(typeof S3OutputType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(InternalServerException.prototype instanceof BCMDataExportsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BCMDataExportsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BCMDataExportsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof BCMDataExportsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BCMDataExportsServiceException);
assert(typeof ValidationException$ === "object");
assert(BCMDataExportsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListExecutions === "function");
assert(typeof paginateListExports === "function");
assert(typeof paginateListTables === "function");
console.log(`BCMDataExports index test passed.`);

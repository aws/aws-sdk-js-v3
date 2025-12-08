import {
  BCMDataExports,
  BCMDataExportsClient,
  BCMDataExportsServiceException,
  CompressionOption,
  CreateExportCommand,
  DeleteExportCommand,
  ExecutionStatusCode,
  ExecutionStatusReason,
  ExportStatusCode,
  FormatOption,
  FrequencyOption,
  GetExecutionCommand,
  GetExportCommand,
  GetTableCommand,
  InternalServerException,
  ListExecutionsCommand,
  ListExportsCommand,
  ListTablesCommand,
  ListTagsForResourceCommand,
  OverwriteOption,
  ResourceNotFoundException,
  S3OutputType,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateExportCommand,
  ValidationException,
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
assert(typeof DeleteExportCommand === "function");
assert(typeof GetExecutionCommand === "function");
assert(typeof GetExportCommand === "function");
assert(typeof GetTableCommand === "function");
assert(typeof ListExecutionsCommand === "function");
assert(typeof ListExportsCommand === "function");
assert(typeof ListTablesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateExportCommand === "function");
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
assert(ResourceNotFoundException.prototype instanceof BCMDataExportsServiceException);
assert(ServiceQuotaExceededException.prototype instanceof BCMDataExportsServiceException);
assert(ThrottlingException.prototype instanceof BCMDataExportsServiceException);
assert(ValidationException.prototype instanceof BCMDataExportsServiceException);
assert(BCMDataExportsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListExecutions === "function");
assert(typeof paginateListExports === "function");
assert(typeof paginateListTables === "function");
console.log(`BCMDataExports index test passed.`);

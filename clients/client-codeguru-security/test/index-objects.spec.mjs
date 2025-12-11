import {
  AccessDeniedException,
  AnalysisType,
  BatchGetFindingsCommand,
  CodeGuruSecurity,
  CodeGuruSecurityClient,
  CodeGuruSecurityServiceException,
  ConflictException,
  CreateScanCommand,
  CreateUploadUrlCommand,
  ErrorCode,
  GetAccountConfigurationCommand,
  GetFindingsCommand,
  GetMetricsSummaryCommand,
  GetScanCommand,
  InternalServerException,
  ListFindingsMetricsCommand,
  ListScansCommand,
  ListTagsForResourceCommand,
  ResourceNotFoundException,
  ScanState,
  ScanType,
  Severity,
  Status,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateAccountConfigurationCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateGetFindings,
  paginateListFindingsMetrics,
  paginateListScans,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeGuruSecurityClient === "function");
assert(typeof CodeGuruSecurity === "function");
// commands
assert(typeof BatchGetFindingsCommand === "function");
assert(typeof CreateScanCommand === "function");
assert(typeof CreateUploadUrlCommand === "function");
assert(typeof GetAccountConfigurationCommand === "function");
assert(typeof GetFindingsCommand === "function");
assert(typeof GetMetricsSummaryCommand === "function");
assert(typeof GetScanCommand === "function");
assert(typeof ListFindingsMetricsCommand === "function");
assert(typeof ListScansCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccountConfigurationCommand === "function");
// enums
assert(typeof AnalysisType === "object");
assert(typeof ErrorCode === "object");
assert(typeof ScanState === "object");
assert(typeof ScanType === "object");
assert(typeof Severity === "object");
assert(typeof Status === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof CodeGuruSecurityServiceException);
assert(ConflictException.prototype instanceof CodeGuruSecurityServiceException);
assert(InternalServerException.prototype instanceof CodeGuruSecurityServiceException);
assert(ResourceNotFoundException.prototype instanceof CodeGuruSecurityServiceException);
assert(ThrottlingException.prototype instanceof CodeGuruSecurityServiceException);
assert(ValidationException.prototype instanceof CodeGuruSecurityServiceException);
assert(CodeGuruSecurityServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetFindings === "function");
assert(typeof paginateListFindingsMetrics === "function");
assert(typeof paginateListScans === "function");
console.log(`CodeGuruSecurity index test passed.`);

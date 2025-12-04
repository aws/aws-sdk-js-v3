import {
  AnalysisType,
  BatchGetFindingsCommand,
  CodeGuruSecurity,
  CodeGuruSecurityClient,
  CodeGuruSecurityServiceException,
  CreateScanCommand,
  CreateUploadUrlCommand,
  ErrorCode,
  GetAccountConfigurationCommand,
  GetFindingsCommand,
  GetMetricsSummaryCommand,
  GetScanCommand,
  ListFindingsMetricsCommand,
  ListScansCommand,
  ListTagsForResourceCommand,
  ScanState,
  ScanType,
  Severity,
  Status,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountConfigurationCommand,
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
// errors
assert(CodeGuruSecurityServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetFindings === "function");
assert(typeof paginateListFindingsMetrics === "function");
assert(typeof paginateListScans === "function");
console.log(`CodeGuruSecurity index test passed.`);

import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountFindingsMetric$,
  AnalysisType,
  BatchGetFindings$,
  BatchGetFindingsCommand,
  BatchGetFindingsError$,
  BatchGetFindingsRequest$,
  BatchGetFindingsResponse$,
  CategoryWithFindingNum$,
  CodeGuruSecurity,
  CodeGuruSecurityClient,
  CodeGuruSecurityServiceException,
  CodeLine$,
  ConflictException,
  ConflictException$,
  CreateScan$,
  CreateScanCommand,
  CreateScanRequest$,
  CreateScanResponse$,
  CreateUploadUrl$,
  CreateUploadUrlCommand,
  CreateUploadUrlRequest$,
  CreateUploadUrlResponse$,
  EncryptionConfig$,
  ErrorCode,
  FilePath$,
  Finding$,
  FindingIdentifier$,
  FindingMetricsValuePerSeverity$,
  GetAccountConfiguration$,
  GetAccountConfigurationCommand,
  GetAccountConfigurationRequest$,
  GetAccountConfigurationResponse$,
  GetFindings$,
  GetFindingsCommand,
  GetFindingsRequest$,
  GetFindingsResponse$,
  GetMetricsSummary$,
  GetMetricsSummaryCommand,
  GetMetricsSummaryRequest$,
  GetMetricsSummaryResponse$,
  GetScan$,
  GetScanCommand,
  GetScanRequest$,
  GetScanResponse$,
  InternalServerException,
  InternalServerException$,
  ListFindingsMetrics$,
  ListFindingsMetricsCommand,
  ListFindingsMetricsRequest$,
  ListFindingsMetricsResponse$,
  ListScans$,
  ListScansCommand,
  ListScansRequest$,
  ListScansResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MetricsSummary$,
  Recommendation$,
  Remediation$,
  Resource$,
  ResourceId$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ScanNameWithFindingNum$,
  ScanState,
  ScanSummary$,
  ScanType,
  Severity,
  Status,
  SuggestedFix$,
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
  UpdateAccountConfiguration$,
  UpdateAccountConfigurationCommand,
  UpdateAccountConfigurationRequest$,
  UpdateAccountConfigurationResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  Vulnerability$,
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
assert(typeof BatchGetFindings$ === "object");
assert(typeof CreateScanCommand === "function");
assert(typeof CreateScan$ === "object");
assert(typeof CreateUploadUrlCommand === "function");
assert(typeof CreateUploadUrl$ === "object");
assert(typeof GetAccountConfigurationCommand === "function");
assert(typeof GetAccountConfiguration$ === "object");
assert(typeof GetFindingsCommand === "function");
assert(typeof GetFindings$ === "object");
assert(typeof GetMetricsSummaryCommand === "function");
assert(typeof GetMetricsSummary$ === "object");
assert(typeof GetScanCommand === "function");
assert(typeof GetScan$ === "object");
assert(typeof ListFindingsMetricsCommand === "function");
assert(typeof ListFindingsMetrics$ === "object");
assert(typeof ListScansCommand === "function");
assert(typeof ListScans$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccountConfigurationCommand === "function");
assert(typeof UpdateAccountConfiguration$ === "object");
// structural schemas
assert(typeof AccountFindingsMetric$ === "object");
assert(typeof BatchGetFindingsError$ === "object");
assert(typeof BatchGetFindingsRequest$ === "object");
assert(typeof BatchGetFindingsResponse$ === "object");
assert(typeof CategoryWithFindingNum$ === "object");
assert(typeof CodeLine$ === "object");
assert(typeof CreateScanRequest$ === "object");
assert(typeof CreateScanResponse$ === "object");
assert(typeof CreateUploadUrlRequest$ === "object");
assert(typeof CreateUploadUrlResponse$ === "object");
assert(typeof EncryptionConfig$ === "object");
assert(typeof FilePath$ === "object");
assert(typeof Finding$ === "object");
assert(typeof FindingIdentifier$ === "object");
assert(typeof FindingMetricsValuePerSeverity$ === "object");
assert(typeof GetAccountConfigurationRequest$ === "object");
assert(typeof GetAccountConfigurationResponse$ === "object");
assert(typeof GetFindingsRequest$ === "object");
assert(typeof GetFindingsResponse$ === "object");
assert(typeof GetMetricsSummaryRequest$ === "object");
assert(typeof GetMetricsSummaryResponse$ === "object");
assert(typeof GetScanRequest$ === "object");
assert(typeof GetScanResponse$ === "object");
assert(typeof ListFindingsMetricsRequest$ === "object");
assert(typeof ListFindingsMetricsResponse$ === "object");
assert(typeof ListScansRequest$ === "object");
assert(typeof ListScansResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MetricsSummary$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof Remediation$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceId$ === "object");
assert(typeof ScanNameWithFindingNum$ === "object");
assert(typeof ScanSummary$ === "object");
assert(typeof SuggestedFix$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccountConfigurationRequest$ === "object");
assert(typeof UpdateAccountConfigurationResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof Vulnerability$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof CodeGuruSecurityServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof CodeGuruSecurityServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CodeGuruSecurityServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof CodeGuruSecurityServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof CodeGuruSecurityServiceException);
assert(typeof ValidationException$ === "object");
assert(CodeGuruSecurityServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetFindings === "function");
assert(typeof paginateListFindingsMetrics === "function");
assert(typeof paginateListScans === "function");
console.log(`CodeGuruSecurity index test passed.`);

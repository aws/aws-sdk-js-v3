import {
  AbuseSignal,
  AbuseSignalClient,
  AbuseSignalServiceException,
  AccessDeniedException,
  AccessDeniedException$,
  ConflictException,
  ConflictException$,
  CreateAbuseReport$,
  CreateAbuseReportCommand,
  CreateAbuseReportRequest$,
  CreateAbuseReportResponse$,
  GetAbuseReportStatus$,
  GetAbuseReportStatusCommand,
  GetAbuseReportStatusRequest$,
  GetAbuseReportStatusResponse$,
  InternalServerException,
  InternalServerException$,
  ListAbuseReportStatuses$,
  ListAbuseReportStatusesCommand,
  ListAbuseReportStatusesRequest$,
  ListAbuseReportStatusesResponse$,
  paginateListAbuseReportStatuses,
  ReasonCode,
  ReportData$,
  ReportStatusListItem$,
  ReportSubmissionStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SubmissionRequirement$,
  SubmissionRequirementException,
  SubmissionRequirementException$,
  ThrottlingException,
  ThrottlingException$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  waitForReportProcessing,
  waitUntilReportProcessing,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AbuseSignalClient === "function");
assert(typeof AbuseSignal === "function");
// commands
assert(typeof CreateAbuseReportCommand === "function");
assert(typeof CreateAbuseReport$ === "object");
assert(typeof GetAbuseReportStatusCommand === "function");
assert(typeof GetAbuseReportStatus$ === "object");
assert(typeof ListAbuseReportStatusesCommand === "function");
assert(typeof ListAbuseReportStatuses$ === "object");
// structural schemas
assert(typeof CreateAbuseReportRequest$ === "object");
assert(typeof CreateAbuseReportResponse$ === "object");
assert(typeof GetAbuseReportStatusRequest$ === "object");
assert(typeof GetAbuseReportStatusResponse$ === "object");
assert(typeof ListAbuseReportStatusesRequest$ === "object");
assert(typeof ListAbuseReportStatusesResponse$ === "object");
assert(typeof ReportData$ === "object");
assert(typeof ReportStatusListItem$ === "object");
assert(typeof SubmissionRequirement$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof ReasonCode === "object");
assert(typeof ReportSubmissionStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof AbuseSignalServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof AbuseSignalServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof AbuseSignalServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AbuseSignalServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(SubmissionRequirementException.prototype instanceof AbuseSignalServiceException);
assert(typeof SubmissionRequirementException$ === "object");
assert(ThrottlingException.prototype instanceof AbuseSignalServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof AbuseSignalServiceException);
assert(typeof ValidationException$ === "object");
assert(AbuseSignalServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForReportProcessing === "function");
assert(typeof waitUntilReportProcessing === "function");
// paginators
assert(typeof paginateListAbuseReportStatuses === "function");
console.log(`AbuseSignal index test passed.`);

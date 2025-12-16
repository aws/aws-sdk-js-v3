import {
  AcceptanceType,
  AccessDeniedException,
  AccessDeniedException$,
  AccountSettings$,
  AgreementType,
  Artifact,
  ArtifactClient,
  ArtifactServiceException,
  ConflictException,
  ConflictException$,
  CustomerAgreementState,
  CustomerAgreementSummary$,
  GetAccountSettings$,
  GetAccountSettingsCommand,
  GetAccountSettingsRequest$,
  GetAccountSettingsResponse$,
  GetReport$,
  GetReportCommand,
  GetReportMetadata$,
  GetReportMetadataCommand,
  GetReportMetadataRequest$,
  GetReportMetadataResponse$,
  GetReportRequest$,
  GetReportResponse$,
  GetTermForReport$,
  GetTermForReportCommand,
  GetTermForReportRequest$,
  GetTermForReportResponse$,
  InternalServerException,
  InternalServerException$,
  ListCustomerAgreements$,
  ListCustomerAgreementsCommand,
  ListCustomerAgreementsRequest$,
  ListCustomerAgreementsResponse$,
  ListReports$,
  ListReportsCommand,
  ListReportsRequest$,
  ListReportsResponse$,
  NotificationSubscriptionStatus,
  PublishedState,
  PutAccountSettings$,
  PutAccountSettingsCommand,
  PutAccountSettingsRequest$,
  PutAccountSettingsResponse$,
  ReportDetail$,
  ReportSummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ThrottlingException,
  ThrottlingException$,
  UploadState,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  paginateListCustomerAgreements,
  paginateListReports,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ArtifactClient === "function");
assert(typeof Artifact === "function");
// commands
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetAccountSettings$ === "object");
assert(typeof GetReportCommand === "function");
assert(typeof GetReport$ === "object");
assert(typeof GetReportMetadataCommand === "function");
assert(typeof GetReportMetadata$ === "object");
assert(typeof GetTermForReportCommand === "function");
assert(typeof GetTermForReport$ === "object");
assert(typeof ListCustomerAgreementsCommand === "function");
assert(typeof ListCustomerAgreements$ === "object");
assert(typeof ListReportsCommand === "function");
assert(typeof ListReports$ === "object");
assert(typeof PutAccountSettingsCommand === "function");
assert(typeof PutAccountSettings$ === "object");
// structural schemas
assert(typeof AccountSettings$ === "object");
assert(typeof CustomerAgreementSummary$ === "object");
assert(typeof GetAccountSettingsRequest$ === "object");
assert(typeof GetAccountSettingsResponse$ === "object");
assert(typeof GetReportMetadataRequest$ === "object");
assert(typeof GetReportMetadataResponse$ === "object");
assert(typeof GetReportRequest$ === "object");
assert(typeof GetReportResponse$ === "object");
assert(typeof GetTermForReportRequest$ === "object");
assert(typeof GetTermForReportResponse$ === "object");
assert(typeof ListCustomerAgreementsRequest$ === "object");
assert(typeof ListCustomerAgreementsResponse$ === "object");
assert(typeof ListReportsRequest$ === "object");
assert(typeof ListReportsResponse$ === "object");
assert(typeof PutAccountSettingsRequest$ === "object");
assert(typeof PutAccountSettingsResponse$ === "object");
assert(typeof ReportDetail$ === "object");
assert(typeof ReportSummary$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AcceptanceType === "object");
assert(typeof AgreementType === "object");
assert(typeof CustomerAgreementState === "object");
assert(typeof NotificationSubscriptionStatus === "object");
assert(typeof PublishedState === "object");
assert(typeof UploadState === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof ArtifactServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ArtifactServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ArtifactServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ArtifactServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ArtifactServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ArtifactServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ArtifactServiceException);
assert(typeof ValidationException$ === "object");
assert(ArtifactServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCustomerAgreements === "function");
assert(typeof paginateListReports === "function");
console.log(`Artifact index test passed.`);

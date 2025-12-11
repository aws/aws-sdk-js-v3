import {
  AcceptanceType,
  AccessDeniedException,
  AgreementType,
  Artifact,
  ArtifactClient,
  ArtifactServiceException,
  ConflictException,
  CustomerAgreementState,
  GetAccountSettingsCommand,
  GetReportCommand,
  GetReportMetadataCommand,
  GetTermForReportCommand,
  InternalServerException,
  ListCustomerAgreementsCommand,
  ListReportsCommand,
  NotificationSubscriptionStatus,
  PublishedState,
  PutAccountSettingsCommand,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  UploadState,
  ValidationException,
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
assert(typeof GetReportCommand === "function");
assert(typeof GetReportMetadataCommand === "function");
assert(typeof GetTermForReportCommand === "function");
assert(typeof ListCustomerAgreementsCommand === "function");
assert(typeof ListReportsCommand === "function");
assert(typeof PutAccountSettingsCommand === "function");
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
assert(ConflictException.prototype instanceof ArtifactServiceException);
assert(InternalServerException.prototype instanceof ArtifactServiceException);
assert(ResourceNotFoundException.prototype instanceof ArtifactServiceException);
assert(ServiceQuotaExceededException.prototype instanceof ArtifactServiceException);
assert(ThrottlingException.prototype instanceof ArtifactServiceException);
assert(ValidationException.prototype instanceof ArtifactServiceException);
assert(ArtifactServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCustomerAgreements === "function");
assert(typeof paginateListReports === "function");
console.log(`Artifact index test passed.`);

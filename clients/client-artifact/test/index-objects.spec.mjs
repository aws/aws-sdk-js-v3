import {
  AcceptanceType,
  AgreementType,
  Artifact,
  ArtifactClient,
  ArtifactServiceException,
  CustomerAgreementState,
  GetAccountSettingsCommand,
  GetReportCommand,
  GetReportMetadataCommand,
  GetTermForReportCommand,
  ListCustomerAgreementsCommand,
  ListReportsCommand,
  NotificationSubscriptionStatus,
  PublishedState,
  PutAccountSettingsCommand,
  UploadState,
  paginateListCustomerAgreements,
  paginateListReports,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ArtifactClient === "function")
assert(typeof Artifact === "function")
// commands
assert(typeof GetAccountSettingsCommand === "function")
assert(typeof GetReportCommand === "function")
assert(typeof GetReportMetadataCommand === "function")
assert(typeof GetTermForReportCommand === "function")
assert(typeof ListCustomerAgreementsCommand === "function")
assert(typeof ListReportsCommand === "function")
assert(typeof PutAccountSettingsCommand === "function")
// enums
assert(typeof AcceptanceType === "object");
assert(typeof AgreementType === "object");
assert(typeof CustomerAgreementState === "object");
assert(typeof NotificationSubscriptionStatus === "object");
assert(typeof PublishedState === "object");
assert(typeof UploadState === "object");
// errors
assert(ArtifactServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListCustomerAgreements === "function")
assert(typeof paginateListReports === "function")
console.log(`Artifact index test passed.`);

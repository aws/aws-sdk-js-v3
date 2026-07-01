import {
  AcceptanceType,
  AccessDeniedException,
  AccessDeniedException$,
  AccountSettings$,
  AgreementType,
  Artifact,
  ArtifactClient,
  ArtifactServiceException,
  Citation$,
  ConflictException,
  ConflictException$,
  CreateComplianceInquiry$,
  CreateComplianceInquiryCommand,
  CreateComplianceInquiryRequest$,
  CreateComplianceInquiryResponse$,
  CustomerAgreementState,
  CustomerAgreementSummary$,
  ExportComplianceInquiry$,
  ExportComplianceInquiryCommand,
  ExportComplianceInquiryRequest$,
  ExportComplianceInquiryResponse$,
  GetAccountSettings$,
  GetAccountSettingsCommand,
  GetAccountSettingsRequest$,
  GetAccountSettingsResponse$,
  GetComplianceInquiryMetadata$,
  GetComplianceInquiryMetadataCommand,
  GetComplianceInquiryMetadataRequest$,
  GetComplianceInquiryMetadataResponse$,
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
  InputSource,
  InquiryContent$,
  InquiryDetail$,
  InquiryFileContent$,
  InquiryStatus,
  InquiryStatusMessage,
  InquirySummary$,
  InquirySupportMode,
  InternalServerException,
  InternalServerException$,
  ListComplianceInquiries$,
  ListComplianceInquiriesCommand,
  ListComplianceInquiriesRequest$,
  ListComplianceInquiriesResponse$,
  ListComplianceInquiryQueries$,
  ListComplianceInquiryQueriesCommand,
  ListComplianceInquiryQueriesRequest$,
  ListComplianceInquiryQueriesResponse$,
  ListCustomerAgreements$,
  ListCustomerAgreementsCommand,
  ListCustomerAgreementsRequest$,
  ListCustomerAgreementsResponse$,
  ListReports$,
  ListReportsCommand,
  ListReportsRequest$,
  ListReportsResponse$,
  ListReportVersions$,
  ListReportVersionsCommand,
  ListReportVersionsRequest$,
  ListReportVersionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NotificationSubscriptionStatus,
  paginateListComplianceInquiries,
  paginateListComplianceInquiryQueries,
  paginateListCustomerAgreements,
  paginateListReports,
  paginateListReportVersions,
  PublishedState,
  PutAccountSettings$,
  PutAccountSettingsCommand,
  PutAccountSettingsRequest$,
  PutAccountSettingsResponse$,
  QueryStatus,
  QueryStatusMessage,
  QuerySummary$,
  ReportDetail$,
  ReportSummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResponseVersion$,
  ReviewType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
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
  UploadState,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ArtifactClient === "function");
assert(typeof Artifact === "function");
// commands
assert(typeof CreateComplianceInquiryCommand === "function");
assert(typeof CreateComplianceInquiry$ === "object");
assert(typeof ExportComplianceInquiryCommand === "function");
assert(typeof ExportComplianceInquiry$ === "object");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetAccountSettings$ === "object");
assert(typeof GetComplianceInquiryMetadataCommand === "function");
assert(typeof GetComplianceInquiryMetadata$ === "object");
assert(typeof GetReportCommand === "function");
assert(typeof GetReport$ === "object");
assert(typeof GetReportMetadataCommand === "function");
assert(typeof GetReportMetadata$ === "object");
assert(typeof GetTermForReportCommand === "function");
assert(typeof GetTermForReport$ === "object");
assert(typeof ListComplianceInquiriesCommand === "function");
assert(typeof ListComplianceInquiries$ === "object");
assert(typeof ListComplianceInquiryQueriesCommand === "function");
assert(typeof ListComplianceInquiryQueries$ === "object");
assert(typeof ListCustomerAgreementsCommand === "function");
assert(typeof ListCustomerAgreements$ === "object");
assert(typeof ListReportsCommand === "function");
assert(typeof ListReports$ === "object");
assert(typeof ListReportVersionsCommand === "function");
assert(typeof ListReportVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutAccountSettingsCommand === "function");
assert(typeof PutAccountSettings$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AccountSettings$ === "object");
assert(typeof Citation$ === "object");
assert(typeof CreateComplianceInquiryRequest$ === "object");
assert(typeof CreateComplianceInquiryResponse$ === "object");
assert(typeof CustomerAgreementSummary$ === "object");
assert(typeof ExportComplianceInquiryRequest$ === "object");
assert(typeof ExportComplianceInquiryResponse$ === "object");
assert(typeof GetAccountSettingsRequest$ === "object");
assert(typeof GetAccountSettingsResponse$ === "object");
assert(typeof GetComplianceInquiryMetadataRequest$ === "object");
assert(typeof GetComplianceInquiryMetadataResponse$ === "object");
assert(typeof GetReportMetadataRequest$ === "object");
assert(typeof GetReportMetadataResponse$ === "object");
assert(typeof GetReportRequest$ === "object");
assert(typeof GetReportResponse$ === "object");
assert(typeof GetTermForReportRequest$ === "object");
assert(typeof GetTermForReportResponse$ === "object");
assert(typeof InquiryContent$ === "object");
assert(typeof InquiryDetail$ === "object");
assert(typeof InquiryFileContent$ === "object");
assert(typeof InquirySummary$ === "object");
assert(typeof ListComplianceInquiriesRequest$ === "object");
assert(typeof ListComplianceInquiriesResponse$ === "object");
assert(typeof ListComplianceInquiryQueriesRequest$ === "object");
assert(typeof ListComplianceInquiryQueriesResponse$ === "object");
assert(typeof ListCustomerAgreementsRequest$ === "object");
assert(typeof ListCustomerAgreementsResponse$ === "object");
assert(typeof ListReportsRequest$ === "object");
assert(typeof ListReportsResponse$ === "object");
assert(typeof ListReportVersionsRequest$ === "object");
assert(typeof ListReportVersionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PutAccountSettingsRequest$ === "object");
assert(typeof PutAccountSettingsResponse$ === "object");
assert(typeof QuerySummary$ === "object");
assert(typeof ReportDetail$ === "object");
assert(typeof ReportSummary$ === "object");
assert(typeof ResponseVersion$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AcceptanceType === "object");
assert(typeof AgreementType === "object");
assert(typeof CustomerAgreementState === "object");
assert(typeof InputSource === "object");
assert(typeof InquiryStatus === "object");
assert(typeof InquiryStatusMessage === "object");
assert(typeof InquirySupportMode === "object");
assert(typeof NotificationSubscriptionStatus === "object");
assert(typeof PublishedState === "object");
assert(typeof QueryStatus === "object");
assert(typeof QueryStatusMessage === "object");
assert(typeof ReviewType === "object");
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
assert(typeof paginateListComplianceInquiries === "function");
assert(typeof paginateListComplianceInquiryQueries === "function");
assert(typeof paginateListCustomerAgreements === "function");
assert(typeof paginateListReportVersions === "function");
assert(typeof paginateListReports === "function");
console.log(`Artifact index test passed.`);

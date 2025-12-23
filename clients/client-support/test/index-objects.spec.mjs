import {
  AddAttachmentsToSet$,
  AddAttachmentsToSetCommand,
  AddAttachmentsToSetRequest$,
  AddAttachmentsToSetResponse$,
  AddCommunicationToCase$,
  AddCommunicationToCaseCommand,
  AddCommunicationToCaseRequest$,
  AddCommunicationToCaseResponse$,
  Attachment$,
  AttachmentDetails$,
  AttachmentIdNotFound,
  AttachmentIdNotFound$,
  AttachmentLimitExceeded,
  AttachmentLimitExceeded$,
  AttachmentSetExpired,
  AttachmentSetExpired$,
  AttachmentSetIdNotFound,
  AttachmentSetIdNotFound$,
  AttachmentSetSizeLimitExceeded,
  AttachmentSetSizeLimitExceeded$,
  CaseCreationLimitExceeded,
  CaseCreationLimitExceeded$,
  CaseDetails$,
  CaseIdNotFound,
  CaseIdNotFound$,
  Category$,
  Communication$,
  CommunicationTypeOptions$,
  CreateCase$,
  CreateCaseCommand,
  CreateCaseRequest$,
  CreateCaseResponse$,
  DateInterval$,
  DescribeAttachment$,
  DescribeAttachmentCommand,
  DescribeAttachmentLimitExceeded,
  DescribeAttachmentLimitExceeded$,
  DescribeAttachmentRequest$,
  DescribeAttachmentResponse$,
  DescribeCases$,
  DescribeCasesCommand,
  DescribeCasesRequest$,
  DescribeCasesResponse$,
  DescribeCommunications$,
  DescribeCommunicationsCommand,
  DescribeCommunicationsRequest$,
  DescribeCommunicationsResponse$,
  DescribeCreateCaseOptions$,
  DescribeCreateCaseOptionsCommand,
  DescribeCreateCaseOptionsRequest$,
  DescribeCreateCaseOptionsResponse$,
  DescribeServices$,
  DescribeServicesCommand,
  DescribeServicesRequest$,
  DescribeServicesResponse$,
  DescribeSeverityLevels$,
  DescribeSeverityLevelsCommand,
  DescribeSeverityLevelsRequest$,
  DescribeSeverityLevelsResponse$,
  DescribeSupportedLanguages$,
  DescribeSupportedLanguagesCommand,
  DescribeSupportedLanguagesRequest$,
  DescribeSupportedLanguagesResponse$,
  DescribeTrustedAdvisorCheckRefreshStatuses$,
  DescribeTrustedAdvisorCheckRefreshStatusesCommand,
  DescribeTrustedAdvisorCheckRefreshStatusesRequest$,
  DescribeTrustedAdvisorCheckRefreshStatusesResponse$,
  DescribeTrustedAdvisorCheckResult$,
  DescribeTrustedAdvisorCheckResultCommand,
  DescribeTrustedAdvisorCheckResultRequest$,
  DescribeTrustedAdvisorCheckResultResponse$,
  DescribeTrustedAdvisorChecks$,
  DescribeTrustedAdvisorChecksCommand,
  DescribeTrustedAdvisorChecksRequest$,
  DescribeTrustedAdvisorChecksResponse$,
  DescribeTrustedAdvisorCheckSummaries$,
  DescribeTrustedAdvisorCheckSummariesCommand,
  DescribeTrustedAdvisorCheckSummariesRequest$,
  DescribeTrustedAdvisorCheckSummariesResponse$,
  InternalServerError,
  InternalServerError$,
  paginateDescribeCases,
  paginateDescribeCommunications,
  RecentCaseCommunications$,
  RefreshTrustedAdvisorCheck$,
  RefreshTrustedAdvisorCheckCommand,
  RefreshTrustedAdvisorCheckRequest$,
  RefreshTrustedAdvisorCheckResponse$,
  ResolveCase$,
  ResolveCaseCommand,
  ResolveCaseRequest$,
  ResolveCaseResponse$,
  Service$,
  SeverityLevel$,
  Support,
  SupportClient,
  SupportedHour$,
  SupportedLanguage$,
  SupportServiceException,
  ThrottlingException,
  ThrottlingException$,
  TrustedAdvisorCategorySpecificSummary$,
  TrustedAdvisorCheckDescription$,
  TrustedAdvisorCheckRefreshStatus$,
  TrustedAdvisorCheckResult$,
  TrustedAdvisorCheckSummary$,
  TrustedAdvisorCostOptimizingSummary$,
  TrustedAdvisorResourceDetail$,
  TrustedAdvisorResourcesSummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SupportClient === "function");
assert(typeof Support === "function");
// commands
assert(typeof AddAttachmentsToSetCommand === "function");
assert(typeof AddAttachmentsToSet$ === "object");
assert(typeof AddCommunicationToCaseCommand === "function");
assert(typeof AddCommunicationToCase$ === "object");
assert(typeof CreateCaseCommand === "function");
assert(typeof CreateCase$ === "object");
assert(typeof DescribeAttachmentCommand === "function");
assert(typeof DescribeAttachment$ === "object");
assert(typeof DescribeCasesCommand === "function");
assert(typeof DescribeCases$ === "object");
assert(typeof DescribeCommunicationsCommand === "function");
assert(typeof DescribeCommunications$ === "object");
assert(typeof DescribeCreateCaseOptionsCommand === "function");
assert(typeof DescribeCreateCaseOptions$ === "object");
assert(typeof DescribeServicesCommand === "function");
assert(typeof DescribeServices$ === "object");
assert(typeof DescribeSeverityLevelsCommand === "function");
assert(typeof DescribeSeverityLevels$ === "object");
assert(typeof DescribeSupportedLanguagesCommand === "function");
assert(typeof DescribeSupportedLanguages$ === "object");
assert(typeof DescribeTrustedAdvisorCheckRefreshStatusesCommand === "function");
assert(typeof DescribeTrustedAdvisorCheckRefreshStatuses$ === "object");
assert(typeof DescribeTrustedAdvisorCheckResultCommand === "function");
assert(typeof DescribeTrustedAdvisorCheckResult$ === "object");
assert(typeof DescribeTrustedAdvisorChecksCommand === "function");
assert(typeof DescribeTrustedAdvisorChecks$ === "object");
assert(typeof DescribeTrustedAdvisorCheckSummariesCommand === "function");
assert(typeof DescribeTrustedAdvisorCheckSummaries$ === "object");
assert(typeof RefreshTrustedAdvisorCheckCommand === "function");
assert(typeof RefreshTrustedAdvisorCheck$ === "object");
assert(typeof ResolveCaseCommand === "function");
assert(typeof ResolveCase$ === "object");
// structural schemas
assert(typeof AddAttachmentsToSetRequest$ === "object");
assert(typeof AddAttachmentsToSetResponse$ === "object");
assert(typeof AddCommunicationToCaseRequest$ === "object");
assert(typeof AddCommunicationToCaseResponse$ === "object");
assert(typeof Attachment$ === "object");
assert(typeof AttachmentDetails$ === "object");
assert(typeof CaseDetails$ === "object");
assert(typeof Category$ === "object");
assert(typeof Communication$ === "object");
assert(typeof CommunicationTypeOptions$ === "object");
assert(typeof CreateCaseRequest$ === "object");
assert(typeof CreateCaseResponse$ === "object");
assert(typeof DateInterval$ === "object");
assert(typeof DescribeAttachmentRequest$ === "object");
assert(typeof DescribeAttachmentResponse$ === "object");
assert(typeof DescribeCasesRequest$ === "object");
assert(typeof DescribeCasesResponse$ === "object");
assert(typeof DescribeCommunicationsRequest$ === "object");
assert(typeof DescribeCommunicationsResponse$ === "object");
assert(typeof DescribeCreateCaseOptionsRequest$ === "object");
assert(typeof DescribeCreateCaseOptionsResponse$ === "object");
assert(typeof DescribeServicesRequest$ === "object");
assert(typeof DescribeServicesResponse$ === "object");
assert(typeof DescribeSeverityLevelsRequest$ === "object");
assert(typeof DescribeSeverityLevelsResponse$ === "object");
assert(typeof DescribeSupportedLanguagesRequest$ === "object");
assert(typeof DescribeSupportedLanguagesResponse$ === "object");
assert(typeof DescribeTrustedAdvisorCheckRefreshStatusesRequest$ === "object");
assert(typeof DescribeTrustedAdvisorCheckRefreshStatusesResponse$ === "object");
assert(typeof DescribeTrustedAdvisorCheckResultRequest$ === "object");
assert(typeof DescribeTrustedAdvisorCheckResultResponse$ === "object");
assert(typeof DescribeTrustedAdvisorChecksRequest$ === "object");
assert(typeof DescribeTrustedAdvisorChecksResponse$ === "object");
assert(typeof DescribeTrustedAdvisorCheckSummariesRequest$ === "object");
assert(typeof DescribeTrustedAdvisorCheckSummariesResponse$ === "object");
assert(typeof RecentCaseCommunications$ === "object");
assert(typeof RefreshTrustedAdvisorCheckRequest$ === "object");
assert(typeof RefreshTrustedAdvisorCheckResponse$ === "object");
assert(typeof ResolveCaseRequest$ === "object");
assert(typeof ResolveCaseResponse$ === "object");
assert(typeof Service$ === "object");
assert(typeof SeverityLevel$ === "object");
assert(typeof SupportedHour$ === "object");
assert(typeof SupportedLanguage$ === "object");
assert(typeof TrustedAdvisorCategorySpecificSummary$ === "object");
assert(typeof TrustedAdvisorCheckDescription$ === "object");
assert(typeof TrustedAdvisorCheckRefreshStatus$ === "object");
assert(typeof TrustedAdvisorCheckResult$ === "object");
assert(typeof TrustedAdvisorCheckSummary$ === "object");
assert(typeof TrustedAdvisorCostOptimizingSummary$ === "object");
assert(typeof TrustedAdvisorResourceDetail$ === "object");
assert(typeof TrustedAdvisorResourcesSummary$ === "object");
// errors
assert(AttachmentIdNotFound.prototype instanceof SupportServiceException);
assert(typeof AttachmentIdNotFound$ === "object");
assert(AttachmentLimitExceeded.prototype instanceof SupportServiceException);
assert(typeof AttachmentLimitExceeded$ === "object");
assert(AttachmentSetExpired.prototype instanceof SupportServiceException);
assert(typeof AttachmentSetExpired$ === "object");
assert(AttachmentSetIdNotFound.prototype instanceof SupportServiceException);
assert(typeof AttachmentSetIdNotFound$ === "object");
assert(AttachmentSetSizeLimitExceeded.prototype instanceof SupportServiceException);
assert(typeof AttachmentSetSizeLimitExceeded$ === "object");
assert(CaseCreationLimitExceeded.prototype instanceof SupportServiceException);
assert(typeof CaseCreationLimitExceeded$ === "object");
assert(CaseIdNotFound.prototype instanceof SupportServiceException);
assert(typeof CaseIdNotFound$ === "object");
assert(DescribeAttachmentLimitExceeded.prototype instanceof SupportServiceException);
assert(typeof DescribeAttachmentLimitExceeded$ === "object");
assert(InternalServerError.prototype instanceof SupportServiceException);
assert(typeof InternalServerError$ === "object");
assert(ThrottlingException.prototype instanceof SupportServiceException);
assert(typeof ThrottlingException$ === "object");
assert(SupportServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeCases === "function");
assert(typeof paginateDescribeCommunications === "function");
console.log(`Support index test passed.`);

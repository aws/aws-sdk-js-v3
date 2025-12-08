import {
  AddAttachmentsToSetCommand,
  AddCommunicationToCaseCommand,
  AttachmentIdNotFound,
  AttachmentLimitExceeded,
  AttachmentSetExpired,
  AttachmentSetIdNotFound,
  AttachmentSetSizeLimitExceeded,
  CaseCreationLimitExceeded,
  CaseIdNotFound,
  CreateCaseCommand,
  DescribeAttachmentCommand,
  DescribeAttachmentLimitExceeded,
  DescribeCasesCommand,
  DescribeCommunicationsCommand,
  DescribeCreateCaseOptionsCommand,
  DescribeServicesCommand,
  DescribeSeverityLevelsCommand,
  DescribeSupportedLanguagesCommand,
  DescribeTrustedAdvisorCheckRefreshStatusesCommand,
  DescribeTrustedAdvisorCheckResultCommand,
  DescribeTrustedAdvisorCheckSummariesCommand,
  DescribeTrustedAdvisorChecksCommand,
  InternalServerError,
  RefreshTrustedAdvisorCheckCommand,
  ResolveCaseCommand,
  Support,
  SupportClient,
  SupportServiceException,
  ThrottlingException,
  paginateDescribeCases,
  paginateDescribeCommunications,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SupportClient === "function");
assert(typeof Support === "function");
// commands
assert(typeof AddAttachmentsToSetCommand === "function");
assert(typeof AddCommunicationToCaseCommand === "function");
assert(typeof CreateCaseCommand === "function");
assert(typeof DescribeAttachmentCommand === "function");
assert(typeof DescribeCasesCommand === "function");
assert(typeof DescribeCommunicationsCommand === "function");
assert(typeof DescribeCreateCaseOptionsCommand === "function");
assert(typeof DescribeServicesCommand === "function");
assert(typeof DescribeSeverityLevelsCommand === "function");
assert(typeof DescribeSupportedLanguagesCommand === "function");
assert(typeof DescribeTrustedAdvisorCheckRefreshStatusesCommand === "function");
assert(typeof DescribeTrustedAdvisorCheckResultCommand === "function");
assert(typeof DescribeTrustedAdvisorChecksCommand === "function");
assert(typeof DescribeTrustedAdvisorCheckSummariesCommand === "function");
assert(typeof RefreshTrustedAdvisorCheckCommand === "function");
assert(typeof ResolveCaseCommand === "function");
// errors
assert(AttachmentIdNotFound.prototype instanceof SupportServiceException);
assert(AttachmentLimitExceeded.prototype instanceof SupportServiceException);
assert(AttachmentSetExpired.prototype instanceof SupportServiceException);
assert(AttachmentSetIdNotFound.prototype instanceof SupportServiceException);
assert(AttachmentSetSizeLimitExceeded.prototype instanceof SupportServiceException);
assert(CaseCreationLimitExceeded.prototype instanceof SupportServiceException);
assert(CaseIdNotFound.prototype instanceof SupportServiceException);
assert(DescribeAttachmentLimitExceeded.prototype instanceof SupportServiceException);
assert(InternalServerError.prototype instanceof SupportServiceException);
assert(ThrottlingException.prototype instanceof SupportServiceException);
assert(SupportServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeCases === "function");
assert(typeof paginateDescribeCommunications === "function");
console.log(`Support index test passed.`);

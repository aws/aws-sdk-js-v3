import {
  AddAttachmentsToSetCommand,
  AddCommunicationToCaseCommand,
  CreateCaseCommand,
  DescribeAttachmentCommand,
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
  RefreshTrustedAdvisorCheckCommand,
  ResolveCaseCommand,
  Support,
  SupportClient,
  SupportServiceException,
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
assert(SupportServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeCases === "function");
assert(typeof paginateDescribeCommunications === "function");
console.log(`Support index test passed.`);

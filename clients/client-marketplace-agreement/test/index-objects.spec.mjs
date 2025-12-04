import {
  AgreementStatus,
  DescribeAgreementCommand,
  GetAgreementTermsCommand,
  MarketplaceAgreement,
  MarketplaceAgreementClient,
  MarketplaceAgreementServiceException,
  PaymentRequestApprovalStrategy,
  SearchAgreementsCommand,
  SortOrder,
  paginateGetAgreementTerms,
  paginateSearchAgreements,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceAgreementClient === "function");
assert(typeof MarketplaceAgreement === "function");
// commands
assert(typeof DescribeAgreementCommand === "function");
assert(typeof GetAgreementTermsCommand === "function");
assert(typeof SearchAgreementsCommand === "function");
// enums
assert(typeof AgreementStatus === "object");
assert(typeof PaymentRequestApprovalStrategy === "object");
assert(typeof SortOrder === "object");
// errors
assert(MarketplaceAgreementServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetAgreementTerms === "function");
assert(typeof paginateSearchAgreements === "function");
console.log(`MarketplaceAgreement index test passed.`);

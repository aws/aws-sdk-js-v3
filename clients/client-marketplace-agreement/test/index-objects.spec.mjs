import {
  AccessDeniedException,
  AgreementStatus,
  DescribeAgreementCommand,
  GetAgreementTermsCommand,
  InternalServerException,
  MarketplaceAgreement,
  MarketplaceAgreementClient,
  MarketplaceAgreementServiceException,
  PaymentRequestApprovalStrategy,
  ResourceNotFoundException,
  ResourceType,
  SearchAgreementsCommand,
  SortOrder,
  ThrottlingException,
  ValidationException,
  ValidationExceptionReason,
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
assert(typeof ResourceType === "object");
assert(typeof SortOrder === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof MarketplaceAgreementServiceException);
assert(InternalServerException.prototype instanceof MarketplaceAgreementServiceException);
assert(ResourceNotFoundException.prototype instanceof MarketplaceAgreementServiceException);
assert(ThrottlingException.prototype instanceof MarketplaceAgreementServiceException);
assert(ValidationException.prototype instanceof MarketplaceAgreementServiceException);
assert(MarketplaceAgreementServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetAgreementTerms === "function");
assert(typeof paginateSearchAgreements === "function");
console.log(`MarketplaceAgreement index test passed.`);

import {
  AcceptedTerm$,
  Acceptor$,
  AccessDeniedException,
  AccessDeniedException$,
  AgreementStatus,
  AgreementViewSummary$,
  ByolPricingTerm$,
  ConfigurableUpfrontPricingTerm$,
  ConfigurableUpfrontPricingTermConfiguration$,
  ConfigurableUpfrontRateCardItem$,
  Constraints$,
  DescribeAgreement$,
  DescribeAgreementCommand,
  DescribeAgreementInput$,
  DescribeAgreementOutput$,
  Dimension$,
  DocumentItem$,
  EstimatedCharges$,
  Filter$,
  FixedUpfrontPricingTerm$,
  FreeTrialPricingTerm$,
  GetAgreementTerms$,
  GetAgreementTermsCommand,
  GetAgreementTermsInput$,
  GetAgreementTermsOutput$,
  GrantItem$,
  InternalServerException,
  InternalServerException$,
  LegalTerm$,
  MarketplaceAgreement,
  MarketplaceAgreementClient,
  MarketplaceAgreementServiceException,
  PaymentRequestApprovalStrategy,
  PaymentScheduleTerm$,
  ProposalSummary$,
  Proposer$,
  RateCardItem$,
  RecurringPaymentTerm$,
  RenewalTerm$,
  RenewalTermConfiguration$,
  Resource$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ScheduleItem$,
  SearchAgreements$,
  SearchAgreementsCommand,
  SearchAgreementsInput$,
  SearchAgreementsOutput$,
  Selector$,
  Sort$,
  SortOrder,
  SupportTerm$,
  ThrottlingException,
  ThrottlingException$,
  UsageBasedPricingTerm$,
  UsageBasedRateCardItem$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  ValidityTerm$,
  VariablePaymentTerm$,
  VariablePaymentTermConfiguration$,
  paginateGetAgreementTerms,
  paginateSearchAgreements,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceAgreementClient === "function");
assert(typeof MarketplaceAgreement === "function");
// commands
assert(typeof DescribeAgreementCommand === "function");
assert(typeof DescribeAgreement$ === "object");
assert(typeof GetAgreementTermsCommand === "function");
assert(typeof GetAgreementTerms$ === "object");
assert(typeof SearchAgreementsCommand === "function");
assert(typeof SearchAgreements$ === "object");
// structural schemas
assert(typeof AcceptedTerm$ === "object");
assert(typeof Acceptor$ === "object");
assert(typeof AgreementViewSummary$ === "object");
assert(typeof ByolPricingTerm$ === "object");
assert(typeof ConfigurableUpfrontPricingTerm$ === "object");
assert(typeof ConfigurableUpfrontPricingTermConfiguration$ === "object");
assert(typeof ConfigurableUpfrontRateCardItem$ === "object");
assert(typeof Constraints$ === "object");
assert(typeof DescribeAgreementInput$ === "object");
assert(typeof DescribeAgreementOutput$ === "object");
assert(typeof Dimension$ === "object");
assert(typeof DocumentItem$ === "object");
assert(typeof EstimatedCharges$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FixedUpfrontPricingTerm$ === "object");
assert(typeof FreeTrialPricingTerm$ === "object");
assert(typeof GetAgreementTermsInput$ === "object");
assert(typeof GetAgreementTermsOutput$ === "object");
assert(typeof GrantItem$ === "object");
assert(typeof LegalTerm$ === "object");
assert(typeof PaymentScheduleTerm$ === "object");
assert(typeof ProposalSummary$ === "object");
assert(typeof Proposer$ === "object");
assert(typeof RateCardItem$ === "object");
assert(typeof RecurringPaymentTerm$ === "object");
assert(typeof RenewalTerm$ === "object");
assert(typeof RenewalTermConfiguration$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ScheduleItem$ === "object");
assert(typeof SearchAgreementsInput$ === "object");
assert(typeof SearchAgreementsOutput$ === "object");
assert(typeof Selector$ === "object");
assert(typeof Sort$ === "object");
assert(typeof SupportTerm$ === "object");
assert(typeof UsageBasedPricingTerm$ === "object");
assert(typeof UsageBasedRateCardItem$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof ValidityTerm$ === "object");
assert(typeof VariablePaymentTerm$ === "object");
assert(typeof VariablePaymentTermConfiguration$ === "object");
// enums
assert(typeof AgreementStatus === "object");
assert(typeof PaymentRequestApprovalStrategy === "object");
assert(typeof ResourceType === "object");
assert(typeof SortOrder === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ValidationException$ === "object");
assert(MarketplaceAgreementServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetAgreementTerms === "function");
assert(typeof paginateSearchAgreements === "function");
console.log(`MarketplaceAgreement index test passed.`);

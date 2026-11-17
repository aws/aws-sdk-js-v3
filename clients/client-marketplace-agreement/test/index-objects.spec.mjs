import {
  AcceptAgreementApproval$,
  AcceptAgreementApprovalCommand,
  AcceptAgreementApprovalInput$,
  AcceptAgreementApprovalOutput$,
  AcceptAgreementCancellationRequest$,
  AcceptAgreementCancellationRequestCommand,
  AcceptAgreementCancellationRequestInput$,
  AcceptAgreementCancellationRequestOutput$,
  AcceptAgreementPaymentRequest$,
  AcceptAgreementPaymentRequestCommand,
  AcceptAgreementPaymentRequestInput$,
  AcceptAgreementPaymentRequestOutput$,
  AcceptAgreementRequest$,
  AcceptAgreementRequestCommand,
  AcceptAgreementRequestInput$,
  AcceptAgreementRequestOutput$,
  AcceptedTerm$,
  Acceptor$,
  AcceptorContact$,
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  AgreementApprovalPartyType,
  AgreementApprovalPlan$,
  AgreementApprovalPlanInput$,
  AgreementApprovalProposalSummary$,
  AgreementApprovalProposer$,
  AgreementApprovalPurchaseOrder$,
  AgreementApprovalRequester$,
  AgreementApprovalResource$,
  AgreementApprovalStatus,
  AgreementApprovalSummary$,
  AgreementApprovalType,
  AgreementCancellationRequestReasonCode,
  AgreementCancellationRequestStatus,
  AgreementCancellationRequestSummary$,
  AgreementEntitlement$,
  AgreementEntitlementStatus,
  AgreementEntitlementStatusReasonCode,
  AgreementInvoiceLineItemGroupSummary$,
  AgreementRequestStatus,
  AgreementRequestSummary$,
  AgreementRequestTerm$,
  AgreementStatus,
  AgreementViewSummary$,
  ApprovalRequirement,
  Approver$,
  ApproverOutcome$,
  ApproverOutcomeStatus,
  AwsOrganizationAdminApprover$,
  AwsOrganizationApproverOutcome$,
  BatchCreateBillingAdjustmentError$,
  BatchCreateBillingAdjustmentItem$,
  BatchCreateBillingAdjustmentRequest$,
  BatchCreateBillingAdjustmentRequestCommand,
  BatchCreateBillingAdjustmentRequestEntry$,
  BatchCreateBillingAdjustmentRequestInput$,
  BatchCreateBillingAdjustmentRequestOutput$,
  BillingAdjustmentErrorCode,
  BillingAdjustmentReasonCode,
  BillingAdjustmentStatus,
  BillingAdjustmentSummary$,
  BuyerAgreementApproval$,
  BuyerAgreementApprovalApproverInput$,
  BuyerAgreementApprovalCriteria$,
  BuyerAgreementApprovalGroup$,
  BuyerAgreementApprovalLevel$,
  BuyerAgreementApprovalPlan$,
  BuyerAgreementApprovalPlanGroup$,
  BuyerAgreementApprovalPlanInput$,
  BuyerAgreementApprovalPlanLevel$,
  BuyerAgreementApprovalRejectionInput$,
  ByolPricingTerm$,
  CallerIdentity$,
  CancelAgreement$,
  CancelAgreementCancellationRequest$,
  CancelAgreementCancellationRequestCommand,
  CancelAgreementCancellationRequestInput$,
  CancelAgreementCancellationRequestOutput$,
  CancelAgreementCommand,
  CancelAgreementInput$,
  CancelAgreementOutput$,
  CancelAgreementPaymentRequest$,
  CancelAgreementPaymentRequestCommand,
  CancelAgreementPaymentRequestInput$,
  CancelAgreementPaymentRequestOutput$,
  CancelAgreementRequest$,
  CancelAgreementRequestCommand,
  CancelAgreementRequestInput$,
  CancelAgreementRequestOutput$,
  Charge$,
  ChargeSummary$,
  ConfigurableUpfrontPricingTerm$,
  ConfigurableUpfrontPricingTermConfiguration$,
  ConfigurableUpfrontRateCardItem$,
  ConflictException,
  ConflictException$,
  Constraints$,
  ContactType,
  CreateAgreementRequest$,
  CreateAgreementRequestCommand,
  CreateAgreementRequestInput$,
  CreateAgreementRequestOutput$,
  DescribeAgreement$,
  DescribeAgreementCommand,
  DescribeAgreementInput$,
  DescribeAgreementOutput$,
  Dimension$,
  DocumentItem$,
  EmailApprover$,
  EmailApproverOutcome$,
  EndTimeBehavior$,
  EndTimeBehaviorReasonCode,
  EndTimeBehaviorType,
  Entitlement$,
  EstimatedCharges$,
  EstimatedTaxes$,
  ExpectedCharge$,
  Filter$,
  FixedPercentage$,
  FixedUpfrontPricingTerm$,
  FreeTrialPricingTerm$,
  FreeTrialSummary$,
  GetAgreementApproval$,
  GetAgreementApprovalCommand,
  GetAgreementApprovalInput$,
  GetAgreementApprovalOutput$,
  GetAgreementCancellationRequest$,
  GetAgreementCancellationRequestCommand,
  GetAgreementCancellationRequestInput$,
  GetAgreementCancellationRequestOutput$,
  GetAgreementContacts$,
  GetAgreementContactsCommand,
  GetAgreementContactsInput$,
  GetAgreementContactsOutput$,
  GetAgreementEntitlements$,
  GetAgreementEntitlementsCommand,
  GetAgreementEntitlementsInput$,
  GetAgreementEntitlementsOutput$,
  GetAgreementPaymentRequest$,
  GetAgreementPaymentRequestCommand,
  GetAgreementPaymentRequestInput$,
  GetAgreementPaymentRequestOutput$,
  GetAgreementRequest$,
  GetAgreementRequestApprovalPlans$,
  GetAgreementRequestApprovalPlansCommand,
  GetAgreementRequestApprovalPlansInput$,
  GetAgreementRequestApprovalPlansOutput$,
  GetAgreementRequestCommand,
  GetAgreementRequestInput$,
  GetAgreementRequestOutput$,
  GetAgreementRequestTerms$,
  GetAgreementRequestTermsCommand,
  GetAgreementRequestTermsInput$,
  GetAgreementRequestTermsOutput$,
  GetAgreementTerms$,
  GetAgreementTermsCommand,
  GetAgreementTermsInput$,
  GetAgreementTermsOutput$,
  GetBillingAdjustmentRequest$,
  GetBillingAdjustmentRequestCommand,
  GetBillingAdjustmentRequestInput$,
  GetBillingAdjustmentRequestOutput$,
  GrantItem$,
  Intent,
  InternalServerException,
  InternalServerException$,
  InvoiceBillingPeriod$,
  InvoiceType,
  InvoicingEntity$,
  ItemizedCharge$,
  LegalTerm$,
  LineItemGroupBy,
  ListAgreementApprovals$,
  ListAgreementApprovalsCommand,
  ListAgreementApprovalsInput$,
  ListAgreementApprovalsOutput$,
  ListAgreementCancellationRequests$,
  ListAgreementCancellationRequestsCommand,
  ListAgreementCancellationRequestsInput$,
  ListAgreementCancellationRequestsOutput$,
  ListAgreementCharges$,
  ListAgreementChargesCommand,
  ListAgreementChargesInput$,
  ListAgreementChargesOutput$,
  ListAgreementInvoiceLineItems$,
  ListAgreementInvoiceLineItemsCommand,
  ListAgreementInvoiceLineItemsInput$,
  ListAgreementInvoiceLineItemsOutput$,
  ListAgreementPaymentRequests$,
  ListAgreementPaymentRequestsCommand,
  ListAgreementPaymentRequestsInput$,
  ListAgreementPaymentRequestsOutput$,
  ListAgreementRequests$,
  ListAgreementRequestsCommand,
  ListAgreementRequestsInput$,
  ListAgreementRequestsOutput$,
  ListBillingAdjustmentRequests$,
  ListBillingAdjustmentRequestsCommand,
  ListBillingAdjustmentRequestsInput$,
  ListBillingAdjustmentRequestsOutput$,
  MarketplaceAgreement,
  MarketplaceAgreementClient,
  MarketplaceAgreementServiceException,
  NetPaymentTerm$,
  OfferVisibilityScope,
  paginateGetAgreementEntitlements,
  paginateGetAgreementRequestApprovalPlans,
  paginateGetAgreementRequestTerms,
  paginateGetAgreementTerms,
  paginateListAgreementApprovals,
  paginateListAgreementCancellationRequests,
  paginateListAgreementCharges,
  paginateListAgreementInvoiceLineItems,
  paginateListAgreementPaymentRequests,
  paginateListAgreementRequests,
  paginateListBillingAdjustmentRequests,
  paginateSearchAgreements,
  PaymentRequestApprovalStrategy,
  PaymentRequestStatus,
  PaymentRequestSummary$,
  PaymentScheduleEntry$,
  PaymentScheduleTerm$,
  PaymentScheduleTermTemplate$,
  PercentageRange$,
  PriceIncrease$,
  PricingCurrencyAmount$,
  ProcurementToolApprover$,
  ProcurementToolApproverOutcome$,
  ProposalSummary$,
  Proposer$,
  PurchaseOrder$,
  RateCardItem$,
  RecurringPaymentTerm$,
  RejectAgreementApproval$,
  RejectAgreementApprovalCommand,
  RejectAgreementApprovalInput$,
  RejectAgreementApprovalOutput$,
  RejectAgreementCancellationRequest$,
  RejectAgreementCancellationRequestCommand,
  RejectAgreementCancellationRequestInput$,
  RejectAgreementCancellationRequestOutput$,
  RejectAgreementPaymentRequest$,
  RejectAgreementPaymentRequestCommand,
  RejectAgreementPaymentRequestInput$,
  RejectAgreementPaymentRequestOutput$,
  RenewalSummary$,
  RenewalTerm$,
  RenewalTermConfiguration$,
  RequestedTerm$,
  RequestedTermConfiguration$,
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
  SendAgreementCancellationRequest$,
  SendAgreementCancellationRequestCommand,
  SendAgreementCancellationRequestInput$,
  SendAgreementCancellationRequestOutput$,
  SendAgreementPaymentRequest$,
  SendAgreementPaymentRequestCommand,
  SendAgreementPaymentRequestInput$,
  SendAgreementPaymentRequestOutput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Sort$,
  SortOrder,
  StartAgreementApprovals$,
  StartAgreementApprovalsCommand,
  StartAgreementApprovalsInput$,
  StartAgreementApprovalsOutput$,
  SupportTerm$,
  TaxBreakdownItem$,
  TaxConfiguration$,
  TaxEstimation,
  TermTemplate$,
  ThrottlingException,
  ThrottlingException$,
  Timing,
  UpdatePurchaseOrders$,
  UpdatePurchaseOrdersCommand,
  UpdatePurchaseOrdersInput$,
  UpdatePurchaseOrdersOutput$,
  UsageBasedPricingTerm$,
  UsageBasedRateCardItem$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  ValidityTerm$,
  VariablePaymentTerm$,
  VariablePaymentTermConfiguration$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceAgreementClient === "function");
assert(typeof MarketplaceAgreement === "function");
// commands
assert(typeof AcceptAgreementApprovalCommand === "function");
assert(typeof AcceptAgreementApproval$ === "object");
assert(typeof AcceptAgreementCancellationRequestCommand === "function");
assert(typeof AcceptAgreementCancellationRequest$ === "object");
assert(typeof AcceptAgreementPaymentRequestCommand === "function");
assert(typeof AcceptAgreementPaymentRequest$ === "object");
assert(typeof AcceptAgreementRequestCommand === "function");
assert(typeof AcceptAgreementRequest$ === "object");
assert(typeof BatchCreateBillingAdjustmentRequestCommand === "function");
assert(typeof BatchCreateBillingAdjustmentRequest$ === "object");
assert(typeof CancelAgreementCommand === "function");
assert(typeof CancelAgreement$ === "object");
assert(typeof CancelAgreementCancellationRequestCommand === "function");
assert(typeof CancelAgreementCancellationRequest$ === "object");
assert(typeof CancelAgreementPaymentRequestCommand === "function");
assert(typeof CancelAgreementPaymentRequest$ === "object");
assert(typeof CancelAgreementRequestCommand === "function");
assert(typeof CancelAgreementRequest$ === "object");
assert(typeof CreateAgreementRequestCommand === "function");
assert(typeof CreateAgreementRequest$ === "object");
assert(typeof DescribeAgreementCommand === "function");
assert(typeof DescribeAgreement$ === "object");
assert(typeof GetAgreementApprovalCommand === "function");
assert(typeof GetAgreementApproval$ === "object");
assert(typeof GetAgreementCancellationRequestCommand === "function");
assert(typeof GetAgreementCancellationRequest$ === "object");
assert(typeof GetAgreementContactsCommand === "function");
assert(typeof GetAgreementContacts$ === "object");
assert(typeof GetAgreementEntitlementsCommand === "function");
assert(typeof GetAgreementEntitlements$ === "object");
assert(typeof GetAgreementPaymentRequestCommand === "function");
assert(typeof GetAgreementPaymentRequest$ === "object");
assert(typeof GetAgreementRequestCommand === "function");
assert(typeof GetAgreementRequest$ === "object");
assert(typeof GetAgreementRequestApprovalPlansCommand === "function");
assert(typeof GetAgreementRequestApprovalPlans$ === "object");
assert(typeof GetAgreementRequestTermsCommand === "function");
assert(typeof GetAgreementRequestTerms$ === "object");
assert(typeof GetAgreementTermsCommand === "function");
assert(typeof GetAgreementTerms$ === "object");
assert(typeof GetBillingAdjustmentRequestCommand === "function");
assert(typeof GetBillingAdjustmentRequest$ === "object");
assert(typeof ListAgreementApprovalsCommand === "function");
assert(typeof ListAgreementApprovals$ === "object");
assert(typeof ListAgreementCancellationRequestsCommand === "function");
assert(typeof ListAgreementCancellationRequests$ === "object");
assert(typeof ListAgreementChargesCommand === "function");
assert(typeof ListAgreementCharges$ === "object");
assert(typeof ListAgreementInvoiceLineItemsCommand === "function");
assert(typeof ListAgreementInvoiceLineItems$ === "object");
assert(typeof ListAgreementPaymentRequestsCommand === "function");
assert(typeof ListAgreementPaymentRequests$ === "object");
assert(typeof ListAgreementRequestsCommand === "function");
assert(typeof ListAgreementRequests$ === "object");
assert(typeof ListBillingAdjustmentRequestsCommand === "function");
assert(typeof ListBillingAdjustmentRequests$ === "object");
assert(typeof RejectAgreementApprovalCommand === "function");
assert(typeof RejectAgreementApproval$ === "object");
assert(typeof RejectAgreementCancellationRequestCommand === "function");
assert(typeof RejectAgreementCancellationRequest$ === "object");
assert(typeof RejectAgreementPaymentRequestCommand === "function");
assert(typeof RejectAgreementPaymentRequest$ === "object");
assert(typeof SearchAgreementsCommand === "function");
assert(typeof SearchAgreements$ === "object");
assert(typeof SendAgreementCancellationRequestCommand === "function");
assert(typeof SendAgreementCancellationRequest$ === "object");
assert(typeof SendAgreementPaymentRequestCommand === "function");
assert(typeof SendAgreementPaymentRequest$ === "object");
assert(typeof StartAgreementApprovalsCommand === "function");
assert(typeof StartAgreementApprovals$ === "object");
assert(typeof UpdatePurchaseOrdersCommand === "function");
assert(typeof UpdatePurchaseOrders$ === "object");
// structural schemas
assert(typeof AcceptAgreementApprovalInput$ === "object");
assert(typeof AcceptAgreementApprovalOutput$ === "object");
assert(typeof AcceptAgreementCancellationRequestInput$ === "object");
assert(typeof AcceptAgreementCancellationRequestOutput$ === "object");
assert(typeof AcceptAgreementPaymentRequestInput$ === "object");
assert(typeof AcceptAgreementPaymentRequestOutput$ === "object");
assert(typeof AcceptAgreementRequestInput$ === "object");
assert(typeof AcceptAgreementRequestOutput$ === "object");
assert(typeof AcceptedTerm$ === "object");
assert(typeof Acceptor$ === "object");
assert(typeof AcceptorContact$ === "object");
assert(typeof AgreementApprovalPlan$ === "object");
assert(typeof AgreementApprovalPlanInput$ === "object");
assert(typeof AgreementApprovalProposalSummary$ === "object");
assert(typeof AgreementApprovalProposer$ === "object");
assert(typeof AgreementApprovalPurchaseOrder$ === "object");
assert(typeof AgreementApprovalRequester$ === "object");
assert(typeof AgreementApprovalResource$ === "object");
assert(typeof AgreementApprovalSummary$ === "object");
assert(typeof AgreementCancellationRequestSummary$ === "object");
assert(typeof AgreementEntitlement$ === "object");
assert(typeof AgreementInvoiceLineItemGroupSummary$ === "object");
assert(typeof AgreementRequestSummary$ === "object");
assert(typeof AgreementRequestTerm$ === "object");
assert(typeof AgreementViewSummary$ === "object");
assert(typeof Approver$ === "object");
assert(typeof ApproverOutcome$ === "object");
assert(typeof AwsOrganizationAdminApprover$ === "object");
assert(typeof AwsOrganizationApproverOutcome$ === "object");
assert(typeof BatchCreateBillingAdjustmentError$ === "object");
assert(typeof BatchCreateBillingAdjustmentItem$ === "object");
assert(typeof BatchCreateBillingAdjustmentRequestEntry$ === "object");
assert(typeof BatchCreateBillingAdjustmentRequestInput$ === "object");
assert(typeof BatchCreateBillingAdjustmentRequestOutput$ === "object");
assert(typeof BillingAdjustmentSummary$ === "object");
assert(typeof BuyerAgreementApproval$ === "object");
assert(typeof BuyerAgreementApprovalApproverInput$ === "object");
assert(typeof BuyerAgreementApprovalCriteria$ === "object");
assert(typeof BuyerAgreementApprovalGroup$ === "object");
assert(typeof BuyerAgreementApprovalLevel$ === "object");
assert(typeof BuyerAgreementApprovalPlan$ === "object");
assert(typeof BuyerAgreementApprovalPlanGroup$ === "object");
assert(typeof BuyerAgreementApprovalPlanInput$ === "object");
assert(typeof BuyerAgreementApprovalPlanLevel$ === "object");
assert(typeof BuyerAgreementApprovalRejectionInput$ === "object");
assert(typeof ByolPricingTerm$ === "object");
assert(typeof CallerIdentity$ === "object");
assert(typeof CancelAgreementCancellationRequestInput$ === "object");
assert(typeof CancelAgreementCancellationRequestOutput$ === "object");
assert(typeof CancelAgreementInput$ === "object");
assert(typeof CancelAgreementOutput$ === "object");
assert(typeof CancelAgreementPaymentRequestInput$ === "object");
assert(typeof CancelAgreementPaymentRequestOutput$ === "object");
assert(typeof CancelAgreementRequestInput$ === "object");
assert(typeof CancelAgreementRequestOutput$ === "object");
assert(typeof Charge$ === "object");
assert(typeof ChargeSummary$ === "object");
assert(typeof ConfigurableUpfrontPricingTerm$ === "object");
assert(typeof ConfigurableUpfrontPricingTermConfiguration$ === "object");
assert(typeof ConfigurableUpfrontRateCardItem$ === "object");
assert(typeof Constraints$ === "object");
assert(typeof CreateAgreementRequestInput$ === "object");
assert(typeof CreateAgreementRequestOutput$ === "object");
assert(typeof DescribeAgreementInput$ === "object");
assert(typeof DescribeAgreementOutput$ === "object");
assert(typeof Dimension$ === "object");
assert(typeof DocumentItem$ === "object");
assert(typeof EmailApprover$ === "object");
assert(typeof EmailApproverOutcome$ === "object");
assert(typeof EndTimeBehavior$ === "object");
assert(typeof Entitlement$ === "object");
assert(typeof EstimatedCharges$ === "object");
assert(typeof EstimatedTaxes$ === "object");
assert(typeof ExpectedCharge$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FixedPercentage$ === "object");
assert(typeof FixedUpfrontPricingTerm$ === "object");
assert(typeof FreeTrialPricingTerm$ === "object");
assert(typeof FreeTrialSummary$ === "object");
assert(typeof GetAgreementApprovalInput$ === "object");
assert(typeof GetAgreementApprovalOutput$ === "object");
assert(typeof GetAgreementCancellationRequestInput$ === "object");
assert(typeof GetAgreementCancellationRequestOutput$ === "object");
assert(typeof GetAgreementContactsInput$ === "object");
assert(typeof GetAgreementContactsOutput$ === "object");
assert(typeof GetAgreementEntitlementsInput$ === "object");
assert(typeof GetAgreementEntitlementsOutput$ === "object");
assert(typeof GetAgreementPaymentRequestInput$ === "object");
assert(typeof GetAgreementPaymentRequestOutput$ === "object");
assert(typeof GetAgreementRequestApprovalPlansInput$ === "object");
assert(typeof GetAgreementRequestApprovalPlansOutput$ === "object");
assert(typeof GetAgreementRequestInput$ === "object");
assert(typeof GetAgreementRequestOutput$ === "object");
assert(typeof GetAgreementRequestTermsInput$ === "object");
assert(typeof GetAgreementRequestTermsOutput$ === "object");
assert(typeof GetAgreementTermsInput$ === "object");
assert(typeof GetAgreementTermsOutput$ === "object");
assert(typeof GetBillingAdjustmentRequestInput$ === "object");
assert(typeof GetBillingAdjustmentRequestOutput$ === "object");
assert(typeof GrantItem$ === "object");
assert(typeof InvoiceBillingPeriod$ === "object");
assert(typeof InvoicingEntity$ === "object");
assert(typeof ItemizedCharge$ === "object");
assert(typeof LegalTerm$ === "object");
assert(typeof ListAgreementApprovalsInput$ === "object");
assert(typeof ListAgreementApprovalsOutput$ === "object");
assert(typeof ListAgreementCancellationRequestsInput$ === "object");
assert(typeof ListAgreementCancellationRequestsOutput$ === "object");
assert(typeof ListAgreementChargesInput$ === "object");
assert(typeof ListAgreementChargesOutput$ === "object");
assert(typeof ListAgreementInvoiceLineItemsInput$ === "object");
assert(typeof ListAgreementInvoiceLineItemsOutput$ === "object");
assert(typeof ListAgreementPaymentRequestsInput$ === "object");
assert(typeof ListAgreementPaymentRequestsOutput$ === "object");
assert(typeof ListAgreementRequestsInput$ === "object");
assert(typeof ListAgreementRequestsOutput$ === "object");
assert(typeof ListBillingAdjustmentRequestsInput$ === "object");
assert(typeof ListBillingAdjustmentRequestsOutput$ === "object");
assert(typeof NetPaymentTerm$ === "object");
assert(typeof PaymentRequestSummary$ === "object");
assert(typeof PaymentScheduleEntry$ === "object");
assert(typeof PaymentScheduleTerm$ === "object");
assert(typeof PaymentScheduleTermTemplate$ === "object");
assert(typeof PercentageRange$ === "object");
assert(typeof PriceIncrease$ === "object");
assert(typeof PricingCurrencyAmount$ === "object");
assert(typeof ProcurementToolApprover$ === "object");
assert(typeof ProcurementToolApproverOutcome$ === "object");
assert(typeof ProposalSummary$ === "object");
assert(typeof Proposer$ === "object");
assert(typeof PurchaseOrder$ === "object");
assert(typeof RateCardItem$ === "object");
assert(typeof RecurringPaymentTerm$ === "object");
assert(typeof RejectAgreementApprovalInput$ === "object");
assert(typeof RejectAgreementApprovalOutput$ === "object");
assert(typeof RejectAgreementCancellationRequestInput$ === "object");
assert(typeof RejectAgreementCancellationRequestOutput$ === "object");
assert(typeof RejectAgreementPaymentRequestInput$ === "object");
assert(typeof RejectAgreementPaymentRequestOutput$ === "object");
assert(typeof RenewalSummary$ === "object");
assert(typeof RenewalTerm$ === "object");
assert(typeof RenewalTermConfiguration$ === "object");
assert(typeof RequestedTerm$ === "object");
assert(typeof RequestedTermConfiguration$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ScheduleItem$ === "object");
assert(typeof SearchAgreementsInput$ === "object");
assert(typeof SearchAgreementsOutput$ === "object");
assert(typeof Selector$ === "object");
assert(typeof SendAgreementCancellationRequestInput$ === "object");
assert(typeof SendAgreementCancellationRequestOutput$ === "object");
assert(typeof SendAgreementPaymentRequestInput$ === "object");
assert(typeof SendAgreementPaymentRequestOutput$ === "object");
assert(typeof Sort$ === "object");
assert(typeof StartAgreementApprovalsInput$ === "object");
assert(typeof StartAgreementApprovalsOutput$ === "object");
assert(typeof SupportTerm$ === "object");
assert(typeof TaxBreakdownItem$ === "object");
assert(typeof TaxConfiguration$ === "object");
assert(typeof TermTemplate$ === "object");
assert(typeof UpdatePurchaseOrdersInput$ === "object");
assert(typeof UpdatePurchaseOrdersOutput$ === "object");
assert(typeof UsageBasedPricingTerm$ === "object");
assert(typeof UsageBasedRateCardItem$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof ValidityTerm$ === "object");
assert(typeof VariablePaymentTerm$ === "object");
assert(typeof VariablePaymentTermConfiguration$ === "object");
// enums
assert(typeof AccessDeniedExceptionReason === "object");
assert(typeof AgreementApprovalPartyType === "object");
assert(typeof AgreementApprovalStatus === "object");
assert(typeof AgreementApprovalType === "object");
assert(typeof AgreementCancellationRequestReasonCode === "object");
assert(typeof AgreementCancellationRequestStatus === "object");
assert(typeof AgreementEntitlementStatus === "object");
assert(typeof AgreementEntitlementStatusReasonCode === "object");
assert(typeof AgreementRequestStatus === "object");
assert(typeof AgreementStatus === "object");
assert(typeof ApprovalRequirement === "object");
assert(typeof ApproverOutcomeStatus === "object");
assert(typeof BillingAdjustmentErrorCode === "object");
assert(typeof BillingAdjustmentReasonCode === "object");
assert(typeof BillingAdjustmentStatus === "object");
assert(typeof ContactType === "object");
assert(typeof EndTimeBehaviorReasonCode === "object");
assert(typeof EndTimeBehaviorType === "object");
assert(typeof Intent === "object");
assert(typeof InvoiceType === "object");
assert(typeof LineItemGroupBy === "object");
assert(typeof OfferVisibilityScope === "object");
assert(typeof PaymentRequestApprovalStrategy === "object");
assert(typeof PaymentRequestStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof SortOrder === "object");
assert(typeof TaxEstimation === "object");
assert(typeof Timing === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MarketplaceAgreementServiceException);
assert(typeof ValidationException$ === "object");
assert(MarketplaceAgreementServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetAgreementEntitlements === "function");
assert(typeof paginateGetAgreementRequestApprovalPlans === "function");
assert(typeof paginateGetAgreementRequestTerms === "function");
assert(typeof paginateGetAgreementTerms === "function");
assert(typeof paginateListAgreementApprovals === "function");
assert(typeof paginateListAgreementCancellationRequests === "function");
assert(typeof paginateListAgreementCharges === "function");
assert(typeof paginateListAgreementInvoiceLineItems === "function");
assert(typeof paginateListAgreementPaymentRequests === "function");
assert(typeof paginateListAgreementRequests === "function");
assert(typeof paginateListBillingAdjustmentRequests === "function");
assert(typeof paginateSearchAgreements === "function");
console.log(`MarketplaceAgreement index test passed.`);

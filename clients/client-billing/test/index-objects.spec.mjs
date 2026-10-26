import {
  AccessDeniedException,
  AccessDeniedException$,
  ActiveTimeRange$,
  AdditionalCharge$,
  AdditionalRecipient$,
  Amount$,
  ApplicationType,
  ApproverDetails$,
  AssociateContract$,
  AssociateContractCommand,
  AssociateContractRequest$,
  AssociateContractResponse$,
  AssociateSourceViews$,
  AssociateSourceViewsCommand,
  AssociateSourceViewsRequest$,
  AssociateSourceViewsResponse$,
  AssociationStatus,
  AttestationDetails$,
  AttestationQuantity$,
  AttestationValue$,
  Billing,
  BillingClient,
  BillingDomain,
  BillingFeature,
  BillingFeatureFilter$,
  BillingFeatureFilterName,
  BillingPeriod$,
  BillingPreferenceForKey$,
  BillingPreferenceSummary$,
  BillingServiceException,
  BillingViewElement$,
  BillingViewHealthStatus$,
  BillingViewHealthStatusException,
  BillingViewHealthStatusException$,
  BillingViewListElement$,
  BillingViewSegmentsListElement$,
  BillingViewSegmentTimeRange$,
  BillingViewStatus,
  BillingViewStatusReason,
  BillingViewType,
  BusinessSupportAccountCharge$,
  BusinessSupportDiscount$,
  BusinessSupportServiceSpend$,
  BusinessSupportSubscriptionContract$,
  BusinessSupportTierCharge$,
  CancelContractualInvestmentAttestation$,
  CancelContractualInvestmentAttestationCommand,
  CancelContractualInvestmentAttestationRequest$,
  CancelContractualInvestmentAttestationResponse$,
  ChargeAccount$,
  ConflictException,
  ConflictException$,
  ContractAccount$,
  ContractDetails$,
  ContractRestriction,
  ContractSummary$,
  ContractType,
  CostCategoryValues$,
  CreateBillingView$,
  CreateBillingViewCommand,
  CreateBillingViewRequest$,
  CreateBillingViewResponse$,
  CreateContractualInvestmentAttestation$,
  CreateContractualInvestmentAttestationCommand,
  CreateContractualInvestmentAttestationRequest$,
  CreateContractualInvestmentAttestationResponse$,
  CreditAllocationHistoryEntry$,
  CreditData$,
  CreditSharingType,
  CreditStatus,
  DeleteBillingView$,
  DeleteBillingViewCommand,
  DeleteBillingViewRequest$,
  DeleteBillingViewResponse$,
  Dimension,
  DimensionValues$,
  DisassociateContract$,
  DisassociateContractCommand,
  DisassociateContractRequest$,
  DisassociateContractResponse$,
  DisassociateSourceViews$,
  DisassociateSourceViewsCommand,
  DisassociateSourceViewsRequest$,
  DisassociateSourceViewsResponse$,
  EnterpriseSupportTimePeriod$,
  Expression$,
  GetBillingPreferences$,
  GetBillingPreferencesCommand,
  GetBillingPreferencesRequest$,
  GetBillingPreferencesResponse$,
  GetBillingView$,
  GetBillingViewCommand,
  GetBillingViewRequest$,
  GetBillingViewResponse$,
  GetContractInformation$,
  GetContractInformationCommand,
  GetContractInformationRequest$,
  GetContractInformationResponse$,
  GetCreditAllocationHistory$,
  GetCreditAllocationHistoryCommand,
  GetCreditAllocationHistoryRequest$,
  GetCreditAllocationHistoryResponse$,
  GetCredits$,
  GetCreditsCommand,
  GetCreditsRequest$,
  GetCreditsResponse$,
  GetEnterpriseSupportChargeSummary$,
  GetEnterpriseSupportChargeSummaryCommand,
  GetEnterpriseSupportChargeSummaryRequest$,
  GetEnterpriseSupportChargeSummaryResponse$,
  GetEnterpriseSupportContractDetails$,
  GetEnterpriseSupportContractDetailsCommand,
  GetEnterpriseSupportContractDetailsRequest$,
  GetEnterpriseSupportContractDetailsResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  InternalServerException,
  InternalServerException$,
  Interval$,
  Investment$,
  InvestmentAttestation$,
  InvestmentAttestationStatus,
  InvestmentDistribution$,
  InvestmentMultiplier$,
  InvestmentRestriction$,
  InvestmentSummary$,
  InvestmentType,
  LegalEntity$,
  LinkedAccountCharge$,
  ListBillingViews$,
  ListBillingViewsCommand,
  ListBillingViewSegments$,
  ListBillingViewSegmentsCommand,
  ListBillingViewSegmentsRequest$,
  ListBillingViewSegmentsResponse$,
  ListBillingViewsRequest$,
  ListBillingViewsResponse$,
  ListBusinessSupportAccountCharges$,
  ListBusinessSupportAccountChargesCommand,
  ListBusinessSupportAccountChargesRequest$,
  ListBusinessSupportAccountChargesResponse$,
  ListBusinessSupportSubscriptionHistory$,
  ListBusinessSupportSubscriptionHistoryCommand,
  ListBusinessSupportSubscriptionHistoryRequest$,
  ListBusinessSupportSubscriptionHistoryResponse$,
  ListContracts$,
  ListContractsCommand,
  ListContractsRequest$,
  ListContractsResponse$,
  ListContractualInvestmentAttestations$,
  ListContractualInvestmentAttestationsCommand,
  ListContractualInvestmentAttestationsRequest$,
  ListContractualInvestmentAttestationsResponse$,
  ListContractualInvestments$,
  ListContractualInvestmentsCommand,
  ListContractualInvestmentsRequest$,
  ListContractualInvestmentsResponse$,
  ListContractualInvestmentSummaries$,
  ListContractualInvestmentSummariesCommand,
  ListContractualInvestmentSummariesRequest$,
  ListContractualInvestmentSummariesResponse$,
  ListEnterpriseSupportLinkedAccountCharges$,
  ListEnterpriseSupportLinkedAccountChargesCommand,
  ListEnterpriseSupportLinkedAccountChargesRequest$,
  ListEnterpriseSupportLinkedAccountChargesResponse$,
  ListSourceViewsForBillingView$,
  ListSourceViewsForBillingViewCommand,
  ListSourceViewsForBillingViewRequest$,
  ListSourceViewsForBillingViewResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MilestoneBasedInvestment$,
  MultiplierType,
  OutcomeBasedInvestment$,
  paginateGetCreditAllocationHistory,
  paginateListBillingViews,
  paginateListBillingViewSegments,
  paginateListBusinessSupportAccountCharges,
  paginateListBusinessSupportSubscriptionHistory,
  paginateListContracts,
  paginateListContractualInvestmentAttestations,
  paginateListContractualInvestments,
  paginateListContractualInvestmentSummaries,
  paginateListEnterpriseSupportLinkedAccountCharges,
  paginateListSourceViewsForBillingView,
  PreferenceValue,
  PricingPlan$,
  PricingPlanTier$,
  PrivatePricingAddendum$,
  RedeemCredits$,
  RedeemCreditsCommand,
  RedeemCreditsRequest$,
  RedeemCreditsResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTag$,
  SearchOption,
  ServiceLevelAccountUsage$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StringSearch$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TagValues$,
  ThrottlingException,
  ThrottlingException$,
  TimeRange$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateBillingPreferences$,
  UpdateBillingPreferencesCommand,
  UpdateBillingPreferencesRequest$,
  UpdateBillingPreferencesResponse$,
  UpdateBillingView$,
  UpdateBillingViewCommand,
  UpdateBillingViewRequest$,
  UpdateBillingViewResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BillingClient === "function");
assert(typeof Billing === "function");
// commands
assert(typeof AssociateContractCommand === "function");
assert(typeof AssociateContract$ === "object");
assert(typeof AssociateSourceViewsCommand === "function");
assert(typeof AssociateSourceViews$ === "object");
assert(typeof CancelContractualInvestmentAttestationCommand === "function");
assert(typeof CancelContractualInvestmentAttestation$ === "object");
assert(typeof CreateBillingViewCommand === "function");
assert(typeof CreateBillingView$ === "object");
assert(typeof CreateContractualInvestmentAttestationCommand === "function");
assert(typeof CreateContractualInvestmentAttestation$ === "object");
assert(typeof DeleteBillingViewCommand === "function");
assert(typeof DeleteBillingView$ === "object");
assert(typeof DisassociateContractCommand === "function");
assert(typeof DisassociateContract$ === "object");
assert(typeof DisassociateSourceViewsCommand === "function");
assert(typeof DisassociateSourceViews$ === "object");
assert(typeof GetBillingPreferencesCommand === "function");
assert(typeof GetBillingPreferences$ === "object");
assert(typeof GetBillingViewCommand === "function");
assert(typeof GetBillingView$ === "object");
assert(typeof GetContractInformationCommand === "function");
assert(typeof GetContractInformation$ === "object");
assert(typeof GetCreditAllocationHistoryCommand === "function");
assert(typeof GetCreditAllocationHistory$ === "object");
assert(typeof GetCreditsCommand === "function");
assert(typeof GetCredits$ === "object");
assert(typeof GetEnterpriseSupportChargeSummaryCommand === "function");
assert(typeof GetEnterpriseSupportChargeSummary$ === "object");
assert(typeof GetEnterpriseSupportContractDetailsCommand === "function");
assert(typeof GetEnterpriseSupportContractDetails$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListBillingViewsCommand === "function");
assert(typeof ListBillingViews$ === "object");
assert(typeof ListBillingViewSegmentsCommand === "function");
assert(typeof ListBillingViewSegments$ === "object");
assert(typeof ListBusinessSupportAccountChargesCommand === "function");
assert(typeof ListBusinessSupportAccountCharges$ === "object");
assert(typeof ListBusinessSupportSubscriptionHistoryCommand === "function");
assert(typeof ListBusinessSupportSubscriptionHistory$ === "object");
assert(typeof ListContractsCommand === "function");
assert(typeof ListContracts$ === "object");
assert(typeof ListContractualInvestmentAttestationsCommand === "function");
assert(typeof ListContractualInvestmentAttestations$ === "object");
assert(typeof ListContractualInvestmentsCommand === "function");
assert(typeof ListContractualInvestments$ === "object");
assert(typeof ListContractualInvestmentSummariesCommand === "function");
assert(typeof ListContractualInvestmentSummaries$ === "object");
assert(typeof ListEnterpriseSupportLinkedAccountChargesCommand === "function");
assert(typeof ListEnterpriseSupportLinkedAccountCharges$ === "object");
assert(typeof ListSourceViewsForBillingViewCommand === "function");
assert(typeof ListSourceViewsForBillingView$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RedeemCreditsCommand === "function");
assert(typeof RedeemCredits$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBillingPreferencesCommand === "function");
assert(typeof UpdateBillingPreferences$ === "object");
assert(typeof UpdateBillingViewCommand === "function");
assert(typeof UpdateBillingView$ === "object");
// structural schemas
assert(typeof ActiveTimeRange$ === "object");
assert(typeof AdditionalCharge$ === "object");
assert(typeof AdditionalRecipient$ === "object");
assert(typeof Amount$ === "object");
assert(typeof ApproverDetails$ === "object");
assert(typeof AssociateContractRequest$ === "object");
assert(typeof AssociateContractResponse$ === "object");
assert(typeof AssociateSourceViewsRequest$ === "object");
assert(typeof AssociateSourceViewsResponse$ === "object");
assert(typeof AttestationDetails$ === "object");
assert(typeof AttestationQuantity$ === "object");
assert(typeof AttestationValue$ === "object");
assert(typeof BillingFeatureFilter$ === "object");
assert(typeof BillingPeriod$ === "object");
assert(typeof BillingPreferenceForKey$ === "object");
assert(typeof BillingPreferenceSummary$ === "object");
assert(typeof BillingViewElement$ === "object");
assert(typeof BillingViewHealthStatus$ === "object");
assert(typeof BillingViewListElement$ === "object");
assert(typeof BillingViewSegmentsListElement$ === "object");
assert(typeof BillingViewSegmentTimeRange$ === "object");
assert(typeof BusinessSupportAccountCharge$ === "object");
assert(typeof BusinessSupportDiscount$ === "object");
assert(typeof BusinessSupportServiceSpend$ === "object");
assert(typeof BusinessSupportSubscriptionContract$ === "object");
assert(typeof BusinessSupportTierCharge$ === "object");
assert(typeof CancelContractualInvestmentAttestationRequest$ === "object");
assert(typeof CancelContractualInvestmentAttestationResponse$ === "object");
assert(typeof ChargeAccount$ === "object");
assert(typeof ContractAccount$ === "object");
assert(typeof ContractDetails$ === "object");
assert(typeof ContractSummary$ === "object");
assert(typeof CostCategoryValues$ === "object");
assert(typeof CreateBillingViewRequest$ === "object");
assert(typeof CreateBillingViewResponse$ === "object");
assert(typeof CreateContractualInvestmentAttestationRequest$ === "object");
assert(typeof CreateContractualInvestmentAttestationResponse$ === "object");
assert(typeof CreditAllocationHistoryEntry$ === "object");
assert(typeof CreditData$ === "object");
assert(typeof DeleteBillingViewRequest$ === "object");
assert(typeof DeleteBillingViewResponse$ === "object");
assert(typeof DimensionValues$ === "object");
assert(typeof DisassociateContractRequest$ === "object");
assert(typeof DisassociateContractResponse$ === "object");
assert(typeof DisassociateSourceViewsRequest$ === "object");
assert(typeof DisassociateSourceViewsResponse$ === "object");
assert(typeof EnterpriseSupportTimePeriod$ === "object");
assert(typeof Expression$ === "object");
assert(typeof GetBillingPreferencesRequest$ === "object");
assert(typeof GetBillingPreferencesResponse$ === "object");
assert(typeof GetBillingViewRequest$ === "object");
assert(typeof GetBillingViewResponse$ === "object");
assert(typeof GetContractInformationRequest$ === "object");
assert(typeof GetContractInformationResponse$ === "object");
assert(typeof GetCreditAllocationHistoryRequest$ === "object");
assert(typeof GetCreditAllocationHistoryResponse$ === "object");
assert(typeof GetCreditsRequest$ === "object");
assert(typeof GetCreditsResponse$ === "object");
assert(typeof GetEnterpriseSupportChargeSummaryRequest$ === "object");
assert(typeof GetEnterpriseSupportChargeSummaryResponse$ === "object");
assert(typeof GetEnterpriseSupportContractDetailsRequest$ === "object");
assert(typeof GetEnterpriseSupportContractDetailsResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof Interval$ === "object");
assert(typeof Investment$ === "object");
assert(typeof InvestmentAttestation$ === "object");
assert(typeof InvestmentDistribution$ === "object");
assert(typeof InvestmentMultiplier$ === "object");
assert(typeof InvestmentRestriction$ === "object");
assert(typeof InvestmentSummary$ === "object");
assert(typeof LegalEntity$ === "object");
assert(typeof LinkedAccountCharge$ === "object");
assert(typeof ListBillingViewSegmentsRequest$ === "object");
assert(typeof ListBillingViewSegmentsResponse$ === "object");
assert(typeof ListBillingViewsRequest$ === "object");
assert(typeof ListBillingViewsResponse$ === "object");
assert(typeof ListBusinessSupportAccountChargesRequest$ === "object");
assert(typeof ListBusinessSupportAccountChargesResponse$ === "object");
assert(typeof ListBusinessSupportSubscriptionHistoryRequest$ === "object");
assert(typeof ListBusinessSupportSubscriptionHistoryResponse$ === "object");
assert(typeof ListContractsRequest$ === "object");
assert(typeof ListContractsResponse$ === "object");
assert(typeof ListContractualInvestmentAttestationsRequest$ === "object");
assert(typeof ListContractualInvestmentAttestationsResponse$ === "object");
assert(typeof ListContractualInvestmentsRequest$ === "object");
assert(typeof ListContractualInvestmentsResponse$ === "object");
assert(typeof ListContractualInvestmentSummariesRequest$ === "object");
assert(typeof ListContractualInvestmentSummariesResponse$ === "object");
assert(typeof ListEnterpriseSupportLinkedAccountChargesRequest$ === "object");
assert(typeof ListEnterpriseSupportLinkedAccountChargesResponse$ === "object");
assert(typeof ListSourceViewsForBillingViewRequest$ === "object");
assert(typeof ListSourceViewsForBillingViewResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MilestoneBasedInvestment$ === "object");
assert(typeof OutcomeBasedInvestment$ === "object");
assert(typeof PricingPlan$ === "object");
assert(typeof PricingPlanTier$ === "object");
assert(typeof PrivatePricingAddendum$ === "object");
assert(typeof RedeemCreditsRequest$ === "object");
assert(typeof RedeemCreditsResponse$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof ServiceLevelAccountUsage$ === "object");
assert(typeof StringSearch$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TagValues$ === "object");
assert(typeof TimeRange$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateBillingPreferencesRequest$ === "object");
assert(typeof UpdateBillingPreferencesResponse$ === "object");
assert(typeof UpdateBillingViewRequest$ === "object");
assert(typeof UpdateBillingViewResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof ApplicationType === "object");
assert(typeof AssociationStatus === "object");
assert(typeof BillingDomain === "object");
assert(typeof BillingFeature === "object");
assert(typeof BillingFeatureFilterName === "object");
assert(typeof BillingViewStatus === "object");
assert(typeof BillingViewStatusReason === "object");
assert(typeof BillingViewType === "object");
assert(typeof ContractRestriction === "object");
assert(typeof ContractType === "object");
assert(typeof CreditSharingType === "object");
assert(typeof CreditStatus === "object");
assert(typeof Dimension === "object");
assert(typeof InvestmentAttestationStatus === "object");
assert(typeof InvestmentType === "object");
assert(typeof MultiplierType === "object");
assert(typeof PreferenceValue === "object");
assert(typeof SearchOption === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof BillingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BillingViewHealthStatusException.prototype instanceof BillingServiceException);
assert(typeof BillingViewHealthStatusException$ === "object");
assert(ConflictException.prototype instanceof BillingServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof BillingServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BillingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BillingServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof BillingServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BillingServiceException);
assert(typeof ValidationException$ === "object");
assert(BillingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetCreditAllocationHistory === "function");
assert(typeof paginateListBillingViewSegments === "function");
assert(typeof paginateListBillingViews === "function");
assert(typeof paginateListBusinessSupportAccountCharges === "function");
assert(typeof paginateListBusinessSupportSubscriptionHistory === "function");
assert(typeof paginateListContracts === "function");
assert(typeof paginateListContractualInvestmentAttestations === "function");
assert(typeof paginateListContractualInvestmentSummaries === "function");
assert(typeof paginateListContractualInvestments === "function");
assert(typeof paginateListEnterpriseSupportLinkedAccountCharges === "function");
assert(typeof paginateListSourceViewsForBillingView === "function");
console.log(`Billing index test passed.`);

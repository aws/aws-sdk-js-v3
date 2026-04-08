import {
  AccessDeniedException,
  AccessDeniedException$,
  AmazonMachineImageFulfillmentOption$,
  AmazonMachineImageOperatingSystem$,
  AmazonMachineImageRecommendation$,
  ApiFulfillmentOption$,
  AwsSupportedService$,
  BillingPeriodType,
  ByolPricingTerm$,
  Category$,
  CloudFormationFulfillmentOption$,
  ConfigurableUpfrontPricingTerm$,
  ConfigurableUpfrontRateCardItem$,
  Constraints$,
  ContainerFulfillmentOption$,
  ContainerOperatingSystem$,
  DataArtifact$,
  DataExchangeFulfillmentOption$,
  DeployedOnAwsStatus,
  DimensionLabel$,
  DimensionLabelType,
  DocumentItem$,
  Ec2ImageBuilderComponentFulfillmentOption$,
  EksAddOnFulfillmentOption$,
  EksAddOnOperatingSystem$,
  FixedUpfrontPricingTerm$,
  FreeTrialPricingTerm$,
  FulfillmentOption$,
  FulfillmentOptionSummary$,
  FulfillmentOptionType,
  GetListing$,
  GetListingCommand,
  GetListingInput$,
  GetListingOutput$,
  GetOffer$,
  GetOfferCommand,
  GetOfferInput$,
  GetOfferOutput$,
  GetOfferSet$,
  GetOfferSetCommand,
  GetOfferSetInput$,
  GetOfferSetOutput$,
  GetOfferTerms$,
  GetOfferTermsCommand,
  GetOfferTermsInput$,
  GetOfferTermsOutput$,
  GetProduct$,
  GetProductCommand,
  GetProductInput$,
  GetProductOutput$,
  GrantItem$,
  HelmFulfillmentOption$,
  HelmOperatingSystem$,
  InternalServerException,
  InternalServerException$,
  LegalDocumentType,
  LegalTerm$,
  ListFulfillmentOptions$,
  ListFulfillmentOptionsCommand,
  ListFulfillmentOptionsInput$,
  ListFulfillmentOptionsOutput$,
  ListingAssociatedEntity$,
  ListingBadge$,
  ListingBadgeType,
  ListingFacet$,
  ListingSummary$,
  ListingSummaryAssociatedEntity$,
  ListPurchaseOptions$,
  ListPurchaseOptionsCommand,
  ListPurchaseOptionsInput$,
  ListPurchaseOptionsOutput$,
  MarketplaceDiscovery,
  MarketplaceDiscoveryClient,
  MarketplaceDiscoveryServiceException,
  OfferAssociatedEntity$,
  OfferInformation$,
  OfferSetAssociatedEntity$,
  OfferSetInformation$,
  OfferTerm$,
  paginateGetOfferTerms,
  paginateListFulfillmentOptions,
  paginateListPurchaseOptions,
  paginateSearchFacets,
  paginateSearchListings,
  PaymentScheduleTerm$,
  PricingModel$,
  PricingModelType,
  PricingUnit$,
  PricingUnitType,
  ProductInformation$,
  ProfessionalServicesFulfillmentOption$,
  PromotionalEmbeddedImage$,
  PromotionalEmbeddedVideo$,
  PromotionalMedia$,
  PurchaseOptionAssociatedEntity$,
  PurchaseOptionBadge$,
  PurchaseOptionBadgeType,
  PurchaseOptionFilter$,
  PurchaseOptionFilterType,
  PurchaseOptionSummary$,
  PurchaseOptionType,
  RateCardConstraintType,
  RateCardItem$,
  RecurringPaymentTerm$,
  RenewalTerm$,
  Resource$,
  ResourceContentType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ReviewSourceId,
  ReviewSourceSummary$,
  ReviewSummary$,
  SaasFulfillmentOption$,
  SageMakerAlgorithmFulfillmentOption$,
  SageMakerAlgorithmRecommendation$,
  SageMakerModelFulfillmentOption$,
  SageMakerModelRecommendation$,
  ScheduleItem$,
  SearchFacets$,
  SearchFacetsCommand,
  SearchFacetsInput$,
  SearchFacetsOutput$,
  SearchFacetType,
  SearchFilter$,
  SearchFilterType,
  SearchListings$,
  SearchListingsCommand,
  SearchListingsInput$,
  SearchListingsOutput$,
  SearchListingsSortBy,
  SearchListingsSortOrder,
  Selector$,
  SelectorType,
  SellerEngagement$,
  SellerEngagementContentType,
  SellerEngagementType,
  SellerInformation$,
  SupportTerm$,
  TermType,
  ThrottlingException,
  ThrottlingException$,
  UsageBasedPricingTerm$,
  UsageBasedRateCardItem$,
  UseCase$,
  UseCaseEntry$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
  ValidityTerm$,
  VariablePaymentTerm$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceDiscoveryClient === "function");
assert(typeof MarketplaceDiscovery === "function");
// commands
assert(typeof GetListingCommand === "function");
assert(typeof GetListing$ === "object");
assert(typeof GetOfferCommand === "function");
assert(typeof GetOffer$ === "object");
assert(typeof GetOfferSetCommand === "function");
assert(typeof GetOfferSet$ === "object");
assert(typeof GetOfferTermsCommand === "function");
assert(typeof GetOfferTerms$ === "object");
assert(typeof GetProductCommand === "function");
assert(typeof GetProduct$ === "object");
assert(typeof ListFulfillmentOptionsCommand === "function");
assert(typeof ListFulfillmentOptions$ === "object");
assert(typeof ListPurchaseOptionsCommand === "function");
assert(typeof ListPurchaseOptions$ === "object");
assert(typeof SearchFacetsCommand === "function");
assert(typeof SearchFacets$ === "object");
assert(typeof SearchListingsCommand === "function");
assert(typeof SearchListings$ === "object");
// structural schemas
assert(typeof AmazonMachineImageFulfillmentOption$ === "object");
assert(typeof AmazonMachineImageOperatingSystem$ === "object");
assert(typeof AmazonMachineImageRecommendation$ === "object");
assert(typeof ApiFulfillmentOption$ === "object");
assert(typeof AwsSupportedService$ === "object");
assert(typeof ByolPricingTerm$ === "object");
assert(typeof Category$ === "object");
assert(typeof CloudFormationFulfillmentOption$ === "object");
assert(typeof ConfigurableUpfrontPricingTerm$ === "object");
assert(typeof ConfigurableUpfrontRateCardItem$ === "object");
assert(typeof Constraints$ === "object");
assert(typeof ContainerFulfillmentOption$ === "object");
assert(typeof ContainerOperatingSystem$ === "object");
assert(typeof DataArtifact$ === "object");
assert(typeof DataExchangeFulfillmentOption$ === "object");
assert(typeof DimensionLabel$ === "object");
assert(typeof DocumentItem$ === "object");
assert(typeof Ec2ImageBuilderComponentFulfillmentOption$ === "object");
assert(typeof EksAddOnFulfillmentOption$ === "object");
assert(typeof EksAddOnOperatingSystem$ === "object");
assert(typeof FixedUpfrontPricingTerm$ === "object");
assert(typeof FreeTrialPricingTerm$ === "object");
assert(typeof FulfillmentOption$ === "object");
assert(typeof FulfillmentOptionSummary$ === "object");
assert(typeof GetListingInput$ === "object");
assert(typeof GetListingOutput$ === "object");
assert(typeof GetOfferInput$ === "object");
assert(typeof GetOfferOutput$ === "object");
assert(typeof GetOfferSetInput$ === "object");
assert(typeof GetOfferSetOutput$ === "object");
assert(typeof GetOfferTermsInput$ === "object");
assert(typeof GetOfferTermsOutput$ === "object");
assert(typeof GetProductInput$ === "object");
assert(typeof GetProductOutput$ === "object");
assert(typeof GrantItem$ === "object");
assert(typeof HelmFulfillmentOption$ === "object");
assert(typeof HelmOperatingSystem$ === "object");
assert(typeof LegalTerm$ === "object");
assert(typeof ListFulfillmentOptionsInput$ === "object");
assert(typeof ListFulfillmentOptionsOutput$ === "object");
assert(typeof ListingAssociatedEntity$ === "object");
assert(typeof ListingBadge$ === "object");
assert(typeof ListingFacet$ === "object");
assert(typeof ListingSummary$ === "object");
assert(typeof ListingSummaryAssociatedEntity$ === "object");
assert(typeof ListPurchaseOptionsInput$ === "object");
assert(typeof ListPurchaseOptionsOutput$ === "object");
assert(typeof OfferAssociatedEntity$ === "object");
assert(typeof OfferInformation$ === "object");
assert(typeof OfferSetAssociatedEntity$ === "object");
assert(typeof OfferSetInformation$ === "object");
assert(typeof OfferTerm$ === "object");
assert(typeof PaymentScheduleTerm$ === "object");
assert(typeof PricingModel$ === "object");
assert(typeof PricingUnit$ === "object");
assert(typeof ProductInformation$ === "object");
assert(typeof ProfessionalServicesFulfillmentOption$ === "object");
assert(typeof PromotionalEmbeddedImage$ === "object");
assert(typeof PromotionalEmbeddedVideo$ === "object");
assert(typeof PromotionalMedia$ === "object");
assert(typeof PurchaseOptionAssociatedEntity$ === "object");
assert(typeof PurchaseOptionBadge$ === "object");
assert(typeof PurchaseOptionFilter$ === "object");
assert(typeof PurchaseOptionSummary$ === "object");
assert(typeof RateCardItem$ === "object");
assert(typeof RecurringPaymentTerm$ === "object");
assert(typeof RenewalTerm$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ReviewSourceSummary$ === "object");
assert(typeof ReviewSummary$ === "object");
assert(typeof SaasFulfillmentOption$ === "object");
assert(typeof SageMakerAlgorithmFulfillmentOption$ === "object");
assert(typeof SageMakerAlgorithmRecommendation$ === "object");
assert(typeof SageMakerModelFulfillmentOption$ === "object");
assert(typeof SageMakerModelRecommendation$ === "object");
assert(typeof ScheduleItem$ === "object");
assert(typeof SearchFacetsInput$ === "object");
assert(typeof SearchFacetsOutput$ === "object");
assert(typeof SearchFilter$ === "object");
assert(typeof SearchListingsInput$ === "object");
assert(typeof SearchListingsOutput$ === "object");
assert(typeof Selector$ === "object");
assert(typeof SellerEngagement$ === "object");
assert(typeof SellerInformation$ === "object");
assert(typeof SupportTerm$ === "object");
assert(typeof UsageBasedPricingTerm$ === "object");
assert(typeof UsageBasedRateCardItem$ === "object");
assert(typeof UseCase$ === "object");
assert(typeof UseCaseEntry$ === "object");
assert(typeof ValidityTerm$ === "object");
assert(typeof VariablePaymentTerm$ === "object");
// enums
assert(typeof BillingPeriodType === "object");
assert(typeof DeployedOnAwsStatus === "object");
assert(typeof DimensionLabelType === "object");
assert(typeof FulfillmentOptionType === "object");
assert(typeof LegalDocumentType === "object");
assert(typeof ListingBadgeType === "object");
assert(typeof PricingModelType === "object");
assert(typeof PricingUnitType === "object");
assert(typeof PurchaseOptionBadgeType === "object");
assert(typeof PurchaseOptionFilterType === "object");
assert(typeof PurchaseOptionType === "object");
assert(typeof RateCardConstraintType === "object");
assert(typeof ResourceContentType === "object");
assert(typeof ResourceType === "object");
assert(typeof ReviewSourceId === "object");
assert(typeof SearchFacetType === "object");
assert(typeof SearchFilterType === "object");
assert(typeof SearchListingsSortBy === "object");
assert(typeof SearchListingsSortOrder === "object");
assert(typeof SelectorType === "object");
assert(typeof SellerEngagementContentType === "object");
assert(typeof SellerEngagementType === "object");
assert(typeof TermType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof MarketplaceDiscoveryServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof MarketplaceDiscoveryServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MarketplaceDiscoveryServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof MarketplaceDiscoveryServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MarketplaceDiscoveryServiceException);
assert(typeof ValidationException$ === "object");
assert(MarketplaceDiscoveryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetOfferTerms === "function");
assert(typeof paginateListFulfillmentOptions === "function");
assert(typeof paginateListPurchaseOptions === "function");
assert(typeof paginateSearchFacets === "function");
assert(typeof paginateSearchListings === "function");
console.log(`MarketplaceDiscovery index test passed.`);

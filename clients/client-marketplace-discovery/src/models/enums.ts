// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const FulfillmentOptionType = {
  AMAZON_MACHINE_IMAGE: "AMAZON_MACHINE_IMAGE",
  API: "API",
  CLOUDFORMATION_TEMPLATE: "CLOUDFORMATION_TEMPLATE",
  CONTAINER: "CONTAINER",
  DATA_EXCHANGE: "DATA_EXCHANGE",
  EC2_IMAGE_BUILDER_COMPONENT: "EC2_IMAGE_BUILDER_COMPONENT",
  EKS_ADD_ON: "EKS_ADD_ON",
  HELM: "HELM",
  PROFESSIONAL_SERVICES: "PROFESSIONAL_SERVICES",
  SAAS: "SAAS",
  SAGEMAKER_ALGORITHM: "SAGEMAKER_ALGORITHM",
  SAGEMAKER_MODEL: "SAGEMAKER_MODEL",
} as const;
/**
 * @public
 */
export type FulfillmentOptionType = (typeof FulfillmentOptionType)[keyof typeof FulfillmentOptionType];

/**
 * @public
 * @enum
 */
export const ListingBadgeType = {
  AWS_FREE_TIER: "AWS_FREE_TIER",
  DEPLOYED_ON_AWS: "DEPLOYED_ON_AWS",
  FREE_TRIAL: "FREE_TRIAL",
  MULTI_PRODUCT: "MULTI_PRODUCT",
  QUICK_LAUNCH: "QUICK_LAUNCH",
} as const;
/**
 * @public
 */
export type ListingBadgeType = (typeof ListingBadgeType)[keyof typeof ListingBadgeType];

/**
 * @public
 * @enum
 */
export const PricingModelType = {
  BYOL: "BYOL",
  CONTRACT: "CONTRACT",
  FREE: "FREE",
  USAGE: "USAGE",
} as const;
/**
 * @public
 */
export type PricingModelType = (typeof PricingModelType)[keyof typeof PricingModelType];

/**
 * @public
 * @enum
 */
export const PricingUnitType = {
  BANDWIDTH: "BANDWIDTH",
  DATA: "DATA",
  HOSTS: "HOSTS",
  REQUESTS: "REQUESTS",
  TIERS: "TIERS",
  UNITS: "UNITS",
  USERS: "USERS",
} as const;
/**
 * @public
 */
export type PricingUnitType = (typeof PricingUnitType)[keyof typeof PricingUnitType];

/**
 * @public
 * @enum
 */
export const ResourceContentType = {
  EMAIL: "EMAIL",
  LINK: "LINK",
  OTHER: "OTHER",
  PHONE_NUMBER: "PHONE_NUMBER",
} as const;
/**
 * @public
 */
export type ResourceContentType = (typeof ResourceContentType)[keyof typeof ResourceContentType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  MANUFACTURER_INSTRUCTIONS: "MANUFACTURER_INSTRUCTIONS",
  MANUFACTURER_SUPPORT: "MANUFACTURER_SUPPORT",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ReviewSourceId = {
  AWS_MARKETPLACE: "AWS_MARKETPLACE",
} as const;
/**
 * @public
 */
export type ReviewSourceId = (typeof ReviewSourceId)[keyof typeof ReviewSourceId];

/**
 * @public
 * @enum
 */
export const SellerEngagementContentType = {
  LINK: "LINK",
} as const;
/**
 * @public
 */
export type SellerEngagementContentType =
  (typeof SellerEngagementContentType)[keyof typeof SellerEngagementContentType];

/**
 * @public
 * @enum
 */
export const SellerEngagementType = {
  REQUEST_FOR_DEMO: "REQUEST_FOR_DEMO",
  REQUEST_FOR_PRIVATE_OFFER: "REQUEST_FOR_PRIVATE_OFFER",
} as const;
/**
 * @public
 */
export type SellerEngagementType = (typeof SellerEngagementType)[keyof typeof SellerEngagementType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  INVALID_PAGINATION_TOKEN: "INVALID_PAGINATION_TOKEN",
  MALFORMED_REQUEST_PARAMETERS: "MALFORMED_REQUEST_PARAMETERS",
  PAGINATION_LIMIT_EXCEEDED: "PAGINATION_LIMIT_EXCEEDED",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const PurchaseOptionBadgeType = {
  FUTURE_DATED: "FUTURE_DATED",
  PRIVATE_PRICING: "PRIVATE_PRICING",
  REPLACEMENT_OFFER: "REPLACEMENT_OFFER",
} as const;
/**
 * @public
 */
export type PurchaseOptionBadgeType = (typeof PurchaseOptionBadgeType)[keyof typeof PurchaseOptionBadgeType];

/**
 * @public
 * @enum
 */
export const TermType = {
  BYOL_PRICING_TERM: "ByolPricingTerm",
  CONFIGURABLE_UPFRONT_PRICING_TERM: "ConfigurableUpfrontPricingTerm",
  FIXED_UPFRONT_PRICING_TERM: "FixedUpfrontPricingTerm",
  FREE_TRIAL_PRICING_TERM: "FreeTrialPricingTerm",
  LEGAL_TERM: "LegalTerm",
  PAYMENT_SCHEDULE_TERM: "PaymentScheduleTerm",
  RECURRING_PAYMENT_TERM: "RecurringPaymentTerm",
  RENEWAL_TERM: "RenewalTerm",
  SUPPORT_TERM: "SupportTerm",
  USAGE_BASED_PRICING_TERM: "UsageBasedPricingTerm",
  VALIDITY_TERM: "ValidityTerm",
  VARIABLE_PAYMENT_TERM: "VariablePaymentTerm",
} as const;
/**
 * @public
 */
export type TermType = (typeof TermType)[keyof typeof TermType];

/**
 * @public
 * @enum
 */
export const RateCardConstraintType = {
  ALLOWED: "Allowed",
  DISALLOWED: "Disallowed",
} as const;
/**
 * @public
 */
export type RateCardConstraintType = (typeof RateCardConstraintType)[keyof typeof RateCardConstraintType];

/**
 * @public
 * @enum
 */
export const DimensionLabelType = {
  REGION: "Region",
  SAGEMAKER_OPTION: "SagemakerOption",
} as const;
/**
 * @public
 */
export type DimensionLabelType = (typeof DimensionLabelType)[keyof typeof DimensionLabelType];

/**
 * @public
 * @enum
 */
export const SelectorType = {
  DURATION: "Duration",
} as const;
/**
 * @public
 */
export type SelectorType = (typeof SelectorType)[keyof typeof SelectorType];

/**
 * @public
 * @enum
 */
export const LegalDocumentType = {
  CUSTOM_DSA: "CustomDsa",
  CUSTOM_EULA: "CustomEula",
  ENTERPRISE_EULA: "EnterpriseEula",
  STANDARD_DSA: "StandardDsa",
  STANDARD_EULA: "StandardEula",
} as const;
/**
 * @public
 */
export type LegalDocumentType = (typeof LegalDocumentType)[keyof typeof LegalDocumentType];

/**
 * @public
 * @enum
 */
export const BillingPeriodType = {
  MONTHLY: "Monthly",
} as const;
/**
 * @public
 */
export type BillingPeriodType = (typeof BillingPeriodType)[keyof typeof BillingPeriodType];

/**
 * @public
 * @enum
 */
export const DeployedOnAwsStatus = {
  DEPLOYED: "DEPLOYED",
  NOT_APPLICABLE: "NOT_APPLICABLE",
  NOT_DEPLOYED: "NOT_DEPLOYED",
} as const;
/**
 * @public
 */
export type DeployedOnAwsStatus = (typeof DeployedOnAwsStatus)[keyof typeof DeployedOnAwsStatus];

/**
 * @public
 * @enum
 */
export const PurchaseOptionFilterType = {
  AVAILABILITY_STATUS: "AVAILABILITY_STATUS",
  PRODUCT_ID: "PRODUCT_ID",
  PURCHASE_OPTION_TYPE: "PURCHASE_OPTION_TYPE",
  SELLER_OF_RECORD_PROFILE_ID: "SELLER_OF_RECORD_PROFILE_ID",
  VISIBILITY_SCOPE: "VISIBILITY_SCOPE",
} as const;
/**
 * @public
 */
export type PurchaseOptionFilterType = (typeof PurchaseOptionFilterType)[keyof typeof PurchaseOptionFilterType];

/**
 * @public
 * @enum
 */
export const PurchaseOptionType = {
  OFFER: "OFFER",
  OFFERSET: "OFFERSET",
} as const;
/**
 * @public
 */
export type PurchaseOptionType = (typeof PurchaseOptionType)[keyof typeof PurchaseOptionType];

/**
 * @public
 * @enum
 */
export const SearchFacetType = {
  AVERAGE_CUSTOMER_RATING: "AVERAGE_CUSTOMER_RATING",
  CATEGORY: "CATEGORY",
  DEPLOYED_ON_AWS: "DEPLOYED_ON_AWS",
  FULFILLMENT_OPTION_TYPE: "FULFILLMENT_OPTION_TYPE",
  NUMBER_OF_PRODUCTS: "NUMBER_OF_PRODUCTS",
  PRICING_MODEL: "PRICING_MODEL",
  PRICING_UNIT: "PRICING_UNIT",
  PUBLISHER: "PUBLISHER",
} as const;
/**
 * @public
 */
export type SearchFacetType = (typeof SearchFacetType)[keyof typeof SearchFacetType];

/**
 * @public
 * @enum
 */
export const SearchFilterType = {
  CATEGORY: "CATEGORY",
  DEPLOYED_ON_AWS: "DEPLOYED_ON_AWS",
  FULFILLMENT_OPTION_TYPE: "FULFILLMENT_OPTION_TYPE",
  MAX_AVERAGE_CUSTOMER_RATING: "MAX_AVERAGE_CUSTOMER_RATING",
  MIN_AVERAGE_CUSTOMER_RATING: "MIN_AVERAGE_CUSTOMER_RATING",
  NUMBER_OF_PRODUCTS: "NUMBER_OF_PRODUCTS",
  PRICING_MODEL: "PRICING_MODEL",
  PRICING_UNIT: "PRICING_UNIT",
  PUBLISHER: "PUBLISHER",
} as const;
/**
 * @public
 */
export type SearchFilterType = (typeof SearchFilterType)[keyof typeof SearchFilterType];

/**
 * @public
 * @enum
 */
export const SearchListingsSortBy = {
  AVERAGE_CUSTOMER_RATING: "AVERAGE_CUSTOMER_RATING",
  RELEVANCE: "RELEVANCE",
} as const;
/**
 * @public
 */
export type SearchListingsSortBy = (typeof SearchListingsSortBy)[keyof typeof SearchListingsSortBy];

/**
 * @public
 * @enum
 */
export const SearchListingsSortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SearchListingsSortOrder = (typeof SearchListingsSortOrder)[keyof typeof SearchListingsSortOrder];

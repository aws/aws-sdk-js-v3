// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionErrorCode = {
  INCOMPATIBLE_BENEFIT_AWS_PARTNER_STATE: "INCOMPATIBLE_BENEFIT_AWS_PARTNER_STATE",
  OPPORTUNITY_BULK_JOB_NOT_ENABLED: "OPPORTUNITY_BULK_JOB_NOT_ENABLED",
  SEARCH_OPPORTUNITIES_DATA_NOT_ROUTED_TO_DDB: "SEARCH_OPPORTUNITIES_DATA_NOT_ROUTED_TO_DDB",
  SEARCH_OPPORTUNITIES_NOT_ENABLED: "SEARCH_OPPORTUNITIES_NOT_ENABLED",
} as const;
/**
 * @public
 */
export type AccessDeniedExceptionErrorCode =
  (typeof AccessDeniedExceptionErrorCode)[keyof typeof AccessDeniedExceptionErrorCode];

/**
 * @public
 * @enum
 */
export const ValidationExceptionErrorCode = {
  ACTION_NOT_PERMITTED: "ACTION_NOT_PERMITTED",
  DUPLICATE_KEY_VALUE: "DUPLICATE_KEY_VALUE",
  INVALID_ENUM_VALUE: "INVALID_ENUM_VALUE",
  INVALID_RESOURCE_STATE: "INVALID_RESOURCE_STATE",
  INVALID_STRING_FORMAT: "INVALID_STRING_FORMAT",
  INVALID_VALUE: "INVALID_VALUE",
  NOT_ENOUGH_VALUES: "NOT_ENOUGH_VALUES",
  REQUIRED_FIELD_MISSING: "REQUIRED_FIELD_MISSING",
  TOO_MANY_VALUES: "TOO_MANY_VALUES",
  VALUE_OUT_OF_RANGE: "VALUE_OUT_OF_RANGE",
} as const;
/**
 * @public
 */
export type ValidationExceptionErrorCode =
  (typeof ValidationExceptionErrorCode)[keyof typeof ValidationExceptionErrorCode];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  BUSINESS_VALIDATION_FAILED: "BUSINESS_VALIDATION_FAILED",
  REQUEST_VALIDATION_FAILED: "REQUEST_VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const CountryCode = {
  AD: "AD",
  AE: "AE",
  AF: "AF",
  AG: "AG",
  AI: "AI",
  AL: "AL",
  AM: "AM",
  AN: "AN",
  AO: "AO",
  AQ: "AQ",
  AR: "AR",
  AS: "AS",
  AT: "AT",
  AU: "AU",
  AW: "AW",
  AX: "AX",
  AZ: "AZ",
  BA: "BA",
  BB: "BB",
  BD: "BD",
  BE: "BE",
  BF: "BF",
  BG: "BG",
  BH: "BH",
  BI: "BI",
  BJ: "BJ",
  BL: "BL",
  BM: "BM",
  BN: "BN",
  BO: "BO",
  BQ: "BQ",
  BR: "BR",
  BS: "BS",
  BT: "BT",
  BV: "BV",
  BW: "BW",
  BY: "BY",
  BZ: "BZ",
  CA: "CA",
  CC: "CC",
  CD: "CD",
  CF: "CF",
  CG: "CG",
  CH: "CH",
  CI: "CI",
  CK: "CK",
  CL: "CL",
  CM: "CM",
  CN: "CN",
  CO: "CO",
  CR: "CR",
  CU: "CU",
  CV: "CV",
  CW: "CW",
  CX: "CX",
  CY: "CY",
  CZ: "CZ",
  DE: "DE",
  DJ: "DJ",
  DK: "DK",
  DM: "DM",
  DO: "DO",
  DZ: "DZ",
  EC: "EC",
  EE: "EE",
  EG: "EG",
  EH: "EH",
  ER: "ER",
  ES: "ES",
  ET: "ET",
  FI: "FI",
  FJ: "FJ",
  FK: "FK",
  FM: "FM",
  FO: "FO",
  FR: "FR",
  GA: "GA",
  GB: "GB",
  GD: "GD",
  GE: "GE",
  GF: "GF",
  GG: "GG",
  GH: "GH",
  GI: "GI",
  GL: "GL",
  GM: "GM",
  GN: "GN",
  GP: "GP",
  GQ: "GQ",
  GR: "GR",
  GS: "GS",
  GT: "GT",
  GU: "GU",
  GW: "GW",
  GY: "GY",
  HK: "HK",
  HM: "HM",
  HN: "HN",
  HR: "HR",
  HT: "HT",
  HU: "HU",
  ID: "ID",
  IE: "IE",
  IL: "IL",
  IM: "IM",
  IN: "IN",
  IO: "IO",
  IQ: "IQ",
  IR: "IR",
  IS: "IS",
  IT: "IT",
  JE: "JE",
  JM: "JM",
  JO: "JO",
  JP: "JP",
  KE: "KE",
  KG: "KG",
  KH: "KH",
  KI: "KI",
  KM: "KM",
  KN: "KN",
  KR: "KR",
  KW: "KW",
  KY: "KY",
  KZ: "KZ",
  LA: "LA",
  LB: "LB",
  LC: "LC",
  LI: "LI",
  LK: "LK",
  LR: "LR",
  LS: "LS",
  LT: "LT",
  LU: "LU",
  LV: "LV",
  LY: "LY",
  MA: "MA",
  MC: "MC",
  MD: "MD",
  ME: "ME",
  MF: "MF",
  MG: "MG",
  MH: "MH",
  MK: "MK",
  ML: "ML",
  MM: "MM",
  MN: "MN",
  MO: "MO",
  MP: "MP",
  MQ: "MQ",
  MR: "MR",
  MS: "MS",
  MT: "MT",
  MU: "MU",
  MV: "MV",
  MW: "MW",
  MX: "MX",
  MY: "MY",
  MZ: "MZ",
  NA: "NA",
  NC: "NC",
  NE: "NE",
  NF: "NF",
  NG: "NG",
  NI: "NI",
  NL: "NL",
  NO: "NO",
  NP: "NP",
  NR: "NR",
  NU: "NU",
  NZ: "NZ",
  OM: "OM",
  PA: "PA",
  PE: "PE",
  PF: "PF",
  PG: "PG",
  PH: "PH",
  PK: "PK",
  PL: "PL",
  PM: "PM",
  PN: "PN",
  PR: "PR",
  PS: "PS",
  PT: "PT",
  PW: "PW",
  PY: "PY",
  QA: "QA",
  RE: "RE",
  RO: "RO",
  RS: "RS",
  RU: "RU",
  RW: "RW",
  SA: "SA",
  SB: "SB",
  SC: "SC",
  SD: "SD",
  SE: "SE",
  SG: "SG",
  SH: "SH",
  SI: "SI",
  SJ: "SJ",
  SK: "SK",
  SL: "SL",
  SM: "SM",
  SN: "SN",
  SO: "SO",
  SR: "SR",
  SS: "SS",
  ST: "ST",
  SV: "SV",
  SX: "SX",
  SY: "SY",
  SZ: "SZ",
  TC: "TC",
  TD: "TD",
  TF: "TF",
  TG: "TG",
  TH: "TH",
  TJ: "TJ",
  TK: "TK",
  TL: "TL",
  TM: "TM",
  TN: "TN",
  TO: "TO",
  TR: "TR",
  TT: "TT",
  TV: "TV",
  TW: "TW",
  TZ: "TZ",
  UA: "UA",
  UG: "UG",
  UM: "UM",
  US: "US",
  UY: "UY",
  UZ: "UZ",
  VA: "VA",
  VC: "VC",
  VE: "VE",
  VG: "VG",
  VI: "VI",
  VN: "VN",
  VU: "VU",
  WF: "WF",
  WS: "WS",
  YE: "YE",
  YT: "YT",
  ZA: "ZA",
  ZM: "ZM",
  ZW: "ZW",
} as const;
/**
 * @public
 */
export type CountryCode = (typeof CountryCode)[keyof typeof CountryCode];

/**
 * @public
 * @enum
 */
export const Industry = {
  AEROSPACE_SATELLITE: "Aerospace",
  AGRICULTURE: "Agriculture",
  AUTOMOTIVE: "Automotive",
  COMPUTERS_ELECTRONICS: "Computers and Electronics",
  CONSUMER_GOODS: "Consumer Goods",
  EDUCATION: "Education",
  ENERGY_OIL_GAS: "Energy - Oil and Gas",
  ENERGY_POWER_UTILITIES: "Energy - Power and Utilities",
  FINANCIAL_SERVICES: "Financial Services",
  GAMING: "Gaming",
  GOVERNMENT: "Government",
  HEALTHCARE: "Healthcare",
  HOSPITALITY: "Hospitality",
  LIFE_SCIENCES: "Life Sciences",
  MANUFACTURING: "Manufacturing",
  MARKETING_ADVERTISING: "Marketing and Advertising",
  MEDIA_ENTERTAINMENT: "Media and Entertainment",
  MINING: "Mining",
  NON_PROFIT_ORGANIZATION: "Non-Profit Organization",
  OTHER: "Other",
  PROFESSIONAL_SERVICES: "Professional Services",
  REALESTATE_CONSTRUCTION: "Real Estate and Construction",
  RETAIL: "Retail",
  SOFTWARE_INTERNET: "Software and Internet",
  TELECOMMUNICATIONS: "Telecommunications",
  TRANSPORTATION_LOGISTICS: "Transportation and Logistics",
  TRAVEL: "Travel",
  WHOLESALE_DISTRIBUTION: "Wholesale and Distribution",
} as const;
/**
 * @public
 */
export type Industry = (typeof Industry)[keyof typeof Industry];

/**
 * @public
 * @enum
 */
export const ContactWindow = {
  AFTERNOON: "AFTERNOON",
  EVENING: "EVENING",
  MORNING: "MORNING",
} as const;
/**
 * @public
 */
export type ContactWindow = (typeof ContactWindow)[keyof typeof ContactWindow];

/**
 * @public
 * @enum
 */
export const AggregatableField = {
  /**
   * <p>Group by whether the customer qualifies for account planning.</p>
   */
  ACCOUNT_PLANNING_QUALIFICATION: "ACCOUNT_PLANNING_QUALIFICATION",
  /**
   * <p>Group by the industry of the customer, as classified by AWS.</p>
   */
  AWS_INDUSTRY: "AWS_INDUSTRY",
  /**
   * <p>Group by the country of the customer.</p>
   */
  COUNTRY: "COUNTRY",
  /**
   * <p>Group by the enrichment status of the customer account.</p>
   */
  ENRICHMENT_STATUS: "ENRICHMENT_STATUS",
  /**
   * <p>Group by the geographic area of the customer.</p>
   */
  GEO: "GEO",
  /**
   * <p>Group by the AWS Marketplace engagement score of the customer.</p>
   */
  MARKETPLACE_ENGAGEMENT_SCORE: "MARKETPLACE_ENGAGEMENT_SCORE",
  /**
   * <p>Group by the AWS programs that the customer is eligible for.</p>
   */
  PROGRAM_ELIGIBILITY: "PROGRAM_ELIGIBILITY",
  /**
   * <p>Group by the region of the customer.</p>
   */
  REGION: "REGION",
  /**
   * <p>Group by the market segment of the customer.</p>
   */
  SEGMENT: "SEGMENT",
  /**
   * <p>Group by the category of the recommended solution.</p>
   */
  SOLUTION_CATEGORY: "SOLUTION_CATEGORY",
  /**
   * <p>Group by the score of the recommended solution.</p>
   */
  SOLUTION_SCORE: "SOLUTION_SCORE",
} as const;
/**
 * @public
 */
export type AggregatableField = (typeof AggregatableField)[keyof typeof AggregatableField];

/**
 * @public
 * @enum
 */
export const RelatedEntityType = {
  AWS_MARKETPLACE_OFFERS: "AwsMarketplaceOffers",
  AWS_MARKETPLACE_OFFER_SETS: "AwsMarketplaceOfferSets",
  AWS_MARKETPLACE_PRODUCTS: "AwsMarketplaceProducts",
  AWS_MARKETPLACE_SOLUTIONS: "AwsMarketplaceSolutions",
  AWS_PRODUCTS: "AwsProducts",
  SOLUTIONS: "Solutions",
} as const;
/**
 * @public
 */
export type RelatedEntityType = (typeof RelatedEntityType)[keyof typeof RelatedEntityType];

/**
 * @public
 * @enum
 */
export const AwsClosedLostReason = {
  ADMINISTRATIVE: "Administrative",
  BUSINESS_ASSOCIATE_AGREEMENT: "Business Associate Agreement",
  COMPANY_ACQUIRED_DISSOLVED: "Company Acquired/Dissolved",
  COMPETITIVE_OFFERING: "Competitive Offering",
  CUSTOMER_DATA_REQUIREMENT: "Customer Data Requirement",
  CUSTOMER_DEFICIENCY: "Customer Deficiency",
  CUSTOMER_EXPERIENCE: "Customer Experience",
  DELAY_CANCELLATION_OF_PROJECT: "Delay / Cancellation of Project",
  DUPLICATE: "Duplicate",
  DUPLICATE_OPPORTUNITY: "Duplicate Opportunity",
  EXECUTIVE_BLOCKER: "Executive Blocker",
  FAILED_VETTING: "Failed Vetting",
  FEATURE_LIMITATION: "Feature Limitation",
  FINANCIAL_COMMERCIAL: "Financial/Commercial",
  INSUFFICIENT_AMAZON_VALUE: "Insufficient Amazon Value",
  INSUFFICIENT_AWS_VALUE: "Insufficient AWS Value",
  INTERNATIONAL_CONSTRAINTS: "International Constraints",
  LEGAL_TAX_REGULATORY: "Legal / Tax / Regulatory",
  LEGAL_TERMS_AND_CONDITIONS: "Legal Terms and Conditions",
  LOST_TO_COMPETITOR: "Lost to Competitor",
  LOST_TO_COMPETITOR_GOOGLE: "Lost to Competitor - Google",
  LOST_TO_COMPETITOR_MICROSOFT: "Lost to Competitor - Microsoft",
  LOST_TO_COMPETITOR_OTHER: "Lost to Competitor - Other",
  LOST_TO_COMPETITOR_RACKSPACE: "Lost to Competitor - Rackspace",
  LOST_TO_COMPETITOR_SOFTLAYER: "Lost to Competitor - SoftLayer",
  LOST_TO_COMPETITOR_VMWARE: "Lost to Competitor - VMWare",
  NOT_COMMITTED_TO_AWS: "Not Committed to AWS",
  NO_CUSTOMER_REFERENCE: "No Customer Reference",
  NO_INTEGRATION_RESOURCES: "No Integration Resources",
  NO_OPPORTUNITY: "No Opportunity",
  NO_PERCEIVED_VALUE_OF_MP: "No Perceived Value of MP",
  NO_RESPONSE: "No Response",
  NO_UPDATE: "No Update",
  ON_PREMISES_DEPLOYMENT: "On Premises Deployment",
  OTHER: "Other",
  OTHER_DETAILS_IN_DESCRIPTION: "Other (Details in Description)",
  PARTNER_GAP: "Partner Gap",
  PAST_DUE: "Past Due",
  PEOPLE_RELATIONSHIP_GOVERNANCE: "People/Relationship/Governance",
  PLATFORM_TECHNOLOGY_LIMITATION: "Platform Technology Limitation",
  PREFERENCE_FOR_COMPETITOR: "Preference for Competitor",
  PRICE: "Price",
  PRODUCT_NOT_ON_AWS: "Product Not on AWS",
  PRODUCT_TECHNOLOGY: "Product/Technology",
  SECURITY_COMPLIANCE: "Security / Compliance",
  SELF_SERVICE: "Self-Service",
  TECHNICAL_LIMITATIONS: "Technical Limitations",
  TERM_SHEET_IMPASSE: "Term Sheet Impasse",
} as const;
/**
 * @public
 */
export type AwsClosedLostReason = (typeof AwsClosedLostReason)[keyof typeof AwsClosedLostReason];

/**
 * @public
 * @enum
 */
export const AwsFundingUsed = {
  NO: "No",
  YES: "Yes",
} as const;
/**
 * @public
 */
export type AwsFundingUsed = (typeof AwsFundingUsed)[keyof typeof AwsFundingUsed];

/**
 * @public
 * @enum
 */
export const AwsMemberBusinessTitle = {
  AWS_ACCOUNT_OWNER: "AWSAccountOwner",
  AWS_SALES_REP: "AWSSalesRep",
  ISVSM: "ISVSM",
  PDM: "PDM",
  PSM: "PSM",
  SIGNATORY: "Signatory",
  WWPSPDM: "WWPSPDM",
} as const;
/**
 * @public
 */
export type AwsMemberBusinessTitle = (typeof AwsMemberBusinessTitle)[keyof typeof AwsMemberBusinessTitle];

/**
 * @public
 * @enum
 */
export const CurrencyCode = {
  AED: "AED",
  AFN: "AFN",
  ALL: "ALL",
  AMD: "AMD",
  ANG: "ANG",
  AOA: "AOA",
  ARS: "ARS",
  AUD: "AUD",
  AWG: "AWG",
  AZN: "AZN",
  BAM: "BAM",
  BBD: "BBD",
  BDT: "BDT",
  BGN: "BGN",
  BHD: "BHD",
  BIF: "BIF",
  BMD: "BMD",
  BND: "BND",
  BOB: "BOB",
  BOV: "BOV",
  BRL: "BRL",
  BSD: "BSD",
  BTN: "BTN",
  BWP: "BWP",
  BYN: "BYN",
  BZD: "BZD",
  CAD: "CAD",
  CDF: "CDF",
  CHE: "CHE",
  CHF: "CHF",
  CHW: "CHW",
  CLF: "CLF",
  CLP: "CLP",
  CNY: "CNY",
  COP: "COP",
  COU: "COU",
  CRC: "CRC",
  CUC: "CUC",
  CUP: "CUP",
  CVE: "CVE",
  CZK: "CZK",
  DJF: "DJF",
  DKK: "DKK",
  DOP: "DOP",
  DZD: "DZD",
  EGP: "EGP",
  ERN: "ERN",
  ETB: "ETB",
  EUR: "EUR",
  FJD: "FJD",
  FKP: "FKP",
  GBP: "GBP",
  GEL: "GEL",
  GHS: "GHS",
  GIP: "GIP",
  GMD: "GMD",
  GNF: "GNF",
  GTQ: "GTQ",
  GYD: "GYD",
  HKD: "HKD",
  HNL: "HNL",
  HRK: "HRK",
  HTG: "HTG",
  HUF: "HUF",
  IDR: "IDR",
  ILS: "ILS",
  INR: "INR",
  IQD: "IQD",
  IRR: "IRR",
  ISK: "ISK",
  JMD: "JMD",
  JOD: "JOD",
  JPY: "JPY",
  KES: "KES",
  KGS: "KGS",
  KHR: "KHR",
  KMF: "KMF",
  KPW: "KPW",
  KRW: "KRW",
  KWD: "KWD",
  KYD: "KYD",
  KZT: "KZT",
  LAK: "LAK",
  LBP: "LBP",
  LKR: "LKR",
  LRD: "LRD",
  LSL: "LSL",
  LYD: "LYD",
  MAD: "MAD",
  MDL: "MDL",
  MGA: "MGA",
  MKD: "MKD",
  MMK: "MMK",
  MNT: "MNT",
  MOP: "MOP",
  MRU: "MRU",
  MUR: "MUR",
  MVR: "MVR",
  MWK: "MWK",
  MXN: "MXN",
  MXV: "MXV",
  MYR: "MYR",
  MZN: "MZN",
  NAD: "NAD",
  NGN: "NGN",
  NIO: "NIO",
  NOK: "NOK",
  NPR: "NPR",
  NZD: "NZD",
  OMR: "OMR",
  PAB: "PAB",
  PEN: "PEN",
  PGK: "PGK",
  PHP: "PHP",
  PKR: "PKR",
  PLN: "PLN",
  PYG: "PYG",
  QAR: "QAR",
  RON: "RON",
  RSD: "RSD",
  RUB: "RUB",
  RWF: "RWF",
  SAR: "SAR",
  SBD: "SBD",
  SCR: "SCR",
  SDG: "SDG",
  SEK: "SEK",
  SGD: "SGD",
  SHP: "SHP",
  SLL: "SLL",
  SOS: "SOS",
  SRD: "SRD",
  SSP: "SSP",
  STN: "STN",
  SVC: "SVC",
  SYP: "SYP",
  SZL: "SZL",
  THB: "THB",
  TJS: "TJS",
  TMT: "TMT",
  TND: "TND",
  TOP: "TOP",
  TRY: "TRY",
  TTD: "TTD",
  TWD: "TWD",
  TZS: "TZS",
  UAH: "UAH",
  UGX: "UGX",
  USD: "USD",
  USN: "USN",
  UYI: "UYI",
  UYU: "UYU",
  UZS: "UZS",
  VEF: "VEF",
  VND: "VND",
  VUV: "VUV",
  WST: "WST",
  XAF: "XAF",
  XCD: "XCD",
  XDR: "XDR",
  XOF: "XOF",
  XPF: "XPF",
  XSU: "XSU",
  XUA: "XUA",
  YER: "YER",
  ZAR: "ZAR",
  ZMW: "ZMW",
  ZWL: "ZWL",
} as const;
/**
 * @public
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

/**
 * @public
 * @enum
 */
export const PaymentFrequency = {
  MONTHLY: "Monthly",
} as const;
/**
 * @public
 */
export type PaymentFrequency = (typeof PaymentFrequency)[keyof typeof PaymentFrequency];

/**
 * @public
 * @enum
 */
export const EngagementScore = {
  HIGH: "High",
  LOW: "Low",
  MEDIUM: "Medium",
} as const;
/**
 * @public
 */
export type EngagementScore = (typeof EngagementScore)[keyof typeof EngagementScore];

/**
 * @public
 * @enum
 */
export const AwsOpportunityStage = {
  BUILDING_INTEGRATION: "Building Integration",
  BUSINESS_VALIDATION: "Business Validation",
  CLOSED_INCOMPLETE: "Closed Incomplete",
  CLOSED_LOST: "Closed Lost",
  COMMITTED: "Committed",
  COMPLETED: "Completed",
  CONTRACT_NEGOTIATION: "Contract Negotiation",
  DEFERRED_TO_PARTNER: "Deferred to Partner",
  ENGAGED: "Engaged",
  EVALUATING: "Evaluating",
  IDENTIFIED: "Identified",
  IN_PROGRESS: "In Progress",
  LAUNCHED: "Launched",
  NOT_STARTED: "Not Started",
  ONBOARDING: "Onboarding",
  ON_HOLD: "On-hold",
  PROSPECT: "Prospect",
  QUALIFIED: "Qualified",
  QUALIFY: "Qualify",
  RESEARCH: "Research",
  SELLER_ENGAGED: "Seller Engaged",
  SELLER_REGISTERED: "Seller Registered",
  TECHNICAL_VALIDATION: "Technical Validation",
  TERM_SHEET_NEGOTIATION: "Term Sheet Negotiation",
} as const;
/**
 * @public
 */
export type AwsOpportunityStage = (typeof AwsOpportunityStage)[keyof typeof AwsOpportunityStage];

/**
 * @public
 * @enum
 */
export const AwsPartition = {
  AWS_EUSC: "aws-eusc",
} as const;
/**
 * @public
 */
export type AwsPartition = (typeof AwsPartition)[keyof typeof AwsPartition];

/**
 * @public
 * @enum
 */
export const SalesInvolvementType = {
  CO_SELL: "Co-Sell",
  FOR_VISIBILITY_ONLY: "For Visibility Only",
} as const;
/**
 * @public
 */
export type SalesInvolvementType = (typeof SalesInvolvementType)[keyof typeof SalesInvolvementType];

/**
 * @public
 * @enum
 */
export const InvolvementTypeChangeReason = {
  CHANGE_IN_DEAL_INFORMATION: "Change in Deal Information",
  CUSTOMER_REQUESTED: "Customer Requested",
  EXPANSION_OPPORTUNITY: "Expansion Opportunity",
  RISK_MITIGATION: "Risk Mitigation",
  TECHNICAL_COMPLEXITY: "Technical Complexity",
} as const;
/**
 * @public
 */
export type InvolvementTypeChangeReason =
  (typeof InvolvementTypeChangeReason)[keyof typeof InvolvementTypeChangeReason];

/**
 * @public
 * @enum
 */
export const OpportunityOrigin = {
  AWS_REFERRAL: "AWS Referral",
  PARTNER_REFERRAL: "Partner Referral",
} as const;
/**
 * @public
 */
export type OpportunityOrigin = (typeof OpportunityOrigin)[keyof typeof OpportunityOrigin];

/**
 * @public
 * @enum
 */
export const Visibility = {
  FULL: "Full",
  LIMITED: "Limited",
} as const;
/**
 * @public
 */
export type Visibility = (typeof Visibility)[keyof typeof Visibility];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  /**
   * <p>The day is Friday.</p>
   */
  FRIDAY: "FRIDAY",
  /**
   * <p>The day is Monday.</p>
   */
  MONDAY: "MONDAY",
  /**
   * <p>The day is Saturday.</p>
   */
  SATURDAY: "SATURDAY",
  /**
   * <p>The day is Sunday.</p>
   */
  SUNDAY: "SUNDAY",
  /**
   * <p>The day is Thursday.</p>
   */
  THURSDAY: "THURSDAY",
  /**
   * <p>The day is Tuesday.</p>
   */
  TUESDAY: "TUESDAY",
  /**
   * <p>The day is Wednesday.</p>
   */
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const EngagementContextType = {
  CUSTOMER_ACCOUNT: "CustomerAccount",
  CUSTOMER_PROJECT: "CustomerProject",
  LEAD: "Lead",
  PROSPECTING_RESULT: "ProspectingResult",
} as const;
/**
 * @public
 */
export type EngagementContextType = (typeof EngagementContextType)[keyof typeof EngagementContextType];

/**
 * @public
 * @enum
 */
export const EnrichmentStatus = {
  /**
   * <p>The customer account needs your action. See <code>ReasonCode</code> and <code>Message</code> for details.</p>
   */
  ACTION_REQUIRED: "ACTION_REQUIRED",
  /**
   * <p>AWS matched the customer account to a customer and added enrichment information.</p>
   */
  ENRICHED: "ENRICHED",
  /**
   * <p>AWS couldn't match the customer account to a customer.</p>
   */
  NO_MATCH_FOUND: "NO_MATCH_FOUND",
  /**
   * <p>AWS is matching the customer account to a customer.</p>
   */
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type EnrichmentStatus = (typeof EnrichmentStatus)[keyof typeof EnrichmentStatus];

/**
 * @public
 * @enum
 */
export const CustomerAccountFailureReason = {
  /**
   * <p>The customer is already mapped by another customer account. <code>ExistingCustomerAccountArn</code> identifies that account.</p>
   */
  DUPLICATE_CUSTOMER_MATCH: "DUPLICATE_CUSTOMER_MATCH",
  /**
   * <p>An error occurred while processing the customer account.</p>
   */
  PROCESSING_ERROR: "PROCESSING_ERROR",
} as const;
/**
 * @public
 */
export type CustomerAccountFailureReason =
  (typeof CustomerAccountFailureReason)[keyof typeof CustomerAccountFailureReason];

/**
 * @public
 * @enum
 */
export const FilterableField = {
  /**
   * <p>Filter by whether the customer qualifies for account planning.</p>
   */
  ACCOUNT_PLANNING_QUALIFICATION: "ACCOUNT_PLANNING_QUALIFICATION",
  /**
   * <p>Filter by the industry of the customer, as classified by AWS.</p>
   */
  AWS_INDUSTRY: "AWS_INDUSTRY",
  /**
   * <p>Filter by the customer company name.</p>
   */
  COMPANY_NAME: "COMPANY_NAME",
  /**
   * <p>Filter by the country of the customer.</p>
   */
  COUNTRY: "COUNTRY",
  /**
   * <p>Filter by the date when the customer account was created.</p>
   */
  CREATED_DATE: "CREATED_DATE",
  /**
   * <p>Filter by the enrichment status of the customer account.</p>
   */
  ENRICHMENT_STATUS: "ENRICHMENT_STATUS",
  /**
   * <p>Filter by the geographic area of the customer.</p>
   */
  GEO: "GEO",
  /**
   * <p>Filter by the import that created the customer account.</p>
   */
  IMPORT_ID: "IMPORT_ID",
  /**
   * <p>Filter by the date when the customer account was last modified.</p>
   */
  LAST_MODIFIED_DATE: "LAST_MODIFIED_DATE",
  /**
   * <p>Filter by the AWS Marketplace engagement score of the customer.</p>
   */
  MARKETPLACE_ENGAGEMENT_SCORE: "MARKETPLACE_ENGAGEMENT_SCORE",
  /**
   * <p>Filter by the AWS programs that the customer is eligible for.</p>
   */
  PROGRAM_ELIGIBILITY: "PROGRAM_ELIGIBILITY",
  /**
   * <p>Filter by the market segment of the customer.</p>
   */
  SEGMENT: "SEGMENT",
  /**
   * <p>Filter by the category of the recommended solution.</p>
   */
  SOLUTION_CATEGORY: "SOLUTION_CATEGORY",
  /**
   * <p>Filter by the score of the recommended solution.</p>
   */
  SOLUTION_SCORE: "SOLUTION_SCORE",
} as const;
/**
 * @public
 */
export type FilterableField = (typeof FilterableField)[keyof typeof FilterableField];

/**
 * @public
 * @enum
 */
export const SortableField = {
  /**
   * <p>Sort by the customer company name.</p>
   */
  COMPANY_NAME: "COMPANY_NAME",
  /**
   * <p>Sort by the date when the customer account was created.</p>
   */
  CREATED_DATE: "CREATED_DATE",
  /**
   * <p>Sort by the date when the customer account was last modified.</p>
   */
  LAST_MODIFIED_DATE: "LAST_MODIFIED_DATE",
  /**
   * <p>Sort by the AWS Marketplace engagement score. Scores sort in the order <code>High</code>, <code>Medium</code>, <code>Low</code>, with accounts that have no score last.</p>
   */
  MARKETPLACE_ENGAGEMENT_SCORE: "MARKETPLACE_ENGAGEMENT_SCORE",
  /**
   * <p>Sort by the score of the recommended solution. Scores sort in the order <code>High</code>, <code>Medium</code>, <code>Low</code>, with accounts that have no score last.</p>
   */
  SOLUTION_SCORE: "SOLUTION_SCORE",
} as const;
/**
 * @public
 */
export type SortableField = (typeof SortableField)[keyof typeof SortableField];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const BulkJobStatus = {
  /**
   * <p>The job finished processing all records. Some records might have failed.</p>
   */
  COMPLETED: "COMPLETED",
  /**
   * <p>The job failed. See <code>FailureReason</code> for details.</p>
   */
  FAILED: "FAILED",
  /**
   * <p>The job is processing records.</p>
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * <p>The job was created and is waiting to start.</p>
   */
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type BulkJobStatus = (typeof BulkJobStatus)[keyof typeof BulkJobStatus];

/**
 * @public
 * @enum
 */
export const BulkReportType = {
  /**
   * <p>Reserved for future use.</p>
   */
  ALL_RECORDS: "ALL_RECORDS",
  /**
   * <p>The report covers only the records that failed.</p>
   */
  FAILED_RECORDS: "FAILED_RECORDS",
} as const;
/**
 * @public
 */
export type BulkReportType = (typeof BulkReportType)[keyof typeof BulkReportType];

/**
 * @public
 * @enum
 */
export const BulkReportStatus = {
  /**
   * <p>The report is ready to download.</p>
   */
  AVAILABLE: "AVAILABLE",
  /**
   * The report was generated but its retention window has passed, so the
   * stored file no longer exists and no download URL can be issued.
   */
  EXPIRED: "EXPIRED",
  /**
   * <p>The report couldn't be generated. See <code>FailureReason</code> for details.</p>
   */
  FAILED: "FAILED",
  /**
   * <p>The report is being generated.</p>
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * <p>The report hasn't been generated yet.</p>
   */
  NOT_STARTED: "NOT_STARTED",
} as const;
/**
 * @public
 */
export type BulkReportStatus = (typeof BulkReportStatus)[keyof typeof BulkReportStatus];

/**
 * @public
 * @enum
 */
export const BulkRecordStatus = {
  /**
   * <p>The record failed.</p>
   */
  FAILED: "FAILED",
  /**
   * <p>The record was processed successfully.</p>
   */
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type BulkRecordStatus = (typeof BulkRecordStatus)[keyof typeof BulkRecordStatus];

/**
 * @public
 * @enum
 */
export const EngagementSortName = {
  CreatedDate: "CreatedDate",
} as const;
/**
 * @public
 */
export type EngagementSortName = (typeof EngagementSortName)[keyof typeof EngagementSortName];

/**
 * @public
 * @enum
 */
export const EngagementSearchFilterName = {
  /**
   * <p>Filter on the context type field.</p>
   */
  CONTEXT_TYPE: "ContextType",
  /**
   * <p>Filter on the created at field.</p>
   */
  CREATED_AT: "CreatedAt",
  /**
   * <p>Filter on the engagement id field.</p>
   */
  ENGAGEMENT_ID: "EngagementId",
  /**
   * <p>Filter on the last modified at field.</p>
   */
  LAST_MODIFIED_AT: "LastModifiedAt",
  /**
   * <p>Filter on the lead customer aws maturity field.</p>
   */
  LEAD_CUSTOMER_AWS_MATURITY: "LeadCustomerAwsMaturity",
  /**
   * <p>Filter on the lead customer company name field.</p>
   */
  LEAD_CUSTOMER_COMPANY_NAME: "LeadCustomerCompanyName",
  /**
   * <p>Filter on the lead customer country code field.</p>
   */
  LEAD_CUSTOMER_COUNTRY_CODE: "LeadCustomerCountryCode",
  /**
   * <p>Filter on the lead customer industry field.</p>
   */
  LEAD_CUSTOMER_INDUSTRY: "LeadCustomerIndustry",
  /**
   * <p>Filter on the lead customer market segment field.</p>
   */
  LEAD_CUSTOMER_MARKET_SEGMENT: "LeadCustomerMarketSegment",
  /**
   * <p>Filter on the lead interactions contact business title field.</p>
   */
  LEAD_INTERACTIONS_CONTACT_BUSINESS_TITLE: "LeadInteractionsContactBusinessTitle",
  /**
   * <p>Filter on the lead interactions contact first name field.</p>
   */
  LEAD_INTERACTIONS_CONTACT_FIRST_NAME: "LeadInteractionsContactFirstName",
  /**
   * <p>Filter on the lead interactions contact last name field.</p>
   */
  LEAD_INTERACTIONS_CONTACT_LAST_NAME: "LeadInteractionsContactLastName",
  /**
   * <p>Filter on the lead interactions source name field.</p>
   */
  LEAD_INTERACTIONS_SOURCE_NAME: "LeadInteractionsSourceName",
  /**
   * <p>Filter on the lead interactions source type field.</p>
   */
  LEAD_INTERACTIONS_SOURCE_TYPE: "LeadInteractionsSourceType",
  /**
   * <p>Filter on the lead interactions usecase field.</p>
   */
  LEAD_INTERACTIONS_USECASE: "LeadInteractionsUsecase",
  /**
   * <p>Filter on the lead qualification status field.</p>
   */
  LEAD_QUALIFICATION_STATUS: "LeadQualificationStatus",
  /**
   * <p>Filter on the lead readiness score field.</p>
   */
  LEAD_READINESS_SCORE: "LeadReadinessScore",
  /**
   * <p>Filter on the member count field.</p>
   */
  MEMBER_COUNT: "MemberCount",
  /**
   * <p>Filter on the partner id field.</p>
   */
  PARTNER_ID: "PartnerId",
  /**
   * <p>Filter on the prospecting customer company size field.</p>
   */
  PROSPECTING_CUSTOMER_COMPANY_SIZE: "ProspectingCustomerCompanySize",
  /**
   * <p>Filter on the prospecting customer country field.</p>
   */
  PROSPECTING_CUSTOMER_COUNTRY: "ProspectingCustomerCountry",
  /**
   * <p>Filter on the prospecting customer geo field.</p>
   */
  PROSPECTING_CUSTOMER_GEO: "ProspectingCustomerGeo",
  /**
   * <p>Filter on the prospecting customer industry field.</p>
   */
  PROSPECTING_CUSTOMER_INDUSTRY: "ProspectingCustomerIndustry",
  /**
   * <p>Filter on the prospecting customer region field.</p>
   */
  PROSPECTING_CUSTOMER_REGION: "ProspectingCustomerRegion",
  /**
   * <p>Filter on the prospecting customer segment field.</p>
   */
  PROSPECTING_CUSTOMER_SEGMENT: "ProspectingCustomerSegment",
  /**
   * <p>Filter on the prospecting insights marketplace engagement score field.</p>
   */
  PROSPECTING_INSIGHTS_MARKETPLACE_ENGAGEMENT_SCORE: "ProspectingInsightsMarketplaceEngagementScore",
  /**
   * <p>Filter on the prospecting insights solution category field.</p>
   */
  PROSPECTING_INSIGHTS_SOLUTION_CATEGORY: "ProspectingInsightsSolutionCategory",
  /**
   * <p>Filter on the prospecting insights solution sub category field.</p>
   */
  PROSPECTING_INSIGHTS_SOLUTION_SUB_CATEGORY: "ProspectingInsightsSolutionSubCategory",
  /**
   * <p>Filter on the title field.</p>
   */
  TITLE: "Title",
} as const;
/**
 * @public
 */
export type EngagementSearchFilterName = (typeof EngagementSearchFilterName)[keyof typeof EngagementSearchFilterName];

/**
 * @public
 * @enum
 */
export const EngagementSearchSortName = {
  /**
   * <p>Sort by the created at field.</p>
   */
  CREATED_AT: "CreatedAt",
  /**
   * <p>Sort by the engagement id field.</p>
   */
  ENGAGEMENT_ID: "EngagementId",
  /**
   * <p>Sort by the last modified at field.</p>
   */
  LAST_MODIFIED_AT: "LastModifiedAt",
  /**
   * <p>Sort by the lead customer aws maturity field.</p>
   */
  LEAD_CUSTOMER_AWS_MATURITY: "LeadCustomerAwsMaturity",
  /**
   * <p>Sort by the lead customer company name field.</p>
   */
  LEAD_CUSTOMER_COMPANY_NAME: "LeadCustomerCompanyName",
  /**
   * <p>Sort by the lead customer country code field.</p>
   */
  LEAD_CUSTOMER_COUNTRY_CODE: "LeadCustomerCountryCode",
  /**
   * <p>Sort by the lead customer industry field.</p>
   */
  LEAD_CUSTOMER_INDUSTRY: "LeadCustomerIndustry",
  /**
   * <p>Sort by the lead customer market segment field.</p>
   */
  LEAD_CUSTOMER_MARKET_SEGMENT: "LeadCustomerMarketSegment",
  /**
   * <p>Sort by the lead interactions contact business title field.</p>
   */
  LEAD_INTERACTIONS_CONTACT_BUSINESS_TITLE: "LeadInteractionsContactBusinessTitle",
  /**
   * <p>Sort by the lead interactions contact first name field.</p>
   */
  LEAD_INTERACTIONS_CONTACT_FIRST_NAME: "LeadInteractionsContactFirstName",
  /**
   * <p>Sort by the lead interactions contact last name field.</p>
   */
  LEAD_INTERACTIONS_CONTACT_LAST_NAME: "LeadInteractionsContactLastName",
  /**
   * <p>Sort by the lead interactions usecase field.</p>
   */
  LEAD_INTERACTIONS_USECASE: "LeadInteractionsUsecase",
  /**
   * <p>Sort by the lead qualification status field.</p>
   */
  LEAD_QUALIFICATION_STATUS: "LeadQualificationStatus",
  /**
   * <p>Sort by the lead readiness score field.</p>
   */
  LEAD_READINESS_SCORE: "LeadReadinessScore",
  /**
   * <p>Sort by the member count field.</p>
   */
  MEMBER_COUNT: "MemberCount",
  /**
   * <p>Sort by the partner id field.</p>
   */
  PARTNER_ID: "PartnerId",
  /**
   * <p>Sort by the prospecting customer company size field.</p>
   */
  PROSPECTING_CUSTOMER_COMPANY_SIZE: "ProspectingCustomerCompanySize",
  /**
   * <p>Sort by the prospecting customer country field.</p>
   */
  PROSPECTING_CUSTOMER_COUNTRY: "ProspectingCustomerCountry",
  /**
   * <p>Sort by the prospecting customer geo field.</p>
   */
  PROSPECTING_CUSTOMER_GEO: "ProspectingCustomerGeo",
  /**
   * <p>Sort by the prospecting customer industry field.</p>
   */
  PROSPECTING_CUSTOMER_INDUSTRY: "ProspectingCustomerIndustry",
  /**
   * <p>Sort by the prospecting customer region field.</p>
   */
  PROSPECTING_CUSTOMER_REGION: "ProspectingCustomerRegion",
  /**
   * <p>Sort by the prospecting customer segment field.</p>
   */
  PROSPECTING_CUSTOMER_SEGMENT: "ProspectingCustomerSegment",
  /**
   * <p>Sort by the prospecting insights marketplace engagement score field.</p>
   */
  PROSPECTING_INSIGHTS_MARKETPLACE_ENGAGEMENT_SCORE: "ProspectingInsightsMarketplaceEngagementScore",
  /**
   * <p>Sort by the prospecting insights solution category field.</p>
   */
  PROSPECTING_INSIGHTS_SOLUTION_CATEGORY: "ProspectingInsightsSolutionCategory",
  /**
   * <p>Sort by the prospecting insights solution sub category field.</p>
   */
  PROSPECTING_INSIGHTS_SOLUTION_SUB_CATEGORY: "ProspectingInsightsSolutionSubCategory",
  /**
   * <p>Sort by the title field.</p>
   */
  TITLE: "Title",
} as const;
/**
 * @public
 */
export type EngagementSearchSortName = (typeof EngagementSearchSortName)[keyof typeof EngagementSearchSortName];

/**
 * @public
 * @enum
 */
export const ListTasksSortName = {
  START_TIME: "StartTime",
} as const;
/**
 * @public
 */
export type ListTasksSortName = (typeof ListTasksSortName)[keyof typeof ListTasksSortName];

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * @enum
 */
export const ReasonCode = {
  CONTEXT_NOT_FOUND: "ContextNotFound",
  CUSTOMER_PROJECT_CONTEXT_NOT_PERMITTED: "CustomerProjectContextNotPermitted",
  DISQUALIFIED_LEAD_NOT_PERMITTED: "DisqualifiedLeadNotPermitted",
  ENGAGEMENT_ACCESS_DENIED: "EngagementAccessDenied",
  ENGAGEMENT_CONFLICT: "EngagementConflict",
  ENGAGEMENT_INVITATION_CONFLICT: "EngagementInvitationConflict",
  ENGAGEMENT_VALIDATION_FAILED: "EngagementValidationFailed",
  INTERNAL_ERROR: "InternalError",
  INVITATION_ACCESS_DENIED: "InvitationAccessDenied",
  INVITATION_VALIDATION_FAILED: "InvitationValidationFailed",
  OPPORTUNITY_ACCESS_DENIED: "OpportunityAccessDenied",
  OPPORTUNITY_CONFLICT: "OpportunityConflict",
  OPPORTUNITY_SUBMISSION_FAILED: "OpportunitySubmissionFailed",
  OPPORTUNITY_VALIDATION_FAILED: "OpportunityValidationFailed",
  REQUEST_THROTTLED: "RequestThrottled",
  RESOURCE_SNAPSHOT_ACCESS_DENIED: "ResourceSnapshotAccessDenied",
  RESOURCE_SNAPSHOT_CONFLICT: "ResourceSnapshotConflict",
  RESOURCE_SNAPSHOT_JOB_ACCESS_DENIED: "ResourceSnapshotJobAccessDenied",
  RESOURCE_SNAPSHOT_JOB_CONFLICT: "ResourceSnapshotJobConflict",
  RESOURCE_SNAPSHOT_JOB_VALIDATION_FAILED: "ResourceSnapshotJobValidationFailed",
  RESOURCE_SNAPSHOT_VALIDATION_FAILED: "ResourceSnapshotValidationFailed",
  SERVICE_QUOTA_EXCEEDED: "ServiceQuotaExceeded",
} as const;
/**
 * @public
 */
export type ReasonCode = (typeof ReasonCode)[keyof typeof ReasonCode];

/**
 * @public
 * @enum
 */
export const ReadinessLevel = {
  /**
   * <p>Leads with low potential that are suited to a nurture campaign.</p>
   */
  LOW_POTENTIAL: "LowPotential",
  /**
   * <p>Leads that are suited to a marketing campaign rather than direct outreach.</p>
   */
  MARKETING_READY: "MarketingReady",
  /**
   * <p>Leads that are ready for direct sales outreach.</p>
   */
  SALES_READY: "SalesReady",
} as const;
/**
 * @public
 */
export type ReadinessLevel = (typeof ReadinessLevel)[keyof typeof ReadinessLevel];

/**
 * @public
 * @enum
 */
export const EngagementGroupSortName = {
  /**
   * <p>Sort by the number of engagements in the group.</p>
   */
  COUNT: "Count",
  /**
   * <p>Sort by the date and time when the group was last updated.</p>
   */
  UPDATED_AT: "UpdatedAt",
} as const;
/**
 * @public
 */
export type EngagementGroupSortName = (typeof EngagementGroupSortName)[keyof typeof EngagementGroupSortName];

/**
 * @public
 * @enum
 */
export const OpportunityType = {
  EXPANSION: "Expansion",
  FLAT_RENEWAL: "Flat Renewal",
  NET_NEW_BUSINESS: "Net New Business",
} as const;
/**
 * @public
 */
export type OpportunityType = (typeof OpportunityType)[keyof typeof OpportunityType];

/**
 * @public
 * @enum
 */
export const ReceiverResponsibility = {
  CO_SELL_FACILITATOR: "Co-Sell Facilitator",
  DISTRIBUTOR: "Distributor",
  FACILITATOR: "Facilitator",
  HARDWARE_PARTNER: "Hardware Partner",
  MANAGED_SERVICE_PROVIDER: "Managed Service Provider",
  RESELLER: "Reseller",
  SERVICES_PARTNER: "Services Partner",
  SOFTWARE_PARTNER: "Software Partner",
  TRAINING_PARTNER: "Training Partner",
} as const;
/**
 * @public
 */
export type ReceiverResponsibility = (typeof ReceiverResponsibility)[keyof typeof ReceiverResponsibility];

/**
 * @public
 * @enum
 */
export const EngagementInvitationPayloadType = {
  ACCOUNT_PLANNING_INVITATION: "AccountPlanningInvitation",
  LEAD_INVITATION: "LeadInvitation",
  OPPORTUNITY_INVITATION: "OpportunityInvitation",
} as const;
/**
 * @public
 */
export type EngagementInvitationPayloadType =
  (typeof EngagementInvitationPayloadType)[keyof typeof EngagementInvitationPayloadType];

/**
 * @public
 * @enum
 */
export const InvitationStatus = {
  ACCEPTED: "ACCEPTED",
  EXPIRED: "EXPIRED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus];

/**
 * @public
 * @enum
 */
export const ParticipantType = {
  RECEIVER: "RECEIVER",
  SENDER: "SENDER",
} as const;
/**
 * @public
 */
export type ParticipantType = (typeof ParticipantType)[keyof typeof ParticipantType];

/**
 * @public
 * @enum
 */
export const OpportunityEngagementInvitationSortName = {
  INVITATION_DATE: "InvitationDate",
} as const;
/**
 * @public
 */
export type OpportunityEngagementInvitationSortName =
  (typeof OpportunityEngagementInvitationSortName)[keyof typeof OpportunityEngagementInvitationSortName];

/**
 * @public
 * @enum
 */
export const ClosedLostReason = {
  CUSTOMER_DEFICIENCY: "Customer Deficiency",
  CUSTOMER_EXPERIENCE: "Customer Experience",
  DELAY_CANCELLATION_OF_PROJECT: "Delay / Cancellation of Project",
  FINANCIALCOMMERCIAL: "Financial/Commercial",
  LEGAL_TAX_REGULATORY: "Legal / Tax / Regulatory",
  LOST_TO_COMPETITOR_GOOGLE: "Lost to Competitor - Google",
  LOST_TO_COMPETITOR_MICROSOFT: "Lost to Competitor - Microsoft",
  LOST_TO_COMPETITOR_OTHER: "Lost to Competitor - Other",
  LOST_TO_COMPETITOR_SOFTLAYER: "Lost to Competitor - SoftLayer",
  LOST_TO_COMPETITOR_VMWARE: "Lost to Competitor - VMWare",
  NO_OPPORTUNITY: "No Opportunity",
  ON_PREMISES_DEPLOYMENT: "On Premises Deployment",
  OTHER: "Other",
  PARTNER_GAP: "Partner Gap",
  PEOPLERELATIONSHIPGOVERNANCE: "People/Relationship/Governance",
  PRICE: "Price",
  PRODUCTTECHNOLOGY: "Product/Technology",
  SECURITY_COMPLIANCE: "Security / Compliance",
  TECHNICAL_LIMITATIONS: "Technical Limitations",
} as const;
/**
 * @public
 */
export type ClosedLostReason = (typeof ClosedLostReason)[keyof typeof ClosedLostReason];

/**
 * @public
 * @enum
 */
export const ReviewStatus = {
  ACTION_REQUIRED: "Action Required",
  APPROVED: "Approved",
  IN_REVIEW: "In review",
  PENDING_SUBMISSION: "Pending Submission",
  REJECTED: "Rejected",
  SUBMITTED: "Submitted",
} as const;
/**
 * @public
 */
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus];

/**
 * @public
 * @enum
 */
export const Stage = {
  BUSINESS_VALIDATION: "Business Validation",
  CLOSED_LOST: "Closed Lost",
  COMMITTED: "Committed",
  LAUNCHED: "Launched",
  PROSPECT: "Prospect",
  QUALIFIED: "Qualified",
  TECHNICAL_VALIDATION: "Technical Validation",
} as const;
/**
 * @public
 */
export type Stage = (typeof Stage)[keyof typeof Stage];

/**
 * @public
 * @enum
 */
export const Channel = {
  AWS_MARKETING_CENTRAL: "AWS Marketing Central",
  CONTENT_SYNDICATION: "Content Syndication",
  DISPLAY: "Display",
  EMAIL: "Email",
  LIVE_EVENT: "Live Event",
  OUT_OF_HOME: "Out Of Home (OOH)",
  PRINT: "Print",
  SEARCH: "Search",
  SOCIAL: "Social",
  TELEMARKETING: "Telemarketing",
  TV: "TV",
  VIDEO: "Video",
  VIRTUAL_EVENT: "Virtual Event",
} as const;
/**
 * @public
 */
export type Channel = (typeof Channel)[keyof typeof Channel];

/**
 * @public
 * @enum
 */
export const MarketingSource = {
  MARKETING_ACTIVITY: "Marketing Activity",
  NONE: "None",
} as const;
/**
 * @public
 */
export type MarketingSource = (typeof MarketingSource)[keyof typeof MarketingSource];

/**
 * @public
 * @enum
 */
export const NationalSecurity = {
  NO: "No",
  YES: "Yes",
} as const;
/**
 * @public
 */
export type NationalSecurity = (typeof NationalSecurity)[keyof typeof NationalSecurity];

/**
 * @public
 * @enum
 */
export const PrimaryNeedFromAws = {
  CO_SELL_ARCHITECTURAL_VALIDATION: "Co-Sell - Architectural Validation",
  CO_SELL_BUSINESS_PRESENTATION: "Co-Sell - Business Presentation",
  CO_SELL_COMPETITIVE_INFORMATION: "Co-Sell - Competitive Information",
  CO_SELL_DEAL_SUPPORT: "Co-Sell - Deal Support",
  CO_SELL_PRICING_ASSISTANCE: "Co-Sell - Pricing Assistance",
  CO_SELL_SUPPORT_FOR_PUBLIC_TENDER_RFX: "Co-Sell - Support for Public Tender / RFx",
  CO_SELL_TECHNICAL_CONSULTATION: "Co-Sell - Technical Consultation",
  CO_SELL_TOTAL_COST_OF_OWNERSHIP_EVALUATION: "Co-Sell - Total Cost of Ownership Evaluation",
} as const;
/**
 * @public
 */
export type PrimaryNeedFromAws = (typeof PrimaryNeedFromAws)[keyof typeof PrimaryNeedFromAws];

/**
 * @public
 * @enum
 */
export const CompetitorName = {
  AKAMAI: "Akamai",
  ALICLOUD: "AliCloud",
  CO_LOCATION: "Co-location",
  GOOGLE_CLOUD_PLATFORM: "Google Cloud Platform",
  IBM_SOFTLAYER: "IBM Softlayer",
  MICROSOFT_AZURE: "Microsoft Azure",
  NO_COMPETITION: "No Competition",
  ON_PREM: "On-Prem",
  ORACLE_CLOUD: "Oracle Cloud",
  OTHER: "*Other",
  OTHER_COST_OPTIMIZATION: "Other- Cost Optimization",
} as const;
/**
 * @public
 */
export type CompetitorName = (typeof CompetitorName)[keyof typeof CompetitorName];

/**
 * @public
 * @enum
 */
export const DeliveryModel = {
  BYOL_OR_AMI: "BYOL or AMI",
  MANAGED_SERVICES: "Managed Services",
  OTHER: "Other",
  PROFESSIONAL_SERVICES: "Professional Services",
  RESELL: "Resell",
  SAAS_OR_PAAS: "SaaS or PaaS",
} as const;
/**
 * @public
 */
export type DeliveryModel = (typeof DeliveryModel)[keyof typeof DeliveryModel];

/**
 * @public
 * @enum
 */
export const ExpectedContractDurationTerm = {
  MONTHS: "Months",
} as const;
/**
 * @public
 */
export type ExpectedContractDurationTerm =
  (typeof ExpectedContractDurationTerm)[keyof typeof ExpectedContractDurationTerm];

/**
 * @public
 * @enum
 */
export const SalesActivity = {
  AGREED_ON_SOLUTION_TO_BUSINESS_PROBLEM: "Agreed on solution to Business Problem",
  COMPLETED_ACTION_PLAN: "Completed Action Plan",
  CONDUCTED_POC_DEMO: "Conducted POC / Demo",
  CUSTOMER_HAS_SHOWN_INTEREST: "Customer has shown interest in solution",
  FINALIZED_DEPLOYMENT_NEEDS: "Finalized Deployment Need",
  INITIALIZED_DISCUSSIONS_WITH_CUSTOMER: "Initialized discussions with customer",
  IN_EVALUATION_PLANNING_STAGE: "In evaluation / planning stage",
  SOW_SIGNED: "SOW Signed",
} as const;
/**
 * @public
 */
export type SalesActivity = (typeof SalesActivity)[keyof typeof SalesActivity];

/**
 * @public
 * @enum
 */
export const RevenueModel = {
  CONTRACT: "Contract",
  PAY_AS_YOU_GO: "Pay-as-you-go",
  SUBSCRIPTION: "Subscription",
} as const;
/**
 * @public
 */
export type RevenueModel = (typeof RevenueModel)[keyof typeof RevenueModel];

/**
 * @public
 * @enum
 */
export const OpportunitySortName = {
  CREATED_DATE: "CreatedDate",
  CUSTOMER_COMPANY_NAME: "CustomerCompanyName",
  IDENTIFIER: "Identifier",
  LAST_MODIFIEDDATE: "LastModifiedDate",
  TARGET_CLOSE_DATE: "TargetCloseDate",
} as const;
/**
 * @public
 */
export type OpportunitySortName = (typeof OpportunitySortName)[keyof typeof OpportunitySortName];

/**
 * @public
 * @enum
 */
export const OpportunitySearchFilterName = {
  APN_PROGRAMS: "ApnPrograms",
  AWS_ACCOUNT_ID: "AwsAccountId",
  AWS_MARKETPLACE_SOLUTION: "AwsMarketplaceSolution",
  COSELL_MOTION: "CosellMotion",
  COUNTRY_CODE: "CountryCode",
  CREATED_DATE: "CreatedDate",
  CUSTOMER_COMPANY_NAME: "CustomerCompanyName",
  ENGAGEMENT_SCORE: "EngagementScore",
  ESTIMATED_MRR: "EstimatedMrr",
  INDUSTRY: "Industry",
  LAST_MODIFIED_DATE: "LastModifiedDate",
  NEXT_STEP: "NextStep",
  OFFER_ID: "OfferId",
  OFFER_SET_ID: "OfferSetId",
  OPPORTUNITY_ID: "OpportunityId",
  OPPORTUNITY_OWNER: "OpportunityOwner",
  OPPORTUNITY_TYPE: "OpportunityType",
  ORIGIN: "Origin",
  PARTNER_OPPORTUNITY_IDENTIFIER: "PartnerOpportunityIdentifier",
  PARTNER_PROJECT_TITLE: "PartnerProjectTitle",
  REVIEW_STATUS: "ReviewStatus",
  STAGE: "Stage",
  TAGS: "Tags",
  TARGET_CLOSE_DATE: "TargetCloseDate",
} as const;
/**
 * @public
 */
export type OpportunitySearchFilterName =
  (typeof OpportunitySearchFilterName)[keyof typeof OpportunitySearchFilterName];

/**
 * @public
 * @enum
 */
export const OpportunitySearchSortName = {
  APN_PROGRAMS: "ApnPrograms",
  AWS_ACCOUNT_ID: "AwsAccountId",
  COSELL_MOTION: "CosellMotion",
  COUNTRY_CODE: "CountryCode",
  CREATED_DATE: "CreatedDate",
  CUSTOMER_COMPANY_NAME: "CustomerCompanyName",
  ENGAGEMENT_SCORE: "EngagementScore",
  ESTIMATED_MRR: "EstimatedMrr",
  INDUSTRY: "Industry",
  LAST_MODIFIED_DATE: "LastModifiedDate",
  NEXT_STEP: "NextStep",
  OFFER_ID: "OfferId",
  OFFER_SET_ID: "OfferSetId",
  OPPORTUNITY_ID: "OpportunityId",
  OPPORTUNITY_OWNER: "OpportunityOwner",
  OPPORTUNITY_TYPE: "OpportunityType",
  ORIGIN: "Origin",
  PARTNER_OPPORTUNITY_IDENTIFIER: "PartnerOpportunityIdentifier",
  PARTNER_PROJECT_TITLE: "PartnerProjectTitle",
  REVIEW_STATUS: "ReviewStatus",
  STAGE: "Stage",
  TAGS: "Tags",
  TARGET_CLOSE_DATE: "TargetCloseDate",
} as const;
/**
 * @public
 */
export type OpportunitySearchSortName = (typeof OpportunitySearchSortName)[keyof typeof OpportunitySearchSortName];

/**
 * @public
 * @enum
 */
export const SearchEngagementScore = {
  HIGH: "High",
  LOW: "Low",
  MEDIUM: "Medium",
} as const;
/**
 * @public
 */
export type SearchEngagementScore = (typeof SearchEngagementScore)[keyof typeof SearchEngagementScore];

/**
 * @public
 * @enum
 */
export const BulkFileFormat = {
  CSV: "CSV",
} as const;
/**
 * @public
 */
export type BulkFileFormat = (typeof BulkFileFormat)[keyof typeof BulkFileFormat];

/**
 * @public
 * @enum
 */
export const BulkOperationType = {
  /**
   * <p>The job creates new opportunities.</p>
   */
  BULK_CREATE: "BULK_CREATE",
  /**
   * <p>The job updates existing opportunities.</p>
   */
  BULK_UPDATE: "BULK_UPDATE",
} as const;
/**
 * @public
 */
export type BulkOperationType = (typeof BulkOperationType)[keyof typeof BulkOperationType];

/**
 * @public
 * @enum
 */
export const ProspectingTaskStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ProspectingTaskStatus = (typeof ProspectingTaskStatus)[keyof typeof ProspectingTaskStatus];

/**
 * @public
 * @enum
 */
export const ProspectingFromEngagementTaskSortName = {
  FailedEngagementCount: "FailedEngagementCount",
  StartTime: "StartTime",
  TaskName: "TaskName",
} as const;
/**
 * @public
 */
export type ProspectingFromEngagementTaskSortName =
  (typeof ProspectingFromEngagementTaskSortName)[keyof typeof ProspectingFromEngagementTaskSortName];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  OPPORTUNITY: "Opportunity",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ResourceSnapshotJobStatus = {
  RUNNING: "Running",
  STOPPED: "Stopped",
} as const;
/**
 * @public
 */
export type ResourceSnapshotJobStatus = (typeof ResourceSnapshotJobStatus)[keyof typeof ResourceSnapshotJobStatus];

/**
 * @public
 * @enum
 */
export const SortBy = {
  CREATED_DATE: "CreatedDate",
} as const;
/**
 * @public
 */
export type SortBy = (typeof SortBy)[keyof typeof SortBy];

/**
 * @public
 * @enum
 */
export const SolutionSortName = {
  CATEGORY: "Category",
  CREATEDDATE: "CreatedDate",
  IDENTIFIER: "Identifier",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type SolutionSortName = (typeof SolutionSortName)[keyof typeof SolutionSortName];

/**
 * @public
 * @enum
 */
export const SolutionStatus = {
  ACTIVE: "Active",
  DRAFT: "Draft",
  INACTIVE: "Inactive",
} as const;
/**
 * @public
 */
export type SolutionStatus = (typeof SolutionStatus)[keyof typeof SolutionStatus];

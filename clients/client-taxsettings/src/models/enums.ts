// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AddressRoleType = {
  BILLING_ADDRESS: "BillingAddress",
  CONTACT_ADDRESS: "ContactAddress",
  TAX_ADDRESS: "TaxAddress",
} as const;
/**
 * @public
 */
export type AddressRoleType = (typeof AddressRoleType)[keyof typeof AddressRoleType];

/**
 * @public
 * @enum
 */
export const PersonType = {
  BUSINESS: "Business",
  LEGAL_PERSON: "Legal Person",
  PHYSICAL_PERSON: "Physical Person",
} as const;
/**
 * @public
 */
export type PersonType = (typeof PersonType)[keyof typeof PersonType];

/**
 * @public
 * @enum
 */
export const IndonesiaTaxRegistrationNumberType = {
  NIK: "NIK",
  NITKU: "NITKU",
  NPWP: "NPWP",
  PASSPORT_NUMBER: "PassportNumber",
} as const;
/**
 * @public
 */
export type IndonesiaTaxRegistrationNumberType =
  (typeof IndonesiaTaxRegistrationNumberType)[keyof typeof IndonesiaTaxRegistrationNumberType];

/**
 * @public
 * @enum
 */
export const IsraelCustomerType = {
  BUSINESS: "Business",
  INDIVIDUAL: "Individual",
} as const;
/**
 * @public
 */
export type IsraelCustomerType = (typeof IsraelCustomerType)[keyof typeof IsraelCustomerType];

/**
 * @public
 * @enum
 */
export const IsraelDealerType = {
  AUTHORIZED: "Authorized",
  NON_AUTHORIZED: "Non-authorized",
} as const;
/**
 * @public
 */
export type IsraelDealerType = (typeof IsraelDealerType)[keyof typeof IsraelDealerType];

/**
 * @public
 * @enum
 */
export const MalaysiaServiceTaxCode = {
  CONSULTANCY: "Consultancy",
  DIGITAL_SVC_ELECTRONIC_MEDIUM: "Digital Service And Electronic Medium",
  IT_SERVICES: "IT Services",
  TRAINING_OR_COACHING: "Training Or Coaching",
} as const;
/**
 * @public
 */
export type MalaysiaServiceTaxCode = (typeof MalaysiaServiceTaxCode)[keyof typeof MalaysiaServiceTaxCode];

/**
 * @public
 * @enum
 */
export const TaxRegistrationNumberType = {
  LOCAL_REGISTRATION_NUMBER: "LocalRegistrationNumber",
  TAX_REGISTRATION_NUMBER: "TaxRegistrationNumber",
} as const;
/**
 * @public
 */
export type TaxRegistrationNumberType = (typeof TaxRegistrationNumberType)[keyof typeof TaxRegistrationNumberType];

/**
 * @public
 * @enum
 */
export const SaudiArabiaTaxRegistrationNumberType = {
  COMMERCIAL_REGISTRATION_NUMBER: "CommercialRegistrationNumber",
  TAX_IDENTIFICATION_NUMBER: "TaxIdentificationNumber",
  TAX_REGISTRATION_NUMBER: "TaxRegistrationNumber",
} as const;
/**
 * @public
 */
export type SaudiArabiaTaxRegistrationNumberType =
  (typeof SaudiArabiaTaxRegistrationNumberType)[keyof typeof SaudiArabiaTaxRegistrationNumberType];

/**
 * @public
 * @enum
 */
export const RegistrationType = {
  INTRA_EU: "Intra-EU",
  LOCAL: "Local",
} as const;
/**
 * @public
 */
export type RegistrationType = (typeof RegistrationType)[keyof typeof RegistrationType];

/**
 * @public
 * @enum
 */
export const Industries = {
  BANKS: "Banks",
  CIRCULATING_ORG: "CirculatingOrg",
  DEVELOPMENT_AGENCIES: "DevelopmentAgencies",
  INSURANCE: "Insurance",
  PENSION_AND_BENEFIT_FUNDS: "PensionAndBenefitFunds",
  PROFESSIONAL_ORG: "ProfessionalOrg",
} as const;
/**
 * @public
 */
export type Industries = (typeof Industries)[keyof typeof Industries];

/**
 * @public
 * @enum
 */
export const UkraineTrnType = {
  BUSINESS: "Business",
  INDIVIDUAL: "Individual",
} as const;
/**
 * @public
 */
export type UkraineTrnType = (typeof UkraineTrnType)[keyof typeof UkraineTrnType];

/**
 * @public
 * @enum
 */
export const UzbekistanTaxRegistrationNumberType = {
  BUSINESS: "Business",
  INDIVIDUAL: "Individual",
} as const;
/**
 * @public
 */
export type UzbekistanTaxRegistrationNumberType =
  (typeof UzbekistanTaxRegistrationNumberType)[keyof typeof UzbekistanTaxRegistrationNumberType];

/**
 * @public
 * @enum
 */
export const TaxRegistrationType = {
  CNPJ: "CNPJ",
  CPF: "CPF",
  GST: "GST",
  NRIC: "NRIC",
  SST: "SST",
  TIN: "TIN",
  VAT: "VAT",
} as const;
/**
 * @public
 */
export type TaxRegistrationType = (typeof TaxRegistrationType)[keyof typeof TaxRegistrationType];

/**
 * @public
 * @enum
 */
export const Sector = {
  BUSINESS: "Business",
  INDIVIDUAL: "Individual",
  PUBLIC_INSTITUTIONS: "Government",
} as const;
/**
 * @public
 */
export type Sector = (typeof Sector)[keyof typeof Sector];

/**
 * @public
 * @enum
 */
export const TaxRegistrationStatus = {
  DELETED: "Deleted",
  PENDING: "Pending",
  REJECTED: "Rejected",
  VERIFIED: "Verified",
} as const;
/**
 * @public
 */
export type TaxRegistrationStatus = (typeof TaxRegistrationStatus)[keyof typeof TaxRegistrationStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionErrorCode = {
  EXPIRED_TOKEN: "ExpiredToken",
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  INVALID_TOKEN: "InvalidToken",
  MALFORMED_TOKEN: "MalformedToken",
  MISSING_INPUT: "MissingInput",
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
export const EntityExemptionAccountStatus = {
  Expired: "Expired",
  None: "None",
  Pending: "Pending",
  Valid: "Valid",
} as const;
/**
 * @public
 */
export type EntityExemptionAccountStatus =
  (typeof EntityExemptionAccountStatus)[keyof typeof EntityExemptionAccountStatus];

/**
 * @public
 * @enum
 */
export const HeritageStatus = {
  OptIn: "OptIn",
  OptOut: "OptOut",
} as const;
/**
 * @public
 */
export type HeritageStatus = (typeof HeritageStatus)[keyof typeof HeritageStatus];

/**
 * @public
 * @enum
 */
export const SupplementalTaxRegistrationType = {
  VAT: "VAT",
} as const;
/**
 * @public
 */
export type SupplementalTaxRegistrationType =
  (typeof SupplementalTaxRegistrationType)[keyof typeof SupplementalTaxRegistrationType];

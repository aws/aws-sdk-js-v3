// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { TaxSettingsServiceException as __BaseException } from "./TaxSettingsServiceException";

/**
 * <p>The access is denied for the Amazon Web ServicesSupport API.
 *     </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p> The details of the address associated with the TRN information. </p>
 * @public
 */
export interface Address {
  /**
   * <p>The first line of the address. </p>
   * @public
   */
  addressLine1: string | undefined;

  /**
   * <p>The second line of the address, if applicable. </p>
   * @public
   */
  addressLine2?: string | undefined;

  /**
   * <p> The third line of the address, if applicable. Currently, the Tax Settings API accepts the
   *         <code>addressLine3</code> parameter only for Saudi Arabia. When you specify a TRN in Saudi
   *       Arabia, you must enter the <code>addressLine3</code> and specify the building number for the
   *       address. For example, you might enter <code>1234</code>.</p>
   * @public
   */
  addressLine3?: string | undefined;

  /**
   * <p>The district or county the address is located. </p>
   *          <note>
   *             <p>For addresses in Brazil, this parameter uses the name of the neighborhood. When you set
   *         a TRN in Brazil, use <code>districtOrCounty</code> for the neighborhood name.</p>
   *          </note>
   * @public
   */
  districtOrCounty?: string | undefined;

  /**
   * <p>The city that the address is in. </p>
   * @public
   */
  city: string | undefined;

  /**
   * <p>The state, region, or province that the address is located. This field is only required for Canada, India, United Arab Emirates, Romania, and Brazil (CPF). It is optional for all other countries.</p>
   *          <p>If this is required for tax settings, use the same name as shown on the <b>Tax Settings</b> page.</p>
   * @public
   */
  stateOrRegion?: string | undefined;

  /**
   * <p> The postal code associated with the address. </p>
   * @public
   */
  postalCode: string | undefined;

  /**
   * <p>The country code for the country that the address is in. </p>
   * @public
   */
  countryCode: string | undefined;
}

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
 * <p>The jurisdiction details of the TRN information of the customers. This doesn't contain
 *       full legal address, and contains only country code and state/region/province. </p>
 * @public
 */
export interface Jurisdiction {
  /**
   * <p> The state, region, or province associated with the country of the jurisdiction, if
   *       applicable. </p>
   * @public
   */
  stateOrRegion?: string | undefined;

  /**
   * <p> The country code of the jurisdiction. </p>
   * @public
   */
  countryCode: string | undefined;
}

/**
 * <p>
 *       The meta data information associated with the account.
 *     </p>
 * @public
 */
export interface AccountMetaData {
  /**
   * <p>
   *       The Amazon Web Services accounts name.
   *     </p>
   * @public
   */
  accountName?: string | undefined;

  /**
   * <p>
   *       Seller information associated with the account.
   *     </p>
   * @public
   */
  seller?: string | undefined;

  /**
   * <p> The details of the address associated with the TRN information. </p>
   * @public
   */
  address?: Address | undefined;

  /**
   * <p>
   *       The type of address associated with the legal profile.
   *     </p>
   * @public
   */
  addressType?: AddressRoleType | undefined;

  /**
   * <p>
   *       Address roles associated with the account containing country code information.
   *     </p>
   * @public
   */
  addressRoleMap?: Partial<Record<AddressRoleType, Jurisdiction>> | undefined;
}

/**
 * <p>
 *       Tax inheritance information associated with the account.
 *     </p>
 * @public
 */
export interface TaxInheritanceDetails {
  /**
   * <p>
   *       Tax inheritance parent account information associated with the account.
   *     </p>
   * @public
   */
  parentEntityId?: string | undefined;

  /**
   * <p>
   *       Tax inheritance reason information associated with the account.
   *     </p>
   * @public
   */
  inheritanceObtainedReason?: string | undefined;
}

/**
 * <p>Additional tax information associated with your TRN in Brazil.</p>
 * @public
 */
export interface BrazilAdditionalInfo {
  /**
   * <p>The Cadastro de Contribuintes Mobiliários (CCM) code for your TRN in Brazil. This only applies for a CNPJ tax type for the São Paulo municipality.</p>
   * @public
   */
  ccmCode?: string | undefined;

  /**
   * <p>Legal nature of business, based on your TRN in Brazil. This only applies for a CNPJ tax
   *       type.</p>
   * @public
   */
  legalNatureCode?: string | undefined;
}

/**
 * <p> Additional tax information associated with your TRN in Canada .</p>
 * @public
 */
export interface CanadaAdditionalInfo {
  /**
   * <p> The provincial sales tax ID for your TRN in Canada. This parameter can represent the
   *       following: </p>
   *          <ul>
   *             <li>
   *                <p>Provincial sales tax ID number for British Columbia and Saskatchewan provinces</p>
   *             </li>
   *             <li>
   *                <p>Manitoba retail sales tax ID number for Manitoba province</p>
   *             </li>
   *             <li>
   *                <p>Quebec sales tax ID number for Quebec province</p>
   *             </li>
   *          </ul>
   *          <p>The Tax Setting API only accepts this parameter if the TRN is specified  for the previous
   *       provinces. For other provinces, the Tax Settings API doesn't accept this parameter. </p>
   * @public
   */
  provincialSalesTaxId?: string | undefined;

  /**
   * <p>
   *       The Quebec Sales Tax ID number. Leave blank if you do not have a Quebec Sales Tax ID number.
   *     </p>
   * @public
   */
  canadaQuebecSalesTaxNumber?: string | undefined;

  /**
   * <p>
   *       Manitoba Retail Sales Tax ID number. Customers purchasing Amazon Web Services services for resale in Manitoba must provide a valid Retail Sales Tax ID number for Manitoba. Leave this blank if you do not have a Retail Sales Tax ID number in Manitoba or are not purchasing Amazon Web Services services for resale.
   *     </p>
   * @public
   */
  canadaRetailSalesTaxNumber?: string | undefined;

  /**
   * <p> The value for this parameter must be <code>true</code> if the
   *         <code>provincialSalesTaxId</code> value is provided for a TRN in British Columbia,
   *       Saskatchewan, or Manitoba provinces. </p>
   *          <p>To claim a provincial sales tax (PST) and retail sales tax (RST) reseller exemption, you
   *       must confirm that purchases  from this account were made for resale. Otherwise, remove the PST
   *       or RST number from the <code>provincialSalesTaxId</code> parameter from your request.</p>
   * @public
   */
  isResellerAccount?: boolean | undefined;
}

/**
 * <p>Additional tax information to specify for a TRN in Egypt.</p>
 * @public
 */
export interface EgyptAdditionalInfo {
  /**
   * <p>The unique identification number provided by the Egypt Tax Authority.</p>
   * @public
   */
  uniqueIdentificationNumber?: string | undefined;

  /**
   * <p>The expiration date of the unique identification number provided by the Egypt Tax Authority.</p>
   * @public
   */
  uniqueIdentificationNumberExpirationDate?: string | undefined;
}

/**
 * <p> Additional tax information associated with your TRN in Estonia.</p>
 * @public
 */
export interface EstoniaAdditionalInfo {
  /**
   * <p> Registry commercial code (RCC) for your TRN in Estonia. This value is an eight-numeric
   *       string, such as <code>12345678</code>.</p>
   * @public
   */
  registryCommercialCode: string | undefined;
}

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
 * <p>
 *       Additional tax information associated with your TRN in Georgia.
 *     </p>
 * @public
 */
export interface GeorgiaAdditionalInfo {
  /**
   * <p>
   *       The legal person or physical person assigned to this TRN in Georgia.
   *     </p>
   * @public
   */
  personType: PersonType | undefined;
}

/**
 * <p>Additional tax information to specify for a TRN in Greece.
 *     </p>
 * @public
 */
export interface GreeceAdditionalInfo {
  /**
   * <p>The code of contracting authority for e-invoicing.</p>
   * @public
   */
  contractingAuthorityCode?: string | undefined;
}

/**
 * <p>
 *       Additional tax information in India.
 *     </p>
 * @public
 */
export interface IndiaAdditionalInfo {
  /**
   * <p>
   *       India pan information associated with the account.
   *     </p>
   * @public
   */
  pan?: string | undefined;
}

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
 * <p> Additional tax information associated with your TRN in Israel.</p>
 * @public
 */
export interface IsraelAdditionalInfo {
  /**
   * <p> Dealer type for your TRN in Israel. If you're not a local authorized dealer with an
   *       Israeli VAT ID, specify your tax identification number so that Amazon Web Services can send you
   *       a compliant tax invoice.</p>
   * @public
   */
  dealerType: IsraelDealerType | undefined;

  /**
   * <p> Customer type for your TRN in Israel. The value can be <code>Business</code> or
   *         <code>Individual</code>. Use <code>Business</code>for entities such as not-for-profit and
   *       financial institutions.</p>
   * @public
   */
  customerType: IsraelCustomerType | undefined;
}

/**
 * <p>
 *       Additional tax information associated with your TRN in Italy.
 *     </p>
 * @public
 */
export interface ItalyAdditionalInfo {
  /**
   * <p>
   *       Additional tax information to specify for a TRN in Italy. Use CodiceDestinatario to receive your invoices via web service (API) or FTP.
   *     </p>
   * @public
   */
  sdiAccountId?: string | undefined;

  /**
   * <p>
   *       The tender procedure identification code.
   *     </p>
   * @public
   */
  cigNumber?: string | undefined;

  /**
   * <p>
   *       Additional tax information to specify for a TRN in Italy. This is managed by the Interministerial Committee for Economic Planning (CIPE) which characterizes every public investment project (Individual Project Code).
   *     </p>
   * @public
   */
  cupNumber?: string | undefined;

  /**
   * <p>List of service tax codes for your TRN in Italy. You can use your customer tax code as part of a VAT Group.
   *     </p>
   * @public
   */
  taxCode?: string | undefined;
}

/**
 * <p>Additional tax information associated with your TRN in Kenya.</p>
 * @public
 */
export interface KenyaAdditionalInfo {
  /**
   * <p>The legal person or physical person assigned to this TRN in Kenya.</p>
   * @public
   */
  personType: PersonType | undefined;
}

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
 * <p> Additional tax information associated with your TRN in Malaysia.</p>
 * @public
 */
export interface MalaysiaAdditionalInfo {
  /**
   * <p>List of service tax codes for your TRN in Malaysia.</p>
   * @public
   */
  serviceTaxCodes?: MalaysiaServiceTaxCode[] | undefined;

  /**
   * <p>The tax information number in Malaysia.
   *     </p>
   *          <p>For individual, you can specify the <code>taxInformationNumber</code> in <code>MalaysiaAdditionalInfo</code> with NRIC type, and a valid MyKad or NRIC number. For business resellers, you must specify a <code>businessRegistrationNumber</code> and <code>taxInformationNumber</code> in <code>MalaysiaAdditionalInfo</code> with a sales and service tax (SST) type and a valid SST number.
   *     </p>
   *          <p>For business resellers with service codes, you must specify <code>businessRegistrationNumber</code>, <code>taxInformationNumber</code>, and distinct <code>serviceTaxCodes</code> in <code>MalaysiaAdditionalInfo</code> with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you’re an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number.</p>
   * @public
   */
  taxInformationNumber?: string | undefined;

  /**
   * <p>The tax registration number (TRN) in Malaysia. </p>
   *          <p>For individual, you can specify the <code>taxInformationNumber</code> in <code>MalaysiaAdditionalInfo</code> with NRIC type, and a valid MyKad or NRIC number. For business, you must specify a <code>businessRegistrationNumber</code> in <code>MalaysiaAdditionalInfo</code> with a TIN type and tax identification number. For business resellers, you must specify a <code>businessRegistrationNumber</code> and <code>taxInformationNumber</code> in <code>MalaysiaAdditionalInfo</code> with a sales and service tax (SST) type and a valid SST number.
   *     </p>
   *          <p>For business resellers with service codes, you must specify <code>businessRegistrationNumber</code>, <code>taxInformationNumber</code>, and distinct <code>serviceTaxCodes</code> in <code>MalaysiaAdditionalInfo</code> with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you’re an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number.</p>
   * @public
   */
  businessRegistrationNumber?: string | undefined;
}

/**
 * <p>
 *       Additional tax information associated with your TRN in Poland.
 *     </p>
 * @public
 */
export interface PolandAdditionalInfo {
  /**
   * <p>
   *       The individual tax registration number (NIP). Individual NIP is valid for other taxes excluding VAT purposes.
   *     </p>
   * @public
   */
  individualRegistrationNumber?: string | undefined;

  /**
   * <p>
   *       True if your business is a member of a VAT group with a NIP active for VAT purposes. Otherwise, this is false.
   *     </p>
   * @public
   */
  isGroupVatEnabled?: boolean | undefined;
}

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
 * <p>Additional tax information to specify for a TRN in Romania.
 *     </p>
 * @public
 */
export interface RomaniaAdditionalInfo {
  /**
   * <p>
   *       The tax registration number type. The value can be <code>TaxRegistrationNumber</code> or <code>LocalRegistrationNumber</code>.
   *     </p>
   * @public
   */
  taxRegistrationNumberType: TaxRegistrationNumberType | undefined;
}

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
 * <p>
 *       Additional tax information associated with your TRN in Saudi Arabia.
 *     </p>
 * @public
 */
export interface SaudiArabiaAdditionalInfo {
  /**
   * <p>
   *       The tax registration number type.
   *     </p>
   * @public
   */
  taxRegistrationNumberType?: SaudiArabiaTaxRegistrationNumberType | undefined;
}

/**
 * <p>Additional tax information associated with your TRN in South Korea.</p>
 * @public
 */
export interface SouthKoreaAdditionalInfo {
  /**
   * <p>The business legal name based on the most recently uploaded tax registration certificate.</p>
   * @public
   */
  businessRepresentativeName: string | undefined;

  /**
   * <p>Line of business based on the most recently uploaded tax registration certificate.</p>
   * @public
   */
  lineOfBusiness: string | undefined;

  /**
   * <p>Item of business based on the most recently uploaded tax registration certificate.</p>
   * @public
   */
  itemOfBusiness: string | undefined;
}

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
 * <p>Additional tax information associated with your TRN in Spain.</p>
 * @public
 */
export interface SpainAdditionalInfo {
  /**
   * <p>The registration type in Spain.</p>
   * @public
   */
  registrationType: RegistrationType | undefined;
}

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
 * <p>Additional tax information associated with your TRN in Turkey.</p>
 * @public
 */
export interface TurkeyAdditionalInfo {
  /**
   * <p>The tax office where you're registered. You can enter this information as a string. The Tax Settings API will add this information to your invoice. This parameter is required for business-to-business (B2B) and business-to-government customers. It's not required for business-to-consumer (B2C) customers.</p>
   * @public
   */
  taxOffice?: string | undefined;

  /**
   * <p>The Registered Electronic Mail (REM) that is used to send notarized communication. This parameter is optional for business-to-business (B2B) and business-to-government (B2G) customers. It's not required for business-to-consumer (B2C) customers.</p>
   * @public
   */
  kepEmailId?: string | undefined;

  /**
   * <p>
   *       Secondary tax ID (“harcama birimi VKN”si”). If one isn't provided, we will use your VKN as the secondary ID.
   *     </p>
   * @public
   */
  secondaryTaxId?: string | undefined;

  /**
   * <p>The industry information that tells the Tax Settings API if you're subject to additional
   *       withholding taxes. This information required for business-to-business (B2B) customers. This
   *       information is conditionally mandatory for B2B customers who are subject to KDV tax.</p>
   * @public
   */
  industries?: Industries | undefined;
}

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
 * <p>
 *       Additional tax information associated with your TRN in Ukraine.
 *     </p>
 * @public
 */
export interface UkraineAdditionalInfo {
  /**
   * <p>
   *       The tax registration type.
   *     </p>
   * @public
   */
  ukraineTrnType: UkraineTrnType | undefined;
}

/**
 * <p>Additional tax information to specify for a TRN in Vietnam.</p>
 * @public
 */
export interface VietnamAdditionalInfo {
  /**
   * <p>The enterprise identification number for tax registration.</p>
   * @public
   */
  enterpriseIdentificationNumber?: string | undefined;

  /**
   * <p>The electronic transaction code number on the tax return document.</p>
   * @public
   */
  electronicTransactionCodeNumber?: string | undefined;

  /**
   * <p>The payment voucher number on the tax return payment document.</p>
   * @public
   */
  paymentVoucherNumber?: string | undefined;

  /**
   * <p>The date on the tax return payment document.</p>
   * @public
   */
  paymentVoucherNumberDate?: string | undefined;
}

/**
 * <p> Additional tax information associated with your TRN. The Tax Settings API returns
 *       country-specific information in the response when any additional information is present with
 *       your TRN for the following countries.</p>
 * @public
 */
export interface AdditionalInfoResponse {
  /**
   * <p> Additional tax information associated with your  TRN in Malaysia. </p>
   * @public
   */
  malaysiaAdditionalInfo?: MalaysiaAdditionalInfo | undefined;

  /**
   * <p> Additional tax information associated with your TRN in Israel.</p>
   * @public
   */
  israelAdditionalInfo?: IsraelAdditionalInfo | undefined;

  /**
   * <p> Additional tax information associated with your  TRN in Estonia. </p>
   * @public
   */
  estoniaAdditionalInfo?: EstoniaAdditionalInfo | undefined;

  /**
   * <p>Additional tax information associated with your TRN in Canada. </p>
   * @public
   */
  canadaAdditionalInfo?: CanadaAdditionalInfo | undefined;

  /**
   * <p>Additional tax information associated with your TRN in Brazil. The Tax Settings API
   *       returns this information in your response when any additional information is present with your
   *       TRN in Brazil.</p>
   * @public
   */
  brazilAdditionalInfo?: BrazilAdditionalInfo | undefined;

  /**
   * <p>Additional tax information associated with your TRN in Spain.</p>
   * @public
   */
  spainAdditionalInfo?: SpainAdditionalInfo | undefined;

  /**
   * <p>Additional tax information associated with your TRN in Kenya.</p>
   * @public
   */
  kenyaAdditionalInfo?: KenyaAdditionalInfo | undefined;

  /**
   * <p>Additional tax information associated with your TRN in South Korea.</p>
   * @public
   */
  southKoreaAdditionalInfo?: SouthKoreaAdditionalInfo | undefined;

  /**
   * <p>Additional tax information associated with your TRN in Turkey.</p>
   * @public
   */
  turkeyAdditionalInfo?: TurkeyAdditionalInfo | undefined;

  /**
   * <p>
   *       Additional tax information associated with your TRN in Georgia.
   *     </p>
   * @public
   */
  georgiaAdditionalInfo?: GeorgiaAdditionalInfo | undefined;

  /**
   * <p>
   *       Additional tax information associated with your TRN in Italy.
   *     </p>
   * @public
   */
  italyAdditionalInfo?: ItalyAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in Romania.</p>
   * @public
   */
  romaniaAdditionalInfo?: RomaniaAdditionalInfo | undefined;

  /**
   * <p>
   *       Additional tax information associated with your TRN in Ukraine.
   *     </p>
   * @public
   */
  ukraineAdditionalInfo?: UkraineAdditionalInfo | undefined;

  /**
   * <p>
   *       Additional tax information associated with your TRN in Poland.
   *     </p>
   * @public
   */
  polandAdditionalInfo?: PolandAdditionalInfo | undefined;

  /**
   * <p>
   *       Additional tax information associated with your TRN in Saudi Arabia.
   *     </p>
   * @public
   */
  saudiArabiaAdditionalInfo?: SaudiArabiaAdditionalInfo | undefined;

  /**
   * <p>
   *       Additional tax information in India.
   *     </p>
   * @public
   */
  indiaAdditionalInfo?: IndiaAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in Vietnam.
   *     </p>
   * @public
   */
  vietnamAdditionalInfo?: VietnamAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in Egypt.
   *     </p>
   * @public
   */
  egyptAdditionalInfo?: EgyptAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in Greece.
   *     </p>
   * @public
   */
  greeceAdditionalInfo?: GreeceAdditionalInfo | undefined;
}

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
 * <p>The metadata for your tax document.</p>
 * @public
 */
export interface TaxDocumentMetadata {
  /**
   * <p>The tax document access token, which contains information that the Tax Settings API uses to locate the tax document.</p>
   *          <note>
   *             <p>If you update your tax registration, the existing <code>taxDocumentAccessToken</code> won't be valid. To get the latest token, call the <code>GetTaxRegistration</code> or <code>ListTaxRegistrations</code> API operation. This token is valid for 24 hours.</p>
   *          </note>
   * @public
   */
  taxDocumentAccessToken: string | undefined;

  /**
   * <p>The name of your tax document.</p>
   * @public
   */
  taxDocumentName: string | undefined;
}

/**
 * <p>Your TRN information with jurisdiction details. This doesn't contain the full legal
 *       address associated with the TRN information.</p>
 * @public
 */
export interface TaxRegistrationWithJurisdiction {
  /**
   * <p>Your tax registration unique identifier. </p>
   * @public
   */
  registrationId: string | undefined;

  /**
   * <p> The type of your tax registration. This can be either <code>VAT</code> or
   *         <code>GST</code>. </p>
   * @public
   */
  registrationType: TaxRegistrationType | undefined;

  /**
   * <p>The legal name associated with your TRN information. </p>
   * @public
   */
  legalName: string | undefined;

  /**
   * <p>The status of your TRN. This can be either <code>Verified</code>, <code>Pending</code>,
   *         <code>Deleted</code>, or <code>Rejected</code>. </p>
   * @public
   */
  status: TaxRegistrationStatus | undefined;

  /**
   * <p>The industry that describes your business. For business-to-business (B2B) customers, specify Business. For business-to-consumer (B2C) customers, specify Individual. For business-to-government (B2G), specify Government.Note that certain values may not applicable for the request country. Please refer to country specific information in API document.
   *     </p>
   * @public
   */
  sector?: Sector | undefined;

  /**
   * <p>The metadata for your tax document.</p>
   * @public
   */
  taxDocumentMetadatas?: TaxDocumentMetadata[] | undefined;

  /**
   * <p>The email address to receive VAT invoices.</p>
   * @public
   */
  certifiedEmailId?: string | undefined;

  /**
   * <p>Additional tax information associated with your TRN. </p>
   * @public
   */
  additionalTaxInformation?: AdditionalInfoResponse | undefined;

  /**
   * <p> The jurisdiction associated with your TRN information. </p>
   * @public
   */
  jurisdiction: Jurisdiction | undefined;
}

/**
 * <p> An object with your <code>accountId</code> and TRN information. </p>
 * @public
 */
export interface AccountDetails {
  /**
   * <p>List of unique account identifiers. </p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>Your TRN information. Instead of having full legal address, here TRN information will have
   *       jurisdiction details (for example, country code and state/region/province if applicable). </p>
   * @public
   */
  taxRegistration?: TaxRegistrationWithJurisdiction | undefined;

  /**
   * <p>
   *       Tax inheritance information associated with the account.
   *     </p>
   * @public
   */
  taxInheritanceDetails?: TaxInheritanceDetails | undefined;

  /**
   * <p>
   *       The meta data information associated with the account.
   *     </p>
   * @public
   */
  accountMetaData?: AccountMetaData | undefined;
}

/**
 * <p>Additional tax information associated with your tax registration number (TRN). Depending
 *       on the TRN for a specific country, you might need to specify this information when you set
 *       your TRN. </p>
 *          <p>You can only specify one of the following parameters and the value can't be empty. </p>
 *          <note>
 *             <p>The parameter that you specify must match the country for the TRN, if available. For
 *         example, if you set a TRN in Canada for specific provinces, you must also specify the
 *           <code>canadaAdditionalInfo</code> parameter.</p>
 *          </note>
 * @public
 */
export interface AdditionalInfoRequest {
  /**
   * <p> Additional tax information to specify for a TRN in Malaysia.</p>
   * @public
   */
  malaysiaAdditionalInfo?: MalaysiaAdditionalInfo | undefined;

  /**
   * <p> Additional tax information to specify for a TRN in Israel.</p>
   * @public
   */
  israelAdditionalInfo?: IsraelAdditionalInfo | undefined;

  /**
   * <p> Additional tax information to specify for a TRN in Estonia.</p>
   * @public
   */
  estoniaAdditionalInfo?: EstoniaAdditionalInfo | undefined;

  /**
   * <p> Additional tax information associated with your TRN in Canada.</p>
   * @public
   */
  canadaAdditionalInfo?: CanadaAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in Spain.</p>
   * @public
   */
  spainAdditionalInfo?: SpainAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in Kenya.</p>
   * @public
   */
  kenyaAdditionalInfo?: KenyaAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in South Korea.</p>
   * @public
   */
  southKoreaAdditionalInfo?: SouthKoreaAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in Turkey.</p>
   * @public
   */
  turkeyAdditionalInfo?: TurkeyAdditionalInfo | undefined;

  /**
   * <p>
   *       Additional tax information to specify for a TRN in Georgia.
   *     </p>
   * @public
   */
  georgiaAdditionalInfo?: GeorgiaAdditionalInfo | undefined;

  /**
   * <p>
   *       Additional tax information to specify for a TRN in Italy.
   *     </p>
   * @public
   */
  italyAdditionalInfo?: ItalyAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in Romania.</p>
   * @public
   */
  romaniaAdditionalInfo?: RomaniaAdditionalInfo | undefined;

  /**
   * <p>
   *       Additional tax information associated with your TRN in Ukraine.
   *     </p>
   * @public
   */
  ukraineAdditionalInfo?: UkraineAdditionalInfo | undefined;

  /**
   * <p>
   *       Additional tax information associated with your TRN in Poland.
   *     </p>
   * @public
   */
  polandAdditionalInfo?: PolandAdditionalInfo | undefined;

  /**
   * <p>
   *       Additional tax information associated with your TRN in Saudi Arabia.
   *     </p>
   * @public
   */
  saudiArabiaAdditionalInfo?: SaudiArabiaAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in Vietnam.
   *     </p>
   * @public
   */
  vietnamAdditionalInfo?: VietnamAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in Egypt.
   *     </p>
   * @public
   */
  egyptAdditionalInfo?: EgyptAdditionalInfo | undefined;

  /**
   * <p>Additional tax information to specify for a TRN in Greece.</p>
   * @public
   */
  greeceAdditionalInfo?: GreeceAdditionalInfo | undefined;
}

/**
 * <p>Failed to upload the tax exemption document to Amazon Web ServicesSupport case.
 *     </p>
 * @public
 */
export class AttachmentUploadException extends __BaseException {
  readonly name: "AttachmentUploadException" = "AttachmentUploadException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentUploadException, __BaseException>) {
    super({
      name: "AttachmentUploadException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentUploadException.prototype);
  }
}

/**
 * <p>The address domain associate with the tax information.
 *     </p>
 * @public
 */
export interface Authority {
  /**
   * <p>
   *       The country code for the country that the address is in.
   *     </p>
   * @public
   */
  country: string | undefined;

  /**
   * <p>
   *       The state that the address is located.
   *     </p>
   * @public
   */
  state?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTaxRegistrationRequest {
  /**
   * <p>List of unique account identifiers. </p>
   * @public
   */
  accountIds: string[] | undefined;
}

/**
 * <p> The error object for representing failures in the <code>BatchDeleteTaxRegistration</code>
 *       operation. </p>
 * @public
 */
export interface BatchDeleteTaxRegistrationError {
  /**
   * <p> The unique account identifier for the account whose tax registration couldn't be deleted
   *       during the <code>BatchDeleteTaxRegistration</code> operation. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p> The error message for an individual failure in the
   *         <code>BatchDeleteTaxRegistration</code> operation. </p>
   * @public
   */
  message: string | undefined;

  /**
   * <p> The error code for an individual failure in BatchDeleteTaxRegistration operation. </p>
   * @public
   */
  code?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTaxRegistrationResponse {
  /**
   * <p>The list of errors for the accounts the TRN information could not be deleted for. </p>
   * @public
   */
  errors: BatchDeleteTaxRegistrationError[] | undefined;
}

/**
 * <p>The exception when the input is creating conflict with the given state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>409</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.errorCode = opts.errorCode;
  }
}

/**
 * <p>The exception thrown when an unexpected error occurs when processing a request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>500</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.errorCode = opts.errorCode;
  }
}

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
 * <p>The information about the specified parameter in the request that caused an error.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the parameter that caused a <code>ValidationException</code> error.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The exception when the input doesn't pass validation for at least one of the input
 *       parameters. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>400</p>
   * @public
   */
  errorCode: ValidationExceptionErrorCode | undefined;

  /**
   * <p>400</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.errorCode = opts.errorCode;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface BatchGetTaxExemptionsRequest {
  /**
   * <p>
   *       List of unique account identifiers.
   *     </p>
   * @public
   */
  accountIds: string[] | undefined;
}

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
 * <p>The tax exemption type.
 *     </p>
 * @public
 */
export interface TaxExemptionType {
  /**
   * <p>The tax exemption's type display name.
   *     </p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The tax exemption's type description.
   *     </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tax exemption's applicable jurisdictions.
   *     </p>
   * @public
   */
  applicableJurisdictions?: Authority[] | undefined;
}

/**
 * <p>The tax exemption.
 *     </p>
 * @public
 */
export interface TaxExemption {
  /**
   * <p>The address domain associate with tax exemption.
   *     </p>
   * @public
   */
  authority: Authority | undefined;

  /**
   * <p>The tax exemption type.
   *     </p>
   * @public
   */
  taxExemptionType: TaxExemptionType | undefined;

  /**
   * <p>The tax exemption effective date.
   *     </p>
   * @public
   */
  effectiveDate?: Date | undefined;

  /**
   * <p>The tax exemption expiration date.
   *     </p>
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * <p>The tax exemption recording time in the <code>TaxSettings</code> system.
   *     </p>
   * @public
   */
  systemEffectiveDate?: Date | undefined;

  /**
   * <p>The tax exemption status.
   *     </p>
   * @public
   */
  status?: EntityExemptionAccountStatus | undefined;
}

/**
 * <p>The tax exemption details.
 *     </p>
 * @public
 */
export interface TaxExemptionDetails {
  /**
   * <p>Tax exemptions.
   *     </p>
   * @public
   */
  taxExemptions?: TaxExemption[] | undefined;

  /**
   * <p>The indicator if the tax exemption is inherited from the consolidated billing family management account.
   *     </p>
   * @public
   */
  heritageObtainedDetails?: boolean | undefined;

  /**
   * <p>The consolidated billing family management account the tax exemption inherited from.
   *     </p>
   * @public
   */
  heritageObtainedParentEntity?: string | undefined;

  /**
   * <p>The reason of the heritage inheritance.
   *     </p>
   * @public
   */
  heritageObtainedReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetTaxExemptionsResponse {
  /**
   * <p>The tax exemption details map of accountId and tax exemption details.
   *     </p>
   * @public
   */
  taxExemptionDetailsMap?: Record<string, TaxExemptionDetails> | undefined;

  /**
   * <p>The list of accounts that failed to get tax exemptions.
   *     </p>
   * @public
   */
  failedAccounts?: string[] | undefined;
}

/**
 * <p>The exception thrown when the input doesn't have a resource associated to it.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>404</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.errorCode = opts.errorCode;
  }
}

/**
 * <p>The tax registration document.
 *     </p>
 * @public
 */
export interface TaxRegistrationDocFile {
  /**
   * <p>The tax registration document name.
   *     </p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>The tax registration document content.
   *     </p>
   * @public
   */
  fileContent: Uint8Array | undefined;
}

/**
 * <p>The Amazon S3 bucket in your account where your tax document is located.</p>
 * @public
 */
export interface SourceS3Location {
  /**
   * <p>The name of your Amazon S3 bucket that your tax document is located.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The object key of your tax document object in Amazon S3.</p>
   * @public
   */
  key: string | undefined;
}

/**
 * <p>Tax registration document information.</p>
 * @public
 */
export interface TaxRegistrationDocument {
  /**
   * <p>The Amazon S3 location where your tax registration document is stored.</p>
   * @public
   */
  s3Location?: SourceS3Location | undefined;

  /**
   * <p>The tax registration document.
   *     </p>
   * @public
   */
  file?: TaxRegistrationDocFile | undefined;
}

/**
 * <p>Required information to verify your TRN.</p>
 * @public
 */
export interface VerificationDetails {
  /**
   * <p>Date of birth to verify your submitted TRN. Use the <code>YYYY-MM-DD</code> format.</p>
   * @public
   */
  dateOfBirth?: string | undefined;

  /**
   * <p>The tax registration document, which is required for specific countries such as Bangladesh, Kenya, South Korea and Spain.</p>
   * @public
   */
  taxRegistrationDocuments?: TaxRegistrationDocument[] | undefined;
}

/**
 * <p>The TRN information you provide when you add a new TRN, or update. </p>
 * @public
 */
export interface TaxRegistrationEntry {
  /**
   * <p>Your tax registration unique identifier. </p>
   * @public
   */
  registrationId: string | undefined;

  /**
   * <p> Your tax registration type. This can be either <code>VAT</code> or <code>GST</code>.
   *     </p>
   * @public
   */
  registrationType: TaxRegistrationType | undefined;

  /**
   * <p>The legal name associated with your TRN. </p>
   *          <note>
   *             <p>If you're setting a TRN in Brazil, you don't need to specify the legal name. For TRNs in
   *         other countries, you must specify the legal name.</p>
   *          </note>
   * @public
   */
  legalName?: string | undefined;

  /**
   * <p>The legal address associated with your TRN.</p>
   *          <note>
   *             <p>If you're setting a TRN in Brazil for the CNPJ tax type, you don't need to specify the
   *         legal address. </p>
   *             <p>For TRNs in other countries and for CPF tax types Brazil, you must specify the legal
   *         address.</p>
   *          </note>
   * @public
   */
  legalAddress?: Address | undefined;

  /**
   * <p>The industry that describes your business. For business-to-business (B2B) customers, specify Business. For business-to-consumer (B2C) customers, specify Individual. For business-to-government (B2G), specify Government.Note that certain values may not applicable for the request country. Please refer to country specific information in API document.
   *     </p>
   * @public
   */
  sector?: Sector | undefined;

  /**
   * <p> Additional tax information associated with your TRN. You only need to specify this
   *       parameter if Amazon Web Services collects any additional information for your country within
   *         <a>AdditionalInfoRequest</a>.</p>
   * @public
   */
  additionalTaxInformation?: AdditionalInfoRequest | undefined;

  /**
   * <p>Additional details needed to verify your TRN information in Brazil. You only need to specify this
   *       parameter when you set a TRN in Brazil that is the CPF tax type.</p>
   *          <note>
   *             <p>Don't specify this parameter to set a TRN in Brazil of the CNPJ tax type or to set a TRN
   *         for another country. </p>
   *          </note>
   * @public
   */
  verificationDetails?: VerificationDetails | undefined;

  /**
   * <p>The email address to receive VAT invoices.</p>
   * @public
   */
  certifiedEmailId?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutTaxRegistrationRequest {
  /**
   * <p> List of unique account identifiers.</p>
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * <p>Your TRN information that will be stored to the accounts mentioned in
   *         <code>putEntries</code>. </p>
   * @public
   */
  taxRegistrationEntry: TaxRegistrationEntry | undefined;
}

/**
 * <p> The error object for representing failures in the <code>BatchPutTaxRegistration</code>
 *       operation. </p>
 * @public
 */
export interface BatchPutTaxRegistrationError {
  /**
   * <p> The unique account identifier for the account that the tax registration couldn't be
   *       added, or updated during the <code>BatchPutTaxRegistration</code> operation. </p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p> The error message for an individual failure in the <code>BatchPutTaxRegistration</code>
   *       operation. </p>
   * @public
   */
  message: string | undefined;

  /**
   * <p> The error code for an individual failure in the <code>BatchPutTaxRegistration</code>
   *       operation. </p>
   * @public
   */
  code?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutTaxRegistrationResponse {
  /**
   * <p>The status of your TRN stored in the system after processing. Based on the validation
   *       occurring on the TRN, the status can be <code>Verified</code>, <code>Pending</code> or
   *         <code>Rejected</code>. </p>
   * @public
   */
  status?: TaxRegistrationStatus | undefined;

  /**
   * <p>List of errors for the accounts the TRN information could not be added or updated to.
   *     </p>
   * @public
   */
  errors: BatchPutTaxRegistrationError[] | undefined;
}

/**
 * <p>You've exceeded the Amazon Web ServicesSupport case creation limit for your account.
 *     </p>
 * @public
 */
export class CaseCreationLimitExceededException extends __BaseException {
  readonly name: "CaseCreationLimitExceededException" = "CaseCreationLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CaseCreationLimitExceededException, __BaseException>) {
    super({
      name: "CaseCreationLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CaseCreationLimitExceededException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteSupplementalTaxRegistrationRequest {
  /**
   * <p>
   *       The unique authority Id for the supplemental TRN information that needs to be deleted.
   *     </p>
   * @public
   */
  authorityId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSupplementalTaxRegistrationResponse {}

/**
 * @public
 */
export interface DeleteTaxRegistrationRequest {
  /**
   * <p>Unique account identifier for the TRN information that needs to be deleted. If this isn't
   *       passed, the account ID corresponding to the credentials of the API caller will be used for
   *       this parameter.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTaxRegistrationResponse {}

/**
 * <p>The location of the Amazon S3 bucket that you specify to download your tax documents to.</p>
 * @public
 */
export interface DestinationS3Location {
  /**
   * <p>The name of your Amazon S3 bucket that you specify to download your tax documents to.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The Amazon S3 object prefix that you specify for your tax document file.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>The exemption certificate.
 *     </p>
 * @public
 */
export interface ExemptionCertificate {
  /**
   * <p>The exemption certificate file name.
   *     </p>
   * @public
   */
  documentName: string | undefined;

  /**
   * <p>The exemption certificate file content.
   *     </p>
   * @public
   */
  documentFile: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetTaxExemptionTypesRequest {}

/**
 * @public
 */
export interface GetTaxExemptionTypesResponse {
  /**
   * <p>The supported types of tax exemptions.
   *     </p>
   * @public
   */
  taxExemptionTypes?: TaxExemptionType[] | undefined;
}

/**
 * @public
 */
export interface GetTaxInheritanceRequest {}

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
 */
export interface GetTaxInheritanceResponse {
  /**
   * <p>The tax inheritance status.
   *     </p>
   * @public
   */
  heritageStatus?: HeritageStatus | undefined;
}

/**
 * @public
 */
export interface GetTaxRegistrationRequest {
  /**
   * <p>Your unique account identifier.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * <p>Your TRN information. </p>
 * @public
 */
export interface TaxRegistration {
  /**
   * <p> Your tax registration unique identifier. </p>
   * @public
   */
  registrationId: string | undefined;

  /**
   * <p>Type of your tax registration. This can be either <code>VAT</code> or <code>GST</code>.
   *     </p>
   * @public
   */
  registrationType: TaxRegistrationType | undefined;

  /**
   * <p> The legal name associated with your TRN registration. </p>
   * @public
   */
  legalName: string | undefined;

  /**
   * <p> The status of your TRN. This can be either <code>Verified</code>, <code>Pending</code>,
   *         <code>Deleted</code>, or <code>Rejected</code>. </p>
   * @public
   */
  status: TaxRegistrationStatus | undefined;

  /**
   * <p>The industry that describes your business. For business-to-business (B2B) customers, specify Business. For business-to-consumer (B2C) customers, specify Individual. For business-to-government (B2G), specify Government. Note that certain values may not applicable for the request country. Please refer to country specific information in API document.
   *     </p>
   * @public
   */
  sector?: Sector | undefined;

  /**
   * <p>The metadata for your tax document.</p>
   * @public
   */
  taxDocumentMetadatas?: TaxDocumentMetadata[] | undefined;

  /**
   * <p>The email address to receive VAT invoices.</p>
   * @public
   */
  certifiedEmailId?: string | undefined;

  /**
   * <p> Additional tax information associated with your TRN. </p>
   * @public
   */
  additionalTaxInformation?: AdditionalInfoResponse | undefined;

  /**
   * <p> The legal address associated with your TRN registration. </p>
   * @public
   */
  legalAddress: Address | undefined;
}

/**
 * @public
 */
export interface GetTaxRegistrationResponse {
  /**
   * <p>TRN information of the account mentioned in the request. </p>
   * @public
   */
  taxRegistration?: TaxRegistration | undefined;
}

/**
 * @public
 */
export interface GetTaxRegistrationDocumentRequest {
  /**
   * <p>The Amazon S3 bucket that you specify to download your tax documents to.</p>
   * @public
   */
  destinationS3Location?: DestinationS3Location | undefined;

  /**
   * <p>The metadata for your tax document.</p>
   * @public
   */
  taxDocumentMetadata: TaxDocumentMetadata | undefined;
}

/**
 * @public
 */
export interface GetTaxRegistrationDocumentResponse {
  /**
   * <p>The file path of the Amazon S3 bucket where you want to download your tax document to.</p>
   * @public
   */
  destinationFilePath?: string | undefined;

  /**
   * <p>The Amazon S3 presigned URL of the tax registration document.
   *     </p>
   * @public
   */
  presignedS3Url?: string | undefined;
}

/**
 * @public
 */
export interface ListSupplementalTaxRegistrationsRequest {
  /**
   * <p>
   *       The number of <code>taxRegistrations</code> results you want in one response.
   *     </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *       The token to retrieve the next set of results.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;
}

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

/**
 * <p>
 *       Supplemental TRN details.
 *     </p>
 * @public
 */
export interface SupplementalTaxRegistration {
  /**
   * <p>
   *       The supplemental TRN unique identifier.
   *     </p>
   * @public
   */
  registrationId: string | undefined;

  /**
   * <p>
   *       Type of supplemental TRN. Currently, this can only be VAT.
   *     </p>
   * @public
   */
  registrationType: SupplementalTaxRegistrationType | undefined;

  /**
   * <p>
   *       The legal name associated with your TRN registration.
   *     </p>
   * @public
   */
  legalName: string | undefined;

  /**
   * <p> The details of the address associated with the TRN information. </p>
   * @public
   */
  address: Address | undefined;

  /**
   * <p>
   *       Unique authority ID for the supplemental TRN.
   *     </p>
   * @public
   */
  authorityId: string | undefined;

  /**
   * <p>
   *       The status of your TRN.
   *     </p>
   * @public
   */
  status: TaxRegistrationStatus | undefined;
}

/**
 * @public
 */
export interface ListSupplementalTaxRegistrationsResponse {
  /**
   * <p>
   *       The list of supplemental tax registrations.
   *     </p>
   * @public
   */
  taxRegistrations: SupplementalTaxRegistration[] | undefined;

  /**
   * <p>
   *       The token to retrieve the next set of results.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTaxExemptionsRequest {
  /**
   * <p>The number of results you want in one response.
   *     </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTaxExemptionsResponse {
  /**
   * <p>The token to retrieve the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The tax exemption details map of <code>accountId</code> and tax exemption details.
   *     </p>
   * @public
   */
  taxExemptionDetailsMap?: Record<string, TaxExemptionDetails> | undefined;
}

/**
 * @public
 */
export interface ListTaxRegistrationsRequest {
  /**
   * <p>Number of <code>accountDetails</code> results you want in one response. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTaxRegistrationsResponse {
  /**
   * <p>The list of account details. This contains account Ids and TRN Information for each of the
   *       linked accounts. </p>
   * @public
   */
  accountDetails: AccountDetails[] | undefined;

  /**
   * <p> The token to retrieve the next set of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>
 *       The supplemental TRN information to provide when adding or updating a supplemental TRN.
 *     </p>
 * @public
 */
export interface SupplementalTaxRegistrationEntry {
  /**
   * <p>
   *       The supplemental TRN unique identifier.
   *     </p>
   * @public
   */
  registrationId: string | undefined;

  /**
   * <p>
   *       Type of supplemental TRN. Currently, this can only be VAT.
   *     </p>
   * @public
   */
  registrationType: SupplementalTaxRegistrationType | undefined;

  /**
   * <p>
   *       The legal name associated with your TRN registration.
   *     </p>
   * @public
   */
  legalName: string | undefined;

  /**
   * <p> The details of the address associated with the TRN information. </p>
   * @public
   */
  address: Address | undefined;
}

/**
 * @public
 */
export interface PutSupplementalTaxRegistrationRequest {
  /**
   * <p>
   *       The supplemental TRN information that will be stored for the caller account ID.
   *     </p>
   * @public
   */
  taxRegistrationEntry: SupplementalTaxRegistrationEntry | undefined;
}

/**
 * @public
 */
export interface PutSupplementalTaxRegistrationResponse {
  /**
   * <p>
   *       Unique authority ID for the supplemental TRN information that was stored.
   *     </p>
   * @public
   */
  authorityId: string | undefined;

  /**
   * <p>
   *       The status of the supplemental TRN stored in the system after processing. Based on the validation occurring on the TRN, the status can be <code>Verified</code>, <code>Pending</code>, <code>Rejected</code>, or <code>Deleted</code>.
   *     </p>
   * @public
   */
  status: TaxRegistrationStatus | undefined;
}

/**
 * @public
 */
export interface PutTaxExemptionRequest {
  /**
   * <p>
   *       The list of unique account identifiers.
   *     </p>
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * <p>The address domain associate with the tax information.
   *     </p>
   * @public
   */
  authority: Authority | undefined;

  /**
   * <p>The exemption type.
   *     </p>
   * @public
   */
  exemptionType: string | undefined;

  /**
   * <p>The exemption certificate.
   *     </p>
   * @public
   */
  exemptionCertificate: ExemptionCertificate | undefined;
}

/**
 * @public
 */
export interface PutTaxExemptionResponse {
  /**
   * <p>The customer support case ID.
   *     </p>
   * @public
   */
  caseId?: string | undefined;
}

/**
 * @public
 */
export interface PutTaxInheritanceRequest {
  /**
   * <p>The tax inheritance status.
   *     </p>
   * @public
   */
  heritageStatus?: HeritageStatus | undefined;
}

/**
 * @public
 */
export interface PutTaxInheritanceResponse {}

/**
 * @public
 */
export interface PutTaxRegistrationRequest {
  /**
   * <p>Your unique account identifier. </p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p> Your TRN information that will be stored to the account mentioned in
   *         <code>accountId</code>. </p>
   * @public
   */
  taxRegistrationEntry: TaxRegistrationEntry | undefined;
}

/**
 * @public
 */
export interface PutTaxRegistrationResponse {
  /**
   * <p>The status of your TRN stored in the system after processing. Based on the validation
   *       occurring on the TRN, the status can be <code>Verified</code>, <code>Pending</code> or
   *         <code>Rejected</code>. </p>
   * @public
   */
  status?: TaxRegistrationStatus | undefined;
}

/**
 * @internal
 */
export const AccountMetaDataFilterSensitiveLog = (obj: AccountMetaData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaxRegistrationWithJurisdictionFilterSensitiveLog = (obj: TaxRegistrationWithJurisdiction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountDetailsFilterSensitiveLog = (obj: AccountDetails): any => ({
  ...obj,
  ...(obj.taxRegistration && { taxRegistration: SENSITIVE_STRING }),
  ...(obj.accountMetaData && { accountMetaData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDeleteTaxRegistrationErrorFilterSensitiveLog = (obj: BatchDeleteTaxRegistrationError): any => ({
  ...obj,
  ...(obj.message && { message: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDeleteTaxRegistrationResponseFilterSensitiveLog = (obj: BatchDeleteTaxRegistrationResponse): any => ({
  ...obj,
  ...(obj.errors && { errors: obj.errors.map((item) => BatchDeleteTaxRegistrationErrorFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TaxRegistrationEntryFilterSensitiveLog = (obj: TaxRegistrationEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutTaxRegistrationRequestFilterSensitiveLog = (obj: BatchPutTaxRegistrationRequest): any => ({
  ...obj,
  ...(obj.taxRegistrationEntry && { taxRegistrationEntry: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchPutTaxRegistrationErrorFilterSensitiveLog = (obj: BatchPutTaxRegistrationError): any => ({
  ...obj,
  ...(obj.message && { message: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchPutTaxRegistrationResponseFilterSensitiveLog = (obj: BatchPutTaxRegistrationResponse): any => ({
  ...obj,
  ...(obj.errors && { errors: obj.errors.map((item) => BatchPutTaxRegistrationErrorFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TaxRegistrationFilterSensitiveLog = (obj: TaxRegistration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTaxRegistrationResponseFilterSensitiveLog = (obj: GetTaxRegistrationResponse): any => ({
  ...obj,
  ...(obj.taxRegistration && { taxRegistration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SupplementalTaxRegistrationFilterSensitiveLog = (obj: SupplementalTaxRegistration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSupplementalTaxRegistrationsResponseFilterSensitiveLog = (
  obj: ListSupplementalTaxRegistrationsResponse
): any => ({
  ...obj,
  ...(obj.taxRegistrations && { taxRegistrations: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListTaxRegistrationsResponseFilterSensitiveLog = (obj: ListTaxRegistrationsResponse): any => ({
  ...obj,
  ...(obj.accountDetails && { accountDetails: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SupplementalTaxRegistrationEntryFilterSensitiveLog = (obj: SupplementalTaxRegistrationEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutSupplementalTaxRegistrationRequestFilterSensitiveLog = (
  obj: PutSupplementalTaxRegistrationRequest
): any => ({
  ...obj,
  ...(obj.taxRegistrationEntry && { taxRegistrationEntry: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutTaxRegistrationRequestFilterSensitiveLog = (obj: PutTaxRegistrationRequest): any => ({
  ...obj,
  ...(obj.taxRegistrationEntry && { taxRegistrationEntry: SENSITIVE_STRING }),
});

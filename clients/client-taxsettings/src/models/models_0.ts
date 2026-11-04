// smithy-typescript generated code
import type {
  AddressRoleType,
  ChileDocumentType,
  CustomerType,
  EntityExemptionAccountStatus,
  HeritageStatus,
  IndonesiaTaxRegistrationNumberType,
  Industries,
  IsraelCustomerType,
  IsraelDealerType,
  MalaysiaServiceTaxCode,
  PersonType,
  PolandTaxRegistrationNumberType,
  RegistrationType,
  SaudiArabiaTaxRegistrationNumberType,
  Sector,
  SupplementalTaxRegistrationType,
  TaxRegistrationNumberType,
  TaxRegistrationStatus,
  TaxRegistrationType,
  UkraineTrnType,
  UzbekistanTaxRegistrationNumberType,
} from "./enums";

/**
 * The details of the address associated with the TRN information.
 *
 * @public
 */
export interface Address {
  /**
   * The first line of the address.
   *
   * @public
   */
  addressLine1?: string | undefined;

  /**
   * The second line of the address, if applicable.
   *
   * @public
   */
  addressLine2?: string | undefined;

  /**
   * The third line of the address, if applicable. Currently, the Tax Settings API accepts the `addressLine3` parameter only for Saudi Arabia. When you specify a TRN in Saudi Arabia, you must enter the `addressLine3` and specify the building number for the address. For example, you might enter `1234`.
   *
   * @public
   */
  addressLine3?: string | undefined;

  /**
   * The district or county the address is located.
   *
   * > **Note:** For addresses in Brazil, this parameter uses the name of the neighborhood. When you set a TRN in Brazil, use `districtOrCounty` for the neighborhood name.
   *
   * @public
   */
  districtOrCounty?: string | undefined;

  /**
   * The city that the address is in.
   *
   * @public
   */
  city?: string | undefined;

  /**
   * The state, region, or province that the address is located. This field is only required for Canada, India, United Arab Emirates, Romania, and Brazil (CPF). It is optional for all other countries.
   *
   * If this is required for tax settings, use the same name as shown on the **Tax Settings** page.
   *
   * @public
   */
  stateOrRegion?: string | undefined;

  /**
   * The postal code associated with the address.
   *
   * @public
   */
  postalCode: string | undefined;

  /**
   * The country code for the country that the address is in.
   *
   * @public
   */
  countryCode: string | undefined;
}

/**
 * The jurisdiction details of the TRN information of the customers. This doesn't contain full legal address, and contains only country code and state/region/province.
 *
 * @public
 */
export interface Jurisdiction {
  /**
   * The state, region, or province associated with the country of the jurisdiction, if applicable.
   *
   * @public
   */
  stateOrRegion?: string | undefined;

  /**
   * The country code of the jurisdiction.
   *
   * @public
   */
  countryCode: string | undefined;
}

/**
 * The meta data information associated with the account.
 *
 * @public
 */
export interface AccountMetaData {
  /**
   * The Amazon Web Services accounts name.
   *
   * @public
   */
  accountName?: string | undefined;

  /**
   * Seller information associated with the account.
   *
   * @public
   */
  seller?: string | undefined;

  /**
   * The details of the address associated with the TRN information.
   *
   * @public
   */
  address?: Address | undefined;

  /**
   * The type of address associated with the legal profile.
   *
   * @public
   */
  addressType?: AddressRoleType | undefined;

  /**
   * Address roles associated with the account containing country code information.
   *
   * @public
   */
  addressRoleMap?: Partial<Record<AddressRoleType, Jurisdiction>> | undefined;
}

/**
 * Tax inheritance information associated with the account.
 *
 * @public
 */
export interface TaxInheritanceDetails {
  /**
   * Tax inheritance parent account information associated with the account.
   *
   * @public
   */
  parentEntityId?: string | undefined;

  /**
   * Tax inheritance reason information associated with the account.
   *
   * @public
   */
  inheritanceObtainedReason?: string | undefined;
}

/**
 * Additional tax information associated with your TRN in Belgium.
 *
 * @public
 */
export interface BelgiumAdditionalInfo {
  /**
   * The Peppol ID for electronic invoicing in Belgium.
   *
   * @public
   */
  peppolId?: string | undefined;

  /**
   * Indicates whether the Mercurius e-invoicing box is enabled for business-to-government (B2G) invoicing in Belgium.
   *
   * @public
   */
  isMercuriusBoxEnabled?: boolean | undefined;
}

/**
 * Additional tax information associated with your TRN in Brazil.
 *
 * @public
 */
export interface BrazilAdditionalInfo {
  /**
   * The Cadastro de Contribuintes Mobiliários (CCM) code for your TRN in Brazil. This only applies for a CNPJ tax type for the São Paulo municipality.
   *
   * @public
   */
  ccmCode?: string | undefined;

  /**
   * Legal nature of business, based on your TRN in Brazil. This only applies for a CNPJ tax type.
   *
   * @public
   */
  legalNatureCode?: string | undefined;
}

/**
 * Additional tax information associated with your TRN in Canada .
 *
 * @public
 */
export interface CanadaAdditionalInfo {
  /**
   * The provincial sales tax ID for your TRN in Canada. This parameter can represent the following:
   *
   * - Provincial sales tax ID number for British Columbia and Saskatchewan provinces
   * - Manitoba retail sales tax ID number for Manitoba province
   * - Quebec sales tax ID number for Quebec province
   *
   * The Tax Setting API only accepts this parameter if the TRN is specified for the previous provinces. For other provinces, the Tax Settings API doesn't accept this parameter.
   *
   * @public
   */
  provincialSalesTaxId?: string | undefined;

  /**
   * The Quebec Sales Tax ID number. Leave blank if you do not have a Quebec Sales Tax ID number.
   *
   * @public
   */
  canadaQuebecSalesTaxNumber?: string | undefined;

  /**
   * Manitoba Retail Sales Tax ID number. Customers purchasing Amazon Web Services services for resale in Manitoba must provide a valid Retail Sales Tax ID number for Manitoba. Leave this blank if you do not have a Retail Sales Tax ID number in Manitoba or are not purchasing Amazon Web Services services for resale.
   *
   * @public
   */
  canadaRetailSalesTaxNumber?: string | undefined;

  /**
   * The value for this parameter must be `true` if the `provincialSalesTaxId` value is provided for a TRN in British Columbia, Saskatchewan, or Manitoba provinces.
   *
   * To claim a provincial sales tax (PST) and retail sales tax (RST) reseller exemption, you must confirm that purchases from this account were made for resale. Otherwise, remove the PST or RST number from the `provincialSalesTaxId` parameter from your request.
   *
   * @public
   */
  isResellerAccount?: boolean | undefined;
}

/**
 * Additional tax information associated with your TRN in Chile.
 *
 * @public
 */
export interface ChileAdditionalInfo {
  /**
   * The type of tax document. For Chile, this can be `Invoice` or `Receipt`.
   *
   * @public
   */
  documentType?: ChileDocumentType | undefined;

  /**
   * The business activity code of the taxpayer in Chile. This must be the activity code shown on your SII (Servicio de Impuestos Internos) tax profile. For the list of valid activity codes, see [SII activity codes](https://www.sii.cl/ayudas/ayudas_por_servicios/1956-codigos-1959.html).
   *
   * @public
   */
  businessActivity?: string | undefined;
}

/**
 * Additional tax information to specify for a TRN in Egypt.
 *
 * @public
 */
export interface EgyptAdditionalInfo {
  /**
   * The unique identification number provided by the Egypt Tax Authority.
   *
   * @public
   */
  uniqueIdentificationNumber?: string | undefined;

  /**
   * The expiration date of the unique identification number provided by the Egypt Tax Authority.
   *
   * @public
   */
  uniqueIdentificationNumberExpirationDate?: string | undefined;
}

/**
 * Additional tax information associated with your TRN in Estonia.
 *
 * @public
 */
export interface EstoniaAdditionalInfo {
  /**
   * Registry commercial code (RCC) for your TRN in Estonia. This value is an eight-numeric string, such as `12345678`.
   *
   * @public
   */
  registryCommercialCode: string | undefined;
}

/**
 * Additional tax information associated with your TRN in France.
 *
 * @public
 */
export interface FranceAdditionalInfo {
  /**
   * The SIREN number for the company in France. Must be a 9-digit number.
   *
   * @public
   */
  sirenNumber: string | undefined;

  /**
   * The routing code used for electronic invoicing (e-invoicing) for the company in France.
   *
   * @public
   */
  eInvoiceRoutingCode?: string | undefined;
}

/**
 * Additional tax information associated with your TRN in Georgia.
 *
 * @public
 */
export interface GeorgiaAdditionalInfo {
  /**
   * The legal person or physical person assigned to this TRN in Georgia.
   *
   * @public
   */
  personType: PersonType | undefined;
}

/**
 * Contains additional tax information associated with your Tax Registration Number (TRN) in Germany, such as the economic identification number and Steuernummer.
 *
 * @public
 */
export interface GermanyAdditionalInfo {
  /**
   * The economic identification number (Wirtschafts-Identifikationsnummer, or W-IdNr) in Germany.
   *
   * @public
   */
  economicIdentificationNumber?: string | undefined;

  /**
   * The Steuernummer (tax number issued by the local tax office) in Germany.
   *
   * @public
   */
  steuernummer?: string | undefined;
}

/**
 * Additional tax information to specify for a TRN in Greece.
 *
 * @public
 */
export interface GreeceAdditionalInfo {
  /**
   * The code of contracting authority for e-invoicing.
   *
   * @public
   */
  contractingAuthorityCode?: string | undefined;
}

/**
 * Additional tax information in India.
 *
 * @public
 */
export interface IndiaAdditionalInfo {
  /**
   * India pan information associated with the account.
   *
   * @public
   */
  pan?: string | undefined;
}

/**
 * Additional tax information associated with your TRN in Indonesia.
 *
 * @public
 */
export interface IndonesiaAdditionalInfo {
  /**
   * The tax registration number type.
   *
   * @public
   */
  taxRegistrationNumberType?: IndonesiaTaxRegistrationNumberType | undefined;

  /**
   * Exception code if you are designated by Directorate General of Taxation (DGT) as a VAT collector, non-collected VAT, or VAT-exempt customer.
   *
   * @public
   */
  ppnExceptionDesignationCode?: string | undefined;

  /**
   * VAT-exempt customers have a Directorate General of Taxation (DGT) exemption letter or certificate (Surat Keterangan Bebas) decision number. Non-collected VAT have a DGT letter or certificate (Surat Keterangan Tidak Dipungut).
   *
   * @public
   */
  decisionNumber?: string | undefined;
}

/**
 * Additional tax information associated with your TRN in Israel.
 *
 * @public
 */
export interface IsraelAdditionalInfo {
  /**
   * Dealer type for your TRN in Israel. If you're not a local authorized dealer with an Israeli VAT ID, specify your tax identification number so that Amazon Web Services can send you a compliant tax invoice.
   *
   * @public
   */
  dealerType: IsraelDealerType | undefined;

  /**
   * Customer type for your TRN in Israel. The value can be `Business` or `Individual`. Use `Business`for entities such as not-for-profit and financial institutions.
   *
   * @public
   */
  customerType: IsraelCustomerType | undefined;
}

/**
 * Additional tax information associated with your TRN in Italy.
 *
 * @public
 */
export interface ItalyAdditionalInfo {
  /**
   * Additional tax information to specify for a TRN in Italy. Use CodiceDestinatario to receive your invoices via web service (API) or FTP.
   *
   * @public
   */
  sdiAccountId?: string | undefined;

  /**
   * The tender procedure identification code.
   *
   * @public
   */
  cigNumber?: string | undefined;

  /**
   * Additional tax information to specify for a TRN in Italy. This is managed by the Interministerial Committee for Economic Planning (CIPE) which characterizes every public investment project (Individual Project Code).
   *
   * @public
   */
  cupNumber?: string | undefined;

  /**
   * List of service tax codes for your TRN in Italy. You can use your customer tax code as part of a VAT Group.
   *
   * @public
   */
  taxCode?: string | undefined;

  /**
   * The customer type for tax registration in Italy. Valid values are `Business` or `Individual`.
   *
   * @public
   */
  customerType?: CustomerType | undefined;
}

/**
 * Additional tax information associated with your TRN in Kenya.
 *
 * @public
 */
export interface KenyaAdditionalInfo {
  /**
   * The legal person or physical person assigned to this TRN in Kenya.
   *
   * @public
   */
  personType: PersonType | undefined;
}

/**
 * Additional tax information associated with your TRN in Malaysia.
 *
 * @public
 */
export interface MalaysiaAdditionalInfo {
  /**
   * List of service tax codes for your TRN in Malaysia.
   *
   * @public
   */
  serviceTaxCodes?: MalaysiaServiceTaxCode[] | undefined;

  /**
   * The tax information number in Malaysia.
   *
   * For individual, you can specify the `taxInformationNumber` in `MalaysiaAdditionalInfo` with NRIC type, and a valid MyKad or NRIC number. For business resellers, you must specify a `businessRegistrationNumber` and `taxInformationNumber` in `MalaysiaAdditionalInfo` with a sales and service tax (SST) type and a valid SST number.
   *
   * For business resellers with service codes, you must specify `businessRegistrationNumber`, `taxInformationNumber`, and distinct `serviceTaxCodes` in `MalaysiaAdditionalInfo` with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you’re an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number.
   *
   * @public
   */
  taxInformationNumber?: string | undefined;

  /**
   * The tax registration number (TRN) in Malaysia.
   *
   * For individual, you can specify the `taxInformationNumber` in `MalaysiaAdditionalInfo` with NRIC type, and a valid MyKad or NRIC number. For business, you must specify a `businessRegistrationNumber` in `MalaysiaAdditionalInfo` with a TIN type and tax identification number. For business resellers, you must specify a `businessRegistrationNumber` and `taxInformationNumber` in `MalaysiaAdditionalInfo` with a sales and service tax (SST) type and a valid SST number.
   *
   * For business resellers with service codes, you must specify `businessRegistrationNumber`, `taxInformationNumber`, and distinct `serviceTaxCodes` in `MalaysiaAdditionalInfo` with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you’re an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number.
   *
   * @public
   */
  businessRegistrationNumber?: string | undefined;
}

/**
 * Contains additional tax information associated with your Tax Registration Number (TRN) in Mexico, such as the SAT tax regime and CFDI usage code.
 *
 * @public
 */
export interface MexicoAdditionalInfo {
  /**
   * The SAT-assigned tax regime code for your business in Mexico. Must be a 3-digit number (for example, `601` for General de Ley Personas Morales).
   *
   * @public
   */
  taxRegime?: string | undefined;

  /**
   * The full name of the SAT tax regime associated with your business in Mexico.
   *
   * @public
   */
  taxRegimeFullName?: string | undefined;

  /**
   * The SAT CFDI usage code that identifies the purpose of the invoice in Mexico (for example, `G01` for goods acquisition, `S01` for no tax effects).
   *
   * @public
   */
  cfdiUsageCode?: string | undefined;
}

/**
 * Additional tax information associated with your TRN in Monaco.
 *
 * @public
 */
export interface MonacoAdditionalInfo {
  /**
   * The business number for the company in Monaco. Can be up to 12 alphanumeric characters.
   *
   * @public
   */
  businessNumber: string | undefined;
}

/**
 * Additional tax information associated with your TRN in the Philippines.
 *
 * @public
 */
export interface PhilippinesAdditionalInfo {
  /**
   * Indicates whether the account is VAT-registered with the Philippines Bureau of Internal Revenue (BIR).
   *
   * @public
   */
  isVatRegistered?: boolean | undefined;
}

/**
 * Additional tax information associated with your TRN in Poland.
 *
 * @public
 */
export interface PolandAdditionalInfo {
  /**
   * The individual tax registration number (NIP). Individual NIP is valid for other taxes excluding VAT purposes.
   *
   * @public
   */
  individualRegistrationNumber?: string | undefined;

  /**
   * True if your business is a member of a VAT group with a NIP active for VAT purposes. Otherwise, this is false.
   *
   * @public
   */
  isGroupVatEnabled?: boolean | undefined;

  /**
   * The tax registration number type. Valid values are `EUTaxRegistrationNumber`, `LocalTaxRegistrationNumber`, or `LocalRegistrationNumber`.
   *
   * @public
   */
  taxRegistrationNumberType?: PolandTaxRegistrationNumberType | undefined;
}

/**
 * Additional tax information to specify for a TRN in Romania.
 *
 * @public
 */
export interface RomaniaAdditionalInfo {
  /**
   * The tax registration number type. The value can be `TaxRegistrationNumber` or `LocalRegistrationNumber`.
   *
   * @public
   */
  taxRegistrationNumberType: TaxRegistrationNumberType | undefined;
}

/**
 * Additional tax information associated with your TRN in Saudi Arabia.
 *
 * @public
 */
export interface SaudiArabiaAdditionalInfo {
  /**
   * The tax registration number type.
   *
   * @public
   */
  taxRegistrationNumberType?: SaudiArabiaTaxRegistrationNumberType | undefined;
}

/**
 * Additional tax information associated with your TRN in South Korea.
 *
 * @public
 */
export interface SouthKoreaAdditionalInfo {
  /**
   * The business legal name based on the most recently uploaded tax registration certificate.
   *
   * @public
   */
  businessRepresentativeName: string | undefined;

  /**
   * Line of business based on the most recently uploaded tax registration certificate.
   *
   * @public
   */
  lineOfBusiness: string | undefined;

  /**
   * Item of business based on the most recently uploaded tax registration certificate.
   *
   * @public
   */
  itemOfBusiness: string | undefined;
}

/**
 * Additional tax information associated with your TRN in Spain.
 *
 * @public
 */
export interface SpainAdditionalInfo {
  /**
   * The registration type in Spain.
   *
   * @public
   */
  registrationType: RegistrationType | undefined;
}

/**
 * Additional tax information associated with your TRN in Turkey.
 *
 * @public
 */
export interface TurkeyAdditionalInfo {
  /**
   * The tax office where you're registered. You can enter this information as a string. The Tax Settings API will add this information to your invoice. This parameter is required for business-to-business (B2B) and business-to-government customers. It's not required for business-to-consumer (B2C) customers.
   *
   * @public
   */
  taxOffice?: string | undefined;

  /**
   * The Registered Electronic Mail (REM) that is used to send notarized communication. This parameter is optional for business-to-business (B2B) and business-to-government (B2G) customers. It's not required for business-to-consumer (B2C) customers.
   *
   * @public
   */
  kepEmailId?: string | undefined;

  /**
   * Secondary tax ID (“harcama birimi VKN”si”). If one isn't provided, we will use your VKN as the secondary ID.
   *
   * @public
   */
  secondaryTaxId?: string | undefined;

  /**
   * The industry information that tells the Tax Settings API if you're subject to additional withholding taxes. This information required for business-to-business (B2B) customers. This information is conditionally mandatory for B2B customers who are subject to KDV tax.
   *
   * @public
   */
  industries?: Industries | undefined;
}

/**
 * Additional tax information associated with your TRN in Ukraine.
 *
 * @public
 */
export interface UkraineAdditionalInfo {
  /**
   * The tax registration type.
   *
   * @public
   */
  ukraineTrnType: UkraineTrnType | undefined;
}

/**
 * Additional tax information to specify for a TRN in Uzbekistan.
 *
 * @public
 */
export interface UzbekistanAdditionalInfo {
  /**
   * The tax registration number type. The tax registration number type valid values are `Business` and `Individual`.
   *
   * @public
   */
  taxRegistrationNumberType?: UzbekistanTaxRegistrationNumberType | undefined;

  /**
   * The unique 12-digit number issued to identify VAT-registered identities in Uzbekistan.
   *
   * @public
   */
  vatRegistrationNumber?: string | undefined;
}

/**
 * Additional tax information to specify for a TRN in Vietnam.
 *
 * @public
 */
export interface VietnamAdditionalInfo {
  /**
   * The enterprise identification number for tax registration. This field must be provided for successful API operation.
   *
   * @public
   */
  enterpriseIdentificationNumber?: string | undefined;

  /**
   * The electronic transaction code number on the tax return document. This field must be provided for successful API operation.
   *
   * @public
   */
  electronicTransactionCodeNumber?: string | undefined;

  /**
   * The payment voucher number on the tax return payment document. This field must be provided for successful API operation.
   *
   * @public
   */
  paymentVoucherNumber?: string | undefined;

  /**
   * The date on the tax return payment document. This field must be provided for successful API operation.
   *
   * @public
   */
  paymentVoucherNumberDate?: string | undefined;
}

/**
 * Additional tax information associated with your TRN. The Tax Settings API returns country-specific information in the response when any additional information is present with your TRN for the following countries.
 *
 * @public
 */
export interface AdditionalInfoResponse {
  /**
   * Additional tax information associated with your TRN in Malaysia.
   *
   * @public
   */
  malaysiaAdditionalInfo?: MalaysiaAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Israel.
   *
   * @public
   */
  israelAdditionalInfo?: IsraelAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Estonia.
   *
   * @public
   */
  estoniaAdditionalInfo?: EstoniaAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Canada.
   *
   * @public
   */
  canadaAdditionalInfo?: CanadaAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Brazil. The Tax Settings API returns this information in your response when any additional information is present with your TRN in Brazil.
   *
   * @public
   */
  brazilAdditionalInfo?: BrazilAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Spain.
   *
   * @public
   */
  spainAdditionalInfo?: SpainAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Kenya.
   *
   * @public
   */
  kenyaAdditionalInfo?: KenyaAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in South Korea.
   *
   * @public
   */
  southKoreaAdditionalInfo?: SouthKoreaAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Turkey.
   *
   * @public
   */
  turkeyAdditionalInfo?: TurkeyAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Georgia.
   *
   * @public
   */
  georgiaAdditionalInfo?: GeorgiaAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Italy.
   *
   * @public
   */
  italyAdditionalInfo?: ItalyAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Romania.
   *
   * @public
   */
  romaniaAdditionalInfo?: RomaniaAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Ukraine.
   *
   * @public
   */
  ukraineAdditionalInfo?: UkraineAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Poland.
   *
   * @public
   */
  polandAdditionalInfo?: PolandAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Saudi Arabia.
   *
   * @public
   */
  saudiArabiaAdditionalInfo?: SaudiArabiaAdditionalInfo | undefined;

  /**
   * Additional tax information in India.
   *
   * @public
   */
  indiaAdditionalInfo?: IndiaAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Indonesia.
   *
   * @public
   */
  indonesiaAdditionalInfo?: IndonesiaAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Vietnam.
   *
   * @public
   */
  vietnamAdditionalInfo?: VietnamAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Egypt.
   *
   * @public
   */
  egyptAdditionalInfo?: EgyptAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Greece.
   *
   * @public
   */
  greeceAdditionalInfo?: GreeceAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Uzbekistan.
   *
   * @public
   */
  uzbekistanAdditionalInfo?: UzbekistanAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in the Philippines.
   *
   * @public
   */
  philippinesAdditionalInfo?: PhilippinesAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Belgium.
   *
   * @public
   */
  belgiumAdditionalInfo?: BelgiumAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Chile.
   *
   * @public
   */
  chileAdditionalInfo?: ChileAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in France.
   *
   * @public
   */
  franceAdditionalInfo?: FranceAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Monaco.
   *
   * @public
   */
  monacoAdditionalInfo?: MonacoAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your Tax Registration Number (TRN) in Germany.
   *
   * @public
   */
  germanyAdditionalInfo?: GermanyAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your Tax Registration Number (TRN) in Mexico.
   *
   * @public
   */
  mexicoAdditionalInfo?: MexicoAdditionalInfo | undefined;
}

/**
 * The metadata for your tax document.
 *
 * @public
 */
export interface TaxDocumentMetadata {
  /**
   * The tax document access token, which contains information that the Tax Settings API uses to locate the tax document.
   *
   * > **Note:** If you update your tax registration, the existing `taxDocumentAccessToken` won't be valid. To get the latest token, call the `GetTaxRegistration` or `ListTaxRegistrations` API operation. This token is valid for 24 hours.
   *
   * @public
   */
  taxDocumentAccessToken: string | undefined;

  /**
   * The name of your tax document.
   *
   * @public
   */
  taxDocumentName: string | undefined;
}

/**
 * Your TRN information with jurisdiction details. This doesn't contain the full legal address associated with the TRN information.
 *
 * @public
 */
export interface TaxRegistrationWithJurisdiction {
  /**
   * Your tax registration unique identifier.
   *
   * @public
   */
  registrationId: string | undefined;

  /**
   * The type of your tax registration. This can be either `VAT` or `GST`.
   *
   * @public
   */
  registrationType: TaxRegistrationType | undefined;

  /**
   * The legal name associated with your TRN information.
   *
   * @public
   */
  legalName: string | undefined;

  /**
   * The status of your TRN. This can be either `Verified`, `Pending`, `Deleted`, or `Rejected`.
   *
   * @public
   */
  status: TaxRegistrationStatus | undefined;

  /**
   * The industry that describes your business. For business-to-business (B2B) customers, specify Business. For business-to-consumer (B2C) customers, specify Individual. For business-to-government (B2G), specify Government.Note that certain values may not applicable for the request country. Please refer to country specific information in API document.
   *
   * @public
   */
  sector?: Sector | undefined;

  /**
   * The metadata for your tax document.
   *
   * @public
   */
  taxDocumentMetadatas?: TaxDocumentMetadata[] | undefined;

  /**
   * The email address to receive VAT invoices.
   *
   * @public
   */
  certifiedEmailId?: string | undefined;

  /**
   * Additional tax information associated with your TRN.
   *
   * @public
   */
  additionalTaxInformation?: AdditionalInfoResponse | undefined;

  /**
   * The jurisdiction associated with your TRN information.
   *
   * @public
   */
  jurisdiction: Jurisdiction | undefined;
}

/**
 * An object with your `accountId` and TRN information.
 *
 * @public
 */
export interface AccountDetails {
  /**
   * List of unique account identifiers.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Your TRN information. Instead of having full legal address, here TRN information will have jurisdiction details (for example, country code and state/region/province if applicable).
   *
   * @public
   */
  taxRegistration?: TaxRegistrationWithJurisdiction | undefined;

  /**
   * Tax inheritance information associated with the account.
   *
   * @public
   */
  taxInheritanceDetails?: TaxInheritanceDetails | undefined;

  /**
   * The meta data information associated with the account.
   *
   * @public
   */
  accountMetaData?: AccountMetaData | undefined;
}

/**
 * Additional tax information associated with your tax registration number (TRN). Depending on the TRN for a specific country, you might need to specify this information when you set your TRN.
 *
 * You can only specify one of the following parameters and the value can't be empty.
 *
 * > **Note:** The parameter that you specify must match the country for the TRN, if available. For example, if you set a TRN in Canada for specific provinces, you must also specify the `canadaAdditionalInfo` parameter.
 *
 * @public
 */
export interface AdditionalInfoRequest {
  /**
   * Additional tax information to specify for a TRN in Malaysia.
   *
   * @public
   */
  malaysiaAdditionalInfo?: MalaysiaAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Israel.
   *
   * @public
   */
  israelAdditionalInfo?: IsraelAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Estonia.
   *
   * @public
   */
  estoniaAdditionalInfo?: EstoniaAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Canada.
   *
   * @public
   */
  canadaAdditionalInfo?: CanadaAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Spain.
   *
   * @public
   */
  spainAdditionalInfo?: SpainAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Kenya.
   *
   * @public
   */
  kenyaAdditionalInfo?: KenyaAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in South Korea.
   *
   * @public
   */
  southKoreaAdditionalInfo?: SouthKoreaAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Turkey.
   *
   * @public
   */
  turkeyAdditionalInfo?: TurkeyAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Georgia.
   *
   * @public
   */
  georgiaAdditionalInfo?: GeorgiaAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Italy.
   *
   * @public
   */
  italyAdditionalInfo?: ItalyAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Romania.
   *
   * @public
   */
  romaniaAdditionalInfo?: RomaniaAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Ukraine.
   *
   * @public
   */
  ukraineAdditionalInfo?: UkraineAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Poland.
   *
   * @public
   */
  polandAdditionalInfo?: PolandAdditionalInfo | undefined;

  /**
   * Additional tax information associated with your TRN in Saudi Arabia.
   *
   * @public
   */
  saudiArabiaAdditionalInfo?: SaudiArabiaAdditionalInfo | undefined;

  /**
   * @public
   */
  indonesiaAdditionalInfo?: IndonesiaAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Vietnam.
   *
   * @public
   */
  vietnamAdditionalInfo?: VietnamAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Egypt.
   *
   * @public
   */
  egyptAdditionalInfo?: EgyptAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Greece.
   *
   * @public
   */
  greeceAdditionalInfo?: GreeceAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Uzbekistan.
   *
   * @public
   */
  uzbekistanAdditionalInfo?: UzbekistanAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in the Philippines.
   *
   * @public
   */
  philippinesAdditionalInfo?: PhilippinesAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Belgium.
   *
   * @public
   */
  belgiumAdditionalInfo?: BelgiumAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Chile.
   *
   * @public
   */
  chileAdditionalInfo?: ChileAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in France.
   *
   * @public
   */
  franceAdditionalInfo?: FranceAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a TRN in Monaco.
   *
   * @public
   */
  monacoAdditionalInfo?: MonacoAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a Tax Registration Number (TRN) in Germany.
   *
   * @public
   */
  germanyAdditionalInfo?: GermanyAdditionalInfo | undefined;

  /**
   * Additional tax information to specify for a Tax Registration Number (TRN) in Mexico.
   *
   * @public
   */
  mexicoAdditionalInfo?: MexicoAdditionalInfo | undefined;
}

/**
 * The address domain associate with the tax information.
 *
 * @public
 */
export interface Authority {
  /**
   * The country code for the country that the address is in.
   *
   * @public
   */
  country: string | undefined;

  /**
   * The state that the address is located.
   *
   * @public
   */
  state?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTaxRegistrationRequest {
  /**
   * List of unique account identifiers.
   *
   * @public
   */
  accountIds: string[] | undefined;
}

/**
 * The error object for representing failures in the `BatchDeleteTaxRegistration` operation.
 *
 * @public
 */
export interface BatchDeleteTaxRegistrationError {
  /**
   * The unique account identifier for the account whose tax registration couldn't be deleted during the `BatchDeleteTaxRegistration` operation.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The error message for an individual failure in the `BatchDeleteTaxRegistration` operation.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The error code for an individual failure in BatchDeleteTaxRegistration operation.
   *
   * @public
   */
  code?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteTaxRegistrationResponse {
  /**
   * The list of errors for the accounts the TRN information could not be deleted for.
   *
   * @public
   */
  errors: BatchDeleteTaxRegistrationError[] | undefined;
}

/**
 * The information about the specified parameter in the request that caused an error.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the parameter that caused a `ValidationException` error.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface BatchGetTaxExemptionsRequest {
  /**
   * List of unique account identifiers.
   *
   * @public
   */
  accountIds: string[] | undefined;
}

/**
 * The tax exemption type.
 *
 * @public
 */
export interface TaxExemptionType {
  /**
   * The tax exemption's type display name.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The tax exemption's type description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tax exemption's applicable jurisdictions.
   *
   * @public
   */
  applicableJurisdictions?: Authority[] | undefined;
}

/**
 * The tax exemption.
 *
 * @public
 */
export interface TaxExemption {
  /**
   * The address domain associate with tax exemption.
   *
   * @public
   */
  authority: Authority | undefined;

  /**
   * The tax exemption type.
   *
   * @public
   */
  taxExemptionType: TaxExemptionType | undefined;

  /**
   * The tax exemption effective date.
   *
   * @public
   */
  effectiveDate?: Date | undefined;

  /**
   * The tax exemption expiration date.
   *
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * The tax exemption recording time in the `TaxSettings` system.
   *
   * @public
   */
  systemEffectiveDate?: Date | undefined;

  /**
   * The tax exemption status.
   *
   * @public
   */
  status?: EntityExemptionAccountStatus | undefined;
}

/**
 * The tax exemption details.
 *
 * @public
 */
export interface TaxExemptionDetails {
  /**
   * Tax exemptions.
   *
   * @public
   */
  taxExemptions?: TaxExemption[] | undefined;

  /**
   * The indicator if the tax exemption is inherited from the consolidated billing family management account.
   *
   * @public
   */
  heritageObtainedDetails?: boolean | undefined;

  /**
   * The consolidated billing family management account the tax exemption inherited from.
   *
   * @public
   */
  heritageObtainedParentEntity?: string | undefined;

  /**
   * The reason of the heritage inheritance.
   *
   * @public
   */
  heritageObtainedReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetTaxExemptionsResponse {
  /**
   * The tax exemption details map of accountId and tax exemption details.
   *
   * @public
   */
  taxExemptionDetailsMap?: Record<string, TaxExemptionDetails> | undefined;

  /**
   * The list of accounts that failed to get tax exemptions.
   *
   * @public
   */
  failedAccounts?: string[] | undefined;
}

/**
 * The tax registration document.
 *
 * @public
 */
export interface TaxRegistrationDocFile {
  /**
   * The tax registration document name.
   *
   * @public
   */
  fileName: string | undefined;

  /**
   * The tax registration document content.
   *
   * @public
   */
  fileContent: Uint8Array | undefined;
}

/**
 * The Amazon S3 bucket in your account where your tax document is located.
 *
 * @public
 */
export interface SourceS3Location {
  /**
   * The name of your Amazon S3 bucket that your tax document is located.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The object key of your tax document object in Amazon S3.
   *
   * @public
   */
  key: string | undefined;
}

/**
 * Tax registration document information.
 *
 * @public
 */
export interface TaxRegistrationDocument {
  /**
   * The Amazon S3 location where your tax registration document is stored.
   *
   * @public
   */
  s3Location?: SourceS3Location | undefined;

  /**
   * The tax registration document.
   *
   * @public
   */
  file?: TaxRegistrationDocFile | undefined;
}

/**
 * Required information to verify your TRN.
 *
 * @public
 */
export interface VerificationDetails {
  /**
   * Date of birth to verify your submitted TRN. Use the `YYYY-MM-DD` format.
   *
   * @public
   */
  dateOfBirth?: string | undefined;

  /**
   * The tax registration document, which is required for specific countries such as Bangladesh, Kenya, South Korea and Spain.
   *
   * @public
   */
  taxRegistrationDocuments?: TaxRegistrationDocument[] | undefined;
}

/**
 * The TRN information you provide when you add a new TRN, or update.
 *
 * @public
 */
export interface TaxRegistrationEntry {
  /**
   * Your tax registration unique identifier.
   *
   * @public
   */
  registrationId: string | undefined;

  /**
   * Your tax registration type. This can be either `VAT` or `GST`.
   *
   * @public
   */
  registrationType: TaxRegistrationType | undefined;

  /**
   * The legal name associated with your TRN.
   *
   * > **Note:** If you're setting a TRN in Brazil, you don't need to specify the legal name. For TRNs in other countries, you must specify the legal name.
   *
   * @public
   */
  legalName?: string | undefined;

  /**
   * The legal address associated with your TRN.
   *
   * > **Note:**
   * >
   * > If you're setting a TRN in Brazil for the CNPJ tax type, you don't need to specify the legal address.
   * >
   * > For TRNs in other countries and for CPF tax types Brazil, you must specify the legal address.
   *
   * @public
   */
  legalAddress?: Address | undefined;

  /**
   * The industry that describes your business. For business-to-business (B2B) customers, specify Business. For business-to-consumer (B2C) customers, specify Individual. For business-to-government (B2G), specify Government.Note that certain values may not applicable for the request country. Please refer to country specific information in API document.
   *
   * @public
   */
  sector?: Sector | undefined;

  /**
   * Additional tax information associated with your TRN. You only need to specify this parameter if Amazon Web Services collects any additional information for your country within AdditionalInfoRequest.
   *
   * @public
   */
  additionalTaxInformation?: AdditionalInfoRequest | undefined;

  /**
   * Additional details needed to verify your TRN information in Brazil. You only need to specify this parameter when you set a TRN in Brazil that is the CPF tax type.
   *
   * > **Note:** Don't specify this parameter to set a TRN in Brazil of the CNPJ tax type or to set a TRN for another country.
   *
   * @public
   */
  verificationDetails?: VerificationDetails | undefined;

  /**
   * The email address to receive VAT invoices.
   *
   * @public
   */
  certifiedEmailId?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutTaxRegistrationRequest {
  /**
   * List of unique account identifiers.
   *
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * Your TRN information that will be stored to the accounts mentioned in `putEntries`.
   *
   * @public
   */
  taxRegistrationEntry: TaxRegistrationEntry | undefined;
}

/**
 * The error object for representing failures in the `BatchPutTaxRegistration` operation.
 *
 * @public
 */
export interface BatchPutTaxRegistrationError {
  /**
   * The unique account identifier for the account that the tax registration couldn't be added, or updated during the `BatchPutTaxRegistration` operation.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The error message for an individual failure in the `BatchPutTaxRegistration` operation.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The error code for an individual failure in the `BatchPutTaxRegistration` operation.
   *
   * @public
   */
  code?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutTaxRegistrationResponse {
  /**
   * The status of your TRN stored in the system after processing. Based on the validation occurring on the TRN, the status can be `Verified`, `Pending` or `Rejected`.
   *
   * @public
   */
  status?: TaxRegistrationStatus | undefined;

  /**
   * List of errors for the accounts the TRN information could not be added or updated to.
   *
   * @public
   */
  errors: BatchPutTaxRegistrationError[] | undefined;
}

/**
 * @public
 */
export interface DeleteSupplementalTaxRegistrationRequest {
  /**
   * The unique authority Id for the supplemental TRN information that needs to be deleted.
   *
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
   * Unique account identifier for the TRN information that needs to be deleted. If this isn't passed, the account ID corresponding to the credentials of the API caller will be used for this parameter.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTaxRegistrationResponse {}

/**
 * The location of the Amazon S3 bucket that you specify to download your tax documents to.
 *
 * @public
 */
export interface DestinationS3Location {
  /**
   * The name of your Amazon S3 bucket that you specify to download your tax documents to.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The Amazon S3 object prefix that you specify for your tax document file.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * The exemption certificate.
 *
 * @public
 */
export interface ExemptionCertificate {
  /**
   * The exemption certificate file name.
   *
   * @public
   */
  documentName: string | undefined;

  /**
   * The exemption certificate file content.
   *
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
   * The supported types of tax exemptions.
   *
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
 */
export interface GetTaxInheritanceResponse {
  /**
   * The tax inheritance status.
   *
   * @public
   */
  heritageStatus?: HeritageStatus | undefined;
}

/**
 * @public
 */
export interface GetTaxRegistrationRequest {
  /**
   * Your unique account identifier.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * Your TRN information.
 *
 * @public
 */
export interface TaxRegistration {
  /**
   * Your tax registration unique identifier.
   *
   * @public
   */
  registrationId: string | undefined;

  /**
   * Type of your tax registration.
   *
   * @public
   */
  registrationType: TaxRegistrationType | undefined;

  /**
   * The legal name associated with your TRN registration.
   *
   * @public
   */
  legalName: string | undefined;

  /**
   * The status of your TRN. This can be either `Verified`, `Pending`, `Deleted`, or `Rejected`.
   *
   * @public
   */
  status: TaxRegistrationStatus | undefined;

  /**
   * The industry that describes your business. For business-to-business (B2B) customers, specify Business. For business-to-consumer (B2C) customers, specify Individual. For business-to-government (B2G), specify Government. Note that certain values may not applicable for the request country. Please refer to country specific information in API document.
   *
   * @public
   */
  sector?: Sector | undefined;

  /**
   * The metadata for your tax document.
   *
   * @public
   */
  taxDocumentMetadatas?: TaxDocumentMetadata[] | undefined;

  /**
   * The email address to receive VAT invoices.
   *
   * @public
   */
  certifiedEmailId?: string | undefined;

  /**
   * Additional tax information associated with your TRN.
   *
   * @public
   */
  additionalTaxInformation?: AdditionalInfoResponse | undefined;

  /**
   * The legal address associated with your TRN registration.
   *
   * @public
   */
  legalAddress: Address | undefined;
}

/**
 * @public
 */
export interface GetTaxRegistrationResponse {
  /**
   * TRN information of the account mentioned in the request.
   *
   * @public
   */
  taxRegistration?: TaxRegistration | undefined;
}

/**
 * @public
 */
export interface GetTaxRegistrationDocumentRequest {
  /**
   * The Amazon S3 bucket that you specify to download your tax documents to.
   *
   * @public
   */
  destinationS3Location?: DestinationS3Location | undefined;

  /**
   * The metadata for your tax document.
   *
   * @public
   */
  taxDocumentMetadata: TaxDocumentMetadata | undefined;
}

/**
 * @public
 */
export interface GetTaxRegistrationDocumentResponse {
  /**
   * The file path of the Amazon S3 bucket where you want to download your tax document to.
   *
   * @public
   */
  destinationFilePath?: string | undefined;

  /**
   * The Amazon S3 presigned URL of the tax registration document.
   *
   * @public
   */
  presignedS3Url?: string | undefined;
}

/**
 * @public
 */
export interface ListSupplementalTaxRegistrationsRequest {
  /**
   * The number of `taxRegistrations` results you want in one response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Supplemental TRN details.
 *
 * @public
 */
export interface SupplementalTaxRegistration {
  /**
   * The supplemental TRN unique identifier.
   *
   * @public
   */
  registrationId: string | undefined;

  /**
   * Type of supplemental TRN. Currently, this can only be VAT.
   *
   * @public
   */
  registrationType: SupplementalTaxRegistrationType | undefined;

  /**
   * The legal name associated with your TRN registration.
   *
   * @public
   */
  legalName: string | undefined;

  /**
   * The details of the address associated with the TRN information.
   *
   * @public
   */
  address: Address | undefined;

  /**
   * Unique authority ID for the supplemental TRN.
   *
   * @public
   */
  authorityId: string | undefined;

  /**
   * The status of your TRN.
   *
   * @public
   */
  status: TaxRegistrationStatus | undefined;
}

/**
 * @public
 */
export interface ListSupplementalTaxRegistrationsResponse {
  /**
   * The list of supplemental tax registrations.
   *
   * @public
   */
  taxRegistrations: SupplementalTaxRegistration[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTaxExemptionsRequest {
  /**
   * The number of results you want in one response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTaxExemptionsResponse {
  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The tax exemption details map of `accountId` and tax exemption details.
   *
   * @public
   */
  taxExemptionDetailsMap?: Record<string, TaxExemptionDetails> | undefined;
}

/**
 * @public
 */
export interface ListTaxRegistrationsRequest {
  /**
   * Number of `accountDetails` results you want in one response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTaxRegistrationsResponse {
  /**
   * The list of account details. This contains account Ids and TRN Information for each of the linked accounts.
   *
   * @public
   */
  accountDetails: AccountDetails[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The supplemental TRN information to provide when adding or updating a supplemental TRN.
 *
 * @public
 */
export interface SupplementalTaxRegistrationEntry {
  /**
   * The supplemental TRN unique identifier.
   *
   * @public
   */
  registrationId: string | undefined;

  /**
   * Type of supplemental TRN. Currently, this can only be VAT.
   *
   * @public
   */
  registrationType: SupplementalTaxRegistrationType | undefined;

  /**
   * The legal name associated with your TRN registration.
   *
   * @public
   */
  legalName: string | undefined;

  /**
   * The details of the address associated with the TRN information.
   *
   * @public
   */
  address: Address | undefined;
}

/**
 * @public
 */
export interface PutSupplementalTaxRegistrationRequest {
  /**
   * The supplemental TRN information that will be stored for the caller account ID.
   *
   * @public
   */
  taxRegistrationEntry: SupplementalTaxRegistrationEntry | undefined;
}

/**
 * @public
 */
export interface PutSupplementalTaxRegistrationResponse {
  /**
   * Unique authority ID for the supplemental TRN information that was stored.
   *
   * @public
   */
  authorityId: string | undefined;

  /**
   * The status of the supplemental TRN stored in the system after processing. Based on the validation occurring on the TRN, the status can be `Verified`, `Pending`, `Rejected`, or `Deleted`.
   *
   * @public
   */
  status: TaxRegistrationStatus | undefined;
}

/**
 * @public
 */
export interface PutTaxExemptionRequest {
  /**
   * The list of unique account identifiers.
   *
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * The address domain associate with the tax information.
   *
   * @public
   */
  authority: Authority | undefined;

  /**
   * The exemption type. Use the supported tax exemption type description.
   *
   * @public
   */
  exemptionType: string | undefined;

  /**
   * The exemption certificate.
   *
   * @public
   */
  exemptionCertificate: ExemptionCertificate | undefined;
}

/**
 * @public
 */
export interface PutTaxExemptionResponse {
  /**
   * The customer support case ID.
   *
   * @public
   */
  caseId?: string | undefined;
}

/**
 * @public
 */
export interface PutTaxInheritanceRequest {
  /**
   * The tax inheritance status.
   *
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
   * Your unique account identifier.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Your TRN information that will be stored to the account mentioned in `accountId`.
   *
   * @public
   */
  taxRegistrationEntry: TaxRegistrationEntry | undefined;
}

/**
 * @public
 */
export interface PutTaxRegistrationResponse {
  /**
   * The status of your TRN stored in the system after processing. Based on the validation occurring on the TRN, the status can be `Verified`, `Pending` or `Rejected`.
   *
   * @public
   */
  status?: TaxRegistrationStatus | undefined;
}

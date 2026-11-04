// smithy-typescript generated code
import type {
  ContactType,
  CountryCode,
  DomainAvailability,
  ExtraParamName,
  ListDomainsAttributeName,
  ListOperationsSortAttributeName,
  OperationStatus,
  OperationType,
  Operator,
  PriceType,
  ReachabilityStatus,
  SortOrder,
  StatusFlag,
  Transferable,
} from "./enums";

/**
 * The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements.
 *
 * @public
 */
export interface AcceptDomainTransferFromAnotherAwsAccountRequest {
  /**
   * The name of the domain that was specified when another Amazon Web Services account submitted a [TransferDomainToAnotherAwsAccount](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html) request.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The password that was returned by the [TransferDomainToAnotherAwsAccount](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html) request.
   *
   * @public
   */
  Password: string | undefined;
}

/**
 * The AcceptDomainTransferFromAnotherAwsAccount response includes the following element.
 *
 * @public
 */
export interface AcceptDomainTransferFromAnotherAwsAccountResponse {
  /**
   * Identifier for tracking the progress of the request. To query the operation status, use [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * Information about a delegation signer (DS) record that was created in the registry by [AssociateDelegationSignerToDomain](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html).
 *
 * @public
 */
export interface DnssecSigningAttributes {
  /**
   * Algorithm which was used to generate the digest from the public key.
   *
   * @public
   */
  Algorithm?: number | undefined;

  /**
   * Defines the type of key. It can be either a KSK (key-signing-key, value 257) or ZSK (zone-signing-key, value 256). Using KSK is always encouraged. Only use ZSK if your DNS provider isn't Route 53 and you don’t have KSK available.
   *
   * If you have KSK and ZSK keys, always use KSK to create a delegations signer (DS) record. If you have ZSK keys only – use ZSK to create a DS record.
   *
   * @public
   */
  Flags?: number | undefined;

  /**
   * The base64-encoded public key part of the key pair that is passed to the registry.
   *
   * @public
   */
  PublicKey?: string | undefined;
}

/**
 * @public
 */
export interface AssociateDelegationSignerToDomainRequest {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The information about a key, including the algorithm, public key-value, and flags.
   *
   * @public
   */
  SigningAttributes: DnssecSigningAttributes | undefined;
}

/**
 * @public
 */
export interface AssociateDelegationSignerToDomainResponse {
  /**
   * The identifier for tracking the progress of the request. To query the operation status, use [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * Information for one billing record.
 *
 * @public
 */
export interface BillingRecord {
  /**
   * The name of the domain that the billing record applies to. If the domain name contains characters other than a-z, 0-9, and - (hyphen), such as an internationalized domain name, then this value is in Punycode. For more information, see [DNS Domain Name Format](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html) in the *Amazon Route 53 Developer Guide*.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The operation that you were charged for.
   *
   * @public
   */
  Operation?: OperationType | undefined;

  /**
   * Deprecated property. This field is retained in report structure for backwards compatibility, but will appear blank.
   *
   * @public
   */
  InvoiceId?: string | undefined;

  /**
   * The date that the operation was billed, in Unix format.
   *
   * @public
   */
  BillDate?: Date | undefined;

  /**
   * The price that you were charged for the operation, in US dollars.
   *
   * Example value: 12.0
   *
   * @public
   */
  Price?: number | undefined;
}

/**
 * The CancelDomainTransferToAnotherAwsAccount request includes the following element.
 *
 * @public
 */
export interface CancelDomainTransferToAnotherAwsAccountRequest {
  /**
   * The name of the domain for which you want to cancel the transfer to another Amazon Web Services account.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The `CancelDomainTransferToAnotherAwsAccount` response includes the following element.
 *
 * @public
 */
export interface CancelDomainTransferToAnotherAwsAccountResponse {
  /**
   * The identifier that `TransferDomainToAnotherAwsAccount` returned to track the progress of the request. Because the transfer request was canceled, the value is no longer valid, and you can't use `GetOperationDetail` to query the operation status.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * The CheckDomainAvailability request contains the following elements.
 *
 * @public
 */
export interface CheckDomainAvailabilityRequest {
  /**
   * The name of the domain that you want to get availability for. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see [Domains that You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html) in the *Amazon Route 53 Developer Guide*.
   *
   * The domain name can contain only the following characters:
   *
   * - Letters a through z. Domain names are not case sensitive.
   * - Numbers 0 through 9.
   * - Hyphen (-). You can't specify a hyphen at the beginning or end of a label.
   * - Period (.) to separate the labels in the name, such as the `.` in `example.com`.
   *
   * Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports internationalized domain names, see [Domains that You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html). For more information, see [Formatting Internationalized Domain Names](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html#domain-name-format-idns).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  IdnLangCode?: string | undefined;
}

/**
 * Currency-specific price information.
 *
 * @public
 */
export interface PriceWithCurrency {
  /**
   * The price of a domain, in a specific currency.
   *
   * @public
   */
  Price: number | undefined;

  /**
   * The currency specifier.
   *
   * @public
   */
  Currency: string | undefined;

  /**
   * Indicates whether the domain has standard or premium pricing. A value of `STANDARD` means the domain is priced at the regular rate for its TLD. A value of `REGISTRY_PREMIUM` means the domain has registry premium pricing, which may be different than the standard rate.
   *
   * @public
   */
  PriceType?: PriceType | undefined;
}

/**
 * The CheckDomainAvailability response includes the following elements.
 *
 * @public
 */
export interface CheckDomainAvailabilityResponse {
  /**
   * Whether the domain name is available for registering.
   *
   * > **Note:** You can register only domains designated as `AVAILABLE`.
   *
   * Valid values:
   *
   * - **AVAILABLE**
   *
   *   The domain name is available.
   *
   * - **AVAILABLE_RESERVED**
   *
   *   The domain name is reserved under specific conditions.
   *
   * - **AVAILABLE_PREORDER**
   *
   *   The domain name is available and can be preordered.
   *
   * - **DONT_KNOW**
   *
   *   The TLD registry didn't reply with a definitive answer about whether the domain name is available. Route 53 can return this response for a variety of reasons, for example, the registry is performing maintenance. Try again later.
   *
   * - **INVALID_NAME_FOR_TLD**
   *
   *   The TLD isn't valid. For example, it can contain characters that aren't allowed.
   *
   * - **PENDING**
   *
   *   The TLD registry didn't return a response in the expected amount of time. When the response is delayed, it usually takes just a few extra seconds. You can resubmit the request immediately.
   *
   * - **RESERVED**
   *
   *   The domain name has been reserved for another person or organization.
   *
   * - **UNAVAILABLE**
   *
   *   The domain name is not available.
   *
   * - **UNAVAILABLE_PREMIUM**
   *
   *   The domain name is not available.
   *
   * - **UNAVAILABLE_RESTRICTED**
   *
   *   The domain name is forbidden.
   *
   * @public
   */
  Availability?: DomainAvailability | undefined;

  /**
   * The price to register the domain name, in the currency that `Currency` specifies. If the domain has registry premium pricing, this price is different from the standard rate for the TLD that `ListPrices` returns. Use `PriceType` to determine which rate applies.
   *
   * This element is returned only when `Availability` is `AVAILABLE`.
   *
   * @public
   */
  Price?: PriceWithCurrency | undefined;
}

/**
 * The CheckDomainTransferability request contains the following elements.
 *
 * @public
 */
export interface CheckDomainTransferabilityRequest {
  /**
   * The name of the domain that you want to transfer to Route 53. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see [Domains that You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html) in the *Amazon Route 53 Developer Guide*.
   *
   * The domain name can contain only the following characters:
   *
   * - Letters a through z. Domain names are not case sensitive.
   * - Numbers 0 through 9.
   * - Hyphen (-). You can't specify a hyphen at the beginning or end of a label.
   * - Period (.) to separate the labels in the name, such as the `.` in `example.com`.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * If the registrar for the top-level domain (TLD) requires an authorization code to transfer the domain, the code that you got from the current registrar for the domain.
   *
   * @public
   */
  AuthCode?: string | undefined;
}

/**
 * A complex type that contains information about whether the specified domain can be transferred to Route 53.
 *
 * @public
 */
export interface DomainTransferability {
  /**
   * Whether the domain name can be transferred to Route 53.
   *
   * > **Note:** You can transfer only domains that have a value of `TRANSFERABLE` or `Transferable`.
   *
   * Valid values:
   *
   * - **TRANSFERABLE**
   *
   *   The domain name can be transferred to Route 53.
   *
   * - **UNTRANSFERRABLE**
   *
   *   The domain name can't be transferred to Route 53.
   *
   * - **DONT_KNOW**
   *
   *   The TLD registry didn't reply with a definitive answer about whether the domain name can be transferred. Route 53 can return this response for a variety of reasons, for example, the registry is performing maintenance. Try again later.
   *
   * - **PENDING**
   *
   *   The TLD registry didn't return a response in the expected amount of time. When the response is delayed, it usually takes just a few extra seconds. You can resubmit the request immediately.
   *
   * - **DOMAIN_IN_OWN_ACCOUNT**
   *
   *   The domain already exists in the current Amazon Web Services account.
   *
   * - **DOMAIN_IN_ANOTHER_ACCOUNT**
   *
   *   The domain exists in another Amazon Web Services account.
   *
   * - **PREMIUM_DOMAIN**
   *
   *   Premium domain transfer is not supported.
   *
   * @public
   */
  Transferable?: Transferable | undefined;
}

/**
 * The CheckDomainTransferability response includes the following elements.
 *
 * @public
 */
export interface CheckDomainTransferabilityResponse {
  /**
   * A complex type that contains information about whether the specified domain can be transferred to Route 53.
   *
   * @public
   */
  Transferability?: DomainTransferability | undefined;

  /**
   * Provides an explanation for when a domain can't be transferred.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The price to transfer the domain name to Route 53, in the currency that `Currency` specifies. If the domain has registry premium pricing, this price is different from the standard rate for the TLD that `ListPrices` returns. Use `PriceType` to determine which rate applies.
   *
   * This element is returned only when Route 53 can determine whether the domain is transferable.
   *
   * @public
   */
  Price?: PriceWithCurrency | undefined;
}

/**
 * The maximum amount that you agree to pay for an operation, and the currency for that amount.
 *
 * @public
 */
export interface Consent {
  /**
   * The maximum amount that you agree to accept.
   *
   * @public
   */
  MaxPrice: number | undefined;

  /**
   * The currency for the `MaxPrice`.
   *
   * @public
   */
  Currency: string | undefined;
}

/**
 * ExtraParam includes the following elements.
 *
 * @public
 */
export interface ExtraParam {
  /**
   * The name of an additional parameter that is required by a top-level domain. Here are the top-level domains that require additional parameters and the names of the parameters that they require:
   *
   * - **.au, .com.au, and .net.au**
   *
   *   - `AU_REGISTRANT_NAME`
   *   - `AU_ID_NUMBER`
   *   - `AU_ID_TYPE`
   *
   *     Valid values include the following:
   *
   *     - `ABN` (Australian business number)
   *     - `ACN` (Australian company number)
   *     - `TM` (Trademark number)
   *   - `AU_ELIGIBILITY_TYPE`
   *
   *     Valid values include the following:
   *
   *     - CHARITABLE_TRUST (Charitable trust)
   *     - CHARITY (Charity)
   *     - CHILD_CARE_CENTRE (Child care centre)
   *     - CLUB (Club)
   *     - COMMERCIAL_STATUTORY_BODY (Commercial statutory body)
   *     - COMMONWEALTH_ENTITY (Commonwealth entity)
   *     - COMPANY (Company)
   *     - COMPANY_LIMITED_BY_GUARANTEE (Company limited by guarantee)
   *     - EDUCATIONAL_INSTITUTION (Educational institution)
   *     - GOVERNMENT_SCHOOL (Government school)
   *     - HIGHER_EDUCATION_INSTITUTION (Higher education institution)
   *     - INCORPORATED_ASSOCIATION (Incorporated association)
   *     - INDIGENOUS_CORPORATION (Indigenous corporation)
   *     - INDUSTRY_BODY (Industry body)
   *     - INDUSTRY_ORGANISATION (Industry association)
   *     - NATIONAL_BODY (National body)
   *     - NON_DISTRIBUTING_COOPERATIVE (Non-distributing cooperative)
   *     - NON_GOVERNMENT_SCHOOL (Non-government school)
   *     - NON_PROFIT_ORGANISATION (Non-profit organisation)
   *     - NON_TRADING_COOPERATIVE (Non-trading cooperative)
   *     - NOT_FOR_PROFIT_COMMUNITY_GROUP (Not-for-profit community group)
   *     - PARTNERSHIP (Partnership)
   *     - PEAK_STATE_TERRITORY_BODY (Peak state/territory body)
   *     - PENDING_TM_OWNER (Pending TM owner)
   *     - POLITICAL_PARTY (Political party)
   *     - PRESCHOOL (Pre-school)
   *     - PUBLIC_PRIVATE_ANCILLARY_FUND (Public/private ancillary fund)
   *     - REGISTERED_BUSINESS (Registered business)
   *     - REGISTERED_ORGANISATION (Registered organisation)
   *     - REGISTRABLE_BODY (Registrable body)
   *     - RESEARCH_ORGANISATION (Research organisation)
   *     - STATUTORY_BODY (Statutory body)
   *     - TRADE_UNION (Trade union)
   *     - TRADEMARK_OWNER (Trademark owner)
   *     - TRADING_COOPERATIVE (Trading cooperative)
   *     - TRAINING_ORGANISATION (Training organisation)
   *     - TRUST (Trust)
   *     - UNINCORPORATED_ASSOCIATION (Unincorporated association)
   *     - EDUCATION_AND_CARE_SERVICES_CHILDCARE (Education and care services (child care))
   *     - GOVERNMENT_BODY (Government body)
   *     - PROVIDER_OF_NON_ACCREDITED_TRAINING (Provider of non-accredited training)
   *     - RELIGIOUS_CHURCH_GROUP (Religious/church group)
   *     - SOLE_TRADER (Sole trader)
   *   - `AU_POLICY_REASON`
   *
   *     Valid values include the following:
   *
   *     - `POLICY_REASON_1`
   *
   *       `POLICY_REASON_2`
   *
   * - **.ca**
   *
   *   - `BRAND_NUMBER`
   *   - `CA_BUSINESS_ENTITY_TYPE`
   *
   *     Valid values include the following:
   *
   *     - `BANK` (Bank)
   *     - `COMMERCIAL_COMPANY` (Commercial company)
   *     - `COMPANY` (Company)
   *     - `COOPERATION` (Cooperation)
   *     - `COOPERATIVE` (Cooperative)
   *     - `COOPRIX` (Cooprix)
   *     - `CORP` (Corporation)
   *     - `CREDIT_UNION` (Credit union)
   *     - `FOMIA` (Federation of mutual insurance associations)
   *     - `INC` (Incorporated)
   *     - `LTD` (Limited)
   *     - `LTEE` (Limitée)
   *     - `LLC` (Limited liability corporation)
   *     - `LLP` (Limited liability partnership)
   *     - `LTE` (Lte.)
   *     - `MBA` (Mutual benefit association)
   *     - `MIC` (Mutual insurance company)
   *     - `NFP` (Not-for-profit corporation)
   *     - `SA` (S.A.)
   *     - `SAVINGS_COMPANY` (Savings company)
   *     - `SAVINGS_UNION` (Savings union)
   *     - `SARL` (Société à responsabilité limitée)
   *     - `TRUST` (Trust)
   *     - `ULC` (Unlimited liability corporation)
   *   - `CA_LEGAL_TYPE`
   *
   *     When `ContactType` is `PERSON`, valid values include the following:
   *
   *     - `ABO` (Aboriginal Peoples indigenous to Canada)
   *     - `CCT` (Canadian citizen)
   *     - `LGR` (Legal Representative of a Canadian Citizen or Permanent Resident)
   *     - `RES` (Permanent resident of Canada)
   *
   *     When `ContactType` is a value other than `PERSON`, valid values include the following:
   *
   *     - `ASS` (Canadian unincorporated association)
   *     - `CCO` (Canadian corporation)
   *     - `EDU` (Canadian educational institution)
   *     - `GOV` (Government or government entity in Canada)
   *     - `HOP` (Canadian Hospital)
   *     - `INB` (Indian Band recognized by the Indian Act of Canada)
   *     - `LAM` (Canadian Library, Archive, or Museum)
   *     - `MAJ` (Her/His Majesty the Queen/King)
   *     - `OMK` (Official mark registered in Canada)
   *     - `PLT` (Canadian Political Party)
   *     - `PRT` (Partnership Registered in Canada)
   *     - `TDM` (Trademark registered in Canada)
   *     - `TRD` (Canadian Trade Union)
   *     - `TRS` (Trust established in Canada)
   *
   * - **.es**
   *
   *   - `ES_IDENTIFICATION`
   *
   *     The value of `ES_IDENTIFICATION` depends on the following values:
   *
   *     - The value of `ES_LEGAL_FORM`
   *     - The value of `ES_IDENTIFICATION_TYPE`
   *
   *     **If `ES_LEGAL_FORM` is any value other than `INDIVIDUAL`:**
   *
   *     - Specify 1 letter + 8 numbers (CIF [Certificado de Identificación Fiscal])
   *     - Example: B12345678
   *
   *     **If `ES_LEGAL_FORM` is `INDIVIDUAL`, the value that you specify for `ES_IDENTIFICATION` depends on the value of `ES_IDENTIFICATION_TYPE`:**
   *
   *     - If `ES_IDENTIFICATION_TYPE` is `DNI_AND_NIF` (for Spanish contacts):
   *
   *       - Specify 8 numbers + 1 letter (DNI [Documento Nacional de Identidad], NIF [Número de Identificación Fiscal])
   *       - Example: 12345678M
   *     - If `ES_IDENTIFICATION_TYPE` is `NIE` (for foreigners with legal residence):
   *
   *       - Specify 1 letter + 7 numbers + 1 letter ( NIE [Número de Identidad de Extranjero])
   *       - Example: Y1234567X
   *     - If `ES_IDENTIFICATION_TYPE` is `OTHER` (for contacts outside of Spain):
   *
   *       - Specify a passport number, drivers license number, or national identity card number
   *   - `ES_IDENTIFICATION_TYPE`
   *
   *     Valid values include the following:
   *
   *     - `DNI_AND_NIF` (For Spanish contacts)
   *     - `NIE` (For foreigners with legal residence)
   *     - `OTHER` (For contacts outside of Spain)
   *   - `ES_LEGAL_FORM`
   *
   *     Valid values include the following:
   *
   *     - `ASSOCIATION`
   *     - `CENTRAL_GOVERNMENT_BODY`
   *     - `CIVIL_SOCIETY`
   *     - `COMMUNITY_OF_OWNERS`
   *     - `COMMUNITY_PROPERTY`
   *     - `CONSULATE`
   *     - `COOPERATIVE`
   *     - `DESIGNATION_OF_ORIGIN_SUPERVISORY_COUNCIL`
   *     - `ECONOMIC_INTEREST_GROUP`
   *     - `EMBASSY`
   *     - `ENTITY_MANAGING_NATURAL_AREAS`
   *     - `FARM_PARTNERSHIP`
   *     - `FOUNDATION`
   *     - `GENERAL_AND_LIMITED_PARTNERSHIP`
   *     - `GENERAL_PARTNERSHIP`
   *     - `INDIVIDUAL`
   *     - `LIMITED_COMPANY`
   *     - `LOCAL_AUTHORITY`
   *     - `LOCAL_PUBLIC_ENTITY`
   *     - `MUTUAL_INSURANCE_COMPANY`
   *     - `NATIONAL_PUBLIC_ENTITY`
   *     - `ORDER_OR_RELIGIOUS_INSTITUTION`
   *     - `OTHERS (Only for contacts outside of Spain)`
   *     - `POLITICAL_PARTY`
   *     - `PROFESSIONAL_ASSOCIATION`
   *     - `PUBLIC_LAW_ASSOCIATION`
   *     - `PUBLIC_LIMITED_COMPANY`
   *     - `REGIONAL_GOVERNMENT_BODY`
   *     - `REGIONAL_PUBLIC_ENTITY`
   *     - `SAVINGS_BANK`
   *     - `SPANISH_OFFICE`
   *     - `SPORTS_ASSOCIATION`
   *     - `SPORTS_FEDERATION`
   *     - `SPORTS_LIMITED_COMPANY`
   *     - `TEMPORARY_ALLIANCE_OF_ENTERPRISES`
   *     - `TRADE_UNION`
   *     - `WORKER_OWNED_COMPANY`
   *     - `WORKER_OWNED_LIMITED_COMPANY`
   *
   * - **.eu**
   *
   *   - `EU_COUNTRY_OF_CITIZENSHIP`
   *
   * - **.fi**
   *
   *   - `BIRTH_DATE_IN_YYYY_MM_DD`
   *   - `FI_BUSINESS_NUMBER`
   *   - `FI_ID_NUMBER`
   *   - `FI_NATIONALITY`
   *
   *     Valid values include the following:
   *
   *     - `FINNISH`
   *     - `NOT_FINNISH`
   *   - `FI_ORGANIZATION_TYPE`
   *
   *     Valid values include the following:
   *
   *     - `COMPANY`
   *     - `CORPORATION`
   *     - `GOVERNMENT`
   *     - `INSTITUTION`
   *     - `POLITICAL_PARTY`
   *     - `PUBLIC_COMMUNITY`
   *     - `TOWNSHIP`
   *
   * - **.it**
   *
   *   - `IT_NATIONALITY`
   *   - `IT_PIN`
   *   - `IT_REGISTRANT_ENTITY_TYPE`
   *
   *     Valid values include the following:
   *
   *     - `FOREIGNERS`
   *     - `FREELANCE_WORKERS` (Freelance workers and professionals)
   *     - `ITALIAN_COMPANIES` (Italian companies and one-person companies)
   *     - `NON_PROFIT_ORGANIZATIONS`
   *     - `OTHER_SUBJECTS`
   *     - `PUBLIC_ORGANIZATIONS`
   *
   * - **.ru**
   *
   *   - `BIRTH_DATE_IN_YYYY_MM_DD`
   *   - `RU_PASSPORT_DATA`
   *
   * - **.se**
   *
   *   - `BIRTH_COUNTRY`
   *   - `SE_ID_NUMBER`
   *
   * - **.sg**
   *
   *   - `SG_ID_NUMBER`
   *
   * - **.uk, .co.uk, .me.uk, and .org.uk**
   *
   *   - `UK_CONTACT_TYPE`
   *
   *     Valid values include the following:
   *
   *     - `CRC` (UK Corporation by Royal Charter)
   *     - `FCORP` (Non-UK Corporation)
   *     - `FIND` (Non-UK Individual, representing self)
   *     - `FOTHER` (Non-UK Entity that does not fit into any other category)
   *     - `GOV` (UK Government Body)
   *     - `IND` (UK Individual (representing self))
   *     - `IP` (UK Industrial/Provident Registered Company)
   *     - `LLP` (UK Limited Liability Partnership)
   *     - `LTD` (UK Limited Company)
   *     - `OTHER` (UK Entity that does not fit into any other category)
   *     - `PLC` (UK Public Limited Company)
   *     - `PTNR` (UK Partnership)
   *     - `RCHAR` (UK Registered Charity)
   *     - `SCH` (UK School)
   *     - `STAT` (UK Statutory Body)
   *     - `STRA` (UK Sole Trader)
   *   - `UK_COMPANY_NUMBER`
   *
   * In addition, many TLDs require a `VAT_NUMBER`.
   *
   * @public
   */
  Name: ExtraParamName | undefined;

  /**
   * The value that corresponds with the name of an extra parameter.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * ContactDetail includes the following elements.
 *
 * @public
 */
export interface ContactDetail {
  /**
   * First name of contact.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * Last name of contact.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * Indicates whether the contact is a person, company, association, or public organization. Note the following:
   *
   * - If you specify a value other than `PERSON`, you must also specify a value for `OrganizationName`.
   * - For some TLDs, the privacy protection available depends on the value that you specify for `Contact Type`. For the privacy protection settings for your TLD, see [Domains that You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html) in the *Amazon Route 53 Developer Guide*
   * - For .es domains, the value of `ContactType` must be `PERSON` for all three contacts.
   *
   * @public
   */
  ContactType?: ContactType | undefined;

  /**
   * Name of the organization for contact types other than `PERSON`.
   *
   * @public
   */
  OrganizationName?: string | undefined;

  /**
   * First line of the contact's address.
   *
   * @public
   */
  AddressLine1?: string | undefined;

  /**
   * Second line of contact's address, if any.
   *
   * @public
   */
  AddressLine2?: string | undefined;

  /**
   * The city of the contact's address.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The state or province of the contact's city.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * Code for the country of the contact's address.
   *
   * @public
   */
  CountryCode?: CountryCode | undefined;

  /**
   * The zip or postal code of the contact's address.
   *
   * @public
   */
  ZipCode?: string | undefined;

  /**
   * The phone number of the contact.
   *
   * Constraints: Phone number must be specified in the format "+[country dialing code].[number including any area code>]". For example, a US phone number might appear as `"+1.1234567890"`.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * Email address of the contact.
   *
   * @public
   */
  Email?: string | undefined;

  /**
   * Fax number of the contact.
   *
   * Constraints: Phone number must be specified in the format "+[country dialing code].[number including any area code]". For example, a US phone number might appear as `"+1.1234567890"`.
   *
   * @public
   */
  Fax?: string | undefined;

  /**
   * A list of name-value pairs for parameters required by certain top-level domains.
   *
   * @public
   */
  ExtraParams?: ExtraParam[] | undefined;
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * Name of the domain to be deleted.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainResponse {
  /**
   * Identifier for tracking the progress of the request. To query the operation status, use [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * The DeleteTagsForDomainRequest includes the following elements.
 *
 * @public
 */
export interface DeleteTagsForDomainRequest {
  /**
   * The domain for which you want to delete one or more tags.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A list of tag keys to delete.
   *
   * @public
   */
  TagsToDelete: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteTagsForDomainResponse {}

/**
 * @public
 */
export interface DisableDomainAutoRenewRequest {
  /**
   * The name of the domain that you want to disable automatic renewal for.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DisableDomainAutoRenewResponse {}

/**
 * The DisableDomainTransferLock request includes the following element.
 *
 * @public
 */
export interface DisableDomainTransferLockRequest {
  /**
   * The name of the domain that you want to remove the transfer lock for.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The DisableDomainTransferLock response includes the following element.
 *
 * @public
 */
export interface DisableDomainTransferLockResponse {
  /**
   * Identifier for tracking the progress of the request. To query the operation status, use [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDelegationSignerFromDomainRequest {
  /**
   * Name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * An internal identification number assigned to each DS record after it’s created. You can retrieve it as part of DNSSEC information returned by [GetDomainDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainDetail.html).
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDelegationSignerFromDomainResponse {
  /**
   * Identifier for tracking the progress of the request. To query the operation status, use [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * Information about the DNSSEC key.
 *
 * You get this from your DNS provider and then give it to Route 53 (by using [AssociateDelegationSignerToDomain](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html)) to pass it to the registry to establish the chain of trust.
 *
 * @public
 */
export interface DnssecKey {
  /**
   * The number of the public key’s cryptographic algorithm according to an [IANA](https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xml) assignment.
   *
   * If Route 53 is your DNS service, set this to 13.
   *
   * For more information about enabling DNSSEC signing, see [Enabling DNSSEC signing and establishing a chain of trust](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec-enable-signing.html).
   *
   * @public
   */
  Algorithm?: number | undefined;

  /**
   * The DNSKEY flags that indicate the key type. This field is deprecated; the `DnssecKey` response no longer returns the flags.
   *
   * @deprecated (since 2026-10-01) The DnssecKey response no longer returns the flags.
   * @public
   */
  Flags?: number | undefined;

  /**
   * The base64-encoded public key of the key pair. This field is deprecated; the `DnssecKey` response no longer returns the public key.
   *
   * @deprecated (since 2026-10-01) The DnssecKey response no longer returns the public key.
   * @public
   */
  PublicKey?: string | undefined;

  /**
   * The number of the DS digest algorithm according to an IANA assignment.
   *
   * For more information, see [IANA](https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml) for DNSSEC Delegation Signer (DS) Resource Record (RR) Type Digest Algorithms.
   *
   * @public
   */
  DigestType?: number | undefined;

  /**
   * The delegation signer digest.
   *
   * Digest is calculated from the public key provided using specified digest algorithm and this digest is the actual value returned from the registry nameservers as the value of DS records.
   *
   * @public
   */
  Digest?: string | undefined;

  /**
   * A numeric identification of the DNSKEY record referred to by this DS record.
   *
   * @public
   */
  KeyTag?: number | undefined;

  /**
   * An ID assigned to each DS record created by [AssociateDelegationSignerToDomain](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html).
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Information about the prices associated with a TLD or a domain name.
 *
 * @public
 */
export interface DomainPrice {
  /**
   * The TLD or domain name that the prices apply to.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The price for domain registration with Route 53.
   *
   * @public
   */
  RegistrationPrice?: PriceWithCurrency | undefined;

  /**
   * The price for transferring the domain registration to Route 53.
   *
   * @public
   */
  TransferPrice?: PriceWithCurrency | undefined;

  /**
   * The price for renewing domain registration with Route 53.
   *
   * @public
   */
  RenewalPrice?: PriceWithCurrency | undefined;

  /**
   * The price for changing domain ownership.
   *
   * @public
   */
  ChangeOwnershipPrice?: PriceWithCurrency | undefined;

  /**
   * The price for restoring the domain with Route 53.
   *
   * @public
   */
  RestorationPrice?: PriceWithCurrency | undefined;
}

/**
 * Information about one suggested domain name.
 *
 * @public
 */
export interface DomainSuggestion {
  /**
   * A suggested domain name.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Specifies whether the domain name is available for registering. This element is populated only if you specified `true` for `OnlyAvailable` in the request.
   *
   * > **Note:** You can register only the domains that are designated as `AVAILABLE`.
   *
   * Valid values:
   *
   * - **AVAILABLE**
   *
   *   The domain name is available.
   *
   * - **AVAILABLE_RESERVED**
   *
   *   The domain name is reserved under specific conditions.
   *
   * - **AVAILABLE_PREORDER**
   *
   *   The domain name is available and can be preordered.
   *
   * - **DONT_KNOW**
   *
   *   The TLD registry didn't reply with a definitive answer about whether the domain name is available. Route 53 can return this response for a variety of reasons, for example, the registry is performing maintenance. Try again later.
   *
   * - **PENDING**
   *
   *   The TLD registry didn't return a response in the expected amount of time. When the response is delayed, it usually takes just a few extra seconds. You can resubmit the request immediately.
   *
   * - **RESERVED**
   *
   *   The domain name has been reserved for another person or organization.
   *
   * - **UNAVAILABLE**
   *
   *   The domain name is not available.
   *
   * - **UNAVAILABLE_PREMIUM**
   *
   *   The domain name is not available.
   *
   * - **UNAVAILABLE_RESTRICTED**
   *
   *   The domain name is forbidden.
   *
   * @public
   */
  Availability?: string | undefined;

  /**
   * The price to register the suggested domain name, in the currency that `Currency` specifies. This element is populated only if you specified `true` for `OnlyAvailable` in the request.
   *
   * @public
   */
  Price?: PriceWithCurrency | undefined;
}

/**
 * Summary information about one domain.
 *
 * @public
 */
export interface DomainSummary {
  /**
   * The name of the domain that the summary information applies to.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Indicates whether the domain is automatically renewed upon expiration.
   *
   * @public
   */
  AutoRenew?: boolean | undefined;

  /**
   * Indicates whether a domain is locked from unauthorized transfer to another party.
   *
   * @public
   */
  TransferLock?: boolean | undefined;

  /**
   * Expiration date of the domain in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  Expiry?: Date | undefined;
}

/**
 * @public
 */
export interface EnableDomainAutoRenewRequest {
  /**
   * The name of the domain that you want to enable automatic renewal for.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface EnableDomainAutoRenewResponse {}

/**
 * A request to set the transfer lock for the specified domain.
 *
 * @public
 */
export interface EnableDomainTransferLockRequest {
  /**
   * The name of the domain that you want to set the transfer lock for.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The EnableDomainTransferLock response includes the following elements.
 *
 * @public
 */
export interface EnableDomainTransferLockResponse {
  /**
   * Identifier for tracking the progress of the request. To use this ID to query the operation status, use GetOperationDetail.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * Information for the filtering of a list of domains returned by [ListDomains](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains__ListDomains.html).
 *
 * @public
 */
export interface FilterCondition {
  /**
   * Name of the field which should be used for filtering the list of domains.
   *
   * @public
   */
  Name: ListDomainsAttributeName | undefined;

  /**
   * The operator values for filtering domain names. The values can be:
   *
   * - `LE`: Less than, or equal to
   * - `GE`: Greater than, or equal to
   * - `BEGINS_WITH`: Begins with
   *
   * @public
   */
  Operator: Operator | undefined;

  /**
   * An array of strings presenting values to compare. Only 1 item in the list is currently supported.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface GetContactReachabilityStatusRequest {
  /**
   * The name of the domain for which you want to know whether the registrant contact has confirmed that the email address is valid.
   *
   * @public
   */
  domainName?: string | undefined;
}

/**
 * @public
 */
export interface GetContactReachabilityStatusResponse {
  /**
   * The domain name for which you requested the reachability status.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * Whether the registrant contact has responded. Values include the following:
   *
   * - **PENDING**
   *
   *   We sent the confirmation email and haven't received a response yet.
   *
   * - **DONE**
   *
   *   We sent the email and got confirmation from the registrant contact.
   *
   * - **EXPIRED**
   *
   *   The time limit expired before the registrant contact responded.
   *
   * @public
   */
  status?: ReachabilityStatus | undefined;
}

/**
 * The GetDomainDetail request includes the following element.
 *
 * @public
 */
export interface GetDomainDetailRequest {
  /**
   * The name of the domain that you want to get detailed information about.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Name server includes the following elements.
 *
 * @public
 */
export interface Nameserver {
  /**
   * The fully qualified host name of the name server.
   *
   * Constraint: Maximum 255 characters
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Glue IP address of a name server entry. Glue IP addresses are required only when the name of the name server is a subdomain of the domain. For example, if your domain is example.com and the name server for the domain is ns.example.com, you need to specify the IP address for ns.example.com.
   *
   * Constraints: The list can contain only one IPv4 and one IPv6 address.
   *
   * @public
   */
  GlueIps?: string[] | undefined;
}

/**
 * The GetDomainDetail response includes the following elements.
 *
 * @public
 */
export interface GetDomainDetailResponse {
  /**
   * The name of a domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The name servers of the domain.
   *
   * @public
   */
  Nameservers?: Nameserver[] | undefined;

  /**
   * Specifies whether the domain registration is set to renew automatically.
   *
   * @public
   */
  AutoRenew?: boolean | undefined;

  /**
   * Provides details about the domain administrative contact.
   *
   * @public
   */
  AdminContact?: ContactDetail | undefined;

  /**
   * Provides details about the domain registrant.
   *
   * @public
   */
  RegistrantContact?: ContactDetail | undefined;

  /**
   * Provides details about the domain technical contact.
   *
   * @public
   */
  TechContact?: ContactDetail | undefined;

  /**
   * Specifies whether contact information is concealed from WHOIS queries. If the value is `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If the value is `false`, WHOIS queries return the information that you entered for the admin contact.
   *
   * @public
   */
  AdminPrivacy?: boolean | undefined;

  /**
   * Specifies whether contact information is concealed from WHOIS queries. If the value is `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If the value is `false`, WHOIS queries return the information that you entered for the registrant contact (domain owner).
   *
   * @public
   */
  RegistrantPrivacy?: boolean | undefined;

  /**
   * Specifies whether contact information is concealed from WHOIS queries. If the value is `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If the value is `false`, WHOIS queries return the information that you entered for the technical contact.
   *
   * @public
   */
  TechPrivacy?: boolean | undefined;

  /**
   * Name of the registrar of the domain as identified in the registry.
   *
   * @public
   */
  RegistrarName?: string | undefined;

  /**
   * The fully qualified name of the WHOIS server that can answer the WHOIS query for the domain.
   *
   * @public
   */
  WhoIsServer?: string | undefined;

  /**
   * Web address of the registrar.
   *
   * @public
   */
  RegistrarUrl?: string | undefined;

  /**
   * Email address to contact to report incorrect contact information for a domain, to report that the domain is being used to send spam, to report that someone is cybersquatting on a domain name, or report some other type of abuse.
   *
   * @public
   */
  AbuseContactEmail?: string | undefined;

  /**
   * Phone number for reporting abuse.
   *
   * @public
   */
  AbuseContactPhone?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  RegistryDomainId?: string | undefined;

  /**
   * The date when the domain was created as found in the response to a WHOIS query. The date and time is in Unix time format and Coordinated Universal time (UTC).
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The last updated date of the domain as found in the response to a WHOIS query. The date and time is in Unix time format and Coordinated Universal time (UTC).
   *
   * @public
   */
  UpdatedDate?: Date | undefined;

  /**
   * The date when the registration for the domain is set to expire. The date and time is in Unix time format and Coordinated Universal time (UTC).
   *
   * @public
   */
  ExpirationDate?: Date | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  Reseller?: string | undefined;

  /**
   * Deprecated.
   *
   * @public
   */
  DnsSec?: string | undefined;

  /**
   * An array of domain name status codes, also known as Extensible Provisioning Protocol (EPP) status codes.
   *
   * ICANN, the organization that maintains a central database of domain names, has developed a set of domain name status codes that tell you the status of a variety of operations on a domain name, for example, registering a domain name, transferring a domain name to another registrar, renewing the registration for a domain name, and so on. All registrars use this same set of status codes.
   *
   * For a current list of domain name status codes and an explanation of what each code means, go to the [ICANN website](https://www.icann.org/) and search for `epp status codes`. (Search on the ICANN website; web searches sometimes return an old version of the document.)
   *
   * @public
   */
  StatusList?: string[] | undefined;

  /**
   * A complex type that contains information about the DNSSEC configuration.
   *
   * @public
   */
  DnssecKeys?: DnssecKey[] | undefined;

  /**
   * Provides details about the domain billing contact.
   *
   * @public
   */
  BillingContact?: ContactDetail | undefined;

  /**
   * Specifies whether contact information is concealed from WHOIS queries. If the value is `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If the value is `false`, WHOIS queries return the information that you entered for the billing contact.
   *
   * @public
   */
  BillingPrivacy?: boolean | undefined;
}

/**
 * The GetDomainPrices request includes the following element.
 *
 * @public
 */
export interface GetDomainPricesRequest {
  /**
   * The name of the domain that you want to get the prices for.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The GetDomainPrices response includes the following element.
 *
 * @public
 */
export interface GetDomainPricesResponse {
  /**
   * The registration, transfer, owner change, renewal, and restoration prices for the specified domain.
   *
   * @public
   */
  DomainPrice?: DomainPrice | undefined;
}

/**
 * @public
 */
export interface GetDomainSuggestionsRequest {
  /**
   * A domain name that you want to use as the basis for a list of possible domain names. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see [Domains that You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html) in the *Amazon Route 53 Developer Guide*.
   *
   * The domain name can contain only the following characters:
   *
   * - Letters a through z. Domain names are not case sensitive.
   * - Numbers 0 through 9.
   * - Hyphen (-). You can't specify a hyphen at the beginning or end of a label.
   * - Period (.) to separate the labels in the name, such as the `.` in `example.com`.
   *
   * Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports internationalized domain names, see [Domains that You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The number of suggested domain names that you want Route 53 to return. Specify a value between 1 and 50. Note that fewer than the requested number might be returned.
   *
   * @public
   */
  SuggestionCount: number | undefined;

  /**
   * If `OnlyAvailable` is `true`, Route 53 returns only domain names that are available. If `OnlyAvailable` is `false`, Route 53 returns domain names without checking whether they're available to be registered. To determine whether the domain is available, call `checkDomainAvailability` for each suggestion.
   *
   * If `OnlyAvailable` is `false`, Route 53 does not return pricing information for the suggested domain names.
   *
   * @public
   */
  OnlyAvailable: boolean | undefined;

  /**
   * If `true`, Route 53 returns only domain names that are priced at the standard registration rate for their TLD. If `false`, Route 53 includes domain names with premium pricing in the suggestions list. The default is `true`.
   *
   * @public
   */
  OnlyStandardPrices?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDomainSuggestionsResponse {
  /**
   * A list of possible domain names. If you specified `true` for `OnlyAvailable` in the request, the list contains only domains that are available for registration.
   *
   * @public
   */
  SuggestionsList?: DomainSuggestion[] | undefined;
}

/**
 * The [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html) request includes the following element.
 *
 * @public
 */
export interface GetOperationDetailRequest {
  /**
   * The identifier for the operation for which you want to get the status. Route 53 returned the identifier in the response to the original request.
   *
   * @public
   */
  OperationId: string | undefined;
}

/**
 * The GetOperationDetail response includes the following elements.
 *
 * @public
 */
export interface GetOperationDetailResponse {
  /**
   * The identifier for the operation.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * The current status of the requested operation in the system.
   *
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * Detailed information on the status including possible errors.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The name of a domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The type of operation that was requested.
   *
   * @public
   */
  Type?: OperationType | undefined;

  /**
   * The date when the request was submitted.
   *
   * @public
   */
  SubmittedDate?: Date | undefined;

  /**
   * The date when the operation was last updated.
   *
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * Lists any outstanding operations that require customer action. Valid values are:
   *
   * - `PENDING_ACCEPTANCE`: The operation is waiting for acceptance from the account that is receiving the domain.
   * - `PENDING_CUSTOMER_ACTION`: The operation is waiting for customer action, for example, returning an email.
   * - `PENDING_AUTHORIZATION`: The operation is waiting for the form of authorization. For more information, see [ResendOperationAuthorization](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendOperationAuthorization.html).
   * - `PENDING_PAYMENT_VERIFICATION`: The operation is waiting for the payment method to validate.
   * - `PENDING_SUPPORT_CASE`: The operation includes a support case and is waiting for its resolution.
   *
   * @public
   */
  StatusFlag?: StatusFlag | undefined;
}

/**
 * Information for sorting a list of domains.
 *
 * @public
 */
export interface SortCondition {
  /**
   * Field to be used for sorting the list of domains. It can be either the name or the expiration for a domain. Note that if `filterCondition` is used in the same [ListDomains](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains__ListDomains.html) call, the field used for sorting has to be the same as the field used for filtering.
   *
   * @public
   */
  Name: ListDomainsAttributeName | undefined;

  /**
   * The sort order for a list of domains. Either ascending (ASC) or descending (DES).
   *
   * @public
   */
  SortOrder: SortOrder | undefined;
}

/**
 * The ListDomains request includes the following elements.
 *
 * @public
 */
export interface ListDomainsRequest {
  /**
   * A complex type that contains information about the filters applied during the `ListDomains` request. The filter conditions can include domain name and domain expiration.
   *
   * @public
   */
  FilterConditions?: FilterCondition[] | undefined;

  /**
   * A complex type that contains information about the requested ordering of domains in the returned list.
   *
   * @public
   */
  SortCondition?: SortCondition | undefined;

  /**
   * For an initial request for a list of domains, omit this element. If the number of domains that are associated with the current Amazon Web Services account is greater than the value that you specified for `MaxItems`, you can use `Marker` to return additional domains. Get the value of `NextPageMarker` from the previous response, and submit another request that includes the value of `NextPageMarker` in the `Marker` element.
   *
   * Constraints: The marker must match the value specified in the previous request.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Number of domains to be returned.
   *
   * Default: 20
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * The ListDomains response includes the following elements.
 *
 * @public
 */
export interface ListDomainsResponse {
  /**
   * A list of domains.
   *
   * @public
   */
  Domains?: DomainSummary[] | undefined;

  /**
   * If there are more domains than you specified for `MaxItems` in the request, submit another request and include the value of `NextPageMarker` in the value of `Marker`.
   *
   * @public
   */
  NextPageMarker?: string | undefined;
}

/**
 * The ListOperations request includes the following elements.
 *
 * @public
 */
export interface ListOperationsRequest {
  /**
   * An optional parameter that lets you get information about all the operations that you submitted after a specified date and time. Specify the date and time in Unix time format and Coordinated Universal time (UTC).
   *
   * @public
   */
  SubmittedSince?: Date | undefined;

  /**
   * For an initial request for a list of operations, omit this element. If the number of operations that are not yet complete is greater than the value that you specified for `MaxItems`, you can use `Marker` to return additional operations. Get the value of `NextPageMarker` from the previous response, and submit another request that includes the value of `NextPageMarker` in the `Marker` element.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Number of domains to be returned.
   *
   * Default: 20
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The status of the operations.
   *
   * @public
   */
  Status?: OperationStatus[] | undefined;

  /**
   * An arrays of the domains operation types.
   *
   * @public
   */
  Type?: OperationType[] | undefined;

  /**
   * The sort type for returned values.
   *
   * @public
   */
  SortBy?: ListOperationsSortAttributeName | undefined;

  /**
   * The sort order for returned values, either ascending or descending.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * OperationSummary includes the following elements.
 *
 * @public
 */
export interface OperationSummary {
  /**
   * Identifier returned to track the requested action.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * The current status of the requested operation in the system.
   *
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * Type of the action requested.
   *
   * @public
   */
  Type?: OperationType | undefined;

  /**
   * The date when the request was submitted.
   *
   * @public
   */
  SubmittedDate?: Date | undefined;

  /**
   * Name of the domain.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Message about the operation.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Automatically checks whether there are no outstanding operations on domains that need customer attention.
   *
   * Valid values are:
   *
   * - `PENDING_ACCEPTANCE`: The operation is waiting for acceptance from the account that is receiving the domain.
   * - `PENDING_CUSTOMER_ACTION`: The operation is waiting for customer action, for example, returning an email.
   * - `PENDING_AUTHORIZATION`: The operation is waiting for the form of authorization. For more information, see [ResendOperationAuthorization](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendOperationAuthorization.html).
   * - `PENDING_PAYMENT_VERIFICATION`: The operation is waiting for the payment method to validate.
   * - `PENDING_SUPPORT_CASE`: The operation includes a support case and is waiting for its resolution.
   *
   * @public
   */
  StatusFlag?: StatusFlag | undefined;

  /**
   * The date when the last change was made in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  LastUpdatedDate?: Date | undefined;
}

/**
 * The ListOperations response includes the following elements.
 *
 * @public
 */
export interface ListOperationsResponse {
  /**
   * Lists summaries of the operations.
   *
   * @public
   */
  Operations?: OperationSummary[] | undefined;

  /**
   * If there are more operations than you specified for `MaxItems` in the request, submit another request and include the value of `NextPageMarker` in the value of `Marker`.
   *
   * @public
   */
  NextPageMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListPricesRequest {
  /**
   * The TLD for which you want to receive the pricing information. For example. `.net`.
   *
   * If a `Tld` value is not provided, a list of prices for all TLDs supported by Route 53 is returned.
   *
   * @public
   */
  Tld?: string | undefined;

  /**
   * For an initial request for a list of prices, omit this element. If the number of prices that are not yet complete is greater than the value that you specified for `MaxItems`, you can use `Marker` to return additional prices. Get the value of `NextPageMarker` from the previous response, and submit another request that includes the value of `NextPageMarker` in the `Marker` element.
   *
   * Used only for all TLDs. If you specify a TLD, don't specify a `Marker`.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Number of `Prices` to be returned.
   *
   * Used only for all TLDs. If you specify a TLD, don't specify a `MaxItems`.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListPricesResponse {
  /**
   * A complex type that includes all the pricing information. If you specify a TLD, this array contains only the pricing for that TLD.
   *
   * @public
   */
  Prices?: DomainPrice[] | undefined;

  /**
   * If there are more prices than you specified for `MaxItems` in the request, submit another request and include the value of `NextPageMarker` in the value of `Marker`.
   *
   * Used only for all TLDs. If you specify a TLD, don't specify a `NextPageMarker`.
   *
   * @public
   */
  NextPageMarker?: string | undefined;
}

/**
 * The ListTagsForDomainRequest includes the following elements.
 *
 * @public
 */
export interface ListTagsForDomainRequest {
  /**
   * The domain for which you want to get a list of tags.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Each tag includes the following elements.
 *
 * @public
 */
export interface Tag {
  /**
   * The key (name) of a tag.
   *
   * Valid values: A-Z, a-z, 0-9, space, ".:/=+\-@"
   *
   * Constraints: Each key can be 1-128 characters long.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of a tag.
   *
   * Valid values: A-Z, a-z, 0-9, space, ".:/=+\-@"
   *
   * Constraints: Each value can be 0-256 characters long.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The ListTagsForDomain response includes the following elements.
 *
 * @public
 */
export interface ListTagsForDomainResponse {
  /**
   * A list of the tags that are associated with the specified domain.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PushDomainRequest {
  /**
   * Name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * New IPS tag for the domain.
   *
   * @public
   */
  Target: string | undefined;
}

/**
 * The RegisterDomain request includes the following elements.
 *
 * @public
 */
export interface RegisterDomainRequest {
  /**
   * The domain name that you want to register. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see [Domains that You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html) in the *Amazon Route 53 Developer Guide*.
   *
   * The domain name can contain only the following characters:
   *
   * - Letters a through z. Domain names are not case sensitive.
   * - Numbers 0 through 9.
   * - Hyphen (-). You can't specify a hyphen at the beginning or end of a label.
   * - Period (.) to separate the labels in the name, such as the `.` in `example.com`.
   *
   * Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports internationalized domain names, see [Domains that You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html). For more information, see [Formatting Internationalized Domain Names](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html#domain-name-format-idns).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  IdnLangCode?: string | undefined;

  /**
   * The number of years that you want to register the domain for. Domains are registered for a minimum of one year. The maximum period depends on the top-level domain. For the range of valid values for your domain, see [Domains that You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html) in the *Amazon Route 53 Developer Guide*.
   *
   * Default: 1
   *
   * @public
   */
  DurationInYears: number | undefined;

  /**
   * Indicates whether the domain will be automatically renewed (`true`) or not (`false`). Auto renewal only takes effect after the account is charged.
   *
   * Default: `true`
   *
   * @public
   */
  AutoRenew?: boolean | undefined;

  /**
   * Provides detailed contact information. For information about the values that you specify for each element, see [ContactDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html).
   *
   * @public
   */
  AdminContact: ContactDetail | undefined;

  /**
   * Provides detailed contact information. For information about the values that you specify for each element, see [ContactDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html).
   *
   * @public
   */
  RegistrantContact: ContactDetail | undefined;

  /**
   * Provides detailed contact information. For information about the values that you specify for each element, see [ContactDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html).
   *
   * @public
   */
  TechContact: ContactDetail | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify `false`, WHOIS queries return the information that you entered for the admin contact.
   *
   * > **Note:** You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
   *
   * Default: `true`
   *
   * @public
   */
  PrivacyProtectAdminContact?: boolean | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify `false`, WHOIS queries return the information that you entered for the registrant contact (the domain owner).
   *
   * > **Note:** You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
   *
   * Default: `true`
   *
   * @public
   */
  PrivacyProtectRegistrantContact?: boolean | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify `false`, WHOIS queries return the information that you entered for the technical contact.
   *
   * > **Note:** You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
   *
   * Default: `true`
   *
   * @public
   */
  PrivacyProtectTechContact?: boolean | undefined;

  /**
   * Provides detailed contact information. For information about the values that you specify for each element, see [ContactDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html).
   *
   * @public
   */
  BillingContact?: ContactDetail | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify `false`, WHOIS queries return the information that you entered for the billing contact.
   *
   * > **Note:** You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
   *
   * @public
   */
  PrivacyProtectBillingContact?: boolean | undefined;

  /**
   * Specifies the maximum price that you agree to pay to register the domain name. This element is required if the domain has registry premium pricing, and optional if the domain is priced at the standard rate for its TLD. If you include it and the registration price is more than `MaxPrice`, the request fails.
   *
   * @public
   */
  Consent?: Consent | undefined;
}

/**
 * The RegisterDomain response includes the following element.
 *
 * @public
 */
export interface RegisterDomainResponse {
  /**
   * Identifier for tracking the progress of the request. To query the operation status, use [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * The RejectDomainTransferFromAnotherAwsAccount request includes the following element.
 *
 * @public
 */
export interface RejectDomainTransferFromAnotherAwsAccountRequest {
  /**
   * The name of the domain that was specified when another Amazon Web Services account submitted a [TransferDomainToAnotherAwsAccount](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html) request.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The RejectDomainTransferFromAnotherAwsAccount response includes the following element.
 *
 * @public
 */
export interface RejectDomainTransferFromAnotherAwsAccountResponse {
  /**
   * The identifier that `TransferDomainToAnotherAwsAccount` returned to track the progress of the request. Because the transfer request was rejected, the value is no longer valid, and you can't use `GetOperationDetail` to query the operation status.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * A `RenewDomain` request includes the number of years that you want to renew for and the current expiration year.
 *
 * @public
 */
export interface RenewDomainRequest {
  /**
   * The name of the domain that you want to renew.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The number of years that you want to renew the domain for. The maximum number of years depends on the top-level domain. For the range of valid values for your domain, see [Domains that You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html) in the *Amazon Route 53 Developer Guide*.
   *
   * Default: 1
   *
   * @public
   */
  DurationInYears?: number | undefined;

  /**
   * The year when the registration for the domain is set to expire. This value must match the current expiration date for the domain.
   *
   * @public
   */
  CurrentExpiryYear: number | undefined;

  /**
   * Specifies the maximum price that you agree to pay to renew the domain name. This element is required if the domain has registry premium pricing, and optional if the domain is priced at the standard rate for its TLD. If you include it and the renewal price is more than `MaxPrice`, the request fails.
   *
   * @public
   */
  Consent?: Consent | undefined;
}

/**
 * @public
 */
export interface RenewDomainResponse {
  /**
   * Identifier for tracking the progress of the request. To query the operation status, use [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface ResendContactReachabilityEmailRequest {
  /**
   * The name of the domain for which you want Route 53 to resend a confirmation email to the registrant contact.
   *
   * @public
   */
  domainName?: string | undefined;
}

/**
 * @public
 */
export interface ResendContactReachabilityEmailResponse {
  /**
   * The domain name for which you requested a confirmation email.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The email address for the registrant contact at the time that we sent the verification email.
   *
   * @public
   */
  emailAddress?: string | undefined;

  /**
   * `True` if the email address for the registrant contact has already been verified, and `false` otherwise. If the email address has already been verified, we don't send another confirmation email.
   *
   * @public
   */
  isAlreadyVerified?: boolean | undefined;
}

/**
 * @public
 */
export interface ResendOperationAuthorizationRequest {
  /**
   * Operation ID.
   *
   * @public
   */
  OperationId: string | undefined;
}

/**
 * A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar.
 *
 * @public
 */
export interface RetrieveDomainAuthCodeRequest {
  /**
   * The name of the domain that you want to get an authorization code for.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The RetrieveDomainAuthCode response includes the following element.
 *
 * @public
 */
export interface RetrieveDomainAuthCodeResponse {
  /**
   * The authorization code for the domain.
   *
   * @public
   */
  AuthCode?: string | undefined;
}

/**
 * The TransferDomain request includes the following elements.
 *
 * @public
 */
export interface TransferDomainRequest {
  /**
   * The name of the domain that you want to transfer to Route 53. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see [Domains that You Can Register with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html) in the *Amazon Route 53 Developer Guide*.
   *
   * The domain name can contain only the following characters:
   *
   * - Letters a through z. Domain names are not case sensitive.
   * - Numbers 0 through 9.
   * - Hyphen (-). You can't specify a hyphen at the beginning or end of a label.
   * - Period (.) to separate the labels in the name, such as the `.` in `example.com`.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  IdnLangCode?: string | undefined;

  /**
   * Reserved for future use.
   *
   * Currently, the effect of a domain transfer on the registration period varies by TLD. For information about how transferring a domain affects the expiration date, see the Transfer Term column in the pricing information at [Amazon Route 53 Pricing](http://aws.amazon.com/route53/pricing/).
   *
   * Default: 1
   *
   * @public
   */
  DurationInYears?: number | undefined;

  /**
   * Contains details for the host and glue IP addresses.
   *
   * @public
   */
  Nameservers?: Nameserver[] | undefined;

  /**
   * The authorization code for the domain. You get this value from the current registrar.
   *
   * @public
   */
  AuthCode?: string | undefined;

  /**
   * Indicates whether the domain will be automatically renewed (true) or not (false). Auto renewal only takes effect after the account is charged.
   *
   * Default: true
   *
   * @public
   */
  AutoRenew?: boolean | undefined;

  /**
   * Provides detailed contact information.
   *
   * @public
   */
  AdminContact: ContactDetail | undefined;

  /**
   * Provides detailed contact information.
   *
   * @public
   */
  RegistrantContact: ContactDetail | undefined;

  /**
   * Provides detailed contact information.
   *
   * @public
   */
  TechContact: ContactDetail | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information for the registrar, the phrase "REDACTED FOR PRIVACY", or "On behalf of <domain name> owner.".
   *
   * > **Note:** While some domains may allow different privacy settings per contact, we recommend specifying the same privacy setting for all contacts.
   *
   * Default: `true`
   *
   * @public
   */
  PrivacyProtectAdminContact?: boolean | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify `false`, WHOIS queries return the information that you entered for the registrant contact (domain owner).
   *
   * > **Note:** You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
   *
   * Default: `true`
   *
   * @public
   */
  PrivacyProtectRegistrantContact?: boolean | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify `false`, WHOIS queries return the information that you entered for the technical contact.
   *
   * > **Note:** You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
   *
   * Default: `true`
   *
   * @public
   */
  PrivacyProtectTechContact?: boolean | undefined;

  /**
   * Provides detailed contact information.
   *
   * @public
   */
  BillingContact?: ContactDetail | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify `false`, WHOIS queries return the information that you entered for the billing contact.
   *
   * > **Note:** You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
   *
   * @public
   */
  PrivacyProtectBillingContact?: boolean | undefined;

  /**
   * Specifies the maximum price that you agree to pay to transfer the domain name to Route 53. This element is required if the domain has registry premium pricing, and optional if the domain is priced at the standard rate for its TLD. If you include it and the transfer price is more than `MaxPrice`, the request fails.
   *
   * @public
   */
  Consent?: Consent | undefined;
}

/**
 * The TransferDomain response includes the following element.
 *
 * @public
 */
export interface TransferDomainResponse {
  /**
   * Identifier for tracking the progress of the request. To query the operation status, use [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * The TransferDomainToAnotherAwsAccount request includes the following elements.
 *
 * @public
 */
export interface TransferDomainToAnotherAwsAccountRequest {
  /**
   * The name of the domain that you want to transfer from the current Amazon Web Services account to another account.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The account ID of the Amazon Web Services account that you want to transfer the domain to, for example, `111122223333`.
   *
   * @public
   */
  AccountId: string | undefined;
}

/**
 * The `TransferDomainToAnotherAwsAccount` response includes the following elements.
 *
 * @public
 */
export interface TransferDomainToAnotherAwsAccountResponse {
  /**
   * Identifier for tracking the progress of the request. To query the operation status, use [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html).
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * To finish transferring a domain to another Amazon Web Services account, the account that the domain is being transferred to must submit an [AcceptDomainTransferFromAnotherAwsAccount](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html) request. The request must include the value of the `Password` element that was returned in the `TransferDomainToAnotherAwsAccount` response.
   *
   * @public
   */
  Password?: string | undefined;
}

/**
 * The UpdateDomainContact request includes the following elements.
 *
 * @public
 */
export interface UpdateDomainContactRequest {
  /**
   * The name of the domain that you want to update contact information for.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Provides detailed contact information.
   *
   * @public
   */
  AdminContact?: ContactDetail | undefined;

  /**
   * Provides detailed contact information.
   *
   * @public
   */
  RegistrantContact?: ContactDetail | undefined;

  /**
   * Provides detailed contact information.
   *
   * @public
   */
  TechContact?: ContactDetail | undefined;

  /**
   * The maximum amount that you agree to pay for the owner change. Required if the domain is not free (consent price is more than USD $0.00).
   *
   * @public
   */
  Consent?: Consent | undefined;

  /**
   * Provides detailed contact information.
   *
   * @public
   */
  BillingContact?: ContactDetail | undefined;
}

/**
 * The UpdateDomainContact response includes the following element.
 *
 * @public
 */
export interface UpdateDomainContactResponse {
  /**
   * Identifier for tracking the progress of the request. To query the operation status, use [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * The UpdateDomainContactPrivacy request includes the following elements.
 *
 * @public
 */
export interface UpdateDomainContactPrivacyRequest {
  /**
   * The name of the domain that you want to update the privacy setting for.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify `false`, WHOIS queries return the information that you entered for the admin contact.
   *
   * > **Note:** You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
   *
   * @public
   */
  AdminPrivacy?: boolean | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify `false`, WHOIS queries return the information that you entered for the registrant contact (domain owner).
   *
   * > **Note:** You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
   *
   * @public
   */
  RegistrantPrivacy?: boolean | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify `false`, WHOIS queries return the information that you entered for the technical contact.
   *
   * > **Note:** You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
   *
   * @public
   */
  TechPrivacy?: boolean | undefined;

  /**
   * Whether you want to conceal contact information from WHOIS queries. If you specify `true`, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify `false`, WHOIS queries return the information that you entered for the billing contact.
   *
   * > **Note:** You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
   *
   * @public
   */
  BillingPrivacy?: boolean | undefined;
}

/**
 * The UpdateDomainContactPrivacy response includes the following element.
 *
 * @public
 */
export interface UpdateDomainContactPrivacyResponse {
  /**
   * Identifier for tracking the progress of the request. To use this ID to query the operation status, use GetOperationDetail.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.
 *
 * If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
 *
 * @public
 */
export interface UpdateDomainNameserversRequest {
  /**
   * The name of the domain that you want to change name servers for.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The authorization key for .fi domains
   *
   * @deprecated deprecated.
   * @public
   */
  FIAuthKey?: string | undefined;

  /**
   * A list of new name servers for the domain.
   *
   * @public
   */
  Nameservers: Nameserver[] | undefined;
}

/**
 * The UpdateDomainNameservers response includes the following element.
 *
 * @public
 */
export interface UpdateDomainNameserversResponse {
  /**
   * Identifier for tracking the progress of the request. To query the operation status, use [GetOperationDetail](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html).
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * The UpdateTagsForDomainRequest includes the following elements.
 *
 * @public
 */
export interface UpdateTagsForDomainRequest {
  /**
   * The domain for which you want to add or update tags.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A list of the tag keys and values that you want to add or update. If you specify a key that already exists, the corresponding value will be replaced.
   *
   * @public
   */
  TagsToUpdate?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateTagsForDomainResponse {}

/**
 * The ViewBilling request includes the following elements.
 *
 * @public
 */
export interface ViewBillingRequest {
  /**
   * The beginning date and time for the time period for which you want a list of billing records. Specify the date and time in Unix time format and Coordinated Universal time (UTC).
   *
   * @public
   */
  Start?: Date | undefined;

  /**
   * The end date and time for the time period for which you want a list of billing records. Specify the date and time in Unix time format and Coordinated Universal time (UTC).
   *
   * @public
   */
  End?: Date | undefined;

  /**
   * For an initial request for a list of billing records, omit this element. If the number of billing records that are associated with the current Amazon Web Services account during the specified period is greater than the value that you specified for `MaxItems`, you can use `Marker` to return additional billing records. Get the value of `NextPageMarker` from the previous response, and submit another request that includes the value of `NextPageMarker` in the `Marker` element.
   *
   * Constraints: The marker must match the value of `NextPageMarker` that was returned in the previous response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The number of billing records to be returned.
   *
   * Default: 20
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * The ViewBilling response includes the following elements.
 *
 * @public
 */
export interface ViewBillingResponse {
  /**
   * If there are more billing records than you specified for `MaxItems` in the request, submit another request and include the value of `NextPageMarker` in the value of `Marker`.
   *
   * @public
   */
  NextPageMarker?: string | undefined;

  /**
   * A summary of billing records.
   *
   * @public
   */
  BillingRecords?: BillingRecord[] | undefined;
}

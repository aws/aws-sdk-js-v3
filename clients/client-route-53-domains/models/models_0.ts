import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements.</p>
 */
export interface AcceptDomainTransferFromAnotherAwsAccountRequest {
  /**
   * <p>The name of the domain that was specified when another AWS account submitted a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>
   * 			request.
   * 		</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The password that was returned by the
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>
   * 			request.
   * 		</p>
   */
  Password: string | undefined;
}

export namespace AcceptDomainTransferFromAnotherAwsAccountRequest {
  export const filterSensitiveLog = (obj: AcceptDomainTransferFromAnotherAwsAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The AcceptDomainTransferFromAnotherAwsAccount response includes the following element.</p>
 */
export interface AcceptDomainTransferFromAnotherAwsAccountResponse {
  /**
   * <p>Identifier for tracking the progress of the request. To query the operation status, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;
}

export namespace AcceptDomainTransferFromAnotherAwsAccountResponse {
  export const filterSensitiveLog = (obj: AcceptDomainTransferFromAnotherAwsAccountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The number of domains has exceeded the allowed threshold for the account.</p>
 */
export interface DomainLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "DomainLimitExceeded";
  $fault: "client";
  /**
   * <p>The number of domains has exceeded the allowed threshold for the account.</p>
   */
  message?: string;
}

export namespace DomainLimitExceeded {
  export const filterSensitiveLog = (obj: DomainLimitExceeded): any => ({
    ...obj,
  });
}

/**
 * <p>The requested item is not acceptable. For example, for APIs that accept a domain name, the request might specify a domain name
 * 			that doesn't belong to the account that submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>,
 * 			the password might be invalid.</p>
 */
export interface InvalidInput extends __SmithyException, $MetadataBearer {
  name: "InvalidInput";
  $fault: "client";
  /**
   * <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation
   * 			that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
   */
  message?: string;
}

export namespace InvalidInput {
  export const filterSensitiveLog = (obj: InvalidInput): any => ({
    ...obj,
  });
}

/**
 * <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
 */
export interface OperationLimitExceeded extends __SmithyException, $MetadataBearer {
  name: "OperationLimitExceeded";
  $fault: "client";
  /**
   * <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   */
  message?: string;
}

export namespace OperationLimitExceeded {
  export const filterSensitiveLog = (obj: OperationLimitExceeded): any => ({
    ...obj,
  });
}

export enum OperationType {
  ADD_DNSSEC = "ADD_DNSSEC",
  CHANGE_DOMAIN_OWNER = "CHANGE_DOMAIN_OWNER",
  CHANGE_PRIVACY_PROTECTION = "CHANGE_PRIVACY_PROTECTION",
  DELETE_DOMAIN = "DELETE_DOMAIN",
  DISABLE_AUTORENEW = "DISABLE_AUTORENEW",
  DOMAIN_LOCK = "DOMAIN_LOCK",
  ENABLE_AUTORENEW = "ENABLE_AUTORENEW",
  EXPIRE_DOMAIN = "EXPIRE_DOMAIN",
  INTERNAL_TRANSFER_IN_DOMAIN = "INTERNAL_TRANSFER_IN_DOMAIN",
  INTERNAL_TRANSFER_OUT_DOMAIN = "INTERNAL_TRANSFER_OUT_DOMAIN",
  PUSH_DOMAIN = "PUSH_DOMAIN",
  REGISTER_DOMAIN = "REGISTER_DOMAIN",
  REMOVE_DNSSEC = "REMOVE_DNSSEC",
  RENEW_DOMAIN = "RENEW_DOMAIN",
  TRANSFER_IN_DOMAIN = "TRANSFER_IN_DOMAIN",
  TRANSFER_OUT_DOMAIN = "TRANSFER_OUT_DOMAIN",
  UPDATE_DOMAIN_CONTACT = "UPDATE_DOMAIN_CONTACT",
  UPDATE_NAMESERVER = "UPDATE_NAMESERVER",
}

/**
 * <p>Information for one billing record.</p>
 */
export interface BillingRecord {
  /**
   * <p>The name of the domain that the billing record applies to. If the domain name contains characters
   * 			other than a-z, 0-9, and - (hyphen), such as an internationalized domain name, then this value is in Punycode.
   * 			For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a>
   * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
   */
  DomainName?: string;

  /**
   * <p>The operation that you were charged for.</p>
   */
  Operation?: OperationType | string;

  /**
   * <p>The ID of the invoice that is associated with the billing record.</p>
   */
  InvoiceId?: string;

  /**
   * <p>The date that the operation was billed, in Unix format.</p>
   */
  BillDate?: Date;

  /**
   * <p>The price that you were charged for the operation, in US dollars.</p>
   * 		       <p>Example value: 12.0</p>
   */
  Price?: number;
}

export namespace BillingRecord {
  export const filterSensitiveLog = (obj: BillingRecord): any => ({
    ...obj,
  });
}

/**
 * <p>The CancelDomainTransferToAnotherAwsAccount request includes the following element.</p>
 */
export interface CancelDomainTransferToAnotherAwsAccountRequest {
  /**
   * <p>The name of the domain for which you want to cancel the transfer to another AWS account.</p>
   */
  DomainName: string | undefined;
}

export namespace CancelDomainTransferToAnotherAwsAccountRequest {
  export const filterSensitiveLog = (obj: CancelDomainTransferToAnotherAwsAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>CancelDomainTransferToAnotherAwsAccount</code> response includes the following element.</p>
 */
export interface CancelDomainTransferToAnotherAwsAccountResponse {
  /**
   * <p>The identifier that <code>TransferDomainToAnotherAwsAccount</code> returned to track the progress of the request.
   * 			Because the transfer request was canceled, the value is no longer valid, and you can't use <code>GetOperationDetail</code>
   * 			to query the operation status.</p>
   */
  OperationId?: string;
}

export namespace CancelDomainTransferToAnotherAwsAccountResponse {
  export const filterSensitiveLog = (obj: CancelDomainTransferToAnotherAwsAccountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The CheckDomainAvailability request contains the following elements.</p>
 */
export interface CheckDomainAvailabilityRequest {
  /**
   * <p>The name of the domain that you want to get availability for. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports.
   * 			For a list of supported TLDs, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the
   * 			<i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>The domain name can contain only the following characters:</p>
   * 		       <ul>
   *             <li>
   *                <p>Letters a through z. Domain names are not case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Numbers 0 through 9.</p>
   *             </li>
   *             <li>
   *                <p>Hyphen (-). You can't specify a hyphen at the beginning or end of a label. </p>
   *             </li>
   *             <li>
   *                <p>Period (.) to separate the labels in the name, such as the <code>.</code> in <code>example.com</code>.</p>
   *             </li>
   *          </ul>
   * 		       <p>Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports
   * 			internationalized domain names, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a>.
   * 			For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html#domain-name-format-idns">Formatting Internationalized Domain Names</a>.
   * 		</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  IdnLangCode?: string;
}

export namespace CheckDomainAvailabilityRequest {
  export const filterSensitiveLog = (obj: CheckDomainAvailabilityRequest): any => ({
    ...obj,
  });
}

export type DomainAvailability =
  | "AVAILABLE"
  | "AVAILABLE_PREORDER"
  | "AVAILABLE_RESERVED"
  | "DONT_KNOW"
  | "RESERVED"
  | "UNAVAILABLE"
  | "UNAVAILABLE_PREMIUM"
  | "UNAVAILABLE_RESTRICTED";

/**
 * <p>The CheckDomainAvailability response includes the following elements.</p>
 */
export interface CheckDomainAvailabilityResponse {
  /**
   * <p>Whether the domain name is available for registering.</p>
   * 		       <note>
   *             <p>You can register only domains designated as <code>AVAILABLE</code>.</p>
   *          </note>
   * 		       <p>Valid values:</p>
   * 		       <dl>
   *             <dt>AVAILABLE</dt>
   *             <dd>
   *                <p>The domain name is available.</p>
   *             </dd>
   *             <dt>AVAILABLE_RESERVED</dt>
   *             <dd>
   *                <p>The domain name is reserved under specific conditions.</p>
   *             </dd>
   *             <dt>AVAILABLE_PREORDER</dt>
   *             <dd>
   *                <p>The domain name is available and can be preordered.</p>
   *             </dd>
   *             <dt>DONT_KNOW</dt>
   *             <dd>
   *                <p>The TLD registry didn't reply with a definitive answer about whether the domain name is available.
   * 					Route 53 can return this response for a variety of reasons, for example, the registry is performing maintenance.
   * 					Try again later.</p>
   *             </dd>
   *             <dt>PENDING</dt>
   *             <dd>
   *                <p>The TLD registry didn't return a response in the expected amount of time. When the response is delayed,
   * 					it usually takes just a few extra seconds. You can resubmit the request immediately.</p>
   *             </dd>
   *             <dt>RESERVED</dt>
   *             <dd>
   *                <p>The domain name has been reserved for another person or organization.</p>
   *             </dd>
   *             <dt>UNAVAILABLE</dt>
   *             <dd>
   *                <p>The domain name is not available.</p>
   *             </dd>
   *             <dt>UNAVAILABLE_PREMIUM</dt>
   *             <dd>
   *                <p>The domain name is not available.</p>
   *             </dd>
   *             <dt>UNAVAILABLE_RESTRICTED</dt>
   *             <dd>
   *                <p>The domain name is forbidden.</p>
   *             </dd>
   *          </dl>
   */
  Availability: DomainAvailability | string | undefined;
}

export namespace CheckDomainAvailabilityResponse {
  export const filterSensitiveLog = (obj: CheckDomainAvailabilityResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 */
export interface UnsupportedTLD extends __SmithyException, $MetadataBearer {
  name: "UnsupportedTLD";
  $fault: "client";
  /**
   * <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   */
  message?: string;
}

export namespace UnsupportedTLD {
  export const filterSensitiveLog = (obj: UnsupportedTLD): any => ({
    ...obj,
  });
}

/**
 * <p>The CheckDomainTransferability request contains the following elements.</p>
 */
export interface CheckDomainTransferabilityRequest {
  /**
   * <p>The name of the domain that you want to transfer to Route 53. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports.
   * 			For a list of supported TLDs, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the
   * 			<i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>The domain name can contain only the following characters:</p>
   * 		       <ul>
   *             <li>
   *                <p>Letters a through z. Domain names are not case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Numbers 0 through 9.</p>
   *             </li>
   *             <li>
   *                <p>Hyphen (-). You can't specify a hyphen at the beginning or end of a label. </p>
   *             </li>
   *             <li>
   *                <p>Period (.) to separate the labels in the name, such as the <code>.</code> in <code>example.com</code>.</p>
   *             </li>
   *          </ul>
   */
  DomainName: string | undefined;

  /**
   * <p>If the registrar for the top-level domain (TLD) requires an authorization code to transfer the domain,
   * 			the code that you got from the current registrar for the domain.</p>
   */
  AuthCode?: string;
}

export namespace CheckDomainTransferabilityRequest {
  export const filterSensitiveLog = (obj: CheckDomainTransferabilityRequest): any => ({
    ...obj,
    ...(obj.AuthCode && { AuthCode: SENSITIVE_STRING }),
  });
}

export enum Transferable {
  DONT_KNOW = "DONT_KNOW",
  TRANSFERABLE = "TRANSFERABLE",
  UNTRANSFERABLE = "UNTRANSFERABLE",
}

/**
 * <p>A complex type that contains information about whether the specified domain can be transferred to Route 53.</p>
 */
export interface DomainTransferability {
  /**
   * <p>Whether the domain name can be transferred to Route 53.</p>
   * 		       <note>
   *             <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> for <code>Transferable</code>.</p>
   *          </note>
   *
   * 		       <p>Valid values:</p>
   * 		       <dl>
   *             <dt>TRANSFERABLE</dt>
   *             <dd>
   *                <p>The domain name can be transferred to Route 53.</p>
   *             </dd>
   *             <dt>UNTRANSFERRABLE</dt>
   *             <dd>
   *                <p>The domain name can't be transferred to Route 53.</p>
   *             </dd>
   *             <dt>DONT_KNOW</dt>
   *             <dd>
   *                <p>Reserved for future use.</p>
   *             </dd>
   *          </dl>
   */
  Transferable?: Transferable | string;
}

export namespace DomainTransferability {
  export const filterSensitiveLog = (obj: DomainTransferability): any => ({
    ...obj,
  });
}

/**
 * <p>The CheckDomainTransferability response includes the following elements.</p>
 */
export interface CheckDomainTransferabilityResponse {
  /**
   * <p>A complex type that contains information about whether the specified domain can be transferred to Route 53.</p>
   */
  Transferability: DomainTransferability | undefined;
}

export namespace CheckDomainTransferabilityResponse {
  export const filterSensitiveLog = (obj: CheckDomainTransferabilityResponse): any => ({
    ...obj,
  });
}

export type ContactType = "ASSOCIATION" | "COMPANY" | "PERSON" | "PUBLIC_BODY" | "RESELLER";

export type CountryCode =
  | "AD"
  | "AE"
  | "AF"
  | "AG"
  | "AI"
  | "AL"
  | "AM"
  | "AN"
  | "AO"
  | "AQ"
  | "AR"
  | "AS"
  | "AT"
  | "AU"
  | "AW"
  | "AZ"
  | "BA"
  | "BB"
  | "BD"
  | "BE"
  | "BF"
  | "BG"
  | "BH"
  | "BI"
  | "BJ"
  | "BL"
  | "BM"
  | "BN"
  | "BO"
  | "BR"
  | "BS"
  | "BT"
  | "BW"
  | "BY"
  | "BZ"
  | "CA"
  | "CC"
  | "CD"
  | "CF"
  | "CG"
  | "CH"
  | "CI"
  | "CK"
  | "CL"
  | "CM"
  | "CN"
  | "CO"
  | "CR"
  | "CU"
  | "CV"
  | "CX"
  | "CY"
  | "CZ"
  | "DE"
  | "DJ"
  | "DK"
  | "DM"
  | "DO"
  | "DZ"
  | "EC"
  | "EE"
  | "EG"
  | "ER"
  | "ES"
  | "ET"
  | "FI"
  | "FJ"
  | "FK"
  | "FM"
  | "FO"
  | "FR"
  | "GA"
  | "GB"
  | "GD"
  | "GE"
  | "GH"
  | "GI"
  | "GL"
  | "GM"
  | "GN"
  | "GQ"
  | "GR"
  | "GT"
  | "GU"
  | "GW"
  | "GY"
  | "HK"
  | "HN"
  | "HR"
  | "HT"
  | "HU"
  | "ID"
  | "IE"
  | "IL"
  | "IM"
  | "IN"
  | "IQ"
  | "IR"
  | "IS"
  | "IT"
  | "JM"
  | "JO"
  | "JP"
  | "KE"
  | "KG"
  | "KH"
  | "KI"
  | "KM"
  | "KN"
  | "KP"
  | "KR"
  | "KW"
  | "KY"
  | "KZ"
  | "LA"
  | "LB"
  | "LC"
  | "LI"
  | "LK"
  | "LR"
  | "LS"
  | "LT"
  | "LU"
  | "LV"
  | "LY"
  | "MA"
  | "MC"
  | "MD"
  | "ME"
  | "MF"
  | "MG"
  | "MH"
  | "MK"
  | "ML"
  | "MM"
  | "MN"
  | "MO"
  | "MP"
  | "MR"
  | "MS"
  | "MT"
  | "MU"
  | "MV"
  | "MW"
  | "MX"
  | "MY"
  | "MZ"
  | "NA"
  | "NC"
  | "NE"
  | "NG"
  | "NI"
  | "NL"
  | "NO"
  | "NP"
  | "NR"
  | "NU"
  | "NZ"
  | "OM"
  | "PA"
  | "PE"
  | "PF"
  | "PG"
  | "PH"
  | "PK"
  | "PL"
  | "PM"
  | "PN"
  | "PR"
  | "PT"
  | "PW"
  | "PY"
  | "QA"
  | "RO"
  | "RS"
  | "RU"
  | "RW"
  | "SA"
  | "SB"
  | "SC"
  | "SD"
  | "SE"
  | "SG"
  | "SH"
  | "SI"
  | "SK"
  | "SL"
  | "SM"
  | "SN"
  | "SO"
  | "SR"
  | "ST"
  | "SV"
  | "SY"
  | "SZ"
  | "TC"
  | "TD"
  | "TG"
  | "TH"
  | "TJ"
  | "TK"
  | "TL"
  | "TM"
  | "TN"
  | "TO"
  | "TR"
  | "TT"
  | "TV"
  | "TW"
  | "TZ"
  | "UA"
  | "UG"
  | "US"
  | "UY"
  | "UZ"
  | "VA"
  | "VC"
  | "VE"
  | "VG"
  | "VI"
  | "VN"
  | "VU"
  | "WF"
  | "WS"
  | "YE"
  | "YT"
  | "ZA"
  | "ZM"
  | "ZW";

export enum ExtraParamName {
  AU_ID_NUMBER = "AU_ID_NUMBER",
  AU_ID_TYPE = "AU_ID_TYPE",
  BIRTH_CITY = "BIRTH_CITY",
  BIRTH_COUNTRY = "BIRTH_COUNTRY",
  BIRTH_DATE_IN_YYYY_MM_DD = "BIRTH_DATE_IN_YYYY_MM_DD",
  BIRTH_DEPARTMENT = "BIRTH_DEPARTMENT",
  BRAND_NUMBER = "BRAND_NUMBER",
  CA_BUSINESS_ENTITY_TYPE = "CA_BUSINESS_ENTITY_TYPE",
  CA_LEGAL_REPRESENTATIVE = "CA_LEGAL_REPRESENTATIVE",
  CA_LEGAL_REPRESENTATIVE_CAPACITY = "CA_LEGAL_REPRESENTATIVE_CAPACITY",
  CA_LEGAL_TYPE = "CA_LEGAL_TYPE",
  DOCUMENT_NUMBER = "DOCUMENT_NUMBER",
  DUNS_NUMBER = "DUNS_NUMBER",
  ES_IDENTIFICATION = "ES_IDENTIFICATION",
  ES_IDENTIFICATION_TYPE = "ES_IDENTIFICATION_TYPE",
  ES_LEGAL_FORM = "ES_LEGAL_FORM",
  FI_BUSINESS_NUMBER = "FI_BUSINESS_NUMBER",
  FI_NATIONALITY = "FI_NATIONALITY",
  FI_ORGANIZATION_TYPE = "FI_ORGANIZATION_TYPE",
  IT_NATIONALITY = "IT_NATIONALITY",
  IT_PIN = "IT_PIN",
  IT_REGISTRANT_ENTITY_TYPE = "IT_REGISTRANT_ENTITY_TYPE",
  ONWER_FI_ID_NUMBER = "FI_ID_NUMBER",
  RU_PASSPORT_DATA = "RU_PASSPORT_DATA",
  SE_ID_NUMBER = "SE_ID_NUMBER",
  SG_ID_NUMBER = "SG_ID_NUMBER",
  UK_COMPANY_NUMBER = "UK_COMPANY_NUMBER",
  UK_CONTACT_TYPE = "UK_CONTACT_TYPE",
  VAT_NUMBER = "VAT_NUMBER",
}

/**
 * <p>ExtraParam includes the following elements.</p>
 */
export interface ExtraParam {
  /**
   * <p>The name of an additional parameter that is required by a top-level domain. Here are the top-level domains that require
   * 			additional parameters and the names of the parameters that they require:</p>
   *
   * 		       <dl>
   *             <dt>.com.au and .net.au</dt>
   *             <dd>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>AU_ID_NUMBER</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AU_ID_TYPE</code>
   *                      </p>
   * 							              <p>Valid values include the following:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>
   *                               <code>ABN</code> (Australian business number)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>ACN</code> (Australian company number)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>TM</code> (Trademark number)</p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                </ul>
   * 				        </dd>
   *             <dt>.ca</dt>
   *             <dd>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>BRAND_NUMBER</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CA_BUSINESS_ENTITY_TYPE</code>
   *                      </p>
   * 							              <p>Valid values include the following:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>
   *                               <code>BANK</code> (Bank)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>COMMERCIAL_COMPANY</code> (Commercial company)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>COMPANY</code> (Company)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>COOPERATION</code> (Cooperation)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>COOPERATIVE</code> (Cooperative)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>COOPRIX</code> (Cooprix)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>CORP</code> (Corporation)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>CREDIT_UNION</code> (Credit union)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>FOMIA</code> (Federation of mutual insurance associations)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>INC</code> (Incorporated)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LTD</code> (Limited)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LTEE</code> (Limitée)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LLC</code> (Limited liability corporation)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LLP</code> (Limited liability partnership)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LTE</code> (Lte.)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>MBA</code> (Mutual benefit association)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>MIC</code> (Mutual insurance company)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>NFP</code> (Not-for-profit corporation)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>SA</code> (S.A.)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>SAVINGS_COMPANY</code> (Savings company)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>SAVINGS_UNION</code> (Savings union)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>SARL</code> (Société à responsabilité limitée)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>TRUST</code> (Trust)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>ULC</code> (Unlimited liability corporation)</p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                   <li>
   *                      <p>
   *                         <code>CA_LEGAL_TYPE</code>
   *                      </p>
   * 							              <p>When <code>ContactType</code> is <code>PERSON</code>, valid values include the following:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>
   *                               <code>ABO</code> (Aboriginal Peoples indigenous to Canada)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>CCT</code> (Canadian citizen)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LGR</code> (Legal Representative of a Canadian Citizen or Permanent Resident)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>RES</code> (Permanent resident of Canada)</p>
   *                         </li>
   *                      </ul>
   *
   * 							              <p>When <code>ContactType</code> is a value other than <code>PERSON</code>, valid values include the following:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>
   *                               <code>ASS</code> (Canadian unincorporated association)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>CCO</code> (Canadian corporation)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>EDU</code> (Canadian educational institution)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>GOV</code> (Government or government entity in Canada)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>HOP</code> (Canadian Hospital)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>INB</code> (Indian Band recognized by the Indian Act of Canada)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LAM</code> (Canadian Library, Archive, or Museum)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>MAJ</code> (Her/His Majesty the Queen/King)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>OMK</code> (Official mark registered in Canada)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>PLT</code> (Canadian Political Party)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>PRT</code> (Partnership Registered in Canada)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>TDM</code> (Trademark registered in Canada)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>TRD</code> (Canadian Trade Union)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>TRS</code> (Trust established in Canada)</p>
   *                         </li>
   *                      </ul>
   *
   * 						            </li>
   *                </ul>
   * 				        </dd>
   *             <dt>.es</dt>
   *             <dd>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>ES_IDENTIFICATION</code>
   *                      </p>
   * 							              <p>Specify the applicable value:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>
   *                               <b>For contacts inside Spain:</b> Enter your passport ID.</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <b>For contacts outside of Spain:</b> Enter the VAT identification number
   * 									for the company.</p>
   * 									                  <note>
   *                               <p>For .es domains, the value of <code>ContactType</code> must be <code>PERSON</code>.</p>
   *                            </note>
   * 								                </li>
   *                      </ul>
   * 						            </li>
   *                   <li>
   *                      <p>
   *                         <code>ES_IDENTIFICATION_TYPE</code>
   *                      </p>
   * 							              <p>Valid values include the following:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>
   *                               <code>DNI_AND_NIF</code> (For Spanish contacts)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>NIE</code> (For foreigners with legal residence)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>OTHER</code> (For contacts outside of Spain)</p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                   <li>
   *                      <p>
   *                         <code>ES_LEGAL_FORM</code>
   *                      </p>
   * 							              <p>Valid values include the following:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>
   *                               <code>ASSOCIATION</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>CENTRAL_GOVERNMENT_BODY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>CIVIL_SOCIETY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>COMMUNITY_OF_OWNERS</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>COMMUNITY_PROPERTY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>CONSULATE</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>COOPERATIVE</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>DESIGNATION_OF_ORIGIN_SUPERVISORY_COUNCIL</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>ECONOMIC_INTEREST_GROUP</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>EMBASSY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>ENTITY_MANAGING_NATURAL_AREAS</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>FARM_PARTNERSHIP</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>FOUNDATION</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>GENERAL_AND_LIMITED_PARTNERSHIP</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>GENERAL_PARTNERSHIP</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>INDIVIDUAL</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LIMITED_COMPANY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LOCAL_AUTHORITY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LOCAL_PUBLIC_ENTITY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>MUTUAL_INSURANCE_COMPANY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>NATIONAL_PUBLIC_ENTITY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>ORDER_OR_RELIGIOUS_INSTITUTION</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>OTHERS (Only for contacts outside of Spain)</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>POLITICAL_PARTY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>PROFESSIONAL_ASSOCIATION</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>PUBLIC_LAW_ASSOCIATION</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>PUBLIC_LIMITED_COMPANY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>REGIONAL_GOVERNMENT_BODY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>REGIONAL_PUBLIC_ENTITY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>SAVINGS_BANK</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>SPANISH_OFFICE</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>SPORTS_ASSOCIATION</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>SPORTS_FEDERATION</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>SPORTS_LIMITED_COMPANY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>TEMPORARY_ALLIANCE_OF_ENTERPRISES</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>TRADE_UNION</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>WORKER_OWNED_COMPANY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>WORKER_OWNED_LIMITED_COMPANY</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *
   * 						            </li>
   *                </ul>
   * 				        </dd>
   *             <dt>.fi</dt>
   *             <dd>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>BIRTH_DATE_IN_YYYY_MM_DD</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FI_BUSINESS_NUMBER</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FI_ID_NUMBER</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FI_NATIONALITY</code>
   *                      </p>
   * 							              <p>Valid values include the following:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>
   *                               <code>FINNISH</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>NOT_FINNISH</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                   <li>
   *                      <p>
   *                         <code>FI_ORGANIZATION_TYPE</code>
   *                      </p>
   * 							              <p>Valid values include the following:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>
   *                               <code>COMPANY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>CORPORATION</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>GOVERNMENT</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>INSTITUTION</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>POLITICAL_PARTY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>PUBLIC_COMMUNITY</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>TOWNSHIP</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                </ul>
   * 				        </dd>
   *             <dt>.fr</dt>
   *             <dd>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>BIRTH_CITY</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>BIRTH_COUNTRY</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>BIRTH_DATE_IN_YYYY_MM_DD</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>BIRTH_DEPARTMENT</code>: Specify the INSEE code that corresponds with the department where the contact was born.
   * 							If the contact was born somewhere other than France or its overseas departments, specify <code>99</code>. For more information,
   * 							including a list of departments and the corresponding INSEE numbers, see the Wikipedia entry
   * 							<a href="https://en.wikipedia.org/wiki/Departments_of_France">Departments of France</a>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>BRAND_NUMBER</code>
   *                      </p>
   *                   </li>
   *                </ul>
   * 				        </dd>
   *             <dt>.it</dt>
   *             <dd>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>IT_NATIONALITY</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IT_PIN</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>IT_REGISTRANT_ENTITY_TYPE</code>
   *                      </p>
   * 							              <p>Valid values include the following:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>
   *                               <code>FOREIGNERS</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>FREELANCE_WORKERS</code> (Freelance workers and professionals)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>ITALIAN_COMPANIES</code> (Italian companies and one-person companies)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>NON_PROFIT_ORGANIZATIONS</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>OTHER_SUBJECTS</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>PUBLIC_ORGANIZATIONS</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                </ul>
   * 				        </dd>
   *             <dt>.ru</dt>
   *             <dd>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>BIRTH_DATE_IN_YYYY_MM_DD</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>RU_PASSPORT_DATA</code>
   *                      </p>
   *                   </li>
   *                </ul>
   * 				        </dd>
   *             <dt>.se</dt>
   *             <dd>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>BIRTH_COUNTRY</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>SE_ID_NUMBER</code>
   *                      </p>
   *                   </li>
   *                </ul>
   * 				        </dd>
   *             <dt>.sg</dt>
   *             <dd>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>SG_ID_NUMBER</code>
   *                      </p>
   *                   </li>
   *                </ul>
   * 				        </dd>
   *             <dt>.co.uk, .me.uk, and .org.uk</dt>
   *             <dd>
   * 					          <ul>
   *                   <li>
   *                      <p>
   *                         <code>UK_CONTACT_TYPE</code>
   *                      </p>
   * 							              <p>Valid values include the following:</p>
   * 							              <ul>
   *                         <li>
   *                            <p>
   *                               <code>CRC</code> (UK Corporation by Royal Charter)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>FCORP</code> (Non-UK Corporation)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>FIND</code> (Non-UK Individual, representing self)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>FOTHER</code> (Non-UK Entity that does not fit into any other category)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>GOV</code> (UK Government Body)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>IND</code> (UK Individual (representing self))</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>IP</code> (UK Industrial/Provident Registered Company)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LLP</code> (UK Limited Liability Partnership)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LTD</code> (UK Limited Company)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>OTHER</code> (UK Entity that does not fit into any other category)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>PLC</code> (UK Public Limited Company)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>PTNR</code> (UK Partnership)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>RCHAR</code> (UK Registered Charity)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>SCH</code> (UK School)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>STAT</code> (UK Statutory Body)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>STRA</code> (UK Sole Trader)</p>
   *                         </li>
   *                      </ul>
   * 						            </li>
   *                   <li>
   *                      <p>
   *                         <code>UK_COMPANY_NUMBER</code>
   *                      </p>
   *                   </li>
   *                </ul>
   * 				        </dd>
   *          </dl>
   *
   * 		       <p>In addition, many TLDs require a <code>VAT_NUMBER</code>.</p>
   */
  Name: ExtraParamName | string | undefined;

  /**
   * <p>The value that corresponds with the name of an extra parameter.</p>
   */
  Value: string | undefined;
}

export namespace ExtraParam {
  export const filterSensitiveLog = (obj: ExtraParam): any => ({
    ...obj,
  });
}

/**
 * <p>ContactDetail includes the following elements.</p>
 */
export interface ContactDetail {
  /**
   * <p>First name of contact.</p>
   */
  FirstName?: string;

  /**
   * <p>Last name of contact.</p>
   */
  LastName?: string;

  /**
   * <p>Indicates whether the contact is a person, company, association, or public organization. Note the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>If you specify a value other than <code>PERSON</code>, you must also specify a value for
   * 				<code>OrganizationName</code>.</p>
   *             </li>
   *             <li>
   *                <p>For some TLDs, the privacy protection available depends on the value that you specify for
   * 				<code>Contact Type</code>. For the privacy protection settings for your TLD, see
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can
   * 					Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For .es domains, if you specify <code>PERSON</code>, you must specify <code>INDIVIDUAL</code>
   * 				for the value of <code>ES_LEGAL_FORM</code>.</p>
   *             </li>
   *          </ul>
   */
  ContactType?: ContactType | string;

  /**
   * <p>Name of the organization for contact types other than <code>PERSON</code>.</p>
   */
  OrganizationName?: string;

  /**
   * <p>First line of the contact's address.</p>
   */
  AddressLine1?: string;

  /**
   * <p>Second line of contact's address, if any.</p>
   */
  AddressLine2?: string;

  /**
   * <p>The city of the contact's address.</p>
   */
  City?: string;

  /**
   * <p>The state or province of the contact's city.</p>
   */
  State?: string;

  /**
   * <p>Code for the country of the contact's address.</p>
   */
  CountryCode?: CountryCode | string;

  /**
   * <p>The zip or postal code of the contact's address.</p>
   */
  ZipCode?: string;

  /**
   * <p>The phone number of the contact.</p>
   * 		       <p>Constraints: Phone number must be specified in the format "+[country	dialing code].[number including any area code>]".
   * 			For example, a US phone number might appear as <code>"+1.1234567890"</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>Email address of the contact.</p>
   */
  Email?: string;

  /**
   * <p>Fax number of the contact.</p>
   * 		       <p>Constraints: Phone number must be specified in the format "+[country dialing code].[number including any area code]".
   * 			For example, a US phone number might appear as <code>"+1.1234567890"</code>.</p>
   */
  Fax?: string;

  /**
   * <p>A list of name-value pairs for parameters required by certain top-level domains.</p>
   */
  ExtraParams?: ExtraParam[];
}

export namespace ContactDetail {
  export const filterSensitiveLog = (obj: ContactDetail): any => ({
    ...obj,
  });
}

/**
 * <p>The DeleteTagsForDomainRequest includes the following elements.</p>
 */
export interface DeleteTagsForDomainRequest {
  /**
   * <p>The domain for which you want to delete one or more tags.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A list of tag keys to delete.</p>
   */
  TagsToDelete: string[] | undefined;
}

export namespace DeleteTagsForDomainRequest {
  export const filterSensitiveLog = (obj: DeleteTagsForDomainRequest): any => ({
    ...obj,
  });
}

export interface DeleteTagsForDomainResponse {}

export namespace DeleteTagsForDomainResponse {
  export const filterSensitiveLog = (obj: DeleteTagsForDomainResponse): any => ({
    ...obj,
  });
}

export interface DisableDomainAutoRenewRequest {
  /**
   * <p>The name of the domain that you want to disable automatic renewal for.</p>
   */
  DomainName: string | undefined;
}

export namespace DisableDomainAutoRenewRequest {
  export const filterSensitiveLog = (obj: DisableDomainAutoRenewRequest): any => ({
    ...obj,
  });
}

export interface DisableDomainAutoRenewResponse {}

export namespace DisableDomainAutoRenewResponse {
  export const filterSensitiveLog = (obj: DisableDomainAutoRenewResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The DisableDomainTransferLock request includes the following element.</p>
 */
export interface DisableDomainTransferLockRequest {
  /**
   * <p>The name of the domain that you want to remove the transfer lock for.</p>
   */
  DomainName: string | undefined;
}

export namespace DisableDomainTransferLockRequest {
  export const filterSensitiveLog = (obj: DisableDomainTransferLockRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The DisableDomainTransferLock response includes the following element.</p>
 */
export interface DisableDomainTransferLockResponse {
  /**
   * <p>Identifier for tracking the progress of the request. To query the operation status, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace DisableDomainTransferLockResponse {
  export const filterSensitiveLog = (obj: DisableDomainTransferLockResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request is already in progress for the domain.</p>
 */
export interface DuplicateRequest extends __SmithyException, $MetadataBearer {
  name: "DuplicateRequest";
  $fault: "client";
  /**
   * <p>The request is already in progress for the domain.</p>
   */
  message?: string;
}

export namespace DuplicateRequest {
  export const filterSensitiveLog = (obj: DuplicateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The top-level domain does not support this operation.</p>
 */
export interface TLDRulesViolation extends __SmithyException, $MetadataBearer {
  name: "TLDRulesViolation";
  $fault: "client";
  /**
   * <p>The top-level domain does not support this operation.</p>
   */
  message?: string;
}

export namespace TLDRulesViolation {
  export const filterSensitiveLog = (obj: TLDRulesViolation): any => ({
    ...obj,
  });
}

/**
 * <p>Information about one suggested domain name.</p>
 */
export interface DomainSuggestion {
  /**
   * <p>A suggested domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>Whether the domain name is available for registering.</p>
   * 		       <note>
   *             <p>You can register only the domains that are designated as <code>AVAILABLE</code>.</p>
   *          </note>
   * 		       <p>Valid values:</p>
   * 		       <dl>
   *             <dt>AVAILABLE</dt>
   *             <dd>
   *                <p>The domain name is available.</p>
   *             </dd>
   *             <dt>AVAILABLE_RESERVED</dt>
   *             <dd>
   *                <p>The domain name is reserved under specific conditions.</p>
   *             </dd>
   *             <dt>AVAILABLE_PREORDER</dt>
   *             <dd>
   *                <p>The domain name is available and can be preordered.</p>
   *             </dd>
   *             <dt>DONT_KNOW</dt>
   *             <dd>
   *                <p>The TLD registry didn't reply with a definitive answer about whether the domain name is available.
   * 					Route 53 can return this response for a variety of reasons, for example, the registry is performing maintenance.
   * 					Try again later.</p>
   *             </dd>
   *             <dt>PENDING</dt>
   *             <dd>
   *                <p>The TLD registry didn't return a response in the expected amount of time. When the response is delayed,
   * 					it usually takes just a few extra seconds. You can resubmit the request immediately.</p>
   *             </dd>
   *             <dt>RESERVED</dt>
   *             <dd>
   *                <p>The domain name has been reserved for another person or organization.</p>
   *             </dd>
   *             <dt>UNAVAILABLE</dt>
   *             <dd>
   *                <p>The domain name is not available.</p>
   *             </dd>
   *             <dt>UNAVAILABLE_PREMIUM</dt>
   *             <dd>
   *                <p>The domain name is not available.</p>
   *             </dd>
   *             <dt>UNAVAILABLE_RESTRICTED</dt>
   *             <dd>
   *                <p>The domain name is forbidden.</p>
   *             </dd>
   *          </dl>
   */
  Availability?: string;
}

export namespace DomainSuggestion {
  export const filterSensitiveLog = (obj: DomainSuggestion): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about one domain.</p>
 */
export interface DomainSummary {
  /**
   * <p>The name of the domain that the summary information applies to.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Indicates whether the domain is automatically renewed upon expiration.</p>
   */
  AutoRenew?: boolean;

  /**
   * <p>Indicates whether a domain is locked from unauthorized transfer to another party.</p>
   */
  TransferLock?: boolean;

  /**
   * <p>Expiration date of the domain in Unix time format and Coordinated Universal Time (UTC).</p>
   */
  Expiry?: Date;
}

export namespace DomainSummary {
  export const filterSensitiveLog = (obj: DomainSummary): any => ({
    ...obj,
  });
}

export interface EnableDomainAutoRenewRequest {
  /**
   * <p>The name of the domain that you want to enable automatic renewal for.</p>
   */
  DomainName: string | undefined;
}

export namespace EnableDomainAutoRenewRequest {
  export const filterSensitiveLog = (obj: EnableDomainAutoRenewRequest): any => ({
    ...obj,
  });
}

export interface EnableDomainAutoRenewResponse {}

export namespace EnableDomainAutoRenewResponse {
  export const filterSensitiveLog = (obj: EnableDomainAutoRenewResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request to set the transfer lock for the specified domain.</p>
 */
export interface EnableDomainTransferLockRequest {
  /**
   * <p>The name of the domain that you want to set the transfer lock for.</p>
   */
  DomainName: string | undefined;
}

export namespace EnableDomainTransferLockRequest {
  export const filterSensitiveLog = (obj: EnableDomainTransferLockRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The EnableDomainTransferLock response includes the following elements.</p>
 */
export interface EnableDomainTransferLockResponse {
  /**
   * <p>Identifier for tracking the progress of the request. To use this ID to query the operation status, use GetOperationDetail.</p>
   */
  OperationId: string | undefined;
}

export namespace EnableDomainTransferLockResponse {
  export const filterSensitiveLog = (obj: EnableDomainTransferLockResponse): any => ({
    ...obj,
  });
}

export interface GetContactReachabilityStatusRequest {
  /**
   * <p>The name of the domain for which you want to know whether the registrant contact has confirmed that the email address is valid.</p>
   */
  domainName?: string;
}

export namespace GetContactReachabilityStatusRequest {
  export const filterSensitiveLog = (obj: GetContactReachabilityStatusRequest): any => ({
    ...obj,
  });
}

export enum ReachabilityStatus {
  DONE = "DONE",
  EXPIRED = "EXPIRED",
  PENDING = "PENDING",
}

export interface GetContactReachabilityStatusResponse {
  /**
   * <p>The domain name for which you requested the reachability status.</p>
   */
  domainName?: string;

  /**
   * <p>Whether the registrant contact has responded. Values include the following:</p>
   * 		       <dl>
   *             <dt>PENDING</dt>
   *             <dd>
   *                <p>We sent the confirmation email and haven't received a response yet.</p>
   *             </dd>
   *             <dt>DONE</dt>
   *             <dd>
   *                <p>We sent the email and got confirmation from the registrant contact.</p>
   *             </dd>
   *             <dt>EXPIRED</dt>
   *             <dd>
   *                <p>The time limit expired before the registrant contact responded.</p>
   *             </dd>
   *          </dl>
   */
  status?: ReachabilityStatus | string;
}

export namespace GetContactReachabilityStatusResponse {
  export const filterSensitiveLog = (obj: GetContactReachabilityStatusResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The GetDomainDetail request includes the following element.</p>
 */
export interface GetDomainDetailRequest {
  /**
   * <p>The name of the domain that you want to get detailed information about.</p>
   */
  DomainName: string | undefined;
}

export namespace GetDomainDetailRequest {
  export const filterSensitiveLog = (obj: GetDomainDetailRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Nameserver includes the following elements.</p>
 */
export interface Nameserver {
  /**
   * <p>The fully qualified host name of the name server.</p>
   * 		       <p>Constraint: Maximum 255 characters</p>
   */
  Name: string | undefined;

  /**
   * <p>Glue IP address of a name server entry. Glue IP addresses are required only when the name of the name server
   * 			is a subdomain of the domain. For example, if your domain is example.com and the name server for the domain is
   * 			ns.example.com, you need to specify the IP address for ns.example.com.</p>
   * 		       <p>Constraints: The list can contain only one IPv4 and one IPv6 address.</p>
   */
  GlueIps?: string[];
}

export namespace Nameserver {
  export const filterSensitiveLog = (obj: Nameserver): any => ({
    ...obj,
  });
}

/**
 * <p>The GetDomainDetail response includes the following elements.</p>
 */
export interface GetDomainDetailResponse {
  /**
   * <p>The name of a domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the domain.</p>
   */
  Nameservers: Nameserver[] | undefined;

  /**
   * <p>Specifies whether the domain registration is set to renew automatically.</p>
   */
  AutoRenew?: boolean;

  /**
   * <p>Provides details about the domain administrative contact.</p>
   */
  AdminContact: ContactDetail | undefined;

  /**
   * <p>Provides details about the domain registrant.</p>
   */
  RegistrantContact: ContactDetail | undefined;

  /**
   * <p>Provides details about the domain technical contact.</p>
   */
  TechContact: ContactDetail | undefined;

  /**
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>,
   * 			WHOIS queries return the information that you entered for the admin contact.</p>
   */
  AdminPrivacy?: boolean;

  /**
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>,
   * 			WHOIS queries return the information that you entered for the registrant contact (domain owner).</p>
   */
  RegistrantPrivacy?: boolean;

  /**
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>,
   * 			WHOIS queries return the information that you entered for the technical contact.</p>
   */
  TechPrivacy?: boolean;

  /**
   * <p>Name of the registrar of the domain as identified in the registry. Domains with a .com, .net, or .org TLD are registered by
   * 			Amazon Registrar. All other domains are registered by our registrar associate, Gandi. The value for domains that are registered by
   * 			Gandi is <code>"GANDI SAS"</code>. </p>
   */
  RegistrarName?: string;

  /**
   * <p>The fully qualified name of the WHOIS server that can answer the WHOIS query for the domain.</p>
   */
  WhoIsServer?: string;

  /**
   * <p>Web address of the registrar.</p>
   */
  RegistrarUrl?: string;

  /**
   * <p>Email address to contact to report incorrect contact information for a domain, to report that the domain
   * 			is being used to send spam, to report that someone is cybersquatting on a domain name, or report some other type of abuse.</p>
   */
  AbuseContactEmail?: string;

  /**
   * <p>Phone number for reporting abuse.</p>
   */
  AbuseContactPhone?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  RegistryDomainId?: string;

  /**
   * <p>The date when the domain was created as found in the response to a WHOIS query. The date and time is in
   * 			Unix time format and Coordinated Universal time (UTC).</p>
   */
  CreationDate?: Date;

  /**
   * <p>The last updated date of the domain as found in the response to a WHOIS query. The date and time is in
   * 			Unix time format and Coordinated Universal time (UTC).</p>
   */
  UpdatedDate?: Date;

  /**
   * <p>The date when the registration for the domain is set to expire. The date and time is in
   * 			Unix time format and Coordinated Universal time (UTC).</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>Reseller of the domain. Domains registered or transferred using Route 53 domains will have <code>"Amazon"</code>
   * 			as the reseller. </p>
   */
  Reseller?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  DnsSec?: string;

  /**
   * <p>An array of domain name status codes, also known as Extensible Provisioning Protocol (EPP) status codes.</p>
   * 		       <p>ICANN, the organization that maintains a central database of domain names, has developed a set of domain name
   * 			status codes that tell you the status of a variety of operations on a domain name, for example, registering a domain name,
   * 			transferring a domain name to another registrar, renewing the registration for a domain name, and so on. All registrars
   * 			use this same set of status codes.</p>
   * 		       <p>For a current list of domain name status codes and an explanation of what each code means, go to the
   * 			<a href="https://www.icann.org/">ICANN website</a> and search for <code>epp status codes</code>.
   * 			(Search on the ICANN website; web searches sometimes return an old version of the document.)</p>
   */
  StatusList?: string[];
}

export namespace GetDomainDetailResponse {
  export const filterSensitiveLog = (obj: GetDomainDetailResponse): any => ({
    ...obj,
    ...(obj.AdminContact && { AdminContact: SENSITIVE_STRING }),
    ...(obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING }),
    ...(obj.TechContact && { TechContact: SENSITIVE_STRING }),
  });
}

export interface GetDomainSuggestionsRequest {
  /**
   * <p>A domain name that you want to use as the basis for a list of possible domain names. The top-level domain (TLD), such as .com,
   * 			must be a TLD that Route 53 supports. For a list of supported TLDs, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the
   * 			<i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>The domain name can contain only the following characters:</p>
   * 		       <ul>
   *             <li>
   *                <p>Letters a through z. Domain names are not case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Numbers 0 through 9.</p>
   *             </li>
   *             <li>
   *                <p>Hyphen (-). You can't specify a hyphen at the beginning or end of a label. </p>
   *             </li>
   *             <li>
   *                <p>Period (.) to separate the labels in the name, such as the <code>.</code> in <code>example.com</code>.</p>
   *             </li>
   *          </ul>
   * 		       <p>Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use
   * 			supports internationalized domain names, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a>.
   * 			</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The number of suggested domain names that you want Route 53 to return. Specify a value between 1 and 50.</p>
   */
  SuggestionCount: number | undefined;

  /**
   * <p>If <code>OnlyAvailable</code> is <code>true</code>, Route 53 returns only domain names that are available.
   * 			If <code>OnlyAvailable</code> is <code>false</code>, Route 53 returns domain names without checking whether they're
   * 			available to be registered. To determine whether the domain is available, you can call <code>checkDomainAvailability</code>
   * 			for each suggestion.</p>
   */
  OnlyAvailable: boolean | undefined;
}

export namespace GetDomainSuggestionsRequest {
  export const filterSensitiveLog = (obj: GetDomainSuggestionsRequest): any => ({
    ...obj,
  });
}

export interface GetDomainSuggestionsResponse {
  /**
   * <p>A list of possible domain names. If you specified <code>true</code> for <code>OnlyAvailable</code> in the request,
   * 			the list contains only domains that are available for registration.</p>
   */
  SuggestionsList?: DomainSuggestion[];
}

export namespace GetDomainSuggestionsResponse {
  export const filterSensitiveLog = (obj: GetDomainSuggestionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>
 * 			request includes the following element.</p>
 */
export interface GetOperationDetailRequest {
  /**
   * <p>The identifier for the operation for which you want to get the status. Route 53 returned the identifier
   * 			in the response to the original request.</p>
   */
  OperationId: string | undefined;
}

export namespace GetOperationDetailRequest {
  export const filterSensitiveLog = (obj: GetOperationDetailRequest): any => ({
    ...obj,
  });
}

export type OperationStatus = "ERROR" | "FAILED" | "IN_PROGRESS" | "SUBMITTED" | "SUCCESSFUL";

/**
 * <p>The GetOperationDetail response includes the following elements.</p>
 */
export interface GetOperationDetailResponse {
  /**
   * <p>The identifier for the operation.</p>
   */
  OperationId?: string;

  /**
   * <p>The current status of the requested operation in the system.</p>
   */
  Status?: OperationStatus | string;

  /**
   * <p>Detailed information on the status including possible errors.</p>
   */
  Message?: string;

  /**
   * <p>The name of a domain.</p>
   */
  DomainName?: string;

  /**
   * <p>The type of operation that was requested.</p>
   */
  Type?: OperationType | string;

  /**
   * <p>The date when the request was submitted.</p>
   */
  SubmittedDate?: Date;
}

export namespace GetOperationDetailResponse {
  export const filterSensitiveLog = (obj: GetOperationDetailResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The ListDomains request includes the following elements.</p>
 */
export interface ListDomainsRequest {
  /**
   * <p>For an initial request for a list of domains, omit this element. If the number of domains
   * 			that are associated with the current AWS account is greater than the value that you specified for
   * 			<code>MaxItems</code>, you can use <code>Marker</code> to return additional domains. Get the value of
   * 			<code>NextPageMarker</code> from the previous response, and submit another request that includes the
   * 			value of <code>NextPageMarker</code> in the <code>Marker</code> element.</p>
   * 		       <p>Constraints: The marker must match the value specified in the previous request.</p>
   */
  Marker?: string;

  /**
   * <p>Number of domains to be returned.</p>
   * 		       <p>Default: 20</p>
   */
  MaxItems?: number;
}

export namespace ListDomainsRequest {
  export const filterSensitiveLog = (obj: ListDomainsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The ListDomains response includes the following elements.</p>
 */
export interface ListDomainsResponse {
  /**
   * <p>A summary of domains.</p>
   */
  Domains: DomainSummary[] | undefined;

  /**
   * <p>If there are more domains than you specified for <code>MaxItems</code> in the request, submit another
   * 			request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>.</p>
   */
  NextPageMarker?: string;
}

export namespace ListDomainsResponse {
  export const filterSensitiveLog = (obj: ListDomainsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The ListOperations request includes the following elements.</p>
 */
export interface ListOperationsRequest {
  /**
   * <p>An optional parameter that lets you get information about all the operations that you submitted after a specified date and time.
   * 			Specify the date and time in Unix time format and Coordinated Universal time (UTC).</p>
   */
  SubmittedSince?: Date;

  /**
   * <p>For an initial request for a list of operations, omit this element. If the number of operations that are
   * 			not yet complete is greater than the value that you specified for <code>MaxItems</code>, you can use <code>Marker</code>
   * 			to return additional operations. Get the value of <code>NextPageMarker</code> from the previous response,
   * 			and submit another request that includes the value of <code>NextPageMarker</code> in the <code>Marker</code> element.</p>
   */
  Marker?: string;

  /**
   * <p>Number of domains to be returned.</p>
   * 		       <p>Default: 20</p>
   */
  MaxItems?: number;
}

export namespace ListOperationsRequest {
  export const filterSensitiveLog = (obj: ListOperationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>OperationSummary includes the following elements.</p>
 */
export interface OperationSummary {
  /**
   * <p>Identifier returned to track the requested action.</p>
   */
  OperationId: string | undefined;

  /**
   * <p>The current status of the requested operation in the system.</p>
   */
  Status: OperationStatus | string | undefined;

  /**
   * <p>Type of the action requested.</p>
   */
  Type: OperationType | string | undefined;

  /**
   * <p>The date when the request was submitted.</p>
   */
  SubmittedDate: Date | undefined;
}

export namespace OperationSummary {
  export const filterSensitiveLog = (obj: OperationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The ListOperations response includes the following elements.</p>
 */
export interface ListOperationsResponse {
  /**
   * <p>Lists summaries of the operations.</p>
   */
  Operations: OperationSummary[] | undefined;

  /**
   * <p>If there are more operations than you specified for <code>MaxItems</code> in the request, submit another
   * 			request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>.</p>
   */
  NextPageMarker?: string;
}

export namespace ListOperationsResponse {
  export const filterSensitiveLog = (obj: ListOperationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The ListTagsForDomainRequest includes the following elements.</p>
 */
export interface ListTagsForDomainRequest {
  /**
   * <p>The domain for which you want to get a list of tags.</p>
   */
  DomainName: string | undefined;
}

export namespace ListTagsForDomainRequest {
  export const filterSensitiveLog = (obj: ListTagsForDomainRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Each tag includes the following elements.</p>
 */
export interface Tag {
  /**
   * <p>The key (name) of a tag.</p>
   * 		       <p>Valid values: A-Z, a-z, 0-9, space, ".:/=+\-@"</p>
   * 		       <p>Constraints: Each key can be 1-128 characters long.</p>
   */
  Key?: string;

  /**
   * <p>The value of a tag.</p>
   * 		       <p>Valid values: A-Z, a-z, 0-9, space, ".:/=+\-@"</p>
   * 		       <p>Constraints: Each value can be 0-256 characters long.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>The ListTagsForDomain response includes the following elements.</p>
 */
export interface ListTagsForDomainResponse {
  /**
   * <p>A list of the tags that are associated with the specified domain.</p>
   */
  TagList: Tag[] | undefined;
}

export namespace ListTagsForDomainResponse {
  export const filterSensitiveLog = (obj: ListTagsForDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The RegisterDomain request includes the following elements.</p>
 */
export interface RegisterDomainRequest {
  /**
   * <p>The domain name that you want to register. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports.
   * 			For a list of supported TLDs, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the
   * 			<i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>The domain name can contain only the following characters:</p>
   * 		       <ul>
   *             <li>
   *                <p>Letters a through z. Domain names are not case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Numbers 0 through 9.</p>
   *             </li>
   *             <li>
   *                <p>Hyphen (-). You can't specify a hyphen at the beginning or end of a label. </p>
   *             </li>
   *             <li>
   *                <p>Period (.) to separate the labels in the name, such as the <code>.</code> in <code>example.com</code>.</p>
   *             </li>
   *          </ul>
   * 		       <p>Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports
   * 			internationalized domain names, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a>.
   * 			For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html#domain-name-format-idns">Formatting Internationalized Domain Names</a>.
   * 		</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  IdnLangCode?: string;

  /**
   * <p>The number of years that you want to register the domain for. Domains are registered for a minimum of one year.
   * 			The maximum period depends on the top-level domain. For the range of valid values for your domain, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the
   * 			<i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>Default: 1</p>
   */
  DurationInYears: number | undefined;

  /**
   * <p>Indicates whether the domain will be automatically renewed (<code>true</code>) or not (<code>false</code>).
   * 			Autorenewal only takes effect after the account is charged.</p>
   * 		       <p>Default: <code>true</code>
   *          </p>
   */
  AutoRenew?: boolean;

  /**
   * <p>Provides detailed contact information. For information about the values that you specify for each element, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html">ContactDetail</a>.</p>
   */
  AdminContact: ContactDetail | undefined;

  /**
   * <p>Provides detailed contact information. For information about the values that you specify for each element, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html">ContactDetail</a>.</p>
   */
  RegistrantContact: ContactDetail | undefined;

  /**
   * <p>Provides detailed contact information. For information about the values that you specify for each element, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html">ContactDetail</a>.</p>
   */
  TechContact: ContactDetail | undefined;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>,
   * 			WHOIS queries return the information that you entered for the admin contact.</p>
   * 		       <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectAdminContact?: boolean;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>,
   * 			WHOIS queries return the information that you entered for the registrant contact (the domain owner).</p>
   * 		       <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectRegistrantContact?: boolean;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>,
   * 			WHOIS queries return the information that you entered for the technical contact.</p>
   * 		       <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectTechContact?: boolean;
}

export namespace RegisterDomainRequest {
  export const filterSensitiveLog = (obj: RegisterDomainRequest): any => ({
    ...obj,
    ...(obj.AdminContact && { AdminContact: SENSITIVE_STRING }),
    ...(obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING }),
    ...(obj.TechContact && { TechContact: SENSITIVE_STRING }),
  });
}

/**
 * <p>The RegisterDomain response includes the following element.</p>
 */
export interface RegisterDomainResponse {
  /**
   * <p>Identifier for tracking the progress of the request. To query the operation status, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace RegisterDomainResponse {
  export const filterSensitiveLog = (obj: RegisterDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The RejectDomainTransferFromAnotherAwsAccount request includes the following element.</p>
 */
export interface RejectDomainTransferFromAnotherAwsAccountRequest {
  /**
   * <p>The name of the domain that was specified when another AWS account submitted a
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>
   * 			request.
   * 		</p>
   */
  DomainName: string | undefined;
}

export namespace RejectDomainTransferFromAnotherAwsAccountRequest {
  export const filterSensitiveLog = (obj: RejectDomainTransferFromAnotherAwsAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The RejectDomainTransferFromAnotherAwsAccount response includes the following element.</p>
 */
export interface RejectDomainTransferFromAnotherAwsAccountResponse {
  /**
   * <p>The identifier that <code>TransferDomainToAnotherAwsAccount</code> returned to track the progress of the request.
   * 			Because the transfer request was rejected, the value is no longer valid, and you can't use <code>GetOperationDetail</code>
   * 			to query the operation status.</p>
   */
  OperationId?: string;
}

export namespace RejectDomainTransferFromAnotherAwsAccountResponse {
  export const filterSensitiveLog = (obj: RejectDomainTransferFromAnotherAwsAccountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.</p>
 */
export interface RenewDomainRequest {
  /**
   * <p>The name of the domain that you want to renew.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The number of years that you want to renew the domain for. The maximum number of years depends on the top-level domain.
   * 			For the range of valid values for your domain, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the
   * 			<i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>Default: 1</p>
   */
  DurationInYears?: number;

  /**
   * <p>The year when the registration for the domain is set to expire. This value must match the current expiration date for the domain.</p>
   */
  CurrentExpiryYear: number | undefined;
}

export namespace RenewDomainRequest {
  export const filterSensitiveLog = (obj: RenewDomainRequest): any => ({
    ...obj,
  });
}

export interface RenewDomainResponse {
  /**
   * <p>Identifier for tracking the progress of the request. To query the operation status, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace RenewDomainResponse {
  export const filterSensitiveLog = (obj: RenewDomainResponse): any => ({
    ...obj,
  });
}

export interface ResendContactReachabilityEmailRequest {
  /**
   * <p>The name of the domain for which you want Route 53 to resend a confirmation email to the registrant contact.</p>
   */
  domainName?: string;
}

export namespace ResendContactReachabilityEmailRequest {
  export const filterSensitiveLog = (obj: ResendContactReachabilityEmailRequest): any => ({
    ...obj,
  });
}

export interface ResendContactReachabilityEmailResponse {
  /**
   * <p>The domain name for which you requested a confirmation email.</p>
   */
  domainName?: string;

  /**
   * <p>The email address for the registrant contact at the time that we sent the verification email.</p>
   */
  emailAddress?: string;

  /**
   * <p>
   *             <code>True</code> if the email address for the registrant contact has already been verified, and <code>false</code> otherwise.
   * 			If the email address has already been verified, we don't send another confirmation email.</p>
   */
  isAlreadyVerified?: boolean;
}

export namespace ResendContactReachabilityEmailResponse {
  export const filterSensitiveLog = (obj: ResendContactReachabilityEmailResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide
 * 			this value to the new registrar.</p>
 */
export interface RetrieveDomainAuthCodeRequest {
  /**
   * <p>The name of the domain that you want to get an authorization code for.</p>
   */
  DomainName: string | undefined;
}

export namespace RetrieveDomainAuthCodeRequest {
  export const filterSensitiveLog = (obj: RetrieveDomainAuthCodeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The RetrieveDomainAuthCode response includes the following element.</p>
 */
export interface RetrieveDomainAuthCodeResponse {
  /**
   * <p>The authorization code for the domain.</p>
   */
  AuthCode: string | undefined;
}

export namespace RetrieveDomainAuthCodeResponse {
  export const filterSensitiveLog = (obj: RetrieveDomainAuthCodeResponse): any => ({
    ...obj,
    ...(obj.AuthCode && { AuthCode: SENSITIVE_STRING }),
  });
}

/**
 * <p>The TransferDomain request includes the following elements.</p>
 */
export interface TransferDomainRequest {
  /**
   * <p>The name of the domain that you want to transfer to Route 53. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports.
   * 			For a list of supported TLDs, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the
   * 			<i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>The domain name can contain only the following characters:</p>
   * 		       <ul>
   *             <li>
   *                <p>Letters a through z. Domain names are not case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Numbers 0 through 9.</p>
   *             </li>
   *             <li>
   *                <p>Hyphen (-). You can't specify a hyphen at the beginning or end of a label. </p>
   *             </li>
   *             <li>
   *                <p>Period (.) to separate the labels in the name, such as the <code>.</code> in <code>example.com</code>.</p>
   *             </li>
   *          </ul>
   */
  DomainName: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  IdnLangCode?: string;

  /**
   * <p>The number of years that you want to register the domain for. Domains are registered for a minimum of one year.
   * 			The maximum period depends on the top-level domain.</p>
   * 		       <p>Default: 1</p>
   */
  DurationInYears: number | undefined;

  /**
   * <p>Contains details for the host and glue IP addresses.</p>
   */
  Nameservers?: Nameserver[];

  /**
   * <p>The authorization code for the domain. You get this value from the current registrar.</p>
   */
  AuthCode?: string;

  /**
   * <p>Indicates whether the domain will be automatically renewed (true) or not (false). Autorenewal only takes effect
   * 			after the account is charged.</p>
   * 		       <p>Default: true</p>
   */
  AutoRenew?: boolean;

  /**
   * <p>Provides detailed contact information.</p>
   */
  AdminContact: ContactDetail | undefined;

  /**
   * <p>Provides detailed contact information.</p>
   */
  RegistrantContact: ContactDetail | undefined;

  /**
   * <p>Provides detailed contact information.</p>
   */
  TechContact: ContactDetail | undefined;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>,
   * 			WHOIS queries return the information that you entered for the admin contact.</p>
   * 		       <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectAdminContact?: boolean;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>,
   * 			WHOIS queries return the information that you entered for the registrant contact (domain owner).</p>
   * 		       <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectRegistrantContact?: boolean;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>,
   * 			WHOIS queries return the information that you entered for the technical contact.</p>
   * 		       <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectTechContact?: boolean;
}

export namespace TransferDomainRequest {
  export const filterSensitiveLog = (obj: TransferDomainRequest): any => ({
    ...obj,
    ...(obj.AuthCode && { AuthCode: SENSITIVE_STRING }),
    ...(obj.AdminContact && { AdminContact: SENSITIVE_STRING }),
    ...(obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING }),
    ...(obj.TechContact && { TechContact: SENSITIVE_STRING }),
  });
}

/**
 * <p>The TransferDomain response includes the following element.</p>
 */
export interface TransferDomainResponse {
  /**
   * <p>Identifier for tracking the progress of the request. To query the operation status, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace TransferDomainResponse {
  export const filterSensitiveLog = (obj: TransferDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The TransferDomainToAnotherAwsAccount request includes the following elements.</p>
 */
export interface TransferDomainToAnotherAwsAccountRequest {
  /**
   * <p>The name of the domain that you want to transfer from the current AWS account to another account.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The account ID of the AWS account that you want to transfer the domain to, for example, <code>111122223333</code>.</p>
   */
  AccountId: string | undefined;
}

export namespace TransferDomainToAnotherAwsAccountRequest {
  export const filterSensitiveLog = (obj: TransferDomainToAnotherAwsAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements.</p>
 */
export interface TransferDomainToAnotherAwsAccountResponse {
  /**
   * <p>Identifier for tracking the progress of the request. To query the operation status, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;

  /**
   * <p>To finish transferring a domain to another AWS account, the account that the domain is being transferred to must submit an
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>
   * 			request. The request must include the value of the <code>Password</code> element that was returned in the
   * 			<code>TransferDomainToAnotherAwsAccount</code> response.</p>
   */
  Password?: string;
}

export namespace TransferDomainToAnotherAwsAccountResponse {
  export const filterSensitiveLog = (obj: TransferDomainToAnotherAwsAccountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The UpdateDomainContact request includes the following elements.</p>
 */
export interface UpdateDomainContactRequest {
  /**
   * <p>The name of the domain that you want to update contact information for.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Provides detailed contact information.</p>
   */
  AdminContact?: ContactDetail;

  /**
   * <p>Provides detailed contact information.</p>
   */
  RegistrantContact?: ContactDetail;

  /**
   * <p>Provides detailed contact information.</p>
   */
  TechContact?: ContactDetail;
}

export namespace UpdateDomainContactRequest {
  export const filterSensitiveLog = (obj: UpdateDomainContactRequest): any => ({
    ...obj,
    ...(obj.AdminContact && { AdminContact: SENSITIVE_STRING }),
    ...(obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING }),
    ...(obj.TechContact && { TechContact: SENSITIVE_STRING }),
  });
}

/**
 * <p>The UpdateDomainContact response includes the following element.</p>
 */
export interface UpdateDomainContactResponse {
  /**
   * <p>Identifier for tracking the progress of the request. To query the operation status, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace UpdateDomainContactResponse {
  export const filterSensitiveLog = (obj: UpdateDomainContactResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The UpdateDomainContactPrivacy request includes the following elements.</p>
 */
export interface UpdateDomainContactPrivacyRequest {
  /**
   * <p>The name of the domain that you want to update the privacy setting for.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>,
   * 			WHOIS queries return the information that you entered for the admin contact.</p>
   */
  AdminPrivacy?: boolean;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>,
   * 			WHOIS queries return the information that you entered for the registrant contact (domain owner).</p>
   */
  RegistrantPrivacy?: boolean;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>,
   * 			WHOIS queries return the information that you entered for the technical contact.</p>
   */
  TechPrivacy?: boolean;
}

export namespace UpdateDomainContactPrivacyRequest {
  export const filterSensitiveLog = (obj: UpdateDomainContactPrivacyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The UpdateDomainContactPrivacy response includes the following element.</p>
 */
export interface UpdateDomainContactPrivacyResponse {
  /**
   * <p>Identifier for tracking the progress of the request. To use this ID to query the operation status, use GetOperationDetail.</p>
   */
  OperationId: string | undefined;
}

export namespace UpdateDomainContactPrivacyResponse {
  export const filterSensitiveLog = (obj: UpdateDomainContactPrivacyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Replaces the current set of name servers for the domain with the specified set of name servers.
 * 			If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p>
 * 		       <p>If successful, this operation returns an operation ID that you can use to track the progress and
 * 			completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p>
 */
export interface UpdateDomainNameserversRequest {
  /**
   * <p>The name of the domain that you want to change name servers for.</p>
   */
  DomainName: string | undefined;

  /**
   * @deprecated
   *
   * <p>The authorization key for .fi domains</p>
   */
  FIAuthKey?: string;

  /**
   * <p>A list of new name servers for the domain.</p>
   */
  Nameservers: Nameserver[] | undefined;
}

export namespace UpdateDomainNameserversRequest {
  export const filterSensitiveLog = (obj: UpdateDomainNameserversRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The UpdateDomainNameservers response includes the following element.</p>
 */
export interface UpdateDomainNameserversResponse {
  /**
   * <p>Identifier for tracking the progress of the request. To query the operation status, use
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace UpdateDomainNameserversResponse {
  export const filterSensitiveLog = (obj: UpdateDomainNameserversResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The UpdateTagsForDomainRequest includes the following elements.</p>
 */
export interface UpdateTagsForDomainRequest {
  /**
   * <p>The domain for which you want to add or update tags.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A list of the tag keys and values that you want to add or update. If you specify a key
   * 			that already exists, the corresponding value will be replaced.</p>
   */
  TagsToUpdate?: Tag[];
}

export namespace UpdateTagsForDomainRequest {
  export const filterSensitiveLog = (obj: UpdateTagsForDomainRequest): any => ({
    ...obj,
  });
}

export interface UpdateTagsForDomainResponse {}

export namespace UpdateTagsForDomainResponse {
  export const filterSensitiveLog = (obj: UpdateTagsForDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The ViewBilling request includes the following elements.</p>
 */
export interface ViewBillingRequest {
  /**
   * <p>The beginning date and time for the time period for which you want a list of billing records. Specify the date and time
   * 			in Unix time format and Coordinated Universal time (UTC).</p>
   */
  Start?: Date;

  /**
   * <p>The end date and time for the time period for which you want a list of billing records. Specify the date and time
   * 			in Unix time format and Coordinated Universal time (UTC).</p>
   */
  End?: Date;

  /**
   * <p>For an initial request for a list of billing records, omit this element. If the number of billing records
   * 			that are associated with the current AWS account during the specified period is greater than the value that
   * 			you specified for <code>MaxItems</code>, you can use <code>Marker</code> to return additional billing records.
   * 			Get the value of <code>NextPageMarker</code> from the previous response, and submit another request that includes
   * 			the value of <code>NextPageMarker</code> in the <code>Marker</code> element.
   * 		</p>
   * 		       <p>Constraints: The marker must match the value of <code>NextPageMarker</code> that was returned in the previous response.</p>
   */
  Marker?: string;

  /**
   * <p>The number of billing records to be returned.</p>
   * 		       <p>Default: 20</p>
   */
  MaxItems?: number;
}

export namespace ViewBillingRequest {
  export const filterSensitiveLog = (obj: ViewBillingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The ViewBilling response includes the following elements.</p>
 */
export interface ViewBillingResponse {
  /**
   * <p>If there are more billing records than you specified for <code>MaxItems</code> in the request, submit another
   * 			request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>.</p>
   */
  NextPageMarker?: string;

  /**
   * <p>A summary of billing records.</p>
   */
  BillingRecords?: BillingRecord[];
}

export namespace ViewBillingResponse {
  export const filterSensitiveLog = (obj: ViewBillingResponse): any => ({
    ...obj,
  });
}

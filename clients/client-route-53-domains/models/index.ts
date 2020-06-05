import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Information for one billing record.</p>
 */
export interface BillingRecord {
  __type?: "BillingRecord";
  /**
   * <p>The date that the operation was billed, in Unix format.</p>
   */
  BillDate?: Date;

  /**
   * <p>The name of the domain that the billing record applies to. If the domain name contains characters
   * 			other than a-z, 0-9, and - (hyphen), such as an internationalized domain name, then this value is in Punycode.
   * 			For more information, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a>
   * 			in the <i>Amazon Route 53 Developer Guidezzz</i>.</p>
   */
  DomainName?: string;

  /**
   * <p>The ID of the invoice that is associated with the billing record.</p>
   */
  InvoiceId?: string;

  /**
   * <p>The operation that you were charged for.</p>
   */
  Operation?: OperationType | string;

  /**
   * <p>The price that you were charged for the operation, in US dollars.</p>
   * 		       <p>Example value: 12.0</p>
   */
  Price?: number;
}

export namespace BillingRecord {
  export const filterSensitiveLog = (obj: BillingRecord): any => ({
    ...obj
  });
  export const isa = (o: any): o is BillingRecord => __isa(o, "BillingRecord");
}

/**
 * <p>The CheckDomainAvailability request contains the following elements.</p>
 */
export interface CheckDomainAvailabilityRequest {
  __type?: "CheckDomainAvailabilityRequest";
  /**
   * <p>The name of the domain that you want to get availability for.</p>
   * 		       <p>Constraints: The domain name can contain only the letters a through z, the numbers 0 through 9,
   * 			and hyphen (-). Internationalized Domain Names are not supported.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  IdnLangCode?: string;
}

export namespace CheckDomainAvailabilityRequest {
  export const filterSensitiveLog = (
    obj: CheckDomainAvailabilityRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CheckDomainAvailabilityRequest =>
    __isa(o, "CheckDomainAvailabilityRequest");
}

/**
 * <p>The CheckDomainAvailability response includes the following elements.</p>
 */
export interface CheckDomainAvailabilityResponse {
  __type?: "CheckDomainAvailabilityResponse";
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
   * 					Amazon Route 53 can return this response for a variety of reasons, for example, the registry is performing maintenance.
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
  export const filterSensitiveLog = (
    obj: CheckDomainAvailabilityResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CheckDomainAvailabilityResponse =>
    __isa(o, "CheckDomainAvailabilityResponse");
}

/**
 * <p>The CheckDomainTransferability request contains the following elements.</p>
 */
export interface CheckDomainTransferabilityRequest {
  __type?: "CheckDomainTransferabilityRequest";
  /**
   * <p>If the registrar for the top-level domain (TLD) requires an authorization code to transfer the domain,
   * 			the code that you got from the current registrar for the domain.</p>
   */
  AuthCode?: string;

  /**
   * <p>The name of the domain that you want to transfer to Amazon Route 53.</p>
   * 		       <p>Constraints: The domain name can contain only the letters a through z, the numbers 0 through 9,
   * 			and hyphen (-). Internationalized Domain Names are not supported.</p>
   */
  DomainName: string | undefined;
}

export namespace CheckDomainTransferabilityRequest {
  export const filterSensitiveLog = (
    obj: CheckDomainTransferabilityRequest
  ): any => ({
    ...obj,
    ...(obj.AuthCode && { AuthCode: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is CheckDomainTransferabilityRequest =>
    __isa(o, "CheckDomainTransferabilityRequest");
}

/**
 * <p>The CheckDomainTransferability response includes the following elements.</p>
 */
export interface CheckDomainTransferabilityResponse {
  __type?: "CheckDomainTransferabilityResponse";
  /**
   * <p>A complex type that contains information about whether the specified domain can be transferred to Amazon Route 53.</p>
   */
  Transferability: DomainTransferability | undefined;
}

export namespace CheckDomainTransferabilityResponse {
  export const filterSensitiveLog = (
    obj: CheckDomainTransferabilityResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CheckDomainTransferabilityResponse =>
    __isa(o, "CheckDomainTransferabilityResponse");
}

/**
 * <p>ContactDetail includes the following elements.</p>
 */
export interface ContactDetail {
  __type?: "ContactDetail";
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
   * <p>Indicates whether the contact is a person, company, association, or public organization.
   * 			If you choose an option other than <code>PERSON</code>, you must enter an organization name, and you can't
   * 			enable privacy protection for the contact.</p>
   */
  ContactType?: ContactType | string;

  /**
   * <p>Code for the country of the contact's address.</p>
   */
  CountryCode?: CountryCode | string;

  /**
   * <p>Email address of the contact.</p>
   */
  Email?: string;

  /**
   * <p>A list of name-value pairs for parameters required by certain top-level domains.</p>
   */
  ExtraParams?: ExtraParam[];

  /**
   * <p>Fax number of the contact.</p>
   * 		       <p>Constraints: Phone number must be specified in the format "+[country dialing code].[number including any area code]".
   * 			For example, a US phone number might appear as <code>"+1.1234567890"</code>.</p>
   */
  Fax?: string;

  /**
   * <p>First name of contact.</p>
   */
  FirstName?: string;

  /**
   * <p>Last name of contact.</p>
   */
  LastName?: string;

  /**
   * <p>Name of the organization for contact types other than <code>PERSON</code>.</p>
   */
  OrganizationName?: string;

  /**
   * <p>The phone number of the contact.</p>
   * 		       <p>Constraints: Phone number must be specified in the format "+[country	dialing code].[number including any area code>]".
   * 			For example, a US phone number might appear as <code>"+1.1234567890"</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The state or province of the contact's city.</p>
   */
  State?: string;

  /**
   * <p>The zip or postal code of the contact's address.</p>
   */
  ZipCode?: string;
}

export namespace ContactDetail {
  export const filterSensitiveLog = (obj: ContactDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContactDetail => __isa(o, "ContactDetail");
}

export type ContactType =
  | "ASSOCIATION"
  | "COMPANY"
  | "PERSON"
  | "PUBLIC_BODY"
  | "RESELLER";

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

/**
 * <p>The DeleteTagsForDomainRequest includes the following elements.</p>
 */
export interface DeleteTagsForDomainRequest {
  __type?: "DeleteTagsForDomainRequest";
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
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsForDomainRequest =>
    __isa(o, "DeleteTagsForDomainRequest");
}

export interface DeleteTagsForDomainResponse {
  __type?: "DeleteTagsForDomainResponse";
}

export namespace DeleteTagsForDomainResponse {
  export const filterSensitiveLog = (
    obj: DeleteTagsForDomainResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsForDomainResponse =>
    __isa(o, "DeleteTagsForDomainResponse");
}

export interface DisableDomainAutoRenewRequest {
  __type?: "DisableDomainAutoRenewRequest";
  /**
   * <p>The name of the domain that you want to disable automatic renewal for.</p>
   */
  DomainName: string | undefined;
}

export namespace DisableDomainAutoRenewRequest {
  export const filterSensitiveLog = (
    obj: DisableDomainAutoRenewRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableDomainAutoRenewRequest =>
    __isa(o, "DisableDomainAutoRenewRequest");
}

export interface DisableDomainAutoRenewResponse {
  __type?: "DisableDomainAutoRenewResponse";
}

export namespace DisableDomainAutoRenewResponse {
  export const filterSensitiveLog = (
    obj: DisableDomainAutoRenewResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableDomainAutoRenewResponse =>
    __isa(o, "DisableDomainAutoRenewResponse");
}

/**
 * <p>The DisableDomainTransferLock request includes the following element.</p>
 */
export interface DisableDomainTransferLockRequest {
  __type?: "DisableDomainTransferLockRequest";
  /**
   * <p>The name of the domain that you want to remove the transfer lock for.</p>
   */
  DomainName: string | undefined;
}

export namespace DisableDomainTransferLockRequest {
  export const filterSensitiveLog = (
    obj: DisableDomainTransferLockRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableDomainTransferLockRequest =>
    __isa(o, "DisableDomainTransferLockRequest");
}

/**
 * <p>The DisableDomainTransferLock response includes the following element.</p>
 */
export interface DisableDomainTransferLockResponse {
  __type?: "DisableDomainTransferLockResponse";
  /**
   * <p>Identifier for tracking the progress of the request. To use this ID to query the operation status,
   * 			use <a>GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace DisableDomainTransferLockResponse {
  export const filterSensitiveLog = (
    obj: DisableDomainTransferLockResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableDomainTransferLockResponse =>
    __isa(o, "DisableDomainTransferLockResponse");
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
 * <p>The number of domains has exceeded the allowed threshold for the account.</p>
 */
export interface DomainLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "DomainLimitExceeded";
  $fault: "client";
  /**
   * <p>The number of domains has exceeded the allowed threshold for the account.</p>
   */
  message?: string;
}

export namespace DomainLimitExceeded {
  export const filterSensitiveLog = (obj: DomainLimitExceeded): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainLimitExceeded =>
    __isa(o, "DomainLimitExceeded");
}

/**
 * <p>Information about one suggested domain name.</p>
 */
export interface DomainSuggestion {
  __type?: "DomainSuggestion";
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
   * 					Amazon Route 53 can return this response for a variety of reasons, for example, the registry is performing maintenance.
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

  /**
   * <p>A suggested domain name.</p>
   */
  DomainName?: string;
}

export namespace DomainSuggestion {
  export const filterSensitiveLog = (obj: DomainSuggestion): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainSuggestion =>
    __isa(o, "DomainSuggestion");
}

/**
 * <p>Summary information about one domain.</p>
 */
export interface DomainSummary {
  __type?: "DomainSummary";
  /**
   * <p>Indicates whether the domain is automatically renewed upon expiration.</p>
   */
  AutoRenew?: boolean;

  /**
   * <p>The name of the domain that the summary information applies to.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Expiration date of the domain in Coordinated Universal Time (UTC).</p>
   */
  Expiry?: Date;

  /**
   * <p>Indicates whether a domain is locked from unauthorized transfer to another party.</p>
   */
  TransferLock?: boolean;
}

export namespace DomainSummary {
  export const filterSensitiveLog = (obj: DomainSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainSummary => __isa(o, "DomainSummary");
}

/**
 * <p>A complex type that contains information about whether the specified domain can be transferred to Amazon Route 53.</p>
 */
export interface DomainTransferability {
  __type?: "DomainTransferability";
  /**
   * <p>Whether the domain name can be transferred to Amazon Route 53.</p>
   * 		       <note>
   *             <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> for <code>Transferable</code>.</p>
   *          </note>
   *
   * 		       <p>Valid values:</p>
   * 		       <dl>
   *             <dt>TRANSFERABLE</dt>
   *             <dd>
   *                <p>The domain name can be transferred to Amazon Route 53.</p>
   *             </dd>
   *             <dt>UNTRANSFERRABLE</dt>
   *             <dd>
   *                <p>The domain name can't be transferred to Amazon Route 53.</p>
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
    ...obj
  });
  export const isa = (o: any): o is DomainTransferability =>
    __isa(o, "DomainTransferability");
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
    ...obj
  });
  export const isa = (o: any): o is DuplicateRequest =>
    __isa(o, "DuplicateRequest");
}

export interface EnableDomainAutoRenewRequest {
  __type?: "EnableDomainAutoRenewRequest";
  /**
   * <p>The name of the domain that you want to enable automatic renewal for.</p>
   */
  DomainName: string | undefined;
}

export namespace EnableDomainAutoRenewRequest {
  export const filterSensitiveLog = (
    obj: EnableDomainAutoRenewRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableDomainAutoRenewRequest =>
    __isa(o, "EnableDomainAutoRenewRequest");
}

export interface EnableDomainAutoRenewResponse {
  __type?: "EnableDomainAutoRenewResponse";
}

export namespace EnableDomainAutoRenewResponse {
  export const filterSensitiveLog = (
    obj: EnableDomainAutoRenewResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableDomainAutoRenewResponse =>
    __isa(o, "EnableDomainAutoRenewResponse");
}

/**
 * <p>A request to set the transfer lock for the specified domain.</p>
 */
export interface EnableDomainTransferLockRequest {
  __type?: "EnableDomainTransferLockRequest";
  /**
   * <p>The name of the domain that you want to set the transfer lock for.</p>
   */
  DomainName: string | undefined;
}

export namespace EnableDomainTransferLockRequest {
  export const filterSensitiveLog = (
    obj: EnableDomainTransferLockRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableDomainTransferLockRequest =>
    __isa(o, "EnableDomainTransferLockRequest");
}

/**
 * <p>The EnableDomainTransferLock response includes the following elements.</p>
 */
export interface EnableDomainTransferLockResponse {
  __type?: "EnableDomainTransferLockResponse";
  /**
   * <p>Identifier for tracking the progress of the request. To use this ID to query the operation status, use GetOperationDetail.</p>
   */
  OperationId: string | undefined;
}

export namespace EnableDomainTransferLockResponse {
  export const filterSensitiveLog = (
    obj: EnableDomainTransferLockResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableDomainTransferLockResponse =>
    __isa(o, "EnableDomainTransferLockResponse");
}

/**
 * <p>ExtraParam includes the following elements.</p>
 */
export interface ExtraParam {
  __type?: "ExtraParam";
  /**
   * <p>Name of the additional parameter required by the top-level domain. Here are the top-level domains that require
   * 			additional parameters and which parameters they require:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>.com.au and .net.au:</b>
   *                   <code>AU_ID_NUMBER</code> and <code>AU_ID_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>.ca:</b>
   *                   <code>BRAND_NUMBER</code>, <code>CA_LEGAL_TYPE</code>, and
   * 				<code>CA_BUSINESS_ENTITY_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>.es:</b>
   *                   <code>ES_IDENTIFICATION</code>, <code>ES_IDENTIFICATION_TYPE</code>, and
   * 				<code>ES_LEGAL_FORM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>.fi:</b>
   *                   <code>BIRTH_DATE_IN_YYYY_MM_DD</code>, <code>FI_BUSINESS_NUMBER</code>,
   * 				<code>FI_ID_NUMBER</code>, <code>FI_NATIONALITY</code>, and <code>FI_ORGANIZATION_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>.fr:</b>
   *                   <code>BRAND_NUMBER</code>, <code>BIRTH_DEPARTMENT</code>,
   * 				<code>BIRTH_DATE_IN_YYYY_MM_DD</code>, <code>BIRTH_COUNTRY</code>, and <code>BIRTH_CITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>.it:</b>
   *                   <code>BIRTH_COUNTRY</code>, <code>IT_PIN</code>, and
   * 				<code>IT_REGISTRANT_ENTITY_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>.ru:</b>
   *                   <code>BIRTH_DATE_IN_YYYY_MM_DD</code> and
   * 				<code>RU_PASSPORT_DATA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>.se:</b>
   *                   <code>BIRTH_COUNTRY</code> and <code>SE_ID_NUMBER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>.sg:</b>
   *                   <code>SG_ID_NUMBER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>.co.uk, .me.uk, and .org.uk:</b>
   *                   <code>UK_CONTACT_TYPE</code> and
   * 				<code>UK_COMPANY_NUMBER</code>
   *                </p>
   *             </li>
   *          </ul>
   * 		       <p>In addition, many TLDs require <code>VAT_NUMBER</code>.</p>
   */
  Name: ExtraParamName | string | undefined;

  /**
   * <p>Values corresponding to the additional parameter names required by some top-level domains.</p>
   */
  Value: string | undefined;
}

export namespace ExtraParam {
  export const filterSensitiveLog = (obj: ExtraParam): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExtraParam => __isa(o, "ExtraParam");
}

export enum ExtraParamName {
  AU_ID_NUMBER = "AU_ID_NUMBER",
  AU_ID_TYPE = "AU_ID_TYPE",
  BIRTH_CITY = "BIRTH_CITY",
  BIRTH_COUNTRY = "BIRTH_COUNTRY",
  BIRTH_DATE_IN_YYYY_MM_DD = "BIRTH_DATE_IN_YYYY_MM_DD",
  BIRTH_DEPARTMENT = "BIRTH_DEPARTMENT",
  BRAND_NUMBER = "BRAND_NUMBER",
  CA_BUSINESS_ENTITY_TYPE = "CA_BUSINESS_ENTITY_TYPE",
  CA_LEGAL_TYPE = "CA_LEGAL_TYPE",
  DOCUMENT_NUMBER = "DOCUMENT_NUMBER",
  DUNS_NUMBER = "DUNS_NUMBER",
  ES_IDENTIFICATION = "ES_IDENTIFICATION",
  ES_IDENTIFICATION_TYPE = "ES_IDENTIFICATION_TYPE",
  ES_LEGAL_FORM = "ES_LEGAL_FORM",
  FI_BUSINESS_NUMBER = "FI_BUSINESS_NUMBER",
  FI_NATIONALITY = "FI_NATIONALITY",
  FI_ORGANIZATION_TYPE = "FI_ORGANIZATION_TYPE",
  IT_PIN = "IT_PIN",
  IT_REGISTRANT_ENTITY_TYPE = "IT_REGISTRANT_ENTITY_TYPE",
  ONWER_FI_ID_NUMBER = "FI_ID_NUMBER",
  RU_PASSPORT_DATA = "RU_PASSPORT_DATA",
  SE_ID_NUMBER = "SE_ID_NUMBER",
  SG_ID_NUMBER = "SG_ID_NUMBER",
  UK_COMPANY_NUMBER = "UK_COMPANY_NUMBER",
  UK_CONTACT_TYPE = "UK_CONTACT_TYPE",
  VAT_NUMBER = "VAT_NUMBER"
}

export interface GetContactReachabilityStatusRequest {
  __type?: "GetContactReachabilityStatusRequest";
  /**
   * <p>The name of the domain for which you want to know whether the registrant contact has confirmed that the email address is valid.</p>
   */
  domainName?: string;
}

export namespace GetContactReachabilityStatusRequest {
  export const filterSensitiveLog = (
    obj: GetContactReachabilityStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetContactReachabilityStatusRequest =>
    __isa(o, "GetContactReachabilityStatusRequest");
}

export interface GetContactReachabilityStatusResponse {
  __type?: "GetContactReachabilityStatusResponse";
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
  export const filterSensitiveLog = (
    obj: GetContactReachabilityStatusResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetContactReachabilityStatusResponse =>
    __isa(o, "GetContactReachabilityStatusResponse");
}

/**
 * <p>The GetDomainDetail request includes the following element.</p>
 */
export interface GetDomainDetailRequest {
  __type?: "GetDomainDetailRequest";
  /**
   * <p>The name of the domain that you want to get detailed information about.</p>
   */
  DomainName: string | undefined;
}

export namespace GetDomainDetailRequest {
  export const filterSensitiveLog = (obj: GetDomainDetailRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDomainDetailRequest =>
    __isa(o, "GetDomainDetailRequest");
}

/**
 * <p>The GetDomainDetail response includes the following elements.</p>
 */
export interface GetDomainDetailResponse {
  __type?: "GetDomainDetailResponse";
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
   * <p>Provides details about the domain administrative contact.</p>
   */
  AdminContact: ContactDetail | undefined;

  /**
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>,
   * 			WHOIS queries return the information that you entered for the admin contact.</p>
   */
  AdminPrivacy?: boolean;

  /**
   * <p>Specifies whether the domain registration is set to renew automatically.</p>
   */
  AutoRenew?: boolean;

  /**
   * <p>The date when the domain was created as found in the response to a WHOIS query. The date and time is in
   * 			Coordinated Universal time (UTC).</p>
   */
  CreationDate?: Date;

  /**
   * <p>Reserved for future use.</p>
   */
  DnsSec?: string;

  /**
   * <p>The name of a domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The date when the registration for the domain is set to expire. The date and time is in
   * 			Coordinated Universal time (UTC).</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>The name of the domain.</p>
   */
  Nameservers: Nameserver[] | undefined;

  /**
   * <p>Provides details about the domain registrant.</p>
   */
  RegistrantContact: ContactDetail | undefined;

  /**
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>,
   * 			WHOIS queries return the information that you entered for the registrant contact (domain owner).</p>
   */
  RegistrantPrivacy?: boolean;

  /**
   * <p>Name of the registrar of the domain as identified in the registry. Domains with a .com, .net, or .org TLD are registered by
   * 			Amazon Registrar. All other domains are registered by our registrar associate, Gandi. The value for domains that are registered by
   * 			Gandi is <code>"GANDI SAS"</code>. </p>
   */
  RegistrarName?: string;

  /**
   * <p>Web address of the registrar.</p>
   */
  RegistrarUrl?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  RegistryDomainId?: string;

  /**
   * <p>Reseller of the domain. Domains registered or transferred using Amazon Route 53 domains will have <code>"Amazon"</code> as the reseller. </p>
   */
  Reseller?: string;

  /**
   * <p>An array of domain name status codes, also known as Extensible Provisioning Protocol (EPP) status codes.</p>
   * 		       <p>ICANN, the organization that maintains a central database of domain names, has developed a set of domain name
   * 			status codes that tell you the status of a variety of operations on a domain name, for example, registering a domain name,
   * 			transferring a domain name to another registrar, renewing the registration for a domain name, and so on. All registrars
   * 			use this same set of status codes.</p>
   * 		       <p>For a current list of domain name status codes and an explanation of what each code means, go to the
   * 	<a href="https://www.icann.org/">ICANN website</a> and search for <code>epp status codes</code>.
   * 	(Search on the ICANN website; web searches sometimes return an old version of the document.)</p>
   */
  StatusList?: string[];

  /**
   * <p>Provides details about the domain technical contact.</p>
   */
  TechContact: ContactDetail | undefined;

  /**
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>,
   * 			WHOIS queries return the information that you entered for the technical contact.</p>
   */
  TechPrivacy?: boolean;

  /**
   * <p>The last updated date of the domain as found in the response to a WHOIS query. The date and time is in
   * 			Coordinated Universal time (UTC).</p>
   */
  UpdatedDate?: Date;

  /**
   * <p>The fully qualified name of the WHOIS server that can answer the WHOIS query for the domain.</p>
   */
  WhoIsServer?: string;
}

export namespace GetDomainDetailResponse {
  export const filterSensitiveLog = (obj: GetDomainDetailResponse): any => ({
    ...obj,
    ...(obj.AdminContact && { AdminContact: SENSITIVE_STRING }),
    ...(obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING }),
    ...(obj.TechContact && { TechContact: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is GetDomainDetailResponse =>
    __isa(o, "GetDomainDetailResponse");
}

export interface GetDomainSuggestionsRequest {
  __type?: "GetDomainSuggestionsRequest";
  /**
   * <p>A domain name that you want to use as the basis for a list of possible domain names. The domain name must contain
   * 			a top-level domain (TLD), such as .com, that Amazon Route 53 supports. For a list of TLDs, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the
   * 			<i>Amazon Route 53 Developer Guide</i>.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>If <code>OnlyAvailable</code> is <code>true</code>, Amazon Route 53 returns only domain names that are available.
   * 			If <code>OnlyAvailable</code> is <code>false</code>, Amazon Route 53 returns domain names without checking whether they're
   * 			available to be registered. To determine whether the domain is available, you can call <code>checkDomainAvailability</code>
   * 			for each suggestion.</p>
   */
  OnlyAvailable: boolean | undefined;

  /**
   * <p>The number of suggested domain names that you want Amazon Route 53 to return.</p>
   */
  SuggestionCount: number | undefined;
}

export namespace GetDomainSuggestionsRequest {
  export const filterSensitiveLog = (
    obj: GetDomainSuggestionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDomainSuggestionsRequest =>
    __isa(o, "GetDomainSuggestionsRequest");
}

export interface GetDomainSuggestionsResponse {
  __type?: "GetDomainSuggestionsResponse";
  /**
   * <p>A list of possible domain names. If you specified <code>true</code> for <code>OnlyAvailable</code> in the request,
   * 			the list contains only domains that are available for registration.</p>
   */
  SuggestionsList?: DomainSuggestion[];
}

export namespace GetDomainSuggestionsResponse {
  export const filterSensitiveLog = (
    obj: GetDomainSuggestionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDomainSuggestionsResponse =>
    __isa(o, "GetDomainSuggestionsResponse");
}

/**
 * <p>The <a>GetOperationDetail</a> request includes the following element.</p>
 */
export interface GetOperationDetailRequest {
  __type?: "GetOperationDetailRequest";
  /**
   * <p>The identifier for the operation for which you want to get the status. Amazon Route 53 returned the identifier
   * 			in the response to the original request.</p>
   */
  OperationId: string | undefined;
}

export namespace GetOperationDetailRequest {
  export const filterSensitiveLog = (obj: GetOperationDetailRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOperationDetailRequest =>
    __isa(o, "GetOperationDetailRequest");
}

/**
 * <p>The GetOperationDetail response includes the following elements.</p>
 */
export interface GetOperationDetailResponse {
  __type?: "GetOperationDetailResponse";
  /**
   * <p>The name of a domain.</p>
   */
  DomainName?: string;

  /**
   * <p>Detailed information on the status including possible errors.</p>
   */
  Message?: string;

  /**
   * <p>The identifier for the operation.</p>
   */
  OperationId?: string;

  /**
   * <p>The current status of the requested operation in the system.</p>
   */
  Status?: OperationStatus | string;

  /**
   * <p>The date when the request was submitted.</p>
   */
  SubmittedDate?: Date;

  /**
   * <p>The type of operation that was requested.</p>
   */
  Type?: OperationType | string;
}

export namespace GetOperationDetailResponse {
  export const filterSensitiveLog = (obj: GetOperationDetailResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOperationDetailResponse =>
    __isa(o, "GetOperationDetailResponse");
}

/**
 * <p>The requested item is not acceptable. For example, for an OperationId it might refer to the ID of an operation
 * 			that is already completed. For a domain name, it might not be a valid domain name or belong to the requester account.</p>
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
    ...obj
  });
  export const isa = (o: any): o is InvalidInput => __isa(o, "InvalidInput");
}

/**
 * <p>The ListDomains request includes the following elements.</p>
 */
export interface ListDomainsRequest {
  __type?: "ListDomainsRequest";
  /**
   * <p>For an initial request for a list of domains, omit this element. If the number of domains
   * 			that are associated with the current AWS account is greater than the value that you specified for
   * 			<code>MaxItems</code>, you can use <code>Marker</code> to return additional domains. Get the value of
   * 			<code>NextPageMarker</code> from the previous response, and submit another request that includes the
   * 			value of <code>NextPageMarker</code> in the <code>Marker</code> element.</p>
   * 			      <p>Constraints: The marker must match the value specified in the previous request.</p>
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
    ...obj
  });
  export const isa = (o: any): o is ListDomainsRequest =>
    __isa(o, "ListDomainsRequest");
}

/**
 * <p>The ListDomains response includes the following elements.</p>
 */
export interface ListDomainsResponse {
  __type?: "ListDomainsResponse";
  /**
   * <p>A summary of domains.</p>
   */
  Domains: DomainSummary[] | undefined;

  /**
   * <p>If there are more domains than you specified for <code>MaxItems</code> in the request, submit another
   * 	request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>.</p>
   */
  NextPageMarker?: string;
}

export namespace ListDomainsResponse {
  export const filterSensitiveLog = (obj: ListDomainsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDomainsResponse =>
    __isa(o, "ListDomainsResponse");
}

/**
 * <p>The ListOperations request includes the following elements.</p>
 */
export interface ListOperationsRequest {
  __type?: "ListOperationsRequest";
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

  /**
   * <p>An optional parameter that lets you get information about all the operations that you submitted after a specified date and time.
   * 			Specify the date and time in Coordinated Universal time (UTC).</p>
   */
  SubmittedSince?: Date;
}

export namespace ListOperationsRequest {
  export const filterSensitiveLog = (obj: ListOperationsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOperationsRequest =>
    __isa(o, "ListOperationsRequest");
}

/**
 * <p>The ListOperations response includes the following elements.</p>
 */
export interface ListOperationsResponse {
  __type?: "ListOperationsResponse";
  /**
   * <p>If there are more operations than you specified for <code>MaxItems</code> in the request, submit another
   * 	request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>.</p>
   */
  NextPageMarker?: string;

  /**
   * <p>Lists summaries of the operations.</p>
   */
  Operations: OperationSummary[] | undefined;
}

export namespace ListOperationsResponse {
  export const filterSensitiveLog = (obj: ListOperationsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOperationsResponse =>
    __isa(o, "ListOperationsResponse");
}

/**
 * <p>The ListTagsForDomainRequest includes the following elements.</p>
 */
export interface ListTagsForDomainRequest {
  __type?: "ListTagsForDomainRequest";
  /**
   * <p>The domain for which you want to get a list of tags.</p>
   */
  DomainName: string | undefined;
}

export namespace ListTagsForDomainRequest {
  export const filterSensitiveLog = (obj: ListTagsForDomainRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForDomainRequest =>
    __isa(o, "ListTagsForDomainRequest");
}

/**
 * <p>The ListTagsForDomain response includes the following elements.</p>
 */
export interface ListTagsForDomainResponse {
  __type?: "ListTagsForDomainResponse";
  /**
   * <p>A list of the tags that are associated with the specified domain.</p>
   */
  TagList: Tag[] | undefined;
}

export namespace ListTagsForDomainResponse {
  export const filterSensitiveLog = (obj: ListTagsForDomainResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForDomainResponse =>
    __isa(o, "ListTagsForDomainResponse");
}

/**
 * <p>Nameserver includes the following elements.</p>
 */
export interface Nameserver {
  __type?: "Nameserver";
  /**
   * <p>Glue IP address of a name server entry. Glue IP addresses are required only when the name of the name server is a subdomain of the domain. For example, if your domain is example.com and the name server for the domain is ns.example.com, you need to specify the IP address for ns.example.com.</p>
   * 		       <p>Constraints: The list can contain only one IPv4 and one IPv6 address.</p>
   */
  GlueIps?: string[];

  /**
   * <p>The fully qualified host name of the name server.</p>
   * 		       <p>Constraint: Maximum 255 characters</p>
   */
  Name: string | undefined;
}

export namespace Nameserver {
  export const filterSensitiveLog = (obj: Nameserver): any => ({
    ...obj
  });
  export const isa = (o: any): o is Nameserver => __isa(o, "Nameserver");
}

/**
 * <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
 */
export interface OperationLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationLimitExceeded";
  $fault: "client";
  /**
   * <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   */
  message?: string;
}

export namespace OperationLimitExceeded {
  export const filterSensitiveLog = (obj: OperationLimitExceeded): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationLimitExceeded =>
    __isa(o, "OperationLimitExceeded");
}

export type OperationStatus =
  | "ERROR"
  | "FAILED"
  | "IN_PROGRESS"
  | "SUBMITTED"
  | "SUCCESSFUL";

/**
 * <p>OperationSummary includes the following elements.</p>
 */
export interface OperationSummary {
  __type?: "OperationSummary";
  /**
   * <p>Identifier returned to track the requested action.</p>
   */
  OperationId: string | undefined;

  /**
   * <p>The current status of the requested operation in the system.</p>
   */
  Status: OperationStatus | string | undefined;

  /**
   * <p>The date when the request was submitted.</p>
   */
  SubmittedDate: Date | undefined;

  /**
   * <p>Type of the action requested.</p>
   */
  Type: OperationType | string | undefined;
}

export namespace OperationSummary {
  export const filterSensitiveLog = (obj: OperationSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationSummary =>
    __isa(o, "OperationSummary");
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
  PUSH_DOMAIN = "PUSH_DOMAIN",
  REGISTER_DOMAIN = "REGISTER_DOMAIN",
  REMOVE_DNSSEC = "REMOVE_DNSSEC",
  RENEW_DOMAIN = "RENEW_DOMAIN",
  TRANSFER_IN_DOMAIN = "TRANSFER_IN_DOMAIN",
  TRANSFER_OUT_DOMAIN = "TRANSFER_OUT_DOMAIN",
  UPDATE_DOMAIN_CONTACT = "UPDATE_DOMAIN_CONTACT",
  UPDATE_NAMESERVER = "UPDATE_NAMESERVER"
}

export enum ReachabilityStatus {
  DONE = "DONE",
  EXPIRED = "EXPIRED",
  PENDING = "PENDING"
}

/**
 * <p>The RegisterDomain request includes the following elements.</p>
 */
export interface RegisterDomainRequest {
  __type?: "RegisterDomainRequest";
  /**
   * <p>Provides detailed contact information.</p>
   */
  AdminContact: ContactDetail | undefined;

  /**
   * <p>Indicates whether the domain will be automatically renewed (<code>true</code>) or not (<code>false</code>).
   * 			Autorenewal only takes effect after the account is charged.</p>
   * 		       <p>Default: <code>true</code>
   *          </p>
   */
  AutoRenew?: boolean;

  /**
   * <p>The domain name that you want to register.</p>
   * 		       <p>Constraints: The domain name can contain only the letters a through z, the numbers 0 through 9,
   * 			and hyphen (-). Internationalized Domain Names are not supported.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The number of years that you want to register the domain for. Domains are registered for a minimum of one year.
   * 			The maximum period depends on the top-level domain. For the range of valid values for your domain, see
   * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the
   * 			<i>Amazon Route 53 Developer Guide</i>.</p>
   * 		       <p>Default: 1</p>
   */
  DurationInYears: number | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  IdnLangCode?: string;

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

  /**
   * <p>Provides detailed contact information.</p>
   */
  RegistrantContact: ContactDetail | undefined;

  /**
   * <p>Provides detailed contact information.</p>
   */
  TechContact: ContactDetail | undefined;
}

export namespace RegisterDomainRequest {
  export const filterSensitiveLog = (obj: RegisterDomainRequest): any => ({
    ...obj,
    ...(obj.AdminContact && { AdminContact: SENSITIVE_STRING }),
    ...(obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING }),
    ...(obj.TechContact && { TechContact: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is RegisterDomainRequest =>
    __isa(o, "RegisterDomainRequest");
}

/**
 * <p>The RegisterDomain response includes the following element.</p>
 */
export interface RegisterDomainResponse {
  __type?: "RegisterDomainResponse";
  /**
   * <p>Identifier for tracking the progress of the request. To use this ID to query the operation status,
   * 			use <a>GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace RegisterDomainResponse {
  export const filterSensitiveLog = (obj: RegisterDomainResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterDomainResponse =>
    __isa(o, "RegisterDomainResponse");
}

/**
 * <p>A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year.</p>
 */
export interface RenewDomainRequest {
  __type?: "RenewDomainRequest";
  /**
   * <p>The year when the registration for the domain is set to expire. This value must match the current expiration date for the domain.</p>
   */
  CurrentExpiryYear: number | undefined;

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
}

export namespace RenewDomainRequest {
  export const filterSensitiveLog = (obj: RenewDomainRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RenewDomainRequest =>
    __isa(o, "RenewDomainRequest");
}

export interface RenewDomainResponse {
  __type?: "RenewDomainResponse";
  /**
   * <p>The identifier for tracking the progress of the request. To use this ID to query the operation status,
   * 			use <a>GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace RenewDomainResponse {
  export const filterSensitiveLog = (obj: RenewDomainResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RenewDomainResponse =>
    __isa(o, "RenewDomainResponse");
}

export interface ResendContactReachabilityEmailRequest {
  __type?: "ResendContactReachabilityEmailRequest";
  /**
   * <p>The name of the domain for which you want Amazon Route 53 to resend a confirmation email to the registrant contact.</p>
   */
  domainName?: string;
}

export namespace ResendContactReachabilityEmailRequest {
  export const filterSensitiveLog = (
    obj: ResendContactReachabilityEmailRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResendContactReachabilityEmailRequest =>
    __isa(o, "ResendContactReachabilityEmailRequest");
}

export interface ResendContactReachabilityEmailResponse {
  __type?: "ResendContactReachabilityEmailResponse";
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
  export const filterSensitiveLog = (
    obj: ResendContactReachabilityEmailResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResendContactReachabilityEmailResponse =>
    __isa(o, "ResendContactReachabilityEmailResponse");
}

/**
 * <p>A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide
 * 			this value to the new registrar.</p>
 */
export interface RetrieveDomainAuthCodeRequest {
  __type?: "RetrieveDomainAuthCodeRequest";
  /**
   * <p>The name of the domain that you want to get an authorization code for.</p>
   */
  DomainName: string | undefined;
}

export namespace RetrieveDomainAuthCodeRequest {
  export const filterSensitiveLog = (
    obj: RetrieveDomainAuthCodeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RetrieveDomainAuthCodeRequest =>
    __isa(o, "RetrieveDomainAuthCodeRequest");
}

/**
 * <p>The RetrieveDomainAuthCode response includes the following element.</p>
 */
export interface RetrieveDomainAuthCodeResponse {
  __type?: "RetrieveDomainAuthCodeResponse";
  /**
   * <p>The authorization code for the domain.</p>
   */
  AuthCode: string | undefined;
}

export namespace RetrieveDomainAuthCodeResponse {
  export const filterSensitiveLog = (
    obj: RetrieveDomainAuthCodeResponse
  ): any => ({
    ...obj,
    ...(obj.AuthCode && { AuthCode: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is RetrieveDomainAuthCodeResponse =>
    __isa(o, "RetrieveDomainAuthCodeResponse");
}

/**
 * <p>Each tag includes the following elements.</p>
 */
export interface Tag {
  __type?: "Tag";
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
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
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
    ...obj
  });
  export const isa = (o: any): o is TLDRulesViolation =>
    __isa(o, "TLDRulesViolation");
}

export enum Transferable {
  DONT_KNOW = "DONT_KNOW",
  TRANSFERABLE = "TRANSFERABLE",
  UNTRANSFERABLE = "UNTRANSFERABLE"
}

/**
 * <p>The TransferDomain request includes the following elements.</p>
 */
export interface TransferDomainRequest {
  __type?: "TransferDomainRequest";
  /**
   * <p>Provides detailed contact information.</p>
   */
  AdminContact: ContactDetail | undefined;

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
   * <p>The name of the domain that you want to transfer to Amazon Route 53.</p>
   * 		       <p>Constraints: The domain name can contain only the letters a through z, the numbers 0 through 9,
   * 			and hyphen (-). Internationalized Domain Names are not supported.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The number of years that you want to register the domain for. Domains are registered for a minimum of one year.
   * 			The maximum period depends on the top-level domain.</p>
   * 		       <p>Default: 1</p>
   */
  DurationInYears: number | undefined;

  /**
   * <p>Reserved for future use.</p>
   */
  IdnLangCode?: string;

  /**
   * <p>Contains details for the host and glue IP addresses.</p>
   */
  Nameservers?: Nameserver[];

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

  /**
   * <p>Provides detailed contact information.</p>
   */
  RegistrantContact: ContactDetail | undefined;

  /**
   * <p>Provides detailed contact information.</p>
   */
  TechContact: ContactDetail | undefined;
}

export namespace TransferDomainRequest {
  export const filterSensitiveLog = (obj: TransferDomainRequest): any => ({
    ...obj,
    ...(obj.AdminContact && { AdminContact: SENSITIVE_STRING }),
    ...(obj.AuthCode && { AuthCode: SENSITIVE_STRING }),
    ...(obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING }),
    ...(obj.TechContact && { TechContact: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is TransferDomainRequest =>
    __isa(o, "TransferDomainRequest");
}

/**
 * <p>The TranserDomain response includes the following element.</p>
 */
export interface TransferDomainResponse {
  __type?: "TransferDomainResponse";
  /**
   * <p>Identifier for tracking the progress of the request. To use this ID to query the operation status,
   * 			use <a>GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace TransferDomainResponse {
  export const filterSensitiveLog = (obj: TransferDomainResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransferDomainResponse =>
    __isa(o, "TransferDomainResponse");
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
    ...obj
  });
  export const isa = (o: any): o is UnsupportedTLD =>
    __isa(o, "UnsupportedTLD");
}

/**
 * <p>The UpdateDomainContactPrivacy request includes the following elements.</p>
 */
export interface UpdateDomainContactPrivacyRequest {
  __type?: "UpdateDomainContactPrivacyRequest";
  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>,
   * 			WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains)
   * 			or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>,
   * 			WHOIS queries return the information that you entered for the admin contact.</p>
   */
  AdminPrivacy?: boolean;

  /**
   * <p>The name of the domain that you want to update the privacy setting for.</p>
   */
  DomainName: string | undefined;

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
  export const filterSensitiveLog = (
    obj: UpdateDomainContactPrivacyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainContactPrivacyRequest =>
    __isa(o, "UpdateDomainContactPrivacyRequest");
}

/**
 * <p>The UpdateDomainContactPrivacy response includes the following element.</p>
 */
export interface UpdateDomainContactPrivacyResponse {
  __type?: "UpdateDomainContactPrivacyResponse";
  /**
   * <p>Identifier for tracking the progress of the request. To use this ID to query the operation status, use GetOperationDetail.</p>
   */
  OperationId: string | undefined;
}

export namespace UpdateDomainContactPrivacyResponse {
  export const filterSensitiveLog = (
    obj: UpdateDomainContactPrivacyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainContactPrivacyResponse =>
    __isa(o, "UpdateDomainContactPrivacyResponse");
}

/**
 * <p>The UpdateDomainContact request includes the following elements.</p>
 */
export interface UpdateDomainContactRequest {
  __type?: "UpdateDomainContactRequest";
  /**
   * <p>Provides detailed contact information.</p>
   */
  AdminContact?: ContactDetail;

  /**
   * <p>The name of the domain that you want to update contact information for.</p>
   */
  DomainName: string | undefined;

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
    ...(obj.TechContact && { TechContact: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is UpdateDomainContactRequest =>
    __isa(o, "UpdateDomainContactRequest");
}

/**
 * <p>The UpdateDomainContact response includes the following element.</p>
 */
export interface UpdateDomainContactResponse {
  __type?: "UpdateDomainContactResponse";
  /**
   * <p>Identifier for tracking the progress of the request. To use this ID to query the operation status,
   * 			use <a>GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace UpdateDomainContactResponse {
  export const filterSensitiveLog = (
    obj: UpdateDomainContactResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainContactResponse =>
    __isa(o, "UpdateDomainContactResponse");
}

/**
 * <p>Replaces the current set of name servers for the domain with the specified set of name servers.
 * 			If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p>
 * 		       <p>If successful, this operation returns an operation ID that you can use to track the progress and
 * 			completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p>
 */
export interface UpdateDomainNameserversRequest {
  __type?: "UpdateDomainNameserversRequest";
  /**
   * <p>The name of the domain that you want to change name servers for.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The authorization key for .fi domains</p>
   */
  FIAuthKey?: string;

  /**
   * <p>A list of new name servers for the domain.</p>
   */
  Nameservers: Nameserver[] | undefined;
}

export namespace UpdateDomainNameserversRequest {
  export const filterSensitiveLog = (
    obj: UpdateDomainNameserversRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainNameserversRequest =>
    __isa(o, "UpdateDomainNameserversRequest");
}

/**
 * <p>The UpdateDomainNameservers response includes the following element.</p>
 */
export interface UpdateDomainNameserversResponse {
  __type?: "UpdateDomainNameserversResponse";
  /**
   * <p>Identifier for tracking the progress of the request. To use this ID to query the operation status,
   * 			use <a>GetOperationDetail</a>.</p>
   */
  OperationId: string | undefined;
}

export namespace UpdateDomainNameserversResponse {
  export const filterSensitiveLog = (
    obj: UpdateDomainNameserversResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainNameserversResponse =>
    __isa(o, "UpdateDomainNameserversResponse");
}

/**
 * <p>The UpdateTagsForDomainRequest includes the following elements.</p>
 */
export interface UpdateTagsForDomainRequest {
  __type?: "UpdateTagsForDomainRequest";
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
    ...obj
  });
  export const isa = (o: any): o is UpdateTagsForDomainRequest =>
    __isa(o, "UpdateTagsForDomainRequest");
}

export interface UpdateTagsForDomainResponse {
  __type?: "UpdateTagsForDomainResponse";
}

export namespace UpdateTagsForDomainResponse {
  export const filterSensitiveLog = (
    obj: UpdateTagsForDomainResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTagsForDomainResponse =>
    __isa(o, "UpdateTagsForDomainResponse");
}

/**
 * <p>The ViewBilling request includes the following elements.</p>
 */
export interface ViewBillingRequest {
  __type?: "ViewBillingRequest";
  /**
   * <p>The end date and time for the time period for which you want a list of billing records. Specify the date and time
   * 			in Coordinated Universal time (UTC).</p>
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

  /**
   * <p>The beginning date and time for the time period for which you want a list of billing records. Specify the date and time
   * 			in Coordinated Universal time (UTC).</p>
   */
  Start?: Date;
}

export namespace ViewBillingRequest {
  export const filterSensitiveLog = (obj: ViewBillingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ViewBillingRequest =>
    __isa(o, "ViewBillingRequest");
}

/**
 * <p>The ViewBilling response includes the following elements.</p>
 */
export interface ViewBillingResponse {
  __type?: "ViewBillingResponse";
  /**
   * <p>A summary of billing records.</p>
   */
  BillingRecords?: BillingRecord[];

  /**
   * <p>If there are more billing records than you specified for <code>MaxItems</code> in the request, submit another
   * 	request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>.</p>
   */
  NextPageMarker?: string;
}

export namespace ViewBillingResponse {
  export const filterSensitiveLog = (obj: ViewBillingResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ViewBillingResponse =>
    __isa(o, "ViewBillingResponse");
}

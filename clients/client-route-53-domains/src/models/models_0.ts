// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { Route53DomainsServiceException as __BaseException } from "./Route53DomainsServiceException";

/**
 * @public
 * <p>The AcceptDomainTransferFromAnotherAwsAccount request includes the following
 * 			elements.</p>
 */
export interface AcceptDomainTransferFromAnotherAwsAccountRequest {
  /**
   * @public
   * <p>The name of the domain that was specified when another Amazon Web Services account
   * 			submitted a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a> request. </p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The password that was returned by the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a> request. </p>
   */
  Password: string | undefined;
}

/**
 * @public
 * <p>The AcceptDomainTransferFromAnotherAwsAccount response includes the following
 * 			element.</p>
 */
export interface AcceptDomainTransferFromAnotherAwsAccountResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To query the operation status,
   * 			use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>The number of domains has exceeded the allowed threshold for the account.</p>
 */
export class DomainLimitExceeded extends __BaseException {
  readonly name: "DomainLimitExceeded" = "DomainLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainLimitExceeded, __BaseException>) {
    super({
      name: "DomainLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainLimitExceeded.prototype);
  }
}

/**
 * @public
 * <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 */
export class InvalidInput extends __BaseException {
  readonly name: "InvalidInput" = "InvalidInput";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInput, __BaseException>) {
    super({
      name: "InvalidInput",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInput.prototype);
  }
}

/**
 * @public
 * <p>The number of operations or jobs running exceeded the allowed threshold for the
 * 			account.</p>
 */
export class OperationLimitExceeded extends __BaseException {
  readonly name: "OperationLimitExceeded" = "OperationLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationLimitExceeded, __BaseException>) {
    super({
      name: "OperationLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationLimitExceeded.prototype);
  }
}

/**
 * @public
 * <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 */
export class UnsupportedTLD extends __BaseException {
  readonly name: "UnsupportedTLD" = "UnsupportedTLD";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedTLD, __BaseException>) {
    super({
      name: "UnsupportedTLD",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedTLD.prototype);
  }
}

/**
 * @public
 * <p>Information about a delegation signer (DS) record that was created in the registry by
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>. </p>
 */
export interface DnssecSigningAttributes {
  /**
   * @public
   * <p> Algorithm which was used to generate the digest from the public key. </p>
   */
  Algorithm?: number;

  /**
   * @public
   * <p>Defines the type of key. It can be either a KSK (key-signing-key, value 257) or ZSK
   * 			(zone-signing-key, value 256). Using KSK is always encouraged. Only use ZSK if your DNS
   * 			provider isn't Route 53 and you don’t have KSK available.</p>
   *          <p>If you have KSK and ZSK keys, always use KSK to create a delegations signer (DS)
   * 			record. If you have ZSK keys only – use ZSK to create a DS record.</p>
   */
  Flags?: number;

  /**
   * @public
   * <p> The base64-encoded public key part of the key pair that is passed to the registry.
   * 		</p>
   */
  PublicKey?: string;
}

/**
 * @public
 */
export interface AssociateDelegationSignerToDomainRequest {
  /**
   * @public
   * <p>The name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The information about a key, including the algorithm, public key-value, and
   * 			flags.</p>
   */
  SigningAttributes: DnssecSigningAttributes | undefined;
}

/**
 * @public
 */
export interface AssociateDelegationSignerToDomainResponse {
  /**
   * @public
   * <p>The identifier for tracking the progress of the request. To query the operation
   * 			status, use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p> This error is returned if you call <code>AssociateDelegationSignerToDomain</code>
 * 			when the specified domain has reached the maximum number of DS records. You can't add
 * 			any additional DS records unless you delete an existing one first. </p>
 */
export class DnssecLimitExceeded extends __BaseException {
  readonly name: "DnssecLimitExceeded" = "DnssecLimitExceeded";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DnssecLimitExceeded, __BaseException>) {
    super({
      name: "DnssecLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DnssecLimitExceeded.prototype);
  }
}

/**
 * @public
 * <p>The request is already in progress for the domain.</p>
 */
export class DuplicateRequest extends __BaseException {
  readonly name: "DuplicateRequest" = "DuplicateRequest";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>ID of the request operation.</p>
   */
  requestId?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateRequest, __BaseException>) {
    super({
      name: "DuplicateRequest",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateRequest.prototype);
    this.requestId = opts.requestId;
  }
}

/**
 * @public
 * <p>The top-level domain does not support this operation.</p>
 */
export class TLDRulesViolation extends __BaseException {
  readonly name: "TLDRulesViolation" = "TLDRulesViolation";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TLDRulesViolation, __BaseException>) {
    super({
      name: "TLDRulesViolation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TLDRulesViolation.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const OperationType = {
  ADD_DNSSEC: "ADD_DNSSEC",
  CHANGE_DOMAIN_OWNER: "CHANGE_DOMAIN_OWNER",
  CHANGE_PRIVACY_PROTECTION: "CHANGE_PRIVACY_PROTECTION",
  DELETE_DOMAIN: "DELETE_DOMAIN",
  DISABLE_AUTORENEW: "DISABLE_AUTORENEW",
  DOMAIN_LOCK: "DOMAIN_LOCK",
  ENABLE_AUTORENEW: "ENABLE_AUTORENEW",
  EXPIRE_DOMAIN: "EXPIRE_DOMAIN",
  INTERNAL_TRANSFER_IN_DOMAIN: "INTERNAL_TRANSFER_IN_DOMAIN",
  INTERNAL_TRANSFER_OUT_DOMAIN: "INTERNAL_TRANSFER_OUT_DOMAIN",
  PUSH_DOMAIN: "PUSH_DOMAIN",
  REGISTER_DOMAIN: "REGISTER_DOMAIN",
  REMOVE_DNSSEC: "REMOVE_DNSSEC",
  RENEW_DOMAIN: "RENEW_DOMAIN",
  TRANSFER_IN_DOMAIN: "TRANSFER_IN_DOMAIN",
  TRANSFER_OUT_DOMAIN: "TRANSFER_OUT_DOMAIN",
  UPDATE_DOMAIN_CONTACT: "UPDATE_DOMAIN_CONTACT",
  UPDATE_NAMESERVER: "UPDATE_NAMESERVER",
} as const;

/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 * <p>Information for one billing record.</p>
 */
export interface BillingRecord {
  /**
   * @public
   * <p>The name of the domain that the billing record applies to. If the domain name contains
   * 			characters other than a-z, 0-9, and - (hyphen), such as an internationalized domain
   * 			name, then this value is in Punycode. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS
   * 				Domain Name Format</a> in the <i>Amazon Route 53 Developer
   * 				Guide</i>.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The operation that you were charged for.</p>
   */
  Operation?: OperationType | string;

  /**
   * @public
   * <p>The ID of the invoice that is associated with the billing record.</p>
   */
  InvoiceId?: string;

  /**
   * @public
   * <p>The date that the operation was billed, in Unix format.</p>
   */
  BillDate?: Date;

  /**
   * @public
   * <p>The price that you were charged for the operation, in US dollars.</p>
   *          <p>Example value: 12.0</p>
   */
  Price?: number;
}

/**
 * @public
 * <p>The CancelDomainTransferToAnotherAwsAccount request includes the following
 * 			element.</p>
 */
export interface CancelDomainTransferToAnotherAwsAccountRequest {
  /**
   * @public
   * <p>The name of the domain for which you want to cancel the transfer to another Amazon Web Services account.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>The <code>CancelDomainTransferToAnotherAwsAccount</code> response includes the
 * 			following element.</p>
 */
export interface CancelDomainTransferToAnotherAwsAccountResponse {
  /**
   * @public
   * <p>The identifier that <code>TransferDomainToAnotherAwsAccount</code> returned to track
   * 			the progress of the request. Because the transfer request was canceled, the value is no
   * 			longer valid, and you can't use <code>GetOperationDetail</code> to query the operation
   * 			status.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>The CheckDomainAvailability request contains the following elements.</p>
 */
export interface CheckDomainAvailabilityRequest {
  /**
   * @public
   * <p>The name of the domain that you want to get availability for. The top-level domain
   * 			(TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs,
   * 			see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can
   * 				Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer
   * 				Guide</i>.</p>
   *          <p>The domain name can contain only the following characters:</p>
   *          <ul>
   *             <li>
   *                <p>Letters a through z. Domain names are not case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Numbers 0 through 9.</p>
   *             </li>
   *             <li>
   *                <p>Hyphen (-). You can't specify a hyphen at the beginning or end of a label.
   * 				</p>
   *             </li>
   *             <li>
   *                <p>Period (.) to separate the labels in the name, such as the <code>.</code> in
   * 						<code>example.com</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Internationalized domain names are not supported for some top-level domains. To
   * 			determine whether the TLD that you want to use supports internationalized domain names,
   * 			see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can
   * 				Register with Amazon Route 53</a>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html#domain-name-format-idns">Formatting Internationalized Domain Names</a>. </p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  IdnLangCode?: string;
}

/**
 * @public
 * @enum
 */
export const DomainAvailability = {
  AVAILABLE: "AVAILABLE",
  AVAILABLE_PREORDER: "AVAILABLE_PREORDER",
  AVAILABLE_RESERVED: "AVAILABLE_RESERVED",
  DONT_KNOW: "DONT_KNOW",
  RESERVED: "RESERVED",
  UNAVAILABLE: "UNAVAILABLE",
  UNAVAILABLE_PREMIUM: "UNAVAILABLE_PREMIUM",
  UNAVAILABLE_RESTRICTED: "UNAVAILABLE_RESTRICTED",
} as const;

/**
 * @public
 */
export type DomainAvailability = (typeof DomainAvailability)[keyof typeof DomainAvailability];

/**
 * @public
 * <p>The CheckDomainAvailability response includes the following elements.</p>
 */
export interface CheckDomainAvailabilityResponse {
  /**
   * @public
   * <p>Whether the domain name is available for registering.</p>
   *          <note>
   *             <p>You can register only domains designated as <code>AVAILABLE</code>.</p>
   *          </note>
   *          <p>Valid values:</p>
   *          <dl>
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
   *                <p>The TLD registry didn't reply with a definitive answer about whether the
   * 						domain name is available. Route 53 can return this response for a variety of
   * 						reasons, for example, the registry is performing maintenance. Try again
   * 						later.</p>
   *             </dd>
   *             <dt>PENDING</dt>
   *             <dd>
   *                <p>The TLD registry didn't return a response in the expected amount of time.
   * 						When the response is delayed, it usually takes just a few extra seconds. You
   * 						can resubmit the request immediately.</p>
   *             </dd>
   *             <dt>RESERVED</dt>
   *             <dd>
   *                <p>The domain name has been reserved for another person or
   * 						organization.</p>
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
  Availability?: DomainAvailability | string;
}

/**
 * @public
 * <p>The CheckDomainTransferability request contains the following elements.</p>
 */
export interface CheckDomainTransferabilityRequest {
  /**
   * @public
   * <p>The name of the domain that you want to transfer to Route 53. The top-level domain
   * 			(TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs,
   * 			see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can
   * 				Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer
   * 				Guide</i>.</p>
   *          <p>The domain name can contain only the following characters:</p>
   *          <ul>
   *             <li>
   *                <p>Letters a through z. Domain names are not case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Numbers 0 through 9.</p>
   *             </li>
   *             <li>
   *                <p>Hyphen (-). You can't specify a hyphen at the beginning or end of a label.
   * 				</p>
   *             </li>
   *             <li>
   *                <p>Period (.) to separate the labels in the name, such as the <code>.</code> in
   * 						<code>example.com</code>.</p>
   *             </li>
   *          </ul>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>If the registrar for the top-level domain (TLD) requires an authorization code to
   * 			transfer the domain, the code that you got from the current registrar for the
   * 			domain.</p>
   */
  AuthCode?: string;
}

/**
 * @public
 * @enum
 */
export const Transferable = {
  DOMAIN_IN_ANOTHER_ACCOUNT: "DOMAIN_IN_ANOTHER_ACCOUNT",
  DOMAIN_IN_OWN_ACCOUNT: "DOMAIN_IN_OWN_ACCOUNT",
  DONT_KNOW: "DONT_KNOW",
  PREMIUM_DOMAIN: "PREMIUM_DOMAIN",
  TRANSFERABLE: "TRANSFERABLE",
  UNTRANSFERABLE: "UNTRANSFERABLE",
} as const;

/**
 * @public
 */
export type Transferable = (typeof Transferable)[keyof typeof Transferable];

/**
 * @public
 * <p>A complex type that contains information about whether the specified domain can be
 * 			transferred to Route 53.</p>
 */
export interface DomainTransferability {
  /**
   * @public
   * <p>Whether the domain name can be transferred to Route 53.</p>
   *          <note>
   *             <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> or
   * 					<code>Transferable</code>.</p>
   *          </note>
   *          <p>Valid values:</p>
   *          <dl>
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
   *             <dt>DOMAIN_IN_OWN_ACCOUNT</dt>
   *             <dd>
   *                <p>The domain already exists in the current Amazon Web Services account.</p>
   *             </dd>
   *             <dt>DOMAIN_IN_ANOTHER_ACCOUNT</dt>
   *             <dd>
   *                <p> the domain exists in another Amazon Web Services account.</p>
   *             </dd>
   *             <dt>PREMIUM_DOMAIN</dt>
   *             <dd>
   *                <p>Premium domain transfer is not supported.</p>
   *             </dd>
   *          </dl>
   */
  Transferable?: Transferable | string;
}

/**
 * @public
 * <p>The CheckDomainTransferability response includes the following elements.</p>
 */
export interface CheckDomainTransferabilityResponse {
  /**
   * @public
   * <p>A complex type that contains information about whether the specified domain can be
   * 			transferred to Route 53.</p>
   */
  Transferability?: DomainTransferability;

  /**
   * @public
   * <p>Provides an explanation for when a domain can't be transferred.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p> Customer's consent for the owner change request. </p>
 */
export interface Consent {
  /**
   * @public
   * <p> Maximum amount the customer agreed to accept. </p>
   */
  MaxPrice: number | undefined;

  /**
   * @public
   * <p> Currency for the <code>MaxPrice</code>. </p>
   */
  Currency: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ContactType = {
  ASSOCIATION: "ASSOCIATION",
  COMPANY: "COMPANY",
  PERSON: "PERSON",
  PUBLIC_BODY: "PUBLIC_BODY",
  RESELLER: "RESELLER",
} as const;

/**
 * @public
 */
export type ContactType = (typeof ContactType)[keyof typeof ContactType];

/**
 * @public
 * @enum
 */
export const CountryCode = {
  AC: "AC",
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
  KP: "KP",
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
  TP: "TP",
  TR: "TR",
  TT: "TT",
  TV: "TV",
  TW: "TW",
  TZ: "TZ",
  UA: "UA",
  UG: "UG",
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
export const ExtraParamName = {
  AU_ID_NUMBER: "AU_ID_NUMBER",
  AU_ID_TYPE: "AU_ID_TYPE",
  AU_PRIORITY_TOKEN: "AU_PRIORITY_TOKEN",
  BIRTH_CITY: "BIRTH_CITY",
  BIRTH_COUNTRY: "BIRTH_COUNTRY",
  BIRTH_DATE_IN_YYYY_MM_DD: "BIRTH_DATE_IN_YYYY_MM_DD",
  BIRTH_DEPARTMENT: "BIRTH_DEPARTMENT",
  BRAND_NUMBER: "BRAND_NUMBER",
  CA_BUSINESS_ENTITY_TYPE: "CA_BUSINESS_ENTITY_TYPE",
  CA_LEGAL_REPRESENTATIVE: "CA_LEGAL_REPRESENTATIVE",
  CA_LEGAL_REPRESENTATIVE_CAPACITY: "CA_LEGAL_REPRESENTATIVE_CAPACITY",
  CA_LEGAL_TYPE: "CA_LEGAL_TYPE",
  DOCUMENT_NUMBER: "DOCUMENT_NUMBER",
  DUNS_NUMBER: "DUNS_NUMBER",
  ES_IDENTIFICATION: "ES_IDENTIFICATION",
  ES_IDENTIFICATION_TYPE: "ES_IDENTIFICATION_TYPE",
  ES_LEGAL_FORM: "ES_LEGAL_FORM",
  EU_COUNTRY_OF_CITIZENSHIP: "EU_COUNTRY_OF_CITIZENSHIP",
  FI_BUSINESS_NUMBER: "FI_BUSINESS_NUMBER",
  FI_NATIONALITY: "FI_NATIONALITY",
  FI_ORGANIZATION_TYPE: "FI_ORGANIZATION_TYPE",
  IT_NATIONALITY: "IT_NATIONALITY",
  IT_PIN: "IT_PIN",
  IT_REGISTRANT_ENTITY_TYPE: "IT_REGISTRANT_ENTITY_TYPE",
  ONWER_FI_ID_NUMBER: "FI_ID_NUMBER",
  RU_PASSPORT_DATA: "RU_PASSPORT_DATA",
  SE_ID_NUMBER: "SE_ID_NUMBER",
  SG_ID_NUMBER: "SG_ID_NUMBER",
  UK_COMPANY_NUMBER: "UK_COMPANY_NUMBER",
  UK_CONTACT_TYPE: "UK_CONTACT_TYPE",
  VAT_NUMBER: "VAT_NUMBER",
} as const;

/**
 * @public
 */
export type ExtraParamName = (typeof ExtraParamName)[keyof typeof ExtraParamName];

/**
 * @public
 * <p>ExtraParam includes the following elements.</p>
 */
export interface ExtraParam {
  /**
   * @public
   * <p>The name of an additional parameter that is required by a top-level domain. Here are
   * 			the top-level domains that require additional parameters and the names of the parameters
   * 			that they require:</p>
   *          <dl>
   *             <dt>.com.au and .net.au</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>AU_ID_NUMBER</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AU_ID_TYPE</code>
   *                      </p>
   *                      <p>Valid values include the following:</p>
   *                      <ul>
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
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>.ca</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>BRAND_NUMBER</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CA_BUSINESS_ENTITY_TYPE</code>
   *                      </p>
   *                      <p>Valid values include the following:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>BANK</code> (Bank)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>COMMERCIAL_COMPANY</code> (Commercial
   * 										company)</p>
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
   *                               <code>FOMIA</code> (Federation of mutual insurance
   * 										associations)</p>
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
   *                               <code>SARL</code> (Société à responsabilité
   * 										limitée)</p>
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
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>CA_LEGAL_TYPE</code>
   *                      </p>
   *                      <p>When <code>ContactType</code> is <code>PERSON</code>, valid values
   * 								include the following:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>ABO</code> (Aboriginal Peoples indigenous to
   * 										Canada)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>CCT</code> (Canadian citizen)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LGR</code> (Legal Representative of a Canadian
   * 										Citizen or Permanent Resident)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>RES</code> (Permanent resident of Canada)</p>
   *                         </li>
   *                      </ul>
   *                      <p>When <code>ContactType</code> is a value other than
   * 									<code>PERSON</code>, valid values include the following:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>ASS</code> (Canadian unincorporated
   * 										association)</p>
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
   *                               <code>GOV</code> (Government or government entity in
   * 										Canada)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>HOP</code> (Canadian Hospital)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>INB</code> (Indian Band recognized by the Indian Act
   * 										of Canada)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>LAM</code> (Canadian Library, Archive, or
   * 										Museum)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>MAJ</code> (Her/His Majesty the Queen/King)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>OMK</code> (Official mark registered in
   * 										Canada)</p>
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
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>.es</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>ES_IDENTIFICATION</code>
   *                      </p>
   *                      <p>The value of <code>ES_IDENTIFICATION</code> depends on the
   * 								following values:</p>
   *                      <ul>
   *                         <li>
   *                            <p>The value of <code>ES_LEGAL_FORM</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>The value of <code>ES_IDENTIFICATION_TYPE</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                      <p>
   *                         <b>If <code>ES_LEGAL_FORM</code> is any value
   * 									other than <code>INDIVIDUAL</code>:</b>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>Specify 1 letter + 8 numbers (CIF [Certificado de
   * 										Identificación Fiscal])</p>
   *                         </li>
   *                         <li>
   *                            <p>Example: B12345678</p>
   *                         </li>
   *                      </ul>
   *                      <p>
   *                         <b>If <code>ES_LEGAL_FORM</code> is
   * 										<code>INDIVIDUAL</code>, the value that you specify for
   * 										<code>ES_IDENTIFICATION</code> depends on the value of
   * 										<code>ES_IDENTIFICATION_TYPE</code>:</b>
   *                      </p>
   *                      <ul>
   *                         <li>
   *                            <p>If <code>ES_IDENTIFICATION_TYPE</code> is
   * 											<code>DNI_AND_NIF</code> (for Spanish contacts):</p>
   *                            <ul>
   *                               <li>
   *                                  <p>Specify 8 numbers + 1 letter (DNI [Documento
   * 												Nacional de Identidad], NIF [Número de
   * 												Identificación Fiscal])</p>
   *                               </li>
   *                               <li>
   *                                  <p>Example: 12345678M</p>
   *                               </li>
   *                            </ul>
   *                         </li>
   *                         <li>
   *                            <p>If <code>ES_IDENTIFICATION_TYPE</code> is <code>NIE</code>
   * 										(for foreigners with legal residence):</p>
   *                            <ul>
   *                               <li>
   *                                  <p>Specify 1 letter + 7 numbers + 1 letter ( NIE
   * 												[Número de Identidad de Extranjero])</p>
   *                               </li>
   *                               <li>
   *                                  <p>Example: Y1234567X</p>
   *                               </li>
   *                            </ul>
   *                         </li>
   *                         <li>
   *                            <p>If <code>ES_IDENTIFICATION_TYPE</code> is
   * 											<code>OTHER</code> (for contacts outside of
   * 										Spain):</p>
   *                            <ul>
   *                               <li>
   *                                  <p>Specify a passport number, drivers license number,
   * 												or national identity card number</p>
   *                               </li>
   *                            </ul>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ES_IDENTIFICATION_TYPE</code>
   *                      </p>
   *                      <p>Valid values include the following:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>DNI_AND_NIF</code> (For Spanish contacts)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>NIE</code> (For foreigners with legal
   * 										residence)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>OTHER</code> (For contacts outside of Spain)</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ES_LEGAL_FORM</code>
   *                      </p>
   *                      <p>Valid values include the following:</p>
   *                      <ul>
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
   *                               <code>OTHERS (Only for contacts outside of
   * 										Spain)</code>
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
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>.eu</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code> EU_COUNTRY_OF_CITIZENSHIP</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>.fi</dt>
   *             <dd>
   *                <ul>
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
   *                      <p>Valid values include the following:</p>
   *                      <ul>
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
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>FI_ORGANIZATION_TYPE</code>
   *                      </p>
   *                      <p>Valid values include the following:</p>
   *                      <ul>
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
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>.it</dt>
   *             <dd>
   *                <ul>
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
   *                      <p>Valid values include the following:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>FOREIGNERS</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>FREELANCE_WORKERS</code> (Freelance workers and
   * 										professionals)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>ITALIAN_COMPANIES</code> (Italian companies and
   * 										one-person companies)</p>
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
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>.ru</dt>
   *             <dd>
   *                <ul>
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
   *             </dd>
   *             <dt>.se</dt>
   *             <dd>
   *                <ul>
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
   *             </dd>
   *             <dt>.sg</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>SG_ID_NUMBER</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>.uk, .co.uk, .me.uk, and .org.uk</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>UK_CONTACT_TYPE</code>
   *                      </p>
   *                      <p>Valid values include the following:</p>
   *                      <ul>
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
   *                               <code>FIND</code> (Non-UK Individual, representing
   * 										self)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>FOTHER</code> (Non-UK Entity that does not fit into
   * 										any other category)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>GOV</code> (UK Government Body)</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>IND</code> (UK Individual (representing
   * 										self))</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>IP</code> (UK Industrial/Provident Registered
   * 										Company)</p>
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
   *                               <code>OTHER</code> (UK Entity that does not fit into any
   * 										other category)</p>
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
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>UK_COMPANY_NUMBER</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   *          <p>In addition, many TLDs require a <code>VAT_NUMBER</code>.</p>
   */
  Name: ExtraParamName | string | undefined;

  /**
   * @public
   * <p>The value that corresponds with the name of an extra parameter.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>ContactDetail includes the following elements.</p>
 */
export interface ContactDetail {
  /**
   * @public
   * <p>First name of contact.</p>
   */
  FirstName?: string;

  /**
   * @public
   * <p>Last name of contact.</p>
   */
  LastName?: string;

  /**
   * @public
   * <p>Indicates whether the contact is a person, company, association, or public
   * 			organization. Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify a value other than <code>PERSON</code>, you must also specify a
   * 					value for <code>OrganizationName</code>.</p>
   *             </li>
   *             <li>
   *                <p>For some TLDs, the privacy protection available depends on the value that you
   * 					specify for <code>Contact Type</code>. For the privacy protection settings for
   * 					your TLD, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You
   * 						Can Register with Amazon Route 53</a> in the <i>Amazon Route 53
   * 						Developer Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For .es domains, the value of <code>ContactType</code> must be
   * 						<code>PERSON</code> for all three contacts.</p>
   *             </li>
   *          </ul>
   */
  ContactType?: ContactType | string;

  /**
   * @public
   * <p>Name of the organization for contact types other than <code>PERSON</code>.</p>
   */
  OrganizationName?: string;

  /**
   * @public
   * <p>First line of the contact's address.</p>
   */
  AddressLine1?: string;

  /**
   * @public
   * <p>Second line of contact's address, if any.</p>
   */
  AddressLine2?: string;

  /**
   * @public
   * <p>The city of the contact's address.</p>
   */
  City?: string;

  /**
   * @public
   * <p>The state or province of the contact's city.</p>
   */
  State?: string;

  /**
   * @public
   * <p>Code for the country of the contact's address.</p>
   */
  CountryCode?: CountryCode | string;

  /**
   * @public
   * <p>The zip or postal code of the contact's address.</p>
   */
  ZipCode?: string;

  /**
   * @public
   * <p>The phone number of the contact.</p>
   *          <p>Constraints: Phone number must be specified in the format "+[country dialing
   * 			code].[number including any area code>]". For example, a US phone number might appear
   * 			as <code>"+1.1234567890"</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>Email address of the contact.</p>
   */
  Email?: string;

  /**
   * @public
   * <p>Fax number of the contact.</p>
   *          <p>Constraints: Phone number must be specified in the format "+[country dialing
   * 			code].[number including any area code]". For example, a US phone number might appear as
   * 				<code>"+1.1234567890"</code>.</p>
   */
  Fax?: string;

  /**
   * @public
   * <p>A list of name-value pairs for parameters required by certain top-level
   * 			domains.</p>
   */
  ExtraParams?: ExtraParam[];
}

/**
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * @public
   * <p>Name of the domain to be deleted.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To query the operation status,
   * 			use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>The DeleteTagsForDomainRequest includes the following elements.</p>
 */
export interface DeleteTagsForDomainRequest {
  /**
   * @public
   * <p>The domain for which you want to delete one or more tags.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>A list of tag keys to delete.</p>
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
   * @public
   * <p>The name of the domain that you want to disable automatic renewal for.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DisableDomainAutoRenewResponse {}

/**
 * @public
 * <p>The DisableDomainTransferLock request includes the following element.</p>
 */
export interface DisableDomainTransferLockRequest {
  /**
   * @public
   * <p>The name of the domain that you want to remove the transfer lock for.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>The DisableDomainTransferLock response includes the following element.</p>
 */
export interface DisableDomainTransferLockResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To query the operation status,
   * 			use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;
}

/**
 * @public
 */
export interface DisassociateDelegationSignerFromDomainRequest {
  /**
   * @public
   * <p>Name of the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>An internal identification number assigned to each DS record after it’s created. You
   * 			can retrieve it as part of DNSSEC information returned by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainDetail.html">GetDomainDetail</a>.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DisassociateDelegationSignerFromDomainResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To query the operation status,
   * 			use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>Information about the DNSSEC key.</p>
 *          <p>You get this from your DNS provider and then give it to Route 53 (by using
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>) to pass it to the registry to establish
 * 			the chain of trust.</p>
 */
export interface DnssecKey {
  /**
   * @public
   * <p>The number of the public key’s cryptographic algorithm according to an <a href="https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xml">IANA</a> assignment. </p>
   *          <p>If Route 53 is your DNS service, set this to 13.</p>
   *          <p>For more information about enabling DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec-enable-signing.html">Enabling DNSSEC signing and establishing a chain of trust</a>.</p>
   */
  Algorithm?: number;

  /**
   * @public
   * <p>Defines the type of key. It can be either a KSK (key-signing-key, value 257) or ZSK
   * 			(zone-signing-key, value 256). Using KSK is always encouraged. Only use ZSK if your DNS
   * 			provider isn't Route 53 and you don’t have KSK available.</p>
   *          <p>If you have KSK and ZSK keys, always use KSK to create a delegations signer (DS)
   * 			record. If you have ZSK keys only – use ZSK to create a DS record.</p>
   */
  Flags?: number;

  /**
   * @public
   * <p>The base64-encoded public key part of the key pair that is passed to the registry
   * 			.</p>
   */
  PublicKey?: string;

  /**
   * @public
   * <p> The number of the DS digest algorithm according to an IANA assignment.</p>
   *          <p>For more information, see <a href="https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml">IANA</a>
   * 			for DNSSEC Delegation Signer (DS) Resource Record (RR) Type Digest Algorithms. </p>
   */
  DigestType?: number;

  /**
   * @public
   * <p> The delegation signer digest.</p>
   *          <p>Digest is calculated from the public key provided using specified digest algorithm and
   * 			this digest is the actual value returned from the registry nameservers as the value of
   * 			DS records. </p>
   */
  Digest?: string;

  /**
   * @public
   * <p> A numeric identification of the DNSKEY record referred to by this DS record. </p>
   */
  KeyTag?: number;

  /**
   * @public
   * <p> An ID assigned to each DS record created by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>. </p>
   */
  Id?: string;
}

/**
 * @public
 * <p>Currency-specific price information.</p>
 */
export interface PriceWithCurrency {
  /**
   * @public
   * <p>The price of a domain, in a specific currency.</p>
   */
  Price: number | undefined;

  /**
   * @public
   * <p>The currency specifier.</p>
   */
  Currency: string | undefined;
}

/**
 * @public
 * <p>Information about the domain price associated with a TLD.</p>
 */
export interface DomainPrice {
  /**
   * @public
   * <p>The name of the TLD for which the prices apply.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The price for domain registration with Route 53.</p>
   */
  RegistrationPrice?: PriceWithCurrency;

  /**
   * @public
   * <p>The price for transferring the domain registration to Route 53.</p>
   */
  TransferPrice?: PriceWithCurrency;

  /**
   * @public
   * <p>The price for renewing domain registration with Route 53.</p>
   */
  RenewalPrice?: PriceWithCurrency;

  /**
   * @public
   * <p>The price for changing domain ownership.</p>
   */
  ChangeOwnershipPrice?: PriceWithCurrency;

  /**
   * @public
   * <p>The price for restoring the domain with Route 53.</p>
   */
  RestorationPrice?: PriceWithCurrency;
}

/**
 * @public
 * <p>Information about one suggested domain name.</p>
 */
export interface DomainSuggestion {
  /**
   * @public
   * <p>A suggested domain name.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>Whether the domain name is available for registering.</p>
   *          <note>
   *             <p>You can register only the domains that are designated as
   * 				<code>AVAILABLE</code>.</p>
   *          </note>
   *          <p>Valid values:</p>
   *          <dl>
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
   *                <p>The TLD registry didn't reply with a definitive answer about whether the
   * 						domain name is available. Route 53 can return this response for a variety of
   * 						reasons, for example, the registry is performing maintenance. Try again
   * 						later.</p>
   *             </dd>
   *             <dt>PENDING</dt>
   *             <dd>
   *                <p>The TLD registry didn't return a response in the expected amount of time.
   * 						When the response is delayed, it usually takes just a few extra seconds. You
   * 						can resubmit the request immediately.</p>
   *             </dd>
   *             <dt>RESERVED</dt>
   *             <dd>
   *                <p>The domain name has been reserved for another person or
   * 						organization.</p>
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

/**
 * @public
 * <p>Summary information about one domain.</p>
 */
export interface DomainSummary {
  /**
   * @public
   * <p>The name of the domain that the summary information applies to.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>Indicates whether the domain is automatically renewed upon expiration.</p>
   */
  AutoRenew?: boolean;

  /**
   * @public
   * <p>Indicates whether a domain is locked from unauthorized transfer to another
   * 			party.</p>
   */
  TransferLock?: boolean;

  /**
   * @public
   * <p>Expiration date of the domain in Unix time format and Coordinated Universal Time
   * 			(UTC).</p>
   */
  Expiry?: Date;
}

/**
 * @public
 */
export interface EnableDomainAutoRenewRequest {
  /**
   * @public
   * <p>The name of the domain that you want to enable automatic renewal for.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface EnableDomainAutoRenewResponse {}

/**
 * @public
 * <p>A request to set the transfer lock for the specified domain.</p>
 */
export interface EnableDomainTransferLockRequest {
  /**
   * @public
   * <p>The name of the domain that you want to set the transfer lock for.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>The EnableDomainTransferLock response includes the following elements.</p>
 */
export interface EnableDomainTransferLockResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To use this ID to query the
   * 			operation status, use GetOperationDetail.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * @enum
 */
export const ListDomainsAttributeName = {
  DomainName: "DomainName",
  Expiry: "Expiry",
} as const;

/**
 * @public
 */
export type ListDomainsAttributeName = (typeof ListDomainsAttributeName)[keyof typeof ListDomainsAttributeName];

/**
 * @public
 * @enum
 */
export const Operator = {
  BEGINS_WITH: "BEGINS_WITH",
  GE: "GE",
  LE: "LE",
} as const;

/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * <p>Information for the filtering of a list of domains returned by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains__ListDomains.html">ListDomains</a>.</p>
 */
export interface FilterCondition {
  /**
   * @public
   * <p>Name of the field which should be used for filtering the list of domains.</p>
   */
  Name: ListDomainsAttributeName | string | undefined;

  /**
   * @public
   * <p>The operator values for filtering domain names. The values can be:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LE</code>: Less than, or equal to</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GE</code>: Greater than, or equal to</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BEGINS_WITH</code>: Begins with</p>
   *             </li>
   *          </ul>
   */
  Operator: Operator | string | undefined;

  /**
   * @public
   * <p> An array of strings presenting values to compare. Only 1 item in the list is
   * 			currently supported.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface GetContactReachabilityStatusRequest {
  /**
   * @public
   * <p>The name of the domain for which you want to know whether the registrant contact has
   * 			confirmed that the email address is valid.</p>
   */
  domainName?: string;
}

/**
 * @public
 * @enum
 */
export const ReachabilityStatus = {
  DONE: "DONE",
  EXPIRED: "EXPIRED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type ReachabilityStatus = (typeof ReachabilityStatus)[keyof typeof ReachabilityStatus];

/**
 * @public
 */
export interface GetContactReachabilityStatusResponse {
  /**
   * @public
   * <p>The domain name for which you requested the reachability status.</p>
   */
  domainName?: string;

  /**
   * @public
   * <p>Whether the registrant contact has responded. Values include the following:</p>
   *          <dl>
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

/**
 * @public
 * <p>The GetDomainDetail request includes the following element.</p>
 */
export interface GetDomainDetailRequest {
  /**
   * @public
   * <p>The name of the domain that you want to get detailed information about.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>Name server includes the following elements.</p>
 */
export interface Nameserver {
  /**
   * @public
   * <p>The fully qualified host name of the name server.</p>
   *          <p>Constraint: Maximum 255 characters</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Glue IP address of a name server entry. Glue IP addresses are required only when the
   * 			name of the name server is a subdomain of the domain. For example, if your domain is
   * 			example.com and the name server for the domain is ns.example.com, you need to specify
   * 			the IP address for ns.example.com.</p>
   *          <p>Constraints: The list can contain only one IPv4 and one IPv6 address.</p>
   */
  GlueIps?: string[];
}

/**
 * @public
 * <p>The GetDomainDetail response includes the following elements.</p>
 */
export interface GetDomainDetailResponse {
  /**
   * @public
   * <p>The name of a domain.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The name servers of the domain.</p>
   */
  Nameservers?: Nameserver[];

  /**
   * @public
   * <p>Specifies whether the domain registration is set to renew automatically.</p>
   */
  AutoRenew?: boolean;

  /**
   * @public
   * <p>Provides details about the domain administrative contact.</p>
   */
  AdminContact?: ContactDetail;

  /**
   * @public
   * <p>Provides details about the domain registrant.</p>
   */
  RegistrantContact?: ContactDetail;

  /**
   * @public
   * <p>Provides details about the domain technical contact.</p>
   */
  TechContact?: ContactDetail;

  /**
   * @public
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is
   * 				<code>true</code>, WHOIS ("who is") queries return contact information either for
   * 			Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate,
   * 			Gandi (for all other TLDs). If the value is <code>false</code>, WHOIS queries return the
   * 			information that you entered for the admin contact.</p>
   */
  AdminPrivacy?: boolean;

  /**
   * @public
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is
   * 				<code>true</code>, WHOIS ("who is") queries return contact information either for
   * 			Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate,
   * 			Gandi (for all other TLDs). If the value is <code>false</code>, WHOIS queries return the
   * 			information that you entered for the registrant contact (domain owner).</p>
   */
  RegistrantPrivacy?: boolean;

  /**
   * @public
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is
   * 				<code>true</code>, WHOIS ("who is") queries return contact information either for
   * 			Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate,
   * 			Gandi (for all other TLDs). If the value is <code>false</code>, WHOIS queries return the
   * 			information that you entered for the technical contact.</p>
   */
  TechPrivacy?: boolean;

  /**
   * @public
   * <p>Name of the registrar of the domain as identified in the registry. Domains with a
   * 			.com, .net, or .org TLD are registered by Amazon Registrar. All other domains are
   * 			registered by our registrar associate, Gandi. The value for domains that are registered
   * 			by Gandi is <code>"GANDI SAS"</code>. </p>
   */
  RegistrarName?: string;

  /**
   * @public
   * <p>The fully qualified name of the WHOIS server that can answer the WHOIS query for the
   * 			domain.</p>
   */
  WhoIsServer?: string;

  /**
   * @public
   * <p>Web address of the registrar.</p>
   */
  RegistrarUrl?: string;

  /**
   * @public
   * <p>Email address to contact to report incorrect contact information for a domain, to
   * 			report that the domain is being used to send spam, to report that someone is
   * 			cybersquatting on a domain name, or report some other type of abuse.</p>
   */
  AbuseContactEmail?: string;

  /**
   * @public
   * <p>Phone number for reporting abuse.</p>
   */
  AbuseContactPhone?: string;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  RegistryDomainId?: string;

  /**
   * @public
   * <p>The date when the domain was created as found in the response to a WHOIS query. The
   * 			date and time is in Unix time format and Coordinated Universal time (UTC).</p>
   */
  CreationDate?: Date;

  /**
   * @public
   * <p>The last updated date of the domain as found in the response to a WHOIS query. The
   * 			date and time is in Unix time format and Coordinated Universal time (UTC).</p>
   */
  UpdatedDate?: Date;

  /**
   * @public
   * <p>The date when the registration for the domain is set to expire. The date and time is
   * 			in Unix time format and Coordinated Universal time (UTC).</p>
   */
  ExpirationDate?: Date;

  /**
   * @public
   * <p>Reseller of the domain. Domains registered or transferred using Route 53 domains will
   * 			have <code>"Amazon"</code> as the reseller. </p>
   */
  Reseller?: string;

  /**
   * @public
   * <p>Deprecated.</p>
   */
  DnsSec?: string;

  /**
   * @public
   * <p>An array of domain name status codes, also known as Extensible Provisioning Protocol
   * 			(EPP) status codes.</p>
   *          <p>ICANN, the organization that maintains a central database of domain names, has
   * 			developed a set of domain name status codes that tell you the status of a variety of
   * 			operations on a domain name, for example, registering a domain name, transferring a
   * 			domain name to another registrar, renewing the registration for a domain name, and so
   * 			on. All registrars use this same set of status codes.</p>
   *          <p>For a current list of domain name status codes and an explanation of what each code
   * 			means, go to the <a href="https://www.icann.org/">ICANN website</a> and search
   * 			for <code>epp status codes</code>. (Search on the ICANN website; web searches sometimes
   * 			return an old version of the document.)</p>
   */
  StatusList?: string[];

  /**
   * @public
   * <p>A complex type that contains information about the DNSSEC configuration.</p>
   */
  DnssecKeys?: DnssecKey[];
}

/**
 * @public
 */
export interface GetDomainSuggestionsRequest {
  /**
   * @public
   * <p>A domain name that you want to use as the basis for a list of possible domain names.
   * 			The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a
   * 			list of supported TLDs, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can
   * 				Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer
   * 				Guide</i>.</p>
   *          <p>The domain name can contain only the following characters:</p>
   *          <ul>
   *             <li>
   *                <p>Letters a through z. Domain names are not case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Numbers 0 through 9.</p>
   *             </li>
   *             <li>
   *                <p>Hyphen (-). You can't specify a hyphen at the beginning or end of a label.
   * 				</p>
   *             </li>
   *             <li>
   *                <p>Period (.) to separate the labels in the name, such as the <code>.</code> in
   * 						<code>example.com</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Internationalized domain names are not supported for some top-level domains. To
   * 			determine whether the TLD that you want to use supports internationalized domain names,
   * 			see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can
   * 				Register with Amazon Route 53</a>. </p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The number of suggested domain names that you want Route 53 to return. Specify a value
   * 			between 1 and 50.</p>
   */
  SuggestionCount: number | undefined;

  /**
   * @public
   * <p>If <code>OnlyAvailable</code> is <code>true</code>, Route 53 returns only domain names
   * 			that are available. If <code>OnlyAvailable</code> is <code>false</code>, Route 53
   * 			returns domain names without checking whether they're available to be registered. To
   * 			determine whether the domain is available, you can call
   * 				<code>checkDomainAvailability</code> for each suggestion.</p>
   */
  OnlyAvailable: boolean | undefined;
}

/**
 * @public
 */
export interface GetDomainSuggestionsResponse {
  /**
   * @public
   * <p>A list of possible domain names. If you specified <code>true</code> for
   * 				<code>OnlyAvailable</code> in the request, the list contains only domains that are
   * 			available for registration.</p>
   */
  SuggestionsList?: DomainSuggestion[];
}

/**
 * @public
 * <p>The <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> request includes the following element.</p>
 */
export interface GetOperationDetailRequest {
  /**
   * @public
   * <p>The identifier for the operation for which you want to get the status. Route 53
   * 			returned the identifier in the response to the original request.</p>
   */
  OperationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  ERROR: "ERROR",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUBMITTED: "SUBMITTED",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * @enum
 */
export const StatusFlag = {
  PENDING_ACCEPTANCE: "PENDING_ACCEPTANCE",
  PENDING_AUTHORIZATION: "PENDING_AUTHORIZATION",
  PENDING_CUSTOMER_ACTION: "PENDING_CUSTOMER_ACTION",
  PENDING_PAYMENT_VERIFICATION: "PENDING_PAYMENT_VERIFICATION",
  PENDING_SUPPORT_CASE: "PENDING_SUPPORT_CASE",
} as const;

/**
 * @public
 */
export type StatusFlag = (typeof StatusFlag)[keyof typeof StatusFlag];

/**
 * @public
 * <p>The GetOperationDetail response includes the following elements.</p>
 */
export interface GetOperationDetailResponse {
  /**
   * @public
   * <p>The identifier for the operation.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>The current status of the requested operation in the system.</p>
   */
  Status?: OperationStatus | string;

  /**
   * @public
   * <p>Detailed information on the status including possible errors.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The name of a domain.</p>
   */
  DomainName?: string;

  /**
   * @public
   * <p>The type of operation that was requested.</p>
   */
  Type?: OperationType | string;

  /**
   * @public
   * <p>The date when the request was submitted.</p>
   */
  SubmittedDate?: Date;

  /**
   * @public
   * <p> The date when the operation was last updated. </p>
   */
  LastUpdatedDate?: Date;

  /**
   * @public
   * <p> Lists any outstanding operations that require customer action. Valid values
   * 			are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING_ACCEPTANCE</code>: The operation is waiting for acceptance from
   * 					the account that is receiving the domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_CUSTOMER_ACTION</code>: The operation is waiting for customer
   * 					action, for example, returning an email.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_AUTHORIZATION</code>: The operation is waiting for the form of
   * 					authorization. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendOperationAuthorization.html">ResendOperationAuthorization</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_PAYMENT_VERIFICATION</code>: The operation is waiting for the
   * 					payment method to validate.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_SUPPORT_CASE</code>: The operation includes a support case and
   * 					is waiting for its resolution.</p>
   *             </li>
   *          </ul>
   */
  StatusFlag?: StatusFlag | string;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * <p>Information for sorting a list of domains.</p>
 */
export interface SortCondition {
  /**
   * @public
   * <p>Field to be used for sorting the list of domains. It can be either the name or the
   * 			expiration for a domain. Note that if <code>filterCondition</code> is used in the same
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains__ListDomains.html">ListDomains</a>
   * 			call, the field used for sorting has to be the same as the field used for
   * 			filtering.</p>
   */
  Name: ListDomainsAttributeName | string | undefined;

  /**
   * @public
   * <p>The sort order for a list of domains. Either ascending (ASC) or descending
   * 			(DES).</p>
   */
  SortOrder: SortOrder | string | undefined;
}

/**
 * @public
 * <p>The ListDomains request includes the following elements.</p>
 */
export interface ListDomainsRequest {
  /**
   * @public
   * <p>A complex type that contains information about the filters applied during the
   * 				<code>ListDomains</code> request. The filter conditions can include domain name and
   * 			domain expiration.</p>
   */
  FilterConditions?: FilterCondition[];

  /**
   * @public
   * <p>A complex type that contains information about the requested ordering of domains in
   * 			the returned list.</p>
   */
  SortCondition?: SortCondition;

  /**
   * @public
   * <p>For an initial request for a list of domains, omit this element. If the number of
   * 			domains that are associated with the current Amazon Web Services account is greater than
   * 			the value that you specified for <code>MaxItems</code>, you can use <code>Marker</code>
   * 			to return additional domains. Get the value of <code>NextPageMarker</code> from the
   * 			previous response, and submit another request that includes the value of
   * 				<code>NextPageMarker</code> in the <code>Marker</code> element.</p>
   *          <p>Constraints: The marker must match the value specified in the previous request.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Number of domains to be returned.</p>
   *          <p>Default: 20</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>The ListDomains response includes the following elements.</p>
 */
export interface ListDomainsResponse {
  /**
   * @public
   * <p>A list of domains.</p>
   */
  Domains?: DomainSummary[];

  /**
   * @public
   * <p>If there are more domains than you specified for <code>MaxItems</code> in the request,
   * 			submit another request and include the value of <code>NextPageMarker</code> in the value
   * 			of <code>Marker</code>.</p>
   */
  NextPageMarker?: string;
}

/**
 * @public
 * @enum
 */
export const ListOperationsSortAttributeName = {
  SubmittedDate: "SubmittedDate",
} as const;

/**
 * @public
 */
export type ListOperationsSortAttributeName =
  (typeof ListOperationsSortAttributeName)[keyof typeof ListOperationsSortAttributeName];

/**
 * @public
 * <p>The ListOperations request includes the following elements.</p>
 */
export interface ListOperationsRequest {
  /**
   * @public
   * <p>An optional parameter that lets you get information about all the operations that you
   * 			submitted after a specified date and time. Specify the date and time in Unix time format
   * 			and Coordinated Universal time (UTC).</p>
   */
  SubmittedSince?: Date;

  /**
   * @public
   * <p>For an initial request for a list of operations, omit this element. If the number of
   * 			operations that are not yet complete is greater than the value that you specified for
   * 				<code>MaxItems</code>, you can use <code>Marker</code> to return additional
   * 			operations. Get the value of <code>NextPageMarker</code> from the previous response, and
   * 			submit another request that includes the value of <code>NextPageMarker</code> in the
   * 				<code>Marker</code> element.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Number of domains to be returned.</p>
   *          <p>Default: 20</p>
   */
  MaxItems?: number;

  /**
   * @public
   * <p> The status of the operations. </p>
   */
  Status?: (OperationStatus | string)[];

  /**
   * @public
   * <p> An arrays of the domains operation types. </p>
   */
  Type?: (OperationType | string)[];

  /**
   * @public
   * <p> The sort type for returned values. </p>
   */
  SortBy?: ListOperationsSortAttributeName | string;

  /**
   * @public
   * <p> The sort order for returned values, either ascending or descending. </p>
   */
  SortOrder?: SortOrder | string;
}

/**
 * @public
 * <p>OperationSummary includes the following elements.</p>
 */
export interface OperationSummary {
  /**
   * @public
   * <p>Identifier returned to track the requested action.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>The current status of the requested operation in the system.</p>
   */
  Status?: OperationStatus | string;

  /**
   * @public
   * <p>Type of the action requested.</p>
   */
  Type?: OperationType | string;

  /**
   * @public
   * <p>The date when the request was submitted.</p>
   */
  SubmittedDate?: Date;

  /**
   * @public
   * <p> Name of the domain. </p>
   */
  DomainName?: string;

  /**
   * @public
   * <p> Message about the operation. </p>
   */
  Message?: string;

  /**
   * @public
   * <p> Automatically checks whether there are no outstanding operations on domains that need
   * 			customer attention. </p>
   *          <p> Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING_ACCEPTANCE</code>: The operation is waiting for acceptance from
   * 					the account that is receiving the domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_CUSTOMER_ACTION</code>: The operation is waiting for customer
   * 					action, for example, returning an email.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_AUTHORIZATION</code>: The operation is waiting for the form of
   * 					authorization. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendOperationAuthorization.html">ResendOperationAuthorization</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_PAYMENT_VERIFICATION</code>: The operation is waiting for the
   * 					payment method to validate.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_SUPPORT_CASE</code>: The operation includes a support case and
   * 					is waiting for its resolution.</p>
   *             </li>
   *          </ul>
   */
  StatusFlag?: StatusFlag | string;

  /**
   * @public
   * <p> The date when the last change was made in Unix time format and Coordinated Universal
   * 			Time (UTC). </p>
   */
  LastUpdatedDate?: Date;
}

/**
 * @public
 * <p>The ListOperations response includes the following elements.</p>
 */
export interface ListOperationsResponse {
  /**
   * @public
   * <p>Lists summaries of the operations.</p>
   */
  Operations?: OperationSummary[];

  /**
   * @public
   * <p>If there are more operations than you specified for <code>MaxItems</code> in the
   * 			request, submit another request and include the value of <code>NextPageMarker</code> in
   * 			the value of <code>Marker</code>.</p>
   */
  NextPageMarker?: string;
}

/**
 * @public
 */
export interface ListPricesRequest {
  /**
   * @public
   * <p>The TLD for which you want to receive the pricing information. For example.
   * 				<code>.net</code>.</p>
   *          <p>If a <code>Tld</code> value is not provided, a list of prices for all TLDs supported
   * 			by Route 53 is returned.</p>
   */
  Tld?: string;

  /**
   * @public
   * <p>For an initial request for a list of prices, omit this element. If the number of
   * 			prices that are not yet complete is greater than the value that you specified for
   * 				<code>MaxItems</code>, you can use <code>Marker</code> to return additional prices.
   * 			Get the value of <code>NextPageMarker</code> from the previous response, and submit
   * 			another request that includes the value of <code>NextPageMarker</code> in the
   * 				<code>Marker</code> element. </p>
   *          <p>Used only for all TLDs. If you specify a TLD, don't specify a
   * 			<code>Marker</code>.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>Number of <code>Prices</code> to be returned.</p>
   *          <p>Used only for all TLDs. If you specify a TLD, don't specify a
   * 			<code>MaxItems</code>.</p>
   */
  MaxItems?: number;
}

/**
 * @public
 */
export interface ListPricesResponse {
  /**
   * @public
   * <p>A complex type that includes all the pricing information. If you specify a TLD, this
   * 			array contains only the pricing for that TLD.</p>
   */
  Prices?: DomainPrice[];

  /**
   * @public
   * <p>If there are more prices than you specified for <code>MaxItems</code> in the request,
   * 			submit another request and include the value of <code>NextPageMarker</code> in the value
   * 			of <code>Marker</code>. </p>
   *          <p>Used only for all TLDs. If you specify a TLD, don't specify a
   * 				<code>NextPageMarker</code>.</p>
   */
  NextPageMarker?: string;
}

/**
 * @public
 * <p>The ListTagsForDomainRequest includes the following elements.</p>
 */
export interface ListTagsForDomainRequest {
  /**
   * @public
   * <p>The domain for which you want to get a list of tags.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>Each tag includes the following elements.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key (name) of a tag.</p>
   *          <p>Valid values: A-Z, a-z, 0-9, space, ".:/=+\-@"</p>
   *          <p>Constraints: Each key can be 1-128 characters long.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value of a tag.</p>
   *          <p>Valid values: A-Z, a-z, 0-9, space, ".:/=+\-@"</p>
   *          <p>Constraints: Each value can be 0-256 characters long.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The ListTagsForDomain response includes the following elements.</p>
 */
export interface ListTagsForDomainResponse {
  /**
   * @public
   * <p>A list of the tags that are associated with the specified domain.</p>
   */
  TagList?: Tag[];
}

/**
 * @public
 */
export interface PushDomainRequest {
  /**
   * @public
   * <p> Name of the domain. </p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p> New IPS tag for the domain. </p>
   */
  Target: string | undefined;
}

/**
 * @public
 * <p>The RegisterDomain request includes the following elements.</p>
 */
export interface RegisterDomainRequest {
  /**
   * @public
   * <p>The domain name that you want to register. The top-level domain (TLD), such as .com,
   * 			must be a TLD that Route 53 supports. For a list of supported TLDs, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the <i>Amazon
   * 				Route 53 Developer Guide</i>.</p>
   *          <p>The domain name can contain only the following characters:</p>
   *          <ul>
   *             <li>
   *                <p>Letters a through z. Domain names are not case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Numbers 0 through 9.</p>
   *             </li>
   *             <li>
   *                <p>Hyphen (-). You can't specify a hyphen at the beginning or end of a label.
   * 				</p>
   *             </li>
   *             <li>
   *                <p>Period (.) to separate the labels in the name, such as the <code>.</code> in
   * 						<code>example.com</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Internationalized domain names are not supported for some top-level domains. To
   * 			determine whether the TLD that you want to use supports internationalized domain names,
   * 			see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can
   * 				Register with Amazon Route 53</a>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html#domain-name-format-idns">Formatting Internationalized Domain Names</a>. </p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  IdnLangCode?: string;

  /**
   * @public
   * <p>The number of years that you want to register the domain for. Domains are registered
   * 			for a minimum of one year. The maximum period depends on the top-level domain. For the
   * 			range of valid values for your domain, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can
   * 				Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer
   * 				Guide</i>.</p>
   *          <p>Default: 1</p>
   */
  DurationInYears: number | undefined;

  /**
   * @public
   * <p>Indicates whether the domain will be automatically renewed (<code>true</code>) or not
   * 				(<code>false</code>). Auto renewal only takes effect after the account is
   * 			charged.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  AutoRenew?: boolean;

  /**
   * @public
   * <p>Provides detailed contact information. For information about the values that you
   * 			specify for each element, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html">ContactDetail</a>.</p>
   */
  AdminContact: ContactDetail | undefined;

  /**
   * @public
   * <p>Provides detailed contact information. For information about the values that you
   * 			specify for each element, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html">ContactDetail</a>.</p>
   */
  RegistrantContact: ContactDetail | undefined;

  /**
   * @public
   * <p>Provides detailed contact information. For information about the values that you
   * 			specify for each element, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html">ContactDetail</a>.</p>
   */
  TechContact: ContactDetail | undefined;

  /**
   * @public
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify
   * 				<code>true</code>, WHOIS ("who is") queries return contact information either for
   * 			Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate,
   * 			Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the
   * 			information that you entered for the admin contact.</p>
   *          <note>
   *             <p>You must specify the same privacy setting for the administrative, registrant, and
   * 				technical contacts.</p>
   *          </note>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectAdminContact?: boolean;

  /**
   * @public
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify
   * 				<code>true</code>, WHOIS ("who is") queries return contact information either for
   * 			Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate,
   * 			Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the
   * 			information that you entered for the registrant contact (the domain owner).</p>
   *          <note>
   *             <p>You must specify the same privacy setting for the administrative, registrant, and
   * 				technical contacts.</p>
   *          </note>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectRegistrantContact?: boolean;

  /**
   * @public
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify
   * 				<code>true</code>, WHOIS ("who is") queries return contact information either for
   * 			Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate,
   * 			Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the
   * 			information that you entered for the technical contact.</p>
   *          <note>
   *             <p>You must specify the same privacy setting for the administrative, registrant, and
   * 				technical contacts.</p>
   *          </note>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectTechContact?: boolean;
}

/**
 * @public
 * <p>The RegisterDomain response includes the following element.</p>
 */
export interface RegisterDomainResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To query the operation status,
   * 			use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>The RejectDomainTransferFromAnotherAwsAccount request includes the following
 * 			element.</p>
 */
export interface RejectDomainTransferFromAnotherAwsAccountRequest {
  /**
   * @public
   * <p>The name of the domain that was specified when another Amazon Web Services account
   * 			submitted a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a> request. </p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>The RejectDomainTransferFromAnotherAwsAccount response includes the following
 * 			element.</p>
 */
export interface RejectDomainTransferFromAnotherAwsAccountResponse {
  /**
   * @public
   * <p>The identifier that <code>TransferDomainToAnotherAwsAccount</code> returned to track
   * 			the progress of the request. Because the transfer request was rejected, the value is no
   * 			longer valid, and you can't use <code>GetOperationDetail</code> to query the operation
   * 			status.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>A <code>RenewDomain</code> request includes the number of years that you want to renew
 * 			for and the current expiration year.</p>
 */
export interface RenewDomainRequest {
  /**
   * @public
   * <p>The name of the domain that you want to renew.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The number of years that you want to renew the domain for. The maximum number of years
   * 			depends on the top-level domain. For the range of valid values for your domain, see
   * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can
   * 				Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer
   * 				Guide</i>.</p>
   *          <p>Default: 1</p>
   */
  DurationInYears?: number;

  /**
   * @public
   * <p>The year when the registration for the domain is set to expire. This value must match
   * 			the current expiration date for the domain.</p>
   */
  CurrentExpiryYear: number | undefined;
}

/**
 * @public
 */
export interface RenewDomainResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To query the operation status,
   * 			use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;
}

/**
 * @public
 */
export interface ResendContactReachabilityEmailRequest {
  /**
   * @public
   * <p>The name of the domain for which you want Route 53 to resend a confirmation email to
   * 			the registrant contact.</p>
   */
  domainName?: string;
}

/**
 * @public
 */
export interface ResendContactReachabilityEmailResponse {
  /**
   * @public
   * <p>The domain name for which you requested a confirmation email.</p>
   */
  domainName?: string;

  /**
   * @public
   * <p>The email address for the registrant contact at the time that we sent the verification
   * 			email.</p>
   */
  emailAddress?: string;

  /**
   * @public
   * <p>
   *             <code>True</code> if the email address for the registrant contact has already been
   * 			verified, and <code>false</code> otherwise. If the email address has already been
   * 			verified, we don't send another confirmation email.</p>
   */
  isAlreadyVerified?: boolean;
}

/**
 * @public
 */
export interface ResendOperationAuthorizationRequest {
  /**
   * @public
   * <p> Operation ID. </p>
   */
  OperationId: string | undefined;
}

/**
 * @public
 * <p>A request for the authorization code for the specified domain. To transfer a domain to
 * 			another registrar, you provide this value to the new registrar.</p>
 */
export interface RetrieveDomainAuthCodeRequest {
  /**
   * @public
   * <p>The name of the domain that you want to get an authorization code for.</p>
   */
  DomainName: string | undefined;
}

/**
 * @public
 * <p>The RetrieveDomainAuthCode response includes the following element.</p>
 */
export interface RetrieveDomainAuthCodeResponse {
  /**
   * @public
   * <p>The authorization code for the domain.</p>
   */
  AuthCode?: string;
}

/**
 * @public
 * <p>The TransferDomain request includes the following elements.</p>
 */
export interface TransferDomainRequest {
  /**
   * @public
   * <p>The name of the domain that you want to transfer to Route 53. The top-level domain
   * 			(TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs,
   * 			see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can
   * 				Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer
   * 				Guide</i>.</p>
   *          <p>The domain name can contain only the following characters:</p>
   *          <ul>
   *             <li>
   *                <p>Letters a through z. Domain names are not case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Numbers 0 through 9.</p>
   *             </li>
   *             <li>
   *                <p>Hyphen (-). You can't specify a hyphen at the beginning or end of a label.
   * 				</p>
   *             </li>
   *             <li>
   *                <p>Period (.) to separate the labels in the name, such as the <code>.</code> in
   * 						<code>example.com</code>.</p>
   *             </li>
   *          </ul>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>Reserved for future use.</p>
   */
  IdnLangCode?: string;

  /**
   * @public
   * <p>The number of years that you want to register the domain for. Domains are registered
   * 			for a minimum of one year. The maximum period depends on the top-level domain.</p>
   *          <p>Default: 1</p>
   */
  DurationInYears: number | undefined;

  /**
   * @public
   * <p>Contains details for the host and glue IP addresses.</p>
   */
  Nameservers?: Nameserver[];

  /**
   * @public
   * <p>The authorization code for the domain. You get this value from the current
   * 			registrar.</p>
   */
  AuthCode?: string;

  /**
   * @public
   * <p>Indicates whether the domain will be automatically renewed (true) or not (false). Auto
   * 			renewal only takes effect after the account is charged.</p>
   *          <p>Default: true</p>
   */
  AutoRenew?: boolean;

  /**
   * @public
   * <p>Provides detailed contact information.</p>
   */
  AdminContact: ContactDetail | undefined;

  /**
   * @public
   * <p>Provides detailed contact information.</p>
   */
  RegistrantContact: ContactDetail | undefined;

  /**
   * @public
   * <p>Provides detailed contact information.</p>
   */
  TechContact: ContactDetail | undefined;

  /**
   * @public
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify
   * 				<code>true</code>, WHOIS ("who is") queries return contact information for the
   * 			registrar, the phrase "REDACTED FOR PRIVACY", or "On behalf of <domain name>
   * 			owner.".</p>
   *          <note>
   *             <p>While some domains may allow different privacy settings per contact, we recommend
   * 				specifying the same privacy setting for all contacts.</p>
   *          </note>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectAdminContact?: boolean;

  /**
   * @public
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify
   * 				<code>true</code>, WHOIS ("who is") queries return contact information either for
   * 			Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate,
   * 			Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the
   * 			information that you entered for the registrant contact (domain owner).</p>
   *          <note>
   *             <p>You must specify the same privacy setting for the administrative, registrant, and
   * 				technical contacts.</p>
   *          </note>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectRegistrantContact?: boolean;

  /**
   * @public
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify
   * 				<code>true</code>, WHOIS ("who is") queries return contact information either for
   * 			Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate,
   * 			Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the
   * 			information that you entered for the technical contact.</p>
   *          <note>
   *             <p>You must specify the same privacy setting for the administrative, registrant, and
   * 				technical contacts.</p>
   *          </note>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  PrivacyProtectTechContact?: boolean;
}

/**
 * @public
 * <p>The TransferDomain response includes the following element.</p>
 */
export interface TransferDomainResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To query the operation status,
   * 			use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>The TransferDomainToAnotherAwsAccount request includes the following elements.</p>
 */
export interface TransferDomainToAnotherAwsAccountRequest {
  /**
   * @public
   * <p>The name of the domain that you want to transfer from the current Amazon Web Services account to another account.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>The account ID of the Amazon Web Services account that you want to transfer the domain
   * 			to, for example, <code>111122223333</code>.</p>
   */
  AccountId: string | undefined;
}

/**
 * @public
 * <p>The <code>TransferDomainToAnotherAwsAccount</code> response includes the following
 * 			elements.</p>
 */
export interface TransferDomainToAnotherAwsAccountResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To query the operation status,
   * 			use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>To finish transferring a domain to another Amazon Web Services account, the account
   * 			that the domain is being transferred to must submit an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a> request. The request must include
   * 			the value of the <code>Password</code> element that was returned in the
   * 				<code>TransferDomainToAnotherAwsAccount</code> response.</p>
   */
  Password?: string;
}

/**
 * @public
 * <p>The UpdateDomainContact request includes the following elements.</p>
 */
export interface UpdateDomainContactRequest {
  /**
   * @public
   * <p>The name of the domain that you want to update contact information for.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>Provides detailed contact information.</p>
   */
  AdminContact?: ContactDetail;

  /**
   * @public
   * <p>Provides detailed contact information.</p>
   */
  RegistrantContact?: ContactDetail;

  /**
   * @public
   * <p>Provides detailed contact information.</p>
   */
  TechContact?: ContactDetail;

  /**
   * @public
   * <p> Customer's consent for the owner change request. Required if the domain is not free (consent price is more than $0.00).</p>
   */
  Consent?: Consent;
}

/**
 * @public
 * <p>The UpdateDomainContact response includes the following element.</p>
 */
export interface UpdateDomainContactResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To query the operation status,
   * 			use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>The UpdateDomainContactPrivacy request includes the following elements.</p>
 */
export interface UpdateDomainContactPrivacyRequest {
  /**
   * @public
   * <p>The name of the domain that you want to update the privacy setting for.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify
   * 				<code>true</code>, WHOIS ("who is") queries return contact information either for
   * 			Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate,
   * 			Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the
   * 			information that you entered for the admin contact.</p>
   *          <note>
   *             <p>You must specify the same privacy setting for the administrative, registrant, and
   * 				technical contacts.</p>
   *          </note>
   */
  AdminPrivacy?: boolean;

  /**
   * @public
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify
   * 				<code>true</code>, WHOIS ("who is") queries return contact information either for
   * 			Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate,
   * 			Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the
   * 			information that you entered for the registrant contact (domain owner).</p>
   *          <note>
   *             <p>You must specify the same privacy setting for the administrative, registrant, and
   * 				technical contacts.</p>
   *          </note>
   */
  RegistrantPrivacy?: boolean;

  /**
   * @public
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify
   * 				<code>true</code>, WHOIS ("who is") queries return contact information either for
   * 			Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate,
   * 			Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the
   * 			information that you entered for the technical contact.</p>
   *          <note>
   *             <p>You must specify the same privacy setting for the administrative, registrant, and
   * 				technical contacts.</p>
   *          </note>
   */
  TechPrivacy?: boolean;
}

/**
 * @public
 * <p>The UpdateDomainContactPrivacy response includes the following element.</p>
 */
export interface UpdateDomainContactPrivacyResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To use this ID to query the
   * 			operation status, use GetOperationDetail.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>Replaces the current set of name servers for the domain with the specified set of name
 * 			servers. If you use Amazon Route 53 as your DNS service, specify the four name servers
 * 			in the delegation set for the hosted zone for the domain.</p>
 *          <p>If successful, this operation returns an operation ID that you can use to track the
 * 			progress and completion of the action. If the request is not completed successfully, the
 * 			domain registrant will be notified by email. </p>
 */
export interface UpdateDomainNameserversRequest {
  /**
   * @public
   * <p>The name of the domain that you want to change name servers for.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>The authorization key for .fi domains</p>
   */
  FIAuthKey?: string;

  /**
   * @public
   * <p>A list of new name servers for the domain.</p>
   */
  Nameservers: Nameserver[] | undefined;
}

/**
 * @public
 * <p>The UpdateDomainNameservers response includes the following element.</p>
 */
export interface UpdateDomainNameserversResponse {
  /**
   * @public
   * <p>Identifier for tracking the progress of the request. To query the operation status,
   * 			use <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a>.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>The UpdateTagsForDomainRequest includes the following elements.</p>
 */
export interface UpdateTagsForDomainRequest {
  /**
   * @public
   * <p>The domain for which you want to add or update tags.</p>
   */
  DomainName: string | undefined;

  /**
   * @public
   * <p>A list of the tag keys and values that you want to add or update. If you specify a key
   * 			that already exists, the corresponding value will be replaced.</p>
   */
  TagsToUpdate?: Tag[];
}

/**
 * @public
 */
export interface UpdateTagsForDomainResponse {}

/**
 * @public
 * <p>The ViewBilling request includes the following elements.</p>
 */
export interface ViewBillingRequest {
  /**
   * @public
   * <p>The beginning date and time for the time period for which you want a list of billing
   * 			records. Specify the date and time in Unix time format and Coordinated Universal time
   * 			(UTC).</p>
   */
  Start?: Date;

  /**
   * @public
   * <p>The end date and time for the time period for which you want a list of billing
   * 			records. Specify the date and time in Unix time format and Coordinated Universal time
   * 			(UTC).</p>
   */
  End?: Date;

  /**
   * @public
   * <p>For an initial request for a list of billing records, omit this element. If the number
   * 			of billing records that are associated with the current Amazon Web Services account
   * 			during the specified period is greater than the value that you specified for
   * 				<code>MaxItems</code>, you can use <code>Marker</code> to return additional billing
   * 			records. Get the value of <code>NextPageMarker</code> from the previous response, and
   * 			submit another request that includes the value of <code>NextPageMarker</code> in the
   * 				<code>Marker</code> element. </p>
   *          <p>Constraints: The marker must match the value of <code>NextPageMarker</code> that was
   * 			returned in the previous response.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The number of billing records to be returned.</p>
   *          <p>Default: 20</p>
   */
  MaxItems?: number;
}

/**
 * @public
 * <p>The ViewBilling response includes the following elements.</p>
 */
export interface ViewBillingResponse {
  /**
   * @public
   * <p>If there are more billing records than you specified for <code>MaxItems</code> in the
   * 			request, submit another request and include the value of <code>NextPageMarker</code> in
   * 			the value of <code>Marker</code>.</p>
   */
  NextPageMarker?: string;

  /**
   * @public
   * <p>A summary of billing records.</p>
   */
  BillingRecords?: BillingRecord[];
}

/**
 * @internal
 */
export const AcceptDomainTransferFromAnotherAwsAccountRequestFilterSensitiveLog = (
  obj: AcceptDomainTransferFromAnotherAwsAccountRequest
): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CheckDomainTransferabilityRequestFilterSensitiveLog = (obj: CheckDomainTransferabilityRequest): any => ({
  ...obj,
  ...(obj.AuthCode && { AuthCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExtraParamFilterSensitiveLog = (obj: ExtraParam): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ContactDetailFilterSensitiveLog = (obj: ContactDetail): any => ({
  ...obj,
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
  ...(obj.OrganizationName && { OrganizationName: SENSITIVE_STRING }),
  ...(obj.AddressLine1 && { AddressLine1: SENSITIVE_STRING }),
  ...(obj.AddressLine2 && { AddressLine2: SENSITIVE_STRING }),
  ...(obj.City && { City: SENSITIVE_STRING }),
  ...(obj.State && { State: SENSITIVE_STRING }),
  ...(obj.CountryCode && { CountryCode: SENSITIVE_STRING }),
  ...(obj.ZipCode && { ZipCode: SENSITIVE_STRING }),
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.Email && { Email: SENSITIVE_STRING }),
  ...(obj.Fax && { Fax: SENSITIVE_STRING }),
  ...(obj.ExtraParams && { ExtraParams: obj.ExtraParams.map((item) => ExtraParamFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetDomainDetailResponseFilterSensitiveLog = (obj: GetDomainDetailResponse): any => ({
  ...obj,
  ...(obj.AdminContact && { AdminContact: SENSITIVE_STRING }),
  ...(obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING }),
  ...(obj.TechContact && { TechContact: SENSITIVE_STRING }),
  ...(obj.AbuseContactEmail && { AbuseContactEmail: SENSITIVE_STRING }),
  ...(obj.AbuseContactPhone && { AbuseContactPhone: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RegisterDomainRequestFilterSensitiveLog = (obj: RegisterDomainRequest): any => ({
  ...obj,
  ...(obj.AdminContact && { AdminContact: SENSITIVE_STRING }),
  ...(obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING }),
  ...(obj.TechContact && { TechContact: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResendContactReachabilityEmailResponseFilterSensitiveLog = (
  obj: ResendContactReachabilityEmailResponse
): any => ({
  ...obj,
  ...(obj.emailAddress && { emailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrieveDomainAuthCodeResponseFilterSensitiveLog = (obj: RetrieveDomainAuthCodeResponse): any => ({
  ...obj,
  ...(obj.AuthCode && { AuthCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TransferDomainRequestFilterSensitiveLog = (obj: TransferDomainRequest): any => ({
  ...obj,
  ...(obj.AuthCode && { AuthCode: SENSITIVE_STRING }),
  ...(obj.AdminContact && { AdminContact: SENSITIVE_STRING }),
  ...(obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING }),
  ...(obj.TechContact && { TechContact: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TransferDomainToAnotherAwsAccountResponseFilterSensitiveLog = (
  obj: TransferDomainToAnotherAwsAccountResponse
): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDomainContactRequestFilterSensitiveLog = (obj: UpdateDomainContactRequest): any => ({
  ...obj,
  ...(obj.AdminContact && { AdminContact: SENSITIVE_STRING }),
  ...(obj.RegistrantContact && { RegistrantContact: SENSITIVE_STRING }),
  ...(obj.TechContact && { TechContact: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDomainNameserversRequestFilterSensitiveLog = (obj: UpdateDomainNameserversRequest): any => ({
  ...obj,
  ...(obj.FIAuthKey && { FIAuthKey: SENSITIVE_STRING }),
});

// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ACMServiceException as __BaseException } from "./ACMServiceException";

/**
 * <p>You do not have access required to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>A key-value pair that identifies or specifies metadata about an ACM resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface AddTagsToCertificateRequest {
  /**
   * <p>String that contains the ARN of the ACM certificate to which the tag is to be applied.
   *       This must be of the form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>The key-value pair that defines the tag. The tag value is optional.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 * @public
 */
export class InvalidArnException extends __BaseException {
  readonly name: "InvalidArnException" = "InvalidArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArnException, __BaseException>) {
    super({
      name: "InvalidArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArnException.prototype);
  }
}

/**
 * <p>An input parameter was invalid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>One or both of the values that make up the key-value pair is not valid. For example, you
 *       cannot specify a tag value that begins with <code>aws:</code>.</p>
 * @public
 */
export class InvalidTagException extends __BaseException {
  readonly name: "InvalidTagException" = "InvalidTagException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagException, __BaseException>) {
    super({
      name: "InvalidTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagException.prototype);
  }
}

/**
 * <p>The specified certificate cannot be found in the caller's account or the caller's account
 *       cannot be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>A specified tag did not comply with an existing tag policy and was rejected.</p>
 * @public
 */
export class TagPolicyException extends __BaseException {
  readonly name: "TagPolicyException" = "TagPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagPolicyException, __BaseException>) {
    super({
      name: "TagPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagPolicyException.prototype);
  }
}

/**
 * <p>The request was denied because it exceeded a quota.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The request contains too many tags. Try the request again with fewer tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const RecordType = {
  CNAME: "CNAME",
} as const;

/**
 * @public
 */
export type RecordType = (typeof RecordType)[keyof typeof RecordType];

/**
 * <p>Contains a DNS record value that you can use to validate ownership or control of a domain.
 *       This is used by the <a>DescribeCertificate</a> action. </p>
 * @public
 */
export interface ResourceRecord {
  /**
   * <p>The name of the DNS record to create in your domain. This is supplied by ACM.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of DNS record. Currently this can be <code>CNAME</code>.</p>
   * @public
   */
  Type: RecordType | undefined;

  /**
   * <p>The value of the CNAME record to add to your DNS database. This is supplied by
   *       ACM.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationMethod = {
  DNS: "DNS",
  EMAIL: "EMAIL",
} as const;

/**
 * @public
 */
export type ValidationMethod = (typeof ValidationMethod)[keyof typeof ValidationMethod];

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  FAILED: "FAILED",
  PENDING_VALIDATION: "PENDING_VALIDATION",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * <p>Contains information about the validation of each domain name in the certificate.</p>
 * @public
 */
export interface DomainValidation {
  /**
   * <p>A fully qualified domain name (FQDN) in the certificate. For example,
   *         <code>www.example.com</code> or <code>example.com</code>. </p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A list of email addresses that ACM used to send domain validation emails.</p>
   * @public
   */
  ValidationEmails?: string[] | undefined;

  /**
   * <p>The domain name that ACM used to send domain validation emails.</p>
   * @public
   */
  ValidationDomain?: string | undefined;

  /**
   * <p>The validation status of the domain name. This can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING_VALIDATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidationStatus?: DomainStatus | undefined;

  /**
   * <p>Contains the CNAME record that you add to your DNS database for domain validation. For
   *       more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">Use DNS to Validate Domain Ownership</a>.</p>
   *          <p>Note: The CNAME information that you need does not include the name of your domain. If you
   *       include  your domain name in the DNS database CNAME record, validation fails.  For example, if
   *       the name is "_a79865eb4cd1a6ab990a45779b4e0b96.yourdomain.com", only
   *       "_a79865eb4cd1a6ab990a45779b4e0b96" must be used.</p>
   * @public
   */
  ResourceRecord?: ResourceRecord | undefined;

  /**
   * <p>Specifies the domain validation method.</p>
   * @public
   */
  ValidationMethod?: ValidationMethod | undefined;
}

/**
 * @public
 * @enum
 */
export const ExtendedKeyUsageName = {
  ANY: "ANY",
  CODE_SIGNING: "CODE_SIGNING",
  CUSTOM: "CUSTOM",
  EMAIL_PROTECTION: "EMAIL_PROTECTION",
  IPSEC_END_SYSTEM: "IPSEC_END_SYSTEM",
  IPSEC_TUNNEL: "IPSEC_TUNNEL",
  IPSEC_USER: "IPSEC_USER",
  NONE: "NONE",
  OCSP_SIGNING: "OCSP_SIGNING",
  TIME_STAMPING: "TIME_STAMPING",
  TLS_WEB_CLIENT_AUTHENTICATION: "TLS_WEB_CLIENT_AUTHENTICATION",
  TLS_WEB_SERVER_AUTHENTICATION: "TLS_WEB_SERVER_AUTHENTICATION",
} as const;

/**
 * @public
 */
export type ExtendedKeyUsageName = (typeof ExtendedKeyUsageName)[keyof typeof ExtendedKeyUsageName];

/**
 * <p>The Extended Key Usage X.509 v3 extension defines one or more purposes for which the
 *       public key can be used. This is in addition to or in place of the basic purposes specified by
 *       the Key Usage extension. </p>
 * @public
 */
export interface ExtendedKeyUsage {
  /**
   * <p>The name of an Extended Key Usage value.</p>
   * @public
   */
  Name?: ExtendedKeyUsageName | undefined;

  /**
   * <p>An object identifier (OID) for the extension value. OIDs are strings of numbers separated
   *       by periods. The following OIDs are defined in RFC 3280 and RFC 5280. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>1.3.6.1.5.5.7.3.1 (TLS_WEB_SERVER_AUTHENTICATION)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1.3.6.1.5.5.7.3.2 (TLS_WEB_CLIENT_AUTHENTICATION)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1.3.6.1.5.5.7.3.3 (CODE_SIGNING)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1.3.6.1.5.5.7.3.4 (EMAIL_PROTECTION)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1.3.6.1.5.5.7.3.8 (TIME_STAMPING)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1.3.6.1.5.5.7.3.9 (OCSP_SIGNING)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1.3.6.1.5.5.7.3.5 (IPSEC_END_SYSTEM)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1.3.6.1.5.5.7.3.6 (IPSEC_TUNNEL)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>1.3.6.1.5.5.7.3.7 (IPSEC_USER)</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  OID?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FailureReason = {
  ADDITIONAL_VERIFICATION_REQUIRED: "ADDITIONAL_VERIFICATION_REQUIRED",
  CAA_ERROR: "CAA_ERROR",
  DOMAIN_NOT_ALLOWED: "DOMAIN_NOT_ALLOWED",
  DOMAIN_VALIDATION_DENIED: "DOMAIN_VALIDATION_DENIED",
  INVALID_PUBLIC_DOMAIN: "INVALID_PUBLIC_DOMAIN",
  NO_AVAILABLE_CONTACTS: "NO_AVAILABLE_CONTACTS",
  OTHER: "OTHER",
  PCA_ACCESS_DENIED: "PCA_ACCESS_DENIED",
  PCA_INVALID_ARGS: "PCA_INVALID_ARGS",
  PCA_INVALID_ARN: "PCA_INVALID_ARN",
  PCA_INVALID_DURATION: "PCA_INVALID_DURATION",
  PCA_INVALID_STATE: "PCA_INVALID_STATE",
  PCA_LIMIT_EXCEEDED: "PCA_LIMIT_EXCEEDED",
  PCA_NAME_CONSTRAINTS_VALIDATION: "PCA_NAME_CONSTRAINTS_VALIDATION",
  PCA_REQUEST_FAILED: "PCA_REQUEST_FAILED",
  PCA_RESOURCE_NOT_FOUND: "PCA_RESOURCE_NOT_FOUND",
  SLR_NOT_FOUND: "SLR_NOT_FOUND",
} as const;

/**
 * @public
 */
export type FailureReason = (typeof FailureReason)[keyof typeof FailureReason];

/**
 * @public
 * @enum
 */
export const KeyAlgorithm = {
  EC_prime256v1: "EC_prime256v1",
  EC_secp384r1: "EC_secp384r1",
  EC_secp521r1: "EC_secp521r1",
  RSA_1024: "RSA_1024",
  RSA_2048: "RSA_2048",
  RSA_3072: "RSA_3072",
  RSA_4096: "RSA_4096",
} as const;

/**
 * @public
 */
export type KeyAlgorithm = (typeof KeyAlgorithm)[keyof typeof KeyAlgorithm];

/**
 * @public
 * @enum
 */
export const KeyUsageName = {
  ANY: "ANY",
  CERTIFICATE_SIGNING: "CERTIFICATE_SIGNING",
  CRL_SIGNING: "CRL_SIGNING",
  CUSTOM: "CUSTOM",
  DATA_ENCIPHERMENT: "DATA_ENCIPHERMENT",
  DECIPHER_ONLY: "DECIPHER_ONLY",
  DIGITAL_SIGNATURE: "DIGITAL_SIGNATURE",
  ENCHIPER_ONLY: "ENCIPHER_ONLY",
  KEY_AGREEMENT: "KEY_AGREEMENT",
  KEY_ENCIPHERMENT: "KEY_ENCIPHERMENT",
  NON_REPUDATION: "NON_REPUDIATION",
} as const;

/**
 * @public
 */
export type KeyUsageName = (typeof KeyUsageName)[keyof typeof KeyUsageName];

/**
 * <p>The Key Usage X.509 v3 extension defines the purpose of the public key contained in the
 *       certificate.</p>
 * @public
 */
export interface KeyUsage {
  /**
   * <p>A string value that contains a Key Usage extension name.</p>
   * @public
   */
  Name?: KeyUsageName | undefined;
}

/**
 * @public
 * @enum
 */
export const CertificateTransparencyLoggingPreference = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type CertificateTransparencyLoggingPreference =
  (typeof CertificateTransparencyLoggingPreference)[keyof typeof CertificateTransparencyLoggingPreference];

/**
 * <p>Structure that contains options for your certificate. Currently, you can use this only to
 *       specify whether to opt in to or out of certificate transparency logging. Some browsers require
 *       that public certificates issued for your domain be recorded in a log. Certificates that are
 *       not logged typically generate a browser error. Transparency makes it possible for you to
 *       detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain.
 *       For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency
 *         Logging</a>. </p>
 * @public
 */
export interface CertificateOptions {
  /**
   * <p>You can opt out of certificate transparency logging by specifying the
   *         <code>DISABLED</code> option. Opt in by specifying <code>ENABLED</code>. </p>
   * @public
   */
  CertificateTransparencyLoggingPreference?: CertificateTransparencyLoggingPreference | undefined;
}

/**
 * @public
 * @enum
 */
export const RenewalEligibility = {
  ELIGIBLE: "ELIGIBLE",
  INELIGIBLE: "INELIGIBLE",
} as const;

/**
 * @public
 */
export type RenewalEligibility = (typeof RenewalEligibility)[keyof typeof RenewalEligibility];

/**
 * @public
 * @enum
 */
export const RenewalStatus = {
  FAILED: "FAILED",
  PENDING_AUTO_RENEWAL: "PENDING_AUTO_RENEWAL",
  PENDING_VALIDATION: "PENDING_VALIDATION",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type RenewalStatus = (typeof RenewalStatus)[keyof typeof RenewalStatus];

/**
 * <p>Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This
 *       structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
 * @public
 */
export interface RenewalSummary {
  /**
   * <p>The status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> of the certificate.</p>
   * @public
   */
  RenewalStatus: RenewalStatus | undefined;

  /**
   * <p>Contains information about the validation of each domain name in the certificate, as it
   *       pertains to ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed
   *         renewal</a>. This is different from the initial validation that occurs as a result of
   *       the <a>RequestCertificate</a> request. This field exists only when the certificate
   *       type is <code>AMAZON_ISSUED</code>.</p>
   * @public
   */
  DomainValidationOptions: DomainValidation[] | undefined;

  /**
   * <p>The reason that a renewal request was unsuccessful.</p>
   * @public
   */
  RenewalStatusReason?: FailureReason | undefined;

  /**
   * <p>The time at which the renewal summary was last updated.</p>
   * @public
   */
  UpdatedAt: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const RevocationReason = {
  AFFILIATION_CHANGED: "AFFILIATION_CHANGED",
  A_A_COMPROMISE: "A_A_COMPROMISE",
  CA_COMPROMISE: "CA_COMPROMISE",
  CERTIFICATE_HOLD: "CERTIFICATE_HOLD",
  CESSATION_OF_OPERATION: "CESSATION_OF_OPERATION",
  KEY_COMPROMISE: "KEY_COMPROMISE",
  PRIVILEGE_WITHDRAWN: "PRIVILEGE_WITHDRAWN",
  REMOVE_FROM_CRL: "REMOVE_FROM_CRL",
  SUPERCEDED: "SUPERCEDED",
  UNSPECIFIED: "UNSPECIFIED",
} as const;

/**
 * @public
 */
export type RevocationReason = (typeof RevocationReason)[keyof typeof RevocationReason];

/**
 * @public
 * @enum
 */
export const CertificateStatus = {
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  ISSUED: "ISSUED",
  PENDING_VALIDATION: "PENDING_VALIDATION",
  REVOKED: "REVOKED",
  VALIDATION_TIMED_OUT: "VALIDATION_TIMED_OUT",
} as const;

/**
 * @public
 */
export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus];

/**
 * @public
 * @enum
 */
export const CertificateType = {
  AMAZON_ISSUED: "AMAZON_ISSUED",
  IMPORTED: "IMPORTED",
  PRIVATE: "PRIVATE",
} as const;

/**
 * @public
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

/**
 * <p>Contains metadata about an ACM certificate. This structure is returned in the response
 *       to a <a>DescribeCertificate</a> request. </p>
 * @public
 */
export interface CertificateDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see
   *         <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in
   *       the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The fully qualified domain name for the certificate, such as www.example.com or
   *       example.com.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>One or more domain names (subject alternative names)
   *       included in the certificate. This
   *       list contains the domain names that are bound to the public key that is contained in the
   *       certificate. The subject alternative names include the canonical domain name (CN) of the
   *       certificate and additional domain names that can be used to connect to the website. </p>
   * @public
   */
  SubjectAlternativeNames?: string[] | undefined;

  /**
   * <p>Contains information about the initial validation of each domain name that occurs as a
   *       result of the <a>RequestCertificate</a> request. This field exists only when the
   *       certificate type is <code>AMAZON_ISSUED</code>. </p>
   * @public
   */
  DomainValidationOptions?: DomainValidation[] | undefined;

  /**
   * <p>The serial number of the certificate.</p>
   * @public
   */
  Serial?: string | undefined;

  /**
   * <p>The name of the entity that is associated with the public key contained in the
   *       certificate.</p>
   * @public
   */
  Subject?: string | undefined;

  /**
   * <p>The name of the certificate authority that issued and signed the certificate.</p>
   * @public
   */
  Issuer?: string | undefined;

  /**
   * <p>The time at which the certificate was requested.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the certificate was issued. This value exists only when the certificate
   *       type is <code>AMAZON_ISSUED</code>. </p>
   * @public
   */
  IssuedAt?: Date | undefined;

  /**
   * <p>The date and time when the certificate was imported. This value exists only when the
   *       certificate type is <code>IMPORTED</code>. </p>
   * @public
   */
  ImportedAt?: Date | undefined;

  /**
   * <p>The status of the certificate.</p>
   *          <p>A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for
   *       any of the reasons given in the troubleshooting topic <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html">Certificate request fails</a>. ACM makes
   *       repeated attempts to validate a certificate for 72 hours and then times out. If a certificate
   *       shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with <a href="https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html">Email validation</a>, and
   *       try again. If validation succeeds, the certificate enters status ISSUED. </p>
   * @public
   */
  Status?: CertificateStatus | undefined;

  /**
   * <p>The time at which the certificate was revoked. This value exists only when the certificate
   *       status is <code>REVOKED</code>. </p>
   * @public
   */
  RevokedAt?: Date | undefined;

  /**
   * <p>The reason the certificate was revoked. This value exists only when the certificate status
   *       is <code>REVOKED</code>. </p>
   * @public
   */
  RevocationReason?: RevocationReason | undefined;

  /**
   * <p>The time before which the certificate is not valid.</p>
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * <p>The time after which the certificate is not valid.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>The algorithm that was used to generate the public-private key pair.</p>
   * @public
   */
  KeyAlgorithm?: KeyAlgorithm | undefined;

  /**
   * <p>The algorithm that was used to sign the certificate.</p>
   * @public
   */
  SignatureAlgorithm?: string | undefined;

  /**
   * <p>A list of ARNs for the Amazon Web Services resources that are using the certificate. A certificate can
   *       be used by multiple Amazon Web Services resources. </p>
   * @public
   */
  InUseBy?: string[] | undefined;

  /**
   * <p>The reason the certificate request failed. This value exists only when the certificate
   *       status is <code>FAILED</code>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting.html#troubleshooting-failed">Certificate Request
   *         Failed</a> in the <i>Certificate Manager User Guide</i>. </p>
   * @public
   */
  FailureReason?: FailureReason | undefined;

  /**
   * <p>The source of the certificate. For certificates provided by ACM, this value is
   *         <code>AMAZON_ISSUED</code>. For certificates that you imported with <a>ImportCertificate</a>, this value is <code>IMPORTED</code>. ACM does not provide
   *         <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for
   *       imported certificates. For more information about the differences between certificates that
   *       you import and those that ACM provides, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the
   *         <i>Certificate Manager User Guide</i>. </p>
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * <p>Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This field
   *       exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
   * @public
   */
  RenewalSummary?: RenewalSummary | undefined;

  /**
   * <p>A list of Key Usage X.509 v3 extension objects. Each object is a string value that
   *       identifies the purpose of the public key contained in the certificate. Possible extension
   *       values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</p>
   * @public
   */
  KeyUsages?: KeyUsage[] | undefined;

  /**
   * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a
   *       purpose for which the certificate public key can be used and consists of a name and an object
   *       identifier (OID). </p>
   * @public
   */
  ExtendedKeyUsages?: ExtendedKeyUsage[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the private certificate authority (CA) that issued the
   *       certificate. This has the following format: </p>
   *          <p>
   *             <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * <p>Specifies whether the certificate is eligible for renewal. At this time, only exported
   *       private certificates can be renewed with the <a>RenewCertificate</a>
   *       command.</p>
   * @public
   */
  RenewalEligibility?: RenewalEligibility | undefined;

  /**
   * <p>Value that specifies whether to add the certificate to a transparency log. Certificate
   *       transparency makes it possible to detect SSL certificates that have been mistakenly or
   *       maliciously issued. A browser might respond to certificate that has not been logged by showing
   *       an error message. The logs are cryptographically secure. </p>
   * @public
   */
  Options?: CertificateOptions | undefined;
}

/**
 * <p>You are trying to update a resource or configuration that is already being created or
 *       updated. Wait for the previous operation to finish and try again.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface DeleteCertificateRequest {
  /**
   * <p>String that contains the ARN of the ACM certificate to be deleted. This must be of the
   *       form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * <p>The certificate is in use by another Amazon Web Services service in the caller's account. Remove the
 *       association and try again.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * @public
 */
export interface DescribeCertificateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate. The ARN must have the following
   *       form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateResponse {
  /**
   * <p>Metadata about an ACM certificate.</p>
   * @public
   */
  Certificate?: CertificateDetail | undefined;
}

/**
 * @public
 */
export interface ExportCertificateRequest {
  /**
   * <p>An Amazon Resource Name (ARN) of the issued certificate. This must be of the form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>Passphrase to associate with the encrypted exported private key. </p>
   *          <note>
   *             <p>When creating your passphrase, you can use any ASCII character except #, $, or %.</p>
   *          </note>
   *          <p>If you want to later decrypt the private key, you must have the passphrase. You can use
   *       the following OpenSSL command to decrypt a private key. After entering the command, you are
   *       prompted for the passphrase.</p>
   *          <p>
   *             <code>openssl rsa -in encrypted_key.pem -out decrypted_key.pem</code>
   *          </p>
   * @public
   */
  Passphrase: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ExportCertificateResponse {
  /**
   * <p>The base64 PEM-encoded certificate.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The base64 PEM-encoded certificate chain. This does not include the certificate that you
   *       are exporting.</p>
   * @public
   */
  CertificateChain?: string | undefined;

  /**
   * <p>The encrypted private key associated with the public key in the certificate. The key is
   *       output in PKCS #8 format and is base64 PEM-encoded. </p>
   * @public
   */
  PrivateKey?: string | undefined;
}

/**
 * <p>The certificate request is in process and the certificate in your account has not yet been
 *       issued.</p>
 * @public
 */
export class RequestInProgressException extends __BaseException {
  readonly name: "RequestInProgressException" = "RequestInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestInProgressException, __BaseException>) {
    super({
      name: "RequestInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestInProgressException.prototype);
  }
}

/**
 * <p>Object containing expiration events options associated with an Amazon Web Services account.</p>
 * @public
 */
export interface ExpiryEventsConfiguration {
  /**
   * <p>Specifies the number of days prior to certificate expiration when ACM starts generating
   *         <code>EventBridge</code> events. ACM sends one event per day per certificate until the
   *       certificate expires. By default, accounts receive events starting 45 days before certificate
   *       expiration.</p>
   * @public
   */
  DaysBeforeExpiry?: number | undefined;
}

/**
 * @public
 */
export interface GetAccountConfigurationResponse {
  /**
   * <p>Expiration events configuration options associated with the Amazon Web Services account.</p>
   * @public
   */
  ExpiryEvents?: ExpiryEventsConfiguration | undefined;
}

/**
 * @public
 */
export interface GetCertificateRequest {
  /**
   * <p>String that contains a certificate ARN in the following format:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateResponse {
  /**
   * <p>The ACM-issued certificate corresponding to the ARN specified as input.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>Certificates forming the requested certificate's chain of trust. The chain consists of the
   *       certificate of the issuing CA and the intermediate certificates of any other subordinate CAs.
   *     </p>
   * @public
   */
  CertificateChain?: string | undefined;
}

/**
 * @public
 */
export interface ImportCertificateRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name
   *         (ARN)</a> of an imported certificate to replace. To import a new certificate, omit this
   *       field. </p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The certificate to import.</p>
   * @public
   */
  Certificate: Uint8Array | undefined;

  /**
   * <p>The private key that matches the public key in the certificate.</p>
   * @public
   */
  PrivateKey: Uint8Array | undefined;

  /**
   * <p>The PEM encoded certificate chain.</p>
   * @public
   */
  CertificateChain?: Uint8Array | undefined;

  /**
   * <p>One or more resource tags to associate with the imported certificate. </p>
   *          <p>Note: You cannot apply tags when reimporting a certificate.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportCertificateResponse {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name
   *         (ARN)</a> of the imported certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * <p>An ACM quota has been exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>One or more of of request parameters specified is not valid.</p>
 * @public
 */
export class InvalidArgsException extends __BaseException {
  readonly name: "InvalidArgsException" = "InvalidArgsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgsException, __BaseException>) {
    super({
      name: "InvalidArgsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgsException.prototype);
  }
}

/**
 * <p>This structure can be used in the <a>ListCertificates</a> action to filter the
 *       output of the certificate list. </p>
 * @public
 */
export interface Filters {
  /**
   * <p>Specify one or more <a>ExtendedKeyUsage</a> extension values.</p>
   * @public
   */
  extendedKeyUsage?: ExtendedKeyUsageName[] | undefined;

  /**
   * <p>Specify one or more <a>KeyUsage</a> extension values.</p>
   * @public
   */
  keyUsage?: KeyUsageName[] | undefined;

  /**
   * <p>Specify one or more algorithms that can be used to generate key pairs.</p>
   *          <p>Default filtering returns only <code>RSA_1024</code> and <code>RSA_2048</code>
   *       certificates that have at least one domain. To return other certificate types, provide the
   *       desired type signatures in a comma-separated list. For example, <code>"keyTypes":
   *         ["RSA_2048","RSA_4096"]</code> returns both <code>RSA_2048</code> and <code>RSA_4096</code>
   *       certificates.</p>
   * @public
   */
  keyTypes?: KeyAlgorithm[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SortBy = {
  CREATED_AT: "CREATED_AT",
} as const;

/**
 * @public
 */
export type SortBy = (typeof SortBy)[keyof typeof SortBy];

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
 */
export interface ListCertificatesRequest {
  /**
   * <p>Filter the certificate list by status value.</p>
   * @public
   */
  CertificateStatuses?: CertificateStatus[] | undefined;

  /**
   * <p>Filter the certificate list. For more information, see the <a>Filters</a>
   *       structure.</p>
   * @public
   */
  Includes?: Filters | undefined;

  /**
   * <p>Use this parameter only when paginating results and only in a subsequent request after you
   *       receive a response with truncated results. Set it to the value of <code>NextToken</code> from
   *       the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *       return in the response. If additional items exist beyond the number you specify, the
   *         <code>NextToken</code> element is sent in the response. Use this <code>NextToken</code>
   *       value in a subsequent request to retrieve additional items.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Specifies the field to sort results by. If you specify <code>SortBy</code>, you must also
   *       specify <code>SortOrder</code>.</p>
   * @public
   */
  SortBy?: SortBy | undefined;

  /**
   * <p>Specifies the order of sorted results. If you specify <code>SortOrder</code>, you must
   *       also specify <code>SortBy</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>This structure is returned in the response object of <a>ListCertificates</a>
 *       action. </p>
 * @public
 */
export interface CertificateSummary {
  /**
   * <p>Amazon Resource Name (ARN) of the certificate. This is of the form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>Fully qualified domain name (FQDN), such as www.example.com or example.com, for the
   *       certificate.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>One or more domain names (subject alternative names)
   *       included in the certificate. This
   *       list contains the domain names that are bound to the public key that is contained in the
   *       certificate. The subject alternative names include the canonical domain name (CN) of the
   *       certificate and additional domain names that can be used to connect to the website. </p>
   *          <p>When called by <a>ListCertificates</a>, this parameter will only return the first 100 subject alternative
   *       names included in the certificate. To display the full list of subject alternative names, use
   *       <a>DescribeCertificate</a>.</p>
   * @public
   */
  SubjectAlternativeNameSummaries?: string[] | undefined;

  /**
   * <p>When called by <a>ListCertificates</a>, indicates whether the full list of subject alternative names has
   *       been included in the response. If false, the response includes all of the subject alternative
   *       names included in the certificate. If true, the response only includes the first 100 subject
   *       alternative names included in the certificate. To display the full list of subject alternative
   *       names, use <a>DescribeCertificate</a>.</p>
   * @public
   */
  HasAdditionalSubjectAlternativeNames?: boolean | undefined;

  /**
   * <p>The status of the certificate.</p>
   *          <p>A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for
   *       any of the reasons given in the troubleshooting topic <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting-failed.html">Certificate request fails</a>. ACM makes
   *       repeated attempts to validate a certificate for 72 hours and then times out. If a certificate
   *       shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with <a href="https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html">DNS validation</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html">Email validation</a>, and
   *       try again. If validation succeeds, the certificate enters status ISSUED. </p>
   * @public
   */
  Status?: CertificateStatus | undefined;

  /**
   * <p>The source of the certificate. For certificates provided by ACM, this value is
   *         <code>AMAZON_ISSUED</code>. For certificates that you imported with <a>ImportCertificate</a>, this value is <code>IMPORTED</code>. ACM does not provide
   *         <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for
   *       imported certificates. For more information about the differences between certificates that
   *       you import and those that ACM provides, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the
   *         <i>Certificate Manager User Guide</i>. </p>
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * <p>The algorithm that was used to generate the public-private key pair.</p>
   * @public
   */
  KeyAlgorithm?: KeyAlgorithm | undefined;

  /**
   * <p>A list of Key Usage X.509 v3 extension objects. Each object is a string value that
   *       identifies the purpose of the public key contained in the certificate. Possible extension
   *       values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</p>
   * @public
   */
  KeyUsages?: KeyUsageName[] | undefined;

  /**
   * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a
   *       purpose for which the certificate public key can be used and consists of a name and an object
   *       identifier (OID). </p>
   * @public
   */
  ExtendedKeyUsages?: ExtendedKeyUsageName[] | undefined;

  /**
   * <p>Indicates whether the certificate is currently in use by any Amazon Web Services resources.</p>
   * @public
   */
  InUse?: boolean | undefined;

  /**
   * <p>Indicates whether the certificate has been exported. This value exists only when the
   *       certificate type is <code>PRIVATE</code>.</p>
   * @public
   */
  Exported?: boolean | undefined;

  /**
   * <p>Specifies whether the certificate is eligible for renewal. At this time, only exported
   *       private certificates can be renewed with the <a>RenewCertificate</a>
   *       command.</p>
   * @public
   */
  RenewalEligibility?: RenewalEligibility | undefined;

  /**
   * <p>The time before which the certificate is not valid.</p>
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * <p>The time after which the certificate is not valid.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>The time at which the certificate was requested.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The time at which the certificate was issued. This value exists only when the certificate
   *       type is <code>AMAZON_ISSUED</code>. </p>
   * @public
   */
  IssuedAt?: Date | undefined;

  /**
   * <p>The date and time when the certificate was imported. This value exists only when the
   *       certificate type is <code>IMPORTED</code>. </p>
   * @public
   */
  ImportedAt?: Date | undefined;

  /**
   * <p>The time at which the certificate was revoked. This value exists only when the certificate
   *       status is <code>REVOKED</code>. </p>
   * @public
   */
  RevokedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCertificatesResponse {
  /**
   * <p>When the list is truncated, this value is present and contains the value to use for the
   *         <code>NextToken</code> parameter in a subsequent pagination request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of ACM certificates.</p>
   * @public
   */
  CertificateSummaryList?: CertificateSummary[] | undefined;
}

/**
 * <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface ListTagsForCertificateRequest {
  /**
   * <p>String that contains the ARN of the ACM certificate for which you want to list the tags.
   *       This must have the following form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForCertificateResponse {
  /**
   * <p>The key-value pairs that define the applied tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAccountConfigurationRequest {
  /**
   * <p>Specifies expiration events associated with an account.</p>
   * @public
   */
  ExpiryEvents?: ExpiryEventsConfiguration | undefined;

  /**
   * <p>Customer-chosen string used to distinguish between calls to
   *         <code>PutAccountConfiguration</code>. Idempotency tokens time out after one hour. If you
   *       call <code>PutAccountConfiguration</code> multiple times with the same unexpired idempotency
   *       token, ACM treats it as the same request and returns the original result. If you change the
   *       idempotency token for each call, ACM treats each call as a new request.</p>
   * @public
   */
  IdempotencyToken: string | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromCertificateRequest {
  /**
   * <p>String that contains the ARN of the ACM Certificate with one or more tags that you want
   *       to remove. This must be of the form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>The key-value pair that defines the tag to remove.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface RenewCertificateRequest {
  /**
   * <p>String that contains the ARN of the ACM certificate to be renewed. This must be of the
   *       form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * <p>One or more values in the <a>DomainValidationOption</a> structure is
 *       incorrect.</p>
 * @public
 */
export class InvalidDomainValidationOptionsException extends __BaseException {
  readonly name: "InvalidDomainValidationOptionsException" = "InvalidDomainValidationOptionsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDomainValidationOptionsException, __BaseException>) {
    super({
      name: "InvalidDomainValidationOptionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDomainValidationOptionsException.prototype);
  }
}

/**
 * <p>Contains information about the domain names that you want ACM to use to send you emails
 *       that enable you to validate domain ownership.</p>
 * @public
 */
export interface DomainValidationOption {
  /**
   * <p>A fully qualified domain name (FQDN) in the certificate request.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name that you want ACM to use to send you validation emails. This domain name
   *       is the suffix of the email addresses that you want ACM to use. This must be the same as the
   *         <code>DomainName</code> value or a superdomain of the <code>DomainName</code> value. For
   *       example, if you request a certificate for <code>testing.example.com</code>, you can specify
   *         <code>example.com</code> for this value. In that case, ACM sends domain validation emails
   *       to the following five addresses:</p>
   *          <ul>
   *             <li>
   *                <p>admin@example.com</p>
   *             </li>
   *             <li>
   *                <p>administrator@example.com</p>
   *             </li>
   *             <li>
   *                <p>hostmaster@example.com</p>
   *             </li>
   *             <li>
   *                <p>postmaster@example.com</p>
   *             </li>
   *             <li>
   *                <p>webmaster@example.com</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidationDomain: string | undefined;
}

/**
 * @public
 */
export interface RequestCertificateRequest {
  /**
   * <p>Fully qualified domain name (FQDN), such as www.example.com, that you want to secure with
   *       an ACM certificate. Use an asterisk (*) to create a wildcard certificate that protects
   *       several sites in the same domain. For example, *.example.com protects www.example.com,
   *       site.example.com, and images.example.com. </p>
   *          <p>In compliance with <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC
   *         5280</a>, the length of the domain name (technically, the Common Name) that you provide
   *       cannot exceed 64 octets (characters), including periods. To add a longer domain name, specify it in the Subject Alternative
   *       Name field, which supports names up to 253 octets in length. </p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The method you want to use if you are requesting a public certificate to validate that you
   *       own or control domain. You can <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">validate with DNS</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">validate with
   *         email</a>. We recommend that you use DNS validation. </p>
   * @public
   */
  ValidationMethod?: ValidationMethod | undefined;

  /**
   * <p>Additional FQDNs to be included in the Subject Alternative Name extension of the ACM
   *       certificate. For example, add the name www.example.net to a certificate for which the
   *         <code>DomainName</code> field is www.example.com if users can reach your site by using
   *       either name. The maximum number of domain names that you can add to an ACM certificate is
   *       100. However, the initial quota is 10 domain names. If you need more than 10 names, you must
   *       request a quota increase. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html">Quotas</a>.</p>
   *          <p> The maximum length of a SAN DNS name is 253 octets. The name is made up of multiple
   *       labels separated by periods. No label can be longer than 63 octets. Consider the following
   *       examples: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>(63 octets).(63 octets).(63 octets).(61 octets)</code> is legal because the
   *           total length is 253 octets (63+1+63+1+63+1+61) and no label exceeds 63 octets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>(64 octets).(63 octets).(63 octets).(61 octets)</code> is not legal because the
   *           total length exceeds 253 octets (64+1+63+1+63+1+61) and the first label exceeds 63
   *           octets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>(63 octets).(63 octets).(63 octets).(62 octets)</code> is not legal because the
   *           total length of the DNS name (63+1+63+1+63+1+62) exceeds 253 octets.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SubjectAlternativeNames?: string[] | undefined;

  /**
   * <p>Customer chosen string that can be used to distinguish between calls to
   *         <code>RequestCertificate</code>. Idempotency tokens time out after one hour. Therefore, if
   *       you call <code>RequestCertificate</code> multiple times with the same idempotency token within
   *       one hour, ACM recognizes that you are requesting only one certificate and will issue only
   *       one. If you change the idempotency token for each call, ACM recognizes that you are
   *       requesting multiple certificates.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>The domain name that you want ACM to use to send you emails so that you can validate
   *       domain ownership.</p>
   * @public
   */
  DomainValidationOptions?: DomainValidationOption[] | undefined;

  /**
   * <p>Currently, you can use this parameter to specify whether to add the certificate to a
   *       certificate transparency log. Certificate transparency makes it possible to detect SSL/TLS
   *       certificates that have been mistakenly or maliciously issued. Certificates that have not been
   *       logged typically produce an error message in a browser. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency">Opting Out of Certificate Transparency Logging</a>.</p>
   * @public
   */
  Options?: CertificateOptions | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used
   *       to issue the certificate. If you do not provide an ARN and you are trying to request a private
   *       certificate, ACM will attempt to issue a public certificate. For more information about
   *       private CAs, see the <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaWelcome.html">Amazon Web Services Private Certificate Authority</a> user guide. The ARN must have the following form: </p>
   *          <p>
   *             <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * <p>One or more resource tags to associate with the certificate.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies the algorithm of the public and private key pair that your certificate uses to
   *       encrypt data. RSA is the default key algorithm for ACM certificates. Elliptic Curve Digital
   *       Signature Algorithm (ECDSA) keys are smaller, offering security comparable to RSA keys but
   *       with greater computing efficiency. However, ECDSA is not supported by all network clients.
   *       Some Amazon Web Services services may require RSA keys, or only support ECDSA keys of a particular size,
   *       while others allow the use of either RSA and ECDSA keys to ensure that compatibility is not
   *       broken. Check the requirements for the Amazon Web Services service where you plan to deploy your
   *       certificate. For more information about selecting an algorithm, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate.html#algorithms">Key
   *         algorithms</a>.</p>
   *          <note>
   *             <p>Algorithms supported for an ACM certificate request include: </p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>RSA_2048</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>EC_prime256v1</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>EC_secp384r1</code>
   *                   </p>
   *                </li>
   *             </ul>
   *             <p>Other listed algorithms are for imported certificates only. </p>
   *          </note>
   *          <note>
   *             <p>When you request a private PKI certificate signed by a CA from Amazon Web Services Private CA, the
   *       specified signing algorithm family (RSA or ECDSA) must match the algorithm family of
   *       the CA's secret key.</p>
   *          </note>
   *          <p>Default: RSA_2048</p>
   * @public
   */
  KeyAlgorithm?: KeyAlgorithm | undefined;
}

/**
 * @public
 */
export interface RequestCertificateResponse {
  /**
   * <p>String that contains the ARN of the issued certificate. This must be of the form:</p>
   *          <p>
   *             <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * <p>Processing has reached an invalid state.</p>
 * @public
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
  }
}

/**
 * @public
 */
export interface ResendValidationEmailRequest {
  /**
   * <p>String that contains the ARN of the requested certificate. The certificate ARN is
   *       generated and returned by the <a>RequestCertificate</a> action as soon as the
   *       request is made. By default, using this parameter causes email to be sent to all top-level
   *       domains you specified in the certificate request. The ARN must be of the form: </p>
   *          <p>
   *             <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the certificate that needs to be
   *       validated.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The base validation domain that will act as the suffix of the email addresses that are
   *       used to send the emails. This must be the same as the <code>Domain</code> value or a
   *       superdomain of the <code>Domain</code> value. For example, if you requested a certificate for
   *         <code>site.subdomain.example.com</code> and specify a <b>ValidationDomain</b> of <code>subdomain.example.com</code>, ACM sends email to the
   *       domain registrant, technical contact, and administrative contact in WHOIS and the following
   *       five addresses:</p>
   *          <ul>
   *             <li>
   *                <p>admin@subdomain.example.com</p>
   *             </li>
   *             <li>
   *                <p>administrator@subdomain.example.com</p>
   *             </li>
   *             <li>
   *                <p>hostmaster@subdomain.example.com</p>
   *             </li>
   *             <li>
   *                <p>postmaster@subdomain.example.com</p>
   *             </li>
   *             <li>
   *                <p>webmaster@subdomain.example.com</p>
   *             </li>
   *          </ul>
   * @public
   */
  ValidationDomain: string | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateOptionsRequest {
  /**
   * <p>ARN of the requested certificate to update. This must be of the form:</p>
   *          <p>
   *             <code>arn:aws:acm:us-east-1:<i>account</i>:certificate/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   *          </p>
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * <p>Use to update the options for your certificate. Currently, you can specify whether to add
   *       your certificate to a transparency log. Certificate transparency makes it possible to detect
   *       SSL/TLS certificates that have been mistakenly or maliciously issued. Certificates that have
   *       not been logged typically produce an error message in a browser. </p>
   * @public
   */
  Options: CertificateOptions | undefined;
}

/**
 * @internal
 */
export const ExportCertificateRequestFilterSensitiveLog = (obj: ExportCertificateRequest): any => ({
  ...obj,
  ...(obj.Passphrase && { Passphrase: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExportCertificateResponseFilterSensitiveLog = (obj: ExportCertificateResponse): any => ({
  ...obj,
  ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportCertificateRequestFilterSensitiveLog = (obj: ImportCertificateRequest): any => ({
  ...obj,
  ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING }),
});

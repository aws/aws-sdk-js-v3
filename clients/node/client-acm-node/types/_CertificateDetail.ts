import {
  _DomainValidation,
  _UnmarshalledDomainValidation
} from "./_DomainValidation";
import {
  _RenewalSummary,
  _UnmarshalledRenewalSummary
} from "./_RenewalSummary";
import { _KeyUsage, _UnmarshalledKeyUsage } from "./_KeyUsage";
import {
  _ExtendedKeyUsage,
  _UnmarshalledExtendedKeyUsage
} from "./_ExtendedKeyUsage";
import {
  _CertificateOptions,
  _UnmarshalledCertificateOptions
} from "./_CertificateOptions";

/**
 * <p>Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request. </p>
 */
export interface _CertificateDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The fully qualified domain name for the certificate, such as www.example.com or example.com.</p>
   */
  DomainName?: string;

  /**
   * <p>One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. </p>
   */
  SubjectAlternativeNames?: Array<string> | Iterable<string>;

  /**
   * <p>Contains information about the initial validation of each domain name that occurs as a result of the <a>RequestCertificate</a> request. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
   */
  DomainValidationOptions?:
    | Array<_DomainValidation>
    | Iterable<_DomainValidation>;

  /**
   * <p>The serial number of the certificate.</p>
   */
  Serial?: string;

  /**
   * <p>The name of the entity that is associated with the public key contained in the certificate.</p>
   */
  Subject?: string;

  /**
   * <p>The name of the certificate authority that issued and signed the certificate.</p>
   */
  Issuer?: string;

  /**
   * <p>The time at which the certificate was requested. This value exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
   */
  CreatedAt?: Date | string | number;

  /**
   * <p>The time at which the certificate was issued. This value exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
   */
  IssuedAt?: Date | string | number;

  /**
   * <p>The date and time at which the certificate was imported. This value exists only when the certificate type is <code>IMPORTED</code>. </p>
   */
  ImportedAt?: Date | string | number;

  /**
   * <p>The status of the certificate.</p>
   */
  Status?:
    | "PENDING_VALIDATION"
    | "ISSUED"
    | "INACTIVE"
    | "EXPIRED"
    | "VALIDATION_TIMED_OUT"
    | "REVOKED"
    | "FAILED"
    | string;

  /**
   * <p>The time at which the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. </p>
   */
  RevokedAt?: Date | string | number;

  /**
   * <p>The reason the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. </p>
   */
  RevocationReason?:
    | "UNSPECIFIED"
    | "KEY_COMPROMISE"
    | "CA_COMPROMISE"
    | "AFFILIATION_CHANGED"
    | "SUPERCEDED"
    | "CESSATION_OF_OPERATION"
    | "CERTIFICATE_HOLD"
    | "REMOVE_FROM_CRL"
    | "PRIVILEGE_WITHDRAWN"
    | "A_A_COMPROMISE"
    | string;

  /**
   * <p>The time before which the certificate is not valid.</p>
   */
  NotBefore?: Date | string | number;

  /**
   * <p>The time after which the certificate is not valid.</p>
   */
  NotAfter?: Date | string | number;

  /**
   * <p>The algorithm that was used to generate the public-private key pair.</p>
   */
  KeyAlgorithm?:
    | "RSA_2048"
    | "RSA_1024"
    | "RSA_4096"
    | "EC_prime256v1"
    | "EC_secp384r1"
    | "EC_secp521r1"
    | string;

  /**
   * <p>The algorithm that was used to sign the certificate.</p>
   */
  SignatureAlgorithm?: string;

  /**
   * <p>A list of ARNs for the AWS resources that are using the certificate. A certificate can be used by multiple AWS resources. </p>
   */
  InUseBy?: Array<string> | Iterable<string>;

  /**
   * <p>The reason the certificate request failed. This value exists only when the certificate status is <code>FAILED</code>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting.html#troubleshooting-failed">Certificate Request Failed</a> in the <i>AWS Certificate Manager User Guide</i>. </p>
   */
  FailureReason?:
    | "NO_AVAILABLE_CONTACTS"
    | "ADDITIONAL_VERIFICATION_REQUIRED"
    | "DOMAIN_NOT_ALLOWED"
    | "INVALID_PUBLIC_DOMAIN"
    | "DOMAIN_VALIDATION_DENIED"
    | "CAA_ERROR"
    | "PCA_LIMIT_EXCEEDED"
    | "PCA_INVALID_ARN"
    | "PCA_INVALID_STATE"
    | "PCA_REQUEST_FAILED"
    | "PCA_RESOURCE_NOT_FOUND"
    | "PCA_INVALID_ARGS"
    | "PCA_INVALID_DURATION"
    | "PCA_ACCESS_DENIED"
    | "OTHER"
    | string;

  /**
   * <p>The source of the certificate. For certificates provided by ACM, this value is <code>AMAZON_ISSUED</code>. For certificates that you imported with <a>ImportCertificate</a>, this value is <code>IMPORTED</code>. ACM does not provide <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the <i>AWS Certificate Manager User Guide</i>. </p>
   */
  Type?: "IMPORTED" | "AMAZON_ISSUED" | "PRIVATE" | string;

  /**
   * <p>Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
   */
  RenewalSummary?: _RenewalSummary;

  /**
   * <p>A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</p>
   */
  KeyUsages?: Array<_KeyUsage> | Iterable<_KeyUsage>;

  /**
   * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID). </p>
   */
  ExtendedKeyUsages?: Array<_ExtendedKeyUsage> | Iterable<_ExtendedKeyUsage>;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACM PCA private certificate authority (CA) that issued the certificate. This has the following format: </p> <p> <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code> </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the <a>RenewCertificate</a> command.</p>
   */
  RenewalEligibility?: "ELIGIBLE" | "INELIGIBLE" | string;

  /**
   * <p>Value that specifies whether to add the certificate to a transparency log. Certificate transparency makes it possible to detect SSL certificates that have been mistakenly or maliciously issued. A browser might respond to certificate that has not been logged by showing an error message. The logs are cryptographically secure. </p>
   */
  Options?: _CertificateOptions;
}

export interface _UnmarshalledCertificateDetail extends _CertificateDetail {
  /**
   * <p>One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. </p>
   */
  SubjectAlternativeNames?: Array<string>;

  /**
   * <p>Contains information about the initial validation of each domain name that occurs as a result of the <a>RequestCertificate</a> request. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
   */
  DomainValidationOptions?: Array<_UnmarshalledDomainValidation>;

  /**
   * <p>The time at which the certificate was requested. This value exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>The time at which the certificate was issued. This value exists only when the certificate type is <code>AMAZON_ISSUED</code>. </p>
   */
  IssuedAt?: Date;

  /**
   * <p>The date and time at which the certificate was imported. This value exists only when the certificate type is <code>IMPORTED</code>. </p>
   */
  ImportedAt?: Date;

  /**
   * <p>The time at which the certificate was revoked. This value exists only when the certificate status is <code>REVOKED</code>. </p>
   */
  RevokedAt?: Date;

  /**
   * <p>The time before which the certificate is not valid.</p>
   */
  NotBefore?: Date;

  /**
   * <p>The time after which the certificate is not valid.</p>
   */
  NotAfter?: Date;

  /**
   * <p>A list of ARNs for the AWS resources that are using the certificate. A certificate can be used by multiple AWS resources. </p>
   */
  InUseBy?: Array<string>;

  /**
   * <p>Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
   */
  RenewalSummary?: _UnmarshalledRenewalSummary;

  /**
   * <p>A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</p>
   */
  KeyUsages?: Array<_UnmarshalledKeyUsage>;

  /**
   * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID). </p>
   */
  ExtendedKeyUsages?: Array<_UnmarshalledExtendedKeyUsage>;

  /**
   * <p>Value that specifies whether to add the certificate to a transparency log. Certificate transparency makes it possible to detect SSL certificates that have been mistakenly or maliciously issued. A browser might respond to certificate that has not been logged by showing an error message. The logs are cryptographically secure. </p>
   */
  Options?: _UnmarshalledCertificateOptions;
}

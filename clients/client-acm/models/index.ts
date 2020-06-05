import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AddTagsToCertificateRequest {
  __type?: "AddTagsToCertificateRequest";
  /**
   * <p>String that contains the ARN of the ACM certificate to which the tag is to be applied.
   *       This must be of the form:</p>
   *
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>. </p>
   */
  CertificateArn: string | undefined;

  /**
   * <p>The key-value pair that defines the tag. The tag value is optional.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsToCertificateRequest {
  export const filterSensitiveLog = (
    obj: AddTagsToCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToCertificateRequest =>
    __isa(o, "AddTagsToCertificateRequest");
}

/**
 * <p>Contains metadata about an ACM certificate. This structure is returned in the response
 *       to a <a>DescribeCertificate</a> request. </p>
 */
export interface CertificateDetail {
  __type?: "CertificateDetail";
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see
   *         <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *         Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the ACM PCA private certificate authority (CA) that issued
   *       the certificate. This has the following format: </p>
   *          <p>
   *             <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>The time at which the certificate was requested. This value exists only when the
   *       certificate type is <code>AMAZON_ISSUED</code>. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>The fully qualified domain name for the certificate, such as www.example.com or
   *       example.com.</p>
   */
  DomainName?: string;

  /**
   * <p>Contains information about the initial validation of each domain name that occurs as a
   *       result of the <a>RequestCertificate</a> request. This field exists only when the
   *       certificate type is <code>AMAZON_ISSUED</code>. </p>
   */
  DomainValidationOptions?: DomainValidation[];

  /**
   * <p>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a
   *       purpose for which the certificate public key can be used and consists of a name and an object
   *       identifier (OID). </p>
   */
  ExtendedKeyUsages?: ExtendedKeyUsage[];

  /**
   * <p>The reason the certificate request failed. This value exists only when the certificate
   *       status is <code>FAILED</code>. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/troubleshooting.html#troubleshooting-failed">Certificate Request
   *         Failed</a> in the <i>AWS Certificate Manager User Guide</i>. </p>
   */
  FailureReason?: FailureReason | string;

  /**
   * <p>The date and time at which the certificate was imported. This value exists only when the
   *       certificate type is <code>IMPORTED</code>. </p>
   */
  ImportedAt?: Date;

  /**
   * <p>A list of ARNs for the AWS resources that are using the certificate. A certificate can
   *       be used by multiple AWS resources. </p>
   */
  InUseBy?: string[];

  /**
   * <p>The time at which the certificate was issued. This value exists only when the certificate
   *       type is <code>AMAZON_ISSUED</code>. </p>
   */
  IssuedAt?: Date;

  /**
   * <p>The name of the certificate authority that issued and signed the certificate.</p>
   */
  Issuer?: string;

  /**
   * <p>The algorithm that was used to generate the public-private key pair.</p>
   */
  KeyAlgorithm?: KeyAlgorithm | string;

  /**
   * <p>A list of Key Usage X.509 v3 extension objects. Each object is a string value that
   *       identifies the purpose of the public key contained in the certificate. Possible extension
   *       values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</p>
   */
  KeyUsages?: KeyUsage[];

  /**
   * <p>The time after which the certificate is not valid.</p>
   */
  NotAfter?: Date;

  /**
   * <p>The time before which the certificate is not valid.</p>
   */
  NotBefore?: Date;

  /**
   * <p>Value that specifies whether to add the certificate to a transparency log. Certificate
   *       transparency makes it possible to detect SSL certificates that have been mistakenly or
   *       maliciously issued. A browser might respond to certificate that has not been logged by showing
   *       an error message. The logs are cryptographically secure. </p>
   */
  Options?: CertificateOptions;

  /**
   * <p>Specifies whether the certificate is eligible for renewal. At this time, only exported
   *       private certificates can be renewed with the <a>RenewCertificate</a>
   *       command.</p>
   */
  RenewalEligibility?: RenewalEligibility | string;

  /**
   * <p>Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This field
   *       exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
   */
  RenewalSummary?: RenewalSummary;

  /**
   * <p>The reason the certificate was revoked. This value exists only when the certificate status
   *       is <code>REVOKED</code>. </p>
   */
  RevocationReason?: RevocationReason | string;

  /**
   * <p>The time at which the certificate was revoked. This value exists only when the certificate
   *       status is <code>REVOKED</code>. </p>
   */
  RevokedAt?: Date;

  /**
   * <p>The serial number of the certificate.</p>
   */
  Serial?: string;

  /**
   * <p>The algorithm that was used to sign the certificate.</p>
   */
  SignatureAlgorithm?: string;

  /**
   * <p>The status of the certificate.</p>
   */
  Status?: CertificateStatus | string;

  /**
   * <p>The name of the entity that is associated with the public key contained in the
   *       certificate.</p>
   */
  Subject?: string;

  /**
   * <p>One or more domain names (subject alternative names) included in the certificate. This
   *       list contains the domain names that are bound to the public key that is contained in the
   *       certificate. The subject alternative names include the canonical domain name (CN) of the
   *       certificate and additional domain names that can be used to connect to the website. </p>
   */
  SubjectAlternativeNames?: string[];

  /**
   * <p>The source of the certificate. For certificates provided by ACM, this value is
   *         <code>AMAZON_ISSUED</code>. For certificates that you imported with <a>ImportCertificate</a>, this value is <code>IMPORTED</code>. ACM does not provide
   *         <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for
   *       imported certificates. For more information about the differences between certificates that
   *       you import and those that ACM provides, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html">Importing Certificates</a> in the
   *         <i>AWS Certificate Manager User Guide</i>. </p>
   */
  Type?: CertificateType | string;
}

export namespace CertificateDetail {
  export const filterSensitiveLog = (obj: CertificateDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateDetail =>
    __isa(o, "CertificateDetail");
}

/**
 * <p>Structure that contains options for your certificate. Currently, you can use this only to
 *       specify whether to opt in to or out of certificate transparency logging. Some browsers require
 *       that public certificates issued for your domain be recorded in a log. Certificates that are
 *       not logged typically generate a browser error. Transparency makes it possible for you to
 *       detect SSL/TLS certificates that have been mistakenly or maliciously issued for your domain.
 *       For general information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency">Certificate Transparency
 *         Logging</a>. </p>
 */
export interface CertificateOptions {
  __type?: "CertificateOptions";
  /**
   * <p>You can opt out of certificate transparency logging by specifying the
   *         <code>DISABLED</code> option. Opt in by specifying <code>ENABLED</code>. </p>
   */
  CertificateTransparencyLoggingPreference?:
    | CertificateTransparencyLoggingPreference
    | string;
}

export namespace CertificateOptions {
  export const filterSensitiveLog = (obj: CertificateOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateOptions =>
    __isa(o, "CertificateOptions");
}

export enum CertificateStatus {
  EXPIRED = "EXPIRED",
  FAILED = "FAILED",
  INACTIVE = "INACTIVE",
  ISSUED = "ISSUED",
  PENDING_VALIDATION = "PENDING_VALIDATION",
  REVOKED = "REVOKED",
  VALIDATION_TIMED_OUT = "VALIDATION_TIMED_OUT"
}

/**
 * <p>This structure is returned in the response object of <a>ListCertificates</a>
 *       action. </p>
 */
export interface CertificateSummary {
  __type?: "CertificateSummary";
  /**
   * <p>Amazon Resource Name (ARN) of the certificate. This is of the form:</p>
   *
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>. </p>
   */
  CertificateArn?: string;

  /**
   * <p>Fully qualified domain name (FQDN), such as www.example.com or example.com, for the
   *       certificate.</p>
   */
  DomainName?: string;
}

export namespace CertificateSummary {
  export const filterSensitiveLog = (obj: CertificateSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateSummary =>
    __isa(o, "CertificateSummary");
}

export enum CertificateTransparencyLoggingPreference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export enum CertificateType {
  AMAZON_ISSUED = "AMAZON_ISSUED",
  IMPORTED = "IMPORTED",
  PRIVATE = "PRIVATE"
}

export interface DeleteCertificateRequest {
  __type?: "DeleteCertificateRequest";
  /**
   * <p>String that contains the ARN of the ACM certificate to be deleted. This must be of the
   *       form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  CertificateArn: string | undefined;
}

export namespace DeleteCertificateRequest {
  export const filterSensitiveLog = (obj: DeleteCertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCertificateRequest =>
    __isa(o, "DeleteCertificateRequest");
}

export interface DescribeCertificateRequest {
  __type?: "DescribeCertificateRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the ACM certificate. The ARN must have the following
   *       form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  CertificateArn: string | undefined;
}

export namespace DescribeCertificateRequest {
  export const filterSensitiveLog = (obj: DescribeCertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCertificateRequest =>
    __isa(o, "DescribeCertificateRequest");
}

export interface DescribeCertificateResponse {
  __type?: "DescribeCertificateResponse";
  /**
   * <p>Metadata about an ACM certificate.</p>
   */
  Certificate?: CertificateDetail;
}

export namespace DescribeCertificateResponse {
  export const filterSensitiveLog = (
    obj: DescribeCertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCertificateResponse =>
    __isa(o, "DescribeCertificateResponse");
}

export enum DomainStatus {
  FAILED = "FAILED",
  PENDING_VALIDATION = "PENDING_VALIDATION",
  SUCCESS = "SUCCESS"
}

/**
 * <p>Contains information about the validation of each domain name in the certificate.</p>
 */
export interface DomainValidation {
  __type?: "DomainValidation";
  /**
   * <p>A fully qualified domain name (FQDN) in the certificate. For example,
   *         <code>www.example.com</code> or <code>example.com</code>. </p>
   */
  DomainName: string | undefined;

  /**
   * <p>Contains the CNAME record that you add to your DNS database for domain validation. For
   *       more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">Use DNS to Validate Domain Ownership</a>.</p>
   */
  ResourceRecord?: ResourceRecord;

  /**
   * <p>The domain name that ACM used to send domain validation emails.</p>
   */
  ValidationDomain?: string;

  /**
   * <p>A list of email addresses that ACM used to send domain validation emails.</p>
   */
  ValidationEmails?: string[];

  /**
   * <p>Specifies the domain validation method.</p>
   */
  ValidationMethod?: ValidationMethod | string;

  /**
   * <p>The validation status of the domain name. This can be one of the following values:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING_VALIDATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code></code>SUCCESS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code></code>FAILED</p>
   *             </li>
   *          </ul>
   */
  ValidationStatus?: DomainStatus | string;
}

export namespace DomainValidation {
  export const filterSensitiveLog = (obj: DomainValidation): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainValidation =>
    __isa(o, "DomainValidation");
}

/**
 * <p>Contains information about the domain names that you want ACM to use to send you emails
 *       that enable you to validate domain ownership.</p>
 */
export interface DomainValidationOption {
  __type?: "DomainValidationOption";
  /**
   * <p>A fully qualified domain name (FQDN) in the certificate request.</p>
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
   */
  ValidationDomain: string | undefined;
}

export namespace DomainValidationOption {
  export const filterSensitiveLog = (obj: DomainValidationOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainValidationOption =>
    __isa(o, "DomainValidationOption");
}

export interface ExportCertificateRequest {
  __type?: "ExportCertificateRequest";
  /**
   * <p>An Amazon Resource Name (ARN) of the issued certificate. This must be of the form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  CertificateArn: string | undefined;

  /**
   * <p>Passphrase to associate with the encrypted exported private key. If you want to later
   *       decrypt the private key, you must have the passphrase. You can use the following OpenSSL
   *       command to decrypt a private key: </p>
   *          <p>
   *             <code>openssl rsa -in encrypted_key.pem -out decrypted_key.pem</code>
   *          </p>
   */
  Passphrase: Uint8Array | undefined;
}

export namespace ExportCertificateRequest {
  export const filterSensitiveLog = (obj: ExportCertificateRequest): any => ({
    ...obj,
    ...(obj.Passphrase && { Passphrase: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is ExportCertificateRequest =>
    __isa(o, "ExportCertificateRequest");
}

export interface ExportCertificateResponse {
  __type?: "ExportCertificateResponse";
  /**
   * <p>The base64 PEM-encoded certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>The base64 PEM-encoded certificate chain. This does not include the certificate that you
   *       are exporting.</p>
   */
  CertificateChain?: string;

  /**
   * <p>The encrypted private key associated with the public key in the certificate. The key is
   *       output in PKCS #8 format and is base64 PEM-encoded. </p>
   */
  PrivateKey?: string;
}

export namespace ExportCertificateResponse {
  export const filterSensitiveLog = (obj: ExportCertificateResponse): any => ({
    ...obj,
    ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is ExportCertificateResponse =>
    __isa(o, "ExportCertificateResponse");
}

/**
 * <p>The Extended Key Usage X.509 v3 extension defines one or more purposes for which the
 *       public key can be used. This is in addition to or in place of the basic purposes specified by
 *       the Key Usage extension. </p>
 */
export interface ExtendedKeyUsage {
  __type?: "ExtendedKeyUsage";
  /**
   * <p>The name of an Extended Key Usage value.</p>
   */
  Name?: ExtendedKeyUsageName | string;

  /**
   * <p>An object identifier (OID) for the extension value. OIDs are strings of numbers separated
   *       by periods. The following OIDs are defined in RFC 3280 and RFC 5280. </p>
   *
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
   */
  OID?: string;
}

export namespace ExtendedKeyUsage {
  export const filterSensitiveLog = (obj: ExtendedKeyUsage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExtendedKeyUsage =>
    __isa(o, "ExtendedKeyUsage");
}

export enum ExtendedKeyUsageName {
  ANY = "ANY",
  CODE_SIGNING = "CODE_SIGNING",
  CUSTOM = "CUSTOM",
  EMAIL_PROTECTION = "EMAIL_PROTECTION",
  IPSEC_END_SYSTEM = "IPSEC_END_SYSTEM",
  IPSEC_TUNNEL = "IPSEC_TUNNEL",
  IPSEC_USER = "IPSEC_USER",
  NONE = "NONE",
  OCSP_SIGNING = "OCSP_SIGNING",
  TIME_STAMPING = "TIME_STAMPING",
  TLS_WEB_CLIENT_AUTHENTICATION = "TLS_WEB_CLIENT_AUTHENTICATION",
  TLS_WEB_SERVER_AUTHENTICATION = "TLS_WEB_SERVER_AUTHENTICATION"
}

export enum FailureReason {
  ADDITIONAL_VERIFICATION_REQUIRED = "ADDITIONAL_VERIFICATION_REQUIRED",
  CAA_ERROR = "CAA_ERROR",
  DOMAIN_NOT_ALLOWED = "DOMAIN_NOT_ALLOWED",
  DOMAIN_VALIDATION_DENIED = "DOMAIN_VALIDATION_DENIED",
  INVALID_PUBLIC_DOMAIN = "INVALID_PUBLIC_DOMAIN",
  NO_AVAILABLE_CONTACTS = "NO_AVAILABLE_CONTACTS",
  OTHER = "OTHER",
  PCA_ACCESS_DENIED = "PCA_ACCESS_DENIED",
  PCA_INVALID_ARGS = "PCA_INVALID_ARGS",
  PCA_INVALID_ARN = "PCA_INVALID_ARN",
  PCA_INVALID_DURATION = "PCA_INVALID_DURATION",
  PCA_INVALID_STATE = "PCA_INVALID_STATE",
  PCA_LIMIT_EXCEEDED = "PCA_LIMIT_EXCEEDED",
  PCA_NAME_CONSTRAINTS_VALIDATION = "PCA_NAME_CONSTRAINTS_VALIDATION",
  PCA_REQUEST_FAILED = "PCA_REQUEST_FAILED",
  PCA_RESOURCE_NOT_FOUND = "PCA_RESOURCE_NOT_FOUND"
}

/**
 * <p>This structure can be used in the <a>ListCertificates</a> action to filter the
 *       output of the certificate list. </p>
 */
export interface Filters {
  __type?: "Filters";
  /**
   * <p>Specify one or more <a>ExtendedKeyUsage</a> extension values.</p>
   */
  extendedKeyUsage?: (ExtendedKeyUsageName | string)[];

  /**
   * <p>Specify one or more algorithms that can be used to generate key pairs.</p>
   *          <p>Default filtering returns only <code>RSA_2048</code> certificates. To return other
   *       certificate types, provide the desired type signatures in a comma-separated list. For example,
   *         <code>"keyTypes": ["RSA_2048,RSA_4096"]</code>  returns both <code>RSA_2048</code> and
   *         <code>RSA_4096</code> certificates.</p>
   */
  keyTypes?: (KeyAlgorithm | string)[];

  /**
   * <p>Specify one or more <a>KeyUsage</a> extension values.</p>
   */
  keyUsage?: (KeyUsageName | string)[];
}

export namespace Filters {
  export const filterSensitiveLog = (obj: Filters): any => ({
    ...obj
  });
  export const isa = (o: any): o is Filters => __isa(o, "Filters");
}

export interface GetCertificateRequest {
  __type?: "GetCertificateRequest";
  /**
   * <p>String that contains a certificate ARN in the following format:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  CertificateArn: string | undefined;
}

export namespace GetCertificateRequest {
  export const filterSensitiveLog = (obj: GetCertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCertificateRequest =>
    __isa(o, "GetCertificateRequest");
}

export interface GetCertificateResponse {
  __type?: "GetCertificateResponse";
  /**
   * <p>String that contains the ACM certificate represented by the ARN specified at
   *       input.</p>
   */
  Certificate?: string;

  /**
   * <p>The certificate chain that contains the root certificate issued by the certificate
   *       authority (CA).</p>
   */
  CertificateChain?: string;
}

export namespace GetCertificateResponse {
  export const filterSensitiveLog = (obj: GetCertificateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCertificateResponse =>
    __isa(o, "GetCertificateResponse");
}

export interface ImportCertificateRequest {
  __type?: "ImportCertificateRequest";
  /**
   * <p>The certificate to import.</p>
   */
  Certificate: Uint8Array | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name
   *         (ARN)</a> of an imported certificate to replace. To import a new certificate, omit this
   *       field. </p>
   */
  CertificateArn?: string;

  /**
   * <p>The PEM encoded certificate chain.</p>
   */
  CertificateChain?: Uint8Array;

  /**
   * <p>The private key that matches the public key in the certificate.</p>
   */
  PrivateKey: Uint8Array | undefined;

  /**
   * <p>One or more resource tags to associate with the imported certificate. </p>
   *          <p>Note: You cannot apply tags when reimporting a certificate.</p>
   */
  Tags?: Tag[];
}

export namespace ImportCertificateRequest {
  export const filterSensitiveLog = (obj: ImportCertificateRequest): any => ({
    ...obj,
    ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is ImportCertificateRequest =>
    __isa(o, "ImportCertificateRequest");
}

export interface ImportCertificateResponse {
  __type?: "ImportCertificateResponse";
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name
   *         (ARN)</a> of the imported certificate.</p>
   */
  CertificateArn?: string;
}

export namespace ImportCertificateResponse {
  export const filterSensitiveLog = (obj: ImportCertificateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportCertificateResponse =>
    __isa(o, "ImportCertificateResponse");
}

/**
 * <p>One or more of of request parameters specified is not valid.</p>
 */
export interface InvalidArgsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidArgsException";
  $fault: "client";
  message?: string;
}

export namespace InvalidArgsException {
  export const filterSensitiveLog = (obj: InvalidArgsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidArgsException =>
    __isa(o, "InvalidArgsException");
}

/**
 * <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 */
export interface InvalidArnException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidArnException";
  $fault: "client";
  message?: string;
}

export namespace InvalidArnException {
  export const filterSensitiveLog = (obj: InvalidArnException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidArnException =>
    __isa(o, "InvalidArnException");
}

/**
 * <p>One or more values in the <a>DomainValidationOption</a> structure is
 *       incorrect.</p>
 */
export interface InvalidDomainValidationOptionsException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDomainValidationOptionsException";
  $fault: "client";
  message?: string;
}

export namespace InvalidDomainValidationOptionsException {
  export const filterSensitiveLog = (
    obj: InvalidDomainValidationOptionsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidDomainValidationOptionsException =>
    __isa(o, "InvalidDomainValidationOptionsException");
}

/**
 * <p>An input parameter was invalid.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterException =>
    __isa(o, "InvalidParameterException");
}

/**
 * <p>Processing has reached an invalid state.</p>
 */
export interface InvalidStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidStateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidStateException {
  export const filterSensitiveLog = (obj: InvalidStateException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidStateException =>
    __isa(o, "InvalidStateException");
}

/**
 * <p>One or both of the values that make up the key-value pair is not valid. For example, you
 *       cannot specify a tag value that begins with <code>aws:</code>.</p>
 */
export interface InvalidTagException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTagException";
  $fault: "client";
  message?: string;
}

export namespace InvalidTagException {
  export const filterSensitiveLog = (obj: InvalidTagException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTagException =>
    __isa(o, "InvalidTagException");
}

export enum KeyAlgorithm {
  EC_prime256v1 = "EC_prime256v1",
  EC_secp384r1 = "EC_secp384r1",
  EC_secp521r1 = "EC_secp521r1",
  RSA_1024 = "RSA_1024",
  RSA_2048 = "RSA_2048",
  RSA_4096 = "RSA_4096"
}

/**
 * <p>The Key Usage X.509 v3 extension defines the purpose of the public key contained in the
 *       certificate.</p>
 */
export interface KeyUsage {
  __type?: "KeyUsage";
  /**
   * <p>A string value that contains a Key Usage extension name.</p>
   */
  Name?: KeyUsageName | string;
}

export namespace KeyUsage {
  export const filterSensitiveLog = (obj: KeyUsage): any => ({
    ...obj
  });
  export const isa = (o: any): o is KeyUsage => __isa(o, "KeyUsage");
}

export enum KeyUsageName {
  ANY = "ANY",
  CERTIFICATE_SIGNING = "CERTIFICATE_SIGNING",
  CRL_SIGNING = "CRL_SIGNING",
  CUSTOM = "CUSTOM",
  DATA_ENCIPHERMENT = "DATA_ENCIPHERMENT",
  DECIPHER_ONLY = "DECIPHER_ONLY",
  DIGITAL_SIGNATURE = "DIGITAL_SIGNATURE",
  ENCHIPER_ONLY = "ENCIPHER_ONLY",
  KEY_AGREEMENT = "KEY_AGREEMENT",
  KEY_ENCIPHERMENT = "KEY_ENCIPHERMENT",
  NON_REPUDATION = "NON_REPUDIATION"
}

/**
 * <p>An ACM limit has been exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListCertificatesRequest {
  __type?: "ListCertificatesRequest";
  /**
   * <p>Filter the certificate list by status value.</p>
   */
  CertificateStatuses?: (CertificateStatus | string)[];

  /**
   * <p>Filter the certificate list. For more information, see the <a>Filters</a>
   *       structure.</p>
   */
  Includes?: Filters;

  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   *       return in the response. If additional items exist beyond the number you specify, the
   *         <code>NextToken</code> element is sent in the response. Use this <code>NextToken</code>
   *       value in a subsequent request to retrieve additional items.</p>
   */
  MaxItems?: number;

  /**
   * <p>Use this parameter only when paginating results and only in a subsequent request after you
   *       receive a response with truncated results. Set it to the value of <code>NextToken</code> from
   *       the response you just received.</p>
   */
  NextToken?: string;
}

export namespace ListCertificatesRequest {
  export const filterSensitiveLog = (obj: ListCertificatesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCertificatesRequest =>
    __isa(o, "ListCertificatesRequest");
}

export interface ListCertificatesResponse {
  __type?: "ListCertificatesResponse";
  /**
   * <p>A list of ACM certificates.</p>
   */
  CertificateSummaryList?: CertificateSummary[];

  /**
   * <p>When the list is truncated, this value is present and contains the value to use for the
   *         <code>NextToken</code> parameter in a subsequent pagination request.</p>
   */
  NextToken?: string;
}

export namespace ListCertificatesResponse {
  export const filterSensitiveLog = (obj: ListCertificatesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCertificatesResponse =>
    __isa(o, "ListCertificatesResponse");
}

export interface ListTagsForCertificateRequest {
  __type?: "ListTagsForCertificateRequest";
  /**
   * <p>String that contains the ARN of the ACM certificate for which you want to list the tags.
   *       This must have the following form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>. </p>
   */
  CertificateArn: string | undefined;
}

export namespace ListTagsForCertificateRequest {
  export const filterSensitiveLog = (
    obj: ListTagsForCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForCertificateRequest =>
    __isa(o, "ListTagsForCertificateRequest");
}

export interface ListTagsForCertificateResponse {
  __type?: "ListTagsForCertificateResponse";
  /**
   * <p>The key-value pairs that define the applied tags.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForCertificateResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForCertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForCertificateResponse =>
    __isa(o, "ListTagsForCertificateResponse");
}

export enum RecordType {
  CNAME = "CNAME"
}

export interface RemoveTagsFromCertificateRequest {
  __type?: "RemoveTagsFromCertificateRequest";
  /**
   * <p>String that contains the ARN of the ACM Certificate with one or more tags that you want
   *       to remove. This must be of the form:</p>
   *
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>. </p>
   */
  CertificateArn: string | undefined;

  /**
   * <p>The key-value pair that defines the tag to remove.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace RemoveTagsFromCertificateRequest {
  export const filterSensitiveLog = (
    obj: RemoveTagsFromCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsFromCertificateRequest =>
    __isa(o, "RemoveTagsFromCertificateRequest");
}

export enum RenewalEligibility {
  ELIGIBLE = "ELIGIBLE",
  INELIGIBLE = "INELIGIBLE"
}

export enum RenewalStatus {
  FAILED = "FAILED",
  PENDING_AUTO_RENEWAL = "PENDING_AUTO_RENEWAL",
  PENDING_VALIDATION = "PENDING_VALIDATION",
  SUCCESS = "SUCCESS"
}

/**
 * <p>Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This
 *       structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
 */
export interface RenewalSummary {
  __type?: "RenewalSummary";
  /**
   * <p>Contains information about the validation of each domain name in the certificate, as it
   *       pertains to ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed
   *         renewal</a>. This is different from the initial validation that occurs as a result of
   *       the <a>RequestCertificate</a> request. This field exists only when the certificate
   *       type is <code>AMAZON_ISSUED</code>.</p>
   */
  DomainValidationOptions: DomainValidation[] | undefined;

  /**
   * <p>The status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> of the certificate.</p>
   */
  RenewalStatus: RenewalStatus | string | undefined;

  /**
   * <p>The reason that a renewal request was unsuccessful.</p>
   */
  RenewalStatusReason?: FailureReason | string;

  /**
   * <p>The time at which the renewal summary was last updated.</p>
   */
  UpdatedAt: Date | undefined;
}

export namespace RenewalSummary {
  export const filterSensitiveLog = (obj: RenewalSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is RenewalSummary =>
    __isa(o, "RenewalSummary");
}

export interface RenewCertificateRequest {
  __type?: "RenewCertificateRequest";
  /**
   * <p>String that contains the ARN of the ACM certificate to be renewed. This must be of the
   *       form:</p>
   *          <p>
   *             <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>.</p>
   */
  CertificateArn: string | undefined;
}

export namespace RenewCertificateRequest {
  export const filterSensitiveLog = (obj: RenewCertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RenewCertificateRequest =>
    __isa(o, "RenewCertificateRequest");
}

export interface RequestCertificateRequest {
  __type?: "RequestCertificateRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used
   *       to issue the certificate. If you do not provide an ARN and you are trying to request a private
   *       certificate, ACM will attempt to issue a public certificate. For more information about
   *       private CAs, see the <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaWelcome.html">AWS Certificate Manager Private Certificate Authority (PCA)</a> user guide. The ARN must have the following form: </p>
   *
   *          <p>
   *             <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p> Fully qualified domain name (FQDN), such as www.example.com, that you want to secure with
   *       an ACM certificate. Use an asterisk (*) to create a wildcard certificate that protects
   *       several sites in the same domain. For example, *.example.com protects www.example.com,
   *       site.example.com, and images.example.com. </p>
   *
   *          <p> The first domain name you enter cannot exceed 64 octets, including periods. Each
   *       subsequent Subject Alternative Name (SAN), however, can be up to 253 octets in length. </p>
   */
  DomainName: string | undefined;

  /**
   * <p>The domain name that you want ACM to use to send you emails so that you can validate
   *       domain ownership.</p>
   */
  DomainValidationOptions?: DomainValidationOption[];

  /**
   * <p>Customer chosen string that can be used to distinguish between calls to
   *         <code>RequestCertificate</code>. Idempotency tokens time out after one hour. Therefore, if
   *       you call <code>RequestCertificate</code> multiple times with the same idempotency token within
   *       one hour, ACM recognizes that you are requesting only one certificate and will issue only
   *       one. If you change the idempotency token for each call, ACM recognizes that you are
   *       requesting multiple certificates.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Currently, you can use this parameter to specify whether to add the certificate to a
   *       certificate transparency log. Certificate transparency makes it possible to detect SSL/TLS
   *       certificates that have been mistakenly or maliciously issued. Certificates that have not been
   *       logged typically produce an error message in a browser. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency">Opting Out of Certificate Transparency Logging</a>.</p>
   */
  Options?: CertificateOptions;

  /**
   * <p>Additional FQDNs to be included in the Subject Alternative Name extension of the ACM
   *       certificate. For example, add the name www.example.net to a certificate for which the
   *         <code>DomainName</code> field is www.example.com if users can reach your site by using
   *       either name. The maximum number of domain names that you can add to an ACM certificate is
   *       100. However, the initial limit is 10 domain names. If you need more than 10 names, you must
   *       request a limit increase. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html">Limits</a>.</p>
   *
   *          <p> The maximum length of a SAN DNS name is 253 octets. The name is made up of multiple
   *       labels separated by periods. No label can be longer than 63 octets. Consider the following
   *       examples: </p>
   *
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
   */
  SubjectAlternativeNames?: string[];

  /**
   * <p>One or more resource tags to associate with the certificate.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The method you want to use if you are requesting a public certificate to validate that you
   *       own or control domain. You can <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">validate with DNS</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">validate with
   *         email</a>. We recommend that you use DNS validation. </p>
   */
  ValidationMethod?: ValidationMethod | string;
}

export namespace RequestCertificateRequest {
  export const filterSensitiveLog = (obj: RequestCertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestCertificateRequest =>
    __isa(o, "RequestCertificateRequest");
}

export interface RequestCertificateResponse {
  __type?: "RequestCertificateResponse";
  /**
   * <p>String that contains the ARN of the issued certificate. This must be of the form:</p>
   *          <p>
   *             <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  CertificateArn?: string;
}

export namespace RequestCertificateResponse {
  export const filterSensitiveLog = (obj: RequestCertificateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestCertificateResponse =>
    __isa(o, "RequestCertificateResponse");
}

/**
 * <p>The certificate request is in process and the certificate in your account has not yet been
 *       issued.</p>
 */
export interface RequestInProgressException
  extends __SmithyException,
    $MetadataBearer {
  name: "RequestInProgressException";
  $fault: "client";
  message?: string;
}

export namespace RequestInProgressException {
  export const filterSensitiveLog = (obj: RequestInProgressException): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestInProgressException =>
    __isa(o, "RequestInProgressException");
}

export interface ResendValidationEmailRequest {
  __type?: "ResendValidationEmailRequest";
  /**
   * <p>String that contains the ARN of the requested certificate. The certificate ARN is
   *       generated and returned by the <a>RequestCertificate</a> action as soon as the
   *       request is made. By default, using this parameter causes email to be sent to all top-level
   *       domains you specified in the certificate request. The ARN must be of the form: </p>
   *
   *          <p>
   *             <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code>
   *          </p>
   */
  CertificateArn: string | undefined;

  /**
   * <p>The fully qualified domain name (FQDN) of the certificate that needs to be
   *       validated.</p>
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
   */
  ValidationDomain: string | undefined;
}

export namespace ResendValidationEmailRequest {
  export const filterSensitiveLog = (
    obj: ResendValidationEmailRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResendValidationEmailRequest =>
    __isa(o, "ResendValidationEmailRequest");
}

/**
 * <p>The certificate is in use by another AWS service in the caller's account. Remove the
 *       association and try again.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceInUseException =>
    __isa(o, "ResourceInUseException");
}

/**
 * <p>The specified certificate cannot be found in the caller's account or the caller's account
 *       cannot be found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Contains a DNS record value that you can use to can use to validate ownership or control
 *       of a domain. This is used by the <a>DescribeCertificate</a> action. </p>
 */
export interface ResourceRecord {
  __type?: "ResourceRecord";
  /**
   * <p>The name of the DNS record to create in your domain. This is supplied by ACM.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of DNS record. Currently this can be <code>CNAME</code>.</p>
   */
  Type: RecordType | string | undefined;

  /**
   * <p>The value of the CNAME record to add to your DNS database. This is supplied by
   *       ACM.</p>
   */
  Value: string | undefined;
}

export namespace ResourceRecord {
  export const filterSensitiveLog = (obj: ResourceRecord): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceRecord =>
    __isa(o, "ResourceRecord");
}

export enum RevocationReason {
  AFFILIATION_CHANGED = "AFFILIATION_CHANGED",
  A_A_COMPROMISE = "A_A_COMPROMISE",
  CA_COMPROMISE = "CA_COMPROMISE",
  CERTIFICATE_HOLD = "CERTIFICATE_HOLD",
  CESSATION_OF_OPERATION = "CESSATION_OF_OPERATION",
  KEY_COMPROMISE = "KEY_COMPROMISE",
  PRIVILEGE_WITHDRAWN = "PRIVILEGE_WITHDRAWN",
  REMOVE_FROM_CRL = "REMOVE_FROM_CRL",
  SUPERCEDED = "SUPERCEDED",
  UNSPECIFIED = "UNSPECIFIED"
}

/**
 * <p>A key-value pair that identifies or specifies metadata about an ACM resource.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
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
 * <p>A specified tag did not comply with an existing tag policy and was rejected.</p>
 */
export interface TagPolicyException extends __SmithyException, $MetadataBearer {
  name: "TagPolicyException";
  $fault: "client";
  message?: string;
}

export namespace TagPolicyException {
  export const filterSensitiveLog = (obj: TagPolicyException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagPolicyException =>
    __isa(o, "TagPolicyException");
}

/**
 * <p>The request contains too many tags. Try the request again with fewer tags.</p>
 */
export interface TooManyTagsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTagsException =>
    __isa(o, "TooManyTagsException");
}

export interface UpdateCertificateOptionsRequest {
  __type?: "UpdateCertificateOptionsRequest";
  /**
   * <p>ARN of the requested certificate to update. This must be of the form:</p>
   *          <p>
   *             <code>arn:aws:acm:us-east-1:<i>account</i>:certificate/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   *          </p>
   */
  CertificateArn: string | undefined;

  /**
   * <p>Use to update the options for your certificate. Currently, you can specify whether to add
   *       your certificate to a transparency log. Certificate transparency makes it possible to detect
   *       SSL/TLS certificates that have been mistakenly or maliciously issued. Certificates that have
   *       not been logged typically produce an error message in a browser. </p>
   */
  Options: CertificateOptions | undefined;
}

export namespace UpdateCertificateOptionsRequest {
  export const filterSensitiveLog = (
    obj: UpdateCertificateOptionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCertificateOptionsRequest =>
    __isa(o, "UpdateCertificateOptionsRequest");
}

export enum ValidationMethod {
  DNS = "DNS",
  EMAIL = "EMAIL"
}

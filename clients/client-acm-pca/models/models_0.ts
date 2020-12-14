import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum KeyAlgorithm {
  EC_prime256v1 = "EC_prime256v1",
  EC_secp384r1 = "EC_secp384r1",
  RSA_2048 = "RSA_2048",
  RSA_4096 = "RSA_4096",
}

export enum SigningAlgorithm {
  SHA256WITHECDSA = "SHA256WITHECDSA",
  SHA256WITHRSA = "SHA256WITHRSA",
  SHA384WITHECDSA = "SHA384WITHECDSA",
  SHA384WITHRSA = "SHA384WITHRSA",
  SHA512WITHECDSA = "SHA512WITHECDSA",
  SHA512WITHRSA = "SHA512WITHRSA",
}

/**
 * <p>Contains information about the certificate subject. The certificate can be one issued
 * 			by your private certificate authority (CA) or it can be your private CA certificate. The
 * 				<b>Subject</b> field in the certificate identifies the
 * 			entity that owns or controls the public key in the certificate. The entity can be a
 * 			user, computer, device, or service. The <b>Subject</b> must
 * 			contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished
 * 			names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique
 * 			for each entity, but your private CA can issue more than one certificate with the same
 * 			DN to the same entity. </p>
 */
export interface ASN1Subject {
  /**
   * <p>Two-digit code that specifies the country in which the certificate subject
   * 			located.</p>
   */
  Country?: string;

  /**
   * <p>Legal name of the organization with which the certificate subject is affiliated.
   * 		</p>
   */
  Organization?: string;

  /**
   * <p>A subdivision or unit of the organization (such as sales or finance) with which the
   * 			certificate subject is affiliated.</p>
   */
  OrganizationalUnit?: string;

  /**
   * <p>Disambiguating information for the certificate subject.</p>
   */
  DistinguishedNameQualifier?: string;

  /**
   * <p>State in which the subject of the certificate is located.</p>
   */
  State?: string;

  /**
   * <p>Fully qualified domain name (FQDN) associated with the certificate subject.</p>
   */
  CommonName?: string;

  /**
   * <p>The certificate serial number.</p>
   */
  SerialNumber?: string;

  /**
   * <p>The locality (such as a city or town) in which the certificate subject is
   * 			located.</p>
   */
  Locality?: string;

  /**
   * <p>A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the
   * 			certificate subject.</p>
   */
  Title?: string;

  /**
   * <p>Family name. In the US and the UK, for example, the surname of an individual is
   * 			ordered last. In Asian cultures the surname is typically ordered first.</p>
   */
  Surname?: string;

  /**
   * <p>First name.</p>
   */
  GivenName?: string;

  /**
   * <p>Concatenation that typically contains the first letter of the <b>GivenName</b>, the first letter of the middle name if one exists, and the
   * 			first letter of the <b>SurName</b>.</p>
   */
  Initials?: string;

  /**
   * <p>Typically a shortened version of a longer <b>GivenName</b>.
   * 			For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth,
   * 			Liz, or Eliza.</p>
   */
  Pseudonym?: string;

  /**
   * <p>Typically a qualifier appended to the name of an individual. Examples include Jr. for
   * 			junior, Sr. for senior, and III for third.</p>
   */
  GenerationQualifier?: string;
}

export namespace ASN1Subject {
  export const filterSensitiveLog = (obj: ASN1Subject): any => ({
    ...obj,
  });
}

/**
 * <p>Contains configuration information for your private certificate authority (CA). This
 * 			includes information about the class of public key algorithm and the key pair that your
 * 			private CA creates when it issues a certificate. It also includes the signature
 * 			algorithm that it uses when issuing certificates, and its X.500 distinguished name. You
 * 			must specify this information when you call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. </p>
 */
export interface CertificateAuthorityConfiguration {
  /**
   * <p>Type of the public key algorithm and size, in bits, of the key pair that your CA
   * 			creates when it issues a certificate. When you create a subordinate CA, you must use a
   * 			key algorithm supported by the parent CA.</p>
   */
  KeyAlgorithm: KeyAlgorithm | string | undefined;

  /**
   * <p>Name of the algorithm your private CA uses to sign certificate requests.</p>
   * 		       <p>This parameter should not be confused with the <code>SigningAlgorithm</code> parameter
   * 			used to sign certificates when they are issued.</p>
   */
  SigningAlgorithm: SigningAlgorithm | string | undefined;

  /**
   * <p>Structure that contains X.500 distinguished name information for your private
   * 			CA.</p>
   */
  Subject: ASN1Subject | undefined;
}

export namespace CertificateAuthorityConfiguration {
  export const filterSensitiveLog = (obj: CertificateAuthorityConfiguration): any => ({
    ...obj,
  });
}

export enum CertificateAuthorityType {
  ROOT = "ROOT",
  SUBORDINATE = "SUBORDINATE",
}

/**
 * <p>Contains configuration information for a certificate revocation list (CRL). Your
 * 			private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You
 * 			can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA
 * 			writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by
 * 			specifying a value for the <b>CustomCname</b> parameter. Your
 * 			private CA copies the CNAME or the S3 bucket name to the <b>CRL
 * 				Distribution Points</b> extension of each certificate it issues. Your S3
 * 			bucket policy must give write permission to ACM Private CA. </p>
 * 		       <p>ACM Private CAA assets that are stored in Amazon S3 can be protected with encryption.
 *   For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your
 * 			CRLs</a>.</p>
 * 		       <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed at 1/2 the age of next
 * 			update or when a certificate is revoked. When a certificate is revoked, it is recorded
 * 			in the next CRL that is generated and in the next audit report. Only time valid
 * 			certificates are listed in the CRL. Expired certificates are not included. </p>
 * 		       <p>CRLs contain the following fields:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <b>Version</b>: The current version number defined
 * 					in RFC 5280 is V2. The integer value is 0x1. </p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>Signature Algorithm</b>: The name of the
 * 					algorithm used to sign the CRL.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>Issuer</b>: The X.500 distinguished name of your
 * 					private CA that issued the CRL.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>Last Update</b>: The issue date and time of this
 * 					CRL.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>Next Update</b>: The day and time by which the
 * 					next CRL will be issued.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>Revoked Certificates</b>: List of revoked
 * 					certificates. Each list item contains the following information.</p>
 * 				           <ul>
 *                   <li>
 * 						               <p>
 *                         <b>Serial Number</b>: The serial number, in
 * 							hexadecimal format, of the revoked certificate.</p>
 * 					             </li>
 *                   <li>
 * 						               <p>
 *                         <b>Revocation Date</b>: Date and time the
 * 							certificate was revoked.</p>
 * 					             </li>
 *                   <li>
 * 						               <p>
 *                         <b>CRL Entry Extensions</b>: Optional
 * 							extensions for the CRL entry.</p>
 * 						               <ul>
 *                         <li>
 * 								                   <p>
 *                               <b>X509v3 CRL Reason Code</b>:
 * 									Reason the certificate was revoked.</p>
 * 							                 </li>
 *                      </ul>
 * 					             </li>
 *                </ul>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>CRL Extensions</b>: Optional extensions for the
 * 					CRL.</p>
 * 				           <ul>
 *                   <li>
 * 						               <p>
 *                         <b>X509v3 Authority Key Identifier</b>:
 * 							Identifies the public key associated with the private key used to sign
 * 							the certificate.</p>
 * 					             </li>
 *                   <li>
 * 						               <p>
 *                         <b>X509v3 CRL Number:</b>: Decimal sequence
 * 							number for the CRL.</p>
 * 					             </li>
 *                </ul>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>Signature Algorithm</b>: Algorithm used by your
 * 					private CA to sign the CRL.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>Signature Value</b>: Signature computed over the
 * 					CRL.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>Certificate revocation lists created by ACM Private CA are DER-encoded. You can use the
 * 			following OpenSSL command to list a CRL.</p>
 * 		       <p>
 *             <code>openssl crl -inform DER -text -in <i>crl_path</i>
 * 			-noout</code>
 *          </p>
 */
export interface CrlConfiguration {
  /**
   * <p>Boolean value that specifies whether certificate revocation lists (CRLs) are enabled.
   * 			You can use this value to enable certificate revocation for a new CA when you call the
   * 				<a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action or for an existing CA when you call the
   * 				<a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. </p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Number of days until a certificate expires.</p>
   */
  ExpirationInDays?: number;

  /**
   * <p>Name inserted into the certificate <b>CRL Distribution
   * 				Points</b> extension that enables the use of an alias for the CRL
   * 			distribution point. Use this value if you don't want the name of your S3 bucket to be
   * 			public.</p>
   */
  CustomCname?: string;

  /**
   * <p>Name of the S3 bucket that contains the CRL. If you do not provide a value for the
   * 				<b>CustomCname</b> argument, the name of your S3 bucket
   * 			is placed into the <b>CRL Distribution Points</b> extension of
   * 			the issued certificate. You can change the name of your bucket by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. You must specify a bucket policy that
   * 			allows ACM Private CA to write the CRL to your bucket.</p>
   */
  S3BucketName?: string;
}

export namespace CrlConfiguration {
  export const filterSensitiveLog = (obj: CrlConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Certificate revocation information used by the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> actions. Your private certificate authority (CA)
 * 			can create and maintain a certificate revocation list (CRL). A CRL contains information
 * 			about certificates revoked by your CA. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a>.</p>
 */
export interface RevocationConfiguration {
  /**
   * <p>Configuration of the certificate revocation list (CRL), if any, maintained by your
   * 			private CA.</p>
   */
  CrlConfiguration?: CrlConfiguration;
}

export namespace RevocationConfiguration {
  export const filterSensitiveLog = (obj: RevocationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Tags are labels that you can use to identify and organize your private CAs. Each tag
 * 			consists of a key and an optional value. You can associate up to 50 tags with a private
 * 			CA. To add one or more tags to a private CA, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>
 * 			action. To remove a tag, call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. </p>
 */
export interface Tag {
  /**
   * <p>Key (name) of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>Value of the tag.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateCertificateAuthorityRequest {
  /**
   * <p>Name and bit size of the private key algorithm, the name of the signing algorithm, and
   * 			X.500 certificate subject information.</p>
   */
  CertificateAuthorityConfiguration: CertificateAuthorityConfiguration | undefined;

  /**
   * <p>Contains a Boolean value that you can use to enable a certification revocation list
   * 			(CRL) for the CA, the name of the S3 bucket to which ACM Private CA will write the CRL, and an
   * 			optional CNAME alias that you can use to hide the name of your bucket in the <b>CRL Distribution Points</b> extension of your CA certificate. For
   * 			more information, see the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CrlConfiguration.html">CrlConfiguration</a> structure.
   * 		</p>
   */
  RevocationConfiguration?: RevocationConfiguration;

  /**
   * <p>The type of the certificate authority.</p>
   */
  CertificateAuthorityType: CertificateAuthorityType | string | undefined;

  /**
   * <p>Alphanumeric string that can be used to distinguish between calls to <b>CreateCertificateAuthority</b>. For a given token, ACM Private CA
   * 			creates exactly one CA. If you issue a subsequent call using the same token, ACM Private CA
   * 			returns the ARN of the existing CA and takes no further action. If you change the
   * 			idempotency token across multiple calls, ACM Private CA creates a unique CA for each unique
   * 			token.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Key-value pairs that will be attached to the new private CA. You can associate up to
   * 			50 tags with a private CA. For information using tags with IAM to manage permissions,
   * 			see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: CreateCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

export interface CreateCertificateAuthorityResponse {
  /**
   * <p>If successful, the Amazon Resource Name (ARN) of the certificate authority (CA). This
   * 			is of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   */
  CertificateAuthorityArn?: string;
}

export namespace CreateCertificateAuthorityResponse {
  export const filterSensitiveLog = (obj: CreateCertificateAuthorityResponse): any => ({
    ...obj,
  });
}

/**
 * <p>One or more of the specified arguments was not valid.</p>
 */
export interface InvalidArgsException extends __SmithyException, $MetadataBearer {
  name: "InvalidArgsException";
  $fault: "client";
  message?: string;
}

export namespace InvalidArgsException {
  export const filterSensitiveLog = (obj: InvalidArgsException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource policy is invalid or is missing a required statement. For general information about
 * 			IAM policy and statement structure, see <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json">Overview
 * 				of JSON Policies</a>.</p>
 */
export interface InvalidPolicyException extends __SmithyException, $MetadataBearer {
  name: "InvalidPolicyException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPolicyException {
  export const filterSensitiveLog = (obj: InvalidPolicyException): any => ({
    ...obj,
  });
}

/**
 * <p>The tag associated with the CA is not valid. The invalid argument is contained in the
 * 			message field.</p>
 */
export interface InvalidTagException extends __SmithyException, $MetadataBearer {
  name: "InvalidTagException";
  $fault: "client";
  message?: string;
}

export namespace InvalidTagException {
  export const filterSensitiveLog = (obj: InvalidTagException): any => ({
    ...obj,
  });
}

/**
 * <p>An ACM Private CA quota has been exceeded. See the exception message returned to determine the
 * 			quota that was exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export enum AuditReportResponseFormat {
  CSV = "CSV",
  JSON = "JSON",
}

export interface CreateCertificateAuthorityAuditReportRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the CA to be audited. This is of the form:</p>
   * 		       <p>
   *             <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.</p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The name of the S3 bucket that will contain the audit report.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The format in which to create the report. This can be either <b>JSON</b> or <b>CSV</b>.</p>
   */
  AuditReportResponseFormat: AuditReportResponseFormat | string | undefined;
}

export namespace CreateCertificateAuthorityAuditReportRequest {
  export const filterSensitiveLog = (obj: CreateCertificateAuthorityAuditReportRequest): any => ({
    ...obj,
  });
}

export interface CreateCertificateAuthorityAuditReportResponse {
  /**
   * <p>An alphanumeric string that contains a report identifier.</p>
   */
  AuditReportId?: string;

  /**
   * <p>The <b>key</b> that uniquely identifies the report file in
   * 			your S3 bucket.</p>
   */
  S3Key?: string;
}

export namespace CreateCertificateAuthorityAuditReportResponse {
  export const filterSensitiveLog = (obj: CreateCertificateAuthorityAuditReportResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 */
export interface InvalidArnException extends __SmithyException, $MetadataBearer {
  name: "InvalidArnException";
  $fault: "client";
  message?: string;
}

export namespace InvalidArnException {
  export const filterSensitiveLog = (obj: InvalidArnException): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the private CA does not allow this action to occur.</p>
 */
export interface InvalidStateException extends __SmithyException, $MetadataBearer {
  name: "InvalidStateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidStateException {
  export const filterSensitiveLog = (obj: InvalidStateException): any => ({
    ...obj,
  });
}

/**
 * <p>The request has failed for an unspecified reason.</p>
 */
export interface RequestFailedException extends __SmithyException, $MetadataBearer {
  name: "RequestFailedException";
  $fault: "client";
  message?: string;
}

export namespace RequestFailedException {
  export const filterSensitiveLog = (obj: RequestFailedException): any => ({
    ...obj,
  });
}

/**
 * <p>Your request is already in progress.</p>
 */
export interface RequestInProgressException extends __SmithyException, $MetadataBearer {
  name: "RequestInProgressException";
  $fault: "client";
  message?: string;
}

export namespace RequestInProgressException {
  export const filterSensitiveLog = (obj: RequestInProgressException): any => ({
    ...obj,
  });
}

/**
 * <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be
 * 			found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export enum ActionType {
  GetCertificate = "GetCertificate",
  IssueCertificate = "IssueCertificate",
  ListPermissions = "ListPermissions",
}

export interface CreatePermissionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the CA that grants the permissions. You can find the
   * 			ARN by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. This must have the following form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The AWS service or identity that receives the permission. At this time, the only
   * 			valid principal is <code>acm.amazonaws.com</code>.</p>
   */
  Principal: string | undefined;

  /**
   * <p>The ID of the calling account.</p>
   */
  SourceAccount?: string;

  /**
   * <p>The actions that the specified AWS service principal can use. These include
   * 				<code>IssueCertificate</code>, <code>GetCertificate</code>, and
   * 				<code>ListPermissions</code>.</p>
   */
  Actions: (ActionType | string)[] | undefined;
}

export namespace CreatePermissionRequest {
  export const filterSensitiveLog = (obj: CreatePermissionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The designated permission has already been given to the user.</p>
 */
export interface PermissionAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "PermissionAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace PermissionAlreadyExistsException {
  export const filterSensitiveLog = (obj: PermissionAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>A previous update to your private CA is still ongoing.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

export interface DeleteCertificateAuthorityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must have the following form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The number of days to make a CA restorable after it has been deleted. This can be
   * 			anywhere from 7 to 30 days, with 30 being the default.</p>
   */
  PermanentDeletionTimeInDays?: number;
}

export namespace DeleteCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: DeleteCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

export interface DeletePermissionRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA that issued the permissions. You
   * 			can find the CA's ARN by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. This must have the following form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The AWS service or identity that will have its CA permissions revoked. At this time,
   * 			the only valid service principal is <code>acm.amazonaws.com</code>
   *          </p>
   */
  Principal: string | undefined;

  /**
   * <p>The AWS account that calls this action.</p>
   */
  SourceAccount?: string;
}

export namespace DeletePermissionRequest {
  export const filterSensitiveLog = (obj: DeletePermissionRequest): any => ({
    ...obj,
  });
}

export interface DeletePolicyRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA that will have its policy deleted. You
   * 			can find the CA's ARN by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. The ARN value must have the form
   * 				<code>arn:aws:acm-pca:region:account:certificate-authority/01234567-89ab-cdef-0123-0123456789ab</code>. </p>
   */
  ResourceArn: string | undefined;
}

export namespace DeletePolicyRequest {
  export const filterSensitiveLog = (obj: DeletePolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The current action was prevented because it would lock the caller out from performing
 * 			subsequent actions. Verify that the specified parameters would not result in the caller
 * 			being denied access to the resource. </p>
 */
export interface LockoutPreventedException extends __SmithyException, $MetadataBearer {
  name: "LockoutPreventedException";
  $fault: "client";
  message?: string;
}

export namespace LockoutPreventedException {
  export const filterSensitiveLog = (obj: LockoutPreventedException): any => ({
    ...obj,
  });
}

export interface DescribeCertificateAuthorityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   */
  CertificateAuthorityArn: string | undefined;
}

export namespace DescribeCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: DescribeCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

export enum FailureReason {
  OTHER = "OTHER",
  REQUEST_TIMED_OUT = "REQUEST_TIMED_OUT",
  UNSUPPORTED_ALGORITHM = "UNSUPPORTED_ALGORITHM",
}

export enum CertificateAuthorityStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DISABLED = "DISABLED",
  EXPIRED = "EXPIRED",
  FAILED = "FAILED",
  PENDING_CERTIFICATE = "PENDING_CERTIFICATE",
}

/**
 * <p>Contains information about your private certificate authority (CA). Your private CA
 * 			can issue and revoke X.509 digital certificates. Digital certificates verify that the
 * 			entity named in the certificate <b>Subject</b> field owns or
 * 			controls the public key contained in the <b>Subject Public Key
 * 				Info</b> field. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create your private CA. You must then
 * 			call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificateAuthorityCertificate.html">GetCertificateAuthorityCertificate</a> action to retrieve a private CA
 * 			certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises
 * 			root or subordinate CA certificate. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import the signed
 * 			certificate into AWS Certificate Manager (ACM). </p>
 */
export interface CertificateAuthority {
  /**
   * <p>Amazon Resource Name (ARN) for your private certificate authority (CA). The format is
   * 					<code>
   *                <i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.</p>
   */
  Arn?: string;

  /**
   * <p>The AWS account ID that owns the certificate authority.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>Date and time at which your private CA was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Date and time at which your private CA was last updated.</p>
   */
  LastStateChangeAt?: Date;

  /**
   * <p>Type of your private CA.</p>
   */
  Type?: CertificateAuthorityType | string;

  /**
   * <p>Serial number of your private CA.</p>
   */
  Serial?: string;

  /**
   * <p>Status of your private CA.</p>
   */
  Status?: CertificateAuthorityStatus | string;

  /**
   * <p>Date and time before which your private CA certificate is not valid.</p>
   */
  NotBefore?: Date;

  /**
   * <p>Date and time after which your private CA certificate is not valid.</p>
   */
  NotAfter?: Date;

  /**
   * <p>Reason the request to create your private CA failed.</p>
   */
  FailureReason?: FailureReason | string;

  /**
   * <p>Your private CA configuration.</p>
   */
  CertificateAuthorityConfiguration?: CertificateAuthorityConfiguration;

  /**
   * <p>Information about the certificate revocation list (CRL) created and maintained by your
   * 			private CA. </p>
   */
  RevocationConfiguration?: RevocationConfiguration;

  /**
   * <p>The period during which a deleted CA can be restored. For more information, see the
   * 				<code>PermanentDeletionTimeInDays</code> parameter of the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeleteCertificateAuthorityRequest.html">DeleteCertificateAuthorityRequest</a> action. </p>
   */
  RestorableUntil?: Date;
}

export namespace CertificateAuthority {
  export const filterSensitiveLog = (obj: CertificateAuthority): any => ({
    ...obj,
  });
}

export interface DescribeCertificateAuthorityResponse {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CertificateAuthority.html">CertificateAuthority</a> structure that contains information about your private
   * 			CA.</p>
   */
  CertificateAuthority?: CertificateAuthority;
}

export namespace DescribeCertificateAuthorityResponse {
  export const filterSensitiveLog = (obj: DescribeCertificateAuthorityResponse): any => ({
    ...obj,
  });
}

export interface DescribeCertificateAuthorityAuditReportRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the private CA. This must be of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The report ID returned by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action.</p>
   */
  AuditReportId: string | undefined;
}

export namespace DescribeCertificateAuthorityAuditReportRequest {
  export const filterSensitiveLog = (obj: DescribeCertificateAuthorityAuditReportRequest): any => ({
    ...obj,
  });
}

export enum AuditReportStatus {
  CREATING = "CREATING",
  FAILED = "FAILED",
  SUCCESS = "SUCCESS",
}

export interface DescribeCertificateAuthorityAuditReportResponse {
  /**
   * <p>Specifies whether report creation is in progress, has succeeded, or has failed.</p>
   */
  AuditReportStatus?: AuditReportStatus | string;

  /**
   * <p>Name of the S3 bucket that contains the report.</p>
   */
  S3BucketName?: string;

  /**
   * <p>S3 <b>key</b> that uniquely identifies the report file in
   * 			your S3 bucket.</p>
   */
  S3Key?: string;

  /**
   * <p>The date and time at which the report was created.</p>
   */
  CreatedAt?: Date;
}

export namespace DescribeCertificateAuthorityAuditReportResponse {
  export const filterSensitiveLog = (obj: DescribeCertificateAuthorityAuditReportResponse): any => ({
    ...obj,
  });
}

export interface GetCertificateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The ARN of the issued certificate. The ARN contains the certificate serial number and
   * 			must be in the following form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>/certificate/<i>286535153982981100925020015808220737245</i>
   *             </code>
   * 		       </p>
   */
  CertificateArn: string | undefined;
}

export namespace GetCertificateRequest {
  export const filterSensitiveLog = (obj: GetCertificateRequest): any => ({
    ...obj,
  });
}

export interface GetCertificateResponse {
  /**
   * <p>The base64 PEM-encoded certificate specified by the <code>CertificateArn</code>
   * 			parameter.</p>
   */
  Certificate?: string;

  /**
   * <p>The base64 PEM-encoded certificate chain that chains up to the on-premises root CA
   * 			certificate that you used to sign your private CA certificate. </p>
   */
  CertificateChain?: string;
}

export namespace GetCertificateResponse {
  export const filterSensitiveLog = (obj: GetCertificateResponse): any => ({
    ...obj,
  });
}

export interface GetCertificateAuthorityCertificateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of your private CA. This is of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   */
  CertificateAuthorityArn: string | undefined;
}

export namespace GetCertificateAuthorityCertificateRequest {
  export const filterSensitiveLog = (obj: GetCertificateAuthorityCertificateRequest): any => ({
    ...obj,
  });
}

export interface GetCertificateAuthorityCertificateResponse {
  /**
   * <p>Base64-encoded certificate authority (CA) certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>Base64-encoded certificate chain that includes any intermediate certificates and
   * 			chains up to root on-premises certificate that you used to sign your private CA
   * 			certificate. The chain does not include your private CA certificate. If this is a root
   * 			CA, the value will be null.</p>
   */
  CertificateChain?: string;
}

export namespace GetCertificateAuthorityCertificateResponse {
  export const filterSensitiveLog = (obj: GetCertificateAuthorityCertificateResponse): any => ({
    ...obj,
  });
}

export interface GetCertificateAuthorityCsrRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   */
  CertificateAuthorityArn: string | undefined;
}

export namespace GetCertificateAuthorityCsrRequest {
  export const filterSensitiveLog = (obj: GetCertificateAuthorityCsrRequest): any => ({
    ...obj,
  });
}

export interface GetCertificateAuthorityCsrResponse {
  /**
   * <p>The base64 PEM-encoded certificate signing request (CSR) for your private CA
   * 			certificate.</p>
   */
  Csr?: string;
}

export namespace GetCertificateAuthorityCsrResponse {
  export const filterSensitiveLog = (obj: GetCertificateAuthorityCsrResponse): any => ({
    ...obj,
  });
}

export interface GetPolicyRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA that will have its policy
   * 			retrieved. You can find the CA's ARN by calling the ListCertificateAuthorities action.
   *
   * 		</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetPolicyRequest {
  export const filterSensitiveLog = (obj: GetPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetPolicyResponse {
  /**
   * <p>The policy attached to the private CA as a JSON document.</p>
   */
  Policy?: string;
}

export namespace GetPolicyResponse {
  export const filterSensitiveLog = (obj: GetPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The certificate authority certificate you are importing does not comply with
 * 			conditions specified in the certificate that signed it.</p>
 */
export interface CertificateMismatchException extends __SmithyException, $MetadataBearer {
  name: "CertificateMismatchException";
  $fault: "client";
  message?: string;
}

export namespace CertificateMismatchException {
  export const filterSensitiveLog = (obj: CertificateMismatchException): any => ({
    ...obj,
  });
}

export interface ImportCertificateAuthorityCertificateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p>
   * 		       <p>
   *             <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   *          </p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The PEM-encoded certificate for a private CA. This may be a self-signed certificate in
   * 			the case of a root CA, or it may be signed by another CA that you control.</p>
   */
  Certificate: Uint8Array | undefined;

  /**
   * <p>A PEM-encoded file that contains all of your certificates, other than the certificate
   * 			you're importing, chaining up to your root CA. Your ACM Private CA-hosted or on-premises root
   * 			certificate is the last in the chain, and each certificate in the chain signs the one
   * 			preceding. </p>
   * 		       <p>This parameter must be supplied when you import a subordinate CA. When you import a
   * 			root CA, there is no chain.</p>
   */
  CertificateChain?: Uint8Array;
}

export namespace ImportCertificateAuthorityCertificateRequest {
  export const filterSensitiveLog = (obj: ImportCertificateAuthorityCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request action cannot be performed or is prohibited.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more fields in the certificate are invalid.</p>
 */
export interface MalformedCertificateException extends __SmithyException, $MetadataBearer {
  name: "MalformedCertificateException";
  $fault: "client";
  message?: string;
}

export namespace MalformedCertificateException {
  export const filterSensitiveLog = (obj: MalformedCertificateException): any => ({
    ...obj,
  });
}

export enum ValidityPeriodType {
  ABSOLUTE = "ABSOLUTE",
  DAYS = "DAYS",
  END_DATE = "END_DATE",
  MONTHS = "MONTHS",
  YEARS = "YEARS",
}

/**
 * <p>Validity specifies the period of time during which a certificate is valid. Validity can be
 * 			expressed as an explicit date and time when the certificate expires, or as a span of
 * 			time after issuance, stated in days, months, or years. For more information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC
 * 			5280.</p>
 * 		       <p>You can issue a certificate by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_IssueCertificate.html">IssueCertificate</a> action.</p>
 */
export interface Validity {
  /**
   * <p>A long integer interpreted according to the value of <code>Type</code>, below.</p>
   */
  Value: number | undefined;

  /**
   * <p>Determines how <i>ACM Private CA</i> interprets the <code>Value</code> parameter,
   * 			an integer. Supported validity types include those listed below. Type definitions with
   * 			values include a sample input value and the resulting output. </p>
   * 		       <p>
   *             <code>END_DATE</code>: The specific date and time when the certificate will expire,
   * 			expressed using UTCTime (YYMMDDHHMMSS) or GeneralizedTime (YYYYMMDDHHMMSS) format. When
   * 			UTCTime is used, if the year field (YY) is greater than or equal to 50, the year is
   * 			interpreted as 19YY. If the year field is less than 50, the year is interpreted as
   * 			20YY.</p>
   *
   * 		       <ul>
   *             <li>
   * 				           <p>Sample input value: 491231235959 (UTCTime format)</p>
   * 			         </li>
   *             <li>
   * 				           <p>Output expiration date/time: 12/31/2049 23:59:59</p>
   * 			         </li>
   *          </ul>
   *
   * 		       <p>
   *             <code>ABSOLUTE</code>:  The specific date and time when the certificate will expire,
   * 			expressed in seconds since the Unix Epoch. </p>
   *
   * 		       <ul>
   *             <li>
   * 				           <p>Sample input value: 2524608000</p>
   * 			         </li>
   *             <li>
   * 				           <p>Output expiration date/time: 01/01/2050 00:00:00</p>
   * 			         </li>
   *          </ul>
   * 		       <p>
   *             <code>DAYS</code>, <code>MONTHS</code>, <code>YEARS</code>: The relative time from the
   * 			moment of issuance until the certificate will expire, expressed in days, months, or
   * 			years. </p>
   * 		       <p>Example if  <code>DAYS</code>, issued on 10/12/2020 at 12:34:54 UTC:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Sample input value: 90</p>
   * 			         </li>
   *             <li>
   * 				           <p>Output expiration date: 01/10/2020 12:34:54 UTC</p>
   * 			         </li>
   *          </ul>
   */
  Type: ValidityPeriodType | string | undefined;
}

export namespace Validity {
  export const filterSensitiveLog = (obj: Validity): any => ({
    ...obj,
  });
}

export interface IssueCertificateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The certificate signing request (CSR) for the certificate you want to issue. You can
   * 			use the following OpenSSL command to create the CSR and a 2048 bit RSA private key. </p>
   * 		       <p>
   * 			         <code>openssl req -new -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem
   * 				-out csr/test_cert_.csr</code>
   * 		       </p>
   * 		       <p>If you have a configuration file, you can use the following OpenSSL command. The
   * 				<code>usr_cert</code> block in the configuration file contains your X509 version 3
   * 			extensions. </p>
   * 		       <p>
   *             <code>openssl req -new -config openssl_rsa.cnf -extensions usr_cert -newkey rsa:2048
   * 				-days -365 -keyout private/test_cert_priv_key.pem -out
   * 			csr/test_cert_.csr</code>
   *          </p>
   * 		       <p>Note: A CSR must provide either a <i>subject name</i> or a
   * 				<i>subject alternative name</i> or the request will be rejected.
   * 		</p>
   */
  Csr: Uint8Array | undefined;

  /**
   * <p>The name of the algorithm that will be used to sign the certificate to be issued. </p>
   * 		       <p>This parameter should not be confused with the <code>SigningAlgorithm</code> parameter
   * 			used to sign a CSR.</p>
   */
  SigningAlgorithm: SigningAlgorithm | string | undefined;

  /**
   * <p>Specifies a custom configuration template to use when issuing a certificate. If this
   * 			parameter is not provided, ACM Private CA defaults to the <code>EndEntityCertificate/V1</code>
   * 			template. For CA certificates, you should choose the shortest path length that meets
   * 			your needs. The path length is indicated by the PathLen<i>N</i> portion of
   * 			the ARN, where <i>N</i> is the <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaTerms.html#terms-cadepth">CA depth</a>.</p>
   * 		       <p>Note: The CA depth configured on a subordinate CA certificate must not exceed the
   * 			limit set by its parents in the CA hierarchy.</p>
   * 		       <p>The following service-owned <code>TemplateArn</code> values are supported by ACM Private CA: </p>
   * 		       <ul>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/CodeSigningCertificate/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/CodeSigningCertificate_CSRPassthrough/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/EndEntityCertificate/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/EndEntityCertificate_CSRPassthrough/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/EndEntityClientAuthCertificate/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/EndEntityClientAuthCertificate_CSRPassthrough/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/EndEntityServerAuthCertificate/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/EndEntityServerAuthCertificate_CSRPassthrough/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/OCSPSigningCertificate/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/OCSPSigningCertificate_CSRPassthrough/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/RootCACertificate/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen0/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen1/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen2/V1</p>
   * 			         </li>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/SubordinateCACertificate_PathLen3/V1</p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html">Using Templates</a>.</p>
   */
  TemplateArn?: string;

  /**
   * <p>Information describing the validity period of the certificate.</p>
   * 		       <p>When issuing a certificate, ACM Private CA sets the "Not Before" date in the validity field to
   * 			date and time minus 60 minutes. This is intended to compensate for time inconsistencies
   * 			across systems of 60 minutes or less. </p>
   * 		       <p>The validity period configured on a certificate must not exceed the limit set by its
   * 			parents in the CA hierarchy.</p>
   */
  Validity: Validity | undefined;

  /**
   * <p>Custom string that can be used to distinguish between calls to the <b>IssueCertificate</b> action. Idempotency tokens time out after
   * 			one hour. Therefore, if you call <b>IssueCertificate</b>
   * 			multiple times with the same idempotency token within 5 minutes, ACM Private CA recognizes that
   * 			you are requesting only one certificate and will issue only one. If you change the
   * 			idempotency token for each call, PCA recognizes that you are requesting multiple
   * 			certificates.</p>
   */
  IdempotencyToken?: string;
}

export namespace IssueCertificateRequest {
  export const filterSensitiveLog = (obj: IssueCertificateRequest): any => ({
    ...obj,
  });
}

export interface IssueCertificateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the issued certificate and the certificate serial
   * 			number. This is of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>/certificate/<i>286535153982981100925020015808220737245</i>
   *             </code>
   * 		       </p>
   */
  CertificateArn?: string;
}

export namespace IssueCertificateResponse {
  export const filterSensitiveLog = (obj: IssueCertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The certificate signing request is invalid.</p>
 */
export interface MalformedCSRException extends __SmithyException, $MetadataBearer {
  name: "MalformedCSRException";
  $fault: "client";
  message?: string;
}

export namespace MalformedCSRException {
  export const filterSensitiveLog = (obj: MalformedCSRException): any => ({
    ...obj,
  });
}

/**
 * <p>The token specified in the <code>NextToken</code> argument is not valid. Use the token
 * 			returned from your previous call to <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a>.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

export enum ResourceOwner {
  OTHER_ACCOUNTS = "OTHER_ACCOUNTS",
  SELF = "SELF",
}

export interface ListCertificateAuthoritiesRequest {
  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   * 			response with truncated results. Set it to the value of the <code>NextToken</code>
   * 			parameter from the response you just received.</p>
   */
  NextToken?: string;

  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   * 			return in the response on each page. If additional items exist beyond the number you
   * 			specify, the <code>NextToken</code> element is sent in the response. Use this
   * 				<code>NextToken</code> value in a subsequent request to retrieve additional
   * 			items.</p>
   */
  MaxResults?: number;

  /**
   * <p>Use this parameter to filter the returned set of certificate authorities based on
   * 			their owner. The default is SELF.</p>
   */
  ResourceOwner?: ResourceOwner | string;
}

export namespace ListCertificateAuthoritiesRequest {
  export const filterSensitiveLog = (obj: ListCertificateAuthoritiesRequest): any => ({
    ...obj,
  });
}

export interface ListCertificateAuthoritiesResponse {
  /**
   * <p>Summary information about each certificate authority you have created.</p>
   */
  CertificateAuthorities?: CertificateAuthority[];

  /**
   * <p>When the list is truncated, this value is present and should be used for the
   * 				<code>NextToken</code> parameter in a subsequent pagination request.</p>
   */
  NextToken?: string;
}

export namespace ListCertificateAuthoritiesResponse {
  export const filterSensitiveLog = (obj: ListCertificateAuthoritiesResponse): any => ({
    ...obj,
  });
}

export interface ListPermissionsRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA to inspect. You can find the ARN by
   * 			calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. This must be of the form:
   * 				<code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code>
   * 			You can get a private CA's ARN by running the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action.</p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>When paginating results, use this parameter in a subsequent request after you receive
   * 			a response with truncated results. Set it to the value of <b>NextToken</b> from the response you just received.</p>
   */
  NextToken?: string;

  /**
   * <p>When paginating results, use this parameter to specify the maximum number of items to
   * 			return in the response. If additional items exist beyond the number you specify, the
   * 				<b>NextToken</b> element is sent in the response. Use this
   * 				<b>NextToken</b> value in a subsequent request to retrieve
   * 			additional items.</p>
   */
  MaxResults?: number;
}

export namespace ListPermissionsRequest {
  export const filterSensitiveLog = (obj: ListPermissionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Permissions designate which private CA actions can be performed by an AWS service or
 * 			entity. In order for ACM to automatically renew private certificates, you must give
 * 			the ACM service principal all available permissions (<code>IssueCertificate</code>,
 * 				<code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be
 * 			assigned with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action,
 * 			removed with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action, and
 * 			listed with the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action.</p>
 */
export interface Permission {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA from which the permission was
   * 			issued.</p>
   */
  CertificateAuthorityArn?: string;

  /**
   * <p>The time at which the permission was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The AWS service or entity that holds the permission. At this time, the only valid
   * 			principal is <code>acm.amazonaws.com</code>.</p>
   */
  Principal?: string;

  /**
   * <p>The ID of the account that assigned the permission.</p>
   */
  SourceAccount?: string;

  /**
   * <p>The private CA actions that can be performed by the designated AWS service.</p>
   */
  Actions?: (ActionType | string)[];

  /**
   * <p>The name of the policy that is associated with the permission.</p>
   */
  Policy?: string;
}

export namespace Permission {
  export const filterSensitiveLog = (obj: Permission): any => ({
    ...obj,
  });
}

export interface ListPermissionsResponse {
  /**
   * <p>Summary information about each permission assigned by the specified private CA,
   * 			including the action enabled, the policy provided, and the time of creation.</p>
   */
  Permissions?: Permission[];

  /**
   * <p>When the list is truncated, this value is present and should be used for the <b>NextToken</b> parameter in a subsequent pagination request.
   * 		</p>
   */
  NextToken?: string;
}

export namespace ListPermissionsResponse {
  export const filterSensitiveLog = (obj: ListPermissionsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a
   * 			response with truncated results. Set it to the value of <b>NextToken</b> from the response you just received.</p>
   */
  NextToken?: string;

  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to
   * 			return in the response. If additional items exist beyond the number you specify, the
   * 				<b>NextToken</b> element is sent in the response. Use this
   * 				<b>NextToken</b> value in a subsequent request to retrieve
   * 			additional items.</p>
   */
  MaxResults?: number;
}

export namespace ListTagsRequest {
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj,
  });
}

export interface ListTagsResponse {
  /**
   * <p>The tags associated with your private CA.</p>
   */
  Tags?: Tag[];

  /**
   * <p>When the list is truncated, this value is present and should be used for the <b>NextToken</b> parameter in a subsequent pagination request.
   * 		</p>
   */
  NextToken?: string;
}

export namespace ListTagsResponse {
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj,
  });
}

export interface PutPolicyRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA to associate with the policy. The ARN of
   * 			the CA can be found by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action.</p>
   * 		       <p></p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The path and filename of a JSON-formatted IAM policy to attach to the specified private CA
   * 			resource. If this policy does not contain all required statements or if it  includes any
   * 			statement that is not allowed, the <code>PutPolicy</code> action returns an <code>InvalidPolicyException</code>.
   * 			For information about IAM policy and statement structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json">Overview
   * 				of JSON Policies</a>.</p>
   */
  Policy: string | undefined;
}

export namespace PutPolicyRequest {
  export const filterSensitiveLog = (obj: PutPolicyRequest): any => ({
    ...obj,
  });
}

export interface RestoreCertificateAuthorityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   */
  CertificateAuthorityArn: string | undefined;
}

export namespace RestoreCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: RestoreCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Your request has already been completed.</p>
 */
export interface RequestAlreadyProcessedException extends __SmithyException, $MetadataBearer {
  name: "RequestAlreadyProcessedException";
  $fault: "client";
  message?: string;
}

export namespace RequestAlreadyProcessedException {
  export const filterSensitiveLog = (obj: RequestAlreadyProcessedException): any => ({
    ...obj,
  });
}

export enum RevocationReason {
  AFFILIATION_CHANGED = "AFFILIATION_CHANGED",
  A_A_COMPROMISE = "A_A_COMPROMISE",
  CERTIFICATE_AUTHORITY_COMPROMISE = "CERTIFICATE_AUTHORITY_COMPROMISE",
  CESSATION_OF_OPERATION = "CESSATION_OF_OPERATION",
  KEY_COMPROMISE = "KEY_COMPROMISE",
  PRIVILEGE_WITHDRAWN = "PRIVILEGE_WITHDRAWN",
  SUPERSEDED = "SUPERSEDED",
  UNSPECIFIED = "UNSPECIFIED",
}

export interface RevokeCertificateRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be
   * 			revoked. This must be of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>Serial number of the certificate to be revoked. This must be in hexadecimal format.
   * 			You can retrieve the serial number by calling <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> with the Amazon
   * 			Resource Name (ARN) of the certificate you want and the ARN of your private CA. The
   * 				<b>GetCertificate</b> action retrieves the certificate in
   * 			the PEM format. You can use the following OpenSSL command to list the certificate in
   * 			text format and copy the hexadecimal serial number. </p>
   * 		       <p>
   *             <code>openssl x509 -in <i>file_path</i> -text -noout</code>
   *          </p>
   * 		       <p>You can also copy the serial number from the console or use the <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html">DescribeCertificate</a> action in the <i>AWS Certificate Manager API
   * 				Reference</i>. </p>
   */
  CertificateSerial: string | undefined;

  /**
   * <p>Specifies why you revoked the certificate.</p>
   */
  RevocationReason: RevocationReason | string | undefined;
}

export namespace RevokeCertificateRequest {
  export const filterSensitiveLog = (obj: RevokeCertificateRequest): any => ({
    ...obj,
  });
}

export interface TagCertificateAuthorityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>List of tags to be associated with the CA.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: TagCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

/**
 * <p>You can associate up to 50 tags with a private CA. Exception information is contained
 * 			in the exception message field.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

export interface UntagCertificateAuthorityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>List of tags to be removed from the CA.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace UntagCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: UntagCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

export interface UpdateCertificateAuthorityRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be
   * 			revoked. This must be of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>Revocation information for your private CA.</p>
   */
  RevocationConfiguration?: RevocationConfiguration;

  /**
   * <p>Status of your private CA.</p>
   */
  Status?: CertificateAuthorityStatus | string;
}

export namespace UpdateCertificateAuthorityRequest {
  export const filterSensitiveLog = (obj: UpdateCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

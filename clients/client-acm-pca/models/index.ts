import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 * 		       <p>Contains information about the certificate subject. The certificate can be one issued
 * 			by your private certificate authority (CA) or it can be your private CA certificate. The
 * 				<b>Subject</b> field in the certificate identifies the
 * 			entity that owns or controls the public key in the certificate. The entity can be a
 * 			user, computer, device, or service. The <b>Subject</b> must
 * 			contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished
 * 			names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique
 * 			for each entity, but your private CA can issue more than one certificate with the same
 * 			DN to the same entity. </p>
 *
 */
export interface ASN1Subject {
  __type?: "ASN1Subject";
  /**
   *
   * 		       <p>Fully qualified domain name (FQDN) associated with the certificate subject.</p>
   *
   */
  CommonName?: string;

  /**
   *
   * 		       <p>Two-digit code that specifies the country in which the certificate subject
   * 			located.</p>
   *
   */
  Country?: string;

  /**
   *
   * 		       <p>Disambiguating information for the certificate subject.</p>
   *
   */
  DistinguishedNameQualifier?: string;

  /**
   *
   * 		       <p>Typically a qualifier appended to the name of an individual. Examples include Jr. for
   * 			junior, Sr. for senior, and III for third.</p>
   *
   */
  GenerationQualifier?: string;

  /**
   *
   * 		       <p>First name.</p>
   *
   */
  GivenName?: string;

  /**
   *
   * 		       <p>Concatenation that typically contains the first letter of the <b>GivenName</b>, the first letter of the middle name if one exists, and the
   * 			first letter of the <b>SurName</b>.</p>
   *
   */
  Initials?: string;

  /**
   *
   * 		       <p>The locality (such as a city or town) in which the certificate subject is
   * 			located.</p>
   *
   */
  Locality?: string;

  /**
   *
   * 		       <p>Legal name of the organization with which the certificate subject is affiliated.
   * 		</p>
   *
   */
  Organization?: string;

  /**
   *
   * 		       <p>A subdivision or unit of the organization (such as sales or finance) with which the
   * 			certificate subject is affiliated.</p>
   *
   */
  OrganizationalUnit?: string;

  /**
   *
   * 		       <p>Typically a shortened version of a longer <b>GivenName</b>.
   * 			For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth,
   * 			Liz, or Eliza.</p>
   *
   */
  Pseudonym?: string;

  /**
   *
   * 		       <p>The certificate serial number.</p>
   *
   */
  SerialNumber?: string;

  /**
   *
   * 		       <p>State in which the subject of the certificate is located.</p>
   *
   */
  State?: string;

  /**
   *
   * 		       <p>Family name. In the US and the UK, for example, the surname of an individual is
   * 			ordered last. In Asian cultures the surname is typically ordered first.</p>
   *
   */
  Surname?: string;

  /**
   *
   * 		       <p>A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the
   * 			certificate subject.</p>
   *
   */
  Title?: string;
}

export namespace ASN1Subject {
  export function isa(o: any): o is ASN1Subject {
    return _smithy.isa(o, "ASN1Subject");
  }
}

export enum ActionType {
  GetCertificate = "GetCertificate",
  IssueCertificate = "IssueCertificate",
  ListPermissions = "ListPermissions"
}

export enum AuditReportResponseFormat {
  CSV = "CSV",
  JSON = "JSON"
}

export enum AuditReportStatus {
  CREATING = "CREATING",
  FAILED = "FAILED",
  SUCCESS = "SUCCESS"
}

/**
 *
 * 		       <p>Contains information about your private certificate authority (CA). Your private CA can
 * 			issue and revoke X.509 digital certificates. Digital certificates verify that the entity
 * 			named in the certificate <b>Subject</b> field owns or controls
 * 			the public key contained in the <b>Subject Public Key Info</b>
 * 			field. Call the <a>CreateCertificateAuthority</a> action to create your
 * 			private CA. You must then call the <a>GetCertificateAuthorityCertificate</a>
 * 			action to retrieve a private CA certificate signing request (CSR). Sign the CSR with
 * 			your ACM Private CA-hosted or on-premises root  or subordinate CA certificate. Call the <a>ImportCertificateAuthorityCertificate</a> action to import the signed
 * 			certificate into AWS Certificate Manager (ACM). </p>
 *
 */
export interface CertificateAuthority {
  __type?: "CertificateAuthority";
  /**
   *
   * 		       <p>Amazon Resource Name (ARN) for your private certificate authority (CA). The format is
   * 					<code>
   *                <i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>Your private CA configuration.</p>
   *
   */
  CertificateAuthorityConfiguration?: CertificateAuthorityConfiguration;

  /**
   *
   * 		       <p>Date and time at which your private CA was created.</p>
   *
   */
  CreatedAt?: Date;

  /**
   *
   * 		       <p>Reason the request to create your private CA failed.</p>
   *
   */
  FailureReason?: FailureReason | string;

  /**
   *
   * 		       <p>Date and time at which your private CA was last updated.</p>
   *
   */
  LastStateChangeAt?: Date;

  /**
   *
   * 		       <p>Date and time after which your private CA certificate is not valid.</p>
   *
   */
  NotAfter?: Date;

  /**
   *
   * 		       <p>Date and time before which your private CA certificate is not valid.</p>
   *
   */
  NotBefore?: Date;

  /**
   *
   * 		       <p>The period during which a deleted CA can be restored. For more information, see the
   * 				<code>PermanentDeletionTimeInDays</code> parameter of the <a>DeleteCertificateAuthorityRequest</a> action. </p>
   *
   */
  RestorableUntil?: Date;

  /**
   *
   * 		       <p>Information about the certificate revocation list (CRL) created and maintained by your
   * 			private CA. </p>
   *
   */
  RevocationConfiguration?: RevocationConfiguration;

  /**
   *
   * 		       <p>Serial number of your private CA.</p>
   *
   */
  Serial?: string;

  /**
   *
   * 		       <p>Status of your private CA.</p>
   *
   */
  Status?: CertificateAuthorityStatus | string;

  /**
   *
   * 		       <p>Type of your private CA.</p>
   *
   */
  Type?: CertificateAuthorityType | string;
}

export namespace CertificateAuthority {
  export function isa(o: any): o is CertificateAuthority {
    return _smithy.isa(o, "CertificateAuthority");
  }
}

/**
 *
 * 		       <p>Contains configuration information for your private certificate authority (CA). This
 * 			includes information about the class of public key algorithm and the key pair that your
 * 			private CA creates when it issues a certificate. It also includes the signature
 * 			algorithm that it uses when issuing certificates, and its X.500 distinguished name. You
 * 			must specify this information when you call the <a>CreateCertificateAuthority</a> action. </p>
 *
 */
export interface CertificateAuthorityConfiguration {
  __type?: "CertificateAuthorityConfiguration";
  /**
   *
   * 		       <p>Type of the public key algorithm and size, in bits, of the key pair that your CA creates
   * 			when it issues a certificate. When you create a subordinate CA, you must use a key
   * 			algorithm supported by the parent CA.</p>
   *
   */
  KeyAlgorithm: KeyAlgorithm | string | undefined;

  /**
   *
   * 		       <p>Name of the algorithm your private CA uses to sign certificate requests.</p>
   *
   */
  SigningAlgorithm: SigningAlgorithm | string | undefined;

  /**
   *
   * 		       <p>Structure that contains X.500 distinguished name information for your private
   * 			CA.</p>
   *
   */
  Subject: ASN1Subject | undefined;
}

export namespace CertificateAuthorityConfiguration {
  export function isa(o: any): o is CertificateAuthorityConfiguration {
    return _smithy.isa(o, "CertificateAuthorityConfiguration");
  }
}

export enum CertificateAuthorityStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DISABLED = "DISABLED",
  EXPIRED = "EXPIRED",
  FAILED = "FAILED",
  PENDING_CERTIFICATE = "PENDING_CERTIFICATE"
}

export enum CertificateAuthorityType {
  ROOT = "ROOT",
  SUBORDINATE = "SUBORDINATE"
}

/**
 *
 * 		       <p>The certificate authority certificate you are importing does not comply with
 * 			conditions specified in the certificate that signed it.</p>
 *
 */
export interface CertificateMismatchException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "CertificateMismatchException";
  $fault: "client";
  message?: string;
}

export namespace CertificateMismatchException {
  export function isa(o: any): o is CertificateMismatchException {
    return _smithy.isa(o, "CertificateMismatchException");
  }
}

/**
 *
 * 		       <p>A previous update to your private CA is still ongoing.</p>
 *
 */
export interface ConcurrentModificationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ConcurrentModificationException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentModificationException {
  export function isa(o: any): o is ConcurrentModificationException {
    return _smithy.isa(o, "ConcurrentModificationException");
  }
}

export interface CreateCertificateAuthorityAuditReportRequest {
  __type?: "CreateCertificateAuthorityAuditReportRequest";
  /**
   *
   * 		       <p>The format in which to create the report. This can be either <b>JSON</b> or <b>CSV</b>.</p>
   *
   */
  AuditReportResponseFormat: AuditReportResponseFormat | string | undefined;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the CA to be audited. This is of the form:</p>
   * 		       <p>
   *             <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.</p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>The name of the S3 bucket that will contain the audit report.</p>
   *
   */
  S3BucketName: string | undefined;
}

export namespace CreateCertificateAuthorityAuditReportRequest {
  export function isa(
    o: any
  ): o is CreateCertificateAuthorityAuditReportRequest {
    return _smithy.isa(o, "CreateCertificateAuthorityAuditReportRequest");
  }
}

export interface CreateCertificateAuthorityAuditReportResponse
  extends $MetadataBearer {
  __type?: "CreateCertificateAuthorityAuditReportResponse";
  /**
   *
   * 		       <p>An alphanumeric string that contains a report identifier.</p>
   *
   */
  AuditReportId?: string;

  /**
   *
   * 		       <p>The <b>key</b> that uniquely identifies the report file in
   * 			your S3 bucket.</p>
   *
   */
  S3Key?: string;
}

export namespace CreateCertificateAuthorityAuditReportResponse {
  export function isa(
    o: any
  ): o is CreateCertificateAuthorityAuditReportResponse {
    return _smithy.isa(o, "CreateCertificateAuthorityAuditReportResponse");
  }
}

export interface CreateCertificateAuthorityRequest {
  __type?: "CreateCertificateAuthorityRequest";
  /**
   *
   * 		       <p>Name and bit size of the private key algorithm, the name of the signing algorithm, and
   * 			X.500 certificate subject information.</p>
   *
   */
  CertificateAuthorityConfiguration:
    | CertificateAuthorityConfiguration
    | undefined;

  /**
   *
   * 		       <p>The type of the certificate authority.</p>
   *
   */
  CertificateAuthorityType: CertificateAuthorityType | string | undefined;

  /**
   *
   * 		       <p>Alphanumeric string that can be used to distinguish between calls to <b>CreateCertificateAuthority</b>. Idempotency tokens time out after
   * 			five minutes. Therefore, if you call <b>CreateCertificateAuthority</b> multiple times with the same idempotency
   * 			token within a five minute period, ACM Private CA recognizes that you are requesting only one
   * 			certificate. As a result, ACM Private CA issues only one. If you change the idempotency token for
   * 			each call, however, ACM Private CA recognizes that you are requesting multiple
   * 			certificates.</p>
   *
   */
  IdempotencyToken?: string;

  /**
   *
   * 		       <p>Contains a Boolean value that you can use to enable a certification revocation list
   * 			(CRL) for the CA, the name of the S3 bucket to which ACM Private CA will write the CRL, and an
   * 			optional CNAME alias that you can use to hide the name of your bucket in the <b>CRL Distribution Points</b> extension of your CA certificate. For
   * 			more information, see the <a>CrlConfiguration</a> structure. </p>
   *
   */
  RevocationConfiguration?: RevocationConfiguration;

  /**
   *
   * 		       <p>Key-value pairs that will be attached to the new private CA. You can associate up to
   * 			50 tags with a private CA. For information using tags with </p>
   * 		       <p>IAM to manage permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace CreateCertificateAuthorityRequest {
  export function isa(o: any): o is CreateCertificateAuthorityRequest {
    return _smithy.isa(o, "CreateCertificateAuthorityRequest");
  }
}

export interface CreateCertificateAuthorityResponse extends $MetadataBearer {
  __type?: "CreateCertificateAuthorityResponse";
  /**
   *
   * 		       <p>If successful, the Amazon Resource Name (ARN) of the certificate authority (CA). This
   * 			is of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   *
   */
  CertificateAuthorityArn?: string;
}

export namespace CreateCertificateAuthorityResponse {
  export function isa(o: any): o is CreateCertificateAuthorityResponse {
    return _smithy.isa(o, "CreateCertificateAuthorityResponse");
  }
}

export interface CreatePermissionRequest {
  __type?: "CreatePermissionRequest";
  /**
   *
   * 		       <p>The actions that the specified AWS service principal can use. These include
   * 				<code>IssueCertificate</code>, <code>GetCertificate</code>, and
   * 				<code>ListPermissions</code>.</p>
   *
   */
  Actions: Array<ActionType | string> | undefined;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the CA that grants the permissions. You can find the ARN
   * 			by calling the <a>ListCertificateAuthorities</a> action. This must have the
   * 			following form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>The AWS service or identity that receives the permission. At this time, the only
   * 			valid principal is <code>acm.amazonaws.com</code>.</p>
   *
   */
  Principal: string | undefined;

  /**
   *
   * 		       <p>The ID of the calling account.</p>
   *
   */
  SourceAccount?: string;
}

export namespace CreatePermissionRequest {
  export function isa(o: any): o is CreatePermissionRequest {
    return _smithy.isa(o, "CreatePermissionRequest");
  }
}

/**
 *
 * 		       <p>Contains configuration information for a certificate revocation list (CRL). Your
 * 			private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You
 * 			can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA
 * 			writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by
 * 			specifying a value for the <b>CustomCname</b> parameter. Your
 * 			private CA copies the CNAME or the S3 bucket name to the <b>CRL
 * 				Distribution Points</b> extension of each certificate it issues. Your S3
 * 			bucket policy must give write permission to ACM Private CA. </p>
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
 *
 */
export interface CrlConfiguration {
  __type?: "CrlConfiguration";
  /**
   *
   * 		       <p>Name inserted into the certificate <b>CRL Distribution
   * 				Points</b> extension that enables the use of an alias for the CRL
   * 			distribution point. Use this value if you don't want the name of your S3 bucket to be
   * 			public.</p>
   *
   */
  CustomCname?: string;

  /**
   *
   * 		       <p>Boolean value that specifies whether certificate revocation lists (CRLs) are enabled. You
   * 			can use this value to enable certificate revocation for a new CA when you call the <a>CreateCertificateAuthority</a> action or for an existing CA when you call
   * 			the <a>UpdateCertificateAuthority</a> action. </p>
   *
   */
  Enabled: boolean | undefined;

  /**
   *
   * 		       <p>Number of days until a certificate expires.</p>
   *
   */
  ExpirationInDays?: number;

  /**
   *
   * 		       <p>Name of the S3 bucket that contains the CRL. If you do not provide a value for the
   * 				<b>CustomCname</b> argument, the name of your S3 bucket
   * 			is placed into the <b>CRL Distribution Points</b> extension of
   * 			the issued certificate. You can change the name of your bucket by calling the <a>UpdateCertificateAuthority</a> action. You must specify a bucket policy that
   * 			allows ACM Private CA to write the CRL to your bucket.</p>
   *
   */
  S3BucketName?: string;
}

export namespace CrlConfiguration {
  export function isa(o: any): o is CrlConfiguration {
    return _smithy.isa(o, "CrlConfiguration");
  }
}

export interface DeleteCertificateAuthorityRequest {
  __type?: "DeleteCertificateAuthorityRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must have the following form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>The number of days to make a CA restorable after it has been deleted. This can be
   * 			anywhere from 7 to 30 days, with 30 being the default.</p>
   *
   */
  PermanentDeletionTimeInDays?: number;
}

export namespace DeleteCertificateAuthorityRequest {
  export function isa(o: any): o is DeleteCertificateAuthorityRequest {
    return _smithy.isa(o, "DeleteCertificateAuthorityRequest");
  }
}

export interface DeletePermissionRequest {
  __type?: "DeletePermissionRequest";
  /**
   *
   * 		       <p>The Amazon Resource Number (ARN) of the private CA that issued the permissions. You can find
   * 			the CA's ARN by calling the <a>ListCertificateAuthorities</a> action. This
   * 			must have the following form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>The AWS service or identity that will have its CA permissions revoked. At this time,
   * 			the only valid service principal is <code>acm.amazonaws.com</code>
   *          </p>
   *
   */
  Principal: string | undefined;

  /**
   *
   * 		       <p>The AWS account that calls this action.</p>
   *
   */
  SourceAccount?: string;
}

export namespace DeletePermissionRequest {
  export function isa(o: any): o is DeletePermissionRequest {
    return _smithy.isa(o, "DeletePermissionRequest");
  }
}

export interface DescribeCertificateAuthorityAuditReportRequest {
  __type?: "DescribeCertificateAuthorityAuditReportRequest";
  /**
   *
   * 		       <p>The report ID returned by calling the <a>CreateCertificateAuthorityAuditReport</a> action.</p>
   *
   */
  AuditReportId: string | undefined;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the private CA. This must be of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   *
   */
  CertificateAuthorityArn: string | undefined;
}

export namespace DescribeCertificateAuthorityAuditReportRequest {
  export function isa(
    o: any
  ): o is DescribeCertificateAuthorityAuditReportRequest {
    return _smithy.isa(o, "DescribeCertificateAuthorityAuditReportRequest");
  }
}

export interface DescribeCertificateAuthorityAuditReportResponse
  extends $MetadataBearer {
  __type?: "DescribeCertificateAuthorityAuditReportResponse";
  /**
   *
   * 		       <p>Specifies whether report creation is in progress, has succeeded, or has failed.</p>
   *
   */
  AuditReportStatus?: AuditReportStatus | string;

  /**
   *
   * 		       <p>The date and time at which the report was created.</p>
   *
   */
  CreatedAt?: Date;

  /**
   *
   * 		       <p>Name of the S3 bucket that contains the report.</p>
   *
   */
  S3BucketName?: string;

  /**
   *
   * 		       <p>S3 <b>key</b> that uniquely identifies the report file in
   * 			your S3 bucket.</p>
   *
   */
  S3Key?: string;
}

export namespace DescribeCertificateAuthorityAuditReportResponse {
  export function isa(
    o: any
  ): o is DescribeCertificateAuthorityAuditReportResponse {
    return _smithy.isa(o, "DescribeCertificateAuthorityAuditReportResponse");
  }
}

export interface DescribeCertificateAuthorityRequest {
  __type?: "DescribeCertificateAuthorityRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   *
   */
  CertificateAuthorityArn: string | undefined;
}

export namespace DescribeCertificateAuthorityRequest {
  export function isa(o: any): o is DescribeCertificateAuthorityRequest {
    return _smithy.isa(o, "DescribeCertificateAuthorityRequest");
  }
}

export interface DescribeCertificateAuthorityResponse extends $MetadataBearer {
  __type?: "DescribeCertificateAuthorityResponse";
  /**
   *
   * 		       <p>A <a>CertificateAuthority</a> structure that contains information about
   * 			your private CA.</p>
   *
   */
  CertificateAuthority?: CertificateAuthority;
}

export namespace DescribeCertificateAuthorityResponse {
  export function isa(o: any): o is DescribeCertificateAuthorityResponse {
    return _smithy.isa(o, "DescribeCertificateAuthorityResponse");
  }
}

export enum FailureReason {
  OTHER = "OTHER",
  REQUEST_TIMED_OUT = "REQUEST_TIMED_OUT",
  UNSUPPORTED_ALGORITHM = "UNSUPPORTED_ALGORITHM"
}

export interface GetCertificateAuthorityCertificateRequest {
  __type?: "GetCertificateAuthorityCertificateRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of your private CA. This is of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   *
   */
  CertificateAuthorityArn: string | undefined;
}

export namespace GetCertificateAuthorityCertificateRequest {
  export function isa(o: any): o is GetCertificateAuthorityCertificateRequest {
    return _smithy.isa(o, "GetCertificateAuthorityCertificateRequest");
  }
}

export interface GetCertificateAuthorityCertificateResponse
  extends $MetadataBearer {
  __type?: "GetCertificateAuthorityCertificateResponse";
  /**
   *
   * 		       <p>Base64-encoded certificate authority (CA) certificate.</p>
   *
   */
  Certificate?: string;

  /**
   *
   * 		       <p>Base64-encoded certificate chain that includes any intermediate certificates and chains up
   * 			to root on-premises certificate that you used to sign your private CA certificate. The
   * 			chain does not include your private CA certificate. If this is a root CA, the value will
   * 			be null.</p>
   *
   */
  CertificateChain?: string;
}

export namespace GetCertificateAuthorityCertificateResponse {
  export function isa(o: any): o is GetCertificateAuthorityCertificateResponse {
    return _smithy.isa(o, "GetCertificateAuthorityCertificateResponse");
  }
}

export interface GetCertificateAuthorityCsrRequest {
  __type?: "GetCertificateAuthorityCsrRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) that was returned when you called the <a>CreateCertificateAuthority</a> action. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   *
   */
  CertificateAuthorityArn: string | undefined;
}

export namespace GetCertificateAuthorityCsrRequest {
  export function isa(o: any): o is GetCertificateAuthorityCsrRequest {
    return _smithy.isa(o, "GetCertificateAuthorityCsrRequest");
  }
}

export interface GetCertificateAuthorityCsrResponse extends $MetadataBearer {
  __type?: "GetCertificateAuthorityCsrResponse";
  /**
   *
   * 		       <p>The base64 PEM-encoded certificate signing request (CSR) for your private CA
   * 			certificate.</p>
   *
   */
  Csr?: string;
}

export namespace GetCertificateAuthorityCsrResponse {
  export function isa(o: any): o is GetCertificateAuthorityCsrResponse {
    return _smithy.isa(o, "GetCertificateAuthorityCsrResponse");
  }
}

export interface GetCertificateRequest {
  __type?: "GetCertificateRequest";
  /**
   *
   * 		       <p>The ARN of the issued certificate. The ARN contains the certificate serial number and
   * 			must be in the following form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>/certificate/<i>286535153982981100925020015808220737245</i>
   *             </code>
   * 		       </p>
   *
   */
  CertificateArn: string | undefined;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>.
   * 		</p>
   *
   */
  CertificateAuthorityArn: string | undefined;
}

export namespace GetCertificateRequest {
  export function isa(o: any): o is GetCertificateRequest {
    return _smithy.isa(o, "GetCertificateRequest");
  }
}

export interface GetCertificateResponse extends $MetadataBearer {
  __type?: "GetCertificateResponse";
  /**
   *
   * 		       <p>The base64 PEM-encoded certificate specified by the <code>CertificateArn</code>
   * 			parameter.</p>
   *
   */
  Certificate?: string;

  /**
   *
   * 		       <p>The base64 PEM-encoded certificate chain that chains up to the on-premises root CA
   * 			certificate that you used to sign your private CA certificate. </p>
   *
   */
  CertificateChain?: string;
}

export namespace GetCertificateResponse {
  export function isa(o: any): o is GetCertificateResponse {
    return _smithy.isa(o, "GetCertificateResponse");
  }
}

export interface ImportCertificateAuthorityCertificateRequest {
  __type?: "ImportCertificateAuthorityCertificateRequest";
  /**
   *
   * 		       <p>The PEM-encoded certificate for a private CA. This may be a self-signed certificate in the
   * 			case of a root CA, or it may be signed by another CA that you control.</p>
   *
   */
  Certificate: Uint8Array | undefined;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p>
   * 		       <p>
   *             <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   *          </p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>A PEM-encoded file that contains all of your certificates, other than the certificate you're
   * 			importing, chaining up to your root CA. Your ACM Private CA-hosted or on-premises root
   * 			certificate is the last in the chain, and each certificate in the chain signs the one
   * 			preceding. </p>
   * 		       <p>This parameter must be supplied when you import a subordinate CA. When you import a
   * 			root CA, there is no chain.</p>
   *
   */
  CertificateChain?: Uint8Array;
}

export namespace ImportCertificateAuthorityCertificateRequest {
  export function isa(
    o: any
  ): o is ImportCertificateAuthorityCertificateRequest {
    return _smithy.isa(o, "ImportCertificateAuthorityCertificateRequest");
  }
}

/**
 *
 * 		       <p>One or more of the specified arguments was not valid.</p>
 *
 */
export interface InvalidArgsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidArgsException";
  $fault: "client";
  message?: string;
}

export namespace InvalidArgsException {
  export function isa(o: any): o is InvalidArgsException {
    return _smithy.isa(o, "InvalidArgsException");
  }
}

/**
 *
 * 		       <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 */
export interface InvalidArnException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidArnException";
  $fault: "client";
  message?: string;
}

export namespace InvalidArnException {
  export function isa(o: any): o is InvalidArnException {
    return _smithy.isa(o, "InvalidArnException");
  }
}

/**
 *
 * 		       <p>The token specified in the <code>NextToken</code> argument is not valid. Use the token
 * 			returned from your previous call to <a>ListCertificateAuthorities</a>.</p>
 *
 */
export interface InvalidNextTokenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidNextTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return _smithy.isa(o, "InvalidNextTokenException");
  }
}

/**
 *
 * 		       <p>The S3 bucket policy is not valid. The policy must give ACM Private CA rights to read from
 * 			and write to the bucket and find the bucket location.</p>
 *
 */
export interface InvalidPolicyException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidPolicyException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPolicyException {
  export function isa(o: any): o is InvalidPolicyException {
    return _smithy.isa(o, "InvalidPolicyException");
  }
}

/**
 *
 * 		       <p>The request action cannot be performed or is prohibited.</p>
 *
 */
export interface InvalidRequestException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidRequestException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return _smithy.isa(o, "InvalidRequestException");
  }
}

/**
 *
 * 		       <p>The private CA is in a state during which a report or certificate cannot be
 * 			generated.</p>
 *
 */
export interface InvalidStateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidStateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidStateException {
  export function isa(o: any): o is InvalidStateException {
    return _smithy.isa(o, "InvalidStateException");
  }
}

/**
 *
 * 		       <p>The tag associated with the CA is not valid. The invalid argument is contained in the
 * 			message field.</p>
 *
 */
export interface InvalidTagException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidTagException";
  $fault: "client";
  message?: string;
}

export namespace InvalidTagException {
  export function isa(o: any): o is InvalidTagException {
    return _smithy.isa(o, "InvalidTagException");
  }
}

export interface IssueCertificateRequest {
  __type?: "IssueCertificateRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>The certificate signing request (CSR) for the certificate you want to issue. You can
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
   *
   */
  Csr: Uint8Array | undefined;

  /**
   *
   * 		       <p>Custom string that can be used to distinguish between calls to the <b>IssueCertificate</b> action. Idempotency tokens time out after one hour.
   * 			Therefore, if you call <b>IssueCertificate</b> multiple times
   * 			with the same idempotency token within 5 minutes, ACM Private CA recognizes that you are
   * 			requesting only one certificate and will issue only one. If you change the idempotency
   * 			token for each call, PCA recognizes that you are requesting multiple
   * 			certificates.</p>
   *
   */
  IdempotencyToken?: string;

  /**
   *
   * 		       <p>The name of the algorithm that will be used to sign the certificate to be
   * 			issued.</p>
   *
   */
  SigningAlgorithm: SigningAlgorithm | string | undefined;

  /**
   *
   * 		       <p>Specifies a custom configuration template to use when issuing a certificate. If this
   * 			parameter is not provided, ACM Private CA defaults to the <code>EndEntityCertificate/V1</code>
   * 			template.</p>
   * 		       <p>The following service-owned <code>TemplateArn</code> values are supported by ACM Private CA: </p>
   * 		       <ul>
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/EndEntityCertificate/V1</p>
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
   *             <li>
   * 				           <p>arn:aws:acm-pca:::template/RootCACertificate/V1</p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html">Using
   * 				Templates</a>.</p>
   *
   */
  TemplateArn?: string;

  /**
   *
   * 		       <p>The type of the validity period.</p>
   *
   */
  Validity: Validity | undefined;
}

export namespace IssueCertificateRequest {
  export function isa(o: any): o is IssueCertificateRequest {
    return _smithy.isa(o, "IssueCertificateRequest");
  }
}

export interface IssueCertificateResponse extends $MetadataBearer {
  __type?: "IssueCertificateResponse";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the issued certificate and the certificate serial
   * 			number. This is of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>/certificate/<i>286535153982981100925020015808220737245</i>
   *             </code>
   * 		       </p>
   *
   */
  CertificateArn?: string;
}

export namespace IssueCertificateResponse {
  export function isa(o: any): o is IssueCertificateResponse {
    return _smithy.isa(o, "IssueCertificateResponse");
  }
}

export enum KeyAlgorithm {
  EC_prime256v1 = "EC_prime256v1",
  EC_secp384r1 = "EC_secp384r1",
  RSA_2048 = "RSA_2048",
  RSA_4096 = "RSA_4096"
}

/**
 *
 * 		       <p>An ACM Private CA limit has been exceeded. See the exception message returned to determine the
 * 			limit that was exceeded.</p>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

export interface ListCertificateAuthoritiesRequest {
  __type?: "ListCertificateAuthoritiesRequest";
  /**
   *
   * 		       <p>Use this parameter when paginating results to specify the maximum number of items to
   * 			return in the response on each page. If additional items exist beyond the number you
   * 			specify, the <code>NextToken</code> element is sent in the response. Use this
   * 				<code>NextToken</code> value in a subsequent request to retrieve additional
   * 			items.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>Use this parameter when paginating results in a subsequent request after you receive a
   * 			response with truncated results. Set it to the value of the <code>NextToken</code>
   * 			parameter from the response you just received.</p>
   *
   */
  NextToken?: string;
}

export namespace ListCertificateAuthoritiesRequest {
  export function isa(o: any): o is ListCertificateAuthoritiesRequest {
    return _smithy.isa(o, "ListCertificateAuthoritiesRequest");
  }
}

export interface ListCertificateAuthoritiesResponse extends $MetadataBearer {
  __type?: "ListCertificateAuthoritiesResponse";
  /**
   *
   * 		       <p>Summary information about each certificate authority you have created.</p>
   *
   */
  CertificateAuthorities?: Array<CertificateAuthority>;

  /**
   *
   * 		       <p>When the list is truncated, this value is present and should be used for the
   * 				<code>NextToken</code> parameter in a subsequent pagination request.</p>
   *
   */
  NextToken?: string;
}

export namespace ListCertificateAuthoritiesResponse {
  export function isa(o: any): o is ListCertificateAuthoritiesResponse {
    return _smithy.isa(o, "ListCertificateAuthoritiesResponse");
  }
}

export interface ListPermissionsRequest {
  __type?: "ListPermissionsRequest";
  /**
   *
   * 		       <p>The Amazon Resource Number (ARN) of the private CA to inspect. You can find the ARN by
   * 			calling the <a>ListCertificateAuthorities</a> action. This must be of the
   * 			form:
   * 				<code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code>
   * 			You can get a private CA's ARN by running the <a>ListCertificateAuthorities</a> action.</p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>When paginating results, use this parameter to specify the maximum number of items to
   * 			return in the response. If additional items exist beyond the number you specify, the
   * 				<b>NextToken</b> element is sent in the response. Use this
   * 				<b>NextToken</b> value in a subsequent request to retrieve
   * 			additional items.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>When paginating results, use this parameter in a subsequent request after you receive
   * 			a response with truncated results. Set it to the value of <b>NextToken</b> from the response you just received.</p>
   *
   */
  NextToken?: string;
}

export namespace ListPermissionsRequest {
  export function isa(o: any): o is ListPermissionsRequest {
    return _smithy.isa(o, "ListPermissionsRequest");
  }
}

export interface ListPermissionsResponse extends $MetadataBearer {
  __type?: "ListPermissionsResponse";
  /**
   *
   * 		       <p>When the list is truncated, this value is present and should be used for the <b>NextToken</b> parameter in a subsequent pagination request.
   * 		</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>Summary information about each permission assigned by the specified private CA,
   * 			including the action enabled, the policy provided, and the time of creation.</p>
   *
   */
  Permissions?: Array<Permission>;
}

export namespace ListPermissionsResponse {
  export function isa(o: any): o is ListPermissionsResponse {
    return _smithy.isa(o, "ListPermissionsResponse");
  }
}

export interface ListTagsRequest {
  __type?: "ListTagsRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) that was returned when you called the <a>CreateCertificateAuthority</a> action. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>Use this parameter when paginating results to specify the maximum number of items to
   * 			return in the response. If additional items exist beyond the number you specify, the
   * 				<b>NextToken</b> element is sent in the response. Use this
   * 				<b>NextToken</b> value in a subsequent request to retrieve
   * 			additional items.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>Use this parameter when paginating results in a subsequent request after you receive a
   * 			response with truncated results. Set it to the value of <b>NextToken</b> from the response you just received.</p>
   *
   */
  NextToken?: string;
}

export namespace ListTagsRequest {
  export function isa(o: any): o is ListTagsRequest {
    return _smithy.isa(o, "ListTagsRequest");
  }
}

export interface ListTagsResponse extends $MetadataBearer {
  __type?: "ListTagsResponse";
  /**
   *
   * 		       <p>When the list is truncated, this value is present and should be used for the <b>NextToken</b> parameter in a subsequent pagination request.
   * 		</p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The tags associated with your private CA.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsResponse {
  export function isa(o: any): o is ListTagsResponse {
    return _smithy.isa(o, "ListTagsResponse");
  }
}

/**
 *
 * 		       <p>The certificate signing request is invalid.</p>
 *
 */
export interface MalformedCSRException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "MalformedCSRException";
  $fault: "client";
  message?: string;
}

export namespace MalformedCSRException {
  export function isa(o: any): o is MalformedCSRException {
    return _smithy.isa(o, "MalformedCSRException");
  }
}

/**
 *
 * 		       <p>One or more fields in the certificate are invalid.</p>
 *
 */
export interface MalformedCertificateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "MalformedCertificateException";
  $fault: "client";
  message?: string;
}

export namespace MalformedCertificateException {
  export function isa(o: any): o is MalformedCertificateException {
    return _smithy.isa(o, "MalformedCertificateException");
  }
}

/**
 *
 * 		       <p>Permissions designate which private CA actions can be performed by an AWS service or
 * 			entity. In order for ACM to automatically renew private certificates, you must give
 * 			the ACM service principal all available permissions (<code>IssueCertificate</code>,
 * 				<code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be
 * 			assigned with the <a>CreatePermission</a> action, removed with the <a>DeletePermission</a> action, and listed with the <a>ListPermissions</a> action.</p>
 *
 */
export interface Permission {
  __type?: "Permission";
  /**
   *
   * 		       <p>The private CA actions that can be performed by the designated AWS service.</p>
   *
   */
  Actions?: Array<ActionType | string>;

  /**
   *
   * 		       <p>The Amazon Resource Number (ARN) of the private CA from which the permission was
   * 			issued.</p>
   *
   */
  CertificateAuthorityArn?: string;

  /**
   *
   * 		       <p>The time at which the permission was created.</p>
   *
   */
  CreatedAt?: Date;

  /**
   *
   * 		       <p>The name of the policy that is associated with the permission.</p>
   *
   */
  Policy?: string;

  /**
   *
   * 		       <p>The AWS service or entity that holds the permission. At this time, the only valid
   * 			principal is <code>acm.amazonaws.com</code>.</p>
   *
   */
  Principal?: string;

  /**
   *
   * 		       <p>The ID of the account that assigned the permission.</p>
   *
   */
  SourceAccount?: string;
}

export namespace Permission {
  export function isa(o: any): o is Permission {
    return _smithy.isa(o, "Permission");
  }
}

/**
 *
 * 		       <p>The designated permission has already been given to the user.</p>
 *
 */
export interface PermissionAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "PermissionAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace PermissionAlreadyExistsException {
  export function isa(o: any): o is PermissionAlreadyExistsException {
    return _smithy.isa(o, "PermissionAlreadyExistsException");
  }
}

/**
 *
 * 		       <p>Your request has already been completed.</p>
 *
 */
export interface RequestAlreadyProcessedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "RequestAlreadyProcessedException";
  $fault: "client";
  message?: string;
}

export namespace RequestAlreadyProcessedException {
  export function isa(o: any): o is RequestAlreadyProcessedException {
    return _smithy.isa(o, "RequestAlreadyProcessedException");
  }
}

/**
 *
 * 		       <p>The request has failed for an unspecified reason.</p>
 *
 */
export interface RequestFailedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "RequestFailedException";
  $fault: "client";
  message?: string;
}

export namespace RequestFailedException {
  export function isa(o: any): o is RequestFailedException {
    return _smithy.isa(o, "RequestFailedException");
  }
}

/**
 *
 * 		       <p>Your request is already in progress.</p>
 *
 */
export interface RequestInProgressException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "RequestInProgressException";
  $fault: "client";
  message?: string;
}

export namespace RequestInProgressException {
  export function isa(o: any): o is RequestInProgressException {
    return _smithy.isa(o, "RequestInProgressException");
  }
}

/**
 *
 * 		       <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be
 * 			found.</p>
 *
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

export interface RestoreCertificateAuthorityRequest {
  __type?: "RestoreCertificateAuthorityRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) that was returned when you called the <a>CreateCertificateAuthority</a> action. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   *
   */
  CertificateAuthorityArn: string | undefined;
}

export namespace RestoreCertificateAuthorityRequest {
  export function isa(o: any): o is RestoreCertificateAuthorityRequest {
    return _smithy.isa(o, "RestoreCertificateAuthorityRequest");
  }
}

/**
 *
 * 		       <p>Certificate revocation information used by the <a>CreateCertificateAuthority</a>
 * 			and <a>UpdateCertificateAuthority</a> actions. Your private certificate
 * 			authority (CA) can create and maintain a certificate revocation list (CRL). A CRL
 * 			contains information about certificates revoked by your CA. For more information, see
 * 				<a>RevokeCertificate</a>.</p>
 *
 */
export interface RevocationConfiguration {
  __type?: "RevocationConfiguration";
  /**
   *
   * 		       <p>Configuration of the certificate revocation list (CRL), if any, maintained by your
   * 			private CA.</p>
   *
   */
  CrlConfiguration?: CrlConfiguration;
}

export namespace RevocationConfiguration {
  export function isa(o: any): o is RevocationConfiguration {
    return _smithy.isa(o, "RevocationConfiguration");
  }
}

export enum RevocationReason {
  AFFILIATION_CHANGED = "AFFILIATION_CHANGED",
  A_A_COMPROMISE = "A_A_COMPROMISE",
  CERTIFICATE_AUTHORITY_COMPROMISE = "CERTIFICATE_AUTHORITY_COMPROMISE",
  CESSATION_OF_OPERATION = "CESSATION_OF_OPERATION",
  KEY_COMPROMISE = "KEY_COMPROMISE",
  PRIVILEGE_WITHDRAWN = "PRIVILEGE_WITHDRAWN",
  SUPERSEDED = "SUPERSEDED",
  UNSPECIFIED = "UNSPECIFIED"
}

export interface RevokeCertificateRequest {
  __type?: "RevokeCertificateRequest";
  /**
   *
   * 		       <p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be
   * 			revoked. This must be of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>Serial number of the certificate to be revoked. This must be in hexadecimal format. You can
   * 			retrieve the serial number by calling <a>GetCertificate</a> with the Amazon
   * 			Resource Name (ARN) of the certificate you want and the ARN of your private CA. The
   * 				<b>GetCertificate</b> action retrieves the certificate in
   * 			the PEM format. You can use the following OpenSSL command to list the certificate in
   * 			text format and copy the hexadecimal serial number. </p>
   * 		       <p>
   *             <code>openssl x509 -in <i>file_path</i> -text -noout</code>
   *          </p>
   * 		       <p>You can also copy the serial number from the console or use the <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html">DescribeCertificate</a> action in the <i>AWS Certificate Manager API
   * 				Reference</i>. </p>
   *
   */
  CertificateSerial: string | undefined;

  /**
   *
   * 		       <p>Specifies why you revoked the certificate.</p>
   *
   */
  RevocationReason: RevocationReason | string | undefined;
}

export namespace RevokeCertificateRequest {
  export function isa(o: any): o is RevokeCertificateRequest {
    return _smithy.isa(o, "RevokeCertificateRequest");
  }
}

export enum SigningAlgorithm {
  SHA256WITHECDSA = "SHA256WITHECDSA",
  SHA256WITHRSA = "SHA256WITHRSA",
  SHA384WITHECDSA = "SHA384WITHECDSA",
  SHA384WITHRSA = "SHA384WITHRSA",
  SHA512WITHECDSA = "SHA512WITHECDSA",
  SHA512WITHRSA = "SHA512WITHRSA"
}

/**
 *
 * 		       <p>Tags are labels that you can use to identify and organize your private CAs. Each tag
 * 			consists of a key and an optional value. You can associate up to 50 tags with a private
 * 			CA. To add one or more tags to a private CA, call the <a>TagCertificateAuthority</a> action. To remove a tag, call the <a>UntagCertificateAuthority</a> action. </p>
 *
 */
export interface Tag {
  __type?: "Tag";
  /**
   *
   * 		       <p>Key (name) of the tag.</p>
   *
   */
  Key: string | undefined;

  /**
   *
   * 		       <p>Value of the tag.</p>
   *
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

export interface TagCertificateAuthorityRequest {
  __type?: "TagCertificateAuthorityRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>List of tags to be associated with the CA.</p>
   *
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagCertificateAuthorityRequest {
  export function isa(o: any): o is TagCertificateAuthorityRequest {
    return _smithy.isa(o, "TagCertificateAuthorityRequest");
  }
}

/**
 *
 * 		       <p>You can associate up to 50 tags with a private CA. Exception information is contained
 * 			in the exception message field.</p>
 *
 */
export interface TooManyTagsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "TooManyTagsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsException {
  export function isa(o: any): o is TooManyTagsException {
    return _smithy.isa(o, "TooManyTagsException");
  }
}

export interface UntagCertificateAuthorityRequest {
  __type?: "UntagCertificateAuthorityRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) that was returned when you called <a>CreateCertificateAuthority</a>. This must be of the form: </p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>List of tags to be removed from the CA.</p>
   *
   */
  Tags: Array<Tag> | undefined;
}

export namespace UntagCertificateAuthorityRequest {
  export function isa(o: any): o is UntagCertificateAuthorityRequest {
    return _smithy.isa(o, "UntagCertificateAuthorityRequest");
  }
}

export interface UpdateCertificateAuthorityRequest {
  __type?: "UpdateCertificateAuthorityRequest";
  /**
   *
   * 		       <p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be
   * 			revoked. This must be of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   *
   */
  CertificateAuthorityArn: string | undefined;

  /**
   *
   * 		       <p>Revocation information for your private CA.</p>
   *
   */
  RevocationConfiguration?: RevocationConfiguration;

  /**
   *
   * 		       <p>Status of your private CA.</p>
   *
   */
  Status?: CertificateAuthorityStatus | string;
}

export namespace UpdateCertificateAuthorityRequest {
  export function isa(o: any): o is UpdateCertificateAuthorityRequest {
    return _smithy.isa(o, "UpdateCertificateAuthorityRequest");
  }
}

/**
 *
 * 		       <p>Length of time for which the certificate issued by your private certificate authority (CA),
 * 			or by the private CA itself, is valid in days, months, or years. You can issue a
 * 			certificate by calling the <a>IssueCertificate</a> action.</p>
 *
 */
export interface Validity {
  __type?: "Validity";
  /**
   *
   * 		       <p>Specifies whether the <code>Value</code> parameter represents days, months, or
   * 			years.</p>
   *
   */
  Type: ValidityPeriodType | string | undefined;

  /**
   *
   * 		       <p>Time period.</p>
   *
   */
  Value: number | undefined;
}

export namespace Validity {
  export function isa(o: any): o is Validity {
    return _smithy.isa(o, "Validity");
  }
}

export enum ValidityPeriodType {
  ABSOLUTE = "ABSOLUTE",
  DAYS = "DAYS",
  END_DATE = "END_DATE",
  MONTHS = "MONTHS",
  YEARS = "YEARS"
}

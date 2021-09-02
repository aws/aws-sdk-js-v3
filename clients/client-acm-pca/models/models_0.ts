import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Contains information about the certificate subject. The <code>Subject</code> field in
 * 			the certificate identifies the entity that owns or controls the public key in the
 * 			certificate. The entity can be a user, computer, device, or service. The <code>Subject
 * 			</code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative
 * 			distinguished names (RDNs). The RDNs are separated by commas in the certificate.</p>
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
   * <p>For CA and end-entity certificates in a private PKI, the common name (CN) can be any
   * 			string within the length limit. </p>
   * 		       <p>Note: In publicly trusted certificates, the common name must be a fully qualified
   * 			domain name (FQDN) associated with the certificate subject.</p>
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
   * 			first letter of the <b>Surname</b>.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ASN1Subject): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Electronic Data Interchange (EDI) entity as described in as defined in
 * 				<a href="https://tools.ietf.org/html/rfc5280">Subject Alternative Name</a> in
 * 			RFC 5280.</p>
 */
export interface EdiPartyName {
  /**
   * <p>Specifies the party name.</p>
   */
  PartyName: string | undefined;

  /**
   * <p>Specifies the name assigner.</p>
   */
  NameAssigner?: string;
}

export namespace EdiPartyName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdiPartyName): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a custom ASN.1 X.400 <code>GeneralName</code> using an object identifier (OID)
 * 			and value. The OID must satisfy the regular expression shown below. For more
 * 			information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier
 * 				(OID)</a>.</p>
 */
export interface OtherName {
  /**
   * <p>Specifies an OID. </p>
   */
  TypeId: string | undefined;

  /**
   * <p>Specifies an OID value.</p>
   */
  Value: string | undefined;
}

export namespace OtherName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OtherName): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. Only one of the
 * 			following naming options should be provided. Providing more than one option results in
 * 			an <code>InvalidArgsException</code> error.</p>
 */
export interface GeneralName {
  /**
   * <p>Represents <code>GeneralName</code> using an <code>OtherName</code> object.</p>
   */
  OtherName?: OtherName;

  /**
   * <p>Represents <code>GeneralName</code> as an <a href="https://tools.ietf.org/html/rfc822">RFC 822</a> email address.</p>
   */
  Rfc822Name?: string;

  /**
   * <p>Represents <code>GeneralName</code> as a DNS name.</p>
   */
  DnsName?: string;

  /**
   * <p>Contains information about the certificate subject. The <code>Subject</code> field in
   * 			the certificate identifies the entity that owns or controls the public key in the
   * 			certificate. The entity can be a user, computer, device, or service. The <code>Subject
   * 			</code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative
   * 			distinguished names (RDNs). The RDNs are separated by commas in the certificate.</p>
   */
  DirectoryName?: ASN1Subject;

  /**
   * <p>Represents <code>GeneralName</code> as an <code>EdiPartyName</code> object.</p>
   */
  EdiPartyName?: EdiPartyName;

  /**
   * <p>Represents <code>GeneralName</code> as a URI.</p>
   */
  UniformResourceIdentifier?: string;

  /**
   * <p>Represents <code>GeneralName</code> as an IPv4 or IPv6 address.</p>
   */
  IpAddress?: string;

  /**
   * <p> Represents <code>GeneralName</code> as an object identifier (OID).</p>
   */
  RegisteredId?: string;
}

export namespace GeneralName {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeneralName): any => ({
    ...obj,
  });
}

export enum AccessMethodType {
  CA_REPOSITORY = "CA_REPOSITORY",
  RESOURCE_PKI_MANIFEST = "RESOURCE_PKI_MANIFEST",
  RESOURCE_PKI_NOTIFY = "RESOURCE_PKI_NOTIFY",
}

/**
 * <p>Describes the type and format of extension access. Only one of
 * 				<code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be
 * 			provided. Providing both results in <code>InvalidArgsException</code>.</p>
 */
export interface AccessMethod {
  /**
   * <p>An object identifier (OID) specifying the <code>AccessMethod</code>. The OID must
   * 			satisfy the regular expression shown below. For more information, see NIST's definition
   * 			of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier
   * 				(OID)</a>.</p>
   */
  CustomObjectIdentifier?: string;

  /**
   * <p>Specifies the <code>AccessMethod</code>.</p>
   */
  AccessMethodType?: AccessMethodType | string;
}

export namespace AccessMethod {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessMethod): any => ({
    ...obj,
  });
}

/**
 * <p>Provides access information used by the <code>authorityInfoAccess</code> and
 * 				<code>subjectInfoAccess</code> extensions described in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>.</p>
 */
export interface AccessDescription {
  /**
   * <p>The type and format of <code>AccessDescription</code> information.</p>
   */
  AccessMethod: AccessMethod | undefined;

  /**
   * <p>The location of <code>AccessDescription</code> information.</p>
   */
  AccessLocation: GeneralName | undefined;
}

export namespace AccessDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Defines one or more purposes for which the key contained in the certificate can be
 * 			used. Default value for each option is false.</p>
 */
export interface KeyUsage {
  /**
   * <p> Key can be used for digital signing.</p>
   */
  DigitalSignature?: boolean;

  /**
   * <p>Key can be used for non-repudiation.</p>
   */
  NonRepudiation?: boolean;

  /**
   * <p>Key can be used to encipher data.</p>
   */
  KeyEncipherment?: boolean;

  /**
   * <p>Key can be used to decipher data.</p>
   */
  DataEncipherment?: boolean;

  /**
   * <p>Key can be used in a key-agreement protocol.</p>
   */
  KeyAgreement?: boolean;

  /**
   * <p>Key can be used to sign certificates.</p>
   */
  KeyCertSign?: boolean;

  /**
   * <p>Key can be used to sign CRLs.</p>
   */
  CRLSign?: boolean;

  /**
   * <p>Key can be used only to encipher data.</p>
   */
  EncipherOnly?: boolean;

  /**
   * <p>Key can be used only to decipher data.</p>
   */
  DecipherOnly?: boolean;
}

export namespace KeyUsage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeyUsage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the certificate extensions to be added to the certificate signing request
 * 			(CSR).</p>
 */
export interface CsrExtensions {
  /**
   * <p>Indicates the purpose of the certificate and of the key contained in the
   * 			certificate.</p>
   */
  KeyUsage?: KeyUsage;

  /**
   * <p>For CA certificates, provides a path to additional information pertaining to the CA,
   * 			such as revocation and policy. For more information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.2.2.2">Subject Information
   * 				Access</a> in RFC 5280.</p>
   */
  SubjectInformationAccess?: AccessDescription[];
}

export namespace CsrExtensions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CsrExtensions): any => ({
    ...obj,
  });
}

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

  /**
   * <p>Specifies information to be added to the extension section of the certificate signing
   * 			request (CSR).</p>
   */
  CsrExtensions?: CsrExtensions;
}

export namespace CertificateAuthorityConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CertificateAuthorityConfiguration): any => ({
    ...obj,
  });
}

export enum CertificateAuthorityType {
  ROOT = "ROOT",
  SUBORDINATE = "SUBORDINATE",
}

export enum KeyStorageSecurityStandard {
  FIPS_140_2_LEVEL_2_OR_HIGHER = "FIPS_140_2_LEVEL_2_OR_HIGHER",
  FIPS_140_2_LEVEL_3_OR_HIGHER = "FIPS_140_2_LEVEL_3_OR_HIGHER",
}

export enum S3ObjectAcl {
  BUCKET_OWNER_FULL_CONTROL = "BUCKET_OWNER_FULL_CONTROL",
  PUBLIC_READ = "PUBLIC_READ",
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
 * 		       <p>ACM Private CA assets that are stored in Amazon S3 can be protected with encryption.
 *   For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaCreateCa.html#crl-encryption">Encrypting Your
 * 			CRLs</a>.</p>
 * 		       <p>Your private CA uses the value in the <b>ExpirationInDays</b>
 * 			parameter to calculate the <b>nextUpdate</b> field in the CRL.
 * 			The CRL is refreshed at 1/2 the age of next update or when a certificate is revoked.
 * 			When a certificate is revoked, it is recorded in the next CRL that is generated and in
 * 			the next audit report. Only time valid certificates are listed in the CRL. Expired
 * 			certificates are not included.</p>
 *
 * 		       <p>A CRL is typically updated approximately 30 minutes after a certificate
 * 	is revoked. If for any reason a CRL update fails, ACM Private CA makes further attempts
 * 	every 15 minutes.</p>
 *
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
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/crl-planning.html">Planning a certificate revocation list (CRL)</a>
 * 			in the <i>AWS Certificate Manager Private Certificate Authority (PCA) User Guide</i>
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
   * <p>Validity period of the CRL in days.</p>
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
   * 			the issued certificate. You can change the name of your bucket by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> operation. You must specify a <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaCreateCa.html#s3-policies">bucket
   * 				policy</a> that allows ACM Private CA to write the CRL to your bucket.</p>
   */
  S3BucketName?: string;

  /**
   * <p>Determines whether the CRL will be publicly readable or privately held in the CRL
   * 			Amazon S3 bucket. If you choose PUBLIC_READ, the CRL will be accessible over the public
   * 			internet. If you choose BUCKET_OWNER_FULL_CONTROL, only the owner of the CRL S3 bucket
   * 			can access the CRL, and your PKI clients may need an alternative method of access. </p>
   * 		       <p>If no value is specified, the default is <code>PUBLIC_READ</code>.</p>
   * 		       <p>
   *             <i>Note:</i> This default can cause CA creation to fail in some
   * 			circumstances. If you have have enabled the Block Public Access (BPA) feature in your S3
   * 			account, then you must specify the value of this parameter as
   * 				<code>BUCKET_OWNER_FULL_CONTROL</code>, and not doing so results in an error. If you
   * 			have disabled BPA in S3, then you can specify either
   * 				<code>BUCKET_OWNER_FULL_CONTROL</code> or <code>PUBLIC_READ</code> as the
   * 			value.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaCreateCa.html#s3-bpa">Blocking public access to the S3
   * 				bucket</a>.</p>
   */
  S3ObjectAcl?: S3ObjectAcl | string;
}

export namespace CrlConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CrlConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information to enable and configure Online Certificate Status Protocol (OCSP) for
 * 			validating certificate revocation status.</p>
 * 		       <p>When you revoke a certificate, OCSP responses may take up to 60 minutes
 * 	to reflect the new status.</p>
 */
export interface OcspConfiguration {
  /**
   * <p>Flag enabling use of the Online Certificate Status Protocol (OCSP) for validating
   * 			certificate revocation status.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>By default, ACM Private CA injects an AWS domain into certificates being validated by the
   * 			Online Certificate Status Protocol (OCSP). A customer can alternatively use this object
   * 			to define a CNAME specifying a customized OCSP domain.</p>
   * 		       <p>Note: The value of the CNAME must not include a protocol prefix such as "http://" or
   * 			"https://".</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/ocsp-customize.html">Customizing Online Certificate
   * 			Status Protocol (OCSP) </a> in the <i>AWS Certificate Manager Private Certificate Authority (PCA) User
   * 				Guide</i>.</p>
   */
  OcspCustomCname?: string;
}

export namespace OcspConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OcspConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Certificate revocation information used by the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> actions. Your private certificate authority (CA)
 * 			can configure Online Certificate Status Protocol (OCSP) support and/or maintain a
 * 			certificate revocation list (CRL). OCSP returns validation information about
 * 			certificates as requested by clients, and a CRL contains an updated list of certificates
 * 			revoked by your CA. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/revocation-setup.html">Setting up a
 * 				certificate revocation method</a> in the <i>AWS Certificate Manager Private Certificate Authority (PCA) User
 * 				Guide</i>.</p>
 */
export interface RevocationConfiguration {
  /**
   * <p>Configuration of the certificate revocation list (CRL), if any, maintained by your private
   * 			CA. A CRL is typically updated approximately 30 minutes after a certificate
   * 	is revoked. If for any reason a CRL update fails, ACM Private CA makes further attempts
   * 	every 15 minutes.</p>
   */
  CrlConfiguration?: CrlConfiguration;

  /**
   * <p>Configuration of Online Certificate Status Protocol (OCSP) support, if any, maintained by
   * 			your private CA. When you revoke a certificate, OCSP responses may take up to 60 minutes
   * 	to reflect the new status.</p>
   */
  OcspConfiguration?: OcspConfiguration;
}

export namespace RevocationConfiguration {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>Contains information to enable Online Certificate Status Protocol (OCSP) support,
   * 			to enable a certificate revocation list (CRL), to enable both, or to enable neither. The
   * 			default is for both certificate validation mechanisms to be disabled. For more
   * 			information, see the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_OcspConfiguration.html">OcspConfiguration</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CrlConfiguration.html">CrlConfiguration</a> types.</p>
   */
  RevocationConfiguration?: RevocationConfiguration;

  /**
   * <p>The type of the certificate authority.</p>
   */
  CertificateAuthorityType: CertificateAuthorityType | string | undefined;

  /**
   * <p>Custom string that can be used to distinguish between calls to the <b>CreateCertificateAuthority</b> action. Idempotency tokens for
   * 				<b>CreateCertificateAuthority</b> time out after five
   * 			minutes. Therefore, if you call <b>CreateCertificateAuthority</b> multiple times with the same idempotency
   * 			token within five minutes, ACM Private CA recognizes that you are requesting only certificate
   * 			authority and will issue only one. If you change the idempotency token for each call,
   * 			PCA recognizes that you are requesting multiple certificate authorities.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Specifies a
   * 			cryptographic key management compliance standard used for handling CA keys.</p>
   * 		       <p>Default: FIPS_140_2_LEVEL_3_OR_HIGHER</p>
   * 		       <p>Note: <code>FIPS_140_2_LEVEL_3_OR_HIGHER</code> is not supported in Region
   * 			ap-northeast-3. When creating a CA in the ap-northeast-3, you must provide
   * 				<code>FIPS_140_2_LEVEL_2_OR_HIGHER</code> as the argument for
   * 				<code>KeyStorageSecurityStandard</code>. Failure to do this results in an
   * 				<code>InvalidArgsException</code> with the message, "A certificate authority cannot
   * 			be created in this region with the specified security standard."</p>
   */
  KeyStorageSecurityStandard?: KeyStorageSecurityStandard | string;

  /**
   * <p>Key-value pairs that will be attached to the new private CA. You can associate up to
   * 			50 tags with a private CA. For information using tags with IAM to manage permissions,
   * 			see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateCertificateAuthorityRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidArgsException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource policy is invalid or is missing a required statement. For general
 * 			information about IAM policy and statement structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json">Overview of JSON Policies</a>.</p>
 */
export interface InvalidPolicyException extends __SmithyException, $MetadataBearer {
  name: "InvalidPolicyException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPolicyException {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestInProgressException): any => ({
    ...obj,
  });
}

/**
 * <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy
 * 			cannot be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePermissionRequest): any => ({
    ...obj,
  });
}

export interface DeletePolicyRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA that will have its policy deleted.
   * 			You can find the CA's ARN by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. The ARN value must have the form
   * 				<code>arn:aws:acm-pca:region:account:certificate-authority/01234567-89ab-cdef-0123-0123456789ab</code>.
   * 		</p>
   */
  ResourceArn: string | undefined;
}

export namespace DeletePolicyRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>Information about the Online Certificate Status Protocol (OCSP) configuration or
   * 			certificate revocation list (CRL) created and maintained by your private CA. </p>
   */
  RevocationConfiguration?: RevocationConfiguration;

  /**
   * <p>The period during which a deleted CA can be restored. For more information, see the
   * 				<code>PermanentDeletionTimeInDays</code> parameter of the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_DeleteCertificateAuthorityRequest.html">DeleteCertificateAuthorityRequest</a> action. </p>
   */
  RestorableUntil?: Date;

  /**
   * <p>Defines a cryptographic key management compliance standard used for handling CA keys. </p>
   * 		       <p>Default: FIPS_140_2_LEVEL_3_OR_HIGHER</p>
   * 		       <p>Note: AWS Region ap-northeast-3 supports only FIPS_140_2_LEVEL_2_OR_HIGHER. You must
   * 			explicitly specify this parameter and value when creating a CA in that Region.
   * 			Specifying a different value (or no value) results in an
   * 				<code>InvalidArgsException</code> with the message "A certificate authority cannot
   * 			be created in this region with the specified security standard."</p>
   */
  KeyStorageSecurityStandard?: KeyStorageSecurityStandard | string;
}

export namespace CertificateAuthority {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>The base64 PEM-encoded certificate chain that chains up to the root CA certificate
   * 			that you used to sign your private CA certificate. </p>
   */
  CertificateChain?: string;
}

export namespace GetCertificateResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * 			chains up to root certificate that you used to sign your private CA certificate. The
   * 			chain does not include your private CA certificate. If this is a root CA, the value will
   * 			be null.</p>
   */
  CertificateChain?: string;
}

export namespace GetCertificateAuthorityCertificateResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MalformedCertificateException): any => ({
    ...obj,
  });
}

export enum PolicyQualifierId {
  CPS = "CPS",
}

/**
 * <p>Defines a <code>PolicyInformation</code> qualifier. ACM Private CA supports the <a href="https://tools.ietf.org/html/rfc5280#section-4.2.1.4">certification practice
 * 				statement (CPS) qualifier</a> defined in RFC 5280. </p>
 */
export interface Qualifier {
  /**
   * <p>Contains a pointer to a certification practice statement (CPS) published by the
   * 			CA.</p>
   */
  CpsUri: string | undefined;
}

export namespace Qualifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Qualifier): any => ({
    ...obj,
  });
}

/**
 * <p>Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with
 * 			a qualifier. ACM Private CA supports the certification practice statement (CPS) qualifier.</p>
 */
export interface PolicyQualifierInfo {
  /**
   * <p>Identifies the qualifier modifying a <code>CertPolicyId</code>.</p>
   */
  PolicyQualifierId: PolicyQualifierId | string | undefined;

  /**
   * <p>Defines the qualifier type. ACM Private CA supports the use of a URI for a CPS qualifier in
   * 			this field.</p>
   */
  Qualifier: Qualifier | undefined;
}

export namespace PolicyQualifierInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyQualifierInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the X.509 <code>CertificatePolicies</code> extension.</p>
 */
export interface PolicyInformation {
  /**
   * <p>Specifies the object identifier (OID) of the certificate policy under which the
   * 			certificate was issued. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier
   * 				(OID)</a>.</p>
   */
  CertPolicyId: string | undefined;

  /**
   * <p>Modifies the given <code>CertPolicyId</code> with a qualifier. ACM Private CA supports the
   * 			certification practice statement (CPS) qualifier.</p>
   */
  PolicyQualifiers?: PolicyQualifierInfo[];
}

export namespace PolicyInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyInformation): any => ({
    ...obj,
  });
}

export enum ExtendedKeyUsageType {
  CERTIFICATE_TRANSPARENCY = "CERTIFICATE_TRANSPARENCY",
  CLIENT_AUTH = "CLIENT_AUTH",
  CODE_SIGNING = "CODE_SIGNING",
  DOCUMENT_SIGNING = "DOCUMENT_SIGNING",
  EMAIL_PROTECTION = "EMAIL_PROTECTION",
  OCSP_SIGNING = "OCSP_SIGNING",
  SERVER_AUTH = "SERVER_AUTH",
  SMART_CARD_LOGIN = "SMART_CARD_LOGIN",
  TIME_STAMPING = "TIME_STAMPING",
}

/**
 * <p>Specifies additional purposes for which the certified public key may be used other
 * 			than basic purposes indicated in the <code>KeyUsage</code> extension.</p>
 */
export interface ExtendedKeyUsage {
  /**
   * <p>Specifies a standard <code>ExtendedKeyUsage</code> as defined as in <a href="https://tools.ietf.org/html/rfc5280#section-4.2.1.12">RFC 5280</a>.</p>
   */
  ExtendedKeyUsageType?: ExtendedKeyUsageType | string;

  /**
   * <p>Specifies a custom <code>ExtendedKeyUsage</code> with an object identifier
   * 			(OID).</p>
   */
  ExtendedKeyUsageObjectIdentifier?: string;
}

export namespace ExtendedKeyUsage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExtendedKeyUsage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains X.509 extension information for a certificate.</p>
 */
export interface Extensions {
  /**
   * <p>Contains a sequence of one or more policy information terms, each of which consists of
   * 			an object identifier (OID) and optional qualifiers. For more information, see NIST's
   * 			definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object
   * 				Identifier (OID)</a>.</p>
   * 		       <p>In an end-entity certificate, these terms indicate the policy under which the
   * 			certificate was issued and the purposes for which it may be used. In a CA certificate,
   * 			these terms limit the set of policies for certification paths that include this
   * 			certificate.</p>
   */
  CertificatePolicies?: PolicyInformation[];

  /**
   * <p>Specifies additional purposes for which the certified public key may be used other
   * 			than basic purposes indicated in the <code>KeyUsage</code> extension.</p>
   */
  ExtendedKeyUsage?: ExtendedKeyUsage[];

  /**
   * <p>Defines one or more purposes for which the key contained in the certificate can be
   * 			used. Default value for each option is false.</p>
   */
  KeyUsage?: KeyUsage;

  /**
   * <p>The subject alternative name extension allows identities to be bound to the subject of
   * 			the certificate. These identities may be included in addition to or in place of the
   * 			identity in the subject field of the certificate.</p>
   */
  SubjectAlternativeNames?: GeneralName[];
}

export namespace Extensions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Extensions): any => ({
    ...obj,
  });
}

/**
 * <p>Contains X.509 certificate information to be placed in an issued certificate. An
 * 				<code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must
 * 			be selected, or else this parameter is ignored. </p>
 * 		       <p>If conflicting or duplicate certificate information is supplied from other sources,
 * 			ACM Private CA applies <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html#template-order-of-operations">order of
 * 				operation rules</a> to determine what information is used.</p>
 */
export interface ApiPassthrough {
  /**
   * <p>Specifies X.509 extension information for a certificate.</p>
   */
  Extensions?: Extensions;

  /**
   * <p>Contains information about the certificate subject. The <code>Subject</code> field in
   * 			the certificate identifies the entity that owns or controls the public key in the
   * 			certificate. The entity can be a user, computer, device, or service. The <code>Subject
   * 			</code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative
   * 			distinguished names (RDNs). The RDNs are separated by commas in the certificate.</p>
   */
  Subject?: ASN1Subject;
}

export namespace ApiPassthrough {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiPassthrough): any => ({
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
 * <p>Validity specifies the period of time during which a certificate is valid. Validity
 * 			can be expressed as an explicit date and time when the validity of a certificate starts
 * 			or expires, or as a span of time after issuance, stated in days, months, or years. For
 * 			more information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280.</p>
 * 		       <p>ACM Private CA API consumes the <code>Validity</code> data type differently in two distinct
 * 			parameters of the <code>IssueCertificate</code> action. The required parameter
 * 				<code>IssueCertificate</code>:<code>Validity</code> specifies the end of a
 * 			certificate's validity period. The optional parameter
 * 				<code>IssueCertificate</code>:<code>ValidityNotBefore</code> specifies a customized
 * 			starting time for the validity period.</p>
 */
export interface Validity {
  /**
   * <p>A long integer interpreted according to the value of <code>Type</code>, below.</p>
   */
  Value: number | undefined;

  /**
   * <p>Determines how <i>ACM Private CA</i> interprets the <code>Value</code>
   * 			parameter, an integer. Supported validity types include those listed below. Type
   * 			definitions with values include a sample input value and the resulting output. </p>
   * 		       <p>
   *             <code>END_DATE</code>: The specific date and time when the certificate will expire,
   * 			expressed using UTCTime (YYMMDDHHMMSS) or GeneralizedTime (YYYYMMDDHHMMSS) format. When
   * 			UTCTime is used, if the year field (YY) is greater than or equal to 50, the year is
   * 			interpreted as 19YY. If the year field is less than 50, the year is interpreted as
   * 			20YY.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Sample input value: 491231235959 (UTCTime format)</p>
   * 			         </li>
   *             <li>
   * 				           <p>Output expiration date/time: 12/31/2049 23:59:59</p>
   * 			         </li>
   *          </ul>
   * 		       <p>
   *             <code>ABSOLUTE</code>: The specific date and time when the validity of a certificate
   * 			will start or expire, expressed in seconds since the Unix Epoch. </p>
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
   * 		       <p>Example if <code>DAYS</code>, issued on 10/12/2020 at 12:34:54 UTC:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Sample input value: 90</p>
   * 			         </li>
   *             <li>
   * 				           <p>Output expiration date: 01/10/2020 12:34:54 UTC</p>
   * 			         </li>
   *          </ul>
   * 		       <p>The minimum validity duration for a certificate using relative time
   * 			(<code>DAYS</code>) is one day. The minimum validity for a certificate using absolute
   * 			time (<code>ABSOLUTE</code> or <code>END_DATE</code>) is one second.</p>
   */
  Type: ValidityPeriodType | string | undefined;
}

export namespace Validity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Validity): any => ({
    ...obj,
  });
}

export interface IssueCertificateRequest {
  /**
   * <p>Specifies X.509 certificate information to be included in the issued certificate. An
   * 				<code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must
   * 			be selected, or else this parameter is ignored. For more information about using these
   * 			templates, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html">Understanding Certificate Templates</a>.</p>
   * 		       <p>If conflicting or duplicate certificate information is supplied during certificate
   * 			issuance, ACM Private CA applies <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html#template-order-of-operations">order of
   * 				operation rules</a> to determine what information is used.</p>
   */
  ApiPassthrough?: ApiPassthrough;

  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form:</p>
   * 		       <p>
   * 			         <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>
   *             </code>
   * 		       </p>
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The certificate signing request (CSR) for the certificate you want to issue. As an
   * 			example, you can use the following OpenSSL command to create the CSR and a 2048 bit RSA
   * 			private key. </p>
   * 		       <p>
   * 			         <code>openssl req -new -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem
   * 				-out csr/test_cert_.csr</code>
   * 		       </p>
   * 		       <p>If you have a configuration file, you can then use the following OpenSSL command. The
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
   * 			used to sign a CSR in the <code>CreateCertificateAuthority</code> action.</p>
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
   * 		       <p>For a list of <code>TemplateArn</code> values supported by ACM Private CA, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/UsingTemplates.html">Understanding Certificate
   * 				Templates</a>.</p>
   */
  TemplateArn?: string;

  /**
   * <p>Information describing the end of the validity period of the certificate. This
   * 			parameter sets the “Not After” date for the certificate.</p>
   * 		       <p>Certificate validity is the period of time during which a certificate is valid.
   * 			Validity can be expressed as an explicit date and time when the certificate expires, or
   * 			as a span of time after issuance, stated in days, months, or years. For more
   * 			information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280. </p>
   * 		       <p>This value is unaffected when <code>ValidityNotBefore</code> is also specified. For
   * 			example, if <code>Validity</code> is set to 20 days in the future, the certificate will
   * 			expire 20 days from issuance time regardless of the <code>ValidityNotBefore</code>
   * 			value.</p>
   * 		       <p>The end of the validity period configured on a certificate must not exceed the limit
   * 			set on its parents in the CA hierarchy.</p>
   */
  Validity: Validity | undefined;

  /**
   * <p>Information describing the start of the validity period of the certificate. This
   * 			parameter sets the “Not Before" date for the certificate.</p>
   * 		       <p>By default, when issuing a certificate, ACM Private CA sets the "Not Before" date to the
   * 			issuance time minus 60 minutes. This compensates for clock inconsistencies across
   * 			computer systems. The <code>ValidityNotBefore</code> parameter can be used to customize
   * 			the “Not Before” value. </p>
   * 		       <p>Unlike the <code>Validity</code> parameter, the <code>ValidityNotBefore</code>
   * 			parameter is optional.</p>
   * 		       <p>The <code>ValidityNotBefore</code> value is expressed as an explicit date and time,
   * 			using the <code>Validity</code> type value <code>ABSOLUTE</code>. For more information,
   * 			see <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_Validity.html">Validity</a> in this API reference and <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC
   * 			5280.</p>
   */
  ValidityNotBefore?: Validity;

  /**
   * <p>Alphanumeric string that can be used to distinguish between calls to the <b>IssueCertificate</b> action. Idempotency tokens for <b>IssueCertificate</b> time out after one minute. Therefore, if you
   * 			call <b>IssueCertificate</b> multiple times with the same
   * 			idempotency token within one minute, ACM Private CA recognizes that you are requesting only one
   * 			certificate and will issue only one. If you change the idempotency token for each call,
   * 			PCA recognizes that you are requesting multiple certificates.</p>
   */
  IdempotencyToken?: string;
}

export namespace IssueCertificateRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj,
  });
}

export interface PutPolicyRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA to associate with the policy. The
   * 			ARN of the CA can be found by calling the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action.</p>
   * 		       <p></p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The path and file name of a JSON-formatted IAM policy to attach to the specified
   * 			private CA resource. If this policy does not contain all required statements or if it
   * 			includes any statement that is not allowed, the <code>PutPolicy</code> action returns an
   * 				<code>InvalidPolicyException</code>. For information about IAM policy and
   * 			statement structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json">Overview of JSON Policies</a>.</p>
   */
  Policy: string | undefined;
}

export namespace PutPolicyRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>Contains information to enable Online Certificate Status Protocol (OCSP) support,
   * 			to enable a certificate revocation list (CRL), to enable both, or to enable neither. If
   * 			this parameter is not supplied, existing capibilites remain unchanged. For more
   * 			information, see the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_OcspConfiguration.html">OcspConfiguration</a> and <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CrlConfiguration.html">CrlConfiguration</a> types.</p>
   */
  RevocationConfiguration?: RevocationConfiguration;

  /**
   * <p>Status of your private CA.</p>
   */
  Status?: CertificateAuthorityStatus | string;
}

export namespace UpdateCertificateAuthorityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCertificateAuthorityRequest): any => ({
    ...obj,
  });
}

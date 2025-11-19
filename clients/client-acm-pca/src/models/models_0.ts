// smithy-typescript generated code
import {
  AccessMethodType,
  ActionType,
  AuditReportResponseFormat,
  AuditReportStatus,
  CertificateAuthorityStatus,
  CertificateAuthorityType,
  CertificateAuthorityUsageMode,
  CrlType,
  ExtendedKeyUsageType,
  FailureReason,
  KeyAlgorithm,
  KeyStorageSecurityStandard,
  PolicyQualifierId,
  ResourceOwner,
  RevocationReason,
  S3ObjectAcl,
  SigningAlgorithm,
  ValidityPeriodType,
} from "./enums";

/**
 * <p>Defines the X.500 relative distinguished name (RDN).</p>
 * @public
 */
export interface CustomAttribute {
  /**
   * <p>Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).</p>
   * @public
   */
  ObjectIdentifier: string | undefined;

  /**
   * <p/> <p>Specifies the attribute value of relative distinguished name (RDN).</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.</p>
 * @public
 */
export interface ASN1Subject {
  /**
   * <p>Two-digit code that specifies the country in which the certificate subject located.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>Legal name of the organization with which the certificate subject is affiliated. </p>
   * @public
   */
  Organization?: string | undefined;

  /**
   * <p>A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.</p>
   * @public
   */
  OrganizationalUnit?: string | undefined;

  /**
   * <p>Disambiguating information for the certificate subject.</p>
   * @public
   */
  DistinguishedNameQualifier?: string | undefined;

  /**
   * <p>State in which the subject of the certificate is located.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit. </p> <p>Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.</p>
   * @public
   */
  CommonName?: string | undefined;

  /**
   * <p>The certificate serial number.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The locality (such as a city or town) in which the certificate subject is located.</p>
   * @public
   */
  Locality?: string | undefined;

  /**
   * <p>A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.</p>
   * @public
   */
  Surname?: string | undefined;

  /**
   * <p>First name.</p>
   * @public
   */
  GivenName?: string | undefined;

  /**
   * <p>Concatenation that typically contains the first letter of the <b>GivenName</b>, the first letter of the middle name if one exists, and the first letter of the <b>Surname</b>.</p>
   * @public
   */
  Initials?: string | undefined;

  /**
   * <p>Typically a shortened version of a longer <b>GivenName</b>. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.</p>
   * @public
   */
  Pseudonym?: string | undefined;

  /**
   * <p>Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.</p>
   * @public
   */
  GenerationQualifier?: string | undefined;

  /**
   * <p/> <p>Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST’s definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.</p> <note> <p>Custom attributes cannot be used in combination with standard attributes.</p> </note>
   * @public
   */
  CustomAttributes?: CustomAttribute[] | undefined;
}

/**
 * <p>Describes an Electronic Data Interchange (EDI) entity as described in as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">Subject Alternative Name</a> in RFC 5280.</p>
 * @public
 */
export interface EdiPartyName {
  /**
   * <p>Specifies the party name.</p>
   * @public
   */
  PartyName: string | undefined;

  /**
   * <p>Specifies the name assigner.</p>
   * @public
   */
  NameAssigner?: string | undefined;
}

/**
 * <p>Defines a custom ASN.1 X.400 <code>GeneralName</code> using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.</p>
 * @public
 */
export interface OtherName {
  /**
   * <p>Specifies an OID. </p>
   * @public
   */
  TypeId: string | undefined;

  /**
   * <p>Specifies an OID value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error.</p>
 * @public
 */
export interface GeneralName {
  /**
   * <p>Represents <code>GeneralName</code> using an <code>OtherName</code> object.</p>
   * @public
   */
  OtherName?: OtherName | undefined;

  /**
   * <p>Represents <code>GeneralName</code> as an <a href="https://datatracker.ietf.org/doc/html/rfc822">RFC 822</a> email address.</p>
   * @public
   */
  Rfc822Name?: string | undefined;

  /**
   * <p>Represents <code>GeneralName</code> as a DNS name.</p>
   * @public
   */
  DnsName?: string | undefined;

  /**
   * <p>Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.</p>
   * @public
   */
  DirectoryName?: ASN1Subject | undefined;

  /**
   * <p>Represents <code>GeneralName</code> as an <code>EdiPartyName</code> object.</p>
   * @public
   */
  EdiPartyName?: EdiPartyName | undefined;

  /**
   * <p>Represents <code>GeneralName</code> as a URI.</p>
   * @public
   */
  UniformResourceIdentifier?: string | undefined;

  /**
   * <p>Represents <code>GeneralName</code> as an IPv4 or IPv6 address.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p> Represents <code>GeneralName</code> as an object identifier (OID).</p>
   * @public
   */
  RegisteredId?: string | undefined;
}

/**
 * <p>Describes the type and format of extension access. Only one of <code>CustomObjectIdentifier</code> or <code>AccessMethodType</code> may be provided. Providing both results in <code>InvalidArgsException</code>.</p>
 * @public
 */
export interface AccessMethod {
  /**
   * <p>An object identifier (OID) specifying the <code>AccessMethod</code>. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.</p>
   * @public
   */
  CustomObjectIdentifier?: string | undefined;

  /**
   * <p>Specifies the <code>AccessMethod</code>.</p>
   * @public
   */
  AccessMethodType?: AccessMethodType | undefined;
}

/**
 * <p>Provides access information used by the <code>authorityInfoAccess</code> and <code>subjectInfoAccess</code> extensions described in <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC 5280</a>.</p>
 * @public
 */
export interface AccessDescription {
  /**
   * <p>The type and format of <code>AccessDescription</code> information.</p>
   * @public
   */
  AccessMethod: AccessMethod | undefined;

  /**
   * <p>The location of <code>AccessDescription</code> information.</p>
   * @public
   */
  AccessLocation: GeneralName | undefined;
}

/**
 * <p>Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.</p>
 * @public
 */
export interface KeyUsage {
  /**
   * <p> Key can be used for digital signing.</p>
   * @public
   */
  DigitalSignature?: boolean | undefined;

  /**
   * <p>Key can be used for non-repudiation.</p>
   * @public
   */
  NonRepudiation?: boolean | undefined;

  /**
   * <p>Key can be used to encipher data.</p>
   * @public
   */
  KeyEncipherment?: boolean | undefined;

  /**
   * <p>Key can be used to decipher data.</p>
   * @public
   */
  DataEncipherment?: boolean | undefined;

  /**
   * <p>Key can be used in a key-agreement protocol.</p>
   * @public
   */
  KeyAgreement?: boolean | undefined;

  /**
   * <p>Key can be used to sign certificates.</p>
   * @public
   */
  KeyCertSign?: boolean | undefined;

  /**
   * <p>Key can be used to sign CRLs.</p>
   * @public
   */
  CRLSign?: boolean | undefined;

  /**
   * <p>Key can be used only to encipher data.</p>
   * @public
   */
  EncipherOnly?: boolean | undefined;

  /**
   * <p>Key can be used only to decipher data.</p>
   * @public
   */
  DecipherOnly?: boolean | undefined;
}

/**
 * <p>Describes the certificate extensions to be added to the certificate signing request (CSR).</p>
 * @public
 */
export interface CsrExtensions {
  /**
   * <p>Indicates the purpose of the certificate and of the key contained in the certificate.</p>
   * @public
   */
  KeyUsage?: KeyUsage | undefined;

  /**
   * <p>For CA certificates, provides a path to additional information pertaining to the CA, such as revocation and policy. For more information, see <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.2.2">Subject Information Access</a> in RFC 5280.</p>
   * @public
   */
  SubjectInformationAccess?: AccessDescription[] | undefined;
}

/**
 * <p>Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. </p>
 * @public
 */
export interface CertificateAuthorityConfiguration {
  /**
   * <p>Type of the public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. When you create a subordinate CA, you must use a key algorithm supported by the parent CA.</p>
   * @public
   */
  KeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * <p>Name of the algorithm your private CA uses to sign certificate requests.</p> <p>This parameter should not be confused with the <code>SigningAlgorithm</code> parameter used to sign certificates when they are issued.</p>
   * @public
   */
  SigningAlgorithm: SigningAlgorithm | undefined;

  /**
   * <p>Structure that contains X.500 distinguished name information for your private CA.</p>
   * @public
   */
  Subject: ASN1Subject | undefined;

  /**
   * <p>Specifies information to be added to the extension section of the certificate signing request (CSR).</p>
   * @public
   */
  CsrExtensions?: CsrExtensions | undefined;
}

/**
 * <p>Contains configuration information for the default behavior of the CRL Distribution Point (CDP) extension in certificates issued by your CA. This extension contains a link to download the CRL, so you can check whether a certificate has been revoked. To choose whether you want this extension omitted or not in certificates issued by your CA, you can set the <b>OmitExtension</b> parameter.</p>
 * @public
 */
export interface CrlDistributionPointExtensionConfiguration {
  /**
   * <p>Configures whether the CRL Distribution Point extension should be populated with the default URL to the CRL. If set to <code>true</code>, then the CDP extension will not be present in any certificates issued by that CA unless otherwise specified through CSR or API passthrough.</p> <note> <p>Only set this if you have another way to distribute the CRL Distribution Points ffor certificates issued by your CA, such as the Matter Distributed Compliance Ledger</p> <p>This configuration cannot be enabled with a custom CNAME set.</p> </note>
   * @public
   */
  OmitExtension: boolean | undefined;
}

/**
 * <p>Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the <b>Enabled</b> parameter to <code>true</code>. Your private CA writes CRLs to an S3 bucket that you specify in the <b>S3BucketName</b> parameter. You can hide the name of your bucket by specifying a value for the <b>CustomCname</b> parameter. Your private CA by default copies the CNAME or the S3 bucket name to the <b>CRL Distribution Points</b> extension of each certificate it issues. If you want to configure this default behavior to be something different, you can set the <b>CrlDistributionPointExtensionConfiguration</b> parameter. Your S3 bucket policy must give write permission to Amazon Web Services Private CA. </p> <p>Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#crl-encryption">Encrypting Your CRLs</a>.</p> <p>Your private CA uses the value in the <b>ExpirationInDays</b> parameter to calculate the <b>nextUpdate</b> field in the CRL. The CRL is refreshed prior to a certificate's expiration date or when a certificate is revoked. When a certificate is revoked, it appears in the CRL until the certificate expires, and then in one additional CRL after expiration, and it always appears in the audit report.</p> <p>A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, Amazon Web Services Private CA makes further attempts every 15 minutes.</p> <p>CRLs contain the following fields:</p> <ul> <li> <p> <b>Version</b>: The current version number defined in RFC 5280 is V2. The integer value is 0x1. </p> </li> <li> <p> <b>Signature Algorithm</b>: The name of the algorithm used to sign the CRL.</p> </li> <li> <p> <b>Issuer</b>: The X.500 distinguished name of your private CA that issued the CRL.</p> </li> <li> <p> <b>Last Update</b>: The issue date and time of this CRL.</p> </li> <li> <p> <b>Next Update</b>: The day and time by which the next CRL will be issued.</p> </li> <li> <p> <b>Revoked Certificates</b>: List of revoked certificates. Each list item contains the following information.</p> <ul> <li> <p> <b>Serial Number</b>: The serial number, in hexadecimal format, of the revoked certificate.</p> </li> <li> <p> <b>Revocation Date</b>: Date and time the certificate was revoked.</p> </li> <li> <p> <b>CRL Entry Extensions</b>: Optional extensions for the CRL entry.</p> <ul> <li> <p> <b>X509v3 CRL Reason Code</b>: Reason the certificate was revoked.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>CRL Extensions</b>: Optional extensions for the CRL.</p> <ul> <li> <p> <b>X509v3 Authority Key Identifier</b>: Identifies the public key associated with the private key used to sign the certificate.</p> </li> <li> <p> <b>X509v3 CRL Number:</b>: Decimal sequence number for the CRL.</p> </li> </ul> </li> <li> <p> <b>Signature Algorithm</b>: Algorithm used by your private CA to sign the CRL.</p> </li> <li> <p> <b>Signature Value</b>: Signature computed over the CRL.</p> </li> </ul> <p>Certificate revocation lists created by Amazon Web Services Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.</p> <p> <code>openssl crl -inform DER -text -in <i>crl_path</i> -noout</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html">Planning a certificate revocation list (CRL)</a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i> </p>
 * @public
 */
export interface CrlConfiguration {
  /**
   * <p>Boolean value that specifies whether certificate revocation lists (CRLs) are enabled. You can use this value to enable certificate revocation for a new CA when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action or for an existing CA when you call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> action. </p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>Validity period of the CRL in days.</p>
   * @public
   */
  ExpirationInDays?: number | undefined;

  /**
   * <p>Name inserted into the certificate <b>CRL Distribution Points</b> extension that enables the use of an alias for the CRL distribution point. Use this value if you don't want the name of your S3 bucket to be public.</p> <note> <p>The content of a Canonical Name (CNAME) record must conform to <a href="https://www.ietf.org/rfc/rfc2396.txt">RFC2396</a> restrictions on the use of special characters in URIs. Additionally, the value of the CNAME must not include a protocol prefix such as "http://" or "https://".</p> </note>
   * @public
   */
  CustomCname?: string | undefined;

  /**
   * <p>Name of the S3 bucket that contains the CRL. If you do not provide a value for the <b>CustomCname</b> argument, the name of your S3 bucket is placed into the <b>CRL Distribution Points</b> extension of the issued certificate. You can change the name of your bucket by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> operation. You must specify a <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#s3-policies">bucket policy</a> that allows Amazon Web Services Private CA to write the CRL to your bucket.</p> <note> <p>The <code>S3BucketName</code> parameter must conform to the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">S3 bucket naming rules</a>.</p> </note>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>Determines whether the CRL will be publicly readable or privately held in the CRL Amazon S3 bucket. If you choose PUBLIC_READ, the CRL will be accessible over the public internet. If you choose BUCKET_OWNER_FULL_CONTROL, only the owner of the CRL S3 bucket can access the CRL, and your PKI clients may need an alternative method of access. </p> <p>If no value is specified, the default is <code>PUBLIC_READ</code>.</p> <p> <i>Note:</i> This default can cause CA creation to fail in some circumstances. If you have have enabled the Block Public Access (BPA) feature in your S3 account, then you must specify the value of this parameter as <code>BUCKET_OWNER_FULL_CONTROL</code>, and not doing so results in an error. If you have disabled BPA in S3, then you can specify either <code>BUCKET_OWNER_FULL_CONTROL</code> or <code>PUBLIC_READ</code> as the value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#s3-bpa">Blocking public access to the S3 bucket</a>.</p>
   * @public
   */
  S3ObjectAcl?: S3ObjectAcl | undefined;

  /**
   * <p>Configures the behavior of the CRL Distribution Point extension for certificates issued by your certificate authority. If this field is not provided, then the CRl Distribution Point Extension will be present and contain the default CRL URL.</p>
   * @public
   */
  CrlDistributionPointExtensionConfiguration?: CrlDistributionPointExtensionConfiguration | undefined;

  /**
   * <p>Specifies whether to create a complete or partitioned CRL. This setting determines the maximum number of certificates that the certificate authority can issue and revoke. For more information, see <a href="privateca/latest/userguide/pca.html#limits_pca">Amazon Web Services Private CA quotas</a>.</p> <ul> <li> <p> <code>COMPLETE</code> - The default setting. Amazon Web Services Private CA maintains a single CRL ﬁle for all unexpired certiﬁcates issued by a CA that have been revoked for any reason. Each certiﬁcate that Amazon Web Services Private CA issues is bound to a speciﬁc CRL through its CRL distribution point (CDP) extension, deﬁned in <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.9"> RFC 5280</a>.</p> </li> <li> <p> <code>PARTITIONED</code> - Compared to complete CRLs, partitioned CRLs dramatically increase the number of certiﬁcates your private CA can issue. </p> <important> <p> When using partitioned CRLs, you must validate that the CRL's associated issuing distribution point (IDP) URI matches the certiﬁcate's CDP URI to ensure the right CRL has been fetched. Amazon Web Services Private CA marks the IDP extension as critical, which your client must be able to process. </p> </important> </li> </ul>
   * @public
   */
  CrlType?: CrlType | undefined;

  /**
   * <p>Designates a custom ﬁle path in S3 for CRL(s). For example, <code>http://&lt;CustomName&gt;/ &lt;CustomPath&gt;/&lt;CrlPartition_GUID&gt;.crl</code>. </p>
   * @public
   */
  CustomPath?: string | undefined;
}

/**
 * <p>Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.</p> <p>When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.</p>
 * @public
 */
export interface OcspConfiguration {
  /**
   * <p>Flag enabling use of the Online Certificate Status Protocol (OCSP) for validating certificate revocation status.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>By default, Amazon Web Services Private CA injects an Amazon Web Services domain into certificates being validated by the Online Certificate Status Protocol (OCSP). A customer can alternatively use this object to define a CNAME specifying a customized OCSP domain.</p> <note> <p>The content of a Canonical Name (CNAME) record must conform to <a href="https://www.ietf.org/rfc/rfc2396.txt">RFC2396</a> restrictions on the use of special characters in URIs. Additionally, the value of the CNAME must not include a protocol prefix such as "http://" or "https://".</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/ocsp-customize.html">Customizing Online Certificate Status Protocol (OCSP) </a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i>.</p>
   * @public
   */
  OcspCustomCname?: string | undefined;
}

/**
 * <p>Certificate revocation information used by the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html">RevokeCertificate</a> and <a href="https://docs.aws.amazon.com/privateca/latest/userguide/revocation-setup.html">Setting up a certificate revocation method</a> in the <i>Amazon Web Services Private Certificate Authority User Guide</i>.</p>
 * @public
 */
export interface RevocationConfiguration {
  /**
   * <p>Configuration of the certificate revocation list (CRL), if any, maintained by your private CA. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, Amazon Web Services Private CA makes further attempts every 15 minutes.</p>
   * @public
   */
  CrlConfiguration?: CrlConfiguration | undefined;

  /**
   * <p>Configuration of Online Certificate Status Protocol (OCSP) support, if any, maintained by your private CA. When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.</p>
   * @public
   */
  OcspConfiguration?: OcspConfiguration | undefined;
}

/**
 * <p>Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a> action. To remove a tag, call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html">UntagCertificateAuthority</a> action. </p>
 * @public
 */
export interface Tag {
  /**
   * <p>Key (name) of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Value of the tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateCertificateAuthorityRequest {
  /**
   * <p>Name and bit size of the private key algorithm, the name of the signing algorithm, and X.500 certificate subject information.</p>
   * @public
   */
  CertificateAuthorityConfiguration: CertificateAuthorityConfiguration | undefined;

  /**
   * <p>Contains information to enable support for Online Certificate Status Protocol (OCSP), certificate revocation list (CRL), both protocols, or neither. By default, both certificate validation mechanisms are disabled.</p> <p>The following requirements apply to revocation configurations.</p> <ul> <li> <p>A configuration disabling CRLs or OCSP must contain only the <code>Enabled=False</code> parameter, and will fail if other parameters such as <code>CustomCname</code> or <code>ExpirationInDays</code> are included.</p> </li> <li> <p>In a CRL configuration, the <code>S3BucketName</code> parameter must conform to <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Amazon S3 bucket naming rules</a>.</p> </li> <li> <p>A configuration containing a custom Canonical Name (CNAME) parameter for CRLs or OCSP must conform to <a href="https://www.ietf.org/rfc/rfc2396.txt">RFC2396</a> restrictions on the use of special characters in a CNAME. </p> </li> <li> <p>In a CRL or OCSP configuration, the value of a CNAME parameter must not include a protocol prefix such as "http://" or "https://".</p> </li> </ul> <p> For more information, see the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_OcspConfiguration.html">OcspConfiguration</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CrlConfiguration.html">CrlConfiguration</a> types.</p>
   * @public
   */
  RevocationConfiguration?: RevocationConfiguration | undefined;

  /**
   * <p>The type of the certificate authority.</p>
   * @public
   */
  CertificateAuthorityType: CertificateAuthorityType | undefined;

  /**
   * <p>Custom string that can be used to distinguish between calls to the <b>CreateCertificateAuthority</b> action. Idempotency tokens for <b>CreateCertificateAuthority</b> time out after five minutes. Therefore, if you call <b>CreateCertificateAuthority</b> multiple times with the same idempotency token within five minutes, Amazon Web Services Private CA recognizes that you are requesting only certificate authority and will issue only one. If you change the idempotency token for each call, Amazon Web Services Private CA recognizes that you are requesting multiple certificate authorities.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * <p>Specifies a cryptographic key management compliance standard for handling and protecting CA keys.</p> <p>Default: FIPS_140_2_LEVEL_3_OR_HIGHER</p> <note> <p>Some Amazon Web Services Regions don't support the default value. When you create a CA in these Regions, you must use <code>CCPC_LEVEL_1_OR_HIGHER</code> for the <code>KeyStorageSecurityStandard</code> parameter. If you don't, the operation returns an <code>InvalidArgsException</code> with this message: "A certificate authority cannot be created in this region with the specified security standard."</p> <p>For information about security standard support in different Amazon Web Services Regions, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/data-protection.html#private-keys">Storage and security compliance of Amazon Web Services Private CA private keys</a>.</p> </note>
   * @public
   */
  KeyStorageSecurityStandard?: KeyStorageSecurityStandard | undefined;

  /**
   * <p>Key-value pairs that will be attached to the new private CA. You can associate up to 50 tags with a private CA. For information using tags with IAM to manage permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days.</p> <p>The default value is GENERAL_PURPOSE.</p>
   * @public
   */
  UsageMode?: CertificateAuthorityUsageMode | undefined;
}

/**
 * @public
 */
export interface CreateCertificateAuthorityResponse {
  /**
   * <p>If successful, the Amazon Resource Name (ARN) of the certificate authority (CA). This is of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateCertificateAuthorityAuditReportRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the CA to be audited. This is of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>.</p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The name of the S3 bucket that will contain the audit report.</p>
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * <p>The format in which to create the report. This can be either <b>JSON</b> or <b>CSV</b>.</p>
   * @public
   */
  AuditReportResponseFormat: AuditReportResponseFormat | undefined;
}

/**
 * @public
 */
export interface CreateCertificateAuthorityAuditReportResponse {
  /**
   * <p>An alphanumeric string that contains a report identifier.</p>
   * @public
   */
  AuditReportId?: string | undefined;

  /**
   * <p>The <b>key</b> that uniquely identifies the report file in your S3 bucket.</p>
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * @public
 */
export interface CreatePermissionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the CA that grants the permissions. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. This must have the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The Amazon Web Services service or identity that receives the permission. At this time, the only valid principal is <code>acm.amazonaws.com</code>.</p>
   * @public
   */
  Principal: string | undefined;

  /**
   * <p>The ID of the calling account.</p>
   * @public
   */
  SourceAccount?: string | undefined;

  /**
   * <p>The actions that the specified Amazon Web Services service principal can use. These include <code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>.</p>
   * @public
   */
  Actions: ActionType[] | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateAuthorityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must have the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The number of days to make a CA restorable after it has been deleted. This can be anywhere from 7 to 30 days, with 30 being the default.</p>
   * @public
   */
  PermanentDeletionTimeInDays?: number | undefined;
}

/**
 * @public
 */
export interface DeletePermissionRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA that issued the permissions. You can find the CA's ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. This must have the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The Amazon Web Services service or identity that will have its CA permissions revoked. At this time, the only valid service principal is <code>acm.amazonaws.com</code> </p>
   * @public
   */
  Principal: string | undefined;

  /**
   * <p>The Amazon Web Services account that calls this action.</p>
   * @public
   */
  SourceAccount?: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA that will have its policy deleted. You can find the CA's ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. The ARN value must have the form <code>arn:aws:acm-pca:region:account:certificate-authority/01234567-89ab-cdef-0123-0123456789ab</code>. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateAuthorityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * <p>Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action to create your private CA. You must then call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCertificate.html">GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html">ImportCertificateAuthorityCertificate</a> action to import the signed certificate into Certificate Manager (ACM). </p>
 * @public
 */
export interface CertificateAuthority {
  /**
   * <p>Amazon Resource Name (ARN) for your private certificate authority (CA). The format is <code> <i>12345678-1234-1234-1234-123456789012</i> </code>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the certificate authority.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>Date and time at which your private CA was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Date and time at which your private CA was last updated.</p>
   * @public
   */
  LastStateChangeAt?: Date | undefined;

  /**
   * <p>Type of your private CA.</p>
   * @public
   */
  Type?: CertificateAuthorityType | undefined;

  /**
   * <p>Serial number of your private CA.</p>
   * @public
   */
  Serial?: string | undefined;

  /**
   * <p>Status of your private CA.</p>
   * @public
   */
  Status?: CertificateAuthorityStatus | undefined;

  /**
   * <p>Date and time before which your private CA certificate is not valid.</p>
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * <p>Date and time after which your private CA certificate is not valid.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>Reason the request to create your private CA failed.</p>
   * @public
   */
  FailureReason?: FailureReason | undefined;

  /**
   * <p>Your private CA configuration.</p>
   * @public
   */
  CertificateAuthorityConfiguration?: CertificateAuthorityConfiguration | undefined;

  /**
   * <p>Information about the Online Certificate Status Protocol (OCSP) configuration or certificate revocation list (CRL) created and maintained by your private CA. </p>
   * @public
   */
  RevocationConfiguration?: RevocationConfiguration | undefined;

  /**
   * <p>The period during which a deleted CA can be restored. For more information, see the <code>PermanentDeletionTimeInDays</code> parameter of the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthorityRequest.html">DeleteCertificateAuthorityRequest</a> action. </p>
   * @public
   */
  RestorableUntil?: Date | undefined;

  /**
   * <p>Defines a cryptographic key management compliance standard for handling and protecting CA keys.</p> <p>Default: FIPS_140_2_LEVEL_3_OR_HIGHER</p> <note> <p>Starting January 26, 2023, Amazon Web Services Private CA protects all CA private keys in non-China regions using hardware security modules (HSMs) that comply with FIPS PUB 140-2 Level 3.</p> <p>For information about security standard support in different Amazon Web Services Regions, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/data-protection.html#private-keys">Storage and security compliance of Amazon Web Services Private CA private keys</a>.</p> </note>
   * @public
   */
  KeyStorageSecurityStandard?: KeyStorageSecurityStandard | undefined;

  /**
   * <p>Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days.</p> <p>The default value is GENERAL_PURPOSE.</p>
   * @public
   */
  UsageMode?: CertificateAuthorityUsageMode | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateAuthorityResponse {
  /**
   * <p>A <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CertificateAuthority.html">CertificateAuthority</a> structure that contains information about your private CA.</p>
   * @public
   */
  CertificateAuthority?: CertificateAuthority | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateAuthorityAuditReportRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the private CA. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The report ID returned by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html">CreateCertificateAuthorityAuditReport</a> action.</p>
   * @public
   */
  AuditReportId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateAuthorityAuditReportResponse {
  /**
   * <p>Specifies whether report creation is in progress, has succeeded, or has failed.</p>
   * @public
   */
  AuditReportStatus?: AuditReportStatus | undefined;

  /**
   * <p>Name of the S3 bucket that contains the report.</p>
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * <p>S3 <b>key</b> that uniquely identifies the report file in your S3 bucket.</p>
   * @public
   */
  S3Key?: string | undefined;

  /**
   * <p>The date and time at which the report was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetCertificateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The ARN of the issued certificate. The ARN contains the certificate serial number and must be in the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>/certificate/<i>286535153982981100925020015808220737245</i> </code> </p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateResponse {
  /**
   * <p>The base64 PEM-encoded certificate specified by the <code>CertificateArn</code> parameter.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>The base64 PEM-encoded certificate chain that chains up to the root CA certificate that you used to sign your private CA certificate. </p>
   * @public
   */
  CertificateChain?: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateAuthorityCertificateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of your private CA. This is of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateAuthorityCertificateResponse {
  /**
   * <p>Base64-encoded certificate authority (CA) certificate.</p>
   * @public
   */
  Certificate?: string | undefined;

  /**
   * <p>Base64-encoded certificate chain that includes any intermediate certificates and chains up to root certificate that you used to sign your private CA certificate. The chain does not include your private CA certificate. If this is a root CA, the value will be null.</p>
   * @public
   */
  CertificateChain?: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateAuthorityCsrRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateAuthorityCsrResponse {
  /**
   * <p>The base64 PEM-encoded certificate signing request (CSR) for your private CA certificate.</p>
   * @public
   */
  Csr?: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA that will have its policy retrieved. You can find the CA's ARN by calling the ListCertificateAuthorities action. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * <p>The policy attached to the private CA as a JSON document.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface ImportCertificateAuthorityCertificateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The PEM-encoded certificate for a private CA. This may be a self-signed certificate in the case of a root CA, or it may be signed by another CA that you control.</p>
   * @public
   */
  Certificate: Uint8Array | undefined;

  /**
   * <p>A PEM-encoded file that contains all of your certificates, other than the certificate you're importing, chaining up to your root CA. Your Amazon Web Services Private CA-hosted or on-premises root certificate is the last in the chain, and each certificate in the chain signs the one preceding. </p> <p>This parameter must be supplied when you import a subordinate CA. When you import a root CA, there is no chain.</p>
   * @public
   */
  CertificateChain?: Uint8Array | undefined;
}

/**
 * <p>Defines a <code>PolicyInformation</code> qualifier. Amazon Web Services Private CA supports the <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4">certification practice statement (CPS) qualifier</a> defined in RFC 5280. </p>
 * @public
 */
export interface Qualifier {
  /**
   * <p>Contains a pointer to a certification practice statement (CPS) published by the CA.</p>
   * @public
   */
  CpsUri: string | undefined;
}

/**
 * <p>Modifies the <code>CertPolicyId</code> of a <code>PolicyInformation</code> object with a qualifier. Amazon Web Services Private CA supports the certification practice statement (CPS) qualifier.</p>
 * @public
 */
export interface PolicyQualifierInfo {
  /**
   * <p>Identifies the qualifier modifying a <code>CertPolicyId</code>.</p>
   * @public
   */
  PolicyQualifierId: PolicyQualifierId | undefined;

  /**
   * <p>Defines the qualifier type. Amazon Web Services Private CA supports the use of a URI for a CPS qualifier in this field.</p>
   * @public
   */
  Qualifier: Qualifier | undefined;
}

/**
 * <p>Defines the X.509 <code>CertificatePolicies</code> extension.</p>
 * @public
 */
export interface PolicyInformation {
  /**
   * <p>Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.</p>
   * @public
   */
  CertPolicyId: string | undefined;

  /**
   * <p>Modifies the given <code>CertPolicyId</code> with a qualifier. Amazon Web Services Private CA supports the certification practice statement (CPS) qualifier.</p>
   * @public
   */
  PolicyQualifiers?: PolicyQualifierInfo[] | undefined;
}

/**
 * <p/> <p>Specifies the X.509 extension information for a certificate.</p> <p>Extensions present in <code>CustomExtensions</code> follow the <code>ApiPassthrough</code> <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">template rules</a>. </p>
 * @public
 */
export interface CustomExtension {
  /**
   * <p/> <p>Specifies the object identifier (OID) of the X.509 extension. For more information, see the <a href="https://oidref.com/2.5.29">Global OID reference database.</a> </p>
   * @public
   */
  ObjectIdentifier: string | undefined;

  /**
   * <p/> <p>Specifies the base64-encoded value of the X.509 extension.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p/> <p>Specifies the critical flag of the X.509 extension.</p>
   * @public
   */
  Critical?: boolean | undefined;
}

/**
 * <p>Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.</p>
 * @public
 */
export interface ExtendedKeyUsage {
  /**
   * <p>Specifies a standard <code>ExtendedKeyUsage</code> as defined as in <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12">RFC 5280</a>.</p>
   * @public
   */
  ExtendedKeyUsageType?: ExtendedKeyUsageType | undefined;

  /**
   * <p>Specifies a custom <code>ExtendedKeyUsage</code> with an object identifier (OID).</p>
   * @public
   */
  ExtendedKeyUsageObjectIdentifier?: string | undefined;
}

/**
 * <p>Contains X.509 extension information for a certificate.</p>
 * @public
 */
export interface Extensions {
  /**
   * <p>Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. For more information, see NIST's definition of <a href="https://csrc.nist.gov/glossary/term/Object_Identifier">Object Identifier (OID)</a>.</p> <p>In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.</p>
   * @public
   */
  CertificatePolicies?: PolicyInformation[] | undefined;

  /**
   * <p>Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.</p>
   * @public
   */
  ExtendedKeyUsage?: ExtendedKeyUsage[] | undefined;

  /**
   * <p>Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.</p>
   * @public
   */
  KeyUsage?: KeyUsage | undefined;

  /**
   * <p>The subject alternative name extension allows identities to be bound to the subject of the certificate. These identities may be included in addition to or in place of the identity in the subject field of the certificate.</p>
   * @public
   */
  SubjectAlternativeNames?: GeneralName[] | undefined;

  /**
   * <p/> <p>Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the <a href="https://oidref.com/2.5.29">Global OID reference database.</a> </p>
   * @public
   */
  CustomExtensions?: CustomExtension[] | undefined;
}

/**
 * <p>Contains X.509 certificate information to be placed in an issued certificate. An <code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must be selected, or else this parameter is ignored. </p> <p>If conflicting or duplicate certificate information is supplied from other sources, Amazon Web Services Private CA applies <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">order of operation rules</a> to determine what information is used.</p>
 * @public
 */
export interface ApiPassthrough {
  /**
   * <p>Specifies X.509 extension information for a certificate.</p>
   * @public
   */
  Extensions?: Extensions | undefined;

  /**
   * <p>Contains information about the certificate subject. The <code>Subject</code> field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The <code>Subject </code>must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.</p>
   * @public
   */
  Subject?: ASN1Subject | undefined;
}

/**
 * <p>Validity specifies the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the validity of a certificate starts or expires, or as a span of time after issuance, stated in days, months, or years. For more information, see <a href="https://tools.ietf.org/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280.</p> <p>Amazon Web Services Private CA API consumes the <code>Validity</code> data type differently in two distinct parameters of the <code>IssueCertificate</code> action. The required parameter <code>IssueCertificate</code>:<code>Validity</code> specifies the end of a certificate's validity period. The optional parameter <code>IssueCertificate</code>:<code>ValidityNotBefore</code> specifies a customized starting time for the validity period.</p>
 * @public
 */
export interface Validity {
  /**
   * <p>A long integer interpreted according to the value of <code>Type</code>, below.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>Determines how <i>Amazon Web Services Private CA</i> interprets the <code>Value</code> parameter, an integer. Supported validity types include those listed below. Type definitions with values include a sample input value and the resulting output. </p> <p> <code>END_DATE</code>: The specific date and time when the certificate will expire, expressed using UTCTime (YYMMDDHHMMSS) or GeneralizedTime (YYYYMMDDHHMMSS) format. When UTCTime is used, if the year field (YY) is greater than or equal to 50, the year is interpreted as 19YY. If the year field is less than 50, the year is interpreted as 20YY.</p> <ul> <li> <p>Sample input value: 491231235959 (UTCTime format)</p> </li> <li> <p>Output expiration date/time: 12/31/2049 23:59:59</p> </li> </ul> <p> <code>ABSOLUTE</code>: The specific date and time when the validity of a certificate will start or expire, expressed in seconds since the Unix Epoch. </p> <ul> <li> <p>Sample input value: 2524608000</p> </li> <li> <p>Output expiration date/time: 01/01/2050 00:00:00</p> </li> </ul> <p> <code>DAYS</code>, <code>MONTHS</code>, <code>YEARS</code>: The relative time from the moment of issuance until the certificate will expire, expressed in days, months, or years. </p> <p>Example if <code>DAYS</code>, issued on 10/12/2020 at 12:34:54 UTC:</p> <ul> <li> <p>Sample input value: 90</p> </li> <li> <p>Output expiration date: 01/10/2020 12:34:54 UTC</p> </li> </ul> <p>The minimum validity duration for a certificate using relative time (<code>DAYS</code>) is one day. The minimum validity for a certificate using absolute time (<code>ABSOLUTE</code> or <code>END_DATE</code>) is one second.</p>
   * @public
   */
  Type: ValidityPeriodType | undefined;
}

/**
 * @public
 */
export interface IssueCertificateRequest {
  /**
   * <p>Specifies X.509 certificate information to be included in the issued certificate. An <code>APIPassthrough</code> or <code>APICSRPassthrough</code> template variant must be selected, or else this parameter is ignored. For more information about using these templates, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html">Understanding Certificate Templates</a>.</p> <p>If conflicting or duplicate certificate information is supplied during certificate issuance, Amazon Web Services Private CA applies <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">order of operation rules</a> to determine what information is used.</p>
   * @public
   */
  ApiPassthrough?: ApiPassthrough | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>The certificate signing request (CSR) for the certificate you want to issue. As an example, you can use the following OpenSSL command to create the CSR and a 2048 bit RSA private key. </p> <p> <code>openssl req -new -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr</code> </p> <p>If you have a configuration file, you can then use the following OpenSSL command. The <code>usr_cert</code> block in the configuration file contains your X509 version 3 extensions. </p> <p> <code>openssl req -new -config openssl_rsa.cnf -extensions usr_cert -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr</code> </p> <p>Note: A CSR must provide either a <i>subject name</i> or a <i>subject alternative name</i> or the request will be rejected. </p>
   * @public
   */
  Csr: Uint8Array | undefined;

  /**
   * <p>The name of the algorithm that will be used to sign the certificate to be issued. </p> <p>This parameter should not be confused with the <code>SigningAlgorithm</code> parameter used to sign a CSR in the <code>CreateCertificateAuthority</code> action.</p> <note> <p>The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.</p> </note>
   * @public
   */
  SigningAlgorithm: SigningAlgorithm | undefined;

  /**
   * <p>Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, Amazon Web Services Private CA defaults to the <code>EndEntityCertificate/V1</code> template. For CA certificates, you should choose the shortest path length that meets your needs. The path length is indicated by the PathLen<i>N</i> portion of the ARN, where <i>N</i> is the <a href="https://docs.aws.amazon.com/privateca/latest/userguide/PcaTerms.html#terms-cadepth">CA depth</a>.</p> <p>Note: The CA depth configured on a subordinate CA certificate must not exceed the limit set by its parents in the CA hierarchy.</p> <p>For a list of <code>TemplateArn</code> values supported by Amazon Web Services Private CA, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html">Understanding Certificate Templates</a>.</p>
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * <p>Information describing the end of the validity period of the certificate. This parameter sets the “Not After” date for the certificate.</p> <p>Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in days, months, or years. For more information, see <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280. </p> <p>This value is unaffected when <code>ValidityNotBefore</code> is also specified. For example, if <code>Validity</code> is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the <code>ValidityNotBefore</code> value.</p> <p>The end of the validity period configured on a certificate must not exceed the limit set on its parents in the CA hierarchy.</p>
   * @public
   */
  Validity: Validity | undefined;

  /**
   * <p>Information describing the start of the validity period of the certificate. This parameter sets the “Not Before" date for the certificate.</p> <p>By default, when issuing a certificate, Amazon Web Services Private CA sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The <code>ValidityNotBefore</code> parameter can be used to customize the “Not Before” value. </p> <p>Unlike the <code>Validity</code> parameter, the <code>ValidityNotBefore</code> parameter is optional.</p> <p>The <code>ValidityNotBefore</code> value is expressed as an explicit date and time, using the <code>Validity</code> type value <code>ABSOLUTE</code>. For more information, see <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_Validity.html">Validity</a> in this API reference and <a href="https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.5">Validity</a> in RFC 5280.</p>
   * @public
   */
  ValidityNotBefore?: Validity | undefined;

  /**
   * <p>Alphanumeric string that can be used to distinguish between calls to the <b>IssueCertificate</b> action. Idempotency tokens for <b>IssueCertificate</b> time out after five minutes. Therefore, if you call <b>IssueCertificate</b> multiple times with the same idempotency token within five minutes, Amazon Web Services Private CA recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, Amazon Web Services Private CA recognizes that you are requesting multiple certificates.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface IssueCertificateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the issued certificate and the certificate serial number. This is of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i>/certificate/<i>286535153982981100925020015808220737245</i> </code> </p>
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificateAuthoritiesRequest {
  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the <code>NextToken</code> element is sent in the response. Use this <code>NextToken</code> value in a subsequent request to retrieve additional items.</p> <p>Although the maximum value is 1000, the action only returns a maximum of 100 items.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the <code>NextToken</code> parameter from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Use this parameter to filter the returned set of certificate authorities based on their owner. The default is SELF.</p>
   * @public
   */
  ResourceOwner?: ResourceOwner | undefined;
}

/**
 * @public
 */
export interface ListCertificateAuthoritiesResponse {
  /**
   * <p>When the list is truncated, this value is present and should be used for the <code>NextToken</code> parameter in a subsequent pagination request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Summary information about each certificate authority you have created.</p>
   * @public
   */
  CertificateAuthorities?: CertificateAuthority[] | undefined;
}

/**
 * @public
 */
export interface ListPermissionsRequest {
  /**
   * <p>When paginating results, use this parameter to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the <b>NextToken</b> element is sent in the response. Use this <b>NextToken</b> value in a subsequent request to retrieve additional items.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>When paginating results, use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <b>NextToken</b> from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the private CA to inspect. You can find the ARN by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action. This must be of the form: <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code> You can get a private CA's ARN by running the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action.</p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * <p>Permissions designate which private CA actions can be performed by an Amazon Web Services service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (<code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>). Permissions can be assigned with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action, removed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html">DeletePermission</a> action, and listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action.</p>
 * @public
 */
export interface Permission {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA from which the permission was issued.</p>
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * <p>The time at which the permission was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The Amazon Web Services service or entity that holds the permission. At this time, the only valid principal is <code>acm.amazonaws.com</code>.</p>
   * @public
   */
  Principal?: string | undefined;

  /**
   * <p>The ID of the account that assigned the permission.</p>
   * @public
   */
  SourceAccount?: string | undefined;

  /**
   * <p>The private CA actions that can be performed by the designated Amazon Web Services service.</p>
   * @public
   */
  Actions?: ActionType[] | undefined;

  /**
   * <p>The name of the policy that is associated with the permission.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionsResponse {
  /**
   * <p>When the list is truncated, this value is present and should be used for the <b>NextToken</b> parameter in a subsequent pagination request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Summary information about each permission assigned by the specified private CA, including the action enabled, the policy provided, and the time of creation.</p>
   * @public
   */
  Permissions?: Permission[] | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the <b>NextToken</b> element is sent in the response. Use this <b>NextToken</b> value in a subsequent request to retrieve additional items.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of <b>NextToken</b> from the response you just received.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * <p>When the list is truncated, this value is present and should be used for the <b>NextToken</b> parameter in a subsequent pagination request. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The tags associated with your private CA.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutPolicyRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA to associate with the policy. The ARN of the CA can be found by calling the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a> action.</p> <p/>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The path and file name of a JSON-formatted IAM policy to attach to the specified private CA resource. If this policy does not contain all required statements or if it includes any statement that is not allowed, the <code>PutPolicy</code> action returns an <code>InvalidPolicyException</code>. For information about IAM policy and statement structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json">Overview of JSON Policies</a>.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface RestoreCertificateAuthorityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * @public
 */
export interface RevokeCertificateRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>Serial number of the certificate to be revoked. This must be in hexadecimal format. You can retrieve the serial number by calling <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html">GetCertificate</a> with the Amazon Resource Name (ARN) of the certificate you want and the ARN of your private CA. The <b>GetCertificate</b> action retrieves the certificate in the PEM format. You can use the following OpenSSL command to list the certificate in text format and copy the hexadecimal serial number. </p> <p> <code>openssl x509 -in <i>file_path</i> -text -noout</code> </p> <p>You can also copy the serial number from the console or use the <a href="https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html">DescribeCertificate</a> action in the <i>Certificate Manager API Reference</i>. </p>
   * @public
   */
  CertificateSerial: string | undefined;

  /**
   * <p>Specifies why you revoked the certificate.</p>
   * @public
   */
  RevocationReason: RevocationReason | undefined;
}

/**
 * @public
 */
export interface TagCertificateAuthorityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>List of tags to be associated with the CA.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagCertificateAuthorityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that was returned when you called <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a>. This must be of the form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>List of tags to be removed from the CA.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateAuthorityRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:</p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * <p>Contains information to enable support for Online Certificate Status Protocol (OCSP), certificate revocation list (CRL), both protocols, or neither. If you don't supply this parameter, existing capibilites remain unchanged. For more information, see the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_OcspConfiguration.html">OcspConfiguration</a> and <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CrlConfiguration.html">CrlConfiguration</a> types.</p> <p>The following requirements apply to revocation configurations.</p> <ul> <li> <p>A configuration disabling CRLs or OCSP must contain only the <code>Enabled=False</code> parameter, and will fail if other parameters such as <code>CustomCname</code> or <code>ExpirationInDays</code> are included.</p> </li> <li> <p>In a CRL configuration, the <code>S3BucketName</code> parameter must conform to <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html">Amazon S3 bucket naming rules</a>.</p> </li> <li> <p>A configuration containing a custom Canonical Name (CNAME) parameter for CRLs or OCSP must conform to <a href="https://www.ietf.org/rfc/rfc2396.txt">RFC2396</a> restrictions on the use of special characters in a CNAME. </p> </li> <li> <p>In a CRL or OCSP configuration, the value of a CNAME parameter must not include a protocol prefix such as "http://" or "https://".</p> </li> </ul> <important> <p> If you update the <code>S3BucketName</code> of <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CrlConfiguration.html">CrlConfiguration</a>, you can break revocation for existing certificates. In other words, if you call <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html">UpdateCertificateAuthority</a> to update the CRL configuration's S3 bucket name, Amazon Web Services Private CA only writes CRLs to the new S3 bucket. Certificates issued prior to this point will have the old S3 bucket name in your CRL Distribution Point (CDP) extension, essentially breaking revocation. If you must update the S3 bucket, you'll need to reissue old certificates to keep the revocation working. Alternatively, you can use a <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CrlConfiguration.html#privateca-Type-CrlConfiguration-CustomCname">CustomCname</a> in your CRL configuration if you might need to change the S3 bucket name in the future.</p> </important>
   * @public
   */
  RevocationConfiguration?: RevocationConfiguration | undefined;

  /**
   * <p>Status of your private CA.</p>
   * @public
   */
  Status?: CertificateAuthorityStatus | undefined;
}

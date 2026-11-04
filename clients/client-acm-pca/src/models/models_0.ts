// smithy-typescript generated code
import type {
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
 * Defines the X.500 relative distinguished name (RDN).
 *
 * @public
 */
export interface CustomAttribute {
  /**
   * Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).
   *
   * @public
   */
  ObjectIdentifier: string | undefined;

  /**
   * Specifies the attribute value of relative distinguished name (RDN).
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Contains information about the certificate subject. The `Subject` field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The `Subject`must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
 *
 * @public
 */
export interface ASN1Subject {
  /**
   * Two-digit code that specifies the country in which the certificate subject located.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * Legal name of the organization with which the certificate subject is affiliated.
   *
   * @public
   */
  Organization?: string | undefined;

  /**
   * A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
   *
   * @public
   */
  OrganizationalUnit?: string | undefined;

  /**
   * Disambiguating information for the certificate subject.
   *
   * @public
   */
  DistinguishedNameQualifier?: string | undefined;

  /**
   * State in which the subject of the certificate is located.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.
   *
   * Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.
   *
   * @public
   */
  CommonName?: string | undefined;

  /**
   * The certificate serial number.
   *
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * The locality (such as a city or town) in which the certificate subject is located.
   *
   * @public
   */
  Locality?: string | undefined;

  /**
   * A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.
   *
   * @public
   */
  Surname?: string | undefined;

  /**
   * First name.
   *
   * @public
   */
  GivenName?: string | undefined;

  /**
   * Concatenation that typically contains the first letter of the **GivenName**, the first letter of the middle name if one exists, and the first letter of the **Surname**.
   *
   * @public
   */
  Initials?: string | undefined;

  /**
   * Typically a shortened version of a longer **GivenName**. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
   *
   * @public
   */
  Pseudonym?: string | undefined;

  /**
   * Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.
   *
   * @public
   */
  GenerationQualifier?: string | undefined;

  /**
   * Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST’s definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
   *
   * > **Note:** Custom attributes cannot be used in combination with standard attributes.
   *
   * @public
   */
  CustomAttributes?: CustomAttribute[] | undefined;
}

/**
 * Describes an Electronic Data Interchange (EDI) entity as described in as defined in [Subject Alternative Name](https://datatracker.ietf.org/doc/html/rfc5280) in RFC 5280.
 *
 * @public
 */
export interface EdiPartyName {
  /**
   * Specifies the party name.
   *
   * @public
   */
  PartyName: string | undefined;

  /**
   * Specifies the name assigner.
   *
   * @public
   */
  NameAssigner?: string | undefined;
}

/**
 * Defines a custom ASN.1 X.400 `GeneralName` using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
 *
 * @public
 */
export interface OtherName {
  /**
   * Specifies an OID.
   *
   * @public
   */
  TypeId: string | undefined;

  /**
   * Specifies an OID value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Describes an ASN.1 X.400 `GeneralName` as defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280). Only one of the following naming options should be provided. Providing more than one option results in an `InvalidArgsException` error.
 *
 * @public
 */
export interface GeneralName {
  /**
   * Represents `GeneralName` using an `OtherName` object.
   *
   * @public
   */
  OtherName?: OtherName | undefined;

  /**
   * Represents `GeneralName` as an [RFC 822](https://datatracker.ietf.org/doc/html/rfc822) email address.
   *
   * @public
   */
  Rfc822Name?: string | undefined;

  /**
   * Represents `GeneralName` as a DNS name.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * Contains information about the certificate subject. The `Subject` field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The `Subject`must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
   *
   * @public
   */
  DirectoryName?: ASN1Subject | undefined;

  /**
   * Represents `GeneralName` as an `EdiPartyName` object.
   *
   * @public
   */
  EdiPartyName?: EdiPartyName | undefined;

  /**
   * Represents `GeneralName` as a URI.
   *
   * @public
   */
  UniformResourceIdentifier?: string | undefined;

  /**
   * Represents `GeneralName` as an IPv4 or IPv6 address.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * Represents `GeneralName` as an object identifier (OID).
   *
   * @public
   */
  RegisteredId?: string | undefined;
}

/**
 * Describes the type and format of extension access. Only one of `CustomObjectIdentifier` or `AccessMethodType` may be provided. Providing both results in `InvalidArgsException`.
 *
 * @public
 */
export interface AccessMethod {
  /**
   * An object identifier (OID) specifying the `AccessMethod`. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
   *
   * @public
   */
  CustomObjectIdentifier?: string | undefined;

  /**
   * Specifies the `AccessMethod`.
   *
   * @public
   */
  AccessMethodType?: AccessMethodType | undefined;
}

/**
 * Provides access information used by the `authorityInfoAccess` and `subjectInfoAccess` extensions described in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280).
 *
 * @public
 */
export interface AccessDescription {
  /**
   * The type and format of `AccessDescription` information.
   *
   * @public
   */
  AccessMethod: AccessMethod | undefined;

  /**
   * The location of `AccessDescription` information.
   *
   * @public
   */
  AccessLocation: GeneralName | undefined;
}

/**
 * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
 *
 * @public
 */
export interface KeyUsage {
  /**
   * Key can be used for digital signing.
   *
   * @public
   */
  DigitalSignature?: boolean | undefined;

  /**
   * Key can be used for non-repudiation.
   *
   * @public
   */
  NonRepudiation?: boolean | undefined;

  /**
   * Key can be used to encipher data.
   *
   * @public
   */
  KeyEncipherment?: boolean | undefined;

  /**
   * Key can be used to decipher data.
   *
   * @public
   */
  DataEncipherment?: boolean | undefined;

  /**
   * Key can be used in a key-agreement protocol.
   *
   * @public
   */
  KeyAgreement?: boolean | undefined;

  /**
   * Key can be used to sign certificates.
   *
   * @public
   */
  KeyCertSign?: boolean | undefined;

  /**
   * Key can be used to sign CRLs.
   *
   * @public
   */
  CRLSign?: boolean | undefined;

  /**
   * Key can be used only to encipher data.
   *
   * @public
   */
  EncipherOnly?: boolean | undefined;

  /**
   * Key can be used only to decipher data.
   *
   * @public
   */
  DecipherOnly?: boolean | undefined;
}

/**
 * Describes the certificate extensions to be added to the certificate signing request (CSR).
 *
 * @public
 */
export interface CsrExtensions {
  /**
   * Indicates the purpose of the certificate and of the key contained in the certificate.
   *
   * @public
   */
  KeyUsage?: KeyUsage | undefined;

  /**
   * For CA certificates, provides a path to additional information pertaining to the CA, such as revocation and policy. For more information, see [Subject Information Access](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.2.2) in RFC 5280.
   *
   * @public
   */
  SubjectInformationAccess?: AccessDescription[] | undefined;
}

/**
 * Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) action.
 *
 * @public
 */
export interface CertificateAuthorityConfiguration {
  /**
   * Type of the public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. When you create a subordinate CA, you must use a key algorithm supported by the parent CA.
   *
   * @public
   */
  KeyAlgorithm: KeyAlgorithm | undefined;

  /**
   * Name of the algorithm your private CA uses to sign certificate requests.
   *
   * This parameter should not be confused with the `SigningAlgorithm` parameter of the `IssueCertificate` API action, which is used to sign certificates when they are issued.
   *
   * @public
   */
  SigningAlgorithm: SigningAlgorithm | undefined;

  /**
   * Structure that contains X.500 distinguished name information for your private CA.
   *
   * @public
   */
  Subject: ASN1Subject | undefined;

  /**
   * Specifies information to be added to the extension section of the certificate signing request (CSR).
   *
   * @public
   */
  CsrExtensions?: CsrExtensions | undefined;
}

/**
 * Contains configuration information for the default behavior of the CRL Distribution Point (CDP) extension in certificates issued by your CA. This extension contains a link to download the CRL, so you can check whether a certificate has been revoked. To choose whether you want this extension omitted or not in certificates issued by your CA, you can set the **OmitExtension** parameter.
 *
 * @public
 */
export interface CrlDistributionPointExtensionConfiguration {
  /**
   * Configures whether the CRL Distribution Point extension should be populated with the default URL to the CRL. If set to `true`, then the CDP extension will not be present in any certificates issued by that CA unless otherwise specified through CSR or API passthrough.
   *
   * > **Note:**
   * >
   * > Only set this if you have another way to distribute the CRL Distribution Points for certificates issued by your CA, such as the Matter Distributed Compliance Ledger
   * >
   * > This configuration cannot be enabled with a custom CNAME set.
   *
   * @public
   */
  OmitExtension: boolean | undefined;
}

/**
 * Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the **Enabled** parameter to `true`. Your private CA writes CRLs to an S3 bucket that you specify in the **S3BucketName** parameter. You can hide the name of your bucket by specifying a value for the **CustomCname** parameter. Your private CA by default copies the CNAME or the S3 bucket name to the **CRL Distribution Points** extension of each certificate it issues. If you want to configure this default behavior to be something different, you can set the **CrlDistributionPointExtensionConfiguration** parameter. Your S3 bucket policy must give write permission to Amazon Web Services Private CA.
 *
 * Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see [Encrypting Your CRLs](https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#crl-encryption).
 *
 * Your private CA uses the value in the **ExpirationInDays** parameter to calculate the **nextUpdate** field in the CRL. The CRL is refreshed prior to a certificate's expiration date or when a certificate is revoked. When a certificate is revoked, it appears in the CRL until the certificate expires, and then in one additional CRL after expiration, and it always appears in the audit report.
 *
 * A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, Amazon Web Services Private CA makes further attempts every 15 minutes.
 *
 * CRLs contain the following fields:
 *
 * - **Version**: The current version number defined in RFC 5280 is V2. The integer value is 0x1.
 * - **Signature Algorithm**: The name of the algorithm used to sign the CRL.
 * - **Issuer**: The X.500 distinguished name of your private CA that issued the CRL.
 * - **Last Update**: The issue date and time of this CRL.
 * - **Next Update**: The day and time by which the next CRL will be issued.
 * - **Revoked Certificates**: List of revoked certificates. Each list item contains the following information.
 *
 *   - **Serial Number**: The serial number, in hexadecimal format, of the revoked certificate.
 *   - **Revocation Date**: Date and time the certificate was revoked.
 *   - **CRL Entry Extensions**: Optional extensions for the CRL entry.
 *
 *     - **X509v3 CRL Reason Code**: Reason the certificate was revoked.
 * - **CRL Extensions**: Optional extensions for the CRL.
 *
 *   - **X509v3 Authority Key Identifier**: Identifies the public key associated with the private key used to sign the certificate.
 *   - **X509v3 CRL Number:**: Decimal sequence number for the CRL.
 * - **Signature Algorithm**: Algorithm used by your private CA to sign the CRL.
 * - **Signature Value**: Signature computed over the CRL.
 *
 * Certificate revocation lists created by Amazon Web Services Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.
 *
 * `openssl crl -inform DER -text -in crl_path -noout`
 *
 * For more information, see [Planning a certificate revocation list (CRL)](https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html) in the *Amazon Web Services Private Certificate Authority User Guide*
 *
 * @public
 */
export interface CrlConfiguration {
  /**
   * Boolean value that specifies whether certificate revocation lists (CRLs) are enabled. You can use this value to enable certificate revocation for a new CA when you call the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) action or for an existing CA when you call the [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) action.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * Validity period of the CRL in days.
   *
   * @public
   */
  ExpirationInDays?: number | undefined;

  /**
   * Name inserted into the certificate **CRL Distribution Points** extension that enables the use of an alias for the CRL distribution point. Use this value if you don't want the name of your S3 bucket to be public.
   *
   * > **Note:** The content of a Canonical Name (CNAME) record must conform to [RFC2396](https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in URIs. Additionally, the value of the CNAME must not include a protocol prefix such as "http://" or "https://".
   *
   * @public
   */
  CustomCname?: string | undefined;

  /**
   * Name of the S3 bucket that contains the CRL. If you do not provide a value for the **CustomCname** argument, the name of your S3 bucket is placed into the **CRL Distribution Points** extension of the issued certificate. You can change the name of your bucket by calling the [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) operation. You must specify a [bucket policy](https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-policies) that allows Amazon Web Services Private CA to write the CRL to your bucket.
   *
   * > **Note:** The `S3BucketName` parameter must conform to the [S3 bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * Determines whether the CRL will be publicly readable or privately held in the CRL Amazon S3 bucket. If you choose PUBLIC_READ, the CRL will be accessible over the public internet. If you choose BUCKET_OWNER_FULL_CONTROL, only the owner of the CRL S3 bucket can access the CRL, and your PKI clients may need an alternative method of access.
   *
   * If no value is specified, the default is `PUBLIC_READ`.
   *
   * *Note:* This default can cause CA creation to fail in some circumstances. If you have have enabled the Block Public Access (BPA) feature in your S3 account, then you must specify the value of this parameter as `BUCKET_OWNER_FULL_CONTROL`, and not doing so results in an error. If you have disabled BPA in S3, then you can specify either `BUCKET_OWNER_FULL_CONTROL` or `PUBLIC_READ` as the value.
   *
   * For more information, see [Blocking public access to the S3 bucket](https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html#s3-bpa).
   *
   * @public
   */
  S3ObjectAcl?: S3ObjectAcl | undefined;

  /**
   * Configures the behavior of the CRL Distribution Point extension for certificates issued by your certificate authority. If this field is not provided, then the CRl Distribution Point Extension will be present and contain the default CRL URL.
   *
   * @public
   */
  CrlDistributionPointExtensionConfiguration?: CrlDistributionPointExtensionConfiguration | undefined;

  /**
   * Specifies whether to create a complete or partitioned CRL. This setting determines the maximum number of certificates that the certificate authority can issue and revoke. For more information, see [Amazon Web Services Private CA quotas](https://docs.aws.amazon.com/general/latest/gr/pca.html#limits_pca).
   *
   * - `COMPLETE` - The default setting. Amazon Web Services Private CA maintains a single CRL ﬁle for all unexpired certiﬁcates issued by a CA that have been revoked for any reason. Each certiﬁcate that Amazon Web Services Private CA issues is bound to a speciﬁc CRL through its CRL distribution point (CDP) extension, deﬁned in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.9).
   * - `PARTITIONED` - Compared to complete CRLs, partitioned CRLs dramatically increase the number of certiﬁcates your private CA can issue.
   *
   *   > **Important:** When using partitioned CRLs, you must validate that the CRL's associated issuing distribution point (IDP) URI matches the certiﬁcate's CDP URI to ensure the right CRL has been fetched. Amazon Web Services Private CA marks the IDP extension as critical, which your client must be able to process.
   *
   * @public
   */
  CrlType?: CrlType | undefined;

  /**
   * Designates a custom ﬁle path in S3 for CRL(s). For example, `http://<CustomName>/ <CustomPath>/<CrlPartition_GUID>.crl`.
   *
   * @public
   */
  CustomPath?: string | undefined;
}

/**
 * Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.
 *
 * When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.
 *
 * @public
 */
export interface OcspConfiguration {
  /**
   * Flag enabling use of the Online Certificate Status Protocol (OCSP) for validating certificate revocation status.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * By default, Amazon Web Services Private CA injects an Amazon Web Services domain into certificates being validated by the Online Certificate Status Protocol (OCSP). A customer can alternatively use this object to define a CNAME specifying a customized OCSP domain.
   *
   * > **Note:** The content of a Canonical Name (CNAME) record must conform to [RFC2396](https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in URIs. Additionally, the value of the CNAME must not include a protocol prefix such as "http://" or "https://".
   *
   * For more information, see [Customizing Online Certificate Status Protocol (OCSP)](https://docs.aws.amazon.com/privateca/latest/userguide/ocsp-customize.html) in the *Amazon Web Services Private Certificate Authority User Guide*.
   *
   * @public
   */
  OcspCustomCname?: string | undefined;
}

/**
 * Certificate revocation information used by the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) and [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see [RevokeCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html) and [Setting up a certificate revocation method](https://docs.aws.amazon.com/privateca/latest/userguide/revocation-setup.html) in the *Amazon Web Services Private Certificate Authority User Guide*.
 *
 * @public
 */
export interface RevocationConfiguration {
  /**
   * Configuration of the certificate revocation list (CRL), if any, maintained by your private CA. A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, Amazon Web Services Private CA makes further attempts every 15 minutes.
   *
   * @public
   */
  CrlConfiguration?: CrlConfiguration | undefined;

  /**
   * Configuration of Online Certificate Status Protocol (OCSP) support, if any, maintained by your private CA. When you revoke a certificate, OCSP responses may take up to 60 minutes to reflect the new status.
   *
   * @public
   */
  OcspConfiguration?: OcspConfiguration | undefined;
}

/**
 * Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the [TagCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html) action. To remove a tag, call the [UntagCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html) action.
 *
 * @public
 */
export interface Tag {
  /**
   * Key (name) of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Value of the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateCertificateAuthorityRequest {
  /**
   * Name and bit size of the private key algorithm, the name of the signing algorithm, and X.500 certificate subject information.
   *
   * @public
   */
  CertificateAuthorityConfiguration: CertificateAuthorityConfiguration | undefined;

  /**
   * Contains information to enable support for Online Certificate Status Protocol (OCSP), certificate revocation list (CRL), both protocols, or neither. By default, both certificate validation mechanisms are disabled.
   *
   * The following requirements apply to revocation configurations.
   *
   * - A configuration disabling CRLs or OCSP must contain only the `Enabled=False` parameter, and will fail if other parameters such as `CustomCname` or `ExpirationInDays` are included.
   * - In a CRL configuration, the `S3BucketName` parameter must conform to [Amazon S3 bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
   * - A configuration containing a custom Canonical Name (CNAME) parameter for CRLs or OCSP must conform to [RFC2396](https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in a CNAME.
   * - In a CRL or OCSP configuration, the value of a CNAME parameter must not include a protocol prefix such as "http://" or "https://".
   *
   * For more information, see the [OcspConfiguration](https://docs.aws.amazon.com/privateca/latest/APIReference/API_OcspConfiguration.html) and [CrlConfiguration](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CrlConfiguration.html) types.
   *
   * @public
   */
  RevocationConfiguration?: RevocationConfiguration | undefined;

  /**
   * The type of the certificate authority.
   *
   * @public
   */
  CertificateAuthorityType: CertificateAuthorityType | undefined;

  /**
   * Custom string that can be used to distinguish between calls to the **CreateCertificateAuthority** action. Idempotency tokens for **CreateCertificateAuthority** time out after five minutes. Therefore, if you call **CreateCertificateAuthority** multiple times with the same idempotency token within five minutes, Amazon Web Services Private CA recognizes that you are requesting only certificate authority and will issue only one. If you change the idempotency token for each call, Amazon Web Services Private CA recognizes that you are requesting multiple certificate authorities.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;

  /**
   * Specifies a cryptographic key management compliance standard for handling and protecting CA keys.
   *
   * Default: FIPS_140_2_LEVEL_3_OR_HIGHER
   *
   * > **Note:**
   * >
   * > Some Amazon Web Services Regions don't support the default value. When you create a CA in these Regions, you must use `CCPC_LEVEL_1_OR_HIGHER` for the `KeyStorageSecurityStandard` parameter. If you don't, the operation returns an `InvalidArgsException` with this message: "A certificate authority cannot be created in this region with the specified security standard."
   * >
   * > For information about security standard support in different Amazon Web Services Regions, see [Storage and security compliance of Amazon Web Services Private CA private keys](https://docs.aws.amazon.com/privateca/latest/userguide/data-protection.html#private-keys).
   *
   * @public
   */
  KeyStorageSecurityStandard?: KeyStorageSecurityStandard | undefined;

  /**
   * Key-value pairs that will be attached to the new private CA. You can associate up to 50 tags with a private CA. For information using tags with IAM to manage permissions, see [Controlling Access Using IAM Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days.
   *
   * The default value is GENERAL_PURPOSE.
   *
   * @public
   */
  UsageMode?: CertificateAuthorityUsageMode | undefined;
}

/**
 * @public
 */
export interface CreateCertificateAuthorityResponse {
  /**
   * If successful, the Amazon Resource Name (ARN) of the certificate authority (CA). This is of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`.
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateCertificateAuthorityAuditReportRequest {
  /**
   * The Amazon Resource Name (ARN) of the CA to be audited. This is of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`.
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * The name of the S3 bucket that will contain the audit report.
   *
   * @public
   */
  S3BucketName: string | undefined;

  /**
   * The format in which to create the report. This can be either **JSON** or **CSV**.
   *
   * @public
   */
  AuditReportResponseFormat: AuditReportResponseFormat | undefined;
}

/**
 * @public
 */
export interface CreateCertificateAuthorityAuditReportResponse {
  /**
   * An alphanumeric string that contains a report identifier.
   *
   * @public
   */
  AuditReportId?: string | undefined;

  /**
   * The **key** that uniquely identifies the report file in your S3 bucket.
   *
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * @public
 */
export interface CreatePermissionRequest {
  /**
   * The Amazon Resource Name (ARN) of the CA that grants the permissions. You can find the ARN by calling the [ListCertificateAuthorities](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html) action. This must have the following form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`.
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * The Amazon Web Services service or identity that receives the permission. At this time, the only valid principal is `acm.amazonaws.com`.
   *
   * @public
   */
  Principal: string | undefined;

  /**
   * The ID of the calling account.
   *
   * @public
   */
  SourceAccount?: string | undefined;

  /**
   * The actions that the specified Amazon Web Services service principal can use. These include `IssueCertificate`, `GetCertificate`, and `ListPermissions`.
   *
   * @public
   */
  Actions: ActionType[] | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateAuthorityRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html). This must have the following form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`.
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * The number of days to make a CA restorable after it has been deleted. This can be anywhere from 7 to 30 days, with 30 being the default.
   *
   * @public
   */
  PermanentDeletionTimeInDays?: number | undefined;
}

/**
 * @public
 */
export interface DeletePermissionRequest {
  /**
   * The Amazon Resource Number (ARN) of the private CA that issued the permissions. You can find the CA's ARN by calling the [ListCertificateAuthorities](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html) action. This must have the following form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`.
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * The Amazon Web Services service or identity that will have its CA permissions revoked. At this time, the only valid service principal is `acm.amazonaws.com`
   *
   * @public
   */
  Principal: string | undefined;

  /**
   * The Amazon Web Services account that calls this action.
   *
   * @public
   */
  SourceAccount?: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * The Amazon Resource Number (ARN) of the private CA that will have its policy deleted. You can find the CA's ARN by calling the [ListCertificateAuthorities](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html) action. The ARN value must have the form `arn:aws:acm-pca:region:account:certificate-authority/01234567-89ab-cdef-0123-0123456789ab`.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateAuthorityRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html). This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`.
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate **Subject** field owns or controls the public key contained in the **Subject Public Key Info** field. Call the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) action to create your private CA. You must then call the [GetCertificateAuthorityCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificateAuthorityCertificate.html) action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA certificate. Call the [ImportCertificateAuthorityCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ImportCertificateAuthorityCertificate.html) action to import the signed certificate into Certificate Manager (ACM).
 *
 * @public
 */
export interface CertificateAuthority {
  /**
   * Amazon Resource Name (ARN) for your private certificate authority (CA). The format is `12345678-1234-1234-1234-123456789012`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the certificate authority.
   *
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * Date and time at which your private CA was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Date and time at which your private CA was last updated.
   *
   * @public
   */
  LastStateChangeAt?: Date | undefined;

  /**
   * Type of your private CA.
   *
   * @public
   */
  Type?: CertificateAuthorityType | undefined;

  /**
   * Serial number of your private CA.
   *
   * @public
   */
  Serial?: string | undefined;

  /**
   * Status of your private CA.
   *
   * @public
   */
  Status?: CertificateAuthorityStatus | undefined;

  /**
   * Date and time before which your private CA certificate is not valid.
   *
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * Date and time after which your private CA certificate is not valid.
   *
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * Reason the request to create your private CA failed.
   *
   * @public
   */
  FailureReason?: FailureReason | undefined;

  /**
   * Your private CA configuration.
   *
   * @public
   */
  CertificateAuthorityConfiguration?: CertificateAuthorityConfiguration | undefined;

  /**
   * Information about the Online Certificate Status Protocol (OCSP) configuration or certificate revocation list (CRL) created and maintained by your private CA.
   *
   * @public
   */
  RevocationConfiguration?: RevocationConfiguration | undefined;

  /**
   * The period during which a deleted CA can be restored. For more information, see the `PermanentDeletionTimeInDays` parameter of the [DeleteCertificateAuthorityRequest](https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeleteCertificateAuthorityRequest.html) action.
   *
   * @public
   */
  RestorableUntil?: Date | undefined;

  /**
   * Defines a cryptographic key management compliance standard for handling and protecting CA keys.
   *
   * Default: FIPS_140_2_LEVEL_3_OR_HIGHER
   *
   * > **Note:**
   * >
   * > Starting January 26, 2023, Amazon Web Services Private CA protects all CA private keys in non-China regions using hardware security modules (HSMs) that comply with FIPS PUB 140-2 Level 3.
   * >
   * > For information about security standard support in different Amazon Web Services Regions, see [Storage and security compliance of Amazon Web Services Private CA private keys](https://docs.aws.amazon.com/privateca/latest/userguide/data-protection.html#private-keys).
   *
   * @public
   */
  KeyStorageSecurityStandard?: KeyStorageSecurityStandard | undefined;

  /**
   * Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days.
   *
   * The default value is GENERAL_PURPOSE.
   *
   * @public
   */
  UsageMode?: CertificateAuthorityUsageMode | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateAuthorityResponse {
  /**
   * A [CertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CertificateAuthority.html) structure that contains information about your private CA.
   *
   * @public
   */
  CertificateAuthority?: CertificateAuthority | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateAuthorityAuditReportRequest {
  /**
   * The Amazon Resource Name (ARN) of the private CA. This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`.
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * The report ID returned by calling the [CreateCertificateAuthorityAuditReport](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthorityAuditReport.html) action.
   *
   * @public
   */
  AuditReportId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateAuthorityAuditReportResponse {
  /**
   * Specifies whether report creation is in progress, has succeeded, or has failed.
   *
   * @public
   */
  AuditReportStatus?: AuditReportStatus | undefined;

  /**
   * Name of the S3 bucket that contains the report.
   *
   * @public
   */
  S3BucketName?: string | undefined;

  /**
   * S3 **key** that uniquely identifies the report file in your S3 bucket.
   *
   * @public
   */
  S3Key?: string | undefined;

  /**
   * The date and time at which the report was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetCertificateRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html). This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`.
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * The ARN of the issued certificate. The ARN contains the certificate serial number and must be in the following form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012/certificate/286535153982981100925020015808220737245`
   *
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateResponse {
  /**
   * The base64 PEM-encoded certificate specified by the `CertificateArn` parameter.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * The base64 PEM-encoded certificate chain that chains up to the root CA certificate that you used to sign your private CA certificate.
   *
   * @public
   */
  CertificateChain?: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateAuthorityCertificateRequest {
  /**
   * The Amazon Resource Name (ARN) of your private CA. This is of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`.
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateAuthorityCertificateResponse {
  /**
   * Base64-encoded certificate authority (CA) certificate.
   *
   * @public
   */
  Certificate?: string | undefined;

  /**
   * Base64-encoded certificate chain that includes any intermediate certificates and chains up to root certificate that you used to sign your private CA certificate. The chain does not include your private CA certificate. If this is a root CA, the value will be null.
   *
   * @public
   */
  CertificateChain?: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateAuthorityCsrRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) action. This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * @public
 */
export interface GetCertificateAuthorityCsrResponse {
  /**
   * The base64 PEM-encoded certificate signing request (CSR) for your private CA certificate.
   *
   * @public
   */
  Csr?: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * The Amazon Resource Number (ARN) of the private CA that will have its policy retrieved. You can find the CA's ARN by calling the ListCertificateAuthorities action.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * The policy attached to the private CA as a JSON document.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface ImportCertificateAuthorityCertificateRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html). This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * The PEM-encoded certificate for a private CA. This may be a self-signed certificate in the case of a root CA, or it may be signed by another CA that you control.
   *
   * @public
   */
  Certificate: Uint8Array | undefined;

  /**
   * A PEM-encoded file that contains all of your certificates, other than the certificate you're importing, chaining up to your root CA. Your Amazon Web Services Private CA-hosted or on-premises root certificate is the last in the chain, and each certificate in the chain signs the one preceding.
   *
   * This parameter must be supplied when you import a subordinate CA. When you import a root CA, there is no chain.
   *
   * @public
   */
  CertificateChain?: Uint8Array | undefined;
}

/**
 * Defines a `PolicyInformation` qualifier. Amazon Web Services Private CA supports the [certification practice statement (CPS) qualifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4) defined in RFC 5280.
 *
 * @public
 */
export interface Qualifier {
  /**
   * Contains a pointer to a certification practice statement (CPS) published by the CA.
   *
   * @public
   */
  CpsUri: string | undefined;
}

/**
 * Modifies the `CertPolicyId` of a `PolicyInformation` object with a qualifier. Amazon Web Services Private CA supports the certification practice statement (CPS) qualifier.
 *
 * @public
 */
export interface PolicyQualifierInfo {
  /**
   * Identifies the qualifier modifying a `CertPolicyId`.
   *
   * @public
   */
  PolicyQualifierId: PolicyQualifierId | undefined;

  /**
   * Defines the qualifier type. Amazon Web Services Private CA supports the use of a URI for a CPS qualifier in this field.
   *
   * @public
   */
  Qualifier: Qualifier | undefined;
}

/**
 * Defines the X.509 `CertificatePolicies` extension.
 *
 * @public
 */
export interface PolicyInformation {
  /**
   * Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
   *
   * @public
   */
  CertPolicyId: string | undefined;

  /**
   * Modifies the given `CertPolicyId` with a qualifier. Amazon Web Services Private CA supports the certification practice statement (CPS) qualifier.
   *
   * @public
   */
  PolicyQualifiers?: PolicyQualifierInfo[] | undefined;
}

/**
 * Specifies the X.509 extension information for a certificate.
 *
 * Extensions present in `CustomExtensions` follow the `ApiPassthrough` [template rules](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations).
 *
 * @public
 */
export interface CustomExtension {
  /**
   * Specifies the object identifier (OID) of the X.509 extension. For more information, see the [Global OID reference database.](https://oidref.com/2.5.29)
   *
   * @public
   */
  ObjectIdentifier: string | undefined;

  /**
   * Specifies the base64-encoded value of the X.509 extension.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * Specifies the critical flag of the X.509 extension.
   *
   * @public
   */
  Critical?: boolean | undefined;
}

/**
 * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the `KeyUsage` extension.
 *
 * @public
 */
export interface ExtendedKeyUsage {
  /**
   * Specifies a standard `ExtendedKeyUsage` as defined as in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12).
   *
   * @public
   */
  ExtendedKeyUsageType?: ExtendedKeyUsageType | undefined;

  /**
   * Specifies a custom `ExtendedKeyUsage` with an object identifier (OID).
   *
   * @public
   */
  ExtendedKeyUsageObjectIdentifier?: string | undefined;
}

/**
 * Contains X.509 extension information for a certificate.
 *
 * @public
 */
export interface Extensions {
  /**
   * Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
   *
   * In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.
   *
   * @public
   */
  CertificatePolicies?: PolicyInformation[] | undefined;

  /**
   * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the `KeyUsage` extension.
   *
   * @public
   */
  ExtendedKeyUsage?: ExtendedKeyUsage[] | undefined;

  /**
   * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
   *
   * @public
   */
  KeyUsage?: KeyUsage | undefined;

  /**
   * The subject alternative name extension allows identities to be bound to the subject of the certificate. These identities may be included in addition to or in place of the identity in the subject field of the certificate.
   *
   * @public
   */
  SubjectAlternativeNames?: GeneralName[] | undefined;

  /**
   * Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the [Global OID reference database.](https://oidref.com/2.5.29)
   *
   * @public
   */
  CustomExtensions?: CustomExtension[] | undefined;
}

/**
 * Contains X.509 certificate information to be placed in an issued certificate. An `APIPassthrough` or `APICSRPassthrough` template variant must be selected, or else this parameter is ignored.
 *
 * If conflicting or duplicate certificate information is supplied from other sources, Amazon Web Services Private CA applies [order of operation rules](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations) to determine what information is used.
 *
 * @public
 */
export interface ApiPassthrough {
  /**
   * Specifies X.509 extension information for a certificate.
   *
   * @public
   */
  Extensions?: Extensions | undefined;

  /**
   * Contains information about the certificate subject. The `Subject` field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The `Subject`must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
   *
   * @public
   */
  Subject?: ASN1Subject | undefined;
}

/**
 * Validity specifies the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the validity of a certificate starts or expires, or as a span of time after issuance, stated in days, months, or years. For more information, see [Validity](https://tools.ietf.org/html/rfc5280#section-4.1.2.5) in RFC 5280.
 *
 * Amazon Web Services Private CA API consumes the `Validity` data type differently in two distinct parameters of the `IssueCertificate` action. The required parameter `IssueCertificate`:`Validity` specifies the end of a certificate's validity period. The optional parameter `IssueCertificate`:`ValidityNotBefore` specifies a customized starting time for the validity period.
 *
 * @public
 */
export interface Validity {
  /**
   * A long integer interpreted according to the value of `Type`, below.
   *
   * @public
   */
  Value: number | undefined;

  /**
   * Determines how *Amazon Web Services Private CA* interprets the `Value` parameter, an integer. Supported validity types include those listed below. Type definitions with values include a sample input value and the resulting output.
   *
   * `END_DATE`: The specific date and time when the certificate will expire, expressed using UTCTime (YYMMDDHHMMSS) or GeneralizedTime (YYYYMMDDHHMMSS) format. When UTCTime is used, if the year field (YY) is greater than or equal to 50, the year is interpreted as 19YY. If the year field is less than 50, the year is interpreted as 20YY.
   *
   * - Sample input value: 491231235959 (UTCTime format)
   * - Output expiration date/time: 12/31/2049 23:59:59
   *
   * `ABSOLUTE`: The specific date and time when the validity of a certificate will start or expire, expressed in seconds since the Unix Epoch.
   *
   * - Sample input value: 2524608000
   * - Output expiration date/time: 01/01/2050 00:00:00
   *
   * `DAYS`, `MONTHS`, `YEARS`: The relative time from the moment of issuance until the certificate will expire, expressed in days, months, or years.
   *
   * Example if `DAYS`, issued on 10/12/2020 at 12:34:54 UTC:
   *
   * - Sample input value: 90
   * - Output expiration date: 01/10/2020 12:34:54 UTC
   *
   * The minimum validity duration for a certificate using relative time (`DAYS`) is one day. The minimum validity for a certificate using absolute time (`ABSOLUTE` or `END_DATE`) is one second.
   *
   * @public
   */
  Type: ValidityPeriodType | undefined;
}

/**
 * @public
 */
export interface IssueCertificateRequest {
  /**
   * Specifies X.509 certificate information to be included in the issued certificate. An `APIPassthrough` or `APICSRPassthrough` template variant must be selected, or else this parameter is ignored. For more information about using these templates, see [Understanding Certificate Templates](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html).
   *
   * If conflicting or duplicate certificate information is supplied during certificate issuance, Amazon Web Services Private CA applies [order of operation rules](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations) to determine what information is used.
   *
   * @public
   */
  ApiPassthrough?: ApiPassthrough | undefined;

  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html). This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * The certificate signing request (CSR) for the certificate you want to issue. As an example, you can use the following OpenSSL command to create the CSR and a 2048 bit RSA private key.
   *
   * `openssl req -new -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr`
   *
   * If you have a configuration file, you can then use the following OpenSSL command. The `usr_cert` block in the configuration file contains your X509 version 3 extensions.
   *
   * `openssl req -new -config openssl_rsa.cnf -extensions usr_cert -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr`
   *
   * Note: A CSR must provide either a *subject name* or a *subject alternative name* or the request will be rejected.
   *
   * @public
   */
  Csr: Uint8Array | undefined;

  /**
   * The name of the algorithm that will be used to sign the certificate to be issued.
   *
   * This parameter should not be confused with the `SigningAlgorithm` parameter used to sign a CSR in the `CreateCertificateAuthority` action.
   *
   * > **Note:** The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.
   *
   * @public
   */
  SigningAlgorithm: SigningAlgorithm | undefined;

  /**
   * Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, Amazon Web Services Private CA defaults to the `EndEntityCertificate/V1` template. For CA certificates, you should choose the shortest path length that meets your needs. The path length is indicated by the PathLen*N* portion of the ARN, where *N* is the [CA depth](https://docs.aws.amazon.com/privateca/latest/userguide/PcaTerms.html#terms-cadepth).
   *
   * Note: The CA depth configured on a subordinate CA certificate must not exceed the limit set by its parents in the CA hierarchy.
   *
   * For a list of `TemplateArn` values supported by Amazon Web Services Private CA, see [Understanding Certificate Templates](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html).
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * Information describing the end of the validity period of the certificate. This parameter sets the “Not After” date for the certificate.
   *
   * Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in days, months, or years. For more information, see [Validity](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.5) in RFC 5280.
   *
   * This value is unaffected when `ValidityNotBefore` is also specified. For example, if `Validity` is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the `ValidityNotBefore` value.
   *
   * The end of the validity period configured on a certificate must not exceed the limit set on its parents in the CA hierarchy.
   *
   * @public
   */
  Validity: Validity | undefined;

  /**
   * Information describing the start of the validity period of the certificate. This parameter sets the “Not Before" date for the certificate.
   *
   * By default, when issuing a certificate, Amazon Web Services Private CA sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The `ValidityNotBefore` parameter can be used to customize the “Not Before” value.
   *
   * Unlike the `Validity` parameter, the `ValidityNotBefore` parameter is optional.
   *
   * The `ValidityNotBefore` value is expressed as an explicit date and time, using the `Validity` type value `ABSOLUTE`. For more information, see [Validity](https://docs.aws.amazon.com/privateca/latest/APIReference/API_Validity.html) in this API reference and [Validity](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.5) in RFC 5280.
   *
   * @public
   */
  ValidityNotBefore?: Validity | undefined;

  /**
   * Alphanumeric string that can be used to distinguish between calls to the **IssueCertificate** action. Idempotency tokens for **IssueCertificate** time out after five minutes. Therefore, if you call **IssueCertificate** multiple times with the same idempotency token within five minutes, Amazon Web Services Private CA recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, Amazon Web Services Private CA recognizes that you are requesting multiple certificates.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface IssueCertificateResponse {
  /**
   * The Amazon Resource Name (ARN) of the issued certificate and the certificate serial number. This is of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012/certificate/286535153982981100925020015808220737245`
   *
   * @public
   */
  CertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificateAuthoritiesRequest {
  /**
   * Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the `NextToken` element is sent in the response. Use this `NextToken` value in a subsequent request to retrieve additional items.
   *
   * Although the maximum value is 1000, the action only returns a maximum of 100 items.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the `NextToken` parameter from the response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Use this parameter to filter the returned set of certificate authorities based on their owner. The default is SELF.
   *
   * @public
   */
  ResourceOwner?: ResourceOwner | undefined;
}

/**
 * @public
 */
export interface ListCertificateAuthoritiesResponse {
  /**
   * When the list is truncated, this value is present and should be used for the `NextToken` parameter in a subsequent pagination request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Summary information about each certificate authority you have created.
   *
   * @public
   */
  CertificateAuthorities?: CertificateAuthority[] | undefined;
}

/**
 * @public
 */
export interface ListPermissionsRequest {
  /**
   * When paginating results, use this parameter to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the **NextToken** element is sent in the response. Use this **NextToken** value in a subsequent request to retrieve additional items.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * When paginating results, use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of **NextToken** from the response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the private CA to inspect. You can find the ARN by calling the [ListCertificateAuthorities](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html) action. This must be of the form: `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012` You can get a private CA's ARN by running the [ListCertificateAuthorities](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html) action.
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * Permissions designate which private CA actions can be performed by an Amazon Web Services service or entity. In order for ACM to automatically renew private certificates, you must give the ACM service principal all available permissions (`IssueCertificate`, `GetCertificate`, and `ListPermissions`). Permissions can be assigned with the [CreatePermission](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html) action, removed with the [DeletePermission](https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html) action, and listed with the [ListPermissions](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html) action.
 *
 * @public
 */
export interface Permission {
  /**
   * The Amazon Resource Number (ARN) of the private CA from which the permission was issued.
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * The time at which the permission was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The Amazon Web Services service or entity that holds the permission. At this time, the only valid principal is `acm.amazonaws.com`.
   *
   * @public
   */
  Principal?: string | undefined;

  /**
   * The ID of the account that assigned the permission.
   *
   * @public
   */
  SourceAccount?: string | undefined;

  /**
   * The private CA actions that can be performed by the designated Amazon Web Services service.
   *
   * @public
   */
  Actions?: ActionType[] | undefined;

  /**
   * The name of the policy that is associated with the permission.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface ListPermissionsResponse {
  /**
   * When the list is truncated, this value is present and should be used for the **NextToken** parameter in a subsequent pagination request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Summary information about each permission assigned by the specified private CA, including the action enabled, the policy provided, and the time of creation.
   *
   * @public
   */
  Permissions?: Permission[] | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the **NextToken** element is sent in the response. Use this **NextToken** value in a subsequent request to retrieve additional items.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of **NextToken** from the response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that was returned when you called the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) action. This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * When the list is truncated, this value is present and should be used for the **NextToken** parameter in a subsequent pagination request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The tags associated with your private CA.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutPolicyRequest {
  /**
   * The Amazon Resource Number (ARN) of the private CA to associate with the policy. The ARN of the CA can be found by calling the [ListCertificateAuthorities](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html) action.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The path and file name of a JSON-formatted IAM policy to attach to the specified private CA resource. If this policy does not contain all required statements or if it includes any statement that is not allowed, the `PutPolicy` action returns an `InvalidPolicyException`. For information about IAM policy and statement structure, see [Overview of JSON Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json).
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface RestoreCertificateAuthorityRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) action. This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;
}

/**
 * @public
 */
export interface RevokeCertificateRequest {
  /**
   * Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * Serial number of the certificate to be revoked. This must be in hexadecimal format. You can retrieve the serial number by calling [GetCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html) with the Amazon Resource Name (ARN) of the certificate you want and the ARN of your private CA. The **GetCertificate** action retrieves the certificate in the PEM format. You can use the following OpenSSL command to list the certificate in text format and copy the hexadecimal serial number.
   *
   * `openssl x509 -in file_path -text -noout`
   *
   * You can also copy the serial number from the console or use the [DescribeCertificate](https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html) action in the *Certificate Manager API Reference*.
   *
   * @public
   */
  CertificateSerial: string | undefined;

  /**
   * Specifies why you revoked the certificate.
   *
   * @public
   */
  RevocationReason: RevocationReason | undefined;
}

/**
 * @public
 */
export interface TagCertificateAuthorityRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html). This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * List of tags to be associated with the CA.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagCertificateAuthorityRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html). This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * List of tags to be removed from the CA.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateAuthorityRequest {
  /**
   * Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * Contains information to enable support for Online Certificate Status Protocol (OCSP), certificate revocation list (CRL), both protocols, or neither. If you don't supply this parameter, existing capibilites remain unchanged. For more information, see the [OcspConfiguration](https://docs.aws.amazon.com/privateca/latest/APIReference/API_OcspConfiguration.html) and [CrlConfiguration](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CrlConfiguration.html) types.
   *
   * The following requirements apply to revocation configurations.
   *
   * - A configuration disabling CRLs or OCSP must contain only the `Enabled=False` parameter, and will fail if other parameters such as `CustomCname` or `ExpirationInDays` are included.
   * - In a CRL configuration, the `S3BucketName` parameter must conform to [Amazon S3 bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
   * - A configuration containing a custom Canonical Name (CNAME) parameter for CRLs or OCSP must conform to [RFC2396](https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in a CNAME.
   * - In a CRL or OCSP configuration, the value of a CNAME parameter must not include a protocol prefix such as "http://" or "https://".
   *
   * > **Important:** If you update the `S3BucketName` of [CrlConfiguration](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CrlConfiguration.html), you can break revocation for existing certificates. In other words, if you call [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) to update the CRL configuration's S3 bucket name, Amazon Web Services Private CA only writes CRLs to the new S3 bucket. Certificates issued prior to this point will have the old S3 bucket name in your CRL Distribution Point (CDP) extension, essentially breaking revocation. If you must update the S3 bucket, you'll need to reissue old certificates to keep the revocation working. Alternatively, you can use a [CustomCname](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CrlConfiguration.html#privateca-Type-CrlConfiguration-CustomCname) in your CRL configuration if you might need to change the S3 bucket name in the future.
   *
   * @public
   */
  RevocationConfiguration?: RevocationConfiguration | undefined;

  /**
   * Status of your private CA.
   *
   * @public
   */
  Status?: CertificateAuthorityStatus | undefined;
}

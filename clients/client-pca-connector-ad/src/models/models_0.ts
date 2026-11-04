// smithy-typescript generated code
import type {
  AccessRight,
  ApplicationPolicyType,
  ClientCompatibilityV2,
  ClientCompatibilityV3,
  ClientCompatibilityV4,
  ConnectorStatus,
  ConnectorStatusReason,
  DirectoryRegistrationStatus,
  DirectoryRegistrationStatusReason,
  HashAlgorithm,
  IpAddressType,
  KeySpec,
  KeyUsagePropertyType,
  PrivateKeyAlgorithm,
  ServicePrincipalNameStatus,
  ServicePrincipalNameStatusReason,
  TemplateStatus,
  ValidityPeriodType,
} from "./enums";

/**
 * Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a template.
 *
 * @public
 */
export interface AccessRights {
  /**
   * Allow or deny an Active Directory group from enrolling certificates issued against a template.
   *
   * @public
   */
  Enroll?: AccessRight | undefined;

  /**
   * Allow or deny an Active Directory group from autoenrolling certificates issued against a template. The Active Directory group must be allowed to enroll to allow autoenrollment
   *
   * @public
   */
  AutoEnroll?: AccessRight | undefined;
}

/**
 * An access control entry allows or denies Active Directory groups based on their security identifiers (SIDs) from enrolling and/or autoenrolling with the template.
 *
 * @public
 */
export interface AccessControlEntry {
  /**
   * Name of the Active Directory group. This name does not need to match the group name in Active Directory.
   *
   * @public
   */
  GroupDisplayName?: string | undefined;

  /**
   * Security identifier (SID) of the group object from Active Directory. The SID starts with "S-".
   *
   * @public
   */
  GroupSecurityIdentifier?: string | undefined;

  /**
   * Permissions to allow or deny an Active Directory group to enroll or autoenroll certificates issued against a template.
   *
   * @public
   */
  AccessRights?: AccessRights | undefined;

  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * The date and time that the Access Control Entry was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the Access Control Entry was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Summary of group access control entries that allow or deny Active Directory groups based on their security identifiers (SIDs) from enrolling and/or autofenrolling with the template.
 *
 * @public
 */
export interface AccessControlEntrySummary {
  /**
   * Name of the Active Directory group. This name does not need to match the group name in Active Directory.
   *
   * @public
   */
  GroupDisplayName?: string | undefined;

  /**
   * Security identifier (SID) of the group object from Active Directory. The SID starts with "S-".
   *
   * @public
   */
  GroupSecurityIdentifier?: string | undefined;

  /**
   * Allow or deny an Active Directory group from enrolling and autoenrolling certificates issued against a template.
   *
   * @public
   */
  AccessRights?: AccessRights | undefined;

  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * The date and time that the Access Control Entry was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the Access Control Entry was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Application policies describe what the certificate can be used for.
 *
 * @public
 */
export type ApplicationPolicy =
  | ApplicationPolicy.PolicyObjectIdentifierMember
  | ApplicationPolicy.PolicyTypeMember
  | ApplicationPolicy.$UnknownMember;

/**
 * @public
 */
export namespace ApplicationPolicy {
  /**
   * The type of application policy
   *
   * @public
   */
  export interface PolicyTypeMember {
    PolicyType: ApplicationPolicyType;
    PolicyObjectIdentifier?: never;
    $unknown?: never;
  }

  /**
   * The object identifier (OID) of an application policy.
   *
   * @public
   */
  export interface PolicyObjectIdentifierMember {
    PolicyType?: never;
    PolicyObjectIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PolicyType?: never;
    PolicyObjectIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PolicyType: (value: ApplicationPolicyType) => T;
    PolicyObjectIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Application policies describe what the certificate can be used for.
 *
 * @public
 */
export interface ApplicationPolicies {
  /**
   * Marks the application policy extension as critical.
   *
   * @public
   */
  Critical?: boolean | undefined;

  /**
   * Application policies describe what the certificate can be used for.
   *
   * @public
   */
  Policies: ApplicationPolicy[] | undefined;
}

/**
 * Information describing the end of the validity period of the certificate. This parameter sets the “Not After” date for the certificate. Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in hours, days, months, or years. For more information, see Validity in RFC 5280. This value is unaffected when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the ValidityNotBefore value.
 *
 * @public
 */
export interface ValidityPeriod {
  /**
   * The unit of time. You can select hours, days, weeks, months, and years.
   *
   * @public
   */
  PeriodType: ValidityPeriodType | undefined;

  /**
   * The numeric value for the validity period.
   *
   * @public
   */
  Period: number | undefined;
}

/**
 * Information describing the end of the validity period of the certificate. This parameter sets the “Not After” date for the certificate. Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in days, months, or years. For more information, see Validity in RFC 5280. This value is unaffected when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the ValidityNotBefore value.
 *
 * @public
 */
export interface CertificateValidity {
  /**
   * Information describing the end of the validity period of the certificate. This parameter sets the “Not After” date for the certificate. Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in days, months, or years. For more information, see Validity in RFC 5280. This value is unaffected when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the ValidityNotBefore value.
   *
   * @public
   */
  ValidityPeriod: ValidityPeriod | undefined;

  /**
   * Renewal period is the period of time before certificate expiration when a new certificate will be requested.
   *
   * @public
   */
  RenewalPeriod: ValidityPeriod | undefined;
}

/**
 * Information about your VPC and security groups used with the connector.
 *
 * @public
 */
export interface VpcInformation {
  /**
   * The VPC IP address type.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The security groups used with the connector. You can use a maximum of 4 security groups with a connector.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * Amazon Web Services Private CA Connector for Active Directory is a service that links your Active Directory with Amazon Web Services Private CA. The connector brokers the exchange of certificates from Amazon Web Services Private CA to domain-joined users and machines managed with Active Directory.
 *
 * @public
 */
export interface Connector {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate authority being used.
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * Certificate enrollment endpoint for Active Directory domain-joined objects reach out to when requesting certificates.
   *
   * @public
   */
  CertificateEnrollmentPolicyServerEndpoint?: string | undefined;

  /**
   * The identifier of the Active Directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * Information of the VPC and security group(s) used with the connector.
   *
   * @public
   */
  VpcInformation?: VpcInformation | undefined;

  /**
   * Status of the connector. Status can be creating, active, deleting, or failed.
   *
   * @public
   */
  Status?: ConnectorStatus | undefined;

  /**
   * Additional information about the connector status if the status is failed.
   *
   * @public
   */
  StatusReason?: ConnectorStatusReason | undefined;

  /**
   * The date and time that the connector was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the connector was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Summary description of the Amazon Web Services Private CA AD connectors belonging to an Amazon Web Services account.
 *
 * @public
 */
export interface ConnectorSummary {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate authority being used.
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;

  /**
   * Certificate enrollment endpoint for Active Directory domain-joined objects to request certificates.
   *
   * @public
   */
  CertificateEnrollmentPolicyServerEndpoint?: string | undefined;

  /**
   * The identifier of the Active Directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * Information of the VPC and security group(s) used with the connector.
   *
   * @public
   */
  VpcInformation?: VpcInformation | undefined;

  /**
   * Status of the connector. Status can be creating, active, deleting, or failed.
   *
   * @public
   */
  Status?: ConnectorStatus | undefined;

  /**
   * Additional information about the connector status if the status is failed.
   *
   * @public
   */
  StatusReason?: ConnectorStatusReason | undefined;

  /**
   * The date and time that the connector was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the connector was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * The identifier of the Active Directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the certificate authority being used.
   *
   * @public
   */
  CertificateAuthorityArn: string | undefined;

  /**
   * Information about your VPC and security groups used with the connector.
   *
   * @public
   */
  VpcInformation: VpcInformation | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Metadata assigned to a connector consisting of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * If successful, the Amazon Resource Name (ARN) of the connector for Active Directory.
   *
   * @public
   */
  ConnectorArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorResponse {
  /**
   * A structure that contains information about your connector.
   *
   * @public
   */
  Connector?: Connector | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the `NextToken` element is sent in the response. Use this `NextToken` value in a subsequent request to retrieve additional items.
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
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * Summary information about each connector you have created.
   *
   * @public
   */
  Connectors?: ConnectorSummary[] | undefined;

  /**
   * Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the NextToken parameter from the response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryRegistrationRequest {
  /**
   * The identifier of the Active Directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Metadata assigned to a directory registration consisting of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDirectoryRegistrationResponse {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html).
   *
   * @public
   */
  DirectoryRegistrationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateServicePrincipalNameRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html).
   *
   * @public
   */
  DirectoryRegistrationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  ConnectorArn: string | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Template configurations for v2 template schema.
 *
 * @public
 */
export interface EnrollmentFlagsV2 {
  /**
   * Include symmetric algorithms allowed by the subject.
   *
   * @public
   */
  IncludeSymmetricAlgorithms?: boolean | undefined;

  /**
   * Require user interaction when the subject is enrolled and the private key associated with the certificate is used.
   *
   * @public
   */
  UserInteractionRequired?: boolean | undefined;

  /**
   * Delete expired or revoked certificates instead of archiving them.
   *
   * @public
   */
  RemoveInvalidCertificateFromPersonalStore?: boolean | undefined;

  /**
   * This flag instructs the CA to not include the security extension szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections 2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows Kerberos elevation-of-privilege vulnerability.
   *
   * @public
   */
  NoSecurityExtension?: boolean | undefined;

  /**
   * Allow renewal using the same key.
   *
   * @public
   */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean | undefined;
}

/**
 * The key usage flags represent the purpose (e.g., encipherment, signature) of the key contained in the certificate.
 *
 * @public
 */
export interface KeyUsageFlags {
  /**
   * The digitalSignature is asserted when the subject public key is used for verifying digital signatures.
   *
   * @public
   */
  DigitalSignature?: boolean | undefined;

  /**
   * NonRepudiation is asserted when the subject public key is used to verify digital signatures.
   *
   * @public
   */
  NonRepudiation?: boolean | undefined;

  /**
   * KeyEncipherment is asserted when the subject public key is used for enciphering private or secret keys, i.e., for key transport.
   *
   * @public
   */
  KeyEncipherment?: boolean | undefined;

  /**
   * DataEncipherment is asserted when the subject public key is used for directly enciphering raw user data without the use of an intermediate symmetric cipher.
   *
   * @public
   */
  DataEncipherment?: boolean | undefined;

  /**
   * KeyAgreement is asserted when the subject public key is used for key agreement.
   *
   * @public
   */
  KeyAgreement?: boolean | undefined;
}

/**
 * The key usage extension defines the purpose (e.g., encipherment, signature) of the key contained in the certificate.
 *
 * @public
 */
export interface KeyUsage {
  /**
   * Sets the key usage extension to critical.
   *
   * @public
   */
  Critical?: boolean | undefined;

  /**
   * The key usage flags represent the purpose (e.g., encipherment, signature) of the key contained in the certificate.
   *
   * @public
   */
  UsageFlags: KeyUsageFlags | undefined;
}

/**
 * Certificate extensions for v2 template schema
 *
 * @public
 */
export interface ExtensionsV2 {
  /**
   * The key usage extension defines the purpose (e.g., encipherment, signature, certificate signing) of the key contained in the certificate.
   *
   * @public
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * Application policies specify what the certificate is used for and its purpose.
   *
   * @public
   */
  ApplicationPolicies?: ApplicationPolicies | undefined;
}

/**
 * General flags for v2 template schema that defines if the template is for a machine or a user and if the template can be issued using autoenrollment.
 *
 * @public
 */
export interface GeneralFlagsV2 {
  /**
   * Allows certificate issuance using autoenrollment. Set to TRUE to allow autoenrollment.
   *
   * @public
   */
  AutoEnrollment?: boolean | undefined;

  /**
   * Defines if the template is for machines or users. Set to TRUE if the template is for machines. Set to FALSE if the template is for users.
   *
   * @public
   */
  MachineType?: boolean | undefined;
}

/**
 * Defines the attributes of the private key.
 *
 * @public
 */
export interface PrivateKeyAttributesV2 {
  /**
   * Set the minimum key length of the private key.
   *
   * @public
   */
  MinimalKeyLength: number | undefined;

  /**
   * Defines the purpose of the private key. Set it to "KEY_EXCHANGE" or "SIGNATURE" value.
   *
   * @public
   */
  KeySpec: KeySpec | undefined;

  /**
   * Defines the cryptographic providers used to generate the private key.
   *
   * @public
   */
  CryptoProviders?: string[] | undefined;
}

/**
 * Private key flags for v2 templates specify the client compatibility, if the private key can be exported, and if user input is required when using a private key.
 *
 * @public
 */
export interface PrivateKeyFlagsV2 {
  /**
   * Allows the private key to be exported.
   *
   * @public
   */
  ExportableKey?: boolean | undefined;

  /**
   * Require user input when using the private key for enrollment.
   *
   * @public
   */
  StrongKeyProtectionRequired?: boolean | undefined;

  /**
   * Defines the minimum client compatibility.
   *
   * @public
   */
  ClientVersion: ClientCompatibilityV2 | undefined;
}

/**
 * Information to include in the subject name and alternate subject name of the certificate. The subject name can be common name, directory path, DNS as common name, or left blank. You can optionally include email to the subject name for user templates. If you leave the subject name blank then you must set a subject alternate name. The subject alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email, service principal name (SPN), and user principal name (UPN). You can leave the SAN blank. If you leave the SAN blank, then you must set a subject name.
 *
 * @public
 */
export interface SubjectNameFlagsV2 {
  /**
   * Include the domain DNS in the subject alternate name.
   *
   * @public
   */
  SanRequireDomainDns?: boolean | undefined;

  /**
   * Include the service principal name (SPN) in the subject alternate name.
   *
   * @public
   */
  SanRequireSpn?: boolean | undefined;

  /**
   * Include the globally unique identifier (GUID) in the subject alternate name.
   *
   * @public
   */
  SanRequireDirectoryGuid?: boolean | undefined;

  /**
   * Include the user principal name (UPN) in the subject alternate name.
   *
   * @public
   */
  SanRequireUpn?: boolean | undefined;

  /**
   * Include the subject's email in the subject alternate name.
   *
   * @public
   */
  SanRequireEmail?: boolean | undefined;

  /**
   * Include the DNS in the subject alternate name.
   *
   * @public
   */
  SanRequireDns?: boolean | undefined;

  /**
   * Include the DNS as common name in the subject name.
   *
   * @public
   */
  RequireDnsAsCn?: boolean | undefined;

  /**
   * Include the subject's email in the subject name.
   *
   * @public
   */
  RequireEmail?: boolean | undefined;

  /**
   * Include the common name in the subject name.
   *
   * @public
   */
  RequireCommonName?: boolean | undefined;

  /**
   * Include the directory path in the subject name.
   *
   * @public
   */
  RequireDirectoryPath?: boolean | undefined;
}

/**
 * v2 template schema that uses Legacy Cryptographic Providers.
 *
 * @public
 */
export interface TemplateV2 {
  /**
   * Certificate validity describes the validity and renewal periods of a certificate.
   *
   * @public
   */
  CertificateValidity: CertificateValidity | undefined;

  /**
   * List of templates in Active Directory that are superseded by this template.
   *
   * @public
   */
  SupersededTemplates?: string[] | undefined;

  /**
   * Private key attributes allow you to specify the minimal key length, key spec, and cryptographic providers for the private key of a certificate for v2 templates. V2 templates allow you to use Legacy Cryptographic Service Providers.
   *
   * @public
   */
  PrivateKeyAttributes: PrivateKeyAttributesV2 | undefined;

  /**
   * Private key flags for v2 templates specify the client compatibility, if the private key can be exported, and if user input is required when using a private key.
   *
   * @public
   */
  PrivateKeyFlags: PrivateKeyFlagsV2 | undefined;

  /**
   * Enrollment flags describe the enrollment settings for certificates such as using the existing private key and deleting expired or revoked certificates.
   *
   * @public
   */
  EnrollmentFlags: EnrollmentFlagsV2 | undefined;

  /**
   * Subject name flags describe the subject name and subject alternate name that is included in a certificate.
   *
   * @public
   */
  SubjectNameFlags: SubjectNameFlagsV2 | undefined;

  /**
   * General flags describe whether the template is used for computers or users and if the template can be used with autoenrollment.
   *
   * @public
   */
  GeneralFlags: GeneralFlagsV2 | undefined;

  /**
   * Extensions describe the key usage extensions and application policies for a template.
   *
   * @public
   */
  Extensions: ExtensionsV2 | undefined;
}

/**
 * Template configurations for v3 template schema.
 *
 * @public
 */
export interface EnrollmentFlagsV3 {
  /**
   * Include symmetric algorithms allowed by the subject.
   *
   * @public
   */
  IncludeSymmetricAlgorithms?: boolean | undefined;

  /**
   * Require user interaction when the subject is enrolled and the private key associated with the certificate is used.
   *
   * @public
   */
  UserInteractionRequired?: boolean | undefined;

  /**
   * Delete expired or revoked certificates instead of archiving them.
   *
   * @public
   */
  RemoveInvalidCertificateFromPersonalStore?: boolean | undefined;

  /**
   * This flag instructs the CA to not include the security extension szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections 2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows Kerberos elevation-of-privilege vulnerability.
   *
   * @public
   */
  NoSecurityExtension?: boolean | undefined;

  /**
   * Allow renewal using the same key.
   *
   * @public
   */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean | undefined;
}

/**
 * Certificate extensions for v3 template schema
 *
 * @public
 */
export interface ExtensionsV3 {
  /**
   * The key usage extension defines the purpose (e.g., encipherment, signature, certificate signing) of the key contained in the certificate.
   *
   * @public
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * Application policies specify what the certificate is used for and its purpose.
   *
   * @public
   */
  ApplicationPolicies?: ApplicationPolicies | undefined;
}

/**
 * General flags for v3 template schema that defines if the template is for a machine or a user and if the template can be issued using autoenrollment.
 *
 * @public
 */
export interface GeneralFlagsV3 {
  /**
   * Allows certificate issuance using autoenrollment. Set to TRUE to allow autoenrollment.
   *
   * @public
   */
  AutoEnrollment?: boolean | undefined;

  /**
   * Defines if the template is for machines or users. Set to TRUE if the template is for machines. Set to FALSE if the template is for users
   *
   * @public
   */
  MachineType?: boolean | undefined;
}

/**
 * Specifies key usage.
 *
 * @public
 */
export interface KeyUsagePropertyFlags {
  /**
   * Allows key for encryption and decryption.
   *
   * @public
   */
  Decrypt?: boolean | undefined;

  /**
   * Allows key exchange without encryption.
   *
   * @public
   */
  KeyAgreement?: boolean | undefined;

  /**
   * Allow key use for digital signature.
   *
   * @public
   */
  Sign?: boolean | undefined;
}

/**
 * The key usage property defines the purpose of the private key contained in the certificate. You can specify specific purposes using property flags or all by using property type ALL.
 *
 * @public
 */
export type KeyUsageProperty =
  | KeyUsageProperty.PropertyFlagsMember
  | KeyUsageProperty.PropertyTypeMember
  | KeyUsageProperty.$UnknownMember;

/**
 * @public
 */
export namespace KeyUsageProperty {
  /**
   * You can specify all key usages using property type ALL. You can use property type or property flags but not both.
   *
   * @public
   */
  export interface PropertyTypeMember {
    PropertyType: KeyUsagePropertyType;
    PropertyFlags?: never;
    $unknown?: never;
  }

  /**
   * You can specify key usage for encryption, key agreement, and signature. You can use property flags or property type but not both.
   *
   * @public
   */
  export interface PropertyFlagsMember {
    PropertyType?: never;
    PropertyFlags: KeyUsagePropertyFlags;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PropertyType?: never;
    PropertyFlags?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PropertyType: (value: KeyUsagePropertyType) => T;
    PropertyFlags: (value: KeyUsagePropertyFlags) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines the attributes of the private key.
 *
 * @public
 */
export interface PrivateKeyAttributesV3 {
  /**
   * Set the minimum key length of the private key.
   *
   * @public
   */
  MinimalKeyLength: number | undefined;

  /**
   * Defines the purpose of the private key. Set it to "KEY_EXCHANGE" or "SIGNATURE" value.
   *
   * @public
   */
  KeySpec: KeySpec | undefined;

  /**
   * Defines the cryptographic providers used to generate the private key.
   *
   * @public
   */
  CryptoProviders?: string[] | undefined;

  /**
   * The key usage property defines the purpose of the private key contained in the certificate. You can specify specific purposes using property flags or all by using property type ALL.
   *
   * @public
   */
  KeyUsageProperty: KeyUsageProperty | undefined;

  /**
   * Defines the algorithm used to generate the private key.
   *
   * @public
   */
  Algorithm: PrivateKeyAlgorithm | undefined;
}

/**
 * Private key flags for v3 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, and if an alternate signature algorithm should be used.
 *
 * @public
 */
export interface PrivateKeyFlagsV3 {
  /**
   * Allows the private key to be exported.
   *
   * @public
   */
  ExportableKey?: boolean | undefined;

  /**
   * Requirer user input when using the private key for enrollment.
   *
   * @public
   */
  StrongKeyProtectionRequired?: boolean | undefined;

  /**
   * Reguires the PKCS #1 v2.1 signature format for certificates. You should verify that your CA, objects, and applications can accept this signature format.
   *
   * @public
   */
  RequireAlternateSignatureAlgorithm?: boolean | undefined;

  /**
   * Defines the minimum client compatibility.
   *
   * @public
   */
  ClientVersion: ClientCompatibilityV3 | undefined;
}

/**
 * Information to include in the subject name and alternate subject name of the certificate. The subject name can be common name, directory path, DNS as common name, or left blank. You can optionally include email to the subject name for user templates. If you leave the subject name blank then you must set a subject alternate name. The subject alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email, service principal name (SPN), and user principal name (UPN). You can leave the SAN blank. If you leave the SAN blank, then you must set a subject name.
 *
 * @public
 */
export interface SubjectNameFlagsV3 {
  /**
   * Include the domain DNS in the subject alternate name.
   *
   * @public
   */
  SanRequireDomainDns?: boolean | undefined;

  /**
   * Include the service principal name (SPN) in the subject alternate name.
   *
   * @public
   */
  SanRequireSpn?: boolean | undefined;

  /**
   * Include the globally unique identifier (GUID) in the subject alternate name.
   *
   * @public
   */
  SanRequireDirectoryGuid?: boolean | undefined;

  /**
   * Include the user principal name (UPN) in the subject alternate name.
   *
   * @public
   */
  SanRequireUpn?: boolean | undefined;

  /**
   * Include the subject's email in the subject alternate name.
   *
   * @public
   */
  SanRequireEmail?: boolean | undefined;

  /**
   * Include the DNS in the subject alternate name.
   *
   * @public
   */
  SanRequireDns?: boolean | undefined;

  /**
   * Include the DNS as common name in the subject name.
   *
   * @public
   */
  RequireDnsAsCn?: boolean | undefined;

  /**
   * Include the subject's email in the subject name.
   *
   * @public
   */
  RequireEmail?: boolean | undefined;

  /**
   * Include the common name in the subject name.
   *
   * @public
   */
  RequireCommonName?: boolean | undefined;

  /**
   * Include the directory path in the subject name.
   *
   * @public
   */
  RequireDirectoryPath?: boolean | undefined;
}

/**
 * v3 template schema that uses Key Storage Providers.
 *
 * @public
 */
export interface TemplateV3 {
  /**
   * Certificate validity describes the validity and renewal periods of a certificate.
   *
   * @public
   */
  CertificateValidity: CertificateValidity | undefined;

  /**
   * List of templates in Active Directory that are superseded by this template.
   *
   * @public
   */
  SupersededTemplates?: string[] | undefined;

  /**
   * Private key attributes allow you to specify the algorithm, minimal key length, key spec, key usage, and cryptographic providers for the private key of a certificate for v3 templates. V3 templates allow you to use Key Storage Providers.
   *
   * @public
   */
  PrivateKeyAttributes: PrivateKeyAttributesV3 | undefined;

  /**
   * Private key flags for v3 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, and if an alternate signature algorithm should be used.
   *
   * @public
   */
  PrivateKeyFlags: PrivateKeyFlagsV3 | undefined;

  /**
   * Enrollment flags describe the enrollment settings for certificates such as using the existing private key and deleting expired or revoked certificates.
   *
   * @public
   */
  EnrollmentFlags: EnrollmentFlagsV3 | undefined;

  /**
   * Subject name flags describe the subject name and subject alternate name that is included in a certificate.
   *
   * @public
   */
  SubjectNameFlags: SubjectNameFlagsV3 | undefined;

  /**
   * General flags describe whether the template is used for computers or users and if the template can be used with autoenrollment.
   *
   * @public
   */
  GeneralFlags: GeneralFlagsV3 | undefined;

  /**
   * Specifies the hash algorithm used to hash the private key.
   *
   * @public
   */
  HashAlgorithm: HashAlgorithm | undefined;

  /**
   * Extensions describe the key usage extensions and application policies for a template.
   *
   * @public
   */
  Extensions: ExtensionsV3 | undefined;
}

/**
 * Template configurations for v4 template schema.
 *
 * @public
 */
export interface EnrollmentFlagsV4 {
  /**
   * Include symmetric algorithms allowed by the subject.
   *
   * @public
   */
  IncludeSymmetricAlgorithms?: boolean | undefined;

  /**
   * Require user interaction when the subject is enrolled and the private key associated with the certificate is used.
   *
   * @public
   */
  UserInteractionRequired?: boolean | undefined;

  /**
   * Delete expired or revoked certificates instead of archiving them.
   *
   * @public
   */
  RemoveInvalidCertificateFromPersonalStore?: boolean | undefined;

  /**
   * This flag instructs the CA to not include the security extension szOID_NTDS_CA_SECURITY_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in [MS-WCCE] sections 2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows Kerberos elevation-of-privilege vulnerability.
   *
   * @public
   */
  NoSecurityExtension?: boolean | undefined;

  /**
   * Allow renewal using the same key.
   *
   * @public
   */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean | undefined;
}

/**
 * Certificate extensions for v4 template schema
 *
 * @public
 */
export interface ExtensionsV4 {
  /**
   * The key usage extension defines the purpose (e.g., encipherment, signature) of the key contained in the certificate.
   *
   * @public
   */
  KeyUsage: KeyUsage | undefined;

  /**
   * Application policies specify what the certificate is used for and its purpose.
   *
   * @public
   */
  ApplicationPolicies?: ApplicationPolicies | undefined;
}

/**
 * General flags for v4 template schema that defines if the template is for a machine or a user and if the template can be issued using autoenrollment.
 *
 * @public
 */
export interface GeneralFlagsV4 {
  /**
   * Allows certificate issuance using autoenrollment. Set to TRUE to allow autoenrollment.
   *
   * @public
   */
  AutoEnrollment?: boolean | undefined;

  /**
   * Defines if the template is for machines or users. Set to TRUE if the template is for machines. Set to FALSE if the template is for users
   *
   * @public
   */
  MachineType?: boolean | undefined;
}

/**
 * Defines the attributes of the private key.
 *
 * @public
 */
export interface PrivateKeyAttributesV4 {
  /**
   * Set the minimum key length of the private key.
   *
   * @public
   */
  MinimalKeyLength: number | undefined;

  /**
   * Defines the purpose of the private key. Set it to "KEY_EXCHANGE" or "SIGNATURE" value.
   *
   * @public
   */
  KeySpec: KeySpec | undefined;

  /**
   * Defines the cryptographic providers used to generate the private key.
   *
   * @public
   */
  CryptoProviders?: string[] | undefined;

  /**
   * The key usage property defines the purpose of the private key contained in the certificate. You can specify specific purposes using property flags or all by using property type ALL.
   *
   * @public
   */
  KeyUsageProperty?: KeyUsageProperty | undefined;

  /**
   * Defines the algorithm used to generate the private key.
   *
   * @public
   */
  Algorithm?: PrivateKeyAlgorithm | undefined;
}

/**
 * Private key flags for v4 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, if an alternate signature algorithm should be used, and if certificates are renewed using the same private key.
 *
 * @public
 */
export interface PrivateKeyFlagsV4 {
  /**
   * Allows the private key to be exported.
   *
   * @public
   */
  ExportableKey?: boolean | undefined;

  /**
   * Require user input when using the private key for enrollment.
   *
   * @public
   */
  StrongKeyProtectionRequired?: boolean | undefined;

  /**
   * Requires the PKCS #1 v2.1 signature format for certificates. You should verify that your CA, objects, and applications can accept this signature format.
   *
   * @public
   */
  RequireAlternateSignatureAlgorithm?: boolean | undefined;

  /**
   * Renew certificate using the same private key.
   *
   * @public
   */
  RequireSameKeyRenewal?: boolean | undefined;

  /**
   * Specifies the cryptographic service provider category used to generate private keys. Set to TRUE to use Legacy Cryptographic Service Providers and FALSE to use Key Storage Providers.
   *
   * @public
   */
  UseLegacyProvider?: boolean | undefined;

  /**
   * Defines the minimum client compatibility.
   *
   * @public
   */
  ClientVersion: ClientCompatibilityV4 | undefined;
}

/**
 * Information to include in the subject name and alternate subject name of the certificate. The subject name can be common name, directory path, DNS as common name, or left blank. You can optionally include email to the subject name for user templates. If you leave the subject name blank then you must set a subject alternate name. The subject alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email, service principal name (SPN), and user principal name (UPN). You can leave the SAN blank. If you leave the SAN blank, then you must set a subject name.
 *
 * @public
 */
export interface SubjectNameFlagsV4 {
  /**
   * Include the domain DNS in the subject alternate name.
   *
   * @public
   */
  SanRequireDomainDns?: boolean | undefined;

  /**
   * Include the service principal name (SPN) in the subject alternate name.
   *
   * @public
   */
  SanRequireSpn?: boolean | undefined;

  /**
   * Include the globally unique identifier (GUID) in the subject alternate name.
   *
   * @public
   */
  SanRequireDirectoryGuid?: boolean | undefined;

  /**
   * Include the user principal name (UPN) in the subject alternate name.
   *
   * @public
   */
  SanRequireUpn?: boolean | undefined;

  /**
   * Include the subject's email in the subject alternate name.
   *
   * @public
   */
  SanRequireEmail?: boolean | undefined;

  /**
   * Include the DNS in the subject alternate name.
   *
   * @public
   */
  SanRequireDns?: boolean | undefined;

  /**
   * Include the DNS as common name in the subject name.
   *
   * @public
   */
  RequireDnsAsCn?: boolean | undefined;

  /**
   * Include the subject's email in the subject name.
   *
   * @public
   */
  RequireEmail?: boolean | undefined;

  /**
   * Include the common name in the subject name.
   *
   * @public
   */
  RequireCommonName?: boolean | undefined;

  /**
   * Include the directory path in the subject name.
   *
   * @public
   */
  RequireDirectoryPath?: boolean | undefined;
}

/**
 * v4 template schema that can use either Legacy Cryptographic Providers or Key Storage Providers.
 *
 * @public
 */
export interface TemplateV4 {
  /**
   * Certificate validity describes the validity and renewal periods of a certificate.
   *
   * @public
   */
  CertificateValidity: CertificateValidity | undefined;

  /**
   * List of templates in Active Directory that are superseded by this template.
   *
   * @public
   */
  SupersededTemplates?: string[] | undefined;

  /**
   * Private key attributes allow you to specify the minimal key length, key spec, key usage, and cryptographic providers for the private key of a certificate for v4 templates. V4 templates allow you to use either Key Storage Providers or Legacy Cryptographic Service Providers. You specify the cryptography provider category in private key flags.
   *
   * @public
   */
  PrivateKeyAttributes: PrivateKeyAttributesV4 | undefined;

  /**
   * Private key flags for v4 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, if an alternate signature algorithm should be used, and if certificates are renewed using the same private key.
   *
   * @public
   */
  PrivateKeyFlags: PrivateKeyFlagsV4 | undefined;

  /**
   * Enrollment flags describe the enrollment settings for certificates using the existing private key and deleting expired or revoked certificates.
   *
   * @public
   */
  EnrollmentFlags: EnrollmentFlagsV4 | undefined;

  /**
   * Subject name flags describe the subject name and subject alternate name that is included in a certificate.
   *
   * @public
   */
  SubjectNameFlags: SubjectNameFlagsV4 | undefined;

  /**
   * General flags describe whether the template is used for computers or users and if the template can be used with autoenrollment.
   *
   * @public
   */
  GeneralFlags: GeneralFlagsV4 | undefined;

  /**
   * Specifies the hash algorithm used to hash the private key. Hash algorithm can only be specified when using Key Storage Providers.
   *
   * @public
   */
  HashAlgorithm?: HashAlgorithm | undefined;

  /**
   * Extensions describe the key usage extensions and application policies for a template.
   *
   * @public
   */
  Extensions: ExtensionsV4 | undefined;
}

/**
 * Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
 *
 * @public
 */
export type TemplateDefinition =
  | TemplateDefinition.TemplateV2Member
  | TemplateDefinition.TemplateV3Member
  | TemplateDefinition.TemplateV4Member
  | TemplateDefinition.$UnknownMember;

/**
 * @public
 */
export namespace TemplateDefinition {
  /**
   * Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
   *
   * @public
   */
  export interface TemplateV2Member {
    TemplateV2: TemplateV2;
    TemplateV3?: never;
    TemplateV4?: never;
    $unknown?: never;
  }

  /**
   * Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
   *
   * @public
   */
  export interface TemplateV3Member {
    TemplateV2?: never;
    TemplateV3: TemplateV3;
    TemplateV4?: never;
    $unknown?: never;
  }

  /**
   * Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
   *
   * @public
   */
  export interface TemplateV4Member {
    TemplateV2?: never;
    TemplateV3?: never;
    TemplateV4: TemplateV4;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    TemplateV2?: never;
    TemplateV3?: never;
    TemplateV4?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    TemplateV2: (value: TemplateV2) => T;
    TemplateV3: (value: TemplateV3) => T;
    TemplateV4: (value: TemplateV4) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  ConnectorArn: string | undefined;

  /**
   * Name of the template. The template name must be unique.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
   *
   * @public
   */
  Definition: TemplateDefinition | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Metadata assigned to a template consisting of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTemplateResponse {
  /**
   * If successful, the Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  TemplateArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateTemplateGroupAccessControlEntryRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * Security identifier (SID) of the group object from Active Directory. The SID starts with "S-".
   *
   * @public
   */
  GroupSecurityIdentifier: string | undefined;

  /**
   * Name of the Active Directory group. This name does not need to match the group name in Active Directory.
   *
   * @public
   */
  GroupDisplayName: string | undefined;

  /**
   * Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a template.
   *
   * @public
   */
  AccessRights: AccessRights | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDirectoryRegistrationRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html).
   *
   * @public
   */
  DirectoryRegistrationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteServicePrincipalNameRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html).
   *
   * @public
   */
  DirectoryRegistrationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  TemplateArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateGroupAccessControlEntryRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * Security identifier (SID) of the group object from Active Directory. The SID starts with "S-".
   *
   * @public
   */
  GroupSecurityIdentifier: string | undefined;
}

/**
 * The directory registration represents the authorization of the connector service with a directory.
 *
 * @public
 */
export interface DirectoryRegistration {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called CreateDirectoryRegistration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the Active Directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * Status of the directory registration.
   *
   * @public
   */
  Status?: DirectoryRegistrationStatus | undefined;

  /**
   * Additional information about the directory registration status if the status is failed.
   *
   * @public
   */
  StatusReason?: DirectoryRegistrationStatusReason | undefined;

  /**
   * The date and time that the directory registration was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the directory registration was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * The directory registration represents the authorization of the connector service with the Active Directory.
 *
 * @public
 */
export interface DirectoryRegistrationSummary {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html).
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The identifier of the Active Directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * Status of the directory registration.
   *
   * @public
   */
  Status?: DirectoryRegistrationStatus | undefined;

  /**
   * Additional information about the directory registration status if the status is failed.
   *
   * @public
   */
  StatusReason?: DirectoryRegistrationStatusReason | undefined;

  /**
   * The date and time that the directory registration was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the directory registration was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetDirectoryRegistrationRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html).
   *
   * @public
   */
  DirectoryRegistrationArn: string | undefined;
}

/**
 * @public
 */
export interface GetDirectoryRegistrationResponse {
  /**
   * The directory registration represents the authorization of the connector service with a directory.
   *
   * @public
   */
  DirectoryRegistration?: DirectoryRegistration | undefined;
}

/**
 * @public
 */
export interface ListDirectoryRegistrationsRequest {
  /**
   * Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the `NextToken` element is sent in the response. Use this `NextToken` value in a subsequent request to retrieve additional items.
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
}

/**
 * @public
 */
export interface ListDirectoryRegistrationsResponse {
  /**
   * Summary information about each directory registration you have created.
   *
   * @public
   */
  DirectoryRegistrations?: DirectoryRegistrationSummary[] | undefined;

  /**
   * Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the `NextToken` parameter from the response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetServicePrincipalNameRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html).
   *
   * @public
   */
  DirectoryRegistrationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * The service principal name that the connector uses to authenticate with Active Directory.
 *
 * @public
 */
export interface ServicePrincipalName {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html).
   *
   * @public
   */
  DirectoryRegistrationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector.html](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * The status of a service principal name.
   *
   * @public
   */
  Status?: ServicePrincipalNameStatus | undefined;

  /**
   * Additional information for the status of a service principal name if the status is failed.
   *
   * @public
   */
  StatusReason?: ServicePrincipalNameStatusReason | undefined;

  /**
   * The date and time that the service principal name was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the service principal name was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetServicePrincipalNameResponse {
  /**
   * The service principal name that the connector uses to authenticate with Active Directory.
   *
   * @public
   */
  ServicePrincipalName?: ServicePrincipalName | undefined;
}

/**
 * @public
 */
export interface GetTemplateRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  TemplateArn: string | undefined;
}

/**
 * The revision version of the template. Template updates will increment the minor revision. Re-enrolling all certificate holders will increment the major revision.
 *
 * @public
 */
export interface TemplateRevision {
  /**
   * The revision version of the template. Re-enrolling all certificate holders will increment the major revision.
   *
   * @public
   */
  MajorRevision: number | undefined;

  /**
   * The revision version of the template. Re-enrolling all certificate holders will increment the major revision.
   *
   * @public
   */
  MinorRevision: number | undefined;
}

/**
 * An Active Directory compatible certificate template. Connectors issue certificates against these templates based on the requestor's Active Directory group membership.
 *
 * @public
 */
export interface Template {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
   *
   * @public
   */
  Definition?: TemplateDefinition | undefined;

  /**
   * Name of the templates. Template names must be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Object identifier of a template.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * The template schema version. Template schema versions can be v2, v3, or v4. The template configuration options change based on the template schema version.
   *
   * @public
   */
  PolicySchema?: number | undefined;

  /**
   * Status of the template. Status can be creating, active, deleting, or failed.
   *
   * @public
   */
  Status?: TemplateStatus | undefined;

  /**
   * The version of the template. Template updates will increment the minor revision. Re-enrolling all certificate holders will increment the major revision.
   *
   * @public
   */
  Revision?: TemplateRevision | undefined;

  /**
   * The date and time that the template was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the template was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetTemplateResponse {
  /**
   * A certificate template that the connector uses to issue certificates from a private CA.
   *
   * @public
   */
  Template?: Template | undefined;
}

/**
 * @public
 */
export interface GetTemplateGroupAccessControlEntryRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * Security identifier (SID) of the group object from Active Directory. The SID starts with "S-".
   *
   * @public
   */
  GroupSecurityIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateGroupAccessControlEntryResponse {
  /**
   * An access control entry allows or denies an Active Directory group from enrolling and/or autoenrolling with a template.
   *
   * @public
   */
  AccessControlEntry?: AccessControlEntry | undefined;
}

/**
 * @public
 */
export interface ListServicePrincipalNamesRequest {
  /**
   * Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the `NextToken` element is sent in the response. Use this `NextToken` value in a subsequent request to retrieve additional items.
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
   * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html).
   *
   * @public
   */
  DirectoryRegistrationArn: string | undefined;
}

/**
 * The service principal name that the connector uses to authenticate with Active Directory.
 *
 * @public
 */
export interface ServicePrincipalNameSummary {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateDirectoryRegistration](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html).
   *
   * @public
   */
  DirectoryRegistrationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * The status of a service principal name.
   *
   * @public
   */
  Status?: ServicePrincipalNameStatus | undefined;

  /**
   * Additional information for the status of a service principal name if the status is failed.
   *
   * @public
   */
  StatusReason?: ServicePrincipalNameStatusReason | undefined;

  /**
   * The date and time that the service principal name was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Time when the service principal name was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListServicePrincipalNamesResponse {
  /**
   * The service principal name, if any, that the connector uses to authenticate with Active Directory.
   *
   * @public
   */
  ServicePrincipalNames?: ServicePrincipalNameSummary[] | undefined;

  /**
   * Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the `NextToken` parameter from the response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you created the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags, if any, that are associated with your resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTemplateGroupAccessControlEntriesRequest {
  /**
   * Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the `NextToken` element is sent in the response. Use this `NextToken` value in a subsequent request to retrieve additional items.
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
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  TemplateArn: string | undefined;
}

/**
 * @public
 */
export interface ListTemplateGroupAccessControlEntriesResponse {
  /**
   * An access control entry grants or denies permission to an Active Directory group to enroll certificates for a template.
   *
   * @public
   */
  AccessControlEntries?: AccessControlEntrySummary[] | undefined;

  /**
   * Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the `NextToken` parameter from the response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the `NextToken` element is sent in the response. Use this `NextToken` value in a subsequent request to retrieve additional items.
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
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  ConnectorArn: string | undefined;
}

/**
 * An Active Directory compatible certificate template. Connectors issue certificates against these templates based on the requestor's Active Directory group membership.
 *
 * @public
 */
export interface TemplateSummary {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
   *
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
   *
   * @public
   */
  Definition?: TemplateDefinition | undefined;

  /**
   * Name of the template. The template name must be unique.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Object identifier of a template.
   *
   * @public
   */
  ObjectIdentifier?: string | undefined;

  /**
   * The template schema version. Template schema versions can be v2, v3, or v4. The template configuration options change based on the template schema version.
   *
   * @public
   */
  PolicySchema?: number | undefined;

  /**
   * Status of the template. Status can be creating, active, deleting, or failed.
   *
   * @public
   */
  Status?: TemplateStatus | undefined;

  /**
   * The revision version of the template. Template updates will increment the minor revision. Re-enrolling all certificate holders will increment the major revision.
   *
   * @public
   */
  Revision?: TemplateRevision | undefined;

  /**
   * The date and time that the template was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the template was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * Custom configuration templates used when issuing a certificate.
   *
   * @public
   */
  Templates?: TemplateSummary[] | undefined;

  /**
   * Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the `NextToken` parameter from the response you just received.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you created the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Metadata assigned to a directory registration consisting of a key-value pair.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateGroupAccessControlEntryRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * Security identifier (SID) of the group object from Active Directory. The SID starts with "S-".
   *
   * @public
   */
  GroupSecurityIdentifier: string | undefined;

  /**
   * Name of the Active Directory group. This name does not need to match the group name in Active Directory.
   *
   * @public
   */
  GroupDisplayName?: string | undefined;

  /**
   * Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a template.
   *
   * @public
   */
  AccessRights?: AccessRights | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
   *
   * @public
   */
  TemplateArn: string | undefined;

  /**
   * Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
   *
   * @public
   */
  Definition?: TemplateDefinition | undefined;

  /**
   * This setting allows the major version of a template to be increased automatically. All members of Active Directory groups that are allowed to enroll with a template will receive a new certificate issued using that template.
   *
   * @public
   */
  ReenrollAllCertificateHolders?: boolean | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that was returned when you created the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Specifies a list of tag keys that you want to remove from the specified resources.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

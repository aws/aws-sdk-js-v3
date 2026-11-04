// smithy-typescript generated code
import type {
  CaEnrollmentPolicyStatus,
  CertificateState,
  CertificateType,
  ClientAuthenticationStatus,
  ClientAuthenticationType,
  DataAccessStatus,
  DirectoryConfigurationStatus,
  DirectoryEdition,
  DirectorySize,
  DirectoryStage,
  DirectoryType,
  DomainControllerStatus,
  HybridUpdateType,
  IpRouteStatusMsg,
  LDAPSStatus,
  LDAPSType,
  NetworkType,
  OSVersion,
  RadiusAuthenticationProtocol,
  RadiusStatus,
  RegionType,
  ReplicationScope,
  SchemaExtensionStatus,
  SelectiveAuth,
  ShareMethod,
  ShareStatus,
  SnapshotStatus,
  SnapshotType,
  TargetType,
  TopicStatus,
  TrustDirection,
  TrustState,
  TrustType,
  UpdateStatus,
  UpdateType,
} from "./enums";

/**
 * @public
 */
export interface AcceptSharedDirectoryRequest {
  /**
   * Identifier of the shared directory in the directory consumer account. This identifier is different for each directory owner account.
   *
   * @public
   */
  SharedDirectoryId: string | undefined;
}

/**
 * Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.
 *
 * @public
 */
export interface SharedDirectory {
  /**
   * Identifier of the directory owner account, which contains the directory that has been shared to the consumer account.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * Identifier of the directory in the directory owner account.
   *
   * @public
   */
  OwnerDirectoryId?: string | undefined;

  /**
   * The method used when sharing a directory to determine whether the directory should be shared within your Amazon Web Services organization (`ORGANIZATIONS`) or with any Amazon Web Services account by sending a shared directory request (`HANDSHAKE`).
   *
   * @public
   */
  ShareMethod?: ShareMethod | undefined;

  /**
   * Identifier of the directory consumer account that has access to the shared directory (`OwnerDirectoryId`) in the directory owner account.
   *
   * @public
   */
  SharedAccountId?: string | undefined;

  /**
   * Identifier of the shared directory in the directory consumer account. This identifier is different for each directory owner account.
   *
   * @public
   */
  SharedDirectoryId?: string | undefined;

  /**
   * Current directory status of the shared Managed Microsoft AD directory.
   *
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * A directory share request that is sent by the directory owner to the directory consumer. The request includes a typed message to help the directory consumer administrator determine whether to approve or reject the share invitation.
   *
   * @public
   */
  ShareNotes?: string | undefined;

  /**
   * The date and time that the shared directory was created.
   *
   * @public
   */
  CreatedDateTime?: Date | undefined;

  /**
   * The date and time that the shared directory was last updated.
   *
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface AcceptSharedDirectoryResult {
  /**
   * The shared directory in the directory consumer account.
   *
   * @public
   */
  SharedDirectory?: SharedDirectory | undefined;
}

/**
 * Contains the IP address block. This is often the address block of the DNS server used for your self-managed domain.
 *
 * @public
 */
export interface IpRoute {
  /**
   * IP address block in CIDR format, such as 10.0.0.0/24. This is often the address block of the DNS server used for your self-managed domain. For a single IP address, use a CIDR address block with /32. For example, 10.0.0.0/32.
   *
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * IPv6 address block in CIDR format, such as 2001:db8::/32. This is often the address block of the DNS server used for your self-managed domain. For a single IPv6 address, use a CIDR address block with /128. For example, 2001:db8::1/128.
   *
   * @public
   */
  CidrIpv6?: string | undefined;

  /**
   * Description of the address block.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface AddIpRoutesRequest {
  /**
   * Identifier (ID) of the directory to which to add the address block.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * IP address blocks, using CIDR format, of the traffic to route. This is often the IP address block of the DNS server used for your self-managed domain.
   *
   * @public
   */
  IpRoutes: IpRoute[] | undefined;

  /**
   * If set to true, updates the inbound and outbound rules of the security group that has the description: "Amazon Web Services created security group for *directory ID* directory controllers." Following are the new rules:
   *
   * Inbound:
   *
   * - Type: Custom UDP Rule, Protocol: UDP, Range: 88, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom UDP Rule, Protocol: UDP, Range: 123, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom UDP Rule, Protocol: UDP, Range: 138, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom UDP Rule, Protocol: UDP, Range: 389, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom UDP Rule, Protocol: UDP, Range: 464, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom UDP Rule, Protocol: UDP, Range: 445, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom TCP Rule, Protocol: TCP, Range: 88, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom TCP Rule, Protocol: TCP, Range: 135, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom TCP Rule, Protocol: TCP, Range: 445, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom TCP Rule, Protocol: TCP, Range: 464, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom TCP Rule, Protocol: TCP, Range: 636, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom TCP Rule, Protocol: TCP, Range: 1024-65535, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: Custom TCP Rule, Protocol: TCP, Range: 3268-33269, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: DNS (UDP), Protocol: UDP, Range: 53, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: DNS (TCP), Protocol: TCP, Range: 53, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: LDAP, Protocol: TCP, Range: 389, Source: Managed Microsoft AD VPC IPv4 CIDR
   * - Type: All ICMP, Protocol: All, Range: N/A, Source: Managed Microsoft AD VPC IPv4 CIDR
   *
   * Outbound:
   *
   * - Type: All traffic, Protocol: All, Range: All, Destination: 0.0.0.0/0
   *
   * These security rules impact an internal network interface that is not exposed publicly.
   *
   * @public
   */
  UpdateSecurityGroupForDirectoryControllers?: boolean | undefined;
}

/**
 * @public
 */
export interface AddIpRoutesResult {}

/**
 * Contains VPC information for the CreateDirectory, CreateMicrosoftAD, or CreateHybridAD operation.
 *
 * @public
 */
export interface DirectoryVpcSettings {
  /**
   * The identifier of the VPC in which to create the directory.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. Directory Service creates a directory server and a DNS server in each of these subnets.
   *
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddRegionRequest {
  /**
   * The identifier of the directory to which you want to add Region replication.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the Region where you want to add domain controllers for replication. For example, `us-east-1`.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * Contains VPC information for the CreateDirectory, CreateMicrosoftAD, or CreateHybridAD operation.
   *
   * @public
   */
  VPCSettings: DirectoryVpcSettings | undefined;
}

/**
 * @public
 */
export interface AddRegionResult {}

/**
 * Metadata assigned to a directory consisting of a key-value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * Required name of the tag. The string value can be Unicode characters and cannot be prefixed with "aws:". The string can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-', ':', '@'(Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The optional value of the tag. The string value can be Unicode characters. The string can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-', ':', '@' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-]*)$").
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceRequest {
  /**
   * Identifier (ID) for the directory to which to add the tag.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The tags to be assigned to the directory.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface AddTagsToResourceResult {}

/**
 * Contains detailed information about a directory assessment, including configuration parameters, status, and validation results.
 *
 * @public
 */
export interface Assessment {
  /**
   * The unique identifier of the directory assessment.
   *
   * @public
   */
  AssessmentId?: string | undefined;

  /**
   * The identifier of the directory associated with this assessment.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of the Active Directory domain being assessed.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * The date and time when the assessment was initiated.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time when the assessment status was last updated.
   *
   * @public
   */
  LastUpdateDateTime?: Date | undefined;

  /**
   * The current status of the assessment. Valid values include `SUCCESS`, `FAILED`, `PENDING`, and `IN_PROGRESS`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A detailed status code providing additional information about the assessment state.
   *
   * @public
   */
  StatusCode?: string | undefined;

  /**
   * A human-readable description of the current assessment status, including any error details or progress information.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The IP addresses of the DNS servers or domain controllers in your self-managed AD environment.
   *
   * @public
   */
  CustomerDnsIps?: string[] | undefined;

  /**
   * Contains Amazon VPC information for the `StartADAssessment` operation.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * A list of subnet identifiers in the Amazon VPC in which the hybrid directory is created.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The security groups identifiers attached to the network interfaces.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The identifiers of the self-managed AD instances used to perform the assessment.
   *
   * @public
   */
  SelfManagedInstanceIds?: string[] | undefined;

  /**
   * The type of assessment report generated. Valid values are `CUSTOMER` and `SYSTEM`.
   *
   * @public
   */
  ReportType?: string | undefined;

  /**
   * The version of the assessment framework used to evaluate your self-managed AD environment.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Contains configuration parameters required to perform a directory assessment.
 *
 * @public
 */
export interface AssessmentConfiguration {
  /**
   * A list of IP addresses for the DNS servers or domain controllers in your self-managed AD that are tested during the assessment.
   *
   * @public
   */
  CustomerDnsIps: string[] | undefined;

  /**
   * The fully qualified domain name (FQDN) of the self-managed AD domain to assess.
   *
   * @public
   */
  DnsName: string | undefined;

  /**
   * Contains VPC information for the CreateDirectory, CreateMicrosoftAD, or CreateHybridAD operation.
   *
   * @public
   */
  VpcSettings: DirectoryVpcSettings | undefined;

  /**
   * The identifiers of the self-managed instances with SSM that are used to perform connectivity and validation tests.
   *
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * By default, the service attaches a security group to allow network access to the self-managed nodes in your Amazon VPC. You can optionally supply your own security group that allows network traffic to and from your self-managed domain controllers outside of your Amazon VPC.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * Contains information about a specific validation test performed during a directory assessment.
 *
 * @public
 */
export interface AssessmentValidation {
  /**
   * The category of the validation test.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * The name of the specific validation test performed within the category.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The result status of the validation test. Valid values include `SUCCESS`, `FAILED`, `PENDING`, and `IN_PROGRESS`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * A detailed status code providing additional information about the validation result.
   *
   * @public
   */
  StatusCode?: string | undefined;

  /**
   * A human-readable description of the validation result, including any error details or recommendations.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The date and time when the validation test was started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time when the validation test was completed or last updated.
   *
   * @public
   */
  LastUpdateDateTime?: Date | undefined;
}

/**
 * Contains the results of validation tests performed against a specific domain controller during a directory assessment.
 *
 * @public
 */
export interface AssessmentReport {
  /**
   * The IP address of the domain controller that was tested during the assessment.
   *
   * @public
   */
  DomainControllerIp?: string | undefined;

  /**
   * A list of validation results for different test categories performed against this domain controller.
   *
   * @public
   */
  Validations?: AssessmentValidation[] | undefined;
}

/**
 * Contains summary information about a directory assessment, providing a high-level overview without detailed validation results.
 *
 * @public
 */
export interface AssessmentSummary {
  /**
   * The unique identifier of the directory assessment.
   *
   * @public
   */
  AssessmentId?: string | undefined;

  /**
   * The identifier of the directory associated with this assessment.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of the Active Directory domain being assessed.
   *
   * @public
   */
  DnsName?: string | undefined;

  /**
   * The date and time when the assessment was initiated.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time when the assessment status was last updated.
   *
   * @public
   */
  LastUpdateDateTime?: Date | undefined;

  /**
   * The current status of the assessment. Valid values include `SUCCESS`, `FAILED`, `PENDING`, and `IN_PROGRESS`.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The IP addresses of the DNS servers or domain controllers in your self-managed AD environment.
   *
   * @public
   */
  CustomerDnsIps?: string[] | undefined;

  /**
   * The type of assessment report generated. Valid values include `CUSTOMER` and `SYSTEM`.
   *
   * @public
   */
  ReportType?: string | undefined;
}

/**
 * Represents a named directory attribute.
 *
 * @public
 */
export interface Attribute {
  /**
   * The name of the attribute.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CancelSchemaExtensionRequest {
  /**
   * The identifier of the directory whose schema extension will be canceled.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The identifier of the schema extension that will be canceled.
   *
   * @public
   */
  SchemaExtensionId: string | undefined;
}

/**
 * @public
 */
export interface CancelSchemaExtensionResult {}

/**
 * Contains information about the client certificate authentication settings for the `RegisterCertificate` and `DescribeCertificate` operations.
 *
 * @public
 */
export interface ClientCertAuthSettings {
  /**
   * Specifies the URL of the default OCSP server used to check for revocation status. A secondary value to any OCSP address found in the AIA extension of the user certificate.
   *
   * @public
   */
  OCSPUrl?: string | undefined;
}

/**
 * Information about the certificate.
 *
 * @public
 */
export interface Certificate {
  /**
   * The identifier of the certificate.
   *
   * @public
   */
  CertificateId?: string | undefined;

  /**
   * The state of the certificate.
   *
   * @public
   */
  State?: CertificateState | undefined;

  /**
   * Describes a state change for the certificate.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The common name for the certificate.
   *
   * @public
   */
  CommonName?: string | undefined;

  /**
   * The date and time that the certificate was registered.
   *
   * @public
   */
  RegisteredDateTime?: Date | undefined;

  /**
   * The date and time when the certificate will expire.
   *
   * @public
   */
  ExpiryDateTime?: Date | undefined;

  /**
   * The function that the registered certificate performs. Valid values include `ClientLDAPS` or `ClientCertAuth`. The default value is `ClientLDAPS`.
   *
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * A `ClientCertAuthSettings` object that contains client certificate authentication settings.
   *
   * @public
   */
  ClientCertAuthSettings?: ClientCertAuthSettings | undefined;
}

/**
 * Contains general information about a certificate.
 *
 * @public
 */
export interface CertificateInfo {
  /**
   * The identifier of the certificate.
   *
   * @public
   */
  CertificateId?: string | undefined;

  /**
   * The common name for the certificate.
   *
   * @public
   */
  CommonName?: string | undefined;

  /**
   * The state of the certificate.
   *
   * @public
   */
  State?: CertificateState | undefined;

  /**
   * The date and time when the certificate will expire.
   *
   * @public
   */
  ExpiryDateTime?: Date | undefined;

  /**
   * The function that the registered certificate performs. Valid values include `ClientLDAPS` or `ClientCertAuth`. The default value is `ClientLDAPS`.
   *
   * @public
   */
  Type?: CertificateType | undefined;
}

/**
 * Contains information about a client authentication method for a directory.
 *
 * @public
 */
export interface ClientAuthenticationSettingInfo {
  /**
   * The type of client authentication for the specified directory. If no type is specified, a list of all client authentication types that are supported for the directory is retrieved.
   *
   * @public
   */
  Type?: ClientAuthenticationType | undefined;

  /**
   * Whether the client authentication type is enabled or disabled for the specified directory.
   *
   * @public
   */
  Status?: ClientAuthenticationStatus | undefined;

  /**
   * The date and time when the status of the client authentication type was last updated.
   *
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;
}

/**
 * Contains information about a computer account in a directory.
 *
 * @public
 */
export interface Computer {
  /**
   * The identifier of the computer.
   *
   * @public
   */
  ComputerId?: string | undefined;

  /**
   * The computer name.
   *
   * @public
   */
  ComputerName?: string | undefined;

  /**
   * An array of Attribute objects containing the LDAP attributes that belong to the computer account.
   *
   * @public
   */
  ComputerAttributes?: Attribute[] | undefined;
}

/**
 * Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.
 *
 * @public
 */
export interface ConditionalForwarder {
  /**
   * The fully qualified domain name (FQDN) of the remote domains pointed to by the conditional forwarder.
   *
   * @public
   */
  RemoteDomainName?: string | undefined;

  /**
   * The IP addresses of the remote DNS server associated with RemoteDomainName. This is the IP address of the DNS server that your conditional forwarder points to.
   *
   * @public
   */
  DnsIpAddrs?: string[] | undefined;

  /**
   * The IPv6 addresses of the remote DNS server associated with RemoteDomainName. This is the IPv6 address of the DNS server that your conditional forwarder points to.
   *
   * @public
   */
  DnsIpv6Addrs?: string[] | undefined;

  /**
   * The replication scope of the conditional forwarder. The only allowed value is `Domain`, which will replicate the conditional forwarder to all of the domain controllers for your Amazon Web Services directory.
   *
   * @public
   */
  ReplicationScope?: ReplicationScope | undefined;
}

/**
 * Contains connection settings for creating an AD Connector with the ConnectDirectory action.
 *
 * @public
 */
export interface DirectoryConnectSettings {
  /**
   * The identifier of the VPC in which the AD Connector is created.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * A list of subnet identifiers in the VPC in which the AD Connector is created.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The IP addresses of DNS servers or domain controllers in your self-managed directory.
   *
   * @public
   */
  CustomerDnsIps?: string[] | undefined;

  /**
   * The IPv6 addresses of DNS servers or domain controllers in your self-managed directory.
   *
   * @public
   */
  CustomerDnsIpsV6?: string[] | undefined;

  /**
   * The user name of an account in your self-managed directory that is used to connect to the directory. This account must have the following permissions:
   *
   * - Read users and groups
   * - Create computer objects
   * - Join computers to the domain
   *
   * @public
   */
  CustomerUserName: string | undefined;
}

/**
 * Contains the inputs for the ConnectDirectory operation.
 *
 * @public
 */
export interface ConnectDirectoryRequest {
  /**
   * The fully qualified name of your self-managed directory, such as `corp.example.com`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The NetBIOS name of your self-managed directory, such as `CORP`.
   *
   * @public
   */
  ShortName?: string | undefined;

  /**
   * The password for your self-managed user account.
   *
   * @public
   */
  Password: string | undefined;

  /**
   * A description for the directory.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The size of the directory.
   *
   * @public
   */
  Size: DirectorySize | undefined;

  /**
   * A DirectoryConnectSettings object that contains additional information for the operation.
   *
   * @public
   */
  ConnectSettings: DirectoryConnectSettings | undefined;

  /**
   * The tags to be assigned to AD Connector.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The network type for your directory. The default value is `IPv4` or `IPv6` based on the provided subnet capabilities.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * Contains the results of the ConnectDirectory operation.
 *
 * @public
 */
export interface ConnectDirectoryResult {
  /**
   * The identifier of the new directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * Contains the inputs for the CreateAlias operation.
 *
 * @public
 */
export interface CreateAliasRequest {
  /**
   * The identifier of the directory for which to create the alias.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The requested alias.
   *
   * The alias must be unique amongst all aliases in Amazon Web Services. This operation throws an `EntityAlreadyExistsException` error if the alias already exists.
   *
   * @public
   */
  Alias: string | undefined;
}

/**
 * Contains the results of the CreateAlias operation.
 *
 * @public
 */
export interface CreateAliasResult {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The alias for the directory.
   *
   * @public
   */
  Alias?: string | undefined;
}

/**
 * Contains the inputs for the CreateComputer operation.
 *
 * @public
 */
export interface CreateComputerRequest {
  /**
   * The identifier of the directory in which to create the computer account.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the computer account.
   *
   * @public
   */
  ComputerName: string | undefined;

  /**
   * A one-time password that is used to join the computer to the directory. You should generate a random, strong password to use for this parameter.
   *
   * @public
   */
  Password: string | undefined;

  /**
   * The fully-qualified distinguished name of the organizational unit to place the computer account in.
   *
   * @public
   */
  OrganizationalUnitDistinguishedName?: string | undefined;

  /**
   * An array of Attribute objects that contain any LDAP attributes to apply to the computer account.
   *
   * @public
   */
  ComputerAttributes?: Attribute[] | undefined;
}

/**
 * Contains the results for the CreateComputer operation.
 *
 * @public
 */
export interface CreateComputerResult {
  /**
   * A Computer object that represents the computer account.
   *
   * @public
   */
  Computer?: Computer | undefined;
}

/**
 * Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.
 *
 * @public
 */
export interface CreateConditionalForwarderRequest {
  /**
   * The directory ID of the Amazon Web Services directory for which you are creating the conditional forwarder.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.
   *
   * @public
   */
  RemoteDomainName: string | undefined;

  /**
   * The IP addresses of the remote DNS server associated with RemoteDomainName.
   *
   * @public
   */
  DnsIpAddrs?: string[] | undefined;

  /**
   * The IPv6 addresses of the remote DNS server associated with RemoteDomainName.
   *
   * @public
   */
  DnsIpv6Addrs?: string[] | undefined;
}

/**
 * The result of a CreateConditinalForwarder request.
 *
 * @public
 */
export interface CreateConditionalForwarderResult {}

/**
 * Contains the inputs for the CreateDirectory operation.
 *
 * @public
 */
export interface CreateDirectoryRequest {
  /**
   * The fully qualified name for the directory, such as `corp.example.com`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The NetBIOS name of the directory, such as `CORP`.
   *
   * @public
   */
  ShortName?: string | undefined;

  /**
   * The password for the directory administrator. The directory creation process creates a directory administrator account with the user name `Administrator` and this password.
   *
   * If you need to change the password for the administrator account, you can use the ResetUserPassword API call.
   *
   * The regex pattern for this string is made up of the following conditions:
   *
   * - Length (?=^.\{8,64\}$) – Must be between 8 and 64 characters
   *
   * AND any 3 of the following password complexity rules required by Active Directory:
   *
   * - Numbers and upper case and lowercase (?=.*\d)(?=.*[A-Z])(?=.*[a-z])
   * - Numbers and special characters and lower case (?=.*\d)(?=.*[^A-Za-z0-9\s])(?=.*[a-z])
   * - Special characters and upper case and lower case (?=.*[^A-Za-z0-9\s])(?=.*[A-Z])(?=.*[a-z])
   * - Numbers and upper case and special characters (?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9\s])
   *
   * For additional information about how Active Directory passwords are enforced, see [Password must meet complexity requirements](https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements) on the Microsoft website.
   *
   * @public
   */
  Password: string | undefined;

  /**
   * A description for the directory.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The size of the directory.
   *
   * @public
   */
  Size: DirectorySize | undefined;

  /**
   * A DirectoryVpcSettings object that contains additional information for the operation.
   *
   * @public
   */
  VpcSettings?: DirectoryVpcSettings | undefined;

  /**
   * The tags to be assigned to the Simple AD directory.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The network type for your directory. Simple AD supports IPv4 and Dual-stack only.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * Contains the results of the CreateDirectory operation.
 *
 * @public
 */
export interface CreateDirectoryResult {
  /**
   * The identifier of the directory that was created.
   *
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface CreateHybridADRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials for the service account used to join hybrid domain controllers to your self-managed AD domain. This secret is used once and not stored.
   *
   * The secret must contain key-value pairs with keys matching `customerAdAdminDomainUsername` and `customerAdAdminDomainPassword`. For example: `\{"customerAdAdminDomainUsername":"carlos_salazar","customerAdAdminDomainPassword":"ExamplePassword123!"\}`.
   *
   * @public
   */
  SecretArn: string | undefined;

  /**
   * The unique identifier of the successful directory assessment that validates your self-managed AD environment. You must have a successful directory assessment before you create a hybrid directory.
   *
   * @public
   */
  AssessmentId: string | undefined;

  /**
   * The tags to be assigned to the directory. Each tag consists of a key and value pair. You can specify multiple tags as a list.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateHybridADResult {
  /**
   * The unique identifier of the newly created hybrid directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface CreateLogSubscriptionRequest {
  /**
   * Identifier of the directory to which you want to subscribe and receive real-time logs to your specified CloudWatch log group.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the CloudWatch log group where the real-time domain controller logs are forwarded.
   *
   * @public
   */
  LogGroupName: string | undefined;
}

/**
 * @public
 */
export interface CreateLogSubscriptionResult {}

/**
 * Creates an Managed Microsoft AD directory.
 *
 * @public
 */
export interface CreateMicrosoftADRequest {
  /**
   * The fully qualified domain name for the Managed Microsoft AD directory, such as `corp.example.com`. This name will resolve inside your VPC only. It does not need to be publicly resolvable.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The NetBIOS name for your domain, such as `CORP`. If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, `CORP` for the directory DNS `corp.example.com`.
   *
   * @public
   */
  ShortName?: string | undefined;

  /**
   * The password for the default administrative user named `Admin`.
   *
   * If you need to change the password for the administrator account, you can use the ResetUserPassword API call.
   *
   * @public
   */
  Password: string | undefined;

  /**
   * A description for the directory. This label will appear on the Amazon Web Services console `Directory Details` page after the directory is created.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Contains VPC information for the CreateDirectory or CreateMicrosoftAD operation.
   *
   * @public
   */
  VpcSettings: DirectoryVpcSettings | undefined;

  /**
   * Managed Microsoft AD is available in two editions: `Standard` and `Enterprise`. `Enterprise` is the default.
   *
   * @public
   */
  Edition?: DirectoryEdition | undefined;

  /**
   * The tags to be assigned to the Managed Microsoft AD directory.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The network type for your domain. The default value is `IPv4` or `IPv6` based on the provided subnet capabilities.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * Result of a CreateMicrosoftAD request.
 *
 * @public
 */
export interface CreateMicrosoftADResult {
  /**
   * The identifier of the directory that was created.
   *
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * Contains the inputs for the CreateSnapshot operation.
 *
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * The identifier of the directory of which to take a snapshot.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The descriptive name to apply to the snapshot.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Contains the results of the CreateSnapshot operation.
 *
 * @public
 */
export interface CreateSnapshotResult {
  /**
   * The identifier of the snapshot that was created.
   *
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.
 *
 * This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain.
 *
 * @public
 */
export interface CreateTrustRequest {
  /**
   * The Directory ID of the Managed Microsoft AD directory for which to establish the trust relationship.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The Fully Qualified Domain Name (FQDN) of the external domain for which to create the trust relationship.
   *
   * @public
   */
  RemoteDomainName: string | undefined;

  /**
   * The trust password. The trust password must be the same password that was used when creating the trust relationship on the external domain.
   *
   * @public
   */
  TrustPassword: string | undefined;

  /**
   * The direction of the trust relationship.
   *
   * @public
   */
  TrustDirection: TrustDirection | undefined;

  /**
   * The trust relationship type. `Forest` is the default.
   *
   * @public
   */
  TrustType?: TrustType | undefined;

  /**
   * The IP addresses of the remote DNS server associated with RemoteDomainName.
   *
   * @public
   */
  ConditionalForwarderIpAddrs?: string[] | undefined;

  /**
   * The IPv6 addresses of the remote DNS server associated with RemoteDomainName.
   *
   * @public
   */
  ConditionalForwarderIpv6Addrs?: string[] | undefined;

  /**
   * Optional parameter to enable selective authentication for the trust.
   *
   * @public
   */
  SelectiveAuth?: SelectiveAuth | undefined;
}

/**
 * The result of a CreateTrust request.
 *
 * @public
 */
export interface CreateTrustResult {
  /**
   * A unique identifier for the trust relationship that was created.
   *
   * @public
   */
  TrustId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteADAssessmentRequest {
  /**
   * The unique identifier of the directory assessment to delete.
   *
   * @public
   */
  AssessmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteADAssessmentResult {
  /**
   * The unique identifier of the deleted directory assessment.
   *
   * @public
   */
  AssessmentId?: string | undefined;
}

/**
 * Deletes a conditional forwarder.
 *
 * @public
 */
export interface DeleteConditionalForwarderRequest {
  /**
   * The directory ID for which you are deleting the conditional forwarder.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of the remote domain with which you are deleting the conditional forwarder.
   *
   * @public
   */
  RemoteDomainName: string | undefined;
}

/**
 * The result of a DeleteConditionalForwarder request.
 *
 * @public
 */
export interface DeleteConditionalForwarderResult {}

/**
 * Contains the inputs for the DeleteDirectory operation.
 *
 * @public
 */
export interface DeleteDirectoryRequest {
  /**
   * The identifier of the directory to delete.
   *
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * Contains the results of the DeleteDirectory operation.
 *
 * @public
 */
export interface DeleteDirectoryResult {
  /**
   * The directory identifier.
   *
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogSubscriptionRequest {
  /**
   * Identifier of the directory whose log subscription you want to delete.
   *
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLogSubscriptionResult {}

/**
 * Contains the inputs for the DeleteSnapshot operation.
 *
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * The identifier of the directory snapshot to be deleted.
   *
   * @public
   */
  SnapshotId: string | undefined;
}

/**
 * Contains the results of the DeleteSnapshot operation.
 *
 * @public
 */
export interface DeleteSnapshotResult {
  /**
   * The identifier of the directory snapshot that was deleted.
   *
   * @public
   */
  SnapshotId?: string | undefined;
}

/**
 * Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain.
 *
 * @public
 */
export interface DeleteTrustRequest {
  /**
   * The Trust ID of the trust relationship to be deleted.
   *
   * @public
   */
  TrustId: string | undefined;

  /**
   * Delete a conditional forwarder as part of a DeleteTrustRequest.
   *
   * @public
   */
  DeleteAssociatedConditionalForwarder?: boolean | undefined;
}

/**
 * The result of a DeleteTrust request.
 *
 * @public
 */
export interface DeleteTrustResult {
  /**
   * The Trust ID of the trust relationship that was deleted.
   *
   * @public
   */
  TrustId?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterCertificateRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The identifier of the certificate.
   *
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterCertificateResult {}

/**
 * Removes the specified directory as a publisher to the specified Amazon SNS topic.
 *
 * @public
 */
export interface DeregisterEventTopicRequest {
  /**
   * The Directory ID to remove as a publisher. This directory will no longer send messages to the specified Amazon SNS topic.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the Amazon SNS topic from which to remove the directory as a publisher.
   *
   * @public
   */
  TopicName: string | undefined;
}

/**
 * The result of a DeregisterEventTopic request.
 *
 * @public
 */
export interface DeregisterEventTopicResult {}

/**
 * @public
 */
export interface DescribeADAssessmentRequest {
  /**
   * The identifier of the directory assessment to describe.
   *
   * @public
   */
  AssessmentId: string | undefined;
}

/**
 * @public
 */
export interface DescribeADAssessmentResult {
  /**
   * Detailed information about the self-managed instance settings (IDs and DNS IPs).
   *
   * @public
   */
  Assessment?: Assessment | undefined;

  /**
   * A list of assessment reports containing validation results for each domain controller and test category. Each report includes specific validation details and outcomes.
   *
   * @public
   */
  AssessmentReports?: AssessmentReport[] | undefined;
}

/**
 * Contains the inputs for the DescribeCAEnrollmentPolicy operation.
 *
 * @public
 */
export interface DescribeCAEnrollmentPolicyRequest {
  /**
   * The identifier of the directory for which to retrieve the CA enrollment policy information.
   *
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * Contains the results of the DescribeCAEnrollmentPolicy operation.
 *
 * @public
 */
export interface DescribeCAEnrollmentPolicyResult {
  /**
   * The identifier of the directory associated with this CA enrollment policy.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Private Certificate Authority (PCA) connector that is configured for automatic certificate enrollment in this directory.
   *
   * @public
   */
  PcaConnectorArn?: string | undefined;

  /**
   * The current status of the CA enrollment policy. This indicates if automatic certificate enrollment is currently active, inactive, or in a transitional state.
   *
   * Valid values:
   *
   * - `IN_PROGRESS` - The policy is being activated T
   * - `SUCCESS` - The policy is active and automatic certificate enrollment is operational
   * - `FAILED` - The policy activation or deactivation failed
   * - `DISABLING` - The policy is being deactivated
   * - `DISABLED` - The policy is inactive and automatic certificate enrollment is not available
   * - `IMPAIRED` - Network connectivity is impaired.
   *
   * @public
   */
  CaEnrollmentPolicyStatus?: CaEnrollmentPolicyStatus | undefined;

  /**
   * The date and time when the CA enrollment policy was last modified or updated.
   *
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;

  /**
   * Additional information explaining the current status of the CA enrollment policy, particularly useful when the policy is in an error or transitional state.
   *
   * @public
   */
  CaEnrollmentPolicyStatusReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The identifier of the certificate.
   *
   * @public
   */
  CertificateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateResult {
  /**
   * Information about the certificate, including registered date time, certificate state, the reason for the state, expiration date time, and certificate common name.
   *
   * @public
   */
  Certificate?: Certificate | undefined;
}

/**
 * @public
 */
export interface DescribeClientAuthenticationSettingsRequest {
  /**
   * The identifier of the directory for which to retrieve information.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The type of client authentication for which to retrieve information. If no type is specified, a list of all client authentication types that are supported for the specified directory is retrieved.
   *
   * @public
   */
  Type?: ClientAuthenticationType | undefined;

  /**
   * The *DescribeClientAuthenticationSettingsResult.NextToken* value from a previous call to DescribeClientAuthenticationSettings. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeClientAuthenticationSettingsResult {
  /**
   * Information about the type of client authentication for the specified directory. The following information is retrieved: The date and time when the status of the client authentication type was last updated, whether the client authentication type is enabled or disabled, and the type of client authentication.
   *
   * @public
   */
  ClientAuthenticationSettingsInfo?: ClientAuthenticationSettingInfo[] | undefined;

  /**
   * The next token used to retrieve the client authentication settings if the number of setting types exceeds page limit and there is another page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a conditional forwarder.
 *
 * @public
 */
export interface DescribeConditionalForwardersRequest {
  /**
   * The directory ID for which to get the list of associated conditional forwarders.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The fully qualified domain names (FQDN) of the remote domains for which to get the list of associated conditional forwarders. If this member is null, all conditional forwarders are returned.
   *
   * @public
   */
  RemoteDomainNames?: string[] | undefined;
}

/**
 * The result of a DescribeConditionalForwarder request.
 *
 * @public
 */
export interface DescribeConditionalForwardersResult {
  /**
   * The list of conditional forwarders that have been created.
   *
   * @public
   */
  ConditionalForwarders?: ConditionalForwarder[] | undefined;
}

/**
 * Contains the inputs for the DescribeDirectories operation.
 *
 * @public
 */
export interface DescribeDirectoriesRequest {
  /**
   * A list of identifiers of the directories for which to obtain the information. If this member is null, all directories that belong to the current account are returned.
   *
   * An empty list results in an `InvalidParameterException` being thrown.
   *
   * @public
   */
  DirectoryIds?: string[] | undefined;

  /**
   * The `DescribeDirectoriesResult.NextToken` value from a previous call to DescribeDirectories. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Contains information about an AD Connector directory.
 *
 * @public
 */
export interface DirectoryConnectSettingsDescription {
  /**
   * The identifier of the VPC that the AD Connector is in.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * A list of subnet identifiers in the VPC that the AD Connector is in.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The user name of the service account in your self-managed directory.
   *
   * @public
   */
  CustomerUserName?: string | undefined;

  /**
   * The security group identifier for the AD Connector directory.
   *
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * The Availability Zones that the directory is in.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The IP addresses of the AD Connector servers.
   *
   * @public
   */
  ConnectIps?: string[] | undefined;

  /**
   * The IPv6 addresses of the AD Connector servers.
   *
   * @public
   */
  ConnectIpsV6?: string[] | undefined;
}

/**
 * Describes the current hybrid directory configuration settings for a directory.
 *
 * @public
 */
export interface HybridSettingsDescription {
  /**
   * The IP addresses of the DNS servers in your self-managed AD environment.
   *
   * @public
   */
  SelfManagedDnsIpAddrs?: string[] | undefined;

  /**
   * The identifiers of the self-managed instances with SSM used for hybrid directory operations.
   *
   * @public
   */
  SelfManagedInstanceIds?: string[] | undefined;
}

/**
 * Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
 *
 * @public
 */
export interface RadiusSettings {
  /**
   * The fully qualified domain name (FQDN) or IP addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server load balancer.
   *
   * @public
   */
  RadiusServers?: string[] | undefined;

  /**
   * The IPv6 addresses of the RADIUS server endpoints or RADIUS server load balancer.
   *
   * @public
   */
  RadiusServersIpv6?: string[] | undefined;

  /**
   * The port that your RADIUS server is using for communications. Your self-managed network must allow inbound traffic over this port from the Directory Service servers.
   *
   * @public
   */
  RadiusPort?: number | undefined;

  /**
   * The amount of time, in seconds, to wait for the RADIUS server to respond.
   *
   * @public
   */
  RadiusTimeout?: number | undefined;

  /**
   * The maximum number of times that communication with the RADIUS server is retried after the initial attempt.
   *
   * @public
   */
  RadiusRetries?: number | undefined;

  /**
   * Required for enabling RADIUS on the directory.
   *
   * @public
   */
  SharedSecret?: string | undefined;

  /**
   * The protocol specified for your RADIUS endpoints.
   *
   * @public
   */
  AuthenticationProtocol?: RadiusAuthenticationProtocol | undefined;

  /**
   * Not currently used.
   *
   * @public
   */
  DisplayLabel?: string | undefined;

  /**
   * Not currently used.
   *
   * @public
   */
  UseSameUsername?: boolean | undefined;
}

/**
 * Contains information about the directory.
 *
 * @public
 */
export interface DirectoryVpcSettingsDescription {
  /**
   * The identifier of the VPC that the directory is in.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The identifiers of the subnets for the directory servers.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The domain controller security group identifier for the directory.
   *
   * @public
   */
  SecurityGroupId?: string | undefined;

  /**
   * The list of Availability Zones that the directory is in.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;
}

/**
 * Contains the directory owner account details shared with the directory consumer account.
 *
 * @public
 */
export interface OwnerDirectoryDescription {
  /**
   * Identifier of the Managed Microsoft AD directory in the directory owner account.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * Identifier of the directory owner account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * IP address of the directory’s domain controllers.
   *
   * @public
   */
  DnsIpAddrs?: string[] | undefined;

  /**
   * IPv6 addresses of the directory’s domain controllers.
   *
   * @public
   */
  DnsIpv6Addrs?: string[] | undefined;

  /**
   * Information about the VPC settings for the directory.
   *
   * @public
   */
  VpcSettings?: DirectoryVpcSettingsDescription | undefined;

  /**
   * Information about the RadiusSettings object server configuration.
   *
   * @public
   */
  RadiusSettings?: RadiusSettings | undefined;

  /**
   * The status of the RADIUS server.
   *
   * @public
   */
  RadiusStatus?: RadiusStatus | undefined;

  /**
   * Network type of the directory in the directory owner account.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * Provides information about the Regions that are configured for multi-Region replication.
 *
 * @public
 */
export interface RegionsInfo {
  /**
   * The Region where the Managed Microsoft AD directory was originally created.
   *
   * @public
   */
  PrimaryRegion?: string | undefined;

  /**
   * Lists the Regions where the directory has been replicated, excluding the primary Region.
   *
   * @public
   */
  AdditionalRegions?: string[] | undefined;
}

/**
 * Contains information about an Directory Service directory.
 *
 * @public
 */
export interface DirectoryDescription {
  /**
   * The directory identifier.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The fully qualified name of the directory.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The short name of the directory.
   *
   * @public
   */
  ShortName?: string | undefined;

  /**
   * The directory size.
   *
   * @public
   */
  Size?: DirectorySize | undefined;

  /**
   * The edition associated with this directory.
   *
   * @public
   */
  Edition?: DirectoryEdition | undefined;

  /**
   * The alias for the directory. If no alias exists, the alias is the directory identifier, such as `d-XXXXXXXXXX`.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The access URL for the directory, such as `http://<alias>.awsapps.com`. If no alias exists, `<alias>` is the directory identifier, such as `d-XXXXXXXXXX`.
   *
   * @public
   */
  AccessUrl?: string | undefined;

  /**
   * The description for the directory.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The IP addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD directory, these are the IP addresses of the Simple AD or Microsoft AD directory servers. For an AD Connector directory, these are the IP addresses of self-managed directory to which the AD Connector is connected.
   *
   * @public
   */
  DnsIpAddrs?: string[] | undefined;

  /**
   * The IPv6 addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD directory, these are the IPv6 addresses of the Simple AD or Microsoft AD directory servers. For an AD Connector directory, these are the IPv6 addresses of the DNS servers or domain controllers in your self-managed directory to which the AD Connector is connected.
   *
   * @public
   */
  DnsIpv6Addrs?: string[] | undefined;

  /**
   * The current stage of the directory.
   *
   * @public
   */
  Stage?: DirectoryStage | undefined;

  /**
   * Current directory status of the shared Managed Microsoft AD directory.
   *
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * The method used when sharing a directory to determine whether the directory should be shared within your Amazon Web Services organization (`ORGANIZATIONS`) or with any Amazon Web Services account by sending a shared directory request (`HANDSHAKE`).
   *
   * @public
   */
  ShareMethod?: ShareMethod | undefined;

  /**
   * A directory share request that is sent by the directory owner to the directory consumer. The request includes a typed message to help the directory consumer administrator determine whether to approve or reject the share invitation.
   *
   * @public
   */
  ShareNotes?: string | undefined;

  /**
   * The date and time when the directory was created.
   *
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * The date and time when the stage was last updated.
   *
   * @public
   */
  StageLastUpdatedDateTime?: Date | undefined;

  /**
   * The directory type.
   *
   * @public
   */
  Type?: DirectoryType | undefined;

  /**
   * A DirectoryVpcSettingsDescription object that contains additional information about a directory. Present only for Simple AD and Managed Microsoft AD directories.
   *
   * @public
   */
  VpcSettings?: DirectoryVpcSettingsDescription | undefined;

  /**
   * DirectoryConnectSettingsDescription object that contains additional information about an AD Connector directory. Present only for AD Connector directories.
   *
   * @public
   */
  ConnectSettings?: DirectoryConnectSettingsDescription | undefined;

  /**
   * Information about the RadiusSettings object configured for this directory.
   *
   * @public
   */
  RadiusSettings?: RadiusSettings | undefined;

  /**
   * The status of the RADIUS MFA server connection.
   *
   * @public
   */
  RadiusStatus?: RadiusStatus | undefined;

  /**
   * Additional information about the directory stage.
   *
   * @public
   */
  StageReason?: string | undefined;

  /**
   * Indicates whether single sign-on is enabled for the directory. For more information, see EnableSso and DisableSso.
   *
   * @public
   */
  SsoEnabled?: boolean | undefined;

  /**
   * The desired number of domain controllers in the directory if the directory is Microsoft AD.
   *
   * @public
   */
  DesiredNumberOfDomainControllers?: number | undefined;

  /**
   * Describes the Managed Microsoft AD directory in the directory owner account.
   *
   * @public
   */
  OwnerDirectoryDescription?: OwnerDirectoryDescription | undefined;

  /**
   * Lists the Regions where the directory has replicated.
   *
   * @public
   */
  RegionsInfo?: RegionsInfo | undefined;

  /**
   * The operating system (OS) version of the directory.
   *
   * @public
   */
  OsVersion?: OSVersion | undefined;

  /**
   * Contains information about the hybrid directory configuration for the directory, including Amazon Web Services System Manager managed node identifiers and DNS IPs.
   *
   * @public
   */
  HybridSettings?: HybridSettingsDescription | undefined;

  /**
   * The network type of the directory.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * Contains the results of the DescribeDirectories operation.
 *
 * @public
 */
export interface DescribeDirectoriesResult {
  /**
   * The list of available DirectoryDescription objects that were retrieved.
   *
   * It is possible that this list contains less than the number of items specified in the `Limit` member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.
   *
   * @public
   */
  DirectoryDescriptions?: DirectoryDescription[] | undefined;

  /**
   * If not null, more results are available. Pass this value for the `NextToken` parameter in a subsequent call to DescribeDirectories to retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectoryDataAccessRequest {
  /**
   * The directory identifier.
   *
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDirectoryDataAccessResult {
  /**
   * The current status of data access through the Directory Service Data API.
   *
   * @public
   */
  DataAccessStatus?: DataAccessStatus | undefined;
}

/**
 * @public
 */
export interface DescribeDomainControllersRequest {
  /**
   * Identifier of the directory for which to retrieve the domain controller information.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * A list of identifiers for the domain controllers whose information will be provided.
   *
   * @public
   */
  DomainControllerIds?: string[] | undefined;

  /**
   * The *DescribeDomainControllers.NextToken* value from a previous call to DescribeDomainControllers. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Contains information about the domain controllers for a specified directory.
 *
 * @public
 */
export interface DomainController {
  /**
   * Identifier of the directory where the domain controller resides.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * Identifies a specific domain controller in the directory.
   *
   * @public
   */
  DomainControllerId?: string | undefined;

  /**
   * The IP address of the domain controller.
   *
   * @public
   */
  DnsIpAddr?: string | undefined;

  /**
   * The IPv6 address of the domain controller.
   *
   * @public
   */
  DnsIpv6Addr?: string | undefined;

  /**
   * The identifier of the VPC that contains the domain controller.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Identifier of the subnet in the VPC that contains the domain controller.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The Availability Zone where the domain controller is located.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The status of the domain controller.
   *
   * @public
   */
  Status?: DomainControllerStatus | undefined;

  /**
   * A description of the domain controller state.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * Specifies when the domain controller was created.
   *
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * The date and time that the status was last updated.
   *
   * @public
   */
  StatusLastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDomainControllersResult {
  /**
   * List of the DomainController objects that were retrieved.
   *
   * @public
   */
  DomainControllers?: DomainController[] | undefined;

  /**
   * If not null, more results are available. Pass this value for the `NextToken` parameter in a subsequent call to DescribeDomainControllers retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes event topics.
 *
 * @public
 */
export interface DescribeEventTopicsRequest {
  /**
   * The Directory ID for which to get the list of associated Amazon SNS topics. If this member is null, associations for all Directory IDs are returned.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * A list of Amazon SNS topic names for which to obtain the information. If this member is null, all associations for the specified Directory ID are returned.
   *
   * An empty list results in an `InvalidParameterException` being thrown.
   *
   * @public
   */
  TopicNames?: string[] | undefined;
}

/**
 * Information about Amazon SNS topic and Directory Service directory associations.
 *
 * @public
 */
export interface EventTopic {
  /**
   * The Directory ID of an Directory Service directory that will publish status messages to an Amazon SNS topic.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The name of an Amazon SNS topic the receives status messages from the directory.
   *
   * @public
   */
  TopicName?: string | undefined;

  /**
   * The Amazon SNS topic ARN (Amazon Resource Name).
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The date and time of when you associated your directory with the Amazon SNS topic.
   *
   * @public
   */
  CreatedDateTime?: Date | undefined;

  /**
   * The topic registration status.
   *
   * @public
   */
  Status?: TopicStatus | undefined;
}

/**
 * The result of a DescribeEventTopic request.
 *
 * @public
 */
export interface DescribeEventTopicsResult {
  /**
   * A list of Amazon SNS topic names that receive status messages from the specified Directory ID.
   *
   * @public
   */
  EventTopics?: EventTopic[] | undefined;
}

/**
 * @public
 */
export interface DescribeHybridADUpdateRequest {
  /**
   * The identifier of the hybrid directory for which to retrieve update information.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The type of update activities to retrieve. Valid values include `SelfManagedInstances` and `HybridAdministratorAccount`.
   *
   * @public
   */
  UpdateType?: HybridUpdateType | undefined;

  /**
   * The pagination token from a previous request to DescribeHybridADUpdate. Pass null if this is the first request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the configuration values for a hybrid directory update, including Amazon Web Services System Manager managed node and DNS information.
 *
 * @public
 */
export interface HybridUpdateValue {
  /**
   * The identifiers of the self-managed instances with SSM in the hybrid directory configuration.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The IP addresses of the DNS servers or domain controllers in the hybrid directory configuration.
   *
   * @public
   */
  DnsIps?: string[] | undefined;
}

/**
 * Contains detailed information about a specific update activity for a hybrid directory component.
 *
 * @public
 */
export interface HybridUpdateInfoEntry {
  /**
   * The current status of the update activity. Valid values include `UPDATED`, `UPDATING`, and `UPDATE_FAILED`.
   *
   * @public
   */
  Status?: UpdateStatus | undefined;

  /**
   * A human-readable description of the update status, including any error details or progress information.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * Specifies if the update was initiated by the customer or Amazon Web Services.
   *
   * @public
   */
  InitiatedBy?: string | undefined;

  /**
   * The new configuration values being applied in this update.
   *
   * @public
   */
  NewValue?: HybridUpdateValue | undefined;

  /**
   * The previous configuration values before this update was applied.
   *
   * @public
   */
  PreviousValue?: HybridUpdateValue | undefined;

  /**
   * The date and time when the update activity was initiated.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time when the update activity status was last updated.
   *
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;

  /**
   * The identifier of the assessment performed to validate this update configuration.
   *
   * @public
   */
  AssessmentId?: string | undefined;
}

/**
 * Contains information about update activities for different components of a hybrid directory.
 *
 * @public
 */
export interface HybridUpdateActivities {
  /**
   * A list of update activities related to the self-managed instances with SSM in the self-managed instances with SSM hybrid directory configuration.
   *
   * @public
   */
  SelfManagedInstances?: HybridUpdateInfoEntry[] | undefined;

  /**
   * A list of update activities related to hybrid directory administrator account changes.
   *
   * @public
   */
  HybridAdministratorAccount?: HybridUpdateInfoEntry[] | undefined;
}

/**
 * @public
 */
export interface DescribeHybridADUpdateResult {
  /**
   * Information about update activities for the hybrid directory, organized by update type.
   *
   * @public
   */
  UpdateActivities?: HybridUpdateActivities | undefined;

  /**
   * If not null, more results are available. Pass this value for the `NextToken` parameter in a subsequent request to retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLDAPSSettingsRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The type of LDAP security to enable. Currently only the value `Client` is supported.
   *
   * @public
   */
  Type?: LDAPSType | undefined;

  /**
   * The type of next token used for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the number of items that should be displayed on one page.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Contains general information about the LDAPS settings.
 *
 * @public
 */
export interface LDAPSSettingInfo {
  /**
   * The state of the LDAPS settings.
   *
   * @public
   */
  LDAPSStatus?: LDAPSStatus | undefined;

  /**
   * Describes a state change for LDAPS.
   *
   * @public
   */
  LDAPSStatusReason?: string | undefined;

  /**
   * The date and time when the LDAPS settings were last updated.
   *
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeLDAPSSettingsResult {
  /**
   * Information about LDAP security for the specified directory, including status of enablement, state last updated date time, and the reason for the state.
   *
   * @public
   */
  LDAPSSettingsInfo?: LDAPSSettingInfo[] | undefined;

  /**
   * The next token used to retrieve the LDAPS settings if the number of setting types exceeds page limit and there is another page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRegionsRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The name of the Region. For example, `us-east-1`.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The `DescribeRegionsResult.NextToken` value from a previous call to DescribeRegions. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The replicated Region information for a directory.
 *
 * @public
 */
export interface RegionDescription {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The name of the Region. For example, `us-east-1`.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * Specifies whether the Region is the primary Region or an additional Region.
   *
   * @public
   */
  RegionType?: RegionType | undefined;

  /**
   * The status of the replication process for the specified Region.
   *
   * @public
   */
  Status?: DirectoryStage | undefined;

  /**
   * Contains VPC information for the CreateDirectory, CreateMicrosoftAD, or CreateHybridAD operation.
   *
   * @public
   */
  VpcSettings?: DirectoryVpcSettings | undefined;

  /**
   * The desired number of domain controllers in the specified Region for the specified directory.
   *
   * @public
   */
  DesiredNumberOfDomainControllers?: number | undefined;

  /**
   * Specifies when the Region replication began.
   *
   * @public
   */
  LaunchTime?: Date | undefined;

  /**
   * The date and time that the Region status was last updated.
   *
   * @public
   */
  StatusLastUpdatedDateTime?: Date | undefined;

  /**
   * The date and time that the Region description was last updated.
   *
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRegionsResult {
  /**
   * List of Region information related to the directory for each replicated Region.
   *
   * @public
   */
  RegionsDescription?: RegionDescription[] | undefined;

  /**
   * If not null, more results are available. Pass this value for the `NextToken` parameter in a subsequent call to DescribeRegions to retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSettingsRequest {
  /**
   * The identifier of the directory for which to retrieve information.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The status of the directory settings for which to retrieve information.
   *
   * @public
   */
  Status?: DirectoryConfigurationStatus | undefined;

  /**
   * The `DescribeSettingsResult.NextToken` value from a previous call to DescribeSettings. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains information about the specified configurable setting for a directory.
 *
 * @public
 */
export interface SettingEntry {
  /**
   * The type, or category, of a directory setting. Similar settings have the same type. For example, `Protocol`, `Cipher`, or `Certificate-Based Authentication`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The name of the directory setting. For example:
   *
   * `TLS_1_0`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The valid range of values for the directory setting. These values depend on the `DataType` of your directory.
   *
   * @public
   */
  AllowedValues?: string | undefined;

  /**
   * The value of the directory setting that is applied to the directory.
   *
   * @public
   */
  AppliedValue?: string | undefined;

  /**
   * The value that was last requested for the directory setting.
   *
   * @public
   */
  RequestedValue?: string | undefined;

  /**
   * The overall status of the request to update the directory setting request. If the directory setting is deployed in more than one region, and the request fails in any region, the overall status is `Failed`.
   *
   * @public
   */
  RequestStatus?: DirectoryConfigurationStatus | undefined;

  /**
   * Details about the status of the request to update the directory setting. If the directory setting is deployed in more than one region, status is returned for the request in each region where the setting is deployed.
   *
   * @public
   */
  RequestDetailedStatus?: Record<string, DirectoryConfigurationStatus> | undefined;

  /**
   * The last status message for the directory status request.
   *
   * @public
   */
  RequestStatusMessage?: string | undefined;

  /**
   * The date and time when the directory setting was last updated.
   *
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;

  /**
   * The date and time when the request to update a directory setting was last submitted.
   *
   * @public
   */
  LastRequestedDateTime?: Date | undefined;

  /**
   * The data type of a directory setting. This is used to define the `AllowedValues` of a setting. For example a data type can be `Boolean`, `DurationInSeconds`, or `Enum`.
   *
   * @public
   */
  DataType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSettingsResult {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The list of SettingEntry objects that were retrieved.
   *
   * It is possible that this list contains less than the number of items specified in the `Limit` member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.
   *
   * @public
   */
  SettingEntries?: SettingEntry[] | undefined;

  /**
   * If not null, token that indicates that more results are available. Pass this value for the `NextToken` parameter in a subsequent call to `DescribeSettings` to retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSharedDirectoriesRequest {
  /**
   * Returns the identifier of the directory in the directory owner account.
   *
   * @public
   */
  OwnerDirectoryId: string | undefined;

  /**
   * A list of identifiers of all shared directories in your account.
   *
   * @public
   */
  SharedDirectoryIds?: string[] | undefined;

  /**
   * The `DescribeSharedDirectoriesResult.NextToken` value from a previous call to DescribeSharedDirectories. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of shared directories to return in the response object.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeSharedDirectoriesResult {
  /**
   * A list of all shared directories in your account.
   *
   * @public
   */
  SharedDirectories?: SharedDirectory[] | undefined;

  /**
   * If not null, token that indicates that more results are available. Pass this value for the `NextToken` parameter in a subsequent call to DescribeSharedDirectories to retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains the inputs for the DescribeSnapshots operation.
 *
 * @public
 */
export interface DescribeSnapshotsRequest {
  /**
   * The identifier of the directory for which to retrieve snapshot information.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * A list of identifiers of the snapshots to obtain the information for. If this member is null or empty, all snapshots are returned using the *Limit* and *NextToken* members.
   *
   * @public
   */
  SnapshotIds?: string[] | undefined;

  /**
   * The *DescribeSnapshotsResult.NextToken* value from a previous call to DescribeSnapshots. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects to return.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Describes a directory snapshot.
 *
 * @public
 */
export interface Snapshot {
  /**
   * The directory identifier.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The snapshot identifier.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The snapshot type.
   *
   * @public
   */
  Type?: SnapshotType | undefined;

  /**
   * The descriptive name of the snapshot.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The snapshot status.
   *
   * @public
   */
  Status?: SnapshotStatus | undefined;

  /**
   * The date and time that the snapshot was taken.
   *
   * @public
   */
  StartTime?: Date | undefined;
}

/**
 * Contains the results of the DescribeSnapshots operation.
 *
 * @public
 */
export interface DescribeSnapshotsResult {
  /**
   * The list of Snapshot objects that were retrieved.
   *
   * It is possible that this list contains less than the number of items specified in the *Limit* member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.
   *
   * @public
   */
  Snapshots?: Snapshot[] | undefined;

  /**
   * If not null, more results are available. Pass this value in the *NextToken* member of a subsequent call to DescribeSnapshots.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the trust relationships for a particular Managed Microsoft AD directory. If no input parameters are provided, such as directory ID or trust ID, this request describes all the trust relationships.
 *
 * @public
 */
export interface DescribeTrustsRequest {
  /**
   * The Directory ID of the Amazon Web Services directory that is a part of the requested trust relationship.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * A list of identifiers of the trust relationships for which to obtain the information. If this member is null, all trust relationships that belong to the current account are returned.
   *
   * An empty list results in an `InvalidParameterException` being thrown.
   *
   * @public
   */
  TrustIds?: string[] | undefined;

  /**
   * The *DescribeTrustsResult.NextToken* value from a previous call to DescribeTrusts. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects to return.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Describes a trust relationship between an Managed Microsoft AD directory and an external domain.
 *
 * @public
 */
export interface Trust {
  /**
   * The Directory ID of the Amazon Web Services directory involved in the trust relationship.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The unique ID of the trust relationship.
   *
   * @public
   */
  TrustId?: string | undefined;

  /**
   * The Fully Qualified Domain Name (FQDN) of the external domain involved in the trust relationship.
   *
   * @public
   */
  RemoteDomainName?: string | undefined;

  /**
   * The trust relationship type. `Forest` is the default.
   *
   * @public
   */
  TrustType?: TrustType | undefined;

  /**
   * The trust relationship direction.
   *
   * @public
   */
  TrustDirection?: TrustDirection | undefined;

  /**
   * The trust relationship state.
   *
   * @public
   */
  TrustState?: TrustState | undefined;

  /**
   * The date and time that the trust relationship was created.
   *
   * @public
   */
  CreatedDateTime?: Date | undefined;

  /**
   * The date and time that the trust relationship was last updated.
   *
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;

  /**
   * The date and time that the TrustState was last updated.
   *
   * @public
   */
  StateLastUpdatedDateTime?: Date | undefined;

  /**
   * The reason for the TrustState.
   *
   * @public
   */
  TrustStateReason?: string | undefined;

  /**
   * Current state of selective authentication for the trust.
   *
   * @public
   */
  SelectiveAuth?: SelectiveAuth | undefined;
}

/**
 * The result of a DescribeTrust request.
 *
 * @public
 */
export interface DescribeTrustsResult {
  /**
   * The list of Trust objects that were retrieved.
   *
   * It is possible that this list contains less than the number of items specified in the *Limit* member of the request. This occurs if there are less than the requested number of items left to retrieve, or if the limitations of the operation have been exceeded.
   *
   * @public
   */
  Trusts?: Trust[] | undefined;

  /**
   * If not null, more results are available. Pass this value for the *NextToken* parameter in a subsequent call to DescribeTrusts to retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUpdateDirectoryRequest {
  /**
   * The unique identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The type of updates you want to describe for the directory.
   *
   * @public
   */
  UpdateType: UpdateType | undefined;

  /**
   * The name of the Region.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The `DescribeUpdateDirectoryResult`. NextToken value from a previous call to DescribeUpdateDirectory. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * OS version that the directory needs to be updated to.
 *
 * @public
 */
export interface OSUpdateSettings {
  /**
   * OS version that the directory needs to be updated to.
   *
   * @public
   */
  OSVersion?: OSVersion | undefined;
}

/**
 * The value for a given type of `UpdateSettings`.
 *
 * @public
 */
export interface UpdateValue {
  /**
   * The OS update related settings.
   *
   * @public
   */
  OSUpdateSettings?: OSUpdateSettings | undefined;
}

/**
 * An entry of update information related to a requested update type.
 *
 * @public
 */
export interface UpdateInfoEntry {
  /**
   * The name of the Region.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The status of the update performed on the directory.
   *
   * @public
   */
  Status?: UpdateStatus | undefined;

  /**
   * The reason for the current status of the update type activity.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * This specifies if the update was initiated by the customer or by the service team.
   *
   * @public
   */
  InitiatedBy?: string | undefined;

  /**
   * The new value of the target setting.
   *
   * @public
   */
  NewValue?: UpdateValue | undefined;

  /**
   * The old value of the target setting.
   *
   * @public
   */
  PreviousValue?: UpdateValue | undefined;

  /**
   * The start time of the `UpdateDirectorySetup` for the particular type.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The last updated date and time of a particular directory setting.
   *
   * @public
   */
  LastUpdatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeUpdateDirectoryResult {
  /**
   * The list of update activities on a directory for the requested update type.
   *
   * @public
   */
  UpdateActivities?: UpdateInfoEntry[] | undefined;

  /**
   * If not null, more results are available. Pass this value for the `NextToken` parameter.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains directory limit information for a Region.
 *
 * @public
 */
export interface DirectoryLimits {
  /**
   * The maximum number of cloud directories allowed in the Region.
   *
   * @public
   */
  CloudOnlyDirectoriesLimit?: number | undefined;

  /**
   * The current number of cloud directories in the Region.
   *
   * @public
   */
  CloudOnlyDirectoriesCurrentCount?: number | undefined;

  /**
   * Indicates if the cloud directory limit has been reached.
   *
   * @public
   */
  CloudOnlyDirectoriesLimitReached?: boolean | undefined;

  /**
   * The maximum number of Managed Microsoft AD directories allowed in the region.
   *
   * @public
   */
  CloudOnlyMicrosoftADLimit?: number | undefined;

  /**
   * The current number of Managed Microsoft AD directories in the region.
   *
   * @public
   */
  CloudOnlyMicrosoftADCurrentCount?: number | undefined;

  /**
   * Indicates if the Managed Microsoft AD directory limit has been reached.
   *
   * @public
   */
  CloudOnlyMicrosoftADLimitReached?: boolean | undefined;

  /**
   * The maximum number of connected directories allowed in the Region.
   *
   * @public
   */
  ConnectedDirectoriesLimit?: number | undefined;

  /**
   * The current number of connected directories in the Region.
   *
   * @public
   */
  ConnectedDirectoriesCurrentCount?: number | undefined;

  /**
   * Indicates if the connected directory limit has been reached.
   *
   * @public
   */
  ConnectedDirectoriesLimitReached?: boolean | undefined;
}

/**
 * Contains the inputs for the DisableCAEnrollmentPolicy operation.
 *
 * @public
 */
export interface DisableCAEnrollmentPolicyRequest {
  /**
   * The identifier of the directory for which to disable the CA enrollment policy.
   *
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * Contains the results of the DisableCAEnrollmentPolicy operation.
 *
 * @public
 */
export interface DisableCAEnrollmentPolicyResult {}

/**
 * @public
 */
export interface DisableClientAuthenticationRequest {
  /**
   * The identifier of the directory
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The type of client authentication to disable. Currently the only parameter `"SmartCard"` is supported.
   *
   * @public
   */
  Type: ClientAuthenticationType | undefined;
}

/**
 * @public
 */
export interface DisableClientAuthenticationResult {}

/**
 * @public
 */
export interface DisableDirectoryDataAccessRequest {
  /**
   * The directory identifier.
   *
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface DisableDirectoryDataAccessResult {}

/**
 * @public
 */
export interface DisableLDAPSRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The type of LDAP security to enable. Currently only the value `Client` is supported.
   *
   * @public
   */
  Type: LDAPSType | undefined;
}

/**
 * @public
 */
export interface DisableLDAPSResult {}

/**
 * Contains the inputs for the DisableRadius operation.
 *
 * @public
 */
export interface DisableRadiusRequest {
  /**
   * The identifier of the directory for which to disable MFA.
   *
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * Contains the results of the DisableRadius operation.
 *
 * @public
 */
export interface DisableRadiusResult {}

/**
 * Contains the inputs for the DisableSso operation.
 *
 * @public
 */
export interface DisableSsoRequest {
  /**
   * The identifier of the directory for which to disable single-sign on.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The username of an alternate account to use to disable single-sign on. This is only used for AD Connector directories. This account must have privileges to remove a service principal name.
   *
   * If the AD Connector service account does not have privileges to remove a service principal name, you can specify an alternate account with the *UserName* and *Password* parameters. These credentials are only used to disable single sign-on and are not stored by the service. The AD Connector service account is not changed.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The password of an alternate account to use to disable single-sign on. This is only used for AD Connector directories. For more information, see the *UserName* parameter.
   *
   * @public
   */
  Password?: string | undefined;
}

/**
 * Contains the results of the DisableSso operation.
 *
 * @public
 */
export interface DisableSsoResult {}

/**
 * Contains the inputs for the EnableCAEnrollmentPolicy operation.
 *
 * @public
 */
export interface EnableCAEnrollmentPolicyRequest {
  /**
   * The identifier of the directory for which to enable the CA enrollment policy.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Private Certificate Authority (PCA) connector to use for automatic certificate enrollment. This connector must be properly configured and accessible from the directory.
   *
   * The ARN format is: `arn:aws:pca-connector-ad:region:account-id:connector/connector-id`
   *
   * @public
   */
  PcaConnectorArn: string | undefined;
}

/**
 * Contains the results of the EnableCAEnrollmentPolicy operation.
 *
 * @public
 */
export interface EnableCAEnrollmentPolicyResult {}

/**
 * @public
 */
export interface EnableClientAuthenticationRequest {
  /**
   * The identifier of the specified directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The type of client authentication to enable. Currently only the value `SmartCard` is supported. Smart card authentication in AD Connector requires that you enable Kerberos Constrained Delegation for the Service User to the LDAP service in your self-managed AD.
   *
   * @public
   */
  Type: ClientAuthenticationType | undefined;
}

/**
 * @public
 */
export interface EnableClientAuthenticationResult {}

/**
 * @public
 */
export interface EnableDirectoryDataAccessRequest {
  /**
   * The directory identifier.
   *
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface EnableDirectoryDataAccessResult {}

/**
 * @public
 */
export interface EnableLDAPSRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The type of LDAP security to enable. Currently only the value `Client` is supported.
   *
   * @public
   */
  Type: LDAPSType | undefined;
}

/**
 * @public
 */
export interface EnableLDAPSResult {}

/**
 * Contains the inputs for the EnableRadius operation.
 *
 * @public
 */
export interface EnableRadiusRequest {
  /**
   * The identifier of the directory for which to enable MFA.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * A RadiusSettings object that contains information about the RADIUS server.
   *
   * @public
   */
  RadiusSettings: RadiusSettings | undefined;
}

/**
 * Contains the results of the EnableRadius operation.
 *
 * @public
 */
export interface EnableRadiusResult {}

/**
 * Contains the inputs for the EnableSso operation.
 *
 * @public
 */
export interface EnableSsoRequest {
  /**
   * The identifier of the directory for which to enable single-sign on.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The username of an alternate account to use to enable single-sign on. This is only used for AD Connector directories. This account must have privileges to add a service principal name.
   *
   * If the AD Connector service account does not have privileges to add a service principal name, you can specify an alternate account with the *UserName* and *Password* parameters. These credentials are only used to enable single sign-on and are not stored by the service. The AD Connector service account is not changed.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The password of an alternate account to use to enable single-sign on. This is only used for AD Connector directories. For more information, see the *UserName* parameter.
   *
   * @public
   */
  Password?: string | undefined;
}

/**
 * Contains the results of the EnableSso operation.
 *
 * @public
 */
export interface EnableSsoResult {}

/**
 * Contains the inputs for the GetDirectoryLimits operation.
 *
 * @public
 */
export interface GetDirectoryLimitsRequest {}

/**
 * Contains the results of the GetDirectoryLimits operation.
 *
 * @public
 */
export interface GetDirectoryLimitsResult {
  /**
   * A DirectoryLimits object that contains the directory limits for the current Region.
   *
   * @public
   */
  DirectoryLimits?: DirectoryLimits | undefined;
}

/**
 * Contains the inputs for the GetSnapshotLimits operation.
 *
 * @public
 */
export interface GetSnapshotLimitsRequest {
  /**
   * Contains the identifier of the directory to obtain the limits for.
   *
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * Contains manual snapshot limit information for a directory.
 *
 * @public
 */
export interface SnapshotLimits {
  /**
   * The maximum number of manual snapshots allowed.
   *
   * @public
   */
  ManualSnapshotsLimit?: number | undefined;

  /**
   * The current number of manual snapshots of the directory.
   *
   * @public
   */
  ManualSnapshotsCurrentCount?: number | undefined;

  /**
   * Indicates if the manual snapshot limit has been reached.
   *
   * @public
   */
  ManualSnapshotsLimitReached?: boolean | undefined;
}

/**
 * Contains the results of the GetSnapshotLimits operation.
 *
 * @public
 */
export interface GetSnapshotLimitsResult {
  /**
   * A SnapshotLimits object that contains the manual snapshot limits for the specified directory.
   *
   * @public
   */
  SnapshotLimits?: SnapshotLimits | undefined;
}

/**
 * @public
 */
export interface ListADAssessmentsRequest {
  /**
   * The identifier of the directory for which to list assessments. If not specified, all assessments in your account are returned.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The pagination token from a previous request to ListADAssessments. Pass null if this is the first request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of assessment summaries to return.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListADAssessmentsResult {
  /**
   * A list of assessment summaries containing basic information about each directory assessment.
   *
   * @public
   */
  Assessments?: AssessmentSummary[] | undefined;

  /**
   * If not null, more results are available. Pass this value for the `NextToken` parameter in a subsequent request to retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificatesRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * A token for requesting another page of certificates if the `NextToken` response element indicates that more certificates are available. Use the value of the returned `NextToken` element in your request until the token comes back as `null`. Pass `null` if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items that should show up on one page
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListCertificatesResult {
  /**
   * Indicates whether another page of certificates is available when the number of available certificates exceeds the page limit.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of certificates with basic details including certificate ID, certificate common name, certificate state.
   *
   * @public
   */
  CertificatesInfo?: CertificateInfo[] | undefined;
}

/**
 * @public
 */
export interface ListIpRoutesRequest {
  /**
   * Identifier (ID) of the directory for which you want to retrieve the IP addresses.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The *ListIpRoutes.NextToken* value from a previous call to ListIpRoutes. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Information about one or more IP address blocks.
 *
 * @public
 */
export interface IpRouteInfo {
  /**
   * Identifier (ID) of the directory associated with the IP addresses.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * IP address block in the IpRoute.
   *
   * @public
   */
  CidrIp?: string | undefined;

  /**
   * IPv6 address block in the IpRoute.
   *
   * @public
   */
  CidrIpv6?: string | undefined;

  /**
   * The status of the IP address block.
   *
   * @public
   */
  IpRouteStatusMsg?: IpRouteStatusMsg | undefined;

  /**
   * The date and time the address block was added to the directory.
   *
   * @public
   */
  AddedDateTime?: Date | undefined;

  /**
   * The reason for the IpRouteStatusMsg.
   *
   * @public
   */
  IpRouteStatusReason?: string | undefined;

  /**
   * Description of the IpRouteInfo.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface ListIpRoutesResult {
  /**
   * A list of IpRoutes.
   *
   * @public
   */
  IpRoutesInfo?: IpRouteInfo[] | undefined;

  /**
   * If not null, more results are available. Pass this value for the *NextToken* parameter in a subsequent call to ListIpRoutes to retrieve the next set of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLogSubscriptionsRequest {
  /**
   * If a *DirectoryID* is provided, lists only the log subscription associated with that directory. If no *DirectoryId* is provided, lists all log subscriptions associated with your Amazon Web Services account. If there are no log subscriptions for the Amazon Web Services account or the directory, an empty list will be returned.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The token for the next set of items to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items returned.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination.
 *
 * @public
 */
export interface LogSubscription {
  /**
   * Identifier (ID) of the directory that you want to associate with the log subscription.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The name of the log group.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * The date and time that the log subscription was created.
   *
   * @public
   */
  SubscriptionCreatedDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListLogSubscriptionsResult {
  /**
   * A list of active LogSubscription objects for calling the Amazon Web Services account.
   *
   * @public
   */
  LogSubscriptions?: LogSubscription[] | undefined;

  /**
   * The token for the next set of items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaExtensionsRequest {
  /**
   * The identifier of the directory from which to retrieve the schema extension information.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The `ListSchemaExtensions.NextToken` value from a previous call to `ListSchemaExtensions`. Pass null if this is the first call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Information about a schema extension.
 *
 * @public
 */
export interface SchemaExtensionInfo {
  /**
   * The identifier of the directory to which the schema extension is applied.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The identifier of the schema extension.
   *
   * @public
   */
  SchemaExtensionId?: string | undefined;

  /**
   * A description of the schema extension.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current status of the schema extension.
   *
   * @public
   */
  SchemaExtensionStatus?: SchemaExtensionStatus | undefined;

  /**
   * The reason for the `SchemaExtensionStatus`.
   *
   * @public
   */
  SchemaExtensionStatusReason?: string | undefined;

  /**
   * The date and time that the schema extension started being applied to the directory.
   *
   * @public
   */
  StartDateTime?: Date | undefined;

  /**
   * The date and time that the schema extension was completed.
   *
   * @public
   */
  EndDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSchemaExtensionsResult {
  /**
   * Information about the schema extensions applied to the directory.
   *
   * @public
   */
  SchemaExtensionsInfo?: SchemaExtensionInfo[] | undefined;

  /**
   * If not null, more results are available. Pass this value for the `NextToken` parameter in a subsequent call to `ListSchemaExtensions` to retrieve the next set of items.
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
   * Identifier (ID) of the directory for which you want to retrieve tags.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * List of tags returned by the ListTagsForResource operation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Reserved for future use.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterCertificateRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The certificate PEM string that needs to be registered.
   *
   * @public
   */
  CertificateData: string | undefined;

  /**
   * The function that the registered certificate performs. Valid values include `ClientLDAPS` or `ClientCertAuth`. The default value is `ClientLDAPS`.
   *
   * @public
   */
  Type?: CertificateType | undefined;

  /**
   * A `ClientCertAuthSettings` object that contains client certificate authentication settings.
   *
   * @public
   */
  ClientCertAuthSettings?: ClientCertAuthSettings | undefined;
}

/**
 * @public
 */
export interface RegisterCertificateResult {
  /**
   * The identifier of the certificate.
   *
   * @public
   */
  CertificateId?: string | undefined;
}

/**
 * Registers a new event topic.
 *
 * @public
 */
export interface RegisterEventTopicRequest {
  /**
   * The Directory ID that will publish status messages to the Amazon SNS topic.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The Amazon SNS topic name to which the directory will publish status messages. This Amazon SNS topic must be in the same region as the specified Directory ID.
   *
   * @public
   */
  TopicName: string | undefined;
}

/**
 * The result of a RegisterEventTopic request.
 *
 * @public
 */
export interface RegisterEventTopicResult {}

/**
 * @public
 */
export interface RejectSharedDirectoryRequest {
  /**
   * Identifier of the shared directory in the directory consumer account. This identifier is different for each directory owner account.
   *
   * @public
   */
  SharedDirectoryId: string | undefined;
}

/**
 * @public
 */
export interface RejectSharedDirectoryResult {
  /**
   * Identifier of the shared directory in the directory consumer account.
   *
   * @public
   */
  SharedDirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface RemoveIpRoutesRequest {
  /**
   * Identifier (ID) of the directory from which you want to remove the IP addresses.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * IP address blocks that you want to remove.
   *
   * @public
   */
  CidrIps?: string[] | undefined;

  /**
   * IPv6 address blocks that you want to remove.
   *
   * @public
   */
  CidrIpv6s?: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveIpRoutesResult {}

/**
 * @public
 */
export interface RemoveRegionRequest {
  /**
   * The identifier of the directory for which you want to remove Region replication.
   *
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface RemoveRegionResult {}

/**
 * @public
 */
export interface RemoveTagsFromResourceRequest {
  /**
   * Identifier (ID) of the directory from which to remove the tag.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The tag key (name) of the tag to be removed.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveTagsFromResourceResult {}

/**
 * @public
 */
export interface ResetUserPasswordRequest {
  /**
   * Identifier of the Managed Microsoft AD or Simple AD directory in which the user resides.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The user name of the user whose password will be reset.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The new password that will be reset.
   *
   * @public
   */
  NewPassword: string | undefined;
}

/**
 * @public
 */
export interface ResetUserPasswordResult {}

/**
 * An object representing the inputs for the RestoreFromSnapshot operation.
 *
 * @public
 */
export interface RestoreFromSnapshotRequest {
  /**
   * The identifier of the snapshot to restore from.
   *
   * @public
   */
  SnapshotId: string | undefined;
}

/**
 * Contains the results of the RestoreFromSnapshot operation.
 *
 * @public
 */
export interface RestoreFromSnapshotResult {}

/**
 * Identifier that contains details about the directory consumer account.
 *
 * @public
 */
export interface ShareTarget {
  /**
   * Identifier of the directory consumer account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Type of identifier to be used in the `Id` field.
   *
   * @public
   */
  Type: TargetType | undefined;
}

/**
 * @public
 */
export interface ShareDirectoryRequest {
  /**
   * Identifier of the Managed Microsoft AD directory that you want to share with other Amazon Web Services accounts.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * A directory share request that is sent by the directory owner to the directory consumer. The request includes a typed message to help the directory consumer administrator determine whether to approve or reject the share invitation.
   *
   * @public
   */
  ShareNotes?: string | undefined;

  /**
   * Identifier for the directory consumer account with whom the directory is to be shared.
   *
   * @public
   */
  ShareTarget: ShareTarget | undefined;

  /**
   * The method used when sharing a directory to determine whether the directory should be shared within your Amazon Web Services organization (`ORGANIZATIONS`) or with any Amazon Web Services account by sending a directory sharing request (`HANDSHAKE`).
   *
   * @public
   */
  ShareMethod: ShareMethod | undefined;
}

/**
 * @public
 */
export interface ShareDirectoryResult {
  /**
   * Identifier of the directory that is stored in the directory consumer account that is shared from the specified directory (`DirectoryId`).
   *
   * @public
   */
  SharedDirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface StartADAssessmentRequest {
  /**
   * Configuration parameters for the directory assessment, including DNS server information, domain name, Amazon VPC subnet, and Amazon Web Services System Manager managed node details.
   *
   * @public
   */
  AssessmentConfiguration?: AssessmentConfiguration | undefined;

  /**
   * The identifier of the directory for which to perform the assessment. This should be an existing directory. If the assessment is not for an existing directory, this parameter should be omitted.
   *
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface StartADAssessmentResult {
  /**
   * The unique identifier of the newly started directory assessment. Use this identifier to monitor assessment progress and retrieve results.
   *
   * @public
   */
  AssessmentId?: string | undefined;
}

/**
 * @public
 */
export interface StartSchemaExtensionRequest {
  /**
   * The identifier of the directory for which the schema extension will be applied to.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * If true, creates a snapshot of the directory before applying the schema extension.
   *
   * @public
   */
  CreateSnapshotBeforeSchemaExtension: boolean | undefined;

  /**
   * The LDIF file represented as a string. To construct the LdifContent string, precede each line as it would be formatted in an ldif file with \n. See the example request below for more details. The file size can be no larger than 1MB.
   *
   * @public
   */
  LdifContent: string | undefined;

  /**
   * A description of the schema extension.
   *
   * @public
   */
  Description: string | undefined;
}

/**
 * @public
 */
export interface StartSchemaExtensionResult {
  /**
   * The identifier of the schema extension that will be applied.
   *
   * @public
   */
  SchemaExtensionId?: string | undefined;
}

/**
 * Identifier that contains details about the directory consumer account with whom the directory is being unshared.
 *
 * @public
 */
export interface UnshareTarget {
  /**
   * Identifier of the directory consumer account.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Type of identifier to be used in the *Id* field.
   *
   * @public
   */
  Type: TargetType | undefined;
}

/**
 * @public
 */
export interface UnshareDirectoryRequest {
  /**
   * The identifier of the Managed Microsoft AD directory that you want to stop sharing.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * Identifier for the directory consumer account with whom the directory has to be unshared.
   *
   * @public
   */
  UnshareTarget: UnshareTarget | undefined;
}

/**
 * @public
 */
export interface UnshareDirectoryResult {
  /**
   * Identifier of the directory stored in the directory consumer account that is to be unshared from the specified directory (`DirectoryId`).
   *
   * @public
   */
  SharedDirectoryId?: string | undefined;
}

/**
 * Updates a conditional forwarder.
 *
 * @public
 */
export interface UpdateConditionalForwarderRequest {
  /**
   * The directory ID of the Amazon Web Services directory for which to update the conditional forwarder.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.
   *
   * @public
   */
  RemoteDomainName: string | undefined;

  /**
   * The updated IP addresses of the remote DNS server associated with the conditional forwarder.
   *
   * @public
   */
  DnsIpAddrs?: string[] | undefined;

  /**
   * The updated IPv6 addresses of the remote DNS server associated with the conditional forwarder.
   *
   * @public
   */
  DnsIpv6Addrs?: string[] | undefined;
}

/**
 * The result of an UpdateConditionalForwarder request.
 *
 * @public
 */
export interface UpdateConditionalForwarderResult {}

/**
 * Contains the directory size configuration for update operations.
 *
 * @public
 */
export interface DirectorySizeUpdateSettings {
  /**
   * The target directory size for the update operation.
   *
   * @public
   */
  DirectorySize?: DirectorySize | undefined;
}

/**
 * Contains the network configuration for directory update operations.
 *
 * @public
 */
export interface NetworkUpdateSettings {
  /**
   * The target network type for the directory update.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;

  /**
   * IPv6 addresses of DNS servers or domain controllers in the self-managed directory. Required only when updating an AD Connector directory.
   *
   * @public
   */
  CustomerDnsIpsV6?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDirectorySetupRequest {
  /**
   * The identifier of the directory to update.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The type of update to perform on the directory.
   *
   * @public
   */
  UpdateType: UpdateType | undefined;

  /**
   * Operating system configuration to apply during the directory update operation.
   *
   * @public
   */
  OSUpdateSettings?: OSUpdateSettings | undefined;

  /**
   * Directory size configuration to apply during the update operation.
   *
   * @public
   */
  DirectorySizeUpdateSettings?: DirectorySizeUpdateSettings | undefined;

  /**
   * Network configuration to apply during the directory update operation.
   *
   * @public
   */
  NetworkUpdateSettings?: NetworkUpdateSettings | undefined;

  /**
   * Specifies whether to create a directory snapshot before performing the update.
   *
   * @public
   */
  CreateSnapshotBeforeUpdate?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDirectorySetupResult {}

/**
 * Use to recover to the hybrid directory administrator account credentials.
 *
 * @public
 */
export interface HybridAdministratorAccountUpdate {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials for the AD administrator user, and enables hybrid domain controllers to join the managed AD domain. For example:
   *
   * `\{"customerAdAdminDomainUsername":"carlos_salazar","customerAdAdminDomainPassword":"ExamplePassword123!"\}.`
   *
   * @public
   */
  SecretArn: string | undefined;
}

/**
 * Contains configuration settings for self-managed instances with SSM used in hybrid directory operations.
 *
 * @public
 */
export interface HybridCustomerInstancesSettings {
  /**
   * The IP addresses of the DNS servers or domain controllers in your self-managed AD environment.
   *
   * @public
   */
  CustomerDnsIps: string[] | undefined;

  /**
   * The identifiers of the self-managed instances with SSM used in hybrid directory.
   *
   * @public
   */
  InstanceIds: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateHybridADRequest {
  /**
   * The identifier of the hybrid directory to update.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * We create a hybrid directory administrator account when we create a hybrid directory. Use `HybridAdministratorAccountUpdate` to recover the hybrid directory administrator account if you have deleted it.
   *
   * To recover your hybrid directory administrator account, we need temporary access to a user in your self-managed AD with administrator permissions in the form of a secret from Amazon Web Services Secrets Manager. We use these credentials once during recovery and don't store them.
   *
   * If your hybrid directory administrator account exists, then you don’t need to use `HybridAdministratorAccountUpdate`, even if you have updated your self-managed AD administrator user.
   *
   * @public
   */
  HybridAdministratorAccountUpdate?: HybridAdministratorAccountUpdate | undefined;

  /**
   * Updates to the self-managed AD configuration, including DNS server IP addresses and Amazon Web Services System Manager managed node identifiers.
   *
   * @public
   */
  SelfManagedInstancesSettings?: HybridCustomerInstancesSettings | undefined;
}

/**
 * @public
 */
export interface UpdateHybridADResult {
  /**
   * The identifier of the updated hybrid directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The identifier of the assessment performed to validate the update configuration. This assessment ensures the updated settings are compatible with your environment.
   *
   * @public
   */
  AssessmentId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNumberOfDomainControllersRequest {
  /**
   * Identifier of the directory to which the domain controllers will be added or removed.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The number of domain controllers desired in the directory.
   *
   * @public
   */
  DesiredNumber: number | undefined;
}

/**
 * @public
 */
export interface UpdateNumberOfDomainControllersResult {}

/**
 * Contains the inputs for the UpdateRadius operation.
 *
 * @public
 */
export interface UpdateRadiusRequest {
  /**
   * The identifier of the directory for which to update the RADIUS server information.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * A RadiusSettings object that contains information about the RADIUS server.
   *
   * @public
   */
  RadiusSettings: RadiusSettings | undefined;
}

/**
 * Contains the results of the UpdateRadius operation.
 *
 * @public
 */
export interface UpdateRadiusResult {}

/**
 * Contains information about the configurable settings for a directory.
 *
 * @public
 */
export interface Setting {
  /**
   * The name of the directory setting. For example:
   *
   * `TLS_1_0`
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the directory setting for which to retrieve information. For example, for `TLS_1_0`, the valid values are: `Enable` and `Disable`.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface UpdateSettingsRequest {
  /**
   * The identifier of the directory for which to update settings.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The list of Setting objects.
   *
   * @public
   */
  Settings: Setting[] | undefined;
}

/**
 * @public
 */
export interface UpdateSettingsResult {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrustRequest {
  /**
   * Identifier of the trust relationship.
   *
   * @public
   */
  TrustId: string | undefined;

  /**
   * Updates selective authentication for the trust.
   *
   * @public
   */
  SelectiveAuth?: SelectiveAuth | undefined;
}

/**
 * @public
 */
export interface UpdateTrustResult {
  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * Identifier of the trust relationship.
   *
   * @public
   */
  TrustId?: string | undefined;
}

/**
 * Initiates the verification of an existing trust relationship between an Managed Microsoft AD directory and an external domain.
 *
 * @public
 */
export interface VerifyTrustRequest {
  /**
   * The unique Trust ID of the trust relationship to verify.
   *
   * @public
   */
  TrustId: string | undefined;
}

/**
 * Result of a VerifyTrust request.
 *
 * @public
 */
export interface VerifyTrustResult {
  /**
   * The unique Trust ID of the trust relationship that was verified.
   *
   * @public
   */
  TrustId?: string | undefined;
}

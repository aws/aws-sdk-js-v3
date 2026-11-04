// smithy-typescript generated code
import type {
  ActivityType,
  AdminStatus,
  AssociationMode,
  AutoEnableMembers,
  CloudProvider,
  ClusterStatus,
  ConfidenceLevel,
  ContentPolicyFilterAction,
  ContentPolicyFilterType,
  CoverageFilterCriterionKey,
  CoverageSortKey,
  CoverageStatisticsType,
  CoverageStatus,
  CriterionKey,
  DataSourceStatus,
  DestinationType,
  DetectionRuleConfigurationStatus,
  DetectionRuleFilterCondition,
  DetectorFeature,
  DetectorFeatureResult,
  EcsClusterStatus,
  EcsLaunchType,
  FeatureAdditionalConfiguration,
  FeatureStatus,
  FilterAction,
  FilterFieldName,
  FindingPublishingFrequency,
  FindingResourceType,
  FreeTrialFeatureResult,
  GuardrailAction,
  GuardrailSource,
  IndicatorType,
  IpSetFormat,
  KubernetesResourcesTypes,
  MalwareProtectionPlanTaggingActionStatus,
  MalwareProtectionScanType,
  ManagedBy,
  ManagementType,
  MfaStatus,
  NetworkDirection,
  OrderBy,
  OrgFeature,
  OrgFeatureAdditionalConfiguration,
  OrgFeatureStatus,
  ProfileSubtype,
  ProfileType,
  PublicAccessStatus,
  PublicAclIgnoreBehavior,
  PublicBucketRestrictBehavior,
  PublishingStatus,
  ResourceType,
  ScanCategory,
  ScanResult,
  ScanStatus,
  ScanType,
  SignalType,
  ThreatEntitySetFormat,
  ThreatIntelSetFormat,
  TriggerType,
  TrustedEntitySetFormat,
} from "./enums";

/**
 * @public
 */
export interface AcceptAdministratorInvitationRequest {
  /**
   * The unique ID of the detector of the GuardDuty member account.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The account ID of the GuardDuty administrator account whose invitation you're accepting.
   *
   * @public
   */
  AdministratorId: string | undefined;

  /**
   * The value that is used to validate the administrator account to the member account.
   *
   * @public
   */
  InvitationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptAdministratorInvitationResponse {}

/**
 * @deprecated This input is deprecated, use AcceptAdministratorInvitationRequest instead.
 * @public
 */
export interface AcceptInvitationRequest {
  /**
   * The unique ID of the detector of the GuardDuty member account.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The account ID of the GuardDuty administrator account whose invitation you're accepting.
   *
   * @public
   */
  MasterId: string | undefined;

  /**
   * The value that is used to validate the administrator account to the member account.
   *
   * @public
   */
  InvitationId: string | undefined;
}

/**
 * @deprecated This output is deprecated, use AcceptAdministratorInvitationResponse instead.
 * @public
 */
export interface AcceptInvitationResponse {}

/**
 * Contains information on the current access control policies for the bucket.
 *
 * @public
 */
export interface AccessControlList {
  /**
   * A value that indicates whether public read access for the bucket is enabled through an Access Control List (ACL).
   *
   * @public
   */
  AllowsPublicReadAccess?: boolean | undefined;

  /**
   * A value that indicates whether public write access for the bucket is enabled through an Access Control List (ACL).
   *
   * @public
   */
  AllowsPublicWriteAccess?: boolean | undefined;
}

/**
 * Contains information about the access keys.
 *
 * @public
 */
export interface AccessKey {
  /**
   * Principal ID of the user.
   *
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * Name of the user.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * Type of the user.
   *
   * @public
   */
  UserType?: string | undefined;
}

/**
 * Contains information about the access keys.
 *
 * @public
 */
export interface AccessKeyDetails {
  /**
   * The access key ID of the user.
   *
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * The principal ID of the user.
   *
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The type of the user.
   *
   * @public
   */
  UserType?: string | undefined;
}

/**
 * Contains information about the Amazon Web Services account within which the activity took place.
 *
 * @public
 */
export interface Account {
  /**
   * The Amazon Web Services account ID within which the activity took place. This may differ from the account that owns the user identity.
   *
   * @public
   */
  Uid: string | undefined;

  /**
   * Name of the member's Amazon Web Services account.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Contains information about the account.
 *
 * @public
 */
export interface AccountDetail {
  /**
   * The member account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The email address of the member account. The following list includes the rules for a valid email address:
   *
   * - The email address must be a minimum of 6 and a maximum of 64 characters long.
   * - All characters must be 7-bit ASCII characters.
   * - There must be one and only one @ symbol, which separates the local name from the domain name.
   * - The local name can't contain any of the following characters:
   *
   *   whitespace, " ' ( ) &lt; &gt; [ ] : ' , \ | % &amp;
   * - The local name can't begin with a dot (.).
   * - The domain name can consist of only the characters [a-z], [A-Z], [0-9], hyphen (-), or dot (.).
   * - The domain name can't begin or end with a dot (.) or hyphen (-).
   * - The domain name must contain at least one dot.
   *
   * @public
   */
  Email: string | undefined;
}

/**
 * Contains information about which data sources are enabled for the GuardDuty member account.
 *
 * @public
 */
export interface DataSourceFreeTrial {
  /**
   * A value that specifies the number of days left to use each enabled data source.
   *
   * @public
   */
  FreeTrialDaysRemaining?: number | undefined;
}

/**
 * Provides details about the Kubernetes resources when it is enabled as a data source.
 *
 * @public
 */
export interface KubernetesDataSourceFreeTrial {
  /**
   * Describes whether Kubernetes audit logs are enabled as a data source.
   *
   * @public
   */
  AuditLogs?: DataSourceFreeTrial | undefined;
}

/**
 * Provides details about Malware Protection when it is enabled as a data source.
 *
 * @public
 */
export interface MalwareProtectionDataSourceFreeTrial {
  /**
   * Describes whether Malware Protection for EC2 instances with findings is enabled as a data source.
   *
   * @public
   */
  ScanEc2InstanceWithFindings?: DataSourceFreeTrial | undefined;
}

/**
 * Contains information about which data sources are enabled for the GuardDuty member account.
 *
 * @public
 */
export interface DataSourcesFreeTrial {
  /**
   * Describes whether any Amazon Web Services CloudTrail management event logs are enabled as data sources.
   *
   * @public
   */
  CloudTrail?: DataSourceFreeTrial | undefined;

  /**
   * Describes whether any DNS logs are enabled as data sources.
   *
   * @public
   */
  DnsLogs?: DataSourceFreeTrial | undefined;

  /**
   * Describes whether any VPC Flow logs are enabled as data sources.
   *
   * @public
   */
  FlowLogs?: DataSourceFreeTrial | undefined;

  /**
   * Describes whether any S3 data event logs are enabled as data sources.
   *
   * @public
   */
  S3Logs?: DataSourceFreeTrial | undefined;

  /**
   * Describes whether any Kubernetes logs are enabled as data sources.
   *
   * @public
   */
  Kubernetes?: KubernetesDataSourceFreeTrial | undefined;

  /**
   * Describes whether Malware Protection is enabled as a data source.
   *
   * @public
   */
  MalwareProtection?: MalwareProtectionDataSourceFreeTrial | undefined;
}

/**
 * Contains information about the free trial period for a feature.
 *
 * @public
 */
export interface FreeTrialFeatureConfigurationResult {
  /**
   * The name of the feature for which the free trial is configured.
   *
   * @public
   */
  Name?: FreeTrialFeatureResult | undefined;

  /**
   * The number of the remaining free trial days for the feature.
   *
   * @public
   */
  FreeTrialDaysRemaining?: number | undefined;
}

/**
 * Provides details of the GuardDuty member account that uses a free trial service.
 *
 * @public
 */
export interface AccountFreeTrialInfo {
  /**
   * The account identifier of the GuardDuty member account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Describes the data source enabled for the GuardDuty member account.
   *
   * @deprecated This parameter is deprecated, use Features instead.
   * @public
   */
  DataSources?: DataSourcesFreeTrial | undefined;

  /**
   * A list of features enabled for the GuardDuty account.
   *
   * @public
   */
  Features?: FreeTrialFeatureConfigurationResult[] | undefined;
}

/**
 * Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See [S3 Block Public Access](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html) for more information.
 *
 * @public
 */
export interface BlockPublicAccess {
  /**
   * Indicates if S3 Block Public Access is set to `IgnorePublicAcls`.
   *
   * @public
   */
  IgnorePublicAcls?: boolean | undefined;

  /**
   * Indicates if S3 Block Public Access is set to `RestrictPublicBuckets`.
   *
   * @public
   */
  RestrictPublicBuckets?: boolean | undefined;

  /**
   * Indicates if S3 Block Public Access is set to `BlockPublicAcls`.
   *
   * @public
   */
  BlockPublicAcls?: boolean | undefined;

  /**
   * Indicates if S3 Block Public Access is set to `BlockPublicPolicy`.
   *
   * @public
   */
  BlockPublicPolicy?: boolean | undefined;
}

/**
 * Contains information about the account level permissions on the S3 bucket.
 *
 * @public
 */
export interface AccountLevelPermissions {
  /**
   * Describes the S3 Block Public Access settings of the bucket's parent account.
   *
   * @public
   */
  BlockPublicAccess?: BlockPublicAccess | undefined;
}

/**
 * Represents a list of map of accounts with the number of findings associated with each account.
 *
 * @public
 */
export interface AccountStatistics {
  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The timestamp at which the finding for this account was last generated.
   *
   * @public
   */
  LastGeneratedAt?: Date | undefined;

  /**
   * The total number of findings associated with an account.
   *
   * @public
   */
  TotalFindings?: number | undefined;
}

/**
 * Contains information about the domain.
 *
 * @public
 */
export interface DomainDetails {
  /**
   * The domain information for the Amazon Web Services API call.
   *
   * @public
   */
  Domain?: string | undefined;
}

/**
 * Contains details about the remote Amazon Web Services account that made the API call.
 *
 * @public
 */
export interface RemoteAccountDetails {
  /**
   * The Amazon Web Services account ID of the remote API caller.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Details on whether the Amazon Web Services account of the remote API caller is related to your GuardDuty environment. If this value is `True` the API caller is affiliated to your account in some way. If it is `False` the API caller is from outside your environment.
   *
   * @public
   */
  Affiliated?: boolean | undefined;

  /**
   * If the remote account belongs to an Amazon Web Services service, this field indicates which service the remote account belongs to.
   *
   * @public
   */
  AwsServiceName?: string | undefined;
}

/**
 * Contains information about the city associated with the IP address.
 *
 * @public
 */
export interface City {
  /**
   * The city name of the remote IP address.
   *
   * @public
   */
  CityName?: string | undefined;
}

/**
 * Contains information about the country where the remote IP address is located.
 *
 * @public
 */
export interface Country {
  /**
   * The country code of the remote IP address.
   *
   * @public
   */
  CountryCode?: string | undefined;

  /**
   * The country name of the remote IP address.
   *
   * @public
   */
  CountryName?: string | undefined;
}

/**
 * Contains information about the location of the remote IP address. By default, GuardDuty returns `Geolocation` with `Lat` and `Lon` as `0.0`.
 *
 * @public
 */
export interface GeoLocation {
  /**
   * The latitude information of the remote IP address.
   *
   * @public
   */
  Lat?: number | undefined;

  /**
   * The longitude information of the remote IP address.
   *
   * @public
   */
  Lon?: number | undefined;
}

/**
 * Contains information about the ISP organization of the remote IP address.
 *
 * @public
 */
export interface Organization {
  /**
   * The Autonomous System Number (ASN) of the internet provider of the remote IP address.
   *
   * @public
   */
  Asn?: string | undefined;

  /**
   * The organization that registered this ASN.
   *
   * @public
   */
  AsnOrg?: string | undefined;

  /**
   * The ISP information for the internet provider.
   *
   * @public
   */
  Isp?: string | undefined;

  /**
   * The name of the internet provider.
   *
   * @public
   */
  Org?: string | undefined;
}

/**
 * Contains information about the remote IP address of the connection.
 *
 * @public
 */
export interface RemoteIpDetails {
  /**
   * The city information of the remote IP address.
   *
   * @public
   */
  City?: City | undefined;

  /**
   * The country code of the remote IP address.
   *
   * @public
   */
  Country?: Country | undefined;

  /**
   * The location information of the remote IP address.
   *
   * @public
   */
  GeoLocation?: GeoLocation | undefined;

  /**
   * The IPv4 remote address of the connection.
   *
   * @public
   */
  IpAddressV4?: string | undefined;

  /**
   * The IPv6 remote address of the connection.
   *
   * @public
   */
  IpAddressV6?: string | undefined;

  /**
   * The ISP organization information of the remote IP address.
   *
   * @public
   */
  Organization?: Organization | undefined;
}

/**
 * Contains information about the API action.
 *
 * @public
 */
export interface AwsApiCallAction {
  /**
   * The Amazon Web Services API name.
   *
   * @public
   */
  Api?: string | undefined;

  /**
   * The Amazon Web Services API caller type.
   *
   * @public
   */
  CallerType?: string | undefined;

  /**
   * The domain information for the Amazon Web Services API call.
   *
   * @public
   */
  DomainDetails?: DomainDetails | undefined;

  /**
   * The error code of the failed Amazon Web Services API action.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The agent through which the API request was made.
   *
   * @public
   */
  UserAgent?: string | undefined;

  /**
   * The remote IP information of the connection that initiated the Amazon Web Services API call.
   *
   * @public
   */
  RemoteIpDetails?: RemoteIpDetails | undefined;

  /**
   * The Amazon Web Services service name whose API was invoked.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The details of the Amazon Web Services account that made the API call. This field appears if the call was made from outside your account.
   *
   * @public
   */
  RemoteAccountDetails?: RemoteAccountDetails | undefined;

  /**
   * The details of the Amazon Web Services account that made the API call. This field identifies the resources that were affected by this API call.
   *
   * @public
   */
  AffectedResources?: Record<string, string> | undefined;
}

/**
 * Contains information about the DNS_REQUEST action described in this finding.
 *
 * @public
 */
export interface DnsRequestAction {
  /**
   * The domain information for the DNS query.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The network connection protocol observed in the activity that prompted GuardDuty to generate the finding.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * Indicates whether the targeted port is blocked.
   *
   * @public
   */
  Blocked?: boolean | undefined;

  /**
   * The second and top level domain involved in the activity that potentially prompted GuardDuty to generate this finding. For a list of top-level and second-level domains, see [public suffix list](https://publicsuffix.org/).
   *
   * @public
   */
  DomainWithSuffix?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the VPC through which the DNS request was made.
   *
   * @public
   */
  VpcOwnerAccountId?: string | undefined;
}

/**
 * Information about the Kubernetes API call action described in this finding.
 *
 * @public
 */
export interface KubernetesApiCallAction {
  /**
   * The Kubernetes API request URI.
   *
   * @public
   */
  RequestUri?: string | undefined;

  /**
   * The Kubernetes API request HTTP verb.
   *
   * @public
   */
  Verb?: string | undefined;

  /**
   * The resource component in the Kubernetes API call action.
   *
   * @public
   */
  Resource?: string | undefined;

  /**
   * The name of the sub-resource in the Kubernetes API call action.
   *
   * @public
   */
  Subresource?: string | undefined;

  /**
   * The name of the namespace where the Kubernetes API call action takes place.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the resource in the Kubernetes API call action.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The IP of the Kubernetes API caller and the IPs of any proxies or load balancers between the caller and the API endpoint.
   *
   * @public
   */
  SourceIps?: string[] | undefined;

  /**
   * The user agent of the caller of the Kubernetes API.
   *
   * @public
   */
  UserAgent?: string | undefined;

  /**
   * Contains information about the remote IP address of the connection.
   *
   * @public
   */
  RemoteIpDetails?: RemoteIpDetails | undefined;

  /**
   * The resulting HTTP response code of the Kubernetes API call action.
   *
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * Parameters related to the Kubernetes API call action.
   *
   * @public
   */
  Parameters?: string | undefined;
}

/**
 * Information about the Kubernetes API for which you check if you have permission to call.
 *
 * @public
 */
export interface KubernetesPermissionCheckedDetails {
  /**
   * The verb component of the Kubernetes API call. For example, when you check whether or not you have the permission to call the `CreatePod` API, the verb component will be `Create`.
   *
   * @public
   */
  Verb?: string | undefined;

  /**
   * The Kubernetes resource with which your Kubernetes API call will interact.
   *
   * @public
   */
  Resource?: string | undefined;

  /**
   * The namespace where the Kubernetes API action will take place.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * Information whether the user has the permission to call the Kubernetes API.
   *
   * @public
   */
  Allowed?: boolean | undefined;
}

/**
 * Contains information about the role binding that grants the permission defined in a Kubernetes role.
 *
 * @public
 */
export interface KubernetesRoleBindingDetails {
  /**
   * The kind of the role. For role binding, this value will be `RoleBinding`.
   *
   * @public
   */
  Kind?: string | undefined;

  /**
   * The name of the `RoleBinding`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier of the role binding.
   *
   * @public
   */
  Uid?: string | undefined;

  /**
   * The name of the role being referenced. This must match the name of the `Role` or `ClusterRole` that you want to bind to.
   *
   * @public
   */
  RoleRefName?: string | undefined;

  /**
   * The type of the role being referenced. This could be either `Role` or `ClusterRole`.
   *
   * @public
   */
  RoleRefKind?: string | undefined;
}

/**
 * Information about the Kubernetes role name and role type.
 *
 * @public
 */
export interface KubernetesRoleDetails {
  /**
   * The kind of role. For this API, the value of `kind` will be `Role`.
   *
   * @public
   */
  Kind?: string | undefined;

  /**
   * The name of the Kubernetes role.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The unique identifier of the Kubernetes role name.
   *
   * @public
   */
  Uid?: string | undefined;
}

/**
 * Contains information about the local IP address of the connection.
 *
 * @public
 */
export interface LocalIpDetails {
  /**
   * The IPv4 local address of the connection.
   *
   * @public
   */
  IpAddressV4?: string | undefined;

  /**
   * The IPv6 local address of the connection.
   *
   * @public
   */
  IpAddressV6?: string | undefined;
}

/**
 * Contains information about the port for the local connection.
 *
 * @public
 */
export interface LocalPortDetails {
  /**
   * The port number of the local connection.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The port name of the local connection.
   *
   * @public
   */
  PortName?: string | undefined;
}

/**
 * Contains information about the remote port.
 *
 * @public
 */
export interface RemotePortDetails {
  /**
   * The port number of the remote connection.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * The port name of the remote connection.
   *
   * @public
   */
  PortName?: string | undefined;
}

/**
 * Contains information about the NETWORK_CONNECTION action described in the finding.
 *
 * @public
 */
export interface NetworkConnectionAction {
  /**
   * Indicates whether EC2 blocked the network connection to your instance.
   *
   * @public
   */
  Blocked?: boolean | undefined;

  /**
   * The network connection direction.
   *
   * @public
   */
  ConnectionDirection?: string | undefined;

  /**
   * The local port information of the connection.
   *
   * @public
   */
  LocalPortDetails?: LocalPortDetails | undefined;

  /**
   * The network connection protocol.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The local IP information of the connection.
   *
   * @public
   */
  LocalIpDetails?: LocalIpDetails | undefined;

  /**
   * The EC2 instance's local elastic network interface utilized for the connection.
   *
   * @public
   */
  LocalNetworkInterface?: string | undefined;

  /**
   * The remote IP information of the connection.
   *
   * @public
   */
  RemoteIpDetails?: RemoteIpDetails | undefined;

  /**
   * The remote port information of the connection.
   *
   * @public
   */
  RemotePortDetails?: RemotePortDetails | undefined;
}

/**
 * Contains information about the port probe details.
 *
 * @public
 */
export interface PortProbeDetail {
  /**
   * The local port information of the connection.
   *
   * @public
   */
  LocalPortDetails?: LocalPortDetails | undefined;

  /**
   * The local IP information of the connection.
   *
   * @public
   */
  LocalIpDetails?: LocalIpDetails | undefined;

  /**
   * The remote IP information of the connection.
   *
   * @public
   */
  RemoteIpDetails?: RemoteIpDetails | undefined;
}

/**
 * Contains information about the PORT_PROBE action described in the finding.
 *
 * @public
 */
export interface PortProbeAction {
  /**
   * Indicates whether EC2 blocked the port probe to the instance, such as with an ACL.
   *
   * @public
   */
  Blocked?: boolean | undefined;

  /**
   * A list of objects related to port probe details.
   *
   * @public
   */
  PortProbeDetails?: PortProbeDetail[] | undefined;
}

/**
 * Information about the login attempts.
 *
 * @public
 */
export interface LoginAttribute {
  /**
   * Indicates the user name which attempted to log in.
   *
   * @public
   */
  User?: string | undefined;

  /**
   * Indicates the application name used to attempt log in.
   *
   * @public
   */
  Application?: string | undefined;

  /**
   * Represents the sum of failed (unsuccessful) login attempts made to establish a connection to the database instance.
   *
   * @public
   */
  FailedLoginAttempts?: number | undefined;

  /**
   * Represents the sum of successful connections (a correct combination of login attributes) made to the database instance by the actor.
   *
   * @public
   */
  SuccessfulLoginAttempts?: number | undefined;
}

/**
 * Indicates that a login attempt was made to the potentially compromised database from a remote IP address.
 *
 * @public
 */
export interface RdsLoginAttemptAction {
  /**
   * Contains information about the remote IP address of the connection.
   *
   * @public
   */
  RemoteIpDetails?: RemoteIpDetails | undefined;

  /**
   * Indicates the login attributes used in the login attempt.
   *
   * @public
   */
  LoginAttributes?: LoginAttribute[] | undefined;
}

/**
 * Contains information about actions.
 *
 * @public
 */
export interface Action {
  /**
   * The GuardDuty finding activity type.
   *
   * @public
   */
  ActionType?: string | undefined;

  /**
   * Information about the AWS_API_CALL action described in this finding.
   *
   * @public
   */
  AwsApiCallAction?: AwsApiCallAction | undefined;

  /**
   * Information about the DNS_REQUEST action described in this finding.
   *
   * @public
   */
  DnsRequestAction?: DnsRequestAction | undefined;

  /**
   * Information about the NETWORK_CONNECTION action described in this finding.
   *
   * @public
   */
  NetworkConnectionAction?: NetworkConnectionAction | undefined;

  /**
   * Information about the PORT_PROBE action described in this finding.
   *
   * @public
   */
  PortProbeAction?: PortProbeAction | undefined;

  /**
   * Information about the Kubernetes API call action described in this finding.
   *
   * @public
   */
  KubernetesApiCallAction?: KubernetesApiCallAction | undefined;

  /**
   * Information whether the user has the permission to use a specific Kubernetes API.
   *
   * @public
   */
  KubernetesPermissionCheckedDetails?: KubernetesPermissionCheckedDetails | undefined;

  /**
   * Information about the role binding that grants the permission defined in a Kubernetes role.
   *
   * @public
   */
  KubernetesRoleBindingDetails?: KubernetesRoleBindingDetails | undefined;

  /**
   * Information about the Kubernetes role name and role type.
   *
   * @public
   */
  KubernetesRoleDetails?: KubernetesRoleDetails | undefined;

  /**
   * Information about `RDS_LOGIN_ATTEMPT` action described in this finding.
   *
   * @public
   */
  RdsLoginAttemptAction?: RdsLoginAttemptAction | undefined;
}

/**
 * Contains information about an API call that was observed as part of an activity.
 *
 * @public
 */
export interface ApiCall {
  /**
   * The name of the API operation that was invoked.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The service that the API operation was invoked against.
   *
   * @public
   */
  Service?: string | undefined;

  /**
   * The error code that was returned, if the API call failed.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * User agent in the request to the API operation
   *
   * @public
   */
  UserAgent?: string | undefined;
}

/**
 * Contains information about an activity, such as an API call, that was observed for a signal.
 *
 * @public
 */
export interface Activity {
  /**
   * The type of the observed activity.
   *
   * @public
   */
  Type: ActivityType | undefined;

  /**
   * Contains information about the API call that was observed, when the activity type is `API_CALL`.
   *
   * @public
   */
  Api?: ApiCall | undefined;
}

/**
 * Contains information about a process involved in a GuardDuty finding, including process identification, execution details, and file information.
 *
 * @public
 */
export interface ActorProcess {
  /**
   * The name of the process as it appears in the system.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The full file path to the process executable on the system.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The SHA256 hash of the process executable file, which can be used for identification and verification purposes.
   *
   * @public
   */
  Sha256?: string | undefined;
}

/**
 * Contains information about the authenticated session.
 *
 * @public
 */
export interface Session {
  /**
   * The unique identifier of the session.
   *
   * @public
   */
  Uid?: string | undefined;

  /**
   * Indicates whether or not multi-factor authencation (MFA) was used during authentication.
   *
   * In Amazon Web Services CloudTrail, you can find this value as `userIdentity.sessionContext.attributes.mfaAuthenticated`.
   *
   * @public
   */
  MfaStatus?: MfaStatus | undefined;

  /**
   * The timestamp for when the session was created.
   *
   * In Amazon Web Services CloudTrail, you can find this value as `userIdentity.sessionContext.attributes.creationDate`.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * Identifier of the session issuer.
   *
   * In Amazon Web Services CloudTrail, you can find this value as `userIdentity.sessionContext.sessionIssuer.arn`.
   *
   * @public
   */
  Issuer?: string | undefined;
}

/**
 * Contains information about the user involved in the attack sequence.
 *
 * @public
 */
export interface User {
  /**
   * The name of the user.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier of the user.
   *
   * @public
   */
  Uid: string | undefined;

  /**
   * The type of the user.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The credentials of the user ID.
   *
   * @public
   */
  CredentialUid?: string | undefined;

  /**
   * Contains information about the Amazon Web Services account within which the activity took place. This is not necessarily the account that owns the user identity.
   *
   * @public
   */
  Account?: Account | undefined;
}

/**
 * Information about the actors involved in an attack sequence.
 *
 * @public
 */
export interface Actor {
  /**
   * ID of the threat actor.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Contains information about the user credentials used by the threat actor.
   *
   * @public
   */
  User?: User | undefined;

  /**
   * Contains information about the user session where the activity initiated.
   *
   * @public
   */
  Session?: Session | undefined;

  /**
   * Contains information about the process associated with the threat actor. This includes details such as process name, path, execution time, and unique identifiers that help track the actor's activities within the system.
   *
   * @public
   */
  Process?: ActorProcess | undefined;
}

/**
 * Contains additional information about the detected threat.
 *
 * @public
 */
export interface AdditionalInfo {
  /**
   * The version ID of the S3 object, if applicable.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The device name of the EBS volume, if applicable.
   *
   * @public
   */
  DeviceName?: string | undefined;
}

/**
 * Information about the installed EKS add-on (GuardDuty security agent).
 *
 * @public
 */
export interface AddonDetails {
  /**
   * Version of the installed EKS add-on.
   *
   * @public
   */
  AddonVersion?: string | undefined;

  /**
   * Status of the installed EKS add-on.
   *
   * @public
   */
  AddonStatus?: string | undefined;
}

/**
 * The account within the organization specified as the GuardDuty delegated administrator.
 *
 * @public
 */
export interface AdminAccount {
  /**
   * The Amazon Web Services account ID for the account.
   *
   * @public
   */
  AdminAccountId?: string | undefined;

  /**
   * Indicates whether the account is enabled as the delegated administrator.
   *
   * @public
   */
  AdminStatus?: AdminStatus | undefined;
}

/**
 * Contains information about the administrator account and invitation.
 *
 * @public
 */
export interface Administrator {
  /**
   * The ID of the account used as the administrator account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The value that is used to validate the administrator account to the member account.
   *
   * @public
   */
  InvitationId?: string | undefined;

  /**
   * The status of the relationship between the administrator and member accounts.
   *
   * @public
   */
  RelationshipStatus?: string | undefined;

  /**
   * The timestamp when the invitation was sent.
   *
   * @public
   */
  InvitedAt?: string | undefined;
}

/**
 * Information about the installed GuardDuty security agent.
 *
 * @public
 */
export interface AgentDetails {
  /**
   * Version of the installed GuardDuty security agent.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Contains information about the observed behavior.
 *
 * @public
 */
export interface Observations {
  /**
   * The text that was unusual.
   *
   * @public
   */
  Text?: string[] | undefined;

  /**
   * The numeric values that were unusual.
   *
   * @public
   */
  Number?: number[] | undefined;
}

/**
 * Contains information about the unusual anomalies.
 *
 * @public
 */
export interface AnomalyObject {
  /**
   * The type of behavior of the profile.
   *
   * @public
   */
  ProfileType?: ProfileType | undefined;

  /**
   * The frequency of the anomaly.
   *
   * @public
   */
  ProfileSubtype?: ProfileSubtype | undefined;

  /**
   * The recorded value.
   *
   * @public
   */
  Observations?: Observations | undefined;
}

/**
 * Contains information about the behavior of the anomaly that is new to GuardDuty.
 *
 * @public
 */
export interface AnomalyUnusual {
  /**
   * The behavior of the anomalous activity that caused GuardDuty to generate the finding.
   *
   * @public
   */
  Behavior?: Record<string, Record<string, AnomalyObject>> | undefined;
}

/**
 * Contains information about the anomalies.
 *
 * @public
 */
export interface Anomaly {
  /**
   * Information about the types of profiles.
   *
   * @public
   */
  Profiles?: Record<string, Record<string, AnomalyObject[]>> | undefined;

  /**
   * Information about the behavior of the anomalies.
   *
   * @public
   */
  Unusual?: AnomalyUnusual | undefined;
}

/**
 * @public
 */
export interface ArchiveFindingsRequest {
  /**
   * The ID of the detector that specifies the GuardDuty service whose findings you want to archive.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The IDs of the findings that you want to archive.
   *
   * @public
   */
  FindingIds: string[] | undefined;
}

/**
 * @public
 */
export interface ArchiveFindingsResponse {}

/**
 * Contains the full details of a custom detection rule association.
 *
 * @public
 */
export interface AssociationDetail {
  /**
   * The unique identifier for the association.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the custom detection rule.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The Amazon Web Services account ID associated with this rule association.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The rule execution mode. Valid values: `LIVE` | `DRY_RUN`.
   *
   * @public
   */
  Mode: AssociationMode | undefined;

  /**
   * The timestamp when the association was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the association was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The timestamp when the association expires.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;
}

/**
 * Contains summary information about a custom detection rule association.
 *
 * @public
 */
export interface AssociationSummary {
  /**
   * The unique identifier for the association.
   *
   * @public
   */
  AssociationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The unique identifier for the custom detection rule.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The rule execution mode. Valid values: `LIVE` | `DRY_RUN`.
   *
   * @public
   */
  Mode: AssociationMode | undefined;

  /**
   * The timestamp when the association was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the association was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The timestamp when the association expires.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;
}

/**
 * Contains information about the Autonomous System (AS) associated with the network endpoints involved in an attack sequence.
 *
 * @public
 */
export interface AutonomousSystem {
  /**
   * Name associated with the Autonomous System (AS).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique number that identifies the Autonomous System (AS).
   *
   * @public
   */
  Number: number | undefined;
}

/**
 * Contains information about the Auto Scaling Group involved in a GuardDuty finding, including unique identifiers of the Amazon EC2 instances.
 *
 * @public
 */
export interface AutoscalingAutoScalingGroup {
  /**
   * A list of unique identifiers for the compromised Amazon EC2 instances that are part of the same Auto Scaling Group.
   *
   * @public
   */
  Ec2InstanceUids?: string[] | undefined;
}

/**
 * Contains information about a Bedrock guardrail associated with a finding.
 *
 * @public
 */
export interface BedrockGuardrail {
  /**
   * The ARN of the Bedrock guardrail.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The version of the Bedrock guardrail.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Contains information about a content policy filter that matched during a guardrail evaluation.
 *
 * @public
 */
export interface ContentPolicyFilter {
  /**
   * The type of content that was filtered by the guardrail.
   *
   * @public
   */
  Type?: ContentPolicyFilterType | undefined;

  /**
   * The confidence level that the content matched the filter.
   *
   * @public
   */
  Confidence?: ConfidenceLevel | undefined;

  /**
   * The action taken by the guardrail filter.
   *
   * @public
   */
  Action?: ContentPolicyFilterAction | undefined;
}

/**
 * Contains information about the Bedrock guardrail that was involved in a finding.
 *
 * @public
 */
export interface BedrockGuardrailDetails {
  /**
   * The ARN of the Bedrock guardrail. This field is deprecated. Use the `guardrails` list instead.
   *
   * @deprecated (since 2026-07-13) Use guardrails list instead.
   * @public
   */
  GuardrailArn?: string | undefined;

  /**
   * The version of the Bedrock guardrail. This field is deprecated. Use the `guardrails` list instead.
   *
   * @deprecated (since 2026-07-13) Use guardrails list instead.
   * @public
   */
  GuardrailVersion?: string | undefined;

  /**
   * The list of Bedrock guardrails associated with the finding.
   *
   * @public
   */
  Guardrails?: BedrockGuardrail[] | undefined;

  /**
   * Indicates whether the guardrail intervened or not.
   *
   * @public
   */
  GuardrailAction?: GuardrailAction | undefined;

  /**
   * Indicates whether the guardrail was applied on the input or output of the model invocation.
   *
   * @public
   */
  GuardrailSource?: GuardrailSource | undefined;

  /**
   * The list of content policy filters that matched during the guardrail evaluation.
   *
   * @public
   */
  ContentPolicyFilters?: ContentPolicyFilter[] | undefined;
}

/**
 * Contains details about an Amazon Bedrock guardrail evaluated during a model invocation.
 *
 * @public
 */
export interface BedrockGuardrailResource {
  /**
   * The version of the Amazon Bedrock guardrail. Valid values are a numeric version, `DRAFT`, or `ENFORCED`.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * Indicates whether the guardrail intervened during the model invocation.
   *
   * @public
   */
  GuardrailAction?: GuardrailAction | undefined;

  /**
   * Indicates whether the guardrail was applied on the input or output of the model invocation.
   *
   * @public
   */
  GuardrailSource?: GuardrailSource | undefined;
}

/**
 * Contains information on the current bucket policies for the S3 bucket.
 *
 * @public
 */
export interface BucketPolicy {
  /**
   * A value that indicates whether public read access for the bucket is enabled through a bucket policy.
   *
   * @public
   */
  AllowsPublicReadAccess?: boolean | undefined;

  /**
   * A value that indicates whether public write access for the bucket is enabled through a bucket policy.
   *
   * @public
   */
  AllowsPublicWriteAccess?: boolean | undefined;
}

/**
 * Contains information about the bucket level permissions for the S3 bucket.
 *
 * @public
 */
export interface BucketLevelPermissions {
  /**
   * Contains information on how Access Control Policies are applied to the bucket.
   *
   * @public
   */
  AccessControlList?: AccessControlList | undefined;

  /**
   * Contains information on the bucket policies for the S3 bucket.
   *
   * @public
   */
  BucketPolicy?: BucketPolicy | undefined;

  /**
   * Contains information on which account level S3 Block Public Access settings are applied to the S3 bucket.
   *
   * @public
   */
  BlockPublicAccess?: BlockPublicAccess | undefined;
}

/**
 * Contains details about the cloud environment associated with an investigation.
 *
 * @public
 */
export interface CloudDetails {
  /**
   * The cloud provider. Currently, only `AWS` is supported.
   *
   * @public
   */
  Provider: CloudProvider | undefined;

  /**
   * The Amazon Web Services Region in which the investigated resource resides.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * The Amazon Web Services account ID of the investigated resource.
   *
   * @public
   */
  Account: string | undefined;
}

/**
 * Contains information about the CloudFormation stack involved in a GuardDuty finding, including unique identifiers of the Amazon EC2 instances.
 *
 * @public
 */
export interface CloudformationStack {
  /**
   * A list of unique identifiers for the compromised Amazon EC2 instances that were created as part of the same CloudFormation stack.
   *
   * @public
   */
  Ec2InstanceUids?: string[] | undefined;
}

/**
 * Contains information on the status of CloudTrail as a data source for the detector.
 *
 * @public
 */
export interface CloudTrailConfigurationResult {
  /**
   * Describes whether CloudTrail is enabled as a data source for the detector.
   *
   * @public
   */
  Status: DataSourceStatus | undefined;
}

/**
 * Contains information about the condition.
 *
 * @public
 */
export interface Condition {
  /**
   * Represents the *equal* condition to be applied to a single field when querying for findings.
   *
   * Max values: 50
   *
   * @deprecated deprecated.
   * @public
   */
  Eq?: string[] | undefined;

  /**
   * Represents the *not equal* condition to be applied to a single field when querying for findings.
   *
   * Max values: 50
   *
   * @deprecated deprecated.
   * @public
   */
  Neq?: string[] | undefined;

  /**
   * Represents a *greater than* condition to be applied to a single field when querying for findings.
   *
   * @deprecated deprecated.
   * @public
   */
  Gt?: number | undefined;

  /**
   * Represents a *greater than or equal* condition to be applied to a single field when querying for findings.
   *
   * @deprecated deprecated.
   * @public
   */
  Gte?: number | undefined;

  /**
   * Represents a *less than* condition to be applied to a single field when querying for findings.
   *
   * @deprecated deprecated.
   * @public
   */
  Lt?: number | undefined;

  /**
   * Represents a *less than or equal* condition to be applied to a single field when querying for findings.
   *
   * @deprecated deprecated.
   * @public
   */
  Lte?: number | undefined;

  /**
   * Represents an *equal* **condition to be applied to a single field when querying for findings.
   *
   * Max values: 50
   *
   * @public**
   */
  Equals?: string[] | undefined;

  /**
   * Represents a *not equal* **condition to be applied to a single field when querying for findings.
   *
   * Max values: 50
   *
   * @public**
   */
  NotEquals?: string[] | undefined;

  /**
   * Represents a *greater than* condition to be applied to a single field when querying for findings.
   *
   * @public
   */
  GreaterThan?: number | undefined;

  /**
   * Represents a *greater than or equal* condition to be applied to a single field when querying for findings.
   *
   * @public
   */
  GreaterThanOrEqual?: number | undefined;

  /**
   * Represents a *less than* condition to be applied to a single field when querying for findings.
   *
   * @public
   */
  LessThan?: number | undefined;

  /**
   * Represents a *less than or equal* condition to be applied to a single field when querying for findings.
   *
   * @public
   */
  LessThanOrEqual?: number | undefined;

  /**
   * Represents the *match* condition to be applied to a single field when querying for findings.
   *
   * > **Note:** The *matches* condition is available only for create-filter and update-filter APIs.
   *
   * @public
   */
  Matches?: string[] | undefined;

  /**
   * Represents the *not match* condition to be applied to a single field when querying for findings.
   *
   * > **Note:** The *not-matches* condition is available only for create-filter and update-filter APIs.
   *
   * @public
   */
  NotMatches?: string[] | undefined;
}

/**
 * Container security context.
 *
 * @public
 */
export interface SecurityContext {
  /**
   * Whether the container is privileged.
   *
   * @public
   */
  Privileged?: boolean | undefined;

  /**
   * Whether or not a container or a Kubernetes pod is allowed to gain more privileges than its parent process.
   *
   * @public
   */
  AllowPrivilegeEscalation?: boolean | undefined;
}

/**
 * Container volume mount.
 *
 * @public
 */
export interface VolumeMount {
  /**
   * Volume mount name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Volume mount path.
   *
   * @public
   */
  MountPath?: string | undefined;
}

/**
 * Details of a container.
 *
 * @public
 */
export interface Container {
  /**
   * The container runtime (such as, Docker or containerd) used to run the container.
   *
   * @public
   */
  ContainerRuntime?: string | undefined;

  /**
   * Container ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Container name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Container image.
   *
   * @public
   */
  Image?: string | undefined;

  /**
   * Part of the image name before the last slash. For example, imagePrefix for public.ecr.aws/amazonlinux/amazonlinux:latest would be public.ecr.aws/amazonlinux. If the image name is relative and does not have a slash, this field is empty.
   *
   * @public
   */
  ImagePrefix?: string | undefined;

  /**
   * Container volume mounts.
   *
   * @public
   */
  VolumeMounts?: VolumeMount[] | undefined;

  /**
   * Container security context.
   *
   * @public
   */
  SecurityContext?: SecurityContext | undefined;
}

/**
 * Contains information about container resources involved in a GuardDuty finding. This structure provides details about containers that were identified as part of suspicious or malicious activity.
 *
 * @public
 */
export interface ContainerFindingResource {
  /**
   * The container image information, including the image name and tag used to run the container that was involved in the finding.
   *
   * @public
   */
  Image: string | undefined;

  /**
   * The unique ID associated with the container image.
   *
   * @public
   */
  ImageUid?: string | undefined;
}

/**
 * Contains information about the Amazon EC2 instance that is running the Amazon ECS container.
 *
 * @public
 */
export interface ContainerInstanceDetails {
  /**
   * Represents the nodes in the Amazon ECS cluster that has a `HEALTHY` coverage status.
   *
   * @public
   */
  CoveredContainerInstances?: number | undefined;

  /**
   * Represents total number of nodes in the Amazon ECS cluster.
   *
   * @public
   */
  CompatibleContainerInstances?: number | undefined;
}

/**
 * Contains information about the time range within the continuous backup in Amazon Web Services Backup to scan for a point-in-time recovery resource.
 *
 * @public
 */
export interface ContinuousScanDetails {
  /**
   * The timestamp representing the start of the time range to scan. Reserved for internal use.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp representing the end of the time range to scan.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * Contains information about the Amazon EC2 instance runtime coverage details.
 *
 * @public
 */
export interface CoverageEc2InstanceDetails {
  /**
   * The Amazon EC2 instance ID.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The instance type of the Amazon EC2 instance.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The cluster ARN of the Amazon ECS cluster running on the Amazon EC2 instance.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * Information about the installed security agent.
   *
   * @public
   */
  AgentDetails?: AgentDetails | undefined;

  /**
   * Indicates how the GuardDuty security agent is managed for this resource.
   *
   * - `AUTO_MANAGED` indicates that GuardDuty deploys and manages updates for this resource.
   * - `MANUAL` indicates that you are responsible to deploy, update, and manage the GuardDuty security agent updates for this resource.
   *
   * > **Note:** The `DISABLED` status doesn't apply to Amazon EC2 instances and Amazon EKS clusters.
   *
   * @public
   */
  ManagementType?: ManagementType | undefined;
}

/**
 * Contains information about Amazon Web Services Fargate details associated with an Amazon ECS cluster.
 *
 * @public
 */
export interface FargateDetails {
  /**
   * Runtime coverage issues identified for the resource running on Amazon Web Services Fargate.
   *
   * @public
   */
  Issues?: string[] | undefined;

  /**
   * Indicates how the GuardDuty security agent is managed for this resource.
   *
   * - `AUTO_MANAGED` indicates that GuardDuty deploys and manages updates for this resource.
   * - `DISABLED` indicates that the deployment of the GuardDuty security agent is disabled for this resource.
   *
   * > **Note:** The `MANUAL` status doesn't apply to the Amazon Web Services Fargate (Amazon ECS only) woprkloads.
   *
   * @public
   */
  ManagementType?: ManagementType | undefined;
}

/**
 * Contains information about Amazon ECS cluster runtime coverage details.
 *
 * @public
 */
export interface CoverageEcsClusterDetails {
  /**
   * The name of the Amazon ECS cluster.
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * Information about the Fargate details associated with the Amazon ECS cluster.
   *
   * @public
   */
  FargateDetails?: FargateDetails | undefined;

  /**
   * Information about the Amazon ECS container running on Amazon EC2 instance.
   *
   * @public
   */
  ContainerInstanceDetails?: ContainerInstanceDetails | undefined;
}

/**
 * Information about the EKS cluster that has a coverage status.
 *
 * @public
 */
export interface CoverageEksClusterDetails {
  /**
   * Name of the EKS cluster.
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * Represents the nodes within the EKS cluster that have a `HEALTHY` coverage status.
   *
   * @public
   */
  CoveredNodes?: number | undefined;

  /**
   * Represents all the nodes within the EKS cluster in your account.
   *
   * @public
   */
  CompatibleNodes?: number | undefined;

  /**
   * Information about the installed EKS add-on.
   *
   * @public
   */
  AddonDetails?: AddonDetails | undefined;

  /**
   * Indicates how the Amazon EKS add-on GuardDuty agent is managed for this EKS cluster.
   *
   * `AUTO_MANAGED` indicates GuardDuty deploys and manages updates for this resource.
   *
   * `MANUAL` indicates that you are responsible to deploy, update, and manage the Amazon EKS add-on GuardDuty agent for this resource.
   *
   * @public
   */
  ManagementType?: ManagementType | undefined;
}

/**
 * Represents a condition that when matched will be added to the response of the operation.
 *
 * @public
 */
export interface CoverageFilterCondition {
  /**
   * Represents an equal condition that is applied to a single field while retrieving the coverage details.
   *
   * @public
   */
  Equals?: string[] | undefined;

  /**
   * Represents a not equal condition that is applied to a single field while retrieving the coverage details.
   *
   * @public
   */
  NotEquals?: string[] | undefined;
}

/**
 * Represents a condition that when matched will be added to the response of the operation.
 *
 * @public
 */
export interface CoverageFilterCriterion {
  /**
   * An enum value representing possible filter fields.
   *
   * > **Note:** Replace the enum value `CLUSTER_NAME` with `EKS_CLUSTER_NAME`. `CLUSTER_NAME` has been deprecated.
   *
   * @public
   */
  CriterionKey?: CoverageFilterCriterionKey | undefined;

  /**
   * Contains information about the condition.
   *
   * @public
   */
  FilterCondition?: CoverageFilterCondition | undefined;
}

/**
 * Represents the criteria used in the filter.
 *
 * @public
 */
export interface CoverageFilterCriteria {
  /**
   * Represents a condition that when matched will be added to the response of the operation.
   *
   * @public
   */
  FilterCriterion?: CoverageFilterCriterion[] | undefined;
}

/**
 * Information about the resource for each individual EKS cluster.
 *
 * @public
 */
export interface CoverageResourceDetails {
  /**
   * EKS cluster details involved in the coverage statistics.
   *
   * @public
   */
  EksClusterDetails?: CoverageEksClusterDetails | undefined;

  /**
   * Information about the Amazon ECS cluster that is assessed for runtime coverage.
   *
   * @public
   */
  EcsClusterDetails?: CoverageEcsClusterDetails | undefined;

  /**
   * Information about the Amazon EC2 instance assessed for runtime coverage.
   *
   * @public
   */
  Ec2InstanceDetails?: CoverageEc2InstanceDetails | undefined;

  /**
   * The type of Amazon Web Services resource.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;
}

/**
 * Information about the resource of the GuardDuty account.
 *
 * @public
 */
export interface CoverageResource {
  /**
   * The unique ID of the resource.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The unique ID of the GuardDuty detector associated with the resource.
   *
   * @public
   */
  DetectorId?: string | undefined;

  /**
   * The unique ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Information about the resource for which the coverage statistics are retrieved.
   *
   * @public
   */
  ResourceDetails?: CoverageResourceDetails | undefined;

  /**
   * Represents the status of the EKS cluster coverage.
   *
   * @public
   */
  CoverageStatus?: CoverageStatus | undefined;

  /**
   * Represents the reason why a coverage status was `UNHEALTHY` for the EKS cluster.
   *
   * @public
   */
  Issue?: string | undefined;

  /**
   * The timestamp at which the coverage details for the resource were last updated. This is in UTC format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * Information about the sorting criteria used in the coverage statistics.
 *
 * @public
 */
export interface CoverageSortCriteria {
  /**
   * Represents the field name used to sort the coverage details.
   *
   * > **Note:** Replace the enum value `CLUSTER_NAME` with `EKS_CLUSTER_NAME`. `CLUSTER_NAME` has been deprecated.
   *
   * @public
   */
  AttributeName?: CoverageSortKey | undefined;

  /**
   * The order in which the sorted findings are to be displayed.
   *
   * @public
   */
  OrderBy?: OrderBy | undefined;
}

/**
 * Information about the coverage statistics for a resource.
 *
 * @public
 */
export interface CoverageStatistics {
  /**
   * Represents coverage statistics for EKS clusters aggregated by resource type.
   *
   * @public
   */
  CountByResourceType?: Partial<Record<ResourceType, number>> | undefined;

  /**
   * Represents coverage statistics for EKS clusters aggregated by coverage status.
   *
   * @public
   */
  CountByCoverageStatus?: Partial<Record<CoverageStatus, number>> | undefined;
}

/**
 * @public
 */
export interface CreateCustomDetectionRuleAssociationRequest {
  /**
   * The unique identifier for the custom detection rule.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The rule execution mode. Valid values: `LIVE` | `DRY_RUN`.
   *
   * @public
   */
  Mode: AssociationMode | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. Maximum 64 characters.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to be added to the new custom detection rule association resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCustomDetectionRuleAssociationResponse {
  /**
   * The details of the newly created custom detection rule association.
   *
   * @public
   */
  RuleAssociation: AssociationDetail | undefined;
}

/**
 * @public
 */
export interface CreateCustomDetectionRuleOrgConfigurationRequest {
  /**
   * The unique identifier for the custom detection rule.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The execution mode of the organization configuration. Valid values: `LIVE` | `DRY_RUN`.
   *
   * @public
   */
  Mode: AssociationMode | undefined;

  /**
   * The account IDs to include in the organization configuration. Mutually exclusive with `ExcludeAccountIds`.
   *
   * @public
   */
  IncludeAccountIds?: string[] | undefined;

  /**
   * The account IDs to exclude from the organization configuration. Mutually exclusive with `IncludeAccountIds`.
   *
   * @public
   */
  ExcludeAccountIds?: string[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomDetectionRuleOrgConfigurationResponse {}

/**
 * Describes whether Kubernetes audit logs are enabled as a data source.
 *
 * @public
 */
export interface KubernetesAuditLogsConfiguration {
  /**
   * The status of Kubernetes audit logs as a data source.
   *
   * @public
   */
  Enable: boolean | undefined;
}

/**
 * Describes whether any Kubernetes data sources are enabled.
 *
 * @public
 */
export interface KubernetesConfiguration {
  /**
   * The status of Kubernetes audit logs as a data source.
   *
   * @public
   */
  AuditLogs: KubernetesAuditLogsConfiguration | undefined;
}

/**
 * Describes whether Malware Protection for EC2 instances with findings will be enabled as a data source.
 *
 * @public
 */
export interface ScanEc2InstanceWithFindings {
  /**
   * Describes the configuration for scanning EBS volumes as data source.
   *
   * @public
   */
  EbsVolumes?: boolean | undefined;
}

/**
 * Describes whether Malware Protection will be enabled as a data source.
 *
 * @public
 */
export interface MalwareProtectionConfiguration {
  /**
   * Describes the configuration of Malware Protection for EC2 instances with findings.
   *
   * @public
   */
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindings | undefined;
}

/**
 * Describes whether S3 data event logs will be enabled as a data source.
 *
 * @public
 */
export interface S3LogsConfiguration {
  /**
   * The status of S3 data event logs as a data source.
   *
   * @public
   */
  Enable: boolean | undefined;
}

/**
 * Contains information about which data sources are enabled.
 *
 * @public
 */
export interface DataSourceConfigurations {
  /**
   * Describes whether S3 data event logs are enabled as a data source.
   *
   * @public
   */
  S3Logs?: S3LogsConfiguration | undefined;

  /**
   * Describes whether any Kubernetes logs are enabled as data sources.
   *
   * @public
   */
  Kubernetes?: KubernetesConfiguration | undefined;

  /**
   * Describes whether Malware Protection is enabled as a data source.
   *
   * @public
   */
  MalwareProtection?: MalwareProtectionConfiguration | undefined;
}

/**
 * Information about the additional configuration for a feature in your GuardDuty account.
 *
 * @public
 */
export interface DetectorAdditionalConfiguration {
  /**
   * Name of the additional configuration.
   *
   * @public
   */
  Name?: FeatureAdditionalConfiguration | undefined;

  /**
   * Status of the additional configuration.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;
}

/**
 * Contains information about a GuardDuty feature.
 *
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`) and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see [Runtime Monitoring](https://docs.aws.amazon.com/guardduty/latest/ug/runtime-monitoring.html).
 *
 * @public
 */
export interface DetectorFeatureConfiguration {
  /**
   * The name of the feature.
   *
   * @public
   */
  Name?: DetectorFeature | undefined;

  /**
   * The status of the feature.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * Additional configuration for a resource.
   *
   * @public
   */
  AdditionalConfiguration?: DetectorAdditionalConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateDetectorRequest {
  /**
   * A Boolean value that specifies whether the detector is to be enabled.
   *
   * @public
   */
  Enable: boolean | undefined;

  /**
   * The idempotency token for the create request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A value that specifies how frequently updated findings are exported.
   *
   * @public
   */
  FindingPublishingFrequency?: FindingPublishingFrequency | undefined;

  /**
   * Describes which data sources will be enabled for the detector.
   *
   * There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see [Regions and endpoints](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html).
   *
   * @deprecated This parameter is deprecated, use Features instead.
   * @public
   */
  DataSources?: DataSourceConfigurations | undefined;

  /**
   * The tags to be added to a new detector resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A list of features that will be configured for the detector.
   *
   * @public
   */
  Features?: DetectorFeatureConfiguration[] | undefined;
}

/**
 * Describes the configuration of scanning EBS volumes as a data source.
 *
 * @public
 */
export interface EbsVolumesResult {
  /**
   * Describes whether scanning EBS volumes is enabled as a data source.
   *
   * @public
   */
  Status?: DataSourceStatus | undefined;

  /**
   * Specifies the reason why scanning EBS volumes (Malware Protection) was not enabled as a data source.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * An object that contains information on the status of whether Malware Protection for EC2 instances with findings will be enabled as a data source.
 *
 * @public
 */
export interface ScanEc2InstanceWithFindingsResult {
  /**
   * Describes the configuration of scanning EBS volumes as a data source.
   *
   * @public
   */
  EbsVolumes?: EbsVolumesResult | undefined;
}

/**
 * An object that contains information on the status of all Malware Protection data sources.
 *
 * @public
 */
export interface MalwareProtectionConfigurationResult {
  /**
   * Describes the configuration of Malware Protection for EC2 instances with findings.
   *
   * @public
   */
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindingsResult | undefined;

  /**
   * The GuardDuty Malware Protection service role.
   *
   * @public
   */
  ServiceRole?: string | undefined;
}

/**
 * Specifies the names of the data sources that couldn't be enabled.
 *
 * @public
 */
export interface UnprocessedDataSourcesResult {
  /**
   * An object that contains information on the status of all Malware Protection data sources.
   *
   * @public
   */
  MalwareProtection?: MalwareProtectionConfigurationResult | undefined;
}

/**
 * @public
 */
export interface CreateDetectorResponse {
  /**
   * The unique ID of the created detector.
   *
   * @public
   */
  DetectorId?: string | undefined;

  /**
   * Specifies the data sources that couldn't be enabled when GuardDuty was enabled for the first time.
   *
   * @public
   */
  UnprocessedDataSources?: UnprocessedDataSourcesResult | undefined;
}

/**
 * Contains information about the criteria used for querying findings.
 *
 * @public
 */
export interface FindingCriteria {
  /**
   * Represents a map of finding properties that match specified conditions and values when querying findings.
   *
   * @public
   */
  Criterion?: Record<string, Condition> | undefined;
}

/**
 * @public
 */
export interface CreateFilterRequest {
  /**
   * The detector ID associated with the GuardDuty account for which you want to create a filter.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The name of the filter. Valid characters include period (.), underscore (_), dash (-), and alphanumeric characters. A whitespace is considered to be an invalid character.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (`\{ \}`, `[ ]`, and `( )`), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the action that is to be applied to the findings that match the filter.
   *
   * Default: NOOP
   *
   * @public
   */
  Action?: FilterAction | undefined;

  /**
   * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
   *
   * @public
   */
  Rank?: number | undefined;

  /**
   * Represents the criteria to be used in the filter for querying findings. The following fields are available for filtering:
   *
   * - accountId
   * - arn
   * - associatedAttackSequenceArn
   * - confidence
   * - createdAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - id
   * - partition
   * - region
   * - resource.accessKeyDetails.accessKeyId
   * - resource.accessKeyDetails.principalId
   * - resource.accessKeyDetails.userIdentity.accessKeyId
   * - resource.accessKeyDetails.userIdentity.accountId
   * - resource.accessKeyDetails.userIdentity.arn
   * - resource.accessKeyDetails.userIdentity.principalId
   * - resource.accessKeyDetails.userIdentity.sessionContext.attributes.mfaAuthenticated
   * - resource.accessKeyDetails.userIdentity.sessionContext.ec2RoleDelivery
   * - resource.accessKeyDetails.userIdentity.sessionContext.invokedBy
   * - resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.accountId
   * - resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.arn
   * - resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.principalId
   * - resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.type
   * - resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.userName
   * - resource.accessKeyDetails.userIdentity.sessionContext.sourceIdentity
   * - resource.accessKeyDetails.userIdentity.sessionContext.webIdFederationData.attributes
   * - resource.accessKeyDetails.userIdentity.sessionContext.webIdFederationData.federatedProvider
   * - resource.accessKeyDetails.userIdentity.type
   * - resource.accessKeyDetails.userIdentity.userName
   * - resource.accessKeyDetails.userName
   * - resource.accessKeyDetails.userType
   * - resource.bedrockGuardrailDetails.guardrailArn
   * - resource.bedrockGuardrailDetails.guardrailVersion
   * - resource.containerDetails.containerRuntime
   * - resource.containerDetails.id
   * - resource.containerDetails.image
   * - resource.containerDetails.imagePrefix
   * - resource.containerDetails.name
   * - resource.containerDetails.securityContext.allowPrivilegeEscalation
   * - resource.containerDetails.securityContext.privileged
   * - resource.containerDetails.volumeMounts.mountPath
   * - resource.containerDetails.volumeMounts.name
   * - resource.ebsSnapshotDetails.snapshotArn
   * - resource.ebsVolumeDetails.scannedVolumeDetails.deviceName
   * - resource.ebsVolumeDetails.scannedVolumeDetails.encryptionType
   * - resource.ebsVolumeDetails.scannedVolumeDetails.kmsKeyArn
   * - resource.ebsVolumeDetails.scannedVolumeDetails.snapshotArn
   * - resource.ebsVolumeDetails.scannedVolumeDetails.volumeArn
   * - resource.ebsVolumeDetails.scannedVolumeDetails.volumeSizeInGB
   * - resource.ebsVolumeDetails.scannedVolumeDetails.volumeType
   * - resource.ebsVolumeDetails.skippedVolumeDetails.deviceName
   * - resource.ebsVolumeDetails.skippedVolumeDetails.encryptionType
   * - resource.ebsVolumeDetails.skippedVolumeDetails.kmsKeyArn
   * - resource.ebsVolumeDetails.skippedVolumeDetails.snapshotArn
   * - resource.ebsVolumeDetails.skippedVolumeDetails.volumeArn
   * - resource.ebsVolumeDetails.skippedVolumeDetails.volumeSizeInGB
   * - resource.ebsVolumeDetails.skippedVolumeDetails.volumeType
   * - resource.ec2ImageDetails.imageArn
   * - resource.ecsClusterDetails.activeServicesCount
   * - resource.ecsClusterDetails.arn
   * - resource.ecsClusterDetails.name
   * - resource.ecsClusterDetails.registeredContainerInstancesCount
   * - resource.ecsClusterDetails.runningTasksCount
   * - resource.ecsClusterDetails.status
   * - resource.ecsClusterDetails.tags.key
   * - resource.ecsClusterDetails.tags.value
   * - resource.ecsClusterDetails.taskDetails.arn
   * - resource.ecsClusterDetails.taskDetails.containers.containerRuntime
   * - resource.ecsClusterDetails.taskDetails.containers.id
   * - resource.ecsClusterDetails.taskDetails.containers.image
   * - resource.ecsClusterDetails.taskDetails.containers.imagePrefix
   * - resource.ecsClusterDetails.taskDetails.containers.name
   * - resource.ecsClusterDetails.taskDetails.containers.securityContext.allowPrivilegeEscalation
   * - resource.ecsClusterDetails.taskDetails.containers.securityContext.privileged
   * - resource.ecsClusterDetails.taskDetails.containers.volumeMounts.mountPath
   * - resource.ecsClusterDetails.taskDetails.containers.volumeMounts.name
   * - resource.ecsClusterDetails.taskDetails.createdAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - resource.ecsClusterDetails.taskDetails.definitionArn
   * - resource.ecsClusterDetails.taskDetails.group
   * - resource.ecsClusterDetails.taskDetails.launchType
   * - resource.ecsClusterDetails.taskDetails.startedAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - resource.ecsClusterDetails.taskDetails.startedBy
   * - resource.ecsClusterDetails.taskDetails.tags.key
   * - resource.ecsClusterDetails.taskDetails.tags.value
   * - resource.ecsClusterDetails.taskDetails.version
   * - resource.ecsClusterDetails.taskDetails.volumes.hostPath.path
   * - resource.ecsClusterDetails.taskDetails.volumes.name
   * - resource.eksClusterDetails.arn
   * - resource.eksClusterDetails.createdAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - resource.eksClusterDetails.name
   * - resource.eksClusterDetails.status
   * - resource.eksClusterDetails.tags.key
   * - resource.eksClusterDetails.tags.value
   * - resource.eksClusterDetails.vpcId
   * - resource.instanceDetails.availabilityZone
   * - resource.instanceDetails.iamInstanceProfile.arn
   * - resource.instanceDetails.iamInstanceProfile.id
   * - resource.instanceDetails.imageDescription
   * - resource.instanceDetails.imageId
   * - resource.instanceDetails.instanceId
   * - resource.instanceDetails.instanceState
   * - resource.instanceDetails.instanceType
   * - resource.instanceDetails.launchTime
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - resource.instanceDetails.networkInterfaces.ipv6Addresses
   * - resource.instanceDetails.networkInterfaces.networkInterfaceId
   * - resource.instanceDetails.networkInterfaces.privateDnsName
   * - resource.instanceDetails.networkInterfaces.privateIpAddress
   * - resource.instanceDetails.networkInterfaces.privateIpAddresses.privateDnsName
   * - resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress
   * - resource.instanceDetails.networkInterfaces.publicDnsName
   * - resource.instanceDetails.networkInterfaces.publicIp
   * - resource.instanceDetails.networkInterfaces.securityGroups.groupId
   * - resource.instanceDetails.networkInterfaces.securityGroups.groupName
   * - resource.instanceDetails.networkInterfaces.subnetId
   * - resource.instanceDetails.networkInterfaces.vpcId
   * - resource.instanceDetails.outpostArn
   * - resource.instanceDetails.platform
   * - resource.instanceDetails.productCodes.productCodeId
   * - resource.instanceDetails.productCodes.productCodeType
   * - resource.instanceDetails.tags.key
   * - resource.instanceDetails.tags.value
   * - resource.kubernetesDetails.kubernetesUserDetails.groups
   * - resource.kubernetesDetails.kubernetesUserDetails.impersonatedUser.groups
   * - resource.kubernetesDetails.kubernetesUserDetails.impersonatedUser.username
   * - resource.kubernetesDetails.kubernetesUserDetails.sessionName
   * - resource.kubernetesDetails.kubernetesUserDetails.uid
   * - resource.kubernetesDetails.kubernetesUserDetails.username
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.containers.containerRuntime
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.containers.id
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.containers.image
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.containers.imagePrefix
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.containers.name
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.containers.securityContext.allowPrivilegeEscalation
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.containers.securityContext.privileged
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.containers.volumeMounts.mountPath
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.containers.volumeMounts.name
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.hostIpc
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.hostNetwork
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.hostPid
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.name
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.namespace
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.serviceAccountName
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.type
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.uid
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.volumes.hostPath.path
   * - resource.kubernetesDetails.kubernetesWorkloadDetails.volumes.name
   * - resource.lambdaDetails.description
   * - resource.lambdaDetails.functionArn
   * - resource.lambdaDetails.functionName
   * - resource.lambdaDetails.functionVersion
   * - resource.lambdaDetails.lastModifiedAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - resource.lambdaDetails.revisionId
   * - resource.lambdaDetails.role
   * - resource.lambdaDetails.tags.key
   * - resource.lambdaDetails.tags.value
   * - resource.lambdaDetails.vpcConfig.securityGroups.groupId
   * - resource.lambdaDetails.vpcConfig.securityGroups.groupName
   * - resource.lambdaDetails.vpcConfig.subnetIds
   * - resource.lambdaDetails.vpcConfig.vpcId
   * - resource.rdsDbInstanceDetails.dbClusterIdentifier
   * - resource.rdsDbInstanceDetails.dbInstanceArn
   * - resource.rdsDbInstanceDetails.dbInstanceIdentifier
   * - resource.rdsDbInstanceDetails.dbSecurityGroups.name
   * - resource.rdsDbInstanceDetails.dbSecurityGroups.status
   * - resource.rdsDbInstanceDetails.dbiResourceId
   * - resource.rdsDbInstanceDetails.engine
   * - resource.rdsDbInstanceDetails.engineVersion
   * - resource.rdsDbInstanceDetails.iamDatabaseAuthenticationEnabled
   * - resource.rdsDbInstanceDetails.publiclyAccessible
   * - resource.rdsDbInstanceDetails.vpcId
   * - resource.rdsDbInstanceDetails.vpcSecurityGroups.status
   * - resource.rdsDbInstanceDetails.vpcSecurityGroups.vpcSecurityGroupId
   * - resource.rdsDbUserDetails.application
   * - resource.rdsDbUserDetails.authMethod
   * - resource.rdsDbUserDetails.database
   * - resource.rdsDbUserDetails.ssl
   * - resource.rdsDbUserDetails.user
   * - resource.rdsLimitlessDbDetails.dbClusterIdentifier
   * - resource.rdsLimitlessDbDetails.dbShardGroupArn
   * - resource.rdsLimitlessDbDetails.dbShardGroupIdentifier
   * - resource.rdsLimitlessDbDetails.dbShardGroupResourceId
   * - resource.rdsLimitlessDbDetails.engine
   * - resource.rdsLimitlessDbDetails.engineVersion
   * - resource.rdsLimitlessDbDetails.tags.key
   * - resource.rdsLimitlessDbDetails.tags.value
   * - resource.recoveryPointDetails.backupVaultName
   * - resource.recoveryPointDetails.recoveryPointArn
   * - resource.resourceType
   * - resource.s3BucketDetails.arn
   * - resource.s3BucketDetails.createdAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - resource.s3BucketDetails.defaultServerSideEncryption.encryptionType
   * - resource.s3BucketDetails.defaultServerSideEncryption.kmsMasterKeyArn
   * - resource.s3BucketDetails.name
   * - resource.s3BucketDetails.owner.id
   * - resource.s3BucketDetails.publicAccess.effectivePermission
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.blockPublicAcls
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.blockPublicPolicy
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.ignorePublicAcls
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.restrictPublicBuckets
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.accessControlList.allowsPublicReadAccess
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.accessControlList.allowsPublicWriteAccess
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.blockPublicAcls
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.blockPublicPolicy
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.ignorePublicAcls
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.restrictPublicBuckets
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.bucketPolicy.allowsPublicReadAccess
   * - resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.bucketPolicy.allowsPublicWriteAccess
   * - resource.s3BucketDetails.s3ObjectDetails.eTag
   * - resource.s3BucketDetails.s3ObjectDetails.hash
   * - resource.s3BucketDetails.s3ObjectDetails.key
   * - resource.s3BucketDetails.s3ObjectDetails.objectArn
   * - resource.s3BucketDetails.s3ObjectDetails.versionId
   * - resource.s3BucketDetails.tags.key
   * - resource.s3BucketDetails.tags.value
   * - resource.s3BucketDetails.type
   * - schemaVersion
   * - service.action.actionType
   * - service.action.awsApiCallAction.api
   * - service.action.awsApiCallAction.callerType
   * - service.action.awsApiCallAction.domainDetails.domain
   * - service.action.awsApiCallAction.errorCode
   * - service.action.awsApiCallAction.remoteAccountDetails.accountId
   * - service.action.awsApiCallAction.remoteAccountDetails.affiliated
   * - service.action.awsApiCallAction.remoteAccountDetails.awsServiceName
   * - service.action.awsApiCallAction.remoteIpDetails.city.cityName
   * - service.action.awsApiCallAction.remoteIpDetails.country.countryCode
   * - service.action.awsApiCallAction.remoteIpDetails.country.countryName
   * - service.action.awsApiCallAction.remoteIpDetails.geoLocation.lat
   * - service.action.awsApiCallAction.remoteIpDetails.geoLocation.lon
   * - service.action.awsApiCallAction.remoteIpDetails.ipAddressV4
   * - service.action.awsApiCallAction.remoteIpDetails.ipAddressV6
   * - service.action.awsApiCallAction.remoteIpDetails.organization.asn
   * - service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg
   * - service.action.awsApiCallAction.remoteIpDetails.organization.isp
   * - service.action.awsApiCallAction.remoteIpDetails.organization.org
   * - service.action.awsApiCallAction.serviceName
   * - service.action.awsApiCallAction.userAgent
   * - service.action.dnsRequestAction.blocked
   * - service.action.dnsRequestAction.domain
   * - service.action.dnsRequestAction.domainWithSuffix
   * - service.action.dnsRequestAction.protocol
   * - service.action.dnsRequestAction.vpcOwnerAccountId
   * - service.action.kubernetesApiCallAction.namespace
   * - service.action.kubernetesApiCallAction.parameters
   * - service.action.kubernetesApiCallAction.remoteIpDetails.city.cityName
   * - service.action.kubernetesApiCallAction.remoteIpDetails.country.countryCode
   * - service.action.kubernetesApiCallAction.remoteIpDetails.country.countryName
   * - service.action.kubernetesApiCallAction.remoteIpDetails.geoLocation.lat
   * - service.action.kubernetesApiCallAction.remoteIpDetails.geoLocation.lon
   * - service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV4
   * - service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV6
   * - service.action.kubernetesApiCallAction.remoteIpDetails.organization.asn
   * - service.action.kubernetesApiCallAction.remoteIpDetails.organization.asnOrg
   * - service.action.kubernetesApiCallAction.remoteIpDetails.organization.isp
   * - service.action.kubernetesApiCallAction.remoteIpDetails.organization.org
   * - service.action.kubernetesApiCallAction.requestUri
   * - service.action.kubernetesApiCallAction.resource
   * - service.action.kubernetesApiCallAction.resourceName
   * - service.action.kubernetesApiCallAction.sourceIPs
   * - service.action.kubernetesApiCallAction.statusCode
   * - service.action.kubernetesApiCallAction.subresource
   * - service.action.kubernetesApiCallAction.userAgent
   * - service.action.kubernetesApiCallAction.verb
   * - service.action.kubernetesPermissionCheckedDetails.allowed
   * - service.action.kubernetesPermissionCheckedDetails.namespace
   * - service.action.kubernetesPermissionCheckedDetails.resource
   * - service.action.kubernetesPermissionCheckedDetails.verb
   * - service.action.kubernetesRoleBindingDetails.kind
   * - service.action.kubernetesRoleBindingDetails.name
   * - service.action.kubernetesRoleBindingDetails.roleRefKind
   * - service.action.kubernetesRoleBindingDetails.roleRefName
   * - service.action.kubernetesRoleBindingDetails.uid
   * - service.action.kubernetesRoleDetails.kind
   * - service.action.kubernetesRoleDetails.name
   * - service.action.kubernetesRoleDetails.uid
   * - service.action.networkConnectionAction.blocked
   * - service.action.networkConnectionAction.connectionDirection
   * - service.action.networkConnectionAction.localIpDetails.ipAddressV4
   * - service.action.networkConnectionAction.localIpDetails.ipAddressV6
   * - service.action.networkConnectionAction.localNetworkInterface
   * - service.action.networkConnectionAction.localPortDetails.port
   * - service.action.networkConnectionAction.localPortDetails.portName
   * - service.action.networkConnectionAction.protocol
   * - service.action.networkConnectionAction.remoteIpDetails.city.cityName
   * - service.action.networkConnectionAction.remoteIpDetails.country.countryCode
   * - service.action.networkConnectionAction.remoteIpDetails.country.countryName
   * - service.action.networkConnectionAction.remoteIpDetails.geoLocation.lat
   * - service.action.networkConnectionAction.remoteIpDetails.geoLocation.lon
   * - service.action.networkConnectionAction.remoteIpDetails.ipAddressV4
   * - service.action.networkConnectionAction.remoteIpDetails.ipAddressV6
   * - service.action.networkConnectionAction.remoteIpDetails.organization.asn
   * - service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg
   * - service.action.networkConnectionAction.remoteIpDetails.organization.isp
   * - service.action.networkConnectionAction.remoteIpDetails.organization.org
   * - service.action.networkConnectionAction.remotePortDetails.port
   * - service.action.networkConnectionAction.remotePortDetails.portName
   * - service.action.portProbeAction.blocked
   * - service.action.portProbeAction.portProbeDetails.localIpDetails.ipAddressV4
   * - service.action.portProbeAction.portProbeDetails.localIpDetails.ipAddressV6
   * - service.action.portProbeAction.portProbeDetails.localPortDetails.port
   * - service.action.portProbeAction.portProbeDetails.localPortDetails.portName
   * - service.action.portProbeAction.portProbeDetails.remoteIpDetails.city.cityName
   * - service.action.portProbeAction.portProbeDetails.remoteIpDetails.country.countryCode
   * - service.action.portProbeAction.portProbeDetails.remoteIpDetails.country.countryName
   * - service.action.portProbeAction.portProbeDetails.remoteIpDetails.geoLocation.lat
   * - service.action.portProbeAction.portProbeDetails.remoteIpDetails.geoLocation.lon
   * - service.action.portProbeAction.portProbeDetails.remoteIpDetails.ipAddressV4
   * - service.action.portProbeAction.portProbeDetails.remoteIpDetails.ipAddressV6
   * - service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.asn
   * - service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.asnOrg
   * - service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.isp
   * - service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.org
   * - service.action.rdsLoginAttemptAction.loginAttributes.application
   * - service.action.rdsLoginAttemptAction.loginAttributes.failedLoginAttempts
   * - service.action.rdsLoginAttemptAction.loginAttributes.successfulLoginAttempts
   * - service.action.rdsLoginAttemptAction.loginAttributes.user
   * - service.action.rdsLoginAttemptAction.remoteIpDetails.city.cityName
   * - service.action.rdsLoginAttemptAction.remoteIpDetails.country.countryCode
   * - service.action.rdsLoginAttemptAction.remoteIpDetails.country.countryName
   * - service.action.rdsLoginAttemptAction.remoteIpDetails.geoLocation.lat
   * - service.action.rdsLoginAttemptAction.remoteIpDetails.geoLocation.lon
   * - service.action.rdsLoginAttemptAction.remoteIpDetails.ipAddressV4
   * - service.action.rdsLoginAttemptAction.remoteIpDetails.ipAddressV6
   * - service.action.rdsLoginAttemptAction.remoteIpDetails.organization.asn
   * - service.action.rdsLoginAttemptAction.remoteIpDetails.organization.asnOrg
   * - service.action.rdsLoginAttemptAction.remoteIpDetails.organization.isp
   * - service.action.rdsLoginAttemptAction.remoteIpDetails.organization.org
   * - service.additionalInfo.agentDetails.agentId
   * - service.additionalInfo.agentDetails.agentVersion
   * - service.additionalInfo.anomalies.anomalousAPIs
   * - service.additionalInfo.authenticationMethod
   * - service.additionalInfo.averagePacketSizeIn
   * - service.additionalInfo.averagePacketSizeOut
   * - service.additionalInfo.context
   * - service.additionalInfo.domain
   * - service.additionalInfo.inBytes
   * - service.additionalInfo.localNetworkInterfaceOwner
   * - service.additionalInfo.localPort
   * - service.additionalInfo.outBytes
   * - service.additionalInfo.packetsIn
   * - service.additionalInfo.packetsOut
   * - service.additionalInfo.policyArn
   * - service.additionalInfo.policyName
   * - service.additionalInfo.remotePort
   * - service.additionalInfo.sample
   * - service.additionalInfo.scannedPort
   * - service.additionalInfo.threatFileSha256
   * - service.additionalInfo.threatListName
   * - service.additionalInfo.threatName
   * - service.additionalInfo.totalBytesIn
   * - service.additionalInfo.totalBytesOut
   * - service.additionalInfo.type
   * - service.additionalInfo.unusual.asnOrg
   * - service.additionalInfo.unusual.port
   * - service.additionalInfo.unusualProtocol
   * - service.additionalInfo.userAgent.fullUserAgent
   * - service.additionalInfo.userAgent.userAgentCategory
   * - service.additionalInfo.value
   * - service.additionalInfo.vpcOwnerAccountId
   * - service.archived
   * - service.count
   * - service.detection.sequence.actors.id
   * - service.detection.sequence.actors.process.name
   * - service.detection.sequence.actors.process.path
   * - service.detection.sequence.actors.process.sha256
   * - service.detection.sequence.actors.session.createdTime
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.detection.sequence.actors.session.issuer
   * - service.detection.sequence.actors.session.mfaStatus
   * - service.detection.sequence.actors.session.uid
   * - service.detection.sequence.actors.user.account.account
   * - service.detection.sequence.actors.user.account.uid
   * - service.detection.sequence.actors.user.credentialUid
   * - service.detection.sequence.actors.user.name
   * - service.detection.sequence.actors.user.type
   * - service.detection.sequence.actors.user.uid
   * - service.detection.sequence.additionalSequenceTypes
   * - service.detection.sequence.description
   * - service.detection.sequence.endpoints.autonomousSystem.name
   * - service.detection.sequence.endpoints.autonomousSystem.number
   * - service.detection.sequence.endpoints.connection.direction
   * - service.detection.sequence.endpoints.domain
   * - service.detection.sequence.endpoints.id
   * - service.detection.sequence.endpoints.ip
   * - service.detection.sequence.endpoints.location.city
   * - service.detection.sequence.endpoints.location.country
   * - service.detection.sequence.endpoints.location.lat
   * - service.detection.sequence.endpoints.location.lon
   * - service.detection.sequence.endpoints.port
   * - service.detection.sequence.resources.accountId
   * - service.detection.sequence.resources.cloudPartition
   * - service.detection.sequence.resources.data.accessKey.principalId
   * - service.detection.sequence.resources.data.accessKey.userName
   * - service.detection.sequence.resources.data.accessKey.userType
   * - service.detection.sequence.resources.data.autoscalingAutoScalingGroup.ec2InstanceUids
   * - service.detection.sequence.resources.data.cloudformationStack.ec2InstanceUids
   * - service.detection.sequence.resources.data.container.image
   * - service.detection.sequence.resources.data.container.imageUid
   * - service.detection.sequence.resources.data.ec2Image.ec2InstanceUids
   * - service.detection.sequence.resources.data.ec2Instance.availabilityZone
   * - service.detection.sequence.resources.data.ec2Instance.ec2NetworkInterfaceUids
   * - service.detection.sequence.resources.data.ec2Instance.iamInstanceProfile.arn
   * - service.detection.sequence.resources.data.ec2Instance.iamInstanceProfile.id
   * - service.detection.sequence.resources.data.ec2Instance.imageDescription
   * - service.detection.sequence.resources.data.ec2Instance.instanceState
   * - service.detection.sequence.resources.data.ec2Instance.instanceType
   * - service.detection.sequence.resources.data.ec2Instance.outpostArn
   * - service.detection.sequence.resources.data.ec2Instance.platform
   * - service.detection.sequence.resources.data.ec2Instance.productCodes.productCodeId
   * - service.detection.sequence.resources.data.ec2Instance.productCodes.productCodeType
   * - service.detection.sequence.resources.data.ec2LaunchTemplate.ec2InstanceUids
   * - service.detection.sequence.resources.data.ec2LaunchTemplate.version
   * - service.detection.sequence.resources.data.ec2NetworkInterface.ipv6Addresses
   * - service.detection.sequence.resources.data.ec2NetworkInterface.privateIpAddresses.privateDnsName
   * - service.detection.sequence.resources.data.ec2NetworkInterface.privateIpAddresses.privateIpAddress
   * - service.detection.sequence.resources.data.ec2NetworkInterface.publicIp
   * - service.detection.sequence.resources.data.ec2NetworkInterface.securityGroups.groupId
   * - service.detection.sequence.resources.data.ec2NetworkInterface.securityGroups.groupName
   * - service.detection.sequence.resources.data.ec2NetworkInterface.subNetId
   * - service.detection.sequence.resources.data.ec2NetworkInterface.vpcId
   * - service.detection.sequence.resources.data.ec2Vpc.ec2InstanceUids
   * - service.detection.sequence.resources.data.ecsCluster.ec2InstanceUids
   * - service.detection.sequence.resources.data.ecsCluster.status
   * - service.detection.sequence.resources.data.ecsTask.containerUids
   * - service.detection.sequence.resources.data.ecsTask.createdAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.detection.sequence.resources.data.ecsTask.launchType
   * - service.detection.sequence.resources.data.ecsTask.taskDefinitionArn
   * - service.detection.sequence.resources.data.eksCluster.arn
   * - service.detection.sequence.resources.data.eksCluster.createdAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.detection.sequence.resources.data.eksCluster.ec2InstanceUids
   * - service.detection.sequence.resources.data.eksCluster.status
   * - service.detection.sequence.resources.data.eksCluster.vpcId
   * - service.detection.sequence.resources.data.iamInstanceProfile.ec2InstanceUids
   * - service.detection.sequence.resources.data.iamInstanceProfile.id
   * - service.detection.sequence.resources.data.kubernetesWorkload.containerUids
   * - service.detection.sequence.resources.data.kubernetesWorkload.namespace
   * - service.detection.sequence.resources.data.kubernetesWorkload.type
   * - service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicAclAccess
   * - service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicAclIgnoreBehavior
   * - service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicBucketRestrictBehavior
   * - service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicPolicyAccess
   * - service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicAclAccess
   * - service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicAclIgnoreBehavior
   * - service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicBucketRestrictBehavior
   * - service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicPolicyAccess
   * - service.detection.sequence.resources.data.s3Bucket.createdAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.detection.sequence.resources.data.s3Bucket.effectivePermission
   * - service.detection.sequence.resources.data.s3Bucket.encryptionKeyArn
   * - service.detection.sequence.resources.data.s3Bucket.encryptionType
   * - service.detection.sequence.resources.data.s3Bucket.ownerId
   * - service.detection.sequence.resources.data.s3Bucket.publicReadAccess
   * - service.detection.sequence.resources.data.s3Bucket.publicWriteAccess
   * - service.detection.sequence.resources.data.s3Bucket.s3ObjectUids
   * - service.detection.sequence.resources.data.s3Object.eTag
   * - service.detection.sequence.resources.data.s3Object.key
   * - service.detection.sequence.resources.data.s3Object.versionId
   * - service.detection.sequence.resources.name
   * - service.detection.sequence.resources.region
   * - service.detection.sequence.resources.resourceType
   * - service.detection.sequence.resources.service
   * - service.detection.sequence.resources.tags.key
   * - service.detection.sequence.resources.tags.value
   * - service.detection.sequence.resources.uid
   * - service.detection.sequence.sequenceIndicators.key
   * - service.detection.sequence.sequenceIndicators.title
   * - service.detection.sequence.sequenceIndicators.values
   * - service.detection.sequence.signals.actorIds
   * - service.detection.sequence.signals.count
   * - service.detection.sequence.signals.createdAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.detection.sequence.signals.description
   * - service.detection.sequence.signals.endpointIds
   * - service.detection.sequence.signals.firstSeenAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.detection.sequence.signals.lastSeenAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.detection.sequence.signals.name
   * - service.detection.sequence.signals.resourceUids
   * - service.detection.sequence.signals.severity
   * - service.detection.sequence.signals.signalIndicators.key
   * - service.detection.sequence.signals.signalIndicators.title
   * - service.detection.sequence.signals.signalIndicators.values
   * - service.detection.sequence.signals.type
   * - service.detection.sequence.signals.uid
   * - service.detection.sequence.signals.updatedAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.detection.sequence.uid
   * - service.detectorId
   * - service.ebsVolumeScanDetails.scanCompletedAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.count
   * - service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.severity
   * - service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.threatName
   * - service.ebsVolumeScanDetails.scanDetections.scannedItemCount.files
   * - service.ebsVolumeScanDetails.scanDetections.scannedItemCount.totalGb
   * - service.ebsVolumeScanDetails.scanDetections.scannedItemCount.volumes
   * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.itemCount
   * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.shortened
   * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.fileName
   * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.filePath
   * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.hash
   * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.volumeArn
   * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.itemCount
   * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.name
   * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.severity
   * - service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.uniqueThreatNameCount
   * - service.ebsVolumeScanDetails.scanDetections.threatsDetectedItemCount.files
   * - service.ebsVolumeScanDetails.scanId
   * - service.ebsVolumeScanDetails.scanStartedAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.ebsVolumeScanDetails.scanType
   * - service.ebsVolumeScanDetails.sources
   * - service.ebsVolumeScanDetails.triggerFindingId
   * - service.eventFirstSeen
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.eventLastSeen
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.evidence.threatIntelligenceDetails.threatFileSha256
   * - service.evidence.threatIntelligenceDetails.threatListName
   * - service.evidence.threatIntelligenceDetails.threatNames
   * - service.featureName
   * - service.malwareScanDetails.scanCategory
   * - service.malwareScanDetails.scanConfiguration.incrementalScanDetails.baselineResourceArn
   * - service.malwareScanDetails.scanConfiguration.triggerType
   * - service.malwareScanDetails.scanId
   * - service.malwareScanDetails.scanType
   * - service.malwareScanDetails.threats.count
   * - service.malwareScanDetails.threats.hash
   * - service.malwareScanDetails.threats.itemDetails.additionalInfo.deviceName
   * - service.malwareScanDetails.threats.itemDetails.additionalInfo.versionId
   * - service.malwareScanDetails.threats.itemDetails.hash
   * - service.malwareScanDetails.threats.itemDetails.itemPath
   * - service.malwareScanDetails.threats.itemDetails.resourceArn
   * - service.malwareScanDetails.threats.itemPaths.hash
   * - service.malwareScanDetails.threats.itemPaths.nestedItemPath
   * - service.malwareScanDetails.threats.name
   * - service.malwareScanDetails.threats.source
   * - service.malwareScanDetails.uniqueThreatCount
   * - service.resourceRole
   * - service.runtimeDetails.context.addressFamily
   * - service.runtimeDetails.context.commandLineExample
   * - service.runtimeDetails.context.fileOperation
   * - service.runtimeDetails.context.filePath
   * - service.runtimeDetails.context.fileSystemType
   * - service.runtimeDetails.context.flags
   * - service.runtimeDetails.context.ianaProtocolNumber
   * - service.runtimeDetails.context.ldPreloadValue
   * - service.runtimeDetails.context.libraryPath
   * - service.runtimeDetails.context.memoryRegions
   * - service.runtimeDetails.context.modifiedAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.runtimeDetails.context.modifyingProcess.euid
   * - service.runtimeDetails.context.modifyingProcess.executablePath
   * - service.runtimeDetails.context.modifyingProcess.executableSha256
   * - service.runtimeDetails.context.modifyingProcess.lineage.euid
   * - service.runtimeDetails.context.modifyingProcess.lineage.executablePath
   * - service.runtimeDetails.context.modifyingProcess.lineage.name
   * - service.runtimeDetails.context.modifyingProcess.lineage.namespacePid
   * - service.runtimeDetails.context.modifyingProcess.lineage.parentUuid
   * - service.runtimeDetails.context.modifyingProcess.lineage.pid
   * - service.runtimeDetails.context.modifyingProcess.lineage.startTime
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.runtimeDetails.context.modifyingProcess.lineage.userId
   * - service.runtimeDetails.context.modifyingProcess.lineage.uuid
   * - service.runtimeDetails.context.modifyingProcess.name
   * - service.runtimeDetails.context.modifyingProcess.namespacePid
   * - service.runtimeDetails.context.modifyingProcess.parentUuid
   * - service.runtimeDetails.context.modifyingProcess.pid
   * - service.runtimeDetails.context.modifyingProcess.pwd
   * - service.runtimeDetails.context.modifyingProcess.startTime
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.runtimeDetails.context.modifyingProcess.user
   * - service.runtimeDetails.context.modifyingProcess.userId
   * - service.runtimeDetails.context.modifyingProcess.uuid
   * - service.runtimeDetails.context.moduleFilePath
   * - service.runtimeDetails.context.moduleName
   * - service.runtimeDetails.context.moduleSha256
   * - service.runtimeDetails.context.mountSource
   * - service.runtimeDetails.context.mountTarget
   * - service.runtimeDetails.context.relatedFilePaths
   * - service.runtimeDetails.context.releaseAgentPath
   * - service.runtimeDetails.context.runcBinaryPath
   * - service.runtimeDetails.context.scriptPath
   * - service.runtimeDetails.context.serviceName
   * - service.runtimeDetails.context.shellHistoryFilePath
   * - service.runtimeDetails.context.socketPath
   * - service.runtimeDetails.context.targetProcess.euid
   * - service.runtimeDetails.context.targetProcess.executablePath
   * - service.runtimeDetails.context.targetProcess.executableSha256
   * - service.runtimeDetails.context.targetProcess.lineage.euid
   * - service.runtimeDetails.context.targetProcess.lineage.executablePath
   * - service.runtimeDetails.context.targetProcess.lineage.name
   * - service.runtimeDetails.context.targetProcess.lineage.namespacePid
   * - service.runtimeDetails.context.targetProcess.lineage.parentUuid
   * - service.runtimeDetails.context.targetProcess.lineage.pid
   * - service.runtimeDetails.context.targetProcess.lineage.startTime
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.runtimeDetails.context.targetProcess.lineage.userId
   * - service.runtimeDetails.context.targetProcess.lineage.uuid
   * - service.runtimeDetails.context.targetProcess.name
   * - service.runtimeDetails.context.targetProcess.namespacePid
   * - service.runtimeDetails.context.targetProcess.parentUuid
   * - service.runtimeDetails.context.targetProcess.pid
   * - service.runtimeDetails.context.targetProcess.pwd
   * - service.runtimeDetails.context.targetProcess.startTime
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.runtimeDetails.context.targetProcess.user
   * - service.runtimeDetails.context.targetProcess.userId
   * - service.runtimeDetails.context.targetProcess.uuid
   * - service.runtimeDetails.context.threatFilePath
   * - service.runtimeDetails.context.toolCategory
   * - service.runtimeDetails.context.toolName
   * - service.runtimeDetails.process.euid
   * - service.runtimeDetails.process.executablePath
   * - service.runtimeDetails.process.executableSha256
   * - service.runtimeDetails.process.lineage.euid
   * - service.runtimeDetails.process.lineage.executablePath
   * - service.runtimeDetails.process.lineage.name
   * - service.runtimeDetails.process.lineage.namespacePid
   * - service.runtimeDetails.process.lineage.parentUuid
   * - service.runtimeDetails.process.lineage.pid
   * - service.runtimeDetails.process.lineage.startTime
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.runtimeDetails.process.lineage.userId
   * - service.runtimeDetails.process.lineage.uuid
   * - service.runtimeDetails.process.name
   * - service.runtimeDetails.process.namespacePid
   * - service.runtimeDetails.process.parentUuid
   * - service.runtimeDetails.process.pid
   * - service.runtimeDetails.process.pwd
   * - service.runtimeDetails.process.startTime
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   * - service.runtimeDetails.process.user
   * - service.runtimeDetails.process.userId
   * - service.runtimeDetails.process.uuid
   * - service.serviceName
   * - service.userFeedback
   * - severity
   *
   *   To configure severity based filters, use the following for the [FindingCriteria](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_FindingCriteria.html) condition:
   *
   *   - **Low**: `["1", "2", "3"]`
   *   - **Medium**: `["4", "5", "6"]`
   *   - **High**: `["7", "8"]`
   *   - **Critical**: `["9", "10"]`
   *
   *   For more information, see [Findings severity levels](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings-severity.html) in the *Amazon GuardDuty User Guide*.
   * - type
   * - updatedAt
   *
   *   Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000
   *
   * @public
   */
  FindingCriteria: FindingCriteria | undefined;

  /**
   * The idempotency token for the create request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to be added to a new filter resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFilterResponse {
  /**
   * The name of the successfully created filter.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateInvestigationRequest {
  /**
   * The unique ID of the GuardDuty detector for the account in which the investigation is created.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * A natural-language description of what to investigate. For example:
   *
   * - `"Investigate finding 1ab2c3d4e5f6a7b8c9d0e1f2a3b4c5d6 in account 123456789012"`
   * - `"Analyze findings in account with id 123456789012"`
   * - `"Analyze findings in my organization"`
   *
   * @public
   */
  TriggerPrompt: string | undefined;

  /**
   * The idempotency token for the create request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateInvestigationResponse {
  /**
   * The unique identifier of the newly created investigation.
   *
   * @public
   */
  InvestigationId: string | undefined;
}

/**
 * @public
 */
export interface CreateIPSetRequest {
  /**
   * The unique ID of the detector of the GuardDuty account for which you want to create an IPSet.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The user-friendly name to identify the IPSet.
   *
   * Allowed characters are alphanumeric, whitespace, dash (-), and underscores (_).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The format of the file that contains the IPSet.
   *
   * @public
   */
  Format: IpSetFormat | undefined;

  /**
   * The URI of the file that contains the IPSet.
   *
   * @public
   */
  Location: string | undefined;

  /**
   * A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.
   *
   * @public
   */
  Activate: boolean | undefined;

  /**
   * The idempotency token for the create request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to be added to a new IP set resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the **location** parameter.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface CreateIPSetResponse {
  /**
   * The ID of the IPSet resource.
   *
   * @public
   */
  IpSetId: string | undefined;
}

/**
 * Information about adding tags to the scanned S3 object after the scan result.
 *
 * @public
 */
export interface MalwareProtectionPlanTaggingAction {
  /**
   * Indicates whether or not the tags will added.
   *
   * @public
   */
  Status?: MalwareProtectionPlanTaggingActionStatus | undefined;
}

/**
 * Information about whether the tags will be added to the S3 object after scanning.
 *
 * @public
 */
export interface MalwareProtectionPlanActions {
  /**
   * Indicates whether the scanned S3 object will have tags about the scan result.
   *
   * @public
   */
  Tagging?: MalwareProtectionPlanTaggingAction | undefined;
}

/**
 * Information about the protected S3 bucket resource.
 *
 * @public
 */
export interface CreateS3BucketResource {
  /**
   * Name of the S3 bucket.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * Information about the specified object prefixes. The S3 object will be scanned only if it belongs to any of the specified object prefixes.
   *
   * @public
   */
  ObjectPrefixes?: string[] | undefined;
}

/**
 * Information about the protected resource that is associated with the created Malware Protection plan. Presently, `S3Bucket` is the only supported protected resource.
 *
 * @public
 */
export interface CreateProtectedResource {
  /**
   * Information about the protected S3 bucket resource.
   *
   * @public
   */
  S3Bucket?: CreateS3BucketResource | undefined;
}

/**
 * @public
 */
export interface CreateMalwareProtectionPlanRequest {
  /**
   * The idempotency token for the create request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the IAM role that has the permissions to scan and add tags to the associated protected resource.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * Information about the protected resource that is associated with the created Malware Protection plan. Presently, `S3Bucket` is the only supported protected resource.
   *
   * @public
   */
  ProtectedResource: CreateProtectedResource | undefined;

  /**
   * Information about whether the tags will be added to the S3 object after scanning.
   *
   * @public
   */
  Actions?: MalwareProtectionPlanActions | undefined;

  /**
   * Tags added to the Malware Protection plan resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMalwareProtectionPlanResponse {
  /**
   * A unique identifier associated with the Malware Protection plan resource.
   *
   * @public
   */
  MalwareProtectionPlanId?: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersRequest {
  /**
   * The unique ID of the detector of the GuardDuty account for which you want to associate member accounts.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * A list of account ID and email address pairs of the accounts that you want to associate with the GuardDuty administrator account.
   *
   * @public
   */
  AccountDetails: AccountDetail[] | undefined;
}

/**
 * Contains information about the accounts that weren't processed.
 *
 * @public
 */
export interface UnprocessedAccount {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * A reason why the account hasn't been processed.
   *
   * @public
   */
  Result: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersResponse {
  /**
   * A list of objects that include the `accountIds` of the unprocessed accounts and a result string that explains why each was unprocessed.
   *
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
 *
 * @public
 */
export interface DestinationProperties {
  /**
   * The ARN of the resource to publish to.
   *
   * To specify an S3 bucket folder use the following format: `arn:aws:s3:::DOC-EXAMPLE-BUCKET/myFolder/`
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * The ARN of the KMS key to use for encryption.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The 12-digit Amazon Web Services account ID of the account that owns the Amazon S3 bucket specified in the `DestinationArn` parameter.
   *
   * When you provide this value, GuardDuty verifies that the specified account owns the bucket before it exports findings. If the account ID doesn't match the actual owner of the bucket, GuardDuty doesn't export findings to that bucket. This helps prevent GuardDuty from exporting your findings to a bucket that a different Amazon Web Services account owns (for example, if the original bucket was deleted and its name was later claimed by another account). If you don't specify this value, GuardDuty doesn't perform this verification. GuardDuty strongly recommends that you provide the expected bucket owner when possible.
   *
   * When you update a publishing destination, omitting this field leaves the currently stored value unchanged. This field appears in the response only if it was provided when the publishing destination was created or updated.
   *
   * For more information, see [Verifying the Amazon S3 bucket owner](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_exportfindings.html#guardduty-exportfindings-expected-bucket-owner) in the *Amazon GuardDuty User Guide*.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface CreatePublishingDestinationRequest {
  /**
   * The ID of the GuardDuty detector associated with the publishing destination.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.
   *
   * @public
   */
  DestinationType: DestinationType | undefined;

  /**
   * The properties of the publishing destination, including the ARNs for the destination and the KMS key used for encryption.
   *
   * @public
   */
  DestinationProperties: DestinationProperties | undefined;

  /**
   * The idempotency token for the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to be added to a new publishing destination resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePublishingDestinationResponse {
  /**
   * The ID of the publishing destination that is created.
   *
   * @public
   */
  DestinationId: string | undefined;
}

/**
 * @public
 */
export interface CreateSampleFindingsRequest {
  /**
   * The ID of the detector for which you need to create sample findings.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The types of sample findings to generate.
   *
   * @public
   */
  FindingTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateSampleFindingsResponse {}

/**
 * @public
 */
export interface CreateThreatEntitySetRequest {
  /**
   * The unique ID of the detector of the GuardDuty account for which you want to create a threat entity set.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * A user-friendly name to identify the threat entity set.
   *
   * The name of your list can include lowercase letters, uppercase letters, numbers, dash (-), and underscore (_).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The format of the file that contains the threat entity set.
   *
   * @public
   */
  Format: ThreatEntitySetFormat | undefined;

  /**
   * The URI of the file that contains the threat entity set. The format of the `Location` URL must be a valid Amazon S3 URL format. Invalid URL formats will result in an error, regardless of whether you activate the entity set or not. For more information about format of the location URLs, see [Format of location URL under Step 2: Adding trusted or threat intelligence data](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-lists-create-activate.html) in the *Amazon GuardDuty User Guide*.
   *
   * @public
   */
  Location: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the **location** parameter.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * A boolean value that indicates whether GuardDuty should start using the uploaded threat entity set to generate findings.
   *
   * @public
   */
  Activate: boolean | undefined;

  /**
   * The idempotency token for the create request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to be added to a new threat entity set resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateThreatEntitySetResponse {
  /**
   * The ID returned by GuardDuty after creation of the threat entity set resource.
   *
   * @public
   */
  ThreatEntitySetId: string | undefined;
}

/**
 * @public
 */
export interface CreateThreatIntelSetRequest {
  /**
   * The unique ID of the detector of the GuardDuty account for which you want to create a `threatIntelSet`.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The format of the file that contains the ThreatIntelSet.
   *
   * @public
   */
  Format: ThreatIntelSetFormat | undefined;

  /**
   * The URI of the file that contains the ThreatIntelSet.
   *
   * @public
   */
  Location: string | undefined;

  /**
   * A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.
   *
   * @public
   */
  Activate: boolean | undefined;

  /**
   * The idempotency token for the create request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to be added to a new threat list resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the **location** parameter.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface CreateThreatIntelSetResponse {
  /**
   * The ID of the ThreatIntelSet resource.
   *
   * @public
   */
  ThreatIntelSetId: string | undefined;
}

/**
 * @public
 */
export interface CreateTrustedEntitySetRequest {
  /**
   * The unique ID of the detector of the GuardDuty account for which you want to create a trusted entity set.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * A user-friendly name to identify the trusted entity set.
   *
   * The name of your list can include lowercase letters, uppercase letters, numbers, dash (-), and underscore (_).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The format of the file that contains the trusted entity set.
   *
   * @public
   */
  Format: TrustedEntitySetFormat | undefined;

  /**
   * The URI of the file that contains the threat entity set. The format of the `Location` URL must be a valid Amazon S3 URL format. Invalid URL formats will result in an error, regardless of whether you activate the entity set or not. For more information about format of the location URLs, see [Format of location URL under Step 2: Adding trusted or threat intelligence data](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-lists-create-activate.html) in the *Amazon GuardDuty User Guide*.
   *
   * @public
   */
  Location: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the **location** parameter.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * A boolean value that indicates whether GuardDuty is to start using the uploaded trusted entity set.
   *
   * @public
   */
  Activate: boolean | undefined;

  /**
   * The idempotency token for the create request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags to be added to a new trusted entity set resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTrustedEntitySetResponse {
  /**
   * The ID returned by GuardDuty after creation of the trusted entity set resource.
   *
   * @public
   */
  TrustedEntitySetId: string | undefined;
}

/**
 * Contains information on the status of DNS logs as a data source.
 *
 * @public
 */
export interface DNSLogsConfigurationResult {
  /**
   * Denotes whether DNS logs is enabled as a data source.
   *
   * @public
   */
  Status: DataSourceStatus | undefined;
}

/**
 * Contains information on the status of VPC flow logs as a data source.
 *
 * @public
 */
export interface FlowLogsConfigurationResult {
  /**
   * Denotes whether VPC flow logs is enabled as a data source.
   *
   * @public
   */
  Status: DataSourceStatus | undefined;
}

/**
 * Describes whether Kubernetes audit logs are enabled as a data source.
 *
 * @public
 */
export interface KubernetesAuditLogsConfigurationResult {
  /**
   * A value that describes whether Kubernetes audit logs are enabled as a data source.
   *
   * @public
   */
  Status: DataSourceStatus | undefined;
}

/**
 * Describes whether any Kubernetes logs will be enabled as a data source.
 *
 * @public
 */
export interface KubernetesConfigurationResult {
  /**
   * Describes whether Kubernetes audit logs are enabled as a data source.
   *
   * @public
   */
  AuditLogs: KubernetesAuditLogsConfigurationResult | undefined;
}

/**
 * Describes whether S3 data event logs will be enabled as a data source.
 *
 * @public
 */
export interface S3LogsConfigurationResult {
  /**
   * A value that describes whether S3 data event logs are automatically enabled for new members of the organization.
   *
   * @public
   */
  Status: DataSourceStatus | undefined;
}

/**
 * Contains information on the status of data sources for the detector.
 *
 * @public
 */
export interface DataSourceConfigurationsResult {
  /**
   * An object that contains information on the status of CloudTrail as a data source.
   *
   * @public
   */
  CloudTrail: CloudTrailConfigurationResult | undefined;

  /**
   * An object that contains information on the status of DNS logs as a data source.
   *
   * @public
   */
  DNSLogs: DNSLogsConfigurationResult | undefined;

  /**
   * An object that contains information on the status of VPC flow logs as a data source.
   *
   * @public
   */
  FlowLogs: FlowLogsConfigurationResult | undefined;

  /**
   * An object that contains information on the status of S3 Data event logs as a data source.
   *
   * @public
   */
  S3Logs: S3LogsConfigurationResult | undefined;

  /**
   * An object that contains information on the status of all Kubernetes data sources.
   *
   * @public
   */
  Kubernetes?: KubernetesConfigurationResult | undefined;

  /**
   * Describes the configuration of Malware Protection data sources.
   *
   * @public
   */
  MalwareProtection?: MalwareProtectionConfigurationResult | undefined;
}

/**
 * Represents list a map of dates with a count of total findings generated on each date.
 *
 * @public
 */
export interface DateStatistics {
  /**
   * The timestamp when the total findings count is observed.
   *
   * For example, `Date` would look like `"2024-09-05T17:00:00-07:00"` whereas `LastGeneratedAt` would look like 2024-09-05T17:12:29-07:00".
   *
   * @public
   */
  Date?: Date | undefined;

  /**
   * The timestamp at which the last finding in the findings count, was generated.
   *
   * @public
   */
  LastGeneratedAt?: Date | undefined;

  /**
   * The severity of the findings generated on each date.
   *
   * @public
   */
  Severity?: number | undefined;

  /**
   * The total number of findings that were generated per severity level on each date.
   *
   * @public
   */
  TotalFindings?: number | undefined;
}

/**
 * @public
 */
export interface DeclineInvitationsRequest {
  /**
   * A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to decline invitations from.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeclineInvitationsResponse {
  /**
   * A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.
   *
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * Contains information on the server side encryption method used in the S3 bucket. See [S3 Server-Side Encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html) for more information.
 *
 * @public
 */
export interface DefaultServerSideEncryption {
  /**
   * The type of encryption used for objects within the S3 bucket.
   *
   * @public
   */
  EncryptionType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS encryption key. Only available if the bucket `EncryptionType` is `aws:kms`.
   *
   * @public
   */
  KmsMasterKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomDetectionRuleAssociationRequest {
  /**
   * The unique identifier for the custom detection rule.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The unique identifier for the association to delete.
   *
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomDetectionRuleAssociationResponse {}

/**
 * @public
 */
export interface DeleteCustomDetectionRuleOrgConfigurationRequest {
  /**
   * The unique identifier for the custom detection rule.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The execution mode of the organization configuration to delete. Valid values: `LIVE` | `DRY_RUN`.
   *
   * @public
   */
  Mode: AssociationMode | undefined;
}

/**
 * @public
 */
export interface DeleteCustomDetectionRuleOrgConfigurationResponse {}

/**
 * @public
 */
export interface DeleteDetectorRequest {
  /**
   * The unique ID of the detector that you want to delete.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDetectorResponse {}

/**
 * @public
 */
export interface DeleteFilterRequest {
  /**
   * The unique ID of the detector that is associated with the filter.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The name of the filter that you want to delete.
   *
   * @public
   */
  FilterName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFilterResponse {}

/**
 * @public
 */
export interface DeleteInvitationsRequest {
  /**
   * A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member account that you want to delete invitations from.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsResponse {
  /**
   * A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.
   *
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeleteIPSetRequest {
  /**
   * The unique ID of the detector associated with the IPSet.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The unique ID of the IPSet to delete.
   *
   * @public
   */
  IpSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIPSetResponse {}

/**
 * @public
 */
export interface DeleteMalwareProtectionPlanRequest {
  /**
   * A unique identifier associated with Malware Protection plan resource.
   *
   * @public
   */
  MalwareProtectionPlanId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMembersRequest {
  /**
   * The unique ID of the detector of the GuardDuty account whose members you want to delete.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * A list of account IDs of the GuardDuty member accounts that you want to delete.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersResponse {
  /**
   * The accounts that could not be processed.
   *
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeletePublishingDestinationRequest {
  /**
   * The unique ID of the detector associated with the publishing destination to delete.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The ID of the publishing destination to delete.
   *
   * @public
   */
  DestinationId: string | undefined;
}

/**
 * @public
 */
export interface DeletePublishingDestinationResponse {}

/**
 * @public
 */
export interface DeleteThreatEntitySetRequest {
  /**
   * The unique ID of the detector associated with the threat entity set resource.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The unique ID that helps GuardDuty identify which threat entity set needs to be deleted.
   *
   * @public
   */
  ThreatEntitySetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteThreatEntitySetResponse {}

/**
 * @public
 */
export interface DeleteThreatIntelSetRequest {
  /**
   * The unique ID of the detector that is associated with the threatIntelSet.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The unique ID of the threatIntelSet that you want to delete.
   *
   * @public
   */
  ThreatIntelSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteThreatIntelSetResponse {}

/**
 * @public
 */
export interface DeleteTrustedEntitySetRequest {
  /**
   * The unique ID of the detector associated with the trusted entity set resource.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The unique ID that helps GuardDuty identify which trusted entity set needs to be deleted.
   *
   * @public
   */
  TrustedEntitySetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrustedEntitySetResponse {}

/**
 * Contains information about the condition.
 *
 * @public
 */
export interface FilterCondition {
  /**
   * Represents an *equal* **condition to be applied to a single field when querying for scan entries.
   *
   * @public**
   */
  EqualsValue?: string | undefined;

  /**
   * Represents a *greater than* condition to be applied to a single field when querying for scan entries.
   *
   * @public
   */
  GreaterThan?: number | undefined;

  /**
   * Represents a *less than* condition to be applied to a single field when querying for scan entries.
   *
   * @public
   */
  LessThan?: number | undefined;
}

/**
 * Represents a condition that when matched will be added to the response of the operation. Irrespective of using any filter criteria, an administrator account can view the scan entries for all of its member accounts. However, each member account can view the scan entries only for their own account.
 *
 * @public
 */
export interface FilterCriterion {
  /**
   * An enum value representing possible scan properties to match with given scan entries.
   *
   * @public
   */
  CriterionKey?: CriterionKey | undefined;

  /**
   * Contains information about the condition.
   *
   * @public
   */
  FilterCondition?: FilterCondition | undefined;
}

/**
 * Represents the criteria to be used in the filter for describing scan entries.
 *
 * @public
 */
export interface FilterCriteria {
  /**
   * Represents a condition that when matched will be added to the response of the operation.
   *
   * @public
   */
  FilterCriterion?: FilterCriterion[] | undefined;
}

/**
 * Contains information about the criteria used for sorting findings.
 *
 * @public
 */
export interface SortCriteria {
  /**
   * Represents the finding attribute, such as `accountId`, that sorts the findings.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The order by which the sorted findings are to be displayed.
   *
   * @public
   */
  OrderBy?: OrderBy | undefined;
}

/**
 * @public
 */
export interface DescribeMalwareScansRequest {
  /**
   * The unique ID of the detector that the request is associated with.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Represents the criteria to be used in the filter for describing scan entries.
   *
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * Represents the criteria used for sorting scan entries. The [`attributeName`](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_SortCriteria.html#guardduty-Type-SortCriteria-attributeName) is required and it must be `scanStartTime`.
   *
   * @public
   */
  SortCriteria?: SortCriteria | undefined;
}

/**
 * Contains EBS volume details.
 *
 * @public
 */
export interface VolumeDetail {
  /**
   * EBS volume ARN information.
   *
   * @public
   */
  VolumeArn?: string | undefined;

  /**
   * The EBS volume type.
   *
   * @public
   */
  VolumeType?: string | undefined;

  /**
   * The device name for the EBS volume.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * EBS volume size in GB.
   *
   * @public
   */
  VolumeSizeInGB?: number | undefined;

  /**
   * EBS volume encryption type.
   *
   * @public
   */
  EncryptionType?: string | undefined;

  /**
   * Snapshot ARN of the EBS volume.
   *
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * KMS key ARN used to encrypt the EBS volume.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * Represents the resources that were scanned in the scan entry.
 *
 * @public
 */
export interface ResourceDetails {
  /**
   * Instance ARN that was scanned in the scan entry.
   *
   * @public
   */
  InstanceArn?: string | undefined;
}

/**
 * Represents the result of the scan.
 *
 * @public
 */
export interface ScanResultDetails {
  /**
   * An enum value representing possible scan results.
   *
   * @public
   */
  ScanResult?: ScanResult | undefined;
}

/**
 * Represents the reason the scan was triggered.
 *
 * @public
 */
export interface TriggerDetails {
  /**
   * The ID of the GuardDuty finding that triggered the malware scan.
   *
   * @public
   */
  GuardDutyFindingId?: string | undefined;

  /**
   * The description of the scan trigger.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the trigger type that started the malware scan.
   *
   * @public
   */
  TriggerType?: TriggerType | undefined;
}

/**
 * Contains information about malware scans associated with GuardDuty Malware Protection for EC2.
 *
 * @public
 */
export interface Scan {
  /**
   * The unique ID of the detector that is associated with the request.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId?: string | undefined;

  /**
   * The unique detector ID of the administrator account that the request is associated with. If the account is an administrator, the `AdminDetectorId` will be the same as the one used for `DetectorId`.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  AdminDetectorId?: string | undefined;

  /**
   * The unique scan ID associated with a scan entry.
   *
   * @public
   */
  ScanId?: string | undefined;

  /**
   * An enum value representing possible scan statuses.
   *
   * @public
   */
  ScanStatus?: ScanStatus | undefined;

  /**
   * Represents the reason for `FAILED` scan status.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The timestamp of when the scan was triggered.
   *
   * @public
   */
  ScanStartTime?: Date | undefined;

  /**
   * The timestamp of when the scan was finished.
   *
   * @public
   */
  ScanEndTime?: Date | undefined;

  /**
   * Specifies the reason why the scan was initiated.
   *
   * @public
   */
  TriggerDetails?: TriggerDetails | undefined;

  /**
   * Represents the resources that were scanned in the scan entry.
   *
   * @public
   */
  ResourceDetails?: ResourceDetails | undefined;

  /**
   * Represents the result of the scan.
   *
   * @public
   */
  ScanResultDetails?: ScanResultDetails | undefined;

  /**
   * The ID for the account that belongs to the scan.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Represents total bytes that were scanned.
   *
   * @public
   */
  TotalBytes?: number | undefined;

  /**
   * Represents the number of files that were scanned.
   *
   * @public
   */
  FileCount?: number | undefined;

  /**
   * List of volumes that were attached to the original instance to be scanned.
   *
   * @public
   */
  AttachedVolumes?: VolumeDetail[] | undefined;

  /**
   * Specifies the scan type that invoked the malware scan.
   *
   * @public
   */
  ScanType?: ScanType | undefined;
}

/**
 * @public
 */
export interface DescribeMalwareScansResponse {
  /**
   * Contains information about malware scans associated with GuardDuty Malware Protection for EC2.
   *
   * @public
   */
  Scans: Scan[] | undefined;

  /**
   * The pagination parameter to be used on the next list operation to retrieve more items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {
  /**
   * The detector ID of the delegated administrator for which you need to retrieve the information.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items that you want in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill `nextToken` in the request with the value of `NextToken` from the previous response to continue listing data.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The current configuration of Kubernetes audit logs as a data source for the organization.
 *
 * @public
 */
export interface OrganizationKubernetesAuditLogsConfigurationResult {
  /**
   * Whether Kubernetes audit logs data source should be auto-enabled for new members joining the organization.
   *
   * @public
   */
  AutoEnable: boolean | undefined;
}

/**
 * The current configuration of all Kubernetes data sources for the organization.
 *
 * @public
 */
export interface OrganizationKubernetesConfigurationResult {
  /**
   * The current configuration of Kubernetes audit logs as a data source for the organization.
   *
   * @public
   */
  AuditLogs: OrganizationKubernetesAuditLogsConfigurationResult | undefined;
}

/**
 * An object that contains information on the status of whether EBS volumes scanning will be enabled as a data source for an organization.
 *
 * @public
 */
export interface OrganizationEbsVolumesResult {
  /**
   * An object that contains the status of whether scanning EBS volumes should be auto-enabled for new members joining the organization.
   *
   * @public
   */
  AutoEnable?: boolean | undefined;
}

/**
 * An object that contains information on the status of scanning EC2 instances with findings for an organization.
 *
 * @public
 */
export interface OrganizationScanEc2InstanceWithFindingsResult {
  /**
   * Describes the configuration for scanning EBS volumes for an organization.
   *
   * @public
   */
  EbsVolumes?: OrganizationEbsVolumesResult | undefined;
}

/**
 * An object that contains information on the status of all Malware Protection data source for an organization.
 *
 * @public
 */
export interface OrganizationMalwareProtectionConfigurationResult {
  /**
   * Describes the configuration for scanning EC2 instances with findings for an organization.
   *
   * @public
   */
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindingsResult | undefined;
}

/**
 * The current configuration of S3 data event logs as a data source for the organization.
 *
 * @public
 */
export interface OrganizationS3LogsConfigurationResult {
  /**
   * A value that describes whether S3 data event logs are automatically enabled for new members of the organization.
   *
   * @public
   */
  AutoEnable: boolean | undefined;
}

/**
 * An object that contains information on which data sources are automatically enabled for new members within the organization.
 *
 * @public
 */
export interface OrganizationDataSourceConfigurationsResult {
  /**
   * Describes whether S3 data event logs are enabled as a data source.
   *
   * @public
   */
  S3Logs: OrganizationS3LogsConfigurationResult | undefined;

  /**
   * Describes the configuration of Kubernetes data sources.
   *
   * @public
   */
  Kubernetes?: OrganizationKubernetesConfigurationResult | undefined;

  /**
   * Describes the configuration of Malware Protection data source for an organization.
   *
   * @public
   */
  MalwareProtection?: OrganizationMalwareProtectionConfigurationResult | undefined;
}

/**
 * A list of additional configuration which will be configured for the organization.
 *
 * @public
 */
export interface OrganizationAdditionalConfigurationResult {
  /**
   * The name of the additional configuration that is configured for the member accounts within the organization. These values are applicable to only Runtime Monitoring protection plan.
   *
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration | undefined;

  /**
   * Describes the status of the additional configuration that is configured for the member accounts within the organization. One of the following values is the status for the entire organization:
   *
   * - `NEW`: Indicates that when a new account joins the organization, they will have the additional configuration enabled automatically.
   * - `ALL`: Indicates that all accounts in the organization have the additional configuration enabled automatically. This includes `NEW` accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.
   *
   *   It may take up to 24 hours to update the configuration for all the member accounts.
   * - `NONE`: Indicates that the additional configuration will not be automatically enabled for any account in the organization. The administrator must manage the additional configuration for each account individually.
   *
   * @public
   */
  AutoEnable?: OrgFeatureStatus | undefined;
}

/**
 * A list of features which will be configured for the organization.
 *
 * @public
 */
export interface OrganizationFeatureConfigurationResult {
  /**
   * The name of the feature that is configured for the member accounts within the organization.
   *
   * @public
   */
  Name?: OrgFeature | undefined;

  /**
   * Describes the status of the feature that is configured for the member accounts within the organization.
   *
   * - `NEW`: Indicates that when a new account joins the organization, they will have the feature enabled automatically.
   * - `ALL`: Indicates that all accounts in the organization have the feature enabled automatically. This includes `NEW` accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.
   * - `NONE`: Indicates that the feature will not be automatically enabled for any account in the organization. In this case, each account will be managed individually by the administrator.
   *
   * @public
   */
  AutoEnable?: OrgFeatureStatus | undefined;

  /**
   * The additional configuration that is configured for the member accounts within the organization.
   *
   * @public
   */
  AdditionalConfiguration?: OrganizationAdditionalConfigurationResult[] | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * Indicates whether GuardDuty is automatically enabled for accounts added to the organization.
   *
   * Even though this is still supported, we recommend using `AutoEnableOrganizationMembers` to achieve the similar results.
   *
   * @deprecated This field is deprecated, use AutoEnableOrganizationMembers instead.
   * @public
   */
  AutoEnable?: boolean | undefined;

  /**
   * Indicates whether the maximum number of allowed member accounts are already associated with the delegated administrator account for your organization.
   *
   * @public
   */
  MemberAccountLimitReached: boolean | undefined;

  /**
   * Describes which data sources are enabled automatically for member accounts.
   *
   * @deprecated This parameter is deprecated, use Features instead.
   * @public
   */
  DataSources?: OrganizationDataSourceConfigurationsResult | undefined;

  /**
   * A list of features that are configured for this organization.
   *
   * @public
   */
  Features?: OrganizationFeatureConfigurationResult[] | undefined;

  /**
   * The pagination parameter to be used on the next list operation to retrieve more items.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Indicates the auto-enablement configuration of GuardDuty or any of the corresponding protection plans for the member accounts in the organization.
   *
   * - `NEW`: Indicates that when a new account joins the organization, they will have GuardDuty or any of the corresponding protection plans enabled automatically.
   * - `ALL`: Indicates that all accounts in the organization have GuardDuty and any of the corresponding protection plans enabled automatically. This includes `NEW` accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.
   * - `NONE`: Indicates that GuardDuty or any of the corresponding protection plans will not be automatically enabled for any account in the organization. The administrator must manage GuardDuty for each account in the organization individually.
   *
   *   When you update the auto-enable setting from `ALL` or `NEW` to `NONE`, this action doesn't disable the corresponding option for your existing accounts. This configuration will apply to the new accounts that join the organization. After you update the auto-enable settings, no new account will have the corresponding option as enabled.
   *
   * @public
   */
  AutoEnableOrganizationMembers?: AutoEnableMembers | undefined;
}

/**
 * @public
 */
export interface DescribePublishingDestinationRequest {
  /**
   * The unique ID of the detector associated with the publishing destination to retrieve.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * The ID of the publishing destination to retrieve.
   *
   * @public
   */
  DestinationId: string | undefined;
}

/**
 * @public
 */
export interface DescribePublishingDestinationResponse {
  /**
   * The ID of the publishing destination.
   *
   * @public
   */
  DestinationId: string | undefined;

  /**
   * The type of publishing destination. Currently, only Amazon S3 buckets are supported.
   *
   * @public
   */
  DestinationType: DestinationType | undefined;

  /**
   * The status of the publishing destination.
   *
   * @public
   */
  Status: PublishingStatus | undefined;

  /**
   * The time, in epoch millisecond format, at which GuardDuty was first unable to publish findings to the destination.
   *
   * @public
   */
  PublishingFailureStartTimestamp: number | undefined;

  /**
   * A `DestinationProperties` object that includes the `DestinationArn` and `KmsKeyArn` of the publishing destination.
   *
   * @public
   */
  DestinationProperties: DestinationProperties | undefined;

  /**
   * The tags of the publishing destination resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Contains information about the publishing destination, including the ID, type, and status.
 *
 * @public
 */
export interface Destination {
  /**
   * The unique ID of the publishing destination.
   *
   * @public
   */
  DestinationId: string | undefined;

  /**
   * The type of resource used for the publishing destination. Currently, only Amazon S3 buckets are supported.
   *
   * @public
   */
  DestinationType: DestinationType | undefined;

  /**
   * The status of the publishing destination.
   *
   * @public
   */
  Status: PublishingStatus | undefined;
}

/**
 * Contains information about the network connection.
 *
 * @public
 */
export interface NetworkConnection {
  /**
   * The direction in which the network traffic is flowing.
   *
   * @public
   */
  Direction: NetworkDirection | undefined;
}

/**
 * Contains information about network endpoint location.
 *
 * @public
 */
export interface NetworkGeoLocation {
  /**
   * The name of the city.
   *
   * @public
   */
  City: string | undefined;

  /**
   * The name of the country.
   *
   * @public
   */
  Country: string | undefined;

  /**
   * The latitude information of the endpoint location.
   *
   * @public
   */
  Latitude: number | undefined;

  /**
   * The longitude information of the endpoint location.
   *
   * @public
   */
  Longitude: number | undefined;
}

/**
 * Contains information about network endpoints that were observed in the attack sequence.
 *
 * @public
 */
export interface NetworkEndpoint {
  /**
   * The ID of the network endpoint.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The IP address associated with the network endpoint.
   *
   * @public
   */
  Ip?: string | undefined;

  /**
   * The domain information for the network endpoint.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The port number associated with the network endpoint.
   *
   * @public
   */
  Port?: number | undefined;

  /**
   * Information about the location of the network endpoint.
   *
   * @public
   */
  Location?: NetworkGeoLocation | undefined;

  /**
   * The Autonomous System (AS) of the network endpoint.
   *
   * @public
   */
  AutonomousSystem?: AutonomousSystem | undefined;

  /**
   * Information about the network connection.
   *
   * @public
   */
  Connection?: NetworkConnection | undefined;
}

/**
 * Contains information about the Amazon EC2 Image involved in a GuardDuty finding, including unique identifiers of the Amazon EC2 instances.
 *
 * @public
 */
export interface Ec2Image {
  /**
   * A list of unique identifiers for the compromised Amazon EC2 instances that were launched with the same Amazon Machine Image (AMI).
   *
   * @public
   */
  Ec2InstanceUids?: string[] | undefined;
}

/**
 * Contains information about the EC2 instance profile.
 *
 * @public
 */
export interface IamInstanceProfile {
  /**
   * The profile ARN of the EC2 instance.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The profile ID of the EC2 instance.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Contains information about the product code for the EC2 instance.
 *
 * @public
 */
export interface ProductCode {
  /**
   * The product code information.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The product code type.
   *
   * @public
   */
  ProductType?: string | undefined;
}

/**
 * Details about the potentially impacted Amazon EC2 instance resource.
 *
 * @public
 */
export interface Ec2Instance {
  /**
   * The availability zone of the Amazon EC2 instance. For more information, see [Availability zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The image description of the Amazon EC2 instance.
   *
   * @public
   */
  ImageDescription?: string | undefined;

  /**
   * The state of the Amazon EC2 instance. For more information, see [Amazon EC2 instance state changes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  InstanceState?: string | undefined;

  /**
   * Contains information about the EC2 instance profile.
   *
   * @public
   */
  IamInstanceProfile?: IamInstanceProfile | undefined;

  /**
   * Type of the Amazon EC2 instance.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Outpost. This shows applicable Amazon Web Services Outposts instances.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The platform of the Amazon EC2 instance.
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * The product code of the Amazon EC2 instance.
   *
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  Ec2NetworkInterfaceUids?: string[] | undefined;
}

/**
 * Contains information about the Amazon EC2 launch template involved in a GuardDuty finding, including unique identifiers of the Amazon EC2 instances.
 *
 * @public
 */
export interface Ec2LaunchTemplate {
  /**
   * A list of unique identifiers for the compromised Amazon EC2 instances that share the same Amazon EC2 launch template.
   *
   * @public
   */
  Ec2InstanceUids?: string[] | undefined;

  /**
   * Version of the EC2 launch template.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Contains other private IP address information of the EC2 instance.
 *
 * @public
 */
export interface PrivateIpAddressDetails {
  /**
   * The private DNS name of the EC2 instance.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * The private IP address of the EC2 instance.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;
}

/**
 * Contains information about the security groups associated with the EC2 instance.
 *
 * @public
 */
export interface SecurityGroup {
  /**
   * The security group ID of the EC2 instance.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The security group name of the EC2 instance.
   *
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * Contains information about the elastic network interface of the Amazon EC2 instance.
 *
 * @public
 */
export interface Ec2NetworkInterface {
  /**
   * A list of IPv6 addresses for the Amazon EC2 instance.
   *
   * @public
   */
  Ipv6Addresses?: string[] | undefined;

  /**
   * Other private IP address information of the Amazon EC2 instance.
   *
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressDetails[] | undefined;

  /**
   * The public IP address of the Amazon EC2 instance.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * The security groups associated with the Amazon EC2 instance.
   *
   * @public
   */
  SecurityGroups?: SecurityGroup[] | undefined;

  /**
   * The subnet ID of the Amazon EC2 instance.
   *
   * @public
   */
  SubNetId?: string | undefined;

  /**
   * The VPC ID of the Amazon EC2 instance.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Contains information about the Amazon EC2 VPC involved in a GuardDuty finding, including unique identifiers of the Amazon EC2 instances.
 *
 * @public
 */
export interface Ec2Vpc {
  /**
   * A list of unique identifiers for the compromised Amazon EC2 instances that were launched within the same Virtual Private Cloud (VPC).
   *
   * @public
   */
  Ec2InstanceUids?: string[] | undefined;
}

/**
 * Contains information about the Amazon ECS cluster involved in a GuardDuty finding, including cluster identification and status.
 *
 * @public
 */
export interface EcsCluster {
  /**
   * The current status of the Amazon ECS cluster.
   *
   * @public
   */
  Status?: EcsClusterStatus | undefined;

  /**
   * A list of unique identifiers for the Amazon EC2 instances that serve as container instances in the Amazon ECS cluster.
   *
   * @public
   */
  Ec2InstanceUids?: string[] | undefined;
}

/**
 * Contains information about Amazon ECS task involved in a GuardDuty finding, including task definition and container identifiers.
 *
 * @public
 */
export interface EcsTask {
  /**
   * The timestamp indicating when the Amazon ECS task was created, in UTC format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The ARN of task definition which describes the container and volume definitions of the Amazon ECS task.
   *
   * @public
   */
  TaskDefinitionArn?: string | undefined;

  /**
   * The infrastructure type on which the Amazon ECS task runs.
   *
   * @public
   */
  LaunchType?: EcsLaunchType | undefined;

  /**
   * A list of unique identifiers for the containers associated with the Amazon ECS task.
   *
   * @public
   */
  ContainerUids?: string[] | undefined;
}

/**
 * Contains information about the Amazon EKS cluster involved in a GuardDuty finding, including cluster identification, status, and network configuration.
 *
 * @public
 */
export interface EksCluster {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the Amazon EKS cluster involved in the finding.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The timestamp indicating when the Amazon EKS cluster was created, in UTC format.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The current status of the Amazon EKS cluster.
   *
   * @public
   */
  Status?: ClusterStatus | undefined;

  /**
   * The ID of the Amazon Virtual Private Cloud (Amazon VPC) associated with the Amazon EKS cluster.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * A list of unique identifiers for the Amazon EC2 instances that serve as worker nodes in the Amazon EKS cluster.
   *
   * @public
   */
  Ec2InstanceUids?: string[] | undefined;
}

/**
 * Contains information about the IAM instance profile involved in a GuardDuty finding, including unique identifiers of the Amazon EC2 instances.
 *
 * @public
 */
export interface IamInstanceProfileV2 {
  /**
   * A list of unique identifiers for the compromised Amazon EC2 instances that share the same IAM instance profile.
   *
   * @public
   */
  Ec2InstanceUids?: string[] | undefined;
}

/**
 * Contains information about Kubernetes workloads involved in a GuardDuty finding, including pods, deployments, and other Kubernetes resources.
 *
 * @public
 */
export interface KubernetesWorkload {
  /**
   * A list of unique identifiers for the containers that are part of the Kubernetes workload.
   *
   * @public
   */
  ContainerUids?: string[] | undefined;

  /**
   * The Kubernetes namespace in which the workload is running, providing logical isolation within the cluster.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The types of Kubernetes resources involved in the workload.
   *
   * @public
   */
  KubernetesResourcesTypes?: KubernetesResourcesTypes | undefined;
}

/**
 * Describes public access policies that apply to the Amazon S3 bucket.
 *
 * For information about each of the following settings, see [Blocking public access to your Amazon S3 storage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html) in the *Amazon S3 User Guide*.
 *
 * @public
 */
export interface PublicAccessConfiguration {
  /**
   * Indicates whether or not there is a setting that allows public access to the Amazon S3 buckets through access control lists (ACLs).
   *
   * @public
   */
  PublicAclAccess?: PublicAccessStatus | undefined;

  /**
   * Indicates whether or not there is a setting that allows public access to the Amazon S3 bucket policy.
   *
   * @public
   */
  PublicPolicyAccess?: PublicAccessStatus | undefined;

  /**
   * Indicates whether or not there is a setting that ignores all public access control lists (ACLs) on the Amazon S3 bucket and the objects that it contains.
   *
   * @public
   */
  PublicAclIgnoreBehavior?: PublicAclIgnoreBehavior | undefined;

  /**
   * Indicates whether or not there is a setting that restricts access to the bucket with specified policies.
   *
   * @public
   */
  PublicBucketRestrictBehavior?: PublicBucketRestrictBehavior | undefined;
}

/**
 * Contains information about the Amazon S3 bucket policies and encryption.
 *
 * @public
 */
export interface S3Bucket {
  /**
   * The owner ID of the associated S3Amazon S3bucket.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The timestamp at which the Amazon S3 bucket was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The type of encryption used for the Amazon S3 buckets and its objects. For more information, see [Protecting data with server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html) in the *Amazon S3 User Guide*.
   *
   * @public
   */
  EncryptionType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the encryption key that is used to encrypt the Amazon S3 bucket and its objects.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * Describes the effective permissions on this S3 bucket, after factoring all the attached policies.
   *
   * @public
   */
  EffectivePermission?: string | undefined;

  /**
   * Indicates whether or not the public read access is allowed for an Amazon S3 bucket.
   *
   * @public
   */
  PublicReadAccess?: PublicAccessStatus | undefined;

  /**
   * Indicates whether or not the public write access is allowed for an Amazon S3 bucket.
   *
   * @public
   */
  PublicWriteAccess?: PublicAccessStatus | undefined;

  /**
   * Contains information about the public access policies that apply to the Amazon S3 bucket at the account level.
   *
   * @public
   */
  AccountPublicAccess?: PublicAccessConfiguration | undefined;

  /**
   * Contains information about public access policies that apply to the Amazon S3 bucket.
   *
   * @public
   */
  BucketPublicAccess?: PublicAccessConfiguration | undefined;

  /**
   * Represents a list of Amazon S3 object identifiers.
   *
   * @public
   */
  S3ObjectUids?: string[] | undefined;
}

/**
 * Contains information about the Amazon S3 object.
 *
 * @public
 */
export interface S3Object {
  /**
   * The entity tag is a hash of the Amazon S3 object. The ETag reflects changes only to the contents of an object, and not its metadata.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The key of the Amazon S3 object.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The version Id of the Amazon S3 object.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * Contains information about the Amazon Web Services resource that is associated with the activity that prompted GuardDuty to generate a finding.
 *
 * @public
 */
export interface ResourceData {
  /**
   * Contains information about the Amazon S3 bucket.
   *
   * @public
   */
  S3Bucket?: S3Bucket | undefined;

  /**
   * Contains information about the Amazon EC2 instance.
   *
   * @public
   */
  Ec2Instance?: Ec2Instance | undefined;

  /**
   * Contains information about the IAM access key details of a user that involved in the GuardDuty finding.
   *
   * @public
   */
  AccessKey?: AccessKey | undefined;

  /**
   * Contains information about the elastic network interface of the Amazon EC2 instance.
   *
   * @public
   */
  Ec2NetworkInterface?: Ec2NetworkInterface | undefined;

  /**
   * Contains information about the Amazon S3 object.
   *
   * @public
   */
  S3Object?: S3Object | undefined;

  /**
   * Contains detailed information about the Amazon EKS cluster associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  EksCluster?: EksCluster | undefined;

  /**
   * Contains detailed information about the Kubernetes workload associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  KubernetesWorkload?: KubernetesWorkload | undefined;

  /**
   * Contains detailed information about the container associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  Container?: ContainerFindingResource | undefined;

  /**
   * Contains detailed information about the Amazon ECS cluster associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  EcsCluster?: EcsCluster | undefined;

  /**
   * Contains detailed information about the Amazon ECS task associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  EcsTask?: EcsTask | undefined;

  /**
   * Contains detailed information about the IAM instance profile associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  IamInstanceProfile?: IamInstanceProfileV2 | undefined;

  /**
   * Contains detailed information about the Auto Scaling Group associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  AutoscalingAutoScalingGroup?: AutoscalingAutoScalingGroup | undefined;

  /**
   * Contains detailed information about the EC2 launch template associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  Ec2LaunchTemplate?: Ec2LaunchTemplate | undefined;

  /**
   * Contains detailed information about the EC2 VPC associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  Ec2Vpc?: Ec2Vpc | undefined;

  /**
   * Contains detailed information about the EC2 Image associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  Ec2Image?: Ec2Image | undefined;

  /**
   * Contains detailed information about the CloudFormation stack associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  CloudformationStack?: CloudformationStack | undefined;

  /**
   * Contains detailed information about the Amazon Bedrock guardrail associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  BedrockGuardrail?: BedrockGuardrailResource | undefined;
}

/**
 * Contains information about a tag key-value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * Describes the key associated with the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Describes the value associated with the tag key.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Contains information about the Amazon Web Services resource that is associated with the GuardDuty finding.
 *
 * @public
 */
export interface ResourceV2 {
  /**
   * The unique identifier of the resource.
   *
   * @public
   */
  Uid: string | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Web Services account ID to which the resource belongs.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The type of the Amazon Web Services resource.
   *
   * @public
   */
  ResourceType: FindingResourceType | undefined;

  /**
   * The Amazon Web Services Region where the resource belongs.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The Amazon Web Services service of the resource.
   *
   * @public
   */
  Service?: string | undefined;

  /**
   * The cloud partition within the Amazon Web Services Region to which the resource belongs.
   *
   * @public
   */
  CloudPartition?: string | undefined;

  /**
   * Contains information about the tags associated with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Contains information about the Amazon Web Services resource associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  Data?: ResourceData | undefined;
}

/**
 * Contains information about the indicators that include a set of signals observed in an attack sequence.
 *
 * @public
 */
export interface Indicator {
  /**
   * Specific indicator keys observed in the attack sequence. For description of the valid values for key, see [Attack sequence finding details](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings-summary.html#guardduty-extended-threat-detection-attack-sequence-finding-details) in the *Amazon GuardDuty User Guide*.
   *
   * @public
   */
  Key: IndicatorType | undefined;

  /**
   * Values associated with each indicator key. For example, if the indicator key is `SUSPICIOUS_NETWORK`, then the value will be the name of the network. If the indicator key is `ATTACK_TACTIC`, then the value will be one of the MITRE tactics.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * Title describing the indicator.
   *
   * @public
   */
  Title?: string | undefined;
}

/**
 * Contains information about the signals involved in the attack sequence.
 *
 * @public
 */
export interface Signal {
  /**
   * The unique identifier of the signal.
   *
   * @public
   */
  Uid: string | undefined;

  /**
   * The type of the signal used to identify an attack sequence.
   *
   * Signals can be GuardDuty findings or activities observed in data sources that GuardDuty monitors. For more information, see [Foundational data sources](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html) in the *Amazon GuardDuty User Guide*.
   *
   * A signal type can be one of the valid values listed in this API. Here are the related descriptions:
   *
   * - `FINDING` - Individually generated GuardDuty finding.
   * - `CLOUD_TRAIL` - Activity observed from CloudTrail logs
   * - `S3_DATA_EVENTS` - Activity observed from CloudTrail data events for S3. Activities associated with this type will show up only when you have enabled GuardDuty S3 Protection feature in your account. For more information about S3 Protection and steps to enable it, see [S3 Protection](https://docs.aws.amazon.com/guardduty/latest/ug/s3-protection.html) in the *Amazon GuardDuty User Guide*.
   *
   * @public
   */
  Type: SignalType | undefined;

  /**
   * The description of the signal.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the signal. For example, when signal type is `FINDING`, the signal name is the name of the finding.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The timestamp when the first finding or activity related to this signal was observed.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when this signal was last observed.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The timestamp when the first finding or activity related to this signal was observed.
   *
   * @public
   */
  FirstSeenAt: Date | undefined;

  /**
   * The timestamp when the last finding or activity related to this signal was observed.
   *
   * @public
   */
  LastSeenAt: Date | undefined;

  /**
   * The severity associated with the signal. For more information about severity, see [Findings severity levels](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings-severity.html) in the *Amazon GuardDuty User Guide*.
   *
   * @public
   */
  Severity?: number | undefined;

  /**
   * The number of times this signal was observed.
   *
   * @public
   */
  Count: number | undefined;

  /**
   * Information about the unique identifiers of the resources involved in the signal.
   *
   * @public
   */
  ResourceUids?: string[] | undefined;

  /**
   * Information about the IDs of the threat actors involved in the signal.
   *
   * @public
   */
  ActorIds?: string[] | undefined;

  /**
   * Information about the endpoint IDs associated with this signal.
   *
   * @public
   */
  EndpointIds?: string[] | undefined;

  /**
   * Contains information about the indicators associated with the signals.
   *
   * @public
   */
  SignalIndicators?: Indicator[] | undefined;

  /**
   * Contains information about the activities, such as API calls, that were observed for this signal.
   *
   * @public
   */
  Activities?: Activity[] | undefined;
}

/**
 * Contains information about the GuardDuty attack sequence finding.
 *
 * @public
 */
export interface Sequence {
  /**
   * Unique identifier of the attack sequence.
   *
   * @public
   */
  Uid: string | undefined;

  /**
   * Description of the attack sequence.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Contains information about the actors involved in the attack sequence.
   *
   * @public
   */
  Actors?: Actor[] | undefined;

  /**
   * Contains information about the resources involved in the attack sequence.
   *
   * @public
   */
  Resources?: ResourceV2[] | undefined;

  /**
   * Contains information about the network endpoints that were used in the attack sequence.
   *
   * @public
   */
  Endpoints?: NetworkEndpoint[] | undefined;

  /**
   * Contains information about the signals involved in the attack sequence.
   *
   * @public
   */
  Signals: Signal[] | undefined;

  /**
   * Contains information about the indicators observed in the attack sequence.
   *
   * @public
   */
  SequenceIndicators?: Indicator[] | undefined;

  /**
   * Additional types of sequences that may be associated with the attack sequence finding, providing further context about the nature of the detected threat.
   *
   * @public
   */
  AdditionalSequenceTypes?: string[] | undefined;
}

/**
 * Contains information about the detected behavior.
 *
 * @public
 */
export interface Detection {
  /**
   * The details about the anomalous activity that caused GuardDuty to generate the finding.
   *
   * @public
   */
  Anomaly?: Anomaly | undefined;

  /**
   * The details about the attack sequence.
   *
   * @public
   */
  Sequence?: Sequence | undefined;
}

/**
 * The requirements for running a Runtime Monitoring custom detection rule on Amazon EC2.
 *
 * @public
 */
export interface DetectionRuleEc2Requirements {
  /**
   * The minimum GuardDuty agent version required to run the rule on Amazon EC2.
   *
   * @public
   */
  MinAgentVersion?: string | undefined;
}

/**
 * The requirements for running a Runtime Monitoring custom detection rule on Amazon ECS with the Fargate launch type.
 *
 * @public
 */
export interface DetectionRuleEcsFargateRequirements {
  /**
   * The minimum GuardDuty agent version required to run the rule on Amazon ECS with the Fargate launch type.
   *
   * @public
   */
  MinAgentVersion?: string | undefined;
}

/**
 * The requirements for running a Runtime Monitoring custom detection rule on Amazon EKS.
 *
 * @public
 */
export interface DetectionRuleEksRequirements {
  /**
   * The minimum GuardDuty agent version required to run the rule on Amazon EKS.
   *
   * @public
   */
  MinAgentVersion?: string | undefined;
}

/**
 * Contains filter criteria for listing custom detection rules or associations.
 *
 * @public
 */
export interface DetectionRuleFilter {
  /**
   * The name of the field to filter by.
   *
   * @public
   */
  Name: FilterFieldName | undefined;

  /**
   * The values to match against the specified filter name.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The condition to apply to the filter. For example, `EQUALS` or `CONTAINS`.
   *
   * @public
   */
  Condition?: DetectionRuleFilterCondition | undefined;
}

/**
 * Contains the organization-level configuration for a custom detection rule.
 *
 * @public
 */
export interface DetectionRuleOrgConfiguration {
  /**
   * The unique identifier for the custom detection rule.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The execution mode of the organization configuration. Valid values: `LIVE` | `DRY_RUN`.
   *
   * @public
   */
  Mode: AssociationMode | undefined;

  /**
   * The configuration status. Valid values: `ACTIVE` | `PROCESSING` | `FAILED`.
   *
   * @public
   */
  Status: DetectionRuleConfigurationStatus | undefined;

  /**
   * The reason for the current configuration status.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * A list of member account IDs included in the organization configuration. Mutually exclusive with `ExcludeAccountIds`.
   *
   * @public
   */
  IncludeAccountIds: string[] | undefined;

  /**
   * A list of member account IDs excluded from the organization configuration. Mutually exclusive with `IncludeAccountIds`.
   *
   * @public
   */
  ExcludeAccountIds: string[] | undefined;

  /**
   * The timestamp when the organization configuration was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the organization configuration was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The timestamp when the organization configuration expires.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;
}

/**
 * Contains summary information about an organization-level configuration for a custom detection rule.
 *
 * @public
 */
export interface DetectionRuleOrgConfigurationSummary {
  /**
   * The unique identifier for the custom detection rule.
   *
   * @public
   */
  RuleId: string | undefined;

  /**
   * The rule execution mode.
   *
   * @public
   */
  Mode: AssociationMode | undefined;

  /**
   * The configuration status.
   *
   * @public
   */
  Status: DetectionRuleConfigurationStatus | undefined;

  /**
   * The reason for the current configuration status.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The timestamp when the organization configuration was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp when the organization configuration was last updated.
   *
   * @public
   */
  UpdatedAt: Date | undefined;

  /**
   * The timestamp when the organization configuration expires.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;
}

/**
 * The platforms on which a Runtime Monitoring custom detection rule can run. A member's presence is the support statement: when present, the rule runs on that platform and `minAgentVersion` is the minimum GuardDuty agent version required there. When absent, the rule cannot run on that platform at any agent version.
 *
 * @public
 */
export interface DetectionRuleRuntimePlatforms {
  /**
   * The requirements for running the rule on Amazon EKS.
   *
   * @public
   */
  Eks?: DetectionRuleEksRequirements | undefined;

  /**
   * The requirements for running the rule on Amazon EC2.
   *
   * @public
   */
  Ec2?: DetectionRuleEc2Requirements | undefined;

  /**
   * The requirements for running the rule on Amazon ECS with the Fargate launch type.
   *
   * @public
   */
  EcsFargate?: DetectionRuleEcsFargateRequirements | undefined;
}

/**
 * Contains Runtime Monitoring-specific details for a custom detection rule.
 *
 * @public
 */
export interface DetectionRuleRuntimeMonitoringDetails {
  /**
   * The platforms on which the rule can run. The presence of a platform member indicates that the rule is supported on that platform; the absence of a member indicates that the rule cannot run on that platform at any agent version.
   *
   * @public
   */
  Platforms?: DetectionRuleRuntimePlatforms | undefined;
}

/**
 * Information about the additional configuration.
 *
 * @public
 */
export interface DetectorAdditionalConfigurationResult {
  /**
   * Name of the additional configuration.
   *
   * @public
   */
  Name?: FeatureAdditionalConfiguration | undefined;

  /**
   * Status of the additional configuration.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * The timestamp at which the additional configuration was last updated. This is in UTC format.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * Indicates what manages the additional configuration. A value of `GUARDDUTY_POLICY` means a GuardDuty policy manages the additional configuration.
   *
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * Contains information about a GuardDuty feature.
 *
 * Specifying both EKS Runtime Monitoring (`EKS_RUNTIME_MONITORING`) and Runtime Monitoring (`RUNTIME_MONITORING`) will cause an error. You can add only one of these two features because Runtime Monitoring already includes the threat detection for Amazon EKS resources. For more information, see [Runtime Monitoring](https://docs.aws.amazon.com/guardduty/latest/ug/runtime-monitoring.html).
 *
 * @public
 */
export interface DetectorFeatureConfigurationResult {
  /**
   * Indicates the name of the feature that can be enabled for the detector.
   *
   * @public
   */
  Name?: DetectorFeatureResult | undefined;

  /**
   * Indicates the status of the feature that is enabled for the detector.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * The timestamp at which the feature object was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * Additional configuration for a resource.
   *
   * @public
   */
  AdditionalConfiguration?: DetectorAdditionalConfigurationResult[] | undefined;

  /**
   * Indicates what manages the feature. A value of `GUARDDUTY_POLICY` means a GuardDuty policy manages the feature.
   *
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * @public
 */
export interface DisableOrganizationAdminAccountRequest {
  /**
   * The Amazon Web Services Account ID for the organizations account to be disabled as a GuardDuty delegated administrator.
   *
   * @public
   */
  AdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisableOrganizationAdminAccountResponse {}

/**
 * @public
 */
export interface DisassociateFromAdministratorAccountRequest {
  /**
   * The unique ID of the detector of the GuardDuty member account.
   *
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFromAdministratorAccountResponse {}

/**
 * @deprecated This input is deprecated, use DisassociateFromAdministratorAccountRequest instead.
 * @public
 */
export interface DisassociateFromMasterAccountRequest {
  /**
   * The unique ID of the detector of the GuardDuty member account.
   *
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @deprecated This output is deprecated, use DisassociateFromAdministratorAccountResponse instead.
 * @public
 */
export interface DisassociateFromMasterAccountResponse {}

/**
 * @public
 */
export interface DisassociateMembersRequest {
  /**
   * The unique ID of the detector of the GuardDuty account whose members you want to disassociate from the administrator account.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * A list of account IDs of the GuardDuty member accounts that you want to disassociate from the administrator account.
   *
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateMembersResponse {
  /**
   * A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.
   *
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * Contains information about an EBS snapshot that was scanned for malware.
 *
 * @public
 */
export interface EbsSnapshot {
  /**
   * The device name of the EBS snapshot that was scanned.
   *
   * @public
   */
  DeviceName?: string | undefined;
}

/**
 * Contains details about the EBS snapshot that was scanned for malware.
 *
 * @public
 */
export interface EbsSnapshotDetails {
  /**
   * The Amazon Resource Name (ARN) of the EBS snapshot.
   *
   * @public
   */
  SnapshotArn?: string | undefined;
}

/**
 * Contains list of scanned and skipped EBS volumes with details.
 *
 * @public
 */
export interface EbsVolumeDetails {
  /**
   * List of EBS volumes that were scanned.
   *
   * @public
   */
  ScannedVolumeDetails?: VolumeDetail[] | undefined;

  /**
   * List of EBS volumes that were skipped from the malware scan.
   *
   * @public
   */
  SkippedVolumeDetails?: VolumeDetail[] | undefined;
}

/**
 * Contains details of the highest severity threat detected during scan and number of infected files.
 *
 * @public
 */
export interface HighestSeverityThreatDetails {
  /**
   * Severity level of the highest severity threat detected.
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * Threat name of the highest severity threat detected as part of the malware scan.
   *
   * @public
   */
  ThreatName?: string | undefined;

  /**
   * Total number of infected files with the highest severity threat detected.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * Total number of scanned files.
 *
 * @public
 */
export interface ScannedItemCount {
  /**
   * Total GB of files scanned for malware.
   *
   * @public
   */
  TotalGb?: number | undefined;

  /**
   * Number of files scanned.
   *
   * @public
   */
  Files?: number | undefined;

  /**
   * Total number of scanned volumes.
   *
   * @public
   */
  Volumes?: number | undefined;
}

/**
 * Contains details of infected file including name, file path and hash.
 *
 * @public
 */
export interface ScanFilePath {
  /**
   * The file path of the infected file.
   *
   * @public
   */
  FilePath?: string | undefined;

  /**
   * EBS volume ARN details of the infected file.
   *
   * @public
   */
  VolumeArn?: string | undefined;

  /**
   * The hash value of the infected file.
   *
   * @public
   */
  Hash?: string | undefined;

  /**
   * File name of the infected file.
   *
   * @public
   */
  FileName?: string | undefined;
}

/**
 * Contains files infected with the given threat providing details of malware name and severity.
 *
 * @public
 */
export interface ScanThreatName {
  /**
   * The name of the identified threat.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Severity of threat identified as part of the malware scan.
   *
   * @public
   */
  Severity?: string | undefined;

  /**
   * Total number of files infected with given threat.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * List of infected files in EBS volume with details.
   *
   * @public
   */
  FilePaths?: ScanFilePath[] | undefined;
}

/**
 * Contains details about identified threats organized by threat name.
 *
 * @public
 */
export interface ThreatDetectedByName {
  /**
   * Total number of infected files identified.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * Total number of unique threats by name identified, as part of the malware scan.
   *
   * @public
   */
  UniqueThreatNameCount?: number | undefined;

  /**
   * Flag to determine if the finding contains every single infected file-path and/or every threat.
   *
   * @public
   */
  Shortened?: boolean | undefined;

  /**
   * List of identified threats with details, organized by threat name.
   *
   * @public
   */
  ThreatNames?: ScanThreatName[] | undefined;
}

/**
 * Contains total number of infected files.
 *
 * @public
 */
export interface ThreatsDetectedItemCount {
  /**
   * Total number of infected files.
   *
   * @public
   */
  Files?: number | undefined;
}

/**
 * Contains a complete view providing malware scan result details.
 *
 * @public
 */
export interface ScanDetections {
  /**
   * Total number of scanned files.
   *
   * @public
   */
  ScannedItemCount?: ScannedItemCount | undefined;

  /**
   * Total number of infected files.
   *
   * @public
   */
  ThreatsDetectedItemCount?: ThreatsDetectedItemCount | undefined;

  /**
   * Details of the highest severity threat detected during malware scan and number of infected files.
   *
   * @public
   */
  HighestSeverityThreatDetails?: HighestSeverityThreatDetails | undefined;

  /**
   * Contains details about identified threats organized by threat name.
   *
   * @public
   */
  ThreatDetectedByName?: ThreatDetectedByName | undefined;
}

/**
 * Contains details from the malware scan that created a finding.
 *
 * @public
 */
export interface EbsVolumeScanDetails {
  /**
   * Unique Id of the malware scan that generated the finding.
   *
   * @public
   */
  ScanId?: string | undefined;

  /**
   * Returns the start date and time of the malware scan.
   *
   * @public
   */
  ScanStartedAt?: Date | undefined;

  /**
   * Returns the completion date and time of the malware scan.
   *
   * @public
   */
  ScanCompletedAt?: Date | undefined;

  /**
   * GuardDuty finding ID that triggered a malware scan.
   *
   * @public
   */
  TriggerFindingId?: string | undefined;

  /**
   * Contains list of threat intelligence sources used to detect threats.
   *
   * @public
   */
  Sources?: string[] | undefined;

  /**
   * Contains a complete view providing malware scan result details.
   *
   * @public
   */
  ScanDetections?: ScanDetections | undefined;

  /**
   * Specifies the scan type that invoked the malware scan.
   *
   * @public
   */
  ScanType?: ScanType | undefined;
}

/**
 * Contains details about the EC2 AMI that was scanned.
 *
 * @public
 */
export interface Ec2ImageDetails {
  /**
   * The Amazon Resource Name (ARN) of the EC2 AMI.
   *
   * @public
   */
  ImageArn?: string | undefined;
}

/**
 * Represents a pre-existing file or directory on the host machine that the volume maps to.
 *
 * @public
 */
export interface HostPath {
  /**
   * Path of the file or directory on the host that the volume maps to.
   *
   * @public
   */
  Path?: string | undefined;
}

/**
 * Volume used by the Kubernetes workload.
 *
 * @public
 */
export interface Volume {
  /**
   * Volume name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Represents a pre-existing file or directory on the host machine that the volume maps to.
   *
   * @public
   */
  HostPath?: HostPath | undefined;
}

/**
 * Contains information about the task in an ECS cluster.
 *
 * @public
 */
export interface EcsTaskDetails {
  /**
   * The Amazon Resource Name (ARN) of the task.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ARN of the task definition that creates the task.
   *
   * @public
   */
  DefinitionArn?: string | undefined;

  /**
   * The version counter for the task.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The Unix timestamp for the time when the task was created.
   *
   * @public
   */
  TaskCreatedAt?: Date | undefined;

  /**
   * The Unix timestamp for the time when the task started.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * Contains the tag specified when a task is started.
   *
   * @public
   */
  StartedBy?: string | undefined;

  /**
   * The tags of the ECS Task.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The list of data volume definitions for the task.
   *
   * @public
   */
  Volumes?: Volume[] | undefined;

  /**
   * The containers that's associated with the task.
   *
   * @public
   */
  Containers?: Container[] | undefined;

  /**
   * The name of the task group that's associated with the task.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * A capacity on which the task is running. For example, `Fargate` and `EC2`.
   *
   * @public
   */
  LaunchType?: string | undefined;
}

/**
 * Contains information about the details of the ECS Cluster.
 *
 * @public
 */
export interface EcsClusterDetails {
  /**
   * The name of the ECS Cluster.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the cluster.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The status of the ECS cluster.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The number of services that are running on the cluster in an ACTIVE state.
   *
   * @public
   */
  ActiveServicesCount?: number | undefined;

  /**
   * The number of container instances registered into the cluster.
   *
   * @public
   */
  RegisteredContainerInstancesCount?: number | undefined;

  /**
   * The number of tasks in the cluster that are in the RUNNING state.
   *
   * @public
   */
  RunningTasksCount?: number | undefined;

  /**
   * The tags of the ECS Cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Contains information about the details of the ECS Task.
   *
   * @public
   */
  TaskDetails?: EcsTaskDetails | undefined;
}

/**
 * Details about the EKS cluster involved in a Kubernetes finding.
 *
 * @public
 */
export interface EksClusterDetails {
  /**
   * EKS cluster name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * EKS cluster ARN.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The VPC ID to which the EKS cluster is attached.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The EKS cluster status.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The EKS cluster tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The timestamp when the EKS cluster was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * The Amazon Web Services account ID for the organization account to be enabled as a GuardDuty delegated administrator.
   *
   * @public
   */
  AdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountResponse {}

/**
 * An instance of a threat intelligence detail that constitutes evidence for the finding.
 *
 * @public
 */
export interface ThreatIntelligenceDetail {
  /**
   * The name of the threat intelligence list that triggered the finding.
   *
   * @public
   */
  ThreatListName?: string | undefined;

  /**
   * A list of names of the threats in the threat intelligence list that triggered the finding.
   *
   * @public
   */
  ThreatNames?: string[] | undefined;

  /**
   * SHA256 of the file that generated the finding.
   *
   * @public
   */
  ThreatFileSha256?: string | undefined;
}

/**
 * Contains information about the reason that the finding was generated.
 *
 * @public
 */
export interface Evidence {
  /**
   * A list of threat intelligence details related to the evidence.
   *
   * @public
   */
  ThreatIntelligenceDetails?: ThreatIntelligenceDetail[] | undefined;
}

/**
 * Contains information about the elastic network interface of the EC2 instance.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * A list of IPv6 addresses for the EC2 instance.
   *
   * @public
   */
  Ipv6Addresses?: string[] | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * The private DNS name of the EC2 instance.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * The private IP address of the EC2 instance.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * Other private IP address information of the EC2 instance.
   *
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressDetails[] | undefined;

  /**
   * The public DNS name of the EC2 instance.
   *
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * The public IP address of the EC2 instance.
   *
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * The security groups associated with the EC2 instance.
   *
   * @public
   */
  SecurityGroups?: SecurityGroup[] | undefined;

  /**
   * The subnet ID of the EC2 instance.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The VPC ID of the EC2 instance.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * Contains information about the details of an instance.
 *
 * @public
 */
export interface InstanceDetails {
  /**
   * The Availability Zone of the EC2 instance.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The profile information of the EC2 instance.
   *
   * @public
   */
  IamInstanceProfile?: IamInstanceProfile | undefined;

  /**
   * The image description of the EC2 instance.
   *
   * @public
   */
  ImageDescription?: string | undefined;

  /**
   * The image ID of the EC2 instance.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The ID of the EC2 instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The state of the EC2 instance.
   *
   * @public
   */
  InstanceState?: string | undefined;

  /**
   * The type of the EC2 instance.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Outpost. Only applicable to Amazon Web Services Outposts instances.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * The launch time of the EC2 instance.
   *
   * @public
   */
  LaunchTime?: string | undefined;

  /**
   * The elastic network interface information of the EC2 instance.
   *
   * @public
   */
  NetworkInterfaces?: NetworkInterface[] | undefined;

  /**
   * The platform of the EC2 instance.
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * The product code of the EC2 instance.
   *
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * The tags of the EC2 instance.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains information about the impersonated user.
 *
 * @public
 */
export interface ImpersonatedUser {
  /**
   * Information about the `username` that was being impersonated.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The `group` to which the user name belongs.
   *
   * @public
   */
  Groups?: string[] | undefined;
}

/**
 * Details about the Kubernetes user involved in a Kubernetes finding.
 *
 * @public
 */
export interface KubernetesUserDetails {
  /**
   * The username of the user who called the Kubernetes API.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The user ID of the user who called the Kubernetes API.
   *
   * @public
   */
  Uid?: string | undefined;

  /**
   * The groups that include the user who called the Kubernetes API.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * Entity that assumes the IAM role when Kubernetes RBAC permissions are assigned to that role.
   *
   * @public
   */
  SessionName?: string[] | undefined;

  /**
   * Information about the impersonated user.
   *
   * @public
   */
  ImpersonatedUser?: ImpersonatedUser | undefined;
}

/**
 * Details about the Kubernetes workload involved in a Kubernetes finding.
 *
 * @public
 */
export interface KubernetesWorkloadDetails {
  /**
   * Kubernetes workload name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Kubernetes workload type (e.g. Pod, Deployment, etc.).
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * Kubernetes workload ID.
   *
   * @public
   */
  Uid?: string | undefined;

  /**
   * Kubernetes namespace that the workload is part of.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * Whether the hostNetwork flag is enabled for the pods included in the workload.
   *
   * @public
   */
  HostNetwork?: boolean | undefined;

  /**
   * The service account name that is associated with a Kubernetes workload.
   *
   * @public
   */
  ServiceAccountName?: string | undefined;

  /**
   * Containers running as part of the Kubernetes workload.
   *
   * @public
   */
  Containers?: Container[] | undefined;

  /**
   * Volumes used by the Kubernetes workload.
   *
   * @public
   */
  Volumes?: Volume[] | undefined;

  /**
   * Whether the host IPC flag is enabled for the pods in the workload.
   *
   * @public
   */
  HostIPC?: boolean | undefined;

  /**
   * Whether the host PID flag is enabled for the pods in the workload.
   *
   * @public
   */
  HostPID?: boolean | undefined;
}

/**
 * Details about Kubernetes resources such as a Kubernetes user or workload resource involved in a Kubernetes finding.
 *
 * @public
 */
export interface KubernetesDetails {
  /**
   * Details about the Kubernetes user involved in a Kubernetes finding.
   *
   * @public
   */
  KubernetesUserDetails?: KubernetesUserDetails | undefined;

  /**
   * Details about the Kubernetes workload involved in a Kubernetes finding.
   *
   * @public
   */
  KubernetesWorkloadDetails?: KubernetesWorkloadDetails | undefined;
}

/**
 * Amazon Virtual Private Cloud configuration details associated with your Lambda function.
 *
 * @public
 */
export interface VpcConfig {
  /**
   * The identifiers of the subnets that are associated with your Lambda function.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The identifier of the Amazon Virtual Private Cloud.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The identifier of the security group attached to the Lambda function.
   *
   * @public
   */
  SecurityGroups?: SecurityGroup[] | undefined;
}

/**
 * Information about the Lambda function involved in the finding.
 *
 * @public
 */
export interface LambdaDetails {
  /**
   * Amazon Resource Name (ARN) of the Lambda function.
   *
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * Name of the Lambda function.
   *
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * Description of the Lambda function.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp when the Lambda function was last modified. This field is in the UTC date string format `(2023-03-22T19:37:20.168Z)`.
   *
   * @public
   */
  LastModifiedAt?: Date | undefined;

  /**
   * The revision ID of the Lambda function version.
   *
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * The version of the Lambda function.
   *
   * @public
   */
  FunctionVersion?: string | undefined;

  /**
   * The execution role of the Lambda function.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * Amazon Virtual Private Cloud configuration details associated with your Lambda function.
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * A list of tags attached to this resource, listed in the format of `key`:`value` pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains information about the AI model involved in a finding.
 *
 * @public
 */
export interface ModelDetail {
  /**
   * The identifier of the AI model.
   *
   * @public
   */
  ModelId?: string | undefined;
}

/**
 * Contains information about the resource type `RDSDBInstance` involved in a GuardDuty finding.
 *
 * @public
 */
export interface RdsDbInstanceDetails {
  /**
   * The identifier associated to the database instance that was involved in the finding.
   *
   * @public
   */
  DbInstanceIdentifier?: string | undefined;

  /**
   * The database engine of the database instance involved in the finding.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version of the database engine that was involved in the finding.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The identifier of the database cluster that contains the database instance ID involved in the finding.
   *
   * @public
   */
  DbClusterIdentifier?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the database instance involved in the finding.
   *
   * @public
   */
  DbInstanceArn?: string | undefined;

  /**
   * The unique ID of the database resource involved in the activity that prompted GuardDuty to generate the finding.
   *
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * Information about the tag key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains information about the user and authentication details for a database instance involved in the finding.
 *
 * @public
 */
export interface RdsDbUserDetails {
  /**
   * The user name used in the anomalous login attempt.
   *
   * @public
   */
  User?: string | undefined;

  /**
   * The application name used in the anomalous login attempt.
   *
   * @public
   */
  Application?: string | undefined;

  /**
   * The name of the database instance involved in the anomalous login attempt.
   *
   * @public
   */
  Database?: string | undefined;

  /**
   * The version of the Secure Socket Layer (SSL) used for the network.
   *
   * @public
   */
  Ssl?: string | undefined;

  /**
   * The authentication method used by the user involved in the finding.
   *
   * @public
   */
  AuthMethod?: string | undefined;
}

/**
 * Contains information about the resource type `RDSLimitlessDB` that is involved in a GuardDuty finding.
 *
 * @public
 */
export interface RdsLimitlessDbDetails {
  /**
   * The name associated with the Limitless DB shard group.
   *
   * @public
   */
  DbShardGroupIdentifier?: string | undefined;

  /**
   * The resource identifier of the DB shard group within the Limitless Database.
   *
   * @public
   */
  DbShardGroupResourceId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the DB shard group.
   *
   * @public
   */
  DbShardGroupArn?: string | undefined;

  /**
   * The database engine of the database instance involved in the finding.
   *
   * @public
   */
  Engine?: string | undefined;

  /**
   * The version of the database engine.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The name of the database cluster that is a part of the Limitless Database.
   *
   * @public
   */
  DbClusterIdentifier?: string | undefined;

  /**
   * Information about the tag key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Contains information about the time range within the continuous backup in Amazon Web Services Backup that was scanned for a point-in-time recovery resource.
 *
 * @public
 */
export interface ScanConfigurationContinuousScanDetails {
  /**
   * The timestamp representing the start of the time range that was scanned.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp representing the end of the time range that was scanned.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * Contains details about the backup recovery point.
 *
 * @public
 */
export interface RecoveryPointDetails {
  /**
   * The Amazon Resource Name (ARN) of the recovery point.
   *
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * The name of the backup vault containing the recovery point.
   *
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * Contains information about the time range within the continuous backup in Amazon Web Services Backup that was scanned for a point-in-time recovery resource.
   *
   * @public
   */
  ContinuousScanDetails?: ScanConfigurationContinuousScanDetails | undefined;
}

/**
 * Contains information on the owner of the bucket.
 *
 * @public
 */
export interface Owner {
  /**
   * The canonical user ID of the bucket owner. For information about locating your canonical user ID see [Finding Your Account Canonical User ID.](https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId)
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Contains information about how permissions are configured for the S3 bucket.
 *
 * @public
 */
export interface PermissionConfiguration {
  /**
   * Contains information about the bucket level permissions for the S3 bucket.
   *
   * @public
   */
  BucketLevelPermissions?: BucketLevelPermissions | undefined;

  /**
   * Contains information about the account level permissions on the S3 bucket.
   *
   * @public
   */
  AccountLevelPermissions?: AccountLevelPermissions | undefined;
}

/**
 * Describes the public access policies that apply to the S3 bucket.
 *
 * @public
 */
export interface PublicAccess {
  /**
   * Contains information about how permissions are configured for the S3 bucket.
   *
   * @public
   */
  PermissionConfiguration?: PermissionConfiguration | undefined;

  /**
   * Describes the effective permission on this bucket after factoring all attached policies.
   *
   * @public
   */
  EffectivePermission?: string | undefined;
}

/**
 * Information about the S3 object that was scanned
 *
 * @public
 */
export interface S3ObjectDetail {
  /**
   * Amazon Resource Name (ARN) of the S3 object.
   *
   * @public
   */
  ObjectArn?: string | undefined;

  /**
   * Key of the S3 object.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The entity tag is a hash of the S3 object. The ETag reflects changes only to the contents of an object, and not its metadata.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * Hash of the threat detected in this finding.
   *
   * @public
   */
  Hash?: string | undefined;

  /**
   * Version ID of the object.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * Contains information on the S3 bucket.
 *
 * @public
 */
export interface S3BucketDetail {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the S3 bucket.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Describes whether the bucket is a source or destination bucket.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The date and time the bucket was created at.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The owner of the S3 bucket.
   *
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * All tags attached to the S3 bucket
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Describes the server side encryption method used in the S3 bucket.
   *
   * @public
   */
  DefaultServerSideEncryption?: DefaultServerSideEncryption | undefined;

  /**
   * Describes the public access policies that apply to the S3 bucket.
   *
   * @public
   */
  PublicAccess?: PublicAccess | undefined;

  /**
   * Information about the S3 object that was scanned.
   *
   * @public
   */
  S3ObjectDetails?: S3ObjectDetail[] | undefined;
}

/**
 * Contains information about the Amazon Web Services resource associated with the activity that prompted GuardDuty to generate a finding.
 *
 * @public
 */
export interface Resource {
  /**
   * The IAM access key details (user information) of a user that engaged in the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  AccessKeyDetails?: AccessKeyDetails | undefined;

  /**
   * Contains information on the S3 bucket.
   *
   * @public
   */
  S3BucketDetails?: S3BucketDetail[] | undefined;

  /**
   * The information about the EC2 instance associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  InstanceDetails?: InstanceDetails | undefined;

  /**
   * Details about the EKS cluster involved in a Kubernetes finding.
   *
   * @public
   */
  EksClusterDetails?: EksClusterDetails | undefined;

  /**
   * Details about the Kubernetes user and workload involved in a Kubernetes finding.
   *
   * @public
   */
  KubernetesDetails?: KubernetesDetails | undefined;

  /**
   * The type of Amazon Web Services resource.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Contains list of scanned and skipped EBS volumes with details.
   *
   * @public
   */
  EbsVolumeDetails?: EbsVolumeDetails | undefined;

  /**
   * Contains information about the details of the ECS Cluster.
   *
   * @public
   */
  EcsClusterDetails?: EcsClusterDetails | undefined;

  /**
   * Details of a container.
   *
   * @public
   */
  ContainerDetails?: Container | undefined;

  /**
   * Contains information about the Lambda function that was involved in a finding.
   *
   * @public
   */
  LambdaDetails?: LambdaDetails | undefined;

  /**
   * Contains information about the database instance to which an anomalous login attempt was made.
   *
   * @public
   */
  RdsDbInstanceDetails?: RdsDbInstanceDetails | undefined;

  /**
   * Contains information about the RDS Limitless database that was involved in a GuardDuty finding.
   *
   * @public
   */
  RdsLimitlessDbDetails?: RdsLimitlessDbDetails | undefined;

  /**
   * Contains information about the user details through which anomalous login attempt was made.
   *
   * @public
   */
  RdsDbUserDetails?: RdsDbUserDetails | undefined;

  /**
   * Contains details about the EBS snapshot that was scanned.
   *
   * @public
   */
  EbsSnapshotDetails?: EbsSnapshotDetails | undefined;

  /**
   * Contains details about the EC2 image that was scanned.
   *
   * @public
   */
  Ec2ImageDetails?: Ec2ImageDetails | undefined;

  /**
   * Contains details about the backup recovery point that was scanned.
   *
   * @public
   */
  RecoveryPointDetails?: RecoveryPointDetails | undefined;

  /**
   * Contains information about the Bedrock guardrail that was involved in a finding.
   *
   * @public
   */
  BedrockGuardrailDetails?: BedrockGuardrailDetails | undefined;

  /**
   * Contains information about the AI models involved in a finding.
   *
   * @public
   */
  ModelDetails?: ModelDetail[] | undefined;
}

/**
 * Additional information about the generated finding.
 *
 * @public
 */
export interface ServiceAdditionalInfo {
  /**
   * This field specifies the value of the additional information.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Describes the type of the additional information.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Contains information about the incremental scan configuration.
 *
 * @public
 */
export interface IncrementalScanDetails {
  /**
   * Amazon Resource Name (ARN) of the baseline resource used for incremental scanning. The scan will only process changes since this baseline resource was created.
   *
   * @public
   */
  BaselineResourceArn: string | undefined;
}

/**
 * Contains finding configuration details about the malware scan.
 *
 * @public
 */
export interface MalwareProtectionFindingsScanConfiguration {
  /**
   * The event that triggered the malware scan.
   *
   * @public
   */
  TriggerType?: TriggerType | undefined;

  /**
   * Contains information about the incremental scan configuration.
   *
   * @public
   */
  IncrementalScanDetails?: IncrementalScanDetails | undefined;
}

/**
 * Contains detailed information about where a threat was detected.
 *
 * @public
 */
export interface ItemDetails {
  /**
   * Amazon Resource Name (ARN) of the resource where the threat was detected.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The path where the threat was detected.
   *
   * @public
   */
  ItemPath?: string | undefined;

  /**
   * The hash value of the infected item.
   *
   * @public
   */
  Hash?: string | undefined;

  /**
   * Additional information about the detected threat item.
   *
   * @public
   */
  AdditionalInfo?: AdditionalInfo | undefined;
}

/**
 * Information about the nested item path and hash of the protected resource.
 *
 * @public
 */
export interface ItemPath {
  /**
   * The nested item path where the infected file was found.
   *
   * @public
   */
  NestedItemPath?: string | undefined;

  /**
   * The hash value of the infected resource.
   *
   * @public
   */
  Hash?: string | undefined;
}

/**
 * Information about the detected threats associated with the generated finding.
 *
 * @public
 */
export interface Threat {
  /**
   * Name of the detected threat that caused GuardDuty to generate this finding.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Source of the threat that generated this finding.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * Information about the nested item path and hash of the protected resource.
   *
   * @public
   */
  ItemPaths?: ItemPath[] | undefined;

  /**
   * The number of occurrences of this specific threat detected during the scan.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The hash identifier of the detected malware threat.
   *
   * @public
   */
  Hash?: string | undefined;

  /**
   * Detailed information about the detected malware threat.
   *
   * @public
   */
  ItemDetails?: ItemDetails[] | undefined;
}

/**
 * Information about the malware scan that generated a GuardDuty finding.
 *
 * @public
 */
export interface MalwareScanDetails {
  /**
   * Information about the detected threats associated with the generated GuardDuty finding.
   *
   * @public
   */
  Threats?: Threat[] | undefined;

  /**
   * The unique identifier for the malware scan.
   *
   * @public
   */
  ScanId?: string | undefined;

  /**
   * The type of malware scan performed.
   *
   * @public
   */
  ScanType?: MalwareProtectionScanType | undefined;

  /**
   * The category of the malware scan.
   *
   * @public
   */
  ScanCategory?: ScanCategory | undefined;

  /**
   * The configuration settings used for the malware scan.
   *
   * @public
   */
  ScanConfiguration?: MalwareProtectionFindingsScanConfiguration | undefined;

  /**
   * The number of unique malware threats detected during the scan.
   *
   * @public
   */
  UniqueThreatCount?: number | undefined;
}

/**
 * Information about the runtime process details.
 *
 * @public
 */
export interface LineageObject {
  /**
   * The time when the process started. This is in UTC format.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The process ID of the child process.
   *
   * @public
   */
  NamespacePid?: number | undefined;

  /**
   * The user ID of the user that executed the process.
   *
   * @public
   */
  UserId?: number | undefined;

  /**
   * The name of the process.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the process.
   *
   * @public
   */
  Pid?: number | undefined;

  /**
   * The unique ID assigned to the process by GuardDuty.
   *
   * @public
   */
  Uuid?: string | undefined;

  /**
   * The absolute path of the process executable file.
   *
   * @public
   */
  ExecutablePath?: string | undefined;

  /**
   * The effective user ID that was used to execute the process.
   *
   * @public
   */
  Euid?: number | undefined;

  /**
   * The unique ID of the parent process. This ID is assigned to the parent process by GuardDuty.
   *
   * @public
   */
  ParentUuid?: string | undefined;
}

/**
 * Information about the observed process.
 *
 * @public
 */
export interface ProcessDetails {
  /**
   * The name of the process.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The absolute path of the process executable file.
   *
   * @public
   */
  ExecutablePath?: string | undefined;

  /**
   * The `SHA256` hash of the process executable.
   *
   * @public
   */
  ExecutableSha256?: string | undefined;

  /**
   * The ID of the child process.
   *
   * @public
   */
  NamespacePid?: number | undefined;

  /**
   * The present working directory of the process.
   *
   * @public
   */
  Pwd?: string | undefined;

  /**
   * The ID of the process.
   *
   * @public
   */
  Pid?: number | undefined;

  /**
   * The time when the process started. This is in UTC format.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The unique ID assigned to the process by GuardDuty.
   *
   * @public
   */
  Uuid?: string | undefined;

  /**
   * The unique ID of the parent process. This ID is assigned to the parent process by GuardDuty.
   *
   * @public
   */
  ParentUuid?: string | undefined;

  /**
   * The user that executed the process.
   *
   * @public
   */
  User?: string | undefined;

  /**
   * The unique ID of the user that executed the process.
   *
   * @public
   */
  UserId?: number | undefined;

  /**
   * The effective user ID of the user that executed the process.
   *
   * @public
   */
  Euid?: number | undefined;

  /**
   * Information about the process's lineage.
   *
   * @public
   */
  Lineage?: LineageObject[] | undefined;
}

/**
 * Additional information about the suspicious activity.
 *
 * @public
 */
export interface RuntimeContext {
  /**
   * Information about the process that modified the current process. This is available for multiple finding types.
   *
   * @public
   */
  ModifyingProcess?: ProcessDetails | undefined;

  /**
   * The timestamp at which the process modified the current process. The timestamp is in UTC date string format.
   *
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * The path to the script that was executed.
   *
   * @public
   */
  ScriptPath?: string | undefined;

  /**
   * The path to the new library that was loaded.
   *
   * @public
   */
  LibraryPath?: string | undefined;

  /**
   * The value of the LD_PRELOAD environment variable.
   *
   * @public
   */
  LdPreloadValue?: string | undefined;

  /**
   * The path to the docket socket that was accessed.
   *
   * @public
   */
  SocketPath?: string | undefined;

  /**
   * The path to the leveraged `runc` implementation.
   *
   * @public
   */
  RuncBinaryPath?: string | undefined;

  /**
   * The path in the container that modified the release agent file.
   *
   * @public
   */
  ReleaseAgentPath?: string | undefined;

  /**
   * The path on the host that is mounted by the container.
   *
   * @public
   */
  MountSource?: string | undefined;

  /**
   * The path in the container that is mapped to the host directory.
   *
   * @public
   */
  MountTarget?: string | undefined;

  /**
   * Represents the type of mounted fileSystem.
   *
   * @public
   */
  FileSystemType?: string | undefined;

  /**
   * Represents options that control the behavior of a runtime operation or action. For example, a filesystem mount operation may contain a read-only flag.
   *
   * @public
   */
  Flags?: string[] | undefined;

  /**
   * The name of the module loaded into the kernel.
   *
   * @public
   */
  ModuleName?: string | undefined;

  /**
   * The path to the module loaded into the kernel.
   *
   * @public
   */
  ModuleFilePath?: string | undefined;

  /**
   * The `SHA256` hash of the module.
   *
   * @public
   */
  ModuleSha256?: string | undefined;

  /**
   * The path to the modified shell history file.
   *
   * @public
   */
  ShellHistoryFilePath?: string | undefined;

  /**
   * Information about the process that had its memory overwritten by the current process.
   *
   * @public
   */
  TargetProcess?: ProcessDetails | undefined;

  /**
   * Represents the communication protocol associated with the address. For example, the address family `AF_INET` is used for IP version of 4 protocol.
   *
   * @public
   */
  AddressFamily?: string | undefined;

  /**
   * Specifies a particular protocol within the address family. Usually there is a single protocol in address families. For example, the address family `AF_INET` only has the IP protocol.
   *
   * @public
   */
  IanaProtocolNumber?: number | undefined;

  /**
   * Specifies the Region of a process's address space such as stack and heap.
   *
   * @public
   */
  MemoryRegions?: string[] | undefined;

  /**
   * Name of the potentially suspicious tool.
   *
   * @public
   */
  ToolName?: string | undefined;

  /**
   * Category that the tool belongs to. Some of the examples are Backdoor Tool, Pentest Tool, Network Scanner, and Network Sniffer.
   *
   * @public
   */
  ToolCategory?: string | undefined;

  /**
   * Name of the security service that has been potentially disabled.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * Example of the command line involved in the suspicious activity.
   *
   * @public
   */
  CommandLineExample?: string | undefined;

  /**
   * The suspicious file path for which the threat intelligence details were found.
   *
   * @public
   */
  ThreatFilePath?: string | undefined;

  /**
   * Represents the type of file operation that triggered the finding, such as Write, Delete, Rename, Link, or Symlink.
   *
   * @public
   */
  FileOperation?: string | undefined;

  /**
   * The path of the sensitive file that was modified. Modification includes write, delete, rename, link, or symlink operations. This field is indexed for filtering.
   *
   * @public
   */
  FilePath?: string | undefined;

  /**
   * All file paths modified by the same process that triggered the finding, up to a maximum of 25 paths.
   *
   * @public
   */
  RelatedFilePaths?: string[] | undefined;
}

/**
 * Information about the process and any required context values for a specific finding.
 *
 * @public
 */
export interface RuntimeDetails {
  /**
   * Information about the observed process.
   *
   * @public
   */
  Process?: ProcessDetails | undefined;

  /**
   * Additional information about the suspicious activity.
   *
   * @public
   */
  Context?: RuntimeContext | undefined;
}

/**
 * Contains additional information about the generated finding.
 *
 * @public
 */
export interface Service {
  /**
   * Information about the activity that is described in a finding.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * An evidence object associated with the service.
   *
   * @public
   */
  Evidence?: Evidence | undefined;

  /**
   * Indicates whether this finding is archived.
   *
   * @public
   */
  Archived?: boolean | undefined;

  /**
   * The total count of the occurrences of this finding type.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The detector ID for the GuardDuty service.
   *
   * @public
   */
  DetectorId?: string | undefined;

  /**
   * The first-seen timestamp of the activity that prompted GuardDuty to generate this finding.
   *
   * @public
   */
  EventFirstSeen?: string | undefined;

  /**
   * The last-seen timestamp of the activity that prompted GuardDuty to generate this finding.
   *
   * @public
   */
  EventLastSeen?: string | undefined;

  /**
   * The resource role information for this finding.
   *
   * @public
   */
  ResourceRole?: string | undefined;

  /**
   * The name of the Amazon Web Services service (GuardDuty) that generated a finding.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * Feedback that was submitted about the finding.
   *
   * @public
   */
  UserFeedback?: string | undefined;

  /**
   * Contains additional information about the generated finding.
   *
   * @public
   */
  AdditionalInfo?: ServiceAdditionalInfo | undefined;

  /**
   * The name of the feature that generated a finding.
   *
   * @public
   */
  FeatureName?: string | undefined;

  /**
   * Returns details from the malware scan that created a finding.
   *
   * @public
   */
  EbsVolumeScanDetails?: EbsVolumeScanDetails | undefined;

  /**
   * Information about the process and any required context values for a specific finding
   *
   * @public
   */
  RuntimeDetails?: RuntimeDetails | undefined;

  /**
   * Contains information about the detected unusual behavior.
   *
   * @public
   */
  Detection?: Detection | undefined;

  /**
   * Returns details from the malware scan that generated a GuardDuty finding.
   *
   * @public
   */
  MalwareScanDetails?: MalwareScanDetails | undefined;
}

/**
 * Contains information about the finding that is generated when abnormal or suspicious activity is detected.
 *
 * @public
 */
export interface Finding {
  /**
   * The ID of the account in which the finding was generated.
   *
   * @public
   */
  AccountId: string | undefined;

  /**
   * The ARN of the finding.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The confidence score for the finding.
   *
   * @public
   */
  Confidence?: number | undefined;

  /**
   * The time and date when the finding was created.
   *
   * @public
   */
  CreatedAt: string | undefined;

  /**
   * The description of the finding.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the finding.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The partition associated with the finding.
   *
   * @public
   */
  Partition?: string | undefined;

  /**
   * The Region where the finding was generated. For findings generated from [Global Service Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-global-service-events), the Region value in the finding might differ from the Region where GuardDuty identifies the potential threat. For more information, see [How GuardDuty handles Amazon Web Services CloudTrail global events](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html#cloudtrail_global) in the *Amazon GuardDuty User Guide*.
   *
   * @public
   */
  Region: string | undefined;

  /**
   * Contains information about the Amazon Web Services resource associated with the activity that prompted GuardDuty to generate a finding.
   *
   * @public
   */
  Resource: Resource | undefined;

  /**
   * The version of the schema used for the finding.
   *
   * @public
   */
  SchemaVersion: string | undefined;

  /**
   * Contains additional information about the generated finding.
   *
   * @public
   */
  Service?: Service | undefined;

  /**
   * The severity of the finding.
   *
   * @public
   */
  Severity: number | undefined;

  /**
   * The title of the finding.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The type of finding.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The time and date when the finding was last updated.
   *
   * @public
   */
  UpdatedAt: string | undefined;

  /**
   * Amazon Resource Name (ARN) associated with the attack sequence finding.
   *
   * @public
   */
  AssociatedAttackSequenceArn?: string | undefined;

  /**
   * The name of the custom detection rule that generated this finding.
   *
   * @public
   */
  CustomDetectionRuleName?: string | undefined;
}

/**
 * Information about each finding type associated with the `groupedByFindingType` statistics.
 *
 * @public
 */
export interface FindingTypeStatistics {
  /**
   * Name of the finding type.
   *
   * @public
   */
  FindingType?: string | undefined;

  /**
   * The timestamp at which this finding type was last generated in your environment.
   *
   * @public
   */
  LastGeneratedAt?: Date | undefined;

  /**
   * The total number of findings associated with generated for each distinct finding type.
   *
   * @public
   */
  TotalFindings?: number | undefined;
}

/**
 * Information about each resource type associated with the `groupedByResource` statistics.
 *
 * @public
 */
export interface ResourceStatistics {
  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The timestamp at which the statistics for this resource was last generated.
   *
   * @public
   */
  LastGeneratedAt?: Date | undefined;

  /**
   * ID associated with each resource. The following list provides the mapping of the resource type and resource ID.
   *
   * **Mapping of resource and resource ID**
   *
   * - AccessKey - `resource.accessKeyDetails.accessKeyId`
   * - Container - `resource.containerDetails.id`
   * - ECSCluster - `resource.ecsClusterDetails.name`
   * - EKSCluster - `resource.eksClusterDetails.name`
   * - Instance - `resource.instanceDetails.instanceId`
   * - KubernetesCluster - `resource.kubernetesDetails.kubernetesWorkloadDetails.name`
   * - Lambda - `resource.lambdaDetails.functionName`
   * - RDSDBInstance - `resource.rdsDbInstanceDetails.dbInstanceIdentifier`
   * - S3Bucket - `resource.s3BucketDetails.name`
   * - S3Object - `resource.s3BucketDetails.name`
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The total number of findings associated with this resource.
   *
   * @public
   */
  TotalFindings?: number | undefined;
}

/**
 * Information about severity level for each finding type.
 *
 * @public
 */
export interface SeverityStatistics {
  /**
   * The timestamp at which a finding type for a specific severity was last generated.
   *
   * @public
   */
  LastGeneratedAt?: Date | undefined;

  /**
   * The severity level associated with each finding type.
   *
   * @public
   */
  Severity?: number | undefined;

  /**
   * The total number of findings associated with this severity.
   *
   * @public
   */
  TotalFindings?: number | undefined;
}

/**
 * Contains information about finding statistics.
 *
 * @public
 */
export interface FindingStatistics {
  /**
   * Represents a list of map of severity to count statistics for a set of findings.
   *
   * @deprecated This parameter is deprecated. Please set GroupBy to 'SEVERITY' to return GroupedBySeverity instead.
   * @public
   */
  CountBySeverity?: Record<string, number> | undefined;

  /**
   * Represents a list of map of accounts with a findings count associated with each account.
   *
   * @public
   */
  GroupedByAccount?: AccountStatistics[] | undefined;

  /**
   * Represents a list of map of dates with a count of total findings generated on each date per severity level.
   *
   * @public
   */
  GroupedByDate?: DateStatistics[] | undefined;

  /**
   * Represents a list of map of finding types with a count of total findings generated for each type.
   *
   * Based on the `orderBy` parameter, this request returns either the most occurring finding types or the least occurring finding types. If the `orderBy` parameter is `ASC`, this will represent the least occurring finding types in your account; otherwise, this will represent the most occurring finding types. The default value of `orderBy` is `DESC`.
   *
   * @public
   */
  GroupedByFindingType?: FindingTypeStatistics[] | undefined;

  /**
   * Represents a list of map of top resources with a count of total findings.
   *
   * @public
   */
  GroupedByResource?: ResourceStatistics[] | undefined;

  /**
   * Represents a list of map of total findings for each severity level.
   *
   * @public
   */
  GroupedBySeverity?: SeverityStatistics[] | undefined;
}

/**
 * @public
 */
export interface GetAdministratorAccountRequest {
  /**
   * The unique ID of the detector of the GuardDuty member account.
   *
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface GetAdministratorAccountResponse {
  /**
   * The administrator account details.
   *
   * @public
   */
  Administrator: Administrator | undefined;
}

/**
 * @public
 */
export interface GetCoverageStatisticsRequest {
  /**
   * The unique ID of the GuardDuty detector.
   *
   * To find the `detectorId` in the current Region, see the Settings page in the GuardDuty console, or run the [ListDetectors](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html) API.
   *
   * @public
   */
  DetectorId: string | undefined;

  /**
   * Represents the criteria used to filter the coverage statistics.
   *
   * @public
   */
  FilterCriteria?: CoverageFilterCriteria | undefined;

  /**
   * Represents the statistics type used to aggregate the coverage details.
   *
   * @public
   */
  StatisticsType: CoverageStatisticsType[] | undefined;
}

/**
 * @public
 */
export interface GetCoverageStatisticsResponse {
  /**
   * Represents the count aggregated by the `statusCode` and `resourceType`.
   *
   * @public
   */
  CoverageStatistics?: CoverageStatistics | undefined;
}

/**
 * @public
 */
export interface GetCustomDetectionRuleRequest {
  /**
   * The unique identifier for the custom detection rule.
   *
   * @public
   */
  RuleId: string | undefined;
}

/**
 * Contains the detection logic for a custom detection rule.
 *
 * @public
 */
export interface RuleDefinition {
  /**
   * The detection logic expression for the rule.
   *
   * @public
   */
  Expression: string | undefined;
}

// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { GuardDutyServiceException as __BaseException } from "./GuardDutyServiceException";

/**
 * @public
 */
export interface AcceptAdministratorInvitationRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The account ID of the GuardDuty administrator account whose invitation you're
   *       accepting.</p>
   * @public
   */
  AdministratorId: string | undefined;

  /**
   * <p>The value that is used to validate the administrator account to the member
   *       account.</p>
   * @public
   */
  InvitationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptAdministratorInvitationResponse {}

/**
 * <p>A bad request exception object.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>The error type.</p>
   * @public
   */
  Type?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
    this.Type = opts.Type;
  }
}

/**
 * <p>An internal server error exception object.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>The error type.</p>
   * @public
   */
  Type?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
    this.Type = opts.Type;
  }
}

/**
 * @public
 */
export interface AcceptInvitationRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The account ID of the GuardDuty administrator account whose invitation you're
   *       accepting.</p>
   * @public
   */
  MasterId: string | undefined;

  /**
   * <p>The value that is used to validate the administrator account to the member
   *       account.</p>
   * @public
   */
  InvitationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptInvitationResponse {}

/**
 * <p>Contains information on the current access control policies for the bucket.</p>
 * @public
 */
export interface AccessControlList {
  /**
   * <p>A value that indicates whether public read access for the bucket is enabled through an
   *       Access Control List (ACL).</p>
   * @public
   */
  AllowsPublicReadAccess?: boolean;

  /**
   * <p>A value that indicates whether public write access for the bucket is enabled through an
   *       Access Control List (ACL).</p>
   * @public
   */
  AllowsPublicWriteAccess?: boolean;
}

/**
 * <p>An access denied exception object.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>The error type.</p>
   * @public
   */
  Type?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
    this.Type = opts.Type;
  }
}

/**
 * <p>Contains information about the access keys.</p>
 * @public
 */
export interface AccessKeyDetails {
  /**
   * <p>The access key ID of the user.</p>
   * @public
   */
  AccessKeyId?: string;

  /**
   * <p>The principal ID of the user.</p>
   * @public
   */
  PrincipalId?: string;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  UserName?: string;

  /**
   * <p>The type of the user.</p>
   * @public
   */
  UserType?: string;
}

/**
 * <p>Contains information about the account.</p>
 * @public
 */
export interface AccountDetail {
  /**
   * <p>The member account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The email address of the member account.</p>
   * @public
   */
  Email: string | undefined;
}

/**
 * <p>Contains information about which data sources are enabled for the GuardDuty member
 *       account.</p>
 * @public
 */
export interface DataSourceFreeTrial {
  /**
   * <p>A value that specifies the number of days left to use each enabled data source.</p>
   * @public
   */
  FreeTrialDaysRemaining?: number;
}

/**
 * <p>Provides details about the Kubernetes resources when it is enabled as a data
 *       source.</p>
 * @public
 */
export interface KubernetesDataSourceFreeTrial {
  /**
   * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
   * @public
   */
  AuditLogs?: DataSourceFreeTrial;
}

/**
 * <p>Provides details about Malware Protection when it is enabled as a data source.</p>
 * @public
 */
export interface MalwareProtectionDataSourceFreeTrial {
  /**
   * <p>Describes whether Malware Protection for EC2 instances with findings is enabled as a data
   *       source.</p>
   * @public
   */
  ScanEc2InstanceWithFindings?: DataSourceFreeTrial;
}

/**
 * <p>Contains information about which data sources are enabled for the GuardDuty member
 *       account.</p>
 * @public
 */
export interface DataSourcesFreeTrial {
  /**
   * <p>Describes whether any Amazon Web Services CloudTrail management event logs are enabled as data sources.</p>
   * @public
   */
  CloudTrail?: DataSourceFreeTrial;

  /**
   * <p>Describes whether any DNS logs are enabled as data sources.</p>
   * @public
   */
  DnsLogs?: DataSourceFreeTrial;

  /**
   * <p>Describes whether any VPC Flow logs are enabled as data sources.</p>
   * @public
   */
  FlowLogs?: DataSourceFreeTrial;

  /**
   * <p>Describes whether any S3 data event logs are enabled as data sources.</p>
   * @public
   */
  S3Logs?: DataSourceFreeTrial;

  /**
   * <p>Describes whether any Kubernetes logs are enabled as data sources.</p>
   * @public
   */
  Kubernetes?: KubernetesDataSourceFreeTrial;

  /**
   * <p>Describes whether Malware Protection is enabled as a data source.</p>
   * @public
   */
  MalwareProtection?: MalwareProtectionDataSourceFreeTrial;
}

/**
 * @public
 * @enum
 */
export const FreeTrialFeatureResult = {
  CLOUD_TRAIL: "CLOUD_TRAIL",
  DNS_LOGS: "DNS_LOGS",
  EBS_MALWARE_PROTECTION: "EBS_MALWARE_PROTECTION",
  EC2_RUNTIME_MONITORING: "EC2_RUNTIME_MONITORING",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
  FARGATE_RUNTIME_MONITORING: "FARGATE_RUNTIME_MONITORING",
  FLOW_LOGS: "FLOW_LOGS",
  LAMBDA_NETWORK_LOGS: "LAMBDA_NETWORK_LOGS",
  RDS_LOGIN_EVENTS: "RDS_LOGIN_EVENTS",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;

/**
 * @public
 */
export type FreeTrialFeatureResult = (typeof FreeTrialFeatureResult)[keyof typeof FreeTrialFeatureResult];

/**
 * <p>Contains information about the free trial period for a feature.</p>
 * @public
 */
export interface FreeTrialFeatureConfigurationResult {
  /**
   * <p>The name of the feature for which the free trial is configured.</p>
   * @public
   */
  Name?: FreeTrialFeatureResult;

  /**
   * <p>The number of the remaining free trial days for the feature.</p>
   * @public
   */
  FreeTrialDaysRemaining?: number;
}

/**
 * <p>Provides details of the GuardDuty member account that uses a free trial service.</p>
 * @public
 */
export interface AccountFreeTrialInfo {
  /**
   * <p>The account identifier of the GuardDuty member account.</p>
   * @public
   */
  AccountId?: string;

  /**
   * @deprecated
   *
   * <p>Describes the data source enabled for the GuardDuty member account.</p>
   * @public
   */
  DataSources?: DataSourcesFreeTrial;

  /**
   * <p>A list of features enabled for the GuardDuty account.</p>
   * @public
   */
  Features?: FreeTrialFeatureConfigurationResult[];
}

/**
 * <p>Contains information on how the bucker owner's S3 Block Public Access settings are being
 *       applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public
 *         Access</a> for more information. </p>
 * @public
 */
export interface BlockPublicAccess {
  /**
   * <p>Indicates if S3 Block Public Access is set to <code>IgnorePublicAcls</code>.</p>
   * @public
   */
  IgnorePublicAcls?: boolean;

  /**
   * <p>Indicates if S3 Block Public Access is set to <code>RestrictPublicBuckets</code>.</p>
   * @public
   */
  RestrictPublicBuckets?: boolean;

  /**
   * <p>Indicates if S3 Block Public Access is set to <code>BlockPublicAcls</code>.</p>
   * @public
   */
  BlockPublicAcls?: boolean;

  /**
   * <p>Indicates if S3 Block Public Access is set to <code>BlockPublicPolicy</code>.</p>
   * @public
   */
  BlockPublicPolicy?: boolean;
}

/**
 * <p>Contains information about the account level permissions on the S3 bucket.</p>
 * @public
 */
export interface AccountLevelPermissions {
  /**
   * <p>Describes the S3 Block Public Access settings of the bucket's parent account.</p>
   * @public
   */
  BlockPublicAccess?: BlockPublicAccess;
}

/**
 * <p>Represents a list of map of accounts with the number of findings associated with each account.</p>
 * @public
 */
export interface AccountStatistics {
  /**
   * <p>The ID of the Amazon Web Services account.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The timestamp at which the finding for this account was last generated.</p>
   * @public
   */
  LastGeneratedAt?: Date;

  /**
   * <p>The total number of findings associated with an account.</p>
   * @public
   */
  TotalFindings?: number;
}

/**
 * <p>Contains information about the domain.</p>
 * @public
 */
export interface DomainDetails {
  /**
   * <p>The domain information for the Amazon Web Services API call.</p>
   * @public
   */
  Domain?: string;
}

/**
 * <p>Contains details about the remote Amazon Web Services account that made the API call.</p>
 * @public
 */
export interface RemoteAccountDetails {
  /**
   * <p>The Amazon Web Services account ID of the remote API caller.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>Details on whether the Amazon Web Services account of the remote API caller is related to your GuardDuty
   *       environment. If this value is <code>True</code> the API caller is affiliated to your account
   *       in some way. If it is <code>False</code> the API caller is from outside your
   *       environment.</p>
   * @public
   */
  Affiliated?: boolean;
}

/**
 * <p>Contains information about the city associated with the IP address.</p>
 * @public
 */
export interface City {
  /**
   * <p>The city name of the remote IP address.</p>
   * @public
   */
  CityName?: string;
}

/**
 * <p>Contains information about the country where the remote IP address is located.</p>
 * @public
 */
export interface Country {
  /**
   * <p>The country code of the remote IP address.</p>
   * @public
   */
  CountryCode?: string;

  /**
   * <p>The country name of the remote IP address.</p>
   * @public
   */
  CountryName?: string;
}

/**
 * <p>Contains information about the location of the remote IP address.</p>
 * @public
 */
export interface GeoLocation {
  /**
   * <p>The latitude information of the remote IP address.</p>
   * @public
   */
  Lat?: number;

  /**
   * <p>The longitude information of the remote IP address.</p>
   * @public
   */
  Lon?: number;
}

/**
 * <p>Contains information about the ISP organization of the remote IP address.</p>
 * @public
 */
export interface Organization {
  /**
   * <p>The Autonomous System Number (ASN) of the internet provider of the remote IP
   *       address.</p>
   * @public
   */
  Asn?: string;

  /**
   * <p>The organization that registered this ASN.</p>
   * @public
   */
  AsnOrg?: string;

  /**
   * <p>The ISP information for the internet provider.</p>
   * @public
   */
  Isp?: string;

  /**
   * <p>The name of the internet provider.</p>
   * @public
   */
  Org?: string;
}

/**
 * <p>Contains information about the remote IP address of the connection.</p>
 * @public
 */
export interface RemoteIpDetails {
  /**
   * <p>The city information of the remote IP address.</p>
   * @public
   */
  City?: City;

  /**
   * <p>The country code of the remote IP address.</p>
   * @public
   */
  Country?: Country;

  /**
   * <p>The location information of the remote IP address.</p>
   * @public
   */
  GeoLocation?: GeoLocation;

  /**
   * <p>The IPv4 remote address of the connection.</p>
   * @public
   */
  IpAddressV4?: string;

  /**
   * <p>The IPv6 remote address of the connection.</p>
   * @public
   */
  IpAddressV6?: string;

  /**
   * <p>The ISP organization information of the remote IP address.</p>
   * @public
   */
  Organization?: Organization;
}

/**
 * <p>Contains information about the API action.</p>
 * @public
 */
export interface AwsApiCallAction {
  /**
   * <p>The Amazon Web Services API name.</p>
   * @public
   */
  Api?: string;

  /**
   * <p>The Amazon Web Services API caller type.</p>
   * @public
   */
  CallerType?: string;

  /**
   * <p>The domain information for the Amazon Web Services API call.</p>
   * @public
   */
  DomainDetails?: DomainDetails;

  /**
   * <p>The error code of the failed Amazon Web Services API action.</p>
   * @public
   */
  ErrorCode?: string;

  /**
   * <p>The agent through which the API request was made.</p>
   * @public
   */
  UserAgent?: string;

  /**
   * <p>The remote IP information of the connection that initiated the Amazon Web Services API call.</p>
   * @public
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * <p>The Amazon Web Services service name whose API was invoked.</p>
   * @public
   */
  ServiceName?: string;

  /**
   * <p>The details of the Amazon Web Services account that made the API call. This field appears if the call
   *       was made from outside your account.</p>
   * @public
   */
  RemoteAccountDetails?: RemoteAccountDetails;

  /**
   * <p>The details of the Amazon Web Services account that made the API call. This field identifies the
   *       resources that were affected by this API call.</p>
   * @public
   */
  AffectedResources?: Record<string, string>;
}

/**
 * <p>Contains information about the DNS_REQUEST action described in this finding.</p>
 * @public
 */
export interface DnsRequestAction {
  /**
   * <p>The domain information for the DNS query.</p>
   * @public
   */
  Domain?: string;

  /**
   * <p>The network connection protocol observed in the activity that prompted GuardDuty to
   *       generate the finding.</p>
   * @public
   */
  Protocol?: string;

  /**
   * <p>Indicates whether the targeted port is blocked.</p>
   * @public
   */
  Blocked?: boolean;

  /**
   * <p>The second and top level domain involved in the
   *       activity that potentially prompted GuardDuty to generate this finding.
   *       For a list of top-level and second-level domains, see <a href="https://publicsuffix.org/">public suffix list</a>.</p>
   * @public
   */
  DomainWithSuffix?: string;
}

/**
 * <p>Information about the Kubernetes API call action described in this finding.</p>
 * @public
 */
export interface KubernetesApiCallAction {
  /**
   * <p>The Kubernetes API request URI.</p>
   * @public
   */
  RequestUri?: string;

  /**
   * <p>The Kubernetes API request HTTP verb.</p>
   * @public
   */
  Verb?: string;

  /**
   * <p>The IP of the Kubernetes API caller and the IPs of any proxies or load balancers between
   *       the caller and the API endpoint.</p>
   * @public
   */
  SourceIps?: string[];

  /**
   * <p>The user agent of the caller of the Kubernetes API.</p>
   * @public
   */
  UserAgent?: string;

  /**
   * <p>Contains information about the remote IP address of the connection.</p>
   * @public
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * <p>The resulting HTTP response code of the Kubernetes API call action.</p>
   * @public
   */
  StatusCode?: number;

  /**
   * <p>Parameters related to the Kubernetes API call action.</p>
   * @public
   */
  Parameters?: string;

  /**
   * <p>The resource component in the Kubernetes API call action.</p>
   * @public
   */
  Resource?: string;

  /**
   * <p>The name of the sub-resource in the Kubernetes API call action.</p>
   * @public
   */
  Subresource?: string;

  /**
   * <p>The name of the namespace where the Kubernetes API call action takes place.</p>
   * @public
   */
  Namespace?: string;

  /**
   * <p>The name of the resource in the Kubernetes API call action.</p>
   * @public
   */
  ResourceName?: string;
}

/**
 * <p>Information about the Kubernetes API for which you check if you have permission to call.</p>
 * @public
 */
export interface KubernetesPermissionCheckedDetails {
  /**
   * <p>The verb component of the Kubernetes API call. For example, when you check whether or not you have the permission
   *     to call the <code>CreatePod</code> API, the verb component will be <code>Create</code>.</p>
   * @public
   */
  Verb?: string;

  /**
   * <p>The Kubernetes resource with which your Kubernetes API call will interact.</p>
   * @public
   */
  Resource?: string;

  /**
   * <p>The namespace where the Kubernetes API action will take place.</p>
   * @public
   */
  Namespace?: string;

  /**
   * <p>Information whether the user has the permission to call the Kubernetes API.</p>
   * @public
   */
  Allowed?: boolean;
}

/**
 * <p>Contains information about the role binding that grants the permission defined in a Kubernetes role.</p>
 * @public
 */
export interface KubernetesRoleBindingDetails {
  /**
   * <p>The kind of the role. For role binding, this value will be <code>RoleBinding</code>.</p>
   * @public
   */
  Kind?: string;

  /**
   * <p>The name of the <code>RoleBinding</code>.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The unique identifier of the role binding.</p>
   * @public
   */
  Uid?: string;

  /**
   * <p>The name of the role being referenced. This must match the name of the <code>Role</code>
   *     or <code>ClusterRole</code> that you want to bind to.</p>
   * @public
   */
  RoleRefName?: string;

  /**
   * <p>The type of the role being referenced. This could be either <code>Role</code> or
   *     <code>ClusterRole</code>.</p>
   * @public
   */
  RoleRefKind?: string;
}

/**
 * <p>Information about the Kubernetes role name and role type.</p>
 * @public
 */
export interface KubernetesRoleDetails {
  /**
   * <p>The kind of role. For this API, the value of <code>kind</code> will be <code>Role</code>.</p>
   * @public
   */
  Kind?: string;

  /**
   * <p>The name of the Kubernetes role.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The unique identifier of the Kubernetes role name.</p>
   * @public
   */
  Uid?: string;
}

/**
 * <p>Contains information about the local IP address of the connection.</p>
 * @public
 */
export interface LocalIpDetails {
  /**
   * <p>The IPv4 local address of the connection.</p>
   * @public
   */
  IpAddressV4?: string;

  /**
   * <p>The IPv6 local address of the connection.</p>
   * @public
   */
  IpAddressV6?: string;
}

/**
 * <p>Contains information about the port for the local connection.</p>
 * @public
 */
export interface LocalPortDetails {
  /**
   * <p>The port number of the local connection.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>The port name of the local connection.</p>
   * @public
   */
  PortName?: string;
}

/**
 * <p>Contains information about the remote port.</p>
 * @public
 */
export interface RemotePortDetails {
  /**
   * <p>The port number of the remote connection.</p>
   * @public
   */
  Port?: number;

  /**
   * <p>The port name of the remote connection.</p>
   * @public
   */
  PortName?: string;
}

/**
 * <p>Contains information about the NETWORK_CONNECTION action described in the finding.</p>
 * @public
 */
export interface NetworkConnectionAction {
  /**
   * <p>Indicates whether EC2 blocked the network connection to your instance.</p>
   * @public
   */
  Blocked?: boolean;

  /**
   * <p>The network connection direction.</p>
   * @public
   */
  ConnectionDirection?: string;

  /**
   * <p>The local port information of the connection.</p>
   * @public
   */
  LocalPortDetails?: LocalPortDetails;

  /**
   * <p>The network connection protocol.</p>
   * @public
   */
  Protocol?: string;

  /**
   * <p>The local IP information of the connection.</p>
   * @public
   */
  LocalIpDetails?: LocalIpDetails;

  /**
   * <p>The EC2 instance's local elastic network interface utilized for the connection.</p>
   * @public
   */
  LocalNetworkInterface?: string;

  /**
   * <p>The remote IP information of the connection.</p>
   * @public
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * <p>The remote port information of the connection.</p>
   * @public
   */
  RemotePortDetails?: RemotePortDetails;
}

/**
 * <p>Contains information about the port probe details.</p>
 * @public
 */
export interface PortProbeDetail {
  /**
   * <p>The local port information of the connection.</p>
   * @public
   */
  LocalPortDetails?: LocalPortDetails;

  /**
   * <p>The local IP information of the connection.</p>
   * @public
   */
  LocalIpDetails?: LocalIpDetails;

  /**
   * <p>The remote IP information of the connection.</p>
   * @public
   */
  RemoteIpDetails?: RemoteIpDetails;
}

/**
 * <p>Contains information about the PORT_PROBE action described in the finding.</p>
 * @public
 */
export interface PortProbeAction {
  /**
   * <p>Indicates whether EC2 blocked the port probe to the instance, such as with an ACL.</p>
   * @public
   */
  Blocked?: boolean;

  /**
   * <p>A list of objects related to port probe details.</p>
   * @public
   */
  PortProbeDetails?: PortProbeDetail[];
}

/**
 * <p>Information about the login attempts.</p>
 * @public
 */
export interface LoginAttribute {
  /**
   * <p>Indicates the user name which attempted to log in.</p>
   * @public
   */
  User?: string;

  /**
   * <p>Indicates the application name used to attempt log in.</p>
   * @public
   */
  Application?: string;

  /**
   * <p>Represents the sum of failed (unsuccessful) login attempts made to establish a connection
   *       to the database instance.</p>
   * @public
   */
  FailedLoginAttempts?: number;

  /**
   * <p>Represents the sum of successful connections (a correct combination of login attributes)
   *       made to the database instance by the actor.</p>
   * @public
   */
  SuccessfulLoginAttempts?: number;
}

/**
 * <p>Indicates that a login attempt was made to the potentially compromised database from a
 *       remote IP address.</p>
 * @public
 */
export interface RdsLoginAttemptAction {
  /**
   * <p>Contains information about the remote IP address of the connection.</p>
   * @public
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * <p>Indicates the login attributes used in the login attempt.</p>
   * @public
   */
  LoginAttributes?: LoginAttribute[];
}

/**
 * <p>Contains information about actions.</p>
 * @public
 */
export interface Action {
  /**
   * <p>The GuardDuty finding activity type.</p>
   * @public
   */
  ActionType?: string;

  /**
   * <p>Information about the AWS_API_CALL action described in this finding.</p>
   * @public
   */
  AwsApiCallAction?: AwsApiCallAction;

  /**
   * <p>Information about the DNS_REQUEST action described in this finding.</p>
   * @public
   */
  DnsRequestAction?: DnsRequestAction;

  /**
   * <p>Information about the NETWORK_CONNECTION action described in this finding.</p>
   * @public
   */
  NetworkConnectionAction?: NetworkConnectionAction;

  /**
   * <p>Information about the PORT_PROBE action described in this finding.</p>
   * @public
   */
  PortProbeAction?: PortProbeAction;

  /**
   * <p>Information about the Kubernetes API call action described in this finding.</p>
   * @public
   */
  KubernetesApiCallAction?: KubernetesApiCallAction;

  /**
   * <p>Information about <code>RDS_LOGIN_ATTEMPT</code> action described in this finding.</p>
   * @public
   */
  RdsLoginAttemptAction?: RdsLoginAttemptAction;

  /**
   * <p>Information whether the user has the permission to use a specific Kubernetes API.</p>
   * @public
   */
  KubernetesPermissionCheckedDetails?: KubernetesPermissionCheckedDetails;

  /**
   * <p>Information about the role binding that grants the permission defined in a Kubernetes role.</p>
   * @public
   */
  KubernetesRoleBindingDetails?: KubernetesRoleBindingDetails;

  /**
   * <p>Information about the Kubernetes role name and role type.</p>
   * @public
   */
  KubernetesRoleDetails?: KubernetesRoleDetails;
}

/**
 * <p>Information about the installed EKS add-on (GuardDuty security agent).</p>
 * @public
 */
export interface AddonDetails {
  /**
   * <p>Version of the installed EKS add-on.</p>
   * @public
   */
  AddonVersion?: string;

  /**
   * <p>Status of the installed EKS add-on.</p>
   * @public
   */
  AddonStatus?: string;
}

/**
 * @public
 * @enum
 */
export const AdminStatus = {
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AdminStatus = (typeof AdminStatus)[keyof typeof AdminStatus];

/**
 * <p>The account within the organization specified as the GuardDuty delegated
 *       administrator.</p>
 * @public
 */
export interface AdminAccount {
  /**
   * <p>The Amazon Web Services account ID for the account.</p>
   * @public
   */
  AdminAccountId?: string;

  /**
   * <p>Indicates whether the account is enabled as the delegated administrator.</p>
   * @public
   */
  AdminStatus?: AdminStatus;
}

/**
 * <p>Contains information about the administrator account and invitation.</p>
 * @public
 */
export interface Administrator {
  /**
   * <p>The ID of the account used as the administrator account.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The value that is used to validate the administrator account to the member
   *       account.</p>
   * @public
   */
  InvitationId?: string;

  /**
   * <p>The status of the relationship between the administrator and member accounts.</p>
   * @public
   */
  RelationshipStatus?: string;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   * @public
   */
  InvitedAt?: string;
}

/**
 * <p>Information about the installed GuardDuty security agent.</p>
 * @public
 */
export interface AgentDetails {
  /**
   * <p>Version of the installed GuardDuty security agent.</p>
   * @public
   */
  Version?: string;
}

/**
 * <p>Contains information about the observed behavior.</p>
 * @public
 */
export interface Observations {
  /**
   * <p>The text that was unusual.</p>
   * @public
   */
  Text?: string[];
}

/**
 * @public
 * @enum
 */
export const ProfileSubtype = {
  FREQUENT: "FREQUENT",
  INFREQUENT: "INFREQUENT",
  RARE: "RARE",
  UNSEEN: "UNSEEN",
} as const;

/**
 * @public
 */
export type ProfileSubtype = (typeof ProfileSubtype)[keyof typeof ProfileSubtype];

/**
 * @public
 * @enum
 */
export const ProfileType = {
  FREQUENCY: "FREQUENCY",
} as const;

/**
 * @public
 */
export type ProfileType = (typeof ProfileType)[keyof typeof ProfileType];

/**
 * <p>Contains information about the unusual anomalies.</p>
 * @public
 */
export interface AnomalyObject {
  /**
   * <p>The type of behavior of the profile.</p>
   * @public
   */
  ProfileType?: ProfileType;

  /**
   * <p>The frequency of the anomaly.</p>
   * @public
   */
  ProfileSubtype?: ProfileSubtype;

  /**
   * <p>The recorded value.</p>
   * @public
   */
  Observations?: Observations;
}

/**
 * <p>Contains information about the behavior of the anomaly that is new to GuardDuty.</p>
 * @public
 */
export interface AnomalyUnusual {
  /**
   * <p>The behavior of the anomalous activity that caused GuardDuty to
   *       generate the finding.</p>
   * @public
   */
  Behavior?: Record<string, Record<string, AnomalyObject>>;
}

/**
 * <p>Contains information about the anomalies.</p>
 * @public
 */
export interface Anomaly {
  /**
   * <p>Information about the types of profiles.</p>
   * @public
   */
  Profiles?: Record<string, Record<string, AnomalyObject[]>>;

  /**
   * <p>Information about the behavior of the anomalies.</p>
   * @public
   */
  Unusual?: AnomalyUnusual;
}

/**
 * @public
 */
export interface ArchiveFindingsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       archive.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings that you want to archive.</p>
   * @public
   */
  FindingIds: string[] | undefined;
}

/**
 * @public
 */
export interface ArchiveFindingsResponse {}

/**
 * @public
 * @enum
 */
export const AutoEnableMembers = {
  ALL: "ALL",
  NEW: "NEW",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AutoEnableMembers = (typeof AutoEnableMembers)[keyof typeof AutoEnableMembers];

/**
 * <p>Contains information on the current bucket policies for the S3 bucket.</p>
 * @public
 */
export interface BucketPolicy {
  /**
   * <p>A value that indicates whether public read access for the bucket is enabled through a
   *       bucket policy.</p>
   * @public
   */
  AllowsPublicReadAccess?: boolean;

  /**
   * <p>A value that indicates whether public write access for the bucket is enabled through a
   *       bucket policy.</p>
   * @public
   */
  AllowsPublicWriteAccess?: boolean;
}

/**
 * <p>Contains information about the bucket level permissions for the S3 bucket.</p>
 * @public
 */
export interface BucketLevelPermissions {
  /**
   * <p>Contains information on how Access Control Policies are applied to the bucket.</p>
   * @public
   */
  AccessControlList?: AccessControlList;

  /**
   * <p>Contains information on the bucket policies for the S3 bucket.</p>
   * @public
   */
  BucketPolicy?: BucketPolicy;

  /**
   * <p>Contains information on which account level S3 Block Public Access settings are applied to
   *       the S3 bucket.</p>
   * @public
   */
  BlockPublicAccess?: BlockPublicAccess;
}

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * <p>Contains information on the status of CloudTrail as a data source for the detector.</p>
 * @public
 */
export interface CloudTrailConfigurationResult {
  /**
   * <p>Describes whether CloudTrail is enabled as a data source for the detector.</p>
   * @public
   */
  Status: DataSourceStatus | undefined;
}

/**
 * <p>Contains information about the condition.</p>
 * @public
 */
export interface Condition {
  /**
   * @deprecated
   *
   * <p>Represents the <i>equal</i> condition to be applied to a single field when
   *       querying for findings.</p>
   * @public
   */
  Eq?: string[];

  /**
   * @deprecated
   *
   * <p>Represents the <i>not equal</i> condition to be applied to a single field
   *       when querying for findings.</p>
   * @public
   */
  Neq?: string[];

  /**
   * @deprecated
   *
   * <p>Represents a <i>greater than</i> condition to be applied to a single field
   *       when querying for findings.</p>
   * @public
   */
  Gt?: number;

  /**
   * @deprecated
   *
   * <p>Represents a <i>greater than or equal</i> condition to be applied to a
   *       single field when querying for findings.</p>
   * @public
   */
  Gte?: number;

  /**
   * @deprecated
   *
   * <p>Represents a <i>less than</i> condition to be applied to a single field when
   *       querying for findings.</p>
   * @public
   */
  Lt?: number;

  /**
   * @deprecated
   *
   * <p>Represents a <i>less than or equal</i> condition to be applied to a single
   *       field when querying for findings.</p>
   * @public
   */
  Lte?: number;

  /**
   * <p>Represents an <i>equal</i>
   *             <b></b> condition to be applied to
   *       a single field when querying for findings.</p>
   * @public
   */
  Equals?: string[];

  /**
   * <p>Represents a <i>not equal</i>
   *             <b></b> condition to be applied
   *       to a single field when querying for findings.</p>
   * @public
   */
  NotEquals?: string[];

  /**
   * <p>Represents a <i>greater than</i> condition to be applied to a single field
   *       when querying for findings.</p>
   * @public
   */
  GreaterThan?: number;

  /**
   * <p>Represents a <i>greater than or equal</i> condition to be applied to a
   *       single field when querying for findings.</p>
   * @public
   */
  GreaterThanOrEqual?: number;

  /**
   * <p>Represents a <i>less than</i> condition to be applied to a single field when
   *       querying for findings.</p>
   * @public
   */
  LessThan?: number;

  /**
   * <p>Represents a <i>less than or equal</i> condition to be applied to a single
   *       field when querying for findings.</p>
   * @public
   */
  LessThanOrEqual?: number;
}

/**
 * <p>A request conflict exception object.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>The error type.</p>
   * @public
   */
  Type?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.Type = opts.Type;
  }
}

/**
 * <p>Container security context.</p>
 * @public
 */
export interface SecurityContext {
  /**
   * <p>Whether the container is privileged.</p>
   * @public
   */
  Privileged?: boolean;

  /**
   * <p>Whether or not a container or a Kubernetes pod is allowed to gain more privileges than its parent process.</p>
   * @public
   */
  AllowPrivilegeEscalation?: boolean;
}

/**
 * <p>Container volume mount.</p>
 * @public
 */
export interface VolumeMount {
  /**
   * <p>Volume mount name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Volume mount path.</p>
   * @public
   */
  MountPath?: string;
}

/**
 * <p>Details of a container.</p>
 * @public
 */
export interface Container {
  /**
   * <p>The container runtime (such as, Docker or containerd) used to run the container.</p>
   * @public
   */
  ContainerRuntime?: string;

  /**
   * <p>Container ID.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>Container name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Container image.</p>
   * @public
   */
  Image?: string;

  /**
   * <p>Part of the image name before the last slash. For example, imagePrefix for
   *       public.ecr.aws/amazonlinux/amazonlinux:latest would be public.ecr.aws/amazonlinux. If the
   *       image name is relative and does not have a slash, this field is empty.</p>
   * @public
   */
  ImagePrefix?: string;

  /**
   * <p>Container volume mounts.</p>
   * @public
   */
  VolumeMounts?: VolumeMount[];

  /**
   * <p>Container security context.</p>
   * @public
   */
  SecurityContext?: SecurityContext;
}

/**
 * <p>Contains information about the Amazon EC2 instance that is running
 *     the Amazon ECS container.</p>
 * @public
 */
export interface ContainerInstanceDetails {
  /**
   * <p>Represents the nodes in the Amazon ECS cluster that has a <code>HEALTHY</code>
   *       coverage status.</p>
   * @public
   */
  CoveredContainerInstances?: number;

  /**
   * <p>Represents total number of nodes in the Amazon ECS cluster.</p>
   * @public
   */
  CompatibleContainerInstances?: number;
}

/**
 * @public
 * @enum
 */
export const CoverageStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;

/**
 * @public
 */
export type CoverageStatus = (typeof CoverageStatus)[keyof typeof CoverageStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  EC2: "EC2",
  ECS: "ECS",
  EKS: "EKS",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ManagementType = {
  AUTO_MANAGED: "AUTO_MANAGED",
  DISABLED: "DISABLED",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type ManagementType = (typeof ManagementType)[keyof typeof ManagementType];

/**
 * <p>Contains information about the Amazon EC2 instance runtime
 *     coverage details.</p>
 * @public
 */
export interface CoverageEc2InstanceDetails {
  /**
   * <p>The Amazon EC2 instance ID.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The instance type of the Amazon EC2 instance.</p>
   * @public
   */
  InstanceType?: string;

  /**
   * <p>The cluster ARN of the Amazon ECS cluster running on
   *     the Amazon EC2 instance.</p>
   * @public
   */
  ClusterArn?: string;

  /**
   * <p>Information about the installed security agent.</p>
   * @public
   */
  AgentDetails?: AgentDetails;

  /**
   * <p>Indicates how the GuardDuty security agent is managed for this resource.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AUTO_MANAGED</code> indicates that GuardDuty deploys and manages updates for this resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MANUAL</code> indicates that you are responsible to deploy, update, and manage the GuardDuty
   *           security agent updates for this resource.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>DISABLED</code> status doesn't apply to Amazon
   *     EC2 instances and Amazon EKS clusters.</p>
   *          </note>
   * @public
   */
  ManagementType?: ManagementType;
}

/**
 * <p>Contains information about Amazon Web Services Fargate details associated with
 *       an Amazon ECS cluster.</p>
 * @public
 */
export interface FargateDetails {
  /**
   * <p>Runtime coverage issues identified for the resource running on Amazon Web Services Fargate.</p>
   * @public
   */
  Issues?: string[];

  /**
   * <p>Indicates how the GuardDuty security agent is managed for this resource.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AUTO_MANAGED</code> indicates that GuardDuty deploys and manages updates for this resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> indicates that the deployment of the GuardDuty security agent is disabled for this resource.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>MANUAL</code> status doesn't apply to the Amazon Web Services Fargate (Amazon ECS only) woprkloads.</p>
   *          </note>
   * @public
   */
  ManagementType?: ManagementType;
}

/**
 * <p>Contains information about Amazon ECS cluster runtime coverage details.</p>
 * @public
 */
export interface CoverageEcsClusterDetails {
  /**
   * <p>The name of the Amazon ECS cluster.</p>
   * @public
   */
  ClusterName?: string;

  /**
   * <p>Information about the Fargate details associated with the Amazon
   *       ECS cluster.</p>
   * @public
   */
  FargateDetails?: FargateDetails;

  /**
   * <p>Information about the Amazon ECS container running on Amazon EC2
   *       instance.</p>
   * @public
   */
  ContainerInstanceDetails?: ContainerInstanceDetails;
}

/**
 * <p>Information about the EKS cluster that has a coverage status.</p>
 * @public
 */
export interface CoverageEksClusterDetails {
  /**
   * <p>Name of the EKS cluster.</p>
   * @public
   */
  ClusterName?: string;

  /**
   * <p>Represents the nodes within the EKS cluster that have a <code>HEALTHY</code> coverage
   *       status.</p>
   * @public
   */
  CoveredNodes?: number;

  /**
   * <p>Represents all the nodes within the EKS cluster in your account.</p>
   * @public
   */
  CompatibleNodes?: number;

  /**
   * <p>Information about the installed EKS add-on.</p>
   * @public
   */
  AddonDetails?: AddonDetails;

  /**
   * <p>Indicates how the Amazon EKS add-on GuardDuty agent is managed for this EKS cluster.</p>
   *          <p>
   *             <code>AUTO_MANAGED</code> indicates GuardDuty deploys and manages updates for this resource.</p>
   *          <p>
   *             <code>MANUAL</code> indicates that you are responsible to deploy, update, and manage
   *       the Amazon EKS add-on GuardDuty agent for this resource.</p>
   * @public
   */
  ManagementType?: ManagementType;
}

/**
 * <p>Represents a condition that when matched will be added to the response of the
 *       operation.</p>
 * @public
 */
export interface CoverageFilterCondition {
  /**
   * <p>Represents an equal condition that is applied to a single field while retrieving the
   *       coverage details.</p>
   * @public
   */
  Equals?: string[];

  /**
   * <p>Represents a not equal condition that is applied to a single field while retrieving the
   *       coverage details.</p>
   * @public
   */
  NotEquals?: string[];
}

/**
 * @public
 * @enum
 */
export const CoverageFilterCriterionKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  ADDON_VERSION: "ADDON_VERSION",
  AGENT_VERSION: "AGENT_VERSION",
  CLUSTER_ARN: "CLUSTER_ARN",
  CLUSTER_NAME: "CLUSTER_NAME",
  COVERAGE_STATUS: "COVERAGE_STATUS",
  ECS_CLUSTER_NAME: "ECS_CLUSTER_NAME",
  EKS_CLUSTER_NAME: "EKS_CLUSTER_NAME",
  INSTANCE_ID: "INSTANCE_ID",
  MANAGEMENT_TYPE: "MANAGEMENT_TYPE",
  RESOURCE_TYPE: "RESOURCE_TYPE",
} as const;

/**
 * @public
 */
export type CoverageFilterCriterionKey = (typeof CoverageFilterCriterionKey)[keyof typeof CoverageFilterCriterionKey];

/**
 * <p>Represents a condition that when matched will be added to the response of the
 *       operation.</p>
 * @public
 */
export interface CoverageFilterCriterion {
  /**
   * <p>An enum value representing possible filter fields.</p>
   *          <note>
   *             <p>Replace the enum value <code>CLUSTER_NAME</code> with <code>EKS_CLUSTER_NAME</code>.
   *       <code>CLUSTER_NAME</code> has been deprecated.</p>
   *          </note>
   * @public
   */
  CriterionKey?: CoverageFilterCriterionKey;

  /**
   * <p>Contains information about the condition.</p>
   * @public
   */
  FilterCondition?: CoverageFilterCondition;
}

/**
 * <p>Represents the criteria used in the filter.</p>
 * @public
 */
export interface CoverageFilterCriteria {
  /**
   * <p>Represents a condition that when matched will be added to the response of the
   *       operation.</p>
   * @public
   */
  FilterCriterion?: CoverageFilterCriterion[];
}

/**
 * <p>Information about the resource for each individual EKS cluster.</p>
 * @public
 */
export interface CoverageResourceDetails {
  /**
   * <p>EKS cluster details involved in the coverage statistics.</p>
   * @public
   */
  EksClusterDetails?: CoverageEksClusterDetails;

  /**
   * <p>The type of Amazon Web Services resource.</p>
   * @public
   */
  ResourceType?: ResourceType;

  /**
   * <p>Information about the Amazon ECS cluster that is assessed for
   *     runtime coverage.</p>
   * @public
   */
  EcsClusterDetails?: CoverageEcsClusterDetails;

  /**
   * <p>Information about the Amazon EC2 instance assessed
   *       for runtime coverage.</p>
   * @public
   */
  Ec2InstanceDetails?: CoverageEc2InstanceDetails;
}

/**
 * <p>Information about the resource of the GuardDuty account.</p>
 * @public
 */
export interface CoverageResource {
  /**
   * <p>The unique ID of the resource.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The unique ID of the GuardDuty detector associated with the resource.</p>
   * @public
   */
  DetectorId?: string;

  /**
   * <p>The unique ID of the Amazon Web Services account.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>Information about the resource for which the coverage statistics are retrieved.</p>
   * @public
   */
  ResourceDetails?: CoverageResourceDetails;

  /**
   * <p>Represents the status of the EKS cluster coverage.</p>
   * @public
   */
  CoverageStatus?: CoverageStatus;

  /**
   * <p>Represents the reason why a coverage status was <code>UNHEALTHY</code> for the EKS
   *       cluster.</p>
   * @public
   */
  Issue?: string;

  /**
   * <p>The timestamp at which the coverage details for the resource were last updated. This is in
   *       UTC format.</p>
   * @public
   */
  UpdatedAt?: Date;
}

/**
 * @public
 * @enum
 */
export const CoverageSortKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  ADDON_VERSION: "ADDON_VERSION",
  CLUSTER_NAME: "CLUSTER_NAME",
  COVERAGE_STATUS: "COVERAGE_STATUS",
  ECS_CLUSTER_NAME: "ECS_CLUSTER_NAME",
  EKS_CLUSTER_NAME: "EKS_CLUSTER_NAME",
  INSTANCE_ID: "INSTANCE_ID",
  ISSUE: "ISSUE",
  UPDATED_AT: "UPDATED_AT",
} as const;

/**
 * @public
 */
export type CoverageSortKey = (typeof CoverageSortKey)[keyof typeof CoverageSortKey];

/**
 * @public
 * @enum
 */
export const OrderBy = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy];

/**
 * <p>Information about the sorting criteria used in the coverage statistics.</p>
 * @public
 */
export interface CoverageSortCriteria {
  /**
   * <p>Represents the field name used to sort the coverage details.</p>
   *          <note>
   *             <p>Replace the enum value <code>CLUSTER_NAME</code> with <code>EKS_CLUSTER_NAME</code>.
   *       <code>CLUSTER_NAME</code> has been deprecated.</p>
   *          </note>
   * @public
   */
  AttributeName?: CoverageSortKey;

  /**
   * <p>The order in which the sorted findings are to be displayed.</p>
   * @public
   */
  OrderBy?: OrderBy;
}

/**
 * <p>Information about the coverage statistics for a resource.</p>
 * @public
 */
export interface CoverageStatistics {
  /**
   * <p>Represents coverage statistics for EKS clusters aggregated by resource type.</p>
   * @public
   */
  CountByResourceType?: Partial<Record<ResourceType, number>>;

  /**
   * <p>Represents coverage statistics for EKS clusters aggregated by coverage status.</p>
   * @public
   */
  CountByCoverageStatus?: Partial<Record<CoverageStatus, number>>;
}

/**
 * @public
 * @enum
 */
export const CoverageStatisticsType = {
  COUNT_BY_COVERAGE_STATUS: "COUNT_BY_COVERAGE_STATUS",
  COUNT_BY_RESOURCE_TYPE: "COUNT_BY_RESOURCE_TYPE",
} as const;

/**
 * @public
 */
export type CoverageStatisticsType = (typeof CoverageStatisticsType)[keyof typeof CoverageStatisticsType];

/**
 * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
 * @public
 */
export interface KubernetesAuditLogsConfiguration {
  /**
   * <p>The status of Kubernetes audit logs as a data source.</p>
   * @public
   */
  Enable: boolean | undefined;
}

/**
 * <p>Describes whether any Kubernetes data sources are enabled.</p>
 * @public
 */
export interface KubernetesConfiguration {
  /**
   * <p>The status of Kubernetes audit logs as a data source.</p>
   * @public
   */
  AuditLogs: KubernetesAuditLogsConfiguration | undefined;
}

/**
 * <p>Describes whether Malware Protection for EC2 instances with findings will be enabled as a
 *       data source.</p>
 * @public
 */
export interface ScanEc2InstanceWithFindings {
  /**
   * <p>Describes the configuration for scanning EBS volumes as data source.</p>
   * @public
   */
  EbsVolumes?: boolean;
}

/**
 * <p>Describes whether Malware Protection will be enabled as a data source.</p>
 * @public
 */
export interface MalwareProtectionConfiguration {
  /**
   * <p>Describes the configuration of Malware Protection for EC2 instances with findings.</p>
   * @public
   */
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindings;
}

/**
 * <p>Describes whether S3 data event logs will be enabled as a data source.</p>
 * @public
 */
export interface S3LogsConfiguration {
  /**
   * <p> The status of S3 data event logs as a data source.</p>
   * @public
   */
  Enable: boolean | undefined;
}

/**
 * <p>Contains information about which data sources are enabled.</p>
 * @public
 */
export interface DataSourceConfigurations {
  /**
   * <p>Describes whether S3 data event logs are enabled as a data source.</p>
   * @public
   */
  S3Logs?: S3LogsConfiguration;

  /**
   * <p>Describes whether any Kubernetes logs are enabled as data sources.</p>
   * @public
   */
  Kubernetes?: KubernetesConfiguration;

  /**
   * <p>Describes whether Malware Protection is enabled as a data source.</p>
   * @public
   */
  MalwareProtection?: MalwareProtectionConfiguration;
}

/**
 * @public
 * @enum
 */
export const FeatureAdditionalConfiguration = {
  EC2_AGENT_MANAGEMENT: "EC2_AGENT_MANAGEMENT",
  ECS_FARGATE_AGENT_MANAGEMENT: "ECS_FARGATE_AGENT_MANAGEMENT",
  EKS_ADDON_MANAGEMENT: "EKS_ADDON_MANAGEMENT",
} as const;

/**
 * @public
 */
export type FeatureAdditionalConfiguration =
  (typeof FeatureAdditionalConfiguration)[keyof typeof FeatureAdditionalConfiguration];

/**
 * @public
 * @enum
 */
export const FeatureStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

/**
 * <p>Information about the additional configuration for a feature in your GuardDuty account.</p>
 * @public
 */
export interface DetectorAdditionalConfiguration {
  /**
   * <p>Name of the additional configuration.</p>
   * @public
   */
  Name?: FeatureAdditionalConfiguration;

  /**
   * <p>Status of the additional configuration.</p>
   * @public
   */
  Status?: FeatureStatus;
}

/**
 * @public
 * @enum
 */
export const DetectorFeature = {
  EBS_MALWARE_PROTECTION: "EBS_MALWARE_PROTECTION",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
  LAMBDA_NETWORK_LOGS: "LAMBDA_NETWORK_LOGS",
  RDS_LOGIN_EVENTS: "RDS_LOGIN_EVENTS",
  RUNTIME_MONITORING: "RUNTIME_MONITORING",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;

/**
 * @public
 */
export type DetectorFeature = (typeof DetectorFeature)[keyof typeof DetectorFeature];

/**
 * <p>Contains information about a GuardDuty feature.</p>
 *          <p>Specifying both EKS Runtime Monitoring (<code>EKS_RUNTIME_MONITORING</code>)
 *       and Runtime Monitoring (<code>RUNTIME_MONITORING</code>) will cause an error.
 *       You can add only one of these two features because Runtime Monitoring already includes the
 *       threat detection for Amazon EKS resources. For more information, see
 *       <a href="https://docs.aws.amazon.com/guardduty/latest/ug/runtime-monitoring.html">Runtime Monitoring</a>.</p>
 * @public
 */
export interface DetectorFeatureConfiguration {
  /**
   * <p>The name of the feature.</p>
   * @public
   */
  Name?: DetectorFeature;

  /**
   * <p>The status of the feature.</p>
   * @public
   */
  Status?: FeatureStatus;

  /**
   * <p>Additional configuration for a resource.</p>
   * @public
   */
  AdditionalConfiguration?: DetectorAdditionalConfiguration[];
}

/**
 * @public
 * @enum
 */
export const FindingPublishingFrequency = {
  FIFTEEN_MINUTES: "FIFTEEN_MINUTES",
  ONE_HOUR: "ONE_HOUR",
  SIX_HOURS: "SIX_HOURS",
} as const;

/**
 * @public
 */
export type FindingPublishingFrequency = (typeof FindingPublishingFrequency)[keyof typeof FindingPublishingFrequency];

/**
 * @public
 */
export interface CreateDetectorRequest {
  /**
   * <p>A Boolean value that specifies whether the detector is to be enabled.</p>
   * @public
   */
  Enable: boolean | undefined;

  /**
   * <p>The idempotency token for the create request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>A value that specifies how frequently updated findings are exported.</p>
   * @public
   */
  FindingPublishingFrequency?: FindingPublishingFrequency;

  /**
   * @deprecated
   *
   * <p>Describes which data sources will be enabled for the detector.</p>
   *          <p>There might be regional differences because some data sources might not be
   *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
   *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
   * @public
   */
  DataSources?: DataSourceConfigurations;

  /**
   * <p>The tags to be added to a new detector resource.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>A list of features that will be configured for the detector.</p>
   * @public
   */
  Features?: DetectorFeatureConfiguration[];
}

/**
 * <p>Describes the configuration of scanning EBS volumes as a data source.</p>
 * @public
 */
export interface EbsVolumesResult {
  /**
   * <p>Describes whether scanning EBS volumes is enabled as a data source.</p>
   * @public
   */
  Status?: DataSourceStatus;

  /**
   * <p>Specifies the reason why scanning EBS volumes (Malware Protection) was not enabled as a
   *       data source.</p>
   * @public
   */
  Reason?: string;
}

/**
 * <p>An object that contains information on the status of whether Malware Protection for EC2
 *       instances with findings will be enabled as a data source.</p>
 * @public
 */
export interface ScanEc2InstanceWithFindingsResult {
  /**
   * <p>Describes the configuration of scanning EBS volumes as a data source.</p>
   * @public
   */
  EbsVolumes?: EbsVolumesResult;
}

/**
 * <p>An object that contains information on the status of all Malware Protection data
 *       sources.</p>
 * @public
 */
export interface MalwareProtectionConfigurationResult {
  /**
   * <p>Describes the configuration of Malware Protection for EC2 instances with findings.</p>
   * @public
   */
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindingsResult;

  /**
   * <p>The GuardDuty Malware Protection service role.</p>
   * @public
   */
  ServiceRole?: string;
}

/**
 * <p>Specifies the names of the data sources that couldn't be enabled.</p>
 * @public
 */
export interface UnprocessedDataSourcesResult {
  /**
   * <p>An object that contains information on the status of all Malware Protection data
   *       sources.</p>
   * @public
   */
  MalwareProtection?: MalwareProtectionConfigurationResult;
}

/**
 * @public
 */
export interface CreateDetectorResponse {
  /**
   * <p>The unique ID of the created detector.</p>
   * @public
   */
  DetectorId?: string;

  /**
   * <p>Specifies the data sources that couldn't be enabled when GuardDuty was enabled for the
   *       first time.</p>
   * @public
   */
  UnprocessedDataSources?: UnprocessedDataSourcesResult;
}

/**
 * @public
 * @enum
 */
export const FilterAction = {
  ARCHIVE: "ARCHIVE",
  NOOP: "NOOP",
} as const;

/**
 * @public
 */
export type FilterAction = (typeof FilterAction)[keyof typeof FilterAction];

/**
 * <p>Contains information about the criteria used for querying findings.</p>
 * @public
 */
export interface FindingCriteria {
  /**
   * <p>Represents a map of finding properties that match specified conditions and values when
   *       querying findings.</p>
   * @public
   */
  Criterion?: Record<string, Condition>;
}

/**
 * @public
 */
export interface CreateFilterRequest {
  /**
   * <p>The detector ID associated with the GuardDuty account for which you want to create a filter.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter. Valid characters include period (.), underscore (_), dash (-), and
   *       alphanumeric characters. A whitespace is considered to be an invalid character.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the filter. Valid characters include alphanumeric characters, and
   *       special characters such as hyphen, period, colon, underscore, parentheses (<code>\{ \}</code>,
   *         <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab,
   *       newline, form feed, return, and whitespace.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   * @public
   */
  Action?: FilterAction;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   * @public
   */
  Rank?: number;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   *          <p>You can only use the following attributes to query findings:</p>
   *          <ul>
   *             <li>
   *                <p>accountId</p>
   *             </li>
   *             <li>
   *                <p>id</p>
   *             </li>
   *             <li>
   *                <p>region</p>
   *             </li>
   *             <li>
   *                <p>severity</p>
   *                <p>To filter on the basis of severity, the API and CLI use the following input list for
   *           the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_FindingCriteria.html">FindingCriteria</a>
   *           condition:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Low</b>: <code>["1", "2", "3"]</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>Medium</b>: <code>["4", "5", "6"]</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>High</b>: <code>["7", "8", "9"]</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings.html#guardduty_findings-severity">Severity
   *           levels for GuardDuty findings</a>.</p>
   *             </li>
   *             <li>
   *                <p>type</p>
   *             </li>
   *             <li>
   *                <p>updatedAt</p>
   *                <p>Type: ISO 8601 string format: YYYY-MM-DDTHH:MM:SS.SSSZ or YYYY-MM-DDTHH:MM:SSZ
   *           depending on whether the value contains milliseconds.</p>
   *             </li>
   *             <li>
   *                <p>resource.accessKeyDetails.accessKeyId</p>
   *             </li>
   *             <li>
   *                <p>resource.accessKeyDetails.principalId</p>
   *             </li>
   *             <li>
   *                <p>resource.accessKeyDetails.userName</p>
   *             </li>
   *             <li>
   *                <p>resource.accessKeyDetails.userType</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.iamInstanceProfile.id</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.imageId</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.instanceId</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.tags.key</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.tags.value</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.ipv6Addresses</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.publicDnsName</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.publicIp</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.securityGroups.groupId</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.securityGroups.groupName</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.subnetId</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.networkInterfaces.vpcId</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.outpostArn</p>
   *             </li>
   *             <li>
   *                <p>resource.resourceType</p>
   *             </li>
   *             <li>
   *                <p>resource.s3BucketDetails.publicAccess.effectivePermissions</p>
   *             </li>
   *             <li>
   *                <p>resource.s3BucketDetails.name</p>
   *             </li>
   *             <li>
   *                <p>resource.s3BucketDetails.tags.key</p>
   *             </li>
   *             <li>
   *                <p>resource.s3BucketDetails.tags.value</p>
   *             </li>
   *             <li>
   *                <p>resource.s3BucketDetails.type</p>
   *             </li>
   *             <li>
   *                <p>service.action.actionType</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.api</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.callerType</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.errorCode</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.city.cityName</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.country.countryName</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.ipAddressV4</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.ipAddressV6</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.organization.asn</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.serviceName</p>
   *             </li>
   *             <li>
   *                <p>service.action.dnsRequestAction.domain</p>
   *             </li>
   *             <li>
   *                <p>service.action.dnsRequestAction.domainWithSuffix</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.blocked</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.connectionDirection</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.localPortDetails.port</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.protocol</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remoteIpDetails.city.cityName</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remoteIpDetails.country.countryName</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remoteIpDetails.ipAddressV4</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remoteIpDetails.ipAddressV6</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remoteIpDetails.organization.asn</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remotePortDetails.port</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteAccountDetails.affiliated</p>
   *             </li>
   *             <li>
   *                <p>service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV4</p>
   *             </li>
   *             <li>
   *                <p>service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV6</p>
   *             </li>
   *             <li>
   *                <p>service.action.kubernetesApiCallAction.namespace</p>
   *             </li>
   *             <li>
   *                <p>service.action.kubernetesApiCallAction.remoteIpDetails.organization.asn</p>
   *             </li>
   *             <li>
   *                <p>service.action.kubernetesApiCallAction.requestUri</p>
   *             </li>
   *             <li>
   *                <p>service.action.kubernetesApiCallAction.statusCode</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.localIpDetails.ipAddressV4</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.localIpDetails.ipAddressV6</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.protocol</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.serviceName</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteAccountDetails.accountId</p>
   *             </li>
   *             <li>
   *                <p>service.additionalInfo.threatListName</p>
   *             </li>
   *             <li>
   *                <p>service.resourceRole</p>
   *             </li>
   *             <li>
   *                <p>resource.eksClusterDetails.name</p>
   *             </li>
   *             <li>
   *                <p>resource.kubernetesDetails.kubernetesWorkloadDetails.name</p>
   *             </li>
   *             <li>
   *                <p>resource.kubernetesDetails.kubernetesWorkloadDetails.namespace</p>
   *             </li>
   *             <li>
   *                <p>resource.kubernetesDetails.kubernetesUserDetails.username</p>
   *             </li>
   *             <li>
   *                <p>resource.kubernetesDetails.kubernetesWorkloadDetails.containers.image</p>
   *             </li>
   *             <li>
   *                <p>resource.kubernetesDetails.kubernetesWorkloadDetails.containers.imagePrefix</p>
   *             </li>
   *             <li>
   *                <p>service.ebsVolumeScanDetails.scanId</p>
   *             </li>
   *             <li>
   *                <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.name</p>
   *             </li>
   *             <li>
   *                <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.severity</p>
   *             </li>
   *             <li>
   *                <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.hash</p>
   *             </li>
   *             <li>
   *                <p>resource.ecsClusterDetails.name</p>
   *             </li>
   *             <li>
   *                <p>resource.ecsClusterDetails.taskDetails.containers.image</p>
   *             </li>
   *             <li>
   *                <p>resource.ecsClusterDetails.taskDetails.definitionArn</p>
   *             </li>
   *             <li>
   *                <p>resource.containerDetails.image</p>
   *             </li>
   *             <li>
   *                <p>resource.rdsDbInstanceDetails.dbInstanceIdentifier</p>
   *             </li>
   *             <li>
   *                <p>resource.rdsDbInstanceDetails.dbClusterIdentifier</p>
   *             </li>
   *             <li>
   *                <p>resource.rdsDbInstanceDetails.engine</p>
   *             </li>
   *             <li>
   *                <p>resource.rdsDbUserDetails.user</p>
   *             </li>
   *             <li>
   *                <p>resource.rdsDbInstanceDetails.tags.key</p>
   *             </li>
   *             <li>
   *                <p>resource.rdsDbInstanceDetails.tags.value</p>
   *             </li>
   *             <li>
   *                <p>service.runtimeDetails.process.executableSha256</p>
   *             </li>
   *             <li>
   *                <p>service.runtimeDetails.process.name</p>
   *             </li>
   *             <li>
   *                <p>service.runtimeDetails.process.name</p>
   *             </li>
   *             <li>
   *                <p>resource.lambdaDetails.functionName</p>
   *             </li>
   *             <li>
   *                <p>resource.lambdaDetails.functionArn</p>
   *             </li>
   *             <li>
   *                <p>resource.lambdaDetails.tags.key</p>
   *             </li>
   *             <li>
   *                <p>resource.lambdaDetails.tags.value</p>
   *             </li>
   *          </ul>
   * @public
   */
  FindingCriteria: FindingCriteria | undefined;

  /**
   * <p>The idempotency token for the create request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The tags to be added to a new filter resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateFilterResponse {
  /**
   * <p>The name of the successfully created filter.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpSetFormat = {
  ALIEN_VAULT: "ALIEN_VAULT",
  FIRE_EYE: "FIRE_EYE",
  OTX_CSV: "OTX_CSV",
  PROOF_POINT: "PROOF_POINT",
  STIX: "STIX",
  TXT: "TXT",
} as const;

/**
 * @public
 */
export type IpSetFormat = (typeof IpSetFormat)[keyof typeof IpSetFormat];

/**
 * @public
 */
export interface CreateIPSetRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account for which you want to create an IPSet.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The user-friendly name to identify the IPSet.</p>
   *          <p> Allowed characters are alphanumeric, whitespace, dash (-), and underscores (_).</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the IPSet.</p>
   * @public
   */
  Format: IpSetFormat | undefined;

  /**
   * <p>The URI of the file that contains the IPSet. </p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>A Boolean value that indicates whether GuardDuty is to start using the uploaded
   *       IPSet.</p>
   * @public
   */
  Activate: boolean | undefined;

  /**
   * <p>The idempotency token for the create request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The tags to be added to a new IP set resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateIPSetResponse {
  /**
   * <p>The ID of the IPSet resource.</p>
   * @public
   */
  IpSetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MalwareProtectionPlanTaggingActionStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type MalwareProtectionPlanTaggingActionStatus =
  (typeof MalwareProtectionPlanTaggingActionStatus)[keyof typeof MalwareProtectionPlanTaggingActionStatus];

/**
 * <p>Information about adding tags to the scanned S3 object after the scan result.</p>
 * @public
 */
export interface MalwareProtectionPlanTaggingAction {
  /**
   * <p>Indicates whether or not the tags will added.</p>
   * @public
   */
  Status?: MalwareProtectionPlanTaggingActionStatus;
}

/**
 * <p>Information about whether the tags will be added to the S3 object after scanning.</p>
 * @public
 */
export interface MalwareProtectionPlanActions {
  /**
   * <p>Indicates whether the scanned S3 object will have tags about the scan result.</p>
   * @public
   */
  Tagging?: MalwareProtectionPlanTaggingAction;
}

/**
 * <p>Information about the protected S3 bucket resource.</p>
 * @public
 */
export interface CreateS3BucketResource {
  /**
   * <p>Name of the S3 bucket.</p>
   * @public
   */
  BucketName?: string;

  /**
   * <p>Information about the specified object prefixes. The S3 object will be scanned only
   *       if it belongs to any of the specified object prefixes.</p>
   * @public
   */
  ObjectPrefixes?: string[];
}

/**
 * <p>Information about the protected resource that
 *       is associated with the created Malware Protection plan.
 *       Presently, <code>S3Bucket</code> is the only supported
 *       protected resource.</p>
 * @public
 */
export interface CreateProtectedResource {
  /**
   * <p>Information about the protected S3 bucket resource.</p>
   * @public
   */
  S3Bucket?: CreateS3BucketResource;
}

/**
 * @public
 */
export interface CreateMalwareProtectionPlanRequest {
  /**
   * <p>The idempotency token for the create request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role that has the permissions to scan and add tags to the associated
   *       protected resource.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>Information about the protected resource that is associated with the created
   *       Malware Protection plan. Presently, <code>S3Bucket</code> is the only supported
   *       protected resource.</p>
   * @public
   */
  ProtectedResource: CreateProtectedResource | undefined;

  /**
   * <p>Information about whether the tags will be added to the S3 object after scanning.</p>
   * @public
   */
  Actions?: MalwareProtectionPlanActions;

  /**
   * <p>Tags added to the Malware Protection plan resource. </p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateMalwareProtectionPlanResponse {
  /**
   * <p>A unique identifier associated with the Malware Protection plan resource.</p>
   * @public
   */
  MalwareProtectionPlanId?: string;
}

/**
 * @public
 */
export interface CreateMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account for which you want to associate member
   *       accounts.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account ID and email address pairs of the accounts that you want to associate
   *       with the GuardDuty administrator account.</p>
   * @public
   */
  AccountDetails: AccountDetail[] | undefined;
}

/**
 * <p>Contains information about the accounts that weren't processed.</p>
 * @public
 */
export interface UnprocessedAccount {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>A reason why the account hasn't been processed.</p>
   * @public
   */
  Result: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersResponse {
  /**
   * <p>A list of objects that include the <code>accountIds</code> of the unprocessed accounts and
   *       a result string that explains why each was unprocessed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * <p>Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3
 *       bucket, and the ARN of the KMS key to use to encrypt published findings.</p>
 * @public
 */
export interface DestinationProperties {
  /**
   * <p>The ARN of the resource to publish to.</p>
   *          <p>To specify an S3 bucket folder use the following format:
   *         <code>arn:aws:s3:::DOC-EXAMPLE-BUCKET/myFolder/</code>
   *          </p>
   * @public
   */
  DestinationArn?: string;

  /**
   * <p>The ARN of the KMS key to use for encryption.</p>
   * @public
   */
  KmsKeyArn?: string;
}

/**
 * @public
 * @enum
 */
export const DestinationType = {
  S3: "S3",
} as const;

/**
 * @public
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

/**
 * @public
 */
export interface CreatePublishingDestinationRequest {
  /**
   * <p>The ID of the GuardDuty detector associated with the publishing destination.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The type of resource for the publishing destination. Currently only Amazon S3 buckets are
   *       supported.</p>
   * @public
   */
  DestinationType: DestinationType | undefined;

  /**
   * <p>The properties of the publishing destination, including the ARNs for the destination and
   *       the KMS key used for encryption.</p>
   * @public
   */
  DestinationProperties: DestinationProperties | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreatePublishingDestinationResponse {
  /**
   * <p>The ID of the publishing destination that is created.</p>
   * @public
   */
  DestinationId: string | undefined;
}

/**
 * @public
 */
export interface CreateSampleFindingsRequest {
  /**
   * <p>The ID of the detector for which you need to create sample findings.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The types of sample findings to generate.</p>
   * @public
   */
  FindingTypes?: string[];
}

/**
 * @public
 */
export interface CreateSampleFindingsResponse {}

/**
 * @public
 * @enum
 */
export const ThreatIntelSetFormat = {
  ALIEN_VAULT: "ALIEN_VAULT",
  FIRE_EYE: "FIRE_EYE",
  OTX_CSV: "OTX_CSV",
  PROOF_POINT: "PROOF_POINT",
  STIX: "STIX",
  TXT: "TXT",
} as const;

/**
 * @public
 */
export type ThreatIntelSetFormat = (typeof ThreatIntelSetFormat)[keyof typeof ThreatIntelSetFormat];

/**
 * @public
 */
export interface CreateThreatIntelSetRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account for which you want to create a
   *       <code>ThreatIntelSet</code>.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A user-friendly ThreatIntelSet name displayed in all findings that are generated by
   *       activity that involves IP addresses included in this ThreatIntelSet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the ThreatIntelSet.</p>
   * @public
   */
  Format: ThreatIntelSetFormat | undefined;

  /**
   * <p>The URI of the file that contains the ThreatIntelSet. </p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>A Boolean value that indicates whether GuardDuty is to start using the uploaded
   *       ThreatIntelSet.</p>
   * @public
   */
  Activate: boolean | undefined;

  /**
   * <p>The idempotency token for the create request.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The tags to be added to a new threat list resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateThreatIntelSetResponse {
  /**
   * <p>The ID of the ThreatIntelSet resource.</p>
   * @public
   */
  ThreatIntelSetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CriterionKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  EC2_INSTANCE_ARN: "EC2_INSTANCE_ARN",
  GUARDDUTY_FINDING_ID: "GUARDDUTY_FINDING_ID",
  SCAN_ID: "SCAN_ID",
  SCAN_START_TIME: "SCAN_START_TIME",
  SCAN_STATUS: "SCAN_STATUS",
  SCAN_TYPE: "SCAN_TYPE",
} as const;

/**
 * @public
 */
export type CriterionKey = (typeof CriterionKey)[keyof typeof CriterionKey];

/**
 * @public
 * @enum
 */
export const DataSource = {
  CLOUD_TRAIL: "CLOUD_TRAIL",
  DNS_LOGS: "DNS_LOGS",
  EC2_MALWARE_SCAN: "EC2_MALWARE_SCAN",
  FLOW_LOGS: "FLOW_LOGS",
  KUBERNETES_AUDIT_LOGS: "KUBERNETES_AUDIT_LOGS",
  S3_LOGS: "S3_LOGS",
} as const;

/**
 * @public
 */
export type DataSource = (typeof DataSource)[keyof typeof DataSource];

/**
 * <p>Contains information on the status of DNS logs as a data source.</p>
 * @public
 */
export interface DNSLogsConfigurationResult {
  /**
   * <p>Denotes whether DNS logs is enabled as a data source.</p>
   * @public
   */
  Status: DataSourceStatus | undefined;
}

/**
 * <p>Contains information on the status of VPC flow logs as a data source.</p>
 * @public
 */
export interface FlowLogsConfigurationResult {
  /**
   * <p>Denotes whether VPC flow logs is enabled as a data source.</p>
   * @public
   */
  Status: DataSourceStatus | undefined;
}

/**
 * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
 * @public
 */
export interface KubernetesAuditLogsConfigurationResult {
  /**
   * <p>A value that describes whether Kubernetes audit logs are enabled as a data source.</p>
   * @public
   */
  Status: DataSourceStatus | undefined;
}

/**
 * <p>Describes whether any Kubernetes logs will be enabled as a data source.</p>
 * @public
 */
export interface KubernetesConfigurationResult {
  /**
   * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
   * @public
   */
  AuditLogs: KubernetesAuditLogsConfigurationResult | undefined;
}

/**
 * <p>Describes whether S3 data event logs will be enabled as a data source.</p>
 * @public
 */
export interface S3LogsConfigurationResult {
  /**
   * <p>A value that describes whether S3 data event logs are automatically enabled for new
   *       members of the organization.</p>
   * @public
   */
  Status: DataSourceStatus | undefined;
}

/**
 * <p>Contains information on the status of data sources for the detector.</p>
 * @public
 */
export interface DataSourceConfigurationsResult {
  /**
   * <p>An object that contains information on the status of CloudTrail as a data source.</p>
   * @public
   */
  CloudTrail: CloudTrailConfigurationResult | undefined;

  /**
   * <p>An object that contains information on the status of DNS logs as a data source.</p>
   * @public
   */
  DNSLogs: DNSLogsConfigurationResult | undefined;

  /**
   * <p>An object that contains information on the status of VPC flow logs as a data
   *       source.</p>
   * @public
   */
  FlowLogs: FlowLogsConfigurationResult | undefined;

  /**
   * <p>An object that contains information on the status of S3 Data event logs as a data
   *       source.</p>
   * @public
   */
  S3Logs: S3LogsConfigurationResult | undefined;

  /**
   * <p>An object that contains information on the status of all Kubernetes data sources.</p>
   * @public
   */
  Kubernetes?: KubernetesConfigurationResult;

  /**
   * <p>Describes the configuration of Malware Protection data sources.</p>
   * @public
   */
  MalwareProtection?: MalwareProtectionConfigurationResult;
}

/**
 * <p>Represents list a map of dates with a count of total findings generated on each date.</p>
 * @public
 */
export interface DateStatistics {
  /**
   * <p>The timestamp when the total findings count is observed.</p>
   *          <p>For example, <code>Date</code> would look like <code>"2024-09-05T17:00:00-07:00"</code>
   *       whereas <code>LastGeneratedAt</code> would look like 2024-09-05T17:12:29-07:00".</p>
   * @public
   */
  Date?: Date;

  /**
   * <p>The timestamp at which the last finding in the findings count, was generated.</p>
   * @public
   */
  LastGeneratedAt?: Date;

  /**
   * <p>The severity of the findings generated on each date.</p>
   * @public
   */
  Severity?: number;

  /**
   * <p>The total number of findings that were generated per severity level on each date.</p>
   * @public
   */
  TotalFindings?: number;
}

/**
 * @public
 */
export interface DeclineInvitationsRequest {
  /**
   * <p>A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member
   *       account that you want to decline invitations from.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeclineInvitationsResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * <p>Contains information on the server side encryption method used in the S3 bucket. See
 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">S3
 *         Server-Side Encryption</a> for more information.</p>
 * @public
 */
export interface DefaultServerSideEncryption {
  /**
   * <p>The type of encryption used for objects within the S3 bucket.</p>
   * @public
   */
  EncryptionType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS encryption key. Only available if the bucket
   *         <code>EncryptionType</code> is <code>aws:kms</code>.</p>
   * @public
   */
  KmsMasterKeyArn?: string;
}

/**
 * @public
 */
export interface DeleteDetectorRequest {
  /**
   * <p>The unique ID of the detector that you want to delete.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
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
   * <p>The unique ID of the detector that is associated with the filter.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter that you want to delete.</p>
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
   * <p>A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member
   *       account that you want to delete invitations from.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeleteIPSetRequest {
  /**
   * <p>The unique ID of the detector associated with the IPSet.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the IPSet to delete.</p>
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
   * <p>A unique identifier associated with Malware Protection plan resource.</p>
   * @public
   */
  MalwareProtectionPlanId: string | undefined;
}

/**
 * <p>The requested resource can't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>The error type.</p>
   * @public
   */
  Type?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.Type = opts.Type;
  }
}

/**
 * @public
 */
export interface DeleteMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to
   *       delete.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts that you want to delete.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersResponse {
  /**
   * <p>The accounts that could not be processed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeletePublishingDestinationRequest {
  /**
   * <p>The unique ID of the detector associated with the publishing destination to delete.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID of the publishing destination to delete.</p>
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
export interface DeleteThreatIntelSetRequest {
  /**
   * <p>The unique ID of the detector that is associated with the threatIntelSet.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the threatIntelSet that you want to delete.</p>
   * @public
   */
  ThreatIntelSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteThreatIntelSetResponse {}

/**
 * <p>Contains information about the condition.</p>
 * @public
 */
export interface FilterCondition {
  /**
   * <p>Represents an <i>equal</i>
   *             <b></b> condition to be applied to
   *       a single field when querying for scan entries.</p>
   * @public
   */
  EqualsValue?: string;

  /**
   * <p>Represents a <i>greater than</i> condition to be applied to a single field
   *       when querying for scan entries.</p>
   * @public
   */
  GreaterThan?: number;

  /**
   * <p>Represents a <i>less than</i> condition to be applied to a single field when
   *       querying for scan entries.</p>
   * @public
   */
  LessThan?: number;
}

/**
 * <p>Represents a condition that when matched will be added to the response of the operation.
 *       Irrespective of using any filter criteria, an administrator account can view the scan entries
 *       for all of its member accounts. However, each member account can view the scan entries only
 *       for their own account.</p>
 * @public
 */
export interface FilterCriterion {
  /**
   * <p>An enum value representing possible scan properties to match with given scan
   *       entries.</p>
   *          <note>
   *             <p>Replace the enum value <code>CLUSTER_NAME</code> with <code>EKS_CLUSTER_NAME</code>.
   *       <code>CLUSTER_NAME</code> has been deprecated.</p>
   *          </note>
   * @public
   */
  CriterionKey?: CriterionKey;

  /**
   * <p>Contains information about the condition.</p>
   * @public
   */
  FilterCondition?: FilterCondition;
}

/**
 * <p>Represents the criteria to be used in the filter for describing scan entries.</p>
 * @public
 */
export interface FilterCriteria {
  /**
   * <p>Represents a condition that when matched will be added to the response of the
   *       operation.</p>
   * @public
   */
  FilterCriterion?: FilterCriterion[];
}

/**
 * <p>Contains information about the criteria used for sorting findings.</p>
 * @public
 */
export interface SortCriteria {
  /**
   * <p>Represents the finding attribute, such as <code>accountId</code>, that sorts the
   *       findings.</p>
   * @public
   */
  AttributeName?: string;

  /**
   * <p>The order by which the sorted findings are to be displayed.</p>
   * @public
   */
  OrderBy?: OrderBy;
}

/**
 * @public
 */
export interface DescribeMalwareScansRequest {
  /**
   * <p>The unique ID of the detector that the request is associated with.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Represents the criteria to be used in the filter for describing scan entries.</p>
   * @public
   */
  FilterCriteria?: FilterCriteria;

  /**
   * <p>Represents the criteria used for sorting scan entries. The <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_SortCriteria.html#guardduty-Type-SortCriteria-attributeName">
   *                <code>attributeName</code>
   *             </a> is required and it must be
   *       <code>scanStartTime</code>.</p>
   * @public
   */
  SortCriteria?: SortCriteria;
}

/**
 * <p>Contains EBS volume details.</p>
 * @public
 */
export interface VolumeDetail {
  /**
   * <p>EBS volume ARN information.</p>
   * @public
   */
  VolumeArn?: string;

  /**
   * <p>The EBS volume type.</p>
   * @public
   */
  VolumeType?: string;

  /**
   * <p>The device name for the EBS volume.</p>
   * @public
   */
  DeviceName?: string;

  /**
   * <p>EBS volume size in GB.</p>
   * @public
   */
  VolumeSizeInGB?: number;

  /**
   * <p>EBS volume encryption type.</p>
   * @public
   */
  EncryptionType?: string;

  /**
   * <p>Snapshot ARN of the EBS volume.</p>
   * @public
   */
  SnapshotArn?: string;

  /**
   * <p>KMS key ARN used to encrypt the EBS volume.</p>
   * @public
   */
  KmsKeyArn?: string;
}

/**
 * <p>Represents the resources that were scanned in the scan entry.</p>
 * @public
 */
export interface ResourceDetails {
  /**
   * <p>Instance ARN that was scanned in the scan entry.</p>
   * @public
   */
  InstanceArn?: string;
}

/**
 * @public
 * @enum
 */
export const ScanResult = {
  CLEAN: "CLEAN",
  INFECTED: "INFECTED",
} as const;

/**
 * @public
 */
export type ScanResult = (typeof ScanResult)[keyof typeof ScanResult];

/**
 * <p>Represents the result of the scan.</p>
 * @public
 */
export interface ScanResultDetails {
  /**
   * <p>An enum value representing possible scan results.</p>
   * @public
   */
  ScanResult?: ScanResult;
}

/**
 * @public
 * @enum
 */
export const ScanStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SKIPPED: "SKIPPED",
} as const;

/**
 * @public
 */
export type ScanStatus = (typeof ScanStatus)[keyof typeof ScanStatus];

/**
 * @public
 * @enum
 */
export const ScanType = {
  GUARDDUTY_INITIATED: "GUARDDUTY_INITIATED",
  ON_DEMAND: "ON_DEMAND",
} as const;

/**
 * @public
 */
export type ScanType = (typeof ScanType)[keyof typeof ScanType];

/**
 * <p>Represents the reason the scan was triggered.</p>
 * @public
 */
export interface TriggerDetails {
  /**
   * <p>The ID of the GuardDuty finding that triggered the malware scan.</p>
   * @public
   */
  GuardDutyFindingId?: string;

  /**
   * <p>The description of the scan trigger.</p>
   * @public
   */
  Description?: string;
}

/**
 * <p>Contains information about a malware scan.</p>
 * @public
 */
export interface Scan {
  /**
   * <p>The unique ID of the detector that the request is associated with.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId?: string;

  /**
   * <p>The unique detector ID of the administrator account that the request is associated with.
   *       If the account is an administrator, the <code>AdminDetectorId</code> will be the same as the one used for
   *       <code>DetectorId</code>.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  AdminDetectorId?: string;

  /**
   * <p>The unique scan ID associated with a scan entry.</p>
   * @public
   */
  ScanId?: string;

  /**
   * <p>An enum value representing possible scan statuses.</p>
   * @public
   */
  ScanStatus?: ScanStatus;

  /**
   * <p>Represents the reason for FAILED scan status.</p>
   * @public
   */
  FailureReason?: string;

  /**
   * <p>The timestamp of when the scan was triggered.</p>
   * @public
   */
  ScanStartTime?: Date;

  /**
   * <p>The timestamp of when the scan was finished.</p>
   * @public
   */
  ScanEndTime?: Date;

  /**
   * <p>Specifies the reason why the scan was initiated.</p>
   * @public
   */
  TriggerDetails?: TriggerDetails;

  /**
   * <p>Represents the resources that were scanned in the scan entry.</p>
   * @public
   */
  ResourceDetails?: ResourceDetails;

  /**
   * <p>Represents the result of the scan.</p>
   * @public
   */
  ScanResultDetails?: ScanResultDetails;

  /**
   * <p>The ID for the account that belongs to the scan.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>Represents total bytes that were scanned.</p>
   * @public
   */
  TotalBytes?: number;

  /**
   * <p>Represents the number of files that were scanned.</p>
   * @public
   */
  FileCount?: number;

  /**
   * <p>List of volumes that were attached to the original instance to be scanned.</p>
   * @public
   */
  AttachedVolumes?: VolumeDetail[];

  /**
   * <p>Specifies the scan type that invoked the malware scan.</p>
   * @public
   */
  ScanType?: ScanType;
}

/**
 * @public
 */
export interface DescribeMalwareScansResponse {
  /**
   * <p>Contains information about malware scans.</p>
   * @public
   */
  Scans: Scan[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {
  /**
   * <p>The detector ID of the delegated administrator for which you need to retrieve the information.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill
   *         <code>nextToken</code> in the request with the value of <code>NextToken</code> from the
   *       previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The current configuration of Kubernetes audit logs as a data source for the
 *       organization.</p>
 * @public
 */
export interface OrganizationKubernetesAuditLogsConfigurationResult {
  /**
   * <p>Whether Kubernetes audit logs data source should be auto-enabled for new members joining
   *       the organization.</p>
   * @public
   */
  AutoEnable: boolean | undefined;
}

/**
 * <p>The current configuration of all Kubernetes data sources for the organization.</p>
 * @public
 */
export interface OrganizationKubernetesConfigurationResult {
  /**
   * <p>The current configuration of Kubernetes audit logs as a data source for the
   *       organization.</p>
   * @public
   */
  AuditLogs: OrganizationKubernetesAuditLogsConfigurationResult | undefined;
}

/**
 * <p>An object that contains information on the status of whether EBS volumes scanning will be
 *       enabled as a data source for an organization.</p>
 * @public
 */
export interface OrganizationEbsVolumesResult {
  /**
   * <p>An object that contains the status of whether scanning EBS volumes should be auto-enabled
   *       for new members joining the organization.</p>
   * @public
   */
  AutoEnable?: boolean;
}

/**
 * <p>An object that contains information on the status of scanning EC2 instances with findings
 *       for an organization.</p>
 * @public
 */
export interface OrganizationScanEc2InstanceWithFindingsResult {
  /**
   * <p>Describes the configuration for scanning EBS volumes for an organization.</p>
   * @public
   */
  EbsVolumes?: OrganizationEbsVolumesResult;
}

/**
 * <p>An object that contains information on the status of all Malware Protection data source
 *       for an organization.</p>
 * @public
 */
export interface OrganizationMalwareProtectionConfigurationResult {
  /**
   * <p>Describes the configuration for scanning EC2 instances with findings for an
   *       organization.</p>
   * @public
   */
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindingsResult;
}

/**
 * <p>The current configuration of S3 data event logs as a data source for the
 *       organization.</p>
 * @public
 */
export interface OrganizationS3LogsConfigurationResult {
  /**
   * <p>A value that describes whether S3 data event logs are automatically enabled for new
   *       members of the organization.</p>
   * @public
   */
  AutoEnable: boolean | undefined;
}

/**
 * <p>An object that contains information on which data sources are automatically enabled for
 *       new members within the organization.</p>
 * @public
 */
export interface OrganizationDataSourceConfigurationsResult {
  /**
   * <p>Describes whether S3 data event logs are enabled as a data source.</p>
   * @public
   */
  S3Logs: OrganizationS3LogsConfigurationResult | undefined;

  /**
   * <p>Describes the configuration of Kubernetes data sources.</p>
   * @public
   */
  Kubernetes?: OrganizationKubernetesConfigurationResult;

  /**
   * <p>Describes the configuration of Malware Protection data source for an organization.</p>
   * @public
   */
  MalwareProtection?: OrganizationMalwareProtectionConfigurationResult;
}

/**
 * @public
 * @enum
 */
export const OrgFeatureStatus = {
  ALL: "ALL",
  NEW: "NEW",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type OrgFeatureStatus = (typeof OrgFeatureStatus)[keyof typeof OrgFeatureStatus];

/**
 * @public
 * @enum
 */
export const OrgFeatureAdditionalConfiguration = {
  EC2_AGENT_MANAGEMENT: "EC2_AGENT_MANAGEMENT",
  ECS_FARGATE_AGENT_MANAGEMENT: "ECS_FARGATE_AGENT_MANAGEMENT",
  EKS_ADDON_MANAGEMENT: "EKS_ADDON_MANAGEMENT",
} as const;

/**
 * @public
 */
export type OrgFeatureAdditionalConfiguration =
  (typeof OrgFeatureAdditionalConfiguration)[keyof typeof OrgFeatureAdditionalConfiguration];

/**
 * <p>A list of additional configuration which will be configured for the organization.</p>
 * @public
 */
export interface OrganizationAdditionalConfigurationResult {
  /**
   * <p>The name of the additional configuration that is configured for the member accounts within
   *       the organization.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration;

  /**
   * <p>Describes the status of the additional configuration that is configured for the
   *       member accounts within the organization. One of the following
   *     values is the status for the entire organization:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code>: Indicates that when a new account joins the organization, they will
   *           have the additional configuration enabled automatically. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: Indicates that all accounts in the organization have
   *           the additional configuration
   *           enabled automatically. This includes <code>NEW</code> accounts that join the organization
   *           and accounts that may have been suspended or removed from the organization in
   *           GuardDuty.</p>
   *                <p>It may take up to 24 hours to update the configuration for all the member accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Indicates that the additional configuration will not be
   *           automatically enabled for any
   *           account in the organization. The administrator must manage the additional configuration
   *           for each account individually.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AutoEnable?: OrgFeatureStatus;
}

/**
 * @public
 * @enum
 */
export const OrgFeature = {
  EBS_MALWARE_PROTECTION: "EBS_MALWARE_PROTECTION",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
  LAMBDA_NETWORK_LOGS: "LAMBDA_NETWORK_LOGS",
  RDS_LOGIN_EVENTS: "RDS_LOGIN_EVENTS",
  RUNTIME_MONITORING: "RUNTIME_MONITORING",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;

/**
 * @public
 */
export type OrgFeature = (typeof OrgFeature)[keyof typeof OrgFeature];

/**
 * <p>A list of features which will be configured for the organization.</p>
 * @public
 */
export interface OrganizationFeatureConfigurationResult {
  /**
   * <p>The name of the feature that is configured for the member accounts within the
   *       organization.</p>
   * @public
   */
  Name?: OrgFeature;

  /**
   * <p>Describes the status of the feature that is configured for the member accounts within
   *       the organization.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code>: Indicates that when a new account joins the organization, they will
   *           have the feature enabled automatically. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: Indicates that all accounts in the organization have the feature
   *           enabled automatically. This includes <code>NEW</code> accounts that join the organization
   *           and accounts that may have been suspended or removed from the organization in
   *           GuardDuty.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Indicates that the feature will not be automatically enabled for any
   *           account in the organization. In this case, each account will be managed individually
   *           by the
   *           administrator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AutoEnable?: OrgFeatureStatus;

  /**
   * <p>The additional configuration that is configured for the member accounts within the
   *       organization.</p>
   * @public
   */
  AdditionalConfiguration?: OrganizationAdditionalConfigurationResult[];
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * @deprecated
   *
   * <p>Indicates whether GuardDuty is automatically enabled for accounts added to the
   *       organization.</p>
   *          <p>Even though this is still supported, we recommend using
   *         <code>AutoEnableOrganizationMembers</code> to achieve the similar results.</p>
   * @public
   */
  AutoEnable?: boolean;

  /**
   * <p>Indicates whether the maximum number of allowed member accounts are already associated
   *       with the delegated administrator account for your organization.</p>
   * @public
   */
  MemberAccountLimitReached: boolean | undefined;

  /**
   * @deprecated
   *
   * <p>Describes which data sources are enabled automatically for member accounts.</p>
   * @public
   */
  DataSources?: OrganizationDataSourceConfigurationsResult;

  /**
   * <p>A list of features that are configured for this organization.</p>
   * @public
   */
  Features?: OrganizationFeatureConfigurationResult[];

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Indicates the auto-enablement configuration of GuardDuty or any of the corresponding protection plans for the member accounts in the
   *       organization.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code>: Indicates that when a new account joins the organization, they will
   *           have GuardDuty or any of the corresponding protection plans enabled automatically. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: Indicates that all accounts in the organization have GuardDuty and any of the corresponding
   *           protection plans enabled automatically. This includes <code>NEW</code> accounts that join the organization
   *           and accounts that may have been suspended or removed from the organization in
   *           GuardDuty.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Indicates that GuardDuty or any of the corresponding protection plans
   *           will not be automatically enabled for any
   *           account in the organization. The administrator must manage GuardDuty for each account in
   *           the organization individually.</p>
   *                <p>When you update the auto-enable setting from <code>ALL</code> or <code>NEW</code> to
   *         <code>NONE</code>, this action doesn't disable the corresponding option for your existing accounts. This
   *         configuration will apply to the new accounts that join the organization. After you update the auto-enable settings,
   *         no new account will have the corresponding option as enabled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AutoEnableOrganizationMembers?: AutoEnableMembers;
}

/**
 * @public
 */
export interface DescribePublishingDestinationRequest {
  /**
   * <p>The unique ID of the detector associated with the publishing destination to
   *       retrieve.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID of the publishing destination to retrieve.</p>
   * @public
   */
  DestinationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PublishingStatus = {
  PENDING_VERIFICATION: "PENDING_VERIFICATION",
  PUBLISHING: "PUBLISHING",
  STOPPED: "STOPPED",
  UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY: "UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY",
} as const;

/**
 * @public
 */
export type PublishingStatus = (typeof PublishingStatus)[keyof typeof PublishingStatus];

/**
 * @public
 */
export interface DescribePublishingDestinationResponse {
  /**
   * <p>The ID of the publishing destination.</p>
   * @public
   */
  DestinationId: string | undefined;

  /**
   * <p>The type of publishing destination. Currently, only Amazon S3 buckets are
   *       supported.</p>
   * @public
   */
  DestinationType: DestinationType | undefined;

  /**
   * <p>The status of the publishing destination.</p>
   * @public
   */
  Status: PublishingStatus | undefined;

  /**
   * <p>The time, in epoch millisecond format, at which GuardDuty was first unable to publish
   *       findings to the destination.</p>
   * @public
   */
  PublishingFailureStartTimestamp: number | undefined;

  /**
   * <p>A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code>
   *       and <code>KmsKeyArn</code> of the publishing destination.</p>
   * @public
   */
  DestinationProperties: DestinationProperties | undefined;
}

/**
 * <p>Contains information about the publishing destination, including the ID, type, and
 *       status.</p>
 * @public
 */
export interface Destination {
  /**
   * <p>The unique ID of the publishing destination.</p>
   * @public
   */
  DestinationId: string | undefined;

  /**
   * <p>The type of resource used for the publishing destination. Currently, only Amazon S3
   *       buckets are supported.</p>
   * @public
   */
  DestinationType: DestinationType | undefined;

  /**
   * <p>The status of the publishing destination.</p>
   * @public
   */
  Status: PublishingStatus | undefined;
}

/**
 * <p>Contains information about the detected behavior.</p>
 * @public
 */
export interface Detection {
  /**
   * <p>The details about the anomalous activity that caused GuardDuty to
   *       generate the finding.</p>
   * @public
   */
  Anomaly?: Anomaly;
}

/**
 * <p>Information about the additional configuration.</p>
 * @public
 */
export interface DetectorAdditionalConfigurationResult {
  /**
   * <p>Name of the additional configuration.</p>
   * @public
   */
  Name?: FeatureAdditionalConfiguration;

  /**
   * <p>Status of the additional configuration.</p>
   * @public
   */
  Status?: FeatureStatus;

  /**
   * <p>The timestamp at which the additional configuration was last updated. This is in UTC
   *       format.</p>
   * @public
   */
  UpdatedAt?: Date;
}

/**
 * @public
 * @enum
 */
export const DetectorFeatureResult = {
  CLOUD_TRAIL: "CLOUD_TRAIL",
  DNS_LOGS: "DNS_LOGS",
  EBS_MALWARE_PROTECTION: "EBS_MALWARE_PROTECTION",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
  FLOW_LOGS: "FLOW_LOGS",
  LAMBDA_NETWORK_LOGS: "LAMBDA_NETWORK_LOGS",
  RDS_LOGIN_EVENTS: "RDS_LOGIN_EVENTS",
  RUNTIME_MONITORING: "RUNTIME_MONITORING",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;

/**
 * @public
 */
export type DetectorFeatureResult = (typeof DetectorFeatureResult)[keyof typeof DetectorFeatureResult];

/**
 * <p>Contains information about a GuardDuty feature.</p>
 *          <p>Specifying both EKS Runtime Monitoring (<code>EKS_RUNTIME_MONITORING</code>)
 *       and Runtime Monitoring (<code>RUNTIME_MONITORING</code>) will cause an error.
 *       You can add only one of these two features because Runtime Monitoring already includes the
 *       threat detection for Amazon EKS resources. For more information, see
 *       <a href="https://docs.aws.amazon.com/guardduty/latest/ug/runtime-monitoring.html">Runtime Monitoring</a>.</p>
 * @public
 */
export interface DetectorFeatureConfigurationResult {
  /**
   * <p>Indicates the name of the feature that can be enabled for the detector.</p>
   * @public
   */
  Name?: DetectorFeatureResult;

  /**
   * <p>Indicates the status of the feature that is enabled for the detector.</p>
   * @public
   */
  Status?: FeatureStatus;

  /**
   * <p>The timestamp at which the feature object was updated.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>Additional configuration for a resource.</p>
   * @public
   */
  AdditionalConfiguration?: DetectorAdditionalConfigurationResult[];
}

/**
 * @public
 * @enum
 */
export const DetectorStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DetectorStatus = (typeof DetectorStatus)[keyof typeof DetectorStatus];

/**
 * @public
 */
export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services Account ID for the organizations account to be disabled as a GuardDuty delegated
   *       administrator.</p>
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
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFromAdministratorAccountResponse {}

/**
 * @public
 */
export interface DisassociateFromMasterAccountRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFromMasterAccountResponse {}

/**
 * @public
 */
export interface DisassociateMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to
   *       disassociate from the administrator account.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts that you want to disassociate from
   *       the administrator account.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateMembersResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 * @enum
 */
export const EbsSnapshotPreservation = {
  NO_RETENTION: "NO_RETENTION",
  RETENTION_WITH_FINDING: "RETENTION_WITH_FINDING",
} as const;

/**
 * @public
 */
export type EbsSnapshotPreservation = (typeof EbsSnapshotPreservation)[keyof typeof EbsSnapshotPreservation];

/**
 * <p>Contains list of scanned and skipped EBS volumes with details.</p>
 * @public
 */
export interface EbsVolumeDetails {
  /**
   * <p>List of EBS volumes that were scanned.</p>
   * @public
   */
  ScannedVolumeDetails?: VolumeDetail[];

  /**
   * <p>List of EBS volumes that were skipped from the malware scan.</p>
   * @public
   */
  SkippedVolumeDetails?: VolumeDetail[];
}

/**
 * <p>Contains details of the highest severity threat detected during scan and number of
 *       infected files.</p>
 * @public
 */
export interface HighestSeverityThreatDetails {
  /**
   * <p>Severity level of the highest severity threat detected.</p>
   * @public
   */
  Severity?: string;

  /**
   * <p>Threat name of the highest severity threat detected as part of the malware scan.</p>
   * @public
   */
  ThreatName?: string;

  /**
   * <p>Total number of infected files with the highest severity threat detected.</p>
   * @public
   */
  Count?: number;
}

/**
 * <p>Total number of scanned files.</p>
 * @public
 */
export interface ScannedItemCount {
  /**
   * <p>Total GB of files scanned for malware.</p>
   * @public
   */
  TotalGb?: number;

  /**
   * <p>Number of files scanned.</p>
   * @public
   */
  Files?: number;

  /**
   * <p>Total number of scanned volumes.</p>
   * @public
   */
  Volumes?: number;
}

/**
 * <p>Contains details of infected file including name, file path and hash.</p>
 * @public
 */
export interface ScanFilePath {
  /**
   * <p>The file path of the infected file.</p>
   * @public
   */
  FilePath?: string;

  /**
   * <p>EBS volume ARN details of the infected file.</p>
   * @public
   */
  VolumeArn?: string;

  /**
   * <p>The hash value of the infected file.</p>
   * @public
   */
  Hash?: string;

  /**
   * <p>File name of the infected file.</p>
   * @public
   */
  FileName?: string;
}

/**
 * <p>Contains files infected with the given threat providing details of malware name and
 *       severity.</p>
 * @public
 */
export interface ScanThreatName {
  /**
   * <p>The name of the identified threat.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Severity of threat identified as part of the malware scan.</p>
   * @public
   */
  Severity?: string;

  /**
   * <p>Total number of files infected with given threat.</p>
   * @public
   */
  ItemCount?: number;

  /**
   * <p>List of infected files in EBS volume with details.</p>
   * @public
   */
  FilePaths?: ScanFilePath[];
}

/**
 * <p>Contains details about identified threats organized by threat name.</p>
 * @public
 */
export interface ThreatDetectedByName {
  /**
   * <p>Total number of infected files identified.</p>
   * @public
   */
  ItemCount?: number;

  /**
   * <p>Total number of unique threats by name identified, as part of the malware scan.</p>
   * @public
   */
  UniqueThreatNameCount?: number;

  /**
   * <p>Flag to determine if the finding contains every single infected file-path and/or every
   *       threat.</p>
   * @public
   */
  Shortened?: boolean;

  /**
   * <p>List of identified threats with details, organized by threat name.</p>
   * @public
   */
  ThreatNames?: ScanThreatName[];
}

/**
 * <p>Contains total number of infected files.</p>
 * @public
 */
export interface ThreatsDetectedItemCount {
  /**
   * <p>Total number of infected files.</p>
   * @public
   */
  Files?: number;
}

/**
 * <p>Contains a complete view providing malware scan result details.</p>
 * @public
 */
export interface ScanDetections {
  /**
   * <p>Total number of scanned files.</p>
   * @public
   */
  ScannedItemCount?: ScannedItemCount;

  /**
   * <p>Total number of infected files.</p>
   * @public
   */
  ThreatsDetectedItemCount?: ThreatsDetectedItemCount;

  /**
   * <p>Details of the highest severity threat detected during malware scan and number of infected
   *       files.</p>
   * @public
   */
  HighestSeverityThreatDetails?: HighestSeverityThreatDetails;

  /**
   * <p>Contains details about identified threats organized by threat name.</p>
   * @public
   */
  ThreatDetectedByName?: ThreatDetectedByName;
}

/**
 * <p>Contains details from the malware scan that created a finding.</p>
 * @public
 */
export interface EbsVolumeScanDetails {
  /**
   * <p>Unique Id of the malware scan that generated the finding.</p>
   * @public
   */
  ScanId?: string;

  /**
   * <p>Returns the start date and time of the malware scan.</p>
   * @public
   */
  ScanStartedAt?: Date;

  /**
   * <p>Returns the completion date and time of the malware scan.</p>
   * @public
   */
  ScanCompletedAt?: Date;

  /**
   * <p>GuardDuty finding ID that triggered a malware scan.</p>
   * @public
   */
  TriggerFindingId?: string;

  /**
   * <p>Contains list of threat intelligence sources used to detect threats.</p>
   * @public
   */
  Sources?: string[];

  /**
   * <p>Contains a complete view providing malware scan result details.</p>
   * @public
   */
  ScanDetections?: ScanDetections;

  /**
   * <p>Specifies the scan type that invoked the malware scan.</p>
   * @public
   */
  ScanType?: ScanType;
}

/**
 * <p>Contains information about a tag key-value pair.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>Describes the key associated with the tag.</p>
   * @public
   */
  Key?: string;

  /**
   * <p>Describes the value associated with the tag key.</p>
   * @public
   */
  Value?: string;
}

/**
 * <p>Represents a pre-existing file or directory on the host machine that the volume maps
 *       to.</p>
 * @public
 */
export interface HostPath {
  /**
   * <p>Path of the file or directory on the host that the volume maps to.</p>
   * @public
   */
  Path?: string;
}

/**
 * <p>Volume used by the Kubernetes workload.</p>
 * @public
 */
export interface Volume {
  /**
   * <p>Volume name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Represents a pre-existing file or directory on the host machine that the volume maps
   *       to.</p>
   * @public
   */
  HostPath?: HostPath;
}

/**
 * <p>Contains information about the task in an ECS cluster.</p>
 * @public
 */
export interface EcsTaskDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The ARN of the task definition that creates the task.</p>
   * @public
   */
  DefinitionArn?: string;

  /**
   * <p>The version counter for the task.</p>
   * @public
   */
  Version?: string;

  /**
   * <p>The Unix timestamp for the time when the task was created.</p>
   * @public
   */
  TaskCreatedAt?: Date;

  /**
   * <p>The Unix timestamp for the time when the task started.</p>
   * @public
   */
  StartedAt?: Date;

  /**
   * <p>Contains the tag specified when a task is started.</p>
   * @public
   */
  StartedBy?: string;

  /**
   * <p>The tags of the ECS Task.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The list of data volume definitions for the task.</p>
   * @public
   */
  Volumes?: Volume[];

  /**
   * <p>The containers that's associated with the task.</p>
   * @public
   */
  Containers?: Container[];

  /**
   * <p>The name of the task group that's associated with the task.</p>
   * @public
   */
  Group?: string;

  /**
   * <p>A capacity on which the task is running. For example, <code>Fargate</code> and <code>EC2</code>.</p>
   * @public
   */
  LaunchType?: string;
}

/**
 * <p>Contains information about the details of the ECS Cluster.</p>
 * @public
 */
export interface EcsClusterDetails {
  /**
   * <p>The name of the ECS Cluster.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the cluster.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The status of the ECS cluster.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The number of services that are running on the cluster in an ACTIVE state.</p>
   * @public
   */
  ActiveServicesCount?: number;

  /**
   * <p>The number of container instances registered into the cluster.</p>
   * @public
   */
  RegisteredContainerInstancesCount?: number;

  /**
   * <p>The number of tasks in the cluster that are in the RUNNING state.</p>
   * @public
   */
  RunningTasksCount?: number;

  /**
   * <p>The tags of the ECS Cluster.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Contains information about the details of the ECS Task.</p>
   * @public
   */
  TaskDetails?: EcsTaskDetails;
}

/**
 * <p>Details about the EKS cluster involved in a Kubernetes finding.</p>
 * @public
 */
export interface EksClusterDetails {
  /**
   * <p>EKS cluster name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>EKS cluster ARN.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The VPC ID to which the EKS cluster is attached.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>The EKS cluster status.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The EKS cluster tags.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>The timestamp when the EKS cluster was created.</p>
   * @public
   */
  CreatedAt?: Date;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID for the organization account to be enabled as a GuardDuty delegated
   *       administrator.</p>
   * @public
   */
  AdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountResponse {}

/**
 * <p>An instance of a threat intelligence detail that constitutes evidence for the
 *       finding.</p>
 * @public
 */
export interface ThreatIntelligenceDetail {
  /**
   * <p>The name of the threat intelligence list that triggered the finding.</p>
   * @public
   */
  ThreatListName?: string;

  /**
   * <p>A list of names of the threats in the threat intelligence list that triggered the
   *       finding.</p>
   * @public
   */
  ThreatNames?: string[];

  /**
   * <p>SHA256 of the file that generated the finding.</p>
   * @public
   */
  ThreatFileSha256?: string;
}

/**
 * <p>Contains information about the reason that the finding was generated.</p>
 * @public
 */
export interface Evidence {
  /**
   * <p>A list of threat intelligence details related to the evidence.</p>
   * @public
   */
  ThreatIntelligenceDetails?: ThreatIntelligenceDetail[];
}

/**
 * @public
 * @enum
 */
export const Feedback = {
  NOT_USEFUL: "NOT_USEFUL",
  USEFUL: "USEFUL",
} as const;

/**
 * @public
 */
export type Feedback = (typeof Feedback)[keyof typeof Feedback];

/**
 * <p>Contains information about the EC2 instance profile.</p>
 * @public
 */
export interface IamInstanceProfile {
  /**
   * <p>The profile ARN of the EC2 instance.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The profile ID of the EC2 instance.</p>
   * @public
   */
  Id?: string;
}

/**
 * <p>Contains other private IP address information of the EC2 instance.</p>
 * @public
 */
export interface PrivateIpAddressDetails {
  /**
   * <p>The private DNS name of the EC2 instance.</p>
   * @public
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IP address of the EC2 instance.</p>
   * @public
   */
  PrivateIpAddress?: string;
}

/**
 * <p>Contains information about the security groups associated with the EC2 instance.</p>
 * @public
 */
export interface SecurityGroup {
  /**
   * <p>The security group ID of the EC2 instance.</p>
   * @public
   */
  GroupId?: string;

  /**
   * <p>The security group name of the EC2 instance.</p>
   * @public
   */
  GroupName?: string;
}

/**
 * <p>Contains information about the elastic network interface of the EC2 instance.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>A list of IPv6 addresses for the EC2 instance.</p>
   * @public
   */
  Ipv6Addresses?: string[];

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The private DNS name of the EC2 instance.</p>
   * @public
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IP address of the EC2 instance.</p>
   * @public
   */
  PrivateIpAddress?: string;

  /**
   * <p>Other private IP address information of the EC2 instance.</p>
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressDetails[];

  /**
   * <p>The public DNS name of the EC2 instance.</p>
   * @public
   */
  PublicDnsName?: string;

  /**
   * <p>The public IP address of the EC2 instance.</p>
   * @public
   */
  PublicIp?: string;

  /**
   * <p>The security groups associated with the EC2 instance.</p>
   * @public
   */
  SecurityGroups?: SecurityGroup[];

  /**
   * <p>The subnet ID of the EC2 instance.</p>
   * @public
   */
  SubnetId?: string;

  /**
   * <p>The VPC ID of the EC2 instance.</p>
   * @public
   */
  VpcId?: string;
}

/**
 * <p>Contains information about the product code for the EC2 instance.</p>
 * @public
 */
export interface ProductCode {
  /**
   * <p>The product code information.</p>
   * @public
   */
  Code?: string;

  /**
   * <p>The product code type.</p>
   * @public
   */
  ProductType?: string;
}

/**
 * <p>Contains information about the details of an instance.</p>
 * @public
 */
export interface InstanceDetails {
  /**
   * <p>The Availability Zone of the EC2 instance.</p>
   * @public
   */
  AvailabilityZone?: string;

  /**
   * <p>The profile information of the EC2 instance.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * <p>The image description of the EC2 instance.</p>
   * @public
   */
  ImageDescription?: string;

  /**
   * <p>The image ID of the EC2 instance.</p>
   * @public
   */
  ImageId?: string;

  /**
   * <p>The ID of the EC2 instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The state of the EC2 instance.</p>
   * @public
   */
  InstanceState?: string;

  /**
   * <p>The type of the EC2 instance.</p>
   * @public
   */
  InstanceType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost. Only applicable to Amazon Web Services Outposts
   *       instances.</p>
   * @public
   */
  OutpostArn?: string;

  /**
   * <p>The launch time of the EC2 instance.</p>
   * @public
   */
  LaunchTime?: string;

  /**
   * <p>The elastic network interface information of the EC2 instance.</p>
   * @public
   */
  NetworkInterfaces?: NetworkInterface[];

  /**
   * <p>The platform of the EC2 instance.</p>
   * @public
   */
  Platform?: string;

  /**
   * <p>The product code of the EC2 instance.</p>
   * @public
   */
  ProductCodes?: ProductCode[];

  /**
   * <p>The tags of the EC2 instance.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Contains information about the impersonated user.</p>
 * @public
 */
export interface ImpersonatedUser {
  /**
   * <p>Information about the <code>username</code> that was being impersonated.</p>
   * @public
   */
  Username?: string;

  /**
   * <p>The <code>group</code> to which the user name belongs.</p>
   * @public
   */
  Groups?: string[];
}

/**
 * <p>Details about the Kubernetes user involved in a Kubernetes finding.</p>
 * @public
 */
export interface KubernetesUserDetails {
  /**
   * <p>The username of the user who called the Kubernetes API.</p>
   * @public
   */
  Username?: string;

  /**
   * <p>The user ID of the user who called the Kubernetes API.</p>
   * @public
   */
  Uid?: string;

  /**
   * <p>The groups that include the user who called the Kubernetes API.</p>
   * @public
   */
  Groups?: string[];

  /**
   * <p>Entity that assumes the IAM role
   *       when Kubernetes RBAC permissions are assigned to that role.</p>
   * @public
   */
  SessionName?: string[];

  /**
   * <p>Information about the impersonated user.</p>
   * @public
   */
  ImpersonatedUser?: ImpersonatedUser;
}

/**
 * <p>Details about the Kubernetes workload involved in a Kubernetes finding.</p>
 * @public
 */
export interface KubernetesWorkloadDetails {
  /**
   * <p>Kubernetes workload name.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Kubernetes workload type (e.g. Pod, Deployment, etc.).</p>
   * @public
   */
  Type?: string;

  /**
   * <p>Kubernetes workload ID.</p>
   * @public
   */
  Uid?: string;

  /**
   * <p>Kubernetes namespace that the workload is part of.</p>
   * @public
   */
  Namespace?: string;

  /**
   * <p>Whether the hostNetwork flag is enabled for the pods included in the workload.</p>
   * @public
   */
  HostNetwork?: boolean;

  /**
   * <p>Containers running as part of the Kubernetes workload.</p>
   * @public
   */
  Containers?: Container[];

  /**
   * <p>Volumes used by the Kubernetes workload.</p>
   * @public
   */
  Volumes?: Volume[];

  /**
   * <p>The service account name that is associated with a Kubernetes workload.</p>
   * @public
   */
  ServiceAccountName?: string;

  /**
   * <p>Whether the host IPC flag is enabled for the pods in the workload.</p>
   * @public
   */
  HostIPC?: boolean;

  /**
   * <p>Whether the host PID flag is enabled for the pods in the workload. </p>
   * @public
   */
  HostPID?: boolean;
}

/**
 * <p>Details about Kubernetes resources such as a Kubernetes user or workload resource involved
 *       in a Kubernetes finding.</p>
 * @public
 */
export interface KubernetesDetails {
  /**
   * <p>Details about the Kubernetes user involved in a Kubernetes finding.</p>
   * @public
   */
  KubernetesUserDetails?: KubernetesUserDetails;

  /**
   * <p>Details about the Kubernetes workload involved in a Kubernetes finding.</p>
   * @public
   */
  KubernetesWorkloadDetails?: KubernetesWorkloadDetails;
}

/**
 * <p>Amazon Virtual Private Cloud configuration details associated with your Lambda function.</p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>The identifiers of the subnets that are associated with your Lambda function.</p>
   * @public
   */
  SubnetIds?: string[];

  /**
   * <p>The identifier of the Amazon Virtual Private Cloud.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>The identifier of the security group attached to the Lambda function.</p>
   * @public
   */
  SecurityGroups?: SecurityGroup[];
}

/**
 * <p>Information about the Lambda function involved in the finding.</p>
 * @public
 */
export interface LambdaDetails {
  /**
   * <p>Amazon Resource Name (ARN) of the Lambda function.</p>
   * @public
   */
  FunctionArn?: string;

  /**
   * <p>Name of the Lambda function.</p>
   * @public
   */
  FunctionName?: string;

  /**
   * <p>Description of the Lambda function.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The timestamp when the Lambda function was last modified. This field is in the UTC date string
   *       format <code>(2023-03-22T19:37:20.168Z)</code>.</p>
   * @public
   */
  LastModifiedAt?: Date;

  /**
   * <p>The revision ID of the Lambda function version.</p>
   * @public
   */
  RevisionId?: string;

  /**
   * <p>The version of the Lambda function.</p>
   * @public
   */
  FunctionVersion?: string;

  /**
   * <p>The execution role of the Lambda function.</p>
   * @public
   */
  Role?: string;

  /**
   * <p>Amazon Virtual Private Cloud configuration details associated with your Lambda function.</p>
   * @public
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>A list of tags attached to this resource, listed in the format of
   *       <code>key</code>:<code>value</code> pair.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Contains information about the resource type <code>RDSDBInstance</code> involved in a
 *       GuardDuty finding.</p>
 * @public
 */
export interface RdsDbInstanceDetails {
  /**
   * <p>The identifier associated to the database instance that was involved in the
   *       finding.</p>
   * @public
   */
  DbInstanceIdentifier?: string;

  /**
   * <p>The database engine of the database instance involved in the finding.</p>
   * @public
   */
  Engine?: string;

  /**
   * <p>The version of the database engine that was involved in the finding.</p>
   * @public
   */
  EngineVersion?: string;

  /**
   * <p>The identifier of the database cluster that contains the database instance ID involved in
   *       the finding.</p>
   * @public
   */
  DbClusterIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the database instance involved in the
   *       finding.</p>
   * @public
   */
  DbInstanceArn?: string;

  /**
   * <p>Information about the tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Contains information about the user and authentication details for a database instance
 *       involved in the finding.</p>
 * @public
 */
export interface RdsDbUserDetails {
  /**
   * <p>The user name used in the anomalous login attempt.</p>
   * @public
   */
  User?: string;

  /**
   * <p>The application name used in the anomalous login attempt.</p>
   * @public
   */
  Application?: string;

  /**
   * <p>The name of the database instance involved in the anomalous login attempt.</p>
   * @public
   */
  Database?: string;

  /**
   * <p>The version of the Secure Socket Layer (SSL) used for the network.</p>
   * @public
   */
  Ssl?: string;

  /**
   * <p>The authentication method used by the user involved in the finding.</p>
   * @public
   */
  AuthMethod?: string;
}

/**
 * <p>Contains information about the resource type <code>RDSLimitlessDB</code> that is involved in a GuardDuty
 *     finding.</p>
 * @public
 */
export interface RdsLimitlessDbDetails {
  /**
   * <p>The name associated with the Limitless DB shard group.</p>
   * @public
   */
  DbShardGroupIdentifier?: string;

  /**
   * <p>The resource identifier of the DB shard group within the Limitless Database.</p>
   * @public
   */
  DbShardGroupResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the DB shard group.</p>
   * @public
   */
  DbShardGroupArn?: string;

  /**
   * <p>The database engine of the database instance involved in the finding.</p>
   * @public
   */
  Engine?: string;

  /**
   * <p>The version of the database engine.</p>
   * @public
   */
  EngineVersion?: string;

  /**
   * <p>The name of the database cluster that is a part of the Limitless Database.</p>
   * @public
   */
  DbClusterIdentifier?: string;

  /**
   * <p>Information about the tag-key value pair.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>Contains information on the owner of the bucket.</p>
 * @public
 */
export interface Owner {
  /**
   * <p>The canonical user ID of the bucket owner. For information about locating your canonical
   *       user ID see <a href="https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId">Finding Your Account
   *         Canonical User ID.</a>
   *          </p>
   * @public
   */
  Id?: string;
}

/**
 * <p>Contains information about how permissions are configured for the S3 bucket.</p>
 * @public
 */
export interface PermissionConfiguration {
  /**
   * <p>Contains information about the bucket level permissions for the S3 bucket.</p>
   * @public
   */
  BucketLevelPermissions?: BucketLevelPermissions;

  /**
   * <p>Contains information about the account level permissions on the S3 bucket.</p>
   * @public
   */
  AccountLevelPermissions?: AccountLevelPermissions;
}

/**
 * <p>Describes the public access policies that apply to the S3 bucket.</p>
 * @public
 */
export interface PublicAccess {
  /**
   * <p>Contains information about how permissions are configured for the S3 bucket.</p>
   * @public
   */
  PermissionConfiguration?: PermissionConfiguration;

  /**
   * <p>Describes the effective permission on this bucket after factoring all attached
   *       policies.</p>
   * @public
   */
  EffectivePermission?: string;
}

/**
 * <p>Information about the S3 object that was scanned</p>
 * @public
 */
export interface S3ObjectDetail {
  /**
   * <p>Amazon Resource Name (ARN) of the S3 object.</p>
   * @public
   */
  ObjectArn?: string;

  /**
   * <p>Key of the S3 object.</p>
   * @public
   */
  Key?: string;

  /**
   * <p>The entity tag is a hash of the S3 object. The ETag reflects changes only to the contents of
   *     an object, and not its metadata.</p>
   * @public
   */
  ETag?: string;

  /**
   * <p>Hash of the threat detected in this finding.</p>
   * @public
   */
  Hash?: string;

  /**
   * <p>Version ID of the object.</p>
   * @public
   */
  VersionId?: string;
}

/**
 * <p>Contains information on the S3 bucket.</p>
 * @public
 */
export interface S3BucketDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Describes whether the bucket is a source or destination bucket.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>The date and time the bucket was created at.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The owner of the S3 bucket.</p>
   * @public
   */
  Owner?: Owner;

  /**
   * <p>All tags attached to the S3 bucket</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Describes the server side encryption method used in the S3 bucket.</p>
   * @public
   */
  DefaultServerSideEncryption?: DefaultServerSideEncryption;

  /**
   * <p>Describes the public access policies that apply to the S3 bucket.</p>
   * @public
   */
  PublicAccess?: PublicAccess;

  /**
   * <p>Information about the S3 object that was scanned.</p>
   * @public
   */
  S3ObjectDetails?: S3ObjectDetail[];
}

/**
 * <p>Contains information about the Amazon Web Services resource associated with the activity that prompted
 *       GuardDuty to generate a finding.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The IAM access key details (user information) of a user that engaged in the activity that
   *       prompted GuardDuty to generate a finding.</p>
   * @public
   */
  AccessKeyDetails?: AccessKeyDetails;

  /**
   * <p>Contains information on the S3 bucket.</p>
   * @public
   */
  S3BucketDetails?: S3BucketDetail[];

  /**
   * <p>The information about the EC2 instance associated with the activity that prompted
   *       GuardDuty to generate a finding.</p>
   * @public
   */
  InstanceDetails?: InstanceDetails;

  /**
   * <p>Details about the EKS cluster involved in a Kubernetes finding.</p>
   * @public
   */
  EksClusterDetails?: EksClusterDetails;

  /**
   * <p>Details about the Kubernetes user and workload involved in a Kubernetes finding.</p>
   * @public
   */
  KubernetesDetails?: KubernetesDetails;

  /**
   * <p>The type of Amazon Web Services resource.</p>
   * @public
   */
  ResourceType?: string;

  /**
   * <p>Contains list of scanned and skipped EBS volumes with details.</p>
   * @public
   */
  EbsVolumeDetails?: EbsVolumeDetails;

  /**
   * <p>Contains information about the details of the ECS Cluster.</p>
   * @public
   */
  EcsClusterDetails?: EcsClusterDetails;

  /**
   * <p>Details of a container.</p>
   * @public
   */
  ContainerDetails?: Container;

  /**
   * <p>Contains information about the database instance to which an anomalous login attempt was
   *       made.</p>
   * @public
   */
  RdsDbInstanceDetails?: RdsDbInstanceDetails;

  /**
   * <p>Contains information about the RDS Limitless database that was involved in a GuardDuty finding.</p>
   * @public
   */
  RdsLimitlessDbDetails?: RdsLimitlessDbDetails;

  /**
   * <p>Contains information about the user details through which anomalous login attempt was
   *       made.</p>
   * @public
   */
  RdsDbUserDetails?: RdsDbUserDetails;

  /**
   * <p>Contains information about the Lambda function that was involved in a finding.</p>
   * @public
   */
  LambdaDetails?: LambdaDetails;
}

/**
 * <p>Additional information about the generated finding.</p>
 * @public
 */
export interface ServiceAdditionalInfo {
  /**
   * <p>This field specifies the value of the additional information.</p>
   * @public
   */
  Value?: string;

  /**
   * <p>Describes the type of the additional information.</p>
   * @public
   */
  Type?: string;
}

/**
 * <p>Information about the nested item path and hash of the protected
 *       resource.</p>
 * @public
 */
export interface ItemPath {
  /**
   * <p>The nested item path where the infected file was found.</p>
   * @public
   */
  NestedItemPath?: string;

  /**
   * <p>The hash value of the infected resource.</p>
   * @public
   */
  Hash?: string;
}

/**
 * <p>Information about the detected threats associated with the
 *       generated finding.</p>
 * @public
 */
export interface Threat {
  /**
   * <p>Name of the detected threat that caused GuardDuty to generate this finding.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Source of the threat that generated this finding.</p>
   * @public
   */
  Source?: string;

  /**
   * <p>Information about the nested item path and
   *       hash of the protected resource.</p>
   * @public
   */
  ItemPaths?: ItemPath[];
}

/**
 * <p>Information about the malware scan that generated a GuardDuty finding.</p>
 * @public
 */
export interface MalwareScanDetails {
  /**
   * <p>Information about the detected threats associated with the
   *       generated GuardDuty finding.</p>
   * @public
   */
  Threats?: Threat[];
}

/**
 * <p>Information about the runtime process details.</p>
 * @public
 */
export interface LineageObject {
  /**
   * <p>The time when the process started. This is in UTC format.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The process ID of the child process.</p>
   * @public
   */
  NamespacePid?: number;

  /**
   * <p>The user ID of the user that executed the process.</p>
   * @public
   */
  UserId?: number;

  /**
   * <p>The name of the process.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The ID of the process.</p>
   * @public
   */
  Pid?: number;

  /**
   * <p>The unique ID assigned to the process by GuardDuty.</p>
   * @public
   */
  Uuid?: string;

  /**
   * <p>The absolute path of the process executable file.</p>
   * @public
   */
  ExecutablePath?: string;

  /**
   * <p>The effective user ID that was used to execute the process.</p>
   * @public
   */
  Euid?: number;

  /**
   * <p>The unique ID of the parent process. This ID is assigned to the parent process by
   *       GuardDuty.</p>
   * @public
   */
  ParentUuid?: string;
}

/**
 * <p>Information about the observed process.</p>
 * @public
 */
export interface ProcessDetails {
  /**
   * <p>The name of the process.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The absolute path of the process executable file.</p>
   * @public
   */
  ExecutablePath?: string;

  /**
   * <p>The <code>SHA256</code> hash of the process executable.</p>
   * @public
   */
  ExecutableSha256?: string;

  /**
   * <p>The ID of the child process.</p>
   * @public
   */
  NamespacePid?: number;

  /**
   * <p>The present working directory of the process.</p>
   * @public
   */
  Pwd?: string;

  /**
   * <p>The ID of the process.</p>
   * @public
   */
  Pid?: number;

  /**
   * <p>The time when the process started. This is in UTC format.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The unique ID assigned to the process by GuardDuty.</p>
   * @public
   */
  Uuid?: string;

  /**
   * <p>The unique ID of the parent process. This ID is assigned to the parent process by
   *       GuardDuty.</p>
   * @public
   */
  ParentUuid?: string;

  /**
   * <p>The user that executed the process.</p>
   * @public
   */
  User?: string;

  /**
   * <p>The unique ID of the user that executed the process.</p>
   * @public
   */
  UserId?: number;

  /**
   * <p>The effective user ID of the user that executed the process.</p>
   * @public
   */
  Euid?: number;

  /**
   * <p>Information about the process's lineage.</p>
   * @public
   */
  Lineage?: LineageObject[];
}

/**
 * <p>Additional information about the suspicious activity.</p>
 * @public
 */
export interface RuntimeContext {
  /**
   * <p>Information about the process that modified the current process. This is available for
   *       multiple finding types.</p>
   * @public
   */
  ModifyingProcess?: ProcessDetails;

  /**
   * <p>The timestamp at which the process modified the current process. The timestamp is in UTC date string
   *       format.</p>
   * @public
   */
  ModifiedAt?: Date;

  /**
   * <p>The path to the script that was executed.</p>
   * @public
   */
  ScriptPath?: string;

  /**
   * <p>The path to the new library that was loaded.</p>
   * @public
   */
  LibraryPath?: string;

  /**
   * <p>The value of the LD_PRELOAD environment variable.</p>
   * @public
   */
  LdPreloadValue?: string;

  /**
   * <p>The path to the docket socket that was accessed.</p>
   * @public
   */
  SocketPath?: string;

  /**
   * <p>The path to the leveraged <code>runc</code> implementation.</p>
   * @public
   */
  RuncBinaryPath?: string;

  /**
   * <p>The path in the container that modified the release agent file.</p>
   * @public
   */
  ReleaseAgentPath?: string;

  /**
   * <p>The path on the host that is mounted by the container.</p>
   * @public
   */
  MountSource?: string;

  /**
   * <p>The path in the container that is mapped to the host directory.</p>
   * @public
   */
  MountTarget?: string;

  /**
   * <p>Represents the type of mounted fileSystem.</p>
   * @public
   */
  FileSystemType?: string;

  /**
   * <p>Represents options that control the behavior of a runtime operation or action. For
   *       example, a filesystem mount operation may contain a read-only flag.</p>
   * @public
   */
  Flags?: string[];

  /**
   * <p>The name of the module loaded into the kernel.</p>
   * @public
   */
  ModuleName?: string;

  /**
   * <p>The path to the module loaded into the kernel.</p>
   * @public
   */
  ModuleFilePath?: string;

  /**
   * <p>The <code>SHA256</code> hash of the module.</p>
   * @public
   */
  ModuleSha256?: string;

  /**
   * <p>The path to the modified shell history file.</p>
   * @public
   */
  ShellHistoryFilePath?: string;

  /**
   * <p>Information about the process that had its memory overwritten by the current process.</p>
   * @public
   */
  TargetProcess?: ProcessDetails;

  /**
   * <p>Represents the communication protocol associated with the address. For example, the address
   *       family <code>AF_INET</code> is used for IP version of 4 protocol.</p>
   * @public
   */
  AddressFamily?: string;

  /**
   * <p>Specifies a particular protocol within the address family. Usually there is a single
   *       protocol in address families. For example, the address family <code>AF_INET</code> only has
   *       the IP protocol.</p>
   * @public
   */
  IanaProtocolNumber?: number;

  /**
   * <p>Specifies the Region of a process's address space such as stack and heap.</p>
   * @public
   */
  MemoryRegions?: string[];

  /**
   * <p>Name of the potentially suspicious tool.</p>
   * @public
   */
  ToolName?: string;

  /**
   * <p>Category that the tool belongs to. Some of the examples
   *     are Backdoor Tool, Pentest Tool, Network Scanner, and Network Sniffer.</p>
   * @public
   */
  ToolCategory?: string;

  /**
   * <p>Name of the security service that has been potentially disabled.</p>
   * @public
   */
  ServiceName?: string;

  /**
   * <p>Example of the command line involved in the suspicious activity.</p>
   * @public
   */
  CommandLineExample?: string;

  /**
   * <p>The suspicious file path for which the threat intelligence details were found.</p>
   * @public
   */
  ThreatFilePath?: string;
}

/**
 * <p>Information about the process and any required context values for a specific
 *       finding.</p>
 * @public
 */
export interface RuntimeDetails {
  /**
   * <p>Information about the observed process.</p>
   * @public
   */
  Process?: ProcessDetails;

  /**
   * <p>Additional information about the suspicious activity.</p>
   * @public
   */
  Context?: RuntimeContext;
}

/**
 * <p>Contains additional information about the generated finding.</p>
 * @public
 */
export interface Service {
  /**
   * <p>Information about the activity that is described in a finding.</p>
   * @public
   */
  Action?: Action;

  /**
   * <p>An evidence object associated with the service.</p>
   * @public
   */
  Evidence?: Evidence;

  /**
   * <p>Indicates whether this finding is archived.</p>
   * @public
   */
  Archived?: boolean;

  /**
   * <p>The total count of the occurrences of this finding type.</p>
   * @public
   */
  Count?: number;

  /**
   * <p>The detector ID for the GuardDuty service.</p>
   * @public
   */
  DetectorId?: string;

  /**
   * <p>The first-seen timestamp of the activity that prompted GuardDuty to generate this
   *       finding.</p>
   * @public
   */
  EventFirstSeen?: string;

  /**
   * <p>The last-seen timestamp of the activity that prompted GuardDuty to generate this
   *       finding.</p>
   * @public
   */
  EventLastSeen?: string;

  /**
   * <p>The resource role information for this finding.</p>
   * @public
   */
  ResourceRole?: string;

  /**
   * <p>The name of the Amazon Web Services service (GuardDuty) that generated a finding.</p>
   * @public
   */
  ServiceName?: string;

  /**
   * <p>Feedback that was submitted about the finding.</p>
   * @public
   */
  UserFeedback?: string;

  /**
   * <p>Contains additional information about the generated finding.</p>
   * @public
   */
  AdditionalInfo?: ServiceAdditionalInfo;

  /**
   * <p>The name of the feature that generated a finding.</p>
   * @public
   */
  FeatureName?: string;

  /**
   * <p>Returns details from the malware scan that created a finding.</p>
   * @public
   */
  EbsVolumeScanDetails?: EbsVolumeScanDetails;

  /**
   * <p>Information about the process and any required context values for a specific
   *       finding</p>
   * @public
   */
  RuntimeDetails?: RuntimeDetails;

  /**
   * <p>Contains information about the detected unusual behavior.</p>
   * @public
   */
  Detection?: Detection;

  /**
   * <p>Returns details from the malware scan that generated a GuardDuty finding.</p>
   * @public
   */
  MalwareScanDetails?: MalwareScanDetails;
}

/**
 * <p>Contains information about the finding that is generated when abnormal or suspicious
 *       activity is detected.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The ID of the account in which the finding was generated.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The ARN of the finding.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The confidence score for the finding.</p>
   * @public
   */
  Confidence?: number;

  /**
   * <p>The time and date when the finding was created.</p>
   * @public
   */
  CreatedAt: string | undefined;

  /**
   * <p>The description of the finding.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The ID of the finding.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The partition associated with the finding.</p>
   * @public
   */
  Partition?: string;

  /**
   * <p>The Region where the finding was generated.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>Contains information about the Amazon Web Services resource associated with the activity that prompted
   *       GuardDuty to generate a finding.</p>
   * @public
   */
  Resource: Resource | undefined;

  /**
   * <p>The version of the schema used for the finding.</p>
   * @public
   */
  SchemaVersion: string | undefined;

  /**
   * <p>Contains additional information about the generated finding.</p>
   * @public
   */
  Service?: Service;

  /**
   * <p>The severity of the finding.</p>
   * @public
   */
  Severity: number | undefined;

  /**
   * <p>The title of the finding.</p>
   * @public
   */
  Title?: string;

  /**
   * <p>The type of finding.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>The time and date when the finding was last updated.</p>
   * @public
   */
  UpdatedAt: string | undefined;
}

/**
 * <p>Information about each finding type associated with the
 *       <code>groupedByFindingType</code> statistics.</p>
 * @public
 */
export interface FindingTypeStatistics {
  /**
   * <p>Name of the finding type.</p>
   * @public
   */
  FindingType?: string;

  /**
   * <p>The timestamp at which this finding type was last generated in your environment.</p>
   * @public
   */
  LastGeneratedAt?: Date;

  /**
   * <p>The total number of findings associated with generated for each distinct finding type.</p>
   * @public
   */
  TotalFindings?: number;
}

/**
 * <p>Information about each resource type associated with the
 *       <code>groupedByResource</code> statistics.</p>
 * @public
 */
export interface ResourceStatistics {
  /**
   * <p>The ID of the Amazon Web Services account.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The timestamp at which the statistics for this resource was last generated.</p>
   * @public
   */
  LastGeneratedAt?: Date;

  /**
   * <p>ID associated with each resource. The following list provides the mapping of the resource type
   *     and resource ID.</p>
   *          <p class="title">
   *             <b>Mapping of resource and resource ID</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>AccessKey - <code>resource.accessKeyDetails.accessKeyId</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Container - <code>resource.containerDetails.id</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ECSCluster - <code>resource.ecsClusterDetails.name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>EKSCluster - <code>resource.eksClusterDetails.name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Instance - <code>resource.instanceDetails.instanceId</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>KubernetesCluster - <code>resource.kubernetesDetails.kubernetesWorkloadDetails.name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Lambda - <code>resource.lambdaDetails.functionName</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>RDSDBInstance - <code>resource.rdsDbInstanceDetails.dbInstanceIdentifier</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>S3Bucket - <code>resource.s3BucketDetails.name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>S3Object - <code>resource.s3BucketDetails.name</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: string;

  /**
   * <p>The total number of findings associated with this resource.</p>
   * @public
   */
  TotalFindings?: number;
}

/**
 * <p>Information about severity level for each finding type.</p>
 * @public
 */
export interface SeverityStatistics {
  /**
   * <p>The timestamp at which a finding type for a specific severity was last generated.</p>
   * @public
   */
  LastGeneratedAt?: Date;

  /**
   * <p>The severity level associated with each finding type.</p>
   * @public
   */
  Severity?: number;

  /**
   * <p>The total number of findings associated with this severity.</p>
   * @public
   */
  TotalFindings?: number;
}

/**
 * <p>Contains information about finding statistics.</p>
 * @public
 */
export interface FindingStatistics {
  /**
   * @deprecated
   *
   * <p>Represents a list of map of severity to count statistics for a set of findings.</p>
   * @public
   */
  CountBySeverity?: Record<string, number>;

  /**
   * <p>Represents a list of map of accounts with a findings count associated with each account.</p>
   * @public
   */
  GroupedByAccount?: AccountStatistics[];

  /**
   * <p>Represents a list of map of dates with a count of total findings generated on each date per severity level.</p>
   * @public
   */
  GroupedByDate?: DateStatistics[];

  /**
   * <p>Represents a list of map of finding types with a count of total findings generated for each type. </p>
   *          <p>Based on the <code>orderBy</code>
   *     parameter, this request returns either the most occurring finding types or the least occurring finding types. If the
   *     <code>orderBy</code> parameter is <code>ASC</code>, this will represent the least occurring finding types in
   *     your account; otherwise, this will represent the most occurring finding types. The default
   *     value of <code>orderBy</code> is <code>DESC</code>.</p>
   * @public
   */
  GroupedByFindingType?: FindingTypeStatistics[];

  /**
   * <p>Represents a list of map of top resources with a count of total findings.</p>
   * @public
   */
  GroupedByResource?: ResourceStatistics[];

  /**
   * <p>Represents a list of map of total findings for each severity level.</p>
   * @public
   */
  GroupedBySeverity?: SeverityStatistics[];
}

/**
 * @public
 * @enum
 */
export const FindingStatisticType = {
  COUNT_BY_SEVERITY: "COUNT_BY_SEVERITY",
} as const;

/**
 * @public
 */
export type FindingStatisticType = (typeof FindingStatisticType)[keyof typeof FindingStatisticType];

/**
 * @public
 */
export interface GetAdministratorAccountRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface GetAdministratorAccountResponse {
  /**
   * <p>The administrator account details.</p>
   * @public
   */
  Administrator: Administrator | undefined;
}

/**
 * @public
 */
export interface GetCoverageStatisticsRequest {
  /**
   * <p>The unique ID of the GuardDuty detector.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents the criteria used to filter the coverage statistics.</p>
   * @public
   */
  FilterCriteria?: CoverageFilterCriteria;

  /**
   * <p>Represents the statistics type used to aggregate the coverage details.</p>
   * @public
   */
  StatisticsType: CoverageStatisticsType[] | undefined;
}

/**
 * @public
 */
export interface GetCoverageStatisticsResponse {
  /**
   * <p>Represents the count aggregated by the <code>statusCode</code> and
   *         <code>resourceType</code>.</p>
   * @public
   */
  CoverageStatistics?: CoverageStatistics;
}

/**
 * @public
 */
export interface GetDetectorRequest {
  /**
   * <p>The unique ID of the detector that you want to get.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface GetDetectorResponse {
  /**
   * <p>The timestamp of when the detector was created.</p>
   * @public
   */
  CreatedAt?: string;

  /**
   * <p>The publishing frequency of the finding.</p>
   * @public
   */
  FindingPublishingFrequency?: FindingPublishingFrequency;

  /**
   * <p>The GuardDuty service role.</p>
   * @public
   */
  ServiceRole: string | undefined;

  /**
   * <p>The detector status.</p>
   * @public
   */
  Status: DetectorStatus | undefined;

  /**
   * <p>The last-updated timestamp for the detector.</p>
   * @public
   */
  UpdatedAt?: string;

  /**
   * @deprecated
   *
   * <p>Describes which data sources are enabled for the detector.</p>
   * @public
   */
  DataSources?: DataSourceConfigurationsResult;

  /**
   * <p>The tags of the detector resource.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>Describes the features that have been enabled for the detector.</p>
   * @public
   */
  Features?: DetectorFeatureConfigurationResult[];
}

/**
 * @public
 */
export interface GetFilterRequest {
  /**
   * <p>The unique ID of the detector that is associated with this filter.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter you want to get.</p>
   * @public
   */
  FilterName: string | undefined;
}

/**
 * @public
 */
export interface GetFilterResponse {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the filter.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   * @public
   */
  Action: FilterAction | undefined;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   * @public
   */
  Rank?: number;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   * @public
   */
  FindingCriteria: FindingCriteria | undefined;

  /**
   * <p>The tags of the filter resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       retrieve.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings that you want to retrieve.</p>
   * @public
   */
  FindingIds: string[] | undefined;

  /**
   * <p>Represents the criteria used for sorting findings.</p>
   * @public
   */
  SortCriteria?: SortCriteria;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * <p>A list of findings.</p>
   * @public
   */
  Findings: Finding[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GroupByType = {
  ACCOUNT: "ACCOUNT",
  DATE: "DATE",
  FINDING_TYPE: "FINDING_TYPE",
  RESOURCE: "RESOURCE",
  SEVERITY: "SEVERITY",
} as const;

/**
 * @public
 */
export type GroupByType = (typeof GroupByType)[keyof typeof GroupByType];

/**
 * @public
 */
export interface GetFindingsStatisticsRequest {
  /**
   * <p>The ID of the detector whose findings statistics you
   *       want to retrieve.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * @deprecated
   *
   * <p>The types of finding statistics to retrieve.</p>
   * @public
   */
  FindingStatisticTypes?: FindingStatisticType[];

  /**
   * <p>Represents the criteria that is used for querying findings.</p>
   * @public
   */
  FindingCriteria?: FindingCriteria;

  /**
   * <p>Displays the findings statistics grouped by one of the listed valid values.</p>
   * @public
   */
  GroupBy?: GroupByType;

  /**
   * <p>Displays the sorted findings in the requested order. The default
   *       value of <code>orderBy</code> is <code>DESC</code>.</p>
   *          <p>You can use this parameter only with the <code>groupBy</code> parameter.</p>
   * @public
   */
  OrderBy?: OrderBy;

  /**
   * <p>The maximum number of results to be returned in the response. The default value is 25.</p>
   *          <p>You can use this parameter only with the <code>groupBy</code> parameter.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetFindingsStatisticsResponse {
  /**
   * <p>The finding statistics object.</p>
   * @public
   */
  FindingStatistics: FindingStatistics | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   *          <p>This parameter is currently not supported.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetInvitationsCountRequest {}

/**
 * @public
 */
export interface GetInvitationsCountResponse {
  /**
   * <p>The number of received invitations.</p>
   * @public
   */
  InvitationsCount?: number;
}

/**
 * @public
 */
export interface GetIPSetRequest {
  /**
   * <p>The unique ID of the detector that is associated with the IPSet.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the IPSet to retrieve.</p>
   * @public
   */
  IpSetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IpSetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DEACTIVATING: "DEACTIVATING",
  DELETED: "DELETED",
  DELETE_PENDING: "DELETE_PENDING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type IpSetStatus = (typeof IpSetStatus)[keyof typeof IpSetStatus];

/**
 * @public
 */
export interface GetIPSetResponse {
  /**
   * <p>The user-friendly name for the IPSet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the IPSet.</p>
   * @public
   */
  Format: IpSetFormat | undefined;

  /**
   * <p>The URI of the file that contains the IPSet.</p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>The status of IPSet file that was uploaded.</p>
   * @public
   */
  Status: IpSetStatus | undefined;

  /**
   * <p>The tags of the IPSet resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetMalwareProtectionPlanRequest {
  /**
   * <p>A unique identifier associated with Malware Protection plan resource.</p>
   * @public
   */
  MalwareProtectionPlanId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MalwareProtectionPlanStatus = {
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type MalwareProtectionPlanStatus =
  (typeof MalwareProtectionPlanStatus)[keyof typeof MalwareProtectionPlanStatus];

/**
 * <p>Information about the issue code and message associated to the status of
 *       your Malware Protection plan.</p>
 * @public
 */
export interface MalwareProtectionPlanStatusReason {
  /**
   * <p>Issue code.</p>
   * @public
   */
  Code?: string;

  /**
   * <p>Issue message that specifies the reason. For information
   *       about potential troubleshooting steps, see
   *       <a href="https://docs.aws.amazon.com/guardduty/latest/ug/troubleshoot-s3-malware-protection-status-errors.html">Troubleshooting Malware Protection for S3 status issues</a> in the
   *       <i>GuardDuty User Guide</i>.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 */
export interface GetMalwareProtectionPlanResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the protected resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role that includes the permissions to scan and
   *       add tags to the associated protected resource.</p>
   * @public
   */
  Role?: string;

  /**
   * <p>Information about the protected resource that is associated with the created
   *       Malware Protection plan. Presently, <code>S3Bucket</code> is the only supported
   *       protected resource.</p>
   * @public
   */
  ProtectedResource?: CreateProtectedResource;

  /**
   * <p>Information about whether the tags will be added to the S3 object after scanning.</p>
   * @public
   */
  Actions?: MalwareProtectionPlanActions;

  /**
   * <p>The timestamp when the Malware Protection plan resource was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>Malware Protection plan status.</p>
   * @public
   */
  Status?: MalwareProtectionPlanStatus;

  /**
   * <p>Information about the issue code and message associated to the status of
   *     your Malware Protection plan.</p>
   * @public
   */
  StatusReasons?: MalwareProtectionPlanStatusReason[];

  /**
   * <p>Tags added to the Malware Protection plan resource.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetMalwareScanSettingsRequest {
  /**
   * <p>The unique ID of the detector that is associated with this scan.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ScanCriterionKey = {
  EC2_INSTANCE_TAG: "EC2_INSTANCE_TAG",
} as const;

/**
 * @public
 */
export type ScanCriterionKey = (typeof ScanCriterionKey)[keyof typeof ScanCriterionKey];

/**
 * <p>Represents the <code>key:value</code> pair to be matched against given resource property.</p>
 * @public
 */
export interface ScanConditionPair {
  /**
   * <p>Represents the <b>key</b> in the map condition.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Represents optional <b>value</b> in the map
   *       condition. If not specified, only the <b>key</b> will be
   *       matched.</p>
   * @public
   */
  Value?: string;
}

/**
 * <p>Contains information about the condition.</p>
 * @public
 */
export interface ScanCondition {
  /**
   * <p>Represents an <i>mapEqual</i>
   *             <b></b> condition to be applied
   *       to a single field when triggering for malware scan.</p>
   * @public
   */
  MapEquals: ScanConditionPair[] | undefined;
}

/**
 * <p>Contains information about criteria used to filter resources before triggering malware
 *       scan.</p>
 * @public
 */
export interface ScanResourceCriteria {
  /**
   * <p>Represents condition that when matched will allow a malware scan for a certain
   *       resource.</p>
   * @public
   */
  Include?: Partial<Record<ScanCriterionKey, ScanCondition>>;

  /**
   * <p>Represents condition that when matched will prevent a malware scan for a certain
   *       resource.</p>
   * @public
   */
  Exclude?: Partial<Record<ScanCriterionKey, ScanCondition>>;
}

/**
 * @public
 */
export interface GetMalwareScanSettingsResponse {
  /**
   * <p>Represents the criteria to be used in the filter for scanning resources.</p>
   * @public
   */
  ScanResourceCriteria?: ScanResourceCriteria;

  /**
   * <p>An enum value representing possible snapshot preservation settings.</p>
   * @public
   */
  EbsSnapshotPreservation?: EbsSnapshotPreservation;
}

/**
 * @public
 */
export interface GetMasterAccountRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * <p>Contains information about the administrator account and invitation.</p>
 * @public
 */
export interface Master {
  /**
   * <p>The ID of the account used as the administrator account.</p>
   * @public
   */
  AccountId?: string;

  /**
   * <p>The value used to validate the administrator account to the member account.</p>
   * @public
   */
  InvitationId?: string;

  /**
   * <p>The status of the relationship between the administrator and member accounts.</p>
   * @public
   */
  RelationshipStatus?: string;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   * @public
   */
  InvitedAt?: string;
}

/**
 * @public
 */
export interface GetMasterAccountResponse {
  /**
   * <p>The administrator account details.</p>
   * @public
   */
  Master: Master | undefined;
}

/**
 * @public
 */
export interface GetMemberDetectorsRequest {
  /**
   * <p>The detector ID for the administrator account.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of member account IDs.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>Information about the additional configuration for the member account.</p>
 * @public
 */
export interface MemberAdditionalConfigurationResult {
  /**
   * <p>Indicates the name of the additional configuration that is set for the member
   *       account.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration;

  /**
   * <p>Indicates the status of the additional configuration that is set for the member
   *       account.</p>
   * @public
   */
  Status?: FeatureStatus;

  /**
   * <p>The timestamp at which the additional configuration was set for the member account. This
   *       is in UTC format.</p>
   * @public
   */
  UpdatedAt?: Date;
}

/**
 * <p>Contains information about the features for the member account.</p>
 * @public
 */
export interface MemberFeaturesConfigurationResult {
  /**
   * <p>Indicates the name of the feature that is enabled for the detector.</p>
   * @public
   */
  Name?: OrgFeature;

  /**
   * <p>Indicates the status of the feature that is enabled for the detector.</p>
   * @public
   */
  Status?: FeatureStatus;

  /**
   * <p>The timestamp at which the feature object was updated.</p>
   * @public
   */
  UpdatedAt?: Date;

  /**
   * <p>Indicates the additional configuration of the feature that is configured for the member
   *       account.</p>
   * @public
   */
  AdditionalConfiguration?: MemberAdditionalConfigurationResult[];
}

/**
 * <p>Contains information on which data sources are enabled for a member account.</p>
 * @public
 */
export interface MemberDataSourceConfiguration {
  /**
   * <p>The account ID for the member account.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * @deprecated
   *
   * <p>Contains information on the status of data sources for the account.</p>
   * @public
   */
  DataSources?: DataSourceConfigurationsResult;

  /**
   * <p>Contains information about the status of the features for the member account.</p>
   * @public
   */
  Features?: MemberFeaturesConfigurationResult[];
}

/**
 * @public
 */
export interface GetMemberDetectorsResponse {
  /**
   * <p>An object that describes which data sources are enabled for a member account.</p>
   * @public
   */
  MemberDataSourceConfigurations: MemberDataSourceConfiguration[] | undefined;

  /**
   * <p>A list of member account IDs that were unable to be processed along with an explanation
   *       for why they were not processed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface GetMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to
   *       retrieve.</p>
   *          <p>To find the <code>detectorId</code> in the current Region, see the
   * Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts that you want to describe.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>Contains information about the member account. </p>
 * @public
 */
export interface Member {
  /**
   * <p>The ID of the member account.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The detector ID of the member account.</p>
   * @public
   */
  DetectorId?: string;

  /**
   * <p>The administrator account ID.</p>
   * @public
   */
  MasterId: string | undefined;

  /**
   * <p>The email address of the member account.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The status of the relationship between the member and the administrator.</p>
   * @public
   */
  RelationshipStatus: string | undefined;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   * @public
   */
  InvitedAt?: string;

  /**
   * <p>The last-updated timestamp of the member.</p>
   * @public
   */
  UpdatedAt: string | undefined;

  /**
   * <p>The administrator account ID.</p>
   * @public
   */
  AdministratorId?: string;
}

/**
 * @public
 */
export interface GetMembersResponse {
  /**
   * <p>A list of members.</p>
   * @public
   */
  Members: Member[] | undefined;

  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * <p>Information about the coverage
 *       statistic for the additional
 *     configuration of the feature.</p>
 * @public
 */
export interface OrganizationFeatureStatisticsAdditionalConfiguration {
  /**
   * <p>Name of the additional configuration within a feature.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration;

  /**
   * <p>Total number of accounts that have enabled the additional
   *       configuration.</p>
   * @public
   */
  EnabledAccountsCount?: number;
}

/**
 * <p>Information about the number of accounts
 *       that have enabled a specific feature.</p>
 * @public
 */
export interface OrganizationFeatureStatistics {
  /**
   * <p>Name of the feature.</p>
   * @public
   */
  Name?: OrgFeature;

  /**
   * <p>Total number of accounts that have enabled a specific
   *       feature.</p>
   * @public
   */
  EnabledAccountsCount?: number;

  /**
   * <p>Name of the additional configuration.</p>
   * @public
   */
  AdditionalConfiguration?: OrganizationFeatureStatisticsAdditionalConfiguration[];
}

/**
 * <p>Information about the coverage statistics of the
 *       features for the entire
 *       Amazon Web Services organization.</p>
 *          <p>When you create a new Amazon Web Services organization, it might
 *       take up to 24 hours to
 *       generate the statistics summary for this organization.</p>
 * @public
 */
export interface OrganizationStatistics {
  /**
   * <p>Total number of accounts in your Amazon Web Services organization.</p>
   * @public
   */
  TotalAccountsCount?: number;

  /**
   * <p>Total number of accounts in your Amazon Web Services organization
   *       that are associated with GuardDuty.</p>
   * @public
   */
  MemberAccountsCount?: number;

  /**
   * <p>Total number of active accounts in your Amazon Web Services
   *       organization that are associated with GuardDuty.</p>
   * @public
   */
  ActiveAccountsCount?: number;

  /**
   * <p>Total number of accounts that have enabled GuardDuty.</p>
   * @public
   */
  EnabledAccountsCount?: number;

  /**
   * <p>Retrieves the coverage
   *       statistics for each feature.</p>
   * @public
   */
  CountByFeature?: OrganizationFeatureStatistics[];
}

/**
 * @internal
 */
export const AccountDetailFilterSensitiveLog = (obj: AccountDetail): any => ({
  ...obj,
  ...(obj.Email && { Email: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RemoteIpDetailsFilterSensitiveLog = (obj: RemoteIpDetails): any => ({
  ...obj,
  ...(obj.IpAddressV4 && { IpAddressV4: SENSITIVE_STRING }),
  ...(obj.IpAddressV6 && { IpAddressV6: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AwsApiCallActionFilterSensitiveLog = (obj: AwsApiCallAction): any => ({
  ...obj,
  ...(obj.RemoteIpDetails && { RemoteIpDetails: RemoteIpDetailsFilterSensitiveLog(obj.RemoteIpDetails) }),
});

/**
 * @internal
 */
export const KubernetesApiCallActionFilterSensitiveLog = (obj: KubernetesApiCallAction): any => ({
  ...obj,
  ...(obj.RemoteIpDetails && { RemoteIpDetails: RemoteIpDetailsFilterSensitiveLog(obj.RemoteIpDetails) }),
});

/**
 * @internal
 */
export const LocalIpDetailsFilterSensitiveLog = (obj: LocalIpDetails): any => ({
  ...obj,
  ...(obj.IpAddressV4 && { IpAddressV4: SENSITIVE_STRING }),
  ...(obj.IpAddressV6 && { IpAddressV6: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NetworkConnectionActionFilterSensitiveLog = (obj: NetworkConnectionAction): any => ({
  ...obj,
  ...(obj.LocalIpDetails && { LocalIpDetails: LocalIpDetailsFilterSensitiveLog(obj.LocalIpDetails) }),
  ...(obj.RemoteIpDetails && { RemoteIpDetails: RemoteIpDetailsFilterSensitiveLog(obj.RemoteIpDetails) }),
});

/**
 * @internal
 */
export const PortProbeDetailFilterSensitiveLog = (obj: PortProbeDetail): any => ({
  ...obj,
  ...(obj.LocalIpDetails && { LocalIpDetails: LocalIpDetailsFilterSensitiveLog(obj.LocalIpDetails) }),
  ...(obj.RemoteIpDetails && { RemoteIpDetails: RemoteIpDetailsFilterSensitiveLog(obj.RemoteIpDetails) }),
});

/**
 * @internal
 */
export const PortProbeActionFilterSensitiveLog = (obj: PortProbeAction): any => ({
  ...obj,
  ...(obj.PortProbeDetails && {
    PortProbeDetails: obj.PortProbeDetails.map((item) => PortProbeDetailFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RdsLoginAttemptActionFilterSensitiveLog = (obj: RdsLoginAttemptAction): any => ({
  ...obj,
  ...(obj.RemoteIpDetails && { RemoteIpDetails: RemoteIpDetailsFilterSensitiveLog(obj.RemoteIpDetails) }),
});

/**
 * @internal
 */
export const ActionFilterSensitiveLog = (obj: Action): any => ({
  ...obj,
  ...(obj.AwsApiCallAction && { AwsApiCallAction: AwsApiCallActionFilterSensitiveLog(obj.AwsApiCallAction) }),
  ...(obj.NetworkConnectionAction && {
    NetworkConnectionAction: NetworkConnectionActionFilterSensitiveLog(obj.NetworkConnectionAction),
  }),
  ...(obj.PortProbeAction && { PortProbeAction: PortProbeActionFilterSensitiveLog(obj.PortProbeAction) }),
  ...(obj.KubernetesApiCallAction && {
    KubernetesApiCallAction: KubernetesApiCallActionFilterSensitiveLog(obj.KubernetesApiCallAction),
  }),
  ...(obj.RdsLoginAttemptAction && {
    RdsLoginAttemptAction: RdsLoginAttemptActionFilterSensitiveLog(obj.RdsLoginAttemptAction),
  }),
});

/**
 * @internal
 */
export const CreateMembersRequestFilterSensitiveLog = (obj: CreateMembersRequest): any => ({
  ...obj,
  ...(obj.AccountDetails && {
    AccountDetails: obj.AccountDetails.map((item) => AccountDetailFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const PrivateIpAddressDetailsFilterSensitiveLog = (obj: PrivateIpAddressDetails): any => ({
  ...obj,
  ...(obj.PrivateIpAddress && { PrivateIpAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NetworkInterfaceFilterSensitiveLog = (obj: NetworkInterface): any => ({
  ...obj,
  ...(obj.PrivateIpAddress && { PrivateIpAddress: SENSITIVE_STRING }),
  ...(obj.PrivateIpAddresses && {
    PrivateIpAddresses: obj.PrivateIpAddresses.map((item) => PrivateIpAddressDetailsFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const InstanceDetailsFilterSensitiveLog = (obj: InstanceDetails): any => ({
  ...obj,
  ...(obj.NetworkInterfaces && {
    NetworkInterfaces: obj.NetworkInterfaces.map((item) => NetworkInterfaceFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
  ...(obj.InstanceDetails && { InstanceDetails: InstanceDetailsFilterSensitiveLog(obj.InstanceDetails) }),
});

/**
 * @internal
 */
export const ServiceFilterSensitiveLog = (obj: Service): any => ({
  ...obj,
  ...(obj.Action && { Action: ActionFilterSensitiveLog(obj.Action) }),
});

/**
 * @internal
 */
export const FindingFilterSensitiveLog = (obj: Finding): any => ({
  ...obj,
  ...(obj.Service && { Service: ServiceFilterSensitiveLog(obj.Service) }),
});

/**
 * @internal
 */
export const GetFindingsResponseFilterSensitiveLog = (obj: GetFindingsResponse): any => ({
  ...obj,
  ...(obj.Findings && { Findings: obj.Findings.map((item) => FindingFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const MemberFilterSensitiveLog = (obj: Member): any => ({
  ...obj,
  ...(obj.Email && { Email: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetMembersResponseFilterSensitiveLog = (obj: GetMembersResponse): any => ({
  ...obj,
  ...(obj.Members && { Members: obj.Members.map((item) => MemberFilterSensitiveLog(item)) }),
});

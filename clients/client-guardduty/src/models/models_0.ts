// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GuardDutyServiceException as __BaseException } from "./GuardDutyServiceException";

/**
 * @public
 */
export interface AcceptAdministratorInvitationRequest {
  /**
   * @public
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The account ID of the GuardDuty administrator account whose invitation you're
   *       accepting.</p>
   */
  AdministratorId: string | undefined;

  /**
   * @public
   * <p>The value that is used to validate the administrator account to the member
   *       account.</p>
   */
  InvitationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptAdministratorInvitationResponse {}

/**
 * @public
 * <p>A bad request exception object.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The error type.</p>
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
 * @public
 * <p>An internal server error exception object.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The error type.</p>
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
   * @public
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The account ID of the GuardDuty administrator account whose invitation you're
   *       accepting.</p>
   */
  MasterId: string | undefined;

  /**
   * @public
   * <p>The value that is used to validate the administrator account to the member
   *       account.</p>
   */
  InvitationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptInvitationResponse {}

/**
 * @public
 * <p>Contains information on the current access control policies for the bucket.</p>
 */
export interface AccessControlList {
  /**
   * @public
   * <p>A value that indicates whether public read access for the bucket is enabled through an
   *       Access Control List (ACL).</p>
   */
  AllowsPublicReadAccess?: boolean;

  /**
   * @public
   * <p>A value that indicates whether public write access for the bucket is enabled through an
   *       Access Control List (ACL).</p>
   */
  AllowsPublicWriteAccess?: boolean;
}

/**
 * @public
 * <p>An access denied exception object.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The error type.</p>
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
 * @public
 * <p>Contains information about the access keys.</p>
 */
export interface AccessKeyDetails {
  /**
   * @public
   * <p>The access key ID of the user.</p>
   */
  AccessKeyId?: string;

  /**
   * @public
   * <p>The principal ID of the user.</p>
   */
  PrincipalId?: string;

  /**
   * @public
   * <p>The name of the user.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>The type of the user.</p>
   */
  UserType?: string;
}

/**
 * @public
 * <p>Contains information about the account.</p>
 */
export interface AccountDetail {
  /**
   * @public
   * <p>The member account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The email address of the member account.</p>
   */
  Email: string | undefined;
}

/**
 * @public
 * <p>Contains information about which data sources are enabled for the GuardDuty member
 *       account.</p>
 */
export interface DataSourceFreeTrial {
  /**
   * @public
   * <p>A value that specifies the number of days left to use each enabled data source.</p>
   */
  FreeTrialDaysRemaining?: number;
}

/**
 * @public
 * <p>Provides details about the Kubernetes resources when it is enabled as a data
 *       source.</p>
 */
export interface KubernetesDataSourceFreeTrial {
  /**
   * @public
   * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
   */
  AuditLogs?: DataSourceFreeTrial;
}

/**
 * @public
 * <p>Provides details about Malware Protection when it is enabled as a data source.</p>
 */
export interface MalwareProtectionDataSourceFreeTrial {
  /**
   * @public
   * <p>Describes whether Malware Protection for EC2 instances with findings is enabled as a data
   *       source.</p>
   */
  ScanEc2InstanceWithFindings?: DataSourceFreeTrial;
}

/**
 * @public
 * <p>Contains information about which data sources are enabled for the GuardDuty member
 *       account.</p>
 */
export interface DataSourcesFreeTrial {
  /**
   * @public
   * <p>Describes whether any Amazon Web Services CloudTrail management event logs are enabled as data sources.</p>
   */
  CloudTrail?: DataSourceFreeTrial;

  /**
   * @public
   * <p>Describes whether any DNS logs are enabled as data sources.</p>
   */
  DnsLogs?: DataSourceFreeTrial;

  /**
   * @public
   * <p>Describes whether any VPC Flow logs are enabled as data sources.</p>
   */
  FlowLogs?: DataSourceFreeTrial;

  /**
   * @public
   * <p>Describes whether any S3 data event logs are enabled as data sources.</p>
   */
  S3Logs?: DataSourceFreeTrial;

  /**
   * @public
   * <p>Describes whether any Kubernetes logs are enabled as data sources.</p>
   */
  Kubernetes?: KubernetesDataSourceFreeTrial;

  /**
   * @public
   * <p>Describes whether Malware Protection is enabled as a data source.</p>
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
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
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
 * @public
 * <p>Contains information about the free trial period for a feature.</p>
 */
export interface FreeTrialFeatureConfigurationResult {
  /**
   * @public
   * <p>The name of the feature for which the free trial is configured.</p>
   */
  Name?: FreeTrialFeatureResult;

  /**
   * @public
   * <p>The number of the remaining free trial days for the feature.</p>
   */
  FreeTrialDaysRemaining?: number;
}

/**
 * @public
 * <p>Provides details of the GuardDuty member account that uses a free trial service.</p>
 */
export interface AccountFreeTrialInfo {
  /**
   * @public
   * <p>The account identifier of the GuardDuty member account.</p>
   */
  AccountId?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>Describes the data source enabled for the GuardDuty member account.</p>
   */
  DataSources?: DataSourcesFreeTrial;

  /**
   * @public
   * <p>A list of features enabled for the GuardDuty account.</p>
   */
  Features?: FreeTrialFeatureConfigurationResult[];
}

/**
 * @public
 * <p>Contains information on how the bucker owner's S3 Block Public Access settings are being
 *       applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public
 *         Access</a> for more information. </p>
 */
export interface BlockPublicAccess {
  /**
   * @public
   * <p>Indicates if S3 Block Public Access is set to <code>IgnorePublicAcls</code>.</p>
   */
  IgnorePublicAcls?: boolean;

  /**
   * @public
   * <p>Indicates if S3 Block Public Access is set to <code>RestrictPublicBuckets</code>.</p>
   */
  RestrictPublicBuckets?: boolean;

  /**
   * @public
   * <p>Indicates if S3 Block Public Access is set to <code>BlockPublicAcls</code>.</p>
   */
  BlockPublicAcls?: boolean;

  /**
   * @public
   * <p>Indicates if S3 Block Public Access is set to <code>BlockPublicPolicy</code>.</p>
   */
  BlockPublicPolicy?: boolean;
}

/**
 * @public
 * <p>Contains information about the account level permissions on the S3 bucket.</p>
 */
export interface AccountLevelPermissions {
  /**
   * @public
   * <p>Describes the S3 Block Public Access settings of the bucket's parent account.</p>
   */
  BlockPublicAccess?: BlockPublicAccess;
}

/**
 * @public
 * <p>Contains information about the domain.</p>
 */
export interface DomainDetails {
  /**
   * @public
   * <p>The domain information for the Amazon Web Services API call.</p>
   */
  Domain?: string;
}

/**
 * @public
 * <p>Contains details about the remote Amazon Web Services account that made the API call.</p>
 */
export interface RemoteAccountDetails {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the remote API caller.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Details on whether the Amazon Web Services account of the remote API caller is related to your GuardDuty
   *       environment. If this value is <code>True</code> the API caller is affiliated to your account
   *       in some way. If it is <code>False</code> the API caller is from outside your
   *       environment.</p>
   */
  Affiliated?: boolean;
}

/**
 * @public
 * <p>Contains information about the city associated with the IP address.</p>
 */
export interface City {
  /**
   * @public
   * <p>The city name of the remote IP address.</p>
   */
  CityName?: string;
}

/**
 * @public
 * <p>Contains information about the country where the remote IP address is located.</p>
 */
export interface Country {
  /**
   * @public
   * <p>The country code of the remote IP address.</p>
   */
  CountryCode?: string;

  /**
   * @public
   * <p>The country name of the remote IP address.</p>
   */
  CountryName?: string;
}

/**
 * @public
 * <p>Contains information about the location of the remote IP address.</p>
 */
export interface GeoLocation {
  /**
   * @public
   * <p>The latitude information of the remote IP address.</p>
   */
  Lat?: number;

  /**
   * @public
   * <p>The longitude information of the remote IP address.</p>
   */
  Lon?: number;
}

/**
 * @public
 * <p>Contains information about the ISP organization of the remote IP address.</p>
 */
export interface Organization {
  /**
   * @public
   * <p>The Autonomous System Number (ASN) of the internet provider of the remote IP
   *       address.</p>
   */
  Asn?: string;

  /**
   * @public
   * <p>The organization that registered this ASN.</p>
   */
  AsnOrg?: string;

  /**
   * @public
   * <p>The ISP information for the internet provider.</p>
   */
  Isp?: string;

  /**
   * @public
   * <p>The name of the internet provider.</p>
   */
  Org?: string;
}

/**
 * @public
 * <p>Contains information about the remote IP address of the connection.</p>
 */
export interface RemoteIpDetails {
  /**
   * @public
   * <p>The city information of the remote IP address.</p>
   */
  City?: City;

  /**
   * @public
   * <p>The country code of the remote IP address.</p>
   */
  Country?: Country;

  /**
   * @public
   * <p>The location information of the remote IP address.</p>
   */
  GeoLocation?: GeoLocation;

  /**
   * @public
   * <p>The IPv4 remote address of the connection.</p>
   */
  IpAddressV4?: string;

  /**
   * @public
   * <p>The ISP organization information of the remote IP address.</p>
   */
  Organization?: Organization;
}

/**
 * @public
 * <p>Contains information about the API action.</p>
 */
export interface AwsApiCallAction {
  /**
   * @public
   * <p>The Amazon Web Services API name.</p>
   */
  Api?: string;

  /**
   * @public
   * <p>The Amazon Web Services API caller type.</p>
   */
  CallerType?: string;

  /**
   * @public
   * <p>The domain information for the Amazon Web Services API call.</p>
   */
  DomainDetails?: DomainDetails;

  /**
   * @public
   * <p>The error code of the failed Amazon Web Services API action.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The agent through which the API request was made.</p>
   */
  UserAgent?: string;

  /**
   * @public
   * <p>The remote IP information of the connection that initiated the Amazon Web Services API call.</p>
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * @public
   * <p>The Amazon Web Services service name whose API was invoked.</p>
   */
  ServiceName?: string;

  /**
   * @public
   * <p>The details of the Amazon Web Services account that made the API call. This field appears if the call
   *       was made from outside your account.</p>
   */
  RemoteAccountDetails?: RemoteAccountDetails;

  /**
   * @public
   * <p>The details of the Amazon Web Services account that made the API call. This field identifies the
   *       resources that were affected by this API call.</p>
   */
  AffectedResources?: Record<string, string>;
}

/**
 * @public
 * <p>Contains information about the DNS_REQUEST action described in this finding.</p>
 */
export interface DnsRequestAction {
  /**
   * @public
   * <p>The domain information for the DNS query.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The network connection protocol observed in the activity that prompted GuardDuty to
   *       generate the finding.</p>
   */
  Protocol?: string;

  /**
   * @public
   * <p>Indicates whether the targeted port is blocked.</p>
   */
  Blocked?: boolean;

  /**
   * @public
   * <p>The second and top level domain involved in the
   *       activity that prompted GuardDuty to generate this finding.</p>
   */
  DomainWithSuffix?: string;
}

/**
 * @public
 * <p>Information about the Kubernetes API call action described in this finding.</p>
 */
export interface KubernetesApiCallAction {
  /**
   * @public
   * <p>The Kubernetes API request URI.</p>
   */
  RequestUri?: string;

  /**
   * @public
   * <p>The Kubernetes API request HTTP verb.</p>
   */
  Verb?: string;

  /**
   * @public
   * <p>The IP of the Kubernetes API caller and the IPs of any proxies or load balancers between
   *       the caller and the API endpoint.</p>
   */
  SourceIps?: string[];

  /**
   * @public
   * <p>The user agent of the caller of the Kubernetes API.</p>
   */
  UserAgent?: string;

  /**
   * @public
   * <p>Contains information about the remote IP address of the connection.</p>
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * @public
   * <p>The resulting HTTP response code of the Kubernetes API call action.</p>
   */
  StatusCode?: number;

  /**
   * @public
   * <p>Parameters related to the Kubernetes API call action.</p>
   */
  Parameters?: string;
}

/**
 * @public
 * <p>Contains information about the local IP address of the connection.</p>
 */
export interface LocalIpDetails {
  /**
   * @public
   * <p>The IPv4 local address of the connection.</p>
   */
  IpAddressV4?: string;
}

/**
 * @public
 * <p>Contains information about the port for the local connection.</p>
 */
export interface LocalPortDetails {
  /**
   * @public
   * <p>The port number of the local connection.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The port name of the local connection.</p>
   */
  PortName?: string;
}

/**
 * @public
 * <p>Contains information about the remote port.</p>
 */
export interface RemotePortDetails {
  /**
   * @public
   * <p>The port number of the remote connection.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The port name of the remote connection.</p>
   */
  PortName?: string;
}

/**
 * @public
 * <p>Contains information about the NETWORK_CONNECTION action described in the finding.</p>
 */
export interface NetworkConnectionAction {
  /**
   * @public
   * <p>Indicates whether EC2 blocked the network connection to your instance.</p>
   */
  Blocked?: boolean;

  /**
   * @public
   * <p>The network connection direction.</p>
   */
  ConnectionDirection?: string;

  /**
   * @public
   * <p>The local port information of the connection.</p>
   */
  LocalPortDetails?: LocalPortDetails;

  /**
   * @public
   * <p>The network connection protocol.</p>
   */
  Protocol?: string;

  /**
   * @public
   * <p>The local IP information of the connection.</p>
   */
  LocalIpDetails?: LocalIpDetails;

  /**
   * @public
   * <p>The remote IP information of the connection.</p>
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * @public
   * <p>The remote port information of the connection.</p>
   */
  RemotePortDetails?: RemotePortDetails;
}

/**
 * @public
 * <p>Contains information about the port probe details.</p>
 */
export interface PortProbeDetail {
  /**
   * @public
   * <p>The local port information of the connection.</p>
   */
  LocalPortDetails?: LocalPortDetails;

  /**
   * @public
   * <p>The local IP information of the connection.</p>
   */
  LocalIpDetails?: LocalIpDetails;

  /**
   * @public
   * <p>The remote IP information of the connection.</p>
   */
  RemoteIpDetails?: RemoteIpDetails;
}

/**
 * @public
 * <p>Contains information about the PORT_PROBE action described in the finding.</p>
 */
export interface PortProbeAction {
  /**
   * @public
   * <p>Indicates whether EC2 blocked the port probe to the instance, such as with an ACL.</p>
   */
  Blocked?: boolean;

  /**
   * @public
   * <p>A list of objects related to port probe details.</p>
   */
  PortProbeDetails?: PortProbeDetail[];
}

/**
 * @public
 * <p>Information about the login attempts.</p>
 */
export interface LoginAttribute {
  /**
   * @public
   * <p>Indicates the user name which attempted to log in.</p>
   */
  User?: string;

  /**
   * @public
   * <p>Indicates the application name used to attempt log in.</p>
   */
  Application?: string;

  /**
   * @public
   * <p>Represents the sum of failed (unsuccessful) login attempts made to establish a connection
   *       to the database instance.</p>
   */
  FailedLoginAttempts?: number;

  /**
   * @public
   * <p>Represents the sum of successful connections (a correct combination of login attributes)
   *       made to the database instance by the actor.</p>
   */
  SuccessfulLoginAttempts?: number;
}

/**
 * @public
 * <p>Indicates that a login attempt was made to the potentially compromised database from a
 *       remote IP address.</p>
 */
export interface RdsLoginAttemptAction {
  /**
   * @public
   * <p>Contains information about the remote IP address of the connection.</p>
   */
  RemoteIpDetails?: RemoteIpDetails;

  /**
   * @public
   * <p>Indicates the login attributes used in the login attempt.</p>
   */
  LoginAttributes?: LoginAttribute[];
}

/**
 * @public
 * <p>Contains information about actions.</p>
 */
export interface Action {
  /**
   * @public
   * <p>The GuardDuty finding activity type.</p>
   */
  ActionType?: string;

  /**
   * @public
   * <p>Information about the AWS_API_CALL action described in this finding.</p>
   */
  AwsApiCallAction?: AwsApiCallAction;

  /**
   * @public
   * <p>Information about the DNS_REQUEST action described in this finding.</p>
   */
  DnsRequestAction?: DnsRequestAction;

  /**
   * @public
   * <p>Information about the NETWORK_CONNECTION action described in this finding.</p>
   */
  NetworkConnectionAction?: NetworkConnectionAction;

  /**
   * @public
   * <p>Information about the PORT_PROBE action described in this finding.</p>
   */
  PortProbeAction?: PortProbeAction;

  /**
   * @public
   * <p>Information about the Kubernetes API call action described in this finding.</p>
   */
  KubernetesApiCallAction?: KubernetesApiCallAction;

  /**
   * @public
   * <p>Information about <code>RDS_LOGIN_ATTEMPT</code> action described in this finding.</p>
   */
  RdsLoginAttemptAction?: RdsLoginAttemptAction;
}

/**
 * @public
 * <p>Information about the installed EKS add-on (GuardDuty security agent).</p>
 */
export interface AddonDetails {
  /**
   * @public
   * <p>Version of the installed EKS add-on.</p>
   */
  AddonVersion?: string;

  /**
   * @public
   * <p>Status of the installed EKS add-on.</p>
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
 * @public
 * <p>The account within the organization specified as the GuardDuty delegated
 *       administrator.</p>
 */
export interface AdminAccount {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the account.</p>
   */
  AdminAccountId?: string;

  /**
   * @public
   * <p>Indicates whether the account is enabled as the delegated administrator.</p>
   */
  AdminStatus?: AdminStatus;
}

/**
 * @public
 * <p>Contains information about the administrator account and invitation.</p>
 */
export interface Administrator {
  /**
   * @public
   * <p>The ID of the account used as the administrator account.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The value that is used to validate the administrator account to the member
   *       account.</p>
   */
  InvitationId?: string;

  /**
   * @public
   * <p>The status of the relationship between the administrator and member accounts.</p>
   */
  RelationshipStatus?: string;

  /**
   * @public
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;
}

/**
 * @public
 */
export interface ArchiveFindingsRequest {
  /**
   * @public
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       archive.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The IDs of the findings that you want to archive.</p>
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
 * @public
 * <p>Contains information on the current bucket policies for the S3 bucket.</p>
 */
export interface BucketPolicy {
  /**
   * @public
   * <p>A value that indicates whether public read access for the bucket is enabled through a
   *       bucket policy.</p>
   */
  AllowsPublicReadAccess?: boolean;

  /**
   * @public
   * <p>A value that indicates whether public write access for the bucket is enabled through a
   *       bucket policy.</p>
   */
  AllowsPublicWriteAccess?: boolean;
}

/**
 * @public
 * <p>Contains information about the bucket level permissions for the S3 bucket.</p>
 */
export interface BucketLevelPermissions {
  /**
   * @public
   * <p>Contains information on how Access Control Policies are applied to the bucket.</p>
   */
  AccessControlList?: AccessControlList;

  /**
   * @public
   * <p>Contains information on the bucket policies for the S3 bucket.</p>
   */
  BucketPolicy?: BucketPolicy;

  /**
   * @public
   * <p>Contains information on which account level S3 Block Public Access settings are applied to
   *       the S3 bucket.</p>
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
 * @public
 * <p>Contains information on the status of CloudTrail as a data source for the detector.</p>
 */
export interface CloudTrailConfigurationResult {
  /**
   * @public
   * <p>Describes whether CloudTrail is enabled as a data source for the detector.</p>
   */
  Status: DataSourceStatus | undefined;
}

/**
 * @public
 * <p>Contains information about the condition.</p>
 */
export interface Condition {
  /**
   * @public
   * @deprecated
   *
   * <p>Represents the <i>equal</i> condition to be applied to a single field when
   *       querying for findings.</p>
   */
  Eq?: string[];

  /**
   * @public
   * @deprecated
   *
   * <p>Represents the <i>not equal</i> condition to be applied to a single field
   *       when querying for findings.</p>
   */
  Neq?: string[];

  /**
   * @public
   * @deprecated
   *
   * <p>Represents a <i>greater than</i> condition to be applied to a single field
   *       when querying for findings.</p>
   */
  Gt?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>Represents a <i>greater than or equal</i> condition to be applied to a
   *       single field when querying for findings.</p>
   */
  Gte?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>Represents a <i>less than</i> condition to be applied to a single field when
   *       querying for findings.</p>
   */
  Lt?: number;

  /**
   * @public
   * @deprecated
   *
   * <p>Represents a <i>less than or equal</i> condition to be applied to a single
   *       field when querying for findings.</p>
   */
  Lte?: number;

  /**
   * @public
   * <p>Represents an <i>equal</i>
   *             <b></b> condition to be applied to
   *       a single field when querying for findings.</p>
   */
  Equals?: string[];

  /**
   * @public
   * <p>Represents a <i>not equal</i>
   *             <b></b> condition to be applied
   *       to a single field when querying for findings.</p>
   */
  NotEquals?: string[];

  /**
   * @public
   * <p>Represents a <i>greater than</i> condition to be applied to a single field
   *       when querying for findings.</p>
   */
  GreaterThan?: number;

  /**
   * @public
   * <p>Represents a <i>greater than or equal</i> condition to be applied to a
   *       single field when querying for findings.</p>
   */
  GreaterThanOrEqual?: number;

  /**
   * @public
   * <p>Represents a <i>less than</i> condition to be applied to a single field when
   *       querying for findings.</p>
   */
  LessThan?: number;

  /**
   * @public
   * <p>Represents a <i>less than or equal</i> condition to be applied to a single
   *       field when querying for findings.</p>
   */
  LessThanOrEqual?: number;
}

/**
 * @public
 * <p>A request conflict exception object.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The error type.</p>
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
 * @public
 * <p>Container security context.</p>
 */
export interface SecurityContext {
  /**
   * @public
   * <p>Whether the container is privileged.</p>
   */
  Privileged?: boolean;
}

/**
 * @public
 * <p>Container volume mount.</p>
 */
export interface VolumeMount {
  /**
   * @public
   * <p>Volume mount name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Volume mount path.</p>
   */
  MountPath?: string;
}

/**
 * @public
 * <p>Details of a container.</p>
 */
export interface Container {
  /**
   * @public
   * <p>The container runtime (such as, Docker or containerd) used to run the container.</p>
   */
  ContainerRuntime?: string;

  /**
   * @public
   * <p>Container ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Container name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Container image.</p>
   */
  Image?: string;

  /**
   * @public
   * <p>Part of the image name before the last slash. For example, imagePrefix for
   *       public.ecr.aws/amazonlinux/amazonlinux:latest would be public.ecr.aws/amazonlinux. If the
   *       image name is relative and does not have a slash, this field is empty.</p>
   */
  ImagePrefix?: string;

  /**
   * @public
   * <p>Container volume mounts.</p>
   */
  VolumeMounts?: VolumeMount[];

  /**
   * @public
   * <p>Container security context.</p>
   */
  SecurityContext?: SecurityContext;
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
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type ManagementType = (typeof ManagementType)[keyof typeof ManagementType];

/**
 * @public
 * <p>Information about the EKS cluster that has a coverage status.</p>
 */
export interface CoverageEksClusterDetails {
  /**
   * @public
   * <p>Name of the EKS cluster.</p>
   */
  ClusterName?: string;

  /**
   * @public
   * <p>Represents the nodes within the EKS cluster that have a <code>HEALTHY</code> coverage
   *       status.</p>
   */
  CoveredNodes?: number;

  /**
   * @public
   * <p>Represents all the nodes within the EKS cluster in your account.</p>
   */
  CompatibleNodes?: number;

  /**
   * @public
   * <p>Information about the installed EKS add-on.</p>
   */
  AddonDetails?: AddonDetails;

  /**
   * @public
   * <p>Indicates how the Amazon EKS add-on GuardDuty agent is managed for this EKS cluster.</p>
   *          <p>
   *             <code>AUTO_MANAGED</code> indicates GuardDuty deploys and manages updates for this resource.</p>
   *          <p>
   *             <code>MANUAL</code> indicates that you are responsible to deploy, update, and manage
   *       the Amazon EKS add-on GuardDuty agent for this resource.</p>
   */
  ManagementType?: ManagementType;
}

/**
 * @public
 * <p>Represents a condition that when matched will be added to the response of the
 *       operation.</p>
 */
export interface CoverageFilterCondition {
  /**
   * @public
   * <p>Represents an equal condition that is applied to a single field while retrieving the
   *       coverage details.</p>
   */
  Equals?: string[];

  /**
   * @public
   * <p>Represents a not equal condition that is applied to a single field while retrieving the
   *       coverage details.</p>
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
  CLUSTER_NAME: "CLUSTER_NAME",
  COVERAGE_STATUS: "COVERAGE_STATUS",
  EKS_CLUSTER_NAME: "EKS_CLUSTER_NAME",
  MANAGEMENT_TYPE: "MANAGEMENT_TYPE",
  RESOURCE_TYPE: "RESOURCE_TYPE",
} as const;

/**
 * @public
 */
export type CoverageFilterCriterionKey = (typeof CoverageFilterCriterionKey)[keyof typeof CoverageFilterCriterionKey];

/**
 * @public
 * <p>Represents a condition that when matched will be added to the response of the
 *       operation.</p>
 */
export interface CoverageFilterCriterion {
  /**
   * @public
   * <p>An enum value representing possible filter fields.</p>
   *          <note>
   *             <p>Replace the enum value <code>CLUSTER_NAME</code> with <code>EKS_CLUSTER_NAME</code>.
   *       <code>CLUSTER_NAME</code> has been deprecated.</p>
   *          </note>
   */
  CriterionKey?: CoverageFilterCriterionKey;

  /**
   * @public
   * <p>Contains information about the condition.</p>
   */
  FilterCondition?: CoverageFilterCondition;
}

/**
 * @public
 * <p>Represents the criteria used in the filter.</p>
 */
export interface CoverageFilterCriteria {
  /**
   * @public
   * <p>Represents a condition that when matched will be added to the response of the
   *       operation.</p>
   */
  FilterCriterion?: CoverageFilterCriterion[];
}

/**
 * @public
 * <p>Information about the resource for each individual EKS cluster.</p>
 */
export interface CoverageResourceDetails {
  /**
   * @public
   * <p>EKS cluster details involved in the coverage statistics.</p>
   */
  EksClusterDetails?: CoverageEksClusterDetails;

  /**
   * @public
   * <p>The type of Amazon Web Services resource.</p>
   */
  ResourceType?: ResourceType;
}

/**
 * @public
 * <p>Information about the resource of the GuardDuty account.</p>
 */
export interface CoverageResource {
  /**
   * @public
   * <p>The unique ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The unique ID of the GuardDuty detector associated with the resource.</p>
   */
  DetectorId?: string;

  /**
   * @public
   * <p>The unique ID of the Amazon Web Services account.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Information about the resource for which the coverage statistics are retrieved.</p>
   */
  ResourceDetails?: CoverageResourceDetails;

  /**
   * @public
   * <p>Represents the status of the EKS cluster coverage.</p>
   */
  CoverageStatus?: CoverageStatus;

  /**
   * @public
   * <p>Represents the reason why a coverage status was <code>UNHEALTHY</code> for the EKS
   *       cluster.</p>
   */
  Issue?: string;

  /**
   * @public
   * <p>The timestamp at which the coverage details for the resource were last updated. This is in
   *       UTC format.</p>
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
  EKS_CLUSTER_NAME: "EKS_CLUSTER_NAME",
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
 * @public
 * <p>Information about the sorting criteria used in the coverage statistics.</p>
 */
export interface CoverageSortCriteria {
  /**
   * @public
   * <p>Represents the field name used to sort the coverage details.</p>
   *          <note>
   *             <p>Replace the enum value <code>CLUSTER_NAME</code> with <code>EKS_CLUSTER_NAME</code>.
   *       <code>CLUSTER_NAME</code> has been deprecated.</p>
   *          </note>
   */
  AttributeName?: CoverageSortKey;

  /**
   * @public
   * <p>The order in which the sorted findings are to be displayed.</p>
   */
  OrderBy?: OrderBy;
}

/**
 * @public
 * <p>Information about the coverage statistics for a resource.</p>
 */
export interface CoverageStatistics {
  /**
   * @public
   * <p>Represents coverage statistics for EKS clusters aggregated by resource type.</p>
   */
  CountByResourceType?: Partial<Record<ResourceType, number>>;

  /**
   * @public
   * <p>Represents coverage statistics for EKS clusters aggregated by coverage status.</p>
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
 * @public
 * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
 */
export interface KubernetesAuditLogsConfiguration {
  /**
   * @public
   * <p>The status of Kubernetes audit logs as a data source.</p>
   */
  Enable: boolean | undefined;
}

/**
 * @public
 * <p>Describes whether any Kubernetes data sources are enabled.</p>
 */
export interface KubernetesConfiguration {
  /**
   * @public
   * <p>The status of Kubernetes audit logs as a data source.</p>
   */
  AuditLogs: KubernetesAuditLogsConfiguration | undefined;
}

/**
 * @public
 * <p>Describes whether Malware Protection for EC2 instances with findings will be enabled as a
 *       data source.</p>
 */
export interface ScanEc2InstanceWithFindings {
  /**
   * @public
   * <p>Describes the configuration for scanning EBS volumes as data source.</p>
   */
  EbsVolumes?: boolean;
}

/**
 * @public
 * <p>Describes whether Malware Protection will be enabled as a data source.</p>
 */
export interface MalwareProtectionConfiguration {
  /**
   * @public
   * <p>Describes the configuration of Malware Protection for EC2 instances with findings.</p>
   */
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindings;
}

/**
 * @public
 * <p>Describes whether S3 data event logs will be enabled as a data source.</p>
 */
export interface S3LogsConfiguration {
  /**
   * @public
   * <p> The status of S3 data event logs as a data source.</p>
   */
  Enable: boolean | undefined;
}

/**
 * @public
 * <p>Contains information about which data sources are enabled.</p>
 */
export interface DataSourceConfigurations {
  /**
   * @public
   * <p>Describes whether S3 data event logs are enabled as a data source.</p>
   */
  S3Logs?: S3LogsConfiguration;

  /**
   * @public
   * <p>Describes whether any Kubernetes logs are enabled as data sources.</p>
   */
  Kubernetes?: KubernetesConfiguration;

  /**
   * @public
   * <p>Describes whether Malware Protection is enabled as a data source.</p>
   */
  MalwareProtection?: MalwareProtectionConfiguration;
}

/**
 * @public
 * @enum
 */
export const FeatureAdditionalConfiguration = {
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
 * @public
 * <p>Information about the additional configuration for a feature in your GuardDuty account.</p>
 */
export interface DetectorAdditionalConfiguration {
  /**
   * @public
   * <p>Name of the additional configuration.</p>
   */
  Name?: FeatureAdditionalConfiguration;

  /**
   * @public
   * <p>Status of the additional configuration.</p>
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
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;

/**
 * @public
 */
export type DetectorFeature = (typeof DetectorFeature)[keyof typeof DetectorFeature];

/**
 * @public
 * <p>Contains information about a GuardDuty feature.</p>
 */
export interface DetectorFeatureConfiguration {
  /**
   * @public
   * <p>The name of the feature.</p>
   */
  Name?: DetectorFeature;

  /**
   * @public
   * <p>The status of the feature.</p>
   */
  Status?: FeatureStatus;

  /**
   * @public
   * <p>Additional configuration for a resource.</p>
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
   * @public
   * <p>A Boolean value that specifies whether the detector is to be enabled.</p>
   */
  Enable: boolean | undefined;

  /**
   * @public
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>A value that specifies how frequently updated findings are exported.</p>
   */
  FindingPublishingFrequency?: FindingPublishingFrequency;

  /**
   * @public
   * @deprecated
   *
   * <p>Describes which data sources will be enabled for the detector.</p>
   *          <p>There might be regional differences because some data sources might not be
   *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
   *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
   */
  DataSources?: DataSourceConfigurations;

  /**
   * @public
   * <p>The tags to be added to a new detector resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A list of features that will be configured for the detector.</p>
   */
  Features?: DetectorFeatureConfiguration[];
}

/**
 * @public
 * <p>Describes the configuration of scanning EBS volumes as a data source.</p>
 */
export interface EbsVolumesResult {
  /**
   * @public
   * <p>Describes whether scanning EBS volumes is enabled as a data source.</p>
   */
  Status?: DataSourceStatus;

  /**
   * @public
   * <p>Specifies the reason why scanning EBS volumes (Malware Protection) was not enabled as a
   *       data source.</p>
   */
  Reason?: string;
}

/**
 * @public
 * <p>An object that contains information on the status of whether Malware Protection for EC2
 *       instances with findings will be enabled as a data source.</p>
 */
export interface ScanEc2InstanceWithFindingsResult {
  /**
   * @public
   * <p>Describes the configuration of scanning EBS volumes as a data source.</p>
   */
  EbsVolumes?: EbsVolumesResult;
}

/**
 * @public
 * <p>An object that contains information on the status of all Malware Protection data
 *       sources.</p>
 */
export interface MalwareProtectionConfigurationResult {
  /**
   * @public
   * <p>Describes the configuration of Malware Protection for EC2 instances with findings.</p>
   */
  ScanEc2InstanceWithFindings?: ScanEc2InstanceWithFindingsResult;

  /**
   * @public
   * <p>The GuardDuty Malware Protection service role.</p>
   */
  ServiceRole?: string;
}

/**
 * @public
 * <p>Specifies the names of the data sources that couldn't be enabled.</p>
 */
export interface UnprocessedDataSourcesResult {
  /**
   * @public
   * <p>An object that contains information on the status of all Malware Protection data
   *       sources.</p>
   */
  MalwareProtection?: MalwareProtectionConfigurationResult;
}

/**
 * @public
 */
export interface CreateDetectorResponse {
  /**
   * @public
   * <p>The unique ID of the created detector.</p>
   */
  DetectorId?: string;

  /**
   * @public
   * <p>Specifies the data sources that couldn't be enabled when GuardDuty was enabled for the
   *       first time.</p>
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
 * @public
 * <p>Contains information about the criteria used for querying findings.</p>
 */
export interface FindingCriteria {
  /**
   * @public
   * <p>Represents a map of finding properties that match specified conditions and values when
   *       querying findings.</p>
   */
  Criterion?: Record<string, Condition>;
}

/**
 * @public
 */
export interface CreateFilterRequest {
  /**
   * @public
   * <p>The ID of the detector belonging to the GuardDuty account that you want to create a filter
   *       for.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The name of the filter. Valid characters include period (.), underscore (_), dash (-), and
   *       alphanumeric characters. A whitespace is considered to be an invalid character.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the filter. Valid characters include alphanumeric characters, and
   *       special characters such as hyphen, period, colon, underscore, parentheses (<code>\{ \}</code>,
   *         <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab,
   *       newline, form feed, return, and whitespace.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action?: FilterAction;

  /**
   * @public
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   */
  Rank?: number;

  /**
   * @public
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
   *                <p>service.action.kubernetesApiCallAction.requestUri</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.localIpDetails.ipAddressV4</p>
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
   */
  FindingCriteria: FindingCriteria | undefined;

  /**
   * @public
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The tags to be added to a new filter resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateFilterResponse {
  /**
   * @public
   * <p>The name of the successfully created filter.</p>
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
   * @public
   * <p>The unique ID of the detector of the GuardDuty account that you want to create an IPSet
   *       for.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The user-friendly name to identify the IPSet.</p>
   *          <p> Allowed characters are alphanumeric, whitespace, dash (-), and underscores (_).</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The format of the file that contains the IPSet.</p>
   */
  Format: IpSetFormat | undefined;

  /**
   * @public
   * <p>The URI of the file that contains the IPSet. </p>
   */
  Location: string | undefined;

  /**
   * @public
   * <p>A Boolean value that indicates whether GuardDuty is to start using the uploaded
   *       IPSet.</p>
   */
  Activate: boolean | undefined;

  /**
   * @public
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The tags to be added to a new IP set resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateIPSetResponse {
  /**
   * @public
   * <p>The ID of the IPSet resource.</p>
   */
  IpSetId: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersRequest {
  /**
   * @public
   * <p>The unique ID of the detector of the GuardDuty account that you want to associate member
   *       accounts with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>A list of account ID and email address pairs of the accounts that you want to associate
   *       with the GuardDuty administrator account.</p>
   */
  AccountDetails: AccountDetail[] | undefined;
}

/**
 * @public
 * <p>Contains information about the accounts that weren't processed.</p>
 */
export interface UnprocessedAccount {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>A reason why the account hasn't been processed.</p>
   */
  Result: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersResponse {
  /**
   * @public
   * <p>A list of objects that include the <code>accountIds</code> of the unprocessed accounts and
   *       a result string that explains why each was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 * <p>Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3
 *       bucket, and the ARN of the KMS key to use to encrypt published findings.</p>
 */
export interface DestinationProperties {
  /**
   * @public
   * <p>The ARN of the resource to publish to.</p>
   *          <p>To specify an S3 bucket folder use the following format:
   *         <code>arn:aws:s3:::DOC-EXAMPLE-BUCKET/myFolder/</code>
   *          </p>
   */
  DestinationArn?: string;

  /**
   * @public
   * <p>The ARN of the KMS key to use for encryption.</p>
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
   * @public
   * <p>The ID of the GuardDuty detector associated with the publishing destination.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The type of resource for the publishing destination. Currently only Amazon S3 buckets are
   *       supported.</p>
   */
  DestinationType: DestinationType | undefined;

  /**
   * @public
   * <p>The properties of the publishing destination, including the ARNs for the destination and
   *       the KMS key used for encryption.</p>
   */
  DestinationProperties: DestinationProperties | undefined;

  /**
   * @public
   * <p>The idempotency token for the request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreatePublishingDestinationResponse {
  /**
   * @public
   * <p>The ID of the publishing destination that is created.</p>
   */
  DestinationId: string | undefined;
}

/**
 * @public
 */
export interface CreateSampleFindingsRequest {
  /**
   * @public
   * <p>The ID of the detector to create sample findings for.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The types of sample findings to generate.</p>
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
   * @public
   * <p>The unique ID of the detector of the GuardDuty account that you want to create a
   *       threatIntelSet for.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>A user-friendly ThreatIntelSet name displayed in all findings that are generated by
   *       activity that involves IP addresses included in this ThreatIntelSet.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The format of the file that contains the ThreatIntelSet.</p>
   */
  Format: ThreatIntelSetFormat | undefined;

  /**
   * @public
   * <p>The URI of the file that contains the ThreatIntelSet. </p>
   */
  Location: string | undefined;

  /**
   * @public
   * <p>A Boolean value that indicates whether GuardDuty is to start using the uploaded
   *       ThreatIntelSet.</p>
   */
  Activate: boolean | undefined;

  /**
   * @public
   * <p>The idempotency token for the create request.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The tags to be added to a new threat list resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateThreatIntelSetResponse {
  /**
   * @public
   * <p>The ID of the ThreatIntelSet resource.</p>
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
 * @public
 * <p>Contains information on the status of DNS logs as a data source.</p>
 */
export interface DNSLogsConfigurationResult {
  /**
   * @public
   * <p>Denotes whether DNS logs is enabled as a data source.</p>
   */
  Status: DataSourceStatus | undefined;
}

/**
 * @public
 * <p>Contains information on the status of VPC flow logs as a data source.</p>
 */
export interface FlowLogsConfigurationResult {
  /**
   * @public
   * <p>Denotes whether VPC flow logs is enabled as a data source.</p>
   */
  Status: DataSourceStatus | undefined;
}

/**
 * @public
 * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
 */
export interface KubernetesAuditLogsConfigurationResult {
  /**
   * @public
   * <p>A value that describes whether Kubernetes audit logs are enabled as a data source.</p>
   */
  Status: DataSourceStatus | undefined;
}

/**
 * @public
 * <p>Describes whether any Kubernetes logs will be enabled as a data source.</p>
 */
export interface KubernetesConfigurationResult {
  /**
   * @public
   * <p>Describes whether Kubernetes audit logs are enabled as a data source.</p>
   */
  AuditLogs: KubernetesAuditLogsConfigurationResult | undefined;
}

/**
 * @public
 * <p>Describes whether S3 data event logs will be enabled as a data source.</p>
 */
export interface S3LogsConfigurationResult {
  /**
   * @public
   * <p>A value that describes whether S3 data event logs are automatically enabled for new
   *       members of the organization.</p>
   */
  Status: DataSourceStatus | undefined;
}

/**
 * @public
 * <p>Contains information on the status of data sources for the detector.</p>
 */
export interface DataSourceConfigurationsResult {
  /**
   * @public
   * <p>An object that contains information on the status of CloudTrail as a data source.</p>
   */
  CloudTrail: CloudTrailConfigurationResult | undefined;

  /**
   * @public
   * <p>An object that contains information on the status of DNS logs as a data source.</p>
   */
  DNSLogs: DNSLogsConfigurationResult | undefined;

  /**
   * @public
   * <p>An object that contains information on the status of VPC flow logs as a data
   *       source.</p>
   */
  FlowLogs: FlowLogsConfigurationResult | undefined;

  /**
   * @public
   * <p>An object that contains information on the status of S3 Data event logs as a data
   *       source.</p>
   */
  S3Logs: S3LogsConfigurationResult | undefined;

  /**
   * @public
   * <p>An object that contains information on the status of all Kubernetes data sources.</p>
   */
  Kubernetes?: KubernetesConfigurationResult;

  /**
   * @public
   * <p>Describes the configuration of Malware Protection data sources.</p>
   */
  MalwareProtection?: MalwareProtectionConfigurationResult;
}

/**
 * @public
 */
export interface DeclineInvitationsRequest {
  /**
   * @public
   * <p>A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member
   *       account that you want to decline invitations from.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeclineInvitationsResponse {
  /**
   * @public
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 * <p>Contains information on the server side encryption method used in the S3 bucket. See
 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">S3
 *         Server-Side Encryption</a> for more information.</p>
 */
export interface DefaultServerSideEncryption {
  /**
   * @public
   * <p>The type of encryption used for objects within the S3 bucket.</p>
   */
  EncryptionType?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS encryption key. Only available if the bucket
   *         <code>EncryptionType</code> is <code>aws:kms</code>.</p>
   */
  KmsMasterKeyArn?: string;
}

/**
 * @public
 */
export interface DeleteDetectorRequest {
  /**
   * @public
   * <p>The unique ID of the detector that you want to delete.</p>
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
   * @public
   * <p>The unique ID of the detector that the filter is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The name of the filter that you want to delete.</p>
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
   * @public
   * <p>A list of account IDs of the Amazon Web Services accounts that sent invitations to the current member
   *       account that you want to delete invitations from.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsResponse {
  /**
   * @public
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeleteIPSetRequest {
  /**
   * @public
   * <p>The unique ID of the detector associated with the IPSet.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The unique ID of the IPSet to delete.</p>
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
export interface DeleteMembersRequest {
  /**
   * @public
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to
   *       delete.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>A list of account IDs of the GuardDuty member accounts that you want to delete.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersResponse {
  /**
   * @public
   * <p>The accounts that could not be processed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface DeletePublishingDestinationRequest {
  /**
   * @public
   * <p>The unique ID of the detector associated with the publishing destination to delete.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The ID of the publishing destination to delete.</p>
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
   * @public
   * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The unique ID of the threatIntelSet that you want to delete.</p>
   */
  ThreatIntelSetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteThreatIntelSetResponse {}

/**
 * @public
 * <p>Contains information about the condition.</p>
 */
export interface FilterCondition {
  /**
   * @public
   * <p>Represents an <i>equal</i>
   *             <b></b> condition to be applied to
   *       a single field when querying for scan entries.</p>
   */
  EqualsValue?: string;

  /**
   * @public
   * <p>Represents a <i>greater than</i> condition to be applied to a single field
   *       when querying for scan entries.</p>
   */
  GreaterThan?: number;

  /**
   * @public
   * <p>Represents a <i>less than</i> condition to be applied to a single field when
   *       querying for scan entries.</p>
   */
  LessThan?: number;
}

/**
 * @public
 * <p>Represents a condition that when matched will be added to the response of the operation.
 *       Irrespective of using any filter criteria, an administrator account can view the scan entries
 *       for all of its member accounts. However, each member account can view the scan entries only
 *       for their own account.</p>
 */
export interface FilterCriterion {
  /**
   * @public
   * <p>An enum value representing possible scan properties to match with given scan
   *       entries.</p>
   *          <note>
   *             <p>Replace the enum value <code>CLUSTER_NAME</code> with <code>EKS_CLUSTER_NAME</code>.
   *       <code>CLUSTER_NAME</code> has been deprecated.</p>
   *          </note>
   */
  CriterionKey?: CriterionKey;

  /**
   * @public
   * <p>Contains information about the condition.</p>
   */
  FilterCondition?: FilterCondition;
}

/**
 * @public
 * <p>Represents the criteria to be used in the filter for describing scan entries.</p>
 */
export interface FilterCriteria {
  /**
   * @public
   * <p>Represents a condition that when matched will be added to the response of the
   *       operation.</p>
   */
  FilterCriterion?: FilterCriterion[];
}

/**
 * @public
 * <p>Contains information about the criteria used for sorting findings.</p>
 */
export interface SortCriteria {
  /**
   * @public
   * <p>Represents the finding attribute, such as <code>accountId</code>, that sorts the
   *       findings.</p>
   */
  AttributeName?: string;

  /**
   * @public
   * <p>The order by which the sorted findings are to be displayed.</p>
   */
  OrderBy?: OrderBy;
}

/**
 * @public
 */
export interface DescribeMalwareScansRequest {
  /**
   * @public
   * <p>The unique ID of the detector that the request is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Represents the criteria to be used in the filter for describing scan entries.</p>
   */
  FilterCriteria?: FilterCriteria;

  /**
   * @public
   * <p>Represents the criteria used for sorting scan entries. The <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_SortCriteria.html#guardduty-Type-SortCriteria-attributeName">
   *                <code>attributeName</code>
   *             </a> is required and it must be
   *       <code>scanStartTime</code>.</p>
   */
  SortCriteria?: SortCriteria;
}

/**
 * @public
 * <p>Contains EBS volume details.</p>
 */
export interface VolumeDetail {
  /**
   * @public
   * <p>EBS volume Arn information.</p>
   */
  VolumeArn?: string;

  /**
   * @public
   * <p>The EBS volume type.</p>
   */
  VolumeType?: string;

  /**
   * @public
   * <p>The device name for the EBS volume.</p>
   */
  DeviceName?: string;

  /**
   * @public
   * <p>EBS volume size in GB.</p>
   */
  VolumeSizeInGB?: number;

  /**
   * @public
   * <p>EBS volume encryption type.</p>
   */
  EncryptionType?: string;

  /**
   * @public
   * <p>Snapshot Arn of the EBS volume.</p>
   */
  SnapshotArn?: string;

  /**
   * @public
   * <p>KMS key Arn used to encrypt the EBS volume.</p>
   */
  KmsKeyArn?: string;
}

/**
 * @public
 * <p>Represents the resources that were scanned in the scan entry.</p>
 */
export interface ResourceDetails {
  /**
   * @public
   * <p>InstanceArn that was scanned in the scan entry.</p>
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
 * @public
 * <p>Represents the result of the scan.</p>
 */
export interface ScanResultDetails {
  /**
   * @public
   * <p>An enum value representing possible scan results.</p>
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
 * @public
 * <p>Represents the reason the scan was triggered.</p>
 */
export interface TriggerDetails {
  /**
   * @public
   * <p>The ID of the GuardDuty finding that triggered the malware scan.</p>
   */
  GuardDutyFindingId?: string;

  /**
   * @public
   * <p>The description of the scan trigger.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>Contains information about a malware scan.</p>
 */
export interface Scan {
  /**
   * @public
   * <p>The unique ID of the detector that the request is associated with.</p>
   */
  DetectorId?: string;

  /**
   * @public
   * <p>The unique detector ID of the administrator account that the request is associated with.
   *       Note that this value will be the same as the one used for <code>DetectorId</code> if the
   *       account is an administrator.</p>
   */
  AdminDetectorId?: string;

  /**
   * @public
   * <p>The unique scan ID associated with a scan entry.</p>
   */
  ScanId?: string;

  /**
   * @public
   * <p>An enum value representing possible scan statuses.</p>
   */
  ScanStatus?: ScanStatus;

  /**
   * @public
   * <p>Represents the reason for FAILED scan status.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The timestamp of when the scan was triggered.</p>
   */
  ScanStartTime?: Date;

  /**
   * @public
   * <p>The timestamp of when the scan was finished.</p>
   */
  ScanEndTime?: Date;

  /**
   * @public
   * <p>Specifies the reason why the scan was initiated.</p>
   */
  TriggerDetails?: TriggerDetails;

  /**
   * @public
   * <p>Represents the resources that were scanned in the scan entry.</p>
   */
  ResourceDetails?: ResourceDetails;

  /**
   * @public
   * <p>Represents the result of the scan.</p>
   */
  ScanResultDetails?: ScanResultDetails;

  /**
   * @public
   * <p>The ID for the account that belongs to the scan.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Represents total bytes that were scanned.</p>
   */
  TotalBytes?: number;

  /**
   * @public
   * <p>Represents the number of files that were scanned.</p>
   */
  FileCount?: number;

  /**
   * @public
   * <p>List of volumes that were attached to the original instance to be scanned.</p>
   */
  AttachedVolumes?: VolumeDetail[];

  /**
   * @public
   * <p>Specifies the scan type that invoked the malware scan.</p>
   */
  ScanType?: ScanType;
}

/**
 * @public
 */
export interface DescribeMalwareScansResponse {
  /**
   * @public
   * <p>Contains information about malware scans.</p>
   */
  Scans: Scan[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {
  /**
   * @public
   * <p>The ID of the detector to retrieve information about the delegated administrator
   *       from.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill
   *         <code>nextToken</code> in the request with the value of <code>NextToken</code> from the
   *       previous response to continue listing data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The current configuration of Kubernetes audit logs as a data source for the
 *       organization.</p>
 */
export interface OrganizationKubernetesAuditLogsConfigurationResult {
  /**
   * @public
   * <p>Whether Kubernetes audit logs data source should be auto-enabled for new members joining
   *       the organization.</p>
   */
  AutoEnable: boolean | undefined;
}

/**
 * @public
 * <p>The current configuration of all Kubernetes data sources for the organization.</p>
 */
export interface OrganizationKubernetesConfigurationResult {
  /**
   * @public
   * <p>The current configuration of Kubernetes audit logs as a data source for the
   *       organization.</p>
   */
  AuditLogs: OrganizationKubernetesAuditLogsConfigurationResult | undefined;
}

/**
 * @public
 * <p>An object that contains information on the status of whether EBS volumes scanning will be
 *       enabled as a data source for an organization.</p>
 */
export interface OrganizationEbsVolumesResult {
  /**
   * @public
   * <p>An object that contains the status of whether scanning EBS volumes should be auto-enabled
   *       for new members joining the organization.</p>
   */
  AutoEnable?: boolean;
}

/**
 * @public
 * <p>An object that contains information on the status of scanning EC2 instances with findings
 *       for an organization.</p>
 */
export interface OrganizationScanEc2InstanceWithFindingsResult {
  /**
   * @public
   * <p>Describes the configuration for scanning EBS volumes for an organization.</p>
   */
  EbsVolumes?: OrganizationEbsVolumesResult;
}

/**
 * @public
 * <p>An object that contains information on the status of all Malware Protection data source
 *       for an organization.</p>
 */
export interface OrganizationMalwareProtectionConfigurationResult {
  /**
   * @public
   * <p>Describes the configuration for scanning EC2 instances with findings for an
   *       organization.</p>
   */
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindingsResult;
}

/**
 * @public
 * <p>The current configuration of S3 data event logs as a data source for the
 *       organization.</p>
 */
export interface OrganizationS3LogsConfigurationResult {
  /**
   * @public
   * <p>A value that describes whether S3 data event logs are automatically enabled for new
   *       members of the organization.</p>
   */
  AutoEnable: boolean | undefined;
}

/**
 * @public
 * <p>An object that contains information on which data sources are automatically enabled for
 *       new members within the organization.</p>
 */
export interface OrganizationDataSourceConfigurationsResult {
  /**
   * @public
   * <p>Describes whether S3 data event logs are enabled as a data source.</p>
   */
  S3Logs: OrganizationS3LogsConfigurationResult | undefined;

  /**
   * @public
   * <p>Describes the configuration of Kubernetes data sources.</p>
   */
  Kubernetes?: OrganizationKubernetesConfigurationResult;

  /**
   * @public
   * <p>Describes the configuration of Malware Protection data source for an organization.</p>
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
  EKS_ADDON_MANAGEMENT: "EKS_ADDON_MANAGEMENT",
} as const;

/**
 * @public
 */
export type OrgFeatureAdditionalConfiguration =
  (typeof OrgFeatureAdditionalConfiguration)[keyof typeof OrgFeatureAdditionalConfiguration];

/**
 * @public
 * <p>A list of additional configuration which will be configured for the organization.</p>
 */
export interface OrganizationAdditionalConfigurationResult {
  /**
   * @public
   * <p>The name of the additional configuration that is configured for the member accounts within
   *       the organization.</p>
   */
  Name?: OrgFeatureAdditionalConfiguration;

  /**
   * @public
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
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;

/**
 * @public
 */
export type OrgFeature = (typeof OrgFeature)[keyof typeof OrgFeature];

/**
 * @public
 * <p>A list of features which will be configured for the organization.</p>
 */
export interface OrganizationFeatureConfigurationResult {
  /**
   * @public
   * <p>The name of the feature that is configured for the member accounts within the
   *       organization.</p>
   */
  Name?: OrgFeature;

  /**
   * @public
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
   */
  AutoEnable?: OrgFeatureStatus;

  /**
   * @public
   * <p>The additional configuration that is configured for the member accounts within the
   *       organization.</p>
   */
  AdditionalConfiguration?: OrganizationAdditionalConfigurationResult[];
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * @public
   * @deprecated
   *
   * <p>Indicates whether GuardDuty is automatically enabled for accounts added to the
   *       organization.</p>
   *          <p>Even though this is still supported, we recommend using
   *         <code>AutoEnableOrganizationMembers</code> to achieve the similar results.</p>
   */
  AutoEnable?: boolean;

  /**
   * @public
   * <p>Indicates whether the maximum number of allowed member accounts are already associated
   *       with the delegated administrator account for your organization.</p>
   */
  MemberAccountLimitReached: boolean | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>Describes which data sources are enabled automatically for member accounts.</p>
   */
  DataSources?: OrganizationDataSourceConfigurationsResult;

  /**
   * @public
   * <p>A list of features that are configured for this organization.</p>
   */
  Features?: OrganizationFeatureConfigurationResult[];

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Indicates the auto-enablement configuration of GuardDuty for the member accounts in the
   *       organization.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code>: Indicates that when a new account joins the organization, they will
   *           have GuardDuty enabled automatically. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: Indicates that all accounts in the organization have GuardDuty
   *           enabled automatically. This includes <code>NEW</code> accounts that join the organization
   *           and accounts that may have been suspended or removed from the organization in
   *           GuardDuty.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Indicates that GuardDuty will not be automatically enabled for any
   *           account in the organization. The administrator must manage GuardDuty for each account in
   *           the organization individually.</p>
   *             </li>
   *          </ul>
   */
  AutoEnableOrganizationMembers?: AutoEnableMembers;
}

/**
 * @public
 */
export interface DescribePublishingDestinationRequest {
  /**
   * @public
   * <p>The unique ID of the detector associated with the publishing destination to
   *       retrieve.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The ID of the publishing destination to retrieve.</p>
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
   * @public
   * <p>The ID of the publishing destination.</p>
   */
  DestinationId: string | undefined;

  /**
   * @public
   * <p>The type of publishing destination. Currently, only Amazon S3 buckets are
   *       supported.</p>
   */
  DestinationType: DestinationType | undefined;

  /**
   * @public
   * <p>The status of the publishing destination.</p>
   */
  Status: PublishingStatus | undefined;

  /**
   * @public
   * <p>The time, in epoch millisecond format, at which GuardDuty was first unable to publish
   *       findings to the destination.</p>
   */
  PublishingFailureStartTimestamp: number | undefined;

  /**
   * @public
   * <p>A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code>
   *       and <code>KmsKeyArn</code> of the publishing destination.</p>
   */
  DestinationProperties: DestinationProperties | undefined;
}

/**
 * @public
 * <p>Contains information about the publishing destination, including the ID, type, and
 *       status.</p>
 */
export interface Destination {
  /**
   * @public
   * <p>The unique ID of the publishing destination.</p>
   */
  DestinationId: string | undefined;

  /**
   * @public
   * <p>The type of resource used for the publishing destination. Currently, only Amazon S3
   *       buckets are supported.</p>
   */
  DestinationType: DestinationType | undefined;

  /**
   * @public
   * <p>The status of the publishing destination.</p>
   */
  Status: PublishingStatus | undefined;
}

/**
 * @public
 * <p>Information about the additional configuration.</p>
 */
export interface DetectorAdditionalConfigurationResult {
  /**
   * @public
   * <p>Name of the additional configuration.</p>
   */
  Name?: FeatureAdditionalConfiguration;

  /**
   * @public
   * <p>Status of the additional configuration.</p>
   */
  Status?: FeatureStatus;

  /**
   * @public
   * <p>The timestamp at which the additional configuration was last updated. This is in UTC
   *       format.</p>
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
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;

/**
 * @public
 */
export type DetectorFeatureResult = (typeof DetectorFeatureResult)[keyof typeof DetectorFeatureResult];

/**
 * @public
 * <p>Contains information about a GuardDuty feature.</p>
 */
export interface DetectorFeatureConfigurationResult {
  /**
   * @public
   * <p>Indicates the name of the feature that can be enabled for the detector.</p>
   */
  Name?: DetectorFeatureResult;

  /**
   * @public
   * <p>Indicates the status of the feature that is enabled for the detector.</p>
   */
  Status?: FeatureStatus;

  /**
   * @public
   * <p>The timestamp at which the feature object was updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>Additional configuration for a resource.</p>
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
   * @public
   * <p>The Amazon Web Services Account ID for the organizations account to be disabled as a GuardDuty delegated
   *       administrator.</p>
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
   * @public
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
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
   * @public
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
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
   * @public
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to
   *       disassociate from the administrator account.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>A list of account IDs of the GuardDuty member accounts that you want to disassociate from
   *       the administrator account.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateMembersResponse {
  /**
   * @public
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
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
 * @public
 * <p>Contains list of scanned and skipped EBS volumes with details.</p>
 */
export interface EbsVolumeDetails {
  /**
   * @public
   * <p>List of EBS volumes that were scanned.</p>
   */
  ScannedVolumeDetails?: VolumeDetail[];

  /**
   * @public
   * <p>List of EBS volumes that were skipped from the malware scan.</p>
   */
  SkippedVolumeDetails?: VolumeDetail[];
}

/**
 * @public
 * <p>Contains details of the highest severity threat detected during scan and number of
 *       infected files.</p>
 */
export interface HighestSeverityThreatDetails {
  /**
   * @public
   * <p>Severity level of the highest severity threat detected.</p>
   */
  Severity?: string;

  /**
   * @public
   * <p>Threat name of the highest severity threat detected as part of the malware scan.</p>
   */
  ThreatName?: string;

  /**
   * @public
   * <p>Total number of infected files with the highest severity threat detected.</p>
   */
  Count?: number;
}

/**
 * @public
 * <p>Total number of scanned files.</p>
 */
export interface ScannedItemCount {
  /**
   * @public
   * <p>Total GB of files scanned for malware.</p>
   */
  TotalGb?: number;

  /**
   * @public
   * <p>Number of files scanned.</p>
   */
  Files?: number;

  /**
   * @public
   * <p>Total number of scanned volumes.</p>
   */
  Volumes?: number;
}

/**
 * @public
 * <p>Contains details of infected file including name, file path and hash.</p>
 */
export interface ScanFilePath {
  /**
   * @public
   * <p>The file path of the infected file.</p>
   */
  FilePath?: string;

  /**
   * @public
   * <p>EBS volume Arn details of the infected file.</p>
   */
  VolumeArn?: string;

  /**
   * @public
   * <p>The hash value of the infected file.</p>
   */
  Hash?: string;

  /**
   * @public
   * <p>File name of the infected file.</p>
   */
  FileName?: string;
}

/**
 * @public
 * <p>Contains files infected with the given threat providing details of malware name and
 *       severity.</p>
 */
export interface ScanThreatName {
  /**
   * @public
   * <p>The name of the identified threat.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Severity of threat identified as part of the malware scan.</p>
   */
  Severity?: string;

  /**
   * @public
   * <p>Total number of files infected with given threat.</p>
   */
  ItemCount?: number;

  /**
   * @public
   * <p>List of infected files in EBS volume with details.</p>
   */
  FilePaths?: ScanFilePath[];
}

/**
 * @public
 * <p>Contains details about identified threats organized by threat name.</p>
 */
export interface ThreatDetectedByName {
  /**
   * @public
   * <p>Total number of infected files identified.</p>
   */
  ItemCount?: number;

  /**
   * @public
   * <p>Total number of unique threats by name identified, as part of the malware scan.</p>
   */
  UniqueThreatNameCount?: number;

  /**
   * @public
   * <p>Flag to determine if the finding contains every single infected file-path and/or every
   *       threat.</p>
   */
  Shortened?: boolean;

  /**
   * @public
   * <p>List of identified threats with details, organized by threat name.</p>
   */
  ThreatNames?: ScanThreatName[];
}

/**
 * @public
 * <p>Contains total number of infected files.</p>
 */
export interface ThreatsDetectedItemCount {
  /**
   * @public
   * <p>Total number of infected files.</p>
   */
  Files?: number;
}

/**
 * @public
 * <p>Contains a complete view providing malware scan result details.</p>
 */
export interface ScanDetections {
  /**
   * @public
   * <p>Total number of scanned files.</p>
   */
  ScannedItemCount?: ScannedItemCount;

  /**
   * @public
   * <p>Total number of infected files.</p>
   */
  ThreatsDetectedItemCount?: ThreatsDetectedItemCount;

  /**
   * @public
   * <p>Details of the highest severity threat detected during malware scan and number of infected
   *       files.</p>
   */
  HighestSeverityThreatDetails?: HighestSeverityThreatDetails;

  /**
   * @public
   * <p>Contains details about identified threats organized by threat name.</p>
   */
  ThreatDetectedByName?: ThreatDetectedByName;
}

/**
 * @public
 * <p>Contains details from the malware scan that created a finding.</p>
 */
export interface EbsVolumeScanDetails {
  /**
   * @public
   * <p>Unique Id of the malware scan that generated the finding.</p>
   */
  ScanId?: string;

  /**
   * @public
   * <p>Returns the start date and time of the malware scan.</p>
   */
  ScanStartedAt?: Date;

  /**
   * @public
   * <p>Returns the completion date and time of the malware scan.</p>
   */
  ScanCompletedAt?: Date;

  /**
   * @public
   * <p>GuardDuty finding ID that triggered a malware scan.</p>
   */
  TriggerFindingId?: string;

  /**
   * @public
   * <p>Contains list of threat intelligence sources used to detect threats.</p>
   */
  Sources?: string[];

  /**
   * @public
   * <p>Contains a complete view providing malware scan result details.</p>
   */
  ScanDetections?: ScanDetections;

  /**
   * @public
   * <p>Specifies the scan type that invoked the malware scan.</p>
   */
  ScanType?: ScanType;
}

/**
 * @public
 * <p>Contains information about a tag associated with the EC2 instance.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The EC2 instance tag key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The EC2 instance tag value.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Represents a pre-existing file or directory on the host machine that the volume maps
 *       to.</p>
 */
export interface HostPath {
  /**
   * @public
   * <p>Path of the file or directory on the host that the volume maps to.</p>
   */
  Path?: string;
}

/**
 * @public
 * <p>Volume used by the Kubernetes workload.</p>
 */
export interface Volume {
  /**
   * @public
   * <p>Volume name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Represents a pre-existing file or directory on the host machine that the volume maps
   *       to.</p>
   */
  HostPath?: HostPath;
}

/**
 * @public
 * <p>Contains information about the task in an ECS cluster.</p>
 */
export interface EcsTaskDetails {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the task.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ARN of the task definition that creates the task.</p>
   */
  DefinitionArn?: string;

  /**
   * @public
   * <p>The version counter for the task.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>The Unix timestamp for the time when the task was created.</p>
   */
  TaskCreatedAt?: Date;

  /**
   * @public
   * <p>The Unix timestamp for the time when the task started.</p>
   */
  StartedAt?: Date;

  /**
   * @public
   * <p>Contains the tag specified when a task is started.</p>
   */
  StartedBy?: string;

  /**
   * @public
   * <p>The tags of the ECS Task.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The list of data volume definitions for the task.</p>
   */
  Volumes?: Volume[];

  /**
   * @public
   * <p>The containers that's associated with the task.</p>
   */
  Containers?: Container[];

  /**
   * @public
   * <p>The name of the task group that's associated with the task.</p>
   */
  Group?: string;
}

/**
 * @public
 * <p>Contains information about the details of the ECS Cluster.</p>
 */
export interface EcsClusterDetails {
  /**
   * @public
   * <p>The name of the ECS Cluster.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the cluster.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The status of the ECS cluster.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The number of services that are running on the cluster in an ACTIVE state.</p>
   */
  ActiveServicesCount?: number;

  /**
   * @public
   * <p>The number of container instances registered into the cluster.</p>
   */
  RegisteredContainerInstancesCount?: number;

  /**
   * @public
   * <p>The number of tasks in the cluster that are in the RUNNING state.</p>
   */
  RunningTasksCount?: number;

  /**
   * @public
   * <p>The tags of the ECS Cluster.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Contains information about the details of the ECS Task.</p>
   */
  TaskDetails?: EcsTaskDetails;
}

/**
 * @public
 * <p>Details about the EKS cluster involved in a Kubernetes finding.</p>
 */
export interface EksClusterDetails {
  /**
   * @public
   * <p>EKS cluster name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>EKS cluster ARN.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The VPC ID to which the EKS cluster is attached.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The EKS cluster status.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The EKS cluster tags.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The timestamp when the EKS cluster was created.</p>
   */
  CreatedAt?: Date;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID for the organization account to be enabled as a GuardDuty delegated
   *       administrator.</p>
   */
  AdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountResponse {}

/**
 * @public
 * <p>An instance of a threat intelligence detail that constitutes evidence for the
 *       finding.</p>
 */
export interface ThreatIntelligenceDetail {
  /**
   * @public
   * <p>The name of the threat intelligence list that triggered the finding.</p>
   */
  ThreatListName?: string;

  /**
   * @public
   * <p>A list of names of the threats in the threat intelligence list that triggered the
   *       finding.</p>
   */
  ThreatNames?: string[];
}

/**
 * @public
 * <p>Contains information about the reason that the finding was generated.</p>
 */
export interface Evidence {
  /**
   * @public
   * <p>A list of threat intelligence details related to the evidence.</p>
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
 * @public
 * <p>Contains information about the EC2 instance profile.</p>
 */
export interface IamInstanceProfile {
  /**
   * @public
   * <p>The profile ARN of the EC2 instance.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The profile ID of the EC2 instance.</p>
   */
  Id?: string;
}

/**
 * @public
 * <p>Contains other private IP address information of the EC2 instance.</p>
 */
export interface PrivateIpAddressDetails {
  /**
   * @public
   * <p>The private DNS name of the EC2 instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * @public
   * <p>The private IP address of the EC2 instance.</p>
   */
  PrivateIpAddress?: string;
}

/**
 * @public
 * <p>Contains information about the security groups associated with the EC2 instance.</p>
 */
export interface SecurityGroup {
  /**
   * @public
   * <p>The security group ID of the EC2 instance.</p>
   */
  GroupId?: string;

  /**
   * @public
   * <p>The security group name of the EC2 instance.</p>
   */
  GroupName?: string;
}

/**
 * @public
 * <p>Contains information about the elastic network interface of the EC2 instance.</p>
 */
export interface NetworkInterface {
  /**
   * @public
   * <p>A list of IPv6 addresses for the EC2 instance.</p>
   */
  Ipv6Addresses?: string[];

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  NetworkInterfaceId?: string;

  /**
   * @public
   * <p>The private DNS name of the EC2 instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * @public
   * <p>The private IP address of the EC2 instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>Other private IP address information of the EC2 instance.</p>
   */
  PrivateIpAddresses?: PrivateIpAddressDetails[];

  /**
   * @public
   * <p>The public DNS name of the EC2 instance.</p>
   */
  PublicDnsName?: string;

  /**
   * @public
   * <p>The public IP address of the EC2 instance.</p>
   */
  PublicIp?: string;

  /**
   * @public
   * <p>The security groups associated with the EC2 instance.</p>
   */
  SecurityGroups?: SecurityGroup[];

  /**
   * @public
   * <p>The subnet ID of the EC2 instance.</p>
   */
  SubnetId?: string;

  /**
   * @public
   * <p>The VPC ID of the EC2 instance.</p>
   */
  VpcId?: string;
}

/**
 * @public
 * <p>Contains information about the product code for the EC2 instance.</p>
 */
export interface ProductCode {
  /**
   * @public
   * <p>The product code information.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>The product code type.</p>
   */
  ProductType?: string;
}

/**
 * @public
 * <p>Contains information about the details of an instance.</p>
 */
export interface InstanceDetails {
  /**
   * @public
   * <p>The Availability Zone of the EC2 instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The profile information of the EC2 instance.</p>
   */
  IamInstanceProfile?: IamInstanceProfile;

  /**
   * @public
   * <p>The image description of the EC2 instance.</p>
   */
  ImageDescription?: string;

  /**
   * @public
   * <p>The image ID of the EC2 instance.</p>
   */
  ImageId?: string;

  /**
   * @public
   * <p>The ID of the EC2 instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The state of the EC2 instance.</p>
   */
  InstanceState?: string;

  /**
   * @public
   * <p>The type of the EC2 instance.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost. Only applicable to Amazon Web Services Outposts
   *       instances.</p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>The launch time of the EC2 instance.</p>
   */
  LaunchTime?: string;

  /**
   * @public
   * <p>The elastic network interface information of the EC2 instance.</p>
   */
  NetworkInterfaces?: NetworkInterface[];

  /**
   * @public
   * <p>The platform of the EC2 instance.</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>The product code of the EC2 instance.</p>
   */
  ProductCodes?: ProductCode[];

  /**
   * @public
   * <p>The tags of the EC2 instance.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Details about the Kubernetes user involved in a Kubernetes finding.</p>
 */
export interface KubernetesUserDetails {
  /**
   * @public
   * <p>The username of the user who called the Kubernetes API.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The user ID of the user who called the Kubernetes API.</p>
   */
  Uid?: string;

  /**
   * @public
   * <p>The groups that include the user who called the Kubernetes API.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>Entity that assumes the IAM role
   *       when Kubernetes RBAC permissions are assigned to that role.</p>
   */
  SessionName?: string[];
}

/**
 * @public
 * <p>Details about the Kubernetes workload involved in a Kubernetes finding.</p>
 */
export interface KubernetesWorkloadDetails {
  /**
   * @public
   * <p>Kubernetes workload name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Kubernetes workload type (e.g. Pod, Deployment, etc.).</p>
   */
  Type?: string;

  /**
   * @public
   * <p>Kubernetes workload ID.</p>
   */
  Uid?: string;

  /**
   * @public
   * <p>Kubernetes namespace that the workload is part of.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>Whether the hostNetwork flag is enabled for the pods included in the workload.</p>
   */
  HostNetwork?: boolean;

  /**
   * @public
   * <p>Containers running as part of the Kubernetes workload.</p>
   */
  Containers?: Container[];

  /**
   * @public
   * <p>Volumes used by the Kubernetes workload.</p>
   */
  Volumes?: Volume[];
}

/**
 * @public
 * <p>Details about Kubernetes resources such as a Kubernetes user or workload resource involved
 *       in a Kubernetes finding.</p>
 */
export interface KubernetesDetails {
  /**
   * @public
   * <p>Details about the Kubernetes user involved in a Kubernetes finding.</p>
   */
  KubernetesUserDetails?: KubernetesUserDetails;

  /**
   * @public
   * <p>Details about the Kubernetes workload involved in a Kubernetes finding.</p>
   */
  KubernetesWorkloadDetails?: KubernetesWorkloadDetails;
}

/**
 * @public
 * <p>Amazon Virtual Private Cloud configuration details associated with your Lambda function.</p>
 */
export interface VpcConfig {
  /**
   * @public
   * <p>The identifiers of the subnets that are associated with your Lambda function.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The identifier of the Amazon Virtual Private Cloud.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The identifier of the security group attached to the Lambda function.</p>
   */
  SecurityGroups?: SecurityGroup[];
}

/**
 * @public
 * <p>Information about the Lambda function involved in the finding.</p>
 */
export interface LambdaDetails {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Lambda function.</p>
   */
  FunctionArn?: string;

  /**
   * @public
   * <p>Name of the Lambda function.</p>
   */
  FunctionName?: string;

  /**
   * @public
   * <p>Description of the Lambda function.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The timestamp when the Lambda function was last modified. This field is in the UTC date string
   *       format <code>(2023-03-22T19:37:20.168Z)</code>.</p>
   */
  LastModifiedAt?: Date;

  /**
   * @public
   * <p>The revision ID of the Lambda function version.</p>
   */
  RevisionId?: string;

  /**
   * @public
   * <p>The version of the Lambda function.</p>
   */
  FunctionVersion?: string;

  /**
   * @public
   * <p>The execution role of the Lambda function.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>Amazon Virtual Private Cloud configuration details associated with your Lambda function.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * @public
   * <p>A list of tags attached to this resource, listed in the format of
   *       <code>key</code>:<code>value</code> pair.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Contains information about the resource type <code>RDSDBInstance</code> involved in a
 *       GuardDuty finding.</p>
 */
export interface RdsDbInstanceDetails {
  /**
   * @public
   * <p>The identifier associated to the database instance that was involved in the
   *       finding.</p>
   */
  DbInstanceIdentifier?: string;

  /**
   * @public
   * <p>The database engine of the database instance involved in the finding.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>The version of the database engine that was involved in the finding.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The identifier of the database cluster that contains the database instance ID involved in
   *       the finding.</p>
   */
  DbClusterIdentifier?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the database instance involved in the
   *       finding.</p>
   */
  DbInstanceArn?: string;

  /**
   * @public
   * <p>Instance tag key-value pairs associated with the database instance ID.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Contains information about the user and authentication details for a database instance
 *       involved in the finding.</p>
 */
export interface RdsDbUserDetails {
  /**
   * @public
   * <p>The user name used in the anomalous login attempt.</p>
   */
  User?: string;

  /**
   * @public
   * <p>The application name used in the anomalous login attempt.</p>
   */
  Application?: string;

  /**
   * @public
   * <p>The name of the database instance involved in the anomalous login attempt.</p>
   */
  Database?: string;

  /**
   * @public
   * <p>The version of the Secure Socket Layer (SSL) used for the network.</p>
   */
  Ssl?: string;

  /**
   * @public
   * <p>The authentication method used by the user involved in the finding.</p>
   */
  AuthMethod?: string;
}

/**
 * @public
 * <p>Contains information on the owner of the bucket.</p>
 */
export interface Owner {
  /**
   * @public
   * <p>The canonical user ID of the bucket owner. For information about locating your canonical
   *       user ID see <a href="https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId">Finding Your Account
   *         Canonical User ID.</a>
   *          </p>
   */
  Id?: string;
}

/**
 * @public
 * <p>Contains information about how permissions are configured for the S3 bucket.</p>
 */
export interface PermissionConfiguration {
  /**
   * @public
   * <p>Contains information about the bucket level permissions for the S3 bucket.</p>
   */
  BucketLevelPermissions?: BucketLevelPermissions;

  /**
   * @public
   * <p>Contains information about the account level permissions on the S3 bucket.</p>
   */
  AccountLevelPermissions?: AccountLevelPermissions;
}

/**
 * @public
 * <p>Describes the public access policies that apply to the S3 bucket.</p>
 */
export interface PublicAccess {
  /**
   * @public
   * <p>Contains information about how permissions are configured for the S3 bucket.</p>
   */
  PermissionConfiguration?: PermissionConfiguration;

  /**
   * @public
   * <p>Describes the effective permission on this bucket after factoring all attached
   *       policies.</p>
   */
  EffectivePermission?: string;
}

/**
 * @public
 * <p>Contains information on the S3 bucket.</p>
 */
export interface S3BucketDetail {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the S3 bucket.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Describes whether the bucket is a source or destination bucket.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The date and time the bucket was created at.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The owner of the S3 bucket.</p>
   */
  Owner?: Owner;

  /**
   * @public
   * <p>All tags attached to the S3 bucket</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Describes the server side encryption method used in the S3 bucket.</p>
   */
  DefaultServerSideEncryption?: DefaultServerSideEncryption;

  /**
   * @public
   * <p>Describes the public access policies that apply to the S3 bucket.</p>
   */
  PublicAccess?: PublicAccess;
}

/**
 * @public
 * <p>Contains information about the Amazon Web Services resource associated with the activity that prompted
 *       GuardDuty to generate a finding.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>The IAM access key details (user information) of a user that engaged in the activity that
   *       prompted GuardDuty to generate a finding.</p>
   */
  AccessKeyDetails?: AccessKeyDetails;

  /**
   * @public
   * <p>Contains information on the S3 bucket.</p>
   */
  S3BucketDetails?: S3BucketDetail[];

  /**
   * @public
   * <p>The information about the EC2 instance associated with the activity that prompted
   *       GuardDuty to generate a finding.</p>
   */
  InstanceDetails?: InstanceDetails;

  /**
   * @public
   * <p>Details about the EKS cluster involved in a Kubernetes finding.</p>
   */
  EksClusterDetails?: EksClusterDetails;

  /**
   * @public
   * <p>Details about the Kubernetes user and workload involved in a Kubernetes finding.</p>
   */
  KubernetesDetails?: KubernetesDetails;

  /**
   * @public
   * <p>The type of Amazon Web Services resource.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>Contains list of scanned and skipped EBS volumes with details.</p>
   */
  EbsVolumeDetails?: EbsVolumeDetails;

  /**
   * @public
   * <p>Contains information about the details of the ECS Cluster.</p>
   */
  EcsClusterDetails?: EcsClusterDetails;

  /**
   * @public
   * <p>Details of a container.</p>
   */
  ContainerDetails?: Container;

  /**
   * @public
   * <p>Contains information about the database instance to which an anomalous login attempt was
   *       made.</p>
   */
  RdsDbInstanceDetails?: RdsDbInstanceDetails;

  /**
   * @public
   * <p>Contains information about the user details through which anomalous login attempt was
   *       made.</p>
   */
  RdsDbUserDetails?: RdsDbUserDetails;

  /**
   * @public
   * <p>Contains information about the Lambda function that was involved in a finding.</p>
   */
  LambdaDetails?: LambdaDetails;
}

/**
 * @public
 * <p>Additional information about the generated finding.</p>
 */
export interface ServiceAdditionalInfo {
  /**
   * @public
   * <p>This field specifies the value of the additional information.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Describes the type of the additional information.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Information about the runtime process details.</p>
 */
export interface LineageObject {
  /**
   * @public
   * <p>The time when the process started. This is in UTC format.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The process ID of the child process.</p>
   */
  NamespacePid?: number;

  /**
   * @public
   * <p>The user ID of the user that executed the process.</p>
   */
  UserId?: number;

  /**
   * @public
   * <p>The name of the process.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of the process.</p>
   */
  Pid?: number;

  /**
   * @public
   * <p>The unique ID assigned to the process by GuardDuty.</p>
   */
  Uuid?: string;

  /**
   * @public
   * <p>The absolute path of the process executable file.</p>
   */
  ExecutablePath?: string;

  /**
   * @public
   * <p>The effective user ID that was used to execute the process.</p>
   */
  Euid?: number;

  /**
   * @public
   * <p>The unique ID of the parent process. This ID is assigned to the parent process by
   *       GuardDuty.</p>
   */
  ParentUuid?: string;
}

/**
 * @public
 * <p>Information about the observed process.</p>
 */
export interface ProcessDetails {
  /**
   * @public
   * <p>The name of the process.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The absolute path of the process executable file.</p>
   */
  ExecutablePath?: string;

  /**
   * @public
   * <p>The <code>SHA256</code> hash of the process executable.</p>
   */
  ExecutableSha256?: string;

  /**
   * @public
   * <p>The ID of the child process.</p>
   */
  NamespacePid?: number;

  /**
   * @public
   * <p>The present working directory of the process.</p>
   */
  Pwd?: string;

  /**
   * @public
   * <p>The ID of the process.</p>
   */
  Pid?: number;

  /**
   * @public
   * <p>The time when the process started. This is in UTC format.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The unique ID assigned to the process by GuardDuty.</p>
   */
  Uuid?: string;

  /**
   * @public
   * <p>The unique ID of the parent process. This ID is assigned to the parent process by
   *       GuardDuty.</p>
   */
  ParentUuid?: string;

  /**
   * @public
   * <p>The user that executed the process.</p>
   */
  User?: string;

  /**
   * @public
   * <p>The unique ID of the user that executed the process.</p>
   */
  UserId?: number;

  /**
   * @public
   * <p>The effective user ID of the user that executed the process.</p>
   */
  Euid?: number;

  /**
   * @public
   * <p>Information about the process's lineage.</p>
   */
  Lineage?: LineageObject[];
}

/**
 * @public
 * <p>Additional information about the suspicious activity.</p>
 */
export interface RuntimeContext {
  /**
   * @public
   * <p>Information about the process that modified the current process. This is available for
   *       multiple finding types.</p>
   */
  ModifyingProcess?: ProcessDetails;

  /**
   * @public
   * <p>The timestamp at which the process modified the current process. The timestamp is in UTC date string
   *       format.</p>
   */
  ModifiedAt?: Date;

  /**
   * @public
   * <p>The path to the script that was executed.</p>
   */
  ScriptPath?: string;

  /**
   * @public
   * <p>The path to the new library that was loaded.</p>
   */
  LibraryPath?: string;

  /**
   * @public
   * <p>The value of the LD_PRELOAD environment variable.</p>
   */
  LdPreloadValue?: string;

  /**
   * @public
   * <p>The path to the docket socket that was accessed.</p>
   */
  SocketPath?: string;

  /**
   * @public
   * <p>The path to the leveraged <code>runc</code> implementation.</p>
   */
  RuncBinaryPath?: string;

  /**
   * @public
   * <p>The path in the container that modified the release agent file.</p>
   */
  ReleaseAgentPath?: string;

  /**
   * @public
   * <p>The path on the host that is mounted by the container.</p>
   */
  MountSource?: string;

  /**
   * @public
   * <p>The path in the container that is mapped to the host directory.</p>
   */
  MountTarget?: string;

  /**
   * @public
   * <p>Represents the type of mounted fileSystem.</p>
   */
  FileSystemType?: string;

  /**
   * @public
   * <p>Represents options that control the behavior of a runtime operation or action. For
   *       example, a filesystem mount operation may contain a read-only flag.</p>
   */
  Flags?: string[];

  /**
   * @public
   * <p>The name of the module loaded into the kernel.</p>
   */
  ModuleName?: string;

  /**
   * @public
   * <p>The path to the module loaded into the kernel.</p>
   */
  ModuleFilePath?: string;

  /**
   * @public
   * <p>The <code>SHA256</code> hash of the module.</p>
   */
  ModuleSha256?: string;

  /**
   * @public
   * <p>The path to the modified shell history file.</p>
   */
  ShellHistoryFilePath?: string;

  /**
   * @public
   * <p>Information about the process that had its memory overwritten by the current process.</p>
   */
  TargetProcess?: ProcessDetails;

  /**
   * @public
   * <p>Represents the communication protocol associated with the address. For example, the address
   *       family <code>AF_INET</code> is used for IP version of 4 protocol.</p>
   */
  AddressFamily?: string;

  /**
   * @public
   * <p>Specifies a particular protocol within the address family. Usually there is a single
   *       protocol in address families. For example, the address family <code>AF_INET</code> only has
   *       the IP protocol.</p>
   */
  IanaProtocolNumber?: number;

  /**
   * @public
   * <p>Specifies the Region of a process's address space such as stack and heap.</p>
   */
  MemoryRegions?: string[];
}

/**
 * @public
 * <p>Information about the process and any required context values for a specific
 *       finding.</p>
 */
export interface RuntimeDetails {
  /**
   * @public
   * <p>Information about the observed process.</p>
   */
  Process?: ProcessDetails;

  /**
   * @public
   * <p>Additional information about the suspicious activity.</p>
   */
  Context?: RuntimeContext;
}

/**
 * @public
 * <p>Contains additional information about the generated finding.</p>
 */
export interface Service {
  /**
   * @public
   * <p>Information about the activity that is described in a finding.</p>
   */
  Action?: Action;

  /**
   * @public
   * <p>An evidence object associated with the service.</p>
   */
  Evidence?: Evidence;

  /**
   * @public
   * <p>Indicates whether this finding is archived.</p>
   */
  Archived?: boolean;

  /**
   * @public
   * <p>The total count of the occurrences of this finding type.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>The detector ID for the GuardDuty service.</p>
   */
  DetectorId?: string;

  /**
   * @public
   * <p>The first-seen timestamp of the activity that prompted GuardDuty to generate this
   *       finding.</p>
   */
  EventFirstSeen?: string;

  /**
   * @public
   * <p>The last-seen timestamp of the activity that prompted GuardDuty to generate this
   *       finding.</p>
   */
  EventLastSeen?: string;

  /**
   * @public
   * <p>The resource role information for this finding.</p>
   */
  ResourceRole?: string;

  /**
   * @public
   * <p>The name of the Amazon Web Services service (GuardDuty) that generated a finding.</p>
   */
  ServiceName?: string;

  /**
   * @public
   * <p>Feedback that was submitted about the finding.</p>
   */
  UserFeedback?: string;

  /**
   * @public
   * <p>Contains additional information about the generated finding.</p>
   */
  AdditionalInfo?: ServiceAdditionalInfo;

  /**
   * @public
   * <p>The name of the feature that generated a finding.</p>
   */
  FeatureName?: string;

  /**
   * @public
   * <p>Returns details from the malware scan that created a finding.</p>
   */
  EbsVolumeScanDetails?: EbsVolumeScanDetails;

  /**
   * @public
   * <p>Information about the process and any required context values for a specific
   *       finding</p>
   */
  RuntimeDetails?: RuntimeDetails;
}

/**
 * @public
 * <p>Contains information about the finding that is generated when abnormal or suspicious
 *       activity is detected.</p>
 */
export interface Finding {
  /**
   * @public
   * <p>The ID of the account in which the finding was generated.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The ARN of the finding.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The confidence score for the finding.</p>
   */
  Confidence?: number;

  /**
   * @public
   * <p>The time and date when the finding was created.</p>
   */
  CreatedAt: string | undefined;

  /**
   * @public
   * <p>The description of the finding.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the finding.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The partition associated with the finding.</p>
   */
  Partition?: string;

  /**
   * @public
   * <p>The Region where the finding was generated.</p>
   */
  Region: string | undefined;

  /**
   * @public
   * <p>Contains information about the Amazon Web Services resource associated with the activity that prompted
   *       GuardDuty to generate a finding.</p>
   */
  Resource: Resource | undefined;

  /**
   * @public
   * <p>The version of the schema used for the finding.</p>
   */
  SchemaVersion: string | undefined;

  /**
   * @public
   * <p>Contains additional information about the generated finding.</p>
   */
  Service?: Service;

  /**
   * @public
   * <p>The severity of the finding.</p>
   */
  Severity: number | undefined;

  /**
   * @public
   * <p>The title of the finding.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The type of finding.</p>
   */
  Type: string | undefined;

  /**
   * @public
   * <p>The time and date when the finding was last updated.</p>
   */
  UpdatedAt: string | undefined;
}

/**
 * @public
 * <p>Contains information about finding statistics.</p>
 */
export interface FindingStatistics {
  /**
   * @public
   * <p>Represents a map of severity to count statistics for a set of findings.</p>
   */
  CountBySeverity?: Record<string, number>;
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
   * @public
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface GetAdministratorAccountResponse {
  /**
   * @public
   * <p>The administrator account details.</p>
   */
  Administrator: Administrator | undefined;
}

/**
 * @public
 */
export interface GetCoverageStatisticsRequest {
  /**
   * @public
   * <p>The unique ID of the GuardDuty detector associated to the coverage statistics.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>Represents the criteria used to filter the coverage statistics</p>
   */
  FilterCriteria?: CoverageFilterCriteria;

  /**
   * @public
   * <p>Represents the statistics type used to aggregate the coverage details.</p>
   */
  StatisticsType: CoverageStatisticsType[] | undefined;
}

/**
 * @public
 */
export interface GetCoverageStatisticsResponse {
  /**
   * @public
   * <p>Represents the count aggregated by the <code>statusCode</code> and
   *         <code>resourceType</code>.</p>
   */
  CoverageStatistics?: CoverageStatistics;
}

/**
 * @public
 */
export interface GetDetectorRequest {
  /**
   * @public
   * <p>The unique ID of the detector that you want to get.</p>
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface GetDetectorResponse {
  /**
   * @public
   * <p>The timestamp of when the detector was created.</p>
   */
  CreatedAt?: string;

  /**
   * @public
   * <p>The publishing frequency of the finding.</p>
   */
  FindingPublishingFrequency?: FindingPublishingFrequency;

  /**
   * @public
   * <p>The GuardDuty service role.</p>
   */
  ServiceRole: string | undefined;

  /**
   * @public
   * <p>The detector status.</p>
   */
  Status: DetectorStatus | undefined;

  /**
   * @public
   * <p>The last-updated timestamp for the detector.</p>
   */
  UpdatedAt?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>Describes which data sources are enabled for the detector.</p>
   */
  DataSources?: DataSourceConfigurationsResult;

  /**
   * @public
   * <p>The tags of the detector resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>Describes the features that have been enabled for the detector.</p>
   */
  Features?: DetectorFeatureConfigurationResult[];
}

/**
 * @public
 */
export interface GetFilterRequest {
  /**
   * @public
   * <p>The unique ID of the detector that the filter is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The name of the filter you want to get.</p>
   */
  FilterName: string | undefined;
}

/**
 * @public
 */
export interface GetFilterResponse {
  /**
   * @public
   * <p>The name of the filter.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the filter.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  Action: FilterAction | undefined;

  /**
   * @public
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the
   *       order in which this filter is applied to the findings.</p>
   */
  Rank?: number;

  /**
   * @public
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   */
  FindingCriteria: FindingCriteria | undefined;

  /**
   * @public
   * <p>The tags of the filter resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * @public
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       retrieve.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The IDs of the findings that you want to retrieve.</p>
   */
  FindingIds: string[] | undefined;

  /**
   * @public
   * <p>Represents the criteria used for sorting findings.</p>
   */
  SortCriteria?: SortCriteria;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * @public
   * <p>A list of findings.</p>
   */
  Findings: Finding[] | undefined;
}

/**
 * @public
 */
export interface GetFindingsStatisticsRequest {
  /**
   * @public
   * <p>The ID of the detector that specifies the GuardDuty service whose findings' statistics you
   *       want to retrieve.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The types of finding statistics to retrieve.</p>
   */
  FindingStatisticTypes: FindingStatisticType[] | undefined;

  /**
   * @public
   * <p>Represents the criteria that is used for querying findings.</p>
   */
  FindingCriteria?: FindingCriteria;
}

/**
 * @public
 */
export interface GetFindingsStatisticsResponse {
  /**
   * @public
   * <p>The finding statistics object.</p>
   */
  FindingStatistics: FindingStatistics | undefined;
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
   * @public
   * <p>The number of received invitations.</p>
   */
  InvitationsCount?: number;
}

/**
 * @public
 */
export interface GetIPSetRequest {
  /**
   * @public
   * <p>The unique ID of the detector that the IPSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The unique ID of the IPSet to retrieve.</p>
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
   * @public
   * <p>The user-friendly name for the IPSet.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The format of the file that contains the IPSet.</p>
   */
  Format: IpSetFormat | undefined;

  /**
   * @public
   * <p>The URI of the file that contains the IPSet.</p>
   */
  Location: string | undefined;

  /**
   * @public
   * <p>The status of IPSet file that was uploaded.</p>
   */
  Status: IpSetStatus | undefined;

  /**
   * @public
   * <p>The tags of the IPSet resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetMalwareScanSettingsRequest {
  /**
   * @public
   * <p>The unique ID of the detector that the scan setting is associated with.</p>
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
 * @public
 * <p>Represents the <code>key:value</code> pair to be matched against given resource property.</p>
 */
export interface ScanConditionPair {
  /**
   * @public
   * <p>Represents the <b>key</b> in the map condition.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Represents optional <b>value</b> in the map
   *       condition. If not specified, only the <b>key</b> will be
   *       matched.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Contains information about the condition.</p>
 */
export interface ScanCondition {
  /**
   * @public
   * <p>Represents an <i>mapEqual</i>
   *             <b></b> condition to be applied
   *       to a single field when triggering for malware scan.</p>
   */
  MapEquals: ScanConditionPair[] | undefined;
}

/**
 * @public
 * <p>Contains information about criteria used to filter resources before triggering malware
 *       scan.</p>
 */
export interface ScanResourceCriteria {
  /**
   * @public
   * <p>Represents condition that when matched will allow a malware scan for a certain
   *       resource.</p>
   */
  Include?: Partial<Record<ScanCriterionKey, ScanCondition>>;

  /**
   * @public
   * <p>Represents condition that when matched will prevent a malware scan for a certain
   *       resource.</p>
   */
  Exclude?: Partial<Record<ScanCriterionKey, ScanCondition>>;
}

/**
 * @public
 */
export interface GetMalwareScanSettingsResponse {
  /**
   * @public
   * <p>Represents the criteria to be used in the filter for scanning resources.</p>
   */
  ScanResourceCriteria?: ScanResourceCriteria;

  /**
   * @public
   * <p>An enum value representing possible snapshot preservation settings.</p>
   */
  EbsSnapshotPreservation?: EbsSnapshotPreservation;
}

/**
 * @public
 */
export interface GetMasterAccountRequest {
  /**
   * @public
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;
}

/**
 * @public
 * <p>Contains information about the administrator account and invitation.</p>
 */
export interface Master {
  /**
   * @public
   * <p>The ID of the account used as the administrator account.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The value used to validate the administrator account to the member account.</p>
   */
  InvitationId?: string;

  /**
   * @public
   * <p>The status of the relationship between the administrator and member accounts.</p>
   */
  RelationshipStatus?: string;

  /**
   * @public
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;
}

/**
 * @public
 */
export interface GetMasterAccountResponse {
  /**
   * @public
   * <p>The administrator account details.</p>
   */
  Master: Master | undefined;
}

/**
 * @public
 */
export interface GetMemberDetectorsRequest {
  /**
   * @public
   * <p>The detector ID for the administrator account.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The account ID of the member account.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 * <p>Information about the additional configuration for the member account.</p>
 */
export interface MemberAdditionalConfigurationResult {
  /**
   * @public
   * <p>Indicates the name of the additional configuration that is set for the member
   *       account.</p>
   */
  Name?: OrgFeatureAdditionalConfiguration;

  /**
   * @public
   * <p>Indicates the status of the additional configuration that is set for the member
   *       account.</p>
   */
  Status?: FeatureStatus;

  /**
   * @public
   * <p>The timestamp at which the additional configuration was set for the member account. This
   *       is in UTC format.</p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 * <p>Contains information about the features for the member account.</p>
 */
export interface MemberFeaturesConfigurationResult {
  /**
   * @public
   * <p>Indicates the name of the feature that is enabled for the detector.</p>
   */
  Name?: OrgFeature;

  /**
   * @public
   * <p>Indicates the status of the feature that is enabled for the detector.</p>
   */
  Status?: FeatureStatus;

  /**
   * @public
   * <p>The timestamp at which the feature object was updated.</p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p>Indicates the additional configuration of the feature that is configured for the member
   *       account.</p>
   */
  AdditionalConfiguration?: MemberAdditionalConfigurationResult[];
}

/**
 * @public
 * <p>Contains information on which data sources are enabled for a member account.</p>
 */
export interface MemberDataSourceConfiguration {
  /**
   * @public
   * <p>The account ID for the member account.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>Contains information on the status of data sources for the account.</p>
   */
  DataSources?: DataSourceConfigurationsResult;

  /**
   * @public
   * <p>Contains information about the status of the features for the member account.</p>
   */
  Features?: MemberFeaturesConfigurationResult[];
}

/**
 * @public
 */
export interface GetMemberDetectorsResponse {
  /**
   * @public
   * <p>An object that describes which data sources are enabled for a member account.</p>
   */
  MemberDataSourceConfigurations: MemberDataSourceConfiguration[] | undefined;

  /**
   * @public
   * <p>A list of member account IDs that were unable to be processed along with an explanation
   *       for why they were not processed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface GetMembersRequest {
  /**
   * @public
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to
   *       retrieve.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>A list of account IDs of the GuardDuty member accounts that you want to describe.</p>
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 * <p>Contains information about the member account. </p>
 */
export interface Member {
  /**
   * @public
   * <p>The ID of the member account.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The detector ID of the member account.</p>
   */
  DetectorId?: string;

  /**
   * @public
   * <p>The administrator account ID.</p>
   */
  MasterId: string | undefined;

  /**
   * @public
   * <p>The email address of the member account.</p>
   */
  Email: string | undefined;

  /**
   * @public
   * <p>The status of the relationship between the member and the administrator.</p>
   */
  RelationshipStatus: string | undefined;

  /**
   * @public
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;

  /**
   * @public
   * <p>The last-updated timestamp of the member.</p>
   */
  UpdatedAt: string | undefined;

  /**
   * @public
   * <p>The administrator account ID.</p>
   */
  AdministratorId?: string;
}

/**
 * @public
 */
export interface GetMembersResponse {
  /**
   * @public
   * <p>A list of members.</p>
   */
  Members: Member[] | undefined;

  /**
   * @public
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface GetRemainingFreeTrialDaysRequest {
  /**
   * @public
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>A list of account identifiers of the GuardDuty member account.</p>
   */
  AccountIds?: string[];
}

/**
 * @public
 */
export interface GetRemainingFreeTrialDaysResponse {
  /**
   * @public
   * <p>The member accounts which were included in a request and were processed
   *       successfully.</p>
   */
  Accounts?: AccountFreeTrialInfo[];

  /**
   * @public
   * <p>The member account that was included in a request but for which the request could not be
   *       processed.</p>
   */
  UnprocessedAccounts?: UnprocessedAccount[];
}

/**
 * @public
 */
export interface GetThreatIntelSetRequest {
  /**
   * @public
   * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The unique ID of the threatIntelSet that you want to get.</p>
   */
  ThreatIntelSetId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ThreatIntelSetStatus = {
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
export type ThreatIntelSetStatus = (typeof ThreatIntelSetStatus)[keyof typeof ThreatIntelSetStatus];

/**
 * @public
 */
export interface GetThreatIntelSetResponse {
  /**
   * @public
   * <p>A user-friendly ThreatIntelSet name displayed in all findings that are generated by
   *       activity that involves IP addresses included in this ThreatIntelSet.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The format of the threatIntelSet.</p>
   */
  Format: ThreatIntelSetFormat | undefined;

  /**
   * @public
   * <p>The URI of the file that contains the ThreatIntelSet. </p>
   */
  Location: string | undefined;

  /**
   * @public
   * <p>The status of threatIntelSet file uploaded.</p>
   */
  Status: ThreatIntelSetStatus | undefined;

  /**
   * @public
   * <p>The tags of the threat list resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const UsageFeature = {
  CLOUD_TRAIL: "CLOUD_TRAIL",
  DNS_LOGS: "DNS_LOGS",
  EBS_MALWARE_PROTECTION: "EBS_MALWARE_PROTECTION",
  EKS_AUDIT_LOGS: "EKS_AUDIT_LOGS",
  EKS_RUNTIME_MONITORING: "EKS_RUNTIME_MONITORING",
  FLOW_LOGS: "FLOW_LOGS",
  LAMBDA_NETWORK_LOGS: "LAMBDA_NETWORK_LOGS",
  RDS_LOGIN_EVENTS: "RDS_LOGIN_EVENTS",
  S3_DATA_EVENTS: "S3_DATA_EVENTS",
} as const;

/**
 * @public
 */
export type UsageFeature = (typeof UsageFeature)[keyof typeof UsageFeature];

/**
 * @public
 * <p>Contains information about the criteria used to query usage statistics.</p>
 */
export interface UsageCriteria {
  /**
   * @public
   * <p>The account IDs to aggregate usage statistics from.</p>
   */
  AccountIds?: string[];

  /**
   * @public
   * @deprecated
   *
   * <p>The data sources to aggregate usage statistics from.</p>
   */
  DataSources?: DataSource[];

  /**
   * @public
   * <p>The resources to aggregate usage statistics from. Only accepts exact resource
   *       names.</p>
   */
  Resources?: string[];

  /**
   * @public
   * <p>The features to aggregate usage statistics from.</p>
   */
  Features?: UsageFeature[];
}

/**
 * @public
 * @enum
 */
export const UsageStatisticType = {
  SUM_BY_ACCOUNT: "SUM_BY_ACCOUNT",
  SUM_BY_DATA_SOURCE: "SUM_BY_DATA_SOURCE",
  SUM_BY_FEATURES: "SUM_BY_FEATURES",
  SUM_BY_RESOURCE: "SUM_BY_RESOURCE",
  TOP_RESOURCES: "TOP_RESOURCES",
} as const;

/**
 * @public
 */
export type UsageStatisticType = (typeof UsageStatisticType)[keyof typeof UsageStatisticType];

/**
 * @public
 */
export interface GetUsageStatisticsRequest {
  /**
   * @public
   * <p>The ID of the detector that specifies the GuardDuty service whose usage statistics you
   *       want to retrieve.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The type of usage statistics to retrieve.</p>
   */
  UsageStatisticType: UsageStatisticType | undefined;

  /**
   * @public
   * <p>Represents the criteria used for querying usage.</p>
   */
  UsageCriteria: UsageCriteria | undefined;

  /**
   * @public
   * <p>The currency unit you would like to view your usage statistics in. Current valid values
   *       are USD.</p>
   */
  Unit?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *       NextToken value returned from the previous request to continue listing results after the first
   *       page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains the total usage with the corresponding currency unit for that value.</p>
 */
export interface Total {
  /**
   * @public
   * <p>The total usage.</p>
   */
  Amount?: string;

  /**
   * @public
   * <p>The currency unit that the amount is given in.</p>
   */
  Unit?: string;
}

/**
 * @public
 * <p>Contains information on the total of usage based on account IDs.</p>
 */
export interface UsageAccountResult {
  /**
   * @public
   * <p>The Account ID that generated usage.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Represents the total of usage for the Account ID.</p>
   */
  Total?: Total;
}

/**
 * @public
 * <p>Contains information on the result of usage based on data source type.</p>
 */
export interface UsageDataSourceResult {
  /**
   * @public
   * <p>The data source type that generated usage.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
   * <p>Represents the total of usage for the specified data source.</p>
   */
  Total?: Total;
}

/**
 * @public
 * <p>Contains information about the result of the total usage based on the feature.</p>
 */
export interface UsageFeatureResult {
  /**
   * @public
   * <p>The feature that generated the usage cost.</p>
   */
  Feature?: UsageFeature;

  /**
   * @public
   * <p>Contains the total usage with the corresponding currency unit for that value.</p>
   */
  Total?: Total;
}

/**
 * @public
 * <p>Contains information on the sum of usage based on an Amazon Web Services resource.</p>
 */
export interface UsageResourceResult {
  /**
   * @public
   * <p>The Amazon Web Services resource that generated usage.</p>
   */
  Resource?: string;

  /**
   * @public
   * <p>Represents the sum total of usage for the specified resource type.</p>
   */
  Total?: Total;
}

/**
 * @public
 * <p>Contains the result of GuardDuty usage. If a UsageStatisticType is provided the result for
 *       other types will be null. </p>
 */
export interface UsageStatistics {
  /**
   * @public
   * <p>The usage statistic sum organized by account ID.</p>
   */
  SumByAccount?: UsageAccountResult[];

  /**
   * @public
   * <p>The usage statistic sum organized by on data source.</p>
   */
  SumByDataSource?: UsageDataSourceResult[];

  /**
   * @public
   * <p>The usage statistic sum organized by resource.</p>
   */
  SumByResource?: UsageResourceResult[];

  /**
   * @public
   * <p>Lists the top 50 resources that have generated the most GuardDuty usage, in order from
   *       most to least expensive.</p>
   */
  TopResources?: UsageResourceResult[];

  /**
   * @public
   * <p>The usage statistic sum organized by feature.</p>
   */
  SumByFeature?: UsageFeatureResult[];
}

/**
 * @public
 */
export interface GetUsageStatisticsResponse {
  /**
   * @public
   * <p>The usage statistics object. If a UsageStatisticType was provided, the objects
   *       representing other types will be null.</p>
   */
  UsageStatistics?: UsageStatistics;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface InviteMembersRequest {
  /**
   * @public
   * <p>The unique ID of the detector of the GuardDuty account that you want to invite members
   *       with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>A list of account IDs of the accounts that you want to invite to GuardDuty as
   *       members.</p>
   */
  AccountIds: string[] | undefined;

  /**
   * @public
   * <p>A Boolean value that specifies whether you want to disable email notification to the
   *       accounts that you are inviting to GuardDuty as members.</p>
   */
  DisableEmailNotification?: boolean;

  /**
   * @public
   * <p>The invitation message that you want to send to the accounts that you're inviting to
   *       GuardDuty as members.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface InviteMembersResponse {
  /**
   * @public
   * <p>A list of objects that contain the unprocessed account and a result string that explains
   *       why it was unprocessed.</p>
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface ListCoverageRequest {
  /**
   * @public
   * <p>The unique ID of the detector whose coverage details you want to retrieve.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *       NextToken value returned from the previous request to continue listing results after the first
   *       page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Represents the criteria used to filter the coverage details.</p>
   */
  FilterCriteria?: CoverageFilterCriteria;

  /**
   * @public
   * <p>Represents the criteria used to sort the coverage details.</p>
   */
  SortCriteria?: CoverageSortCriteria;
}

/**
 * @public
 */
export interface ListCoverageResponse {
  /**
   * @public
   * <p>A list of resources and their attributes providing cluster details.</p>
   */
  Resources: CoverageResource[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDetectorsRequest {
  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDetectorsResponse {
  /**
   * @public
   * <p>A list of detector IDs.</p>
   */
  DetectorIds: string[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFiltersRequest {
  /**
   * @public
   * <p>The unique ID of the detector that the filter is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFiltersResponse {
  /**
   * @public
   * <p>A list of filter names.</p>
   */
  FilterNames: string[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * @public
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
   *       list.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>Represents the criteria used for querying findings. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>JSON field name</p>
   *             </li>
   *             <li>
   *                <p>accountId</p>
   *             </li>
   *             <li>
   *                <p>region</p>
   *             </li>
   *             <li>
   *                <p>confidence</p>
   *             </li>
   *             <li>
   *                <p>id</p>
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
   *                <p>resource.instanceDetails.tags.key</p>
   *             </li>
   *             <li>
   *                <p>resource.instanceDetails.tags.value</p>
   *             </li>
   *             <li>
   *                <p>resource.resourceType</p>
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
   *                <p>service.action.awsApiCallAction.remoteIpDetails.city.cityName</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.country.countryName</p>
   *             </li>
   *             <li>
   *                <p>service.action.awsApiCallAction.remoteIpDetails.ipAddressV4</p>
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
   *                <p>service.action.networkConnectionAction.remoteIpDetails.country.countryName</p>
   *             </li>
   *             <li>
   *                <p>service.action.networkConnectionAction.remoteIpDetails.ipAddressV4</p>
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
   *                <p>service.additionalInfo.threatListName</p>
   *             </li>
   *             <li>
   *                <p>service.archived</p>
   *                <p>When this attribute is set to 'true', only archived findings are listed. When it's set
   *           to 'false', only unarchived findings are listed. When this attribute is not set, all
   *           existing findings are listed.</p>
   *             </li>
   *             <li>
   *                <p>service.resourceRole</p>
   *             </li>
   *             <li>
   *                <p>severity</p>
   *             </li>
   *             <li>
   *                <p>type</p>
   *             </li>
   *             <li>
   *                <p>updatedAt</p>
   *                <p>Type: Timestamp in Unix Epoch millisecond format: 1486685375000</p>
   *             </li>
   *          </ul>
   */
  FindingCriteria?: FindingCriteria;

  /**
   * @public
   * <p>Represents the criteria used for sorting findings.</p>
   */
  SortCriteria?: SortCriteria;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * @public
   * <p>The IDs of the findings that you're listing.</p>
   */
  FindingIds: string[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains information about the invitation to become a member account.</p>
 */
export interface Invitation {
  /**
   * @public
   * <p>The ID of the account that the invitation was sent from.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The ID of the invitation. This value is used to validate the inviter account to the member
   *       account.</p>
   */
  InvitationId?: string;

  /**
   * @public
   * <p>The status of the relationship between the inviter and invitee accounts.</p>
   */
  RelationshipStatus?: string;

  /**
   * @public
   * <p>The timestamp when the invitation was sent.</p>
   */
  InvitedAt?: string;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * @public
   * <p>A list of invitation descriptions.</p>
   */
  Invitations?: Invitation[];

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIPSetsRequest {
  /**
   * @public
   * <p>The unique ID of the detector that the IPSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIPSetsResponse {
  /**
   * @public
   * <p>The IDs of the IPSet resources.</p>
   */
  IpSetIds: string[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * @public
   * <p>The unique ID of the detector the member is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter when paginating results. Set the value of this parameter to
   *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
   *       in the request with the value of NextToken from the previous response to continue listing
   *       data.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies whether to only return associated members or to return all members (including
   *       members who haven't been invited yet or have been disassociated). Member accounts must have
   *       been previously associated with the GuardDuty administrator account using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html">
   *                <code>Create
   *           Members</code>
   *             </a>. </p>
   */
  OnlyAssociated?: string;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * @public
   * <p>A list of members.</p>
   */
  Members?: Member[];

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * @public
   * <p>A list of accounts configured as GuardDuty delegated administrators.</p>
   */
  AdminAccounts?: AdminAccount[];

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPublishingDestinationsRequest {
  /**
   * @public
   * <p>The ID of the detector to retrieve publishing destinations for.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPublishingDestinationsResponse {
  /**
   * @public
   * <p>A <code>Destinations</code> object that includes information about each publishing
   *       destination returned.</p>
   */
  Destinations: Destination[] | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of
   *       this parameter to null for the first request to a list action. For subsequent calls, use the
   *         <code>NextToken</code> value returned from the previous request to continue listing results
   *       after the first page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the given GuardDuty resource. </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListThreatIntelSetsRequest {
  /**
   * @public
   * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
   */
  DetectorId: string | undefined;

  /**
   * @public
   * <p>You can use this parameter to indicate the maximum number of items that you want in the
   *       response. The default value is 50. The maximum value is 50.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>You can use this parameter to paginate results in the response. Set the value of this
   *       parameter to null on your first call to the list action. For subsequent calls to the action,
   *       fill nextToken in the request with the value of NextToken from the previous response to
   *       continue listing data.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListThreatIntelSetsResponse {
  /**
   * @public
   * <p>The IDs of the ThreatIntelSet resources.</p>
   */
  ThreatIntelSetIds: string[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *       items.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface StartMalwareScanRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the resource for which you invoked the API.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface StartMalwareScanResponse {
  /**
   * @public
   * <p>A unique identifier that gets generated when you invoke the API without any error. Each malware scan has
   *       a corresponding scan ID. Using this scan ID, you can monitor the status of your malware scan.</p>
   */
  ScanId?: string;
}
